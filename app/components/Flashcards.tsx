"use client";

// Flashcards. Click to flip, arrows to move, shuffle to stop yourself learning
// the order instead of the content.
//
// This has to be a Client Component: it remembers which card you're on and
// whether it's flipped, and reacts to clicks. That's browser work. The rest of
// the topic page stays on the server.

import { useState } from "react";

type Card = { term: string; definition: string };

export function Flashcards({ cards }: { cards: Card[] }) {
  // `order` holds the card indexes. Shuffling rearranges THIS rather than the
  // cards themselves, so the original data is never modified. Mutating props is
  // one of the classic React bugs — the change is invisible to React, so the
  // screen and the data quietly drift apart.
  const [order, setOrder] = useState(() => cards.map((_, i) => i));
  const [position, setPosition] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = cards[order[position]];

  function go(delta: number) {
    setFlipped(false);
    // Wrapping with modulo so it loops round instead of hitting a dead end.
    // The `+ cards.length` handles going backwards from the first card, because
    // in JavaScript -1 % 23 is -1, not 22.
    setPosition((p) => (p + delta + cards.length) % cards.length);
  }

  function shuffle() {
    // Fisher-Yates: walk backwards, swapping each item with a random earlier
    // one. It's the standard shuffle because every arrangement is equally
    // likely — the obvious "sort by random" approach quietly isn't fair.
    const next = [...order];
    for (let i = next.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [next[i], next[j]] = [next[j], next[i]];
    }
    setOrder(next);
    setPosition(0);
    setFlipped(false);
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-medium opacity-60">
          Card {position + 1} of {cards.length}
        </p>
        <button
          type="button"
          onClick={shuffle}
          className="rounded-lg border border-black/10 px-3 py-1.5 text-sm font-medium transition hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
        >
          Shuffle
        </button>
      </div>

      {/* The card itself is a <button>, not a clickable <div>. That single
          choice gives us keyboard support (tab to it, space or enter to flip)
          and screen reader support for free. */}
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
          {/* Front — the term */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-black/5 bg-white p-6 text-center shadow-sm dark:border-white/10 dark:bg-white/10"
            // backfaceVisibility hidden means each face disappears when it
            // rotates away from you. Without it both sides show at once and
            // you get a mirrored mess halfway through the flip.
            style={{ backfaceVisibility: "hidden" }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider opacity-40">
              Term
            </p>
            <p className="mt-3 text-2xl font-semibold">{card.term}</p>
            <p className="mt-auto text-sm opacity-40">Click to reveal</p>
          </div>

          {/* Back — the definition, pre-rotated so it lands the right way up */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-50 p-6 text-center shadow-sm dark:border-white/10 dark:bg-blue-500/10"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider opacity-40">
              Definition
            </p>
            <p className="mt-3 text-lg leading-relaxed">{card.definition}</p>
          </div>
        </div>
      </button>

      <div className="mt-3 flex gap-3">
        <button
          type="button"
          onClick={() => go(-1)}
          className="flex-1 rounded-xl border border-black/10 py-2.5 font-medium transition hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
        >
          ← Previous
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          className="flex-1 rounded-xl bg-blue-600 py-2.5 font-medium text-white transition hover:bg-blue-700"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
