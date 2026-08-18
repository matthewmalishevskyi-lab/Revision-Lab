"use client";

// A Pomodoro-style timer: 25 minutes of focus, then a 5-minute break,
// repeating for as long as someone keeps it running.
//
// ─────────────────────────────────────────────────────────────────────────────
// THIS DOES NOT RECORD STUDY TIME — StudyTimer already does, silently
//
// StudyTimer (see that file) sits on every topic page for a logged-in
// visitor and already tracks every second it's visible and being used,
// independently of whether this timer is running at all. Recording time
// again from here would double-count exactly the same minutes. This
// component's only job is to give focused revising some STRUCTURE — a
// countdown, a clear "focus" vs "break" phase, a chime when one ends — the
// way a physical timer on a desk would. The actual bookkeeping stays where
// it already lived.
//
// Shown to every visitor, not just logged-in ones — unlike StudyTimer, using
// this needs no account and records nothing, so there's no reason to gate it.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useState } from "react";

const FOCUS_MINUTES = 25;
const BREAK_MINUTES = 5;

type Phase = "focus" | "break";

// A short two-note chime built with the Web Audio API rather than shipping
// an audio file — no asset to load, and it's ready the instant the page is.
// Wrapped in try/catch: some browsers refuse to make sound before a person
// has interacted with the page at all, and a missed chime should never be an
// error that breaks the timer itself.
function chime() {
  try {
    const AudioCtx =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const now = ctx.currentTime;

    [523.25, 659.25].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.value = freq;
      osc.connect(gain);
      gain.connect(ctx.destination);

      const start = now + i * 0.18;
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(0.2, start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.3);
      osc.start(start);
      osc.stop(start + 0.32);
    });
  } catch {
    // Nothing useful to do if the browser won't play audio — the phase still
    // changes visually either way.
  }
}

function formatClock(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

export function FocusTimer({ colour }: { colour: string }) {
  const [phase, setPhase] = useState<Phase>("focus");
  const [secondsLeft, setSecondsLeft] = useState(FOCUS_MINUTES * 60);
  const [running, setRunning] = useState(false);
  const [sessionsCompleted, setSessionsCompleted] = useState(0);

  useEffect(() => {
    if (!running) return;

    const interval = window.setInterval(() => {
      setSecondsLeft((current) => {
        if (current > 1) return current - 1;

        // A phase just ended. Chime, count a completed focus block, and
        // flip straight into the other phase rather than stopping — the
        // whole point of a Pomodoro timer is not having to keep deciding
        // when the break is over.
        chime();
        if (phase === "focus") {
          setSessionsCompleted((n) => n + 1);
          setPhase("break");
          return BREAK_MINUTES * 60;
        }
        setPhase("focus");
        return FOCUS_MINUTES * 60;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [running, phase]);

  function reset() {
    setRunning(false);
    setPhase("focus");
    setSecondsLeft(FOCUS_MINUTES * 60);
  }

  const atStart = phase === "focus" && secondsLeft === FOCUS_MINUTES * 60;

  return (
    <section className="mt-6 rounded-2xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider opacity-60">
            {phase === "focus" ? "Focus" : "Break"}
            {sessionsCompleted > 0 && (
              <span className="ml-2 font-normal opacity-60">
                · {sessionsCompleted} session
                {sessionsCompleted === 1 ? "" : "s"} done
              </span>
            )}
          </p>
          <p className="text-5xl font-bold tabular-nums" style={{ color: colour }}>
            {formatClock(secondsLeft)}
          </p>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setRunning((r) => !r)}
            className="rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            style={{ backgroundColor: colour }}
          >
            {running ? "Pause" : atStart ? "Start" : "Resume"}
          </button>
          <button
            type="button"
            onClick={reset}
            className="rounded-xl border border-black/10 px-5 py-2.5 text-sm font-semibold transition hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
          >
            Reset
          </button>
        </div>
      </div>

      <p className="mt-3 text-sm opacity-60">
        {phase === "focus"
          ? `${FOCUS_MINUTES} minutes of focused revising, then a ${BREAK_MINUTES}-minute break.`
          : "Step away from the screen — back to focus once this runs out."}
      </p>
    </section>
  );
}
