// PixelSprite — turns text "art" into real pixels.
//
// The idea: instead of drawing a character with fiddly SVG curves, we describe
// it as a grid of letters, one letter per pixel, exactly like the sprite sheets
// old consoles used. This component walks that grid and draws one little square
// per letter, colouring it by looking the letter up in a palette.
//
// That means editing a character is as easy as editing text — move an eye by
// moving one letter one space. If you know 2D lists in Python
// (`grid[row][column]`), this is precisely the same idea.

type PixelSpriteProps = {
  // Each string is one row. Every row must be the same length.
  art: string[];
  // Maps a letter to a colour. A letter missing from here (we use ".") is
  // simply not drawn, which is how transparent pixels work.
  palette: Record<string, string>;
  label: string;
  className?: string;
};

export default function PixelSprite({
  art,
  palette,
  label,
  className,
}: PixelSpriteProps) {
  const rows = art.length;
  const cols = art[0].length;

  return (
    <svg
      // The viewBox is measured in PIXELS, not screen units: 16 wide by 18
      // tall. The browser then scales that up to whatever size we ask for.
      viewBox={`0 0 ${cols} ${rows}`}
      // Without this, the browser smooths the edges when scaling up and the
      // sprite goes blurry. This forces hard, chunky, retro edges — it is the
      // single line that makes it look 8-bit instead of like a blown-up JPEG.
      shapeRendering="crispEdges"
      className={className}
      role="img"
      aria-label={label}
    >
      {art.map((row, y) =>
        // `.split("")` turns "..KKW.." into ['.', '.', 'K', 'K', 'W', '.', '.']
        row.split("").map((char, x) => {
          const fill = palette[char];
          if (!fill) return null; // transparent pixel — draw nothing

          return (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width={1}
              height={1}
              fill={fill}
            />
          );
        }),
      )}
    </svg>
  );
}
