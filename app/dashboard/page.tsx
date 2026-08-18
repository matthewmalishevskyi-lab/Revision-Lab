import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { SiteHeader } from "../components/SiteHeader";
import { DashboardCelebrations } from "../components/DashboardCelebrations";
import { FlameIcon } from "../components/FlameIcon";
import { MascotDisplay } from "../components/MascotDisplay";
import { PixelCompanion } from "../components/PixelCompanion";
import { OUTFITS, type OutfitUnlockInfo } from "../components/PixelOutfits";
import { getViewer } from "../lib/viewer";
import { getProgress } from "../lib/progress";
import { getDueFlashcards } from "../lib/flashcard-review";
import { ACCOUNTS_ENABLED } from "../lib/site";
import { homepageCards, isGroup, subjectsInGroup, SUBJECTS } from "../lib/subjects";

export const metadata: Metadata = {
  title: "Dashboard",
  // Deliberately kept OUT of search results. A login form is no use to someone
  // arriving from Google, and a dashboard is private. Search engines should
  // send people to the revision content instead.
  robots: { index: false, follow: false },
};

export default async function DashboardPage() {
  // Nothing to show if accounts are off — send them to the content instead.
  if (!ACCOUNTS_ENABLED) redirect("/");

  const user = await getViewer();

  // A PROTECTED PAGE. The check happens on the server, before a single byte of
  // this page is sent. That's the important bit: hiding a page in the browser
  // isn't security, because anyone can undo it with dev tools. Here, a logged
  // out visitor never receives the page at all.
  if (!user) redirect("/login");

  // Reuses the exact same recommendation the progress page already makes
  // (least-covered subject, first untouched topic, or the weakest-answered
  // one once everything's been touched) rather than inventing a second
  // "what's next" idea. One consistent suggestion in two places beats two
  // different opinions about what to revise. See getProgress in lib/progress.ts
  // for how it's chosen. It's safe to call even with no database configured —
  // it just comes back with no recorded activity, not an error.
  const progress = await getProgress(user.id);
  const nextUpSubject = progress.nextUp
    ? progress.subjects.find((s) => s.slug === progress.nextUp!.subjectSlug)
    : undefined;

  // Flashcards due for another look, across every subject — see
  // flashcard-review.ts. Only shown when there's something due; a "0 due"
  // banner every single day is just noise.
  const dueFlashcards = await getDueFlashcards(user.id);

  // How many wardrobe outfits are unlocked right now — see PixelOutfits.tsx.
  // Unlike the flashcard banner above, this one is always shown: there's
  // always a next outfit to work toward, so "0 due" isn't a state that ever
  // needs hiding.
  const outfitInfo: OutfitUnlockInfo = {
    level: progress.xp.level,
    streakCurrent: progress.streak.current,
    badgesEarned: progress.badges.filter((b) => b.earned).length,
  };
  const unlockedOutfitCount = OUTFITS.filter((o) =>
    o.isUnlocked(outfitInfo),
  ).length;

  // Counting topics from the data rather than typing "37" somewhere — the
  // number can never drift out of date because it's derived, not stored.
  const totalTopics = SUBJECTS.reduce(
    (sum, subject) =>
      sum + subject.years.reduce((n, group) => n + group.topics.length, 0),
    0,
  );

  const joined = new Date(user.createdAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-8">
      <SiteHeader greeting={false} />

      {/* Fires at most one celebration per visit — a level-up, a streak
          milestone, or today's goal — and otherwise renders nothing at all.
          See DashboardCelebrations.tsx for how it decides which, if any. */}
      <DashboardCelebrations
        goalReached={progress.today.count >= progress.today.goal}
        streakCurrent={progress.streak.current}
        streakActiveToday={progress.streak.activeToday}
        level={progress.xp.level}
      />

      <section className="mt-10 flex flex-wrap items-center gap-4">
        {/* Bigger than the header's version — this is the page you land on
            right after logging in, so it's worth a proper introduction
            rather than a small corner icon. */}
        <PixelCompanion className="h-20" />

        <div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Hi, {user.name}
          </h1>
          <p className="mt-3 text-lg opacity-60">
            {totalTopics} topics across {SUBJECTS.length} subjects. Pick up
            where you like.
          </p>
        </div>

        {/* XP and level — see computeXp in lib/progress.ts. A flat, always-
            visible number rather than tucked away on the progress page,
            because seeing it go up a little after every single question is
            the point of having it at all. */}
        <div className="ml-auto rounded-2xl border border-white/60 bg-white/70 px-5 py-3 text-center shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
          <p className="text-2xl font-bold tabular-nums">
            Lvl {progress.xp.level}
          </p>
          <p className="text-xs opacity-50">
            {progress.xp.intoLevel}/{progress.xp.forNextLevel} XP
          </p>
        </div>
      </section>

      {/* ---------- Streak & daily goal ---------- */}
      {/* Two habit nudges in one strip: how many days in a row you've
          revised, and how far into today's (deliberately modest) goal you
          are. Both are derived straight from getProgress — see
          computeStreak's comment in lib/progress.ts for why the streak
          doesn't zero itself out the instant a new day starts. */}
      <section className="mt-8 flex flex-wrap items-center gap-6 rounded-3xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-3">
          <FlameIcon
            className={
              progress.streak.current > 0
                ? "h-9 w-9 text-amber-500 dark:text-amber-400"
                : "h-9 w-9 opacity-30"
            }
          />
          <div>
            <p className="text-2xl font-bold tabular-nums">
              {progress.streak.current}
            </p>
            <p className="text-sm opacity-60">
              {progress.streak.current === 0
                ? "Start a streak today"
                : progress.streak.activeToday
                  ? `day${progress.streak.current === 1 ? "" : "s"} in a row`
                  : `day${progress.streak.current === 1 ? "" : "s"} — revise today to keep it going`}
            </p>
            {/* Only mentioned when it actually applied — see computeStreak's
                comment on why a freeze is never spent for nothing. */}
            {progress.streak.usedFreeze && (
              <p className="text-xs opacity-45">
                🧊 A streak freeze covered a missed day this week
              </p>
            )}
          </div>
        </div>

        <div className="min-w-[220px] flex-1">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">Today&apos;s goal</span>
            <span className="opacity-60 tabular-nums">
              {Math.min(progress.today.count, progress.today.goal)}/
              {progress.today.goal}
            </span>
          </div>
          <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
            <div
              className="h-full rounded-full bg-emerald-500 transition-all"
              style={{
                width: `${Math.min(100, (progress.today.count / progress.today.goal) * 100)}%`,
              }}
            />
          </div>
          <p className="mt-1.5 text-sm opacity-60">
            {progress.today.count >= progress.today.goal
              ? "Goal reached — nice work"
              : `${progress.today.goal - progress.today.count} more question${
                  progress.today.goal - progress.today.count === 1 ? "" : "s"
                } or flashcards to hit today's goal`}
          </p>
        </div>
      </section>

      {/* ---------- Flashcards due for review ---------- */}
      {dueFlashcards.length > 0 && (
        <Link
          href="/review"
          className="mt-4 flex items-center justify-between gap-4 rounded-2xl border border-white/60 bg-white/70 px-6 py-4 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5"
        >
          <span>
            <span className="font-semibold">
              {dueFlashcards.length} flashcard
              {dueFlashcards.length === 1 ? "" : "s"} due for review
            </span>
            <span className="ml-2 opacity-60">
              cards you&apos;ve marked before, worth another look
            </span>
          </span>
          <span aria-hidden="true" className="text-xl opacity-40">
            →
          </span>
        </Link>
      )}

      {/* ---------- Pixel's wardrobe ---------- */}
      {/* Always shown, unlike the flashcard banner above — there's always
          another outfit worth working toward, and the count itself is the
          hook: seeing "2/5" is what makes someone curious what the other
          three look like. */}
      <Link
        href="/wardrobe"
        className="mt-4 flex items-center justify-between gap-4 rounded-2xl border border-white/60 bg-white/70 px-6 py-4 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5"
      >
        <span>
          <span className="font-semibold">Dress up Pixel</span>
          <span className="ml-2 opacity-60">
            {unlockedOutfitCount}/{OUTFITS.length} outfits unlocked
          </span>
        </span>
        <span aria-hidden="true" className="text-xl opacity-40">
          →
        </span>
      </Link>

      {/* ---------- Revise this next ---------- */}
      {/* The dashboard is the page you land on right after logging in, so this
          sits above the subject grid rather than only on /progress — the
          whole point of a "what to do next" suggestion is that you see it
          before you've had to go looking for it. */}
      {progress.nextUp && nextUpSubject && (
        <section className="mt-8">
          <Link
            href={`/subjects/${progress.nextUp.subjectSlug}/${progress.nextUp.topicSlug}`}
            className="group relative flex flex-wrap items-center gap-6 overflow-hidden rounded-3xl p-6 text-white shadow-sm transition duration-300 hover:-translate-y-1 sm:p-8"
            style={{ backgroundImage: nextUpSubject.gradient }}
          >
            <div className="pointer-events-none absolute -right-10 -top-14 h-44 w-44 rounded-full bg-white/20 opacity-70 blur-3xl transition group-hover:opacity-100" />
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/30" />

            {nextUpSubject && (
              <MascotDisplay
                mascot={nextUpSubject.mascot}
                className="relative h-24 shrink-0 drop-shadow-[0_6px_10px_rgba(0,0,0,0.35)]"
              />
            )}

            <div className="relative min-w-0 flex-1">
              <span className="text-sm font-semibold uppercase tracking-wider opacity-80">
                Revise this next
              </span>
              <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
                {progress.nextUp.topic}
              </h2>
              <p className="mt-1 opacity-80">{progress.nextUp.subject}</p>
            </div>

            <span
              aria-hidden="true"
              className="relative ml-auto text-3xl opacity-70 transition group-hover:translate-x-1 group-hover:opacity-100"
            >
              →
            </span>
          </Link>
        </section>
      )}

      {/* ---------- Subjects ---------- */}
      <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {homepageCards().map((card) => {
          // The dashboard follows the homepage: Science is one card, not three.
          // Nine cards here would bury everything else, and someone who wants a
          // specific science is one click away.
          const members = isGroup(card) ? subjectsInGroup(card.slug) : [card];
          const topicCount = members.reduce(
            (total, subject) =>
              total +
              subject.years.reduce((n, group) => n + group.topics.length, 0),
            0,
          );

          return (
            <Link
              key={card.slug}
              href={`/subjects/${card.slug}`}
              className={`group relative overflow-hidden rounded-2xl p-6 text-white transition duration-300 hover:-translate-y-1 ${card.shadow}`}
              style={{ backgroundImage: card.gradient }}
            >
              <div className="pointer-events-none absolute -right-12 -top-16 h-40 w-40 rounded-full bg-white/25 opacity-70 blur-3xl transition group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/30" />

              <h2 className="relative text-2xl font-semibold">{card.name}</h2>
              <p className="relative mt-1 text-sm opacity-80">
                {topicCount} topics
              </p>
              <MascotDisplay
                mascot={card.mascot}
                className="pointer-events-none absolute -bottom-3 right-2 h-24 opacity-90 drop-shadow-[0_6px_10px_rgba(0,0,0,0.35)] transition group-hover:scale-105"
              />
              <div className="h-16" />
            </Link>
          );
        })}
      </section>

      {/* ---------- Account ---------- */}
      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/60 bg-white/60 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-xl font-semibold">Your account</h2>
          <dl className="mt-4 space-y-3 text-base">
            <div className="flex justify-between gap-4">
              <dt className="opacity-60">Name</dt>
              <dd className="font-medium">{user.name}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="opacity-60">Email</dt>
              <dd className="font-medium break-all">{user.email}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="opacity-60">Member since</dt>
              <dd className="font-medium">{joined}</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-2xl border border-white/60 bg-white/60 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-xl font-semibold">Your progress</h2>
          <p className="mt-3 opacity-70">
            Every question you answer, flashcard you flip and minute you spend
            on a topic page is now recorded against your account.
          </p>
          <Link
            href="/progress"
            className="mt-4 inline-block rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            See your progress →
          </Link>
        </div>
      </section>
    </main>
  );
}
