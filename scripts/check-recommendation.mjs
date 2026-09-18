// The daily recommendation, driven over hundreds of invented students.
//
// ⚠️ THIS IS A PROPERTIES CHECK, NOT AN EXAMPLE CHECK.
//    A recommender is easy to test wrongly: pick one student, look at the ten
//    questions, decide they seem sensible. That tells you nothing about the
//    student who has answered one question, or the one who is perfect at
//    everything, or the one whose weakest topic has a gap in its ladder. The
//    interesting behaviour is at the edges, and the edges are where a feature
//    that silently does nothing hides.
//
//    So: invent students across the whole range, run the real algorithm, and
//    assert the things that must be true for ALL of them.

import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createRequire } from "node:module";

const require_ = createRequire(import.meta.url);
const out = mkdtempSync(join(tmpdir(), "rec-check-"));
let checks = 0, failures = 0;
function expect(ok, message) {
  checks += 1;
  if (!ok) { failures += 1; console.error(`  FAIL: ${message}`); }
}

try {
  execFileSync(process.execPath, [
    "node_modules/typescript/bin/tsc",
    "app/lib/subjects.ts", "app/lib/content/index.ts", "app/lib/marks.ts",
    "app/lib/difficulty.ts", "app/lib/shuffle.ts", "app/lib/daily-practice.ts",
    "--outDir", out, "--module", "commonjs", "--target", "es2020",
    "--moduleResolution", "node", "--skipLibCheck",
  ], { stdio: "inherit" });

  const { buildDailySet, eligibleTopics, smoothedAccuracy, DAILY_SIZE } =
    require_(join(out, "daily-practice.js"));
  const { difficultyOf } = require_(join(out, "difficulty.js"));
  const { TOPIC_CONTENT } = require_(join(out, "content", "index.js"));

  const topics = eligibleTopics();
  expect(topics.length > 50, `only ${topics.length} topics are deep enough to recommend from`);
  console.log(`${topics.length} topics have a deep enough ladder to be recommended.`);

  // ── The smoothing behaves as its comment claims ───────────────────────────
  expect(smoothedAccuracy(0, 1) > 0.4, "one wrong answer pins a topic to 0% — the prior is not working");
  expect(smoothedAccuracy(0, 5) < 0.35, "five wrong out of five is not being recognised as weak");
  expect(smoothedAccuracy(0, 40) < 0.1, "forty wrong answers are still being softened — the prior never yields");
  expect(
    smoothedAccuracy(0, 5) < smoothedAccuracy(0, 1),
    "a topic failed five times must rank below one failed once",
  );
  expect(
    smoothedAccuracy(18, 30) > smoothedAccuracy(0, 3),
    "a well-attempted 60% topic should not outrank a barely-attempted one",
  );

  // ── A student with no history at all ──────────────────────────────────────
  {
    const set = buildDailySet({ userId: "new-user", scores: [], touched: new Set(), date: "2026-09-18" });
    expect(set.questions.length === DAILY_SIZE, `a brand-new student got ${set.questions.length} questions, not ${DAILY_SIZE}`);
    expect(set.focus.length > 0, "a brand-new student got no focus topics");
    expect(set.summary.length > 10, "a brand-new student got no summary line");
    expect(!set.summary.includes("NaN"), "the summary contains NaN");
  }

  // ── Hundreds of invented students ─────────────────────────────────────────
  let studied = 0;
  for (let n = 0; n < 300; n++) {
    // Deterministic pseudo-random history, so a failure can be reproduced.
    let seed = n * 2654435761 % 2147483647;
    const rnd = () => (seed = (seed * 48271) % 2147483647) / 2147483647;

    const howMany = Math.floor(rnd() * 12);
    const scores = [];
    const touched = new Set();
    for (let i = 0; i < howMany; i++) {
      const t = topics[Math.floor(rnd() * topics.length)];
      const key = `${t.subjectSlug}/${t.topicSlug}`;
      if (touched.has(key)) continue;
      touched.add(key);
      const answered = 1 + Math.floor(rnd() * 40);
      scores.push({
        subjectSlug: t.subjectSlug, topicSlug: t.topicSlug,
        questionsAnswered: answered,
        correct: Math.floor(rnd() * (answered + 1)),
      });
    }

    const date = `2026-09-${String(1 + (n % 28)).padStart(2, "0")}`;
    const set = buildDailySet({ userId: `student-${n}`, scores, touched, date });
    studied += 1;

    expect(set.questions.length === DAILY_SIZE,
      `student ${n} got ${set.questions.length} questions, not ${DAILY_SIZE}`);

    // THE CLIMB. The whole point of the feature.
    for (let i = 1; i < set.questions.length; i++) {
      expect(set.questions[i].difficulty >= set.questions[i - 1].difficulty,
        `student ${n}: the set goes backwards — level ${set.questions[i - 1].difficulty} then ${set.questions[i].difficulty}`);
    }

    // No question may appear twice in one day's set.
    const seen = new Set(set.questions.map((q) => q.question));
    expect(seen.size === set.questions.length, `student ${n} was given the same question twice in one day`);

    // ⚠️ IT MUST ACTUALLY TARGET THE WEAK TOPIC. A recommender that returns ten
    // valid questions from anywhere would pass every check above and do
    // nothing useful. If the student has attempted anything, their single
    // weakest attempted topic must be one of the ones drawn from.
    if (scores.length > 0) {
      const weakest = [...scores]
        .sort((a, b) =>
          smoothedAccuracy(a.correct, a.questionsAnswered) - smoothedAccuracy(b.correct, b.questionsAnswered))
        [0];
      const drawn = new Set(set.questions.map((q) => `${q.subjectSlug}/${q.topicSlug}`));
      expect(drawn.has(`${weakest.subjectSlug}/${weakest.topicSlug}`),
        `student ${n}: weakest topic ${weakest.subjectSlug}/${weakest.topicSlug} is not in their set`);
    }

    // Stable within a day, different between days.
    const again = buildDailySet({ userId: `student-${n}`, scores, touched, date });
    expect(JSON.stringify(again.questions) === JSON.stringify(set.questions),
      `student ${n}: two calls on the same day returned different sets`);

    // The difficulty recorded on each question matches the content.
    //
    // ⚠️ COMPARED AGAINST THE REAL CONTENT OBJECT, NOT A REBUILT ONE.
    //    The first version of this check reconstructed a question from the
    //    fields the daily set carries and re-derived from that. It reported six
    //    mismatches, and every one was the check: a rebuilt object drops the
    //    explicit `marks` override that four maths questions carry, so the
    //    reconstruction derived a different tariff and therefore a different
    //    level. The set was right the whole time. Look the original up.
    for (const q of set.questions) {
      const original = (TOPIC_CONTENT[`${q.subjectSlug}/${q.topicSlug}`].practice ?? [])
        .find((x) => x.question === q.question);
      expect(original !== undefined,
        `student ${n}: a question in the set is not in the content at all`);
      expect(original && q.difficulty === difficultyOf(q.subjectSlug, original),
        `student ${n}: a question's recorded difficulty does not match the content`);
    }
  }
  console.log(`${studied} invented students run through the real algorithm.`);

  // ── The set genuinely changes from day to day ─────────────────────────────
  {
    const scores = [{ subjectSlug: "maths", topicSlug: "algebra-basics", questionsAnswered: 20, correct: 4 }];
    const touched = new Set(["maths/algebra-basics"]);
    const a = buildDailySet({ userId: "rotator", scores, touched, date: "2026-09-18" });
    const b = buildDailySet({ userId: "rotator", scores, touched, date: "2026-09-19" });
    const sameQuestions = a.questions.filter((q) => b.questions.some((x) => x.question === q.question)).length;
    expect(sameQuestions < a.questions.length,
      "the set is identical two days running — the rotation is not rotating");
    console.log(`day-to-day overlap for one fixed student: ${sameQuestions}/${a.questions.length} questions repeat.`);
  }

  // ── Two different students on the same day are not handed the same set ────
  {
    const s = new Set();
    for (let i = 0; i < 12; i++) {
      const set = buildDailySet({ userId: `fresh-${i}`, scores: [], touched: new Set(), date: "2026-09-18" });
      s.add(set.questions.map((q) => q.question).join("|"));
    }
    expect(s.size > 1, "every brand-new student is handed the identical set");
  }

  if (failures > 0) {
    console.error(`\n${failures} of ${checks} recommendation checks FAILED.`);
    process.exit(1);
  }
  console.log(`\nAll ${checks} recommendation checks passed.`);
} finally {
  rmSync(out, { recursive: true, force: true });
}
