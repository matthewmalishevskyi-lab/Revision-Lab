"use client";

// PREVIEW ONLY — the multi-mascot cousin of Wardrobe.tsx. Deliberately
// separate storage (its own localStorage keys, prefixed "preview-") rather
// than reusing EQUIPPED_OUTFIT_KEY, so nothing typed in here can ever be
// read by the LIVE header/dashboard/celebration components that render
// Pixel's real, shipped outfits — see MascotOutfits.tsx for the full reason
// this whole system is kept separate from the live one.

import { useStoredRaw, writeStorageRaw } from "../lib/browserStore";
import {
  MascotWithPreviewOutfit,
  PREVIEW_OUTFITS,
  type PreviewMascotId,
  type PreviewOutfitId,
} from "./MascotOutfits";

function equippedKey(mascot: PreviewMascotId): string {
  return `revision-lab:preview-equipped:${mascot}`;
}

export function MascotWardrobeGrid({
  unlockedIds,
}: {
  unlockedIds: PreviewOutfitId[];
}) {
  // One equipped choice per mascot, not one shared value — putting on
  // Hoot's scarf shouldn't un-equip Pixel's crown. Reactive to localStorage
  // via lib/browserStore.ts, and fully derived — no local state, and no
  // effect, needed at all: each is just "whatever's stored, or 'none' if
  // that isn't unlocked any more."
  const pixelRaw = useStoredRaw(equippedKey("pixel"), null) as PreviewOutfitId | null;
  const hootRaw = useStoredRaw(equippedKey("hoot"), null) as PreviewOutfitId | null;
  const equipped: Record<PreviewMascotId, PreviewOutfitId | "none"> = {
    pixel: pixelRaw && unlockedIds.includes(pixelRaw) ? pixelRaw : "none",
    hoot: hootRaw && unlockedIds.includes(hootRaw) ? hootRaw : "none",
  };

  function equip(mascot: PreviewMascotId, id: PreviewOutfitId) {
    writeStorageRaw(equippedKey(mascot), id);
  }

  return (
    <section className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {PREVIEW_OUTFITS.map((outfit) => {
        const unlocked = unlockedIds.includes(outfit.id);
        const isEquipped = equipped[outfit.mascot] === outfit.id;

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
              <MascotWithPreviewOutfit
                mascot={outfit.mascot}
                outfit={outfit.id}
                className={unlocked ? "h-24" : "h-24 opacity-40 grayscale"}
              />
            </div>
            <p className="mt-3 font-semibold">{outfit.name}</p>
            {outfit.proOnly && (
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-400">
                Pro exclusive
              </p>
            )}
            <p className="mt-1 text-sm opacity-60">
              {unlocked ? (isEquipped ? "Equipped" : "Unlocked") : outfit.hint}
            </p>
            {unlocked && (
              <button
                type="button"
                onClick={() => equip(outfit.mascot, outfit.id)}
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
