import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { SiteHeader } from "../../components/SiteHeader";
import { MascotDisplay } from "../../components/MascotDisplay";
import { MASCOT_NAMES, MASCOTS } from "../../components/Mascots";
import { getViewer } from "../../lib/viewer";
import { hasDevAccess } from "../../lib/dev-access";
import { ACCOUNTS_ENABLED } from "../../lib/site";
import { SUBJECTS, getSubject } from "../../lib/subjects";
import { buildGameQuestions, countGameQuestions, playableTopics } from "../../lib/game-questions";
import { GameClient } from "./GameClient";

// Play the alien game (developer early access). Three steps, all plain links
// and a GET form, so nothing here needs JavaScript until the game starts:
//   1. pick a subject   2. pick topics and a mascot   3. play
// Everything read from the URL is checked against the real subjects, topics
// and mascots before it is used.

export const metadata: Metadata = { title: "Play · Early access", robots: { index: false, follow: false } };

type Props = { searchParams: Promise<{ [key: string]: string | string[] | undefined }> };
const list = (v: string | string[] | undefined) => (Array.isArray(v) ? v : v ? [v] : []);
const MAX_TOPICS = 8;

export default async function PlayPage({ searchParams }: Props) {
  if (!ACCOUNTS_ENABLED) redirect("/");
  const user = await getViewer();
  if (!user) redirect("/login");
  if (!(await hasDevAccess(user.id))) redirect("/progress#early-access");

  const q = await searchParams;
  const subject = getSubject(list(q.subject)[0] ?? "");
  const mascotRaw = list(q.mascot)[0] ?? "";
  const mascot = (mascotRaw in MASCOTS ? mascotRaw : "pixel") as keyof typeof MASCOTS;
  const level = Math.min(3, Math.max(1, Number(list(q.level)[0]) || 1));

  // 3 · play
  if (subject && list(q.topic).length) {
    const allowed = new Set(playableTopics(subject.slug).flatMap((y) => y.topics.map((t) => t.slug)));
    const topics = list(q.topic).filter((t) => allowed.has(t)).slice(0, MAX_TOPICS);
    const { reload, easy } = buildGameQuestions(subject.slug, topics);
    const { own } = countGameQuestions(subject.slug, topics);
    if (reload.length >= 3) {
      return (
        <main className="min-h-screen bg-[#03060d] px-4 py-6 text-white">
          <div className="mx-auto max-w-6xl">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3 text-sm">
              <Link href="/early-access" className="tap-pad opacity-70 hover:opacity-100">← Early access</Link>
              <p className="opacity-70">{subject.name} · {topics.length} topic{topics.length === 1 ? "" : "s"} · playing as {MASCOT_NAMES[mascot]}</p>
            </div>
            <GameClient subject={subject.slug} mascot={mascot} mascotName={MASCOT_NAMES[mascot]} reload={reload} easy={easy} startLevel={level - 1} />
            <p className="mt-4 text-sm opacity-60">
              Keyboard and mouse only for now. Every answer counts like a practice question, so the ones you get wrong come back in “Revisit your mistakes”.
            </p>
            <p className="mt-1 text-sm opacity-60">
              {reload.length} questions in the pool{own < reload.length ? ` — ${own} from your topics, the rest from elsewhere in ${subject.name} so they don’t repeat` : ""}.
            </p>
          </div>
        </main>
      );
    }
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-8">
      <SiteHeader greeting={false} />
      <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">Early access · developers only</p>
      <h1 className="mt-2 text-3xl font-bold">Play the alien game</h1>

      {!subject ? (
        <section className="mt-8">
          <h2 className="text-lg font-semibold">1 · Pick a subject</h2>
          <p className="mt-1 text-sm opacity-60">Your reload questions come from it.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SUBJECTS.filter((s) => playableTopics(s.slug).length > 0).map((s) => (
              <Link key={s.slug} href={`/early-access/play?subject=${s.slug}`} className="flex min-h-11 items-center gap-3 rounded-2xl border border-black/10 p-4 font-semibold transition hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5">
                <span className="h-3 w-3 rounded-full" style={{ background: s.accent }} />
                {s.name}
              </Link>
            ))}
          </div>
        </section>
      ) : (
        <form method="get" action="/early-access/play" className="mt-8">
          <input type="hidden" name="subject" value={subject.slug} />
          <h2 className="text-lg font-semibold">2 · Pick your {subject.name} topics <span className="text-sm font-normal opacity-60">(up to {MAX_TOPICS})</span></h2>
          <div className="mt-4 space-y-5">
            {playableTopics(subject.slug).map((y) => (
              <fieldset key={y.year}>
                <legend className="text-sm font-semibold opacity-70">{y.year}</legend>
                <div className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {y.topics.map((t) => (
                    <label key={t.slug} className="flex min-h-11 cursor-pointer items-center gap-3 rounded-xl border border-black/10 px-3 py-2 text-sm dark:border-white/10">
                      <input type="checkbox" name="topic" value={t.slug} className="h-4 w-4" />
                      <span className="flex-1">{t.title}</span>
                      <span className="text-xs opacity-50">{t.count} Qs</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            ))}
          </div>

          <h2 className="mt-8 text-lg font-semibold">3 · Pick your mascot</h2>
          <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-6">
            {(Object.keys(MASCOTS) as (keyof typeof MASCOTS)[]).map((m, i) => (
              <label key={m} className="flex cursor-pointer flex-col items-center gap-1 rounded-xl border border-black/10 p-2 text-sm has-[:checked]:border-blue-500 has-[:checked]:bg-blue-500/10 dark:border-white/10">
                <MascotDisplay mascot={m} className="h-16 w-auto" />
                <span className="flex items-center gap-1"><input type="radio" name="mascot" value={m} defaultChecked={i === 0} /> {MASCOT_NAMES[m]}</span>
              </label>
            ))}
          </div>

          <h2 className="mt-8 text-lg font-semibold">4 · Start on level</h2>
          <div className="mt-3 flex flex-wrap gap-3">
            {[["1", "Boarding"], ["2", "Meltdown"], ["3", "Crew deck"]].map(([n, name]) => (
              <label key={n} className="flex min-h-11 cursor-pointer items-center gap-2 rounded-xl border border-black/10 px-4 text-sm has-[:checked]:border-blue-500 has-[:checked]:bg-blue-500/10 dark:border-white/10">
                <input type="radio" name="level" value={n} defaultChecked={n === "1"} /> Level {n} · {name}
              </label>
            ))}
          </div>
          <p className="mt-2 text-xs opacity-60">Early access lets you jump ahead. Levels 2 and 3 start you with the blaster.</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button type="submit" className="min-h-11 rounded-full bg-neutral-900 px-6 font-semibold text-white hover:bg-neutral-700 dark:bg-white dark:text-neutral-900">Start the game →</button>
            <Link href="/early-access/play" className="tap-pad text-sm opacity-60 hover:opacity-100">Choose a different subject</Link>
          </div>
          {list(q.topic).length > 0 && <p role="alert" className="mt-3 text-sm text-red-700 dark:text-red-400">Those topics don&apos;t have enough multiple-choice questions yet. Pick a few more.</p>}
        </form>
      )}
    </main>
  );
}
