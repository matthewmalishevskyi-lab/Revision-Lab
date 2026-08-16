import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "../../components/Icon";
import { MASCOTS } from "../../components/Mascots";
import { SiteHeader } from "../../components/SiteHeader";
import { getGroup, subjectsInGroup } from "../../lib/subjects";

// ─────────────────────────────────────────────────────────────────────────────
// WHY THIS IS A STATIC ROUTE NEXT TO A DYNAMIC ONE
//
// Same reasoning as app/subjects/science/page.tsx, which this file mirrors
// closely on purpose — one chooser page per group, same layout, same rules.
// `app/subjects/[subject]/page.tsx` already matches /subjects/anything, but a
// literal folder name (`app/subjects/languages/page.tsx`) beats a dynamic
// segment, so /languages lands here and every other subject still falls
// through to the dynamic page. scripts/check-content.mjs has a check for the
// collision this would cause if a subject were ever given the slug
// "languages" itself.
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Languages",
  description:
    "GCSE Spanish, French and German revision — vocabulary, grammar and exam practice for every topic across Years 9, 10 and 11.",
};

export default function LanguagesPage() {
  const group = getGroup("languages");
  if (!group) notFound();

  const languages = subjectsInGroup("languages");
  const Mascot = MASCOTS[group.mascot];

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10">
      <SiteHeader />

      {/* ---------- Header ---------- */}
      <section className="mx-auto mt-8 max-w-4xl rounded-3xl border border-white/60 bg-white/60 px-8 py-8 text-center shadow-[0_20px_50px_-30px_rgba(22,24,43,0.5)] backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">Languages</h1>
        <p className="mt-3 text-xl opacity-60">
          Three separate GCSEs. Pick one.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-sm opacity-55">
          Spanish and French run from Year 9; German usually starts a year
          later, in Year 10, alongside whichever of the other two a school also
          teaches. Each is its own GCSE with its own vocabulary, grammar and
          exam — check which one (or ones) your school has entered you for.
        </p>
      </section>

      {/* ---------- The three languages ---------- */}
      <section className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-3">
        {languages.map((subject) => {
          const topicCount = subject.years.reduce(
            (n, group) => n + group.topics.length,
            0,
          );

          return (
            <Link
              key={subject.slug}
              href={`/subjects/${subject.slug}`}
              className={`group relative block overflow-hidden rounded-2xl p-7 text-white transition duration-300 ease-out hover:-translate-y-1 ${subject.shadow}`}
              style={{ backgroundImage: subject.gradient }}
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-2/3"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.34), rgba(255,255,255,0.05) 55%, rgba(255,255,255,0))",
                }}
              />
              <div className="pointer-events-none absolute -right-14 -top-16 h-48 w-48 rounded-full bg-white/25 opacity-70 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/30" />

              <h2 className="relative text-3xl font-semibold tracking-tight">
                {subject.name}
              </h2>
              <p className="relative mt-1 text-sm opacity-80">
                {topicCount} topics
              </p>

              {/* A few topic names, so the card says what is actually inside
                  rather than making you click to find out. */}
              <ul className="relative mt-5 space-y-2 text-sm opacity-85">
                {subject.years[0]?.topics.slice(0, 4).map((topic) => (
                  <li key={topic.slug} className="flex items-center gap-2">
                    <Icon name={topic.icon} className="h-4 w-4 shrink-0" />
                    <span className="truncate">{topic.title}</span>
                  </li>
                ))}
              </ul>

              <p className="relative mt-5 text-sm opacity-0 transition duration-300 group-hover:opacity-85">
                Choose a topic →
              </p>
            </Link>
          );
        })}
      </section>

      {/* ---------- What every topic includes ---------- */}
      <section className="mx-auto mt-10 max-w-3xl rounded-2xl border border-amber-500/25 bg-amber-500/[0.07] p-5 text-sm">
        <h2 className="font-semibold">Vocabulary AND grammar, together</h2>
        <p className="mt-2 opacity-80">
          Every topic pairs real vocabulary with the grammar you need to use
          it — flashcards, key facts, and practice questions that mix
          translation, filling in the correct verb form, and identifying parts
          of speech, not just word lists. Each language also has two dedicated
          grammar topics of its own, working through verb conjugation and
          tenses in more depth than a vocabulary topic has room for.
        </p>
      </section>

      <div className="mt-10 flex justify-center">
        <Mascot className="h-40 drop-shadow-[0_8px_14px_rgba(0,0,0,0.25)]" />
      </div>
    </main>
  );
}
