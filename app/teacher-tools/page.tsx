import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { MoreComingSoon } from "../components/MoreComingSoon";
import { Icon } from "../components/Icon";
import { diagramLibraryTotals } from "../lib/teacher-tools";

export const metadata: Metadata = {
  title: "Teacher tools",
  description:
    "Every diagram on Revision Lab, gathered by subject and topic so you can put one on the board.",
};

// Teacher Tools — the hub.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY THIS IS NOT BEHIND A LOGIN
//
// Everything else that has its own section here (clans, the wardrobe, hosting a
// quiz) needs an account because it writes something down about you. This does
// not: it reads content that is already public and arranges it differently.
//
// Making a teacher create an account to look at a diagram would lose most of
// them at the first screen, and would be asking for something the page has no
// use for. The way in is a card on the dashboard, next to the clan one, because
// that is where Matthew asked for it — but the page itself is a plain URL that
// works for anyone he sends it to.
// ─────────────────────────────────────────────────────────────────────────────
export default function TeacherToolsPage() {
  const totals = diagramLibraryTotals();

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-8">
      <SiteHeader greeting={false} />

      <section className="mt-10">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-600 dark:text-blue-400">
          Teacher tools
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          Things worth putting on the board
        </h1>
        <p className="mt-4 max-w-2xl text-lg opacity-70">
          Revision Lab is built for students revising on their own. This part is
          for whoever is standing at the front — the same content, arranged so
          you can find one picture quickly rather than scrolling a topic page
          for it.
        </p>
      </section>

      {/* The one tool there is. A single card rather than a grid of one:
          a grid with one thing in it looks like something failed to load. */}
      <Link
        href="/teacher-tools/diagrams"
        className="group mt-10 flex flex-col gap-6 rounded-3xl border border-white/60 bg-white/70 p-7 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-md sm:flex-row sm:items-center dark:border-white/10 dark:bg-white/5"
      >
        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
          <Icon name="chart" className="h-8 w-8" />
        </span>

        <span className="min-w-0 flex-1">
          <span className="block text-2xl font-semibold tracking-tight">
            Diagram library
          </span>
          <span className="mt-1.5 block opacity-70">
            Every diagram on the site, by subject and topic. Pick a topic and
            you get its diagrams on one page, large enough to project.
          </span>
          <span className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm opacity-60">
            <span>
              <strong className="font-semibold tabular-nums">
                {totals.diagrams}
              </strong>{" "}
              diagrams
            </span>
            <span>
              across{" "}
              <strong className="font-semibold tabular-nums">
                {totals.topics}
              </strong>{" "}
              topics
            </span>
            <span>
              in{" "}
              <strong className="font-semibold tabular-nums">
                {totals.subjects}
              </strong>{" "}
              subjects
            </span>
          </span>
        </span>

        <span
          aria-hidden="true"
          className="shrink-0 text-2xl opacity-40 transition group-hover:translate-x-1 group-hover:opacity-100"
        >
          →
        </span>
      </Link>

      <MoreComingSoon />
    </main>
  );
}
