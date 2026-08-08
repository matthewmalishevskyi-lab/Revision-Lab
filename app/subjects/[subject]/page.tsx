import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "../../components/Icon";
import { MASCOTS } from "../../components/Mascots";
import { SiteHeader } from "../../components/SiteHeader";
import { BookArt, ExamArt } from "../../components/YearArt";
import { getSubject, SUBJECTS, YEAR_STYLES } from "../../lib/subjects";

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
  return { title: subject ? `${subject.name} · Revision Hub` : "Not found" };
}

export default async function SubjectPage({ params }: Props) {
  const { subject: slug } = await params;
  const subject = getSubject(slug);

  // Someone typing /subjects/geography gets a proper 404 rather than a crash.
  // Always assume the URL bar contains nonsense — anyone can type anything.
  if (!subject) notFound();

  const Mascot = MASCOTS[subject.mascot];

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-8">
      <SiteHeader greeting={false} />

      {/* ---------- Subject title panel ---------- */}
      <section className="mx-auto mt-8 max-w-4xl rounded-3xl border border-white/60 bg-white/60 px-8 py-8 text-center shadow-[0_20px_50px_-30px_rgba(22,24,43,0.5)] backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          {subject.name}
        </h1>
        <p className="mt-3 text-xl opacity-60">{subject.blurb}</p>
      </section>

      {/* ---------- Three year columns ---------- */}
      <section className="mt-10 grid grid-cols-1 gap-7 lg:grid-cols-3">
        {subject.years.map((group, index) => {
          const style = YEAR_STYLES[index];

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
                  {/* Year 9 gets the subject's own mascot; the other two get
                      artwork that works for any subject. */}
                  {index === 0 ? (
                    <Mascot className="h-40 drop-shadow-[0_8px_14px_rgba(0,0,0,0.25)]" />
                  ) : index === 1 ? (
                    <BookArt className="h-32 drop-shadow-[0_8px_14px_rgba(0,0,0,0.2)]" />
                  ) : (
                    <ExamArt className="h-36 drop-shadow-[0_8px_14px_rgba(0,0,0,0.2)]" />
                  )}
                </div>
              </div>

              {/* Topic rows */}
              <ul className="space-y-3 p-5">
                {group.topics.map((topic) => (
                  <li key={topic.slug}>
                    {/* A whole row is one link, so the entire strip is
                        clickable — not just the words. Bigger targets are
                        easier to hit, especially on a phone. */}
                    <Link
                      href={`/subjects/${subject.slug}/${topic.slug}`}
                      className="group flex items-center gap-4 rounded-2xl border border-black/5 bg-white px-4 py-3.5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/10"
                    >
                      {/* The icon is drawn in `currentColor`, so setting the
                          colour on this wrapper is enough to tint it with the
                          year's colour. `style` rather than a class because
                          it's a per-year value Tailwind can't know about. */}
                      <span
                        className="shrink-0"
                        style={{ color: style.text }}
                      >
                        <Icon name={topic.icon} className="h-6 w-6" />
                      </span>
                      <span className="flex-1 text-lg font-medium">
                        {topic.title}
                      </span>
                      <span
                        aria-hidden="true"
                        className="text-xl opacity-40 transition group-hover:translate-x-0.5 group-hover:opacity-80"
                      >
                        ›
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </section>

      <p className="mx-auto mt-10 max-w-3xl text-center text-sm opacity-50">
        Topic lists vary between exam boards and schools — check these against
        your own course and tell us what to change.
      </p>
    </main>
  );
}
