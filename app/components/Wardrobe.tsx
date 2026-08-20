"use client";

// The grid of outfits, with the equip button — see PixelOutfits.tsx for why
// the equipped choice lives in localStorage rather than the database.
//
// Which outfits are UNLOCKED is decided server-side (the page that renders
// this already has real progress figures) and passed in as a plain list of
// ids; this component only ever needs to know "can this be worn", not how
// that was worked out.

import { useEffect, useState } from "react";
import {
  EQUIPPED_OUTFIT_KEY,
  OUTFITS,
  PixelWithOutfit,
  type OutfitId,
} from "./PixelOutfits";

export function Wardrobe({ unlockedIds }: { unlockedIds: OutfitId[] }) {
  const [equipped, setEquipped] = useState<OutfitId>("none");

  // Read after mount only — localStorage doesn't exist on the server, and
  // reading it during render would mean the server-rendered HTML and the
  // browser's first render disagree, which React treats as a hydration
  // error. Same pattern as DashboardCelebrations for the same reason.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(EQUIPPED_OUTFIT_KEY) as OutfitId | null;
      if (saved && unlockedIds.includes(saved)) {
        setEquipped(saved);
      } else if (saved && saved !== "none") {
        // Equipped to something that isn't unlocked any more — most likely
        // a streak-gated outfit worn while the streak was live, kept in
        // localStorage after the streak broke (unlocks here are worked out
        // fresh each time, never stored, so nothing un-equips it on its
        // own). This is the one place that actually has real unlock data
        // to check against, so it's also the one place that can correct
        // the stored value — every other spot Pixel appears (header,
        // dashboard, celebrations) just reads whatever's saved here with
        // no way to know it's stale, so left uncorrected this would mean
        // Pixel keeps wearing a "locked" outfit everywhere except the one
        // page that says it's locked.
        localStorage.setItem(EQUIPPED_OUTFIT_KEY, "none");
      }
    } catch {
      // No localStorage available — Classic Pixel it is.
    }
  }, [unlockedIds]);

  function equip(id: OutfitId) {
    setEquipped(id);
    try {
      localStorage.setItem(EQUIPPED_OUTFIT_KEY, id);
    } catch {
      // Nothing to fall back to — the outfit just won't be remembered next
      // visit, which is a shrug, not a broken page.
    }
  }

  return (
    <section className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {OUTFITS.map((outfit) => {
        const unlocked = unlockedIds.includes(outfit.id);
        const isEquipped = equipped === outfit.id;

        return (
          <div
            key={outfit.id}
            className={`rounded-2xl border p-6 text-center shadow-sm backdrop-blur-sm ${
              unlocked
                ? "border-white/60 bg-white/70 dark:border-white/10 dark:bg-white/5"
                : "border-white/30 bg-white/40 dark:border-white/5 dark:bg-white/[0.03]"
            }`}
          >
            <div className="mx-auto flex h-28 items-center justify-center">
              <PixelWithOutfit
                outfit={outfit.id}
                className={unlocked ? "h-24" : "h-24 opacity-40 grayscale"}
              />
            </div>
            <p className="mt-3 font-semibold">{outfit.name}</p>
            <p className="mt-1 text-sm opacity-60">
              {unlocked ? (isEquipped ? "Equipped" : "Unlocked") : outfit.hint}
            </p>
            {unlocked && (
              <button
                type="button"
                onClick={() => equip(outfit.id)}
                disabled={isEquipped}
                className={`mt-4 rounded-xl px-5 py-2 text-sm font-semibold transition ${
                  isEquipped
                    ? "cursor-default bg-black/5 opacity-50 dark:bg-white/10"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {isEquipped ? "Worn now" : "Wear this"}
              </button>
            )}
          </div>
        );
      })}
    </section>
  );
}
