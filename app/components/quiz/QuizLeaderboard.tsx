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
      {rows.map((row, index) => {
        const isMe = viewerPlayerId != null && row.player.id === viewerPlayerId;
        // The literal top of the podium gets a colour, the same "who owns
        // this, not who's flashiest" restraint the clan Leader badge
        // already applies — a gold/silver/bronze treatment for the top
        // three, plain for everyone else, so the podium reads at a glance
        // without every single row fighting for attention.
        const medal = index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : null;

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
              {medal ?? index + 1}
            </span>
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
