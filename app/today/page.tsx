import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { SiteHeader } from "../components/SiteHeader";
import { getViewer } from "../lib/viewer";
import { getDailySet, getRevisitSet } from "../lib/daily-practice-server";
import { DailyPracticeRunner } from "./DailyPracticeRunner";

export const metadata: Metadata = {
  title: "Today's practice",
  // Personal, and different for every visitor — there is nothing here for a
  // searcher, and the same reasoning as /progress and /dashboard.
  robots: { index: false, follow: false },
};

// Recomputed per request rather than pre-rendered: the whole page is a
// function of one student's history, which changes as they answer.
export const dynamic = "force-dynamic";

export default async function TodayPage() {
  const viewer = await getViewer();
  if (!viewer) redirect("/login");

  const set = await getDailySet(viewer.id);
  // After the daily set, because it needs to know which questions are already
  // in it. Never throws: a missing table or a failed read gives an empty set,
  // and the section below does not render.
  const revisit = await getRevisitSet(viewer.id, set);

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-8">
      <SiteHeader greeting={false} />

      <section className="mt-10">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-600 dark:text-blue-400">
          Today&apos;s practice
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          {set.questions.length} questions, picked for you
        </h1>
        <p className="mt-3 max-w-2xl text-lg opacity-70">{set.summary}</p>
      </section>

      {/* ⚠️ THE REASONING IS SHOWN, NOT HIDDEN.
          A recommender that will not say why it chose something is asking to
          be trusted on nothing, and a student who thinks the choice is random
          has no reason to take it seriously. This is also the honest place to
          admit the limit: the site knows which TOPICS have gone badly, not
          which questions have already been seen. */}
      {set.focus.length > 0 && (
        <section className="mt-6 rounded-2xl border border-white/60 bg-white/70 p-5 text-sm shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="font-semibold">Why these</h2>
          <ul className="mt-2 space-y-1.5">
            {set.focus.map((f) => (
              <li key={`${f.subjectSlug}/${f.topicSlug}`} className="opacity-75">
                <Link
                  href={`/subjects/${f.subjectSlug}/${f.topicSlug}`}
                  className="font-medium hover:underline"
                >
                  {f.topicTitle}
                </Link>{" "}
                <span className="opacity-70">({f.subjectName})</span> — {f.reason}
                {f.accuracy !== null && ` (${Math.round(f.accuracy * 100)}%)`}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs opacity-55">
            The questions start easier and get harder as you go. About{" "}
            {set.minutes} minutes at a minute a mark. The set is the same all
            day, so you can come back and finish it.
          </p>
        </section>
      )}

      {/* ⚠️ ABOVE THE CLIMB, NOT MIXED INTO IT.
          A specific question you got wrong is a different thing from a topic
          you are weak at, and folding these into the ladder would break its
          easy-to-hard order (a wrong answer can be any difficulty). Kept
          separate, and short — see MAX_REVISIT in lib/revisit.ts. */}
      {revisit.questions.length > 0 && (
        <section className="mt-8" aria-labelledby="revisit-heading">
          <h2 id="revisit-heading" className="text-2xl font-bold tracking-tight">
            Revisit your mistakes
          </h2>
          <p className="mt-2 max-w-2xl opacity-70">{revisit.summary}</p>
          <DailyPracticeRunner set={revisit} variant="revisit" />
          <h2 className="mt-12 text-2xl font-bold tracking-tight">Today&apos;s set</h2>
        </section>
      )}

      {set.questions.length === 0 ? (
        <p className="mt-8 rounded-2xl border border-white/60 bg-white/70 p-6 opacity-75 dark:border-white/10 dark:bg-white/5">
          There is nothing to recommend yet. Answer a few practice questions on
          any maths or science topic and this will fill up tomorrow.
        </p>
      ) : (
        <DailyPracticeRunner set={set} />
      )}
    </main>
  );
}
