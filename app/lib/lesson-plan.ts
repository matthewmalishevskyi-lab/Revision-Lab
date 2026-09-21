// A lesson, built out of revision content that already exists.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY THIS EXISTS
//
// Matthew: "you go to teacher tools, then question examples, and you pick your
// subject, then the year you're teaching, then the topic — and think about the
// lesson structure, so it should start with something easier with the base,
// then it builds up, and all of it should be linked in one topic. Use the
// questions that we already have."
//
// That last sentence is the whole design. Nothing here writes a question. Every
// question, worked example and misconception on the page is one already sitting
// in `app/lib/content/*.ts`, arranged differently.
//
// ─────────────────────────────────────────────────────────────────────────────
// THE THING THAT MAKES THIS POSSIBLE IS THE MARK TARIFF
//
// "Start easier, then build up" needs an order, and until 12 September there
// was nothing to order by. Every question looked the same size, so a lesson
// built from them would have been a list, not a ramp.
//
// `marksFor()` changed that: it derives what each question is worth from its
// command word and its subject's real AQA tariff set. A 1-mark recall drill and
// a 9-mark "discuss" are now distinguishable by a number, so the ramp is a
// sort. That is the second thing the marks work bought, and it was not the
// reason it was built.
//
// ⚠️ Which also means the ramp is only as good as the tariff. `marks.ts` is
// honest that a derived tariff lands within about ±1 of a real mark scheme, so
// a question can sit one phase away from where a teacher would put it. That is
// worth knowing before trusting the order blindly, and it is said on the page.
//
// ─────────────────────────────────────────────────────────────────────────────
// EVERY QUESTION APPEARS EXACTLY ONCE
//
// The phases take from one shared pool and remove what they take. A teacher
// working down the page must never meet the same question twice — it wastes
// their time, and worse, it makes the ramp a lie: a question that appeared in
// the starter cannot also be the hard one at the end.

import { SUBJECTS, type IconName } from "./subjects";

import { getTopicContent, type TopicContent } from "./content";
import { marksFor } from "./marks";
import { difficultyOf, type Difficulty } from "./difficulty";

export type LessonQuestion = {
  question: string;
  answer: string;
  accept?: string[];
  choices?: string[];
  higherOnly?: boolean;
  marks: number;
  /** 1 recognise · 2 recall · 3 apply · 4 analyse · 5 explain — see difficulty.ts. */
  difficulty: Difficulty;
  /** No `accept` list, so the student judges their own answer — see content/index.ts. */
  selfMarked: boolean;
};

export type LessonWorkedExample = {
  question: string;
  steps: string[];
  answer: string;
  higherOnly?: boolean;
};

export type LessonMisconception = { wrong: string; right: string };

export type LessonPhase = {
  id: string;
  title: string;
  /** One line telling the teacher what this phase is FOR, not what is in it. */
  purpose: string;
  minutes: number;
  marks: number;
  questions: LessonQuestion[];
  workedExamples: LessonWorkedExample[];
  misconceptions: LessonMisconception[];
  /** Headings from the topic's key facts — the "teach this" phase has no questions. */
  teachingPoints: { heading: string; points: string[]; diagrams: string[] }[];
};

export type LessonPlan = {
  subjectSlug: string;
  subjectName: string;
  accent: string;
  topicSlug: string;
  topicTitle: string;
  topicIcon: IconName;
  year: string;
  summary: string;
  phases: LessonPhase[];
  totalMarks: number;
  totalMinutes: number;
  /** Diagrams this topic has, so the lesson can point at the library. */
  hasDiagrams: boolean;
  /** Exam technique for this topic — printed as teacher notes, not as a phase. */
  examTips: { tip: string; detail: string }[];
  /** Questions in the topic this lesson did not use, so the page can say so. */
  questionsLeftOver: number;
  /** True when every question is the same size, so the lesson cannot ramp. */
  flatDifficulty: boolean;
};

/**
 * ⚠️ ONE MINUTE PER MARK, WHICH IS A REAL RULE AND NOT A GUESS.
 *
 * It is the standard exam-technique guidance across every board — a 90-minute
 * paper is worth about 90 marks — and it is the one piece of timing advice
 * students are actually taught. Using it here means the lesson's own clock is
 * built from the same arithmetic they will be marked against.
 *
 * A floor of three minutes per phase stops a two-mark starter claiming to take
 * two minutes, which no real classroom has ever managed: handing out, settling
 * and reading the question are not free.
 */
const MINUTES_PER_MARK = 1;
const MINIMUM_PHASE_MINUTES = 3;

/** Reading a worked example aloud and taking questions on it. */
const MINUTES_PER_WORKED_EXAMPLE = 4;

/** Talking through the mistakes to avoid. */
const MISCONCEPTION_MINUTES = 4;

function phaseMinutes(marks: number, extra = 0): number {
  if (marks === 0 && extra === 0) return 0;
  return Math.max(MINIMUM_PHASE_MINUTES, Math.round(marks * MINUTES_PER_MARK) + extra);
}

/**
 * Every practice question in the topic, priced and sorted easiest first.
 *
 * ⚠️ THE SORT IS STABLE ON PURPOSE. Within one tariff, questions keep the order
 * the author wrote them in, and that order is not random — content is written
 * building on itself, so "what is a prokaryotic cell" precedes the question
 * that uses the word. Sorting only by marks and letting equal ones fall
 * wherever would throw that away for no gain.
 */
function pricedQuestions(subjectSlug: string, content: TopicContent): LessonQuestion[] {
  return (content.practice ?? [])
    .map((q, index) => ({
      question: q.question,
      answer: q.answer,
      accept: q.accept,
      choices: q.choices,
      higherOnly: q.higherOnly,
      marks: marksFor(subjectSlug, q),
      difficulty: difficultyOf(subjectSlug, q),
      selfMarked: !q.accept,
      index,
    }))
    // ⚠️ SORTED BY DIFFICULTY FIRST, THEN MARKS — AND THE ORDER MATTERS.
    // This sorted by marks alone until today, and marks were never built to
    // be a difficulty scale: seventy per cent of every subject sits on one
    // value. When 1,155 new questions arrived most of the maths ones were
    // worth 3, so Guided and Independent practice both filled with nothing
    // but 3s and became the same exercise twice — in 64 lessons. Difficulty
    // separates recognising an answer from recalling it from applying a
    // method, which is the ladder a lesson is supposed to climb.
    .sort((a, b) => a.difficulty - b.difficulty || a.marks - b.marks || a.index - b.index)
    // `index` did its job in the sort and has no business travelling further —
    // a question's position in the source file is not a fact any page should
    // be able to read.
    .map((q) => ({
      question: q.question,
      answer: q.answer,
      accept: q.accept,
      choices: q.choices,
      higherOnly: q.higherOnly,
      marks: q.marks,
      difficulty: q.difficulty,
      selfMarked: q.selfMarked,
    }));
}

/**
 * Take up to `limit` questions the predicate accepts, removing them from the
 * pool so no later phase can claim them again.
 */
function take(
  pool: LessonQuestion[],
  limit: number,
  fits: (q: LessonQuestion) => boolean,
): LessonQuestion[] {
  const taken: LessonQuestion[] = [];
  for (let i = 0; i < pool.length && taken.length < limit; ) {
    if (fits(pool[i])) {
      taken.push(pool[i]);
      pool.splice(i, 1);
    } else {
      i++;
    }
  }
  return taken;
}

/** The same, but from the hardest end — used only by Stretch. */
function takeFromEnd(
  pool: LessonQuestion[],
  limit: number,
  fits: (q: LessonQuestion) => boolean,
): LessonQuestion[] {
  const taken: LessonQuestion[] = [];
  for (let i = pool.length - 1; i >= 0 && taken.length < limit; i--) {
    if (fits(pool[i])) {
      taken.unshift(pool[i]);
      pool.splice(i, 1);
    }
  }
  return taken;
}

/**
 * Take up to `limit` questions AT `level`, from its hardest end, topping up
 * from the levels BELOW it — never above — if the topic runs short there.
 *
 * ⚠️ "ONLY DOWNWARDS" IS WHAT KEEPS THE RAMP MONOTONIC.
 * Phases are claimed hardest-first (see buildLessonPlan). If Guided, short of
 * level-3 questions, were allowed to borrow a level-4 one, it could end up
 * harder than Independent practice sitting after it — the backwards ramp the
 * first version of this file shipped. Borrowing only from below means a phase
 * that runs short comes out a little EASIER than intended, which is a lesson
 * that climbs more gently rather than one that falls over.
 *
 * Fifteen topics have no level-3 question at all, which is why the fallback is
 * not hypothetical.
 */
function takeAtLevel(
  pool: LessonQuestion[],
  limit: number,
  level: Difficulty,
): LessonQuestion[] {
  const taken: LessonQuestion[] = [];
  for (let l = level; l >= 1 && taken.length < limit; l--) {
    taken.unshift(...takeFromEnd(pool, limit - taken.length, (q) => q.difficulty === l));
  }
  return taken.sort((a, b) => a.difficulty - b.difficulty || a.marks - b.marks);
}

function phase(
  id: string,
  title: string,
  purpose: string,
  parts: Partial<Omit<LessonPhase, "id" | "title" | "purpose" | "marks" | "minutes">>,
  extraMinutes = 0,
): LessonPhase {
  const questions = parts.questions ?? [];
  const marks = questions.reduce((n, q) => n + q.marks, 0);
  return {
    id,
    title,
    purpose,
    marks,
    minutes: phaseMinutes(marks, extraMinutes),
    questions,
    workedExamples: parts.workedExamples ?? [],
    misconceptions: parts.misconceptions ?? [],
    teachingPoints: parts.teachingPoints ?? [],
  };
}

/** True once a phase has anything in it at all. */
function hasContent(p: LessonPhase): boolean {
  return (
    p.questions.length > 0 ||
    p.workedExamples.length > 0 ||
    p.misconceptions.length > 0 ||
    p.teachingPoints.length > 0
  );
}

/**
 * Build the lesson.
 *
 * ⚠️ THE BANDS ARE DELIBERATELY WIDE AND THE CAPS DELIBERATELY LOW.
 *
 * A topic has 16 to 33 practice questions. Pouring all of them onto one page
 * gives a teacher a list to triage, which is the job they were trying to avoid.
 * So each phase takes a handful — enough to run, few enough to read — and the
 * page says how many were left over rather than hiding that it chose.
 *
 * The bands themselves follow the tariff, because the tariff already encodes
 * what kind of question it is: a 1-mark question is recall, a 2-3 is a method
 * applied once, 4-6 is an explanation with development, and anything above is
 * the subject's levels-marked question. That is a real progression through one
 * topic and it is exactly what Matthew asked for — the base first, then built
 * on, all of it inside one topic.
 */
export function buildLessonPlan(
  subjectSlug: string,
  topicSlug: string,
): LessonPlan | undefined {
  const subject = SUBJECTS.find((s) => s.slug === subjectSlug);
  if (!subject) return undefined;

  let year = "";
  let topicTitle = "";
  let topicIcon: IconName = "book";
  for (const group of subject.years) {
    const found = group.topics.find((t) => t.slug === topicSlug);
    if (found) {
      year = group.year;
      topicTitle = found.title;
      topicIcon = found.icon;
    }
  }
  if (!topicTitle) return undefined;

  const content = getTopicContent(subjectSlug, topicSlug);
  if (!content) return undefined;

  const pool = pricedQuestions(subjectSlug, content);

  // ── Reserved first, so the exit ticket is never the dregs ─────────────────
  //
  // Taken BEFORE the phases run, from the middle of the range. A plenary
  // question wants to be the one that proves they got the point of the lesson,
  // which is neither the easiest recall nor the hardest essay — and if it were
  // taken last it would be whatever happened to be left, which is not the same
  // thing at all.
  //
  // ⚠️ AN APPLY QUESTION, CHOSEN BY DIFFICULTY RATHER THAN BY MARKS.
  // This used to take the first question worth 2 to 4 marks from the EASY end,
  // which on most topics meant the easiest 2-marker in the topic — so in 53
  // lessons the exit ticket came out easier than every question in Guided
  // practice before it. An exit ticket is a check that the lesson's method
  // landed, and "apply the method" is level 3 by definition. Falls back to
  // analyse, then recall, for a topic missing level 3.
  //
  // Each `take` REMOVES what it finds, so the fallbacks must run only when the
  // one before found nothing — which `??` guarantees, since a `take` that finds
  // nothing returns an empty array and `[0]` of it is undefined.
  const exitPick =
    take(pool, 1, (q) => q.difficulty === 3)[0] ??
    take(pool, 1, (q) => q.difficulty === 4)[0] ??
    take(pool, 1, (q) => q.difficulty === 2)[0];
  const exitTicket: LessonQuestion[] = exitPick ? [exitPick] : [];

  // ── ⚠️ THE RAMP IS DEALT, NOT BANDED, AND THE FIRST VERSION GOT THIS WRONG
  //
  // The first attempt gave each phase a fixed tariff band — guided 2-3,
  // independent 4-6 — with a fallback when a band came up empty. On the Maths
  // vectors topic, which tops out at 3 marks, that produced:
  //
  //     Guided practice        2, 2, 3 marks
  //     Independent practice   1, 1, 1, 1 marks
  //
  // The lesson got EASIER as it went on, which is the exact opposite of the one
  // thing this page promises. A fixed band cannot work, because a subject's
  // tariffs are its own: Maths has no question above 5 and no levels question
  // at all, while Citizenship jumps straight from 4 to 12.
  //
  // So the pool is sorted easiest-first and phases DEAL FROM THE FRONT of it in
  // order. Each phase therefore starts where the last one stopped, and a later
  // phase cannot contain an easier question than an earlier one — not because a
  // rule forbids it, but because there is none left to take. Monotonic by
  // construction beats monotonic by assertion.
  //
  // Stretch is the exception and is taken from the BACK first, so the topic's
  // biggest question is reserved for the end rather than being swept up by
  // whichever phase reached it.
  // ⚠️ AND THE HARD PHASES CLAIM THEIR QUESTIONS FIRST, FROM THE HARD END.
  //
  // Dealing every phase from the front fixed the backwards ramp and introduced a
  // quieter version of the same problem: on a recall-heavy topic the first
  // seventeen questions are all worth 1, so the starter, the guided practice and
  // the independent practice were identical and the topic's few real questions
  // were never reached at all. Flat is not the same as broken, but a lesson that
  // never shows a student the hard question in the topic is not much of a lesson.
  //
  // So the order of claiming runs hardest-first — stretch, then independent,
  // then guided — each taking from the back of what is left, and the starter
  // takes the easiest from the front at the end. Every phase still cannot hold
  // anything harder than the phase after it, because that phase already took it.
  //
  // ⚠️ EACH PHASE NOW TARGETS ITS OWN LEVEL, WHICH THE MARK-BASED VERSION
  // COULD NOT DO. A fixed band was rejected above because mark tariffs are
  // each subject's own — Maths stops at 5, Citizenship jumps to 12, so "Guided
  // is 2-3 marks" means something different everywhere. Difficulty does not
  // have that problem: it is 1 to 5 in every subject by construction. So the
  // ladder a teacher expects — recall, then apply, then analyse, then explain —
  // can finally be the ladder the lesson actually uses.
  //
  // Claimed hardest-first so each phase takes the best of its level before a
  // lower phase's fallback could reach it. `takeAtLevel` only ever borrows
  // DOWNWARDS, so a later phase still cannot be easier than an earlier one.
  //
  // ⚠️ A TOPIC WITH NO MIDDLE RUNG GIVES ITS EXPLAIN QUESTIONS TO INDEPENDENT.
  // Switching to difficulty exposed something the mark-based sort had been
  // hiding. 94 topics — every one outside maths and the sciences, which were
  // the four subjects expanded in September — have questions at recall and at
  // explain and NOTHING in between: no apply, no analyse. Targeting levels,
  // Independent found no level 4 or 3, fell back to recall, and came out
  // identical to Guided, while the explain questions all went to Stretch.
  //
  // The old sort "worked" for these only by accident — it dumped the explain
  // questions into Independent because they happened to be worth the most.
  // Doing that deliberately is the right call: when there is no method to
  // practise, the step after recall IS the extended answer, and a lesson that
  // repeats recall in two consecutive phases teaches nothing in the second.
  // Stretch then gets whatever explain questions are left over, which may be
  // none — and a missing Stretch reads far better than a duplicated phase.
  //
  // Topics that DO have a middle are untouched by this: Independent takes
  // analyse and Stretch takes explain, exactly as intended.
  const hasMiddle = pool.some((q) => q.difficulty === 3 || q.difficulty === 4);
  const independent = hasMiddle
    ? takeAtLevel(pool, 5, 4)                              // analyse
    : takeFromEnd(pool, 5, (q) => q.difficulty === 5);     // explain, no middle to use
  // ⚠️ STRETCH NEVER FALLS BACK, UNLIKE EVERY OTHER PHASE.
  // It used `takeAtLevel` like the rest, and that broke the ramp in exactly the
  // case the rule above creates: on a topic with no middle rung Independent
  // takes the explain questions, Stretch finds none left, falls back
  // downwards, and comes out as LEVEL-2 RECALL — the hardest phase of the
  // lesson easier than the one before it. Measured on computer-science/
  // networks-basics and history/the-first-world-war. The check at the time only
  // compared Guided with Independent, so it reported zero problems while the
  // lesson was visibly going backwards; see the full monotonicity check in
  // check-content.mjs. Stretch is optional by nature: with nothing hard left
  // it is simply empty, and `hasContent` drops the phase.
  const stretch = takeFromEnd(pool, 2, (q) => q.difficulty === 5); // explain, if any remain
  const guided = takeAtLevel(pool, 5, 3);                  // apply
  const starter = take(pool, 6, (q) => q.difficulty <= 2); // recognise, recall
  const leftOver = pool.length;

  // ⚠️ Said out loud when it is true, rather than hidden by the layout. On a
  // recall-heavy topic every question is worth the same and there is no ramp to
  // build — a teacher should know that from the page, not discover it halfway
  // down. Comparing the starter's hardest with independent practice's hardest
  // is the cheapest honest test of whether the lesson actually climbs.
  //
  // Judged by DIFFICULTY now, like the ramp itself. It used marks, which meant
  // the flag and the lesson could disagree: a lesson climbing from recognise to
  // explain on questions all worth 1 or 2 marks would have been called flat
  // while visibly climbing, and the notice would have told a teacher the page
  // they were looking at was wrong.
  const hardestEarly = Math.max(0, ...starter.map((q) => q.difficulty));
  const hardestLate = Math.max(0, ...independent.map((q) => q.difficulty), ...stretch.map((q) => q.difficulty));
  const flat = starter.length > 0 && hardestLate <= hardestEarly;

  const phases: LessonPhase[] = [
    phase(
      "starter",
      "Starter — retrieval",
      "Quick recall to get the prior knowledge back in the room before anything new is added.",
      { questions: starter },
    ),
    phase(
      "teach",
      "Teach this",
      "The facts the rest of the lesson leans on, in the order the topic itself sets them out.",
      {
        teachingPoints: content.keyFacts.map((block) => ({
          heading: block.heading,
          points: block.points,
          diagrams: block.diagrams ?? [],
        })),
      },
      6,
    ),
    phase(
      "model",
      "Model it",
      "Work these on the board. The steps are the method being applied, not just stated.",
      { workedExamples: content.workedExamples ?? [] },
      (content.workedExamples?.length ?? 0) * MINUTES_PER_WORKED_EXAMPLE,
    ),
    phase(
      "guided",
      "Guided practice",
      "The same method, now with the class. A step up from the starter, still short enough to do together.",
      { questions: guided },
    ),
    phase(
      "independent",
      "Independent practice",
      "On their own, and the hardest ordinary questions the topic has.",
      { questions: independent },
    ),
    phase(
      "stretch",
      "Stretch",
      "The subject's big levels-marked question. Worth setting even if only a few finish it.",
      { questions: stretch },
    ),
    phase(
      "mistakes",
      "Watch out for",
      "The specific wrong ideas that cost marks on this topic. Worth naming before they appear in books.",
      { misconceptions: content.misconceptions ?? [] },
      MISCONCEPTION_MINUTES,
    ),
    phase(
      "exit",
      "Exit ticket",
      "One question on the way out. If they can do this, the lesson landed.",
      { questions: exitTicket },
    ),
  ].filter(hasContent);

  return {
    subjectSlug,
    subjectName: subject.name,
    accent: subject.accent,
    topicSlug,
    topicTitle,
    topicIcon,
    year,
    summary: content.summary,
    phases,
    totalMarks: phases.reduce((n, p) => n + p.marks, 0),
    totalMinutes: phases.reduce((n, p) => n + p.minutes, 0),
    hasDiagrams: content.keyFacts.some((b) => (b.diagrams?.length ?? 0) > 0),
    examTips: content.examTips,
    questionsLeftOver: leftOver,
    flatDifficulty: flat,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// THE LISTS THE FIRST TWO PAGES NEED
//
// Derived by walking the content, exactly as the diagram library does — see
// teacher-tools.ts's own note on why there is no hand-kept list of which topics
// have anything. Add a topic and it appears here; nothing to remember.

export type LessonTopic = { slug: string; title: string; icon: IconName; year: string; questions: number };
export type LessonSubject = {
  slug: string;
  name: string;
  accent: string;
  gradient: string;
  mascot: (typeof SUBJECTS)[number]["mascot"];
  topics: LessonTopic[];
  questionCount: number;
};

/**
 * ⚠️ A TOPIC NEEDS ENOUGH QUESTIONS TO BE WORTH A LESSON, NOT JUST SOME.
 *
 * Below this a "lesson" is a starter and an empty page, which wastes the tap
 * that got there. Every written topic on the site clears it comfortably (the
 * content checker already demands 16), so this is a guard against a
 * half-written topic appearing here before it is ready, not a filter that
 * excludes anything today.
 */
const MINIMUM_QUESTIONS = 8;

export function subjectsWithLessons(): LessonSubject[] {
  const out: LessonSubject[] = [];

  for (const subject of SUBJECTS) {
    const topics: LessonTopic[] = [];

    for (const group of subject.years) {
      for (const topic of group.topics) {
        const content = getTopicContent(subject.slug, topic.slug);
        const count = content?.practice?.length ?? 0;
        if (count < MINIMUM_QUESTIONS) continue;
        topics.push({
          slug: topic.slug,
          title: topic.title,
          icon: topic.icon,
          year: group.year,
          questions: count,
        });
      }
    }

    if (topics.length === 0) continue;
    out.push({
      slug: subject.slug,
      name: subject.name,
      accent: subject.accent,
      gradient: subject.gradient,
      mascot: subject.mascot,
      topics,
      questionCount: topics.reduce((n, t) => n + t.questions, 0),
    });
  }

  return out;
}

export function subjectLessons(subjectSlug: string): LessonSubject | undefined {
  return subjectsWithLessons().find((s) => s.slug === subjectSlug);
}

export function lessonLibraryTotals(): { subjects: number; topics: number; questions: number } {
  const subjects = subjectsWithLessons();
  return {
    subjects: subjects.length,
    topics: subjects.reduce((n, s) => n + s.topics.length, 0),
    questions: subjects.reduce((n, s) => n + s.questionCount, 0),
  };
}
