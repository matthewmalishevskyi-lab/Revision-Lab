// EVERY TOPIC KEY THAT HAS EVER EXISTED ON THIS SITE.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY THIS FILE EXISTS — it protects real people's progress
//
// Progress is stored in the database against the SLUG of a topic:
//
//     { user, subject: "computer-science", topic: "binary-and-data", ... }
//
// Nothing joins those rows back to the content except that text. So renaming a
// slug, or deleting a topic, silently orphans every record attached to it. The
// rows are still in the database, but nothing will ever count them again — and
// to the student it looks exactly like their work was thrown away.
//
// Nothing has ever been renamed here (checked across the whole git history),
// and this file is what keeps it that way. The content checker asserts that
// every key below still resolves to a real topic. Rename one and the check
// fails before it can reach anybody.
//
// IF A TOPIC GENUINELY HAS TO GO:
//   1. Move its key into RETIRED below, with a note saying why.
//   2. Decide what happens to the activity rows — usually an UPDATE in
//      Supabase pointing them at the topic that replaced it.
//   3. Never simply delete the line. That is the mistake this file prevents.
// ─────────────────────────────────────────────────────────────────────────────

export const KNOWN_TOPIC_KEYS: readonly string[] = [
  "computer-science/algorithms",
  "computer-science/binary-and-data",
  "computer-science/boolean-logic",
  "computer-science/cyber-security",
  "computer-science/data-representation",
  "computer-science/databases",
  "computer-science/defensive-design-and-testing",
  "computer-science/digital-literacy",
  "computer-science/ethical-and-legal-issues",
  "computer-science/languages-and-ides",
  "computer-science/memory-and-storage",
  "computer-science/network-protocols-and-layers",
  "computer-science/networks-basics",
  "computer-science/programming",
  "computer-science/programming-foundations",
  "computer-science/revision-and-exam-practice",
  "computer-science/system-software",
  "computer-science/systems-architecture",
  "english/a-modern-text",
  "english/a-shakespeare-play",
  "english/comparing-texts",
  "english/context-and-themes",
  "english/creative-writing",
  "english/fiction-reading-and-writing",
  "english/grammar-punctuation-and-spelling",
  "english/introducing-shakespeare",
  "english/non-fiction-and-viewpoints",
  "english/poetry-anthology",
  "english/poetry-basics",
  "english/reading-for-meaning",
  "english/revision-and-exam-practice",
  "english/spoken-language",
  "english/the-19th-century-novel",
  "english/unseen-poetry",
  "geography/climate-change",
  "geography/coasts",
  "geography/development-and-inequality",
  "geography/ecosystems-and-biomes",
  "geography/fieldwork-and-enquiry",
  "geography/issue-evaluation",
  "geography/map-skills",
  "geography/maps-graphs-and-statistics",
  "geography/natural-hazards",
  "geography/population-and-urbanisation",
  "geography/resource-management",
  "geography/resources-and-sustainability",
  "geography/revision-and-exam-practice",
  "geography/rivers-and-flooding",
  "geography/tectonic-hazards",
  "geography/the-changing-economic-world",
  "geography/the-living-world",
  "geography/uk-physical-landscapes",
  "geography/urban-issues-and-challenges",
  "geography/weather-and-climate",
  "history/america-1920-1973",
  "history/conflict-and-tension-1918-1939",
  "history/crime-and-punishment",
  "history/elizabethan-england",
  "history/germany-1890-1945",
  "history/medicine-through-time",
  "history/migration-to-britain",
  "history/norman-england-1066-1100",
  "history/revision-and-exam-practice",
  "history/source-skills-and-interpretations",
  "history/superpower-relations-and-the-cold-war",
  "history/the-british-empire",
  "history/the-first-world-war",
  "history/the-holocaust",
  "history/the-industrial-revolution",
  "history/the-rise-of-the-nazis",
  "history/the-russian-revolution",
  "history/the-second-world-war",
  "history/the-transatlantic-slave-trade",
  "maths/algebra-basics",
  "maths/angles-and-2d-shapes",
  "maths/circle-theorems",
  "maths/compound-measures-and-rates",
  "maths/constructions-loci-and-bearings",
  "maths/equations-and-inequalities",
  "maths/fractions-decimals-percentages",
  "maths/indices-and-standard-form",
  "maths/number-and-place-value",
  "maths/perimeter-area-and-volume",
  "maths/probability",
  "maths/pythagoras-and-trigonometry",
  "maths/quadratics-and-sequences",
  "maths/ratio-and-proportion",
  "maths/revision-and-exam-practice",
  "maths/similarity-and-congruence",
  "maths/statistics-and-charts",
  "maths/straight-line-graphs",
  "maths/vectors-and-transformations",
];

// Topics deliberately withdrawn. Empty, and it should stay that way unless
// somebody has migrated the activity rows first.
export const RETIRED_TOPIC_KEYS: readonly string[] = [];
