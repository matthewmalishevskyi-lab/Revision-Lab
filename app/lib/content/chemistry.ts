// CHEMISTRY — Years 9 and 10 being written. Year 11 planned, not yet written.
//
// ⚠️ FOUNDATION AND HIGHER
//
// Chemistry is tiered: Foundation is graded 1-5, Higher 4-9, and AQA marks
// Higher-only material "(HT only)" in its specification.
//
// The same principle is used here as in Biology, and it is deliberate. The two
// possible mistakes are NOT symmetrical:
//
//   - Failing to flag something that IS Higher-only costs a Foundation student
//     a little wasted revision. Annoying, harmless.
//   - Wrongly flagging something as Higher-only tells a Foundation student to
//     skip material that WILL be on their paper. That costs real marks.
//
// So this file UNDER-flags on purpose. Only the areas where the split is well
// established carry a badge — most of them in Quantitative chemistry, where the
// mole calculations genuinely are Higher tier, plus half equations in
// electrolysis and the equilibrium work.
//
// Year 9 atomic structure and bonding is almost entirely common to both tiers,
// so there is very little flagged there. That is the honest position, not a gap.
//
// ⚠️ Boards differ. This follows AQA; Edexcel and OCR draw the line slightly
// differently. Treat a badge as a strong hint to check your own specification.
//
// ⚠️ RELATIVE ATOMIC MASSES used in worked examples are the values printed on a
// GCSE periodic table (H=1, C=12, N=14, O=16, Na=23, Mg=24, S=32, Cl=35.5,
// Ca=40, Fe=56, Cu=63.5). Your own data sheet is the authority in an exam.

import type { TopicContent } from "./index";

export const CHEMISTRY: Record<string, TopicContent> = {
  "chemistry/atomic-structure": {
    summary:
      "Everything in Chemistry follows from what an atom is made of and how those parts are arranged. This topic covers the sub-atomic particles, how to read atomic number and mass number, isotopes, and how the model of the atom changed as new evidence arrived — which is one of the best examples in all of science of a theory being replaced because an experiment demanded it.",
    keyFacts: [
      {
        heading: "The sub-atomic particles",
        points: [
          "PROTONS: relative charge +1, relative mass 1, found in the nucleus.",
          "NEUTRONS: relative charge 0, relative mass 1, found in the nucleus.",
          "ELECTRONS: relative charge −1, relative mass very nearly 0, in shells around the nucleus.",
          "An atom has no overall charge because the number of protons equals the number of electrons.",
          "Almost all the mass is in the nucleus, but the nucleus is tiny — the atom is mostly empty space.",
          "Atomic radius is about 0.1 nm; the nucleus is around 1/10,000 of that.",
        ],
      },
      {
        heading: "Atomic number and mass number",
        points: [
          "ATOMIC NUMBER = the number of protons. It defines which element the atom is.",
          "MASS NUMBER = protons + neutrons.",
          "Number of neutrons = mass number − atomic number.",
          "In a neutral atom, number of electrons = number of protons.",
          "ISOTOPES are atoms of the same element with the same protons but DIFFERENT numbers of neutrons.",
          "Isotopes have identical chemical properties, because chemistry depends on electrons, not neutrons.",
        ],
      },
      {
        heading: "Electron shells",
        points: [
          "Electrons occupy shells, filling the lowest available shell first.",
          "The first shell holds up to 2 electrons; the second and third hold up to 8 each at GCSE.",
          "Electronic structure is written as numbers separated by commas: sodium is 2,8,1.",
          "The number of electrons in the OUTER shell determines how an element reacts.",
          "Group number equals the number of outer electrons (except for the transition metals and group 0).",
        ],
      },
      {
        heading: "How the model changed",
        points: [
          "Before the electron was discovered, atoms were thought to be tiny indivisible spheres.",
          "PLUM PUDDING model: a ball of positive charge with electrons embedded in it.",
          "The ALPHA SCATTERING experiment fired alpha particles at gold foil. Most passed straight through, some were deflected, a few bounced back.",
          "That could not happen with a plum pudding, so the NUCLEAR model replaced it: a tiny, dense, positively charged nucleus with mostly empty space around it.",
          "BOHR then showed electrons must orbit in fixed shells at set distances, which matched experimental observations.",
          "Later work identified protons, and CHADWICK provided evidence for neutrons about twenty years after the nucleus was found.",
        ],
      },
    ],
    flashcards: [
      { term: "Atom", definition: "The smallest part of an element that can exist, with a nucleus surrounded by electrons." },
      { term: "Proton", definition: "A positively charged particle in the nucleus, relative charge +1 and relative mass 1." },
      { term: "Neutron", definition: "An uncharged particle in the nucleus, relative charge 0 and relative mass 1." },
      { term: "Electron", definition: "A negatively charged particle in shells around the nucleus, with almost no mass." },
      { term: "Atomic number", definition: "The number of protons in an atom, which defines the element." },
      { term: "Mass number", definition: "The total number of protons and neutrons in an atom." },
      { term: "Isotope", definition: "Atoms of the same element with the same number of protons but different numbers of neutrons." },
      { term: "Electronic structure", definition: "The arrangement of electrons in shells, written as 2,8,1 for sodium." },
      { term: "Nucleus", definition: "The tiny dense centre of an atom containing protons and neutrons." },
      { term: "Element", definition: "A substance made of only one type of atom." },
      { term: "Compound", definition: "A substance containing two or more elements chemically bonded together." },
      { term: "Plum pudding model", definition: "The old model of a ball of positive charge with electrons embedded in it." },
      { term: "Alpha scattering experiment", definition: "Firing alpha particles at gold foil, which showed the atom has a tiny dense nucleus." },
      { term: "Nuclear model", definition: "The model in which a small dense positive nucleus is surrounded by electrons and empty space." },
      { term: "Relative atomic mass", definition: "The average mass of an element's atoms compared with carbon-12, allowing for isotope abundance." },
    ],
    examTips: [
      {
        tip: "Neutrons = mass number − atomic number",
        detail:
          "The single most useful line in the topic. Write it down before attempting any particle-counting question.",
      },
      {
        tip: "Isotopes differ in NEUTRONS, not electrons",
        detail:
          "Same protons, same electrons, same chemistry — only the mass differs. Saying isotopes have different electrons is a common and costly error.",
      },
      {
        tip: "Explain the alpha scattering results one by one",
        detail:
          "Most passed through → mostly empty space. Some deflected → a concentrated positive charge. A few bounced back → that charge is dense and massive. Three observations, three conclusions.",
      },
      {
        tip: "Group number = outer electrons",
        detail:
          "Sodium is 2,8,1 and is in group 1. This link between structure and the periodic table is examined constantly.",
      },
      {
        tip: "Say the atom is neutral because protons = electrons",
        detail:
          "The equal numbers are the reason, not just a fact to state. Questions often ask you to explain rather than assert.",
      },
      {
        tip: "Don't confuse mass number with relative atomic mass",
        detail:
          "Mass number is for one atom and is always a whole number. Relative atomic mass is an average over isotopes, which is why chlorine's is 35.5.",
      },
    ],
    workedExamples: [
      {
        question:
          "An atom has atomic number 11 and mass number 23. State its numbers of protons, neutrons and electrons, and write its electronic structure.",
        steps: [
          "Protons = atomic number = 11.",
          "Neutrons = mass number − atomic number = 23 − 11 = 12.",
          "The atom is neutral, so electrons = protons = 11.",
          "Fill the shells lowest first: 2, then 8, leaving 1. Electronic structure is 2,8,1 — this is sodium, in group 1.",
        ],
        answer: "11 protons, 12 neutrons, 11 electrons; structure 2,8,1",
      },
      {
        question:
          "Chlorine exists as 75% chlorine-35 and 25% chlorine-37. Calculate its relative atomic mass.",
        steps: [
          "Relative atomic mass = the sum of (isotope mass × percentage) ÷ 100.",
          "= (35 × 75) + (37 × 25), all divided by 100.",
          "= (2,625 + 925) ÷ 100 = 3,550 ÷ 100.",
          "= 35.5, which is exactly the value printed on the periodic table.",
        ],
        answer: "35.5",
      },
    ],
    practice: [
      {
        question: "What is the relative charge of a proton? Give the number only, including the sign if negative.",
        accept: ["+1", "1"],
        answer:
          "+1. A neutron is 0 and an electron is −1. An atom is neutral overall because it has equal numbers of protons and electrons.",
      },
      {
        question: "What is the relative charge of an electron? Give the number only, including the sign.",
        accept: ["-1"],
        answer:
          "−1. Its mass is very nearly zero, which is why almost all an atom's mass is concentrated in the nucleus.",
      },
      {
        question: "Which sub-atomic particle has no charge?",
        accept: ["neutron", "neutrons", "the neutron"],
        answer:
          "The neutron. It sits in the nucleus alongside the protons and has a relative mass of 1, the same as a proton.",
      },
      {
        question: "What does the atomic number of an element tell you?",
        accept: ["number of protons", "protons", "proton number", "how many protons"],
        answer:
          "The number of protons, which defines the element. Change it and you have a different element entirely.",
      },
      {
        question: "An atom has atomic number 6 and mass number 14. How many neutrons does it have? Give the number only.",
        accept: ["8"],
        answer:
          "8. Neutrons = mass number − atomic number = 14 − 6 = 8. This is carbon-14, the isotope used in radiocarbon dating.",
      },
      {
        question: "An atom has atomic number 17 and mass number 35. How many neutrons does it have? Give the number only.",
        accept: ["18"],
        answer:
          "18. 35 − 17 = 18. This is chlorine-35, the more common of chlorine's two main isotopes.",
      },
      {
        question: "How many electrons does a neutral atom with 12 protons have? Give the number only.",
        accept: ["12"],
        answer:
          "12. In a neutral atom the numbers of protons and electrons are always equal — that is what makes the charges cancel out.",
      },
      {
        question: "What is the maximum number of electrons in the first shell? Give the number only.",
        accept: ["2", "two"],
        answer:
          "2. The second and third shells hold up to 8 each at GCSE, and electrons always fill the lowest available shell first.",
      },
      {
        question: "Write the electronic structure of an atom with 11 electrons, using commas.",
        accept: ["2,8,1", "2.8.1", "281", "2, 8, 1"],
        answer:
          "2,8,1 — this is sodium. One outer electron places it in group 1, which is why it is so reactive.",
      },
      {
        question: "Write the electronic structure of an atom with 17 electrons, using commas.",
        accept: ["2,8,7", "2.8.7", "287", "2, 8, 7"],
        answer:
          "2,8,7 — chlorine. Seven outer electrons places it in group 7, one short of a full shell, which is why it reacts so readily.",
      },
      {
        question: "What is the name for atoms of the same element with different numbers of neutrons?",
        accept: ["isotopes", "isotope"],
        answer:
          "Isotopes. They have identical chemical properties because chemistry depends on electrons, and isotopes have the same number of those.",
      },
      {
        question: "Which model of the atom did the nuclear model replace?",
        accept: ["plum pudding", "plum pudding model", "the plum pudding model"],
        answer:
          "The plum pudding model — a ball of positive charge with electrons embedded. The alpha scattering results were impossible to explain with it.",
      },
      {
        question: "In the alpha scattering experiment, what did most alpha particles do?",
        accept: ["passed through", "went straight through", "passed straight through", "not deflected", "went through"],
        answer:
          "They passed straight through, which showed the atom is mostly empty space. The few that bounced back showed the nucleus is tiny, dense and positive.",
      },
      {
        question: "Which scientist provided evidence for the existence of the neutron?",
        accept: ["chadwick", "james chadwick"],
        answer:
          "James Chadwick, about twenty years after the nucleus was discovered. Neutrons were the hardest particle to detect because they have no charge.",
      },
      {
        question: "Chlorine is 75% chlorine-35 and 25% chlorine-37. Calculate its relative atomic mass. Give the number only.",
        accept: ["35.5"],
        answer:
          "35.5. (35 × 75 + 37 × 25) ÷ 100 = 3,550 ÷ 100 = 35.5. That is why the periodic table shows a decimal rather than a whole number.",
      },
      {
        question: "Explain how the alpha scattering experiment led to the nuclear model of the atom. Write three or four sentences.",
        answer:
          "Alpha particles were fired at a very thin sheet of gold foil. Most passed straight through undeflected, which showed that the atom is mostly empty space rather than the solid mass of positive charge the plum pudding model described. Some were deflected through small angles, showing that there is a concentrated region of positive charge that repels them, and a very small number bounced almost straight back, which meant that region must be both extremely small and very dense. The conclusion was a tiny, dense, positively charged nucleus surrounded largely by empty space with electrons in it. Mark this one yourself: each observation must be paired with the conclusion it supports.",
      },
      {
        question: "Explain why isotopes of an element have identical chemical properties.",
        answer:
          "Isotopes have the same number of protons and therefore the same number of electrons in a neutral atom, arranged in the same electronic structure. Chemical reactions involve the loss, gain or sharing of outer electrons, so two isotopes behave identically in any reaction. The only difference is the number of neutrons, which changes the mass but has no effect on how the atom bonds. Mark this one yourself: the mark is for chemistry depending on ELECTRONS, not for simply stating that isotopes are similar.",
      },
    ],
    misconceptions: [
      {
        wrong: "Isotopes have different numbers of electrons.",
        right:
          "They differ only in NEUTRONS. Protons and electrons are unchanged, which is exactly why their chemistry is identical.",
      },
      {
        wrong: "Mass number and relative atomic mass are the same thing.",
        right:
          "Mass number counts protons and neutrons in one atom and is a whole number. Relative atomic mass averages over isotopes, which is why chlorine's is 35.5.",
      },
      {
        wrong: "The atom is a solid ball of matter.",
        right:
          "It is mostly empty space. The nucleus holds nearly all the mass in about a ten-thousandth of the radius.",
      },
      {
        wrong: "The plum pudding model was simply wrong and useless.",
        right:
          "It fitted the evidence available at the time and was replaced when new evidence appeared. That is how science is supposed to work.",
      },
      {
        wrong: "Electrons in the outer shell do not matter much.",
        right:
          "They determine everything about how an element reacts, and the number of them is what places an element in its group.",
      },
    ],
  },

  "chemistry/the-periodic-table": {
    summary:
      "The periodic table is not a list — it is a map, arranged so that elements with similar properties line up. This topic covers how it was built, why Mendeleev's version worked when others had failed, and the trends in group 1, group 7 and group 0 that you are expected to explain rather than merely recite.",
    keyFacts: [
      {
        heading: "How it is arranged",
        points: [
          "Elements are arranged in order of increasing ATOMIC NUMBER.",
          "Elements with similar properties fall into columns called GROUPS.",
          "The group number equals the number of electrons in the outer shell.",
          "Rows are called PERIODS, and the period number equals the number of occupied shells.",
          "Metals are on the left and towards the bottom; non-metals are on the right and towards the top.",
        ],
      },
      {
        heading: "How it was developed",
        points: [
          "Early tables were arranged by ATOMIC WEIGHT, which put some elements in the wrong group.",
          "MENDELEEV left GAPS for elements not yet discovered, and predicted their properties.",
          "He also switched the order of some pairs so that they fitted their group's properties.",
          "His predictions were later confirmed when those elements were found, which is why his table was accepted.",
          "Once protons were discovered, ordering by atomic number explained why his adjustments had been correct.",
        ],
      },
      {
        heading: "Group 1: the alkali metals",
        points: [
          "One electron in the outer shell, which they LOSE to form 1+ ions.",
          "Soft, with low densities and low melting points compared with most metals.",
          "React with water to give a metal hydroxide and hydrogen gas, producing an alkaline solution.",
          "Reactivity INCREASES down the group.",
          "Because the outer electron is further from the nucleus and shielded by more inner shells, so it is lost more easily.",
        ],
      },
      {
        heading: "Group 7 and group 0",
        points: [
          "Group 7, the halogens, have seven outer electrons and GAIN one to form 1− ions.",
          "Melting and boiling points INCREASE down group 7, and reactivity DECREASES.",
          "A more reactive halogen DISPLACES a less reactive one from its compound.",
          "Group 0, the noble gases, have full outer shells, so they are unreactive.",
          "Boiling points of the noble gases increase down the group as the atoms get larger.",
        ],
      },
    ],
    flashcards: [
      { term: "Periodic table", definition: "Elements arranged by increasing atomic number, so that similar elements fall into groups." },
      { term: "Group", definition: "A column of the periodic table; the group number equals the number of outer electrons." },
      { term: "Period", definition: "A row of the periodic table; the period number equals the number of occupied electron shells." },
      { term: "Mendeleev", definition: "The scientist who left gaps for undiscovered elements and predicted their properties." },
      { term: "Alkali metal", definition: "A group 1 element with one outer electron, which reacts with water to give an alkaline solution." },
      { term: "Halogen", definition: "A group 7 element with seven outer electrons, existing as diatomic molecules." },
      { term: "Noble gas", definition: "A group 0 element with a full outer shell, making it very unreactive." },
      { term: "Shielding", definition: "Inner electron shells reducing the attraction between the nucleus and the outer electrons." },
      { term: "Displacement reaction", definition: "A reaction where a more reactive element takes the place of a less reactive one in a compound." },
      { term: "Transition metal", definition: "A metal from the central block, typically hard, dense, with high melting points and coloured compounds." },
      { term: "Diatomic", definition: "Existing as molecules of two atoms, such as Cl₂ — true of all the halogens." },
      { term: "Ion", definition: "An atom or group of atoms that has gained or lost electrons and so carries a charge." },
      { term: "Reactivity", definition: "How readily an element takes part in chemical reactions." },
      { term: "Metal hydroxide", definition: "The alkaline compound formed when a group 1 metal reacts with water." },
    ],
    examTips: [
      {
        tip: "Explain reactivity trends through SHIELDING and DISTANCE",
        detail:
          "Down group 1, the outer electron is further out and shielded by more shells, so it is lost more easily. That sentence answers half the questions in this topic.",
      },
      {
        tip: "Group 1 gets MORE reactive down; group 7 gets LESS",
        detail:
          "The trends go opposite ways because one group loses an electron and the other gains one. Learn the reason, not just the direction.",
      },
      {
        tip: "Say what Mendeleev actually did that was clever",
        detail:
          "He left gaps and PREDICTED properties, and he swapped some pairs. It was the confirmed predictions that won acceptance.",
      },
      {
        tip: "Halogens are diatomic — write Cl₂, not Cl",
        detail:
          "In equations this matters enormously. Forgetting the 2 makes balancing impossible and loses marks throughout.",
      },
      {
        tip: "Noble gases are unreactive because shells are FULL",
        detail:
          "Not 'because they are gases'. The full outer shell is the reason, and it is the mark.",
      },
      {
        tip: "Learn one displacement example properly",
        detail:
          "Chlorine displaces bromine from potassium bromide. One worked example you can write out beats a vague sense of the rule.",
      },
    ],
    practice: [
      {
        question: "The periodic table is arranged in order of increasing what?",
        accept: ["atomic number", "proton number", "protons"],
        answer:
          "Atomic number. Earlier tables used atomic weight, which put a few elements in the wrong group — a problem solved once protons were understood.",
      },
      {
        question: "What is a column of the periodic table called?",
        accept: ["group", "a group", "groups"],
        answer:
          "A group. Elements in the same group have the same number of outer electrons, which is why they react in similar ways.",
      },
      {
        question: "What is a row of the periodic table called?",
        accept: ["period", "a period", "periods"],
        answer:
          "A period. The period number tells you how many electron shells are occupied.",
      },
      {
        question: "How many outer electrons does a group 1 element have? Give the number only.",
        accept: ["1", "one"],
        answer:
          "1. They lose it to form a 1+ ion, which is why they are so reactive — losing one electron gives them a full outer shell.",
      },
      {
        question: "How many outer electrons does a group 7 element have? Give the number only.",
        accept: ["7", "seven"],
        answer:
          "7. They gain one to form a 1− ion. Being just one short of a full shell is what makes them so reactive.",
      },
      {
        question: "Which scientist left gaps in his periodic table for undiscovered elements?",
        accept: ["mendeleev", "dmitri mendeleev"],
        answer:
          "Mendeleev. He also predicted the properties of the missing elements, and those predictions being confirmed is what won his table acceptance.",
      },
      {
        question: "Does reactivity increase or decrease going down group 1?",
        accept: ["increase", "increases", "goes up", "more reactive", "increasing"],
        answer:
          "It increases. The outer electron is further from the nucleus and shielded by more inner shells, so it is lost more easily.",
      },
      {
        question: "Does reactivity increase or decrease going down group 7?",
        accept: ["decrease", "decreases", "goes down", "less reactive", "decreasing"],
        answer:
          "It decreases — the opposite of group 1. Halogens need to GAIN an electron, and a larger, more shielded atom attracts one less strongly.",
      },
      {
        question: "Why are the noble gases unreactive?",
        accept: ["full outer shell", "full outer shells", "complete outer shell", "outer shell is full", "stable electron arrangement", "full shell"],
        answer:
          "They have a full outer shell, so they have no tendency to lose, gain or share electrons. The full shell is the reason — not the fact that they are gases.",
      },
      {
        question: "What are the group 1 metals collectively called?",
        accept: ["alkali metals", "alkali metal", "the alkali metals"],
        answer:
          "The alkali metals — named because they react with water to produce an alkaline metal hydroxide solution, along with hydrogen gas.",
      },
      {
        question: "What are the group 7 elements collectively called?",
        accept: ["halogens", "halogen", "the halogens"],
        answer:
          "The halogens. They exist as diatomic molecules — Cl₂, Br₂, I₂ — which matters enormously when balancing equations.",
      },
      {
        question: "What two products form when a group 1 metal reacts with water?",
        accept: ["metal hydroxide and hydrogen", "hydroxide and hydrogen", "hydrogen and metal hydroxide", "hydrogen and hydroxide"],
        answer:
          "A metal hydroxide and hydrogen gas. The hydroxide dissolves to give an alkaline solution, which is where the name alkali metal comes from.",
      },
      {
        question: "In a displacement reaction, does a more or less reactive halogen displace the other?",
        accept: ["more reactive", "more", "the more reactive one", "more reactive one"],
        answer:
          "The more reactive one. Chlorine displaces bromine from potassium bromide, because chlorine is higher in group 7 and therefore more reactive.",
      },
      {
        question: "Give one typical property of a transition metal.",
        accept: ["hard", "dense", "high melting point", "coloured compounds", "catalyst", "strong", "conducts", "multiple ions", "shiny"],
        answer:
          "Hard, dense, with high melting points, coloured compounds, and often useful as catalysts. Group 1 metals, by contrast, are soft with low melting points.",
      },
      {
        question: "Explain why reactivity increases down group 1. Write two or three sentences.",
        answer:
          "Going down the group, each element has an extra electron shell, so the outer electron is further from the nucleus. There are also more inner shells shielding it from the nucleus's positive charge. Both effects weaken the attraction holding that outer electron, so it is lost more easily — and since reacting means losing that electron, the element is more reactive. Mark this one yourself: distance AND shielding are both needed, and so is the link to losing the electron.",
      },
      {
        question: "Explain why Mendeleev's periodic table was accepted when earlier attempts were not.",
        answer:
          "Earlier tables arranged all known elements in order of atomic weight with no gaps, which forced some elements into groups whose properties they did not share. Mendeleev left gaps where he believed undiscovered elements belonged, and predicted the properties those elements would have. He also swapped the order of a few pairs so that each fell into the group matching its behaviour. When the missing elements were later discovered and matched his predictions closely, the table's predictive power convinced other scientists — and the discovery of protons later explained why his reordering had been right all along. Mark this one yourself: gaps, predictions and their later confirmation are the three key points.",
      },
    ],
    misconceptions: [
      {
        wrong: "The periodic table is arranged by atomic mass.",
        right:
          "It is arranged by atomic NUMBER. Early versions used mass, which put a few elements in the wrong groups.",
      },
      {
        wrong: "Group 1 and group 7 reactivity trends go the same way.",
        right:
          "Group 1 gets MORE reactive down; group 7 gets LESS. Losing an electron gets easier with size; gaining one gets harder.",
      },
      {
        wrong: "Noble gases are unreactive because they are gases.",
        right:
          "It is the full outer shell. Being a gas at room temperature is a consequence of weak forces between atoms, not the reason for the lack of reactivity.",
      },
      {
        wrong: "Halogens exist as single atoms.",
        right:
          "They are diatomic — Cl₂, Br₂, I₂. Forgetting this makes balancing equations impossible.",
      },
      {
        wrong: "Mendeleev's table was right because he knew about protons.",
        right:
          "Protons were not discovered until decades later. He arranged by weight and properties, and left gaps — the explanation came afterwards.",
      },
    ],
  },

  "chemistry/ionic-and-covalent-bonding": {
    summary:
      "Every compound exists because atoms have done one of three things with their outer electrons: transferred them, shared them, or pooled them. This topic covers ionic, covalent and metallic bonding, and — more importantly — how each type of bonding explains the properties you can actually measure, which is what exam questions really ask.",
    keyFacts: [
      {
        heading: "Why atoms bond at all",
        points: [
          "Atoms bond to achieve a FULL OUTER SHELL, which is a stable arrangement.",
          "Metals have few outer electrons, so they LOSE them to form POSITIVE ions.",
          "Non-metals are closer to a full shell, so they GAIN or SHARE electrons.",
          "IONIC bonding happens between a metal and a non-metal: electrons are transferred.",
          "COVALENT bonding happens between non-metals: electrons are shared.",
          "METALLIC bonding happens between metal atoms: outer electrons are delocalised and shared across the whole structure.",
        ],
      },
      {
        heading: "Ionic bonding",
        points: [
          "The metal atom loses electrons to become a positive ion; the non-metal gains them to become negative.",
          "The bond is the strong ELECTROSTATIC ATTRACTION between oppositely charged ions.",
          "Ionic compounds form a GIANT IONIC LATTICE — a regular repeating three-dimensional arrangement.",
          "High melting and boiling points, because a great deal of energy is needed to overcome many strong attractions.",
          "They do NOT conduct when solid, because the ions cannot move.",
          "They DO conduct when molten or dissolved, because the ions become free to move and carry charge.",
        ],
      },
      {
        heading: "Covalent bonding",
        points: [
          "A covalent bond is a SHARED PAIR of electrons, and it is very strong.",
          "SIMPLE MOLECULAR substances have strong bonds within the molecule but WEAK INTERMOLECULAR FORCES between molecules.",
          "That is why they have low melting and boiling points — you break the weak forces between molecules, not the covalent bonds.",
          "Simple molecular substances do not conduct electricity, because the molecules have no overall charge.",
          "GIANT COVALENT structures such as diamond and silicon dioxide have covalent bonds throughout, so melting points are very high.",
          "Larger molecules have stronger intermolecular forces, so their melting and boiling points are higher.",
        ],
      },
      {
        heading: "Metallic bonding and alloys",
        points: [
          "Metals are a lattice of positive ions in a 'sea' of DELOCALISED electrons.",
          "The bond is the attraction between the positive ions and those delocalised electrons.",
          "Metals conduct electricity and heat because the delocalised electrons are free to move.",
          "Metals are malleable because layers of ions can slide over one another.",
          "ALLOYS are harder because the different-sized atoms distort the layers, so they cannot slide as easily.",
        ],
      },
    ],
    flashcards: [
      { term: "Ionic bond", definition: "The strong electrostatic attraction between oppositely charged ions, formed by transferring electrons." },
      { term: "Covalent bond", definition: "A shared pair of electrons between two non-metal atoms." },
      { term: "Metallic bond", definition: "The attraction between positive metal ions and a sea of delocalised electrons." },
      { term: "Ion", definition: "An atom or group of atoms that has gained or lost electrons and carries a charge." },
      { term: "Giant ionic lattice", definition: "A regular repeating three-dimensional arrangement of oppositely charged ions." },
      { term: "Electrostatic attraction", definition: "The force of attraction between opposite charges, which holds ionic compounds together." },
      { term: "Simple molecular", definition: "A substance made of small molecules with weak forces between them." },
      { term: "Intermolecular forces", definition: "The weak forces BETWEEN molecules, which are broken when a simple molecular substance melts." },
      { term: "Giant covalent structure", definition: "A structure where covalent bonds extend throughout, such as diamond or silicon dioxide." },
      { term: "Delocalised electrons", definition: "Electrons free to move through a whole structure, found in metals and in graphite." },
      { term: "Alloy", definition: "A mixture of a metal with other elements, harder than the pure metal because layers cannot slide." },
      { term: "Malleable", definition: "Able to be hammered into shape without breaking — true of pure metals." },
      { term: "Dot and cross diagram", definition: "A diagram showing where the electrons in a bond have come from." },
      { term: "Molten", definition: "Melted — an ionic compound conducts when molten because its ions can move." },
      { term: "Lattice", definition: "A regular repeating arrangement of particles." },
    ],
    examTips: [
      {
        tip: "Metal + non-metal is ionic; non-metal + non-metal is covalent",
        detail:
          "Check the periodic table before you start. Identifying the bonding type wrongly makes every subsequent answer wrong.",
      },
      {
        tip: "Low melting point means WEAK FORCES BETWEEN molecules",
        detail:
          "Not weak covalent bonds. The covalent bonds are strong and are not broken when the substance melts. This is the single most examined distinction in the topic.",
      },
      {
        tip: "Explain conduction through MOVING CHARGED PARTICLES",
        detail:
          "Ionic solids do not conduct because ions cannot move; molten ones do because they can. Metals conduct because delocalised electrons move.",
      },
      {
        tip: "Say 'electrostatic attraction between oppositely charged ions'",
        detail:
          "That exact phrase is what the mark scheme wants for an ionic bond. 'They stick together' is worth nothing.",
      },
      {
        tip: "Explain alloy hardness through layers",
        detail:
          "Different-sized atoms distort the layers so they cannot slide over each other. The sliding layers idea explains both malleability and alloy hardness.",
      },
      {
        tip: "In dot and cross diagrams, show only OUTER electrons",
        detail:
          "And use different symbols for each atom's electrons so it is clear where they came from. Charges must be shown on ions, in square brackets.",
      },
    ],
    practice: [
      {
        question: "What type of bonding occurs between a metal and a non-metal?",
        accept: ["ionic", "ionic bonding", "ionic bond"],
        answer:
          "Ionic. Electrons are transferred from the metal to the non-metal, producing oppositely charged ions that attract each other strongly.",
      },
      {
        question: "What type of bonding occurs between two non-metals?",
        accept: ["covalent", "covalent bonding", "covalent bond"],
        answer:
          "Covalent — a shared pair of electrons. Both atoms are close to a full shell, so sharing is easier than transferring.",
      },
      {
        question: "What is a covalent bond?",
        accept: ["a shared pair of electrons", "shared pair of electrons", "shared electrons", "shared pair"],
        answer:
          "A shared pair of electrons between two atoms. The bond itself is very strong — it is the forces BETWEEN molecules that are weak.",
      },
      {
        question: "What holds an ionic compound together?",
        accept: ["electrostatic attraction", "electrostatic forces", "attraction between opposite charges", "electrostatic attraction between oppositely charged ions", "opposite charges"],
        answer:
          "The strong electrostatic attraction between oppositely charged ions. That exact phrase is what mark schemes look for.",
      },
      {
        question: "Why does an ionic compound NOT conduct electricity when solid?",
        accept: ["ions cannot move", "ions are fixed", "ions cant move", "no free ions", "ions not free to move", "ions held in place"],
        answer:
          "Because the ions are held in fixed positions in the lattice and cannot move. Conduction needs charged particles that are free to move.",
      },
      {
        question: "When does an ionic compound conduct electricity?",
        accept: ["when molten or dissolved", "molten or dissolved", "when molten", "dissolved", "in solution", "molten", "liquid or dissolved"],
        answer:
          "When molten or dissolved in water, because the ions are then free to move and carry charge through the liquid.",
      },
      {
        question: "Why do simple molecular substances have low melting points?",
        accept: ["weak intermolecular forces", "weak forces between molecules", "intermolecular forces are weak", "weak forces", "weak intermolecular"],
        answer:
          "Because the forces BETWEEN the molecules are weak and need little energy to overcome. The covalent bonds inside each molecule are strong and are not broken.",
      },
      {
        question: "What are the free-moving electrons in a metal called?",
        accept: ["delocalised", "delocalised electrons", "delocalized electrons", "delocalized"],
        answer:
          "Delocalised electrons. They are why metals conduct electricity and heat so well, and they also form the metallic bond itself.",
      },
      {
        question: "Why are metals malleable?",
        accept: ["layers slide", "layers can slide", "layers of ions slide", "layers slide over each other", "ions slide"],
        answer:
          "Because the layers of positive ions can slide over one another without breaking the metallic bonding, so the metal changes shape rather than shattering.",
      },
      {
        question: "Why is an alloy harder than a pure metal?",
        accept: ["different sized atoms", "distorts layers", "layers cannot slide", "different size atoms", "disrupts layers", "stops layers sliding", "atoms different sizes"],
        answer:
          "The atoms of different elements are different sizes, so they distort the regular layers and stop them sliding over each other easily.",
      },
      {
        question: "Name a substance with a giant covalent structure.",
        accept: ["diamond", "graphite", "silicon dioxide", "silica", "sand", "graphene"],
        answer:
          "Diamond, graphite or silicon dioxide. Covalent bonds extend throughout the whole structure, so melting them means breaking millions of strong bonds.",
      },
      {
        question: "Do simple molecular substances conduct electricity? Answer yes or no.",
        accept: ["no", "n"],
        answer:
          "No. The molecules have no overall charge and there are no free electrons or ions, so there is nothing to carry the current.",
      },
      {
        question: "What charge does a group 1 metal ion have? Give the sign and number.",
        accept: ["+1", "1+", "positive 1", "+"],
        answer:
          "1+. It loses its single outer electron, leaving one more proton than electrons, which gives a charge of +1.",
      },
      {
        question: "What charge does a group 7 ion have? Give the sign and number.",
        accept: ["-1", "1-", "negative 1", "-"],
        answer:
          "1−. It gains one electron to complete its outer shell, giving it one more electron than protons.",
      },
      {
        question: "Explain why sodium chloride has a high melting point. Write two or three sentences.",
        answer:
          "Sodium chloride is a giant ionic lattice, with each ion surrounded by oppositely charged ions in a regular repeating structure. The bonding is strong electrostatic attraction between those oppositely charged ions, and there are enormous numbers of these attractions throughout the lattice. Melting it means overcoming all of them, which requires a great deal of energy and therefore a very high temperature. Mark this one yourself: giant lattice, strong electrostatic attraction, and MANY of them are the three things worth credit.",
      },
      {
        question: "Explain why chlorine (Cl₂) has a much lower boiling point than sodium chloride.",
        answer:
          "Chlorine is simple molecular — small Cl₂ molecules with strong covalent bonds inside each one but only weak intermolecular forces between them. Boiling chlorine requires only enough energy to overcome those weak forces between molecules, not to break the covalent bonds, so it happens at a very low temperature. Sodium chloride is a giant ionic lattice held together by strong electrostatic attractions throughout, and there are millions of them to overcome, so it needs a far higher temperature. Mark this one yourself: the crucial point is that boiling breaks the forces BETWEEN molecules, not the covalent bonds.",
      },
    ],
    misconceptions: [
      {
        wrong: "Simple molecular substances melt at low temperatures because covalent bonds are weak.",
        right:
          "Covalent bonds are very strong. Melting breaks the WEAK INTERMOLECULAR FORCES between molecules, leaving the bonds inside each molecule intact.",
      },
      {
        wrong: "Ionic compounds never conduct electricity.",
        right:
          "They conduct when molten or dissolved, because the ions are then free to move. They only fail to conduct as solids.",
      },
      {
        wrong: "Metals conduct because the ions move.",
        right:
          "It is the DELOCALISED ELECTRONS that move. The positive ions stay in their lattice positions.",
      },
      {
        wrong: "An alloy is a compound.",
        right:
          "It is a mixture. The elements are not chemically bonded in fixed ratios, which is why the proportions can be varied.",
      },
      {
        wrong: "Atoms bond because they want a full outer shell.",
        right:
          "Atoms have no wants. Bonding happens because the resulting arrangement is at lower energy and therefore more stable — 'full shell' is a useful shorthand, not a motive.",
      },
    ],
  },

  "chemistry/states-and-structures": {
    summary:
      "This topic explains why a substance is a solid, liquid or gas at room temperature, and why diamond and graphite — both pure carbon — could hardly be more different. The whole subject reduces to one idea: structure and bonding determine properties, and exam questions are almost always asking you to make that link.",
    keyFacts: [
      {
        heading: "The three states",
        points: [
          "SOLID: particles packed closely in fixed positions, vibrating. Fixed shape and volume.",
          "LIQUID: particles close together but able to move past each other. Fixed volume, takes the shape of its container.",
          "GAS: particles far apart, moving quickly and randomly. No fixed shape or volume.",
          "Melting and boiling happen when enough energy is supplied to overcome the forces between particles.",
          "The stronger those forces, the higher the melting and boiling points.",
          "State symbols: (s) solid, (l) liquid, (g) gas, (aq) dissolved in water.",
        ],
      },
      {
        heading: "Limits of the particle model",
        points: [
          "The simple model treats particles as solid spheres with no forces shown between them.",
          "It ignores the fact that particles are not solid, and are not all the same size.",
          "It does not show the different strengths of forces between different substances.",
          "Models are useful simplifications, and knowing where a model breaks down is examinable.",
        ],
      },
      {
        heading: "Diamond, graphite and graphene",
        points: [
          "DIAMOND: each carbon forms FOUR covalent bonds in a rigid giant structure. Very hard, very high melting point, does NOT conduct.",
          "It does not conduct because all four outer electrons are used in bonding, leaving none delocalised.",
          "GRAPHITE: each carbon forms THREE covalent bonds, giving layers of hexagonal rings.",
          "The fourth electron is DELOCALISED, so graphite DOES conduct electricity.",
          "Layers are held together by weak forces and can slide, which makes graphite soft and slippery — useful as a lubricant.",
          "GRAPHENE is a single layer of graphite: extremely strong, very light, and conducts electricity.",
        ],
      },
      {
        heading: "Fullerenes, nanoparticles and polymers",
        points: [
          "FULLERENES are hollow carbon molecules; buckminsterfullerene (C₆₀) is a sphere of 60 carbon atoms.",
          "CARBON NANOTUBES are cylindrical fullerenes with very high strength-to-weight ratios, used in electronics and composites.",
          "NANOPARTICLES are 1-100 nm across, and have a very high surface area to volume ratio for their size.",
          "That large surface area means smaller quantities are needed, and makes them useful as catalysts and in sun creams.",
          "Risks are not fully understood — they may penetrate cells, and long-term health effects are still being researched.",
          "POLYMERS are very large molecules whose atoms are joined by covalent bonds, with strong intermolecular forces, so they are solid at room temperature.",
        ],
      },
    ],
    flashcards: [
      { term: "Solid", definition: "A state where particles are in fixed positions, vibrating, with a fixed shape and volume." },
      { term: "Liquid", definition: "A state where particles are close together but can move past each other." },
      { term: "Gas", definition: "A state where particles are far apart and move quickly and randomly." },
      { term: "State symbol", definition: "The letter in brackets in an equation: (s), (l), (g) or (aq)." },
      { term: "Diamond", definition: "A giant covalent structure where each carbon forms four bonds — hard and non-conducting." },
      { term: "Graphite", definition: "A giant covalent structure of layers where each carbon forms three bonds, leaving one delocalised electron." },
      { term: "Graphene", definition: "A single layer of graphite — extremely strong, light and electrically conducting." },
      { term: "Fullerene", definition: "A hollow molecule of carbon atoms, such as C₆₀ or a nanotube." },
      { term: "Buckminsterfullerene", definition: "A spherical fullerene made of 60 carbon atoms, C₆₀." },
      { term: "Carbon nanotube", definition: "A cylindrical fullerene with a very high strength-to-weight ratio." },
      { term: "Nanoparticle", definition: "A particle between 1 and 100 nanometres across, with a very high surface area to volume ratio." },
      { term: "Polymer", definition: "A very large molecule made of many repeating units joined by covalent bonds." },
      { term: "Lubricant", definition: "A substance that reduces friction — graphite works because its layers slide." },
      { term: "Surface area to volume ratio", definition: "Total surface area divided by volume; very high for nanoparticles." },
    ],
    examTips: [
      {
        tip: "Diamond does not conduct; graphite does — know WHY",
        detail:
          "Diamond uses all four outer electrons in bonding, leaving none free. Graphite uses three, leaving one delocalised. That one electron is the whole answer.",
      },
      {
        tip: "Graphite is soft because LAYERS SLIDE",
        detail:
          "Weak forces between layers let them slip. The covalent bonds within each layer are still very strong, which is why graphene is so tough.",
      },
      {
        tip: "Always link structure to property",
        detail:
          "Never state a property alone. 'Giant covalent, so many strong bonds must be broken, so a high melting point' is the shape of a full-mark answer.",
      },
      {
        tip: "Learn the state symbols and use them",
        detail:
          "(s), (l), (g), (aq). Marks are given for including them correctly in equations, and lost for leaving them out when asked.",
      },
      {
        tip: "Give a risk as well as a use for nanoparticles",
        detail:
          "The large surface area makes them useful and also means they may be absorbed into cells. Long-term effects are still being researched.",
      },
      {
        tip: "Know what the simple particle model leaves out",
        detail:
          "Particles are not solid spheres, are not all the same size, and the forces between them are not shown. Criticising a model is a standard question.",
      },
    ],
    practice: [
      {
        question: "In which state are particles in fixed positions, only vibrating?",
        accept: ["solid", "a solid", "solids"],
        answer:
          "Solid. That fixed arrangement is why solids keep their shape, unlike liquids whose particles can move past one another.",
      },
      {
        question: "What is the state symbol for a substance dissolved in water?",
        accept: ["aq", "(aq)"],
        answer:
          "(aq), short for aqueous. The others are (s) solid, (l) liquid and (g) gas, and marks are given for using them correctly.",
      },
      {
        question: "How many covalent bonds does each carbon atom form in diamond? Give the number only.",
        accept: ["4", "four"],
        answer:
          "4. Using all four outer electrons in bonding leaves none delocalised, which is exactly why diamond does not conduct electricity.",
      },
      {
        question: "How many covalent bonds does each carbon atom form in graphite? Give the number only.",
        accept: ["3", "three"],
        answer:
          "3. The fourth outer electron is delocalised and free to move, which is why graphite conducts electricity while diamond does not.",
      },
      {
        question: "Why does graphite conduct electricity?",
        accept: ["delocalised electrons", "free electrons", "delocalized electrons", "one electron is delocalised", "delocalised electron"],
        answer:
          "Each carbon uses only three of its four outer electrons in bonding, so the fourth is delocalised and free to move through the structure carrying charge.",
      },
      {
        question: "Why is graphite soft and slippery?",
        accept: ["layers slide", "layers can slide", "weak forces between layers", "layers slide over each other", "sliding layers"],
        answer:
          "Its layers are held together by weak forces, so they can slide over one another. That is why graphite works as a lubricant and as pencil lead.",
      },
      {
        question: "What is a single layer of graphite called?",
        accept: ["graphene"],
        answer:
          "Graphene. It is extremely strong for its weight and conducts electricity, which is why it attracts so much research interest.",
      },
      {
        question: "How many carbon atoms are in a molecule of buckminsterfullerene? Give the number only.",
        accept: ["60"],
        answer:
          "60 — the formula is C₆₀. It is a hollow sphere, and it was the first fullerene discovered.",
      },
      {
        question: "What is the size range of nanoparticles, in nanometres? Give the lower number only.",
        accept: ["1"],
        answer:
          "1 to 100 nanometres. Their defining feature is an extremely high surface area to volume ratio, which is what makes them so useful.",
      },
      {
        question: "Give one use of nanoparticles.",
        accept: ["catalysts", "sun cream", "suncream", "sunscreen", "cosmetics", "medicine", "electronics", "deodorant", "coatings"],
        answer:
          "Catalysts, sun creams, cosmetics, medicines and electronics. Their huge surface area means very small quantities are effective.",
      },
      {
        question: "Give one concern about using nanoparticles.",
        accept: ["health", "unknown effects", "enter cells", "toxicity", "long term effects", "not fully researched", "absorbed into cells", "environment"],
        answer:
          "Their long-term health effects are not fully understood, and their small size may let them penetrate cells or accumulate in the body.",
      },
      {
        question: "What is a cylindrical fullerene called?",
        accept: ["carbon nanotube", "nanotube", "nanotubes", "carbon nanotubes"],
        answer:
          "A carbon nanotube. They have a very high strength-to-weight ratio and conduct electricity, so they are used in electronics and composites.",
      },
      {
        question: "Give one limitation of the simple particle model.",
        accept: ["particles are not solid", "no forces shown", "particles are not spheres", "sizes not shown", "not all same size", "ignores forces", "particles arent spheres"],
        answer:
          "It treats particles as solid identical spheres and shows no forces between them, whereas in reality particles differ in size and the forces vary in strength.",
      },
      {
        question: "Why are polymers solid at room temperature?",
        accept: ["strong intermolecular forces", "large molecules", "big molecules", "strong forces between molecules", "long molecules"],
        answer:
          "Their molecules are very large, so the intermolecular forces between them are strong enough to need considerable energy to overcome.",
      },
      {
        question: "Explain why diamond is hard but graphite is soft, even though both are pure carbon. Write three or four sentences.",
        answer:
          "In diamond each carbon atom is covalently bonded to four others in a rigid three-dimensional structure, so there is no way for any part to move without breaking strong bonds — which makes it extremely hard. In graphite each carbon bonds to only three others, forming flat layers of hexagonal rings. The covalent bonds within each layer are just as strong, but the layers themselves are held to one another only by weak forces, so they can slide over each other easily. That sliding is what makes graphite soft and slippery. Mark this one yourself: the number of bonds and the weak forces BETWEEN layers are the two things being tested.",
      },
      {
        question: "Explain why nanoparticles are effective catalysts even in very small quantities.",
        answer:
          "Catalysis happens on the surface of the catalyst, so what matters is the total surface area available for reactions. Nanoparticles are so small that their surface area to volume ratio is enormous — dividing a lump into nanoparticles increases the exposed surface dramatically without increasing the mass. A tiny quantity therefore provides as much reacting surface as a much larger mass of ordinary material, which makes them both effective and cheaper to use. Mark this one yourself: the surface area to volume ratio, and the link to catalysis happening on the surface, are both needed.",
      },
    ],
    misconceptions: [
      {
        wrong: "Diamond and graphite are different substances chemically.",
        right:
          "Both are pure carbon. All the differences come from how the atoms are bonded and arranged, which is the central idea of the topic.",
      },
      {
        wrong: "Graphite is soft because its covalent bonds are weak.",
        right:
          "The bonds within each layer are very strong. It is the forces BETWEEN layers that are weak, letting them slide.",
      },
      {
        wrong: "All giant covalent structures conduct electricity.",
        right:
          "Only those with delocalised electrons. Diamond uses all four outer electrons in bonding and does not conduct; graphite has one spare and does.",
      },
      {
        wrong: "Nanoparticles are simply very small pieces of ordinary material.",
        right:
          "At that scale the surface area to volume ratio changes their behaviour, so they can act very differently from the bulk material.",
      },
      {
        wrong: "The particle model is a picture of what particles really look like.",
        right:
          "It is a simplification. Particles are not solid identical spheres, and the model shows no forces between them.",
      },
    ],
  },

  "chemistry/separating-mixtures": {
    summary:
      "A mixture is not a compound, and telling the two apart is the first thing this topic tests. The rest is practical: filtration, crystallisation, distillation and chromatography, and knowing which to choose for a given job. These are among the most reliably examined practical skills in Chemistry.",
    keyFacts: [
      {
        heading: "Mixtures and compounds",
        points: [
          "A MIXTURE contains two or more substances NOT chemically joined together.",
          "The substances keep their own properties, and can be separated by PHYSICAL means.",
          "A COMPOUND has elements chemically bonded in fixed proportions, and can only be separated by chemical reactions or electrolysis.",
          "Separating a mixture requires no chemical reaction, which is why it needs far less energy.",
          "PURE, in chemistry, means a single element or compound — not 'natural' or 'wholesome' as in everyday use.",
          "A pure substance melts and boils at a SHARP, specific temperature; a mixture melts over a RANGE.",
        ],
      },
      {
        heading: "Filtration and crystallisation",
        points: [
          "FILTRATION separates an insoluble solid from a liquid, using filter paper and a funnel.",
          "The solid left in the paper is the RESIDUE; the liquid that passes through is the FILTRATE.",
          "CRYSTALLISATION separates a soluble solid from its solution by evaporating the solvent.",
          "Heat gently and stop when crystals start to form, then leave the rest to evaporate slowly.",
          "Heating too strongly can decompose the compound or make the crystals small and impure.",
        ],
      },
      {
        heading: "Distillation",
        points: [
          "SIMPLE DISTILLATION separates a solvent from a solution, using the difference in boiling points.",
          "The solution is heated, the solvent evaporates, then condenses in the condenser and is collected.",
          "FRACTIONAL DISTILLATION separates a mixture of several liquids with different boiling points.",
          "A fractionating column has a temperature gradient — hottest at the bottom, coolest at the top.",
          "Substances with the lowest boiling points reach the top first and are collected first.",
          "It is used to separate crude oil into fractions, and to separate the gases in liquid air.",
        ],
      },
      {
        heading: "Chromatography",
        points: [
          "Chromatography separates substances by how strongly they are attracted to a STATIONARY phase versus a MOBILE phase.",
          "The stationary phase is the paper; the mobile phase is the solvent moving through it.",
          "Substances more attracted to the solvent travel further up the paper.",
          "Rf value = distance moved by the substance ÷ distance moved by the solvent.",
          "Rf is always between 0 and 1 and has no units.",
          "A PURE substance produces ONE spot on a chromatogram; a mixture produces several.",
          "Draw the start line in PENCIL, because ink would dissolve and travel up with the solvent.",
        ],
      },
    ],
    flashcards: [
      { term: "Mixture", definition: "Two or more substances that are not chemically joined together." },
      { term: "Compound", definition: "Two or more elements chemically bonded together in fixed proportions." },
      { term: "Pure substance", definition: "A single element or compound, which melts and boils at a sharp specific temperature." },
      { term: "Formulation", definition: "A mixture designed as a useful product, with each component in a measured quantity." },
      { term: "Filtration", definition: "Separating an insoluble solid from a liquid using filter paper." },
      { term: "Residue", definition: "The solid left behind in the filter paper during filtration." },
      { term: "Filtrate", definition: "The liquid that passes through the filter paper." },
      { term: "Crystallisation", definition: "Separating a soluble solid from a solution by evaporating the solvent." },
      { term: "Simple distillation", definition: "Separating a solvent from a solution using the difference in boiling points." },
      { term: "Fractional distillation", definition: "Separating several liquids with different boiling points using a fractionating column." },
      { term: "Condenser", definition: "The apparatus that cools vapour back into a liquid during distillation." },
      { term: "Chromatography", definition: "Separating substances by how strongly they are attracted to a stationary versus a mobile phase." },
      { term: "Stationary phase", definition: "The phase that does not move in chromatography — usually the paper." },
      { term: "Mobile phase", definition: "The solvent that moves through the stationary phase, carrying substances with it." },
      { term: "Rf value", definition: "Distance moved by the substance divided by distance moved by the solvent — always between 0 and 1." },
      { term: "Solvent", definition: "The liquid in which a solute dissolves to make a solution." },
    ],
    examTips: [
      {
        tip: "Pure means ONE substance, not 'natural'",
        detail:
          "Chemically, pure orange juice is a mixture and therefore impure. Questions exploit the everyday meaning deliberately.",
      },
      {
        tip: "Sharp melting point = pure; a range = mixture",
        detail:
          "This is the standard way of testing purity, and it appears in almost every paper. A range means impurities are present.",
      },
      {
        tip: "Rf has no units and is never more than 1",
        detail:
          "The substance cannot travel further than the solvent, so an Rf above 1 means an arithmetic slip. Use it as a check.",
      },
      {
        tip: "Draw the chromatography start line in PENCIL",
        detail:
          "Ink would dissolve in the solvent and travel up the paper, ruining the result. It is a standard one-mark question.",
      },
      {
        tip: "Choose the method from the properties given",
        detail:
          "Insoluble solid from liquid → filtration. Soluble solid from solution → crystallisation. Solvent from solution → distillation. Learn the trigger words.",
      },
      {
        tip: "In fractional distillation, LOWEST boiling point comes off first",
        detail:
          "The column is coolest at the top, so only substances that stay as a vapour at that temperature reach it. Getting the direction wrong reverses the whole answer.",
      },
    ],
    workedExamples: [
      {
        question:
          "On a chromatogram, a dye travels 4.5 cm and the solvent front travels 9.0 cm. Calculate the Rf value.",
        steps: [
          "Rf = distance moved by the substance ÷ distance moved by the solvent.",
          "= 4.5 ÷ 9.0.",
          "= 0.5.",
          "Rf has no units, and it must be between 0 and 1 — 0.5 passes that check.",
        ],
        answer: "0.5",
      },
    ],
    practice: [
      {
        question: "What is the name for two or more substances not chemically joined together?",
        accept: ["mixture", "a mixture", "mixtures"],
        answer:
          "A mixture. Because there is no chemical bonding, the substances can be separated by physical means without any reaction.",
      },
      {
        question: "What method separates an insoluble solid from a liquid?",
        accept: ["filtration", "filtering", "filter"],
        answer:
          "Filtration. The solid left in the paper is called the residue, and the liquid passing through is the filtrate.",
      },
      {
        question: "What is the solid left behind in the filter paper called?",
        accept: ["residue", "the residue"],
        answer:
          "The residue. The liquid that passes through is the filtrate — both terms can be asked for directly.",
      },
      {
        question: "What method separates a soluble solid from its solution?",
        accept: ["crystallisation", "crystallization", "evaporation", "crystallising"],
        answer:
          "Crystallisation. Evaporate the solvent gently and stop heating once crystals begin to form, letting the rest evaporate slowly.",
      },
      {
        question: "What method separates several liquids with different boiling points?",
        accept: ["fractional distillation", "fractional", "fractionation"],
        answer:
          "Fractional distillation. A fractionating column has a temperature gradient, so substances separate by their boiling points.",
      },
      {
        question: "In fractional distillation, does the substance with the lowest or highest boiling point reach the top first?",
        accept: ["lowest", "lowest boiling point", "the lowest"],
        answer:
          "The lowest. The column is coolest at the top, so only substances that remain vapour at that lower temperature get there.",
      },
      {
        question: "What is the equation for Rf value? Distance moved by substance ÷ distance moved by ______.",
        accept: ["solvent", "the solvent", "solvent front"],
        answer:
          "The solvent. Rf = distance moved by the substance ÷ distance moved by the solvent, and it always comes out between 0 and 1.",
      },
      {
        question: "A spot travels 3 cm and the solvent travels 12 cm. Calculate the Rf value. Give the number only.",
        accept: ["0.25"],
        answer:
          "0.25. Rf = 3 ÷ 12 = 0.25. It has no units, and a value above 1 would mean you had made an arithmetic mistake.",
      },
      {
        question: "A spot travels 6 cm and the solvent travels 8 cm. Calculate the Rf value. Give the number only.",
        accept: ["0.75"],
        answer:
          "0.75. 6 ÷ 8 = 0.75. The closer to 1, the more strongly the substance was attracted to the moving solvent.",
      },
      {
        question: "Why is the start line on a chromatogram drawn in pencil?",
        accept: ["ink would dissolve", "ink dissolves", "pencil doesnt dissolve", "ink would run", "ink travels", "pencil is insoluble"],
        answer:
          "Because ink would dissolve in the solvent and travel up the paper with the samples, making the results impossible to read.",
      },
      {
        question: "How many spots does a PURE substance produce on a chromatogram? Give the number only.",
        accept: ["1", "one"],
        answer:
          "One. Several spots means the sample is a mixture, which is one of the main uses of chromatography.",
      },
      {
        question: "Does a pure substance melt over a range of temperatures or at a sharp temperature?",
        accept: ["sharp", "sharp temperature", "specific temperature", "a sharp temperature", "one temperature", "fixed temperature"],
        answer:
          "At a sharp, specific temperature. A mixture melts over a range, which is exactly how melting point is used to test purity.",
      },
      {
        question: "What is the name for a mixture designed as a useful product with measured quantities of each component?",
        accept: ["formulation", "a formulation", "formulations"],
        answer:
          "A formulation. Paints, fuels, medicines, cleaning products and alloys are all formulations rather than pure substances.",
      },
      {
        question: "What piece of apparatus cools vapour back into a liquid during distillation?",
        accept: ["condenser", "the condenser", "liebig condenser"],
        answer:
          "The condenser. Cold water flows through its outer jacket, and the vapour condenses on the cool inner tube and runs down to be collected.",
      },
      {
        question: "Explain how you would obtain pure water from salty water. Write two or three sentences.",
        answer:
          "Use simple distillation. Heat the salty water so that the water boils and evaporates while the salt, which has a far higher boiling point, remains behind in the flask. Pass the water vapour through a condenser, where it is cooled back into liquid water and collected in a separate container — that collected liquid is pure water. Mark this one yourself: naming distillation, evaporating the water, and condensing and collecting it are the three steps worth credit.",
      },
      {
        question: "Explain how chromatography separates the dyes in a mixture of ink.",
        answer:
          "A spot of ink is placed on a pencil start line and the paper is stood in solvent, with the solvent level below the line. As the solvent moves up the paper — the mobile phase — it carries the dyes with it, while the paper acts as the stationary phase. Each dye is attracted to the solvent and to the paper to a different degree: a dye held strongly by the solvent travels far up the paper, while one held strongly by the paper barely moves. Because they travel different distances, the dyes end up as separate spots. Mark this one yourself: the mobile and stationary phases and the different attractions are the key ideas.",
      },
    ],
    misconceptions: [
      {
        wrong: "Pure means natural or healthy.",
        right:
          "In chemistry it means a single element or compound. Pure orange juice is chemically a mixture and therefore impure.",
      },
      {
        wrong: "Separating a mixture is a chemical reaction.",
        right:
          "It is physical. Nothing new is made and no bonds are broken, which is why it takes far less energy than splitting a compound.",
      },
      {
        wrong: "In fractional distillation, the highest boiling point comes off first.",
        right:
          "The lowest does. The top of the column is coolest, so only the most volatile substances stay as vapour long enough to reach it.",
      },
      {
        wrong: "An Rf value can be greater than 1.",
        right:
          "A substance cannot travel further than the solvent carrying it, so Rf is always between 0 and 1. A value above 1 means a mistake.",
      },
      {
        wrong: "Crystallisation means heating until everything has evaporated.",
        right:
          "Heat gently and stop when crystals start to appear, then let the rest evaporate slowly. Over-heating gives small, impure crystals or decomposes the compound.",
      },
    ],
  },

  "chemistry/formulae-and-equations": {
    summary:
      "Equations are the language of Chemistry, and balancing them is a skill you either have or spend the whole course fighting. This topic covers formulae, word and symbol equations, balancing, conservation of mass, and half equations — and it repays practice more than reading, so the questions matter more here than usual.",
    keyFacts: [
      {
        heading: "Formulae",
        points: [
          "A formula shows which elements are in a compound and how many atoms of each.",
          "The small number applies to the symbol BEFORE it: H₂O is two hydrogens and one oxygen.",
          "A number in front multiplies EVERYTHING that follows: 2H₂O is four hydrogens and two oxygens.",
          "Brackets multiply everything inside: Ca(OH)₂ is one calcium, two oxygens and two hydrogens.",
          "Common ones worth memorising: H₂O, CO₂, NaCl, CaCO₃, H₂SO₄, HCl, NH₃, O₂, N₂, H₂.",
        ],
      },
      {
        heading: "Word and symbol equations",
        points: [
          "REACTANTS are on the left; PRODUCTS are on the right; the arrow means 'goes to'.",
          "A word equation names the substances; a symbol equation uses formulae and must be balanced.",
          "State symbols may be added: (s), (l), (g) and (aq).",
          "You may NEVER change a formula to balance an equation — only add numbers in front.",
          "Changing H₂O to H₂O₂ makes it a different substance entirely.",
        ],
      },
      {
        heading: "Balancing and conservation of mass",
        points: [
          "Atoms are never created or destroyed in a chemical reaction, only rearranged.",
          "So the total mass of the products equals the total mass of the reactants.",
          "Balance by counting each element on both sides and adding numbers in front until they match.",
          "A useful order: balance the metals first, then non-metals, and leave hydrogen and oxygen until last.",
          "If a mass appears to change, a gas has escaped or a gas from the air has been taken in — mass is still conserved overall.",
        ],
      },
      {
        heading: "Types of reaction and half equations",
        points: [
          "OXIDATION is the gain of oxygen, or the LOSS of electrons.",
          "REDUCTION is the loss of oxygen, or the GAIN of electrons.",
          "OIL RIG: Oxidation Is Loss, Reduction Is Gain — of electrons.",
          "A HALF EQUATION shows what happens to one species, with electrons written in.",
          "For example: Na → Na⁺ + e⁻ is oxidation; Cl₂ + 2e⁻ → 2Cl⁻ is reduction.",
          "Charges must balance as well as atoms in a half equation.",
        ],
      },
    ],
    flashcards: [
      { term: "Formula", definition: "A representation showing which elements are in a compound and in what ratio." },
      { term: "Reactant", definition: "A substance present at the start of a reaction, written on the left of the arrow." },
      { term: "Product", definition: "A substance made in a reaction, written on the right of the arrow." },
      { term: "Balanced equation", definition: "An equation with the same number of each type of atom on both sides." },
      { term: "Conservation of mass", definition: "The principle that the total mass of products equals the total mass of reactants." },
      { term: "State symbol", definition: "A letter in brackets showing physical state: (s), (l), (g) or (aq)." },
      { term: "Oxidation", definition: "The gain of oxygen, or the loss of electrons." },
      { term: "Reduction", definition: "The loss of oxygen, or the gain of electrons." },
      { term: "OIL RIG", definition: "Oxidation Is Loss, Reduction Is Gain — of electrons." },
      { term: "Half equation", definition: "An equation showing the loss or gain of electrons by one species." },
      { term: "Ion", definition: "An atom or group of atoms carrying a charge because electrons have been lost or gained." },
      { term: "Precipitate", definition: "An insoluble solid formed when two solutions react." },
      { term: "Neutralisation", definition: "The reaction of an acid with a base, producing a salt and water." },
      { term: "Thermal decomposition", definition: "A reaction where one substance is broken down into others by heating." },
    ],
    examTips: [
      {
        tip: "Never change a formula to balance an equation",
        detail:
          "Only add big numbers in front. Turning H₂O into H₂O₂ balances the equation and describes a completely different reaction.",
      },
      {
        tip: "Count atoms in a table before balancing",
        detail:
          "Write each element with its count on the left and right. It takes twenty seconds and prevents nearly every balancing mistake.",
      },
      {
        tip: "Leave hydrogen and oxygen until last",
        detail:
          "They appear in the most compounds, so balancing them first usually unbalances everything else. Metals first, then other non-metals.",
      },
      {
        tip: "Remember OIL RIG for electrons",
        detail:
          "Oxidation Is Loss, Reduction Is Gain. The oxygen definition and the electron definition are both examinable, so learn both.",
      },
      {
        tip: "A big number multiplies EVERYTHING after it",
        detail:
          "2Ca(OH)₂ is two calciums, four oxygens and four hydrogens. Brackets and big numbers together catch students out constantly.",
      },
      {
        tip: "If mass seems to change, look for a gas",
        detail:
          "Mass is always conserved. An apparent loss means a gas escaped; an apparent gain means a gas from the air was taken in.",
      },
    ],
    workedExamples: [
      {
        question:
          "Balance: CH₄ + O₂ → CO₂ + H₂O",
        steps: [
          "Count carbon: 1 on each side — already balanced.",
          "Count hydrogen: 4 on the left, 2 on the right. Put a 2 in front of H₂O, giving 4 hydrogens.",
          "Now count oxygen: 2 on the left, but 2 in CO₂ plus 2 in 2H₂O makes 4 on the right.",
          "Put a 2 in front of O₂ to give 4 oxygens on the left. Final answer: CH₄ + 2O₂ → CO₂ + 2H₂O.",
        ],
        answer: "CH₄ + 2O₂ → CO₂ + 2H₂O",
      },
      {
        question:
          "How many atoms of each element are in 3Ca(NO₃)₂?",
        steps: [
          "Work inside the brackets first: NO₃ is one nitrogen and three oxygens.",
          "The subscript 2 outside the brackets doubles it: two nitrogens and six oxygens, plus one calcium.",
          "The big 3 in front multiplies everything: 3 × 1 calcium = 3 calcium.",
          "3 × 2 nitrogen = 6 nitrogen, and 3 × 6 oxygen = 18 oxygen.",
        ],
        answer: "3 calcium, 6 nitrogen, 18 oxygen",
      },
    ],
    practice: [
      {
        question: "How many hydrogen atoms are in one molecule of H₂SO₄? Give the number only.",
        accept: ["2", "two"],
        answer:
          "2. The subscript applies only to the symbol immediately before it, so H₂ means two hydrogens.",
      },
      {
        question: "How many oxygen atoms are in one formula unit of Ca(OH)₂? Give the number only.",
        accept: ["2", "two"],
        answer:
          "2. The bracket contains one oxygen and one hydrogen, and the subscript 2 outside doubles both — giving two oxygens and two hydrogens.",
      },
      {
        question: "How many hydrogen atoms are in 2H₂O? Give the number only.",
        accept: ["4", "four"],
        answer:
          "4. The big 2 multiplies the whole formula: 2 × 2 hydrogens = 4, along with 2 oxygens.",
      },
      {
        question: "How many oxygen atoms are in 3CO₂? Give the number only.",
        accept: ["6", "six"],
        answer:
          "6. Each CO₂ has two oxygens, and the big 3 multiplies everything: 3 × 2 = 6.",
      },
      {
        question: "What is the chemical formula of water?",
        accept: ["h2o", "h₂o"],
        answer:
          "H₂O — two hydrogen atoms and one oxygen atom. It is worth memorising the common formulae so you never have to work them out under time pressure.",
      },
      {
        question: "What is the chemical formula of carbon dioxide?",
        accept: ["co2", "co₂"],
        answer:
          "CO₂. One carbon and two oxygens. Note the difference from carbon monoxide, CO, which is the incomplete combustion product.",
      },
      {
        question: "What is the chemical formula of calcium carbonate?",
        accept: ["caco3", "caco₃"],
        answer:
          "CaCO₃ — the compound in limestone, chalk and marble. It appears constantly in thermal decomposition and acid questions.",
      },
      {
        question: "What principle states that the total mass of products equals the total mass of reactants?",
        accept: ["conservation of mass", "the conservation of mass", "law of conservation of mass"],
        answer:
          "Conservation of mass. Atoms are rearranged, never created or destroyed, so the total mass cannot change.",
      },
      {
        question: "What does OIL RIG stand for regarding oxidation?",
        accept: ["oxidation is loss", "loss of electrons", "oxidation is loss of electrons", "is loss"],
        answer:
          "Oxidation Is Loss (of electrons); Reduction Is Gain. Oxidation can also mean gaining oxygen, and both definitions are examinable.",
      },
      {
        question: "Is losing electrons oxidation or reduction?",
        accept: ["oxidation", "oxidised", "oxidation is loss"],
        answer:
          "Oxidation — remember OIL RIG. Gaining electrons is reduction, which is the reverse.",
      },
      {
        question: "Balance this equation by giving the number in front of O₂: CH₄ + __O₂ → CO₂ + 2H₂O",
        accept: ["2", "two"],
        answer:
          "2. The right side has 2 oxygens in CO₂ and 2 in 2H₂O, making 4 in total, so 2O₂ gives the 4 needed on the left.",
      },
      {
        question: "Balance this equation by giving the number in front of H₂: __H₂ + O₂ → 2H₂O",
        accept: ["2", "two"],
        answer:
          "2. The right side has 4 hydrogens, so you need 2H₂ on the left. The oxygens already balance at 2 each side.",
      },
      {
        question: "In an equation, what are the substances on the left of the arrow called?",
        accept: ["reactants", "reactant", "the reactants"],
        answer:
          "The reactants. The substances on the right are the products, and the arrow means 'goes to' rather than 'equals'.",
      },
      {
        question: "A reaction in a sealed container appears to lose mass when opened. What has happened?",
        accept: ["gas escaped", "a gas escaped", "gas was released", "gas escapes", "gas has escaped", "gas lost"],
        answer:
          "A gas has escaped. Mass is still conserved overall — the gas simply left the container and is no longer being weighed.",
      },
      {
        question: "Explain why you must never change a formula when balancing an equation. Write two or three sentences.",
        answer:
          "A formula describes what a substance actually is — the fixed ratio of atoms in that compound. Changing H₂O to H₂O₂ does not adjust the amount of water, it replaces water with hydrogen peroxide, a completely different substance with different properties. Balancing is about adjusting HOW MANY of each substance react, which is what the large numbers in front do, not about altering what the substances are. Mark this one yourself: the key point is that a formula defines the identity of the substance.",
      },
      {
        question: "Explain how conservation of mass applies to a reaction where magnesium burns in air and the mass increases.",
        answer:
          "Magnesium reacts with oxygen from the air to form magnesium oxide, so oxygen atoms that were not on the balance before are now part of the solid product. The mass of the solid therefore increases, but no mass has been created — the increase is exactly equal to the mass of oxygen taken from the air. If you could weigh the air as well as the solid, the total before and after would be identical. Mark this one yourself: the mark is for identifying that the extra mass came from oxygen in the air.",
      },
    ],
    misconceptions: [
      {
        wrong: "You can balance an equation by changing the small numbers in a formula.",
        right:
          "That changes what the substance IS. Only large numbers in front may be added or changed.",
      },
      {
        wrong: "Mass is destroyed when a reaction gives off gas.",
        right:
          "Mass is conserved. The gas has simply left the container and is no longer on the balance.",
      },
      {
        wrong: "Oxidation only means gaining oxygen.",
        right:
          "It also means LOSING electrons — that is the more general definition and the one needed for half equations and electrolysis.",
      },
      {
        wrong: "The arrow in an equation means equals.",
        right:
          "It means 'goes to' or 'reacts to form'. The two sides have equal numbers of atoms but they are different substances.",
      },
      {
        wrong: "In 2Ca(OH)₂ there are two hydrogens.",
        right:
          "There are four. The subscript 2 doubles the bracket contents, then the big 2 doubles everything again.",
      },
    ],
  },
};
