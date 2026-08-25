"use client";

// A drop-in replacement for `MASCOTS[mascot]` wherever a subject's mascot is
// drawn — every single one of those places, not just the handful added for
// the wardrobe. Matthew's ask: "make sure every single Pixel has an outfit
// equipped by the user," which means the CS subject card on the homepage,
// the CS card in the dashboard's subject grid, the ladder climbing a
// Computer Science topic page, the CS subject page's hero, the mascot on
// the Computer Science test's intro screen, and the "next up" mascot
// whenever it happens to be CS — every one of those was still rendering the
// plain, unwearing `<Pixel>` before this, because they're all the SAME
// generic code shared by every subject, not Pixel-specific.
//
// For the other nine mascots this renders exactly what it always did — the
// plain mascot component, nothing extra. The outfit logic only ever runs
// for `mascot === "pixel"`; every other subject's card, ladder and hero is
// completely unaffected.
//
// A Client Component for the same reason PixelCompanion is one: the
// equipped outfit lives in localStorage (see PixelOutfits.tsx), which does
// not exist during server rendering. Every page using this keeps rendering
// fine on the server with the classic look, then fills in the real outfit
// as soon as React can see the real value — reactive via
// lib/browserStore.ts's useStoredRaw, no effect involved.

import { useStoredRaw } from "../lib/browserStore";
import { MASCOTS } from "./Mascots";
import { EQUIPPED_OUTFIT_KEY, PixelWithOutfit, type OutfitId } from "./PixelOutfits";

export function MascotDisplay({
  mascot,
  className,
}: {
  mascot: keyof typeof MASCOTS;
  className?: string;
}) {
  // Called unconditionally, same as any hook has to be — but only actually
  // USED below when mascot is Pixel. Reading localStorage for the nine
  // mascots that never wear anything is cheap enough that skipping the
  // call isn't worth a conditional hook (which the rules of hooks forbid
  // anyway).
  const stored = useStoredRaw(EQUIPPED_OUTFIT_KEY, null);

  if (mascot === "pixel") {
    const outfit = (stored as OutfitId | null) ?? "none";
    return <PixelWithOutfit outfit={outfit} className={className} />;
  }

  const Mascot = MASCOTS[mascot];
  return <Mascot className={className} />;
}
