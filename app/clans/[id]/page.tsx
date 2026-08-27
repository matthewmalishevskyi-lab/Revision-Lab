import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { SiteHeader } from "../../components/SiteHeader";
import { ClanBanner } from "../../components/ClanBanner";
import { ACCOUNTS_ENABLED } from "../../lib/site";
import { getClanById, getClanMemberIds } from "../../lib/clans";
import { designateHeirAction } from "../../lib/clan-actions";
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
//
// `isCreator` doesn't change the ranking — the leader's row sits wherever
// their own XP puts it, same as anyone else's. It's a label about WHO
// OWNS the clan, not a claim about who's best at it; those are different
// things, and conflating them would be a strange way to reward whoever
// happens to have made the clan rather than whoever's actually revising.
//
// `isChosenHeir` marks the ONE member (if any) the leader has actually
// picked to inherit leadership next — a standing choice, not something
// that happens on click. See designateClanHeir's own comment in
// lib/clans.ts. `isDefaultNextInLine` marks whoever would inherit it
// instead, automatically, if nobody's been chosen — the earliest-joined
// remaining member. At most one of the two is ever true for a given
// clan: a chosen heir always overrides the default, it doesn't sit
// alongside it.
type MemberRow = {
  userId: string;
  name: string;
  level: number;
  xp: number;
  streak: number;
  isCreator: boolean;
  isChosenHeir: boolean;
  isDefaultNextInLine: boolean;
};

export default async function ClanPage({ params }: Props) {
  if (!ACCOUNTS_ENABLED) redirect("/");

  const { id } = await params;
  const clan = await getClanById(id);
  if (!clan) notFound();

  // Join order, earliest first — see getClanMemberIds's own comment. This
  // is what makes "the second person to join" a real, checkable fact
  // rather than an assumption: the first entry is ordinarily the creator
  // (they auto-join their own clan on creation), so the first ENTRY THAT
  // ISN'T THE CREATOR is whoever actually joined second — the DEFAULT,
  // used only when nobody's actually been chosen as heir.
  const memberIds = await getClanMemberIds(id);

  // The leader's own choice wins whenever it's still valid — `heirId`
  // could point at someone who's since left, which getClanMemberIds's
  // result lets this actually check rather than assume.
  const chosenHeirId =
    clan.heirId !== null && memberIds.includes(clan.heirId) ? clan.heirId : null;
  const defaultNextInLineUserId = memberIds.find((memberId) => memberId !== clan.createdBy);

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
          isCreator: userId === clan.createdBy,
          isChosenHeir: userId === chosenHeirId,
          isDefaultNextInLine: chosenHeirId === null && userId === defaultNextInLineUserId,
        };
      }),
    )
  )
    .filter((row): row is MemberRow => row !== null)
    .sort((a, b) => b.xp - a.xp);

  const user = await getViewer();
  const isMember = user ? memberIds.includes(user.id) : false;
  const viewerIsLeader = user?.id === clan.createdBy;

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-8">
      <SiteHeader greeting={false} />

      <section className="mt-10 flex flex-wrap items-center gap-5">
        <ClanBanner
          banner={{
            color: clan.bannerColor,
            shape: clan.bannerShape,
            icon: clan.bannerIcon,
            iconScale: clan.iconScale,
            iconOffsetX: clan.iconOffsetX,
            iconOffsetY: clan.iconOffsetY,
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
          <div className="ml-auto flex items-center gap-4">
            {viewerIsLeader && (
              <Link
                href={`/clans/${clan.id}/edit`}
                className="text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400"
              >
                Edit banner
              </Link>
            )}
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
                  {row.isCreator && (
                    <p className="mt-0.5">
                      <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/40 bg-amber-500/15 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-300">
                        👑 Leader
                      </span>
                    </p>
                  )}
                  {row.isChosenHeir && (
                    <p className="mt-0.5">
                      <span className="inline-flex items-center gap-1 rounded-full border border-purple-500/40 bg-purple-500/15 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-purple-800 dark:text-purple-300">
                        Heir
                      </span>
                      <span className="ml-1.5 text-xs font-normal normal-case tracking-normal opacity-45">
                        leads next, if the leader ever leaves
                      </span>
                    </p>
                  )}
                  {row.isDefaultNextInLine && (
                    <p className="mt-0.5 text-xs opacity-45">
                      Next in line by default, if the leader ever leaves
                    </p>
                  )}
                  <p className="text-sm opacity-55">
                    Level {row.level}
                    {row.streak > 0 &&
                      ` · ${row.streak} day${row.streak === 1 ? "" : "s"} streak`}
                  </p>
                </div>
                <span className="shrink-0 text-lg font-bold tabular-nums">
                  {row.xp.toLocaleString()} XP
                </span>
                {/* Only the current leader sees this, and only on rows
                    that AREN'T already the chosen heir or the leader's
                    own row — the Heir badge above already says what
                    clicking again would just repeat. Clicking this does
                    NOT hand leadership over now; it only records a
                    choice for later. See designateHeirAction's own
                    comment for why this is a plain form with no client
                    state. */}
                {viewerIsLeader && !row.isCreator && !row.isChosenHeir && (
                  <form action={designateHeirAction}>
                    <input type="hidden" name="clanId" value={clan.id} />
                    <input type="hidden" name="heirUserId" value={row.userId} />
                    <button
                      type="submit"
                      className="shrink-0 rounded-lg border border-black/10 px-2.5 py-1.5 text-xs font-semibold opacity-70 transition hover:bg-black/5 hover:opacity-100 dark:border-white/15 dark:hover:bg-white/10"
                    >
                      👑 Make heir
                    </button>
                  </form>
                )}
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
