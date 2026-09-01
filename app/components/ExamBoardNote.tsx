"use client";

import Link from "next/link";
import { useStoredRaw } from "../lib/browserStore";
import { boardLabel, boardNoteFor, EXAM_BOARD_KEY, isExamBoard } from "../lib/examBoards";

// Personalises the "topics vary between boards" notice that used to be one
// flat sentence at the bottom of every subject page, regardless of anything
// a student had told the site about themselves.
//
// Same hydration-safe shape as AccessibilityPanel and DashboardCelebrations:
// `useStoredRaw`'s serverValue is null, so the server and the client's very
// first paint both render the "no board chosen yet" version — which is
// deliberately written to be the exact same sentence this used to always
// show, so nobody who never visits /exam-board sees any change at all. Once
// a board is actually stored, this corrects itself with no effect involved.
export function ExamBoardNote({ subjectSlug }: { subjectSlug: string }) {
  const raw = useStoredRaw(EXAM_BOARD_KEY, null);
  const board = isExamBoard(raw) ? raw : null;

  if (!board) {
    return (
      <p className="mx-auto mt-10 max-w-3xl text-center text-sm opacity-60">
        <Link
          href="/exam-board"
          className="font-medium underline underline-offset-2 hover:opacity-80"
        >
          Set your exam board
        </Link>{" "}
        and we&apos;ll point out where boards split this subject up
        differently. Lists vary between schools too, so check against your own
        course.
      </p>
    );
  }

  const note = boardNoteFor(subjectSlug);

  return (
    <p className="mx-auto mt-10 max-w-3xl text-center text-sm opacity-60">
      <strong className="font-medium">
        You&apos;re set to {boardLabel(board)}.
      </strong>{" "}
      {/* Personalisation FIRST, caveat second. The old version led with the
          warning and tacked the board on at the end, so a student who had
          told us their board still got a page that read like a disclaimer —
          exactly the thing that makes a feature feel unreliable. What is said
          has not been softened; only the order has changed. Where there is
          nothing specific to flag, we say so, because "we checked and there is
          nothing" is information too, and it is what makes the feature feel
          like it is working rather than absent. */}
      {note ??
        "Nothing specific to flag on this subject — still worth checking these topics against your school's own list."}{" "}
      <Link
        href="/exam-board"
        className="underline underline-offset-2 hover:opacity-80"
      >
        Change board
      </Link>
    </p>
  );
}
