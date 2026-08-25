"use client";

// Decides WHICH celebration to show on the dashboard, if any, and renders
// nothing at all the rest of the time. Kept separate from the dashboard
// itself because the dashboard is a Server Component and this needs
// `localStorage` (to remember what's already been celebrated) and a click
// handler, both of which are browser-only.
//
// localStorage is the right tool here, not a database column: "have I
// already SEEN this celebration" is a fact about this browser, not a fact
// about the student's revision that the site needs to remember anywhere
// else. It's already the established pattern on this site — ThemeToggle
// uses it the same way, for the same kind of reason.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY THE THREE "HAVE I SEEN THIS" READS GO THROUGH useStoredRaw, FOUND IN
// THE 2026-08-25 DEEP BUG HUNT
//
// This used to read localStorage directly inside a plain `useMemo`, which
// runs during RENDER — including the server's render of this Client
// Component and the client's very first render during hydration. The server
// has no localStorage at all, so that render always saw "nothing
// celebrated yet"; the client's first render legitimately could see
// something different (a real celebration already earned), which is a
// hydration mismatch — exactly the class of bug `browserStore.ts`'s
// `useStoredRaw` exists to prevent (see its own comment for the full story;
// ThemeToggle uses the same fix). Routing these three reads through it means
// the value here is guaranteed to agree with the server on the very first
// render, then correct itself right after mount, with no effect and no
// extra `setState` call needed for the READ side at all.
//
// The WRITE (marking a celebration "seen") deliberately does NOT go through
// `writeStorageRaw` — it uses plain `localStorage.setItem` instead, in the
// private `markCelebrated` below. `writeStorageRaw` exists specifically to
// notify every OTHER `useStoredRaw` reader of the same key on the page that
// something changed; using it here would mean marking a celebration seen
// immediately triggers this component's OWN three reads to re-fetch,
// recomputing `pending` straight back to null before anyone could actually
// see the overlay it just decided to show. This component only ever needs
// to read its own past writes on a FUTURE render (a later visit, or a
// remount) — not the instant it makes them — so a plain write is correct
// here, not a shortcut.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useMemo, useState } from "react";
import { Celebration } from "./Celebration";
import { useStoredRaw } from "../lib/browserStore";

const STREAK_MILESTONES = [3, 7, 14, 30, 50, 100, 200, 365];

type PendingCelebration = {
  /** The localStorage key this celebration is marked "seen" under. */
  storageKey: string;
  storageValue: string;
  message: string;
};

function markCelebrated(pending: PendingCelebration) {
  try {
    localStorage.setItem(pending.storageKey, pending.storageValue);
  } catch {
    // Storage unavailable (private browsing, a locked-down browser) — best
    // effort, same as everywhere else this site touches localStorage.
  }
}

export function DashboardCelebrations({
  goalReached,
  streakCurrent,
  streakActiveToday,
  level,
}: {
  goalReached: boolean;
  streakCurrent: number;
  streakActiveToday: boolean;
  level: number;
}) {
  const streakKey = `celebrated-streak-${streakCurrent}`;
  // Keyed by today's date so the goal celebration fires once a day, every
  // day, rather than once ever. Recomputing this on every render is fine —
  // it only ever changes once every 24 hours, and it produces the same
  // string on the server and the client for the same real-world moment.
  const goalKey = `celebrated-goal-${new Date().toDateString()}`;

  const seenLevel = useStoredRaw("celebrated-level", null);
  const seenStreak = useStoredRaw(streakKey, null);
  const seenGoal = useStoredRaw(goalKey, null);

  // Checked in a fixed priority order, stopping at the first one that's
  // genuinely new — levelling up and hitting a streak milestone on the same
  // visit is possible but rare, and popping up two celebrations at once
  // would read as broken rather than doubly exciting. Pure, and safe to run
  // during render: everything it reads (seenLevel/seenStreak/seenGoal) has
  // already been made hydration-safe by useStoredRaw above.
  const pending = useMemo<PendingCelebration | null>(() => {
    const lastSeenLevel = Number(seenLevel ?? "1");
    if (level > lastSeenLevel) {
      return {
        storageKey: "celebrated-level",
        storageValue: String(level),
        message: `Level ${level}! 🎉`,
      };
    }

    // Only celebrate a streak milestone once today itself is active — the
    // NUMBER can already equal a milestone while `activeToday` is false
    // (yesterday's count, still standing but not yet re-earned), and
    // celebrating that would be congratulating something that hasn't
    // actually happened yet today.
    if (streakActiveToday && STREAK_MILESTONES.includes(streakCurrent) && !seenStreak) {
      return { storageKey: streakKey, storageValue: "1", message: `${streakCurrent}-day streak! 🔥` };
    }

    if (goalReached && !seenGoal) {
      return { storageKey: goalKey, storageValue: "1", message: "Today's goal reached!" };
    }

    return null;
  }, [level, seenLevel, streakActiveToday, streakCurrent, seenStreak, goalReached, seenGoal, streakKey, goalKey]);

  const [dismissed, setDismissed] = useState<PendingCelebration | null>(null);

  // The one genuine side effect here — marking a celebration "seen" is a
  // real write to an external system, so it stays in an effect. It never
  // calls a React state setter, so this doesn't trip
  // react-hooks/set-state-in-effect the way an effect that also called
  // setPending() (an earlier, since-reverted version of this fix) did.
  useEffect(() => {
    if (pending) markCelebrated(pending);
  }, [pending]);

  if (!pending || pending === dismissed) return null;
  return <Celebration message={pending.message} onDismiss={() => setDismissed(pending)} />;
}
