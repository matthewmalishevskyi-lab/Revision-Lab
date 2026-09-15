import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../../../components/SiteHeader";
import { MoreComingSoon } from "../../../../components/MoreComingSoon";
import { PrintButton } from "../../../../components/PrintButton";
import { buildLessonPlan, subjectsWithLessons } from "../../../../lib/lesson-plan";
import { LessonSummaryLine, LessonView } from "./LessonView";
import { PresentMode } from "./PresentMode";
import { RunningOrder, HowThisWorks } from "./RunningOrder";
import { CopyButton } from "../../../../components/CopyButton";
import { lessonText } from "../../../../lib/lesson-text";

type Params = { params: Promise<{ subject: string; topic: string }> };

export function generateStaticParams() {
  return subjectsWithLessons().flatMap((s) =>
    s.topics.map((t) => ({ subject: s.slug, topic: t.slug })),
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { subject, topic } = await params;
  const plan = buildLessonPlan(subject, topic);
  if (!plan) return {};
  return {
    title: `${plan.topicTitle} — lesson questions`,
    description: `A ready-made ${plan.subjectName} lesson on ${plan.topicTitle}: ${plan.totalMarks} marks of questions in order, a worked example to model, and the mistakes to watch for.`,
  };
}

export default async function LessonPage({ params }: Params) {
  const { subject, topic } = await params;
  const plan = buildLessonPlan(subject, topic);
  if (!plan) notFound();

  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-8">
      <SiteHeader greeting={false} />

      <nav
        aria-label="Breadcrumb"
        className="mt-8 flex flex-wrap gap-x-2 gap-y-2 text-sm opacity-60"
      >
        <Link href="/teacher-tools" className="tap-pad hover:underline">
          Teacher tools
        </Link>
        <span aria-hidden="true">/</span>
        <Link href="/teacher-tools/questions" className="tap-pad hover:underline">
          Question examples
        </Link>
        <span aria-hidden="true">/</span>
        <Link
          href={`/teacher-tools/questions/${plan.subjectSlug}`}
          className="tap-pad hover:underline"
        >
          {plan.subjectName}
        </Link>
      </nav>

      <section className="mt-4">
        <h1 className="text-4xl font-bold tracking-tight">{plan.topicTitle}</h1>
        <LessonSummaryLine plan={plan} />
        <p className="mt-4 max-w-2xl opacity-75">{plan.summary}</p>
      </section>

      {/* ⚠️ Said before the lesson rather than after it. A teacher deciding
          whether to trust the order needs to know how it was made BEFORE they
          use it in front of a class — a caveat at the bottom of a page they
          scrolled past is a caveat nobody read. */}
      <p className="mt-5 rounded-2xl border border-white/60 bg-white/60 p-4 text-sm opacity-70 dark:border-white/10 dark:bg-white/5">
        Built from this topic&apos;s own revision questions, ordered by mark
        tariff. Tariffs are derived from AQA&apos;s marking principles rather
        than copied from a mark scheme, so treat one as within a mark of the
        real thing.{" "}
        {plan.flatDifficulty && (
          <>
            <strong className="font-semibold opacity-100">
              This topic is recall-heavy
            </strong>{" "}
            — nearly every question is worth the same, so the lesson does not
            climb much. That is the content, not the ordering.{" "}
          </>
        )}
        {plan.questionsLeftOver > 0 && (
          <>
            {plan.questionsLeftOver} more question
            {plan.questionsLeftOver === 1 ? " is" : "s are"} in this topic but
            not used here —{" "}
            <Link
              href={`/subjects/${plan.subjectSlug}/${plan.topicSlug}#practice`}
              className="font-medium underline"
            >
              see them all
            </Link>
            .
          </>
        )}
      </p>

      {/* ⚠️ THE FOUR WAYS OUT OF HERE COME BEFORE THE LESSON, NOT AFTER IT.
          A teacher's first question is "can I get this into my own slides",
          and the answer was previously at the bottom of a very long page. The
          two that put the lesson in front of a class — the deck and Present —
          lead; the worksheet and the revision page follow. */}
      <div className="diagram-controls mt-5 flex flex-wrap items-center gap-3">
        <PresentMode plan={plan} />
        {/* A plain <a>, not next/link: this is a file download rather than a
            route, and prefetching it would build a .pptx on the server for
            every teacher who merely scrolled past the button. `download`
            makes the browser save it instead of navigating, so the page they
            came from is still there afterwards. */}
        <a
          href={`/teacher-tools/questions/${plan.subjectSlug}/${plan.topicSlug}/slides`}
          download
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-black/10 px-5 text-sm font-medium transition hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
        >
          <span aria-hidden="true">↓</span>
          PowerPoint
        </a>
        <CopyButton
          text={lessonText(plan)}
          label="Copy all questions"
          copiedLabel="Questions copied"
          title={`Copy all ${plan.topicTitle} questions as plain text`}
        />
        <Link
          href={`/teacher-tools/questions/${plan.subjectSlug}/${plan.topicSlug}/print`}
          className="inline-flex min-h-11 items-center rounded-full border border-black/10 px-5 text-sm font-medium transition hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
        >
          Printable worksheet
        </Link>
        <Link
          href={`/subjects/${plan.subjectSlug}/${plan.topicSlug}`}
          className="inline-flex min-h-11 items-center rounded-full border border-black/10 px-5 text-sm font-medium transition hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
        >
          The revision page
        </Link>
      </div>

      <HowThisWorks plan={plan} />
      <RunningOrder plan={plan} />

      <LessonView plan={plan} />

      {plan.examTips.length > 0 && (
        <section className="mt-12">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] opacity-50">
            Exam technique worth saying out loud
          </h2>
          <ul className="mt-3 space-y-2">
            {plan.examTips.map((tip) => (
              <li
                key={tip.tip}
                className="rounded-2xl border border-white/60 bg-white/70 p-4 text-sm shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
              >
                <span className="font-semibold">{tip.tip}</span>{" "}
                <span className="opacity-75">{tip.detail}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="diagram-controls mt-8">
        <PrintButton />
      </div>

      <MoreComingSoon />
    </main>
  );
}
