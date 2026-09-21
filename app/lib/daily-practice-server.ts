// Reading a student's history and handing it to the recommender.
//
// Kept apart from `daily-practice.ts` on purpose. That file is a pure function
// — history in, questions out — so it can be run over three hundred invented
// students in `scripts/check-recommendation.mjs` with no database anywhere
// near it. This file is the half that touches Supabase, and it is small
// because all the thinking lives on the other side of that line.

import { getTopicAccuracies, getTouchedTopics } from "./progress";
import { buildDailySet, type DailySet } from "./daily-practice";
import { getDueQuestions } from "./question-review";
import { buildRevisitSet } from "./revisit";

/** Today in the UK, as YYYY-MM-DD — the same day boundary progress uses. */
export function todayKey(now: Date = new Date()): string {
  return now.toLocaleDateString("en-CA", { timeZone: "Europe/London" });
}

export async function getDailySet(userId: string): Promise<DailySet> {
  // Both readers already exist and both are cheap: they fold the same
  // `activity` rows the progress page reads, and Supabase is asked once.
  const [accuracies, touched] = await Promise.all([
    getTopicAccuracies(userId),
    getTouchedTopics(userId),
  ]);

  return buildDailySet({
    userId,
    scores: accuracies.map((a) => ({
      subjectSlug: a.subjectSlug,
      topicSlug: a.topicSlug,
      questionsAnswered: a.questionsAnswered,
      correct: a.correct,
    })),
    touched,
    date: todayKey(),
  });
}

/**
 * Today's wrong-answer revisit list. [] when the table does not exist yet, when
 * nothing is due, or on any failure — the section then simply does not appear.
 */
export async function getRevisitSet(userId: string, today: DailySet): Promise<DailySet> {
  const due = await getDueQuestions(userId);
  return buildRevisitSet(due, today.date, new Set(today.questions.map((q) => q.question)));
}
