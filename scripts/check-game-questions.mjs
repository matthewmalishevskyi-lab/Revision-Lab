// The alien game's question pools.
//
// ⚠️ THE RISK THIS CHECKS FOR IS A WRONG BUTTON THAT IS ACTUALLY RIGHT.
//    Most of these questions were written as multiple choice by a person. The
//    rest are built here: a numeric written answer plus three wrong numbers
//    made up from it. That is safe only while every made-up number is one the
//    question would NOT accept, and while no two buttons say the same thing —
//    otherwise the game marks a correct answer wrong, in a game whose whole
//    point is answering correctly. So every generated question in the whole
//    content registry is built and inspected here, not a sample.
//
// It also checks the pools are big enough to stop the repeats Matthew hit:
// picking two or three topics has to give a lot more than one playthrough asks.

import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createRequire } from "node:module";

const require_ = createRequire(import.meta.url);
const out = mkdtempSync(join(tmpdir(), "game-check-"));
let checks = 0, failures = 0;
function expect(ok, message) {
  checks += 1;
  if (!ok) { failures += 1; console.error(`  FAIL: ${message}`); }
}

try {
  execFileSync(process.execPath, [
    "node_modules/typescript/bin/tsc",
    "app/lib/subjects.ts", "app/lib/content/index.ts", "app/lib/marks.ts",
    "app/lib/difficulty.ts", "app/lib/shuffle.ts", "app/lib/normalise.ts", "app/lib/game-questions.ts",
    "--outDir", out, "--module", "commonjs", "--target", "es2020",
    "--moduleResolution", "node", "--skipLibCheck",
  ], { stdio: "inherit" });

  const { buildGameQuestions, playableTopics, countGameQuestions } = require_(join(out, "game-questions.js"));
  const { normalise } = require_(join(out, "normalise.js"));
  const { SUBJECTS } = require_(join(out, "subjects.js"));
  const { TOPIC_CONTENT } = require_(join(out, "content", "index.js"));

  // ── Every question the game can ask, in every topic, is sane ──────────────
  let built = 0, ready = 0;
  for (const subject of SUBJECTS) {
    for (const year of subject.years) {
      for (const topic of year.topics) {
        const key = `${subject.slug}/${topic.slug}`;
        const content = TOPIC_CONTENT[key];
        if (!content?.practice?.length) continue;
        const { reload } = buildGameQuestions(subject.slug, [topic.slug]);
        const mine = reload.filter((q) => q.topic === topic.slug);
        for (const q of mine) {
          const source = content.practice.find((p) => p.question === q.question);
          if (!source) continue; // topped up from elsewhere in the subject
          const accepted = (source.accept ?? []).map(normalise);
          if (source.choices?.length >= 2) ready += 1; else built += 1;
          expect(q.choices.length >= 2 && q.choices.length <= 4, `${key}: ${q.choices.length} buttons on "${q.question.slice(0, 40)}"`);
          expect(q.correct >= 0 && q.correct < q.choices.length, `${key}: no correct button on "${q.question.slice(0, 40)}"`);
          expect(accepted.includes(normalise(q.choices[q.correct])), `${key}: the "correct" button is not an accepted answer: ${q.choices[q.correct]}`);
          const wrong = q.choices.filter((_, i) => i !== q.correct);
          for (const w of wrong) {
            expect(!accepted.includes(normalise(w)), `${key}: the wrong button "${w}" is ALSO an accepted answer to "${q.question.slice(0, 40)}"`);
          }
          expect(new Set(q.choices.map(normalise)).size === q.choices.length, `${key}: two buttons say the same thing on "${q.question.slice(0, 40)}"`);
        }
      }
    }
  }
  console.log(`${ready} written multiple-choice questions and ${built} built from numeric answers are askable.`);
  expect(built > 400, `only ${built} questions were built from numeric answers — the widening is not working`);

  // ── The pools are big enough that a game does not repeat itself ───────────
  // A long playthrough asks roughly 40 questions; the pool has to beat that.
  for (const subject of SUBJECTS.slice(0, 8)) {
    const years = playableTopics(subject.slug);
    if (!years.length) continue;
    const two = years[0].topics.slice(0, 2).map((t) => t.slug);
    if (two.length < 2) continue;
    const { reload, easy } = buildGameQuestions(subject.slug, two);
    expect(reload.length >= 40, `${subject.slug}: two topics give only ${reload.length} reload questions`);
    expect(easy.length >= 8, `${subject.slug}: two topics give only ${easy.length} quick questions for stomps`);
    expect(new Set(reload.map((q) => normalise(q.question))).size === reload.length, `${subject.slug}: the reload pool repeats a question`);
    const counted = countGameQuestions(subject.slug, two);
    expect(counted.total === reload.length, `${subject.slug}: the picker's count (${counted.total}) disagrees with the pool (${reload.length})`);
    expect(counted.own > 0, `${subject.slug}: the picker says the chosen topics have no questions of their own`);
  }

  // ── Every pool question names a real topic of that subject ────────────────
  {
    const maths = playableTopics("maths")[0].topics.slice(0, 2).map((t) => t.slug);
    const { reload } = buildGameQuestions("maths", maths);
    const real = new Set(SUBJECTS.find((s) => s.slug === "maths").years.flatMap((y) => y.topics.map((t) => t.slug)));
    for (const q of reload) expect(real.has(q.topic), `a question claims to come from "${q.topic}", which is not a maths topic`);
    expect(reload.some((q) => maths.includes(q.topic)), "none of the questions come from the topics that were picked");
  }

  // ── A subject that does not exist gives nothing, rather than throwing ─────
  {
    const { reload, easy } = buildGameQuestions("not-a-subject", ["nope"]);
    expect(reload.length === 0 && easy.length === 0, "an unknown subject produced questions");
  }
} finally {
  rmSync(out, { recursive: true, force: true });
}

console.log("");
if (failures === 0) console.log(`All ${checks} game-question checks passed.`);
else { console.error(`${failures} of ${checks} game-question checks FAILED.`); process.exitCode = 1; }
