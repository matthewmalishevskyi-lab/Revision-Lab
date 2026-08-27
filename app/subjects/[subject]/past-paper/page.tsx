import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MockExam, type ExamQuestion } from "../../../components/MockExam";
import { MascotDisplay } from "../../../components/MascotDisplay";
import { SiteHeader } from "../../../components/SiteHeader";
import { collectQuestionPool, normalizeQueryValue } from "../../../lib/examPool";
import { shuffle } from "../../../lib/shuffle";
import { getSubject, type YearGroup } from "../../../lib/subjects";

// A STATIC segment living alongside "exam" and the dynamic [topic] segment,
// same trick as that page's own comment explains — Next checks static
// segments before the dynamic one, so no topic may ever be slugged
// "past-paper" either.
//
// Deliberately no generateStaticParams, same reasoning as the exam page: a
// fresh random paper every visit is the whole point, so there is no one
// fixed version of this page to pre-render.

export const dynamic = "force-dynamic";

// This is the LONGER, full-length sibling of the quick "{Subject} test" —
// idea #8 from the competitor research (`/ideas_1`): "a full, timed paper
// under real exam conditions, not just topic-by-topic practice." The short
// test (20 questions, 20 minutes) is a quick check; this is meant to be
// sat like an actual paper nearer the real exam.
//
// Still NOT trying to reproduce any specific exam board's real timing —
// boards, papers and mark schemes vary far too much across 14 subjects to
// state one as fact without risking telling someone the wrong thing about
// their own exam, the same caution `revisionWeight`'s own comment in
// subjects.ts applies to its workload ranking. 90 seconds a question is a
// rough, adjustable estimate — a bit more generous than the quick test's
// 60 — to account for a full paper mixing in more extended, self-marked
// answers rather than being all short factual recall.
//
// The cap (50) bounds how long a single sitting can get for a
// content-heavy subject; the actual duration is computed from however many
// questions the pool and cap actually produce, not a fixed number — a
// small pool (one year ticked, on a subject with less written yet) should
// mean a shorter paper, not the same fixed clock regardless.
const QUESTION_COUNT_CAP = 50;
const SECONDS_PER_QUESTION = 90;

type Props = {
  params: Promise<{ subject: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subject: slug } = await params;
  const subject = getSubject(slug);
  if (!subject) return { title: "Not found" };

  return {
    title: `${subject.name} past paper`,
    description: `A longer, full-length timed practice paper for GCSE ${subject.name} — every question mixed together across topics, closer to sitting a real exam than a quick test.`,
    // Same reasoning as the exam page: a fresh random paper every visit
    // means there's no one stable version for a search engine to index.
    robots: { index: false, follow: true },
  };
}

export default async function PastPaperPage({ params, searchParams }: Props) {
  const { subject: slug } = await params;
  const subject = getSubject(slug);
  if (!subject) notFound();

  const query = await searchParams;

  const configured = normalizeQueryValue(query.configured).includes("1");
  const selectedYears = normalizeQueryValue(query.years);
  const availableYears = subject.years.map((group) => group.year);

  let yearsToInclude: YearGroup[] = [];
  let questions: ExamQuestion[] = [];
  if (configured) {
    yearsToInclude = subject.years.filter((group) =>
      selectedYears.includes(group.year),
    );
    const pool = collectQuestionPool(subject.slug, yearsToInclude);
    questions = shuffle(pool).slice(0, QUESTION_COUNT_CAP);
  }
  const durationSeconds = questions.length * SECONDS_PER_QUESTION;

  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-8">
      <SiteHeader greeting={false} />

      <nav className="mt-8 flex flex-wrap items-center gap-2 text-sm opacity-60">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span aria-hidden="true">›</span>
        <Link href={`/subjects/${subject.slug}`} className="hover:underline">
          {subject.name}
        </Link>
        <span aria-hidden="true">›</span>
        <span>Past paper</span>
      </nav>

      <section
        className="mt-6 flex items-center gap-5 overflow-hidden rounded-3xl px-8 py-8 text-white shadow-[0_20px_50px_-30px_rgba(22,24,43,0.5)]"
        style={{ backgroundImage: subject.gradient }}
      >
        <MascotDisplay
          mascot={subject.mascot}
          className="h-20 shrink-0 drop-shadow-[0_6px_10px_rgba(0,0,0,0.3)]"
        />
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider opacity-80">
            {subject.name}
          </p>
          <h1 className="text-4xl font-bold tracking-tight">
            {subject.name} past paper
          </h1>
        </div>
      </section>

      <div className="mt-8">
        {!configured ? (
          <form
            method="get"
            className="rounded-3xl border border-white/60 bg-white/70 p-8 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
          >
            <h2 className="text-xl font-bold">Set up your past paper</h2>
            <p className="mt-1 opacity-70">
              A longer, full-length paper — up to {QUESTION_COUNT_CAP}{" "}
              questions mixed across every topic, timed closer to how a real
              exam feels. Tick which years to include, or leave everything
              ticked for the fullest paper {subject.name} can currently
              build.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {availableYears.map((year) => (
                <label
                  key={year}
                  className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/60 bg-white/60 px-4 py-2.5 text-sm font-medium shadow-sm transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                >
                  <input
                    type="checkbox"
                    name="years"
                    value={year}
                    defaultChecked
                    className="h-4 w-4"
                    style={{ accentColor: subject.accent }}
                  />
                  {year}
                </label>
              ))}
            </div>

            <input type="hidden" name="configured" value="1" />

            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              style={{ backgroundColor: subject.accent }}
            >
              Start past paper
              <span aria-hidden="true">→</span>
            </button>
          </form>
        ) : yearsToInclude.length === 0 ? (
          <div className="rounded-3xl border border-white/60 bg-white/70 p-8 text-center shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
            <p className="opacity-70">
              You didn&apos;t tick any years, so there&apos;s nothing to
              build a paper from.
            </p>
            <Link
              href={`/subjects/${subject.slug}/past-paper`}
              className="mt-4 inline-block rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Choose again
            </Link>
          </div>
        ) : questions.length === 0 ? (
          <div className="rounded-3xl border border-white/60 bg-white/70 p-8 text-center shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
            <p className="opacity-70">
              No practice questions have been written for the year(s) you
              picked yet, so there&apos;s nothing to build a paper from.
              Check back once some topics have content, or choose a
              different year.
            </p>
            <Link
              href={`/subjects/${subject.slug}/past-paper`}
              className="mt-4 inline-block rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Choose again
            </Link>
          </div>
        ) : (
          <>
            <Link
              href={`/subjects/${subject.slug}/past-paper`}
              className="mb-4 inline-block text-sm opacity-60 hover:underline hover:opacity-100"
            >
              ← Change which years are included
            </Link>
            <MockExam
              questions={questions}
              subjectSlug={subject.slug}
              subjectName={subject.name}
              colour={subject.accent}
              durationSeconds={durationSeconds}
              retryHref={`/subjects/${subject.slug}/past-paper`}
              retryLabel={`Try another ${subject.name} past paper`}
            />
          </>
        )}
      </div>
    </main>
  );
}
