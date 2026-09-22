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
import { blocked, buildWorld, lineOfSight, type World } from "./world";

export type Question = { question: string; choices: string[]; correct: number; topic: string; topicTitle: string };
export type GameOptions = {
  reload: Question[];
  easy: Question[];
  onAnswer?: (q: Question, correct: boolean) => void;
  /** 0-based level to start on; later levels start with the pistol. */
  startLevel?: number;
};

type Alien = { x: number; y: number; face: number; hp: number; state: "idle" | "noticing" | "alert" | "dead"; timer: number; cooldown: number; lastX: number; lastY: number; hurt: number };
type Pickup = { t: string; x: number; y: number; taken: boolean };
type Bolt = { x: number; y: number; vx: number; vy: number; life: number };
type Mode = "title" | "play" | "reload" | "stomp" | "paused" | "dead" | "complete" | "done";
type Quiz = { kind: "reload" | "stomp"; qs: Question[]; index: number; time: number; per: number; picked: number | null; feedback: number; results: boolean[]; target: Alien | null };

const GAME_W = 480, GAME_H = 270;
const RADIUS = 0.22, WALK = 2.6, RUN = 4.2;
const DECOR = new Set(["lamp", "canister", "holo"]);

export class Game {
  private cv: HTMLCanvasElement;
  private ov: HTMLCanvasElement;
  private g: CanvasRenderingContext2D;
  private o: CanvasRenderingContext2D;
  private opts: GameOptions;
  private tex!: TexSet;
  private spr!: Record<string, Sprite>;
  private R = makeRenderer(GAME_W, GAME_H);
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
  private p = { x: 0, y: 0, angle: 0, eye: 0.5, health: 100, vest: 0, ammo: 0, hasPistol: false, weapon: "fists" as "fists" | "pistol", keys: new Set<string>(), radTime: 0, bob: 0, kick: 0, flash: 0, hurt: 0, fireWait: 0 };
  private carry = { health: 100, vest: 0, ammo: 0, hasPistol: false };
  private aliens: Alien[] = [];
  private pickups: Pickup[] = [];
  private decor: Drawable[] = [];
  private bolts: Bolt[] = [];
  private quiz: Quiz | null = null;
  private toast = ""; private toastT = 0;
  private stats = { kills: 0, right: 0, wrong: 0, time: 0 };
  private hazardTick = 0;

  constructor(game: HTMLCanvasElement, overlay: HTMLCanvasElement, opts: GameOptions) {
    this.cv = game; this.ov = overlay; this.opts = opts;
    game.width = GAME_W; game.height = GAME_H; overlay.width = HUD_W; overlay.height = HUD_H;
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
    this.p.x = def.START.x; this.p.y = def.START.y; this.p.angle = def.START.angle; this.p.eye = 0.5;
    this.p.health = this.carry.health; this.p.vest = this.carry.vest; this.p.ammo = this.carry.ammo; this.p.hasPistol = this.carry.hasPistol;
    this.p.weapon = this.p.hasPistol ? "pistol" : "fists"; this.p.keys = new Set(); this.p.radTime = 0; this.p.hurt = 0;
    this.aliens = []; this.pickups = []; this.decor = []; this.bolts = []; this.quiz = null;
    for (const s of def.SPRITES) {
      if (s.t === "alien" || s.t === "alienBack") {
        this.aliens.push({ x: s.x, y: s.y, face: s.face ?? Math.atan2(def.START.y - s.y, def.START.x - s.x) + Math.PI * (s.t === "alienBack" ? 1 : 0), hp: 30, state: "idle", timer: 0, cooldown: 1, lastX: s.x, lastY: s.y, hurt: 0 });
      } else if (DECOR.has(s.t)) this.decor.push({ x: s.x, y: s.y, sprite: s.t });
      else this.pickups.push({ t: s.t, x: s.x, y: s.y, taken: false });
    }
    this.stats = { kills: 0, right: 0, wrong: 0, time: 0 };
  }

  // ── input ─────────────────────────────────────────────────────────────────
  private onLockChange = () => {
    const locked = document.pointerLockElement === this.ov;
    if (!locked && (this.mode === "play" || this.mode === "reload")) { this.pausedFrom = this.mode; this.mode = "paused"; this.keys.clear(); }
  };
  private lock() { this.ov.requestPointerLock?.(); this.ensureAudio(); }
  private onMouseDown = (e: MouseEvent) => {
    if (this.mode === "title") { this.mode = "play"; this.lock(); return; }
    if (this.mode === "paused") { this.mode = this.pausedFrom; this.lock(); return; }
    if (this.mode === "dead" || this.mode === "complete" || this.mode === "done") return;
    if (document.pointerLockElement !== this.ov) { this.lock(); return; }
    if (e.button === 0 && (this.mode === "play" || this.mode === "reload")) this.fire();
  };
  private onMouseMove = (e: MouseEvent) => {
    if (document.pointerLockElement !== this.ov || this.mode === "stomp") return;
    this.p.angle += e.movementX * 0.0026;
  };
  private onKeyDown = (e: KeyboardEvent) => {
    const k = e.key.toLowerCase();
    if (["arrowup", "arrowdown", "arrowleft", "arrowright", " ", "tab"].includes(k) && this.mode !== "title") e.preventDefault();
    this.keys.add(k);
    if (this.quiz && this.quiz.picked === null && ["1", "2", "3", "4"].includes(k)) { this.answer(Number(k) - 1); return; }
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
    if (k === " ") this.tryStomp();
    if (k === "m") this.muted = !this.muted;
    if (k === "1") this.p.weapon = "fists";
    if (k === "2" && this.p.hasPistol) this.p.weapon = "pistol";
  };
  private onKeyUp = (e: KeyboardEvent) => { this.keys.delete(e.key.toLowerCase()); };

  // ── sound: tiny synthesised effects, no files ──────────────────────────────
  private ensureAudio() { if (!this.audio) { try { this.audio = new AudioContext(); } catch { this.audio = null; } } }
  private beep(freq: number, to: number, dur: number, type: OscillatorType = "square", vol = 0.08) {
    const a = this.audio; if (!a || this.muted) return;
    const o = a.createOscillator(), g = a.createGain(); o.type = type;
    o.frequency.setValueAtTime(freq, a.currentTime); o.frequency.exponentialRampToValueAtTime(Math.max(30, to), a.currentTime + dur);
    g.gain.setValueAtTime(vol, a.currentTime); g.gain.exponentialRampToValueAtTime(0.0001, a.currentTime + dur);
    o.connect(g).connect(a.destination); o.start(); o.stop(a.currentTime + dur);
  }

  private say(text: string, t = 2.5) { this.toast = text; this.toastT = t; }

  // ── the main loop ─────────────────────────────────────────────────────────
  private frame = (now: number) => {
    const dt = Math.min(0.05, (now - this.last) / 1000); this.last = now;
    if (this.mode === "play" || this.mode === "reload") this.update(dt);
    if (this.mode === "stomp" || this.mode === "reload") this.updateQuiz(dt);
    this.draw();
    this.raf = requestAnimationFrame(this.frame);
  };

  private cell(x: number, y: number) { return Math.floor(y) * this.world.W + Math.floor(x); }
  private free(x: number, y: number) {
    const w = this.world;
    for (const [ox, oy] of [[-RADIUS, -RADIUS], [RADIUS, -RADIUS], [-RADIUS, RADIUS], [RADIUS, RADIUS]]) if (blocked(w, Math.floor(x + ox), Math.floor(y + oy))) return false;
    return true;
  }
  private inDuct() { return this.world.ceilH[this.cell(this.p.x, this.p.y)] < 1; }

  private update(dt: number) {
    const p = this.p, w = this.world;
    this.stats.time += dt;
    // turning with the keyboard too
    if (this.keys.has("arrowleft")) p.angle -= 2.4 * dt;
    if (this.keys.has("arrowright")) p.angle += 2.4 * dt;
    // moving: WASD, sliding along walls one axis at a time
    let fwd = 0, strafe = 0;
    if (this.keys.has("w") || this.keys.has("arrowup")) fwd += 1;
    if (this.keys.has("s") || this.keys.has("arrowdown")) fwd -= 1;
    if (this.keys.has("d")) strafe += 1;
    if (this.keys.has("a")) strafe -= 1;
    const crouch = this.inDuct();
    const speed = (this.keys.has("shift") && !crouch ? RUN : WALK) * (crouch ? 0.55 : 1);
    const len = Math.hypot(fwd, strafe) || 1;
    const vx = ((Math.cos(p.angle) * fwd - Math.sin(p.angle) * strafe) / len) * speed * dt;
    const vy = ((Math.sin(p.angle) * fwd + Math.cos(p.angle) * strafe) / len) * speed * dt;
    if (this.free(p.x + vx, p.y)) p.x += vx;
    if (this.free(p.x, p.y + vy)) p.y += vy;
    if (fwd || strafe) p.bob += dt * (speed * 2.6);
    p.eye += ((crouch ? 0.34 : 0.5) - p.eye) * Math.min(1, dt * 8);
    p.kick = Math.max(0, p.kick - dt * 6); p.flash = Math.max(0, p.flash - dt); p.hurt = Math.max(0, p.hurt - dt * 1.5);
    p.fireWait = Math.max(0, p.fireWait - dt); p.radTime = Math.max(0, p.radTime - dt); this.toastT = Math.max(0, this.toastT - dt);

    // doors open as you walk up (except locked, secret and lift doors)
    for (const d of w.doors) {
      const cx = d.box.x0 + d.box.w / 2, cy = d.box.y0 + d.box.h / 2;
      const near = Math.hypot(p.x - cx, p.y - cy) < 1.6;
      if (near && !d.secret && !d.exit) {
        if (d.key && !p.keys.has(d.key)) { if (d.target === 0 && this.toastT <= 0) this.say("Locked: you need the blue keycard"); }
        else if (d.target === 0) { d.target = 1; this.beep(180, 90, 0.4, "sawtooth", 0.04); }
      }
      d.open += Math.sign(d.target - d.open) * Math.min(Math.abs(d.target - d.open), dt * 1.6);
    }

    // coolant hurts, unless you're wearing the suit
    if (w.floorTex[this.cell(p.x, p.y)] === "fRad" && p.radTime <= 0) {
      this.hazardTick -= dt; if (this.hazardTick <= 0) { this.damage(6, true); this.hazardTick = 0.5; }
    }

    // pickups
    for (const k of this.pickups) {
      if (k.taken || Math.hypot(k.x - p.x, k.y - p.y) > 0.55) continue;
      if (k.t === "pistol") { p.hasPistol = true; p.weapon = "pistol"; p.ammo = 6; this.say("Pistol! Press R and answer questions to reload", 4); }
      else if (k.t === "ammo") { if (!p.hasPistol || p.ammo >= 6) continue; p.ammo = Math.min(6, p.ammo + 3); this.say("Energy cells: +3 shots"); }
      else if (k.t === "health") { if (p.health >= 100) continue; p.health = Math.min(100, p.health + 25); this.say("Med-kit: +25 health"); }
      else if (k.t === "keycard") { p.keys.add("blue"); this.say("Blue keycard: the locked door will open now", 3.5); }
      else if (k.t === "radsuit") { p.radTime = 30; this.say("Radiation suit: 30 seconds in the coolant", 3.5); }
      else if (k.t === "vest") { p.vest = 100; this.say("Vest: takes a third of the damage"); }
      k.taken = true; this.beep(520, 900, 0.15, "triangle", 0.06);
    }

    this.updateAliens(dt);
    this.updateBolts(dt);
  }

  // ── aliens: a bit stupid, but they shoot back ─────────────────────────────
  private canSee(a: Alien) {
    const p = this.p, dx = p.x - a.x, dy = p.y - a.y, dist = Math.hypot(dx, dy);
    if (dist > 11) return false;
    if (this.inDuct() && dist > 1.2) return false; // vents hide you
    if (!lineOfSight(this.world, a.x, a.y, p.x, p.y)) return false;
    if (a.state === "alert") return true;
    let diff = Math.atan2(dy, dx) - a.face; diff = Math.atan2(Math.sin(diff), Math.cos(diff));
    return Math.abs(diff) < 0.8 || dist < 1.6 && Math.abs(diff) < 1.6;
  }
  private alert(a: Alien) { if (a.state === "idle") { a.state = "noticing"; a.timer = 0.6 + Math.random() * 0.4; } }

  private updateAliens(dt: number) {
    const p = this.p;
    for (const a of this.aliens) {
      if (a.state === "dead") continue;
      a.hurt = Math.max(0, a.hurt - dt);
      const sees = this.canSee(a);
      if (a.state === "idle") { if (sees) this.alert(a); continue; }
      if (a.state === "noticing") { a.timer -= dt; if (a.timer <= 0) a.state = "alert"; continue; }
      if (sees) { a.lastX = p.x; a.lastY = p.y; }
      const tx = a.lastX - a.x, ty = a.lastY - a.y, dist = Math.hypot(tx, ty);
      // turn slowly towards where it last saw you
      let diff = Math.atan2(ty, tx) - a.face; diff = Math.atan2(Math.sin(diff), Math.cos(diff));
      a.face += Math.sign(diff) * Math.min(Math.abs(diff), 2.6 * dt);
      // walk closer if far, straight at you (no clever paths)
      const pd = Math.hypot(p.x - a.x, p.y - a.y);
      if (dist > 0.3 && (pd > 2.8 || !sees)) {
        const sp = 1.1 * dt, mx = (tx / dist) * sp, my = (ty / dist) * sp;
        if (!blocked(this.world, Math.floor(a.x + mx * 3), Math.floor(a.y))) a.x += mx;
        if (!blocked(this.world, Math.floor(a.x), Math.floor(a.y + my * 3))) a.y += my;
      }
      a.cooldown -= dt;
      if (sees && a.cooldown <= 0 && Math.abs(diff) < 0.35) {
        const ang = Math.atan2(p.y - a.y, p.x - a.x) + (Math.random() - 0.5) * 0.22; // not a perfect shot
        this.bolts.push({ x: a.x + Math.cos(ang) * 0.3, y: a.y + Math.sin(ang) * 0.3, vx: Math.cos(ang) * 5.5, vy: Math.sin(ang) * 5.5, life: 4 });
        a.cooldown = 1.5 + Math.random() * 1.3;
        this.beep(1200, 300, 0.18, "sine", 0.05); // pew
      }
    }
  }

  private updateBolts(dt: number) {
    const p = this.p;
    for (const b of this.bolts) {
      b.x += b.vx * dt; b.y += b.vy * dt; b.life -= dt;
      const c = this.cell(b.x, b.y);
      if (b.x < 0 || b.y < 0 || b.x >= this.world.W || b.y >= this.world.H || this.world.solid[c] !== 0 && !(this.world.door[c] && this.world.door[c]!.open > 0.9)) { b.life = 0; continue; }
      if (Math.hypot(b.x - p.x, b.y - p.y) < 0.32) { b.life = 0; this.damage(20); }
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
      if (p.ammo <= 0) { this.say("Out of shots: press R to answer and reload"); this.beep(90, 80, 0.08, "square", 0.05); p.fireWait = 0.3; return; }
      p.ammo--; p.fireWait = 0.35; p.kick = 1; p.flash = 0.08; this.beep(700, 120, 0.12, "square", 0.07);
    } else { p.fireWait = 0.45; p.kick = 0.6; this.beep(200, 100, 0.08, "triangle", 0.05); }
    // anyone near enough to hear a shot comes looking
    if (p.weapon === "pistol") for (const a of this.aliens) if (a.state === "idle" && Math.hypot(a.x - p.x, a.y - p.y) < 7) this.alert(a);
    const cam = { x: p.x, y: p.y, angle: p.angle };
    let best: Alien | null = null, bestD = 1e9;
    for (const a of this.aliens) {
      if (a.state === "dead") continue;
      const { screenX, dist } = this.R.project(cam, a.x, a.y);
      if (dist <= 0.1) continue;
      const half = (0.23 * this.R.proj) / dist;
      if (Math.abs(screenX - GAME_W / 2) > half) continue;
      if (p.weapon === "fists" && dist > 1.1) continue;
      if (dist > this.R.centreDepth.value + 0.35) continue; // a wall is in the way
      if (dist < bestD) { best = a; bestD = dist; }
    }
    if (best) {
      best.hp -= p.weapon === "pistol" ? 15 : 10; best.hurt = 0.15;
      if (best.state !== "alert") { best.state = "alert"; best.cooldown = 0.8; }
      if (best.hp <= 0) this.kill(best); else this.beep(300, 200, 0.1, "square", 0.05);
    }
  }
  private kill(a: Alien) { a.state = "dead"; a.hp = 0; this.stats.kills++; this.beep(400, 60, 0.4, "sawtooth", 0.06); }

  // ── use: doors that need a button ─────────────────────────────────────────
  private use() {
    const p = this.p, w = this.world;
    const lx = p.x + Math.cos(p.angle) * 0.9, ly = p.y + Math.sin(p.angle) * 0.9;
    const d = w.door[this.cell(lx, ly)];
    if (!d) return;
    if (d.exit) {
      this.mode = "complete"; document.exitPointerLock(); this.beep(300, 900, 0.6, "triangle", 0.07);
      return;
    }
    if (d.secret && d.target === 0) { d.target = 1; this.say("A secret!"); this.beep(400, 1200, 0.5, "triangle", 0.06); }
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
    if (!p.hasPistol || p.weapon !== "pistol" || this.quiz || p.ammo >= 6) { if (p.ammo >= 6 && p.hasPistol) this.say("Already full"); return; }
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
    if (q.kind === "reload") this.p.ammo = Math.min(6, this.p.ammo + (right ? 3 : 1));
    this.opts.onAnswer?.(cur, right);
  }
  private updateQuiz(dt: number) {
    const q = this.quiz; if (!q) return;
    if (q.picked === null) {
      q.time -= dt;
      if (q.time <= 0) { q.picked = -1; q.feedback = 0.9; q.results.push(false); this.stats.wrong++; if (q.kind === "reload") this.p.ammo = Math.min(6, this.p.ammo + 1); this.opts.onAnswer?.(q.qs[q.index], false); this.beep(220, 110, 0.3, "sawtooth", 0.06); }
      return;
    }
    q.feedback -= dt; if (q.feedback > 0) return;
    const lastRight = q.results[q.results.length - 1];
    if (q.kind === "stomp") {
      if (!lastRight) { // thrown off
        const a = q.target!; const ang = Math.atan2(this.p.y - a.y, this.p.x - a.x);
        for (let s = 1.0; s > 0; s -= 0.2) { const nx = this.p.x + Math.cos(ang) * s, ny = this.p.y + Math.sin(ang) * s; if (this.free(nx, ny)) { this.p.x = nx; this.p.y = ny; break; } }
        a.state = "alert"; a.cooldown = 1.2; a.face = ang;
        this.quiz = null; this.mode = "play"; this.damage(20); this.say("It threw you off!");
        return;
      }
      if (q.index === 2) { this.kill(q.target!); this.quiz = null; this.mode = "play"; this.say("Stomped!"); return; }
    } else if (this.p.ammo >= 6 || q.index === q.qs.length - 1) { this.quiz = null; this.mode = "play"; return; }
    q.index++; q.picked = null; q.time = q.per;
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
    const img = this.R.render(this.world, this.tex, this.spr, { x: p.x, y: p.y, angle: p.angle }, things, p.eye + Math.sin(p.bob * 2) * 0.012);
    this.g.putImageData(img, 0, 0);
    if (this.mode !== "stomp") drawWeapon(this.g, GAME_W, GAME_H, p.weapon, p.bob, p.kick, p.flash);

    const t1 = performance.now();
    const o = this.o; o.clearRect(0, 0, HUD_W, HUD_H);
    const left = this.aliens.filter((a) => a.state !== "dead").length;
    const stomp = this.mode === "play" && this.stompTarget();
    drawHud(o, {
      health: p.health, vest: p.vest, ammo: p.ammo, hasPistol: p.hasPistol, weapon: p.weapon, keys: [...p.keys], radTime: p.radTime,
      level: LEVELS[this.levelIndex].TITLE, hurt: p.hurt, flash: p.flash, toast: this.toast, toastT: this.toastT,
      prompt: stomp ? "It hasn't seen you: jump on it" : "", aliensLeft: left,
    });
    if (this.quiz) {
      const q = this.quiz, cur = q.qs[q.index];
      const view: QuizView = { kind: q.kind, topic: cur.topicTitle, index: q.index, total: q.kind === "stomp" ? 3 : q.qs.length, question: cur.question, choices: cur.choices, time: q.time, perQuestion: q.per, picked: q.picked, correct: cur.correct, results: q.results, ammo: p.ammo };
      drawQuiz(o, view);
    }
    const mins = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
    if (this.mode === "title") drawScreen(o, LEVELS[this.levelIndex].TITLE, ["WASD to move · mouse to look · click to shoot", "R to reload by answering questions · E to use · SPACE to jump on an alien from behind", "Shift to run · F also shoots · 1 fists · 2 pistol · M sound on/off · Esc to pause"], "Click to start");
    if (this.mode === "paused") drawScreen(o, "Paused", ["Your game is waiting."], "Click to carry on");
    if (this.mode === "dead") drawScreen(o, "You were beaten", [`${this.stats.kills} aliens defeated · ${this.stats.right} questions right`], "Press Enter to try the level again", "#ff6b6b");
    if (this.mode === "complete") drawScreen(o, "Level complete!", [`Time ${mins(this.stats.time)} · aliens ${this.stats.kills}/${this.aliens.length} · questions right ${this.stats.right}/${this.stats.right + this.stats.wrong}`, this.levelIndex + 1 < LEVELS.length ? `Next: ${LEVELS[this.levelIndex + 1].TITLE}` : "That was the last level for now."], "Press Enter to carry on", "#2fd48a");
    if (this.mode === "done") drawScreen(o, "You finished early access!", ["All three levels done. The boss is still being built."], "Reload the page to play again", "#ffd65a");
    // frame timings, readable in dev tools (data-render-ms / data-hud-ms on the overlay)
    this.ov.dataset.renderMs = (t1 - t0).toFixed(1); this.ov.dataset.hudMs = (performance.now() - t1).toFixed(1);
  }
}
