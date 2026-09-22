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
  ];
  // Low cover: waist-high, you can shoot over it and crouch behind it.
  const COVER: NonNullable<LevelDef["COVER"]> = [
    ...[[21, 12], [22, 12], [22, 13], [16, 15], [16, 16], [27, 13], [27, 14], [21, 17], [22, 17]].map((c): [number, number, string] => [c[0], c[1], "crate"]),
    ...[[27, 4], [31, 3]].map((c): [number, number, string] => [c[0], c[1], "crate"]),
    ...[[35, 11], [40, 11], [35, 16], [40, 16]].map((c): [number, number, string] => [c[0], c[1], "console"]),
    ...[[36, 27], [37, 27], [40, 27], [41, 27]].map((c): [number, number, string] => [c[0], c[1], "console"]),
    [11, 22, "crate"],
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
  ];

  // Extra light that spills from bright things, on top of each area's own.
  const LIGHTS: NonNullable<LevelDef["LIGHTS"]> = [
    { x: 37.9, y: 13.9, rgb: [0.25, 0.75, 1.1], r: 5.5 },   // reactor core
    { x: 38.5, y: 24.8, rgb: [0.15, 0.35, 0.6], r: 3.5 },   // holo-table
    { x: 3.5, y: 28.5, rgb: [0.1, 0.2, 0.45], r: 3 },       // airlock window
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
  };
  const DOORS: NonNullable<LevelDef["DOORS"]> = [
    { cells: [[8, 15], [8, 16]], tex: "door" },
    { cells: [[12, 11], [13, 11]], tex: "door" },
    { cells: [[9, 4], [9, 5]], tex: "door" },
    { cells: [[20, 4], [20, 5]], tex: "door" },
    { cells: [[38, 5], [38, 6]], tex: "door" },
    { cells: [[36, 19], [37, 19]], tex: "keyDoor", key: "blue" },
    { cells: [[42, 25], [42, 26]], tex: "exit", exit: true },
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
    [11, 14, "console"], [12, 14, "console"], [14, 17, "console"], [15, 17, "console"],
    [21, 13, "crate"], [37, 14, "crate"], [22, 16, "crate"],
    [41, 7, "crate"], [42, 7, "crate"],
    [35, 26, "crate"], [39, 26, "crate"],
    [15, 5, "console"], [16, 5, "console"],
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
  ];
  const LIGHTS: NonNullable<LevelDef["LIGHTS"]> = [
    { x: 29, y: 10, rgb: [0.3, 0.75, 1.3], r: 8 },
    { x: 20.5, y: 5, rgb: [0.15, 0.3, 0.6], r: 3 },
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
  ];
  // see-through grilles between the vents and the rooms
  const GRILLES: NonNullable<LevelDef["GRILLES"]> = [[22, 9], [26, 9], [30, 13], [30, 17], [32, 18]];
  const COVER: NonNullable<LevelDef["COVER"]> = [
    ...[[22, 13], [23, 13], [22, 18], [23, 18], [26, 13], [27, 13], [26, 18], [27, 18]].map((c): [number, number, string] => [c[0], c[1], "table"]),
    [10, 19, "crate"], [11, 19, "crate"], [14, 23, "crate"], [14, 24, "crate"], [10, 24, "crate"],
    [35, 16, "crate"], [38, 20, "crate"], [36, 22, "console"],
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
  ];
  const LIGHTS: NonNullable<LevelDef["LIGHTS"]> = [{ x: 24.5, y: 16, rgb: [0.15, 0.18, 0.2], r: 5 }];
  const START = { x: 5.5, y: 22, angle: 0 };
  const ROUTE = [[5.5, 22], [11, 22], [12.5, 18.5], [12.5, 8.5], [22.5, 8.5], [22.5, 7], [22.5, 8.5], [31.5, 8.5], [31.5, 14.5], [33.5, 14.5], [36.5, 17.5], [40.5, 17.5]];
  const ALT_ROUTE = [[11, 21], [16, 20.8], [19.5, 20.6], [25, 16], [29.5, 21.5], [33.5, 21.5], [36.5, 18]];
  const LABELS = { lift: [5.5, 19.4], storage: [12, 26.4], mess: [24.5, 23.5], barracks: [23, 1.4], exit: [36.8, 11.3] };
  const LEGEND = [["alienBack", "Alien with its back to you"], ["vest", "Vest (armour)"]];
  const INTRO = "This is where the aliens live. The mess hall is full of them. Maybe there's a sneakier way through.";
  const HINTS = {
    storage: "See the vent in the north wall? We could crawl through it. They can't see us in the vents.",
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

export const LEVELS: LevelDef[] = [LEVEL1, LEVEL2, LEVEL3];
