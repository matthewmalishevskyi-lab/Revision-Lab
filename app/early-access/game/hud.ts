// Everything drawn over the 3D view, on a sharp 1280x720 overlay.
//
// The look is a space-helmet VISOR, not a status bar: the 3D view fills the
// whole screen and small glowing readouts sit in the corners (health bottom
// left, the blaster's cells bottom right, a compass with the objective along
// the top, and the mascot on a comms screen top left, giving hints). Matthew
// asked for it to look less like Doom while keeping the feel; a grey bar with
// a face in the middle is the most recognisably Doom thing there is, so it went.
//
// The blaster in your hand is drawn on the low-resolution game canvas instead
// (drawWeapon, at the bottom), so it is pixelated like the world around it.

type Ctx = CanvasRenderingContext2D;
export const HUD_W = 1280, HUD_H = 720;

const CYAN = "#7fe6ff", CYAN_DIM = "rgba(127,230,255,0.35)", GLASS = "rgba(6,14,28,0.62)", WARN = "#ffb640", DANGER = "#ff5d6c", GOOD = "#2fd48a";
const FONT = "system-ui, sans-serif", MONO = `ui-monospace, "DejaVu Sans Mono", monospace`;

export type HudState = {
  health: number; vest: number; ammo: number; hasPistol: boolean; weapon: "knife" | "pistol";
  keys: string[]; radTime: number; level: string; aliensLeft: number;
  hurt: number; hits: { a: number; t: number }[]; aim: boolean;
  heading: number; objective: { text: string; bearing: number; dist: number } | null;
  comms: { who: string; text: string; age: number; left: number } | null;
  feed: { text: string; t: number }[];
  area: { name: string; t: number } | null;
  prompt: { key: string; text: string } | null;
};

// ── the visor itself: drawn once, reused every frame ─────────────────────────
let visorCache: HTMLCanvasElement | null = null;
function visor(): HTMLCanvasElement {
  if (visorCache) return visorCache;
  const c = document.createElement("canvas"); c.width = HUD_W; c.height = HUD_H;
  const x = c.getContext("2d")!, W = HUD_W, H = HUD_H;
  // edges of the glass darken and tint blue, like looking out of a helmet
  const v = x.createRadialGradient(W / 2, H / 2, H * 0.42, W / 2, H / 2, W * 0.66);
  v.addColorStop(0, "rgba(4,12,30,0)"); v.addColorStop(0.7, "rgba(4,12,30,0.28)"); v.addColorStop(1, "rgba(2,6,16,0.85)");
  x.fillStyle = v; x.fillRect(0, 0, W, H);
  // very faint scan lines on the glass
  x.fillStyle = "rgba(127,230,255,0.025)"; for (let y = 0; y < H; y += 3) x.fillRect(0, y, W, 1);
  // a glint of reflection across the top left of the glass
  const r = x.createLinearGradient(0, 0, 420, 260); r.addColorStop(0, "rgba(200,240,255,0.07)"); r.addColorStop(1, "rgba(200,240,255,0)");
  x.fillStyle = r; x.beginPath(); x.moveTo(0, 0); x.lineTo(520, 0); x.lineTo(0, 300); x.fill();
  // the helmet frame's corner brackets
  x.strokeStyle = "rgba(127,230,255,0.28)"; x.lineWidth = 2;
  const bracket = (cx: number, cy: number, dx: number, dy: number) => { x.beginPath(); x.moveTo(cx + dx * 70, cy); x.lineTo(cx, cy); x.lineTo(cx, cy + dy * 70); x.stroke(); };
  bracket(10, 10, 1, 1); bracket(W - 10, 10, -1, 1); bracket(10, H - 10, 1, -1); bracket(W - 10, H - 10, -1, -1);
  visorCache = c; return c;
}

function panel(x: Ctx, X: number, Y: number, w: number, h: number, accent = CYAN_DIM) {
  x.fillStyle = GLASS; x.beginPath(); x.roundRect(X, Y, w, h, 14); x.fill();
  x.strokeStyle = accent; x.lineWidth = 1.5; x.stroke();
}
function label(x: Ctx, text: string, X: number, Y: number, col = "rgba(170,210,240,0.8)", size = 12) {
  x.fillStyle = col; x.font = `bold ${size}px ${FONT}`; x.letterSpacing = "2px"; x.fillText(text, X, Y); x.letterSpacing = "0px";
}
function glowText(x: Ctx, text: string, X: number, Y: number, size: number, col: string, align: CanvasTextAlign = "left") {
  x.save(); x.textAlign = align; x.font = `bold ${size}px ${MONO}`; x.fillStyle = col; x.shadowColor = col; x.shadowBlur = 14; x.fillText(text, X, Y); x.restore();
}

export function drawHud(x: Ctx, s: HudState) {
  const W = HUD_W, H = HUD_H;
  // amber tint while the radiation suit is on
  if (s.radTime > 0) { x.fillStyle = "rgba(255,200,80,0.07)"; x.fillRect(0, 0, W, H); }
  x.drawImage(visor(), 0, 0);
  // being hit: the edge of the visor flashes red, and an arc shows which way it came from
  if (s.hurt > 0) {
    const g = x.createRadialGradient(W / 2, H / 2, 240, W / 2, H / 2, 760);
    g.addColorStop(0, "rgba(255,40,60,0)"); g.addColorStop(1, `rgba(255,40,60,${Math.min(0.55, s.hurt * 0.8)})`);
    x.fillStyle = g; x.fillRect(0, 0, W, H);
  }
  for (const h of s.hits) {
    x.save(); x.translate(W / 2, H / 2); x.rotate(h.a + Math.PI / 2);
    x.strokeStyle = `rgba(255,70,90,${Math.min(1, h.t * 1.5)})`; x.lineWidth = 10; x.lineCap = "round";
    x.beginPath(); x.arc(0, 0, 250, -Math.PI / 2 - 0.28, -Math.PI / 2 + 0.28); x.stroke(); x.restore();
  }

  // reticle: turns amber and closes in when the blaster would hit something
  const cx = W / 2, cy = H / 2, r = s.aim ? 10 : 15, col = s.aim ? WARN : "rgba(127,230,255,0.85)";
  x.strokeStyle = col; x.lineWidth = 2;
  for (let i = 0; i < 4; i++) { const a = (i * Math.PI) / 2 + Math.PI / 4; x.beginPath(); x.arc(cx, cy, r, a - 0.45, a + 0.45); x.stroke(); }
  x.fillStyle = col; x.fillRect(cx - 1, cy - 1, 2, 2);

  drawCompass(x, s);

  // top right: where you are
  x.textAlign = "right";
  x.fillStyle = "rgba(6,14,28,0.5)"; x.beginPath(); x.roundRect(W - 300, 22, 278, 52, 12); x.fill();
  label(x, s.level.toUpperCase(), W - 38, 42, "rgba(210,235,255,0.9)", 13);
  x.font = `bold 16px ${FONT}`; x.fillStyle = s.aliensLeft ? "#e8f2ff" : GOOD;
  x.fillText(s.aliensLeft ? `${s.aliensLeft} alien${s.aliensLeft === 1 ? "" : "s"} on this deck` : "Deck clear", W - 38, 64);
  x.textAlign = "left";

  drawComms(x, s);

  // bottom left: health and vest
  const PX = 26, PY = H - 112;
  panel(x, PX, PY, 300, 86, s.health <= 30 ? "rgba(255,93,108,0.7)" : CYAN_DIM);
  label(x, "SUIT INTEGRITY", PX + 18, PY + 24);
  const hp = Math.max(0, Math.ceil(s.health)), hcol = hp <= 30 ? DANGER : hp <= 60 ? WARN : CYAN;
  glowText(x, String(hp), PX + 18, PY + 68, 38, hcol);
  for (let i = 0; i < 10; i++) {
    const on = hp > i * 10; x.fillStyle = on ? hcol : "rgba(127,230,255,0.12)";
    x.beginPath(); x.roundRect(PX + 104 + i * 18, PY + 40, 13, 18, 3); x.fill();
  }
  label(x, "VEST", PX + 104, PY + 76, "rgba(170,210,240,0.7)", 10);
  x.fillStyle = "rgba(127,230,255,0.12)"; x.fillRect(PX + 144, PY + 70, 132, 6);
  x.fillStyle = "#c9d6e8"; x.fillRect(PX + 144, PY + 70, 132 * Math.min(1, s.vest / 100), 6);

  // pickups, listed just above the health panel
  s.feed.forEach((f, i) => {
    x.globalAlpha = Math.min(1, f.t * 2); x.font = `bold 15px ${FONT}`; x.fillStyle = "#dff6ff";
    x.fillText("+ " + f.text, PX + 6, PY - 14 - i * 22); x.globalAlpha = 1;
  });

  // bottom right: the blaster's cells
  const AX = W - 326, AY = H - 112;
  const empty = s.hasPistol && s.ammo === 0;
  panel(x, AX, AY, 300, 86, empty ? "rgba(255,93,108,0.7)" : CYAN_DIM);
  if (!s.hasPistol) {
    label(x, "KNIFE", AX + 18, AY + 24); x.font = `bold 17px ${FONT}`; x.fillStyle = "#c9d6e8"; x.fillText("Close range only · find the blaster", AX + 18, AY + 58);
  } else {
    label(x, s.weapon === "pistol" ? "BLASTER" : "KNIFE  (2: blaster)", AX + 18, AY + 24);
    for (let i = 0; i < 6; i++) {
      const on = i < s.ammo; x.fillStyle = on ? CYAN : "rgba(127,230,255,0.12)";
      if (on) { x.shadowColor = CYAN; x.shadowBlur = 10; }
      x.beginPath(); x.roundRect(AX + 18 + i * 26, AY + 36, 18, 30, 4); x.fill(); x.shadowBlur = 0;
    }
    glowText(x, `${s.ammo}/6`, AX + 282, AY + 64, 30, empty ? DANGER : CYAN, "right");
    if (s.ammo <= 2) { x.font = `bold 13px ${FONT}`; x.fillStyle = empty ? DANGER : WARN; x.fillText("R · answer questions to recharge", AX + 18, AY + 80); }
  }
  // keycard and suit timer sit above the blaster panel
  let kx = W - 30;
  if (s.keys.includes("blue")) {
    kx -= 46; x.fillStyle = "#1c9bff"; x.beginPath(); x.roundRect(kx, AY - 40, 46, 30, 5); x.fill();
    x.fillStyle = "#0a1830"; x.fillRect(kx + 6, AY - 32, 14, 9); x.fillStyle = "#eaf6ff"; x.fillRect(kx + 24, AY - 30, 16, 3); kx -= 10;
  }
  if (s.radTime > 0) { x.textAlign = "right"; x.font = `bold 15px ${FONT}`; x.fillStyle = "#f2d64a"; x.fillText(`RAD SUIT ${Math.ceil(s.radTime)}s`, kx, AY - 18); x.textAlign = "left"; }

  // a big name when you walk into a new room
  if (s.area && s.area.t > 0) {
    x.save(); x.globalAlpha = Math.min(1, s.area.t, (3 - s.area.t) * 3); x.textAlign = "center";
    x.font = `bold 30px ${FONT}`; x.letterSpacing = "8px";
    // a dark outline first, so the name reads against a bright white wall too
    x.strokeStyle = "rgba(4,10,24,0.75)"; x.lineWidth = 6; x.lineJoin = "round"; x.strokeText(s.area.name.toUpperCase(), W / 2, 170);
    x.fillStyle = "#eaf6ff"; x.shadowColor = CYAN; x.shadowBlur = 18; x.fillText(s.area.name.toUpperCase(), W / 2, 170); x.restore();
  }
  if (s.prompt) drawPrompt(x, s.prompt.key, s.prompt.text);
}

// Heading strip along the top, like a helmet's compass. The diamond is where
// the current objective is; at the edge it becomes an arrow saying "turn".
function drawCompass(x: Ctx, s: HudState) {
  const W = HUD_W, CW = 440, X = W / 2 - CW / 2, Y = 22, SPAN = (140 * Math.PI) / 180;
  x.save();
  x.fillStyle = "rgba(6,14,28,0.45)"; x.beginPath(); x.roundRect(X, Y, CW, 34, 10); x.fill();
  x.beginPath(); x.rect(X, Y, CW, 34); x.clip();
  // north is up the map (angle -90°), east is angle 0
  const names: Record<number, string> = { 0: "E", 90: "S", 180: "W", 270: "N" };
  for (let deg = 0; deg < 360; deg += 15) {
    let d = (deg * Math.PI) / 180 - s.heading; d = Math.atan2(Math.sin(d), Math.cos(d));
    if (Math.abs(d) > SPAN / 2) continue;
    const px = W / 2 + (d / (SPAN / 2)) * (CW / 2);
    const name = names[deg];
    x.fillStyle = name ? "#eaf6ff" : "rgba(170,210,240,0.55)";
    if (name) { x.font = `bold 15px ${FONT}`; x.textAlign = "center"; x.fillText(name, px, Y + 23); }
    else x.fillRect(px - 1, Y + (deg % 45 === 0 ? 10 : 14), 2, deg % 45 === 0 ? 14 : 8);
  }
  x.restore();
  x.fillStyle = CYAN; x.beginPath(); x.moveTo(W / 2 - 6, Y + 34); x.lineTo(W / 2 + 6, Y + 34); x.lineTo(W / 2, Y + 28); x.fill();
  if (s.objective) {
    let d = s.objective.bearing - s.heading; d = Math.atan2(Math.sin(d), Math.cos(d));
    const inside = Math.abs(d) <= SPAN / 2, px = W / 2 + Math.max(-1, Math.min(1, d / (SPAN / 2))) * (CW / 2 - 10);
    x.fillStyle = WARN; x.shadowColor = WARN; x.shadowBlur = 10; x.beginPath();
    if (inside) { x.moveTo(px, Y + 4); x.lineTo(px + 7, Y + 11); x.lineTo(px, Y + 18); x.lineTo(px - 7, Y + 11); }
    else { const dir = Math.sign(d); x.moveTo(px + dir * 8, Y + 17); x.lineTo(px - dir * 4, Y + 9); x.lineTo(px - dir * 4, Y + 25); }
    x.fill(); x.shadowBlur = 0;
    x.font = `bold 14px ${FONT}`; const t = `${s.objective.text} · ${Math.round(s.objective.dist)} m`, tw = x.measureText(t).width + 26;
    x.fillStyle = "rgba(6,14,28,0.6)"; x.beginPath(); x.roundRect(W / 2 - tw / 2, Y + 40, tw, 24, 12); x.fill();
    x.textAlign = "center"; x.fillStyle = "#ffe2a8"; x.fillText(t, W / 2, Y + 57); x.textAlign = "left";
  }
}

// The mascot's comms screen. The mascot itself is the site's own drawing,
// placed over this frame by the page (see GameClient), so an equipped outfit
// shows too; this draws the frame, the name and the message.
export const COMMS_BOX = { x: 26, y: 26, w: 104, h: 104 };
function drawComms(x: Ctx, s: HudState) {
  const B = COMMS_BOX, live = !!s.comms;
  x.fillStyle = "rgba(6,14,28,0.7)"; x.beginPath(); x.roundRect(B.x, B.y, B.w, B.h, 16); x.fill();
  x.strokeStyle = live ? CYAN : CYAN_DIM; x.lineWidth = live ? 2.5 : 1.5; x.stroke();
  if (live) { x.fillStyle = GOOD; x.beginPath(); x.arc(B.x + B.w - 12, B.y + 12, 5, 0, 7); x.fill(); } // "transmitting" light
  if (!s.comms) return;
  const { who, text, age, left } = s.comms;
  x.save(); x.globalAlpha = Math.min(1, age * 5, left * 2);
  x.font = `bold 18px ${FONT}`;
  // the message sits under the portrait, clear of the compass along the top
  const lines = wrap(x, text, 360).slice(0, 4);
  const shown = Math.floor(age * 60); // letters appear quickly, like a transmission
  const PX = B.x, PY = B.y + B.h + 10, PW = 396, PH = 44 + lines.length * 26;
  panel(x, PX, PY, PW, PH, CYAN);
  label(x, who.toUpperCase() + " · COMMS", PX + 18, PY + 24, CYAN, 11);
  let used = 0;
  lines.forEach((l, i) => {
    const part = l.slice(0, Math.max(0, shown - used)); used += l.length;
    x.fillStyle = "#eaf6ff"; x.font = `bold 18px ${FONT}`; x.fillText(part, PX + 18, PY + 50 + i * 26);
  });
  x.restore();
}

export function drawPrompt(x: Ctx, key: string, text: string) {
  const W = HUD_W, H = HUD_H;
  x.save(); x.font = `bold 13px ${FONT}`; const kw = x.measureText(key).width + 26;
  x.font = `bold 20px ${FONT}`; const w = x.measureText(text).width + kw + 44, X = W / 2 - w / 2, Y = H - 190;
  panel(x, X, Y, w, 48, "rgba(255,182,64,0.8)");
  x.fillStyle = WARN; x.beginPath(); x.roundRect(X + 12, Y + 10, kw, 28, 7); x.fill();
  x.fillStyle = "#1b222d"; x.font = `bold 13px ${FONT}`; x.fillText(key, X + 25, Y + 29);
  x.fillStyle = "#fff4dc"; x.font = `bold 20px ${FONT}`; x.fillText(text, X + kw + 26, Y + 31);
  x.restore();
}

export type QuizView = {
  kind: "reload" | "stomp"; topic: string; index: number; total: number; question: string; choices: string[];
  time: number; perQuestion: number; picked: number | null; correct: number; results: boolean[]; ammo: number;
};

function wrap(x: Ctx, text: string, maxW: number): string[] {
  const words = text.split(/\s+/); const lines: string[] = []; let line = "";
  for (const wd of words) { const t = line ? line + " " + wd : wd; if (x.measureText(t).width > maxW && line) { lines.push(line); line = wd; } else line = t; }
  if (line) lines.push(line); return lines;
}

export function drawQuiz(x: Ctx, q: QuizView) {
  const W = HUD_W;
  x.save();
  const stomp = q.kind === "stomp";
  if (stomp) { x.fillStyle = "rgba(3,6,13,0.5)"; x.fillRect(0, 0, W, HUD_H); }
  const PW = stomp ? 760 : 680, X = W / 2 - PW / 2, Y = stomp ? 80 : 150;
  x.font = `bold 30px ${FONT}`; const lines = wrap(x, q.question, PW - 64).slice(0, 3);
  const PH = 300 + lines.length * 38;
  const accent = stomp ? "#ffd65a" : CYAN;
  x.fillStyle = stomp ? "rgba(8,16,30,0.94)" : "rgba(6,14,28,0.84)"; x.beginPath(); x.roundRect(X, Y, PW, PH, 22); x.fill();
  x.strokeStyle = accent; x.lineWidth = 2.5; x.stroke();
  // a thin bright edge along the top, like a hologram's projector line
  x.fillStyle = accent; x.fillRect(X + 22, Y, PW - 44, 2);
  x.fillStyle = accent; x.font = `bold 32px ${FONT}`; const title = stomp ? "STOMP!" : "RELOAD"; x.fillText(title, X + 30, Y + 48); const titleW = x.measureText(title).width;
  x.fillStyle = "#c9d6e8"; x.font = `16px ${FONT}`;
  x.fillText(stomp ? "Get all 3 right to finish it off" : "Right: +3 cells · Wrong: nothing", X + 30 + titleW + 16, Y + 44); // measured, so no font can make them overlap
  x.font = `bold 13px ${FONT}`; const tw = x.measureText(q.topic).width + 22;
  x.fillStyle = "#1c6fd6"; x.beginPath(); x.roundRect(X + 30, Y + 64, tw, 26, 13); x.fill(); x.fillStyle = "#eaf6ff"; x.fillText(q.topic, X + 41, Y + 82);
  for (let i = 0; i < q.total; i++) {
    const cx = X + PW - 40 - (q.total - 1 - i) * 36, cy = Y + 40; x.beginPath(); x.arc(cx, cy, 12, 0, 7);
    if (i < q.results.length) { x.fillStyle = q.results[i] ? GOOD : DANGER; x.fill(); }
    else if (i === q.index) { x.strokeStyle = accent; x.lineWidth = 3; x.stroke(); }
    else { x.fillStyle = "#2a3647"; x.fill(); }
  }
  x.fillStyle = "#ffffff"; x.font = `bold 30px ${FONT}`;
  lines.forEach((l, i) => x.fillText(l, X + 30, Y + 132 + i * 38));
  const oy = Y + 112 + lines.length * 38;
  q.choices.forEach((o, i) => {
    const bx = X + 30 + (i % 2) * ((PW - 72) / 2 + 12), by = oy + Math.floor(i / 2) * 64, bw = (PW - 72) / 2;
    const picked = q.picked === i, isRight = i === q.correct, reveal = q.picked !== null;
    x.fillStyle = reveal && isRight ? "#1f8a57" : reveal && picked ? "#9b2c2c" : "rgba(22,32,46,0.9)";
    x.beginPath(); x.roundRect(bx, by, bw, 54, 12); x.fill();
    x.strokeStyle = reveal && isRight ? GOOD : "#3f4b5c"; x.lineWidth = 2; x.stroke();
    x.fillStyle = accent; x.font = `bold 17px ${FONT}`; x.fillText(String(i + 1), bx + 16, by + 34);
    x.fillStyle = "#ffffff"; x.font = `bold 19px ${FONT}`;
    let text = o; while (x.measureText(text).width > bw - 60 && text.length > 4) text = text.slice(0, -2);
    if (text !== o) text = text.slice(0, -1) + "…";
    x.fillText(text, bx + 44, by + 34);
  });
  const tY = Y + PH - 36; const frac = Math.max(0, q.time / q.perQuestion);
  x.fillStyle = "#2a3647"; x.beginPath(); x.roundRect(X + 30, tY, PW - 150, 10, 5); x.fill();
  x.fillStyle = q.time < 2 ? "#ff4d4d" : "#ffd65a"; x.beginPath(); x.roundRect(X + 30, tY, (PW - 150) * frac, 10, 5); x.fill();
  x.fillStyle = "#c9d6e8"; x.font = `bold 15px ${FONT}`; x.fillText(`${Math.max(0, q.time).toFixed(1)} s`, X + PW - 104, tY + 10);
  x.fillStyle = "#9fb3cf"; x.font = `13px ${FONT}`;
  x.fillText(stomp ? "Press 1–4. One wrong and it throws you off. Wrong answers go to “Revisit your mistakes”." : "Press 1–4 to answer. You can still move while you reload!", X + 30, tY + 28);
  x.restore();
}

// Start, paused, beaten, level complete: a glass panel in the middle of the visor.
export function drawScreen(x: Ctx, title: string, lines: string[], footer: string, accent = CYAN) {
  const W = HUD_W, H = HUD_H;
  x.save(); x.fillStyle = "rgba(2,6,14,0.62)"; x.fillRect(0, 0, W, H);
  x.font = `20px ${FONT}`; const widest = Math.max(...lines.map((l) => x.measureText(l).width), 520);
  const PW = widest + 120, PH = 170 + lines.length * 34, X = W / 2 - PW / 2, Y = H / 2 - PH / 2;
  x.fillStyle = "rgba(6,14,28,0.88)"; x.beginPath(); x.roundRect(X, Y, PW, PH, 24); x.fill();
  x.strokeStyle = accent; x.lineWidth = 2; x.stroke(); x.fillStyle = accent; x.fillRect(X + 30, Y, PW - 60, 3);
  x.textAlign = "center";
  x.fillStyle = accent; x.font = `bold 46px ${FONT}`; x.shadowColor = accent; x.shadowBlur = 20; x.fillText(title, W / 2, Y + 70); x.shadowBlur = 0;
  x.fillStyle = "#e8f2ff"; x.font = `20px ${FONT}`;
  lines.forEach((l, i) => x.fillText(l, W / 2, Y + 118 + i * 34));
  x.fillStyle = "#ffd65a"; x.font = `bold 21px ${FONT}`; x.fillText(footer, W / 2, Y + PH - 30);
  x.restore();
}

// The blaster (or the knife), drawn at game resolution so it is
// pixelated like the world. Held low on the right and angled in, rather than
// straight up the middle of the screen, and its six cells glow along the top:
// you can see how many shots are left by looking at the gun itself.
export function drawWeapon(x: Ctx, W: number, H: number, weapon: "knife" | "pistol", bob: number, kick: number, flash: number, ammo: number) {
  const s = W / 640;
  const poly = (col: string, pts: number[][]) => { x.fillStyle = col; x.beginPath(); pts.forEach(([a, b], i) => (i ? x.lineTo(a, b) : x.moveTo(a, b))); x.closePath(); x.fill(); };
  x.save();
  x.translate(W * 0.64 + Math.sin(bob) * 7 * s - kick * 6 * s, H + Math.abs(Math.cos(bob)) * 6 * s + kick * 10 * s); x.scale(s, s);
  if (weapon === "knife") {
    // a combat knife in a gloved hand, low on the right; a stab drives it up and in
    x.translate(30 - kick * 80, 10 - kick * 60);
    x.save(); x.rotate(-0.55 + kick * 0.35);
    poly("#8795a8", [[60, 40], [140, 40], [72, -60], [20, -46]]);         // forearm
    poly("#1c6fd6", [[16, -44], [76, -62], [70, -80], [10, -62]]);        // cuff
    poly("#e9eef4", [[2, -56], [12, -104], [70, -96], [78, -52]]);        // glove
    poly("#c3ccd8", [[6, -80], [74, -72], [76, -62], [4, -70]]);          // fingers
    poly("#1b222d", [[14, -96], [64, -90], [62, -74], [12, -80]]);        // grip
    poly("#2f3b4c", [[10, -108], [70, -100], [68, -92], [12, -98]]);      // guard
    // the blade: a long triangle with a bright edge and a fuller down the middle
    poly("#aeb9c8", [[30, -108], [58, -104], [44, -232], [34, -206]]);
    poly("#eef3f8", [[34, -106], [50, -104], [44, -232], [40, -200]]);
    poly("#8a96a6", [[38, -150], [46, -149], [44, -206], [40, -196]]);
    x.fillStyle = "#ffffff"; x.beginPath(); x.moveTo(44, -232); x.lineTo(48, -212); x.lineTo(44, -214); x.fill(); // the point catches the light
    x.restore(); x.restore(); return;
  }
  x.rotate(-0.1); x.scale(0.9, 0.9);
  if (flash > 0) {
    const g = x.createRadialGradient(-96, -128, 2, -96, -128, 46); g.addColorStop(0, "rgba(234,255,255,0.95)"); g.addColorStop(0.4, "rgba(127,230,255,0.75)"); g.addColorStop(1, "rgba(58,168,255,0)");
    x.fillStyle = g; x.beginPath(); x.arc(-96, -128, 46, 0, 7); x.fill();
  }
  poly("#5d6b80", [[40, 20], [160, 20], [112, -50], [30, -40]]);        // forearm, in the suit
  poly("#72819a", [[40, 20], [70, 20], [44, -42], [30, -40]]);
  poly("#1c6fd6", [[24, -36], [106, -46], [100, -62], [20, -50]]);      // suit cuff
  poly("#e6ecf2", [[-10, -100], [0, -142], [76, -132], [82, -98]]);     // rear housing
  poly("#b8c4d2", [[-10, -100], [82, -98], [78, -90], [-6, -92]]);
  poly("#d2dbe5", [[-92, -118], [-84, -140], [2, -138], [-4, -104]]);   // barrel
  poly("#f7fafc", [[-86, -138], [2, -136], [2, -132], [-84, -134]]);
  poly("#2a3342", [[20, -148], [60, -142], [60, -136], [20, -141]]);    // sight rail
  x.fillStyle = "#26303d"; x.beginPath(); x.ellipse(-92, -129, 6, 12, 0, 0, 7); x.fill(); // emitter
  x.fillStyle = "#3aa8ff"; x.beginPath(); x.ellipse(-93, -129, 3, 7, 0, 0, 7); x.fill();
  // six cells in a window on the side, lit for each shot left
  poly("#16202e", [[4, -129], [72, -121], [72, -111], [4, -119]]);
  for (let i = 0; i < 6; i++) {
    const cx = 7 + i * 11, cy = -127 + i * 1.3;
    poly(i < ammo ? "#7fe6ff" : "#2a3647", [[cx, cy], [cx + 8, cy + 1], [cx + 8, cy + 8], [cx, cy + 7]]);
  }
  poly("#d5dce6", [[-4, -52], [6, -100], [72, -94], [84, -50]]);        // glove round the grip
  poly("#b9c3d0", [[2, -78], [76, -72], [78, -64], [0, -70]]);
  poly("#2a3342", [[-20, -96], [-12, -106], [2, -102], [-6, -92]]);     // trigger guard
  x.restore();
}
