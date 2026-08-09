"use client";

// Counts how long you actually spend on a topic page.
//
// ─────────────────────────────────────────────────────────────────────────────
// "TIME SPENT" IS THE EASIEST STATISTIC TO GET WRONG
//
// The naive version starts a clock when the page opens and stops when it
// closes. Leave the tab open over lunch and it records an hour of revision you
// did not do — which makes the whole number worthless, because you know it is
// lying.
//
// So this counts only time that is plausibly real:
//
//   1. The tab must be VISIBLE. `document.visibilityState` tells us when you
//      switch tabs or minimise, and the clock stops.
//   2. You must have done SOMETHING recently. Any scroll, key press, click or
//      mouse move counts as being present. Five minutes of complete stillness
//      and the clock pauses until you come back.
//
// Neither is perfect — you could stare at a page thinking hard and be marked
// idle, or leave it open while active elsewhere. The aim is not a stopwatch, it
// is a number that is roughly honest and cannot be accidentally inflated by
// walking away.
//
// It reports every 30 seconds rather than at the end, because "at the end"
// never reliably happens: closing a tab does not guarantee any code runs.
// Reporting as you go means the worst case is losing the last half minute.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect } from "react";
import { recordStudyTime } from "../lib/progress-actions";

const HEARTBEAT_MS = 30_000;
const IDLE_AFTER_MS = 5 * 60_000;

export function StudyTimer({
  subject,
  topic,
}: {
  subject: string;
  topic: string;
}) {
  useEffect(() => {
    let secondsThisPeriod = 0;
    let lastTick = Date.now();
    let lastActivity = Date.now();

    const markActive = () => {
      lastActivity = Date.now();
    };

    const events = ["pointerdown", "keydown", "scroll", "mousemove"] as const;
    for (const name of events) {
      window.addEventListener(name, markActive, { passive: true });
    }

    // Runs once a second. Cheap, and being finer-grained than the heartbeat
    // means switching tabs mid-period loses at most a second rather than the
    // whole thirty.
    const tick = window.setInterval(() => {
      const now = Date.now();
      const elapsed = (now - lastTick) / 1000;
      lastTick = now;

      const visible = document.visibilityState === "visible";
      const active = now - lastActivity < IDLE_AFTER_MS;

      // A sanity cap: if the laptop was asleep, `elapsed` could be enormous.
      // Never credit more than the interval itself was meant to be.
      if (visible && active) secondsThisPeriod += Math.min(elapsed, 2);
    }, 1000);

    const send = () => {
      const seconds = Math.round(secondsThisPeriod);
      secondsThisPeriod = 0;
      if (seconds > 0) {
        // Deliberately not awaited and errors swallowed: a failed statistic
        // must never interrupt someone's revision, and there is nothing useful
        // for the page to do about it either way.
        void recordStudyTime(subject, topic, seconds).catch(() => {});
      }
    };

    const heartbeat = window.setInterval(send, HEARTBEAT_MS);

    // Leaving the page or hiding the tab flushes whatever has built up, so a
    // partial period is not lost. `visibilitychange` is the reliable one —
    // mobile browsers frequently skip unload handlers entirely.
    const onVisibility = () => {
      if (document.visibilityState === "hidden") send();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      send();
      window.clearInterval(tick);
      window.clearInterval(heartbeat);
      document.removeEventListener("visibilitychange", onVisibility);
      for (const name of events) window.removeEventListener(name, markActive);
    };
  }, [subject, topic]);

  // Nothing to draw. This component exists purely for its side effect, which is
  // a legitimate and quite common pattern — the alternative would be burying
  // this logic inside a component that also renders something, where nobody
  // would find it.
  return null;
}
