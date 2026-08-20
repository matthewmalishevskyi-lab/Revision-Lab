import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MockExam, type ExamQuestion } from "../../../components/MockExam";
import { MascotDisplay } from "../../../components/MascotDisplay";
import { SiteHeader } from "../../../components/SiteHeader";
import { getTopicContent } from "../../../lib/content";
import { shuffle } from "../../../lib/shuffle";
import { getSubject } from "../../../lib/subjects";

// A STATIC segment ("exam") living alongside the DYNAMIC one ([topic]) in the
// same folder. Next.js checks static segments first, so /subjects/maths/exam
// reaches this file rather than being treated as topic slug "exam" — the same
// pattern /subjects/science already uses to beat the [subject] page one level
// up. No topic is allowed to be slugged "exam" for exactly this reason.
//
// Deliberately no generateStaticParams here, unlike its sibling pages. This
// page needs a FRESH random set of questions on every visit — that's the
// whole point of "another mock exam" — and a statically pre-rendered page
// would freeze on whichever questions were picked at build time. See
// `dynamic = "force-dynamic"` below.

export const dynamic = "force-dynamic";

// How many questions, and how long to answer them. Not trying to reproduce
// any specific exam board's real timing — boards and papers vary — just
// enough of both to feel like a proper sitting rather than a couple of
// practice questions.
const QUESTION_COUNT = 20;
const DURATION_SECONDS = 20 * 60;

type Props = { params: Promise<{ subject: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subject: slug } = await params;
  const subject = getSubject(slug);
  if (!subject) return { title: "Not found" };

  return {
    title: `${subject.name} test`,
    description: `A timed, mixed-topic practice set for GCSE ${subject.name} — ${QUESTION_COUNT} questions in ${DURATION_SECONDS / 60} minutes.`,
    // A fresh random set every visit means there's no one stable page for a
    // search engine to index — the same reasoning that keeps the dashboard
    // and login pages out of search results, just for a different cause.
    robots: { index: false, follow: true },
  };
}

// Every practice question across every WRITTEN topic in this subject, each
// tagged with where it came from. A topic with no content yet (content
// coming soon) simply contributes nothing — not an error, the same way an
// empty optional section on a topic page isn't an error.
function collectQuestionPool(subjectSlug: string, years: { topics: { slug: string; title: string }[] }[]): ExamQuestion[] {
  return years.flatMap((group) =>
    group.topics.flatMap((topic) => {
      const content = getTopicContent(subjectSlug, topic.slug);
      return (content?.practice ?? []).map((q) => ({
        ...q,
        topicSlug: topic.slug,
        topicTitle: topic.title,
      }));
    }),
  );
}

export default async function ExamPage({ params }: Props) {
  const { subject: slug } = await params;
  const subject = getSubject(slug);
  if (!subject) notFound();

  const pool = collectQuestionPool(subject.slug, subject.years);
  const questions = shuffle(pool).slice(0, QUESTION_COUNT);

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
        <span>Test</span>
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
            {subject.name} test
          </h1>
        </div>
      </section>

      <div className="mt-8">
        {questions.length === 0 ? (
          <div className="rounded-3xl border border-white/60 bg-white/70 p-8 text-center shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
            <p className="opacity-70">
              No practice questions have been written for {subject.name} yet,
              so there&apos;s nothing to build an exam from. Check back once
              some topics have content.
            </p>
            <Link
              href={`/subjects/${subject.slug}`}
              className="mt-4 inline-block rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Back to {subject.name}
            </Link>
          </div>
        ) : (
          <MockExam
            questions={questions}
            subjectSlug={subject.slug}
            subjectName={subject.name}
            colour={subject.accent}
            durationSeconds={DURATION_SECONDS}
          />
        )}
      </div>
    </main>
  );
}
