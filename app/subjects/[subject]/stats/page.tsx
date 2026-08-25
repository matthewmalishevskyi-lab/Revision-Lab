import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { Icon } from "../../../components/Icon";
import { MascotDisplay } from "../../../components/MascotDisplay";
import { ProgressRing } from "../../../components/ProgressRing";
import { SiteHeader } from "../../../components/SiteHeader";
import { ACCOUNTS_ENABLED } from "../../../lib/site";
import { getSubject } from "../../../lib/subjects";
import { getViewer } from "../../../lib/viewer";
import {
  formatDuration,
  getProgress,
  getSubjectTopicBreakdown,
} from "../../../lib/progress";

// The site-wide /progress page has to fit nine subjects on one screen, so it
// only ever shows one aggregate number per subject. This page is the detail
// behind ONE of those cards: every topic in the subject, individually, plus
// that subject's own test history — the thing every subject page has been
// linking out to a big shared page for, when what someone actually wants
// after clicking "Revise Maths" is "how am I doing in Maths specifically".
//
// Reserved-route check done by hand before adding this folder (there is no
// automated checker for it — see PROJECT_NOTES): no topic anywhere is
// slugged "stats", so this static segment safely beats the dynamic
// [topic]/page.tsx the same way exam/ and print/ already do.

type Props = { params: Promise<{ subject: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subject: slug } = await params;
  const subject = getSubject(slug);
  if (!subject) return { title: "Not found" };
  return {
    title: `Your ${subject.name} progress`,
    // Private and per-user — nothing here should be indexed.
    robots: { index: false, follow: false },
  };
}

export default async function SubjectStatsPage({ params }: Props) {
  const { subject: slug } = await params;
  const subject = getSubject(slug);
  if (!subject) notFound();

  if (!ACCOUNTS_ENABLED) redirect("/");

  const user = await getViewer();
  // Checked on the SERVER, before a byte of this page is sent — the same
  // rule every other progress-bearing page on the site follows.
  if (!user) redirect("/login");

  const [progress, breakdown] = await Promise.all([
    getProgress(user.id),
    getSubjectTopicBreakdown(user.id, slug),
  ]);

  // getProgress already computed this subject's own aggregate — reused here
  // rather than re-derived, so the headline number on this page can never
  // quietly disagree with the same subject's card on /progress.
  const summary = progress.subjects.find((s) => s.slug === slug);
  const testHistory = progress.testHistory.filter((t) => t.subjectSlug === slug);
  const colour = subject.accent;

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-8">
      <SiteHeader greeting={false} />

      {/* ---------- Heading ---------- */}
      <section className="mt-10 flex flex-wrap items-center justify-between gap-6">
        <div className="flex flex-wrap items-center gap-4">
          <MascotDisplay mascot={subject.mascot} className="h-16" />
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {subject.name} progress
            </h1>
            <p className="mt-2 text-lg opacity-60">
              Topic by topic, and every {subject.name} test you&apos;ve sat.
            </p>
          </div>
        </div>

        <Link
          href={`/subjects/${subject.slug}`}
          className="rounded-xl border border-black/10 px-4 py-2.5 text-sm font-semibold transition hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
        >
          ← Back to {subject.name}
        </Link>
      </section>

      {/* ---------- Headline card ---------- */}
      {/* Same numbers as this subject's card on /progress, just given a
          whole page's width instead of a third of a shared grid. */}
      {summary && (
        <section className="mt-8 rounded-3xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm sm:p-8 dark:border-white/10 dark:bg-white/5">
          <div className="flex flex-wrap items-center gap-6">
            <ProgressRing
              percent={summary.percent}
              colour={colour}
              size={110}
              thickness={10}
              label={`${summary.topicsCovered}/${summary.topicsTotal}`}
            />

            <dl className="flex flex-1 flex-wrap gap-x-10 gap-y-4 text-sm">
              <div>
                <dt className="opacity-50">Status</dt>
                <dd className="mt-1">
                  <span
                    className="rounded-full px-3.5 py-1.5 text-sm font-semibold"
                    style={{ backgroundColor: `${colour}18`, color: colour }}
                  >
                    {summary.label}
                  </span>
                </dd>
              </div>
              <div>
                <dt className="opacity-50">Accuracy</dt>
                <dd className="font-semibold tabular-nums">
                  {summary.accuracy === null
                    ? "—"
                    : `${Math.round(summary.accuracy * 100)}%`}
                </dd>
              </div>
              <div>
                <dt className="opacity-50">Questions answered</dt>
                <dd className="font-semibold tabular-nums">
                  {summary.questionsAnswered}
                </dd>
              </div>
              <div>
                <dt className="opacity-50">Flashcards reviewed</dt>
                <dd className="font-semibold tabular-nums">
                  {summary.flashcardsReviewed}
                </dd>
              </div>
              <div>
                <dt className="opacity-50">This week</dt>
                <dd className="font-semibold tabular-nums">
                  {summary.secondsThisWeek > 0
                    ? formatDuration(summary.secondsThisWeek)
                    : "—"}
                </dd>
              </div>
            </dl>
          </div>
        </section>
      )}

      {/* ---------- Topic by topic ---------- */}
      <section className="mt-8 rounded-3xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm sm:p-8 dark:border-white/10 dark:bg-white/5">
        <h2 className="text-2xl font-bold tracking-tight">Every topic</h2>
        <p className="mt-1 opacity-60">
          {breakdown.filter((t) => t.covered).length} of {breakdown.length}{" "}
          touched so far.
        </p>

        <ul className="mt-5 space-y-2.5">
          {breakdown.map((topic) => (
            <li
              key={topic.slug}
              className="flex flex-wrap items-center gap-4 rounded-2xl border border-black/5 p-4 dark:border-white/10"
            >
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                style={{
                  backgroundColor: topic.covered ? `${colour}18` : "transparent",
                  color: topic.covered ? colour : "currentColor",
                  opacity: topic.covered ? 1 : 0.35,
                }}
              >
                <Icon name={topic.icon} className="h-6 w-6" />
              </span>

              <Link
                href={`/subjects/${subject.slug}/${topic.slug}`}
                className="min-w-0 flex-1 font-medium hover:underline"
              >
                {topic.title}
              </Link>

              {!topic.covered ? (
                <span className="shrink-0 text-sm opacity-40">
                  Not started yet
                </span>
              ) : (
                <>
                  {topic.questionsAnswered > 0 && (
                    <span className="hidden w-28 shrink-0 sm:block">
                      <span className="block h-2 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
                        <span
                          className="block h-full rounded-full"
                          style={{
                            width: `${Math.round((topic.accuracy ?? 0) * 100)}%`,
                            backgroundColor: colour,
                          }}
                        />
                      </span>
                    </span>
                  )}

                  <span className="shrink-0 text-right text-sm">
                    {topic.questionsAnswered > 0 ? (
                      <>
                        <span className="block font-semibold tabular-nums">
                          {Math.round((topic.accuracy ?? 0) * 100)}%
                        </span>
                        <span className="block opacity-50 tabular-nums">
                          {topic.questionsCorrect}/{topic.questionsAnswered} questions
                        </span>
                      </>
                    ) : (
                      <span className="opacity-50">
                        {topic.flashcardsReviewed} flashcard
                        {topic.flashcardsReviewed === 1 ? "" : "s"} only
                      </span>
                    )}
                  </span>
                </>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- This subject's test history ---------- */}
      {/* Only appears once there's something to show, same rule as the
          site-wide history section on /progress. */}
      {testHistory.length > 0 && (
        <section className="mt-8 rounded-3xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm sm:p-8 dark:border-white/10 dark:bg-white/5">
          <h2 className="text-2xl font-bold tracking-tight">
            {subject.name} test history
          </h2>
          <p className="mt-1 opacity-60">
            Your last {testHistory.length} {subject.name} test
            {testHistory.length === 1 ? "" : "s"}, most recent first.
          </p>

          <ul className="mt-5 space-y-2.5">
            {testHistory.map((entry, index) => (
              <li
                key={`${entry.date}-${index}`}
                className="flex items-center gap-4 rounded-2xl border border-black/5 p-4 dark:border-white/10"
              >
                <span className="min-w-0 flex-1">
                  <span className="block text-sm opacity-50">
                    {new Date(entry.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                      timeZone: "Europe/London",
                    })}
                  </span>
                </span>

                <span className="hidden w-28 shrink-0 sm:block">
                  <span className="block h-2 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
                    <span
                      className="block h-full rounded-full"
                      style={{
                        width: `${entry.percent}%`,
                        backgroundColor: entry.accent,
                      }}
                    />
                  </span>
                </span>

                <span className="shrink-0 text-right">
                  <span
                    className="block text-lg font-bold tabular-nums"
                    style={{ color: entry.accent }}
                  >
                    {entry.percent}%
                  </span>
                  <span className="block text-xs opacity-50 tabular-nums">
                    {entry.correct}/{entry.total}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <p className="mx-auto mt-10 max-w-2xl text-center text-sm opacity-50">
        Want the same view across every subject at once?{" "}
        <Link href="/progress" className="underline">
          See your overall progress →
        </Link>
      </p>
    </main>
  );
}
