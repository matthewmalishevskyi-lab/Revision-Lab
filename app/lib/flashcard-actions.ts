"use server";

// The bridge between the browser and flashcard_reviews — the same pattern as
// progress-actions.ts, kept as its own file rather than added to that one
// because it bridges a different table with its own validation rule (the
// term has to be a real flashcard on a real topic, which nothing else on
// the site needs to check).
//
// TREAT EVERY ARGUMENT AS HOSTILE — see progress-actions.ts for the full
// reasoning. The short version: the user id comes from the session cookie,
// never the caller, and everything else is checked against real content
// before it's trusted.

import { getCurrentUser } from "./actions";
import { isRealTopic } from "./progress";
import { getTopicContent } from "./content";
import { recordFlashcardReview } from "./flashcard-review";

export async function reviewFlashcard(
  subject: string,
  topic: string,
  term: string,
  knewIt: boolean,
): Promise<void> {
  const user = await getCurrentUser();
  if (!user) return; // Not logged in: nothing to schedule. Not an error.
  if (!isRealTopic(subject, topic)) return;

  // The term has to be a real flashcard's real term on this real topic —
  // otherwise a hostile caller could write arbitrary card_key strings into
  // the table, which would then sit there matching nothing at read time.
  const content = getTopicContent(subject, topic);
  const isRealTerm = content?.flashcards.some((card) => card.term === term);
  if (!isRealTerm) return;

  await recordFlashcardReview({ userId: user.id, subject, topic, term, knewIt });
}
