// Shared quiz-creation limits — pulled into their own file, with ZERO
// imports of its own, so a Client Component (HostSetupForm.tsx) can import
// these exact numbers without also pulling in quiz-actions.ts's "use
// server" module graph or quiz.ts's server-only node:fs/node:crypto code.
//
// This is the identical trap, and the identical fix, that chipStyles.ts
// already exists to avoid for the dark-mode toggle — see PROJECT_NOTES.md's
// 2026-08-14 entry. `tsc` and `eslint` both pass clean either way, since
// neither understands the React Server/Client boundary; the only thing that
// actually catches this class of bug is a real `next build` on a real
// machine. Keeping these numbers here, rather than duplicated as literals
// in both quiz-actions.ts and HostSetupForm.tsx, is also what stops the two
// copies quietly drifting apart the way this codebase has been bitten by
// duplicated constants before (the 30-day account deletion window, plural
// places).
export const MIN_TOPICS = 2;
export const MAX_TOPICS = 4;
export const QUESTION_SECONDS = 20;

// A round needs to feel like a round. One or two questions technically
// "works" but isn't what anyone means by hosting a quiz — this is the floor
// below which createQuizAction refuses and asks for different topics,
// rather than silently starting something that ends after ten seconds.
export const MIN_QUESTIONS = 3;

// The ceiling a round is capped at, however many real questions the chosen
// topics could produce. Lives here rather than as a private constant inside
// quiz.ts because HostSetupForm.tsx's own helper text ("the room caps at
// 20") used to just be a hand-typed literal with nothing tying it to the
// real cap — exactly the kind of two-copies-of-one-fact drift this
// codebase has been bitten by before (see PROJECT_NOTES.md on the 30-day
// account deletion window).
export const MAX_QUESTIONS = 20;
