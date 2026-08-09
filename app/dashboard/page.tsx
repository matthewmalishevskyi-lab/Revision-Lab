import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { MASCOTS } from "../components/Mascots";
import { SiteHeader } from "../components/SiteHeader";
import { getViewer } from "../lib/viewer";
import { ACCOUNTS_ENABLED } from "../lib/site";
import { SUBJECTS } from "../lib/subjects";

export const metadata: Metadata = {
  title: "Dashboard",
  // Deliberately kept OUT of search results. A login form is no use to someone
  // arriving from Google, and a dashboard is private. Search engines should
  // send people to the revision content instead.
  robots: { index: false, follow: false },
};

export default async function DashboardPage() {
  // Nothing to show if accounts are off — send them to the content instead.
  if (!ACCOUNTS_ENABLED) redirect("/");

  const user = await getViewer();

  // A PROTECTED PAGE. The check happens on the server, before a single byte of
  // this page is sent. That's the important bit: hiding a page in the browser
  // isn't security, because anyone can undo it with dev tools. Here, a logged
  // out visitor never receives the page at all.
  if (!user) redirect("/login");

  // Counting topics from the data rather than typing "37" somewhere — the
  // number can never drift out of date because it's derived, not stored.
  const totalTopics = SUBJECTS.reduce(
    (sum, subject) =>
      sum + subject.years.reduce((n, group) => n + group.topics.length, 0),
    0,
  );

  const joined = new Date(user.createdAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-8">
      <SiteHeader greeting={false} />

      <section className="mt-10">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Hi, {user.name}
        </h1>
        <p className="mt-3 text-lg opacity-60">
          {totalTopics} topics across {SUBJECTS.length} subjects. Pick up where
          you like.
        </p>
      </section>

      {/* ---------- Subjects ---------- */}
      <section className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {SUBJECTS.map((subject) => {
          const Mascot = MASCOTS[subject.mascot];
          const topicCount = subject.years.reduce(
            (n, group) => n + group.topics.length,
            0,
          );

          return (
            <Link
              key={subject.slug}
              href={`/subjects/${subject.slug}`}
              className={`group relative overflow-hidden rounded-2xl p-6 text-white transition duration-300 hover:-translate-y-1 ${subject.shadow}`}
              style={{ backgroundImage: subject.gradient }}
            >
              <div className="pointer-events-none absolute -right-12 -top-16 h-40 w-40 rounded-full bg-white/25 opacity-70 blur-3xl transition group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/30" />

              <h2 className="relative text-2xl font-semibold">{subject.name}</h2>
              <p className="relative mt-1 text-sm opacity-80">
                {topicCount} topics
              </p>
              <Mascot className="pointer-events-none absolute -bottom-3 right-2 h-24 opacity-90 drop-shadow-[0_6px_10px_rgba(0,0,0,0.35)] transition group-hover:scale-105" />
              <div className="h-16" />
            </Link>
          );
        })}
      </section>

      {/* ---------- Account ---------- */}
      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/60 bg-white/60 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-xl font-semibold">Your account</h2>
          <dl className="mt-4 space-y-3 text-base">
            <div className="flex justify-between gap-4">
              <dt className="opacity-60">Name</dt>
              <dd className="font-medium">{user.name}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="opacity-60">Email</dt>
              <dd className="font-medium break-all">{user.email}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="opacity-60">Member since</dt>
              <dd className="font-medium">{joined}</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-2xl border border-white/60 bg-white/60 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-xl font-semibold">Your progress</h2>
          <p className="mt-3 opacity-70">
            Every question you answer, flashcard you flip and minute you spend
            on a topic page is now recorded against your account.
          </p>
          <Link
            href="/progress"
            className="mt-4 inline-block rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            See your progress →
          </Link>
        </div>
      </section>
    </main>
  );
}
