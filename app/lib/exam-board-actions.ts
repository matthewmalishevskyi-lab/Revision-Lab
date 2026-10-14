"use server";

// Choosing an exam board for one subject. Whose choice it is comes from the
// session cookie, never from the form — the rule every action here follows.
// The subject and the board ARE from the form, so both are checked against
// the real lists before anything is written: this is reachable by anything
// that can make an HTTP request, not only by the chooser's buttons.

import { revalidatePath } from "next/cache";
import { getSessionUserId } from "./session";
import { asksForBoard, isBoardChoice } from "./examBoards";
import { setBoardChoice } from "./exam-board-store";

export type BoardActionState = { error?: string; saved?: string };

export async function setExamBoardAction(_prev: BoardActionState, formData: FormData): Promise<BoardActionState> {
  const userId = await getSessionUserId();
  if (!userId) return { error: "You need to be logged in to save an exam board." };

  const subject = formData.get("subject");
  const board = formData.get("board");
  if (typeof subject !== "string" || !asksForBoard(subject)) return { error: "That subject doesn't have an exam board choice." };
  if (!isBoardChoice(board)) return { error: "That isn't one of the boards." };

  if (!(await setBoardChoice(userId, subject, board))) {
    return { error: "Couldn't save that just now — nothing has been hidden. Try again in a moment." };
  }
  // Every page with a topic list can change: the subject page, tests, today's
  // practice, the dashboard's queue. They all read the viewer per request, so
  // this only clears what the browser's router has already cached.
  revalidatePath("/", "layout");
  return { saved: board };
}
