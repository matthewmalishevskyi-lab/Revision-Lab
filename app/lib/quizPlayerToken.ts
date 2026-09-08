// Proving that a quiz player is who their browser says they are.
//
// ─────────────────────────────────────────────────────────────────────────────
// THE HOLE THIS CLOSES
//
// `submitAnswerAction` used to take a player id straight from the browser and
// trust it, checking only that a player with that id existed in the room. And
// every player's id is sent to every player's screen — `getQuizView` returns
// the room's player list, ids included, because the play screen needs them to
// highlight you on the leaderboard and to notice when the host removes you.
//
// Put those two facts together and any student in the room could open dev
// tools, read a rival's id, and answer on their behalf. The primary key on
// (session_code, player_id, question_index) — the thing that stops a doubled
// tap counting twice — then works against the victim: their own real answer
// arrives second and is rejected as a duplicate. One deliberately wrong answer
// per question, per rival, and the leaderboard is whatever the attacker wants.
//
// A logged-in player could be checked against their session cookie. A GUEST
// cannot: not having an account is the entire point of guest play, so there is
// nothing on the server to compare them to.
//
// So the server signs the id at the moment it hands it out. The browser stores
// the signature next to the id and sends both back. Anyone can still READ
// another player's id — that has not changed and does not need to — but they
// cannot produce the signature for it, because that needs the server's key.
// Same idea as the session cookie, one level down: see session.ts, whose key
// and HMAC this borrows rather than inventing a second one.
//
// The room code is inside the signed string, so a token minted in one room is
// not valid in another; the "quiz-player:" prefix keeps it from being replayed
// anywhere else that signs values with the same key.
// ─────────────────────────────────────────────────────────────────────────────

import { signValue, verifySignedValue } from "./session";

function subject(code: string, playerId: string): string {
  return `quiz-player:${code}:${playerId}`;
}

export async function issuePlayerToken(
  code: string,
  playerId: string,
): Promise<string> {
  return signValue(subject(code, playerId));
}

/**
 * True only if this exact (code, playerId) pair was signed by this server.
 *
 * A missing token is simply false rather than an error: a browser carrying an
 * identity saved before tokens existed lands here, and the right outcome is
 * "you are not a player in this room" — the play screen already knows how to
 * say that, with a Join button under it.
 */
export async function playerTokenIsValid(
  code: string,
  playerId: string,
  token: string | null | undefined,
): Promise<boolean> {
  if (!token) return false;
  return verifySignedValue(subject(code, playerId), token);
}
