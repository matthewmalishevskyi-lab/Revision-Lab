// The game itself: input, the player, the aliens, shooting, pickups, doors,
// and the two quiz moments that make it a revision game.
//
//   RELOAD (press R): questions on your topics. Right = +3 shots, wrong = +1,
//   up to three questions, stopping when the clip is full. The world keeps
//   going while you answer: aliens still shoot, and you can still move.
//
//   STOMP (press SPACE behind an alien that hasn't seen you): three quick,
//   easy questions, 5 seconds each, with the world frozen. All right and the
//   alien is finished; one wrong and it throws you off (20 damage).
//
// Every answer is sent back to the site (onAnswer), so wrong ones go into
// "Revisit your mistakes" exactly like practice questions.

import { drawHud, drawQuiz, drawScreen, drawWeapon, HUD_H, HUD_W, type QuizView } from "./hud";
import { LEVELS } from "./levels";
import { makeRenderer, type Drawable } from "./render";
import { buildSprites, type Sprite } from "./sprites";
import { buildTextures, type TexSet } from "./textures";
import { circleFree, moveCircle, pathClear, pushOut } from "./physics";
import { blocked, buildWorld, COVER_H, DIRS, lineOfSight, type World } from "./world";

export type Question = { question: string; choices: string[]; correct: number; topic: string; topicTitle: string };
export type GameOptions = {
  reload: Question[];
  easy: Question[];
  onAnswer?: (q: Question, correct: boolean) => void;
  /** 0-based level to start on; later levels start with the pistol. */
  startLevel?: number;
  /** The player's mascot, who talks to you on the comms screen. */
  mascotName?: string;
  /** Called on the click that starts or resumes play (the page asks for full screen). */
  onStart?: () => void;
};

type Alien = { x: number; y: number; face: number; hp: number; state: "idle" | "noticing" | "alert" | "dead"; timer: number; cooldown: number; lastX: number; lastY: number; hurt: number; strafe: number; strafeT: number };
type Pickup = { t: string; x: number; y: number; taken: boolean };
type Bolt = { x: number; y: number; vx: number; vy: number; life: number };
type Mode = "title" | "play" | "reload" | "stomp" | "paused" | "dead" | "complete" | "done";
type Quiz = { kind: "reload" | "stomp"; qs: Question[]; index: number; time: number; per: number; picked: number | null; feedback: number; results: boolean[]; target: Alien | null };

// The 3D view is drawn at 576x324 and scaled up. If a computer can't draw that
// in time, it drops to 480x270 by itself (see frame()): smoother beats sharper.
const SHARP = [576, 324] as const, LIGHT = [480, 270] as const;
const PITCH_MAX = 150; // how far up or down you can look, in pixels of horizon shift
const RADIUS = 0.22, ALIEN_R = 0.26, ALIEN_H = 0.58, WALK = 2.6, RUN = 4.2;
const GRAVITY = 7.5, JUMP = 2.6; // a jump clears waist-high cover and little else
const DECOR = new Set(["lamp", "canister", "holo"]);

export class Game {
  private cv: HTMLCanvasElement;
  private ov: HTMLCanvasElement;
  private g: CanvasRenderingContext2D;
  private o: CanvasRenderingContext2D;
  private opts: GameOptions;
  private tex!: TexSet;
  private spr!: Record<string, Sprite>;
  private R = makeRenderer(SHARP[0], SHARP[1]);
  private renderAvg = 0; private renderFrames = 0;
  private world!: World;
  private levelIndex = 0;
  private mode: Mode = "title";
  private pausedFrom: Mode = "play";
  private raf = 0;
  private last = 0;
  private keys = new Set<string>();
  private audio: AudioContext | null = null;
  private muted = false;
  private reloadDeck: Question[] = [];
  private easyDeck: Question[] = [];

  // player
  private p = { x: 0, y: 0, vx: 0, vy: 0, z: 0, vz: 0, angle: 0, pitch: 0, eye: 0.5, health: 100, vest: 0, ammo: 0, hasPistol: false, weapon: "knife" as "knife" | "pistol", keys: new Set<string>(), radTime: 0, bob: 0, kick: 0, flash: 0, hurt: 0, fireWait: 0 };
  private carry = { health: 100, vest: 0, ammo: 0, hasPistol: false };
  private aliens: Alien[] = [];
  private pickups: Pickup[] = [];
  private decor: Drawable[] = [];
  private bolts: Bolt[] = [];
  private quiz: Quiz | null = null;
  // what the visor shows: comms messages from the mascot, a pickup feed, room names, hit arcs
  private comms: { text: string; age: number; life: number } | null = null;
  private commsQueue: string[] = [];
  private hinted = new Set<string>();
  private feed: { text: string; t: number }[] = [];
  private areaBanner: { name: string; t: number } | null = null;
  private lastArea = "";
  private hits: { a: number; t: number }[] = [];
  private stats = { kills: 0, right: 0, wrong: 0, time: 0 };
  private hazardTick = 0;

  private bloom: CanvasRenderingContext2D | null = null;
  constructor(game: HTMLCanvasElement, overlay: HTMLCanvasElement, opts: GameOptions, bloom?: HTMLCanvasElement) {
    this.cv = game; this.ov = overlay; this.opts = opts;
    if (bloom) { bloom.width = 160; bloom.height = 90; this.bloom = bloom.getContext("2d"); }
    game.width = SHARP[0]; game.height = SHARP[1]; overlay.width = HUD_W; overlay.height = HUD_H;
    this.g = game.getContext("2d")!; this.o = overlay.getContext("2d")!;
  }

  async init() {
    this.tex = buildTextures();
    this.spr = await buildSprites();
    // React can unmount us while the sprites load (it mounts effects twice in
    // development). Without this, the "destroyed" game finished starting anyway
    // and two games ran on one canvas, both hearing every key.
    if (this.destroyed) return;
    const start = Math.min(LEVELS.length - 1, Math.max(0, this.opts.startLevel ?? 0));
    if (start > 0) this.carry = { health: 100, vest: 0, ammo: 6, hasPistol: true };
    this.loadLevel(start);
    // lets automated play-tests reach inside (teleport, read state); harmless in a browser
    (this.ov as HTMLCanvasElement & { game?: Game }).game = this;
    window.addEventListener("keydown", this.onKeyDown);
    window.addEventListener("keyup", this.onKeyUp);
    window.addEventListener("blur", this.onBlur);
    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("pointerlockchange", this.onLockChange);
    this.ov.addEventListener("mousedown", this.onMouseDown);
    this.last = performance.now();
    this.raf = requestAnimationFrame(this.frame);
  }

  private destroyed = false;
  destroy() {
    this.destroyed = true;
    cancelAnimationFrame(this.raf);
    window.removeEventListener("keydown", this.onKeyDown);
    window.removeEventListener("keyup", this.onKeyUp);
    window.removeEventListener("blur", this.onBlur);
    document.removeEventListener("mousemove", this.onMouseMove);
    document.removeEventListener("pointerlockchange", this.onLockChange);
    this.ov.removeEventListener("mousedown", this.onMouseDown);
    if (document.pointerLockElement === this.ov) document.exitPointerLock();
    this.audio?.close();
  }

  // ── levels ────────────────────────────────────────────────────────────────
  private loadLevel(n: number) {
    this.levelIndex = n;
    const def = LEVELS[n];
    this.world = buildWorld(def, this.tex);
    this.p.x = def.START.x; this.p.y = def.START.y; this.p.angle = def.START.angle; this.p.eye = 0.5; this.p.pitch = 0; this.p.vx = 0; this.p.vy = 0; this.p.z = 0; this.p.vz = 0;
    this.p.health = this.carry.health; this.p.vest = this.carry.vest; this.p.ammo = this.carry.ammo; this.p.hasPistol = this.carry.hasPistol;
    this.p.weapon = this.p.hasPistol ? "pistol" : "knife"; this.p.keys = new Set(); this.p.radTime = 0; this.p.hurt = 0;
    this.aliens = []; this.pickups = []; this.decor = []; this.bolts = []; this.quiz = null;
    for (const s of def.SPRITES) {
      if (s.t === "alien" || s.t === "alienBack") {
        this.aliens.push({ x: s.x, y: s.y, face: s.face ?? Math.atan2(def.START.y - s.y, def.START.x - s.x) + Math.PI * (s.t === "alienBack" ? 1 : 0), hp: 30, state: "idle", timer: 0, cooldown: 1, lastX: s.x, lastY: s.y, hurt: 0, strafe: 1, strafeT: 0 });
      } else if (DECOR.has(s.t)) this.decor.push({ x: s.x, y: s.y, sprite: s.t });
      else this.pickups.push({ t: s.t, x: s.x, y: s.y, taken: false });
    }
    this.stats = { kills: 0, right: 0, wrong: 0, time: 0 };
    this.comms = null; this.commsQueue = []; this.hinted = new Set(); this.feed = []; this.hits = []; this.lastArea = ""; this.areaBanner = null;
    if (def.INTRO) this.hint("intro", def.INTRO);
  }

  // ── input ─────────────────────────────────────────────────────────────────
  private onLockChange = () => {
    const locked = document.pointerLockElement === this.ov;
    // (a stomp counts too: its clock must stop while you're away)
    if (!locked && (this.mode === "play" || this.mode === "reload" || this.mode === "stomp")) { this.pausedFrom = this.mode; this.mode = "paused"; this.keys.clear(); }
  };
  private lock() { this.ov.requestPointerLock?.(); this.ensureAudio(); }
  private onMouseDown = (e: MouseEvent) => {
    if (this.mode === "title") { this.mode = "play"; this.opts.onStart?.(); this.lock(); return; }
    if (this.mode === "paused") { this.mode = this.pausedFrom; this.opts.onStart?.(); this.lock(); return; }
    if (this.mode === "dead" || this.mode === "complete" || this.mode === "done") return;
    if (document.pointerLockElement !== this.ov) { this.lock(); return; }
    if (e.button === 0 && (this.mode === "play" || this.mode === "reload")) this.fire();
  };
  private onMouseMove = (e: MouseEvent) => {
    if (document.pointerLockElement !== this.ov || this.mode === "stomp") return;
    // clamped, because some browsers report one huge jump when the mouse is captured
    this.p.angle += Math.max(-250, Math.min(250, e.movementX)) * 0.0026;
    // looking up and down shifts the horizon (the way Doom-era engines did it),
    // and the crosshair stays in the middle of the screen, so you shoot where you look
    this.p.pitch = Math.max(-PITCH_MAX, Math.min(PITCH_MAX, this.p.pitch - Math.max(-250, Math.min(250, e.movementY)) * 0.9));
  };
  private onKeyDown = (e: KeyboardEvent) => {
    const k = e.key.toLowerCase();
    if (["arrowup", "arrowdown", "arrowleft", "arrowright", " ", "tab"].includes(k) && this.mode !== "title") e.preventDefault();
    this.keys.add(k);
    // read digits by KEY POSITION, so they still work while Shift (run) is held,
    // when the browser reports "!" instead of "1", and from the number pad
    const digit = /^(?:Digit|Numpad)([1-4])$/.exec(e.code)?.[1] ?? (["1", "2", "3", "4"].includes(k) ? k : null);
    if (this.quiz && this.quiz.picked === null && digit && (this.mode === "reload" || this.mode === "stomp")) { this.answer(Number(digit) - 1); return; }
    if (this.mode === "dead" && k === "enter") { this.loadLevel(this.levelIndex); this.mode = "play"; this.lock(); return; }
    if (this.mode === "complete" && k === "enter") {
      this.carry = { health: Math.max(this.p.health, 50), vest: this.p.vest, ammo: this.p.ammo, hasPistol: this.p.hasPistol };
      if (this.levelIndex + 1 < LEVELS.length) { this.loadLevel(this.levelIndex + 1); this.mode = "play"; this.lock(); } else this.mode = "done";
      return;
    }
    if (this.mode !== "play" && this.mode !== "reload") return;
    if (k === "f" || k === "control") this.fire(); // keyboard shooting, like Doom's Ctrl
    if (k === "r") this.startReload();
    if (k === "e") this.use();
    if (k === " ") { if (this.stompTarget()) this.tryStomp(); else this.jump(); }
    if (k === "m") this.muted = !this.muted;
    if (digit === "1") this.p.weapon = "knife";
    if (digit === "2" && this.p.hasPistol) this.p.weapon = "pistol";
  };
  private onKeyUp = (e: KeyboardEvent) => { this.keys.delete(e.key.toLowerCase()); };
  // Alt-Tab away while holding W and the browser never sends the key-up: without
  // this you would come back to a player still walking into a wall.
  private onBlur = () => { this.keys.clear(); };

  // ── sound: tiny synthesised effects, no files ──────────────────────────────
  private ensureAudio() { if (!this.audio) { try { this.audio = new AudioContext(); } catch { this.audio = null; } } }
  private beep(freq: number, to: number, dur: number, type: OscillatorType = "square", vol = 0.08) {
    const a = this.audio; if (!a || this.muted) return;
    const o = a.createOscillator(), g = a.createGain(); o.type = type;
    o.frequency.setValueAtTime(freq, a.currentTime); o.frequency.exponentialRampToValueAtTime(Math.max(30, to), a.currentTime + dur);
    g.gain.setValueAtTime(vol, a.currentTime); g.gain.exponentialRampToValueAtTime(0.0001, a.currentTime + dur);
    o.connect(g).connect(a.destination); o.start(); o.stop(a.currentTime + dur);
  }

  /** The mascot says something on the comms screen (queued, never cut off). */
  private say(text: string) {
    if (this.comms?.text === text || this.commsQueue.includes(text)) return;
    if (!this.comms) this.comms = { text, age: 0, life: Math.max(3.2, text.length * 0.065) }; else this.commsQueue.push(text);
  }
  /** Say something once per level. */
  private hint(id: string, text: string) { if (this.hinted.has(id)) return; this.hinted.add(id); this.say(text); }
  private pickupMsg(text: string) { this.feed.unshift({ text, t: 3 }); this.feed.length = Math.min(this.feed.length, 4); }

  // ── the main loop ─────────────────────────────────────────────────────────
  private frame = (now: number) => {
    const dt = Math.min(0.05, (now - this.last) / 1000); this.last = now;
    if (this.mode === "play" || this.mode === "reload") this.update(dt);
    if (this.mode === "stomp" || this.mode === "reload") this.updateQuiz(dt);
    this.draw();
    // too slow for this computer? after a couple of seconds of play, go lighter
    if (this.mode === "play" && this.R.W === SHARP[0]) {
      this.renderAvg += (Number(this.ov.dataset.renderMs) - this.renderAvg) * 0.05; this.renderFrames++;
      if (this.renderFrames > 120 && this.renderAvg > 13) { this.R = makeRenderer(LIGHT[0], LIGHT[1]); this.cv.width = LIGHT[0]; this.cv.height = LIGHT[1]; }
    }
    this.raf = requestAnimationFrame(this.frame);
  };

  private tickVisor(dt: number) {
    // (a message waits while a quiz is on screen, so none is missed)
    if (this.comms && !this.quiz) { this.comms.age += dt; if (this.comms.age > this.comms.life) { const next = this.commsQueue.shift(); this.comms = next ? { text: next, age: 0, life: Math.max(3.2, next.length * 0.065) } : null; } }
    for (const f of this.feed) f.t -= dt; this.feed = this.feed.filter((f) => f.t > 0);
    for (const h of this.hits) h.t -= dt; this.hits = this.hits.filter((h) => h.t > 0);
    if (this.areaBanner) { this.areaBanner.t -= dt; if (this.areaBanner.t <= 0) this.areaBanner = null; }
    // walking into a named room: its name on the visor, and the mascot's tip for it
    const key = this.world.area[this.cell(this.p.x, this.p.y)];
    if (key && key !== this.lastArea) {
      this.lastArea = key;
      const a = this.world.def.AREAS[key];
      if (a?.name && !this.hinted.has("room:" + key)) { this.hinted.add("room:" + key); this.areaBanner = { name: a.name.replace(/^\d+\s*/, ""), t: 3 }; }
      const tip = this.world.def.HINTS?.[key]; if (tip) this.hint("area:" + key, tip);
    }
    if (this.p.health > 0 && this.p.health <= 35) this.hint("hurt", "You're hurt! Look for a med-kit, the white box with the blue cross.");
    if (this.p.hasPistol && this.p.ammo === 0) this.hint("empty", "Out of cells! Press R and answer. Only right answers charge the blaster, so take your time — or use the knife (1).");
  }

  private cell(x: number, y: number) { return Math.floor(y) * this.world.W + Math.floor(x); }
  private free(x: number, y: number) { return circleFree(this.world, x, y, RADIUS, this.p.z); }
  /** The floor under you: the top of a crate if you are standing on one. */
  private groundHeight(x: number, y: number) {
    const w = this.world, i = this.cell(x, y);
    // only counts once your feet are up there; you can't stand inside a crate
    return w.solid[i] === 2 && this.p.z >= COVER_H - 0.02 ? COVER_H : 0;
  }
  /** SPACE with nothing to jump on: an ordinary jump. */
  private jump() {
    const p = this.p;
    if (this.inDuct()) { this.pickupMsg("Too low to jump in here"); return; }
    if (p.z > this.groundHeight(p.x, p.y) + 0.02 || p.vz > 0) return; // already in the air
    p.vz = JUMP; this.beep(260, 420, 0.1, "sine", 0.04);
  }
  private inDuct() { return this.world.ceilH[this.cell(this.p.x, this.p.y)] < 1; }

  private update(dt: number) {
    const p = this.p, w = this.world;
    this.stats.time += dt;
    // turning with the keyboard too
    if (this.keys.has("arrowleft")) p.angle -= 2.4 * dt;
    if (this.keys.has("arrowright")) p.angle += 2.4 * dt;
    if (this.keys.has("pageup")) p.pitch = Math.min(PITCH_MAX, p.pitch + 200 * dt);
    if (this.keys.has("pagedown")) p.pitch = Math.max(-PITCH_MAX, p.pitch - 200 * dt);
    if (this.keys.has("end")) p.pitch = 0;
    // moving: WASD, sliding along walls one axis at a time
    let fwd = 0, strafe = 0;
    if (this.keys.has("w") || this.keys.has("arrowup")) fwd += 1;
    if (this.keys.has("s") || this.keys.has("arrowdown")) fwd -= 1;
    if (this.keys.has("d")) strafe += 1;
    if (this.keys.has("a")) strafe -= 1;
    const crouch = this.inDuct();
    // gravity, and the crate you may be standing on
    const ground = this.groundHeight(p.x, p.y);
    if (p.z > ground || p.vz > 0) {
      p.vz -= GRAVITY * dt; p.z += p.vz * dt;
      const headroom = w.ceilH[this.cell(p.x, p.y)] - 0.25;
      if (p.z > headroom) { p.z = headroom; p.vz = Math.min(0, p.vz); }
      if (p.z <= ground) { if (p.vz < -3) this.beep(90, 60, 0.07, "triangle", 0.03); p.z = ground; p.vz = 0; }
    } else p.z = ground;
    const speed = (this.keys.has("shift") && !crouch ? RUN : WALK) * (crouch ? 0.65 : 1);
    const len = Math.hypot(fwd, strafe) || 1;
    const wantX = ((Math.cos(p.angle) * fwd - Math.sin(p.angle) * strafe) / len) * speed;
    const wantY = ((Math.sin(p.angle) * fwd + Math.cos(p.angle) * strafe) / len) * speed;
    // a moment to speed up and slow down, so movement has a little weight to it
    // (a quarter of a second to full speed) without ever feeling slippery
    const grip = Math.min(1, dt * 14);
    p.vx += (wantX - p.vx) * grip; p.vy += (wantY - p.vy) * grip;
    const ox = p.x, oy = p.y;
    [p.x, p.y] = moveCircle(w, p.x, p.y, p.vx * dt, p.vy * dt, RADIUS, p.z);
    // aliens are solid too: you can't walk through one — though you can jump over
    for (const a of p.z > 0.3 ? [] : this.aliens) {
      if (a.state === "dead") continue;
      const dx = p.x - a.x, dy = p.y - a.y, d = Math.hypot(dx, dy), min = RADIUS + ALIEN_R;
      if (d < min && d > 1e-6) { [p.x, p.y] = pushOut(w, p.x + (dx / d) * (min - d), p.y + (dy / d) * (min - d), RADIUS, p.z); }
    }
    // keep the real speed, so walking into a wall stops you rather than storing speed
    const moved = Math.hypot(p.x - ox, p.y - oy);
    if (dt > 0) { p.vx = (p.x - ox) / dt; p.vy = (p.y - oy) / dt; }
    p.bob += moved * 2.6; // the head bobs with distance actually walked, not keys held
    p.eye += ((crouch ? 0.34 : 0.5) + p.z - p.eye) * Math.min(1, dt * (p.z > 0.01 || p.vz !== 0 ? 30 : 8));
    p.kick = Math.max(0, p.kick - dt * 6); p.flash = Math.max(0, p.flash - dt); p.hurt = Math.max(0, p.hurt - dt * 1.5);
    p.fireWait = Math.max(0, p.fireWait - dt); p.radTime = Math.max(0, p.radTime - dt); this.tickVisor(dt);

    // doors open as you walk up (except locked, secret and lift doors)
    for (const d of w.doors) {
      const cx = d.box.x0 + d.box.w / 2, cy = d.box.y0 + d.box.h / 2;
      const near = Math.hypot(p.x - cx, p.y - cy) < 1.6;
      if (near && !d.secret && !d.exit) {
        if (d.key && !p.keys.has(d.key)) { if (d.target === 0) this.hint("locked", this.world.def.LOCKED_HINT ?? "Locked. It needs the blue keycard."); }
        else if (d.needs === "pistol" && !p.hasPistol) this.hint("unarmed", "Don't go in there with bare hands! Get the blaster from the armoury first.");
        else if (d.target === 0) { d.target = 1; this.beep(180, 90, 0.4, "sawtooth", 0.04); }
      }
      d.open += Math.sign(d.target - d.open) * Math.min(Math.abs(d.target - d.open), dt * 1.6);
    }

    // coolant hurts, unless you're wearing the suit
    // (a quarter of a second's grace, so clipping the edge of a catwalk is free)
    if (w.floorTex[this.cell(p.x, p.y)] === "fRad" && p.radTime <= 0) {
      this.hazardTick -= dt; if (this.hazardTick <= 0) { this.damage(6, true); this.hazardTick = 0.5; this.hint("coolant", "Ouch, that coolant burns! Stay on the catwalks, or find the radiation suit."); }
    } else this.hazardTick = 0.25;

    // pickups
    for (const k of this.pickups) {
      if (k.taken || Math.hypot(k.x - p.x, k.y - p.y) > 0.55) continue;
      if (k.t === "pistol") { p.hasPistol = true; p.weapon = "pistol"; p.ammo = 6; this.pickupMsg("Blaster · 6 cells"); this.hint("pistol", "Got it! Six shots. Press R and answer to recharge: three cells for a right answer, nothing for a wrong one."); }
      else if (k.t === "ammo") { if (!p.hasPistol || p.ammo >= 6) continue; p.ammo = Math.min(6, p.ammo + 3); this.pickupMsg("Energy cells · +3"); }
      else if (k.t === "health") { if (p.health >= 100) continue; p.health = Math.min(100, p.health + 25); this.pickupMsg("Med-kit · +25"); }
      else if (k.t === "keycard") { p.keys.add("blue"); this.pickupMsg("Blue keycard"); this.hint("keycard", "The blue keycard! Now the locked door will open."); }
      else if (k.t === "radsuit") { p.radTime = 30; this.pickupMsg("Radiation suit · 30 s"); this.hint("radsuit", "Radiation suit on: you can wade through the coolant for 30 seconds."); }
      else if (k.t === "vest") { p.vest = 100; this.pickupMsg("Vest · takes a third of the damage"); }
      k.taken = true; this.beep(520, 900, 0.15, "triangle", 0.06);
    }

    this.updateAliens(dt);
    this.updateBolts(dt);
  }

  // ── aliens: not clever, but not daft either ───────────────────────────────
  //
  // They notice quickly, shout to the ones nearby, come round corners instead
  // of walking into the wall between you (a flow field, rebuilt a few times a
  // second), sidestep while they shoot, and aim a little ahead of where you
  // are running. What they never do is aim perfectly or read your mind:
  // Matthew asked for "a bit stupid but some challenge".
  private canSee(a: Alien) {
    const p = this.p, dx = p.x - a.x, dy = p.y - a.y, dist = Math.hypot(dx, dy);
    if (dist > 11) return false;
    if (this.inDuct() && dist > 1.2) return false; // vents hide you
    if (!lineOfSight(this.world, a.x, a.y, p.x, p.y)) return false;
    if (a.state === "alert") return true;
    let diff = Math.atan2(dy, dx) - a.face; diff = Math.atan2(Math.sin(diff), Math.cos(diff));
    return Math.abs(diff) < 0.9 || (dist < 2 && Math.abs(diff) < 1.7);
  }
  private alert(a: Alien, delay = 0.45 + Math.random() * 0.4) {
    if (a.state !== "idle") return;
    a.state = "noticing"; a.timer = delay;
    // it shouts: anything close by and in sight of it starts looking too
    for (const b of this.aliens) {
      if (b === a || b.state !== "idle") continue;
      if (Math.hypot(b.x - a.x, b.y - a.y) < 6 && lineOfSight(this.world, a.x, a.y, b.x, b.y)) {
        b.state = "noticing"; b.timer = delay + 0.3 + Math.random() * 0.4;
      }
    }
  }

  // Steps from every square to the player, so aliens can follow corridors.
  private flow: Int32Array | null = null;
  private flowT = 0; private flowX = -1; private flowY = -1;
  private updateFlow(dt: number) {
    this.flowT -= dt;
    const px = Math.floor(this.p.x), py = Math.floor(this.p.y);
    if (this.flow && this.flowT > 0 && px === this.flowX && py === this.flowY) return;
    this.flowT = 0.3; this.flowX = px; this.flowY = py;
    const w = this.world, N = w.W * w.H;
    const d = this.flow && this.flow.length === N ? this.flow : new Int32Array(N);
    d.fill(-1);
    if (blocked(w, px, py)) { this.flow = d; return; }
    const queue = new Int32Array(N); let head = 0, tail = 0;
    const startCell = py * w.W + px; d[startCell] = 0; queue[tail++] = startCell;
    while (head < tail) {
      const i = queue[head++], x = i % w.W, y = (i / w.W) | 0, next = d[i] + 1;
      for (const [dx, dy] of DIRS) {
        const nx = x + dx, ny = y + dy; if (nx < 0 || ny < 0 || nx >= w.W || ny >= w.H) continue;
        const j = ny * w.W + nx; if (d[j] !== -1 || blocked(w, nx, ny)) continue;
        d[j] = next; queue[tail++] = j;
      }
    }
    this.flow = d;
  }
  /** Which way an alien should walk to reach the player from where it stands. */
  private towardsPlayer(a: Alien): [number, number] | null {
    const w = this.world, d = this.flow; if (!d) return null;
    const x = Math.floor(a.x), y = Math.floor(a.y);
    if (x < 0 || y < 0 || x >= w.W || y >= w.H) return null;
    const here = d[y * w.W + x]; if (here < 0) return null;
    let best = here, bx = 0, by = 0;
    for (const [dx, dy] of DIRS) {
      const nx = x + dx, ny = y + dy; if (nx < 0 || ny < 0 || nx >= w.W || ny >= w.H) continue;
      const v = d[ny * w.W + nx]; if (v < 0 || v >= best) continue;
      best = v; bx = dx; by = dy;
    }
    if (!bx && !by) return null;
    // aim at the middle of the next square, so they don't scrape along walls
    const tx = x + bx + 0.5 - a.x, ty = y + by + 0.5 - a.y, len = Math.hypot(tx, ty) || 1;
    return [tx / len, ty / len];
  }

  private updateAliens(dt: number) {
    const p = this.p;
    this.updateFlow(dt);
    const hard = this.levelIndex * 0.1; // later decks are a little sharper
    for (const a of this.aliens) {
      if (a.state === "dead") continue;
      a.hurt = Math.max(0, a.hurt - dt);
      const sees = this.canSee(a);
      if (a.state === "idle") { if (sees) this.alert(a); continue; }
      if (a.state === "noticing") { a.timer -= dt; if (a.timer <= 0) a.state = "alert"; continue; }
      if (sees) { a.lastX = p.x; a.lastY = p.y; }
      const pd = Math.hypot(p.x - a.x, p.y - a.y);
      // face where you are, or where it last saw you
      let diff = Math.atan2(a.lastY - a.y, a.lastX - a.x) - a.face; diff = Math.atan2(Math.sin(diff), Math.cos(diff));
      a.face += Math.sign(diff) * Math.min(Math.abs(diff), (3.2 + hard) * dt);
      // where to walk: straight at you when it can see you and is far off,
      // otherwise along the flow field, which goes round corners
      let mx = 0, my = 0;
      const wantCloser = pd > 3.2 || !sees;
      if (wantCloser) {
        const step: [number, number] | null = sees ? [(p.x - a.x) / pd, (p.y - a.y) / pd] : this.towardsPlayer(a);
        if (step) { mx = step[0]; my = step[1]; }
      } else if (sees) {
        // in range: sidestep, so standing still and trading shots doesn't work
        a.strafeT -= dt;
        if (a.strafeT <= 0) { a.strafeT = 0.7 + Math.random(); a.strafe = Math.random() < 0.5 ? -1 : 1; }
        mx = -Math.sin(a.face) * a.strafe; my = Math.cos(a.face) * a.strafe;
        if (pd < 1.6) { mx -= (p.x - a.x) / pd; my -= (p.y - a.y) / pd; } // and back off if you crowd it
      }
      if (mx || my) {
        const sp = (wantCloser ? 1.35 : 1.0) * dt;
        const ahead = this.world.door[this.cell(a.x + mx * 0.6, a.y + my * 0.6)];
        if (ahead && !ahead.key && !ahead.secret && !ahead.exit && !ahead.needs) ahead.target = 1;
        const len = Math.hypot(mx, my) || 1;
        [a.x, a.y] = moveCircle(this.world, a.x, a.y, (mx / len) * sp, (my / len) * sp, ALIEN_R);
      }
      a.cooldown -= dt;
      if (sees && a.cooldown <= 0 && Math.abs(diff) < 0.4) {
        // aim a little ahead of where you are moving, and not perfectly straight
        const travel = pd / 6.2, aimX = p.x + p.vx * travel * 0.5, aimY = p.y + p.vy * travel * 0.5;
        const ang = Math.atan2(aimY - a.y, aimX - a.x) + (Math.random() - 0.5) * 0.14;
        this.bolts.push({ x: a.x + Math.cos(ang) * 0.3, y: a.y + Math.sin(ang) * 0.3, vx: Math.cos(ang) * 6.2, vy: Math.sin(ang) * 6.2, life: 4 });
        a.cooldown = Math.max(0.7, 1.2 - hard) + Math.random() * 1.1;
        this.beep(1200, 300, 0.18, "sine", 0.05); // pew
      }
    }
    // aliens don't stand inside each other, or inside you
    const live = this.aliens.filter((a) => a.state !== "dead");
    for (let i = 0; i < live.length; i++) {
      const a = live[i];
      for (let j = i + 1; j < live.length; j++) {
        const b = live[j], dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy), min = ALIEN_R * 2;
        if (d < min && d > 1e-6) {
          const push = (min - d) / 2;
          [a.x, a.y] = pushOut(this.world, a.x - (dx / d) * push, a.y - (dy / d) * push, ALIEN_R);
          [b.x, b.y] = pushOut(this.world, b.x + (dx / d) * push, b.y + (dy / d) * push, ALIEN_R);
        }
      }
      const dx = a.x - p.x, dy = a.y - p.y, d = Math.hypot(dx, dy), min = RADIUS + ALIEN_R;
      if (d < min && d > 1e-6 && p.z <= 0.3) [a.x, a.y] = pushOut(this.world, a.x + (dx / d) * (min - d), a.y + (dy / d) * (min - d), ALIEN_R);
    }
  }

  private updateBolts(dt: number) {
    const p = this.p;
    for (const b of this.bolts) {
      b.x += b.vx * dt; b.y += b.vy * dt; b.life -= dt;
      const c = this.cell(b.x, b.y);
      if (b.x < 0 || b.y < 0 || b.x >= this.world.W || b.y >= this.world.H || (this.world.solid[c] !== 0 || this.world.grille[c]) && !(this.world.door[c] && this.world.door[c]!.open > 0.9)) { b.life = 0; continue; }
      if (Math.hypot(b.x - p.x, b.y - p.y) < 0.32) { b.life = 0; this.hits.push({ a: Math.atan2(-b.vy, -b.vx), t: 1 }); this.damage(20); }
    }
    this.bolts = this.bolts.filter((b) => b.life > 0);
  }

  private damage(n: number, quiet = false) {
    const p = this.p;
    if (p.vest > 0) { const soak = Math.min(p.vest, n / 3); p.vest -= soak; n -= soak; }
    p.health -= n; p.hurt = Math.min(1, p.hurt + 0.5);
    if (!quiet) this.beep(140, 60, 0.25, "sawtooth", 0.08);
    if (p.health <= 0) { p.health = 0; this.mode = "dead"; this.quiz = null; document.exitPointerLock(); }
  }

  // ── shooting ──────────────────────────────────────────────────────────────
  private fire() {
    const p = this.p; if (p.fireWait > 0) return;
    if (p.weapon === "pistol") {
      if (p.ammo <= 0) { this.say("Out of cells! Press R and answer — only a right answer charges it."); this.beep(90, 80, 0.08, "square", 0.05); p.fireWait = 0.3; return; }
      p.ammo--; p.fireWait = 0.35; p.kick = 1; p.flash = 0.08; this.beep(700, 120, 0.12, "square", 0.07);
    } else { p.fireWait = 0.42; p.kick = 0.6; this.beep(300, 90, 0.09, "triangle", 0.05); } // the knife
    // anyone near enough to hear a shot comes looking
    if (p.weapon === "pistol") for (const a of this.aliens) if (a.state === "idle" && Math.hypot(a.x - p.x, a.y - p.y) < 7) this.alert(a);
    const best = this.aimTarget();
    if (best) {
      // the knife hurts more than a shot, but you have to be next to it
      best.hp -= p.weapon === "pistol" ? 15 : 20;
      best.hurt = 0.15; best.strafeT = 0; // being hit makes it change direction
      if (best.state !== "alert") { best.state = "alert"; best.cooldown = 0.8; }
      if (best.hp <= 0) this.kill(best); else this.beep(300, 200, 0.1, "square", 0.05);
    }
  }
  /** The alien the reticle is on, if a shot would reach it (also lights the reticle). */
  private aimTarget(): Alien | null {
    const p = this.p, cam = { x: p.x, y: p.y, angle: p.angle };
    let best: Alien | null = null, bestD = 1e9;
    for (const a of this.aliens) {
      if (a.state === "dead") continue;
      const { screenX, dist } = this.R.project(cam, a.x, a.y);
      if (dist <= 0.1) continue;
      const half = (0.23 * this.R.proj) / dist;
      if (Math.abs(screenX - this.R.W / 2) > half) continue;
      // and vertically: where the alien is actually drawn on the screen must
      // cover the crosshair, so looking over its head really does miss
      const bottom = this.R.horizon() + (p.eye * this.R.proj) / dist, top = bottom - (ALIEN_H * this.R.proj) / dist;
      if (this.R.H / 2 < top || this.R.H / 2 > bottom) continue;
      if (p.weapon === "knife" && dist > 1.3) continue;
      if (dist > this.R.centreDepth.value + 0.35) continue; // a wall is in the way
      if (!lineOfSight(this.world, p.x, p.y, a.x, a.y, true)) continue; // or a grille
      if (dist < bestD) { best = a; bestD = dist; }
    }
    return best;
  }
  private kill(a: Alien) { a.state = "dead"; a.hp = 0; this.stats.kills++; this.beep(400, 60, 0.4, "sawtooth", 0.06); }

  // ── use: doors that need a button ─────────────────────────────────────────
  private use() {
    if (this.quiz) return; // finish the questions first (the lift used to end the level with a quiz still open)
    const p = this.p, w = this.world;
    const lx = p.x + Math.cos(p.angle) * 0.9, ly = p.y + Math.sin(p.angle) * 0.9;
    const d = w.door[this.cell(lx, ly)];
    if (!d) return;
    if (d.exit) {
      this.mode = "complete"; document.exitPointerLock(); this.beep(300, 900, 0.6, "triangle", 0.07);
      return;
    }
    if (d.secret && d.target === 0) { d.target = 1; this.say("A hidden room! Careful — something is usually guarding one."); this.beep(400, 1200, 0.5, "triangle", 0.06); }
  }

  // ── the quizzes ───────────────────────────────────────────────────────────
  private draw1(deck: "reload" | "easy"): Question | null {
    const pool = deck === "reload" ? this.opts.reload : this.opts.easy.length >= 3 ? this.opts.easy : this.opts.reload;
    if (!pool.length) return null;
    const d = deck === "reload" ? this.reloadDeck : this.easyDeck;
    if (!d.length) { d.push(...[...pool].sort(() => Math.random() - 0.5)); }
    return d.pop() ?? null;
  }
  private startReload() {
    const p = this.p;
    if (p.hasPistol && p.weapon === "knife" && p.ammo < 6) p.weapon = "pistol"; // R with the knife out means "get the blaster ready"
    if (!p.hasPistol || p.weapon !== "pistol" || this.quiz || p.ammo >= 6) { if (p.ammo >= 6 && p.hasPistol && !this.quiz) this.pickupMsg("Already full"); return; }
    const qs: Question[] = []; for (let i = 0; i < 3; i++) { const q = this.draw1("reload"); if (q) qs.push(q); }
    if (!qs.length) { p.ammo = 6; return; }
    this.quiz = { kind: "reload", qs, index: 0, time: 10, per: 10, picked: null, feedback: 0, results: [], target: null };
    this.mode = "reload";
  }
  private tryStomp() {
    const a = this.stompTarget(); if (!a || this.quiz) return;
    const qs: Question[] = []; for (let i = 0; i < 3; i++) { const q = this.draw1("easy"); if (q) qs.push(q); }
    if (qs.length < 3) { this.kill(a); return; }
    this.quiz = { kind: "stomp", qs, index: 0, time: 5, per: 5, picked: null, feedback: 0, results: [], target: a };
    this.mode = "stomp"; this.beep(200, 600, 0.3, "square", 0.06);
  }
  private stompTarget(): Alien | null {
    const p = this.p;
    for (const a of this.aliens) {
      if (a.state !== "idle") continue;
      const dx = p.x - a.x, dy = p.y - a.y; if (Math.hypot(dx, dy) > 1.35) continue;
      let diff = Math.atan2(dy, dx) - a.face; diff = Math.atan2(Math.sin(diff), Math.cos(diff));
      if (Math.abs(diff) > 1.9) return a; // you're behind it
    }
    return null;
  }
  private answer(i: number) {
    const q = this.quiz; if (!q || q.picked !== null) return;
    q.picked = i; q.feedback = 0.7;
    const cur = q.qs[q.index], right = i === cur.correct;
    q.results.push(right);
    if (right) { this.stats.right++; this.beep(660, 990, 0.15, "triangle", 0.06); } else { this.stats.wrong++; this.beep(220, 110, 0.3, "sawtooth", 0.06); }
    if (q.kind === "reload" && right) this.p.ammo = Math.min(6, this.p.ammo + 3); // a wrong answer charges nothing: get it right or use the knife
    this.opts.onAnswer?.(cur, right);
  }
  private updateQuiz(dt: number) {
    const q = this.quiz; if (!q) return;
    if (q.picked === null) {
      q.time -= dt;
      if (q.time <= 0) { q.picked = -1; q.feedback = 0.9; q.results.push(false); this.stats.wrong++; this.opts.onAnswer?.(q.qs[q.index], false); this.beep(220, 110, 0.3, "sawtooth", 0.06); }
      return;
    }
    q.feedback -= dt; if (q.feedback > 0) return;
    const lastRight = q.results[q.results.length - 1];
    if (q.kind === "stomp") {
      if (!lastRight) { // thrown off
        const a = q.target!; const ang = Math.atan2(this.p.y - a.y, this.p.x - a.x);
        // thrown backwards, but never through a wall: only as far as the path is clear
        for (let s = 1.0; s > 0; s -= 0.1) { const nx = this.p.x + Math.cos(ang) * s, ny = this.p.y + Math.sin(ang) * s; if (pathClear(this.world, this.p.x, this.p.y, nx, ny, RADIUS)) { this.p.x = nx; this.p.y = ny; break; } }
        this.p.vx = 0; this.p.vy = 0;
        a.state = "alert"; a.cooldown = 1.2; a.face = ang;
        this.quiz = null; this.mode = "play"; this.damage(20); this.say("It threw you off!");
        return;
      }
      if (q.index === 2) { this.kill(q.target!); this.quiz = null; this.mode = "play"; this.say("Stomped!"); return; }
    } else if (this.p.ammo >= 6 || q.index === q.qs.length - 1) { this.quiz = null; this.mode = "play"; return; }
    q.index++; q.picked = null; q.time = q.per;
  }

  /** The current objective, for the compass: the first one not yet done. */
  private objective() {
    const list = this.world.def.OBJECTIVES; if (!list?.length) return null;
    const p = this.p;
    const o = list.find((o) => !(o.until === "pistol" && p.hasPistol) && !(o.until === "keycard" && p.keys.has("blue"))) ?? list[list.length - 1];
    return { text: o.text, bearing: Math.atan2(o.at[1] - p.y, o.at[0] - p.x), dist: Math.hypot(o.at[0] - p.x, o.at[1] - p.y) };
  }
  /** What a key would do right now, shown as a prompt. */
  private prompt() {
    if (this.stompTarget()) return { key: "SPACE", text: "It hasn't seen you: jump on it" };
    if (this.p.z > 0.05) return null;
    const p = this.p, d = this.world.door[this.cell(p.x + Math.cos(p.angle) * 0.9, p.y + Math.sin(p.angle) * 0.9)];
    if (d?.exit) return { key: "E", text: "Take the lift" };
    return null;
  }

  // ── drawing ───────────────────────────────────────────────────────────────
  private draw() {
    const p = this.p;
    const things: Drawable[] = [...this.decor];
    for (const k of this.pickups) if (!k.taken) things.push({ x: k.x, y: k.y, sprite: k.t });
    for (const a of this.aliens) {
      if (a.state === "dead") { things.push({ x: a.x, y: a.y, sprite: "alienDead" }); continue; }
      let diff = Math.atan2(p.y - a.y, p.x - a.x) - a.face; diff = Math.atan2(Math.sin(diff), Math.cos(diff));
      things.push({ x: a.x, y: a.y, sprite: Math.abs(diff) > 1.9 ? "alienBack" : "alien" });
    }
    for (const b of this.bolts) things.push({ x: b.x, y: b.y, z: 0.32, sprite: "bolt" });
    const t0 = performance.now();
    const img = this.R.render(this.world, this.tex, this.spr, { x: p.x, y: p.y, angle: p.angle }, things, p.eye + Math.sin(p.bob * 2) * 0.012, p.pitch);
    this.g.putImageData(img, 0, 0);
    if (this.mode !== "stomp") drawWeapon(this.g, this.R.W, this.R.H, p.weapon, p.bob, p.kick, p.flash, p.ammo);
    // a soft glow: the frame shrunk and laid back over itself on a "screen"
    // blended layer, so lights bloom a little instead of being hard pixels
    if (this.bloom) { this.bloom.imageSmoothingEnabled = true; this.bloom.drawImage(this.cv, 0, 0, 160, 90); }

    const t1 = performance.now();
    const o = this.o; o.clearRect(0, 0, HUD_W, HUD_H);
    const def = LEVELS[this.levelIndex];
    const left = this.aliens.filter((a) => a.state !== "dead").length;
    const playing = this.mode === "play" || this.mode === "reload";
    drawHud(o, {
      health: p.health, vest: p.vest, ammo: p.ammo, hasPistol: p.hasPistol, weapon: p.weapon, keys: [...p.keys], radTime: p.radTime,
      level: def.TITLE, aliensLeft: left, hurt: p.hurt, aim: playing && !!this.aimTarget(),
      hits: this.hits.map((h) => ({ a: h.a - p.angle, t: h.t })),
      heading: p.angle, objective: this.objective(),
      comms: this.comms && !this.quiz ? { who: this.opts.mascotName ?? "Comms", text: this.comms.text, age: this.comms.age, left: this.comms.life - this.comms.age } : null,
      feed: this.feed, area: this.areaBanner, prompt: this.mode === "play" ? this.prompt() : null,
    });
    if (this.quiz) {
      const q = this.quiz, cur = q.qs[q.index];
      const view: QuizView = { kind: q.kind, topic: cur.topicTitle, index: q.index, total: q.kind === "stomp" ? 3 : q.qs.length, question: cur.question, choices: cur.choices, time: q.time, perQuestion: q.per, picked: q.picked, correct: cur.correct, results: q.results, ammo: p.ammo };
      drawQuiz(o, view);
    }
    const mins = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
    if (this.mode === "title") drawScreen(o, def.TITLE, ["WASD to move · mouse to look (up and down too) · click to shoot · Shift to run", "R: recharge the blaster by answering questions · E: use · SPACE: jump (or jump on an alien from behind)", "Look up and down with the mouse · 1 knife · 2 blaster · M sound · Esc pause"], "Click to start");
    if (this.mode === "paused") drawScreen(o, "Paused", ["Your game is waiting."], "Click to carry on");
    if (this.mode === "dead") drawScreen(o, "Suit failure", [`${this.stats.kills} alien${this.stats.kills === 1 ? "" : "s"} defeated · ${this.stats.right} question${this.stats.right === 1 ? "" : "s"} right`], "Press Enter to try the level again", "#ff6b6b");
    if (this.mode === "complete") drawScreen(o, "Level complete!", [`Time ${mins(this.stats.time)} · aliens ${this.stats.kills}/${this.aliens.length} · questions right ${this.stats.right}/${this.stats.right + this.stats.wrong}`, this.levelIndex + 1 < LEVELS.length ? `Next: ${LEVELS[this.levelIndex + 1].TITLE}` : "That was the last level for now."], "Press Enter to carry on", "#2fd48a");
    if (this.mode === "done") drawScreen(o, "You finished early access!", ["All three levels done. The boss is still being built."], "Reload the page to play again", "#ffd65a");
    // frame timings, readable in dev tools (data-render-ms / data-hud-ms on the overlay)
    this.ov.dataset.renderMs = (t1 - t0).toFixed(1); this.ov.dataset.hudMs = (performance.now() - t1).toFixed(1);
  }
}
