"use client";

// A small congratulations moment: Pixel, a burst of confetti, one line of
// text. Used for hitting the daily goal, a streak milestone, and levelling
// up — see DashboardCelebrations.tsx for when each of those actually fires.
//
// Pixel specifically, for every celebration on the whole site, regardless of
// which subject or mascot the moment came from — Matthew's own call: Pixel
// was the very first mascot design and the one the whole visual style grew
// out of, so it's Pixel's job to show up when something's worth celebrating,
// the same way a mascot appears at the final screen of a game regardless of
// which level you were playing.
//
// Pixel shows up wearing whatever outfit is currently equipped in the
// wardrobe (see PixelOutfits.tsx and /wardrobe) — read from localStorage on
// mount, same as the theme toggle. This is the whole payoff of unlocking an
// outfit at all: it's not a gallery you have to go looking at, it's what
// Pixel is wearing the next time there's something worth celebrating.
//
// The confetti keyframe lives in globals.css (`animate-celebration-fall`),
// following the same pattern as the walk-cycle and bob animations already
// there, rather than introducing a different way of writing CSS animations
// just for this one component.

import { useEffect, useState } from "react";
import { useStoredRaw } from "../lib/browserStore";
import { EQUIPPED_OUTFIT_KEY, PixelWithOutfit, type OutfitId } from "./PixelOutfits";

const CONFETTI_COLOURS = [
  "#f59e0b",
  "#10b981",
  "#3b82f6",
  "#ec4899",
  "#8b5cf6",
  "#ef4444",
];

export function Celebration({
  message,
  onDismiss,
}: {
  message: string;
  onDismiss: () => void;
}) {
  // Computed once, in state rather than plain variables, so re-renders (the
  // dismiss timer firing, for instance) don't reshuffle the confetti mid-fall.
  // Safe to use Math.random() here at all: this is a Client Component that
  // only ever exists in the browser, so there's no server-rendered HTML for
  // a random value to mismatch against.
  const [pieces] = useState(() =>
    Array.from({ length: 24 }, (_, i) => ({
      left: Math.random() * 100,
      delay: Math.random() * 0.4,
      duration: 1.6 + Math.random() * 1,
      colour: CONFETTI_COLOURS[i % CONFETTI_COLOURS.length],
    })),
  );

  // Reactive to localStorage via lib/browserStore.ts — localStorage doesn't
  // exist during server rendering, so this renders "none" (Classic Pixel)
  // on the server and the client's first paint, then corrects itself the
  // moment React can see the real value, with no effect involved.
  const stored = useStoredRaw(EQUIPPED_OUTFIT_KEY, null);
  const outfit = (stored as OutfitId | null) ?? "none";

  // Dismisses itself after a few seconds so nobody has to click anything —
  // but clicking anywhere works too, for the one time in five it fires while
  // someone's trying to actually do something else.
  useEffect(() => {
    const timer = setTimeout(onDismiss, 4000);
    return () => clearTimeout(timer);
  }, [onDismiss]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4 backdrop-blur-sm"
      onClick={onDismiss}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {pieces.map((piece, index) => (
          <span
            key={index}
            className="animate-celebration-fall absolute top-0 h-2.5 w-2.5 rounded-sm"
            style={{
              left: `${piece.left}%`,
              backgroundColor: piece.colour,
              animationDuration: `${piece.duration}s`,
              animationDelay: `${piece.delay}s`,
            }}
          />
        ))}
      </div>

      <div
        role="status"
        onClick={(event) => event.stopPropagation()}
        className="relative flex flex-col items-center rounded-3xl bg-white px-8 py-8 text-center shadow-2xl dark:bg-neutral-900"
      >
        <PixelWithOutfit outfit={outfit} className="h-24 animate-bob" />
        <p className="mt-4 text-xl font-bold">{message}</p>
        <button
          type="button"
          onClick={onDismiss}
          className="mt-4 rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Nice!
        </button>
      </div>
    </div>
  );
}
