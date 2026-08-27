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
  | "atom";

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
];

export type ClanBannerConfig = {
  color: string;
  shape: ClanShapeName;
  icon: ClanIconName;
};

export const DEFAULT_BANNER: ClanBannerConfig = {
  color: CLAN_COLORS[8].value, // blue
  shape: "shield",
  icon: "trophy",
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
