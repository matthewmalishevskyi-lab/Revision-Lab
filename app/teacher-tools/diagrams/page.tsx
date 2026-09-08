import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../components/SiteHeader";
import { MoreComingSoon } from "../../components/MoreComingSoon";
import { MascotDisplay } from "../../components/MascotDisplay";
import { subjectsWithDiagrams } from "../../lib/teacher-tools";

export const metadata: Metadata = {
  title: "Diagram library",
  description:
    "Every diagram on Revision Lab, gathered by subject and topic.",
};

export default function DiagramLibraryPage() {
  const subjects = subjectsWithDiagrams();

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-8">
      <SiteHeader greeting={false} />

      <nav aria-label="Breadcrumb" className="mt-8 text-sm opacity-60">
        <Link href="/teacher-tools" className="tap-pad hover:underline">
          Teacher tools
        </Link>
      </nav>

      <section className="mt-4">
        <h1 className="text-4xl font-bold tracking-tight">Diagram library</h1>
        <p className="mt-3 max-w-2xl opacity-70">
          Pick a subject, then a topic. Only subjects that actually have
          diagrams are listed, so nothing here is a dead end.
        </p>
      </section>

      {/* Two columns from `sm` up. Each card carries the subject's own gradient
          as a thin spine rather than filling the card with it: fifteen full
          gradient cards next to each other is the homepage, and this page has a
          different job — scanning a list, not choosing a subject to revise. */}
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {subjects.map((subject) => (
          <li key={subject.slug}>
            <Link
              href={`/teacher-tools/diagrams/${subject.slug}`}
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
                <span className="mt-0.5 block text-sm opacity-60">
                  {subject.diagramCount} diagram
                  {subject.diagramCount === 1 ? "" : "s"} across{" "}
                  {subject.topics.length} topic
                  {subject.topics.length === 1 ? "" : "s"}
                </span>
              </span>
              <span
                aria-hidden="true"
                className="shrink-0 pr-5 text-xl opacity-40 transition group-hover:translate-x-1 group-hover:opacity-100"
              >
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <MoreComingSoon />
    </main>
  );
}
