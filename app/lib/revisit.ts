// Turning "the questions you got wrong that are due again" into something the
// daily-practice runner can play.
//
// Pure: due list in, set out. The database half is getDueQuestions in
// question-review.ts; keeping the two apart is what lets
// scripts/check-question-review.mjs exercise this with no Supabase anywhere
// near it — the same split daily-practice.ts / daily-practice-server.ts makes.

import { getTopicContent } from "./content";
import { difficultyOf } from "./difficulty";
import { marksFor } from "./marks";
import { SUBJECTS } from "./subjects";
import type { DailyQuestion, DailySet } from "./daily-practice";
import type { DueQuestion } from "./question-review";

/**
 * At most this many a day.
 *
 * ⚠️ A REVIEW LIST THAT GROWS WITHOUT LIMIT STOPS BEING OPENED.
 * A student who has a bad week can have forty wrong answers due at once, and
 * forty questions above today's ten reads as a punishment, not a nudge. Most
 * overdue first, five at a time; the rest are still there tomorrow, because
 * nothing about a question's schedule changes until it is actually answered.
 */
export const MAX_REVISIT = 5;

export function buildRevisitSet(
  due: DueQuestion[],
  date: string,
  // Questions already in today's climbing set. Answering one there records it
  // exactly as answering it here would, so showing it twice on one page is
  // just asking the same question twice.
  alreadyToday: Set<string> = new Set(),
): DailySet {
  const questions: DailyQuestion[] = [];

  for (const d of due) {
    if (questions.length >= MAX_REVISIT) break;
    if (alreadyToday.has(d.question)) continue;

    const subject = SUBJECTS.find((s) => s.slug === d.subjectSlug);
    const topic = subject?.years.flatMap((y) => y.topics).find((t) => t.slug === d.topicSlug);
    const q = getTopicContent(d.subjectSlug, d.topicSlug)?.practice?.find((p) => p.question === d.question);
    // Only auto-marked questions can ever be WRONG — a self-marked one is
    // never recorded — but the content may have changed since, so check.
    if (!subject || !topic || !q || !q.accept) continue;

    questions.push({
      subjectSlug: subject.slug,
      subjectName: subject.name,
      accent: subject.accent,
      topicSlug: topic.slug,
      topicTitle: topic.title,
      question: q.question,
      answer: q.answer,
      accept: q.accept,
      choices: q.choices,
      higherOnly: q.higherOnly,
      marks: marksFor(subject.slug, q),
      difficulty: difficultyOf(subject.slug, q),
      selfMarked: false,
    });
  }

  // Deliberately NOT sorted by difficulty. These are not a climb; they are a
  // list of specific mistakes, and the most overdue one comes first.
  const n = questions.length;
  return {
    date,
    questions,
    focus: [],
    minutes: questions.reduce((sum, q) => sum + q.marks, 0),
    summary:
      n === 0
        ? ""
        : n === 1
          ? "1 question you got wrong before. Get it right and it waits longer before coming back; get it wrong and it comes back sooner."
          : `${n} questions you got wrong before. Get one right and it waits longer before coming back; get it wrong and it comes back sooner.`,
  };
}
