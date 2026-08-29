"use client";

import { QuizShapeIcon } from "./QuizShapeIcon";
import { QUIZ_CHOICE_STYLES } from "./quizChoiceStyles";

// One big, bold answer button — used identically on the host's shared
// screen (not clickable — the host isn't a contestant) and on every
// player's own device (clickable, until they've locked one in). Keeping it
// as ONE component rather than two similar-looking ones is what guarantees
// the host's screen and a player's screen always agree on which colour and
// shape a given choice is — the exact same reasoning clans.ts's
// `withCount` gives for building things one way in one place rather than
// two copies that could quietly drift apart.
export type QuizChoiceVariant =
  | "default" // ordinary, during the live question
  | "selected" // this is the one I (the viewer) picked, still waiting on reveal
  | "correctReveal" // reveal phase: this IS the right answer
  | "wrongPickedReveal" // reveal phase: I picked this, and it was wrong
  | "fadedReveal"; // reveal phase: neither correct nor what I picked

export function QuizChoiceButton({
  index,
  text,
  variant,
  tally,
  tallyFraction,
  onClick,
  disabled,
}: {
  index: number;
  text: string;
  variant: QuizChoiceVariant;
  // Shown during reveal — how many players picked this one. Undefined
  // before reveal, since showing a running tally mid-question would let a
  // slow answerer just copy whichever button already has the most taps.
  tally?: number;
  // Same reveal-only timing as `tally` — this one, as a 0–1 share of
  // everyone who answered, is what actually draws the fill bar behind the
  // choice. Kept as a separate prop rather than computed in here from
  // `tally` alone because this component has no idea how many people
  // answered in total — only the caller (HostQuizScreen, which already has
  // the full tally array) can work that out.
  tallyFraction?: number;
  onClick?: () => void;
  disabled?: boolean;
}) {
  const style = QUIZ_CHOICE_STYLES[index % QUIZ_CHOICE_STYLES.length];

  const faded = variant === "fadedReveal";
  const wrongPicked = variant === "wrongPickedReveal";
  const correct = variant === "correctReveal";
  const selected = variant === "selected";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || !onClick}
      className={[
        // rounded-[1.75rem] rather than the site's usual rounded-2xl —
        // slightly softer than Kahoot's own sharper-cornered rectangles,
        // to go with the new colours and shapes rather than just the old
        // buttons with a fresh coat of paint.
        // overflow-hidden clips the fill bar below to this same rounded
        // shape — without it the bar's square corners would poke out past
        // the button's own rounded ones.
        "group relative flex w-full items-center gap-4 overflow-hidden rounded-[1.75rem] px-5 py-6 text-left text-lg font-bold text-white shadow-lg ring-1 ring-inset ring-white/15 transition sm:text-xl",
        onClick && !disabled ? "hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0" : "",
        correct ? "scale-[1.02] ring-4 ring-white" : "",
        selected ? "ring-4 ring-white" : "",
        faded ? "opacity-30 grayscale" : "",
        wrongPicked ? "opacity-70" : "",
      ].join(" ")}
      style={{ backgroundColor: style.bg }}
    >
      {/* How many of everyone's answers landed here, drawn as a fill
          rather than only a number — reads at a glance even from across a
          classroom, the way the numeric badge alone doesn't. Sits BEHIND
          everything else (no z-index of its own, painted first) with a
          transition on its width so it grows into place rather than
          snapping — a small touch, but this is the one moment the room
          actually watches the screen rather than their own device. */}
      {typeof tallyFraction === "number" && (
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 bg-white/20 transition-[width] duration-700 ease-out"
          style={{ width: `${Math.round(tallyFraction * 100)}%` }}
        />
      )}

      {/* The icon sits inside its own translucent "coin" rather than bare
          on the button colour — a deliberate difference from Kahoot's flat
          icon-on-solid look, and it reads clearly against every one of the
          six background colours without needing a per-colour tweak.
          `relative` here (and on every other visible child below) is what
          keeps them painted above the fill bar, which has no z-index of
          its own to fight over — plain stacking order does the job. */}
      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/20">
        <QuizShapeIcon shape={style.shape} className="h-6 w-6 sm:h-[1.6rem] sm:w-[1.6rem]" />
      </span>
      <span className="relative min-w-0 flex-1 break-words">{text}</span>

      {correct && (
        <span
          aria-hidden="true"
          className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-xl font-black text-green-600"
        >
          ✓
        </span>
      )}
      {wrongPicked && (
        <span
          aria-hidden="true"
          className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-xl font-black text-red-600"
        >
          ✕
        </span>
      )}
      {typeof tally === "number" && (
        <span className="relative shrink-0 rounded-full bg-black/20 px-3 py-1 text-base font-semibold tabular-nums">
          {tally}
        </span>
      )}
    </button>
  );
}
