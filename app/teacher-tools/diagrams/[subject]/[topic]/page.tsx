import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../../../components/SiteHeader";
import { MoreComingSoon } from "../../../../components/MoreComingSoon";
import { DIAGRAMS } from "../../../../components/diagrams";
import { DIAGRAM_NOTES } from "../../../../components/diagrams/notes";
import { interactiveDiagram } from "../../../../components/diagrams/interactive";
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
      <nav
        aria-label="Breadcrumb"
        className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-4 text-sm opacity-60"
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
          // The draggable version wherever there is one. This page exists to
          // put a diagram on the board in front of a class, which is the single
          // best place on the site for one: a teacher can move a point and ask
          // what happens to the angle, instead of asserting that it holds.
          const Draggable = interactiveDiagram(entry.name);
          const Diagram = Draggable ?? DIAGRAMS[entry.name];
          const note = DIAGRAM_NOTES[entry.name];
          return (
            // The key includes the index because the same diagram can
            // legitimately appear under two different headings in one topic.
            <li
              key={`${entry.name}-${index}`}
              // The id is what the library's search links to, so a result
              // lands on the diagram rather than the top of a page holding
              // fourteen of them. Only the first card for a given name gets
              // it: a duplicate id is invalid HTML, and the browser would
              // jump to whichever came first anyway.
              id={topic.diagrams.findIndex((d) => d.name === entry.name) === index ? entry.name : undefined}
              className="scroll-mt-6 overflow-hidden rounded-3xl border border-white/60 bg-white/70 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
            >
              <div
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-black/5 px-6 py-4 dark:border-white/10"
              >
                {/* ⚠️ THE DIAGRAM'S OWN NAME, not the heading it is filed
                    under. The key-fact heading is where it appears in the
                    topic, which is a different fact and changes with the
                    content: the same picture was called "Extraction of metals"
                    here and something else on the next page, and a teacher
                    putting one on a board could not say what it was called.
                    The heading is still shown, underneath, because knowing
                    which part of the topic it belongs to is genuinely useful
                    — it is just not the name. */}
                <h2 className="font-semibold">
                  {note.title}
                  {Draggable ? (
                    <span className="ml-2 rounded-md bg-blue-600/10 px-1.5 py-0.5 align-middle text-[11px] font-semibold uppercase tracking-wide text-blue-700 dark:bg-blue-400/15 dark:text-blue-300">
                      Drag me
                    </span>
                  ) : null}
                </h2>
                {/* The registry name, quietly. A teacher never needs it — but
                    when one of these is wrong, "which picture?" is the first
                    question, and the answer is right there on the page. */}
                <code className="text-xs opacity-40">{entry.name}</code>
                <p className="w-full text-sm opacity-60">
                  From &ldquo;{entry.heading}&rdquo;
                </p>
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
              {/* `diagram-light` is what makes this panel actually light: the
                  white was already here, but the INK still followed the page's
                  theme, so in dark mode every diagram in this library drew
                  near-white on white and could not be seen at all. See
                  "Diagram ink" in globals.css. */}
              <div className="diagram-light bg-white px-6 py-8">
                <div className="mx-auto max-w-[36rem]">
                  <Diagram />
                </div>
              </div>

              {/* WHY it works, at the bottom, outside the white panel. Outside
                  because the panel is the thing somebody photographs off a
                  screen or projects onto a board, and a paragraph of prose in
                  the middle of that is the first thing they would want gone.
                  The reason belongs to the reader, not to the projection. */}
              <div className="border-t border-black/5 px-6 py-4 text-sm leading-relaxed opacity-75 dark:border-white/10">
                {note.why}
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
