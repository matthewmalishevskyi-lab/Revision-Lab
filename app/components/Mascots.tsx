// The cast — smooth vector art, drawn to be as cute as possible.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY THESE LOOK CUTER THAN THE LAST VERSION
//
// "Cute" isn't a vague feeling — character designers use a specific set of
// rules, and they all come from the same place: babies. Our brains are wired to
// find infant proportions endearing, so exaggerating them makes almost anything
// adorable. The technical name is neoteny. Every rule below is a version of it:
//
//   1. HUGE HEAD. A baby's head is about a quarter of its height; an adult's is
//      an eighth. These are roughly HALF. This is the single biggest lever —
//      more than colour, more than expression.
//   2. BIG EYES, SET LOW AND WIDE. Babies' eyes sit below the midline of the
//      head and are large relative to the face. Eyes placed high read as adult.
//   3. STUBBY LIMBS. Short, thick and rounded, tucked close to the body.
//   4. NO SHARP CORNERS ANYWHERE. Every silhouette is circles and rounded
//      rectangles. A single sharp angle reads as threatening.
//   5. SIMPLE FACES. Two eyes and a small mouth. Detail reads as maturity.
//   6. BLUSH. Two soft patches on the cheeks. Costs one shape, does a lot.
//
// These are OUR characters, not copies of anyone else's. The rules above are
// design principles, which nobody owns — the specific drawings are ours.
// ─────────────────────────────────────────────────────────────────────────────

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
      viewBox="0 0 120 132"
      role="img"
      aria-label="Pixel, the Computer Science mascot: a small round robot with a screen for a face"
      {...props}
    >
      {/* Aerials — short and topped with soft balls, never spikes */}
      <path
        d="M45 22 L38 10 M75 22 L82 10"
        stroke="#1e3a8a"
        strokeWidth={5}
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="37" cy="8" r="6" fill="#fbbf24" />
      <circle cx="83" cy="8" r="6" fill="#fbbf24" />

      {/* Feet first, so the body overlaps them */}
      <ellipse cx="49" cy="123" rx="13" ry="8" fill="#1e3a8a" />
      <ellipse cx="71" cy="123" rx="13" ry="8" fill="#1e3a8a" />
      <rect x="45" y="104" width="11" height="14" rx="5.5" fill="#94a3b8" />
      <rect x="64" y="104" width="11" height="14" rx="5.5" fill="#94a3b8" />

      {/* Stubby arms — little rounded paddles, not limbs */}
      <ellipse cx="24" cy="94" rx="11" ry="8.5" fill="#e8edf7" />
      <ellipse cx="96" cy="94" rx="11" ry="8.5" fill="#e8edf7" />

      {/* Small body. Deliberately dwarfed by the head. */}
      <rect x="38" y="84" width="44" height="24" rx="12" fill="#cbd5e1" />
      <circle cx="60" cy="96" r="5.5" fill="#7dd3fc" />

      {/* The head: enormous, and rounded almost to a pebble */}
      <rect x="11" y="14" width="98" height="74" rx="32" fill="#eef2fb" />

      {/* Screen */}
      <rect x="23" y="24" width="74" height="54" rx="24" fill="#12306b" />

      {/* Eyes — big, low on the face, and wide apart */}
      <ellipse cx="47" cy="52" rx="10" ry="12" fill="#7dd3fc" />
      <ellipse cx="73" cy="52" rx="10" ry="12" fill="#7dd3fc" />
      {/* Highlights. Two per eye — a big one and a small one — is the
          shorthand every cartoon uses to make eyes look wet and alive. */}
      <circle cx="43.5" cy="47" r="3.6" fill="#ffffff" />
      <circle cx="69.5" cy="47" r="3.6" fill="#ffffff" />
      <circle cx="50" cy="57" r="1.8" fill="#ffffff" opacity={0.7} />
      <circle cx="76" cy="57" r="1.8" fill="#ffffff" opacity={0.7} />

      {/* Blush */}
      <ellipse cx="32" cy="63" rx="7" ry="4" fill="#f472b6" opacity={0.45} />
      <ellipse cx="88" cy="63" rx="7" ry="4" fill="#f472b6" opacity={0.45} />

      {/* A very small smile. Small mouths read as young. */}
      <path
        d="M54 66 Q60 71 66 66"
        stroke="#7dd3fc"
        strokeWidth={3.5}
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
      viewBox="0 0 120 132"
      role="img"
      aria-label="Hoot, the Maths mascot: a round owl wearing big glasses"
      {...props}
    >
      {/* Ear tufts — rounded lumps rather than points */}
      <path d="M28 34 Q24 14 44 24 Z" fill="#5b2408" />
      <path d="M92 34 Q96 14 76 24 Z" fill="#5b2408" />

      {/* Talons */}
      <path
        d="M46 116 v9 M54 116 v9 M50 116 v11 M66 116 v9 M74 116 v9 M70 116 v11"
        stroke="#f59e0b"
        strokeWidth={5}
        strokeLinecap="round"
      />

      {/* One big round body — head and body are the same shape, which is what
          makes round animals read as babyish. */}
      <ellipse cx="60" cy="68" rx="47" ry="50" fill="#8a4413" />

      {/* Tiny wings tucked in close */}
      <ellipse cx="17" cy="76" rx="11" ry="23" fill="#5b2408" />
      <ellipse cx="103" cy="76" rx="11" ry="23" fill="#5b2408" />

      {/* Pale belly */}
      <ellipse cx="60" cy="82" rx="33" ry="34" fill="#fde9c9" />

      {/* Glasses */}
      <g stroke="#ffe08a" strokeWidth={5} fill="none">
        <circle cx="40" cy="58" r="21" />
        <circle cx="80" cy="58" r="21" />
        <path d="M58 58 H62" strokeLinecap="round" />
      </g>

      {/* Big eyes, set low */}
      <circle cx="40" cy="58" r="16" fill="#fffdf7" />
      <circle cx="80" cy="58" r="16" fill="#fffdf7" />
      <circle cx="42" cy="61" r="8.5" fill="#3b1a06" />
      <circle cx="78" cy="61" r="8.5" fill="#3b1a06" />
      <circle cx="38.5" cy="56" r="3.6" fill="#ffffff" />
      <circle cx="74.5" cy="56" r="3.6" fill="#ffffff" />
      <circle cx="45" cy="65" r="1.8" fill="#ffffff" opacity={0.7} />
      <circle cx="81" cy="65" r="1.8" fill="#ffffff" opacity={0.7} />

      {/* Blush */}
      <ellipse cx="24" cy="76" rx="8" ry="5" fill="#f472b6" opacity={0.4} />
      <ellipse cx="96" cy="76" rx="8" ry="5" fill="#f472b6" opacity={0.4} />

      {/* A small soft beak */}
      <path d="M60 76 Q68 84 60 92 Q52 84 60 76 Z" fill="#f59e0b" />
    </svg>
  );
}

// ============================== QUILL — English =============================
// Late 16th / early 17th century dress: tall hat, ruff collar, doublet.
export function Quill(props: MascotProps) {
  return (
    <svg
      viewBox="0 0 120 132"
      role="img"
      aria-label="Quill, the English mascot: a small Elizabethan scholar in a ruff collar"
      {...props}
    >
      {/* Shoes and legs */}
      <ellipse cx="49" cy="124" rx="12" ry="7" fill="#1c0c33" />
      <ellipse cx="71" cy="124" rx="12" ry="7" fill="#1c0c33" />
      <rect x="45" y="110" width="10" height="11" rx="5" fill="#ede0fb" />
      <rect x="65" y="110" width="10" height="11" rx="5" fill="#ede0fb" />

      {/* Puffed breeches — round, which is both period-accurate and cute */}
      <ellipse cx="60" cy="106" rx="26" ry="14" fill="#4c2a7a" />

      {/* Small doublet */}
      <rect x="38" y="86" width="44" height="22" rx="11" fill="#3b1d63" />
      <circle cx="60" cy="94" r="2.6" fill="#ffe08a" />
      <circle cx="60" cy="102" r="2.6" fill="#ffe08a" />

      {/* Stubby sleeves */}
      <ellipse cx="27" cy="92" rx="10" ry="8" fill="#2a1049" />
      <ellipse cx="93" cy="92" rx="10" ry="8" fill="#2a1049" />

      {/* Ruff collar — a ring of overlapping circles, which is genuinely how
          the real garment was built: starched fabric folded into a cartwheel. */}
      <g fill="#ffffff">
        {[26, 34, 42, 50, 58, 66, 74, 82, 90].map((cx, i) => (
          <circle key={cx} cx={cx} cy={i % 2 === 0 ? 82 : 85} r="10" />
        ))}
      </g>
      <ellipse cx="58" cy="84" rx="30" ry="7" fill="#efe9f8" />

      {/* Little rounded beard */}
      <path d="M40 56 Q42 82 60 84 Q78 82 80 56 Z" fill="#8a6240" />

      {/* Big round head */}
      <circle cx="60" cy="50" r="35" fill="#f2cdae" />

      {/* Hair, just at the sides */}
      <path d="M25 50 Q24 26 42 20 L42 44 Q34 46 30 58 Z" fill="#6b4423" />
      <path d="M95 50 Q96 26 78 20 L78 44 Q86 46 90 58 Z" fill="#6b4423" />

      {/* Moustache over the beard join */}
      <path
        d="M50 64 Q60 70 70 64"
        stroke="#8a6240"
        strokeWidth={5}
        strokeLinecap="round"
        fill="none"
      />

      {/* Glasses */}
      <g stroke="#ffe08a" strokeWidth={3.5} fill="none">
        <circle cx="47" cy="50" r="12" />
        <circle cx="73" cy="50" r="12" />
        <path d="M59 50 H61" strokeLinecap="round" />
      </g>

      {/* Big eyes, set low */}
      <circle cx="47" cy="50" r="8" fill="#ffffff" />
      <circle cx="73" cy="50" r="8" fill="#ffffff" />
      <circle cx="48" cy="52" r="4.6" fill="#241040" />
      <circle cx="74" cy="52" r="4.6" fill="#241040" />
      <circle cx="45.5" cy="48" r="2" fill="#ffffff" />
      <circle cx="71.5" cy="48" r="2" fill="#ffffff" />

      {/* Blush */}
      <ellipse cx="31" cy="58" rx="7" ry="4.5" fill="#f472b6" opacity={0.45} />
      <ellipse cx="89" cy="58" rx="7" ry="4.5" fill="#f472b6" opacity={0.45} />

      {/* Hat: small crown, gold band, wide soft brim, and a feather */}
      <rect x="42" y="2" width="36" height="18" rx="8" fill="#241040" />
      <rect x="42" y="13" width="36" height="5" fill="#ffe08a" />
      <ellipse cx="60" cy="20" rx="32" ry="7" fill="#241040" />
      <path d="M76 12 Q92 2 95 13 Q88 19 76 15 Z" fill="#c084fc" />
    </svg>
  );
}
