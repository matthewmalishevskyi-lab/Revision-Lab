"use client";

// The other side of spaced repetition: not browsing one topic's deck, but
// working through whatever is actually DUE right now, pulled from across
// every subject. Structurally similar to Flashcards.tsx (same flip
// mechanic) but the deck here is fixed and heterogeneous — each card can be
// from a different subject — rather than one topic's cards in original or
// shuffled order.

import { useState } from "react";
import Link from "next/link";
import { reviewFlashcard } from "../lib/flashcard-actions";

export type QueueCard = {
  subjectSlug: string;
  subjectName: string;
  subjectAccent: string;
  topicSlug: string;
  topicTitle: string;
  term: string;
  definition: string;
};

export function ReviewQueue({ cards }: { cards: QueueCard[] }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [doneCount, setDoneCount] = useState(0);

  if (index >= cards.length) {
    return (
      <div className="rounded-3xl border border-white/60 bg-white/70 p-8 text-center shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
        <p className="text-2xl font-bold">All caught up 🎉</p>
        <p className="mt-2 opacity-70">
          {doneCount} card{doneCount === 1 ? "" : "s"} reviewed. Nothing else
          is due right now — come back later.
        </p>
        <Link
          href="/dashboard"
          className="mt-5 inline-block rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Back to dashboard
        </Link>
      </div>
    );
  }

  const card = cards[index];

  function judge(knewIt: boolean) {
    void reviewFlashcard(
      card.subjectSlug,
      card.topicSlug,
      card.term,
      knewIt,
    ).catch(() => {});
    setDoneCount((n) => n + 1);
    setFlipped(false);
    setIndex((i) => i + 1);
  }

  return (
    <div>
      <p className="text-sm font-medium opacity-60">
        {index + 1} of {cards.length}
      </p>

      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        aria-live="polite"
        className="mt-3 w-full text-left"
        style={{ perspective: "1200px" }}
      >
        <div
          className="relative h-56 w-full transition-transform duration-500"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          <div
            className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-black/5 bg-white p-6 text-center shadow-sm dark:border-white/10 dark:bg-white/10"
            style={{ backfaceVisibility: "hidden" }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-wider opacity-50"
              style={{ color: card.subjectAccent }}
            >
              {card.subjectName} · {card.topicTitle}
            </p>
            <p className="mt-3 text-2xl font-semibold">{card.term}</p>
            <p className="mt-auto text-sm opacity-40">Click to reveal</p>
          </div>

          <div
            className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-50 p-6 text-center shadow-sm dark:border-white/10 dark:bg-blue-500/10"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider opacity-40">
              Definition
            </p>
            <p className="mt-3 text-lg leading-relaxed">{card.definition}</p>
          </div>
        </div>
      </button>

      {flipped ? (
        <div className="mt-3 flex gap-3">
          <button
            type="button"
            onClick={() => judge(false)}
            className="flex-1 rounded-xl border border-black/10 py-2.5 font-medium transition hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
          >
            Still learning
          </button>
          <button
            type="button"
            onClick={() => judge(true)}
            className="flex-1 rounded-xl bg-emerald-600 py-2.5 font-medium text-white transition hover:bg-emerald-700"
          >
            Got it
          </button>
        </div>
      ) : (
        <p className="mt-3 text-center text-sm opacity-50">
          Say the answer out loud before you flip.
        </p>
      )}
    </div>
  );
}
