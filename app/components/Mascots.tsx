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
  bobby: Bobby,
  lumen: Lumen,
  voyager: Voyager,
  ridge: Ridge,
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
      <path d="M35.5 31 C35.5 15 46 7 60 7 C74 7 84.5 15 84.5 31 C84.5 45 77 56.5 60 61 C43 56.5 35.5 45 35.5 31 Z" fill="#f2cdae" />
      <path d="M60 7 C74 7 84.5 15 84.5 31 C84.5 45 77 56.5 60 61 C69 55 71 44 71 31 C71 17 66 10 60 7 Z" fill="#000000" opacity={0.11} />
      {/* A jawline hint — barely visible, but it gives the face structure */}

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
      <path d="M37 72 Q60 65 83 72 L89 112 Q60 119 31 112 Z" fill="#f1f5f9" />
      <path d="M60 66.5 Q75 66.5 83 72 L89 112 Q76 116.5 60 118 Z" fill="#000000" opacity={0.1} />

      {/* The top she wears underneath, in the Science colour, showing in the
          open front of the coat. */}
      <path d="M50 68 Q60 64.5 70 68 L67 100 L53 100 Z" fill="#a21caf" />
      <path d="M60 66 Q66 66 70 68 L67 100 L60 100 Z" fill="#000000" opacity={0.18} />

      {/* Coat lapels and the open front edge. The grey is what stops the coat
          disappearing into the white background of a card. */}
      <path d="M40 71 Q46.5 66.5 51.5 67.5 L60 92 L42 86 Z" fill="#e2e8f0" />
      <path d="M80 71 Q73.5 66.5 68.5 67.5 L60 92 L78 86 Z" fill="#e2e8f0" />
      <path d="M80 71 Q75 67.5 70 67.4 L64 88 L78 86 Z" fill="#000000" opacity={0.09} />
      <path d="M51 67.5 L53 112" stroke="#cbd5e1" strokeWidth={1.4} fill="none" />
      <path d="M69 67.5 L67 112" stroke="#cbd5e1" strokeWidth={1.4} fill="none" />

      {/* A coat pocket, and a pen in it — two shapes, and they do more for
          "scientist" than any amount of extra shading would. */}
      <path d="M70 92 L81 90 L82.5 100 L71.5 102 Z" fill="#e2e8f0" />
      <path d="M74 89 L75.5 95" stroke="#0ea5e9" strokeWidth={2.2} strokeLinecap="round" />

      {/* ── Arms. The right one is raised so the test tube is held up where it
             can actually be seen; the left hangs down with a second tube. ── */}
      <path d="M37 73 Q29 77 27.5 86 L30 90 Q35 90 36.5 84 L40 75 Z" fill="#f1f5f9" />
      <path d="M83 73 Q92 77 93.5 87 L92 96 Q86 97 84 91 L80 75 Z" fill="#f1f5f9" />
      <path d="M83 73 Q92 77 93.5 87 L92 96 Q89 96.5 88 94 L83 75 Z" fill="#000000" opacity={0.1} />
      {/* Cuffs */}
      <path d="M28 86.5 Q32 88.5 36.5 86.5 L36 89.5 Q31.5 91.5 28 89.5 Z" fill="#cbd5e1" />
      <path d="M84.5 92 Q88 94 93 92.5 L93 95.5 Q88 97 84.5 95 Z" fill="#cbd5e1" />

      {/* ── Test tube one: raised in her right hand ──
             Drawn behind the hand so the fingers close over it. Glass is a pale
             fill at low opacity plus one white highlight stripe — trying to
             draw real transparency at this size just makes mud. */}
      <rect x="26.5" y="54" width="11" height="32" rx="5.5" fill="#eff6ff" />
      <path d="M26.5 70 L37.5 70 L37.5 80.5 Q37.5 86 32 86 Q26.5 86 26.5 80.5 Z" fill="#22d3ee" />
      <circle cx="30.5" cy="75" r="1.7" fill="#ffffff" opacity={0.8} />
      <circle cx="34" cy="79" r="1.2" fill="#ffffff" opacity={0.65} />
      <path d="M29 57 L29 82" stroke="#ffffff" strokeWidth={1.8} opacity={0.7} strokeLinecap="round" />
      <rect x="26.5" y="54" width="11" height="32" rx="5.5" fill="none" stroke="#64748b" strokeWidth={1.5} />
      <rect x="25.5" y="52.5" width="13" height="3.6" rx="1.8" fill="#94a3b8" />

      {/* ── Test tube two: lower, in her left hand ── */}
      <rect x="87" y="92" width="10" height="28" rx="5" fill="#eff6ff" />
      <path d="M87 106 L97 106 L97 115 Q97 120 92 120 Q87 120 87 115 Z" fill="#f59e0b" />
      <circle cx="90.5" cy="110" r="1.4" fill="#ffffff" opacity={0.75} />
      <path d="M89.5 95 L89.5 116" stroke="#ffffff" strokeWidth={1.7} opacity={0.6} strokeLinecap="round" />
      <rect x="87" y="92" width="10" height="28" rx="5" fill="none" stroke="#64748b" strokeWidth={1.5} />
      <rect x="86" y="90.5" width="12" height="3.4" rx="1.7" fill="#94a3b8" />

      {/* ── Hands, closing over each tube ── */}
      <circle cx="32" cy="88" r="5.2" fill="#f2cdae" />
      <path d="M29.4 87 Q32.4 85.5 34.4 87.5" stroke="#d9a87f" strokeWidth={2.2} strokeLinecap="round" fill="none" />
      <circle cx="90" cy="99" r="5.2" fill="#f2cdae" />
      <path d="M90 93.8 A5.2 5.2 0 0 1 90 104.2 A3 5.2 0 0 0 90 93.8 Z" fill="#000000" opacity={0.12} />
      <path d="M87.4 98 Q90.4 96.5 92.4 98.5" stroke="#d9a87f" strokeWidth={2.2} strokeLinecap="round" fill="none" />

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
      <path d="M35.5 31 C35.5 15 46 7 60 7 C74 7 84.5 15 84.5 31 C84.5 45 77 56.5 60 61 C43 56.5 35.5 45 35.5 31 Z" fill="#f2cdae" />
      <path d="M60 7 C74 7 84.5 15 84.5 31 C84.5 45 77 56.5 60 61 C69 55 71 44 71 31 C71 17 66 10 60 7 Z" fill="#000000" opacity={0.11} />
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
      {/* Strap, drawn first so it passes behind the lens */}
      <path d="M38 17 Q28 18 26 25" stroke="#334155" strokeWidth={3.4} fill="none" strokeLinecap="round" />
      <path d="M82 17 Q92 18 94 25" stroke="#334155" strokeWidth={3.4} fill="none" strokeLinecap="round" />
      {/* The soft edge that seals against the face — a slightly larger shape
          behind the lens, which is what gives the goggles DEPTH instead of
          looking like a sticker. */}
      <path d="M37 10.5 Q35 22 40.5 25.5 L54 25.5 Q60 22.5 66 25.5 L79.5 25.5 Q85 22 83 10.5 Z" fill="#475569" />
      {/* Lens */}
      <path d="M39.5 12.5 Q38 21 42.5 23.5 L54.5 23.5 Q60 20.8 65.5 23.5 L77.5 23.5 Q82 21 80.5 12.5 Z" fill="#7dd3fc" />
      <path d="M60 12.5 L80.5 12.5 Q82 21 77.5 23.5 L65.5 23.5 Q62 21 60 21 Z" fill="#000000" opacity={0.14} />
      {/* Two highlight streaks across the glass, at the same angle */}
      <path d="M44 21.5 L49.5 13.5" stroke="#ffffff" strokeWidth={2.6} opacity={0.75} strokeLinecap="round" />
      <path d="M52 21.5 L55.5 16" stroke="#ffffff" strokeWidth={1.7} opacity={0.55} strokeLinecap="round" />
      {/* The frame, drawn last so it sits over the lens as a real rim does */}
      <path d="M37 10.5 Q35 22 40.5 25.5 L54 25.5 Q60 22.5 66 25.5 L79.5 25.5 Q85 22 83 10.5 Z" fill="none" stroke="#1e293b" strokeWidth={2.3} strokeLinejoin="round" />
      {/* A vent on each side of the frame — the giveaway detail that says
          "laboratory goggles" rather than "swimming goggles". */}
      <path d="M40.5 14.5 L40.5 18" stroke="#1e293b" strokeWidth={1.5} strokeLinecap="round" />
      <path d="M79.5 14.5 L79.5 18" stroke="#1e293b" strokeWidth={1.5} strokeLinecap="round" />

      {/* ── Brows ── */}
      <path d="M46.5 28.4 Q51.5 24.8 56 27.2" stroke="#42291b" strokeWidth={2.1} strokeLinecap="round" fill="none" />
      <path d="M64 27.2 Q68.5 24.8 73.5 28.4" stroke="#42291b" strokeWidth={2.1} strokeLinecap="round" fill="none" />

      {/* ── Eyes ── */}
      <ellipse cx="51" cy="36" rx="5" ry="5.4" fill="#ffffff" />
      <ellipse cx="69" cy="36" rx="5" ry="5.4" fill="#ffffff" />
      <circle cx="51.7" cy="37" r="3" fill="#2b1d14" />
      <circle cx="69.7" cy="37" r="3" fill="#2b1d14" />
      <circle cx="50.2" cy="35" r="1.25" fill="#ffffff" />
      <circle cx="68.2" cy="35" r="1.25" fill="#ffffff" />
      <path d="M46 33.2 Q51 30.4 56 33.2" stroke="#8a6240" strokeWidth={1.7} strokeLinecap="round" fill="none" />
      <path d="M64 33.2 Q69 30.4 74 33.2" stroke="#8a6240" strokeWidth={1.7} strokeLinecap="round" fill="none" />
      <path d="M45.8 33.4 L43.4 31.4" stroke="#5c4029" strokeWidth={1.8} strokeLinecap="round" fill="none" />
      <path d="M74.2 33.4 L76.6 31.4" stroke="#5c4029" strokeWidth={1.8} strokeLinecap="round" fill="none" />

      {/* ── Nose ── */}
      <path d="M59 40 Q57 45.5 61 46.5" stroke="#c99a72" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* ── Mouth: a small, composed smile ── */}
      <path d="M54 51 Q60 56.4 66 51" stroke="#b06a56" strokeWidth={3} strokeLinecap="round" fill="none" />
    </svg>
  );
}

// ============================ BOBBY — Citizenship ===========================
// A police officer, because Citizenship is mostly about law, rights, justice
// and how power is held to account, and a uniform says all of that instantly.
//
// TWO DESIGN DECISIONS WORTH RECORDING
//
// 1. THE HEAD SITS 6 UNITS LOWER than every other character's. That is not a
//    mistake — the cap needs somewhere to go. Every mascot here uses the same
//    120x140 canvas, so adding anything ON TOP of a head means moving the head
//    down or losing the hat off the top edge. The body below is unchanged, so
//    the head-to-body RATIO still lands in the "designed mascot" range from the
//    note at the top of this file. Cap and head together read as the same
//    visual mass the other characters have.
//
// 2. THE ACCENT IS DARK PURPLE, NOT THE SUBJECT'S PINK. Every other mascot
//    carries a touch of its own subject's colour, and this one deliberately
//    does not. Pink against navy read as fancy dress rather than uniform —
//    the two colours are close in value and far apart in temperature, so the
//    stripes fought the shirt instead of sitting on it. Dark purple is a
//    neighbour of navy on the wheel, so it reads as a deliberate uniform
//    detail. Citizenship's CARD stays pink; only the character changed.
//
// The badge is a five-point star, so the coordinates below are not arbitrary:
// they are cos/sin of -90 + k*72 degrees at the outer radius, alternating with
// the same at 36 degrees offset and a smaller radius. Typed out rather than
// computed, because these are static drawings and a loop would cost a client
// component for no gain.
export function Bobby(props: MascotProps) {
  return (
    <svg
      viewBox="0 0 120 140"
      role="img"
      aria-label="Bobby, the Citizenship mascot: a smiling police officer in a navy uniform with a gold star badge"
      {...props}
    >
      {/* Light from the upper left, as with every other character. */}

      {/* ── Shoes. Toes turned slightly OUT and standing apart — the mistake
             corrected on Sterling, applied from the start here. ── */}
      <path d="M34 129 Q34 123 44 121.5 Q54 121.5 54.5 128 Q54.5 133.5 44 134.5 Q34 134.5 34 129 Z" fill="#101014" />
      <path d="M86 129 Q86 123 76 121.5 Q66 121.5 65.5 128 Q65.5 133.5 76 134.5 Q86 134.5 86 129 Z" fill="#101014" />
      <path d="M76 121.5 Q86 123 86 129 Q86 134.5 76 134.5 Q80 128 76 121.5 Z" fill="#000000" opacity={0.3} />
      <path d="M34.4 131 Q40 135 50 134 Q54 133 54.4 130.6 Q50 136 42 136 Q35 135.6 34.4 131 Z" fill="#8b8b96" opacity={0.5} />
      <path d="M85.6 131 Q80 135 70 134 Q66 133 65.6 130.6 Q70 136 78 136 Q85 135.6 85.6 131 Z" fill="#8b8b96" opacity={0.36} />
      <path d="M39.5 123.5 Q37.5 128 39.5 132.5" stroke="#3a3a44" strokeWidth={1.3} fill="none" strokeLinecap="round" />
      <path d="M80.5 123.5 Q82.5 128 80.5 132.5" stroke="#3a3a44" strokeWidth={1.3} fill="none" strokeLinecap="round" />

      {/* ── Trouser legs ── */}
      <path d="M43 104 L41 124 Q46 126 52 124 L53 104 Z" fill="#1b2b42" />
      <path d="M67 104 L69 124 Q74 126 79 124 L77 104 Z" fill="#1b2b42" />
      <path d="M71 104 L73 124 Q76 125 79 124 L77 104 Z" fill="#000000" opacity={0.2} />
      {/* The pink side stripes — see note 2 above. On the OUTER edge of each
          leg, which is where a real uniform stripe runs. */}
      <path d="M43.2 105 L41.4 123.2 L44 123.9 L45.6 105 Z" fill="#6d28d9" />
      <path d="M76.8 105 L78.6 123.2 L76 123.9 L74.4 105 Z" fill="#6d28d9" />
      <path d="M76.8 105 L78.6 123.2 L77.3 123.6 L75.6 105 Z" fill="#000000" opacity={0.22} />

      {/* ── Shirt body. Tapered to the waist, so it reads as a fitted uniform
             shirt rather than a smock. ── */}
      <path d="M34 72 Q60 65 86 72 L88 101 Q60 106 32 101 Z" fill="#2b4a72" />
      <path d="M60 66.5 Q77 66.5 86 72 L88 101 Q75 104 60 105.4 Z" fill="#000000" opacity={0.18} />

      {/* ── Chest pocket flaps. Two lines each, and the shirt stops being a
             plain block of colour. ── */}
      <path d="M68 84 L80 82.5 L79.6 87 L67.8 88.2 Z" fill="#1e3453" />
      <path d="M68.6 88.4 L79.4 87.2" stroke="#16283f" strokeWidth={1} strokeLinecap="round" fill="none" />

      {/* ── Epaulettes — the small strap across each shoulder. Almost nobody
             could name them, and everybody recognises the shape. ── */}
      <path d="M33.5 73.5 Q39 71 44.5 70 L45 74 Q39.5 75 34.5 77.5 Z" fill="#1e3453" />
      <path d="M86.5 73.5 Q81 71 75.5 70 L75 74 Q80.5 75 85.5 77.5 Z" fill="#16283f" />
      <circle cx="43" cy="72.4" r="1.5" fill="#f2c14e" />
      <circle cx="77" cy="72.4" r="1.5" fill="#d8a232" />

      {/* ── Collar, sitting over the neck ── */}
      <path d="M51 67 L60 77 L53.5 78 L48 69.5 Z" fill="#35578a" />
      <path d="M69 67 L60 77 L66.5 78 L72 69.5 Z" fill="#284467" />

      {/* ── The tie. Pink, per note 2. Knot, then a blade to a point. ── */}
      <path d="M56 69 L64 69 L65 76 L55 76 Z" fill="#6d28d9" />
      <path d="M60 69 L64 69 L65 76 L60 76 Z" fill="#000000" opacity={0.16} />
      <path d="M56 77 L64 77 L62 95 L60 98 L58 95 Z" fill="#6d28d9" />
      <path d="M60 77 L64 77 L62 95 L60 98 Z" fill="#000000" opacity={0.16} />

      {/* ── THE BADGE. A five-point star on the left chest, which is the single
             element doing the most work in this whole drawing: remove it and he
             is a man in a blue shirt. ── */}
      <path
        d="M45 76 L46.76 80.57 L51.66 80.84 L47.85 83.93 L49.11 88.66 L45 86 L40.89 88.66 L42.15 83.93 L38.34 80.84 L43.24 80.57 Z"
        fill="#f2c14e"
      />
      {/* Right half darker, so the star has a raised, metal look instead of
          reading as a flat sticker. */}
      <path
        d="M45 76 L46.76 80.57 L51.66 80.84 L47.85 83.93 L49.11 88.66 L45 86 Z"
        fill="#000000"
        opacity={0.16}
      />
      <circle cx="45" cy="82.4" r="1.7" fill="#8c5a12" opacity={0.55} />

      {/* ── Belt, with a gold buckle ── */}
      <path d="M32.5 99.5 Q60 104.4 87.5 99.5 L88 105 Q60 110 32 105 Z" fill="#15161c" />
      <rect x="55" y="102.6" width="10" height="6.2" rx="1.4" fill="#f2c14e" />
      <rect x="60" y="102.6" width="5" height="6.2" rx="1.4" fill="#000000" opacity={0.2} />

      {/* ── Sleeves ── */}
      <path d="M33 74 Q27 78 26 88 L28 95 Q34 96 36 90 L38 76 Z" fill="#264364" />
      <path d="M87 74 Q93 78 94 88 L92 95 Q86 96 84 90 L82 76 Z" fill="#264364" />
      <path d="M87 74 Q93 78 94 88 L92 95 Q89 95.5 88 93 L86 76 Z" fill="#000000" opacity={0.22} />
      {/* Cuff bands */}
      <path d="M27 91 Q32 92.6 36 90.6 L36 93.6 Q31 95.6 27 94 Z" fill="#16283f" />
      <path d="M84 90.6 Q88 92.6 93 91 L93 94 Q88 95.6 84 93.6 Z" fill="#16283f" />

      {/* ── Hands ── */}
      <circle cx="31" cy="97" r="5.3" fill="#e6b489" />
      <path d="M31 91.7 A5.3 5.3 0 0 1 31 102.3 A3 5.3 0 0 0 31 91.7 Z" fill="#000000" opacity={0.1} />
      <circle cx="89" cy="97" r="5.3" fill="#e6b489" />
      <path d="M89 91.7 A5.3 5.3 0 0 1 89 102.3 A3 5.3 0 0 0 89 91.7 Z" fill="#000000" opacity={0.13} />

      {/* ── Neck, and the shadow the jaw casts onto it ── */}
      <rect x="53" y="57" width="14" height="17" rx="5" fill="#d4a077" />
      <path d="M53 59 Q60 65 67 59 L67 63 Q60 68 53 63 Z" fill="#000000" opacity={0.17} />

      {/* ── Head. Sits 6 units lower than the rest of the cast — see note 1. ── */}
      <path d="M36 37 C36 21 46.5 13 60 13 C73.5 13 84 21 84 37 C84 50 76.5 61 60 65.5 C43.5 61 36 50 36 37 Z" fill="#e6b489" />
      <path d="M60 13 C73.5 13 84 21 84 37 C84 50 76.5 61 60 65.5 C68.5 60 70.5 49 70.5 37 C70.5 23.5 65.5 16 60 13 Z" fill="#000000" opacity={0.11} />

      {/* ── Ears ── */}
      <ellipse cx="36" cy="42" rx="3.8" ry="5.2" fill="#e6b489" />
      <ellipse cx="84" cy="42" rx="3.8" ry="5.2" fill="#d19b70" />

      {/* ── Hair showing below the cap. Only at the sides and only a sliver,
             because the cap covers the rest — which is exactly why a hat is a
             cheap way to make a character distinct. ── */}
      <path d="M36.4 31 Q40 32.6 42.4 33.6 L41.4 42 Q37.4 39.4 36.2 33.6 Z" fill="#2b1e16" />
      <path d="M83.6 31 Q80 32.6 77.6 33.6 L78.6 42 Q82.6 39.4 83.8 33.6 Z" fill="#211710" />

      {/* ── THE CAP ──
             Crown, then band, then peak, drawn in that order so each sits in
             front of the one above it. The peak is the widest thing on the
             character, which is what makes the silhouette read as "police" from
             across a page at thumbnail size. */}
      <path d="M41 24 C37.5 20 36.5 16.5 36.5 14.2 C36.5 11.2 46 10 60 10 C74 10 83.5 11.2 83.5 14.2 C83.5 16.5 82.5 20 79 24 Z" fill="#2b4a72" />
      <path d="M60 10 C74 10 83.5 11.2 83.5 14.2 C83.5 16.5 82.5 20 79 24 L69 24 Q72 15.5 60 13 Z" fill="#000000" opacity={0.16} />
      {/* The highlight that stops the crown reading as a flat semicircle */}
      <path d="M39.5 19 Q41 12.6 54 11.4 Q46 14.4 43.6 21 Z" fill="#ffffff" opacity={0.15} />
      {/* Band */}
      <path d="M38 23.6 Q60 27 82 23.6 L82 29.6 Q60 33 38 29.6 Z" fill="#22384f" />
      {/* Peak */}
      <path d="M32.5 28.8 Q60 33.6 87.5 28.8 Q86.5 37.4 60 39.3 Q33.5 37.4 32.5 28.8 Z" fill="#0a1119" />
      <path d="M35 30.6 Q47 34.6 60 35.1 Q46 35.9 36 32.8 Z" fill="#ffffff" opacity={0.2} />
      {/* A seam where the peak meets the band, so they read as two parts. */}
      <path d="M35 29.4 Q60 34.2 85 29.4" stroke="#000000" strokeWidth={1.1} opacity={0.42} fill="none" strokeLinecap="round" />

      {/* ── Cap badge — the same five-point star as the chest, smaller ── */}
      <path
        d="M60 13 L61.41 16.56 L65.23 16.8 L62.28 19.24 L63.23 22.95 L60 20.9 L56.77 22.95 L57.72 19.24 L54.77 16.8 L58.59 16.56 Z"
        fill="#f2c14e"
      />
      <path
        d="M60 13 L61.41 16.56 L65.23 16.8 L62.28 19.24 L63.23 22.95 L60 20.9 Z"
        fill="#000000"
        opacity={0.18}
      />

      {/* ── The shadow the peak casts across the forehead. Drawn BEFORE the
             eyes so the eyes sit on top of it. Without this the cap looks
             pasted on rather than worn. ── */}
      <path d="M37.5 36.5 Q60 40.5 82.5 36.5 Q81 41 60 43 Q39 41 37.5 36.5 Z" fill="#000000" opacity={0.12} />

      {/* ── Eyes. No brows: under a peaked cap they would be hidden, and
             leaving them out is what makes the cap sit low and look worn. ── */}
      <ellipse cx="51" cy="45" rx="5" ry="5.4" fill="#ffffff" />
      <ellipse cx="69" cy="45" rx="5" ry="5.4" fill="#ffffff" />
      <circle cx="51.7" cy="46" r="3" fill="#243a33" />
      <circle cx="69.7" cy="46" r="3" fill="#243a33" />
      <circle cx="50.2" cy="44" r="1.25" fill="#ffffff" />
      <circle cx="68.2" cy="44" r="1.25" fill="#ffffff" />
      <path d="M46 42.2 Q51 39.4 56 42.2" stroke="#a2764f" strokeWidth={1.7} strokeLinecap="round" fill="none" />
      <path d="M64 42.2 Q69 39.4 74 42.2" stroke="#a2764f" strokeWidth={1.7} strokeLinecap="round" fill="none" />

      {/* ── Nose ── */}
      <path d="M59.2 49.5 Q57.6 53.2 60.6 54" stroke="#bd8a5f" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* ── Mouth: a small closed smile. Approachable, not grinning — the point
             of a police mascot on a Citizenship page is "you can ask me
             things", not "cheer up". ── */}
      <path d="M53.5 59.5 Q60 64.5 66.5 59.5" stroke="#96634a" strokeWidth={2.6} strokeLinecap="round" fill="none" />
    </svg>
  );
}

// ============================ LUMEN — Religious Education ===================
// A lantern, not a person.
//
// WHY. Every other mascot here is a character with a face and clothes. For RE
// that is a trap: any human has to be dressed, and a hijab, a kippah, a turban,
// a crucifix — or the pointed absence of all of them — each reads as a claim
// about whose subject this is. There is no neutral costume. So the character is
// an object instead. Light as a metaphor for understanding turns up across
// traditions without being owned by any of them, and a lantern is warm rather
// than solemn, which suits a revision site.
//
// The face sits ON the glass rather than being drawn behind it, so the flame
// reads as the character's warmth rather than as something trapped inside.
export function Lumen(props: MascotProps) {
  return (
    <svg
      viewBox="0 0 120 140"
      role="img"
      aria-label="Lumen, the Religious Education mascot: a friendly glowing lantern"
      {...props}
    >
      {/* Light from the upper left, as with every other character. */}

      {/* ── The glow. Drawn FIRST so everything else sits on top of it, and
             kept very soft — a hard-edged glow reads as a bubble. ── */}
      <circle cx="60" cy="84" r="40" fill="#f4796a" opacity={0.16} />
      <circle cx="60" cy="90" r="26" fill="#fbbf24" opacity={0.16} />

      {/* ── Carry handle ── */}
      <path d="M44 26 Q60 4 76 26" stroke="#8a5a3c" strokeWidth={4} fill="none" strokeLinecap="round" />
      <path d="M60 5.6 Q73 8 75 25" stroke="#000000" strokeWidth={4} opacity={0.16} fill="none" strokeLinecap="round" />
      <circle cx="60" cy="30" r="3.6" fill="#a0673f" />

      {/* ── Top cap. A shallow roof, wider than the body, so the lantern reads
             as sheltered rather than as a jar. ── */}
      <path d="M30 44 Q60 30 90 44 L86 50 Q60 39 34 50 Z" fill="#a0673f" />
      <path d="M60 34.6 Q78 37.5 90 44 L86 50 Q74 43.6 60 41 Z" fill="#000000" opacity={0.18} />
      <path d="M36 44.6 Q48 38.4 60 37" stroke="#ffffff" strokeWidth={2} opacity={0.22} fill="none" strokeLinecap="round" />

      {/* ── The glass body ── */}
      <path d="M34 50 Q60 43 86 50 L88 104 Q60 112 32 104 Z" fill="#fde8d7" />
      <path d="M60 46.5 Q76 46.5 86 50 L88 104 Q75 108.4 60 110.4 Z" fill="#c98a63" opacity={0.16} />
      {/* A single diagonal sheen. Two would read as spectacles. */}
      <path d="M40 56 Q46 52 52 51.6 L44 100 Q39.5 99 37.5 97.6 Z" fill="#ffffff" opacity={0.4} />

      {/* ── Frame uprights, front corners only ── */}
      <path d="M34.5 50.5 L32.8 104" stroke="#8a5a3c" strokeWidth={3.4} strokeLinecap="round" />
      <path d="M85.5 50.5 L87.2 104" stroke="#7a4d32" strokeWidth={3.4} strokeLinecap="round" />

      {/* ── Arms and hands ──
             Added so Lumen belongs to the same family as the rest of the cast.
             Every other mascot has visible hands, and without them a lantern
             reads as a prop somebody left on a table rather than as a character
             standing next to Pixel and Hoot. The arms are short and curved
             outward so the silhouette still reads as a lantern first. ── */}
      <path d="M34 76 Q25 79.5 23.5 88" stroke="#a0673f" strokeWidth={6} fill="none" strokeLinecap="round" />
      <path d="M86 76 Q95 79.5 96.5 88" stroke="#8a5a3c" strokeWidth={6} fill="none" strokeLinecap="round" />
      <circle cx="23" cy="91" r="5.2" fill="#c98a63" />
      <circle cx="97" cy="91" r="5.2" fill="#b87d55" />
      <path d="M97 85.8 A5.2 5.2 0 0 1 97 96.2 A3 5.2 0 0 0 97 85.8 Z" fill="#000000" opacity={0.13} />

      {/* ── The flame. Warm core, brighter centre. ── */}
      <path d="M60 79 Q67.5 87 67.5 92.5 Q67.5 99 60 99 Q52.5 99 52.5 92.5 Q52.5 87 60 79 Z" fill="#f59e0b" />
      <path d="M60 79 Q67.5 87 67.5 92.5 Q67.5 99 60 99 Q64 93.5 63.4 89 Q62.8 84 60 79 Z" fill="#d97706" opacity={0.5} />
      <path d="M60 85 Q64 90 64 93.4 Q64 96.8 60 96.8 Q56 96.8 56 93.4 Q56 90 60 85 Z" fill="#fde047" />

      {/* ── Base ── */}
      <path d="M30 103 Q60 111 90 103 L88 114 Q60 121.4 32 114 Z" fill="#a0673f" />
      <path d="M60 108.6 Q76 107 90 103 L88 114 Q75 118.4 60 120 Z" fill="#000000" opacity={0.2} />
      {/* Feet, so it stands rather than floats */}
      <path d="M36 118 Q42 121.4 42 124.6 Q42 127.4 36 127.4 Q30.6 127.4 30.6 124.6 Q30.6 120.6 36 118 Z" fill="#7a4d32" />
      <path d="M84 118 Q78 121.4 78 124.6 Q78 127.4 84 127.4 Q89.4 127.4 89.4 124.6 Q89.4 120.6 84 118 Z" fill="#6b4229" />

      {/* ── The face, ON the glass. Placed high on the body so the flame reads
             as being below and behind it rather than coming out of its mouth. ── */}
      <ellipse cx="50" cy="61" rx="3.5" ry="4" fill="#3f2412" />
      <ellipse cx="70" cy="61" rx="3.5" ry="4" fill="#3f2412" />
      <circle cx="48.9" cy="59.6" r="1.15" fill="#ffffff" />
      <circle cx="68.9" cy="59.6" r="1.15" fill="#ffffff" />
      {/* Brows: level and slightly raised, which reads as curious rather than
          either worried (angled in) or startled (arched high). */}
      <path d="M46 53.6 Q50 51.6 54 53.6" stroke="#3f2412" strokeWidth={1.9} strokeLinecap="round" fill="none" />
      <path d="M66 53.6 Q70 51.6 74 53.6" stroke="#3f2412" strokeWidth={1.9} strokeLinecap="round" fill="none" />
      {/* A small closed smile — calm, not grinning. This is a subject where
          people bring real convictions, and an over-excited mascot would jar. */}
      <path d="M54.5 69 Q60 73 65.5 69" stroke="#3f2412" strokeWidth={2.4} strokeLinecap="round" fill="none" />
    </svg>
  );
}


// ─────────────────────────────────────────────────────────────────────────────
// VOYAGER — Languages (Spanish, French and German).
//
// Originally three separate "travel girl" mascots, one per language. Matthew
// asked for them to become ONE shared character instead, matching how Science
// already puts one mascot (Iris) in front of three separate GCSEs — the
// homepage was getting cluttered with a card and a mascot per language, and
// simpler was the right call, the same lesson Science had already taught.
//
// ── An explorer, not a tourist ──────────────────────────────────────────────
//
// A backpack and a map, rather than any of the national props the three
// separate characters carried (a sun hat, a beret, an alpine hat) — nothing
// here belongs to one country over the others, which is the whole point of a
// single mascot standing in for three different languages at once.
//
// ── The face is Iris's, unchanged ───────────────────────────────────────────
//
// After the three-mascot version, Matthew asked specifically for this one to
// be cute with no weird features — so rather than design a new face, this
// reuses Iris's head, ears, brows, eyes, nose and mouth coordinates exactly.
// That is the most-tested face in the whole cast, and copying proven geometry
// is a smaller risk than inventing new geometry a second time. Nothing about
// Voyager's face is new; only the hair, the outfit and the props are.
//
// ── One accent colour, once ─────────────────────────────────────────────────
//
// Matthew picked yellow for Languages. It appears in exactly one place — the
// bandana at her neck — the same restraint Sol, Plume and Reise each showed
// with their own single country colour. Everything else is worn khaki and
// brown, so the one yellow note actually reads as a colour choice rather than
// disappearing into a yellow character.
// ─────────────────────────────────────────────────────────────────────────────
export function Voyager(props: MascotProps) {
  return (
    <svg
      viewBox="0 0 120 140"
      role="img"
      aria-label="Voyager, the Languages mascot: a smiling explorer with a backpack, holding an open map"
      {...props}
    >
      {/* Light from the upper left, as with every other character here. */}

      {/* ── Boots ── */}
      <path d="M34 127 Q34 120 44.5 118.5 Q55 118.5 55.5 126 Q55.5 132 44.5 133.2 Q34 133.2 34 127 Z" fill="#4a3423" />
      <path d="M86 127 Q86 120 75.5 118.5 Q65 118.5 64.5 126 Q64.5 132 75.5 133.2 Q86 133.2 86 127 Z" fill="#4a3423" />
      <path d="M75.5 118.5 Q86 120 86 127 Q86 132 75.5 133.2 Q80 126 75.5 118.5 Z" fill="#000000" opacity={0.22} />
      <path d="M34 131.4 h21.5 M64.5 131.4 h21.5" stroke="#2e2015" strokeWidth={2.2} strokeLinecap="round" />
      <path d="M39 121 L37.5 118 M50 120 L49 117 M81 121 L82.5 118 M70 120 L71 117" stroke="#6b4a2e" strokeWidth={1.4} strokeLinecap="round" />

      {/* ── Socks, folded over the boot tops, with a thin yellow trim — a
             quiet first touch of the one accent colour. ── */}
      <path d="M41 104 L39 120 Q46 122.4 52 120 L53 104 Z" fill="#f4f4ee" />
      <path d="M67 104 L69 120 Q75 122.4 81 120 L79 104 Z" fill="#f4f4ee" />
      <path d="M72 104 L74 120 Q78 121.4 81 120 L79 104 Z" fill="#000000" opacity={0.06} />
      <path d="M39.4 108.6 h13.4 M67.6 108.6 h13.4" stroke="#eab308" strokeWidth={2} opacity={0.7} />

      {/* ── Cargo shorts, khaki ── */}
      <path d="M38 79 Q60 73 82 79 L86 100 Q60 106 34 100 Z" fill="#a9895c" />
      <path d="M60 74.4 Q73 75.6 82 79 L86 100 Q73 104 60 105.2 Z" fill="#000000" opacity={0.18} />
      {/* A cargo pocket, kept clear of the map's footprint below so nothing
          ends up hidden behind it. */}
      <rect x="37" y="86" width="10" height="10" rx="1.5" fill="#8a6a3c" />
      <path d="M37 89.4 h10" stroke="#6f5530" strokeWidth={1} />

      {/* ── Shirt: a simple safari shirt with a breast pocket ── */}
      <path d="M42 63 Q60 57 78 63 L80 81 Q60 86 40 81 Z" fill="#fdfaf0" />
      <path d="M60 58 Q70 58.5 78 63 L80 81 Q70 84.4 60 85.4 Z" fill="#000000" opacity={0.06} />
      <path d="M50 70 L60 69 L60.6 78 L50.6 79 Z" fill="#f1ecdc" />
      <path d="M50.4 73.4 L60.2 72.6" stroke="#c7bda0" strokeWidth={1} />

      {/* ── The yellow bandana — the ONE accent colour, in the same spot Sol,
             Plume and Reise each carried their own country's colour. ── */}
      <path d="M50 60.5 Q60 65.5 70 60.5 L67 68 Q60 71 53 68 Z" fill="#eab308" />
      <path d="M50 60.5 Q60 65.5 70 60.5" stroke="#eab308" strokeWidth={3.2} fill="none" strokeLinecap="round" />
      <path d="M60 60.5 L67 68 Q64 69.6 60 68.6 Z" fill="#000000" opacity={0.12} />

      {/* ── Sleeves, rolled ── */}
      <path d="M39 65 Q31 68 29 76 L31 82 Q37 82.5 38.5 77 L41 67 Z" fill="#fdfaf0" />
      <path d="M81 65 Q89 68 91 76 L89 82 Q83 82.5 81.5 77 L79 67 Z" fill="#fdfaf0" />
      <path d="M29.6 75.4 Q34.6 77.6 38.8 75.6" stroke="#c7bda0" strokeWidth={2} fill="none" />
      <path d="M81.2 75.6 Q85.4 77.6 90.4 75.4" stroke="#c7bda0" strokeWidth={2} fill="none" />
      <path d="M81 65 Q89 68 91 76 L89 82 Q86.5 82.3 85.5 79.5 L81 68 Z" fill="#000000" opacity={0.08} />

      {/* ── The backpack — worn canvas brown, not yellow, so the accent stays
             the bandana's alone rather than being smeared across the whole
             outfit. ── */}
      <path d="M14 90 Q12 105 17 117 Q26 121.4 28.5 112.4 Q23 99 24.5 88 Z" fill="#7a4a24" />
      <path d="M18 91 Q15.4 105 19.4 116 Q16.8 106 18.4 91 Z" fill="#000000" opacity={0.18} />
      <rect x="17.5" y="96" width="8.5" height="6" rx="1.6" fill="#c9a26a" />
      <path d="M15 90 Q21 85.4 27.4 89.4" stroke="#5b3a1a" strokeWidth={4.4} fill="none" strokeLinecap="round" />
      <path d="M43 63 Q29 76 21 90" stroke="#5b3a1a" strokeWidth={5.5} fill="none" strokeLinecap="round" />
      <circle cx="43" cy="63.5" r="2.6" fill="#c9a26a" />

      {/* ── Arms, both holding the map open in front of her ── */}
      <path d="M39 65 Q30 70 28 79" stroke="#f2cdae" strokeWidth={9} fill="none" strokeLinecap="round" />
      <circle cx="29" cy="81" r="5.6" fill="#f2cdae" />
      <path d="M81 65 Q90 69 92 78" stroke="#f2cdae" strokeWidth={9} fill="none" strokeLinecap="round" />
      <circle cx="93" cy="80" r="5.6" fill="#f2cdae" />
      <path d="M89.5 76.5 A5.6 5.6 0 0 1 89.5 83.5 A3.2 5.6 0 0 0 89.5 76.5 Z" fill="#000000" opacity={0.1} />

      {/* ── The map, held open between her hands — the prop that says
             "explorer" at a glance, the way Sterling's briefcase says
             "business". ── */}
      <path d="M47 78 L73 78 L71 95 L49 95 Z" fill="#f4ecd8" />
      <path d="M60 78 L60 95" stroke="#c7b98f" strokeWidth={1} />
      <path d="M51 83 Q58 81 60 85 Q62 81 69 83" stroke="#a3874f" strokeWidth={1.2} fill="none" strokeLinecap="round" />
      <path d="M53 89 L58 89 M63 89 L68 89" stroke="#a3874f" strokeWidth={1.2} strokeLinecap="round" />
      <circle cx="63" cy="86" r="1.4" fill="#c8372c" />

      {/* ── Neck, with the shadow the jaw casts onto it — Iris's exact
             coordinates, see the note above. ── */}
      <rect x="53" y="52" width="14" height="16" rx="5" fill="#e0b48f" />
      <path d="M53 54 Q60 60 67 54 L67 58 Q60 63 53 58 Z" fill="#000000" opacity={0.16} />

      {/* ── The plait, drawn BEFORE the head so it sits behind it — the same
             trick Iris's bun uses. ── */}
      <path d="M84 20 Q94 24 92 36 Q90 46 82 48 Q88 45 88 36 Q88 26 80 22 Z" fill="#7a4a24" />
      <path d="M84 20 Q94 24 92 36 Q90 46 82 48 Q87 44 86.4 36 Q86 27 80 22 Z" fill="#000000" opacity={0.15} />
      <path d="M83.4 24.6 h2.6 M84 31.4 h2.4 M84.6 38.8 h2.2" stroke="#9a6a3c" strokeWidth={1.2} opacity={0.6} />
      {/* The tie holding the plait, in the same gold as Hoot's and Quill's
          glasses — the family colour, appearing once more. */}
      <path d="M81.4 20 Q84 18.4 86.6 20" stroke="#f0c869" strokeWidth={2.4} fill="none" strokeLinecap="round" />

      {/* ── Head — Iris's exact oval, unshifted. She wears no hat, so there is
             no reason to move it down the way Sol, Plume and Reise's heads
             were. ── */}
      <path d="M35.5 31 C35.5 15 46 7 60 7 C74 7 84.5 15 84.5 31 C84.5 45 77 56.5 60 61 C43 56.5 35.5 45 35.5 31 Z" fill="#f2cdae" />
      <path d="M60 7 C74 7 84.5 15 84.5 31 C84.5 45 77 56.5 60 61 C69 55 71 44 71 31 C71 17 66 10 60 7 Z" fill="#000000" opacity={0.11} />

      {/* ── Ears ── */}
      <ellipse cx="35.5" cy="36" rx="3.8" ry="5.2" fill="#f2cdae" />
      <ellipse cx="84.5" cy="36" rx="3.8" ry="5.2" fill="#e8bd99" />

      {/* ── Hair: swept back off her face into the plait behind, with a soft
             fringe — Iris's exact scalp shape, reused for the same reason as
             the face: it is proven to fit this exact head outline. ── */}
      <path d="M35.5 33 Q33 8 60 6 Q87 8 84.5 33 Q83 21 78 17.5 Q68 23 57 21 Q46 19 41 24 Q37 26.5 35.5 33 Z" fill="#7a4a24" />
      <path d="M60 6 Q87 8 84.5 33 Q83 21 78 17.5 Q69 22.6 60 21.4 Z" fill="#000000" opacity={0.15} />
      <path d="M43 23 Q52 12 68 10 Q78 9.6 82 14 Q71 11.6 59 15.6 Q48 19 45 25 Z" fill="#ffffff" opacity={0.14} />
      <path d="M78 17.5 Q83 14.5 87 15" stroke="#7a4a24" strokeWidth={3.2} fill="none" strokeLinecap="round" />

      {/* ── Brows — Iris's exact coordinates. ── */}
      <path d="M46.5 28.4 Q51.5 24.8 56 27.2" stroke="#42291b" strokeWidth={2.1} strokeLinecap="round" fill="none" />
      <path d="M64 27.2 Q68.5 24.8 73.5 28.4" stroke="#42291b" strokeWidth={2.1} strokeLinecap="round" fill="none" />

      {/* ── Eyes — Iris's exact coordinates. ── */}
      <ellipse cx="51" cy="36" rx="5" ry="5.4" fill="#ffffff" />
      <ellipse cx="69" cy="36" rx="5" ry="5.4" fill="#ffffff" />
      <circle cx="51.7" cy="37" r="3" fill="#2b1d14" />
      <circle cx="69.7" cy="37" r="3" fill="#2b1d14" />
      <circle cx="50.2" cy="35" r="1.25" fill="#ffffff" />
      <circle cx="68.2" cy="35" r="1.25" fill="#ffffff" />
      <path d="M46 33.2 Q51 30.4 56 33.2" stroke="#8a6240" strokeWidth={1.7} strokeLinecap="round" fill="none" />
      <path d="M64 33.2 Q69 30.4 74 33.2" stroke="#8a6240" strokeWidth={1.7} strokeLinecap="round" fill="none" />

      {/* ── Nose — Iris's exact coordinates. ── */}
      <path d="M59 40 Q57 45.5 61 46.5" stroke="#c99a72" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* ── Mouth: a small, warm smile — Iris's exact coordinates. Steady
             rather than a wide grin, reading as ready-for-anything rather
             than over-excited. ── */}
      <path d="M54 51 Q60 56.4 66 51" stroke="#b06a56" strokeWidth={3} strokeLinecap="round" fill="none" />
    </svg>
  );
}


// ======================== RIDGE — Physical Education ========================
//
// The PE teacher, not the athlete. That was the choice worth thinking about:
// every other character here is someone who KNOWS the subject and is pleased
// to see you, and a sprinter mid-stride would have been the odd one out — a
// performance rather than a person, and a silent suggestion that GCSE PE is
// about being good at sport. It isn't. It is two written papers on anatomy,
// physiology, movement, training and society, sat by plenty of people who
// are ordinary at games. So Ridge is the one holding the clipboard: calm,
// encouraging, keeping an eye on you rather than racing you.
//
// ── The tracksuit is navy, and the trousers are darker navy ─────────────────
//
// Matthew asked for navy after seeing him in orange. Two knock-ons had to
// come with it, both because navy-on-navy simply disappears:
//   • the lanyard was navy and is now ORANGE, so it still reads against the
//     jacket — and it keeps a note of PE's own accent colour on him;
//   • the tracksuit bottoms are a DARKER navy than the jacket rather than
//     the same one, which is the only thing stopping him turning into a
//     single blue shape at the small sizes he actually gets drawn at (he is
//     28px wide in the revision queue).
//
// ── One gold thing ──────────────────────────────────────────────────────────
//
// The whistle is #f0c869 — the same gold that frames Hoot's and Quill's
// glasses and clasps Sterling's briefcase. It is the thread that ties the
// cast together, and it is worth being fussy about the SHAPE of it: the
// first version was a large gold oval hanging dead centre, and it read
// unmistakably as a MEDAL, which says "winner" rather than "coach". A
// whistle is small, hangs slightly off centre, and its silhouette is a
// rounded chamber with a flat mouthpiece sticking out to one side. Without
// that mouthpiece it is just a bead.
//
// ── Not a likeness ──────────────────────────────────────────────────────────
//
// Matthew sent a photo of a real person as a reference. The cropped dark
// hair, the grey at the temples and the stubble are styling cues taken from
// it; the face is this cast's standard geometry, the same head outline and
// eye positions as Sterling and Voyager. He is deliberately not a portrait
// of anybody.
// ─────────────────────────────────────────────────────────────────────────────
export function Ridge(props: MascotProps) {
  return (
    <svg
      viewBox="0 0 120 140"
      role="img"
      aria-label="Ridge, the Physical Education mascot: a smiling coach in a navy tracksuit with a whistle and a clipboard"
      {...props}
    >
      {/* Light from the upper left, as with every other character here — so
          every shadow below sits on the right of its own form. */}
      {/* ── Trainers. White with an orange flash, drawn toes-out and apart so he
             does not stand pigeon-toed — the same correction Sterling needed. ── */}
      <path d="M35 130 Q35 123.5 45 122 Q55 122 55.5 129 Q55.5 135 45 136 Q35 136 35 130 Z" fill="#f4f5f7"/>
      <path d="M85 130 Q85 123.5 75 122 Q65 122 64.5 129 Q64.5 135 75 136 Q85 136 85 130 Z" fill="#e6e8ec"/>
      <path d="M75 122 Q85 123.5 85 130 Q85 135 75 136 Q79 129 75 122 Z" fill="#000000" opacity={0.14}/>
      {/* Rubber soles */}
      <path d="M35 131.5 Q42 136.6 51 135.6 Q55.2 134.6 55.5 132 L55.5 134 Q51 137.6 43 137.6 Q36 137.2 35 133.4 Z" fill="#2b3040"/>
      <path d="M85 131.5 Q78 136.6 69 135.6 Q64.8 134.6 64.5 132 L64.5 134 Q69 137.6 77 137.6 Q84 137.2 85 133.4 Z" fill="#232838"/>
      {/* One orange flash on each shoe. One stripe is all it takes to read as a trainer. */}
      <path d="M39 127.5 Q45 125.5 51 127" stroke="#ea580c" strokeWidth={2.6} fill="none" strokeLinecap="round"/>
      <path d="M81 127.5 Q75 125.5 69 127" stroke="#c2410c" strokeWidth={2.6} fill="none" strokeLinecap="round"/>

      {/* ── Tracksuit bottoms. Navy, tapered, with the white side stripe that
             says tracksuit faster than any other single detail. ── */}
      <path d="M44.5 102 L43 125 Q48 127 53 125 L53.5 102 Z" fill="#1e2536"/>
      <path d="M66.5 102 L67 125 Q72 127 77 125 L75.5 102 Z" fill="#1e2536"/>
      <path d="M71 102 L72 125 Q74.5 126.2 77 125 L75.5 102 Z" fill="#000000" opacity={0.22}/>
      <path d="M45.8 103 L44.4 124.4" stroke="#f4f5f7" strokeWidth={1.6} opacity={0.85} strokeLinecap="round"/>
      <path d="M74.4 103 L75.6 124.4" stroke="#f4f5f7" strokeWidth={1.6} opacity={0.5} strokeLinecap="round"/>

      {/* ── Track jacket. Tapered to the waist rather than a rounded blob. ── */}
      <path d="M35 69 Q60 61.5 85 69 L86.5 106 Q60 113 33.5 106 Z" fill="#2f4f87"/>
      <path d="M60 65.25 Q72.5 65.25 85 69 L86.5 106 Q73.25 109.5 60 109.5 Z" fill="#000000" opacity={0.17}/>
      {/* Ribbed hem */}
      <path d="M34.4 101.5 Q60 108.5 85.6 101.5 L86.5 106 Q60 113 33.5 106 Z" fill="#000000" opacity={0.16}/>

      {/* ── The zip, running the full length: the detail that separates a track
             jacket from a jumper. ── */}
      <path d="M60 65 L60 107" stroke="#16264a" strokeWidth={1.9} strokeLinecap="round"/>
      <rect x="58.4" y="70" width="3.2" height="5" rx="1.4" fill="#f0c869"/>

      {/* ── Sleeves ── */}
      <path d="M36.5 71.5 Q31 75.5 30 86.5 L32 93.5 Q37.5 94.5 39.5 88.5 L41.5 73.5 Z" fill="#2f4f87"/>
      <path d="M83.5 71.5 Q89 75.5 90 86.5 L88 93.5 Q82.5 94.5 80.5 88.5 L78.5 73.5 Z" fill="#2f4f87"/>
      <path d="M83.5 71.5 Q89 75.5 90 86.5 L88 93.5 Q85 94 84 91.5 L82.5 73.5 Z" fill="#000000" opacity={0.2}/>
      {/* Two white stripes down the outside of each sleeve — the classic
           tracksuit marking. Drawn after the sleeves so they sit on the fabric,
           and following the sleeve's own curve rather than cutting across it. */}
      <path d="M34.4 76.5 Q32.4 82.5 32 90" stroke="#f4f5f7" strokeWidth={1.5} fill="none" strokeLinecap="round" opacity={0.95}/>
      <path d="M37.4 75.5 Q35.4 81.5 35 89.5" stroke="#f4f5f7" strokeWidth={1.5} fill="none" strokeLinecap="round" opacity={0.95}/>
      <path d="M85.6 76.5 Q87.6 82.5 88 90" stroke="#f4f5f7" strokeWidth={1.5} fill="none" strokeLinecap="round" opacity={0.6}/>
      <path d="M82.6 75.5 Q84.6 81.5 85 89.5" stroke="#f4f5f7" strokeWidth={1.5} fill="none" strokeLinecap="round" opacity={0.6}/>

      {/* Ribbed cuffs */}
      <path d="M30.4 90.5 Q34.5 92 39 90 L39 93.6 Q34.5 95.4 30.8 94 Z" fill="#223a66"/>
      <path d="M81 90 Q85.5 92 89.6 90.5 L89.2 94 Q85 95.4 81 93.6 Z" fill="#1a2d51"/>

      {/* ── Collar, standing up as a track jacket's does ── */}
      <path d="M50.5 63.5 Q60 59.5 69.5 63.5 L68.5 69 Q60 65.5 51.5 69 Z" fill="#223a66"/>
      <path d="M60 61.5 Q65.5 62 69.5 63.5 L68.5 69 Q64.5 67 60 66.5 Z" fill="#000000" opacity={0.14}/>

      {/* ── Lanyard and whistle. The whistle is gold, picking up the same
             #f0c869 that frames Hoot's and Quill's glasses and clasps Sterling's
             briefcase — the thread that ties the cast together.
             Rebuilt after the first render, where a large gold oval hanging dead
             centre read as a MEDAL. A whistle is small, hangs slightly off centre,
             and its silhouette is a rounded chamber with a flat mouthpiece out to
             one side — without that mouthpiece it is just a bead. ── */}
      <path d="M54 64 Q56 77 57.8 84" stroke="#ea580c" strokeWidth={1.9} fill="none" strokeLinecap="round"/>
      <path d="M66 64 Q64 77 62.6 84" stroke="#ea580c" strokeWidth={1.9} fill="none" strokeLinecap="round" opacity={0.75}/>
      {/* the split ring the whistle hangs from */}
      <circle cx="60.2" cy="85.4" r="1.5" fill="none" stroke="#9aa3b2" strokeWidth={0.9}/>
      {/* chamber */}
      <path d="M57.4 87.6 Q60.6 86.6 62.6 88.2 Q64 89.6 63.4 91.4 Q62.4 93.4 59.6 93.4 Q56.8 93.2 56.2 91.2 Q55.8 89 57.4 87.6 Z" fill="#f0c869"/>
      {/* mouthpiece, out to the right */}
      <path d="M63 88.6 L67.6 89.4 Q68.6 90.2 67.6 91 L63.2 91.6 Z" fill="#f0c869"/>
      <path d="M63 88.6 L67.6 89.4 Q68.6 90.2 67.6 91 L63.2 91.6 Q64.6 90.2 63 88.6 Z" fill="#000000" opacity={0.18}/>
      <path d="M61 86.9 Q63.6 87.6 63.4 91.4 Q62.4 93.4 59.6 93.4 Q62.6 90.6 61 86.9 Z" fill="#000000" opacity={0.16}/>
      {/* the air hole on top, and a highlight on the upper left */}
      <ellipse cx="59.4" cy="88.6" rx="1.5" ry="0.9" fill="#7c2d12" opacity={0.55}/>
      <path d="M57.6 88.4 Q58.6 87.4 60 87.3" stroke="#ffffff" strokeWidth={0.9} opacity={0.5} fill="none" strokeLinecap="round"/>

      {/* ── The clipboard, drawn after the jacket so it sits in front of him.
             The board is angled, because a flat rectangle reads as a sign rather
             than something held. ── */}
      <g transform="translate(3.5 -1) rotate(-11 26 104)">
        <rect x="12" y="92" width="28" height="34" rx="3" fill="#c8a06a"/>
        <rect x="26" y="92" width="14" height="34" rx="3" fill="#000000" opacity={0.14}/>
        <rect x="15" y="98" width="22" height="25" rx="1.4" fill="#fbfbfd"/>
        <rect x="21" y="89.5" width="10" height="6" rx="1.8" fill="#9aa3b2"/>
        <rect x="22.6" y="88" width="6.8" height="4" rx="1.6" fill="#c3ccd9"/>
        {/* Three ruled lines and a tick: enough to say "someone is being assessed" */}
        <path d="M18 104 L34 104" stroke="#93a0b4" strokeWidth={1.2} strokeLinecap="round"/>
        <path d="M18 110 L34 110" stroke="#93a0b4" strokeWidth={1.2} strokeLinecap="round"/>
        <path d="M18 116 L29 116" stroke="#93a0b4" strokeWidth={1.2} strokeLinecap="round"/>
        <path d="M29.5 112.5 L31.5 114.6 L35.5 109.6" stroke="#16a34a" strokeWidth={1.9} fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </g>

      {/* ── Hands ── */}
      <circle cx="34" cy="93" r="5" fill="#e8bb95"/>
      <path d="M34 88 A5 5 0 0 1 34 98 A3 5 0 0 0 34 88 Z" fill="#000000" opacity={0.1}/>
      <path d="M31.6 91.6 Q34.5 90 36.6 92.2" stroke="#c9906a" strokeWidth={2.1} strokeLinecap="round" fill="none"/>
      <circle cx="86" cy="94.5" r="5.2" fill="#e8bb95"/>
      <path d="M86 89.3 A5.2 5.2 0 0 1 86 99.7 A3 5.2 0 0 0 86 89.3 Z" fill="#000000" opacity={0.12}/>

      {/* ── Neck, with the shadow the jaw casts onto it ── */}
      <rect x="52.2" y="53" width="15.6" height="12" rx="5" fill="#dfae86"/>
      <path d="M53.4 54.4 Q60 59.6 66.6 54.4 L66.6 58 Q60 62.4 53.4 58 Z" fill="#000000" opacity={0.16}/>

      {/* ── Head. An oval taller than it is wide — a perfect circle is the most
             toy-like shape available. Same geometry as the rest of the cast. ── */}
      <path d="M35.5 31 C35.5 15 46 7 60 7 C74 7 84.5 15 84.5 31 C84.5 45 77 56.5 60 61 C43 56.5 35.5 45 35.5 31 Z" fill="#e8bb95"/>
      <path d="M60 7 C74 7 84.5 15 84.5 31 C84.5 45 77 56.5 60 61 C69 55 71 44 71 31 C71 17 66 10 60 7 Z" fill="#000000" opacity={0.11}/>

      {/* ── Ears ── */}
      <ellipse cx="35.5" cy="36" rx="3.8" ry="5.2" fill="#e8bb95"/>
      <ellipse cx="84.5" cy="36" rx="3.8" ry="5.2" fill="#dcab84"/>

      {/* ── Hair. A short, dark crop, cropped tight at the sides and textured on
             top rather than combed flat, with a touch of grey at the temples.
             Styling cues taken from a reference photo Matthew sent; deliberately
             NOT a likeness of that person. ── */}
      <path d="M36.6 30 Q34 11 60 6.4 Q86 11 83.4 30 Q82.4 19.6 77 16.6 Q68 21.4 58 22.4 Q48 23.4 42.8 20.2 Q38.4 23 36.6 30 Z" fill="#241a12"/>
      <path d="M60 6.4 Q86 11 83.4 30 Q82.4 19.6 77 16.6 Q68 21.4 60 22.2 Z" fill="#000000" opacity={0.2}/>
      {/* Texture on top: short strokes rather than one smooth sweep, which is what
           separates a cropped, styled cut from a helmet of hair. */}
      <path d="M46 17 Q48.6 12.6 53 10.8" stroke="#3a2a1c" strokeWidth={1.6} opacity={0.75} fill="none" strokeLinecap="round"/>
      <path d="M53.6 14 Q56.6 10.2 61 8.8" stroke="#3a2a1c" strokeWidth={1.6} opacity={0.7} fill="none" strokeLinecap="round"/>
      <path d="M62 13.4 Q65.6 10 70 9.6" stroke="#3a2a1c" strokeWidth={1.6} opacity={0.6} fill="none" strokeLinecap="round"/>
      <path d="M70 15 Q73.6 12.4 77 13.6" stroke="#3a2a1c" strokeWidth={1.6} opacity={0.5} fill="none" strokeLinecap="round"/>
      <path d="M44 20 Q52 11.6 65 9.2 Q74 8.6 79 12.6 Q69 10.8 58.6 15.4 Q49.6 18.8 46 22" fill="none" stroke="#ffffff" strokeWidth={1.2} opacity={0.1} strokeLinecap="round"/>
      {/* Grey at the temples — one small mark on each side, no more. */}
      <path d="M37.6 27.6 Q38.4 22.6 42.8 20.2 Q39.8 24 39.2 28.4 Z" fill="#9aa0a6" opacity={0.5}/>
      <path d="M82.4 27.6 Q81.8 22.4 78 19.8 Q80.6 23.8 80.8 28.4 Z" fill="#9aa0a6" opacity={0.32}/>
      {/* Tapered sides: the hair stops above the ears, which is most of what makes
           a short crop read as current rather than dated. */}
      <path d="M36.9 30 Q37.4 24.5 42.8 20.2 Q39.4 24.6 39 29.6 Z" fill="#000000" opacity={0.22}/>
      <path d="M83.1 30 Q82.8 24 78.6 20 Q81 24.4 81.4 29.8 Z" fill="#000000" opacity={0.16}/>

      {/* ── Stubble. A soft shape following the jaw at low opacity — drawn
             BEFORE the mouth so the mouth sits on top of it. Any darker and it
             stops being stubble and becomes a beard. ── */}
      <path d="M39.5 38 Q41 52 60 60.6 Q79 52 80.5 38 Q79.5 49 74 53.5 Q67 58 60 58.4 Q53 58 46 53.5 Q40.5 49 39.5 38 Z" fill="#3a2a1c" opacity={0.2}/>

      {/* ── Brows. Level, not arched: an arch reads as surprise, and the
             expression wanted is calm and encouraging. ── */}
      <path d="M46.5 27.5 Q51 25.1 55.5 26.9" stroke="#2b1e14" strokeWidth={2.6} strokeLinecap="round" fill="none"/>
      <path d="M64.5 26.9 Q69 25.1 73.5 27.5" stroke="#2b1e14" strokeWidth={2.6} strokeLinecap="round" fill="none"/>

      {/* ── Eyes. Slightly oval, one highlight each. ── */}
      <ellipse cx="51" cy="34.5" rx="4.1" ry="4.8" fill="#ffffff"/>
      <ellipse cx="69" cy="34.5" rx="4.1" ry="4.8" fill="#ffffff"/>
      <ellipse cx="51.6" cy="35.1" rx="2.6" ry="3.1" fill="#3a2b1c"/>
      <ellipse cx="69.6" cy="35.1" rx="2.6" ry="3.1" fill="#3a2b1c"/>
      <circle cx="50.4" cy="33.4" r="1.15" fill="#ffffff"/>
      <circle cx="68.4" cy="33.4" r="1.15" fill="#ffffff"/>

      {/* ── Nose: one short stroke. Any more and it becomes the focus. ── */}
      <path d="M60 38.5 Q61.8 41.6 59.4 42.6" stroke="#c9906a" strokeWidth={1.7} fill="none" strokeLinecap="round"/>

      {/* ── Mouth. An open, encouraging smile rather than a closed line. ── */}
      <path d="M53 46.5 Q60 52.6 67 46.5 Q60 49.4 53 46.5 Z" fill="#7c3b32"/>
      <path d="M54.6 47.4 Q60 51.6 65.4 47.4 Q60 49 54.6 47.4 Z" fill="#ffffff" opacity={0.9}/>
    </svg>
  );
}
