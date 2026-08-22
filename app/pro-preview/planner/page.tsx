import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { SiteHeader } from "../../components/SiteHeader";
import { PlannerNotes } from "../../components/PlannerNotes";
import { getViewer } from "../../lib/viewer";
import { getMonthlyActivity } from "../../lib/progress";
import { PRO_PREVIEW_ENABLED } from "../../lib/site";

// PREVIEW ONLY — see app/lib/site.ts, PRO_PREVIEW_ENABLED, for why this
// 404s on the live site. This is the "actual planner where you can see
// your actions for the last four weeks, and plan ahead" Matthew asked for
// (see PROJECT_NOTES.md, "Pro-subscription plan"). Two genuinely different
// halves on one page: a look-BACK calendar built from real activity rows
// (getMonthlyActivity, added to progress.ts for this), and a look-FORWARD
// list of plain text notes (PlannerNotes.tsx) that — for now — only lives
// in the browser. See that file's comment for why, and what shipping this
// for real would need to change.

export const metadata: Metadata = {
  title: "Planner",
  robots: { index: false, follow: false },
};

const DAY_LETTERS = ["M", "T", "W", "T", "F", "S", "S"];

export default async function PlannerPage() {
  if (!PRO_PREVIEW_ENABLED) notFound();

  const user = await getViewer();
  if (!user) redirect("/login");

  const days = await getMonthlyActivity(user.id);

  // getMonthlyActivity always returns exactly 28 days ending today, but it
  // doesn't know or care which weekday the run starts on — pad the front of
  // the grid with blank cells so day 1 lines up under its real weekday
  // column instead of always starting in the Monday slot.
  const firstWeekday = new Date(`${days[0].date}T12:00:00Z`).getUTCDay(); // 0 = Sunday
  const leadingBlanks = (firstWeekday + 6) % 7; // Monday-first grid

  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-8">
      <SiteHeader greeting={false} />

      <div className="mt-8 rounded-2xl border border-amber-500/40 bg-amber-500/10 px-5 py-3 text-sm">
        <strong>Preview build.</strong> Not reachable on the live site yet —
        see app/lib/site.ts, PRO_PREVIEW_ENABLED.
      </div>

      <h1 className="mt-6 text-4xl font-bold tracking-tight">Planner</h1>
      <p className="mt-3 text-lg opacity-70">
        The last four weeks, and what&apos;s coming up.
      </p>

      <section className="mt-8 rounded-2xl border border-white/60 bg-white/60 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
        <h2 className="text-xl font-semibold">Last 4 weeks</h2>
        <p className="mt-1 text-sm opacity-60">
          Darker means more revised that day — practice questions, flashcards
          and time, all counted together.
        </p>

        <div className="mt-4 grid grid-cols-7 gap-1.5 text-center text-xs">
          {DAY_LETTERS.map((letter, i) => (
            <div key={i} className="pb-1 font-semibold opacity-50">
              {letter}
            </div>
          ))}

          {Array.from({ length: leadingBlanks }).map((_, i) => (
            <div key={`blank-${i}`} />
          ))}

          {days.map((day) => {
            const activityScore =
              day.questionsAnswered + day.flashcardsReviewed + Math.round(day.minutesSpent / 5);
            const intensity =
              activityScore === 0 ? 0 : activityScore < 5 ? 1 : activityScore < 15 ? 2 : 3;
            const shade = [
              "bg-black/5 dark:bg-white/5",
              "bg-blue-300/40 dark:bg-blue-500/30",
              "bg-blue-400/60 dark:bg-blue-500/55",
              "bg-blue-600 text-white dark:bg-blue-500",
            ][intensity];

            return (
              <div
                key={day.date}
                title={`${day.date}: ${day.questionsAnswered} question(s), ${day.flashcardsReviewed} flashcard(s), ${day.minutesSpent}m`}
                className={`flex aspect-square items-center justify-center rounded-md text-[11px] font-medium ${shade} ${
                  day.isToday ? "ring-2 ring-blue-600 dark:ring-blue-400" : ""
                }`}
              >
                {day.label}
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-white/60 bg-white/60 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
        <h2 className="text-xl font-semibold">Plan ahead</h2>
        <p className="mt-1 text-sm opacity-60">
          Short notes for what you want to revise on a given day. These are
          only remembered on this device for now — see the code comment in
          PlannerNotes.tsx before this ships for real.
        </p>
        <div className="mt-4">
          <PlannerNotes />
        </div>
      </section>
    </main>
  );
}
