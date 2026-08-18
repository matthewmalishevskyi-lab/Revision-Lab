import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { ReviewQueue, type QueueCard } from "../components/ReviewQueue";
import { SiteHeader } from "../components/SiteHeader";
import { getViewer } from "../lib/viewer";
import { getDueFlashcards } from "../lib/flashcard-review";
import { ACCOUNTS_ENABLED } from "../lib/site";
import { getSubject, getTopic } from "../lib/subjects";

export const metadata: Metadata = {
  title: "Due for review",
  // Private and different for every visitor and every visit — no use to
  // search, same reasoning as the dashboard.
  robots: { index: false, follow: false },
};

// Protected, same pattern as /dashboard and /progress: checked on the
// server, before a byte of the page is sent, so a logged-out visitor never
// receives it at all.
export default async function ReviewPage() {
  if (!ACCOUNTS_ENABLED) redirect("/");

  const user = await getViewer();
  if (!user) redirect("/login");

  const due = await getDueFlashcards(user.id);

  // Attach display names here rather than in flashcard-review.ts — that file
  // has no reason to import subjects.ts, and a card whose subject or topic
  // has since been removed from the site (should never happen, but nothing
  // stops it) is simply left out rather than shown with a blank title.
  const cards: QueueCard[] = due
    .map((card) => {
      const subject = getSubject(card.subjectSlug);
      const topic = getTopic(card.subjectSlug, card.topicSlug);
      if (!subject || !topic) return null;
      return {
        subjectSlug: subject.slug,
        subjectName: subject.name,
        subjectAccent: subject.accent,
        topicSlug: card.topicSlug,
        topicTitle: topic.topic.title,
        term: card.term,
        definition: card.definition,
      };
    })
    .filter((card): card is QueueCard => card !== null);

  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-8">
      <SiteHeader greeting={false} />

      <section className="mt-10">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Due for review
        </h1>
        <p className="mt-3 text-lg opacity-60">
          {cards.length > 0
            ? `${cards.length} flashcard${cards.length === 1 ? "" : "s"} you've marked before, due for another look.`
            : "Nothing due right now."}
        </p>
      </section>

      <div className="mt-8">
        {cards.length > 0 ? (
          <ReviewQueue cards={cards} />
        ) : (
          <div className="rounded-3xl border border-white/60 bg-white/70 p-8 text-center shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
            <p className="opacity-70">
              Nothing&apos;s due yet. Flip a flashcard on any topic page and
              judge it &ldquo;Got it&rdquo; or &ldquo;Still learning&rdquo; —
              that&apos;s what schedules it to show up here later.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
