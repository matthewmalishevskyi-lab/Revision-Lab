// Where a guest's quiz identity lives in THIS browser — see JoinQuizForm's
// own comment for why one has to exist at all: a guest has no account, so
// there's no session cookie the play page could otherwise use to prove
// "this is the same person who joined a minute ago." Scoped per room code
// (not one single key) so joining a second quiz later doesn't overwrite —
// or get confused with — the identity from an earlier one, the same
// per-key isolation reasoning every other localStorage use on this site
// already follows (the theme choice, the wardrobe's equipped outfit).
export function quizPlayerStorageKey(code: string): string {
  return `revision-lab:quiz-player:${code}`;
}

// `token` is the server's signature over this room code and player id — see
// lib/quizPlayerToken.ts. It is stored right beside the id because the two are
// only useful together: the id says which player, the token proves the server
// is the one who said so.
export type StoredQuizPlayer = {
  playerId: string;
  displayName: string;
  token: string;
};

// ⚠️ A STORED IDENTITY WITH NO TOKEN IS NOT AN IDENTITY.
//
// Anything saved by a browser before tokens existed parses to null here, on
// purpose. The alternative — accepting it and letting the token be optional —
// would leave the exact hole the token exists to close, because a forger would
// simply omit it too. Null is already a case the play screen handles well: it
// shows "you haven't joined this room from this device yet" with a Join button
// under it, and joining again mints a proper token. The cost is re-joining
// once; the cost of the other choice is the feature not working.
export function parseStoredQuizPlayer(raw: string | null): StoredQuizPlayer | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as Partial<StoredQuizPlayer>;
    if (
      typeof parsed.playerId === "string" &&
      typeof parsed.displayName === "string" &&
      typeof parsed.token === "string" &&
      parsed.token.length > 0
    ) {
      return {
        playerId: parsed.playerId,
        displayName: parsed.displayName,
        token: parsed.token,
      };
    }
    return null;
  } catch {
    return null;
  }
}
