"use server";

// The bridge between the browser and the quiz tables — see clan-actions.ts's
// own header comment for the general shape (Server Actions validating on
// the server, never trusting the browser) and progress-actions.ts's for why
// every argument here is treated as hostile. Two things are specific to a
// LIVE game rather than a one-off form submission, worth flagging up front:
//
// 1. Several of these are called on a repeating timer (polling), not just
//    once from a button click — `getQuizView` above all. That's normal for
//    this file, not a sign something's wrong.
// 2. A guest player has no account and therefore no session cookie to prove
//    who they are — their `playerId` (handed back once, when they join) is
//    effectively a bearer capability: whoever has it can act as that
//    player. Acceptable for a casual game between people who already know
//    each other's room code; not the security model an account page uses.

import { redirect } from "next/navigation";
import { getCurrentUser } from "./actions";
import { getSessionUserId } from "./session";
import { getSubject } from "./subjects";
import {
  advanceQuestion,
  createQuizSession,
  getLeaderboard,
  getQuizSession,
  getSessionAnswers,
  getSessionPlayers,
  joinQuizSession,
  revealCurrentQuestion,
  startQuizSession,
  submitAnswer,
  type QuizLeaderboardRow,
} from "./quiz";

export type CreateQuizState = { formError?: string } | null;

const MIN_TOPICS = 2;
const MAX_TOPICS = 4;
const QUESTION_SECONDS = 20;

// Hosting requires an account, the same as creating a clan — someone has to
// own the room and be trusted to control its pace. Redirects straight to the
// new room's own control screen on success, the same "create, then land on
// the thing you made" pattern createClanAction already follows.
export async function createQuizAction(
  _prevState: CreateQuizState,
  formData: FormData,
): Promise<CreateQuizState> {
  const userId = await getSessionUserId();
  if (!userId) return { formError: "Please log in first." };

  const subjectSlug = String(formData.get("subjectSlug") ?? "");
  const subject = getSubject(subjectSlug);
  if (!subject) return { formError: "Please choose a real subject." };

  // Every topic slug the form submitted, checked against the REAL subject
  // data rather than trusted — the same "never trust that a value in a POST
  // body is one the form actually offered" reasoning createClanAction's own
  // banner check follows, since a hand-crafted request could name any topic
  // slug at all, from any subject.
  const submittedSlugs = formData.getAll("topicSlug").map(String);
  const allTopics = subject.years.flatMap((group) => group.topics);
  const topics = allTopics.filter((t) => submittedSlugs.includes(t.slug));

  if (topics.length < MIN_TOPICS) {
    return { formError: `Pick at least ${MIN_TOPICS} topics.` };
  }
  if (topics.length > MAX_TOPICS) {
    return { formError: `Pick at most ${MAX_TOPICS} topics.` };
  }

  const session = await createQuizSession({
    hostUserId: userId,
    subjectSlug,
    topics: topics.map((t) => ({ slug: t.slug, title: t.title })),
    questionSeconds: QUESTION_SECONDS,
  });

  if (session.questions.length === 0) {
    // Can happen if every chosen topic's multiple-choice questions were
    // somehow all filtered out — not expected given the site-wide MCQ
    // minimum, but a quiz with zero questions is a worse failure mode than
    // just saying so up front and leaving nothing behind in the database.
    return { formError: "Those topics don't have any quiz-ready questions yet — try different ones." };
  }

  redirect(`/quiz/host/${session.code}`);
}

export type JoinQuizResult =
  | { ok: true; code: string; playerId: string; displayName: string }
  | { ok: false; error: string };

// Called directly from the join page's Client Component, not bound to a
// form — it needs to hand the new player's id BACK to the browser so it can
// be remembered there (localStorage, the same "fact about this browser, not
// the site's data" reasoning the theme toggle and wardrobe choice already
// use) and to redirect, rather than fail, for a guest with nowhere to sign
// in to. A logged-in visitor plays under their real name and account —
// there's no separate "pick a name" step for them, the same as how a clan
// membership is always your real account, never a nickname.
export async function joinQuizAction(
  code: string,
  guestName: string,
): Promise<JoinQuizResult> {
  const trimmedCode = code.trim();
  if (!/^\d{6}$/.test(trimmedCode)) {
    return { ok: false, error: "Room codes are 6 digits — check what you typed." };
  }

  const user = await getCurrentUser();
  const displayName = user
    ? user.name.trim().split(/\s+/)[0]
    : guestName.trim().slice(0, 30);

  if (!displayName) {
    return { ok: false, error: "Enter a name so other players know who you are." };
  }

  const result = await joinQuizSession({
    code: trimmedCode,
    userId: user?.id ?? null,
    displayName,
  });

  if (!result.ok) {
    const messages: Record<typeof result.error, string> = {
      NOT_FOUND: "That room code doesn't exist — double check it.",
      ALREADY_STARTED: "That quiz has already started — ask the host for a new one.",
    };
    return { ok: false, error: messages[result.error] };
  }

  return {
    ok: true,
    code: trimmedCode,
    playerId: result.player.id,
    displayName: result.player.displayName,
  };
}

// The actual "is this really the host of THIS room" check happens inside
// quiz.ts's checkHostAction (comparing against the session's own
// host_user_id) — this only needs to establish that somebody is logged in
// at all, so there's an account id to hand it.
async function requireLoggedIn(): Promise<string> {
  const userId = await getSessionUserId();
  if (!userId) redirect("/login");
  return userId;
}

export async function startQuizAction(code: string): Promise<{ ok: boolean; error?: string }> {
  const hostUserId = await requireLoggedIn();
  const result = await startQuizSession(code, hostUserId);
  return result.ok ? { ok: true } : { ok: false, error: result.error };
}

export async function revealAction(code: string): Promise<{ ok: boolean; error?: string }> {
  const hostUserId = await requireLoggedIn();
  const result = await revealCurrentQuestion(code, hostUserId);
  return result.ok ? { ok: true } : { ok: false, error: result.error };
}

export async function advanceAction(code: string): Promise<{ ok: boolean; error?: string }> {
  const hostUserId = await requireLoggedIn();
  const result = await advanceQuestion(code, hostUserId);
  return result.ok ? { ok: true } : { ok: false, error: result.error };
}

export async function submitAnswerAction(
  code: string,
  playerId: string,
  questionIndex: number,
  choiceIndex: number,
): Promise<{ ok: boolean; correct?: boolean; points?: number; error?: string }> {
  if (
    !Number.isInteger(questionIndex) ||
    questionIndex < 0 ||
    !Number.isInteger(choiceIndex) ||
    choiceIndex < 0
  ) {
    return { ok: false, error: "NOT_A_PLAYER" };
  }

  const result = await submitAnswer({ code, playerId, questionIndex, choiceIndex });
  return result.ok
    ? { ok: true, correct: result.correct, points: result.points }
    : { ok: false, error: result.error };
}

// ─── The one function everyone's screen polls ──────────────────────────────
//
// One shared shape for both the host's control screen and every player's
// device, rather than two separate "get state" functions quietly drifting
// apart over which fields mean what. The one thing that genuinely differs
// by caller is handled with a single flag (`viewerPlayerId`), not two
// different functions:
//
// The correct answer is stripped out of `currentQuestion` unless the round
// is actually in `reveal`/`finished` — checked here, in the one place
// EVERY screen reads a question through, rather than trusted to each page
// component to remember not to render a field it shouldn't. A player
// reading their own network tab mid-question should learn nothing a
// guess wouldn't have told them.
export type QuizView = {
  code: string;
  subjectSlug: string;
  subjectName: string;
  topicTitles: string[];
  status: "lobby" | "question" | "reveal" | "finished";
  currentIndex: number;
  totalQuestions: number;
  questionSeconds: number;
  phaseStartedAt: string | null;
  currentQuestion: { question: string; choices: string[]; topicSlug: string; topicTitle: string } | null;
  // Only set once the round is in `reveal` or `finished` — see the comment
  // above.
  revealedCorrectChoice: string | null;
  choiceTally: number[] | null;
  players: { id: string; displayName: string }[];
  answeredCount: number;
  leaderboard: QuizLeaderboardRow[];
  // Only meaningful when `viewerPlayerId` was passed and actually matches a
  // real player in this session.
  myAnswer: { choiceIndex: number; correct: boolean; points: number } | null;
};

export async function getQuizView(
  code: string,
  viewerPlayerId?: string | null,
): Promise<QuizView | null> {
  const session = await getQuizSession(code);
  if (!session) return null;

  const subject = getSubject(session.subjectSlug);
  const [players, answers, leaderboard] = await Promise.all([
    getSessionPlayers(code),
    getSessionAnswers(code),
    getLeaderboard(code),
  ]);

  const revealed = session.status === "reveal" || session.status === "finished";
  const question = session.questions[session.currentIndex] ?? null;

  const currentQuestionAnswers = answers.filter((a) => a.questionIndex === session.currentIndex);

  const choiceTally =
    session.status === "reveal" && question
      ? question.choices.map(
          (_, i) => currentQuestionAnswers.filter((a) => a.choiceIndex === i).length,
        )
      : null;

  const myAnswerRow = viewerPlayerId
    ? currentQuestionAnswers.find((a) => a.playerId === viewerPlayerId)
    : undefined;

  return {
    code: session.code,
    subjectSlug: session.subjectSlug,
    subjectName: subject?.name ?? session.subjectSlug,
    topicTitles: session.topicTitles,
    status: session.status,
    currentIndex: session.currentIndex,
    totalQuestions: session.questions.length,
    questionSeconds: session.questionSeconds,
    phaseStartedAt: session.phaseStartedAt,
    currentQuestion: question
      ? {
          question: question.question,
          choices: question.choices,
          topicSlug: question.topicSlug,
          topicTitle: question.topicTitle,
        }
      : null,
    revealedCorrectChoice: revealed && question ? question.correctChoice : null,
    choiceTally,
    players: players.map((p) => ({ id: p.id, displayName: p.displayName })),
    answeredCount: currentQuestionAnswers.length,
    leaderboard,
    myAnswer: myAnswerRow
      ? { choiceIndex: myAnswerRow.choiceIndex, correct: myAnswerRow.correct, points: myAnswerRow.points }
      : null,
  };
}
