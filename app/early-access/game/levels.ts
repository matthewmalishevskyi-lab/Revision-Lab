// The three levels, as designed with Matthew (see PROJECT_NOTES.md and the
// project notes "game-level1"). Each is a plain description; world.ts builds it.

import { FACE, type LevelDef } from "./world";

// Level 1: "Boarding" — you come aboard the alien battleship through an
// airlock and fight your way to the lift on the bridge.
//
// Built the way Doom's first level is: a small safe start, a weapon before
// the first fight, a big room, a loop so there are two ways round, a secret,
// and a clear finish. Corridors are short and wide, so it never becomes a
// maze; blue arrows on the walls point the way on.

export const LEVEL1: LevelDef = (() => {
  const W = 46, H = 33;
  // Each area: [x0, y0, x1, y1] inclusive, plus how it is dressed.
  const AREAS: NonNullable<LevelDef["AREAS"]> = {
    start:   { r: [3, 26, 9, 31],   name: "1 Airlock",          light: [0.8, 0.86, 0.98], wall: "panel",   floor: "fTile",    ceil: "light" },
    corA:    { r: [5, 12, 6, 25],   name: "",                   light: [0.55, 0.62, 0.78], wall: "corridor", floor: "fGrate",  ceil: "corridor" },
    armoury: { r: [8, 18, 13, 22],  name: "2 Armoury",          light: [0.85, 0.9, 1.0],   wall: "panel",   floor: "fTile",    ceil: "light" },
    corB:    { r: [7, 12, 14, 13],  name: "",                   light: [0.55, 0.62, 0.78], wall: "corridor", floor: "fGrate",  ceil: "corridor" },
    hub:     { r: [15, 8, 28, 19],  name: "3 Cargo bay",        light: [1.0, 1.0, 1.05],   wall: "hub",     floor: "fTile",    ceil: "grid" },
    secret:  { r: [13, 4, 16, 6],   name: "Secret",             light: [0.45, 0.5, 0.7],   wall: "pipes",   floor: "fGrate",   ceil: "dark" },
    corC:    { r: [21, 3, 22, 7],   name: "",                   light: [0.6, 0.68, 0.85],  wall: "corridor", floor: "fGrate",  ceil: "corridor" },
    obs:     { r: [23, 3, 36, 4],   name: "4 Observation deck", light: [0.62, 0.72, 0.95], wall: "obs",     floor: "fGrate",   ceil: "stars" },
    corE:    { r: [35, 5, 36, 7],   name: "",                   light: [0.6, 0.68, 0.85],  wall: "corridor", floor: "fGrate",  ceil: "corridor" },
    maint:   { r: [29, 17, 32, 18], name: "Maintenance",        light: [0.32, 0.38, 0.55], wall: "pipes",   floor: "fGrate",   ceil: "dark" },
    reactor: { r: [33, 8, 42, 19],  name: "5 Reactor",          light: [0.7, 0.85, 1.1],   wall: "reactor", floor: "fReactor", ceil: "reactor" },
    corF:    { r: [38, 20, 39, 21], name: "",                   light: [0.6, 0.68, 0.85],  wall: "corridor", floor: "fGrate",  ceil: "corridor" },
    bridge:  { r: [34, 22, 43, 28], name: "6 Bridge",           light: [0.95, 1.0, 1.1],   wall: "bridge",  floor: "fBridge",  ceil: "light" },
    // Hidden, and guarded: three aliens sitting on a pile of med-kits. Nothing
    // in the level needs it, which is the point of a stash.
    store:   { r: [18, 22, 24, 26], name: "Medical store",     light: [0.5, 0.56, 0.78],  wall: "pipes",   floor: "fTile",    ceil: "dark" },
  };

  // Doors between areas. Doom doors rise into the ceiling; ours slide up too.
  const DOORS: NonNullable<LevelDef["DOORS"]> = [
    { cells: [[5, 25], [6, 25]], tex: "door" },          // airlock inner door
    { cells: [[7, 20], [7, 21]], tex: "door" },          // into the armoury
    // into the cargo bay: stays shut until you have the blaster, so nobody walks
    // into the first fight unarmed because they missed the armoury door
    { cells: [[14, 12], [14, 13]], tex: "door", needs: "pistol" },
    { cells: [[21, 7], [22, 7]], tex: "door" },          // up to the observation deck
    { cells: [[35, 7], [36, 7]], tex: "door" },          // down into the reactor
    { cells: [[29, 17], [29, 18]], tex: "door" },        // maintenance shortcut
    { cells: [[38, 21], [39, 21]], tex: "door" },        // onto the bridge
    { cells: [[15, 7]], tex: "secret", secret: true },   // looks like wall
    { cells: [[20, 20], [20, 21]], tex: "secret", secret: true }, // down to the medical store
    { cells: [[44, 24], [44, 25]], tex: "exit", exit: true },
  ];

  const PILLARS: [number, number][] = [[18, 10], [25, 10], [18, 17], [25, 17]];
  const CORE: [number, number][] = [[37, 13], [38, 13], [37, 14], [38, 14]];
  const BLOCKS: NonNullable<LevelDef["BLOCKS"]> = [...PILLARS.map((c) => ({ cells: [c] as [number, number][], tex: "pillar" })), { cells: CORE, tex: "core" }];
  const FLOORS: NonNullable<LevelDef["FLOORS"]> = [[6, 28, 6, 28, "fAirlock"], [15, 8, 28, 8, "fHazard"], [15, 19, 28, 19, "fHazard"]];
  const WALL_OVERRIDE = (ai: string, f: number, x: number, y: number): string | undefined => {
    if (ai === "start" && f === FACE.E && x === 2) return "window";
    if (ai === "armoury" && f === FACE.W && x === 14) return "rack";
    if (ai === "start" && f === FACE.W && x === 10 && y >= 27 && y <= 30) return "locker";
    if (ai === "bridge" && f === FACE.N && y === 29) return x >= 36 && x <= 41 ? "window" : "computer";
    if (ai === "reactor" && (x === 32 || x === 43) && y % 3 === 0) return "pillar";
  };
  const DECALS: NonNullable<LevelDef["DECALS"]> = [
    [2, 26, FACE.E, "camera"], [5, 32, FACE.N, "sign"], [7, 16, FACE.W, "arrowR", true], [4, 19, FACE.E, "arrowR"],
    [4, 14, FACE.E, "arrowR"], [8, 14, FACE.N, "arrowR", true], [11, 11, FACE.S, "arrowR"], [13, 11, FACE.S, "camera"],
    [9, 17, FACE.S, "screen"], [4, 23, FACE.E, "cables"],
    [15, 20, FACE.N, "camera"], [28, 7, FACE.S, "camera"], [20, 7, FACE.S, "sign"], [29, 13, FACE.W, "screen"], [23, 7, FACE.S, "arrowR", true],
    [20, 5, FACE.E, "arrowR"], [26, 5, FACE.N, "arrowR", true], [33, 5, FACE.N, "arrowR", true], [24, 5, FACE.N, "cables"],
    [34, 6, FACE.E, "arrowR", true], [37, 6, FACE.W, "sign"],
    [32, 10, FACE.E, "camera"], [43, 12, FACE.W, "sign"], [43, 17, FACE.W, "screen"], [37, 20, FACE.E, "arrowR", true],
    [33, 23, FACE.E, "camera"], [44, 23, FACE.W, "arrowR"], [44, 26, FACE.W, "arrowR", true],
    [30, 16, FACE.S, "sign"], [31, 19, FACE.N, "cables"],
    [19, 20, FACE.S, "screen"], [21, 20, FACE.S, "cables"], // a hint that something is behind this wall
    [17, 24, FACE.E, "sign"], [25, 24, FACE.W, "camera"],
  ];
  // Low cover: waist-high, you can shoot over it and crouch behind it.
  const COVER: NonNullable<LevelDef["COVER"]> = [
    ...[[21, 12], [22, 12], [22, 13], [16, 15], [16, 16], [27, 13], [27, 14], [21, 17], [22, 17]].map((c): [number, number, string] => [c[0], c[1], "crate"]),
    ...[[27, 4], [30, 4]].map((c): [number, number, string] => [c[0], c[1], "crate"]),
    ...[[34, 10], [40, 11], [35, 16], [40, 16]].map((c): [number, number, string] => [c[0], c[1], "console"]),
    ...[[36, 27], [37, 27], [40, 27], [41, 27]].map((c): [number, number, string] => [c[0], c[1], "console"]),
    [11, 22, "crate"],
    [19, 24, "crate"], [23, 24, "crate"],
  ];

  const SPRITES: NonNullable<LevelDef["SPRITES"]> = [
    { t: "lamp", x: 3.6, y: 26.6 }, { t: "lamp", x: 9.4, y: 26.6 }, { t: "canister", x: 8.6, y: 31.2 }, { t: "canister", x: 3.5, y: 31.3 },
    { t: "pistol", x: 10.5, y: 20.5 }, { t: "ammo", x: 12.6, y: 19.2 }, { t: "canister", x: 12.8, y: 22.3 },
    { t: "alien", x: 20.5, y: 15.3 }, { t: "alien", x: 24.4, y: 12.6 }, { t: "alien", x: 26.2, y: 18.4 },
    { t: "canister", x: 15.6, y: 8.6 }, { t: "canister", x: 16.4, y: 8.7 }, { t: "canister", x: 28.3, y: 18.4 }, { t: "lamp", x: 15.4, y: 19.4 }, { t: "lamp", x: 28.5, y: 8.5 },
    { t: "ammo", x: 19.5, y: 13.5 },
    { t: "health", x: 14.3, y: 5.3 }, { t: "ammo", x: 15.6, y: 5.4 }, { t: "canister", x: 13.4, y: 4.4 },
    { t: "alien", x: 33.5, y: 3.6 }, { t: "ammo", x: 28.5, y: 4.4 }, { t: "lamp", x: 23.4, y: 4.6 },
    { t: "alien", x: 31.6, y: 17.6 }, { t: "canister", x: 30.3, y: 18.6 }, { t: "canister", x: 32.6, y: 18.6 },
    { t: "alien", x: 34.3, y: 13.5 }, { t: "alien", x: 41.4, y: 10.2 }, { t: "alien", x: 40.8, y: 18.5 }, { t: "health", x: 33.4, y: 18.5 },
    { t: "lamp", x: 33.5, y: 8.5 }, { t: "lamp", x: 42.5, y: 8.5 }, { t: "lamp", x: 33.5, y: 19.5 }, { t: "lamp", x: 42.5, y: 19.5 },
    { t: "alien", x: 35.2, y: 23.4 }, { t: "alien", x: 42.4, y: 26.2 }, { t: "holo", x: 38.5, y: 24.8 }, { t: "health", x: 43.4, y: 22.6 },
    { t: "lamp", x: 34.4, y: 28.6 }, { t: "lamp", x: 43.6, y: 28.6 },
    // the medical store: three guards, and what they are guarding
    { t: "alien", x: 19.5, y: 23.5, face: 1.57 }, { t: "alien", x: 22.6, y: 23.4, face: 1.57 }, { t: "alien", x: 21.2, y: 25.6, face: -1.57 },
    { t: "health", x: 18.6, y: 25.5 }, { t: "health", x: 23.5, y: 25.5 }, { t: "health", x: 21.5, y: 22.6 },
    { t: "ammo", x: 19.4, y: 22.5 }, { t: "lamp", x: 24.4, y: 22.6 }, { t: "canister", x: 18.5, y: 22.5 },
  ];

  // Extra light that spills from bright things, on top of each area's own.
  const LIGHTS: NonNullable<LevelDef["LIGHTS"]> = [
    { x: 37.9, y: 13.9, rgb: [0.25, 0.75, 1.1], r: 5.5 },   // reactor core
    { x: 38.5, y: 24.8, rgb: [0.15, 0.35, 0.6], r: 3.5 },   // holo-table
    { x: 3.5, y: 28.5, rgb: [0.1, 0.2, 0.45], r: 3 },       // airlock window
    { x: 21, y: 24, rgb: [0.1, 0.16, 0.3], r: 4 },          // medical store
  ];

  const START = { x: 6.0, y: 30.2, angle: -Math.PI / 2 };
  const ROUTE = [[6, 30], [6, 20.5], [10.5, 20.5], [6, 20.5], [6, 12.5], [15.5, 12.5], [21.5, 10], [21.5, 3.6], [35.5, 3.6], [35.5, 9], [37, 17.5], [38.5, 21], [38.5, 24], [43.5, 24.5]];
  const ALT_ROUTE = [[27, 17.5], [33, 17.5], [36, 17.5]];

  // What your mascot says on the comms screen, and where the compass points.
  const INTRO = "We're aboard! First, grab the blaster from the armoury, just up this corridor.";
  const HINTS = {
    armoury: "The blaster should be on the floor in here.",
    hub: "Three aliens in the cargo bay. The crates are cover: their shots can't get through, but yours go over the top.",
    secret: "A secret room! Nice find.",
    store: "Med-kits — that's why they were guarding it.",
    obs: "Keep going along the deck. The way down to the reactor is at the far end.",
    maint: "A shortcut into the reactor room.",
    reactor: "The reactor! The door to the bridge is on the far side, past the core.",
    bridge: "The bridge. The lift out is on the east wall, to your left as you come in: walk up to it and press E.",
  };
  const OBJECTIVES: NonNullable<LevelDef["OBJECTIVES"]> = [
    { text: "Get the blaster", at: [10.5, 20.5], until: "pistol" },
    { text: "Reach the lift on the bridge", at: [43.5, 24.5] },
  ];
  return { TITLE: "Level 1 — Boarding", W, H, AREAS, DOORS, BLOCKS, FLOORS, WALL_OVERRIDE, DECALS, CORE, COVER, SPRITES, LIGHTS, START, ROUTE, ALT_ROUTE, INTRO, HINTS, OBJECTIVES };
})();

// Level 2: "Meltdown" — the lift from level 1 drops you at the ship's nuclear
// reactor. The only way on is THROUGH the reactor hall: across catwalks over
// glowing coolant, round the core, and out the far side. The coolant hurts to
// stand in; a radiation suit (hidden off the control room) lets you wade
// through it as a shortcut, the way Doom's rad suit works. The exit is locked
// until you find the blue keycard in the pump room.

export const LEVEL2: LevelDef = (() => {
  const W = 46, H = 31;
  const AREAS: NonNullable<LevelDef["AREAS"]> = {
    lift:    { r: [3, 13, 7, 17],   name: "1 Lift",            light: [0.8, 0.86, 0.98], wall: "panel",    floor: "fTile",   ceil: "light" },
    check:   { r: [9, 12, 16, 19],  name: "2 Checkpoint",      light: [0.85, 0.9, 1.0],  wall: "corridor", floor: "fTile",   ceil: "grid" },
    corN:    { r: [12, 8, 13, 10],  name: "",                  light: [0.55, 0.62, 0.78], wall: "corridor", floor: "fGrate", ceil: "corridor" },
    control: { r: [10, 3, 19, 7],   name: "3 Control room",    light: [0.8, 0.9, 1.05],  wall: "control",  floor: "fBridge", ceil: "light" },
    decon:   { r: [4, 3, 8, 7],     name: "Decontamination",   light: [0.75, 0.8, 0.6],  wall: "panel",    floor: "fTile",   ceil: "light" },
    hall:    { r: [21, 2, 37, 18],  name: "4 Reactor hall",    light: [0.5, 0.66, 1.0],  wall: "hall",     floor: "fGrate",  ceil: "hall", ceilH: 2.6 },
    pump:    { r: [39, 3, 44, 9],   name: "5 Pump room",       light: [0.5, 0.56, 0.78], wall: "pipes",    floor: "fGrate",  ceil: "dark" },
    exitCor: { r: [36, 20, 37, 23], name: "",                  light: [0.55, 0.62, 0.78], wall: "corridor", floor: "fGrate", ceil: "corridor" },
    exit:    { r: [33, 24, 41, 28], name: "6 Lift to deck 3",  light: [0.9, 0.95, 1.05], wall: "panel",    floor: "fTile",   ceil: "light" },
    // hidden supply locker, reached through a false wall on the exit corridor
    storeCor:{ r: [32, 22, 34, 22], name: "",                  light: [0.45, 0.5, 0.7],  wall: "pipes",    floor: "fGrate",  ceil: "dark" },
    store:   { r: [26, 20, 31, 26], name: "Supply locker",     light: [0.5, 0.56, 0.78], wall: "pipes",    floor: "fTile",   ceil: "dark" },
  };
  const DOORS: NonNullable<LevelDef["DOORS"]> = [
    { cells: [[8, 15], [8, 16]], tex: "door" },
    { cells: [[12, 11], [13, 11]], tex: "door" },
    { cells: [[9, 4], [9, 5]], tex: "door" },
    { cells: [[20, 4], [20, 5]], tex: "door" },
    { cells: [[38, 5], [38, 6]], tex: "door" },
    { cells: [[36, 19], [37, 19]], tex: "keyDoor", key: "blue" },
    { cells: [[42, 25], [42, 26]], tex: "exit", exit: true },
    { cells: [[35, 22]], tex: "secret", secret: true }, // into the supply locker
  ];
  const CORE: [number, number][] = [];
  for (let y = 8; y <= 11; y++) for (let x = 27; x <= 30; x++) CORE.push([x, y]);
  const BLOCKS: NonNullable<LevelDef["BLOCKS"]> = [{ cells: CORE, tex: "core" }];
  // Coolant fills the middle of the hall from wall to wall; catwalks cross it.
  const FLOORS: NonNullable<LevelDef["FLOORS"]> = [
    [23, 2, 35, 18, "fRad"],
    [26, 7, 31, 12, "fCatwalk"],
    [23, 9, 25, 10, "fCatwalk"], [32, 9, 35, 10, "fCatwalk"],
    [5, 5, 5, 5, "fAirlock"],
  ];
  const COVER: NonNullable<LevelDef["COVER"]> = [
    [11, 14, "console"], [11, 13, "console"], [14, 17, "console"], [15, 17, "console"],
    [21, 13, "crate"], [37, 14, "crate"], [22, 16, "crate"],
    [41, 7, "crate"], [42, 7, "crate"],
    [35, 26, "crate"], [39, 26, "crate"],
    [27, 24, "crate"], [30, 24, "crate"],
    [14, 4, "console"], [15, 4, "console"],
  ];
  const WALL_OVERRIDE = (ai: string, f: number, x: number, y: number): string | undefined => {
    if (ai === "control" && f === FACE.W && x === 20) return "reactorWin";
    if (ai === "lift" && f === FACE.E && x === 2 && y === 15) return "exit";
    if (ai === "decon" && f === FACE.S && y === 2) return "locker";
    if (ai === "hall" && (y === 1 || y === 19) && x >= 23 && x <= 35) return x % 3 === 0 ? "tank" : "hazardPanel";
  };
  const DECALS: NonNullable<LevelDef["DECALS"]> = [
    [8, 13, FACE.E, "camera"], [11, 9, FACE.E, "arrowR"], [17, 12, FACE.W, "sign"], [14, 20, FACE.N, "screen"],
    [14, 2, FACE.S, "screen"], [10, 8, FACE.N, "camera"], [20, 7, FACE.E, "rad"], [20, 8, FACE.E, "arrowR", true],
    [20, 12, FACE.E, "arrowR", true], [38, 3, FACE.W, "rad"], [38, 12, FACE.W, "arrowR"], [38, 18, FACE.W, "keycard"],
    [38, 8, FACE.E, "rad"], [45, 4, FACE.W, "camera"], [35, 21, FACE.E, "arrowR", true], [42, 27, FACE.W, "sign"],
    [36, 23, FACE.W, "screen"], [25, 23, FACE.E, "sign"], [32, 21, FACE.S, "cables"],
  ];
  const SPRITES: NonNullable<LevelDef["SPRITES"]> = [
    { t: "lamp", x: 3.6, y: 13.6 }, { t: "lamp", x: 7.4, y: 13.6 },
    { t: "alien", x: 14.5, y: 15.4 }, { t: "alien", x: 10.4, y: 18.4 }, { t: "canister", x: 16.4, y: 12.6 }, { t: "canister", x: 9.4, y: 12.5 },
    { t: "alien", x: 17.6, y: 3.8 }, { t: "ammo", x: 18.5, y: 6.6 },
    { t: "radsuit", x: 5.6, y: 3.8 }, { t: "health", x: 7.5, y: 6.6 }, { t: "canister", x: 4.4, y: 6.6 },
    { t: "lamp", x: 21.5, y: 2.5 }, { t: "lamp", x: 21.5, y: 18.5 }, { t: "lamp", x: 37.5, y: 2.5 }, { t: "lamp", x: 37.5, y: 18.5 },
    { t: "alien", x: 28.5, y: 7.4 }, { t: "alien", x: 31.5, y: 12.4 }, { t: "alien", x: 36.6, y: 8.2 }, { t: "ammo", x: 26.5, y: 12.5 },
    { t: "keycard", x: 43.5, y: 4.4 }, { t: "alien", x: 41.5, y: 5.4 }, { t: "alien", x: 43.3, y: 8.4 }, { t: "canister", x: 39.4, y: 8.6 }, { t: "canister", x: 39.4, y: 3.4 },
    { t: "alien", x: 38.6, y: 27.3 }, { t: "health", x: 33.6, y: 27.6 }, { t: "lamp", x: 33.4, y: 24.4 }, { t: "lamp", x: 41.6, y: 24.4 },
    // the supply locker: four guards round the med-kits
    { t: "alien", x: 30.4, y: 22.5, face: 0 }, { t: "alien", x: 27.5, y: 21.4, face: 1.57 },
    { t: "alien", x: 29.5, y: 25.5, face: -1.57 }, { t: "alien", x: 26.6, y: 24.5, face: 0 },
    { t: "health", x: 26.6, y: 20.6 }, { t: "health", x: 31.4, y: 20.6 }, { t: "health", x: 28.5, y: 25.6 },
    { t: "ammo", x: 31.4, y: 25.5 }, { t: "lamp", x: 26.5, y: 26.5 }, { t: "canister", x: 31.4, y: 26.4 },
  ];
  const LIGHTS: NonNullable<LevelDef["LIGHTS"]> = [
    { x: 29, y: 10, rgb: [0.3, 0.75, 1.3], r: 8 },
    { x: 20.5, y: 5, rgb: [0.15, 0.3, 0.6], r: 3 },
    { x: 29, y: 23.5, rgb: [0.1, 0.16, 0.3], r: 4 },        // supply locker
  ];
  const START = { x: 5.5, y: 15.5, angle: 0 };
  const ROUTE = [[5.5, 15.5], [12.5, 15.5], [12.5, 8], [15, 6.5], [21.5, 5], [21.8, 9.5], [26.5, 9.5], [26.5, 12.5], [31.5, 12.5], [31.5, 9.5], [36.5, 9.5], [36.5, 5.5], [41.5, 5.5], [43.5, 4.5], [41.5, 5.5], [36.8, 6], [36.8, 24.5], [41.5, 25.5]];
  const ALT_ROUTE = [[12.5, 5], [6, 5], [12.5, 5.2], [21.5, 5.2], [24, 5.5], [34.5, 5.5]];
  const LABELS = { lift: [5.5, 12.4], check: [12.8, 11.6], control: [14.5, 2.4], decon: [6, 2.4], hall: [29, 1.4], pump: [41.8, 2.4], exit: [37, 29.2] };
  const LEGEND = [["radsuit", "Radiation suit (wade through coolant)"], ["keycard", "Blue keycard (opens the locked door)"]];
  const INTRO = "This deck is the reactor. We have to go straight through it to reach the next lift.";
  const HINTS = {
    check: "A security checkpoint. Use the consoles as cover.",
    control: "The control room. Look through the window: that's the reactor hall. There's a room off to the left, too.",
    decon: "Decontamination. A radiation suit would let us walk through the coolant.",
    hall: "Don't step in the glowing coolant: it burns. Stay on the catwalks and go round the core.",
    pump: "The pump room. The blue keycard should be in here somewhere.",
    store: "A supply locker! Grab the med-kits.",
    exit: "Nearly there. Walk up to the lift and press E.",
  };
  const OBJECTIVES: NonNullable<LevelDef["OBJECTIVES"]> = [
    { text: "Find the blue keycard", at: [43.5, 4.4], until: "keycard" },
    { text: "Take the lift to deck 3", at: [41.5, 25.5] },
  ];
  const LOCKED_HINT = "Locked! It needs the blue keycard. Try the pump room, through the door on the east walkway.";
  return { INTRO, HINTS, OBJECTIVES, LOCKED_HINT, TITLE: "Level 2 — Meltdown", W, H, AREAS, DOORS, BLOCKS, FLOORS, COVER, WALL_OVERRIDE, DECALS, SPRITES, LIGHTS, START, ROUTE, ALT_ROUTE, LABELS, LEGEND, CORE };
})();

// Level 3: "Crew deck" — the aliens live here. The mess hall is packed: six
// of them, and walking in means a hard fight. The smart way is the VENTS.
// From the storage room you crawl into the ducts, watch the aliens through
// the grilles, and come out at a vent opening right behind one. Drop on it,
// then answer three quick, easy questions on your topic to finish it off.
//
// The vents are low (0.7 tall), so you crawl, and they are one square wide.
// They never branch more than once, so you can't get lost in them.

export const LEVEL3: LevelDef = (() => {
  const W = 44, H = 30, DUCT_H = 0.7;
  const duct: Omit<LevelDef["AREAS"][string], "r"> = { name: "", light: [0.62, 0.68, 0.85], wall: "duct", floor: "fDuct", ceil: "duct", ceilH: DUCT_H };
  const AREAS: NonNullable<LevelDef["AREAS"]> = {
    lift:    { r: [3, 20, 7, 24],   name: "1 Lift",        light: [0.8, 0.86, 0.98], wall: "panel",    floor: "fTile",  ceil: "light" },
    storage: { r: [9, 18, 15, 25],  name: "2 Storage",     light: [0.7, 0.75, 0.9],  wall: "hub",      floor: "fTile",  ceil: "grid" },
    corM:    { r: [16, 20, 18, 21], name: "",              light: [0.55, 0.62, 0.78], wall: "corridor", floor: "fGrate", ceil: "corridor" },
    mess:    { r: [20, 10, 29, 22], name: "3 Mess hall",   light: [0.9, 0.95, 1.0],  wall: "mess",     floor: "fMess",  ceil: "grid" },
    barracks:{ r: [19, 2, 27, 6],   name: "4 Barracks",    light: [0.55, 0.6, 0.85], wall: "bunks",    floor: "fTile",  ceil: "light" },
    corE:    { r: [31, 21, 32, 22], name: "",              light: [0.55, 0.62, 0.78], wall: "corridor", floor: "fGrate", ceil: "corridor" },
    // hidden sick bay behind the storage room's west wall
    store:   { r: [3, 14, 8, 18],   name: "Sick bay",      light: [0.5, 0.56, 0.75], wall: "pipes",    floor: "fTile",  ceil: "dark" },
    exit:    { r: [33, 12, 40, 24], name: "5 Hangar door", light: [0.85, 0.92, 1.05], wall: "panel",    floor: "fTile",  ceil: "grid" },
    // the vents
    d1: { ...duct, r: [12, 8, 12, 17] },
    d2: { ...duct, r: [13, 8, 31, 8] },
    d3: { ...duct, r: [31, 9, 31, 19] },
    d4: { ...duct, r: [22, 7, 22, 7] },     // opening into the barracks
    d5: { ...duct, r: [32, 14, 32, 14] },   // opening into the hangar-door room
  };
  const DOORS: NonNullable<LevelDef["DOORS"]> = [
    { cells: [[8, 21], [8, 22]], tex: "door" },
    { cells: [[19, 20], [19, 21]], tex: "door" },
    { cells: [[30, 21], [30, 22]], tex: "door" },
    { cells: [[41, 17], [41, 18]], tex: "exit", exit: true },
    { cells: [[8, 19]], tex: "secret", secret: true }, // into the sick bay
  ];
  // see-through grilles between the vents and the rooms
  const GRILLES: NonNullable<LevelDef["GRILLES"]> = [[22, 9], [26, 9], [30, 13], [30, 17], [32, 18]];
  const COVER: NonNullable<LevelDef["COVER"]> = [
    ...[[22, 13], [23, 13], [22, 18], [23, 18], [26, 13], [27, 13], [26, 18], [27, 18]].map((c): [number, number, string] => [c[0], c[1], "table"]),
    [10, 19, "crate"], [11, 19, "crate"], [14, 23, "crate"], [14, 24, "crate"], [10, 24, "crate"],
    [35, 16, "crate"], [38, 20, "crate"], [36, 22, "console"],
    [4, 16, "crate"], [7, 16, "crate"],
  ];
  const WALL_OVERRIDE = (ai: string, f: number, x: number, y: number): string | undefined => {
    if (ai === "lift" && f === FACE.E && x === 2 && y === 22) return "exit";
    if (ai === "exit" && f === FACE.E && x === 32 && y >= 12 && y <= 13) return "cargo";
  };
  const FLOORS: NonNullable<LevelDef["FLOORS"]> = [[12, 17, 12, 17, "fDuct"]];
  const DECALS: NonNullable<LevelDef["DECALS"]> = [
    [11, 17, FACE.S, "arrowR"], [13, 17, FACE.S, "sign"], [8, 18, FACE.E, "camera"],
    [21, 9, FACE.S, "screen"], [30, 11, FACE.W, "camera"], [24, 23, FACE.N, "sign"],
    [18, 22, FACE.N, "arrowR", true], [34, 11, FACE.S, "camera"], [41, 20, FACE.W, "arrowR", true],
    [9, 18, FACE.W, "screen"], [9, 20, FACE.W, "cables"],
  ];
  // Aliens carry a facing angle so the map can show what each one watches.
  const SPRITES: NonNullable<LevelDef["SPRITES"]> = [
    { t: "lamp", x: 3.6, y: 20.6 }, { t: "lamp", x: 7.4, y: 20.6 },
    { t: "canister", x: 9.5, y: 25.3 }, { t: "canister", x: 15.4, y: 18.5 }, { t: "ammo", x: 12.5, y: 21.5 },
    { t: "alien", x: 23.5, y: 11.4, face: 1.6 }, { t: "alien", x: 24.6, y: 15.6, face: 3.1 }, { t: "alien", x: 21.2, y: 20.2, face: 0.2 },
    { t: "alien", x: 28.5, y: 19.8, face: 2.6 }, { t: "alienBack", x: 28.6, y: 11.3, face: -1.6 }, { t: "alien", x: 25, y: 21.4, face: -1.6 },
    { t: "lamp", x: 20.5, y: 10.5 }, { t: "lamp", x: 29.5, y: 10.5 },
    { t: "alienBack", x: 22.5, y: 5.8, face: -1.57, stomp: true }, { t: "alienBack", x: 25.8, y: 3.2, face: 0 }, // facing the wall, so a quiet player can stomp this one too
    { t: "vest", x: 19.6, y: 2.6 }, { t: "ammo", x: 27.3, y: 5.5 },
    { t: "alienBack", x: 33.7, y: 14.5, face: 0, stomp: true }, { t: "alien", x: 38.5, y: 21.8, face: -2.2 },
    { t: "health", x: 39.5, y: 12.6 }, { t: "lamp", x: 33.4, y: 24.4 }, { t: "lamp", x: 40.6, y: 12.4 }, { t: "canister", x: 40.5, y: 24.3 },
    // the sick bay: three guards and the med-kits they are sitting on
    { t: "alien", x: 4.5, y: 15.5, face: 0.8 }, { t: "alien", x: 7.4, y: 14.6, face: 1.57 }, { t: "alien", x: 5.5, y: 17.5, face: 0 },
    { t: "health", x: 3.6, y: 14.6 }, { t: "health", x: 7.4, y: 17.5 }, { t: "health", x: 3.6, y: 17.5 },
    { t: "ammo", x: 6.5, y: 14.5 }, { t: "lamp", x: 8.4, y: 14.6 },
  ];
  const LIGHTS: NonNullable<LevelDef["LIGHTS"]> = [
    { x: 24.5, y: 16, rgb: [0.15, 0.18, 0.2], r: 5 },
    { x: 5.5, y: 16, rgb: [0.1, 0.16, 0.3], r: 4 }, // sick bay
  ];
  const START = { x: 5.5, y: 22, angle: 0 };
  // ⚠️ [12.5, 20.5] and [35.5, 14.5] are here to steer the route AROUND two
  // crates it used to be drawn straight through. A route leg through cover
  // is not harmless: the wall arrows point along it, the par time (30 of the
  // 100 marks on a deck) is its length, and the play-test bots follow it — so
  // the signposted way through needed a jump and par was measured along a
  // path nobody walks. There is a permanent check for it now.
  const ROUTE = [[5.5, 22], [11, 22], [12.5, 20.5], [12.5, 18.5], [12.5, 8.5], [22.5, 8.5], [22.5, 7], [22.5, 8.5], [31.5, 8.5], [31.5, 14.5], [33.5, 14.5], [35.5, 14.5], [36.5, 17.5], [40.5, 17.5]];
  // the mess tables stand in two rows with a gap at x = 24-25; this threads
  // it rather than walking over the furniture
  const ALT_ROUTE = [[11, 21], [16, 20.8], [19.5, 20.6], [24.5, 19], [25, 16], [25.5, 19], [29.5, 21.5], [33.5, 21.5], [36.5, 18]];
  const LABELS = { lift: [5.5, 19.4], storage: [12, 26.4], mess: [24.5, 23.5], barracks: [23, 1.4], exit: [36.8, 11.3] };
  const LEGEND = [["alienBack", "Alien with its back to you"], ["vest", "Vest (armour)"]];
  const INTRO = "This is where the aliens live. The mess hall is full of them. Maybe there's a sneakier way through.";
  const HINTS = {
    storage: "See the vent in the north wall? We could crawl through it. They can't see us in the vents. That west wall sounds hollow, too…",
    store: "A sick bay. Three of them, and three med-kits.",
    d1: "Crawl quietly. Look through the grilles to see where they are.",
    d4: "One's right below, with its back to us! Get close and press SPACE to jump on it.",
    barracks: "There's a vest in here. Another one has its back turned: sneak up behind it.",
    d5: "The hangar! There's one right below. Jump on it, then run for the lift.",
    mess: "That's a lot of aliens. Use the tables as cover!",
    exit: "The lift is on the far wall. Walk up to it and press E.",
  };
  const OBJECTIVES: NonNullable<LevelDef["OBJECTIVES"]> = [{ text: "Reach the lift by the hangar door", at: [40.5, 17.5] }];
  return { INTRO, HINTS, OBJECTIVES, TITLE: "Level 3 — Crew deck", W, H, DUCT_H, AREAS, DOORS, GRILLES, COVER, WALL_OVERRIDE, FLOORS, DECALS, SPRITES, LIGHTS, START, ROUTE, ALT_ROUTE, LABELS, LEGEND };
})();

// Level 4: "Cargo hold" — Matthew's ask: "a storage level where you also have
// to be sneaky", plus grenades. Two things make it a stealth level rather than
// a shooting level with the lights off:
//
//   1. TALL SHELVING, not crates. Waist-high cover stops a bolt but you can see
//      straight over it, so a room full of crates hides nobody. The stacks are
//      full-height blocks, so the only sight lines are along the aisles — which
//      is what lets you move from one to the next while something walks past.
//   2. THE DARK IS A RULE. The hold's own light is low and only a few lamps
//      make pools, and how far an alien can see you is worked out from the
//      light where you stand and whether you are still, walking or running
//      (tickExposure in game.ts). Sprinting down a lit aisle is genuinely
//      worse than walking round the dark edge, and the visor says so.
//
// There are three ways east: the lit main aisle (fast, watched), the dark
// perimeter walkways, and a floor duct out of the intake bay that comes up
// behind the shelving. The exit needs the keycard from the loading office, so
// the route has to double back through territory you have already crept past.

export const LEVEL4: LevelDef = (() => {
  const W = 46, H = 30, DUCT_H = 0.7;
  const duct: Omit<LevelDef["AREAS"][string], "r"> = { name: "", light: [0.5, 0.55, 0.7], wall: "duct", floor: "fDuct", ceil: "duct", ceilH: DUCT_H };
  const AREAS: NonNullable<LevelDef["AREAS"]> = {
    lift:    { r: [3, 14, 7, 18],   name: "1 Lift",            light: [0.82, 0.88, 1.0],  wall: "panel",    floor: "fTile",  ceil: "light" },
    corA:    { r: [9, 16, 11, 17],  name: "",                  light: [0.42, 0.47, 0.62], wall: "corridor", floor: "fGrate", ceil: "corridor" },
    intake:  { r: [12, 12, 19, 23], name: "2 Intake bay",      light: [0.32, 0.36, 0.5],  wall: "hub",      floor: "fTile",  ceil: "dark" },
    corC:    { r: [17, 11, 18, 11], name: "",                  light: [0.5, 0.56, 0.72],  wall: "corridor", floor: "fGrate", ceil: "corridor" },
    office:  { r: [14, 4, 21, 9],   name: "4 Loading office",  light: [0.85, 0.9, 1.05],  wall: "control",  floor: "fBridge", ceil: "light" },
    corB:    { r: [21, 17, 22, 18], name: "",                  light: [0.42, 0.47, 0.62], wall: "corridor", floor: "fGrate", ceil: "corridor" },
    stacks:  { r: [23, 5, 36, 24],  name: "3 The stacks",      light: [0.24, 0.28, 0.4],  wall: "hub",      floor: "fTile",  ceil: "dark", ceilH: 1.6 },
    dock:    { r: [38, 13, 43, 21], name: "5 Freight lift",    light: [0.8, 0.86, 1.0],   wall: "panel",    floor: "fTile",  ceil: "light" },
    // the ordnance locker: behind a false wall in the intake bay, three guards
    // sitting on the grenades. Nothing needs it — that is what a stash is for.
    store:   { r: [6, 22, 10, 27],  name: "Ordnance locker",   light: [0.34, 0.38, 0.52], wall: "pipes",    floor: "fTile",  ceil: "dark" },
    // the floor duct out of the intake bay, along under the stacks
    d1: { ...duct, r: [15, 24, 15, 26] },
    d2: { ...duct, r: [16, 26, 30, 26] },
    d3: { ...duct, r: [30, 25, 30, 25] }, // comes up behind the shelving
  };
  const DOORS: NonNullable<LevelDef["DOORS"]> = [
    { cells: [[8, 16], [8, 17]], tex: "door" },            // out of the lift
    { cells: [[17, 10], [18, 10]], tex: "door" },          // up into the loading office
    { cells: [[20, 17], [20, 18]], tex: "door" },          // intake bay into the stacks corridor
    { cells: [[22, 6], [22, 7]], tex: "door" },            // office straight into the stacks
    { cells: [[37, 16], [37, 17]], tex: "keyDoor", key: "blue" },
    { cells: [[44, 16], [44, 17]], tex: "exit", exit: true },
    { cells: [[11, 22]], tex: "secret", secret: true },    // into the ordnance locker
  ];
  // See-through grilles: from the duct you can watch the aisle above before
  // deciding to come up.
  const GRILLES: NonNullable<LevelDef["GRILLES"]> = [[25, 25], [28, 25]];
  // Full-height shelving. Each unbroken run is its own block so the texture
  // wraps round that run rather than round the whole room.
  const SHELVES: [number, number][][] = [];
  for (const y of [8, 12, 16, 20]) {
    SHELVES.push([25, 26, 27, 28].map((x): [number, number] => [x, y]));
    SHELVES.push([31, 32, 33, 34].map((x): [number, number] => [x, y]));
  }
  const BLOCKS: NonNullable<LevelDef["BLOCKS"]> = SHELVES.map((cells) => ({ cells, tex: "cargo" }));
  const FLOORS: NonNullable<LevelDef["FLOORS"]> = [
    [15, 23, 15, 23, "fDuct"],      // the vent mouth in the intake bay floor
    [38, 13, 38, 21, "fHazard"],
    [23, 17, 36, 19, "fGrate"],     // the main aisle, so it reads as the obvious way
  ];
  // Waist-high cover, left in the walkways where a firefight can actually start.
  const COVER: NonNullable<LevelDef["COVER"]> = [
    ...[[24, 10], [35, 8], [35, 13], [24, 20], [36, 22]].map((c): [number, number, string] => [c[0], c[1], "crate"]),
    ...[[13, 14], [14, 14], [13, 21], [18, 13], [18, 21]].map((c): [number, number, string] => [c[0], c[1], "crate"]),
    ...[[15, 8], [16, 8]].map((c): [number, number, string] => [c[0], c[1], "console"]),
    ...[[39, 15], [42, 19]].map((c): [number, number, string] => [c[0], c[1], "console"]),
    // ⚠️ this crate used to be at [9, 26], which is the square the third
    // ordnance grenade stands on. A pickup is collected within 0.55 squares
    // and a standing player cannot get closer than 0.62 to the middle of a
    // crate, so that grenade could not be picked up at all — only by jumping
    // on top of the crate, and it was drawn half buried in it. There is now a
    // permanent check that no pickup sits on cover.
    [7, 23, "crate"], [10, 25, "crate"],
  ];
  const WALL_OVERRIDE = (ai: string, f: number, x: number, y: number): string | undefined => {
    if (ai === "lift" && f === FACE.E && x === 2 && y === 16) return "exit";
    if (ai === "office" && f === FACE.N && y === 3) return x % 3 === 0 ? "computer" : "window";
    if (ai === "stacks" && (x === 22 || x === 37)) return y % 3 === 0 ? "cargo" : "panel";
    if (ai === "intake" && f === FACE.N && y === 24) return x % 4 === 0 ? "cargo" : "panel";
  };
  const DECALS: NonNullable<LevelDef["DECALS"]> = [
    [8, 15, FACE.E, "camera"], [12, 18, FACE.W, "arrowR"], [11, 21, FACE.E, "cables"], [11, 20, FACE.E, "screen"],
    [16, 12, FACE.S, "sign"], [17, 9, FACE.S, "arrowR"], [13, 3, FACE.S, "screen"], [22, 4, FACE.W, "keycard"],
    [20, 16, FACE.N, "arrowR", true], [23, 4, FACE.S, "camera"], [22, 19, FACE.E, "sign"],
    [37, 15, FACE.W, "keycard"], [37, 19, FACE.W, "arrowR", true], [37, 11, FACE.W, "camera"],
    [44, 20, FACE.W, "arrowR", true], [38, 22, FACE.N, "sign"], [30, 27, FACE.N, "cables"],
    [22, 12, FACE.E, "arrowR", true], [22, 22, FACE.E, "arrowR", true],
  ];
  const SPRITES: NonNullable<LevelDef["SPRITES"]> = [
    { t: "lamp", x: 3.6, y: 14.6 }, { t: "lamp", x: 7.4, y: 14.6 },
    // intake bay: dark, two of them, and the first grenade in plain sight
    { t: "grenade", x: 13.5, y: 16.5 }, { t: "ammo", x: 18.5, y: 22.5 }, { t: "health", x: 12.6, y: 12.6 },
    { t: "alienBack", x: 16.5, y: 19.5, face: -1.57, stomp: true }, { t: "alien", x: 18.4, y: 15.5, face: 3.1 },
    { t: "lamp", x: 15.5, y: 12.5 }, { t: "canister", x: 19.4, y: 12.6 }, { t: "canister", x: 12.5, y: 23.4 },
    // loading office: lit, guarded, and it has the keycard
    { t: "keycard", x: 20.5, y: 5.5 }, { t: "alien", x: 17.5, y: 5.5, face: 1.57 }, { t: "alien", x: 20.4, y: 8.5, face: 3.1 },
    { t: "vest", x: 14.6, y: 4.6 }, { t: "lamp", x: 21.4, y: 4.6 },
    // the stacks: aisles, a few lamps, and six of them walking between them
    { t: "alien", x: 24.5, y: 7.5, face: 1.57 }, { t: "alienBack", x: 29.5, y: 10.5, face: -1.57, stomp: true },
    { t: "alien", x: 33.5, y: 14.5, face: 3.1 }, { t: "alien", x: 26.5, y: 18.5, face: 0 },
    { t: "alienBack", x: 35.5, y: 21.5, face: 1.57, stomp: true }, { t: "alien", x: 32.5, y: 6.5, face: 2.4 },
    { t: "ammo", x: 29.5, y: 6.5 }, { t: "ammo", x: 23.5, y: 23.5 }, { t: "health", x: 36.5, y: 5.5 },
    { t: "grenade", x: 29.5, y: 18.5 }, { t: "lamp", x: 29.5, y: 17.5 }, { t: "lamp", x: 23.5, y: 13.5 },
    { t: "canister", x: 30.4, y: 23.5 }, { t: "canister", x: 29.6, y: 23.5 },
    // freight lift
    { t: "alien", x: 40.5, y: 15.5, face: 3.1 }, { t: "alien", x: 41.5, y: 20.5, face: 2.4 },
    { t: "health", x: 42.5, y: 14.5 }, { t: "lamp", x: 38.6, y: 13.6 }, { t: "lamp", x: 38.6, y: 20.4 },
    // the ordnance locker: three guards sitting on the grenades
    { t: "alien", x: 6.6, y: 23.5, face: 1.57 }, { t: "alien", x: 9.5, y: 22.6, face: 1.57 }, { t: "alien", x: 8.0, y: 26.5, face: -1.57 },
    { t: "grenade", x: 6.6, y: 26.5 }, { t: "grenade", x: 9.5, y: 26.4 }, { t: "grenade", x: 8.0, y: 22.6 },
    { t: "health", x: 6.5, y: 24.6 }, { t: "ammo", x: 9.5, y: 24.5 }, { t: "lamp", x: 10.4, y: 27.4 },
  ];
  // Only a handful of pools of light, and the level is built round where they are.
  const LIGHTS: NonNullable<LevelDef["LIGHTS"]> = [
    { x: 29.5, y: 18, rgb: [0.5, 0.53, 0.62], r: 5 },     // the main aisle: the fast way, and the watched one
    { x: 34.5, y: 18, rgb: [0.4, 0.43, 0.52], r: 4 },
    { x: 23.5, y: 13.5, rgb: [0.3, 0.33, 0.42], r: 3.5 },
    { x: 36.5, y: 8, rgb: [0.26, 0.3, 0.4], r: 3 },
    { x: 15.5, y: 12.5, rgb: [0.3, 0.33, 0.42], r: 3.5 },
    { x: 20.5, y: 9.5, rgb: [0.3, 0.34, 0.45], r: 3.5 },  // light spilling out of the office door
    { x: 8, y: 25, rgb: [0.12, 0.16, 0.26], r: 3.5 },
  ];
  const START = { x: 5.5, y: 16.5, angle: 0 };
  const ROUTE = [[5.5, 16.5], [10.5, 16.5], [15, 16.5], [17.5, 12.5], [17.5, 8], [20.5, 5.5], [17.5, 8], [17.5, 12.5], [16, 18], [21.5, 17.5], [24, 17.5], [29.5, 17.5], [34, 17.5], [36.5, 16.5], [40, 16.5], [43, 16.5]];
  const ALT_ROUTE = [[15.5, 23.5], [15.5, 25.5], [18, 26.5], [28, 26.5], [30.5, 25.5], [30.5, 23], [30.5, 18.5], [23.5, 6.5], [21.5, 6.5]];
  const LABELS = { lift: [5.5, 12.4], intake: [15.5, 24.6], office: [17.5, 2.4], stacks: [29.5, 3.4], dock: [40.5, 11.4] };
  const LEGEND = [["grenade", "Grenade (G to throw)"], ["keycard", "Blue keycard (opens the freight lift)"]];
  // ⚠️ Each of these has to fit the comms panel: it wraps at four lines of about
  // 40 characters, and anything past that is simply never said.
  const INTRO = "The cargo hold, and most of the lights are out. Stay dark, walk instead of running, and they won't see you coming.";
  const HINTS = {
    intake: "Dark in here. The SEEN bar under your sights says how close they have to get. And that west wall sounds hollow…",
    store: "The ordnance locker! Three grenades, and three of them guarding it.",
    corC: "Stairs up to the loading office. It's lit up there, so they will see you coming.",
    office: "The keycard for the freight lift should be on a desk in here.",
    stacks: "The shelving is too tall to see over: they can only spot you down an aisle. The lit middle one is the risky way.",
    d1: "A cargo duct, running right under the stacks. Look through the grilles before you come up.",
    d3: "Out behind the shelving, and nothing has seen you.",
    dock: "The freight lift is on the far wall. Walk up to it and press E.",
  };
  const OBJECTIVES: NonNullable<LevelDef["OBJECTIVES"]> = [
    { text: "Find the blue keycard", at: [20.5, 5.5], until: "keycard" },
    { text: "Reach the freight lift", at: [43, 16.5] },
  ];
  const LOCKED_HINT = "Locked. The freight lift wants the blue keycard — try the loading office.";
  return { INTRO, HINTS, OBJECTIVES, LOCKED_HINT, TITLE: "Level 4 — Cargo hold", W, H, DUCT_H, AREAS, DOORS, GRILLES, BLOCKS, FLOORS, COVER, WALL_OVERRIDE, DECALS, SPRITES, LIGHTS, START, ROUTE, ALT_ROUTE, LABELS, LEGEND };
})();


// Level 5: "Flight deck" — the first level with the assault rifle, and the
// level built to make you want it. Everything about it is the opposite of the
// cargo hold: the lights are on, the ceiling is 2.6 squares high, and the
// hangar is one room 23 x 24 squares across. There is nowhere to hide and no
// darkness to hide in, so the answer is not stealth, it is volume of fire —
// which is exactly the weapon the arms locker gives you on the way in.
//
// The shuttle parked in the middle is what stops it being a shooting gallery:
// it splits the hall into a north side and a south side, so you fight one
// half at a time and can break line of sight by walking round it.
//
// The hangar door will not open until you are carrying the rifle. Same
// reasoning as level 1's cargo bay door: nobody should walk into the biggest
// fight in the game because they missed the room with the gun in it.

export const LEVEL5: LevelDef = (() => {
  const W = 50, H = 34;
  const AREAS: NonNullable<LevelDef["AREAS"]> = {
    lift:  { r: [3, 15, 7, 19],   name: "1 Docking lift",   light: [0.82, 0.88, 1.0],  wall: "panel",    floor: "fTile",    ceil: "light" },
    corA:  { r: [9, 16, 12, 18],  name: "",                 light: [0.6, 0.66, 0.82],  wall: "corridor", floor: "fGrate",   ceil: "corridor" },
    corB:  { r: [10, 13, 11, 15], name: "",                 light: [0.6, 0.66, 0.82],  wall: "corridor", floor: "fGrate",   ceil: "corridor" },
    arms:  { r: [8, 6, 14, 11],   name: "2 Arms locker",    light: [0.88, 0.92, 1.05], wall: "control",  floor: "fTile",    ceil: "light" },
    corD:  { r: [13, 16, 14, 19], name: "",                 light: [0.6, 0.66, 0.82],  wall: "corridor", floor: "fGrate",   ceil: "corridor" },
    deck:  { r: [16, 4, 38, 27],  name: "3 Flight deck",    light: [0.95, 1.0, 1.1],   wall: "hall",     floor: "fCatwalk", ceil: "grid", ceilH: 2.6 },
    corE:  { r: [20, 29, 21, 29], name: "",                 light: [0.6, 0.66, 0.82],  wall: "corridor", floor: "fGrate",   ceil: "corridor" },
    tower: { r: [17, 30, 26, 32], name: "4 Control tower",  light: [0.9, 0.95, 1.1],   wall: "bridge",   floor: "fBridge",  ceil: "light" },
    dock:  { r: [40, 17, 46, 26], name: "5 Launch lift",    light: [0.84, 0.9, 1.02],  wall: "panel",    floor: "fTile",    ceil: "light" },
    // Behind a false wall on the east hull: the fuel bay. Three guards, a vest
    // and the spare cells. Nothing in the level needs it.
    bay:   { r: [40, 5, 46, 11],  name: "Fuel bay",         light: [0.42, 0.48, 0.62], wall: "pipes",    floor: "fHazard",  ceil: "dark" },
  };
  const DOORS: NonNullable<LevelDef["DOORS"]> = [
    { cells: [[8, 16], [8, 17], [8, 18]], tex: "door" },                        // out of the docking lift
    { cells: [[10, 12], [11, 12]], tex: "door" },                               // up into the arms locker
    // the hangar door: four cells wide, and it stays shut until you have the rifle
    { cells: [[15, 16], [15, 17], [15, 18], [15, 19]], tex: "door", needs: "rifle" },
    { cells: [[20, 28], [21, 28]], tex: "door" },                               // stairs down to the control tower
    { cells: [[39, 7], [39, 8]], tex: "secret", secret: true },                 // the fuel bay
    { cells: [[39, 21], [39, 22]], tex: "keyDoor", key: "blue" },               // into the launch lift
    { cells: [[47, 21], [47, 22]], tex: "exit", exit: true },
  ];
  // The shuttle, parked nose-west. Full height, so it genuinely splits the hall.
  const HULL: [number, number][] = [];
  for (let y = 13; y <= 17; y++) for (let x = 24; x <= 33; x++) HULL.push([x, y]);
  const BLOCKS: NonNullable<LevelDef["BLOCKS"]> = [
    { cells: HULL, tex: "core" },
    { cells: [[21, 15], [22, 15], [23, 15]], tex: "core" },   // port wing
    { cells: [[34, 15], [35, 15], [36, 15]], tex: "core" },   // starboard wing
    ...([[18, 8], [18, 23], [36, 8], [36, 23]] as [number, number][]).map((c) => ({ cells: [c] as [number, number][], tex: "pillar" })),
  ];
  const FLOORS: NonNullable<LevelDef["FLOORS"]> = [
    [16, 4, 38, 4, "fHazard"], [16, 27, 38, 27, "fHazard"],   // the painted edge of the launch floor
    [16, 16, 23, 19, "fGrate"], [37, 16, 38, 22, "fGrate"],
  ];
  const COVER: NonNullable<LevelDef["COVER"]> = [
    ...([[19, 6], [22, 9], [28, 8], [32, 10], [35, 6], [20, 11]] as [number, number][]).map((c): [number, number, string] => [c[0], c[1], "crate"]),
    ...([[18, 21], [23, 24], [27, 22], [31, 25], [34, 20], [26, 26]] as [number, number][]).map((c): [number, number, string] => [c[0], c[1], "crate"]),
    ...([[9, 9], [13, 9]] as [number, number][]).map((c): [number, number, string] => [c[0], c[1], "console"]),
    ...([[18, 31], [25, 31], [21, 32], [22, 32]] as [number, number][]).map((c): [number, number, string] => [c[0], c[1], "console"]),
    ...([[41, 19], [45, 24]] as [number, number][]).map((c): [number, number, string] => [c[0], c[1], "console"]),
    [41, 10, "crate"], [46, 10, "crate"],
  ];
  const WALL_OVERRIDE = (ai: string, f: number, x: number, y: number): string | undefined => {
    if (ai === "lift" && f === FACE.E && x === 2 && y === 17) return "exit";
    if (ai === "arms" && f === FACE.W && x === 7) return "rack";
    if (ai === "deck" && f === FACE.S && y === 3) return x % 3 === 0 ? "pillar" : "window";
    if (ai === "tower" && f === FACE.N && y === 33) return x >= 19 && x <= 24 ? "window" : "computer";
    if (ai === "deck" && f === FACE.W && x === 39 && y >= 12 && y <= 15) return "cargo";
  };
  const DECALS: NonNullable<LevelDef["DECALS"]> = [
    [8, 15, FACE.E, "camera"], [12, 13, FACE.E, "arrowR", true], [9, 12, FACE.S, "sign"],
    [7, 8, FACE.E, "screen"], [15, 8, FACE.W, "sign"], [12, 19, FACE.N, "arrowR"],
    [15, 20, FACE.N, "camera"], [16, 3, FACE.S, "sign"], [39, 16, FACE.W, "keycard"],
    [22, 28, FACE.E, "arrowR"], [19, 29, FACE.W, "sign"], [27, 33, FACE.N, "screen"],
    [39, 20, FACE.W, "arrowR", true], [39, 12, FACE.W, "cables"], [47, 20, FACE.W, "arrowR", true],
    [39, 6, FACE.W, "cables"], [39, 9, FACE.W, "screen"],
  ];
  const SPRITES: NonNullable<LevelDef["SPRITES"]> = [
    { t: "lamp", x: 3.6, y: 15.6 }, { t: "lamp", x: 7.4, y: 15.6 },
    // the arms locker: the rifle, and two guards who have not heard you yet
    { t: "rifle", x: 11.5, y: 8.5 }, { t: "ammo", x: 9.5, y: 10.5 }, { t: "vest", x: 13.5, y: 6.5 },
    { t: "alienBack", x: 9.5, y: 7.5, face: 1.57, stomp: true }, { t: "alien", x: 13.5, y: 10.5, face: 3.1 },
    { t: "lamp", x: 11.5, y: 6.5 },
    // the flight deck, north of the shuttle
    { t: "alien", x: 18.5, y: 6.5, face: 1.57 }, { t: "alien", x: 21.5, y: 9.5, face: 0 },
    { t: "alien", x: 26.5, y: 7.5, face: 1.57 }, { t: "alien", x: 31.5, y: 6.5, face: 3.1 },
    { t: "alien", x: 35.5, y: 9.5, face: 3.1 }, { t: "alienBack", x: 37.5, y: 12.5, face: -1.57, stomp: true },
    { t: "alien", x: 19.5, y: 13.5, face: 1.57 },
    { t: "ammo", x: 24.5, y: 5.5 }, { t: "health", x: 17.5, y: 5.5 }, { t: "ammo", x: 37.5, y: 5.5 },
    { t: "lamp", x: 20.5, y: 5.5 }, { t: "lamp", x: 34.5, y: 5.5 }, { t: "canister", x: 29.4, y: 11.5 }, { t: "canister", x: 30.3, y: 11.5 },
    // and south of it
    { t: "alien", x: 17.5, y: 20.5, face: 1.57 }, { t: "alien", x: 20.5, y: 24.5, face: 0 },
    { t: "alien", x: 25.5, y: 21.5, face: 1.57 }, { t: "alien", x: 29.5, y: 25.5, face: 3.1 },
    { t: "alien", x: 33.5, y: 22.5, face: 3.1 }, { t: "alienBack", x: 37.5, y: 25.5, face: -1.57, stomp: true },
    { t: "alien", x: 19.5, y: 17.5, face: 0 },
    { t: "health", x: 18.5, y: 26.5 }, { t: "ammo", x: 32.5, y: 19.5 }, { t: "ammo", x: 22.5, y: 26.5 },
    { t: "lamp", x: 20.5, y: 26.5 }, { t: "lamp", x: 34.5, y: 26.5 }, { t: "canister", x: 24.4, y: 19.5 },
    // the control tower: the keycard for the launch lift
    { t: "keycard", x: 22.5, y: 31.5 }, { t: "alien", x: 19.5, y: 31.5, face: 0 }, { t: "alien", x: 24.5, y: 31.5, face: 3.1 },
    { t: "holo", x: 22.5, y: 30.6 }, { t: "health", x: 25.5, y: 32.5 },
    // the launch lift
    { t: "alien", x: 42.5, y: 19.5, face: 3.1 }, { t: "alien", x: 44.5, y: 24.5, face: 2.4 },
    { t: "health", x: 45.5, y: 18.5 }, { t: "lamp", x: 40.6, y: 17.6 }, { t: "lamp", x: 40.6, y: 25.4 },
    // the fuel bay, behind the false wall
    { t: "alien", x: 41.5, y: 6.5, face: 3.1 }, { t: "alien", x: 45.5, y: 6.5, face: 3.1 }, { t: "alien", x: 43.5, y: 10.5, face: -1.57 },
    { t: "vest", x: 43.5, y: 6.5 }, { t: "ammo", x: 41.5, y: 9.5 }, { t: "ammo", x: 45.5, y: 9.5 }, { t: "health", x: 46.5, y: 8.5 },
  ];
  const LIGHTS: NonNullable<LevelDef["LIGHTS"]> = [
    { x: 27.5, y: 8, rgb: [0.3, 0.33, 0.4], r: 7 },
    { x: 27.5, y: 23, rgb: [0.3, 0.33, 0.4], r: 7 },
    { x: 11.5, y: 8.5, rgb: [0.25, 0.28, 0.36], r: 4 },
    { x: 22.5, y: 31, rgb: [0.2, 0.3, 0.45], r: 4 },
    { x: 43.5, y: 21.5, rgb: [0.22, 0.25, 0.32], r: 4 },
    { x: 43.5, y: 8, rgb: [0.1, 0.14, 0.22], r: 4 },
  ];
  const START = { x: 5.5, y: 17.5, angle: 0 };
  const ROUTE = [[5.5, 17.5], [10.5, 17], [10.5, 14], [10.5, 9.5], [11.5, 8.5], [10.5, 14], [11, 17.5], [14, 17.5], [17, 17.5], [19, 21], [22, 24], [20.5, 27], [20.5, 29.5], [22.5, 31.5], [20.5, 29.5], [20.5, 27], [28, 24], [34, 22], [37.5, 21.5], [41, 21.5], [45.5, 21.5]];
  const ALT_ROUTE = [[17, 17.5], [18, 11], [22, 6.5], [30, 6.5], [37, 9], [37.5, 13], [37.5, 19], [37.5, 21.5]];
  const LABELS = { lift: [5.5, 13.4], arms: [11.5, 4.4], deck: [27.5, 2.4], tower: [21.5, 33.4], dock: [43.5, 15.4] };
  const LEGEND = [["rifle", "Assault rifle (5 rounds per right answer)"], ["keycard", "Blue keycard (opens the launch lift)"]];
  const INTRO = "The flight deck. No cover, no shadows. Get the rifle from the arms locker first.";
  const HINTS = {
    arms: "There it is. The rifle hits softer than the blaster but empties five times as fast.",
    deck: "Huge, bright, and they can see all of it. Keep the shuttle between you and whatever is shooting.",
    tower: "The keycard for the launch lift will be on the console down here.",
    bay: "The fuel bay. Three of them, and a spare vest.",
    dock: "The launch lift is on the far wall. Walk up to it and press E.",
  };
  const OBJECTIVES: NonNullable<LevelDef["OBJECTIVES"]> = [
    { text: "Get the assault rifle", at: [11.5, 8.5], until: "rifle" },
    { text: "Find the blue keycard", at: [22.5, 31.5], until: "keycard" },
    { text: "Reach the launch lift", at: [45.5, 21.5] },
  ];
  const LOCKED_HINT = "Locked. The launch lift wants the blue keycard — try the control tower, south side.";
  return { INTRO, HINTS, OBJECTIVES, LOCKED_HINT, TITLE: "Level 5 — Flight deck", W, H, AREAS, DOORS, BLOCKS, FLOORS, COVER, WALL_OVERRIDE, DECALS, SPRITES, LIGHTS, START, ROUTE, ALT_ROUTE, LABELS, LEGEND };
})();

// Level 6: "Hydroponics" — the last ordinary deck before the boss, and the one
// that asks you to use everything the first five taught you. It is bright, so
// darkness is no help; what breaks the sight lines here is the planting, rows
// of full-height racks you move between exactly the way you moved between the
// shelving on level 4 — except the aliens are twice as thick on the ground and
// the racks run the other way, so an aisle that hides you from one room shows
// you to the next.
//
// One new rule, and it is one line of maths rather than a new system: the
// irrigation channels in the growing hall raise your exposure while you are
// moving through them. Splashing. The dry crossing in the middle is the only
// quiet way across, which turns a straight run east into a decision.

export const LEVEL6: LevelDef = (() => {
  const W = 46, H = 32;
  const AREAS: NonNullable<LevelDef["AREAS"]> = {
    lift:  { r: [3, 13, 7, 17],   name: "1 Lift",               light: [0.82, 0.88, 1.0],  wall: "panel",    floor: "fTile",  ceil: "light" },
    corA:  { r: [9, 14, 11, 16],  name: "",                     light: [0.6, 0.66, 0.82],  wall: "corridor", floor: "fGrate", ceil: "corridor" },
    germ:  { r: [13, 8, 21, 21],  name: "2 Germination hall",   light: [0.62, 0.78, 0.66], wall: "hub",      floor: "fTile",  ceil: "grid", ceilH: 1.5 },
    corB:  { r: [23, 14, 24, 15], name: "",                     light: [0.6, 0.66, 0.82],  wall: "corridor", floor: "fGrate", ceil: "corridor" },
    grow:  { r: [26, 4, 38, 26],  name: "3 Growing hall",       light: [0.8, 1.0, 0.85],   wall: "hall",     floor: "fTile",  ceil: "grid", ceilH: 1.8 },
    corC:  { r: [14, 22, 15, 24], name: "",                     light: [0.5, 0.58, 0.6],   wall: "corridor", floor: "fGrate", ceil: "corridor" },
    pump:  { r: [10, 25, 19, 29], name: "4 Pump room",          light: [0.44, 0.52, 0.6],  wall: "pipes",    floor: "fGrate", ceil: "dark" },
    dock:  { r: [40, 13, 43, 20], name: "5 Lift to the spine",  light: [0.84, 0.9, 1.02],  wall: "panel",    floor: "fTile",  ceil: "light" },
    // behind a false wall off the pump room
    vault: { r: [3, 22, 8, 28],   name: "Seed vault",           light: [0.36, 0.42, 0.5],  wall: "pipes",    floor: "fTile",  ceil: "dark" },
  };
  const DOORS: NonNullable<LevelDef["DOORS"]> = [
    { cells: [[8, 14], [8, 15], [8, 16]], tex: "door" },          // out of the lift
    { cells: [[12, 14], [12, 15], [12, 16]], tex: "door" },       // into the germination hall
    { cells: [[22, 14], [22, 15]], tex: "door" },                 // east, towards the growing hall
    { cells: [[25, 14], [25, 15]], tex: "door" },
    { cells: [[39, 16], [39, 17]], tex: "keyDoor", key: "blue" }, // into the lift bay
    { cells: [[44, 16], [44, 17]], tex: "exit", exit: true },
    { cells: [[9, 26], [9, 27]], tex: "secret", secret: true },   // the seed vault
  ];
  // Planting racks: full height, so they break the sight line the way level 4's
  // shelving does. The germination hall's run east-west; the growing hall's run
  // the same way but are split by the irrigation channel down the middle, so the
  // two halls never give you the same set of angles.
  const RACKS: [number, number][][] = [];
  for (const y of [10, 13, 16, 19]) RACKS.push([14, 15, 16, 17, 18, 19].map((x): [number, number] => [x, y]));
  for (const y of [6, 9, 12, 18, 21, 24]) {
    RACKS.push([27, 28, 29, 30].map((x): [number, number] => [x, y]));
    RACKS.push([34, 35, 36, 37].map((x): [number, number] => [x, y]));
  }
  const BLOCKS: NonNullable<LevelDef["BLOCKS"]> = RACKS.map((cells) => ({ cells, tex: "cargo" }));
  const FLOORS: NonNullable<LevelDef["FLOORS"]> = [
    [31, 5, 32, 12, "fWater"], [31, 15, 32, 25, "fWater"],   // the irrigation channels
    [31, 13, 32, 14, "fCatwalk"],                            // the dry crossing
    [26, 4, 26, 26, "fGrate"], [38, 4, 38, 26, "fGrate"],     // the two edge walkways
  ];
  const COVER: NonNullable<LevelDef["COVER"]> = [
    ...([[13, 11], [19, 14], [13, 17], [21, 20], [20, 9]] as [number, number][]).map((c): [number, number, string] => [c[0], c[1], "crate"]),
    ...([[32, 6], [33, 20], [26, 16], [37, 10], [33, 11], [27, 8]] as [number, number][]).map((c): [number, number, string] => [c[0], c[1], "crate"]),
    ...([[11, 26], [18, 28], [14, 29]] as [number, number][]).map((c): [number, number, string] => [c[0], c[1], "console"]),
    ...([[41, 14], [42, 19]] as [number, number][]).map((c): [number, number, string] => [c[0], c[1], "console"]),
    [4, 23, "crate"], [7, 27, "crate"],
  ];
  const WALL_OVERRIDE = (ai: string, f: number, x: number, y: number): string | undefined => {
    if (ai === "lift" && f === FACE.E && x === 2 && y === 15) return "exit";
    if (ai === "grow" && f === FACE.S && y === 3) return x % 3 === 0 ? "pillar" : "window";
    if (ai === "germ" && f === FACE.W && x === 12) return y % 3 === 0 ? "cargo" : "panel";
    if (ai === "pump" && f === FACE.N && y === 30) return x % 2 === 0 ? "tank" : "pipes";
  };
  const DECALS: NonNullable<LevelDef["DECALS"]> = [
    [8, 13, FACE.E, "camera"], [12, 13, FACE.E, "arrowR"], [22, 13, FACE.E, "arrowR"],
    [13, 22, FACE.E, "sign"], [16, 22, FACE.W, "arrowR"], [9, 25, FACE.E, "cables"],
    [9, 28, FACE.E, "screen"], [39, 15, FACE.W, "keycard"], [39, 18, FACE.W, "arrowR", true],
    [44, 15, FACE.W, "arrowR", true], [25, 13, FACE.E, "sign"], [33, 3, FACE.S, "camera"],
    [20, 30, FACE.N, "sign"], [39, 12, FACE.W, "cables"],
  ];
  const SPRITES: NonNullable<LevelDef["SPRITES"]> = [
    { t: "lamp", x: 3.6, y: 13.6 }, { t: "lamp", x: 7.4, y: 13.6 },
    // germination hall: four rack rows, six of them working between them
    { t: "alien", x: 13.5, y: 9.5, face: 1.57 }, { t: "alienBack", x: 20.5, y: 11.5, face: -1.57, stomp: true },
    { t: "alien", x: 16.5, y: 14.5, face: 0 }, { t: "alien", x: 20.5, y: 17.5, face: 3.1 },
    { t: "alien", x: 14.5, y: 20.5, face: 1.57 }, { t: "alien", x: 18.5, y: 8.5, face: 0 },
    { t: "ammo", x: 17.5, y: 11.5 }, { t: "health", x: 21.5, y: 8.5 }, { t: "ammo", x: 13.5, y: 14.5 },
    { t: "lamp", x: 17.5, y: 8.5 }, { t: "lamp", x: 17.5, y: 21.5 }, { t: "canister", x: 21.4, y: 21.5 },
    // growing hall: the densest room in the game, and the water runs down the middle
    { t: "alien", x: 26.5, y: 5.5, face: 1.57 }, { t: "alien", x: 33.5, y: 5.5, face: 1.57 },
    { t: "alien", x: 38.5, y: 7.5, face: 3.1 }, { t: "alien", x: 33.5, y: 10.5, face: 0 },
    { t: "alienBack", x: 26.5, y: 12.5, face: 1.57, stomp: true }, { t: "alien", x: 38.5, y: 14.5, face: 3.1 },
    { t: "alien", x: 33.5, y: 16.5, face: 1.57 }, { t: "alien", x: 26.5, y: 19.5, face: 1.57 },
    { t: "alien", x: 33.5, y: 23.5, face: 3.1 }, { t: "alienBack", x: 38.5, y: 22.5, face: -1.57, stomp: true },
    { t: "alien", x: 30.5, y: 26.5, face: 3.1 }, { t: "alien", x: 36.5, y: 26.5, face: 3.1 },
    { t: "ammo", x: 33.5, y: 13.5 }, { t: "ammo", x: 26.5, y: 23.5 }, { t: "health", x: 38.5, y: 4.5 },
    { t: "vest", x: 33.5, y: 26.5 }, { t: "ammo", x: 38.5, y: 19.5 },
    { t: "lamp", x: 33.5, y: 4.5 }, { t: "lamp", x: 33.5, y: 14.5 }, { t: "lamp", x: 33.5, y: 25.5 },
    { t: "canister", x: 26.4, y: 10.5 }, { t: "canister", x: 26.6, y: 17.5 },
    // pump room: dark, loud, and the keycard is down here
    { t: "keycard", x: 15.5, y: 27.5 }, { t: "alien", x: 11.5, y: 28.5, face: 0 },
    { t: "alien", x: 18.5, y: 26.5, face: 3.1 }, { t: "alienBack", x: 15.5, y: 25.5, face: -1.57, stomp: true },
    { t: "health", x: 10.5, y: 25.5 }, { t: "ammo", x: 19.5, y: 29.5 }, { t: "lamp", x: 15.5, y: 29.5 },
    // the seed vault, behind the false wall
    { t: "alien", x: 4.5, y: 22.5, face: 1.57 }, { t: "alien", x: 7.5, y: 22.5, face: 1.57 }, { t: "alien", x: 5.5, y: 27.5, face: -1.57 },
    { t: "health", x: 3.5, y: 25.5 }, { t: "health", x: 7.5, y: 25.5 }, { t: "ammo", x: 5.5, y: 24.5 },
    { t: "vest", x: 3.5, y: 27.5 }, { t: "lamp", x: 6.5, y: 28.4 },
    // the lift out
    { t: "alien", x: 41.5, y: 17.5, face: 3.1 }, { t: "health", x: 43.5, y: 13.5 },
    { t: "lamp", x: 40.6, y: 13.6 }, { t: "lamp", x: 40.6, y: 19.4 },
  ];
  const LIGHTS: NonNullable<LevelDef["LIGHTS"]> = [
    { x: 32, y: 8, rgb: [0.24, 0.34, 0.26], r: 6 },
    { x: 32, y: 21, rgb: [0.24, 0.34, 0.26], r: 6 },
    { x: 17.5, y: 15, rgb: [0.2, 0.28, 0.22], r: 6 },
    { x: 15, y: 27, rgb: [0.12, 0.16, 0.2], r: 4 },
    { x: 5.5, y: 25.5, rgb: [0.1, 0.13, 0.18], r: 4 },
    { x: 41.5, y: 16.5, rgb: [0.2, 0.24, 0.3], r: 4 },
  ];
  const START = { x: 5.5, y: 15.5, angle: 0 };
  const ROUTE = [[5.5, 15.5], [10.5, 15], [14, 15], [20.5, 15], [20.5, 21], [15, 21.5], [15, 24], [15.5, 27.5], [15, 24], [15, 21.5], [20.5, 15], [23.5, 14.5], [26.5, 14.5], [31.5, 13.5], [33.5, 14.5], [38, 16.5], [41, 16.5], [43, 16.5]];
  const ALT_ROUTE = [[26.5, 14.5], [26.5, 7.5], [33.5, 7.5], [38.5, 8.5], [38.5, 16.5]];
  const LABELS = { lift: [5.5, 11.4], germ: [17.5, 6.4], grow: [32.5, 2.4], pump: [15, 30.6], dock: [41.5, 11.4] };
  const LEGEND = [["keycard", "Blue keycard (opens the lift to the spine)"]];
  const INTRO = "Hydroponics. Lights all on, so the racks are your only cover. And the water gives you away.";
  const HINTS = {
    germ: "Seedling racks, too tall to see over. Same trick as the cargo hold: move when the aisle is empty.",
    grow: "Watch the channels. Walking through water raises your SEEN bar. Cross on the dry strip.",
    corC: "Steps down to the pump room. It is dark below, which is the first break you have had all deck.",
    pump: "The keycard should be on the pump housing. Something is guarding it.",
    vault: "The seed vault. Two med-kits, a vest, and three of them sat on top.",
    dock: "The lift up to the spine is on the far wall. Walk up to it and press E.",
  };
  const OBJECTIVES: NonNullable<LevelDef["OBJECTIVES"]> = [
    { text: "Find the blue keycard", at: [15.5, 27.5], until: "keycard" },
    { text: "Reach the lift to the spine", at: [43, 16.5] },
  ];
  const LOCKED_HINT = "Locked. The lift wants the blue keycard — try the pump room, below the germination hall.";
  return { INTRO, HINTS, OBJECTIVES, LOCKED_HINT, TITLE: "Level 6 — Hydroponics", W, H, AREAS, DOORS, BLOCKS, FLOORS, COVER, WALL_OVERRIDE, DECALS, SPRITES, LIGHTS, START, ROUTE, ALT_ROUTE, LABELS, LEGEND };
})();

export const LEVELS: LevelDef[] = [LEVEL1, LEVEL2, LEVEL3, LEVEL4, LEVEL5, LEVEL6];
