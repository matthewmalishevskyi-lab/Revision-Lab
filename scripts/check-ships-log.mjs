// The alien game's ship's log: the grade, and reading a stored log back.
//
// Two separate risks, and they fail in opposite ways.
//
// The GRADE is arithmetic nobody sees the inside of. A weighting typo would
// not throw, would not look wrong, and would quietly tell students that
// sprinting past every question is the way to an S — the opposite of what this
// site is for. So the properties are asserted directly: accuracy is worth the
// most, every part is reachable, and a perfect run really does score 100.
//
// The PARSER reads text out of localStorage, which anybody can edit. Its job is
// to never hand the progress page something that breaks it — the same rule
// savedAnswers.ts follows, for the same reason.

import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createRequire } from "node:module";

const require_ = createRequire(import.meta.url);
const out = mkdtempSync(join(tmpdir(), "ships-log-"));
let checks = 0, failures = 0;
const expect = (ok, what) => { checks += 1; if (!ok) { failures += 1; console.error(`  FAIL: ${what}`); } };

try {
  execFileSync(process.execPath, [
    "node_modules/typescript/bin/tsc", "app/lib/shipsLog.ts",
    "--outDir", out, "--module", "commonjs", "--target", "es2020", "--skipLibCheck",
  ], { stdio: "inherit" });
  const { scoreRun, gradeFor, foldRun, parseLog, formatClock, WEIGHTS } = require_(join(out, "shipsLog.js"));

  const run = (over = {}) => ({ level: "Level 1 — Boarding", seconds: 60, kills: 5, aliens: 10, right: 6, wrong: 4, par: 90, ...over });

  // ── the grade says what this site cares about ────────────────────────────
  expect(WEIGHTS.accuracy > WEIGHTS.aliens && WEIGHTS.accuracy > WEIGHTS.time,
    `answering is not the biggest part of the grade (${JSON.stringify(WEIGHTS)})`);
  expect(WEIGHTS.accuracy + WEIGHTS.aliens + WEIGHTS.time === 100, "the weights do not add up to 100");

  const perfect = scoreRun(run({ kills: 10, right: 10, wrong: 0, seconds: 10 }));
  expect(perfect === 100, `a perfect run scores ${perfect}, not 100`);
  const awful = scoreRun(run({ kills: 0, right: 0, wrong: 10, seconds: 600 }));
  expect(awful === 0, `the worst possible run scores ${awful}, not 0`);

  // each part actually moves the number, on its own
  const base = scoreRun(run());
  expect(scoreRun(run({ right: 10, wrong: 0 })) > base, "answering everything right does not raise the grade");
  expect(scoreRun(run({ kills: 10 })) > base, "clearing the deck does not raise the grade");
  expect(scoreRun(run({ seconds: 400 })) < base, "being slower does not lower the grade");
  // ⚠️ compared ABOVE par: at or under par the pace mark is already full, so
  // 20 seconds and 60 seconds score the same and testing there proves nothing
  expect(scoreRun(run({ seconds: 150 })) > scoreRun(run({ seconds: 220 })), "being quicker does not raise the grade");
  expect(scoreRun(run({ seconds: 20 })) === scoreRun(run({ seconds: 90 })), "beating par by a mile scores more than beating it — the pace mark is not capped");

  // ⚠️ never answering a question is not 100% accuracy. Scoring it as such
  // would make "press R, never" the fastest route to an S on a revision site.
  const skipped = scoreRun(run({ right: 0, wrong: 0, kills: 10, seconds: 10 }));
  const answered = scoreRun(run({ right: 10, wrong: 0, kills: 10, seconds: 10 }));
  expect(skipped < answered, `never answering (${skipped}) scores as well as answering everything right (${answered})`);
  expect(skipped > 0, "never answering scores zero, which punishes a player who never found the blaster");

  // ⚠️ THE GRADE MUST NEVER MAKE TRYING WORSE THAN REFUSING TO TRY. This is
  // the one property a revision site's score cannot get wrong, and the first
  // version did: with raw accuracy, one wrong answer — including one the clock
  // timed out — cost 20 of the 40 accuracy marks, so opening a quiz at all was
  // a losing move. Every assertion below was measured against the old formula
  // and fails on it.
  const deck = { kills: 8, aliens: 8, seconds: 90, par: 102 };
  const none = scoreRun(run({ ...deck, right: 0, wrong: 0 }));
  const oneWrong = scoreRun(run({ ...deck, right: 0, wrong: 1 }));
  const oneRight = scoreRun(run({ ...deck, right: 1, wrong: 0 }));
  expect(none - oneWrong <= 5, `one wrong answer costs ${none - oneWrong} marks against never opening a quiz — trying has to be cheap`);
  expect(oneRight > none, `one right answer (${oneRight}) does not beat never opening a quiz (${none})`);
  // and a sustained run of wrong answers still has to cost something real,
  // or the accuracy mark stops meaning anything
  expect(scoreRun(run({ ...deck, right: 0, wrong: 8 })) <= none - 15,
    "a whole deck of wrong answers barely dents the grade, so accuracy is not being measured");
  // both ends still reachable: an S has to be possible and a 0 has to be possible
  expect(scoreRun(run({ ...deck, right: 12, wrong: 0, seconds: 10 })) === 100, "a perfect run can no longer reach 100");
  expect(scoreRun(run({ right: 0, wrong: 12, kills: 0, aliens: 8, seconds: 900, par: 102 })) === 0, "the worst possible run can no longer reach 0");
  // monotonic in the thing it measures: more right answers never scores less
  for (let asked = 1; asked <= 12; asked++) {
    for (let right = 0; right < asked; right++) {
      const a = scoreRun(run({ ...deck, right, wrong: asked - right }));
      const b = scoreRun(run({ ...deck, right: right + 1, wrong: asked - right - 1 }));
      expect(b >= a, `${right + 1} of ${asked} right (${b}) scores less than ${right} of ${asked} (${a})`);
    }
  }

  // a level with no aliens on it is cleared by definition, not failed
  expect(scoreRun(run({ aliens: 0, kills: 0, right: 10, wrong: 0, seconds: 10 })) === 100,
    "an empty deck cannot be fully cleared");
  // and a nonsense par cannot produce NaN
  for (const par of [0, -5, Number.NaN]) {
    const s = scoreRun(run({ par }));
    expect(Number.isFinite(s) && s >= 0 && s <= 100, `a par of ${par} gave a score of ${s}`);
  }

  // grades are in order, and cover the whole range
  let last = "";
  for (let n = 100; n >= 0; n--) {
    const g = gradeFor(n);
    expect(typeof g === "string" && g.length === 1, `score ${n} gave the grade ${JSON.stringify(g)}`);
    last = g;
  }
  expect(gradeFor(100) === "S" && last === "D", `100 is ${gradeFor(100)} and 0 is ${last}`);

  // ── folding a run keeps the BEST of each figure ──────────────────────────
  {
    let log = foldRun({}, run({ seconds: 120, kills: 3, right: 2, wrong: 8 }));
    const first = log["Level 1 — Boarding"];
    log = foldRun(log, run({ seconds: 60, kills: 9, right: 9, wrong: 1 }));
    const after = log["Level 1 — Boarding"];
    expect(after.runs === 2, `two runs counted as ${after.runs}`);
    expect(after.bestSeconds === 60, `best time is ${after.bestSeconds}, not the faster 60`);
    expect(after.mostKills === 9, `most kills is ${after.mostKills}`);
    expect(after.bestScore > first.bestScore, "a better run did not raise the best score");
    // ⚠️ a WORSE run must not overwrite anything
    const worse = foldRun(after ? log : log, run({ seconds: 300, kills: 0, right: 0, wrong: 10 }))["Level 1 — Boarding"];
    expect(worse.bestSeconds === 60, `a slower run overwrote the best time (${worse.bestSeconds})`);
    expect(worse.mostKills === 9, `a worse run overwrote the kill count (${worse.mostKills})`);
    expect(worse.bestScore === after.bestScore, "a worse run overwrote the best score");
    expect(worse.runs === 3, `the run count did not go up (${worse.runs})`);
    // a run with no questions answered leaves an earlier accuracy alone
    const noQs = foldRun(log, run({ right: 0, wrong: 0 }))["Level 1 — Boarding"];
    expect(noQs.bestAccuracy === after.bestAccuracy, "a run with no questions wiped the best accuracy");
    // two decks are kept apart
    const both = foldRun(log, run({ level: "Level 4 — Cargo hold" }));
    expect(Object.keys(both).length === 2, "a second deck did not get its own entry");
  }

  // ── a corrupt store never breaks the page ────────────────────────────────
  for (const raw of [null, "", "not json", "[]", "null", "42", '"a string"', "{", '{"x":']) {
    const parsed = parseLog(raw);
    expect(parsed && typeof parsed === "object" && !Array.isArray(parsed), `parseLog(${JSON.stringify(raw)}) did not give an object`);
    expect(Object.keys(parsed).length === 0, `parseLog(${JSON.stringify(raw)}) invented entries`);
  }
  for (const entry of [
    null, 42, "x", [], {}, { runs: 1 },
    { runs: 0, bestScore: 5, bestSeconds: 5, mostKills: 0 },          // a level played zero times
    { runs: 1, bestScore: 5, bestSeconds: -1, mostKills: 0 },          // negative time
    { runs: 1, bestScore: 5, bestSeconds: 5, mostKills: -3 },          // negative kills
    { runs: "1", bestScore: 5, bestSeconds: 5, mostKills: 0 },         // strings
    { runs: Number.NaN, bestScore: 5, bestSeconds: 5, mostKills: 0 },
  ]) {
    const parsed = parseLog(JSON.stringify({ "Level 1": entry }));
    expect(Object.keys(parsed).length === 0, `a bad entry survived parsing: ${JSON.stringify(entry)}`);
  }
  {
    // a good entry does survive, clamped, with the grade recomputed
    const parsed = parseLog(JSON.stringify({ "Level 1": { runs: 3.7, bestScore: 480, bestGrade: "S", bestSeconds: 61.4, mostKills: 9, bestAccuracy: 2 } }));
    const e = parsed["Level 1"];
    expect(!!e, "a valid entry was dropped");
    expect(e.bestScore === 100, `a score of 480 was not clamped (${e.bestScore})`);
    expect(e.bestAccuracy === null, `an accuracy of 2 was not refused (${e.bestAccuracy})`);
    expect(e.runs === 4 && e.bestSeconds === 61, `fractions were not rounded (${e.runs}, ${e.bestSeconds})`);
    // ⚠️ the letter is derived from the number, never trusted from the file
    const lying = parseLog(JSON.stringify({ "Level 1": { runs: 1, bestScore: 4, bestGrade: "S", bestSeconds: 10, mostKills: 0 } }));
    expect(lying["Level 1"].bestGrade === gradeFor(4), `a stored grade of "S" was believed against a score of 4`);
  }
  {
    // a huge file is capped rather than rendered
    const big = {};
    for (let i = 0; i < 500; i++) big[`Level ${i}`] = { runs: 1, bestScore: 10, bestSeconds: 10, mostKills: 0 };
    expect(Object.keys(parseLog(JSON.stringify(big))).length <= 40, "an oversized log was not capped");
    const longName = parseLog(JSON.stringify({ ["x".repeat(500)]: { runs: 1, bestScore: 10, bestSeconds: 10, mostKills: 0 } }));
    expect(Object.keys(longName).length === 0, "a 500-character level name was accepted");
  }
  // what comes out can always go back in
  {
    const once = foldRun({}, run());
    const round = parseLog(JSON.stringify(once));
    expect(JSON.stringify(round) === JSON.stringify(once), "a log did not survive a round trip through the store");
  }

  expect(formatClock(0) === "0:00" && formatClock(61.6) === "1:02" && formatClock(-5) === "0:00",
    `the clock formats badly: ${formatClock(0)} / ${formatClock(61.6)} / ${formatClock(-5)}`);
} finally {
  rmSync(out, { recursive: true, force: true });
}

console.log("");
if (failures === 0) console.log(`All ${checks} ship's-log checks passed.`);
else { console.error(`${failures} of ${checks} ship's-log checks FAILED.`); process.exitCode = 1; }
