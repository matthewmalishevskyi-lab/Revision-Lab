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

  // ─── Business (added 2026-08-09) ──────────────────────────────────────────
  // Year 10 only. Business is a GCSE option begun in Year 10, so there is no
  // Year 9; Year 11 is planned and not yet written. Registering the slugs now
  // means that if one is ever renamed, the check fails loudly instead of
  // quietly orphaning everybody's progress on it.
  "business/enterprise-and-entrepreneurship",
  "business/business-aims-and-objectives",
  "business/spotting-a-business-opportunity",
  "business/market-research",
  "business/market-segmentation",
  "business/business-ownership",
  "business/business-location",
  "business/the-marketing-mix",
  "business/revenue-costs-and-profit",
  "business/break-even-analysis",
  "business/cash-flow",
  "business/sources-of-finance",
  "business/stakeholders",

  // Year 11, added the same day.
  "business/business-growth",
  "business/globalisation-and-trade",
  "business/ethics-and-the-environment",
  "business/the-economic-climate",
  "business/business-and-the-law",
  "business/production-processes",
  "business/stock-and-suppliers",
  "business/quality",
  "business/customer-service",
  "business/organisational-structures",
  "business/recruitment-and-selection",
  "business/training-and-motivation",
  "business/technology-in-business",

  // ─── Science (added 2026-08-10) ───────────────────────────────────────────
  // Biology, Chemistry and Physics are ordinary subjects with ordinary slugs;
  // the Science card on the homepage is only a navigation layer above them.
  //
  // ⚠️ This list was first generated by regex over subjects.ts with a
  // fixed-size window, which ran past the end of Chemistry and gave it two of
  // Physics's slugs. The disappearance guard below caught it on the first run.
  // It is now generated from the COMPILED data, where a subject's topics cannot
  // leak into its neighbour's.
  // Biology — 20 topics
  "biology/cell-structure",
  "biology/cell-transport",
  "biology/cell-division",
  "biology/enzymes-and-digestion",
  "biology/plant-organisation",
  "biology/the-microscope-and-practicals",
  "biology/communicable-disease",
  "biology/non-communicable-disease",
  "biology/photosynthesis",
  "biology/respiration",
  "biology/the-nervous-system",
  "biology/hormones-and-homeostasis",
  "biology/the-circulatory-system",
  "biology/dna-and-reproduction",
  "biology/genetics-and-inheritance",
  "biology/variation-and-evolution",
  "biology/classification-and-selection",
  "biology/ecosystems-and-food-chains",
  "biology/biodiversity-and-human-impact",
  "biology/biology-exam-practice",
  // Chemistry — 19 topics
  "chemistry/atomic-structure",
  "chemistry/the-periodic-table",
  "chemistry/ionic-and-covalent-bonding",
  "chemistry/states-and-structures",
  "chemistry/separating-mixtures",
  "chemistry/formulae-and-equations",
  "chemistry/quantitative-chemistry",
  "chemistry/acids-and-alkalis",
  "chemistry/reactivity-of-metals",
  "chemistry/electrolysis",
  "chemistry/energy-changes",
  "chemistry/rates-of-reaction",
  "chemistry/reversible-reactions",
  "chemistry/organic-chemistry",
  "chemistry/polymers",
  "chemistry/chemical-analysis",
  "chemistry/the-atmosphere",
  "chemistry/using-the-earths-resources",
  "chemistry/chemistry-exam-practice",
  // Physics — 19 topics
  "physics/energy-stores-and-transfers",
  "physics/energy-resources",
  "physics/the-particle-model",
  "physics/forces-basics",
  "physics/electricity-basics",
  "physics/atomic-structure-and-radiation",
  "physics/electrical-circuits",
  "physics/mains-electricity",
  "physics/motion-and-graphs",
  "physics/newtons-laws",
  "physics/waves",
  "physics/the-electromagnetic-spectrum",
  "physics/density-and-pressure",
  "physics/magnetism-and-electromagnetism",
  "physics/momentum-and-work",
  "physics/radioactivity-and-half-life",
  "physics/space-physics",
  "physics/required-practicals",
  "physics/physics-exam-practice",

  // ─── Citizenship (added 2026-08-10) ───────────────────────────────────────
  "citizenship/identity-and-diversity",
  "citizenship/rights-and-responsibilities",
  "citizenship/the-law-and-legal-system",
  "citizenship/democracy-in-the-uk",
  "citizenship/elections-and-voting",
  "citizenship/active-citizenship",
  "citizenship/parliament-and-government",
  "citizenship/the-media-and-democracy",
  "citizenship/the-uk-and-the-world",
  "citizenship/money-and-the-citizen",
  "citizenship/crime-and-justice",
  "citizenship/citizenship-exam-practice",


  // Religious Education, added after the multiple-choice rollout. All new.
  "religious-education/what-is-religion",
  "religious-education/introducing-christianity",
  "religious-education/introducing-islam",
  "religious-education/introducing-judaism",
  "religious-education/dharmic-religions",
  "religious-education/big-questions-and-ethics",
  "religious-education/christian-beliefs",
  "religious-education/christian-practices",
  "religious-education/muslim-beliefs",
  "religious-education/muslim-practices",
  "religious-education/relationships-and-families",
  "religious-education/religion-and-life",
  "religious-education/the-existence-of-god",
  "religious-education/peace-and-conflict",
  "religious-education/crime-and-punishment",
  "religious-education/human-rights-and-social-justice",
  "religious-education/sources-of-authority",
  "religious-education/re-exam-practice",

];

// Topics deliberately withdrawn. Empty, and it should stay that way unless
// somebody has migrated the activity rows first.
export const RETIRED_TOPIC_KEYS: readonly string[] = [
  // Withdrawn 2026-08-09, the day after they were registered. Geography Year 9
  // had ten topics — more than any other year on the site — and three of them
  // duplicated GCSE topics in Year 10:
  //
  //   population-and-urbanisation  →  covered by urban-issues-and-challenges
  //   development-and-inequality   →  covered by the-changing-economic-world
  //   resources-and-sustainability →  covered by resource-management
  //
  // SAFE TO RETIRE: no content was ever written for them and no activity rows
  // exist, because Geography was added the same day. Had anyone practised them,
  // the rows would have needed migrating in Supabase FIRST — which is exactly
  // what this list is here to force somebody to think about.
  //
  // climate-change was not retired. It moved from Year 9 to Year 11, and moving
  // a topic between years does not change its slug, so nothing points anywhere
  // new and no migration is needed.
  "geography/population-and-urbanisation",
  "geography/development-and-inequality",
  "geography/resources-and-sustainability",
];
