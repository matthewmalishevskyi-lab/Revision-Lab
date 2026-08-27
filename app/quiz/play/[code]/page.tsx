import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../../components/SiteHeader";
import { getQuizSession } from "../../../lib/quiz";
import { PlayQuizScreen } from "./PlayQuizScreen";

type Props = { params: Promise<{ code: string }> };

export const metadata: Metadata = {
  title: "Playing a quiz",
  robots: { index: false, follow: false },
};

// No login check here — see quiz-actions.ts's own comment on why joining
// and playing need no account at all. Whether THIS visitor has actually
// joined this particular room is checked client-side, by
// PlayQuizScreen — the identity it needs (a guest's player id) only ever
// lives in this browser's own localStorage, never in anything the server
// could check before sending the page.
export default async function PlayQuizPage({ params }: Props) {
  const { code } = await params;

  const session = await getQuizSession(code);
  if (!session) notFound();

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-8">
      <SiteHeader greeting={false} />
      <PlayQuizScreen code={code} />
    </main>
  );
}
