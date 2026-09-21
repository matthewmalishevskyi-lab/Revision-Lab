// "Today's practice" — the questions this student should do next, and why.
//
// ─────────────────────────────────────────────────────────────────────────────
// MATTHEW'S MATHS TEACHER'S IDEA, WHICH IS THE RIGHT ONE
//
//   "make a recommendation of different questions based on how well students
//    do on different topics. If a student doesn't do well on one of the
//    topics, we give him more of the questions of that topic. And they get
//    increasingly hard."
//
// Two halves: find the weak topics, then climb. Everything below is those two
// sentences made precise, and the precision is where the traps are.
//
// NOTHING NEW IS STORED. The `activity` table has recorded one row per
// practice answer — subject, topic, right or wrong, when — since progress
// tracking was built, so "how well does this student do on each topic" is a
// question the database can already answer. This file is a pure function over
// that history plus the content. No migration, no SQL for Matthew to run, and
// nothing that can drift out of step with what actually happened.
// ─────────────────────────────────────────────────────────────────────────────

import { SUBJECTS } from "./subjects";
import { TOPIC_CONTENT } from "./content";
import { difficultyOf, type Difficulty } from "./difficulty";
import { marksFor } from "./marks";
import { seedFromText, shuffleWithSeed } from "./shuffle";

export type DailyQuestion = {
  subjectSlug: string;
  subjectName: string;
  accent: string;
  topicSlug: string;
  topicTitle: string;
  question: string;
  answer: string;
  accept?: string[];
  choices?: string[];
  higherOnly?: boolean;
  marks: number;
  difficulty: Difficulty;
  selfMarked: boolean;
};

export type DailyFocus = {
  subjectName: string;
  topicTitle: string;
  subjectSlug: string;
  topicSlug: string;
  /** null when this topic is here to GATHER data rather than to fix a weakness. */
  accuracy: number | null;
  answered: number;
  reason: string;
};

export type DailySet = {
  date: string;
  questions: DailyQuestion[];
  focus: DailyFocus[];
  minutes: number;
  /** One sentence the card can print, in plain words. */
  summary: string;
};

export type TopicScore = {
  subjectSlug: string;
  topicSlug: string;
  questionsAnswered: number;
  correct: number;
};

/** How many questions a day's set holds. */
export const DAILY_SIZE = 10;

/** How many topics one day's set draws from. */
const FOCUS_TOPICS = 2;

/**
 * ⚠️ SMOOTHING, AND WHY THE OBVIOUS VERSION IS UNUSABLE.
 *
 * Ranking topics by raw accuracy means one wrong answer puts a topic at 0%,
 * which is the worst score possible, so the very first question a student ever
 * gets wrong pins that topic to the top of their recommendations and keeps it
 * there. Meanwhile a topic they have genuinely struggled with over thirty
 * questions sits at 40% and is ranked BELOW it. The student would be handed
 * the topic they know least about, which is not the same as the topic they are
 * worst at.
 *
 * So each topic starts with four imaginary answers at 60% and the real ones
 * are added to those. One wrong answer out of one comes to 48% — worth looking
 * at, not an emergency. Five wrong out of five comes to 27%, which is. Thirty
 * answers swamp the prior entirely and the real figure wins, which is exactly
 * when it deserves to.
 */
const PRIOR_ACCURACY = 0.6;
const PRIOR_WEIGHT = 4;

export function smoothedAccuracy(correct: number, answered: number): number {
  return (correct + PRIOR_ACCURACY * PRIOR_WEIGHT) / (answered + PRIOR_WEIGHT);
}

/**
 * A topic needs a real ladder before "increasingly hard" means anything.
 *
 * ⚠️ DERIVED, NOT A HARD-CODED LIST OF SUBJECTS. Matthew asked for the
 * question bank to be expanded in maths, biology, chemistry and physics
 * specifically, so today those are the only subjects deep enough to qualify —
 * but writing those four slugs into this file would mean that the day somebody
 * expands History, the recommender silently ignores it and nobody finds out.
 * The rule is about the content, so it asks the content.
 */
const MIN_BANK = 24;
const MIN_LEVELS = 3;

/**
 * An optional subject is only recommended once the student has answered MORE
 * than this many of its questions.
 *
 * ⚠️ MATTHEW'S RULE, IN HIS WORDS: "make sure that people who revised
 * geography and didn't do more than 10 questions of History never got it on
 * their suggested today's practice."
 *
 * The gap it closes is the new-student fallback below. With no history to be
 * weak at, the set fills its slots from topics the student has not touched —
 * and before this, "not touched" included History, so a student who only ever
 * revised Geography could be handed History questions on day one. History is
 * an OPTION. Plenty of students have never studied it and never will, and a
 * recommendation for a subject you do not take is not personalisation, it is
 * noise that teaches you to ignore the card.
 *
 * It gates BOTH routes, not just the fallback. A student who once answered
 * three History questions out of curiosity has technically "attempted" it, and
 * would otherwise be ranked on 3 answers — so the same threshold applies to
 * weak-topic selection too. Ten is Matthew's number; "more than ten" means 11.
 *
 * Compulsory subjects (maths, English, the sciences) are never gated: every
 * student sits those papers, so recommending one to somebody who has not
 * started it yet is exactly the nudge the feature exists to give.
 */
export const OPTIONAL_SUBJECT_THRESHOLD = 10;

const COMPULSORY = new Set(SUBJECTS.filter((s) => s.compulsory).map((s) => s.slug));

/** Whether this student may be recommended anything from this subject. */
export function subjectUnlocked(
  subjectSlug: string,
  answeredBySubject: Map<string, number>,
): boolean {
  if (COMPULSORY.has(subjectSlug)) return true;
  return (answeredBySubject.get(subjectSlug) ?? 0) > OPTIONAL_SUBJECT_THRESHOLD;
}

function ladderOf(subjectSlug: string, topicSlug: string) {
  const content = TOPIC_CONTENT[`${subjectSlug}/${topicSlug}`];
  const practice = content?.practice ?? [];
  if (practice.length < MIN_BANK) return null;
  const levels = new Set(practice.map((q) => difficultyOf(subjectSlug, q)));
  if (levels.size < MIN_LEVELS) return null;
  return practice;
}

/** Every topic the recommender is allowed to draw from. */
export function eligibleTopics(): {
  subjectSlug: string;
  subjectName: string;
  accent: string;
  topicSlug: string;
  topicTitle: string;
}[] {
  const out = [];
  for (const subject of SUBJECTS) {
    for (const year of subject.years) {
      for (const topic of year.topics) {
        if (!ladderOf(subject.slug, topic.slug)) continue;
        out.push({
          subjectSlug: subject.slug,
          subjectName: subject.name,
          accent: subject.accent,
          topicSlug: topic.slug,
          topicTitle: topic.title,
        });
      }
    }
  }
  return out;
}

/**
 * Days since a fixed point, used to rotate through a topic's bank.
 *
 * ⚠️ THE SITE CANNOT KNOW WHICH QUESTIONS A STUDENT HAS ALREADY SEEN, and
 * pretending otherwise would be the bug. `activity` records that a practice
 * answer happened in a topic and whether it was right; it has never recorded
 * WHICH question, so there is no way to exclude one they answered yesterday.
 *
 * Adding a column would mean another migration for Matthew to run by hand, and
 * this project's notes already record three features that sat silently broken
 * for weeks because a .sql file was written and never run. Rotating the
 * starting point by the day gets most of the benefit for none of that risk: a
 * topic with 37 questions and 5 taken a day comes back round in a week, and
 * the set is different every morning. What it does NOT do is guarantee a
 * question is new, and the card does not claim it is.
 */
function dayIndex(date: string): number {
  return Math.floor(Date.parse(`${date}T12:00:00Z`) / 86_400_000);
}

/**
 * The questions for one day.
 *
 * Pure: it takes the history rather than fetching it, so it can be tested over
 * hundreds of invented students without a database — which is what
 * `scripts/check-recommendation.mjs` does.
 */
export function buildDailySet(input: {
  userId: string;
  scores: TopicScore[];
  /** Every "subject/topic" the student has touched at all. */
  touched: Set<string>;
  date: string;
  size?: number;
}): DailySet {
  const size = input.size ?? DAILY_SIZE;

  // Total questions answered per SUBJECT, summed across its topics — the
  // threshold is about whether you study the subject, not any one topic in it.
  const answeredBySubject = new Map<string, number>();
  for (const s of input.scores) {
    answeredBySubject.set(
      s.subjectSlug,
      (answeredBySubject.get(s.subjectSlug) ?? 0) + s.questionsAnswered,
    );
  }

  // Filtered once, here, so that BOTH the weak-topic route and the new-student
  // fallback below can only ever see subjects this student is allowed.
  const eligible = eligibleTopics().filter((t) =>
    subjectUnlocked(t.subjectSlug, answeredBySubject),
  );
  const byKey = new Map(eligible.map((t) => [`${t.subjectSlug}/${t.topicSlug}`, t]));

  const attempted = input.scores
    .filter((s) => byKey.has(`${s.subjectSlug}/${s.topicSlug}`) && s.questionsAnswered > 0)
    .map((s) => ({
      ...s,
      key: `${s.subjectSlug}/${s.topicSlug}`,
      score: smoothedAccuracy(s.correct, s.questionsAnswered),
    }))
    .sort((a, b) => a.score - b.score || b.questionsAnswered - a.questionsAnswered);

  const chosen: DailyFocus[] = [];
  const chosenKeys = new Set<string>();

  for (const s of attempted) {
    if (chosen.length >= FOCUS_TOPICS) break;
    const t = byKey.get(s.key)!;
    chosen.push({
      subjectName: t.subjectName,
      topicTitle: t.topicTitle,
      subjectSlug: t.subjectSlug,
      topicSlug: t.topicSlug,
      accuracy: s.correct / s.questionsAnswered,
      answered: s.questionsAnswered,
      reason: `${s.correct} of ${s.questionsAnswered} right so far`,
    });
    chosenKeys.add(s.key);
  }

  // ⚠️ A STUDENT WITH NO HISTORY MUST STILL GET A SET.
  // On day one there is nothing to be weak at, and a card that says "do some
  // practice so we can recommend practice" is a card that never starts. So the
  // remaining slots go to topics they have not touched — which both gives them
  // something to do and produces the very data the recommendation needs
  // tomorrow. Seeded by the user and the date so it is stable within a day and
  // different between students.
  if (chosen.length < FOCUS_TOPICS) {
    const untouched = eligible.filter(
      (t) => !input.touched.has(`${t.subjectSlug}/${t.topicSlug}`) && !chosenKeys.has(`${t.subjectSlug}/${t.topicSlug}`),
    );
    const order = shuffleWithSeed(untouched, seedFromText(`${input.userId}:${input.date}`));
    for (const t of order) {
      if (chosen.length >= FOCUS_TOPICS) break;
      chosen.push({
        subjectName: t.subjectName,
        topicTitle: t.topicTitle,
        subjectSlug: t.subjectSlug,
        topicSlug: t.topicSlug,
        accuracy: null,
        answered: 0,
        reason: "you have not tried this one yet",
      });
      chosenKeys.add(`${t.subjectSlug}/${t.topicSlug}`);
    }
  }

  // ── Pull the questions, climbing ──────────────────────────────────────────
  const perTopic = Math.ceil(size / Math.max(1, chosen.length));
  const picked: DailyQuestion[] = [];

  for (const focus of chosen) {
    const bank = ladderOf(focus.subjectSlug, focus.topicSlug);
    if (!bank) continue;

    // Group by level, rotate WITHIN each level by the day, then take from the
    // bottom up. Rotating inside a level rather than across the whole bank is
    // what keeps the climb intact while still varying the questions: taking a
    // rotating slice of the flat list would some days start at level 4.
    const byLevel = new Map<Difficulty, typeof bank>();
    for (const q of bank) {
      const d = difficultyOf(focus.subjectSlug, q);
      if (!byLevel.has(d)) byLevel.set(d, []);
      byLevel.get(d)!.push(q);
    }

    const levels = [...byLevel.keys()].sort((a, b) => a - b);
    const rotate = dayIndex(input.date);
    const wanted = Math.min(perTopic, bank.length);

    // Spread the take across the levels present, lowest first, so a topic
    // whose ladder has a gap still climbs through the rungs it does have.
    const takeFrom = levels.map((level) => {
      const inLevel = byLevel.get(level)!;
      const start = ((rotate * 3) % Math.max(1, inLevel.length));
      return { level, queue: [...inLevel.slice(start), ...inLevel.slice(0, start)] };
    });

    let added = 0;
    let round = 0;
    while (added < wanted && round < 50) {
      let addedThisRound = 0;
      for (const { level, queue } of takeFrom) {
        if (added >= wanted) break;
        const q = queue.shift();
        if (!q) continue;
        picked.push({
          subjectSlug: focus.subjectSlug,
          subjectName: focus.subjectName,
          accent: byKey.get(`${focus.subjectSlug}/${focus.topicSlug}`)!.accent,
          topicSlug: focus.topicSlug,
          topicTitle: focus.topicTitle,
          question: q.question,
          answer: q.answer,
          accept: q.accept,
          choices: q.choices,
          higherOnly: q.higherOnly,
          marks: marksFor(focus.subjectSlug, q),
          difficulty: level,
          selfMarked: !q.accept,
          });
        added += 1;
        addedThisRound += 1;
      }
      if (addedThisRound === 0) break;
      round += 1;
    }
  }

  // ⚠️ THE CLIMB IS THE LAST THING DONE, OVER THE WHOLE SET.
  // Sorting per topic and concatenating would give two separate climbs — hard,
  // then easy again — which is the exact defect the lesson builder shipped and
  // had to be rewritten for. One sort over everything means the set only ever
  // gets harder, whichever topic each question came from.
  const ordered = picked
    .slice(0, size)
    .sort((a, b) => a.difficulty - b.difficulty || a.marks - b.marks);

  const minutes = ordered.reduce((n, q) => n + Math.max(1, q.marks), 0);

  return {
    date: input.date,
    questions: ordered,
    focus: chosen,
    minutes,
    summary: summarise(chosen, ordered.length),
  };
}

function summarise(focus: DailyFocus[], count: number): string {
  if (count === 0) return "Nothing to practise today.";
  const weakest = focus.find((f) => f.accuracy !== null);
  if (!weakest) {
    return `${count} questions to get started — we will tune these to you once you have answered a few.`;
  }
  const pct = Math.round(weakest.accuracy! * 100);
  return `${count} questions, mostly ${weakest.topicTitle} — you are on ${pct}% there, your lowest.`;
}
