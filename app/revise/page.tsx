import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { SiteHeader } from "../components/SiteHeader";
import { MascotDisplay } from "../components/MascotDisplay";
import { getViewer } from "../lib/viewer";
import { getRevisionQueue, QUEUE_KIND_LABELS } from "../lib/revision-queue";
import { ACCOUNTS_ENABLED } from "../lib/site";

export const metadata: Metadata = {
  title: "Revise today",
  // Private and different for every visitor and every visit — no use to
  // search, same reasoning as the dashboard and /review.
  robots: { index: false, follow: false },
};

// The full version of the queue preview that also appears on the dashboard —
// see lib/revision-queue.ts for how the list is built and ranked. Protected
// the same way as /dashboard and /review: checked on the server, before a
// byte of the page is sent.
export default async function RevisePage() {
  if (!ACCOUNTS_ENABLED) redirect("/");

  const user = await getViewer();
  if (!user) redirect("/login");

  const queue = await getRevisionQueue(user.id);

  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-8">
      <SiteHeader greeting={false} />

      <section className="mt-10">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Revise today
        </h1>
        <p className="mt-3 text-lg opacity-60">
          {queue.length > 0
            ? `${queue.length} thing${queue.length === 1 ? "" : "s"} worth your time right now, across every subject — most useful first.`
            : "Nothing urgent right now, across any subject."}
        </p>
      </section>

      <div className="mt-8 space-y-3">
        {queue.length > 0 ? (
          queue.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group flex items-center gap-4 rounded-2xl border border-white/60 bg-white/70 px-5 py-4 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5"
            >
              <MascotDisplay
                mascot={item.mascot}
                className="h-12 w-12 shrink-0"
              />
              <div className="min-w-0 flex-1">
                <span
                  className="inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold text-white"
                  style={{ backgroundColor: item.accent }}
                >
                  {QUEUE_KIND_LABELS[item.kind]}
                </span>
                <p className="mt-1.5 truncate font-semibold">{item.title}</p>
                <p className="truncate text-sm opacity-60">
                  {item.subjectName} · {item.detail}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="shrink-0 text-xl opacity-40 transition group-hover:translate-x-1 group-hover:opacity-100"
              >
                →
              </span>
            </Link>
          ))
        ) : (
          <div className="rounded-3xl border border-white/60 bg-white/70 p-8 text-center shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
            <p className="opacity-70">
              No overdue flashcards, no weak topics and nothing new to
              start — you&apos;re genuinely caught up everywhere. A{" "}
              <Link
                href="/dashboard"
                className="underline underline-offset-2"
              >
                subject test
              </Link>{" "}
              is a good way to keep it that way.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
