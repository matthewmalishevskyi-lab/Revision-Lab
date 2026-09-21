// "Bring back the questions you got wrong": the schedule, the reader, the
// delete, and the wiring — without a real database.
//
// ⚠️ WHAT THIS GUARDS, AND WHY EACH PART IS HERE.
//   - foldQuestion is the whole feature. A question you got right first time
//     must never enter the list, or it fills with things nobody needs and the
//     genuine mistakes drown.
//   - getDueQuestions reads newest-first and REVERSES. flashcard-review.ts
//     shipped without the reverse once; the check below would fail if this
//     one ever did the same, because it is built on a history where the two
//     orders give different answers.
//   - The table may not exist yet. Every path must degrade to "nothing to
//     show", and deleting must not report failure for rows that never existed.

import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createRequire } from "node:module";

const require_ = createRequire(import.meta.url);
const out = mkdtempSync(join(tmpdir(), "question-review-check-"));
let checks = 0, failures = 0;
function expect(ok, message) {
  checks += 1;
  if (!ok) { failures += 1; console.error(`  FAIL: ${message}`); }
}

const MIN = 60 * 1000, HOUR = 60 * MIN, DAY = 24 * HOUR;

try {
  execFileSync(process.execPath, [
    "node_modules/typescript/bin/tsc",
    "app/lib/question-review.ts", "app/lib/revisit.ts",
    "--outDir", out, "--module", "commonjs", "--target", "es2020",
    "--moduleResolution", "node", "--skipLibCheck", "--jsx", "preserve",
  ], { stdio: "inherit" });

  // Configured BEFORE the module loads: it reads the environment once, at the
  // top, exactly as it does on Vercel.
  process.env.SUPABASE_URL = "https://fake.supabase.test";
  process.env.SUPABASE_SERVICE_ROLE_KEY = "sb_secret_fake";
  const calls = [];
  let respond = () => new Response("[]", { status: 200 });
  globalThis.fetch = async (url, init = {}) => {
    calls.push({ url: String(url), method: init.method ?? "GET", body: init.body });
    return respond(String(url), init);
  };

  const qr = require_(join(out, "question-review.js"));
  const { buildRevisitSet, MAX_REVISIT } = require_(join(out, "revisit.js"));
  const { TOPIC_CONTENT } = require_(join(out, "content", "index.js"));
  const { foldQuestion, MAX_BOX } = qr;

  // ── foldQuestion ──────────────────────────────────────────────────────────
  const ev = (...xs) => xs.map(([c, at]) => ({ correct: c, at }));
  expect(!foldQuestion([]).everWrong, "an empty history counts as wrong");
  expect(!foldQuestion(ev([true, 0], [true, DAY], [true, 2 * DAY])).everWrong,
    "a question only ever answered correctly entered the list — it would drown the real mistakes");
  {
    const s = foldQuestion(ev([true, 0], [true, DAY], [false, 2 * DAY]));
    expect(s.everWrong && s.box === 1, "a first mistake does not start at box 1");
    expect(s.dueAt === 2 * DAY + 10 * MIN, `a fresh mistake is due ${(s.dueAt - 2 * DAY) / MIN} min later, not 10`);
  }
  {
    // Right answers BEFORE the first mistake must not climb anything.
    const s = foldQuestion(ev([true, 0], [true, 1], [true, 2], [false, 3], [true, 4]));
    expect(s.box === 2, `right answers before the first mistake were counted: box ${s.box}, expected 2`);
    expect(s.dueAt === 4 + DAY, "box 2 is not a day");
  }
  {
    const hist = [[false, 0]];
    for (let i = 1; i <= 12; i++) hist.push([true, i * DAY]);
    const s = foldQuestion(ev(...hist));
    expect(s.box === MAX_BOX, `twelve right in a row climbed to box ${s.box}, not the top (${MAX_BOX})`);
    expect(s.dueAt === 12 * DAY + 16 * DAY, "the top box is not 16 days — it must come back, not retire");
  }
  {
    const s = foldQuestion(ev([false, 0], [true, 1], [true, 2], [true, 3], [false, 4]));
    expect(s.box === 1, `a wrong answer from box 4 fell to box ${s.box}, not all the way back to 1`);
  }
  {
    // Same intervals as flashcards, on purpose — see the file's header.
    const fc = readFileSync("app/lib/flashcard-review.ts", "utf8");
    const qs = readFileSync("app/lib/question-review.ts", "utf8");
    const intervals = (src) => (src.match(/BOX_INTERVALS_MS = \[([\s\S]*?)\];/)?.[1] ?? "").replace(/\/\/.*$/gm, "").replace(/\s+/g, "");
    expect(intervals(fc) !== "" && intervals(fc) === intervals(qs),
      "question review and flashcards now use different intervals — two answers to 'when will I see this again'");
  }

  // ── A real question to test against ───────────────────────────────────────
  let real = null;
  for (const [key, content] of Object.entries(TOPIC_CONTENT)) {
    const qs = (content.practice ?? []).filter((q) => q.accept);
    if (key.startsWith("maths/") && qs.length >= 8) { real = { key, qs }; break; }
  }
  expect(real !== null, "no maths topic with eight auto-marked questions — the checks below cannot run");
  const [subject, topic] = real.key.split("/");
  const Q = real.qs.map((q) => q.question);

  // ── getDueQuestions ───────────────────────────────────────────────────────
  const NOW = Date.UTC(2026, 8, 21, 12);
  const row = (question, correct, ago) => ({
    subject, topic, question, correct, created_at: new Date(NOW - ago).toISOString(),
  });
  // Written OLDEST first here, then reversed to match what PostgREST returns
  // for order=created_at.desc.
  const history = [
    row(Q[0], false, 3 * DAY), row(Q[0], true, 2 * DAY),    // box 2, due 1 day ago    → due
    row(Q[1], false, 3 * DAY), row(Q[1], true, 1 * HOUR),   // box 2, due in 23 hours  → not due
                                                             // (reversed wrongly: box 1, due → the reverse bug)
    row(Q[2], true, 5 * DAY), row(Q[2], true, 4 * DAY),     // never wrong             → never listed
    row(Q[3], false, 20 * MIN),                             // box 1, due 10 min ago   → due, most overdue? no
    row("A question that has since been reworded", false, 5 * DAY), // gone from content → skipped
  ];
  respond = () => new Response(JSON.stringify([...history].reverse()), { status: 200 });
  calls.length = 0;
  const due = await qr.getDueQuestions("user-1", NOW);
  const dueQs = due.map((d) => d.question);
  expect(dueQs.includes(Q[0]), "an overdue wrong question was not listed");
  expect(!dueQs.includes(Q[1]), "a question answered right an hour ago is due already — the newest-first rows were not reversed");
  expect(!dueQs.includes(Q[2]), "a question never answered wrong was listed");
  expect(dueQs.includes(Q[3]), "a mistake from twenty minutes ago is not back after ten");
  expect(!dueQs.includes("A question that has since been reworded"), "a question no longer in the content was listed");
  expect(dueQs.indexOf(Q[0]) < dueQs.indexOf(Q[3]), "not most-overdue first");
  expect(calls[0]?.url.includes("order=created_at.desc"), "not read newest-first — a heavy user's recent history would be the part cut off");
  expect(calls[0]?.url.includes("user_id=eq.user-1"), "the read is not scoped to the user");

  const quiet = console.error; console.error = () => {};
  respond = () => new Response('{"code":"PGRST205"}', { status: 404 });
  expect((await qr.getDueQuestions("user-1", NOW)).length === 0, "a missing table did not degrade to an empty list");
  respond = () => { throw new Error("network down"); };
  expect((await qr.getDueQuestions("user-1", NOW)).length === 0, "a network failure threw instead of giving an empty list");
  console.error = quiet;

  // ── recordQuestionReview never throws ─────────────────────────────────────
  {
    let threw = false;
    const origError = console.error; console.error = () => {};
    try { await qr.recordQuestionReview({ userId: "u", subject, topic, question: Q[0], correct: false }); }
    catch { threw = true; }
    respond = () => new Response('{"code":"PGRST205"}', { status: 404 });
    try { await qr.recordQuestionReview({ userId: "u", subject, topic, question: Q[0], correct: false }); }
    catch { threw = true; }
    console.error = origError;
    expect(!threw, "a refused review insert threw — it would take the student's recorded answer down with it");
  }

  // ── deleteAllQuestionReviews ──────────────────────────────────────────────
  {
    const origError = console.error; console.error = () => {};
    calls.length = 0;
    respond = () => new Response(null, { status: 204 });
    expect(await qr.deleteAllQuestionReviews("a b&c") === true, "a successful delete reported failure");
    expect(calls[0]?.method === "DELETE", "the delete is not a DELETE");
    expect(calls[0]?.url.includes("user_id=eq.a%20b%26c"), "the user id is not encoded — a crafted id could widen the filter");
    respond = () => new Response('{"code":"PGRST205","message":"Could not find the table"}', { status: 404 });
    expect(await qr.deleteAllQuestionReviews("u") === true,
      "a missing table reported failure — every 'delete my progress' would say some history survived when none existed");
    respond = () => new Response('{"message":"boom"}', { status: 500 });
    expect(await qr.deleteAllQuestionReviews("u") === false, "a genuinely refused delete reported success");
    console.error = origError;
  }

  // ── buildRevisitSet ───────────────────────────────────────────────────────
  {
    const many = Q.slice(0, 8).map((question, i) => ({ subjectSlug: subject, topicSlug: topic, question, box: 1, dueAt: i }));
    const set = buildRevisitSet(many, "2026-09-21");
    expect(set.questions.length === MAX_REVISIT, `${set.questions.length} revisit questions, not capped at ${MAX_REVISIT}`);
    expect(set.questions.every((q, i) => q.question === Q[i]), "revisit order is not most-overdue first");
    expect(set.questions.every((q) => !q.selfMarked && q.accept?.length), "a revisit question cannot be marked");
    const skip = buildRevisitSet(many, "2026-09-21", new Set([Q[0], Q[1]]));
    expect(!skip.questions.some((q) => q.question === Q[0] || q.question === Q[1]),
      "a question already in today's set is asked again above it");
    expect(skip.questions.length === MAX_REVISIT, "skipping duplicates left the revisit list short when more were due");
    expect(buildRevisitSet([], "2026-09-21").questions.length === 0, "an empty due list produced questions");
    const ghost = buildRevisitSet([{ subjectSlug: subject, topicSlug: topic, question: "gone", box: 1, dueAt: 0 }], "d");
    expect(ghost.questions.length === 0, "a question missing from the content was turned into a revisit question");
  }

  // ── Wiring ────────────────────────────────────────────────────────────────
  const strip = (s) => s.replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "");
  for (const [file, arg] of [
    ["app/components/Practice.tsx", "question.question"],
    ["app/components/MockExam.tsx", "question.question"],
    ["app/today/DailyPracticeRunner.tsx", "q.question"],
  ]) {
    const src = strip(readFileSync(file, "utf8"));
    const call = src.match(/recordAnswer\(([^)]*)\)/)?.[1] ?? "";
    expect(call.includes(arg), `${file} does not pass the question to recordAnswer — its mistakes are never remembered`);
  }
  const actions = strip(readFileSync("app/lib/progress-actions.ts", "utf8"));
  expect(/isRealQuestion\(subject, topic, question\)/.test(actions),
    "recordAnswer stores the question text without checking it exists — any string could be written");
  expect(/allSettled/.test(actions), "the two writes are not independent — a missing review table could cost the recorded answer");
  expect(/deleteAllQuestionReviews\(user\.id\)/.test(actions.slice(actions.indexOf("deleteMyProgress"))),
    "'delete my progress' leaves the wrong-answer history behind");
  const sql = readFileSync("QUESTION_REVIEW_SETUP.sql", "utf8");
  expect(/enable row level security/i.test(sql), "question_reviews is created without RLS");
  expect(/revoke[\s\S]*from\s+anon/i.test(sql), "question_reviews is readable with the public key");
  expect(/notify pgrst/i.test(sql), "no schema reload — the table would 404 (PGRST205) until someone found out why");
} finally {
  rmSync(out, { recursive: true, force: true });
}

if (failures) {
  console.error(`\n${failures} of ${checks} question-review checks FAILED.`);
  process.exit(1);
}
console.log(`All ${checks} question-review checks passed.`);
