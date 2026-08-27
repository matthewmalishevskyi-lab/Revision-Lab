"use client";

import { useState } from "react";

// The "huge, noisy, like Kahoot" finish — a heavier confetti fall than
// Celebration.tsx's own 24 pieces (this is the one moment on the whole
// site actually asked to feel over the top), reusing the exact same
// `animate-celebration-fall` keyframe from globals.css rather than
// inventing a second way of animating confetti. That reuse is also what
// makes this automatically respect `prefers-reduced-motion` and the
// accessibility page's own reduced-motion toggle for free — both already
// hide anything using that class.
const CONFETTI_COLOURS = [
  "#f59e0b",
  "#10b981",
  "#3b82f6",
  "#ec4899",
  "#8b5cf6",
  "#ef4444",
  "#eab308",
];

export function QuizConfetti() {
  // State, not a plain variable, computed once — see Celebration.tsx's own
  // comment: this is a Client Component only ever rendered in the browser,
  // so there's no server-rendered HTML for a random value to mismatch.
  const [pieces] = useState(() =>
    Array.from({ length: 70 }, (_, i) => ({
      left: Math.random() * 100,
      delay: Math.random() * 0.8,
      duration: 1.8 + Math.random() * 1.6,
      colour: CONFETTI_COLOURS[i % CONFETTI_COLOURS.length],
      size: 6 + Math.random() * 6,
    })),
  );

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {pieces.map((piece, index) => (
        <span
          key={index}
          className="animate-celebration-fall absolute top-0 rounded-sm"
          style={{
            left: `${piece.left}%`,
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.colour,
            animationDuration: `${piece.duration}s`,
            animationDelay: `${piece.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
