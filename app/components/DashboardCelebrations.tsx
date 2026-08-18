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

import { useEffect, useState } from "react";
import { Celebration } from "./Celebration";

const STREAK_MILESTONES = [3, 7, 14, 30, 50, 100, 200, 365];

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
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    // Checked in a fixed priority order, stopping at the first one that's
    // genuinely new. Levelling up and hitting a streak milestone on the same
    // visit is possible but rare, and popping up two celebrations at once
    // would read as broken rather than doubly exciting.
    try {
      const lastSeenLevel = Number(localStorage.getItem("celebrated-level") ?? "1");
      if (level > lastSeenLevel) {
        localStorage.setItem("celebrated-level", String(level));
        setMessage(`Level ${level}! 🎉`);
        return;
      }

      // Only celebrate a streak milestone once today itself is active — the
      // NUMBER can already equal a milestone while `activeToday` is false
      // (yesterday's count, still standing but not yet re-earned), and
      // celebrating that would be congratulating something that hasn't
      // actually happened yet today.
      if (streakActiveToday && STREAK_MILESTONES.includes(streakCurrent)) {
        const key = `celebrated-streak-${streakCurrent}`;
        if (!localStorage.getItem(key)) {
          localStorage.setItem(key, "1");
          setMessage(`${streakCurrent}-day streak! 🔥`);
          return;
        }
      }

      if (goalReached) {
        // Keyed by today's date so it fires once a day, every day, rather
        // than once ever.
        const key = `celebrated-goal-${new Date().toDateString()}`;
        if (!localStorage.getItem(key)) {
          localStorage.setItem(key, "1");
          setMessage("Today's goal reached!");
          return;
        }
      }
    } catch {
      // Storage unavailable (private browsing, a locked-down browser) —
      // just skip celebrating rather than breaking the dashboard over it.
    }
  }, [goalReached, streakCurrent, streakActiveToday, level]);

  if (!message) return null;
  return <Celebration message={message} onDismiss={() => setMessage(null)} />;
}
