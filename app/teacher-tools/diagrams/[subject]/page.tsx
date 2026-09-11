import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../../components/SiteHeader";
import { MoreComingSoon } from "../../../components/MoreComingSoon";
import { Icon } from "../../../components/Icon";
import { MascotDisplay } from "../../../components/MascotDisplay";
import { subjectDiagrams, subjectsWithDiagrams } from "../../../lib/teacher-tools";

// `params` arrives as a Promise in this version of Next — the same gotcha the
// subject pages already document.
type Props = { params: Promise<{ subject: string }> };

export function generateStaticParams() {
  return subjectsWithDiagrams().map((s) => ({ subject: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subject: slug } = await params;
  const subject = subjectDiagrams(slug);
  if (!subject) return { title: "Diagram library" };
  return {
    title: `${subject.name} diagrams`,
    description: `Every ${subject.name} diagram on Revision Lab, topic by topic.`,
  };
}

export default async function SubjectDiagramsPage({ params }: Props) {
  const { subject: slug } = await params;
  const subject = subjectDiagrams(slug);

  // A real subject with no diagrams lands here too, and 404 is the honest
  // answer: there is no page to show, and an empty one would only make someone
  // wonder whether it had failed to load.
  if (!subject) notFound();

  // Topics come back in course order, so grouping by year needs no sorting —
  // just a note of where each year starts.
  const years = [...new Set(subject.topics.map((t) => t.year))];

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-8">
      <SiteHeader greeting={false} />

      {/* ⚠️ `gap-y-4`, AND THE ROW GAP IS NOT COSMETIC.
          This row wraps on a phone, and every crumb carries `.tap-pad`, which
          grows the hit box to 42px with a negative margin so the layout stays
          20px tall. Two wrapped lines 20px apart with 42px boxes overlap by 22
          — and the later link wins the hit test, so a real tap on the visible
          words "Teacher tools" navigated to the SUBJECT page instead. Measured
          and reproduced with a synthetic tap at 320, 360 and 390px.
          This is the footer bug from the 2026-09-08 phone pass, returned in a
          new file: see `.tap-pad` in globals.css, which says in as many words
          that it is only safe on a link standing alone on its line. The row
          gap gives the padded boxes room to not touch. check-security.mjs now
          fails if a wrapping row of `.tap-pad` links has no row gap. */}
      <nav aria-label="Breadcrumb" className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-4 text-sm opacity-60">
        <Link href="/teacher-tools" className="tap-pad hover:underline">
          Teacher tools
        </Link>
        <span aria-hidden="true">›</span>
        <Link href="/teacher-tools/diagrams" className="tap-pad hover:underline">
          Diagram library
        </Link>
      </nav>

      <section className="mt-4 flex items-center gap-5">
        <MascotDisplay mascot={subject.mascot} className="h-16 w-16 shrink-0" />
        <div className="min-w-0">
          <h1 className="text-4xl font-bold tracking-tight">{subject.name}</h1>
          <p className="mt-2 opacity-70">
            {subject.diagramCount} diagram
            {subject.diagramCount === 1 ? "" : "s"} across{" "}
            {subject.topics.length} topic
            {subject.topics.length === 1 ? "" : "s"}.
          </p>
        </div>
      </section>

      {years.map((year) => (
        <section key={year} className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] opacity-50">
            {year}
          </h2>

          <ul className="mt-3 space-y-2.5">
            {subject.topics
              .filter((topic) => topic.year === year)
              .map((topic) => (
                <li key={topic.slug}>
                  <Link
                    href={`/teacher-tools/diagrams/${subject.slug}/${topic.slug}`}
                    className="group flex min-h-14 flex-wrap items-center gap-x-3 gap-y-1 rounded-2xl border border-black/5 p-3.5 transition hover:bg-black/[0.03] sm:gap-x-4 sm:p-4 dark:border-white/10 dark:hover:bg-white/[0.04]"
                  >
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: `${subject.accent}18`,
                        color: subject.accent,
                      }}
                    >
                      <Icon name={topic.icon} className="h-6 w-6" />
                    </span>

                    <span className="min-w-0 flex-1 font-medium">
                      {topic.title}
                    </span>

                    {/* Same wrap-on-a-phone shape the subject stats page uses:
                        the count drops to its own line rather than squeezing
                        the title into a third of the width. */}
                    <span className="w-full pl-14 text-sm opacity-50 sm:w-auto sm:shrink-0 sm:pl-0">
                      {topic.diagrams.length} diagram
                      {topic.diagrams.length === 1 ? "" : "s"}
                    </span>

                    <span
                      aria-hidden="true"
                      className="hidden shrink-0 text-lg opacity-30 transition group-hover:translate-x-1 group-hover:opacity-100 sm:block"
                    >
                      →
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
