import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { PixelCompanion } from "../components/PixelCompanion";
import { SiteHeader } from "../components/SiteHeader";
import { Wardrobe } from "../components/Wardrobe";
import { OUTFITS, type OutfitUnlockInfo } from "../components/PixelOutfits";
import { getViewer } from "../lib/viewer";
import { getProgress } from "../lib/progress";
import { ACCOUNTS_ENABLED } from "../lib/site";

export const metadata: Metadata = {
  title: "Pixel's wardrobe",
  // Same reasoning as the dashboard: nothing here is useful to someone
  // arriving from a search engine, and it's a private page besides.
  robots: { index: false, follow: false },
};

export default async function WardrobePage() {
  if (!ACCOUNTS_ENABLED) redirect("/");

  const user = await getViewer();
  if (!user) redirect("/login");

  const progress = await getProgress(user.id);

  // Everything an outfit's unlock condition might ask about, gathered in one
  // place — see PixelOutfits.tsx for why none of this needs its own storage.
  const info: OutfitUnlockInfo = {
    level: progress.xp.level,
    streakCurrent: progress.streak.current,
    badgesEarned: progress.badges.filter((b) => b.earned).length,
  };

  const unlockedIds = OUTFITS.filter((outfit) => outfit.isUnlocked(info)).map(
    (outfit) => outfit.id,
  );

  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-8">
      <SiteHeader greeting={false} />

      <section className="mt-10 flex flex-wrap items-center gap-6">
        {/* No link back to /wardrobe here — that's the page already open.
            Bigger than anywhere else Pixel appears, since this page's whole
            job is showing him off. */}
        <PixelCompanion className="h-28" linkToWardrobe={false} />
        <div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Pixel&apos;s wardrobe
          </h1>
          <p className="mt-3 max-w-prose text-lg opacity-60">
            Outfits unlock as you level up, keep a streak going, and earn
            badges. Whatever you pick, Pixel wears it here, in the header,
            on your dashboard, and every time you celebrate something.
          </p>
        </div>
      </section>

      <Wardrobe unlockedIds={unlockedIds} />
    </main>
  );
}
