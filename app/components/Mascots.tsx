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
  knight: Knight,
  atlas: Atlas,
  sterling: Sterling,
  iris: Iris,
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
          antennae; one asymmetric detail reads as design.
          The ball sits at cy=7 with r=5, so it spans y=2 to y=12 — comfortably
          inside the viewBox. It was previously at cy=2, which put its top half
          at negative coordinates, i.e. outside the canvas, so the browser
          simply cut it off. Anything drawn outside the viewBox is invisible. */}
      <path
        d="M72 18 Q84 13 86 9"
        stroke="#1e3a8a"
        strokeWidth={4}
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="87" cy="7" r="5" fill="#fbbf24" />
      {/* A small highlight, so the ball reads as a sphere rather than a dot */}
      <circle cx="85.4" cy="5.4" r="1.6" fill="#ffffff" opacity={0.65} />

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
      {/* Light comes from the upper left throughout. Every shadow below is on
          the right-hand side of its form, consistently — inconsistent lighting
          is what makes flat illustration look amateur. */}

      {/* Shoes and stockings */}
      <rect x="45" y="114" width="10" height="13" rx="4" fill="#ddcbf2" />
      <rect x="65" y="114" width="10" height="13" rx="4" fill="#ddcbf2" />
      <rect x="70" y="114" width="5" height="13" rx="2" fill="#000000" opacity={0.1} />
      <path d="M36 130 Q36 124 48 124 Q60 124 60 130 Q60 134 48 134 Q36 134 36 130 Z" fill="#1c0c33" />
      <path d="M60 130 Q60 124 72 124 Q84 124 84 130 Q84 134 72 134 Q60 134 60 130 Z" fill="#1c0c33" />
      <path d="M52 125 Q60 126 60 130 Q60 133 54 133 Z" fill="#ffffff" opacity={0.12} />

      {/* Puffed breeches */}
      <path d="M36 100 Q60 94 84 100 Q86 116 72 118 L48 118 Q34 116 36 100 Z" fill="#4c2a7a" />
      <path d="M60 96 Q78 98 84 100 Q86 116 72 118 L60 118 Z" fill="#000000" opacity={0.16} />
      <path d="M42 102 Q48 100 52 101 Q46 106 44 112 Z" fill="#ffffff" opacity={0.1} />

      {/* Doublet — tapered rather than a soft rounded blob, which is most of
          what stops it reading as a plush toy. */}
      <path d="M40 72 Q60 66 80 72 L84 104 Q60 110 36 104 Z" fill="#3b1d63" />
      <path d="M60 68 Q72 68 80 72 L84 104 Q72 108 60 109 Z" fill="#000000" opacity={0.18} />
      {/* A centre seam and buttons give the garment structure */}
      <path d="M60 70 L60 108" stroke="#000000" strokeWidth={1.2} opacity={0.25} />
      <circle cx="60" cy="80" r="2.2" fill="#f0c869" />
      <circle cx="60" cy="90" r="2.2" fill="#f0c869" />
      <circle cx="60" cy="100" r="2.2" fill="#f0c869" />

      {/* Sleeves */}
      <path d="M27 76 Q36 72 39 78 L37 98 Q28 102 24 96 Z" fill="#2a1049" />
      <path d="M93 76 Q84 72 81 78 L83 98 Q92 102 96 96 Z" fill="#2a1049" />
      <path d="M93 76 Q88 74 85 76 L86 98 Q92 102 96 96 Z" fill="#000000" opacity={0.2} />

      {/* Ruff collar — overlapping circles, which is genuinely how the real
          garment was built: starched fabric folded into a cartwheel. */}
      <g fill="#ffffff">
        {[32, 39, 46, 53, 60, 67, 74, 81, 88].map((cx, i) => (
          <circle key={cx} cx={cx} cy={i % 2 === 0 ? 68 : 71} r="8" />
        ))}
      </g>
      {/* Shading on the right-hand folds, and a shadow cast down onto the
          doublet — that cast shadow is what makes the collar sit ON him rather
          than float in front of him. */}
      <path d="M62 60 Q80 60 92 70 Q84 79 62 79 Z" fill="#000000" opacity={0.09} />
      <ellipse cx="60" cy="76" rx="24" ry="5" fill="#000000" opacity={0.14} />

      {/* Neck */}
      <rect x="53" y="58" width="14" height="12" rx="5" fill="#e0b48f" />

      {/* A pointed beard rather than a rounded bib */}
      <path d="M45 44 Q47 62 60 74 Q73 62 75 44 Z" fill="#8a6240" />
      <path d="M60 48 Q70 52 75 44 Q73 62 60 74 Z" fill="#000000" opacity={0.16} />

      {/* Head — an oval, not a circle. Real heads are taller than they are
          wide; a perfect circle is the most toy-like shape there is. */}
      <ellipse cx="60" cy="40" rx="25" ry="28" fill="#f2cdae" />
      <path d="M60 12 A25 28 0 0 1 60 68 A15 28 0 0 0 60 12 Z" fill="#000000" opacity={0.11} />
      {/* Cheekbone and jaw, barely there, but they give the face structure */}
      <path d="M38 44 Q42 54 52 60 Q42 58 37 50 Z" fill="#000000" opacity={0.05} />

      {/* Hair at the temples */}
      <path d="M35 42 Q33 22 48 17 L48 34 Q40 37 38 48 Z" fill="#6b4423" />
      <path d="M85 42 Q87 22 72 17 L72 34 Q80 37 82 48 Z" fill="#6b4423" />
      <path d="M85 42 Q87 22 72 17 L72 26 Q81 30 82 48 Z" fill="#000000" opacity={0.15} />

      {/* Brows — two short strokes, and the single biggest change from "plush"
          to "person". A face without brows has no expression at all. */}
      <path d="M45 32 Q50 29 55 31" stroke="#6b4423" strokeWidth={2.6} strokeLinecap="round" fill="none" />
      <path d="M65 31 Q70 29 75 32" stroke="#6b4423" strokeWidth={2.6} strokeLinecap="round" fill="none" />

      {/* Eyes — no spectacles now. Smaller, with an upper lid line, which is
          what separates a drawn eye from a sewn-on button. */}
      <ellipse cx="50" cy="40" rx="5.2" ry="5.6" fill="#ffffff" />
      <ellipse cx="70" cy="40" rx="5.2" ry="5.6" fill="#ffffff" />
      <circle cx="50.8" cy="41" r="3.1" fill="#241040" />
      <circle cx="70.8" cy="41" r="3.1" fill="#241040" />
      <circle cx="49.2" cy="39" r="1.3" fill="#ffffff" />
      <circle cx="69.2" cy="39" r="1.3" fill="#ffffff" />
      <path d="M45 37.5 Q50 34.5 55 37.5" stroke="#8a6240" strokeWidth={1.8} strokeLinecap="round" fill="none" />
      <path d="M65 37.5 Q70 34.5 75 37.5" stroke="#8a6240" strokeWidth={1.8} strokeLinecap="round" fill="none" />

      {/* Nose */}
      <path d="M59 44 Q57 50 61 51" stroke="#c99a72" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* Moustache, sitting over the beard join */}
      <path d="M50 55 Q60 60 70 55 Q60 57 50 55 Z" fill="#8a6240" />

      {/* Hat: a tapered crown, gold band, wide brim, and a feather. The
          underside of the brim is shaded, so it reads as having thickness. */}
      <path d="M46 2 Q60 -1 74 2 L77 16 L43 16 Z" fill="#241040" />
      <path d="M60 0 Q68 0 74 2 L77 16 L60 16 Z" fill="#ffffff" opacity={0.07} />
      <rect x="43" y="11" width="34" height="4.5" fill="#f0c869" />
      <rect x="60" y="11" width="17" height="4.5" fill="#000000" opacity={0.18} />
      <ellipse cx="60" cy="17" rx="30" ry="6" fill="#241040" />
      <path d="M30 17 Q30 22 60 22 Q90 22 90 17 Q90 21 60 21 Q30 21 30 17 Z" fill="#000000" opacity={0.3} />
      <path d="M74 9 Q90 -1 93 10 Q86 16 74 12 Z" fill="#a78bfa" />
      <path d="M84 3 Q91 4 93 10 Q88 14 82 13 Z" fill="#000000" opacity={0.15} />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// GAUNT — History.
//
// Drawn from scratch in the house style. The reference picture was a starting
// point for the IDEA, not something to trace: shipping someone else's artwork
// on a public site is a real problem, and a cast that is entirely ours means
// never having to wonder.
//
// ── The visor is CLOSED, and that was Matthew's call over mine ──────────────
//
// The first version had it raised, with glasses behind it, because glasses are
// the thread running through the other three. He was right that it did not
// look like a knight — a helmet's whole silhouette is the closed grille, and
// opening it turns an unmistakable shape into a person in a hat.
//
// So the family resemblance is carried by other means instead: the same chunky
// proportions, the head at about 40% of total height, one darker tone per form
// with the light from the upper left, and — doing the work the glasses used to
// do — the same GOLD (#f0c869) that frames Hoot's and Quill's spectacles,
// here as the rim of the shield and the collar of the helmet.
//
// The lesson is worth keeping: a house style is a set of relationships, not a
// checklist of props. When one prop stops making sense, the job is to find
// another relationship, not to force the prop.
//
// ── The shield is the flag of England, not a generic cross ─────────────────
//
// A cross floating in the middle of a white field reads as a plus sign. The
// St George's Cross runs edge to edge — that is what makes it a flag rather
// than a symbol on a background, and it is what makes it read as English at a
// glance. A clipPath is what lets the bars run right off the sides and still
// stop at the shield's curved outline.
//
// Deliberately the flag rather than a real coat of arms: heraldry belongs to
// actual families, and inventing one risks borrowing somebody's.
// ─────────────────────────────────────────────────────────────────────────────
export function Knight(props: MascotProps) {
  return (
    <svg
      viewBox="0 0 120 140"
      role="img"
      aria-label="Gaunt, the History mascot: a small knight in a closed helmet with a red plume, holding a shield bearing the flag of England"
      {...props}
    >
      <defs>
        {/* Clips the cross to the shield outline, so the bars can run edge to
            edge without spilling past the curve at the bottom. */}
        <clipPath id="gaunt-shield">
          <path d="M74 80 L110 80 L110 104 Q110 119 92 126 Q74 119 74 104 Z" />
        </clipPath>
      </defs>

      {/* Plume. Kept inside the canvas — the lesson from Pixel's antenna, which
          was drawn at a negative y and silently clipped in half. */}
      <path d="M60 6 Q50 0 44 5 Q49 14 58 18 Z" fill="#dc2626" />
      <path d="M60 6 Q70 0 76 5 Q71 14 62 18 Z" fill="#f87171" />
      <path d="M60 6 Q70 0 76 5 Q68 6 62 12 Z" fill="#000000" opacity={0.1} />
      <rect x="55" y="13" width="10" height="8" rx="4" fill="#f0c869" />

      {/* Helmet — one closed form from crown to chin. The silhouette is the
          character, so nothing interrupts it. */}
      <path d="M24 56 Q24 19 60 19 Q96 19 96 56 L96 62 Q96 78 60 78 Q24 78 24 62 Z" fill="#cbd5e1" />
      {/* One darker tone down the right, so it reads as a dome rather than a
          flat grey shape. */}
      <path d="M60 19 Q96 19 96 56 L96 62 Q96 78 60 78 Z" fill="#94a3b8" opacity={0.5} />
      {/* Highlight, upper left, matching the light source the others use. */}
      <path d="M35 42 Q35 26 52 24 Q39 31 39 45 Z" fill="#ffffff" opacity={0.5} />

      {/* Rondels over the ears — the discs that stop a helmet reading as an
          egg. Also where the shading is most obvious, so they sell the volume. */}
      <circle cx="24" cy="53" r="8" fill="#e2e8f0" />
      <circle cx="96" cy="53" r="8" fill="#e2e8f0" />
      {/* Absolute coordinates rather than relative ones. Both draw the same
          half-moon, but a relative path contains negative NUMBERS even when
          every point is on canvas, and the checker that catches clipped shapes
          reads numbers. A checker that cries wolf gets ignored, so it is worth
          writing the path the way that keeps it honest. */}
      <path d="M96 45 A8 8 0 0 1 96 61 Q100 53 96 45 Z" fill="#94a3b8" opacity={0.5} />

      {/* The dark grille recess */}
      <path d="M36 38 Q60 34 84 38 L84 66 Q60 72 36 66 Z" fill="#3f4756" />
      <path d="M60 36 Q84 37 84 38 L84 66 Q72 69 60 70 Z" fill="#000000" opacity={0.18} />

      {/* Breath slits. Tallest in the middle, shortest at the edges, which is
          what gives a flat grille the suggestion of a curved face. */}
      <rect x="44" y="44" width="4" height="14" rx="2" fill="#94a3b8" />
      <rect x="52" y="42" width="4" height="18" rx="2" fill="#b6c1d0" />
      <rect x="60" y="41" width="4" height="20" rx="2" fill="#cbd5e1" />
      <rect x="68" y="42" width="4" height="18" rx="2" fill="#b6c1d0" />
      <rect x="76" y="44" width="4" height="14" rx="2" fill="#94a3b8" />

      {/* Gold brow band — the family colour, doing the job the glasses did. */}
      <path d="M32 34 Q60 27 88 34 L88 38 Q60 31 32 38 Z" fill="#f0c869" />
      <path d="M60 30 Q88 34 88 38 L60 34 Z" fill="#000000" opacity={0.15} />

      {/* Gorget, then the breastplate */}
      <path d="M34 74 Q60 82 86 74 L86 80 Q60 88 34 80 Z" fill="#f0c869" />
      <path d="M36 80 Q60 87 84 80 L84 112 Q60 118 36 112 Z" fill="#cbd5e1" />
      <path d="M60 84 Q84 81 84 80 L84 112 Q72 115 60 116 Z" fill="#94a3b8" opacity={0.5} />

      {/* Belt, in the subject's red */}
      <rect x="34" y="100" width="52" height="8" rx="4" fill="#b91c1c" />
      <rect x="60" y="100" width="26" height="8" rx="4" fill="#000000" opacity={0.15} />

      {/* Pauldrons */}
      <ellipse cx="33" cy="86" rx="10" ry="8" fill="#e2e8f0" />
      <ellipse cx="87" cy="86" rx="10" ry="8" fill="#e2e8f0" />
      <path d="M87 78 Q97 82 97 86 Q97 92 88 94 Z" fill="#94a3b8" opacity={0.55} />

      {/* Legs and feet */}
      <rect x="45" y="112" width="11" height="14" rx="5" fill="#94a3b8" />
      <rect x="64" y="112" width="11" height="14" rx="5" fill="#94a3b8" />
      <ellipse cx="49" cy="128" rx="10" ry="6" fill="#64748b" />
      <ellipse cx="71" cy="128" rx="10" ry="6" fill="#64748b" />

      {/* Shield — the flag of England. The white field first, then the cross
          drawn oversized and clipped, so it runs edge to edge the way a flag
          does instead of floating in the middle. */}
      <path d="M74 80 L110 80 L110 104 Q110 119 92 126 Q74 119 74 104 Z" fill="#f8fafc" />
      <g clipPath="url(#gaunt-shield)">
        <rect x="86" y="78" width="12" height="50" fill="#dc2626" />
        <rect x="72" y="94" width="40" height="12" fill="#dc2626" />
        {/* A single shadow across the whole shield, so it sits in the same
            light as the rest of him rather than looking pasted on. */}
        <path d="M92 78 L112 78 L112 128 L92 128 Z" fill="#000000" opacity={0.08} />
      </g>
      {/* Gold rim — the family colour again, and it lifts the shield off the
          armour behind it. */}
      <path d="M74 80 L110 80 L110 104 Q110 119 92 126 Q74 119 74 104 Z" fill="none" stroke="#f0c869" strokeWidth={2.5} strokeLinejoin="round" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ATLAS — Geography.
//
// THE PLANET IS THE BODY. Not a head on a body, not a globe held by someone —
// the character IS the earth, with the face on it.
//
// That breaks the rule the other four follow, which is head at about 40% of
// total height. Matthew asked for it and he was right: a globe on a torso
// looked like somebody in a costume, where a globe AS the character reads as a
// planet immediately.
//
// So the family resemblance is carried by everything else:
//   - the same chunky rounded forms with no sharp corners
//   - one darker tone per shape for roundness, lit from the upper left
//   - the same eye treatment — slightly oval, one highlight each, which is
//     what reads as characterful rather than as a toy
//   - one deliberate asymmetry, as Pixel has a single aerial and Quill a
//     raised hand: here, one arm hangs and the other is raised
//
// No glasses, and no gold. Three of the five wear spectacles and two do not,
// which is fine — a house style is a set of relationships, not a uniform.
//
// ── Two fixes worth recording, because both are general lessons ────────────
//
// LIMBS. The first version used plain shapes: rounded rectangles for legs and
// ellipses for feet. Matthew said the feet looked like two circles, and they
// did — an ellipse has no front and no back, so it reads as a ball rather than
// a boot. Feet are now drawn as PATHS with a heel and a toe pointing outwards,
// which is the detail that makes a shape read as footwear.
//
// The arms were closed blob paths, which taper unpredictably. They are now
// stroked lines with round caps and a separate hand: a stroke has an even
// thickness along its whole length, so the limb keeps its weight, and the round
// cap does the work of a wrist. Far less code and a much more natural result.
//
// The continents are deliberately simplified and unlabelled. A recognisable
// world map at icon size would be mud, and would also imply a position on where
// borders are. Suggested landmasses read as "globe" and commit to nothing.
// ─────────────────────────────────────────────────────────────────────────────
export function Atlas(props: MascotProps) {
  return (
    <svg
      viewBox="0 0 120 140"
      role="img"
      aria-label="Atlas, the Geography mascot: a smiling planet Earth with arms, legs and boots, one arm raised"
      {...props}
    >
      {/* Arms — stroked lines with round caps rather than closed shapes, so the
          thickness stays even and the ends read as wrists. One hangs, one is
          raised: the asymmetry is what stops a symmetrical character looking
          like a logo. */}
      <path d="M27 78 Q16 86 15 96" stroke="#38bdf8" strokeWidth={11} strokeLinecap="round" fill="none" />
      <circle cx="15" cy="97" r="7" fill="#38bdf8" />
      <path d="M93 74 Q104 68 108 58" stroke="#38bdf8" strokeWidth={11} strokeLinecap="round" fill="none" />
      <circle cx="109" cy="56" r="7" fill="#38bdf8" />
      {/* Shading on the raised arm, which is on the shaded side of the sphere */}
      <path d="M99 71 Q105 66 108 58" stroke="#0284c7" strokeWidth={5} strokeLinecap="round" fill="none" opacity={0.45} />
      <path d="M112 50 A7 7 0 0 1 112 62 Q107 56 112 50 Z" fill="#0284c7" opacity={0.35} />

      {/* Legs — slightly apart and angled outwards, which reads as standing
          rather than as two posts. */}
      <path d="M50 100 L47 116" stroke="#38bdf8" strokeWidth={10} strokeLinecap="round" fill="none" />
      <path d="M70 100 L73 116" stroke="#38bdf8" strokeWidth={10} strokeLinecap="round" fill="none" />

      {/* Boots — drawn as paths with a heel and a toe pointing outwards. An
          ellipse has no front and no back, which is exactly why the previous
          version read as two circles rather than as feet. */}
      {/* Absolute coordinates, not relative ones. Both draw the same boot, but
          a relative path contains negative NUMBERS even when every point is on
          canvas — and the checker that catches clipped shapes reads numbers. A
          checker that cries wolf gets ignored, so the paths are written the way
          that keeps it honest. */}
      <path d="M52 112 Q56 112 56 117 L56 120 Q56 124 52 124 L36 124 Q31 124 31 120 Q31 116 36 115 Q42 114 45 112 Z" fill="#14304f" />
      <path d="M68 112 Q64 112 64 117 L64 120 Q64 124 68 124 L84 124 Q89 124 89 120 Q89 116 84 115 Q78 114 75 112 Z" fill="#14304f" />
      {/* A lighter sole line, so the boot has a top and a bottom */}
      <path d="M36 122 h16 M68 122 h16" stroke="#ffffff" strokeWidth={1.6} strokeLinecap="round" opacity={0.25} />

      {/* THE PLANET — the whole character */}
      <circle cx="60" cy="62" r="45" fill="#38bdf8" />
      {/* One darker tone down the right, so it reads as a sphere. */}
      <path d="M60 17 A45 45 0 0 1 60 107 A31 45 0 0 0 60 17 Z" fill="#0284c7" opacity={0.4} />

      {/* Simplified landmasses — a suggestion of continents, not a map. */}
      <path d="M26 44 Q38 34 50 42 Q48 56 38 60 Q26 56 26 44 Z" fill="#4ade80" />
      <path d="M36 70 Q48 68 50 80 Q46 96 38 98 Q30 86 36 70 Z" fill="#4ade80" />
      <path d="M70 34 Q88 32 94 46 Q86 54 74 50 Q68 44 70 34 Z" fill="#4ade80" />
      <path d="M72 66 Q88 64 90 78 Q84 94 74 96 Q66 82 72 66 Z" fill="#4ade80" />
      {/* Shading over the right-hand landmasses, so they belong to the sphere
          rather than floating on top of it. */}
      <path d="M70 66 Q88 64 90 78 Q84 94 74 96 Q76 82 70 66 Z" fill="#000000" opacity={0.09} />
      <path d="M82 34 Q92 38 94 46 Q88 52 80 51 Q84 42 82 34 Z" fill="#000000" opacity={0.09} />

      {/* Highlight, upper left, matching the light source the others use */}
      <path d="M30 38 Q40 24 58 21 Q40 28 34 44 Z" fill="#ffffff" opacity={0.35} />

      {/* Face, directly on the planet. Slightly oval eyes with one highlight
          each — the same setting as every other character. */}
      <ellipse cx="49" cy="56" rx="4.6" ry="5.6" fill="#14304f" />
      <ellipse cx="71" cy="56" rx="4.6" ry="5.6" fill="#14304f" />
      <circle cx="50.8" cy="54" r="1.8" fill="#ffffff" />
      <circle cx="72.8" cy="54" r="1.8" fill="#ffffff" />

      {/* A restrained, slightly asymmetric smile */}
      <path d="M52 71 Q60 77 69 70" stroke="#14304f" strokeWidth={2.8} strokeLinecap="round" fill="none" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// STERLING — Business.
//
// Named for the pound sterling: a real-sounding name that says "business"
// without being a pun, which is the same trick as Quill and Atlas.
//
// ── Where he sits on the cuteness dial ──────────────────────────────────────
//
// Matthew's brief was exact and worth restating, because it is the hardest
// setting to hit: "cute, but obviously not Teletubby cute. Simple features, but
// not baby-like and not too adulty."
//
// That rules out both easy answers. The babyish version is a huge round head,
// enormous round eyes, no brows, no nose, blush. The adult version is realistic
// proportions and a detailed face. Sterling is built to land between:
//
//   HEAD      an oval at ~40% of total height — the same as the rest of the
//             cast. A circle would be the single most toy-like choice
//             available; real heads are taller than they are wide.
//   EYES      r ≈ 5, very slightly oval, one highlight each. Big enough to be
//             friendly, small enough not to read as a plush toy.
//   BROWS     present, and level rather than arched. Brows are what give a face
//             an expression at all; a face without them reads as a doll.
//   NOSE      one short stroke. Leaving it off is a strong babyish signal.
//   MOUTH     a small closed smile, deliberately not a wide grin. Restraint is
//             what makes it read as "professional" rather than "excited".
//   NO BLUSH  the most childish signal in the toolkit, as the note at the top
//             of this file says. Left out here as everywhere else.
//
// ── No glasses, and that is a decision rather than an oversight ─────────────
//
// The original three all wore glasses as the visual thread tying the cast
// together. That thread has since been cut twice at Matthew's request — Gaunt's
// visor is closed, and Atlas lost his — so it is now the minority. Adding them
// back to Sterling alone would make the newest character look like it belonged
// to the old set instead of the current one. They are three lines to add if he
// disagrees.
//
// The family resemblance is carried instead by the things that actually do the
// work: chunky proportions, thick rounded forms, flat fills with exactly one
// darker tone, light from the upper left, and no sharp corners anywhere.
// ─────────────────────────────────────────────────────────────────────────────
export function Sterling(props: MascotProps) {
  return (
    <svg
      viewBox="0 0 120 140"
      role="img"
      aria-label="Sterling, the Business mascot: a smiling person in a teal suit holding a briefcase"
      {...props}
    >
      {/* Light comes from the upper left, as with every other character here.
          Every shadow below is on the right of its own form. */}

      {/* ── Shoes ── */}
      {/* ── Shoes ──
             The first version was two mirrored ovals meeting in the middle, so
             the toes pointed inwards and touched: he stood pigeon-toed. Feet
             turn slightly OUT and stand apart, so each shoe now has its toe
             further from the centre line than its heel, with a gap between
             them. Only visible once rendered, which is what the preview script
             is for. */}
      <path d="M34 127 Q34 121 44 119.5 Q54 119.5 54.5 126 Q54.5 131.5 44 132.5 Q34 132.5 34 127 Z" fill="#101014" />
      <path d="M86 127 Q86 121 76 119.5 Q66 119.5 65.5 126 Q65.5 131.5 76 132.5 Q86 132.5 86 127 Z" fill="#101014" />
      {/* Shading on the right shoe, and a paler sole strip on both, so the
          shoes separate from black trousers instead of merging into them. */}
      <path d="M76 119.5 Q86 121 86 127 Q86 132.5 76 132.5 Q80 126 76 119.5 Z" fill="#000000" opacity={0.3} />
      <path d="M34.4 129 Q40 133 50 132 Q54 131 54.4 128.6 Q50 134 42 134 Q35 133.6 34.4 129 Z" fill="#8b8b96" opacity={0.55} />
      <path d="M85.6 129 Q80 133 70 132 Q66 131 65.6 128.6 Q70 134 78 134 Q85 133.6 85.6 129 Z" fill="#8b8b96" opacity={0.4} />
      {/* A toe-cap seam — one line, and it turns a blob into a shoe. */}
      <path d="M39.5 121.5 Q37.5 126 39.5 130.5" stroke="#3a3a44" strokeWidth={1.3} fill="none" strokeLinecap="round" />
      <path d="M80.5 121.5 Q82.5 126 80.5 130.5" stroke="#3a3a44" strokeWidth={1.3} fill="none" strokeLinecap="round" />

      {/* ── Trouser legs ──
             Lengthened after looking at the first render: with a short body he
             read as squat and chibi rather than as a smartly dressed person.
             The head never changed size — the fix for "too big a head" is
             almost always a longer body, because it is the RATIO that reads. */}
      <path d="M43 102 L41 122 Q46 124 52 122 L53 102 Z" fill="#1e1e26" />
      <path d="M67 102 L69 122 Q74 124 79 122 L77 102 Z" fill="#1e1e26" />
      <path d="M71 102 L73 122 Q76 123 79 122 L77 102 Z" fill="#000000" opacity={0.2} />
      {/* A crease down each leg — one line, and it says "pressed trousers" */}
      <path d="M47 104 L45 120" stroke="#ffffff" strokeWidth={1} opacity={0.13} strokeLinecap="round" />
      <path d="M73 104 L75 120" stroke="#ffffff" strokeWidth={1} opacity={0.07} strokeLinecap="round" />

      {/* ── Jacket body. Tapered to the waist rather than a rounded blob —
             this is most of what stops a suit reading as pyjamas. ── */}
      <path d="M34 72 Q60 64.5 86 72 L89 106 Q60 113.5 31 106 Z" fill="#1e1e26" />
      <path d="M60 66.5 Q77 66.5 86 72 L89 106 Q75 110.5 60 112.5 Z" fill="#000000" opacity={0.18} />

      {/* ── Shirt showing in the V of the jacket ── */}
      <path d="M51 67 Q60 63.5 69 67 L66 97 L54 97 Z" fill="#ffffff" />
      <path d="M60 65 Q65 65.5 69 67 L66 97 L60 97 Z" fill="#000000" opacity={0.07} />

      {/* ── Lapels. Two long triangles meeting at the top of the chest. The
             notch where they meet the collar is the detail that makes it a
             suit jacket rather than a cardigan. ── */}
      <path d="M38 71 Q45 67 51 67.5 L60 91 L40 85 Z" fill="#34343f" />
      <path d="M82 71 Q75 67 69 67.5 L60 91 L80 85 Z" fill="#34343f" />
      <path d="M82 71 Q78 68 73 67.2 L64 87 L80 85 Z" fill="#000000" opacity={0.16} />

      {/* ── Shirt collar, sitting above the lapels ── */}
      <path d="M52 64 L60 74 L54 75 L49 67 Z" fill="#ffffff" />
      <path d="M68 64 L60 74 L66 75 L71 67 Z" fill="#eef2f6" />

      {/* ── The tie. Knot, then a blade narrowing to a point. ── */}
      <path d="M56 66 L64 66 L65 73 L55 73 Z" fill="#2dd4bf" />
      <path d="M60 66 L64 66 L65 73 L60 73 Z" fill="#000000" opacity={0.15} />
      <path d="M56 74 L64 74 L62 96 L60 99 L58 96 Z" fill="#2dd4bf" />
      <path d="M60 74 L64 74 L62 96 L60 99 Z" fill="#000000" opacity={0.15} />

      {/* ── Breast pocket: one line, which is all it takes to say "tailored" ── */}
      <path d="M73 80 L81 78" stroke="#ffffff" strokeWidth={1.4} opacity={0.16} strokeLinecap="round" />

      {/* ── Sleeves ── */}
      <path d="M33 74 Q27 78 26 88 L28 95 Q34 96 36 90 L38 76 Z" fill="#181820" />
      <path d="M87 74 Q93 78 94 88 L92 95 Q86 96 84 90 L82 76 Z" fill="#181820" />
      <path d="M87 74 Q93 78 94 88 L92 95 Q89 95.5 88 93 L86 76 Z" fill="#000000" opacity={0.2} />
      {/* Cuffs — a sliver of white shirt at each wrist */}
      <path d="M27 92 Q32 93.5 36 91.5 L36 94.5 Q31 96.5 27 95 Z" fill="#ffffff" opacity={0.92} />
      <path d="M84 91.5 Q88 93.5 93 92 L93 95 Q88 96.5 84 94.5 Z" fill="#ffffff" opacity={0.75} />

      {/* ── The briefcase ──
             Drawn AFTER the jacket, so it sits in front of him rather than
             being clipped by the hem — which is where a carried case actually
             is. The handle's apex is deliberately placed where the hand goes,
             because in the first version the hand hovered beside the case
             holding nothing at all. Only visible once rendered. */}
      <path d="M22 101 Q31 88 40 101" stroke="#6b4226" strokeWidth={2.8} fill="none" strokeLinecap="round" />
      <rect x="13" y="100" width="30" height="23" rx="4" fill="#a0673f" />
      <rect x="28" y="100" width="15" height="23" rx="4" fill="#000000" opacity={0.18} />
      <rect x="13" y="107" width="30" height="2.4" fill="#000000" opacity={0.22} />
      <rect x="25" y="105" width="6" height="6" rx="1.6" fill="#f0c869" />
      <path d="M15 102 Q19 101 23 102 L21 106 Q17 106 15 105 Z" fill="#ffffff" opacity={0.12} />

      {/* ── Hands. The left one closes over the handle. ── */}
      <circle cx="31" cy="94" r="5.2" fill="#f2cdae" />
      <path d="M31 88.8 A5.2 5.2 0 0 1 31 99.2 A3 5.2 0 0 0 31 88.8 Z" fill="#000000" opacity={0.1} />
      {/* The thumb, curled over the front of the handle. Without it the hand is
          a ball resting against the handle rather than closed around it. */}
      <path d="M28.5 93 Q31.5 91.5 33.5 93.5" stroke="#d9a87f" strokeWidth={2.2} strokeLinecap="round" fill="none" />
      <circle cx="89" cy="96" r="5.4" fill="#f2cdae" />
      <path d="M89 91 A5.4 5.4 0 0 1 89 101 A3 5.4 0 0 0 89 91 Z" fill="#000000" opacity={0.12} />

      {/* ── Neck, and the shadow the jaw casts onto it. That cast shadow is
             what stops the head looking like a balloon on a stick. ── */}
      <rect x="53" y="52" width="14" height="16" rx="5" fill="#e0b48f" />
      <path d="M53 54 Q60 60 67 54 L67 58 Q60 63 53 58 Z" fill="#000000" opacity={0.16} />

      {/* ── Head. An oval, taller than it is wide: a perfect circle is the most
             toy-like shape available. ── */}
      <ellipse cx="60" cy="34" rx="24.5" ry="27" fill="#f2cdae" />
      <path d="M60 7 A24.5 27 0 0 1 60 61 A14 27 0 0 0 60 7 Z" fill="#000000" opacity={0.11} />
      {/* A jawline hint — barely visible, but it gives the face structure */}
      <path d="M40 39 Q44 49 52 54 Q44 52 39 44 Z" fill="#000000" opacity={0.05} />

      {/* ── Ears ── */}
      <ellipse cx="35.5" cy="36" rx="3.8" ry="5.2" fill="#f2cdae" />
      <ellipse cx="84.5" cy="36" rx="3.8" ry="5.2" fill="#e8bd99" />

      {/* ── Hair. Neat, with a side parting: the tidiest available cue for
             "smartly dressed", and it costs two paths. ── */}
      <path d="M37 29 Q34.5 11 60 7 Q85.5 11 83 29 Q82 20 77 17.4 Q68 21.8 58 23.2 Q48 24.2 42.5 21.4 Q38.4 23.6 37 29 Z" fill="#3d2b1d" />
      <path d="M60 7 Q85.5 11 83 29 Q82 20 77 17.4 Q68 21.8 60 22.8 Z" fill="#000000" opacity={0.17} />
      {/* The SWEEP. A single diagonal highlight running from the low left
          temple up and across to the right is what makes the fringe read as
          combed in one direction. Without it the shape is just a dome, which is
          exactly how the previous attempt came out — smooth and about seventy
          years out of date. */}
      <path d="M44 22 Q52 12.4 66 9.6 Q76 8.8 80.4 13.4 Q70 11.2 59 16 Q49.5 19.6 46 23.6 Z" fill="#ffffff" opacity={0.15} />
      {/* Tapered sides — the hair stops ABOVE the ears rather than covering
          them, which is most of what makes a short crop look current. */}
      <path d="M37.4 29 Q37.8 24 42.5 21.4 Q39.4 25 38.8 29.4 Z" fill="#000000" opacity={0.2} />
      <path d="M82.6 29 Q82.4 23.6 79 20.4 Q81 24.4 81.2 29.4 Z" fill="#000000" opacity={0.14} />
      {/* Two strands of separation on top. Texture is drawn, not implied. */}
      <path d="M50 13.6 Q54.4 17 53 21" stroke="#2b1e14" strokeWidth={1.5} opacity={0.5} fill="none" strokeLinecap="round" />
      <path d="M65 10.8 Q68.6 14.4 67.6 19" stroke="#2b1e14" strokeWidth={1.5} opacity={0.42} fill="none" strokeLinecap="round" />

      {/* ── Brows. Level, not arched: an arch reads as surprise, and the
             expression wanted here is calm. ── */}
      <path d="M46.5 27 Q51 24.6 55.5 26.4" stroke="#3a2818" strokeWidth={2.6} strokeLinecap="round" fill="none" />
      <path d="M64.5 26.4 Q69 24.6 73.5 27" stroke="#3a2818" strokeWidth={2.6} strokeLinecap="round" fill="none" />

      {/* ── Eyes ── */}
      <ellipse cx="51" cy="35" rx="5" ry="5.4" fill="#ffffff" />
      <ellipse cx="69" cy="35" rx="5" ry="5.4" fill="#ffffff" />
      <circle cx="51.7" cy="36" r="3" fill="#1c2b2a" />
      <circle cx="69.7" cy="36" r="3" fill="#1c2b2a" />
      <circle cx="50.2" cy="34" r="1.25" fill="#ffffff" />
      <circle cx="68.2" cy="34" r="1.25" fill="#ffffff" />
      {/* Upper lid lines — the difference between a drawn eye and a sewn-on
          button, and they cost one stroke each. */}
      <path d="M46 32.2 Q51 29.4 56 32.2" stroke="#8a6240" strokeWidth={1.7} strokeLinecap="round" fill="none" />
      <path d="M64 32.2 Q69 29.4 74 32.2" stroke="#8a6240" strokeWidth={1.7} strokeLinecap="round" fill="none" />

      {/* ── Nose: one short stroke. Leaving it off is a strongly babyish
             signal, which is the thing this design is steering away from. ── */}
      <path d="M59 39 Q57 44.5 61 45.5" stroke="#c99a72" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* ── Mouth: a small closed smile. Deliberately not a grin — restraint is
             what makes him read as composed rather than over-excited. ── */}
      <path d="M53.5 50 Q60 55 66.5 50" stroke="#a5765a" strokeWidth={2.6} strokeLinecap="round" fill="none" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// IRIS — Science.
//
// One character for the whole Science group, which is why she is a generalist:
// a lab coat, goggles and test tubes read as "scientist" without committing to
// biology, chemistry or physics. If each science later wants its own mascot,
// she stays as the group's face on the homepage.
//
// ── Two deliberate choices about how she reads ──────────────────────────────
//
// HAIR TIED BACK. Loose hair in a laboratory is a safety failure, and every
// real scientist ties it up. It is a small thing that separates "person dressed
// as a scientist" from "scientist", which is what Matthew asked for.
//
// GOGGLES PUSHED UP ON HER FOREHEAD, not over her eyes. Worn properly they
// would hide the eyes, and eyes are where nearly all of a character's
// expression lives — the cast would gain a mascot and lose a face. Pushed up is
// what people actually do between tasks, so it reads as authentic AND keeps the
// expression. It also quietly restores the eyewear thread that Pixel, Hoot and
// Quill share.
//
// She is drawn in the same house style as the rest: chunky proportions, big
// head at about 40% of height, flat fills with exactly one darker tone, light
// from the upper left, no sharp corners.
// ─────────────────────────────────────────────────────────────────────────────
export function Iris(props: MascotProps) {
  return (
    <svg
      viewBox="0 0 120 140"
      role="img"
      aria-label="Iris, the Science mascot: a smiling scientist in a lab coat holding test tubes"
      {...props}
    >
      {/* ── Shoes. Turned outwards with a gap, which is the fix learned from
             Sterling, whose first version stood pigeon-toed. ── */}
      <path d="M35 126 Q35 120 44.5 118.5 Q54 118.5 54.5 125 Q54.5 130.5 44.5 131.5 Q35 131.5 35 126 Z" fill="#1f2937" />
      <path d="M85 126 Q85 120 75.5 118.5 Q66 118.5 65.5 125 Q65.5 130.5 75.5 131.5 Q85 131.5 85 126 Z" fill="#1f2937" />
      <path d="M75.5 118.5 Q85 120 85 126 Q85 131.5 75.5 131.5 Q79 125 75.5 118.5 Z" fill="#000000" opacity={0.28} />
      <path d="M35.4 128 Q41 132 50 131 Q54 130 54.4 127.6 Q50 133 42.5 133 Q36 132.6 35.4 128 Z" fill="#9ca3af" opacity={0.5} />

      {/* ── Trousers ── */}
      <path d="M44 100 L42 120 Q47 122 53 120 L54 100 Z" fill="#334155" />
      <path d="M66 100 L67 120 Q73 122 78 120 L76 100 Z" fill="#334155" />
      <path d="M70 100 L71 120 Q75 121 78 120 L76 100 Z" fill="#000000" opacity={0.2} />

      {/* ── The lab coat ──
             Longer than a jacket and slightly flared at the hem, because that
             is what makes it a COAT rather than a white shirt. Off-white
             (#f1f5f9) rather than pure white: a pure white garment has nowhere
             left to go for a highlight, so it flattens out completely. */}
      <path d="M33 72 Q60 64 87 72 L92 112 Q60 119 28 112 Z" fill="#f1f5f9" />
      <path d="M60 66 Q77 66 87 72 L92 112 Q77 116.5 60 118 Z" fill="#000000" opacity={0.1} />

      {/* The top she wears underneath, in the Science colour, showing in the
          open front of the coat. */}
      <path d="M50 68 Q60 64.5 70 68 L67 100 L53 100 Z" fill="#a21caf" />
      <path d="M60 66 Q66 66 70 68 L67 100 L60 100 Z" fill="#000000" opacity={0.18} />

      {/* Coat lapels and the open front edge. The grey is what stops the coat
          disappearing into the white background of a card. */}
      <path d="M37 71 Q45 66.5 51 67.5 L60 92 L39 86 Z" fill="#e2e8f0" />
      <path d="M83 71 Q75 66.5 69 67.5 L60 92 L81 86 Z" fill="#e2e8f0" />
      <path d="M83 71 Q77 67.5 71 67.4 L64 88 L81 86 Z" fill="#000000" opacity={0.09} />
      <path d="M51 67.5 L53 112" stroke="#cbd5e1" strokeWidth={1.4} fill="none" />
      <path d="M69 67.5 L67 112" stroke="#cbd5e1" strokeWidth={1.4} fill="none" />

      {/* A coat pocket, and a pen in it — two shapes, and they do more for
          "scientist" than any amount of extra shading would. */}
      <path d="M72 92 L84 90 L85.5 100 L73.5 102 Z" fill="#e2e8f0" />
      <path d="M76 89 L77.5 95" stroke="#0ea5e9" strokeWidth={2.2} strokeLinecap="round" />

      {/* ── Arms. The right one is raised so the test tube is held up where it
             can actually be seen; the left hangs down with a second tube. ── */}
      <path d="M33 73 Q26 77 25 86 L28 90 Q33 90 34.5 84 L37 75 Z" fill="#f1f5f9" />
      <path d="M87 73 Q95 77 96.5 87 L95 96 Q89 97 87 91 L83 75 Z" fill="#f1f5f9" />
      <path d="M87 73 Q95 77 96.5 87 L95 96 Q92 96.5 91 94 L86 75 Z" fill="#000000" opacity={0.1} />
      {/* Cuffs */}
      <path d="M25.5 86.5 Q30 88.5 34.5 86.5 L34 89.5 Q29.5 91.5 25.5 89.5 Z" fill="#cbd5e1" />
      <path d="M87.5 92 Q91 94 96 92.5 L96 95.5 Q91 97 87.5 95 Z" fill="#cbd5e1" />

      {/* ── Test tube one: raised in her right hand ──
             Drawn behind the hand so the fingers close over it. Glass is a pale
             fill at low opacity plus one white highlight stripe — trying to
             draw real transparency at this size just makes mud. */}
      <rect x="24.5" y="54" width="11" height="32" rx="5.5" fill="#eff6ff" />
      <path d="M24.5 70 L35.5 70 L35.5 80.5 Q35.5 86 30 86 Q24.5 86 24.5 80.5 Z" fill="#22d3ee" />
      <circle cx="28.5" cy="75" r="1.7" fill="#ffffff" opacity={0.8} />
      <circle cx="32" cy="79" r="1.2" fill="#ffffff" opacity={0.65} />
      <path d="M27 57 L27 82" stroke="#ffffff" strokeWidth={1.8} opacity={0.7} strokeLinecap="round" />
      <rect x="24.5" y="54" width="11" height="32" rx="5.5" fill="none" stroke="#64748b" strokeWidth={1.5} />
      <rect x="23.5" y="52.5" width="13" height="3.6" rx="1.8" fill="#94a3b8" />

      {/* ── Test tube two: lower, in her left hand ── */}
      <rect x="90" y="92" width="10" height="28" rx="5" fill="#eff6ff" />
      <path d="M90 106 L100 106 L100 115 Q100 120 95 120 Q90 120 90 115 Z" fill="#f59e0b" />
      <circle cx="93.5" cy="110" r="1.4" fill="#ffffff" opacity={0.75} />
      <path d="M92.5 95 L92.5 116" stroke="#ffffff" strokeWidth={1.7} opacity={0.6} strokeLinecap="round" />
      <rect x="90" y="92" width="10" height="28" rx="5" fill="none" stroke="#64748b" strokeWidth={1.5} />
      <rect x="89" y="90.5" width="12" height="3.4" rx="1.7" fill="#94a3b8" />

      {/* ── Hands, closing over each tube ── */}
      <circle cx="30" cy="88" r="5.2" fill="#f2cdae" />
      <path d="M27.4 87 Q30.4 85.5 32.4 87.5" stroke="#d9a87f" strokeWidth={2.2} strokeLinecap="round" fill="none" />
      <circle cx="93" cy="99" r="5.2" fill="#f2cdae" />
      <path d="M93 93.8 A5.2 5.2 0 0 1 93 104.2 A3 5.2 0 0 0 93 93.8 Z" fill="#000000" opacity={0.12} />
      <path d="M90.4 98 Q93.4 96.5 95.4 98.5" stroke="#d9a87f" strokeWidth={2.2} strokeLinecap="round" fill="none" />

      {/* ── Neck, with the shadow the jaw casts onto it ── */}
      <rect x="53" y="52" width="14" height="16" rx="5" fill="#e0b48f" />
      <path d="M53 54 Q60 60 67 54 L67 58 Q60 63 53 58 Z" fill="#000000" opacity={0.16} />

      {/* ── The bun, drawn BEFORE the head so it sits behind it ── */}
      <circle cx="86" cy="17" r="10.5" fill="#5b3a29" />
      <path d="M86 6.5 A10.5 10.5 0 0 1 86 27.5 A5.5 10.5 0 0 0 86 6.5 Z" fill="#000000" opacity={0.18} />
      <path d="M80 11.5 Q86 8.5 91.5 12 Q85 11.5 82 16 Z" fill="#ffffff" opacity={0.13} />
      {/* A band where the bun is gathered — without it the bun is just a
          circle of hair floating next to her head. */}
      <path d="M77 12 Q79.5 17 77.5 23" stroke="#42291b" strokeWidth={2.6} fill="none" strokeLinecap="round" />

      {/* ── Head ── */}
      <ellipse cx="60" cy="34" rx="24.5" ry="27" fill="#f2cdae" />
      <path d="M60 7 A24.5 27 0 0 1 60 61 A14 27 0 0 0 60 7 Z" fill="#000000" opacity={0.11} />
      <path d="M40 39 Q44 49 52 54 Q44 52 39 44 Z" fill="#000000" opacity={0.05} />

      {/* ── Ears ── */}
      <ellipse cx="35.5" cy="36" rx="3.8" ry="5.2" fill="#f2cdae" />
      <ellipse cx="84.5" cy="36" rx="3.8" ry="5.2" fill="#e8bd99" />

      {/* ── Hair: swept back into the bun, with a soft fringe ── */}
      <path d="M35.5 33 Q33 8 60 6 Q87 8 84.5 33 Q83 21 78 17.5 Q68 23 57 21 Q46 19 41 24 Q37 26.5 35.5 33 Z" fill="#5b3a29" />
      <path d="M60 6 Q87 8 84.5 33 Q83 21 78 17.5 Q69 22.6 60 21.4 Z" fill="#000000" opacity={0.15} />
      {/* The sweep towards the bun — a single diagonal highlight is what makes
          hair look combed in one direction rather than moulded on. */}
      <path d="M43 23 Q52 12 68 10 Q78 9.6 82 14 Q71 11.6 59 15.6 Q48 19 45 25 Z" fill="#ffffff" opacity={0.14} />
      {/* A few strands escaping towards the bun, so the join is not a hard edge */}
      <path d="M78 17.5 Q83 14.5 87 15" stroke="#5b3a29" strokeWidth={3.2} fill="none" strokeLinecap="round" />

      {/* ── Safety goggles, pushed up onto her forehead ──
             The strap running round the back of the head is the detail that
             makes them goggles rather than sunglasses. */}
      <path d="M36 22 Q34 17 38 15 L82 15 Q86 17 84 22 Z" fill="#38bdf8" opacity={0.55} />
      <path d="M36 22 Q34 17 38 15 L82 15 Q86 17 84 22 Z" fill="none" stroke="#0e7490" strokeWidth={2} strokeLinejoin="round" />
      <path d="M40 17.5 Q48 15.6 58 16.4" stroke="#ffffff" strokeWidth={2} opacity={0.65} strokeLinecap="round" fill="none" />
      <path d="M36 19 Q30 20 28 24" stroke="#0e7490" strokeWidth={2.4} fill="none" strokeLinecap="round" />
      <path d="M84 19 Q90 20 92 24" stroke="#0e7490" strokeWidth={2.4} fill="none" strokeLinecap="round" />

      {/* ── Brows ── */}
      <path d="M46.5 28 Q51 25.6 55.5 27.4" stroke="#42291b" strokeWidth={2.6} strokeLinecap="round" fill="none" />
      <path d="M64.5 27.4 Q69 25.6 73.5 28" stroke="#42291b" strokeWidth={2.6} strokeLinecap="round" fill="none" />

      {/* ── Eyes ── */}
      <ellipse cx="51" cy="36" rx="5" ry="5.4" fill="#ffffff" />
      <ellipse cx="69" cy="36" rx="5" ry="5.4" fill="#ffffff" />
      <circle cx="51.7" cy="37" r="3" fill="#2b1d14" />
      <circle cx="69.7" cy="37" r="3" fill="#2b1d14" />
      <circle cx="50.2" cy="35" r="1.25" fill="#ffffff" />
      <circle cx="68.2" cy="35" r="1.25" fill="#ffffff" />
      <path d="M46 33.2 Q51 30.4 56 33.2" stroke="#8a6240" strokeWidth={1.7} strokeLinecap="round" fill="none" />
      <path d="M64 33.2 Q69 30.4 74 33.2" stroke="#8a6240" strokeWidth={1.7} strokeLinecap="round" fill="none" />

      {/* ── Nose ── */}
      <path d="M59 40 Q57 45.5 61 46.5" stroke="#c99a72" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* ── Mouth: a small, composed smile ── */}
      <path d="M53.5 51 Q60 56 66.5 51" stroke="#a5765a" strokeWidth={2.6} strokeLinecap="round" fill="none" />
    </svg>
  );
}
