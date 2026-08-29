import type { QuizChoiceStyle } from "./quizChoiceStyles";

// One shape, drawn white-on-transparent so it sits on top of whatever
// colour the button behind it is — see quizChoiceStyles.ts for why a shape
// exists at all alongside the colour, and for why this set (hexagon, bolt,
// droplet, ring, plus, wave) was drawn from scratch rather than reusing
// Kahoot's own triangle/diamond/circle/square/pentagon/star.
export function QuizShapeIcon({
  shape,
  className,
}: {
  shape: QuizChoiceStyle["shape"];
  className?: string;
}) {
  const common = { fill: "currentColor", "aria-hidden": true as const };

  switch (shape) {
    case "hexagon":
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <path d="M12 2.5 20.4 7.25 20.4 16.75 12 21.5 3.6 16.75 3.6 7.25Z" />
        </svg>
      );
    case "bolt":
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <path d="M14 2 5 13.5 10.5 13.5 9 22 19.5 9.5 13 9.5Z" />
        </svg>
      );
    case "droplet":
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <path d="M12 2C12 2 5 11.2 5 16a7 7 0 0 0 14 0C19 11.2 12 2 12 2Z" />
        </svg>
      );
    case "ring":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="4.5" />
        </svg>
      );
    case "plus":
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <path d="M9 2h6v7h7v6h-7v7H9v-7H2V9h7Z" />
        </svg>
      );
    case "wave":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            d="M2 15c1.7-5.5 4.3-5.5 6-2s4.3 3.5 6 0 4.3-5.5 6-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}
