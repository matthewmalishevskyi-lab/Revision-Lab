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

// ── touch controls ───────────────────────────────────────────────────────────
//
// Drawn on the visor canvas rather than as HTML over it, for one reason that
// decides everything else: the picture is letterboxed inside whatever shape the
// phone is, so a button positioned in CSS would drift away from the view it
// belongs to. Living in the same 1280x720 space as the rest of the visor, a
// button is always exactly where it looks like it is.
//
// The same list is used to DRAW them and to work out what a finger hit, so the
// two cannot disagree — the class of bug where a button moves and its hit box
// stays behind.
export type TouchButton = { id: "fire" | "jump" | "reload" | "use" | "nade" | "swap"; x: number; y: number; r: number; label: string; hint: string };

/** Where the movement stick sits, and how far the knob can travel. */
// ⚠️ `r - knob` is the whole travel of the thumb, in VISOR pixels, and the
// visor is about 0.44 of a phone's CSS pixels — so the old 92/38 gave a total
// throw of 24 CSS px, inside which the walk band was 17px and a decisive push
// was always a run. On the dark deck, where walking rather than running IS the
// mechanic, a phone player was permanently EXPOSED. 112/42 gives 31 CSS px.
export const TOUCH_STICK = { x: 190, y: HUD_H - 230, r: 112, knob: 42 };

// ⚠️ The radii are in VISOR pixels and the visor is scaled down to fit the
// phone, so the rule is not "44 in here" — it is 44 CSS pixels on the
// smallest screen the game runs on. A sideways iPhone SE gives the 1280-wide
// visor about 568 real pixels, a scale of 0.44, so nothing may be smaller
// than about r=50. Hence 52 for the small ones rather than the 40 they
// started at, which came out at 35 CSS pixels and would have been the third
// time this project shipped a tap target under the minimum.
const TOUCH_BUTTONS: TouchButton[] = [
  { id: "fire", x: HUD_W - 170, y: HUD_H - 230, r: 66, label: "FIRE", hint: "shoot" },
  { id: "jump", x: HUD_W - 320, y: HUD_H - 250, r: 56, label: "JUMP", hint: "jump / stomp" },
  { id: "reload", x: HUD_W - 150, y: HUD_H - 400, r: 52, label: "R", hint: "answer to reload" },
  { id: "use", x: HUD_W - 300, y: HUD_H - 420, r: 52, label: "E", hint: "use" },
  { id: "nade", x: HUD_W - 430, y: HUD_H - 330, r: 52, label: "G", hint: "grenade" },
  // ⚠️ A phone has no "2" or "3" key, so without this button a player who
  // picked the rifle up could never go back to the blaster — and the blaster
  // is the better weapon per question, which is half the choice the rifle
  // exists to create. It only appears once there is a second gun to swap to.
  { id: "swap", x: HUD_W - 470, y: HUD_H - 470, r: 52, label: "⇄", hint: "swap gun" },
];

/** The buttons a given moment actually offers — no G without grenades, and no
 *  swap until you are carrying two guns. */
export function touchButtons(opts: { grenades: number; guns?: number }): TouchButton[] {
  return TOUCH_BUTTONS.filter((b) =>
    (b.id !== "nade" || opts.grenades > 0) && (b.id !== "swap" || (opts.guns ?? 0) > 1));
}

export function drawTouchControls(x: Ctx, s: { grenades: number; guns?: number; held: Set<string>; stick: { dx: number; dy: number; ox?: number; oy?: number } | null }) {
  x.save();
  // The movement stick. ⚠️ Drawn around WHERE THE THUMB LANDED, not around the
  // fixed centre: the grab area is 1.35x the ring, so grabbing its outer edge
  // used to render the knob up to half a ring away from the finger and hit its
  // stop while the thumb was still travelling.
  const st = TOUCH_STICK;
  const cx = s.stick?.ox ?? st.x, cy = s.stick?.oy ?? st.y;
  x.fillStyle = "rgba(4,10,22,0.42)"; x.beginPath(); x.arc(cx, cy, st.r, 0, 7); x.fill();
  x.strokeStyle = "rgba(127,230,255,0.45)"; x.lineWidth = 2.5; x.stroke();
  const kx = cx + (s.stick?.dx ?? 0) * (st.r - st.knob), ky = cy + (s.stick?.dy ?? 0) * (st.r - st.knob);
  x.fillStyle = s.stick ? "rgba(127,230,255,0.45)" : "rgba(127,230,255,0.22)";
  x.beginPath(); x.arc(kx, ky, st.knob, 0, 7); x.fill();
  x.strokeStyle = "rgba(200,240,255,0.7)"; x.lineWidth = 2; x.stroke();

  for (const b of touchButtons(s)) {
    const down = s.held.has(b.id);
    // dark enough to read against a white wall, which is most of deck 1
    x.fillStyle = down ? "rgba(127,230,255,0.4)" : "rgba(4,10,22,0.58)";
    x.beginPath(); x.arc(b.x, b.y, b.r, 0, 7); x.fill();
    x.strokeStyle = down ? CYAN : "rgba(127,230,255,0.55)"; x.lineWidth = 3; x.stroke();
    x.textAlign = "center"; x.textBaseline = "middle";
    x.fillStyle = "#eaf6ff"; x.font = `bold ${b.label.length > 2 ? 20 : 26}px ${FONT}`;
    x.fillText(b.label, b.x, b.y);
  }
  x.textAlign = "left"; x.textBaseline = "alphabetic";
  x.restore();
}

type Poly = (col: string, pts: number[][]) => void;
function drawRifle(x: Ctx, _s: number, _bob: number, kick: number, flash: number, ammo: number, mag: number, poly: Poly) {
  x.rotate(-0.07); x.scale(0.9, 0.9);
  if (flash > 0) {
    const g = x.createRadialGradient(-168, -140, 2, -168, -140, 40);
    g.addColorStop(0, "rgba(255,248,224,0.95)"); g.addColorStop(0.4, "rgba(255,182,64,0.75)"); g.addColorStop(1, "rgba(255,140,30,0)");
    x.fillStyle = g; x.beginPath(); x.arc(-168, -140, 40, 0, 7); x.fill();
  }
  poly("#5d6b80", [[40, 20], [160, 20], [112, -50], [30, -40]]);          // forearm, in the suit
  poly("#72819a", [[40, 20], [70, 20], [44, -42], [30, -40]]);
  poly("#1c6fd6", [[24, -36], [106, -46], [100, -62], [20, -50]]);        // suit cuff
  poly("#3a4556", [[44, -96], [120, -92], [124, -120], [48, -126]]);      // stock, back to the shoulder
  poly("#e6ecf2", [[-30, -104], [-22, -146], [60, -138], [52, -100]]);    // receiver
  poly("#b8c4d2", [[-30, -104], [52, -100], [50, -92], [-28, -96]]);
  poly("#d2dbe5", [[-162, -124], [-156, -142], [-20, -140], [-26, -110]]); // the long barrel
  poly("#f7fafc", [[-156, -140], [-20, -138], [-20, -134], [-154, -136]]);
  poly("#2a3342", [[-70, -150], [-10, -144], [-10, -138], [-70, -144]]);  // sight rail
  poly("#2a3342", [[-150, -152], [-132, -150], [-132, -142], [-150, -144]]); // front sight
  x.fillStyle = "#26303d"; x.beginPath(); x.ellipse(-162, -131, 6, 11, 0, 0, 7); x.fill(); // muzzle
  x.fillStyle = "#ffb640"; x.beginPath(); x.ellipse(-163, -131, 3, 6, 0, 0, 7); x.fill();
  // the magazine hanging under the receiver, and the rounds left showing in it
  poly("#1b222d", [[-14, -96], [26, -92], [36, -24], [-6, -28]]);
  poly("#0e141d", [[-8, -90], [20, -87], [28, -32], [0, -35]]);
  for (let i = 0; i < mag; i++) {
    const t = i / Math.max(1, mag - 1), cy = -84 + t * 44, cx = -4 + t * 5;
    poly(i < ammo ? "#ffb640" : "#2a3647", [[cx, cy], [cx + 20, cy + 2], [cx + 20, cy + 5], [cx, cy + 3]]);
  }
  poly("#d5dce6", [[32, -56], [40, -100], [96, -95], [106, -54]]);        // glove round the grip
  poly("#b9c3d0", [[36, -82], [100, -77], [102, -69], [34, -75]]);
  poly("#2a3342", [[6, -100], [16, -108], [32, -103], [22, -94]]);        // trigger guard
  // a thin amber charge strip along the receiver, so the gun itself shows empty
  poly(ammo > 0 ? "#ffb640" : "#4a3a1c", [[-18, -132], [44, -128], [44, -123], [-18, -127]]);
  if (kick > 0.01) { x.globalAlpha = Math.min(0.5, kick); x.fillStyle = "#ffd79a"; x.beginPath(); x.ellipse(-20, -150, 16, 7, 0, 0, 7); x.fill(); x.globalAlpha = 1; }
}

/** Where on an alien the crosshair is sitting. See aimTarget() in game.ts. */
export type AimZone = "head" | "torso" | "legs";

export type HudState = {
  health: number; vest: number; ammo: number; hasPistol: boolean; weapon: "knife" | "pistol" | "rifle";
  hasRifle: boolean; rifleAmmo: number; rifleMag: number;
  /** Full-damage knife kills left, and how many there are to start with. */
  knife: number; knifeMax: number;
  keys: string[]; radTime: number; level: string; aliensLeft: number;
  grenades: number;
  /** 1 → 0 just after a shot connected; `hitKill` makes the marker a kill mark. */
  hitMark: number; hitKill: boolean;
  /** 0–1: how visible the player is right now (see tickExposure in game.ts). */
  exposure: number;
  hurt: number; hits: { a: number; t: number }[];
  /** null when a shot would not connect; otherwise WHERE it would land. */
  aim: AimZone | null;
  heading: number; objective: { text: string; bearing: number; dist: number } | null;
  comms: { who: string; text: string; age: number; left: number } | null;
  feed: { text: string; t: number }[];
  area: { name: string; t: number } | null;
  prompt: { key: string; text: string } | null;
  /** Draw the on-screen stick and buttons (a touchscreen, no keyboard). */
  touch?: { grenades: number; guns?: number; held: Set<string>; stick: { dx: number; dy: number; ox?: number; oy?: number } | null } | null;
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

  // Reticle: closes in when a shot would hit something, and says WHERE.
  // ⚠️ The zone has to be readable before you pull the trigger or hit zones
  // are just the game being unfair — the same argument the HIDDEN/SEEN bar
  // settled for the exposure rule on the cargo hold. Three states, told apart
  // by colour AND by shape, never colour alone: a head shot gets a ring, legs
  // get a wider, dimmer bracket, a body shot is the amber it has always been.
  const cx = W / 2, cy = H / 2;
  const zoneCol: Record<AimZone, string> = { head: "#ffffff", torso: WARN, legs: "rgba(255,182,64,0.55)" };
  const r = s.aim ? (s.aim === "legs" ? 13 : 10) : 15;
  const col = s.aim ? zoneCol[s.aim] : "rgba(127,230,255,0.85)";
  x.strokeStyle = col; x.lineWidth = s.aim === "head" ? 2.5 : 2;
  for (let i = 0; i < 4; i++) { const a = (i * Math.PI) / 2 + Math.PI / 4; x.beginPath(); x.arc(cx, cy, r, a - 0.45, a + 0.45); x.stroke(); }
  if (s.aim === "head") { x.lineWidth = 1.5; x.beginPath(); x.arc(cx, cy, 4.5, 0, 7); x.stroke(); }
  x.fillStyle = col; x.fillRect(cx - 1, cy - 1, 2, 2);

  // hit marker: four diagonal ticks that snap out and fade. It is the one bit
  // of feedback that tells you a shot LANDED rather than went past — red and
  // bigger when that shot finished the alien off.
  if (s.hitMark > 0) {
    const t = Math.min(1, s.hitMark), spread = (s.hitKill ? 16 : 11) + (1 - t) * 10;
    x.save(); x.globalAlpha = t; x.lineCap = "round";
    x.strokeStyle = s.hitKill ? "#ff8a5c" : "#ffffff"; x.lineWidth = s.hitKill ? 4 : 3;
    x.shadowColor = x.strokeStyle as string; x.shadowBlur = 8;
    for (let i = 0; i < 4; i++) {
      const a = (i * Math.PI) / 2 + Math.PI / 4, ca = Math.cos(a), sa = Math.sin(a);
      x.beginPath(); x.moveTo(cx + ca * spread, cy + sa * spread); x.lineTo(cx + ca * (spread + 9), cy + sa * (spread + 9)); x.stroke();
    }
    x.restore();
  }

  drawExposure(x, s.exposure);

  drawCompass(x, s);

  // top right: where you are
  x.textAlign = "right";
  x.fillStyle = "rgba(6,14,28,0.5)"; x.beginPath(); x.roundRect(W - 300, 22, 278, 52, 12); x.fill();
  // ⚠️ shrink to fit rather than trusting the title to be short: "LEVEL 4 —
  // CARGO HOLD" at 13px with 2px letter spacing runs straight out of the panel.
  x.save(); x.font = `bold 13px ${FONT}`; x.letterSpacing = "2px";
  const titleW = x.measureText(s.level.toUpperCase()).width; x.restore();
  label(x, s.level.toUpperCase(), W - 38, 42, "rgba(210,235,255,0.9)", titleW > 246 ? Math.max(9, (13 * 246) / titleW) : 13);
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

  // bottom right: whichever gun is in your hands, and what is left in it.
  // ⚠️ ONE panel, not two side by side. The rifle holds fifteen rounds and the
  // blaster six; drawn as two permanent panels the bottom-right corner is a
  // wall of pips on a deck where you are also reading a SEEN bar and a model
  // answer. The panel shows the weapon you are HOLDING and names the other.
  const AX = W - 326, AY = H - 112;
  const RIFLE_AMBER = "#ffb640", RIFLE_DIM = "rgba(255,182,64,0.45)";
  const rifleOut = s.weapon === "rifle" && s.hasRifle;
  const now = rifleOut ? s.rifleAmmo : s.ammo, mag = rifleOut ? s.rifleMag : 6;
  const armed = rifleOut ? s.hasRifle : s.hasPistol;
  const tint = rifleOut ? RIFLE_AMBER : CYAN, tintDim = rifleOut ? RIFLE_DIM : CYAN_DIM;
  const empty = armed && now === 0;
  panel(x, AX, AY, 300, 86, empty ? "rgba(255,93,108,0.7)" : tintDim);
  // ⚠️ THE KNIFE'S EDGE HAS TO BE ON THE VISOR. It is five kills and then it
  // is nearly useless, and a limit you cannot see is the game being unfair —
  // the same argument the SEEN bar settled for the exposure rule.
  const knifeOut = s.weapon === "knife";
  if (knifeOut || !s.hasPistol && !s.hasRifle) {
    const blunt = s.knife <= 0;
    label(x, blunt ? "KNIFE  (blunt)" : "KNIFE", AX + 18, AY + 24);
    for (let i = 0; i < s.knifeMax; i++) {
      const on = i < s.knife; x.fillStyle = on ? "#cfe2f2" : "rgba(207,226,242,0.12)";
      if (on) { x.shadowColor = "#cfe2f2"; x.shadowBlur = 8; }
      x.beginPath(); x.roundRect(AX + 18 + i * 26, AY + 36, 18, 30, 4); x.fill(); x.shadowBlur = 0;
    }
    glowText(x, `${Math.max(0, s.knife)}/${s.knifeMax}`, AX + 282, AY + 64, 30, blunt ? DANGER : "#cfe2f2", "right");
    x.font = `bold 13px ${FONT}`; x.fillStyle = blunt ? DANGER : "#9fb3cf";
    x.fillText(blunt ? "Blunt — five swings a kill. Answer and shoot." : (s.hasPistol || s.hasRifle ? "Sharp kills left · 2: blaster" : "Close range only · find the blaster"), AX + 18, AY + 80);
  } else if (!s.hasPistol && !s.hasRifle) {
    label(x, "KNIFE", AX + 18, AY + 24); x.font = `bold 17px ${FONT}`; x.fillStyle = "#c9d6e8"; x.fillText("Close range only · find the blaster", AX + 18, AY + 58);
  } else {
    // what the other weapon key would give you, named rather than assumed
    const other = s.weapon === "knife"
      ? (s.hasRifle ? "(2: blaster · 3: rifle)" : "(2: blaster)")
      : s.hasPistol && s.hasRifle ? (rifleOut ? "(2: blaster)" : "(3: rifle)") : "";
    const name = s.weapon === "knife" ? "KNIFE" : rifleOut ? "RIFLE" : "BLASTER";
    label(x, `${name}${other ? "  " + other : ""}`, AX + 18, AY + 24);
    // ⚠️ The pips are sized to the magazine, not drawn at a fixed width, or
    // fifteen rounds at the blaster's 26px pitch runs 90px off the panel.
    const pitch = Math.min(26, 264 / mag), pw = Math.max(5, pitch - 8);
    for (let i = 0; i < mag; i++) {
      const on = i < now; x.fillStyle = on ? tint : rifleOut ? "rgba(255,182,64,0.12)" : "rgba(127,230,255,0.12)";
      if (on) { x.shadowColor = tint; x.shadowBlur = 10; }
      x.beginPath(); x.roundRect(AX + 18 + i * pitch, AY + 36, pw, 30, 4); x.fill(); x.shadowBlur = 0;
    }
    glowText(x, `${now}/${mag}`, AX + 282, AY + 64, 30, empty ? DANGER : tint, "right");
    if (now <= mag / 3) { x.font = `bold 13px ${FONT}`; x.fillStyle = empty ? DANGER : WARN; x.fillText("R · answer questions to recharge", AX + 18, AY + 80); }
  }
  // keycard and suit timer sit above the blaster panel
  let kx = W - 30;
  // ⚠️ ONE CHIP PER CARD, not a single blue one. Deck 7 has two locks, and a
  // visor that cannot show you which card you are already carrying makes the
  // second one a guess.
  const CARD_COL: Record<string, string> = { blue: "#1c9bff", red: "#ff5d6c" };
  for (const k of s.keys) {
    kx -= 46; x.fillStyle = CARD_COL[k] ?? "#9fb3cf"; x.beginPath(); x.roundRect(kx, AY - 40, 46, 30, 5); x.fill();
    x.fillStyle = "#0a1830"; x.fillRect(kx + 6, AY - 32, 14, 9); x.fillStyle = "#eaf6ff"; x.fillRect(kx + 24, AY - 30, 16, 3); kx -= 10;
  }
  if (s.radTime > 0) { x.textAlign = "right"; x.font = `bold 15px ${FONT}`; x.fillStyle = "#f2d64a"; x.fillText(`RAD SUIT ${Math.ceil(s.radTime)}s`, kx, AY - 18); x.textAlign = "left"; }
  // grenades, above the blaster panel — only once you have one, so the earlier
  // levels' visors look exactly as they did
  if (s.grenades > 0) {
    const GX = AX + 18, GY = AY - 44;
    x.fillStyle = "rgba(6,14,28,0.6)"; x.beginPath(); x.roundRect(GX - 8, GY - 22, 150, 34, 10); x.fill();
    x.strokeStyle = CYAN_DIM; x.lineWidth = 1.5; x.stroke();
    for (let i = 0; i < s.grenades; i++) {
      const gx = GX + i * 17;
      x.fillStyle = "#2a3342"; x.fillRect(gx + 4, GY - 18, 5, 4);                                  // the fuse cap
      x.fillStyle = "#8ba179"; x.beginPath(); x.roundRect(gx, GY - 14, 12, 17, 5); x.fill();
      x.fillStyle = "#5d6f52"; x.fillRect(gx, GY - 8, 12, 1); x.fillRect(gx, GY - 3, 12, 1);       // the ribs
      x.fillStyle = "#ffb640"; x.fillRect(gx + 1, GY - 12, 10, 2);
    }
    x.font = `bold 13px ${FONT}`; x.fillStyle = "rgba(210,235,255,0.9)"; x.fillText("G · THROW", GX + 60, GY - 2);
  }

  // a big name when you walk into a new room
  if (s.area && s.area.t > 0) {
    x.save(); x.globalAlpha = Math.min(1, s.area.t, (3 - s.area.t) * 3); x.textAlign = "center";
    x.font = `bold 30px ${FONT}`; x.letterSpacing = "8px";
    // a dark outline first, so the name reads against a bright white wall too
    x.strokeStyle = "rgba(4,10,24,0.75)"; x.lineWidth = 6; x.lineJoin = "round"; x.strokeText(s.area.name.toUpperCase(), W / 2, 170);
    x.fillStyle = "#eaf6ff"; x.shadowColor = CYAN; x.shadowBlur = 18; x.fillText(s.area.name.toUpperCase(), W / 2, 170); x.restore();
  }
  if (s.prompt) drawPrompt(x, s.prompt.key, s.prompt.text);
  if (s.touch) drawTouchControls(x, s.touch);
}

// How visible you are, under the reticle. Deliberately small and quiet: it is
// there so the darkness in the storage deck is a RULE you can read rather than
// a guess, but it must not sit in the middle of the picture shouting.
function drawExposure(x: Ctx, e: number) {
  const cx = HUD_W / 2, y = HUD_H / 2 + 44, w = 96;
  const col = e < 0.34 ? "rgba(47,212,138,0.85)" : e < 0.7 ? "rgba(255,182,64,0.85)" : "rgba(255,93,108,0.9)";
  x.fillStyle = "rgba(127,230,255,0.13)"; x.beginPath(); x.roundRect(cx - w / 2, y, w, 5, 3); x.fill();
  x.fillStyle = col; x.beginPath(); x.roundRect(cx - w / 2, y, Math.max(3, w * Math.min(1, e)), 5, 3); x.fill();
  x.save(); x.textAlign = "center"; x.font = `bold 10px ${FONT}`; x.letterSpacing = "2px";
  x.fillStyle = "rgba(170,210,240,0.65)"; x.fillText(e < 0.34 ? "HIDDEN" : e < 0.7 ? "SEEN" : "EXPOSED", cx, y + 18);
  x.restore();
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
  kind: "reload" | "stomp" | "nade"; topic: string; index: number; total: number; question: string; choices: string[];
  /** For the reload panel's subtitle: how much a right answer is worth. */
  perAnswer?: number;
  time: number; perQuestion: number; picked: number | null; correct: number; results: boolean[]; ammo: number;
  /** The site's model answer, shown only after a WRONG answer. */
  why?: string;
  /** A touchscreen: bigger everything. See the note at the top of drawQuiz. */
  touch?: boolean;
};

function wrap(x: Ctx, text: string, maxW: number): string[] {
  const lines: string[] = []; let line = "";
  // ⚠️ One token wider than the whole panel used to run straight off both
  // edges, because nothing ever broke a word. Nothing in the bank does that
  // today; a URL or a long chemical name would.
  const words: string[] = [];
  for (const raw of text.split(/\s+/)) {
    let wd = raw;
    while (x.measureText(wd).width > maxW && wd.length > 1) {
      let cut = wd.length;
      while (cut > 1 && x.measureText(wd.slice(0, cut)).width > maxW) cut--;
      words.push(wd.slice(0, cut)); wd = wd.slice(cut);
    }
    words.push(wd);
  }
  for (const wd of words) { const t = line ? line + " " + wd : wd; if (x.measureText(t).width > maxW && line) { lines.push(line); line = wd; } else line = t; }
  if (line) lines.push(line); return lines;
}

// Where the four answer buttons ended up last time the quiz was drawn, so a
// finger can be tested against them. ⚠️ Recorded BY the drawing rather than
// worked out a second time: their position depends on how many lines the
// question wrapped to, which needs a canvas to measure, and a second
// calculation of that is a second thing to get wrong.
let lastChoiceBoxes: { x: number; y: number; w: number; h: number }[] = [];

/** Which answer a tap at this point in visor space is on, or -1. */
export function quizChoiceAt(px: number, py: number): number {
  return lastChoiceBoxes.findIndex((r) => px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h);
}

// ⚠️ EVERY SIZE IN HERE IS IN VISOR PIXELS, AND A PHONE SEES ABOUT 0.44 OF ONE.
// A sideways iPhone SE gives the 1280-wide visor 568 real pixels. Measured on
// exactly that: the answer boxes were 24 CSS px tall — the fourth sub-44px tap
// target this site has shipped, and the only way to answer a question on a
// phone — and the model answer the teaching commit exists for was 7.5 CSS px,
// which nobody can read. So a touchscreen gets its own set of numbers: a panel
// nearly the full width, 100-px-tall boxes (44 CSS px) and type roughly 1.7x.
// The desktop numbers below are unchanged, and the deltas are written as
// (touch ? a : b) so that stays true by construction.
export function drawQuiz(x: Ctx, q: QuizView) {
  const W = HUD_W;
  x.save();
  const stomp = q.kind === "stomp", nade = q.kind === "nade", touch = !!q.touch;
  // ⚠️ The grenade panel dims the whole screen the way the stomp does, and it
  // is doing more than decoration: the world behind it is FROZEN, and a frozen
  // picture that looks exactly like a running one reads as the game having
  // hung. The dim says "nothing out there is moving".
  if (stomp || nade) { x.fillStyle = "rgba(3,6,13,0.5)"; x.fillRect(0, 0, W, HUD_H); }
  const ROW = touch ? 112 : 64, BOXH = touch ? 100 : 54;
  const QF = touch ? 36 : 30, QLH = touch ? 46 : 38;
  const WF = touch ? 30 : 17, WLH = touch ? 38 : 24, WMAX = touch ? 3 : 4;
  const AF = touch ? 32 : 19, NF = touch ? 22 : 17;
  const HEAD = touch ? 124 : 112, FOOTF = touch ? 20 : 13, TIMEF = touch ? 19 : 15;
  const PW = touch ? 1200 : stomp || nade ? 760 : 680, X = W / 2 - PW / 2, Y = touch ? 16 : stomp || nade ? 80 : 150;
  x.font = `bold ${QF}px ${FONT}`; const lines = wrap(x, q.question, PW - 64).slice(0, 3);
  // Room for the model answer, but only when there is one to show. Measuring
  // it here rather than guessing keeps the panel the same size as before on
  // every right answer, which is most of them.
  const wrong = q.picked !== null && q.picked !== q.correct;
  x.font = `${WF}px ${FONT}`;
  const whyLines = wrong && q.why ? wrap(x, q.why, PW - 124).slice(0, WMAX) : [];
  const PH = (HEAD - 112) + 300 + (ROW - 64) * 2 + lines.length * QLH + (whyLines.length ? 34 + whyLines.length * WLH : 0);
  const accent = stomp ? "#ffd65a" : nade ? "#8ba179" : CYAN;
  x.fillStyle = stomp || nade ? "rgba(8,16,30,0.94)" : "rgba(6,14,28,0.84)"; x.beginPath(); x.roundRect(X, Y, PW, PH, 22); x.fill();
  x.strokeStyle = accent; x.lineWidth = 2.5; x.stroke();
  // a thin bright edge along the top, like a hologram's projector line
  x.fillStyle = accent; x.fillRect(X + 22, Y, PW - 44, 2);
  x.fillStyle = accent; x.font = `bold ${touch ? 36 : 32}px ${FONT}`;
  const title = stomp ? "STOMP!" : nade ? "PIN OUT" : "RELOAD";
  x.fillText(title, X + 30, Y + 48); const titleW = x.measureText(title).width;
  x.fillStyle = "#c9d6e8"; x.font = `${touch ? 20 : 16}px ${FONT}`;
  const sub = stomp ? "Get all 3 right to finish it off"
    : nade ? "All 3 right and it flies · one wrong and the pin goes back in"
    : `Right: +${q.perAnswer ?? 3} · Wrong: nothing`;
  x.fillText(sub, X + 30 + titleW + 16, Y + 44); // measured, so no font can make them overlap
  x.font = `bold ${touch ? 16 : 13}px ${FONT}`; const tw = x.measureText(q.topic).width + 22;
  x.fillStyle = "#1c6fd6"; x.beginPath(); x.roundRect(X + 30, Y + 64, tw, 26, 13); x.fill(); x.fillStyle = "#eaf6ff"; x.fillText(q.topic, X + 41, Y + 82);
  for (let i = 0; i < q.total; i++) {
    const cx = X + PW - 40 - (q.total - 1 - i) * 36, cy = Y + 40; x.beginPath(); x.arc(cx, cy, 12, 0, 7);
    if (i < q.results.length) { x.fillStyle = q.results[i] ? GOOD : DANGER; x.fill(); }
    else if (i === q.index) { x.strokeStyle = accent; x.lineWidth = 3; x.stroke(); }
    else { x.fillStyle = "#2a3647"; x.fill(); }
  }
  x.fillStyle = "#ffffff"; x.font = `bold ${QF}px ${FONT}`;
  lines.forEach((l, i) => x.fillText(l, X + 30, Y + (HEAD + 20) + i * QLH));
  const oy = Y + HEAD + lines.length * QLH;
  lastChoiceBoxes = [];
  q.choices.forEach((o, i) => {
    const bx = X + 30 + (i % 2) * ((PW - 72) / 2 + 12), by = oy + Math.floor(i / 2) * ROW, bw = (PW - 72) / 2;
    lastChoiceBoxes.push({ x: bx, y: by, w: bw, h: BOXH });
    const picked = q.picked === i, isRight = i === q.correct, reveal = q.picked !== null;
    x.fillStyle = reveal && isRight ? "#1f8a57" : reveal && picked ? "#9b2c2c" : "rgba(22,32,46,0.9)";
    x.beginPath(); x.roundRect(bx, by, bw, BOXH, 12); x.fill();
    x.strokeStyle = reveal && isRight ? GOOD : "#3f4b5c"; x.lineWidth = 2; x.stroke();
    x.fillStyle = accent; x.font = `bold ${NF}px ${FONT}`; x.fillText(String(i + 1), bx + 16, by + BOXH / 2 + NF / 3);
    x.fillStyle = "#ffffff"; x.font = `bold ${AF}px ${FONT}`;
    let text = o; while (x.measureText(text).width > bw - 60 && text.length > 4) text = text.slice(0, -2);
    if (text !== o) text = text.slice(0, -1) + "…";
    x.fillText(text, bx + (touch ? 56 : 44), by + BOXH / 2 + AF / 3);
  });
  // ⚠️ Why this is here at all: the right answer used to light up green for
  // 0.7 seconds and the game moved on, so a wrong answer told you nothing but
  // that you were wrong. The site already stores a model answer — often with
  // the working — and the game was throwing it away.
  if (whyLines.length) {
    const wy = oy + Math.ceil(q.choices.length / 2) * ROW + 6;
    x.fillStyle = "rgba(47,212,138,0.10)"; x.beginPath(); x.roundRect(X + 30, wy, PW - 60, 26 + whyLines.length * WLH, 12); x.fill();
    x.strokeStyle = "rgba(47,212,138,0.45)"; x.lineWidth = 1.5; x.stroke();
    label(x, "WHY", X + 46, wy + 20, GOOD, touch ? 14 : 11);
    x.fillStyle = "#dff6ea"; x.font = `${WF}px ${FONT}`;
    whyLines.forEach((l, i) => x.fillText(l, X + (touch ? 96 : 84), wy + 22 + i * WLH));
  }
  const tY = Y + PH - 36; const frac = Math.max(0, q.time / q.perQuestion);
  x.fillStyle = "#2a3647"; x.beginPath(); x.roundRect(X + 30, tY, PW - 150, 10, 5); x.fill();
  x.fillStyle = q.time < 2 ? "#ff4d4d" : "#ffd65a"; x.beginPath(); x.roundRect(X + 30, tY, (PW - 150) * frac, 10, 5); x.fill();
  x.fillStyle = "#c9d6e8"; x.font = `bold ${TIMEF}px ${FONT}`; x.fillText(`${Math.max(0, q.time).toFixed(1)} s`, X + PW - 104, tY + 10);
  x.fillStyle = "#9fb3cf"; x.font = `${FOOTF}px ${FONT}`;
  // ⚠️ A phone has no SPACE and no number keys. This panel was telling every
  // phone player to press keys their device does not have — including the one
  // line that explains how to dismiss the model answer.
  x.fillText(
    q.picked !== null
      ? (wrong ? `${touch ? "Tap" : "SPACE"} to carry on · this one goes to “Revisit your mistakes”` : `${touch ? "Tap" : "SPACE"} to carry on`)
      : stomp ? `${touch ? "Tap an answer" : "Press 1–4"}. One wrong and it throws you off. Wrong answers go to “Revisit your mistakes”.`
      : `${touch ? "Tap an answer" : "Press 1–4"} to answer. You can still move while you reload!`,
    X + 30, tY + 28);
  x.restore();
}

// Start, paused, beaten, level complete: a glass panel in the middle of the visor.
export function drawScreen(x: Ctx, title: string, lines: string[], footer: string, accent = CYAN) {
  const W = HUD_W, H = HUD_H;
  x.save(); x.fillStyle = "rgba(2,6,14,0.62)"; x.fillRect(0, 0, W, H);
  // ⚠️ This panel is sized to its widest line and does not wrap, so one long
  // line of controls pushes it off both edges of the screen. Shrink the text
  // instead: the controls card is already within about 20px of the edge.
  x.font = `20px ${FONT}`;
  const natural = Math.max(...lines.map((l) => x.measureText(l).width), 520);
  const size = natural + 120 > W - 40 ? Math.max(13, (20 * (W - 160)) / natural) : 20;
  x.font = `${size}px ${FONT}`;
  const widest = Math.max(...lines.map((l) => x.measureText(l).width), 520);
  const PW = widest + 120, PH = 170 + lines.length * 34, X = W / 2 - PW / 2, Y = H / 2 - PH / 2;
  x.fillStyle = "rgba(6,14,28,0.88)"; x.beginPath(); x.roundRect(X, Y, PW, PH, 24); x.fill();
  x.strokeStyle = accent; x.lineWidth = 2; x.stroke(); x.fillStyle = accent; x.fillRect(X + 30, Y, PW - 60, 3);
  x.textAlign = "center";
  x.fillStyle = accent; x.font = `bold 46px ${FONT}`; x.shadowColor = accent; x.shadowBlur = 20; x.fillText(title, W / 2, Y + 70); x.shadowBlur = 0;
  x.fillStyle = "#e8f2ff"; x.font = `${size}px ${FONT}`;
  lines.forEach((l, i) => x.fillText(l, W / 2, Y + 118 + i * 34));
  x.fillStyle = "#ffd65a"; x.font = `bold 21px ${FONT}`; x.fillText(footer, W / 2, Y + PH - 30);
  x.restore();
}

// The blaster (or the knife), drawn at game resolution so it is
// pixelated like the world. Held low on the right and angled in, rather than
// straight up the middle of the screen, and its six cells glow along the top:
// you can see how many shots are left by looking at the gun itself.
export function drawWeapon(x: Ctx, W: number, H: number, weapon: "knife" | "pistol" | "rifle", bob: number, kick: number, flash: number, ammo: number, mag = 6) {
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
  // ⚠️ The rifle is the same gloved hand and the same arm — it has to read as
  // the SAME suit holding a different gun, or the first-person view looks like
  // two games. What changes is the silhouette (longer barrel, a magazine under
  // it, a stock back against the shoulder) and the colour: amber, where the
  // blaster is cyan, so a glance at the bottom of the screen tells you which
  // one you are holding without reading the panel.
  if (weapon === "rifle") { drawRifle(x, s, bob, kick, flash, ammo, mag, poly); x.restore(); return; }
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
