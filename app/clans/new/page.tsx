import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { SiteHeader } from "../../components/SiteHeader";
import { CreateClanForm } from "../CreateClanForm";
import { ACCOUNTS_ENABLED } from "../../lib/site";
import { getViewer } from "../../lib/viewer";

export const metadata: Metadata = {
  title: "Create a clan",
  robots: { index: false, follow: false },
};

export default async function NewClanPage() {
  if (!ACCOUNTS_ENABLED) redirect("/");

  // A PROTECTED PAGE — same reasoning as dashboard/page.tsx's own comment.
  // The check happens on the server before any of this page is sent.
  const user = await getViewer();
  if (!user) redirect("/login");

  return (
    <main className="mx-auto w-full max-w-xl px-6 py-8">
      <SiteHeader greeting={false} />

      <section className="mt-10">
        <h1 className="text-4xl font-bold tracking-tight">Create a clan</h1>
        <p className="mt-3 opacity-70">
          A small leaderboard for people you actually invite — friends,
          classmates, whoever you want competing with you. Ranked by XP, the
          same points that fill your level bar on the dashboard.
        </p>
      </section>

      <div className="mt-8 rounded-3xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
        <CreateClanForm />
      </div>
    </main>
  );
}
