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

import { revalidatePath } from "next/cache";
import { getCurrentUser } from "./actions";
import { deleteAllFlashcardReviews } from "./flashcard-review";
import { deleteAllQuestionReviews, recordQuestionReview } from "./question-review";
import { getTopicContent } from "./content";
import { deleteAllProgress, isRealTopic, recordActivity } from "./progress";
import { getSubject } from "./subjects";

// The timer sends a heartbeat every 30 seconds. Anything much larger than that
// is either a bug or someone poking at the endpoint, and either way it should
// not be able to invent hours of revision.
const MAX_SECONDS_PER_CALL = 120;

export async function recordAnswer(
  subject: string,
  topic: string,
  correct: boolean,
  // Which question — so a wrong one can be brought back later. Optional so
  // every existing caller keeps working unchanged. See question-review.ts.
  question?: string,
): Promise<void> {
  const user = await getCurrentUser();
  if (!user) return; // Not logged in: nothing to record against. Not an error.
  if (!isRealTopic(subject, topic)) return;

  // ⚠️ THE TWO WRITES ARE INDEPENDENT, AND ONLY THE FIRST ONE MATTERS TODAY.
  // `activity` is what the streak, XP, the dashboard and today's practice all
  // read. `question_reviews` is new and may not exist yet if
  // QUESTION_REVIEW_SETUP.sql has not been run. allSettled rather than all, so
  // a refused review can never cost a student their recorded answer.
  await Promise.allSettled([
    recordActivity({
      userId: user.id,
      subject,
      topic,
      kind: "practice",
      correct,
    }),
    question && isRealQuestion(subject, topic, question)
      ? recordQuestionReview({ userId: user.id, subject, topic, question, correct })
      : Promise.resolve(),
  ]);
}

/**
 * ⚠️ CHECKED AGAINST THE CONTENT, NOT TRUSTED FROM THE BROWSER.
 * A Server Action is reachable by anything that can make an HTTP request, so
 * `question` could be any text at all. Without this, anyone could fill their
 * own review list — or, if a bug ever let it cross users, somebody else's —
 * with arbitrary strings. It has to be a question that genuinely exists in
 * that topic, the same check the report button makes.
 */
function isRealQuestion(subject: string, topic: string, question: string): boolean {
  return (getTopicContent(subject, topic)?.practice ?? []).some((q) => q.question === question);
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

// ─────────────────────────────────────────────────────────────────────────────
// DELETE EVERYTHING I'VE DONE.
//
// WHOSE history gets deleted is read from the session cookie and nowhere else
// — the same rule every action in this file follows, and it matters more here
// than anywhere. If this took a user id as an argument, anyone able to make an
// HTTP request could wipe somebody else's revision history by guessing an id.
// There is deliberately no parameter to get wrong.
//
// Three tables, because a person's history lives in three: `activity`
// (everything the progress page counts), `flashcard_reviews` (which cards are
// due, and when) and `question_reviews` (which wrong questions come back, and
// when). All are cleared, or the caller is told it failed — see
// deleteAllProgress's own comment on why these two report failure when the
// recording functions above quietly swallow it.
// ─────────────────────────────────────────────────────────────────────────────
export async function deleteMyProgress(): Promise<{ ok: boolean; error?: string }> {
  const user = await getCurrentUser();
  if (!user) return { ok: false, error: "You need to be signed in." };

  try {
    const [progressCleared, reviewsCleared, questionsCleared] = await Promise.all([
      deleteAllProgress(user.id),
      deleteAllFlashcardReviews(user.id),
      deleteAllQuestionReviews(user.id),
    ]);

    // ⚠️ "NOTHING WAS DELETED" WAS A GUESS, AND SOMETIMES A WRONG ONE.
    //
    // These are two separate deletes running together. If the activity rows
    // went and the flashcard reviews did not, the old wording told the person
    // their history was untouched while half of it was already gone — the one
    // thing worse than a failed delete is being told the wrong thing about it.
    //
    // Both of these are safe to repeat (deleting rows that are already gone
    // deletes nothing), so "try again" is still the right advice; it just has
    // to be said without promising what did or did not happen. The log below
    // records which half actually failed, for the one person who can look.
    if (!progressCleared || !reviewsCleared || !questionsCleared) {
      console.error(
        "[progress] delete incomplete — activity cleared:",
        progressCleared,
        "flashcard reviews cleared:",
        reviewsCleared,
        "question reviews cleared:",
        questionsCleared,
      );
      return {
        ok: false,
        error:
          "Something went wrong part-way through, so some of your history may still be here. Please try again — running it a second time is safe.",
      };
    }
  } catch (error) {
    console.error("[progress] delete failed:", error);
    return { ok: false, error: "Something went wrong. Please try again." };
  }

  // Every page that shows a figure derived from this data, so none of them can
  // carry on displaying a total that no longer has any rows behind it.
  revalidatePath("/progress");
  revalidatePath("/dashboard");
  revalidatePath("/review");
  return { ok: true };
}
