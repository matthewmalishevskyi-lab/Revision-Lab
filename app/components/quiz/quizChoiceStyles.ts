// The colour + shape pairing every answer button uses — four (or up to six,
// since a few topics' questions have that many choices) bold, distinctly
// shaped buttons rather than a plain list, so an answer is recognised by its
// colour and shape before anyone's even read the text — what makes it feel
// fast and a bit chaotic in a good way, on a phone screen from across a
// room.
//
// ⚠️ DELIBERATELY NOT KAHOOT'S OWN PALETTE OR SHAPES. The first version of
// this used Kahoot's exact four colours (#e21b3c/#1368ce/#d89e00/#26890c)
// and exact shapes (triangle/diamond/circle/square, in that order) — which
// is fine as a reference for "colour+shape answer buttons" as a genre, but
// meant this looked like a literal reskin of somebody else's product rather
// than Revision Lab's own. The colours below are pulled straight from
// subjects.ts's own accent palette instead — the same jewel-tone hexes
// already used for biology/chemistry/history/etc — so the quiz feature
// shares a colour language with the rest of the site rather than borrowing
// one. The shapes are a new set with no member in common with Kahoot's, for
// the same reason.
//
// A shape is drawn alongside the colour, not colour alone, for the same
// reason topic icons on the rest of the site are never colour-only: colour
// blindness affects a real fraction of any group of teenagers, and losing
// the ability to spot "which button is right" during reveal would be a
// genuinely bad experience wherever it happened. Same 24×24, `currentColor`
// stroke conventions as Icon.tsx elsewhere on the site — this is drawn as
// its own small file rather than added to that one because these six are a
// closed, specific set (quiz answer shapes), not general-purpose topic
// icons.
export type QuizChoiceStyle = {
  bg: string;
  shape: "hexagon" | "bolt" | "droplet" | "ring" | "plus" | "wave";
};

export const QUIZ_CHOICE_STYLES: QuizChoiceStyle[] = [
  { bg: "#4338ca", shape: "hexagon" }, // indigo — same accent as Science
  { bg: "#b3350b", shape: "bolt" }, // rust — same accent as Maths
  { bg: "#0f766e", shape: "droplet" }, // teal — same accent as Business
  { bg: "#86198f", shape: "ring" }, // fuchsia — same accent as Chemistry
  { bg: "#4d7c0f", shape: "plus" }, // lime — same accent as Biology
  { bg: "#334155", shape: "wave" }, // slate — same accent as Physics
];
