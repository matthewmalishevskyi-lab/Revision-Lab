import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../components/SiteHeader";
import { MoreComingSoon } from "../../components/MoreComingSoon";
import { MascotDisplay } from "../../components/MascotDisplay";
import { lessonLibraryTotals, subjectsWithLessons } from "../../lib/lesson-plan";

export const metadata: Metadata = {
  title: "Question examples",
  description:
    "A ready-made lesson for any GCSE topic, built from Revision Lab's own questions and ordered from recall to the hardest question the topic has.",
};

export default function QuestionExamplesPage() {
  const subjects = subjectsWithLessons();
  const totals = lessonLibraryTotals();

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-8">
      <SiteHeader greeting={false} />

      <nav aria-label="Breadcrumb" className="mt-8 text-sm opacity-60">
        <Link href="/teacher-tools" className="tap-pad hover:underline">
          Teacher tools
        </Link>
      </nav>

      <section className="mt-4">
        <h1 className="text-4xl font-bold tracking-tight">Question examples</h1>
        <p className="mt-3 max-w-2xl opacity-70">
          Pick a subject, then a topic, and get a lesson&apos;s worth of questions
          already in order — a recall starter, a worked example to model on the
          board, practice that builds, and an exit ticket. Every question carries
          its mark tariff, so the ramp is a real one rather than a guess.
        </p>
        <p className="mt-3 max-w-2xl text-sm opacity-55">
          {totals.topics} topics across {totals.subjects} subjects,
          drawn from {totals.questions.toLocaleString()} questions already on the
          site. Nothing here is generated fresh — it is the revision content,
          arranged for a classroom.
        </p>
      </section>

      <h2 className="mt-10 text-sm font-semibold uppercase tracking-[0.14em] opacity-50">
        Browse by subject
      </h2>

      <ul className="mt-4 grid gap-4 sm:grid-cols-2">
        {subjects.map((subject) => (
          <li key={subject.slug}>
            <Link
              href={`/teacher-tools/questions/${subject.slug}`}
              className="group flex h-full items-center gap-4 overflow-hidden rounded-2xl border border-white/60 bg-white/70 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5"
            >
              <span
                aria-hidden="true"
                className="h-full w-1.5 shrink-0 self-stretch"
                style={{ backgroundImage: subject.gradient }}
              />
              <MascotDisplay
                mascot={subject.mascot}
                className="my-4 h-12 w-12 shrink-0"
              />
              <span className="min-w-0 flex-1 py-4 pr-4">
                <span className="block font-semibold">{subject.name}</span>
                <span className="block text-sm opacity-60">
                  {subject.topics.length} topics ·{" "}
                  {subject.questionCount.toLocaleString()} questions
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <MoreComingSoon />
    </main>
  );
}
