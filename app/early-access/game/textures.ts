// Textures for the alien game, drawn in code (see the level design notes in PROJECT_NOTES.md).
// Ported from the level prototype; each has a colour layer and a glow layer.

// Procedural textures for the alien battleship. Every texture is drawn with
// the canvas API at 128x128 into two layers:
//   base  - the colours
//   glow  - white wherever the surface gives off its own light (screens, strips,
//           stars). The renderer keeps those pixels bright in the dark, which is
//           most of what makes a Doom-style level feel lit rather than flat.
// Palette: mostly white panels, blue light, steel blue-grey structure.

export type Ctx = CanvasRenderingContext2D;
export type Tex = { base: Uint8ClampedArray; glow: Uint8ClampedArray; canvas: HTMLCanvasElement };
type Draw = (ctx: Ctx, g: Ctx) => void;
const TS = 128;

export function mulberry(seed: number) {
  return function () {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const C = {
  white: "#e4eaf1", white2: "#d3dce6", white3: "#bcc7d3", shade: "#98a5b5", dark: "#5d6a7b",
  steel: "#7d8ca0", steel2: "#5f6e83", steel3: "#3f4b5c", ink: "#1b222d",
  blue: "#3aa8ff", blue2: "#1c6fd6", cyan: "#7fe6ff", navy: "#0a1830", glowWhite: "#eaf6ff",
  amber: "#ffb640", red: "#ff4d4d",
};

function makeLayer(): [HTMLCanvasElement, Ctx] {
  const c = document.createElement("canvas"); c.width = TS; c.height = TS;
  const x = c.getContext("2d", { willReadFrequently: true })!; x.imageSmoothingEnabled = false; return [c, x];
}

// ── drawing helpers ─────────────────────────────────────────────────────────
function grain(ctx: Ctx, seed: number, amount = 10, alpha = 1) {
  const r = mulberry(seed); const img = ctx.getImageData(0, 0, TS, TS); const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    if (d[i + 3] === 0) continue;
    const n = (r() - 0.5) * amount * alpha;
    d[i] = Math.max(0, Math.min(255, d[i] + n)); d[i + 1] = Math.max(0, Math.min(255, d[i + 1] + n)); d[i + 2] = Math.max(0, Math.min(255, d[i + 2] + n));
  }
  ctx.putImageData(img, 0, 0);
}
function grime(ctx: Ctx, seed: number, n = 30, col = "rgba(60,70,85,0.03)") {
  const r = mulberry(seed);
  for (let i = 0; i < n; i++) { ctx.fillStyle = col; const s = 2 + r() * 10; ctx.beginPath(); ctx.ellipse(r() * TS, TS * (0.5 + r() * 0.5), s, s * 0.6, 0, 0, 7); ctx.fill(); }
}
function bevel(ctx: Ctx, x: number, y: number, w: number, h: number, fill: string, light = "rgba(255,255,255,0.75)", dark = "rgba(40,50,65,0.45)", t = 2) {
  ctx.fillStyle = fill; ctx.fillRect(x, y, w, h);
  ctx.fillStyle = light; ctx.fillRect(x, y, w, t); ctx.fillRect(x, y, t, h);
  ctx.fillStyle = dark; ctx.fillRect(x, y + h - t, w, t); ctx.fillRect(x + w - t, y, t, h);
}
function inset(ctx: Ctx, x: number, y: number, w: number, h: number, fill: string, t = 2) {
  ctx.fillStyle = fill; ctx.fillRect(x, y, w, h);
  ctx.fillStyle = "rgba(30,40,55,0.5)"; ctx.fillRect(x, y, w, t); ctx.fillRect(x, y, t, h);
  ctx.fillStyle = "rgba(255,255,255,0.6)"; ctx.fillRect(x, y + h - t, w, t); ctx.fillRect(x + w - t, y, t, h);
}
function rivet(ctx: Ctx, x: number, y: number, r = 2) {
  ctx.fillStyle = "rgba(40,50,65,0.55)"; ctx.beginPath(); ctx.arc(x + 0.6, y + 0.6, r, 0, 7); ctx.fill();
  ctx.fillStyle = "#f4f7fb"; ctx.beginPath(); ctx.arc(x, y, r - 0.6, 0, 7); ctx.fill();
}
function glowRect(ctx: Ctx, g: Ctx, x: number, y: number, w: number, h: number, col: string, halo = 3) {
  ctx.save(); ctx.shadowColor = col; ctx.shadowBlur = halo * 2; ctx.fillStyle = col; ctx.fillRect(x, y, w, h); ctx.restore();
  g.fillStyle = "#fff"; g.fillRect(x, y, w, h);
  if (halo) { g.save(); g.globalAlpha = 0.35; g.fillRect(x - 1, y - 1, w + 2, h + 2); g.restore(); }
}
function led(ctx: Ctx, g: Ctx, x: number, y: number, col: string, r = 1.6) {
  ctx.fillStyle = col; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill();
  g.fillStyle = "#fff"; g.beginPath(); g.arc(x, y, r, 0, 7); g.fill();
}
function hazard(ctx: Ctx, x: number, y: number, w: number, h: number, a: string = C.blue2, b: string = C.white) {
  ctx.save(); ctx.beginPath(); ctx.rect(x, y, w, h); ctx.clip();
  ctx.fillStyle = b; ctx.fillRect(x, y, w, h); ctx.fillStyle = a;
  for (let i = -h; i < w + h; i += 12) { ctx.beginPath(); ctx.moveTo(x + i, y + h); ctx.lineTo(x + i + 6, y + h); ctx.lineTo(x + i + 6 + h, y); ctx.lineTo(x + i + h, y); ctx.fill(); }
  ctx.restore();
}
function pixelText(ctx: Ctx, g: Ctx, text: string, x: number, y: number, col: string, scale = 2, glow = false) {
  const F: Record<string, string> = { A: "010101111101101", B: "110101110101110", C: "011100100100011", D: "110101101101110", E: "111100110100111", F: "111100110100100", G: "011100101101011", H: "101101111101101", I: "111010010010111", K: "101110100110101", L: "100100100100111", M: "101111111101101", N: "110101101101101", O: "010101101101010", P: "110101110100100", R: "110101110110101", S: "011100010001110", T: "111010010010010", U: "101101101101111", V: "101101101101010", X: "101101010101101", Y: "101101010010010", 0: "111101101101111", 1: "010110010010111", 2: "110001010100111", 3: "110001010001110", 4: "101101111001001", 5: "111100110001110", 6: "011100111101111", 7: "111001010010010", 8: "111101111101111", 9: "111101111001110", "-": "000000111000000", " ": "000000000000000" };
  ctx.fillStyle = col; let cx = x;
  for (const ch of text) { const f = F[ch] || F[" "]; for (let i = 0; i < 15; i++) if (f[i] === "1") { const px = cx + (i % 3) * scale, py = y + Math.floor(i / 3) * scale; ctx.fillRect(px, py, scale, scale); if (glow) { g.fillStyle = "#fff"; g.fillRect(px, py, scale, scale); } } cx += 4 * scale; }
}
// Alien writing: blocky glyphs made of strokes, seeded so each sign differs.
function glyphs(ctx: Ctx, g: Ctx, x: number, y: number, n: number, seed: number, col: string, size = 7) {
  const r = mulberry(seed); ctx.strokeStyle = col; ctx.lineWidth = 1.6; g.strokeStyle = "#fff"; g.lineWidth = 1.6;
  for (let k = 0; k < n; k++) {
    const ox = x + k * (size + 3);
    for (const c of [ctx, g] as Ctx[]) {
      c.beginPath();
      const pts = [[0, 0], [size, 0], [size, size], [0, size], [size / 2, size / 2], [size / 2, 0], [0, size / 2]];
      c.moveTo(ox + pts[Math.floor(r() * 7)][0], y + pts[Math.floor(r() * 7)][1]);
      for (let j = 0; j < 3; j++) { const p = pts[Math.floor(r() * 7)]; c.lineTo(ox + p[0], y + p[1]); }
      c.stroke();
      if (r() > 0.5) { c.beginPath(); c.arc(ox + size / 2, y + size / 2, 1.4, 0, 7); c.stroke(); }
    }
  }
}

// the radiation symbol: three blades round a centre dot (a warning sign, not an emblem)
function radSymbol(ctx: Ctx, g: Ctx | null, cx: number, cy: number, r: number, col = "#ffb640") {
  ctx.fillStyle = col;
  for (let k = 0; k < 3; k++) { const a = -Math.PI / 2 + k * (2 * Math.PI / 3); ctx.beginPath(); ctx.moveTo(cx + Math.cos(a - 0.52) * r * 0.32, cy + Math.sin(a - 0.52) * r * 0.32); ctx.arc(cx, cy, r, a - 0.52, a + 0.52); ctx.arc(cx, cy, r * 0.32, a + 0.52, a - 0.52, true); ctx.fill(); }
  ctx.beginPath(); ctx.arc(cx, cy, r * 0.2, 0, 7); ctx.fill();
  if (g) { g.fillStyle = "#fff"; g.beginPath(); g.arc(cx, cy, r, 0, 7); g.fill(); }
}

// The standard hull panel every other wall is built from.
function panelBase(ctx: Ctx, g: Ctx, seed: number, opts: { noAccent?: boolean } = {}) {
  ctx.fillStyle = C.white2; ctx.fillRect(0, 0, TS, TS);
  // frame posts at the texture edges so side-by-side panels read as modules
  bevel(ctx, 0, 0, 6, TS, C.white3); bevel(ctx, TS - 6, 0, 6, TS, C.white3);
  // upper and lower panels
  bevel(ctx, 8, 6, TS - 16, 52, C.white);
  bevel(ctx, 8, 62, TS - 16, 44, C.white);
  // chamfered corners on the top panel
  ctx.fillStyle = C.white3;
  for (const [cx, cy, dx, dy] of [[8, 6, 1, 1], [TS - 8, 6, -1, 1]]) { ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + 10 * dx, cy); ctx.lineTo(cx, cy + 10 * dy); ctx.fill(); }
  // kickplate
  bevel(ctx, 0, 108, TS, 20, C.shade, "rgba(255,255,255,0.35)");
  ctx.fillStyle = C.steel2; for (let x = 10; x < TS; x += 16) ctx.fillRect(x, 114, 8, 3);
  if (!opts.noAccent) glowRect(ctx, g, 8, 104, TS - 16, 2, C.blue, 2);
  for (const [x, y] of [[12, 10], [TS - 12, 10], [12, 54], [TS - 12, 54], [12, 66], [TS - 12, 66], [12, 102], [TS - 12, 102]]) rivet(ctx, x, y, 1.8);
  grime(ctx, seed, 20); grain(ctx, seed, 9);
}

// ── walls ───────────────────────────────────────────────────────────────────
export const WALLS: Record<string, Draw> = {
  // the band between the top of a wall panel and the ceiling (walls are 1.5 tall)
  trim(ctx: Ctx, g: Ctx) {
    ctx.fillStyle = C.steel2; ctx.fillRect(0, 0, TS, TS);
    bevel(ctx, 0, 0, TS, 26, C.steel3, "rgba(255,255,255,0.25)", "rgba(0,0,0,0.5)");
    for (let x = 0; x < TS; x += 32) bevel(ctx, x, 26, 30, 70, C.white3, "rgba(255,255,255,0.6)", "rgba(20,30,45,0.5)");
    ctx.fillStyle = C.steel3; ctx.fillRect(0, 48, TS, 10); ctx.fillStyle = "#8a98ab"; ctx.fillRect(0, 49, TS, 2);
    for (let x = 14; x < TS; x += 32) led(ctx, g, x, 38, C.blue, 2);
    bevel(ctx, 0, 96, TS, 32, C.white2); glowRect(ctx, g, 0, 118, TS, 2, C.blue, 2);
    for (let x = 8; x < TS; x += 16) rivet(ctx, x, 104, 1.5);
    grain(ctx, 301, 8);
  },
  trimDark(ctx: Ctx, g: Ctx) { WALLS.trim(ctx, g); ctx.fillStyle = "rgba(10,20,40,0.35)"; ctx.fillRect(0, 0, TS, TS); },
  lintel(ctx: Ctx, g: Ctx) {
    ctx.fillStyle = C.steel3; ctx.fillRect(0, 0, TS, TS);
    hazard(ctx, 0, 96, TS, 20); bevel(ctx, 0, 116, TS, 12, C.steel2, "rgba(255,255,255,0.3)");
    for (let x = 0; x < TS; x += 32) bevel(ctx, x + 2, 10, 28, 76, C.steel2, "rgba(255,255,255,0.25)", "rgba(0,0,0,0.5)");
    for (let x = 16; x < TS; x += 32) led(ctx, g, x, 48, C.cyan, 2.2);
    grain(ctx, 311, 10);
  },
  panel(ctx: Ctx, g: Ctx) { panelBase(ctx, g, 11); ctx.fillStyle = "rgba(90,110,130,0.25)"; ctx.fillRect(24, 30, 80, 1); ctx.fillRect(24, 34, 50, 1); },
  secret(ctx: Ctx, g: Ctx) { panelBase(ctx, g, 11); ctx.fillStyle = "rgba(90,110,130,0.25)"; ctx.fillRect(24, 30, 80, 1); ctx.fillStyle = "rgba(40,50,65,0.35)"; ctx.fillRect(8, 59, TS - 16, 2); ctx.fillRect(61, 62, 1, 44); },
  light(ctx: Ctx, g: Ctx) {
    panelBase(ctx, g, 12);
    inset(ctx, 10, 36, TS - 20, 18, C.steel3); glowRect(ctx, g, 13, 40, TS - 26, 10, C.cyan, 5);
    ctx.fillStyle = "rgba(255,255,255,0.8)"; ctx.fillRect(13, 42, TS - 26, 3);
  },
  vent(ctx: Ctx, g: Ctx) {
    panelBase(ctx, g, 13);
    inset(ctx, 22, 16, 84, 38, C.steel3);
    for (let y = 20; y < 52; y += 5) { ctx.fillStyle = C.ink; ctx.fillRect(25, y, 78, 3); ctx.fillStyle = C.steel; ctx.fillRect(25, y + 3, 78, 1); }
    led(ctx, g, 100, 70, C.blue); led(ctx, g, 94, 70, C.cyan);
    ctx.fillStyle = C.dark; pixelText(ctx, g, "V-12", 18, 72, C.steel2, 2);
  },
  computer(ctx: Ctx, g: Ctx) {
    ctx.fillStyle = C.steel2; ctx.fillRect(0, 0, TS, TS);
    bevel(ctx, 0, 0, TS, TS, C.white3); bevel(ctx, 6, 6, TS - 12, 96, C.white2);
    const r = mulberry(21);
    for (const [x, y, w, h, kind] of [[12, 12, 60, 44, 0], [78, 12, 38, 44, 1], [12, 62, 104, 32, 2]]) {
      inset(ctx, x - 2, y - 2, w + 4, h + 4, C.steel3); ctx.fillStyle = C.navy; ctx.fillRect(x, y, w, h);
      g.fillStyle = "rgba(255,255,255,0.25)"; g.fillRect(x, y, w, h);
      if (kind === 0) { // graph
        ctx.strokeStyle = C.cyan; ctx.lineWidth = 1.5; g.strokeStyle = "#fff"; g.lineWidth = 1.5;
        for (const c of [ctx, g] as Ctx[]) { c.beginPath(); for (let i = 0; i <= w - 6; i += 4) { const yy = y + h * 0.65 - Math.sin(i * 0.18) * 8 - r() * 6; if (i) c.lineTo(x + 3 + i, yy); else c.moveTo(x + 3, yy); } c.stroke(); }
        ctx.fillStyle = "rgba(127,230,255,0.25)"; for (let i = 0; i < w; i += 8) ctx.fillRect(x + i, y, 1, h);
      } else if (kind === 1) { // text lines
        for (let i = 0; i < 7; i++) { const lw = 8 + r() * 24; glowRect(ctx, g, x + 3, y + 4 + i * 5.6, lw, 2, i === 2 ? C.amber : C.blue, 0); }
      } else { // alien map of the ship
        glyphs(ctx, g, x + 4, y + 4, 4, 5, C.cyan, 6);
        ctx.strokeStyle = C.blue; g.strokeStyle = "#fff"; ctx.lineWidth = g.lineWidth = 1;
        for (const c of [ctx, g] as Ctx[]) { c.strokeRect(x + 50, y + 6, 20, 12); c.strokeRect(x + 70, y + 10, 26, 16); c.beginPath(); c.moveTo(x + 60, y + 18); c.lineTo(x + 60, y + 26); c.lineTo(x + 70, y + 26); c.stroke(); }
        led(ctx, g, x + 82, y + 18, C.red, 1.8);
      }
    }
    // buttons
    bevel(ctx, 0, 104, TS, 24, C.shade, "rgba(255,255,255,0.35)");
    const cols = [C.blue, C.cyan, C.blue, C.amber, C.blue, C.cyan, C.glowWhite, C.blue];
    for (let i = 0; i < 8; i++) { bevel(ctx, 8 + i * 14, 110, 10, 7, C.steel3, "rgba(255,255,255,0.3)"); led(ctx, g, 13 + i * 14, 113.5, cols[i], 1.8); }
    grain(ctx, 22, 7);
  },
  window(ctx: Ctx, g: Ctx) {
    // the frame
    ctx.fillStyle = C.white2; ctx.fillRect(0, 0, TS, TS);
    bevel(ctx, 0, 0, TS, TS, C.white3);
    ctx.fillStyle = "#01030a"; ctx.fillRect(12, 12, TS - 24, 88);
    g.fillStyle = "rgba(255,255,255,0.08)"; g.fillRect(12, 12, TS - 24, 88);
    const r = mulberry(33);
    // a planet in the corner, lit from the left
    ctx.save(); ctx.beginPath(); ctx.rect(12, 12, TS - 24, 88); ctx.clip();
    const pg = ctx.createRadialGradient(92, 104, 10, 110, 118, 64); pg.addColorStop(0, "#5fb3ff"); pg.addColorStop(0.6, "#1d5fa8"); pg.addColorStop(1, "#061426");
    ctx.fillStyle = pg; ctx.beginPath(); ctx.arc(112, 118, 50, 0, 7); ctx.fill();
    ctx.strokeStyle = "rgba(160,220,255,0.7)"; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(112, 118, 50, Math.PI * 1.05, Math.PI * 1.6); ctx.stroke();
    g.save(); g.beginPath(); g.rect(12, 12, TS - 24, 88); g.clip(); g.fillStyle = "rgba(255,255,255,0.55)"; g.beginPath(); g.arc(112, 118, 50, 0, 7); g.fill(); g.restore();
    for (let i = 0; i < 70; i++) { const x = 12 + r() * (TS - 24), y = 12 + r() * 88, b = r(); const s = b > 0.93 ? 2 : 1; ctx.fillStyle = b > 0.8 ? "#cfe8ff" : "#8aa4c8"; ctx.fillRect(x, y, s, s); g.fillStyle = "#fff"; g.fillRect(x, y, s, s); }
    // glass reflection
    ctx.fillStyle = "rgba(180,220,255,0.10)"; ctx.beginPath(); ctx.moveTo(20, 12); ctx.lineTo(44, 12); ctx.lineTo(12, 60); ctx.lineTo(12, 36); ctx.fill();
    ctx.restore();
    // frame details
    inset(ctx, 10, 10, TS - 20, 3, C.white3, 1); inset(ctx, 10, 99, TS - 20, 3, C.white3, 1);
    for (const x of [16, TS - 16]) for (const y of [106, 120]) rivet(ctx, x, y, 1.8);
    bevel(ctx, 0, 104, TS, 24, C.white3); glowRect(ctx, g, 30, 114, 68, 2, C.blue, 2);
    grain(ctx, 34, 6);
  },
  door(ctx: Ctx, g: Ctx) {
    ctx.fillStyle = C.steel2; ctx.fillRect(0, 0, TS, TS);
    bevel(ctx, 0, 0, TS, TS, C.steel);
    bevel(ctx, 8, 4, 55, 120, C.white); bevel(ctx, 65, 4, 55, 120, C.white);
    // chevrons pointing at the seam
    for (let i = 0; i < 3; i++) {
      const y = 34 + i * 20; ctx.fillStyle = C.blue2;
      ctx.beginPath(); ctx.moveTo(20, y); ctx.lineTo(34, y); ctx.lineTo(54, y + 8); ctx.lineTo(34, y + 16); ctx.lineTo(20, y + 16); ctx.lineTo(40, y + 8); ctx.fill();
      ctx.beginPath(); ctx.moveTo(108, y); ctx.lineTo(94, y); ctx.lineTo(74, y + 8); ctx.lineTo(94, y + 16); ctx.lineTo(108, y + 16); ctx.lineTo(88, y + 8); ctx.fill();
    }
    inset(ctx, 20, 10, 32, 14, C.steel3); inset(ctx, 76, 10, 32, 14, C.steel3);
    glowRect(ctx, g, 24, 15, 24, 4, C.cyan, 2); glowRect(ctx, g, 80, 15, 24, 4, C.cyan, 2);
    ctx.fillStyle = C.ink; ctx.fillRect(63, 4, 2, 120);
    hazard(ctx, 8, 108, 112, 14);
    grain(ctx, 41, 7);
  },
  exit(ctx: Ctx, g: Ctx) {
    WALLS.door(ctx, g);
    inset(ctx, 36, 88, 56, 18, C.navy);
    pixelText(ctx, g, "LIFT", 43, 92, C.cyan, 3, true);
  },
  pillar(ctx: Ctx, g: Ctx) {
    ctx.fillStyle = C.steel2; ctx.fillRect(0, 0, TS, TS);
    for (let x = 0; x < TS; x += 32) { bevel(ctx, x + 2, 0, 28, TS, C.steel, "rgba(255,255,255,0.35)", "rgba(10,15,25,0.5)", 3); }
    for (let y = 8; y < TS; y += 30) { bevel(ctx, 0, y, TS, 8, C.white3); for (let x = 8; x < TS; x += 16) rivet(ctx, x, y + 4, 1.6); }
    glowRect(ctx, g, 62, 0, 4, TS, C.blue, 3);
    grime(ctx, 51, 30, "rgba(10,15,25,0.12)"); grain(ctx, 52, 10);
  },
  pipes(ctx: Ctx, g: Ctx) {
    ctx.fillStyle = "#4a5566"; ctx.fillRect(0, 0, TS, TS);
    for (let y = 0; y < TS; y += 16) { ctx.fillStyle = "rgba(0,0,0,0.25)"; ctx.fillRect(0, y, TS, 1); }
    const pipe = (y: number, h: number, col: string, hi: string) => { ctx.fillStyle = "rgba(0,0,0,0.35)"; ctx.fillRect(0, y + 2, TS, h); ctx.fillStyle = col; ctx.fillRect(0, y, TS, h); ctx.fillStyle = hi; ctx.fillRect(0, y + 2, TS, Math.max(1, h / 4)); ctx.fillStyle = "rgba(0,0,0,0.25)"; ctx.fillRect(0, y + h - 2, TS, 2); };
    pipe(14, 12, C.white2, "#fff"); pipe(34, 7, C.blue2, "#6fb8ff"); pipe(48, 18, C.steel, "#b8c4d2"); pipe(74, 7, C.white3, "#fff"); pipe(88, 10, C.blue2, "#6fb8ff");
    for (const [x, y, h] of [[24, 12, 16], [90, 46, 22], [60, 86, 14]]) { bevel(ctx, x, y, 8, h, C.steel3, "rgba(255,255,255,0.3)"); }
    // valve wheel
    ctx.strokeStyle = C.amber; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(46, 57, 8, 0, 7); ctx.stroke(); ctx.lineWidth = 2; ctx.beginPath(); for (let k = 0; k < 5; k++) { const a = k * 1.2566 + 0.3; ctx.moveTo(46, 57); ctx.lineTo(46 + Math.cos(a) * 8, 57 + Math.sin(a) * 8); } ctx.stroke(); ctx.fillStyle = C.steel3; ctx.beginPath(); ctx.arc(46, 57, 2.5, 0, 7); ctx.fill();
    bevel(ctx, 0, 108, TS, 20, C.steel3, "rgba(255,255,255,0.25)");
    led(ctx, g, 110, 40, C.cyan); glowRect(ctx, g, 0, 36, TS, 1, "rgba(120,200,255,0.9)", 0);
    grime(ctx, 61, 40, "rgba(0,0,0,0.12)"); grain(ctx, 62, 12);
  },
  glyph(ctx: Ctx, g: Ctx) {
    panelBase(ctx, g, 14);
    inset(ctx, 18, 14, 92, 40, C.navy); glyphs(ctx, g, 24, 20, 8, 71, C.cyan, 7); glyphs(ctx, g, 24, 36, 6, 72, C.blue, 7);
    bevel(ctx, 50, 70, 28, 28, C.white3); ctx.fillStyle = C.blue2; ctx.beginPath(); ctx.arc(64, 84, 9, 0, 7); ctx.fill();
    glowRect(ctx, g, 62, 76, 4, 16, C.cyan, 2); glowRect(ctx, g, 56, 82, 16, 4, C.cyan, 2);
  },
  rack(ctx: Ctx, g: Ctx) {
    ctx.fillStyle = C.steel3; ctx.fillRect(0, 0, TS, TS); bevel(ctx, 0, 0, TS, TS, C.steel2);
    inset(ctx, 8, 8, TS - 16, 92, "#26303d");
    for (let i = 0; i < 3; i++) {
      const y = 18 + i * 28; bevel(ctx, 10, y + 16, TS - 20, 4, C.white3);
      for (let k = 0; k < 3; k++) { const x = 18 + k * 36; // a pistol on a peg
        ctx.fillStyle = C.white; ctx.fillRect(x, y + 4, 20, 6); ctx.fillStyle = C.blue2; ctx.fillRect(x + 12, y + 6, 8, 2); ctx.fillStyle = C.white3; ctx.fillRect(x + 2, y + 10, 6, 7); ctx.fillStyle = C.ink; ctx.fillRect(x + 20, y + 5, 3, 3);
        led(ctx, g, x + 16, y + 13, i === 2 && k === 1 ? C.amber : C.cyan, 1.2); }
    }
    bevel(ctx, 0, 104, TS, 24, C.shade, "rgba(255,255,255,0.35)"); pixelText(ctx, g, "ARMS", 44, 111, C.navy, 2);
    grain(ctx, 81, 8);
  },
  cargo(ctx: Ctx, g: Ctx) {
    panelBase(ctx, g, 15, { noAccent: true });
    hazard(ctx, 8, 62, TS - 16, 12); pixelText(ctx, g, "07", 30, 18, C.blue2, 6);
    ctx.fillStyle = C.white3; ctx.fillRect(80, 20, 28, 28); ctx.fillStyle = C.blue2; ctx.fillRect(84, 24, 20, 4); ctx.fillRect(84, 32, 12, 4); ctx.fillRect(84, 40, 16, 4);
    glowRect(ctx, g, 8, 104, TS - 16, 2, C.blue, 2);
  },
  core(ctx: Ctx, g: Ctx) {
    ctx.fillStyle = C.steel3; ctx.fillRect(0, 0, TS, TS);
    const cg = ctx.createLinearGradient(20, 0, 108, 0); cg.addColorStop(0, "#0a3a7a"); cg.addColorStop(0.3, "#4fd8ff"); cg.addColorStop(0.5, "#eaffff"); cg.addColorStop(0.7, "#4fd8ff"); cg.addColorStop(1, "#0a3a7a");
    ctx.fillStyle = cg; ctx.fillRect(20, 0, 88, TS);
    const gg = g.createLinearGradient(20, 0, 108, 0); gg.addColorStop(0, "rgba(255,255,255,0.4)"); gg.addColorStop(0.5, "#fff"); gg.addColorStop(1, "rgba(255,255,255,0.4)"); g.fillStyle = gg; g.fillRect(20, 0, 88, TS);
    const r = mulberry(91); ctx.strokeStyle = "rgba(255,255,255,0.7)"; ctx.lineWidth = 1;
    for (let i = 0; i < 6; i++) { ctx.beginPath(); let x = 40 + r() * 48; ctx.moveTo(x, 0); for (let y = 0; y < TS; y += 8) { x += (r() - 0.5) * 10; ctx.lineTo(x, y); } ctx.stroke(); }
    for (let y = 4; y < TS; y += 40) { bevel(ctx, 12, y, 104, 12, C.white3); for (let x = 20; x < 110; x += 14) rivet(ctx, x, y + 6, 1.6); }
    bevel(ctx, 0, 0, 20, TS, C.steel2, "rgba(255,255,255,0.3)"); bevel(ctx, 108, 0, 20, TS, C.steel2, "rgba(255,255,255,0.3)");
  },
  locker(ctx: Ctx, g: Ctx) { // spacesuit lockers in the airlock
    ctx.fillStyle = C.white3; ctx.fillRect(0, 0, TS, TS);
    for (const x0 of [4, 66]) {
      bevel(ctx, x0, 4, 58, 102, C.white);
      inset(ctx, x0 + 8, 12, 42, 62, "#0e1a2c");
      // a spacesuit hanging behind the glass
      ctx.fillStyle = "#d3dce6"; ctx.beginPath(); ctx.arc(x0 + 29, 30, 10, 0, 7); ctx.fill();
      ctx.fillStyle = "#1c6fd6"; ctx.beginPath(); ctx.ellipse(x0 + 29, 31, 7, 5, 0, 0, 7); ctx.fill();
      ctx.fillStyle = "rgba(255,255,255,0.7)"; ctx.fillRect(x0 + 25, 28, 3, 2);
      ctx.fillStyle = "#bcc7d3"; ctx.fillRect(x0 + 17, 41, 24, 30); ctx.fillStyle = "#98a5b5"; ctx.fillRect(x0 + 13, 43, 5, 22); ctx.fillRect(x0 + 40, 43, 5, 22);
      ctx.fillStyle = "#3aa8ff"; ctx.fillRect(x0 + 25, 48, 8, 4);
      ctx.fillStyle = "rgba(180,220,255,0.12)"; ctx.beginPath(); ctx.moveTo(x0 + 8, 12); ctx.lineTo(x0 + 24, 12); ctx.lineTo(x0 + 8, 40); ctx.fill();
      glowRect(ctx, g, x0 + 10, 80, 38, 3, C.blue, 2); led(ctx, g, x0 + 48, 92, C.cyan, 2);
      bevel(ctx, x0 + 10, 88, 16, 6, C.shade);
    }
    bevel(ctx, 0, 108, TS, 20, C.shade, "rgba(255,255,255,0.35)");
    grain(ctx, 401, 7);
  },
  // ── level 2: the reactor ──
  hazardPanel(ctx: Ctx, g: Ctx) {
    panelBase(ctx, g, 16, { noAccent: true }); hazard(ctx, 8, 84, TS - 16, 18, C.amber, "#2a2f38");
    inset(ctx, 40, 18, 48, 30, C.navy); radSymbol(ctx, g, 64, 33, 11);
  },
  tank(ctx: Ctx, g: Ctx) { // a coolant tank with a glowing sight-glass
    ctx.fillStyle = C.steel3; ctx.fillRect(0, 0, TS, TS);
    const body = ctx.createLinearGradient(14, 0, 114, 0); body.addColorStop(0, "#5f6e83"); body.addColorStop(0.35, "#dfe6ee"); body.addColorStop(1, "#4a5566");
    ctx.fillStyle = body; ctx.fillRect(14, 0, 100, TS);
    inset(ctx, 52, 14, 24, 80, "#06142a");
    const gl = ctx.createLinearGradient(0, 94, 0, 30); gl.addColorStop(0, "#9ff0ff"); gl.addColorStop(1, "#1b6fff");
    ctx.fillStyle = gl; ctx.fillRect(55, 40, 18, 52); g.fillStyle = "#fff"; g.fillRect(55, 40, 18, 52);
    for (let y = 44; y < 92; y += 9) { ctx.fillStyle = "rgba(255,255,255,0.7)"; ctx.fillRect(58, y, 4, 2); }
    for (const y of [6, 104]) { bevel(ctx, 10, y, 108, 12, C.steel2, "rgba(255,255,255,0.3)"); for (let x = 18; x < 116; x += 14) rivet(ctx, x, y + 6, 1.6); }
    bevel(ctx, 0, 116, TS, 12, C.shade);
    grain(ctx, 501, 9);
  },
  reactorWin(ctx: Ctx, g: Ctx) { // control-room glass looking into the reactor hall
    ctx.fillStyle = C.white2; ctx.fillRect(0, 0, TS, TS); bevel(ctx, 0, 0, TS, TS, C.white3);
    ctx.fillStyle = "#020814"; ctx.fillRect(12, 12, TS - 24, 88);
    ctx.save(); ctx.beginPath(); ctx.rect(12, 12, TS - 24, 88); ctx.clip();
    const pool = ctx.createLinearGradient(0, 60, 0, 100); pool.addColorStop(0, "#0a3c8a"); pool.addColorStop(1, "#4fd8ff"); ctx.fillStyle = pool; ctx.fillRect(12, 64, TS - 24, 36);
    const core = ctx.createLinearGradient(44, 0, 84, 0); core.addColorStop(0, "#0a3a7a"); core.addColorStop(0.5, "#eaffff"); core.addColorStop(1, "#0a3a7a");
    ctx.fillStyle = core; ctx.fillRect(48, 12, 32, 70); ctx.fillStyle = "#3f4b5c"; ctx.fillRect(44, 30, 40, 5); ctx.fillRect(44, 56, 40, 5);
    ctx.fillStyle = "#1b222d"; ctx.fillRect(12, 72, TS - 24, 3);
    g.fillStyle = "rgba(255,255,255,0.8)"; g.fillRect(48, 12, 32, 70); g.fillStyle = "rgba(255,255,255,0.6)"; g.fillRect(12, 64, TS - 24, 36);
    ctx.fillStyle = "rgba(180,220,255,0.12)"; ctx.beginPath(); ctx.moveTo(20, 12); ctx.lineTo(44, 12); ctx.lineTo(12, 60); ctx.lineTo(12, 36); ctx.fill();
    ctx.restore();
    bevel(ctx, 0, 104, TS, 24, C.white3); glowRect(ctx, g, 30, 114, 68, 2, C.cyan, 2);
    grain(ctx, 511, 6);
  },
  keyDoor(ctx: Ctx, g: Ctx) { // a locked door: needs the blue keycard
    WALLS.door(ctx, g);
    ctx.strokeStyle = C.cyan; ctx.lineWidth = 4; ctx.strokeRect(4, 4, 120, 104); g.strokeStyle = "#fff"; g.lineWidth = 4; g.strokeRect(4, 4, 120, 104);
    inset(ctx, 44, 84, 40, 18, C.navy); ctx.fillStyle = "#1c9bff"; ctx.fillRect(52, 88, 24, 10); g.fillStyle = "#fff"; g.fillRect(52, 88, 24, 10); ctx.fillStyle = C.navy; ctx.fillRect(56, 91, 8, 4);
  },
  upperHull(ctx: Ctx, g: Ctx) { // tall walls above 1.3: ribbed structure with small lights
    ctx.fillStyle = C.steel2; ctx.fillRect(0, 0, TS, TS);
    for (let x = 0; x < TS; x += 32) bevel(ctx, x + 2, 0, 28, TS, "#6c7b90", "rgba(255,255,255,0.25)", "rgba(0,0,0,0.45)", 3);
    for (let y = 20; y < TS; y += 64) { bevel(ctx, 0, y, TS, 10, C.steel3, "rgba(255,255,255,0.2)"); for (let x = 16; x < TS; x += 32) led(ctx, g, x, y + 5, C.blue, 1.8); }
    grain(ctx, 521, 10);
  },
  // ── level 3: crew deck and vents ──
  duct(ctx: Ctx) { // inside a vent: riveted sheet metal with a seam
    ctx.fillStyle = "#6f7c8e"; ctx.fillRect(0, 0, TS, TS);
    const sh = ctx.createLinearGradient(0, 0, 0, TS); sh.addColorStop(0, "rgba(255,255,255,0.18)"); sh.addColorStop(1, "rgba(0,0,0,0.25)"); ctx.fillStyle = sh; ctx.fillRect(0, 0, TS, TS);
    for (let x = 0; x < TS; x += 64) { ctx.fillStyle = "#4a5566"; ctx.fillRect(x, 0, 3, TS); ctx.fillStyle = "#a3aebc"; ctx.fillRect(x + 3, 0, 1, TS); for (let y = 8; y < TS; y += 16) rivet(ctx, x + 8, y, 1.5); }
    for (let i = 0; i < 6; i++) { ctx.fillStyle = "rgba(20,25,35,0.10)"; ctx.fillRect(10 + i * 19, 30 + (i % 3) * 20, 14, 2); }
    ctx.fillStyle = "rgba(0,0,0,0.35)"; ctx.fillRect(0, TS - 10, TS, 10);
    grime(ctx, 601, 30, "rgba(20,25,35,0.08)"); grain(ctx, 602, 14);
  },
  ductFrame(ctx: Ctx) { // the frame around a vent opening, seen from the room
    ctx.fillStyle = C.white2; ctx.fillRect(0, 0, TS, TS); bevel(ctx, 0, 0, TS, TS, C.white3);
    hazard(ctx, 0, TS - 22, TS, 22, C.amber, "#2a2f38"); for (let x = 12; x < TS; x += 26) rivet(ctx, x, 12, 2);
    grain(ctx, 611, 8);
  },
  grille(ctx: Ctx) { // a vent grille: the gaps are see-through
    ctx.clearRect(0, 0, TS, TS);
    ctx.fillStyle = "#8795a8"; ctx.fillRect(0, 0, TS, 10); ctx.fillRect(0, TS - 10, TS, 10); ctx.fillRect(0, 0, 10, TS); ctx.fillRect(TS - 10, 0, 10, TS);
    for (let y = 18; y < TS - 12; y += 12) { ctx.fillStyle = "#6b788a"; ctx.fillRect(10, y, TS - 20, 5); ctx.fillStyle = "#b4c0cd"; ctx.fillRect(10, y, TS - 20, 1); }
    for (const [x, y] of [[5, 5], [TS - 5, 5], [5, TS - 5], [TS - 5, TS - 5]]) rivet(ctx, x, y, 2);
  },
  dispenser(ctx: Ctx, g: Ctx) { // mess hall food dispenser
    panelBase(ctx, g, 17);
    inset(ctx, 24, 14, 80, 60, C.steel3); ctx.fillStyle = "#101c2c"; ctx.fillRect(28, 18, 72, 30); g.fillStyle = "rgba(255,255,255,0.3)"; g.fillRect(28, 18, 72, 30);
    glyphs(ctx, g, 34, 24, 5, 621, C.cyan, 7); glowRect(ctx, g, 34, 38, 50, 2, C.blue, 0);
    inset(ctx, 44, 54, 40, 18, "#1b222d"); ctx.fillStyle = "#7dff5a"; ctx.fillRect(52, 64, 24, 5); // green alien goo
    led(ctx, g, 96, 60, C.amber, 2);
  },
  bunk(ctx: Ctx, g: Ctx) { // alien bunks stacked two high
    ctx.fillStyle = C.steel3; ctx.fillRect(0, 0, TS, TS); bevel(ctx, 0, 0, TS, TS, C.steel2);
    for (const y of [10, 58]) {
      inset(ctx, 8, y, TS - 16, 42, "#16202e");
      ctx.fillStyle = "#3aa8ff"; ctx.fillRect(12, y + 26, TS - 24, 12); ctx.fillStyle = "#7fc4ff"; ctx.fillRect(12, y + 26, TS - 24, 3);
      ctx.fillStyle = "#e4eaf1"; ctx.beginPath(); ctx.ellipse(30, y + 24, 12, 6, 0, 0, 7); ctx.fill();
      led(ctx, g, TS - 18, y + 8, C.cyan, 1.6);
    }
    bevel(ctx, 0, 108, TS, 20, C.shade); grain(ctx, 631, 8);
  },
  table(ctx: Ctx) {
    ctx.fillStyle = C.steel2; ctx.fillRect(0, 0, TS, TS); bevel(ctx, 0, 0, TS, 26, C.white2, "rgba(255,255,255,0.8)", "rgba(40,50,65,0.5)", 3);
    ctx.fillStyle = "#26303d"; ctx.fillRect(0, 26, TS, TS - 26); for (const x of [14, 102]) bevel(ctx, x, 26, 12, TS - 26, C.steel, "rgba(255,255,255,0.3)");
    grain(ctx, 641, 8);
  },
  tableTop(ctx: Ctx) {
    ctx.fillStyle = C.white2; ctx.fillRect(0, 0, TS, TS); bevel(ctx, 0, 0, TS, TS, C.white, "rgba(255,255,255,0.8)", "rgba(40,50,65,0.5)", 4);
    for (const [x, y] of [[36, 40], [90, 86]]) { ctx.fillStyle = "#bcc7d3"; ctx.beginPath(); ctx.arc(x, y, 16, 0, 7); ctx.fill(); ctx.fillStyle = "#7dff5a"; ctx.beginPath(); ctx.arc(x, y, 9, 0, 7); ctx.fill(); }
    grain(ctx, 642, 6);
  },
  crate(ctx: Ctx, g: Ctx) {
    ctx.fillStyle = C.steel2; ctx.fillRect(0, 0, TS, TS);
    bevel(ctx, 0, 0, TS, TS, "#6c7d93", "rgba(255,255,255,0.5)", "rgba(10,15,25,0.5)", 3);
    bevel(ctx, 10, 10, TS - 20, TS - 20, "#8292a7");
    ctx.strokeStyle = C.white2; ctx.lineWidth = 7; ctx.beginPath(); ctx.moveTo(14, 14); ctx.lineTo(TS - 14, TS - 14); ctx.moveTo(TS - 14, 14); ctx.lineTo(14, TS - 14); ctx.stroke();
    bevel(ctx, 34, 44, 60, 40, C.white); pixelText(ctx, g, "B-7", 46, 54, C.blue2, 4);
    for (const [x, y] of [[6, 6], [TS - 6, 6], [6, TS - 6], [TS - 6, TS - 6]]) rivet(ctx, x, y, 2.4);
    grime(ctx, 101, 25, "rgba(10,15,25,0.1)"); grain(ctx, 102, 10);
  },
  crateTop(ctx: Ctx) {
    ctx.fillStyle = "#7f90a6"; ctx.fillRect(0, 0, TS, TS);
    bevel(ctx, 0, 0, TS, TS, "#8b9bb0", "rgba(255,255,255,0.5)", "rgba(10,15,25,0.5)", 4);
    bevel(ctx, 24, 24, 80, 80, C.white2); hazard(ctx, 30, 58, 68, 12);
    for (const [x, y] of [[10, 10], [TS - 10, 10], [10, TS - 10], [TS - 10, TS - 10]]) rivet(ctx, x, y, 3);
    grain(ctx, 103, 10);
  },
  console(ctx: Ctx, g: Ctx) {
    ctx.fillStyle = C.white3; ctx.fillRect(0, 0, TS, TS); bevel(ctx, 0, 0, TS, TS, C.white2, "rgba(255,255,255,0.8)", "rgba(40,50,65,0.5)", 3);
    inset(ctx, 12, 14, 104, 44, C.steel3); for (let i = 0; i < 6; i++) { bevel(ctx, 18 + i * 16, 22, 12, 12, C.steel2, "rgba(255,255,255,0.3)"); led(ctx, g, 24 + i * 16, 42, [C.blue, C.cyan, C.blue, C.amber, C.blue, C.cyan][i], 2); }
    hazard(ctx, 0, 100, TS, 14); bevel(ctx, 0, 114, TS, 14, C.shade);
    grain(ctx, 111, 8);
  },
  consoleTop(ctx: Ctx, g: Ctx) {
    ctx.fillStyle = C.white3; ctx.fillRect(0, 0, TS, TS); bevel(ctx, 0, 0, TS, TS, C.white2, "rgba(255,255,255,0.8)", "rgba(40,50,65,0.5)", 5);
    inset(ctx, 18, 18, 92, 58, C.steel3); ctx.fillStyle = C.navy; ctx.fillRect(22, 22, 84, 50); g.fillStyle = "rgba(255,255,255,0.3)"; g.fillRect(22, 22, 84, 50);
    glyphs(ctx, g, 28, 28, 6, 121, C.cyan, 7); for (let i = 0; i < 4; i++) glowRect(ctx, g, 28, 46 + i * 6, 20 + i * 12, 2, C.blue, 0);
    for (let i = 0; i < 7; i++) led(ctx, g, 26 + i * 12, 96, [C.blue, C.cyan, C.glowWhite, C.blue, C.amber, C.cyan, C.blue][i], 2.4);
    grain(ctx, 112, 7);
  },
};

// ── decals: small details stamped onto a wall face ──────────────────────────
const DECALS: Record<string, Draw> = {
  rad(ctx: Ctx) { // radiation warning
    bevel(ctx, 36, 10, 56, 40, "#ffb640", "rgba(255,255,255,0.5)", "rgba(80,40,0,0.5)"); radSymbol(ctx, null, 64, 30, 13, "#2a1a00");
  },
  keycard(ctx: Ctx, g: Ctx) { // "blue keycard needed" sign beside the locked door
    inset(ctx, 40, 14, 48, 30, C.navy); ctx.fillStyle = "#1c9bff"; ctx.fillRect(48, 20, 32, 18); g.fillStyle = "#fff"; g.fillRect(48, 20, 32, 18); ctx.fillStyle = C.navy; ctx.fillRect(52, 24, 10, 6);
  },
  camera(ctx: Ctx, g: Ctx) { // a dome camera bolted high on the wall, watching you
    bevel(ctx, 96, 8, 22, 8, C.steel3, "rgba(255,255,255,0.3)");
    ctx.fillStyle = C.ink; ctx.beginPath(); ctx.arc(107, 16, 9, 0, Math.PI); ctx.fill();
    ctx.fillStyle = "#26303d"; ctx.beginPath(); ctx.arc(107, 17, 6, 0, Math.PI); ctx.fill();
    led(ctx, g, 107, 20, C.red, 2); ctx.fillStyle = "rgba(255,255,255,0.35)"; ctx.fillRect(101, 17, 4, 1);
    ctx.strokeStyle = C.ink; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(118, 12); ctx.bezierCurveTo(124, 20, 122, 40, 126, 60); ctx.stroke();
  },
  arrowR(ctx: Ctx, g: Ctx) { // guide chevrons pointing the way on
    inset(ctx, 14, 62, 100, 22, C.navy);
    for (let i = 0; i < 3; i++) { const x = 30 + i * 24; ctx.fillStyle = C.cyan; for (const c of [ctx, g] as Ctx[]) { if (c === g) c.fillStyle = "#fff"; c.beginPath(); c.moveTo(x, 66); c.lineTo(x + 8, 66); c.lineTo(x + 18, 73); c.lineTo(x + 8, 80); c.lineTo(x, 80); c.lineTo(x + 10, 73); c.fill(); } }
  },
  sign(ctx: Ctx, g: Ctx) { // a warning plate in alien writing
    bevel(ctx, 34, 12, 60, 36, C.amber, "rgba(255,255,255,0.5)", "rgba(80,40,0,0.5)");
    ctx.fillStyle = "#2a1a00"; ctx.beginPath(); ctx.moveTo(48, 40); ctx.lineTo(56, 20); ctx.lineTo(64, 40); ctx.fill(); ctx.fillStyle = C.amber; ctx.fillRect(55, 27, 2, 7); ctx.fillRect(55, 36, 2, 2);
    glyphs(ctx, g, 68, 22, 2, 131, "#2a1a00", 8);
  },
  screen(ctx: Ctx, g: Ctx) { // a small wall monitor showing the level's map
    bevel(ctx, 40, 12, 48, 34, C.steel3, "rgba(255,255,255,0.3)"); ctx.fillStyle = C.navy; ctx.fillRect(44, 16, 40, 26); g.fillStyle = "rgba(255,255,255,0.3)"; g.fillRect(44, 16, 40, 26);
    glowRect(ctx, g, 48, 20, 10, 6, C.blue, 0); glowRect(ctx, g, 58, 22, 16, 2, C.blue, 0); glowRect(ctx, g, 72, 22, 2, 14, C.blue, 0); glowRect(ctx, g, 66, 32, 12, 8, C.cyan, 0); led(ctx, g, 53, 23, C.red, 1.4);
  },
  cables(ctx: Ctx) {
    ctx.lineWidth = 3;
    for (const [col, off] of [[C.ink, 0], [C.blue2, 5], [C.steel3, 10]] as [string, number][]) { ctx.strokeStyle = col; ctx.beginPath(); ctx.moveTo(0, 10 + off); ctx.bezierCurveTo(40, 30 + off, 88, 30 + off, TS, 10 + off); ctx.stroke(); }
    bevel(ctx, 58, 22, 12, 14, C.steel3, "rgba(255,255,255,0.3)");
  },
};

export type TexSet = { out: Record<string, Tex>; add: (name: string, draw: Draw, decal?: string, flip?: boolean) => void };
export function buildTextures(): TexSet {
  const out: Record<string, Tex> = {};
  const add = (name: string, draw: Draw, decal?: string, flip?: boolean) => {
    const [bc, b] = makeLayer(); const [, g] = makeLayer();
    g.fillStyle = "#000"; g.fillRect(0, 0, TS, TS);
    draw(b, g);
    if (decal) {
      if (flip) { b.save(); b.translate(TS, 0); b.scale(-1, 1); g.save(); g.translate(TS, 0); g.scale(-1, 1); }
      DECALS[decal](b, g);
      if (flip) { b.restore(); g.restore(); }
    }
    out[name] = { base: b.getImageData(0, 0, TS, TS).data, glow: g.getImageData(0, 0, TS, TS).data, canvas: bc };
  };
  for (const [k, f] of Object.entries(WALLS)) add(k, f);
  for (const [k, f] of Object.entries(FLOORS)) add(k, f);
  return { out, add };
}

// ── floors and ceilings ─────────────────────────────────────────────────────
const FLOORS: Record<string, Draw> = {
  fTile(ctx: Ctx) {
    ctx.fillStyle = "#aeb9c6"; ctx.fillRect(0, 0, TS, TS);
    for (const [x, y] of [[0, 0], [64, 0], [0, 64], [64, 64]]) bevel(ctx, x + 1, y + 1, 62, 62, "#c3ccd7", "rgba(255,255,255,0.5)", "rgba(40,50,65,0.35)");
    for (const [x, y] of [[6, 6], [58, 6], [6, 58], [58, 58]]) for (const [ox, oy] of [[0, 0], [64, 0], [0, 64], [64, 64]]) rivet(ctx, x + ox, y + oy, 1.4);
    grime(ctx, 141, 40, "rgba(40,50,65,0.07)"); grain(ctx, 142, 10);
  },
  fGrate(ctx: Ctx, g: Ctx) {
    ctx.fillStyle = "#3b4554"; ctx.fillRect(0, 0, TS, TS);
    ctx.fillStyle = "#11161e"; for (let y = 6; y < TS; y += 8) for (let x = 6; x < TS - 6; x += 24) ctx.fillRect(x, y, 18, 4);
    bevel(ctx, 0, 0, TS, 4, "#6c7a8d", "rgba(255,255,255,0.3)"); bevel(ctx, 0, 0, 4, TS, "#6c7a8d", "rgba(255,255,255,0.3)");
    glowRect(ctx, g, 62, 0, 4, 6, C.blue, 2); glowRect(ctx, g, 62, 64, 4, 6, C.blue, 2);
    grain(ctx, 151, 14);
  },
  fHazard(ctx: Ctx, g: Ctx) {
    FLOORS.fTile(ctx, g); hazard(ctx, 0, 0, TS, 20); hazard(ctx, 0, 108, TS, 20);
    grain(ctx, 161, 8);
  },
  fReactor(ctx: Ctx, g: Ctx) {
    ctx.fillStyle = "#1f2835"; ctx.fillRect(0, 0, TS, TS);
    for (const [x, y] of [[0, 0], [64, 0], [0, 64], [64, 64]]) bevel(ctx, x + 1, y + 1, 62, 62, "#2c3747", "rgba(255,255,255,0.15)", "rgba(0,0,0,0.5)");
    ctx.strokeStyle = C.cyan; g.strokeStyle = "#fff"; ctx.lineWidth = g.lineWidth = 2;
    for (const c of [ctx, g] as Ctx[]) { c.beginPath(); c.moveTo(0, 32); c.lineTo(40, 32); c.lineTo(52, 44); c.lineTo(52, 128); c.moveTo(128, 96); c.lineTo(88, 96); c.lineTo(76, 84); c.lineTo(76, 0); c.stroke(); }
    led(ctx, g, 52, 44, C.glowWhite, 2.5); led(ctx, g, 76, 84, C.glowWhite, 2.5);
    grain(ctx, 171, 10);
  },
  fBridge(ctx: Ctx, g: Ctx) {
    ctx.fillStyle = "#1a2c4a"; ctx.fillRect(0, 0, TS, TS);
    ctx.fillStyle = "rgba(120,170,230,0.12)"; for (let i = 0; i < TS; i += 16) { ctx.fillRect(i, 0, 1, TS); ctx.fillRect(0, i, TS, 1); }
    bevel(ctx, 0, 0, TS, TS, "rgba(0,0,0,0)", "rgba(160,200,255,0.25)", "rgba(0,0,0,0.4)", 2);
    glowRect(ctx, g, 0, 63, 6, 2, C.blue, 1); glowRect(ctx, g, 122, 63, 6, 2, C.blue, 1);
    grain(ctx, 181, 8);
  },
  fAirlock(ctx: Ctx, g: Ctx) {
    FLOORS.fTile(ctx, g);
    ctx.strokeStyle = C.blue2; ctx.lineWidth = 6; ctx.beginPath(); ctx.arc(64, 64, 44, 0, 7); ctx.stroke();
    ctx.strokeStyle = C.white; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(64, 64, 36, 0, 7); ctx.stroke();
    grain(ctx, 191, 6);
  },
  fRad(ctx: Ctx, g: Ctx) { // reactor coolant: glowing, and it hurts to stand in
    const bg = ctx.createLinearGradient(0, 0, TS, TS); bg.addColorStop(0, "#0a3c8a"); bg.addColorStop(1, "#1560c8"); ctx.fillStyle = bg; ctx.fillRect(0, 0, TS, TS);
    g.fillStyle = "rgba(255,255,255,0.55)"; g.fillRect(0, 0, TS, TS);
    const r = mulberry(701); ctx.strokeStyle = "rgba(160,240,255,0.8)"; ctx.lineWidth = 2; g.strokeStyle = "#fff"; g.lineWidth = 2;
    for (let i = 0; i < 9; i++) { const y = r() * TS, x = r() * TS, w = 20 + r() * 40; for (const c of [ctx, g] as Ctx[]) { c.beginPath(); c.moveTo(x, y); c.bezierCurveTo(x + w / 3, y - 6, x + (2 * w) / 3, y + 6, x + w, y); c.stroke(); } }
    for (let i = 0; i < 30; i++) { ctx.fillStyle = "rgba(230,255,255,0.8)"; ctx.fillRect(r() * TS, r() * TS, 2, 2); }
  },
  fCatwalk(ctx: Ctx, g: Ctx) { // grating walkway over the coolant
    ctx.fillStyle = "#0a3c8a"; ctx.fillRect(0, 0, TS, TS); g.fillStyle = "rgba(255,255,255,0.4)"; g.fillRect(0, 0, TS, TS);
    ctx.fillStyle = "#56647a"; for (let x = 0; x < TS; x += 10) ctx.fillRect(x, 0, 6, TS); g.fillStyle = "#000"; for (let x = 0; x < TS; x += 10) g.fillRect(x, 0, 6, TS);
    for (let y = 0; y < TS; y += 32) { ctx.fillStyle = "#7d8ca0"; ctx.fillRect(0, y, TS, 5); g.fillStyle = "#000"; g.fillRect(0, y, TS, 5); }
    hazard(ctx, 0, 0, 8, TS, C.amber, "#2a2f38"); hazard(ctx, TS - 8, 0, 8, TS, C.amber, "#2a2f38"); g.fillStyle = "#000"; g.fillRect(0, 0, 8, TS); g.fillRect(TS - 8, 0, 8, TS);
  },
  fDuct(ctx: Ctx) {
    ctx.fillStyle = "#5c6878"; ctx.fillRect(0, 0, TS, TS);
    for (let y = 0; y < TS; y += 32) { ctx.fillStyle = "#3f4a58"; ctx.fillRect(0, y, TS, 3); ctx.fillStyle = "#8a97a8"; ctx.fillRect(0, y + 3, TS, 1); }
    for (let x = 16; x < TS; x += 32) for (let y = 12; y < TS; y += 32) rivet(ctx, x, y, 1.4);
    grime(ctx, 711, 40, "rgba(10,15,20,0.12)"); grain(ctx, 712, 16);
  },
  cDuct(ctx: Ctx, g: Ctx) {
    ctx.fillStyle = "#4e5a6a"; ctx.fillRect(0, 0, TS, TS);
    for (let x = 0; x < TS; x += 64) { ctx.fillStyle = "#39434f"; ctx.fillRect(x, 0, 3, TS); }
    led(ctx, g, 64, 64, "#3aa8ff", 2.5); grain(ctx, 721, 14);
  },
  fMess(ctx: Ctx) {
    ctx.fillStyle = "#b8c3cf"; ctx.fillRect(0, 0, TS, TS);
    for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) bevel(ctx, i * 32 + 1, j * 32 + 1, 30, 30, (i + j) % 2 ? "#c9d2dc" : "#aebbc8", "rgba(255,255,255,0.4)", "rgba(40,50,65,0.3)");
    grain(ctx, 731, 8);
  },
  cPanel(ctx: Ctx) {
    ctx.fillStyle = "#8f9cad"; ctx.fillRect(0, 0, TS, TS);
    for (const [x, y] of [[0, 0], [64, 0], [0, 64], [64, 64]]) bevel(ctx, x + 1, y + 1, 62, 62, "#a7b3c1", "rgba(255,255,255,0.35)", "rgba(20,30,45,0.45)");
    for (let x = 14; x < TS; x += 32) { ctx.fillStyle = "#56647a"; ctx.fillRect(x, 28, 6, 6); ctx.fillRect(x, 92, 6, 6); }
    grain(ctx, 201, 8);
  },
  cLight(ctx: Ctx, g: Ctx) {
    FLOORS.cPanel(ctx, g);
    inset(ctx, 20, 20, 88, 88, C.steel3, 3); glowRect(ctx, g, 26, 26, 76, 76, "#eaf6ff", 6);
    ctx.fillStyle = "rgba(160,200,240,0.6)"; for (let x = 26; x < 102; x += 12) ctx.fillRect(x, 26, 1, 76);
  },
  cDark(ctx: Ctx, g: Ctx) {
    ctx.fillStyle = "#2c3441"; ctx.fillRect(0, 0, TS, TS);
    for (let x = 8; x < TS; x += 24) { ctx.fillStyle = "#4a5566"; ctx.fillRect(x, 0, 10, TS); ctx.fillStyle = "#65738a"; ctx.fillRect(x + 2, 0, 2, TS); }
    led(ctx, g, 64, 64, C.blue, 3); grain(ctx, 211, 12);
  },
  cStars(ctx: Ctx, g: Ctx) {
    ctx.fillStyle = "#02040b"; ctx.fillRect(0, 0, TS, TS);
    const r = mulberry(221);
    for (let i = 0; i < 40; i++) { const x = r() * TS, y = r() * TS; ctx.fillStyle = r() > 0.7 ? "#dbeeff" : "#7f98bd"; ctx.fillRect(x, y, 1, 1); g.fillStyle = "#fff"; g.fillRect(x, y, 1, 1); }
    // glass roof struts
    bevel(ctx, 0, 0, TS, 8, C.white3); bevel(ctx, 0, 0, 8, TS, C.white3);
  },
};
