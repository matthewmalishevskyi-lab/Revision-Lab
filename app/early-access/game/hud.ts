// Everything drawn over the 3D view, on a sharp 1280x720 overlay: the status
// bar, crosshair, messages, the reload and stomp quizzes, and the big screens
// (start, paused, dead, level complete). The pistol in your hand is drawn on
// the low-resolution game canvas instead, so it is pixelated like the world.

type Ctx = CanvasRenderingContext2D;
export const HUD_W = 1280, HUD_H = 720, BAR_H = 92;

function digits(x: Ctx, text: string, X: number, Y: number, size: number, col: string) {
  x.save(); x.font = `bold ${size}px ui-monospace, "DejaVu Sans Mono", monospace`; x.fillStyle = "rgba(0,0,0,0.6)"; x.fillText(text, X + 3, Y + 3);
  x.fillStyle = col; x.shadowColor = col; x.shadowBlur = 12; x.fillText(text, X, Y); x.restore();
}

export type HudState = {
  health: number; vest: number; ammo: number; hasPistol: boolean; weapon: "fists" | "pistol";
  keys: string[]; radTime: number; level: string; hurt: number; flash: number; toast: string; toastT: number;
  prompt: string; aliensLeft: number;
};

export function drawHud(x: Ctx, s: HudState) {
  const W = HUD_W, H = HUD_H, Y = H - BAR_H;
  // damage flash
  if (s.hurt > 0) { const g = x.createRadialGradient(W / 2, (H - BAR_H) / 2, 200, W / 2, (H - BAR_H) / 2, 700); g.addColorStop(0, "rgba(255,0,0,0)"); g.addColorStop(1, `rgba(255,30,30,${Math.min(0.6, s.hurt)})`); x.fillStyle = g; x.fillRect(0, 0, W, H - BAR_H); }
  if (s.radTime > 0) { x.fillStyle = "rgba(255,214,90,0.06)"; x.fillRect(0, 0, W, H - BAR_H); }
  // crosshair
  const cy = (H - BAR_H) / 2;
  x.strokeStyle = "rgba(127,230,255,0.9)"; x.lineWidth = 2; x.beginPath();
  x.moveTo(W / 2 - 12, cy); x.lineTo(W / 2 - 4, cy); x.moveTo(W / 2 + 4, cy); x.lineTo(W / 2 + 12, cy);
  x.moveTo(W / 2, cy - 12); x.lineTo(W / 2, cy - 4); x.moveTo(W / 2, cy + 4); x.lineTo(W / 2, cy + 12); x.stroke();

  const g = x.createLinearGradient(0, Y, 0, H); g.addColorStop(0, "#c9d3de"); g.addColorStop(0.08, "#9eabbb"); g.addColorStop(1, "#6f7d90");
  x.fillStyle = g; x.fillRect(0, Y, W, BAR_H);
  x.fillStyle = "#3aa8ff"; x.fillRect(0, Y, W, 3);
  const box = (bx: number, bw: number, label: string) => {
    x.fillStyle = "#16202e"; x.fillRect(bx, Y + 12, bw, BAR_H - 22);
    x.strokeStyle = "#e4eaf1"; x.lineWidth = 2; x.strokeRect(bx, Y + 12, bw, BAR_H - 22);
    x.fillStyle = "#7f98bd"; x.font = "bold 13px system-ui, sans-serif"; x.fillText(label, bx + 10, Y + 28);
  };
  box(16, 220, "AMMO");
  if (!s.hasPistol) { x.fillStyle = "#56647a"; x.font = "bold 20px system-ui, sans-serif"; x.fillText("no weapon yet", 30, Y + 64); }
  else {
    digits(x, String(s.ammo), 30, Y + 74, 44, s.ammo === 0 ? "#ff6b6b" : "#7fe6ff");
    for (let i = 0; i < 6; i++) { x.fillStyle = i < s.ammo ? "#3aa8ff" : "#2a3647"; x.fillRect(96 + i * 20, Y + 40, 14, 24); }
    x.fillStyle = "#c9d6e8"; x.font = "13px system-ui, sans-serif"; x.fillText("R: answer to reload", 96, Y + 80);
  }
  box(252, 200, "HEALTH"); digits(x, `${Math.max(0, Math.ceil(s.health))}%`, 266, Y + 74, 40, s.health <= 30 ? "#ff6b6b" : "#eaf6ff");
  const fw = 96; box(W / 2 - fw / 2, fw, ""); // the mascot's face sits here (drawn by the page)
  box(W / 2 + 64, 200, "VEST"); digits(x, `${Math.ceil(s.vest)}%`, W / 2 + 78, Y + 74, 40, "#9fb0c4");
  box(W - 380, 364, "WEAPONS");
  const slots: [string, string, boolean, boolean][] = [["1", "FISTS", true, s.weapon === "fists"], ["2", "PISTOL", s.hasPistol, s.weapon === "pistol"]];
  slots.forEach(([n, name, have, on], i) => {
    const sx = W - 368 + i * 70; x.fillStyle = on ? "#3aa8ff" : have ? "#1c6fd6" : "#2a3647"; x.fillRect(sx, Y + 38, 62, 36);
    x.fillStyle = have ? "#eaf6ff" : "#56647a"; x.font = "bold 14px system-ui, sans-serif"; x.fillText(n, sx + 6, Y + 54); x.font = "10px system-ui, sans-serif"; x.fillText(name, sx + 6, Y + 68);
  });
  // keys and rad suit
  let kx = W - 220;
  if (s.keys.includes("blue")) { x.fillStyle = "#1c9bff"; x.beginPath(); x.roundRect(kx, Y + 40, 40, 28, 4); x.fill(); x.fillStyle = "#0a1830"; x.fillRect(kx + 5, Y + 47, 12, 8); kx += 50; }
  if (s.radTime > 0) { x.fillStyle = "#f2d64a"; x.font = "bold 14px system-ui, sans-serif"; x.fillText(`RAD SUIT ${Math.ceil(s.radTime)}s`, kx, Y + 60); }

  // top-left: level name and aliens left
  x.font = "bold 16px system-ui, sans-serif"; const label = `${s.level} · ${s.aliensLeft} alien${s.aliensLeft === 1 ? "" : "s"} left`;
  const lw = x.measureText(label).width + 24; x.fillStyle = "rgba(3,6,13,0.6)"; x.beginPath(); x.roundRect(16, 16, lw, 32, 10); x.fill();
  x.fillStyle = "#e8f2ff"; x.fillText(label, 28, 38);
  if (s.toastT > 0 && s.toast) {
    x.save(); x.globalAlpha = Math.min(1, s.toastT * 2); x.font = "bold 20px system-ui, sans-serif";
    const tw = x.measureText(s.toast).width + 36; x.fillStyle = "rgba(3,6,13,0.8)"; x.beginPath(); x.roundRect(W / 2 - tw / 2, 70, tw, 44, 12); x.fill();
    x.fillStyle = "#fff7da"; x.fillText(s.toast, W / 2 - tw / 2 + 18, 99); x.restore();
  }
  if (s.prompt) drawPrompt(x, s.prompt);
}

export function drawPrompt(x: Ctx, text: string) {
  const W = HUD_W, H = HUD_H;
  x.save(); x.font = "bold 22px system-ui, sans-serif"; const w = x.measureText(text).width + 124, X = W / 2 - w / 2, Y = H - BAR_H - 80;
  x.fillStyle = "rgba(3,6,13,0.82)"; x.beginPath(); x.roundRect(X, Y, w, 52, 14); x.fill();
  x.strokeStyle = "#ffd65a"; x.lineWidth = 2; x.stroke();
  x.fillStyle = "#ffd65a"; x.beginPath(); x.roundRect(X + 14, Y + 10, 82, 32, 7); x.fill();
  x.fillStyle = "#1b222d"; x.font = "bold 16px system-ui, sans-serif"; x.fillText("SPACE", X + 25, Y + 32);
  x.fillStyle = "#fff7da"; x.font = "bold 22px system-ui, sans-serif"; x.fillText(text, X + 108, Y + 34);
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
  if (q.kind === "stomp") { x.fillStyle = "rgba(3,6,13,0.5)"; x.fillRect(0, 0, W, HUD_H - BAR_H); }
  const stomp = q.kind === "stomp";
  const PW = stomp ? 760 : 680, X = W / 2 - PW / 2, Y = stomp ? 50 : 60;
  x.font = "bold 30px system-ui, sans-serif"; const lines = wrap(x, q.question, PW - 64).slice(0, 3);
  const PH = 300 + lines.length * 38;
  x.fillStyle = stomp ? "rgba(8,16,30,0.95)" : "rgba(8,16,30,0.88)"; x.beginPath(); x.roundRect(X, Y, PW, PH, 22); x.fill();
  x.strokeStyle = stomp ? "#ffd65a" : "#7fe6ff"; x.lineWidth = 3; x.stroke();
  x.fillStyle = stomp ? "#ffd65a" : "#7fe6ff"; x.font = "bold 32px system-ui, sans-serif"; const title = stomp ? "STOMP!" : "RELOAD"; x.fillText(title, X + 30, Y + 48); const titleW = x.measureText(title).width;
  x.fillStyle = "#c9d6e8"; x.font = "16px system-ui, sans-serif";
  x.fillText(stomp ? "Get all 3 right to finish it off" : "Right: +3 shots · Wrong: +1 shot", X + 30 + titleW + 16, Y + 44); // measured, so no font can make them overlap
  x.font = "bold 13px system-ui, sans-serif"; const tw = x.measureText(q.topic).width + 22;
  x.fillStyle = "#1c6fd6"; x.beginPath(); x.roundRect(X + 30, Y + 64, tw, 26, 13); x.fill(); x.fillStyle = "#eaf6ff"; x.fillText(q.topic, X + 41, Y + 82);
  for (let i = 0; i < q.total; i++) {
    const cx = X + PW - 40 - (q.total - 1 - i) * 36, cy = Y + 40; x.beginPath(); x.arc(cx, cy, 12, 0, 7);
    if (i < q.results.length) { x.fillStyle = q.results[i] ? "#2fd48a" : "#ff6b6b"; x.fill(); }
    else if (i === q.index) { x.strokeStyle = "#7fe6ff"; x.lineWidth = 3; x.stroke(); }
    else { x.fillStyle = "#2a3647"; x.fill(); }
  }
  x.fillStyle = "#ffffff"; x.font = "bold 30px system-ui, sans-serif";
  lines.forEach((l, i) => x.fillText(l, X + 30, Y + 132 + i * 38));
  const oy = Y + 112 + lines.length * 38;
  q.choices.forEach((o, i) => {
    const bx = X + 30 + (i % 2) * ((PW - 72) / 2 + 12), by = oy + Math.floor(i / 2) * 64, bw = (PW - 72) / 2;
    const picked = q.picked === i, isRight = i === q.correct, reveal = q.picked !== null;
    x.fillStyle = reveal && isRight ? "#1f8a57" : reveal && picked ? "#9b2c2c" : "#16202e";
    x.beginPath(); x.roundRect(bx, by, bw, 54, 12); x.fill();
    x.strokeStyle = reveal && isRight ? "#2fd48a" : "#3f4b5c"; x.lineWidth = 2; x.stroke();
    x.fillStyle = "#7fe6ff"; x.font = "bold 17px system-ui, sans-serif"; x.fillText(String(i + 1), bx + 16, by + 34);
    x.fillStyle = "#ffffff"; x.font = "bold 19px system-ui, sans-serif";
    let label = o; while (x.measureText(label).width > bw - 60 && label.length > 4) label = label.slice(0, -2);
    if (label !== o) label = label.slice(0, -1) + "…";
    x.fillText(label, bx + 44, by + 34);
  });
  const tY = Y + PH - 36; const frac = Math.max(0, q.time / q.perQuestion);
  x.fillStyle = "#2a3647"; x.beginPath(); x.roundRect(X + 30, tY, PW - 150, 10, 5); x.fill();
  x.fillStyle = q.time < 2 ? "#ff4d4d" : "#ffd65a"; x.beginPath(); x.roundRect(X + 30, tY, (PW - 150) * frac, 10, 5); x.fill();
  x.fillStyle = "#c9d6e8"; x.font = "bold 15px system-ui, sans-serif"; x.fillText(`${Math.max(0, q.time).toFixed(1)} s`, X + PW - 104, tY + 10);
  x.fillStyle = "#9fb3cf"; x.font = "13px system-ui, sans-serif";
  x.fillText(stomp ? "Press 1–4. One wrong and it throws you off. Wrong answers go to “Revisit your mistakes”." : "Press 1–4 to answer. You can still move while you reload!", X + 30, tY + 28);
  x.restore();
}

export function drawScreen(x: Ctx, title: string, lines: string[], footer: string, accent = "#7fe6ff") {
  const W = HUD_W, H = HUD_H;
  x.save(); x.fillStyle = "rgba(3,6,13,0.78)"; x.fillRect(0, 0, W, H);
  x.fillStyle = accent; x.font = "bold 56px system-ui, sans-serif"; const tw = x.measureText(title).width; x.fillText(title, W / 2 - tw / 2, 190);
  x.fillStyle = "#e8f2ff"; x.font = "20px system-ui, sans-serif";
  lines.forEach((l, i) => { const w = x.measureText(l).width; x.fillText(l, W / 2 - w / 2, 260 + i * 34); });
  x.fillStyle = "#ffd65a"; x.font = "bold 22px system-ui, sans-serif"; const fw = x.measureText(footer).width; x.fillText(footer, W / 2 - fw / 2, 260 + lines.length * 34 + 50);
  x.restore();
}

// The pistol (or fists) in your hand, drawn at game resolution.
export function drawWeapon(x: Ctx, W: number, H: number, weapon: "fists" | "pistol", bob: number, kick: number, flash: number) {
  const s = W / 640;
  x.save(); x.translate(W * 0.5 + 40 * s + Math.sin(bob) * 6 * s, H + Math.abs(Math.cos(bob)) * 5 * s + kick * 18 * s); x.scale(s, s);
  const poly = (col: string, pts: number[][]) => { x.fillStyle = col; x.beginPath(); pts.forEach(([a, b], i) => (i ? x.lineTo(a, b) : x.moveTo(a, b))); x.closePath(); x.fill(); };
  if (weapon === "fists") {
    poly("#18202b", [[-60, 0], [-50, -58], [-8, -64], [0, 0]]); poly("#2f3b4c", [[-54, -50], [-10, -60], [-8, -70], [-52, -64]]);
    poly("#18202b", [[40, 0], [48, -50], [88, -44], [96, 0]]); poly("#2f3b4c", [[46, -44], [88, -38], [90, -52], [48, -58]]);
    x.restore(); return;
  }
  if (flash > 0) {
    const g = x.createRadialGradient(0, -130, 2, 0, -130, 40); g.addColorStop(0, "rgba(234,255,255,0.95)"); g.addColorStop(0.4, "rgba(127,230,255,0.8)"); g.addColorStop(1, "rgba(58,168,255,0)");
    x.fillStyle = g; x.beginPath(); x.arc(0, -130, 40, 0, 7); x.fill();
  }
  poly("#18202b", [[-40, 0], [-30, -44], [30, -44], [44, 0]]);
  poly("#26303d", [[-36, 0], [-28, -40], [-12, -42], [-16, 0]]);
  poly("#2f3b4c", [[16, -46], [34, -44], [36, -30], [18, -30]]); poly("#2f3b4c", [[18, -30], [37, -28], [38, -16], [20, -16]]); poly("#2f3b4c", [[20, -16], [38, -14], [38, -4], [22, -4]]);
  poly("#1b222d", [[-30, -46], [-14, -56], [-8, -46], [-24, -38]]);
  poly("#3f4b5c", [[-26, -46], [-16, -118], [16, -118], [26, -46]]);
  poly("#5f6e83", [[-22, -50], [-14, -114], [14, -114], [22, -50]]);
  poly("#e4eaf1", [[-18, -58], [-12, -108], [-5, -108], [-8, -58]]);
  poly("#e4eaf1", [[8, -58], [5, -108], [12, -108], [18, -58]]);
  poly("#1c6fd6", [[-5, -60], [-3, -110], [3, -110], [5, -60]]);
  poly("#7fe6ff", [[-2, -64], [-1, -108], [1, -108], [2, -64]]);
  poly("#1b222d", [[-14, -50], [-14, -60], [-4, -60], [-4, -54], [4, -54], [4, -60], [14, -60], [14, -50]]);
  poly("#0a0d12", [[-9, -118], [-8, -126], [8, -126], [9, -118]]);
  poly("#3aa8ff", [[-6, -120], [-5, -124], [5, -124], [6, -120]]);
  x.fillStyle = "#eaffff"; x.fillRect(-1, -132, 2, 6);
  x.restore();
}
