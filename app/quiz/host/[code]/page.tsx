import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { SiteHeader } from "../../../components/SiteHeader";
import { ACCOUNTS_ENABLED } from "../../../lib/site";
import { getViewer } from "../../../lib/viewer";
import { getQuizSession } from "../../../lib/quiz";
import { HostQuizScreen } from "./HostQuizScreen";

type Props = { params: Promise<{ code: string }> };

export const metadata: Metadata = {
  title: "Hosting a quiz",
  robots: { index: false, follow: false },
};

export default async function HostQuizPage({ params }: Props) {
  if (!ACCOUNTS_ENABLED) redirect("/");

  const { code } = await params;
  const user = await getViewer();
  if (!user) redirect("/login");

  const session = await getQuizSession(code);
  if (!session) notFound();

  // Only the actual host ever sees the control screen for their own room —
  // checked here too, not only inside the actions the buttons call, so
  // someone who isn't the host doesn't even get shown a "Start"/"Reveal"
  // control panel they'd immediately be rejected from using.
  if (session.hostUserId !== user.id) redirect("/quiz");

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-8">
      <SiteHeader greeting={false} />
      <HostQuizScreen code={code} />
    </main>
  );
}
