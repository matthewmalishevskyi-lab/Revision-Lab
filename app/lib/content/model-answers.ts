// One modelled exam answer per topic, with the mark scheme laid against it.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY
//
// The site taught facts and drilled recall, and never once showed what a
// full-marks answer to the big question LOOKS like — which is the thing a
// student most often has never seen. A 6-mark "explain" is marked on whether
// each point is linked to a reason, and nobody learns that from a list of
// facts. So each topic gets one real exam-style question, an answer that
// would reach the top level, and the scheme laid over it: which sentence
// earns which point, why the whole thing reaches the top level, and the
// commonest way students lose marks on it.
//
// ⚠️ HOW SIX-MARKERS ARE ACTUALLY MARKED. AQA marks 6-mark science questions
// by LEVELS, not by counting ticks: an examiner reads the whole answer
// against "indicative content" and a level descriptor. `points` is that
// indicative content, and `level` says why this answer reaches Level 3
// (5–6 marks). Laying the points against sentences is a teaching device, not
// a claim that each sentence is worth exactly one mark — the page says so.
//
// Biology first, as Matthew asked, so he can judge the voice before the other
// subjects are written. Data only: no imports, read by check-content.mjs.
// ─────────────────────────────────────────────────────────────────────────────

export type ModelAnswer = {
  /** The exam-style question, exactly as it would be printed. */
  question: string;
  marks: number;
  /** The answer, one sentence per entry, in order. */
  answer: string[];
  /** Indicative content, and the sentences (0-based) where this answer gives it. */
  points: { point: string; sentences: number[] }[];
  /** Why this answer reaches the top level. */
  level: string;
  /** The commonest way students lose marks on this question. */
  slip: string;
  /** The whole question is Higher tier only. */
  higherOnly?: boolean;
  /** A tier or specification note shown with the question. */
  note?: string;
};

export const MODEL_ANSWERS: Record<string, ModelAnswer> = {
  "biology/cell-structure": {
    question: "Explain how sperm cells, root hair cells and red blood cells are adapted to their functions.",
    marks: 6,
    answer: [
      "A sperm cell's function is to reach an egg and fertilise it.",
      "It has a tail so it can swim to the egg, and many mitochondria in its middle section to release the energy the tail needs.",
      "The acrosome in its head contains enzymes that digest a way through the outer layer of the egg.",
      "A root hair cell absorbs water and mineral ions from the soil.",
      "Its long, hair-like projection gives it a large surface area, so more water can move in by osmosis.",
      "It has many mitochondria to release energy for the active transport of mineral ions, and no chloroplasts, because it is underground and gets no light.",
      "A red blood cell carries oxygen around the body.",
      "It has no nucleus, which leaves more room for haemoglobin, the protein that carries oxygen, and its biconcave shape gives a large surface area for oxygen to diffuse in and out quickly.",
    ],
    points: [
      { point: "States the function of each cell", sentences: [0, 3, 6] },
      { point: "Tail for swimming, with mitochondria releasing the energy for it", sentences: [1] },
      { point: "Enzymes in the acrosome to get into the egg", sentences: [2] },
      { point: "Large surface area of the root hair for uptake of water by osmosis", sentences: [4] },
      { point: "Mitochondria for the energy of active transport of mineral ions", sentences: [5] },
      { point: "No nucleus, so more room for haemoglobin; shape gives a large surface area for diffusion", sentences: [7] },
    ],
    level: "Every feature is linked to what it lets the cell DO — \"so it can swim\", \"so more water can move in\". That link is what turns a description into an explanation, and it is done for all three cells.",
    slip: "Listing features without saying what they are for (\"a sperm cell has a tail and lots of mitochondria\"). That is a description, and a list of features with no reasons usually stays in Level 1, however long it is.",
  },

  "biology/cell-transport": {
    question: "Describe and explain the differences between diffusion, osmosis and active transport.",
    marks: 6,
    answer: [
      "Diffusion is the net movement of particles from an area of higher concentration to an area of lower concentration.",
      "It is passive: it needs no energy from respiration, because it happens as a result of the random movement of the particles.",
      "Osmosis is the diffusion of water from a dilute solution to a more concentrated solution through a partially permeable membrane.",
      "So osmosis is a special case of diffusion — it involves only water, and it needs a membrane.",
      "Active transport moves substances from a more dilute solution to a more concentrated one, against the concentration gradient.",
      "Because it goes against the gradient it needs energy released by respiration, which is why cells that do it, such as root hair cells taking up mineral ions, contain many mitochondria.",
    ],
    points: [
      { point: "Diffusion: high to low concentration", sentences: [0] },
      { point: "Osmosis: water, dilute to concentrated, through a partially permeable membrane", sentences: [2] },
      { point: "Active transport: against the concentration gradient", sentences: [4] },
      { point: "Diffusion and osmosis are passive; active transport needs energy from respiration", sentences: [1, 3, 5] },
      { point: "Says how the processes relate to each other, not just what each one is", sentences: [3] },
      { point: "An example, linked to the cell's structure", sentences: [5] },
    ],
    level: "It COMPARES rather than defining three things in turn: it says what osmosis has in common with diffusion and what makes active transport different, and explains why the energy difference exists.",
    slip: "Saying osmosis is water moving \"from a high to a low concentration\" without saying a high concentration of WHAT. Water moves from a dilute solution to a concentrated one — the opposite way round to the solute — and examiners mark the vague version wrong.",
  },

  "biology/cell-division": {
    question: "Evaluate the use of embryonic stem cells to treat medical conditions.",
    marks: 6,
    answer: [
      "Embryonic stem cells are undifferentiated, so they can divide and become almost any type of specialised cell.",
      "That means they could replace cells damaged by conditions such as diabetes or paralysis, where the body cannot make new cells of the right type itself.",
      "In therapeutic cloning an embryo is made with the same genes as the patient, so the cells made from it would not be rejected by the patient's immune system.",
      "However, the embryo is destroyed when the cells are taken, and some people believe an embryo has a right to life, so they object on ethical or religious grounds.",
      "There are also safety risks: stem cells grown in a laboratory could pass on a viral infection to the patient.",
      "Adult stem cells avoid destroying an embryo, but they can only become a limited range of cell types.",
      "Overall, embryonic stem cells could treat conditions that nothing else can, but only if the safety risks are controlled and society accepts the ethical cost — which is why their use is strictly regulated.",
    ],
    points: [
      { point: "Can differentiate into many types of cell", sentences: [0] },
      { point: "A benefit, with a named condition", sentences: [1] },
      { point: "Therapeutic cloning avoids rejection", sentences: [2] },
      { point: "Ethical or religious objection, with the reason", sentences: [3] },
      { point: "A safety risk, such as transfer of a viral infection", sentences: [4] },
      { point: "Compares with an alternative", sentences: [5] },
      { point: "A conclusion that follows from the points made", sentences: [6] },
    ],
    level: "It weighs both sides and ENDS WITH A JUDGEMENT that follows from them. \"Evaluate\" is asking for that judgement; the arguments on their own are not an evaluation.",
    slip: "Leaving out the conclusion. An answer with excellent points for and against, and no judgement, is usually capped at Level 2 on an \"evaluate\" question.",
  },

  "biology/enzymes-and-digestion": {
    question: "Explain how temperature affects the rate of an enzyme-controlled reaction.",
    marks: 6,
    answer: [
      "As the temperature rises towards the optimum, the rate of reaction increases.",
      "This is because the enzyme and substrate molecules have more kinetic energy, so they move faster and collide more often.",
      "More collisions means more enzyme–substrate complexes form each second.",
      "Above the optimum temperature — around 37 °C for most human enzymes — the rate falls quickly.",
      "The high temperature breaks the bonds that hold the enzyme in shape, so the shape of the active site changes and the enzyme is denatured.",
      "The substrate no longer fits the active site, so no complexes form, and because denaturing is permanent the rate does not recover when the temperature falls.",
    ],
    points: [
      { point: "Rate increases up to an optimum", sentences: [0] },
      { point: "More kinetic energy, so more collisions", sentences: [1] },
      { point: "More enzyme–substrate complexes", sentences: [2] },
      { point: "Rate falls above the optimum", sentences: [3] },
      { point: "Active site changes shape: the enzyme is denatured", sentences: [4] },
      { point: "Substrate no longer fits the active site", sentences: [5] },
    ],
    level: "It explains BOTH halves of the curve, and each half with its mechanism: collisions on the way up, the active site changing shape on the way down.",
    slip: "Saying the enzyme is \"killed\" at high temperatures. Enzymes are proteins, not living things — the word is DENATURED, and examiners do not accept \"killed\" or \"dies\".",
  },

  "biology/plant-organisation": {
    question: "Explain how water moves from the soil to the leaves of a plant, and how the rate of transpiration is affected by environmental conditions.",
    marks: 6,
    answer: [
      "Water enters the root hair cells from the soil by osmosis.",
      "It travels up the stem in the xylem, which is made of dead cells joined end to end to form hollow tubes strengthened by lignin.",
      "Water evaporates from cells inside the leaf and diffuses out through the stomata as water vapour; this loss of water is transpiration.",
      "As water is lost from the leaf, more is pulled up the xylem behind it in a continuous column, called the transpiration stream.",
      "Transpiration is faster when it is warmer, because water evaporates and diffuses faster; in brighter light, because more stomata are open; and in moving air, because the wind carries water vapour away and keeps the concentration gradient steep.",
      "It is slower when the air is humid, because the air outside already holds a lot of water vapour, so the concentration gradient out of the leaf is shallow.",
    ],
    points: [
      { point: "Water enters the roots by osmosis", sentences: [0] },
      { point: "Moves up in the xylem", sentences: [1] },
      { point: "Evaporation and diffusion out through the stomata", sentences: [2] },
      { point: "Water is pulled up as a continuous stream", sentences: [3] },
      { point: "Temperature, light and wind, each with a reason", sentences: [4] },
      { point: "Humidity, with a reason", sentences: [5] },
    ],
    level: "It follows the water all the way from soil to air, and every condition it names comes with the reason it changes the rate — usually by changing the concentration gradient.",
    slip: "Saying water travels in the phloem. Phloem carries dissolved sugars (translocation); water goes up the xylem.",
  },

  "biology/the-microscope-and-practicals": {
    question: "Describe how you would prepare a slide of onion cells and use a light microscope to observe them.",
    marks: 6,
    answer: [
      "Use forceps to peel a thin layer of epidermis from the inside of a piece of onion — one cell thick, so light can pass through it — and lay it flat on a drop of water on a clean slide.",
      "Add a drop of iodine solution to stain the cells, so that the nuclei and cell walls show up clearly.",
      "Lower a cover slip onto it at an angle using a mounted needle, so that no air bubbles are trapped.",
      "Clip the slide onto the stage and start with the lowest-power objective lens.",
      "Use the coarse focusing knob to bring the cells into focus, then the fine focusing knob to make the image sharp.",
      "Switch to a higher-power objective lens and refocus with the fine knob to see more detail, then draw what you see and add a scale bar.",
    ],
    points: [
      { point: "A thin layer, and why", sentences: [0] },
      { point: "Stain with iodine, and why", sentences: [1] },
      { point: "Cover slip lowered without air bubbles", sentences: [2] },
      { point: "Start on the lowest power", sentences: [3] },
      { point: "Coarse focus, then fine focus", sentences: [4] },
      { point: "Increase the magnification and record the observation", sentences: [5] },
    ],
    level: "The steps are in an order somebody could actually follow, and the key ones say why they are done. A method an examiner could carry out from your answer is what Level 3 means here.",
    slip: "Starting on high power. It is far harder to find the cells, and you risk the lens hitting the slide — always lowest power first.",
  },

  "biology/communicable-disease": {
    question: "Describe how the human body defends itself against pathogens.",
    marks: 6,
    answer: [
      "The skin is a physical barrier to pathogens, and it produces antimicrobial secretions.",
      "The nose has hairs and mucus that trap particles that may contain pathogens.",
      "The trachea and bronchi produce mucus that traps pathogens, and cilia move the mucus up to the throat, where it is swallowed.",
      "The stomach produces hydrochloric acid, which kills pathogens in food and drink.",
      "If pathogens get into the body, some white blood cells engulf them by phagocytosis, and others produce antibodies that are specific to that pathogen.",
      "White blood cells also produce antitoxins, which neutralise the toxins released by bacteria.",
    ],
    points: [
      { point: "Skin as a barrier", sentences: [0] },
      { point: "Nose: hairs and mucus", sentences: [1] },
      { point: "Trachea and bronchi: mucus and cilia", sentences: [2] },
      { point: "Stomach acid", sentences: [3] },
      { point: "Phagocytosis", sentences: [4] },
      { point: "Antibodies", sentences: [4] },
      { point: "Antitoxins", sentences: [5] },
    ],
    level: "It covers both lines of defence — the barriers that keep pathogens out and the white blood cells that deal with them once they are in — and gets the three jobs of white blood cells right.",
    slip: "Mixing up antibodies and antitoxins. Antibodies target the PATHOGEN; antitoxins neutralise the TOXINS it releases.",
  },

  "biology/non-communicable-disease": {
    question: "Explain how lifestyle factors can increase the risk of non-communicable diseases, and why a correlation does not on its own prove that one thing causes another.",
    marks: 6,
    answer: [
      "Smoking is a risk factor for lung disease and lung cancer, because tar in cigarette smoke contains carcinogens that can cause mutations in lung cells.",
      "Smoking also raises the risk of cardiovascular disease, because chemicals in the smoke damage the lining of the arteries and raise blood pressure.",
      "A diet high in fat and sugar, with little exercise, can lead to obesity, which is a risk factor for Type 2 diabetes.",
      "Drinking too much alcohol damages liver cells, which can lead to liver disease, and it affects brain function.",
      "Data can show a correlation — for example, people who smoke more have higher rates of lung cancer — but a correlation alone does not prove that one causes the other.",
      "A cause is only accepted when there is a mechanism that explains it, such as carcinogens causing mutations, and when other factors, such as age, have been ruled out.",
    ],
    points: [
      { point: "Smoking and lung cancer, with the reason", sentences: [0] },
      { point: "Smoking and cardiovascular disease", sentences: [1] },
      { point: "Diet and exercise, obesity and Type 2 diabetes", sentences: [2] },
      { point: "Alcohol and the liver", sentences: [3] },
      { point: "What a correlation is, with an example", sentences: [4] },
      { point: "Causation needs a mechanism, with other factors controlled", sentences: [5] },
    ],
    level: "Both halves of the question are answered, and the second half is not just asserted: it says what EXTRA evidence it takes to turn a correlation into a cause.",
    slip: "Answering only the first half. Two-part questions are marked on both parts, and an answer that never mentions correlation cannot reach the top level.",
  },

  "biology/photosynthesis": {
    question: "Explain how a farmer could use knowledge of limiting factors to increase the yield of crops grown in a greenhouse.",
    marks: 6,
    // AQA puts the cost-effectiveness of heat, light and carbon dioxide in
    // greenhouses in the Higher tier — flagged by the blind check
    higherOnly: true,
    answer: [
      "The rate of photosynthesis is limited by whichever factor is in shortest supply: light intensity, carbon dioxide concentration or temperature.",
      "Artificial lighting lets the plants photosynthesise for longer each day, and at a higher rate when natural light is weak.",
      "Paraffin heaters keep the greenhouse warm, so the enzymes that control photosynthesis stay near their optimum temperature, and the carbon dioxide the heaters release as they burn raises the carbon dioxide concentration.",
      "More photosynthesis makes more glucose, which the plants use to make cellulose and starch, and — with nitrate ions from the soil — proteins, so they grow faster and the yield increases.",
      "However, increasing a factor only helps while it is the limiting one: once another factor limits the rate, adding more light or heat has no effect.",
      "So the farmer has to balance the extra yield against the cost of the fuel and electricity, and raise each factor only as far as it is still profitable.",
    ],
    points: [
      { point: "The idea of a limiting factor", sentences: [0, 4] },
      { point: "Light", sentences: [1] },
      { point: "Temperature and carbon dioxide", sentences: [2] },
      { point: "Links photosynthesis to growth and yield", sentences: [3] },
      { point: "A factor stops helping once another limits the rate", sentences: [4] },
      { point: "Cost against benefit", sentences: [5] },
    ],
    level: "It uses the IDEA of limiting factors rather than just listing ways to make plants grow, and it finishes with the cost-effectiveness that a farmer actually has to decide on.",
    slip: "Saying the farmer should \"add as much light, heat and carbon dioxide as possible\". Past the point where something else is limiting, that is money spent for nothing.",
  },

  "biology/respiration": {
    question: "Compare aerobic and anaerobic respiration in human muscle cells.",
    marks: 6,
    answer: [
      "Both are exothermic reactions that release energy from glucose for the cell to use.",
      "Aerobic respiration uses oxygen, whereas anaerobic respiration happens when there is not enough oxygen, such as during vigorous exercise.",
      "Aerobic respiration produces carbon dioxide and water, whereas anaerobic respiration in muscles produces lactic acid.",
      "Aerobic respiration releases much more energy from each glucose molecule, because the glucose is completely oxidised; in anaerobic respiration the oxidation is incomplete.",
      "Lactic acid builds up in the muscles and causes muscle fatigue, so they contract less efficiently.",
      "After exercise, extra oxygen is needed to remove the lactic acid — the oxygen debt — and the blood carries the lactic acid to the liver, where it is converted back into glucose.",
    ],
    points: [
      { point: "Both release energy from glucose", sentences: [0] },
      { point: "Oxygen needed for one and not the other", sentences: [1] },
      { point: "The products of each", sentences: [2] },
      { point: "Aerobic releases more energy, with the reason", sentences: [3] },
      { point: "Lactic acid causes fatigue", sentences: [4] },
      { point: "Oxygen debt (Higher)", sentences: [5] },
    ],
    level: "It is a genuine COMPARISON: the main differences are set side by side with \"whereas\", there is a similarity as well, and the consequences of anaerobic respiration follow — not a paragraph on one process and then a paragraph on the other.",
    slip: "Describing the two separately and leaving the examiner to do the comparing. On a \"compare\" question, points that are never set against each other earn far less.",
  },

  "biology/the-nervous-system": {
    question: "Explain how a reflex action protects the body. Use the example of touching a hot object.",
    marks: 6,
    answer: [
      "The heat is a stimulus, detected by receptors in the skin.",
      "The receptors send electrical impulses along a sensory neurone to the spinal cord.",
      "In the spinal cord the impulse passes across a synapse to a relay neurone, and across another synapse to a motor neurone.",
      "At each synapse a chemical diffuses across the gap and starts an impulse in the next neurone.",
      "The motor neurone carries the impulse to the effector — a muscle in the arm — which contracts and pulls the hand away.",
      "The impulse does not pass through the conscious part of the brain, so the response is automatic and very fast, which reduces damage to the body.",
    ],
    points: [
      { point: "Stimulus detected by receptors", sentences: [0] },
      { point: "Sensory neurone to the spinal cord", sentences: [1] },
      { point: "Relay neurone and synapses", sentences: [2] },
      { point: "How a synapse passes the impulse on", sentences: [3] },
      { point: "Motor neurone to the effector, which responds", sentences: [4] },
      { point: "Fast and automatic, so less damage", sentences: [5] },
    ],
    level: "It follows the pathway in the right order with the right names, and it answers the actual question — HOW this protects the body — in the last sentence.",
    slip: "Saying \"the brain decides to move the hand\". The whole point of a reflex is that the conscious brain is not involved; that is why it is fast.",
  },

  "biology/hormones-and-homeostasis": {
    question: "Compare how the nervous system and the endocrine system control the body.",
    marks: 6,
    answer: [
      "Both systems coordinate the body's responses to changes, and both are needed to maintain homeostasis.",
      "The nervous system sends electrical impulses along neurones, whereas the endocrine system releases hormones, which are chemicals, into the blood.",
      "Nervous responses are very fast, whereas hormonal responses are slower, because hormones have to travel in the bloodstream.",
      "Nervous responses are short-lived, whereas the effects of hormones usually last longer.",
      "A nerve impulse goes to one precise place, such as a particular muscle, whereas a hormone is carried in the blood to every organ but acts only on its target organs.",
      "For example, pulling a hand away from a hot object is a nervous response, whereas the pancreas releasing insulin to lower blood glucose is a hormonal one.",
    ],
    points: [
      { point: "Both coordinate responses / maintain homeostasis", sentences: [0] },
      { point: "Electrical impulses along neurones against hormones in the blood", sentences: [1] },
      { point: "Speed", sentences: [2] },
      { point: "How long the effect lasts", sentences: [3] },
      { point: "Precise against widespread, acting on target organs", sentences: [4] },
      { point: "An example of each", sentences: [5] },
    ],
    level: "Every point is made about BOTH systems at once, with \"whereas\", and there is a similarity as well as differences — which is what \"compare\" means.",
    slip: "Writing \"the nervous system is fast\" and stopping. That is half a comparison; the mark is for saying what the other system does instead.",
  },

  "biology/the-circulatory-system": {
    question: "Explain how the structures of arteries, veins and capillaries are related to their functions.",
    marks: 6,
    answer: [
      "Arteries carry blood away from the heart at high pressure, so they have thick walls containing layers of muscle and elastic fibres.",
      "The elastic fibres stretch as each surge of blood passes and then recoil, which helps keep the blood flowing.",
      "Veins carry blood back to the heart at low pressure, so their walls are thinner and their lumen is wider, which makes it easier for the blood to flow.",
      "Veins have valves to stop the blood flowing backwards.",
      "Capillaries exchange substances with the tissues, so their walls are only one cell thick, which gives a short diffusion distance.",
      "Capillaries are very narrow and form a dense network, so every cell is close to one and the total surface area for diffusion is large.",
    ],
    points: [
      { point: "Arteries: thick, muscular, elastic walls for high pressure", sentences: [0] },
      { point: "Elastic fibres stretch and recoil", sentences: [1] },
      { point: "Veins: thin walls and wide lumen at low pressure", sentences: [2] },
      { point: "Valves prevent backflow", sentences: [3] },
      { point: "Capillary walls one cell thick: short diffusion distance", sentences: [4] },
      { point: "Dense network: large surface area", sentences: [5] },
    ],
    level: "Each structure is tied to the job it does (\"so they have thick walls\"), for all three vessels — the same link-to-function that every \"structure and function\" question is really asking for.",
    slip: "Defining veins as \"vessels that carry deoxygenated blood\". The pulmonary vein carries oxygenated blood — veins are defined by carrying blood TOWARDS the heart.",
  },

  "biology/dna-and-reproduction": {
    question: "Compare sexual and asexual reproduction.",
    marks: 6,
    note: "The advantages and disadvantages of each are in AQA separate Biology (8461), not Combined Science.",
    answer: [
      "Sexual reproduction involves two parents and the fusion of male and female gametes, whereas asexual reproduction needs only one parent and no gametes.",
      "Gametes are made by meiosis and fertilisation brings two of them together, so sexual reproduction mixes genetic information and the offspring vary, whereas asexual reproduction uses mitosis, so the offspring are genetically identical clones.",
      "The variation from sexual reproduction is an advantage when the environment changes, because some offspring may have characteristics that help them survive.",
      "However, sexual reproduction is slower and takes more time and energy, because a mate has to be found.",
      "Asexual reproduction is faster and more efficient: one parent can produce many offspring quickly when conditions are good.",
      "But because the offspring are all identical, one disease or change in conditions could affect them all.",
    ],
    points: [
      { point: "Number of parents; gametes or none", sentences: [0] },
      { point: "Meiosis gives variation; mitosis gives clones", sentences: [1] },
      { point: "Advantage of variation", sentences: [2] },
      { point: "Disadvantage of sexual reproduction", sentences: [3] },
      { point: "Advantage of asexual reproduction", sentences: [4] },
      { point: "Disadvantage of asexual reproduction", sentences: [5] },
    ],
    level: "It compares the processes AND their consequences — an advantage and a disadvantage of each — rather than stopping at the difference in how they happen.",
    slip: "Saying gametes are made by mitosis. Gametes are made by MEIOSIS, which halves the chromosome number, so that when two gametes fuse the fertilised egg has the full number again (46 in humans).",
  },

  "biology/genetics-and-inheritance": {
    question: "Two parents who do not have cystic fibrosis have a child who does. Explain how this is possible. You may use a genetic diagram.",
    marks: 6,
    note: "Drawing the Punnett square yourself is Higher tier; at Foundation you complete one you are given.",
    answer: [
      "Cystic fibrosis is caused by a recessive allele, f, so a person only has the disorder if they have two copies of it (ff).",
      "Both parents must be carriers, Ff: each has one normal allele and one faulty allele, so neither has the disorder.",
      "In meiosis each gamete receives one allele from each pair, so half of each parent's gametes carry F and half carry f.",
      "A Punnett square for Ff × Ff gives the offspring genotypes FF, Ff, Ff and ff.",
      "So each child has a 1 in 4 (25%) chance of being ff and having cystic fibrosis, and a 1 in 2 chance of being a carrier.",
      "This child must have inherited the recessive allele from both parents.",
    ],
    points: [
      { point: "Cystic fibrosis is caused by a recessive allele", sentences: [0] },
      { point: "Both parents are heterozygous carriers", sentences: [1] },
      { point: "Each gamete carries one allele", sentences: [2] },
      { point: "A correct cross", sentences: [3] },
      { point: "Correct probability", sentences: [4] },
      { point: "The child inherited a recessive allele from each parent", sentences: [5] },
    ],
    level: "It goes from the rule (recessive) to the parents' genotypes, through the cross, to a correctly worded probability, and then answers the question that was asked about THIS child.",
    slip: "Writing the probability as a ratio of 1:4. One affected child in four is a probability of 1 in 4, or a RATIO of 1:3 — mixing those up costs the mark.",
  },

  "biology/variation-and-evolution": {
    question: "Explain how a population of bacteria can become resistant to an antibiotic.",
    marks: 6,
    answer: [
      "In a population of bacteria there is variation, and a random mutation can give one bacterium resistance to an antibiotic.",
      "When the antibiotic is used, the bacteria that do not have the mutation are killed.",
      "The resistant bacteria survive and reproduce, and because bacteria reproduce very quickly, the number of resistant bacteria rises fast.",
      "The gene for resistance is passed on to their offspring, so over time most of the population is resistant — this is natural selection.",
      "Every use of an antibiotic selects for resistant bacteria, so prescribing antibiotics for viral infections, which they cannot treat, adds selection for no benefit, and stopping a course early leaves bacteria alive that may be resistant.",
      "Resistant strains such as MRSA are very hard to treat, which is why doctors avoid prescribing antibiotics unnecessarily.",
    ],
    points: [
      { point: "A mutation gives resistance", sentences: [0] },
      { point: "Bacteria without it are killed", sentences: [1] },
      { point: "Resistant bacteria survive and reproduce", sentences: [2] },
      { point: "The gene is passed on: natural selection", sentences: [3] },
      { point: "Overuse or not finishing the course speeds it up", sentences: [4] },
      { point: "A consequence, with a named example", sentences: [5] },
    ],
    level: "It tells natural selection as a sequence — mutation, selection, survival, inheritance — and makes clear that it is the POPULATION that changes over generations.",
    slip: "Saying the bacteria \"get used to\" the antibiotic or \"become immune\". No individual bacterium changes; the resistant ones were already resistant, and they are the ones left.",
  },

  "biology/classification-and-selection": {
    question: "Describe the process of selective breeding, and evaluate its use in farming.",
    marks: 6,
    answer: [
      "Breeders choose parents that show a desired characteristic, such as cows that produce a lot of milk.",
      "They breed these together, then choose the offspring that show the most of that characteristic and breed them.",
      "This is repeated over many generations, until all the offspring show the characteristic.",
      "It has produced crops with higher yields and resistance to disease, and animals that produce more food, which helps to feed more people.",
      "However, breeding closely related animals is inbreeding, which makes some breeds prone to disease or inherited defects, and it reduces variation, so a new disease could affect the whole population.",
      "On balance, selective breeding has greatly increased food production, but breeders need to keep enough variation in their stock to avoid these risks.",
    ],
    points: [
      { point: "Choose parents with the desired characteristic", sentences: [0] },
      { point: "Breed them and select the best offspring", sentences: [1] },
      { point: "Repeat over many generations", sentences: [2] },
      { point: "Benefits for farming", sentences: [3] },
      { point: "Inbreeding and reduced variation", sentences: [4] },
      { point: "A justified conclusion", sentences: [5] },
    ],
    level: "It describes the process in the right order, then weighs a benefit against a risk and reaches a judgement — the two halves the question asks for.",
    slip: "Confusing selective breeding with genetic engineering. Selective breeding chooses which organisms reproduce; it never moves a gene from one species into another.",
  },

  "biology/ecosystems-and-food-chains": {
    question: "Explain how carbon is cycled between living things and the atmosphere.",
    marks: 6,
    answer: [
      "Plants take carbon dioxide from the air and use it in photosynthesis to make glucose, so the carbon becomes part of the plant's carbohydrates, fats and proteins.",
      "Animals take in carbon by eating plants, or by eating other animals.",
      "Plants, animals and microorganisms all release carbon dioxide back into the air through respiration.",
      "When plants and animals die or produce waste, microorganisms such as bacteria and fungi decay the remains and release carbon dioxide as they respire.",
      "Burning fossil fuels and wood (combustion) also returns carbon dioxide to the atmosphere.",
      "Some carbon is locked away for millions of years when dead organisms do not decay and instead form fossil fuels.",
    ],
    points: [
      { point: "Photosynthesis removes carbon dioxide", sentences: [0] },
      { point: "Carbon passes along food chains by feeding", sentences: [1] },
      { point: "Respiration returns carbon dioxide", sentences: [2] },
      { point: "Decomposers respire as they decay dead material", sentences: [3] },
      { point: "Combustion", sentences: [4] },
      { point: "Fossil fuels as a long-term store", sentences: [5] },
    ],
    level: "It is a CYCLE: carbon is followed out of the air, through living things and back, with every process named and placed in the right direction.",
    slip: "Saying decomposers \"turn dead things into carbon dioxide\" without saying how. The carbon dioxide comes from the decomposers RESPIRING — that word is the mark.",
  },

  "biology/biodiversity-and-human-impact": {
    question: "Explain how deforestation reduces biodiversity and contributes to climate change.",
    marks: 6,
    answer: [
      "Large areas of tropical forest are cut down to provide land for cattle and rice fields, and to grow crops for biofuels.",
      "The forest is the habitat of many species, so destroying it removes their food and shelter, and many die out, which reduces biodiversity.",
      "Fewer trees means less carbon dioxide is removed from the atmosphere by photosynthesis.",
      "If the trees are burned, combustion releases carbon dioxide, and if the wood is left to rot, microorganisms release carbon dioxide as they respire.",
      "More carbon dioxide in the atmosphere increases the greenhouse effect, which leads to global warming.",
      "Lower biodiversity also makes the remaining ecosystem less stable, because species depend on each other for food and shelter.",
    ],
    points: [
      { point: "Why forests are cleared", sentences: [0] },
      { point: "Habitat loss reduces biodiversity", sentences: [1] },
      { point: "Less photosynthesis", sentences: [2] },
      { point: "Burning and decay release carbon dioxide", sentences: [3] },
      { point: "Greenhouse effect and global warming", sentences: [4] },
      { point: "Less stable ecosystem", sentences: [5] },
    ],
    level: "Both effects are explained, not just named: habitat loss for biodiversity, and BOTH ways deforestation adds carbon dioxide — less taken in, more released.",
    slip: "Only saying \"trees make oxygen\". The climate mark is about carbon dioxide: less of it absorbed, and more of it released by burning and decay.",
  },

  "biology/biology-exam-practice": {
    question: "Describe a method to investigate the effect of pH on the rate of reaction of amylase.",
    marks: 6,
    answer: [
      "Put one drop of iodine solution into each well of a spotting tile.",
      "Place 2 cm³ each of starch solution, amylase solution and a pH buffer in separate test tubes in a water bath at 35 °C, so they all reach the same temperature.",
      "Mix the amylase, the buffer and the starch, and start a stopwatch.",
      "Every 30 seconds, put a drop of the mixture into a fresh well of iodine: it turns blue-black while starch is present, and stays orange once all the starch has been broken down.",
      "Record the time taken for the starch to be broken down, then repeat with buffers of pH 5, 6, 7, 8 and 9, keeping the temperature, the volumes and the concentrations the same.",
      "Repeat each pH three times and calculate a mean, then work out the rate as 1000 ÷ time.",
    ],
    points: [
      { point: "Iodine as the test for starch, with both colours", sentences: [0, 3] },
      { point: "Temperature controlled with a water bath", sentences: [1] },
      { point: "Mix and start timing", sentences: [2] },
      { point: "Sample at regular intervals", sentences: [3] },
      { point: "Change only the pH; keep the other variables the same", sentences: [4] },
      { point: "Repeats, a mean, and how to work out the rate", sentences: [5] },
    ],
    level: "It is a method someone could carry out, in order, that names the independent variable, controls the others and says exactly what is measured — the three things every required-practical question is checking.",
    slip: "Leaving out what you would KEEP THE SAME. \"Change the pH and time it\" is not a fair test; the control variables are where a large share of the marks on a method question are.",
  },
};
