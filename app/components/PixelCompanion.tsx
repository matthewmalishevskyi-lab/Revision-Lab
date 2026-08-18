"use client";

// Pixel, wearing whatever's equipped, dropped into the places someone
// actually passes through — the header (every single page), the dashboard,
// the homepage, the progress page — not just the celebration moment. The
// point of building a wardrobe at all was for Pixel to actually be the
// site's character; a costume nobody sees outside one popup doesn't do that.
//
// A Client Component because the equipped outfit lives in localStorage (see
// PixelOutfits.tsx for why) — every one of the Server Component pages this
// sits in already renders fine without knowing what Pixel is wearing; this
// is the one small client island inside each of them that fills it in after
// mount, same "read after mount, so the server's HTML and the browser's
// first render agree" reasoning as Celebration.tsx and the wardrobe grid.

import Link from "next/link";
import { useEffect, useState } from "react";
import { EQUIPPED_OUTFIT_KEY, PixelWithOutfit, type OutfitId } from "./PixelOutfits";

export function PixelCompanion({
  className = "h-10",
  linkToWardrobe = true,
}: {
  className?: string;
  /** Off for the wardrobe page's own showcase — no point linking to the
   * page you're already on. */
  linkToWardrobe?: boolean;
}) {
  const [outfit, setOutfit] = useState<OutfitId>("none");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(EQUIPPED_OUTFIT_KEY) as OutfitId | null;
      if (saved) setOutfit(saved);
    } catch {
      // No localStorage — Classic Pixel, same as everywhere else this is read.
    }
  }, []);

  const pixel = <PixelWithOutfit outfit={outfit} className={className} />;

  if (!linkToWardrobe) return pixel;

  return (
    <Link
      href="/wardrobe"
      aria-label="Pixel — visit the wardrobe to change his outfit"
      title="Pixel"
      className="inline-block shrink-0 transition hover:scale-105"
    >
      {pixel}
    </Link>
  );
}
