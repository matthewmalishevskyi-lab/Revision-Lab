// The game itself: input, the player, the aliens, shooting, pickups, doors,
// and the two quiz moments that make it a revision game.
//
//   RELOAD (press R): questions on your topics. Right = +3 shots, wrong = nothing,
//   up to three questions, stopping when the clip is full. The world keeps
//   going while you answer: aliens still shoot, and you can still move.
//
//   STOMP (press SPACE behind an alien that hasn't seen you): three quick,
//   easy questions, 5 seconds each, with the world frozen. All right and the
//   alien is finished; one wrong and it throws you off (HIT_DMG damage).
//
//   OVERRIDE (E at a shield terminal, deck 10 only): three questions, run
//   exactly like a reload. Three right drops the boss's shield for a few
//   seconds; nothing else hurts him. See "the boss", below.
//
// Every answer is sent back to the site (onAnswer), so wrong ones go into
// "Revisit your mistakes" exactly like practice questions.

import { drawHud, drawQuiz, drawScreen, drawWeapon, HUD_H, HUD_W, quizChoiceAt, touchButtons, TOUCH_STICK, type QuizView } from "./hud";
import { LEVELS } from "./levels";
import { makeRenderer, type Drawable } from "./render";
import { BOSS_HEIGHT, buildSprites, type Sprite } from "./sprites";
import { buildTextures, type TexSet } from "./textures";
import { circleFree, moveCircle, pathClear, pushOut } from "./physics";
import { blocked, buildWorld, COVER_H, DIRS, lineOfSight, type LevelDef, type World } from "./world";
import { formatClock, gradeFor, questionTarget, scoreRun, type LevelBest, type Run } from "../../lib/shipsLog";
import { weightedShuffle } from "../../lib/weightedShuffle";
import { SAVE_VERSION, type GameSave, type SavedCarry } from "../../lib/gameSave";

export type Question = { question: string; choices: string[]; correct: number; topic: string; topicTitle: string; why?: string };
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
  /** Called once a deck is cleared, so the page can keep the ship's log. */
  onLevelDone?: (run: Run) => void;
  /** The best run on a deck so far, asked for the moment one is finished, so
   *  the finish screen can say what there is to beat. A FUNCTION rather than a
   *  value: four decks can be finished without a page reload, and a snapshot
   *  taken when the game mounted would still be showing the first one's. */
  best?: (level: string) => LevelBest | undefined;
  /**
   * How strongly to favour each topic's questions, by topic slug — worked out
   * on the server from the student's own accuracy (weakTopicWeights in
   * lib/game-questions.ts). Missing means 1. A logged-out player passes
   * nothing and gets the old even deal.
   */
  topicWeights?: Record<string, number>;
  /** A saved game to carry on from, instead of starting a deck fresh. Already
   *  checked by parseGameSave on the server; restoreSave clamps it again. */
  save?: GameSave;
  /** The slot's name, for the "carry on" screen. */
  saveName?: string;
};

type Alien = { x: number; y: number; face: number; hp: number; state: "idle" | "noticing" | "alert" | "dead"; timer: number; cooldown: number; lastX: number; lastY: number; hurt: number; strafe: number; strafeT: number };
type Pickup = { t: string; x: number; y: number; taken: boolean; key?: string };
type Bolt = { x: number; y: number; vx: number; vy: number; life: number };
/** A grenade in the air. Bounces, then goes off on its fuse rather than on
 *  contact, so you can bank one round a corner or roll it down an aisle. */
type Nade = { x: number; y: number; z: number; vx: number; vy: number; vz: number; fuse: number };
/** Anything drawn for a fraction of a second: muzzle flash, tracer, sparks,
 *  a fireball, smoke. It has no effect on the game, only on how it feels. */
type Fx = { x: number; y: number; z: number; vx: number; vy: number; vz: number; sprite: string; t: number; life: number; scale: number; grow: number; drag: number };
type Mode = "title" | "play" | "reload" | "stomp" | "nade" | "debrief" | "paused" | "dead" | "complete" | "done";
type Weapon = "knife" | "pistol" | "rifle";
/** Where on an alien a shot landed. The knife has no zones — a swing is a swing. */
type Zone = "head" | "torso" | "legs";
/** A grenade that has been pulled but not thrown: the aim it was pulled with,
 *  held while the question is answered. See throwGrenade(). */
type PendingNade = { c: number; s: number; up: number; vx: number; vy: number };
type Quiz = { kind: "reload" | "stomp" | "nade" | "debrief" | "terminal"; qs: Question[]; index: number; time: number; per: number; picked: number | null; feedback: number; results: boolean[]; target: Alien | null; nade?: PendingNade; terminal?: Terminal };
/** The Director, deck 10's boss. `shield` is how many seconds of world time
 *  his shield has left DOWN — 0 means it is up and nothing hurts him. */
type Boss = { x: number; y: number; face: number; hp: number; room: string | null; awake: boolean; dead: boolean; shield: number; phase: number; cooldown: number; strafe: number; strafeT: number; hurt: number };
/** A shield-override terminal. `lock` counts down after a wrong answer,
 *  `cool` after one that worked; it can be used when both are zero. */
type Terminal = { x: number; y: number; lock: number; cool: number };

// The 3D view is drawn at 576x324 and scaled up. If a computer can't draw that
// in time, it drops to 480x270 by itself (see frame()): smoother beats sharper.
const SHARP = [576, 324] as const, LIGHT = [480, 270] as const;
const PITCH_MAX = 150; // how far up or down you can look, in pixels of horizon shift
const RADIUS = 0.22, ALIEN_R = 0.26, ALIEN_H = 0.58, WALK = 2.6, RUN = 4.2;
const GRAVITY = 7.5, JUMP = 2.6; // a jump clears waist-high cover and little else
const DECOR = new Set(["lamp", "canister", "holo"]);

// ── weapons, and where you hit them ─────────────────────────────────────────
//
// An alien has 40 health, and that number is doing a lot of work. At 30 a
// blaster headshot and a blaster body shot BOTH killed in two, so a head zone
// would have been invisible — the feature would have existed and changed
// nothing. 40 is the smallest number that makes head, torso and legs come out
// as three different answers for both weapons:
//
//                    head x1.75      torso x1.0      legs x0.55
//   blaster (15)     26.25 → 2       15   → 3        8.25 → 5
//   rifle    (8)     14    → 3        8   → 5        4.4  → 10
//
// A headshot therefore saves you exactly one shot, AND ONLY IF YOU FOLLOW IT
// UP PROPERLY: head then body is 41.25 and kills in two, head then legs is
// 34.50 and leaves it standing — worse than simply aiming at the chest. The
// head opens the door; the second shot has to walk through it.
const ALIEN_HP = 40;
const ZONE_MULT: Record<Zone, number> = { head: 1.75, torso: 1.0, legs: 0.55 };
// Where the zones sit down the alien's drawn height, 0 at the top of its head.
//
// ⚠️ THESE TWO NUMBERS WERE 0.25 AND 0.65 AND THEY MADE THE WHOLE FEATURE
// POINTLESS, which was found by running the real arithmetic rather than by
// looking at the picture. An alien is ALIEN_H = 0.58 tall and your eye is at
// 0.5, so a crosshair at rest — pitch zero, no recoil — crosses its body at
// (0.58 - 0.5) / 0.58 = 0.138 down from the crown, AT EVERY DISTANCE. With a
// head band of 0.25 the resting crosshair was therefore ALWAYS on the head,
// so every competent player two-shot everything, "three body shots" never
// happened to anybody, and the three zones collapsed back into one.
//
// At 0.10 the resting shot is unambiguously a TORSO shot and the head has to
// be aimed for. There is a permanent check on exactly that (check-security),
// because it is not visible in either number on its own.
//
// What that costs: the head band is a tenth of the sprite, which at ten
// squares is under three pixels of a twenty-eight-pixel alien. That is
// perspective doing its job rather than a problem — the reticle names the
// zone BEFORE you fire, so a head shot is a close-range skill and at range
// you take the torso, which is exactly how it should feel.
const HEAD_BELOW = 0.10, LEGS_BELOW = 0.55;
const PISTOL_DMG = 15, KNIFE_DMG = 20;
// ── the knife: five good kills, then a bad one ──────────────────────────────
//
// Matthew: "get rid of nearly all of the ammo dropped on the floor and make a
// knife usable only 5 times." The reason is the measurement: an alien is two
// knife swings, and a swing costs nothing, so A FULL CLEAR OF ALL NINE DECKS
// COULD COST ZERO QUESTIONS. The knife was not a fallback, it was a way to
// play the whole game without revising.
//
// ⚠️ BUT IT BLUNTS, IT DOES NOT BREAK, and that is not softness — it is about
// which student it would have hit. Out of cells, knife gone, cornered: you
// press R, the world keeps running while you answer, you get it wrong, and
// now you are being shot with no way to fight back at all. Three wrong
// answers is a death spiral, and it lands hardest on exactly the person this
// site exists for. At 8 damage a kill takes five swings instead of two —
// desperate, slow, and always there.
const KNIFE_USES = 5, KNIFE_BLUNT = 8;
/** How far a knife kill carries. A scuffle is not a gunshot (7 squares), but
 *  it is not silence either — and silence is what made it free. */
const KNIFE_NOISE = 4.5;
//
// ⚠️ The rifle is deliberately NOT "the blaster but better". Per QUESTION the
// blaster wins (3 cells x 15 = 45 against 5 rounds x 8 = 40); per SECOND the
// rifle wins by a lot (73 damage against 43). So the blaster is the weapon
// when questions are scarce and you can pick your shots, and the rifle is the
// weapon when three of them are already running at you. Five rounds is exactly
// one torso kill, which is what makes the economy something you can feel:
// one question, one alien.
const RIFLE_DMG = 8, RIFLE_MAG = 15, RIFLE_PER_ANSWER = 5, RIFLE_WAIT = 0.11;
const PISTOL_MAG = 6, PISTOL_PER_ANSWER = 3, PISTOL_WAIT = 0.35;

// ── grenades ────────────────────────────────────────────────────────────────
// Matthew's rule: "one shot it in epicentre, and will hurt if in a metre or two
// away." One square is about a metre here, so: anything inside KILL_R dies
// outright, and past that the damage falls away to nothing by HURT_R.
// ⚠️ NADE_DMG went 60 → 80 alongside alien health 30 → 40, which keeps the
// outright-kill radius at 1.650 squares — identical to what shipped. The blast
// Matthew approved behaves exactly as it did; only the arithmetic underneath
// it moved. A wall between you and it stops all of it (lineOfSight), so
// throwing one round a corner protects you from your own grenade.
const NADE_KILL_R = 0.9, NADE_HURT_R = 2.4, NADE_DMG = 80, NADE_SELF = 85;
const NADE_FUSE = 2.0, NADE_MAX = 3, NADE_SPEED = 7.2, NADE_R = 0.1;
/** Seconds per question in the grenade quiz, and the cooldown a failed one
 *  costs. See throwGrenade() for why the cooldown has to exist at all. */
const NADE_QUIZ_PER = 10, NADE_FAIL_WAIT = 6;
/** How many questions a throw costs. It was three; Matthew, 2026-10-11:
 *  "three is just way too hardcore." One right answer and it flies. The stomp
 *  and the boss's override stay at three — a throw is something you reach for
 *  in a fight, and three questions mid-fight was the part that hurt. */
const NADE_QUIZ_QS = 1;
/** What one alien bolt (the Director's too) or being thrown off a stomp takes
 *  off your 100. It was 20; Matthew, 2026-10-11: "it is genuinely a hard
 *  game." 15 means a full suit takes seven hits instead of five. */
const HIT_DMG = 15;

// ⚠️ An alien you defeat drops a single cell, two times in five — and the
// arithmetic is the whole point. Shooting one costs TWO cells and returns 0.4,
// so the blaster is still paid for by answering questions and nothing else.
// A knife kill or a stomp costs no cells at all, so creeping up on something
// is the only way fighting pays. That is the incentive this adds: not "shoot
// more", but "it is worth engaging rather than sprinting past everything".
const DROP_CHANCE = 0.3;

/** The least exposed you can be in a breached span, however still you stand.
 *  0.75 is ten squares of sight range against the four you get standing in a
 *  dark aisle on the cargo hold — the two decks' rules at opposite ends. */
const VACUUM_SEEN = 0.75;

/** Keycard colours, for the pickup message and the visor chip. */
const CARD_NAME: Record<string, string> = { blue: "Blue", red: "Red" };

/**
 * How far the deck slows down while you are answering a reload.
 *
 * Matthew's number. The reason it is needed NOW and was not before: until
 * today a magazine was mostly something you found on the floor, and R was an
 * optional top-up you could choose a safe moment for. With ammunition off the
 * floor the only way to shoot is to answer, so the game started demanding
 * that you stand still and read a question with three of them running at you.
 * That is not difficulty, it is a design punishing the thing the site exists
 * to encourage.
 *
 * ⚠️ IT SLOWS THE WORLD, NOT THE CLOCKS. Three things deliberately keep real
 * time while everything else runs at a third:
 *   - the question's own 10-second timer, or a slowed world would hand you 30
 *     seconds to think and the pressure would be gone;
 *   - the run clock, because pace is 30 of the 100 marks and a slowed clock
 *     would make "press R constantly" a way to beat par;
 *   - the model-answer hold, for the same reason as the question timer.
 * So the cost of reloading is unchanged on the scoreboard. What changes is
 * that you can survive doing it.
 */
const RELOAD_SLOW = 3;

/** How long a WRONG answer stays on screen with the right one showing. Long
 *  enough to read a sentence; skippable with SPACE for anyone who does not
 *  need it. A right answer still moves on in 0.7s. */
const WRONG_HOLD = 3.2;
/** Seconds per question in the "before you go" round. Longer than a reload's
 *  ten because nothing is shooting at you and the point is to get it right. */
const DEBRIEF_PER = 20;

// ── the boss: the Director, on the hangar deck ──────────────────────────────
//
// ⚠️ HE IS SHIELDED, AND ONLY THE QUESTIONS TAKE IT DOWN. Bullets, the knife
// and grenades all do nothing while the shield is up. Four terminals stand in
// the corners of the hangar: E at one opens a three-question override, run in
// "reload" mode so it inherits the reload's rules exactly — the deck at a
// third, the question timer and the run clock on real time, owed questions
// for anything missed. Three right and the shield is down for SHIELD_DOWN
// seconds of world time; one wrong and that terminal locks.
//
// A boss you can shoot down is a test of aim with a quiz attached. This one
// is a quiz with a gun attached, which is the right way round for this site.
//
// The sizing, worked from the real weapons: a full rifle magazine is 15 x 8 =
// 120 damage in 1.7 seconds and a full blaster 6 x 15 = 90, so one eight-
// second window is worth about 120 to 330 depending on what you walked in
// with and whether you reload inside it. 480 health is therefore three or
// four windows: nine to twelve right answers at the terminals, plus the
// reloads that feed the guns. That is deck 9's question count again, spent
// in one room.
const BOSS_HP = 480;
/** His collision radius. The drawn body is wider than an alien's by about this much. */
const BOSS_R = 0.42;
/** Half his drawn width at one square away, as a fraction of the projection — what a shot must land inside. */
const BOSS_HALF_W = 0.34;
const SHIELD_DOWN = 8;
const TERMINAL_Q = 3, TERMINAL_PER = 10;
/** A wrong answer locks that terminal; one that worked has to recharge. The
 *  recharge is what makes you cross the hangar for the next window rather
 *  than standing at one console answering until he falls over. */
const TERMINAL_LOCK = 10, TERMINAL_COOL = 25;
/** How close you have to be to work a terminal. */
const TERMINAL_REACH = 1.25;
/** Bolts in a volley, and the fan they spread across. Slower than an alien's
 *  6.2, so a volley is something you can SEE coming and step out of. */
const BOSS_VOLLEY = 5, BOSS_SPREAD = 0.5, BOSS_BOLT_SPEED = 5.2;
/** Aliens he calls in at two-thirds and one-third health. */
const BOSS_SUMMON = 3;

// ⚠️ Grenades belong to the deck that HAS them, not to the game. Matthew asked
// for them "in the storage level that is new, not everywhere", and the way to
// keep that true as levels are added is to derive it from what is actually
// lying on the floor rather than writing "level 4" into three different places.
// The controls card, the starting kit and the visor all read this one answer.
function hasGrenades(def: LevelDef) { return def.SPRITES.some((s) => s.t === "grenade"); }
/** Same rule, same reason, for the assault rifle: derived from the deck, never
 *  from its number. Level 5's hangar door will not open without one. */
function hasRifle(def: LevelDef) { return def.SPRITES.some((s) => s.t === "rifle"); }

/**
 * A fingerprint of a deck's layout, stored with every save.
 *
 * ⚠️ A save holds positions: where each alien is, where each dropped cell lies,
 * which door (by its place in the list) is open. Redesign the deck — move a
 * wall, add an alien, reorder the doors — and an old save would put aliens
 * inside the new walls and open the wrong doors. So the save remembers what
 * the deck looked like, and if that has changed, restoreSave puts you at the
 * deck's start carrying what you had, rather than loading nonsense.
 */
export function levelPrint(def: LevelDef): string {
  const text = JSON.stringify([def.W, def.H, def.START, def.DOORS.map((d) => d.cells), def.SPRITES.map((t) => [t.t, t.x, t.y])]);
  let h = 2166136261; // FNV-1a: not security, just "is this the same deck"
  for (let i = 0; i < text.length; i++) { h ^= text.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; }
  return `${def.TITLE}|${def.W}x${def.H}|${h.toString(16)}`;
}

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
  /**
   * Questions answered WRONG on this deck and not yet answered again.
   *
   * ⚠️ A wrong answer used to be shown once — the model answer held on screen
   * for 3.2s — and then gone for good. That marks you and moves on, which is
   * the least useful thing a revision tool can do with a mistake. Now it is
   * OWED: it jumps the queue at your NEXT reload (not the same one — a little
   * spacing is what makes a second attempt mean something), and anything still
   * owed when you reach the lift gets one more go in a short "before you go"
   * round. Retrieval, correction, second attempt — what /review does across
   * days, done inside one deck.
   */
  private owed: Question[] = [];

  // player
  private p = { x: 0, y: 0, vx: 0, vy: 0, z: 0, vz: 0, angle: 0, pitch: 0, eye: 0.5, health: 100, vest: 0, ammo: 0, hasPistol: false, weapon: "knife" as Weapon, keys: new Set<string>(), radTime: 0, bob: 0, kick: 0, flash: 0, hurt: 0, fireWait: 0,
    hasRifle: false, rifleAmmo: 0,
    /** Full-damage knife kills left. Past this it still swings, just badly. */
    knife: KNIFE_USES,
    grenades: 0, nadeWait: 0,
    /** Recoil, in pixels of horizon: the view jumps and settles, so a shot has weight. */
    recoil: 0, recoilV: 0,
    /** Counts down after a shot connects, and draws the hit marker. 2 = a kill. */
    hitMark: 0, hitKill: false,
    /** Which zone the last shot that connected hit, for the marker's colour. */
    hitZone: null as Zone | null,
    /** How visible you are right now, 0-1, from the light you are standing in. */
    exposure: 0 };
  private carry = { health: 100, vest: 0, ammo: 0, hasPistol: false, hasRifle: false, rifleAmmo: 0, grenades: 0, knife: KNIFE_USES };
  private aliens: Alien[] = [];
  /** The boss, on the one deck that has him; null everywhere else. */
  private boss: Boss | null = null;
  private terminals: Terminal[] = [];
  private pickups: Pickup[] = [];
  private decor: Drawable[] = [];
  private bolts: Bolt[] = [];
  private nades: Nade[] = [];
  private fx: Fx[] = [];
  /** Whole-screen shake, in pixels, from an explosion going off near you. */
  private shake = 0;
  /** Counts down between splash sounds, so wading is a rhythm not a buzz. */
  private splash = 0;
  /** The horizon the AIM is tested against: pitch and recoil, never the random
   *  shake jolt. See the comment where it is set in draw(). */
  private aimHorizon = 0;
  /** A results or death screen ignores taps for this long, so the tap you were
   *  already making at FIRE does not dismiss the grade you just earned. */
  private screenLock = 0;
  /** Does this deck have grenades on it? (See hasGrenades, above.) */
  private hasNades = false;
  /** Likewise the rifle: on this deck, or already in your hands. */
  private hasGun = false;
  /** The best previous run on this deck, read once when it is finished. */
  private bestBefore: LevelBest | undefined;

  // ── touch ────────────────────────────────────────────────────────────────
  // A phone has no keyboard and no pointer lock, so the whole input model
  // changes: a stick for moving, a drag for looking, circles for the keys, and
  // the quiz answered by tapping the answer rather than pressing 1-4.
  /** On a touchscreen? Decided once, from the device, not from the width —
   *  a touchscreen laptop is wide and still has no keyboard shortcut for R. */
  private touchDevice = false;
  /** The finger driving the movement stick, and where it started. */
  private stickTouch: { id: number; ox: number; oy: number; dx: number; dy: number } | null = null;
  /** The finger looking around, and where it was last frame. */
  private lookTouch: { id: number; x: number; y: number } | null = null;
  /** Which on-screen buttons are held, by id, so they can be drawn pressed. */
  private heldButtons = new Map<number, string>();
  /** Is this deck dark enough for the sneaking tip to be worth saying? Worked
   *  out from the baked light map, so it cannot disagree with what you see. */
  private dim = false;
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
    // Jumping ahead hands you what you would have been carrying by then — but
    // only a grenade if that deck is one that has grenades on it at all.
    // ⚠️ The rifle is handed out by what you would ALREADY HAVE PICKED UP,
    // which is the decks BEFORE this one — not, as this first read, whether
    // this deck has one. Those are opposite answers on the flight deck, which
    // is the deck that places it: handing it over at the spawn skips the arms
    // locker, and the hangar door is gated on the rifle precisely to make you
    // go there. Caught by a browser check, not by reading it. The grenade
    // rule below is genuinely the other way round — a grenade is a
    // consumable, so "does this deck use them" is the right question.
    const carriedRifle = LEVELS.slice(0, start).some(hasRifle);
    if (start > 0) this.carry = { health: 100, vest: 0, ammo: 6, hasPistol: true, hasRifle: carriedRifle, rifleAmmo: carriedRifle ? RIFLE_MAG : 0, grenades: hasGrenades(LEVELS[start]) ? 1 : 0, knife: KNIFE_USES };
    if (this.opts.save) this.restoreSave(this.opts.save, this.opts.saveName ?? "your save");
    else this.loadLevel(start);
    // lets automated play-tests reach inside (teleport, read state); harmless in a browser
    (this.ov as HTMLCanvasElement & { game?: Game }).game = this;
    // ⚠️ `pointer: coarse` asks the right question — is the main input a
    // finger — rather than "is the screen narrow", which a touchscreen laptop
    // answers wrongly. `?touch=1` forces it on for testing on a desktop.
    this.touchDevice = typeof window !== "undefined"
      && (new URLSearchParams(location.search).get("touch") === "1"
        || (window.matchMedia?.("(pointer: coarse)").matches ?? false));
    if (this.touchDevice) {
      this.ov.addEventListener("touchstart", this.onTouchStart, { passive: false });
      this.ov.addEventListener("touchmove", this.onTouchMove, { passive: false });
      this.ov.addEventListener("touchend", this.onTouchEnd, { passive: false });
      this.ov.addEventListener("touchcancel", this.onTouchEnd, { passive: false });
    }
    window.addEventListener("keydown", this.onKeyDown);
    window.addEventListener("keyup", this.onKeyUp);
    window.addEventListener("blur", this.onBlur);
    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("pointerlockchange", this.onLockChange);
    this.ov.addEventListener("mousedown", this.onMouseDown);
    this.last = performance.now();
    this.raf = requestAnimationFrame(this.frame);
  }

  /** Which answer is drawn at this point of the visor, or -1. Used by the
   *  touch handler above and by the play-tests, which need to know where to
   *  put a finger without reimplementing the panel's layout. */
  quizAt(x: number, y: number) { return quizChoiceAt(x, y); }

  // ── saves ─────────────────────────────────────────────────────────────────
  // Matthew chose the EXACT MOMENT: where you stand, every alien where it is,
  // ammo, doors, the run clock. The page owns the menu and the database; the
  // game only answers "can you save now", "what is the state", and "put this
  // state back".

  /**
   * Whether a save can be made right now, and if not, why — in words, because
   * a greyed-out button with no reason is a button that looks broken.
   *
   * ⚠️ NEVER WITH A QUESTION ON SCREEN. A save made mid-question, reloaded
   * after a wrong answer, is a way to answer every question twice and only
   * keep the right one — and the answer has already gone to "Revisit your
   * mistakes" by then, so the site would remember one thing and the save
   * another. Finish the question, then save.
   */
  saveStatus(): { can: true; level: number; title: string } | { can: false; reason: string } {
    const live = this.mode === "play" || this.mode === "title" || (this.mode === "paused" && this.pausedFrom === "play");
    if (this.quiz || this.mode === "reload" || this.mode === "stomp" || this.mode === "nade" || (this.mode === "paused" && this.pausedFrom !== "play")) return { can: false, reason: "Finish the question first, then save." };
    if (this.mode === "dead" || this.p.health <= 0) return { can: false, reason: "You can't save once you're down." };
    if (!live) return { can: false, reason: "This deck's done — save once you're on the next one." };
    return { can: true, level: this.levelIndex, title: LEVELS[this.levelIndex].TITLE.replace(/^Level \d+ — /, "") };
  }

  /** Stop the world for the save menu: the same pause as letting go of the
   *  mouse, so the run clock and every alien wait while you choose a slot. */
  pauseForMenu() {
    this.menuOpen = true;
    if (this.mode === "play") { this.pausedFrom = "play"; this.mode = "paused"; }
    this.keys.clear(); this.stickTouch = null; this.lookTouch = null; this.heldButtons.clear();
    if (document.pointerLockElement === this.ov) document.exitPointerLock();
  }

  /** The exact moment, as plain JSON, or null when saving is not allowed. */
  snapshot(): GameSave | null {
    if (!this.saveStatus().can) return null;
    const p = this.p;
    const carry = (c: SavedCarry): SavedCarry => ({ health: c.health, vest: c.vest, ammo: c.ammo, hasPistol: c.hasPistol, hasRifle: c.hasRifle, rifleAmmo: c.rifleAmmo, grenades: c.grenades, knife: c.knife });
    return {
      v: SAVE_VERSION,
      level: this.levelIndex,
      levelPrint: levelPrint(LEVELS[this.levelIndex]),
      player: {
        ...carry(p), x: p.x, y: p.y, z: p.z, vz: p.vz, angle: p.angle, pitch: p.pitch, eye: p.eye,
        weapon: p.weapon, keys: [...p.keys], radTime: p.radTime, nadeWait: p.nadeWait, exposure: p.exposure,
      },
      carry: carry(this.carry),
      aliens: this.aliens.map((a) => ({ x: a.x, y: a.y, face: a.face, hp: a.hp, state: a.state, timer: a.timer, cooldown: a.cooldown, lastX: a.lastX, lastY: a.lastY, strafe: a.strafe, strafeT: a.strafeT })),
      boss: this.boss ? { x: this.boss.x, y: this.boss.y, face: this.boss.face, hp: this.boss.hp, room: this.boss.room, awake: this.boss.awake, dead: this.boss.dead, shield: this.boss.shield, phase: this.boss.phase, cooldown: this.boss.cooldown, strafe: this.boss.strafe, strafeT: this.boss.strafeT } : null,
      terminals: this.terminals.map((t) => ({ lock: t.lock, cool: t.cool })),
      pickups: this.pickups.map((k) => (k.key === undefined ? { t: k.t, x: k.x, y: k.y, taken: k.taken } : { t: k.t, x: k.x, y: k.y, taken: k.taken, key: k.key })),
      doors: this.world.doors.map((d) => ({ open: d.open, target: d.target })),
      bolts: this.bolts.map((b) => ({ x: b.x, y: b.y, vx: b.vx, vy: b.vy, life: b.life })),
      nades: this.nades.map((n) => ({ x: n.x, y: n.y, z: n.z, vx: n.vx, vy: n.vy, vz: n.vz, fuse: n.fuse })),
      owed: this.owed.map((q) => ({ ...q })),
      stats: { ...this.stats },
      hinted: [...this.hinted],
    };
  }

  /**
   * Put a saved moment back. Builds the deck fresh (walls, lights, decor) and
   * then lays the save over it.
   *
   * ⚠️ CLAMPED HERE, against the game's own numbers. parseGameSave only knows
   * a number is sane, not that a clip holds six — a hand-edited save with 999
   * cells would otherwise load as 999 cells. Cheating your own save harms
   * nobody else, but a save should never be able to put the game in a state
   * the game itself could not reach.
   */
  private restoreSave(s: GameSave, name: string) {
    const level = Math.min(LEVELS.length - 1, Math.max(0, s.level));
    const def = LEVELS[level];
    const clampCarry = (c: SavedCarry, minHealth: number): SavedCarry => ({
      health: Math.max(minHealth, Math.min(100, c.health)), vest: Math.max(0, Math.min(100, c.vest)),
      ammo: Math.max(0, Math.min(PISTOL_MAG, c.ammo)), hasPistol: c.hasPistol, hasRifle: c.hasRifle,
      rifleAmmo: Math.max(0, Math.min(RIFLE_MAG, c.rifleAmmo)), grenades: Math.max(0, Math.min(NADE_MAX, c.grenades)),
      knife: Math.max(0, Math.min(KNIFE_USES, c.knife)),
    });
    const finish = (note: string) => {
      this.comms = null; this.commsQueue = [];
      this.mode = "paused"; this.pausedFrom = "play"; this.resumeNote = note;
    };

    // the deck has been redesigned since this was saved: its positions belong
    // to a different map, so start the deck again carrying what you had
    if (s.levelPrint !== levelPrint(def)) {
      this.carry = clampCarry(s.player, 1);
      this.loadLevel(level);
      finish(`“${name}”: this deck has changed since you saved, so you're at its start with everything you were carrying.`);
      return;
    }

    this.carry = clampCarry(s.carry, 1);
    this.loadLevel(level);
    const p = this.p, sp = clampCarry(s.player, 1);
    Object.assign(p, sp);
    // doors first: "is this spot free" depends on which of them are open
    this.world.doors.forEach((d, i) => { const sd = s.doors[i]; if (sd) { d.open = sd.open; d.target = sd.target; } });
    p.z = Math.max(0, s.player.z); p.vz = s.player.vz;
    p.x = s.player.x; p.y = s.player.y;
    // a save that would put you inside something (an old save, a door that
    // closed in the meantime) puts you back at the deck's start instead —
    // stuck in a wall with no way out is the one thing a load must never do
    if (!this.free(p.x, p.y)) { p.x = def.START.x; p.y = def.START.y; p.z = 0; p.vz = 0; }
    p.angle = s.player.angle; p.pitch = Math.max(-PITCH_MAX, Math.min(PITCH_MAX, s.player.pitch)); p.eye = s.player.eye;
    p.keys = new Set(s.player.keys); p.radTime = s.player.radTime; p.nadeWait = s.player.nadeWait; p.exposure = s.player.exposure;
    p.vx = 0; p.vy = 0;
    // only a weapon you are actually carrying
    p.weapon = s.player.weapon === "rifle" && p.hasRifle ? "rifle" : s.player.weapon === "pistol" && p.hasPistol ? "pistol" : s.player.weapon === "knife" ? "knife" : p.hasPistol ? "pistol" : "knife";
    // ⚠️ REPLACED, not matched up by index: the boss calls in aliens part-way
    // through his fight, and dead aliens leave cells behind, so the live lists
    // are not the ones the deck started with
    this.aliens = s.aliens.map((a) => ({ ...a, hp: Math.min(ALIEN_HP, a.hp), hurt: 0 }));
    this.pickups = s.pickups.map((k) => ({ ...k }));
    if (this.boss && s.boss) Object.assign(this.boss, { ...s.boss, hp: Math.min(BOSS_HP, s.boss.hp), hurt: 0 });
    this.terminals.forEach((t, i) => { const st = s.terminals[i]; if (st) { t.lock = st.lock; t.cool = st.cool; } });
    this.bolts = s.bolts.map((b) => ({ ...b }));
    this.nades = s.nades.map((n) => ({ ...n }));
    this.owed = s.owed.map((q) => ({ ...q }));
    this.stats = { ...s.stats };
    this.hinted = new Set(s.hinted);
    this.hasNades = hasGrenades(def) || p.grenades > 0;
    this.hasGun = hasRifle(def) || p.hasRifle;
    this.flow = null;
    finish(`Loaded “${name}”.`);
  }
  /** The page's menu has closed; keys are the game's again. */
  menuClosed() { this.menuOpen = false; this.keys.clear(); }
  /** While the save menu is up the keyboard belongs to it, wherever focus is:
   *  a button that has just disappeared leaves focus on <body>, and the game
   *  used to take the Tab and the Space meant for the menu from there. */
  private menuOpen = false;
  /** What the pause screen says after a load, until you carry on. */
  private resumeNote: string | null = null;

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
    this.ov.removeEventListener("touchstart", this.onTouchStart);
    this.ov.removeEventListener("touchmove", this.onTouchMove);
    this.ov.removeEventListener("touchend", this.onTouchEnd);
    this.ov.removeEventListener("touchcancel", this.onTouchEnd);
    if (document.pointerLockElement === this.ov) document.exitPointerLock();
    this.audio?.close();
  }

  // ── levels ────────────────────────────────────────────────────────────────
  private loadLevel(n: number) {
    this.levelIndex = n;
    // a fresh deck owes nothing: the debrief at the last lift dealt with the
    // old one's, and carrying them across would ask deck 3's questions on deck 4
    this.owed = [];
    const def = LEVELS[n];
    this.world = buildWorld(def, this.tex);
    {
      let total = 0, cells = 0;
      const L = this.world.light;
      for (let i = 0; i < this.world.W * this.world.H; i++) if (this.world.area[i]) { total += (L[i * 3] + L[i * 3 + 1] + L[i * 3 + 2]) / 3; cells++; }
      this.dim = cells > 0 && total / cells < 0.6;
    }
    this.p.x = def.START.x; this.p.y = def.START.y; this.p.angle = def.START.angle; this.p.eye = 0.5; this.p.pitch = 0; this.p.vx = 0; this.p.vy = 0; this.p.z = 0; this.p.vz = 0;
    this.p.health = this.carry.health; this.p.vest = this.carry.vest; this.p.ammo = this.carry.ammo; this.p.hasPistol = this.carry.hasPistol;
    this.p.hasRifle = this.carry.hasRifle; this.p.rifleAmmo = this.carry.rifleAmmo;
    // ⚠️ A SHARP KNIFE EVERY DECK, deliberately. It is a per-deck allowance,
    // not a resource to hoard across the whole game: carrying a blunt knife
    // into deck 9 because of what you did on deck 2 is a punishment nobody
    // would connect to its cause an hour later.
    this.p.knife = KNIFE_USES;
    this.p.grenades = this.carry.grenades; this.p.nadeWait = 0; this.p.recoil = 0; this.p.recoilV = 0; this.p.hitMark = 0; this.shake = 0;
    // ⚠️ Carried grenades count. `hasGrenades(def)` alone meant a deck that
    // places none never offered G — including to a player who walked in with
    // three saved from the cargo hold, which is exactly the person who needs
    // telling. Computed AFTER the carry, or it reads the previous deck's count.
    this.hasNades = hasGrenades(def) || this.p.grenades > 0;
    this.hasGun = hasRifle(def) || this.p.hasRifle;
    // ⚠️ Exposure is a fact about where you are standing NOW. Left over from
    // the last deck it made you arrive EXPOSED — sprint into a lift on deck 3
    // and you spawn on the dark cargo hold visible from twelve squares for the
    // half-second it takes to settle, which is long enough to wake a room.
    this.p.exposure = 0;
    // and a finger still on the stick when the level changed used to keep
    // walking you forward at the new spawn, with no knob drawn to explain it
    this.stickTouch = null; this.lookTouch = null; this.heldButtons.clear();
    this.screenLock = 0;
    this.p.weapon = this.p.hasRifle && this.p.rifleAmmo > 0 ? "rifle" : this.p.hasPistol ? "pistol" : "knife";
    this.p.keys = new Set(); this.p.radTime = 0; this.p.hurt = 0;
    this.aliens = []; this.pickups = []; this.decor = []; this.bolts = []; this.nades = []; this.fx = []; this.quiz = null;
    this.boss = null; this.terminals = [];
    for (const s of def.SPRITES) {
      if (s.t === "alien" || s.t === "alienBack") {
        this.aliens.push({ x: s.x, y: s.y, face: s.face ?? Math.atan2(def.START.y - s.y, def.START.x - s.x) + Math.PI * (s.t === "alienBack" ? 1 : 0), hp: ALIEN_HP, state: "idle", timer: 0, cooldown: 1, lastX: s.x, lastY: s.y, hurt: 0, strafe: 1, strafeT: 0 });
      } else if (s.t === "boss") {
        this.boss = { x: s.x, y: s.y, face: s.face ?? Math.PI, hp: BOSS_HP, room: this.world.area[this.cell(s.x, s.y)], awake: false, dead: false, shield: 0, phase: 0, cooldown: 1.5, strafe: 1, strafeT: 0, hurt: 0 };
      } else if (s.t === "terminal") {
        this.terminals.push({ x: s.x, y: s.y, lock: 0, cool: 0 });
      } else if (DECOR.has(s.t)) this.decor.push({ x: s.x, y: s.y, sprite: s.t });
      else this.pickups.push({ t: s.t, x: s.x, y: s.y, taken: false, key: s.key });
    }
    this.stats = { kills: 0, right: 0, wrong: 0, time: 0 };
    this.comms = null; this.commsQueue = []; this.hinted = new Set(); this.feed = []; this.hits = []; this.lastArea = ""; this.areaBanner = null;
    if (def.INTRO) this.hint("intro", def.INTRO);
    // ⚠️ The controls card is only ever shown for the deck you START on, so
    // walking into the cargo hold from deck 3 never mentioned G. Say it here
    // instead, which covers every way of arriving — including carrying them in.
    if (this.hasNades) this.hint("nades", this.touchDevice ? "Grenades on this deck — the G button lobs one." : "Grenades on this deck — press G to lob one.");
  }

  // ── input ─────────────────────────────────────────────────────────────────
  private onLockChange = () => {
    if (this.touchDevice) return; // there is no lock to lose on a phone
    const locked = document.pointerLockElement === this.ov;
    // (a stomp counts too: its clock must stop while you're away)
    if (!locked && (this.mode === "play" || this.mode === "reload" || this.mode === "stomp" || this.mode === "nade" || this.mode === "debrief")) { this.pausedFrom = this.mode; this.mode = "paused"; this.keys.clear(); }
  };
  private lock() { if (!this.touchDevice) this.ov.requestPointerLock?.(); this.ensureAudio(); }
  private onMouseDown = (e: MouseEvent) => {
    if (this.mode === "title") { this.mode = "play"; this.opts.onStart?.(); this.lock(); return; }
    if (this.mode === "paused") { this.mode = this.pausedFrom; this.resumeNote = null; this.opts.onStart?.(); this.lock(); return; }
    if (this.mode === "dead" || this.mode === "complete" || this.mode === "done") return;
    if (this.touchDevice) return; // a phone's tap is handled by onTouchStart
    if (document.pointerLockElement !== this.ov) { this.lock(); return; }
    if (e.button === 0 && (this.mode === "play" || this.mode === "reload")) this.fire();
  };
  private onMouseMove = (e: MouseEvent) => {
    if (document.pointerLockElement !== this.ov || this.mode === "stomp" || this.mode === "nade" || this.mode === "debrief") return;
    // clamped, because some browsers report one huge jump when the mouse is captured
    this.p.angle += Math.max(-250, Math.min(250, e.movementX)) * 0.0026;
    // looking up and down shifts the horizon (the way Doom-era engines did it),
    // and the crosshair stays in the middle of the screen, so you shoot where you look
    this.p.pitch = Math.max(-PITCH_MAX, Math.min(PITCH_MAX, this.p.pitch - Math.max(-250, Math.min(250, e.movementY)) * 0.9));
  };
  private onKeyDown = (e: KeyboardEvent) => {
    // ⚠️ Typing a save's name is typing on the same window the game listens
    // to. Without this, a space in the name was swallowed (the game cancels
    // SPACE so it can jump) and a G in it tried to throw a grenade.
    if (this.menuOpen || (e.target instanceof Element && e.target.closest("input, textarea, select, [role=dialog]"))) return;
    const k = e.key.toLowerCase();
    if (["arrowup", "arrowdown", "arrowleft", "arrowright", " ", "tab"].includes(k) && this.mode !== "title") e.preventDefault();
    this.keys.add(k);
    // read digits by KEY POSITION, so they still work while Shift (run) is held,
    // when the browser reports "!" instead of "1", and from the number pad
    const digit = /^(?:Digit|Numpad)([1-4])$/.exec(e.code)?.[1] ?? (["1", "2", "3", "4"].includes(k) ? k : null);
    if (this.quiz && this.quiz.picked === null && digit && (this.mode === "reload" || this.mode === "stomp" || this.mode === "nade" || this.mode === "debrief")) { this.answer(Number(digit) - 1); return; }
    // reading the model answer is optional: SPACE or Enter moves straight on.
    // ⚠️ Checked BEFORE the jump/stomp handler below, or SPACE would make you
    // jump while the panel is up rather than dismissing it.
    if (this.quiz && this.quiz.picked !== null && this.quiz.feedback > 0 && (k === " " || k === "enter")) { this.quiz.feedback = 0; return; }
    if (this.mode === "dead" && k === "enter") { this.loadLevel(this.levelIndex); this.mode = "play"; this.lock(); return; }
    if (this.mode === "complete" && k === "enter") {
      this.carry = { health: Math.max(this.p.health, 50), vest: this.p.vest, ammo: this.p.ammo, hasPistol: this.p.hasPistol, hasRifle: this.p.hasRifle, rifleAmmo: this.p.rifleAmmo, grenades: this.p.grenades, knife: KNIFE_USES };
      if (this.levelIndex + 1 < LEVELS.length) { this.loadLevel(this.levelIndex + 1); this.mode = "play"; this.lock(); } else this.mode = "done";
      return;
    }
    if (this.mode !== "play" && this.mode !== "reload") return;
    // ⚠️ A held key repeats about thirty times a second. Firing is rate-limited
    // by fireWait and walking reads `this.keys`, so neither cares — but G with
    // no grenades machine-gunned the error beep, and M flipped the sound on and
    // off until you let go. An action happens once per press.
    if (e.repeat) return;
    if (k === "f" || k === "control") this.fire(); // keyboard shooting, like Doom's Ctrl
    if (k === "r") this.startReload();
    if (k === "e") this.use();
    if (k === "g") this.throwGrenade();
    if (k === " ") { if (this.stompTarget()) this.tryStomp(); else this.jump(); }
    if (k === "m") this.muted = !this.muted;
    // ⚠️ Not while a quiz is on screen. The 3.2s hold after a wrong answer is
    // still `reload` mode, so "1" fell through to here and silently swapped you
    // to the knife — you closed the quiz with six cells and a melee weapon.
    if (!this.quiz && digit === "1") this.p.weapon = "knife";
    if (!this.quiz && digit === "2" && this.p.hasPistol) this.p.weapon = "pistol";
    if (!this.quiz && digit === "3" && this.p.hasRifle) this.p.weapon = "rifle";
  };
  private onKeyUp = (e: KeyboardEvent) => { this.keys.delete(e.key.toLowerCase()); };

  // ── touch input ───────────────────────────────────────────────────────────
  /** A touch point in the visor's own 1280x720 space, whatever size the
   *  canvas is being displayed at and wherever the black bars are. */
  private toVisor(t: Touch): [number, number] {
    const r = this.ov.getBoundingClientRect();
    return [((t.clientX - r.left) / r.width) * HUD_W, ((t.clientY - r.top) / r.height) * HUD_H];
  }
  /** What one press does. Shared by a tap and by the key of the same name, so
   *  the two can never drift into doing different things. */
  private press(id: string) {
    if (id === "fire") this.fire();
    else if (id === "reload") this.startReload();
    else if (id === "swap") this.swapGun();
    else if (id === "use") this.use();
    else if (id === "nade") this.throwGrenade();
    else if (id === "jump") { if (this.stompTarget()) this.tryStomp(); else this.jump(); }
  }
  private onTouchStart = (e: TouchEvent) => {
    if (!this.touchDevice) return;
    e.preventDefault();
    this.ensureAudio();
    for (const t of Array.from(e.changedTouches)) {
      const [x, y] = this.toVisor(t);
      // ⚠️ Starting and un-pausing come FIRST: on a phone there is no pointer
      // lock to click for, so the tap that starts the game must not also fire
      // the blaster underneath the title card.
      if (this.mode === "title" || this.mode === "paused") {
        this.mode = this.mode === "title" ? "play" : this.pausedFrom; this.resumeNote = null; this.opts.onStart?.(); continue;
      }
      // ⚠️ On a phone any tap advances these screens, and you are usually
      // mid-tap on FIRE when you die. Without a short lock the grade you just
      // earned is gone before you have read a word of it.
      if ((this.mode === "dead" || this.mode === "complete") && this.screenLock > 0) continue;
      if (this.mode === "dead") { this.loadLevel(this.levelIndex); this.mode = "play"; continue; }
      if (this.mode === "complete") {
        this.carry = { health: Math.max(this.p.health, 50), vest: this.p.vest, ammo: this.p.ammo, hasPistol: this.p.hasPistol, hasRifle: this.p.hasRifle, rifleAmmo: this.p.rifleAmmo, grenades: this.p.grenades, knife: KNIFE_USES };
        if (this.levelIndex + 1 < LEVELS.length) { this.loadLevel(this.levelIndex + 1); this.mode = "play"; } else this.mode = "done";
        continue;
      }
      if (this.mode === "done") continue;
      // a quiz takes the whole screen: tap the answer, or tap anywhere to move on
      if (this.quiz) {
        if (this.quiz.picked !== null) { if (this.quiz.feedback > 0) this.quiz.feedback = 0; continue; }
        const choice = quizChoiceAt(x, y);
        if (choice >= 0) { this.answer(choice); continue; }
        // ⚠️ and nothing else. The buttons are NOT DRAWN while a quiz is up
        // (see `touch:` in draw), but they used to still be hit-tested, so a
        // thumb resting to the right of the reload panel — where FIRE lives —
        // spent a cell you were answering questions to earn, invisibly.
        continue;
      }
      const button = touchButtons({ grenades: this.p.grenades, guns: this.gunCount() }).find((b) => Math.hypot(x - b.x, y - b.y) <= b.r);
      if (button) { this.heldButtons.set(t.identifier, button.id); this.press(button.id); continue; }
      if (!this.stickTouch && Math.hypot(x - TOUCH_STICK.x, y - TOUCH_STICK.y) <= TOUCH_STICK.r * 1.35) {
        this.stickTouch = { id: t.identifier, ox: x, oy: y, dx: 0, dy: 0 }; continue;
      }
      if (!this.lookTouch) this.lookTouch = { id: t.identifier, x, y };
    }
  };
  private onTouchMove = (e: TouchEvent) => {
    if (!this.touchDevice) return;
    e.preventDefault();
    // the mouse handler has this guard; the touch one did not, so a finger
    // still turned the camera behind a stomp panel or a death screen
    if (this.mode !== "play" && this.mode !== "reload") return;
    for (const t of Array.from(e.changedTouches)) {
      const [x, y] = this.toVisor(t);
      if (this.stickTouch?.id === t.identifier) {
        const reach = TOUCH_STICK.r - TOUCH_STICK.knob;
        let dx = (x - this.stickTouch.ox) / reach, dy = (y - this.stickTouch.oy) / reach;
        const len = Math.hypot(dx, dy);
        if (len > 1) { dx /= len; dy /= len; }
        this.stickTouch.dx = dx; this.stickTouch.dy = dy;
      } else if (this.lookTouch?.id === t.identifier) {
        // the same sensitivity as the mouse, in visor pixels rather than
        // device pixels, so it feels the same on any size of screen
        this.p.angle += (x - this.lookTouch.x) * 0.0042;
        this.p.pitch = Math.max(-PITCH_MAX, Math.min(PITCH_MAX, this.p.pitch - (y - this.lookTouch.y) * 0.7));
        this.lookTouch.x = x; this.lookTouch.y = y;
      }
    }
  };
  private onTouchEnd = (e: TouchEvent) => {
    if (!this.touchDevice) return;
    e.preventDefault();
    for (const t of Array.from(e.changedTouches)) {
      if (this.stickTouch?.id === t.identifier) this.stickTouch = null;
      if (this.lookTouch?.id === t.identifier) this.lookTouch = null;
      this.heldButtons.delete(t.identifier);
    }
  };
  // Alt-Tab away while holding W and the browser never sends the key-up: without
  // this you would come back to a player still walking into a wall.
  private onBlur = () => {
    this.keys.clear();
    // the same hazard on a touchscreen: an app switch or an incoming call can
    // swallow the touchend, and the stick keeps its last push with no finger on
    // the screen and no knob drawn to explain why you are walking
    this.stickTouch = null; this.lookTouch = null; this.heldButtons.clear();
  };

  // ── sound: tiny synthesised effects, no files ──────────────────────────────
  private ensureAudio() { if (!this.audio) { try { this.audio = new AudioContext(); } catch { this.audio = null; } } }
  private beep(freq: number, to: number, dur: number, type: OscillatorType = "square", vol = 0.08) {
    const a = this.audio; if (!a || this.muted) return;
    const o = a.createOscillator(), g = a.createGain(); o.type = type;
    o.frequency.setValueAtTime(freq, a.currentTime); o.frequency.exponentialRampToValueAtTime(Math.max(30, to), a.currentTime + dur);
    g.gain.setValueAtTime(vol, a.currentTime); g.gain.exponentialRampToValueAtTime(0.0001, a.currentTime + dur);
    o.connect(g).connect(a.destination); o.start(); o.stop(a.currentTime + dur);
  }
  /** A burst of filtered noise. A pure tone is a "pew"; a shot or an explosion
   *  is mostly noise, and layering the two is what makes one sound like a hit
   *  rather than a beep. Built here rather than loaded, like every other sound. */
  private noise(dur: number, vol: number, from: number, to: number) {
    const a = this.audio; if (!a || this.muted) return;
    const n = Math.max(1, Math.floor(a.sampleRate * dur));
    const buf = a.createBuffer(1, n, a.sampleRate), ch = buf.getChannelData(0);
    for (let i = 0; i < n; i++) ch[i] = (Math.random() * 2 - 1) * (1 - i / n);
    const src = a.createBufferSource(); src.buffer = buf;
    const f = a.createBiquadFilter(); f.type = "lowpass";
    f.frequency.setValueAtTime(from, a.currentTime); f.frequency.exponentialRampToValueAtTime(Math.max(50, to), a.currentTime + dur);
    const g = a.createGain(); g.gain.setValueAtTime(vol, a.currentTime); g.gain.exponentialRampToValueAtTime(0.0001, a.currentTime + dur);
    src.connect(f).connect(g).connect(a.destination); src.start();
  }

  // ── short-lived effects: flashes, tracers, sparks, fire and smoke ──────────
  // None of these touch the game at all. They exist so a shot LOOKS like it
  // went somewhere and landed on something, which is what Matthew meant by
  // "more energetic and lively" — the shooting worked, it just felt flat.
  private addFx(sprite: string, x: number, y: number, z: number, life: number, scale: number, opts: { vx?: number; vy?: number; vz?: number; grow?: number; drag?: number } = {}) {
    if (this.fx.length > 110) this.fx.shift(); // a cap, so a firefight can't pile up thousands
    this.fx.push({ x, y, z, vx: opts.vx ?? 0, vy: opts.vy ?? 0, vz: opts.vz ?? 0, sprite, t: 0, life, scale, grow: opts.grow ?? 0, drag: opts.drag ?? 0 });
  }
  private updateFx(dt: number) {
    for (const f of this.fx) {
      f.t += dt;
      f.x += f.vx * dt; f.y += f.vy * dt; f.z += f.vz * dt;
      const k = Math.max(0, 1 - f.drag * dt);
      f.vx *= k; f.vy *= k; f.vz *= k;
      f.scale += f.grow * dt;
    }
    if (this.fx.some((f) => f.t >= f.life)) this.fx = this.fx.filter((f) => f.t < f.life);
    this.shake = Math.max(0, this.shake - dt * 2.4);
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
    if (this.mode === "play") this.update(dt);
    else if (this.mode === "reload") this.update(dt / RELOAD_SLOW);
    else {
      // ⚠️ shake and recoil are decayed inside update(), which stops the moment
      // you die or pause — so a death caused by your own grenade left the
      // "Suit failure" card jittering over the world for as long as you left it
      // there. They have to settle on every screen.
      this.shake = Math.max(0, this.shake - dt * 2.4);
      this.p.recoil *= Math.max(0, 1 - dt * 6); this.p.recoilV = 0;
    }
    if (this.screenLock > 0) this.screenLock = Math.max(0, this.screenLock - dt);
    // ⚠️ The run clock KEEPS RUNNING while a grenade quiz is up, even though
    // nothing else does. It is the only cost a failed throw carries besides
    // the cooldown, and pace is 30 of the 100 marks on a deck — without this
    // line the freeze is genuinely free, and "press G to stop the world" is
    // then the correct way to play, which is the opposite of the point.
    // ⚠️ Measured here rather than in update(), which is exactly what does
    // not run in this mode — and, since RELOAD_SLOW, is also handed a third
    // of a second in the mode that does. The run clock is REAL TIME in every
    // mode where the deck is live, or slowing the world would quietly buy you
    // pace marks and reloading would become a way to beat par.
    if (this.mode === "play" || this.mode === "reload" || this.mode === "nade") this.stats.time += dt;
    if (this.mode === "stomp" || this.mode === "reload" || this.mode === "nade" || this.mode === "debrief") this.updateQuiz(dt);
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
  /** Standing in a section of hull that is open to space.
   *
   * Read off the AREA the cell belongs to rather than stored per cell, so it
   * is one word in the level data and nothing in world.ts had to change.
   *
   * ⚠️ The rule it buys is an INVERSION of the cargo hold's, and that is the
   * point of it. On deck 4 the dark hides you but you have to move slowly.
   * Here there is no air, so NOTHING YOU DO MAKES A SOUND ANYONE CAN HEAR —
   * you can empty the rifle and nothing comes looking — but there is no cover
   * and the stars light you up, so you are seen from further away than
   * anywhere else in the game. Loud and safe, or quiet and visible: the two
   * decks pull in opposite directions, which is what stops the last one being
   * the dark one again with more aliens in it. */
  private inVacuum(x = this.p.x, y = this.p.y) {
    const key = this.world.area[this.cell(x, y)];
    return !!(key && this.world.def.AREAS[key]?.vacuum);
  }

  private update(dt: number) {
    const p = this.p, w = this.world;
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
    // the on-screen stick adds to the same two numbers, so nothing downstream
    // has to know whether a finger or a key asked for it
    let stickPush = 0;
    if (this.stickTouch) {
      stickPush = Math.hypot(this.stickTouch.dx, this.stickTouch.dy);
      // a dead zone, so a thumb resting on the stick does not walk you into a
      // wall for the rest of the level
      if (stickPush > 0.15) { fwd -= this.stickTouch.dy; strafe += this.stickTouch.dx; } else stickPush = 0;
    }
    const crouch = this.inDuct();
    // gravity, and the crate you may be standing on
    const ground = this.groundHeight(p.x, p.y);
    if (p.z > ground || p.vz > 0) {
      p.vz -= GRAVITY * dt; p.z += p.vz * dt;
      const headroom = w.ceilH[this.cell(p.x, p.y)] - 0.25;
      if (p.z > headroom) { p.z = headroom; p.vz = Math.min(0, p.vz); }
      if (p.z <= ground) { if (p.vz < -3) this.beep(90, 60, 0.07, "triangle", 0.03); p.z = ground; p.vz = 0; }
    } else p.z = ground;
    // running is Shift, or pushing the stick right to its edge — a phone has
    // no modifier key, and a walk/run choice is what the SEEN bar is about
    const running = (this.keys.has("shift") || stickPush > 0.92) && !crouch;
    const speed = (running ? RUN : WALK) * (crouch ? 0.65 : 1);
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
    // the boss and the terminals are solid too — and the boss you cannot jump
    // over, which an alien two thirds your height you can
    const solids: [number, number, number][] = this.terminals.map((t): [number, number, number] => [t.x, t.y, 0.2]);
    if (this.boss && !this.boss.dead) solids.push([this.boss.x, this.boss.y, BOSS_R]);
    for (const [sx, sy, r] of solids) {
      const dx = p.x - sx, dy = p.y - sy, d = Math.hypot(dx, dy), min = RADIUS + r;
      if (d < min && d > 1e-6) { [p.x, p.y] = pushOut(w, p.x + (dx / d) * (min - d), p.y + (dy / d) * (min - d), RADIUS, p.z); }
    }
    // keep the real speed, so walking into a wall stops you rather than storing speed
    const moved = Math.hypot(p.x - ox, p.y - oy);
    if (dt > 0) { p.vx = (p.x - ox) / dt; p.vy = (p.y - oy) / dt; }
    p.bob += moved * 2.6; // the head bobs with distance actually walked, not keys held
    p.eye += ((crouch ? 0.34 : 0.5) + p.z - p.eye) * Math.min(1, dt * (p.z > 0.01 || p.vz !== 0 ? 30 : 8));
    p.kick = Math.max(0, p.kick - dt * 6); p.flash = Math.max(0, p.flash - dt); p.hurt = Math.max(0, p.hurt - dt * 1.5);
    p.fireWait = Math.max(0, p.fireWait - dt); p.radTime = Math.max(0, p.radTime - dt);
    p.nadeWait = Math.max(0, p.nadeWait - dt); p.hitMark = Math.max(0, p.hitMark - dt * 2.6);
    // Recoil is a spring, not a fixed offset: the view jumps and settles back,
    // so a shot has weight. It moves the AIM as well as the picture, because
    // the crosshair is tested against the horizon the last frame actually drew.
    p.recoilV -= (p.recoil * 190 + p.recoilV * 16) * dt; p.recoil += p.recoilV * dt;
    this.tickExposure(dt);
    this.tickVisor(dt);

    // doors open as you walk up (except locked, secret and lift doors)
    for (const d of w.doors) {
      const cx = d.box.x0 + d.box.w / 2, cy = d.box.y0 + d.box.h / 2;
      const near = Math.hypot(p.x - cx, p.y - cy) < 1.6;
      if (near && !d.secret && !d.exit) {
        if (d.key && !p.keys.has(d.key)) {
          // one hint per colour: a deck with two locks that says the same
          // thing at both of them sends you to the wrong end of the ship
          if (d.target === 0) this.hint("locked-" + d.key, this.world.def.LOCKED_HINTS?.[d.key] ?? this.world.def.LOCKED_HINT ?? `Locked. It needs the ${d.key} keycard.`);
        }
        else if (d.needs === "pistol" && !p.hasPistol) this.hint("unarmed", "Don't go in there with bare hands! Get the blaster from the armoury first.");
        // ⚠️ Same guard, same reason, for the flight deck: that door opens on
        // the biggest fight in the game, and nobody should walk into it
        // because they missed the room with the rifle in it.
        else if (d.needs === "rifle" && !p.hasRifle) this.hint("norifle", "That's the hangar — it's wide open in there. Get the rifle from the arms locker first.");
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
      if (k.t === "rifle") {
        p.hasRifle = true; p.weapon = "rifle"; p.rifleAmmo = RIFLE_MAG;
        this.pickupMsg(`Assault rifle · ${RIFLE_MAG} rounds`);
        this.hint("rifle", `Rifle up. Softer rounds, far faster — ${RIFLE_PER_ANSWER} per right answer. Aim high: a head shot hurts, but it still takes a second hit.`);
      }
      else if (k.t === "pistol") { p.hasPistol = true; p.weapon = "pistol"; p.ammo = 6; this.pickupMsg("Blaster · 6 cells"); this.hint("pistol", "Got it! Six shots. Press R and answer to recharge: three cells for a right answer, nothing for a wrong one."); }
      else if (k.t === "ammo") { if (!p.hasPistol || p.ammo >= 6) continue; p.ammo = Math.min(6, p.ammo + 3); if (p.weapon === "knife") p.weapon = "pistol"; this.pickupMsg("Energy cells · +3"); }
      else if (k.t === "cell") { if (!p.hasPistol || p.ammo >= 6) continue; p.ammo = Math.min(6, p.ammo + 1); if (p.weapon === "knife") p.weapon = "pistol"; this.pickupMsg("Energy cell · +1"); }
      else if (k.t === "health") { if (p.health >= 100) continue; p.health = Math.min(100, p.health + 25); this.pickupMsg("Med-kit · +25"); }
      else if (k.t === "keycard") {
        // ⚠️ The colour comes off the level, defaulting to blue, so the six
        // decks written before there were two colours behave identically.
        const col = k.key ?? "blue";
        p.keys.add(col); this.pickupMsg(`${CARD_NAME[col] ?? col} keycard`);
        this.hint("keycard-" + col, `The ${col} keycard! Now its door will open.`);
      }
      else if (k.t === "radsuit") { p.radTime = 30; this.pickupMsg("Radiation suit · 30 s"); this.hint("radsuit", "Radiation suit on: you can wade through the coolant for 30 seconds."); }
      else if (k.t === "vest") { p.vest = 100; this.pickupMsg("Vest · takes a third of the damage"); }
      else if (k.t === "grenade") {
        if (p.grenades >= NADE_MAX) continue;
        p.grenades = Math.min(NADE_MAX, p.grenades + 1); this.pickupMsg("Grenade · press G to throw");
        this.hint("grenade", "A grenade! Press G to lob it. Anything right beside it is finished; a square or two away it only hurts — you included.");
      }
      k.taken = true; this.beep(520, 900, 0.15, "triangle", 0.06);
    }

    this.updateAliens(dt);
    this.updateBoss(dt);
    this.updateBolts(dt);
    this.updateNades(dt);
    this.updateFx(dt);
  }

  // ── how visible you are ───────────────────────────────────────────────────
  // Level 4 is dark on purpose, and darkness that only changes how a room LOOKS
  // is decoration. So how far an alien can see you is worked out from the light
  // where you are standing and whether you are still, walking or running —
  // 4 squares in a dark corner, standing still, up to 12 in a lit aisle at a
  // run. The visor shows the number, so the rule is visible rather than secret.
  private tickExposure(dt: number) {
    const p = this.p, L = this.world.light, i = this.cell(p.x, p.y) * 3;
    const lit = Math.max(0, Math.min(1, ((L[i] + L[i + 1] + L[i + 2]) / 3 - 0.15) / 0.75));
    const speed = Math.hypot(p.vx, p.vy);
    const move = speed < 0.3 ? -0.1 : speed < 3.0 ? 0.1 : 0.3;
    // ⚠️ light and movement ADD rather than multiply. Multiplied, a dark room
    // makes the whole term zero and running is then free — which is exactly
    // backwards, because sprinting is the loudest thing you can do. Added, both
    // matter everywhere: creeping in the dark is about 4 squares, walking about
    // 5, and sprinting down a lit aisle about 10.
    // ⚠️ Level 6's irrigation channels: MOVING through water is loud, standing
    // in it is not. One term, added like the other two for the same reason —
    // multiplied, a dark channel would make splashing free. It is deliberately
    // worth more than walking (0.1) and less than sprinting (0.3), so wading
    // across is about as loud as a run and the dry crossing in the middle of
    // the hall is a real decision rather than a longer way round.
    const bare = this.inVacuum();
    const wading = this.world.floorTex[this.cell(p.x, p.y)] === "fWater" && speed >= 0.3 ? 0.22 : 0;
    if (wading && this.splash <= 0) { this.splash = 0.32; this.noise(0.1, 0.035, 2600, 900); }
    this.splash = Math.max(0, this.splash - dt);
    let want = Math.max(0, Math.min(1, lit * 0.7 + move + wading - (this.inDuct() ? 0.2 : 0)));
    // ⚠️ VACUUM IS A FLOOR, NOT A BONUS, and the first version had it as a
    // bonus of 0.3 which made it almost nothing. Measured: standing still in
    // the breach came out at 0.51 against 0.45 in the gallery next door —
    // six hundredths, which no player would ever feel, because the baked
    // light out at the edges of a breached span is LOW and the exposure was
    // being added to a small number. The stars are not a lamp with falloff:
    // out there you are lit from one end to the other, wherever you stand.
    // So vacuum sets a minimum instead, and the rule becomes one you can
    // state — step outside and you are seen from ten squares, full stop.
    if (bare) want = Math.max(want, VACUUM_SEEN);
    p.exposure += (want - p.exposure) * Math.min(1, dt * 4);
    if (wading) this.hint("water", "You're splashing. The channels give you away — cross on the dry strip in the middle.");
    if (bare) this.hint("vacuum", "Hull's open here — no air, so no sound. They can't hear you shoot. They can see you from a mile off.");
  }
  private sightRange() { return 4 + this.p.exposure * 8; }

  // ── grenades ──────────────────────────────────────────────────────────────
  /** G: pull the pin, and the world stops.
   *
   * Matthew's design: "you have to answer three questions when you throw a
   * grenade, the whole world freezes, and you just get the grenade back in
   * your inventory if you fail." So G no longer throws — it OPENS A QUIZ, and
   * the throw is what a right answer buys. (Three questions until 2026-10-11,
   * now NADE_QUIZ_QS — one; three was "way too hardcore".) Nothing in the world moves
   * while it is up: frame() only calls update() in "play" and "reload", so
   * "nade" freezes the aliens, the bolts, the fuses and the clock with one
   * line rather than a pause flag threaded through everything.
   *
   * ⚠️ A FREEZE YOU CAN SUMMON IS A PANIC BUTTON, and that is the one thing
   * this must not become: about to die, press G, and the room politely stops
   * shooting while you think. Three things keep it honest. The aim is taken
   * NOW and held, so you cannot use the pause to line a shot up. A failed
   * quiz costs NADE_FAIL_WAIT seconds before G works again, so it cannot be
   * spammed the moment the world starts moving. And every second spent in
   * here is still run time, which is 30 of the 100 marks on the deck.
   *
   * The grenade is NOT spent until the throw actually happens — losing it as
   * well would make a wrong answer cost twice, and the quiz is supposed to be
   * the price, not a punishment on top of one.
   */
  private throwGrenade() {
    const p = this.p;
    if (this.quiz || p.nadeWait > 0) return;
    if (p.grenades <= 0) { this.pickupMsg("No grenades left"); this.beep(90, 70, 0.07, "square", 0.04); return; }
    if (this.inDuct()) { this.pickupMsg("No room to throw in here"); return; }
    const qs: Question[] = []; for (let i = 0; i < NADE_QUIZ_QS; i++) { const q = this.draw1("reload", qs); if (q) qs.push(q); }
    // no pool to ask from (a topic with almost nothing in it): throw it rather
    // than silently swallowing the button
    if (qs.length < NADE_QUIZ_QS) { this.releaseNade(this.aimNade()); return; }
    this.quiz = {
      kind: "nade", qs, index: 0, time: NADE_QUIZ_PER, per: NADE_QUIZ_PER,
      picked: null, feedback: 0, results: [], target: null, nade: this.aimNade(),
    };
    this.mode = "nade";
    this.beep(520, 760, 0.12, "triangle", 0.05); this.beep(180, 150, 0.22, "sawtooth", 0.04);
  }
  /** The throw you were lining up at the moment the pin came out. Held for the
   *  length of the quiz so the frozen world cannot be used to re-aim. */
  private aimNade(): PendingNade {
    const p = this.p;
    return { c: Math.cos(p.angle), s: Math.sin(p.angle), up: p.pitch / this.R.proj, vx: p.vx, vy: p.vy };
  }
  private failNadeQuiz() {
    const p = this.p;
    this.quiz = null; this.mode = "play";
    p.nadeWait = NADE_FAIL_WAIT;
    this.say("Pin back in — the throw is off. Get it right next time.");
    this.beep(200, 90, 0.35, "sawtooth", 0.06);
  }
  /** Every question right: the grenade actually leaves your hand. */
  private releaseNade(n: PendingNade) {
    const p = this.p;
    this.quiz = null; this.mode = "play";
    p.grenades--; p.nadeWait = 0.65; p.kick = 0.8;
    const up = n.up; // the crosshair's elevation when the pin came out
    const c = n.c, s = n.s;
    const z = Math.max(0.12, p.eye - 0.1);
    // ⚠️ NOT simply 0.35 in front of you. pushOut only keeps your CENTRE 0.22
    // from a wall face, so standing against a shelf and pressing G put the
    // grenade 0.13 INSIDE the shelf: every step was then refused, so it never
    // moved, the wall was nearer than it so the renderer never drew it, and two
    // seconds later it took you from 100 health to dead with nothing on screen
    // to explain why. Step out only as far as is actually free, and if nothing
    // in front of you is, drop it at your feet — where you can at least see it
    // and run.
    let sx = p.x, sy = p.y;
    for (const d of [0.35, 0.26, 0.18]) {
      const tx = p.x + c * d, ty = p.y + s * d;
      if (circleFree(this.world, tx, ty, NADE_R, z)) { sx = tx; sy = ty; break; }
    }
    this.nades.push({
      x: sx, y: sy, z,
      vx: c * NADE_SPEED + n.vx * 0.4, vy: s * NADE_SPEED + n.vy * 0.4, vz: up * NADE_SPEED + 1.5, fuse: NADE_FUSE,
    });
    this.beep(340, 620, 0.09, "triangle", 0.05);
  }
  private updateNades(dt: number) {
    const w = this.world; if (!this.nades.length) return;
    const R = NADE_R;
    for (const n of this.nades) {
      n.fuse -= dt; n.vz -= GRAVITY * dt;
      const nx = n.x + n.vx * dt;
      if (circleFree(w, nx, n.y, R, n.z)) n.x = nx; else { n.vx *= -0.42; n.vy *= 0.85; }
      const ny = n.y + n.vy * dt;
      if (circleFree(w, n.x, ny, R, n.z)) n.y = ny; else { n.vy *= -0.42; n.vx *= 0.85; }
      n.z += n.vz * dt;
      const head = w.ceilH[this.cell(n.x, n.y)] - 0.08;
      if (n.z > head) { n.z = head; n.vz = -Math.abs(n.vz) * 0.4; }
      // the ground under it is the crate top when it is over waist-high cover:
      // without this the horizontal test (taken at the OLD z) lets it in above
      // the crate and the next frame has it below the crate's top, inside it
      const floorZ = w.solid[this.cell(n.x, n.y)] === 2 ? COVER_H + 0.06 : 0.06;
      if (n.z < floorZ) {
        n.z = floorZ;
        if (Math.abs(n.vz) > 0.7) { n.vz = -n.vz * 0.36; this.beep(170, 110, 0.05, "triangle", 0.03); }
        else { n.vz = 0; n.vx *= 0.5; n.vy *= 0.5; }
      }
    }
    const going = this.nades.filter((n) => n.fuse <= 0);
    if (!going.length) return;
    this.nades = this.nades.filter((n) => n.fuse > 0);
    for (const n of going) this.explode(n.x, n.y, n.z);
  }
  private explode(x: number, y: number, z: number) {
    const w = this.world;
    // the fireball, some flying sparks, and smoke left behind
    this.addFx("blast", x, y, Math.max(0.05, z - 0.1), 0.34, 1.3, { grow: 2.0 });
    this.addFx("blast", x, y, Math.max(0.05, z - 0.1), 0.6, 0.8, { grow: 2.8, vz: 0.5 });
    for (let i = 0; i < 7; i++) {
      const a = Math.random() * Math.PI * 2, sp = 1.6 + Math.random() * 3;
      this.addFx("spark", x, y, z, 0.28 + Math.random() * 0.2, 0.7, { vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, vz: 0.8 + Math.random() * 2, drag: 2.5 });
    }
    for (let i = 0; i < 4; i++) {
      const a = Math.random() * Math.PI * 2;
      this.addFx("smoke", x + Math.cos(a) * 0.3, y + Math.sin(a) * 0.3, z, 1.1 + Math.random() * 0.5, 0.6, { vz: 0.35, grow: 0.9, drag: 1.2 });
    }
    this.noise(0.55, 0.22, 1600, 60); this.beep(130, 40, 0.5, "sawtooth", 0.11);

    const falloff = (d: number) => Math.max(0, 1 - (d - NADE_KILL_R) / (NADE_HURT_R - NADE_KILL_R));
    for (const a of this.aliens) {
      if (a.state === "dead") continue;
      const d = Math.hypot(a.x - x, a.y - y);
      if (d > NADE_HURT_R || !lineOfSight(w, x, y, a.x, a.y)) continue;
      if (d <= NADE_KILL_R) { this.kill(a); continue; }
      a.hp -= NADE_DMG * falloff(d); a.hurt = 0.2; a.strafeT = 0;
      if (a.hp <= 0) this.kill(a); else if (a.state === "idle") this.alert(a, 0.2);
    }
    // the boss takes a grenade like anything else when his shield is down —
    // the full blast at the centre, never an outright kill — and nothing when
    // it is up (hurtBoss says so with a spark on the shield)
    const b = this.boss;
    if (b && !b.dead) {
      const d = Math.hypot(b.x - x, b.y - y) - BOSS_R;
      if (d <= NADE_HURT_R && lineOfSight(w, x, y, b.x, b.y)) this.hurtBoss(NADE_DMG * (d <= NADE_KILL_R ? 1 : falloff(d)));
    }
    // it catches YOU too, at the same shape but harder, so throwing one at your
    // own feet is the mistake it ought to be
    const pd = Math.hypot(this.p.x - x, this.p.y - y);
    if (pd < NADE_HURT_R && lineOfSight(w, x, y, this.p.x, this.p.y)) {
      this.damage(NADE_SELF * (pd <= NADE_KILL_R ? 1 : falloff(pd)));
      this.hits.push({ a: Math.atan2(y - this.p.y, x - this.p.x), t: 1 });
    }
    this.shake = Math.min(1.6, this.shake + Math.max(0.25, 1.5 * (1 - pd / 7)));
    // a bang is loud: everything nearby comes looking, whether it saw you or
    // not — unless it went off in vacuum, where there is nothing to carry it
    if (!this.inVacuum(x, y)) for (const a of this.aliens) if (a.state === "idle" && Math.hypot(a.x - x, a.y - y) < 10) this.alert(a, 0.3 + Math.random() * 0.4);
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
    // how far they can see depends on how visible you are (see tickExposure);
    // one already hunting you keeps looking a bit further than one at rest
    if (dist > Math.min(12, this.sightRange() * (a.state === "alert" ? 1.35 : 1))) return false;
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
  private towardsPlayer(a: { x: number; y: number }): [number, number] | null {
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
      if (Math.hypot(b.x - p.x, b.y - p.y) < 0.32) { b.life = 0; this.hits.push({ a: Math.atan2(-b.vy, -b.vx), t: 1 }); this.damage(HIT_DMG); }
    }
    this.bolts = this.bolts.filter((b) => b.life > 0);
  }

  private damage(n: number, quiet = false) {
    const p = this.p;
    if (p.vest > 0) { const soak = Math.min(p.vest, n / 3); p.vest -= soak; n -= soak; }
    p.health -= n; p.hurt = Math.min(1, p.hurt + 0.5);
    if (!quiet) this.beep(140, 60, 0.25, "sawtooth", 0.08);
    if (p.health <= 0) { p.health = 0; this.mode = "dead"; this.quiz = null; this.screenLock = 0.9; document.exitPointerLock(); }
  }

  // ── shooting ──────────────────────────────────────────────────────────────
  /** Out of ammo? Fall back to something that still works, best first.
   *  ⚠️ An empty gun falls back rather than refusing. On a phone there is no
   *  "1" key and no weapon button, so a player out of cells had no attack at
   *  all — and on any device "the blaster is empty, so swing" is what the
   *  knife is for. */
  private fallback() {
    const p = this.p;
    if (p.hasRifle && p.rifleAmmo > 0) { p.weapon = "rifle"; return; }
    if (p.hasPistol && p.ammo > 0) { p.weapon = "pistol"; return; }
    p.weapon = "knife";
    this.say("Out of ammunition — knife out. Press R and answer to recharge; only a right answer charges it.");
  }
  private fire() {
    const p = this.p; if (p.fireWait > 0) return;
    if (p.weapon === "pistol" && p.ammo <= 0) this.fallback();
    if (p.weapon === "rifle" && p.rifleAmmo <= 0) this.fallback();
    const pistol = p.weapon === "pistol", rifle = p.weapon === "rifle";
    const shot = pistol || rifle;
    if (pistol) {
      p.ammo--; p.fireWait = PISTOL_WAIT; p.kick = 1; p.flash = 0.13;
      p.recoilV += 120; this.shake = Math.min(1.6, this.shake + 0.18);
      // three layers rather than one beep: a crack, a thump underneath, and a
      // hiss of noise on top. One tone on its own is what made it sound like a toy.
      this.beep(880, 150, 0.09, "square", 0.05); this.beep(210, 70, 0.17, "sawtooth", 0.05); this.noise(0.12, 0.09, 4200, 500);
    } else if (rifle) {
      // ⚠️ A third of the recoil and a quarter of the shake PER ROUND, because
      // the rifle fires three times as often: the same numbers as the blaster
      // would make the picture unreadable the moment you held the trigger, and
      // the aim is tested against that same horizon.
      p.rifleAmmo--; p.fireWait = RIFLE_WAIT; p.kick = 0.55; p.flash = 0.09;
      p.recoilV += 42; this.shake = Math.min(1.6, this.shake + 0.05);
      this.beep(1040, 260, 0.045, "square", 0.035); this.beep(240, 120, 0.07, "sawtooth", 0.035); this.noise(0.055, 0.05, 5200, 700);
    } else {
      p.fireWait = 0.42; p.kick = 0.6; p.recoilV += 40;
      this.beep(320, 90, 0.09, "triangle", 0.05); this.noise(0.09, 0.05, 2600, 700);
    }
    // anyone near enough to hear a shot comes looking
    // ⚠️ and in a breached section nobody hears it, because there is no air
    // to hear it through. This is the one place in the game you can fight
    // loudly, and it is paid for by having nowhere to hide.
    if (shot && !this.inVacuum()) for (const a of this.aliens) if (a.state === "idle" && Math.hypot(a.x - p.x, a.y - p.y) < 7) this.alert(a);
    const aimed = this.aimTarget();
    // the boss is tested separately (he is a different shape), and whichever
    // of him and the nearest alien is CLOSER takes the shot
    const bossD = this.bossAim();
    const onBoss = bossD !== null && (!aimed || bossD < Math.hypot(aimed.a.x - p.x, aimed.a.y - p.y));
    const hit = onBoss ? null : aimed;
    const best = hit?.a ?? null;
    const c = Math.cos(p.angle), s = Math.sin(p.angle), up = p.pitch / this.R.proj;
    if (shot) {
      // muzzle flash out in the world, so it lights the wall in front of you too
      this.addFx("spark", p.x + c * 0.6, p.y + s * 0.6, p.eye - 0.18, 0.07, 0.3);
      // And a visible line of travel: a handful of bright puffs along the shot.
      // ⚠️ Each puff's scale grows with how far away it is, so they all come out
      // the same size ON SCREEN and read as one straight streak. At a fixed
      // scale the nearest one is drawn enormous and the shot looks like a
      // firework going off in your hand.
      const reach = Math.min(onBoss && bossD !== null ? bossD : best ? Math.hypot(best.x - p.x, best.y - p.y) : this.R.centreDepth.value, 22);
      for (let i = 1; i <= 7; i++) {
        const d = (reach * i) / 8;
        this.addFx("tracer", p.x + c * d, p.y + s * d, p.eye - 0.06 + up * d, 0.07, Math.max(0.15, d * 0.16));
      }
      this.addFx("spark", p.x + c * reach, p.y + s * reach, p.eye - 0.12 + up * reach, 0.16, Math.max(0.3, reach * (best ? 0.2 : 0.13)));
    }
    // ⚠️ No zones on the boss, deliberately. A head band on a target this big
    // would make the fight a test of aim at range; the fight is meant to be
    // won at the terminals, and every hit while the shield is down counts
    // the same.
    if (onBoss) this.hurtBoss(pistol ? PISTOL_DMG : rifle ? RIFLE_DMG : p.knife <= 0 ? KNIFE_BLUNT : KNIFE_DMG);
    if (best && hit) {
      // The knife hurts more than a single shot, but you have to be next to it
      // — and it has no zones, because a swing is a swing.
      const blunt = !shot && p.knife <= 0;
      const base = pistol ? PISTOL_DMG : rifle ? RIFLE_DMG : blunt ? KNIFE_BLUNT : KNIFE_DMG;
      best.hp -= shot ? base * ZONE_MULT[hit.zone] : base;
      best.hurt = 0.15; best.strafeT = 0; // being hit makes it change direction
      if (best.state !== "alert") { best.state = "alert"; best.cooldown = 0.8; }
      const dead = best.hp <= 0;
      p.hitMark = 1; p.hitKill = dead;
      for (let i = 0; i < 4; i++) {
        const a = Math.random() * Math.PI * 2;
        this.addFx("spark", best.x, best.y, 0.3 + Math.random() * 0.3, 0.2, 0.35, { vx: Math.cos(a) * 1.4, vy: Math.sin(a) * 1.4, vz: 1.1, drag: 3 });
      }
      p.hitZone = shot ? hit.zone : null;
      if (blunt) { this.beep(150, 120, 0.12, "triangle", 0.04); this.hint("blunt", "That knife is finished. It still swings, but it will take you five goes — answer and shoot instead."); }
      // a headshot sounds different, so the zone is audible as well as visible
      if (dead) {
        // ⚠️ A KNIFE KILL IS LOUD, and it is the other half of why knifing was
        // free. It was silent twice over: no gunfire alert radius, and the
        // victim's own state was set DIRECTLY rather than through alert(), so
        // it never even shouted. A scuffle carries less far than a shot, and
        // sound goes round corners, so there is no line-of-sight test — the
        // same shape as the gunfire rule above.
        if (!shot && !this.inVacuum()) {
          for (const a of this.aliens) if (a.state === "idle" && Math.hypot(a.x - p.x, a.y - p.y) < KNIFE_NOISE) this.alert(a);
          this.noise(0.18, 0.06, 900, 180);
        }
        if (!shot && p.knife > 0) p.knife--;
        this.kill(best);
      }
      else if (shot && hit.zone === "head") { this.beep(900, 560, 0.1, "square", 0.055); this.noise(0.07, 0.05, 3000, 400); }
      else { this.beep(340, 220, 0.09, "square", 0.05); this.noise(0.07, 0.05, 1800, 300); }
    }
  }
  /** The alien the reticle is on and WHERE on it, if a shot would reach (this
   *  also lights the reticle, and colours it by zone). */
  private aimTarget(): { a: Alien; zone: Zone } | null {
    const p = this.p, cam = { x: p.x, y: p.y, angle: p.angle };
    let best: Alien | null = null, bestD = 1e9, bestZone: Zone = "torso";
    for (const a of this.aliens) {
      if (a.state === "dead") continue;
      const { screenX, dist } = this.R.project(cam, a.x, a.y);
      if (dist <= 0.1) continue;
      const half = (0.23 * this.R.proj) / dist;
      if (Math.abs(screenX - this.R.W / 2) > half) continue;
      // and vertically: where the alien is actually drawn on the screen must
      // cover the crosshair, so looking over its head really does miss
      const bottom = this.aimHorizon + (p.eye * this.R.proj) / dist, top = bottom - (ALIEN_H * this.R.proj) / dist;
      if (this.R.H / 2 < top || this.R.H / 2 > bottom) continue;
      if (p.weapon === "knife" && dist > 1.3) continue;
      if (dist > this.R.centreDepth.value + 0.35) continue; // a wall is in the way
      if (!lineOfSight(this.world, p.x, p.y, a.x, a.y, true)) continue; // or a grille
      if (dist < bestD) {
        best = a; bestD = dist;
        // ⚠️ Worked out from the rectangle the alien was actually DRAWN in
        // this frame, top and bottom, not from a guess about its height — the
        // same reason the vertical test above uses them. `f` is how far down
        // its body the crosshair sits, 0 at the crown and 1 at its feet.
        const f = (this.R.H / 2 - top) / Math.max(1e-6, bottom - top);
        bestZone = f < HEAD_BELOW ? "head" : f < LEGS_BELOW ? "torso" : "legs";
      }
    }
    return best ? { a: best, zone: bestZone } : null;
  }
  private kill(a: Alien) {
    a.state = "dead"; a.hp = 0; this.stats.kills++;
    // nudged clear of the corpse sprite: at identical coordinates the two sort
    // to the same depth and which one you can see is a coin toss
    if (Math.random() < DROP_CHANCE) {
      let dx = 0, dy = 0;
      for (const [ox, oy] of [[0.3, 0], [-0.3, 0], [0, 0.3], [0, -0.3]] as [number, number][]) {
        if (circleFree(this.world, a.x + ox, a.y + oy, 0.12, 0.1)) { dx = ox; dy = oy; break; }
      }
      this.pickups.push({ t: "cell", x: a.x + dx, y: a.y + dy, taken: false });
    }
    this.beep(400, 60, 0.4, "sawtooth", 0.06); this.noise(0.22, 0.07, 1200, 160);
    for (let i = 0; i < 5; i++) {
      const ang = Math.random() * Math.PI * 2;
      this.addFx("spark", a.x, a.y, 0.3 + Math.random() * 0.35, 0.3, 0.4, { vx: Math.cos(ang) * 1.8, vy: Math.sin(ang) * 1.8, vz: 1.3, drag: 2.6 });
    }
  }

  // ── the boss ──────────────────────────────────────────────────────────────
  /** How far away the boss is, if the crosshair is on him and a shot would
   *  reach; otherwise null. The same tests aimTarget makes for an alien, on
   *  the rectangle he is actually DRAWN in. */
  private bossAim(): number | null {
    const b = this.boss, p = this.p;
    if (!b || b.dead) return null;
    const { screenX, dist } = this.R.project({ x: p.x, y: p.y, angle: p.angle }, b.x, b.y);
    if (dist <= 0.1) return null;
    if (Math.abs(screenX - this.R.W / 2) > (BOSS_HALF_W * this.R.proj) / dist) return null;
    const bottom = this.aimHorizon + (p.eye * this.R.proj) / dist, top = bottom - (BOSS_HEIGHT * this.R.proj) / dist;
    if (this.R.H / 2 < top || this.R.H / 2 > bottom) return null;
    if (p.weapon === "knife" && dist > 1.3 + BOSS_R - ALIEN_R) return null;
    if (dist > this.R.centreDepth.value + 0.5) return null;
    if (!lineOfSight(this.world, p.x, p.y, b.x, b.y, true)) return null;
    return dist;
  }

  /** Something hit him. Nothing happens through the shield except a spark
   *  and a ping that says so — a shot that silently does nothing would read
   *  as a bug, not as a rule. */
  private hurtBoss(n: number) {
    const b = this.boss, p = this.p;
    if (!b || b.dead) return;
    if (!b.awake) this.wakeBoss();
    const toYou = Math.atan2(p.y - b.y, p.x - b.x);
    if (b.shield <= 0) {
      this.addFx("spark", b.x + Math.cos(toYou) * 0.55, b.y + Math.sin(toYou) * 0.55, 0.4 + Math.random() * 0.5, 0.22, 0.6);
      this.beep(1500, 1300, 0.08, "sine", 0.04);
      this.hint("shielded", "The shield's taking it all. Get to a green terminal and press E.");
      return;
    }
    b.hp -= n; b.hurt = 0.15; b.strafeT = 0;
    p.hitMark = 1; p.hitKill = false; p.hitZone = null;
    for (let i = 0; i < 3; i++) {
      const a = Math.random() * Math.PI * 2;
      this.addFx("spark", b.x, b.y, 0.4 + Math.random() * 0.6, 0.2, 0.4, { vx: Math.cos(a) * 1.4, vy: Math.sin(a) * 1.4, vz: 1.1, drag: 3 });
    }
    this.beep(300, 200, 0.09, "square", 0.05);
    if (b.hp <= 0) { this.killBoss(); return; }
    // two-thirds and one-third: the shield slams back up and he calls for help
    const phase = b.hp <= BOSS_HP / 3 ? 2 : b.hp <= (BOSS_HP * 2) / 3 ? 1 : 0;
    if (phase > b.phase) this.bossPhase(phase);
  }

  private wakeBoss() {
    const b = this.boss; if (!b || b.awake) return;
    b.awake = true; b.cooldown = 1.6;
    this.say("He's seen you. Shield's up — terminals in the corners. Three right answers drops it.");
    this.beep(90, 50, 0.8, "sawtooth", 0.08); this.noise(0.6, 0.08, 400, 60);
  }

  private bossPhase(phase: number) {
    const b = this.boss!; b.phase = phase; b.shield = 0;
    this.say(phase === 1 ? "Shield's back — and he's calling for help. Clear them, then a terminal." : "Last third. He's angry, and he's not alone. One more window should do it.");
    this.noise(0.5, 0.1, 900, 80); this.beep(160, 70, 0.5, "sawtooth", 0.07);
    // they come out round him, wherever there is room, already hunting you
    let n = 0;
    for (let k = 0; k < 12 && n < BOSS_SUMMON; k++) {
      const a = (k / 12) * Math.PI * 2, x = b.x + Math.cos(a) * 1.4, y = b.y + Math.sin(a) * 1.4;
      if (!circleFree(this.world, x, y, ALIEN_R, 0)) continue;
      this.aliens.push({ x, y, face: a, hp: ALIEN_HP, state: "noticing", timer: 0.8 + n * 0.3, cooldown: 1.2, lastX: this.p.x, lastY: this.p.y, hurt: 0, strafe: 1, strafeT: 0 });
      this.addFx("blast", x, y, 0.3, 0.4, 0.6, { grow: 1.2 });
      n++;
    }
  }

  private killBoss() {
    const b = this.boss!; b.dead = true; b.hp = 0; b.shield = 0; this.stats.kills++;
    this.p.hitKill = true;
    // not a grenade: fire and smoke with no blast damage, because killing
    // the boss must never kill YOU standing next to him
    for (let i = 0; i < 6; i++) {
      const a = Math.random() * Math.PI * 2, r = Math.random() * 0.6;
      this.addFx("blast", b.x + Math.cos(a) * r, b.y + Math.sin(a) * r, 0.3 + Math.random() * 0.6, 0.5 + i * 0.12, 1.0, { grow: 2.4 });
      this.addFx("smoke", b.x + Math.cos(a) * r, b.y + Math.sin(a) * r, 0.5, 1.6, 0.8, { vz: 0.4, grow: 1, drag: 1 });
    }
    this.shake = Math.min(1.6, this.shake + 1.2);
    this.noise(1.1, 0.24, 1400, 40); this.beep(200, 30, 1.2, "sawtooth", 0.1);
    this.say("He's down! That's the Director. The lift's live — get out of here.");
  }

  private updateBoss(dt: number) {
    const b = this.boss, p = this.p;
    if (!b || b.dead) return;
    // terminals recover in WORLD time, so a reload slows them with everything else
    for (const t of this.terminals) { t.lock = Math.max(0, t.lock - dt); t.cool = Math.max(0, t.cool - dt); }
    b.hurt = Math.max(0, b.hurt - dt);
    if (!b.awake) {
      if (b.room && this.world.area[this.cell(p.x, p.y)] === b.room) this.wakeBoss();
      return;
    }
    if (b.shield > 0) {
      b.shield -= dt;
      if (b.shield <= 0) { b.shield = 0; this.say("Shield's back up. Another terminal — that one needs to recharge."); this.beep(400, 1200, 0.3, "sine", 0.05); }
    }
    const pd = Math.hypot(p.x - b.x, p.y - b.y);
    const sees = lineOfSight(this.world, b.x, b.y, p.x, p.y);
    let diff = Math.atan2(p.y - b.y, p.x - b.x) - b.face; diff = Math.atan2(Math.sin(diff), Math.cos(diff));
    b.face += Math.sign(diff) * Math.min(Math.abs(diff), 2.0 * dt);
    // he walks at you when he cannot see you or you are far off; otherwise he
    // circles, slowly — a boss that stands still is a target, one that charges
    // is a wall
    let mx = 0, my = 0;
    if (!sees || pd > 7) {
      const step: [number, number] | null = sees ? [(p.x - b.x) / pd, (p.y - b.y) / pd] : this.towardsPlayer(b);
      if (step) { mx = step[0]; my = step[1]; }
    } else {
      b.strafeT -= dt;
      if (b.strafeT <= 0) { b.strafeT = 1.2 + Math.random() * 1.2; b.strafe = Math.random() < 0.5 ? -1 : 1; }
      mx = -Math.sin(b.face) * b.strafe; my = Math.cos(b.face) * b.strafe;
      if (pd < 2.2) { mx -= (p.x - b.x) / pd; my -= (p.y - b.y) / pd; }
    }
    if (mx || my) {
      const len = Math.hypot(mx, my) || 1, sp = 0.85 * dt;
      [b.x, b.y] = moveCircle(this.world, b.x, b.y, (mx / len) * sp, (my / len) * sp, BOSS_R);
    }
    // a volley: a fan of slow bolts. Waist-high crates stop them (updateBolts),
    // even though he can see over the crates, so cover is the real defence.
    b.cooldown -= dt;
    if (sees && b.cooldown <= 0 && Math.abs(diff) < 0.5) {
      const n = BOSS_VOLLEY + b.phase, aim = Math.atan2(p.y - b.y, p.x - b.x);
      for (let i = 0; i < n; i++) {
        const ang = aim + (i / (n - 1) - 0.5) * BOSS_SPREAD * (1 + b.phase * 0.2);
        this.bolts.push({ x: b.x + Math.cos(ang) * 0.5, y: b.y + Math.sin(ang) * 0.5, vx: Math.cos(ang) * BOSS_BOLT_SPEED, vy: Math.sin(ang) * BOSS_BOLT_SPEED, life: 5 });
      }
      b.cooldown = 2.6 - b.phase * 0.45 + Math.random() * 0.6;
      this.beep(700, 180, 0.3, "sawtooth", 0.06); this.noise(0.15, 0.05, 2400, 400);
    }
  }

  /** The terminal you are standing at, if any. */
  private terminalNear(): Terminal | null {
    const p = this.p;
    let best: Terminal | null = null, bd = TERMINAL_REACH;
    for (const t of this.terminals) { const d = Math.hypot(t.x - p.x, t.y - p.y); if (d <= bd) { best = t; bd = d; } }
    return best;
  }

  private useTerminal(t: Terminal) {
    const b = this.boss;
    if (!b || b.dead) { this.pickupMsg("Nothing left to override"); return; }
    if (b.shield > 0) { this.pickupMsg("Shield's already down — shoot!"); return; }
    if (t.lock > 0) { this.pickupMsg(`Terminal locked · ${Math.ceil(t.lock)} s`); this.beep(90, 70, 0.07, "square", 0.04); return; }
    if (t.cool > 0) { this.pickupMsg(`Recharging · ${Math.ceil(t.cool)} s — try another`); this.beep(90, 70, 0.07, "square", 0.04); return; }
    if (!b.awake) this.wakeBoss();
    // ⚠️ Owed questions are NOT served here, for the grenade's reason: one
    // wrong answer ends an override, so feeding it your known weak spots would
    // make the boss harder the worse you are doing.
    const qs: Question[] = []; for (let i = 0; i < TERMINAL_Q; i++) { const q = this.draw1("reload", qs); if (q) qs.push(q); }
    if (qs.length < TERMINAL_Q) { this.overrideShield(t); return; }  // nothing to ask from: don't trap the player
    this.quiz = { kind: "terminal", qs, index: 0, time: TERMINAL_PER, per: TERMINAL_PER, picked: null, feedback: 0, results: [], target: null, terminal: t };
    // ⚠️ "reload" mode, deliberately, so an override gets every rule a reload
    // already has and every check that already guards it: the deck at a third,
    // the question timer and the run clock on real time, and you can still
    // move and shoot. A new mode would have needed all of that again.
    this.mode = "reload";
    this.beep(520, 880, 0.15, "triangle", 0.05);
  }

  private failTerminal(t: Terminal) {
    this.quiz = null; this.mode = "play";
    t.lock = TERMINAL_LOCK;
    this.say("Override rejected — that terminal's locked for ten seconds. Try another one.");
    this.beep(200, 90, 0.35, "sawtooth", 0.06);
  }

  private overrideShield(t: Terminal) {
    this.quiz = null; this.mode = "play";
    t.cool = TERMINAL_COOL;
    if (this.boss) this.boss.shield = SHIELD_DOWN;
    this.say("Shield's down! Eight seconds — everything you've got.");
    this.beep(300, 1200, 0.5, "triangle", 0.07); this.noise(0.3, 0.06, 3000, 300);
  }

  // ── use: doors that need a button ─────────────────────────────────────────
  private use() {
    if (this.quiz) return; // finish the questions first (the lift used to end the level with a quiz still open)
    const p = this.p, w = this.world;
    const t = this.terminalNear();
    if (t) { this.useTerminal(t); return; }
    const lx = p.x + Math.cos(p.angle) * 0.9, ly = p.y + Math.sin(p.angle) * 0.9;
    const d = w.door[this.cell(lx, ly)];
    if (!d) return;
    if (d.exit) {
      // ⚠️ said, not silent: a lift that does nothing when you press E reads
      // as a bug, and this one is the last door in the game
      if (this.boss && !this.boss.dead) { this.say("The lift's locked down while he's alive. Shield first, then him."); this.beep(90, 70, 0.1, "square", 0.04); return; }
      if (this.owed.length) { this.startDebrief(); return; }
      this.completeLevel();
      return;
    }
    if (d.secret && d.target === 0) { d.target = 1; this.say("A hidden room! Careful — something is usually guarding one."); this.beep(400, 1200, 0.5, "triangle", 0.06); }
  }

  // ── the deck is done ──────────────────────────────────────────────────────
  private completeLevel() {
    this.mode = "complete"; this.screenLock = 0.9; document.exitPointerLock(); this.beep(300, 900, 0.6, "triangle", 0.07);
    // asked BEFORE the run is filed, so the screen shows what this run had
    // to beat rather than a best that already includes it
    this.bestBefore = this.opts.best?.(LEVELS[this.levelIndex].TITLE);
    // reported here rather than on the Enter that moves on, so a player who
    // closes the tab on the results screen still keeps the run
    this.opts.onLevelDone?.(this.runResult());
  }

  /** Note a missed question as owed, once. Not from the debrief itself. */
  private owe(q: Quiz, missed: Question | undefined) {
    if (!missed || q.kind === "debrief") return;
    if (!this.owed.some((o) => o.question === missed.question)) this.owed.push(missed);
  }

  /** Max questions in a "before you go" round. */
  private static readonly DEBRIEF_MAX = 5;

  /**
   * "Before you go": the questions still owed when you reach the lift, one
   * more go each.
   *
   * ⚠️ THE RUN CLOCK STOPS HERE, and that is the opposite of the grenade rule
   * on purpose. The grenade freeze keeps the clock running because a freeze
   * you can SUMMON mid-fight must cost something, or it is a panic button.
   * This one cannot be summoned — it happens at the exit, after the deck is
   * done — and charging pace marks for having missed questions would turn
   * "you owe this one" into "you are punished for this one". Owing a question
   * costs nothing. Answering it again is the whole point.
   *
   * Capped at five, oldest first: somebody who missed twelve on one deck does
   * not need a twelve-question exam standing between them and the next one,
   * and the oldest have had the most time to fade, which is when a second
   * attempt does the most good.
   */
  private startDebrief() {
    const qs = this.owed.slice(0, Game.DEBRIEF_MAX);
    this.owed = [];
    this.quiz = { kind: "debrief", qs, index: 0, time: DEBRIEF_PER, per: DEBRIEF_PER, picked: null, feedback: 0, results: [], target: null };
    this.mode = "debrief";
    this.say(qs.length === 1
      ? "One you missed earlier — have another go before you leave."
      : `${qs.length} you missed earlier — have another go at each before you leave. Nothing to lose.`);
  }

  // ── the quizzes ───────────────────────────────────────────────────────────
  /** One question off the top of a shuffled deck, reshuffled when it runs out.
   *  ⚠️ `avoid` is the set already drawn for THIS quiz: a three-question draw
   *  that straddles a reshuffle could otherwise ask the same question twice in
   *  one stomp, which on the small easy pools is about one stomp in a hundred. */
  private draw1(deck: "reload" | "easy", avoid: Question[] = [], serveOwed = false): Question | null {
    if (serveOwed) {
      const i = this.owed.findIndex((o) => !avoid.some((a) => a.question === o.question));
      if (i >= 0) return this.owed.splice(i, 1)[0];
    }
    const pool = deck === "reload" ? this.opts.reload : this.opts.easy.length >= 3 ? this.opts.easy : this.opts.reload;
    if (!pool.length) return null;
    const d = deck === "reload" ? this.reloadDeck : this.easyDeck;
    for (let tries = 0; tries < 4; tries++) {
      // ⚠️ REVERSED, because this deck is dealt with pop() — from the END. The
      // weighted shuffle puts the weakest topics' questions at the FRONT, so
      // pushing it as it comes would serve them last, which is the exact
      // opposite of the point and would look perfectly fine in every test that
      // only checked the weights were passed in.
      if (!d.length) {
        const w = this.opts.topicWeights ?? {};
        d.push(...weightedShuffle(pool, (q) => w[q.topic] ?? 1).reverse());
      }
      const q = d.pop();
      if (!q) return null;
      if (!avoid.some((a) => a.question === q.question)) return q;
      if (pool.length <= avoid.length) return q; // nothing else exists to offer
    }
    return d.pop() ?? null;
  }
  /** Which gun R is about to charge, and how full it is. The rifle is
   *  preferred when both are short, because it is the one that empties. */
  private reloadable(): { which: "pistol" | "rifle"; mag: number; now: number } | null {
    const p = this.p;
    const rifleShort = p.hasRifle && p.rifleAmmo < RIFLE_MAG;
    const pistolShort = p.hasPistol && p.ammo < PISTOL_MAG;
    if (p.weapon === "rifle" && rifleShort) return { which: "rifle", mag: RIFLE_MAG, now: p.rifleAmmo };
    if (p.weapon === "pistol" && pistolShort) return { which: "pistol", mag: PISTOL_MAG, now: p.ammo };
    if (rifleShort) return { which: "rifle", mag: RIFLE_MAG, now: p.rifleAmmo };
    if (pistolShort) return { which: "pistol", mag: PISTOL_MAG, now: p.ammo };
    return null;
  }
  private startReload() {
    const p = this.p;
    if (this.quiz) return;
    const r = this.reloadable();
    if (!r) { if (p.hasPistol || p.hasRifle) this.pickupMsg("Already full"); return; }
    // R with the knife out means "get the gun you are charging ready"
    if (p.weapon === "knife") p.weapon = r.which;
    // ⚠️ owed questions first — but ONLY here. A grenade quiz ends on one wrong
    // answer, so serving it your known weak spots would quietly make grenades
    // harder the worse you are doing, which is the opposite of help.
    const qs: Question[] = []; for (let i = 0; i < 3; i++) { const q = this.draw1("reload", qs, true); if (q) qs.push(q); }
    if (!qs.length) { if (r.which === "rifle") p.rifleAmmo = RIFLE_MAG; else p.ammo = PISTOL_MAG; return; }
    this.quiz = { kind: "reload", qs, index: 0, time: 10, per: 10, picked: null, feedback: 0, results: [], target: null };
    this.mode = "reload";
    this.hint("slowmo", `Thinking time — the deck runs at a third speed while a reload question is up. Your own clock doesn't.`);
  }
  private tryStomp() {
    const a = this.stompTarget(); if (!a || this.quiz) return;
    const qs: Question[] = []; for (let i = 0; i < 3; i++) { const q = this.draw1("easy"); if (q) qs.push(q); }
    if (qs.length < 3) { this.kill(a); return; }
    this.quiz = { kind: "stomp", qs, index: 0, time: 5, per: 5, picked: null, feedback: 0, results: [], target: a };
    this.mode = "stomp"; this.beep(200, 600, 0.3, "square", 0.06);
  }
  /** How many guns you are carrying. Decides whether the phone gets a SWAP
   *  button at all — see touchButtons() in hud.ts. */
  private gunCount() { return (this.p.hasPistol ? 1 : 0) + (this.p.hasRifle ? 1 : 0); }
  /** The phone's stand-in for the 2 and 3 keys: flip between the two guns. */
  private swapGun() {
    const p = this.p;
    if (this.gunCount() < 2) return;
    p.weapon = p.weapon === "rifle" ? "pistol" : "rifle";
    this.pickupMsg(p.weapon === "rifle" ? "Rifle" : "Blaster");
    this.beep(520, 640, 0.05, "square", 0.035);
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
    const cur = q.qs[q.index], right = i === cur.correct;
    q.picked = i;
    // ⚠️ A wrong answer used to flash the right one green for 0.7s and move on,
    // which marks you and teaches you nothing. Get it wrong and the panel now
    // holds long enough to actually read the model answer — SPACE skips it, so
    // anyone who already knows is not made to wait mid-firefight.
    q.feedback = right ? 0.7 : WRONG_HOLD;
    q.results.push(right);
    if (!right) this.owe(q, cur);
    if (right) { this.stats.right++; this.beep(660, 990, 0.15, "triangle", 0.06); } else { this.stats.wrong++; this.beep(220, 110, 0.3, "sawtooth", 0.06); }
    // a wrong answer charges nothing: get it right or use the knife
    if (q.kind === "reload" && right) {
      const p = this.p;
      if (p.weapon === "rifle" && p.hasRifle) p.rifleAmmo = Math.min(RIFLE_MAG, p.rifleAmmo + RIFLE_PER_ANSWER);
      else if (p.hasPistol) p.ammo = Math.min(PISTOL_MAG, p.ammo + PISTOL_PER_ANSWER);
      else if (p.hasRifle) p.rifleAmmo = Math.min(RIFLE_MAG, p.rifleAmmo + RIFLE_PER_ANSWER);
    }
    this.opts.onAnswer?.(cur, right);
  }
  /** Is the weapon in your hands full? Ends a reload early when it is. */
  private full(w: Weapon) {
    const p = this.p;
    if (w === "rifle") return p.rifleAmmo >= RIFLE_MAG;
    if (w === "pistol") return p.ammo >= PISTOL_MAG;
    return false;
  }
  private updateQuiz(dt: number) {
    const q = this.quiz; if (!q) return;
    if (q.picked === null) {
      q.time -= dt;
      if (q.time <= 0) { q.picked = -1; q.feedback = WRONG_HOLD; q.results.push(false); this.owe(q, q.qs[q.index]); this.stats.wrong++; this.opts.onAnswer?.(q.qs[q.index], false); this.beep(220, 110, 0.3, "sawtooth", 0.06); }
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
        this.quiz = null; this.mode = "play"; this.damage(HIT_DMG); this.say("It threw you off!");
        return;
      }
      if (q.index === 2) { this.kill(q.target!); this.quiz = null; this.mode = "play"; this.say("Stomped!"); return; }
    } else if (q.kind === "nade") {
      // ⚠️ ONE wrong answer ends it, rather than finishing the set and
      // counting up (it is one question since 2026-10-11, but the rule stands
      // if NADE_QUIZ_QS ever goes back up). The teaching panel has already held for WRONG_HOLD
      // seconds by the time we get here, so the explanation was read; making
      // somebody answer two more questions for a grenade they have already
      // lost is punishment, not revision.
      if (!lastRight) { this.failNadeQuiz(); return; }
      if (q.index === q.qs.length - 1) { this.releaseNade(q.nade!); return; }
    } else if (q.kind === "terminal") {
      // the grenade's rule: one wrong ends it, because the model answer has
      // already been on screen for WRONG_HOLD seconds
      if (!lastRight) { this.failTerminal(q.terminal!); return; }
      if (q.index === q.qs.length - 1) { this.overrideShield(q.terminal!); return; }
    } else if (q.kind === "debrief") {
      // one go each, right or wrong — a debrief that re-queued its own misses
      // could never end, and the model answer has already been shown
      if (q.index === q.qs.length - 1) { this.quiz = null; this.completeLevel(); return; }
    } else if (this.full(this.p.weapon) || q.index === q.qs.length - 1) { this.quiz = null; this.mode = "play"; return; }
    q.index++; q.picked = null; q.time = q.per;
  }

  // ── how a finished deck is scored ─────────────────────────────────────────
  /**
   * Par time, in seconds: how long the level's own route is to walk, times
   * three.
   *
   * ⚠️ Derived, not written down per level. A hand-written par is a second
   * copy of "how big is this deck" that goes stale the moment a corridor moves
   * — and this codebase has the scars. The route is already in the level for
   * the play-test bots to follow, and the bots walk levels 1-4 in 36, 36, 31
   * and 26 seconds flat out with nothing shooting at them; three times that
   * leaves room to fight, answer questions and take a wrong turn.
   */
  private par(def: LevelDef) {
    const route = def.ROUTE ?? [];
    let d = 0;
    for (let i = 1; i < route.length; i++) d += Math.hypot(route[i][0] - route[i - 1][0], route[i][1] - route[i - 1][1]);
    return Math.max(45, (d / WALK) * 3);
  }
  private runResult(): Run {
    const def = LEVELS[this.levelIndex];
    return {
      level: def.TITLE, seconds: this.stats.time, kills: this.stats.kills,
      // the boss counts as one more, and so does everything he called in
      aliens: this.aliens.length + (this.boss ? 1 : 0), right: this.stats.right, wrong: this.stats.wrong,
      par: this.par(def),
    };
  }

  /** The current objective, for the compass: the first one not yet done. */
  private objective() {
    const list = this.world.def.OBJECTIVES; if (!list?.length) return null;
    const p = this.p;
    const o = list.find((o) => !(o.until === "pistol" && p.hasPistol) && !(o.until === "rifle" && p.hasRifle) && !(o.until === "keycard" && p.keys.has(o.key ?? "blue")) && !(o.until === "boss" && (!this.boss || this.boss.dead))) ?? list[list.length - 1];
    // the boss moves, so the marker follows him rather than where he started
    const [ax, ay] = o.until === "boss" && this.boss ? [this.boss.x, this.boss.y] : o.at;
    return { text: o.text, bearing: Math.atan2(ay - p.y, ax - p.x), dist: Math.hypot(ax - p.x, ay - p.y) };
  }
  /** What a key would do right now, shown as a prompt. */
  private prompt() {
    if (this.stompTarget()) return { key: this.touchDevice ? "JUMP" : "SPACE", text: "It hasn't seen you: jump on it" };
    if (this.p.z > 0.05) return null;
    const t = this.terminalNear();
    if (t) {
      const b = this.boss;
      if (!b || b.dead) return null;
      if (b.shield > 0) return { key: "E", text: "Shield's down — shoot him!" };
      if (t.lock > 0) return { key: "E", text: `Locked · ${Math.ceil(t.lock)} s` };
      if (t.cool > 0) return { key: "E", text: `Recharging · ${Math.ceil(t.cool)} s — try another` };
      return { key: "E", text: "Override the shield · 3 questions" };
    }
    const p = this.p, d = this.world.door[this.cell(p.x + Math.cos(p.angle) * 0.9, p.y + Math.sin(p.angle) * 0.9)];
    if (d?.exit) return { key: "E", text: "Take the lift" };
    return null;
  }

  // ── drawing ───────────────────────────────────────────────────────────────
  private draw() {
    const p = this.p;
    const things: Drawable[] = [...this.decor];
    // a red keycard is drawn with the red card sprite; everything else is
    // drawn with the sprite named after its own type
    for (const k of this.pickups) if (!k.taken) things.push({ x: k.x, y: k.y, sprite: k.t === "keycard" && k.key === "red" ? "keycardRed" : k.t });
    for (const a of this.aliens) {
      if (a.state === "dead") { things.push({ x: a.x, y: a.y, sprite: "alienDead" }); continue; }
      let diff = Math.atan2(p.y - a.y, p.x - a.x) - a.face; diff = Math.atan2(Math.sin(diff), Math.cos(diff));
      things.push({ x: a.x, y: a.y, sprite: Math.abs(diff) > 1.9 ? "alienBack" : "alien" });
    }
    for (const t of this.terminals) things.push({ x: t.x, y: t.y, sprite: t.lock > 0 ? "terminalLocked" : t.cool > 0 || !this.boss || this.boss.dead ? "terminalCold" : "terminal" });
    const boss = this.boss;
    if (boss) {
      if (boss.dead) things.push({ x: boss.x, y: boss.y, sprite: "bossDead" });
      else {
        let diff = Math.atan2(p.y - boss.y, p.x - boss.x) - boss.face; diff = Math.atan2(Math.sin(diff), Math.cos(diff));
        things.push({ x: boss.x, y: boss.y, sprite: Math.abs(diff) > 1.9 ? "bossBack" : "boss" });
        // the shield, see-through and a little in front of him so it sorts
        // nearer than he does; it shimmers so it reads as something alive
        if (boss.awake && boss.shield <= 0) {
          const d = Math.hypot(p.x - boss.x, p.y - boss.y) || 1, k = Math.min(0.5, d * 0.5);
          things.push({ x: boss.x + ((p.x - boss.x) / d) * k, y: boss.y + ((p.y - boss.y) / d) * k, sprite: "shield", alpha: 0.42 + Math.sin(performance.now() / 160) * 0.08 });
        }
      }
    }
    for (const b of this.bolts) things.push({ x: b.x, y: b.y, z: 0.32, sprite: "bolt" });
    for (const n of this.nades) things.push({ x: n.x, y: n.y, z: n.z, sprite: "grenade", scale: 0.55 });
    for (const f of this.fx) things.push({ x: f.x, y: f.y, z: f.z, sprite: f.sprite, scale: f.scale, alpha: Math.max(0, 1 - f.t / f.life) });
    const t0 = performance.now();
    // recoil and blast shake ride on the pitch, because the horizon is the one
    // thing this renderer can move the whole picture with
    const jolt = this.shake > 0.01 ? (Math.random() - 0.5) * this.shake * 16 : 0;
    // ⚠️ The shot is tested against the horizon the last frame drew, so anything
    // in that number decides whether a shot lands. Recoil belongs there — it is
    // your gun kicking and you can hold through it. The shake JOLT is fresh
    // `Math.random()` every frame: at full shake it moves the horizon +-12px
    // while an alien eight squares away is 29px tall, so after an explosion
    // whether a shot connected was partly a coin toss. The picture still shakes;
    // the aim no longer does.
    const aimView = Math.max(-PITCH_MAX - 60, Math.min(PITCH_MAX + 60, p.pitch + p.recoil));
    this.aimHorizon = this.R.H / 2 + aimView;
    const view = Math.max(-PITCH_MAX - 60, Math.min(PITCH_MAX + 60, aimView + jolt));
    const img = this.R.render(this.world, this.tex, this.spr, { x: p.x, y: p.y, angle: p.angle }, things, p.eye + Math.sin(p.bob * 2) * 0.012, view);
    this.g.putImageData(img, 0, 0);
    if (this.mode !== "stomp") {
      const rifle = p.weapon === "rifle";
      drawWeapon(this.g, this.R.W, this.R.H, p.weapon, p.bob, p.kick, p.flash, rifle ? p.rifleAmmo : p.ammo, rifle ? RIFLE_MAG : PISTOL_MAG);
    }
    // a soft glow: the frame shrunk and laid back over itself on a "screen"
    // blended layer, so lights bloom a little instead of being hard pixels
    if (this.bloom) { this.bloom.imageSmoothingEnabled = true; this.bloom.drawImage(this.cv, 0, 0, 160, 90); }

    const t1 = performance.now();
    const o = this.o; o.clearRect(0, 0, HUD_W, HUD_H);
    const def = LEVELS[this.levelIndex];
    const left = this.aliens.filter((a) => a.state !== "dead").length + (this.boss && !this.boss.dead ? 1 : 0);
    const playing = this.mode === "play" || this.mode === "reload";
    drawHud(o, {
      health: p.health, vest: p.vest, ammo: p.ammo, hasPistol: p.hasPistol, weapon: p.weapon, keys: [...p.keys], radTime: p.radTime,
      hasRifle: p.hasRifle, rifleAmmo: p.rifleAmmo, rifleMag: RIFLE_MAG, knife: p.knife, knifeMax: KNIFE_USES,
      grenades: p.grenades, hitMark: p.hitMark, hitKill: p.hitKill, exposure: p.exposure,
      level: def.TITLE, aliensLeft: left, hurt: p.hurt,
      // on the boss the reticle lights only when a shot would HURT him — on
      // his shield it stays open, which is the same thing the ping says
      aim: playing ? (this.aimTarget()?.zone ?? (this.boss && this.boss.shield > 0 && this.bossAim() !== null ? "torso" : null)) : null,
      boss: this.boss && this.boss.awake && !this.boss.dead ? { name: "THE DIRECTOR", hp: this.boss.hp, max: BOSS_HP, shield: this.boss.shield, shieldMax: SHIELD_DOWN } : null,
      hits: this.hits.map((h) => ({ a: h.a - p.angle, t: h.t })),
      heading: p.angle, objective: this.objective(),
      comms: this.comms && !this.quiz ? { who: this.opts.mascotName ?? "Comms", text: this.comms.text, age: this.comms.age, left: this.comms.life - this.comms.age } : null,
      feed: this.feed, area: this.areaBanner, prompt: this.mode === "play" ? this.prompt() : null,
      // hidden behind a quiz and on every screen that is not the game itself:
      // a FIRE button over the title card would be tapped by mistake
      touch: this.touchDevice && playing && !this.quiz
        ? { grenades: p.grenades, guns: this.gunCount(), held: new Set(this.heldButtons.values()), stick: this.stickTouch }
        : null,
    });
    if (this.quiz) {
      const q = this.quiz, cur = q.qs[q.index];
      const view: QuizView = {
        kind: q.kind, topic: cur.topicTitle, index: q.index, total: q.kind === "stomp" ? 3 : q.qs.length,
        question: cur.question, choices: cur.choices, time: q.time, perQuestion: q.per,
        picked: q.picked, correct: cur.correct, results: q.results,
        ammo: p.weapon === "rifle" ? p.rifleAmmo : p.ammo,
        perAnswer: p.weapon === "rifle" ? RIFLE_PER_ANSWER : PISTOL_PER_ANSWER,
        slow: q.kind === "reload" || q.kind === "terminal" ? RELOAD_SLOW : 1,
        why: cur.why, touch: this.touchDevice,
      };
      drawQuiz(o, view);
    }
    const mins = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
    // The controls card lists what this deck can actually do: no G on a deck
    // with no grenades, and no sneaking tip on one with the lights on.
    if (this.mode === "title") drawScreen(o, def.TITLE, this.touchDevice ? [
      "Left thumb on the stick to move · push it all the way to run",
      "Drag anywhere else to look around · FIRE to shoot",
      `R: answer questions to recharge your gun · E: use · JUMP${this.hasNades ? " · G: grenade" : ""}`,
      "Tap an answer to answer a question",
      ...(this.hasGun ? ["Two guns on this deck: ⇄ swaps between them. The blaster pays more per question, the rifle far more per second"] : []),
      ...(this.hasNades ? ["A grenade costs THREE right answers: pull the pin and the whole deck freezes until you have answered them. One wrong and the pin goes back in"] : []),
      ...(this.dim ? ["Most of the lights are out on this deck: stay in the dark and walk rather than run, and watch the SEEN bar under your sights"] : []),
      ...(this.boss ? ["The boss is shielded: nothing hurts him until you work a terminal (the E button) — three right answers drops it for eight seconds"] : []),
    ] : [
      "WASD to move · mouse to look (up and down too) · click to shoot · Shift to run",
      `R: recharge your gun by answering questions · E: use${this.hasNades ? " · G: pull a grenade pin" : ""}`,
      `SPACE: jump, or jump on an alien from behind · 1 knife · 2 blaster${this.hasGun ? " · 3 rifle" : ""} · M sound · Esc pause`,
      ...(this.hasGun ? ["Where you hit matters: head hurts most, legs least — but a head shot alone will not drop one, you still have to land the second"] : []),
      ...(this.hasNades ? ["A grenade costs THREE right answers: pull the pin and the whole deck freezes until you have answered them. One wrong and the pin goes back in"] : []),
      ...(this.dim ? ["Most of the lights are out on this deck: stay in the dark and walk rather than run, and watch the SEEN bar under your sights"] : []),
      ...(this.boss ? ["The boss is shielded: nothing hurts him until you work a terminal (E) — three right answers drops it for eight seconds"] : []),
    ], this.touchDevice ? "Tap to start" : "Click to start");
    if (this.mode === "paused") drawScreen(o, "Paused", [this.resumeNote ?? "Your game is waiting.", "Saves: the button at the top of the game."], this.touchDevice ? "Tap to carry on" : "Click to carry on");
    if (this.mode === "dead") drawScreen(o, "Suit failure", [`${this.stats.kills} alien${this.stats.kills === 1 ? "" : "s"} defeated · ${this.stats.right} question${this.stats.right === 1 ? "" : "s"} right`], this.touchDevice ? "Tap to try the level again" : "Press Enter to try the level again", "#ff6b6b");
    if (this.mode === "complete") {
      const run = this.runResult(), score = scoreRun(run), letter = gradeFor(score);
      const asked = run.right + run.wrong;
      const was = this.bestBefore;
      const lines = [
        `Grade ${letter} · ${score}/100`,
        // ⚠️ The target is SHOWN, because the grade now pays for right answers
        // against it, and a goal you cannot see is the game being unfair — the
        // argument the SEEN bar and the knife pips already settled.
        `Time ${mins(run.seconds)} (par ${mins(run.par)}) · aliens ${run.kills}/${run.aliens} · right ${run.right} of ${asked} (deck wants ${questionTarget(run.aliens)})`,
      ];
      // the previous best, so there is something to beat next time
      // records, not one run: each of these came from whichever run set it
      if (was) lines.push(`Your records on this deck: best grade ${was.bestGrade} · fastest ${formatClock(was.bestSeconds)} · most ${was.mostKills} aliens`);
      lines.push(this.levelIndex + 1 < LEVELS.length ? `Next: ${LEVELS[this.levelIndex + 1].TITLE}` : "That was the last level for now.");
      drawScreen(o, `Level complete — ${letter}`, lines, this.touchDevice ? "Tap to carry on" : "Press Enter to carry on", score >= 75 ? "#ffd65a" : "#2fd48a");
    }
    if (this.mode === "done") drawScreen(o, "You finished early access!", [`All ${LEVELS.length} decks done, and the Director is down.`, "Every question you missed is waiting in “Revisit your mistakes”."], "Reload the page to play again", "#ffd65a");
    // frame timings, readable in dev tools (data-render-ms / data-hud-ms on the overlay)
    this.ov.dataset.renderMs = (t1 - t0).toFixed(1); this.ov.dataset.hudMs = (performance.now() - t1).toFixed(1);
  }
}
