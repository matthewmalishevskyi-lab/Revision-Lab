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
  | "feather" | "quote" | "mask" | "news";

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
  mascot: "pixel" | "hoot" | "quill";
  years: YearGroup[];
};

// The three year columns are always the same colours — blue, orange, violet —
// on every subject page, matching the design. So the colours mean "Year 9 /
// 10 / 11", not "which subject you're in".
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
          { slug: "algorithms", title: "Algorithms", icon: "flow" },
          { slug: "programming", title: "Programming", icon: "terminal" },
          { slug: "cyber-security", title: "Cyber security", icon: "shield" },
          { slug: "databases", title: "Databases", icon: "database" },
        ],
      },
      {
        year: "Year 11",
        topics: [
          { slug: "boolean-logic", title: "Boolean logic", icon: "logic" },
          { slug: "data-representation", title: "Data representation", icon: "grid" },
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
    mascot: "hoot",
    years: [
      {
        year: "Year 9",
        topics: [
          { slug: "number-and-place-value", title: "Number & place value", icon: "hash" },
          { slug: "algebra-basics", title: "Algebra basics", icon: "code" },
          { slug: "angles-and-2d-shapes", title: "Angles & 2D shapes", icon: "triangle" },
          { slug: "fractions-decimals-percentages", title: "Fractions, decimals & %", icon: "percent" },
        ],
      },
      {
        year: "Year 10",
        topics: [
          { slug: "ratio-and-proportion", title: "Ratio & proportion", icon: "scales" },
          { slug: "equations-and-inequalities", title: "Equations & inequalities", icon: "grid" },
          { slug: "pythagoras-and-trigonometry", title: "Pythagoras & trigonometry", icon: "triangle" },
          { slug: "probability", title: "Probability", icon: "dice" },
          { slug: "statistics-and-charts", title: "Statistics & charts", icon: "chart" },
        ],
      },
      {
        year: "Year 11",
        topics: [
          { slug: "quadratics-and-sequences", title: "Quadratics & sequences", icon: "vector" },
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
    mascot: "quill",
    years: [
      {
        year: "Year 9",
        topics: [
          { slug: "reading-for-meaning", title: "Reading for meaning", icon: "book" },
          { slug: "creative-writing", title: "Creative writing", icon: "feather" },
          { slug: "poetry-basics", title: "Poetry basics", icon: "quote" },
          { slug: "introducing-shakespeare", title: "Introducing Shakespeare", icon: "mask" },
        ],
      },
      {
        year: "Year 10",
        topics: [
          { slug: "fiction-reading-and-writing", title: "Fiction reading & writing", icon: "feather" },
          { slug: "non-fiction-and-viewpoints", title: "Non-fiction & viewpoints", icon: "news" },
          { slug: "a-modern-text", title: "A modern text", icon: "book" },
          { slug: "a-shakespeare-play", title: "A Shakespeare play", icon: "mask" },
        ],
      },
      {
        year: "Year 11",
        topics: [
          { slug: "the-19th-century-novel", title: "The 19th-century novel", icon: "book" },
          { slug: "poetry-anthology", title: "Poetry anthology", icon: "quote" },
          { slug: "unseen-poetry", title: "Unseen poetry", icon: "feather" },
          { slug: "revision-and-exam-practice", title: "Revision & exam practice", icon: "pencil" },
        ],
      },
    ],
  },
];

// ─── Lookups ────────────────────────────────────────────────────────────────
// Small helpers so pages never have to poke around inside the data themselves.

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
