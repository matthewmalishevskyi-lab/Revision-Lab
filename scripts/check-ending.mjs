// The ending film after the Director (app/early-access/game/ending.ts), and
// the game code that plays it.
//
// A film cannot be checked by looking at the code, and nobody can be asked to
// beat the boss after every change to find out whether it still plays — Matthew
// cannot beat him yet. So: the timeline is checked as data (every line long
// enough to read, every crate loaded before take-off, the goodbye said before
// the screen goes white), every frame of it is DRAWN into a recording canvas
// to prove it never throws and never hands the canvas a NaN, the same frame
// drawn twice must be identical, and the game must reach it the way Matthew
// asked: by beating the boss, and no other way.

import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createRequire } from "node:module";

const require_ = createRequire(import.meta.url);
const out = mkdtempSync(join(tmpdir(), "ending-check-"));
let checks = 0, failures = 0;
const expect = (ok, msg) => { checks++; if (!ok) { failures++; if (failures <= 30) console.error(`  FAIL: ${msg}`); } };
// rules about source read it with the comments taken out: a comment describing
// a guard is not a guard (this project has been caught by that three times)
const stripComments = (src) => src.replace(/\/\*[\s\S]*?\*\//g, "").replace(/(^|[^:"'`\\])\/\/[^\n]*/g, "$1");

try {
  execFileSync(process.execPath, [
    require_.resolve("typescript/bin/tsc"), "app/early-access/game/ending.ts", "--outDir", out,
    "--module", "commonjs", "--target", "es2022", "--lib", "es2022,dom", "--skipLibCheck",
  ], { stdio: "inherit" });
  const E = require_(join(out, "ending.js"));
  const { ENDING_SECONDS, ENDING_SKIP_LOCK, ENDING_SCENES, ENDING_LINES, ENDING_CUES, TNT_CRATES, sceneAt, lineAt, cratesLoaded, crateLoadedAt, distanceAt, drawEnding } = E;
  const from = (name) => ENDING_SCENES.find((s) => s.scene === name)?.from;

  // ── the shape of the film ──────────────────────────────────────────────────
  expect(ENDING_SECONDS >= 30 && ENDING_SECONDS <= 75, `the ending is ${ENDING_SECONDS}s — "about a minute" was the brief, and it is skippable, not short`);
  expect(ENDING_SKIP_LOCK >= 0.5 && ENDING_SKIP_LOCK <= 3, `skip lock ${ENDING_SKIP_LOCK}s — long enough to outlast the press that started it, short enough not to trap anyone`);
  expect(ENDING_SCENES[0].from === 0, "the film does not start at 0");
  ENDING_SCENES.forEach((s, i) => {
    if (i) expect(s.from > ENDING_SCENES[i - 1].from, `scene "${s.scene}" starts before the one it follows`);
    expect(s.from < ENDING_SECONDS, `scene "${s.scene}" starts after the film has ended`);
  });
  // Matthew's beats, in his order: into a spaceship, fill it with TNT, crash
  // into their station, blow it up together with yourself
  for (const name of ["hangar", "cargo", "launch", "cockpit", "impact", "explosion", "end"]) expect(from(name) !== undefined, `no "${name}" shot`);
  expect(from("cargo") < from("launch") && from("launch") < from("cockpit") && from("cockpit") < from("impact") && from("impact") < from("explosion"), "the shots are out of order");
  for (let t = 0; t < ENDING_SECONDS; t += 0.25) {
    const expected = [...ENDING_SCENES].reverse().find((s) => t >= s.from).scene;
    if (sceneAt(t) !== expected) { expect(false, `sceneAt(${t}) says ${sceneAt(t)}, the table says ${expected}`); break; }
  }

  // ── the cargo: six crates in before the shuttle goes ──────────────────────
  expect(TNT_CRATES >= 3, `only ${TNT_CRATES} crates of TNT`);
  for (let i = 0; i < TNT_CRATES; i++) {
    expect(crateLoadedAt(i) > from("cargo") && crateLoadedAt(i) < from("launch"), `crate ${i + 1} goes in at ${crateLoadedAt(i)}s, outside the loading shot`);
    if (i) expect(crateLoadedAt(i) > crateLoadedAt(i - 1), `crate ${i + 1} goes in before crate ${i}`);
  }
  expect(cratesLoaded(from("cargo")) === 0, "crates are already aboard when loading starts");
  expect(cratesLoaded(from("launch")) === TNT_CRATES, `the shuttle takes off with ${cratesLoaded(from("launch"))} of ${TNT_CRATES} crates`);
  let last = 0;
  for (let t = 0; t <= ENDING_SECONDS; t += 0.1) { const n = cratesLoaded(t); expect(n >= last, `a crate comes back out at ${t.toFixed(1)}s`); last = n; }

  // ── the run in ─────────────────────────────────────────────────────────────
  expect(distanceAt(from("cockpit")) === 5000 && distanceAt(from("impact")) === 0, `the distance reads ${distanceAt(from("cockpit"))} m to ${distanceAt(from("impact"))} m, not 5000 to 0`);
  let prev = Infinity;
  for (let t = from("cockpit"); t <= from("impact"); t += 0.1) { const d = distanceAt(t); expect(d <= prev, `the station gets further away at ${t.toFixed(1)}s`); prev = d; }

  // ── what the mascot says ───────────────────────────────────────────────────
  // the same estimator check-security.mjs uses for every comms line in the
  // game (bold 18px system-ui, measured against a real canvas to never be under)
  const WIDE = "MWQ@%", NARROW = "iljt.,'’!|: ";
  const textWidth = (s) => [...s].reduce((w, c) => w + 18 * (WIDE.includes(c) ? 1.13 : NARROW.includes(c) ? 0.39 : c === c.toUpperCase() && c !== c.toLowerCase() ? 0.84 : 0.69), 0);
  const linesNeeded = (text) => { let lines = 1, line = ""; for (const word of text.split(" ")) { const next = line ? `${line} ${word}` : word; if (textWidth(next) > 360 && line) { lines++; line = word; } else line = next; } return lines; };
  expect(ENDING_LINES.length >= 5, `only ${ENDING_LINES.length} lines`);
  ENDING_LINES.forEach((l, i) => {
    expect(l.at >= 0 && l.until <= ENDING_SECONDS && l.until > l.at, `line ${i + 1} has a bad time range`);
    if (i) expect(l.at >= ENDING_LINES[i - 1].until, `line ${i + 1} starts before line ${i} has finished — one would be cut off`);
    // typed out at 60 letters a second (drawCommsText), then read at an easy 15
    const need = l.text.length / 15 + 0.8;
    expect(l.until - l.at >= need, `"${l.text.slice(0, 40)}…" is up for ${(l.until - l.at).toFixed(1)}s and needs ${need.toFixed(1)}s to read`);
    expect(linesNeeded(l.text) <= 4, `"${l.text.slice(0, 40)}…" needs ${linesNeeded(l.text)} lines; the comms panel draws four`);
    expect(l.until <= from("impact") || l.at >= from("explosion"), `"${l.text.slice(0, 40)}…" is on screen while the screen is white`);
  });
  // Matthew chose the mascot saying goodbye over comms, with the last line
  // before the screen goes white
  const beforeWhite = ENDING_LINES.filter((l) => l.until <= from("impact")).at(-1);
  expect(beforeWhite && /goodbye/i.test(beforeWhite.text), "the last thing said before the white is not a goodbye");
  expect(beforeWhite && from("impact") - beforeWhite.until < 0.5, "the goodbye ends well before the hit — it should run right up to the white");
  expect(lineAt(-1) === null && lineAt(ENDING_SECONDS + 1) === null, "a line outside the film");

  // ── the sounds ─────────────────────────────────────────────────────────────
  ENDING_CUES.forEach((c, i) => {
    expect(c.at >= 0 && c.at < ENDING_SECONDS, `a ${c.sound} at ${c.at}s, outside the film`);
    if (i) expect(c.at >= ENDING_CUES[i - 1].at, "the sound cues are out of order — the player plays them in a single pass");
  });
  for (let i = 0; i < TNT_CRATES; i++) expect(ENDING_CUES.some((c) => c.sound === "thunk" && Math.abs(c.at - crateLoadedAt(i)) < 0.01), `crate ${i + 1} goes in silently`);
  expect(ENDING_CUES.some((c) => c.sound === "impact" && Math.abs(c.at - from("impact")) < 0.01), "the hit is not heard at the moment of the hit");

  // ── every frame, drawn into a canvas that writes down what it was told ─────
  const recorder = () => {
    const calls = [];
    const gradient = { addColorStop: (...a) => calls.push(["stop", ...a]) };
    const ctx = new Proxy({}, {
      get: (_, k) => {
        if (k === "createLinearGradient" || k === "createRadialGradient") return (...a) => { calls.push([k, ...a]); return gradient; };
        if (k === "measureText") return (s) => ({ width: String(s).length * 9 });
        return (...a) => { calls.push([k, ...a]); };
      },
      set: (_, k, v) => { calls.push(["=" + String(k), v]); return true; },
    });
    return { ctx, calls };
  };
  let frames = 0, threw = 0, nan = 0;
  const times = [];
  for (let t = -1; t <= ENDING_SECONDS + 5; t += 0.2) times.push(Math.round(t * 100) / 100);
  for (const t of [...times, ...ENDING_SCENES.map((s) => s.from), ...ENDING_LINES.flatMap((l) => [l.at, l.until])]) {
    const { ctx, calls } = recorder();
    try { drawEnding(ctx, t, { who: "Pixel", touch: false }); } catch (e) { threw++; if (threw < 4) expect(false, `drawEnding(${t}) threw: ${e.message}`); continue; }
    frames++;
    const bad = calls.find((c) => c.some((a) => typeof a === "number" && !Number.isFinite(a)));
    if (bad) { nan++; if (nan < 4) expect(false, `drawEnding(${t}) passed ${bad[0]} a NaN or Infinity, which draws nothing`); }
  }
  expect(threw === 0 && nan === 0 && frames > 300, `${frames} frames drawn, ${threw} threw, ${nan} with a NaN`);
  // ⚠️ the same moment must draw the same picture, or skipping, a dropped
  // frame or a test jumping ahead shows something different from the film
  for (const t of [3, 14.6, 25.5, 38.4, 46.9, 50]) {
    const a = recorder(), b = recorder();
    drawEnding(a.ctx, t, { who: "Pixel", touch: false }); drawEnding(b.ctx, t, { who: "Pixel", touch: false });
    expect(JSON.stringify(a.calls) === JSON.stringify(b.calls), `the frame at ${t}s is different each time it is drawn`);
  }
  const endingSrc = stripComments(readFileSync("app/early-access/game/ending.ts", "utf8"));
  expect(!/Math\.random|Date\.now|performance\.now|new Date/.test(endingSrc), "ending.ts reads a clock or Math.random — the film must be a pure function of its time");
  // the mascot speaks in it, and a phone is told to tap rather than press Enter
  const said = recorder(); drawEnding(said.ctx, ENDING_LINES[0].at + 1, { who: "Pixel", touch: true });
  expect(said.calls.some((c) => c[0] === "fillText" && /PIXEL · COMMS/.test(c[1])), "the mascot's name is not on the comms panel");
  const tap = recorder(); drawEnding(tap.ctx, 20, { who: "Pixel", touch: true });
  expect(tap.calls.some((c) => c[0] === "fillText" && c[1] === "Tap to skip") && !tap.calls.some((c) => c[0] === "fillText" && /Enter/.test(c[1])), "a phone is told to press Enter");
  const early = recorder(); drawEnding(early.ctx, ENDING_SKIP_LOCK / 2, { who: "Pixel", touch: false });
  expect(!early.calls.some((c) => c[0] === "fillText" && /skip/i.test(String(c[1]))), "the skip hint shows while skipping is still locked");

  // ── the game: only the Director's defeat plays it ──────────────────────────
  const game = stripComments(readFileSync("app/early-access/game/game.ts", "utf8"));
  const body = (name) => { const i = game.indexOf(`private ${name}(`); if (i < 0) return ""; let d = 0, j = game.indexOf("{", i); const s = j; for (; j < game.length; j++) { if (game[j] === "{") d++; else if (game[j] === "}" && --d === 0) break; } return game.slice(s, j + 1); };
  expect((game.match(/else this\.startEnding\(\);/g) ?? []).length === 2, "finishing the last deck does not start the ending from BOTH Enter and a tap");
  expect(!/else this\.mode = "done";/.test(game), "a way past the last deck still skips the ending straight to the end screen");
  const starts = (game.match(/this\.startEnding\(\)/g) ?? []).length;
  expect(starts === 4, `startEnding is called ${starts} times — two finishes of the last deck and two replays from the end screen, nothing else`);
  expect(/if \(this\.mode === "done"\) \{ if \(!e\.repeat && k === "enter" && this\.screenLock <= 0\) this\.startEnding\(\)/.test(game) && /if \(this\.mode === "done"\) \{ if \(this\.screenLock <= 0\) this\.startEnding\(\)/.test(game), "the end screen replays the film on the same press that skipped it");
  // only reachable by beating him: the last deck's lift refuses while he lives
  const use = body("use");
  expect(use.indexOf("this.boss && !this.boss.dead") > -1 && use.indexOf("this.boss && !this.boss.dead") < use.indexOf("this.completeLevel()") && use.indexOf("this.boss && !this.boss.dead") < use.indexOf("this.startDebrief()"), "the last deck can be finished with the Director alive, which would play his ending without beating him");
  expect(/if \(this\.mode === "ending"\) \{ if \(!e\.repeat && \(k === "enter" \|\| k === " "\)\) this\.skipEnding\(\); return; \}/.test(game), "a held Enter (a key repeat) can skip the film it just started");
  expect(/ENDING_SKIP_LOCK/.test(body("skipEnding")), "skipping ignores the lock");
  const tick = body("tickEnding");
  expect(/this\.menuOpen\) return/.test(tick), "the film keeps running behind the Saves menu");
  expect(/ENDING_SECONDS\) this\.finishEnding\(\)/.test(tick), "the film never ends by itself");
  expect(/while \(this\.endingCue < ENDING_CUES\.length/.test(tick), "the sounds are not played as the film passes them");
  const sounder = body("endingSound");
  for (const s of new Set(ENDING_CUES.map((c) => c.sound))) expect(sounder.includes(`"${s}"`), `the "${s}" sound is cued but game.ts never plays it`);
  const draw = body("draw");
  const firstReturn = draw.slice(0, draw.indexOf("return;") + 7);
  expect(/^\{\s*if \(this\.mode === "ending"\) \{/.test(draw) && /drawEnding\(/.test(firstReturn) && !/this\.R\.|drawHud\(/.test(firstReturn), "draw() renders the 3D deck before (or as well as) the film");
  expect(!/"ending"/.test(game.match(/const live = [^;]*;/)?.[0] ?? '"ending"'), "a save can be made during the ending");
  expect(!/"ending"[^;]*this\.stats\.time|this\.stats\.time[^;]*"ending"/.test(game), "the run clock counts the film");
} finally {
  rmSync(out, { recursive: true, force: true });
}

if (failures) {
  console.error(`\n${failures} of ${checks} ending checks failed.`);
  process.exit(1);
}
console.log(`All ${checks} ending checks passed.`);
