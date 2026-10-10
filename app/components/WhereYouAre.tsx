// "Where you are" — the top of a topic page, for a logged-in student.
//
// ⚠️ A SERVER COMPONENT WITH NO STATE. Everything in it is worked out on the
// server from what the student has already done (lib/mastery.ts), so not one
// byte of JavaScript ships for it and it is right before hydration. It updates
// on the next visit rather than live as you answer, which is the honest
// reading of "where you are": it says where you WERE when the page opened,
// and the practice and flashcards below say what is happening now.
//
// Each figure is a link to the place you would go to change it. A number you
// cannot act on is a scoreboard; a number one tap from the questions that
// move it is a plan.

import Link from "next/link";
import { MASTERY_ACCURACY, MASTERY_LABEL, type Mastery } from "../lib/mastery";

/** The pill colours, shared with the subject page's topic rows so a state
 *  looks the same everywhere it is shown. */
export const MASTERY_PILL: Record<Mastery["state"], string> = {
  new: "bg-black/5 text-black/70 dark:bg-white/10 dark:text-white/80",
  learning: "bg-sky-500/15 text-sky-800 dark:text-sky-200",
  nearly: "bg-amber-500/20 text-amber-900 dark:text-amber-200",
  mastered: "bg-emerald-500/20 text-emerald-900 dark:text-emerald-200",
};

export function WhereYouAre({ mastery, colour }: { mastery: Mastery; colour: string }) {
  const m = mastery;
  const pct = Math.round(m.progress * 100);
  const tile = "flex min-h-11 flex-col justify-center rounded-xl border border-black/5 bg-white/70 px-4 py-3 dark:border-white/10 dark:bg-white/5";
  return (
    <section aria-labelledby="where-you-are" className="mt-6 rounded-2xl border border-white/60 bg-white/60 p-5 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 id="where-you-are" className="text-sm font-semibold uppercase tracking-wider opacity-70">
          Where you are
        </h2>
        <span className={`rounded-full px-3 py-1 text-sm font-semibold ${MASTERY_PILL[m.state]}`}>
          {m.state === "mastered" ? "✓ " : ""}{MASTERY_LABEL[m.state]}
        </span>
      </div>

      {/* the bar is decoration for the sentence after it, which says the same
          thing in words for anyone who cannot see the bar */}
      <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-black/10 dark:bg-white/10" aria-hidden="true">
        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: m.state === "mastered" ? "#10b981" : colour }} />
      </div>
      <p className="sr-only">{m.state === "mastered" ? "You have mastered this topic." : `${pct}% of the way to mastering this topic.`}</p>

      <ul className="mt-4 grid gap-3 sm:grid-cols-3">
        <li>
          <a href="#practice" className={`${tile} hover:border-black/15 dark:hover:border-white/25`}>
            <span className="text-lg font-bold">
              {m.recentOf ? `${m.recentRight} of ${m.recentOf}` : "No answers yet"}
            </span>
            <span className="text-sm opacity-70">
              {m.recentOf ? `right lately · ${m.answered} answered here` : "Start with the practice questions"}
            </span>
          </a>
        </li>
        <li>
          <a href="#definitions" className={`${tile} hover:border-black/15 dark:hover:border-white/25`}>
            <span className="text-lg font-bold">{m.cardsKnown} of {m.cardsTotal}</span>
            <span className="text-sm opacity-70">definitions you know</span>
          </a>
        </li>
        <li>
          {m.toRevisit > 0 ? (
            <Link href="/today#revisit" className={`${tile} hover:border-black/15 dark:hover:border-white/25`}>
              <span className="text-lg font-bold">{m.toRevisit} to revisit</span>
              <span className="text-sm opacity-70">questions you missed, in today&apos;s practice</span>
            </Link>
          ) : (
            <div className={tile}>
              <span className="text-lg font-bold">Nothing to revisit</span>
              <span className="text-sm opacity-70">no missed questions waiting</span>
            </div>
          )}
        </li>
      </ul>

      {m.needs.length > 0 ? (
        <div className="mt-4 text-sm">
          <p className="font-semibold">To master it:</p>
          <ul className="mt-1 list-disc space-y-0.5 pl-5 opacity-80">
            {m.needs.map((n) => <li key={n}>{n}</li>)}
          </ul>
        </div>
      ) : (
        <p className="mt-4 text-sm opacity-80">
          Mastered. It stays that way while {Math.round(MASTERY_ACCURACY * 100)}% of your recent answers here stay right —
          so it shows what you know now, not what you knew once.
        </p>
      )}
    </section>
  );
}
