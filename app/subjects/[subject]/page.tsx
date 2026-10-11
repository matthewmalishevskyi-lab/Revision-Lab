import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExamBoardNote } from "../../components/ExamBoardNote";
import { Icon } from "../../components/Icon";
import { MascotDisplay } from "../../components/MascotDisplay";
import { SiteHeader } from "../../components/SiteHeader";
import { BookArt, ExamArt } from "../../components/YearArt";
import { ACCOUNTS_ENABLED, SITE_NAME } from "../../lib/site";
import { getSubject, SUBJECTS, yearStyle, type Topic } from "../../lib/subjects";
import { indefiniteArticle } from "../../lib/text";
import { getViewer } from "../../lib/viewer";
import { getMastery } from "../../lib/progress";
import { MASTERY_LABEL, type Mastery } from "../../lib/mastery";
import { MASTERY_PILL } from "../../components/WhereYouAre";

// The folder is called [subject] — square brackets mean "this bit of the URL is
// a variable". So this ONE file serves /subjects/computer-science,
// /subjects/maths and /subjects/english. Add a fourth subject to the data file
// and its page exists immediately, with no new code.

// This tells Next which subjects exist, so it can build all three pages ahead
// of time instead of on demand. Faster for visitors, and it means a typo in the
// data shows up at build time rather than when someone clicks.
export function generateStaticParams() {
  return SUBJECTS.map((subject) => ({ subject: subject.slug }));
}

// In this version of Next, `params` arrives as a PROMISE and must be awaited.
// Older tutorials read it directly and will mislead you here.
type Props = { params: Promise<{ subject: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subject: slug } = await params;
  const subject = getSubject(slug);
  if (!subject) return { title: "Not found" };

  // Just the subject name — the layout's title template adds "· Revision Lab"
  // automatically, so repeating it here would double it up.
  const topicCount = subject.years.reduce(
    (n, group) => n + group.topics.length,
    0,
  );
  const description = `Free GCSE ${subject.name} revision covering ${topicCount} topics across ${subject.years.map((g) => g.year).join(", ").replace(/, ([^,]*)$/, " and $1")}. Key facts, flashcards and exam technique for each one.`;

  return {
    title: `GCSE ${subject.name} revision`,
    description,
    // A canonical URL tells search engines which address is the real one, so
    // the same page reached by different links doesn't get treated as
    // duplicate content and pushed down the rankings.
    alternates: { canonical: `/subjects/${subject.slug}` },
    openGraph: {
      title: `GCSE ${subject.name} revision · ${SITE_NAME}`,
      description,
      url: `/subjects/${subject.slug}`,
    },
  };
}

// How many columns for a given number of year groups. Written out in full
// because Tailwind cannot see class names that are assembled at runtime.
const COLUMNS: Record<number, string> = {
  1: "lg:grid-cols-1 lg:max-w-md lg:mx-auto",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-2 xl:grid-cols-4",
};

export default async function SubjectPage({ params }: Props) {
  const { subject: slug } = await params;
  const subject = getSubject(slug);

  // Someone typing /subjects/geography gets a proper 404 rather than a crash.
  // Always assume the URL bar contains nonsense — anyone can type anything.
  if (!subject) notFound();

  // getViewer() is cached per request (see lib/viewer.ts), so this costs
  // nothing extra — SiteHeader just below calls it too and React dedupes
  // the two calls into one. Only used to decide whether to show a link to a
  // page that requires an account; nothing here is gated behind it.
  const user = ACCOUNTS_ENABLED ? await getViewer() : null;
  // where the student stands on each topic — a pill on its row, and a count
  // in the title panel. Fails soft: no pills, never no page.
  const mastery = user ? await getMastery(user.id).catch(() => null) : null;
  const topicCount = subject.years.reduce((n, y) => n + y.topics.length, 0);
  // A STRAND (Computer Science's Programming) is laid out as one wide,
  // numbered section of its own; only real years become columns. See
  // `strand` in lib/subjects.ts.
  const strands = subject.years.filter((g) => g.strand);
  const columns = subject.years.filter((g) => !g.strand);
  const masteredHere = mastery?.bySubject.get(subject.slug) ?? 0;

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-8">
      <SiteHeader greeting={false} />

      {/* ---------- Subject title panel ---------- */}
      <section className="mx-auto mt-8 max-w-4xl rounded-3xl border border-white/60 bg-white/60 px-8 py-8 text-center shadow-[0_20px_50px_-30px_rgba(22,24,43,0.5)] backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          {subject.name}
        </h1>
        <p className="mt-3 text-xl opacity-60">{subject.blurb}</p>
        {mastery && (
          <p className="mt-3 text-sm font-semibold text-emerald-800 dark:text-emerald-300">
            {masteredHere} of {topicCount} topics mastered
          </p>
        )}

        {/* A timed, mixed-topic set rather than one topic at a time — see
            app/subjects/[subject]/exam/page.tsx. Sits on every subject page
            rather than only some, since every subject now has content to
            build one from. */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={`/subjects/${subject.slug}/exam`}
            className="min-h-11 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            style={{ backgroundColor: subject.accent }}
          >
            Try {indefiniteArticle(subject.name)} {subject.name} test
            <span aria-hidden="true">→</span>
          </Link>

          {/* The longer, full-length sibling of the button above — see
              app/subjects/[subject]/past-paper/page.tsx. A secondary
              (outlined, not filled) style on purpose: the quick test is the
              lighter-weight, more-often-used action, and a full past paper
              is the bigger commitment someone reaches for less often —
              same "primary vs secondary" reasoning the stats link below
              already follows. */}
          <Link
            href={`/subjects/${subject.slug}/past-paper`}
            className="min-h-11 inline-flex items-center gap-2 rounded-xl border border-black/10 px-5 py-2.5 text-sm font-semibold transition hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
          >
            Full past paper
            <span aria-hidden="true">→</span>
          </Link>

          {/* Only worth showing once there's an account to attach stats to —
              a logged-out visitor sees the exact same panel as before this
              existed. */}
          {user && (
            <Link
              href={`/subjects/${subject.slug}/stats`}
              className="min-h-11 inline-flex items-center gap-2 rounded-xl border border-black/10 px-5 py-2.5 text-sm font-semibold transition hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
            >
              Your {subject.name} stats
              <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>
      </section>

      {/* ---------- The year columns ----------
           The grid adapts to how many years the subject actually has. It was
           hard-coded to three, which was fine while every subject had Year 9,
           10 and 11 — Business has only two, so the row was laid out for three
           and the missing one left an empty third of the page, as though a
           column had been deleted.

           ⚠️ THE TAILWIND TRAP, and the reason this is a lookup rather than a
           template string. Tailwind scans the SOURCE FILES AS PLAIN TEXT to
           decide which CSS to generate. A class built at runtime like
           `lg:grid-cols-${n}` never appears in the file, so the CSS for it is
           never generated and the class silently does nothing. Every possible
           class has to exist somewhere as a complete literal string — which is
           exactly what this object is. This is written up in PROJECT_NOTES and
           it catches people out constantly. */}
      {strands.map((group) => {
        const style = yearStyle(group.year);
        return (
          <section
            key={group.year}
            aria-labelledby={`strand-${group.year}`}
            className="mt-10 overflow-hidden rounded-3xl border border-white/60 bg-white/60 shadow-[0_20px_50px_-30px_rgba(22,24,43,0.55)] backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
          >
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 px-6 py-6 sm:px-8" style={{ backgroundImage: style.gradient }}>
              <span className="shrink-0 rounded-2xl bg-white/50 p-3" style={{ color: style.text }}>
                <Icon name="code" className="h-9 w-9" />
              </span>
              <div className="min-w-0 flex-1" style={{ color: style.text }}>
                <h2 id={`strand-${group.year}`} className="text-4xl font-bold tracking-tight">{group.year}</h2>
                <p className="mt-1 text-base font-medium opacity-80">
                  All of it in one place, in order — {group.topics.length} parts, each one building on the ones before. Not tied to a year: start at 1 and climb.
                </p>
              </div>
            </div>
            {/* ⚠️ A ROW-WISE GRID, numbered, because this is a ladder: part 4
                must read as coming after part 3 whichever way the columns
                fold on a phone. */}
            <ol className="grid grid-cols-1 gap-3 p-5 sm:grid-cols-2 lg:grid-cols-3">
              {group.topics.map((topic, i) => (
                <li key={topic.slug}>
                  <TopicRow subjectSlug={subject.slug} topic={topic} colour={style.text} number={i + 1} mastery={mastery?.topics.get(`${subject.slug}/${topic.slug}`)} />
                </li>
              ))}
            </ol>
          </section>
        );
      })}

      <section className={`mt-10 grid grid-cols-1 gap-7 ${COLUMNS[columns.length] ?? "lg:grid-cols-3"}`}>
        {columns.map((group, index) => {
          // COLOUR is by year NAME — Business starts at Year 10, and reading
          // position 0 would paint it in the Year 9 blue.
          const style = yearStyle(group.year);

          // ARTWORK, just below, stays by POSITION, and the difference is the
          // point. "Year 10 is orange" is a fact about the year, so it follows
          // the name. "The first column gets the subject's mascot" is a fact
          // about the layout, so it follows the position — which is why
          // Business still shows Sterling on its only column instead of
          // rendering a page with no character on it at all.

          return (
            <article
              key={group.year}
              className="overflow-hidden rounded-3xl border border-white/60 bg-white/60 shadow-[0_20px_50px_-30px_rgba(22,24,43,0.55)] backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
            >
              {/* Coloured header with the year and its artwork */}
              <div
                className="relative px-6 pb-2 pt-7"
                style={{ backgroundImage: style.gradient }}
              >
                <h2
                  className="text-center text-4xl font-bold tracking-tight"
                  style={{ color: style.text }}
                >
                  {group.year}
                </h2>

                <div className="flex h-40 items-end justify-center">
                  {/* The FIRST column gets the subject's own mascot, because
                      that is a fact about the LAYOUT. The rest is chosen by
                      year NAME: Year 11 is the exam year wherever it appears,
                      so it gets the exam artwork.

                      Picking this by position broke on Business, whose Year 11
                      sits at index 1 and was therefore handed the book. */}
                  {index === 0 ? (
                    <MascotDisplay
                      mascot={subject.mascot}
                      className="h-40 drop-shadow-[0_8px_14px_rgba(0,0,0,0.25)]"
                    />
                  ) : group.year === "Year 11" ? (
                    <ExamArt className="h-36 drop-shadow-[0_8px_14px_rgba(0,0,0,0.2)]" />
                  ) : (
                    <BookArt className="h-32 drop-shadow-[0_8px_14px_rgba(0,0,0,0.2)]" />
                  )}
                </div>
              </div>

              {/* Topic rows */}
              <ul className="space-y-3 p-5">
                {group.topics.map((topic) => (
                  <li key={topic.slug}>
                    <TopicRow subjectSlug={subject.slug} topic={topic} colour={style.text} mastery={mastery?.topics.get(`${subject.slug}/${topic.slug}`)} />
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </section>

      <ExamBoardNote subjectSlug={subject.slug} />
    </main>
  );
}

/**
 * One topic as a row you can tap anywhere on. Shared by the year columns and
 * a strand, so the two can never drift into looking like different things.
 */
function TopicRow({ subjectSlug, topic, colour, mastery, number }: {
  subjectSlug: string;
  topic: Topic;
  colour: string;
  mastery?: Mastery;
  /** Its place in a strand's ladder; a year column has no order to show. */
  number?: number;
}) {
  return (
    // A whole row is one link, so the entire strip is clickable — not just
    // the words. Bigger targets are easier to hit, especially on a phone.
    <Link
      href={`/subjects/${subjectSlug}/${topic.slug}`}
      className="group flex h-full items-center gap-4 rounded-2xl border border-black/5 bg-white px-4 py-3.5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/10"
    >
      {number !== undefined && (
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold"
          style={{ color: colour, backgroundColor: "rgba(52, 211, 153, 0.22)" }}
        >
          {number}
        </span>
      )}
      {/* The icon is drawn in `currentColor`, so setting the colour on this
          wrapper is enough to tint it. `style` rather than a class because it
          is a per-group value Tailwind can't know about. */}
      <span className="shrink-0" style={{ color: colour }}>
        <Icon name={topic.icon} className="h-6 w-6" />
      </span>
      {/* ⚠️ The pill goes UNDER the title, not beside it. Beside it, in the
          narrow year columns, it squeezed "Fractions, decimals & %" onto
          three lines. */}
      <span className="min-w-0 flex-1">
        <span className="block text-lg font-medium">{topic.title}</span>
        {mastery && mastery.state !== "new" && (
          <span className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${MASTERY_PILL[mastery.state]}`}>
            {mastery.state === "mastered" ? "✓ " : ""}{MASTERY_LABEL[mastery.state]}
          </span>
        )}
      </span>
      <span aria-hidden="true" className="text-xl opacity-40 transition group-hover:translate-x-0.5 group-hover:opacity-80">
        ›
      </span>
    </Link>
  );
}
