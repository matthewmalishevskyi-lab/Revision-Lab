"use client";

// The alien game's ship's log on the progress page.
//
// Renders NOTHING until a deck has actually been finished, which means it is
// invisible to everyone who has not played — the game is behind the developer
// early-access code, so that is almost everybody. That also keeps this page
// from advertising a feature most visitors cannot open.

import { useStoredRaw } from "../lib/browserStore";
import { formatClock, parseLog, SHIPS_LOG_KEY } from "../lib/shipsLog";

const GRADE_COLOUR: Record<string, string> = {
  S: "bg-amber-400/20 text-amber-700 dark:text-amber-300",
  A: "bg-emerald-400/20 text-emerald-700 dark:text-emerald-300",
  B: "bg-sky-400/20 text-sky-700 dark:text-sky-300",
  C: "bg-slate-400/20 text-slate-700 dark:text-slate-300",
  D: "bg-rose-400/20 text-rose-700 dark:text-rose-300",
};

export function ShipsLog() {
  const log = parseLog(useStoredRaw(SHIPS_LOG_KEY, null));
  const decks = Object.entries(log);
  if (decks.length === 0) return null;
  const runs = decks.reduce((n, [, d]) => n + d.runs, 0);

  return (
    <section className="mt-10 rounded-2xl border border-black/5 p-6 dark:border-white/10">
      <h2 className="text-lg font-semibold">Ship&apos;s log</h2>
      <p className="mt-1 text-sm opacity-70">
        Your best run on each deck of the alien game — {runs} run{runs === 1 ? "" : "s"} so far.
        Kept on this device only.
      </p>
      <ul className="mt-4 space-y-2">
        {decks.map(([level, best]) => (
          <li key={level} className="flex flex-wrap items-center gap-x-4 gap-y-1 rounded-xl bg-black/[0.03] px-4 py-3 dark:bg-white/[0.04]">
            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-base font-bold ${GRADE_COLOUR[best.bestGrade] ?? GRADE_COLOUR.D}`}>
              {best.bestGrade}
            </span>
            <span className="min-w-0 flex-1 text-sm font-medium">{level}</span>
            <span className="text-sm tabular-nums opacity-70">{best.bestScore}/100</span>
            <span className="text-sm tabular-nums opacity-70">{formatClock(best.bestSeconds)}</span>
            <span className="text-sm tabular-nums opacity-70">{best.mostKills} aliens</span>
            {best.bestAccuracy !== null && (
              <span className="text-sm tabular-nums opacity-70">{Math.round(best.bestAccuracy * 100)}% right</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
