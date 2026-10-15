// The ending: what happens after the Director goes down.
//
// Matthew, 2026-10-14: "a cutscene where after the boss... we go into a
// spaceship. Then fill it with TNT. And then we crash into this space station
// of aliens and we blow it up together with ourselves." He chose an animated
// film rather than comic panels, played ONLY after beating the boss, and the
// mascot saying goodbye over comms rather than flying with you.
//
// About a minute, in seven shots:
//
//   0   hangar     the Director is down; their station is out of the window
//   10  cargo      you carry six crates of TNT into the shuttle
//   21.5 launch    hangar doors open, engines light, out you go
//   27  outside    the shuttle leaves the ship, heading for the station
//   30  cockpit    the station grows in the window; they shoot; you don't eject
//   45  impact     white
//   46  explosion  the station comes apart
//   54  the end
//
// ⚠️ PURE: drawEnding(t) draws the frame for time t and remembers nothing, so
// any moment can be drawn on its own — skipping, a test jumping to 41.5s, a
// slow computer dropping frames all show the same picture. Every "random"
// thing (stars, blasts, debris) comes from a seeded generator for the same
// reason: Math.random would make the film different each time it is drawn,
// and one frame different from the next.
//
// Drawn on the visor's 1280x720 overlay, over the 3D view (which is not drawn
// at all while this plays — see draw() in game.ts). The mascot's portrait is
// HTML laid over the top-left corner (GameClient), so the comms screen frame
// is drawn there in every shot, and the mascot talks from it as in the game.

import { drawCommsScreen, drawCommsText, HUD_H, HUD_W } from "./hud";

type Ctx = CanvasRenderingContext2D;
const W = HUD_W, H = HUD_H;
const FONT = "system-ui, sans-serif", MONO = `ui-monospace, "DejaVu Sans Mono", monospace`;

export const ENDING_SECONDS = 62;
/** A press this early does not skip: the Enter (or tap) that closed the
 *  results screen must not also throw the film away, and a held Enter repeats. */
export const ENDING_SKIP_LOCK = 1.2;

export type EndingScene = "hangar" | "cargo" | "launch" | "outside" | "cockpit" | "impact" | "explosion" | "end";
export const ENDING_SCENES: readonly { scene: EndingScene; from: number }[] = [
  { scene: "hangar", from: 0 },
  { scene: "cargo", from: 10 },
  { scene: "launch", from: 21.5 },
  { scene: "outside", from: 27 },
  { scene: "cockpit", from: 30 },
  { scene: "impact", from: 45 },
  { scene: "explosion", from: 46 },
  { scene: "end", from: 54 },
];

export function sceneAt(t: number): EndingScene {
  let s: EndingScene = "hangar";
  for (const e of ENDING_SCENES) if (t >= e.from) s = e.scene;
  return s;
}

/** What the mascot says, and when. Each line is on screen long enough to read
 *  at an easy 15 letters a second after it has typed out — a check holds it. */
export type EndingLine = { at: number; until: number; text: string };
export const ENDING_LINES: readonly EndingLine[] = [
  { at: 0.6, until: 3.8, text: "He's down! You actually did it!" },
  { at: 3.9, until: 9.9, text: "Look out of the window. That's their station — and it's launching more ships." },
  { at: 10.2, until: 15.8, text: "The ordnance store is full of TNT. Load every crate into that shuttle." },
  { at: 16.1, until: 20.8, text: "Wait... you're not planning to fly it back, are you?" },
  { at: 21.8, until: 25.8, text: "Hangar doors are open. Engines are hot. Go." },
  { at: 30.4, until: 34.8, text: "They've seen you — they're firing! Keep it steady!" },
  { at: 35.0, until: 39.9, text: "There's still time to eject. ...You're not going to, are you?" },
  // ⚠️ the last thing said before the screen goes white
  { at: 40.0, until: 45.0, text: "Then everyone will know what you did. Goodbye, friend." },
  { at: 49.5, until: 53.8, text: "...The station's gone. All of it. Thank you." },
];

export function lineAt(t: number): EndingLine | null {
  return ENDING_LINES.find((l) => t >= l.at && t < l.until) ?? null;
}

// ── the cargo run ────────────────────────────────────────────────────────────
export const TNT_CRATES = 6;
const CARGO_START = 10.4, CARGO_CYCLE = 1.8;
const STORE_X = 230, HATCH_X = 470; // where the astronaut stands to pick up and to load
const CARRY = 0.75, LIFT = 0.2, BACK = 0.7; // seconds of each part of a trip

/** The moment crate i goes into the shuttle (the "thunk"). */
export function crateLoadedAt(i: number): number { return CARGO_START + i * CARGO_CYCLE + CARRY + LIFT; }
/** How many crates are in the shuttle at time t. */
export function cratesLoaded(t: number): number {
  let n = 0;
  for (let i = 0; i < TNT_CRATES; i++) if (t >= crateLoadedAt(i)) n++;
  return n;
}

// ── the run in ───────────────────────────────────────────────────────────────
const COCKPIT_FROM = 30, COCKPIT_TO = 45;
/** Metres to the station, read off the cockpit display. */
export function distanceAt(t: number): number {
  const p = clamp((t - COCKPIT_FROM) / (COCKPIT_TO - COCKPIT_FROM), 0, 1);
  return Math.round(5000 * Math.pow(1 - p, 1.4));
}
const BOLTS = [31.2, 32.6, 33.9, 35.7, 37.1, 38.4, 41.5, 42.6, 43.4];

/** Sounds, played by the game as the film passes each one. */
export type EndingSound = "hum" | "thunk" | "door" | "ignite" | "launch" | "zap" | "alarm" | "impact" | "boom" | "chord";
type Cue = { at: number; sound: EndingSound };
export const ENDING_CUES: readonly Cue[] = ([
  { at: 0.05, sound: "hum" },
  ...Array.from({ length: TNT_CRATES }, (_, i) => ({ at: crateLoadedAt(i), sound: "thunk" as const })),
  { at: 21.8, sound: "door" },
  { at: 24.2, sound: "ignite" },
  { at: 25.0, sound: "launch" },
  ...BOLTS.map((at) => ({ at, sound: "zap" as const })),
  ...Array.from({ length: 6 }, (_, i) => ({ at: 41 + i * 0.6, sound: "alarm" as const })),
  { at: 45.0, sound: "impact" },
  { at: 46.4, sound: "boom" },
  { at: 47.3, sound: "boom" },
  { at: 48.5, sound: "boom" },
  { at: 54.2, sound: "chord" },
] satisfies Cue[]).sort((a, b) => a.at - b.at);

// ── small maths ──────────────────────────────────────────────────────────────
function clamp(v: number, lo: number, hi: number) { return Math.max(lo, Math.min(hi, v)); }
function ease(v: number) { const k = clamp(v, 0, 1); return k * k * (3 - 2 * k); }
function span(t: number, from: number, to: number) { return clamp((t - from) / (to - from), 0, 1); }
function seeded(seed: number) {
  let a = seed >>> 0;
  return () => { a = (a + 0x6d2b79f5) >>> 0; let r = Math.imul(a ^ (a >>> 15), 1 | a); r ^= r + Math.imul(r ^ (r >>> 7), 61 | r); return ((r ^ (r >>> 14)) >>> 0) / 4294967296; };
}

const rnd = seeded(2026_10_14);
const STARS = Array.from({ length: 170 }, () => ({ x: rnd(), y: rnd(), z: 0.2 + rnd() * 0.8, tw: rnd() * 6.28 }));
const RAYS = Array.from({ length: 120 }, () => ({ a: rnd() * Math.PI * 2, r: rnd(), z: 0.4 + rnd() * 0.6 }));
const BLASTS = Array.from({ length: 16 }, (_, i) => ({ at: 45.1 + i * 0.32, x: (rnd() - 0.5) * 300, y: (rnd() - 0.5) * 150, r: 50 + rnd() * 70 }));
const DEBRIS = Array.from({ length: 46 }, () => ({ a: rnd() * Math.PI * 2, v: 60 + rnd() * 260, s: 1.5 + rnd() * 3.5, spin: rnd() }));
const FLEET = Array.from({ length: 5 }, (_, i) => ({ at: i * 2.1, a: -0.9 + rnd() * 1.8 }));

// ── the pieces ───────────────────────────────────────────────────────────────
function stars(x: Ctx, t: number, drift: number, alpha = 1) {
  x.save();
  for (const s of STARS) {
    const X = (((s.x * W - t * drift * s.z) % W) + W) % W, Y = s.y * H;
    x.globalAlpha = alpha * (0.35 + 0.65 * s.z) * (0.75 + 0.25 * Math.sin(t * 2 + s.tw));
    x.fillStyle = s.z > 0.8 ? "#ffffff" : "#bcd6ff";
    x.fillRect(X, Y, 0.8 + s.z * 1.6, 0.8 + s.z * 1.6);
  }
  x.restore();
}

/** Their station: a dark violet hub, a ring, spikes, and the green core that
 *  every alien on the ship glows with. */
function station(x: Ctx, cx: number, cy: number, s: number, t: number, glowing = true) {
  x.save(); x.translate(cx, cy); x.scale(s, s);
  if (glowing) { // (not on the pieces it breaks into: clipped, a glow draws dark wedges between them)
    const glow = x.createRadialGradient(0, 0, 40, 0, 0, 260);
    glow.addColorStop(0, "rgba(120,255,150,0.28)"); glow.addColorStop(1, "rgba(120,255,150,0)");
    x.fillStyle = glow; x.beginPath(); x.arc(0, 0, 260, 0, Math.PI * 2); x.fill();
  }
  const ring = (from: number, to: number) => {
    x.save(); x.rotate(-0.22);
    x.strokeStyle = "#4b2d66"; x.lineWidth = 20; x.beginPath(); x.ellipse(0, 0, 196, 56, 0, from, to); x.stroke();
    x.strokeStyle = "#8a5cb8"; x.lineWidth = 5; x.beginPath(); x.ellipse(0, -4, 196, 56, 0, from, to); x.stroke();
    for (let i = 0; i < 14; i++) {
      const a = (i / 14) * Math.PI * 2;
      if ((Math.sin(a) < 0) !== (from > 1)) continue; // back lights with the back half, front with the front
      x.globalAlpha = 0.5 + 0.5 * Math.sin(t * 4 + i * 1.7);
      x.fillStyle = i % 3 ? "#8dffa6" : "#ffd65a"; x.beginPath(); x.arc(Math.cos(a) * 196, Math.sin(a) * 56, 4, 0, 7); x.fill();
      x.globalAlpha = 1;
    }
    x.restore();
  };
  ring(Math.PI, Math.PI * 2); // the half behind the hub
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2 + 0.2;
    x.save(); x.rotate(a);
    x.fillStyle = "#33204a"; x.beginPath(); x.moveTo(66, -16); x.lineTo(150, 0); x.lineTo(66, 16); x.closePath(); x.fill();
    x.fillStyle = "#5a3a7a"; x.beginPath(); x.moveTo(66, -16); x.lineTo(150, 0); x.lineTo(66, -2); x.closePath(); x.fill();
    x.restore();
  }
  const body = x.createRadialGradient(-26, -30, 10, 0, 0, 86);
  body.addColorStop(0, "#7a52a3"); body.addColorStop(1, "#24132f");
  x.fillStyle = body; x.beginPath(); x.arc(0, 0, 84, 0, Math.PI * 2); x.fill();
  x.strokeStyle = "rgba(190,150,240,0.35)"; x.lineWidth = 2;
  for (let i = -2; i <= 2; i++) { x.beginPath(); x.ellipse(0, 0, 84, Math.abs(i) * 22 + 6, 0, 0, Math.PI * 2); x.stroke(); }
  const pulse = 0.85 + 0.15 * Math.sin(t * 3);
  const core = x.createRadialGradient(0, 0, 2, 0, 0, 34 * pulse);
  core.addColorStop(0, "#f2fff0"); core.addColorStop(0.45, "#7dff98"); core.addColorStop(1, "rgba(60,220,110,0)");
  x.fillStyle = core; x.beginPath(); x.arc(0, 0, 34 * pulse, 0, Math.PI * 2); x.fill();
  ring(0, Math.PI); // the half in front
  x.restore();
}

/** The shuttle, side on, nose to the right. About 150 units long. */
function shuttle(x: Ctx, cx: number, cy: number, s: number, o: { flame?: number; hatch?: number; gear?: boolean; loaded?: number; t?: number } = {}) {
  x.save(); x.translate(cx, cy); x.scale(s, s);
  const flame = o.flame ?? 0, t = o.t ?? 0;
  if (flame > 0) {
    const len = 30 + 110 * flame + Math.sin(t * 40) * 6 * flame;
    const g = x.createLinearGradient(-74, 0, -74 - len, 0);
    g.addColorStop(0, "#ffffff"); g.addColorStop(0.25, "#ffd27a"); g.addColorStop(1, "rgba(255,110,40,0)");
    x.fillStyle = g; x.beginPath(); x.moveTo(-72, -10); x.lineTo(-74 - len, 0); x.lineTo(-72, 10); x.closePath(); x.fill();
  }
  if (o.gear) {
    x.strokeStyle = "#3a4350"; x.lineWidth = 4;
    for (const gx of [-42, 34]) { x.beginPath(); x.moveTo(gx, 14); x.lineTo(gx - 3, 33); x.stroke(); x.fillStyle = "#222a35"; x.fillRect(gx - 11, 32, 16, 4); }
  }
  x.fillStyle = "#4f5d70"; x.beginPath(); x.moveTo(-34, 8); x.lineTo(12, 8); x.lineTo(-8, 30); x.lineTo(-46, 30); x.closePath(); x.fill(); // wing
  x.fillStyle = "#435063"; x.beginPath(); x.moveTo(-62, -12); x.lineTo(-38, -12); x.lineTo(-58, -38); x.lineTo(-70, -38); x.closePath(); x.fill(); // tail fin
  const hull = x.createLinearGradient(0, -22, 0, 18);
  hull.addColorStop(0, "#eef2f6"); hull.addColorStop(1, "#8794a6");
  x.fillStyle = hull; x.strokeStyle = "#2b3442"; x.lineWidth = 2 / s;
  x.beginPath(); x.moveTo(74, 6); x.quadraticCurveTo(62, -19, 22, -21); x.lineTo(-58, -17); x.quadraticCurveTo(-72, -15, -72, 0);
  x.quadraticCurveTo(-72, 15, -58, 17); x.lineTo(42, 17); x.quadraticCurveTo(68, 15, 74, 6); x.closePath(); x.fill(); x.stroke();
  x.fillStyle = "#34c3e6"; x.fillRect(-58, 4, 100, 4); // the game's cyan, so it reads as ours
  const glass = x.createLinearGradient(30, -18, 60, -2);
  glass.addColorStop(0, "#9fefff"); glass.addColorStop(1, "#14465f");
  x.fillStyle = glass; x.beginPath(); x.moveTo(30, -18); x.lineTo(54, -14); x.lineTo(64, -2); x.lineTo(36, -4); x.closePath(); x.fill();
  x.fillStyle = "#39414d"; x.fillRect(-78, -10, 8, 20); // the engine bell
  // the cargo hatch, and what is already inside it
  x.strokeStyle = "#5d6878"; x.lineWidth = 1.5 / s; x.beginPath(); x.roundRect(-36, -10, 42, 23, 3); x.stroke();
  const hatch = o.hatch ?? 0;
  if (hatch > 0) {
    x.globalAlpha = hatch; x.fillStyle = "#0f141c"; x.beginPath(); x.roundRect(-36, -10, 42, 23, 3); x.fill();
    for (let i = 0; i < (o.loaded ?? 0); i++) crate(x, -29 + (i % 3) * 13, 7 - Math.floor(i / 3) * 10, 9);
    x.globalAlpha = 1;
  }
  x.fillStyle = "#ff5d6c"; x.beginPath(); x.arc(-10, 30, 2, 0, 7); x.fill(); // wingtip light
  x.restore();
}

/** One crate of TNT, centred on X, Y. */
function crate(x: Ctx, X: number, Y: number, size: number) {
  const h = size / 2;
  x.fillStyle = "#c2321f"; x.fillRect(X - h, Y - h, size, size);
  x.strokeStyle = "#5e150c"; x.lineWidth = Math.max(1, size / 14); x.strokeRect(X - h, Y - h, size, size);
  x.fillStyle = "#ffd23f"; x.fillRect(X - h, Y + h * 0.55, size, h * 0.3);
  if (size >= 8) {
    x.fillStyle = "#fff6e6"; x.font = `bold ${Math.round(size * 0.38)}px ${MONO}`; x.textAlign = "center"; x.textBaseline = "middle";
    x.fillText("TNT", X, Y - h * 0.12); x.textAlign = "left"; x.textBaseline = "alphabetic";
  }
}

/** You, in the suit. Feet at X, Y. */
function astronaut(x: Ctx, X: number, Y: number, s: number, walk: number, facing: 1 | -1, carrying: boolean) {
  x.save(); x.translate(X, Y); x.scale(facing * s, s);
  const swing = Math.sin(walk) * 0.55;
  const leg = (a: number, shade: string) => {
    x.save(); x.translate(0, -24); x.rotate(a);
    x.fillStyle = shade; x.beginPath(); x.roundRect(-4.5, 0, 9, 22, 4); x.fill();
    x.fillStyle = "#2c3440"; x.beginPath(); x.roundRect(-5, 19, 13, 6, 3); x.fill();
    x.restore();
  };
  leg(-swing, "#c9d1da"); leg(swing, "#e6ebf0");
  x.fillStyle = "#b7c1cc"; x.beginPath(); x.roundRect(-18, -50, 9, 25, 3); x.fill(); // pack
  x.fillStyle = "#eef2f6"; x.beginPath(); x.roundRect(-11, -52, 22, 30, 7); x.fill();
  x.fillStyle = "#34c3e6"; x.fillRect(-11, -36, 22, 3);
  const arm = (a: number) => { x.save(); x.translate(2, -46); x.rotate(a); x.fillStyle = "#dde3ea"; x.beginPath(); x.roundRect(-4, 0, 8, 20, 4); x.fill(); x.restore(); };
  if (carrying) { arm(-1.25); arm(-1.05); } else { arm(swing * 0.9); arm(-swing * 0.9); }
  x.fillStyle = "#f4f7fa"; x.beginPath(); x.arc(0, -62, 13, 0, Math.PI * 2); x.fill();
  const visor = x.createLinearGradient(0, -70, 10, -54);
  visor.addColorStop(0, "#8ae8ff"); visor.addColorStop(1, "#163f60");
  x.fillStyle = visor; x.beginPath(); x.ellipse(4, -62, 9, 6.5, 0, 0, Math.PI * 2); x.fill();
  x.restore();
}

/** The ship you boarded, from outside: long, dark, and lit along its decks. */
function mothership(x: Ctx, t: number) {
  const hull = x.createLinearGradient(0, 220, 0, 600);
  hull.addColorStop(0, "#3a3350"); hull.addColorStop(1, "#15121f");
  x.fillStyle = hull;
  x.beginPath(); x.moveTo(-60, 250); x.lineTo(380, 300); x.lineTo(470, 360); x.lineTo(470, 470); x.lineTo(380, 540); x.lineTo(-60, 620); x.closePath(); x.fill();
  x.strokeStyle = "rgba(170,140,220,0.25)"; x.lineWidth = 2;
  for (let i = 1; i < 5; i++) { x.beginPath(); x.moveTo(-60, 250 + i * 70); x.lineTo(470, 340 + i * 30); x.stroke(); }
  for (let i = 0; i < 30; i++) {
    x.globalAlpha = 0.5 + 0.5 * Math.sin(t * 2 + i);
    x.fillStyle = i % 4 ? "#ffe08a" : "#8dffa6"; x.fillRect(10 + (i % 10) * 34, 300 + Math.floor(i / 10) * 70 + (i % 10) * 4, 8, 3);
  }
  x.globalAlpha = 1;
  const bay = x.createLinearGradient(430, 0, 470, 0);
  bay.addColorStop(0, "#2a4a60"); bay.addColorStop(1, "#bff4ff");
  x.fillStyle = bay; x.fillRect(440, 390, 30, 60); // the hangar you just left, lit
}

// ── the shots ────────────────────────────────────────────────────────────────
function hangar(x: Ctx, t: number) {
  const scene = sceneAt(t);
  // the wall
  const wall = x.createLinearGradient(0, 0, 0, 560);
  wall.addColorStop(0, "#0d1420"); wall.addColorStop(1, "#1a2434");
  x.fillStyle = wall; x.fillRect(0, 0, W, 560);
  x.strokeStyle = "rgba(127,230,255,0.07)"; x.lineWidth = 2;
  for (let X = 40; X < 870; X += 90) { x.beginPath(); x.moveTo(X, 40); x.lineTo(X, 560); x.stroke(); }
  for (let i = 0; i < 5; i++) { // ceiling lamps
    const lx = 120 + i * 170, g = x.createRadialGradient(lx, 60, 2, lx, 60, 200);
    g.addColorStop(0, "rgba(200,235,255,0.22)"); g.addColorStop(1, "rgba(200,235,255,0)");
    x.fillStyle = g; x.fillRect(lx - 200, 40, 400, 400); x.fillStyle = "#dff6ff"; x.fillRect(lx - 30, 52, 60, 6);
  }
  // the hangar door, with space and their station behind it
  const DX = 880, DY = 110, DW = 370, DH = 430;
  x.save(); x.beginPath(); x.rect(DX, DY, DW, DH); x.clip();
  x.fillStyle = "#02040a"; x.fillRect(DX, DY, DW, DH);
  stars(x, t, 4, 0.9);
  for (const f of FLEET) { // their ships leaving the station, a little at a time
    const k = ((t - f.at) % 10.5 + 10.5) % 10.5 / 3.5;
    if (k > 1) continue;
    x.fillStyle = `rgba(140,255,170,${1 - k})`; x.beginPath(); x.arc(1065 + Math.cos(f.a) * k * 150, 225 + Math.sin(f.a) * k * 60, 2.5, 0, 7); x.fill();
  }
  station(x, 1065, 225, 0.27, t);
  const open = scene === "launch" ? ease(span(t, 21.8, 24)) : 0;
  const half = DH / 2;
  const doorPanel = (Y: number, top: boolean) => {
    const g = x.createLinearGradient(0, Y, 0, Y + half);
    g.addColorStop(0, "#3a4658"); g.addColorStop(1, "#262f3d");
    x.fillStyle = g; x.fillRect(DX, Y, DW, half);
    for (let i = 0; i < 9; i++) { x.fillStyle = i % 2 ? "#ffd23f" : "#1b222d"; x.fillRect(DX + i * (DW / 9), top ? Y + half - 16 : Y, DW / 9, 16); }
    if (top) { x.fillStyle = "#02040a"; x.fillRect(DX + 30, Y + 34, DW - 60, half - 64); } // the viewing window
  };
  // closed, the door has a window in its top half; opening, the halves part
  if (open < 1) {
    x.save();
    if (open === 0) { x.beginPath(); x.rect(DX, DY, DW, DH); x.rect(DX + 30, DY + 34, DW - 60, half - 64); x.clip("evenodd"); }
    doorPanel(DY - open * half, true); doorPanel(DY + half + open * half, false);
    x.restore();
  }
  x.restore();
  x.strokeStyle = "#556275"; x.lineWidth = 10; x.strokeRect(DX, DY, DW, DH);
  // the floor
  const floor = x.createLinearGradient(0, 560, 0, H);
  floor.addColorStop(0, "#2a3446"); floor.addColorStop(1, "#0e131c");
  x.fillStyle = floor; x.fillRect(0, 560, W, H - 560);
  for (let i = 0; i < 40; i++) { x.fillStyle = i % 2 ? "#ffd23f" : "#1b222d"; x.fillRect(i * 32, 560, 32, 6); }
  // the ordnance store, and what is left in it
  x.fillStyle = "#0a0e15"; x.fillRect(50, 330, 200, 230);
  x.strokeStyle = "#556275"; x.lineWidth = 6; x.strokeRect(50, 330, 200, 230);
  x.fillStyle = "#ffd23f"; x.font = `bold 18px ${MONO}`; x.fillText("ORDNANCE", 102, 320);
  const taken = scene === "hangar" ? 0 : Math.min(TNT_CRATES, Math.floor((t - CARGO_START) / CARGO_CYCLE) + (t >= CARGO_START ? 1 : 0));
  for (let i = taken; i < TNT_CRATES; i++) crate(x, 92 + (i % 3) * 56, 528 - Math.floor(i / 3) * 56, 52);
  // the shuttle
  const loaded = cratesLoaded(t);
  const flame = scene === "launch" ? ease(span(t, 24.2, 25.2)) : 0;
  const go = scene === "launch" ? Math.pow(span(t, 25, 27), 2) : 0;
  const lift = scene === "launch" ? ease(span(t, 24.4, 25)) * 18 : 0;
  const shake = flame > 0 ? Math.sin(t * 70) * 2 * flame : 0;
  const hatch = scene === "hangar" ? 0 : scene === "cargo" ? ease(span(t, 10.2, 10.6)) : 1 - span(t, 21.5, 21.8);
  shuttle(x, 600 + go * 1000, 465 - lift + shake, 2.8, { flame, hatch, gear: lift < 12, loaded, t });
  // you
  if (scene === "hangar") {
    const k = span(t, 0.5, 6.5);
    astronaut(x, -40 + ease(k) * 300, 560, 1.4, k * 26, 1, false);
  } else if (scene === "cargo") {
    const since = t - CARGO_START;
    // the last crate goes in, and you go in after it rather than walking back
    const boardFrom = crateLoadedAt(TNT_CRATES - 1);
    if (since < 0) astronaut(x, 260, 560, 1.4, 0, 1, false);
    else if (t < boardFrom) {
      const c = since % CARGO_CYCLE;
      if (c < CARRY) {
        const k = c / CARRY; const X = STORE_X + (HATCH_X - STORE_X) * k;
        astronaut(x, X, 560, 1.4, k * 9, 1, true); crate(x, X + 30, 500, 40);
      } else if (c < CARRY + LIFT) {
        const k = (c - CARRY) / LIFT;
        astronaut(x, HATCH_X, 560, 1.4, 0, 1, true);
        x.globalAlpha = 1 - k; crate(x, HATCH_X + 30 + k * 40, 500 - k * 26, 40 - k * 12); x.globalAlpha = 1;
      } else if (c < CARRY + LIFT + BACK) {
        const k = (c - CARRY - LIFT) / BACK;
        astronaut(x, HATCH_X - (HATCH_X - STORE_X) * k, 560, 1.4, k * 9, -1, false);
      } else astronaut(x, STORE_X, 560, 1.4, 0, 1, false);
    } else {
      // all six aboard: climb in after them
      const k = span(t, boardFrom, 21.3);
      x.globalAlpha = 1 - span(t, 20.9, 21.3);
      astronaut(x, HATCH_X + (560 - HATCH_X) * ease(k), 560 - span(t, 20.7, 21.3) * 60, 1.4, k * 8, 1, false);
      x.globalAlpha = 1;
    }
  }
  // the cargo count, the way the visor shows things
  if (scene === "cargo") {
    x.fillStyle = "rgba(6,14,28,0.7)"; x.beginPath(); x.roundRect(1010, 600, 230, 64, 12); x.fill();
    x.strokeStyle = "rgba(127,230,255,0.5)"; x.lineWidth = 1.5; x.stroke();
    x.fillStyle = "rgba(170,210,240,0.8)"; x.font = `bold 12px ${FONT}`; x.fillText("SHUTTLE CARGO", 1028, 624);
    x.fillStyle = "#ffd65a"; x.font = `bold 24px ${MONO}`; x.fillText(`${loaded} / ${TNT_CRATES} TNT`, 1028, 652);
  }
}

function outside(x: Ctx, t: number) {
  x.fillStyle = "#02040a"; x.fillRect(0, 0, W, H);
  stars(x, t, 10);
  station(x, 1050, 250, 0.55, t);
  mothership(x, t);
  const k = t - 27;
  const sx = 470 + k * 230 + k * k * 40, sy = 420 - k * 45;
  for (let i = 1; i < 14; i++) { // the trail
    x.globalAlpha = (1 - i / 14) * 0.5; x.fillStyle = "#ffd27a";
    x.beginPath(); x.arc(sx - i * 14, sy + i * 2.6, 6 - i * 0.35, 0, 7); x.fill();
  }
  x.globalAlpha = 1;
  shuttle(x, sx, sy, 0.5, { flame: 1, t });
}

function cockpit(x: Ctx, t: number) {
  const p = span(t, COCKPIT_FROM, COCKPIT_TO);
  const shakeAmp = 1 + p * p * 8;
  const sx = Math.sin(t * 37) * shakeAmp, sy = Math.cos(t * 29) * shakeAmp * 0.7;
  x.save(); x.translate(sx, sy);
  x.fillStyle = "#02040a"; x.fillRect(-20, -20, W + 40, H + 40);
  // the stars pour past faster the closer you get
  const speed = 0.25 + p * 1.3;
  x.strokeStyle = "#cfe3ff";
  for (const r of RAYS) {
    const d = ((r.r + t * speed * r.z) % 1);
    const R0 = 40 + d * d * 760, R1 = R0 * (1.04 + p * 0.1);
    x.globalAlpha = Math.min(1, d * 1.5) * 0.8; x.lineWidth = 1 + d * 2;
    x.beginPath(); x.moveTo(640 + Math.cos(r.a) * R0, 300 + Math.sin(r.a) * R0); x.lineTo(640 + Math.cos(r.a) * R1, 300 + Math.sin(r.a) * R1); x.stroke();
  }
  x.globalAlpha = 1;
  const scale = 0.16 + 2.7 * Math.pow(p, 2.6);
  station(x, 640 + Math.sin(t * 0.7) * 30 * (1 - p), 300, scale, t);
  // their shots, coming straight at the window
  BOLTS.forEach((at, i) => {
    const k = span(t, at - 0.4, at + 0.3);
    if (k <= 0 || k >= 1) return;
    const side = i % 2 ? 1 : -1, tx = 640 + side * (420 + (i % 3) * 120), ty = 120 + (i % 4) * 110;
    const X = 640 + (tx - 640) * k * k, Y = 300 + (ty - 300) * k * k, R = 3 + k * k * 30;
    const g = x.createRadialGradient(X, Y, 0, X, Y, R * 2);
    g.addColorStop(0, "#f2fff0"); g.addColorStop(0.4, "#6dff8a"); g.addColorStop(1, "rgba(60,220,110,0)");
    x.fillStyle = g; x.beginPath(); x.arc(X, Y, R * 2, 0, 7); x.fill();
  });
  // the white of the hit, starting from the core
  const flash = span(t, 44.4, 45);
  if (flash > 0) {
    const g = x.createRadialGradient(640, 300, 0, 640, 300, 60 + flash * 1100);
    g.addColorStop(0, "rgba(255,255,255,1)"); g.addColorStop(1, `rgba(255,255,255,${flash})`);
    x.fillStyle = g; x.fillRect(-20, -20, W + 40, H + 40);
  }
  // the cabin: window frame and dashboard, drawn over the view
  x.fillStyle = "#0b0f16";
  x.beginPath(); x.rect(-20, -20, W + 40, H + 40);
  x.moveTo(170, 70); x.lineTo(1110, 70); x.lineTo(1230, 520); x.lineTo(50, 520); x.closePath();
  x.fill("evenodd");
  x.strokeStyle = "#2c3747"; x.lineWidth = 6; x.beginPath(); x.moveTo(170, 70); x.lineTo(1110, 70); x.lineTo(1230, 520); x.lineTo(50, 520); x.closePath(); x.stroke();
  const dash = x.createLinearGradient(0, 520, 0, H);
  dash.addColorStop(0, "#222c3c"); dash.addColorStop(1, "#0d1219");
  x.fillStyle = dash; x.fillRect(-20, 520, W + 40, H - 500);
  x.fillStyle = "rgba(127,230,255,0.25)"; x.fillRect(-20, 520, W + 40, 2);
  // displays
  const screen = (X: number, title: string, body: string, col: string) => {
    x.fillStyle = "#04080e"; x.beginPath(); x.roundRect(X, 560, 280, 108, 12); x.fill();
    x.strokeStyle = "rgba(127,230,255,0.4)"; x.lineWidth = 1.5; x.stroke();
    x.fillStyle = "rgba(170,210,240,0.8)"; x.font = `bold 13px ${FONT}`; x.fillText(title, X + 18, 586);
    x.save(); x.fillStyle = col; x.shadowColor = col; x.shadowBlur = 12; x.font = `bold 36px ${MONO}`; x.fillText(body, X + 18, 640); x.restore();
  };
  screen(150, "DISTANCE TO STATION", `${distanceAt(t).toLocaleString("en-GB")} m`, "#7fe6ff");
  const armed = Math.sin(t * 8) > -0.2;
  screen(850, `CARGO · ${TNT_CRATES} × TNT`, armed ? "ARMED" : "", "#ff5d6c");
  // the control stick, and your gloves on it
  x.fillStyle = "#1a212c"; x.fillRect(624, 610, 32, 110);
  x.fillStyle = "#2b3442"; x.beginPath(); x.roundRect(560, 590, 160, 26, 13); x.fill();
  for (const gx of [566, 714]) {
    x.fillStyle = "#e9eef3"; x.beginPath(); x.roundRect(gx - 22, 584, 44, 38, 14); x.fill(); // the glove round the grip
    x.fillStyle = "#cfd7df"; x.beginPath(); x.roundRect(gx - 22, 596, 44, 6, 3); x.fill(); // knuckles
    x.fillStyle = "#34c3e6"; x.fillRect(gx - 24, 622, 48, 8); // the cuff
    x.fillStyle = "#dfe5ec"; x.fillRect(gx - 22, 630, 44, 90); // the sleeve
  }
  // the alarm
  if (t >= 41) {
    const on = Math.sin(t * 10.5) > 0;
    x.fillStyle = on ? "#ff3b4e" : "#5a1a22"; x.beginPath(); x.arc(640, 556, 10, 0, 7); x.fill();
    if (on) { x.fillStyle = "rgba(255,40,60,0.12)"; x.fillRect(-20, -20, W + 40, H + 40); }
  }
  x.restore();
}

function explosion(x: Ctx, t: number) {
  x.fillStyle = "#02040a"; x.fillRect(0, 0, W, H);
  stars(x, t, 3);
  const CX = 640, CY = 330, k = t - 46.6;
  if (k < 0) station(x, CX, CY, 1, t);
  else {
    // it breaks into six pieces that drift apart and burn out
    const fade = 1 - span(t, 48, 52.5);
    for (let i = 0; i < 6; i++) {
      const a0 = (i / 6) * Math.PI * 2, a1 = ((i + 1) / 6) * Math.PI * 2, mid = (a0 + a1) / 2;
      const d = k * (28 + (i % 3) * 16);
      x.save(); x.globalAlpha = fade;
      x.translate(CX + Math.cos(mid) * d, CY + Math.sin(mid) * d); x.rotate(k * 0.25 * (i % 2 ? 1 : -1));
      x.beginPath(); x.moveTo(0, 0); x.arc(0, 0, 300, a0, a1); x.closePath(); x.clip();
      station(x, 0, 0, 1, t, false);
      x.restore();
    }
    for (const b of DEBRIS) {
      const r = b.v * k;
      x.globalAlpha = Math.max(0, 1 - k / 6); x.fillStyle = b.spin > 0.5 ? "#ffd27a" : "#c9b6e8";
      x.fillRect(CX + Math.cos(b.a) * r, CY + Math.sin(b.a) * r, b.s, b.s);
    }
    x.globalAlpha = 1;
  }
  // the fireball, the chain of blasts, and the shockwave
  const fb = span(t, 45, 46.4), fbOut = 1 - span(t, 46.6, 48.4);
  if (fbOut > 0) {
    const R = 60 + fb * 240;
    const g = x.createRadialGradient(CX, CY, 0, CX, CY, R);
    g.addColorStop(0, `rgba(255,255,255,${fbOut})`); g.addColorStop(0.35, `rgba(255,214,120,${fbOut})`); g.addColorStop(1, "rgba(255,90,40,0)");
    x.fillStyle = g; x.beginPath(); x.arc(CX, CY, R, 0, 7); x.fill();
  }
  for (const b of BLASTS) {
    const q = span(t, b.at, b.at + 0.9);
    if (q <= 0 || q >= 1) continue;
    const R = b.r * (0.3 + q), g = x.createRadialGradient(CX + b.x, CY + b.y, 0, CX + b.x, CY + b.y, R);
    g.addColorStop(0, `rgba(255,250,230,${1 - q})`); g.addColorStop(0.5, `rgba(255,150,60,${(1 - q) * 0.9})`); g.addColorStop(1, "rgba(200,40,30,0)");
    x.fillStyle = g; x.beginPath(); x.arc(CX + b.x, CY + b.y, R, 0, 7); x.fill();
  }
  const sw = span(t, 46, 49);
  if (sw > 0 && sw < 1) {
    x.strokeStyle = `rgba(200,240,255,${(1 - sw) * 0.8})`; x.lineWidth = 3 + 20 * (1 - sw);
    x.beginPath(); x.ellipse(CX, CY, sw * 900, sw * 300, -0.22, 0, Math.PI * 2); x.stroke();
  }
  // still white from the hit, for a moment
  const white = 1 - span(t, 45, 46);
  if (white > 0) { x.fillStyle = `rgba(255,255,255,${white})`; x.fillRect(0, 0, W, H); }
}

function endCard(x: Ctx, t: number) {
  x.fillStyle = "#03050b"; x.fillRect(0, 0, W, H);
  stars(x, t, 2, 0.7);
  const text = (s: string, Y: number, size: number, col: string, from: number, glow: boolean, spacing = "0px", font = FONT) => {
    const a = span(t, from, from + 0.9);
    if (a <= 0) return;
    x.save(); x.globalAlpha = a; x.textAlign = "center"; x.fillStyle = col; x.font = `bold ${size}px ${font}`; x.letterSpacing = spacing;
    if (glow) { x.shadowColor = col; x.shadowBlur = 24; }
    x.fillText(s, W / 2, Y + (1 - a) * 10); x.restore();
  };
  text("THE STATION IS GONE", 300, 60, "#ffd65a", 54.4, true, "4px");
  text("You flew a shuttle full of TNT into the heart of it.", 372, 26, "#eaf6ff", 55.6, false);
  text("You didn't come home. Everyone else will.", 414, 26, "#eaf6ff", 57.0, false);
  text("THE END", 510, 18, "#7fe6ff", 59.0, true, "8px", MONO);
}

/** One frame of the ending, at `t` seconds in. */
export function drawEnding(x: Ctx, t: number, o: { who: string; touch: boolean }) {
  x.save();
  const scene = sceneAt(t);
  if (scene === "hangar" || scene === "cargo" || scene === "launch") hangar(x, t);
  else if (scene === "outside") outside(x, t);
  else if (scene === "cockpit") cockpit(x, t);
  else if (scene === "impact") { cockpit(x, Math.min(t, 45)); x.fillStyle = "#ffffff"; x.fillRect(0, 0, W, H); }
  else if (scene === "explosion") explosion(x, t);
  else endCard(x, t);
  // cuts through black between shots that are not the same place
  for (const cut of [0, 27, 30, 54]) {
    const d = Math.abs(t - cut);
    if (d < 0.45) { x.fillStyle = `rgba(0,0,0,${1 - d / 0.45})`; x.fillRect(0, 0, W, H); }
  }
  // letterbox, so it reads as a film and not as the game
  if (scene !== "end") { x.fillStyle = "#000"; x.fillRect(0, 0, W, 34); x.fillRect(0, H - 34, W, 34); }
  const line = lineAt(t);
  drawCommsScreen(x, !!line);
  if (line) drawCommsText(x, o.who, line.text, t - line.at, line.until - t);
  if (t >= ENDING_SKIP_LOCK && t < ENDING_SECONDS - 1) {
    x.globalAlpha = 0.55; x.fillStyle = "#eaf6ff"; x.font = `14px ${FONT}`; x.textAlign = "right";
    x.fillText(o.touch ? "Tap to skip" : "Press Enter to skip", W - 24, H - 12); x.textAlign = "left"; x.globalAlpha = 1;
  }
  x.restore();
}
