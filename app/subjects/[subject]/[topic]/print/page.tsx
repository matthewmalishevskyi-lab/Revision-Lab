import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PrintButton } from "../../../../components/PrintButton";
import { getTopicContent } from "../../../../lib/content";
import { SITE_URL } from "../../../../lib/site";
import { getTopic, SUBJECTS } from "../../../../lib/subjects";

// A stripped-down, print-friendly version of a topic page: just the notes,
// none of the site chrome.
//
// WHY A SEPARATE ROUTE RATHER THAN A PRINT STYLESHEET ON THE ORDINARY PAGE
//
// The ordinary topic page is built for revising ON screen: a sticky jump
// menu, flip-to-reveal flashcards, a focus timer, a climbing mascot in the
// margin. None of that means anything on paper — a flashcard you can't click
// just shows its front, a sticky menu becomes a stray floating box, and a
// climbing mascot wastes ink. Hiding all of it with `print:hidden` classes
// sprinkled through that page would work, but it would mean maintaining two
// designs tangled together in one file, and one more thing to remember every
// time that page changes.
//
// A separate route keeps the two concerns apart: the ordinary page stays
// exactly as it is, and this one has exactly one job — read the same content,
// lay it out for A4, and get out of the way.
//
// Deliberately excludes the interactive practice questions and the flashcard
// flip cards. This is a sheet to read and revise from, not a page to answer
// questions on — there's nowhere on paper for the site to mark an answer.

export function generateStaticParams() {
  return SUBJECTS.flatMap((subject) =>
    subject.years.flatMap((group) =>
      group.topics.map((topic) => ({
        subject: subject.slug,
        topic: topic.slug,
      })),
    ),
  );
}

type Props = { params: Promise<{ subject: string; topic: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subject: subjectSlug, topic: topicSlug } = await params;
  const found = getTopic(subjectSlug, topicSlug);
  if (!found) return { title: "Not found" };

  return {
    title: `${found.topic.title} — printable revision sheet`,
    // A printable sheet is a duplicate of the real topic page's content in a
    // different layout, not a new page worth its own listing — same
    // reasoning as the mock exam's `robots.index: false` a few files over.
    robots: { index: false, follow: true },
  };
}

export default async function PrintSheetPage({ params }: Props) {
  const { subject: subjectSlug, topic: topicSlug } = await params;
  const found = getTopic(subjectSlug, topicSlug);
  if (!found) notFound();

  const { subject, year, topic } = found;
  const content = getTopicContent(subject.slug, topic.slug);

  // Nothing written yet for this topic means nothing to print — the same
  // "coming soon" case the ordinary topic page handles, just with a link
  // back instead of trying to lay out an empty sheet.
  if (!content) notFound();

  return (
    // The OUTER div spans the full viewport width in `bg-white` — a plain
    // white page from edge to edge, unconditionally, even in dark mode. This
    // page IS the sheet of paper, on screen or off, and dark mode would
    // otherwise paint black text onto the site's dark background outside the
    // centred column, which is unreadable rather than just off-brand.
    <div className="min-h-screen bg-white text-black print:min-h-0">
    <main className="mx-auto w-full max-w-3xl px-6 py-10 print:max-w-none print:px-0 print:py-0">
      {/* On-screen only: a way back, and the one button that matters here.
          `print:hidden` is what stops both from wasting a strip at the top
          of the printed page. */}
      <div className="flex items-center justify-between print:hidden">
        <Link
          href={`/subjects/${subject.slug}/${topic.slug}`}
          className="text-sm font-medium text-blue-700 hover:underline"
        >
          ← Back to {topic.title}
        </Link>
        <PrintButton />
      </div>

      <header className="mt-6 border-b-2 border-black pb-4 print:mt-0">
        <p className="text-sm font-semibold uppercase tracking-wider opacity-70">
          GCSE {subject.name} · {year}
        </p>
        <h1 className="text-3xl font-bold tracking-tight">
          {topic.title} — revision sheet
        </h1>
        <p className="mt-2 text-xs opacity-60">
          {SITE_URL.replace(/^https?:\/\//, "")}/subjects/{subject.slug}/
          {topic.slug}
        </p>
      </header>

      {/* ---------- Key facts ---------- */}
      <section className="mt-6 break-inside-avoid">
        <h2 className="text-lg font-bold uppercase tracking-wide">
          Key facts
        </h2>
        <div className="mt-2 space-y-4">
          {content.keyFacts.map((block) => (
            <div key={block.heading} className="break-inside-avoid">
              <h3 className="font-semibold">
                {block.heading}
                {block.higherOnly && (
                  <span className="ml-2 text-xs font-normal uppercase tracking-wide opacity-60">
                    (Higher tier)
                  </span>
                )}
              </h3>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-sm leading-relaxed">
                {block.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Worked examples ---------- */}
      {content.workedExamples && (
        <section className="mt-6 break-inside-avoid">
          <h2 className="text-lg font-bold uppercase tracking-wide">
            Worked examples
          </h2>
          <div className="mt-2 space-y-4">
            {content.workedExamples.map((example) => (
              <div key={example.question} className="break-inside-avoid">
                <p className="whitespace-pre-line text-sm font-medium">
                  {example.question}
                  {example.higherOnly && (
                    <span className="ml-2 text-xs font-normal uppercase tracking-wide opacity-60">
                      (Higher tier)
                    </span>
                  )}
                </p>
                <ol className="mt-1 list-decimal space-y-1 pl-5 text-sm leading-relaxed">
                  {example.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
                <p className="mt-1 text-sm font-semibold">
                  Answer: {example.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ---------- Common mistakes ---------- */}
      {content.misconceptions && (
        <section className="mt-6 break-inside-avoid">
          <h2 className="text-lg font-bold uppercase tracking-wide">
            Common mistakes
          </h2>
          <ul className="mt-2 space-y-2 text-sm leading-relaxed">
            {content.misconceptions.map((item) => (
              <li key={item.wrong} className="break-inside-avoid">
                <span className="font-medium">✗ {item.wrong}</span>
                <br />
                <span>✓ {item.right}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ---------- Definitions ----------
          Plain term/definition pairs — not the flip-card component, which
          only makes sense as something you click. */}
      <section className="mt-6 break-inside-avoid">
        <h2 className="text-lg font-bold uppercase tracking-wide">
          Definitions
        </h2>
        <dl className="mt-2 space-y-2 text-sm leading-relaxed">
          {content.flashcards.map((card) => (
            <div key={card.term} className="break-inside-avoid">
              <dt className="font-semibold">{card.term}</dt>
              <dd className="pl-4">{card.definition}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ---------- Exam technique ---------- */}
      <section className="mt-6 break-inside-avoid">
        <h2 className="text-lg font-bold uppercase tracking-wide">
          Exam technique
        </h2>
        <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          {content.examTips.map((tip) => (
            <li key={tip.tip} className="break-inside-avoid">
              <span className="font-semibold">{tip.tip}</span> — {tip.detail}
            </li>
          ))}
        </ol>
      </section>

      <p className="mt-8 border-t border-black/20 pt-3 text-xs opacity-50 print:mt-6">
        Printed from Revision Lab, a free GCSE revision site. Exam boards and
        schools vary — check this against your own course.
      </p>
    </main>
    </div>
  );
}
