// Drives every interactive diagram in a real browser and checks that the rule
// it claims actually holds — from the pixels, not from the code.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY THIS EXISTS WHEN check-geometry.ts ALREADY PASSES 800,000 ASSERTIONS
//
// check-geometry.ts tests the MODULE. It proves that, given three angles,
// `inscribedAngle` returns a centre angle exactly twice the edge one. It cannot
// prove that the component asking the question passed the right three angles,
// wired the answer into the right label, or drew the arc it printed the number
// beside. A component can call a perfect function and still show nonsense.
//
// So this reads each diagram's handle positions OUT OF THE RENDERED SVG, works
// the rule out from those coordinates with plain trigonometry, and compares it
// against the number the diagram is displaying to the student. Then it drags a
// handle somewhere random and does it again, thirty times per diagram.
//
// It is deliberately NOT part of `npm run check`: it needs a browser and a
// running dev server, which that command has neither of. Run it with
// `npm run check:interactive` — it starts and stops its own server.
// ─────────────────────────────────────────────────────────────────────────────

import { spawn, execSync } from "node:child_process";
import { createRequire } from "node:module";

// ── Finding Playwright ──────────────────────────────────────────────────────
//
// Deliberately NOT a dependency in package.json. This project has taken
// exactly one runtime dependency in its life (nodemailer) and wrote a
// paragraph justifying it; Playwright pulls down a browser and is only needed
// by this one script, which is not part of `npm run check`. So it is resolved
// from wherever it happens to live — the project, or a global install — and if
// it is nowhere, the script says how to get it rather than crashing.
const require_ = createRequire(import.meta.url);
function findPlaywright() {
  const roots = [];
  try {
    roots.push(execSync("npm root -g", { encoding: "utf8" }).trim());
  } catch {
    // no global npm; that is fine
  }
  for (const spec of ["playwright", ...roots.map((r) => `${r}/playwright/index.js`)]) {
    try {
      return require_(spec);
    } catch {
      continue;
    }
  }
  return null;
}

const playwright = findPlaywright();
if (!playwright) {
  console.error("This check drives a real browser, and Playwright is not installed.");
  console.error("");
  console.error("  npm install --no-save playwright");
  console.error("  npx playwright install chromium");
  console.error("");
  console.error("Then run `npm run check:interactive` again. It is deliberately not");
  console.error("part of `npm run check`, which has no browser to drive.");
  process.exit(1);
}
const { chromium } = playwright;

const PORT = Number(process.env.INTERACTIVE_PORT ?? 3131);
const BASE = `http://localhost:${PORT}`;
const DRAGS_PER_DIAGRAM = Number(process.env.INTERACTIVE_DRAGS ?? 30);

// Which page carries which diagrams. Derived by hand rather than from the
// content files because this script is deliberately dependency-free — it talks
// to the site the way a visitor does, over HTTP.
const PAGES = [
  "maths/circle-theorems",
  "maths/angles-and-2d-shapes",
  "maths/straight-line-graphs",
  "maths/pythagoras-and-trigonometry",
  "physics/waves",
];

let checks = 0;
const failures = [];

function ok(condition, what, detail = "") {
  checks += 1;
  if (!condition) failures.push(`${what}${detail ? ` — ${detail}` : ""}`);
}

// ─── The rules, evaluated inside the page ───────────────────────────────────
//
// Everything below runs in the browser, against the real DOM. It re-derives
// each quantity from the handle coordinates using plain trigonometry — never
// by calling the site's own geometry module, which would only prove the code
// agrees with itself.

const RULES = String.raw`
(() => {
  const at = (v, a, b) => {
    const v1 = { x: a.x - v.x, y: a.y - v.y };
    const v2 = { x: b.x - v.x, y: b.y - v.y };
    const m1 = Math.hypot(v1.x, v1.y), m2 = Math.hypot(v2.x, v2.y);
    if (!m1 || !m2) return NaN;
    const c = Math.min(1, Math.max(-1, (v1.x * v2.x + v1.y * v2.y) / (m1 * m2)));
    return (Math.acos(c) * 180) / Math.PI;
  };
  const dist = (a, b) => Math.hypot(b.x - a.x, b.y - a.y);
  /** Every number printed in the readout, in order. */
  const nums = (card) =>
    [...card.querySelector('[role="status"]').textContent.matchAll(/-?\d+(?:\.\d+)?/g)]
      .map((m) => Number(m[0]));
  /** Where each draggable point actually is, read off the rendered SVG. */
  const handles = (card) =>
    [...card.querySelectorAll('[role="slider"],[role="button"]')].map((g) => {
      const dot = [...g.querySelectorAll("circle")].at(-1);
      return { x: +dot.getAttribute("cx"), y: +dot.getAttribute("cy") };
    });
  const CENTRE = { x: 110, y: 64 };
  const near = (a, b, tol) => Math.abs(a - b) <= tol;

  // Each entry returns a list of [description, didItHold] pairs.
  return {
    "circle-angle-at-centre": (card) => {
      const [A, B, P] = handles(card);
      const [shownCentre, , shownEdge] = nums(card);
      const measured = at(P, A, B);
      return [
        ["the centre angle is twice the edge angle", near(shownCentre, 2 * shownEdge, 0.06)],
        ["the edge angle shown matches the drawn figure", near(shownEdge, measured, 0.06)],
        ["A, B and P are all on the circle", [A, B, P].every((p) => near(dist(p, CENTRE), 44, 0.6))],
      ];
    },

    "circle-semicircle": (card) => {
      const [A, B, P] = handles(card);
      const shown = nums(card)[0];
      return [
        ["the angle in a semicircle is a right angle", near(at(P, A, B), 90, 0.06)],
        ["and the diagram says so", near(shown, 90, 0.06)],
        ["A and B really are ends of a DIAMETER", near(dist(A, B), 88, 0.6)],
      ];
    },

    "circle-same-segment": (card) => {
      const [A, B, P, Q] = handles(card);
      const angP = at(P, A, B), angQ = at(Q, A, B);
      const text = card.querySelector('[role="status"]').textContent;
      const sameSegment = /same segment/.test(text);
      return sameSegment
        ? [["angles in the same segment are equal", near(angP, angQ, 0.06)],
           ["and the number shown is one of them", near(nums(card)[0], angP, 0.06)]]
        : [["on opposite arcs the two angles add to 180", near(angP + angQ, 180, 0.06)],
           ["and the diagram says they add to 180", near(nums(card).at(-1), 180, 0.06)]];
    },

    "circle-cyclic-quadrilateral": (card) => {
      const [A, B, C, D] = handles(card);
      return [
        ["opposite angles A and C add to 180", near(at(A, D, B) + at(C, B, D), 180, 0.06)],
        ["opposite angles B and D add to 180", near(at(B, A, C) + at(D, C, A), 180, 0.06)],
        ["the four corners stay in order round the circle",
          [A, B, C, D].every((p) => near(dist(p, CENTRE), 44, 0.6))],
      ];
    },

    "circle-tangent-radius": (card) => {
      const [T] = handles(card);
      // The tangent is the longest straight path in the figure that is not the
      // radius; find it by taking the segment whose ends are furthest apart.
      const seg = [...card.querySelectorAll("path")]
        .map((p) => (p.getAttribute("d") ?? "").match(/^M ([\d.]+) ([\d.]+) L ([\d.]+) ([\d.]+)$/))
        .filter(Boolean)
        .map((m) => ({ a: { x: +m[1], y: +m[2] }, b: { x: +m[3], y: +m[4] } }))
        .sort((p, q) => dist(q.a, q.b) - dist(p.a, p.b))[0];
      return [
        ["the point of contact is on the circle", near(dist(T, CENTRE), 44, 0.6)],
        ["the tangent meets the radius at 90 degrees",
          !!seg && near(at(T, CENTRE, seg.a), 90, 0.2)],
        ["the diagram says 90", near(nums(card)[0], 90, 0.06)],
      ];
    },

    "circle-alternate-segment": (card) => {
      const [T, A, B] = handles(card);
      const [shownChord, shownAlternate] = nums(card);
      return [
        ["the tangent-chord angle equals the angle in the alternate segment",
          near(shownChord, shownAlternate, 0.06)],
        ["and the alternate-segment angle matches the drawn triangle",
          near(shownAlternate, at(B, T, A), 0.06)],
        ["T, A and B are on the circle",
          [T, A, B].every((p) => near(dist(p, CENTRE), 44, 0.6))],
      ];
    },

    "angles-on-a-line": (card) => {
      const n = nums(card);
      return [["angles on a straight line add to 180", near(n[0] + n[1], n[2], 0.02) && near(n[2], 180, 0.06)]];
    },

    "angles-around-a-point": (card) => {
      const n = nums(card);
      return [["angles around a point add to 360",
        near(n[0] + n[1] + n[2], n[3], 0.02) && near(n[3], 360, 0.06)]];
    },

    "vertically-opposite": (card) => {
      const n = nums(card);
      return [
        ["one pair of vertically opposite angles is equal", near(n[0], n[1], 0.06)],
        ["so is the other", near(n[2], n[3], 0.06)],
        ["and the four together make a full turn", near(n[0] + n[1] + n[2] + n[3], 360, 0.3)],
      ];
    },

    "angles-in-a-triangle": (card) => {
      const [A, B, C] = handles(card);
      const n = nums(card);
      return [
        ["the three angles add to 180", near(n[0] + n[1] + n[2], n[3], 0.02) && near(n[3], 180, 0.06)],
        ["and they are the angles of the triangle actually drawn",
          near(n[0], at(A, B, C), 0.06) && near(n[1], at(B, C, A), 0.06)],
      ];
    },

    "exterior-angle-triangle": (card) => {
      const n = nums(card);
      const [A, B, C] = handles(card);
      return [
        ["the exterior angle equals the two opposite interior angles",
          near(n[0], n[1] + n[2], 0.02)],
        ["and those two are the triangle's own angles",
          near(n[1], at(A, B, C), 0.06) && near(n[2], at(C, A, B), 0.06)],
      ];
    },

    "parallel-corresponding": (card) => {
      const n = nums(card);
      return [["corresponding angles are equal", near(n[0], n[1], 0.06)]];
    },
    "parallel-alternate": (card) => {
      const n = nums(card);
      return [["alternate angles are equal", near(n[0], n[1], 0.06)]];
    },
    "parallel-co-interior": (card) => {
      const n = nums(card);
      return [["co-interior angles add to 180",
        near(n[0] + n[1], n[2], 0.02) && near(n[2], 180, 0.06)]];
    },

    "gradient-intercept": (card) => {
      // y = mx + c, read out of the caption, checked against where the two
      // draggable points actually sit on the grid.
      const text = card.querySelector('[role="status"]').textContent;
      // m and c are printed EXACTLY, so either may be a fraction ("2/3") as
      // well as an integer or a terminating decimal. Anything the page can
      // print, this has to be able to read back — a rule that only understands
      // decimals would silently stop checking the day the display got honest.
      const val = (t) => {
        const parts = t.split("/");
        return parts.length === 2 ? Number(parts[0]) / Number(parts[1]) : Number(t);
      };
      const NUM = "-?\\d+(?:\\.\\d+)?(?:\\/\\d+)?";
      const eq = text.match(new RegExp("y = (" + NUM + ")x ([+−]) (" + NUM + ")"));
      if (!eq) return [["the equation is printed in a readable form", false]];
      const m = val(eq[1]);
      const c = (eq[2] === "−" ? -1 : 1) * val(eq[3]);
      const GRID = { left: 30, right: 198, top: 20, bottom: 100 };
      const toGraph = (p) => ({
        x: ((p.x - GRID.left) / (GRID.right - GRID.left)) * 10,
        y: ((GRID.bottom - p.y) / (GRID.bottom - GRID.top)) * 10,
      });
      const [P, Q] = handles(card).map(toGraph);
      const step = text.match(/m = (-?[\d.]+) ÷ (-?[\d.]+)/);
      return [
        // Tight, because the equation is now exact rather than rounded: the
        // points are on the line or the line is wrong.
        ["both points sit on the line the equation describes",
          near(m * P.x + c, P.y, 1e-9) && near(m * Q.x + c, Q.y, 1e-9)],
        ["the gradient is the step triangle's up over across",
          !!step && near(Number(step[1]) / Number(step[2]), m, 1e-9)],
      ];
    },

    "pythagoras": (card) => {
      const text = card.querySelector('[role="status"]').textContent;
      // "a² + b² = sum, so c = √sum ≈ c" — the root is printed with ≈ unless it
      // comes out exactly, so both the arithmetic AND the honesty of the sign
      // are checked.
      const n = nums(card);
      const [a, b, sum, alsoSum, c] = n;
      const claimsExact = /√[\d.]+ =/.test(text);
      const root = Math.sqrt(a * a + b * b);
      return [
        ["the printed sum really is a² + b²", near(sum, a * a + b * b, 1e-9)],
        ["the number under the root is that same sum", near(alsoSum, sum, 1e-9)],
        ["c is the square root of it, to the precision shown", near(c, root, 0.005)],
        ["an equals sign is only used when the root is exact",
          !claimsExact || near(c, root, 1e-9)],
      ];
    },

    "refraction": (card) => {
      const n = nums(card);
      // "air X° → glass Y° · 1.00 sin X° ≈ 1.50 sin Y°"
      const [inAir, inGlass] = n;
      const rad = (d) => (d * Math.PI) / 180;
      const deg = (r) => (r * 180) / Math.PI;
      // ⚠️ The first version of this compared the sines of the two PRINTED
      // angles against a fixed tolerance, and eventually failed on
      // "sin 61.2° = 1.50 sin 35.8°" — an error of 0.0011. Nothing was wrong
      // with the physics: both angles are printed to one decimal place, and no
      // pair of 1-d.p. angles satisfies Snell's law exactly, so any fixed
      // tolerance is either too tight (a false alarm) or so loose it stops
      // testing anything.
      //
      // What is actually checkable is this: the refracted angle on screen must
      // be what the law gives for SOME true incidence angle that would print as
      // the incidence angle on screen. refract() is monotonic, so the half-unit
      // of rounding on the input maps to a bracket on the output, and the shown
      // value must sit inside it (plus its own half unit).
      const refract = (d) => deg(Math.asin(Math.sin(rad(d)) / 1.5));
      const low = refract(inAir - 0.05) - 0.05;
      const high = refract(inAir + 0.05) + 0.05;
      return [
        ["the refracted angle is what Snell's law gives, to the precision shown",
          inGlass >= low && inGlass <= high],
        ["the two are still close enough that the line is honest as ≈",
          near(Math.sin(rad(inAir)), 1.5 * Math.sin(rad(inGlass)), 0.005)],
        ["the ray bends TOWARDS the normal going into the glass", inGlass < inAir + 1e-9],
      ];
    },
  };
})()
`;

// ─── Driving it ─────────────────────────────────────────────────────────────

let serverLog = "";

function startServer() {
  // ⚠️ `next` directly, not through `npx`, and in its own process group.
  //
  // Spawning `npx next dev` gives you a WRAPPER process; killing that at the
  // end leaves the real server running and holding the port, so the next run
  // finds something listening, decides a server is already up, and then hangs
  // waiting for a reply from a corpse. Learned the hard way, twice.
  const bin = process.platform === "win32" ? "next.cmd" : "next";
  const child = spawn(`node_modules/.bin/${bin}`, ["dev", "-p", String(PORT)], {
    stdio: ["ignore", "pipe", "pipe"],
    detached: process.platform !== "win32",
    shell: process.platform === "win32",
  });
  // ⚠️ These streams MUST be drained. A piped stdout nobody reads fills its
  // buffer and then blocks the child mid-write — the server appears to hang
  // during startup and never answers, which is exactly how this failed the
  // first time it ran.
  const keep = (chunk) => {
    serverLog = (serverLog + chunk).slice(-4000);
  };
  child.stdout.on("data", keep);
  child.stderr.on("data", keep);
  return child;
}

async function waitForServer(timeoutMs = 120000) {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    try {
      const res = await fetch(`${BASE}/teacher-tools/diagrams`);
      if (res.ok) return true;
    } catch {
      // not up yet
    }
    await new Promise((r) => setTimeout(r, 1000));
  }
  return false;
}

async function run() {
  const browser = await chromium.launch({
    executablePath: process.env.CHROMIUM_PATH || undefined,
  });
  const page = await browser.newPage({ viewport: { width: 900, height: 1000 } });

  const jsErrors = [];
  page.on("pageerror", (e) => jsErrors.push(e.message));
  page.on("console", (m) => {
    if (m.type() === "error") jsErrors.push(m.text());
  });

  let seed = 4242;
  const random = () => {
    seed = (seed * 1103515245 + 12345) % 2147483648;
    return seed / 2147483648;
  };

  const seen = new Set();

  for (const path of PAGES) {
    await page.goto(`${BASE}/teacher-tools/diagrams/${path}`, {
      waitUntil: "networkidle",
      timeout: 90000,
    });
    await page.waitForTimeout(1200);

    const cards = page.locator('li:has([role="status"])');
    const count = await cards.count();

    for (let i = 0; i < count; i += 1) {
      const card = cards.nth(i);
      const name = await card.locator("code").innerText();
      seen.add(name);

      await card.scrollIntoViewIfNeeded();
      await page.waitForTimeout(120);

      const box = await card.locator("svg").first().boundingBox();
      const viewBox = await card
        .locator("svg")
        .first()
        .evaluate((s) => s.getAttribute("viewBox").split(" ").map(Number));
      const sx = box.width / viewBox[2];
      const sy = box.height / viewBox[3];

      const handleCount = await card.locator('[role="slider"],[role="button"]').count();

      for (let drag = 0; drag <= DRAGS_PER_DIAGRAM; drag += 1) {
        // Check the state as it stands, THEN move something.
        const results = await card.evaluate(
          (el, [rulesSrc, diagramName]) => {
            const rules = eval(rulesSrc);
            const rule = rules[diagramName];
            if (!rule) return [["no rule is defined for this diagram", false]];
            try {
              const out = rule(el);
              const shown = el.querySelector('[role="status"]').textContent.trim();
              return out.map(([what, held]) => [what, held, shown]);
            } catch (error) {
              return [[`the rule could not be evaluated: ${error.message}`, false, ""]];
            }
          },
          [RULES, name],
        );

        for (const [what, held, shown] of results) {
          ok(held, `${name}: ${what}`, held ? "" : `screen said "${shown}"`);
        }

        if (drag === DRAGS_PER_DIAGRAM) break;

        // Move one handle somewhere random inside the canvas.
        const h = card.locator('[role="slider"],[role="button"]').nth(Math.floor(random() * handleCount));
        const hb = await h.boundingBox();
        if (!hb) continue;
        const tx = box.x + (20 + random() * (viewBox[2] - 40)) * sx;
        const ty = box.y + (20 + random() * (viewBox[3] - 40)) * sy;
        await page.mouse.move(hb.x + hb.width / 2, hb.y + hb.height / 2);
        await page.mouse.down();
        await page.mouse.move(tx, ty, { steps: 6 });
        await page.mouse.up();
        await page.waitForTimeout(35);
      }
    }
  }

  // ── PHASE TWO: does every label on every diagram FIT, and not sit on top of
  //    another one? ────────────────────────────────────────────────────────
  //
  // ⚠️ THIS IS A DIFFERENT KIND OF WRONG FROM EVERYTHING ABOVE, AND NOTHING
  // ELSE ON THE SITE CAN SEE IT.
  //
  // The rules above prove the numbers are right. They say nothing about
  // whether you can READ them. Diagrams are drawn on a ~220-unit canvas and
  // SVG silently clips anything past the viewBox, so a label one character too
  // long does not error, does not warn, and does not appear — it is simply
  // missing, and only from some diagrams, and only sometimes.
  //
  // This project has been caught by exactly that twice: the captions that were
  // SVG text and were cut off on over half the diagrams, and the handles drawn
  // outside the canvas. Both were found by rendering and looking. This does
  // the looking with getBBox() instead of eyes, over every diagram on every
  // page of the library, so it happens on every run rather than when somebody
  // remembers.
  //
  // It found five real defects the first time it ran, three of them older than
  // the change that prompted it.
  //
  // The overlap floor is 3 units, and it is not slack. A text bounding box is
  // the full em box — ascender to descender, including the empty space above a
  // lower-case word — so two ordinary stacked lines of an 11px label at 12
  // units of leading overlap by about 2 units of pure whitespace and look
  // perfectly separated. Verified by screenshotting the ones between 2 and 3.
  const sweep = await fetch(`${BASE}/sitemap.xml`).then((r) => r.text());
  const libraryPages = [...sweep.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => m[1].replace(/^https?:\/\/[^/]+/, BASE))
    .filter((u) => /\/teacher-tools\/diagrams\/[^/]+\/[^/]+$/.test(u));

  ok(libraryPages.length > 0, "the sitemap lists the diagram library pages");

  for (const url of libraryPages) {
    const response = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 90000 });
    ok(response?.ok(), `${url.split("/diagrams/")[1]} loads`, String(response?.status()));
    if (!response?.ok()) continue;
    await page.waitForTimeout(100);

    const found = await page.evaluate(() => {
      const clipped = [];
      const overlapping = [];
      let drawn = 0;
      for (const svg of document.querySelectorAll("svg")) {
        const vb = svg.viewBox?.baseVal;
        if (!vb || !vb.width) continue;
        drawn += 1;
        const boxes = [];
        for (const node of svg.querySelectorAll("text")) {
          const text = node.textContent.trim();
          if (!text) continue;
          const b = node.getBBox();
          if (b.x < -0.5 || b.x + b.width > vb.width + 0.5 || b.y < -0.5 || b.y + b.height > vb.height + 0.5) {
            clipped.push(`"${text}" runs to ${(b.x + b.width).toFixed(1)},${(b.y + b.height).toFixed(1)} on a ${vb.width}x${vb.height} canvas`);
          }
          boxes.push({ text, x1: b.x, x2: b.x + b.width, y1: b.y, y2: b.y + b.height });
        }
        for (let i = 0; i < boxes.length; i += 1) {
          for (let j = i + 1; j < boxes.length; j += 1) {
            const a = boxes[i];
            const c = boxes[j];
            const ox = Math.min(a.x2, c.x2) - Math.max(a.x1, c.x1);
            const oy = Math.min(a.y2, c.y2) - Math.max(a.y1, c.y1);
            if (ox > 3 && oy > 3) {
              overlapping.push(`"${a.text}" over "${c.text}" by ${ox.toFixed(1)}x${oy.toFixed(1)}`);
            }
          }
        }
      }
      return { clipped, overlapping, drawn };
    });

    const where = url.split("/diagrams/")[1];
    ok(found.drawn > 0, `${where} actually drew a diagram`);
    ok(found.clipped.length === 0, `${where}: no label is clipped by its canvas`, found.clipped.join("; "));
    ok(found.overlapping.length === 0, `${where}: no two labels sit on top of each other`, found.overlapping.join("; "));
  }

  // ── PHASE THREE: does anything scroll sideways on the narrowest phone? ──
  //
  // ⚠️ THE PHONE PASS WAS A ONE-OFF MEASUREMENT, AND THE SITE KEPT GROWING.
  //
  // 2026-09-08 measured 25 routes at four widths and recorded "zero overflow".
  // True when written. By 2026-09-11 /progress was 21px too wide at 320px —
  // the weekly chart cannot fit seven day names, a scale column and its own
  // padding into 232px — and nothing noticed, because nothing was looking any
  // more.
  //
  // 320px is a live width: an iPhone SE, a Galaxy S8, an Android split view.
  // Sideways scroll there is the exact complaint the phone pass existed to
  // answer, so it is measured on every run now rather than when somebody
  // remembers.
  //
  // Public pages only. The ones behind a login need an account, and creating
  // one from a check would write to the real store; /progress itself is
  // covered by the WeeklyChart budget being measured directly below.
  {
    const narrow = await browser.newContext({
      viewport: { width: 320, height: 800 },
      hasTouch: true,
      isMobile: true,
    });
    const phone = await narrow.newPage();
    const ROUTES = [
      "/",
      "/teacher-tools",
      "/teacher-tools/diagrams",
      "/teacher-tools/diagrams/maths",
      "/teacher-tools/diagrams/maths/circle-theorems",
      "/subjects/maths",
      "/subjects/maths/circle-theorems",
      "/accessibility",
      "/quiz",
      "/login",
    ];
    for (const route of ROUTES) {
      const response = await phone.goto(`${BASE}${route}`, { waitUntil: "domcontentloaded", timeout: 90000 });
      if (!response?.ok()) {
        ok(false, `${route} loads at 320px`, String(response?.status()));
        continue;
      }
      await phone.waitForTimeout(150);
      const found = await phone.evaluate(() => {
        const de = document.documentElement;
        if (de.scrollWidth <= de.clientWidth) return null;
        const past = [...document.querySelectorAll("*")]
          .filter((el) => {
            const r = el.getBoundingClientRect();
            if (r.width < 1) return false;
            for (let a = el.parentElement; a; a = a.parentElement) {
              if (getComputedStyle(a).overflowX !== "visible") return false;
            }
            return r.right > de.clientWidth + 1;
          })
          .slice(0, 3)
          .map((el) => `<${el.tagName.toLowerCase()} class="${String(el.className).slice(0, 48)}">`);
        return `${de.scrollWidth} wide in ${de.clientWidth}: ${past.join(" ")}`;
      });
      ok(found === null, `${route} does not scroll sideways at 320px`, found ?? "");
    }
    await narrow.close();
  }

  await browser.close();

  // Every registered interactive diagram must actually have been reached and
  // checked — a diagram this script never opens is a diagram nothing verifies.
  const registered = (
    await import("node:fs")
  ).readFileSync("app/components/diagrams/interactive/index.tsx", "utf8");
  const names = [
    ...registered
      .split("export const INTERACTIVE")[1]
      .split("};")[0]
      .matchAll(/^\s+"?([a-z][a-z0-9-]*)"?:/gm),
  ].map((m) => m[1]);
  for (const n of names) {
    ok(seen.has(n), `${n} was actually opened and checked`, seen.has(n) ? "" : "not on any listed page");
  }

  ok(jsErrors.length === 0, "no JavaScript errors while dragging", jsErrors.slice(0, 3).join(" | "));
}

// If a dev server is already running on this port — because somebody has
// `npm run dev` open, which is the normal state of affairs — use it rather
// than starting a second one. Next refuses to run two at once anyway, so
// spawning blindly just fails with a confusing message.
let server = null;
const alreadyRunning = await (async () => {
  try {
    const res = await fetch(`${BASE}/teacher-tools/diagrams`);
    return res.ok;
  } catch {
    return false;
  }
})();

if (alreadyRunning) {
  console.log(`Using the dev server already running on ${BASE}.`);
} else {
  server = startServer();
}

try {
  if (!alreadyRunning && !(await waitForServer())) {
    console.error(`The dev server never came up on ${BASE}. Its last output:\n`);
    console.error(serverLog || "(nothing at all — is `next` installed?)");
    throw new Error("dev server never came up");
  }
  await run();
} finally {
  if (server) {
    // The whole group, so nothing is left holding the port.
    try {
      if (process.platform === "win32") server.kill();
      else process.kill(-server.pid, "SIGTERM");
    } catch {
      server.kill("SIGKILL");
    }
  }
}

if (failures.length > 0) {
  console.error(`\n${failures.length} of ${checks} interactive-diagram checks FAILED:\n`);
  // One line per distinct failure, with a count — thirty drags of the same
  // broken diagram is one bug, not thirty.
  const grouped = new Map();
  for (const f of failures) {
    const key = f.replace(/ — screen said .*/, "");
    const example = f.match(/ — screen said (.*)$/)?.[1] ?? "";
    const seenBefore = grouped.get(key);
    grouped.set(key, { count: (seenBefore?.count ?? 0) + 1, example: seenBefore?.example || example });
  }
  for (const [what, { count, example }] of grouped) {
    console.error(`  ✗ ${what}${count > 1 ? `  (×${count})` : ""}`);
    if (example) console.error(`      on screen: ${example}`);
  }
  process.exit(1);
}

console.log(`\nAll ${checks.toLocaleString("en-GB")} interactive-diagram checks passed.`);
console.log(`(${PAGES.length} pages, ${DRAGS_PER_DIAGRAM} random drags each, rules re-derived from the rendered SVG.)`);
