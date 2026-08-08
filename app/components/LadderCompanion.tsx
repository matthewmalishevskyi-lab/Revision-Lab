"use client";

// A ladder down the side of the page, with the subject's mascot climbing it to
// follow your mouse.
//
// ─────────────────────────────────────────────────────────────────────────────
// THE PERFORMANCE LESSON IN THIS FILE
//
// The obvious way to write this is to store the mouse position in state:
//
//     const [y, setY] = useState(0);
//     onMouseMove = (e) => setY(e.clientY);
//
// It works, and it is a genuinely bad idea. A mouse fires movement events
// extremely often — easily 100+ times a second. Every setState re-runs the
// component and makes React reconcile the tree, so you'd be doing a hundred
// renders a second to move one picture. On a cheap laptop the page would
// stutter, and it would flatten a phone battery.
//
// Instead:
//   - the mouse position is kept in a plain variable, not state, so nothing
//     re-renders when it changes;
//   - the mascot is moved by writing to `element.style.transform` directly;
//   - the writing happens inside requestAnimationFrame, which runs once per
//     screen refresh (about 60 times a second) no matter how many events fired.
//
// So React renders this component ONCE and never again. The rule worth
// remembering: state is for things the user should see change; a value you're
// animating 60 times a second is not that.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef } from "react";
import { MASCOTS } from "./Mascots";

export function LadderCompanion({
  mascot,
  colour,
}: {
  mascot: keyof typeof MASCOTS;
  colour: string;
}) {
  const Mascot = MASCOTS[mascot];
  const climberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const climber = climberRef.current;
    if (!climber) return;

    // Some people get motion sickness from movement on screen, and their
    // operating system already knows that. Park the mascot and do nothing else.
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const restingPoint = () => window.innerHeight / 2;

    if (reduceMotion) {
      climber.style.transform = `translate(-50%, ${restingPoint()}px)`;
      return;
    }

    let target = restingPoint(); // where the mouse is
    let current = target; // where the mascot actually is
    let frame = 0;

    // `passive: true` promises we won't call preventDefault, which lets the
    // browser skip a check and keeps scrolling smooth.
    const handleMove = (event: MouseEvent) => {
      target = event.clientY;
    };
    window.addEventListener("mousemove", handleMove, { passive: true });

    const tick = () => {
      const previous = current;

      // EASING. Rather than jumping straight to the mouse, move a fraction of
      // the remaining distance each frame. That produces a smooth chase that
      // slows as it arrives — and it's one line. A smaller number is lazier.
      current += (target - current) * 0.07;

      const speed = current - previous;

      // Keep the mascot on the ladder rather than sliding off either end.
      const top = 56;
      const bottom = window.innerHeight - 130;
      const y = Math.min(Math.max(current, top), bottom);

      // Lean into the direction of travel, capped so it never looks silly.
      const lean = Math.max(-7, Math.min(7, speed * 0.9));

      // Sway side to side as it moves, tied to POSITION rather than time, so
      // the sway stops the instant it stops climbing. This is the bit that
      // makes it read as climbing rather than gliding.
      const effort = Math.min(1, Math.abs(speed) / 2.5);
      const sway = Math.sin(current / 13) * effort * 4;

      climber.style.transform = `translate(calc(-50% + ${sway}px), ${y}px) rotate(${lean}deg)`;

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    // CLEANUP — the most commonly forgotten part of useEffect. Without this,
    // every visit to a topic page would leave another listener and another
    // animation loop running forever. That's a memory leak, and it's exactly
    // how pages get slower the longer you use them.
    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      // pointer-events-none so it can never intercept a click meant for the
      // page. Hidden below xl because there's no room beside the content, and
      // no mouse to follow on a touchscreen anyway.
      className="pointer-events-none fixed left-4 top-0 z-10 hidden h-screen w-24 xl:block"
    >
      {/* The two rails */}
      <div
        className="absolute inset-y-10 left-4 w-[5px] rounded-full opacity-25"
        style={{ backgroundColor: colour }}
      />
      <div
        className="absolute inset-y-10 right-4 w-[5px] rounded-full opacity-25"
        style={{ backgroundColor: colour }}
      />

      {/* The rungs. A repeating gradient rather than dozens of divs: one CSS
          rule draws a rung every 44 pixels, however tall the screen is. */}
      <div
        className="absolute inset-y-10 left-4 right-4 opacity-25"
        style={{
          backgroundImage: `repeating-linear-gradient(to bottom, ${colour} 0 5px, transparent 5px 44px)`,
        }}
      />

      {/* The climber */}
      <div
        ref={climberRef}
        className="absolute left-1/2 top-0 w-[74px] will-change-transform"
        style={{ transform: "translate(-50%, 50vh)" }}
      >
        <Mascot className="w-full drop-shadow-[0_6px_10px_rgba(0,0,0,0.25)]" />
      </div>
    </div>
  );
}
