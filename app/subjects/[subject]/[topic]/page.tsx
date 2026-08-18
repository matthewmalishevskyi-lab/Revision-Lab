import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Flashcards } from "../../../components/Flashcards";
import { HigherBadge, HigherNotice } from "../../../components/HigherBadge";
import { Icon } from "../../../components/Icon";
import { Practice } from "../../../components/Practice";
import { LadderCompanion } from "../../../components/LadderCompanion";
import { ContentNotice } from "../../../components/ContentNotice";
import { FocusTimer } from "../../../components/FocusTimer";
import { SiteHeader } from "../../../components/SiteHeader";
import { StudyTimer } from "../../../components/StudyTimer";
import { TopicNav, type NavSection } from "../../../components/TopicNav";
import {
  StructuredData,
  learningResourceSchema,
} from "../../../components/StructuredData";
import { getTopicContent } from "../../../lib/content";
import { ACCOUNTS_ENABLED, SITE_NAME, SITE_URL } from "../../../lib/site";
import { getViewer } from "../../../lib/viewer";
import { getTopic, SUBJECTS, yearStyle } from "../../../lib/subjects";

// Two variables in the URL now: /subjects/[subject]/[topic].
// One file, and every topic across every subject has a real page.

export function generateStaticParams() {
  // A nested loop that flattens the data into every valid combination.
  // `flatMap` is `map` followed by "unwrap one level of nesting" — handy when
  // each item produces several results rather than exactly one.
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

  const content = getTopicContent(subjectSlug, topicSlug);

  // Use the real topic summary as the search description where we have one.
  // Google shows roughly 155 characters, so anything longer gets cut off —
  // hence trimming to a sensible length at a word boundary.
  const description = content
    ? truncate(content.summary, 155)
    : `GCSE ${found.subject.name} revision: ${found.topic.title}. Key facts, flashcards and exam technique.`;

  return {
    title: `${found.topic.title} · GCSE ${found.subject.name}`,
    description,
    alternates: { canonical: `/subjects/${subjectSlug}/${topicSlug}` },
    openGraph: {
      title: `${found.topic.title} · GCSE ${found.subject.name}`,
      description,
      url: `/subjects/${subjectSlug}/${topicSlug}`,
    },
  };
}

// Cuts text to a maximum length without slicing a word in half.
function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(" ")) + "…";
}

export default async function TopicPage({ params }: Props) {
  const { subject: subjectSlug, topic: topicSlug } = await params;
  const found = getTopic(subjectSlug, topicSlug);

  if (!found) notFound();

  const { subject, year, topic } = found;
  const style = yearStyle(year);

  // Topics that have been written show their content; the rest still show the
  // coming-soon panel. That means content can be added one topic at a time
  // without the site ever being broken in between.
  const content = getTopicContent(subject.slug, topic.slug);

  // Who is reading this. The header asks the same question, and `getViewer`
  // makes sure that costs one lookup per request rather than two.
  const viewer = ACCOUNTS_ENABLED ? await getViewer() : null;

  // Does anything on this page carry the Higher tier flag? Worked out once here
  // rather than checked in three places further down.
  const hasHigherContent = Boolean(
    content &&
      (content.keyFacts.some((b) => b.higherOnly) ||
        content.workedExamples?.some((e) => e.higherOnly) ||
        content.practice?.some((q) => q.higherOnly)),
  );

  // The jump menu, built from what this page actually contains.
  //
  // Derived rather than hard-coded, so a topic without worked examples never
  // gets a link to a section that isn't there. Same principle as the sections
  // themselves being conditional — one source of truth, no way for the menu and
  // the page to disagree.
  const sections: NavSection[] = content
    ? [
        { id: "key-facts", label: "Key facts" },
        ...(content.workedExamples
          ? [{ id: "worked-examples", label: "Worked examples" }]
          : []),
        ...(content.misconceptions
          ? [{ id: "common-mistakes", label: "Common mistakes" }]
          : []),
        ...(content.practice ? [{ id: "practice", label: "Practice" }] : []),
        { id: "definitions", label: "Definitions" },
        { id: "exam-technique", label: "Exam technique" },
      ]
    : [];

  return (
    // This wrapper exists purely so the ladder can be `absolute` against the
    // FULL height of the page. `relative` on a parent is what an absolutely
    // positioned child measures itself against — without it the ladder would
    // measure against the whole document and sit in the wrong place.
    // It also sits OUTSIDE the max-width content column, so the ladder can live
    // in the margin rather than on top of the text.
    <div className="relative">
      {/* Invisible to visitors — this tells search engines what kind of page
          this is, so it can appear as a learning resource rather than just
          another web page. */}
      <StructuredData
        data={learningResourceSchema({
          siteUrl: SITE_URL,
          siteName: SITE_NAME,
          name: `${topic.title} — GCSE ${subject.name}`,
          description: content
            ? content.summary
            : `GCSE ${subject.name} revision: ${topic.title}.`,
          path: `/subjects/${subject.slug}/${topic.slug}`,
          subject: subject.name,
        })}
      />

      {/* The subject's mascot, climbing a ladder that runs the whole length of
          the page. Decorative only, so it's hidden from screen readers and can
          never intercept a click. */}
      <LadderCompanion mascot={subject.mascot} colour={style.text} />

      {/* Draws nothing — it counts how long this page is genuinely being looked
          at.

          Only rendered for someone who is LOGGED IN, and that condition matters
          more than it looks. The Server Action already refuses to record for a
          logged-out visitor, so this was safe but wasteful: every anonymous
          reader was firing a request at the server every 30 seconds for it to
          be thrown away. On a page anyone can find from Google, that is a lot
          of work to do for nothing. Checking here means the request is never
          made in the first place. */}
      {content && viewer && (
        <StudyTimer subject={subject.slug} topic={topic.slug} />
      )}

      <main className="mx-auto w-full max-w-4xl px-6 py-8">
        <SiteHeader greeting={false} />

        {/* Breadcrumbs: where you are, and a way back up. Cheap to add, and
            people rely on them more than you'd think. */}
        <nav className="mt-8 flex flex-wrap items-center gap-2 text-sm opacity-60">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span aria-hidden="true">›</span>
          <Link href={`/subjects/${subject.slug}`} className="hover:underline">
            {subject.name}
          </Link>
          <span aria-hidden="true">›</span>
          <span>{year}</span>
        </nav>

        <section className="mt-6 overflow-hidden rounded-3xl border border-white/60 bg-white/70 shadow-[0_20px_50px_-30px_rgba(22,24,43,0.5)] backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
          <div
            className="flex items-center gap-5 px-8 py-8"
            style={{ backgroundImage: style.gradient }}
          >
            <span
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/70"
              style={{ color: style.text }}
            >
              <Icon name={topic.icon} className="h-9 w-9" />
            </span>
            <div>
              <p
                className="text-sm font-semibold uppercase tracking-wider opacity-70"
                style={{ color: style.text }}
              >
                {subject.name} · {year}
              </p>
              <h1
                className="text-4xl font-bold tracking-tight"
                style={{ color: style.text }}
              >
                {topic.title}
              </h1>
            </div>
          </div>

          <div className="px-8 py-10">
            {content ? (
              <>
                <p className="max-w-prose text-lg leading-relaxed opacity-80">
                  {content.summary}
                </p>
                {/* Shown once, before the first badge, so the reader meets the
                    explanation before they meet the label. */}
                {hasHigherContent && <HigherNotice />}
              </>
            ) : (
              <>
                <h2 className="text-2xl font-semibold">Content coming soon</h2>
                <p className="mt-3 max-w-prose opacity-70">
                  This topic has a home and a working link — the revision material
                  itself hasn&apos;t been written yet. The plan is facts,
                  flashcards and exam technique for each topic.
                </p>
                <p className="mt-3 max-w-prose opacity-70">
                  Nothing here is a dead end on purpose: the structure exists
                  first, so content can be dropped straight in without touching
                  any code.
                </p>
              </>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/subjects/${subject.slug}`}
                className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                ← Back to {subject.name}
              </Link>
              <Link
                href="/"
                className="rounded-xl border border-black/10 px-5 py-3 text-sm font-semibold transition hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
              >
                All subjects
              </Link>
            </div>
          </div>
        </section>

        {/* A Pomodoro-style timer, for anyone who wants some structure to
            their revising — see FocusTimer.tsx for why it doesn't record
            study time itself (StudyTimer above already does, silently).
            Only shown once there's real content to focus on; the "coming
            soon" panel has nothing to time. */}
        {content && <FocusTimer colour={style.text} />}

        {/* Jump straight to a section. Sticks to the top of the window once you
            scroll past it, so it's reachable from anywhere on the page. */}
        <TopicNav sections={sections} colour={style.text} />

        {/* ---------- The revision content ---------- */}
        {content && (
          <>
            {/* Key facts — deliberately stripped to the bare statements. This is
                the part you'd photograph the night before. */}
            {/* `scroll-mt-20` leaves 5rem of space above the heading when the
                page jumps here, so the sticky menu doesn't sit on top of it. */}
            <section id="key-facts" className="mt-8 scroll-mt-20">
              <h2 className="text-2xl font-bold tracking-tight">Key facts</h2>
              <div className="mt-4 space-y-4">
                {content.keyFacts.map((block) => (
                  <div
                    key={block.heading}
                    className="rounded-2xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <h3 className="flex flex-wrap items-center gap-3 text-lg font-semibold">
                    {block.heading}
                    {block.higherOnly && <HigherBadge />}
                  </h3>
                    <ul className="mt-3 space-y-2">
                      {block.points.map((point) => (
                        <li key={point} className="flex gap-3 leading-relaxed">
                          <span
                            aria-hidden="true"
                            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ backgroundColor: style.text }}
                          />
                          <span className="opacity-80">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Worked examples — the method actually being applied.
                `content.workedExamples &&` means the whole section vanishes on
                topics that don't have any yet, rather than showing an empty
                box. That's what makes the optional fields safe. */}
            {content.workedExamples && (
              <section id="worked-examples" className="mt-10 scroll-mt-20">
                <h2 className="text-2xl font-bold tracking-tight">
                  Worked examples
                </h2>
                <p className="mt-1 opacity-60">
                  Follow the working, then cover it up and try the same question
                  yourself.
                </p>
                <div className="mt-4 space-y-4">
                  {content.workedExamples.map((example) => (
                    <div
                      key={example.question}
                      className="overflow-hidden rounded-2xl border border-white/60 bg-white/70 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
                    >
                      <div
                        className="px-6 py-4"
                        style={{ backgroundColor: `${style.text}12` }}
                      >
                        {example.higherOnly && (
                          <p className="mb-2">
                            <HigherBadge />
                          </p>
                        )}
                        <p className="whitespace-pre-line font-medium">
                          {example.question}
                        </p>
                      </div>
                      <ol className="space-y-2.5 px-6 py-5">
                        {example.steps.map((step, stepIndex) => (
                          <li key={step} className="flex gap-3 leading-relaxed">
                            <span
                              aria-hidden="true"
                              className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                              style={{ backgroundColor: style.text }}
                            >
                              {stepIndex + 1}
                            </span>
                            <span className="opacity-80">{step}</span>
                          </li>
                        ))}
                      </ol>
                      <p
                        className="border-t border-black/5 px-6 py-4 font-semibold dark:border-white/10"
                        style={{ color: style.text }}
                      >
                        Answer: {example.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Common mistakes */}
            {content.misconceptions && (
              <section id="common-mistakes" className="mt-10 scroll-mt-20">
                <h2 className="text-2xl font-bold tracking-tight">
                  Common mistakes
                </h2>
                <p className="mt-1 opacity-60">
                  The wrong ideas that cost the most marks.
                </p>
                <div className="mt-4 space-y-3">
                  {content.misconceptions.map((item) => (
                    <div
                      key={item.wrong}
                      className="rounded-2xl border border-white/60 bg-white/70 p-5 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
                    >
                      <p className="flex gap-3 font-medium text-red-700 dark:text-red-400">
                        <span aria-hidden="true">&times;</span>
                        <span>{item.wrong}</span>
                      </p>
                      <p className="mt-2 flex gap-3 leading-relaxed">
                        <span
                          aria-hidden="true"
                          className="font-bold text-green-700 dark:text-green-400"
                        >
                          &#10003;
                        </span>
                        <span className="opacity-80">{item.right}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Practice questions */}
            {content.practice && (
              <section id="practice" className="mt-10 scroll-mt-20">
                <h2 className="text-2xl font-bold tracking-tight">
                  Practice questions
                </h2>
                <p className="mt-1 opacity-60">
                  Answer before you reveal. Testing yourself beats rereading.
                </p>
                <div className="mt-4">
                  <Practice
                    questions={content.practice}
                    colour={style.text}
                    subject={subject.slug}
                    topic={topic.slug}
                  />
                </div>
              </section>
            )}

            {/* Flashcards */}
            <section id="definitions" className="mt-10 scroll-mt-20">
              <h2 className="text-2xl font-bold tracking-tight">Definitions</h2>
              <p className="mt-1 opacity-60">
                Test yourself — say the answer out loud before you flip.
              </p>
              <div className="mt-4 rounded-2xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
                <Flashcards
                  cards={content.flashcards}
                  subject={subject.slug}
                  topic={topic.slug}
                />
              </div>
            </section>

            {/* Exam technique */}
            <section id="exam-technique" className="mt-10 scroll-mt-20">
              <h2 className="text-2xl font-bold tracking-tight">
                Exam technique
              </h2>
              <p className="mt-1 opacity-60">
                How to avoid losing marks you have already earned.
              </p>
              <ol className="mt-4 space-y-3">
                {content.examTips.map((tip, index) => (
                  <li
                    key={tip.tip}
                    className="flex gap-4 rounded-2xl border border-white/60 bg-white/70 p-5 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                      style={{
                        backgroundColor: style.text,
                        color: "white",
                      }}
                    >
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold">{tip.tip}</h3>
                      <p className="mt-1 leading-relaxed opacity-75">
                        {tip.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          </>
        )}

        {/* An honest note about what this material is and is not. Deliberately
            at the foot: someone here to revise should reach the revision
            first, and someone deciding whether to trust it will scroll. */}
        {content && <ContentNotice />}

        {/* The rest of this year's topics, so you can carry on without going
            back and forth. */}
        <section className="mt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider opacity-50">
            More in {year}
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {(subject.years.find((g) => g.year === year)?.topics ?? [])
              .filter((t) => t.slug !== topic.slug)
              .map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/subjects/${subject.slug}/${t.slug}`}
                    className="group flex items-center gap-4 rounded-2xl border border-black/5 bg-white px-4 py-3.5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/10"
                  >
                    <span className="shrink-0" style={{ color: style.text }}>
                      <Icon name={t.icon} className="h-5 w-5" />
                    </span>
                    <span className="flex-1 font-medium">{t.title}</span>
                    <span
                      aria-hidden="true"
                      className="opacity-40 transition group-hover:translate-x-0.5 group-hover:opacity-80"
                    >
                      ›
                    </span>
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
