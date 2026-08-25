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

import { useEffect, useMemo, useState } from "react";
import { Celebration } from "./Celebration";

const STREAK_MILESTONES = [3, 7, 14, 30, 50, 100, 200, 365];

type PendingCelebration = {
  /** The localStorage key this celebration is marked "seen" under. */
  storageKey: string;
  storageValue: string;
  message: string;
};

// READ-ONLY: works out which celebration (if any) is genuinely new right
// now, without writing anything. Checked in a fixed priority order,
// stopping at the first one that's genuinely new — levelling up and
// hitting a streak milestone on the same visit is possible but rare, and
// popping up two celebrations at once would read as broken rather than
// doubly exciting.
function decidePendingCelebration(input: {
  goalReached: boolean;
  streakCurrent: number;
  streakActiveToday: boolean;
  level: number;
}): PendingCelebration | null {
  const { goalReached, streakCurrent, streakActiveToday, level } = input;

  try {
    const lastSeenLevel = Number(localStorage.getItem("celebrated-level") ?? "1");
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
    if (streakActiveToday && STREAK_MILESTONES.includes(streakCurrent)) {
      const key = `celebrated-streak-${streakCurrent}`;
      if (!localStorage.getItem(key)) {
        return {
          storageKey: key,
          storageValue: "1",
          message: `${streakCurrent}-day streak! 🔥`,
        };
      }
    }

    if (goalReached) {
      // Keyed by today's date so it fires once a day, every day, rather
      // than once ever.
      const key = `celebrated-goal-${new Date().toDateString()}`;
      if (!localStorage.getItem(key)) {
        return { storageKey: key, storageValue: "1", message: "Today's goal reached!" };
      }
    }
  } catch {
    // Storage unavailable (private browsing, a locked-down browser) —
    // nothing to celebrate rather than breaking the dashboard over it.
  }

  return null;
}

function markCelebrated(pending: PendingCelebration) {
  try {
    localStorage.setItem(pending.storageKey, pending.storageValue);
  } catch {
    // Best-effort — see decidePendingCelebration above.
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
  // Recomputed only when the underlying figures actually change — not the
  // same object on every render, which matters below: comparing `pending`
  // to `dismissed` by reference is what lets a NEW celebration show again
  // after an earlier one (in the same page visit) was dismissed.
  const pending = useMemo(
    () => decidePendingCelebration({ goalReached, streakCurrent, streakActiveToday, level }),
    [goalReached, streakCurrent, streakActiveToday, level],
  );
  const [dismissed, setDismissed] = useState<PendingCelebration | null>(null);

  // The one genuine side effect here — marking a celebration "seen" is a
  // real write to an external system, so it stays in an effect. It no
  // longer calls any React state setter, though: the message itself is
  // derived above, not copied into state, so this doesn't trip
  // react-hooks/set-state-in-effect the way the combined read+write+setState
  // version above it used to.
  useEffect(() => {
    if (pending) markCelebrated(pending);
  }, [pending]);

  if (!pending || pending === dismissed) return null;
  return <Celebration message={pending.message} onDismiss={() => setDismissed(pending)} />;
}
