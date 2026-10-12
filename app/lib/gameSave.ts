// A saved game of the alien game: the exact moment, as plain JSON.
//
// Matthew, 2026-10-11: "add saves, like manual saves, so you can actually save
// stuff, like have your own saves." He chose the EXACT MOMENT (where you stand,
// which aliens are alive and where, ammo, doors, the run clock), FIVE slots,
// kept ON THE ACCOUNT so a save made on the laptop loads on the phone.
//
// ⚠️ PURE AND IMPORT-FREE, like mastery.ts and weightedShuffle.ts. Three
// places read this shape — the game writing it, the server action checking it
// before it touches the database, and the page handing it back to the game —
// and scripts/check-game-saves.mjs runs it in plain Node. If the game and the
// server had their own ideas of what a save looks like, the first time they
// disagreed would be somebody's lost save.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY EVERY FIELD IS CHECKED, WHEN IT IS ONLY YOUR OWN GAME
//
// A Server Action is reachable by anything that can make an HTTP request, not
// only by our Save button. What arrives is whatever somebody sent, and it is
// about to be stored and later handed straight to the game. So nothing is
// trusted: every number must be finite and in range, every string short, every
// list bounded, and anything unexpected makes the WHOLE save invalid rather
// than half-loaded. A save that loads wrongly is worse than one that refuses
// to load, because nothing tells you which half is wrong.
//
// What it does NOT do is enforce the game's balance (that ammo is at most a
// full clip, say). It cannot know those numbers without importing the game,
// and cheating your own save hurts nobody else. The game clamps them itself
// when it restores one (Game.restoreSave).
// ─────────────────────────────────────────────────────────────────────────────

export const SAVE_SLOTS = 5;
export const SAVE_VERSION = 1;
export const SAVE_NAME_MAX = 40;
/** Bytes of JSON. A real save is a few kilobytes; this is a ceiling on what a
 *  hand-crafted request can make the database store. */
export const SAVE_MAX_BYTES = 100_000;

export type SavedQuestion = { question: string; choices: string[]; correct: number; topic: string; topicTitle: string; why?: string };
export type SavedAlien = { x: number; y: number; face: number; hp: number; state: "idle" | "noticing" | "alert" | "dead"; timer: number; cooldown: number; lastX: number; lastY: number; strafe: number; strafeT: number };
export type SavedBoss = { x: number; y: number; face: number; hp: number; room: string | null; awake: boolean; dead: boolean; shield: number; phase: number; cooldown: number; strafe: number; strafeT: number };
export type SavedPickup = { t: string; x: number; y: number; taken: boolean; key?: string };
export type SavedCarry = { health: number; vest: number; ammo: number; hasPistol: boolean; hasRifle: boolean; rifleAmmo: number; grenades: number; knife: number };
export type GameSave = {
  v: number;
  /** 0-based deck. */
  level: number;
  /** What the deck looked like when this was saved (see levelPrint in
   *  game.ts). If the deck has been redesigned since, the aliens and pickups
   *  in here belong to a different map, so the game puts you at the deck's
   *  start with what you were carrying instead of inside a wall. */
  levelPrint: string;
  player: SavedCarry & { x: number; y: number; z: number; vz: number; angle: number; pitch: number; eye: number; weapon: "knife" | "pistol" | "rifle"; keys: string[]; radTime: number; nadeWait: number; exposure: number };
  carry: SavedCarry;
  aliens: SavedAlien[];
  boss: SavedBoss | null;
  terminals: { lock: number; cool: number }[];
  pickups: SavedPickup[];
  doors: { open: number; target: number }[];
  bolts: { x: number; y: number; vx: number; vy: number; life: number }[];
  nades: { x: number; y: number; z: number; vx: number; vy: number; vz: number; fuse: number }[];
  owed: SavedQuestion[];
  stats: { kills: number; right: number; wrong: number; time: number };
  hinted: string[];
};

/** What the game was set up with: the save brings its own questions' topics
 *  back, so loading a Biology save does not hand you Maths questions. */
export type SaveSetup = { subject: string; topics: string[]; mascot: string };

/** One slot as the menu lists it — never the whole state. */
export type SaveSummary = { slot: number; name: string; level: number; health: number; setup: SaveSetup; updatedAt: string };

// ── the checks ──────────────────────────────────────────────────────────────
class Bad extends Error {}
const fail = (): never => { throw new Bad(); };
const isObj = (v: unknown): v is Record<string, unknown> => typeof v === "object" && v !== null && !Array.isArray(v);
const num = (v: unknown, min: number, max: number): number =>
  typeof v === "number" && Number.isFinite(v) && v >= min && v <= max ? v : fail();
const int = (v: unknown, min: number, max: number): number => (Number.isInteger(num(v, min, max)) ? (v as number) : fail());
const bool = (v: unknown): boolean => (typeof v === "boolean" ? v : fail());
const str = (v: unknown, max: number): string => (typeof v === "string" && v.length <= max ? v : fail());
const list = <T>(v: unknown, max: number, each: (x: unknown) => T): T[] =>
  Array.isArray(v) && v.length <= max ? v.map(each) : fail();
const oneOf = <T extends string>(v: unknown, options: readonly T[]): T => (options.includes(v as T) ? (v as T) : fail());

/** Big enough for any deck the game has (the largest is 60 x 40) and for
 *  whatever lies a little outside one; small enough that nothing is absurd. */
const POS = 512;
/** An angle can wind round any number of times while you play. */
const ANGLE = 1e6;
const T = 1e6; // seconds, timers and cooldowns

function carry(v: unknown): SavedCarry {
  if (!isObj(v)) fail();
  const o = v as Record<string, unknown>;
  return {
    health: num(o.health, 0, 1000), vest: num(o.vest, 0, 1000), ammo: int(o.ammo, 0, 999),
    hasPistol: bool(o.hasPistol), hasRifle: bool(o.hasRifle), rifleAmmo: int(o.rifleAmmo, 0, 999),
    grenades: int(o.grenades, 0, 99), knife: int(o.knife, 0, 99),
  };
}

function question(v: unknown): SavedQuestion {
  if (!isObj(v)) fail();
  const o = v as Record<string, unknown>;
  const choices = list(o.choices, 6, (c) => str(c, 400));
  if (choices.length < 2) fail();
  const q: SavedQuestion = {
    question: str(o.question, 2000), choices, correct: int(o.correct, 0, choices.length - 1),
    topic: str(o.topic, 100), topicTitle: str(o.topicTitle, 200),
  };
  if (o.why !== undefined) q.why = str(o.why, 2000);
  return q;
}

/**
 * The save, checked field by field, or null. Builds a NEW object from the
 * fields it knows rather than passing the input through, so anything extra
 * somebody added never reaches the database or the game.
 */
export function parseGameSave(raw: unknown): GameSave | null {
  try {
    if (!isObj(raw)) return null;
    const o = raw as Record<string, unknown>;
    if (o.v !== SAVE_VERSION) return null;
    if (!isObj(o.player) || !isObj(o.stats)) return null;
    const p = o.player as Record<string, unknown>;
    const s = o.stats as Record<string, unknown>;
    const player = {
      ...carry(p),
      x: num(p.x, -POS, POS), y: num(p.y, -POS, POS), z: num(p.z, -10, 10), vz: num(p.vz, -100, 100),
      angle: num(p.angle, -ANGLE, ANGLE), pitch: num(p.pitch, -2000, 2000), eye: num(p.eye, 0, 2),
      weapon: oneOf(p.weapon, ["knife", "pistol", "rifle"] as const),
      keys: list(p.keys, 8, (k) => str(k, 24)),
      radTime: num(p.radTime, 0, T), nadeWait: num(p.nadeWait, 0, T), exposure: num(p.exposure, 0, 1),
    };
    // ⚠️ A save of somebody already dead would load straight into the death
    // screen, every time, for ever. The Save button refuses at 0; so does this.
    if (player.health <= 0) return null;
    const save: GameSave = {
      v: SAVE_VERSION,
      level: int(o.level, 0, 63),
      levelPrint: str(o.levelPrint, 300),
      player,
      carry: carry(o.carry),
      aliens: list(o.aliens, 200, (a) => {
        if (!isObj(a)) fail();
        const r = a as Record<string, unknown>;
        return {
          x: num(r.x, -POS, POS), y: num(r.y, -POS, POS), face: num(r.face, -ANGLE, ANGLE), hp: num(r.hp, -1000, 1000),
          state: oneOf(r.state, ["idle", "noticing", "alert", "dead"] as const),
          timer: num(r.timer, -T, T), cooldown: num(r.cooldown, -T, T),
          lastX: num(r.lastX, -POS, POS), lastY: num(r.lastY, -POS, POS),
          strafe: num(r.strafe, -10, 10), strafeT: num(r.strafeT, -T, T),
        };
      }),
      boss: o.boss === null ? null : ((b: unknown): SavedBoss => {
        if (!isObj(b)) fail();
        const r = b as Record<string, unknown>;
        return {
          x: num(r.x, -POS, POS), y: num(r.y, -POS, POS), face: num(r.face, -ANGLE, ANGLE), hp: num(r.hp, -10000, 10000),
          room: r.room === null ? null : str(r.room, 60), awake: bool(r.awake), dead: bool(r.dead),
          shield: num(r.shield, -T, T), phase: int(r.phase, 0, 10), cooldown: num(r.cooldown, -T, T),
          strafe: num(r.strafe, -10, 10), strafeT: num(r.strafeT, -T, T),
        };
      })(o.boss),
      terminals: list(o.terminals, 16, (t) => {
        if (!isObj(t)) fail();
        const r = t as Record<string, unknown>;
        return { lock: num(r.lock, -T, T), cool: num(r.cool, -T, T) };
      }),
      pickups: list(o.pickups, 400, (k) => {
        if (!isObj(k)) fail();
        const r = k as Record<string, unknown>;
        const pk: SavedPickup = { t: str(r.t, 32), x: num(r.x, -POS, POS), y: num(r.y, -POS, POS), taken: bool(r.taken) };
        if (r.key !== undefined) pk.key = str(r.key, 24);
        return pk;
      }),
      doors: list(o.doors, 100, (d) => {
        if (!isObj(d)) fail();
        const r = d as Record<string, unknown>;
        return { open: num(r.open, 0, 1), target: num(r.target, 0, 1) };
      }),
      bolts: list(o.bolts, 300, (b) => {
        if (!isObj(b)) fail();
        const r = b as Record<string, unknown>;
        return { x: num(r.x, -POS, POS), y: num(r.y, -POS, POS), vx: num(r.vx, -100, 100), vy: num(r.vy, -100, 100), life: num(r.life, -T, T) };
      }),
      nades: list(o.nades, 20, (n) => {
        if (!isObj(n)) fail();
        const r = n as Record<string, unknown>;
        return { x: num(r.x, -POS, POS), y: num(r.y, -POS, POS), z: num(r.z, -10, 10), vx: num(r.vx, -100, 100), vy: num(r.vy, -100, 100), vz: num(r.vz, -100, 100), fuse: num(r.fuse, -T, T) };
      }),
      owed: list(o.owed, 60, question),
      stats: { kills: int(s.kills, 0, 10000), right: int(s.right, 0, 100000), wrong: int(s.wrong, 0, 100000), time: num(s.time, 0, T) },
      hinted: list(o.hinted, 200, (h) => str(h, 60)),
    };
    return save;
  } catch (e) {
    if (e instanceof Bad) return null;
    throw e;
  }
}

/** Trimmed, one line, short — and never empty, so a slot always says something. */
export function cleanSaveName(raw: unknown, fallback: string): string {
  const s = typeof raw === "string" ? raw.replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim().slice(0, SAVE_NAME_MAX) : "";
  return s || fallback.slice(0, SAVE_NAME_MAX);
}

/** The most topics a save may name. Not a game rule — the game takes every
 *  topic a subject has — just a ceiling well above the biggest subject, so a
 *  hand-made request cannot be enormous. A check keeps it above the real
 *  largest subject, so adding topics can never make a real save unsavable. */
export const SAVE_TOPICS_MAX = 200;

/** Checked like everything else; which subject, topics and mascot actually
 *  EXIST is the server's job (it knows the content), not this file's. */
export function parseSaveSetup(raw: unknown): SaveSetup | null {
  try {
    if (!isObj(raw)) return null;
    const o = raw as Record<string, unknown>;
    // Every topic a subject has, if you like (Matthew, 2026-10-11: "more than
    // eight topics, like as many as you want"). Still capped — at more topics
    // than any subject has — so a save cannot carry ten thousand of them, and
    // repeats collapse so one topic listed twice is not two topics.
    const topics = [...new Set(list(o.topics, SAVE_TOPICS_MAX, (t) => str(t, 100)))];
    if (!topics.length) return null;
    return { subject: str(o.subject, 60), topics, mascot: str(o.mascot, 40) };
  } catch (e) {
    if (e instanceof Bad) return null;
    throw e;
  }
}

/** The play page's URL for a slot, built from the save's own setup. */
export function saveHref(s: Pick<SaveSummary, "slot" | "setup">): string {
  const q = new URLSearchParams();
  q.set("subject", s.setup.subject);
  for (const t of s.setup.topics) q.append("topic", t);
  q.set("mascot", s.setup.mascot);
  q.set("save", String(s.slot));
  return `/early-access/play?${q.toString()}`;
}
