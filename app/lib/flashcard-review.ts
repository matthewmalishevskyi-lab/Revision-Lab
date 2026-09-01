// Spaced repetition for flashcards: which cards are due for another look,
// and how "due" is worked out.
//
// Server-only, like progress.ts — it uses the Supabase secret key, which must
// never reach a browser. app/lib/flashcard-actions.ts is how a Client
// Component reaches it.
//
// ─────────────────────────────────────────────────────────────────────────────
// A LEITNER SYSTEM, DELIBERATELY SIMPLE
//
// Five boxes. Get a card right and it moves up a box and isn't due again for
// longer; get it wrong and it drops straight back to box 1 and is due again
// almost immediately. That's the entire idea behind spaced repetition: spend
// time on what you keep getting wrong, and less on what you already know —
// rather than a flashcard deck treating every card as equally worth your
// time forever, which is what re-reading the same 40 cards front to back
// every time actually does.
//
// Box 5 is not "solved forever" — it comes back every 16 days rather than
// never, because memory fades even for things you once knew cold. A card can
// only be forgotten as far as box 1; there's no box 0, no "retired."
// ─────────────────────────────────────────────────────────────────────────────

import { randomUUID } from "node:crypto";
import { getTopicContent } from "./content";

const SUPABASE_URL = process.env.SUPABASE_URL?.replace(/\/+$/, "");
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const KEY_IS_LEGACY_JWT = (SUPABASE_KEY ?? "").startsWith("eyJ");

export const FLASHCARD_REVIEW_ENABLED = Boolean(SUPABASE_URL && SUPABASE_KEY);

const DAY_MS = 24 * 60 * 60 * 1000;

// Index 0 is unused (box numbers start at 1) so BOX_INTERVALS_MS[box] reads
// naturally rather than needing a "- 1" at every call site.
const BOX_INTERVALS_MS = [
  0,
  10 * 60 * 1000, // box 1 — wrong just now: come back soon, same session even
  1 * DAY_MS, // box 2
  3 * DAY_MS, // box 3
  7 * DAY_MS, // box 4
  16 * DAY_MS, // box 5 — the top, still not forever
];
const MAX_BOX = BOX_INTERVALS_MS.length - 1;

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

type ReviewRow = {
  subject: string;
  topic: string;
  card_key: string;
  knew_it: boolean;
  created_at: string;
};

// ─── Writing ────────────────────────────────────────────────────────────────

export async function recordFlashcardReview(input: {
  userId: string;
  subject: string;
  topic: string;
  term: string;
  knewIt: boolean;
}): Promise<void> {
  if (!FLASHCARD_REVIEW_ENABLED) return;

  const res = await supabase("flashcard_reviews", {
    method: "POST",
    headers: { Prefer: "return=minimal" },
    body: JSON.stringify({
      id: randomUUID(),
      user_id: input.userId,
      subject: input.subject,
      topic: input.topic,
      card_key: input.term,
      knew_it: input.knewIt,
    }),
  });

  if (!res.ok) {
    // Logged, not thrown — same reasoning as recordActivity in progress.ts.
    // Losing one statistic is a much smaller problem than an error
    // interrupting someone mid-revision.
    console.error(
      `[flashcard-review] could not record review: HTTP ${res.status}`,
      (await res.text()).slice(0, 200),
    );
  }
}

// Cleared alongside the activity log when someone deletes their history —
// these rows are a record of what they judged themselves on, so leaving them
// behind would mean cards still turning up in /review scheduled by judgements
// that supposedly no longer exist.
export async function deleteAllFlashcardReviews(userId: string): Promise<boolean> {
  if (!FLASHCARD_REVIEW_ENABLED) return true;

  const res = await supabase(
    `flashcard_reviews?user_id=eq.${encodeURIComponent(userId)}`,
    { method: "DELETE", headers: { Prefer: "return=minimal" } },
  );

  if (!res.ok) {
    console.error(
      `[flashcard-review] could not delete reviews: HTTP ${res.status}`,
      (await res.text()).slice(0, 200),
    );
    return false;
  }
  return true;
}

// ─── Reading ────────────────────────────────────────────────────────────────

const MAX_EVENTS_READ = 5000; // same cap and reasoning as progress.ts

// ─────────────────────────────────────────────────────────────────────────────
// FETCHED NEWEST-FIRST, THEN REVERSED — found in the 2026-08-25 deep bug hunt.
//
// This used to fetch oldest-first (`created_at.asc`) directly, on the
// reasoning that foldCardState needs to walk each card's history oldest-to-
// newest. True, but it missed what that ordering does once MAX_EVENTS_READ
// actually bites: ascending order + a fixed limit always returns the OLDEST
// slice of history, so a user who ever exceeds 5000 lifetime flashcard
// reviews would have every review after the 5000th silently invisible to
// this function, forever — their box/due-date state would freeze at
// whatever it was back then, no matter how much more revising they did.
// progress.ts's readActivity avoids exactly this by ordering `desc`, so a
// truncation there keeps the MOST RECENT history instead.
//
// The fix keeps that same "if truncated, keep the recent stuff" property —
// fetch newest-first, then reverse in JS to restore the oldest-first order
// foldCardState actually needs.
// ─────────────────────────────────────────────────────────────────────────────
async function readReviews(userId: string): Promise<ReviewRow[]> {
  if (!FLASHCARD_REVIEW_ENABLED) return [];

  const res = await supabase(
    `flashcard_reviews?user_id=eq.${encodeURIComponent(userId)}` +
      `&select=subject,topic,card_key,knew_it,created_at` +
      `&order=created_at.desc&limit=${MAX_EVENTS_READ}`,
  );

  if (!res.ok) {
    console.error(
      `[flashcard-review] could not read reviews: HTTP ${res.status}`,
      (await res.text()).slice(0, 200),
    );
    return [];
  }

  const rows = (await res.json()) as ReviewRow[];
  return rows.reverse();
}

// Folds one card's judgement HISTORY, oldest first, into its CURRENT box and
// when it's next due. A right answer climbs a box; a wrong one falls all the
// way back to box 1 — that asymmetry is the entire point of the system:
// forgetting something costs more than remembering it gains.
function foldCardState(events: ReviewRow[]): { box: number; dueAt: number } {
  let box = 1;
  let lastAt = 0;
  for (const event of events) {
    box = event.knew_it ? Math.min(box + 1, MAX_BOX) : 1;
    lastAt = new Date(event.created_at).getTime();
  }
  return { box, dueAt: lastAt + BOX_INTERVALS_MS[box] };
}

// Just the slugs, not names or titles — subjects.ts is where those live, and
// this file has nothing to do with Supabase reasons to import it. Callers
// (which already have subjects.ts available) attach the display names.
export type DueFlashcard = {
  subjectSlug: string;
  topicSlug: string;
  term: string;
  definition: string;
  box: number;
  dueAt: number;
};

// Every card this user has ever judged at least once, currently due for
// another look — soonest overdue first. A card that has never been marked
// "Got it" / "Still learning" doesn't appear here at all: spaced repetition
// only schedules cards you've actually made a judgement on, not every card
// that exists on the site.
export async function getDueFlashcards(userId: string): Promise<DueFlashcard[]> {
  const rows = await readReviews(userId);
  const now = Date.now();

  // Group by the card's own identity: which subject, which topic, which term.
  const byCard = new Map<string, ReviewRow[]>();
  for (const row of rows) {
    const key = `${row.subject}/${row.topic}/${row.card_key}`;
    const existing = byCard.get(key);
    if (existing) existing.push(row);
    else byCard.set(key, [row]);
  }

  const due: DueFlashcard[] = [];

  for (const [, events] of byCard) {
    const { box, dueAt } = foldCardState(events);
    if (dueAt > now) continue;

    const { subject, topic, card_key: term } = events[events.length - 1];

    // The definition is looked up fresh from the content files rather than
    // stored, so it's always the current wording. If the topic or the exact
    // term text has since changed, there's nothing to show any more — skip
    // it rather than show a stale or missing definition. A rare edge case,
    // not an error.
    const content = getTopicContent(subject, topic);
    const card = content?.flashcards.find((c) => c.term === term);
    if (!card) continue;

    due.push({
      subjectSlug: subject,
      topicSlug: topic,
      term,
      definition: card.definition,
      box,
      dueAt,
    });
  }

  // Most overdue first — the card that's been waiting longest is the one
  // most worth seeing again first.
  due.sort((a, b) => a.dueAt - b.dueAt);
  return due;
}
