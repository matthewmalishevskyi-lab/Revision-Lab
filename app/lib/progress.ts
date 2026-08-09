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

export type ActivityKind = "practice" | "flashcard" | "time";

type ActivityRow = {
  subject: string;
  topic: string;
  kind: ActivityKind;
  correct: boolean | null;
  seconds: number | null;
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
      `&select=subject,topic,kind,correct,seconds,created_at` +
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
};

const DAY_MS = 24 * 60 * 60 * 1000;

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

  return {
    hasAnyActivity: rows.length > 0,
    subjects,
    week,
    totalQuestions,
    totalCorrect,
    accuracy: totalQuestions > 0 ? totalCorrect / totalQuestions : null,
    totalFlashcards: subjects.reduce((n, s) => n + s.flashcardsReviewed, 0),
    totalSecondsThisWeek: subjects.reduce((n, s) => n + s.secondsThisWeek, 0),
    nextUp: chooseNextUp(subjects),
  };
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
