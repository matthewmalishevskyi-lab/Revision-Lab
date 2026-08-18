import Link from "next/link";
import { FlameIcon } from "./FlameIcon";
import type { Progress } from "../lib/progress";

// The first thing a logged-in visitor sees on the homepage — replaces the
// plain "Welcome back" box on purpose. Matthew's ask: the streak already
// existed on the dashboard, but a stat nobody sees on their way in doesn't do
// its job. A habit nudge only works if it's the first thing in view, every
// single time the site loads, which for most people is the homepage — not a
// second page they have to remember to click into.
//
// The other half of the ask was to give the streak real stakes: when today
// hasn't been touched yet and there's a streak to lose, this card says so
// plainly and switches to an amber warning colour, rather than staying the
// same friendly neutral card it is the rest of the time. Losing a streak you
// never noticed you had doesn't motivate anyone; losing one you were just
// told about does.
export function StreakSpotlight({
  userName,
  streak,
  today,
  nextUp,
}: {
  userName: string;
  streak: Progress["streak"];
  today: Progress["today"];
  nextUp: Progress["nextUp"];
}) {
  // "At risk" means there IS something to lose (a real streak) and nothing
  // has been done yet today to keep it — the exact moment a warning is
  // useful. A brand-new streak of 0 isn't "at risk", it just hasn't started;
  // that gets an invitation instead of a warning.
  const atRisk = streak.current > 0 && !streak.activeToday;
  const goalReached = today.count >= today.goal;

  const headline =
    streak.current === 0
      ? "Start your streak today"
      : atRisk
        ? `Don't lose your ${streak.current}-day streak!`
        : `${streak.current} day${streak.current === 1 ? "" : "s"} in a row — you're on a roll`;

  const sub =
    streak.current === 0
      ? "Answer a few questions or flip some flashcards to light it up."
      : atRisk
        ? "Nothing recorded yet today — revise something before the day ends, or it resets to zero."
        : "Come back tomorrow to keep it climbing.";

  return (
    <section
      className={`mx-auto mt-8 max-w-3xl overflow-hidden rounded-3xl border p-8 text-center shadow-[0_20px_50px_-30px_rgba(22,24,43,0.5)] backdrop-blur-sm sm:p-10 ${
        atRisk
          ? "border-amber-500/50 bg-amber-500/10 dark:border-amber-400/30 dark:bg-amber-400/10"
          : "border-white/60 bg-white/55 dark:border-white/10 dark:bg-white/5"
      }`}
    >
      <p className="text-lg opacity-70">Welcome back, {userName}</p>

      <div className="mt-3 flex items-center justify-center gap-4">
        <FlameIcon
          className={
            streak.current > 0
              ? "h-16 w-16 shrink-0 text-amber-500 dark:text-amber-400"
              : "h-16 w-16 shrink-0 opacity-30"
          }
        />
        <p className="text-7xl font-bold tabular-nums sm:text-8xl">
          {streak.current}
        </p>
      </div>

      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        {headline}
      </h1>
      <p className="mt-2 text-lg opacity-70">{sub}</p>

      {/* Only mentioned when it actually applied this run — see
          computeStreak's comment in lib/progress.ts for why a freeze is
          never spent for nothing. */}
      {streak.usedFreeze && (
        <p className="mt-2 text-sm opacity-50">
          🧊 A streak freeze covered a missed day this week
        </p>
      )}

      {/* Today's goal sits right under the streak, not off on its own — the
          streak is what you have; the goal is the one concrete thing that
          keeps it, so the card that raises the stakes is also the card that
          says exactly what to do about it. */}
      <div className="mx-auto mt-6 max-w-sm text-left">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium">Today&apos;s goal</span>
          <span className="opacity-60 tabular-nums">
            {Math.min(today.count, today.goal)}/{today.goal}
          </span>
        </div>
        <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
          <div
            className="h-full rounded-full bg-emerald-500 transition-all"
            style={{
              width: `${Math.min(100, (today.count / today.goal) * 100)}%`,
            }}
          />
        </div>
      </div>

      <Link
        href={
          nextUp
            ? `/subjects/${nextUp.subjectSlug}/${nextUp.topicSlug}`
            : "/dashboard"
        }
        className={`mt-7 inline-block rounded-xl px-7 py-3 text-base font-semibold text-white transition hover:opacity-90 ${
          atRisk ? "bg-amber-600" : "bg-blue-600"
        }`}
      >
        {atRisk
          ? "Save your streak →"
          : goalReached
            ? "Keep exploring →"
            : "Keep it going →"}
      </Link>
    </section>
  );
}
