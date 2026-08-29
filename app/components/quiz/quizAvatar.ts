import { QUIZ_CHOICE_STYLES, type QuizChoiceStyle } from "./quizChoiceStyles";

// A stable little "avatar" for each player, built from nothing but their
// own id — no separate avatar picker to build, no new field to store, just
// the same six colours and shapes the answer buttons already use, so a
// player's identity in the lobby list and the leaderboard reads as part of
// the same visual language rather than plain text next to a number.
//
// Hashed from the id rather than, say, join order: join order shifts under
// removePlayer (someone leaves, everyone after them shifts up one), which
// would change a completely different player's avatar for a reason that
// has nothing to do with them.
export function quizAvatarStyle(playerId: string): QuizChoiceStyle {
  let hash = 0;
  for (let i = 0; i < playerId.length; i++) {
    hash = (hash * 31 + playerId.charCodeAt(i)) >>> 0;
  }
  return QUIZ_CHOICE_STYLES[hash % QUIZ_CHOICE_STYLES.length];
}
