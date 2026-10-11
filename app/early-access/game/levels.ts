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
    // a hint that something is behind this wall
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
    { t: "health", x: 14.3, y: 5.3 }, { t: "canister", x: 13.4, y: 4.4 },
    { t: "alien", x: 33.5, y: 3.6 }, { t: "lamp", x: 23.4, y: 4.6 },
    { t: "alien", x: 31.6, y: 17.6 }, { t: "canister", x: 30.3, y: 18.6 }, { t: "canister", x: 32.6, y: 18.6 },
    { t: "alien", x: 34.3, y: 13.5 }, { t: "alien", x: 41.4, y: 10.2 }, { t: "alien", x: 40.8, y: 18.5 }, { t: "health", x: 33.4, y: 18.5 },
    { t: "lamp", x: 33.5, y: 8.5 }, { t: "lamp", x: 42.5, y: 8.5 }, { t: "lamp", x: 33.5, y: 19.5 }, { t: "lamp", x: 42.5, y: 19.5 },
    { t: "alien", x: 35.2, y: 23.4 }, { t: "alien", x: 42.4, y: 26.2 }, { t: "holo", x: 38.5, y: 24.8 }, { t: "health", x: 43.4, y: 22.6 },
    { t: "lamp", x: 34.4, y: 28.6 }, { t: "lamp", x: 43.6, y: 28.6 },
    // the medical store: three guards, and what they are guarding
    { t: "alien", x: 19.5, y: 23.5, face: 1.57 }, { t: "alien", x: 22.6, y: 23.4, face: 1.57 }, { t: "alien", x: 21.2, y: 25.6, face: -1.57 },
    { t: "health", x: 18.6, y: 25.5 }, { t: "health", x: 23.5, y: 25.5 }, { t: "health", x: 21.5, y: 22.6 },
    { t: "lamp", x: 24.4, y: 22.6 }, { t: "canister", x: 18.5, y: 22.5 },
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
    [25, 23, FACE.E, "sign"], [32, 21, FACE.S, "cables"],
  ];
  const SPRITES: NonNullable<LevelDef["SPRITES"]> = [
    { t: "lamp", x: 3.6, y: 13.6 }, { t: "lamp", x: 7.4, y: 13.6 },
    { t: "alien", x: 14.5, y: 15.4 }, { t: "alien", x: 10.4, y: 18.4 }, { t: "canister", x: 16.4, y: 12.6 }, { t: "canister", x: 9.4, y: 12.5 },
    { t: "alien", x: 17.6, y: 3.8 }, { t: "ammo", x: 18.5, y: 6.6 },
    { t: "radsuit", x: 5.6, y: 3.8 }, { t: "health", x: 7.5, y: 6.6 }, { t: "canister", x: 4.4, y: 6.6 },
    { t: "lamp", x: 21.5, y: 2.5 }, { t: "lamp", x: 21.5, y: 18.5 }, { t: "lamp", x: 37.5, y: 2.5 }, { t: "lamp", x: 37.5, y: 18.5 },
    { t: "alien", x: 28.5, y: 7.4 }, { t: "alien", x: 31.5, y: 12.4 }, { t: "alien", x: 36.6, y: 8.2 }, { t: "keycard", x: 43.5, y: 4.4 }, { t: "alien", x: 41.5, y: 5.4 }, { t: "alien", x: 43.3, y: 8.4 }, { t: "canister", x: 39.4, y: 8.6 }, { t: "canister", x: 39.4, y: 3.4 },
    { t: "alien", x: 38.6, y: 27.3 }, { t: "health", x: 33.6, y: 27.6 }, { t: "lamp", x: 33.4, y: 24.4 }, { t: "lamp", x: 41.6, y: 24.4 },
    // the supply locker: four guards round the med-kits
    { t: "alien", x: 30.4, y: 22.5, face: 0 }, { t: "alien", x: 27.5, y: 21.4, face: 1.57 },
    { t: "alien", x: 29.5, y: 25.5, face: -1.57 }, { t: "alien", x: 26.6, y: 24.5, face: 0 },
    { t: "health", x: 26.6, y: 20.6 }, { t: "health", x: 31.4, y: 20.6 }, { t: "health", x: 28.5, y: 25.6 },
    { t: "lamp", x: 26.5, y: 26.5 }, { t: "canister", x: 31.4, y: 26.4 },
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
    [11, 17, FACE.S, "arrowR"], [13, 17, FACE.S, "sign"],
    [21, 9, FACE.S, "screen"], [30, 11, FACE.W, "camera"], [24, 23, FACE.N, "sign"],
    [18, 22, FACE.N, "arrowR", true], [34, 11, FACE.S, "camera"], [41, 20, FACE.W, "arrowR", true],
    
  ];
  // Aliens carry a facing angle so the map can show what each one watches.
  const SPRITES: NonNullable<LevelDef["SPRITES"]> = [
    { t: "lamp", x: 3.6, y: 20.6 }, { t: "lamp", x: 7.4, y: 20.6 },
    { t: "canister", x: 9.5, y: 25.3 }, { t: "canister", x: 15.4, y: 18.5 }, { t: "ammo", x: 12.5, y: 21.5 },
    { t: "alien", x: 23.5, y: 11.4, face: 1.6 }, { t: "alien", x: 24.6, y: 15.6, face: 3.1 }, { t: "alien", x: 21.2, y: 20.2, face: 0.2 },
    { t: "alien", x: 28.5, y: 19.8, face: 2.6 }, { t: "alienBack", x: 28.6, y: 11.3, face: -1.6 }, { t: "alien", x: 25, y: 21.4, face: -1.6 },
    { t: "lamp", x: 20.5, y: 10.5 }, { t: "lamp", x: 29.5, y: 10.5 },
    { t: "alienBack", x: 22.5, y: 5.8, face: -1.57, stomp: true }, { t: "alienBack", x: 25.8, y: 3.2, face: 0 }, // facing the wall, so a quiet player can stomp this one too
    { t: "vest", x: 19.6, y: 2.6 }, { t: "alienBack", x: 33.7, y: 14.5, face: 0, stomp: true }, { t: "alien", x: 38.5, y: 21.8, face: -2.2 },
    { t: "health", x: 39.5, y: 12.6 }, { t: "lamp", x: 33.4, y: 24.4 }, { t: "lamp", x: 40.6, y: 12.4 }, { t: "canister", x: 40.5, y: 24.3 },
    // the sick bay: three guards and the med-kits they are sitting on
    { t: "alien", x: 4.5, y: 15.5, face: 0.8 }, { t: "alien", x: 7.4, y: 14.6, face: 1.57 }, { t: "alien", x: 5.5, y: 17.5, face: 0 },
    { t: "health", x: 3.6, y: 14.6 }, { t: "health", x: 7.4, y: 17.5 }, { t: "health", x: 3.6, y: 17.5 },
    { t: "lamp", x: 8.4, y: 14.6 },
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
    [11, 21, FACE.E, "cables"], [11, 20, FACE.E, "screen"],
    [22, 4, FACE.W, "keycard"],
    [23, 4, FACE.S, "camera"], [22, 19, FACE.E, "sign"],
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
    { t: "health", x: 36.5, y: 5.5 },
    { t: "grenade", x: 29.5, y: 18.5 }, { t: "lamp", x: 29.5, y: 17.5 }, { t: "lamp", x: 23.5, y: 13.5 },
    { t: "canister", x: 30.4, y: 23.5 }, { t: "canister", x: 29.6, y: 23.5 },
    // freight lift
    { t: "alien", x: 40.5, y: 15.5, face: 3.1 }, { t: "alien", x: 41.5, y: 20.5, face: 2.4 },
    { t: "health", x: 42.5, y: 14.5 }, { t: "lamp", x: 38.6, y: 13.6 }, { t: "lamp", x: 38.6, y: 20.4 },
    // the ordnance locker: three guards sitting on the grenades
    { t: "alien", x: 6.6, y: 23.5, face: 1.57 }, { t: "alien", x: 9.5, y: 22.6, face: 1.57 }, { t: "alien", x: 8.0, y: 26.5, face: -1.57 },
    { t: "grenade", x: 6.6, y: 26.5 }, { t: "grenade", x: 9.5, y: 26.4 }, { t: "grenade", x: 8.0, y: 22.6 },
    { t: "health", x: 6.5, y: 24.6 }, { t: "lamp", x: 10.4, y: 27.4 },
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
    [7, 8, FACE.E, "screen"], [15, 8, FACE.W, "sign"], [12, 19, FACE.N, "arrowR", true],
    [16, 3, FACE.S, "sign"], [39, 16, FACE.W, "keycard"],
    [39, 20, FACE.W, "arrowR", true], [39, 12, FACE.W, "cables"], [47, 20, FACE.W, "arrowR", true],
    [39, 6, FACE.W, "cables"], [39, 9, FACE.W, "screen"],
  ];
  const SPRITES: NonNullable<LevelDef["SPRITES"]> = [
    { t: "lamp", x: 3.6, y: 15.6 }, { t: "lamp", x: 7.4, y: 15.6 },
    // the arms locker: the rifle, and two guards who have not heard you yet
    { t: "rifle", x: 11.5, y: 8.5 }, { t: "vest", x: 13.5, y: 6.5 },
    { t: "alienBack", x: 9.5, y: 7.5, face: 1.57, stomp: true }, { t: "alien", x: 13.5, y: 10.5, face: 3.1 },
    { t: "lamp", x: 11.5, y: 6.5 },
    // the flight deck, north of the shuttle
    { t: "alien", x: 18.5, y: 6.5, face: 1.57 }, { t: "alien", x: 21.5, y: 9.5, face: 0 },
    { t: "alien", x: 26.5, y: 7.5, face: 1.57 }, { t: "alien", x: 31.5, y: 6.5, face: 3.1 },
    { t: "alien", x: 35.5, y: 9.5, face: 3.1 }, { t: "alienBack", x: 37.5, y: 12.5, face: -1.57, stomp: true },
    { t: "alien", x: 19.5, y: 13.5, face: 1.57 },
    { t: "health", x: 17.5, y: 5.5 }, { t: "lamp", x: 20.5, y: 5.5 }, { t: "lamp", x: 34.5, y: 5.5 }, { t: "canister", x: 29.4, y: 11.5 }, { t: "canister", x: 30.3, y: 11.5 },
    // and south of it
    { t: "alien", x: 17.5, y: 20.5, face: 1.57 }, { t: "alien", x: 20.5, y: 24.5, face: 0 },
    { t: "alien", x: 25.5, y: 21.5, face: 1.57 }, { t: "alien", x: 29.5, y: 25.5, face: 3.1 },
    { t: "alien", x: 33.5, y: 22.5, face: 3.1 }, { t: "alienBack", x: 37.5, y: 25.5, face: -1.57, stomp: true },
    { t: "alien", x: 19.5, y: 17.5, face: 0 },
    { t: "health", x: 18.5, y: 26.5 }, { t: "lamp", x: 20.5, y: 26.5 }, { t: "lamp", x: 34.5, y: 26.5 }, { t: "canister", x: 24.4, y: 19.5 },
    // the control tower: the keycard for the launch lift
    { t: "keycard", x: 22.5, y: 31.5 }, { t: "alien", x: 19.5, y: 31.5, face: 0 }, { t: "alien", x: 24.5, y: 31.5, face: 3.1 },
    { t: "holo", x: 22.5, y: 30.6 }, { t: "health", x: 25.5, y: 32.5 },
    // the launch lift
    { t: "alien", x: 42.5, y: 19.5, face: 3.1 }, { t: "alien", x: 44.5, y: 24.5, face: 2.4 },
    { t: "health", x: 45.5, y: 18.5 }, { t: "lamp", x: 40.6, y: 17.6 }, { t: "lamp", x: 40.6, y: 25.4 },
    // the fuel bay, behind the false wall
    { t: "alien", x: 41.5, y: 6.5, face: 3.1 }, { t: "alien", x: 45.5, y: 6.5, face: 3.1 }, { t: "alien", x: 43.5, y: 10.5, face: -1.57 },
    { t: "vest", x: 43.5, y: 6.5 }, { t: "health", x: 46.5, y: 8.5 },
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
    [12, 13, FACE.E, "arrowR"],
    [13, 22, FACE.E, "sign"], [16, 22, FACE.W, "arrowR"], [9, 25, FACE.E, "cables"],
    [9, 28, FACE.E, "screen"], [39, 15, FACE.W, "keycard"], [39, 18, FACE.W, "arrowR", true],
    [44, 15, FACE.W, "arrowR", true], [25, 13, FACE.E, "sign"], [33, 3, FACE.S, "camera"],
    [39, 12, FACE.W, "cables"],
  ];
  const SPRITES: NonNullable<LevelDef["SPRITES"]> = [
    { t: "lamp", x: 3.6, y: 13.6 }, { t: "lamp", x: 7.4, y: 13.6 },
    // germination hall: four rack rows, six of them working between them
    { t: "alien", x: 13.5, y: 9.5, face: 1.57 }, { t: "alienBack", x: 20.5, y: 11.5, face: -1.57, stomp: true },
    { t: "alien", x: 16.5, y: 14.5, face: 0 }, { t: "alien", x: 20.5, y: 17.5, face: 3.1 },
    { t: "alien", x: 14.5, y: 20.5, face: 1.57 }, { t: "alien", x: 18.5, y: 8.5, face: 0 },
    { t: "health", x: 21.5, y: 8.5 }, { t: "lamp", x: 17.5, y: 8.5 }, { t: "lamp", x: 17.5, y: 21.5 }, { t: "canister", x: 21.4, y: 21.5 },
    // growing hall: the densest room in the game, and the water runs down the middle
    { t: "alien", x: 26.5, y: 5.5, face: 1.57 }, { t: "alien", x: 33.5, y: 5.5, face: 1.57 },
    { t: "alien", x: 38.5, y: 7.5, face: 3.1 }, { t: "alien", x: 33.5, y: 10.5, face: 0 },
    { t: "alienBack", x: 26.5, y: 12.5, face: 1.57, stomp: true }, { t: "alien", x: 38.5, y: 14.5, face: 3.1 },
    { t: "alien", x: 33.5, y: 16.5, face: 1.57 }, { t: "alien", x: 26.5, y: 19.5, face: 1.57 },
    { t: "alien", x: 33.5, y: 23.5, face: 3.1 }, { t: "alienBack", x: 38.5, y: 22.5, face: -1.57, stomp: true },
    { t: "alien", x: 30.5, y: 26.5, face: 3.1 }, { t: "alien", x: 36.5, y: 26.5, face: 3.1 },
    { t: "health", x: 38.5, y: 4.5 },
    { t: "vest", x: 33.5, y: 26.5 }, { t: "lamp", x: 33.5, y: 4.5 }, { t: "lamp", x: 33.5, y: 14.5 }, { t: "lamp", x: 33.5, y: 25.5 },
    { t: "canister", x: 26.4, y: 10.5 }, { t: "canister", x: 26.6, y: 17.5 },
    // pump room: dark, loud, and the keycard is down here
    { t: "keycard", x: 15.5, y: 27.5 }, { t: "alien", x: 11.5, y: 28.5, face: 0 },
    { t: "alien", x: 18.5, y: 26.5, face: 3.1 }, { t: "alienBack", x: 15.5, y: 25.5, face: -1.57, stomp: true },
    { t: "health", x: 10.5, y: 25.5 }, { t: "lamp", x: 15.5, y: 29.5 },
    // the seed vault, behind the false wall
    { t: "alien", x: 4.5, y: 22.5, face: 1.57 }, { t: "alien", x: 7.5, y: 22.5, face: 1.57 }, { t: "alien", x: 5.5, y: 27.5, face: -1.57 },
    { t: "health", x: 3.5, y: 25.5 }, { t: "health", x: 7.5, y: 25.5 }, { t: "vest", x: 3.5, y: 27.5 }, { t: "lamp", x: 6.5, y: 28.4 },
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



// Level 7: "The Spine" — the ship's central transit corridor, and the first
// deck that is about DISTANCE. Everything until now has been rooms: the
// longest clear sight line in decks 1 to 6 is about fourteen squares. The
// spine is thirty-five, five squares wide and straight, and that changes the
// fight completely — you are shot at from further than you can reliably hit
// back, so the way through is cover to cover rather than room to room, and
// the rifle you took off the flight deck is what makes it survivable.
//
// Two keycards, which is new. The red one opens the midships bulkhead
// halfway down the spine and the blue one opens the lift at the far end, so
// the deck is a there-and-back rather than a straight line: you pass the same
// corridor three times, and it is never the same corridor twice because of
// what you left alive in it.
//
// Grenades come back here, and the corridor is why. A grenade down a
// thirty-five-square hallway is the one place in the game where the three
// questions it costs are obviously worth answering.
export const LEVEL7: LevelDef = (() => {
  const W = 56, H = 36;
  const AREAS: NonNullable<LevelDef["AREAS"]> = {
    lift:  { r: [3, 16, 7, 20],    name: "1 Spine lift",        light: [0.84, 0.9, 1.02],  wall: "panel",    floor: "fTile",    ceil: "light" },
    corA:  { r: [9, 17, 11, 19],   name: "",                    light: [0.6, 0.66, 0.82],  wall: "corridor", floor: "fGrate",   ceil: "corridor" },
    spineW:{ r: [12, 16, 27, 20],  name: "2 Spine, forward",    light: [0.72, 0.78, 0.94], wall: "hall",     floor: "fCatwalk", ceil: "grid", ceilH: 2.4 },
    spineE:{ r: [29, 16, 46, 20],  name: "4 Spine, aft",        light: [0.72, 0.78, 0.94], wall: "hall",     floor: "fCatwalk", ceil: "grid", ceilH: 2.4 },
    bayA:  { r: [13, 4, 22, 14],   name: "3 Port service bay",  light: [0.66, 0.72, 0.88], wall: "control",  floor: "fTile",    ceil: "light" },
    bayB:  { r: [14, 22, 23, 32],  name: "Pump gallery",        light: [0.4, 0.46, 0.6],   wall: "pipes",    floor: "fHazard",  ceil: "dark" },
    bayC:  { r: [30, 4, 40, 14],   name: "Starboard magazine",  light: [0.5, 0.56, 0.7],   wall: "cargo",    floor: "fHazard",  ceil: "dark" },
    bayD:  { r: [31, 22, 43, 32],  name: "5 Signal office",     light: [0.86, 0.9, 1.04],  wall: "bridge",   floor: "fBridge",  ceil: "light" },
    cache: { r: [42, 8, 47, 13],   name: "Deck chief's cache",  light: [0.38, 0.44, 0.58], wall: "panel",    floor: "fHazard",  ceil: "dark" },
    dock:  { r: [48, 15, 53, 21],  name: "6 Aft lift",          light: [0.84, 0.9, 1.02],  wall: "panel",    floor: "fTile",    ceil: "light" },
  };
  const DOORS: NonNullable<LevelDef["DOORS"]> = [
    { cells: [[8, 17], [8, 18], [8, 19]], tex: "door" },                       // out of the lift
    { cells: [[16, 15], [17, 15]], tex: "door" },                              // up into the port service bay
    { cells: [[17, 21], [18, 21]], tex: "door" },                              // down into the pump gallery
    // the midships bulkhead: five cells across the spine, and the red card opens it
    { cells: [[28, 16], [28, 17], [28, 18], [28, 19], [28, 20]], tex: "keyDoor", key: "red" },
    { cells: [[35, 15], [36, 15]], tex: "door" },                              // up into the magazine
    { cells: [[36, 21], [37, 21]], tex: "door" },                              // down into the signal office
    { cells: [[41, 10], [41, 11]], tex: "secret", secret: true },              // the deck chief's cache
    { cells: [[47, 17], [47, 18], [47, 19]], tex: "keyDoor", key: "blue" },    // into the aft lift
    { cells: [[54, 17], [54, 18]], tex: "exit", exit: true },
  ];
  // The tram rails run down the middle of the spine; the gantries either side
  // of them are full height, which is what stops thirty-five squares of
  // corridor being one unbroken shooting lane.
  const GANTRY: [number, number][] = [];
  for (const x of [15, 21, 25, 33, 38, 43]) { GANTRY.push([x, 16], [x, 20]); }
  const BLOCKS: NonNullable<LevelDef["BLOCKS"]> = [
    { cells: GANTRY, tex: "core" },
    ...([[18, 11], [36, 11], [19, 25], [38, 25]] as [number, number][]).map((c) => ({ cells: [c] as [number, number][], tex: "pillar" })),
  ];
  const FLOORS: NonNullable<LevelDef["FLOORS"]> = [
    [12, 18, 46, 18, "fGrate"],                                   // the tram rail itself
    [48, 15, 53, 15, "fHazard"], [48, 21, 53, 21, "fHazard"],
  ];
  const COVER: NonNullable<LevelDef["COVER"]> = [
    // crates along the spine, alternating sides, which is what "cover to
    // cover" actually means on a deck this long
    ...([[14, 17], [19, 19], [23, 17], [26, 19], [31, 19], [35, 17], [40, 19], [45, 17]] as [number, number][]).map((c): [number, number, string] => [c[0], c[1], "crate"]),
    ...([[14, 9], [19, 9], [15, 13], [20, 13]] as [number, number][]).map((c): [number, number, string] => [c[0], c[1], "console"]),
    ...([[15, 23], [20, 27], [16, 27]] as [number, number][]).map((c): [number, number, string] => [c[0], c[1], "crate"]),
    ...([[32, 9], [39, 9], [33, 13], [38, 13]] as [number, number][]).map((c): [number, number, string] => [c[0], c[1], "crate"]),
    ...([[33, 23], [41, 23], [34, 27], [40, 27]] as [number, number][]).map((c): [number, number, string] => [c[0], c[1], "console"]),
    [43, 9, "crate"], [46, 12, "crate"],
  ];
  const WALL_OVERRIDE = (ai: string, f: number, x: number, y: number): string | undefined => {
    if (ai === "lift" && f === FACE.E && x === 2 && y === 18) return "exit";
    if (ai === "bayD" && f === FACE.N && y === 29) return x >= 34 && x <= 40 ? "window" : "computer";
    if (ai === "bayC" && f === FACE.S && y === 7) return "rack";
    // ⚠️ "hazardPanel", not "hall". `wall: "hall"` on an AREA is a PATTERN
    // name that world.ts turns into pillar/tank/hazardPanel; WALL_OVERRIDE
    // returns a real TEXTURE name. Returning the pattern drew nothing, and
    // the check that caught it was written ten minutes earlier for exactly
    // this class of mistake one file over.
    if (ai === "spineW" && f === FACE.S && y === 15) return x % 4 === 0 ? "pillar" : "hazardPanel";
    if (ai === "spineE" && f === FACE.N && y === 21) return x % 4 === 0 ? "pillar" : "hazardPanel";
    return undefined;
  };
  const DECALS: NonNullable<LevelDef["DECALS"]> = [
    [6, 15, FACE.S, "arrowR"], [14, 15, FACE.S, "arrowR"], [22, 15, FACE.S, "arrowR"], [31, 15, FACE.S, "arrowR"], [41, 15, FACE.S, "arrowR"],
  ];
  const SPRITES: NonNullable<LevelDef["SPRITES"]> = [
    { t: "lamp", x: 3.6, y: 16.6 }, { t: "lamp", x: 7.4, y: 16.6 },
    // the forward spine
    { t: "alien", x: 16.5, y: 17.5, face: 3.1 }, { t: "alien", x: 20.5, y: 19.5, face: 3.1 },
    { t: "alien", x: 24.5, y: 17.5, face: 3.1 }, { t: "alienBack", x: 26.5, y: 17.5, face: 0, stomp: true },
    { t: "lamp", x: 18.5, y: 16.6 }, { t: "lamp", x: 24.5, y: 20.4 },
    { t: "health", x: 13.5, y: 19.5 }, // the port service bay, and the red card
    { t: "keycard", x: 17.5, y: 9.5, key: "red" },
    { t: "alien", x: 14.5, y: 11.5, face: 0 }, { t: "alien", x: 19.5, y: 12.5, face: 3.1 },
    { t: "alienBack", x: 16.5, y: 13.5, face: -1.57, stomp: true },
    { t: "lamp", x: 16.5, y: 8.6 },
    { t: "alien", x: 15.5, y: 5.5, face: 1.57 }, { t: "alien", x: 21.5, y: 6.5, face: 3.1 },
    { t: "health", x: 21.5, y: 4.5 },
    // the pump gallery, dark and off the route
    { t: "alien", x: 17.5, y: 24.5, face: 1.57 }, { t: "alien", x: 19.5, y: 27.5, face: 3.1 },
    { t: "health", x: 15.5, y: 26.5 }, { t: "canister", x: 20.4, y: 23.5 }, { t: "canister", x: 21.3, y: 23.5 },
    { t: "alien", x: 22.5, y: 30.5, face: 3.1 },
    // the aft spine
    { t: "alien", x: 30.5, y: 17.5, face: 3.1 }, { t: "alien", x: 34.5, y: 19.5, face: 3.1 },
    { t: "alien", x: 37.5, y: 17.5, face: 0 }, { t: "alien", x: 41.5, y: 19.5, face: 3.1 },
    { t: "alien", x: 44.5, y: 17.5, face: 3.1 }, { t: "alienBack", x: 45.5, y: 19.5, face: 0, stomp: true },
    { t: "lamp", x: 32.5, y: 16.6 }, { t: "lamp", x: 42.5, y: 20.4 },
    { t: "health", x: 45.5, y: 16.5 },
    // the magazine: the grenades, and what is guarding them
    { t: "grenade", x: 34.5, y: 9.5 }, { t: "grenade", x: 37.5, y: 12.5 },
    { t: "alien", x: 32.5, y: 12.5, face: 0 }, { t: "alien", x: 39.5, y: 11.5, face: 3.1 },
    { t: "alien", x: 35.5, y: 5.5, face: 1.57 }, { t: "alien", x: 31.5, y: 6.5, face: 0 },
    { t: "grenade", x: 39.5, y: 5.5 },
    // the signal office, and the blue card
    { t: "keycard", x: 40.5, y: 25.5, key: "blue" },
    { t: "alien", x: 34.5, y: 25.5, face: 0 }, { t: "alien", x: 38.5, y: 22.5, face: 1.57 },
    { t: "alienBack", x: 41.5, y: 27.5, face: -1.57, stomp: true },
    { t: "lamp", x: 37.5, y: 22.6 }, { t: "holo", x: 35.5, y: 27.5 },
    { t: "alien", x: 42.5, y: 30.5, face: 3.1 }, { t: "vest", x: 33.5, y: 27.5 },
    // the cache behind the false wall: nothing the deck needs
    { t: "health", x: 44.5, y: 9.5 }, { t: "health", x: 46.5, y: 11.5 }, { t: "vest", x: 44.5, y: 12.5 },
    { t: "alien", x: 43.5, y: 11.5, face: 0 }, { t: "alien", x: 47.5, y: 9.5, face: 3.1 },
    { t: "alien", x: 46.5, y: 13.5, face: 1.57 },
    // the aft lift
    { t: "lamp", x: 50.5, y: 16.5 }, { t: "alien", x: 51.5, y: 20.5, face: 3.1 },
  ];
  const LIGHTS = [
    { x: 5, y: 18, rgb: [0.5, 0.6, 0.8] as [number, number, number], r: 5 },
    { x: 18, y: 18, rgb: [0.42, 0.5, 0.68] as [number, number, number], r: 7 },
    { x: 37, y: 18, rgb: [0.42, 0.5, 0.68] as [number, number, number], r: 7 },
    { x: 17, y: 11, rgb: [0.4, 0.46, 0.6] as [number, number, number], r: 6 },
    { x: 37, y: 25, rgb: [0.5, 0.56, 0.72] as [number, number, number], r: 6 },
    { x: 50, y: 18, rgb: [0.5, 0.6, 0.8] as [number, number, number], r: 5 },
  ];
  const START = { x: 5.5, y: 18.5, angle: 0 };
  // ⚠️ EVERY LEG DOWN THE SPINE RUNS AT y = 18.5, NOT y = 18. The crates sit
  // at y = 17 and y = 19 and the player is a circle of radius 0.22, so a leg
  // drawn exactly along the boundary at y = 18.0 reaches 0.22 into the row
  // above and jams on a crate the floor-sample check cannot see — it samples
  // a point, and a point on the line is in the clear. Found by walking it.
  // Waypoints belong in the middle of a square, not on its edge.
  const ROUTE = [[5.5, 18.5], [10, 18.5], [13, 18.5], [16.5, 18.5], [16.5, 16.5], [16.5, 13], [17.5, 10], [16.5, 13], [16.5, 16.5], [20, 18.5], [27, 18.5], [30, 18.5], [36.5, 18.5], [36.5, 20.5], [36.5, 23.5], [40.5, 25.5], [36.5, 23.5], [36.5, 20.5], [40, 18.5], [46, 18.5], [50, 18.5], [53, 18.5]];
  const ALT_ROUTE = [[13, 18.5], [17.5, 19.5], [17.5, 21.5], [18, 26], [17.5, 21.5], [24, 18.5], [27, 18.5]];
  const INTRO = "The spine. Thirty-five squares of straight corridor and nothing kind about it. Red card opens the bulkhead halfway down.";
  const HINTS: NonNullable<LevelDef["HINTS"]> = {
    spineW: "Don't walk it. Go crate to crate — they can shoot you from further than you can hit them.",
    bayA: "Red card should be in here. Watch the one with its back turned.",
    bayC: "Ordnance. A grenade costs one question, and down a corridor this long it is worth it.",
    bayD: "Blue card's on the desk. That opens the aft lift.",
    bayB: "Dark down here, and nothing the deck needs. Up to you.",
  };
  const OBJECTIVES: NonNullable<LevelDef["OBJECTIVES"]> = [
    { text: "Find the red keycard", at: [17.5, 9.5], until: "keycard", key: "red" },
    { text: "Find the blue keycard", at: [40.5, 25.5], until: "keycard", key: "blue" },
    { text: "Reach the aft lift", at: [50.5, 18] },
  ];
  const LOCKED_HINTS = {
    red: "Midships bulkhead. The red card's in the port service bay, back up the spine on your left.",
    blue: "Aft lift. The blue card's in the signal office, south side of the spine.",
  };
  const LABELS = [
    { text: "Thirty-five squares, straight", at: [29, 14] },
    { text: "Red card", at: [17, 7] },
    { text: "Blue card", at: [40, 29] },
  ];
  const LEGEND = "Two keycards, one corridor, three times.";
  return { INTRO, HINTS, OBJECTIVES, LOCKED_HINTS, TITLE: "Level 7 — The Spine", W, H, AREAS, DOORS, BLOCKS, FLOORS, COVER, WALL_OVERRIDE, DECALS, SPRITES, LIGHTS, START, ROUTE, ALT_ROUTE, LABELS, LEGEND };
})();



// Level 8: "Cryo bay" — four halls of stasis pods with the lights down to
// emergency level, and the darkest deck in the game at 0.36 mean light
// against the cargo hold's 0.49.
//
// ⚠️ This deck was written as "the one with no ammunition on the floor", and
// that is no longer what makes it special: from deck 5 onwards none of them
// place any, because a measurement showed a full clear of all nine decks
// could cost zero questions. The comment is corrected rather than left to
// quietly boast about something now true of half the ship. What this deck
// still is: the darkest, the most broken up, and the first one where the
// answer-for-every-round rule was the whole point rather than a side effect.
//
// The pods are full-height blocks in rows, and the rows of one hall do not
// line up with the rows of the next — the same trick as the hydroponics
// racks, except the lights are off as well, so the aisles hide you properly
// and you cannot see what is coming down them.
export const LEVEL8: LevelDef = (() => {
  const W = 58, H = 38;
  const AREAS: NonNullable<LevelDef["AREAS"]> = {
    lift:  { r: [3, 17, 7, 21],   name: "1 Cryo lift",       light: [0.6, 0.66, 0.8],   wall: "panel",    floor: "fTile",   ceil: "light" },
    corW:  { r: [9, 8, 12, 30],   name: "",                  light: [0.3, 0.34, 0.46],  wall: "corridor", floor: "fGrate",  ceil: "dark" },
    hallA: { r: [14, 6, 27, 18],  name: "2 Cryo hall A",     light: [0.26, 0.3, 0.44],  wall: "cargo",    floor: "fTile",   ceil: "dark" },
    hallB: { r: [14, 21, 27, 33], name: "3 Cryo hall B",     light: [0.26, 0.3, 0.44],  wall: "cargo",    floor: "fTile",   ceil: "dark" },
    walk:  { r: [29, 6, 33, 33],  name: "4 Control walk",    light: [0.42, 0.47, 0.6],  wall: "control",  floor: "fCatwalk", ceil: "grid" },
    hallC: { r: [35, 6, 48, 18],  name: "5 Cryo hall C",     light: [0.24, 0.28, 0.42], wall: "cargo",    floor: "fTile",   ceil: "dark" },
    hallD: { r: [35, 21, 48, 33], name: "6 Revival bay",     light: [0.34, 0.38, 0.52], wall: "control",  floor: "fTile",   ceil: "dark" },
    store: { r: [36, 1, 45, 4],   name: "Medical store",     light: [0.3, 0.34, 0.48],  wall: "panel",    floor: "fTile",   ceil: "dark" },
    ctrl:  { r: [50, 21, 55, 28], name: "7 Cryo control",    light: [0.7, 0.75, 0.9],   wall: "bridge",   floor: "fBridge", ceil: "light" },
  };
  const DOORS: NonNullable<LevelDef["DOORS"]> = [
    { cells: [[8, 18], [8, 19], [8, 20]], tex: "door" },
    { cells: [[13, 11], [13, 12]], tex: "door" },
    { cells: [[13, 26], [13, 27]], tex: "door" },
    { cells: [[28, 11], [28, 12]], tex: "door" },
    { cells: [[28, 26], [28, 27]], tex: "door" },
    { cells: [[34, 11], [34, 12]], tex: "door" },
    { cells: [[34, 26], [34, 27]], tex: "door" },
    { cells: [[40, 5], [41, 5]], tex: "secret", secret: true },
    { cells: [[49, 24], [49, 25]], tex: "keyDoor", key: "blue" },
    { cells: [[56, 24], [56, 25]], tex: "exit", exit: true },
  ];
  // The pod rows. ⚠️ The gaps in one hall never line up with the gaps in the
  // next, so an aisle that hides you from the room you are in shows you to
  // the room you are walking into — the hydroponics rule, in the dark.
  const pods = (x0: number, x1: number, rows: [number, number][]) => {
    const cells: [number, number][] = [];
    for (const [y, gap] of rows) for (let x = x0; x <= x1; x++) if (x < gap || x > gap + 1) cells.push([x, y]);
    return cells;
  };
  const BLOCKS: NonNullable<LevelDef["BLOCKS"]> = [
    { cells: pods(15, 26, [[8, 19], [12, 23], [16, 17]]), tex: "cryo" },
    { cells: pods(15, 26, [[23, 17], [27, 21], [31, 25]]), tex: "cryo" },
    { cells: pods(36, 47, [[8, 43], [12, 37], [16, 41]]), tex: "cryo" },
    { cells: pods(36, 47, [[24, 39], [28, 44], [32, 36]]), tex: "cryo" },
  ];
  const FLOORS: NonNullable<LevelDef["FLOORS"]> = [
    [29, 6, 33, 6, "fHazard"], [29, 33, 33, 33, "fHazard"],
    [50, 21, 55, 21, "fGrate"],
  ];
  const COVER: NonNullable<LevelDef["COVER"]> = [
    ...([[16, 10], [25, 14], [18, 14], [24, 10]] as [number, number][]).map((c): [number, number, string] => [c[0], c[1], "crate"]),
    ...([[16, 25], [25, 29], [21, 33], [17, 29]] as [number, number][]).map((c): [number, number, string] => [c[0], c[1], "crate"]),
    ...([[37, 10], [46, 14], [39, 14], [45, 10]] as [number, number][]).map((c): [number, number, string] => [c[0], c[1], "crate"]),
    ...([[36, 30], [46, 30], [41, 33], [44, 23]] as [number, number][]).map((c): [number, number, string] => [c[0], c[1], "console"]),
    ...([[30, 9], [32, 20], [30, 31]] as [number, number][]).map((c): [number, number, string] => [c[0], c[1], "console"]),
    [51, 27, "console"], [54, 23, "console"],
  ];
  const WALL_OVERRIDE = (ai: string, f: number, x: number, y: number): string | undefined => {
    if (ai === "lift" && f === FACE.E && x === 2 && y === 19) return "exit";
    if (ai === "ctrl" && f === FACE.N && y === 29) return x >= 51 && x <= 54 ? "window" : "computer";
    if (ai === "hallA" && f === FACE.S && y === 5) return "cryo";
    if (ai === "hallC" && f === FACE.N && y === 19) return "cryo";
    if (ai === "walk" && f === FACE.W && x === 34 && y >= 19 && y <= 20) return "cargo";
    return undefined;
  };
  const DECALS: NonNullable<LevelDef["DECALS"]> = [
    [6, 16, FACE.S, "arrowR"], [13, 18, FACE.W, "arrowR", true], [28, 13, FACE.E, "arrowR", true], [28, 21, FACE.E, "arrowR", true],
  ];
  const SPRITES: NonNullable<LevelDef["SPRITES"]> = [
    { t: "lamp", x: 3.6, y: 17.6 }, { t: "lamp", x: 7.4, y: 17.6 },
    // the west corridor
    { t: "alien", x: 10.5, y: 14.5, face: 1.57 }, { t: "alienBack", x: 10.5, y: 24.5, face: -1.57, stomp: true },
    { t: "health", x: 11.5, y: 9.5 },
    // hall A
    { t: "alien", x: 17.5, y: 7.5, face: 0 }, { t: "alien", x: 22.5, y: 10.5, face: 3.1 },
    { t: "alien", x: 16.5, y: 13.5, face: 1.57 }, { t: "alien", x: 25.5, y: 17.5, face: 3.1 },
    { t: "alienBack", x: 20.5, y: 17.5, face: -1.57, stomp: true }, { t: "alien", x: 19.5, y: 11.5, face: 0 },
    { t: "lamp", x: 20.5, y: 6.6 }, { t: "canister", x: 26.4, y: 7.5 },
    // hall B
    { t: "alien", x: 16.5, y: 22.5, face: 0 }, { t: "alien", x: 23.5, y: 25.5, face: 3.1 },
    { t: "alien", x: 19.5, y: 30.5, face: 1.57 }, { t: "alien", x: 26.5, y: 32.5, face: 3.1 },
    { t: "alienBack", x: 15.5, y: 32.5, face: 0, stomp: true },
    { t: "vest", x: 22.5, y: 29.5 }, { t: "canister", x: 26.4, y: 22.5 },
    // the control walk, the one lit strip on the deck
    { t: "alien", x: 31.5, y: 8.5, face: 1.57 }, { t: "alien", x: 31.5, y: 16.5, face: 1.57 },
    { t: "alien", x: 31.5, y: 24.5, face: -1.57 }, { t: "alien", x: 31.5, y: 31.5, face: -1.57 },
    { t: "lamp", x: 30.5, y: 12.5 }, { t: "lamp", x: 30.5, y: 28.5 }, { t: "holo", x: 32.5, y: 18.5 },
    // hall C, the darkest room in the game
    { t: "alien", x: 38.5, y: 7.5, face: 0 }, { t: "alien", x: 44.5, y: 10.5, face: 3.1 },
    { t: "alien", x: 40.5, y: 14.5, face: 1.57 }, { t: "alien", x: 46.5, y: 17.5, face: 3.1 },
    { t: "alienBack", x: 36.5, y: 17.5, face: 0, stomp: true }, { t: "alien", x: 43.5, y: 6.5, face: 1.57 },
    { t: "health", x: 47.5, y: 7.5 },
    // the revival bay, and the blue card
    { t: "keycard", x: 45.5, y: 31.5, key: "blue" },
    { t: "alien", x: 37.5, y: 22.5, face: 0 }, { t: "alien", x: 42.5, y: 25.5, face: 3.1 },
    { t: "alien", x: 46.5, y: 27.5, face: 3.1 }, { t: "alien", x: 39.5, y: 31.5, face: 1.57 },
    { t: "alienBack", x: 47.5, y: 22.5, face: 3.1, stomp: true },
    { t: "lamp", x: 41.5, y: 21.6 }, { t: "holo", x: 43.5, y: 29.5 },
    // the medical store, behind the false wall
    { t: "health", x: 38.5, y: 2.5 }, { t: "health", x: 43.5, y: 3.5 }, { t: "vest", x: 41.5, y: 2.5 },
    { t: "alien", x: 37.5, y: 3.5, face: 0 }, { t: "alien", x: 44.5, y: 2.5, face: 3.1 },
    // cryo control
    { t: "lamp", x: 52.5, y: 22.5 }, { t: "alien", x: 53.5, y: 26.5, face: 3.1 },
    { t: "alien", x: 51.5, y: 22.5, face: 1.57 },
  ];
  const LIGHTS = [
    { x: 5, y: 19, rgb: [0.38, 0.44, 0.58] as [number, number, number], r: 4 },
    { x: 31, y: 12, rgb: [0.3, 0.34, 0.46] as [number, number, number], r: 6 },
    { x: 31, y: 28, rgb: [0.3, 0.34, 0.46] as [number, number, number], r: 6 },
    { x: 41, y: 27, rgb: [0.26, 0.3, 0.42] as [number, number, number], r: 5 },
    { x: 52, y: 24, rgb: [0.5, 0.56, 0.7] as [number, number, number], r: 5 },
  ];
  const START = { x: 5.5, y: 19.5, angle: 0 };
  // ⚠️ The aisles are at y = 9-11, 13-15 and so on; the pod rows sit at 8, 12
  // and 16, and the gaps in them never line up between halls. Every leg below
  // stays in an aisle or goes through a gap on purpose — the route is the
  // signposted way through, so it has to be a way you can actually walk.
  const ROUTE = [[5.5, 19.5], [10.5, 19.5], [10.5, 12], [14, 11.5], [19, 11.5], [24, 11.5], [28.5, 11.5], [31, 12], [31, 20], [31, 26.5], [34.5, 26.5], [40, 26.5], [44.5, 26.5], [44.5, 31], [45.5, 31.5], [44.5, 31], [44.5, 26.5], [48, 24.5], [52, 24.5], [55, 24.5]];
  const ALT_ROUTE = [[10.5, 19.5], [10.5, 26.5], [14, 26.5], [20, 26], [26, 26.5], [28.5, 26.5], [31, 26.5]];
  const INTRO = "Cryo bay. Emergency lighting only, and nobody stocked a crypt — every round down here comes from a question.";
  const HINTS: NonNullable<LevelDef["HINTS"]> = {
    hallA: "Pods are solid. Use the aisles, and remember the next hall's rows don't line up with these.",
    walk: "The walk's the only lit thing on the deck. Crossing it, you're visible.",
    hallC: "Darkest room on the ship. Stand still and they won't see you at four squares.",
    hallD: "Blue card's in here. So are five of them.",
    corW: "Lights are on emergency only. Walk, don't run.",
  };
  const OBJECTIVES: NonNullable<LevelDef["OBJECTIVES"]> = [
    { text: "Find the blue keycard", at: [45.5, 31.5], until: "keycard", key: "blue" },
    { text: "Reach cryo control", at: [52.5, 24.5] },
  ];
  const LOCKED_HINT = "Locked. The blue card is in the revival bay, south-east of the control walk.";
  const LABELS = [
    { text: "Darkest deck on the ship", at: [21, 19.5] },
    { text: "Blue card", at: [45, 35] },
  ];
  const LEGEND = "Four halls, no ammunition, emergency lighting.";
  return { INTRO, HINTS, OBJECTIVES, LOCKED_HINT, TITLE: "Level 8 — Cryo bay", W, H, AREAS, DOORS, BLOCKS, FLOORS, COVER, WALL_OVERRIDE, DECALS, SPRITES, LIGHTS, START, ROUTE, ALT_ROUTE, LABELS, LEGEND };
})();



// Level 9: "Observation deck" — the last deck before the boss, the biggest
// in the game, and the one that inverts the rule deck 4 taught you.
//
// Two spans of it are open to space. There is no air out there, SO NOTHING
// YOU DO MAKES A SOUND ANYONE CAN HEAR: you can empty the rifle in the
// breach and not one of them comes looking, which is the only place in nine
// decks that is true. It is paid for exactly where you would want it to be —
// there is almost no cover out there and the starlight has you lit from one
// end to the other, so you are seen from further away than anywhere else in
// the game. The cargo hold was quiet and blind. This is loud and naked. Both
// keycards are out in it, so there is no way round either span.
//
// The pressurised middle run between the two breaches is the only place on
// the deck where the ordinary rules apply, which makes a three-square-wide
// corridor the safest ground on the ship.
export const LEVEL9: LevelDef = (() => {
  const W = 60, H = 40;
  const AREAS: NonNullable<LevelDef["AREAS"]> = {
    lift:    { r: [3, 18, 7, 22],    name: "1 Observation lift",      light: [0.84, 0.9, 1.02],  wall: "panel",    floor: "fTile",    ceil: "light" },
    corA:    { r: [9, 19, 13, 21],   name: "",                        light: [0.6, 0.66, 0.82],  wall: "corridor", floor: "fGrate",   ceil: "corridor" },
    gallery: { r: [15, 8, 29, 31],   name: "2 Observation gallery",   light: [0.78, 0.84, 1.0],  wall: "obs",      floor: "fBridge",  ceil: "grid", ceilH: 2.6 },
    cache:   { r: [17, 2, 24, 6],    name: "Curator's room",          light: [0.38, 0.44, 0.58], wall: "panel",    floor: "fTile",    ceil: "dark" },
    // ⚠️ `vacuum: true` is the whole new rule, and it is one word on the area
    // rather than anything in world.ts — game.ts asks the area a cell belongs
    // to. `ceil: "stars"` is a PATTERN name, not a texture name; the ceiling
    // patterns live in world.ts and "stars" is the one that maps to cStars.
    breachN: { r: [31, 5, 46, 17],   name: "3 Breached span, north",  light: [0.56, 0.62, 0.82], wall: "obs",      floor: "fHazard",  ceil: "stars", ceilH: 3.4, vacuum: true },
    mid:     { r: [31, 19, 46, 21],  name: "4 Airlock run",           light: [0.74, 0.8, 0.96],  wall: "control",  floor: "fAirlock", ceil: "light" },
    breachS: { r: [31, 23, 46, 35],  name: "5 Breached span, south",  light: [0.56, 0.62, 0.82], wall: "obs",      floor: "fHazard",  ceil: "stars", ceilH: 3.4, vacuum: true },
    dome:    { r: [48, 16, 56, 24],  name: "6 Sensor dome",           light: [0.88, 0.92, 1.06], wall: "bridge",   floor: "fBridge",  ceil: "light" },
  };
  const DOORS: NonNullable<LevelDef["DOORS"]> = [
    { cells: [[8, 19], [8, 20], [8, 21]], tex: "door" },
    { cells: [[14, 19], [14, 20], [14, 21]], tex: "door" },
    { cells: [[20, 7], [21, 7]], tex: "secret", secret: true },               // the curator's room
    { cells: [[30, 19], [30, 20], [30, 21]], tex: "door" },                   // into the airlock run
    { cells: [[36, 18], [37, 18]], tex: "door" },                             // out into the north breach
    // ⚠️ The south airlock is RED-LOCKED, which is what makes both spans
    // compulsory: the red card is out in the north breach, and the blue card
    // that opens the dome is out in the south one. A red card that opened
    // nothing was the first version, and a check caught it — a keycard with
    // no lock is a level telling you to go somewhere for no reason.
    { cells: [[36, 22], [37, 22]], tex: "keyDoor", key: "red" },              // and the south one
    { cells: [[47, 19], [47, 20]], tex: "keyDoor", key: "blue" },             // into the sensor dome
    { cells: [[57, 19], [57, 20]], tex: "exit", exit: true },
  ];
  // Torn hull plating out in the breaches. ⚠️ SIX PIECES, where the first
  // version had twelve, and the difference is the whole deck. Twelve made
  // the breached spans the best-covered rooms on the level — 3.8% of their
  // floor behind something against 2.8% inside — which is the exact opposite
  // of what they are for. Seen on the rendered map; the check that should
  // have caught it was counting waist-high cover only and ignoring the
  // full-height wreckage, which is the kind of thing that hides you most.
  // Three per span, plus two crates, over two rooms of 16 by 13.
  const WRECK: [number, number][] = [[34, 8], [44, 12], [39, 15], [40, 25], [33, 32], [45, 28]];
  const BLOCKS: NonNullable<LevelDef["BLOCKS"]> = [
    { cells: WRECK, tex: "upperHull" },
    ...([[18, 12], [26, 12], [18, 27], [26, 27], [22, 19]] as [number, number][]).map((c) => ({ cells: [c] as [number, number][], tex: "pillar" })),
  ];
  const FLOORS: NonNullable<LevelDef["FLOORS"]> = [
    [31, 19, 46, 19, "fHazard"], [31, 21, 46, 21, "fHazard"],   // the painted edge of the airlock run
    [15, 19, 29, 21, "fGrate"],
  ];
  const COVER: NonNullable<LevelDef["COVER"]> = [
    ...([[17, 10], [27, 10], [17, 29], [27, 29], [20, 16], [24, 23]] as [number, number][]).map((c): [number, number, string] => [c[0], c[1], "console"]),
    ...([[16, 23], [28, 16]] as [number, number][]).map((c): [number, number, string] => [c[0], c[1], "crate"]),
    // four crates in sixteen by thirteen squares, each way out in the open
    ...([[37, 10], [43, 9], [36, 29], [42, 31]] as [number, number][]).map((c): [number, number, string] => [c[0], c[1], "crate"]),
    [50, 22, "console"], [55, 18, "console"], [18, 4, "crate"],
  ];
  const WALL_OVERRIDE = (ai: string, f: number, x: number, y: number): string | undefined => {
    if (ai === "lift" && f === FACE.E && x === 2 && y === 20) return "exit";
    if (ai === "dome" && f === FACE.N && y === 25) return x >= 50 && x <= 54 ? "window" : "computer";
    if (ai === "breachN" && f === FACE.S && y === 4) return x % 2 === 0 ? "window" : "upperHull";
    if (ai === "breachS" && f === FACE.N && y === 36) return x % 2 === 0 ? "window" : "upperHull";
    if (ai === "gallery" && f === FACE.W && x === 14 && (y < 19 || y > 21)) return "window";
    return undefined;
  };
  const DECALS: NonNullable<LevelDef["DECALS"]> = [
    [6, 17, FACE.S, "arrowR"], [12, 18, FACE.S, "arrowR"], [31, 18, FACE.S, "arrowR"], [38, 18, FACE.S, "arrowR"], [43, 18, FACE.S, "arrowR"],
  ];
  const SPRITES: NonNullable<LevelDef["SPRITES"]> = [
    { t: "lamp", x: 3.6, y: 18.6 }, { t: "lamp", x: 7.4, y: 18.6 },
    // the gallery: pressurised, lit, and the last ordinary room on the ship
    { t: "alien", x: 17.5, y: 13.5, face: 0 }, { t: "alien", x: 22.5, y: 10.5, face: 1.57 },
    { t: "alien", x: 27.5, y: 15.5, face: 3.1 }, { t: "alien", x: 19.5, y: 24.5, face: 0 },
    { t: "alien", x: 25.5, y: 28.5, face: 3.1 }, { t: "alien", x: 16.5, y: 19.5, face: 0 },
    { t: "alienBack", x: 28.5, y: 24.5, face: 0, stomp: true }, { t: "alien", x: 23.5, y: 31.5, face: -1.57 },
    { t: "lamp", x: 22.5, y: 8.6 }, { t: "lamp", x: 22.5, y: 31.4 }, { t: "holo", x: 21.5, y: 20.5 },
    { t: "health", x: 28.5, y: 30.5 }, // the curator's room, behind the false wall
    { t: "health", x: 19.5, y: 3.5 }, { t: "vest", x: 22.5, y: 3.5 }, { t: "alien", x: 18.5, y: 2.5, face: 0 }, { t: "alien", x: 23.5, y: 2.5, face: 3.1 },
    // the north breach, and the red card out in the middle of it
    { t: "keycard", x: 39.5, y: 11.5, key: "red" },
    { t: "alien", x: 33.5, y: 7.5, face: 0 }, { t: "alien", x: 37.5, y: 6.5, face: 1.57 },
    { t: "alien", x: 42.5, y: 10.5, face: 3.1 }, { t: "alien", x: 35.5, y: 13.5, face: 0 },
    { t: "alien", x: 44.5, y: 15.5, face: 3.1 }, { t: "alien", x: 40.5, y: 16.5, face: -1.57 },
    { t: "alien", x: 45.5, y: 6.5, face: 3.1 },
    { t: "alien", x: 38.5, y: 8.5, face: 3.1 }, { t: "alien", x: 31.5, y: 11.5, face: 0 },
    { t: "alien", x: 43.5, y: 17.5, face: 3.1 }, { t: "alien", x: 36.5, y: 16.5, face: -1.57 },
    { t: "health", x: 45.5, y: 11.5 },
    // the airlock run: three squares wide, and the only safe ground out here
    { t: "lamp", x: 33.5, y: 20.5 }, { t: "lamp", x: 44.5, y: 20.5 },
    { t: "alien", x: 39.5, y: 20.5, face: 3.1 }, { t: "vest", x: 32.5, y: 20.5 },
    // the south breach, and the blue card
    { t: "keycard", x: 40.5, y: 29.5, key: "blue" },
    { t: "alien", x: 33.5, y: 24.5, face: 0 }, { t: "alien", x: 38.5, y: 26.5, face: 1.57 },
    { t: "alien", x: 43.5, y: 25.5, face: 3.1 }, { t: "alien", x: 35.5, y: 31.5, face: 0 },
    { t: "alien", x: 45.5, y: 32.5, face: 3.1 }, { t: "alien", x: 41.5, y: 34.5, face: -1.57 },
    { t: "alien", x: 32.5, y: 34.5, face: 0 }, { t: "alienBack", x: 46.5, y: 29.5, face: 3.1, stomp: true },
    { t: "alien", x: 37.5, y: 23.5, face: 1.57 }, { t: "alien", x: 44.5, y: 29.5, face: 3.1 },
    { t: "alien", x: 39.5, y: 32.5, face: -1.57 }, { t: "alien", x: 31.5, y: 27.5, face: 0 },
    { t: "health", x: 32.5, y: 28.5 },
    // the sensor dome
    { t: "lamp", x: 50.5, y: 17.5 }, { t: "holo", x: 53.5, y: 20.5 },
    { t: "alien", x: 52.5, y: 23.5, face: 3.1 }, { t: "alien", x: 55.5, y: 20.5, face: 3.1 },
    { t: "health", x: 49.5, y: 23.5 },
  ];
  const LIGHTS = [
    { x: 5, y: 20, rgb: [0.5, 0.6, 0.8] as [number, number, number], r: 5 },
    { x: 22, y: 14, rgb: [0.46, 0.52, 0.7] as [number, number, number], r: 8 },
    { x: 22, y: 26, rgb: [0.46, 0.52, 0.7] as [number, number, number], r: 8 },
    { x: 38, y: 11, rgb: [0.34, 0.4, 0.58] as [number, number, number], r: 9 },
    { x: 38, y: 29, rgb: [0.34, 0.4, 0.58] as [number, number, number], r: 9 },
    { x: 38, y: 20, rgb: [0.5, 0.56, 0.72] as [number, number, number], r: 7 },
    { x: 52, y: 20, rgb: [0.52, 0.6, 0.8] as [number, number, number], r: 6 },
  ];
  const START = { x: 5.5, y: 20.5, angle: 0 };
  const ROUTE = [[5.5, 20.5], [11, 20], [15, 20], [22, 20], [29, 20], [33, 20], [36.5, 20], [36.5, 17], [38, 14], [39.5, 11.5], [38, 14], [36.5, 17], [36.5, 20], [36.5, 23], [38, 26], [40.5, 29.5], [38, 26], [36.5, 23], [36.5, 20], [42, 20], [46, 20], [50, 20], [55, 20]];
  const ALT_ROUTE = [[15, 20], [18, 14], [22, 10], [26, 14], [28, 19], [29, 20]];
  const INTRO = "Observation deck. Two spans are open to space — no air, so no sound. They can't hear you out there. They can see you fine.";
  const HINTS: NonNullable<LevelDef["HINTS"]> = {
    gallery: "Pressurised in here, so the usual rules: they hear what you do.",
    breachN: "No air. Fire all you like, nothing comes looking — but there's no cover and the stars have you lit.",
    mid: "Airlock run. Three squares of normal ship between the two breaches.",
    breachS: "Blue card's out in the open down here. It isn't an accident.",
    dome: "Last lift before the hangar deck. Whatever's down there, this is where you decide you're ready.",
  };
  const OBJECTIVES: NonNullable<LevelDef["OBJECTIVES"]> = [
    { text: "Find the red keycard", at: [39.5, 11.5], until: "keycard", key: "red" },
    { text: "Find the blue keycard", at: [40.5, 29.5], until: "keycard", key: "blue" },
    { text: "Reach the sensor dome", at: [52, 20] },
  ];
  const LOCKED_HINTS = {
    red: "South airlock. The red card is out in the north breach — through the other door.",
    blue: "Sensor dome. Blue card's in the south breach, through the other airlock.",
  };
  const LABELS = [
    { text: "No air — no sound, no cover", at: [38, 3] },
    { text: "Red card", at: [39, 18] },
    { text: "Blue card", at: [40, 37] },
  ];
  const LEGEND = "Loud and naked, where the cargo hold was quiet and blind.";
  return { INTRO, HINTS, OBJECTIVES, LOCKED_HINTS, TITLE: "Level 9 — Observation deck", W, H, AREAS, DOORS, BLOCKS, FLOORS, COVER, WALL_OVERRIDE, DECALS, SPRITES, LIGHTS, START, ROUTE, ALT_ROUTE, LABELS, LEGEND };
})();

// Level 10: "Hangar deck" — the boss.
//
// Deck 9's sensor dome warned you: "Last lift before the hangar deck." This
// is it. A short run through hangar control, and then one big room with the
// Director in it — the alien in the business suit from the boss design on
// the early-access page.
//
// ⚠️ THE FIGHT IS ABOUT THE QUESTIONS, AND THAT IS THE WHOLE DESIGN. He is
// SHIELDED: bullets, the knife and grenades do nothing to him while it is up.
// Four override terminals stand in the corners of the hangar. Press E at one
// and answer three questions — the deck runs at a third while you do, exactly
// as it does for a reload — and the shield drops for eight seconds. One wrong
// answer locks that terminal for ten; one that worked needs twenty-five to
// recharge, so the next window is always across the room, under fire. Every
// miss is owed, as everywhere else, and comes back at your next reload.
//
// ⚠️ SMALLER THAN DECK 9, ON PURPOSE. Decks 7 to 9 each had to be bigger and
// busier than everything before them — Matthew's "increasingly harder and
// bigger" — and check-security enforces it. The boss deck is the exception
// that rule was written to expect: one arena you can see across, because a
// fight you have to find is not a boss fight. The rule now measures the
// run-up only, and says so.
export const LEVEL10: LevelDef = (() => {
  const W = 50, H = 36;
  const AREAS: NonNullable<LevelDef["AREAS"]> = {
    lift:    { r: [3, 16, 7, 20],    name: "1 Hangar lift",     light: [0.84, 0.9, 1.02],  wall: "panel",    floor: "fTile",   ceil: "light" },
    corA:    { r: [9, 17, 14, 19],   name: "",                  light: [0.6, 0.62, 0.78],  wall: "corridor", floor: "fGrate",  ceil: "corridor" },
    control: { r: [16, 12, 24, 24],  name: "2 Hangar control",  light: [0.66, 0.72, 0.9],  wall: "control",  floor: "fTile",   ceil: "grid" },
    // the arena. Red alarm light over a cold blue room, and a ceiling high
    // enough that he does not look like a man in a cupboard
    hangar:  { r: [26, 4, 45, 31],   name: "3 Hangar bay",      light: [0.7, 0.66, 0.78],  wall: "hall",     floor: "fHazard", ceil: "grid", ceilH: 3.0 },
  };
  const DOORS: NonNullable<LevelDef["DOORS"]> = [
    { cells: [[8, 17], [8, 18], [8, 19]], tex: "door" },
    { cells: [[15, 17], [15, 18], [15, 19]], tex: "door" },
    { cells: [[25, 17], [25, 18], [25, 19]], tex: "door" },             // into the hangar
    // ⚠️ The lift out will not move while he is alive — see use() in
    // game.ts. Said over comms the first time you try, rather than being a
    // door that silently does nothing.
    { cells: [[46, 18], [46, 19]], tex: "exit", exit: true },
  ];
  // two parked shuttles' worth of hull and four pillars: enough to break his
  // line of sight, never enough to hide in for long
  const BLOCKS: NonNullable<LevelDef["BLOCKS"]> = [
    { cells: [[33, 9], [34, 9], [35, 9], [36, 9], [37, 9], [33, 10], [34, 10], [35, 10], [36, 10], [37, 10]], tex: "upperHull" },
    { cells: [[33, 25], [34, 25], [35, 25], [36, 25], [37, 25], [33, 26], [34, 26], [35, 26], [36, 26], [37, 26]], tex: "upperHull" },
    ...([[30, 14], [41, 14], [30, 22], [41, 22]] as [number, number][]).map((c) => ({ cells: [c] as [number, number][], tex: "pillar" })),
  ];
  const FLOORS: NonNullable<LevelDef["FLOORS"]> = [
    [27, 5, 44, 30, "fBridge"],                  // the hangar floor, with a hazard border left round it
    [16, 17, 24, 19, "fGrate"],
  ];
  // ⚠️ Crates STOP his bolts (updateBolts kills a bolt on any non-open
  // square), even though he can see over them. So waist-high cover is the
  // real defence against a volley here — crouch-height, one square, and
  // never on the route the par time is measured along.
  const COVER: NonNullable<LevelDef["COVER"]> = [
    ...([[29, 11], [42, 11], [29, 25], [42, 25], [34, 16], [37, 20]] as [number, number][]).map((c): [number, number, string] => [c[0], c[1], "crate"]),
    ...([[19, 14], [22, 15], [17, 21], [20, 22]] as [number, number][]).map((c): [number, number, string] => [c[0], c[1], "console"]),
  ];
  const WALL_OVERRIDE = (ai: string, f: number, x: number, y: number): string | undefined => {
    if (ai === "lift" && f === FACE.E && x === 2 && y === 18) return "exit";
    if (ai === "hangar" && f === FACE.S && y === 3) return x % 3 === 0 ? "pillar" : "window";
    if (ai === "control" && f === FACE.W && x === 25 && (y < 17 || y > 19)) return "window";
    return undefined;
  };
  const DECALS: NonNullable<LevelDef["DECALS"]> = [
    [6, 15, FACE.S, "arrowR"], [12, 16, FACE.S, "arrowR"], [25, 16, FACE.E, "arrowR"], [28, 3, FACE.S, "arrowR"],
    [46, 7, FACE.W, "arrowR"], [43, 32, FACE.N, "arrowR"], [25, 28, FACE.E, "arrowR"],
  ];
  const SPRITES: NonNullable<LevelDef["SPRITES"]> = [
    { t: "lamp", x: 3.6, y: 16.6 }, { t: "lamp", x: 7.4, y: 16.6 },
    { t: "alien", x: 12.5, y: 17.5, face: 3.1 },
    // hangar control: the last ordinary fight, and the last supplies
    { t: "alien", x: 18.5, y: 15.5, face: 0 }, { t: "alien", x: 21.5, y: 13.5, face: 3.1 },
    { t: "alien", x: 19.5, y: 20.5, face: 0 }, { t: "alien", x: 23.5, y: 19.5, face: 3.1 },
    { t: "alien", x: 17.5, y: 18.5, face: 0 }, { t: "alien", x: 21.5, y: 23.5, face: -1.57 },
    { t: "alienBack", x: 20.5, y: 17.5, face: 0, stomp: true },
    { t: "health", x: 17.5, y: 13.5 }, { t: "vest", x: 23.5, y: 23.5 },
    { t: "grenade", x: 23.5, y: 13.5 }, { t: "grenade", x: 17.5, y: 23.5 },
    { t: "holo", x: 20.5, y: 12.5 },
    // the hangar
    { t: "boss", x: 40.5, y: 18.5, face: 3.14 },
    { t: "terminal", x: 26.5, y: 6.5 }, { t: "terminal", x: 45.5, y: 6.5 },
    { t: "terminal", x: 26.5, y: 29.5 }, { t: "terminal", x: 45.5, y: 29.5 },
    { t: "alien", x: 30.5, y: 8.5, face: 0 }, { t: "alien", x: 39.5, y: 12.5, face: 3.1 },
    { t: "alien", x: 33.5, y: 22.5, face: 0 }, { t: "alien", x: 40.5, y: 27.5, face: 3.1 },
    { t: "health", x: 35.5, y: 4.5 }, { t: "health", x: 35.5, y: 31.5 },
    { t: "lamp", x: 27.5, y: 18.5 }, { t: "lamp", x: 44.5, y: 16.5 },
  ];
  const LIGHTS = [
    { x: 5, y: 18, rgb: [0.5, 0.6, 0.8] as [number, number, number], r: 5 },
    { x: 20, y: 18, rgb: [0.42, 0.48, 0.66] as [number, number, number], r: 7 },
    { x: 36, y: 18, rgb: [0.62, 0.2, 0.18] as [number, number, number], r: 10 },   // the alarm
    { x: 28, y: 7, rgb: [0.2, 0.5, 0.36] as [number, number, number], r: 4 },      // and a green glow at each terminal
    { x: 44, y: 7, rgb: [0.2, 0.5, 0.36] as [number, number, number], r: 4 },
    { x: 28, y: 29, rgb: [0.2, 0.5, 0.36] as [number, number, number], r: 4 },
    { x: 44, y: 29, rgb: [0.2, 0.5, 0.36] as [number, number, number], r: 4 },
  ];
  const START = { x: 5.5, y: 18.5, angle: 0 };
  // ⚠️ The route goes past all four terminals before the lift, because that is
  // what beating him takes, and par (15 of the 100 marks) is measured along
  // it. A route straight from the door to the lift would set a par nobody who
  // fights him could ever meet. Waypoints stand a square off each terminal,
  // not on it: they are solid, and a walker aimed at the middle of one jams.
  const ROUTE = [[5.5, 18.5], [11, 18.5], [15, 18.5], [20, 18.5], [25, 18.5], [28.5, 18.5],
    [27.6, 6.5], [44.4, 6.5], [44.4, 29.5], [27.6, 29.5], [28.5, 18.5], [45.2, 18.5]];
  const INTRO = "Hangar deck. Whatever's been running this ship is in there. Stock up in control first.";
  const HINTS: NonNullable<LevelDef["HINTS"]> = {
    control: "Hangar control. Last supplies on the ship — take the grenades, you'll want them.",
    hangar: "That's him. Shielded — bullets won't touch him. Get to a terminal, press E, answer.",
  };
  const OBJECTIVES: NonNullable<LevelDef["OBJECTIVES"]> = [
    { text: "Take down the Director", at: [40.5, 18.5], until: "boss" },
    { text: "Take the lift", at: [45, 18.5] },
  ];
  const LABELS = [
    { text: "Terminals in the corners", at: [36, 2] },
    { text: "The Director", at: [40, 33] },
  ];
  const LEGEND = "One room, one boss, four terminals. The questions are the weapon.";
  return { INTRO, HINTS, OBJECTIVES, TITLE: "Level 10 — Hangar deck", W, H, AREAS, DOORS, BLOCKS, FLOORS, COVER, WALL_OVERRIDE, DECALS, SPRITES, LIGHTS, START, ROUTE, LABELS, LEGEND };
})();

export const LEVELS: LevelDef[] = [LEVEL1, LEVEL2, LEVEL3, LEVEL4, LEVEL5, LEVEL6, LEVEL7, LEVEL8, LEVEL9, LEVEL10];
