import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { SiteHeader } from "../../components/SiteHeader";
import { MascotWardrobeGrid } from "../../components/MascotWardrobeGrid";
import { PREVIEW_OUTFITS } from "../../components/MascotOutfits";
import type { OutfitUnlockInfo } from "../../components/PixelOutfits";
import { getViewer } from "../../lib/viewer";
import { getProgress } from "../../lib/progress";
import { PRO_PREVIEW_ENABLED } from "../../lib/site";

// PREVIEW ONLY — see MascotOutfits.tsx for the full explanation. This is
// the Pro-tier wardrobe expansion Matthew asked for: every mascot gets a
// wardrobe (proved here with a second one, Hoot, rather than rushing all
// ten), plus one Pro-exclusive item for Pixel. The LIVE /wardrobe page
// (app/wardrobe/page.tsx) is completely untouched by any of this — this is
// a separate page, with separate components and separate localStorage
// keys, that only exists while PRO_PREVIEW_ENABLED is on.
//
// isProSubscriber is hardcoded false: there is no subscription record
// anywhere in this codebase yet (see UpgradeButtons.tsx). This is here so
// the Diamond crown's lock has an honest, always-true reason to show
// "Pro subscribers only" right now, and an obvious single line to change
// once real subscriptions exist.
const isProSubscriber = false;

export const metadata: Metadata = {
  title: "Wardrobe (preview)",
  robots: { index: false, follow: false },
};

export default async function ProWardrobePreviewPage() {
  if (!PRO_PREVIEW_ENABLED) notFound();

  const user = await getViewer();
  if (!user) redirect("/login");

  const progress = await getProgress(user.id);

  const info: OutfitUnlockInfo = {
    level: progress.xp.level,
    streakCurrent: progress.streak.current,
    badgesEarned: progress.badges.filter((b) => b.earned).length,
  };

  const unlockedIds = PREVIEW_OUTFITS.filter((outfit) =>
    outfit.isUnlocked(info, isProSubscriber),
  ).map((outfit) => outfit.id);

  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-8">
      <SiteHeader greeting={false} />

      <div className="mt-8 rounded-2xl border border-amber-500/40 bg-amber-500/10 px-5 py-3 text-sm">
        <strong>Preview build.</strong> Not reachable on the live site yet —
        see app/lib/site.ts, PRO_PREVIEW_ENABLED. The live wardrobe at
        /wardrobe is unaffected by anything on this page.
      </div>

      <h1 className="mt-6 text-4xl font-bold tracking-tight">
        Wardrobe — every mascot (preview)
      </h1>
      <p className="mt-3 max-w-prose text-lg opacity-70">
        Proof of concept: Hoot gets a second wardrobe alongside Pixel&apos;s,
        plus one item — the Diamond crown — locked behind Pro instead of
        behind playing the site. The other eight mascots don&apos;t have
        outfits drawn yet; see the comment at the top of MascotOutfits.tsx
        for why that&apos;s deliberate rather than an oversight.
      </p>

      <MascotWardrobeGrid unlockedIds={unlockedIds} />
    </main>
  );
}
