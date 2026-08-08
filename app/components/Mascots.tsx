// The cast — smooth vector art. Appealing, but not babyish.
//
// ─────────────────────────────────────────────────────────────────────────────
// THE CUTENESS DIAL
//
// Cuteness in character design isn't on or off, it's a slider, and it's mostly
// driven by how close the proportions are to a baby's (the technical term is
// neoteny). Turn it all the way up and you get a toy for a three-year-old.
// Turn it off and you get a corporate logo. The interesting range is between.
//
//   HEAD SIZE — the strongest signal by far.
//     ~55%+ of total height  →  reads as a toddler's toy
//     ~40%                   →  reads as a designed mascot   ← we are here
//     ~15%                   →  reads as a realistic figure
//
//   EYES — big and perfectly round reads young; slightly smaller and a touch
//     oval reads characterful. One highlight rather than two.
//
//   BLUSH — the single most childish signal in the whole toolkit. Removed.
//
//   SHADING — flat colour reads as a children's sticker. A single darker tone
//     giving each form a bit of roundness reads as deliberately designed. This
//     is the main thing that separates "cartoon" from "illustration".
//
// If these still aren't right, the fix is to name the dial: "bigger head",
// "smaller eyes", "less shading". Every one of those is a number in this file.
//
// These are OUR characters. The principles above are design theory, which
// nobody owns; the specific drawings are ours.
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
      viewBox="0 0 120 140"
      role="img"
      aria-label="Pixel, the Computer Science mascot: a small robot with a screen for a face"
      {...props}
    >
      {/* A single aerial, off to one side. Symmetrical pairs read as cartoon
          antennae; one asymmetric detail reads as design. */}
      <path
        d="M72 18 Q84 10 86 2"
        stroke="#1e3a8a"
        strokeWidth={4}
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="87" cy="2" r="4.5" fill="#fbbf24" />

      {/* Feet and legs, drawn first so the body sits over them */}
      <rect x="45" y="112" width="11" height="16" rx="5.5" fill="#8b98ac" />
      <rect x="64" y="112" width="11" height="16" rx="5.5" fill="#8b98ac" />
      <ellipse cx="49" cy="130" rx="13" ry="7" fill="#1e3a8a" />
      <ellipse cx="71" cy="130" rx="13" ry="7" fill="#1e3a8a" />

      {/* Arms — slimmer and slightly angled, rather than round paddles */}
      <rect x="17" y="82" width="12" height="30" rx="6" fill="#dbe2ee" />
      <rect x="91" y="82" width="12" height="30" rx="6" fill="#dbe2ee" />
      <rect x="17" y="98" width="12" height="14" rx="6" fill="#b9c4d4" />
      <rect x="91" y="98" width="12" height="14" rx="6" fill="#b9c4d4" />

      {/* Body — taller than before, so the head no longer dominates */}
      <rect x="34" y="76" width="52" height="40" rx="16" fill="#dbe2ee" />
      {/* Shading: one darker form along the bottom gives the body roundness. */}
      <path
        d="M34 100 Q60 112 86 100 L86 100 Q86 116 70 116 L50 116 Q34 116 34 100 Z"
        fill="#000000"
        opacity={0.07}
      />
      <rect x="48" y="86" width="24" height="16" rx="8" fill="#b9c4d4" />
      <circle cx="60" cy="94" r="4" fill="#38bdf8" />

      {/* Head — about 40% of total height. Large, but no longer half the body. */}
      <rect x="18" y="18" width="84" height="58" rx="22" fill="#eef2fb" />
      {/* Head shading */}
      <path
        d="M18 58 Q60 70 102 58 L102 54 Q102 76 80 76 L40 76 Q18 76 18 54 Z"
        fill="#000000"
        opacity={0.06}
      />

      {/* Screen */}
      <rect x="27" y="26" width="66" height="42" rx="16" fill="#14306a" />
      {/* A soft sheen across the glass, which reads as a real surface */}
      <path d="M27 44 L93 26 L93 34 L27 52 Z" fill="#ffffff" opacity={0.06} />

      {/* Eyes — slightly oval and a touch smaller than before. One highlight
          each rather than two: two reads sparkly and young. */}
      <ellipse cx="48" cy="46" rx="7.5" ry="9" fill="#38bdf8" />
      <ellipse cx="72" cy="46" rx="7.5" ry="9" fill="#38bdf8" />
      <circle cx="45.5" cy="42" r="2.6" fill="#ffffff" />
      <circle cx="69.5" cy="42" r="2.6" fill="#ffffff" />

      {/* A restrained, slightly asymmetric smile */}
      <path
        d="M54 58 Q60 62 67 57"
        stroke="#38bdf8"
        strokeWidth={3}
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
      viewBox="0 0 120 140"
      role="img"
      aria-label="Hoot, the Maths mascot: an owl wearing round glasses"
      {...props}
    >
      {/* Ear tufts — sharper and more angled, which reads as a real owl rather
          than a soft toy. Still no actual points. */}
      <path d="M30 34 Q23 12 46 26 Z" fill="#5b2408" />
      <path d="M90 34 Q97 12 74 26 Z" fill="#5b2408" />

      {/* Talons */}
      <path
        d="M47 122 v10 M55 122 v10 M51 122 v12 M65 122 v10 M73 122 v10 M69 122 v12"
        stroke="#e08c0c"
        strokeWidth={4.5}
        strokeLinecap="round"
      />

      {/* Body — an egg rather than a ball. Taller than it is wide, which is
          what stops it reading as a plush toy. */}
      <ellipse cx="60" cy="72" rx="42" ry="52" fill="#8a4413" />
      {/* Shading down one side gives the body form. */}
      <path
        d="M60 20 A42 52 0 0 1 60 124 A30 52 0 0 0 60 20 Z"
        fill="#000000"
        opacity={0.1}
      />

      {/* Folded wings, tucked tight */}
      <ellipse cx="21" cy="80" rx="10" ry="26" fill="#5b2408" />
      <ellipse cx="99" cy="80" rx="10" ry="26" fill="#5b2408" />

      {/* Pale chest, narrower than before */}
      <ellipse cx="60" cy="86" rx="27" ry="32" fill="#f7ddb6" />

      {/* A brow line above the glasses — a couple of pixels of shape that make
          the difference between "thoughtful" and "startled". */}
      <path d="M26 48 Q60 34 94 48 Q60 42 26 48 Z" fill="#5b2408" />

      {/* Glasses — thinner frames read more grown-up */}
      <g stroke="#f0c869" strokeWidth={4} fill="none">
        <circle cx="42" cy="60" r="17" />
        <circle cx="78" cy="60" r="17" />
        <path d="M59 60 H61" strokeLinecap="round" />
      </g>

      {/* Eyes */}
      <circle cx="42" cy="60" r="12.5" fill="#fffdf7" />
      <circle cx="78" cy="60" r="12.5" fill="#fffdf7" />
      <circle cx="43.5" cy="62" r="6.5" fill="#3b1a06" />
      <circle cx="76.5" cy="62" r="6.5" fill="#3b1a06" />
      <circle cx="40.5" cy="58" r="2.6" fill="#ffffff" />
      <circle cx="73.5" cy="58" r="2.6" fill="#ffffff" />

      {/* A neater, more angular beak */}
      <path d="M60 74 L67 84 L60 90 L53 84 Z" fill="#e08c0c" />
    </svg>
  );
}

// ============================== QUILL — English =============================
// Late 16th / early 17th century dress: tall hat, ruff collar, doublet.
export function Quill(props: MascotProps) {
  return (
    <svg
      viewBox="0 0 120 140"
      role="img"
      aria-label="Quill, the English mascot: a small Elizabethan scholar in a ruff collar"
      {...props}
    >
      {/* Shoes and stockings */}
      <rect x="45" y="114" width="10" height="13" rx="5" fill="#e4d5f5" />
      <rect x="65" y="114" width="10" height="13" rx="5" fill="#e4d5f5" />
      <ellipse cx="48" cy="130" rx="12" ry="6.5" fill="#1c0c33" />
      <ellipse cx="72" cy="130" rx="12" ry="6.5" fill="#1c0c33" />

      {/* Puffed breeches */}
      <ellipse cx="60" cy="108" rx="25" ry="14" fill="#4c2a7a" />
      <path
        d="M35 108 Q60 120 85 108 Q85 122 60 122 Q35 122 35 108 Z"
        fill="#000000"
        opacity={0.12}
      />

      {/* Doublet — longer, so the body carries more of the figure */}
      <path d="M38 74 Q60 68 82 74 L84 106 Q60 114 36 106 Z" fill="#3b1d63" />
      <path
        d="M60 70 L60 112 Q78 110 84 106 L82 74 Q72 70 60 70 Z"
        fill="#000000"
        opacity={0.12}
      />
      <circle cx="60" cy="82" r="2.4" fill="#f0c869" />
      <circle cx="60" cy="92" r="2.4" fill="#f0c869" />
      <circle cx="60" cy="102" r="2.4" fill="#f0c869" />

      {/* Sleeves */}
      <ellipse cx="27" cy="86" rx="10" ry="16" fill="#2a1049" />
      <ellipse cx="93" cy="86" rx="10" ry="16" fill="#2a1049" />

      {/* Ruff collar — a ring of overlapping circles, which is genuinely how
          the real garment was built: starched fabric folded into a cartwheel. */}
      <g fill="#ffffff">
        {[30, 37, 44, 51, 58, 65, 72, 79, 86].map((cx, i) => (
          <circle key={cx} cx={cx} cy={i % 2 === 0 ? 70 : 73} r="8.5" />
        ))}
      </g>
      <ellipse cx="58" cy="72" rx="26" ry="6" fill="#e6dff2" />

      {/* Neat pointed beard */}
      <path d="M46 44 Q48 68 60 72 Q72 68 74 44 Z" fill="#8a6240" />

      {/* Head — about 40% of the figure */}
      <circle cx="60" cy="42" r="28" fill="#f2cdae" />
      <path
        d="M60 14 A28 28 0 0 1 60 70 A20 28 0 0 0 60 14 Z"
        fill="#000000"
        opacity={0.07}
      />

      {/* Hair at the sides */}
      <path d="M32 44 Q31 24 46 18 L46 38 Q38 40 35 50 Z" fill="#6b4423" />
      <path d="M88 44 Q89 24 74 18 L74 38 Q82 40 85 50 Z" fill="#6b4423" />

      {/* Moustache */}
      <path
        d="M52 54 Q60 59 68 54"
        stroke="#8a6240"
        strokeWidth={4}
        strokeLinecap="round"
        fill="none"
      />

      {/* Small round spectacles */}
      <g stroke="#f0c869" strokeWidth={3} fill="none">
        <circle cx="50" cy="42" r="9.5" />
        <circle cx="70" cy="42" r="9.5" />
        <path d="M59.5 42 H60.5" strokeLinecap="round" />
      </g>

      {/* Eyes */}
      <circle cx="50" cy="42" r="6" fill="#ffffff" />
      <circle cx="70" cy="42" r="6" fill="#ffffff" />
      <circle cx="50.8" cy="43.5" r="3.4" fill="#241040" />
      <circle cx="70.8" cy="43.5" r="3.4" fill="#241040" />
      <circle cx="48.6" cy="40.5" r="1.5" fill="#ffffff" />
      <circle cx="68.6" cy="40.5" r="1.5" fill="#ffffff" />

      {/* Hat: crown, gold band, wide brim, feather */}
      <path d="M45 4 Q60 0 75 4 L77 18 L43 18 Z" fill="#241040" />
      <rect x="43" y="12" width="34" height="4.5" fill="#f0c869" />
      <ellipse cx="60" cy="18" rx="30" ry="6" fill="#241040" />
      <path d="M74 10 Q90 0 93 11 Q86 17 74 13 Z" fill="#a78bfa" />
    </svg>
  );
}
