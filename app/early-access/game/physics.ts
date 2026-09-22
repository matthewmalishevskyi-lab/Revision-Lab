// Movement and collision for anything that walks: the player and the aliens.
//
// Everything that walks is a CIRCLE, and walls are squares. The first version
// treated the player as a small square and tried each axis in turn, which has
// two well-known faults: you stop a little short of a wall when moving fast
// (the whole step is refused rather than shortened), and you snag on every
// door frame and crate corner, because a square corner meeting a square corner
// has nowhere to slide. A circle pushed out of a square slides round its corner
// on its own, which is what makes doorways feel easy to walk through.
//
// Steps are split so nothing moves more than a fifth of a square at once, so
// nothing can pass through a wall even on a slow computer (dt is capped too).

import { blocked, COVER_H, type World } from "./world";

const MAX_STEP = 0.2;

/** Walls always stop you; waist-high cover only while your feet are below it. */
function stops(w: World, x: number, y: number, z: number): boolean {
  if (z >= COVER_H - 0.02 && x >= 0 && y >= 0 && x < w.W && y < w.H && w.solid[y * w.W + x] === 2) return false;
  return blocked(w, x, y);
}

/** Push a circle out of every blocked square it overlaps. */
export function pushOut(w: World, x: number, y: number, r: number, z = 0): [number, number] {
  for (let pass = 0; pass < 3; pass++) {
    let moved = false;
    const x0 = Math.floor(x - r), x1 = Math.floor(x + r), y0 = Math.floor(y - r), y1 = Math.floor(y + r);
    for (let cy = y0; cy <= y1; cy++) for (let cx = x0; cx <= x1; cx++) {
      if (!stops(w, cx, cy, z)) continue;
      // nearest point of this square to the circle's centre
      const nx = Math.max(cx, Math.min(x, cx + 1)), ny = Math.max(cy, Math.min(y, cy + 1));
      const dx = x - nx, dy = y - ny, d = Math.hypot(dx, dy);
      if (d >= r) continue;
      if (d > 1e-6) { x += (dx / d) * (r - d); y += (dy / d) * (r - d); }
      else {
        // the centre is inside the square: leave by the nearest side
        const l = x - cx, rt = cx + 1 - x, t = y - cy, b = cy + 1 - y, m = Math.min(l, rt, t, b);
        if (m === l) x = cx - r; else if (m === rt) x = cx + 1 + r; else if (m === t) y = cy - r; else y = cy + 1 + r;
      }
      moved = true;
    }
    if (!moved) break;
  }
  return [x, y];
}

/** Does a circle here overlap anything solid? */
export function circleFree(w: World, x: number, y: number, r: number, z = 0): boolean {
  const x0 = Math.floor(x - r), x1 = Math.floor(x + r), y0 = Math.floor(y - r), y1 = Math.floor(y + r);
  for (let cy = y0; cy <= y1; cy++) for (let cx = x0; cx <= x1; cx++) {
    if (!stops(w, cx, cy, z)) continue;
    const nx = Math.max(cx, Math.min(x, cx + 1)), ny = Math.max(cy, Math.min(y, cy + 1));
    if (Math.hypot(x - nx, y - ny) < r - 1e-4) return false;
  }
  return true;
}

/** Move a circle by (dx, dy), sliding along whatever it meets. */
export function moveCircle(w: World, x: number, y: number, dx: number, dy: number, r: number, z = 0): [number, number] {
  const n = Math.max(1, Math.ceil(Math.hypot(dx, dy) / MAX_STEP));
  for (let i = 0; i < n; i++) [x, y] = pushOut(w, x + dx / n, y + dy / n, r, z);
  return [x, y];
}

/** Is the straight path from a to b clear for a circle? (Used when something throws you.) */
export function pathClear(w: World, ax: number, ay: number, bx: number, by: number, r: number, z = 0): boolean {
  const n = Math.max(1, Math.ceil(Math.hypot(bx - ax, by - ay) / 0.1));
  for (let i = 1; i <= n; i++) if (!circleFree(w, ax + ((bx - ax) * i) / n, ay + ((by - ay) * i) / n, r, z)) return false;
  return true;
}
