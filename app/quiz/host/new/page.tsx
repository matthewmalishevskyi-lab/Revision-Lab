import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { SiteHeader } from "../../../components/SiteHeader";
import { ACCOUNTS_ENABLED } from "../../../lib/site";
import { getViewer } from "../../../lib/viewer";
import { SUBJECTS } from "../../../lib/subjects";
import { getTopicContent } from "../../../lib/content";
import { HostSetupForm, type SubjectOption } from "./HostSetupForm";

export const metadata: Metadata = {
  title: "Host a live quiz",
  robots: { index: false, follow: false },
};

export default async function NewQuizPage() {
  if (!ACCOUNTS_ENABLED) redirect("/");

  const user = await getViewer();
  // Same protected-page shape as /dashboard and /clans/new — checked on the
  // server, before any of this page is sent, rather than hidden client-side.
  if (!user) redirect("/login");

  // Flattened once, here, rather than making the client form re-derive it —
  // and each topic carries how many quiz-ready (multiple-choice) questions
  // it actually has, computed server-side from the real content, so a host
  // picking topics can see up front which ones will actually contribute
  // rather than discovering it only after the room's already been created.
  const subjects: SubjectOption[] = SUBJECTS.map((subject) => ({
    slug: subject.slug,
    name: subject.name,
    accent: subject.accent,
    topics: subject.years.flatMap((group) =>
      group.topics.map((topic) => ({
        slug: topic.slug,
        title: topic.title,
        year: group.year,
        mcqCount: (getTopicContent(subject.slug, topic.slug)?.practice ?? []).filter(
          (q) => q.choices && q.choices.length >= 2,
        ).length,
      })),
    ),
  }));

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-8">
      <SiteHeader greeting={false} />

      <section className="mt-10">
        <h1 className="text-4xl font-bold tracking-tight">Host a live quiz</h1>
        <p className="mt-2 opacity-70">
          Pick a subject, then 2–4 topics to pull questions from. You&apos;ll get
          a 6-digit room code — put it on screen and tell people to join at{" "}
          <span className="font-semibold">/quiz/join</span>.
        </p>
      </section>

      <HostSetupForm subjects={subjects} />
    </main>
  );
}
