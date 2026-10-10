// Topic mastery (app/lib/mastery.ts): what "done" means for a topic.
//
// Checked as PROPERTIES over thousands of invented students, plus the named
// cases the rule was written for. A rule like this is easy to test wrongly —
// look at one student, decide the label seems right — and that says nothing
// about the student who got the first ten wrong, or who has every card known
// and one missed question waiting.

import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createRequire } from "node:module";

const require_ = createRequire(import.meta.url);
const out = mkdtempSync(join(tmpdir(), "mastery-check-"));
let checks = 0, failures = 0;
const expect = (ok, msg) => { checks++; if (!ok) { failures++; if (failures <= 25) console.error(`  FAIL: ${msg}`); } };

try {
  execFileSync(process.execPath, [
    "node_modules/typescript/bin/tsc", "app/lib/mastery.ts", "--outDir", out,
    "--module", "commonjs", "--target", "es2020", "--skipLibCheck",
  ], { stdio: "inherit" });
  const { topicMastery, MIN_ANSWERED, WINDOW, MASTERY_ACCURACY, CARDS_KNOWN_SHARE } = require_(join(out, "mastery.js"));
  const run = (answers, cardsKnown = 12, cardsTotal = 12, toRevisit = 0) => topicMastery({ answers, cardsKnown, cardsTotal, toRevisit });
  const right = (n) => Array(n).fill(true), wrong = (n) => Array(n).fill(false);

  // the numbers the rule was agreed with — read, not re-typed, everywhere else
  expect(MIN_ANSWERED === 15 && WINDOW === 20 && MASTERY_ACCURACY === 0.8 && CARDS_KNOWN_SHARE === 0.6,
    `the mastery rule changed (${MIN_ANSWERED}, ${WINDOW}, ${MASTERY_ACCURACY}, ${CARDS_KNOWN_SHARE}) — if on purpose, update the page wording and this line`);

  // ── named cases ─────────────────────────────────────────────────────────
  const fresh = run([], 0);
  expect(fresh.state === "new" && fresh.progress === 0, `a first visit is "new" at 0 (${fresh.state}, ${fresh.progress})`);
  expect(fresh.needs.some((n) => /Answer 15 more/.test(n)), `a first visit is told to answer 15 (${fresh.needs})`);
  expect(!fresh.needs.some((n) => /Get \d+ of your last/.test(n)), "a first visit is told off about accuracy before answering anything");

  const done = run(right(15));
  expect(done.state === "mastered" && done.progress === 1 && done.needs.length === 0, `15 right with the cards known is mastered (${done.state})`);
  expect(run(right(14)).state !== "mastered", "14 answers is mastered — the floor is 15");

  // RECENT, not lifetime: the first ten wrong do not count against you forever
  expect(run([...wrong(10), ...right(20)]).state === "mastered", "ten early misses then twenty right is not mastered — the rule is meant to read the recent answers");
  // and the reverse: a good start does not carry a bad run
  const slipped = run([...right(30), ...wrong(5)]);
  expect(slipped.state !== "mastered", "five wrong in your last twenty answers still counts as mastered");
  expect(slipped.needs.some((n) => n === "Get 16 of your last 20 right — you have 15"), `the accuracy need is worded with real numbers (${slipped.needs})`);

  // a missed question waiting holds it short, however good everything else is
  const owing = run(right(20), 12, 12, 1);
  expect(owing.state !== "mastered" && owing.progress < 1, "a question waiting in Revisit your mistakes still allows mastery");
  expect(owing.needs.some((n) => /1 question you missed/.test(n)), `the missed question is named as what is left (${owing.needs})`);

  // definitions: 60%, rounded up
  // 60% of 12 is 7.2, so it takes 8
  expect(run(right(20), 7, 12).state !== "mastered", "7 of 12 definitions counts as 60% known (it is 58%)");
  expect(run(right(20), 8, 12).state === "mastered", "8 of 12 definitions does not count, though it is 67%");
  expect(run(right(20), 0, 0).state === "mastered", "a topic with no flashcards can never be mastered");
  expect(run(right(20), 50, 12).cardsKnown === 12, "more cards known than the topic has is not clamped");

  // ── properties, over random students ──────────────────────────────────────
  let seed = 7;
  const rand = () => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; };
  for (let i = 0; i < 6000; i++) {
    const n = Math.floor(rand() * 45), p = rand();
    const answers = Array.from({ length: n }, () => rand() < p);
    const total = Math.floor(rand() * 30), known = Math.floor(rand() * (total + 3)), owe = rand() < 0.3 ? Math.floor(rand() * 4) : 0;
    const m = run(answers, known, total, owe);
    const tag = `#${i} (${n} answers, ${known}/${total} cards, ${owe} owed)`;
    expect(m.progress >= 0 && m.progress <= 1, `${tag}: progress ${m.progress} is outside 0..1`);
    expect((m.progress === 1) === (m.state === "mastered"), `${tag}: a full bar and "mastered" disagree`);
    expect((m.needs.length === 0) === (m.state === "mastered"), `${tag}: "nothing left to do" and "mastered" disagree`);
    // mastered means exactly the three conditions, recomputed here a second way
    const recent = answers.slice(-20), acc = recent.length ? recent.filter(Boolean).length / recent.length : 0;
    const want = n >= 15 && acc >= 0.8 && Math.min(known, total) >= Math.ceil(total * 0.6) && owe === 0;
    expect((m.state === "mastered") === want, `${tag}: mastered is ${m.state === "mastered"}, the rule says ${want}`);
    // one more right answer never makes the bar go DOWN: past twenty it
    // pushes the oldest answer out of the window, and losing a right one to
    // gain a right one changes nothing while losing a wrong one only helps
    const next = run([...answers, true], known, total, owe);
    expect(next.progress >= m.progress - 1e-9, `${tag}: answering one more right lowered the bar (${m.progress} → ${next.progress})`);
    if (m.state === "new") expect(n === 0 && Math.min(known, total) === 0, `${tag}: "new" while something has been done`);
  }
} finally {
  rmSync(out, { recursive: true, force: true });
}
if (failures) { console.error(`\n${failures} of ${checks} mastery checks FAILED.`); process.exit(1); }
console.log(`All ${checks} mastery checks passed.`);
