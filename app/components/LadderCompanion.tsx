"use client";

// A ladder running the FULL HEIGHT OF THE PAGE, with the subject's mascot
// climbing it rung by rung to follow you.
//
// It tracks both your mouse AND your scrolling, because those are the same
// thing once you think in page coordinates rather than screen coordinates:
//
//     position on the page = mouse position on screen + how far you've scrolled
//
// So we remember where the mouse last was on screen, and recompute the page
// position whenever EITHER the mouse moves or the page scrolls. Scroll down
// without touching the mouse and the mascot still climbs, because the same
// point on screen is now further down the page.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY IT MOVES ONE RUNG AT A TIME
//
// Gliding smoothly to the mouse looks like floating, not climbing. Real
// climbing is discrete: you reach the next rung, then the next. So the mascot
// snaps to rung positions and takes a fixed time per rung, which also caps how
// fast it can possibly travel — that's what makes it feel deliberate rather
// than frantic. Each step leans the opposite way to the last, as though
// reaching with alternate hands, and lifts slightly in the middle of the step.
//
// PERFORMANCE NOTE: the mouse position is deliberately NOT React state. A mouse
// fires 100+ events a second; calling setState on each would re-render this
// component 100 times a second to move one picture. Instead the values live in
// plain variables and the mascot is moved by writing `style.transform` inside
// requestAnimationFrame, which runs once per screen refresh. React renders this
// component once and never again.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef } from "react";
import { MASCOTS } from "./Mascots";

// Distance between rungs, in pixels. The mascot can only ever stop on one of
// these, and the same number draws the rungs in CSS below — one source of
// truth, so the mascot can never end up standing between two rungs.
const RUNG_SPACING = 46;

// How long a single rung takes. Bigger = slower, more deliberate.
const MS_PER_RUNG = 340;

// Gap between the top of the ladder and the top of the page.
const LADDER_INSET = 48;

export function LadderCompanion({
  mascot,
  colour,
}: {
  mascot: keyof typeof MASCOTS;
  colour: string;
}) {
  const Mascot = MASCOTS[mascot];
  const railsRef = useRef<HTMLDivElement>(null);
  const climberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rails = railsRef.current;
    const climber = climberRef.current;
    if (!rails || !climber) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const yForRung = (rung: number) => LADDER_INSET + rung * RUNG_SPACING;

    if (reduceMotion) {
      climber.style.transform = `translate(-50%, ${yForRung(1)}px)`;
      return;
    }

    // The highest rung that still leaves the mascot fully on the ladder.
    const lastRung = () =>
      Math.max(
        0,
        Math.floor(
          (rails.offsetHeight - LADDER_INSET * 2 - 90) / RUNG_SPACING,
        ),
      );

    let lastPointerY = window.innerHeight / 2; // where the mouse is ON SCREEN
    let targetRung = 1;
    let currentRung = 1;

    // Step animation state.
    let stepStartedAt = 0;
    let stepping = false;
    let stepFrom = currentRung;
    let stepTo = currentRung;
    let handedness = 1; // flips each step, so it alternates hands

    const recalculateTarget = () => {
      // Screen position + scroll = position on the page. This one line is what
      // makes the mascot respond to scrolling and to the mouse.
      const pageY = lastPointerY + window.scrollY;

      const raw = (pageY - LADDER_INSET) / RUNG_SPACING;
      targetRung = Math.min(Math.max(Math.round(raw), 0), lastRung());
    };

    const handlePointer = (event: MouseEvent) => {
      lastPointerY = event.clientY;
      recalculateTarget();
    };

    // `passive: true` promises we won't call preventDefault, which lets the
    // browser scroll without waiting to find out.
    window.addEventListener("mousemove", handlePointer, { passive: true });
    window.addEventListener("scroll", recalculateTarget, { passive: true });
    window.addEventListener("resize", recalculateTarget);
    recalculateTarget();
    currentRung = targetRung;

    const tick = (now: number) => {
      if (!stepping && currentRung !== targetRung) {
        // Begin a new step — exactly ONE rung towards the target, never more.
        stepping = true;
        stepStartedAt = now;
        stepFrom = currentRung;
        stepTo = currentRung + (targetRung > currentRung ? 1 : -1);
        handedness *= -1;
      }

      let y = yForRung(currentRung);
      let lean = 0;
      let sway = 0;

      if (stepping) {
        const progress = Math.min(1, (now - stepStartedAt) / MS_PER_RUNG);

        // Ease in and out, so each step starts and finishes gently instead of
        // moving at a constant machine-like speed.
        const eased =
          progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        y = yForRung(stepFrom) + (yForRung(stepTo) - yForRung(stepFrom)) * eased;

        // A single arc that rises and falls over the step: 0 → 1 → 0.
        const arc = Math.sin(progress * Math.PI);
        lean = arc * 7 * handedness;
        sway = arc * 5 * handedness;

        if (progress >= 1) {
          stepping = false;
          currentRung = stepTo;
          y = yForRung(currentRung);
        }
      }

      climber.style.transform = `translate(calc(-50% + ${sway}px), ${y}px) rotate(${lean}deg)`;
      frame = requestAnimationFrame(tick);
    };

    let frame = requestAnimationFrame(tick);

    // CLEANUP — the most commonly forgotten part of useEffect. Without it,
    // every visit to a topic page would leave another set of listeners and
    // another animation loop running forever. That's a memory leak, and it's
    // exactly how pages get slower the longer you use them.
    return () => {
      window.removeEventListener("mousemove", handlePointer);
      window.removeEventListener("scroll", recalculateTarget);
      window.removeEventListener("resize", recalculateTarget);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      // `absolute` rather than `fixed`, so the ladder is as tall as the whole
      // page and scrolls with it. `fixed` would pin it to the screen, which is
      // what it did before.
      // `inset-y-0` pins it to both the top AND bottom of the wrapper, which is
      // a more reliable way to say "as tall as the page" than a percentage
      // height — percentages need the parent to have a definite height, and
      // this one is however tall the content happens to be.
      className="pointer-events-none absolute inset-y-0 left-4 z-10 hidden w-24 xl:block"
    >
      <div ref={railsRef} className="absolute inset-0">
        {/* The two rails */}
        <div
          className="absolute left-4 w-[6px] rounded-full opacity-40"
          style={{
            backgroundColor: colour,
            top: LADDER_INSET,
            bottom: LADDER_INSET,
          }}
        />
        <div
          className="absolute right-4 w-[6px] rounded-full opacity-40"
          style={{
            backgroundColor: colour,
            top: LADDER_INSET,
            bottom: LADDER_INSET,
          }}
        />

        {/* The rungs. A repeating gradient rather than hundreds of divs: one
            CSS rule draws a rung every RUNG_SPACING pixels, however long the
            page is. The spacing comes from the same constant the climbing maths
            uses, so the mascot always lands exactly on a rung. */}
        <div
          className="absolute left-4 right-4 opacity-40"
          style={{
            top: LADDER_INSET,
            bottom: LADDER_INSET,
            backgroundImage: `repeating-linear-gradient(to bottom, ${colour} 0 5px, transparent 5px ${RUNG_SPACING}px)`,
          }}
        />

        {/* The climber */}
        <div
          ref={climberRef}
          className="absolute left-1/2 top-0 w-[74px] will-change-transform"
          style={{ transform: "translate(-50%, 48px)" }}
        >
          <Mascot className="w-full drop-shadow-[0_6px_10px_rgba(0,0,0,0.25)]" />
        </div>
      </div>
    </div>
  );
}
