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
import { containsProfanity, PROFANITY_REJECTION_MESSAGE } from "./cleanName";
import { checkQuizJoinAllowed, humanDelay, recordFailedQuizJoin } from "./throttle";
import { MAX_TOPICS, MIN_QUESTIONS, MIN_TOPICS, QUESTION_SECONDS } from "./quizConfig";
import {
  advanceQuestion,
  autoRevealIfExpired,
  buildQuestionSet,
  createQuizSession,
  endQuizNow,
  getLeaderboard,
  getQuizSession,
  getSessionAnswers,
  getSessionPlayers,
  joinQuizSession,
  removePlayer,
  revealCurrentQuestion,
  startQuizSession,
  submitAnswer,
  type QuizLeaderboardRow,
} from "./quiz";

export type CreateQuizState = { formError?: string } | null;

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

  // Built and checked BEFORE anything is written — a topic combination that
  // can't produce a real round should never leave a dead session row
  // behind, which calling createQuizSession first and only checking
  // afterwards used to do.
  const topicList = topics.map((t) => ({ slug: t.slug, title: t.title }));
  const questions = buildQuestionSet(subjectSlug, topicList);

  if (questions.length < MIN_QUESTIONS) {
    // Covers both "zero" (every chosen topic's MCQs got filtered out — not
    // expected given the site-wide MCQ minimum, but possible) and "one or
    // two" (a real round shouldn't be able to end after ten seconds).
    return {
      formError: `Those topics only have ${questions.length} quiz-ready question${questions.length === 1 ? "" : "s"} between them — pick a couple more topics for a real round.`,
    };
  }

  const session = await createQuizSession({
    hostUserId: userId,
    subjectSlug,
    topics: topicList,
    questions,
    questionSeconds: QUESTION_SECONDS,
  });

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

  // A room code is only 6 digits and, unlike a clan, IS the whole secret —
  // nothing else stands between a stranger and a live room. Checked BEFORE
  // touching the database, the same "the cheap, broad check guards the
  // expensive, unbounded one" ordering checkLoginAllowed already follows —
  // see throttle.ts's own comment on why this needed adding at all.
  const throttle = await checkQuizJoinAllowed();
  if (!throttle.allowed) {
    return {
      ok: false,
      error: `Too many room codes tried too quickly. Please wait ${humanDelay(throttle.retryAfterSeconds)} and try again.`,
    };
  }

  const user = await getCurrentUser();
  const displayName = user
    ? user.name.trim().split(/\s+/)[0]
    : guestName.trim().slice(0, 30);

  if (!displayName) {
    return { ok: false, error: "Enter a name so other players know who you are." };
  }

  // Only the GUEST-typed name is checked. A logged-in player's name came
  // from their account, was checked when they registered, and isn't editable
  // from this screen — rejecting it here would be a dead end they had no way
  // to get out of.
  if (!user && containsProfanity(displayName)) {
    return { ok: false, error: PROFANITY_REJECTION_MESSAGE };
  }

  const result = await joinQuizSession({
    code: trimmedCode,
    userId: user?.id ?? null,
    displayName,
  });

  if (!result.ok) {
    // Only an actually-wrong guess counts against the limit above — a
    // correct code someone was handed by a real host isn't an attack, the
    // same "only failures count" reasoning login's own throttle follows.
    // ALREADY_STARTED means the code is real (found a real room, just not
    // one that can be joined right now), so it isn't counted as a failed
    // guess either.
    if (result.error === "NOT_FOUND") await recordFailedQuizJoin();

    const messages: Record<typeof result.error, string> = {
      NOT_FOUND: "That room code doesn't exist — double check it.",
      ALREADY_STARTED: "That quiz has already started — ask the host for a new one.",
      NAME_TAKEN: "Someone in that room is already using that name — try another.",
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

// Turns quiz.ts's internal HostActionResult error codes into something a
// person can actually read. Before this, HostQuizScreen.tsx's error banner
// showed the raw code — literally the text "WRONG_PHASE" — whenever a host
// action failed, which is exactly the kind of thing joinQuizAction's own
// `messages` record above already exists to avoid for joining. Shared
// across all three actions below since the same three codes mean the same
// three things regardless of which action hit them.
function hostActionErrorMessage(error: "NOT_FOUND" | "NOT_HOST" | "WRONG_PHASE"): string {
  const messages: Record<typeof error, string> = {
    NOT_FOUND: "That room doesn't exist any more.",
    NOT_HOST: "Only the person who created this room can control it.",
    // In practice this fires when two clicks (or an auto-reveal and a
    // manual one) land at almost the same moment — the game already moved
    // on to what this button would have done, so there's nothing wrong to
    // report beyond "you're a beat behind"; refresh() right after this
    // catches the screen up regardless.
    WRONG_PHASE: "The room already moved on — refreshing…",
  };
  return messages[error];
}

export async function startQuizAction(code: string): Promise<{ ok: boolean; error?: string }> {
  const hostUserId = await requireLoggedIn();
  const result = await startQuizSession(code, hostUserId);
  return result.ok ? { ok: true } : { ok: false, error: hostActionErrorMessage(result.error) };
}

export async function revealAction(code: string): Promise<{ ok: boolean; error?: string }> {
  const hostUserId = await requireLoggedIn();
  const result = await revealCurrentQuestion(code, hostUserId);
  return result.ok ? { ok: true } : { ok: false, error: hostActionErrorMessage(result.error) };
}

export async function advanceAction(code: string): Promise<{ ok: boolean; error?: string }> {
  const hostUserId = await requireLoggedIn();
  const result = await advanceQuestion(code, hostUserId);
  return result.ok ? { ok: true } : { ok: false, error: hostActionErrorMessage(result.error) };
}

export async function endQuizAction(code: string): Promise<{ ok: boolean; error?: string }> {
  const hostUserId = await requireLoggedIn();
  const result = await endQuizNow(code, hostUserId);
  return result.ok ? { ok: true } : { ok: false, error: hostActionErrorMessage(result.error) };
}

export async function removePlayerAction(
  code: string,
  playerId: string,
): Promise<{ ok: boolean; error?: string }> {
  const hostUserId = await requireLoggedIn();
  const result = await removePlayer(code, hostUserId, playerId);
  return result.ok ? { ok: true } : { ok: false, error: hostActionErrorMessage(result.error) };
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
  let session = await getQuizSession(code);
  if (!session) return null;

  // See autoRevealIfExpired's own comment in quiz.ts — this is what makes
  // the question timer's deadline real even if the host's own tab isn't
  // the one that notices it passed.
  session = await autoRevealIfExpired(session);

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
