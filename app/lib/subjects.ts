// THE SINGLE SOURCE OF TRUTH for what's on the site.
//
// Every page reads from this one file: the homepage cards, the subject pages,
// the topic pages, the dashboard. Add a topic here and it appears everywhere,
// with a working URL, automatically. Nothing else needs editing.
//
// That's the whole argument for separating data from display. The alternative —
// typing topic names into each page that shows them — means every change has to
// be made in several places, and one day you'll miss one.

export type IconName =
  | "globe" | "binary" | "code" | "network" | "chip" | "flow" | "terminal"
  | "shield" | "database" | "logic" | "grid" | "scales" | "pencil" | "hash"
  | "triangle" | "percent" | "chart" | "dice" | "circle" | "vector" | "book"
  | "feather" | "quote" | "mask" | "news"
  // Added when the topic list was widened to cover the rest of the GCSE
  // specifications. TypeScript is doing real work here: adding a name to this
  // list and forgetting to draw it is a compile error, not a blank space on
  // the live site.
  | "disk" | "cog" | "layers" | "bug" | "toolbox" | "power" | "cube"
  | "axis" | "compass" | "gauge" | "mic" | "clock"
  // History
  | "poppy" | "candle" | "factory" | "torch" | "crown" | "flask" | "ship"
  | "castle" | "scroll" | "vote" | "gavel" | "atom" | "suitcase"
  // Geography
  | "map" | "cloud" | "volcano" | "droplet" | "wave" | "leaf" | "city"
  | "thermometer" | "recycle"
  // Languages
  | "speech" | "heart" | "house" | "meal";

export type Topic = {
  // The slug is the bit that appears in the URL, so it must be lowercase with
  // hyphens instead of spaces and no punctuation: /subjects/maths/circle-theorems
  slug: string;
  title: string;
  icon: IconName;
};

export type YearGroup = {
  year: string;
  topics: Topic[];
};

export type Subject = {
  slug: string;
  name: string;
  blurb: string;
  gradient: string;
  shadow: string;
  // A single solid colour for this subject, used where a gradient won't do:
  // progress rings, chart bars, status pills. It was previously borrowed from
  // YEAR_STYLES, which only has three entries — so the fourth subject silently
  // came out blue. Colours that mean "which subject" belong to the subject.
  accent: string;
  mascot:
    | "pixel"
    | "hoot"
    | "quill"
    | "knight"
    | "atlas"
    | "sterling"
    | "iris"
    | "bobby"
    | "lumen"
    | "voyager"
    | "ridge";

  // Which GROUP this subject belongs to, if any.
  //
  // Science is three separate GCSEs — Biology, Chemistry and Physics — with
  // separate content, separate exams and separate progress. Putting all three
  // on the homepage alongside six other subjects would make nine cards and bury
  // everything else, so they sit behind one "Science" card instead.
  //
  // Languages works the same way and for the same reason: Spanish, French and
  // German are three separate GCSEs with separate content and separate
  // progress, so they sit behind one "Languages" card rather than three.
  // Matthew asked for exactly this after the site briefly had three separate
  // language cards and three separate mascots — it was too much clutter for
  // one homepage, the same lesson Science had already taught.
  //
  // Note what this does NOT do: it does not make them sub-subjects. They are
  // ordinary subjects with ordinary slugs and URLs, so progress tracking, the
  // sitemap, pre-rendering and every topic page work on them unchanged. The
  // group is purely a navigation layer on top.
  group?: "science" | "languages";

  // A rough, hand-judged ranking of typical GCSE workload — see the comment
  // above SUBJECT_GROUPS for what it's based on and why it's only ever used
  // to ORDER the homepage cards, never shown as a number anywhere.
  //
  // Optional, and only ever set on the eight subjects that appear on the
  // homepage on their own. A subject INSIDE a group (Biology, Spanish, and
  // so on) never appears as its own homepage card — the group card does —
  // so giving it a weight of its own would be a number nothing ever reads.
  revisionWeight?: number;

  years: YearGroup[];
};

// A group is one card on the homepage that leads to a page listing its members.
export type SubjectGroup = {
  slug: string;
  name: string;
  blurb: string;
  gradient: string;
  shadow: string;
  accent: string;
  mascot: Subject["mascot"];
  revisionWeight: number;
};

// ⚠️ COLOURS WERE CHOSEN BY LOOKING AT THEM, NOT BY REASONING ABOUT THEM.
//
// Nine subjects now share one progress chart, where colour is the ONLY thing
// telling them apart — there is no label on a ring. Swatches were rendered side
// by side and compared before these were fixed, which changed two of the four
// picks:
//
//   Physics was going to be indigo. Next to Computer Science's blue it was
//   indistinguishable, so it became SLATE — which also suits physics better
//   (steel, instruments) than another blue would have.
//
//   Chemistry was going to be gold. Next to Maths' rust orange it was
//   indistinguishable, so it became MAGENTA, which is clearly separable from
//   English's violet because one is pink-purple and the other blue-purple.
//
// Biology is a yellow-green rather than the obvious green, because Geography
// already owns emerald and the two must not be confused.
//
// The GROUP card is allowed to sit closer to an existing colour than a subject
// may, because it always appears as a large card with its own name and mascot
// on it. Colour is decoration there; on a progress ring it is the only
// identifier.
//
// ─────────────────────────────────────────────────────────────────────────────
// revisionWeight — A ROUGH, HAND-JUDGED ESTIMATE, USED ONLY TO ORDER THE
// HOMEPAGE CARDS
//
// Matthew asked for the homepage sorted by roughly how much revision each
// subject usually takes. There's no way to measure that — it depends on the
// exam board, the school, and the student — so this is a ballpark ranking
// from ordinary GCSE study-time guidance, not something calculated from data
// on the site. Roughly, it weighs how many exam papers a subject usually has
// and how broad its content is: Combined/Triple Science covers the most
// content across the most papers of any single card here, so it ranks
// highest; Citizenship is commonly one of the lightest GCSEs, so it ranks
// lowest.
//
// Higher number = more typical revision time = appears FIRST on the
// homepage. It's a starting point, not a fact — if it doesn't match reality
// for a given exam board or school, the fix is just to change the numbers
// below; nothing else depends on the actual values, only their order.
//
// Deliberately NOT used to order the dashboard's subject grid or the
// progress page — Matthew asked for this on the homepage specifically, and
// those other two pages are about a real student's OWN recorded progress,
// where a rough general guess like this one would be an odd thing to rank by.
// ─────────────────────────────────────────────────────────────────────────────
export const SUBJECT_GROUPS: SubjectGroup[] = [
  {
    slug: "science",
    name: "Science",
    blurb: "Biology, Chemistry and Physics",
    gradient: "linear-gradient(150deg, #818cf8 0%, #4338ca 45%, #1e1b4b 100%)",
    shadow:
      "shadow-[0_18px_40px_-18px_rgba(67,56,202,0.75)] hover:shadow-[0_28px_60px_-20px_rgba(67,56,202,0.9)]",
    accent: "#4338ca",
    mascot: "iris",
    // Three separate GCSEs' worth of content behind one card — the broadest
    // and most exam-heavy subject on the homepage by a clear margin.
    revisionWeight: 10,
  },
  {
    slug: "languages",
    name: "Languages",
    blurb: "Spanish, French and German",
    // Yellow, as Matthew asked. It only has to work as ONE card here — the
    // three members underneath keep their own separate gold/blue/lime accents
    // for the progress chart, where colour is the only thing telling nine-plus
    // subjects apart. This group card is decoration, not an identifier, so it
    // can afford to sit close to Spanish's own gold; the two never appear on
    // the same chart together.
    gradient: "linear-gradient(150deg, #fef08a 0%, #eab308 45%, #713f12 100%)",
    shadow:
      "shadow-[0_18px_40px_-18px_rgba(234,179,8,0.75)] hover:shadow-[0_28px_60px_-20px_rgba(234,179,8,0.9)]",
    accent: "#eab308",
    mascot: "voyager",
    // Four skills (reading, writing, listening, speaking) each demanding
    // sustained vocabulary work — a lot of ongoing revision, even though it's
    // "only" one language once a student picks one.
    revisionWeight: 6,
  },
];

// The three year columns are always the same colours — blue, orange, violet —
// on every subject page, matching the design. So the colours mean "Year 9 /
// 10 / 11", not "which subject you're in".
//
// ⚠️ LOOK THEM UP WITH yearStyle(), NOT BY ARRAY POSITION.
//
// These used to be read as YEAR_STYLES[index], where index was the position in
// a subject's `years` array. That works only while every subject starts at Year
// 9. Business does not — it is a GCSE option that schools begin in Year 10 —
// so its first year group sits at index 0 and would have been painted in the
// Year 9 blue, with the words "Year 10" written on it.
//
// The lesson is worth keeping: position in a list is not the same thing as
// identity, and code that quietly assumes they match breaks the first time
// something legitimately starts partway through.
export const YEAR_STYLES = [
  {
    gradient: "linear-gradient(150deg, #93c5fd 0%, #60a5fa 55%, #3b82f6 100%)",
    text: "#0b2f6b",
  },
  {
    gradient: "linear-gradient(150deg, #fed7aa 0%, #fdba74 55%, #fb923c 100%)",
    text: "#7c2d12",
  },
  {
    gradient: "linear-gradient(150deg, #ddd6fe 0%, #c4b5fd 55%, #a78bfa 100%)",
    text: "#3b0764",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// IMPORTANT CAVEAT, worth knowing before anyone relies on this:
//
// GCSE topics are NOT identical everywhere. Different exam boards (AQA, Edexcel,
// OCR, WJEC) split the same subject up differently, and schools teach topics in
// different years — plenty of schools start GCSE content in Year 9, others in
// Year 10. English set texts vary the most: one school does Macbeth, another
// does Romeo and Juliet.
//
// So treat these lists as a sensible common-denominator starting point, not as
// gospel. Worth checking against your own school's scheme of work and swapping
// anything that doesn't match. Eventually the site may need to ask which exam
// board a student is on.
// ─────────────────────────────────────────────────────────────────────────────

// Which colour belongs to a given year, by NAME. Falls back to the first style
// for anything unrecognised, so an unusual year label renders plainly rather
// than crashing the page.
export function yearStyle(year: string) {
  const index = ["Year 9", "Year 10", "Year 11"].indexOf(year);
  return YEAR_STYLES[index] ?? YEAR_STYLES[0];
}

export const SUBJECTS: Subject[] = [
  {
    slug: "computer-science",
    name: "Computer Science",
    blurb: "Choose a topic to start revising",
    // Three colour stops instead of two gives the fill a sense of depth.
    gradient: "linear-gradient(150deg, #60a5fa 0%, #2563eb 45%, #1a3a8f 100%)",
    // A shadow tinted with the card's own colour, rather than grey.
    shadow:
      "shadow-[0_18px_40px_-18px_rgba(37,99,235,0.75)] hover:shadow-[0_28px_60px_-20px_rgba(37,99,235,0.9)]",
    accent: "#1d4ed8",
    mascot: "pixel",
    // Two exam papers and a practical/programming element — solid content,
    // but fewer papers than the essay-heavy subjects above it.
    revisionWeight: 4,
    years: [
      {
        year: "Year 9",
        topics: [
          { slug: "digital-literacy", title: "Digital literacy", icon: "globe" },
          { slug: "binary-and-data", title: "Binary & data", icon: "binary" },
          // ── THE PROGRAMMING LADDER ──────────────────────────────────
          // Matthew: "start from the easy stuff and then get harder and
          // harder gradually." Rungs 1-4 are here in Year 9, 5-9 in Year 10.
          // Each one assumes only the ones above it, and nothing else.
          { slug: "programming-foundations", title: "Variables & data types", icon: "code" },
          { slug: "programming-input-and-output", title: "Input, output & operators", icon: "terminal" },
          { slug: "programming-selection", title: "Selection: if & else", icon: "compass" },
          { slug: "programming-iteration", title: "Iteration: loops", icon: "circle" },
          { slug: "networks-basics", title: "Networks basics", icon: "network" },
        ],
      },
      {
        year: "Year 10",
        topics: [
          { slug: "systems-architecture", title: "Systems architecture", icon: "chip" },
          { slug: "memory-and-storage", title: "Memory & storage", icon: "disk" },
          { slug: "system-software", title: "System software", icon: "cog" },
          { slug: "algorithms", title: "Algorithms", icon: "flow" },
          // Rungs 5-9. Lists come first because everything after them
          // assumes you can loop over a collection.
          { slug: "programming-lists-and-arrays", title: "Lists & arrays", icon: "grid" },
          { slug: "programming-strings", title: "Working with text", icon: "quote" },
          { slug: "programming-subprograms", title: "Subprograms", icon: "cube" },
          { slug: "programming-file-handling", title: "File handling", icon: "book" },
          { slug: "programming", title: "Putting a program together", icon: "toolbox" },
          { slug: "network-protocols-and-layers", title: "Protocols & layers", icon: "layers" },
          { slug: "cyber-security", title: "Cyber security", icon: "shield" },
          { slug: "databases", title: "Databases", icon: "database" },
        ],
      },
      {
        year: "Year 11",
        topics: [
          { slug: "boolean-logic", title: "Boolean logic", icon: "logic" },
          { slug: "data-representation", title: "Data representation", icon: "grid" },
          { slug: "defensive-design-and-testing", title: "Defensive design & testing", icon: "bug" },
          { slug: "languages-and-ides", title: "Languages & IDEs", icon: "toolbox" },
          { slug: "ethical-and-legal-issues", title: "Ethical & legal issues", icon: "scales" },
          { slug: "revision-and-exam-practice", title: "Revision & exam practice", icon: "pencil" },
        ],
      },
    ],
  },
  {
    slug: "maths",
    name: "Maths",
    blurb: "Choose a topic to start revising",
    gradient: "linear-gradient(150deg, #fbbf24 0%, #f97316 45%, #b3350b 100%)",
    shadow:
      "shadow-[0_18px_40px_-18px_rgba(249,115,22,0.75)] hover:shadow-[0_28px_60px_-20px_rgba(249,115,22,0.9)]",
    accent: "#b3350b",
    mascot: "hoot",
    // Three papers and famously cumulative — each topic leans on the last,
    // so it tends to need steady, ongoing practice rather than a late
    // cram. One of the heaviest subjects here.
    revisionWeight: 9,
    years: [
      {
        year: "Year 9",
        topics: [
          { slug: "number-and-place-value", title: "Number & place value", icon: "hash" },
          { slug: "algebra-basics", title: "Algebra basics", icon: "code" },
          { slug: "angles-and-2d-shapes", title: "Angles & 2D shapes", icon: "triangle" },
          { slug: "fractions-decimals-percentages", title: "Fractions, decimals & %", icon: "percent" },
          { slug: "indices-and-standard-form", title: "Indices & standard form", icon: "power" },
          { slug: "perimeter-area-and-volume", title: "Perimeter, area & volume", icon: "cube" },
        ],
      },
      {
        year: "Year 10",
        topics: [
          { slug: "ratio-and-proportion", title: "Ratio & proportion", icon: "scales" },
          { slug: "equations-and-inequalities", title: "Equations & inequalities", icon: "grid" },
          { slug: "straight-line-graphs", title: "Straight-line graphs", icon: "axis" },
          { slug: "pythagoras-and-trigonometry", title: "Pythagoras & trigonometry", icon: "triangle" },
          { slug: "similarity-and-congruence", title: "Similarity & congruence", icon: "triangle" },
          { slug: "constructions-loci-and-bearings", title: "Constructions, loci & bearings", icon: "compass" },
          { slug: "probability", title: "Probability", icon: "dice" },
          { slug: "statistics-and-charts", title: "Statistics & charts", icon: "chart" },
        ],
      },
      {
        year: "Year 11",
        topics: [
          { slug: "quadratics-and-sequences", title: "Quadratics & sequences", icon: "vector" },
          { slug: "compound-measures-and-rates", title: "Compound measures & rates", icon: "gauge" },
          { slug: "circle-theorems", title: "Circle theorems", icon: "circle" },
          { slug: "vectors-and-transformations", title: "Vectors & transformations", icon: "flow" },
          { slug: "revision-and-exam-practice", title: "Revision & exam practice", icon: "pencil" },
        ],
      },
    ],
  },
  {
    slug: "english",
    name: "English",
    blurb: "Choose a topic to start revising",
    gradient: "linear-gradient(150deg, #c084fc 0%, #7c3aed 45%, #43146e 100%)",
    shadow:
      "shadow-[0_18px_40px_-18px_rgba(124,58,237,0.75)] hover:shadow-[0_28px_60px_-20px_rgba(124,58,237,0.9)]",
    accent: "#6d28d9",
    mascot: "quill",
    // Language and Literature combined — usually four exams between them,
    // plus texts and quotations to actually memorise, not just understand.
    revisionWeight: 8,
    years: [
      {
        year: "Year 9",
        topics: [
          { slug: "reading-for-meaning", title: "Reading for meaning", icon: "book" },
          { slug: "creative-writing", title: "Creative writing", icon: "feather" },
          { slug: "poetry-basics", title: "Poetry basics", icon: "quote" },
          { slug: "introducing-shakespeare", title: "Introducing Shakespeare", icon: "mask" },
          { slug: "grammar-punctuation-and-spelling", title: "Grammar, punctuation & spelling", icon: "pencil" },
        ],
      },
      {
        year: "Year 10",
        topics: [
          { slug: "fiction-reading-and-writing", title: "Fiction reading & writing", icon: "feather" },
          { slug: "non-fiction-and-viewpoints", title: "Non-fiction & viewpoints", icon: "news" },
          { slug: "comparing-texts", title: "Comparing texts", icon: "scales" },
          { slug: "spoken-language", title: "Spoken language", icon: "mic" },
          { slug: "a-modern-text", title: "A modern text", icon: "book" },
          { slug: "a-shakespeare-play", title: "A Shakespeare play", icon: "mask" },
        ],
      },
      {
        year: "Year 11",
        topics: [
          { slug: "the-19th-century-novel", title: "The 19th-century novel", icon: "book" },
          { slug: "context-and-themes", title: "Context & themes", icon: "clock" },
          { slug: "poetry-anthology", title: "Poetry anthology", icon: "quote" },
          { slug: "unseen-poetry", title: "Unseen poetry", icon: "feather" },
          { slug: "revision-and-exam-practice", title: "Revision & exam practice", icon: "pencil" },
        ],
      },
    ],
  },
  {
    slug: "history",
    name: "History",
    blurb: "Choose a topic to start revising",
    // A deep, warm red. Deliberately NOT the same family as Maths's orange —
    // two adjacent warm cards would blur together on the homepage, and the
    // colour is doing real work here: it is how you tell the cards apart
    // before you have read a word of them.
    gradient: "linear-gradient(150deg, #fca5a5 0%, #dc2626 45%, #7f1d1d 100%)",
    shadow:
      "shadow-[0_18px_40px_-18px_rgba(220,38,38,0.75)] hover:shadow-[0_28px_60px_-20px_rgba(220,38,38,0.9)]",
    accent: "#b91c1c",
    mascot: "knight",
    // Widely reckoned one of the most content-heavy essay subjects — lots of
    // dates, causes and case studies that mostly have to be recalled from
    // memory rather than worked out.
    revisionWeight: 7,
    // ─────────────────────────────────────────────────────────────────────────
    // ⚠️ HISTORY VARIES MORE THAN ANY OTHER SUBJECT ON THIS SITE.
    //
    // The other three have a syllabus everyone broadly shares. History is built
    // from OPTIONS that each school picks: one school does Germany 1890–1945,
    // another does Russia; one does Elizabethan England, another Norman England
    // or the American West. Two students both "doing GCSE History" can have
    // almost no overlap.
    //
    // So this list is a common-denominator selection of the most widely taught
    // options across AQA, Edexcel and OCR, plus the Year 9 topics most schools
    // cover before GCSE starts. Matthew should swap anything his school does
    // not teach — each topic is one line in this file.
    //
    // No content has been written for these yet, on purpose. Every page works
    // and shows an honest "content coming soon" panel until it is.
    // ─────────────────────────────────────────────────────────────────────────
    // ── Why the topics sit where they do ──────────────────────────────────
    // Year 9 is KS3: the narrative sweep most schools teach before GCSE
    // begins — industry, empire, the world wars. It is where you learn the
    // story.
    //
    // Years 10 and 11 are the GCSE units themselves: depth studies, thematic
    // studies and period studies, each with its own exam skills.
    //
    // The British Empire moved from Year 10 to Year 9, where it is actually
    // taught. The Industrial Revolution, the transatlantic slave trade, crime
    // and punishment, and migration were missing entirely and are all widely
    // taught — the first two at KS3, the last two as GCSE options.
    //
    // "The rise of the Nazis" (Year 9) and "Germany 1890–1945" (Year 10) look
    // like a duplicate and are not. The first is the KS3 story of how a
    // democracy fell; the second is the GCSE depth study that starts with the
    // Kaiser and ends in 1945. Both are written to lean on each other rather
    // than repeat.
    years: [
      {
        year: "Year 9",
        topics: [
          { slug: "the-industrial-revolution", title: "The Industrial Revolution", icon: "factory" },
          { slug: "the-transatlantic-slave-trade", title: "Slavery & abolition", icon: "ship" },
          { slug: "the-british-empire", title: "The British Empire", icon: "globe" },
          { slug: "the-first-world-war", title: "The First World War", icon: "poppy" },
          { slug: "the-russian-revolution", title: "The Russian Revolution", icon: "torch" },
          { slug: "the-rise-of-the-nazis", title: "The rise of the Nazis", icon: "news" },
          { slug: "the-second-world-war", title: "The Second World War", icon: "shield" },
          { slug: "the-holocaust", title: "The Holocaust", icon: "candle" },
        ],
      },
      {
        year: "Year 10",
        topics: [
          { slug: "germany-1890-1945", title: "Germany 1890–1945", icon: "vote" },
          { slug: "conflict-and-tension-1918-1939", title: "Conflict & tension 1918–39", icon: "scales" },
          { slug: "elizabethan-england", title: "Elizabethan England", icon: "crown" },
          { slug: "medicine-through-time", title: "Medicine through time", icon: "flask" },
          { slug: "crime-and-punishment", title: "Crime & punishment", icon: "gavel" },
        ],
      },
      {
        year: "Year 11",
        topics: [
          { slug: "superpower-relations-and-the-cold-war", title: "Superpowers & the Cold War", icon: "atom" },
          { slug: "norman-england-1066-1100", title: "Norman England", icon: "castle" },
          { slug: "america-1920-1973", title: "America 1920–1973", icon: "chart" },
          { slug: "migration-to-britain", title: "Migration to Britain", icon: "suitcase" },
          { slug: "source-skills-and-interpretations", title: "Sources & interpretations", icon: "scroll" },
          { slug: "revision-and-exam-practice", title: "Revision & exam practice", icon: "pencil" },
        ],
      },
    ],
  },
  {
    slug: "geography",
    name: "Geography",
    blurb: "Choose a topic to start revising",
    // Green, and distinct from every other card: blue, orange, violet, red,
    // green. Five subjects is about the limit before colours start to blur —
    // a sixth would need real thought rather than another shade.
    gradient: "linear-gradient(150deg, #6ee7b7 0%, #16a34a 45%, #14532d 100%)",
    shadow:
      "shadow-[0_18px_40px_-18px_rgba(22,163,74,0.75)] hover:shadow-[0_28px_60px_-20px_rgba(22,163,74,0.9)]",
    accent: "#15803d",
    mascot: "atlas",
    // Case studies and data-response skills across two or three papers —
    // real content, but usually reckoned a shade lighter than History.
    revisionWeight: 5,
    // ── Year 9 is written. Years 10 and 11 are PLANNED but not yet written ──
    // Their pages exist and work, showing the honest "content coming soon"
    // panel. Registering them now rather than later means the slugs are fixed
    // and recorded in known-topics.ts, so nothing can quietly change under
    // anyone's progress once the content arrives.
    //
    // The Year 10 and 11 lists follow the shape most boards use: physical
    // geography (hazards, ecosystems, UK landscapes), human geography (urban,
    // economic, resources), then the skills and fieldwork every board examines.
    years: [
      {
        year: "Year 9",
        topics: [
          { slug: "map-skills", title: "Map skills", icon: "map" },
          { slug: "weather-and-climate", title: "Weather & climate", icon: "cloud" },
          { slug: "tectonic-hazards", title: "Tectonic hazards", icon: "volcano" },
          { slug: "rivers-and-flooding", title: "Rivers & flooding", icon: "droplet" },
          { slug: "coasts", title: "Coasts", icon: "wave" },
          { slug: "ecosystems-and-biomes", title: "Ecosystems & biomes", icon: "leaf" },
        ],
      },
      {
        year: "Year 10",
        topics: [
          { slug: "natural-hazards", title: "Natural hazards", icon: "volcano" },
          { slug: "the-living-world", title: "The living world", icon: "leaf" },
          { slug: "uk-physical-landscapes", title: "UK physical landscapes", icon: "layers" },
          { slug: "urban-issues-and-challenges", title: "Urban issues & challenges", icon: "city" },
          { slug: "the-changing-economic-world", title: "The changing economic world", icon: "factory" },
          { slug: "resource-management", title: "Resource management", icon: "recycle" },
        ],
      },
      {
        year: "Year 11",
        topics: [
          { slug: "climate-change", title: "Climate change", icon: "thermometer" },
          { slug: "fieldwork-and-enquiry", title: "Fieldwork & enquiry", icon: "compass" },
          { slug: "maps-graphs-and-statistics", title: "Maps, graphs & statistics", icon: "chart" },
          { slug: "issue-evaluation", title: "Issue evaluation", icon: "scales" },
          { slug: "revision-and-exam-practice", title: "Revision & exam practice", icon: "pencil" },
        ],
      },
    ],
  },

  // ─── BUSINESS ─────────────────────────────────────────────────────────────
  //
  // ⚠️ NOTE THE MISSING YEAR 9. Business is a GCSE OPTION rather than a core
  // subject: you choose it at the end of Year 9 and start it in Year 10. Almost
  // nobody teaches GCSE Business content in Year 9, so inventing a Year 9 for
  // it would have meant either padding it with material no student is set, or
  // showing an empty column. Both are worse than simply not having one.
  //
  // Boards divide this subject up more than most. Edexcel runs two themes
  // (Theme 1 "investigating small business" in Year 10, Theme 2 "building a
  // business" in Year 11); AQA runs six units across two papers; OCR splits it
  // differently again. The Year 10 list below is the common core that every
  // board covers early — starting a business, the market, and the money.
  {
    slug: "business",
    name: "Business",
    blurb: "Choose a topic to start revising",
    // Teal. Every other hue on the site is taken — blue, orange, violet, red,
    // green — and teal is the one remaining colour far enough from all of them
    // to be told apart at the size of a progress ring, while still reading as
    // businesslike rather than playful.
    gradient: "linear-gradient(150deg, #5eead4 0%, #0d9488 45%, #0b3b38 100%)",
    shadow:
      "shadow-[0_18px_40px_-18px_rgba(13,148,136,0.75)] hover:shadow-[0_28px_60px_-20px_rgba(13,148,136,0.9)]",
    accent: "#0f766e",
    mascot: "sterling",
    // Usually two papers — solid but more contained than the subjects
    // above it, with less to carry into the exam from memory alone.
    revisionWeight: 3,
    years: [
      {
        year: "Year 10",
        topics: [
          { slug: "enterprise-and-entrepreneurship", title: "Enterprise & entrepreneurship", icon: "torch" },
          { slug: "business-aims-and-objectives", title: "Business aims & objectives", icon: "compass" },
          { slug: "spotting-a-business-opportunity", title: "Spotting an opportunity", icon: "map" },
          { slug: "market-research", title: "Market research", icon: "chart" },
          { slug: "market-segmentation", title: "Segmentation & market mapping", icon: "grid" },
          { slug: "business-ownership", title: "Business ownership", icon: "shield" },
          { slug: "business-location", title: "Business location", icon: "city" },
          { slug: "the-marketing-mix", title: "The marketing mix", icon: "layers" },
          { slug: "revenue-costs-and-profit", title: "Revenue, costs & profit", icon: "percent" },
          { slug: "break-even-analysis", title: "Break-even analysis", icon: "axis" },
          { slug: "cash-flow", title: "Cash flow & forecasting", icon: "droplet" },
          { slug: "sources-of-finance", title: "Sources of finance", icon: "suitcase" },
          { slug: "stakeholders", title: "Stakeholders", icon: "network" },
        ],
      },
      {
        // ─── Year 11 ──────────────────────────────────────────────────────
        // Broadly Edexcel's Theme 2, "building a business": what changes once a
        // firm is past survival. AQA covers the same ground across its
        // operations, human resources and influences units, in a different
        // order.
        year: "Year 11",
        topics: [
          { slug: "business-growth", title: "Business growth", icon: "vector" },
          { slug: "globalisation-and-trade", title: "Globalisation & trade", icon: "ship" },
          { slug: "ethics-and-the-environment", title: "Ethics & the environment", icon: "leaf" },
          { slug: "the-economic-climate", title: "The economic climate", icon: "gauge" },
          { slug: "business-and-the-law", title: "Business & the law", icon: "gavel" },
          { slug: "production-processes", title: "Production processes", icon: "factory" },
          { slug: "stock-and-suppliers", title: "Stock & suppliers", icon: "cube" },
          { slug: "quality", title: "Quality", icon: "crown" },
          { slug: "customer-service", title: "Customer service", icon: "quote" },
          { slug: "organisational-structures", title: "Organisational structures", icon: "flow" },
          { slug: "recruitment-and-selection", title: "Recruitment & selection", icon: "mic" },
          { slug: "training-and-motivation", title: "Training & motivation", icon: "book" },
          { slug: "technology-in-business", title: "Technology in business", icon: "chip" },
        ],
      },
    ],
  },

  // ─── BIOLOGY ──────────────────────────────────────────────────────────────
  {
    slug: "biology",
    name: "Biology",
    blurb: "Choose a topic to start revising",
    group: "science",
    gradient: "linear-gradient(150deg, #bef264 0%, #65a30d 45%, #2f4708 100%)",
    shadow:
      "shadow-[0_18px_40px_-18px_rgba(101,163,13,0.75)] hover:shadow-[0_28px_60px_-20px_rgba(101,163,13,0.9)]",
    accent: "#4d7c0f",
    mascot: "iris",
    years: [
      {
        year: "Year 9",
        topics: [
          { slug: "cell-structure", title: "Cell structure", icon: "circle" },
          { slug: "cell-transport", title: "Cell transport", icon: "droplet" },
          { slug: "cell-division", title: "Cell division", icon: "grid" },
          { slug: "enzymes-and-digestion", title: "Enzymes & digestion", icon: "flask" },
          { slug: "plant-organisation", title: "Plant organisation", icon: "leaf" },
          { slug: "the-microscope-and-practicals", title: "Microscopes & practicals", icon: "toolbox" },
        ],
      },
      {
        year: "Year 10",
        topics: [
          { slug: "communicable-disease", title: "Communicable disease", icon: "bug" },
          { slug: "non-communicable-disease", title: "Non-communicable disease", icon: "thermometer" },
          { slug: "photosynthesis", title: "Photosynthesis", icon: "leaf" },
          { slug: "respiration", title: "Respiration", icon: "power" },
          { slug: "the-nervous-system", title: "The nervous system", icon: "network" },
          { slug: "hormones-and-homeostasis", title: "Hormones & homeostasis", icon: "gauge" },
          { slug: "the-circulatory-system", title: "The circulatory system", icon: "flow" },
        ],
      },
      {
        year: "Year 11",
        topics: [
          { slug: "dna-and-reproduction", title: "DNA & reproduction", icon: "vector" },
          { slug: "genetics-and-inheritance", title: "Genetics & inheritance", icon: "logic" },
          { slug: "variation-and-evolution", title: "Variation & evolution", icon: "triangle" },
          { slug: "classification-and-selection", title: "Classification & selection", icon: "layers" },
          { slug: "ecosystems-and-food-chains", title: "Ecosystems & food chains", icon: "globe" },
          { slug: "biodiversity-and-human-impact", title: "Biodiversity & human impact", icon: "recycle" },
          { slug: "biology-exam-practice", title: "Exam practice", icon: "pencil" },
        ],
      },
    ],
  },

  // ─── CHEMISTRY ────────────────────────────────────────────────────────────
  {
    slug: "chemistry",
    name: "Chemistry",
    blurb: "Choose a topic to start revising",
    group: "science",
    gradient: "linear-gradient(150deg, #f0abfc 0%, #a21caf 45%, #4a0d52 100%)",
    shadow:
      "shadow-[0_18px_40px_-18px_rgba(162,28,175,0.75)] hover:shadow-[0_28px_60px_-20px_rgba(162,28,175,0.9)]",
    accent: "#86198f",
    mascot: "iris",
    years: [
      {
        year: "Year 9",
        topics: [
          { slug: "atomic-structure", title: "Atomic structure", icon: "atom" },
          { slug: "the-periodic-table", title: "The periodic table", icon: "grid" },
          { slug: "ionic-and-covalent-bonding", title: "Ionic & covalent bonding", icon: "network" },
          { slug: "states-and-structures", title: "States & structures", icon: "cube" },
          { slug: "separating-mixtures", title: "Separating mixtures", icon: "flask" },
          { slug: "formulae-and-equations", title: "Formulae & equations", icon: "hash" },
        ],
      },
      {
        year: "Year 10",
        topics: [
          { slug: "quantitative-chemistry", title: "Quantitative chemistry", icon: "scales" },
          { slug: "acids-and-alkalis", title: "Acids & alkalis", icon: "droplet" },
          { slug: "reactivity-of-metals", title: "Reactivity of metals", icon: "power" },
          { slug: "electrolysis", title: "Electrolysis", icon: "chip" },
          { slug: "energy-changes", title: "Energy changes", icon: "thermometer" },
          { slug: "rates-of-reaction", title: "Rates of reaction", icon: "clock" },
          { slug: "reversible-reactions", title: "Reversible reactions & equilibrium", icon: "recycle" },
        ],
      },
      {
        year: "Year 11",
        topics: [
          { slug: "organic-chemistry", title: "Organic chemistry", icon: "vector" },
          { slug: "polymers", title: "Polymers", icon: "layers" },
          { slug: "chemical-analysis", title: "Chemical analysis", icon: "chart" },
          { slug: "the-atmosphere", title: "The atmosphere", icon: "cloud" },
          { slug: "using-the-earths-resources", title: "Using the Earth's resources", icon: "factory" },
          { slug: "chemistry-exam-practice", title: "Exam practice", icon: "pencil" },
        ],
      },
    ],
  },

  // ─── PHYSICS ──────────────────────────────────────────────────────────────
  {
    slug: "physics",
    name: "Physics",
    blurb: "Choose a topic to start revising",
    group: "science",
    gradient: "linear-gradient(150deg, #cbd5e1 0%, #475569 45%, #10151f 100%)",
    shadow:
      "shadow-[0_18px_40px_-18px_rgba(71,85,105,0.75)] hover:shadow-[0_28px_60px_-20px_rgba(71,85,105,0.9)]",
    accent: "#334155",
    mascot: "iris",
    years: [
      {
        year: "Year 9",
        topics: [
          { slug: "energy-stores-and-transfers", title: "Energy stores & transfers", icon: "power" },
          { slug: "energy-resources", title: "Energy resources", icon: "recycle" },
          { slug: "the-particle-model", title: "The particle model", icon: "cube" },
          { slug: "forces-basics", title: "Forces", icon: "vector" },
          { slug: "electricity-basics", title: "Electricity basics", icon: "chip" },
          { slug: "atomic-structure-and-radiation", title: "Atomic structure & radiation", icon: "atom" },
        ],
      },
      {
        year: "Year 10",
        topics: [
          { slug: "electrical-circuits", title: "Electrical circuits", icon: "network" },
          { slug: "mains-electricity", title: "Mains electricity", icon: "torch" },
          { slug: "motion-and-graphs", title: "Motion & graphs", icon: "axis" },
          { slug: "newtons-laws", title: "Newton's laws", icon: "triangle" },
          { slug: "waves", title: "Waves", icon: "wave" },
          { slug: "the-electromagnetic-spectrum", title: "The electromagnetic spectrum", icon: "layers" },
          { slug: "density-and-pressure", title: "Density & pressure", icon: "gauge" },
        ],
      },
      {
        year: "Year 11",
        topics: [
          { slug: "magnetism-and-electromagnetism", title: "Magnetism & electromagnetism", icon: "compass" },
          { slug: "momentum-and-work", title: "Momentum, work & power", icon: "flow" },
          { slug: "radioactivity-and-half-life", title: "Radioactivity & half-life", icon: "clock" },
          { slug: "space-physics", title: "Space physics", icon: "globe" },
          { slug: "required-practicals", title: "Required practicals", icon: "toolbox" },
          { slug: "physics-exam-practice", title: "Exam practice", icon: "pencil" },
        ],
      },
    ],
  },

  // ─── CITIZENSHIP ──────────────────────────────────────────────────────────
  //
  // Mascot: Bobby, a police officer — law, rights and justice are most of what
  // this subject is about, and a uniform communicates that at thumbnail size.
  //
  // ⚠️ PINK, as Matthew asked. Worth noting honestly: pink (hue ~333) sits
  // about 40° from Chemistry's magenta and about 27° from History's red, which
  // is closer than the separations chosen for the sciences. It is acceptable
  // because Chemistry lives inside the Science group, so the two only ever meet
  // on the progress chart. If they turn out to be confusable there, push this
  // one further towards rose or Chemistry further towards purple.
  {
    slug: "citizenship",
    name: "Citizenship",
    blurb: "Choose a topic to start revising",
    gradient: "linear-gradient(150deg, #f9a8d4 0%, #db2777 45%, #6b0f38 100%)",
    shadow:
      "shadow-[0_18px_40px_-18px_rgba(219,39,119,0.75)] hover:shadow-[0_28px_60px_-20px_rgba(219,39,119,0.9)]",
    accent: "#be185d",
    mascot: "bobby",
    // Commonly reckoned one of the lightest GCSEs on offer — fewer papers
    // and less content than any other subject on this list.
    revisionWeight: 1,
    years: [
      {
        year: "Year 9",
        topics: [
          { slug: "identity-and-diversity", title: "Identity & diversity", icon: "globe" },
          { slug: "rights-and-responsibilities", title: "Rights & responsibilities", icon: "scales" },
          { slug: "the-law-and-legal-system", title: "The law & legal system", icon: "gavel" },
          { slug: "democracy-in-the-uk", title: "Democracy in the UK", icon: "crown" },
          { slug: "elections-and-voting", title: "Elections & voting", icon: "vote" },
          { slug: "active-citizenship", title: "Active citizenship", icon: "network" },
        ],
      },
      {
        // Year 10 is planned and NOT yet written.
        year: "Year 10",
        topics: [
          { slug: "parliament-and-government", title: "Parliament & government", icon: "castle" },
          { slug: "the-media-and-democracy", title: "The media & democracy", icon: "news" },
          { slug: "the-uk-and-the-world", title: "The UK & the world", icon: "ship" },
          { slug: "money-and-the-citizen", title: "Money & the citizen", icon: "suitcase" },
          { slug: "crime-and-justice", title: "Crime & justice", icon: "shield" },
          { slug: "citizenship-exam-practice", title: "Exam practice", icon: "pencil" },
        ],
      },
    ],
  },

  // ─── RELIGIOUS EDUCATION ──────────────────────────────────────────────────
  //
  // Mascot: Lumen, a lantern. Deliberately NOT a person. Any human character
  // would have to be dressed, and every choice of dress — a hijab, a kippah, a
  // turban, a crucifix, or none of them — reads as the site taking a side about
  // whose religion this subject belongs to. A lantern belongs to nobody, and
  // light as a metaphor for understanding appears in most traditions without
  // being owned by any of them. Matthew raised this himself before I did.
  //
  // ⚠️ SALMON, as asked. Honestly: it sits about 8 degrees of hue from History's
  // red, which is the tightest separation on the site. It survives because RE is
  // kept noticeably LIGHTER and warmer than History's deep red, so the two read
  // apart at card size. If they ever look confusable on the progress chart, this
  // is the one to move — towards coral or amber, not towards pink, which
  // Citizenship already holds.
  {
    slug: "religious-education",
    name: "Religious Education",
    blurb: "Choose a topic to start revising",
    gradient: "linear-gradient(150deg, #fecdd3 0%, #f4796a 45%, #8c2f22 100%)",
    shadow:
      "shadow-[0_18px_40px_-18px_rgba(244,121,106,0.75)] hover:shadow-[0_28px_60px_-20px_rgba(244,121,106,0.9)]",
    accent: "#c94f3d",
    mascot: "lumen",
    // Usually one or two shorter papers — real content, but generally
    // reckoned lighter than the full-content subjects above it.
    revisionWeight: 2,
    years: [
      {
        year: "Year 9",
        topics: [
          { slug: "what-is-religion", title: "What is religion?", icon: "globe" },
          { slug: "introducing-christianity", title: "Introducing Christianity", icon: "book" },
          { slug: "introducing-islam", title: "Introducing Islam", icon: "book" },
          { slug: "introducing-judaism", title: "Introducing Judaism", icon: "book" },
          { slug: "dharmic-religions", title: "Hinduism, Sikhism & Buddhism", icon: "layers" },
          { slug: "big-questions-and-ethics", title: "Big questions & ethics", icon: "scales" },
        ],
      },
      {
        year: "Year 10",
        topics: [
          { slug: "christian-beliefs", title: "Christian beliefs", icon: "book" },
          { slug: "christian-practices", title: "Christian practices", icon: "feather" },
          { slug: "muslim-beliefs", title: "Muslim beliefs", icon: "book" },
          { slug: "muslim-practices", title: "Muslim practices", icon: "feather" },
          { slug: "relationships-and-families", title: "Relationships & families", icon: "globe" },
          { slug: "religion-and-life", title: "Religion & life", icon: "scales" },
        ],
      },
      {
        year: "Year 11",
        topics: [
          { slug: "the-existence-of-god", title: "The existence of God", icon: "quote" },
          { slug: "peace-and-conflict", title: "Peace & conflict", icon: "shield" },
          { slug: "crime-and-punishment", title: "Crime & punishment", icon: "scales" },
          { slug: "human-rights-and-social-justice", title: "Human rights & justice", icon: "globe" },
          { slug: "sources-of-authority", title: "Sources of authority", icon: "book" },
          { slug: "re-exam-practice", title: "Exam practice", icon: "news" },
        ],
      },
    ],
  },

  // ─── SPANISH ──────────────────────────────────────────────────────────────
  //
  // Grouped under "languages" — see the group entry above and its comment for
  // why Spanish, French and German sit behind one homepage card rather than
  // three, and why each still keeps its own accent colour below even so: this
  // colour is what tells the three apart on the shared progress chart, where
  // the group card never appears.
  //
  // Mascot: Voyager, shared by all three languages — see the design note above
  // Voyager's component in Mascots.tsx.
  //
  // GOLD, not the obvious red. Spain's flag is red-and-gold, but History
  // already owns a deep red and Citizenship owns pink — a third warm-red card
  // would be the tightest colour clash on the site. Gold is still recognisably
  // Spanish (it is half the flag) and sits in one of the two largest unused
  // hue gaps on the progress chart, measured against all nine existing
  // subjects by CIE Lab distance rather than by eye.
  //
  // Topics follow the shape AQA, Edexcel and OCR all broadly share for GCSE
  // French/German/Spanish: Identity & culture, Local area/holiday/travel, and
  // School/future aspirations — spread across three years, with one explicit
  // grammar topic per year rather than grammar hidden only inside vocabulary
  // topics. Every topic's practice questions mix translation, gap-fill
  // (supplying the correct verb form or word) and part-of-speech
  // identification, not just vocabulary recall — Matthew asked for exactly
  // that mix.
  {
    slug: "spanish",
    name: "Spanish",
    blurb: "Choose a topic to start revising",
    group: "languages",
    gradient: "linear-gradient(150deg, #f7e3ad 0%, #ffc12b 45%, #8a5c05 100%)",
    shadow:
      "shadow-[0_18px_40px_-18px_rgba(202,138,4,0.75)] hover:shadow-[0_28px_60px_-20px_rgba(202,138,4,0.9)]",
    accent: "#ca8a04",
    mascot: "voyager",
    years: [
      {
        year: "Year 9",
        topics: [
          { slug: "greetings-and-introductions", title: "Greetings & introductions", icon: "speech" },
          { slug: "family-and-friends", title: "Family & friends", icon: "heart" },
          { slug: "free-time-and-hobbies", title: "Free time & hobbies", icon: "dice" },
          { slug: "school-life", title: "School life", icon: "book" },
          { slug: "home-and-daily-routine", title: "Home & daily routine", icon: "house" },
          { slug: "grammar-toolkit-1", title: "Grammar toolkit: the present", icon: "cog" },
        ],
      },
      {
        year: "Year 10",
        topics: [
          { slug: "technology-and-social-media", title: "Technology & social media", icon: "chip" },
          { slug: "customs-festivals-and-celebrations", title: "Customs, festivals & celebrations", icon: "mask" },
          { slug: "town-and-region", title: "Town & region", icon: "city" },
          { slug: "holidays-and-travel", title: "Holidays & travel", icon: "suitcase" },
          { slug: "eating-out-and-food-culture", title: "Eating out & food culture", icon: "meal" },
          { slug: "grammar-toolkit-2", title: "Grammar toolkit: past & future", icon: "flow" },
        ],
      },
      {
        year: "Year 11",
        topics: [
          { slug: "school-and-education-system", title: "School & education system", icon: "scroll" },
          { slug: "post-16-choices-and-training", title: "Post-16 choices & training", icon: "compass" },
          { slug: "jobs-and-careers", title: "Jobs & careers", icon: "toolbox" },
          { slug: "volunteering-and-personal-qualities", title: "Volunteering & personal qualities", icon: "torch" },
          { slug: "global-and-environmental-issues", title: "Global & environmental issues", icon: "leaf" },
          { slug: "spanish-exam-practice", title: "Exam practice", icon: "pencil" },
        ],
      },
    ],
  },

  // ─── FRENCH ───────────────────────────────────────────────────────────────
  //
  // Grouped under "languages" — see the comment above Spanish for why, and why
  // French still keeps its own accent colour below.
  //
  // Mascot: Voyager, shared by all three languages — see the design note above
  // Voyager's component in Mascots.tsx.
  //
  // CORNFLOWER BLUE. It is the best-separated blue left once Physics's slate
  // and Science's indigo are accounted for — checked individually against
  // both in Lab space, not assumed safe just because it "looks different".
  //
  // Same topic shape as Spanish, deliberately: a student taking both should
  // find the two subjects structured identically, so the SKILL of revising
  // transfers even where the words don't.
  {
    slug: "french",
    name: "French",
    blurb: "Choose a topic to start revising",
    group: "languages",
    gradient: "linear-gradient(150deg, #c2d7f1 0%, #5198e8 45%, #123a66 100%)",
    shadow:
      "shadow-[0_18px_40px_-18px_rgba(30,111,191,0.75)] hover:shadow-[0_28px_60px_-20px_rgba(30,111,191,0.9)]",
    accent: "#1e6fbf",
    mascot: "voyager",
    years: [
      {
        year: "Year 9",
        topics: [
          { slug: "greetings-and-introductions", title: "Greetings & introductions", icon: "speech" },
          { slug: "family-and-friends", title: "Family & friends", icon: "heart" },
          { slug: "free-time-and-hobbies", title: "Free time & hobbies", icon: "dice" },
          { slug: "school-life", title: "School life", icon: "book" },
          { slug: "home-and-daily-routine", title: "Home & daily routine", icon: "house" },
          { slug: "grammar-toolkit-1", title: "Grammar toolkit: the present", icon: "cog" },
        ],
      },
      {
        year: "Year 10",
        topics: [
          { slug: "technology-and-social-media", title: "Technology & social media", icon: "chip" },
          { slug: "customs-festivals-and-celebrations", title: "Customs, festivals & celebrations", icon: "mask" },
          { slug: "town-and-region", title: "Town & region", icon: "city" },
          { slug: "holidays-and-travel", title: "Holidays & travel", icon: "suitcase" },
          { slug: "eating-out-and-food-culture", title: "Eating out & food culture", icon: "meal" },
          { slug: "grammar-toolkit-2", title: "Grammar toolkit: past & future", icon: "flow" },
        ],
      },
      {
        year: "Year 11",
        topics: [
          { slug: "school-and-education-system", title: "School & education system", icon: "scroll" },
          { slug: "post-16-choices-and-training", title: "Post-16 choices & training", icon: "compass" },
          { slug: "jobs-and-careers", title: "Jobs & careers", icon: "toolbox" },
          { slug: "volunteering-and-personal-qualities", title: "Volunteering & personal qualities", icon: "torch" },
          { slug: "global-and-environmental-issues", title: "Global & environmental issues", icon: "leaf" },
          { slug: "french-exam-practice", title: "Exam practice", icon: "pencil" },
        ],
      },
    ],
  },

  // ─── GERMAN ───────────────────────────────────────────────────────────────
  //
  // ⚠️ NO YEAR 9, the same shape as Business. German is usually a second
  // language option started in Year 10 alongside — not instead of — French or
  // Spanish, so Year 10 here covers the same "building blocks" ground that
  // Spanish and French give Year 9, and Year 11 compresses the remaining two
  // GCSE themes plus exam practice into one year rather than two. Two years
  // covering three themes is tighter than French or Spanish get, which is an
  // honest reflection of starting a subject a year later, not a shortcut.
  //
  // Grouped under "languages" — see the comment above Spanish for why, and why
  // German still keeps its own accent colour below.
  //
  // Mascot: Voyager, shared by all three languages — see the design note above
  // Voyager's component in Mascots.tsx.
  //
  // LIME GREEN, the strongest remaining separation from every other subject on
  // the progress chart once Spanish's gold and French's blue are placed —
  // confirmed by Lab distance, the same method used for the other two.
  {
    slug: "german",
    name: "German",
    blurb: "Choose a topic to start revising",
    group: "languages",
    gradient: "linear-gradient(150deg, #e3f4c4 0%, #b3f04e 45%, #3f6b1f 100%)",
    shadow:
      "shadow-[0_18px_40px_-18px_rgba(132,204,22,0.75)] hover:shadow-[0_28px_60px_-20px_rgba(132,204,22,0.9)]",
    accent: "#84cc16",
    mascot: "voyager",
    years: [
      {
        year: "Year 10",
        topics: [
          { slug: "greetings-and-introductions", title: "Greetings & introductions", icon: "speech" },
          { slug: "family-and-friends", title: "Family & friends", icon: "heart" },
          { slug: "free-time-and-hobbies", title: "Free time & hobbies", icon: "dice" },
          { slug: "school-life", title: "School life", icon: "book" },
          { slug: "home-and-daily-routine", title: "Home & daily routine", icon: "house" },
          { slug: "grammar-toolkit-1", title: "Grammar toolkit: the present", icon: "cog" },
        ],
      },
      {
        year: "Year 11",
        topics: [
          { slug: "town-and-region", title: "Town & region", icon: "city" },
          { slug: "holidays-and-travel", title: "Holidays & travel", icon: "suitcase" },
          { slug: "jobs-and-future-plans", title: "Jobs & future plans", icon: "toolbox" },
          { slug: "technology-and-media", title: "Technology & media", icon: "chip" },
          { slug: "grammar-toolkit-2", title: "Grammar toolkit: past & future", icon: "flow" },
          { slug: "german-exam-practice", title: "Exam practice", icon: "pencil" },
        ],
      },
    ],
  },
  {
    slug: "physical-education",
    name: "Physical Education",
    blurb: "Choose a topic to start revising",
    gradient: "linear-gradient(150deg, #fdba74 0%, #ea580c 45%, #7c2d12 100%)",
    shadow:
      "shadow-[0_18px_40px_-18px_rgba(234,88,12,0.75)] hover:shadow-[0_28px_60px_-20px_rgba(234,88,12,0.9)]",
    accent: "#ea580c",
    // Ridge — a PE teacher with a whistle and a clipboard rather than an
    // athlete mid-stride, because GCSE PE is two written papers, not a
    // trial. See the long note above his drawing in components/Mascots.tsx.
    // His tracksuit is navy while this subject's accent is orange, which is
    // deliberate: the orange lives on his lanyard and his trainers, so he
    // carries the subject colour without being the same colour as the card
    // he sits on.
    mascot: "ridge",
    // Two written papers at 30% each, plus a practical assessment worth 40%
    // that no amount of revision replaces. The written content is genuinely
    // smaller than the essay subjects, which is what this number is about —
    // not how hard the course is overall.
    revisionWeight: 3,
    // ─────────────────────────────────────────────────────────────────────
    // YEARS 10 AND 11 ONLY, deliberately.
    //
    // Every other subject here starts at Year 9, because Year 9 is when
    // most schools begin GCSE content. PE is different: the PE everyone
    // does lower down the school is games lessons, with nothing examined
    // and nothing to revise. Only the people who CHOSE GCSE PE have written
    // papers to sit, and that starts in Year 10 — Matthew's own point, and
    // it is right.
    //
    // The split follows the two papers rather than being an arbitrary half:
    // Year 10 is Paper 1 (the human body and movement) and Year 11 is
    // Paper 2 (socio-cultural influences and wellbeing). Schools vary, and
    // some teach them the other way round or interleave them — the order
    // here is a sensible default, not a claim about any one school's
    // scheme of work.
    // ─────────────────────────────────────────────────────────────────────
    years: [
      {
        year: "Year 10",
        topics: [
          { slug: "the-skeletal-system", title: "The skeletal system", icon: "cube" },
          { slug: "the-muscular-system", title: "The muscular system", icon: "power" },
          { slug: "movement-analysis", title: "Movement analysis", icon: "axis" },
          { slug: "the-cardiovascular-system", title: "The cardiovascular system", icon: "heart" },
          { slug: "the-respiratory-system", title: "The respiratory system", icon: "cloud" },
          { slug: "aerobic-and-anaerobic-exercise", title: "Aerobic & anaerobic exercise", icon: "flask" },
          { slug: "effects-of-exercise", title: "Effects of exercise", icon: "thermometer" },
          { slug: "components-of-fitness", title: "Components of fitness", icon: "gauge" },
          { slug: "fitness-testing", title: "Fitness testing", icon: "clock" },
          { slug: "principles-of-training", title: "Principles of training", icon: "layers" },
          { slug: "training-methods", title: "Training methods", icon: "toolbox" },
          { slug: "preventing-injury", title: "Preventing injury", icon: "shield" },
          { slug: "use-of-data", title: "Use of data", icon: "chart" },
        ],
      },
      {
        year: "Year 11",
        topics: [
          { slug: "health-fitness-and-wellbeing", title: "Health, fitness & wellbeing", icon: "leaf" },
          { slug: "diet-and-nutrition", title: "Diet & nutrition", icon: "meal" },
          { slug: "sedentary-lifestyle-and-obesity", title: "Sedentary lifestyle & obesity", icon: "scales" },
          { slug: "classification-of-skills", title: "Classification of skills", icon: "grid" },
          { slug: "goal-setting", title: "Goal setting", icon: "triangle" },
          { slug: "information-processing", title: "Information processing", icon: "flow" },
          { slug: "guidance-and-feedback", title: "Guidance & feedback", icon: "speech" },
          { slug: "mental-preparation", title: "Mental preparation", icon: "candle" },
          { slug: "personality-and-motivation", title: "Personality & motivation", icon: "mask" },
          { slug: "engagement-patterns", title: "Engagement patterns", icon: "city" },
          { slug: "commercialisation-and-the-media", title: "Commercialisation & the media", icon: "news" },
          { slug: "ethics-in-sport", title: "Ethics in sport", icon: "gavel" },
          { slug: "drugs-in-sport", title: "Drugs in sport", icon: "droplet" },
          { slug: "spectator-behaviour", title: "Spectator behaviour", icon: "mic" },
        ],
      },
    ],
  },
];

// ─── Lookups ────────────────────────────────────────────────────────────────
// Small helpers so pages never have to poke around inside the data themselves.

export function getGroup(slug: string): SubjectGroup | undefined {
  return SUBJECT_GROUPS.find((g) => g.slug === slug);
}

// The subjects inside a group, in the order they are declared.
export function subjectsInGroup(groupSlug: string): Subject[] {
  return SUBJECTS.filter((s) => s.group === groupSlug);
}

// What the homepage shows: every group as ONE card, plus every subject that
// does not belong to a group. Derived rather than hand-listed, so adding a
// subject to a group removes it from the homepage automatically.
export function homepageCards(): (Subject | SubjectGroup)[] {
  const ungrouped = SUBJECTS.filter((s) => !s.group);
  return [...ungrouped, ...SUBJECT_GROUPS];
}

export function isGroup(card: Subject | SubjectGroup): card is SubjectGroup {
  return !("years" in card);
}

export function getSubject(slug: string): Subject | undefined {
  return SUBJECTS.find((s) => s.slug === slug);
}

export function getTopic(subjectSlug: string, topicSlug: string) {
  const subject = getSubject(subjectSlug);
  if (!subject) return undefined;

  for (const group of subject.years) {
    const topic = group.topics.find((t) => t.slug === topicSlug);
    if (topic) return { subject, year: group.year, topic };
  }
  return undefined;
}