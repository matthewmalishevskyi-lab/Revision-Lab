// Reading and writing what someone has actually revised.
//
// This file talks to the `activity` table (see PROGRESS_SETUP.sql) and turns a
// pile of raw events into the numbers the progress page shows. It is server
// code only — it uses the Supabase secret key, which must never reach a
// browser. The Server Actions in `progress-actions.ts` are how client
// components reach it.

import { randomUUID } from "node:crypto";
import { SUBJECTS, type Subject } from "./subjects";
import { TOPIC_CONTENT } from "./content";

const SUPABASE_URL = process.env.SUPABASE_URL?.replace(/\/+$/, "");
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const KEY_IS_LEGACY_JWT = (SUPABASE_KEY ?? "").startsWith("eyJ");

export const PROGRESS_ENABLED = Boolean(SUPABASE_URL && SUPABASE_KEY);

// "test" was added later, for the "completed a subject test" badges — see
// TEST_BADGE_SETUP.sql for the matching database change this needed (the
// `activity` table's CHECK constraint has to actually allow the new value).
export type ActivityKind = "practice" | "flashcard" | "time" | "test";

type ActivityRow = {
  subject: string;
  topic: string;
  kind: ActivityKind;
  correct: boolean | null;
  seconds: number | null;
  // Only meaningful for kind = 'test' — see TEST_SCORE_SETUP.sql. A test row
  // recorded before that migration ran has both as null, which is why every
  // reader of these two treats null as "no score recorded" rather than 0.
  score_correct: number | null;
  score_total: number | null;
  created_at: string;
};

// ─────────────────────────────────────────────────────────────────────────────
// HOW MUCH HISTORY TO READ, AND THE TRADE-OFF BEING MADE
//
// Every figure is worked out from raw events, so the page reads them and adds
// them up in TypeScript. That is easy to follow and easy to change, and it is
// the right choice at this size.
//
// It does not scale for ever. A heavy user might record 50 events a day, so a
// year is roughly 18,000 rows. Fetching those on every page load would
// eventually be silly. The fix, when that day comes, is to do the adding up in
// the database with a VIEW and fetch a handful of summary rows instead.
//
// Until then this cap keeps it honest and bounded. Supabase itself caps
// responses at 1000 rows unless asked otherwise, so the limit is stated
// explicitly rather than left as a surprise.
// ─────────────────────────────────────────────────────────────────────────────
const MAX_EVENTS_READ = 5000;

async function supabase(path: string, init: RequestInit = {}): Promise<Response> {
  return fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    ...init,
    headers: {
      apikey: SUPABASE_KEY as string,
      ...(KEY_IS_LEGACY_JWT ? { Authorization: `Bearer ${SUPABASE_KEY}` } : {}),
      "Content-Type": "application/json",
      ...init.headers,
    },
    cache: "no-store",
  });
}

// ─── Writing ────────────────────────────────────────────────────────────────

export async function recordActivity(input: {
  userId: string;
  subject: string;
  topic: string;
  kind: ActivityKind;
  correct?: boolean;
  seconds?: number;
  // Only sent for kind = 'test' — see TEST_SCORE_SETUP.sql.
  scoreCorrect?: number;
  scoreTotal?: number;
}): Promise<void> {
  if (!PROGRESS_ENABLED) return;

  const res = await supabase("activity", {
    method: "POST",
    // No "return=representation": we do not need the row back, and not asking
    // for it makes the request marginally cheaper. Small, but this is the call
    // that happens most often on the whole site.
    headers: { Prefer: "return=minimal" },
    body: JSON.stringify({
      id: randomUUID(),
      user_id: input.userId,
      subject: input.subject,
      topic: input.topic,
      kind: input.kind,
      correct: input.correct ?? null,
      seconds: input.seconds ?? null,
      score_correct: input.scoreCorrect ?? null,
      score_total: input.scoreTotal ?? null,
    }),
  });

  if (!res.ok) {
    // Logged, not thrown. If recording fails, the student should still be able
    // to carry on revising — losing a statistic is annoying, losing your place
    // mid-practice is not acceptable. Fail quietly for them, loudly for us.
    console.error(
      `[progress] could not record ${input.kind}: HTTP ${res.status}`,
      (await res.text()).slice(0, 200),
    );
  }
}

// ─── Reading ────────────────────────────────────────────────────────────────

async function readActivity(userId: string): Promise<ActivityRow[]> {
  if (!PROGRESS_ENABLED) return [];

  const res = await supabase(
    `activity?user_id=eq.${encodeURIComponent(userId)}` +
      `&select=subject,topic,kind,correct,seconds,score_correct,score_total,created_at` +
      `&order=created_at.desc&limit=${MAX_EVENTS_READ}`,
  );

  if (!res.ok) {
    console.error(
      `[progress] could not read activity: HTTP ${res.status}`,
      (await res.text()).slice(0, 200),
    );
    // An empty history rather than a crashed page. Someone who cannot see their
    // statistics should still be able to use the site.
    return [];
  }

  return (await res.json()) as ActivityRow[];
}

// ─── Turning events into figures ────────────────────────────────────────────

export type SubjectProgress = {
  slug: string;
  name: string;
  // Taken FROM the Subject type rather than written out again. The list of
  // mascots existed in two places, and adding the knight would have meant
  // remembering to update both — the sort of duplication that works fine until
  // exactly the moment it doesn't.
  mascot: Subject["mascot"];
  gradient: string;
  /** The subject's own solid colour, for rings, bars and pills. */
  accent: string;
  /** Topics with at least one recorded event, out of all topics in the subject. */
  topicsCovered: number;
  topicsTotal: number;
  /** topicsCovered as a percentage — the big ring on the card. */
  percent: number;
  questionsAnswered: number;
  questionsCorrect: number;
  /** Correct ÷ answered, or null when nothing has been answered yet. */
  accuracy: number | null;
  flashcardsReviewed: number;
  secondsThisWeek: number;
  /** The pill under the mascot. */
  label: "Not started" | "Learning" | "Confident";
  /** The topic to suggest next: the first one with nothing recorded. */
  nextTopic: { slug: string; title: string } | null;
};

export type DayTotals = {
  /** "Mon", "Tue", ... in the order the chart draws them. */
  day: string;
  date: string;
  /** Seconds and question counts, per subject slug. */
  seconds: Record<string, number>;
  questions: Record<string, number>;
};

export type Progress = {
  hasAnyActivity: boolean;
  subjects: SubjectProgress[];
  week: DayTotals[];
  totalQuestions: number;
  totalCorrect: number;
  accuracy: number | null;
  totalFlashcards: number;
  totalSecondsThisWeek: number;
  /** What to suggest doing next, for the card at the top of the page. */
  nextUp: { subject: string; subjectSlug: string; topic: string; topicSlug: string } | null;
  /** Consecutive days with at least one recorded activity. See computeStreak. */
  streak: {
    current: number;
    /** Whether today itself already has activity — changes how the streak
     * is worded (a live streak vs. one that will end if nothing happens
     * today). */
    activeToday: boolean;
    /** Whether a streak freeze covered a missed day somewhere in the current
     * run — see computeStreak's comment for what a freeze actually is here. */
    usedFreeze: boolean;
  };
  /** Today's progress toward the daily goal — see DAILY_GOAL below. */
  today: { count: number; goal: number };
  /** Experience points and level — see computeXp. */
  xp: {
    total: number;
    level: number;
    /** XP earned so far within the current level. */
    intoLevel: number;
    /** XP needed to reach the next level — always XP_PER_LEVEL, kept here so
     * the dashboard never has to import the constant to draw a progress bar. */
    forNextLevel: number;
  };
  /** Milestone badges — see computeBadges. Always all of them, earned or not,
   * so a locked badge can be shown as something to aim for rather than simply
   * not existing yet. */
  badges: Badge[];
  /** Past mock exam results, newest first — see TestHistoryEntry. */
  testHistory: TestHistoryEntry[];
};

// One row per finished mock exam. Read straight off the 'test' events in the
// activity log rather than stored anywhere separately — same "derive, don't
// store" choice as everything else on this page.
export type TestHistoryEntry = {
  subjectSlug: string;
  subjectName: string;
  mascot: Subject["mascot"];
  accent: string;
  /** ISO timestamp, straight from the row. */
  date: string;
  correct: number;
  total: number;
  /** Rounded percentage — the number the card actually shows. */
  percent: number;
};

const DAY_MS = 24 * 60 * 60 * 1000;

// ─────────────────────────────────────────────────────────────────────────────
// DAILY GOAL
//
// Deliberately modest, and deliberately not time-based. Fifteen questions or
// flashcards is a five-minute commitment on a bad day, not a wall. Counting
// EITHER practice answers or flashcard flips (rather than requiring one
// specific kind) means a day spent purely on flashcards still counts —
// punishing someone for revising the "wrong" way defeats the point of a
// habit nudge.
// ─────────────────────────────────────────────────────────────────────────────
const DAILY_GOAL = 15;

// ─────────────────────────────────────────────────────────────────────────────
// XP AND LEVELS
//
// Deliberately linear rather than a curve that demands more each time — 100
// XP is always 100 XP, and level N always starts at exactly (N-1) × 100. A
// growing requirement rewards people who were already doing a lot; a flat one
// means the fifth question tonight is worth exactly as much as the first,
// which is the more honest message for a revision site to send.
//
// A practice question is worth more than a flashcard flip (10 vs 5) because
// answering and being marked is the harder, more valuable kind of practice —
// not because flashcards don't count. Both earn something.
// ─────────────────────────────────────────────────────────────────────────────
const XP_PER_QUESTION = 10;
const XP_PER_FLASHCARD = 5;
const XP_PER_LEVEL = 100;

export type Badge = {
  id: string;
  name: string;
  description: string;
  icon: string;
  earned: boolean;
};

// ─────────────────────────────────────────────────────────────────────────────
// WHICH DAY DID THAT HAPPEN ON? — less obvious than it sounds
//
// Times are stored in UTC, which is right: it is the one clock everyone agrees
// on. But "what day was it" is a question about where the PERSON is, and the
// server is in UTC while Matthew is in the UK, which is an hour ahead all
// summer.
//
// So revising at half past midnight on Monday was, to a UTC server, still
// Sunday — and it landed on the wrong bar of the chart. Verified:
//
//   00:30 Monday 10 August, UK  →  UTC calendar day 2026-08-09
//                               →  UK  calendar day 2026-08-10
//
// An hour a day, always at the exact time a teenager is most likely to be
// revising. The fix is to ask for the calendar date in a named timezone rather
// than doing arithmetic on the server's own clock.
//
// "en-CA" is a small trick: Canadian English formats dates as YYYY-MM-DD, which
// sorts correctly as text and needs no parsing back.
//
// This does mean someone revising abroad sees UK days. For a site about UK
// exams that is the right call, and it is at least consistently wrong rather
// than depending on where the server happens to be running.
// ─────────────────────────────────────────────────────────────────────────────
const TIMEZONE = "Europe/London";

function dayKey(date: Date): string {
  return date.toLocaleDateString("en-CA", { timeZone: TIMEZONE });
}

export async function getProgress(userId: string): Promise<Progress> {
  const rows = await readActivity(userId);

  // The seven day keys the chart covers, ending today.
  //
  // Stepping back from NOON rather than midnight is deliberate: on the two days
  // a year the clocks change, a day is 23 or 25 hours long, and stepping by
  // exactly 24 hours from midnight can land on the same date twice or skip one
  // entirely. Nothing lands near noon, so noon is always safe.
  const todayKey = dayKey(new Date());
  const noonToday = new Date(`${todayKey}T12:00:00Z`);
  const weekKeys: string[] = [];
  for (let back = 6; back >= 0; back--) {
    weekKeys.push(dayKey(new Date(noonToday.getTime() - back * DAY_MS)));
  }

  // "This week" means these seven days — not "since Monday". A Monday-based
  // week resets everyone's numbers to zero on Monday morning, which is
  // discouraging for no good reason.
  const inThisWeek = new Set(weekKeys);

  const subjects: SubjectProgress[] = SUBJECTS.map((subject) => {
    const mine = rows.filter((r) => r.subject === subject.slug);

    const allTopics = subject.years.flatMap((g) => g.topics);
    const touched = new Set(mine.map((r) => r.topic));
    // Only count topics that still exist. A topic could be renamed or removed
    // after events were recorded against it, and counting those would let
    // "topics covered" exceed the number of topics there are.
    const covered = allTopics.filter((t) => touched.has(t.slug)).length;

    const practice = mine.filter((r) => r.kind === "practice");
    const correct = practice.filter((r) => r.correct === true).length;
    const accuracy = practice.length > 0 ? correct / practice.length : null;

    return {
      slug: subject.slug,
      name: subject.name,
      mascot: subject.mascot,
      gradient: subject.gradient,
      accent: subject.accent,
      topicsCovered: covered,
      topicsTotal: allTopics.length,
      percent: allTopics.length > 0 ? Math.round((covered / allTopics.length) * 100) : 0,
      questionsAnswered: practice.length,
      questionsCorrect: correct,
      accuracy,
      flashcardsReviewed: mine.filter((r) => r.kind === "flashcard").length,
      secondsThisWeek: mine
        .filter(
          (r) => r.kind === "time" && inThisWeek.has(dayKey(new Date(r.created_at))),
        )
        .reduce((sum, r) => sum + (r.seconds ?? 0), 0),
      label: labelFor(covered, accuracy),
      nextTopic:
        allTopics.find((t) => !touched.has(t.slug)) ??
        // Every topic touched at least once? Then suggest revisiting the one
        // with the weakest accuracy rather than saying "nothing left to do".
        weakestTopic(mine, allTopics) ??
        null,
    };
  });

  // ── The seven bars of the chart ──────────────────────────────────────────
  // Built by walking the days rather than grouping the events, so a day with
  // nothing recorded still appears — as a gap, which is information. Grouping
  // events would silently drop empty days and squash the week.
  const week: DayTotals[] = [];
  for (const key of weekKeys) {
    const onThisDay = rows.filter((r) => dayKey(new Date(r.created_at)) === key);

    const seconds: Record<string, number> = {};
    const questions: Record<string, number> = {};
    for (const subject of SUBJECTS) {
      const mine = onThisDay.filter((r) => r.subject === subject.slug);
      seconds[subject.slug] = mine
        .filter((r) => r.kind === "time")
        .reduce((sum, r) => sum + (r.seconds ?? 0), 0);
      questions[subject.slug] = mine.filter((r) => r.kind === "practice").length;
    }

    week.push({
      // Noon again, for the same clock-change reason as above.
      day: new Date(`${key}T12:00:00Z`).toLocaleDateString("en-GB", {
        weekday: "short",
        timeZone: TIMEZONE,
      }),
      date: key,
      seconds,
      questions,
    });
  }

  const totalQuestions = subjects.reduce((n, s) => n + s.questionsAnswered, 0);
  const totalCorrect = subjects.reduce((n, s) => n + s.questionsCorrect, 0);
  const totalFlashcards = subjects.reduce((n, s) => n + s.flashcardsReviewed, 0);
  const accuracy = totalQuestions > 0 ? totalCorrect / totalQuestions : null;
  const streak = computeStreak(rows, todayKey);

  const todayCount = rows.filter(
    (r) =>
      (r.kind === "practice" || r.kind === "flashcard") &&
      dayKey(new Date(r.created_at)) === todayKey,
  ).length;

  // Which subjects have a finished test on record — for the "completed a
  // test in every subject" badges. A Set of subject slugs, not a count: a
  // second test in the same subject shouldn't count twice.
  const testedSubjects = new Set(
    rows.filter((r) => r.kind === "test").map((r) => r.subject),
  );

  // All-time, unlike secondsThisWeek above which resets every Monday-ish
  // window on purpose (see SubjectProgress). The "10 hours revising" badge
  // is about a lifetime total, so it reads straight from the raw rows rather
  // than summing something that was deliberately built to forget last week.
  const totalSecondsAllTime = rows
    .filter((r) => r.kind === "time")
    .reduce((sum, r) => sum + (r.seconds ?? 0), 0);

  const testHistory = buildTestHistory(rows);

  return {
    hasAnyActivity: rows.length > 0,
    subjects,
    week,
    totalQuestions,
    totalCorrect,
    accuracy,
    totalFlashcards,
    totalSecondsThisWeek: subjects.reduce((n, s) => n + s.secondsThisWeek, 0),
    nextUp: chooseNextUp(subjects),
    streak,
    today: { count: todayCount, goal: DAILY_GOAL },
    xp: computeXp(totalQuestions, totalFlashcards),
    badges: computeBadges({
      subjects,
      totalQuestions,
      totalFlashcards,
      accuracy,
      streakCurrent: streak.current,
      testedSubjects,
      totalSecondsAllTime,
    }),
    testHistory,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// TEST SCORE HISTORY
//
// `rows` already arrives newest-first (readActivity orders by created_at
// desc), so no re-sorting is needed here — just filter down to test events
// and shape each one for the card that displays it.
//
// A test row with no score (recorded before TEST_SCORE_SETUP.sql ran, or a
// subject with zero auto-marked questions in the pool) is skipped rather than
// shown as "0/0" — that would read as a failed test rather than as "there's
// nothing to show for this one".
//
// Capped at 30: this is a history to browse, not the raw event log — and it
// keeps the progress page from growing without bound for someone who has sat
// a hundred practice exams.
const MAX_TEST_HISTORY = 30;

function buildTestHistory(rows: ActivityRow[]): TestHistoryEntry[] {
  const bySlug = new Map(SUBJECTS.map((s) => [s.slug, s]));

  return rows
    .filter(
      (r): r is ActivityRow & { score_correct: number; score_total: number } =>
        r.kind === "test" &&
        r.score_correct !== null &&
        r.score_total !== null &&
        r.score_total > 0,
    )
    .map((r) => {
      const subject = bySlug.get(r.subject);
      return {
        subjectSlug: r.subject,
        // Falls back to the raw slug for a subject that's since been renamed
        // or removed — the history still shows something rather than crashing
        // on an old row that no longer matches anything in subjects.ts.
        subjectName: subject?.name ?? r.subject,
        mascot: subject?.mascot ?? "pixel",
        accent: subject?.accent ?? "#2563eb",
        date: r.created_at,
        correct: r.score_correct,
        total: r.score_total,
        percent: Math.round((r.score_correct / r.score_total) * 100),
      };
    })
    .slice(0, MAX_TEST_HISTORY);
}

// ─── Small helpers ──────────────────────────────────────────────────────────

// The pill under each mascot. Coverage says how much you have SEEN; accuracy
// says how well it went. "Confident" deliberately needs both — knowing a little
// very well is not the same as being ready for the exam.
function labelFor(
  covered: number,
  accuracy: number | null,
): SubjectProgress["label"] {
  if (covered === 0) return "Not started";
  if (accuracy !== null && accuracy >= 0.8 && covered >= 3) return "Confident";
  return "Learning";
}

// When every topic has been touched, suggest the one answered worst.
function weakestTopic(
  rows: ActivityRow[],
  topics: { slug: string; title: string }[],
): { slug: string; title: string } | null {
  let worst: { topic: { slug: string; title: string }; accuracy: number } | null = null;

  for (const topic of topics) {
    const practice = rows.filter((r) => r.topic === topic.slug && r.kind === "practice");
    if (practice.length === 0) continue;
    const accuracy =
      practice.filter((r) => r.correct === true).length / practice.length;
    if (!worst || accuracy < worst.accuracy) worst = { topic, accuracy };
  }

  return worst?.topic ?? null;
}

// ─────────────────────────────────────────────────────────────────────────────
// THE STREAK — counts consecutive days, but is forgiving about "today", AND
// forgiving about one missed day a week (the "streak freeze")
//
// A streak that resets to zero the instant midnight passes and nothing has
// happened yet would show 0 to someone who is about to revise in five
// minutes — discouraging, and wrong: they haven't broken anything yet.
//
// So today is treated specially. If today already has activity, it's
// included and the count runs backward from today. If today has nothing YET,
// the count instead runs backward from YESTERDAY — the streak isn't broken
// until the day actually ends with nothing recorded. `activeToday` tells the
// caller which case it is, so the dashboard can word it correctly ("4-day
// streak" vs "4-day streak — do something today to keep it going").
//
// THE FREEZE, AND WHY IT'S AUTOMATIC RATHER THAN A THING YOU SPEND.
//
// Duolingo sells/awards freeze tokens you bank and spend deliberately. This
// site has no currency and no inventory to manage, so instead of a resource
// to track, missing exactly one day in any run of seven is simply forgiven,
// always, for free — the walk backward through the days keeps going instead
// of stopping. A SECOND missed day within the same seven ends the streak
// there, same as it always did. The point isn't the mechanic, it's the
// outcome: one bad day — ill, busy, forgot — shouldn't erase three weeks of
// real effort, which is the single biggest reason people abandon a streak
// forever rather than just picking it back up.
//
// `usedFreeze` tells the caller whether a gap was actually forgiven in the
// streak being reported, so the dashboard can mention it rather than the
// number just looking one higher than the visible days would suggest.
//
// ⚠️ A FREEZE IS ONLY SPENT IF IT ACTUALLY BRIDGES TO MORE REAL ACTIVITY.
//
// The first version of this checked only "is a freeze available", and had a
// real bug: for someone with NO history at all, the very first day checked
// is a gap, a freeze was "available", so it got spent — reporting a freeze
// had saved a streak that never existed in the first place. Same broken
// result for a single stray active day from weeks ago with nothing else
// around it: a "streak" would be manufactured out of nothing.
//
// The fix is a one-day look-ahead: before spending the freeze on a gap,
// check whether the day just beyond it has real activity. If it does, the
// freeze is genuinely bridging two real stretches of activity — spend it. If
// it doesn't, spending it would only be padding out to nothing, so the walk
// stops instead, exactly as it would with no freeze at all.
// ─────────────────────────────────────────────────────────────────────────────
function computeStreak(
  rows: ActivityRow[],
  todayKey: string,
): Progress["streak"] {
  const daysWithActivity = new Set(
    rows.map((r) => dayKey(new Date(r.created_at))),
  );

  const activeToday = daysWithActivity.has(todayKey);

  // Start from today if it's already active, otherwise start checking from
  // yesterday — see the comment above for why.
  let cursor = new Date(`${todayKey}T12:00:00Z`);
  if (!activeToday) cursor = new Date(cursor.getTime() - DAY_MS);

  let current = 0;
  let usedFreeze = false;
  let freezeAvailable = true; // resets every 7 days walked, see below
  let daysThisWindow = 0;

  while (true) {
    const active = daysWithActivity.has(dayKey(cursor));
    const dayBeyondGap = dayKey(new Date(cursor.getTime() - DAY_MS));
    const bridgesToRealActivity = daysWithActivity.has(dayBeyondGap);

    if (active) {
      current++;
    } else if (freezeAvailable && bridgesToRealActivity) {
      // One free pass per rolling week of the streak — the day is skipped
      // over rather than ending the walk, but doesn't add to the visible
      // count, because nothing was actually done that day.
      freezeAvailable = false;
      usedFreeze = true;
    } else {
      break; // a real break: either the freeze is already spent this week,
      // or there's nothing beyond this gap worth bridging to.
    }

    daysThisWindow++;
    if (daysThisWindow === 7) {
      daysThisWindow = 0;
      freezeAvailable = true;
    }
    cursor = new Date(cursor.getTime() - DAY_MS);
  }

  return { current, activeToday, usedFreeze };
}

function computeXp(totalQuestions: number, totalFlashcards: number): Progress["xp"] {
  const total = totalQuestions * XP_PER_QUESTION + totalFlashcards * XP_PER_FLASHCARD;
  return {
    total,
    level: Math.floor(total / XP_PER_LEVEL) + 1,
    intoLevel: total % XP_PER_LEVEL,
    forNextLevel: XP_PER_LEVEL,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// "EVERY SUBJECT" BADGES, AND WHY LANGUAGES ARE SPECIAL
//
// Several badges ask for something in every subject. Taken completely
// literally that includes Spanish, French AND German — but a real GCSE
// student studies exactly ONE modern foreign language; the site lists all
// three because it doesn't know in advance which one that is, not because
// anyone is expected to do all of them. Taking "every subject" literally
// would make those badges impossible for every real student on the site.
//
// So for badges that mean "every subject", the languages group is satisfied
// by doing well in ANY ONE language, not all three — matching how the
// subject is actually studied. This deliberately does NOT extend to the
// sciences: Biology, Chemistry and Physics are three separate GCSEs
// everyone here actually takes, so "every subject" stays literal for them.
// ─────────────────────────────────────────────────────────────────────────────
const LANGUAGE_GROUP_SLUGS = new Set(
  SUBJECTS.filter((s) => s.group === "languages").map((s) => s.slug),
);

function allSubjectsSatisfy(
  subjects: SubjectProgress[],
  predicate: (subject: SubjectProgress) => boolean,
): boolean {
  const nonLanguages = subjects.filter((s) => !LANGUAGE_GROUP_SLUGS.has(s.slug));
  const languages = subjects.filter((s) => LANGUAGE_GROUP_SLUGS.has(s.slug));

  return (
    nonLanguages.every(predicate) &&
    // No languages on the site at all would be a strange world to design
    // for, but "vacuously true" is the wrong answer if it ever happens —
    // .some() on an empty array is false, so this makes it true instead.
    (languages.length === 0 || languages.some(predicate))
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// BADGES — a fixed list, always all of them, each marked earned or not.
//
// Nothing is stored. Every badge's condition is worked out fresh from
// figures already being computed anyway, the same "derive, don't store"
// choice as the streak and the daily goal. The only cost of a badge here is
// deciding what it means; there is no database row that could ever drift out
// of sync with reality, because there is no database row.
//
// Returning the LOCKED ones too, not just earned ones, is deliberate: a
// badge you can't see yet isn't something to aim for.
// ─────────────────────────────────────────────────────────────────────────────
function computeBadges(input: {
  subjects: SubjectProgress[];
  totalQuestions: number;
  totalFlashcards: number;
  accuracy: number | null;
  streakCurrent: number;
  testedSubjects: Set<string>;
  totalSecondsAllTime: number;
}): Badge[] {
  const {
    subjects,
    totalQuestions,
    totalFlashcards,
    accuracy,
    streakCurrent,
    testedSubjects,
    totalSecondsAllTime,
  } = input;

  return [
    {
      id: "first-steps",
      name: "First steps",
      description: "Answer your first practice question",
      icon: "🌱",
      earned: totalQuestions >= 1,
    },
    {
      id: "week-warrior",
      name: "Week warrior",
      description: "Reach a 7-day streak",
      icon: "🔥",
      earned: streakCurrent >= 7,
    },
    {
      id: "month-master",
      name: "Month master",
      description: "Reach a 30-day streak",
      icon: "🗓️",
      earned: streakCurrent >= 30,
    },
    {
      id: "century",
      name: "Century",
      description: "Answer 100 practice questions",
      icon: "💯",
      earned: totalQuestions >= 100,
    },
    {
      id: "flashcard-fanatic",
      name: "Flashcard fanatic",
      description: "Review 100 flashcards",
      icon: "📚",
      earned: totalFlashcards >= 100,
    },
    {
      id: "subject-master",
      name: "Subject master",
      description: "Cover every topic in one subject",
      icon: "🎓",
      earned: subjects.some((s) => s.percent === 100),
    },
    {
      id: "all-rounder",
      name: "All-rounder",
      // "every subject" here means the languages group counts as covered by
      // any ONE language — see the comment above allSubjectsSatisfy.
      description: "Cover at least one topic in every subject",
      icon: "🌐",
      earned: allSubjectsSatisfy(subjects, (s) => s.topicsCovered > 0),
    },
    {
      id: "perfectionist",
      name: "Perfectionist",
      description: "90%+ accuracy over at least 20 questions",
      icon: "🎯",
      earned: totalQuestions >= 20 && accuracy !== null && accuracy >= 0.9,
    },
    {
      id: "double-century",
      name: "Double century",
      description: "Answer 200 practice questions",
      icon: "🏏",
      earned: totalQuestions >= 200,
    },
    {
      id: "test-ace",
      name: "Test ace",
      // Same languages-count-as-one rule as All-rounder.
      description: "Complete a test in every subject",
      icon: "📝",
      earned: allSubjectsSatisfy(subjects, (s) => testedSubjects.has(s.slug)),
    },
    {
      id: "grand-master",
      name: "Grand master",
      // "100%, including the tests": full topic coverage AND a completed
      // test, in every subject — the two hardest single-subject badges
      // (Subject master and Test ace) generalised across all of them at
      // once. Same languages-count-as-one rule as the others.
      description: "100% topic coverage AND a completed test, in every subject",
      icon: "👑",
      earned: allSubjectsSatisfy(
        subjects,
        (s) => s.percent === 100 && testedSubjects.has(s.slug),
      ),
    },
    {
      id: "marathon-reviser",
      name: "Marathon reviser",
      description: "Spend 10 hours revising in total",
      icon: "⏱️",
      earned: totalSecondsAllTime >= 10 * 60 * 60,
    },
  ];
}

// The "Next up" card. Picks the subject you have covered least, because the
// point of a suggestion is to counter the very human habit of revising the
// subject you already like. Ties break towards the first subject listed.
function chooseNextUp(subjects: SubjectProgress[]): Progress["nextUp"] {
  const candidates = subjects.filter((s) => s.nextTopic !== null);
  if (candidates.length === 0) return null;

  const chosen = candidates.reduce((least, s) =>
    s.percent < least.percent ? s : least,
  );

  return {
    subject: chosen.name,
    subjectSlug: chosen.slug,
    topic: chosen.nextTopic!.title,
    topicSlug: chosen.nextTopic!.slug,
  };
}

// Used by the page to check a topic exists before recording against it, so a
// hand-typed URL cannot fill the table with events for topics that don't exist.
export function isRealTopic(subject: string, topic: string): boolean {
  // `Object.hasOwn` would read better, but it needs a newer compilation target
  // than every tool here agrees on. This is the same check with no such
  // requirement, and `call` is used rather than `TOPIC_CONTENT.hasOwnProperty`
  // in case a topic were ever named "hasOwnProperty" — which sounds absurd
  // until the day somebody does it.
  return Object.prototype.hasOwnProperty.call(
    TOPIC_CONTENT,
    `${subject}/${topic}`,
  );
}

export function formatDuration(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.round((seconds % 3600) / 60);
  if (hours === 0) return `${minutes}m`;
  return `${hours}h ${String(minutes).padStart(2, "0")}m`;
}

// ─────────────────────────────────────────────────────────────────────────────
// PREVIEW ONLY — for the Pro-tier planner (app/pro-preview/planner). Not used
// by anything a real visitor can reach yet; see PRO_PREVIEW_ENABLED in
// app/lib/site.ts. Written here rather than in the preview page itself for
// the same reason getProgress's own week-building code lives in this file
// and not on the progress page: reading and summing `activity` rows is
// exactly this file's job, and the planner's look-back calendar needs the
// same event log, just over 28 days instead of 7 and grouped by day rather
// than by subject.
// ─────────────────────────────────────────────────────────────────────────────

export type PlannerDay = {
  date: string; // "YYYY-MM-DD", Europe/London
  label: string; // "12" — the day-of-month, for a calendar cell
  isToday: boolean;
  questionsAnswered: number;
  minutesSpent: number;
  flashcardsReviewed: number;
};

// The last 28 days, oldest first, today included — a plain calendar grid the
// planner page can lay out 7-wide. Reuses `readActivity` and `dayKey` rather
// than opening a second connection or re-deriving "what day was this event
// in Matthew's timezone" a second way, which is exactly the kind of
// duplicated logic PROJECT_NOTES already flags as a real bug risk elsewhere
// on this site (see the marking-rule and multiple-choice-shuffle entries).
export async function getMonthlyActivity(userId: string): Promise<PlannerDay[]> {
  const rows = await readActivity(userId);

  const todayKey = dayKey(new Date());
  const noonToday = new Date(`${todayKey}T12:00:00Z`);

  const days: PlannerDay[] = [];
  for (let back = 27; back >= 0; back--) {
    const date = new Date(noonToday.getTime() - back * DAY_MS);
    const key = dayKey(date);
    const onThisDay = rows.filter((r) => dayKey(new Date(r.created_at)) === key);

    days.push({
      date: key,
      label: date.toLocaleDateString("en-GB", {
        day: "numeric",
        timeZone: TIMEZONE,
      }),
      isToday: key === todayKey,
      questionsAnswered: onThisDay.filter((r) => r.kind === "practice").length,
      minutesSpent: Math.round(
        onThisDay
          .filter((r) => r.kind === "time")
          .reduce((sum, r) => sum + (r.seconds ?? 0), 0) / 60,
      ),
      flashcardsReviewed: onThisDay.filter((r) => r.kind === "flashcard").length,
    });
  }

  return days;
}
