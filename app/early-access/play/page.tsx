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
import { buildGameQuestions, countGameQuestions, playableTopics, weakTopicWeights } from "../../lib/game-questions";
import { getTopicAccuracies } from "../../lib/progress";
import { GameClient } from "./GameClient";
import { LEVELS } from "../game/levels";
import { GAME_SAVES_ENABLED, listSaves, readSave } from "../../lib/game-saves";
import { saveHref } from "../../lib/gameSave";
import { deckName, savedAt } from "./saveLabels";

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
  const level = Math.min(LEVELS.length, Math.max(1, Number(list(q.level)[0]) || 1));
  // Saves are read here, on the server, with the id from the session — so a
  // slot number in the URL can only ever open one of YOUR saves.
  const saves = await listSaves(user.id);
  const saveSlot = Number(list(q.save)[0]);
  const loaded = list(q.save).length ? await readSave(user.id, saveSlot) : null;

  // 3 · play
  if (subject && list(q.topic).length) {
    const allowed = new Set(playableTopics(subject.slug).flatMap((y) => y.topics.map((t) => t.slug)));
    const topics = list(q.topic).filter((t) => allowed.has(t)).slice(0, MAX_TOPICS);
    // ⚠️ A URL naming only topics that do not exist filtered to an empty list,
    // and buildGameQuestions then topped up from the WHOLE subject — so the
    // game started under a header reading "0 topics · 0 from your topics".
    // An empty list here means the request was wrong, not that everything goes.
    if (topics.length) {
    const { reload, easy } = buildGameQuestions(subject.slug, topics);
    const { own } = countGameQuestions(subject.slug, topics);
    // Which of this subject's topics this student is weakest at, from their
    // own practice answers — the same reading /today ranks with. ⚠️ A failure
    // here must never stop the game starting: no history, a missing table or
    // a database blip all mean "deal evenly", which is how it always worked.
    const topicWeights = weakTopicWeights(
      (await getTopicAccuracies(user.id).catch(() => []))
        .filter((a) => a.subjectSlug === subject.slug)
        .map((a) => ({ topicSlug: a.topicSlug, correct: a.correct, questionsAnswered: a.questionsAnswered })),
    );
    if (reload.length >= 3) {
      return (
        <main className="min-h-screen bg-[#03060d] px-4 py-6 text-white">
          <div className="mx-auto max-w-6xl">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3 text-sm">
              <Link href="/early-access" className="tap-pad opacity-70 hover:opacity-100">← Early access</Link>
              <p className="opacity-70">{subject.name} · {topics.length} topic{topics.length === 1 ? "" : "s"} · playing as {MASCOT_NAMES[mascot]}</p>
            </div>
            {list(q.save).length > 0 && !loaded && (
              <p role="alert" className="mb-3 rounded-xl bg-amber-500/15 p-3 text-sm text-amber-200">That save couldn&apos;t be loaded, so this is a fresh start on level {level}.</p>
            )}
            {/* ⚠️ Keyed by what is being played. Load is a client-side
                navigation to this same page, and without a key React kept the
                old GameClient — its open save menu sat over the loaded game. */}
            <GameClient key={loaded ? `save-${loaded.summary.slot}-${loaded.summary.updatedAt}` : `level-${level}-${topics.join(",")}`} subject={subject.slug} mascot={mascot} mascotName={MASCOT_NAMES[mascot]} reload={reload} easy={easy} startLevel={level - 1} topicWeights={topicWeights}
              setup={{ subject: subject.slug, topics, mascot }} saves={saves} savesEnabled={GAME_SAVES_ENABLED}
              save={loaded?.state} saveName={loaded?.summary.name} />
            <p className="mt-4 text-sm opacity-60">
              Keyboard and mouse, or touch controls on a phone — turn it sideways. Every answer counts like a practice question, so the ones you get wrong come back in “Revisit your mistakes”.
            </p>
            <p className="mt-1 text-sm opacity-60">
              {reload.length} questions in the pool{own < reload.length ? ` — ${own} from your topics, the rest from elsewhere in ${subject.name} so they don’t repeat` : ""}.
            </p>
          </div>
        </main>
      );
    }
    }
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-8">
      <SiteHeader greeting={false} />
      <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">Early access · developers only</p>
      <h1 className="mt-2 text-3xl font-bold">Play the alien game</h1>

      {/* Carry on from a save — the quickest way back in, so it comes first */}
      {saves.length > 0 && (
        <section className="mt-8">
          <h2 className="text-lg font-semibold">Carry on from a save</h2>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            {saves.map((s) => (
              <li key={s.slot}>
                <Link href={saveHref(s)} className="flex min-h-11 flex-col rounded-2xl border border-black/10 p-4 transition hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5">
                  <span className="font-semibold">{s.slot} · {s.name}</span>
                  <span className="text-sm opacity-60">{getSubject(s.setup.subject)?.name ?? s.setup.subject} · {deckName(s.level)} · {s.health}% health · {savedAt(s.updatedAt)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

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
            {/* derived from LEVELS, so a new level appears here on its own rather
                than being a second list somebody has to remember to update */}
            {LEVELS.map((l, i) => [String(i + 1), l.TITLE.replace(/^Level \d+ — /, "")]).map(([n, name]) => (
              <label key={n} className="flex min-h-11 cursor-pointer items-center gap-2 rounded-xl border border-black/10 px-4 text-sm has-[:checked]:border-blue-500 has-[:checked]:bg-blue-500/10 dark:border-white/10">
                <input type="radio" name="level" value={n} defaultChecked={n === "1"} /> Level {n} · {name}
              </label>
            ))}
          </div>
          {/* which levels have grenades is read off the levels themselves, not
              written down here, so it stays true when a level is added */}
          <p className="mt-2 text-xs opacity-60">
            Early access lets you jump ahead. Levels 2 and up start you with the blaster
            {(() => {
              const withNades = LEVELS.map((l, i) => (l.SPRITES.some((s) => s.t === "grenade") ? i + 1 : 0)).filter(Boolean);
              return withNades.length ? `; grenades are only on level${withNades.length > 1 ? "s" : ""} ${withNades.join(" and ")}, and starting there gives you one` : "";
            })()}.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button type="submit" className="min-h-11 rounded-full bg-neutral-900 px-6 font-semibold text-white hover:bg-neutral-700 dark:bg-white dark:text-neutral-900">Start the game →</button>
            <Link href="/early-access/play" className="tap-pad text-sm opacity-60 hover:opacity-100">Choose a different subject</Link>
          </div>
          {/* ⚠️ The "> 0" guard meant submitting with NOTHING ticked re-rendered
              the form with no message at all — the button simply appeared not to
              work. The two cases need different words, and both need saying. */}
          {list(q.topic).length === 0 && q.topic !== undefined && (
            <p role="alert" className="mt-3 text-sm text-red-700 dark:text-red-400">Pick at least one topic first.</p>
          )}
          {list(q.topic).length > 0 && <p role="alert" className="mt-3 text-sm text-red-700 dark:text-red-400">Those topics don&apos;t have enough multiple-choice questions yet. Pick a few more.</p>}
        </form>
      )}
    </main>
  );
}
