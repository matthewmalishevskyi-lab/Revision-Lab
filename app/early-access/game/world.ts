// The level as the game sees it: a grid of squares built from a level
// definition. Each open square has a floor, a ceiling at its own height, a
// light colour, and the walls around it get textures chosen by the area they
// face. Ported from the level prototype, plus a pre-baked light map so the
// renderer does no light maths per pixel.

import type { TexSet } from "./textures";
import { WALLS } from "./textures";

export const FACE = { N: 0, E: 1, S: 2, W: 3 } as const;
export const DIRS: [number, number][] = [[0, -1], [1, 0], [0, 1], [-1, 0]];
export const ROOM_H = 1.3, DOOR_H = 1.0, COVER_H = 0.34;
export const LIGHT_SUB = 8; // light-map samples per square, each way

export type Area = {
  r: [number, number, number, number];
  name: string;
  light: [number, number, number];
  wall: string;
  floor: string;
  ceil: string;
  ceilH?: number;
  upper?: string;
};
export type DoorDef = { cells: [number, number][]; tex: string; key?: string; secret?: boolean; exit?: boolean; /** stays shut until you have this */ needs?: "pistol" };
export type Thing = { t: string; x: number; y: number; face?: number; stomp?: boolean; z?: number };
export type LevelDef = {
  TITLE: string;
  W: number;
  H: number;
  DUCT_H?: number;
  AREAS: Record<string, Area>;
  DOORS: DoorDef[];
  BLOCKS?: { cells: [number, number][]; tex: string }[];
  FLOORS?: [number, number, number, number, string][];
  COVER?: [number, number, string][];
  GRILLES?: [number, number][];
  WALL_OVERRIDE?: (area: string, face: number, x: number, y: number) => string | undefined;
  DECALS?: [number, number, number, string, boolean?][];
  SPRITES: Thing[];
  LIGHTS?: { x: number; y: number; rgb: [number, number, number]; r: number }[];
  START: { x: number; y: number; angle: number };
  CORE?: [number, number][];
  /** What the mascot says when the level starts. */
  INTRO?: string;
  /** Tips the mascot gives the first time you walk into an area. */
  HINTS?: Record<string, string>;
  /** Where the compass marker points, in order; each is done once you have its `until`. */
  OBJECTIVES?: { text: string; at: [number, number]; until?: "pistol" | "keycard" }[];
  LOCKED_HINT?: string;
};

export type Box = { x0: number; y0: number; w: number; h: number };
export type Door = DoorDef & { open: number; box: Box; target: number };

export type World = {
  W: number;
  H: number;
  def: LevelDef;
  solid: Uint8Array; // 1 wall, 2 low cover, 0 open
  area: (string | null)[];
  ceilH: Float32Array;
  floorTex: (string | null)[];
  ceilTex: (string | null)[];
  faces: (string | null)[][];
  cellTex: (string | null)[];
  block: (Box | null)[];
  coverTex: (string | null)[];
  door: (Door | null)[];
  doors: Door[];
  grille: Uint8Array;
  light: Float32Array; // per square
  fine: Float32Array; // LIGHT_SUB x LIGHT_SUB samples per square, with corner shadows baked in
};

export function buildWorld(def: LevelDef, tex: TexSet): World {
  const { W, H } = def;
  const idx = (x: number, y: number) => y * W + x;
  const N = W * H;
  const solid = new Uint8Array(N).fill(1);
  const area: (string | null)[] = new Array(N).fill(null);
  const ceilH = new Float32Array(N).fill(ROOM_H);
  const floorTex: (string | null)[] = new Array(N).fill(null), ceilTex: (string | null)[] = new Array(N).fill(null);
  const faces: (string | null)[][] = Array.from({ length: N }, () => [null, null, null, null]);
  const cellTex: (string | null)[] = new Array(N).fill(null), block: (Box | null)[] = new Array(N).fill(null);
  const coverTex: (string | null)[] = new Array(N).fill(null), door: (Door | null)[] = new Array(N).fill(null);
  const grille = new Uint8Array(N);
  const doors: Door[] = [];

  for (const [key, a] of Object.entries(def.AREAS)) {
    const [x0, y0, x1, y1] = a.r;
    for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) {
      const i = idx(x, y); solid[i] = 0; area[i] = key; floorTex[i] = a.floor; ceilH[i] = a.ceilH || ROOM_H;
      const cx = x - x0, cy = y - y0;
      const pattern: Record<string, string> = {
        light: (cx + cy) % 2 === 0 ? "cLight" : "cPanel",
        corridor: (x + y) % 3 === 0 ? "cLight" : "cPanel",
        grid: cx % 3 === 1 && cy % 3 === 1 ? "cLight" : "cPanel",
        dark: "cDark", stars: "cStars", reactor: cx % 3 === 1 && cy % 4 === 1 ? "cLight" : "cDark",
        hall: cx % 4 === 1 && cy % 4 === 1 ? "cLight" : "cDark", duct: "cDuct",
      };
      ceilTex[i] = pattern[a.ceil] ?? "cPanel";
    }
  }
  for (const [x0, y0, x1, y1, t] of def.FLOORS || []) for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) floorTex[idx(x, y)] = t;
  const boxOf = (cells: [number, number][]): Box => {
    const xs = cells.map((c) => c[0]), ys = cells.map((c) => c[1]);
    return { x0: Math.min(...xs), y0: Math.min(...ys), w: Math.max(...xs) - Math.min(...xs) + 1, h: Math.max(...ys) - Math.min(...ys) + 1 };
  };
  for (const b of def.BLOCKS || []) {
    const box = boxOf(b.cells);
    for (const [x, y] of b.cells) { solid[idx(x, y)] = 1; cellTex[idx(x, y)] = b.tex; block[idx(x, y)] = box; }
  }
  for (const [x, y, t] of def.COVER || []) { const i = idx(x, y); solid[i] = 2; coverTex[i] = t; }
  for (const [x, y] of def.GRILLES || []) {
    const i = idx(x, y); solid[i] = 0; grille[i] = 1; ceilH[i] = def.DUCT_H ?? 0.7; area[i] = area[i] || "grille"; floorTex[i] = "fDuct"; ceilTex[i] = "cDuct";
  }
  for (const d of def.DOORS) {
    const dd: Door = { ...d, open: 0, target: 0, box: boxOf(d.cells) };
    doors.push(dd);
    for (const [x, y] of d.cells) {
      const i = idx(x, y); solid[i] = 1; cellTex[i] = d.tex; door[i] = dd; block[i] = dd.box; ceilH[i] = DOOR_H;
      const n = DIRS.map(([dx, dy]) => area[idx(x + dx, y + dy)]).find(Boolean) ?? null;
      area[i] = n; floorTex[i] = "fGrate"; ceilTex[i] = "cPanel";
    }
  }

  // Dress every wall face by the area it faces.
  const isOpen = (x: number, y: number) => x >= 0 && y >= 0 && x < W && y < H && solid[idx(x, y)] !== 1;
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const i = idx(x, y); if (solid[i] !== 1 || cellTex[i]) continue;
    for (let f = 0; f < 4; f++) {
      const nx = x + DIRS[f][0], ny = y + DIRS[f][1];
      if (!isOpen(nx, ny)) continue;
      const ai = area[idx(nx, ny)]; const a = ai ? def.AREAS[ai] : undefined; if (!a || !ai) continue;
      const along = f % 2 === 0 ? x : y;
      let t = "panel";
      switch (a.wall) {
        case "corridor": t = along % 3 === 0 ? "light" : along % 5 === 2 ? "vent" : "panel"; break;
        case "hub": t = along % 4 === 1 ? "cargo" : along % 4 === 3 ? "light" : "panel"; break;
        case "obs": t = f === FACE.S ? (x % 3 === 0 ? "pillar" : "window") : (x % 4 === 0 ? "light" : "panel"); break;
        case "pipes": t = "pipes"; break;
        case "reactor": t = along % 3 === 0 ? "computer" : along % 3 === 1 ? "vent" : "light"; break;
        case "bridge": case "control": t = along % 2 === 0 ? "computer" : "panel"; break;
        case "hall": t = along % 4 === 0 ? "pillar" : along % 4 === 2 ? "tank" : "hazardPanel"; break;
        case "duct": t = "duct"; break;
        case "mess": t = along % 3 === 0 ? "dispenser" : along % 3 === 1 ? "light" : "panel"; break;
        case "bunks": t = along % 2 === 0 ? "bunk" : "panel"; break;
        default: t = along % 3 === 0 ? "light" : "panel";
      }
      const o = def.WALL_OVERRIDE?.(ai, f, x, y); if (o) t = o;
      faces[i][f] = t;
    }
  }
  for (const [x, y, f, decal, flip] of def.DECALS || []) {
    const i = idx(x, y); const base = faces[i][f]; if (!base) continue;
    const name = `${base}+${decal}${flip ? "-flip" : ""}`;
    if (!tex.out[name]) tex.add(name, WALLS[base], decal, flip);
    faces[i][f] = name;
  }

  // Light per square: the area's colour, pools under ceiling lights, spill from bright things; softened.
  let light = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) { const ai = area[i]; const a = ai ? def.AREAS[ai] : undefined; if (a) light.set(a.light, i * 3); }
  for (let i = 0; i < N * 3; i++) light[i] *= 0.72;
  const pools: { x: number; y: number; rgb: [number, number, number]; r: number }[] = [];
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    if (ceilTex[idx(x, y)] === "cLight") pools.push({ x: x + 0.5, y: y + 0.5, rgb: [0.3, 0.33, 0.38], r: 2.4 });
    if (floorTex[idx(x, y)] === "fRad") pools.push({ x: x + 0.5, y: y + 0.5, rgb: [0.02, 0.1, 0.2], r: 2 });
  }
  for (const L of [...(def.LIGHTS || []), ...pools]) {
    const x0 = Math.max(0, Math.floor(L.x - L.r)), x1 = Math.min(W - 1, Math.ceil(L.x + L.r));
    const y0 = Math.max(0, Math.floor(L.y - L.r)), y1 = Math.min(H - 1, Math.ceil(L.y + L.r));
    for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) {
      const d = Math.hypot(x + 0.5 - L.x, y + 0.5 - L.y); if (d > L.r) continue;
      const k = 1 - d / L.r; for (let c = 0; c < 3; c++) light[idx(x, y) * 3 + c] += L.rgb[c] * k * k;
    }
  }
  for (let pass = 0; pass < 2; pass++) {
    const next = new Float32Array(light);
    for (let y = 1; y < H - 1; y++) for (let x = 1; x < W - 1; x++) {
      if (solid[idx(x, y)] === 1 && !door[idx(x, y)]) continue;
      for (let c = 0; c < 3; c++) {
        let s = light[idx(x, y) * 3 + c] * 2, n = 2;
        for (const [dx, dy] of DIRS) { const j = idx(x + dx, y + dy); if (area[j]) { s += light[j * 3 + c]; n++; } }
        next[idx(x, y) * 3 + c] = s / n;
      }
    }
    light = next;
  }

  // Bake a fine light map: smooth between squares, darker where floor meets wall.
  const blocks = (x: number, y: number) => x < 0 || y < 0 || x >= W || y >= H || (solid[idx(x, y)] === 1 && !door[idx(x, y)]);
  const edge = (d: number) => { const R = 0.35; if (d >= R) return 1; const t = d / R; return 0.55 + 0.45 * t * t; };
  const FW = W * LIGHT_SUB, FH = H * LIGHT_SUB;
  const fine = new Float32Array(FW * FH * 3);
  for (let fy = 0; fy < FH; fy++) for (let fx = 0; fx < FW; fx++) {
    const wx = (fx + 0.5) / LIGHT_SUB, wy = (fy + 0.5) / LIGHT_SUB;
    const cx = Math.floor(wx), cy = Math.floor(wy), ux = wx - cx, uy = wy - cy;
    let k = 1;
    if (blocks(cx - 1, cy)) k *= edge(ux); if (blocks(cx + 1, cy)) k *= edge(1 - ux);
    if (blocks(cx, cy - 1)) k *= edge(uy); if (blocks(cx, cy + 1)) k *= edge(1 - uy);
    const gx = wx - 0.5, gy = wy - 0.5, x0 = Math.floor(gx), y0 = Math.floor(gy), ax = gx - x0, ay = gy - y0;
    const o = (fy * FW + fx) * 3;
    for (const [ox, oy, w] of [[0, 0, (1 - ax) * (1 - ay)], [1, 0, ax * (1 - ay)], [0, 1, (1 - ax) * ay], [1, 1, ax * ay]]) {
      const sx = Math.min(W - 1, Math.max(0, x0 + ox)), sy = Math.min(H - 1, Math.max(0, y0 + oy)); const j = idx(sx, sy) * 3;
      fine[o] += light[j] * w * k; fine[o + 1] += light[j + 1] * w * k; fine[o + 2] += light[j + 2] * w * k;
    }
  }
  return { W, H, def, solid, area, ceilH, floorTex, ceilTex, faces, cellTex, block, coverTex, door, doors, grille, light, fine };
}

/** Can something stand here? Walls, cover, grilles and closed doors block. */
export function blocked(w: World, x: number, y: number): boolean {
  if (x < 0 || y < 0 || x >= w.W || y >= w.H) return true;
  const i = y * w.W + x;
  const d = w.door[i];
  if (d) return d.open < 0.9;
  return w.solid[i] !== 0 || w.grille[i] === 1;
}

/** Does anything opaque stand between two points? Cover doesn't block sight.
 *  With `solidGrilles`, vent grilles count too: you can SEE through one, but a
 *  shot can't go through it (otherwise the vents would be a safe sniper nest). */
export function lineOfSight(w: World, ax: number, ay: number, bx: number, by: number, solidGrilles = false): boolean {
  const dist = Math.hypot(bx - ax, by - ay); const steps = Math.ceil(dist * 4);
  for (let s = 1; s < steps; s++) {
    const t = s / steps, x = Math.floor(ax + (bx - ax) * t), y = Math.floor(ay + (by - ay) * t);
    const i = y * w.W + x; const d = w.door[i];
    if (d ? d.open < 0.9 : w.solid[i] === 1 || (solidGrilles && w.grille[i] === 1)) return false;
  }
  return true;
}
