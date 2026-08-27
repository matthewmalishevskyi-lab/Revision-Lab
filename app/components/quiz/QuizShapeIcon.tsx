import type { QuizChoiceStyle } from "./quizChoiceStyles";

// One shape, drawn white-on-transparent so it sits on top of whatever
// colour the button behind it is — see quizChoiceStyles.ts for why a shape
// exists at all alongside the colour.
export function QuizShapeIcon({
  shape,
  className,
}: {
  shape: QuizChoiceStyle["shape"];
  className?: string;
}) {
  const common = { fill: "currentColor", "aria-hidden": true as const };

  switch (shape) {
    case "triangle":
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <path d="M12 3.5 L21.5 20.5 L2.5 20.5 Z" />
        </svg>
      );
    case "diamond":
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <path d="M12 2.5 L21.5 12 L12 21.5 L2.5 12 Z" />
        </svg>
      );
    case "circle":
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <circle cx="12" cy="12" r="9.5" />
        </svg>
      );
    case "square":
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
        </svg>
      );
    case "pentagon":
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <path d="M12 2.5 L21 9.4 L17.5 21 L6.5 21 L3 9.4 Z" />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <path d="M12 2.5 L14.7 9.3 L22 9.9 L16.4 14.6 L18.2 21.7 L12 17.8 L5.8 21.7 L7.6 14.6 L2 9.9 L9.3 9.3 Z" />
        </svg>
      );
  }
}
