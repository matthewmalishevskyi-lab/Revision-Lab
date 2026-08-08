// The cast. Every character is a 32 x 36 pixel grid plus a colour palette.
//
// These were plotted with a small Python script rather than typed by hand, which
// is why they are exactly symmetrical: the script draws the left half, mirrors
// it, then adds the deliberately off-centre details (Quill's raised hand).
//
// HOW TO EDIT ONE: find the row, count across, change a letter. Each letter is
// one pixel and every row must stay exactly 32 characters. "." is transparent.
//
// All three wear glasses - that is the thread that makes them read as a set
// rather than three unrelated drawings.

export type Character = {
  art: string[];
  palette: Record<string, string>;
  label: string;
};

// --- PIXEL - Computer Science --------------------------------------------
// Aerials, a CRT head with faint scanlines across the screen, gold specs,
// a chest plate with a status light, and stubby boots.
export const PIXEL: Character = {
  label:
    "Pixel, the Computer Science mascot: a small robot with a television head",
  art: [
    "......G..................G......", // 00
    ".....GGG................GGG.....", // 01
    "......GKK..............KKG......", // 02
    "........KK............KK........", // 03
    ".........KKK........KKK.........", // 04
    ".....KKKKKKKKKKKKKKKKKKKKKK.....", // 05
    ".....KWWWWWWWWWWWWWWWWWWWWK.....", // 06
    ".....KWRWWWWWWWWWWWWWWWWRWK.....", // 07
    ".....KWWSSSSSSSSSSSSSSSSWWK.....", // 08
    ".....KWWDDDDGDDDDDDGDDDDWWK.....", // 09
    ".....KWWSSGGEGGSSGGEGGSSWWK.....", // 10
    ".....KWWSSGEEEGSSGEEEGSSWWK.....", // 11
    ".....KWWDGEEEEEGGEEEEEGDWWK.....", // 12
    ".....KWWSSGEEEGSSGEEEGSSWWK.....", // 13
    ".....KWWSSGGEGGSSGGEGGSSWWK.....", // 14
    ".....KWWDDDMGDDDDDDGMDDDWWK.....", // 15
    ".....KWWSSSSMSSSSSSMSSSSWWK.....", // 16
    ".....KWWSSSSSMMMMMMSSSSSWWK.....", // 17
    ".....KWRWWWWWWWWWWWWWWWWRWK.....", // 18
    ".....KWWWWWWWWWWWWWWWWWWWWK.....", // 19
    ".....KKKKKKKKKKKKKKKKKKKKKK.....", // 20
    ".............KKKKKK.............", // 21
    ".............KKKKKK.............", // 22
    ".......KKKKKKKKKKKKKKKKKK.......", // 23
    ".......KKKTTTTTTTTTTTTKKK.......", // 24
    ".......KKKTTTSSSSSSTTTKKK.......", // 25
    ".......KKKTTTSSEESSTTTKKK.......", // 26
    ".......KKKTTTSSEESSTTTKKK.......", // 27
    ".......KKKTTTSSSSSSTTTKKK.......", // 28
    ".......WWWTTTTTTTTTTTTWWW.......", // 29
    ".......WWWTTTTTTTTTTTTWWW.......", // 30
    "...........LLLL..LLLL...........", // 31
    "...........LLLL..LLLL...........", // 32
    "...........LLLL..LLLL...........", // 33
    ".........OOOOOO..OOOOOO.........", // 34
    ".........OOOOOO..OOOOOO.........", // 35
  ],
  palette: {
    K: "#0b1a3a", // dark casing and outline
    W: "#e8edf7", // light casing
    S: "#0a2450", // screen
    D: "#08203f", // scanline
    R: "#94a3b8", // rivet
    G: "#fbbf24", // spectacle frames
    E: "#7dd3fc", // eyes and chest light
    M: "#7dd3fc", // smile
    T: "#cbd5e1", // torso
    L: "#94a3b8", // legs
    O: "#0b1a3a", // boots
  },
};

// --- HOOT - Maths --------------------------------------------------------
// Ear tufts, huge round spectacles, a pale chest and folded wings.
// Owls are shorthand for "clever", which does a lot of the work for us.
export const HOOT: Character = {
  label:
    "Hoot, the Maths mascot: an owl wearing large round glasses",
  art: [
    ".........TT..........TT.........", // 00
    "........TTT..........TTT........", // 01
    "........TTTT...BB...TTTT........", // 02
    ".......TTTTBBBBBBBBBBTTTT.......", // 03
    "..........BBBBBBBBBBBB..........", // 04
    ".........BBBBBBBBBBBBBB.........", // 05
    "........BBBBBBBBBBBBBBBB........", // 06
    ".......BBBBGBBBBBBBBGBBBB.......", // 07
    ".......BBGGEGGBBBBGGEGGBB.......", // 08
    ".......BGEEEEEGBBGEEEEEGB.......", // 09
    ".......BGEEEEEGBBGEEEEEGB.......", // 10
    "......BGEEEPEEEGGEEEPEEEGB......", // 11
    ".......BGEPPPEGBBGEPPPEGB.......", // 12
    ".......BGEEPEEGBBGEEPEEGB.......", // 13
    ".......BBGGEGGBBBBGGEGGBB.......", // 14
    ".......BBBBGBBKKKKBBGBBBB.......", // 15
    ".......BBBBBBBBKKBBBBBBBB.......", // 16
    ".......BBBBBBBBKKBBBBBBBB.......", // 17
    ".......BBBBBBBBBBBBBBBBBB.......", // 18
    "......WBBBBBBBBCBBBBBBBBBW......", // 19
    ".....WWWBBBBCCCCCCCBBBBBWWW.....", // 20
    "....WWWWWBBCCCCCCCCCBBBWWWWW....", // 21
    ".....WWWBBCCCCCCCCCCCCBBWWW.....", // 22
    ".....WWWBBCCCCCCCCCCCCBBWWW.....", // 23
    ".....WWWBBCCCCCCCCCCCCBBWWW.....", // 24
    ".....WWWBCCCCCCCCCCCCCBBWWW.....", // 25
    ".....WWWBBCCCCCCCCCCCCBBWWW.....", // 26
    "....WWWWWBCCCCCCCCCCCCBWWWWW....", // 27
    ".....WWWBBCCCCCCCCCCCCBBWWW.....", // 28
    "......WBBBCCCCCCCCCCCCBBBW......", // 29
    ".......BBBCCCCCCCCCCCCBBB.......", // 30
    "..........BBBBBCBBBBBB..........", // 31
    "...........BFFFBBFFFB...........", // 32
    "............FFFBBFFF............", // 33
    "............FFF..FFF............", // 34
    "..........FFFFF..FFFFF..........", // 35
  ],
  palette: {
    T: "#5b2408", // ear tufts
    B: "#7a3a10", // feathers
    W: "#4a1f06", // wings
    C: "#fde9c9", // chest
    G: "#ffe08a", // spectacle frames
    E: "#fffdf7", // eyes
    P: "#3b1a06", // pupils
    K: "#f59e0b", // beak
    F: "#f59e0b", // feet and talons
  },
};

// --- QUILL - English -----------------------------------------------------
// Feathered hat, ruff collar, doublet with buttons and puffed breeches,
// one hand raised to his beard mid-thought.
//
// History note: Shakespeare died in 1616, so this is late 16th / early
// 17th century dress. The 1700s look - tricorn hat, frock coat, powdered
// wig - would read as "founding father" instead.
export const QUILL: Character = {
  label:
    "Quill, the English mascot: an Elizabethan scholar in a ruff, deep in thought",
  art: [
    "..........HHHHHHHHHHHH..........", // 00
    "..........HHHHHHHHHHHH..........", // 01
    "..........HHHHHHHHHHHH..........", // 02
    "..........YYYYYYYYYYYY..........", // 03
    ".....HHHHHHHHHHHHHHHHHHHHHH.....", // 04
    ".....HHHHHHHHHHHHHHHHHHHHHH.....", // 05
    "........RRRRRRRRRRRRRRRR........", // 06
    "........RRFFFFFFFFFFFFRR........", // 07
    "........RRFFFFFFFFFFFFRR........", // 08
    "........RRGGGGGFFGGGGGRR........", // 09
    "........RRGVEVGGGGVEVGRR........", // 10
    "........RRGGGGGFFGGGGGRR........", // 11
    "........RRFFFFFNNFFFFFRR........", // 12
    "........RRFFFFFNNFFFFFRR........", // 13
    "........RRFFFMMMMMMFFFRR........", // 14
    ".......FFFBBBBBBBBBBBBRR........", // 15
    ".......FFFBBBBBBBBBBBBRR........", // 16
    ".......FFFBBBBBBBBBBBB..........", // 17
    ".......FFFBBBBBBBBBBBB..........", // 18
    "....WWAAAWWWWWWWWWWWWWWWWWWW....", // 19
    "....WWAAAWWWWWWWWWWWWWWWWWWW....", // 20
    "....WWAAAWWWWWWWWWWWWWWWWWWW....", // 21
    "......AAADDDDDDDDDDDDDDAAA......", // 22
    "......AAADDDDDDYYDDDDDDAAA......", // 23
    "......AAADDDDDDDDDDDDDDAAA......", // 24
    "......AAADDDDDDYYDDDDDDAAA......", // 25
    "......AAADDDDDDDDDDDDDDAAA......", // 26
    "......AAADDDDDDYYDDDDDDAAA......", // 27
    "......AAADDDDDDDDDDDDDDAAA......", // 28
    ".........DDDDDDDDDDDDDD.........", // 29
    "........PPPPPPPPPPPPPPPP........", // 30
    "........PPPPPPPPPPPPPPPP........", // 31
    "........PPPPPPPPPPPPPPPP........", // 32
    "...........LLL....LLL...........", // 33
    "..........OOOOO..OOOOO..........", // 34
    "..........OOOOO..OOOOO..........", // 35
  ],
  palette: {
    H: "#241040", // hat
    Y: "#ffe08a", // hat band and buttons
    R: "#6b4423", // hair
    F: "#f2cdae", // skin
    G: "#ffe08a", // spectacle frames
    V: "#ffffff", // lenses
    E: "#241040", // eyes
    N: "#e0b48f", // nose
    M: "#8b4a3a", // mouth
    B: "#8a6240", // beard
    W: "#ffffff", // ruff collar
    D: "#3b1d63", // doublet
    A: "#2a1049", // sleeves
    P: "#4c2a7a", // breeches
    L: "#ede0fb", // stockings
    O: "#1c0c33", // shoes
  },
};
