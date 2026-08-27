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
        "group relative flex w-full items-center gap-4 rounded-2xl px-5 py-6 text-left text-lg font-bold text-white shadow-lg transition sm:text-xl",
        onClick && !disabled ? "hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0" : "",
        correct ? "scale-[1.02] ring-4 ring-white" : "",
        selected ? "ring-4 ring-white" : "",
        faded ? "opacity-30 grayscale" : "",
        wrongPicked ? "opacity-70" : "",
      ].join(" ")}
      style={{ backgroundColor: style.bg }}
    >
      <QuizShapeIcon shape={style.shape} className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" />
      <span className="min-w-0 flex-1 break-words">{text}</span>

      {correct && (
        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-xl font-black text-green-600"
        >
          ✓
        </span>
      )}
      {wrongPicked && (
        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-xl font-black text-red-600"
        >
          ✕
        </span>
      )}
      {typeof tally === "number" && (
        <span className="shrink-0 rounded-full bg-black/20 px-3 py-1 text-base font-semibold tabular-nums">
          {tally}
        </span>
      )}
    </button>
  );
}
