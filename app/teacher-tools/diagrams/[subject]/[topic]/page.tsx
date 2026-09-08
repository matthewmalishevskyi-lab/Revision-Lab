import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../../../components/SiteHeader";
import { MoreComingSoon } from "../../../../components/MoreComingSoon";
import { DIAGRAMS } from "../../../../components/diagrams";
import { subjectsWithDiagrams, topicDiagrams } from "../../../../lib/teacher-tools";

type Props = { params: Promise<{ subject: string; topic: string }> };

export function generateStaticParams() {
  return subjectsWithDiagrams().flatMap((subject) =>
    subject.topics.map((topic) => ({
      subject: subject.slug,
      topic: topic.slug,
    })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subject: subjectSlug, topic: topicSlug } = await params;
  const found = topicDiagrams(subjectSlug, topicSlug);
  if (!found) return { title: "Diagram library" };
  return {
    title: `${found.topic.title} diagrams`,
    description: `The ${found.topic.title} diagrams from Revision Lab's ${found.subject.name} content.`,
  };
}

export default async function TopicDiagramsPage({ params }: Props) {
  const { subject: subjectSlug, topic: topicSlug } = await params;
  const found = topicDiagrams(subjectSlug, topicSlug);
  if (!found) notFound();

  const { subject, topic } = found;

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-8">
      <SiteHeader greeting={false} />

      <nav
        aria-label="Breadcrumb"
        className="mt-8 flex flex-wrap items-center gap-x-2 text-sm opacity-60"
      >
        <Link href="/teacher-tools" className="tap-pad hover:underline">
          Teacher tools
        </Link>
        <span aria-hidden="true">›</span>
        <Link href="/teacher-tools/diagrams" className="tap-pad hover:underline">
          Diagram library
        </Link>
        <span aria-hidden="true">›</span>
        <Link
          href={`/teacher-tools/diagrams/${subject.slug}`}
          className="tap-pad hover:underline"
        >
          {subject.name}
        </Link>
      </nav>

      <section className="mt-4">
        <p
          className="text-sm font-semibold uppercase tracking-[0.14em]"
          style={{ color: subject.accent }}
        >
          {subject.name} · {topic.year}
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">{topic.title}</h1>
        <p className="mt-3 opacity-70">
          {topic.diagrams.length} diagram
          {topic.diagrams.length === 1 ? "" : "s"} on this topic. Each one is
          captioned with the part of the topic it belongs to.
        </p>
      </section>

      {/* ── ONE COLUMN, ON PURPOSE ────────────────────────────────────────────
          The topic page itself puts diagrams two-up beside the text they
          illustrate, because there they are supporting something. Here they
          ARE the thing: this page exists so one can go on a whiteboard, so
          each gets the full width of the column and as much height as it
          wants. Two-up would make every diagram half the size for no reason.
      */}
      <ul className="mt-9 space-y-6">
        {topic.diagrams.map((entry, index) => {
          const Diagram = DIAGRAMS[entry.name];
          return (
            // The key includes the index because the same diagram can
            // legitimately appear under two different headings in one topic.
            <li
              key={`${entry.name}-${index}`}
              className="overflow-hidden rounded-3xl border border-white/60 bg-white/70 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
            >
              <div
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-black/5 px-6 py-4 dark:border-white/10"
              >
                <h2 className="font-semibold">{entry.heading}</h2>
                {/* The registry name, quietly. A teacher never needs it — but
                    when one of these is wrong, "which picture?" is the first
                    question, and the answer is right there on the page. */}
                <code className="text-xs opacity-40">{entry.name}</code>
              </div>

              {/* White behind every diagram in both themes: they are drawn as
                  dark strokes on a light ground, and a diagram is also the one
                  thing on this site somebody might photograph off a screen.

                  ⚠️ CAPPED AND CENTRED, not stretched to the column. These are
                  drawn on a ~220-unit canvas with label text sized for it, so
                  at the full 976px of this column the word "diameter" came out
                  larger than the page's own heading — technically bigger, and
                  visibly wrong. 36rem is about half again the size a topic page
                  gives them: comfortably readable from the back of a room
                  without the labels swamping the drawing. */}
              <div className="bg-white px-6 py-8">
                <div className="mx-auto max-w-[36rem]">
                  <Diagram />
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <p className="mt-8 text-sm opacity-60">
        These come straight from the{" "}
        <Link
          href={`/subjects/${subject.slug}/${topic.slug}`}
          className="tap-pad font-medium underline underline-offset-2"
        >
          {topic.title} revision page
        </Link>
        , where each one sits under the point it explains.
      </p>

      <MoreComingSoon />
    </main>
  );
}
