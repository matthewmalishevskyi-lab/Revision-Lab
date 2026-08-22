import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MockExam, type ExamQuestion } from "../../../components/MockExam";
import { MascotDisplay } from "../../../components/MascotDisplay";
import { SiteHeader } from "../../../components/SiteHeader";
import { getTopicContent } from "../../../lib/content";
import { shuffle } from "../../../lib/shuffle";
import { getSubject } from "../../../lib/subjects";
import { PRO_PREVIEW_ENABLED } from "../../../lib/site";

// PREVIEW ONLY — see app/pro-preview/custom-test/page.tsx for the full
// explanation. This page is a close cousin of
// app/subjects/[subject]/exam/page.tsx: same idea (a form picks what goes
// in, MockExam runs the result), same "force-dynamic, no
// generateStaticParams" reasoning (a genuinely fresh random pick every
// time), same GET-form-with-no-JS pattern for the setup step. The one real
// difference is what the form picks — every TOPIC in the subject,
// individually, rather than a whole year at a time.

export const dynamic = "force-dynamic";

const QUESTION_COUNT = 20;
const DURATION_SECONDS = 20 * 60;

type Props = {
  params: Promise<{ subject: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subject: slug } = await params;
  const subject = getSubject(slug);
  if (!subject) return { title: "Not found" };
  return {
    title: `Custom ${subject.name} test`,
    robots: { index: false, follow: false },
  };
}

// Same shape as the ordinary exam page's collectQuestionPool, but fed a flat
// list of chosen topics directly rather than a list of YearGroups — there's
// no "include this whole year" step here, so there's no YearGroup to filter
// in the first place.
function collectQuestionPool(
  subjectSlug: string,
  topics: { slug: string; title: string }[],
): ExamQuestion[] {
  return topics.flatMap((topic) => {
    const content = getTopicContent(subjectSlug, topic.slug);
    return (content?.practice ?? []).map((q) => ({
      ...q,
      topicSlug: topic.slug,
      topicTitle: topic.title,
    }));
  });
}

// See the ordinary exam page's copy of this function for why a query value
// needs folding into one shape before anything else can check it.
function normalizeQueryValue(raw: string | string[] | undefined): string[] {
  if (raw === undefined) return [];
  return Array.isArray(raw) ? raw : [raw];
}

export default async function CustomTestPage({ params, searchParams }: Props) {
  if (!PRO_PREVIEW_ENABLED) notFound();

  const { subject: slug } = await params;
  const subject = getSubject(slug);
  if (!subject) notFound();

  const query = await searchParams;
  const configured = normalizeQueryValue(query.configured).includes("1");
  const selectedTopics = new Set(normalizeQueryValue(query.topics));

  // Every topic in the subject, flattened out of its year groups but still
  // remembering which year each one belongs to — the checkboxes are grouped
  // by year purely for readability, the selection itself is per-topic.
  const allTopics = subject.years.flatMap((group) =>
    group.topics.map((topic) => ({ ...topic, year: group.year })),
  );

  let chosenTopics: { slug: string; title: string }[] = [];
  let questions: ExamQuestion[] = [];
  if (configured) {
    chosenTopics = allTopics.filter((topic) => selectedTopics.has(topic.slug));
    const pool = collectQuestionPool(subject.slug, chosenTopics);
    questions = shuffle(pool).slice(0, QUESTION_COUNT);
  }

  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-8">
      <SiteHeader greeting={false} />

      <div className="mt-8 rounded-2xl border border-amber-500/40 bg-amber-500/10 px-5 py-3 text-sm">
        <strong>Preview build.</strong> Not reachable on the live site yet —
        see app/lib/site.ts, PRO_PREVIEW_ENABLED.
      </div>

      <nav className="mt-6 flex flex-wrap items-center gap-2 text-sm opacity-60">
        <Link href="/pro-preview/custom-test" className="hover:underline">
          Custom test
        </Link>
        <span aria-hidden="true">›</span>
        <span>{subject.name}</span>
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
          <h1 className="text-4xl font-bold tracking-tight">Custom test</h1>
        </div>
      </section>

      <div className="mt-8">
        {!configured ? (
          <form
            method="get"
            className="rounded-3xl border border-white/60 bg-white/70 p-8 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
          >
            <h2 className="text-xl font-bold">Pick your topics</h2>
            <p className="mt-1 opacity-70">
              Tick exactly the topics you want in this test. Leave the rest
              unticked — unlike the full {subject.name} test, nothing is
              selected by default here.
            </p>

            <div className="mt-5 space-y-5">
              {subject.years.map((group) => (
                <div key={group.year}>
                  <p className="text-sm font-semibold uppercase tracking-wide opacity-60">
                    {group.year}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-3">
                    {group.topics.map((topic) => (
                      <label
                        key={topic.slug}
                        className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/60 bg-white/60 px-4 py-2.5 text-sm font-medium shadow-sm transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                      >
                        <input
                          type="checkbox"
                          name="topics"
                          value={topic.slug}
                          className="h-4 w-4"
                          style={{ accentColor: subject.accent }}
                        />
                        {topic.title}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <input type="hidden" name="configured" value="1" />

            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              style={{ backgroundColor: subject.accent }}
            >
              Build my test
              <span aria-hidden="true">→</span>
            </button>
          </form>
        ) : chosenTopics.length === 0 ? (
          <div className="rounded-3xl border border-white/60 bg-white/70 p-8 text-center shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
            <p className="opacity-70">
              You didn&apos;t tick any topics, so there&apos;s nothing to
              build a test from.
            </p>
            <Link
              href={`/pro-preview/custom-test/${subject.slug}`}
              className="mt-4 inline-block rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Choose again
            </Link>
          </div>
        ) : questions.length === 0 ? (
          <div className="rounded-3xl border border-white/60 bg-white/70 p-8 text-center shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
            <p className="opacity-70">
              No practice questions have been written for the topic(s) you
              picked yet. Check back once they have content, or choose a
              different topic.
            </p>
            <Link
              href={`/pro-preview/custom-test/${subject.slug}`}
              className="mt-4 inline-block rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Choose again
            </Link>
          </div>
        ) : (
          <>
            <Link
              href={`/pro-preview/custom-test/${subject.slug}`}
              className="mb-4 inline-block text-sm opacity-60 hover:underline hover:opacity-100"
            >
              ← Change which topics are included
            </Link>
            <MockExam
              questions={questions}
              subjectSlug={subject.slug}
              subjectName={subject.name}
              colour={subject.accent}
              durationSeconds={DURATION_SECONDS}
            />
          </>
        )}
      </div>
    </main>
  );
}
