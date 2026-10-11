// The alien game's saves (app/lib/gameSave.ts): the shape a save must have
// before the server stores it or the game loads it.
//
// The two mistakes that matter are not symmetrical. Refusing a real save loses
// somebody's run — so a realistic save must survive, exactly, through JSON and
// back. Accepting a bad one hands the game, or the database, something it was
// never meant to hold — so every way of being wrong must be refused, and must
// refuse the WHOLE save rather than half of it.

import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createRequire } from "node:module";

const require_ = createRequire(import.meta.url);
const out = mkdtempSync(join(tmpdir(), "game-save-check-"));
let checks = 0, failures = 0;
const expect = (ok, msg) => { checks++; if (!ok) { failures++; if (failures <= 25) console.error(`  FAIL: ${msg}`); } };

try {
  execFileSync(process.execPath, [
    "node_modules/typescript/bin/tsc", "app/lib/gameSave.ts", "--outDir", out,
    "--module", "commonjs", "--target", "es2020", "--skipLibCheck",
  ], { stdio: "inherit" });
  const G = require_(join(out, "gameSave.js"));
  const { parseGameSave, parseSaveSetup, cleanSaveName, saveHref, SAVE_SLOTS, SAVE_VERSION, SAVE_NAME_MAX, SAVE_MAX_BYTES } = G;

  expect(SAVE_SLOTS === 5, `${SAVE_SLOTS} save slots; Matthew asked for five`);

  // ── a realistic save, the shape snapshot() writes ──────────────────────────
  const q = (i) => ({ question: `What is ${i} x 2?`, choices: [String(i * 2), String(i), String(i + 2), String(i * 3)], correct: 0, topic: "algebra-basics", topicTitle: "Algebra basics", why: `${i} x 2 = ${i * 2}` });
  const carry = { health: 62.5, vest: 30, ammo: 4, hasPistol: true, hasRifle: true, rifleAmmo: 11, grenades: 2, knife: 3 };
  const good = () => ({
    v: SAVE_VERSION, level: 3, levelPrint: "Level 4 — Cargo hold|46x30|9f3a2c11",
    player: { ...carry, x: 12.4, y: 7.9, z: 0.34, vz: -0.5, angle: -731.2, pitch: -40, eye: 0.5, weapon: "rifle", keys: ["blue"], radTime: 0, nadeWait: 0.65, exposure: 0.42 },
    carry: { ...carry, health: 100, knife: 5 },
    aliens: Array.from({ length: 15 }, (_, i) => ({ x: 5 + i, y: 6, face: 1.2, hp: i % 3 ? 40 : -2, state: i % 3 ? "idle" : "dead", timer: 0, cooldown: 1, lastX: 5 + i, lastY: 6, strafe: -1, strafeT: 0.3 })),
    boss: null,
    terminals: [],
    pickups: [{ t: "cell", x: 3, y: 4, taken: false }, { t: "keycard", x: 30, y: 2, taken: true, key: "blue" }],
    doors: [{ open: 1, target: 1 }, { open: 0, target: 0 }, { open: 0.4, target: 1 }],
    bolts: [{ x: 9, y: 9, vx: 6.2, vy: 0, life: 3.1 }],
    nades: [{ x: 10, y: 8, z: 0.4, vx: 2, vy: 1, vz: 0, fuse: 1.2 }],
    owed: [q(3), q(7)],
    stats: { kills: 5, right: 12, wrong: 3, time: 184.6 },
    hinted: ["intro", "nades", "stacks"],
  });
  const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);

  const s = good();
  expect(same(parseGameSave(s), s), "a realistic save does not come back exactly as it went in");
  expect(same(parseGameSave(JSON.parse(JSON.stringify(s))), s), "a realistic save does not survive a trip through JSON (the database stores JSON)");
  const boss = good(); boss.level = 9; boss.boss = { x: 20, y: 20, face: 3.1, hp: 312, room: "hangar", awake: true, dead: false, shield: 4.2, phase: 1, cooldown: 0.8, strafe: 1, strafeT: 0 }; boss.terminals = [{ lock: 0, cool: 12 }, { lock: 3, cool: 0 }];
  expect(same(parseGameSave(boss), boss), "a save made mid-boss-fight does not come back exactly");
  expect(JSON.stringify(s).length < SAVE_MAX_BYTES / 5, `a realistic save is ${JSON.stringify(s).length} bytes — the size cap would be close to refusing real saves`);
  // the biggest a REAL save gets: every list at its fullest the game can make
  const big = good(); big.aliens = Array.from({ length: 60 }, () => big.aliens[0]); big.owed = Array.from({ length: 30 }, (_, i) => q(i)); big.pickups = Array.from({ length: 120 }, () => big.pickups[0]);
  expect(parseGameSave(big) !== null && JSON.stringify(big).length < SAVE_MAX_BYTES, "a big but real save (60 aliens, 30 owed questions) is refused or over the size cap");

  // extra fields are dropped, never passed through
  const extra = good(); extra.evil = "x"; extra.player.admin = true; extra.aliens[0].__proto__polluted = 1;
  const pe = parseGameSave(extra);
  expect(pe && !("evil" in pe) && !("admin" in pe.player) && !("__proto__polluted" in pe.aliens[0]), "fields a save should not have are passed through to the database");

  // ── every way of being wrong refuses the WHOLE save ────────────────────────
  const bad = [
    ["not an object", () => "save"],
    ["an array", () => [good()]],
    ["null", () => null],
    ["an older version", (x) => { x.v = 0; }],
    ["a future version", (x) => { x.v = 2; }],
    ["no player", (x) => { delete x.player; }],
    ["no stats", (x) => { delete x.stats; }],
    ["dead (health 0)", (x) => { x.player.health = 0; }],
    ["negative health", (x) => { x.player.health = -5; }],
    ["NaN position", (x) => { x.player.x = NaN; }],
    ["Infinity position", (x) => { x.player.y = Infinity; }],
    ["a number written as a string", (x) => { x.player.ammo = "4"; }],
    ["a fractional clip", (x) => { x.player.ammo = 2.5; }],
    ["an unknown weapon", (x) => { x.player.weapon = "bazooka"; }],
    ["a level past the end", (x) => { x.level = 64; }],
    ["a level written as a string", (x) => { x.level = "3"; }],
    ["an alien in an unknown state", (x) => { x.aliens[2].state = "asleep"; }],
    ["an alien missing a field", (x) => { delete x.aliens[4].hp; }],
    ["thousands of aliens", (x) => { x.aliens = Array.from({ length: 5000 }, () => x.aliens[0]); }],
    ["a door more than fully open", (x) => { x.doors[0].open = 1.5; }],
    ["a boolean that is not one", (x) => { x.player.hasPistol = 1; }],
    ["a huge keycard name", (x) => { x.player.keys = ["b".repeat(500)]; }],
    ["an owed question with one choice", (x) => { x.owed[0].choices = ["4"]; }],
    ["an owed question pointing past its choices", (x) => { x.owed[0].correct = 9; }],
    ["an owed question a megabyte long", (x) => { x.owed[0].question = "x".repeat(1_000_000); }],
    ["a boss that is not an object", (x) => { x.boss = "boss"; }],
    ["a boss in an impossible phase", (x) => { x.boss = { ...good().aliens[0], room: null, awake: true, dead: false, shield: 0, phase: 99, cooldown: 0, strafe: 1, strafeT: 0 }; }],
    ["a pickup with no position", (x) => { delete x.pickups[0].x; }],
    ["negative run time", (x) => { x.stats.time = -1; }],
    ["a hint that is not text", (x) => { x.hinted = [{}]; }],
  ];
  for (const [what, edit] of bad) {
    const x = good();
    const r = edit(x);
    const input = r === undefined ? x : r;
    expect(parseGameSave(input) === null, `a save with ${what} was accepted`);
  }

  // ── names, setups, links ─────────────────────────────────────────────────
  expect(cleanSaveName("  Before   the boss  ", "Deck 10") === "Before the boss", "a save's name is not trimmed and collapsed to one line");
  expect(cleanSaveName("a\nb\tc", "x") === "a b c", "a save's name keeps its line breaks");
  expect(cleanSaveName("", "Deck 4 · Cargo hold") === "Deck 4 · Cargo hold", "an empty name does not fall back to the deck's name");
  expect(cleanSaveName(42, "Deck 1") === "Deck 1", "a name that is not text is not replaced by the fallback");
  expect(cleanSaveName("x".repeat(500), "d").length === SAVE_NAME_MAX, "a save's name is not capped");
  const setup = { subject: "maths", topics: ["algebra-basics", "probability"], mascot: "hoot" };
  expect(same(parseSaveSetup(setup), setup), "a real setup does not come back exactly");
  expect(parseSaveSetup({ ...setup, topics: [] }) === null, "a setup with no topics is accepted");
  expect(parseSaveSetup({ ...setup, topics: Array(9).fill("t") }) === null, "a setup with more topics than the game allows (8) is accepted");
  expect(parseSaveSetup({ ...setup, subject: 3 }) === null, "a setup whose subject is not text is accepted");
  const href = saveHref({ slot: 2, setup: { subject: "maths", topics: ["a&b", "c d"], mascot: "hoot" } });
  const u = new URL(href, "http://x");
  expect(u.pathname === "/early-access/play" && u.searchParams.get("save") === "2" && u.searchParams.getAll("topic").join("|") === "a&b|c d",
    `a save's link does not carry its own setup safely: ${href}`);
} finally {
  rmSync(out, { recursive: true, force: true });
}
if (failures) { console.error(`\n${failures} of ${checks} game-save checks FAILED.`); process.exit(1); }
console.log(`All ${checks} game-save checks passed.`);
