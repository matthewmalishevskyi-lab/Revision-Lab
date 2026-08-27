import type { Metadata } from "next";
import { ExamBoardPanel } from "../components/ExamBoardPanel";
import { SiteHeader } from "../components/SiteHeader";

// A settings page for the site itself, not an account — works whether or not
// you're logged in, the same way /accessibility does. See ExamBoardPanel.tsx
// for how the choice is stored, and lib/examBoards.ts for where it's used.

export const metadata: Metadata = {
  title: "Exam board",
  description:
    "Tell Revision Lab which exam board you're on, so subject pages can flag where your specification is known to differ.",
};

export default function ExamBoardPage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-8">
      <SiteHeader greeting={false} />

      <section className="mt-10">
        <h1 className="text-4xl font-bold tracking-tight">
          Your exam board
        </h1>
        <p className="mt-3 opacity-70">
          GCSEs aren&apos;t identical everywhere — AQA, Edexcel, OCR and WJEC
          each split some subjects up differently, and some content is a
          school choice on top of that. Tell us which board you&apos;re on,
          and subject pages will flag where that&apos;s known to matter.
        </p>
        <p className="mt-3 text-sm opacity-60">
          This is remembered on this device only — it doesn&apos;t need an
          account, and switching devices starts unset again. Not sure which
          board you&apos;re on? It&apos;s usually printed on the front of
          your past papers, or your teacher will know.
        </p>
      </section>

      <div className="mt-8">
        <ExamBoardPanel />
      </div>
    </main>
  );
}
