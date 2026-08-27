import type { Metadata } from "next";
import { SiteHeader } from "../../components/SiteHeader";
import { getViewer } from "../../lib/viewer";
import { ACCOUNTS_ENABLED } from "../../lib/site";
import { JoinQuizForm } from "./JoinQuizForm";

export const metadata: Metadata = {
  title: "Join a live quiz",
  robots: { index: false, follow: false },
};

type Props = { searchParams: Promise<{ code?: string }> };

// Deliberately reachable whether or not you're logged in — see
// quiz-actions.ts's own comment on why joining needs no account at all,
// the same "anyone with the room code" shape as a Kahoot game PIN.
//
// `?code=123456` pre-fills the room code (handy for a QR code or a link
// shared straight from the host's own lobby screen) — read here, on the
// server, and passed down as a plain string rather than having the form
// itself call `useSearchParams()`, which would need its own Suspense
// boundary for no real benefit over just reading it where the page already
// receives it.
export default async function JoinQuizPage({ searchParams }: Props) {
  const user = ACCOUNTS_ENABLED ? await getViewer() : null;
  const { code } = await searchParams;

  return (
    <main className="mx-auto w-full max-w-md px-6 py-8">
      <SiteHeader greeting={false} />

      <section className="mt-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Join a quiz</h1>
        <p className="mt-2 opacity-70">
          Enter the 6-digit room code from whoever&apos;s hosting.
        </p>
      </section>

      <JoinQuizForm
        loggedInName={user?.name.trim().split(/\s+/)[0] ?? null}
        initialCode={code ?? ""}
      />
    </main>
  );
}
