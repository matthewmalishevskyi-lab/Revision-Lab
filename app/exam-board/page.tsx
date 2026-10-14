import type { Metadata } from "next";
import Link from "next/link";
import { BoardChooser } from "../components/BoardChooser";
import { SiteHeader } from "../components/SiteHeader";
import { ACCOUNTS_ENABLED } from "../lib/site";
import { getViewer } from "../lib/viewer";
import { getBoardChoices } from "../lib/exam-board-store";
import { BOARD_SUBJECTS, choiceLabel } from "../lib/examBoards";
import { getSubject } from "../lib/subjects";

// Every subject's exam board in one place. Each subject page asks for its own
// the first time a logged-in student opens it (see lib/examBoards.ts); this is
// where to see them all and change any of them.
//
// Per subject, because one student can sit AQA Maths, Edexcel History and OCR
// Computer Science — schools choose a board subject by subject. And on the
// account rather than this device, so a choice made on a laptop holds on a
// phone (Matthew's call, 2026-10-14).

export const metadata: Metadata = {
  title: "Exam board",
  description:
    "Pick your exam board for each subject, and Revision Lab hides topics that aren't on its specification.",
};

export default async function ExamBoardPage() {
  const user = ACCOUNTS_ENABLED ? await getViewer() : null;
  const choices = user ? await getBoardChoices(user.id) : null;
  const subjects = BOARD_SUBJECTS.map((slug) => getSubject(slug)).filter((s) => s !== undefined);

  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-8">
      <SiteHeader greeting={false} />

      <section className="mt-10">
        <h1 className="text-4xl font-bold tracking-tight">Your exam boards</h1>
        <p className="mt-3 opacity-70">
          Schools pick a board subject by subject — AQA for one, Edexcel, OCR or
          Eduqas for another. Tell us yours, and topics that aren&apos;t on that
          board&apos;s specification are hidden from the subject page, tests,
          today&apos;s practice and the game.
        </p>
        <p className="mt-3 text-sm opacity-60">
          We only hide a topic when the board&apos;s own specification was checked
          and it isn&apos;t there. Most GCSE content is the same on every board,
          so in most subjects nothing is hidden at all. Not sure which board
          you&apos;re on? It&apos;s on the front of your past papers, or your
          teacher will know.
        </p>
      </section>

      {!user ? (
        <p className="mt-8 rounded-2xl border border-black/10 bg-white/60 px-5 py-4 dark:border-white/10 dark:bg-white/5">
          <Link href="/login" className="font-semibold underline underline-offset-2">Log in</Link>{" "}
          to pick your boards — they&apos;re kept on your account, so they follow
          you to any device.
        </p>
      ) : !choices ? (
        <p className="mt-8 rounded-2xl border border-black/10 bg-white/60 px-5 py-4 dark:border-white/10 dark:bg-white/5">
          Exam boards aren&apos;t switched on just yet, so every topic is shown.
          Nothing is lost — try again later.
        </p>
      ) : (
        <ul className="mt-8 space-y-1">
          {subjects.map((subject) => {
            const choice = choices.get(subject.slug) ?? null;
            return (
              <li key={subject.slug}>
                <BoardChooser
                  key={choice ?? "unset"}
                  subject={subject.slug}
                  subjectName={subject.name}
                  current={choice}
                  mode="change"
                  label={`${subject.name}:`}
                />
              </li>
            );
          })}
        </ul>
      )}

      {user && choices && (
        <p className="mt-6 text-sm opacity-60">
          {subjects.filter((s) => choices.has(s.slug)).length} of {subjects.length} set
          {[...choices.values()].some((c) => c === "none") ? ` · "${choiceLabel("none")}" shows every topic` : ""}.
          The languages, PE and Citizenship don&apos;t ask yet: their boards
          haven&apos;t been checked topic by topic, so nothing there could
          honestly be hidden.
        </p>
      )}
    </main>
  );
}
