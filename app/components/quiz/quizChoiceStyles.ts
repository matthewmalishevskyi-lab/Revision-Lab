// The colour + shape pairing every answer button uses — the actual visual
// language Matthew asked for when he said "make it like Kahoot": four (or
// up to six, since a few topics' questions have that many choices) bold,
// distinctly-shaped buttons rather than a plain list, so an answer is
// recognised by its colour and shape before anyone's even read the text —
// exactly what makes it feel fast and a bit chaotic in a good way, on a
// phone screen from across a room.
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
  shape: "triangle" | "diamond" | "circle" | "square" | "pentagon" | "star";
};

export const QUIZ_CHOICE_STYLES: QuizChoiceStyle[] = [
  { bg: "#e21b3c", shape: "triangle" },
  { bg: "#1368ce", shape: "diamond" },
  { bg: "#d89e00", shape: "circle" },
  { bg: "#26890c", shape: "square" },
  { bg: "#8b3ce2", shape: "pentagon" },
  { bg: "#e2701b", shape: "star" },
];
