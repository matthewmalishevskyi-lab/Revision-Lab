import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { ClanBanner } from "../components/ClanBanner";
import { ACCOUNTS_ENABLED } from "../lib/site";
import { searchClans } from "../lib/clans";
import { getViewer } from "../lib/viewer";

export const metadata: Metadata = {
  title: "Clans",
  description:
    "Find a clan to join, or create your own small leaderboard with people you invite.",
  robots: { index: false, follow: false },
};

// `searchParams` arrives as a PROMISE in this version of Next — see
// app/subjects/[subject]/page.tsx's own comment on `params` for the same
// gotcha applied to the other half of a URL.
type Props = { searchParams: Promise<{ q?: string }> };

export default async function ClansPage({ searchParams }: Props) {
  const { q = "" } = await searchParams;
  const clans = await searchClans(q);
  const user = ACCOUNTS_ENABLED ? await getViewer() : null;

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-8">
      <SiteHeader greeting={false} />

      <section className="mt-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Clans</h1>
          <p className="mt-3 max-w-2xl opacity-70">
            A clan is a small leaderboard for people you actually invite —
            search for one you know the name of, or make your own.
          </p>
        </div>

        {user ? (
          <Link
            href="/clans/new"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            Create a clan
          </Link>
        ) : (
          ACCOUNTS_ENABLED && (
            <Link
              href="/login"
              className="inline-flex items-center gap-2 rounded-xl border border-black/10 px-5 py-2.5 text-sm font-semibold transition hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
            >
              Log in to create one
            </Link>
          )
        )}
      </section>

      {/* A plain GET form — no client-side state needed for "search as you
          navigate", and it means a search is a real, shareable, bookmarkable
          URL like /clans?q=maths rather than something only a script can
          reproduce. */}
      <form className="mt-8" action="/clans">
        <input
          type="search"
          name="q"
          defaultValue={q}
          placeholder="Search clans by name…"
          className="w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-base outline-none transition placeholder:opacity-40 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 dark:border-white/15 dark:bg-white/5"
        />
      </form>

      {clans.length === 0 ? (
        <p className="mt-10 text-center opacity-60">
          {q
            ? `No clans found matching "${q}".`
            : "No clans yet — be the first to make one."}
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clans.map((clan) => (
            <Link
              key={clan.id}
              href={`/clans/${clan.id}`}
              className="flex items-center gap-4 rounded-2xl border border-black/5 bg-white px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/10"
            >
              <ClanBanner
                banner={{
                  color: clan.bannerColor,
                  shape: clan.bannerShape,
                  icon: clan.bannerIcon,
                }}
                className="h-14 w-14 shrink-0"
              />
              <div className="min-w-0">
                <p className="truncate text-lg font-semibold">{clan.name}</p>
                <p className="text-sm opacity-60">
                  {clan.memberCount} member{clan.memberCount === 1 ? "" : "s"}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
