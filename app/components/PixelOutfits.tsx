// Cosmetic outfits for Pixel — unlocked by playing the site, not bought or
// spent. Matthew's ask was "spend the XP you're already earning to unlock
// cosmetics"; this reads that as XP (and the other things you already earn —
// a streak, badges) being the UNLOCK CONDITION rather than a currency with a
// balance to manage. That keeps this consistent with everything else on the
// progress page: nothing is stored, every unlock is worked out fresh from
// figures `getProgress` already computes. There's no "spent XP" to track and
// nothing that could ever drift out of sync with reality.
//
// Deliberately varied unlock conditions — level, a streak, badges earned —
// rather than all four gated on the same number, so getting one has nothing
// to do with what you were already doing to get another.
//
// WHICH OUTFIT IS EQUIPPED, though, genuinely is a preference with nothing
// server-side to check — nobody else ever sees it, and getting it wrong has
// no consequence beyond "wrong outfit today". So unlike the streak or XP,
// it lives in localStorage, the same call made for the theme toggle and for
// which celebrations have already been shown — a fact about the browser,
// not something worth a database table and a migration for.

import { Pixel } from "./Mascots";

type SvgProps = React.SVGProps<SVGSVGElement>;

export type OutfitId = "none" | "shades" | "party-hat" | "crown" | "cape";

export type OutfitUnlockInfo = {
  level: number;
  streakCurrent: number;
  badgesEarned: number;
};

export type OutfitDef = {
  id: OutfitId;
  name: string;
  /** Shown on a locked outfit's card — how to unlock it. */
  hint: string;
  isUnlocked: (info: OutfitUnlockInfo) => boolean;
};

// Always all four listed, locked ones included — same reasoning as badges:
// something you can't wear yet is still worth showing as a thing to aim for.
export const OUTFITS: OutfitDef[] = [
  {
    id: "none",
    name: "Classic Pixel",
    hint: "Always available",
    isUnlocked: () => true,
  },
  {
    id: "shades",
    name: "Shades",
    hint: "Reach Level 3",
    isUnlocked: (info) => info.level >= 3,
  },
  {
    id: "party-hat",
    name: "Party hat",
    hint: "Reach a 3-day streak",
    isUnlocked: (info) => info.streakCurrent >= 3,
  },
  {
    id: "cape",
    name: "Cape",
    hint: "Earn 3 badges",
    isUnlocked: (info) => info.badgesEarned >= 3,
  },
  {
    id: "crown",
    name: "Crown",
    hint: "Reach Level 10",
    isUnlocked: (info) => info.level >= 10,
  },
];

// The localStorage key both the wardrobe (which writes it) and every place
// Pixel shows up wearing it (which only reads it) agree on. Kept here, once,
// rather than typed out as a matching string literal in two files.
export const EQUIPPED_OUTFIT_KEY = "revision-lab:equipped-outfit";

// ─────────────────────────────────────────────────────────────────────────────
// HOW AN OUTFIT IS DRAWN: A SEPARATE LAYER, NOT PART OF PIXEL'S OWN SVG
//
// Pixel's own component (Mascots.tsx) is untouched by any of this — every
// existing place Pixel appears (subject cards, the topic-page ladder, the
// dashboard) keeps rendering the exact same robot it always has, with zero
// risk of an outfit change breaking any of them.
//
// Instead, PixelWithOutfit wraps the ordinary <Pixel> in a positioned box and
// draws the accessory as its own small SVG on top (or, for the cape, behind).
// Position is given in PERCENTAGES of that box — which is forced to Pixel's
// own 120:140 aspect ratio via the `aspectRatio` style below — so an
// accessory drawn to sit "over the eyes" or "above the head" lines up
// correctly no matter what height class a caller puts on it.
// ─────────────────────────────────────────────────────────────────────────────

export function PixelWithOutfit({
  outfit,
  className,
  ...rest
}: SvgProps & { outfit: OutfitId }) {
  return (
    <span
      className={`relative inline-block ${className ?? ""}`}
      style={{ aspectRatio: "120 / 140" }}
    >
      {outfit === "cape" && <Cape />}
      {/* Explicit z-10, not left to rely on DOM order beating the cape's
          z-0 — correct either way, but this makes the stacking intentional
          rather than incidental. */}
      <Pixel className="absolute inset-0 z-10 h-full w-full" {...rest} />
      {outfit === "shades" && <Shades />}
      {outfit === "party-hat" && <PartyHat />}
      {outfit === "crown" && <Crown />}
    </span>
  );
}

function Shades() {
  return (
    <svg
      viewBox="0 0 100 30"
      aria-hidden="true"
      className="absolute z-20"
      style={{ left: "30%", top: "27%", width: "40%", height: "10%" }}
    >
      <rect x="4" y="6" width="38" height="20" rx="8" fill="#111827" />
      <rect x="58" y="6" width="38" height="20" rx="8" fill="#111827" />
      <rect x="42" y="13" width="16" height="5" rx="2.5" fill="#111827" />
      <rect x="8" y="9" width="14" height="6" rx="3" fill="#ffffff" opacity={0.25} />
      <rect x="62" y="9" width="14" height="6" rx="3" fill="#ffffff" opacity={0.25} />
    </svg>
  );
}

function PartyHat() {
  return (
    <svg
      viewBox="0 0 60 80"
      aria-hidden="true"
      className="absolute z-20"
      style={{ left: "32%", top: "-16%", width: "34%", height: "30%" }}
    >
      <path d="M30 2 L54 74 L6 74 Z" fill="#ec4899" />
      <path d="M30 2 L44 74 L16 74 Z" fill="#f472b6" opacity={0.6} />
      <circle cx="30" cy="6" r="7" fill="#fbbf24" />
      <rect x="4" y="70" width="52" height="8" rx="4" fill="#fde047" />
    </svg>
  );
}

function Crown() {
  return (
    <svg
      viewBox="0 0 100 60"
      aria-hidden="true"
      className="absolute z-20"
      style={{ left: "30%", top: "5%", width: "38%", height: "16%" }}
    >
      <path d="M6 50 L6 26 L26 40 L50 14 L74 40 L94 26 L94 50 Z" fill="#fbbf24" />
      <rect x="4" y="48" width="92" height="10" rx="3" fill="#f59e0b" />
      <circle cx="50" cy="30" r="5" fill="#ef4444" />
      <circle cx="26" cy="36" r="3.5" fill="#3b82f6" />
      <circle cx="74" cy="36" r="3.5" fill="#3b82f6" />
    </svg>
  );
}

// The one outfit drawn BEHIND Pixel rather than on top — a cape drapes from
// the shoulders, so it needs to disappear behind the body and only peek out
// at the edges, which only works if it's the earlier sibling with a lower
// z-index, not a layer stacked over everything else.
function Cape() {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className="absolute z-0"
      style={{ left: "8%", top: "46%", width: "84%", height: "48%" }}
    >
      <path d="M20 0 Q50 14 80 0 L96 92 Q50 108 4 92 Z" fill="#7c3aed" />
      <path d="M20 0 Q50 14 80 0 L86 30 Q50 42 14 30 Z" fill="#8b5cf6" opacity={0.5} />
    </svg>
  );
}
