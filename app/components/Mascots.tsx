// The cast, version 2 — smooth vector art.
//
// WHY THIS IS A DIFFERENT FILE, NOT A BIGGER GRID
//
// The look you're after isn't higher-resolution pixel art. It's a different
// medium entirely: smooth curves and rounded shapes rather than squares on a
// grid. Pixel art at very high resolution doesn't become a smooth drawing — it
// just becomes a large blurry-looking picture of a small blocky one, because
// the blockiness IS the art form.
//
// So these are built from real shapes: circles, rounded rectangles and curved
// paths. That makes them resolution-independent — the same file is razor sharp
// on a phone and on a 4K monitor, and if we scaled one to fill the whole screen
// it would still have perfectly clean edges. There is no resolution to run out
// of, which is the thing you kept asking for.
//
// The old pixel versions are still in the project (characters-pixel.ts +
// PixelSprite.tsx) if you ever want them back.
//
// House style, so the three read as a family:
//   - chunky proportions, big heads, small bodies
//   - flat colour fills, one darker shade for depth, no gradients
//   - thick rounded strokes, no sharp corners anywhere
//   - everyone wears glasses

type MascotProps = React.SVGProps<SVGSVGElement>;

// A lookup so data files can refer to a mascot by name ("pixel") without
// needing to import the component itself. Data stays plain data.
export const MASCOTS = {
  pixel: Pixel,
  hoot: Hoot,
  quill: Quill,
} as const;

// ============================ PIXEL — Computer Science ======================
export function Pixel(props: MascotProps) {
  return (
    <svg
      viewBox="0 0 120 150"
      role="img"
      aria-label="Pixel, the Computer Science mascot: a small robot with a television head"
      {...props}
    >
      {/* aerials */}
      <path
        d="M42 30 L28 12 M78 30 L92 12"
        stroke="#1e3a8a"
        strokeWidth={5}
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="27" cy="10" r="6" fill="#fbbf24" />
      <circle cx="93" cy="10" r="6" fill="#fbbf24" />

      {/* legs and feet, drawn first so the body overlaps them */}
      <rect x="42" y="118" width="12" height="20" rx="6" fill="#7e8ba3" />
      <rect x="66" y="118" width="12" height="20" rx="6" fill="#7e8ba3" />
      <rect x="32" y="132" width="30" height="13" rx="6.5" fill="#1e3a8a" />
      <rect x="58" y="132" width="30" height="13" rx="6.5" fill="#1e3a8a" />

      {/* arms */}
      <rect x="14" y="96" width="13" height="34" rx="6.5" fill="#9aa7bd" />
      <rect x="93" y="96" width="13" height="34" rx="6.5" fill="#9aa7bd" />
      <circle cx="20.5" cy="130" r="8" fill="#e8edf7" />
      <circle cx="99.5" cy="130" r="8" fill="#e8edf7" />

      {/* body */}
      <rect x="28" y="92" width="64" height="36" rx="16" fill="#cbd5e1" />
      <rect x="40" y="100" width="40" height="20" rx="10" fill="#94a3b8" />
      <circle cx="60" cy="110" r="5" fill="#7dd3fc" />

      {/* head casing */}
      <rect x="12" y="26" width="96" height="72" rx="26" fill="#e8edf7" />
      {/* screen */}
      <rect x="23" y="36" width="74" height="52" rx="20" fill="#0d2a5c" />

      {/* a soft sheen across the glass */}
      <path
        d="M23 56 L97 36 L97 46 L23 66 Z"
        fill="#ffffff"
        opacity={0.07}
      />

      {/* glasses */}
      <g stroke="#fbbf24" strokeWidth={4} fill="none">
        <circle cx="45" cy="58" r="13" />
        <circle cx="75" cy="58" r="13" />
        <path d="M58 58 H62" strokeLinecap="round" />
      </g>

      {/* eyes */}
      <circle cx="45" cy="58" r="8" fill="#7dd3fc" />
      <circle cx="75" cy="58" r="8" fill="#7dd3fc" />
      <circle cx="42" cy="55" r="2.5" fill="#ffffff" />
      <circle cx="72" cy="55" r="2.5" fill="#ffffff" />

      {/* smile */}
      <path
        d="M48 76 Q60 84 72 76"
        stroke="#7dd3fc"
        strokeWidth={4}
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// ================================ HOOT — Maths ==============================
export function Hoot(props: MascotProps) {
  return (
    <svg
      viewBox="0 0 120 150"
      role="img"
      aria-label="Hoot, the Maths mascot: an owl wearing large round glasses"
      {...props}
    >
      {/* talons */}
      <path
        d="M40 132 v8 M52 132 v8 M46 132 v10 M68 132 v8 M80 132 v8 M74 132 v10"
        stroke="#f59e0b"
        strokeWidth={5}
        strokeLinecap="round"
      />

      {/* ear tufts */}
      <path
        d="M26 34 Q22 12 40 22 Z M94 34 Q98 12 80 22 Z"
        fill="#5b2408"
      />

      {/* body */}
      <ellipse cx="60" cy="80" rx="46" ry="54" fill="#7a3a10" />
      {/* wings */}
      <ellipse cx="20" cy="88" rx="13" ry="30" fill="#54250a" />
      <ellipse cx="100" cy="88" rx="13" ry="30" fill="#54250a" />
      {/* belly */}
      <ellipse cx="60" cy="94" rx="30" ry="36" fill="#fde9c9" />

      {/* brow ridge, which is what makes an owl look thoughtful rather than
          startled — a tiny shape doing a lot of expressive work */}
      <path
        d="M22 52 Q60 34 98 52 Q60 46 22 52 Z"
        fill="#5b2408"
      />

      {/* glasses */}
      <g stroke="#ffe08a" strokeWidth={5} fill="none">
        <circle cx="40" cy="64" r="20" />
        <circle cx="80" cy="64" r="20" />
        <path d="M60 64 H60.1" strokeLinecap="round" />
        <path d="M58 62 H62" />
      </g>

      {/* eyes */}
      <circle cx="40" cy="64" r="15" fill="#fffdf7" />
      <circle cx="80" cy="64" r="15" fill="#fffdf7" />
      <circle cx="42" cy="66" r="7" fill="#3b1a06" />
      <circle cx="78" cy="66" r="7" fill="#3b1a06" />
      <circle cx="39" cy="63" r="2.5" fill="#ffffff" />
      <circle cx="75" cy="63" r="2.5" fill="#ffffff" />

      {/* beak */}
      <path d="M60 78 L68 88 L60 96 L52 88 Z" fill="#f59e0b" />
    </svg>
  );
}

// ============================== QUILL — English =============================
// Late 16th / early 17th century dress: tall hat, ruff collar, doublet.
export function Quill(props: MascotProps) {
  return (
    <svg
      viewBox="0 0 120 150"
      role="img"
      aria-label="Quill, the English mascot: an Elizabethan scholar in a ruff, deep in thought"
      {...props}
    >
      {/* legs and shoes */}
      <rect x="44" y="120" width="12" height="18" rx="6" fill="#ede0fb" />
      <rect x="64" y="120" width="12" height="18" rx="6" fill="#ede0fb" />
      <rect x="34" y="132" width="28" height="12" rx="6" fill="#1c0c33" />
      <rect x="58" y="132" width="28" height="12" rx="6" fill="#1c0c33" />

      {/* puffed breeches */}
      <ellipse cx="60" cy="116" rx="30" ry="16" fill="#4c2a7a" />

      {/* doublet */}
      <path
        d="M34 78 Q60 70 86 78 L90 116 Q60 124 30 116 Z"
        fill="#3b1d63"
      />
      <circle cx="60" cy="90" r="3" fill="#ffe08a" />
      <circle cx="60" cy="102" r="3" fill="#ffe08a" />

      {/* sleeves */}
      <ellipse cx="26" cy="94" rx="12" ry="20" fill="#2a1049" />
      <ellipse cx="94" cy="94" rx="12" ry="20" fill="#2a1049" />

      {/* the thoughtful arm: raised across the body, hand at the beard */}
      <path
        d="M30 96 Q34 74 48 66"
        stroke="#2a1049"
        strokeWidth={14}
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="49" cy="65" r="8" fill="#f2cdae" />

      {/* ruff collar — a ring of overlapping circles, which is exactly how the
          real thing was constructed: starched fabric folded into a cartwheel */}
      <g fill="#ffffff">
        {[24, 33, 42, 51, 60, 69, 78, 87, 96].map((cx, i) => (
          <circle key={cx} cx={cx} cy={i % 2 === 0 ? 74 : 78} r="10" />
        ))}
      </g>
      <ellipse cx="60" cy="76" rx="30" ry="7" fill="#e9e3f5" />

      {/* beard */}
      <path
        d="M38 48 Q40 78 60 80 Q80 78 82 48 Z"
        fill="#8a6240"
      />

      {/* face */}
      <rect x="34" y="24" width="52" height="42" rx="20" fill="#f2cdae" />

      {/* moustache sits over the beard join */}
      <path
        d="M50 56 Q60 62 70 56"
        stroke="#8a6240"
        strokeWidth={5}
        strokeLinecap="round"
        fill="none"
      />

      {/* glasses */}
      <g stroke="#ffe08a" strokeWidth={3.5} fill="none">
        <circle cx="48" cy="42" r="10" />
        <circle cx="72" cy="42" r="10" />
        <path d="M58 42 H62" strokeLinecap="round" />
      </g>
      <circle cx="48" cy="42" r="6" fill="#ffffff" />
      <circle cx="72" cy="42" r="6" fill="#ffffff" />
      <circle cx="49" cy="43" r="2.5" fill="#241040" />
      <circle cx="73" cy="43" r="2.5" fill="#241040" />

      {/* hat: crown, band, brim */}
      <rect x="40" y="2" width="40" height="22" rx="8" fill="#241040" />
      <rect x="40" y="16" width="40" height="6" fill="#ffe08a" />
      <ellipse cx="60" cy="24" rx="34" ry="7" fill="#241040" />
      {/* feather */}
      <path
        d="M78 16 Q94 6 96 16 Q90 22 78 18 Z"
        fill="#c084fc"
      />
    </svg>
  );
}
