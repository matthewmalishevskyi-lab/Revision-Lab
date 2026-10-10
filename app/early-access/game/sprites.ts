// Billboard sprites for the alien game (ported from the level prototype).

import { ALIEN_BACK_SVG, ALIEN_FRONT_SVG } from "./alienArt";
import { BOSS_BACK_SVG, BOSS_FRONT_SVG } from "./bossArt";

// Billboard sprites: things standing in the level that always face you,
// like Doom's barrels, lamps and monsters. Each has a world height (walls are
// 1.0 tall, your eyes are at 0.5) and, where it glows, a glow layer.

function spriteCanvas(w: number, h: number) { const c = document.createElement("canvas"); c.width = w; c.height = h; return c; }

type SpriteDef = { w: number; h: number; height: number; draw: (x: CanvasRenderingContext2D, g: CanvasRenderingContext2D) => void };
export type Sprite = { w: number; h: number; base: Uint8ClampedArray; glow: Uint8ClampedArray; height: number; bottom: number; canvas: HTMLCanvasElement };
/** A shield-override terminal: a pedestal with a slanted screen. `glow` is
 *  the screen's glow colour, or "" for a dead screen that does not glow. */
function terminalDef(screen: string, glow: string): SpriteDef {
  return { w: 64, h: 112, height: 0.62, draw(x, g) {
    x.fillStyle = "#2a3342"; x.fillRect(18, 44, 28, 64);                 // the pedestal
    x.fillStyle = "#3f4b5c"; x.fillRect(22, 48, 20, 56);
    x.fillStyle = "#1b222d"; x.fillRect(10, 104, 44, 8);                // its foot
    x.fillStyle = "#3f4b5c"; x.beginPath(); x.moveTo(4, 14); x.lineTo(60, 4); x.lineTo(60, 44); x.lineTo(4, 48); x.closePath(); x.fill();
    x.fillStyle = screen; x.beginPath(); x.moveTo(9, 18); x.lineTo(55, 10); x.lineTo(55, 39); x.lineTo(9, 43); x.closePath(); x.fill();
    if (glow) {
      g.fillStyle = glow; g.beginPath(); g.moveTo(9, 18); g.lineTo(55, 10); g.lineTo(55, 39); g.lineTo(9, 43); g.closePath(); g.fill();
      // three lines of "text" on the screen, and a status light on the pedestal
      x.fillStyle = "rgba(4,16,10,0.55)"; for (let i = 0; i < 3; i++) x.fillRect(15, 22 + i * 7, 26 - i * 6, 3);
      x.fillStyle = glow; x.fillRect(29, 60, 6, 6); g.fillStyle = glow; g.fillRect(29, 60, 6, 6);
    }
  } };
}

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
  // ⚠️ A SECOND SPRITE RATHER THAN A TINT. The sprite atlas is baked once at
  // load and read as raw pixels every frame (see pack() below) — there is no
  // per-draw colour to set. A red card drawn with the blue sprite would be a
  // level telling you to find something that does not look like the thing you
  // then find.
  keycardRed: { w: 40, h: 28, height: 0.12, draw(x, g) {
    x.fillStyle = "#ff5d6c"; x.beginPath(); x.roundRect(2, 2, 36, 24, 4); x.fill(); g.fillStyle = "#fff"; g.beginPath(); g.roundRect(2, 2, 36, 24, 4); g.fill();
    x.fillStyle = "#300a10"; x.fillRect(6, 8, 12, 8); x.fillStyle = "#ffeaec"; x.fillRect(22, 8, 12, 2); x.fillRect(22, 13, 8, 2);
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
  // ── the hangar deck: shield terminals, and the Director's shield ──────────
  //
  // ⚠️ THREE TERMINAL SPRITES, NOT ONE TINTED THREE WAYS. The atlas is baked
  // once and read as raw pixels every frame (see pack()), so there is no
  // per-draw colour — the same reason the red keycard has a sprite of its own.
  // And the state has to be readable from across the hangar: a terminal you
  // run twenty squares to under fire, only to find it locked, is the game
  // being unfair. Green works, red is locked, grey is recharging.
  terminal: terminalDef("#2fd48a", "#c9ffe6"),
  terminalLocked: terminalDef("#ff4d4d", "#ffd0d0"),
  terminalCold: terminalDef("#3d5270", ""),
  // a bubble of light round the boss while his shield is up, drawn see-through
  // (with alpha, in front of him) so he is still visible inside it
  shield: { w: 128, h: 176, height: 1.4, draw(x, g) {
    const rim = x.createRadialGradient(64, 88, 30, 64, 88, 64);
    rim.addColorStop(0, "rgba(90,200,255,0)"); rim.addColorStop(0.72, "rgba(90,200,255,0.18)");
    rim.addColorStop(0.93, "rgba(170,236,255,0.8)"); rim.addColorStop(1, "rgba(170,236,255,0)");
    for (const ctx of [x, g]) { ctx.fillStyle = rim; ctx.beginPath(); ctx.ellipse(64, 88, 62, 86, 0, 0, 7); ctx.fill(); }
    // a few hexagons, so it reads as a SHIELD rather than as fog
    x.strokeStyle = "rgba(190,240,255,0.55)"; x.lineWidth = 1.5;
    for (let row = 0; row < 6; row++) for (let col = 0; col < 4; col++) {
      const cx = 22 + col * 28 + (row % 2) * 14, cy = 24 + row * 26;
      if (((cx - 64) / 58) ** 2 + ((cy - 88) / 80) ** 2 > 1) continue;
      x.beginPath();
      for (let i = 0; i < 6; i++) { const a = (i * Math.PI) / 3; x.lineTo(cx + Math.cos(a) * 10, cy + Math.sin(a) * 10); }
      x.closePath(); x.stroke();
    }
  } },
  health: { w: 48, h: 40, height: 0.16, draw(x, g) { // a white med-kit with a BLUE plus: a red cross is a protected emblem
    x.fillStyle = "#f4f7fb"; x.fillRect(2, 8, 44, 30); x.fillStyle = "#bcc7d3"; x.fillRect(2, 32, 44, 6); x.fillStyle = "#3f4b5c"; x.fillRect(16, 2, 16, 7);
    x.fillStyle = "#1c9bff"; x.fillRect(20, 12, 8, 18); x.fillRect(15, 17, 18, 8); g.fillStyle = "#fff"; g.fillRect(20, 12, 8, 18); g.fillRect(15, 17, 18, 8);
  } },
};

/** How tall the Director stands, in the same units as a wall (1.3) and your
 *  eye (0.5). Exported because game.ts aims at the rectangle he is DRAWN in,
 *  and a second copy of this number is a second thing to drift. */
export const BOSS_HEIGHT = 1.15;

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
  // the Director, from the boss design Matthew approved for /early-access.
  // Drawn at 1.2x its own 220x330 so his tie and claws survive being scaled
  // up to fill a third of the screen. His eyes glow: the two red points are
  // copied into the glow layer, so fog never dims them.
  const bossImg = async (svg: string) => { const im = new Image(); im.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg); await im.decode(); return im; };
  const bf = await bossImg(BOSS_FRONT_SVG), bb = await bossImg(BOSS_BACK_SVG);
  const c4 = spriteCanvas(264, 396); c4.getContext("2d")!.drawImage(bf, 0, 0, 264, 396);
  const g4 = spriteCanvas(264, 396), gx = g4.getContext("2d")!;
  gx.fillStyle = "#ff5a3c"; for (const ex of [104, 160]) { gx.beginPath(); gx.arc(ex, 76, 6, 0, 7); gx.fill(); }
  out.boss = pack(c4, g4, BOSS_HEIGHT, true);
  const c5 = spriteCanvas(264, 396); c5.getContext("2d")!.drawImage(bb, 0, 0, 264, 396);
  out.bossBack = pack(c5, spriteCanvas(264, 396), BOSS_HEIGHT, true);
  // and down: on his back, the suit still on
  const c6 = spriteCanvas(420, 200), d6 = c6.getContext("2d")!;
  d6.fillStyle = "rgba(90,210,60,0.5)"; d6.beginPath(); d6.ellipse(210, 176, 196, 22, 0, 0, 7); d6.fill();
  d6.save(); d6.translate(210, 150); d6.rotate(-Math.PI / 2); d6.drawImage(bf, -40, -170, 110, 165); d6.restore();
  out.bossDead = pack(c6, spriteCanvas(420, 200), 0.4, true);
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
