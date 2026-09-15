import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../../components/SiteHeader";
import { MoreComingSoon } from "../../../components/MoreComingSoon";
import { MascotDisplay } from "../../../components/MascotDisplay";
import { Icon } from "../../../components/Icon";
import { subjectLessons, subjectsWithLessons } from "../../../lib/lesson-plan";

type Params = { params: Promise<{ subject: string }> };

export function generateStaticParams() {
  return subjectsWithLessons().map((s) => ({ subject: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { subject: slug } = await params;
  const subject = subjectLessons(slug);
  if (!subject) return {};
  return {
    title: `${subject.name} question examples`,
    description: `Ready-made lessons for every ${subject.name} topic, built from Revision Lab's own questions.`,
  };
}

export default async function SubjectLessonsPage({ params }: Params) {
  const { subject: slug } = await params;
  const subject = subjectLessons(slug);
  if (!subject) notFound();

  // Grouped by year the same way the diagram library does it, because a teacher
  // arrives already knowing which year they are teaching — that is the first
  // thing they filter by, so it should be the first thing the page separates on.
  const years = Array.from(new Set(subject.topics.map((t) => t.year)));

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-8">
      <SiteHeader greeting={false} />

      <nav aria-label="Breadcrumb" className="mt-8 flex flex-wrap gap-x-2 gap-y-1 text-sm opacity-60">
        <Link href="/teacher-tools" className="tap-pad hover:underline">
          Teacher tools
        </Link>
        <span aria-hidden="true">/</span>
        <Link href="/teacher-tools/questions" className="tap-pad hover:underline">
          Question examples
        </Link>
      </nav>

      <section className="mt-4 flex items-center gap-4">
        <MascotDisplay mascot={subject.mascot} className="h-16 w-16 shrink-0" />
        <div>
          <h1 className="text-4xl font-bold tracking-tight">{subject.name}</h1>
          <p className="mt-1 text-sm opacity-60">
            {subject.topics.length} topics with enough questions for a lesson
          </p>
        </div>
      </section>

      {years.map((year) => (
        <section key={year} className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] opacity-50">
            {year}
          </h2>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            {subject.topics
              .filter((t) => t.year === year)
              .map((topic) => (
                <li key={topic.slug}>
                  <Link
                    href={`/teacher-tools/questions/${subject.slug}/${topic.slug}`}
                    className="flex h-full min-h-11 items-center gap-3 rounded-2xl border border-white/60 bg-white/70 p-4 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                  >
                    <span
                      aria-hidden="true"
                      className="shrink-0"
                      style={{ color: subject.accent }}
                    >
                      <Icon name={topic.icon} className="h-6 w-6" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-medium leading-snug">
                        {topic.title}
                      </span>
                      <span className="block text-sm opacity-55">
                        {topic.questions} questions
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      ))}

      <MoreComingSoon />
    </main>
  );
}
