import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { ACCOUNTS_ENABLED } from "../lib/site";
import { getViewer } from "../lib/viewer";

export const metadata: Metadata = {
  title: "Live quiz",
  // Same reasoning as /clans — every room is reachable only by its own
  // code, never by browsing, so there's nothing here worth a search engine
  // sending anyone to.
  robots: { index: false, follow: false },
};

// The landing page for the whole live-quiz feature — two doors, host or
// join, since those are genuinely different journeys (one needs an
// account and a subject to pick topics from; the other needs nothing but a
// room code, the same as typing in a Kahoot game PIN).
export default async function QuizLandingPage() {
  const user = ACCOUNTS_ENABLED ? await getViewer() : null;

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-8">
      <SiteHeader greeting={false} />

      <section className="mt-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Live head-to-head quiz
        </h1>
        <p className="mx-auto mt-3 max-w-prose opacity-70">
          One person hosts a room on a shared screen; everyone else joins
          from their own device with a room code and races to answer —
          faster correct answers score more. No account needed to play.
        </p>
      </section>

      <section className="mt-10 grid gap-6 sm:grid-cols-2">
        <Link
          href={user ? "/quiz/host/new" : "/login"}
          className="rounded-3xl border border-white/60 bg-white/70 p-8 text-center shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5"
        >
          <p className="text-3xl">🖥️</p>
          <p className="mt-3 text-xl font-bold">Host a quiz</p>
          <p className="mt-1 text-sm opacity-60">
            {user
              ? "Pick a subject and a few topics, get a room code, put it on screen."
              : "Log in first — someone has to own and run the room."}
          </p>
        </Link>

        <Link
          href="/quiz/join"
          className="rounded-3xl border border-white/60 bg-white/70 p-8 text-center shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5"
        >
          <p className="text-3xl">🎮</p>
          <p className="mt-3 text-xl font-bold">Join a quiz</p>
          <p className="mt-1 text-sm opacity-60">
            Got a room code from someone hosting? Enter it and a name to
            jump straight in.
          </p>
        </Link>
      </section>
    </main>
  );
}
