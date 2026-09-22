import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { SiteHeader } from "../components/SiteHeader";
import { getViewer } from "../lib/viewer";
import { hasDevAccess } from "../lib/dev-access";
import { ACCOUNTS_ENABLED } from "../lib/site";
import { BOSS_BACK, BOSS_FRONT, SMALL_ALIEN } from "./art";

// The game while it is being built, for whoever has the developer code.
//
// ⚠️ Deliberately NOT listed in robots.ts. That file is public, and naming a
// hidden page there advertises it (robots.ts says so itself). noindex below
// keeps it out of search; the access check keeps everyone else out.

export const metadata: Metadata = {
  title: "Early access",
  robots: { index: false, follow: false },
};

const CHARACTERS = [
  {
    name: "Regular alien",
    art: SMALL_ALIEN,
    alt: "A small green alien with a pistol",
    lines: ["Same height as you", "Pew-pew: 20 damage a hit, out of your 100", "A bit stupid, still a challenge"],
  },
  {
    name: "The boss — front",
    art: BOSS_FRONT,
    alt: "A tall muscular green alien in a black business suit and red tie",
    lines: ["The last big fight", "Business suit, rifle slung on his back"],
  },
  {
    name: "The boss — back",
    art: BOSS_BACK,
    alt: "The alien boss from behind, rifle across his back",
    lines: ["What you see when he turns round"],
  },
];

const AGREED = [
  "A first-person shooter seen through a space helmet, on a battleship full of green aliens (Doom-like to play, not to look at)",
  "Pick your subjects and topics, then your mascot, and play",
  "Six shots. Answer a question to reload: right reloads three, wrong reloads one",
  "Wrong answers go to “Revisit your mistakes”",
  "Start with nothing, then a blaster, then a new weapon every level or two",
  "Levels first, then an endless arena until you die, with a high-score board",
  "Logged-in players only, switched off in school hours, PC first",
];

export default async function EarlyAccessPage() {
  if (!ACCOUNTS_ENABLED) redirect("/");
  const user = await getViewer();
  if (!user) redirect("/login");
  // Checked before anything below is built, so the art never leaves the
  // server for someone without access.
  if (!(await hasDevAccess(user.id))) redirect("/progress#early-access");

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-8">
      <SiteHeader greeting={false} />

      <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
        Early access · developers only
      </p>
      <h1 className="mt-2 text-3xl font-bold sm:text-4xl">The alien game</h1>
      <p className="mt-3 max-w-2xl opacity-70">
        The first three levels are playable. Pick a subject and some topics,
        and your reload questions come from them.
      </p>
      <Link
        href="/early-access/play"
        className="mt-5 inline-flex min-h-11 items-center rounded-full bg-emerald-600 px-6 font-semibold text-white shadow-lg transition hover:bg-emerald-500"
      >
        Play now →
      </Link>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">The characters</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CHARACTERS.map((c) => (
            <figure
              key={c.name}
              className="flex flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-[#1a1d24] to-[#0e1014] p-5 text-white shadow-lg"
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- an inline data: URI, which next/image cannot optimise */}
              <img src={c.art} alt={c.alt} className="mx-auto h-72 w-auto" />
              <figcaption className="mt-4">
                <p className="font-semibold">{c.name}</p>
                <ul className="mt-1 space-y-0.5 text-sm text-white/65">
                  {c.lines.map((line) => <li key={line}>{line}</li>)}
                </ul>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">Agreed so far</h2>
        <ul className="mt-4 max-w-3xl list-disc space-y-1.5 pl-5 opacity-80">
          {AGREED.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="mt-12 rounded-2xl border border-black/5 p-6 dark:border-white/10">
        <h2 className="text-lg font-semibold">Next up: the boss</h2>
        <p className="mt-2 max-w-2xl text-sm opacity-70">
          Levels 1–3 are in. The final fight with the boss in the business suit comes next.
        </p>
      </section>

      <Link href="/progress" className="tap-pad mt-10 inline-block text-sm opacity-60 hover:opacity-100">
        ← Back to your progress
      </Link>
    </main>
  );
}
