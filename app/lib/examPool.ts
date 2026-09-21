// Shared by every page that builds a mixed-topic, timed question set from a
// whole subject — originally just the quick "{Subject} test"
// (subjects/[subject]/exam), now also the longer "past paper" mode
// (subjects/[subject]/past-paper). Pulled out into its own file rather than
// left duplicated across both pages the moment a second one needed it —
// two copies of "how do we build the pool" is exactly the kind of thing
// that quietly drifts apart, the same reasoning `normalise()` and
// `shuffle()` were already shared rather than copied.

import { getTopicContent } from "./content";
import { marksFor } from "./marks";
import type { ExamQuestion } from "../components/MockExam";
import type { YearGroup } from "./subjects";

// Every practice question across every WRITTEN topic in the given year
// groups, each tagged with where it came from. A topic with no content yet
// ("content coming soon") simply contributes nothing — not an error, the
// same way an empty optional section on a topic page isn't an error.
export function collectQuestionPool(
  subjectSlug: string,
  years: Pick<YearGroup, "topics">[],
): ExamQuestion[] {
  return years.flatMap((group) =>
    group.topics.flatMap((topic) => {
      const content = getTopicContent(subjectSlug, topic.slug);
      return (content?.practice ?? []).map((q) => ({
        ...q,
        topicSlug: topic.slug,
        topicTitle: topic.title,
      }));
    }),
  );
}

// A query-string value comes back as `undefined` (missing), a single string
// (one value), or an array of strings (the same key repeated) — Next.js
// decides which of those three shapes based on how many times the key
// appeared in the URL. Folding all three into one plain array means the
// rest of a page can just check "is this value present" the same way
// regardless of how many times the key showed up. Used both for `years`
// (naturally repeatable — one tick per box) and for `configured` (normally
// appears once, but nothing stops a hand-edited or bookmarked URL from
// repeating it too, and this way that can't silently break the "has the
// form been submitted" check).
export function normalizeQueryValue(raw: string | string[] | undefined): string[] {
  if (raw === undefined) return [];
  return Array.isArray(raw) ? raw : [raw];
}

// ─────────────────────────────────────────────────────────────────────────────
// ONE MINUTE PER MARK
//
// The standard exam-technique rule, and the one Matthew picked in September:
// "That is actually sick." It could only be taught once every question had a
// tariff (lib/marks.ts), and it turned out it could not be taught at all on
// the clock the tests used to have.
//
// ⚠️ EVERY SUBJECT'S TEST ASKED FOR MORE MARKS THAN IT HAD MINUTES.
// The subject test was 20 questions in a fixed 20 minutes, set when nearly
// every question was worth 1. Measured once 1,155 harder questions had been
// added, over 500 random tests per subject:
//
//     physics    median 46 marks in 20 minutes   2.30 marks a minute
//     chemistry         40                      2.00
//     maths             36                      1.80
//     history           26                      1.30   (never expanded)
//
// More than twice a real paper's pace, in every subject — including the ones
// that were never touched. A pace indicator on that clock would have told
// every student they were behind from the first minute, which is not advice.
// So the clock now follows the rule instead of the question count.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Shuffled questions, taken in order while they fit a MARK budget, so the
 * paper takes the time its marks say it should.
 *
 * Greedy rather than optimal, on purpose: the input is already shuffled, so
 * taking whatever fits next preserves the randomness a knapsack solver would
 * throw away by always preferring the same combinations. A question worth more
 * than what is left is skipped rather than allowed to overshoot, so the total
 * never exceeds the budget and the clock is never shorter than the paper.
 */
export function pickToMarkBudget<T extends { accept?: string[]; question: string; choices?: string[] }>(
  shuffled: T[],
  subjectSlug: string,
  budget: number,
  maxQuestions = 50,
): T[] {
  const picked: T[] = [];
  let used = 0;
  for (const q of shuffled) {
    if (picked.length >= maxQuestions || used >= budget) break;
    const m = marksFor(subjectSlug, q);
    if (used + m > budget) continue;
    picked.push(q);
    used += m;
  }
  return picked;
}

/** Seconds allowed for a set of questions, at exactly one minute per mark. */
export function secondsAtOneMinutePerMark<T extends { accept?: string[]; question: string; choices?: string[] }>(
  questions: T[],
  subjectSlug: string,
): number {
  const marks = questions.reduce((n, q) => n + marksFor(subjectSlug, q), 0);
  return Math.max(60, marks * 60);
}
