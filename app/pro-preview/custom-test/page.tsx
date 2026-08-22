import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../components/SiteHeader";
import { MascotDisplay } from "../../components/MascotDisplay";
import { PRO_PREVIEW_ENABLED } from "../../lib/site";
import { SUBJECTS } from "../../lib/subjects";

// ─────────────────────────────────────────────────────────────────────────────
// PREVIEW ONLY — this whole app/pro-preview/ tree is the Pro-tier custom test
// builder Matthew asked for (see PROJECT_NOTES.md, "Pro-subscription plan").
// It is real, working code, not a mockup — but it 404s on the live site
// because PRO_PREVIEW_ENABLED is false everywhere the site is actually
// deployed. See that constant's comment in app/lib/site.ts for the whole
// story and how to turn it on locally to try this.
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Custom test builder",
  robots: { index: false, follow: false },
};

// SUBJECTS is already the flat list of every real, contentful subject —
// Biology, Chemistry and Physics included individually, not folded into one
// "Science" entry — which is exactly what a topic picker needs. The
// group-card pages (subjects/science, subjects/languages) are a homepage
// navigation layer on top of this list, not a different list.
export default function CustomTestPickerPage() {
  if (!PRO_PREVIEW_ENABLED) notFound();

  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-8">
      <SiteHeader greeting={false} />

      <div className="mt-8 rounded-2xl border border-amber-500/40 bg-amber-500/10 px-5 py-3 text-sm">
        <strong>Preview build.</strong> This page only exists because
        PRO_PREVIEW_ENABLED is on for you locally — it isn&apos;t reachable
        on the live site yet.
      </div>

      <h1 className="mt-6 text-4xl font-bold tracking-tight">
        Build a custom test
      </h1>
      <p className="mt-3 text-lg opacity-70">
        Pick a subject, then choose exactly which topics to include — not a
        whole year, just the handful you actually want to revise right now.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {SUBJECTS.map((subject) => (
          <Link
            key={subject.slug}
            href={`/pro-preview/custom-test/${subject.slug}`}
            className="flex items-center gap-4 rounded-2xl border border-white/60 bg-white/60 p-5 shadow-sm backdrop-blur-sm transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
          >
            <MascotDisplay mascot={subject.mascot} className="h-14 shrink-0" />
            <div>
              <p className="font-semibold">{subject.name}</p>
              <p className="text-sm opacity-60">
                {subject.years.reduce((n, y) => n + y.topics.length, 0)} topics
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
