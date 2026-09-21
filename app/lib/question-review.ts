// "Bring back the questions you got wrong" — spaced repetition for practice
// questions, the way flashcards have had it since August.
//
// ─────────────────────────────────────────────────────────────────────────────
// THE IDEA, AND WHY IT WAS THE BEST-VALUE ITEM ON THE ROADMAP
//
// A question you get wrong is the single most useful thing the site learns
// about you, and until now it threw it away. Getting it wrong, being shown the
// answer, and then meeting it again tomorrow — and again in three days, and a
// week after that — is the retrieval practice that actually moves a grade.
// Matthew, September: "They'll be great. Yes. Yes. We will do that later."
//
// Same five Leitner boxes as flashcard-review.ts, deliberately: two
// spaced-repetition systems on one site with DIFFERENT intervals would be two
// answers to "how long until I see this again", and a student would reasonably
// wonder which one was wrong.
// ─────────────────────────────────────────────────────────────────────────────

import { getTopicContent } from "./content";

const SUPABASE_URL = process.env.SUPABASE_URL?.replace(/\/+$/, "");
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const KEY_IS_LEGACY_JWT = (SUPABASE_KEY ?? "").startsWith("eyJ");

export const QUESTION_REVIEW_ENABLED = Boolean(SUPABASE_URL && SUPABASE_KEY);

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

const DAY_MS = 24 * 60 * 60 * 1000;

/** Identical to flashcard-review.ts — see the note above on why. */
const BOX_INTERVALS_MS = [
  0,
  10 * 60 * 1000, // box 1 — wrong just now: back in ten minutes
  1 * DAY_MS,
  3 * DAY_MS,
  7 * DAY_MS,
  16 * DAY_MS, // box 5 — the top, still not forever
];
export const MAX_BOX = BOX_INTERVALS_MS.length - 1;

export type ReviewEvent = { correct: boolean; at: number };

/**
 * One question's answer history, oldest first, folded into where it stands.
 *
 * ⚠️ A QUESTION ONLY ENTERS THE SYSTEM WHEN YOU GET IT WRONG.
 * This is the one real difference from flashcards. A card is scheduled the
 * moment you judge it; a question you get right first time is simply learned,
 * and bringing it back would fill the list with things nobody needs to see
 * again — drowning the handful of genuine mistakes the list exists for. So
 * `everWrong` gates everything: until a wrong answer appears, nothing is
 * scheduled at all.
 *
 * After that it is ordinary Leitner. Right climbs a box, wrong falls all the
 * way back to box 1 — forgetting costs more than remembering gains, which is
 * the entire point of the system.
 */
export function foldQuestion(events: ReviewEvent[]): {
  everWrong: boolean;
  box: number;
  dueAt: number;
} {
  let box = 1;
  let everWrong = false;
  let lastAt = 0;
  for (const e of events) {
    if (!e.correct) everWrong = true;
    // Answers given before the first mistake do not climb anything: the
    // question was not in the system yet. (Strictly, the reset to box 1 on
    // that first mistake would erase any climb anyway — checked, sabotaging
    // this line changes no result. It stays because it says what is meant.)
    if (everWrong) box = e.correct ? Math.min(box + 1, MAX_BOX) : 1;
    lastAt = e.at;
  }
  return { everWrong, box, dueAt: lastAt + BOX_INTERVALS_MS[box] };
}

/**
 * Remember one answer. Returns nothing and never throws.
 *
 * ⚠️ FAILURE IS SWALLOWED ON PURPOSE, AND THIS IS WHERE IT MATTERS MOST.
 * This runs alongside every practice answer. If QUESTION_REVIEW_SETUP.sql has
 * not been run yet the table does not exist and every insert is refused — and
 * that must not stop the answer being recorded in `activity`, or the streak,
 * or anything else. The caller does not await a result it could act on,
 * because there is nothing useful it could do with one.
 */
export async function recordQuestionReview(input: {
  userId: string;
  subject: string;
  topic: string;
  question: string;
  correct: boolean;
}): Promise<void> {
  if (!QUESTION_REVIEW_ENABLED) return;
  try {
    const res = await supabase("question_reviews", {
      method: "POST",
      body: JSON.stringify({
        user_id: input.userId,
        subject: input.subject,
        topic: input.topic,
        question: input.question.slice(0, 2000),
        correct: input.correct,
      }),
    });
    if (!res.ok) {
      // Most likely the table is not there yet. Logged, not thrown.
      console.error("[question-review] insert failed:", res.status, await res.text());
    }
  } catch (error) {
    console.error("[question-review] insert threw:", error);
  }
}

export type DueQuestion = {
  subjectSlug: string;
  topicSlug: string;
  question: string;
  box: number;
  dueAt: number;
};

/** The most history read per user — the same ceiling progress.ts uses. */
const MAX_READ = 5000;

/**
 * Every question this student has got wrong at least once and is now due to
 * see again, most overdue first.
 *
 * Returns [] rather than throwing on any failure, including the table not
 * existing yet — in which case the "revisit" section simply does not appear.
 */
export async function getDueQuestions(userId: string, now = Date.now()): Promise<DueQuestion[]> {
  if (!QUESTION_REVIEW_ENABLED) return [];

  let rows: { subject: string; topic: string; question: string; correct: boolean; created_at: string }[];
  try {
    const res = await supabase(
      `question_reviews?user_id=eq.${encodeURIComponent(userId)}` +
        `&select=subject,topic,question,correct,created_at` +
        // Newest first, THEN reversed — the same trap flashcard-review.ts fell
        // into: ascending order with a row cap keeps the OLDEST history and
        // silently freezes everything after it for a heavy user.
        `&order=created_at.desc&limit=${MAX_READ}`,
    );
    if (!res.ok) {
      console.error("[question-review] read failed:", res.status, await res.text());
      return [];
    }
    rows = (await res.json()).reverse();
  } catch (error) {
    console.error("[question-review] read threw:", error);
    return [];
  }

  const byQuestion = new Map<string, { subject: string; topic: string; question: string; events: ReviewEvent[] }>();
  for (const r of rows) {
    const key = `${r.subject}/${r.topic}/${r.question}`;
    const entry = byQuestion.get(key) ?? { subject: r.subject, topic: r.topic, question: r.question, events: [] };
    entry.events.push({ correct: r.correct, at: new Date(r.created_at).getTime() });
    byQuestion.set(key, entry);
  }

  const due: DueQuestion[] = [];
  for (const { subject, topic, question, events } of byQuestion.values()) {
    const state = foldQuestion(events);
    if (!state.everWrong || state.dueAt > now) continue;

    // Looked up fresh from the content, so a question that has since been
    // reworded or removed is skipped rather than shown in a stale form.
    const content = getTopicContent(subject, topic);
    if (!content?.practice?.some((q) => q.question === question)) continue;

    due.push({ subjectSlug: subject, topicSlug: topic, question, box: state.box, dueAt: state.dueAt });
  }

  due.sort((a, b) => a.dueAt - b.dueAt);
  return due;
}

/**
 * Part of "delete my progress". Returns false only when the delete was
 * genuinely refused, so the caller can tell the person the truth.
 *
 * ⚠️ A MISSING TABLE COUNTS AS SUCCESS, DELIBERATELY.
 * If QUESTION_REVIEW_SETUP.sql has never been run there is nothing stored to
 * delete. Reporting that as a failure would tell every person pressing
 * "delete my progress" that some of their history survived when none ever
 * existed — and they would press it again, forever, with the same result.
 */
export async function deleteAllQuestionReviews(userId: string): Promise<boolean> {
  if (!QUESTION_REVIEW_ENABLED) return true;

  const res = await supabase(`question_reviews?user_id=eq.${encodeURIComponent(userId)}`, {
    method: "DELETE",
    headers: { Prefer: "return=minimal" },
  });
  if (res.ok) return true;

  const body = (await res.text()).slice(0, 200);
  if (res.status === 404 || body.includes("PGRST205")) return true; // no table, nothing stored
  console.error(`[question-review] could not delete reviews: HTTP ${res.status}`, body);
  return false;
}
