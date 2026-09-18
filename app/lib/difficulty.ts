// How hard a question is, on a scale a recommendation can climb.
//
// ─────────────────────────────────────────────────────────────────────────────
// DERIVED, NOT WRITTEN ON 1,695 QUESTIONS — the same choice this codebase has
// now made for badges, XP, streaks, the teacher-tools library, marks and
// lesson ordering, and for the same reason. A number typed onto every question
// is 1,695 chances to be inconsistent, with nothing able to tell you which
// ones are wrong and no way to see the reasoning. A rule in one place can be
// argued with, corrected once, and applied everywhere.
//
// ⚠️ THE MARK TARIFF ALONE IS NOT ENOUGH, WHICH IS WHY THIS FILE EXISTS.
// The obvious move was to reuse `marksFor()`, which the lesson builder already
// orders by. Measured across these four subjects first:
//
//     maths      1 mark ×316   2 ×95   3 ×26
//     biology    1 mark ×367   2 ×5    3 ×13   4 ×27   6 ×8
//
// Seventy per cent of every subject sits on one value, so a ladder built from
// the tariff has one rung and the "gets harder as you go" part of the feature
// would be a fiction. The tariff says how much a question is WORTH. It does
// not distinguish recognising an answer from a list, which is the easiest
// thing a question can ask, from recalling it cold — and those are both 1
// mark.
//
// So difficulty reads the tariff AND the shape of the question.
// ─────────────────────────────────────────────────────────────────────────────

import { marksFor, type MarkableQuestion } from "./marks";

/**
 * 1 Recognise — pick the right answer out of a list.
 * 2 Recall    — produce a fact from memory, nothing to choose from.
 * 3 Apply     — use a method on given numbers; there is working.
 * 4 Analyse   — several steps, or Higher-tier material.
 * 5 Explain   — extended writing with no single right wording.
 *
 * Deliberately the shape of Bloom's taxonomy rather than a made-up scale,
 * because that is the ladder teachers already think in and Matthew's maths
 * teacher's suggestion — start where they are, go up — is exactly a Bloom
 * climb. It is not a claim to BE Bloom's: a real classification needs to know
 * what the student has been taught, and this only sees the question.
 */
export type Difficulty = 1 | 2 | 3 | 4 | 5;

export type GradableQuestion = MarkableQuestion & {
  higherOnly?: boolean;
  /** An explicit level always beats the derived one. See the note below. */
  difficulty?: number;
};

function clamp(n: number): Difficulty {
  return Math.min(5, Math.max(1, Math.round(n))) as Difficulty;
}

export function difficultyOf(subject: string, q: GradableQuestion): Difficulty {
  // ⚠️ AN AUTHOR WHO HAS LOOKED AT THE QUESTION ALWAYS WINS, and unlike
  // `marks` this escape hatch was wired through the content type on the day it
  // was written. The marks one was documented for three days before anybody
  // noticed it did not compile, because the field existed on marks.ts's own
  // type and not on the content type. Checked here by check-content.mjs.
  if (typeof q.difficulty === "number" && q.difficulty >= 1 && q.difficulty <= 5) {
    return clamp(q.difficulty);
  }

  const marks = marksFor(subject, q);

  // 5 — no `accept` list means no string comparison can mark it, which is this
  // codebase's own definition of an extended answer. Those are the hardest
  // thing on the site regardless of what they are worth.
  if (!q.accept) return 5;

  // 4 — Higher tier is, by definition, the material Foundation students are
  // not expected to reach. That is a statement about difficulty made by the
  // exam board rather than by this file, so it outranks the tariff.
  if (q.higherOnly) return marks >= 4 ? 5 : 4;

  // 1 — recognising an answer among four or five. The tariff says 1 mark and
  // so does a cold-recall question, but being handed the answer alongside
  // three wrong ones is a genuinely easier task, and a ladder that cannot see
  // that has no bottom rung.
  if (q.choices && q.choices.length > 0) return 1;

  // 3+ — a tariff above 1 means the derivation found working to do: AQA pays
  // per completed stage, so more marks is literally more steps.
  //
  // ⚠️ THE 4 BOUNDARY IS AT THREE MARKS, NOT FOUR, AND THAT WAS MEASURED.
  // Four is the intuitive place for it and it makes level 4 unreachable: the
  // mark derivation caps an auto-marked calculation at 3 by design (see the
  // banding comment in marks.ts), so nothing auto-marked can ever score 4 and
  // the rung would only be populated by Higher-tier flags. Physics carries
  // none at all, so physics had exactly ZERO level-4 questions across all
  // nineteen topics — a ladder with a missing rung, in the subject with the
  // most multi-step calculation on the site. Moving the boundary to 3 gives
  // it 85.
  //
  // The temptation was to flag more questions `higherOnly` to fill the gap
  // instead. That would have been a content lie: this codebase's stated tier
  // policy is to UNDER-flag, because wrongly flagging something tells a
  // Foundation student to skip material that will be on their paper.
  if (marks >= 3) return 4;
  if (marks >= 2) return 3;

  // 2 — one mark, typed from memory, nothing to choose from.
  return 2;
}

/** How many questions a topic has at each level. Used to find thin rungs. */
export function difficultySpread(
  subject: string,
  questions: GradableQuestion[],
): Record<Difficulty, number> {
  const out = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 } as Record<Difficulty, number>;
  for (const q of questions) out[difficultyOf(subject, q)] += 1;
  return out;
}

export const DIFFICULTY_LABELS: Record<Difficulty, string> = {
  1: "Recognise",
  2: "Recall",
  3: "Apply",
  4: "Analyse",
  5: "Explain",
};
