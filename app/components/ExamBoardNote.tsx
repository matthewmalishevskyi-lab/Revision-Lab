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
      <p className="mx-auto mt-10 max-w-3xl text-center text-sm opacity-50">
        Topic lists vary between exam boards and schools — check these
        against your own course and tell us what to change.{" "}
        <Link
          href="/exam-board"
          className="underline underline-offset-2 hover:opacity-80"
        >
          Set your exam board
        </Link>{" "}
        and we&apos;ll flag it here when it matters.
      </p>
    );
  }

  const note = boardNoteFor(subjectSlug);

  return (
    <p className="mx-auto mt-10 max-w-3xl text-center text-sm opacity-50">
      {note ??
        "Topic lists vary between exam boards and schools — check these against your own course and tell us what to change."}{" "}
      <Link
        href="/exam-board"
        className="underline underline-offset-2 hover:opacity-80"
      >
        {note
          ? `You're set to ${boardLabel(board)} — change this`
          : `You're on ${boardLabel(board)}`}
      </Link>
    </p>
  );
}
