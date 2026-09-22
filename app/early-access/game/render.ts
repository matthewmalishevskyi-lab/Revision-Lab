// The Doom-style renderer, rewritten for speed from the level prototype.
//
// Same picture as the screenshots: one ray per screen column, ceilings drawn
// square by square along it (every square has its own height), steps where a
// ceiling drops, waist-high cover and see-through grilles, a depth value per
// pixel so sprites tuck behind things. What changed is the cost: no objects or
// arrays are made per pixel, and light comes from the pre-baked light map, so
// a frame is a few milliseconds instead of a few hundred.

import type { Sprite } from "./sprites";
import type { Tex, TexSet } from "./textures";
import { COVER_H, FACE, LIGHT_SUB, ROOM_H, type World } from "./world";

export type Drawable = { x: number; y: number; z?: number; sprite: string; alpha?: number };

const FOG_R = 12, FOG_G = 26, FOG_B = 48; // distance fades into a deep blue haze, not black
const T = 128, T1 = 127;

export function makeRenderer(W: number, H: number) {
  const img = new ImageData(W, H);
  const px = img.data;
  const depth = new Float32Array(W * H);
  const FOV = (72 * Math.PI) / 180, planeLen = Math.tan(FOV / 2), proj = W / 2 / planeLen;
  const centreDepth = { value: 1e9 }; // how far the wall under the crosshair is

  // Colour one pixel: texture x light, glowing texels stay lit, far away fades to navy.
  function shade(p: number, t: Tex | Sprite, ti: number, sr: number, sg: number, sb: number, dist: number) {
    const gl = t.glow[ti] * (1 / 255);
    const fog = dist < 3 ? 0 : dist > 19 ? 1 : (dist - 3) / 16;
    const keep = 1 - fog * (1 - gl * 0.7), add = fog * (1 - gl * 0.7);
    const o = p << 2;
    px[o] = t.base[ti] * (sr + (1.25 - sr) * gl) * keep + FOG_R * add;
    px[o + 1] = t.base[ti + 1] * (sg + (1.25 - sg) * gl) * keep + FOG_G * add;
    px[o + 2] = t.base[ti + 2] * (sb + (1.25 - sb) * gl) * keep + FOG_B * add;
  }

  let lastHorizon = H / 2;
  function render(w: World, tex: TexSet, spr: Record<string, Sprite>, cam: { x: number; y: number; angle: number }, things: Drawable[], eye: number, bob = 0) {
    const out = tex.out;
    const px0 = cam.x, py0 = cam.y;
    const EYE = eye;
    const horizon = H / 2 + bob; lastHorizon = horizon;
    const dx = Math.cos(cam.angle), dy = Math.sin(cam.angle), plx = -dy * planeLen, ply = dx * planeLen;
    const WW = w.W, FW = w.W * LIGHT_SUB, FH = w.H * LIGHT_SUB, fine = w.fine;
    depth.fill(1e9);
    for (let o = 0; o < px.length; o += 4) { px[o] = FOG_R; px[o + 1] = FOG_G; px[o + 2] = FOG_B; px[o + 3] = 255; }

    // floors, a row at a time
    for (let y = Math.max(0, Math.floor(horizon) + 1); y < H; y++) {
      const rowDist = (EYE * proj) / (y - horizon + 0.5);
      const k = 1 / (1 + rowDist * rowDist * 0.004);
      const lx = dx - plx, ly = dy - ply;
      let wx = px0 + rowDist * lx, wy = py0 + rowDist * ly;
      const sx = (rowDist * 2 * plx) / W, sy = (rowDist * 2 * ply) / W;
      for (let x = 0; x < W; x++, wx += sx, wy += sy) {
        const cx = Math.floor(wx), cy = Math.floor(wy);
        if (cx < 0 || cy < 0 || cx >= WW || cy >= w.H) continue;
        const name = w.floorTex[cy * WW + cx]; if (!name) continue;
        const t = out[name];
        const ti = ((Math.floor((wy - cy) * T) & T1) * T + (Math.floor((wx - cx) * T) & T1)) << 2;
        const fx = Math.min(FW - 1, Math.floor(wx * LIGHT_SUB)), fy = Math.min(FH - 1, Math.floor(wy * LIGHT_SUB)), fo = (fy * FW + fx) * 3;
        const p = y * W + x;
        shade(p, t, ti, fine[fo] * k, fine[fo + 1] * k, fine[fo + 2] * k, rowDist); depth[p] = rowDist;
      }
    }

    type Hit = { kind: number; d: number; i: number; u: number; side: number; f: number; from: number; zTop: number; zBot: number; exit: number; into: number; shift: number };
    // kinds: 0 wall, 1 low cover, 2 step, 3 grille, 4 half-open door panel
    const hits: Hit[] = [];
    for (let x = 0; x < W; x++) {
      const camX = (2 * x) / W - 1, rdx = dx + plx * camX, rdy = dy + ply * camX;
      let mx = Math.floor(px0), my = Math.floor(py0);
      const ddx = Math.abs(1 / rdx), ddy = Math.abs(1 / rdy);
      const stx = rdx < 0 ? -1 : 1, sty = rdy < 0 ? -1 : 1;
      let sdx = (rdx < 0 ? px0 - mx : mx + 1 - px0) * ddx, sdy = (rdy < 0 ? py0 - my : my + 1 - py0) * ddy;
      let cur = my * WW + mx, dPrev = 0.0001, side = 0;
      hits.length = 0;

      for (let steps = 0; steps < 72; steps++) {
        let d: number;
        if (sdx < sdy) { d = sdx; sdx += ddx; mx += stx; side = 0; } else { d = sdy; sdy += ddy; my += sty; side = 1; }
        // the ceiling of the square we are leaving, between where we entered and here
        const hC = w.ceilH[cur], cname = w.ceilTex[cur];
        if (cname && hC > EYE) {
          const ct = out[cname];
          const yA = Math.max(0, Math.ceil(horizon - ((hC - EYE) * proj) / dPrev));
          const yB = Math.min(H - 1, Math.floor(horizon - ((hC - EYE) * proj) / d), Math.floor(horizon));
          for (let y = yA; y <= yB; y++) {
            const dd = ((hC - EYE) * proj) / (horizon - y + 0.5); const p = y * W + x; if (dd >= depth[p]) continue;
            const wx = px0 + dd * rdx, wy = py0 + dd * rdy; const cx = Math.floor(wx), cy = Math.floor(wy);
            const ti = ((Math.floor((wy - cy) * T) & T1) * T + (Math.floor((wx - cx) * T) & T1)) << 2;
            const fx = Math.min(FW - 1, Math.max(0, Math.floor(wx * LIGHT_SUB))), fy = Math.min(FH - 1, Math.max(0, Math.floor(wy * LIGHT_SUB))), fo = (fy * FW + fx) * 3;
            const k = 0.85 / (1 + dd * dd * 0.004);
            shade(p, ct, ti, fine[fo] * k, fine[fo + 1] * k, fine[fo + 2] * k * 1.05, dd); depth[p] = dd;
          }
        }
        if (mx < 0 || my < 0 || mx >= WW || my >= w.H) break;
        const i = my * WW + mx, s = w.solid[i];
        const hx = px0 + d * rdx, hy = py0 + d * rdy;
        let u: number, f: number;
        if (side === 0) { f = rdx > 0 ? FACE.W : FACE.E; u = hy - Math.floor(hy); if (f === FACE.E) u = 1 - u; }
        else { f = rdy > 0 ? FACE.N : FACE.S; u = hx - Math.floor(hx); if (f === FACE.N) u = 1 - u; }
        const bx = w.block[i];
        if (bx) {
          const t = side === 1 ? (hx - bx.x0) / bx.w : (hy - bx.y0) / bx.h;
          u = f === FACE.S || f === FACE.W ? t : 1 - t;
        }
        const hFrom = w.ceilH[cur];
        const dr = w.door[i];
        const base = { kind: 0, d, i, u, side, f, from: cur, zTop: hFrom, zBot: 0, exit: 0, into: i, shift: 0 };
        if (dr && dr.open > 0.02 && dr.open < 0.98) {
          // a door part-way up: the panel hangs from the lintel, and you can see under it
          if (hFrom > 1) hits.push({ ...base, kind: 2, zTop: hFrom, zBot: 1 });
          hits.push({ ...base, kind: 4, zTop: 1, zBot: dr.open, shift: dr.open });
          cur = i; dPrev = d; continue;
        }
        const passable = s === 0 || s === 2 || (dr !== null && dr.open >= 0.98);
        if (passable) {
          const hTo = w.ceilH[i];
          if (hTo < hFrom) hits.push({ ...base, kind: 2, zTop: hFrom, zBot: hTo });
          if (w.grille[i] && !w.grille[cur]) hits.push({ ...base, kind: 3, zTop: Math.min(hFrom, hTo) });
          if (s === 2) hits.push({ ...base, kind: 1, zTop: COVER_H, exit: Math.min(sdx, sdy) });
          cur = i; dPrev = d; continue;
        }
        hits.push(base);
        break;
      }

      for (let h = hits.length - 1; h >= 0; h--) {
        const hit = hits[h], d = Math.max(0.05, hit.d);
        const fc = hit.from * 3;
        const k = (hit.side === 1 ? 0.78 : 1) / (1 + d * d * 0.004);
        const sr = w.light[fc] * k, sg = w.light[fc + 1] * k, sb = w.light[fc + 2] * k * (hit.side === 1 ? 1.05 : 1);
        const tu = Math.min(T1, Math.floor(hit.u * T));
        let name: string;
        if (hit.kind === 1) name = w.coverTex[hit.i] ?? "crate";
        else if (hit.kind === 2) name = w.door[hit.into] ? "lintel" : hit.zBot < 1 ? "ductFrame" : "trim";
        else if (hit.kind === 3) name = "grille";
        else if (hit.kind === 4) name = w.cellTex[hit.i] ?? "door";
        else name = w.cellTex[hit.i] || w.faces[hit.i][hit.f] || "panel";
        const tx = out[name] ?? out.panel;
        const areaName = w.area[hit.from];
        const upper = out[(areaName && w.def.AREAS[areaName]?.upper) || "upperHull"];
        const fullHeight = hit.kind === 0 && (name === "pillar" || name === "core" || name === "duct" || hit.zTop < 1);
        const trim = out[w.door[hit.i] ? "lintel" : name.startsWith("window") ? "trimDark" : "trim"];
        const zTop = hit.zTop, zBot = hit.zBot;
        const y0 = Math.max(0, Math.ceil(horizon - ((zTop - EYE) * proj) / d)), y1 = Math.min(H - 1, Math.floor(horizon - ((zBot - EYE) * proj) / d));
        for (let y = y0; y <= y1; y++) {
          const p = y * W + x; if (d >= depth[p]) continue;
          const z = EYE + ((horizon - y) * d) / proj;
          let t = tx, tv: number;
          if (hit.kind === 1) tv = Math.floor((1 - z / COVER_H) * T);
          else if (hit.kind === 2) tv = Math.floor(((zTop - z) / (zTop - zBot)) * T);
          else if (hit.kind === 4) tv = Math.floor((1 - (z - hit.shift)) * T);
          else if (fullHeight) tv = Math.floor((1 - z / zTop) * T);
          else if (z <= 1) tv = Math.floor((1 - z) * T);
          else if (z <= ROOM_H) { t = trim; tv = Math.floor(((ROOM_H - z) / (ROOM_H - 1)) * T); }
          else { t = upper; tv = Math.floor((1 - ((z - ROOM_H) % 1)) * T); }
          tv = tv < 0 ? 0 : tv > T1 ? T1 : tv;
          const ti = (tv * T + tu) << 2;
          if (hit.kind === 3 && t.base[ti + 3] < 128) continue;
          shade(p, t, ti, sr, sg, sb, d); depth[p] = d;
        }
        if (hit.kind === 1 && EYE > COVER_H) { // the top of the cover
          const top = out[(w.coverTex[hit.i] ?? "crate") + "Top"] ?? tx;
          const yFar = horizon + ((EYE - COVER_H) * proj) / hit.exit, yTop = horizon - ((COVER_H - EYE) * proj) / d;
          for (let y = Math.max(0, Math.ceil(yFar)); y < Math.min(H, Math.ceil(yTop)); y++) {
            const dd = ((EYE - COVER_H) * proj) / (y - horizon + 0.5); const p = y * W + x; if (dd >= depth[p]) continue;
            const wx = px0 + dd * rdx, wy = py0 + dd * rdy;
            const ti = ((Math.floor((wy - Math.floor(wy)) * T) & T1) * T + (Math.floor((wx - Math.floor(wx)) * T) & T1)) << 2;
            const k2 = 1.08 / (1 + dd * dd * 0.004);
            shade(p, top, ti, w.light[fc] * k2, w.light[fc + 1] * k2, w.light[fc + 2] * k2, dd); depth[p] = dd;
          }
        }
      }
    }
    centreDepth.value = depth[(H >> 1) * W + (W >> 1)]; // the crosshair sits at the middle of the screen, whatever the horizon is doing

    // sprites, far to near, clipped per pixel against depth
    const list = things.map((s) => ({ s, dist: (s.x - px0) ** 2 + (s.y - py0) ** 2 })).sort((a, b) => b.dist - a.dist);
    const inv = 1 / (plx * dy - dx * ply);
    for (const { s } of list) {
      const sp = spr[s.sprite]; if (!sp) continue;
      const rx = s.x - px0, ry = s.y - py0;
      const tX = inv * (dy * rx - dx * ry), tY = inv * (-ply * rx + plx * ry);
      if (tY <= 0.1) continue;
      const screenX = (W / 2) * (1 + tX / tY);
      const rows = sp.bottom + 1, hPix = (sp.height * proj) / tY, wPix = (hPix * sp.w) / rows;
      const yBottom = horizon + ((EYE - (s.z || 0)) * proj) / tY, yTopS = yBottom - hPix;
      const x0 = Math.max(0, Math.floor(screenX - wPix / 2)), x1 = Math.min(W - 1, Math.floor(screenX + wPix / 2));
      const cxi = Math.min(w.W - 1, Math.max(0, Math.floor(s.x))), cyi = Math.min(w.H - 1, Math.max(0, Math.floor(s.y)));
      const li = (cyi * WW + cxi) * 3, k = 1 / (1 + tY * tY * 0.004);
      const sr = w.light[li] * k, sg = w.light[li + 1] * k, sb = w.light[li + 2] * k;
      const minA = s.sprite === "bolt" ? 30 : 128;
      for (let x = x0; x <= x1; x++) {
        const u = Math.floor(((x - (screenX - wPix / 2)) / wPix) * sp.w); if (u < 0 || u >= sp.w) continue;
        for (let y = Math.max(0, Math.floor(yTopS)); y < Math.min(H, Math.ceil(yBottom)); y++) {
          const p = y * W + x; if (depth[p] < tY) continue;
          const v = Math.floor(((y - yTopS) / hPix) * rows); if (v < 0 || v >= sp.h) continue;
          const ti = (v * sp.w + u) << 2; if (sp.base[ti + 3] < minA) continue;
          shade(p, sp, ti, sr, sg, sb, tY); depth[p] = tY;
        }
      }
    }
    return img;
  }

  /** Where on screen, and how far, a point in the world would be drawn: for aiming. */
  function project(cam: { x: number; y: number; angle: number }, x: number, y: number) {
    const dx = Math.cos(cam.angle), dy = Math.sin(cam.angle), plx = -dy * planeLen, ply = dx * planeLen;
    const inv = 1 / (plx * dy - dx * ply), rx = x - cam.x, ry = y - cam.y;
    const tX = inv * (dy * rx - dx * ry), tY = inv * (-ply * rx + plx * ry);
    return { screenX: (W / 2) * (1 + tX / tY), dist: tY };
  }

  return { render, project, centreDepth, horizon: () => lastHorizon, W, H, proj };
}
