import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { MASCOTS } from "../components/Mascots";
import { ProgressRing } from "../components/ProgressRing";
import { SiteHeader } from "../components/SiteHeader";
import { WeeklyChart } from "../components/WeeklyChart";
import { getViewer } from "../lib/viewer";
import { formatDuration, getProgress, PROGRESS_ENABLED } from "../lib/progress";
import { ACCOUNTS_ENABLED } from "../lib/site";

// Built from Jennifer's mockup: a heading, a "next up" suggestion, three
// subject cards with rings, and a personal statistics panel.
//
// One deliberate difference from the mockup, worth being clear about: the
// mockup shows 447 questions and 262 flashcards because a design needs numbers
// in it to look like anything. A real dashboard starts empty. Every figure here
// comes from what has actually been recorded, and on day one that is zero —
// so the empty states below are as carefully written as the full ones.
// Inventing plausible numbers would make the page untrustworthy for ever.

export const metadata: Metadata = {
  title: "Your progress",
  // Private, and useless to anyone arriving from a search.
  robots: { index: false, follow: false },
};

export default async function ProgressPage() {
  if (!ACCOUNTS_ENABLED) redirect("/");

  const user = await getViewer();
  // Checked on the SERVER, before a byte of this page is sent. Hiding a page in
  // the browser is not security; anyone can undo that with dev tools.
  if (!user) redirect("/login");

  const progress = await getProgress(user.id);


  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-8">
      <SiteHeader greeting={false} />

      {/* ---------- Heading + next up ---------- */}
      <section className="mt-10 flex flex-wrap items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Your progress
          </h1>
          <p className="mt-2 text-lg opacity-60">
            {progress.hasAnyActivity
              ? `Hi ${user.name} — here's what you've been revising.`
              : `Hi ${user.name} — nothing recorded yet. Answer a question and it'll show up here.`}
          </p>
        </div>

        {progress.nextUp && (
          <Link
            href={`/subjects/${progress.nextUp.subjectSlug}/${progress.nextUp.topicSlug}`}
            className="group flex items-center gap-4 rounded-2xl border border-white/60 bg-white/70 px-5 py-4 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5"
          >
            {(() => {
              const subject = progress.subjects.find(
                (s) => s.slug === progress.nextUp!.subjectSlug,
              );
              const Mascot = subject ? MASCOTS[subject.mascot] : null;
              return Mascot ? <Mascot className="h-14 shrink-0" /> : null;
            })()}
            <span className="min-w-0">
              <span className="block text-sm font-semibold uppercase tracking-wider opacity-50">
                Next up
              </span>
              <span className="block text-lg font-semibold">
                {progress.nextUp.topic}
              </span>
              <span className="block text-sm opacity-60">
                {progress.nextUp.subject}
              </span>
            </span>
            <span
              aria-hidden="true"
              className="ml-2 text-2xl opacity-40 transition group-hover:translate-x-1 group-hover:opacity-80"
            >
              →
            </span>
          </Link>
        )}
      </section>

      {/* An honest explanation rather than a permanently empty page.
          Running locally without the Supabase settings, nothing can be
          recorded — so say so, instead of showing zeros that look like a fault
          or, worse, like you have done no work. */}
      {!PROGRESS_ENABLED && (
        <p className="mt-6 rounded-2xl border border-amber-500/30 bg-amber-500/10 px-5 py-4 text-sm">
          <strong>Nothing is being recorded here.</strong> This copy of the site
          has no database configured, so these figures will stay at zero. Your
          real progress is on the live site.
        </p>
      )}

      {/* ---------- The three subject cards ---------- */}
      <section className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {progress.subjects.map((subject) => {
          const Mascot = MASCOTS[subject.mascot];
          const colour = subject.accent;

          return (
            <article
              key={subject.slug}
              className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex items-center gap-4">
                <span
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl"
                  style={{ backgroundImage: subject.gradient }}
                >
                  <Mascot className="h-12" />
                </span>
                <h2 className="text-xl font-semibold">{subject.name}</h2>
              </div>

              <div className="mt-5 flex items-center gap-5">
                {/* The ring shows the COUNT, not the percentage — and that is
                    a fix for something that genuinely looked like data loss.

                    The percentage is topics covered ÷ topics in the subject.
                    Adding topics grows the denominator, so the same work
                    displayed as 4/13 = 31% one week and 4/18 = 22% the next.
                    Nothing had been lost; the number had simply been measured
                    against a bigger total, and there is no way for a student to
                    tell those two things apart from a falling percentage.

                    "4 of 18" can only ever go up, and it is more informative
                    anyway. The ring still FILLS by percentage, so the shape
                    remains comparable between subjects. */}
                <ProgressRing
                  percent={subject.percent}
                  colour={colour}
                  label={`${subject.topicsCovered}/${subject.topicsTotal}`}
                />

                <dl className="min-w-0 flex-1 space-y-2 text-sm">
                  <div>
                    <dt className="opacity-50">This week</dt>
                    <dd className="font-semibold tabular-nums">
                      {subject.secondsThisWeek > 0
                        ? formatDuration(subject.secondsThisWeek)
                        : "—"}
                    </dd>
                  </div>
                  <div>
                    <dt className="opacity-50">Questions answered</dt>
                    <dd className="font-semibold tabular-nums">
                      {subject.questionsAnswered}
                    </dd>
                  </div>
                  <div>
                    <dt className="opacity-50">Flashcards reviewed</dt>
                    <dd className="font-semibold tabular-nums">
                      {subject.flashcardsReviewed}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <span
                  className="rounded-full px-3.5 py-1.5 text-sm font-semibold"
                  style={{ backgroundColor: `${colour}18`, color: colour }}
                >
                  {subject.label}
                </span>
                <span className="text-sm opacity-50">
                  {subject.percent}% of this subject
                </span>
              </div>

              <Link
                href={`/subjects/${subject.slug}`}
                className="mt-4 block rounded-xl border border-black/10 px-4 py-2.5 text-center text-sm font-semibold transition hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
              >
                Revise {subject.name}
              </Link>
            </article>
          );
        })}
      </section>

      {/* ---------- Personal statistics ---------- */}
      <section className="mt-8 rounded-3xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm sm:p-8 dark:border-white/10 dark:bg-white/5">
        <h2 className="text-2xl font-bold tracking-tight">
          Personal statistics
        </h2>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div className="rounded-2xl border border-black/5 p-5 dark:border-white/10">
            <WeeklyChart
              week={progress.week}
              series={progress.subjects.map((s) => ({
                slug: s.slug,
                name: s.name,
                colour: s.accent,
              }))}
            />
          </div>

          <div className="grid content-start gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="flex items-center gap-4 rounded-2xl border border-black/5 p-5 dark:border-white/10">
              <ProgressRing
                percent={
                  progress.accuracy === null
                    ? 0
                    : Math.round(progress.accuracy * 100)
                }
                colour="#2563eb"
                size={84}
                thickness={8}
                label={
                  progress.accuracy === null
                    ? "—"
                    : `${Math.round(progress.accuracy * 100)}%`
                }
              />
              <div>
                <p className="font-semibold">Accuracy</p>
                <p className="mt-0.5 text-sm opacity-60">
                  {accuracyComment(progress.accuracy, progress.totalQuestions)}
                </p>
              </div>
            </div>

            <Stat
              value={progress.totalQuestions}
              label="Questions answered"
              detail={
                progress.totalQuestions > 0
                  ? `${progress.totalCorrect} correct`
                  : "Answer one to get started"
              }
            />
            <Stat
              value={progress.totalFlashcards}
              label="Flashcards reviewed"
              detail={
                progress.totalFlashcards > 0
                  ? "Flipped to see the definition"
                  : "Flip a card to count it"
              }
            />
            <Stat
              value={formatDuration(progress.totalSecondsThisWeek)}
              label="Studied this week"
              detail="Counted only while you're actually on the page"
            />
          </div>
        </div>
      </section>

      {/* ---------- What the numbers mean ---------- */}
      <section className="mt-8 rounded-3xl border border-white/60 bg-white/60 p-6 text-sm shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
        <h2 className="font-semibold">How these are worked out</h2>
        <ul className="mt-3 space-y-2 opacity-70">
          <li>
            <strong>The ring</strong> is topics covered — how many topics
            you&apos;ve practised at least once. The count only ever goes up.
            The percentage beneath it can move down when new topics are added
            to a subject, because it is measured against a bigger total. That
            isn&apos;t lost progress: nothing you have done is ever removed.
          </li>
          <li>
            <strong>Accuracy</strong> counts every answer you check, right or
            wrong. Revealing an answer without attempting it isn&apos;t counted
            either way.
          </li>
          <li>
            <strong>Time</strong> is only counted while the page is open, in
            front of you, and you have done something in the last five minutes.
            Leaving a tab open overnight adds nothing.
          </li>
          <li>
            <strong>Confident</strong> needs both: at least three topics covered
            and 80% accuracy. Knowing one topic perfectly isn&apos;t the same as
            being ready.
          </li>
        </ul>
      </section>
    </main>
  );
}

function Stat({
  value,
  label,
  detail,
}: {
  value: number | string;
  label: string;
  detail: string;
}) {
  return (
    <div className="rounded-2xl border border-black/5 p-5 dark:border-white/10">
      <p className="text-3xl font-bold tabular-nums">{value}</p>
      <p className="mt-1 font-medium">{label}</p>
      <p className="mt-0.5 text-sm opacity-50">{detail}</p>
    </div>
  );
}

// Encouragement has to be honest to be worth anything. "Great work!" under 41%
// is the kind of praise that teaches people to ignore praise — so the message
// depends on the number, and says nothing at all until there is enough data to
// mean something.
function accuracyComment(accuracy: number | null, answered: number): string {
  if (accuracy === null) return "No questions answered yet";
  if (answered < 10) return `From ${answered} question${answered === 1 ? "" : "s"} so far`;
  if (accuracy >= 0.9) return "Excellent — try a harder topic";
  if (accuracy >= 0.75) return "Solid. Keep going";
  if (accuracy >= 0.5) return "Getting there — worth rereading the key facts";
  return "Read the notes again before more questions";
}
