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
  | "thermometer" | "recycle";

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
  mascot: "pixel" | "hoot" | "quill" | "knight" | "atlas" | "sterling" | "iris";

  // Which GROUP this subject belongs to, if any.
  //
  // Science is three separate GCSEs — Biology, Chemistry and Physics — with
  // separate content, separate exams and separate progress. Putting all three
  // on the homepage alongside six other subjects would make nine cards and bury
  // everything else, so they sit behind one "Science" card instead.
  //
  // Note what this does NOT do: it does not make them sub-subjects. They are
  // ordinary subjects with ordinary slugs and URLs, so progress tracking, the
  // sitemap, pre-rendering and every topic page work on them unchanged. The
  // group is purely a navigation layer on top.
  group?: "science";

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
    years: [
      {
        year: "Year 9",
        topics: [
          { slug: "digital-literacy", title: "Digital literacy", icon: "globe" },
          { slug: "binary-and-data", title: "Binary & data", icon: "binary" },
          { slug: "programming-foundations", title: "Programming foundations", icon: "code" },
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
          { slug: "programming", title: "Programming", icon: "terminal" },
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