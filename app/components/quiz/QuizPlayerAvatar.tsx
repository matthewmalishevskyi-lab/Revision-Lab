import { QuizShapeIcon } from "./QuizShapeIcon";
import { quizAvatarStyle } from "./quizAvatar";

// Used everywhere a player's name shows up outside the answer buttons
// themselves — the lobby chip list (host screen and player screen both)
// and every leaderboard row — so the same six colours and shapes read as
// one consistent way this site represents "a player," not just something
// the answer buttons happen to do.
export function QuizPlayerAvatar({
  playerId,
  size = 26,
}: {
  playerId: string;
  size?: number;
}) {
  const style = quizAvatarStyle(playerId);

  return (
    <span
      aria-hidden="true"
      className="flex shrink-0 items-center justify-center rounded-full"
      style={{ backgroundColor: style.bg, width: size, height: size }}
    >
      <QuizShapeIcon shape={style.shape} className="h-[58%] w-[58%] text-white" />
    </span>
  );
}
