// PREVIEW ONLY — extends the wardrobe idea in PixelOutfits.tsx to more than
// one mascot, plus one Pro-exclusive item, per Matthew's Pro-tier wardrobe
// idea (see PROJECT_NOTES.md, "Pro-subscription plan"). Nothing here is
// imported by any page a real visitor can reach — every page that uses it
// lives under app/pro-preview/ and is gated by PRO_PREVIEW_ENABLED (see
// app/lib/site.ts), which 404s everywhere the site is actually deployed.
//
// WHY THIS IS A SEPARATE FILE RATHER THAN AN EDIT TO PixelOutfits.tsx: that
// file is wired into the live header, dashboard, homepage, celebrations and
// more. Keeping every "other mascots get outfits too" idea in its own file
// that nothing live imports means there is no way changing this accidentally
// changes what a real visitor sees today — the two systems share an idea,
// not code. Pixel's original four outfits (Shades, Party hat, Cape, Crown)
// are untouched and still rendered by the original PixelWithOutfit; this
// file only adds NEW items on top.
//
// SCOPE, BEING HONEST ABOUT IT: properly outfitting all ten other mascots
// needs real art attention per mascot — Pixel's own four outfits were each
// individually drawn, rendered and checked before shipping (see
// preview-mascot.py, mentioned in the Business section of this file's
// history). Rather than rush low-effort accessories onto every mascot at
// once, this proves the PATTERN works for a second mascot (Hoot gets one
// simple new item) and adds the one Pro-exclusive item Matthew specifically
// asked for (a crown-like item for Pixel, gated behind Pro rather than by
// playing the site). The honest current state of "every mascot has a
// wardrobe" is: the code and the data shape both support it; the artwork
// for the other eight mascots doesn't exist yet, and shouldn't be rushed
// just to tick a box.

import { Hoot, Pixel } from "./Mascots";
import type { OutfitUnlockInfo } from "./PixelOutfits";

export type PreviewMascotId = "pixel" | "hoot";

export type PreviewOutfitId = "diamond-crown" | "reading-scarf";

export type PreviewOutfitDef = {
  id: PreviewOutfitId;
  mascot: PreviewMascotId;
  name: string;
  hint: string;
  /** True for the one item that's locked behind PAYMENT rather than behind
   * playing the site — see the comment on PREVIEW_OUTFITS below. */
  proOnly?: boolean;
  isUnlocked: (info: OutfitUnlockInfo, isProSubscriber: boolean) => boolean;
};

// Deliberately short. This is a proof of the PATTERN (see the file comment
// above), not a finished catalogue — one new item for a second mascot, and
// the single Pro-exclusive item Matthew asked for.
export const PREVIEW_OUTFITS: PreviewOutfitDef[] = [
  {
    id: "reading-scarf",
    mascot: "hoot",
    name: "Reading scarf",
    hint: "Reach Level 3",
    isUnlocked: (info) => info.level >= 3,
  },
  {
    // Named differently from Pixel's existing free "Crown" outfit
    // (PixelOutfits.tsx) on purpose — Matthew's ask was "something like a
    // king's crown" as a NEW, separate, Pro-only item, not a reskin of the
    // one that already unlocks at Level 10 for everyone. Keeping the two
    // visually and nominally distinct avoids a subscriber wondering why
    // they paid for something free players already have.
    id: "diamond-crown",
    mascot: "pixel",
    name: "Diamond crown",
    hint: "Pro subscribers only",
    proOnly: true,
    // Nothing to check yet — there is no subscription record anywhere in
    // this codebase (see UpgradeButtons.tsx). Until that exists, this is
    // permanently locked for everyone, `isProSubscriber` included; the
    // parameter is here so the real check has an obvious place to slot in
    // later rather than needing this function's signature to change.
    isUnlocked: (_info, isProSubscriber) => isProSubscriber,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// RENDERING — one small wrapper per mascot, the same "own layer on top,
// positioned in percentages of a fixed aspect-ratio box" approach
// PixelOutfits.tsx already uses for Pixel. Every mascot on this site shares
// Pixel's 120:140 viewBox (see Mascots.tsx), so the same box works
// unchanged for Hoot too.
// ─────────────────────────────────────────────────────────────────────────────

type SvgProps = React.SVGProps<SVGSVGElement>;

export function MascotWithPreviewOutfit({
  mascot,
  outfit,
  className,
  ...rest
}: SvgProps & { mascot: PreviewMascotId; outfit: PreviewOutfitId | "none" }) {
  const Base = mascot === "pixel" ? Pixel : Hoot;

  return (
    <span
      className={`relative inline-block ${className ?? ""}`}
      style={{ aspectRatio: "120 / 140" }}
    >
      <Base className="absolute inset-0 z-10 h-full w-full" {...rest} />
      {mascot === "pixel" && outfit === "diamond-crown" && <DiamondCrown />}
      {mascot === "hoot" && outfit === "reading-scarf" && <ReadingScarf />}
    </span>
  );
}

// A showier cousin of Pixel's free "Crown" — more points, jewels on every
// one of them rather than three, and drawn in a cooler silver/blue rather
// than gold specifically so it doesn't read as "the same crown" at a
// glance, on top of already having a different name.
function DiamondCrown() {
  return (
    <svg
      viewBox="0 0 100 60"
      aria-hidden="true"
      className="absolute z-20"
      style={{ left: "28%", top: "3%", width: "42%", height: "18%" }}
    >
      <path
        d="M4 50 L4 22 L20 38 L34 10 L50 34 L66 10 L80 38 L96 22 L96 50 Z"
        fill="#cbd5e1"
      />
      <rect x="2" y="48" width="96" height="10" rx="3" fill="#94a3b8" />
      <circle cx="20" cy="30" r="3.5" fill="#38bdf8" />
      <circle cx="34" cy="20" r="3.5" fill="#818cf8" />
      <circle cx="50" cy="28" r="4.5" fill="#f472b6" />
      <circle cx="66" cy="20" r="3.5" fill="#818cf8" />
      <circle cx="80" cy="30" r="3.5" fill="#38bdf8" />
    </svg>
  );
}

// A simple knitted scarf looped once round Hoot's neck, sitting just below
// the pale chest patch (see Mascots.tsx — Hoot's chest ellipse is centred
// around y=86 on the same 120x140 viewBox this box is scaled to).
function ReadingScarf() {
  return (
    <svg
      viewBox="0 0 100 40"
      aria-hidden="true"
      className="absolute z-20"
      style={{ left: "18%", top: "66%", width: "64%", height: "24%" }}
    >
      <path
        d="M4 10 Q50 26 96 10 L92 20 Q50 34 8 20 Z"
        fill="#dc2626"
      />
      <rect x="42" y="18" width="10" height="20" rx="3" fill="#dc2626" />
      <rect x="42" y="30" width="10" height="4" fill="#991b1b" opacity={0.6} />
    </svg>
  );
}
