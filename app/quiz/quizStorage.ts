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

export type StoredQuizPlayer = { playerId: string; displayName: string };

export function parseStoredQuizPlayer(raw: string | null): StoredQuizPlayer | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as Partial<StoredQuizPlayer>;
    if (typeof parsed.playerId === "string" && typeof parsed.displayName === "string") {
      return { playerId: parsed.playerId, displayName: parsed.displayName };
    }
    return null;
  } catch {
    return null;
  }
}
