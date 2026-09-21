// The badge rules that are easy to get subtly wrong.
//
// Grand master was "100% and a test in EVERY subject" — fifteen subjects,
// which nobody sitting GCSEs would reach. Matthew, 2026-09-21: make it five.
// The languages still count as one between them, so finishing French AND
// Spanish is one subject towards it, not two.

import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createRequire } from "node:module";

const require_ = createRequire(import.meta.url);
const out = mkdtempSync(join(tmpdir(), "badges-check-"));
let checks = 0, failures = 0;
const expect = (ok, msg) => { checks++; if (!ok) { failures++; console.error(`  FAIL: ${msg}`); } };

try {
  execFileSync(process.execPath, [
    "node_modules/typescript/bin/tsc", "app/lib/progress.ts", "--outDir", out,
    "--module", "commonjs", "--target", "es2020", "--skipLibCheck", "--moduleResolution", "node", "--resolveJsonModule",
  ], { stdio: "inherit" });
  const { computeBadges, GRAND_MASTER_SUBJECTS } = require_(join(out, "progress.js"));
  const { SUBJECTS } = require_(join(out, "subjects.js"));

  const all = SUBJECTS.map((s) => ({ slug: s.slug, percent: 0, topicsCovered: 0 }));
  const grand = (done, tested = done) => {
    const subjects = all.map((s) => ({ ...s, percent: done.includes(s.slug) ? 100 : 0, topicsCovered: done.includes(s.slug) ? 5 : 0 }));
    return computeBadges({
      subjects, totalQuestions: 0, totalFlashcards: 0, accuracy: null, streakCurrent: 0,
      testedSubjects: new Set(tested), totalSecondsAllTime: 0,
    }).find((b) => b.id === "grand-master");
  };

  expect(GRAND_MASTER_SUBJECTS === 5, "Grand master is not five subjects");
  const five = ["maths", "biology", "chemistry", "physics", "english"];
  expect(grand(five).earned, "five subjects at 100% with a test each did not earn Grand master");
  expect(!grand(five.slice(0, 4)).earned, "four subjects earned Grand master");
  expect(!grand(five, five.slice(0, 4)).earned, "Grand master was earned with one of the five untested — the tests are part of it");
  expect(!grand(["maths", "biology", "chemistry", "spanish", "french"]).earned,
    "Spanish and French counted as two subjects — the languages are one between them");
  expect(grand(["maths", "biology", "chemistry", "english", "spanish"]).earned, "a language did not count at all");
  expect(grand(SUBJECTS.map((s) => s.slug)).earned, "every subject no longer earns Grand master");
  expect(/5 subjects/.test(grand(five).description), `the description does not say five subjects: "${grand(five).description}"`);
} finally {
  rmSync(out, { recursive: true, force: true });
}
if (failures) { console.error(`\n${failures} of ${checks} badge checks FAILED.`); process.exit(1); }
console.log(`All ${checks} badge checks passed.`);
