import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { SiteHeader } from "../../components/SiteHeader";
import { ClanBanner } from "../../components/ClanBanner";
import { ACCOUNTS_ENABLED } from "../../lib/site";
import { getClanById, getClanMemberIds } from "../../lib/clans";
import { getProgress } from "../../lib/progress";
import { findUserById } from "../../lib/users";
import { getViewer } from "../../lib/viewer";
import { JoinClanForm } from "./JoinClanForm";
import { LeaveClanButton } from "./LeaveClanButton";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const clan = await getClanById(id);
  return {
    title: clan ? clan.name : "Clan not found",
    robots: { index: false, follow: false },
  };
}

// One row of the leaderboard — just enough to rank and recognise someone,
// not a full profile. Ranked by total XP: the same number that fills the
// level bar on the dashboard, so a clan's leaderboard and a member's own
// progress page always agree on what's being counted.
type MemberRow = {
  userId: string;
  name: string;
  level: number;
  xp: number;
  streak: number;
};

export default async function ClanPage({ params }: Props) {
  if (!ACCOUNTS_ENABLED) redirect("/");

  const { id } = await params;
  const clan = await getClanById(id);
  if (!clan) notFound();

  const memberIds = await getClanMemberIds(id);

  // Small clans by design — see CreateClanForm's own framing, "people you
  // actually invite" — so fetching each member's progress in parallel costs
  // nothing worth optimising away. getProgress already does the real work of
  // reading and folding each person's activity log; this just calls it once
  // per member rather than inventing a second, clan-specific query.
  const rows = (
    await Promise.all(
      memberIds.map(async (userId): Promise<MemberRow | null> => {
        const [account, progress] = await Promise.all([
          findUserById(userId),
          getProgress(userId),
        ]);
        // Defensive, not expected: a member row can only exist for a real
        // account, but showing nothing for one that's vanished beats
        // crashing the whole leaderboard over it.
        if (!account) return null;
        return {
          userId,
          name: account.name,
          level: progress.xp.level,
          xp: progress.xp.total,
          streak: progress.streak.current,
        };
      }),
    )
  )
    .filter((row): row is MemberRow => row !== null)
    .sort((a, b) => b.xp - a.xp);

  const user = await getViewer();
  const isMember = user ? memberIds.includes(user.id) : false;

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-8">
      <SiteHeader greeting={false} />

      <section className="mt-10 flex flex-wrap items-center gap-5">
        <ClanBanner
          banner={{
            color: clan.bannerColor,
            shape: clan.bannerShape,
            icon: clan.bannerIcon,
          }}
          className="h-24 w-24 shrink-0"
        />
        <div>
          <h1 className="text-4xl font-bold tracking-tight">{clan.name}</h1>
          <p className="mt-1 opacity-60">
            {clan.memberCount} member{clan.memberCount === 1 ? "" : "s"}
          </p>
        </div>

        {isMember && (
          <div className="ml-auto">
            <LeaveClanButton />
          </div>
        )}
      </section>

      {/* ---------- Leaderboard ---------- */}
      <section className="mt-8 overflow-hidden rounded-3xl border border-white/60 bg-white/70 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
        {rows.length === 0 ? (
          <p className="p-6 text-center opacity-60">
            Nobody&apos;s revised anything yet — the first bit of practice puts
            someone on the board.
          </p>
        ) : (
          <ul>
            {rows.map((row, index) => (
              <li
                key={row.userId}
                className="flex items-center gap-4 border-b border-black/5 px-6 py-4 last:border-0 dark:border-white/10"
              >
                <span className="w-6 text-center text-lg font-bold tabular-nums opacity-50">
                  {index + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold">
                    {row.name}
                    {user?.id === row.userId && (
                      <span className="ml-2 text-sm font-normal opacity-50">(you)</span>
                    )}
                  </p>
                  <p className="text-sm opacity-55">
                    Level {row.level}
                    {row.streak > 0 &&
                      ` · ${row.streak} day${row.streak === 1 ? "" : "s"} streak`}
                  </p>
                </div>
                <span className="shrink-0 text-lg font-bold tabular-nums">
                  {row.xp.toLocaleString()} XP
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* ---------- Join / logged-out prompt ---------- */}
      {!isMember && (
        <section className="mt-8 rounded-3xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
          {user ? (
            <>
              <h2 className="text-xl font-bold">Join this clan</h2>
              <p className="mt-1 text-sm opacity-60">
                Ask whoever made it for the password.
              </p>
              <JoinClanForm clanId={clan.id} />
            </>
          ) : (
            <p className="text-center opacity-70">
              <Link href="/login" className="font-semibold text-blue-600 hover:underline dark:text-blue-400">
                Log in
              </Link>{" "}
              to join this clan.
            </p>
          )}
        </section>
      )}
    </main>
  );
}
