import { QuizPlayerAvatar } from "./QuizPlayerAvatar";

// Ranked highest-score-first — used for BOTH the running leaderboard shown
// during reveal and the full final one at the end. The only difference
// between the two is the heading passed in from whichever screen renders
// this; the table itself doesn't need to know which moment it's showing.
export function QuizLeaderboard({
  rows,
  viewerPlayerId,
  compact = false,
}: {
  rows: { player: { id: string; displayName: string }; score: number }[];
  viewerPlayerId?: string | null;
  compact?: boolean;
}) {
  if (rows.length === 0) {
    return <p className="text-center opacity-60">Nobody&apos;s scored yet.</p>;
  }

  return (
    <ol className="space-y-2">
      {rows.map((row) => {
        const isMe = viewerPlayerId != null && row.player.id === viewerPlayerId;

        // PLACE, NOT ROW NUMBER. This used to show the position in the
        // array, which quietly made two people on the same score 1st and
        // 2nd — and at the start of a game, where everyone is on nothing,
        // it handed 1st place to whoever happened to be listed first.
        // Counting how many players are strictly AHEAD is the ordinary
        // sporting answer: two on 1000 are both 1st, and the next one down
        // is 3rd rather than 2nd.
        const place = rows.filter((other) => other.score > row.score).length + 1;

        // The literal top of the podium gets a colour, the same "who owns
        // this, not who's flashiest" restraint the clan Leader badge
        // already applies — a gold/silver/bronze treatment for the top
        // three, plain for everyone else, so the podium reads at a glance
        // without every single row fighting for attention. Nobody on zero
        // gets one, though: a medal for having scored nothing reads as a
        // bug even when the arithmetic behind it is right.
        const medal =
          row.score > 0 && place <= 3 ? ["🥇", "🥈", "🥉"][place - 1] : null;

        return (
          <li
            key={row.player.id}
            className={[
              "flex items-center gap-4 rounded-2xl border px-5 shadow-sm",
              compact ? "py-2.5" : "py-3.5",
              isMe
                ? "border-blue-400 bg-blue-50 dark:border-blue-500/50 dark:bg-blue-500/10"
                : "border-white/60 bg-white/70 dark:border-white/10 dark:bg-white/5",
            ].join(" ")}
          >
            <span className="w-8 shrink-0 text-center text-xl font-bold tabular-nums opacity-60">
              {medal ?? place}
            </span>
            <QuizPlayerAvatar playerId={row.player.id} size={compact ? 24 : 28} />
            <span className="min-w-0 flex-1 truncate font-semibold">
              {row.player.displayName}
              {isMe && <span className="ml-2 text-sm font-normal opacity-50">(you)</span>}
            </span>
            <span className="shrink-0 text-lg font-bold tabular-nums">
              {row.score.toLocaleString()}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
