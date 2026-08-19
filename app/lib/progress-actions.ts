"use server";

// The bridge between the browser and the progress table.
//
// Practice, Flashcards and the study timer all run in the browser, and the
// browser must never touch the database directly — that would mean shipping the
// Supabase secret key to every visitor. So they call these Server Actions
// instead: the function runs on the server, the browser only ever sends the
// arguments.
//
// ─────────────────────────────────────────────────────────────────────────────
// TREAT EVERY ARGUMENT AS HOSTILE.
//
// A Server Action is reachable by anything that can make an HTTP request, not
// only by the buttons we wrote. Anyone can call this with whatever they like:
// a made-up topic, someone else's user id, a study session of a billion
// seconds.
//
// So nothing here trusts its input:
//   - the user id comes from the SESSION COOKIE, never from the caller, so you
//     can only ever record activity as yourself
//   - the subject and topic are checked against the real content
//   - seconds are clamped to a sensible range
//
// This is the defensive design topic on the site, applied to the site itself.
// ─────────────────────────────────────────────────────────────────────────────

import { getCurrentUser } from "./actions";
import { isRealTopic, recordActivity } from "./progress";
import { getSubject } from "./subjects";

// The timer sends a heartbeat every 30 seconds. Anything much larger than that
// is either a bug or someone poking at the endpoint, and either way it should
// not be able to invent hours of revision.
const MAX_SECONDS_PER_CALL = 120;

export async function recordAnswer(
  subject: string,
  topic: string,
  correct: boolean,
): Promise<void> {
  const user = await getCurrentUser();
  if (!user) return; // Not logged in: nothing to record against. Not an error.
  if (!isRealTopic(subject, topic)) return;

  await recordActivity({
    userId: user.id,
    subject,
    topic,
    kind: "practice",
    correct,
  });
}

export async function recordFlashcard(
  subject: string,
  topic: string,
): Promise<void> {
  const user = await getCurrentUser();
  if (!user) return;
  if (!isRealTopic(subject, topic)) return;

  await recordActivity({ userId: user.id, subject, topic, kind: "flashcard" });
}

export async function recordStudyTime(
  subject: string,
  topic: string,
  seconds: number,
): Promise<void> {
  const user = await getCurrentUser();
  if (!user) return;
  if (!isRealTopic(subject, topic)) return;

  // Math.floor because the database column is an integer, and Number.isFinite
  // because JSON can carry NaN and Infinity through as surprises.
  if (!Number.isFinite(seconds)) return;
  const safe = Math.floor(Math.min(Math.max(seconds, 0), MAX_SECONDS_PER_CALL));
  if (safe <= 0) return;

  await recordActivity({
    userId: user.id,
    subject,
    topic,
    kind: "time",
    seconds: safe,
  });
}

// Records that a {subject} test was finished — see TEST_BADGE_SETUP.sql for
// the matching database change. There's no "topic" here: a test spans every
// topic in the subject, so it's recorded against the subject as a whole
// rather than pretending it belongs to one topic. recordActivity's `topic`
// column just gets the subject's own slug again, since the column is
// required and there's no real topic to put there.
//
// `correct`/`total` are the auto-marked score out of the auto-marked
// questions — see TEST_SCORE_SETUP.sql for the columns this feeds, and
// progress.ts's buildTestHistory for how it turns into "Test score history".
// Clamped the same way recordStudyTime clamps seconds: MockExam already only
// ever sends real numbers, but a Server Action is reachable by anything that
// can make an HTTP request, so nothing here trusts them blindly.
export async function recordTestCompletion(
  subject: string,
  correct: number,
  total: number,
): Promise<void> {
  const user = await getCurrentUser();
  if (!user) return;
  if (!getSubject(subject)) return; // hostile input: only record real subjects

  if (!Number.isFinite(correct) || !Number.isFinite(total)) return;
  // A sanity ceiling, the same idea as MAX_SECONDS_PER_CALL above — no real
  // mock exam here has anywhere near 500 questions in it.
  const safeTotal = Math.floor(Math.min(Math.max(total, 0), 500));
  const safeCorrect = Math.floor(Math.min(Math.max(correct, 0), safeTotal));

  await recordActivity({
    userId: user.id,
    subject,
    topic: subject,
    kind: "test",
    // 0 auto-marked questions is a real, valid case (a test built entirely
    // from self-marked questions) — still recorded, just with no score to
    // show, which is exactly what buildTestHistory filters out.
    scoreCorrect: safeCorrect,
    scoreTotal: safeTotal,
  });
}
