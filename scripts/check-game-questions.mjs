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
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
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
    "app/lib/weightedShuffle.ts", "app/lib/gameSave.ts",
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

  // ── The model answer shown after a WRONG answer ───────────────────────────
  //
  // Getting a question wrong used to teach nothing: the right button went green
  // for 0.7 seconds and the game moved on. The site already stores a model
  // answer for every question — often with the working — so the game now shows
  // it. Two ways that can go quietly wrong, and neither shows up on screen:
  // the explanation stops appearing at all (a content shape changes and every
  // `why` comes back undefined), or it says nothing the button did not.
  {
    const { whyFor } = require_(join(out, "game-questions.js"));
    // the filter fires on an answer that only restates the button
    for (const [answer, right] of [["32", "32"], ["32.", "32"], ["About 100", "100"], ["Yes", "Yes"], ["", "7"], ["   ", "7"]]) {
      expect(whyFor(answer, right) === undefined, `"${answer}" was offered as an explanation of the button "${right}"`);
    }
    // and does not fire on one that teaches the method
    const real = whyFor("32, because 2 x 2 x 2 x 2 x 2 = 32.", "32");
    expect(real === "32, because 2 x 2 x 2 x 2 x 2 = 32.", `a real worked answer was thrown away: ${real}`);
    // a long one is cut at a sentence, never mid-word
    const long = whyFor(`${"The first step is to find the common factor. ".repeat(8)}`, "6");
    expect(long !== undefined && long.length <= 190 && /[.!?…]$/.test(long), `a long model answer was cut badly: "${long?.slice(-40)}"`);
    // ⚠️ THE OLD MID-WORD CHECK COULD NOT FIRE. It asked whether the text held
    // whitespace then non-space then "…" — true of every multi-word string, so
    // it could only ever have caught a `why` containing no spaces at all.
    // Asserted against the function instead, with input that really does cut
    // inside a word.
    const oneWord = whyFor("x " + "supercalifragilisticexpialidocious".repeat(9), "x");
    expect(oneWord === undefined || !/[A-Za-z]{25,}…$/.test(oneWord), `a single enormous word was cut mid-word: "${oneWord?.slice(-30)}"`);
    const dangling = whyFor(`${"Peace is central to the tradition and war is read as a failure of it. ".repeat(2)}Violence is a distortion of, not an expression of, their faith.`, "Peace");
    expect(dangling !== undefined && !/\bnot\s*…$/.test(dangling), `the cut left a dangling negation: "${dangling?.slice(-40)}"`);
    // a real line break in a model answer becomes a space on the canvas, so
    // the prose is kept and the drawn-out vector after it is dropped
    const multiline = whyFor("A scalar multiplies BOTH components, so 3a is the column vector\n\u239b 6\u239e\n\u239d15\u23a0", "18");
    expect(multiline !== undefined && !/[\r\n\u239b\u239e\u239d\u23a0]/.test(multiline),
      `a model answer with a drawn vector in it reached the canvas: ${JSON.stringify(multiline)}`);

    let withWhy = 0, asked = 0, tooLong = 0, saysNothing = 0, danglingNegation = 0;
    for (const subject of SUBJECTS) {
      for (const year of subject.years) {
        for (const topic of year.topics) {
          for (const q of buildGameQuestions(subject.slug, [topic.slug]).reload) {
            if (q.topic !== topic.slug) continue;
            asked += 1;
            if (!q.why) continue;
            withWhy += 1;
            if (q.why.length > 190) tooLong += 1;
            if (normalise(q.why) === normalise(q.choices[q.correct])) saysNothing += 1;
            // ⚠️ and the cut must not leave the reader with a REVERSED sense.
            // One real explanation ended "…as a distortion of, not", which
            // says the opposite of what the full answer says.
            if (/\b(?:not|never|unless|except|rather than|instead of)\s*…$/i.test(q.why)) danglingNegation += 1;
          }
        }
      }
    }
    expect(tooLong === 0, `${tooLong} explanations are longer than the panel can hold`);
    expect(saysNothing === 0, `${saysNothing} explanations say exactly what their own button says`);
    expect(danglingNegation === 0, `${danglingNegation} explanations end on a dangling negation, which reverses what they say`);
    // ⚠️ A share, not a count: the point is that the feature is actually
    // reaching questions. It is 100% today, so a drop to even 90% means a
    // content shape changed underneath it.
    expect(withWhy / asked > 0.9, `only ${((withWhy / asked) * 100).toFixed(0)}% of askable questions explain themselves (${withWhy} of ${asked})`);
    console.log(`${((withWhy / asked) * 100).toFixed(0)}% of askable questions carry a model answer to show after a wrong one.`);
  }

  // ── Questions from your weakest topics (2026-10-10) ─────────────────────
  {
    const { weakTopicWeights, MIN_TOPIC_WEIGHT, MAX_TOPIC_WEIGHT } = require_(join(out, "game-questions.js"));
    const { weightedShuffle } = require_(join(out, "weightedShuffle.js"));

    // the weights
    const w = weakTopicWeights([
      { topicSlug: "struggling", correct: 6, questionsAnswered: 30 },  // 20%
      { topicSlug: "average", correct: 18, questionsAnswered: 30 },    // 60%
      { topicSlug: "solid", correct: 30, questionsAnswered: 30 },      // 100%
      { topicSlug: "one-wrong", correct: 0, questionsAnswered: 1 },    // one unlucky answer
      { topicSlug: "untouched", correct: 0, questionsAnswered: 0 },
    ]);
    expect(Math.abs(w.untouched - 1) < 1e-9, `a topic with no history weighs ${w.untouched}, not 1 — a new student would not get the even deal`);
    expect(Math.abs(w.average - 1) < 0.05, `a topic at the prior's 60% weighs ${w.average.toFixed(2)}, not about 1`);
    expect(w.struggling > 1.8, `a topic answered at 20% over thirty questions only weighs ${w.struggling.toFixed(2)}`);
    expect(w.solid >= MIN_TOPIC_WEIGHT && w.solid < 0.6, `a mastered topic weighs ${w.solid.toFixed(2)} — it should fall close to the floor, not vanish`);
    expect(w.struggling <= MAX_TOPIC_WEIGHT, "a weight escaped its ceiling, so one topic could take over the whole game");
    // ⚠️ the reason for smoothing: ONE wrong answer must not make a topic the
    // weakest thing you have ever done
    expect(w["one-wrong"] < w.struggling && w["one-wrong"] < 1.5,
      `one wrong answer out of one weighs ${w["one-wrong"].toFixed(2)} — a single unlucky question would dominate every game`);
    expect(Object.keys(weakTopicWeights([])).length === 0, "no history should give no weights at all, so every topic defaults to 1");

    // the shuffle: deterministic rand so this check cannot flake
    let seed = 12345;
    const rand = () => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; };
    const items = Array.from({ length: 40 }, (_, i) => ({ id: i, topic: i < 10 ? "weak" : "strong" }));
    const out1 = weightedShuffle(items, (x) => (x.topic === "weak" ? 3 : 1), rand);
    expect(out1.length === items.length && new Set(out1.map((x) => x.id)).size === items.length,
      "the weighted shuffle dropped or repeated a question — every question must appear exactly once per pass");
    // over many passes, the weak topic should dominate the FRONT of the deck
    let weakInFirstTen = 0, passes = 400;
    for (let i = 0; i < passes; i++) {
      weakInFirstTen += weightedShuffle(items, (x) => (x.topic === "weak" ? 3 : 1), rand).slice(0, 10).filter((x) => x.topic === "weak").length;
    }
    const share = weakInFirstTen / (passes * 10);
    // 10 of 40 is 25% with no weighting; weight 3 should roughly double that
    expect(share > 0.42, `weak-topic questions are only ${(share * 100).toFixed(0)}% of the first ten drawn (25% would be no weighting at all)`);
    // and equal weights must still be a fair shuffle
    let firstWeak = 0;
    for (let i = 0; i < passes; i++) if (weightedShuffle(items, () => 1, rand)[0].topic === "weak") firstWeak++;
    expect(Math.abs(firstWeak / passes - 0.25) < 0.08, `with equal weights the first item is weak ${((firstWeak / passes) * 100).toFixed(0)}% of the time, not about 25%`);
    console.log(`Weak-topic questions make up ${(share * 100).toFixed(0)}% of the first ten drawn at weight 3 (25% unweighted).`);
  }

  // ── As many topics as you like (2026-10-11) ─────────────────────────────
  //
  // Matthew: "make sure that you can pick more than eight topics, like as many
  // as you want". The cap was 8 in two places — the play page sliced the list,
  // and a save refused a setup with a ninth topic — so both are checked.
  {
    const { SAVE_TOPICS_MAX, parseSaveSetup } = require_(join(out, "gameSave.js"));
    let biggest = 0, biggestName = "";
    for (const subject of SUBJECTS) {
      const slugs = playableTopics(subject.slug).flatMap((y) => y.topics.map((t) => t.slug));
      if (slugs.length > biggest) { biggest = slugs.length; biggestName = subject.name; }
      // every topic of every subject ticked must still make a save that keeps them all
      const setup = parseSaveSetup({ subject: subject.slug, topics: slugs, mascot: "pixel" });
      if (slugs.length) expect(setup?.topics.length === slugs.length, `${subject.name}: a game with all ${slugs.length} topics could not be saved`);
    }
    expect(biggest <= SAVE_TOPICS_MAX, `${biggestName} has ${biggest} playable topics but a save holds at most ${SAVE_TOPICS_MAX}`);

    // Ticking everything must give a game drawn from the whole subject, not
    // from whichever topics happen to come first in the list.
    const maths = playableTopics("maths").flatMap((y) => y.topics.map((t) => t.slug));
    const { reload } = buildGameQuestions("maths", maths);
    const seen = new Set(reload.map((q) => q.topic));
    expect(reload.length >= 200, `all ${maths.length} maths topics give a pool of only ${reload.length}`);
    expect(seen.size >= Math.ceil(maths.length * 0.9), `all ${maths.length} maths topics ticked, but the pool only draws on ${seen.size} of them`);
    const { own, total } = countGameQuestions("maths", maths);
    expect(own > total, `all maths topics ticked, yet "from your topics" (${own}) is not the whole pool (${total})`);

    // ⚠️ and nothing quietly puts a cap back. Comments are stripped first: the
    // page's own comment explaining that the cap was removed names it.
    const page = readFileSync("app/early-access/play/page.tsx", "utf8").replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "");
    expect(!/MAX_TOPICS/.test(page), "the play page has a MAX_TOPICS again — Matthew asked for as many topics as you like");
    expect(!/q\.topic\)[^;]*\.slice\(/.test(page), "the play page slices the chosen topics down to a fixed number again");
    expect(/\(as many as you like\)/.test(page), "the picker no longer tells the player there is no limit");
    console.log(`All ${maths.length} maths topics ticked: ${reload.length} questions in the pool from ${seen.size} topics; saves hold up to ${SAVE_TOPICS_MAX} topics (largest subject: ${biggest}).`);
  }

  // ── The quick maths bank (2026-10-11) ───────────────────────────────────
  // 500 multiple-choice questions written for the game's 10-second reload:
  // short stems, four buttons. A floor, so they cannot quietly go missing.
  {
    let quick = 0, mcq = 0;
    for (const [key, c] of Object.entries(TOPIC_CONTENT)) {
      if (!key.startsWith("maths/")) continue;
      for (const p of c.practice ?? []) {
        if (!p.choices) continue;
        mcq += 1;
        if (p.question.length <= 95 && p.choices.length === 4 && p.choices.every((x) => x.length <= 22)) quick += 1;
      }
    }
    expect(mcq >= 989, `maths has ${mcq} multiple-choice questions — it had 989 after the second game batch`);
    expect(quick >= 600, `only ${quick} maths multiple-choice questions are short enough for a 10-second reload`);
    console.log(`Maths: ${mcq} multiple-choice questions, ${quick} of them game-quick (stem ≤ 95 characters, four short buttons).`);
  }
} finally {
  rmSync(out, { recursive: true, force: true });
}

console.log("");
if (failures === 0) console.log(`All ${checks} game-question checks passed.`);
else { console.error(`${failures} of ${checks} game-question checks FAILED.`); process.exitCode = 1; }
