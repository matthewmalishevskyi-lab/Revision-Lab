// Exam boards per subject (app/lib/examBoards.ts) and every place that hides
// a topic because of one.
//
// The two mistakes are not the same size. Showing a topic that isn't on a
// student's paper costs ten minutes; HIDING one that is costs marks, and they
// never find out it was there. So most of what follows checks the second one:
// nothing hidden that the research did not name, nothing hidden in Year 9,
// every lookup failing open, and every hiding still reachable and explained.

import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, readdirSync, rmSync, statSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createRequire } from "node:module";

const require_ = createRequire(import.meta.url);
const out = mkdtempSync(join(tmpdir(), "exam-board-check-"));
let checks = 0, failures = 0;
const expect = (ok, msg) => { checks++; if (!ok) { failures++; if (failures <= 30) console.error(`  FAIL: ${msg}`); } };

// Comments say what code must NOT do, in the code's own words — three times in
// this project a rule has passed by reading its own explanation. Rules about
// source read the code with the comments taken out.
const stripComments = (src) => src.replace(/\/\*[\s\S]*?\*\//g, "").replace(/(^|[^:"'`\\])\/\/[^\n]*/g, "$1").replace(/\{\s*\}/g, "{}");
const code = (path) => stripComments(readFileSync(path, "utf8"));

try {
  execFileSync(process.execPath, [
    require_.resolve("typescript/bin/tsc"), "app/lib/examBoards.ts", "app/lib/subjects.ts", "--outDir", out,
    "--module", "commonjs", "--target", "es2020", "--skipLibCheck",
  ], { stdio: "inherit" });
  const B = require_(join(out, "examBoards.js"));
  const { SUBJECTS } = require_(join(out, "subjects.js"));
  const { BOARDS, BOARD_ONLY, BOARD_SUBJECTS, SAME_ON_EVERY_BOARD, onBoard, whyNotOnBoard, hiddenTopicKeys, hiddenCount, isBoardChoice, asksForBoard } = B;

  const bySlug = new Map(SUBJECTS.map((s) => [s.slug, s]));

  // ── what Matthew chose ──────────────────────────────────────────────────────
  expect(JSON.stringify([...BOARDS]) === JSON.stringify(["aqa", "edexcel", "ocr", "eduqas"]), `boards are ${BOARDS} — Matthew chose AQA, Edexcel, OCR and Eduqas`);
  for (const slug of BOARD_SUBJECTS) expect(bySlug.has(slug), `"${slug}" asks for a board but is not a subject`);
  for (const slug of ["history", "english", "religious-education", "geography", "computer-science", "business", "maths", "biology", "chemistry", "physics"]) {
    expect(asksForBoard(slug), `${slug} should ask for a board (Matthew: the subjects that differ, plus Maths and the sciences)`);
  }
  for (const slug of ["spanish", "french", "german", "physical-education", "citizenship"]) {
    expect(!asksForBoard(slug), `${slug} asks for a board, but its boards were never checked topic by topic`);
  }

  // ── every hiding is a real, GCSE, researched topic ─────────────────────────
  const keys = Object.keys(BOARD_ONLY);
  expect(keys.length >= 8 && keys.length <= 20, `${keys.length} board-only topics — the research found 8; a big jump means something was tagged by guesswork`);
  for (const [key, e] of Object.entries(BOARD_ONLY)) {
    const [subjectSlug, topicSlug] = key.split("/");
    const subject = bySlug.get(subjectSlug);
    const group = subject?.years.find((g) => g.topics.some((t) => t.slug === topicSlug));
    expect(Boolean(group), `${key} is board-only but is not a topic — a renamed slug would silently stop hiding, or hide nothing`);
    expect(asksForBoard(subjectSlug), `${key} is board-only, but ${subjectSlug} never asks for a board`);
    expect(!SAME_ON_EVERY_BOARD.has(subjectSlug), `${key} is board-only in a subject the page tells students is the same on every board`);
    // ⚠️ Year 9 is Key Stage 3 — no board's GCSE — so hiding anything there
    // would be hiding it from everyone for no reason.
    expect(group?.year !== "Year 9", `${key} is in Year 9, which is KS3 and must never be hidden`);
    expect(Array.isArray(e.boards) && e.boards.length >= 1 && e.boards.length < BOARDS.length, `${key} lists ${e.boards?.length} boards — between 1 and 3, or it hides nothing (or everything)`);
    expect(new Set(e.boards).size === e.boards.length && e.boards.every((b) => BOARDS.includes(b)), `${key} has a repeated or unknown board`);
    expect(typeof e.why === "string" && e.why.length >= 40 && e.why.length <= 220, `${key}'s reason is ${e.why?.length} characters — a student is owed a real sentence`);
    expect(Array.isArray(e.sources) && e.sources.length >= 2 && e.sources.every((u) => /^https:\/\/[^\s]+$/.test(u)), `${key} must cite the specifications it was checked against`);
  }

  // Named cases, so the data cannot be quietly swapped or lost.
  const named = [
    ["computer-science", "programming-file-handling", "aqa", false], ["computer-science", "programming-file-handling", "ocr", true],
    ["computer-science", "databases", "aqa", true], ["computer-science", "databases", "edexcel", false], ["computer-science", "databases", "eduqas", false],
    ["history", "crime-and-punishment", "aqa", false], ["history", "crime-and-punishment", "edexcel", true],
    ["history", "norman-england-1066-1100", "eduqas", false], ["history", "conflict-and-tension-1918-1939", "edexcel", false],
    ["history", "germany-1890-1945", "edexcel", true], ["history", "medicine-through-time", "aqa", true],
    ["religious-education", "peace-and-conflict", "eduqas", false], ["religious-education", "crime-and-punishment", "ocr", false],
    ["religious-education", "christian-beliefs", "ocr", true],
    ["geography", "natural-hazards", "eduqas", true], ["english", "a-shakespeare-play", "edexcel", true], ["maths", "circle-theorems", "ocr", true],
  ];
  // a named case must be a REAL topic, or "shown" passes by failing open
  for (const [s, t] of named) expect(bySlug.get(s)?.years.some((g) => g.topics.some((x) => x.slug === t)), `named case ${s}/${t} is not a topic`);
  for (const [s, t, b, want] of named) expect(onBoard(s, t, b) === want, `${s}/${t} on ${b} should be ${want ? "SHOWN" : "hidden"}`);

  // ── it fails OPEN ──────────────────────────────────────────────────────────
  for (const choice of [null, undefined, "none"]) {
    for (const key of keys) { const [s, t] = key.split("/"); expect(onBoard(s, t, choice) === true, `${key} hidden with no board chosen (${choice})`); }
  }
  for (const b of BOARDS) {
    expect(onBoard("history", "a-topic-written-next-year", b), "an unknown topic is hidden — a new topic must never vanish by being forgotten here");
    expect(onBoard("maths", "algebra-basics", b), "a topic on every board is hidden");
    expect(whyNotOnBoard("maths", "algebra-basics", b) === null, "a reason is given for hiding a topic that isn't hidden");
  }
  for (const junk of ["wjec", "AQA", "", "aqa ", null, 3, {}, "__proto__"]) expect(!isBoardChoice(junk), `${JSON.stringify(junk)} accepted as a board`);
  for (const ok of ["aqa", "edexcel", "ocr", "eduqas", "none"]) expect(isBoardChoice(ok), `${ok} refused`);

  // ── hiddenTopicKeys, the list the mixed pages use ──────────────────────────
  const allChoices = [...BOARDS, "none"];
  for (const subject of BOARD_SUBJECTS) {
    for (const c of allChoices) {
      const hidden = hiddenTopicKeys(new Map([[subject, c]]));
      const total = bySlug.get(subject).years.reduce((n, g) => n + g.topics.length, 0);
      expect([...hidden].every((k) => k.startsWith(`${subject}/`) && keys.includes(k)), `${subject} on ${c} hides something outside its own board-only list`);
      if (c !== "none") {
        expect(hidden.size === hiddenCount(subject, c), `${subject}/${c}: the chooser's "hides N topics" (${hiddenCount(subject, c)}) disagrees with what is hidden (${hidden.size})`);
        // the same answer the subject page gets, topic by topic
        for (const g of bySlug.get(subject).years) for (const t of g.topics) {
          expect(hidden.has(`${subject}/${t.slug}`) === !onBoard(subject, t.slug, c), `${subject}/${t.slug} on ${c}: the page and the mixed lists disagree`);
        }
      } else expect(hidden.size === 0, `${subject}: "not sure" hides ${hidden.size} topics`);
      expect(total - hidden.size >= total * 0.8, `${subject} on ${c} hides ${hidden.size} of ${total} — more than a fifth of a subject is not a board difference, it is a data error`);
    }
  }
  expect(hiddenTopicKeys(new Map()).size === 0, "no choices hides something");
  expect(hiddenTopicKeys(new Map([["history", "aqa"]])).has("history/crime-and-punishment"), "AQA History does not hide crime and punishment");
  expect(!hiddenTopicKeys(new Map([["history", "aqa"]])).has("religious-education/crime-and-punishment"), "AQA History hid RE's crime and punishment — a choice leaked into another subject");

  // ── the code that uses it ──────────────────────────────────────────────────
  const action = code("app/lib/exam-board-actions.ts");
  expect(/getSessionUserId\(\)/.test(action), "the board action does not take the user from the session");
  expect(!/formData\.get\(\s*["'](user|userId|user_id|email)["']/.test(action), "the board action reads WHO from the form");
  const save = action.indexOf("setBoardChoice(");
  expect(save > action.indexOf("asksForBoard(") && action.indexOf("asksForBoard(") > -1, "the board action saves before checking the subject is real");
  expect(save > action.indexOf("isBoardChoice(") && action.indexOf("isBoardChoice(") > -1, "the board action saves before checking the board is real");

  const store = code("app/lib/exam-board-store.ts");
  expect(/user_id=eq\.\$\{encodeURIComponent\(userId\)\}/.test(store), "the store builds its filter without encodeURIComponent");
  expect(/if \(!res\.ok\) \{[^}]*return null;/.test(store), "a failed read does not fail OPEN (return null, so nothing is hidden)");
  expect(/catch \(error\) \{[^}]*return null;/.test(store), "a thrown read does not fail OPEN");
  expect(/on_conflict=user_id,subject/.test(store) && !/method:\s*"DELETE"/.test(store), "choosing again is not one upsert");
  expect(/code === "ENOENT"\) return \{\};\s*throw error;/.test(store), "a corrupt local file would be read as empty and then saved over everyone's choices");

  // a client file must never import the store (service-role power)
  const walk = (dir) => readdirSync(dir).flatMap((f) => { const p = join(dir, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
  for (const f of walk("app").filter((p) => /\.(tsx?|jsx?)$/.test(p))) {
    const src = readFileSync(f, "utf8");
    if (/^\s*["']use client["']/.test(src)) expect(!/exam-board-store|viewer-boards/.test(src), `${f} is a client file and imports the exam board store`);
  }

  const subjectPage = code("app/subjects/[subject]/page.tsx");
  expect(/getBoardChoices\(user\.id\)/.test(subjectPage) && /onBoard\(subject\.slug, t\.slug, choice\)/.test(subjectPage), "the subject page does not filter its topics by the chosen board");
  expect(/strands = years\.filter/.test(subjectPage) && /columns = years\.filter/.test(subjectPage), "the subject page lays out the UNFILTERED years");
  expect(/hiddenTopics\.map/.test(subjectPage) && /whyNotOnBoard\(/.test(subjectPage), "hidden topics are removed silently — they must stay listed, closed, with the reason");
  expect(/<BoardChooser/.test(subjectPage) && /choice \? "change" : "ask"/.test(subjectPage), "the subject page does not ask on a first visit");

  const topicPage = code("app/subjects/[subject]/[topic]/page.tsx");
  expect(/whyNotOnBoard\(subject\.slug, topic\.slug, boardChoice\)/.test(topicPage) && /\{offBoard && boardChoice && \(/.test(topicPage), "a hidden topic's own page does not say why it was hidden");
  expect(!/notFound\(\)[^;]*offBoard|offBoard[^;]*notFound\(\)/.test(topicPage), "a hidden topic's page 404s — it must still open");

  for (const p of ["app/subjects/[subject]/exam/page.tsx", "app/subjects/[subject]/past-paper/page.tsx"]) {
    expect(/collectQuestionPool\(subject\.slug, yearsToInclude, await viewerHiddenTopics\(\)\)/.test(code(p)), `${p} builds its pool without the student's board`);
  }
  const pool = code("app/lib/examPool.ts");
  expect(/if \(hidden\.has\(`\$\{subjectSlug\}\/\$\{topic\.slug\}`\)\) return \[\];/.test(pool), "collectQuestionPool ignores `hidden`");
  expect(/hidden,\s*date: todayKey\(\)/.test(code("app/lib/daily-practice-server.ts")), "today's practice is built without the student's boards");
  expect(/!hidden\.has\(`\$\{t\.subjectSlug\}\/\$\{t\.topicSlug\}`\)/.test(code("app/lib/daily-practice.ts")), "buildDailySet ignores `hidden`");
  const queue = code("app/lib/revision-queue.ts");
  expect((queue.match(/hidden\.has\(/g) ?? []).length >= 2, "the revision queue can still suggest a topic off the student's board");
  const play = code("app/early-access/play/page.tsx");
  expect(/playableTopics\(subject\.slug, hidden\)/.test(play) && /buildGameQuestions\(subject\.slug, topics, hidden\)/.test(play), "the game offers or tops up with topics off the player's board");
  expect(/!opts\.hidden\?\.has\(/.test(code("app/lib/progress.ts")), "getProgress ignores `hidden`, so coverage counts topics not on the student's paper");
  expect(!/getHiddenTopics|hidden:/.test(code("app/clans/[id]/page.tsx")), "the clan page reads every member's boards — one extra read per member for nothing it shows");

  // ── the SQL Matthew runs ───────────────────────────────────────────────────
  const sql = readFileSync("EXAM_BOARDS_SETUP.sql", "utf8").replace(/--[^\n]*/g, "");
  expect(/create table if not exists public\.exam_boards/.test(sql), "the SQL does not create exam_boards safely (if not exists)");
  expect(/references public\.users\(id\) on delete cascade/.test(sql), "deleting an account would leave its board choices behind");
  expect(/primary key \(user_id, subject\)/.test(sql), "nothing stops two rows for one subject");
  expect(/check \(board in \('aqa', 'edexcel', 'ocr', 'eduqas', 'none'\)\)/.test(sql), "the database accepts boards the app does not know");
  expect(/enable row level security/.test(sql) && /revoke all on table public\.exam_boards from anon, authenticated/.test(sql), "exam_boards is reachable with the public key");
  expect(/grant all privileges on table public\.exam_boards to service_role/.test(sql) && /notify pgrst, 'reload schema'/.test(sql), "the SQL leaves out the grant / schema reload — the PGRST205 afternoon");
} finally {
  rmSync(out, { recursive: true, force: true });
}

if (failures) {
  console.error(`\n${failures} of ${checks} exam-board checks failed.`);
  process.exit(1);
}
console.log(`All ${checks} exam-board checks passed.`);
