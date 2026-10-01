// Billboard sprites for the alien game (ported from the level prototype).

import { ALIEN_BACK_SVG, ALIEN_FRONT_SVG } from "./alienArt";

// Billboard sprites: things standing in the level that always face you,
// like Doom's barrels, lamps and monsters. Each has a world height (walls are
// 1.0 tall, your eyes are at 0.5) and, where it glows, a glow layer.

function spriteCanvas(w: number, h: number) { const c = document.createElement("canvas"); c.width = w; c.height = h; return c; }

type SpriteDef = { w: number; h: number; height: number; draw: (x: CanvasRenderingContext2D, g: CanvasRenderingContext2D) => void };
export type Sprite = { w: number; h: number; base: Uint8ClampedArray; glow: Uint8ClampedArray; height: number; bottom: number; canvas: HTMLCanvasElement };
const SPRITE_DEFS: Record<string, SpriteDef> = {
  // coolant canister: the ship's version of Doom's exploding barrel
  canister: { w: 64, h: 96, height: 0.4, draw(x, g) {
    const body = x.createLinearGradient(8, 0, 56, 0); body.addColorStop(0, "#9fb0c4"); body.addColorStop(0.35, "#f2f6fa"); body.addColorStop(1, "#6d7d91");
    x.fillStyle = body; x.fillRect(10, 10, 44, 80);
    x.fillStyle = "#1c6fd6"; x.fillRect(10, 36, 44, 22);
    const glass = x.createLinearGradient(10, 0, 54, 0); glass.addColorStop(0, "#1b8fff"); glass.addColorStop(0.4, "#9ff0ff"); glass.addColorStop(1, "#0d4fa8");
    x.fillStyle = glass; x.fillRect(18, 40, 28, 14); g.fillStyle = "#fff"; g.fillRect(18, 40, 28, 14);
    x.fillStyle = "#3f4b5c"; x.fillRect(6, 4, 52, 8); x.fillRect(6, 86, 52, 8); x.fillRect(22, 0, 20, 6);
    x.fillStyle = "#ffb640"; x.fillRect(14, 66, 12, 6); x.fillStyle = "#26303d"; x.fillRect(30, 66, 20, 2); x.fillRect(30, 70, 14, 2);
  } },
  // tall floor lamp: a white column with a blue light at the top
  lamp: { w: 32, h: 128, height: 0.92, draw(x, g) {
    x.fillStyle = "#3f4b5c"; x.fillRect(6, 118, 20, 10);
    const col = x.createLinearGradient(10, 0, 22, 0); col.addColorStop(0, "#b8c4d2"); col.addColorStop(0.5, "#f4f7fb"); col.addColorStop(1, "#8190a4");
    x.fillStyle = col; x.fillRect(12, 20, 8, 100);
    x.fillStyle = "#7fe6ff"; x.shadowColor = "#7fe6ff"; x.shadowBlur = 10; x.fillRect(8, 4, 16, 18); x.shadowBlur = 0;
    x.fillStyle = "#eaffff"; x.fillRect(12, 8, 8, 10); g.fillStyle = "#fff"; g.fillRect(6, 2, 20, 22);
    x.fillStyle = "#3f4b5c"; x.fillRect(6, 0, 20, 4); x.fillRect(6, 22, 20, 3);
  } },
  // holo-table on the bridge: a projector showing a planet
  holo: { w: 96, h: 96, height: 0.5, draw(x, g) {
    x.fillStyle = "#5f6e83"; x.fillRect(20, 70, 56, 26); x.fillStyle = "#d3dce6"; x.fillRect(8, 62, 80, 10); x.fillStyle = "#1c6fd6"; x.fillRect(12, 64, 72, 3);
    g.fillStyle = "#fff"; g.fillRect(12, 64, 72, 3);
    x.globalAlpha = 0.25; x.fillStyle = "#7fe6ff"; x.beginPath(); x.moveTo(14, 62); x.lineTo(82, 62); x.lineTo(66, 8); x.lineTo(30, 8); x.fill(); x.globalAlpha = 1;
    const pl = x.createRadialGradient(42, 26, 2, 48, 32, 20); pl.addColorStop(0, "#dffbff"); pl.addColorStop(0.5, "#3aa8ff"); pl.addColorStop(1, "rgba(28,111,214,0.3)");
    x.fillStyle = pl; x.beginPath(); x.arc(48, 32, 18, 0, 7); x.fill(); g.globalAlpha = 0.9; g.fillStyle = "#fff"; g.beginPath(); g.arc(48, 32, 18, 0, 7); g.fill(); g.globalAlpha = 1;
    x.strokeStyle = "rgba(200,245,255,0.8)"; x.lineWidth = 1; x.beginPath(); x.ellipse(48, 32, 28, 7, -0.2, 0, 7); x.stroke();
  } },
  pistol: { w: 64, h: 32, height: 0.2, draw(x, g) {
    x.fillStyle = "#e4eaf1"; x.fillRect(8, 6, 40, 10); x.fillStyle = "#1c6fd6"; x.fillRect(30, 9, 18, 4); g.fillStyle = "#fff"; g.fillRect(30, 9, 18, 4);
    x.fillStyle = "#bcc7d3"; x.fillRect(12, 16, 12, 14); x.fillStyle = "#1b222d"; x.fillRect(48, 8, 6, 6); x.fillRect(24, 16, 8, 4);
    x.fillStyle = "rgba(127,230,255,0.35)"; x.beginPath(); x.ellipse(32, 30, 30, 3, 0, 0, 7); x.fill();
  } },
  // The assault rifle on the floor: longer than the blaster, with a magazine
  // under it, and AMBER where the blaster is cyan — so the two are told apart
  // across a room by colour as well as by silhouette, which is the same rule
  // the cell pickup follows against the three-cell one.
  rifle: { w: 80, h: 36, height: 0.22, draw(x, g) {
    x.fillStyle = "#1b222d"; x.fillRect(2, 9, 10, 9);                         // stock
    x.fillStyle = "#d7dde6"; x.fillRect(10, 8, 48, 10);                       // receiver
    x.fillStyle = "#9aa6b4"; x.fillRect(56, 11, 18, 5);                       // barrel
    x.fillStyle = "#2a3342"; x.fillRect(62, 8, 4, 4);                         // front sight
    x.fillStyle = "#1b222d"; x.fillRect(18, 18, 11, 14);                      // magazine
    x.fillStyle = "#1b222d"; x.fillRect(34, 18, 7, 9);                        // grip
    x.fillStyle = "#ffb640"; x.fillRect(24, 10, 26, 4);                       // charge strip
    g.fillStyle = "#fff"; g.fillRect(24, 10, 26, 4);
    x.fillStyle = "rgba(255,182,64,0.3)"; x.beginPath(); x.ellipse(40, 34, 34, 3, 0, 0, 7); x.fill();
  } },
  ammo: { w: 48, h: 40, height: 0.2, draw(x, g) { // energy cells: reload for the pistol
    for (const ox of [4, 18, 32]) { x.fillStyle = "#3f4b5c"; x.fillRect(ox, 6, 12, 32); x.fillStyle = "#3aa8ff"; x.fillRect(ox + 2, 10, 8, 24); g.fillStyle = "#fff"; g.fillRect(ox + 2, 10, 8, 24); x.fillStyle = "#e4eaf1"; x.fillRect(ox + 3, 2, 6, 5); }
  } },
  // an alien's "pew": a glowing green bolt, flying at chest height
  bolt: { w: 48, h: 24, height: 0.07, draw(x, g) {
    const gr = x.createRadialGradient(24, 12, 1, 24, 12, 22); gr.addColorStop(0, "#f4ffe8"); gr.addColorStop(0.35, "#7dff5a"); gr.addColorStop(1, "rgba(60,220,40,0)");
    x.fillStyle = gr; x.beginPath(); x.ellipse(24, 12, 23, 11, 0, 0, 7); x.fill();
    g.fillStyle = "#fff"; g.beginPath(); g.ellipse(24, 12, 18, 8, 0, 0, 7); g.fill();
  } },
  // a radiation suit on a stand: lets you wade through the coolant (like Doom's rad suit)
  radsuit: { w: 64, h: 112, height: 0.6, draw(x, g) {
    x.fillStyle = "#3f4b5c"; x.fillRect(12, 104, 40, 8); x.fillRect(30, 60, 4, 46);
    x.fillStyle = "#f2d64a"; x.beginPath(); x.roundRect(14, 34, 36, 48, 8); x.fill();
    x.fillStyle = "#e2c230"; x.fillRect(8, 38, 8, 34); x.fillRect(48, 38, 8, 34);
    x.fillStyle = "#1b222d"; x.fillRect(14, 60, 36, 4);
    x.fillStyle = "#f2d64a"; x.beginPath(); x.arc(32, 20, 16, 0, 7); x.fill();
    const v = x.createLinearGradient(20, 12, 44, 28); v.addColorStop(0, "#9ff0ff"); v.addColorStop(1, "#1c6fd6");
    x.fillStyle = v; x.beginPath(); x.ellipse(32, 21, 11, 8, 0, 0, 7); x.fill(); g.fillStyle = "#fff"; g.beginPath(); g.ellipse(32, 21, 11, 8, 0, 0, 7); g.fill();
    x.fillStyle = "#2a1a00"; for (let k = 0; k < 3; k++) { const a = -Math.PI / 2 + k * 2.094; x.beginPath(); x.moveTo(32, 48); x.arc(32, 48, 7, a - 0.5, a + 0.5); x.fill(); }
  } },
  vest: { w: 56, h: 56, height: 0.26, draw(x, g) { // armour vest
    x.fillStyle = "#3f4b5c"; x.beginPath(); x.moveTo(10, 8); x.lineTo(22, 4); x.lineTo(28, 12); x.lineTo(34, 4); x.lineTo(46, 8); x.lineTo(50, 52); x.lineTo(6, 52); x.closePath(); x.fill();
    x.fillStyle = "#e4eaf1"; x.fillRect(12, 18, 32, 28); x.fillStyle = "#1c6fd6"; x.fillRect(12, 28, 32, 6); g.fillStyle = "#fff"; g.fillRect(12, 28, 32, 6);
    x.fillStyle = "#bcc7d3"; x.fillRect(18, 38, 8, 6); x.fillRect(30, 38, 8, 6);
  } },
  keycard: { w: 40, h: 28, height: 0.12, draw(x, g) {
    x.fillStyle = "#1c9bff"; x.beginPath(); x.roundRect(2, 2, 36, 24, 4); x.fill(); g.fillStyle = "#fff"; g.beginPath(); g.roundRect(2, 2, 36, 24, 4); g.fill();
    x.fillStyle = "#0a1830"; x.fillRect(6, 8, 12, 8); x.fillStyle = "#eaf6ff"; x.fillRect(22, 8, 12, 2); x.fillRect(22, 13, 8, 2);
  } },
  // ── things that only exist for a fraction of a second ─────────────────────
  //
  // These are drawn with `alpha` and `scale` (see render.ts) rather than as
  // solid objects, so one small drawing becomes a fireball by growing and
  // fading. Everything here is pure glow: it is put in the GLOW layer as well
  // as the base, so distance fog never dulls it — an explosion twelve squares
  // away should still look like an explosion.
  blast: { w: 96, h: 96, height: 0.9, draw(x, g) {
    const core = x.createRadialGradient(48, 48, 2, 48, 48, 46);
    core.addColorStop(0, "#ffffff"); core.addColorStop(0.18, "#fff6c8");
    core.addColorStop(0.42, "#ffb340"); core.addColorStop(0.72, "rgba(255,90,30,0.55)");
    core.addColorStop(1, "rgba(180,40,10,0)");
    x.fillStyle = core; x.beginPath(); x.arc(48, 48, 46, 0, 7); x.fill();
    g.fillStyle = core; g.beginPath(); g.arc(48, 48, 46, 0, 7); g.fill();
    // a few lumps, so it is not a perfect circle
    for (const [cx, cy, r] of [[22, 34, 14], [70, 30, 12], [34, 70, 13], [66, 66, 11]]) {
      const lg = x.createRadialGradient(cx, cy, 1, cx, cy, r);
      lg.addColorStop(0, "rgba(255,240,190,0.9)"); lg.addColorStop(1, "rgba(255,120,40,0)");
      x.fillStyle = lg; x.beginPath(); x.arc(cx, cy, r, 0, 7); x.fill();
      g.fillStyle = lg; g.beginPath(); g.arc(cx, cy, r, 0, 7); g.fill();
    }
  } },
  // grey smoke, left behind once the fire has gone
  smoke: { w: 64, h: 64, height: 0.7, draw(x) {
    const sg = x.createRadialGradient(32, 32, 2, 32, 32, 30);
    sg.addColorStop(0, "rgba(150,150,158,0.75)"); sg.addColorStop(0.6, "rgba(90,92,102,0.4)"); sg.addColorStop(1, "rgba(60,62,72,0)");
    x.fillStyle = sg; x.beginPath(); x.arc(32, 32, 30, 0, 7); x.fill();
  } },
  // where a shot lands: a small cyan star of sparks
  spark: { w: 48, h: 48, height: 0.25, draw(x, g) {
    const c = x.createRadialGradient(24, 24, 0.5, 24, 24, 16);
    c.addColorStop(0, "#ffffff"); c.addColorStop(0.3, "#d6f7ff"); c.addColorStop(0.65, "rgba(127,230,255,0.65)"); c.addColorStop(1, "rgba(58,168,255,0)");
    x.fillStyle = c; x.beginPath(); x.arc(24, 24, 16, 0, 7); x.fill();
    g.fillStyle = c; g.beginPath(); g.arc(24, 24, 16, 0, 7); g.fill();
    x.strokeStyle = "rgba(240,252,255,0.9)"; x.lineWidth = 2; x.lineCap = "round";
    g.strokeStyle = x.strokeStyle; g.lineWidth = 2; g.lineCap = "round";
    for (let i = 0; i < 6; i++) {
      const a = (i * Math.PI) / 3 + 0.3, r = i % 2 ? 22 : 15;
      for (const ctx of [x, g]) { ctx.beginPath(); ctx.moveTo(24 + Math.cos(a) * 5, 24 + Math.sin(a) * 5); ctx.lineTo(24 + Math.cos(a) * r, 24 + Math.sin(a) * r); ctx.stroke(); }
    }
  } },
  // the player's own shot, in flight: a bright streak, longer than it is tall
  tracer: { w: 96, h: 24, height: 0.09, draw(x, g) {
    const t = x.createLinearGradient(0, 0, 96, 0);
    t.addColorStop(0, "rgba(127,230,255,0)"); t.addColorStop(0.55, "rgba(180,244,255,0.85)");
    t.addColorStop(0.85, "#eaffff"); t.addColorStop(1, "rgba(255,255,255,0)");
    for (const ctx of [x, g]) { ctx.fillStyle = t; ctx.beginPath(); ctx.ellipse(48, 12, 47, 6, 0, 0, 7); ctx.fill(); }
  } },
  // grenades on the floor, and the one you have thrown
  grenade: { w: 48, h: 48, height: 0.22, draw(x, g) {
    for (const [ox, oy] of [[6, 14], [26, 10], [16, 24]]) {
      const b = x.createLinearGradient(ox, oy, ox + 18, oy + 20);
      b.addColorStop(0, "#5d6f52"); b.addColorStop(0.45, "#8ba179"); b.addColorStop(1, "#3f4c38");
      x.fillStyle = b; x.beginPath(); x.roundRect(ox, oy, 17, 21, 6); x.fill();
      x.fillStyle = "#2a3342"; x.fillRect(ox + 5, oy - 4, 7, 5);
      x.fillStyle = "#ffb640"; x.fillRect(ox + 2, oy + 7, 13, 3);
      g.fillStyle = "#fff"; g.fillRect(ox + 2, oy + 7, 13, 3);
    }
  } },
  // ONE energy cell, dropped by an alien you defeat. Deliberately smaller and
  // plainer than the three-cell `ammo` pickup, because it is worth a third as
  // much and should not be mistaken for it across a room.
  cell: { w: 28, h: 40, height: 0.14, draw(x, g) {
    x.fillStyle = "#3f4b5c"; x.fillRect(6, 6, 16, 32);
    x.fillStyle = "#3aa8ff"; x.fillRect(9, 11, 10, 22);
    g.fillStyle = "#fff"; g.fillRect(9, 11, 10, 22);
    x.fillStyle = "#e4eaf1"; x.fillRect(10, 1, 8, 6);
    x.fillStyle = "rgba(58,168,255,0.3)"; x.beginPath(); x.ellipse(14, 38, 12, 3, 0, 0, 7); x.fill();
  } },
  health: { w: 48, h: 40, height: 0.16, draw(x, g) { // a white med-kit with a BLUE plus: a red cross is a protected emblem
    x.fillStyle = "#f4f7fb"; x.fillRect(2, 8, 44, 30); x.fillStyle = "#bcc7d3"; x.fillRect(2, 32, 44, 6); x.fillStyle = "#3f4b5c"; x.fillRect(16, 2, 16, 7);
    x.fillStyle = "#1c9bff"; x.fillRect(20, 12, 8, 18); x.fillRect(15, 17, 18, 8); g.fillStyle = "#fff"; g.fillRect(20, 12, 8, 18); g.fillRect(15, 17, 18, 8);
  } },
};

// The regular alien comes from the character design we agreed, drawn from its SVG.
export async function buildSprites(): Promise<Record<string, Sprite>> {
  const smallAlienSvg = ALIEN_FRONT_SVG, backSvg = ALIEN_BACK_SVG;
  const out: Record<string, Sprite> = {};
  for (const [k, d] of Object.entries(SPRITE_DEFS)) {
    const c = spriteCanvas(d.w, d.h), gc = spriteCanvas(d.w, d.h);
    const x = c.getContext("2d")!, g = gc.getContext("2d")!;
    d.draw(x, g);
    out[k] = pack(c, gc, d.height);
  }
  const img = new Image(); img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(smallAlienSvg);
  await img.decode();
  // crop to the drawing (its viewBox has room around it) and scale it up
  const c = spriteCanvas(240, 300), x = c.getContext("2d")!; x.drawImage(img, 0, 0, 240, 300);
  const gc = spriteCanvas(240, 300);
  out.alien = pack(c, gc, 0.58, true);
  const img2 = new Image(); img2.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(backSvg); await img2.decode();
  const c2 = spriteCanvas(240, 300); c2.getContext("2d")!.drawImage(img2, 0, 0, 240, 300);
  out.alienBack = pack(c2, spriteCanvas(240, 300), 0.58, true);
  // a defeated alien, lying flat in a little green puddle
  const c3 = spriteCanvas(300, 150), d = c3.getContext("2d")!;
  d.fillStyle = "rgba(90,210,60,0.55)"; d.beginPath(); d.ellipse(150, 128, 130, 18, 0, 0, 7); d.fill();
  d.save(); d.translate(150, 112); d.rotate(-Math.PI / 2); d.drawImage(img, -38, -112, 76, 95); d.restore();
  out.alienDead = pack(c3, spriteCanvas(300, 150), 0.28, true);
  return out;
}

function pack(c: HTMLCanvasElement, gc: HTMLCanvasElement, height: number, trim?: boolean): Sprite {
  const w = c.width, h = c.height;
  const base = c.getContext("2d")!.getImageData(0, 0, w, h).data;
  const glow = gc.getContext("2d")!.getImageData(0, 0, w, h).data;
  // Find the lowest opaque row so the sprite stands ON the floor, not above it.
  let bottom = h - 1;
  if (trim) { outer: for (let y = h - 1; y >= 0; y--) for (let xx = 0; xx < w; xx++) if (base[(y * w + xx) * 4 + 3] > 40) { bottom = y; break outer; } }
  return { w, h, base, glow, height, bottom, canvas: c };
}
