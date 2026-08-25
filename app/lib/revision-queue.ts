// THE GLOBAL "WHAT SHOULD I REVISE TODAY" QUEUE.
//
// Every other "what's next" hint on this site only ever looks at ONE thing:
// the flashcard review page only knows about due flashcards, and
// chooseNextUp (progress.ts) only ever names a single topic in a single
// subject. A student with weak spots in three different subjects and a pile
// of overdue flashcards in a fourth got no single place that told them so —
// they'd have to already know to check /review, then guess which subject
// needed the most attention.
//
// This file combines all three signals — overdue flashcards, weak-accuracy
// topics, and never-touched topics — into ONE ranked list, aggregated
// across every subject on the site, not scoped to whichever one you happen
// to be looking at. That's the whole point of "make it global."
//
// Built by COMBINING existing readers (getDueFlashcards, getTopicAccuracies,
// getTouchedTopics) rather than inventing a fourth way to read the activity
// log — the same "derive, don't store" discipline the rest of progress.ts
// and flashcard-review.ts already follow. Nothing here is written to the
// database; it's recomputed fresh every time the page loads.
//
// Deliberately a SEPARATE file from progress.ts, even though it leans on
// progress.ts heavily: progress.ts's job is turning activity into a
// subject-shaped Progress object for /progress and /dashboard's scoreboard.
// This is a different shape entirely — a ranked queue of ACTIONS — built on
// top of it, the same way flashcard-review.ts already sits alongside
// progress.ts rather than inside it.

import { SUBJECTS, type Subject } from "./subjects";
import { TOPIC_CONTENT } from "./content";
import { getTopicAccuracies, getTouchedTopics } from "./progress";
import { getDueFlashcards } from "./flashcard-review";

export type RevisionQueueItem = {
  /** Stable across renders — used as the React key and nothing else. */
  id: string;
  kind: "flashcards" | "weak-topic" | "new-topic";
  subjectSlug: string;
  subjectName: string;
  accent: string;
  mascot: Subject["mascot"];
  /** The card's headline — a topic title, or "N flashcards due". */
  title: string;
  /** The line underneath explaining WHY this is here. */
  detail: string;
  href: string;
};

// A short label per kind, shared between the dashboard preview and the full
// /revise page so the two can never quietly say something different about
// the same kind of item.
export const QUEUE_KIND_LABELS: Record<RevisionQueueItem["kind"], string> = {
  flashcards: "Due for review",
  "weak-topic": "Needs work",
  "new-topic": "Not started",
};

// Below this accuracy, a topic counts as "weak" — worth resurfacing even
// though it's technically been covered.
const WEAK_ACCURACY_THRESHOLD = 0.6;

// Below this many answers, one unlucky guess (or one lucky one) can swing
// "accuracy" wildly. Three is enough to mean something without demanding a
// student grind a topic they've barely touched just to qualify for a
// recommendation about it.
const MIN_QUESTIONS_FOR_WEAK = 3;

// How long the queue is allowed to get. A "today" list with thirty items on
// it stops being a queue and starts being homework — this caps it to
// something that fits on one screen without scrolling forever. Flashcards
// are sliced in first (see the comment below on why they outrank
// everything else), then weak topics worst-first, then new topics from the
// least-covered subjects — so the cap always drops the LEAST urgent items,
// never the most.
const MAX_QUEUE_ITEMS = 8;

export async function getRevisionQueue(userId: string): Promise<RevisionQueueItem[]> {
  const bySlug = new Map(SUBJECTS.map((s) => [s.slug, s]));

  // Three independent reads of the same activity log, same trade-off
  // progress.ts already makes throughout — see the comment above
  // getTopicAccuracies for why that's an accepted cost at this site's size.
  const [dueFlashcards, topicAccuracies, touched] = await Promise.all([
    getDueFlashcards(userId),
    getTopicAccuracies(userId),
    getTouchedTopics(userId),
  ]);

  // ── 1. Overdue flashcards, one queue item per subject ───────────────────
  // Ranked FIRST, ahead of weak or new topics, on purpose: a flashcard
  // showing up as "due" means it was once known well enough to climb a
  // Leitner box and is now at risk of being forgotten (see
  // flashcard-review.ts) — that's a genuinely time-sensitive kind of
  // urgency neither of the other two categories has. A weak topic stays
  // just as weak tomorrow; an overdue card gets harder to recall the longer
  // it waits.
  const dueCountBySubject = new Map<string, number>();
  for (const card of dueFlashcards) {
    dueCountBySubject.set(
      card.subjectSlug,
      (dueCountBySubject.get(card.subjectSlug) ?? 0) + 1,
    );
  }

  const flashcardItems: RevisionQueueItem[] = [];
  for (const [subjectSlug, count] of dueCountBySubject) {
    const subject = bySlug.get(subjectSlug);
    if (!subject) continue; // a subject removed since the card was scheduled
    flashcardItems.push({
      id: `flashcards/${subjectSlug}`,
      kind: "flashcards",
      subjectSlug,
      subjectName: subject.name,
      accent: subject.accent,
      mascot: subject.mascot,
      title: `${count} flashcard${count === 1 ? "" : "s"} due`,
      detail: "Cards you've marked before, worth another look",
      href: "/review",
    });
  }
  // Subjects with the most cards waiting lead the list — the biggest pile
  // of decaying recall is the most valuable one to clear first.
  flashcardItems.sort(
    (a, b) => (dueCountBySubject.get(b.subjectSlug) ?? 0) - (dueCountBySubject.get(a.subjectSlug) ?? 0),
  );

  // ── 2. Weak topics, across every subject, worst accuracy first ─────────
  // Not just the single weakest-per-subject chooseNextUp falls back to once
  // a subject is fully covered — every topic anywhere that clears the
  // question-count floor and sits below the threshold, ranked globally.
  const weakItems: RevisionQueueItem[] = topicAccuracies
    .filter(
      (t) => t.questionsAnswered >= MIN_QUESTIONS_FOR_WEAK && t.accuracy < WEAK_ACCURACY_THRESHOLD,
    )
    .sort((a, b) => a.accuracy - b.accuracy)
    .map((t): RevisionQueueItem | null => {
      const subject = bySlug.get(t.subjectSlug);
      if (!subject) return null;
      const topicMeta = subject.years.flatMap((g) => g.topics).find((topic) => topic.slug === t.topicSlug);
      // Content or the topic itself may have been retired since the
      // activity was recorded — skip rather than link somewhere dead.
      if (!topicMeta || !TOPIC_CONTENT[`${t.subjectSlug}/${t.topicSlug}`]) return null;

      return {
        id: `weak/${t.subjectSlug}/${t.topicSlug}`,
        kind: "weak-topic",
        subjectSlug: t.subjectSlug,
        subjectName: subject.name,
        accent: subject.accent,
        mascot: subject.mascot,
        title: topicMeta.title,
        detail: `${Math.round(t.accuracy * 100)}% correct over ${t.questionsAnswered} question${
          t.questionsAnswered === 1 ? "" : "s"
        }`,
        href: `/subjects/${t.subjectSlug}/${t.topicSlug}`,
      };
    })
    .filter((item): item is RevisionQueueItem => item !== null);

  // ── 3. One never-touched topic per subject, least-covered subject first ─
  // Same reasoning chooseNextUp already uses (revising the subject you
  // already like is the human default a queue exists to counter), just
  // extended across every subject with room to grow instead of naming only
  // the single least-covered one.
  const subjectCoverage = SUBJECTS.map((subject) => {
    const allTopics = subject.years.flatMap((g) => g.topics);
    const coveredCount = allTopics.filter((t) => touched.has(`${subject.slug}/${t.slug}`)).length;
    return {
      subject,
      allTopics,
      percent: allTopics.length > 0 ? coveredCount / allTopics.length : 1,
    };
  }).sort((a, b) => a.percent - b.percent);

  const newTopicItems: RevisionQueueItem[] = [];
  for (const { subject, allTopics } of subjectCoverage) {
    const untouched = allTopics.find((t) => !touched.has(`${subject.slug}/${t.slug}`));
    if (!untouched) continue; // fully covered — nothing new to suggest here
    newTopicItems.push({
      id: `new/${subject.slug}/${untouched.slug}`,
      kind: "new-topic",
      subjectSlug: subject.slug,
      subjectName: subject.name,
      accent: subject.accent,
      mascot: subject.mascot,
      title: untouched.title,
      detail: `Not started yet in ${subject.name}`,
      href: `/subjects/${subject.slug}/${untouched.slug}`,
    });
  }

  return [...flashcardItems, ...weakItems, ...newTopicItems].slice(0, MAX_QUEUE_ITEMS);
}
