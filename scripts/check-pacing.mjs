// One minute per mark: the pace line during a test and the breakdown after it,
// driven over invented sittings, plus the clock the tests are now given.
//
// ⚠️ WHY THIS EXISTS. The first thing "one minute per mark" did was reveal that
// every subject's test asked for more marks than it had minutes — a median 46
// marks in 20 minutes for Physics. A pace hint on that clock would have told
// every student they were behind from minute one. So this checks the CLOCK as
// well as the hint: the two are only meaningful together.

import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createRequire } from "node:module";

const require_ = createRequire(import.meta.url);
const out = mkdtempSync(join(tmpdir(), "pacing-check-"));
let checks = 0, failures = 0;
function expect(ok, message) {
  checks += 1;
  if (!ok) { failures += 1; console.error(`  FAIL: ${message}`); }
}

try {
  execFileSync(process.execPath, [
    "node_modules/typescript/bin/tsc",
    "app/lib/exam-pacing.ts", "app/lib/marks.ts", "app/lib/subjects.ts",
    "app/lib/content/index.ts", "app/lib/shuffle.ts",
    "--outDir", out, "--module", "commonjs", "--target", "es2020",
    "--moduleResolution", "node", "--skipLibCheck",
  ], { stdio: "inherit" });

  const { pace, timeBreakdown } = require_(join(out, "exam-pacing.js"));
  const { marksFor } = require_(join(out, "marks.js"));
  const { SUBJECTS } = require_(join(out, "subjects.js"));
  const { TOPIC_CONTENT } = require_(join(out, "content", "index.js"));
  const { shuffle } = require_(join(out, "shuffle.js"));

  // ── The pace line ─────────────────────────────────────────────────────────
  expect(pace(0, 0).label === "On pace", "a test that has just started is not on pace");
  expect(pace(30, 0).label === "On pace", "thirty seconds in with nothing answered is already 'behind' — the dead band is missing");
  expect(pace(60 * 3, 0).label === "3 min behind", `three minutes, nothing answered: got "${pace(180, 0).label}"`);
  expect(pace(60 * 3, 0).tone === "warn", "three minutes behind is not flagged");
  expect(pace(60 * 2, 0).tone !== "warn", "two minutes behind is already an alarm — it should be a nudge");
  expect(pace(60, 3).label === "2 min ahead", `a 3-mark question answered in a minute: got "${pace(60, 3).label}"`);
  expect(pace(600, 10).label === "On pace", "exactly one minute per mark is not 'on pace'");

  // ⚠️ The dead band must actually stop flicker. Walk a sitting answered at
  // almost exactly the right speed and count how often the label changes.
  {
    let changes = 0, last = null;
    for (let t = 0; t <= 1200; t += 5) {
      const marks = Math.floor((t + 20) / 60);   // answering just ahead of the clock
      const l = pace(t, marks).label;
      if (last !== null && l !== last) changes += 1;
      last = l;
    }
    expect(changes <= 2, `the pace label changed ${changes} times on a perfectly paced 20-minute sitting — it is chattering`);
  }

  // ── The breakdown ─────────────────────────────────────────────────────────
  {
    // Matthew's example from the brainstorm: six minutes on a 2-mark question,
    // then out of time before the rest.
    const marks = [1, 2, 3, 4, 9];
    const answeredAt = { 0: 50, 1: 50 + 6 * 60, 2: 50 + 6 * 60 + 150 };
    const b = timeBreakdown(marks, answeredAt, 19 * 60, 0);
    expect(b.overran.length === 1 && b.overran[0].index === 1,
      `the 2-mark question that took 6 minutes was not the one flagged: ${JSON.stringify(b.overran)}`);
    expect(b.overran[0] && Math.round(b.overran[0].ratio) === 3,
      "6 minutes on a 2-mark question is 3x its share");
    expect(b.ranOut === true, "ran out of time with questions left, and it was not reported");
    expect(b.unansweredMarks === 13, `unanswered marks should be 4 + 9 = 13, got ${b.unansweredMarks}`);
  }

  // A 1-mark question in 95 seconds is 1.6x its share but only 35 seconds
  // over — not worth telling anyone about.
  {
    const b = timeBreakdown([1], { 0: 95 }, 600, 300);
    expect(b.overran.length === 0, "a 1-mark question answered in 95 seconds was flagged — the extra-minute floor is missing");
  }

  // Answered out of order: time is charged to whichever was answered next.
  {
    const b = timeBreakdown([2, 2, 2], { 2: 60, 0: 600, 1: 660 }, 900, 200);
    expect(b.overran.length === 1 && b.overran[0].index === 0,
      "time between answers was charged to the wrong question when answered out of order");
  }

  // Finished early with nothing unanswered is not "ran out".
  {
    const b = timeBreakdown([2, 2], { 0: 60, 1: 120 }, 240, 120);
    expect(!b.ranOut && b.unansweredCount === 0, "a finished paper was reported as running out of time");
  }

  // ── The CLOCK — one minute per mark, not per question ─────────────────────
  //
  // Rebuilt here rather than imported: pickToMarkBudget lives in examPool.ts,
  // which imports a React component's type, and the checker's independent
  // statement of the rule is worth having anyway.
  function pick(shuffled, subject, budget, max = 50) {
    const picked = []; let used = 0;
    for (const q of shuffled) {
      if (picked.length >= max || used >= budget) break;
      const m = marksFor(subject, q);
      if (used + m > budget) continue;
      picked.push(q); used += m;
    }
    return { picked, used };
  }

  for (const subject of SUBJECTS) {
    const pool = subject.years.flatMap((y) =>
      y.topics.flatMap((t) => TOPIC_CONTENT[`${subject.slug}/${t.slug}`]?.practice ?? []));
    if (pool.length === 0) continue;
    for (let trial = 0; trial < 60; trial++) {
      const { picked, used } = pick(shuffle(pool), subject.slug, 20);
      expect(used <= 20, `${subject.slug}: a 20-mark test came to ${used} marks — the budget overshot`);
      expect(used >= 15 || picked.length === pool.length,
        `${subject.slug}: a 20-mark test only reached ${used} marks — too far under budget`);
      expect(picked.length > 0, `${subject.slug}: a test came out empty`);
    }
  }
  console.log(`Clock checked: 60 random 20-mark tests per subject, every one within budget.`);

  if (failures > 0) {
    console.error(`\n${failures} of ${checks} pacing checks FAILED.`);
    process.exit(1);
  }
  console.log(`All ${checks} pacing checks passed.`);
} finally {
  rmSync(out, { recursive: true, force: true });
}
