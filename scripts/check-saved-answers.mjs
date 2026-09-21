// Saved answers and the growing answer box.
//
// ⚠️ WHAT MATTERS HERE. A saved answer must never be counted twice in a
// student's stats after a reload, never appear against the wrong question,
// and a corrupted save must never break the page — at worst it is forgotten.

import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createRequire } from "node:module";

const require_ = createRequire(import.meta.url);
const out = mkdtempSync(join(tmpdir(), "saved-answers-check-"));
let checks = 0, failures = 0;
function expect(ok, message) {
  checks += 1;
  if (!ok) { failures += 1; console.error(`  FAIL: ${message}`); }
}

try {
  execFileSync(process.execPath, [
    "node_modules/typescript/bin/tsc", "app/lib/savedAnswers.ts",
    "--outDir", out, "--module", "commonjs", "--target", "es2020", "--skipLibCheck", "--moduleResolution", "node",
  ], { stdio: "inherit" });
  const sa = require_(join(out, "savedAnswers.js"));
  const NOW = 1_800_000_000_000;

  // Round trip.
  const answers = {
    "What is 2 + 2?": { input: "4", status: "correct", revealed: true, recorded: true },
    "Name a noble gas.": { input: "neon", status: "incorrect", recorded: true },
    "Explain why...": { input: "", status: "selfMarked", revealed: true },
    "Untouched?": { input: "", status: "unanswered" },
  };
  const back = sa.parseSaved(sa.serialiseSaved(answers, NOW), NOW);
  expect(back["What is 2 + 2?"]?.input === "4" && back["What is 2 + 2?"].status === "correct", "a saved correct answer did not come back");
  expect(back["What is 2 + 2?"]?.recorded === true, "the 'already recorded' flag was lost — a reload would count the answer twice");
  expect(back["Name a noble gas."]?.status === "incorrect", "a wrong answer did not come back as wrong");
  expect(back["Explain why..."]?.revealed === true, "a revealed model answer did not stay revealed");
  expect(!("Untouched?" in back), "an untouched question was saved — wasted space and nothing to restore");

  // Corrupt or hostile saves are forgotten, never thrown.
  for (const [raw, why] of [
    ["not json", "junk text"], ["null", "null"], ["[]", "an array"], ['{"v":2,"savedAt":1,"answers":{}}', "a future format"],
    ['{"v":1,"answers":{}}', "no timestamp"], ['{"v":1,"savedAt":' + NOW + ',"answers":"x"}', "answers not an object"],
  ]) {
    let threw = false, got;
    try { got = sa.parseSaved(raw, NOW); } catch { threw = true; }
    expect(!threw && got && Object.keys(got).length === 0, `a save that is ${why} was not safely ignored`);
  }
  {
    const raw = JSON.stringify({ v: 1, savedAt: NOW, answers: {
      good: { input: "x", status: "correct" },
      badStatus: { input: "x", status: "hacked" },
      badInput: { input: 5, status: "correct" },
      badEntry: "nope",
      sneaky: { input: "y", status: "correct", recorded: "yes" },
    } });
    const got = sa.parseSaved(raw, NOW);
    expect(Object.keys(got).join() === "good,sneaky", `bad entries were not dropped: ${Object.keys(got).join()}`);
    expect(got.sneaky.recorded === undefined, "a non-boolean 'recorded' was trusted — it could suppress real recording");
  }
  {
    const long = sa.parseSaved(JSON.stringify({ v: 1, savedAt: NOW, answers: { q: { input: "a".repeat(10_000), status: "incorrect" } } }), NOW);
    expect(long.q.input.length === 2000, "a huge saved input was not capped");
  }

  // Old saves expire.
  const old = sa.serialiseSaved({ q: { input: "1", status: "correct" } }, NOW - sa.KEEP_FOR_MS - 1);
  expect(Object.keys(sa.parseSaved(old, NOW)).length === 0, "a save older than the keep window came back");
  const recent = sa.serialiseSaved({ q: { input: "1", status: "correct" } }, NOW - 1000);
  expect(Object.keys(sa.parseSaved(recent, NOW)).length === 1, "a recent save was thrown away");

  // Keys: each topic its own, each day its own.
  expect(sa.topicAnswersKey("maths", "a") !== sa.topicAnswersKey("maths", "b"), "two topics share one save");
  expect(sa.topicAnswersKey("maths", "a") !== sa.dailyAnswersKey("2026-09-21"), "a topic and today's set share one save");
  expect(sa.dailyAnswersKey("2026-09-21") !== sa.dailyAnswersKey("2026-09-22"), "two days share one save");

  // ── Wiring ────────────────────────────────────────────────────────────────
  const strip = (s) => s.replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "");
  const practice = strip(readFileSync("app/components/Practice.tsx", "utf8"));
  expect(/alreadyRecorded\s*=\s*recorded\.has\(index\)\s*\|\|\s*Boolean\(stateFor\(index\)\.recorded\)/.test(practice),
    "Practice does not check the saved 'recorded' flag — reloading and pressing Check would count an answer twice");
  expect(/if \(!alreadyRecorded\)/.test(practice), "Practice records without the alreadyRecorded guard");
  expect(/topicAnswersKey\(subject, topic\)/.test(practice), "Practice is not saving by subject and topic");
  const runner = strip(readFileSync("app/today/DailyPracticeRunner.tsx", "utf8"));
  expect(/variant === "daily" \? dailyAnswersKey/.test(runner),
    "the revisit list is saved too — a mistake due again later the same day would come back locked");
  expect(/if \(stateAt\(at\) !== "unanswered"\) return;/.test(runner), "a restored answer in today's set can be settled (and recorded) again");

  // The growing box replaced every single-line answer input.
  for (const f of ["app/components/Practice.tsx", "app/components/MockExam.tsx", "app/today/DailyPracticeRunner.tsx"]) {
    const src = strip(readFileSync(f, "utf8"));
    expect(!/<input[^>]*type="text"/.test(src) && !/<input\s+id="answer"/.test(src), `${f} still has a single-line answer box`);
    expect(/<AnswerBox\b/.test(src), `${f} does not use AnswerBox`);
  }
  const box = strip(readFileSync("app/components/AnswerBox.tsx", "utf8"));
  expect(/event\.key === "Enter" && !event\.shiftKey/.test(box) && /onSubmit\(\)/.test(box), "Enter no longer checks the answer");
  expect(!/field-sizing/.test(box), "AnswerBox relies on field-sizing, which Firefox does not support");
} finally {
  rmSync(out, { recursive: true, force: true });
}

if (failures) {
  console.error(`\n${failures} of ${checks} saved-answer checks FAILED.`);
  process.exit(1);
}
console.log(`All ${checks} saved-answer checks passed.`);
