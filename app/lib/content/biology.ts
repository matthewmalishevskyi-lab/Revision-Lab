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
      {
        question: "Which structure is found in a plant cell but NOT an animal cell?",
        choices: [
          "Cell wall",
          "Cell membrane",
          "Mitochondria",
          "Nucleus",
          "Ribosomes",
        ],
        accept: [
          "Cell wall",
        ],
        answer: "Plant cells have a cellulose cell wall, a permanent vacuole and usually chloroplasts. Membrane, mitochondria, nucleus and ribosomes are in both.",
      },
      {
        question: "Which of these is a PROKARYOTIC cell?",
        choices: [
          "A bacterial cell",
          "A human liver cell",
          "A plant root cell",
          "A yeast cell",
        ],
        accept: [
          "A bacterial cell",
        ],
        answer: "Prokaryotes have no nucleus and no membrane-bound organelles; their DNA is a single loop plus plasmids. Yeast is a fungus and so eukaryotic.",
      },
      {
        question: "Where does aerobic respiration mainly take place in a cell?",
        choices: [
          "The mitochondria",
          "The ribosomes",
          "The nucleus",
          "The cell membrane",
        ],
        accept: [
          "The mitochondria",
        ],
        answer: "Mitochondria release energy by aerobic respiration, so cells that need a lot of energy — muscle, sperm — contain large numbers of them.",
      },
      {
        question: "What is the function of the ribosomes?",
        choices: [
          "Protein synthesis",
          "Photosynthesis",
          "Controlling what enters the cell",
          "Storing genetic material",
        ],
        accept: [
          "Protein synthesis",
        ],
        answer: "Ribosomes build proteins from amino acids. The nucleus stores the genetic material that codes for those proteins.",
      },
      {
        question: "A root hair cell is adapted for absorbing water because it has:",
        choices: [
          "A long extension giving a large surface area",
          "Many chloroplasts",
          "A tail for movement",
          "A thick waxy cuticle",
        ],
        accept: [
          "A long extension giving a large surface area",
        ],
        answer: "Root hair cells have no chloroplasts — they are underground and get no light. The long projection increases surface area for absorption.",
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
      {
        question: "Which process moves substances from a HIGH to a LOW concentration without using energy?",
        choices: [
          "Diffusion",
          "Active transport",
          "Mitosis",
          "Translocation",
        ],
        accept: [
          "Diffusion",
        ],
        answer: "Diffusion is passive and moves down the concentration gradient. Active transport goes against the gradient and needs energy from respiration.",
      },
      {
        question: "Osmosis is the movement of:",
        choices: [
          "Water through a partially permeable membrane",
          "Any solute through a membrane",
          "Oxygen into the bloodstream only",
          "Glucose against a concentration gradient",
        ],
        accept: [
          "Water through a partially permeable membrane",
        ],
        answer: "Osmosis is specifically water, moving from a dilute solution to a more concentrated one through a partially permeable membrane.",
      },
      {
        question: "Which process requires energy from respiration?",
        choices: [
          "Active transport",
          "Diffusion",
          "Osmosis",
          "Evaporation",
        ],
        accept: [
          "Active transport",
        ],
        answer: "Active transport moves substances against the concentration gradient, which is why it needs energy and why cells doing it have many mitochondria.",
      },
      {
        question: "A plant cell placed in pure water will:",
        choices: [
          "Become turgid",
          "Become flaccid",
          "Burst immediately",
          "Lose all its water",
        ],
        accept: [
          "Become turgid",
        ],
        answer: "Water enters by osmosis and the cell becomes turgid. The cell wall stops it bursting, which is what happens to an animal cell in the same situation.",
      },
      {
        question: "Which change would INCREASE the rate of diffusion?",
        choices: [
          "A steeper concentration gradient",
          "A thicker exchange surface",
          "A smaller surface area",
          "A lower temperature",
        ],
        accept: [
          "A steeper concentration gradient",
        ],
        answer: "Rate rises with a steeper gradient, larger surface area, shorter diffusion distance and higher temperature.",
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
      {
        question: "What happens to an enzyme at a temperature well above its optimum?",
        choices: [
          "Its active site changes shape and it denatures",
          "It works faster indefinitely",
          "It turns into a different enzyme",
          "It is used up in the reaction",
        ],
        accept: [
          "Its active site changes shape and it denatures",
        ],
        answer: "Denaturing is a permanent change of shape, so the substrate no longer fits. Saying the enzyme is 'killed' loses the mark — enzymes are not alive.",
      },
      {
        question: "Which enzyme breaks down starch?",
        choices: [
          "Amylase",
          "Protease",
          "Lipase",
          "Catalase",
        ],
        accept: [
          "Amylase",
        ],
        answer: "Amylase breaks starch into maltose and then glucose. Protease works on proteins and lipase on lipids.",
      },
      {
        question: "What are proteins broken down into?",
        choices: [
          "Amino acids",
          "Glucose",
          "Fatty acids and glycerol",
          "Glycogen",
        ],
        accept: [
          "Amino acids",
        ],
        answer: "Proteases produce amino acids. Carbohydrates give simple sugars, and lipids give fatty acids and glycerol.",
      },
      {
        question: "What is the function of bile?",
        choices: [
          "To emulsify fats and neutralise stomach acid",
          "To digest protein",
          "To absorb glucose",
          "To produce insulin",
        ],
        accept: [
          "To emulsify fats and neutralise stomach acid",
        ],
        answer: "Bile is not an enzyme. It emulsifies fat into droplets, increasing surface area for lipase, and raises the pH for enzymes in the small intestine.",
      },
      {
        question: "Which food test uses Benedict's solution?",
        choices: [
          "Testing for sugars",
          "Testing for starch",
          "Testing for protein",
          "Testing for lipids",
        ],
        accept: [
          "Testing for sugars",
        ],
        answer: "Benedict's turns from blue to brick red with reducing sugars. Iodine tests starch, Biuret tests protein, and ethanol tests lipids.",
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

  // ─── YEAR 10 ──────────────────────────────────────────────────────────────

  "biology/communicable-disease": {
    summary:
      "Communicable diseases are the ones you can catch. This topic covers the four types of pathogen, how each spreads, how the body defends itself, and how vaccines and antibiotics work — including why antibiotics do nothing at all against a virus, which is the single most important public-health idea in GCSE Biology.",
    keyFacts: [
      {
        heading: "The four types of pathogen",
        points: [
          "BACTERIA are living cells that reproduce rapidly and make TOXINS which damage tissue.",
          "VIRUSES are not cells. They reproduce INSIDE body cells and burst them open, which is what causes the damage.",
          "PROTISTS are single-celled eukaryotes, often carried by a vector such as a mosquito.",
          "FUNGI can grow on or in tissue, producing spores that spread to other hosts.",
          "A PATHOGEN is any microorganism that causes disease; the diseases they cause are COMMUNICABLE, meaning they spread.",
        ],
      },
      {
        heading: "Named diseases you must know",
        points: [
          "SALMONELLA — bacterium, from undercooked or contaminated food. Fever, cramps, vomiting, diarrhoea. UK poultry are vaccinated against it.",
          "GONORRHOEA — bacterium, sexually transmitted. Thick yellow discharge and pain when urinating. Treated with antibiotics; condoms prevent it.",
          "MEASLES — virus, spread by droplets from coughs and sneezes. Fever and a red rash; can be fatal. Prevented by vaccination.",
          "HIV — virus, spread by sexual contact or shared needles. Attacks immune cells; without antiretroviral drugs it develops into AIDS.",
          "TOBACCO MOSAIC VIRUS — virus in plants, giving a mosaic pattern of discolouration that reduces photosynthesis.",
          "MALARIA — protist, spread by mosquitoes acting as VECTORS. Recurrent fever; prevented by nets and by killing mosquitoes.",
          "ROSE BLACK SPOT — fungus in plants, black spots on leaves which then drop, reducing photosynthesis.",
        ],
      },
      {
        heading: "How the body defends itself",
        points: [
          "NON-SPECIFIC defences come first: skin as a barrier, nose hairs and mucus, trachea and bronchi lined with cilia and mucus, and stomach acid.",
          "WHITE BLOOD CELLS provide the specific response, in three ways.",
          "PHAGOCYTOSIS — the white blood cell engulfs and digests the pathogen.",
          "ANTIBODY production — proteins that lock onto a specific antigen and clump pathogens together for destruction.",
          "ANTITOXIN production — proteins that neutralise the toxins bacteria release.",
        ],
      },
      {
        heading: "Vaccination and drugs",
        points: [
          "A vaccine contains a small quantity of dead or inactive pathogen.",
          "It stimulates white blood cells to produce antibodies, and leaves MEMORY CELLS behind.",
          "If the real pathogen arrives later, antibodies are produced far faster and in greater quantity, so you do not become ill.",
          "HERD IMMUNITY: if enough people are vaccinated, the pathogen cannot spread easily, protecting those who cannot be vaccinated.",
          "ANTIBIOTICS kill bacteria inside the body. They have NO effect on viruses, because viruses reproduce inside your own cells.",
          "PAINKILLERS treat the symptoms only — they do not kill the pathogen.",
        ],
      },
    ],
    flashcards: [
      { term: "Pathogen", definition: "A microorganism that causes an infectious disease." },
      { term: "Communicable disease", definition: "A disease that can be spread from one organism to another." },
      { term: "Bacterium", definition: "A single-celled pathogen that reproduces rapidly and damages tissue by producing toxins." },
      { term: "Virus", definition: "A pathogen that is not a cell and reproduces inside host cells, bursting them open." },
      { term: "Protist", definition: "A single-celled eukaryotic pathogen, often spread by a vector — malaria is the example." },
      { term: "Vector", definition: "An organism that carries a pathogen from one host to another, such as a mosquito." },
      { term: "Toxin", definition: "A poison produced by bacteria that damages body tissue and causes symptoms." },
      { term: "Antigen", definition: "A protein on the surface of a pathogen that the immune system recognises as foreign." },
      { term: "Antibody", definition: "A protein made by white blood cells that binds to a specific antigen." },
      { term: "Antitoxin", definition: "A protein made by white blood cells that neutralises the toxins bacteria produce." },
      { term: "Phagocytosis", definition: "When a white blood cell engulfs and digests a pathogen." },
      { term: "Vaccination", definition: "Introducing a small quantity of dead or inactive pathogen to stimulate an immune response." },
      { term: "Memory cell", definition: "A white blood cell left after infection or vaccination that allows a faster response next time." },
      { term: "Herd immunity", definition: "When enough of a population is immune that a pathogen cannot spread easily." },
      { term: "Antibiotic", definition: "A medicine that kills bacteria inside the body. It has no effect on viruses." },
      { term: "Painkiller", definition: "A drug that relieves symptoms without killing the pathogen." },
      { term: "Antibiotic resistance", definition: "When bacteria evolve so that an antibiotic no longer kills them." },
    ],
    examTips: [
      {
        tip: "Antibiotics do NOT work on viruses — know the reason",
        detail:
          "Viruses reproduce inside your own cells, so a drug that killed them would have to damage your cells too. This exact question appears constantly.",
      },
      {
        tip: "Learn each named disease as a set of four",
        detail:
          "Pathogen type, how it spreads, symptoms, how it is treated or prevented. Questions ask for any one of the four, and a gap in your table is a lost mark.",
      },
      {
        tip: "Say which defence is non-specific",
        detail:
          "Skin, mucus, cilia and stomach acid work against everything. Antibodies are specific to one antigen. Examiners test that you know which is which.",
      },
      {
        tip: "Explain vaccination through MEMORY CELLS",
        detail:
          "The vaccine works because memory cells remain, so the second response is faster and larger. Without that sentence the explanation is incomplete.",
      },
      {
        tip: "A mosquito is a vector, not the pathogen",
        detail:
          "Malaria is caused by a PROTIST. The mosquito only carries it. Writing 'malaria is caused by mosquitoes' loses the mark.",
      },
      {
        tip: "Painkillers treat symptoms, not causes",
        detail:
          "They make you feel better while your immune system does the actual work. Questions often offer this as a tempting wrong answer.",
      },
    ],
    practice: [
      {
        question: "What is the general name for a microorganism that causes disease?",
        accept: ["pathogen", "a pathogen", "pathogens"],
        answer:
          "A pathogen. It covers all four types — bacteria, viruses, protists and fungi — and the diseases they cause are called communicable.",
      },
      {
        question: "Which type of pathogen causes measles?",
        accept: ["virus", "a virus", "viral"],
        answer:
          "A virus, spread by droplets from coughs and sneezes. It can be fatal, which is why the vaccine is offered to all young children.",
      },
      {
        question: "Which type of pathogen causes malaria?",
        accept: ["protist", "a protist", "protists", "protoctist"],
        answer:
          "A protist. The mosquito is only the VECTOR that carries it — saying mosquitoes cause malaria is a classic lost mark.",
      },
      {
        question: "Which type of pathogen causes salmonella food poisoning?",
        accept: ["bacterium", "bacteria", "a bacterium", "bacterial"],
        answer:
          "A bacterium. It produces toxins that cause fever, cramps, vomiting and diarrhoea. UK poultry are vaccinated to reduce cases.",
      },
      {
        question: "Which type of pathogen causes rose black spot?",
        accept: ["fungus", "a fungus", "fungi", "fungal"],
        answer:
          "A fungus. The black spots destroy leaf tissue, so the plant photosynthesises less and grows poorly.",
      },
      {
        question: "What is the name for an organism that carries a pathogen between hosts?",
        accept: ["vector", "a vector", "vectors"],
        answer:
          "A vector. The mosquito is the standard example, which is why anti-malaria programmes target the insect rather than the protist.",
      },
      {
        question: "What is the process of a white blood cell engulfing a pathogen called?",
        accept: ["phagocytosis", "phagocytose"],
        answer:
          "Phagocytosis. It is one of three white blood cell defences, alongside producing antibodies and producing antitoxins.",
      },
      {
        question: "What is the protein on a pathogen's surface that the immune system recognises called?",
        accept: ["antigen", "an antigen", "antigens"],
        answer:
          "An antigen. Antibodies are specific because each one is shaped to bind to one particular antigen.",
      },
      {
        question: "What do white blood cells produce to neutralise bacterial toxins?",
        accept: ["antitoxins", "antitoxin", "an antitoxin"],
        answer:
          "Antitoxins. Note these neutralise the POISON, whereas antibodies bind to the pathogen itself — a distinction worth keeping straight.",
      },
      {
        question: "Do antibiotics kill viruses? Answer yes or no.",
        accept: ["no", "n"],
        answer:
          "No. Viruses reproduce inside your own body cells, so a drug that destroyed them would damage your cells too. This is why antibiotics are useless for a cold.",
      },
      {
        question: "What cells remain after vaccination, allowing a faster response later?",
        accept: ["memory cells", "memory cell", "white blood cells"],
        answer:
          "Memory cells. They are why the second response is faster and larger, so the pathogen is destroyed before you feel ill.",
      },
      {
        question: "What is it called when enough people are vaccinated that a disease cannot spread easily?",
        accept: ["herd immunity", "herd immunisation"],
        answer:
          "Herd immunity. It protects people who cannot be vaccinated themselves — babies, and those with weakened immune systems.",
      },
      {
        question: "Name one non-specific defence the human body has against pathogens.",
        accept: ["skin", "mucus", "cilia", "stomach acid", "nose hairs", "tears", "acid", "hairs"],
        answer:
          "Skin as a barrier, mucus and cilia in the airways, nose hairs, or stomach acid. Non-specific means they work against every pathogen, not one particular kind.",
      },
      {
        question: "True or false: painkillers kill the pathogen causing an illness.",
        accept: ["false", "f"],
        answer:
          "False. Painkillers relieve symptoms only. Your immune system still has to destroy the pathogen — the drug just makes waiting more bearable.",
      },
      {
        question: "Explain how vaccination protects someone from a disease. Write three or four sentences.",
        answer:
          "The vaccine contains a small quantity of dead or inactive pathogen, which carries the same antigens as the live one. White blood cells recognise those antigens as foreign and produce antibodies against them, and memory cells are left behind afterwards. If the real pathogen infects the person later, those memory cells recognise it immediately and produce antibodies far faster and in much greater quantity. The pathogen is destroyed before it can multiply enough to cause symptoms. Mark this one yourself: the memory cells and the faster, larger second response are where the marks are.",
      },
      {
        question: "Explain why antibiotics have no effect on viral infections such as a cold.",
        answer:
          "Antibiotics work by damaging structures that bacteria have and human cells do not, such as the bacterial cell wall. Viruses are not cells at all and reproduce INSIDE the body's own cells, so there is no separate structure to attack — any drug that destroyed the virus would have to damage the host cell surrounding it. Taking antibiotics for a cold therefore does nothing except expose bacteria in the body to the drug unnecessarily, which encourages resistance. Mark this one yourself: credit yourself for viruses being inside host cells, and extra credit for mentioning resistance.",
      },
      {
        question: "Which of these diseases is caused by a VIRUS?",
        choices: [
          "Measles",
          "Salmonella food poisoning",
          "Rose black spot",
          "Malaria",
        ],
        accept: [
          "Measles",
        ],
        answer: "Measles is viral. Salmonella is bacterial, rose black spot is fungal, and malaria is caused by a protist spread by mosquitoes.",
      },
      {
        question: "Why do antibiotics NOT work against viruses?",
        choices: [
          "Viruses reproduce inside the body's own cells",
          "Viruses are too small to be affected",
          "Viruses are not alive so cannot be harmed",
          "Antibiotics only work on the skin",
        ],
        accept: [
          "Viruses reproduce inside the body's own cells",
        ],
        answer: "Antibiotics target bacterial structures and processes. Damaging a virus inside a host cell would mean damaging the cell itself.",
      },
      {
        question: "Which of these is a NON-SPECIFIC human defence?",
        choices: [
          "The skin acting as a barrier",
          "Antibody production",
          "Memory lymphocytes",
          "Vaccination",
        ],
        accept: [
          "The skin acting as a barrier",
        ],
        answer: "Skin, mucus, cilia and stomach acid are non-specific. Antibodies and memory cells are the specific immune response.",
      },
      {
        question: "How does a vaccine produce immunity?",
        choices: [
          "It introduces a harmless form of the pathogen so memory cells are made",
          "It kills pathogens already inside the body",
          "It provides antibiotics in advance",
          "It changes the person's DNA",
        ],
        accept: [
          "It introduces a harmless form of the pathogen so memory cells are made",
        ],
        answer: "The white blood cells produce antibodies and memory cells remain, so a real infection is destroyed before symptoms develop.",
      },
      {
        question: "Which measure would best reduce the spread of a disease carried by contaminated water?",
        choices: [
          "Improving sanitation and treating water supplies",
          "Wearing gloves outdoors",
          "Vaccinating farm animals",
          "Reducing the use of antibiotics",
        ],
        accept: [
          "Improving sanitation and treating water supplies",
        ],
        answer: "Match the control to the transmission route — waterborne spread is stopped by sanitation, airborne by masks and distancing, and vector-borne by controlling the vector.",
      },
    ],
    misconceptions: [
      {
        wrong: "Antibiotics cure colds and flu.",
        right:
          "Both are viral. Antibiotics kill bacteria only, and taking them unnecessarily speeds up the evolution of antibiotic-resistant bacteria.",
      },
      {
        wrong: "Mosquitoes cause malaria.",
        right:
          "Malaria is caused by a protist. The mosquito is the vector that carries it from one person to another.",
      },
      {
        wrong: "A vaccine gives you a mild version of the disease.",
        right:
          "It contains dead or inactivated pathogen, which cannot cause the disease. It triggers the immune response without the infection.",
      },
      {
        wrong: "Viruses are alive and are cells.",
        right:
          "Viruses are not cells and cannot reproduce on their own. They must take over a host cell, which is exactly why they are so hard to treat.",
      },
      {
        wrong: "Antibodies kill pathogens directly.",
        right:
          "Antibodies bind to antigens and clump pathogens together, marking them so that white blood cells can destroy them.",
      },
    ],
  },

  "biology/non-communicable-disease": {
    summary:
      "Non-communicable diseases cannot be caught — they build up over years from genes, lifestyle and environment. This topic covers risk factors, what they cost individuals and the health service, and cancer. It is also the topic where you are expected to reason about CORRELATION and CAUSE, which is a skill examiners test far more than the facts themselves.",
    keyFacts: [
      {
        heading: "Risk factors",
        points: [
          "A RISK FACTOR is anything that increases the chance of developing a disease. It does not guarantee it.",
          "SMOKING is linked to lung disease, lung cancer and cardiovascular disease.",
          "OBESITY is a major risk factor for Type 2 diabetes.",
          "ALCOHOL damages the liver and affects brain function.",
          "Carcinogens, including ionising radiation, increase cancer risk.",
          "Smoking or drinking during pregnancy affects the development of the unborn baby.",
        ],
      },
      {
        heading: "Correlation and cause",
        points: [
          "A CORRELATION means two things change together. It does NOT by itself prove one causes the other.",
          "A causal mechanism has to be found — an explanation of HOW one produces the other.",
          "Smoking and lung cancer is a causal link because the chemicals in smoke are known carcinogens.",
          "Other factors may explain a correlation, or both may be caused by something else entirely.",
          "Sample size, the length of the study and how it was controlled all affect how much a study can prove.",
        ],
      },
      {
        heading: "The cost of disease",
        points: [
          "HUMAN cost: shorter lives, disability, pain, and the effect on families and carers.",
          "FINANCIAL cost: treatment, hospital beds, research, and the working days lost to illness.",
          "Non-communicable diseases are a very large share of NHS spending.",
          "Prevention is generally far cheaper than treatment, which is why public health campaigns exist.",
          "Poorer communities tend to suffer more from these diseases, which is itself a policy problem.",
        ],
      },
      {
        heading: "Cancer",
        points: [
          "Cancer results from changes in cells that lead to UNCONTROLLED growth and division.",
          "BENIGN tumours grow in one place inside a membrane and do not invade other tissues.",
          "MALIGNANT tumours invade neighbouring tissue and spread in the blood to form SECONDARY tumours.",
          "Malignant tumour cells are cancers; benign ones usually are not dangerous unless they press on something.",
          "Risk factors include smoking, obesity, UV exposure, ionising radiation, some viruses, and inherited genes.",
        ],
      },
    ],
    flashcards: [
      { term: "Non-communicable disease", definition: "A disease that cannot be transmitted from one person to another." },
      { term: "Risk factor", definition: "Anything that increases the chance of developing a disease, without guaranteeing it." },
      { term: "Correlation", definition: "A relationship where two variables change together, which does not by itself prove cause." },
      { term: "Causal mechanism", definition: "An explanation of how one factor actually produces an effect — what turns correlation into cause." },
      { term: "Carcinogen", definition: "A substance or form of radiation that increases the risk of cancer." },
      { term: "Tumour", definition: "A mass of cells produced by uncontrolled cell division." },
      { term: "Benign tumour", definition: "A tumour contained in one place within a membrane, which does not invade other tissues." },
      { term: "Malignant tumour", definition: "A tumour that invades neighbouring tissue and spreads in the blood — this is cancer." },
      { term: "Secondary tumour", definition: "A new tumour formed when malignant cells spread to another part of the body." },
      { term: "Type 2 diabetes", definition: "A condition where the body stops responding properly to insulin; obesity is a major risk factor." },
      { term: "Cardiovascular disease", definition: "Disease of the heart or blood vessels." },
      { term: "Ionising radiation", definition: "Radiation with enough energy to damage DNA, increasing cancer risk." },
      { term: "Liver disease", definition: "Damage to the liver, strongly associated with long-term alcohol consumption." },
      { term: "Lifestyle factor", definition: "An aspect of how a person lives — diet, exercise, smoking, alcohol — that affects disease risk." },
    ],
    examTips: [
      {
        tip: "Never write that a correlation proves a cause",
        detail:
          "It is the single most examined idea in this topic. Say 'this shows a correlation, but a causal mechanism would be needed to prove cause'.",
      },
      {
        tip: "Risk factor means increased CHANCE",
        detail:
          "Smoking does not guarantee lung cancer, and non-smokers can get it. Answers that speak in absolutes lose marks.",
      },
      {
        tip: "Benign versus malignant is about SPREADING",
        detail:
          "Benign stays put inside a membrane; malignant invades and travels in the blood to form secondary tumours. That is the whole distinction.",
      },
      {
        tip: "Give human AND financial costs",
        detail:
          "Questions on the impact of disease want both. The human cost includes families and carers, not just the patient.",
      },
      {
        tip: "Comment on the study, not just the data",
        detail:
          "Sample size, duration, and whether other variables were controlled. Evaluating the evidence is what the higher marks are for.",
      },
      {
        tip: "Use the data given",
        detail:
          "Quote figures from the table or graph in the question. An answer that could have been written without looking at the data rarely scores well.",
      },
    ],
    practice: [
      {
        question: "What is the term for anything that increases the chance of developing a disease?",
        accept: ["risk factor", "a risk factor", "risk factors"],
        answer:
          "A risk factor. Note it increases the CHANCE — it does not guarantee the disease, and people without the risk factor can still develop it.",
      },
      {
        question: "What word describes two variables changing together without proving one causes the other?",
        accept: ["correlation", "a correlation", "correlated"],
        answer:
          "Correlation. Turning it into a causal claim needs a mechanism — an explanation of HOW one produces the other.",
      },
      {
        question: "What type of tumour stays in one place and does not invade other tissues?",
        accept: ["benign", "benign tumour", "a benign tumour"],
        answer:
          "Benign. It is contained within a membrane, and is usually only dangerous if it presses on something important such as the brain.",
      },
      {
        question: "What type of tumour invades other tissues and spreads in the blood?",
        accept: ["malignant", "malignant tumour", "a malignant tumour", "cancerous"],
        answer:
          "Malignant — this is what is meant by cancer. Cells that break away and settle elsewhere form secondary tumours.",
      },
      {
        question: "What is a new tumour formed when cancer cells spread elsewhere called?",
        accept: ["secondary tumour", "secondary", "secondary tumours", "metastasis"],
        answer:
          "A secondary tumour. Spread is what makes malignant tumours so dangerous and so much harder to treat.",
      },
      {
        question: "What is the name for a substance that increases the risk of cancer?",
        accept: ["carcinogen", "a carcinogen", "carcinogens"],
        answer:
          "A carcinogen. Ionising radiation counts too — anything that damages DNA can increase the chance of uncontrolled cell division.",
      },
      {
        question: "Obesity is a major risk factor for which type of diabetes?",
        accept: ["type 2", "type two", "2", "type 2 diabetes"],
        answer:
          "Type 2 diabetes, where the body stops responding properly to insulin. Type 1 is not linked to lifestyle in the same way.",
      },
      {
        question: "Name one disease strongly linked to smoking.",
        accept: ["lung cancer", "lung disease", "cardiovascular disease", "heart disease", "emphysema", "copd", "cancer", "bronchitis"],
        answer:
          "Lung cancer, lung diseases such as emphysema, or cardiovascular disease. Smoking during pregnancy also affects the unborn baby.",
      },
      {
        question: "Which organ is most damaged by long-term heavy alcohol consumption?",
        accept: ["liver", "the liver"],
        answer:
          "The liver, because it processes alcohol. Long-term drinking also affects brain function and, during pregnancy, the developing baby.",
      },
      {
        question: "Can a non-communicable disease be passed from person to person? Answer yes or no.",
        accept: ["no", "n"],
        answer:
          "No — that is exactly what non-communicable means. They develop over time from genetic, lifestyle and environmental factors instead.",
      },
      {
        question: "Give one financial cost of non-communicable disease to a country.",
        accept: ["nhs costs", "treatment costs", "hospital", "research", "lost working days", "healthcare", "cost of treatment", "benefits", "lost productivity"],
        answer:
          "The cost of treatment and hospital care, research funding, and the working days lost to illness. Prevention is usually far cheaper than treatment.",
      },
      {
        question: "Give one human cost of non-communicable disease.",
        accept: ["shorter life", "disability", "pain", "family", "carers", "quality of life", "suffering", "early death", "stress"],
        answer:
          "A shorter life, disability, pain, and the effect on families and carers. Questions on impact want the human cost as well as the financial one.",
      },
      {
        question: "True or false: a strong correlation in a study proves one thing causes the other.",
        accept: ["false", "f"],
        answer:
          "False. A causal MECHANISM is needed — an explanation of how one produces the other. Both could also be caused by some third factor.",
      },
      {
        question: "Name one thing to consider when judging how reliable a study's conclusion is.",
        accept: ["sample size", "duration", "control variables", "who funded it", "repeats", "how long", "number of people", "bias", "controls"],
        answer:
          "Sample size, how long the study ran, whether other variables were controlled, and who funded it. Evaluating the study is where the higher marks are.",
      },
      {
        question: "Explain why smoking and lung cancer is accepted as a causal link, not just a correlation. Write two or three sentences.",
        answer:
          "The correlation is very strong and has been found repeatedly in large studies over decades, in many different countries. Crucially, a mechanism is known: tobacco smoke contains chemicals that are proven carcinogens, and they damage the DNA of lung cells, leading to uncontrolled division. Because there is an explanation of HOW smoking produces cancer, and not merely that the two occur together, the link is accepted as causal. Mark this one yourself: the mechanism is the mark — a strong correlation alone is not enough.",
      },
      {
        question: "A study finds people who drink more coffee have more heart problems. Evaluate what this shows.",
        answer:
          "It shows a correlation, not a cause. Heavy coffee drinkers may differ in other ways — they may be more likely to smoke, sleep less, or work in high-stress jobs — and any of those could be the real cause, so the two variables might both be caused by a third factor. Without a known biological mechanism explaining how coffee damages the heart, no causal claim can be made. To go further you would want a large sample, a long study, and careful control of other lifestyle variables. Mark this one yourself: the top marks are for naming a plausible third factor AND asking for a mechanism.",
      },
    ],
    misconceptions: [
      {
        wrong: "If two things are correlated, one causes the other.",
        right:
          "A correlation is only a pattern. Cause requires a mechanism explaining HOW, and a third factor may be producing both.",
      },
      {
        wrong: "A risk factor means you will definitely get the disease.",
        right:
          "It raises the probability. Plenty of smokers never develop lung cancer, and some non-smokers do.",
      },
      {
        wrong: "All tumours are cancer.",
        right:
          "Benign tumours stay in one place and are usually not dangerous. Only malignant tumours, which invade and spread, are cancer.",
      },
      {
        wrong: "Non-communicable diseases are entirely the individual's fault.",
        right:
          "Genetics, income, environment and access to healthy food all matter. That is why these diseases are far more common in poorer communities.",
      },
    ],
  },

  "biology/photosynthesis": {
    summary:
      "Photosynthesis is where almost all the energy in every food chain on Earth enters the living world. This topic covers the reaction itself, the four limiting factors that control its rate, and how greenhouse growers exploit them. It is also the first topic in the course with substantial Higher-tier-only content, which is flagged so Foundation students can skip it.",
    keyFacts: [
      {
        heading: "The reaction",
        points: [
          "Word equation: carbon dioxide + water → glucose + oxygen, using light energy.",
          "Symbol equation: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂.",
          "It is ENDOTHERMIC — energy is transferred FROM the environment, from light, into the plant.",
          "It happens in the chloroplasts, where chlorophyll absorbs the light.",
          "Photosynthesis is the reverse of respiration in terms of the substances involved.",
        ],
      },
      {
        heading: "What the glucose is used for",
        points: [
          "Respiration, to release energy for the plant's own processes.",
          "Converted into STARCH for storage, because starch is insoluble and so does not affect osmosis.",
          "Converted into CELLULOSE to build cell walls.",
          "Used with nitrate ions from the soil to make AMINO ACIDS, and then proteins.",
          "Converted into lipids (oils and fats) for storage in seeds.",
        ],
      },
      {
        heading: "Limiting factors",
        points: [
          "A LIMITING FACTOR is the one in shortest supply, which is holding the rate back at that moment.",
          "The four are: light intensity, carbon dioxide concentration, temperature, and the amount of chlorophyll.",
          "On a graph, the rate rises as a factor increases and then LEVELS OFF when something else becomes limiting.",
          "Temperature behaves differently: too high and enzymes denature, so the rate FALLS rather than levelling off.",
          "Chlorophyll can be reduced by disease, such as tobacco mosaic virus, or by lack of magnesium in the soil.",
        ],
      },
      {
        heading: "Using this in greenhouses",
        points: [
          "Growers add artificial light to extend the day and raise light intensity.",
          "Paraffin heaters raise the temperature AND release carbon dioxide — two limiting factors at once.",
          "The aim is to make no single factor limiting, so plants grow as fast as possible.",
          "Everything costs money, so growers balance the increased yield against fuel and equipment costs.",
          "There is no point raising one factor if another is still limiting — that is spending money for no gain.",
        ],
      },
      {
        heading: "Higher tier: the inverse square law",
        higherOnly: true,
        points: [
          "Light intensity is inversely proportional to the SQUARE of the distance from the source.",
          "That means light intensity ∝ 1 ÷ d², where d is the distance.",
          "Doubling the distance therefore gives a QUARTER of the intensity, not half.",
          "Tripling the distance gives a ninth of the intensity.",
          "In the required practical with pondweed, this is used to convert distance into a measure of light intensity.",
        ],
      },
      {
        heading: "Higher tier: interacting limiting factors",
        higherOnly: true,
        points: [
          "At any moment only ONE factor is limiting — the one in shortest supply relative to what the plant could use.",
          "Increasing a factor that is NOT limiting produces no increase in rate at all.",
          "On a graph with several curves, the point where each levels off shows where a different factor took over.",
          "A curve that levels off at a higher rate means the other factors were more plentiful in that experiment.",
          "Explaining which factor is limiting at a named point on a graph is a standard Higher question.",
        ],
      },
    ],
    flashcards: [
      { term: "Photosynthesis", definition: "The reaction in which plants use light energy to convert carbon dioxide and water into glucose and oxygen." },
      { term: "Endothermic", definition: "A reaction that transfers energy from the surroundings — photosynthesis takes in light energy." },
      { term: "Chlorophyll", definition: "The green pigment in chloroplasts that absorbs light energy for photosynthesis." },
      { term: "Chloroplast", definition: "The part of a plant cell where photosynthesis takes place." },
      { term: "Limiting factor", definition: "The factor in shortest supply, which is holding back the rate of a process." },
      { term: "Light intensity", definition: "How much light energy falls on a given area — one of the four limiting factors." },
      { term: "Starch", definition: "The insoluble storage form of glucose in plants, which does not affect osmosis." },
      { term: "Cellulose", definition: "The carbohydrate made from glucose that builds plant cell walls." },
      { term: "Nitrate ions", definition: "Minerals absorbed from the soil and combined with glucose to make amino acids." },
      { term: "Amino acid", definition: "The building block of proteins, made in plants from glucose and nitrate ions." },
      { term: "Inverse square law", definition: "Light intensity is proportional to 1 ÷ distance². Higher tier only." },
      { term: "Required practical", definition: "An investigation you must be able to describe and evaluate in the exam." },
      { term: "Pondweed", definition: "The plant used in the photosynthesis practical, where oxygen bubbles are counted." },
      { term: "Magnesium", definition: "A mineral needed to make chlorophyll; a shortage causes yellow leaves." },
      { term: "Rate of photosynthesis", definition: "How quickly the reaction proceeds, often measured by oxygen produced per minute." },
    ],
    examTips: [
      {
        tip: "Learn both equations, and check the balancing",
        detail:
          "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. The sixes are the marks — an unbalanced equation usually scores nothing.",
      },
      {
        tip: "Photosynthesis is ENDOTHERMIC",
        detail:
          "Energy goes IN, from light. Students who learned that respiration is exothermic often guess the wrong way round here.",
      },
      {
        tip: "Say WHICH factor is limiting and why",
        detail:
          "'The graph levels off' is a description. 'It levels off because carbon dioxide has become the limiting factor' is an explanation, and that is the mark.",
      },
      {
        tip: "Temperature falls off, the others level off",
        detail:
          "Too hot and enzymes denature, so the rate drops. Light and carbon dioxide simply plateau. Getting this shape wrong on a graph loses marks.",
      },
      {
        tip: "Starch is stored because it is INSOLUBLE",
        detail:
          "Soluble glucose would lower the water potential and draw water into the cell by osmosis. The reason is worth a mark on its own.",
      },
      {
        tip: "Higher tier: double the distance, quarter the light",
        detail:
          "Inverse SQUARE, not inverse. If you are on Foundation you are not asked this — skip it and spend the time on limiting factors instead.",
      },
    ],
    workedExamples: [
      {
        question:
          "Pondweed produces 45 bubbles of oxygen in 3 minutes. Calculate the rate in bubbles per minute.",
        steps: [
          "Rate = amount ÷ time.",
          "= 45 bubbles ÷ 3 minutes.",
          "= 15 bubbles per minute.",
          "Always give the unit: a bare '15' is an incomplete answer.",
        ],
        answer: "15 bubbles per minute",
      },
      {
        question:
          "A lamp is moved from 10 cm to 20 cm from some pondweed. Using the inverse square law, what happens to the light intensity?",
        steps: [
          "Light intensity is proportional to 1 ÷ d².",
          "At 10 cm: 1 ÷ 10² = 1 ÷ 100.",
          "At 20 cm: 1 ÷ 20² = 1 ÷ 400.",
          "1/400 ÷ 1/100 = 100/400 = 0.25, so the intensity falls to a QUARTER — not a half.",
        ],
        answer: "It falls to one quarter of its previous value",
        higherOnly: true,
      },
    ],
    practice: [
      {
        question: "Complete the word equation: carbon dioxide + water → glucose + ______.",
        accept: ["oxygen", "o2"],
        answer:
          "Oxygen. The full equation is carbon dioxide + water → glucose + oxygen, using light energy absorbed by chlorophyll.",
      },
      {
        question: "How many molecules of carbon dioxide are in the balanced symbol equation for photosynthesis? Give the number only.",
        accept: ["6", "six"],
        answer:
          "6. The equation is 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. Getting the sixes right is where the marks are.",
      },
      {
        question: "Is photosynthesis endothermic or exothermic?",
        accept: ["endothermic"],
        answer:
          "Endothermic — energy is transferred IN from the surroundings, as light. Respiration is the exothermic one, releasing energy.",
      },
      {
        question: "In which part of a plant cell does photosynthesis take place?",
        accept: ["chloroplast", "chloroplasts", "the chloroplasts"],
        answer:
          "The chloroplasts, which contain the green pigment chlorophyll that absorbs the light energy.",
      },
      {
        question: "Which insoluble carbohydrate do plants store glucose as?",
        accept: ["starch"],
        answer:
          "Starch. Being insoluble matters: soluble glucose would draw water into the cell by osmosis and disrupt the water balance.",
      },
      {
        question: "Glucose is combined with which ions from the soil to make amino acids?",
        accept: ["nitrate", "nitrate ions", "nitrates"],
        answer:
          "Nitrate ions. This is why nitrate is a key ingredient of fertiliser — without it a plant cannot make proteins and grows poorly.",
      },
      {
        question: "What is the name for the factor in shortest supply that holds back the rate of photosynthesis?",
        accept: ["limiting factor", "a limiting factor", "the limiting factor"],
        answer:
          "The limiting factor. At any moment only one is limiting, so increasing any of the others produces no change in rate at all.",
      },
      {
        question: "Name one limiting factor of photosynthesis other than light intensity.",
        accept: ["carbon dioxide", "co2", "temperature", "chlorophyll", "amount of chlorophyll", "carbon dioxide concentration"],
        answer:
          "Carbon dioxide concentration, temperature, or the amount of chlorophyll. All four are examinable and worth learning as a set.",
      },
      {
        question: "Pondweed makes 60 bubbles in 4 minutes. Calculate the rate in bubbles per minute. Give the number only.",
        accept: ["15"],
        answer:
          "15 bubbles per minute. Rate = 60 ÷ 4. In a written answer include the unit — 'bubbles per minute' — because it carries a mark.",
      },
      {
        question: "Pondweed makes 84 bubbles in 6 minutes. Calculate the rate in bubbles per minute. Give the number only.",
        accept: ["14"],
        answer:
          "14 bubbles per minute. 84 ÷ 6 = 14. Rate questions in Biology are nearly always amount ÷ time, so look for those two numbers first.",
      },
      {
        question: "Which mineral is needed to make chlorophyll, so that a shortage turns leaves yellow?",
        accept: ["magnesium", "magnesium ions"],
        answer:
          "Magnesium. Without it a plant cannot make chlorophyll, so it absorbs less light and photosynthesises more slowly.",
      },
      {
        question: "Why does a paraffin heater help a greenhouse grower in two ways?",
        accept: ["heat and carbon dioxide", "temperature and co2", "warmth and carbon dioxide", "heat and co2", "carbon dioxide and heat", "co2 and temperature"],
        answer:
          "It raises the temperature AND releases carbon dioxide, so it removes two limiting factors at once. That is why it is the standard exam example.",
      },
      {
        question: "Higher tier: if a lamp is moved from 5 cm to 10 cm away, light intensity falls to what fraction of its original value?",
        accept: ["a quarter", "quarter", "1/4", "0.25", "one quarter"],
        answer:
          "A quarter. Intensity is proportional to 1 ÷ d², so doubling the distance divides the intensity by 2² = 4. Foundation students are not asked this.",
        higherOnly: true,
      },
      {
        question: "True or false: increasing light intensity always increases the rate of photosynthesis.",
        accept: ["false", "f"],
        answer:
          "False. Once something else — usually carbon dioxide or temperature — becomes the limiting factor, more light makes no difference and the graph levels off.",
      },
      {
        question: "Explain why a graph of photosynthesis against light intensity levels off. Write two or three sentences.",
        answer:
          "At low light intensity, light is the limiting factor, so giving the plant more light increases the rate in proportion. Eventually the plant has more light than it can use, and something else — usually carbon dioxide concentration or temperature — becomes the factor in shortest supply. From that point more light produces no further increase, so the line flattens. Mark this one yourself: naming which factor takes over is the difference between describing and explaining.",
      },
      {
        question: "Explain why the rate of photosynthesis falls if the temperature gets too high, rather than levelling off.",
        answer:
          "Photosynthesis is controlled by enzymes. As temperature rises the rate increases, because particles collide more often and with more energy. Above the optimum, however, the enzymes begin to denature — the active site changes shape so the substrate no longer fits — and this is permanent. So instead of plateauing like the other limiting factors, the rate drops sharply as more enzyme molecules are destroyed. Mark this one yourself: the mark is for denaturing and the active site, not just 'it gets too hot'.",
      },
      {
        question: "Which of these are the RAW MATERIALS for photosynthesis?",
        choices: [
          "Carbon dioxide and water",
          "Glucose and oxygen",
          "Oxygen and water",
          "Glucose and carbon dioxide",
        ],
        accept: [
          "Carbon dioxide and water",
        ],
        answer: "Carbon dioxide and water go in; glucose and oxygen come out. Reversing these is one of the most common errors in the whole subject.",
      },
      {
        question: "Photosynthesis is described as an ENDOTHERMIC reaction because:",
        choices: [
          "It takes in energy from light",
          "It releases heat to the surroundings",
          "It happens only at night",
          "It does not involve energy at all",
        ],
        accept: [
          "It takes in energy from light",
        ],
        answer: "Energy is absorbed from light and stored in glucose. Respiration is the exothermic opposite, releasing that stored energy.",
      },
      {
        question: "Which of these is a limiting factor for photosynthesis?",
        choices: [
          "Light intensity",
          "Oxygen concentration",
          "Nitrogen concentration",
          "Soil colour",
        ],
        accept: [
          "Light intensity",
        ],
        answer: "The three main limiting factors are light intensity, carbon dioxide concentration and temperature. Chlorophyll amount also matters.",
      },
      {
        question: "Where in a plant cell does photosynthesis take place?",
        choices: [
          "Chloroplasts",
          "Mitochondria",
          "The nucleus",
          "The vacuole",
        ],
        accept: [
          "Chloroplasts",
        ],
        answer: "Chloroplasts contain chlorophyll, which absorbs light. Root cells have none, which is why roots cannot photosynthesise.",
      },
      {
        question: "Doubling the distance of a lamp from a plant changes the light intensity by a factor of:",
        choices: [
          "One quarter",
          "One half",
          "Two",
          "Four",
        ],
        accept: [
          "One quarter",
        ],
        answer: "Light intensity follows an inverse square law: intensity is proportional to 1 divided by distance squared, so double the distance means a quarter the intensity.",
      },
    ],
    misconceptions: [
      {
        wrong: "Plants respire at night and photosynthesise during the day.",
        right:
          "Plants respire ALL the time, day and night. During the day photosynthesis usually outpaces it, which hides the respiration.",
      },
      {
        wrong: "Photosynthesis is exothermic because plants make energy.",
        right:
          "It is endothermic: light energy is taken IN. Nothing makes energy — photosynthesis transfers it into chemical stores in glucose.",
      },
      {
        wrong: "Doubling the distance of a lamp halves the light intensity.",
        right:
          "It quarters it. Intensity follows an inverse SQUARE law, so the effect of moving a lamp is much larger than students expect.",
      },
      {
        wrong: "Increasing any factor will speed up photosynthesis.",
        right:
          "Only the one that is currently limiting. Raising the others changes nothing, which is why greenhouse growers must work out which is short.",
      },
      {
        wrong: "Plants store glucose as glucose.",
        right:
          "They convert it to starch, which is insoluble. Storing soluble glucose would draw water in by osmosis and damage the cell.",
      },
    ],
  },

  "biology/respiration": {
    summary:
      "Respiration is the reaction that releases the energy in glucose, and it happens in every living cell of every organism, every second of its life. This topic covers aerobic and anaerobic respiration, what happens to your body during hard exercise, and why the two forms produce such different amounts of energy.",
    keyFacts: [
      {
        heading: "Aerobic respiration",
        points: [
          "Word equation: glucose + oxygen → carbon dioxide + water.",
          "Symbol equation: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O.",
          "It is EXOTHERMIC — energy is transferred TO the surroundings from the chemical store in glucose.",
          "It happens continuously in the MITOCHONDRIA of every living cell.",
          "It releases far more energy per glucose molecule than anaerobic respiration does.",
        ],
      },
      {
        heading: "What the energy is used for",
        points: [
          "Building larger molecules from smaller ones, such as proteins from amino acids.",
          "Muscle contraction, which is why exercise raises the rate of respiration.",
          "Keeping a steady body temperature in mammals and birds.",
          "In plants, building sugars into starch and cellulose, and making amino acids from nitrates.",
          "METABOLISM is the sum of all the reactions in a cell or organism.",
        ],
      },
      {
        heading: "Anaerobic respiration",
        points: [
          "In MUSCLE: glucose → lactic acid. No oxygen is needed.",
          "In PLANTS AND YEAST: glucose → ethanol + carbon dioxide. This is called FERMENTATION.",
          "Fermentation is used to make bread rise and to brew alcohol.",
          "Anaerobic respiration releases much LESS energy per glucose, because the glucose is only partly broken down.",
          "It is useful when oxygen cannot be supplied fast enough — during a sprint, for example.",
        ],
      },
      {
        heading: "Exercise and oxygen debt",
        points: [
          "During exercise the heart rate, breathing rate and breath depth all increase, to supply more oxygen and glucose and remove carbon dioxide.",
          "If exercise is hard enough, muscles respire anaerobically and lactic acid builds up, causing muscle fatigue.",
          "OXYGEN DEBT is the extra oxygen the body needs afterwards to break down the accumulated lactic acid.",
          "That is why you keep breathing heavily after stopping.",
          "Blood carries lactic acid to the LIVER, where it is converted back into glucose.",
        ],
      },
    ],
    flashcards: [
      { term: "Respiration", definition: "The exothermic reaction that releases energy from glucose, occurring continuously in all living cells." },
      { term: "Aerobic respiration", definition: "Respiration using oxygen: glucose + oxygen → carbon dioxide + water." },
      { term: "Anaerobic respiration", definition: "Respiration without oxygen, releasing much less energy per glucose molecule." },
      { term: "Exothermic", definition: "A reaction that transfers energy to the surroundings — respiration is exothermic." },
      { term: "Mitochondria", definition: "The parts of a cell where aerobic respiration takes place." },
      { term: "Lactic acid", definition: "The product of anaerobic respiration in muscle cells, which causes fatigue as it builds up." },
      { term: "Fermentation", definition: "Anaerobic respiration in yeast and plants, producing ethanol and carbon dioxide." },
      { term: "Ethanol", definition: "The alcohol produced by fermentation in yeast." },
      { term: "Oxygen debt", definition: "The extra oxygen needed after exercise to break down the lactic acid that built up." },
      { term: "Muscle fatigue", definition: "When muscles become tired and stop contracting efficiently, caused by lactic acid build-up." },
      { term: "Metabolism", definition: "The sum of all the chemical reactions taking place in a cell or organism." },
      { term: "Glycogen", definition: "The storage carbohydrate in animals, converted back to glucose when needed." },
      { term: "Breathing rate", definition: "The number of breaths taken per minute, which rises during exercise." },
      { term: "Heart rate", definition: "The number of heartbeats per minute, which rises during exercise to deliver more oxygen." },
    ],
    examTips: [
      {
        tip: "Respiration is not breathing",
        detail:
          "Breathing moves air in and out of the lungs. Respiration is a chemical reaction in every cell. Using them interchangeably loses marks constantly.",
      },
      {
        tip: "Respiration RELEASES energy — it does not make it",
        detail:
          "Energy cannot be created. Say 'releases energy from glucose'. Examiners mark 'makes energy' as wrong every time.",
      },
      {
        tip: "Learn both anaerobic equations, and which organism does which",
        detail:
          "Muscle gives lactic acid; yeast and plants give ethanol and carbon dioxide. Swapping them is the commonest error here.",
      },
      {
        tip: "Explain oxygen debt through the LIVER",
        detail:
          "Lactic acid is carried in the blood to the liver, where it is converted back to glucose. That detail lifts an answer into the top band.",
      },
      {
        tip: "Anaerobic gives LESS energy — say why",
        detail:
          "Because the glucose is only partly broken down. The reason is a mark on its own, not just the fact.",
      },
      {
        tip: "Link every exercise response to a purpose",
        detail:
          "Heart rate rises to deliver more oxygen and glucose to muscles and remove carbon dioxide faster. The purpose is the mark.",
      },
    ],
    practice: [
      {
        question: "Complete: glucose + oxygen → carbon dioxide + ______.",
        accept: ["water", "h2o"],
        answer:
          "Water. The full aerobic equation is glucose + oxygen → carbon dioxide + water, and it is the exact reverse of photosynthesis in its substances.",
      },
      {
        question: "Is respiration endothermic or exothermic?",
        accept: ["exothermic"],
        answer:
          "Exothermic — it transfers energy TO the surroundings from the chemical store in glucose. Photosynthesis is the endothermic one.",
      },
      {
        question: "In which part of the cell does aerobic respiration take place?",
        accept: ["mitochondria", "mitochondrion", "the mitochondria"],
        answer:
          "The mitochondria. Cells needing a lot of energy — muscle, sperm — contain far more of them, a link examiners like to test.",
      },
      {
        question: "What is the product of anaerobic respiration in muscle cells?",
        accept: ["lactic acid", "lactate"],
        answer:
          "Lactic acid. It builds up during hard exercise and causes muscle fatigue, and it must be broken down afterwards using oxygen.",
      },
      {
        question: "What are the two products of anaerobic respiration in yeast?",
        accept: ["ethanol and carbon dioxide", "carbon dioxide and ethanol", "ethanol and co2", "alcohol and carbon dioxide"],
        answer:
          "Ethanol and carbon dioxide. Both are needed for the mark. This process is called fermentation and is used in brewing and baking.",
      },
      {
        question: "What is anaerobic respiration in yeast called?",
        accept: ["fermentation"],
        answer:
          "Fermentation. The carbon dioxide makes bread rise; the ethanol is what makes beer and wine alcoholic.",
      },
      {
        question: "Which releases more energy per glucose molecule: aerobic or anaerobic respiration?",
        accept: ["aerobic", "aerobic respiration"],
        answer:
          "Aerobic. Anaerobic respiration breaks glucose down only partly, so much of the energy is left locked in the lactic acid or ethanol.",
      },
      {
        question: "What is the extra oxygen needed after exercise called?",
        accept: ["oxygen debt", "the oxygen debt", "epoc"],
        answer:
          "Oxygen debt. It is why you keep breathing hard after you stop — the body is still working to break down accumulated lactic acid.",
      },
      {
        question: "Which organ converts lactic acid back into glucose?",
        accept: ["liver", "the liver"],
        answer:
          "The liver. Blood carries the lactic acid there from the muscles, which is a detail that lifts an oxygen debt answer into the top band.",
      },
      {
        question: "What is the sum of all the chemical reactions in a cell or organism called?",
        accept: ["metabolism"],
        answer:
          "Metabolism. It covers both building larger molecules and breaking them down, and all of it is powered by respiration.",
      },
      {
        question: "What causes muscle fatigue during hard exercise?",
        accept: ["lactic acid", "lactic acid build up", "build up of lactic acid", "lactate"],
        answer:
          "The build-up of lactic acid from anaerobic respiration. The muscles stop contracting efficiently until the acid is removed.",
      },
      {
        question: "Name one thing that increases during exercise to supply muscles with more oxygen.",
        accept: ["heart rate", "breathing rate", "breath depth", "pulse", "breathing", "blood flow", "breathing volume"],
        answer:
          "Heart rate, breathing rate and the depth of each breath all rise. Always say WHY: to deliver more oxygen and glucose and remove carbon dioxide faster.",
      },
      {
        question: "Do plants respire? Answer yes or no.",
        accept: ["yes", "y"],
        answer:
          "Yes — continuously, day and night. Every living cell respires. During daylight photosynthesis usually produces more oxygen than respiration uses, which disguises it.",
      },
      {
        question: "True or false: respiration and breathing are the same process.",
        accept: ["false", "f"],
        answer:
          "False. Breathing moves air into and out of the lungs; respiration is a chemical reaction happening inside every cell. Confusing them is a very common error.",
      },
      {
        question: "Explain why your breathing rate stays high for a while after you stop exercising. Write two or three sentences.",
        answer:
          "During hard exercise the muscles respire anaerobically because oxygen cannot be delivered fast enough, and lactic acid builds up. Once you stop, that lactic acid still has to be broken down, and doing so requires oxygen — this is the oxygen debt. Breathing therefore stays fast and deep until enough extra oxygen has been taken in, and the blood carries the lactic acid to the liver where it is converted back into glucose. Mark this one yourself: the oxygen debt and the liver are both worth credit.",
      },
      {
        question: "Compare aerobic and anaerobic respiration.",
        answer:
          "Aerobic respiration uses oxygen and breaks glucose down completely into carbon dioxide and water, releasing a large amount of energy. Anaerobic respiration happens without oxygen and breaks glucose down only partly, so it releases far less energy per molecule — in muscle it produces lactic acid, and in yeast and plants ethanol and carbon dioxide. Aerobic respiration happens in the mitochondria and runs continuously; anaerobic is a short-term measure used when oxygen cannot be supplied quickly enough, such as during a sprint. Mark this one yourself: full marks need the products, the energy difference AND the reason for that difference.",
      },
      {
        question: "What is the word equation for AEROBIC respiration?",
        choices: [
          "Glucose + oxygen -> carbon dioxide + water",
          "Carbon dioxide + water -> glucose + oxygen",
          "Glucose -> lactic acid",
          "Glucose -> ethanol + carbon dioxide",
        ],
        accept: [
          "Glucose + oxygen -> carbon dioxide + water",
        ],
        answer: "Aerobic respiration uses oxygen and releases far more energy per glucose molecule than anaerobic respiration.",
      },
      {
        question: "What does anaerobic respiration produce in HUMAN muscle cells?",
        choices: [
          "Lactic acid",
          "Ethanol and carbon dioxide",
          "Water and oxygen",
          "Glucose",
        ],
        accept: [
          "Lactic acid",
        ],
        answer: "Human muscle produces lactic acid. Yeast and plants produce ethanol and carbon dioxide, which is fermentation.",
      },
      {
        question: "Which statement about respiration is correct?",
        choices: [
          "It happens in every living cell, all the time",
          "It only happens in animals",
          "It only happens during exercise",
          "It only happens at night in plants",
        ],
        accept: [
          "It happens in every living cell, all the time",
        ],
        answer: "Plants respire constantly too. In daylight photosynthesis simply outpaces it, which is why they appear to release oxygen.",
      },
      {
        question: "What is meant by oxygen debt?",
        choices: [
          "The extra oxygen needed after exercise to break down lactic acid",
          "Oxygen lost through the skin",
          "Oxygen used up during photosynthesis",
          "The oxygen a person breathes in at rest",
        ],
        accept: [
          "The extra oxygen needed after exercise to break down lactic acid",
        ],
        answer: "It explains why you keep breathing hard after stopping — the lactic acid built up during anaerobic respiration still has to be oxidised.",
      },
      {
        question: "Compared with aerobic respiration, anaerobic respiration releases:",
        choices: [
          "Much less energy per glucose molecule",
          "Slightly more energy",
          "Exactly the same energy",
          "No energy at all",
        ],
        accept: [
          "Much less energy per glucose molecule",
        ],
        answer: "Anaerobic respiration is faster to start but incomplete, so it releases far less energy and cannot be sustained.",
      },
    ],
    misconceptions: [
      {
        wrong: "Respiration is breathing.",
        right:
          "Breathing is moving air in and out of the lungs. Respiration is a chemical reaction in every cell that releases energy from glucose.",
      },
      {
        wrong: "Respiration makes energy.",
        right:
          "Energy cannot be made. Respiration RELEASES energy already stored chemically in glucose. Examiners mark 'makes energy' wrong.",
      },
      {
        wrong: "Only animals respire; plants photosynthesise instead.",
        right:
          "Plants respire constantly, day and night. Photosynthesis is an additional process, not a replacement for respiration.",
      },
      {
        wrong: "Anaerobic respiration produces lactic acid in all organisms.",
        right:
          "In muscle, yes. In yeast and plants it produces ethanol and carbon dioxide — fermentation. Which organism matters.",
      },
      {
        wrong: "Lactic acid causes muscle soreness days later.",
        right:
          "Lactic acid is cleared within about an hour. Soreness a day or two afterwards comes from microscopic muscle damage, not from lactic acid.",
      },
    ],
  },

  "biology/the-nervous-system": {
    summary:
      "The nervous system is how you detect a change and react to it in a fraction of a second. This topic covers the route a signal takes from receptor to effector, the reflex arc that bypasses conscious thought, and how the synapse works. Getting the ORDER of the pathway right is most of the marks in this topic.",
    keyFacts: [
      {
        heading: "The pathway",
        points: [
          "stimulus → receptor → sensory neurone → CNS → motor neurone → effector → response.",
          "A STIMULUS is a change in the environment; a RECEPTOR detects it.",
          "The CENTRAL NERVOUS SYSTEM (CNS) is the brain and spinal cord, where information is processed.",
          "An EFFECTOR is a muscle that contracts or a gland that secretes a hormone.",
          "Receptors are often in sense organs: light in the eyes, sound in the ears, chemicals in the nose and tongue.",
        ],
      },
      {
        heading: "The reflex arc",
        points: [
          "A reflex is automatic and rapid, and does NOT involve the conscious part of the brain.",
          "This is what makes it fast, and why reflexes protect the body from harm.",
          "The arc adds a RELAY NEURONE inside the CNS, between the sensory and motor neurones.",
          "Full route: stimulus → receptor → sensory neurone → relay neurone → motor neurone → effector → response.",
          "Examples: pulling your hand from something hot, blinking, the pupil narrowing in bright light.",
        ],
      },
      {
        heading: "Neurones and synapses",
        points: [
          "A neurone carries an electrical impulse along its AXON.",
          "A SYNAPSE is the tiny gap between two neurones.",
          "The electrical impulse cannot cross the gap, so a CHEMICAL called a neurotransmitter is released instead.",
          "The chemical diffuses across the gap and triggers a new electrical impulse in the next neurone.",
          "Because diffusion takes time, synapses SLOW the signal slightly — which is why more synapses means a slower response.",
        ],
      },
      {
        heading: "Reaction time practicals",
        points: [
          "The ruler drop test: catch a falling ruler and convert the distance into a time.",
          "Control variables: the same hand, the same starting position, no warning, the same person dropping it.",
          "Repeat and take a mean, discarding anomalies and saying that you did.",
          "Caffeine is the usual independent variable, and it typically shortens reaction time.",
          "Reaction time also varies with age, tiredness and practice, which must be controlled or acknowledged.",
        ],
      },
    ],
    flashcards: [
      { term: "Stimulus", definition: "A change in the environment that an organism detects and responds to." },
      { term: "Receptor", definition: "A cell that detects a stimulus, often found in a sense organ." },
      { term: "Central nervous system", definition: "The brain and spinal cord, where information is processed and decisions made." },
      { term: "Sensory neurone", definition: "A neurone carrying impulses from a receptor to the central nervous system." },
      { term: "Relay neurone", definition: "A neurone inside the CNS that connects a sensory neurone to a motor neurone." },
      { term: "Motor neurone", definition: "A neurone carrying impulses from the CNS to an effector." },
      { term: "Effector", definition: "A muscle that contracts or a gland that secretes, producing the response." },
      { term: "Reflex", definition: "An automatic, rapid response that does not involve the conscious part of the brain." },
      { term: "Reflex arc", definition: "The pathway of a reflex: receptor, sensory neurone, relay neurone, motor neurone, effector." },
      { term: "Synapse", definition: "The gap between two neurones, crossed by a chemical rather than an electrical impulse." },
      { term: "Neurotransmitter", definition: "The chemical released at a synapse that diffuses across and triggers a new impulse." },
      { term: "Axon", definition: "The long fibre of a neurone along which the electrical impulse travels." },
      { term: "Reaction time", definition: "The time between a stimulus and the response to it." },
      { term: "Homeostasis", definition: "Maintaining a constant internal environment despite changes outside." },
    ],
    examTips: [
      {
        tip: "Learn the pathway in ORDER and write it in order",
        detail:
          "Stimulus, receptor, sensory, CNS, motor, effector, response. Most marks in this topic are for the sequence, so write it as a chain with arrows.",
      },
      {
        tip: "The reflex arc adds a RELAY neurone",
        detail:
          "That is the only difference from the ordinary pathway, and it is the mark. It sits inside the CNS between sensory and motor.",
      },
      {
        tip: "A synapse is crossed by a CHEMICAL",
        detail:
          "The impulse is electrical along the neurone and chemical across the gap. Saying electricity jumps the gap loses the mark.",
      },
      {
        tip: "Say WHY a reflex is fast",
        detail:
          "Because it bypasses the conscious brain, so the signal travels a shorter route with fewer synapses. The reason carries the mark.",
      },
      {
        tip: "An effector is a muscle OR a gland",
        detail:
          "Students almost always say muscle and forget glands. Both count, and questions sometimes require the gland.",
      },
      {
        tip: "Name specific control variables in the ruler test",
        detail:
          "Same hand, same starting height, no warning, same dropper. 'Keep everything else the same' scores nothing.",
      },
    ],
    practice: [
      {
        question: "What does CNS stand for?",
        accept: ["central nervous system", "the central nervous system"],
        answer:
          "Central nervous system — the brain and spinal cord. It processes information and decides on the response.",
      },
      {
        question: "Which two organs make up the central nervous system?",
        accept: ["brain and spinal cord", "spinal cord and brain", "brain and spine"],
        answer:
          "The brain and the spinal cord. Everything else — the sensory and motor neurones — is the peripheral nervous system.",
      },
      {
        question: "What is a change in the environment that an organism detects called?",
        accept: ["stimulus", "a stimulus"],
        answer:
          "A stimulus. The pathway always begins here: stimulus → receptor → sensory neurone → CNS → motor neurone → effector → response.",
      },
      {
        question: "What is the general name for a muscle or gland that produces a response?",
        accept: ["effector", "an effector", "effectors"],
        answer:
          "An effector. Remember it is a muscle OR a gland — students almost always forget glands, and some questions require them.",
      },
      {
        question: "Which neurone carries impulses from a receptor to the CNS?",
        accept: ["sensory", "sensory neurone", "sensory neuron"],
        answer:
          "The sensory neurone. The motor neurone carries impulses the other way, from the CNS out to an effector.",
      },
      {
        question: "Which extra neurone is found in a reflex arc, inside the CNS?",
        accept: ["relay", "relay neurone", "relay neuron", "connector neurone"],
        answer:
          "The relay neurone. It links the sensory neurone directly to the motor neurone, bypassing the conscious brain — which is what makes the reflex fast.",
      },
      {
        question: "What is the gap between two neurones called?",
        accept: ["synapse", "a synapse", "synapses"],
        answer:
          "A synapse. The electrical impulse cannot cross it, so a chemical neurotransmitter diffuses across and starts a new impulse.",
      },
      {
        question: "What crosses the gap at a synapse: an electrical impulse or a chemical?",
        accept: ["chemical", "a chemical", "neurotransmitter", "chemicals"],
        answer:
          "A chemical — a neurotransmitter. It diffuses across the gap and triggers a new electrical impulse in the next neurone.",
      },
      {
        question: "Does a reflex involve the conscious part of the brain? Answer yes or no.",
        accept: ["no", "n"],
        answer:
          "No, and that is exactly why it is so fast. Bypassing conscious thought shortens the route, which matters when the stimulus is something harmful.",
      },
      {
        question: "Name one example of a reflex action.",
        accept: ["blinking", "pulling hand away", "pupil", "knee jerk", "sneezing", "coughing", "pulling away from heat", "dropping something hot"],
        answer:
          "Blinking, pulling your hand from something hot, the pupil narrowing in bright light, or the knee-jerk. All protect the body without conscious thought.",
      },
      {
        question: "What is the long fibre of a neurone along which impulses travel called?",
        accept: ["axon", "the axon"],
        answer:
          "The axon. It is often insulated with a fatty sheath, which speeds the impulse along it.",
      },
      {
        question: "Which sense organ contains receptors that detect light?",
        accept: ["eye", "the eye", "eyes", "retina"],
        answer:
          "The eye — specifically light receptors in the retina. Ears detect sound, and the nose and tongue detect chemicals.",
      },
      {
        question: "In the ruler drop test, what is usually the independent variable?",
        accept: ["caffeine", "caffeine intake", "drinking caffeine", "coffee", "whether caffeine was drunk"],
        answer:
          "Whether the person has consumed caffeine. The dependent variable is the distance the ruler falls, which is converted into reaction time.",
      },
      {
        question: "True or false: more synapses in a pathway make the response faster.",
        accept: ["false", "f"],
        answer:
          "False. Diffusion across each synapse takes time, so more synapses mean a SLOWER response. That is precisely why reflex arcs use as few as possible.",
      },
      {
        question: "Explain why a reflex action is faster than a conscious response. Write two or three sentences.",
        answer:
          "In a reflex the impulse passes straight from the sensory neurone to a relay neurone in the spinal cord and then to the motor neurone, without travelling to the conscious part of the brain. That makes the route much shorter and involves fewer synapses, and since diffusion across each synapse takes time, fewer synapses means less delay. The result is a response fast enough to protect the body from damage before you have even noticed. Mark this one yourself: the marks are for bypassing the conscious brain AND for fewer synapses.",
      },
      {
        question: "Describe how an impulse passes from one neurone to the next.",
        answer:
          "The electrical impulse travels along the axon of the first neurone until it reaches the synapse, the gap between the two cells. It cannot cross the gap as electricity, so it causes the release of a chemical neurotransmitter into the gap. That chemical diffuses across and binds to the membrane of the next neurone, which triggers a new electrical impulse to travel along it. Mark this one yourself: electrical along, chemical across, then electrical again — all three stages are needed.",
      },
    ],
    misconceptions: [
      {
        wrong: "The electrical impulse jumps across the synapse.",
        right:
          "It does not. A chemical neurotransmitter diffuses across the gap and starts a NEW electrical impulse in the next neurone.",
      },
      {
        wrong: "Reflexes are controlled by the brain deciding very quickly.",
        right:
          "Reflexes bypass the conscious brain entirely, which is exactly why they are fast enough to protect you.",
      },
      {
        wrong: "An effector is always a muscle.",
        right:
          "It can be a muscle OR a gland. Glands respond by secreting hormones, and some exam questions specifically require that.",
      },
      {
        wrong: "The CNS includes all the nerves in the body.",
        right:
          "The CNS is the brain and spinal cord only. The sensory and motor neurones leading to and from it are the peripheral nervous system.",
      },
    ],
  },

  "biology/hormones-and-homeostasis": {
    summary:
      "Homeostasis is how your body holds its internal conditions steady while the outside world does whatever it likes. This topic covers the hormones that do it, how they differ from nerves, and how blood glucose is controlled — plus the negative feedback loops that are Higher tier only, and are flagged as such.",
    keyFacts: [
      {
        heading: "Homeostasis and the two control systems",
        points: [
          "HOMEOSTASIS is maintaining a constant internal environment despite external change.",
          "The three conditions controlled are blood glucose concentration, body temperature and water levels.",
          "All control systems have RECEPTORS, a COORDINATION CENTRE, and EFFECTORS.",
          "The NERVOUS system uses electrical impulses: fast, short-lived, and precisely targeted.",
          "The ENDOCRINE system uses hormones in the blood: slower, longer-lasting, and more general in their effect.",
        ],
      },
      {
        heading: "The endocrine glands",
        points: [
          "The PITUITARY is the 'master gland' — it releases hormones that control other glands.",
          "The PANCREAS releases insulin and glucagon, controlling blood glucose.",
          "The THYROID releases thyroxine, which controls the metabolic rate.",
          "The ADRENAL glands release adrenaline, preparing the body for 'fight or flight'.",
          "The OVARIES release oestrogen; the TESTES release testosterone.",
        ],
      },
      {
        heading: "Controlling blood glucose",
        points: [
          "Blood glucose is monitored by the pancreas.",
          "If glucose is TOO HIGH, the pancreas releases INSULIN. Liver and muscle cells take glucose in and store it as GLYCOGEN.",
          "If glucose is TOO LOW, the pancreas releases GLUCAGON, which makes the liver convert glycogen back into glucose.",
          "TYPE 1 diabetes: the pancreas produces little or no insulin. Treated with insulin injections.",
          "TYPE 2 diabetes: body cells stop responding properly to insulin. Obesity is a risk factor; treated with diet, exercise and sometimes medication.",
          "Watch the spelling: glycoGEN is the store, glucaGON is the hormone.",
        ],
      },
      {
        heading: "Higher tier: negative feedback",
        higherOnly: true,
        points: [
          "NEGATIVE FEEDBACK means a change triggers a response that reverses the change, returning the level to normal.",
          "THYROXINE from the thyroid controls the basal metabolic rate and is needed for growth.",
          "When thyroxine is low, the pituitary releases TSH, which stimulates the thyroid to make more.",
          "When thyroxine rises above normal, TSH release is inhibited, so less thyroxine is made — the loop closes itself.",
          "ADRENALINE is NOT controlled by negative feedback: it is released in response to fear or stress, raising heart rate and delivering more oxygen and glucose to muscles.",
        ],
      },
    ],
    flashcards: [
      { term: "Homeostasis", definition: "Maintaining a constant internal environment despite changes in external conditions." },
      { term: "Hormone", definition: "A chemical messenger released by a gland and carried in the blood to a target organ." },
      { term: "Endocrine system", definition: "The system of glands that release hormones into the blood." },
      { term: "Pituitary gland", definition: "The master gland, which releases hormones controlling other glands." },
      { term: "Pancreas", definition: "The gland that monitors blood glucose and releases insulin and glucagon." },
      { term: "Insulin", definition: "The hormone that lowers blood glucose by making cells take it in and store it as glycogen." },
      { term: "Glucagon", definition: "The hormone that raises blood glucose by making the liver convert glycogen back into glucose." },
      { term: "Glycogen", definition: "The storage carbohydrate in the liver and muscles, made from excess glucose." },
      { term: "Type 1 diabetes", definition: "A condition where the pancreas produces little or no insulin, treated with injections." },
      { term: "Type 2 diabetes", definition: "A condition where body cells stop responding properly to insulin; obesity is a risk factor." },
      { term: "Thyroxine", definition: "The hormone from the thyroid that controls the basal metabolic rate." },
      { term: "Adrenaline", definition: "The hormone from the adrenal glands released in fear or stress, preparing the body for action." },
      { term: "Negative feedback", definition: "A control mechanism where a change triggers a response that reverses it. Higher tier only." },
      { term: "Target organ", definition: "The organ a particular hormone acts on." },
      { term: "Effector", definition: "A muscle or gland that carries out the response in a control system." },
      { term: "Basal metabolic rate", definition: "The rate at which chemical reactions occur in the body at rest." },
    ],
    examTips: [
      {
        tip: "GlycoGEN is stored; glucaGON is the hormone",
        detail:
          "The two words differ by two letters and the marker will not give you the benefit of the doubt. Write them out carefully.",
      },
      {
        tip: "Insulin LOWERS blood glucose",
        detail:
          "High glucose → insulin → cells take glucose in → glucose falls. Getting the direction backwards is the commonest error in this topic.",
      },
      {
        tip: "Know the nerves versus hormones comparison",
        detail:
          "Nerves: electrical, fast, short-lived, precise. Hormones: chemical, slower, longer-lasting, general. It is a standard question.",
      },
      {
        tip: "Type 1 and Type 2 have different causes",
        detail:
          "Type 1 is the pancreas not making insulin; Type 2 is cells not responding to it. Only Type 1 always requires injections.",
      },
      {
        tip: "Higher tier: describe the WHOLE feedback loop",
        detail:
          "Level falls → hormone released → level rises → hormone release inhibited. Both halves are needed. Foundation students can skip this.",
      },
      {
        tip: "Adrenaline is not negative feedback",
        detail:
          "It is released in response to a threat, not to correct a level. Questions offer it as a trap in feedback questions.",
      },
    ],
    practice: [
      {
        question: "What is the maintenance of a constant internal environment called?",
        accept: ["homeostasis"],
        answer:
          "Homeostasis. The three conditions you must know are blood glucose concentration, body temperature and water levels.",
      },
      {
        question: "What is the name for a chemical messenger carried in the blood?",
        accept: ["hormone", "a hormone", "hormones"],
        answer:
          "A hormone. It is released by a gland and travels in the blood to its target organ — slower than a nerve impulse but longer lasting.",
      },
      {
        question: "Which gland is known as the master gland?",
        accept: ["pituitary", "the pituitary", "pituitary gland"],
        answer:
          "The pituitary. It releases hormones that control other glands, which is exactly what makes it the master of the endocrine system.",
      },
      {
        question: "Which organ monitors and controls blood glucose concentration?",
        accept: ["pancreas", "the pancreas"],
        answer:
          "The pancreas. It releases insulin when glucose is too high and glucagon when it is too low.",
      },
      {
        question: "Which hormone LOWERS blood glucose concentration?",
        accept: ["insulin"],
        answer:
          "Insulin. It causes liver and muscle cells to take glucose in and store it as glycogen, which brings the blood concentration down.",
      },
      {
        question: "Which hormone RAISES blood glucose concentration?",
        accept: ["glucagon"],
        answer:
          "Glucagon. It makes the liver convert stored glycogen back into glucose. Note the spelling — glucaGON is the hormone, glycoGEN the store.",
      },
      {
        question: "What is excess glucose stored as in the liver and muscles?",
        accept: ["glycogen"],
        answer:
          "Glycogen. It is insoluble, so storing glucose in this form does not affect the water balance of the cells.",
      },
      {
        question: "In which type of diabetes does the pancreas produce little or no insulin?",
        accept: ["type 1", "type one", "1", "type 1 diabetes"],
        answer:
          "Type 1. It is treated with insulin injections, because the hormone the body needs simply is not being made.",
      },
      {
        question: "In which type of diabetes do body cells stop responding properly to insulin?",
        accept: ["type 2", "type two", "2", "type 2 diabetes"],
        answer:
          "Type 2. Obesity is a major risk factor, and it is usually treated first with a controlled diet and more exercise.",
      },
      {
        question: "Which hormone is released by the adrenal glands in response to fear or stress?",
        accept: ["adrenaline", "adrenalin", "epinephrine"],
        answer:
          "Adrenaline. It raises heart rate and delivers more oxygen and glucose to the muscles and brain — the 'fight or flight' response.",
      },
      {
        question: "Which hormone from the thyroid controls the basal metabolic rate?",
        accept: ["thyroxine", "thyroxin"],
        answer:
          "Thyroxine. Its level is held steady by negative feedback involving TSH from the pituitary, which is Higher tier content.",
      },
      {
        question: "Which is faster: a nervous response or a hormonal one?",
        accept: ["nervous", "nervous response", "nerves", "nerve", "the nervous response"],
        answer:
          "The nervous response. Electrical impulses are very fast but short-lived and precisely targeted; hormones are slower, longer-lasting and more general.",
      },
      {
        question: "Higher tier: what is the mechanism called where a change triggers a response that reverses it?",
        accept: ["negative feedback", "negative feedback loop"],
        answer:
          "Negative feedback. Thyroxine is the standard example: low thyroxine → pituitary releases TSH → thyroid makes more → TSH release is then inhibited.",
        higherOnly: true,
      },
      {
        question: "Higher tier: which hormone from the pituitary stimulates the thyroid to release thyroxine?",
        accept: ["tsh", "thyroid stimulating hormone", "thyroid-stimulating hormone"],
        answer:
          "TSH — thyroid stimulating hormone. When thyroxine rises above normal, TSH release is inhibited, which closes the feedback loop.",
        higherOnly: true,
      },
      {
        question: "Explain how the body responds when blood glucose concentration rises after a meal. Write three or four sentences.",
        answer:
          "The pancreas detects that blood glucose has risen above normal and releases the hormone insulin into the blood. Insulin travels to the liver and muscle cells and causes them to take glucose out of the blood. Those cells then convert the glucose into glycogen, which is insoluble and can be stored. As a result the blood glucose concentration falls back towards normal. Mark this one yourself: pancreas, insulin, cells take glucose in, stored as glycogen — all four steps are needed.",
      },
      {
        question: "Compare the nervous system and the endocrine system as ways of controlling the body.",
        answer:
          "The nervous system sends electrical impulses along neurones, so responses are very fast, act on a precise target, and last only a short time — useful for reacting to immediate danger. The endocrine system releases hormones into the blood, so they travel more slowly, reach many organs rather than one precise spot, and their effects last far longer — better suited to processes such as growth or the menstrual cycle. Both use the same basic structure of receptor, coordination centre and effector. Mark this one yourself: speed, duration and how targeted each is are the three comparisons worth making.",
      },
    ],
    misconceptions: [
      {
        wrong: "Insulin raises blood glucose.",
        right:
          "Insulin LOWERS it, by making cells take glucose in and store it as glycogen. Glucagon is the one that raises it.",
      },
      {
        wrong: "Glycogen and glucagon are the same word.",
        right:
          "GlycoGEN is the stored carbohydrate; glucaGON is the hormone that releases it. Spelling matters here — markers do not guess.",
      },
      {
        wrong: "Type 1 and Type 2 diabetes are the same illness at different stages.",
        right:
          "Type 1 is a failure to PRODUCE insulin; Type 2 is a failure to RESPOND to it. They have different causes and different treatments.",
      },
      {
        wrong: "Adrenaline works by negative feedback.",
        right:
          "It is released in response to fear or stress, not to correct a level that has drifted. Thyroxine is the negative feedback example.",
      },
      {
        wrong: "Hormones act faster than nerves because blood moves quickly.",
        right:
          "Nerve impulses are far faster. Hormones are slower but their effects last much longer, which suits different jobs.",
      },
    ],
  },

  "biology/the-circulatory-system": {
    summary:
      "The circulatory system moves oxygen, glucose and everything else to where it is needed, in a body far too large for diffusion alone. This topic covers the heart, the three types of blood vessel, what blood is made of, and why humans have a double circulatory system — plus the blood flow calculation, which is Higher tier only.",
    keyFacts: [
      {
        heading: "The heart and double circulation",
        points: [
          "Humans have a DOUBLE circulatory system: blood passes through the heart TWICE for each full circuit.",
          "One loop goes to the lungs to pick up oxygen; the other goes to the rest of the body to deliver it.",
          "This keeps the pressure high on the way to the body, so oxygen is delivered faster.",
          "The right side pumps deoxygenated blood to the lungs; the left side pumps oxygenated blood to the body.",
          "The LEFT VENTRICLE has the thickest muscle wall, because it must push blood all the way round the body.",
          "The natural resting rate is set by a group of cells in the right atrium called the PACEMAKER.",
        ],
      },
      {
        heading: "The blood vessels",
        points: [
          "ARTERIES carry blood AWAY from the heart. Thick muscular and elastic walls, small lumen, high pressure.",
          "VEINS carry blood back TO the heart. Thinner walls, large lumen, low pressure, and VALVES to stop backflow.",
          "CAPILLARIES are one cell thick, so substances can diffuse in and out over a very short distance.",
          "Capillaries form vast networks, giving an enormous total surface area for exchange.",
          "Memory aid: Arteries carry blood Away.",
        ],
      },
      {
        heading: "What blood is made of",
        points: [
          "PLASMA is the liquid that carries everything else: cells, carbon dioxide, glucose, urea and hormones.",
          "RED BLOOD CELLS carry oxygen. They contain haemoglobin, have no nucleus, and are biconcave discs.",
          "No nucleus means more room for haemoglobin; the biconcave shape gives a larger surface area.",
          "WHITE BLOOD CELLS defend against pathogens by phagocytosis and by producing antibodies and antitoxins.",
          "PLATELETS are cell fragments that help the blood to clot at a wound.",
        ],
      },
      {
        heading: "Heart problems and treatments",
        points: [
          "CORONARY HEART DISEASE: the coronary arteries narrow with fatty deposits, so the heart muscle gets less oxygen.",
          "STENTS hold a narrowed artery open. Quick to fit, but do not treat the underlying cause.",
          "STATINS reduce blood cholesterol, slowing the build-up. They must be taken long term and can have side effects.",
          "Faulty valves can be replaced with biological or mechanical replacements.",
          "An artificial pacemaker corrects an irregular heartbeat.",
        ],
      },
      {
        heading: "Higher tier: rate of blood flow",
        higherOnly: true,
        points: [
          "rate of blood flow = volume of blood ÷ time.",
          "The units follow from what you divided: cm³ per minute, or dm³ per minute.",
          "Convert the time first if the question mixes seconds and minutes.",
          "This calculation is Higher tier only — Foundation students are not asked it.",
          "Check the answer is sensible: a resting adult heart pumps roughly 5 dm³ every minute.",
        ],
      },
    ],
    flashcards: [
      { term: "Double circulatory system", definition: "A system where blood passes through the heart twice for each complete circuit of the body." },
      { term: "Artery", definition: "A vessel carrying blood away from the heart, with thick elastic walls and a small lumen." },
      { term: "Vein", definition: "A vessel carrying blood back to the heart, with thin walls, a large lumen and valves." },
      { term: "Capillary", definition: "A vessel one cell thick, where substances diffuse between blood and tissue." },
      { term: "Lumen", definition: "The hollow space inside a blood vessel through which blood flows." },
      { term: "Plasma", definition: "The liquid part of blood, which carries cells, glucose, carbon dioxide, urea and hormones." },
      { term: "Red blood cell", definition: "A biconcave cell with no nucleus, packed with haemoglobin to carry oxygen." },
      { term: "Haemoglobin", definition: "The protein in red blood cells that binds oxygen, forming oxyhaemoglobin." },
      { term: "White blood cell", definition: "A cell that defends the body against pathogens by phagocytosis and by making antibodies." },
      { term: "Platelet", definition: "A cell fragment that helps blood clot at a wound." },
      { term: "Left ventricle", definition: "The chamber with the thickest wall, which pumps oxygenated blood around the whole body." },
      { term: "Pacemaker", definition: "A group of cells in the right atrium that sets the natural resting heart rate." },
      { term: "Coronary heart disease", definition: "Narrowing of the coronary arteries by fatty deposits, reducing oxygen supply to the heart muscle." },
      { term: "Stent", definition: "A mesh tube inserted to hold a narrowed artery open." },
      { term: "Statin", definition: "A drug that lowers blood cholesterol, slowing the build-up of fatty deposits." },
      { term: "Valve", definition: "A flap that prevents blood flowing backwards, found in veins and in the heart." },
    ],
    examTips: [
      {
        tip: "Arteries carry blood Away — both start with A",
        detail:
          "The simplest memory aid in the subject, and it stops the commonest error. Note that arteries are defined by DIRECTION, not by whether the blood is oxygenated.",
      },
      {
        tip: "The pulmonary artery carries DEOXYGENATED blood",
        detail:
          "It is still an artery because it leaves the heart. This is the classic trap, and it catches students who define arteries by their oxygen content.",
      },
      {
        tip: "Explain the left ventricle's thick wall",
        detail:
          "It pumps blood all the way round the body, against much greater resistance, so it needs more muscle. The right side only reaches the lungs.",
      },
      {
        tip: "Link every red blood cell adaptation to oxygen",
        detail:
          "No nucleus means more room for haemoglobin; biconcave means a larger surface area for diffusion. The reason is the mark.",
      },
      {
        tip: "Give a drawback with every treatment",
        detail:
          "Stents do not treat the cause; statins must be taken for life and have side effects. Balanced answers reach the top band.",
      },
      {
        tip: "Higher tier: show the working for blood flow",
        detail:
          "Volume ÷ time, with the units stated. Convert seconds to minutes first if needed. Foundation students can skip this entirely.",
      },
    ],
    workedExamples: [
      {
        question:
          "A heart pumps 4,500 cm³ of blood in 60 seconds. Calculate the rate of blood flow in cm³ per minute.",
        steps: [
          "rate of blood flow = volume ÷ time.",
          "60 seconds is exactly 1 minute, so no conversion is needed.",
          "= 4,500 cm³ ÷ 1 minute.",
          "= 4,500 cm³ per minute — close to the roughly 5,000 cm³ a resting adult heart manages, so the answer is sensible.",
        ],
        answer: "4,500 cm³ per minute",
        higherOnly: true,
      },
      {
        question:
          "During exercise, 9,000 cm³ of blood passes through the heart in 90 seconds. Calculate the rate of blood flow in cm³ per minute.",
        steps: [
          "Convert the time to minutes first: 90 ÷ 60 = 1.5 minutes.",
          "rate = volume ÷ time = 9,000 ÷ 1.5.",
          "= 6,000 cm³ per minute.",
          "Higher than at rest, as expected during exercise — always sanity-check against the context.",
        ],
        answer: "6,000 cm³ per minute",
        higherOnly: true,
      },
    ],
    practice: [
      {
        question: "Do arteries carry blood towards or away from the heart?",
        accept: ["away", "away from the heart", "away from heart"],
        answer:
          "Away. Arteries carry blood Away — both start with A. Note this is about DIRECTION, not about whether the blood carries oxygen.",
      },
      {
        question: "Which type of blood vessel contains valves to prevent backflow?",
        accept: ["veins", "vein", "a vein"],
        answer:
          "Veins. The blood in them is at low pressure, so valves are needed to stop it draining backwards, particularly in the legs.",
      },
      {
        question: "Which type of blood vessel is one cell thick?",
        accept: ["capillary", "capillaries", "a capillary"],
        answer:
          "Capillaries. Being one cell thick gives a very short diffusion distance, which is what makes exchange with the tissues efficient.",
      },
      {
        question: "Which chamber of the heart has the thickest muscular wall?",
        accept: ["left ventricle", "the left ventricle"],
        answer:
          "The left ventricle. It must generate enough pressure to push blood all the way around the body, whereas the right side only reaches the lungs.",
      },
      {
        question: "What is the liquid part of blood called?",
        accept: ["plasma", "blood plasma"],
        answer:
          "Plasma. It carries the blood cells plus glucose, carbon dioxide, urea, hormones and everything else being transported.",
      },
      {
        question: "What protein in red blood cells binds to oxygen?",
        accept: ["haemoglobin", "hemoglobin"],
        answer:
          "Haemoglobin. It combines with oxygen to form oxyhaemoglobin in the lungs, and releases it again in the respiring tissues.",
      },
      {
        question: "What do red blood cells lack, leaving more room for haemoglobin?",
        accept: ["a nucleus", "nucleus", "the nucleus"],
        answer:
          "A nucleus. Every adaptation of a red blood cell traces back to carrying more oxygen — that is the reason the mark is given for.",
      },
      {
        question: "Which blood component helps the blood to clot?",
        accept: ["platelets", "platelet"],
        answer:
          "Platelets — cell fragments rather than whole cells. Clotting seals a wound and stops pathogens getting in.",
      },
      {
        question: "How many times does blood pass through the heart in one full circuit of a human body?",
        accept: ["2", "twice", "two"],
        answer:
          "Twice — that is what 'double circulatory system' means. It keeps the pressure high on the journey to the body, so oxygen is delivered faster.",
      },
      {
        question: "Does the pulmonary artery carry oxygenated or deoxygenated blood?",
        accept: ["deoxygenated", "deoxygenated blood"],
        answer:
          "Deoxygenated — it is carrying blood to the lungs to collect oxygen. It is still an artery because it leaves the heart, which is the classic trap.",
      },
      {
        question: "What is the mesh tube used to hold a narrowed artery open called?",
        accept: ["stent", "a stent", "stents"],
        answer:
          "A stent. It restores blood flow quickly, but it does not treat the underlying cause, so the artery can narrow again.",
      },
      {
        question: "What drug is used to lower blood cholesterol?",
        accept: ["statin", "statins", "a statin"],
        answer:
          "Statins. They slow the build-up of fatty deposits, but must be taken long term and can cause side effects such as muscle pain.",
      },
      {
        question: "What is the group of cells in the right atrium that sets the resting heart rate called?",
        accept: ["pacemaker", "the pacemaker", "natural pacemaker", "sinoatrial node"],
        answer:
          "The pacemaker. If it becomes faulty, an artificial electrical pacemaker can be fitted to correct an irregular heartbeat.",
      },
      {
        question: "Higher tier: a heart pumps 3,000 cm³ of blood in 60 seconds. Calculate the rate in cm³ per minute. Give the number only.",
        accept: ["3000", "3,000"],
        answer:
          "3,000 cm³ per minute. Rate = volume ÷ time, and 60 seconds is 1 minute so no conversion is needed. Foundation students are not asked this.",
        higherOnly: true,
      },
      {
        question: "Explain why humans need a double circulatory system. Write two or three sentences.",
        answer:
          "Blood loses a great deal of pressure passing through the tiny capillaries of the lungs. If it then travelled straight on to the body it would move slowly, and oxygen would be delivered too slowly for an active mammal. Returning it to the heart first lets the left ventricle raise the pressure again before sending it round the body, so oxygen and glucose reach respiring tissues quickly. Mark this one yourself: the marks are for pressure being lost in the lungs and restored by the heart.",
      },
      {
        question: "Explain how a red blood cell is adapted to its function.",
        answer:
          "It contains haemoglobin, which binds oxygen in the lungs and releases it in the tissues. It has no nucleus, which leaves more room inside for haemoglobin so it can carry more oxygen. Its biconcave disc shape gives a large surface area relative to its volume, so oxygen diffuses in and out quickly, and the flexible shape lets it squeeze through narrow capillaries. Mark this one yourself: each adaptation only scores when you also say what it achieves.",
      },
      {
        question: "Which blood vessel carries blood AWAY from the heart?",
        choices: [
          "An artery",
          "A vein",
          "A capillary",
          "The vena cava",
        ],
        accept: [
          "An artery",
        ],
        answer: "Arteries carry blood away from the heart at high pressure and have thick muscular walls. Veins return blood and have valves.",
      },
      {
        question: "Which chamber of the heart pumps blood to the body?",
        choices: [
          "The left ventricle",
          "The right ventricle",
          "The left atrium",
          "The right atrium",
        ],
        accept: [
          "The left ventricle",
        ],
        answer: "The left ventricle has the thickest muscular wall because it pumps to the whole body. The right ventricle only pumps to the lungs.",
      },
      {
        question: "Which component of blood transports oxygen?",
        choices: [
          "Red blood cells",
          "White blood cells",
          "Platelets",
          "Plasma",
        ],
        accept: [
          "Red blood cells",
        ],
        answer: "Red blood cells contain haemoglobin and have no nucleus, leaving more room for it. Platelets clot and white cells fight infection.",
      },
      {
        question: "Why do capillaries have walls one cell thick?",
        choices: [
          "To give a short diffusion distance for exchange",
          "To withstand high pressure",
          "To stop blood flowing backwards",
          "To store oxygen",
        ],
        accept: [
          "To give a short diffusion distance for exchange",
        ],
        answer: "A one-cell wall means substances diffuse quickly between blood and tissues, which is the whole purpose of a capillary.",
      },
      {
        question: "What is the role of valves in veins?",
        choices: [
          "To stop blood flowing backwards",
          "To speed the blood up",
          "To filter waste from the blood",
          "To add oxygen to the blood",
        ],
        accept: [
          "To stop blood flowing backwards",
        ],
        answer: "Blood in veins is at low pressure, so valves are needed to keep it moving in one direction back to the heart.",
      },
    ],
    misconceptions: [
      {
        wrong: "Arteries always carry oxygenated blood.",
        right:
          "The pulmonary artery carries deoxygenated blood to the lungs. Arteries are defined by carrying blood AWAY from the heart, not by its oxygen content.",
      },
      {
        wrong: "The heart pumps blood; the lungs oxygenate it; that is one circuit.",
        right:
          "Blood passes through the heart TWICE per circuit — once for the lungs and once for the body. That is what makes it a double system.",
      },
      {
        wrong: "Red blood cells are just cells full of oxygen.",
        right:
          "They carry oxygen bound to haemoglobin, and they are not typical cells at all — they have no nucleus, which is what makes room for it.",
      },
      {
        wrong: "A stent cures coronary heart disease.",
        right:
          "It holds one narrowed section open. The underlying build-up of fatty deposits continues unless lifestyle changes or statins address it.",
      },
      {
        wrong: "Veins have thick walls because blood must get back to the heart.",
        right:
          "Vein walls are THINNER, because the pressure is low. Valves and surrounding muscles keep the blood moving instead.",
      },
    ],
  },

  // ─── YEAR 11 ──────────────────────────────────────────────────────────────

  "biology/dna-and-reproduction": {
    summary:
      "DNA is the instruction set for building an organism, and reproduction is how it gets passed on. This topic covers the structure of DNA, the difference between mitosis and meiosis, and why sexual reproduction produces variation while asexual reproduction does not — which turns out to matter enormously for evolution.",
    keyFacts: [
      {
        heading: "DNA and genes",
        points: [
          "DNA is a polymer made of two strands coiled into a DOUBLE HELIX.",
          "A GENE is a small section of DNA that codes for a particular sequence of amino acids, making a specific protein.",
          "A CHROMOSOME is a long molecule of DNA carrying many genes.",
          "The GENOME is the entire genetic material of an organism.",
          "DNA is made of four bases: A, T, C and G. A always pairs with T, and C always pairs with G.",
          "The order of bases determines the order of amino acids, and so which protein is made.",
        ],
      },
      {
        heading: "Why the genome matters",
        points: [
          "Understanding the human genome helps identify genes linked to particular diseases.",
          "It allows doctors to understand and treat inherited disorders more effectively.",
          "It lets scientists trace human migration patterns across history.",
          "Concerns include privacy of genetic data and the possibility of discrimination by insurers or employers.",
          "The full human genome was first sequenced in 2003, and sequencing has become vastly cheaper since.",
        ],
      },
      {
        heading: "Sexual and asexual reproduction",
        points: [
          "SEXUAL reproduction involves two parents and the fusion of GAMETES — sperm and egg, or pollen and ovule.",
          "It produces genetic VARIATION, because offspring get a mixture of genes from both parents.",
          "ASEXUAL reproduction involves one parent and only mitosis. The offspring are CLONES — genetically identical.",
          "Asexual reproduction is faster and needs no mate, which suits stable, favourable conditions.",
          "Sexual reproduction is slower but the variation it creates is what natural selection acts on.",
          "Some organisms do BOTH: malarial parasites, fungi and many plants such as strawberries.",
        ],
      },
      {
        heading: "Meiosis",
        points: [
          "Meiosis happens in the reproductive organs and produces GAMETES.",
          "It produces FOUR cells, each with HALF the number of chromosomes — 23 in humans.",
          "Those cells are genetically DIFFERENT from each other and from the parent.",
          "At fertilisation two gametes fuse, restoring the full 46 chromosomes.",
          "The fertilised egg then divides by MITOSIS to form an embryo, and the cells later differentiate.",
          "Compare: mitosis gives 2 identical cells with a full set; meiosis gives 4 different cells with half a set.",
        ],
      },
    ],
    flashcards: [
      { term: "DNA", definition: "The polymer that carries genetic information, made of two strands in a double helix." },
      { term: "Double helix", definition: "The twisted-ladder shape of the two DNA strands." },
      { term: "Gene", definition: "A section of DNA that codes for a sequence of amino acids, making a specific protein." },
      { term: "Chromosome", definition: "A long molecule of DNA carrying many genes." },
      { term: "Genome", definition: "The entire genetic material of an organism." },
      { term: "Base", definition: "One of the four units of DNA — A, T, C or G — whose order carries the code." },
      { term: "Complementary base pairing", definition: "A always pairs with T, and C always pairs with G." },
      { term: "Gamete", definition: "A sex cell — sperm or egg in animals, pollen or ovule in plants — with half the chromosomes." },
      { term: "Fertilisation", definition: "The fusion of two gametes, restoring the full number of chromosomes." },
      { term: "Meiosis", definition: "Cell division producing four genetically different gametes with half the chromosome number." },
      { term: "Mitosis", definition: "Cell division producing two genetically identical cells with the full chromosome number." },
      { term: "Sexual reproduction", definition: "Reproduction involving two parents and the fusion of gametes, producing variation." },
      { term: "Asexual reproduction", definition: "Reproduction involving one parent and only mitosis, producing genetically identical clones." },
      { term: "Clone", definition: "An organism genetically identical to its parent." },
      { term: "Variation", definition: "Differences between individuals of the same species." },
      { term: "Embryo", definition: "The ball of cells formed when a fertilised egg divides repeatedly by mitosis." },
    ],
    examTips: [
      {
        tip: "Learn the base pairs: A-T and C-G",
        detail:
          "Two letters, two pairs, and a guaranteed mark. Do not write A with C — the pairing is fixed and examiners test it directly.",
      },
      {
        tip: "Meiosis: FOUR cells, HALF the chromosomes, all DIFFERENT",
        detail:
          "Mitosis: two cells, full set, identical. Learn them as a contrasting pair rather than separately, because that is how they are examined.",
      },
      {
        tip: "Say WHY sexual reproduction matters",
        detail:
          "It produces variation, and variation is what natural selection acts on. Without that sentence the answer is only half complete.",
      },
      {
        tip: "Gene, chromosome and genome are different scales",
        detail:
          "Gene is a section; chromosome is one long molecule holding many genes; genome is the lot. Questions test that you can order them.",
      },
      {
        tip: "Give a benefit AND a concern about genome research",
        detail:
          "Better treatment of inherited disease against privacy and discrimination. Ethics questions want both sides and a conclusion.",
      },
      {
        tip: "The embryo forms by MITOSIS, not meiosis",
        detail:
          "Meiosis made the gametes. Once they fuse, all further growth is mitosis. Mixing these up is very common.",
      },
    ],
    practice: [
      {
        question: "What shape are the two strands of DNA coiled into?",
        accept: ["double helix", "a double helix", "helix"],
        answer:
          "A double helix — a twisted ladder. The two strands are held together by pairs of bases forming the rungs.",
      },
      {
        question: "Which base always pairs with A in DNA?",
        accept: ["t", "thymine"],
        answer:
          "T (thymine). The other pair is C with G. These two pairings are fixed and are a reliable mark in every paper.",
      },
      {
        question: "Which base always pairs with C in DNA?",
        accept: ["g", "guanine"],
        answer:
          "G (guanine). A pairs with T, C pairs with G — that complementary pairing is what lets DNA copy itself exactly.",
      },
      {
        question: "What is the entire genetic material of an organism called?",
        accept: ["genome", "the genome"],
        answer:
          "The genome. A gene is a section of DNA, a chromosome carries many genes, and the genome is all of it together.",
      },
      {
        question: "What is a section of DNA that codes for a specific protein called?",
        accept: ["gene", "a gene", "genes"],
        answer:
          "A gene. It codes for a sequence of amino acids, and the order of those amino acids determines which protein is made.",
      },
      {
        question: "What is the name for a sex cell such as a sperm or an egg?",
        accept: ["gamete", "a gamete", "gametes"],
        answer:
          "A gamete. Gametes carry half the normal number of chromosomes, so that fertilisation restores the full set.",
      },
      {
        question: "How many cells does meiosis produce from one parent cell? Give the number only.",
        accept: ["4", "four"],
        answer:
          "Four, each genetically different and each with half the chromosome number. Mitosis, by contrast, produces two identical cells.",
      },
      {
        question: "How many chromosomes does a human gamete contain? Give the number only.",
        accept: ["23", "twenty three", "twenty-three"],
        answer:
          "23 — half of 46. When two gametes fuse at fertilisation the full 46 is restored, which is why the number stays constant across generations.",
      },
      {
        question: "Which type of cell division produces gametes?",
        accept: ["meiosis"],
        answer:
          "Meiosis. It happens only in the reproductive organs, and it is the source of the variation that makes siblings different.",
      },
      {
        question: "Which type of cell division does a fertilised egg use to grow into an embryo?",
        accept: ["mitosis"],
        answer:
          "Mitosis. Meiosis made the gametes; once they have fused, all further growth is by mitosis, producing identical cells that then differentiate.",
      },
      {
        question: "Does asexual reproduction produce offspring that are identical or varied?",
        accept: ["identical", "genetically identical", "the same", "clones"],
        answer:
          "Genetically identical — clones. Only one parent is involved and only mitosis is used, so there is no mixing of genes.",
      },
      {
        question: "Give one advantage of asexual reproduction.",
        accept: ["faster", "no mate needed", "only one parent", "quick", "no partner", "time and energy", "many offspring"],
        answer:
          "It is faster, needs no mate, and produces many offspring quickly — which suits stable conditions where the parent is already well adapted.",
      },
      {
        question: "Give one advantage of sexual reproduction.",
        accept: ["variation", "genetic variation", "natural selection", "adapt", "survive change", "evolution", "disease resistance"],
        answer:
          "It produces genetic variation, which is what natural selection acts on. That variation lets a population adapt when conditions change.",
      },
      {
        question: "In which year was the human genome first sequenced? Give the number only.",
        accept: ["2003"],
        answer:
          "2003. Sequencing has become dramatically cheaper and faster since, which is what has made personalised medicine plausible.",
      },
      {
        question: "Explain why sexual reproduction produces variation but asexual reproduction does not. Write three sentences.",
        answer:
          "Sexual reproduction uses meiosis to make gametes, and each gamete receives a different mixture of the parent's chromosomes, so no two are the same. Fertilisation then combines a gamete from each of two different parents at random, so the offspring carries a new combination of genes from both. Asexual reproduction uses only mitosis and one parent, which produces genetically identical cells, so there is no mixing and no variation. Mark this one yourself: credit yourself for meiosis making different gametes AND for two parents combining at random.",
      },
      {
        question: "Discuss the benefits and concerns of understanding the human genome.",
        answer:
          "The benefits are substantial: genes linked to particular diseases can be identified, inherited disorders understood and treated more effectively, and treatment tailored to an individual's genetics. It also lets scientists trace human migration across history. The concerns are mainly about privacy and its consequences — genetic data could reveal a predisposition to illness, and insurers or employers might discriminate on that basis. There are also worries about who owns and stores the data. Mark this one yourself: full marks need both sides and a judgement, not a list of benefits followed by one token concern.",
      },
    ],
    misconceptions: [
      {
        wrong: "A gene and a chromosome are the same thing.",
        right:
          "A chromosome is one long DNA molecule carrying MANY genes. A gene is a small section of it.",
      },
      {
        wrong: "Meiosis produces two cells like mitosis.",
        right:
          "Meiosis produces FOUR cells, each with half the chromosomes and each genetically different.",
      },
      {
        wrong: "The embryo grows by meiosis.",
        right:
          "Meiosis only makes gametes. After fertilisation everything grows by mitosis.",
      },
      {
        wrong: "Asexual reproduction is primitive and always worse.",
        right:
          "It is faster, needs no mate and works very well in stable conditions. Its weakness is only exposed when the environment changes.",
      },
      {
        wrong: "DNA bases can pair in any combination.",
        right:
          "A pairs only with T, and C only with G. That fixed pairing is what allows DNA to be copied accurately.",
      },
    ],
  },

  "biology/genetics-and-inheritance": {
    summary:
      "Genetics is where Biology becomes maths for a while. This topic covers the vocabulary — allele, dominant, recessive, genotype, phenotype — the Punnett square for predicting offspring, sex determination, and two inherited disorders. Getting the vocabulary exactly right is most of the battle, because the calculations themselves are straightforward once the words are clear.",
    keyFacts: [
      {
        heading: "The vocabulary",
        points: [
          "An ALLELE is a different version of the same gene.",
          "A DOMINANT allele is expressed even if only one copy is present. Written as a CAPITAL letter.",
          "A RECESSIVE allele is only expressed if BOTH copies are recessive. Written as a lower-case letter.",
          "HOMOZYGOUS means both alleles are the same (BB or bb). HETEROZYGOUS means they differ (Bb).",
          "GENOTYPE is the combination of alleles; PHENOTYPE is the characteristic you can actually observe.",
          "A CARRIER is heterozygous for a recessive disorder — they do not have it, but can pass it on.",
        ],
      },
      {
        heading: "Punnett squares",
        points: [
          "Put one parent's alleles along the top and the other's down the side.",
          "Fill each box by combining the allele from its row and its column.",
          "Count the boxes to get the ratio of genotypes, then work out the phenotypes.",
          "Two heterozygous parents (Bb × Bb) give 3:1 dominant to recessive — the classic result.",
          "A heterozygous crossed with a homozygous recessive (Bb × bb) gives 1:1.",
          "The result is a PROBABILITY, not a guarantee. Four children of Bb × Bb parents can all have the disorder.",
        ],
      },
      {
        heading: "Sex determination",
        points: [
          "Humans have 23 pairs of chromosomes; the 23rd pair determines biological sex.",
          "Females are XX; males are XY.",
          "An egg always carries an X. A sperm carries either an X or a Y.",
          "So the sperm determines the sex of the offspring, and the ratio is 50:50.",
          "A Punnett square of XX × XY gives two XX and two XY — a 50% chance of each.",
        ],
      },
      {
        heading: "Inherited disorders and screening",
        points: [
          "POLYDACTYLY — extra fingers or toes. Caused by a DOMINANT allele, so one parent having it is enough.",
          "CYSTIC FIBROSIS — a disorder of cell membranes affecting the lungs and digestion. Caused by a RECESSIVE allele.",
          "Because cystic fibrosis is recessive, two carriers who do not have it can still have an affected child.",
          "Embryos can be screened during IVF, and unborn babies tested during pregnancy.",
          "Arguments against screening: it may lead to termination, tests carry a small risk, and it raises fears of choosing other characteristics.",
          "Arguments for: it reduces suffering, helps parents prepare, and can save treatment costs.",
        ],
      },
    ],
    flashcards: [
      { term: "Allele", definition: "A different version of the same gene." },
      { term: "Dominant allele", definition: "An allele expressed even when only one copy is present, written as a capital letter." },
      { term: "Recessive allele", definition: "An allele expressed only when both copies are present, written as a lower-case letter." },
      { term: "Homozygous", definition: "Having two identical alleles for a gene, such as BB or bb." },
      { term: "Heterozygous", definition: "Having two different alleles for a gene, such as Bb." },
      { term: "Genotype", definition: "The combination of alleles an organism has for a gene." },
      { term: "Phenotype", definition: "The observable characteristic that results from the genotype." },
      { term: "Carrier", definition: "A heterozygous individual who does not have a recessive disorder but can pass it on." },
      { term: "Punnett square", definition: "A grid used to predict the possible genotypes of offspring from two parents." },
      { term: "Polydactyly", definition: "An inherited disorder causing extra fingers or toes, caused by a dominant allele." },
      { term: "Cystic fibrosis", definition: "An inherited disorder of cell membranes affecting lungs and digestion, caused by a recessive allele." },
      { term: "Sex chromosomes", definition: "The 23rd pair of chromosomes: XX in females and XY in males." },
      { term: "Embryo screening", definition: "Testing an embryo for genetic disorders before it is implanted during IVF." },
      { term: "Gene", definition: "A section of DNA coding for a protein, and the unit that is inherited." },
      { term: "Probability", definition: "The chance of an outcome — what a Punnett square predicts, rather than a certainty." },
    ],
    examTips: [
      {
        tip: "Capital for dominant, lower case for the SAME letter",
        detail:
          "Use B and b, never B and c. Different letters mean different genes, and examiners will mark it wrong.",
      },
      {
        tip: "Genotype is the letters, phenotype is what you see",
        detail:
          "Bb is a genotype. 'Brown eyes' is a phenotype. Questions ask for one specifically, and giving the other scores nothing.",
      },
      {
        tip: "Always draw the Punnett square, even if you can do it in your head",
        detail:
          "The grid itself carries marks, and it stops arithmetic slips. Label which parent is which.",
      },
      {
        tip: "Answers are probabilities, not predictions",
        detail:
          "'A 25% chance' or '1 in 4', not 'one of the four children will have it'. That distinction is frequently the difference in an exam.",
      },
      {
        tip: "Remember which disorder is which",
        detail:
          "Polydactyly is DOMINANT; cystic fibrosis is RECESSIVE. Getting them the wrong way round wrecks the whole Punnett square.",
      },
      {
        tip: "Give both sides on screening",
        detail:
          "Reducing suffering and preparing parents, against the risk to the pregnancy and fears about selecting other traits. Then reach a judgement.",
      },
    ],
    workedExamples: [
      {
        question:
          "Both parents are carriers of cystic fibrosis (Ff). Use a Punnett square to find the probability of a child having the disorder.",
        steps: [
          "Cystic fibrosis is recessive, so an affected child must be ff.",
          "Put F and f along the top for one parent, and F and f down the side for the other.",
          "The four boxes give: FF, Ff, Ff, ff.",
          "Only one of the four is ff, so the probability is 1 in 4, or 25%.",
        ],
        answer: "25%, or a 1 in 4 chance",
      },
      {
        question:
          "One parent has polydactyly and is heterozygous (Dd); the other does not have it (dd). Find the probability of a child having polydactyly.",
        steps: [
          "Polydactyly is dominant, so having even one D means having the condition.",
          "Punnett square with D and d across the top, d and d down the side.",
          "The four boxes give: Dd, dd, Dd, dd.",
          "Two of the four contain a D, so the probability is 2 in 4 — 1 in 2, or 50%.",
        ],
        answer: "50%, or a 1 in 2 chance",
      },
    ],
    practice: [
      {
        question: "What is a different version of the same gene called?",
        accept: ["allele", "an allele", "alleles"],
        answer:
          "An allele. You inherit one of each pair from each parent, and which combination you get determines the characteristic.",
      },
      {
        question: "What word describes an allele expressed even when only one copy is present?",
        accept: ["dominant", "a dominant allele"],
        answer:
          "Dominant, written as a capital letter. A recessive allele is only expressed when both copies are recessive.",
      },
      {
        question: "What word describes having two identical alleles for a gene?",
        accept: ["homozygous"],
        answer:
          "Homozygous, such as BB or bb. Two different alleles — Bb — is heterozygous.",
      },
      {
        question: "What word describes having two different alleles for a gene?",
        accept: ["heterozygous"],
        answer:
          "Heterozygous, such as Bb. For a recessive disorder, a heterozygous person is a carrier — unaffected but able to pass it on.",
      },
      {
        question: "Is 'brown eyes' a genotype or a phenotype?",
        accept: ["phenotype", "a phenotype"],
        answer:
          "A phenotype — the characteristic you can observe. The genotype would be the alleles, such as Bb.",
      },
      {
        question: "What are the sex chromosomes of a human female?",
        accept: ["xx", "x and x"],
        answer:
          "XX. Males are XY, so an egg always carries an X and it is the sperm that determines the sex of the child.",
      },
      {
        question: "Which parent's gamete determines the sex of a child?",
        accept: ["father", "the father", "male", "sperm", "the sperm", "the male"],
        answer:
          "The father's, because the sperm may carry either an X or a Y while every egg carries an X. The ratio is 50:50.",
      },
      {
        question: "Is polydactyly caused by a dominant or a recessive allele?",
        accept: ["dominant", "a dominant allele"],
        answer:
          "Dominant. That is why one affected parent is enough to pass it on, unlike cystic fibrosis.",
      },
      {
        question: "Is cystic fibrosis caused by a dominant or a recessive allele?",
        accept: ["recessive", "a recessive allele"],
        answer:
          "Recessive. Both alleles must be recessive for the disorder to appear, which is why two unaffected carriers can have an affected child.",
      },
      {
        question: "Two carriers of cystic fibrosis (Ff) have a child. What is the percentage chance it has the disorder? Give the number only.",
        accept: ["25", "25%"],
        answer:
          "25%. The Punnett square gives FF, Ff, Ff, ff — only the ff child is affected, so 1 in 4.",
      },
      {
        question: "Two carriers (Ff) have a child. What is the percentage chance it is a carrier but unaffected? Give the number only.",
        accept: ["50", "50%"],
        answer:
          "50%. Two of the four boxes are Ff. Read the question carefully — 'carrier' and 'affected' are different outcomes.",
      },
      {
        question: "A heterozygous parent (Dd) and a homozygous recessive parent (dd) have a child. What percentage chance is there that it inherits D? Give the number only.",
        accept: ["50", "50%"],
        answer:
          "50%. The square gives Dd, dd, Dd, dd — two of four carry a D, so a 1 in 2 chance.",
      },
      {
        question: "What is the name for a heterozygous person who can pass on a recessive disorder without having it?",
        accept: ["carrier", "a carrier"],
        answer:
          "A carrier. It explains how a disorder can appear in a child when neither parent shows any sign of it.",
      },
      {
        question: "True or false: if a Punnett square shows a 25% chance, exactly one in every four children will be affected.",
        accept: ["false", "f"],
        answer:
          "False. It is a probability for each child independently. Four children of two carriers could all be affected, or none — chance does not even itself out.",
      },
      {
        question: "Explain how two parents without cystic fibrosis can have a child who has it. Write two or three sentences.",
        answer:
          "Cystic fibrosis is caused by a recessive allele, so a person only has the disorder if both of their alleles are recessive. Both parents can be heterozygous carriers — each has one recessive and one dominant allele, so neither shows the disorder. If each parent passes on their recessive allele, the child is homozygous recessive and has cystic fibrosis, which happens with a probability of 1 in 4. Mark this one yourself: credit yourself for 'carrier', for both parents passing the recessive allele, and for the 1 in 4.",
      },
      {
        question: "Discuss the arguments for and against screening embryos for genetic disorders.",
        answer:
          "In favour: it can prevent a child being born with a painful, life-shortening condition, allows parents to prepare or make an informed choice, and reduces the long-term cost of treatment to health services. Against: it may lead to the termination of embryos, which some people believe is wrong; the tests themselves carry a small risk to the pregnancy; and there is a concern that the same technology could be used to select non-medical characteristics such as appearance or intelligence. Mark this one yourself: full marks need genuine arguments on both sides and a reasoned conclusion.",
      },
    ],
    misconceptions: [
      {
        wrong: "Genotype and phenotype mean the same thing.",
        right:
          "Genotype is the alleles you carry (Bb); phenotype is the characteristic that results (brown eyes). Questions ask for one specifically.",
      },
      {
        wrong: "A 1 in 4 chance means one of every four children will be affected.",
        right:
          "It is a probability applying independently to each child. All four could be affected, or none at all.",
      },
      {
        wrong: "Dominant means the allele is more common in the population.",
        right:
          "It means it is expressed when present. Polydactyly is dominant and rare; many recessive alleles are extremely common.",
      },
      {
        wrong: "The mother determines the sex of the baby.",
        right:
          "Every egg carries an X. The sperm carries X or Y, so the father's gamete determines it.",
      },
      {
        wrong: "Carriers have a mild form of the disorder.",
        right:
          "A carrier is heterozygous and is completely unaffected. They simply have one copy of the recessive allele to pass on.",
      },
    ],
  },

  "biology/variation-and-evolution": {
    summary:
      "Evolution is the single idea that ties the whole of Biology together. This topic covers where variation comes from, how natural selection turns it into adaptation over enormous stretches of time, the evidence that convinced biologists, and speciation — how one species becomes two. Speciation is Higher tier only and is flagged.",
    keyFacts: [
      {
        heading: "Variation",
        points: [
          "Differences between individuals of the same species arise from GENES, the ENVIRONMENT, or both together.",
          "Genetic variation comes from meiosis, the random fusion of gametes at fertilisation, and MUTATION.",
          "A MUTATION is a random change in DNA. Most have no effect at all on the phenotype.",
          "A few mutations change the protein enough to alter the phenotype.",
          "Very rarely, a mutation gives an advantage — and that is the raw material natural selection works on.",
        ],
      },
      {
        heading: "Natural selection",
        points: [
          "Individuals within a species show variation.",
          "Those with characteristics best suited to the environment are more likely to SURVIVE.",
          "Survivors are more likely to BREED and pass on the alleles for those characteristics.",
          "Over many generations the beneficial alleles become more common in the population.",
          "Given enough time this changes the species — which is evolution.",
          "Darwin published 'On the Origin of Species' in 1859; the theory was accepted only slowly.",
        ],
      },
      {
        heading: "Evidence and objections",
        points: [
          "FOSSILS show how organisms have changed over millions of years.",
          "The fossil record is incomplete, because soft-bodied organisms rarely fossilise and many fossils have been destroyed.",
          "ANTIBIOTIC RESISTANCE in bacteria is evolution observable within a human lifetime.",
          "Darwin's theory was resisted because it conflicted with religious belief, there was little evidence at first, and genes were not yet understood.",
          "LAMARCK proposed that characteristics acquired during life are inherited — a giraffe stretching its neck. This was shown to be wrong.",
          "Mendel's work on inheritance, done in the 1860s, was not recognised until after his death, which delayed acceptance further.",
        ],
      },
      {
        heading: "Antibiotic resistance",
        points: [
          "A random mutation makes one bacterium resistant to an antibiotic.",
          "When the antibiotic is used, non-resistant bacteria die but the resistant one survives.",
          "With the competition removed it reproduces rapidly, and the whole population becomes resistant.",
          "Slowing it down: do not prescribe antibiotics for viral infections or minor conditions, and always FINISH the course.",
          "Finishing the course matters because stopping early leaves the partly-resistant bacteria alive to multiply.",
          "MRSA is the standard example, and developing new antibiotics is slow and expensive.",
        ],
      },
      {
        heading: "Higher tier: speciation",
        higherOnly: true,
        points: [
          "A SPECIES is a group whose members can breed together to produce FERTILE offspring.",
          "Speciation begins when two populations of one species become ISOLATED, so they can no longer interbreed.",
          "The two populations experience different conditions, so natural selection favours different characteristics in each.",
          "Over many generations they become so genetically different that, even if reunited, they can no longer produce fertile offspring.",
          "At that point they are two separate species.",
          "Foundation students are not examined on speciation and can skip this section.",
        ],
      },
    ],
    flashcards: [
      { term: "Variation", definition: "Differences between individuals of the same species, caused by genes, environment or both." },
      { term: "Mutation", definition: "A random change in DNA. Most have no effect on the phenotype." },
      { term: "Natural selection", definition: "The process by which individuals best suited to their environment survive, breed and pass on their alleles." },
      { term: "Evolution", definition: "The change in the inherited characteristics of a population over time through natural selection." },
      { term: "Adaptation", definition: "A characteristic that makes an organism better suited to its environment." },
      { term: "Fossil", definition: "The preserved remains or traces of an organism from millions of years ago." },
      { term: "Fossil record", definition: "The collected evidence from fossils, which is incomplete because soft tissue rarely fossilises." },
      { term: "Antibiotic resistance", definition: "When bacteria evolve so that an antibiotic no longer kills them." },
      { term: "MRSA", definition: "A strain of bacteria resistant to many antibiotics, and the standard example of resistance." },
      { term: "Lamarck", definition: "A scientist who wrongly proposed that characteristics acquired during an organism's life are inherited." },
      { term: "Darwin", definition: "The scientist who proposed evolution by natural selection, publishing On the Origin of Species in 1859." },
      { term: "Species", definition: "A group of organisms that can breed together to produce fertile offspring." },
      { term: "Speciation", definition: "The formation of a new species when isolated populations become too different to interbreed. Higher tier only." },
      { term: "Isolation", definition: "When two populations are separated so they can no longer interbreed — the first step in speciation." },
      { term: "Extinction", definition: "When no individuals of a species remain anywhere." },
    ],
    examTips: [
      {
        tip: "Write natural selection as four steps, in order",
        detail:
          "Variation exists → the best suited survive → they breed and pass on alleles → the alleles become more common. Each step carries a mark.",
      },
      {
        tip: "Individuals do NOT adapt — populations evolve",
        detail:
          "A bacterium does not become resistant because it met an antibiotic. It was already resistant by chance mutation, and it survived. This is the most examined misunderstanding in the topic.",
      },
      {
        tip: "Say 'more likely to survive', not 'will survive'",
        detail:
          "Natural selection works on probabilities. Absolute language loses marks in the higher bands.",
      },
      {
        tip: "Explain the fossil record's gaps",
        detail:
          "Soft-bodied organisms rarely fossilise, many fossils have been destroyed by geological activity, and many remain undiscovered. Any one of the three scores.",
      },
      {
        tip: "Know WHY Darwin was resisted",
        detail:
          "It conflicted with religious belief, the evidence was thin at first, and the mechanism of inheritance was unknown. Three separate reasons, three possible marks.",
      },
      {
        tip: "Higher tier: speciation needs ISOLATION first",
        detail:
          "Isolation, then different selection pressures, then genetic difference, then inability to produce fertile offspring. Foundation students can skip this entirely.",
      },
    ],
    practice: [
      {
        question: "What is a random change in DNA called?",
        accept: ["mutation", "a mutation", "mutations"],
        answer:
          "A mutation. Most have no effect on the phenotype at all; very rarely one gives an advantage, and that is what natural selection can act on.",
      },
      {
        question: "Who published 'On the Origin of Species'?",
        accept: ["darwin", "charles darwin"],
        answer:
          "Charles Darwin, in 1859. His theory was accepted only slowly, partly because the mechanism of inheritance was not yet understood.",
      },
      {
        question: "In which year was 'On the Origin of Species' published? Give the number only.",
        accept: ["1859"],
        answer:
          "1859. Mendel's work on inheritance came a few years later but went unrecognised until after his death, which delayed acceptance of Darwin's theory.",
      },
      {
        question: "Which scientist wrongly proposed that characteristics acquired during life are inherited?",
        accept: ["lamarck", "jean-baptiste lamarck"],
        answer:
          "Lamarck. His giraffe stretching its neck and passing on a longer neck is the standard example of why the idea fails.",
      },
      {
        question: "What is a group of organisms that can breed to produce fertile offspring called?",
        accept: ["species", "a species"],
        answer:
          "A species. The word FERTILE matters: a horse and a donkey can breed, but the mule is infertile, so they remain separate species.",
      },
      {
        question: "Higher tier: what is the formation of a new species called?",
        accept: ["speciation"],
        answer:
          "Speciation. It begins with isolation, then different selection pressures act on each population until they can no longer interbreed. Foundation students are not asked this.",
        higherOnly: true,
      },
      {
        question: "Higher tier: what must happen to two populations FIRST for speciation to begin?",
        accept: ["isolation", "isolated", "separated", "become isolated", "geographical isolation"],
        answer:
          "They must become isolated, so they can no longer interbreed. Only then can natural selection push them in different directions.",
        higherOnly: true,
      },
      {
        question: "What is the main evidence from the distant past for evolution?",
        accept: ["fossils", "fossil record", "the fossil record", "fossil"],
        answer:
          "Fossils. The record is incomplete, though — soft-bodied organisms rarely fossilise, and many fossils have been destroyed or not yet found.",
      },
      {
        question: "Give one reason the fossil record is incomplete.",
        accept: ["soft bodies", "soft tissue", "destroyed", "not found", "undiscovered", "geological activity", "soft bodied organisms", "decay"],
        answer:
          "Soft-bodied organisms rarely fossilise, many fossils have been destroyed by geological activity, and many are still undiscovered.",
      },
      {
        question: "What example of evolution can be observed within a human lifetime?",
        accept: ["antibiotic resistance", "resistance", "bacteria", "mrsa", "antibiotic resistant bacteria"],
        answer:
          "Antibiotic resistance in bacteria. They reproduce so fast that natural selection produces visible change in months rather than millennia.",
      },
      {
        question: "Give one way to slow the development of antibiotic resistance.",
        accept: ["finish the course", "dont prescribe for viruses", "fewer prescriptions", "complete the course", "only when necessary", "not for viral infections", "reduce use"],
        answer:
          "Finish the whole course, and do not prescribe antibiotics for viral or minor infections. Stopping early leaves the hardiest bacteria alive to multiply.",
      },
      {
        question: "What is a strain of bacteria resistant to many antibiotics, often used as the standard example, called?",
        accept: ["mrsa"],
        answer:
          "MRSA. Developing new antibiotics is slow and expensive, which is why slowing resistance matters so much.",
      },
      {
        question: "True or false: bacteria become resistant because the antibiotic makes them change.",
        accept: ["false", "f"],
        answer:
          "False, and this is the most examined misunderstanding in the topic. A random mutation makes one bacterium resistant BEFORE the antibiotic arrives; the antibiotic then kills the rest.",
      },
      {
        question: "What is it called when no individuals of a species remain anywhere?",
        accept: ["extinction", "extinct"],
        answer:
          "Extinction. Causes include a changing environment, a new predator or disease, a catastrophic event, or competition from another species.",
      },
      {
        question: "Explain how bacteria become resistant to an antibiotic. Write three or four sentences.",
        answer:
          "A random mutation in one bacterium's DNA happens to make it resistant to the antibiotic — this occurs by chance, before the antibiotic is used. When the antibiotic is then given, the non-resistant bacteria are killed but the resistant one survives. With its competitors gone it reproduces rapidly, and since bacteria divide very quickly the whole population soon carries the resistant allele. The important point is that the antibiotic does not CAUSE the resistance; it selects for a mutation that was already there. Mark this one yourself: the last sentence is the one that separates a good answer from a top one.",
      },
      {
        question: "Explain why Darwin's theory of evolution was only slowly accepted.",
        answer:
          "It challenged the widely held religious belief that God created all life, so many people rejected it on principle. There was also very little evidence when he published: the fossil record was patchy and no transitional forms were known. Most importantly, nobody yet understood how characteristics were inherited — Mendel's work on genetics was done in the 1860s but not recognised until decades later — so Darwin could not explain the mechanism by which variation was passed on. Mark this one yourself: three distinct reasons is full marks; religion alone is not enough.",
      },
    ],
    misconceptions: [
      {
        wrong: "Organisms adapt during their lifetime and pass the change on.",
        right:
          "That is Lamarck's idea, and it is wrong. Variation exists by chance BEFORE selection acts; individuals do not change to suit the environment.",
      },
      {
        wrong: "Antibiotics make bacteria become resistant.",
        right:
          "The mutation happens randomly first. The antibiotic then kills everything except the bacterium that already had it, which is selection, not cause.",
      },
      {
        wrong: "Evolution has a goal and organisms are becoming more advanced.",
        right:
          "Natural selection favours whatever works in the current environment. Change the environment and yesterday's advantage becomes today's handicap.",
      },
      {
        wrong: "The strongest always survive.",
        right:
          "It is the best SUITED to the environment, which can mean smallest, best camouflaged or most resistant to disease. 'Strongest' is a misreading.",
      },
      {
        wrong: "Two organisms that can breed are the same species.",
        right:
          "The offspring must be FERTILE. A horse and donkey produce a mule, which cannot reproduce, so they remain separate species.",
      },
    ],
  },

  "biology/classification-and-selection": {
    summary:
      "Classification is how biologists organise millions of species into a system that reflects how they are actually related. This topic covers the traditional system and how DNA changed it, evolutionary trees, and selective breeding and genetic engineering — where humans do deliberately what natural selection does slowly.",
    keyFacts: [
      {
        heading: "Traditional classification",
        points: [
          "LINNAEUS classified organisms by their structure and characteristics.",
          "His groups run: kingdom, phylum, class, order, family, genus, species.",
          "The BINOMIAL name uses the genus and species, in italics, with the genus capitalised — Homo sapiens.",
          "Binomial naming means every scientist worldwide uses the same name for the same organism.",
          "This system was built on visible features, which is why improved microscopes and biochemistry later forced changes.",
        ],
      },
      {
        heading: "The three-domain system",
        points: [
          "CARL WOESE proposed three domains using RNA sequencing rather than appearance.",
          "ARCHAEA — primitive bacteria, often living in extreme environments.",
          "BACTERIA — true bacteria.",
          "EUKARYOTA — everything with a nucleus: protists, fungi, plants and animals.",
          "The change happened because new evidence — chemical analysis and DNA — revealed relationships appearance had hidden.",
          "This is a good example of a scientific model changing when better evidence arrives.",
        ],
      },
      {
        heading: "Evolutionary trees",
        points: [
          "An evolutionary tree shows how closely species are related and when they shared a common ancestor.",
          "Living organisms are placed using DNA evidence; extinct ones using fossils.",
          "A branch point is a COMMON ANCESTOR.",
          "The closer together two species branch, the more recently they diverged and the more closely related they are.",
          "Reading a tree correctly is a common exam question — count back to the shared branch point, not across the page.",
        ],
      },
      {
        heading: "Selective breeding and genetic engineering",
        points: [
          "SELECTIVE BREEDING: choose parents with the desired characteristic, breed them, then repeat over many generations.",
          "Used for disease resistance in crops, high milk yield in cattle, gentle temperament in dogs, large flowers.",
          "Risk: it reduces the gene pool, so a population becomes vulnerable to disease and to inherited defects.",
          "GENETIC ENGINEERING: a gene is cut from one organism and inserted into another using enzymes and a vector.",
          "Examples: bacteria producing human insulin, crops resistant to insects or herbicide, crops with added vitamins.",
          "Concerns: effects on wild flowers and insects, unknown long-term health effects, and whether it is right to alter genomes at all.",
        ],
      },
    ],
    flashcards: [
      { term: "Classification", definition: "Organising living things into groups based on how closely they are related." },
      { term: "Linnaeus", definition: "The scientist who classified organisms by structure into kingdom, phylum, class, order, family, genus and species." },
      { term: "Binomial name", definition: "The two-part scientific name of an organism, using its genus and species." },
      { term: "Genus", definition: "The classification group just above species, and the first part of a binomial name." },
      { term: "Three-domain system", definition: "Woese's classification into Archaea, Bacteria and Eukaryota, based on RNA sequencing." },
      { term: "Archaea", definition: "Primitive single-celled organisms, often found in extreme environments." },
      { term: "Eukaryota", definition: "The domain containing all organisms whose cells have a nucleus." },
      { term: "Evolutionary tree", definition: "A diagram showing how closely species are related and when they shared common ancestors." },
      { term: "Common ancestor", definition: "A species from which two or more later species both descended." },
      { term: "Selective breeding", definition: "Choosing parents with a desired characteristic and breeding them over many generations." },
      { term: "Gene pool", definition: "The total variety of alleles in a population — reduced by selective breeding." },
      { term: "Inbreeding", definition: "Breeding closely related individuals, which increases the risk of inherited disease." },
      { term: "Genetic engineering", definition: "Transferring a gene from one organism into another to give it a desired characteristic." },
      { term: "Vector", definition: "Something used to carry a gene into a cell, such as a plasmid or a virus." },
      { term: "GM crop", definition: "A genetically modified crop, altered for higher yield, pest resistance or added nutrients." },
    ],
    examTips: [
      {
        tip: "Learn the order of Linnaeus's groups",
        detail:
          "Kingdom, phylum, class, order, family, genus, species. Make up a mnemonic — the order is worth a mark and is easy to muddle.",
      },
      {
        tip: "Write binomial names correctly",
        detail:
          "Genus capitalised, species lower case, both italicised: Homo sapiens. The convention itself can be examined.",
      },
      {
        tip: "Say WHY classification changed",
        detail:
          "New evidence — microscopes, chemical analysis and DNA — revealed relationships that appearance had hidden. It is a model changing with evidence.",
      },
      {
        tip: "Read evolutionary trees by branch point",
        detail:
          "The more recently two species share a branch, the more closely related they are. Being physically near on the page means nothing.",
      },
      {
        tip: "Always give the gene pool risk for selective breeding",
        detail:
          "Reduced variation means vulnerability to a single disease and more inherited defects. It is the standard drawback and an easy mark.",
      },
      {
        tip: "Give both sides on genetic engineering",
        detail:
          "Higher yields and medical benefits against ecological and health uncertainty. Then reach a judgement — the conclusion is where the top marks are.",
      },
    ],
    practice: [
      {
        question: "Which scientist devised the classification system of kingdom, phylum, class, order, family, genus, species?",
        accept: ["linnaeus", "carl linnaeus", "carolus linnaeus"],
        answer:
          "Linnaeus. He classified organisms by their visible structure, which is exactly why the system had to change once DNA evidence arrived.",
      },
      {
        question: "Which two classification groups make up an organism's binomial name?",
        accept: ["genus and species", "species and genus", "genus, species"],
        answer:
          "Genus and species — as in Homo sapiens. The genus is capitalised, the species is not, and both are italicised.",
      },
      {
        question: "Which scientist proposed the three-domain system?",
        accept: ["woese", "carl woese"],
        answer:
          "Carl Woese. He used RNA sequencing rather than appearance, which revealed relationships that structure alone had completely hidden.",
      },
      {
        question: "Name one of the three domains.",
        accept: ["archaea", "bacteria", "eukaryota", "eukaryote", "eukarya"],
        answer:
          "Archaea, Bacteria or Eukaryota. Eukaryota contains everything with a nucleus — protists, fungi, plants and animals.",
      },
      {
        question: "Which domain contains all organisms whose cells have a nucleus?",
        accept: ["eukaryota", "eukarya", "eukaryotes", "eukaryote"],
        answer:
          "Eukaryota. That single domain covers protists, fungi, plants and animals — everything from a mushroom to a whale.",
      },
      {
        question: "What is shown at a branch point on an evolutionary tree?",
        accept: ["common ancestor", "a common ancestor", "shared ancestor", "ancestor"],
        answer:
          "A common ancestor. The more recently two species share a branch point, the more closely related they are.",
      },
      {
        question: "What is the process of choosing parents with desired characteristics and breeding them called?",
        accept: ["selective breeding", "artificial selection"],
        answer:
          "Selective breeding, sometimes called artificial selection. Humans do deliberately over decades what natural selection does slowly over millennia.",
      },
      {
        question: "What is the main risk of selective breeding?",
        accept: ["reduced gene pool", "inbreeding", "less variation", "gene pool", "disease", "inherited disease", "reduced variation"],
        answer:
          "It reduces the gene pool. With less variation the population is vulnerable to a single disease wiping it out, and inherited defects become more common.",
      },
      {
        question: "What is the total variety of alleles in a population called?",
        accept: ["gene pool", "the gene pool"],
        answer:
          "The gene pool. Selective breeding shrinks it, which is why pedigree dog breeds suffer so many inherited health problems.",
      },
      {
        question: "What is the process of transferring a gene from one organism into another called?",
        accept: ["genetic engineering", "genetic modification", "gm", "genetic engineering"],
        answer:
          "Genetic engineering. Enzymes cut out the gene and a vector, such as a plasmid or a virus, carries it into the target cell.",
      },
      {
        question: "What is used to carry a gene into a cell during genetic engineering?",
        accept: ["vector", "a vector", "plasmid", "virus", "plasmids"],
        answer:
          "A vector — usually a plasmid or a virus. It is the delivery mechanism that gets the gene inside the target cell.",
      },
      {
        question: "Name one useful product made by genetically engineered bacteria.",
        accept: ["insulin", "human insulin", "hormones", "medicine", "drugs"],
        answer:
          "Human insulin. Before genetic engineering it had to be extracted from animals, which was expensive and produced a slightly different molecule.",
      },
      {
        question: "Give one concern about genetically modified crops.",
        accept: ["effects on insects", "wild flowers", "health", "unknown effects", "biodiversity", "ecology", "long term effects", "environment", "ethics"],
        answer:
          "Effects on wild flowers and insect populations, unknown long-term health effects, and the ethical question of whether altering genomes is right.",
      },
      {
        question: "Why does every scientist worldwide use the same binomial name for an organism?",
        accept: ["avoid confusion", "same name", "universal", "common names differ", "clarity", "international", "no confusion"],
        answer:
          "Because common names differ between languages and even between regions. A single agreed scientific name removes all ambiguity.",
      },
      {
        question: "Explain why the classification of living things changed to the three-domain system. Write two or three sentences.",
        answer:
          "Linnaeus classified organisms by their visible structure, which was the only evidence available at the time. Improved microscopes, chemical analysis and especially RNA and DNA sequencing later revealed relationships that appearance had concealed — some organisms that looked similar turned out to be only distantly related. Woese therefore proposed three domains based on genetic evidence, which is a clear example of a scientific model being revised when better evidence arrives. Mark this one yourself: the point about models changing with evidence is worth credit in itself.",
      },
      {
        question: "Discuss the benefits and risks of genetically modifying crops.",
        answer:
          "The benefits are real: crops can be made resistant to insects or herbicide, which raises yield and reduces pesticide use, and vitamins can be added to staple crops to address deficiency in poorer countries. Against that, the effect on wild plants and insect populations is not fully understood, and there is concern that reduced insect numbers could damage food chains. Some people also worry about unknown long-term effects on human health, and others object in principle to altering an organism's genome. On balance the technology offers clear benefits where hunger and malnutrition are severe, but it warrants careful regulation and long-term monitoring rather than blanket approval or blanket rejection. Mark this one yourself: full marks need both sides plus a reasoned judgement.",
      },
    ],
    misconceptions: [
      {
        wrong: "Species that look similar must be closely related.",
        right:
          "Appearance can mislead — a dolphin looks like a fish. DNA evidence is what actually establishes relatedness, which is why classification changed.",
      },
      {
        wrong: "Species next to each other on an evolutionary tree are the most closely related.",
        right:
          "What matters is where they share a BRANCH POINT, not how near they are drawn on the page.",
      },
      {
        wrong: "Selective breeding and genetic engineering are the same thing.",
        right:
          "Selective breeding chooses which existing organisms breed, over many generations. Genetic engineering moves a specific gene directly.",
      },
      {
        wrong: "Selective breeding has no downsides because it is natural.",
        right:
          "It shrinks the gene pool, which is why many pedigree breeds suffer inherited disease and why monoculture crops are vulnerable to a single pathogen.",
      },
    ],
  },

  "biology/ecosystems-and-food-chains": {
    summary:
      "An ecosystem is every living thing in an area plus everything non-living they depend on. This topic covers how organisms compete and depend on each other, how energy and biomass move along a food chain, how materials are recycled, and the sampling techniques you are expected to be able to describe and criticise.",
    keyFacts: [
      {
        heading: "Communities and interdependence",
        points: [
          "A HABITAT is where an organism lives; a POPULATION is all the organisms of one species there.",
          "A COMMUNITY is all the populations of all species in an area; an ECOSYSTEM is the community plus the non-living surroundings.",
          "INTERDEPENDENCE means species rely on each other for food, shelter, pollination and seed dispersal.",
          "Remove one species and others are affected — a STABLE community is one where all species and conditions are in balance.",
          "Plants compete for light, space, water and mineral ions. Animals compete for food, territory and mates.",
        ],
      },
      {
        heading: "Abiotic and biotic factors",
        points: [
          "ABIOTIC means non-living: light intensity, temperature, moisture, soil pH, wind, and carbon dioxide or oxygen levels.",
          "BIOTIC means living: availability of food, new predators, new pathogens, and competition from other species.",
          "A change in either can dramatically change the size of a population.",
          "ADAPTATIONS let organisms survive their conditions: structural (body shape), behavioural (migration), and functional (metabolism).",
          "EXTREMOPHILES live in conditions such as high temperature, pressure or salt concentration — many are bacteria.",
        ],
      },
      {
        heading: "Food chains and biomass",
        points: [
          "PRODUCERS are usually green plants or algae, which make glucose by photosynthesis.",
          "PRIMARY consumers eat producers; SECONDARY consumers eat primary consumers, and so on.",
          "An APEX PREDATOR is at the top of a food chain with no natural predators.",
          "Only about 10% of the biomass at each level is passed on to the next.",
          "Biomass is lost because not all of an organism is eaten or digestible, and because energy is used in respiration and lost in waste and as heat.",
          "That loss is why food chains rarely have more than four or five links.",
        ],
      },
      {
        heading: "Cycling materials and decay",
        points: [
          "Materials are constantly recycled between the living world and the environment.",
          "The CARBON CYCLE: photosynthesis removes CO₂; respiration, decay and combustion return it.",
          "The WATER CYCLE: evaporation, condensation, precipitation, and transpiration from plants.",
          "DECOMPOSERS — bacteria and fungi — break down dead material and release mineral ions back into the soil.",
          "Decay is faster when it is warm, moist and there is plenty of oxygen, because those conditions suit the decomposers.",
          "Compost heaps and biogas generators are practical applications of controlling decay conditions.",
        ],
      },
      {
        heading: "Sampling",
        points: [
          "A QUADRAT is a square frame used to count organisms in a set area.",
          "Place quadrats RANDOMLY to avoid bias — using random number coordinates rather than choosing where to put them.",
          "Mean per quadrat × total area ÷ quadrat area estimates the population size.",
          "A TRANSECT is a line along which quadrats are placed at intervals, used to study how distribution CHANGES across a gradient.",
          "More quadrats give a more reliable estimate, at the cost of more time.",
        ],
      },
    ],
    flashcards: [
      { term: "Habitat", definition: "The place where an organism lives." },
      { term: "Population", definition: "All the organisms of one species living in a habitat." },
      { term: "Community", definition: "All the populations of all the different species living in an area." },
      { term: "Ecosystem", definition: "A community of organisms together with the non-living parts of their environment." },
      { term: "Interdependence", definition: "The way species in a community rely on each other for food, shelter, pollination and seed dispersal." },
      { term: "Abiotic factor", definition: "A non-living factor affecting a community, such as light, temperature or soil pH." },
      { term: "Biotic factor", definition: "A living factor affecting a community, such as predators, food availability or disease." },
      { term: "Producer", definition: "An organism that makes its own food by photosynthesis, at the start of a food chain." },
      { term: "Primary consumer", definition: "An animal that eats producers." },
      { term: "Apex predator", definition: "A carnivore at the top of a food chain with no natural predators." },
      { term: "Biomass", definition: "The mass of living material in an organism or trophic level." },
      { term: "Decomposer", definition: "A bacterium or fungus that breaks down dead material, releasing minerals back into the soil." },
      { term: "Quadrat", definition: "A square frame used to sample the number of organisms in a set area." },
      { term: "Transect", definition: "A line along which samples are taken, used to study how distribution changes across an area." },
      { term: "Extremophile", definition: "An organism adapted to live in extreme conditions of temperature, pressure or salt concentration." },
      { term: "Stable community", definition: "One where all species and environmental factors are in balance, so population sizes stay roughly constant." },
    ],
    examTips: [
      {
        tip: "Learn the hierarchy: habitat, population, community, ecosystem",
        detail:
          "Each contains the one before. Questions ask you to define or distinguish them, and mixing them up is an easy mark to lose.",
      },
      {
        tip: "Abiotic is non-living, biotic is living",
        detail:
          "The prefix 'a-' means without. Sorting factors into the two columns is a standard question worth several quick marks.",
      },
      {
        tip: "Explain biomass loss with more than one reason",
        detail:
          "Not all of it is eaten, not all is digestible, and energy is used in respiration and lost as heat and in waste. Two reasons is usually the minimum.",
      },
      {
        tip: "Say RANDOM when describing quadrat placement",
        detail:
          "Random placement avoids bias. Use a transect only when you are studying how distribution CHANGES across a gradient — the two are not interchangeable.",
      },
      {
        tip: "Give the conditions decay needs",
        detail:
          "Warm, moist and oxygen-rich, because decomposers respire. Linking it back to the decomposers' own needs is what earns the explanation mark.",
      },
      {
        tip: "Use the data given in population questions",
        detail:
          "Mean per quadrat × total area ÷ quadrat area. Show every step, and check the answer is a sensible size for the field described.",
      },
    ],
    workedExamples: [
      {
        question:
          "Ten 1 m² quadrats are placed randomly in a 500 m² field. The total number of daisies counted is 65. Estimate the daisy population.",
        steps: [
          "Find the mean per quadrat: 65 ÷ 10 = 6.5 daisies per m².",
          "The quadrat area is 1 m², so the mean per m² is 6.5.",
          "Multiply by the total area: 6.5 × 500.",
          "= 3,250 daisies. Estimates like this assume the quadrats were representative, which is why random placement matters.",
        ],
        answer: "About 3,250 daisies",
      },
      {
        question:
          "A trophic level contains 8,000 kJ of energy. Roughly how much is passed to the next level, assuming 10% transfer?",
        steps: [
          "10% transfer means the next level receives one tenth.",
          "8,000 × 10 ÷ 100.",
          "= 800 kJ.",
          "The other 7,200 kJ is lost — uneaten, indigestible, or used in respiration and lost as heat and waste.",
        ],
        answer: "800 kJ",
      },
    ],
    practice: [
      {
        question: "What is the place where an organism lives called?",
        accept: ["habitat", "a habitat", "its habitat"],
        answer:
          "A habitat. A population is all the organisms of one species in it, a community is all the species, and an ecosystem adds the non-living surroundings.",
      },
      {
        question: "What is all the populations of all species in an area called?",
        accept: ["community", "a community"],
        answer:
          "A community. Add the non-living factors — light, temperature, soil — and you have an ecosystem.",
      },
      {
        question: "Is temperature an abiotic or a biotic factor?",
        accept: ["abiotic", "an abiotic factor"],
        answer:
          "Abiotic — non-living. The prefix 'a-' means without, so abiotic factors are the physical conditions rather than the organisms.",
      },
      {
        question: "Is the arrival of a new predator an abiotic or a biotic factor?",
        accept: ["biotic", "a biotic factor"],
        answer:
          "Biotic — it is a living factor. Others include food availability, new pathogens and competition from other species.",
      },
      {
        question: "What is the name for an organism at the start of a food chain that makes its own food?",
        accept: ["producer", "a producer", "producers"],
        answer:
          "A producer — usually a green plant or algae, using photosynthesis. Everything else in the chain ultimately depends on them.",
      },
      {
        question: "What is a carnivore at the top of a food chain with no predators called?",
        accept: ["apex predator", "an apex predator", "apex"],
        answer:
          "An apex predator. Because so much biomass is lost at each level, there is rarely enough energy to support a level above them.",
      },
      {
        question: "Roughly what percentage of biomass is transferred to the next trophic level? Give the number only.",
        accept: ["10", "10%"],
        answer:
          "About 10%. The other 90% is lost because not all is eaten or digestible, and because energy is used in respiration and lost as heat and waste.",
      },
      {
        question: "A trophic level has 5,000 kJ. How many kJ pass to the next level at 10% transfer? Give the number only.",
        accept: ["500"],
        answer:
          "500 kJ. 5,000 × 10 ÷ 100 = 500. That steep loss is exactly why food chains rarely have more than four or five links.",
      },
      {
        question: "What is the name for bacteria and fungi that break down dead material?",
        accept: ["decomposers", "decomposer", "detritivores"],
        answer:
          "Decomposers. They release mineral ions back into the soil, which is what allows plants to keep growing — without them nutrients would lock up in dead matter.",
      },
      {
        question: "Name one condition that speeds up decay.",
        accept: ["warm", "warmth", "moisture", "oxygen", "moist", "water", "temperature", "air", "high temperature"],
        answer:
          "Warmth, moisture and plenty of oxygen. All three help because decomposers respire, and their enzymes work faster when warm.",
      },
      {
        question: "What square frame is used to sample organisms in a set area?",
        accept: ["quadrat", "a quadrat", "quadrats"],
        answer:
          "A quadrat. It must be placed RANDOMLY — using random coordinates — because choosing where to put it introduces bias.",
      },
      {
        question: "What is a line along which samples are taken to study how distribution changes called?",
        accept: ["transect", "a transect", "line transect"],
        answer:
          "A transect. Use it when studying a gradient — from the sea to inland, or from shade into sunlight — rather than for estimating a total population.",
      },
      {
        question: "Twenty 1 m² quadrats in a 400 m² field give 100 plants in total. Estimate the population. Give the number only.",
        accept: ["2000", "2,000"],
        answer:
          "2,000 plants. Mean per m² = 100 ÷ 20 = 5; 5 × 400 = 2,000. Show both steps — the method carries marks even if the arithmetic slips.",
      },
      {
        question: "Why must quadrats be placed randomly?",
        accept: ["avoid bias", "bias", "to be representative", "unbiased", "representative", "reliable", "prevent bias", "fair"],
        answer:
          "To avoid bias. If you choose where to put them you will unconsciously pick interesting patches, and the estimate will not represent the whole area.",
      },
      {
        question: "Explain why only about 10% of biomass passes to the next trophic level. Write three sentences.",
        answer:
          "Not all of an organism is eaten — bones, roots and other parts are left — and some of what is eaten cannot be digested and passes out as waste. Of the energy that is absorbed, a large proportion is used in respiration to power movement, growth and, in mammals and birds, maintaining body temperature, and that energy is eventually lost as heat to the surroundings. Only what is left is stored as new biomass and available to the next level. Mark this one yourself: three distinct reasons — uneaten, indigestible, and respiration — is full marks.",
      },
      {
        question: "Describe how you would estimate the number of dandelions in a field using quadrats.",
        answer:
          "Divide the field into a grid and use random number pairs as coordinates to decide where each quadrat goes, so that placement is unbiased. Place a quadrat of known area — say 1 m² — at each position and count the dandelions inside it, using a consistent rule for plants on the boundary. Repeat at least ten times, then calculate the mean number per quadrat. Multiply the mean per square metre by the total area of the field to estimate the population. Mark this one yourself: random placement, a stated quadrat size, enough repeats and the final multiplication are the four things being looked for.",
      },
    ],
    misconceptions: [
      {
        wrong: "Arrows in a food chain show what eats what.",
        right:
          "Arrows show the direction ENERGY flows — from the eaten to the eater. Grass → rabbit → fox, not the other way round.",
      },
      {
        wrong: "A community and an ecosystem are the same thing.",
        right:
          "A community is the living organisms only. An ecosystem is the community PLUS the non-living surroundings.",
      },
      {
        wrong: "Energy is recycled in an ecosystem like carbon is.",
        right:
          "Materials are recycled; energy is not. It enters as light and is progressively lost as heat, which is why every food chain needs a constant energy input.",
      },
      {
        wrong: "Decomposers eat dead things the way animals do.",
        right:
          "They secrete enzymes onto the material and absorb the digested products. That is why warmth, moisture and oxygen speed decay — they suit the enzymes and respiration.",
      },
      {
        wrong: "Placing quadrats where the plants are gives a better estimate.",
        right:
          "That is bias, and it produces a confidently wrong answer. Random placement is what makes the sample representative.",
      },
    ],
  },

  "biology/biodiversity-and-human-impact": {
    summary:
      "Human activity is changing ecosystems faster than at almost any point in history. This topic covers what biodiversity is and why it matters, the pressures of population growth, pollution, land use and climate change, and what is being done about it. It is a topic where examiners want balanced argument rather than outrage.",
    keyFacts: [
      {
        heading: "Biodiversity",
        points: [
          "BIODIVERSITY is the variety of all the different species of organisms on Earth, or within an ecosystem.",
          "High biodiversity makes an ecosystem STABLE, because species are less dependent on any single other species.",
          "It reduces the impact of one species being lost, and protects against disease spreading through a population.",
          "Human activity is reducing biodiversity, and only recently have serious efforts been made to slow this.",
          "Loss of biodiversity is generally irreversible: an extinct species does not come back.",
        ],
      },
      {
        heading: "Population and waste",
        points: [
          "The human population has grown rapidly, and the standard of living has risen alongside it.",
          "More people using more resources means more waste, unless it is managed.",
          "WATER pollution: sewage, fertiliser and toxic chemicals.",
          "AIR pollution: smoke, and acidic gases such as sulfur dioxide which cause acid rain.",
          "LAND pollution: landfill and toxic chemicals from farming and industry.",
          "Pollution kills plants and animals directly and can reduce biodiversity across a whole area.",
        ],
      },
      {
        heading: "Land use and deforestation",
        points: [
          "Humans use land for building, quarrying, farming and dumping waste, all of which reduce habitat.",
          "PEAT BOGS are destroyed for compost and to create farmland. Peat contains enormous quantities of stored carbon.",
          "Decay or burning of peat releases that carbon dioxide, adding to the greenhouse effect.",
          "DEFORESTATION happens to clear land for cattle and rice fields, and to grow crops for biofuels.",
          "Consequences: less carbon dioxide absorbed, more released by burning, loss of habitat, and reduced biodiversity.",
        ],
      },
      {
        heading: "Climate change and conservation",
        points: [
          "Levels of carbon dioxide and methane in the atmosphere are increasing, contributing to global warming.",
          "Consequences include rising sea levels, changes in the distribution and migration patterns of species, and reduced biodiversity.",
          "Some effects are disputed in scale, but the direction is supported by very strong evidence.",
          "Conservation measures: breeding programmes for endangered species, protection and regeneration of rare habitats, and hedgerow and field margin schemes on farms.",
          "Also: reducing deforestation and carbon emissions, and recycling rather than landfilling.",
          "The main conflicts are cost, and the competing need for food, housing and jobs.",
        ],
      },
    ],
    flashcards: [
      { term: "Biodiversity", definition: "The variety of different species of organisms on Earth or within an ecosystem." },
      { term: "Stable ecosystem", definition: "One with high biodiversity, where species are less dependent on any single other species." },
      { term: "Deforestation", definition: "The large-scale clearing of forests, usually for farming or biofuel crops." },
      { term: "Peat bog", definition: "Waterlogged land where partly decayed plant material stores large amounts of carbon." },
      { term: "Global warming", definition: "The rise in average global temperature caused by increasing greenhouse gases." },
      { term: "Greenhouse gas", definition: "A gas such as carbon dioxide or methane that traps heat in the atmosphere." },
      { term: "Acid rain", definition: "Rain made acidic by gases such as sulfur dioxide, which damages trees and aquatic life." },
      { term: "Conservation", definition: "Protecting and managing species and habitats to maintain biodiversity." },
      { term: "Breeding programme", definition: "A scheme to breed endangered species in captivity to increase their numbers." },
      { term: "Field margin", definition: "A strip of uncultivated land at the edge of a field, left to support wildlife." },
      { term: "Hedgerow", definition: "A line of shrubs bordering a field, providing habitat and connecting fragmented areas." },
      { term: "Landfill", definition: "Waste disposal by burial, which uses land and can pollute soil and groundwater." },
      { term: "Endangered species", definition: "A species at serious risk of extinction." },
      { term: "Sustainability", definition: "Meeting present needs without preventing future generations from meeting theirs." },
    ],
    examTips: [
      {
        tip: "Say WHY high biodiversity matters",
        detail:
          "It makes an ecosystem stable, because species are less dependent on any one other species. 'It is good' is not an answer.",
      },
      {
        tip: "Give the peat bog carbon link explicitly",
        detail:
          "Peat stores carbon; destroying or burning it releases carbon dioxide. That chain is the mark, not the fact that peat bogs are being destroyed.",
      },
      {
        tip: "List consequences of deforestation in full",
        detail:
          "Less CO₂ absorbed, more CO₂ released by burning, habitat destroyed, biodiversity reduced. Four separate points, four possible marks.",
      },
      {
        tip: "Acknowledge the conflicts in conservation",
        detail:
          "Protecting habitat costs money and competes with the need for food, housing and jobs. Answers that ignore the trade-off cap themselves.",
      },
      {
        tip: "Be measured about climate change",
        detail:
          "The evidence for the direction is very strong; the precise scale of some consequences is genuinely debated. Examiners reward that precision.",
      },
      {
        tip: "Use data from the question",
        detail:
          "This topic is nearly always examined with a graph or table. Quote the figures — an answer that ignores the data rarely reaches the top band.",
      },
    ],
    practice: [
      {
        question: "What is the variety of different species in an ecosystem called?",
        accept: ["biodiversity"],
        answer:
          "Biodiversity. High biodiversity makes an ecosystem more stable, because no species depends too heavily on any single other one.",
      },
      {
        question: "Why does high biodiversity make an ecosystem more stable?",
        accept: ["less dependent", "species less dependent", "not reliant on one species", "less reliance", "more food sources", "alternatives", "resilient"],
        answer:
          "Because species are less dependent on any single other species. If one is lost, others can fill the gap, so the whole system does not collapse.",
      },
      {
        question: "What is the large-scale clearing of forests called?",
        accept: ["deforestation"],
        answer:
          "Deforestation. It reduces the carbon dioxide absorbed by photosynthesis, releases more when trees are burned, and destroys habitat.",
      },
      {
        question: "What do peat bogs store large amounts of?",
        accept: ["carbon", "co2", "carbon dioxide"],
        answer:
          "Carbon, locked in partly decayed plant material. Destroying or burning peat releases it as carbon dioxide, adding to the greenhouse effect.",
      },
      {
        question: "Name one greenhouse gas.",
        accept: ["carbon dioxide", "co2", "methane", "water vapour", "ch4"],
        answer:
          "Carbon dioxide or methane. Both trap heat in the atmosphere, and levels of both have risen substantially through human activity.",
      },
      {
        question: "Which gas released by burning fossil fuels causes acid rain?",
        accept: ["sulfur dioxide", "sulphur dioxide", "so2", "nitrogen oxides"],
        answer:
          "Sulfur dioxide (nitrogen oxides also contribute). Acid rain damages trees and makes lakes too acidic for fish and other aquatic life.",
      },
      {
        question: "Name one cause of water pollution.",
        accept: ["sewage", "fertiliser", "fertilizer", "toxic chemicals", "chemicals", "pesticides", "waste"],
        answer:
          "Sewage, fertiliser run-off or toxic chemicals from industry. Fertiliser is particularly damaging because it triggers algal growth that starves water of oxygen.",
      },
      {
        question: "Name one conservation measure used to protect biodiversity.",
        accept: ["breeding programmes", "breeding programme", "protecting habitats", "field margins", "hedgerows", "recycling", "reducing deforestation", "nature reserves", "captive breeding"],
        answer:
          "Breeding programmes for endangered species, protecting and regenerating rare habitats, or field margin and hedgerow schemes on farms.",
      },
      {
        question: "What is a strip of uncultivated land at the edge of a field, left for wildlife, called?",
        accept: ["field margin", "field margins", "margin"],
        answer:
          "A field margin. Along with hedgerows, it provides habitat and connects fragmented areas so wildlife can move between them.",
      },
      {
        question: "Give one consequence of global warming for living organisms.",
        accept: ["rising sea levels", "sea level", "migration", "distribution changes", "loss of habitat", "reduced biodiversity", "extinction", "changed migration patterns", "flooding"],
        answer:
          "Rising sea levels flooding habitats, changes to species distribution and migration patterns, and reduced biodiversity as species that cannot adapt die out.",
      },
      {
        question: "Give one reason conservation schemes are difficult to put into practice.",
        accept: ["cost", "money", "need for food", "housing", "jobs", "land needed", "expensive", "competing needs", "farming"],
        answer:
          "They cost money, and they compete with the need for farmland, housing and jobs. Acknowledging that trade-off is what lifts an answer into the top band.",
      },
      {
        question: "What is a species at serious risk of extinction called?",
        accept: ["endangered", "endangered species", "an endangered species"],
        answer:
          "Endangered. Captive breeding programmes aim to increase numbers enough for a species to be reintroduced to the wild.",
      },
      {
        question: "True or false: an extinct species can usually be restored later.",
        accept: ["false", "f"],
        answer:
          "False. Extinction is effectively permanent, which is exactly why conservation focuses on preventing it rather than reversing it.",
      },
      {
        question: "Why does a growing human population increase pollution?",
        accept: ["more waste", "more resources", "more people", "more demand", "more rubbish", "more consumption", "resources"],
        answer:
          "More people using more resources produce more waste, and rising standards of living increase resource use per person on top of that.",
      },
      {
        question: "Explain how deforestation contributes to increased carbon dioxide in the atmosphere. Write two or three sentences.",
        answer:
          "Trees remove carbon dioxide from the atmosphere by photosynthesis and lock the carbon into their biomass, so cutting them down removes that ongoing absorption. When the felled trees are burned, or when they decay, the carbon stored in them is released back into the atmosphere as carbon dioxide. The effect therefore works in both directions at once — less removed and more released. Mark this one yourself: both halves are needed for full marks, not just 'trees absorb CO₂'.",
      },
      {
        question: "Discuss the difficulties of protecting biodiversity when land is also needed for farming and housing.",
        answer:
          "Protecting habitat means not using that land for anything else, which conflicts directly with a growing population's need for food and homes, and with the jobs those industries provide. Conservation also costs money — breeding programmes, habitat regeneration and monitoring all need long-term funding that competes with health and education budgets. Against that, biodiversity loss is largely irreversible, and stable ecosystems provide services people depend on such as pollination, clean water and soil fertility. Compromises such as field margins, hedgerows and building on already-developed land let some biodiversity be protected without giving up all productive use. Mark this one yourself: full marks need the conflict taken seriously on both sides, plus at least one realistic compromise.",
      },
    ],
    misconceptions: [
      {
        wrong: "Biodiversity just means having lots of animals.",
        right:
          "It is the variety of all species — plants, fungi, bacteria and animals. Variety matters more than sheer numbers.",
      },
      {
        wrong: "Peat bogs matter because they are pretty.",
        right:
          "They store enormous quantities of carbon. Destroying them releases carbon dioxide, so it is a climate issue as much as a habitat one.",
      },
      {
        wrong: "Global warming will affect all species equally.",
        right:
          "Some species will move, some will adapt, and some will die out. Changing distribution and migration patterns are as important as temperature itself.",
      },
      {
        wrong: "Conservation is simply a matter of caring enough.",
        right:
          "It costs money and competes with real needs for food, housing and jobs. Exam answers that ignore that trade-off cannot reach the top band.",
      },
    ],
  },

  "biology/biology-exam-practice": {
    summary:
      "This topic is about technique rather than content: what the command words actually require, how to read a six-mark question, how to handle the required practicals, and the specific habits that cost marks in Biology papers. Everything here is worth revising in the last fortnight, when learning new content has stopped paying off.",
    keyFacts: [
      {
        heading: "Command words",
        points: [
          "STATE or GIVE — a short factual answer with no explanation needed.",
          "DESCRIBE — say what happens or what the data shows, without saying why.",
          "EXPLAIN — say WHY. If your answer contains no 'because', it probably is not an explanation.",
          "COMPARE — give both sides in the same sentence, using words like 'whereas' or 'but'.",
          "EVALUATE — give advantages and disadvantages and then reach a supported conclusion.",
          "CALCULATE — show working. Method marks are available even when the final number is wrong.",
        ],
      },
      {
        heading: "Six-mark questions",
        points: [
          "They are marked in bands for the quality of the whole answer, not by counting separate points.",
          "Plan for thirty seconds: jot three or four points before starting to write.",
          "Use scientific vocabulary precisely — denatured, active site, concentration gradient, trophic level.",
          "Link ideas with 'because', 'therefore' and 'which means that' rather than listing facts.",
          "If the question names a context, use it — a generic answer cannot reach the top band.",
        ],
      },
      {
        heading: "Required practicals",
        points: [
          "You can be asked about ANY of the required practicals in any paper.",
          "Learn each as: the variables, the method in order, the results expected, and the main sources of error.",
          "Microscopy, osmosis in potato, food tests, enzymes and pH, photosynthesis with pondweed, reaction time, and sampling with quadrats are the core ones.",
          "Know the food tests: Benedict's for sugars (blue → brick red), iodine for starch (orange → blue-black), Biuret for protein (blue → purple), ethanol emulsion for lipids (cloudy white).",
          "Be ready to identify an anomaly, suggest an improvement, and say what you would control.",
        ],
      },
      {
        heading: "Habits that cost marks",
        points: [
          "Missing units, especially on rates and magnification. Magnification has NO unit; rates need one.",
          "Saying 'the enzyme died' rather than 'denatured', or 'respiration makes energy' rather than 'releases'.",
          "Describing a graph when the question said explain.",
          "Answering about the wrong organism — read whether it is plant or animal, muscle or yeast.",
          "Leaving a six-mark question half finished because time ran out. Watch the clock: roughly one mark a minute.",
          "Not reading the data provided, and answering from memory instead.",
        ],
      },
    ],
    flashcards: [
      { term: "Describe", definition: "Say what happens or what the data shows, without giving reasons." },
      { term: "Explain", definition: "Say why something happens. A good explanation usually contains the word 'because'." },
      { term: "Evaluate", definition: "Give advantages and disadvantages, then reach a supported conclusion." },
      { term: "Compare", definition: "Give both sides together, using linking words such as 'whereas'." },
      { term: "Calculate", definition: "Work out a numerical answer, showing every step so method marks can be awarded." },
      { term: "Benedict's test", definition: "Test for sugars: blue solution turns brick red when heated with a reducing sugar." },
      { term: "Iodine test", definition: "Test for starch: orange iodine solution turns blue-black." },
      { term: "Biuret test", definition: "Test for protein: blue solution turns purple." },
      { term: "Emulsion test", definition: "Test for lipids: ethanol and water produce a cloudy white emulsion." },
      { term: "Anomalous result", definition: "A result that does not fit the pattern, which should be identified and excluded from the mean." },
      { term: "Control variable", definition: "A variable kept constant so that the investigation is a fair test." },
      { term: "Required practical", definition: "An investigation named in the specification, which can be examined in any paper." },
      { term: "Method mark", definition: "A mark for correct working, available even when the final answer is wrong." },
      { term: "Band marking", definition: "Marking a long answer by overall quality rather than by counting separate points." },
    ],
    examTips: [
      {
        tip: "Underline the command word before you write anything",
        detail:
          "Describe and explain are different questions, and answering the wrong one is the most common way to lose marks on a paper you actually knew.",
      },
      {
        tip: "One mark, roughly one minute",
        detail:
          "If you have spent four minutes on a two-mark question, move on and come back. Unfinished six-markers cost far more than an imperfect short answer.",
      },
      {
        tip: "Always attempt a calculation",
        detail:
          "Write the formula and substitute the numbers even if you cannot finish. Method marks are real marks, and a blank space scores nothing.",
      },
      {
        tip: "Use the context you are given",
        detail:
          "If the question is about a named plant, a named enzyme or a specific graph, refer to it. Generic answers cannot reach the top band.",
      },
      {
        tip: "Learn the four food tests as colour changes",
        detail:
          "Blue to brick red, orange to blue-black, blue to purple, cloudy white. Both the starting and finishing colour can be asked for.",
      },
      {
        tip: "Never leave a multiple choice blank",
        detail:
          "There is no penalty for a wrong answer, so an educated guess is strictly better than nothing. This is worth real marks over a whole paper.",
      },
    ],
    practice: [
      {
        question: "Which command word asks you to say WHY something happens?",
        accept: ["explain"],
        answer:
          "Explain. If your answer contains no 'because' or equivalent, it is probably a description rather than an explanation.",
      },
      {
        question: "Which command word asks for advantages, disadvantages and a conclusion?",
        accept: ["evaluate"],
        answer:
          "Evaluate. The conclusion is essential — an answer that lists both sides and stops has thrown away the final marks.",
      },
      {
        question: "Which command word asks you to say what the data shows, without reasons?",
        accept: ["describe"],
        answer:
          "Describe. Adding reasons wastes time you need elsewhere, but answering 'describe' when it said 'explain' loses marks outright.",
      },
      {
        question: "What colour does Benedict's solution turn when a reducing sugar is present?",
        accept: ["brick red", "red", "brick-red", "orange red"],
        answer:
          "Brick red, from blue, when heated. Both the starting and finishing colours can be asked for, so learn the change rather than one colour.",
      },
      {
        question: "What colour does iodine solution turn in the presence of starch?",
        accept: ["blue-black", "blue black", "black", "blueblack"],
        answer:
          "Blue-black, from orange-brown. It is the quickest of the four food tests and the one most often used in photosynthesis practicals.",
      },
      {
        question: "What colour change shows protein in the Biuret test?",
        accept: ["purple", "blue to purple", "violet", "lilac"],
        answer:
          "Blue to purple. Remember the four tests as colour CHANGES rather than single colours, because questions ask for either end.",
      },
      {
        question: "What result shows lipids are present in the emulsion test?",
        accept: ["cloudy white", "milky", "white emulsion", "cloudy", "white"],
        answer:
          "A cloudy white emulsion, after mixing with ethanol and then water. It is the only one of the four tests that does not rely on a colour change.",
      },
      {
        question: "What is a mark awarded for correct working, even with a wrong final answer, called?",
        accept: ["method mark", "a method mark", "method marks", "working mark"],
        answer:
          "A method mark. It is why you should always write the formula and substitute the numbers, even if you cannot finish the arithmetic.",
      },
      {
        question: "Roughly how many minutes should you spend per mark?",
        accept: ["1", "one", "1 minute", "one minute"],
        answer:
          "About one minute per mark. If a two-mark question has taken four minutes, leave it and come back — unfinished six-markers cost far more.",
      },
      {
        question: "Should you leave a multiple choice question blank if unsure? Answer yes or no.",
        accept: ["no", "n"],
        answer:
          "No. There is no penalty for a wrong answer, so a guess is strictly better than nothing. Over a whole paper this is worth real marks.",
      },
      {
        question: "What should you do with an anomalous result when calculating a mean?",
        accept: ["exclude it", "ignore it", "leave it out", "exclude", "discard it", "not include it", "remove it"],
        answer:
          "Exclude it from the mean — and SAY that you have excluded it. The statement carries a mark of its own.",
      },
      {
        question: "How is a six-mark question marked?",
        accept: ["in bands", "bands", "band marking", "levels", "by quality", "level of response"],
        answer:
          "In bands, by the overall quality of the answer, rather than by counting separate points. That is why linking ideas matters more than listing facts.",
      },
      {
        question: "Does magnification have a unit? Answer yes or no.",
        accept: ["no", "n"],
        answer:
          "No — it is a ratio, so write ×400. Rates, by contrast, always need a unit, such as bubbles per minute.",
      },
      {
        question: "What should you do in the first thirty seconds of a six-mark question?",
        accept: ["plan", "plan it", "jot points", "make notes", "write points", "planning", "note down points"],
        answer:
          "Plan — jot down three or four points before writing. It costs half a minute and stops you rambling or missing an obvious point.",
      },
      {
        question: "Explain why writing 'the enzyme died' loses marks. Write two or three sentences.",
        answer:
          "An enzyme is a protein molecule, not a living organism, so it cannot die. What actually happens at high temperature is that the bonds holding its shape break and the ACTIVE SITE changes shape permanently, so the substrate no longer fits. Examiners are looking for the word denatured and for the active site explanation, and neither is present in 'it died'. Mark this one yourself: credit yourself if you said enzymes are molecules AND explained denaturing through the active site.",
      },
      {
        question: "Describe how you would approach a six-mark question on osmosis in potato tissue.",
        answer:
          "First underline the command word and note the context — whether it is asking me to describe a method, explain results, or evaluate an investigation. Then spend about thirty seconds planning three or four points: for osmosis these would be the direction of water movement, the reason based on concentration, the effect on mass, and how percentage change is calculated. I would write in linked sentences using precise vocabulary — partially permeable membrane, dilute and concentrated solution, turgid and flaccid — rather than a list, and refer to any data given in the question. Finally I would check I had answered what was actually asked. Mark this one yourself: planning, precise vocabulary, linked reasoning and using the data are the four things worth credit.",
      },
    ],
    misconceptions: [
      {
        wrong: "Describe and explain mean roughly the same thing.",
        right:
          "Describe says WHAT; explain says WHY. Answering the wrong one is the commonest way to lose marks on content you actually knew.",
      },
      {
        wrong: "There is no point starting a calculation you cannot finish.",
        right:
          "Method marks are awarded for the formula and correct substitution. A blank space scores zero; a half-finished attempt often scores most of the marks.",
      },
      {
        wrong: "Six-mark questions are marked by counting six separate points.",
        right:
          "They are marked in bands on overall quality. Linked, well-argued reasoning beats a list of six disconnected facts.",
      },
      {
        wrong: "Writing more always scores more.",
        right:
          "Only if it answers the question. A focused paragraph using the context given beats a page of general knowledge every time.",
      },
    ],
  },
};
