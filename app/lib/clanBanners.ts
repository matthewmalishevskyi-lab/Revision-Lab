// Every choice a clan banner can be made of. Pure data — no server code, no
// `"use server"` — so both the picker (a Client Component) and the server
// actions that validate a submission can import the exact same lists.
//
// A banner is three independent choices: a colour, a shape, and an icon.
// Not an uploaded image — there's nothing to moderate, nothing to store as a
// file, and every one of the 15 × 6 × 15 combinations looks intentional
// because every option was designed to sit inside every other one, the same
// reasoning subjects.ts uses for its own colours.

export type ClanColor = { value: string; label: string; hex: string };

// 15, as asked for. These don't need the CIE-Lab rigor subjects.ts's colours
// do — those all share ONE progress ring where colour is the only thing
// telling nine subjects apart. A banner stands alone on its own card, so
// "visibly different hues, evenly spread around the colour wheel" is enough.
export const CLAN_COLORS: ClanColor[] = [
  { value: "crimson", label: "Crimson", hex: "#dc2626" },
  { value: "amber", label: "Amber", hex: "#f59e0b" },
  { value: "gold", label: "Gold", hex: "#ca8a04" },
  { value: "lime", label: "Lime", hex: "#65a30d" },
  { value: "emerald", label: "Emerald", hex: "#16a34a" },
  { value: "teal", label: "Teal", hex: "#0d9488" },
  { value: "cyan", label: "Cyan", hex: "#0891b2" },
  { value: "sky", label: "Sky", hex: "#0284c7" },
  { value: "blue", label: "Blue", hex: "#2563eb" },
  { value: "indigo", label: "Indigo", hex: "#4f46e5" },
  { value: "violet", label: "Violet", hex: "#7c3aed" },
  { value: "purple", label: "Purple", hex: "#9333ea" },
  { value: "fuchsia", label: "Fuchsia", hex: "#c026d3" },
  { value: "pink", label: "Pink", hex: "#db2777" },
  { value: "slate", label: "Slate", hex: "#475569" },
];

export type ClanShapeName =
  | "circle"
  | "square"
  | "diamond"
  | "hexagon"
  | "shield"
  | "ribbon";

export const CLAN_SHAPES: { value: ClanShapeName; label: string }[] = [
  { value: "circle", label: "Circle" },
  { value: "square", label: "Square" },
  { value: "diamond", label: "Diamond" },
  { value: "hexagon", label: "Hexagon" },
  { value: "shield", label: "Shield" },
  { value: "ribbon", label: "Ribbon" },
];

// 15 objects and characters, same count as the colours purely by nice
// coincidence — Matthew asked for "characters or objects... a laptop, a
// mouse, a pen, a calculator", so this leans on things a GCSE student
// actually has on their desk, plus a handful of game-badge staples (trophy,
// star, crown) for clans that want to look like an achievement rather than
// a stationery drawer.
export type ClanIconName =
  | "laptop"
  | "mouse"
  | "pen"
  | "calculator"
  | "book"
  | "trophy"
  | "star"
  | "rocket"
  | "flame"
  | "crown"
  | "gem"
  | "controller"
  | "headphones"
  | "lightbulb"
  | "atom"
  // Added on request: a microphone and a guitar were named specifically,
  // plus five more of "small stuff" left open — paintbrush, football,
  // camera and chess-pawn round out hobbies the first 15 didn't cover
  // (music, sport, art, photography, games-as-strategy rather than
  // games-as-controller), and lightning is just a good general "energy /
  // fast / powerful" symbol that a lot of clan names will want.
  | "microphone"
  | "guitar"
  | "paintbrush"
  | "football"
  | "camera"
  | "pawn"
  | "lightning";

export const CLAN_ICONS: { value: ClanIconName; label: string }[] = [
  { value: "laptop", label: "Laptop" },
  { value: "mouse", label: "Mouse" },
  { value: "pen", label: "Pen" },
  { value: "calculator", label: "Calculator" },
  { value: "book", label: "Book" },
  { value: "trophy", label: "Trophy" },
  { value: "star", label: "Star" },
  { value: "rocket", label: "Rocket" },
  { value: "flame", label: "Flame" },
  { value: "crown", label: "Crown" },
  { value: "gem", label: "Gem" },
  { value: "controller", label: "Controller" },
  { value: "headphones", label: "Headphones" },
  { value: "lightbulb", label: "Lightbulb" },
  { value: "atom", label: "Atom" },
  { value: "microphone", label: "Microphone" },
  { value: "guitar", label: "Guitar" },
  { value: "paintbrush", label: "Paintbrush" },
  { value: "football", label: "Football" },
  { value: "camera", label: "Camera" },
  { value: "pawn", label: "Chess pawn" },
  { value: "lightning", label: "Lightning" },
];

// ─── Sizing and positioning the icon ────────────────────────────────────────
//
// Three independent numbers on top of the colour/shape/icon choice, added
// when Matthew asked to "resize it and move it around" after seeing the
// picker's fixed, centred default. `scale` is a MULTIPLIER on the icon's
// normal size (1 = the original fixed look, unchanged for every clan made
// before this existed — see DEFAULT_BANNER below), and `offsetX`/`offsetY`
// nudge it away from dead-centre in the same 0–100 space the banner itself
// is drawn in.
//
// Clamped ranges, not "whatever the slider allows" trusted blindly — the
// same reasoning createClanAction already applies to colour/shape/icon:
// never trust that a submitted number is one the picker's own slider could
// actually have produced, since a POST body can be edited directly. Kept
// here, not in clan-actions.ts, so the picker's sliders and the server's
// validation can't quietly drift apart from each other.
export const ICON_SCALE_MIN = 0.6;
export const ICON_SCALE_MAX = 1.8;
export const ICON_OFFSET_MIN = -24;
export const ICON_OFFSET_MAX = 24;

export function clampIconScale(value: number): number {
  if (!Number.isFinite(value)) return 1;
  return Math.min(ICON_SCALE_MAX, Math.max(ICON_SCALE_MIN, value));
}

export function clampIconOffset(value: number): number {
  if (!Number.isFinite(value)) return 0;
  return Math.min(ICON_OFFSET_MAX, Math.max(ICON_OFFSET_MIN, value));
}

export type ClanBannerConfig = {
  color: string;
  shape: ClanShapeName;
  icon: ClanIconName;
  /** 1 = the original, fixed size every clan had before resizing existed. */
  iconScale: number;
  /** 0,0 = dead centre — the original, fixed position. */
  iconOffsetX: number;
  iconOffsetY: number;
};

export const DEFAULT_BANNER: ClanBannerConfig = {
  color: CLAN_COLORS[8].value, // blue
  shape: "shield",
  icon: "trophy",
  iconScale: 1,
  iconOffsetX: 0,
  iconOffsetY: 0,
};

export function isClanColor(value: string): boolean {
  return CLAN_COLORS.some((c) => c.value === value);
}

export function isClanShape(value: string): value is ClanShapeName {
  return CLAN_SHAPES.some((s) => s.value === value);
}

export function isClanIcon(value: string): value is ClanIconName {
  return CLAN_ICONS.some((i) => i.value === value);
}

export function colorHex(value: string): string {
  return CLAN_COLORS.find((c) => c.value === value)?.hex ?? CLAN_COLORS[8].hex;
}
