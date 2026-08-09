import type { IconName } from "../lib/subjects";

// One small icon per topic.
//
// All of them are drawn on the same 24x24 grid with the same stroke width and
// no fills, which is what makes a set of icons look like a SET rather than a
// pile of clip art. Consistency matters more than any individual drawing.
//
// They use `currentColor`, so an icon takes the colour of whatever text it sits
// next to — no colour is hard-coded anywhere below.

const PATHS: Record<IconName, React.ReactNode> = {
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.5 2.6 2.5 14.4 0 17M12 3.5c-2.5 2.6-2.5 14.4 0 17" />
    </>
  ),
  binary: (
    <>
      <rect x="3.5" y="4.5" width="7" height="6" rx="1.5" />
      <rect x="13.5" y="13.5" width="7" height="6" rx="1.5" />
      <path d="M13.5 7.5h7M3.5 16.5h7" />
    </>
  ),
  code: <path d="M9 6.5L4 12l5 5.5M15 6.5l5 5.5-5 5.5" />,
  network: (
    <>
      <circle cx="12" cy="5" r="2.5" />
      <circle cx="5" cy="19" r="2.5" />
      <circle cx="19" cy="19" r="2.5" />
      <path d="M12 7.5v4m0 0l-5.5 5m5.5-5l5.5 5" />
    </>
  ),
  chip: (
    <>
      <rect x="6.5" y="6.5" width="11" height="11" rx="2" />
      <path d="M10 3.5v3M14 3.5v3M10 17.5v3M14 17.5v3M3.5 10h3M3.5 14h3M17.5 10h3M17.5 14h3" />
    </>
  ),
  flow: (
    <>
      <rect x="9" y="3.5" width="6" height="5" rx="1.5" />
      <rect x="2.5" y="15.5" width="6" height="5" rx="1.5" />
      <rect x="15.5" y="15.5" width="6" height="5" rx="1.5" />
      <path d="M12 8.5v3.5m0 0H5.5v3.5m6.5-3.5h6.5v3.5" />
    </>
  ),
  terminal: (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
      <path d="M7 10l3 2.5-3 2.5M12.5 15.5h4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.5l7 2.5v5.5c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6z" />
      <path d="M9.5 12l1.8 1.8 3.4-3.6" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="7.5" ry="2.8" />
      <path d="M4.5 6v12c0 1.6 3.4 2.8 7.5 2.8s7.5-1.2 7.5-2.8V6M4.5 12c0 1.6 3.4 2.8 7.5 2.8s7.5-1.2 7.5-2.8" />
    </>
  ),
  logic: (
    <>
      <path d="M5 5h5a7 7 0 010 14H5z" />
      <path d="M2.5 9H5M2.5 15H5M17 12h4.5" />
    </>
  ),
  grid: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
    </>
  ),
  scales: (
    <>
      <path d="M12 4v16M6 20h12M5 8h14M5 8l-2.5 5.5h5zM19 8l2.5 5.5h-5z" />
    </>
  ),
  pencil: (
    <>
      <path d="M4 20l1-4.5L16 4.5a2.1 2.1 0 013 3L8 18.5z" />
      <path d="M14.5 6l3 3" />
    </>
  ),
  hash: <path d="M9 3.5L7 20.5M17 3.5l-2 17M4 9h16M3.5 15h16" />,
  triangle: (
    <>
      <path d="M4 19.5L12 4l8 15.5z" />
      <path d="M8.5 19.5a5 5 0 013-4.5" />
    </>
  ),
  percent: (
    <>
      <circle cx="7" cy="7" r="2.8" />
      <circle cx="17" cy="17" r="2.8" />
      <path d="M19 5L5 19" />
    </>
  ),
  chart: <path d="M4 20V4M4 20h16M8 20v-6M12.5 20V8.5M17 20v-9" />,
  dice: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <circle cx="8.5" cy="8.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="15.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  circle: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 12l6 6M12 12V3.5" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  vector: (
    <>
      <path d="M3.5 20.5C7 20.5 8 3.5 12.5 3.5S18 14 20.5 14" />
    </>
  ),
  book: (
    <>
      <path d="M4 4.5h6a3 3 0 013 3v12a2.5 2.5 0 00-2.5-2.5H4z" />
      <path d="M20 4.5h-6a3 3 0 00-3 3v12a2.5 2.5 0 012.5-2.5H20z" />
    </>
  ),
  feather: (
    <>
      <path d="M19.5 4.5c-6 0-11 3.5-11 9v3l-4 3.5" />
      <path d="M19.5 4.5c0 6-3.5 11-9 11h-2M8.5 12h7" />
    </>
  ),
  quote: (
    <>
      <path d="M9.5 6.5C6.5 7.5 5 10 5 13.5h4v4H4.5v-4M20 6.5c-3 1-4.5 3.5-4.5 7h4v4H15v-4" />
    </>
  ),
  mask: (
    <>
      <path d="M4 5.5h16v6c0 5-3.6 8.5-8 8.5s-8-3.5-8-8.5z" />
      <path d="M8.5 11h1.5M14 11h1.5M9.5 15.5c1.5 1.2 3.5 1.2 5 0" />
    </>
  ),
  news: (
    <>
      <rect x="3.5" y="5" width="17" height="14" rx="2" />
      <path d="M6.5 8.5h6v5h-6zM15.5 8.5h2M15.5 12h2M6.5 16h11" />
    </>
  ),

  // ─── Added for the wider topic list ──────────────────────────────────────
  // Same 24x24 grid, same stroke width, no fills. Sticking to those three
  // rules is the entire reason a set of hand-drawn icons looks deliberate.

  // A stack of storage platters — memory & storage.
  disk: (
    <>
      <ellipse cx="12" cy="6" rx="7.5" ry="2.5" />
      <path d="M4.5 6v5c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5V6" />
      <rect x="4.5" y="15" width="15" height="5" rx="1.5" />
      <path d="M7.5 17.5h.01M10.5 17.5h.01" />
    </>
  ),
  // A cog — system software quietly running underneath everything.
  cog: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.8v2.6M12 18.6v2.6M21.2 12h-2.6M5.4 12H2.8M18.5 5.5l-1.8 1.8M7.3 16.7l-1.8 1.8M18.5 18.5l-1.8-1.8M7.3 7.3L5.5 5.5" />
    </>
  ),
  // Stacked sheets — protocol layers sitting on top of one another.
  layers: (
    <>
      <path d="M12 3.5l8.5 4-8.5 4-8.5-4z" />
      <path d="M3.5 12l8.5 4 8.5-4M3.5 16.5l8.5 4 8.5-4" />
    </>
  ),
  // A bug — defensive design and testing.
  bug: (
    <>
      <rect x="7.5" y="8" width="9" height="11" rx="4.5" />
      <path d="M9.5 8V6.8a2.5 2.5 0 015 0V8" />
      <path d="M7.5 11.5H4M7.5 15.5H4.5M16.5 11.5H20M16.5 15.5H19.5M12 8v11" />
    </>
  ),
  // A toolbox — the languages, translators and IDEs you build with.
  toolbox: (
    <>
      <rect x="3" y="8.5" width="18" height="11" rx="2" />
      <path d="M8.5 8.5V6.5a1.5 1.5 0 011.5-1.5h4a1.5 1.5 0 011.5 1.5v2M3 13h18M10.5 11.5v3M13.5 11.5v3" />
    </>
  ),
  // An x with a raised index — powers and standard form.
  power: (
    <>
      <path d="M3.5 18.5L13 9M3.5 9l9.5 9.5" />
      <rect x="15.5" y="4.5" width="5.5" height="5.5" rx="1.2" />
    </>
  ),
  // An isometric cube — volume and surface area.
  cube: (
    <>
      <path d="M12 3l8 4.2v9.6L12 21l-8-4.2V7.2z" />
      <path d="M4 7.2l8 4.3 8-4.3M12 11.5V21" />
    </>
  ),
  // Axes with a straight line through them — y = mx + c.
  axis: (
    <>
      <path d="M4.5 3.5v16h16" />
      <path d="M7 17L19 6" />
      <circle cx="19" cy="6" r="1.4" fill="currentColor" stroke="none" />
    </>
  ),
  // A pair of compasses — constructions and loci.
  compass: (
    <>
      <circle cx="12" cy="4.5" r="1.6" />
      <path d="M11 6L5.5 19.5M13 6l5.5 13.5" />
      <path d="M8.5 13.5h7" />
    </>
  ),
  // A dial — compound measures and rates of change.
  gauge: (
    <>
      <path d="M3.5 17.5a8.5 8.5 0 1117 0" />
      <path d="M12 17.5l4.5-5" />
      <circle cx="12" cy="17.5" r="1.3" fill="currentColor" stroke="none" />
    </>
  ),
  // A microphone — spoken language.
  mic: (
    <>
      <rect x="9" y="2.8" width="6" height="11" rx="3" />
      <path d="M5.5 11.5a6.5 6.5 0 0013 0M12 18v3M9 21h6" />
    </>
  ),
  // A clock — historical context and when a text was written.
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5.3l3.5 2.2" />
    </>
  ),

  // ─── History ─────────────────────────────────────────────────────────────
  // Same grid, same stroke, no fills — the rules that make a set look like a
  // set rather than a pile of clip art.

  // A remembrance poppy.
  poppy: (
    <>
      <circle cx="12" cy="9" r="5" />
      <circle cx="12" cy="9" r="1.4" fill="currentColor" stroke="none" />
      <path d="M12 14v7M12 18c-2.5 0-3.5-1.5-4-3" />
    </>
  ),
  // A candle — remembrance and memorial.
  candle: (
    <>
      <path d="M12 3.5c1.8 1.6 2.5 2.8 2.5 4a2.5 2.5 0 01-5 0c0-1.2.7-2.4 2.5-4z" />
      <rect x="7.5" y="11.5" width="9" height="9" rx="1.5" />
      <path d="M12 9.5v2" />
    </>
  ),
  // A factory — industry, workers, revolution.
  factory: (
    <>
      <path d="M3.5 20.5V11l5 3V11l5 3V6.5l1.5-3h2l1.5 3v14z" />
      <path d="M3.5 20.5h17M7 17v1.5M11 17v1.5M15.5 17v1.5" />
    </>
  ),
  // A torch — rallies, uprisings, revolutions.
  torch: (
    <>
      <path d="M12 2.5c2.5 2.4 3.5 4 3.5 5.8a3.5 3.5 0 01-7 0c0-1.8 1-3.4 3.5-5.8z" />
      <path d="M9.5 12.5h5l-1 8h-3z" />
    </>
  ),
  // A crown — monarchy.
  crown: (
    <>
      <path d="M4 17.5L3 7l5 4 4-6.5L16 11l5-4-1 10.5z" />
      <path d="M4 20.5h16" />
    </>
  ),
  // A flask — medicine and science through time.
  flask: (
    <>
      <path d="M10 3.5v6L4.5 18a2 2 0 001.7 3h11.6a2 2 0 001.7-3L14 9.5v-6" />
      <path d="M8.5 3.5h7M7 14.5h10" />
    </>
  ),
  // A ship — empire, trade, migration.
  ship: (
    <>
      <path d="M3.5 15.5l1.8 4.2a1.5 1.5 0 001.4.8h10.6a1.5 1.5 0 001.4-.8l1.8-4.2z" />
      <path d="M6 15.5V10h12v5.5M12 10V4M8.5 7h7" />
    </>
  ),
  // A castle — Norman England, conquest.
  castle: (
    <>
      <path d="M3.5 20.5V7l3 1.5V5.5h3V8l2.5-1.5L14.5 8V5.5h3v3L20.5 7v13.5z" />
      <path d="M10 20.5v-5a2 2 0 014 0v5" />
    </>
  ),
  // A scroll — sources and interpretations.
  scroll: (
    <>
      <path d="M6.5 3.5h11a2 2 0 012 2v13a2 2 0 01-2 2h-11" />
      <path d="M6.5 3.5a2 2 0 00-2 2v1h4M6.5 20.5a2 2 0 002-2v-1h-4" />
      <path d="M10 8.5h6M10 12h6M10 15.5h4" />
    </>
  ),
};

export function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      // Decorative: the topic's name is right next to it in real text, so a
      // screen reader announcing the icon too would just be noise.
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
