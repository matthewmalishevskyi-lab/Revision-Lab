"use client";

// The lesson, one question at a time, filling the screen.
//
// For the teacher who does not want a file at all — they open the page on the
// classroom machine and project it. The .pptx is for planning at home; this is
// for standing at the front.
//
// ─────────────────────────────────────────────────────────────────────────────
// ACCESSIBILITY IS THE REASON MOST OF THIS CODE EXISTS
//
// Anything that covers the whole screen takes the page away from whoever was
// using it, so it has to hand it back properly. This one:
//
//   · is a real dialog — role="dialog" aria-modal, so a screen reader stops
//     announcing the page behind it rather than reading both at once;
//   · moves focus in on open and PUTS IT BACK on the button that opened it,
//     because focus left on a removed element falls to <body> and a keyboard
//     user has to tab from the top of the document again;
//   · closes on Escape, which is the one key everybody tries;
//   · keeps focus inside while open, so Tab cannot wander into the page
//     underneath and leave a sighted keyboard user with an invisible cursor;
//   · announces each question through a live region — the slide changing is a
//     visual event and otherwise a silent one;
//   · has real buttons for every key, because an interactive whiteboard has a
//     finger and no keyboard, and because "press the right arrow" is not
//     discoverable.
//
// The browser Fullscreen API is offered but never required: it rejects without
// a user gesture, some managed browsers disable it, and the overlay already
// fills the window. It is a nicety, so its failure is ignored rather than
// reported.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef, useState } from "react";
import { HigherBadge } from "../../../../components/HigherBadge";
import { MarkTariff } from "../../../../components/MarkTariff";
import type { LessonPlan, LessonPhase, LessonQuestion } from "../../../../lib/lesson-plan";

type Card =
  | { kind: "phase"; phase: LessonPhase; index: number }
  | { kind: "question"; phase: LessonPhase; q: LessonQuestion; number: number };

/** The same order the deck and the worksheet use, so all three agree. */
function cards(plan: LessonPlan): Card[] {
  const out: Card[] = [];
  let n = 0;
  plan.phases.forEach((phase, index) => {
    out.push({ kind: "phase", phase, index });
    phase.questions.forEach((q) => {
      n += 1;
      out.push({ kind: "question", phase, q, number: n });
    });
  });
  return out;
}

export function PresentMode({ plan }: { plan: LessonPlan }) {
  const [open, setOpen] = useState(false);
  const opener = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button
        ref={opener}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        className="inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
        style={{ backgroundColor: plan.accent }}
      >
        <span aria-hidden="true">▶</span>
        Present
      </button>
      {open && (
        <Overlay
          plan={plan}
          onClose={() => {
            setOpen(false);
            // Back where they were, not the top of the document.
            opener.current?.focus();
          }}
        />
      )}
    </>
  );
}

function Overlay({ plan, onClose }: { plan: LessonPlan; onClose: () => void }) {
  const deck = cards(plan);
  const [at, setAt] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const panel = useRef<HTMLDivElement>(null);

  const card = deck[at];
  const total = deck.length;

  // ⚠️ NOT WRAPPED IN useCallback, AND THE LINTER IS WHY.
  // The first version was, and this codebase's React Compiler rules refused
  // it: `react-hooks/preserve-manual-memoization`, "could not preserve
  // existing manual memoization". The compiler memoises for itself here, so a
  // hand-written useCallback is at best redundant and at worst a dependency
  // array that can drift out of step with the body above it. The keyboard
  // effect below is written not to depend on this function at all, which is
  // what actually keeps it from re-subscribing on every render.
  const go = (delta: number) => {
    setAt((i) => Math.min(total - 1, Math.max(0, i + delta)));
    // Every move hides the answer again. Leaving it revealed would mean the
    // next question arrives with its answer already showing — the worksheet
    // bug, rebuilt as a state bug.
    setRevealed(false);
  };

  useEffect(() => {
    panel.current?.focus();
  }, []);

  useEffect(() => {
    // Inlined rather than calling `go`, so this effect depends only on values
    // that genuinely change and subscribes once.
    const move = (delta: number) => {
      setAt((i) => Math.min(total - 1, Math.max(0, i + delta)));
      setRevealed(false);
    };
    function onKey(event: KeyboardEvent) {
      switch (event.key) {
        case "Escape":
          event.preventDefault();
          onClose();
          break;
        case "ArrowRight":
        case "PageDown":
          event.preventDefault();
          move(1);
          break;
        case "ArrowLeft":
        case "PageUp":
          event.preventDefault();
          move(-1);
          break;
        case " ":
        case "Enter":
          // Space reveals rather than advances. A teacher wants the answer on
          // the question they are looking at far more often than they want the
          // next one, and advancing past an unanswered question by reflex is
          // the more annoying mistake of the two.
          event.preventDefault();
          setRevealed((on) => !on);
          break;
        case "Home":
          event.preventDefault();
          setAt(0);
          setRevealed(false);
          break;
        case "End":
          event.preventDefault();
          setAt(total - 1);
          setRevealed(false);
          break;
        default:
          break;
      }
    }
    // On the window rather than the panel, so it still works after a click
    // lands on one of the buttons inside.
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, total]);

  // Keep Tab inside the overlay. Without this, tabbing past the last button
  // moves into the page underneath, which is still there and now invisible.
  useEffect(() => {
    function onTab(event: KeyboardEvent) {
      if (event.key !== "Tab" || !panel.current) return;
      const focusable = panel.current.querySelectorAll<HTMLElement>(
        'button, [href], textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;
      if (event.shiftKey && (active === first || active === panel.current)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }
    window.addEventListener("keydown", onTab);
    return () => window.removeEventListener("keydown", onTab);
  }, []);

  // The page behind must not scroll under the overlay.
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  const position =
    card.kind === "question"
      ? `Question ${card.number}, ${card.q.marks} mark${card.q.marks === 1 ? "" : "s"}`
      : card.phase.title;

  return (
    <div
      ref={panel}
      role="dialog"
      aria-modal="true"
      aria-label={`${plan.topicTitle} — presenting`}
      tabIndex={-1}
      className="fixed inset-0 z-50 flex flex-col bg-white text-black outline-none dark:bg-[#0b0d12] dark:text-white"
    >
      {/* What changed, for anyone not looking at the screen. */}
      <p role="status" aria-live="polite" className="sr-only">
        {position}
        {revealed && card.kind === "question" ? `. Answer: ${card.q.answer}` : ""}
      </p>

      <div className="flex items-center justify-between gap-4 px-6 py-4 text-sm opacity-60">
        <span>
          {plan.topicTitle} · {plan.subjectName}
        </span>
        <span className="tabular-nums">
          {at + 1} / {total}
        </span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col justify-center px-6 pb-4 sm:px-16">
        {card.kind === "phase" ? (
          <div>
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ color: plan.accent }}
            >
              Part {card.index + 1}
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">
              {card.phase.title}
            </h2>
            <p className="mt-4 max-w-3xl text-lg opacity-70 sm:text-2xl">
              {card.phase.purpose}
            </p>
            <p className="mt-6 text-sm tabular-nums opacity-50">
              {card.phase.minutes} min
              {card.phase.marks > 0 && ` · ${card.phase.marks} marks`}
            </p>
          </div>
        ) : (
          <div className="min-h-0 overflow-y-auto">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] opacity-45">
              {card.phase.title} · Q{card.number}
            </p>
            {card.q.higherOnly && (
              <p className="mt-2">
                <HigherBadge />
              </p>
            )}
            <p className="mt-4 whitespace-pre-line text-3xl font-bold leading-snug tracking-tight sm:text-5xl">
              {card.q.question}
            </p>
            <p className="mt-3 text-lg opacity-55">
              <MarkTariff marks={card.q.marks} />
            </p>

            {card.q.choices && card.q.choices.length > 0 && (
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {card.q.choices.map((choice, i) => (
                  <li
                    key={choice}
                    className="rounded-2xl border border-black/15 px-5 py-4 text-xl dark:border-white/20 sm:text-2xl"
                  >
                    <span className="mr-3 font-bold opacity-45">
                      {String.fromCharCode(65 + i)}
                    </span>
                    {choice}
                  </li>
                ))}
              </ul>
            )}

            {revealed && (
              <div
                className="mt-6 rounded-2xl px-6 py-5"
                style={{ backgroundColor: `${plan.accent}1a` }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider opacity-55">
                  {card.q.selfMarked ? "Model answer" : "Answer"}
                </p>
                <p className="mt-2 whitespace-pre-line text-xl leading-relaxed sm:text-2xl">
                  {card.q.answer}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-black/10 px-6 py-4 dark:border-white/15">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            disabled={at === 0}
            className="min-h-11 rounded-full border border-black/15 px-5 text-sm font-medium disabled:opacity-35 dark:border-white/20"
          >
            ← Back
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            disabled={at === total - 1}
            className="min-h-11 rounded-full px-6 text-sm font-semibold text-white disabled:opacity-35"
            style={{ backgroundColor: plan.accent }}
          >
            Next →
          </button>
          {card.kind === "question" && (
            <button
              type="button"
              onClick={() => setRevealed((on) => !on)}
              aria-pressed={revealed}
              className="min-h-11 rounded-full border border-black/15 px-5 text-sm font-medium dark:border-white/20"
            >
              {revealed ? "Hide answer" : "Show answer"}
            </button>
          )}
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden text-xs opacity-45 sm:inline">
            ← → to move · space for the answer · Esc to finish
          </span>
          <button
            type="button"
            onClick={onClose}
            className="min-h-11 rounded-full border border-black/15 px-5 text-sm font-medium dark:border-white/20"
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
}
