// BIOLOGY — Years 9 and 10 written. Year 11 planned, not yet written.
//
// ⚠️ FOUNDATION AND HIGHER, AND WHY THE FLAGS ARE USED SPARINGLY
//
// Biology is tiered: Foundation is graded 1-5, Higher 4-9, and the Higher
// papers examine extra material a Foundation student is never asked about. AQA
// marks that material "(HT only)" in its specification.
//
// Anything flagged `higherOnly` below renders with a visible badge so Foundation
// students can skip it. That badge is a promise, and getting it wrong is worse
// than not having it: telling a Foundation student to skip something that IS on
// their paper costs them marks they would otherwise have had.
//
// So the flags are used ONLY where the split is well established:
//   - the inverse square law for light intensity, and explaining the
//     interaction of limiting factors, in photosynthesis
//   - negative feedback involving thyroxine and adrenaline
//   - the rate of blood flow calculation
//
// Most of Year 9 cell biology is common to BOTH tiers, so almost nothing there
// is flagged. That is the honest answer rather than a gap: there genuinely is
// very little Higher-only content that early in the course.
//
// ⚠️ Exam boards differ. This follows AQA, which is the most widely taught, but
// Edexcel and OCR draw the tier line in slightly different places. Treat a badge
// as a strong hint to check your own specification, not as gospel.

import type { TopicContent } from "./index";

export const BIOLOGY: Record<string, TopicContent> = {
  "biology/cell-structure": {
    summary:
      "Everything alive is made of cells, and almost every other topic in Biology comes back to what is inside one and what each part does. This topic covers the two great categories of cell — prokaryotic and eukaryotic — the parts they contain, how those parts differ between plants and animals, and how cells specialise for particular jobs.",
    keyFacts: [
      {
        heading: "Prokaryotic and eukaryotic cells",
        points: [
          "EUKARYOTIC cells have a nucleus enclosed in a membrane. Plants, animals and fungi are all eukaryotes.",
          "PROKARYOTIC cells have no nucleus. Their DNA floats free in the cytoplasm as a single loop. Bacteria are prokaryotes.",
          "Prokaryotes may also carry small extra rings of DNA called plasmids.",
          "Prokaryotic cells are much smaller — typically 1-5 micrometres, against 10-100 micrometres for a eukaryotic cell.",
          "Bacteria also have a cell wall, but it is NOT made of cellulose as a plant's is.",
        ],
      },
      {
        heading: "The parts of an animal cell",
        points: [
          "NUCLEUS — contains the DNA, and controls the activities of the cell.",
          "CYTOPLASM — the jelly where most chemical reactions happen.",
          "CELL MEMBRANE — controls what enters and leaves the cell.",
          "MITOCHONDRIA — where aerobic respiration happens, releasing energy.",
          "RIBOSOMES — where proteins are made.",
        ],
      },
      {
        heading: "What plant cells have as well",
        points: [
          "CELL WALL made of cellulose, which strengthens the cell and stops it bursting.",
          "PERMANENT VACUOLE containing cell sap, which helps keep the cell firm.",
          "CHLOROPLASTS containing chlorophyll, where photosynthesis happens.",
          "Not every plant cell has chloroplasts — root cells do not, because there is no light underground.",
          "Plant cells have all the animal cell parts as well, so a cell wall alone does not make something a plant.",
        ],
      },
      {
        heading: "Specialised cells",
        points: [
          "SPERM CELL — a tail for swimming, many mitochondria for energy, enzymes in the head to digest into the egg.",
          "NERVE CELL — very long to carry impulses far, branched ends to connect to other cells.",
          "MUSCLE CELL — packed with mitochondria and protein fibres that can contract.",
          "ROOT HAIR CELL — a long projection giving a large surface area for absorbing water and minerals.",
          "XYLEM carries water up and is made of dead hollow cells; PHLOEM carries dissolved sugars and is made of living cells.",
          "DIFFERENTIATION is the process of a cell becoming specialised. Most animal cells differentiate early; many plant cells keep the ability throughout life.",
        ],
      },
    ],
    flashcards: [
      { term: "Eukaryotic cell", definition: "A cell whose DNA is enclosed in a nucleus. Plant, animal and fungal cells are eukaryotic." },
      { term: "Prokaryotic cell", definition: "A cell with no nucleus, whose DNA floats free in the cytoplasm. Bacteria are prokaryotic." },
      { term: "Nucleus", definition: "The part of a eukaryotic cell containing the DNA, which controls the cell's activities." },
      { term: "Cytoplasm", definition: "The jelly-like substance inside a cell where most chemical reactions take place." },
      { term: "Cell membrane", definition: "The layer around a cell that controls which substances enter and leave." },
      { term: "Mitochondria", definition: "The parts of a cell where aerobic respiration takes place, releasing energy." },
      { term: "Ribosomes", definition: "The parts of a cell where proteins are made." },
      { term: "Cell wall", definition: "A rigid outer layer made of cellulose in plants, which strengthens the cell and stops it bursting." },
      { term: "Chloroplast", definition: "The part of a plant cell containing chlorophyll, where photosynthesis takes place." },
      { term: "Permanent vacuole", definition: "A space in a plant cell filled with cell sap, which helps keep the cell firm." },
      { term: "Plasmid", definition: "A small ring of extra DNA found in bacterial cells, separate from the main loop." },
      { term: "Differentiation", definition: "The process by which a cell becomes specialised for a particular job." },
      { term: "Specialised cell", definition: "A cell whose structure is adapted to carry out one particular function." },
      { term: "Root hair cell", definition: "A plant cell with a long projection giving a large surface area for absorbing water and minerals." },
      { term: "Xylem", definition: "Dead hollow plant cells that carry water and minerals upwards from the roots." },
      { term: "Phloem", definition: "Living plant cells that transport dissolved sugars around the plant." },
      { term: "Micrometre", definition: "One millionth of a metre, written µm — the usual unit for the size of a cell." },
    ],
    examTips: [
      {
        tip: "Prokaryotic means NO nucleus — that is the whole definition",
        detail:
          "Not 'smaller', not 'simpler', though both are true. If a question asks how you know a cell is prokaryotic, the answer is the absence of a nucleus.",
      },
      {
        tip: "Say what a part DOES, not just its name",
        detail:
          "'Mitochondria' scores nothing on its own. 'Mitochondria, where aerobic respiration releases energy' scores. Almost every mark in this topic is for the function.",
      },
      {
        tip: "Link every adaptation to its job",
        detail:
          "'A sperm cell has many mitochondria' is half an answer. '...to release the energy needed to swim to the egg' is the whole one.",
      },
      {
        tip: "Not all plant cells have chloroplasts",
        detail:
          "Root cells have none, because there is no light underground. Questions use this to catch students who learned a list instead of understanding it.",
      },
      {
        tip: "Bacterial cell walls are not made of cellulose",
        detail:
          "Both bacteria and plants have a cell wall, but only the plant's is cellulose. Writing that a bacterium has a cellulose wall loses the mark.",
      },
      {
        tip: "Get the units right for size",
        detail:
          "Cells are measured in micrometres (µm), one millionth of a metre. Sub-cellular parts are often in nanometres. A number with the wrong unit is wrong.",
      },
    ],
    practice: [
      {
        question: "What type of cell has no nucleus?",
        accept: ["prokaryotic", "prokaryote", "a prokaryotic cell", "prokaryotic cell"],
        answer:
          "A prokaryotic cell. Its DNA sits free in the cytoplasm as a single loop rather than being enclosed. Bacteria are the example you need to know.",
      },
      {
        question: "What type of cell has its DNA enclosed in a nucleus?",
        accept: ["eukaryotic", "eukaryote", "a eukaryotic cell", "eukaryotic cell"],
        answer:
          "A eukaryotic cell. Plants, animals and fungi are all eukaryotes — so every cell in your body is eukaryotic.",
      },
      {
        question: "Which part of a cell is the site of aerobic respiration?",
        accept: ["mitochondria", "mitochondrion", "the mitochondria"],
        answer:
          "The mitochondria. Cells that need a lot of energy — muscle cells, sperm cells — contain far more of them, which is a favourite exam link.",
      },
      {
        question: "Which part of a cell makes proteins?",
        accept: ["ribosomes", "ribosome", "the ribosomes"],
        answer:
          "The ribosomes. They are found in both prokaryotic and eukaryotic cells, because every living cell needs to make proteins.",
      },
      {
        question: "What is a plant cell wall made of?",
        accept: ["cellulose"],
        answer:
          "Cellulose. Bacteria also have a cell wall but it is NOT cellulose — a distinction exam questions test directly.",
      },
      {
        question: "Which part of a plant cell contains chlorophyll?",
        accept: ["chloroplast", "chloroplasts", "the chloroplasts"],
        answer:
          "The chloroplasts. Note that root cells do not have any, because there is no light underground for photosynthesis.",
      },
      {
        question: "What is the name for a small ring of extra DNA found in bacteria?",
        accept: ["plasmid", "a plasmid", "plasmids"],
        answer:
          "A plasmid. It sits separately from the main loop of DNA and can be passed between bacteria, which is one way antibiotic resistance spreads.",
      },
      {
        question: "What is the process by which a cell becomes specialised called?",
        accept: ["differentiation", "differentiating"],
        answer:
          "Differentiation. Most animal cells differentiate early and lose the ability; many plant cells keep it for life, which is why a cutting can grow a whole new plant.",
      },
      {
        question: "Which plant tissue carries water upwards from the roots?",
        accept: ["xylem", "the xylem"],
        answer:
          "Xylem. It is made of dead, hollow cells strengthened with lignin, forming a continuous tube — being dead is what makes it an efficient pipe.",
      },
      {
        question: "Which plant tissue transports dissolved sugars around the plant?",
        accept: ["phloem", "the phloem"],
        answer:
          "Phloem. Unlike xylem it is made of LIVING cells, because moving sugar both up and down the plant requires energy.",
      },
      {
        question: "Which unit, one millionth of a metre, is used to measure cells?",
        accept: ["micrometre", "micrometer", "µm", "um", "micrometres", "microns"],
        answer:
          "The micrometre (µm). A typical animal cell is 10-100 µm across; a bacterium is around 1-5 µm.",
      },
      {
        question: "Give one adaptation of a root hair cell.",
        accept: ["long projection", "large surface area", "no chloroplasts", "thin wall", "big surface area", "many mitochondria", "surface area"],
        answer:
          "A long projection giving a large surface area for absorbing water and minerals. Always add WHY the adaptation helps — the reason carries the mark.",
      },
      {
        question: "True or false: every plant cell contains chloroplasts.",
        accept: ["false", "f"],
        answer:
          "False. Root cells have none, because no light reaches them. This is the standard trap for students who memorised a list of plant cell parts.",
      },
      {
        question: "Which part of the cell controls what enters and leaves it?",
        accept: ["cell membrane", "the cell membrane", "membrane", "plasma membrane"],
        answer:
          "The cell membrane. Note it is partially permeable — it lets some substances through and not others, which is the whole basis of the next topic.",
      },
      {
        question: "Explain why a sperm cell contains many mitochondria. Write two or three sentences.",
        answer:
          "Mitochondria are where aerobic respiration takes place, releasing energy from glucose. A sperm cell must swim a long distance to reach the egg, which needs a continuous supply of energy for the tail to beat. Having many mitochondria means it can release that energy fast enough to keep moving. Mark this one yourself: credit yourself for naming respiration AND linking it to swimming.",
      },
      {
        question: "Compare a prokaryotic and a eukaryotic cell. Give at least three differences.",
        answer:
          "A eukaryotic cell has a nucleus enclosing its DNA; a prokaryotic cell has none, and its DNA sits free in the cytoplasm as a single loop. Prokaryotes may also carry plasmids, which eukaryotes do not. Prokaryotic cells are far smaller, typically 1-5 µm against 10-100 µm. Prokaryotes also lack mitochondria and chloroplasts. Both do have cytoplasm, a cell membrane and ribosomes. Mark this one yourself: three clear differences is full marks, and mentioning a similarity as well shows real understanding.",
      },
    ],
    misconceptions: [
      {
        wrong: "Plant cells have a cell wall and animal cells have a membrane.",
        right:
          "Plant cells have BOTH — a membrane inside a cell wall. The wall is an addition, not a replacement.",
      },
      {
        wrong: "Bacteria have a cellulose cell wall like plants.",
        right:
          "Bacteria do have a cell wall, but it is not made of cellulose. Only plant cell walls are.",
      },
      {
        wrong: "All plant cells photosynthesise.",
        right:
          "Only cells with chloroplasts can, and root cells have none — there is no light underground.",
      },
      {
        wrong: "Prokaryotic just means 'a simple cell'.",
        right:
          "It means specifically that there is no nucleus. Prokaryotic cells are perfectly capable of respiration, reproduction and movement.",
      },
      {
        wrong: "Mitochondria make energy.",
        right:
          "Energy cannot be made. Mitochondria RELEASE energy stored in glucose, by respiration. Examiners mark 'makes energy' as wrong.",
      },
    ],
  },

  "biology/cell-transport": {
    summary:
      "Substances have to get into and out of cells: oxygen and glucose in, carbon dioxide and urea out. This topic covers the three ways that happens — diffusion, osmosis and active transport — and why the shape of an exchange surface matters so much. Osmosis is the one students most often get backwards, so it is worth being precise about the wording.",
    keyFacts: [
      {
        heading: "Diffusion",
        points: [
          "Diffusion is the spreading out of particles from a HIGH concentration to a LOW one, down a concentration gradient.",
          "It is a passive process — it needs no energy from the cell.",
          "Examples: oxygen and carbon dioxide in gas exchange, urea from cells into the blood.",
          "The rate of diffusion increases with a steeper concentration gradient, a higher temperature, and a larger surface area.",
          "It also increases when the distance to travel is shorter, which is why exchange surfaces are thin.",
        ],
      },
      {
        heading: "Osmosis",
        points: [
          "Osmosis is the movement of WATER only, through a partially permeable membrane.",
          "Water moves from a DILUTE solution (high water concentration) to a CONCENTRATED one (low water concentration).",
          "Like diffusion it is passive and needs no energy.",
          "A plant cell in dilute solution takes in water and becomes TURGID; the wall stops it bursting.",
          "A plant cell losing water becomes FLACCID, and eventually PLASMOLYSED as the membrane pulls away from the wall.",
          "An animal cell has no wall, so in dilute solution it can swell and burst — LYSIS.",
        ],
      },
      {
        heading: "Active transport",
        points: [
          "Active transport moves substances AGAINST the concentration gradient, from low to high.",
          "It requires ENERGY from respiration, which is what separates it from the other two.",
          "Root hair cells use it to absorb mineral ions from very dilute soil water.",
          "The gut uses it to absorb glucose when the concentration in the gut is already lower than in the blood.",
          "Cells doing a lot of active transport contain many mitochondria to supply the energy.",
        ],
      },
      {
        heading: "Exchange surfaces",
        points: [
          "A single-celled organism has a large surface area to volume ratio, so diffusion alone is enough.",
          "Larger organisms have a small surface area to volume ratio, so they need specialised exchange surfaces and a transport system.",
          "Effective exchange surfaces are LARGE in area, THIN, have a good blood supply, and in animals are ventilated.",
          "Examples: alveoli in the lungs, villi in the small intestine, gills in fish, root hairs and leaves in plants.",
          "Surface area to volume ratio = total surface area ÷ volume.",
        ],
      },
    ],
    flashcards: [
      { term: "Diffusion", definition: "The passive spreading of particles from a high concentration to a low concentration." },
      { term: "Concentration gradient", definition: "The difference in concentration between two regions, which drives diffusion." },
      { term: "Osmosis", definition: "The movement of water through a partially permeable membrane, from a dilute to a more concentrated solution." },
      { term: "Partially permeable membrane", definition: "A membrane that lets some substances through but not others." },
      { term: "Active transport", definition: "The movement of substances against a concentration gradient, using energy from respiration." },
      { term: "Turgid", definition: "A plant cell that has taken in water and is firm, pushing against its cell wall." },
      { term: "Flaccid", definition: "A plant cell that has lost water and is soft, no longer pressing against its wall." },
      { term: "Plasmolysis", definition: "When a plant cell loses so much water that the membrane pulls away from the cell wall." },
      { term: "Lysis", definition: "When an animal cell takes in so much water that it bursts." },
      { term: "Surface area to volume ratio", definition: "Total surface area divided by volume — it falls as an organism gets larger." },
      { term: "Exchange surface", definition: "A surface adapted for substances to pass in and out efficiently, such as the alveoli." },
      { term: "Alveoli", definition: "Tiny air sacs in the lungs that provide a large, thin, well-supplied surface for gas exchange." },
      { term: "Villi", definition: "Finger-like projections in the small intestine that increase the surface area for absorption." },
      { term: "Passive process", definition: "A process that needs no energy from the cell, such as diffusion and osmosis." },
      { term: "Isotonic", definition: "A solution with the same concentration as the cell contents, so there is no net movement of water." },
    ],
    examTips: [
      {
        tip: "Osmosis moves WATER, not solute",
        detail:
          "Writing 'the sugar moves into the cell by osmosis' is wrong. Osmosis is water only, through a partially permeable membrane.",
      },
      {
        tip: "Say 'dilute to concentrated', and mean the solution",
        detail:
          "Water moves from where there is more water to where there is less. Saying 'high to low concentration' without saying of WHAT is where most students lose the mark.",
      },
      {
        tip: "Active transport is the one that needs energy",
        detail:
          "If a question mentions moving against the gradient, or mentions mitochondria, it is active transport. That is the whole distinction.",
      },
      {
        tip: "Give the FOUR features of a good exchange surface",
        detail:
          "Large surface area, thin, good blood supply, ventilated. Most questions want at least two, and each must be linked to why it helps.",
      },
      {
        tip: "Show the working for percentage change",
        detail:
          "(change in mass ÷ starting mass) × 100. Always use the STARTING mass as the denominator, and keep the minus sign if the mass fell.",
      },
      {
        tip: "Remember which cell bursts",
        detail:
          "Animal cells burst in dilute solution because they have no wall. Plant cells do not, because the cellulose wall resists the pressure.",
      },
    ],
    workedExamples: [
      {
        question:
          "A piece of potato has a mass of 4.0 g. After an hour in distilled water its mass is 4.6 g. Calculate the percentage change in mass.",
        steps: [
          "Find the change in mass: 4.6 − 4.0 = 0.6 g.",
          "Percentage change = (change ÷ STARTING mass) × 100.",
          "= (0.6 ÷ 4.0) × 100.",
          "0.6 ÷ 4.0 = 0.15, and 0.15 × 100 = 15%. The mass rose, so water entered the potato by osmosis.",
        ],
        answer: "+15% — water moved into the potato cells",
      },
      {
        question:
          "A cube of agar has sides of 2 cm. Calculate its surface area to volume ratio.",
        steps: [
          "Surface area of a cube = 6 × side² = 6 × 2² = 6 × 4 = 24 cm².",
          "Volume of a cube = side³ = 2³ = 8 cm³.",
          "Ratio = surface area ÷ volume = 24 ÷ 8.",
          "= 3, usually written 3:1. A larger cube would give a SMALLER ratio, which is why big organisms need exchange surfaces.",
        ],
        answer: "3:1",
      },
    ],
    practice: [
      {
        question: "What is the movement of particles from a high to a low concentration called?",
        accept: ["diffusion"],
        answer:
          "Diffusion. It is passive, meaning it needs no energy from the cell — the particles' own random movement does the work.",
      },
      {
        question: "What is the movement of water through a partially permeable membrane called?",
        accept: ["osmosis"],
        answer:
          "Osmosis. Note it is WATER only. Saying that sugar or salt moves by osmosis is one of the most common errors in the whole subject.",
      },
      {
        question: "Which transport process requires energy from respiration?",
        accept: ["active transport", "active"],
        answer:
          "Active transport. It moves substances AGAINST the concentration gradient, which cannot happen without an energy input.",
      },
      {
        question: "A plant cell that has taken in water and become firm is described as ______.",
        accept: ["turgid"],
        answer:
          "Turgid. The cellulose cell wall resists the pressure, which is what stops the cell bursting and what keeps a plant standing up.",
      },
      {
        question: "What is it called when a plant cell loses so much water that the membrane pulls away from the wall?",
        accept: ["plasmolysis", "plasmolysed", "plasmolyse"],
        answer:
          "Plasmolysis. It is the plant equivalent of severe dehydration, and it is why a plant left unwatered wilts and then collapses.",
      },
      {
        question: "A potato piece starts at 5.0 g and ends at 5.5 g. Calculate the percentage change in mass. Give the number only.",
        accept: ["10", "10%"],
        answer:
          "+10%. Change = 0.5 g; (0.5 ÷ 5.0) × 100 = 10%. Always divide by the STARTING mass, not the final one.",
      },
      {
        question: "A potato piece starts at 4.0 g and ends at 3.4 g. Calculate the percentage change in mass. Give the number only, including the minus sign.",
        accept: ["-15", "-15%"],
        answer:
          "−15%. Change = 3.4 − 4.0 = −0.6 g; (−0.6 ÷ 4.0) × 100 = −15%. The minus sign matters: it shows water LEFT the cells by osmosis.",
      },
      {
        question: "Calculate the surface area to volume ratio of a cube with sides of 3 cm. Give the number only.",
        accept: ["2"],
        answer:
          "2, usually written 2:1. Surface area = 6 × 3² = 54 cm²; volume = 3³ = 27 cm³; 54 ÷ 27 = 2. Note it is smaller than a 2 cm cube's 3:1.",
      },
      {
        question: "Which cells in a plant use active transport to absorb minerals from the soil?",
        accept: ["root hair cells", "root hair cell", "root hairs", "root cells"],
        answer:
          "Root hair cells. Soil water is more dilute than the cell contents, so minerals must be moved against the gradient — which needs energy.",
      },
      {
        question: "Name the tiny air sacs in the lungs where gas exchange happens.",
        accept: ["alveoli", "alveolus", "the alveoli"],
        answer:
          "The alveoli. They are the classic exchange surface: huge total area, one cell thick, a rich blood supply, and constantly ventilated.",
      },
      {
        question: "Name the finger-like projections in the small intestine that increase surface area.",
        accept: ["villi", "villus", "the villi"],
        answer:
          "The villi (and microvilli on top of them). Together they give the small intestine an absorbing surface of roughly the area of a tennis court.",
      },
      {
        question: "Does the surface area to volume ratio increase or decrease as an organism gets bigger?",
        accept: ["decrease", "decreases", "falls", "fall", "goes down", "smaller", "reduces"],
        answer:
          "It decreases. That is exactly why large organisms need exchange surfaces and transport systems, while a single-celled organism manages by diffusion alone.",
      },
      {
        question: "Give one factor that increases the rate of diffusion.",
        accept: ["temperature", "surface area", "concentration gradient", "steeper gradient", "shorter distance", "thinner", "higher temperature", "larger surface area"],
        answer:
          "A steeper concentration gradient, a higher temperature, a larger surface area, or a shorter distance to travel. Exchange surfaces are designed around all four.",
      },
      {
        question: "True or false: osmosis requires energy from respiration.",
        accept: ["false", "f"],
        answer:
          "False. Osmosis and diffusion are both passive. Only ACTIVE transport needs energy, which is the reason for the name.",
      },
      {
        question: "Explain why an animal cell bursts in pure water but a plant cell does not. Write two or three sentences.",
        answer:
          "In pure water, water enters both cells by osmosis because the cell contents are more concentrated than the outside. An animal cell has only a membrane, which cannot resist the increasing pressure, so it swells and bursts. A plant cell has a rigid cellulose cell wall outside its membrane, which pushes back once the cell is turgid and stops any more water entering. Mark this one yourself: credit yourself for naming osmosis and for the cell wall resisting pressure.",
      },
      {
        question: "Explain why the small intestine is well adapted for absorbing digested food.",
        answer:
          "It is very long and its wall is folded into villi, each covered in microvilli, giving an enormous surface area for absorption. The villi walls are only one cell thick, so the distance for diffusion is very short. Each villus has a rich blood supply that carries absorbed molecules away immediately, keeping the concentration inside low and so maintaining a steep concentration gradient. Mark this one yourself: large area, thin, good blood supply — you need at least two of the three, each linked to WHY it helps.",
      },
    ],
    misconceptions: [
      {
        wrong: "Osmosis is the movement of any substance through a membrane.",
        right:
          "Osmosis is WATER only, through a partially permeable membrane. Other substances move by diffusion or active transport.",
      },
      {
        wrong: "Water moves from high concentration to low concentration in osmosis.",
        right:
          "True only if you mean the concentration of WATER. Say it as 'from a dilute solution to a concentrated solution' and the ambiguity disappears.",
      },
      {
        wrong: "Active transport is just faster diffusion.",
        right:
          "It moves substances the OPPOSITE way — against the gradient — and it needs energy from respiration. It is a different process, not a faster one.",
      },
      {
        wrong: "Big organisms need lungs because they need more oxygen.",
        right:
          "It is about the RATIO. As something gets bigger its surface area grows more slowly than its volume, so its skin can no longer supply its insides by diffusion.",
      },
      {
        wrong: "A turgid plant cell has burst.",
        right:
          "Turgid means firm and healthy — it is what keeps a plant upright. The cell wall prevents bursting entirely.",
      },
    ],
  },

  "biology/cell-division": {
    summary:
      "Every cell in your body came from one fertilised egg dividing over and over. This topic covers the cell cycle and mitosis — how a cell copies itself exactly — and stem cells, the undifferentiated cells that can still become anything. Stem cells are also where the ethics questions live, and those questions carry marks.",
    keyFacts: [
      {
        heading: "Chromosomes and the cell cycle",
        points: [
          "Chromosomes are long molecules of DNA carrying the genes. Human body cells have 23 PAIRS, so 46 in total.",
          "The cell cycle has three stages: growth and DNA replication, then mitosis, then cytokinesis when the cytoplasm and membrane divide.",
          "In the first and longest stage the cell grows, makes more sub-cellular parts such as mitochondria and ribosomes, and copies its DNA.",
          "MITOSIS is the stage where one set of chromosomes is pulled to each end of the cell and the nucleus divides.",
          "The result is TWO daughter cells that are genetically IDENTICAL to each other and to the parent cell.",
        ],
      },
      {
        heading: "Why cells divide",
        points: [
          "GROWTH — building a larger organism from a smaller one.",
          "REPAIR — replacing cells damaged by injury.",
          "REPLACEMENT — skin, gut lining and blood cells are replaced constantly throughout life.",
          "Asexual reproduction in some organisms also uses mitosis, producing genetically identical offspring.",
          "Uncontrolled cell division produces a mass of cells called a tumour, which is how cancer begins.",
        ],
      },
      {
        heading: "Stem cells",
        points: [
          "A stem cell is an undifferentiated cell that can divide to produce more cells of the same type, or differentiate into specialised cells.",
          "EMBRYONIC stem cells can become almost ANY type of cell.",
          "ADULT stem cells, such as those in bone marrow, can form only a limited range — mostly blood cells.",
          "In plants, stem cells in the MERISTEM at the tips of roots and shoots can differentiate throughout the plant's life.",
          "THERAPEUTIC CLONING makes an embryo with the same genes as the patient, so the stem cells are not rejected.",
        ],
      },
      {
        heading: "Uses and objections",
        points: [
          "Medical uses include treating diabetes, paralysis and blood disorders such as leukaemia.",
          "Plant meristem cells can be used to clone rare species and to produce identical crops cheaply.",
          "Risks: transferred viral infection, and cells that may not behave as intended.",
          "Ethical objections centre on embryonic stem cells, because obtaining them destroys the embryo.",
          "Others argue the embryos are unused ones from fertility treatment that would be destroyed anyway — an exam answer should give both sides.",
        ],
      },
    ],
    flashcards: [
      { term: "Chromosome", definition: "A long molecule of DNA carrying many genes, found in the nucleus." },
      { term: "Mitosis", definition: "The stage of the cell cycle where the nucleus divides to produce two genetically identical nuclei." },
      { term: "Cell cycle", definition: "The sequence of growth, DNA replication, mitosis and cytokinesis by which a cell divides." },
      { term: "Cytokinesis", definition: "The final stage of the cell cycle, where the cytoplasm and membrane divide into two cells." },
      { term: "Daughter cells", definition: "The two genetically identical cells produced when a cell divides by mitosis." },
      { term: "Stem cell", definition: "An undifferentiated cell that can divide to produce more of itself or differentiate into specialised cells." },
      { term: "Embryonic stem cell", definition: "A stem cell from an early embryo, able to become almost any type of cell." },
      { term: "Adult stem cell", definition: "A stem cell found in adult tissue such as bone marrow, able to form only a limited range of cell types." },
      { term: "Meristem", definition: "Plant tissue at the tips of roots and shoots containing cells that can differentiate throughout life." },
      { term: "Therapeutic cloning", definition: "Producing an embryo with the same genes as a patient so its stem cells are not rejected." },
      { term: "Differentiation", definition: "The process by which an unspecialised cell becomes specialised for a particular job." },
      { term: "Tumour", definition: "A mass of cells produced by uncontrolled cell division." },
      { term: "Clone", definition: "An organism or cell genetically identical to another." },
      { term: "Rejection", definition: "When a patient's immune system attacks transplanted cells because it recognises them as foreign." },
    ],
    examTips: [
      {
        tip: "Mitosis produces IDENTICAL cells — say the word",
        detail:
          "Two genetically identical daughter cells. 'Two new cells' is not enough; the identical part is the mark.",
      },
      {
        tip: "Mitosis is one STAGE, not the whole cycle",
        detail:
          "The cell cycle is growth and DNA copying, then mitosis, then cytokinesis. Questions about 'before mitosis' are asking about DNA replication.",
      },
      {
        tip: "Know which stem cells can become what",
        detail:
          "Embryonic can become almost anything; adult ones are limited. Getting these the wrong way round is the commonest error here.",
      },
      {
        tip: "Give BOTH sides on stem cell ethics",
        detail:
          "The objection is the destruction of the embryo; the counter is that these embryos are usually unused and would be destroyed anyway. An answer with one side caps its own marks.",
      },
      {
        tip: "Explain WHY therapeutic cloning avoids rejection",
        detail:
          "Because the cells carry the patient's own genes, so the immune system does not recognise them as foreign. The reason is the mark.",
      },
      {
        tip: "Don't confuse a tumour with cancer",
        detail:
          "A tumour is a mass of cells from uncontrolled division. Benign tumours stay put; malignant ones invade and spread, and that is cancer.",
      },
    ],
    practice: [
      {
        question: "How many pairs of chromosomes are there in a human body cell?",
        accept: ["23", "twenty three", "twenty-three"],
        answer:
          "23 pairs, which is 46 chromosomes in total. Watch the wording of the question carefully — it may ask for pairs or for the total.",
      },
      {
        question: "What is the type of cell division that produces two genetically identical cells called?",
        accept: ["mitosis"],
        answer:
          "Mitosis. The word 'identical' is essential — it is what distinguishes mitosis from meiosis, which you meet in Year 11.",
      },
      {
        question: "What happens to the DNA before mitosis begins?",
        accept: ["it is copied", "replicated", "replication", "duplicated", "copied", "dna replication", "it replicates"],
        answer:
          "It is replicated — copied exactly — so each daughter cell can receive a full set. The cell also grows and makes more mitochondria and ribosomes.",
      },
      {
        question: "What is the final stage of the cell cycle, where the cytoplasm divides, called?",
        accept: ["cytokinesis"],
        answer:
          "Cytokinesis. Mitosis divides the nucleus; cytokinesis then splits the rest of the cell into two separate daughter cells.",
      },
      {
        question: "What is the name for an undifferentiated cell that can become other cell types?",
        accept: ["stem cell", "a stem cell", "stem cells"],
        answer:
          "A stem cell. The key word is undifferentiated — it has not yet committed to being any particular kind of cell.",
      },
      {
        question: "Which type of stem cell can become almost any cell type?",
        accept: ["embryonic", "embryonic stem cells", "embryonic stem cell"],
        answer:
          "Embryonic stem cells. Adult stem cells are far more limited — bone marrow ones mainly produce blood cells.",
      },
      {
        question: "Where in a plant are the stem cells found?",
        accept: ["meristem", "meristems", "the meristem", "tips of roots and shoots", "root and shoot tips"],
        answer:
          "In the meristem, at the tips of roots and shoots. Unlike animals, plants keep these cells for life, which is why a cutting can grow into a whole new plant.",
      },
      {
        question: "What is the process of making an embryo with the same genes as a patient called?",
        accept: ["therapeutic cloning", "therapeutic clone"],
        answer:
          "Therapeutic cloning. Because the cells carry the patient's own genes, the immune system does not recognise them as foreign, so they are not rejected.",
      },
      {
        question: "What is a mass of cells produced by uncontrolled cell division called?",
        accept: ["tumour", "a tumour", "tumor"],
        answer:
          "A tumour. Benign tumours stay in one place; malignant ones invade surrounding tissue and spread in the blood, which is cancer.",
      },
      {
        question: "Name one medical condition that stem cell therapy might treat.",
        accept: ["diabetes", "paralysis", "leukaemia", "leukemia", "blood disorders", "spinal injury", "blindness", "parkinsons"],
        answer:
          "Diabetes, paralysis or blood disorders such as leukaemia. The principle is replacing cells that have been lost or that no longer work.",
      },
      {
        question: "Give one risk of stem cell treatment.",
        accept: ["viral infection", "infection", "rejection", "viruses", "cells behave unexpectedly", "tumours", "cancer", "unpredictable"],
        answer:
          "Transfer of viral infection from the donor cells, rejection by the immune system, or the cells not behaving as intended. All are legitimate exam points.",
      },
      {
        question: "Are the two cells produced by mitosis genetically identical or different?",
        accept: ["identical", "genetically identical", "the same", "same"],
        answer:
          "Genetically identical — to each other and to the parent cell. That is the entire point of mitosis, and the word is worth a mark on its own.",
      },
      {
        question: "Give one reason a multicellular organism needs mitosis.",
        accept: ["growth", "repair", "replacement", "to grow", "replace cells", "healing", "asexual reproduction"],
        answer:
          "Growth, repair of damaged tissue, or replacement of cells that wear out — skin, gut lining and blood cells are replaced continually throughout life.",
      },
      {
        question: "True or false: adult stem cells can become any type of cell.",
        accept: ["false", "f"],
        answer:
          "False. Adult stem cells form only a limited range — bone marrow ones mainly produce blood cells. Only EMBRYONIC stem cells are close to unlimited.",
      },
      {
        question: "Explain why stem cells from therapeutic cloning are less likely to be rejected. Write two or three sentences.",
        answer:
          "The embryo is made so that its cells carry the same genes as the patient. That means the proteins on the surface of the cells are the same as the patient's own, so the immune system does not recognise them as foreign and does not attack them. With ordinary donor cells the surface proteins differ, which triggers rejection. Mark this one yourself: credit yourself for same genes AND for the immune system not recognising them as foreign.",
      },
      {
        question: "Discuss the arguments for and against using embryonic stem cells in medicine.",
        answer:
          "In favour: they can become almost any cell type, so they offer treatments for conditions currently untreatable — paralysis, diabetes, blood disorders — and could relieve enormous suffering. Many of the embryos used are spares from fertility treatment that would otherwise be destroyed. Against: obtaining the cells destroys the embryo, and some people believe an embryo has the same right to life as a person, so the research is unacceptable whatever the benefit. There are also practical risks such as transferring viral infections. Mark this one yourself: full marks need both sides genuinely argued, not one side plus a token sentence.",
      },
    ],
    misconceptions: [
      {
        wrong: "Mitosis is the whole process of a cell dividing.",
        right:
          "Mitosis is one stage — the division of the nucleus. Before it the DNA is copied; after it cytokinesis splits the cytoplasm.",
      },
      {
        wrong: "Stem cells are only found in embryos.",
        right:
          "Adults have them too, in bone marrow for example, and plants keep them in meristems for life. Embryonic ones are simply the most versatile.",
      },
      {
        wrong: "Mitosis produces cells with half the chromosomes.",
        right:
          "That is meiosis. Mitosis produces cells with a FULL identical set — 46 in humans, the same as the parent cell.",
      },
      {
        wrong: "Every tumour is cancer.",
        right:
          "A benign tumour stays in one place and is usually not dangerous. It is malignant tumours, which invade and spread, that are cancer.",
      },
    ],
  },

  "biology/enzymes-and-digestion": {
    summary:
      "Enzymes are the reason your body can run thousands of reactions at 37°C that would otherwise need a furnace. This topic covers what enzymes are, why each one only fits one substrate, what temperature and pH do to them, and how the digestive system uses them to break large insoluble food molecules into small soluble ones.",
    keyFacts: [
      {
        heading: "What enzymes are",
        points: [
          "An enzyme is a BIOLOGICAL CATALYST: it speeds up a reaction without being used up.",
          "Enzymes are large protein molecules with a specific shape.",
          "The ACTIVE SITE is the part where the substrate binds. Its shape only fits one substrate — the LOCK AND KEY model.",
          "This is why enzymes are described as specific: one enzyme, one reaction.",
          "Enzymes allow reactions to happen fast at body temperature, without the high temperatures industry uses.",
        ],
      },
      {
        heading: "Temperature and pH",
        points: [
          "Raising the temperature increases the rate — particles collide more often and with more energy.",
          "Past the OPTIMUM, the enzyme DENATURES: the active site changes shape and the substrate no longer fits.",
          "Denaturing is permanent. Cooling a denatured enzyme does not restore it.",
          "Each enzyme also has an optimum pH. Most human enzymes work best around pH 7.",
          "Stomach protease works best around pH 2; small intestine enzymes work best around pH 8, which is why bile is needed.",
        ],
      },
      {
        heading: "The digestive enzymes",
        points: [
          "CARBOHYDRASES break carbohydrates into simple sugars. Amylase breaks starch into maltose, then to glucose.",
          "PROTEASES break proteins into amino acids.",
          "LIPASES break lipids (fats) into fatty acids and glycerol.",
          "Amylase is made in the salivary glands, pancreas and small intestine.",
          "Protease is made in the stomach (as pepsin), the pancreas and the small intestine.",
          "Lipase is made in the pancreas and the small intestine.",
        ],
      },
      {
        heading: "Bile and absorption",
        points: [
          "Bile is made in the LIVER, stored in the GALL BLADDER, and released into the small intestine.",
          "Bile is ALKALINE, so it neutralises the acid from the stomach and gives enzymes their optimum pH.",
          "Bile EMULSIFIES fat — breaking large drops into many small ones, which increases surface area.",
          "That larger surface area lets lipase work much faster. Bile is not an enzyme and does not digest anything itself.",
          "Small soluble products are absorbed through the wall of the small intestine into the blood.",
        ],
      },
    ],
    flashcards: [
      { term: "Enzyme", definition: "A protein that acts as a biological catalyst, speeding up a reaction without being used up." },
      { term: "Catalyst", definition: "A substance that speeds up a reaction without being changed or used up itself." },
      { term: "Substrate", definition: "The molecule an enzyme acts on." },
      { term: "Active site", definition: "The part of an enzyme where the substrate binds, whose shape fits only one substrate." },
      { term: "Lock and key model", definition: "The idea that a substrate fits an enzyme's active site the way a key fits one lock." },
      { term: "Denatured", definition: "An enzyme whose active site has permanently changed shape, so the substrate no longer fits." },
      { term: "Optimum temperature", definition: "The temperature at which an enzyme works fastest, around 37°C for most human enzymes." },
      { term: "Optimum pH", definition: "The pH at which an enzyme works fastest — around 2 for stomach protease, around 8 in the small intestine." },
      { term: "Carbohydrase", definition: "An enzyme that breaks carbohydrates down into simple sugars." },
      { term: "Amylase", definition: "A carbohydrase that breaks starch down into sugars." },
      { term: "Protease", definition: "An enzyme that breaks proteins down into amino acids." },
      { term: "Lipase", definition: "An enzyme that breaks lipids down into fatty acids and glycerol." },
      { term: "Bile", definition: "An alkaline liquid made in the liver that neutralises stomach acid and emulsifies fats." },
      { term: "Emulsify", definition: "To break large fat droplets into many small ones, increasing the surface area for lipase." },
      { term: "Gall bladder", definition: "The organ that stores bile before it is released into the small intestine." },
      { term: "Amino acid", definition: "The small soluble molecule that proteins are broken down into." },
    ],
    examTips: [
      {
        tip: "Enzymes are denatured, NOT killed",
        detail:
          "An enzyme is a molecule, not a living thing. Writing 'the enzyme dies' loses the mark every time. Say the active site changed shape.",
      },
      {
        tip: "Always explain denaturing through the ACTIVE SITE",
        detail:
          "'The enzyme stopped working' is not an explanation. 'The active site changed shape so the substrate no longer fits' is.",
      },
      {
        tip: "Bile is not an enzyme",
        detail:
          "It neutralises acid and emulsifies fat. It digests nothing itself — it makes lipase's job easier by increasing surface area.",
      },
      {
        tip: "Learn each enzyme's products exactly",
        detail:
          "Protein → amino acids. Lipid → fatty acids AND glycerol. Starch → sugars. Missing 'glycerol' is a mark thrown away.",
      },
      {
        tip: "Denaturing is permanent",
        detail:
          "Cooling a denatured enzyme does not bring it back. Questions often describe cooling a sample to test whether you know this.",
      },
      {
        tip: "Higher temperature is not always better",
        detail:
          "The rate rises to the optimum and then falls off a cliff. A graph question wants both halves explained, with different reasons.",
      },
    ],
    practice: [
      {
        question: "What type of molecule is an enzyme?",
        accept: ["protein", "a protein", "proteins"],
        answer:
          "A protein. That is why heat denatures it — high temperature disrupts the bonds holding the protein in its precise shape.",
      },
      {
        question: "What is the part of an enzyme where the substrate binds called?",
        accept: ["active site", "the active site"],
        answer:
          "The active site. Its shape is complementary to one specific substrate, which is why enzymes are specific — one enzyme, one reaction.",
      },
      {
        question: "What model describes a substrate fitting one enzyme like a key fits one lock?",
        accept: ["lock and key", "lock and key model", "lock-and-key"],
        answer:
          "The lock and key model. It explains enzyme specificity: a substrate that does not fit the active site simply is not acted on.",
      },
      {
        question: "What word describes an enzyme whose active site has permanently changed shape?",
        accept: ["denatured", "denaturation", "denature"],
        answer:
          "Denatured. Never write 'killed' or 'died' — an enzyme is a molecule, not an organism, and examiners mark that as wrong.",
      },
      {
        question: "What is the optimum temperature for most human enzymes, in °C? Give the number only.",
        accept: ["37"],
        answer:
          "37°C — normal body temperature. Above roughly 40°C the rate falls sharply as enzymes begin to denature.",
      },
      {
        question: "Which enzyme breaks starch down into sugars?",
        accept: ["amylase", "carbohydrase"],
        answer:
          "Amylase, a type of carbohydrase. It is made in the salivary glands, the pancreas and the small intestine.",
      },
      {
        question: "Which enzyme breaks proteins down into amino acids?",
        accept: ["protease", "proteases", "pepsin"],
        answer:
          "Protease. In the stomach it is called pepsin and works at around pH 2 — unusually acidic for an enzyme.",
      },
      {
        question: "Lipase breaks lipids into glycerol and what else?",
        accept: ["fatty acids", "fatty acid"],
        answer:
          "Fatty acids. Both products are needed for the mark — writing only 'fatty acids' or only 'glycerol' is a half answer.",
      },
      {
        question: "Where is bile made?",
        accept: ["liver", "the liver"],
        answer:
          "In the liver. It is then STORED in the gall bladder — a distinction exam questions test deliberately.",
      },
      {
        question: "Where is bile stored?",
        accept: ["gall bladder", "gallbladder", "the gall bladder"],
        answer:
          "In the gall bladder, before being released into the small intestine. Made in the liver, stored in the gall bladder — learn both.",
      },
      {
        question: "Is bile acidic or alkaline?",
        accept: ["alkaline", "alkali", "basic"],
        answer:
          "Alkaline. It neutralises the acid arriving from the stomach so that enzymes in the small intestine have their optimum pH of around 8.",
      },
      {
        question: "What word describes bile breaking large fat droplets into many small ones?",
        accept: ["emulsification", "emulsifies", "emulsify", "emulsifying"],
        answer:
          "Emulsification. It increases the surface area of the fat, so lipase can work much faster — bile itself digests nothing.",
      },
      {
        question: "What is the approximate optimum pH of protease in the stomach? Give the number only.",
        accept: ["2"],
        answer:
          "About pH 2. The stomach produces hydrochloric acid, which both suits pepsin and kills many bacteria in food.",
      },
      {
        question: "True or false: cooling a denatured enzyme restores its activity.",
        accept: ["false", "f"],
        answer:
          "False. Denaturing is permanent — the active site has changed shape and cooling does not change it back. This is a favourite exam trap.",
      },
      {
        question: "Explain why the rate of an enzyme reaction falls above the optimum temperature. Write two or three sentences.",
        answer:
          "Above the optimum, the extra energy breaks the bonds holding the enzyme in its precise three-dimensional shape. The active site therefore changes shape, so the substrate no longer fits into it and cannot be broken down. Because this change is permanent, the rate keeps falling as more enzyme molecules denature. Mark this one yourself: the mark is for the ACTIVE SITE changing shape, not just for 'the enzyme stops working'.",
      },
      {
        question: "Explain how bile helps lipase digest fat, even though bile is not an enzyme.",
        answer:
          "Bile is alkaline, so it neutralises the hydrochloric acid arriving from the stomach and raises the pH to around 8, which is lipase's optimum. It also emulsifies fat, breaking large droplets into many small ones, which greatly increases the total surface area exposed to the enzyme. More surface area means more collisions between lipase and fat, so digestion is much faster — but the bile itself breaks nothing down. Mark this one yourself: both the pH point and the surface area point are needed for full marks.",
      },
    ],
    misconceptions: [
      {
        wrong: "Enzymes are killed by high temperatures.",
        right:
          "Enzymes are molecules, not organisms — they cannot die. They DENATURE: the active site changes shape so the substrate no longer fits.",
      },
      {
        wrong: "Bile digests fat.",
        right:
          "Bile emulsifies fat and neutralises acid. Lipase does the actual digesting; bile just makes its job far easier.",
      },
      {
        wrong: "One enzyme can break down several different substances.",
        right:
          "Enzymes are specific. The active site fits one substrate, which is the whole point of the lock and key model.",
      },
      {
        wrong: "Hotter always means faster for enzyme reactions.",
        right:
          "Only up to the optimum. Past it the rate collapses as enzymes denature, so the graph rises then falls steeply.",
      },
      {
        wrong: "A denatured enzyme recovers when it cools down.",
        right:
          "Denaturing is permanent. The shape does not come back, which is why cooked egg white never turns clear again.",
      },
    ],
  },

  "biology/plant-organisation": {
    summary:
      "A leaf is an organ, built from several tissues, each doing one job. This topic covers how those tissues fit together, how water gets from the soil to the top of a tree with no pump, and how the plant controls its own water loss. Transpiration and translocation sound similar and are constantly confused, so it is worth learning them as a contrasting pair.",
    keyFacts: [
      {
        heading: "Plant tissues and the leaf",
        points: [
          "EPIDERMAL tissue covers the plant; the upper epidermis is transparent to let light through, and has a waxy cuticle to reduce water loss.",
          "PALISADE MESOPHYLL is packed with chloroplasts and sits near the top of the leaf, where most photosynthesis happens.",
          "SPONGY MESOPHYLL has air spaces between the cells, giving a large surface area for gases to diffuse.",
          "XYLEM and PHLOEM run through the leaf in the veins, delivering water and carrying sugars away.",
          "MERISTEM tissue at the tips of roots and shoots contains cells that can still differentiate.",
        ],
      },
      {
        heading: "Stomata and guard cells",
        points: [
          "STOMATA are tiny pores, mostly on the UNDERSIDE of a leaf, where gases enter and leave.",
          "Each stoma is controlled by two GUARD CELLS that change shape to open or close it.",
          "When water is plentiful the guard cells become turgid and the stoma OPENS.",
          "When water is short they become flaccid and the stoma CLOSES, reducing water loss.",
          "Being on the underside reduces water loss, because that surface is cooler and out of direct sun.",
        ],
      },
      {
        heading: "Transpiration",
        points: [
          "TRANSPIRATION is the loss of water vapour from the leaves, mostly through the stomata.",
          "It pulls a continuous stream of water up through the xylem from the roots — the transpiration stream.",
          "Water enters the roots by OSMOSIS through root hair cells.",
          "Transpiration rate INCREASES with higher temperature, more light, more air movement and lower humidity.",
          "Rate can be measured with a POTOMETER, which actually measures water UPTAKE rather than loss.",
        ],
      },
      {
        heading: "Translocation",
        points: [
          "TRANSLOCATION is the movement of dissolved sugars through the PHLOEM.",
          "It moves sugars from the leaves, where they are made, to where they are needed or stored.",
          "It can move sugars UP or DOWN the plant, unlike transpiration which is one way.",
          "Phloem is made of LIVING cells, because translocation requires energy.",
          "Xylem is dead and hollow, carries water and minerals only, and moves in one direction: up.",
        ],
      },
    ],
    flashcards: [
      { term: "Epidermal tissue", definition: "The tissue covering the outside of a plant, often with a waxy cuticle to reduce water loss." },
      { term: "Palisade mesophyll", definition: "Leaf tissue packed with chloroplasts near the upper surface, where most photosynthesis happens." },
      { term: "Spongy mesophyll", definition: "Leaf tissue with air spaces between cells, giving a large surface area for gas diffusion." },
      { term: "Stoma", definition: "A tiny pore in a leaf, mostly on the underside, through which gases enter and leave. Plural: stomata." },
      { term: "Guard cell", definition: "One of a pair of cells that change shape to open or close a stoma." },
      { term: "Transpiration", definition: "The loss of water vapour from a plant's leaves, mainly through the stomata." },
      { term: "Transpiration stream", definition: "The continuous flow of water from the roots up through the xylem to the leaves." },
      { term: "Translocation", definition: "The movement of dissolved sugars through the phloem to where they are needed or stored." },
      { term: "Xylem", definition: "Dead, hollow tissue carrying water and minerals upwards only." },
      { term: "Phloem", definition: "Living tissue transporting dissolved sugars both up and down the plant." },
      { term: "Potometer", definition: "Apparatus used to measure the rate of water uptake by a plant shoot." },
      { term: "Cuticle", definition: "The waxy waterproof layer on a leaf's surface that reduces water loss." },
      { term: "Meristem", definition: "Plant tissue at root and shoot tips whose cells can still differentiate." },
      { term: "Turgid", definition: "Firm with water — turgid guard cells open a stoma." },
      { term: "Wilting", definition: "The drooping of a plant when it loses water faster than it takes it up." },
    ],
    examTips: [
      {
        tip: "Transpiration is WATER, translocation is SUGAR",
        detail:
          "The two words look alike and are constantly swapped. Water and xylem go together; sugar and phloem go together.",
      },
      {
        tip: "Explain adaptations through diffusion",
        detail:
          "Air spaces give a large surface area; a thin leaf gives a short diffusion distance. Every leaf adaptation traces back to gas exchange or light.",
      },
      {
        tip: "Stomata are mostly on the UNDERSIDE",
        detail:
          "It reduces water loss because the lower surface is cooler and shaded. The reason is usually where the mark is.",
      },
      {
        tip: "A potometer measures UPTAKE, not loss",
        detail:
          "It is a close approximation because most water taken up is transpired, but the precise answer is uptake, and examiners reward the distinction.",
      },
      {
        tip: "Link each environmental factor to a reason",
        detail:
          "Wind blows away water vapour, so the concentration gradient stays steep. 'Wind increases transpiration' alone is only half a mark.",
      },
      {
        tip: "Xylem is dead, phloem is alive",
        detail:
          "Dead hollow tubes make an efficient pipe for a passive flow; translocation needs energy, so those cells must be living.",
      },
    ],
    practice: [
      {
        question: "What is the loss of water vapour from a plant's leaves called?",
        accept: ["transpiration"],
        answer:
          "Transpiration. It happens mostly through the stomata, and it is what pulls water up the whole plant with no pump involved.",
      },
      {
        question: "What is the movement of dissolved sugars through the phloem called?",
        accept: ["translocation"],
        answer:
          "Translocation. Unlike transpiration it can move substances both up and down the plant, and it requires energy — which is why phloem cells are alive.",
      },
      {
        question: "What are the tiny pores in a leaf that let gases in and out called?",
        accept: ["stomata", "stoma", "the stomata"],
        answer:
          "Stomata (one is a stoma). They are mostly on the underside of the leaf, which reduces water loss because that surface is cooler and shaded.",
      },
      {
        question: "What are the two cells that open and close a stoma called?",
        accept: ["guard cells", "guard cell"],
        answer:
          "Guard cells. When turgid they curve apart and the stoma opens; when flaccid they close it, which conserves water when supplies are short.",
      },
      {
        question: "Which leaf tissue contains the most chloroplasts?",
        accept: ["palisade mesophyll", "palisade", "palisade layer", "palisade cells"],
        answer:
          "The palisade mesophyll. It sits near the top of the leaf so it receives the most light, which is exactly why the chloroplasts are concentrated there.",
      },
      {
        question: "Which leaf tissue has air spaces for gases to diffuse through?",
        accept: ["spongy mesophyll", "spongy", "spongy layer"],
        answer:
          "The spongy mesophyll. The air spaces give a very large internal surface area, so carbon dioxide can reach every photosynthesising cell.",
      },
      {
        question: "Which tissue carries water up from the roots?",
        accept: ["xylem", "the xylem"],
        answer:
          "Xylem — dead, hollow cells forming a continuous tube. Being dead is an advantage here: an empty pipe carries water better than a full cell would.",
      },
      {
        question: "What piece of apparatus is used to measure the rate of water uptake by a shoot?",
        accept: ["potometer", "a potometer"],
        answer:
          "A potometer. Strictly it measures uptake rather than transpiration, though the two are very close because most water taken up is lost as vapour.",
      },
      {
        question: "Does increasing air movement increase or decrease the rate of transpiration?",
        accept: ["increase", "increases", "increased", "speeds up", "faster", "higher", "raises"],
        answer:
          "It increases it. Moving air carries away the water vapour outside the stomata, keeping the concentration gradient steep so diffusion continues quickly.",
      },
      {
        question: "Does increasing humidity increase or decrease the rate of transpiration?",
        accept: ["decrease", "decreases", "decreased", "slows", "slower", "lower", "reduces"],
        answer:
          "It decreases it. Humid air already holds a lot of water vapour, so the concentration gradient between the leaf and the air is shallower.",
      },
      {
        question: "What is the waxy waterproof layer on a leaf's surface called?",
        accept: ["cuticle", "the cuticle", "waxy cuticle"],
        answer:
          "The cuticle. It is transparent so light still reaches the palisade layer, and waterproof so water is lost through the stomata rather than the whole surface.",
      },
      {
        question: "By which process does water enter a root hair cell?",
        accept: ["osmosis"],
        answer:
          "Osmosis. Soil water is more dilute than the cell contents, so water moves in through the partially permeable membrane. Minerals, by contrast, need active transport.",
      },
      {
        question: "Are phloem cells living or dead?",
        accept: ["living", "alive", "they are living"],
        answer:
          "Living. Translocation requires energy from respiration, so the cells must be alive — unlike xylem, which is dead and hollow.",
      },
      {
        question: "On which surface of a leaf are most stomata found?",
        accept: ["underside", "lower", "bottom", "the underside", "lower surface", "under"],
        answer:
          "The underside. It is cooler and shaded, so less water is lost by evaporation than if the pores were on the upper surface facing the sun.",
      },
      {
        question: "Explain how a leaf is adapted for photosynthesis. Write three or four sentences.",
        answer:
          "It is broad and flat, giving a large surface area to absorb light, and thin, so carbon dioxide has only a short distance to diffuse to the cells. The palisade mesophyll sits near the top and is packed with chloroplasts, so it catches the most light. The spongy mesophyll has air spaces giving a large internal surface for gas exchange, and the stomata let carbon dioxide in. Veins containing xylem deliver water to every part of the leaf. Mark this one yourself: give yourself credit for each adaptation ONLY where you also said what it achieves.",
      },
      {
        question: "Explain why a plant closes its stomata when water is short, and what it costs the plant.",
        answer:
          "When water is short the guard cells lose water and become flaccid, which closes the stoma. This greatly reduces transpiration, so the plant conserves the water it still has and avoids wilting. The cost is that carbon dioxide can no longer diffuse in, so photosynthesis slows or stops and the plant makes less glucose — it is trading growth for survival. Mark this one yourself: the second half, the cost to photosynthesis, is where the top marks are.",
      },
    ],
    misconceptions: [
      {
        wrong: "Transpiration and translocation are the same thing.",
        right:
          "Transpiration is water lost from leaves, moving up the xylem. Translocation is sugar moved through the phloem, in either direction.",
      },
      {
        wrong: "Plants take in oxygen only at night.",
        right:
          "Plants respire all the time, day and night. During the day photosynthesis usually produces more oxygen than respiration uses, which hides the fact.",
      },
      {
        wrong: "Stomata are there to let water out.",
        right:
          "They are there to let carbon dioxide IN for photosynthesis. Water loss is the unavoidable cost of having openings at all.",
      },
      {
        wrong: "Xylem carries water and food.",
        right:
          "Xylem carries water and dissolved minerals only, and only upwards. Sugars travel in the phloem.",
      },
      {
        wrong: "A potometer measures transpiration directly.",
        right:
          "It measures water UPTAKE. That is very close to transpiration, because most water taken up is transpired, but they are not identical.",
      },
    ],
  },

  "biology/the-microscope-and-practicals": {
    summary:
      "Biology is examined on how you work as much as on what you know, and roughly 15% of the marks across the papers come from practical skills. This topic covers microscopy and the magnification equation, how to run a fair test, and the vocabulary — accurate, precise, repeatable, reproducible, anomalous — that examiners expect you to use correctly rather than loosely.",
    keyFacts: [
      {
        heading: "Microscopes",
        points: [
          "A LIGHT microscope uses light and lenses. It is cheap, portable, and can show living specimens.",
          "An ELECTRON microscope uses a beam of electrons. It has far higher magnification AND far higher resolution.",
          "RESOLUTION is the ability to tell two close points apart — it is what limits how much useful detail you can see.",
          "Electron microscopes revealed sub-cellular structures such as ribosomes and the internal structure of mitochondria.",
          "They are expensive, very large, and cannot be used on living specimens.",
        ],
      },
      {
        heading: "The magnification equation",
        points: [
          "magnification = size of image ÷ size of real object.",
          "Rearranged: real size = image size ÷ magnification.",
          "Both measurements MUST be in the same units before dividing.",
          "1 mm = 1,000 micrometres (µm); 1 µm = 1,000 nanometres (nm).",
          "Total magnification of a light microscope = eyepiece lens × objective lens.",
          "Magnification has NO units — it is a ratio, written as ×400 rather than 400 mm.",
        ],
      },
      {
        heading: "Preparing a slide",
        points: [
          "Put a drop of water on a clean slide, then add the thin specimen using tweezers.",
          "Add a stain such as iodine or methylene blue to make structures visible.",
          "Lower the cover slip slowly at an angle, using a mounting needle, to avoid trapping air bubbles.",
          "Start with the LOWEST power objective, focus with the coarse knob, then switch to higher power and use the fine knob.",
          "Always focus by moving the lens AWAY from the slide, so the lens cannot be driven into it.",
        ],
      },
      {
        heading: "Working scientifically",
        points: [
          "The INDEPENDENT variable is the one you change; the DEPENDENT variable is the one you measure.",
          "CONTROL variables are everything kept the same, which is what makes it a fair test.",
          "ACCURATE means close to the true value; PRECISE means the repeats are close to each other.",
          "REPEATABLE means the same person gets the same result again; REPRODUCIBLE means someone else does, with different equipment.",
          "An ANOMALOUS result is one that does not fit the pattern. Identify it, exclude it from the mean, and say why you excluded it.",
        ],
      },
    ],
    flashcards: [
      { term: "Magnification", definition: "How many times larger an image is than the real object. It has no units." },
      { term: "Resolution", definition: "The ability to distinguish two very close points as separate — what limits useful detail." },
      { term: "Light microscope", definition: "A microscope using light and lenses; cheap and able to show living specimens, but limited in resolution." },
      { term: "Electron microscope", definition: "A microscope using a beam of electrons, giving far higher magnification and resolution." },
      { term: "Micrometre (µm)", definition: "One thousandth of a millimetre, and one millionth of a metre." },
      { term: "Nanometre (nm)", definition: "One thousandth of a micrometre — the scale of ribosomes and membranes." },
      { term: "Objective lens", definition: "The lens closest to the specimen, whose magnification is multiplied by the eyepiece's." },
      { term: "Cover slip", definition: "The thin square of glass lowered over a specimen, at an angle to avoid trapping air bubbles." },
      { term: "Stain", definition: "A dye such as iodine or methylene blue used to make cell structures visible." },
      { term: "Independent variable", definition: "The variable you deliberately change in an investigation." },
      { term: "Dependent variable", definition: "The variable you measure as a result of the change." },
      { term: "Control variable", definition: "A variable kept the same throughout so the test is fair." },
      { term: "Accurate", definition: "Close to the true value." },
      { term: "Precise", definition: "Repeat measurements that are close to one another, whether or not they are correct." },
      { term: "Repeatable", definition: "The same person gets the same results when they repeat the experiment." },
      { term: "Reproducible", definition: "Someone else gets the same results using different equipment or a different method." },
      { term: "Anomalous result", definition: "A result that does not fit the pattern and is excluded from the mean." },
    ],
    examTips: [
      {
        tip: "Magnification has NO units",
        detail:
          "Write ×400, not 400 mm. Adding a unit is one of the easiest marks to throw away on the whole paper.",
      },
      {
        tip: "Convert units BEFORE dividing",
        detail:
          "If the image is in millimetres and the object in micrometres, one of them must be converted first. 1 mm = 1,000 µm.",
      },
      {
        tip: "Resolution is not the same as magnification",
        detail:
          "Magnifying a blurred image gives a bigger blurred image. Resolution is why electron microscopes revealed ribosomes and light microscopes could not.",
      },
      {
        tip: "Accurate and precise are different words",
        detail:
          "Five results clustered tightly around the wrong value are precise but not accurate. Examiners test this distinction directly.",
      },
      {
        tip: "Say what you did with an anomaly",
        detail:
          "Identify it, exclude it from the mean, and say you excluded it. Silently leaving it in the mean loses marks.",
      },
      {
        tip: "Name the control variables specifically",
        detail:
          "'I kept everything else the same' scores nothing. 'Same temperature, same volume of solution, same size of potato piece' scores.",
      },
    ],
    workedExamples: [
      {
        question:
          "A cell appears 30 mm wide under a microscope. Its real width is 60 µm. Calculate the magnification.",
        steps: [
          "Both measurements must be in the same units. Convert the image size to micrometres.",
          "30 mm × 1,000 = 30,000 µm.",
          "magnification = image size ÷ real size = 30,000 ÷ 60.",
          "= 500. Magnification has no units, so the answer is ×500.",
        ],
        answer: "×500",
      },
      {
        question:
          "An image of a cell is 45 mm long at a magnification of ×1,500. Calculate the real length in micrometres.",
        steps: [
          "Rearrange: real size = image size ÷ magnification.",
          "Work in micrometres: 45 mm = 45,000 µm.",
          "real size = 45,000 ÷ 1,500.",
          "= 30 µm — a plausible size for an animal cell, which is a useful sanity check.",
        ],
        answer: "30 µm",
      },
    ],
    practice: [
      {
        question: "What is the equation for magnification? Give it as image ÷ ______.",
        accept: ["real size", "object size", "actual size", "real", "object", "actual"],
        answer:
          "magnification = size of image ÷ size of the real object. Rearranged, real size = image ÷ magnification — you need both forms.",
      },
      {
        question: "How many micrometres are there in 1 millimetre? Give the number only.",
        accept: ["1000", "1,000"],
        answer:
          "1,000. Converting before dividing is where most magnification marks are lost, so do the conversion as your first line of working.",
      },
      {
        question: "What are the units of magnification?",
        accept: ["none", "no units", "it has no units", "nothing", "unitless", "no unit"],
        answer:
          "It has none — it is a ratio of two lengths, so the units cancel. Write ×400, never 400 mm.",
      },
      {
        question: "What is the ability to distinguish two very close points as separate called?",
        accept: ["resolution", "resolving power"],
        answer:
          "Resolution. It matters more than magnification for seeing detail: magnifying a blurred image just gives a bigger blur.",
      },
      {
        question: "Which type of microscope revealed sub-cellular structures such as ribosomes?",
        accept: ["electron", "electron microscope", "the electron microscope"],
        answer:
          "The electron microscope. Its far higher resolution let biologists see structures that light microscopes could never separate.",
      },
      {
        question: "A cell image is 20 mm wide with a real width of 40 µm. Calculate the magnification. Give the number only.",
        accept: ["500"],
        answer:
          "×500. Convert first: 20 mm = 20,000 µm; 20,000 ÷ 40 = 500. Always convert before dividing.",
      },
      {
        question: "An image is 60 mm long at ×2,000 magnification. Calculate the real length in micrometres. Give the number only.",
        accept: ["30"],
        answer:
          "30 µm. 60 mm = 60,000 µm; 60,000 ÷ 2,000 = 30 µm. Sanity check: that is a believable size for a cell.",
      },
      {
        question: "An eyepiece is ×10 and the objective is ×40. What is the total magnification? Give the number only.",
        accept: ["400"],
        answer:
          "×400. Total magnification is eyepiece × objective, so 10 × 40 = 400.",
      },
      {
        question: "What is the variable you deliberately change called?",
        accept: ["independent", "independent variable", "the independent variable"],
        answer:
          "The independent variable. The one you measure is the dependent variable, and everything else must be a control variable.",
      },
      {
        question: "What is the variable you measure called?",
        accept: ["dependent", "dependent variable", "the dependent variable"],
        answer:
          "The dependent variable — so called because its value depends on what you did to the independent variable.",
      },
      {
        question: "Results clustered closely together but far from the true value are described as ______ but not accurate.",
        accept: ["precise"],
        answer:
          "Precise. Precision is about agreement between repeats; accuracy is about closeness to the truth. A badly calibrated balance gives precise, inaccurate results.",
      },
      {
        question: "What is the word for a result that does not fit the pattern?",
        accept: ["anomalous", "anomaly", "an anomaly", "anomalous result", "outlier"],
        answer:
          "Anomalous. Identify it, exclude it from the mean, and SAY that you excluded it — the statement is worth a mark in itself.",
      },
      {
        question: "Why is a cover slip lowered at an angle?",
        accept: ["avoid air bubbles", "air bubbles", "to stop bubbles", "prevent bubbles", "no bubbles", "stop air bubbles"],
        answer:
          "To avoid trapping air bubbles, which would obscure the specimen and can be mistaken for cells by a careless observer.",
      },
      {
        question: "Why is a stain such as iodine used when preparing a slide?",
        accept: ["to see structures", "make structures visible", "increase contrast", "contrast", "see the cells", "make cells visible", "visibility"],
        answer:
          "To increase contrast so that structures such as the nucleus become visible. Untreated cells are largely transparent and show almost no detail.",
      },
      {
        question: "Explain the difference between magnification and resolution. Write two or three sentences.",
        answer:
          "Magnification is how many times bigger the image is than the real object. Resolution is the ability to tell two very close points apart, so it determines how much genuine detail the image contains. Increasing magnification beyond the limit of resolution simply produces a larger blurred image, which is why the electron microscope — with far better resolution — revealed structures the light microscope never could. Mark this one yourself: full marks need the point that magnifying past the resolution limit adds no detail.",
      },
      {
        question: "Describe how you would make an investigation into osmosis in potato a fair test.",
        answer:
          "The independent variable is the concentration of sugar solution and the dependent variable is the change in mass. Everything else must be controlled: the same volume of solution, the same length of time, the same temperature, and potato pieces of the same size, mass and variety, cut with the same borer. Each piece should be blotted dry in the same way before weighing, since surface water would add mass. Repeat each concentration at least three times and calculate a mean, excluding any anomalies and saying that you have done so. Mark this one yourself: naming SPECIFIC control variables is the difference between a low and a high mark.",
      },
    ],
    misconceptions: [
      {
        wrong: "A higher magnification always shows more detail.",
        right:
          "Only if the resolution allows it. Beyond the resolution limit you get a bigger blur, not more information.",
      },
      {
        wrong: "Accurate and precise mean the same thing.",
        right:
          "Accurate means close to the true value; precise means the repeats agree with each other. Results can easily be one without the other.",
      },
      {
        wrong: "Magnification is measured in millimetres.",
        right:
          "It has no units at all — it is a ratio. Write ×400.",
      },
      {
        wrong: "Anomalous results should be deleted quietly.",
        right:
          "Identify them, exclude them from the mean, and state that you did. Hiding data is not how science works, and the statement carries a mark.",
      },
      {
        wrong: "Repeatable and reproducible are interchangeable.",
        right:
          "Repeatable is the same person repeating it; reproducible is someone else, with different equipment, getting the same answer.",
      },
    ],
  },
};
