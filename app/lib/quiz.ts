// Live head-to-head quizzes: one host, a room code, everyone else joins from
// their own device — Kahoot's own shape, which is exactly what this was
// asked to be. Server-only, like clans.ts and progress.ts — it may use the
// Supabase secret key, which must never reach a browser. quiz-actions.ts is
// how a page reaches it.
//
// Two backends, the same choice every other feature on this site makes: a
// local JSON file for a laptop with no Supabase configured, a Supabase table
// for the live site. See users.ts's own long comment for why the file
// genuinely works locally and genuinely breaks once deployed.
//
// ─── WHY POLLING, NOT WEBSOCKETS ───────────────────────────────────────────
//
// A "live" multiplayer game sounds like it needs a persistent connection,
// and Supabase does offer one (Realtime). This deliberately doesn't use it,
// for the same reason accounts were built on Node's own `crypto` instead of
// a auth library: every other piece of live-feeling data on this site
// (clan leaderboards, progress, test history) is read the same simple way —
// fetch the current state, show it — and a quiz game doesn't actually need
// anything faster than "poll every second or two" to feel snappy. Each
// player's on-screen countdown is computed LOCALLY from `phaseStartedAt`
// plus the fixed per-question duration, so the clock itself never depends
// on how often a poll happens to land — only STATE CHANGES (a new question,
// the reveal, the game ending) need to arrive within a second or so of
// actually happening, and polling does that easily at this scale.
//
// ─── WHY THE FULL QUESTION SET IS STORED, NOT RE-DERIVED ──────────────────
//
// The alternative to storing the finished, shuffled question list on the
// session row would be storing a random SEED and re-shuffling identically
// every time anyone reads the session. That's strictly more fragile: it
// requires a seeded random number generator (this codebase's own shuffle()
// deliberately uses real Math.random(), which is NOT reproducible) and it
// means "what does this session's own data say" and "what would this
// produce if recomputed right now" have to always agree, forever. Storing
// the resolved result once removes an entire category of bug — there is
// only ever one true answer to "what is question 7", and it's sitting in
// the row.

import { randomUUID } from "node:crypto";
import { mkdir, readFile } from "node:fs/promises";
import { writeJsonAtomic } from "./atomicWrite";
import path from "node:path";
import { getTopicContent } from "./content";
import { normalise } from "./normalise";
import { shuffle } from "./shuffle";
import { MAX_QUESTIONS } from "./quizConfig";

const DATA_DIR = path.join(process.cwd(), "data");
const QUIZ_FILE = path.join(DATA_DIR, "quiz.json");

export type QuizStatus = "lobby" | "question" | "reveal" | "finished";

export type QuizQuestion = {
  question: string;
  // Already shuffled at creation time — see the file header comment for why
  // this is resolved once and stored, never recomputed.
  choices: string[];
  correctChoice: string;
  topicSlug: string;
  topicTitle: string;
};

export type QuizSession = {
  code: string;
  hostUserId: string;
  subjectSlug: string;
  topicSlugs: string[];
  topicTitles: string[];
  questions: QuizQuestion[];
  status: QuizStatus;
  currentIndex: number;
  phaseStartedAt: string | null;
  questionSeconds: number;
  createdAt: string;
};

export type QuizPlayer = {
  id: string;
  sessionCode: string;
  userId: string | null;
  displayName: string;
  joinedAt: string;
};

export type QuizAnswer = {
  sessionCode: string;
  playerId: string;
  questionIndex: number;
  choiceIndex: number;
  correct: boolean;
  points: number;
  answeredAt: string;
};

const SUPABASE_URL = process.env.SUPABASE_URL?.replace(/\/+$/, "");
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const KEY_IS_LEGACY_JWT = (SUPABASE_KEY ?? "").startsWith("eyJ");

export const QUIZ_ENABLED = Boolean(SUPABASE_URL && SUPABASE_KEY);

async function supabase(p: string, init: RequestInit = {}): Promise<Response> {
  return fetch(`${SUPABASE_URL}/rest/v1/${p}`, {
    ...init,
    headers: {
      apikey: SUPABASE_KEY as string,
      ...(KEY_IS_LEGACY_JWT ? { Authorization: `Bearer ${SUPABASE_KEY}` } : {}),
      "Content-Type": "application/json",
      ...init.headers,
    },
    cache: "no-store",
  });
}

type SessionRow = {
  code: string;
  host_user_id: string;
  subject_slug: string;
  topic_slugs: string[];
  topic_titles: string[];
  questions: QuizQuestion[];
  status: QuizStatus;
  current_index: number;
  phase_started_at: string | null;
  question_seconds: number;
  created_at: string;
};

const SESSION_COLUMNS =
  "code,host_user_id,subject_slug,topic_slugs,topic_titles,questions,status,current_index,phase_started_at,question_seconds,created_at";

function sessionFromRow(row: SessionRow): QuizSession {
  return {
    code: row.code,
    hostUserId: row.host_user_id,
    subjectSlug: row.subject_slug,
    topicSlugs: row.topic_slugs,
    topicTitles: row.topic_titles,
    questions: row.questions,
    status: row.status,
    currentIndex: row.current_index,
    phaseStartedAt: row.phase_started_at,
    questionSeconds: row.question_seconds,
    createdAt: row.created_at,
  };
}

type PlayerRow = {
  id: string;
  session_code: string;
  user_id: string | null;
  display_name: string;
  joined_at: string;
};

function playerFromRow(row: PlayerRow): QuizPlayer {
  return {
    id: row.id,
    sessionCode: row.session_code,
    userId: row.user_id,
    displayName: row.display_name,
    joinedAt: row.joined_at,
  };
}

type AnswerRow = {
  session_code: string;
  player_id: string;
  question_index: number;
  choice_index: number;
  correct: boolean;
  points: number;
  answered_at: string;
};

function answerFromRow(row: AnswerRow): QuizAnswer {
  return {
    sessionCode: row.session_code,
    playerId: row.player_id,
    questionIndex: row.question_index,
    choiceIndex: row.choice_index,
    correct: row.correct,
    points: row.points,
    answeredAt: row.answered_at,
  };
}

// ─── Local file storage ─────────────────────────────────────────────────────

type LocalData = {
  sessions: SessionRow[];
  players: PlayerRow[];
  answers: AnswerRow[];
};

async function readLocal(): Promise<LocalData> {
  let raw: string;
  try {
    raw = await readFile(QUIZ_FILE, "utf8");
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return { sessions: [], players: [], answers: [] };
    }
    console.error("[quiz] could not read data/quiz.json:", error);
    throw error;
  }

  try {
    const parsed = JSON.parse(raw) as Partial<LocalData>;
    return {
      sessions: parsed.sessions ?? [],
      players: parsed.players ?? [],
      answers: parsed.answers ?? [],
    };
  } catch (error) {
    console.error(
      "[quiz] data/quiz.json exists but could not be parsed — refusing to treat it as empty:",
      error,
    );
    throw new Error("QUIZ_FILE_CORRUPTED");
  }
}

async function writeLocal(data: LocalData): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  await writeJsonAtomic(QUIZ_FILE, data);
}

// ─── Building the question set ──────────────────────────────────────────────

// Pulls every multiple-choice practice question from the given topics,
// shuffles which ones are picked AND the order their choices are shown in,
// and caps the result at MAX_QUESTIONS — using however many genuinely exist
// if that's fewer, the same "use what's actually there" reasoning
// examPool.ts's collectQuestionPool already follows for a whole-subject
// pool. Only questions with `choices` count: a live, on-screen, tap-a-button
// quiz has nowhere to put a typed answer.
//
// The correct CHOICE is whichever one matches the question's `accept` list
// under the same `normalise()` comparison Practice.tsx and MockExam.tsx use
// — NOT necessarily `q.answer` verbatim. `answer` is the model-answer text
// shown for self-marked questions; it can be phrased slightly differently
// from the exact wording of the matching `choices` entry (a stray "." or
// different capitalisation, say), which `accept` is specifically the list
// of forms that should count. Content-index.ts's own comment is explicit
// about this: "The correct one is whichever choice also appears in
// `accept`." A question somehow missing a matching choice is skipped
// rather than guessed at — better one fewer question in the round than one
// with no correct answer that can ever be found.
export function buildQuestionSet(
  subjectSlug: string,
  topics: { slug: string; title: string }[],
): QuizQuestion[] {
  const pool = topics.flatMap(({ slug, title }) => {
    const content = getTopicContent(subjectSlug, slug);
    return (content?.practice ?? [])
      .filter((q): q is typeof q & { choices: string[] } =>
        Boolean(q.choices && q.choices.length >= 2),
      )
      .map((q) => {
        const accepted = (q.accept ?? []).map(normalise);
        const correctChoice = q.choices.find((choice) => accepted.includes(normalise(choice)));
        return correctChoice
          ? {
              question: q.question,
              // Not stored yet — shuffled per-question just below, once, so
              // the choices a player sees are picked at the exact same
              // moment they're locked into the session for good.
              choices: q.choices,
              correctChoice,
              topicSlug: slug,
              topicTitle: title,
            }
          : null;
      })
      .filter((q): q is QuizQuestion => q !== null);
  });

  return shuffle(pool)
    .slice(0, MAX_QUESTIONS)
    .map((q) => ({ ...q, choices: shuffle(q.choices) }));
}

// A short, spoken-aloud-friendly room code, the same shape as a Kahoot game
// PIN — six digits, easy to read off a screen and type on a phone. Checked
// against real collisions rather than trusted to just not happen: with only
// 900,000 possible codes and sessions that (for now — see QUIZ_SETUP.sql's
// closing comment) never get deleted, a collision becomes likelier over the
// site's lifetime, not less.
async function generateRoomCode(): Promise<string> {
  for (let attempt = 0; attempt < 10; attempt++) {
    const code = String(Math.floor(100000 + Math.random() * 900000));
    const existing = await getQuizSession(code);
    if (!existing) return code;
  }
  throw new Error("[quiz] could not generate a free room code after 10 attempts");
}

// ─── Reading ────────────────────────────────────────────────────────────────

export async function getQuizSession(code: string): Promise<QuizSession | null> {
  if (QUIZ_ENABLED) {
    const res = await supabase(
      `quiz_sessions?code=eq.${encodeURIComponent(code)}&select=${SESSION_COLUMNS}&limit=1`,
    );
    if (!res.ok) return null;
    const rows = (await res.json()) as SessionRow[];
    return rows[0] ? sessionFromRow(rows[0]) : null;
  }

  const { sessions } = await readLocal();
  const row = sessions.find((s) => s.code === code);
  return row ? sessionFromRow(row) : null;
}

export async function getSessionPlayers(code: string): Promise<QuizPlayer[]> {
  if (QUIZ_ENABLED) {
    const res = await supabase(
      `quiz_players?session_code=eq.${encodeURIComponent(code)}&select=id,session_code,user_id,display_name,joined_at&order=joined_at.asc`,
    );
    if (!res.ok) return [];
    const rows = (await res.json()) as PlayerRow[];
    return rows.map(playerFromRow);
  }

  const { players } = await readLocal();
  return players
    .filter((p) => p.session_code === code)
    .sort((a, b) => a.joined_at.localeCompare(b.joined_at))
    .map(playerFromRow);
}

export async function getSessionAnswers(code: string): Promise<QuizAnswer[]> {
  if (QUIZ_ENABLED) {
    const res = await supabase(
      `quiz_answers?session_code=eq.${encodeURIComponent(code)}&select=session_code,player_id,question_index,choice_index,correct,points,answered_at`,
    );
    if (!res.ok) return [];
    const rows = (await res.json()) as AnswerRow[];
    return rows.map(answerFromRow);
  }

  const { answers } = await readLocal();
  return answers.filter((a) => a.session_code === code).map(answerFromRow);
}

// Every player, ranked highest score first — the running or final
// leaderboard, depending on how far through the game this is called. Scores
// are SUMMED from the answer log rather than tracked as a running total on
// the player row, the same "derive, don't store" reasoning progress.ts's
// getProgress already applies to XP and accuracy: it can never drift out of
// sync with what actually happened, because it IS what happened, added up.
export type QuizLeaderboardRow = {
  player: QuizPlayer;
  score: number;
  correctCount: number;
};

export async function getLeaderboard(code: string): Promise<QuizLeaderboardRow[]> {
  const [players, answers] = await Promise.all([
    getSessionPlayers(code),
    getSessionAnswers(code),
  ]);

  return players
    .map((player) => {
      const own = answers.filter((a) => a.playerId === player.id);
      return {
        player,
        score: own.reduce((sum, a) => sum + a.points, 0),
        correctCount: own.filter((a) => a.correct).length,
      };
    })
    .sort((a, b) => b.score - a.score);
}

// ─── Writing ────────────────────────────────────────────────────────────────

export async function createQuizSession(input: {
  hostUserId: string;
  subjectSlug: string;
  topics: { slug: string; title: string }[];
  // Built by the CALLER via buildQuestionSet, not here — quiz-actions.ts
  // needs to know the real, final question count BEFORE deciding whether to
  // write anything at all (see its own MIN_QUESTIONS check), and building
  // the set twice would both waste work and shuffle the choices differently
  // each time, for no reason. This function's only job is writing the
  // session row.
  questions: QuizQuestion[];
  questionSeconds: number;
}): Promise<QuizSession> {
  const questions = input.questions;
  const code = await generateRoomCode();

  const session: QuizSession = {
    code,
    hostUserId: input.hostUserId,
    subjectSlug: input.subjectSlug,
    topicSlugs: input.topics.map((t) => t.slug),
    topicTitles: input.topics.map((t) => t.title),
    questions,
    status: "lobby",
    currentIndex: -1,
    phaseStartedAt: null,
    questionSeconds: input.questionSeconds,
    createdAt: new Date().toISOString(),
  };

  if (QUIZ_ENABLED) {
    const res = await supabase("quiz_sessions", {
      method: "POST",
      headers: { Prefer: "return=minimal" },
      body: JSON.stringify({
        code: session.code,
        host_user_id: session.hostUserId,
        subject_slug: session.subjectSlug,
        topic_slugs: session.topicSlugs,
        topic_titles: session.topicTitles,
        questions: session.questions,
        status: session.status,
        current_index: session.currentIndex,
        phase_started_at: session.phaseStartedAt,
        question_seconds: session.questionSeconds,
        created_at: session.createdAt,
      }),
    });
    if (!res.ok) {
      throw new Error(
        `[quiz] could not create session: HTTP ${res.status} ${(await res.text()).slice(0, 200)}`,
      );
    }
    return session;
  }

  const { sessions, players, answers } = await readLocal();
  sessions.push({
    code: session.code,
    host_user_id: session.hostUserId,
    subject_slug: session.subjectSlug,
    topic_slugs: session.topicSlugs,
    topic_titles: session.topicTitles,
    questions: session.questions,
    status: session.status,
    current_index: session.currentIndex,
    phase_started_at: session.phaseStartedAt,
    question_seconds: session.questionSeconds,
    created_at: session.createdAt,
  });
  await writeLocal({ sessions, players, answers });
  return session;
}

export type JoinResult =
  | { ok: true; player: QuizPlayer }
  | { ok: false; error: "NOT_FOUND" | "ALREADY_STARTED" | "NAME_TAKEN" };

// Anyone with the room code can join — no account required, same as a
// Kahoot game PIN. If `userId` is set (the visitor is logged in), joining
// twice from the same account just returns their existing player row rather
// than erroring, so refreshing the join page doesn't create a duplicate —
// the database's own `unique(session_code, user_id)` is what actually makes
// this safe under a race, the same "let the constraint decide" reasoning
// clan_members' own unique(user_id) already follows. A GUEST (no userId)
// has no identity to de-duplicate by, so refreshing the join form as a
// guest simply adds another guest — an acceptable rough edge for a casual
// game, not something worth a browser-side identity system to prevent.
// ─────────────────────────────────────────────────────────────────────────────
// TWO PEOPLE, ONE NAME — found by having two players join a real game as
// "Sam". Both got in, and the lobby and every leaderboard afterwards showed
// "Sam" twice with no way to tell which was which. (The coloured shape beside
// each name does distinguish them, but a name is what people actually read.)
//
// A GUEST is simply asked for another one — they typed it, the box is right
// there, and this is exactly what Kahoot does. A LOGGED-IN player's name
// comes from their account and can't be edited from the join screen, so
// refusing them would be a dead end with no way out; theirs gets a number
// instead, which is the same answer a room full of Sams needs anyway.
// ─────────────────────────────────────────────────────────────────────────────
async function resolveDisplayName(
  code: string,
  userId: string | null,
  requested: string,
): Promise<{ ok: true; displayName: string } | { ok: false; error: "NAME_TAKEN" }> {
  const taken = new Set(
    (await getSessionPlayers(code)).map((player) => player.displayName.trim().toLowerCase()),
  );
  const wanted = requested.trim();
  if (!taken.has(wanted.toLowerCase())) return { ok: true, displayName: wanted };
  if (!userId) return { ok: false, error: "NAME_TAKEN" };

  let suffix = 2;
  while (taken.has(`${wanted} ${suffix}`.toLowerCase())) suffix += 1;
  return { ok: true, displayName: `${wanted} ${suffix}` };
}

export async function joinQuizSession(input: {
  code: string;
  userId: string | null;
  displayName: string;
}): Promise<JoinResult> {
  const session = await getQuizSession(input.code);
  if (!session) return { ok: false, error: "NOT_FOUND" };
  if (session.status !== "lobby") return { ok: false, error: "ALREADY_STARTED" };

  if (QUIZ_ENABLED) {
    if (input.userId) {
      const existingRes = await supabase(
        `quiz_players?session_code=eq.${encodeURIComponent(input.code)}&user_id=eq.${encodeURIComponent(input.userId)}&select=id,session_code,user_id,display_name,joined_at&limit=1`,
      );
      const existingRows = existingRes.ok ? ((await existingRes.json()) as PlayerRow[]) : [];
      if (existingRows[0]) return { ok: true, player: playerFromRow(existingRows[0]) };
    }

    const resolved = await resolveDisplayName(input.code, input.userId, input.displayName);
    if (!resolved.ok) return resolved;

    const row: PlayerRow = {
      id: randomUUID(),
      session_code: input.code,
      user_id: input.userId,
      display_name: resolved.displayName,
      joined_at: new Date().toISOString(),
    };
    const res = await supabase("quiz_players", {
      method: "POST",
      headers: { Prefer: "return=minimal" },
      body: JSON.stringify(row),
    });
    if (!res.ok) {
      throw new Error(
        `[quiz] could not join session: HTTP ${res.status} ${(await res.text()).slice(0, 200)}`,
      );
    }
    return { ok: true, player: playerFromRow(row) };
  }

  const { sessions, players, answers } = await readLocal();
  if (input.userId) {
    const existing = players.find(
      (p) => p.session_code === input.code && p.user_id === input.userId,
    );
    if (existing) return { ok: true, player: playerFromRow(existing) };
  }

  const resolved = await resolveDisplayName(input.code, input.userId, input.displayName);
  if (!resolved.ok) return resolved;

  const row: PlayerRow = {
    id: randomUUID(),
    session_code: input.code,
    user_id: input.userId,
    display_name: resolved.displayName,
    joined_at: new Date().toISOString(),
  };
  players.push(row);
  await writeLocal({ sessions, players, answers });
  return { ok: true, player: playerFromRow(row) };
}

export type HostActionResult = { ok: true } | { ok: false; error: "NOT_FOUND" | "NOT_HOST" | "WRONG_PHASE" };

async function patchSession(code: string, patch: Record<string, unknown>): Promise<void> {
  if (QUIZ_ENABLED) {
    const res = await supabase(`quiz_sessions?code=eq.${encodeURIComponent(code)}`, {
      method: "PATCH",
      headers: { Prefer: "return=minimal" },
      body: JSON.stringify(patch),
    });
    if (!res.ok) {
      throw new Error(
        `[quiz] could not update session: HTTP ${res.status} ${(await res.text()).slice(0, 200)}`,
      );
    }
    return;
  }

  const { sessions, players, answers } = await readLocal();
  const row = sessions.find((s) => s.code === code);
  if (!row) return;
  Object.assign(row, patch);
  await writeLocal({ sessions, players, answers });
}

// Every host-only phase change (start, reveal, advance) follows the exact
// same three-check shape — does the session exist, is this caller really
// its host, is it actually in the phase this action expects — so it's
// pulled out once rather than repeated three times slightly differently.
// Checked here, in the data layer, not only by which page shows which
// button: a hidden "Start" button is a UI nicety, this is the actual
// guarantee that nobody but the real host can ever move the game along.
type HostCheckResult =
  | { ok: false; error: "NOT_FOUND" | "NOT_HOST" | "WRONG_PHASE" }
  | { ok: true; session: QuizSession };

// `expectedStatus` takes either one status (every existing caller) or a
// short list of them — added for endQuizNow below, which is valid from
// EITHER "question" or "reveal". Kept as one shared checker rather than
// endQuizNow growing its own copy of the same three-part check.
async function checkHostAction(
  code: string,
  hostUserId: string,
  expectedStatus: QuizStatus | QuizStatus[],
): Promise<HostCheckResult> {
  const session = await getQuizSession(code);
  if (!session) return { ok: false, error: "NOT_FOUND" };
  if (session.hostUserId !== hostUserId) return { ok: false, error: "NOT_HOST" };
  const allowedStatuses = Array.isArray(expectedStatus) ? expectedStatus : [expectedStatus];
  if (!allowedStatuses.includes(session.status)) return { ok: false, error: "WRONG_PHASE" };
  return { ok: true, session };
}

export async function startQuizSession(
  code: string,
  hostUserId: string,
): Promise<HostActionResult> {
  const check = await checkHostAction(code, hostUserId, "lobby");
  if (!check.ok) return check;

  await patchSession(code, {
    status: "question",
    current_index: 0,
    phase_started_at: new Date().toISOString(),
  });
  return { ok: true };
}

export async function revealCurrentQuestion(
  code: string,
  hostUserId: string,
): Promise<HostActionResult> {
  const check = await checkHostAction(code, hostUserId, "question");
  if (!check.ok) return check;

  await patchSession(code, {
    status: "reveal",
    phase_started_at: new Date().toISOString(),
  });
  return { ok: true };
}

// A SECOND way the question→reveal move can happen — not host-triggered at
// all. HostQuizScreen.tsx already calls revealCurrentQuestion the instant
// its own on-screen countdown hits zero, but that only runs inside ONE
// specific browser tab: the host's. Nobody's tab is guaranteed to stay
// open — a laptop lid closed to swap to another app, a phone that locked,
// a flaky connection — and if that one tab stalls, nothing else was ever
// going to call revealCurrentQuestion. Every OTHER screen in the room —
// every player's own device, still politely polling — would sit frozen on
// an expired question forever.
//
// So the same check also lives here, on getQuizView's own read path,
// which EVERY screen already polls (host included) — whichever poller
// happens to notice the clock has run out flips the phase for everyone,
// host tab or not. It's purely a fact about the session's own
// server-recorded `phaseStartedAt` versus the current time — nothing a
// player's own device sends or controls — so there's no new way to cheat
// hiding in this, only a way for the game to stop depending on one
// specific tab staying alive. Reveal itself stays host-paced on purpose
// (see advanceQuestion's own comment) — this only ever fires the ONE
// transition that already had a hard deadline attached to it.
export async function autoRevealIfExpired(session: QuizSession): Promise<QuizSession> {
  if (session.status !== "question" || !session.phaseStartedAt) return session;

  const elapsedSeconds = (Date.now() - new Date(session.phaseStartedAt).getTime()) / 1000;
  if (elapsedSeconds < session.questionSeconds) return session;

  const revealedAt = new Date().toISOString();
  await patchSession(session.code, { status: "reveal", phase_started_at: revealedAt });
  return { ...session, status: "reveal", phaseStartedAt: revealedAt };
}

// Moves on from the reveal screen — to the next question, or to the final
// leaderboard if that was the last one. One action rather than two,
// because "what happens next" is a plain fact about the session
// (`currentIndex + 1 < questions.length`), not a choice the host actually
// makes — the host's own page just relabels the same button "Next
// question" vs "Show final results" depending on which this will be.
export async function advanceQuestion(
  code: string,
  hostUserId: string,
): Promise<HostActionResult> {
  const check = await checkHostAction(code, hostUserId, "reveal");
  if (!check.ok) return check;

  const isLastQuestion = check.session.currentIndex + 1 >= check.session.questions.length;
  await patchSession(code, {
    status: isLastQuestion ? "finished" : "question",
    current_index: isLastQuestion ? check.session.currentIndex : check.session.currentIndex + 1,
    phase_started_at: isLastQuestion ? null : new Date().toISOString(),
  });
  return { ok: true };
}

// Lets the host bail out of a game partway through — a class ran out of
// time, the wrong topics got picked, whatever — rather than the only way
// forward being to click Reveal/Next all the way to the natural end. Valid
// from either "question" or "reveal"; NOT from "lobby" (that's just not
// starting, no need for a separate action) or "finished" (already there).
// Jumps straight to the final leaderboard using whatever answers already
// exist — nothing is discarded, a game ended early simply has fewer
// questions counted than a full one would have.
export async function endQuizNow(code: string, hostUserId: string): Promise<HostActionResult> {
  const check = await checkHostAction(code, hostUserId, ["question", "reveal"]);
  if (!check.ok) return check;

  await patchSession(code, {
    status: "finished",
    phase_started_at: null,
  });
  return { ok: true };
}

// Lets the host remove someone from the lobby before starting — a
// duplicate join, someone clearly in the wrong room, a stranger who landed
// on a valid code. Deliberately LOBBY-ONLY: once a game has started,
// removing a player would raise real questions this doesn't try to answer
// (what happens to their existing answers and score?) that a pre-start
// removal never has to, since nothing has been recorded for anyone yet.
export async function removePlayer(
  code: string,
  hostUserId: string,
  playerId: string,
): Promise<HostActionResult> {
  const check = await checkHostAction(code, hostUserId, "lobby");
  if (!check.ok) return check;

  if (QUIZ_ENABLED) {
    const res = await supabase(
      `quiz_players?id=eq.${encodeURIComponent(playerId)}&session_code=eq.${encodeURIComponent(code)}`,
      { method: "DELETE", headers: { Prefer: "return=minimal" } },
    );
    if (!res.ok) {
      throw new Error(
        `[quiz] could not remove player: HTTP ${res.status} ${(await res.text()).slice(0, 200)}`,
      );
    }
    return { ok: true };
  }

  const { sessions, players, answers } = await readLocal();
  const remaining = players.filter((p) => !(p.id === playerId && p.session_code === code));
  await writeLocal({ sessions, players: remaining, answers });
  return { ok: true };
}

export type SubmitAnswerResult =
  | { ok: true; correct: boolean; points: number }
  | { ok: false; error: "NOT_FOUND" | "WRONG_PHASE" | "ALREADY_ANSWERED" | "NOT_A_PLAYER" };

// Scoring, Kahoot-style: full marks for an instant correct answer, decaying
// toward half marks as the clock runs out, zero for a wrong answer — so
// "getting it right" always beats "getting it right slowly", but nobody who
// answers correctly is ever punished down to nothing just for taking the
// last available second. `elapsedSeconds` is computed from THIS SERVER'S
// clock against `phaseStartedAt`, never trusted from the caller — the
// browser reporting its own "how fast I was" would turn the leaderboard
// into whatever number a player's own devtools felt like sending.
const MAX_POINTS = 1000;
const MIN_POINTS_FOR_CORRECT = 500;

// ─────────────────────────────────────────────────────────────────────────────
// HOW LATE AN ANSWER IS STILL ALLOWED TO BE.
//
// Not zero, on purpose. A tap made at 19.9 seconds still has to travel to the
// server, and rejecting it because it landed at 20.1 would punish a player
// for their own broadband rather than for being slow — they'd get "too slow"
// for an answer they genuinely got in on time.
//
// So the BUTTONS stop working the instant the countdown hits zero (see
// PlayQuizScreen), and the server allows a second's worth of travel on top.
// Strict where the player acts, forgiving only about the wire in between.
// ─────────────────────────────────────────────────────────────────────────────
const LATE_ANSWER_GRACE_SECONDS = 1;

export async function submitAnswer(input: {
  code: string;
  playerId: string;
  questionIndex: number;
  choiceIndex: number;
}): Promise<SubmitAnswerResult> {
  const session = await getQuizSession(input.code);
  if (!session) return { ok: false, error: "NOT_FOUND" };
  if (session.status !== "question" || session.currentIndex !== input.questionIndex) {
    return { ok: false, error: "WRONG_PHASE" };
  }

  // THE CLOCK, NOT JUST THE PHASE. `status` only becomes "reveal" once some
  // device happens to poll after the deadline (see autoRevealIfExpired), so
  // between the timer hitting zero and the next poll landing there was a
  // window — over a second wide, and wider if every screen was closed — where
  // a late answer was still accepted, and still scored the 500 floor. A
  // 30-second answer to a 20-second question scored 500; that's what this
  // stops.
  //
  // The deadline is a plain fact about the session's own server-recorded
  // `phaseStartedAt` and `questionSeconds`, so it's checked here directly
  // rather than being inferred from a status somebody else has to update
  // first. Nothing the player's device sends is trusted for it.
  if (session.phaseStartedAt) {
    const elapsedSeconds = (Date.now() - new Date(session.phaseStartedAt).getTime()) / 1000;
    if (elapsedSeconds > session.questionSeconds + LATE_ANSWER_GRACE_SECONDS) {
      return { ok: false, error: "WRONG_PHASE" };
    }
  }

  const players = await getSessionPlayers(input.code);
  const player = players.find((p) => p.id === input.playerId);
  if (!player) return { ok: false, error: "NOT_A_PLAYER" };

  const question = session.questions[input.questionIndex];
  const choice = question?.choices[input.choiceIndex];
  const correct = choice !== undefined && choice === question.correctChoice;

  let points = 0;
  if (correct && session.phaseStartedAt) {
    const elapsedSeconds = (Date.now() - new Date(session.phaseStartedAt).getTime()) / 1000;
    const remainingFraction = Math.max(
      0,
      Math.min(1, 1 - elapsedSeconds / session.questionSeconds),
    );
    points = Math.round(MIN_POINTS_FOR_CORRECT + (MAX_POINTS - MIN_POINTS_FOR_CORRECT) * remainingFraction);
  }

  const row: AnswerRow = {
    session_code: input.code,
    player_id: input.playerId,
    question_index: input.questionIndex,
    choice_index: input.choiceIndex,
    correct,
    points,
    answered_at: new Date().toISOString(),
  };

  if (QUIZ_ENABLED) {
    const res = await supabase("quiz_answers", {
      method: "POST",
      headers: { Prefer: "return=minimal" },
      body: JSON.stringify(row),
    });
    if (!res.ok) {
      // The primary key (session_code, player_id, question_index) is what
      // actually stops a double-submit — a slow retry or a doubled tap
      // hits this exact path, the same "let the constraint decide, don't
      // just check-then-write" reasoning as clan_members' unique(user_id).
      const body = await res.text();
      if (res.status === 409 || body.includes("23505")) {
        return { ok: false, error: "ALREADY_ANSWERED" };
      }
      throw new Error(`[quiz] could not record answer: HTTP ${res.status} ${body.slice(0, 200)}`);
    }
    return { ok: true, correct, points };
  }

  const { sessions, players: allPlayers, answers } = await readLocal();
  const alreadyAnswered = answers.some(
    (a) =>
      a.session_code === input.code &&
      a.player_id === input.playerId &&
      a.question_index === input.questionIndex,
  );
  if (alreadyAnswered) return { ok: false, error: "ALREADY_ANSWERED" };

  answers.push(row);
  await writeLocal({ sessions, players: allPlayers, answers });
  return { ok: true, correct, points };
}
