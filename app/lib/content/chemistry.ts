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
        diagrams: [
          "isotope-notation",
        ],
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
        diagrams: [
          "electron-shells",
        ],
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
      {
        question: "What is the relative charge on a neutron?",
        choices: [
          "0",
          "+1",
          "-1",
          "+2",
        ],
        accept: [
          "0",
        ],
        answer: "Neutrons are neutral. Protons are +1 and electrons -1, which is why an atom with equal numbers of each has no overall charge.",
      },
      {
        question: "Isotopes of the same element have:",
        choices: [
          "The same number of protons but different numbers of neutrons",
          "The same number of neutrons but different protons",
          "Different numbers of electrons only",
          "Completely different chemical properties",
        ],
        accept: [
          "The same number of protons but different numbers of neutrons",
        ],
        answer: "Proton number defines the element, so isotopes react identically. Only the mass differs.",
      },
      {
        question: "Which particle was discovered by the alpha scattering experiment?",
        choices: [
          "The nucleus",
          "The electron",
          "The neutron",
          "The proton alone",
        ],
        accept: [
          "The nucleus",
        ],
        answer: "Most alpha particles passed straight through, so atoms are mostly empty space; a few bounced back, showing a tiny dense positive nucleus.",
      },
      {
        question: "Where is nearly all the mass of an atom concentrated?",
        choices: [
          "In the nucleus",
          "In the electron shells",
          "Spread evenly through the atom",
          "In the outer shell only",
        ],
        accept: [
          "In the nucleus",
        ],
        answer: "Protons and neutrons each have a relative mass of 1; electrons are so light their mass is treated as negligible.",
      },
      {
        question: "An atom has 11 protons and 12 neutrons. What is its mass number?",
        choices: [
          "23",
          "11",
          "12",
          "1",
        ],
        accept: [
          "23",
        ],
        answer: "Mass number = protons + neutrons = 11 + 12 = 23. The atomic number, which identifies the element, is the proton count of 11.",
      },
      {
        question: "An ion of iron is written ⁵⁶Fe³⁺. Work out how many neutrons it has. Give the number only.",
        accept: [
          "30",
        ],
        answer: "30. Iron has proton number 26, and the charge sits on the electrons, not the nucleus, so neutrons = 56 − 26.",
      },
      {
        question: "A magnesium ion is written Mg²⁺. Work out how many electrons it has. Give the number only.",
        accept: [
          "10",
        ],
        answer: "10. A magnesium atom has 12 electrons, and the 2+ charge means two have been lost: 12 − 2.",
      },
      {
        question: "Calculate how many electrons are in the OUTER shell of an atom with 19 electrons. Give the number only.",
        accept: [
          "1",
        ],
        answer: "1. Filling in order gives 2, 8, 8 and then a single electron left over, because 19 − 18 leaves one for the fourth shell.",
      },
      {
        question: "Work out the charge on an ion that has 16 protons and 18 electrons. Give the sign and the number.",
        accept: [
          "2-",
          "-2",
          "2 minus",
        ],
        answer: "2−. There are two more electrons than protons, and each electron carries one negative charge: 16 − 18 leaves a net 2− ion.",
      },
      {
        question: "An atom has the electronic structure 2,8,7. Work out its atomic number. Give the number only.",
        accept: [
          "17",
        ],
        answer: "17. Adding the shells gives 2 + 8 + 7 electrons, and in a neutral atom the number of electrons equals the proton number.",
      },
      {
        question: "The radius of an atom is about 0.1 nm. Calculate this in metres, giving your answer in standard form.",
        accept: [
          "1x10^-10",
          "1 x 10^-10",
          "1e-10",
          "0.0000000001",
          "1 x 10 -10",
        ],
        answer: "1 × 10⁻¹⁰ m. One nanometre is 10⁻⁹ m, so a tenth of that is 10⁻¹⁰ m. This is the figure AQA expects you to quote for atomic radius.",
      },
      {
        question: "Magnesium is 79% ²⁴Mg, 10% ²⁵Mg and 11% ²⁶Mg. Calculate its relative atomic mass to one decimal place.",
        accept: [
          "24.3",
        ],
        answer: "24.3. Multiply each mass by its abundance: 24 × 79 = 1896, 25 × 10 = 250 and 26 × 11 = 286. Those total 2432, and 2432 ÷ 100 = 24.32, which rounds to 24.3.",
      },
      {
        question: "Boron exists only as ¹⁰B and ¹¹B, and its relative atomic mass is 10.8. Calculate the percentage of ¹¹B.",
        accept: [
          "80",
        ],
        answer: "80%. Let the percentage of ¹¹B be x, so ¹⁰B is (100 − x). Then (10 × (100 − x) + 11x) ÷ 100 = 10.8, so 1000 + x = 1080 and x = 80.",
        higherOnly: true,
      },
      {
        question: "An ion X²⁻ has the electronic structure 2,8,8 and a mass number of 32. Work out which element X is.",
        accept: [
          "sulfur",
          "sulphur",
        ],
        answer: "Sulfur. The ion holds 2 + 8 + 8 = 18 electrons, but the 2− charge means it gained two, so the atom had 16 electrons and therefore 16 protons. Element 16 is sulfur, and 32 − 16 = 16 neutrons.",
      },
      {
        question: "Element Y has two more protons than an atom whose electronic structure is 2,8,6, and Y has a mass number of 40. Calculate the number of neutrons in one atom of Y.",
        accept: [
          "22",
        ],
        answer: "22. The structure 2, 8, 6 adds to 16 electrons, so that atom has 16 protons. Two more gives Y 18 protons, and 40 − 18 = 22 neutrons.",
      },
      {
        question: "An atomic radius is about 1 × 10⁻¹⁰ m and a nuclear radius about 1 × 10⁻¹⁴ m. Calculate how many times wider the atom is than its nucleus.",
        accept: [
          "10000",
          "10,000",
          "10^4",
        ],
        answer: "10,000 times. Dividing the radii gives (1 × 10⁻¹⁰) ÷ (1 × 10⁻¹⁴) = 10⁴, which is 10,000. That ratio is exactly why almost all of an atom is empty space and most alpha particles went straight through the foil.",
      },
      {
        question: "Explain why the relative atomic mass of chlorine is 35.5, even though every individual chlorine atom has a whole-number mass number.",
        answer: "Chlorine exists as two isotopes, chlorine-35 and chlorine-37, which have the same proton number but different numbers of neutrons. Relative atomic mass is the weighted mean of those mass numbers, taking their abundances into account. Because roughly three quarters of chlorine atoms are chlorine-35, the mean sits close to 35 rather than halfway, giving 35.5. No single atom weighs 35.5 — the figure describes the mixture. (Mark this one yourself.)",
      },
      {
        question: "A student says that a sodium ion, Na⁺, must be a different element from a sodium atom because it has a different number of electrons. Explain why the student is wrong.",
        answer: "Which element an atom belongs to is fixed by its proton number, not by its electrons. Na⁺ still has 11 protons, so it is still sodium; it has simply lost one electron from its outer shell. Gaining or losing electrons changes the charge and the chemical behaviour, but it cannot change the identity of the element. Only changing the number of protons would do that. (Mark this one yourself.)",
      },
      {
        question: "Explain why the nuclear model was accepted even though only a very small fraction of alpha particles were deflected in the scattering experiment.",
        answer: "The plum pudding model predicted that every alpha particle would pass through with at most a tiny deflection, so even one particle bouncing back was a result the old model could not produce at all. The rarity of the large deflections was itself the evidence: it showed the charged, massive region must be very small compared with the whole atom. A model was needed that explained both the many undeflected particles and the few reflected ones, and the nuclear model did. Other scientists then repeated the work and got the same result. (Mark this one yourself.)",
      },
      {
        question: "Explain why nearly all of an atom's mass is in the nucleus, even though electrons take up nearly all of its volume.",
        answer: "Protons and neutrons each have a relative mass of 1, while an electron's relative mass is about 1/1840, so the electrons contribute almost nothing to the total. The protons and neutrons are packed into a nucleus around ten thousand times smaller in radius than the atom. The electrons occupy shells spread out over the remaining space, which is why the atom is large but light outside the nucleus. Volume and mass are therefore concentrated in completely different places. (Mark this one yourself.)",
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
        diagrams: [
          "periodic-table-layout",
        ],
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
    workedExamples: [
      {
        question:
          "An element has the electronic structure 2,8,7. Give its group and period, and predict what happens when it reacts with sodium.",
        steps: [
          "Count the OUTER shell electrons: 7. The number of outer electrons gives the group, so this is group 7.",
          "Count how many shells are occupied: 2, 8 and 7 means three shells, so it is in period 3.",
          "2 + 8 + 7 = 17 electrons, so 17 protons — this is chlorine.",
          "Sodium is in group 1. A group 1 metal and a group 7 non-metal transfer one electron and form an ionic compound: sodium chloride, NaCl.",
        ],
        answer: "Group 7, period 3 (chlorine); it forms sodium chloride, NaCl",
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
      {
        question: "What do elements in the same GROUP have in common?",
        choices: [
          "The same number of electrons in their outer shell",
          "The same number of shells",
          "The same mass number",
          "The same number of neutrons",
        ],
        accept: [
          "The same number of electrons in their outer shell",
        ],
        answer: "Outer electrons determine reactivity, which is why a group behaves as a family. Elements in the same PERIOD share the number of shells.",
      },
      {
        question: "Why did Mendeleev leave gaps in his periodic table?",
        choices: [
          "He predicted elements that had not yet been discovered",
          "He ran out of space",
          "He could not decide the order",
          "He excluded metals deliberately",
        ],
        accept: [
          "He predicted elements that had not yet been discovered",
        ],
        answer: "He also swapped some elements out of strict mass order to fit properties. Later discoveries matched his predictions, which is why the table was accepted.",
      },
      {
        question: "Which group contains the noble gases?",
        choices: [
          "Group 0",
          "Group 1",
          "Group 7",
          "Group 2",
        ],
        accept: [
          "Group 0",
        ],
        answer: "Noble gases have full outer shells, so they are unreactive. Group 1 are the alkali metals and Group 7 the halogens.",
      },
      {
        question: "Going DOWN Group 1, reactivity:",
        choices: [
          "Increases, because the outer electron is lost more easily",
          "Decreases, because atoms get heavier",
          "Stays the same",
          "Increases, because atoms gain electrons more easily",
        ],
        accept: [
          "Increases, because the outer electron is lost more easily",
        ],
        answer: "The outer electron is further from the nucleus and shielded by more shells, so it is lost more readily. Group 7 works the opposite way.",
      },
      {
        question: "Which of these is a property typical of transition metals but NOT of Group 1 metals?",
        choices: [
          "Forming coloured compounds",
          "Being solid at room temperature",
          "Conducting electricity",
          "Being shiny when freshly cut",
        ],
        accept: [
          "Forming coloured compounds",
        ],
        answer: "Transition metals form coloured compounds, have multiple oxidation states and act as catalysts. They are also harder, denser and less reactive.",
      },
      {
        question: "Calculate the relative formula mass of chlorine gas, Cl₂. (Ar: Cl = 35.5) Give the number only.",
        accept: [
          "71",
        ],
        answer: "71. Chlorine is diatomic, so the molecule is 2 × 35.5 = 71. Writing 35.5 is the usual slip: that is the atom, not the molecule.",
      },
      {
        question: "An element has the electronic structure 2,8,8,2. Work out which period of the periodic table it is in. Give the number only.",
        accept: [
          "4",
        ],
        answer: "4. There are four occupied shells, and period number = number of occupied electron shells. The element is calcium.",
      },
      {
        question: "Element Z is in period 3 and group 6. Work out its electronic structure, writing the shells separated by commas.",
        accept: [
          "2,8,6",
          "2 8 6",
        ],
        answer: "2,8,6. Period 3 means three occupied shells and group 6 means six outer electrons, so 2 + 8 fill the inner shells and the remaining six sit outside. Z is sulfur.",
      },
      {
        question: "Chlorine water is added to potassium bromide solution. Work out the formula of the halogen that is displaced.",
        accept: [
          "Br2",
          "br2",
        ],
        answer: "Br₂. Chlorine is above bromine in group 7 and so is more reactive: Cl₂ + 2KBr → 2KCl + Br₂. The bromine released is diatomic, which is why it is Br₂ and not Br.",
      },
      {
        question: "Sodium is dropped onto water. Work out the formula of the alkali produced.",
        accept: [
          "NaOH",
          "naoh",
        ],
        answer: "NaOH, sodium hydroxide. A group 1 metal plus water gives the metal hydroxide and hydrogen: 2Na + 2H₂O makes 2NaOH and H₂. The hydroxide is why the water turns universal indicator purple.",
      },
      {
        question: "Calculate the number of protons in an atom of the element in period 2, group 7. Give the number only.",
        accept: [
          "9",
        ],
        answer: "9. That element is fluorine, structure 2,7, so 2 + 7 = 9 electrons, and a neutral atom has an equal number of protons.",
      },
      {
        question: "Bromine water added to potassium chloride solution gives no change, but added to potassium iodide solution it turns brown. Work out the order of reactivity of chlorine, bromine and iodine, most reactive first.",
        accept: [
          "chlorine bromine iodine",
          "chlorine, bromine, iodine",
          "cl br i",
          "cl2 br2 i2",
        ],
        answer: "Chlorine, then bromine, then iodine. Br₂ + 2KCl gives no reaction, so bromine cannot displace chloride and chlorine must be the more reactive of the two. Br₂ + 2KI → 2KBr + I₂ does happen, so bromine beats iodine. Combining the two results gives chlorine first, and that matches reactivity falling down group 7.",
      },
      {
        question: "Element X has a relative atomic mass of 39, forms 1+ ions, reacts violently with water and gives a lilac flame. Calculate the number of neutrons in one atom of X.",
        accept: [
          "20",
        ],
        answer: "20. The 1+ ion and the violent reaction with water place X in group 1, and the lilac flame identifies it as potassium, proton number 19. Neutrons = mass number − proton number = 39 − 19 = 20.",
      },
      {
        question: "Mendeleev predicted an element of mass about 72 forming an oxide XO₂; germanium, Ar 72.6, fitted. Calculate the percentage by mass of germanium in GeO₂ to one decimal place. (Ar: O = 16)",
        accept: [
          "69.4",
        ],
        answer: "69.4%. First the formula mass: Mr(GeO₂) = 72.6 + (2 × 16) = 104.6. Then the fraction that is germanium: (72.6 ÷ 104.6) × 100 = 69.40, which rounds to 69.4%.",
      },
      {
        question: "Sodium, potassium and rubidium melt at 98°C, 63°C and 39°C. Calculate the mean fall in melting point from one element to the next going down group 1.",
        accept: [
          "29.5",
        ],
        answer: "29.5°C. Sodium to potassium falls 98 − 63 = 35°C, and potassium to rubidium falls 63 − 39 = 24°C. The mean of the two steps is (35 + 24) ÷ 2 = 29.5°C.",
      },
      {
        question: "Chlorine displaces bromine: Cl₂ + 2KBr → 2KCl + Br₂. Calculate the mass of bromine produced when 23.8 g of potassium bromide reacts completely. (Mr: KBr = 119, Br₂ = 160)",
        accept: [
          "16",
        ],
        answer: "16 g. Moles of KBr = 23.8 ÷ 119 = 0.2 mol. The equation needs two KBr for each Br₂, so 0.2 ÷ 2 = 0.1 mol of bromine forms. Mass = 0.1 × 160 = 16 g.",
        higherOnly: true,
      },
      {
        question: "Explain why the noble gases were missing from Mendeleev's original table, and why discovering them later supported his work rather than undermining it.",
        answer: "The noble gases are almost completely unreactive, so they form no compounds to be noticed and were not known when Mendeleev published. When argon and the others were found, they all had the same very low reactivity and fitted together as a single new column at the edge of the table. Because the table was built on repeating patterns of properties, a whole family slotting neatly into one group was strong evidence that the pattern was real. A table built only on atomic mass with no grouping could not have absorbed them so cleanly. (Mark this one yourself.)",
      },
      {
        question: "Explain why the reactivity of group 7 elements decreases going down the group.",
        answer: "A halogen reacts by gaining one electron into its outer shell, so reactivity depends on how strongly the nucleus can pull an extra electron in. Going down the group each element has one more occupied shell, so the outer shell is further from the nucleus and better shielded by the inner electrons. The attraction on an incoming electron is therefore weaker, and the electron is gained less easily. That is why fluorine is the most reactive halogen and iodine the least. (Mark this one yourself.)",
      },
      {
        question: "Explain why transition metals are described as typical metals while group 1 metals are unusual ones, using melting point, density and reactivity.",
        answer: "Transition metals are hard, dense and have high melting points — iron melts at over 1500°C — which is what most people picture when they think of a metal. Group 1 metals are soft enough to cut with a knife, have low densities (lithium, sodium and potassium float on water) and melt at low temperatures. Group 1 metals also react vigorously with water and air, whereas transition metals react slowly or not at all. So the everyday idea of a metal matches the transition block far better than it matches group 1. (Mark this one yourself.)",
      },
      {
        question: "Tellurium has a higher relative atomic mass than iodine, yet it is placed before iodine. Explain why the modern periodic table orders elements by atomic number rather than atomic mass.",
        answer: "Ordering by mass puts iodine before tellurium, which would place iodine in the same group as oxygen and sulfur and tellurium with the halogens, contradicting their chemistry. Mendeleev swapped such pairs to keep the properties right, but had no reason for doing so beyond the pattern itself. Once protons were discovered, atomic number gave a physical quantity that increases by exactly one at each step and never needs a swap. Isotopes explain the anomaly: tellurium's heavier isotopes are more abundant, so its mean mass overtakes iodine's while its proton number stays lower. (Mark this one yourself.)",
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
        diagrams: [
          "ionic-bonding",
        ],
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
        diagrams: [
          "covalent-bonding",
        ],
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
        diagrams: [
          "metallic-bonding",
        ],
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
    workedExamples: [
      {
        question:
          "Magnesium (group 2) reacts with chlorine (group 7). Work out the formula of the compound formed and name the type of bonding.",
        steps: [
          "Magnesium is in group 2, so it loses 2 electrons to form Mg²⁺.",
          "Chlorine is in group 7, so each atom gains 1 electron to form Cl⁻.",
          "The compound must have no overall charge, so one 2+ ion needs TWO 1− ions to balance it.",
          "That gives MgCl₂. A metal with a non-metal, held together by the attraction between oppositely charged ions, is ionic bonding.",
        ],
        answer: "MgCl₂, held together by ionic bonding",
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
      {
        question: "What happens to electrons in IONIC bonding?",
        choices: [
          "They are transferred from a metal to a non-metal",
          "They are shared between two non-metals",
          "They are delocalised across the whole structure",
          "They are lost by both atoms",
        ],
        accept: [
          "They are transferred from a metal to a non-metal",
        ],
        answer: "Metals lose electrons to form positive ions and non-metals gain them to form negative ions. Covalent bonding is sharing instead.",
      },
      {
        question: "Why do ionic compounds have high melting points?",
        choices: [
          "Strong electrostatic forces act between oppositely charged ions in a giant lattice",
          "The ions are very heavy",
          "Covalent bonds must be broken",
          "The particles are held by weak intermolecular forces",
        ],
        accept: [
          "Strong electrostatic forces act between oppositely charged ions in a giant lattice",
        ],
        answer: "A great deal of energy is needed to overcome the forces throughout the lattice, which is why they are solids at room temperature.",
      },
      {
        question: "Why does a simple molecular substance such as water have a low boiling point?",
        choices: [
          "The intermolecular forces between molecules are weak",
          "The covalent bonds are weak",
          "The molecules have no bonds at all",
          "The molecules are charged",
        ],
        accept: [
          "The intermolecular forces between molecules are weak",
        ],
        answer: "Boiling breaks the forces BETWEEN molecules, not the covalent bonds within them. Confusing the two is the classic error here.",
      },
      {
        question: "Why can a metal conduct electricity?",
        choices: [
          "It has delocalised electrons free to move",
          "Its ions move through the solid",
          "It contains no charged particles",
          "Its atoms share electrons in fixed pairs",
        ],
        accept: [
          "It has delocalised electrons free to move",
        ],
        answer: "Metallic bonding is positive ions in a sea of delocalised electrons. Those free electrons carry both charge and heat.",
      },
      {
        question: "Under which conditions can an ionic compound carry an electric current?",
        choices: [
          "When molten or dissolved in water",
          "Only when solid",
          "At all times",
          "Never",
        ],
        accept: [
          "When molten or dissolved in water",
        ],
        answer: "The ions must be free to move. In a solid lattice they are held in fixed positions, so a solid ionic compound does not conduct.",
      },
      {
        question: "Work out the formula of the ionic compound formed between magnesium and chlorine.",
        accept: [
          "MgCl2",
          "mgcl2",
        ],
        answer: "MgCl₂. Magnesium forms Mg²⁺ and chlorine forms Cl⁻, so two chloride ions are needed for every magnesium ion before the charges cancel: 2 × 1 balances 2.",
      },
      {
        question: "Work out the formula of aluminium oxide.",
        accept: [
          "Al2O3",
          "al2o3",
        ],
        answer: "Al₂O₃. Aluminium forms Al³⁺ and oxygen forms O²⁻, so two aluminium ions carry six positive charges and three oxide ions carry six negative: 2 × 3 matches 3 × 2.",
      },
      {
        question: "Calculate the total number of atoms in one formula unit of magnesium nitrate, Mg(NO₃)₂. Give the number only.",
        accept: [
          "9",
        ],
        answer: "9. One magnesium atom, then the bracket doubles the nitrate group to give two nitrogen and six oxygen atoms: 1 + 8 atoms in total.",
      },
      {
        question: "Calculate how many electrons are shared in total in one molecule of methane, CH₄. Give the number only.",
        accept: [
          "8",
        ],
        answer: "8. Each carbon–hydrogen bond is one shared pair and there are four bonds, so 4 × 2 electrons are shared. Carbon ends up with eight outer electrons, which is the point of bonding at all.",
      },
      {
        question: "Work out the charge on the ion formed by an atom with the electronic structure 2,8,6. Give the sign and the number.",
        accept: [
          "2-",
          "-2",
          "2 minus",
        ],
        answer: "2−. Six outer electrons means gaining two is quicker than losing six, and gaining electrons makes the ion negative, so the charge is two minus.",
      },
      {
        question: "Work out how many covalent bonds a nitrogen atom forms in ammonia, NH₃. Give the number only.",
        accept: [
          "3",
        ],
        answer: "3. Nitrogen has five outer electrons and needs three more to reach a full shell, so it shares with three hydrogen atoms: 5 + 3 = 8 outer electrons.",
      },
      {
        question: "Calculate the empirical formula of the compound formed when 0.6 g of magnesium combines completely with 0.4 g of oxygen. (Ar: Mg = 24, O = 16)",
        accept: [
          "MgO",
          "mgo",
        ],
        answer: "MgO. Moles of magnesium = 0.6 ÷ 24 = 0.025 mol, and moles of oxygen = 0.4 ÷ 16 = 0.025 mol. Dividing by the smaller gives 0.025 ÷ 0.025 = 1 : 1, so the formula is MgO — exactly what Mg²⁺ with O²⁻ predicts.",
        higherOnly: true,
      },
      {
        question: "A compound contains Fe³⁺ and SO₄²⁻ ions. Work out its formula and then calculate its relative formula mass. (Ar: Fe = 56, S = 32, O = 16) Give the number only.",
        accept: [
          "400",
        ],
        answer: "400. Two Fe³⁺ give six positive charges and three SO₄²⁻ give six negative, so the formula is Fe₂(SO₄)₃. One sulfate group is 32 + 64 = 96, so Mr = (2 × 56) + (3 × 96) = 112 + 288 = 400.",
      },
      {
        question: "Calculate the mass of sodium chloride formed when 4.6 g of sodium reacts completely with chlorine. (Ar: Na = 23, Cl = 35.5)",
        accept: [
          "11.7",
        ],
        answer: "11.7 g. Moles of sodium = 4.6 ÷ 23 = 0.2 mol. The equation 2Na + Cl₂ → 2NaCl puts sodium and sodium chloride in a 1 : 1 ratio, so 0.2 mol forms. Mr(NaCl) = 23 + 35.5 = 58.5, so mass = 0.2 × 58.5 = 11.7 g.",
        higherOnly: true,
      },
      {
        question: "A 250 g brass ornament is 70% copper by mass and the rest is zinc. Calculate the number of moles of zinc it contains, to two decimal places. (Ar: Zn = 65)",
        accept: [
          "1.15",
        ],
        answer: "1.15 mol. Zinc makes up 100 − 70 = 30% of the mass, so mass of zinc = 0.30 × 250 = 75 g. Moles = 75 ÷ 65 = 1.1538, which is 1.15 mol to two decimal places.",
        higherOnly: true,
      },
      {
        question: "Ethene, C₂H₄, contains a carbon-to-carbon double bond. Calculate the total number of electrons shared in one molecule. Give the number only.",
        accept: [
          "12",
        ],
        answer: "12. There are four carbon–hydrogen single bonds, each sharing a pair, giving 4 × 2 = 8 electrons. The C=C double bond shares two pairs, another 4 electrons. Adding them gives 8 + 4 = 12 shared electrons.",
      },
      {
        question: "Explain why magnesium oxide melts at a much higher temperature than sodium chloride, even though both are ionic compounds.",
        answer: "Both have giant ionic lattices, so melting means overcoming electrostatic attraction between oppositely charged ions throughout the structure. Magnesium oxide is built from Mg²⁺ and O²⁻, which carry twice the charge of the Na⁺ and Cl⁻ in sodium chloride. Stronger charges mean a stronger attraction between neighbouring ions, so far more energy is needed to pull the lattice apart. That is why magnesium oxide melts near 2850°C and sodium chloride near 800°C. (Mark this one yourself.)",
      },
      {
        question: "A student says that in sodium chloride each sodium ion is joined to one particular chloride ion, like a molecule. Explain why this is wrong.",
        answer: "Sodium chloride is a giant lattice, not a set of separate units: every sodium ion is surrounded by six chloride ions and every chloride ion by six sodium ions. The electrostatic attraction acts in all directions at once, so no ion belongs to any single partner. NaCl is an empirical formula giving the 1 : 1 ratio in the lattice, not the contents of a molecule. This is also why melting it needs so much energy — you have to break attractions throughout the whole structure. (Mark this one yourself.)",
      },
      {
        question: "Explain why metals conduct both heat and electricity well, and why alloying a metal usually makes it a poorer conductor.",
        answer: "In a metal the outer electrons are delocalised and free to move through the lattice of positive ions. Those moving electrons carry charge through the metal, which is electrical conduction, and they also carry kinetic energy from hot regions to cold ones, which is thermal conduction. In an alloy the added atoms are a different size, so the regular layers are disrupted and the delocalised electrons are scattered more as they move. That scattering reduces the flow of both charge and energy, so alloys conduct less well than the pure metal. (Mark this one yourself.)",
      },
      {
        question: "Explain, in terms of electrons, why a group 2 metal and a group 6 non-metal bond ionically while two group 6 non-metals bond covalently.",
        answer: "A group 2 atom has two outer electrons it can lose fairly easily, and a group 6 atom needs two more to complete its shell, so electrons transfer outright and oppositely charged ions form and attract. Two group 6 non-metals both need to gain electrons, and neither will give any up, so transfer is impossible. Instead they share pairs of electrons, and each atom counts the shared pairs towards its own full shell. Both routes end with full outer shells, but only transfer produces ions. (Mark this one yourself.)",
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
        diagrams: [
          "diamond-graphite",
        ],
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
    workedExamples: [
      {
        question:
          "Substance X melts at 801 °C, does not conduct electricity as a solid, but does conduct when molten. Substance Y melts at −7 °C and never conducts. Identify the structure of each.",
        steps: [
          "Take the melting points first. A very high melting point means strong forces throughout the whole structure; a melting point below room temperature means weak forces.",
          "X conducts only when molten. Its charged particles are locked in place as a solid but free to move once melted — that is the behaviour of ions.",
          "So X is a giant ionic lattice, such as sodium chloride.",
          "Y never conducts, so it has no free charged particles at all, and its very low melting point means only weak intermolecular forces to overcome. Y is simple molecular, such as bromine.",
        ],
        answer: "X is giant ionic; Y is simple molecular",
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
      {
        question: "Why is diamond very hard?",
        choices: [
          "Each carbon atom forms four strong covalent bonds in a giant structure",
          "Its atoms are held by strong intermolecular forces",
          "It contains delocalised electrons",
          "Its atoms are very heavy",
        ],
        accept: [
          "Each carbon atom forms four strong covalent bonds in a giant structure",
        ],
        answer: "Every atom is bonded four ways throughout the structure, so there are no weak points. Graphite bonds only three ways, leaving free layers.",
      },
      {
        question: "Why can graphite conduct electricity when diamond cannot?",
        choices: [
          "Each carbon in graphite has one delocalised electron",
          "Graphite contains metal atoms",
          "Graphite has weaker covalent bonds",
          "Diamond has no electrons",
        ],
        accept: [
          "Each carbon in graphite has one delocalised electron",
        ],
        answer: "Three of the four outer electrons are used in bonding, leaving one delocalised. Diamond uses all four, so no electrons are free.",
      },
      {
        question: "What is the correct term for a solid turning directly into a gas?",
        choices: [
          "Sublimation",
          "Evaporation",
          "Condensation",
          "Freezing",
        ],
        accept: [
          "Sublimation",
        ],
        answer: "Sublimation skips the liquid state entirely. Solid carbon dioxide does this, which is why it is called dry ice.",
      },
      {
        question: "Which state of matter has particles that are close together but able to move past each other?",
        choices: [
          "Liquid",
          "Solid",
          "Gas",
          "Plasma",
        ],
        accept: [
          "Liquid",
        ],
        answer: "Solids vibrate in fixed positions, liquids are close but mobile, gases are far apart and move randomly at speed.",
      },
      {
        question: "A property of nanoparticles that makes them useful is:",
        choices: [
          "A very high surface area to volume ratio",
          "A very large mass",
          "Being visible under a light microscope",
          "Being chemically inert in all cases",
        ],
        accept: [
          "A very high surface area to volume ratio",
        ],
        answer: "That ratio makes them effective catalysts and means much less material is needed. Their long-term health effects are still being researched.",
      },
      {
        question: "A particle has a total surface area of 600 nm² and a volume of 1000 nm³. Calculate its surface area to volume ratio. Give the number only.",
        accept: [
          "0.6",
        ],
        answer: "0.6. Surface area to volume ratio is surface area divided by volume: 600 ÷ 1000 = 0.6. The smaller the particle, the larger this number gets.",
      },
      {
        question: "Each carbon atom in graphite forms three covalent bonds. Work out how many of its four outer electrons are delocalised. Give the number only.",
        accept: [
          "1",
        ],
        answer: "1. Carbon has four outer electrons and three are tied up in covalent bonds, so 4 − 3 = 1 electron per atom is free to move between the layers.",
      },
      {
        question: "Sulfur melts at 115°C and boils at 445°C. Work out its state at 200°C and give the state symbol.",
        accept: [
          "(l)",
          "l",
          "liquid",
          "liquid (l)",
        ],
        answer: "Liquid, symbol (l). The melting point of 115°C has already been passed, and boiling is still 445 − 200 = 245°C away, so sulfur is molten.",
      },
      {
        question: "A nanoparticle has a diameter of 50 nm. Calculate its diameter in metres, giving your answer in standard form.",
        accept: [
          "5x10^-8",
          "5 x 10^-8",
          "5e-8",
          "0.00000005",
          "5 x 10 -8",
        ],
        answer: "5 × 10⁻⁸ m. One nanometre is 10⁻⁹ m, so 50 nm is 50 × 10⁻⁹ m, which is tidied to 5 × 10⁻⁸ m.",
      },
      {
        question: "A poly(ethene) chain contains 500 repeating units, each with a relative formula mass of 28. Calculate the relative molecular mass of the chain.",
        accept: [
          "14000",
          "14,000",
        ],
        answer: "14,000. Multiply the repeat unit by the number of units: 500 × 28 = 14,000. Molecules this large have strong intermolecular forces, which is why polymers are solid at room temperature.",
      },
      {
        question: "Graphite layers sit 0.34 nm apart. Calculate how many layers there are in a graphite crystal 1.7 nm thick. Give the number only.",
        accept: [
          "5",
        ],
        answer: "5. Divide the thickness by the spacing between layers: 1.7 ÷ 0.34 = 5. A single one of those layers is graphene.",
      },
      {
        question: "In buckminsterfullerene, C₆₀, each carbon atom forms three covalent bonds. Calculate the total number of covalent bonds in one molecule.",
        accept: [
          "90",
        ],
        answer: "90. Sixty carbon atoms each forming three bonds gives 60 × 3 = 180 bond ends. Every bond is shared between two atoms, so the number of bonds is 180 ÷ 2 = 90, not 180.",
      },
      {
        question: "A 2 cm cube is cut into eight 1 cm cubes. Calculate how many times larger the total surface area to volume ratio becomes.",
        accept: [
          "2",
        ],
        answer: "2 times. The 2 cm cube has surface area 6 × 4 = 24 cm² and volume 8 cm³, a ratio of 24 ÷ 8 = 3. The eight small cubes have total surface area 8 × 6 = 48 cm² with the same total volume of 8 cm³, a ratio of 48 ÷ 8 = 6. Comparing them, 6 ÷ 3 = 2 — and this is why nanoparticles are so reactive.",
      },
      {
        question: "A sheet of graphene contains 1000 carbon atoms. Calculate what fraction of all the outer electrons present are delocalised. Give your answer as a decimal.",
        accept: [
          "0.25",
        ],
        answer: "0.25. Each carbon has four outer electrons, so 1000 atoms have 1000 × 4 = 4000 outer electrons altogether. Three per atom are used in covalent bonds and one is delocalised, giving 1000 delocalised electrons. The fraction is 1000 ÷ 4000 = 0.25.",
      },
      {
        question: "A sample of a substance occupies 24 dm³ as a gas and 18 cm³ as a liquid. Calculate how many times greater the gas volume is, to the nearest whole number.",
        accept: [
          "1333",
        ],
        answer: "1333 times. Convert first so the units match: 24 dm³ = 24 × 1000 = 24,000 cm³. Then 24,000 ÷ 18 = 1333.3, so the gas takes over a thousand times the space. The particles are the same size in both — it is the spacing between them that changes.",
      },
      {
        question: "Ice has a density of 0.92 g/cm³ and water 1.00 g/cm³. Calculate the increase in volume when 100 g of water freezes, to one decimal place.",
        accept: [
          "8.7",
        ],
        answer: "8.7 cm³. Volume = mass ÷ density, so the ice takes 100 ÷ 0.92 = 108.7 cm³ while the water took 100 ÷ 1.00 = 100 cm³. The increase is 108.7 − 100 = 8.7 cm³, which is why water pipes split when they freeze.",
      },
      {
        question: "Explain why the simple particle model, which treats particles as solid spheres with nothing between them, cannot account for substances having different melting points.",
        answer: "In the simple model every particle is an identical featureless sphere, so there is nothing in it to distinguish one substance from another. Melting actually depends on the strength of the forces between particles, and the model shows no forces at all. It also ignores the fact that particles have different sizes and that some are ions or giant structures rather than molecules. To explain why sodium chloride melts at 801°C and oxygen at −219°C you need bonding, which the model leaves out. (Mark this one yourself.)",
      },
      {
        question: "Explain why graphene is both an excellent electrical conductor and extremely strong for its mass.",
        answer: "Graphene is a single layer of carbon atoms, each covalently bonded to three others in a hexagonal sheet. Those covalent bonds are strong and hold the sheet rigid, and because the layer is only one atom thick there is almost no mass for that strength. Each carbon has a fourth outer electron that is not used in bonding, so it becomes delocalised and free to move across the whole sheet. Those delocalised electrons carry charge, which is what makes graphene conduct. (Mark this one yourself.)",
      },
      {
        question: "Silicon dioxide melts above 1700°C but carbon dioxide is a gas at room temperature, although both contain covalent bonds between a group 4 element and oxygen. Explain the difference.",
        answer: "Carbon dioxide is simple molecular: each molecule is held together by strong covalent bonds, but the separate molecules are only attracted to each other by weak intermolecular forces. Boiling breaks those weak forces, not the covalent bonds, so very little energy is needed. Silicon dioxide is a giant covalent structure in which every silicon is bonded to four oxygens and every oxygen to two silicons, in one continuous network. Melting it means breaking many strong covalent bonds, which takes far more energy. (Mark this one yourself.)",
      },
      {
        question: "Explain why nanoparticles of a material may be harmful to health even when the same material in bulk is considered safe.",
        answer: "Nanoparticles have an enormous surface area for their volume, so a given mass is far more reactive than the same mass of bulk material and can catalyse reactions inside the body. They are also small enough to be breathed deep into the lungs and to cross membranes that would stop larger particles, including into the bloodstream. Their long-term effects have not been tested for as long as the bulk forms have. So safety data for the bulk material cannot simply be assumed to carry over. (Mark this one yourself.)",
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
        diagrams: [
          "fractional-distillation",
        ],
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
        diagrams: [
          "chromatography",
        ],
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
      {
        question: "Which technique separates a soluble solid from its solution?",
        choices: [
          "Crystallisation",
          "Filtration",
          "Chromatography",
          "Decanting",
        ],
        accept: [
          "Crystallisation",
        ],
        answer: "Filtration only removes INSOLUBLE solids. A dissolved solid passes straight through the filter paper, so the solvent must be evaporated instead.",
      },
      {
        question: "Which technique would separate two liquids with different boiling points?",
        choices: [
          "Fractional distillation",
          "Filtration",
          "Crystallisation",
          "Chromatography",
        ],
        accept: [
          "Fractional distillation",
        ],
        answer: "The fractionating column allows repeated evaporation and condensation, so liquids with close boiling points can still be separated.",
      },
      {
        question: "In paper chromatography, a substance with a HIGH Rf value is:",
        choices: [
          "More attracted to the solvent than the paper",
          "More attracted to the paper than the solvent",
          "Insoluble in the solvent",
          "Always a pure substance",
        ],
        accept: [
          "More attracted to the solvent than the paper",
        ],
        answer: "Rf = distance moved by spot ÷ distance moved by solvent, so it is always between 0 and 1. A high value means it travelled far with the solvent.",
      },
      {
        question: "How can you tell from a chromatogram that a substance is PURE?",
        choices: [
          "It produces a single spot",
          "It produces several spots",
          "It does not move at all",
          "It reaches the solvent front",
        ],
        accept: [
          "It produces a single spot",
        ],
        answer: "A pure substance gives one spot in every solvent. A mixture separates into several.",
      },
      {
        question: "Which method would you use to obtain pure water from seawater?",
        choices: [
          "Simple distillation",
          "Filtration",
          "Crystallisation",
          "Chromatography",
        ],
        accept: [
          "Simple distillation",
        ],
        answer: "The water evaporates and is condensed back, leaving the dissolved salt behind. Filtration cannot remove dissolved substances.",
      },
      {
        question: "A substance has an Rf value of 0.6 and the solvent front travels 15 cm. Calculate how far the spot has moved, in cm.",
        accept: [
          "9",
        ],
        answer: "9 cm. Rearranging the Rf formula gives spot distance = Rf × solvent distance, so 0.6 × 15 = 9 cm.",
      },
      {
        question: "40 g of a salt solution is evaporated to dryness and 6 g of solid remains. Calculate the percentage by mass of dissolved solid.",
        accept: [
          "15",
        ],
        answer: "15%. The fraction that was dissolved solid is 6 ÷ 40, and multiplying by 100 gives 15%. The rest was water, which has evaporated.",
      },
      {
        question: "In a fractionating column petrol condenses between 40°C and 100°C and kerosene between 150°C and 250°C. Work out which of the two leaves the column higher up.",
        accept: [
          "petrol",
        ],
        answer: "Petrol. The column is coolest at the top, so the fraction with the lower boiling range condenses further up, and petrol's range sits 150 − 100 = 50°C below kerosene's.",
      },
      {
        question: "Ethanol boils at 78°C and water at 100°C. Work out the temperature the thermometer should hold steady at while ethanol distils over from a mixture of the two.",
        accept: [
          "78",
          "78c",
          "78 c",
        ],
        answer: "78°C. The liquid with the lower boiling point comes over first, and the thermometer stays at its boiling point until it has all gone. Only then does the reading climb the remaining 100 − 78 = 22°C towards water's boiling point.",
      },
      {
        question: "50 cm³ of a solution contains 0.16 g of copper sulfate per cm³. Calculate the mass of crystals obtained when it is fully crystallised.",
        accept: [
          "8",
        ],
        answer: "8 g. Mass of solute = concentration × volume, so 0.16 × 50 = 8 g remains once all the water has evaporated.",
      },
      {
        question: "0.4 g of a 12 g residue is left stuck to the filter paper. Calculate the percentage of the residue that is lost, to one decimal place.",
        accept: [
          "3.3",
        ],
        answer: "3.3%. The fraction left behind is 0.4 ÷ 12, and multiplying by 100 gives 3.33%, which rounds to 3.3%. Losses like this are why practical yields fall short.",
      },
      {
        question: "A chromatogram of a food colouring shows spots at 2.4 cm, 4.8 cm and 6.0 cm with the solvent front at 8.0 cm. A reference dye has an Rf of 0.60. Calculate how far the matching spot has moved, in cm.",
        accept: [
          "4.8",
        ],
        answer: "4.8 cm. Dividing each spot distance by the solvent front gives 2.4 ÷ 8.0 = 0.30, then 4.8 ÷ 8.0 = 0.60, then 6.0 ÷ 8.0 = 0.75. Only the middle spot has an Rf of 0.60, so that one is the reference dye.",
      },
      {
        question: "25.0 g of a salt and sand mixture is stirred with water, filtered and evaporated. 18.5 g of salt and 6.0 g of dry sand are recovered. Calculate the percentage of the starting mass not accounted for.",
        accept: [
          "2",
        ],
        answer: "2%. The recovered solids total 18.5 + 6.0 = 24.5 g. Subtracting from the start gives 25.0 − 24.5 = 0.5 g missing. As a percentage that is (0.5 ÷ 25.0) × 100 = 2%, lost mainly on the filter paper and the evaporating basin.",
      },
      {
        question: "500 cm³ of seawater contains 17.5 g of dissolved salt. 400 cm³ of pure water is distilled off. Calculate the concentration of salt in the liquid left behind, in g/dm³.",
        accept: [
          "175",
        ],
        answer: "175 g/dm³. Distillation removes only water, so all 17.5 g of salt stays behind in 500 − 400 = 100 cm³. Converting the volume, 100 ÷ 1000 = 0.1 dm³, and concentration = 17.5 ÷ 0.1 = 175 g/dm³.",
      },
      {
        question: "A 200 tonne batch of crude oil is fractionally distilled into 62 tonnes of petrol, 48 tonnes of diesel, 30 tonnes of kerosene and the rest bitumen and gases. Calculate the percentage that is bitumen and gases.",
        accept: [
          "30",
        ],
        answer: "30%. The three named fractions come to 62 + 48 + 30 = 140 tonnes. The remainder is 200 − 140 = 60 tonnes, so (60 ÷ 200) × 100 = 30%.",
      },
      {
        question: "40.0 g of hydrated copper sulfate crystals is heated until no further change, leaving 25.6 g of white anhydrous solid. Calculate the percentage by mass of water in the crystals.",
        accept: [
          "36",
        ],
        answer: "36%. The water driven off is 40.0 − 25.6 = 14.4 g. As a fraction of the starting mass that is 14.4 ÷ 40.0 = 0.36, so the percentage is 0.36 × 100 = 36%.",
      },
      {
        question: "Explain why the start line on a chromatogram is drawn in pencil and must sit above the level of the solvent in the tank.",
        answer: "Pencil is graphite, which is insoluble in the solvent, so the line stays where it was drawn and does not travel up the paper. Ink would dissolve and separate into its own spots, contaminating the result. If the start line were below the solvent level, the samples would dissolve straight into the solvent in the tank and wash away instead of moving up the paper. Either mistake destroys the chromatogram before it starts. (Mark this one yourself.)",
      },
      {
        question: "Explain why fractional distillation rather than simple distillation is needed to separate ethanol from water.",
        answer: "Their boiling points are only 22°C apart, so when the mixture is heated the vapour contains a good deal of water as well as ethanol, and simple distillation would collect both. A fractionating column gives the vapour many surfaces to condense and re-evaporate on as it rises. Each of those cycles enriches the rising vapour in the lower-boiling ethanol and returns water to the flask. The distillate that reaches the condenser is therefore much purer than simple distillation could give. (Mark this one yourself.)",
      },
      {
        question: "Explain why salt and sand can be separated using only water, filtration and evaporation, while the sodium and chlorine in sodium chloride cannot be separated by any of them.",
        answer: "Salt and sand form a mixture, so the two substances are not chemically joined and each keeps its own properties — salt dissolves and sand does not. Filtration exploits that difference to remove the sand, and evaporating the filtrate recovers the salt unchanged. Sodium chloride is a compound in which sodium and chlorine are held by ionic bonds, and separating them means breaking those bonds, which is a chemical change. Physical methods supply nowhere near enough energy, which is why electrolysis is needed instead. (Mark this one yourself.)",
      },
      {
        question: "Explain how chromatography can show that a food colouring contains a banned dye, and why a reference sample must be run on the same piece of paper.",
        answer: "The colouring is spotted on the start line and the solvent carries each component up at a rate set by how strongly it is attracted to the paper compared with the solvent, so a mixture separates into several spots. If one of those spots has the same Rf value as the banned dye, the dye is present. Rf depends on the solvent, the paper and the conditions, so a value measured on one chromatogram cannot safely be compared with one measured elsewhere. Running the reference alongside the sample means both experience identical conditions, and the spots can be compared directly. (Mark this one yourself.)",
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
        diagrams: [
          "balancing-equations",
        ],
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
      {
        term: "State symbols",
        definition: "(s) solid, (l) liquid, (g) gas and (aq) aqueous — dissolved in water.",
      },
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
      {
        question: "Balance: __ H2 + O2 -> 2H2O. What number goes in front of H2? Give the number only.",
        accept: [
          "2",
        ],
        answer: "2. With 2H2O on the right there are 4 hydrogens and 2 oxygens, so you need 2H2 on the left. Never change a small subscript number to balance an equation — that changes the substance itself.",
      },
      {
        question: "Calculate the relative formula mass of H2SO4. (Ar: H = 1, S = 32, O = 16). Give the number only.",
        accept: [
          "98",
        ],
        answer: "Mr = (2 x 1) + 32 + (4 x 16) = 2 + 32 + 64 = 98.",
      },
      {
        question: "Calculate the relative formula mass of Ca(OH)2. (Ar: Ca = 40, O = 16, H = 1). Give the number only.",
        accept: [
          "74",
        ],
        answer: "Mr = 40 + 2 x (16 + 1) = 40 + 34 = 74. The bracket subscript multiplies EVERYTHING inside it, which is exactly where marks are lost.",
      },
      {
        question: "Balance: Fe + __ Cl2 -> 2FeCl3. What number goes in front of Cl2? Give the number only.",
        accept: [
          "3",
        ],
        answer: "3. The right-hand side has 6 chlorines in total, and each Cl2 supplies two, so you need 3Cl2. The iron then balances as 2Fe.",
      },
      {
        question: "Calculate the relative formula mass of MgCO3. (Ar: Mg = 24, C = 12, O = 16). Give the number only.",
        accept: [
          "84",
        ],
        answer: "Mr = 24 + 12 + (3 x 16) = 24 + 12 + 48 = 84.",
      },
      {
        question: "Which state symbol means dissolved in water?",
        choices: [
          "(aq)",
          "(l)",
          "(s)",
          "(g)",
        ],
        accept: [
          "(aq)",
        ],
        answer: "Aqueous means dissolved in water. (l) is a pure liquid, so water itself is (l) but salt water is (aq).",
      },
      {
        question: "Why must you never change a small subscript number when balancing?",
        choices: [
          "It would change the substance into a different one",
          "It would make the equation longer",
          "Subscripts are always correct by definition",
          "It would change the state symbols",
        ],
        accept: [
          "It would change the substance into a different one",
        ],
        answer: "H2O and H2O2 are water and hydrogen peroxide. Only the big numbers in front may be changed.",
      },
      {
        question: "What is an IONIC equation?",
        choices: [
          "One showing only the species that actually change",
          "One with all state symbols removed",
          "One written without balancing",
          "One showing only the metals",
        ],
        accept: [
          "One showing only the species that actually change",
        ],
        answer: "Spectator ions appear unchanged on both sides and are left out, which shows what the reaction really does.",
      },
      {
        question: "In the formula Al2(SO4)3, how many oxygen atoms are there?",
        choices: [
          "12",
          "4",
          "7",
          "3",
        ],
        accept: [
          "12",
        ],
        answer: "The bracket contains 4 oxygens and the subscript 3 multiplies everything inside: 4 x 3 = 12. Ignoring the bracket is a classic slip.",
      },
      {
        question: "Which of these is a balanced equation?",
        choices: [
          "2H2 + O2 -> 2H2O",
          "H2 + O2 -> H2O",
          "H2 + O2 -> 2H2O",
          "2H2 + O2 -> H2O",
        ],
        accept: [
          "2H2 + O2 -> 2H2O",
        ],
        answer: "Four hydrogens and two oxygens on each side. Count each element on both sides before choosing.",
      },
      {
        question: "Work out the number that goes in front of H₂O to balance: C₃H₈ + 5O₂ → 3CO₂ + __H₂O",
        accept: [
          "4",
        ],
        answer: "4. Propane supplies eight hydrogen atoms and each water molecule takes two, so 8 ÷ 2 = 4 water molecules are needed.",
      },
      {
        question: "Calculate the relative formula mass of Al₂(SO₄)₃. (Ar: Al = 27, S = 32, O = 16) Give the number only.",
        accept: [
          "342",
        ],
        answer: "342. Two aluminium atoms give 54, and each sulfate group weighs 96, so the three of them add 3 × 96 more.",
      },
      {
        question: "Work out the formula of the salt produced when nitric acid reacts with calcium hydroxide.",
        accept: [
          "Ca(NO3)2",
          "ca(no3)2",
          "CaN2O6",
        ],
        answer: "Ca(NO₃)₂. Nitric acid supplies the nitrate ion NO₃⁻ and calcium forms Ca²⁺, so two nitrate ions are needed per calcium ion: 2 × 1 balances the 2 positive charges.",
      },
      {
        question: "2.4 g of magnesium burns completely in air to give 4.0 g of magnesium oxide. Calculate the mass of oxygen that reacted.",
        accept: [
          "1.6",
        ],
        answer: "1.6 g. No atoms are created or destroyed, so the extra mass came from the air: 4.0 − 2.4 = 1.6 g of oxygen.",
      },
      {
        question: "Work out the number that goes in front of HCl to balance: Fe₂O₃ + __HCl → 2FeCl₃ + 3H₂O",
        accept: [
          "6",
        ],
        answer: "6. The two FeCl₃ need six chlorine atoms, so 2 × 3 = 6 molecules of HCl, and those also supply the six hydrogens for three waters.",
      },
      {
        question: "Work out which element is oxidised in the reaction Zn + CuSO₄ → ZnSO₄ + Cu.",
        accept: [
          "zinc",
          "zn",
        ],
        answer: "Zinc. It starts as Zn atoms and ends as Zn²⁺ ions, so each atom has lost two electrons, and losing electrons = oxidation under OIL RIG.",
      },
      {
        question: "Work out the four balancing numbers for __C₂H₆ + __O₂ → __CO₂ + __H₂O, in order and separated by commas.",
        accept: [
          "2,7,4,6",
          "2 7 4 6",
        ],
        answer: "2, 7, 4, 6. Starting with two ethane molecules avoids fractions: 2C₂H₆ contains 4 carbon and 12 hydrogen atoms, so 4CO₂ and 6H₂O are needed. Those products hold (4 × 2) + 6 = 14 oxygen atoms, and 14 atoms means 7O₂ on the left.",
      },
      {
        question: "48 g of magnesium burns completely in oxygen. Calculate the mass of magnesium oxide formed. (Ar: Mg = 24, O = 16)",
        accept: [
          "80",
        ],
        answer: "80 g. Moles of magnesium = 48 ÷ 24 = 2 mol. In 2Mg + O₂ → 2MgO the magnesium and the oxide are in a 1 : 1 ratio, so 2 mol of MgO forms. Mr(MgO) = 24 + 16 = 40, so the mass is 2 × 40 = 80 g.",
        higherOnly: true,
      },
      {
        question: "A compound is 40.0% carbon, 6.7% hydrogen and 53.3% oxygen by mass. Calculate its empirical formula. (Ar: C = 12, H = 1, O = 16)",
        accept: [
          "CH2O",
          "ch2o",
        ],
        answer: "CH₂O. Divide each percentage by the relevant Ar: carbon gives 40.0 ÷ 12 = 3.33, hydrogen 6.7 ÷ 1 = 6.7, oxygen 53.3 ÷ 16 = 3.33. Dividing all three by the smallest, 3.33, gives a whole-number ratio of 1 : 2 : 1.",
        higherOnly: true,
      },
      {
        question: "A sealed flask holding 2.50 g of calcium carbonate and excess acid weighs 150.00 g. After reacting, the stopper is removed and the mass falls to 148.90 g. Calculate the carbon dioxide lost as a percentage of the carbonate's mass.",
        accept: [
          "44",
        ],
        answer: "44%. The mass drops only once the gas can escape, so the carbon dioxide released is 150.00 − 148.90 = 1.10 g. As a percentage of the carbonate used, (1.10 ÷ 2.50) × 100 = 44%. That is exactly what Mr predicts, since CO₂ is 44 of CaCO₃'s 100.",
      },
      {
        question: "Silver nitrate solution is added to sodium chloride solution and silver chloride precipitates. Calculate the mass of precipitate formed from 0.02 mol of silver nitrate reacting completely. (Mr: AgCl = 143.5)",
        accept: [
          "2.87",
        ],
        answer: "2.87 g. Sodium and nitrate are spectator ions, so the ionic equation is Ag⁺(aq) + Cl⁻(aq) → AgCl(s). One silver ion gives one formula unit of precipitate, so 0.02 mol of silver nitrate makes 0.02 mol of AgCl. Mass = 0.02 × 143.5 = 2.87 g.",
        higherOnly: true,
      },
      {
        question: "A student writes the equation for burning hydrogen as H₂ + O₂ → H₂O₂. Explain what is wrong with it, even though the atoms balance.",
        answer: "The atoms do balance — two hydrogens and two oxygens on each side — so balancing alone cannot catch this mistake. The problem is that the product is wrong: burning hydrogen makes water, H₂O, not hydrogen peroxide. Balancing numbers may be adjusted freely, but the formula of a substance is fixed by the bonding between its atoms and cannot be invented to make an equation work. The correct equation is 2H₂ + O₂ → 2H₂O. (Mark this one yourself.)",
      },
      {
        question: "Explain what a spectator ion is, and why writing a precipitation reaction as an ionic equation is more useful than writing the full one.",
        answer: "A spectator ion is one that is present in solution before and after the reaction and is not changed by it, such as the sodium and nitrate ions when silver nitrate meets sodium chloride. Leaving them in clutters the equation with species that take no part. The ionic equation Ag⁺(aq) + Cl⁻(aq) → AgCl(s) shows only what actually changes: two free ions combining into an insoluble solid. It also makes clear that any soluble silver salt with any soluble chloride would give the same precipitate. (Mark this one yourself.)",
      },
      {
        question: "Explain how you can tell, from a symbol equation alone, whether a reaction is a neutralisation, a displacement or a thermal decomposition.",
        answer: "A thermal decomposition has one reactant and two or more products, so the equation starts with a single substance breaking apart, as in CaCO₃ → CaO + CO₂. A neutralisation has an acid on the left and a salt with water on the right, so hydrogen ions from the acid end up in the water. A displacement shows a more reactive element swapping places with a less reactive one in a compound, with an element on each side of the arrow. Counting substances either side and looking for an element on its own usually settles it. (Mark this one yourself.)",
      },
      {
        question: "Explain what the state symbols in an equation tell a chemist, and why (aq) and (l) must not be used interchangeably.",
        answer: "State symbols record the physical state of each substance under the reaction conditions: (s) solid, (l) liquid, (g) gas and (aq) dissolved in water. They matter because the same substance can behave completely differently in different states — solid sodium chloride does not conduct, molten and aqueous sodium chloride do. (l) means the pure substance is melted, whereas (aq) means it is dissolved in water and its ions are separated and free to move. Writing NaCl(l) when you mean NaCl(aq) describes a different substance at a different temperature, and in electrolysis it changes the products. (Mark this one yourself.)",
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

  // ─── YEAR 10 ──────────────────────────────────────────────────────────────

  "chemistry/quantitative-chemistry": {
    summary:
      "This is the most mathematical topic in GCSE Chemistry, and the one where Foundation and Higher genuinely part company. Relative formula mass, conservation of mass and percentage composition are for everyone. Moles, limiting reactants and concentration in mol/dm³ are Higher tier only, and are flagged so Foundation students can skip them entirely.",
    keyFacts: [
      {
        heading: "Relative formula mass",
        points: [
          "RELATIVE ATOMIC MASS (Ar) is the mass of an atom relative to carbon-12, read from the periodic table.",
          "RELATIVE FORMULA MASS (Mr) is the sum of the Ar values of all the atoms in a formula.",
          "For H₂O: (2 × 1) + 16 = 18.",
          "For CaCO₃: 40 + 12 + (3 × 16) = 100.",
          "Brackets multiply everything inside, so Ca(OH)₂ is 40 + 2 × (16 + 1) = 74.",
          "Mr has NO units — it is a ratio.",
        ],
      },
      {
        heading: "Conservation of mass and percentage composition",
        points: [
          "The total mass of the products always equals the total mass of the reactants.",
          "An apparent change in mass means a gas has escaped or been taken in from the air.",
          "Percentage by mass of an element = (Ar × number of atoms ÷ Mr) × 100.",
          "For calcium in CaCO₃: (40 ÷ 100) × 100 = 40%.",
          "UNCERTAINTY is usually taken as half the smallest division on the measuring instrument.",
        ],
      },
      {
        heading: "Higher tier: moles",
        diagrams: [
          "mole-triangle",
        ],
        higherOnly: true,
        points: [
          "One MOLE of a substance has a mass in grams equal to its relative formula mass.",
          "moles = mass (g) ÷ Mr. Rearranged: mass = moles × Mr.",
          "AVOGADRO'S CONSTANT is 6.02 × 10²³ — the number of particles in one mole.",
          "The big numbers in a balanced equation give the RATIO of moles that react.",
          "So: find moles of the known substance, use the ratio to get moles of the unknown, then convert back to mass.",
          "This whole section is Higher tier only. Foundation students are not asked to use moles.",
        ],
      },
      {
        heading: "Higher tier: limiting reactants and concentration",
        higherOnly: true,
        points: [
          "The LIMITING REACTANT is the one used up first — it determines how much product can form.",
          "The other reactant is in EXCESS, and some of it is left over at the end.",
          "To find it: convert both masses to moles, then compare against the equation's ratio.",
          "CONCENTRATION in mol/dm³ = moles ÷ volume in dm³.",
          "Concentration in g/dm³ = mass in grams ÷ volume in dm³ — this form IS asked of both tiers.",
          "1,000 cm³ = 1 dm³, so divide a volume in cm³ by 1,000 before using it.",
        ],
      },
    ],
    flashcards: [
      { term: "Relative atomic mass (Ar)", definition: "The mass of an atom relative to carbon-12, read from the periodic table." },
      { term: "Relative formula mass (Mr)", definition: "The sum of the relative atomic masses of all atoms in a formula. It has no units." },
      { term: "Conservation of mass", definition: "The total mass of products equals the total mass of reactants." },
      { term: "Percentage by mass", definition: "(Ar × number of atoms ÷ Mr) × 100 — the proportion of a compound's mass from one element." },
      { term: "Mole", definition: "The amount of a substance whose mass in grams equals its relative formula mass. Higher tier." },
      { term: "Avogadro's constant", definition: "6.02 × 10²³, the number of particles in one mole. Higher tier." },
      { term: "Limiting reactant", definition: "The reactant used up first, which determines how much product forms. Higher tier." },
      { term: "Excess reactant", definition: "The reactant not fully used up, some of which remains at the end. Higher tier." },
      { term: "Concentration (g/dm³)", definition: "Mass of solute in grams divided by volume of solution in cubic decimetres." },
      { term: "Concentration (mol/dm³)", definition: "Moles of solute divided by volume in cubic decimetres. Higher tier." },
      { term: "Cubic decimetre (dm³)", definition: "A volume equal to 1,000 cm³, or one litre." },
      { term: "Uncertainty", definition: "The range within which a measurement lies, usually half the smallest scale division." },
      { term: "Solute", definition: "The substance dissolved in a solvent to make a solution." },
      { term: "Yield", definition: "The amount of product actually obtained from a reaction." },
      {
        term: "Percentage yield",
        definition: "Actual mass of product divided by theoretical mass, multiplied by 100.",
      },
      {
        term: "Atom economy",
        definition: "The Mr of the desired product divided by the total Mr of all products, multiplied by 100.",
      },
    ],
    examTips: [
      {
        tip: "If you are on Foundation, skip everything about moles",
        detail:
          "Mr, conservation of mass, percentage composition and concentration in g/dm³ are yours. Moles, limiting reactants and mol/dm³ are Higher only.",
      },
      {
        tip: "Mr has no units — never write grams",
        detail:
          "It is a ratio. Moles have no unit symbol either; mass is in grams and concentration in g/dm³ or mol/dm³.",
      },
      {
        tip: "Convert cm³ to dm³ FIRST",
        detail:
          "Divide by 1,000. Doing this before anything else prevents the commonest error in every concentration question.",
      },
      {
        tip: "Higher tier: moles → ratio → moles → mass",
        detail:
          "Four steps in that order, every time. Write them down as headings before substituting any numbers.",
      },
      {
        tip: "Show every line of working",
        detail:
          "These questions carry method marks. A wrong final answer with correct working usually keeps most of the marks; a bare wrong number keeps none.",
      },
      {
        tip: "Check the answer is sensible",
        detail:
          "A product cannot have more mass than the reactants that made it, and a percentage cannot exceed 100. Both catch arithmetic slips instantly.",
      },
    ],
    workedExamples: [
      {
        question:
          "Calculate the relative formula mass of calcium carbonate, CaCO₃. (Ca = 40, C = 12, O = 16)",
        steps: [
          "Identify each element and how many atoms of it there are: one Ca, one C, three O.",
          "Multiply each Ar by its number of atoms: Ca = 40 × 1 = 40; C = 12 × 1 = 12; O = 16 × 3 = 48.",
          "Add them together: 40 + 12 + 48.",
          "= 100. Mr has no units, so the answer is simply 100.",
        ],
        answer: "100",
      },
      {
        question:
          "Calculate the percentage by mass of calcium in calcium carbonate, CaCO₃.",
        steps: [
          "Percentage by mass = (Ar × number of atoms ÷ Mr) × 100.",
          "Mr of CaCO₃ = 100 (from the previous example).",
          "There is one calcium atom with Ar = 40, so the mass from calcium is 40.",
          "(40 ÷ 100) × 100 = 40%. Sanity check: it is under 100%, as it must be.",
        ],
        answer: "40%",
      },
      {
        question:
          "Higher tier: calculate the number of moles in 48 g of magnesium oxide, MgO. (Mg = 24, O = 16)",
        steps: [
          "First find Mr: 24 + 16 = 40.",
          "moles = mass ÷ Mr.",
          "= 48 ÷ 40.",
          "= 1.2 moles.",
        ],
        answer: "1.2 moles",
        higherOnly: true,
      },
      {
        question:
          "Higher tier: 24 g of carbon burns completely. What mass of CO₂ forms? C + O₂ → CO₂. (C = 12, O = 16)",
        steps: [
          "Moles of carbon = mass ÷ Ar = 24 ÷ 12 = 2 moles.",
          "The equation ratio is 1 C : 1 CO₂, so 2 moles of carbon give 2 moles of CO₂.",
          "Mr of CO₂ = 12 + (2 × 16) = 44.",
          "mass = moles × Mr = 2 × 44 = 88 g. Check: 24 g carbon plus 64 g oxygen makes 88 g, so mass is conserved.",
        ],
        answer: "88 g",
        higherOnly: true,
      },
      {
        question:
          "20 g of sodium chloride is dissolved to make 500 cm³ of solution. Calculate the concentration in g/dm³.",
        steps: [
          "Convert the volume to dm³ first: 500 ÷ 1,000 = 0.5 dm³.",
          "concentration = mass ÷ volume.",
          "= 20 ÷ 0.5.",
          "= 40 g/dm³. Note the answer is larger than the mass, because the volume was less than 1 dm³.",
        ],
        answer: "40 g/dm³",
      },
    ],
    practice: [
      {
        question: "Calculate the relative formula mass of H₂O. (H = 1, O = 16) Give the number only.",
        accept: ["18"],
        answer:
          "18. (2 × 1) + 16 = 18. Remember the subscript applies only to the symbol before it, so there are two hydrogens and one oxygen.",
      },
      {
        question: "Calculate the relative formula mass of CO₂. (C = 12, O = 16) Give the number only.",
        accept: ["44"],
        answer:
          "44. 12 + (2 × 16) = 12 + 32 = 44. Mr has no units, so do not write grams.",
      },
      {
        question: "Calculate the relative formula mass of H₂SO₄. (H = 1, S = 32, O = 16) Give the number only.",
        accept: ["98"],
        answer:
          "98. (2 × 1) + 32 + (4 × 16) = 2 + 32 + 64 = 98. Work through the formula left to right and nothing gets missed.",
      },
      {
        question: "Calculate the relative formula mass of Ca(OH)₂. (Ca = 40, O = 16, H = 1) Give the number only.",
        accept: ["74"],
        answer:
          "74. The bracket contains O + H = 17, doubled to 34, plus calcium's 40 gives 74. Brackets multiply everything inside them.",
      },
      {
        question: "Calculate the relative formula mass of NaOH. (Na = 23, O = 16, H = 1) Give the number only.",
        accept: ["40"],
        answer:
          "40. 23 + 16 + 1 = 40. This one is worth remembering — sodium hydroxide appears constantly in titration and neutralisation questions.",
      },
      {
        question: "Calculate the percentage by mass of oxygen in H₂O. (H = 1, O = 16) Give the number to one decimal place.",
        accept: ["88.9", "88.9%"],
        answer:
          "88.9%. (16 ÷ 18) × 100 = 88.888…, which rounds to 88.9%. Water is mostly oxygen by mass, despite having twice as many hydrogen atoms.",
      },
      {
        question: "Calculate the percentage by mass of carbon in CO₂. (C = 12, O = 16) Give the number to one decimal place.",
        accept: ["27.3", "27.3%"],
        answer:
          "27.3%. (12 ÷ 44) × 100 = 27.27…, rounding to 27.3%. Always check the answer is below 100%.",
      },
      {
        question: "What has no units: relative formula mass, or mass in grams?",
        accept: ["relative formula mass", "mr", "relative formula mass mr", "formula mass"],
        answer:
          "Relative formula mass. It is a ratio comparing masses, so writing grams after it is wrong and loses the mark.",
      },
      {
        question: "How many cm³ are in 1 dm³? Give the number only.",
        accept: ["1000", "1,000"],
        answer:
          "1,000. Converting cm³ to dm³ by dividing by 1,000 should be the FIRST line of working in any concentration question.",
      },
      {
        question: "10 g of solute is dissolved in 2 dm³ of solution. Calculate the concentration in g/dm³. Give the number only.",
        accept: ["5"],
        answer:
          "5 g/dm³. Concentration = mass ÷ volume = 10 ÷ 2. Note it is smaller than the mass here, because the volume was greater than 1 dm³.",
      },
      {
        question: "30 g of solute is dissolved to make 250 cm³ of solution. Calculate the concentration in g/dm³. Give the number only.",
        accept: ["120"],
        answer:
          "120 g/dm³. Convert first: 250 ÷ 1,000 = 0.25 dm³. Then 30 ÷ 0.25 = 120. Skipping the conversion is the classic error here.",
      },
      {
        question: "Higher tier: how many moles are in 36 g of water? Mr(H₂O) = 18. Give the number only.",
        accept: ["2"],
        answer:
          "2 moles. moles = mass ÷ Mr = 36 ÷ 18 = 2. Foundation students are not asked this.",
        higherOnly: true,
      },
      {
        question: "Higher tier: what mass is 0.5 moles of CaCO₃? Mr = 100. Give the number only, in grams.",
        accept: ["50"],
        answer:
          "50 g. mass = moles × Mr = 0.5 × 100 = 50. This is the rearranged form, and you need both directions.",
        higherOnly: true,
      },
      {
        question: "Higher tier: what is the value of Avogadro's constant? Give it as a number times ten to a power.",
        accept: ["6.02 x 10^23", "6.02x10^23", "6.02e23", "6.02 × 10²³", "6.02x1023", "6.02 x 10 23"],
        answer:
          "6.02 × 10²³ — the number of particles in one mole. It appears on the data sheet, but knowing what it means is examinable.",
        higherOnly: true,
      },
      {
        question: "Higher tier: what is the name for the reactant that is used up first?",
        accept: ["limiting reactant", "limiting", "the limiting reactant", "limiting reagent"],
        answer:
          "The limiting reactant. It determines how much product can form; the other reactant is in excess and some is left over.",
        higherOnly: true,
      },
      {
        question: "Explain why the mass of a metal appears to increase when it is burned in air. Write two or three sentences.",
        answer:
          "The metal reacts with oxygen from the air to form a metal oxide, so oxygen atoms that were not on the balance beforehand are now chemically bonded into the solid product. The mass of the solid therefore rises by exactly the mass of oxygen that has combined with it. No mass has been created — if the air were weighed too, the total before and after would be identical, so mass is still conserved. Mark this one yourself: identifying that the extra mass came from oxygen in the air is the mark.",
      },
      {
        question: "Calculate the relative formula mass of CO2. (Ar: C = 12, O = 16). Give the number only.",
        accept: [
          "44",
        ],
        answer: "Mr = 12 + (2 x 16) = 44. Count every atom in the formula: the small 2 applies to the oxygen only, so there are two oxygens and one carbon.",
      },
      {
        question: "How many moles are there in 88 g of CO2? (Mr = 44). Give the number only.",
        accept: [
          "2",
        ],
        answer: "moles = mass ÷ Mr = 88 ÷ 44 = 2 mol. This is the single most useful equation in the whole topic, so learn the triangle: mass on top, moles and Mr underneath.",
      },
      {
        question: "What is the mass of 0.5 mol of NaCl? (Mr = 58.5). Give the number of grams only.",
        accept: [
          "29.25",
        ],
        answer: "mass = moles x Mr = 0.5 x 58.5 = 29.25 g. Rearranging is easier if you write the equation out first rather than trying to do it in your head.",
      },
      {
        question: "0.5 mol of a solute is dissolved to make 250 cm3 of solution. What is the concentration in mol/dm3? Give the number only.",
        accept: [
          "2",
        ],
        answer: "Convert the volume first: 250 cm3 = 0.25 dm3. Then concentration = moles ÷ volume = 0.5 ÷ 0.25 = 2 mol/dm3. Forgetting to divide cm3 by 1000 is the most common error in this calculation.",
      },
      {
        question: "A reaction has a theoretical yield of 16 g but produces 12 g. What is the percentage yield? Give the number only.",
        accept: [
          "75",
        ],
        answer: "percentage yield = (actual ÷ theoretical) x 100 = (12 ÷ 16) x 100 = 75%. Yield is never 100% in practice because of losses in transfer, incomplete reactions and side reactions.",
      },
      {
        question: "What does the law of conservation of mass state?",
        choices: [
          "Total mass of reactants equals total mass of products",
          "Mass is always lost in a reaction",
          "Mass increases in exothermic reactions",
          "Only solids conserve mass",
        ],
        accept: [
          "Total mass of reactants equals total mass of products",
        ],
        answer: "No atoms are created or destroyed, only rearranged. Apparent mass changes happen when a gas escapes or is taken in from the air.",
      },
      {
        question: "A sealed flask loses no mass, but an open one does. The most likely reason is:",
        choices: [
          "A gas has escaped",
          "The reaction stopped early",
          "The balance was faulty",
          "Mass was destroyed",
        ],
        accept: [
          "A gas has escaped",
        ],
        answer: "Mass is conserved overall — the gas simply left the system being weighed. If mass INCREASES, a gas from the air has been taken in.",
      },
      {
        question: "Percentage yield is always less than 100% because:",
        choices: [
          "Product is lost in transfer, reactions are incomplete, and side reactions occur",
          "Atoms are destroyed during the reaction",
          "The balance is never accurate",
          "Products always evaporate",
        ],
        accept: [
          "Product is lost in transfer, reactions are incomplete, and side reactions occur",
        ],
        answer: "Never say atoms are lost — mass is conserved. The loss is practical, not a breach of conservation.",
      },
      {
        question: "Atom economy measures:",
        choices: [
          "The proportion of reactant mass that ends up as the desired product",
          "How much product you actually made",
          "The purity of the product",
          "How fast the reaction goes",
        ],
        accept: [
          "The proportion of reactant mass that ends up as the desired product",
        ],
        answer: "High atom economy means less waste, which matters for cost and the environment. It is a property of the equation, not of the practical work.",
      },
      {
        question: "Which quantity is the LIMITING reactant?",
        choices: [
          "The one completely used up first",
          "The one present in the greatest mass",
          "The one with the highest Mr",
          "The one added last",
        ],
        accept: [
          "The one completely used up first",
        ],
        answer: "The limiting reactant determines how much product can form; the other reactants are in excess and some is left over.",
      },
      {
        question: "Calculate the relative formula mass of ammonium sulfate, (NH₄)₂SO₄. (Ar: N = 14, H = 1, S = 32, O = 16) Give the number only.",
        accept: [
          "132",
        ],
        answer: "132. Each ammonium group weighs 18, so the bracket gives two of them, 36, and the sulfate group adds 96: 36 + 96.",
      },
      {
        question: "Calculate the percentage by mass of nitrogen in ammonium nitrate, NH₄NO₃. (Mr = 80, Ar: N = 14) Give the number only.",
        accept: [
          "35",
        ],
        answer: "35%. There are two nitrogen atoms, a mass of 28, and 28 out of 80 is (28 ÷ 80) of the compound, which is 35%. This is why ammonium nitrate is sold as a fertiliser.",
      },
      {
        question: "Calculate the concentration, in g/dm³, of a solution containing 4.5 g of solute in 300 cm³.",
        accept: [
          "15",
        ],
        answer: "15 g/dm³. Convert the volume first, to 0.3 dm³, then divide the mass by it: 4.5 ÷ 0.3 = 15.",
      },
      {
        question: "Calculate the percentage yield of a reaction whose theoretical yield is 25 g but which actually produces 21 g.",
        accept: [
          "84",
        ],
        answer: "84%. Divide the actual mass by the theoretical mass: 21 ÷ 25 gives 0.84, which as a percentage is 84%.",
      },
      {
        question: "Calculate the mass of copper oxide formed when 12.7 g of copper reacts completely with 3.2 g of oxygen.",
        accept: [
          "15.9",
        ],
        answer: "15.9 g. No atoms are lost, so the product must weigh as much as the two reactants together: 12.7 + 3.2 = 15.9 g.",
      },
      {
        question: "Calculate the atom economy for making hydrogen by Zn + H₂SO₄ → ZnSO₄ + H₂, to one decimal place. (Mr: H₂ = 2, ZnSO₄ = 161)",
        accept: [
          "1.2",
        ],
        answer: "1.2%. The wanted product has Mr 2 out of a total product mass of 163, and 2 ÷ 163 is 0.0123, which is 1.2%. Almost all the mass ends up as the zinc sulfate by-product.",
      },
      {
        question: "Calculate the mass of aluminium oxide formed when 5.4 g of aluminium burns completely. 4Al + 3O₂ → 2Al₂O₃. (Ar: Al = 27, O = 16)",
        accept: [
          "10.2",
        ],
        answer: "10.2 g. Moles of aluminium = 5.4 ÷ 27 = 0.2 mol. The equation gives two Al₂O₃ for every four Al, so 0.2 ÷ 2 = 0.1 mol of oxide. Mr(Al₂O₃) = (2 × 27) + (3 × 16) = 102, so mass = 0.1 × 102 = 10.2 g.",
        higherOnly: true,
      },
      {
        question: "6.0 g of magnesium is added to 100 cm³ of 2.0 mol/dm³ hydrochloric acid. Mg + 2HCl → MgCl₂ + H₂. Calculate the mass of hydrogen produced. (Ar: Mg = 24, Mr: H₂ = 2)",
        accept: [
          "0.2",
        ],
        answer: "0.2 g. Moles of magnesium = 6.0 ÷ 24 = 0.25 mol, and moles of acid = 0.100 × 2.0 = 0.20 mol. Two HCl are needed per magnesium, so 0.25 mol of metal would need 0.50 mol of acid — the acid runs out first and is limiting. Hydrogen forms from acid in a 2 : 1 ratio, so 0.20 ÷ 2 = 0.10 mol, and mass = 0.10 × 2 = 0.2 g.",
        higherOnly: true,
      },
      {
        question: "50 g of calcium carbonate is heated and gives 22.4 g of calcium oxide. CaCO₃ → CaO + CO₂. Calculate the percentage yield. (Mr: CaCO₃ = 100, CaO = 56)",
        accept: [
          "80",
        ],
        answer: "80%. Moles of calcium carbonate = 50 ÷ 100 = 0.5 mol, and the 1 : 1 ratio means 0.5 mol of calcium oxide should form. Theoretical mass = 0.5 × 56 = 28 g. So percentage yield = (22.4 ÷ 28) × 100 = 80%.",
        higherOnly: true,
      },
      {
        question: "25.0 cm³ of 0.200 mol/dm³ sodium hydroxide solution is diluted with water to a total volume of 250 cm³. Calculate the new concentration in mol/dm³.",
        accept: [
          "0.02",
          "0.0200",
          "0.020",
        ],
        answer: "0.02 mol/dm³. Moles of NaOH = 0.0250 × 0.200 = 0.00500 mol, and adding water cannot change that number. The new volume is 250 ÷ 1000 = 0.250 dm³, so the concentration = 0.00500 ÷ 0.250 = 0.0200 mol/dm³ — ten times weaker, as the tenfold dilution suggests.",
        higherOnly: true,
      },
      {
        question: "Calculate the volume of carbon dioxide, in dm³, given off at room temperature and pressure when 20 g of calcium carbonate decomposes completely. (Mr: CaCO₃ = 100; one mole of any gas occupies 24 dm³)",
        accept: [
          "4.8",
        ],
        answer: "4.8 dm³. Moles of calcium carbonate = 20 ÷ 100 = 0.2 mol. CaCO₃ → CaO + CO₂ makes one CO₂ per carbonate, so 0.2 mol of gas forms. Volume = 0.2 × 24 = 4.8 dm³.",
        higherOnly: true,
      },
      {
        question: "Explain why the percentage yield of an industrial reaction is almost never 100%, giving three different reasons.",
        answer: "Some reactions are reversible, so the products turn back into reactants and the reaction never goes fully to completion. Some of the reactants may take part in side reactions that give unwanted products instead of the one being measured. Product is also lost physically during separation and purification — left on filter paper, stuck to glassware or evaporated away. All three reduce the mass collected even when the chemistry itself worked. (Mark this one yourself.)",
      },
      {
        question: "Explain why a reaction with a high percentage yield can still be a poor industrial process if its atom economy is low.",
        answer: "Percentage yield compares what you actually got with what that reaction could have given, so it says nothing about how much of the reactant mass was destined to become waste. Atom economy compares the mass of the useful product with the mass of everything produced, so a low value means most of the raw material ends up as by-product no matter how well the reaction runs. A process could convert 95% of its theoretical yield and still throw away three quarters of the atoms it started with. That means higher raw material costs, more waste to dispose of and a worse environmental footprint. (Mark this one yourself.)",
      },
      {
        question: "Explain what is meant by the limiting reactant, and why adding more of the other reactant does not increase the mass of product.",
        answer: "The limiting reactant is the one that is completely used up first, and it therefore fixes how much product can be made. Once it has gone the reaction stops, however much of the other reactant is still sitting in the flask. The extra reactant is said to be in excess and simply remains unchanged at the end. This is why a reacting mass calculation must always be based on the limiting reactant, not on whichever mass the question gives first. (Mark this one yourself.)",
      },
      {
        question: "Explain why relative formula mass has no units while the mass of one mole of the same substance is measured in grams.",
        answer: "Relative formula mass is a ratio: it compares the mass of a formula unit with one twelfth of the mass of a carbon-12 atom. Dividing a mass by a mass cancels the units, so Mr is just a number and writing grams after it is wrong. Molar mass is a different quantity — the mass of 6.02 × 10²³ formula units — and that is a real mass, measured in grams per mole. The two share the same numerical value, which is why they are so easily confused. (Mark this one yourself.)",
      },
    ],
    misconceptions: [
      {
        wrong: "Relative formula mass is measured in grams.",
        right:
          "It has no units at all — it is a ratio. Only actual mass is in grams.",
      },
      {
        wrong: "You can use a volume in cm³ directly in a concentration calculation.",
        right:
          "Concentration uses dm³. Divide the cm³ figure by 1,000 first, or the answer will be a thousand times out.",
      },
      {
        wrong: "In Ca(OH)₂ there is one oxygen and one hydrogen.",
        right:
          "The subscript outside the bracket doubles everything inside, giving two oxygens and two hydrogens.",
      },
      {
        wrong: "Foundation students need to learn moles.",
        right:
          "Moles, limiting reactants and mol/dm³ are Higher tier only. Foundation students should spend that time on Mr, percentage composition and g/dm³ instead.",
      },
      {
        wrong: "If mass changes during a reaction, mass has not been conserved.",
        right:
          "It always is. An apparent loss means a gas escaped; an apparent gain means a gas from the air was taken in.",
      },
    ],
  },

  "chemistry/acids-and-alkalis": {
    summary:
      "Three reaction patterns cover almost everything in this topic, and knowing them cold turns hard-looking questions into recall. This topic covers the pH scale, what acids and alkalis actually are in terms of ions, the three neutralisation reactions, and how to make a pure salt — one of the required practicals.",
    keyFacts: [
      {
        heading: "The pH scale and indicators",
        diagrams: [
          "ph-scale",
        ],
        points: [
          "The pH scale runs from 0 to 14. Below 7 is acidic, 7 is neutral, above 7 is alkaline.",
          "ACIDS produce H⁺ ions in aqueous solution.",
          "ALKALIS are soluble bases, and produce OH⁻ ions in aqueous solution.",
          "Neutralisation is H⁺ + OH⁻ → H₂O.",
          "UNIVERSAL INDICATOR gives a colour for each pH; a pH probe gives a precise numerical value.",
          "Litmus is red in acid and blue in alkali; phenolphthalein is colourless in acid and pink in alkali; methyl orange is red in acid and yellow in alkali.",
        ],
      },
      {
        heading: "Strong and weak acids",
        points: [
          "A STRONG acid is fully ionised in water — every molecule releases its H⁺. Hydrochloric, nitric and sulfuric acids are strong.",
          "A WEAK acid is only partially ionised. Ethanoic, citric and carbonic acids are weak.",
          "CONCENTRATED means a lot of acid dissolved in a given volume — this is NOT the same as strong.",
          "So a concentrated weak acid and a dilute strong acid are both perfectly possible.",
          "As pH decreases by 1, the hydrogen ion concentration increases by a factor of 10.",
        ],
      },
      {
        heading: "The three reactions",
        points: [
          "acid + metal → salt + hydrogen.",
          "acid + base (or alkali) → salt + water.",
          "acid + metal carbonate → salt + water + carbon dioxide.",
          "The salt's name comes from the acid: hydrochloric → chloride, sulfuric → sulfate, nitric → nitrate.",
          "The first part of the salt's name comes from the metal: magnesium + hydrochloric acid gives magnesium chloride.",
          "Test for hydrogen: a lighted splint gives a squeaky pop. Test for carbon dioxide: limewater turns milky.",
        ],
      },
      {
        heading: "Making a soluble salt",
        points: [
          "Add EXCESS insoluble base to warm acid, so that all the acid is used up.",
          "Excess is used because it guarantees no acid is left, which would contaminate the salt.",
          "FILTER to remove the leftover solid base — this is why an insoluble base is convenient.",
          "Heat the filtrate gently to the point of crystallisation, then leave it to crystallise slowly.",
          "Pat the crystals dry between filter papers.",
          "For an alkali, which is soluble, a titration is needed instead, because excess cannot be filtered out.",
        ],
      },
    ],
    flashcards: [
      { term: "Acid", definition: "A substance that produces H⁺ ions in aqueous solution, with a pH below 7." },
      { term: "Base", definition: "A substance that neutralises an acid, usually a metal oxide, hydroxide or carbonate." },
      { term: "Alkali", definition: "A soluble base, producing OH⁻ ions in solution, with a pH above 7." },
      { term: "Neutralisation", definition: "The reaction of an acid with a base: H⁺ + OH⁻ → H₂O." },
      { term: "pH scale", definition: "A scale from 0 to 14 measuring how acidic or alkaline a solution is." },
      { term: "Universal indicator", definition: "An indicator giving a different colour at each pH value." },
      { term: "Strong acid", definition: "An acid that is fully ionised in water, such as hydrochloric acid." },
      { term: "Weak acid", definition: "An acid that is only partially ionised in water, such as ethanoic acid." },
      { term: "Concentrated", definition: "Having a large amount of solute in a given volume — not the same as strong." },
      { term: "Salt", definition: "The compound formed when the hydrogen in an acid is replaced by a metal." },
      { term: "Titration", definition: "A technique for finding exactly what volume of one solution reacts with another." },
      { term: "Filtrate", definition: "The liquid that passes through the filter paper — here, the salt solution." },
      { term: "Limewater test", definition: "The test for carbon dioxide: limewater turns milky or cloudy." },
      { term: "Squeaky pop test", definition: "The test for hydrogen: a lighted splint makes a squeaky pop." },
      { term: "Crystallisation", definition: "Evaporating the solvent so the dissolved salt forms crystals." },
      {
        term: "Concentration (mol/dm3)",
        definition: "The number of moles of solute dissolved in each cubic decimetre of solution.",
      },
    ],
    examTips: [
      {
        tip: "Strong is not the same as concentrated",
        detail:
          "Strong is about how fully the acid ionises; concentrated is about how much is dissolved. Questions deliberately offer the wrong one.",
      },
      {
        tip: "Learn the three reaction patterns by heart",
        detail:
          "Metal → salt + hydrogen. Base → salt + water. Carbonate → salt + water + carbon dioxide. Almost every question is one of these three.",
      },
      {
        tip: "Name the salt from the acid",
        detail:
          "Hydrochloric gives chlorides, sulfuric gives sulfates, nitric gives nitrates. Then put the metal's name in front.",
      },
      {
        tip: "Say WHY excess base is used",
        detail:
          "To make sure all the acid reacts, so none is left to contaminate the salt. The unreacted solid is then filtered off. The reason is the mark.",
      },
      {
        tip: "Know both gas tests exactly",
        detail:
          "Squeaky pop with a lighted splint means hydrogen. Limewater turning milky means carbon dioxide. State the observation, not just the gas.",
      },
      {
        tip: "Neutralisation is H⁺ + OH⁻ → H₂O",
        detail:
          "That ionic equation is worth memorising — it is the same for every acid and alkali, and it is frequently asked for directly.",
      },
    ],
    workedExamples: [
      {
        question:
          "Write the balanced equation for the reaction between sulfuric acid and sodium hydroxide solution, and name the salt produced.",
        steps: [
          "Acid + alkali → salt + water. That is the pattern every neutralisation follows.",
          "Sulfuric acid (H₂SO₄) always gives a sulfate, and the metal comes from the alkali — so the salt is sodium sulfate, Na₂SO₄.",
          "Unbalanced: H₂SO₄ + NaOH → Na₂SO₄ + H₂O.",
          "Na₂SO₄ needs two sodiums, so put 2 in front of NaOH. That gives 2 hydrogens from the alkali plus 2 from the acid = 4 H, so 2 H₂O on the right.",
          "Balanced: H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O.",
        ],
        answer: "H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O; the salt is sodium sulfate",
      },
    ],
    practice: [
      {
        question: "What ion do all acids produce in aqueous solution?",
        accept: ["h+", "h⁺", "hydrogen ion", "hydrogen ions", "h plus"],
        answer:
          "H⁺, the hydrogen ion. Alkalis produce OH⁻, and neutralisation is simply those two combining to form water.",
      },
      {
        question: "What ion do all alkalis produce in aqueous solution?",
        accept: ["oh-", "oh⁻", "hydroxide", "hydroxide ion", "hydroxide ions"],
        answer:
          "OH⁻, the hydroxide ion. The ionic equation for neutralisation, H⁺ + OH⁻ → H₂O, is worth memorising exactly.",
      },
      {
        question: "What pH value is neutral? Give the number only.",
        accept: ["7"],
        answer:
          "7. Below 7 is acidic and above 7 is alkaline. The scale runs from 0 to 14.",
      },
      {
        question: "Complete the pattern: acid + metal → salt + ______.",
        accept: ["hydrogen", "h2", "hydrogen gas"],
        answer:
          "Hydrogen. Test for it with a lighted splint — a squeaky pop confirms hydrogen is present.",
      },
      {
        question: "Complete the pattern: acid + base → salt + ______.",
        accept: ["water", "h2o"],
        answer:
          "Water. This is neutralisation, and at the ionic level it is just H⁺ + OH⁻ → H₂O.",
      },
      {
        question: "Complete the pattern: acid + metal carbonate → salt + water + ______.",
        accept: ["carbon dioxide", "co2", "co₂"],
        answer:
          "Carbon dioxide. The fizzing is the giveaway, and limewater turning milky confirms it.",
      },
      {
        question: "What type of salt does hydrochloric acid produce?",
        accept: ["chloride", "chlorides", "a chloride"],
        answer:
          "A chloride. Sulfuric acid gives sulfates and nitric acid gives nitrates — the salt's second name always comes from the acid.",
      },
      {
        question: "What type of salt does sulfuric acid produce?",
        accept: ["sulfate", "sulphate", "sulfates", "sulphates"],
        answer:
          "A sulfate. So magnesium plus sulfuric acid gives magnesium sulfate, along with hydrogen gas.",
      },
      {
        question: "What salt forms when magnesium reacts with hydrochloric acid?",
        accept: ["magnesium chloride", "magnesiumchloride"],
        answer:
          "Magnesium chloride, plus hydrogen gas. The metal gives the first name and the acid gives the second.",
      },
      {
        question: "What is an acid that is fully ionised in water called?",
        accept: ["strong", "a strong acid", "strong acid"],
        answer:
          "A strong acid — hydrochloric, nitric and sulfuric are the three to know. Weak acids such as ethanoic are only partially ionised.",
      },
      {
        question: "Is 'concentrated' the same as 'strong'? Answer yes or no.",
        accept: ["no", "n"],
        answer:
          "No. Strong describes how fully the acid ionises; concentrated describes how much is dissolved in a given volume. A dilute strong acid is perfectly possible.",
      },
      {
        question: "What is the test for hydrogen gas?",
        accept: ["squeaky pop", "lighted splint", "squeaky pop with a lighted splint", "burning splint", "pop"],
        answer:
          "A lighted splint produces a squeaky pop. Describe the observation as well as naming the test — both can carry marks.",
      },
      {
        question: "What happens to limewater when carbon dioxide is bubbled through it?",
        accept: ["turns milky", "turns cloudy", "milky", "cloudy", "goes milky", "goes cloudy"],
        answer:
          "It turns milky or cloudy. This is the standard test for carbon dioxide, and it appears in the carbonate reaction constantly.",
      },
      {
        question: "Why is EXCESS base added when making a soluble salt?",
        accept: ["to use up all the acid", "all the acid reacts", "ensure all acid reacts", "no acid left", "react all the acid", "so all acid is used"],
        answer:
          "To make certain every bit of acid reacts, so none is left to contaminate the salt. The leftover solid base is then filtered off.",
      },
      {
        question: "If pH falls from 4 to 3, by what factor does the hydrogen ion concentration increase? Give the number only.",
        accept: ["10", "ten"],
        answer:
          "10. Each whole pH unit represents a tenfold change in hydrogen ion concentration, which is why the scale is so compressed.",
      },
      {
        question: "Describe how you would make pure, dry copper sulfate crystals from copper oxide and sulfuric acid.",
        answer:
          "Warm the dilute sulfuric acid gently, then add copper oxide a little at a time, stirring, until no more dissolves — this excess guarantees all the acid has reacted, so none is left to contaminate the product. Filter the mixture to remove the unreacted copper oxide, keeping the blue filtrate. Heat the filtrate gently until the solution is saturated, showing crystals beginning to form at the edge, then stop heating and leave it to crystallise slowly. Finally pat the crystals dry between filter papers. Mark this one yourself: excess and the REASON for it, filtering, crystallising and drying are the four stages worth credit.",
      },
      {
        question: "How many moles of NaOH are in 25.0 cm3 of 0.100 mol/dm3 solution? Give the number only.",
        accept: [
          "0.0025",
        ],
        answer: "moles = concentration x volume in dm3 = 0.100 x 0.0250 = 0.0025 mol. Dividing the cm3 by 1000 first is the step people forget under time pressure.",
      },
      {
        question: "0.0025 mol of HCl is contained in 20.0 cm3 of solution. What is its concentration in mol/dm3? Give the number only.",
        accept: [
          "0.125",
        ],
        answer: "concentration = moles ÷ volume = 0.0025 ÷ 0.0200 = 0.125 mol/dm3. This is the second half of every titration calculation.",
      },
      {
        question: "What is the concentration in g/dm3 of a 0.5 mol/dm3 solution of NaOH? (Mr = 40). Give the number only.",
        accept: [
          "20",
        ],
        answer: "Multiply by the Mr: 0.5 x 40 = 20 g/dm3. Converting between mol/dm3 and g/dm3 is one multiplication in one direction and one division in the other.",
      },
      {
        question: "How many moles are in 50 cm3 of a 2.0 mol/dm3 solution? Give the number only.",
        accept: [
          "0.1",
        ],
        answer: "50 cm3 = 0.050 dm3, so moles = 2.0 x 0.050 = 0.1 mol.",
      },
      {
        question: "What is the pH of a neutral solution at room temperature? Give the number only.",
        accept: [
          "7",
        ],
        answer: "7. Below 7 is acidic, above 7 is alkaline, and the scale is logarithmic — each step of 1 is a tenfold change in hydrogen ion concentration.",
      },
      {
        question: "Which ion do all acids produce in aqueous solution?",
        choices: [
          "H+",
          "OH-",
          "Na+",
          "Cl-",
        ],
        accept: [
          "H+",
        ],
        answer: "Acids release hydrogen ions in water. Alkalis release hydroxide ions, and neutralisation is those two combining to form water.",
      },
      {
        question: "What are the products of acid + metal carbonate?",
        choices: [
          "A salt, water and carbon dioxide",
          "A salt and hydrogen only",
          "A salt and water only",
          "A salt and oxygen",
        ],
        accept: [
          "A salt, water and carbon dioxide",
        ],
        answer: "The carbon dioxide is the giveaway — fizzing that turns limewater cloudy. Acid + metal gives salt plus hydrogen instead.",
      },
      {
        question: "Which salt is made from hydrochloric acid?",
        choices: [
          "A chloride",
          "A sulfate",
          "A nitrate",
          "A carbonate",
        ],
        accept: [
          "A chloride",
        ],
        answer: "Hydrochloric gives chlorides, sulfuric gives sulfates, nitric gives nitrates. The acid decides the second half of the salt's name.",
      },
      {
        question: "What distinguishes a STRONG acid from a CONCENTRATED one?",
        choices: [
          "Strong means fully ionised; concentrated means a lot of acid per volume",
          "They mean the same thing",
          "Strong means a lower pH only",
          "Concentrated means fully ionised",
        ],
        accept: [
          "Strong means fully ionised; concentrated means a lot of acid per volume",
        ],
        answer: "You can have a dilute strong acid or a concentrated weak one. Strength is about ionisation, concentration is about amount.",
      },
      {
        question: "As pH DECREASES by 1, the hydrogen ion concentration:",
        choices: [
          "Increases tenfold",
          "Decreases tenfold",
          "Doubles",
          "Stays the same",
        ],
        accept: [
          "Increases tenfold",
        ],
        answer: "The pH scale is logarithmic, so pH 3 has ten times the hydrogen ion concentration of pH 4, and a hundred times that of pH 5.",
      },
      {
        question: "Work out the name and formula of the salt produced when sulfuric acid reacts with potassium hydroxide.",
        accept: [
          "potassium sulfate",
          "K2SO4",
          "k2so4",
          "potassium sulphate",
        ],
        answer: "Potassium sulfate, K₂SO₄. Sulfuric acid always gives a sulfate, and two K⁺ ions are needed to balance one SO₄²⁻ ion: 2 × 1 balances the 2 negative charges.",
      },
      {
        question: "Work out the two products formed when zinc reacts with hydrochloric acid, and give the formula of the gas.",
        accept: [
          "H2",
          "h2",
          "zinc chloride and H2",
          "hydrogen H2",
        ],
        answer: "Zinc chloride and hydrogen, H₂. Acid plus metal always gives a salt plus hydrogen: Zn + 2HCl → ZnCl₂ + H₂. The gas is what makes the squeaky pop with a lit splint.",
      },
      {
        question: "Calculate the volume of water, in cm³, that must be added to 100 cm³ of acid to lower its concentration from 2.0 g/dm³ to 0.5 g/dm³.",
        accept: [
          "300",
        ],
        answer: "300 cm³. The concentration has to fall by a factor of 2.0 ÷ 0.5, which is four, so the total volume must become four times larger, 400 cm³. That means adding 300 cm³ of water to the 100 cm³ already there.",
      },
      {
        question: "Calculate the concentration, in g/dm³, of a solution containing 7.3 g of hydrogen chloride in 200 cm³.",
        accept: [
          "36.5",
        ],
        answer: "36.5 g/dm³. Convert the volume to dm³ first — 200 cm³ is 0.2 dm³ — then divide the mass by it: 7.3 ÷ 0.2.",
      },
      {
        question: "Work out the formula of the salt made when nitric acid reacts with copper(II) oxide.",
        accept: [
          "Cu(NO3)2",
          "cu(no3)2",
          "CuN2O6",
        ],
        answer: "Cu(NO₃)₂. Nitric acid always gives a nitrate, NO₃⁻, and copper(II) is Cu²⁺, so two nitrate ions are needed: 2 × 1 balances the 2 positive charges.",
      },
      {
        question: "Work out which acid and which alkali you would react together to make sodium nitrate.",
        accept: [
          "nitric acid and sodium hydroxide",
          "nitric acid, sodium hydroxide",
          "HNO3 and NaOH",
          "hno3 and naoh",
          "nitric acid sodium hydroxide",
        ],
        answer: "Nitric acid and sodium hydroxide. Read the salt backwards: the metal part comes from the alkali, so sodium = NaOH, and the rest comes from the acid, so nitrate means nitric acid.",
      },
      {
        question: "In a titration, 25.0 cm³ of sodium hydroxide is exactly neutralised by 20.0 cm³ of 0.100 mol/dm³ hydrochloric acid. NaOH + HCl → NaCl + H₂O. Calculate the concentration of the sodium hydroxide in mol/dm³.",
        accept: [
          "0.08",
          "0.0800",
          "0.080",
        ],
        answer: "0.08 mol/dm³. Moles of acid = 0.0200 × 0.100 = 0.00200 mol. The equation is 1 : 1, so the flask held 0.00200 mol of sodium hydroxide. Concentration = 0.00200 ÷ 0.0250 = 0.0800 mol/dm³.",
        higherOnly: true,
      },
      {
        question: "24.0 cm³ of 0.500 mol/dm³ sulfuric acid exactly neutralises 30.0 cm³ of sodium hydroxide. H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. Calculate the concentration of the sodium hydroxide in mol/dm³.",
        accept: [
          "0.8",
          "0.800",
          "0.80",
        ],
        answer: "0.8 mol/dm³. Moles of sulfuric acid = 0.0240 × 0.500 = 0.0120 mol. Each acid molecule neutralises two NaOH, so the flask held 0.0120 × 2 = 0.0240 mol. Concentration = 0.0240 ÷ 0.0300 = 0.800 mol/dm³. Forgetting the 2 : 1 ratio halves the answer.",
        higherOnly: true,
      },
      {
        question: "A sodium hydroxide solution has a concentration of 0.250 mol/dm³. Calculate the mass of sodium hydroxide dissolved in 200 cm³ of it. (Mr: NaOH = 40)",
        accept: [
          "2",
        ],
        answer: "2 g. Converting to mass concentration, 0.250 × 40 = 10 g/dm³. The volume is 200 ÷ 1000 = 0.200 dm³, so the mass present = 10 × 0.200 = 2 g.",
        higherOnly: true,
      },
      {
        question: "8.0 g of copper oxide is added to excess sulfuric acid and 19.2 g of copper sulfate crystals are collected, against a theoretical yield of 24.0 g. Calculate the percentage yield.",
        accept: [
          "80",
        ],
        answer: "80%. Percentage yield is actual over theoretical: (19.2 ÷ 24.0) × 100 = 80%. The missing fifth is typical of this practical — crystals are lost on the filter paper, some salt stays dissolved rather than crystallising, and a little is left on the evaporating basin.",
      },
      {
        question: "Two acids have the same concentration in mol/dm³: acid A has pH 1 and acid B has pH 3. Calculate how many times greater the hydrogen ion concentration in A is.",
        accept: [
          "100",
        ],
        answer: "100 times. Each pH unit is a factor of ten in hydrogen ion concentration, and the gap here is 3 − 1 = 2 units, so the factor is 10 × 10 = 100. Since both solutions contain the same number of moles of acid per dm³, B must be only partly ionised — it is the weak acid.",
        higherOnly: true,
      },
      {
        question: "Explain the difference between a strong acid and a concentrated acid, and why a dilute strong acid can have a lower pH than a concentrated weak one.",
        answer: "Strong describes how completely the acid ionises in water: a strong acid releases all of its hydrogen ions, while a weak acid only partly ionises and sits in equilibrium with un-ionised molecules. Concentrated describes how many moles of acid there are per dm³ of solution, which is about amount, not behaviour. pH depends only on the hydrogen ion concentration actually present. So a dilute strong acid that fully ionises can produce more hydrogen ions than a much more concentrated weak acid that barely ionises at all. (Mark this one yourself.)",
      },
      {
        question: "Explain why a titration is repeated until concordant results are obtained, and why a burette is used rather than a measuring cylinder.",
        answer: "A single titre could be wrong through overshooting the end point, a misread scale or a trapped air bubble, and nothing in one result would reveal it. Repeating until two or three titres agree within 0.10 cm³ shows the technique is reproducible, and only those concordant values are averaged. A burette is graduated to 0.05 cm³ and lets the tap be closed one drop at a time, so the exact volume at the colour change can be found. A measuring cylinder is far less precise and cannot be controlled drop by drop, so the end point would be missed. (Mark this one yourself.)",
      },
      {
        question: "Explain, in terms of ions, what happens during neutralisation, and why any strong acid with any alkali releases a similar amount of energy per mole.",
        answer: "An acid in solution supplies H⁺ ions and an alkali supplies OH⁻ ions, and neutralisation is those two combining: H⁺(aq) + OH⁻(aq) → H₂O(l). The metal ion from the alkali and the negative ion from the acid are spectators and stay in solution as the dissolved salt. Because a strong acid and a strong alkali are both fully ionised, the only reaction actually happening is that same one, whichever pair you choose. The same bond is made in every case, so the energy released per mole of water is much the same. (Mark this one yourself.)",
      },
      {
        question: "Explain why carbon dioxide is given off when an acid reacts with a carbonate but not when it reacts with a metal oxide.",
        answer: "A metal oxide contains only the metal ion and O²⁻, so the hydrogen ions from the acid can only combine with the oxide to make water, leaving a salt in solution. A carbonate contains the CO₃²⁻ ion, which has carbon in it, and when hydrogen ions attack it the carbonate breaks down into water and carbon dioxide. That is why the carbonate reaction fizzes and the oxide reaction does not. The bubbles turning limewater cloudy are the standard test that a carbonate was present. (Mark this one yourself.)",
      },
    ],
    misconceptions: [
      {
        wrong: "Strong acid and concentrated acid mean the same thing.",
        right:
          "Strong is about full ionisation; concentrated is about how much is dissolved. A concentrated weak acid and a dilute strong acid both exist.",
      },
      {
        wrong: "All bases are alkalis.",
        right:
          "An alkali is a SOLUBLE base. Copper oxide is a base but not an alkali, because it does not dissolve.",
      },
      {
        wrong: "A pH of 6 is twice as acidic as a pH of 7.",
        right:
          "Each pH unit is a factor of TEN in hydrogen ion concentration, so pH 6 has ten times as many H⁺ ions as pH 7.",
      },
      {
        wrong: "Neutralisation always gives a pH of exactly 7.",
        right:
          "Only for a strong acid with a strong alkali. A weak acid with a strong alkali gives a salt solution above pH 7.",
      },
      {
        wrong: "Any excess reactant can be filtered off.",
        right:
          "Only an INSOLUBLE one. That is why an insoluble base is used for this method, and why a soluble alkali needs a titration instead.",
      },
    ],
  },

  "chemistry/reactivity-of-metals": {
    summary:
      "The reactivity series explains why gold is found as gold and iron is found as ore, why some metals are extracted by carbon and others need electricity, and what rusting actually is. Once you can read the series, most of the questions in this topic answer themselves.",
    keyFacts: [
      {
        heading: "The reactivity series",
        diagrams: [
          "reactivity-series",
        ],
        points: [
          "Most to least reactive: potassium, sodium, calcium, magnesium, aluminium, CARBON, zinc, iron, HYDROGEN, copper, silver, gold.",
          "Carbon and hydrogen are non-metals but are included as reference points.",
          "Reactivity is about how readily a metal LOSES electrons to form a positive ion.",
          "The more reactive the metal, the more vigorously it reacts and the more stable its compounds.",
          "Metals above hydrogen react with acids; those below it — copper, silver, gold — do not.",
        ],
      },
      {
        heading: "Reactions with water and acid",
        points: [
          "Potassium, sodium and calcium react with cold WATER: metal + water → metal hydroxide + hydrogen.",
          "Magnesium, zinc and iron react with dilute ACID: metal + acid → salt + hydrogen.",
          "Copper, silver and gold react with neither, which is why copper is used for pipes and gold for jewellery.",
          "The more reactive the metal, the faster the fizzing and the more vigorous the reaction.",
          "A more reactive metal DISPLACES a less reactive one from its compound.",
        ],
      },
      {
        heading: "Extraction of metals",
        diagrams: [
          "reactivity-series",
        ],
        points: [
          "An ORE is a rock containing enough of a metal compound to make extraction worthwhile.",
          "Metals LESS reactive than carbon can be extracted by REDUCTION with carbon — iron, zinc, copper.",
          "Metals MORE reactive than carbon must be extracted by ELECTROLYSIS — aluminium, for example.",
          "Electrolysis is used only when necessary because it needs enormous amounts of electricity and is therefore expensive.",
          "Gold is unreactive enough to be found as the pure metal, needing no extraction at all.",
          "Reduction here means loss of oxygen: the carbon takes the oxygen from the metal oxide.",
        ],
      },
      {
        heading: "Oxidation, reduction and rusting",
        points: [
          "OXIDATION is loss of electrons or gain of oxygen; REDUCTION is gain of electrons or loss of oxygen.",
          "OIL RIG: Oxidation Is Loss, Reduction Is Gain — of electrons.",
          "In a displacement reaction one metal is oxidised while the other is reduced — a REDOX reaction.",
          "RUSTING needs BOTH water AND oxygen. Remove either and iron does not rust.",
          "Prevention: barrier methods such as paint, oil or plastic; or sacrificial protection with a more reactive metal.",
          "GALVANISING coats iron with zinc, which is more reactive and so corrodes instead — sacrificial protection.",
        ],
      },
    ],
    flashcards: [
      { term: "Reactivity series", definition: "Metals listed in order of how readily they lose electrons to form positive ions." },
      { term: "Ore", definition: "A rock containing enough of a metal compound to make extraction economically worthwhile." },
      { term: "Reduction", definition: "Loss of oxygen, or gain of electrons." },
      { term: "Oxidation", definition: "Gain of oxygen, or loss of electrons." },
      { term: "Redox reaction", definition: "A reaction where oxidation and reduction both happen at the same time." },
      { term: "Displacement reaction", definition: "A reaction where a more reactive metal takes the place of a less reactive one in a compound." },
      { term: "Electrolysis", definition: "Using electricity to break down a compound, needed for metals more reactive than carbon." },
      { term: "Rusting", definition: "The corrosion of iron, which requires both water and oxygen." },
      { term: "Corrosion", definition: "The destruction of a metal by reaction with substances in its environment." },
      { term: "Sacrificial protection", definition: "Attaching a more reactive metal so it corrodes instead of the iron." },
      { term: "Galvanising", definition: "Coating iron with zinc, which both forms a barrier and gives sacrificial protection." },
      { term: "Barrier method", definition: "Preventing rust by keeping water and oxygen away, using paint, oil, grease or plastic." },
      { term: "Native metal", definition: "A metal unreactive enough to be found uncombined in the earth, such as gold." },
      { term: "Metal oxide", definition: "The compound formed when a metal combines with oxygen." },
    ],
    examTips: [
      {
        tip: "Learn where CARBON sits in the series",
        detail:
          "It is the dividing line for extraction. Above carbon means electrolysis; below carbon means reduction with carbon. That one fact answers most extraction questions.",
      },
      {
        tip: "Learn where HYDROGEN sits too",
        detail:
          "Metals above hydrogen react with acids; those below do not. It explains why copper pipes carry water safely.",
      },
      {
        tip: "Rusting needs BOTH water and oxygen",
        detail:
          "Saying just 'water' or just 'air' loses the mark. Experiments that remove one or the other are a standard question.",
      },
      {
        tip: "Explain sacrificial protection through reactivity",
        detail:
          "Zinc is MORE reactive than iron, so it loses electrons in preference and corrodes instead. The comparison is the mark.",
      },
      {
        tip: "In displacement, say which is oxidised and which reduced",
        detail:
          "The more reactive metal loses electrons and is oxidised; the metal ion gains them and is reduced. It is a redox reaction.",
      },
      {
        tip: "Say WHY electrolysis is avoided when possible",
        detail:
          "It requires enormous amounts of electrical energy, so it is expensive. Cost is the reason carbon reduction is preferred wherever it works.",
      },
    ],
    workedExamples: [
      {
        question:
          "A piece of zinc is placed in blue copper sulfate solution. Predict what you would see and write the balanced equation.",
        steps: [
          "Check the reactivity series: zinc is ABOVE copper, so zinc is more reactive and will displace it.",
          "The more reactive metal takes the place of the less reactive one in the compound.",
          "Observations: the blue colour of the solution fades, and a red-brown coating of copper forms on the zinc.",
          "Equation: Zn + CuSO₄ → ZnSO₄ + Cu. The sulfate is a spectator — it simply swaps partners.",
        ],
        answer: "Blue fades and copper is deposited; Zn + CuSO₄ → ZnSO₄ + Cu",
      },
    ],
    practice: [
      {
        question: "Which non-metal is included in the reactivity series as the dividing line for extraction?",
        accept: ["carbon", "c"],
        answer:
          "Carbon. Metals below it can be extracted by reduction with carbon; metals above it must be extracted by electrolysis.",
      },
      {
        question: "Which method extracts a metal MORE reactive than carbon?",
        accept: ["electrolysis"],
        answer:
          "Electrolysis. It is used only when necessary because it consumes enormous amounts of electricity and is therefore expensive.",
      },
      {
        question: "Which method extracts a metal LESS reactive than carbon?",
        accept: ["reduction with carbon", "reduction", "carbon reduction", "reduced with carbon", "smelting"],
        answer:
          "Reduction with carbon. The carbon takes the oxygen from the metal oxide, which is reduction in the 'loss of oxygen' sense.",
      },
      {
        question: "What is a rock containing enough metal compound to be worth extracting called?",
        accept: ["ore", "an ore", "ores"],
        answer:
          "An ore. Whether a rock counts as an ore depends on economics as well as chemistry — it must be worth the cost of extraction.",
      },
      {
        question: "Which two substances are BOTH needed for iron to rust?",
        accept: ["water and oxygen", "oxygen and water", "air and water", "water and air"],
        answer:
          "Water and oxygen. Remove either one and rusting stops, which is exactly what barrier methods achieve.",
      },
      {
        question: "What is coating iron with zinc called?",
        accept: ["galvanising", "galvanizing", "galvanisation"],
        answer:
          "Galvanising. It works twice over: the zinc is a physical barrier, and being more reactive it also corrodes sacrificially if scratched.",
      },
      {
        question: "Why does zinc protect iron even if the coating is scratched?",
        accept: ["zinc is more reactive", "more reactive", "zinc corrodes instead", "sacrificial protection", "zinc reacts instead", "zinc loses electrons"],
        answer:
          "Zinc is more reactive than iron, so it loses electrons in preference and corrodes instead. That is sacrificial protection.",
      },
      {
        question: "Which metal is found in the earth as the uncombined element?",
        accept: ["gold", "au"],
        answer:
          "Gold. It is so unreactive that it does not form compounds readily, which is why it needs no extraction and why it does not tarnish.",
      },
      {
        question: "Do metals below hydrogen in the reactivity series react with dilute acid? Answer yes or no.",
        accept: ["no", "n"],
        answer:
          "No. Copper, silver and gold sit below hydrogen and do not react with dilute acids — which is why copper is safe for water pipes.",
      },
      {
        question: "In a displacement reaction, is the more reactive metal oxidised or reduced?",
        accept: ["oxidised", "oxidized", "oxidation"],
        answer:
          "Oxidised — it loses electrons to form a positive ion. The less reactive metal's ion gains those electrons and is reduced.",
      },
      {
        question: "What is the general name for a reaction where oxidation and reduction happen together?",
        accept: ["redox", "a redox reaction", "redox reaction"],
        answer:
          "A redox reaction. Every displacement and every electrolysis is one, because electrons lost by one species must be gained by another.",
      },
      {
        question: "What are the two products when a group 1 metal reacts with water?",
        accept: ["metal hydroxide and hydrogen", "hydroxide and hydrogen", "hydrogen and metal hydroxide", "hydrogen and hydroxide"],
        answer:
          "A metal hydroxide and hydrogen gas. Only the most reactive metals — potassium, sodium, calcium — react with cold water like this.",
      },
      {
        question: "Name one barrier method of preventing rust.",
        accept: ["paint", "oil", "grease", "plastic", "coating", "painting", "greasing", "plastic coating"],
        answer:
          "Paint, oil, grease or a plastic coating. All work by keeping water and oxygen away from the iron surface.",
      },
      {
        question: "Does reduction mean gaining or losing electrons?",
        accept: ["gaining", "gain", "gaining electrons", "gain of electrons", "gains"],
        answer:
          "Gaining — remember OIL RIG: Reduction Is Gain. In the oxygen sense, reduction is the LOSS of oxygen, which is worth keeping straight.",
      },
      {
        question: "Explain why aluminium is extracted by electrolysis rather than with carbon. Write two or three sentences.",
        answer:
          "Aluminium is more reactive than carbon, so carbon cannot take the oxygen away from aluminium oxide — the aluminium holds its oxygen more strongly than carbon would. Electrolysis is used instead, because passing an electric current can force the reduction to happen by supplying electrons directly to the aluminium ions. This is far more expensive than carbon reduction because of the enormous quantity of electricity required, which is why it is used only where nothing cheaper will work. Mark this one yourself: the position relative to carbon AND the cost of electricity are both worth credit.",
      },
      {
        question: "Describe an experiment to show that iron needs both water and oxygen to rust.",
        answer:
          "Set up three test tubes, each with an iron nail. In the first, leave the nail in ordinary water with air above it — this is the control and the nail should rust. In the second, use water that has been boiled to remove dissolved oxygen and cover it with a layer of oil to stop air redissolving, so the nail has water but no oxygen. In the third, place the nail in dry air with a drying agent such as calcium chloride and a bung, so it has oxygen but no water. After several days only the first nail should have rusted, showing that both are needed. Mark this one yourself: three tubes, each removing one variable, plus the expected result, is full marks.",
      },
      {
        question: "What happens to a metal atom when it is OXIDISED?",
        choices: [
          "It loses electrons",
          "It gains electrons",
          "It gains protons",
          "It loses neutrons",
        ],
        accept: [
          "It loses electrons",
        ],
        answer: "OIL RIG: Oxidation Is Loss, Reduction Is Gain — of electrons. Oxidation can also be described as gain of oxygen.",
      },
      {
        question: "Which method is used to extract a metal MORE reactive than carbon?",
        choices: [
          "Electrolysis",
          "Reduction with carbon",
          "Heating in air alone",
          "Filtering the ore",
        ],
        accept: [
          "Electrolysis",
        ],
        answer: "Carbon can only displace metals below it in the reactivity series. Aluminium is above carbon, so it must be extracted by electrolysis.",
      },
      {
        question: "A more reactive metal placed in the salt solution of a less reactive metal will:",
        choices: [
          "Displace it from the solution",
          "Have no reaction",
          "Dissolve without changing the solution",
          "Turn into the less reactive metal",
        ],
        accept: [
          "Displace it from the solution",
        ],
        answer: "Displacement reactions are how the reactivity series is established experimentally — the more reactive metal takes the place of the less reactive one.",
      },
      {
        question: "Which of these metals is found in the Earth as the uncombined element?",
        choices: [
          "Gold",
          "Iron",
          "Aluminium",
          "Zinc",
        ],
        accept: [
          "Gold",
        ],
        answer: "Gold is so unreactive it exists as the native metal. The others are found as compounds in ores and must be extracted.",
      },
      {
        question: "Which gas is produced when a metal reacts with a dilute acid?",
        choices: [
          "Hydrogen",
          "Oxygen",
          "Carbon dioxide",
          "Chlorine",
        ],
        accept: [
          "Hydrogen",
        ],
        answer: "Metal + acid gives a salt plus hydrogen, tested with a lit splint giving a squeaky pop. Metal CARBONATE + acid also gives carbon dioxide.",
      },
      {
        question: "Work out the two products formed when magnesium ribbon is added to copper sulfate solution.",
        accept: [
          "magnesium sulfate and copper",
          "copper and magnesium sulfate",
          "magnesium sulphate and copper",
          "magnesium sulfate + copper",
        ],
        answer: "Magnesium sulfate and copper. Magnesium is above copper in the reactivity series, so it displaces it: Mg + CuSO₄ → MgSO₄ + Cu. The blue colour fades and a pink-brown solid appears.",
      },
      {
        question: "Calculate the percentage by mass of iron in iron(III) oxide, Fe₂O₃, to one decimal place. (Ar: Fe = 56, O = 16)",
        accept: [
          "70.0",
          "70",
        ],
        answer: "70.0%. Two iron atoms contribute 112 out of a total Mr of 160, and 112 ÷ 160 is 0.70, which is 70.0%. This is why haematite is worth mining.",
      },
      {
        question: "Zinc, copper and magnesium are each added to dilute hydrochloric acid. Work out which one does not react.",
        accept: [
          "copper",
          "cu",
        ],
        answer: "Copper. It sits below hydrogen in the reactivity series, so it cannot displace hydrogen from an acid. The other two can: Mg + 2HCl → MgCl₂ + H₂, and zinc behaves the same way, more slowly.",
      },
      {
        question: "79.5 g of copper oxide is reduced to 63.5 g of copper. Calculate the mass of oxygen removed.",
        accept: [
          "16",
        ],
        answer: "16 g. Reduction is loss of oxygen, and mass is conserved, so the oxygen taken away by the reducing agent is 79.5 − 63.5 = 16 g.",
      },
      {
        question: "Work out whether the iron is oxidised or reduced in Fe₂O₃ + 3CO → 2Fe + 3CO₂.",
        accept: [
          "reduced",
          "reduction",
        ],
        answer: "Reduced. The iron starts combined with oxygen and ends as the element, and loss of oxygen = reduction. The carbon monoxide picks that oxygen up, so it is the one oxidised — the two always happen together.",
      },
      {
        question: "Iron makes up 52.3% by mass of the rust it forms. Calculate the mass of rust produced when a 5.6 g iron nail rusts completely, to one decimal place.",
        accept: [
          "10.7",
        ],
        answer: "10.7 g. If the iron is 52.3% of the rust, the total mass is 5.6 ÷ 0.523 = 10.7 g. The extra mass is oxygen and water taken from the surroundings, which is why a rusted object weighs more than it did.",
      },
      {
        question: "Iron is extracted in the blast furnace: Fe₂O₃ + 3CO → 2Fe + 3CO₂. Calculate the mass of iron produced from 800 tonnes of iron(III) oxide. (Mr: Fe₂O₃ = 160, Ar: Fe = 56)",
        accept: [
          "560",
        ],
        answer: "560 tonnes. Working in tonne-moles, 800 ÷ 160 = 5. Each Fe₂O₃ gives two iron atoms, so 5 × 2 = 10. Mass of iron = 10 × 56 = 560 tonnes.",
        higherOnly: true,
      },
      {
        question: "Metal X displaces copper from copper sulfate but not zinc from zinc sulfate. Metal Y displaces zinc but not magnesium. Work out the order of X, Y, zinc and copper, most reactive first.",
        accept: [
          "y zinc x copper",
          "y, zinc, x, copper",
          "y zn x cu",
        ],
        answer: "Y, zinc, X, copper. X + CuSO₄ → XSO₄ + Cu happens, so X is above copper, but X with ZnSO₄ gives no reaction, so X is below zinc. Y + ZnSO₄ → YSO₄ + Zn happens, so Y is above zinc, and failing against magnesium puts Y below it. Putting the two experiments together gives Y, zinc, X, copper.",
      },
      {
        question: "Copper oxide is reduced by carbon: 2CuO + C → 2Cu + CO₂. Calculate the mass of carbon needed to reduce 15.9 g of copper oxide completely. (Mr: CuO = 79.5, Ar: C = 12)",
        accept: [
          "1.2",
        ],
        answer: "1.2 g. Moles of copper oxide = 15.9 ÷ 79.5 = 0.2 mol. The equation needs one carbon for every two CuO, so 0.2 ÷ 2 = 0.1 mol of carbon. Mass = 0.1 × 12 = 1.2 g.",
        higherOnly: true,
      },
      {
        question: "An ore contains 5.0% copper(II) oxide by mass. Calculate the mass of ore needed to obtain 1.0 tonne of copper, to the nearest tonne. (Mr: CuO = 79.5, Ar: Cu = 63.5)",
        accept: [
          "25",
        ],
        answer: "25 tonnes. Copper is 63.5 of CuO's 79.5, so 1.0 tonne of copper requires 1.0 × (79.5 ÷ 63.5) = 1.25 tonnes of copper oxide. That oxide is only 5% of the rock, so the ore needed = 1.25 ÷ 0.05 = 25 tonnes. Moving 25 tonnes of rock per tonne of metal is why low-grade ores are a problem.",
      },
      {
        question: "In the displacement Mg + Cu²⁺ → Mg²⁺ + Cu, calculate the number of electrons transferred per magnesium atom.",
        accept: [
          "2",
        ],
        answer: "2. The half equations are Mg → Mg²⁺ + 2e⁻ and Cu²⁺ + 2e⁻ → Cu. Magnesium loses two electrons and so is oxidised, and the copper ions gain those same two and are reduced. Scaling up, 3 mol of magnesium would move 3 × 2 = 6 mol of electrons.",
        higherOnly: true,
      },
      {
        question: "Explain why gold is found in the Earth as the uncombined metal while aluminium never is.",
        answer: "Gold is at the very bottom of the reactivity series, so it has almost no tendency to lose electrons and form positive ions. It therefore does not react with oxygen, water or acids over geological time and stays as the element. Aluminium is near the top, so it readily loses electrons and reacts with oxygen to form a very stable oxide. Any aluminium metal exposed on the early Earth would long ago have become aluminium oxide, which is why it is only ever mined as a compound. (Mark this one yourself.)",
      },
      {
        question: "Aluminium is more reactive than iron, yet an aluminium window frame lasts for decades while an iron one rusts away. Explain why.",
        answer: "Aluminium does react quickly with oxygen, but the aluminium oxide it forms is a thin, hard layer that sticks tightly to the surface underneath. That layer seals the metal off from air and water, so the reaction stops almost as soon as it starts. Rust is hydrated iron(III) oxide, which is flaky and porous, so it does not seal the surface and simply falls away. Fresh iron is exposed underneath and the rusting continues until the object has corroded through. (Mark this one yourself.)",
      },
      {
        question: "Explain why galvanising still protects iron where the zinc layer has been scratched, while tin plating stops protecting as soon as it is damaged.",
        answer: "Both coatings start as a barrier that keeps oxygen and water away from the iron. Zinc is more reactive than iron, so where the coating is broken the zinc loses electrons in preference and corrodes instead, and the iron is protected sacrificially. Tin is less reactive than iron, so at a scratch it is the iron that loses electrons, and the iron actually corrodes faster than it would with no coating at all. The barrier matters for both, but only zinc keeps working once that barrier fails. (Mark this one yourself.)",
      },
      {
        question: "Explain, in terms of electrons, why a displacement reaction between a metal and a salt solution is a redox reaction, and why it is always the more reactive metal that is oxidised.",
        answer: "The metal atoms give up electrons to become positive ions, which is oxidation, and the metal ions already in solution take those electrons and become atoms, which is reduction. Both happen in the same reaction, so it is a redox reaction. Reactivity is essentially a measure of how readily a metal loses electrons, so the more reactive metal is the one that gives them up. The less reactive metal's ions accept them and are deposited as the solid element. (Mark this one yourself.)",
      },
    ],
    misconceptions: [
      {
        wrong: "Rusting is caused by air alone.",
        right:
          "It needs water AND oxygen together. Iron in dry air does not rust, and neither does iron in boiled, oxygen-free water.",
      },
      {
        wrong: "All metals rust.",
        right:
          "Rusting is specific to iron and steel. Other metals corrode, but that is a different word and a different process.",
      },
      {
        wrong: "Electrolysis is used because it works better.",
        right:
          "It is used because carbon reduction will not work for metals above carbon. It is far more expensive, so it is a last resort.",
      },
      {
        wrong: "Reduction means making something smaller.",
        right:
          "It means losing oxygen, or gaining electrons. The everyday meaning of the word is misleading here.",
      },
      {
        wrong: "Zinc protects iron only by covering it.",
        right:
          "It also protects sacrificially. Even where the coating is scratched, the more reactive zinc corrodes in preference to the iron.",
      },
    ],
  },

  "chemistry/electrolysis": {
    summary:
      "Electrolysis uses electricity to pull compounds apart, and it is the only way to extract the most reactive metals. This topic covers what happens at each electrode, the rules for predicting the products in solution, and half equations — which are Higher tier only and flagged as such.",
    keyFacts: [
      {
        heading: "The basics",
        diagrams: [
          "electrolysis-cell",
        ],
        points: [
          "ELECTROLYSIS is the breaking down of an ionic compound using electricity.",
          "The ELECTROLYTE is the molten or dissolved ionic compound, in which ions are free to move.",
          "The CATHODE is the NEGATIVE electrode. Positive ions (cations, including all metals) move to it.",
          "The ANODE is the POSITIVE electrode. Negative ions (anions, including all non-metals) move to it.",
          "Opposites attract — that single idea decides where every ion goes.",
          "A solid ionic compound cannot be electrolysed, because its ions cannot move.",
        ],
      },
      {
        heading: "Molten compounds",
        points: [
          "For a molten ionic compound the products are simply the two elements it is made of.",
          "The metal forms at the cathode; the non-metal forms at the anode.",
          "Molten lead bromide gives lead at the cathode and bromine at the anode.",
          "Aluminium is extracted from molten aluminium oxide mixed with CRYOLITE.",
          "Cryolite lowers the melting point, which saves a great deal of energy and money.",
          "The carbon anodes burn away over time, because the oxygen produced reacts with them — so they must be replaced regularly.",
        ],
      },
      {
        heading: "Solutions: the rules",
        points: [
          "In solution, water also provides H⁺ and OH⁻ ions, so there is competition.",
          "At the CATHODE: hydrogen forms UNLESS the metal is LESS reactive than hydrogen, in which case the metal forms.",
          "So copper solutions give copper; sodium solutions give hydrogen.",
          "At the ANODE: oxygen forms, UNLESS a halide (chloride, bromide, iodide) is present, in which case the halogen forms.",
          "Sodium chloride solution therefore gives hydrogen at the cathode and chlorine at the anode.",
          "Copper sulfate solution gives copper at the cathode and oxygen at the anode.",
        ],
      },
      {
        heading: "Higher tier: half equations",
        higherOnly: true,
        points: [
          "A half equation shows what happens at ONE electrode, with electrons written in.",
          "At the cathode, positive ions GAIN electrons — reduction. For example: Cu²⁺ + 2e⁻ → Cu.",
          "At the anode, negative ions LOSE electrons — oxidation. For example: 2Cl⁻ → Cl₂ + 2e⁻.",
          "The number of electrons must match the charge on the ion.",
          "Both atoms AND charges must balance on each side.",
          "Half equations are Higher tier only; Foundation students need the products but not the equations.",
        ],
      },
    ],
    flashcards: [
      { term: "Electrolysis", definition: "Breaking down an ionic compound using electricity." },
      { term: "Electrolyte", definition: "The molten or dissolved ionic compound in which ions are free to move." },
      { term: "Cathode", definition: "The negative electrode, which attracts positive ions such as metals and hydrogen." },
      { term: "Anode", definition: "The positive electrode, which attracts negative ions such as halides and oxygen." },
      { term: "Cation", definition: "A positively charged ion, which moves to the cathode." },
      { term: "Anion", definition: "A negatively charged ion, which moves to the anode." },
      { term: "Half equation", definition: "An equation showing the electron transfer at one electrode. Higher tier." },
      { term: "Cryolite", definition: "A compound mixed with aluminium oxide to lower its melting point and save energy." },
      { term: "Inert electrode", definition: "An electrode such as graphite or platinum that does not react during electrolysis." },
      { term: "Reduction", definition: "Gain of electrons — what happens at the cathode." },
      { term: "Oxidation", definition: "Loss of electrons — what happens at the anode." },
      { term: "Halide", definition: "A compound containing chloride, bromide or iodide ions." },
      { term: "Molten", definition: "Melted, so that the ions can move and carry charge." },
      { term: "Aqueous", definition: "Dissolved in water, written (aq)." },
    ],
    examTips: [
      {
        tip: "CATHODE is negative and attracts POSITIVE ions",
        detail:
          "It feels backwards but opposites attract. Metals and hydrogen always go to the cathode; non-metals go to the anode.",
      },
      {
        tip: "Learn the two solution rules exactly",
        detail:
          "Cathode: hydrogen unless the metal is less reactive than hydrogen. Anode: oxygen unless a halide is present. Those two lines answer nearly every solution question.",
      },
      {
        tip: "Say WHY cryolite is used",
        detail:
          "It lowers the melting point of aluminium oxide, so less energy is needed and the process is cheaper. The reason is the mark.",
      },
      {
        tip: "Explain why the anodes need replacing",
        detail:
          "Oxygen produced at the anode reacts with the hot carbon, burning it away as carbon dioxide. This is a favourite six-mark question.",
      },
      {
        tip: "Higher tier: balance charges as well as atoms",
        detail:
          "Cu²⁺ + 2e⁻ → Cu works because +2 and −2 cancel to zero. Count the charges on both sides before moving on.",
      },
      {
        tip: "Remember a solid cannot be electrolysed",
        detail:
          "The ions are fixed in the lattice and cannot move. Melting or dissolving is what frees them to carry charge.",
      },
    ],
    workedExamples: [
      {
        question:
          "Molten lead bromide is electrolysed. Name the product at each electrode and write the half equation for each.",
        steps: [
          "Molten (not dissolved) means the only ions present are Pb²⁺ and Br⁻ from the compound itself — no water to complicate it.",
          "Positive ions move to the negative electrode (cathode). Pb²⁺ arrives and GAINS electrons: Pb²⁺ + 2e⁻ → Pb.",
          "Negative ions move to the positive electrode (anode). Br⁻ arrives and LOSES electrons: 2Br⁻ → Br₂ + 2e⁻.",
          "Two bromide ions are needed because bromine is diatomic. Remember the pattern: reduction at the cathode, oxidation at the anode.",
        ],
        answer: "Lead at the cathode (Pb²⁺ + 2e⁻ → Pb); bromine at the anode (2Br⁻ → Br₂ + 2e⁻)",
      },
    ],
    practice: [
      {
        question: "What is the negative electrode called?",
        accept: ["cathode", "the cathode"],
        answer:
          "The cathode. It attracts POSITIVE ions — metals and hydrogen — because opposite charges attract.",
      },
      {
        question: "What is the positive electrode called?",
        accept: ["anode", "the anode"],
        answer:
          "The anode. Negative ions such as chloride and hydroxide move to it, and non-metals form there.",
      },
      {
        question: "Which electrode do metal ions move to?",
        accept: ["cathode", "the cathode", "negative", "negative electrode"],
        answer:
          "The cathode, the negative electrode. Metal ions are positive, so they are attracted to the negative electrode.",
      },
      {
        question: "Why can a solid ionic compound not be electrolysed?",
        accept: ["ions cannot move", "ions are fixed", "ions cant move", "no free ions", "ions not free to move"],
        answer:
          "Its ions are held in fixed positions in the lattice and cannot move. Melting or dissolving frees them to carry charge.",
      },
      {
        question: "What forms at the cathode when molten lead bromide is electrolysed?",
        accept: ["lead", "pb"],
        answer:
          "Lead. For a molten compound the products are simply its two elements — the metal at the cathode, the non-metal at the anode.",
      },
      {
        question: "What forms at the anode when molten lead bromide is electrolysed?",
        accept: ["bromine", "br2", "br₂"],
        answer:
          "Bromine. Negative bromide ions move to the positive anode, lose electrons and form bromine molecules.",
      },
      {
        question: "What is mixed with aluminium oxide to lower its melting point?",
        accept: ["cryolite"],
        answer:
          "Cryolite. Melting aluminium oxide alone would require far more energy, so cryolite makes the process considerably cheaper.",
      },
      {
        question: "Why do the carbon anodes need replacing regularly in aluminium extraction?",
        accept: ["they burn away", "oxygen reacts with carbon", "react with oxygen", "burn away", "form carbon dioxide", "oxidised", "they react with oxygen"],
        answer:
          "Oxygen produced at the anode reacts with the hot carbon, burning it away as carbon dioxide. The electrodes therefore wear down and must be replaced.",
      },
      {
        question: "What forms at the cathode when sodium chloride SOLUTION is electrolysed?",
        accept: ["hydrogen", "h2", "h₂"],
        answer:
          "Hydrogen. Sodium is more reactive than hydrogen, so hydrogen forms instead of the metal — this is the key rule for solutions.",
      },
      {
        question: "What forms at the anode when sodium chloride solution is electrolysed?",
        accept: ["chlorine", "cl2", "cl₂"],
        answer:
          "Chlorine. A halide is present, so the halogen forms rather than oxygen. Without a halide you would get oxygen instead.",
      },
      {
        question: "What forms at the cathode when copper sulfate solution is electrolysed?",
        accept: ["copper", "cu"],
        answer:
          "Copper. It is LESS reactive than hydrogen, so the metal forms rather than hydrogen — the exception to the usual rule.",
      },
      {
        question: "What forms at the anode when copper sulfate solution is electrolysed?",
        accept: ["oxygen", "o2", "o₂"],
        answer:
          "Oxygen. Sulfate is not a halide, so the default applies and oxygen is produced from the hydroxide ions in the water.",
      },
      {
        question: "Is the reaction at the cathode oxidation or reduction?",
        accept: ["reduction", "reduced"],
        answer:
          "Reduction — positive ions GAIN electrons there. At the anode, negative ions lose electrons, which is oxidation.",
      },
      {
        question: "Higher tier: complete the half equation for copper at the cathode: Cu²⁺ + __e⁻ → Cu. Give the number only.",
        accept: ["2", "two"],
        answer:
          "2. The copper ion has a 2+ charge, so it must gain two electrons to become a neutral atom. Charges must balance as well as atoms.",
        higherOnly: true,
      },
      {
        question: "Higher tier: complete the half equation for chlorine at the anode: 2Cl⁻ → Cl₂ + __e⁻. Give the number only.",
        accept: ["2", "two"],
        answer:
          "2. Two chloride ions each lose one electron, giving two electrons in total and forming one Cl₂ molecule.",
        higherOnly: true,
      },
      {
        question: "Explain why aluminium oxide must be molten or dissolved before it can be electrolysed. Write two or three sentences.",
        answer:
          "In the solid, the aluminium and oxide ions are locked in fixed positions in the ionic lattice and cannot move. Electrolysis works by ions travelling to the electrodes, so if they cannot move, no current flows and no reaction happens. Melting the compound — or dissolving it — frees the ions so they can carry charge to the electrodes. Mark this one yourself: the mark is for ions being FREE TO MOVE, not just for 'it needs to be liquid'.",
      },
      {
        question: "How many electrons are gained by each ion in the half equation Cu2+ + __ e- -> Cu? Give the number only.",
        accept: [
          "2",
        ],
        answer: "2. The charge must balance: 2+ plus two negative electrons gives a neutral copper atom. Positive ions gain electrons at the cathode, which is reduction.",
      },
      {
        question: "Aluminium ions have a 3+ charge. How many moles of electrons are needed to produce 3 mol of aluminium? Give the number only.",
        accept: [
          "9",
        ],
        answer: "Each Al3+ needs 3 electrons, so 3 mol of aluminium needs 3 x 3 = 9 mol of electrons. That electron demand is exactly why aluminium extraction uses so much electricity.",
      },
      {
        question: "0.5 mol of copper is deposited at a cathode. What mass is this in grams? (Ar Cu = 63.5). Give the number only.",
        accept: [
          "31.75",
        ],
        answer: "mass = moles x Ar = 0.5 x 63.5 = 31.75 g.",
      },
      {
        question: "What volume, in dm3, does 0.25 mol of chlorine gas occupy at room temperature and pressure? (1 mol = 24 dm3). Give the number only.",
        accept: [
          "6",
        ],
        answer: "volume = moles x 24 = 0.25 x 24 = 6 dm3. The 24 dm3 figure applies to any gas at RTP, which is why the identity of the gas does not appear in the calculation.",
      },
      {
        question: "In the half equation 2Cl- -> Cl2 + __ e-, how many electrons are released? Give the number only.",
        accept: [
          "2",
        ],
        answer: "2 — one from each chloride ion. Losing electrons is oxidation, and it happens at the anode, which is where the negative ions go.",
      },
      {
        question: "At which electrode are POSITIVE ions discharged?",
        choices: [
          "The cathode",
          "The anode",
          "Both equally",
          "Neither",
        ],
        accept: [
          "The cathode",
        ],
        answer: "Positive ions go to the negative cathode and gain electrons, which is reduction. Negative ions go to the anode and lose electrons.",
      },
      {
        question: "Why must an ionic compound be molten or dissolved for electrolysis?",
        choices: [
          "The ions must be free to move",
          "The compound must be hot to react",
          "Water is needed as a catalyst",
          "Solids have no ions",
        ],
        accept: [
          "The ions must be free to move",
        ],
        answer: "In a solid lattice ions are locked in place and cannot carry charge to the electrodes.",
      },
      {
        question: "Why is aluminium extracted by electrolysis rather than with carbon?",
        choices: [
          "Aluminium is more reactive than carbon",
          "Aluminium ore contains no oxygen",
          "Carbon is too expensive",
          "Aluminium has a low melting point",
        ],
        accept: [
          "Aluminium is more reactive than carbon",
        ],
        answer: "Carbon can only displace metals below it in the reactivity series. That is why electrolysis is used despite the enormous energy cost.",
      },
      {
        question: "In the electrolysis of aqueous sodium chloride, what is produced at the cathode?",
        choices: [
          "Hydrogen",
          "Sodium",
          "Chlorine",
          "Oxygen",
        ],
        accept: [
          "Hydrogen",
        ],
        answer: "Sodium is more reactive than hydrogen, so hydrogen is discharged instead. That is why the products differ from molten sodium chloride.",
      },
      {
        question: "Why is cryolite added during aluminium extraction?",
        choices: [
          "It lowers the melting point, saving energy",
          "It acts as a catalyst",
          "It removes the oxygen",
          "It makes the aluminium purer",
        ],
        accept: [
          "It lowers the melting point, saving energy",
        ],
        answer: "Pure aluminium oxide melts at over 2000 degrees C. Dissolving it in molten cryolite cuts the temperature and so the cost.",
      },
      {
        question: "Work out the product formed at the cathode when molten aluminium oxide is electrolysed.",
        accept: [
          "aluminium",
          "al",
          "aluminum",
        ],
        answer: "Aluminium. Metal ions are positive, so Al³⁺ is attracted to the negative cathode, where it gains electrons: Al³⁺ + 3e⁻ → Al.",
      },
      {
        question: "Work out the product formed at the anode when dilute sulfuric acid is electrolysed.",
        accept: [
          "oxygen",
          "o2",
        ],
        answer: "Oxygen. The negative ions available are OH⁻ and SO₄²⁻, and sulfate is too stable to be discharged, so hydroxide ions give up electrons instead: 4OH⁻ → O₂ + 2H₂O + 4e⁻.",
      },
      {
        question: "Calculate the total number of electrons transferred when one formula unit of Al₂O₃ is fully electrolysed.",
        accept: [
          "6",
        ],
        answer: "6. Each Al³⁺ takes three electrons and there are two of them, so 2 × 3 = 6 electrons are gained at the cathode. The three O²⁻ ions release exactly the same six at the anode.",
      },
      {
        question: "Copper is purified by electrolysis using copper electrodes. Work out what happens to the mass of the anode.",
        accept: [
          "decreases",
          "it decreases",
          "loses mass",
          "it loses mass",
          "decrease",
          "goes down",
        ],
        answer: "It decreases. The impure anode dissolves as Cu → Cu²⁺ + 2e⁻, and those ions travel across and plate onto the cathode. So the anode gets lighter by almost exactly the mass the cathode gains, with the impurities dropping off as sludge.",
      },
      {
        question: "Work out the product formed at the anode when copper chloride solution is electrolysed.",
        accept: [
          "chlorine",
          "cl2",
        ],
        answer: "Chlorine. When a halide ion is present in a reasonably concentrated solution it is discharged in preference to hydroxide: 2Cl⁻ → Cl₂ + 2e⁻. You would smell it and it would bleach damp litmus paper.",
      },
      {
        question: "Work out which electrode a bromide ion travels to during electrolysis, and name the type of reaction that happens to it there.",
        accept: [
          "anode",
          "the anode",
          "anode oxidation",
          "anode, oxidation",
        ],
        answer: "The anode. Bromide ions are negative, so they are attracted to the positive electrode, and there they give up electrons — loss of electrons = oxidation.",
      },
      {
        question: "Calculate the mass of aluminium produced when 1.2 mol of electrons passes through molten aluminium oxide. (Ar: Al = 27)",
        accept: [
          "10.8",
        ],
        answer: "10.8 g. The half equation Al³⁺ + 3e⁻ → Al uses three electrons per atom, so 1.2 ÷ 3 = 0.4 mol of aluminium is deposited. Mass = 0.4 × 27 = 10.8 g.",
        higherOnly: true,
      },
      {
        question: "Molten sodium chloride is electrolysed and 4.6 g of sodium forms at the cathode. Calculate the volume of chlorine produced at room temperature and pressure, in dm³. (Ar: Na = 23; one mole of gas occupies 24 dm³)",
        accept: [
          "2.4",
        ],
        answer: "2.4 dm³. Moles of sodium = 4.6 ÷ 23 = 0.2 mol, and Na⁺ + e⁻ → Na means 0.2 mol of electrons crossed. At the anode 2Cl⁻ → Cl₂ + 2e⁻ gives one chlorine molecule per two electrons, so 0.2 ÷ 2 = 0.1 mol forms. Volume = 0.1 × 24 = 2.4 dm³.",
        higherOnly: true,
      },
      {
        question: "Sodium chloride solution is electrolysed with inert electrodes. Work out the three useful products, naming what forms at each electrode and what is left in solution.",
        accept: [
          "hydrogen chlorine and sodium hydroxide",
          "hydrogen, chlorine and sodium hydroxide",
          "hydrogen chlorine sodium hydroxide",
          "hydrogen, chlorine, sodium hydroxide",
        ],
        answer: "Hydrogen at the cathode, chlorine at the anode, and sodium hydroxide left in the solution. The water supplies H⁺ + OH⁻ alongside the Na⁺ and Cl⁻ from the salt. At the cathode 2H⁺ + 2e⁻ → H₂ wins, because sodium is more reactive than hydrogen and its ions stay put. At the anode the halide is discharged as 2Cl⁻ → Cl₂ + 2e⁻, leaving Na⁺ and OH⁻ behind as sodium hydroxide.",
      },
      {
        question: "During copper purification the anode loses 6.35 g. Calculate the number of moles of electrons that passed through the cell. (Ar: Cu = 63.5)",
        accept: [
          "0.2",
        ],
        answer: "0.2 mol. Moles of copper dissolved = 6.35 ÷ 63.5 = 0.1 mol. Each atom leaves as Cu → Cu²⁺ + 2e⁻, releasing two electrons, so 0.1 × 2 = 0.2 mol of electrons flowed. The cathode uses the same 0.2 mol and therefore gains the same 6.35 g.",
        higherOnly: true,
      },
      {
        question: "Calculate the mass of aluminium oxide needed to produce 1080 tonnes of aluminium. (Mr: Al₂O₃ = 102, Ar: Al = 27)",
        accept: [
          "2040",
        ],
        answer: "2040 tonnes. Working in tonne-moles, 1080 ÷ 27 = 40 of aluminium. Each Al₂O₃ contains two aluminium atoms, so 40 ÷ 2 = 20 are needed. Mass = 20 × 102 = 2040 tonnes of oxide for every 1080 tonnes of metal.",
        higherOnly: true,
      },
      {
        question: "Explain why electrolysing copper sulfate solution with copper electrodes purifies copper, while using inert carbon electrodes does not.",
        answer: "With copper electrodes the impure anode itself dissolves, Cu → Cu²⁺ + 2e⁻, so copper ions are continually fed into the solution and plated as pure metal on the cathode. Impurities such as gold and silver are less reactive and do not dissolve, so they fall to the bottom as anode sludge, while more reactive impurities dissolve but stay in solution rather than plating out. With inert carbon electrodes the anode takes no part, so oxygen is released there instead and the copper ions in the solution are simply used up. The copper deposited would be no purer than what was already dissolved. (Mark this one yourself.)",
      },
      {
        question: "Explain why a molten ionic compound conducts electricity and is broken down by it, while molten wax conducts nothing at all.",
        answer: "In a solid ionic lattice the ions are locked in place, but melting frees them to move, and because they carry charge their movement is an electric current. Positive ions travel to the cathode and negative ions to the anode, where they gain or lose electrons and turn into elements, so the compound is decomposed. Wax is made of neutral molecules with no charged particles at all, so melting it produces mobile particles that carry no charge. With nothing to carry current there is no conduction and no decomposition. (Mark this one yourself.)",
      },
      {
        question: "Explain why the electrolysis of brine is such a valuable industrial process, naming the three products and a use for each.",
        answer: "One cheap and effectively unlimited raw material, sea water, yields three products that are all in demand. Chlorine from the anode is used to sterilise drinking water and to make bleach and PVC. Hydrogen from the cathode is used in the manufacture of ammonia and as a fuel. The sodium hydroxide left in solution is used to make soaps, detergents and paper. Almost nothing is wasted, which is what makes the economics work. (Mark this one yourself.)",
      },
      {
        question: "Explain why oxidation always happens at the anode and reduction always at the cathode, in terms of where electrons go.",
        answer: "The power supply pulls electrons away from the anode, so that electrode is short of electrons and is positive. Negative ions are attracted to it and give up their electrons there, and loss of electrons is oxidation. The same electrons are pushed onto the cathode, making it negative, so positive ions are attracted and take electrons from it, and gain of electrons is reduction. The two must happen together, because every electron released at the anode is one delivered at the cathode. (Mark this one yourself.)",
      },
    ],
    misconceptions: [
      {
        wrong: "The cathode is positive because it attracts positive ions.",
        right:
          "The cathode is NEGATIVE, which is exactly why it attracts positive ions. Opposites attract.",
      },
      {
        wrong: "Electrolysing sodium chloride solution gives sodium metal.",
        right:
          "It gives hydrogen, because sodium is more reactive than hydrogen. Only a metal LESS reactive than hydrogen is produced from solution.",
      },
      {
        wrong: "Electrolysis works on any compound.",
        right:
          "Only ionic compounds, and only when molten or dissolved so the ions can move. Covalent substances have no ions to move.",
      },
      {
        wrong: "Cryolite is a catalyst.",
        right:
          "It lowers the melting point of aluminium oxide, saving energy. It does not speed up a reaction, which is what a catalyst does.",
      },
      {
        wrong: "The anode is consumed because electricity destroys it.",
        right:
          "Oxygen produced at the anode reacts with the hot carbon to form carbon dioxide. It is a chemical reaction, not an electrical effect.",
      },
    ],
  },

  "chemistry/energy-changes": {
    summary:
      "Every reaction either releases energy or takes it in, and which one it does comes down to a single comparison: the energy needed to break bonds against the energy released when new bonds form. This topic covers exothermic and endothermic reactions, reaction profiles, and bond energy calculations.",
    keyFacts: [
      {
        heading: "Exothermic and endothermic",
        points: [
          "EXOTHERMIC reactions transfer energy TO the surroundings, so the temperature RISES.",
          "Examples: combustion, oxidation, neutralisation, and hand warmers.",
          "ENDOTHERMIC reactions take energy IN from the surroundings, so the temperature FALLS.",
          "Examples: thermal decomposition, the reaction of citric acid with sodium hydrogencarbonate, and sports injury packs.",
          "Energy is conserved overall — it is transferred between chemical stores and the surroundings, never created.",
        ],
      },
      {
        heading: "Reaction profiles",
        diagrams: [
          "reaction-profile-exothermic",
          "reaction-profile-endothermic",
        ],
        points: [
          "A reaction profile plots energy against the progress of the reaction.",
          "EXOTHERMIC: the products are LOWER in energy than the reactants, so the overall change is negative.",
          "ENDOTHERMIC: the products are HIGHER in energy than the reactants, so the overall change is positive.",
          "The ACTIVATION ENERGY is the minimum energy needed for a reaction to happen — the height of the hump.",
          "A CATALYST provides an alternative route with a LOWER activation energy, so the hump is smaller.",
          "A catalyst does NOT change the overall energy change, and is not used up.",
        ],
      },
      {
        heading: "Bond energies",
        points: [
          "BREAKING bonds is always ENDOTHERMIC — energy must be supplied.",
          "MAKING bonds is always EXOTHERMIC — energy is released.",
          "overall energy change = energy to break bonds − energy released making bonds.",
          "A NEGATIVE answer means exothermic; a POSITIVE answer means endothermic.",
          "If making bonds releases MORE than breaking them costs, the reaction is exothermic.",
          "Bond energies are given in kJ per mole, and the answer carries the same unit.",
        ],
      },
      {
        heading: "Cells and fuel cells",
        points: [
          "A simple CELL uses two different metals in an electrolyte; the bigger the reactivity difference, the greater the voltage.",
          "Non-rechargeable cells stop when a reactant is used up; rechargeable ones can have the reaction reversed by an external current.",
          "A FUEL CELL is supplied continuously with fuel and oxygen, and produces a voltage for as long as it is fed.",
          "The hydrogen fuel cell reaction is: hydrogen + oxygen → water. The only product is water.",
          "Advantages over rechargeable batteries: no need to recharge, no pollutants at the point of use, and lighter for the energy delivered.",
          "Disadvantages: hydrogen is hard to store and transport safely, and producing it often uses fossil fuels.",
        ],
      },
    ],
    flashcards: [
      { term: "Exothermic", definition: "A reaction that transfers energy to the surroundings, so the temperature rises." },
      { term: "Endothermic", definition: "A reaction that takes energy in from the surroundings, so the temperature falls." },
      { term: "Reaction profile", definition: "A diagram plotting energy against the progress of a reaction." },
      { term: "Activation energy", definition: "The minimum energy particles need for a reaction to occur." },
      { term: "Catalyst", definition: "A substance that speeds up a reaction by providing a route with lower activation energy, without being used up." },
      { term: "Bond breaking", definition: "An endothermic process — energy must be supplied to break a bond." },
      { term: "Bond making", definition: "An exothermic process — energy is released when a bond forms." },
      { term: "Bond energy", definition: "The energy needed to break one mole of a particular bond, in kJ/mol." },
      { term: "Combustion", definition: "Burning in oxygen — a strongly exothermic reaction." },
      { term: "Thermal decomposition", definition: "Breaking a compound down by heating — an endothermic reaction." },
      { term: "Cell", definition: "A device using two different metals in an electrolyte to produce a voltage." },
      { term: "Fuel cell", definition: "A cell supplied continuously with fuel and oxygen, producing a voltage while it is fed." },
      { term: "Hydrogen fuel cell", definition: "A fuel cell where hydrogen and oxygen react to produce water and electrical energy." },
      { term: "Rechargeable cell", definition: "A cell whose reaction can be reversed by applying an external electric current." },
    ],
    examTips: [
      {
        tip: "Breaking is endothermic, making is exothermic — always",
        detail:
          "There are no exceptions. Getting these two the wrong way round reverses every bond energy answer you write.",
      },
      {
        tip: "Negative means exothermic",
        detail:
          "A negative overall energy change means energy was released. State which it is in words as well as giving the number.",
      },
      {
        tip: "A catalyst does NOT change the energy change",
        detail:
          "It lowers the activation energy only. On a profile the hump gets smaller but the start and end levels stay exactly where they were.",
      },
      {
        tip: "Label reaction profiles fully",
        detail:
          "Reactants, products, activation energy and the overall energy change. Unlabelled axes and arrows lose marks even on a correct shape.",
      },
      {
        tip: "Temperature FALLS in an endothermic reaction",
        detail:
          "Energy is taken from the surroundings, so a thermometer in the mixture reads lower. Students often expect the opposite.",
      },
      {
        tip: "Give a drawback of hydrogen fuel cells",
        detail:
          "Hydrogen is difficult to store and transport, and making it usually requires energy from fossil fuels. Balanced answers score higher.",
      },
    ],
    workedExamples: [
      {
        question:
          "Calculate the energy change for H₂ + Cl₂ → 2HCl. Bond energies: H−H = 436, Cl−Cl = 242, H−Cl = 431 kJ/mol.",
        steps: [
          "Energy to BREAK bonds: one H−H and one Cl−Cl = 436 + 242 = 678 kJ/mol.",
          "Energy released MAKING bonds: two H−Cl bonds = 2 × 431 = 862 kJ/mol.",
          "Overall change = energy in − energy out = 678 − 862.",
          "= −184 kJ/mol. The answer is negative, so the reaction is EXOTHERMIC.",
        ],
        answer: "−184 kJ/mol, exothermic",
      },
    ],
    practice: [
      {
        question: "What word describes a reaction that transfers energy to the surroundings?",
        accept: ["exothermic"],
        answer:
          "Exothermic — the temperature of the surroundings rises. Combustion, oxidation and neutralisation are the standard examples.",
      },
      {
        question: "What word describes a reaction that takes energy in from the surroundings?",
        accept: ["endothermic"],
        answer:
          "Endothermic — the temperature FALLS, because energy is taken from the surroundings. Thermal decomposition is the classic example.",
      },
      {
        question: "Is breaking a bond exothermic or endothermic?",
        accept: ["endothermic"],
        answer:
          "Endothermic — energy must be supplied to pull a bond apart. Making bonds is exothermic, releasing energy. There are no exceptions.",
      },
      {
        question: "Is making a bond exothermic or endothermic?",
        accept: ["exothermic"],
        answer:
          "Exothermic — energy is released when a bond forms. This pair of facts underlies every bond energy calculation.",
      },
      {
        question: "What is the minimum energy needed for a reaction to occur called?",
        accept: ["activation energy", "the activation energy"],
        answer:
          "The activation energy. On a reaction profile it is the height of the hump between reactants and products.",
      },
      {
        question: "Does a catalyst change the overall energy change of a reaction? Answer yes or no.",
        accept: ["no", "n"],
        answer:
          "No. It lowers the activation energy only, providing an alternative route. The reactants and products keep exactly the same energy levels.",
      },
      {
        question: "In an exothermic reaction, are the products higher or lower in energy than the reactants?",
        accept: ["lower", "lower in energy", "lower energy"],
        answer:
          "Lower. The difference has been released to the surroundings, which is why the overall energy change is negative.",
      },
      {
        question: "In an endothermic reaction, are the products higher or lower in energy than the reactants?",
        accept: ["higher", "higher in energy", "higher energy"],
        answer:
          "Higher. Energy has been taken in from the surroundings and stored in the products, so the overall change is positive.",
      },
      {
        question: "A reaction has an energy change of −250 kJ/mol. Is it exothermic or endothermic?",
        accept: ["exothermic"],
        answer:
          "Exothermic. A negative value means energy was released to the surroundings. Always state which it is in words as well as the number.",
      },
      {
        question: "Bonds broken need 500 kJ/mol and bonds made release 620 kJ/mol. Calculate the overall energy change. Give the number only, with its sign.",
        accept: ["-120"],
        answer:
          "−120 kJ/mol. Energy change = broken − made = 500 − 620 = −120. Negative, so exothermic.",
      },
      {
        question: "Bonds broken need 700 kJ/mol and bonds made release 640 kJ/mol. Calculate the overall energy change. Give the number only, with its sign.",
        accept: ["60", "+60"],
        answer:
          "+60 kJ/mol. 700 − 640 = +60. Positive, so this reaction is endothermic and the surroundings would cool.",
      },
      {
        question: "What is the only product of a hydrogen fuel cell?",
        accept: ["water", "h2o", "h₂o"],
        answer:
          "Water. Hydrogen and oxygen react to give water and electrical energy, which is why fuel cells produce no pollutants at the point of use.",
      },
      {
        question: "Give one disadvantage of hydrogen fuel cells.",
        accept: ["storing hydrogen", "storage", "transport", "hard to store", "expensive", "fossil fuels to make hydrogen", "hydrogen is flammable", "producing hydrogen"],
        answer:
          "Hydrogen is difficult and potentially dangerous to store and transport, and producing it usually consumes energy from fossil fuels.",
      },
      {
        question: "Give one example of an endothermic reaction.",
        accept: ["thermal decomposition", "sports injury pack", "citric acid and sodium hydrogencarbonate", "decomposition", "cold pack", "photosynthesis"],
        answer:
          "Thermal decomposition, or citric acid reacting with sodium hydrogencarbonate — the reaction used in sports injury cold packs.",
      },
      {
        question: "Explain why a reaction is exothermic in terms of bond breaking and bond making. Write two or three sentences.",
        answer:
          "Breaking the bonds in the reactants requires energy to be supplied, which is endothermic, while forming the bonds in the products releases energy, which is exothermic. In an exothermic reaction the energy released when the new bonds form is GREATER than the energy needed to break the old ones. The surplus is transferred to the surroundings, which is why the temperature rises and the overall energy change is negative. Mark this one yourself: the comparison between the two quantities is the mark, not just the definitions.",
      },
      {
        question: "Explain how a catalyst speeds up a reaction, and why it does not change the energy change.",
        answer:
          "A catalyst provides an alternative reaction pathway with a lower activation energy, so a greater proportion of the colliding particles have enough energy to react and the reaction proceeds faster. It is not used up in the process, so a small amount works indefinitely. The energy of the reactants and the energy of the products are unchanged — only the height of the hump between them is reduced — so the overall energy change is exactly the same as it would be without the catalyst. Mark this one yourself: the alternative pathway AND the unchanged start and end levels are both needed.",
      },
      {
        question: "Breaking bonds requires 678 kJ and making bonds releases 862 kJ. What is the overall energy change in kJ/mol? Give the number, including the sign.",
        accept: [
          "-184",
        ],
        answer: "Energy change = energy in - energy out = 678 - 862 = -184 kJ/mol. The negative sign means exothermic, so the sign is not decoration — it is the answer to what kind of reaction this is.",
      },
      {
        question: "A reaction has an energy change of -92 kJ/mol. Is it exothermic or endothermic?",
        accept: [
          "exothermic",
        ],
        answer: "Exothermic. A negative value means more energy was released making bonds than was absorbed breaking them, so energy left the system and the surroundings warm up.",
      },
      {
        question: "Breaking bonds absorbs 2000 kJ and forming bonds releases 2300 kJ. What is the energy change in kJ/mol? Give the number, including the sign.",
        accept: [
          "-300",
        ],
        answer: "2000 - 2300 = -300 kJ/mol, so exothermic. Always do 'in minus out' in that order and the sign takes care of itself.",
      },
      {
        question: "50 g of water rises by 20 degrees C. Using q = mcT with c = 4.2, how much energy was transferred in joules? Give the number only.",
        accept: [
          "4200",
        ],
        answer: "q = 50 x 4.2 x 20 = 4200 J. Note that m is the mass of the WATER being heated, not the mass of the reacting chemical.",
      },
      {
        question: "Breaking bonds absorbs 1500 kJ and forming bonds releases 1200 kJ. What is the SIZE of the energy change in kJ/mol? Give the number only.",
        accept: [
          "300",
        ],
        answer: "1500 - 1200 = +300 kJ/mol, so this one is endothermic — more energy went into breaking bonds than came back out when new bonds formed.",
      },
      {
        question: "In an EXOTHERMIC reaction, the temperature of the surroundings:",
        choices: [
          "Increases",
          "Decreases",
          "Stays exactly the same",
          "Falls then rises",
        ],
        accept: [
          "Increases",
        ],
        answer: "Exothermic reactions release energy, so the surroundings warm up. Combustion, neutralisation and oxidation are the standard examples.",
      },
      {
        question: "Which of these is an ENDOTHERMIC process?",
        choices: [
          "Thermal decomposition",
          "Combustion",
          "Neutralisation",
          "Rusting",
        ],
        accept: [
          "Thermal decomposition",
        ],
        answer: "Thermal decomposition and the reaction of citric acid with sodium hydrogencarbonate take energy in. The others release it.",
      },
      {
        question: "On a reaction profile, activation energy is:",
        choices: [
          "The height from the reactants to the top of the curve",
          "The difference between reactants and products",
          "The total height of the diagram",
          "The energy of the products alone",
        ],
        accept: [
          "The height from the reactants to the top of the curve",
        ],
        answer: "Activation energy is the hump that must be climbed. The reactant-to-product difference is the overall energy change.",
      },
      {
        question: "A catalyst speeds up a reaction by:",
        choices: [
          "Providing an alternative route with lower activation energy",
          "Increasing the energy of the particles",
          "Raising the temperature",
          "Being used up in the reaction",
        ],
        accept: [
          "Providing an alternative route with lower activation energy",
        ],
        answer: "A catalyst is not consumed and does not change the overall energy change — only how easily the reaction gets started.",
      },
      {
        question: "Bond breaking and bond making are, respectively:",
        choices: [
          "Endothermic and exothermic",
          "Exothermic and endothermic",
          "Both endothermic",
          "Both exothermic",
        ],
        accept: [
          "Endothermic and exothermic",
        ],
        answer: "Breaking bonds takes energy in; making them gives energy out. Which is larger decides whether the reaction overall is exothermic or endothermic.",
      },
      {
        question: "Calculate the energy transferred, in joules, when 100 g of water rises by 15°C. (c = 4.2 J/g°C)",
        accept: [
          "6300",
        ],
        answer: "6300 J. Substituting into q = mcΔT gives 100 × 4.2 × 15 joules. Always check the mass used is the mass of the solution being heated, not the mass of fuel burnt.",
      },
      {
        question: "A reaction profile shows the reactants at 250 kJ and the peak of the curve at 400 kJ. Calculate the activation energy.",
        accept: [
          "150",
        ],
        answer: "150 kJ. Activation energy is measured from the reactants up to the top of the hump, not from the products: 400 − 250. The products' energy plays no part in it.",
      },
      {
        question: "Calculate the temperature rise, in °C, when 4200 J is transferred to 50 g of water. (c = 4.2 J/g°C)",
        accept: [
          "20",
        ],
        answer: "20°C. Rearranging q = mcΔT means dividing the energy by mass times specific heat capacity, so 4200 ÷ 210.",
      },
      {
        question: "Burning 0.25 mol of a fuel releases 320 kJ. Calculate the energy released per mole, in kJ/mol.",
        accept: [
          "1280",
        ],
        answer: "1280 kJ/mol. Divide the energy by the number of moles burnt: 320 ÷ 0.25. Per-mole figures let you compare fuels fairly however much of each you burn.",
      },
      {
        question: "Dissolving ammonium nitrate in water makes the beaker feel cold. Work out whether the process is exothermic or endothermic.",
        accept: [
          "endothermic",
        ],
        answer: "Endothermic. The beaker feels cold because energy is being taken in from the surroundings, so their temperature falls and the energy change = a positive value. Instant cold packs use exactly this.",
      },
      {
        question: "Two reactions are both exothermic, but one needs strong heating to start and the other happens at room temperature. Work out which has the higher activation energy.",
        accept: [
          "the one that needs heating",
          "the one needing heating",
          "the one that needs strong heating",
          "the heated one",
        ],
        answer: "The one that needs strong heating. Activation energy = the minimum energy a collision must have to succeed, so if it is high only a tiny fraction of collisions at room temperature are energetic enough. Heating raises that fraction. How much energy a reaction gives out is a separate question from how easily it starts.",
      },
      {
        question: "Calculate the overall energy change, in kJ/mol, for CH₄ + 2O₂ → CO₂ + 2H₂O. (Bond energies in kJ/mol: C–H 412, O=O 496, C=O 743, O–H 463)",
        accept: [
          "-698",
        ],
        answer: "−698 kJ/mol. Bonds broken: four C–H at 412 gives 1648, plus two O=O at 496 gives 992, a total of 2640 kJ. Bonds made: two C=O gives 1486, plus four O–H gives 1852, a total of 3338 kJ. Energy change = broken − made = 2640 − 3338 = −698 kJ/mol, so combustion is exothermic.",
        higherOnly: true,
      },
      {
        question: "50 cm³ of acid is mixed with 50 cm³ of alkali and the temperature rises by 6.5°C. Calculate the energy released, in kJ. (density 1 g/cm³, c = 4.2 J/g°C)",
        accept: [
          "2.73",
        ],
        answer: "2.73 kJ. The mass being heated is the whole mixture: 50 + 50 = 100 g. Then q = mcΔT = 100 × 4.2 × 6.5 = 2730 J. Converting, 2730 ÷ 1000 = 2.73 kJ.",
      },
      {
        question: "Burning 0.50 g of ethanol raises the temperature of 200 g of water by 15°C. Calculate the energy released per gram of ethanol, in kJ/g. (c = 4.2 J/g°C)",
        accept: [
          "25.2",
        ],
        answer: "25.2 kJ/g. Energy gained by the water = 200 × 4.2 × 15 = 12,600 J. In kilojoules that is 12,600 ÷ 1000 = 12.6 kJ. Per gram of fuel, 12.6 ÷ 0.50 = 25.2 kJ/g. The accepted value for ethanol is nearer 30 kJ/g, and the shortfall is heat lost to the air and the apparatus.",
      },
      {
        question: "25.0 cm³ of 2.00 mol/dm³ hydrochloric acid is neutralised and 2.86 kJ is released. Calculate the energy change in kJ/mol, including the sign.",
        accept: [
          "-57.2",
        ],
        answer: "−57.2 kJ/mol. Moles of acid = 0.0250 × 2.00 = 0.0500 mol. Energy per mole = 2.86 ÷ 0.0500 = 57.2 kJ. The sign is negative because energy was given out to the surroundings.",
        higherOnly: true,
      },
      {
        question: "The energy change for N₂ + 3H₂ → 2NH₃ is −92 kJ/mol. Calculate the N–H bond energy, to the nearest whole number. (N≡N 941 kJ/mol, H–H 436 kJ/mol)",
        accept: [
          "390",
        ],
        answer: "390 kJ/mol. Bonds broken = 941 + (3 × 436) = 2249 kJ. Since energy change = bonds broken − bonds made, −92 = 2249 − bonds made, so bonds made = 2341 kJ. Two ammonia molecules contain six N–H bonds, so each is 2341 ÷ 6 = 390 kJ/mol.",
        higherOnly: true,
      },
      {
        question: "Explain how a reaction can be endothermic overall, given that making bonds always releases energy.",
        answer: "Every reaction both breaks bonds, which takes energy in, and makes bonds, which gives energy out, and the overall change is the difference between the two totals. If the energy needed to break the reactant bonds is greater than the energy released when the product bonds form, the reaction has to take the shortfall from its surroundings. That is what makes it endothermic, and why the temperature of the surroundings falls. Bond making is still exothermic — it is simply not enough to pay for the bond breaking. (Mark this one yourself.)",
      },
      {
        question: "Explain why a hydrogen fuel cell may be preferred to a rechargeable battery for a long journey, and give one drawback of using it.",
        answer: "A fuel cell keeps producing a voltage for as long as hydrogen and oxygen are supplied, so range depends on tank size rather than on stored charge, and refuelling takes minutes instead of hours of recharging. The only product is water, so nothing polluting comes out of the vehicle, and the cell does not lose capacity through repeated charge cycles the way a battery does. The drawbacks are real, though: hydrogen is a gas that is difficult and expensive to store safely at high pressure, and most of it is currently made from fossil fuels, which moves the emissions elsewhere rather than removing them. (Mark this one yourself.)",
      },
      {
        question: "Explain why the temperature rise measured in a school calorimetry experiment is always lower than the true value, and how the apparatus could be improved.",
        answer: "Energy escapes to the surroundings instead of reaching the water — heating the air, the container, the thermometer and the stand — so less of the reaction's energy is measured. With a burning fuel, some of it may also evaporate or burn incompletely, releasing less energy than the calculation assumes. Insulating the container with a lid and lagging, and shielding the flame from draughts, keeps more of the energy where it is wanted. Using a copper calorimeter close above the flame also improves the transfer, though some loss is unavoidable. (Mark this one yourself.)",
      },
      {
        question: "Explain what activation energy is, and why an exothermic reaction with a high activation energy may not happen at all at room temperature.",
        answer: "Activation energy is the minimum energy that colliding particles must have for the collision to be successful and the reaction to occur. Whether a reaction gives energy out overall says nothing about how much energy it needs to get started, because the reactant bonds still have to be broken first. At room temperature only a small fraction of particles have enough energy, so if the activation energy is high almost no collisions succeed and the rate is effectively zero. A spark, heating or a catalyst that lowers the barrier is needed before the reaction proceeds — which is why petrol sits safely in a tank. (Mark this one yourself.)",
      },
    ],
    misconceptions: [
      {
        wrong: "Endothermic reactions feel hot because energy goes in.",
        right:
          "They feel COLD. Energy is taken FROM the surroundings, so the temperature of the mixture and its container falls.",
      },
      {
        wrong: "Breaking bonds releases energy.",
        right:
          "Breaking always requires energy; making always releases it. Reversing this ruins every bond energy calculation.",
      },
      {
        wrong: "A catalyst lowers the energy of the products.",
        right:
          "It lowers only the ACTIVATION ENERGY. Reactants and products keep exactly the same energy, so the overall change is unaffected.",
      },
      {
        wrong: "A positive energy change means energy was released.",
        right:
          "Positive means energy was taken IN — endothermic. Negative means released — exothermic.",
      },
      {
        wrong: "Hydrogen fuel cells are completely pollution-free.",
        right:
          "They produce only water at the point of use, but making and compressing the hydrogen usually consumes energy from fossil fuels.",
      },
    ],
  },

  "chemistry/rates-of-reaction": {
    summary:
      "This topic explains why some reactions take a second and others take a century, and it all reduces to collision theory: particles must collide, often enough and hard enough. Everything else — temperature, concentration, surface area, catalysts — is a way of changing how often or how hard those collisions happen.",
    keyFacts: [
      {
        heading: "Collision theory",
        diagrams: [
          "collision-theory",
        ],
        points: [
          "For a reaction to happen, particles must COLLIDE with at least the ACTIVATION ENERGY.",
          "Rate depends on the FREQUENCY of collisions and the PROPORTION that are successful.",
          "TEMPERATURE: particles move faster, so they collide more often AND more have enough energy. Both effects.",
          "CONCENTRATION or PRESSURE: particles are closer together, so collisions are more frequent.",
          "SURFACE AREA: a powder has far more exposed surface, so more collisions can happen per second.",
          "CATALYST: provides a route with lower activation energy, so a greater proportion of collisions succeed.",
        ],
      },
      {
        heading: "Measuring rate",
        points: [
          "mean rate = quantity used or produced ÷ time taken.",
          "Common measures: volume of gas produced, mass lost, or how long a cross takes to disappear.",
          "Units follow what was measured: cm³/s, g/s, or 1/time for the cross method.",
          "Gas can be collected in a gas syringe or by measuring the mass lost from an open flask.",
          "The rate is FASTEST at the start, when concentration is highest, and slows as reactants are used up.",
          "The reaction has finished when the line on the graph becomes horizontal.",
        ],
      },
      {
        heading: "Reading rate graphs",
        diagrams: [
          "rate-graph",
        ],
        points: [
          "A STEEPER line means a FASTER reaction.",
          "Two experiments with the same amount of reactant reach the same final level, however fast they get there.",
          "So a catalyst or higher temperature changes the STEEPNESS, not the final amount.",
          "Using more reactant changes the final level as well as the steepness.",
          "A horizontal section means the reaction has stopped — a reactant has been used up.",
        ],
      },
      {
        heading: "Higher tier: rate from a tangent",
        higherOnly: true,
        points: [
          "The rate at a particular moment is the GRADIENT of the curve at that point.",
          "Draw a TANGENT — a straight line just touching the curve at that point.",
          "Make the tangent long, so that reading its coordinates is more accurate.",
          "gradient = change in y ÷ change in x, using two points far apart on the tangent.",
          "Give the answer with the units of the axes, such as cm³/s.",
          "Drawing tangents to find rate is Higher tier only.",
        ],
      },
    ],
    flashcards: [
      { term: "Rate of reaction", definition: "How quickly reactants are used up or products are formed." },
      { term: "Collision theory", definition: "The idea that particles must collide with at least the activation energy to react." },
      { term: "Activation energy", definition: "The minimum energy colliding particles need for a reaction to occur." },
      { term: "Catalyst", definition: "A substance that speeds up a reaction without being used up, by lowering the activation energy." },
      { term: "Surface area", definition: "The exposed area of a solid; a powder has far more than a lump of the same mass." },
      { term: "Concentration", definition: "How much solute is dissolved in a given volume; higher concentration means more frequent collisions." },
      { term: "Gas syringe", definition: "Apparatus used to measure the volume of gas produced during a reaction." },
      { term: "Mean rate", definition: "The quantity used or produced divided by the total time taken." },
      { term: "Tangent", definition: "A straight line touching a curve at one point, used to find the rate at that moment. Higher tier." },
      { term: "Gradient", definition: "The steepness of a line: change in y divided by change in x." },
      { term: "Enzyme", definition: "A biological catalyst." },
      { term: "Turbidity method", definition: "Timing how long a cross takes to disappear as a precipitate forms." },
      {
        term: "Mean rate of reaction",
        definition: "The quantity of reactant used or product formed divided by the time taken.",
      },
    ],
    examTips: [
      {
        tip: "Give BOTH effects of temperature",
        detail:
          "Particles collide more frequently AND a greater proportion have the activation energy. Answers giving only one effect cap themselves.",
      },
      {
        tip: "Say 'more frequent collisions', not 'more collisions'",
        detail:
          "Frequency is the point — collisions per second. Mark schemes are precise about this wording.",
      },
      {
        tip: "A catalyst changes the steepness, not the final amount",
        detail:
          "The same quantity of reactant gives the same quantity of product. Only the time taken changes, so the lines meet at the same height.",
      },
      {
        tip: "Always give units for a rate",
        detail:
          "cm³/s, g/s, or whatever the axes use. A bare number is an incomplete answer even when the arithmetic is right.",
      },
      {
        tip: "Explain surface area through EXPOSED particles",
        detail:
          "Powdering a solid exposes far more particles to collide with, so more collisions happen per second. Same mass, more surface.",
      },
      {
        tip: "Higher tier: draw the tangent long",
        detail:
          "A short tangent makes reading coordinates imprecise. Foundation students are not asked to draw tangents at all.",
      },
    ],
    workedExamples: [
      {
        question:
          "48 cm³ of gas is produced in 24 seconds. Calculate the mean rate of reaction.",
        steps: [
          "mean rate = quantity produced ÷ time taken.",
          "= 48 cm³ ÷ 24 s.",
          "= 2.",
          "The units come from what was measured and timed: cm³/s. So the answer is 2 cm³/s.",
        ],
        answer: "2 cm³/s",
      },
      {
        question:
          "A flask loses 1.2 g of mass over 60 seconds as carbon dioxide escapes. Calculate the mean rate.",
        steps: [
          "mean rate = mass lost ÷ time taken.",
          "= 1.2 g ÷ 60 s.",
          "= 0.02.",
          "Units g/s, so the rate is 0.02 g/s. A small number is expected here — always sanity-check the size.",
        ],
        answer: "0.02 g/s",
      },
    ],
    practice: [
      {
        question: "According to collision theory, what two things must happen for a reaction to occur?",
        accept: ["collide with enough energy", "collision and activation energy", "collide with activation energy", "particles collide with enough energy", "collide and enough energy"],
        answer:
          "Particles must collide, AND collide with at least the activation energy. A collision without enough energy achieves nothing.",
      },
      {
        question: "Give the TWO effects of increasing temperature on rate.",
        accept: ["more frequent collisions and more energy", "collide more often and with more energy", "more collisions and more energy", "frequency and energy"],
        answer:
          "Particles collide more frequently, AND a greater proportion of collisions have the activation energy. Both effects are needed for full marks.",
      },
      {
        question: "Why does powdering a solid increase the rate of reaction?",
        accept: ["more surface area", "increased surface area", "larger surface area", "more exposed particles", "bigger surface area", "surface area"],
        answer:
          "It exposes far more surface area, so more particles are available to collide per second — the same mass, but far more of it exposed.",
      },
      {
        question: "How does a catalyst speed up a reaction?",
        accept: ["lowers activation energy", "lower activation energy", "alternative pathway", "provides alternative route with lower activation energy", "reduces activation energy"],
        answer:
          "It provides an alternative pathway with a lower activation energy, so a greater proportion of collisions are successful. It is not used up.",
      },
      {
        question: "36 cm³ of gas is produced in 18 seconds. Calculate the mean rate in cm³/s. Give the number only.",
        accept: ["2"],
        answer:
          "2 cm³/s. Rate = 36 ÷ 18 = 2. In a written answer include the units, because they carry a mark.",
      },
      {
        question: "60 cm³ of gas is produced in 40 seconds. Calculate the mean rate in cm³/s. Give the number only.",
        accept: ["1.5"],
        answer:
          "1.5 cm³/s. 60 ÷ 40 = 1.5. Mean rate is always quantity divided by total time.",
      },
      {
        question: "A flask loses 2.4 g in 120 seconds. Calculate the mean rate in g/s. Give the number only.",
        accept: ["0.02"],
        answer:
          "0.02 g/s. 2.4 ÷ 120 = 0.02. A small decimal is expected — mass loss is usually slow compared with gas volume.",
      },
      {
        question: "At which point is a reaction fastest: the start, the middle, or the end?",
        accept: ["the start", "start", "beginning", "at the start"],
        answer:
          "The start, when the concentration of reactants is highest so collisions are most frequent. The rate falls as reactants are used up.",
      },
      {
        question: "What does a horizontal section on a rate graph mean?",
        accept: ["reaction finished", "reaction has stopped", "finished", "stopped", "no more product", "reactant used up", "complete"],
        answer:
          "The reaction has finished — no more product is being made because a reactant has been completely used up.",
      },
      {
        question: "Does a steeper line on a rate graph mean a faster or slower reaction?",
        accept: ["faster", "faster reaction", "quicker"],
        answer:
          "Faster. More product is formed in the same time, so the line rises more steeply.",
      },
      {
        question: "Two experiments use the same amount of reactant but one is catalysed. Do they reach the same final volume of gas? Answer yes or no.",
        accept: ["yes", "y"],
        answer:
          "Yes. A catalyst changes how FAST, not how much. The same quantity of reactant always gives the same quantity of product.",
      },
      {
        question: "What piece of apparatus measures the volume of gas produced?",
        accept: ["gas syringe", "a gas syringe", "syringe", "measuring cylinder"],
        answer:
          "A gas syringe. The alternative is measuring the mass lost from an open flask as the gas escapes.",
      },
      {
        question: "What is a biological catalyst called?",
        accept: ["enzyme", "an enzyme", "enzymes"],
        answer:
          "An enzyme. It works the same way as any catalyst — lowering the activation energy — but it is a protein and is far more specific.",
      },
      {
        question: "Higher tier: what do you draw on a curve to find the rate at a particular moment?",
        accept: ["tangent", "a tangent", "tangent line"],
        answer:
          "A tangent — a straight line just touching the curve at that point. Its gradient is the rate at that instant. Foundation students are not asked this.",
        higherOnly: true,
      },
      {
        question: "Explain why increasing the concentration of a solution increases the rate of reaction. Write two or three sentences.",
        answer:
          "A more concentrated solution contains more reactant particles in the same volume, so the particles are closer together. That means collisions between reacting particles happen more frequently. Since the rate depends on how often successful collisions occur, more frequent collisions produce a faster reaction — though the proportion of collisions with enough energy is unchanged. Mark this one yourself: the mark is for more FREQUENT collisions, and the best answers note that the energy of collisions is unaffected.",
      },
      {
        question: "Describe how you would investigate the effect of temperature on the rate of reaction between sodium thiosulfate and hydrochloric acid.",
        answer:
          "Measure a fixed volume of sodium thiosulfate into a conical flask standing on a printed cross, and warm it to the chosen temperature in a water bath. Add a fixed volume of hydrochloric acid and immediately start a stopwatch, then stop timing when the cross can no longer be seen through the cloudy precipitate. Repeat at several temperatures, keeping the volumes, concentrations and the person judging the disappearance the same, since judging it is subjective. Plot 1 ÷ time against temperature: a shorter time means a faster rate, so the graph should rise with temperature. Mark this one yourself: named control variables, the timing method, and repeating at several temperatures are the key marks.",
      },
      {
        question: "24 cm3 of gas is produced in 60 s. What is the mean rate in cm3/s? Give the number only.",
        accept: [
          "0.4",
        ],
        answer: "rate = quantity ÷ time = 24 ÷ 60 = 0.4 cm3/s. Mean rate uses the total change over the total time, which is why it is lower than the rate at the start.",
      },
      {
        question: "A flask loses 45 g of mass in 90 s. What is the mean rate of reaction in g/s? Give the number only.",
        accept: [
          "0.5",
        ],
        answer: "45 ÷ 90 = 0.5 g/s. Mass is lost because a gas is escaping, so mass loss is a perfectly good way of measuring how fast the reaction is going.",
      },
      {
        question: "A reaction produces 0.6 g of product in 30 s. What is the mean rate in g/s? Give the number only.",
        accept: [
          "0.02",
        ],
        answer: "0.6 ÷ 30 = 0.02 g/s. Small numbers are correct here — do not be tempted to round to zero.",
      },
      {
        question: "Gas is produced at 1.5 cm3/s. How long, in seconds, does it take to collect 30 cm3? Give the number only.",
        accept: [
          "20",
        ],
        answer: "time = quantity ÷ rate = 30 ÷ 1.5 = 20 s. This is the same equation rearranged, which is why writing it out beats memorising three versions.",
      },
      {
        question: "If the rate doubles for every 10 degree C rise, by what factor does it increase from 20 to 40 degrees C? Give the number only.",
        accept: [
          "4",
        ],
        answer: "Two rises of 10 degrees, so the rate doubles twice: 2 x 2 = 4 times faster. Raising temperature increases both the frequency of collisions and the proportion that have the activation energy.",
      },
      {
        question: "Increasing the temperature speeds up a reaction because particles:",
        choices: [
          "Collide more often AND more have the activation energy",
          "Get physically bigger",
          "Collide less often but harder",
          "Become catalysts",
        ],
        accept: [
          "Collide more often AND more have the activation energy",
        ],
        answer: "Both effects matter, and the second is the larger one. Mentioning only 'more collisions' costs a mark.",
      },
      {
        question: "Increasing the surface area of a solid reactant speeds up the reaction because:",
        choices: [
          "More particles are exposed for collisions",
          "The particles move faster",
          "The activation energy falls",
          "The concentration increases",
        ],
        accept: [
          "More particles are exposed for collisions",
        ],
        answer: "Powder reacts faster than a lump for this reason. It does not change how fast the particles move.",
      },
      {
        question: "On a graph of gas volume against time, the reaction is FASTEST when the line is:",
        choices: [
          "Steepest, at the start",
          "Flattest, at the end",
          "Horizontal",
          "Curving upwards",
        ],
        accept: [
          "Steepest, at the start",
        ],
        answer: "The gradient is the rate. It is steepest at the start when concentration is highest, and flattens as reactants are used up.",
      },
      {
        question: "A reaction stops and the graph goes flat. This means:",
        choices: [
          "A reactant has been completely used up",
          "The catalyst has been consumed",
          "The temperature reached zero",
          "The products have evaporated",
        ],
        accept: [
          "A reactant has been completely used up",
        ],
        answer: "A flat line means no more product is forming. The height at which it flattens depends on how much of the limiting reactant there was.",
      },
      {
        question: "Which change would NOT increase the rate of a reaction?",
        choices: [
          "Lowering the concentration of a reactant",
          "Adding a catalyst",
          "Raising the temperature",
          "Grinding a solid into powder",
        ],
        accept: [
          "Lowering the concentration of a reactant",
        ],
        answer: "Lower concentration means fewer particles in the same volume, so fewer collisions per second and a slower reaction.",
      },
      {
        question: "A flask loses 1.8 g in the first 30 s and a further 0.6 g in the next 30 s. Calculate the mean rate over the whole minute, in g/s.",
        accept: [
          "0.04",
        ],
        answer: "0.04 g/s. The total loss is 2.4 g over 60 s, so the mean rate = 2.4 ÷ 60. The mean hides the fact that the first half was three times faster than the second.",
      },
      {
        question: "A tangent drawn to a rate curve at 20 s has a rise of 18 cm³ over a run of 15 s. Calculate the rate of reaction at 20 s, in cm³/s.",
        accept: [
          "1.2",
        ],
        answer: "1.2 cm³/s. The gradient of the tangent is the rate at that instant, so divide the rise by the run: 18 ÷ 15.",
        higherOnly: true,
      },
      {
        question: "In a disappearing-cross experiment the cross can no longer be seen after 40 s. Calculate 1 ÷ time as a measure of the rate, in s⁻¹.",
        accept: [
          "0.025",
        ],
        answer: "0.025 per second. Rate is proportional to 1 ÷ time, so dividing 1 by 40 s gives 0.025. The faster the reaction, the bigger this number, which is why it is plotted rather than the time itself.",
      },
      {
        question: "A reaction produces gas at a mean rate of 0.8 cm³/s. Calculate the volume collected after 25 s.",
        accept: [
          "20",
        ],
        answer: "20 cm³. Rearranging, volume = rate × time, so 0.8 × 25 cm³ is collected.",
      },
      {
        question: "Calculate the mean rate of reaction, in mol/s, if 0.06 mol of gas is produced in 150 s.",
        accept: [
          "0.0004",
          "4x10^-4",
          "4 x 10^-4",
          "4e-4",
        ],
        answer: "0.0004 mol/s. Divide the amount of substance formed by the time taken: 0.06 ÷ 150. Quoting a rate in mol/s rather than cm³/s makes different gases comparable.",
      },
      {
        question: "The same mass of marble chips is crushed to a powder before being added to the same acid. Work out what happens to the total volume of carbon dioxide collected.",
        accept: [
          "it stays the same",
          "stays the same",
          "no change",
          "the same",
          "unchanged",
          "it is the same",
        ],
        answer: "It stays the same. Powdering increases the surface area, so more collisions happen per second and the graph is steeper, but the amount of reactant = the same as before. Surface area changes how fast, never how much.",
      },
      {
        question: "A reaction gives 60 cm³ of gas in total, with 45 cm³ collected by 30 s and the reaction finishing at 90 s. Calculate how many times faster the mean rate over the first 30 s is than over the last 60 s.",
        accept: [
          "6",
        ],
        answer: "6 times. Over the first 30 s the rate is 45 ÷ 30 = 1.5 cm³/s. In the remaining time only 60 − 45 = 15 cm³ forms, over 60 s, giving 15 ÷ 60 = 0.25 cm³/s. Comparing the two, 1.5 ÷ 0.25 = 6.",
      },
      {
        question: "0.12 g of magnesium reacts completely with excess acid in 50 s. Mg + 2HCl → MgCl₂ + H₂. Calculate the mean rate in mol of hydrogen per second. (Ar: Mg = 24)",
        accept: [
          "0.0001",
          "1x10^-4",
          "1 x 10^-4",
          "1e-4",
        ],
        answer: "0.0001 mol/s. Moles of magnesium = 0.12 ÷ 24 = 0.005 mol. One H₂ forms per magnesium, so 0.005 mol of hydrogen is released. Rate = 0.005 ÷ 50 = 0.0001 mol/s.",
        higherOnly: true,
      },
      {
        question: "24 cm³ of hydrogen is collected in 40 s at room temperature and pressure. Calculate the mean rate in mol/s. (One mole of any gas occupies 24 dm³ at RTP.)",
        accept: [
          "0.000025",
          "2.5x10^-5",
          "2.5 x 10^-5",
          "2.5e-5",
        ],
        answer: "0.000025 mol/s. Convert the volume first: 24 ÷ 1000 = 0.024 dm³. Moles = 0.024 ÷ 24 = 0.001 mol. Rate = 0.001 ÷ 40 = 0.000025 mol/s, or 2.5 × 10⁻⁵ mol/s.",
        higherOnly: true,
      },
      {
        question: "Halving the concentration of the acid makes a reaction take 90 s instead of 30 s. Calculate the ratio of the faster rate to the slower one.",
        accept: [
          "3",
          "3:1",
          "3 : 1",
        ],
        answer: "3, or 3 : 1. Rate is proportional to 1 ÷ time, so the two rates are 1 ÷ 30 = 0.0333 and 1 ÷ 90 = 0.0111 per second. Dividing them gives 0.0333 ÷ 0.0111 = 3. Halving the concentration cut the rate by a factor of three, not two, so rate is not simply proportional to concentration here.",
      },
      {
        question: "A catalysed reaction reaches its final volume of 80 cm³ in 25 s; without the catalyst it takes 100 s. Calculate the difference between the two mean rates, in cm³/s.",
        accept: [
          "2.4",
        ],
        answer: "2.4 cm³/s. With the catalyst the mean rate is 80 ÷ 25 = 3.2 cm³/s; without it, 80 ÷ 100 = 0.8 cm³/s. The difference is 3.2 − 0.8 = 2.4 cm³/s. Both reach 80 cm³, because a catalyst changes the rate and not the amount of product.",
      },
      {
        question: "Explain, using collision theory, why a reaction between marble chips and acid slows down as it goes on, even though nothing is taken away.",
        answer: "As the reaction proceeds the acid is used up, so there are fewer acid particles in each cm³ of solution and fewer collisions with the marble every second. The chips also shrink, reducing the surface area available for collisions to happen on. Fewer collisions per second means fewer successful collisions per second, so the rate falls. The graph therefore gets shallower and finally flattens when one reactant has run out completely. (Mark this one yourself.)",
      },
      {
        question: "Explain why the rate graph for a catalysed reaction is steeper than the uncatalysed one but levels off at exactly the same height.",
        answer: "A catalyst provides an alternative reaction pathway with a lower activation energy, so a greater proportion of collisions have enough energy to succeed. More successful collisions per second means a faster rate, which shows as a steeper line early on. The catalyst is not used up and does not change the reactants or the products, so the same amount of gas can be made either way. The height of the plateau is fixed by the amount of the limiting reactant, which the catalyst has not altered. (Mark this one yourself.)",
      },
      {
        question: "Explain why raising the pressure speeds up a reaction between two gases, but raising the pressure on a reaction between two solutions does not.",
        answer: "Increasing the pressure on a gas squeezes the same number of particles into a smaller volume, so there are more particles per cm³ and they collide more often. More collisions per second gives more successful collisions per second, and the rate rises. Liquids are effectively incompressible, so applying pressure to a solution barely changes its volume. The number of particles per cm³ stays the same, the collision frequency does not change, and neither does the rate. (Mark this one yourself.)",
      },
      {
        question: "Explain why timing how long a cross takes to disappear gives only a rough measure of rate, and how the method could be improved.",
        answer: "Deciding the exact moment the cross vanishes is a judgement made by eye, and different people call it at different points, so the result depends on the observer. The same person may also judge it differently between runs, and the reaction does not stop at that instant — it is simply obscured. Using a light sensor and a data logger to record when the transmitted light falls below a set level removes the human judgement and gives a consistent end point. Repeating each concentration and taking a mean, with the same depth of solution and the same cross each time, also improves it. (Mark this one yourself.)",
      },
    ],
    misconceptions: [
      {
        wrong: "A catalyst produces more product.",
        right:
          "It changes only the speed. The same amount of reactant gives the same amount of product, so the graph reaches the same final height.",
      },
      {
        wrong: "Higher temperature works only by making particles move faster.",
        right:
          "That is half of it. It also means a greater PROPORTION of collisions have the activation energy, which is usually the larger effect.",
      },
      {
        wrong: "Powdering a solid gives you more of it.",
        right:
          "The mass is identical. What changes is the surface area exposed for collisions.",
      },
      {
        wrong: "A reaction proceeds at a steady rate until it stops.",
        right:
          "It is fastest at the start and slows continuously as reactants are used up, which is why rate graphs are curves rather than straight lines.",
      },
      {
        wrong: "Catalysts are used up slowly during the reaction.",
        right:
          "They are not used up at all. A small quantity can catalyse a reaction indefinitely, which is why they are so valuable industrially.",
      },
    ],
  },

  "chemistry/reversible-reactions": {
    summary:
      "Some reactions go both ways at once, and eventually settle into a balance where neither side wins. This topic covers reversible reactions, dynamic equilibrium, and how changing the conditions shifts that balance — the last of which is Higher tier only and flagged accordingly.",
    keyFacts: [
      {
        heading: "Reversible reactions",
        points: [
          "In a REVERSIBLE reaction the products can react to re-form the reactants.",
          "It is written with the ⇌ symbol instead of a single arrow.",
          "If the forward reaction is EXOTHERMIC, the reverse is ENDOTHERMIC by exactly the same amount.",
          "The classic example: hydrated copper sulfate ⇌ anhydrous copper sulfate + water.",
          "Blue hydrated crystals turn white when heated; adding water turns them blue again and releases heat.",
        ],
      },
      {
        heading: "Dynamic equilibrium",
        diagrams: [
          "dynamic-equilibrium",
        ],
        points: [
          "Equilibrium is reached only in a CLOSED SYSTEM, where nothing can enter or leave.",
          "At equilibrium the forward and reverse reactions happen at the SAME RATE.",
          "So the concentrations of reactants and products stay CONSTANT — but they are not equal.",
          "It is called DYNAMIC because both reactions are still happening; it is not that everything has stopped.",
          "The position of equilibrium describes whether there is more product or more reactant present.",
        ],
      },
      {
        heading: "Higher tier: changing the conditions",
        higherOnly: true,
        points: [
          "If a change is made, the equilibrium shifts to OPPOSE that change — Le Chatelier's principle.",
          "CONCENTRATION: adding more reactant shifts the position towards the products.",
          "TEMPERATURE: increasing it shifts the equilibrium in the ENDOTHERMIC direction, to absorb the extra energy.",
          "So for an exothermic forward reaction, raising the temperature gives LESS product.",
          "PRESSURE (for gases): increasing it shifts the equilibrium towards the side with FEWER molecules of gas.",
          "A catalyst does NOT change the position of equilibrium — it only makes it be reached faster.",
          "This whole section is Higher tier only.",
        ],
      },
      {
        heading: "Industrial compromise",
        points: [
          "The Haber process makes ammonia: nitrogen + hydrogen ⇌ ammonia, and the forward reaction is exothermic.",
          "Low temperature would give more ammonia at equilibrium, but the reaction would be far too slow.",
          "So around 450°C is used — a COMPROMISE between yield and rate.",
          "High pressure favours ammonia because there are fewer gas molecules on the product side, but very high pressure is expensive and dangerous.",
          "An iron catalyst speeds the reaction without affecting the yield, so it is used because it costs nothing in product.",
          "Unreacted gases are recycled, so nothing is wasted even though each pass gives an incomplete conversion.",
        ],
      },
    ],
    flashcards: [
      { term: "Reversible reaction", definition: "A reaction in which the products can react to re-form the reactants, written with ⇌." },
      { term: "Equilibrium", definition: "The state where forward and reverse reactions occur at the same rate in a closed system." },
      { term: "Dynamic equilibrium", definition: "Equilibrium where both reactions continue, but concentrations remain constant." },
      { term: "Closed system", definition: "A system where no substances can enter or leave, required for equilibrium." },
      { term: "Position of equilibrium", definition: "Whether the mixture at equilibrium contains more products or more reactants." },
      { term: "Le Chatelier's principle", definition: "If a change is made, the equilibrium shifts to oppose it. Higher tier." },
      { term: "Haber process", definition: "The industrial reaction of nitrogen and hydrogen to make ammonia." },
      { term: "Compromise conditions", definition: "Conditions chosen to balance yield against rate and cost, rather than maximising either." },
      { term: "Yield", definition: "The amount of product obtained from a reaction." },
      { term: "Anhydrous", definition: "Containing no water — anhydrous copper sulfate is white." },
      { term: "Hydrated", definition: "Containing water of crystallisation — hydrated copper sulfate is blue." },
      { term: "Catalyst", definition: "A substance that speeds up a reaction without being used up, and without changing the equilibrium position." },
    ],
    examTips: [
      {
        tip: "Equilibrium means EQUAL RATES, not equal amounts",
        detail:
          "The concentrations are constant but usually very different. This is the most misunderstood idea in the topic.",
      },
      {
        tip: "Say 'dynamic' and explain it",
        detail:
          "Both reactions are still happening, at the same rate. Answers implying everything has stopped lose the mark.",
      },
      {
        tip: "Equilibrium needs a CLOSED system",
        detail:
          "If a gas can escape, equilibrium is never reached because the reverse reaction has nothing to work with.",
      },
      {
        tip: "Higher tier: shift OPPOSES the change",
        detail:
          "Raise the temperature and it shifts endothermically to absorb it. Add reactant and it shifts to use it up. One principle, every question.",
      },
      {
        tip: "Explain the Haber temperature as a COMPROMISE",
        detail:
          "A lower temperature gives more ammonia but far too slowly. 450°C sacrifices yield for a workable rate. The word compromise is the mark.",
      },
      {
        tip: "A catalyst never changes the yield",
        detail:
          "It reaches the same equilibrium faster. If a question asks why iron is used in the Haber process, that is the answer.",
      },
    ],
    workedExamples: [
      {
        question:
          "In the Haber process, N₂ + 3H₂ ⇌ 2NH₃, and the forward reaction is exothermic. Predict the effect on the yield of ammonia of (a) increasing the pressure and (b) increasing the temperature.",
        steps: [
          "Count the gas molecules on each side: 4 on the left (1 + 3) and 2 on the right.",
          "(a) Raising the pressure shifts the equilibrium towards the side with FEWER gas molecules — the right. So the yield of ammonia increases.",
          "(b) The forward reaction is exothermic, so raising the temperature shifts the equilibrium in the ENDOTHERMIC direction to oppose the change — backwards. So the yield of ammonia decreases.",
          "That is why the real process uses a compromise temperature: a lower yield, but reached fast enough to be worth it.",
        ],
        answer: "(a) more ammonia; (b) less ammonia",
      },
    ],
    practice: [
      {
        question: "What symbol shows that a reaction is reversible?",
        accept: ["⇌", "double arrow", "two arrows", "reversible arrow", "half arrows"],
        answer:
          "The ⇌ symbol — two half arrows pointing opposite ways. A single arrow means the reaction goes only one way.",
      },
      {
        question: "At equilibrium, what is true about the rates of the forward and reverse reactions?",
        accept: ["they are equal", "equal", "the same", "same rate", "equal rates"],
        answer:
          "They are equal. That is what keeps the concentrations constant — not that the reactions have stopped.",
      },
      {
        question: "Why is equilibrium described as DYNAMIC?",
        accept: ["both reactions still happen", "reactions continue", "still reacting", "both still occurring", "reactions are still going", "not stopped"],
        answer:
          "Because both the forward and reverse reactions are still taking place, just at the same rate. Nothing has stopped.",
      },
      {
        question: "What type of system is needed for equilibrium to be reached?",
        accept: ["closed", "closed system", "a closed system"],
        answer:
          "A closed system — nothing can enter or leave. If a gas escapes, the reverse reaction has nothing to work with and equilibrium is never reached.",
      },
      {
        question: "At equilibrium, are the concentrations of reactants and products necessarily equal? Answer yes or no.",
        accept: ["no", "n"],
        answer:
          "No. They are CONSTANT, not equal — usually one side is heavily favoured. This is the most misunderstood point in the topic.",
      },
      {
        question: "If the forward reaction is exothermic, what is the reverse reaction?",
        accept: ["endothermic"],
        answer:
          "Endothermic, by exactly the same amount of energy. That symmetry is what makes temperature such a powerful lever on equilibrium.",
      },
      {
        question: "What colour is anhydrous copper sulfate?",
        accept: ["white"],
        answer:
          "White. Adding water turns it blue and releases heat, which is why it is used as a test for the presence of water.",
      },
      {
        question: "What colour is hydrated copper sulfate?",
        accept: ["blue"],
        answer:
          "Blue. Heating drives off the water of crystallisation, turning it white — and the reaction is reversible.",
      },
      {
        question: "Which two gases react in the Haber process?",
        accept: ["nitrogen and hydrogen", "hydrogen and nitrogen", "n2 and h2"],
        answer:
          "Nitrogen and hydrogen, forming ammonia. The nitrogen comes from the air and the hydrogen usually from natural gas.",
      },
      {
        question: "What is made in the Haber process?",
        accept: ["ammonia", "nh3", "nh₃"],
        answer:
          "Ammonia, NH₃. It is used mainly to make fertilisers, which is why the process matters so much for food production.",
      },
      {
        question: "Higher tier: increasing the temperature shifts equilibrium in which direction?",
        accept: ["endothermic", "the endothermic direction", "endothermic direction"],
        answer:
          "The endothermic direction, to absorb the extra energy. That is Le Chatelier's principle — the system opposes the change made to it.",
        higherOnly: true,
      },
      {
        question: "Higher tier: increasing pressure shifts a gas equilibrium towards which side?",
        accept: ["fewer molecules", "the side with fewer molecules", "fewer moles", "fewer gas molecules", "side with fewer molecules"],
        answer:
          "The side with FEWER gas molecules, because that reduces the pressure and so opposes the change.",
        higherOnly: true,
      },
      {
        question: "Does a catalyst change the position of equilibrium? Answer yes or no.",
        accept: ["no", "n"],
        answer:
          "No. It speeds up both the forward and reverse reactions equally, so equilibrium is reached faster but the yield is identical.",
      },
      {
        question: "Approximately what temperature is used in the Haber process, in °C? Give the number only.",
        accept: ["450"],
        answer:
          "About 450°C. A lower temperature would give more ammonia at equilibrium but far too slowly to be useful — it is a compromise.",
      },
      {
        question: "Explain what is meant by dynamic equilibrium. Write two or three sentences.",
        answer:
          "In a closed system, a reversible reaction reaches a point where the forward and reverse reactions are proceeding at exactly the same rate. Because reactant is being converted to product at the same speed as product is converted back, the concentrations of everything stay constant. It is called dynamic because both reactions are still happening continuously — nothing has stopped, and the concentrations being constant does not mean they are equal. Mark this one yourself: equal rates, constant concentrations, and reactions still occurring are the three points.",
      },
      {
        question: "Explain why a temperature of around 450°C is used in the Haber process, even though it reduces the yield.",
        answer:
          "The forward reaction that makes ammonia is exothermic, so a lower temperature would shift the equilibrium towards the products and give a higher yield. However, at a low temperature the reaction is extremely slow, so although the eventual yield would be better it would take far too long to be commercially useful. A temperature around 450°C is therefore a compromise: it sacrifices some yield in exchange for a much faster rate, and the unreacted gases are recycled so little is ultimately wasted. An iron catalyst is used as well, since it speeds the reaction without reducing the yield at all. Mark this one yourself: the word compromise, plus both sides of the trade-off, are what the marks are for.",
      },
      {
        question: "What does the symbol with two half arrows in an equation mean?",
        choices: [
          "The reaction is reversible",
          "The reaction is very fast",
          "A catalyst is needed",
          "The reaction is exothermic",
        ],
        accept: [
          "The reaction is reversible",
        ],
        answer: "Reversible means products can reform reactants. In a closed system this leads to a dynamic equilibrium.",
      },
      {
        question: "At dynamic equilibrium:",
        choices: [
          "Both reactions continue at equal rates",
          "Both reactions have stopped",
          "Only the forward reaction happens",
          "The amounts of reactants and products are equal",
        ],
        accept: [
          "Both reactions continue at equal rates",
        ],
        answer: "Dynamic means still happening. Equilibrium means the rates match, so concentrations stay constant — not that they are equal to each other.",
      },
      {
        question: "If the forward reaction is exothermic, RAISING the temperature will:",
        choices: [
          "Shift the equilibrium towards the reactants",
          "Shift it towards the products",
          "Have no effect",
          "Stop the reaction",
        ],
        accept: [
          "Shift the equilibrium towards the reactants",
        ],
        answer: "The system opposes the change by favouring the endothermic direction, which here is the reverse reaction.",
      },
      {
        question: "Increasing the pressure shifts a gaseous equilibrium towards:",
        choices: [
          "The side with fewer gas molecules",
          "The side with more gas molecules",
          "Neither side",
          "The side with heavier molecules",
        ],
        accept: [
          "The side with fewer gas molecules",
        ],
        answer: "Favouring fewer molecules reduces the pressure, opposing the change. If both sides have equal molecules, pressure has no effect.",
      },
      {
        question: "Adding a catalyst to a reversible reaction:",
        choices: [
          "Speeds up both directions equally, so equilibrium is reached sooner",
          "Shifts the equilibrium towards the products",
          "Increases the yield",
          "Only speeds up the forward reaction",
        ],
        accept: [
          "Speeds up both directions equally, so equilibrium is reached sooner",
        ],
        answer: "A catalyst changes the time taken, never the position of equilibrium. That distinction is tested regularly.",
      },
      {
        question: "A Haber plant makes 68 tonnes of ammonia against a theoretical 170 tonnes. Calculate the percentage yield.",
        accept: [
          "40",
        ],
        answer: "40%. Divide the actual mass by the theoretical mass: 68 ÷ 170 gives 0.4, which is 40%. Unreacted gases are recycled, so the overall conversion is far better than one pass suggests.",
      },
      {
        question: "25 g of blue hydrated copper sulfate is heated until 16 g of white powder remains. Calculate the mass of water driven off.",
        accept: [
          "9",
        ],
        answer: "9 g. The only thing lost is the water of crystallisation, so 25 − 16 = 9 g. Adding that water back turns the powder blue again, which is what makes the change reversible.",
      },
      {
        question: "Work out the colour change seen when blue anhydrous cobalt chloride paper is used to test a liquid and water is present.",
        accept: [
          "blue to pink",
          "pink",
          "turns pink",
          "it turns pink",
          "blue turns pink",
        ],
        answer: "Blue to pink. The anhydrous form is blue and the hydrated form is pink: CoCl₂ + 6H₂O ⇌ CoCl₂·6H₂O. Warming the pink paper drives the water off again and it returns to blue.",
      },
      {
        question: "The forward reaction 2SO₂ + O₂ ⇌ 2SO₃ is exothermic. Work out what happens to the yield of SO₃ when the temperature is raised.",
        accept: [
          "it decreases",
          "decreases",
          "it falls",
          "falls",
          "goes down",
          "it goes down",
          "lower",
        ],
        answer: "It decreases. Raising the temperature shifts the position of equilibrium in the endothermic direction, which here is the reverse reaction, so more SO₃ breaks back down = a lower yield. The rate goes up at the same time, which is the whole industrial dilemma.",
        higherOnly: true,
      },
      {
        question: "N₂ + 3H₂ ⇌ 2NH₃. Calculate the mass of ammonia that 28 tonnes of nitrogen would give at 100% conversion. (Mr: N₂ = 28, NH₃ = 17)",
        accept: [
          "34",
        ],
        answer: "34 tonnes. 28 tonnes is one tonne-mole of nitrogen, and each N₂ gives two NH₃, so the mass is 2 × 17 tonnes. The real plant never reaches this, because the reaction is reversible.",
      },
      {
        question: "Work out whether a reversible reaction taking place in an open beaker can reach equilibrium.",
        accept: [
          "no",
          "it cannot",
          "cannot",
          "no it cannot",
        ],
        answer: "No. Equilibrium needs a closed system, and in an open beaker any gas produced escapes into the room. The reverse reaction then has nothing to work with, so the two rates can never become equal = no equilibrium is ever established.",
      },
      {
        question: "A Haber plant runs at a yield of 15%. Calculate the mass of nitrogen needed to make 340 tonnes of ammonia, to the nearest tonne. (Mr: N₂ = 28, NH₃ = 17)",
        accept: [
          "1867",
        ],
        answer: "1867 tonnes. 340 ÷ 17 = 20 tonne-moles of ammonia, and two ammonia come from each nitrogen, so 20 ÷ 2 = 10 tonne-moles of N₂ are needed. At 100% that is 10 × 28 = 280 tonnes. At only 15% yield the feed required is 280 ÷ 0.15 = 1867 tonnes.",
        higherOnly: true,
      },
      {
        question: "For 2SO₂ + O₂ ⇌ 2SO₃ the forward reaction has an energy change of −196 kJ/mol. Work out the temperature and pressure conditions that would give the highest yield of SO₃.",
        accept: [
          "low temperature and high pressure",
          "low temperature, high pressure",
          "low temp and high pressure",
          "cool and high pressure",
        ],
        answer: "Low temperature and high pressure. The forward reaction is exothermic, so cooling shifts the equilibrium towards SO₃. There are 2 + 1 = 3 gas molecules on the left against 2 on the right, so squeezing the mixture also favours the product side. Industry does not use both: a low temperature makes the rate uselessly slow, so about 450°C is chosen, and the yield at ordinary pressure is already around 96%, so high pressure is not worth the cost.",
        higherOnly: true,
      },
      {
        question: "0.50 mol of N₂ and 1.50 mol of H₂ are sealed in a vessel. At equilibrium 0.20 mol of NH₃ has formed. Calculate the moles of nitrogen remaining.",
        accept: [
          "0.4",
          "0.40",
        ],
        answer: "0.40 mol. N₂ + 3H₂ ⇌ 2NH₃ makes two ammonia for each nitrogen, so the nitrogen used is 0.20 ÷ 2 = 0.10 mol. Subtracting from what was there at the start, 0.50 − 0.10 = 0.40 mol is left. For the same reason 3 × 0.10 = 0.30 mol of hydrogen has gone.",
        higherOnly: true,
      },
      {
        question: "A 2.0 dm³ vessel at equilibrium holds 0.80 mol of N₂O₄ and 0.40 mol of NO₂. Calculate the percentage of the molecules present that are NO₂, to one decimal place.",
        accept: [
          "33.3",
        ],
        answer: "33.3%. The total amount present is 0.80 + 0.40 = 1.20 mol. The fraction that is NO₂ is 0.40 ÷ 1.20 = 0.333, so as a percentage that is 33.3%. Its concentration is 0.40 ÷ 2.0 = 0.20 mol/dm³ — equilibrium does not mean equal amounts.",
      },
      {
        question: "Hydrated copper sulfate is CuSO₄·5H₂O. Calculate the percentage by mass of water in the crystals. (Mr: CuSO₄ = 160, H₂O = 18)",
        accept: [
          "36",
        ],
        answer: "36%. The five water molecules weigh 5 × 18 = 90, and the whole crystal weighs 160 + 90 = 250. The water is therefore (90 ÷ 250) × 100 = 36% of the mass, which is the mass a heated sample should lose.",
      },
      {
        question: "Explain why the Haber process uses a pressure of about 200 atmospheres rather than the highest pressure the equipment could manage.",
        answer: "There are four molecules of gas on the reactant side and two on the product side, so higher pressure does shift the equilibrium towards ammonia and raise the yield. But very high pressures need thick-walled vessels and powerful compressors, which cost a great deal to build, to run and to maintain safely. Beyond a point the extra ammonia is worth less than the extra cost of getting it. About 200 atmospheres is the compromise where the value of the increased yield still outweighs what it takes to achieve. (Mark this one yourself.)",
      },
      {
        question: "Explain why an iron catalyst is used in the Haber process even though it cannot increase the yield of ammonia.",
        answer: "A catalyst lowers the activation energy for both the forward and the reverse reaction by the same amount, so it speeds both up equally and the position of equilibrium is unchanged. What it does change is how quickly equilibrium is reached, which matters enormously when the plant is running continuously. Without it the compromise temperature of 450°C would give an unworkably slow rate, and a higher temperature would lower the yield further. The catalyst therefore lets the plant use a cooler, higher-yielding temperature and still produce ammonia fast enough to be profitable. (Mark this one yourself.)",
      },
      {
        question: "A sealed tube containing brown NO₂ in equilibrium with colourless N₂O₄ turns paler when stood in iced water. Explain what this shows about the forward reaction.",
        answer: "Paler means less of the brown NO₂ and more of the colourless N₂O₄, so cooling has shifted the position of equilibrium towards the products of the forward reaction. Lowering the temperature removes energy from the system, and the equilibrium responds by favouring the direction that releases energy. The forward reaction must therefore be the exothermic one, with a negative energy change. Warming the tube again would drive it back and the brown colour would deepen. (Mark this one yourself.)",
      },
      {
        question: "Explain why adding more of one reactant to a reversible reaction at equilibrium increases the amount of product, in terms of the two rates.",
        answer: "At equilibrium the forward and reverse reactions are happening at exactly the same rate, so the amounts of everything stay constant. Adding more reactant raises the concentration on that side, so collisions between reactant particles become more frequent and the forward rate rises above the reverse rate. Product therefore builds up faster than it breaks down, until the rising product concentration has raised the reverse rate to match. A new equilibrium is then reached with more product present than before. (Mark this one yourself.)",
      },
    ],
    misconceptions: [
      {
        wrong: "At equilibrium the reaction has stopped.",
        right:
          "Both reactions continue at the same rate. That is exactly why it is called DYNAMIC equilibrium.",
      },
      {
        wrong: "At equilibrium there are equal amounts of reactants and products.",
        right:
          "The amounts are CONSTANT, not equal. One side is usually strongly favoured.",
      },
      {
        wrong: "A catalyst increases the yield of a reversible reaction.",
        right:
          "It only makes equilibrium arrive sooner. The position of equilibrium, and therefore the yield, is unchanged.",
      },
      {
        wrong: "Higher temperature always gives more product.",
        right:
          "It gives more product only if the forward reaction is endothermic. For an exothermic reaction such as the Haber process, higher temperature reduces the yield.",
      },
      {
        wrong: "The Haber process conditions are chosen to maximise yield.",
        right:
          "They are a compromise between yield, rate and cost. The conditions giving the highest yield would be far too slow to be useful.",
      },
    ],
  },

  // ─── YEAR 11 ──────────────────────────────────────────────────────────────

  "chemistry/organic-chemistry": {
    summary:
      "Organic chemistry is the chemistry of carbon compounds, and almost all of it starts with crude oil. This topic covers hydrocarbons, fractional distillation, cracking, combustion and the homologous series — and it rewards learning the patterns rather than memorising individual compounds, because the patterns are what the questions test.",
    keyFacts: [
      {
        heading: "Crude oil and alkanes",
        points: [
          "Crude oil is a mixture of HYDROCARBONS — compounds containing hydrogen and carbon ONLY.",
          "It formed over millions of years from the remains of ancient plankton, so it is a FINITE resource.",
          "ALKANES are saturated hydrocarbons: every carbon-carbon bond is a single bond.",
          "The general formula is CₙH₂ₙ₊₂. The first four are methane CH₄, ethane C₂H₆, propane C₃H₈, butane C₄H₁₀.",
          "A HOMOLOGOUS SERIES is a family of compounds with the same general formula and similar chemical properties.",
        ],
      },
      {
        heading: "Fractional distillation and properties",
        diagrams: [
          "fractional-distillation",
        ],
        points: [
          "Crude oil is separated into FRACTIONS by fractional distillation, using differences in boiling point.",
          "The column is hottest at the bottom and coolest at the top; short molecules rise highest.",
          "As molecules get LONGER: boiling point INCREASES, viscosity INCREASES, and flammability DECREASES.",
          "Shorter molecules are more useful — they burn more easily and are in higher demand.",
          "Fractions include petrol, diesel, kerosene, heavy fuel oil and bitumen.",
        ],
      },
      {
        heading: "Combustion",
        points: [
          "COMPLETE combustion: hydrocarbon + oxygen → carbon dioxide + water. It releases a lot of energy.",
          "Both the carbon and the hydrogen are OXIDISED.",
          "INCOMPLETE combustion, with insufficient oxygen, also produces carbon monoxide and soot (carbon particles).",
          "CARBON MONOXIDE is toxic, colourless and odourless — it binds to haemoglobin so blood carries less oxygen.",
          "Soot causes respiratory problems and blackens buildings.",
          "Burning fuels containing sulfur produces sulfur dioxide, which causes acid rain.",
        ],
      },
      {
        heading: "Cracking and alkenes",
        diagrams: [
          "alkane-alkene",
        ],
        points: [
          "CRACKING breaks long-chain hydrocarbons into shorter, more useful ones.",
          "It is done by CATALYTIC cracking, using a hot catalyst, or STEAM cracking, using very high temperatures.",
          "Cracking produces shorter alkanes AND alkenes.",
          "ALKENES are unsaturated: they contain a carbon-carbon DOUBLE bond. General formula CₙH₂ₙ.",
          "Alkenes are more reactive than alkanes and are used to make polymers.",
          "TEST for an alkene: it decolourises BROMINE WATER, turning it from orange to colourless. An alkane does not.",
        ],
      },
    ],
    flashcards: [
      { term: "Hydrocarbon", definition: "A compound containing hydrogen and carbon only." },
      { term: "Crude oil", definition: "A finite mixture of hydrocarbons formed from ancient plankton over millions of years." },
      { term: "Alkane", definition: "A saturated hydrocarbon with only single carbon-carbon bonds. General formula CnH2n+2." },
      { term: "Alkene", definition: "An unsaturated hydrocarbon containing a carbon-carbon double bond. General formula CnH2n." },
      { term: "Saturated", definition: "Containing only single carbon-carbon bonds." },
      { term: "Unsaturated", definition: "Containing at least one carbon-carbon double bond." },
      { term: "Homologous series", definition: "A family of compounds with the same general formula and similar chemical properties." },
      { term: "Fraction", definition: "A group of hydrocarbons with similar boiling points, separated from crude oil." },
      { term: "Cracking", definition: "Breaking long-chain hydrocarbons into shorter, more useful molecules." },
      { term: "Catalytic cracking", definition: "Cracking using a hot catalyst." },
      { term: "Steam cracking", definition: "Cracking by mixing with steam at very high temperature." },
      { term: "Complete combustion", definition: "Burning in plenty of oxygen, giving carbon dioxide and water." },
      { term: "Incomplete combustion", definition: "Burning in insufficient oxygen, also giving carbon monoxide and soot." },
      { term: "Carbon monoxide", definition: "A toxic, colourless, odourless gas that binds to haemoglobin, reducing oxygen transport." },
      { term: "Bromine water test", definition: "Orange bromine water is decolourised by an alkene but not by an alkane." },
      { term: "Viscosity", definition: "How thick and resistant to flow a liquid is; it increases with chain length." },
    ],
    examTips: [
      {
        tip: "Hydrocarbon means hydrogen and carbon ONLY",
        detail:
          "If a compound contains oxygen or anything else, it is not a hydrocarbon. Questions include distractors deliberately.",
      },
      {
        tip: "Learn the two general formulae",
        detail:
          "Alkanes CₙH₂ₙ₊₂, alkenes CₙH₂ₙ. They let you work out any member of either series without memorising them all.",
      },
      {
        tip: "Learn the property trends as a set of three",
        detail:
          "Longer chains: higher boiling point, higher viscosity, lower flammability. Questions usually ask for two of the three.",
      },
      {
        tip: "The bromine water test has a specific colour change",
        detail:
          "Orange to colourless with an alkene; stays orange with an alkane. Say both the starting and finishing colour.",
      },
      {
        tip: "Explain WHY cracking is done",
        detail:
          "Supply of long fractions exceeds demand, while short fractions are in short supply. Cracking converts the surplus into what people want.",
      },
      {
        tip: "Say why carbon monoxide is dangerous",
        detail:
          "It is toxic AND colourless and odourless, so it cannot be detected without an alarm. It binds to haemoglobin, reducing oxygen transport.",
      },
    ],
    workedExamples: [
      {
        question:
          "Write the balanced equation for the complete combustion of propane, C₃H₈.",
        steps: [
          "Complete combustion means plenty of oxygen, so the only products are carbon dioxide and water.",
          "Balance carbon first: 3 carbons in propane, so 3CO₂.",
          "Then hydrogen: 8 hydrogens, and each water holds 2, so 4H₂O.",
          "Now count the oxygens on the right: (3 × 2) + (4 × 1) = 10. Oxygen is diatomic, so that needs 5O₂.",
          "Balanced: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O.",
        ],
        answer: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O",
      },
    ],
    practice: [
      {
        question: "What is a compound containing only hydrogen and carbon called?",
        accept: ["hydrocarbon", "a hydrocarbon", "hydrocarbons"],
        answer:
          "A hydrocarbon. The word ONLY matters — a compound containing oxygen as well is not a hydrocarbon, however similar it looks.",
      },
      {
        question: "What is the general formula for an alkane?",
        accept: ["cnh2n+2", "cnh2n2", "c n h 2n+2", "cnh(2n+2)"],
        answer:
          "CₙH₂ₙ₊₂. So for 3 carbons you get C₃H₈, propane. Learning the formula beats memorising individual compounds.",
      },
      {
        question: "What is the general formula for an alkene?",
        accept: ["cnh2n", "c n h 2n"],
        answer:
          "CₙH₂ₙ. The double bond means two fewer hydrogens than the equivalent alkane, which is exactly what makes it unsaturated.",
      },
      {
        question: "What is the first alkane, with one carbon atom?",
        accept: ["methane", "ch4", "ch₄"],
        answer:
          "Methane, CH₄. Then ethane C₂H₆, propane C₃H₈ and butane C₄H₁₀ — the first four are worth memorising in order.",
      },
      {
        question: "What type of bond makes a hydrocarbon unsaturated?",
        accept: ["double bond", "carbon carbon double bond", "c=c", "double", "c=c double bond"],
        answer:
          "A carbon-carbon double bond. Alkenes have one, which is why they are more reactive than alkanes and are used to make polymers.",
      },
      {
        question: "What is the test for an alkene?",
        accept: ["bromine water", "bromine water test", "decolourises bromine water", "bromine"],
        answer:
          "Bromine water. An alkene turns it from orange to colourless; an alkane leaves it orange. Give both colours in the answer.",
      },
      {
        question: "What colour does bromine water turn when it reacts with an alkene?",
        accept: ["colourless", "colorless", "clear", "decolourised"],
        answer:
          "Colourless, from orange. Note that 'clear' is not the same word as 'colourless' — orange bromine water is already clear.",
      },
      {
        question: "What process breaks long hydrocarbons into shorter ones?",
        accept: ["cracking"],
        answer:
          "Cracking. It is done because supply of long molecules exceeds demand, while short ones are in short supply and are far more useful.",
      },
      {
        question: "Name one method of cracking.",
        accept: ["catalytic", "catalytic cracking", "steam", "steam cracking", "thermal"],
        answer:
          "Catalytic cracking, using a hot catalyst, or steam cracking, using very high temperatures. Both break the long chains apart.",
      },
      {
        question: "What two products does COMPLETE combustion of a hydrocarbon give?",
        accept: ["carbon dioxide and water", "water and carbon dioxide", "co2 and water", "co2 and h2o"],
        answer:
          "Carbon dioxide and water. Both the carbon and the hydrogen in the fuel are oxidised, which is why it releases so much energy.",
      },
      {
        question: "Which toxic gas is produced by INCOMPLETE combustion?",
        accept: ["carbon monoxide", "co"],
        answer:
          "Carbon monoxide. It is especially dangerous because it is colourless and odourless, so it cannot be detected without an alarm.",
      },
      {
        question: "Why is carbon monoxide so dangerous to humans?",
        accept: ["binds to haemoglobin", "haemoglobin", "reduces oxygen", "stops blood carrying oxygen", "binds to hemoglobin", "less oxygen carried"],
        answer:
          "It binds to haemoglobin in place of oxygen, so the blood carries far less oxygen to the tissues. It is also colourless and odourless.",
      },
      {
        question: "As hydrocarbon chains get LONGER, does boiling point increase or decrease?",
        accept: ["increase", "increases", "goes up", "higher", "rises"],
        answer:
          "It increases. Viscosity also increases, while flammability decreases — three trends that always move together.",
      },
      {
        question: "As hydrocarbon chains get longer, does flammability increase or decrease?",
        accept: ["decrease", "decreases", "goes down", "lower", "falls"],
        answer:
          "It decreases. Shorter molecules ignite far more easily, which is one reason they are in higher demand than the long fractions.",
      },
      {
        question: "Explain why crude oil is separated by fractional distillation. Write two or three sentences.",
        answer:
          "Crude oil is a mixture of many hydrocarbons of different chain lengths, which are not useful together but are very useful separately. Because chain length determines boiling point, the different hydrocarbons can be separated by heating the oil and letting each condense at a different height in a fractionating column. The column is hottest at the bottom and coolest at the top, so short molecules with low boiling points rise highest before condensing, while long ones condense near the bottom. Mark this one yourself: the link between chain length, boiling point and position in the column is the mark.",
      },
      {
        question: "Explain why cracking is carried out in the oil industry.",
        answer:
          "Fractional distillation produces far more of the long-chain fractions than anyone wants, while demand for short-chain fractions such as petrol greatly exceeds what the oil naturally contains. Cracking breaks the surplus long molecules into shorter ones, matching supply to demand and making the whole barrel more valuable. It also produces alkenes, which are unsaturated and reactive, and which are the starting materials for making polymers. Mark this one yourself: supply and demand plus the production of alkenes are the two things worth credit.",
      },
      {
        question: "Which general formula describes the saturated hydrocarbons?",
        choices: [
          "CnH2n+2",
          "CnH2n",
          "CnHn",
          "CnH2n-2",
        ],
        accept: [
          "CnH2n+2",
        ],
        answer: "Alkanes are saturated: CnH2n+2. Alkenes have a double bond and follow CnH2n.",
      },
      {
        question: "Which test distinguishes an alkene from an alkane?",
        choices: [
          "Bromine water goes from orange to colourless",
          "Limewater turns cloudy",
          "A lit splint pops",
          "Litmus turns red",
        ],
        accept: [
          "Bromine water goes from orange to colourless",
        ],
        answer: "The double bond in an alkene reacts with bromine, decolourising it. An alkane leaves bromine water orange.",
      },
      {
        question: "What is CRACKING?",
        choices: [
          "Breaking long hydrocarbons into shorter, more useful ones",
          "Joining small molecules into a polymer",
          "Burning hydrocarbons in air",
          "Separating crude oil by boiling point",
        ],
        accept: [
          "Breaking long hydrocarbons into shorter, more useful ones",
        ],
        answer: "Supply of long chains exceeds demand, while short chains like petrol are in high demand. Cracking also produces alkenes for making polymers.",
      },
      {
        question: "Crude oil is separated by fractional distillation because its parts have different:",
        choices: [
          "Boiling points",
          "Colours",
          "Densities only",
          "Melting points only",
        ],
        accept: [
          "Boiling points",
        ],
        answer: "Shorter chains have weaker intermolecular forces, so they boil at lower temperatures and rise higher up the column.",
      },
      {
        question: "Which functional group makes a molecule an alcohol?",
        choices: [
          "-OH",
          "-COOH",
          "C=C",
          "-NH2",
        ],
        accept: [
          "-OH",
        ],
        answer: "Alcohols end in -ol and contain -OH. Carboxylic acids contain -COOH and end in -oic acid.",
      },
      {
        question: "Work out the molecular formula of the alkane with six carbon atoms.",
        accept: [
          "C6H14",
          "c6h14",
        ],
        answer: "C₆H₁₄, hexane. The general formula CₙH₂ₙ₊₂ gives 2 × 6 plus 2 more hydrogens for six carbons.",
      },
      {
        question: "Work out the molecular formula of the alkene with five carbon atoms.",
        accept: [
          "C5H10",
          "c5h10",
        ],
        answer: "C₅H₁₀, pentene. Alkenes follow CₙH₂ₙ, so five carbons carry 5 × 2 hydrogens — two fewer than the matching alkane, because of the double bond.",
      },
      {
        question: "Calculate the relative formula mass of propane, C₃H₈. (Ar: C = 12, H = 1) Give the number only.",
        accept: [
          "44",
        ],
        answer: "44. Three carbon atoms give 3 × 12 = 36, and the eight hydrogens add another 8.",
      },
      {
        question: "Work out the number that goes in front of O₂ to balance: 2C₄H₁₀ + __O₂ → 8CO₂ + 10H₂O",
        accept: [
          "13",
        ],
        answer: "13. Count the oxygen on the product side: 16 + 10 = 26 atoms. Each O₂ molecule supplies two of them, so 13 molecules are needed. Doubling the butane first is what keeps the number whole.",
      },
      {
        question: "Cracking decane, C₁₀H₂₂, gives octane, C₈H₁₈, and one other molecule. Work out the formula of that molecule.",
        accept: [
          "C2H4",
          "c2h4",
        ],
        answer: "C₂H₄, ethene. No atoms are gained or lost, so what is left over is 10 − 8 carbons and 22 − 18 hydrogens. Ethene fits CₙH₂ₙ, so it is an alkene, which is exactly what cracking is wanted for.",
      },
      {
        question: "Work out the formula of the alcohol with three carbon atoms.",
        accept: [
          "C3H7OH",
          "c3h7oh",
          "C3H8O",
          "c3h8o",
        ],
        answer: "C₃H₇OH, propanol. Alcohols follow CₙH₂ₙ₊₁OH, so three carbons carry 2 × 3 plus one hydrogen along the chain, with the OH group on the end.",
      },
      {
        question: "Calculate the mass of carbon dioxide produced when 32 g of methane burns completely. CH₄ + 2O₂ → CO₂ + 2H₂O. (Mr: CH₄ = 16, CO₂ = 44)",
        accept: [
          "88",
        ],
        answer: "88 g. Moles of methane = 32 ÷ 16 = 2 mol. One CO₂ forms per CH₄, so 2 mol of carbon dioxide. Mass = 2 × 44 = 88 g — nearly three times the mass of fuel burnt, because the oxygen comes from the air.",
        higherOnly: true,
      },
      {
        question: "Calculate the volume of oxygen, in dm³, needed to burn 4.4 g of propane completely at room temperature and pressure. C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. (Mr: C₃H₈ = 44; one mole of gas occupies 24 dm³)",
        accept: [
          "12",
        ],
        answer: "12 dm³. Moles of propane = 4.4 ÷ 44 = 0.1 mol. The equation needs five O₂ per propane, so 0.1 × 5 = 0.5 mol of oxygen. Volume = 0.5 × 24 = 12 dm³.",
        higherOnly: true,
      },
      {
        question: "A hydrocarbon is 82.8% carbon and 17.2% hydrogen by mass, and its Mr is 58. Calculate its molecular formula. (Ar: C = 12, H = 1)",
        accept: [
          "C4H10",
          "c4h10",
        ],
        answer: "C₄H₁₀, butane. Dividing by the Ar values gives 82.8 ÷ 12 = 6.9 for carbon and 17.2 ÷ 1 = 17.2 for hydrogen. Dividing both by 6.9 gives 1 : 2.5, which doubles to a whole-number ratio of 2 : 5, so the empirical formula is C₂H₅ with a mass of 29. Since 58 ÷ 29 = 2, the molecular formula is twice that.",
        higherOnly: true,
      },
      {
        question: "Cracking C₁₂H₂₆ gives one molecule of C₈H₁₈ and two identical alkene molecules. Work out the formula of the alkene.",
        accept: [
          "C2H4",
          "c2h4",
          "ethene",
        ],
        answer: "C₂H₄, ethene. Carbon must balance: 12 − 8 = 4 carbons are left over, shared between two molecules, so 4 ÷ 2 = 2 each. Hydrogen the same way: 26 − 18 = 8, and 8 ÷ 2 = 4 each. C₂H₄ fits CₙH₂ₙ, confirming it is an alkene.",
      },
      {
        question: "2.4 g of carbon in a fuel burns incompletely to carbon monoxide. Calculate the mass of carbon monoxide produced. (Ar: C = 12, O = 16)",
        accept: [
          "5.6",
        ],
        answer: "5.6 g. Moles of carbon = 2.4 ÷ 12 = 0.2 mol, and each carbon atom gives one CO molecule. Mr(CO) = 12 + 16 = 28, so the mass is 0.2 × 28 = 5.6 g. Burning completely instead would have given 0.2 × 44 = 8.8 g of carbon dioxide and used twice the oxygen.",
        higherOnly: true,
      },
      {
        question: "Explain why the boiling point of a hydrocarbon rises as its chain gets longer.",
        answer: "Boiling separates whole molecules from one another, so it is the forces between molecules that have to be overcome, not the covalent bonds inside them. Longer chains have more points of contact with their neighbours, so the intermolecular forces holding them together are stronger. More energy is therefore needed to pull them apart, and the boiling point is higher. This is what lets fractional distillation sort crude oil by chain length in the first place. (Mark this one yourself.)",
      },
      {
        question: "Explain why incomplete combustion produces carbon monoxide and soot, and why a boiler with a blocked air intake is dangerous.",
        answer: "Complete combustion needs enough oxygen to convert every carbon atom all the way to carbon dioxide. When the oxygen supply is limited, some carbon atoms end up in carbon monoxide, with only one oxygen each, and some are released as unburnt carbon particles, which is soot. Carbon monoxide is toxic because it binds to haemoglobin in place of oxygen, so less oxygen reaches the tissues. It is colourless and has no smell, so a person is not warned, which is why a blocked intake on a boiler can be fatal. (Mark this one yourself.)",
      },
      {
        question: "Explain how bromine water distinguishes an alkene from an alkane, referring to what happens to the double bond.",
        answer: "Bromine water is orange, and an alkane leaves it orange because a saturated molecule has no spare bonding capacity to react with it. An alkene is unsaturated: the carbon-to-carbon double bond can open up, so one bromine atom adds to each of the two carbons in an addition reaction. The bromine is used up as it becomes part of a colourless product, so the orange colour disappears. Decolourising bromine water is therefore the standard test for a carbon-to-carbon double bond. (Mark this one yourself.)",
      },
      {
        question: "Explain why crude oil is described as a finite resource, and why the short-chain fractions are the most valuable.",
        answer: "Crude oil formed over millions of years from the remains of ancient marine organisms buried under sediment, and it is being used far faster than any is being made, so the supply will eventually run out. The short-chain fractions are runnier, more volatile and more flammable, which makes them good fuels for engines and heating, and demand for them is high. Distillation of crude oil gives comparatively little of them and a great deal of long-chain material that few people want. That mismatch between supply and demand is what makes the short chains valuable and makes cracking worth doing. (Mark this one yourself.)",
      },
    ],
    misconceptions: [
      {
        wrong: "Any compound containing carbon is a hydrocarbon.",
        right:
          "A hydrocarbon contains hydrogen and carbon ONLY. Ethanol contains oxygen too, so it is not one.",
      },
      {
        wrong: "Cracking is a way of separating crude oil.",
        right:
          "Fractional distillation separates it. Cracking then BREAKS molecules apart chemically, which is a different process entirely.",
      },
      {
        wrong: "Bromine water turns clear with an alkene.",
        right:
          "It turns COLOURLESS. Orange bromine water is already clear — clear and colourless are different words in chemistry.",
      },
      {
        wrong: "Incomplete combustion just means less energy is released.",
        right:
          "It also produces carbon monoxide and soot. The toxic products are usually what the question is about.",
      },
      {
        wrong: "Alkenes and alkanes react in the same way.",
        right:
          "Alkenes are unsaturated and far more reactive because of the double bond, which is why they decolourise bromine water and alkanes do not.",
      },
    ],
  },

  "chemistry/polymers": {
    summary:
      "Polymers are everywhere, and they are made by joining thousands of small molecules into one enormous chain. This topic covers addition polymerisation from alkenes, condensation polymerisation, the natural polymers in living things, and why plastics that never break down are both so useful and such a problem.",
    keyFacts: [
      {
        heading: "Addition polymerisation",
        diagrams: [
          "addition-polymerisation",
        ],
        points: [
          "Many small MONOMERS join to make one very large POLYMER molecule.",
          "The monomers must be ALKENES — they need a carbon-carbon double bond.",
          "The double bond OPENS UP and forms bonds to neighbouring monomers.",
          "The polymer is the ONLY product — nothing else is made.",
          "Ethene → poly(ethene); propene → poly(propene).",
          "The repeating unit has the same atoms as the monomer, drawn with single bonds and extended bonds either side.",
        ],
      },
      {
        heading: "Condensation polymerisation",
        points: [
          "Condensation polymerisation involves monomers with TWO functional groups, one at each end.",
          "Each time a bond forms, a small molecule — usually WATER — is lost.",
          "So there are TWO products: the polymer and the small molecule.",
          "That is the key difference from addition polymerisation, which produces only the polymer.",
          "Polyesters are made this way, from a dicarboxylic acid and a diol.",
        ],
      },
      {
        heading: "Natural polymers",
        points: [
          "DNA is a polymer of nucleotides, arranged as two strands in a double helix.",
          "PROTEINS are polymers of amino acids.",
          "STARCH and CELLULOSE are polymers of glucose — the same monomer joined differently.",
          "These are all natural condensation polymers, made in living organisms.",
          "That the same monomer can build both digestible starch and indigestible cellulose is a good illustration of structure determining properties.",
        ],
      },
      {
        heading: "Properties and problems",
        points: [
          "Polymers are solid at room temperature because the molecules are very large, so intermolecular forces are strong.",
          "THERMOSOFTENING polymers melt when heated, because the chains are separate and only weakly attracted.",
          "THERMOSETTING polymers do not melt, because CROSS-LINKS chemically bond the chains together.",
          "Most plastics are not biodegradable, so they persist in landfill and in the oceans for centuries.",
          "Options: recycling, which saves energy and raw material but requires sorting; or incineration, which recovers energy but releases carbon dioxide.",
        ],
      },
    ],
    flashcards: [
      { term: "Polymer", definition: "A very large molecule made by joining many small monomers together." },
      { term: "Monomer", definition: "The small molecule that joins with others to form a polymer." },
      { term: "Addition polymerisation", definition: "Joining alkene monomers by opening their double bonds; the polymer is the only product." },
      { term: "Condensation polymerisation", definition: "Joining monomers with two functional groups, losing a small molecule such as water each time." },
      { term: "Repeating unit", definition: "The section of a polymer that repeats along the chain." },
      { term: "Poly(ethene)", definition: "The addition polymer made from ethene monomers." },
      { term: "Polyester", definition: "A condensation polymer made from a dicarboxylic acid and a diol." },
      { term: "Thermosoftening polymer", definition: "A polymer with separate chains that melts when heated and can be reshaped." },
      { term: "Thermosetting polymer", definition: "A polymer with cross-links between chains, which does not melt when heated." },
      { term: "Cross-link", definition: "A chemical bond joining polymer chains, preventing them from moving apart." },
      { term: "Biodegradable", definition: "Able to be broken down by microorganisms." },
      { term: "DNA", definition: "A natural polymer of nucleotides, forming two strands in a double helix." },
      { term: "Protein", definition: "A natural polymer of amino acids." },
      { term: "Cellulose", definition: "A natural polymer of glucose that forms plant cell walls." },
      { term: "Nucleotide", definition: "The monomer unit from which DNA is built." },
    ],
    examTips: [
      {
        tip: "Addition polymerisation makes ONE product",
        detail:
          "Only the polymer. Condensation makes TWO — the polymer and a small molecule, usually water. That is the whole distinction.",
      },
      {
        tip: "The monomer must be an ALKENE for addition",
        detail:
          "It needs the double bond to open up. An alkane cannot polymerise by addition because there is nothing to open.",
      },
      {
        tip: "Draw the repeating unit with extended bonds",
        detail:
          "Lines extending out of the brackets on both sides, and single bonds inside where the double bond used to be. The 'n' goes outside the bracket.",
      },
      {
        tip: "Explain thermosetting through CROSS-LINKS",
        detail:
          "Chemical bonds between chains stop them separating, so heating does not melt it. Thermosoftening chains are only weakly attracted.",
      },
      {
        tip: "Give both sides on plastic disposal",
        detail:
          "Recycling saves raw material and energy but needs sorting and is not always economic; incineration recovers energy but releases carbon dioxide.",
      },
      {
        tip: "Non-biodegradable is a property, not just a problem",
        detail:
          "It is exactly why plastics are so useful — they do not rot. The problem is what happens when we no longer want them.",
      },
    ],
    workedExamples: [
      {
        question:
          "Ethene, C₂H₄, polymerises to form poly(ethene). Describe the repeat unit and explain what happens to the double bond.",
        steps: [
          "Ethene is an alkene, so it contains a C=C double bond.",
          "In addition polymerisation that double bond OPENS. One of the two bonds breaks, leaving each carbon with a spare bond.",
          "Those spare bonds join to the neighbouring monomers, so molecules link end to end into one long chain.",
          "The repeat unit is −[CH₂−CH₂]−, written with an n outside the bracket to show it repeats many times. Note the atoms are unchanged: only the bonding differs, which is why nothing else is produced.",
        ],
        answer: "Repeat unit −[CH₂−CH₂]−n; the C=C double bond opens to single bonds joining the chain",
      },
    ],
    practice: [
      {
        question: "What is the small molecule that joins with others to make a polymer called?",
        accept: ["monomer", "a monomer", "monomers"],
        answer:
          "A monomer. Thousands of them join to make one polymer molecule, which is why polymers are so large.",
      },
      {
        question: "What type of hydrocarbon is needed as a monomer for addition polymerisation?",
        accept: ["alkene", "alkenes", "an alkene", "unsaturated"],
        answer:
          "An alkene. It must have a carbon-carbon double bond that can open up to form bonds with its neighbours.",
      },
      {
        question: "How many products does addition polymerisation make? Give the number only.",
        accept: ["1", "one"],
        answer:
          "One — just the polymer. Condensation polymerisation makes two, because a small molecule is lost each time a bond forms.",
      },
      {
        question: "What small molecule is usually lost during condensation polymerisation?",
        accept: ["water", "h2o", "h₂o"],
        answer:
          "Water. Losing a small molecule at every join is exactly what distinguishes condensation from addition polymerisation.",
      },
      {
        question: "What polymer is made from ethene?",
        accept: ["poly(ethene)", "polyethene", "poly ethene", "polythene", "polyethylene"],
        answer:
          "Poly(ethene). The naming rule is simple: put 'poly' in front of the monomer's name, with brackets around it.",
      },
      {
        question: "What type of polymer melts when heated?",
        accept: ["thermosoftening", "thermosoftening polymer", "thermoplastic"],
        answer:
          "A thermosoftening polymer. Its chains are separate and only weakly attracted, so heating lets them slide apart and it can be reshaped.",
      },
      {
        question: "What type of polymer does NOT melt when heated?",
        accept: ["thermosetting", "thermosetting polymer", "thermoset"],
        answer:
          "A thermosetting polymer. Cross-links chemically bond the chains together, so they cannot separate however hot it gets.",
      },
      {
        question: "What are the chemical bonds joining polymer chains together called?",
        accept: ["cross links", "cross-links", "crosslinks", "cross link"],
        answer:
          "Cross-links. They are what make a thermosetting polymer rigid and heat-resistant, and also what make it impossible to remould.",
      },
      {
        question: "What is the monomer of a protein?",
        accept: ["amino acid", "amino acids", "aminoacid"],
        answer:
          "Amino acids. Proteins are natural condensation polymers, made in living cells by joining amino acids and losing water.",
      },
      {
        question: "What is the monomer of DNA?",
        accept: ["nucleotide", "nucleotides", "a nucleotide"],
        answer:
          "Nucleotides. DNA is a natural polymer, arranged as two strands wound into a double helix.",
      },
      {
        question: "Which natural polymer is made of glucose and forms plant cell walls?",
        accept: ["cellulose"],
        answer:
          "Cellulose. Starch is also made of glucose but joined differently, which is why humans can digest one and not the other.",
      },
      {
        question: "Why are polymers solid at room temperature?",
        accept: ["strong intermolecular forces", "large molecules", "big molecules", "strong forces between molecules", "molecules are very large"],
        answer:
          "Their molecules are extremely large, so the intermolecular forces between them are strong and need a lot of energy to overcome.",
      },
      {
        question: "What word describes a material that microorganisms can break down?",
        accept: ["biodegradable"],
        answer:
          "Biodegradable. Most plastics are not, which is exactly why they persist in landfill and in the oceans for centuries.",
      },
      {
        question: "Give one advantage of recycling plastics.",
        accept: ["saves raw materials", "saves energy", "less landfill", "saves crude oil", "less waste", "conserves resources", "reduces pollution"],
        answer:
          "It saves raw materials and crude oil, uses less energy than making new plastic, and reduces the amount going to landfill.",
      },
      {
        question: "Explain the difference between addition and condensation polymerisation. Write three sentences.",
        answer:
          "In addition polymerisation the monomers are alkenes, and their carbon-carbon double bonds open up so the monomers join directly to one another — the polymer is the only product. In condensation polymerisation each monomer has two functional groups, and every time two monomers join a small molecule, usually water, is lost. So condensation produces two products, the polymer and the small molecule, whereas addition produces only one. Mark this one yourself: the number of products, and the need for a double bond in addition, are the two key differences.",
      },
      {
        question: "Discuss the problems caused by plastics not being biodegradable, and what can be done.",
        answer:
          "Because microorganisms cannot break them down, plastics remain in landfill for centuries and accumulate in rivers and oceans, where they harm wildlife that eats or becomes entangled in them. Landfill also uses land and the plastic occupies it indefinitely. Recycling reduces the problem by saving crude oil and energy, though different polymers must be sorted first, which is labour-intensive and not always economic. Incineration recovers useful energy and reduces volume, but releases carbon dioxide and can release toxic gases if not carefully controlled. Overall a combination of reducing use, recycling where practical, and developing genuinely biodegradable alternatives is more realistic than any single solution. Mark this one yourself: full marks need the problem, at least two responses with their drawbacks, and a judgement.",
      },
      {
        question: "What is a polymer?",
        choices: [
          "A long molecule made by joining many small monomers",
          "A single small molecule",
          "A mixture of two metals",
          "A type of ionic compound",
        ],
        accept: [
          "A long molecule made by joining many small monomers",
        ],
        answer: "Poly means many, mono means one. Poly(ethene) is thousands of ethene molecules joined into a chain.",
      },
      {
        question: "In ADDITION polymerisation, what else is produced besides the polymer?",
        choices: [
          "Nothing",
          "Water",
          "Carbon dioxide",
          "Hydrogen",
        ],
        accept: [
          "Nothing",
        ],
        answer: "Addition polymerisation has 100% atom economy — the only product is the polymer. Condensation polymerisation also releases a small molecule, usually water.",
      },
      {
        question: "Which type of monomer is needed for addition polymerisation?",
        choices: [
          "One containing a C=C double bond",
          "One containing only single bonds",
          "One containing a metal",
          "One containing an -OH group only",
        ],
        accept: [
          "One containing a C=C double bond",
        ],
        answer: "The double bond opens up to form links with the next monomer, which is why alkenes are the feedstock.",
      },
      {
        question: "Why are many polymers a problem for the environment?",
        choices: [
          "They are not biodegradable, so they persist for a very long time",
          "They dissolve in rainwater",
          "They react with air to form acid",
          "They are radioactive",
        ],
        accept: [
          "They are not biodegradable, so they persist for a very long time",
        ],
        answer: "Microorganisms cannot break most of them down, so they accumulate in landfill and the oceans. Biodegradable and recyclable alternatives are being developed.",
      },
      {
        question: "Which polymer property makes thermosetting plastics different from thermosoftening ones?",
        choices: [
          "Cross-links between chains mean they do not melt when heated",
          "They have shorter chains",
          "They contain no carbon",
          "They dissolve in water",
        ],
        accept: [
          "Cross-links between chains mean they do not melt when heated",
        ],
        answer: "Thermosoftening polymers have separate tangled chains held by weak forces, so they melt and can be remoulded.",
      },
      {
        question: "Work out the formula of the repeating unit in poly(propene).",
        accept: [
          "C3H6",
          "c3h6",
        ],
        answer: "C₃H₆. Propene is C₃H₆, and addition polymerisation keeps every atom, so the repeat unit formula = the monomer formula with the double bond opened out into two single bonds.",
      },
      {
        question: "Calculate the relative formula mass of the repeating unit of poly(chloroethene), C₂H₃Cl. (Ar: C = 12, H = 1, Cl = 35.5)",
        accept: [
          "62.5",
        ],
        answer: "62.5. The two carbons give 24 and the three hydrogens give 3, then the chlorine adds 35.5: 24 + 3 + 35.5. One chlorine dominates the mass of the unit.",
      },
      {
        question: "A poly(ethene) molecule has a relative molecular mass of 42,000 and a repeating unit of Mr 28. Calculate the number of repeating units in the chain.",
        accept: [
          "1500",
          "1,500",
        ],
        answer: "1500. Divide the mass of the whole chain by the mass of one unit: 42,000 ÷ 28. Chains of this length are why poly(ethene) is a solid while ethene is a gas.",
      },
      {
        question: "Calculate how many water molecules are released when 50 monomer units join end to end to form one condensation polymer chain.",
        accept: [
          "49",
        ],
        answer: "49. Every new link between two units expels one water molecule, and a chain of 50 units contains 50 − 1 = 49 links. There is always one fewer link than there are units.",
      },
      {
        question: "Work out whether a saucepan handle should be made from a thermosoftening or a thermosetting polymer.",
        accept: [
          "thermosetting",
          "thermoset",
          "a thermosetting polymer",
        ],
        answer: "Thermosetting. Its chains are joined by cross-links, which are strong covalent bonds, so heating cannot let the chains slide past each other = the handle keeps its shape next to a hot pan rather than softening.",
      },
      {
        question: "Calculate the percentage by mass of chlorine in poly(chloroethene), repeat unit C₂H₃Cl with Mr 62.5, to one decimal place. (Ar: Cl = 35.5)",
        accept: [
          "56.8",
        ],
        answer: "56.8%. Chlorine is 35.5 of the repeat unit's 62.5, and 35.5 ÷ 62.5 is 0.568, so 56.8%. More than half the mass of PVC is chlorine, which is why burning it releases so much hydrogen chloride.",
      },
      {
        question: "Calculate the mass of poly(ethene) obtained from 1.4 tonnes of ethene at a yield of 90%.",
        accept: [
          "1.26",
        ],
        answer: "1.26 tonnes. Addition polymerisation keeps every atom, so the theoretical mass of polymer equals the mass of monomer, 1.4 tonnes, and the atom economy = 100%. At 90% yield the mass actually obtained is 0.90 × 1.4 = 1.26 tonnes.",
      },
      {
        question: "A polyester chain forms from 200 monomers of Mr 166 and 200 of Mr 62, losing one water molecule at every link. Calculate the relative molecular mass of the chain. (Mr: H₂O = 18)",
        accept: [
          "38418",
          "38,418",
        ],
        answer: "38,418. The monomers together weigh (200 × 166) + (200 × 62) = 33,200 + 12,400 = 45,600. Four hundred units joined in a chain make 400 − 1 = 399 links, so 399 × 18 = 7182 of water is lost. The chain is therefore 45,600 − 7182 = 38,418.",
      },
      {
        question: "Glycine is an amino acid, H₂NCH₂COOH. Calculate the percentage by mass of nitrogen in it, to one decimal place. (Ar: H = 1, C = 12, N = 14, O = 16)",
        accept: [
          "18.7",
        ],
        answer: "18.7%. Counting atoms gives C₂H₅NO₂, so Mr = (2 × 12) + 5 + 14 + (2 × 16) = 24 + 5 + 14 + 32 = 75. The nitrogen share is (14 ÷ 75) × 100 = 18.67%, which rounds to 18.7%.",
      },
      {
        question: "A 250 g sample of waste plastic is 60% poly(ethene) and the rest PVC. Calculate the mass of chlorine in the sample. (PVC repeat unit C₂H₃Cl, Mr 62.5, Ar: Cl = 35.5)",
        accept: [
          "56.8",
        ],
        answer: "56.8 g. The PVC makes up 100 − 60 = 40% of the sample, so its mass is 0.40 × 250 = 100 g. Chlorine is 35.5 ÷ 62.5 = 0.568 of PVC by mass, so the chlorine present is 0.568 × 100 = 56.8 g — all of which would become hydrogen chloride if it were burnt.",
      },
      {
        question: "Recycling one tonne of poly(ethene) saves 1.8 tonnes of crude oil. A town collects 45 tonnes of waste plastic, of which 80% is poly(ethene), and a tenth of that is rejected as too contaminated. Calculate the mass of crude oil saved.",
        accept: [
          "58.32",
        ],
        answer: "58.32 tonnes. The poly(ethene) collected is 0.80 × 45 = 36 tonnes. Rejecting a tenth leaves 0.90 × 36 = 32.4 tonnes actually recycled. At 1.8 tonnes of oil saved per tonne, that is 32.4 × 1.8 = 58.32 tonnes. Contamination costs this scheme over six tonnes of oil.",
      },
      {
        question: "Explain why a thermosoftening polymer can be melted and remoulded while a thermosetting one cannot, in terms of what holds the chains together.",
        answer: "In a thermosoftening polymer the separate chains are held near each other only by weak intermolecular forces. Heating gives the chains enough energy to overcome those weak forces and slide past one another, so the material softens and can be reshaped, then sets again on cooling. A thermosetting polymer has covalent cross-links joining the chains into one rigid three-dimensional network. Those bonds are far stronger, so heating cannot free the chains, and the material keeps its shape until the temperature is high enough to char it. (Mark this one yourself.)",
      },
      {
        question: "Explain why poly(ethene) is not biodegradable while starch, which is also a polymer, is.",
        answer: "Biodegradation depends on microorganisms having enzymes that fit the bonds in the polymer and can break them. Starch is built from glucose units joined by links that organisms have evolved to digest, because starch is a food, so the enzymes are widespread. Poly(ethene) is a long carbon chain with only strong, unreactive C–C and C–H bonds and no such links anywhere along it. No common enzyme recognises that structure, so the polymer stays intact in landfill and in the sea for a very long time. (Mark this one yourself.)",
      },
      {
        question: "Explain why addition polymerisation has an atom economy of 100% while condensation polymerisation does not.",
        answer: "In addition polymerisation the monomers' double bonds simply open up and join, so the only product is the polymer and every atom from the monomers ends up in it. Atom economy is the mass of the wanted product over the mass of all products, which comes to 100% when there is nothing else formed. Condensation polymerisation joins two functional groups and expels a small molecule, usually water, at every link. That water is a second product carrying away some of the starting mass, so the atom economy is below 100%, though it is still high because water is light. (Mark this one yourself.)",
      },
      {
        question: "Explain why burning waste plastic to generate electricity is not a straightforward answer to plastic pollution.",
        answer: "Burning does recover some energy and reduces the volume going to landfill, so it is not worthless. But plastics are made from crude oil, so burning them releases carbon dioxide that adds to climate change, and it destroys material that could have been recycled into new products. Plastics containing chlorine, such as PVC, produce hydrogen chloride and other toxic gases unless the flue gases are carefully cleaned. Incinerators are also expensive to build and run, and having one creates a demand for waste plastic that can discourage reduction and reuse. (Mark this one yourself.)",
      },
    ],
    misconceptions: [
      {
        wrong: "Addition and condensation polymerisation both lose a water molecule.",
        right:
          "Only condensation does. Addition polymerisation produces the polymer and nothing else at all.",
      },
      {
        wrong: "Any monomer can undergo addition polymerisation.",
        right:
          "It must contain a carbon-carbon double bond — so it must be an alkene. Without a double bond there is nothing to open up.",
      },
      {
        wrong: "Thermosetting polymers melt if you heat them enough.",
        right:
          "The cross-links are chemical bonds between chains. Heating strongly enough will char or decompose them, but they will not melt and reset.",
      },
      {
        wrong: "Polymers are man-made materials.",
        right:
          "DNA, proteins, starch and cellulose are all natural polymers. Plastics are simply the synthetic ones.",
      },
      {
        wrong: "Recycling plastic is always the best option.",
        right:
          "It requires sorting by polymer type, which is costly, and repeated recycling degrades quality. It is usually best, but not automatically.",
      },
    ],
  },

  "chemistry/chemical-analysis": {
    summary:
      "Chemical analysis is about identifying what something actually is. This topic covers purity and formulations, the tests for common gases and ions, flame tests, and the instrumental methods that have largely replaced the wet chemistry — along with why the old tests are still worth knowing.",
    keyFacts: [
      {
        heading: "Purity and formulations",
        points: [
          "A PURE substance in chemistry is a single element or compound.",
          "Pure substances melt and boil at a SHARP, specific temperature; mixtures melt over a RANGE.",
          "Comparing a measured melting point with the known value tests both identity and purity.",
          "A FORMULATION is a mixture designed as a useful product, with each component in a measured quantity.",
          "Examples: fuels, cleaning agents, paints, medicines, alloys and fertilisers.",
        ],
      },
      {
        heading: "Tests for gases",
        diagrams: [
          "gas-tests",
        ],
        points: [
          "HYDROGEN: a lighted splint gives a squeaky pop.",
          "OXYGEN: a glowing splint RELIGHTS.",
          "CARBON DIOXIDE: limewater turns milky or cloudy.",
          "CHLORINE: damp litmus paper is BLEACHED white.",
          "State the observation as well as naming the gas — the observation usually carries the mark.",
        ],
      },
      {
        heading: "Flame tests and metal hydroxides",
        points: [
          "FLAME TESTS identify metal ions by colour: lithium crimson, sodium yellow, potassium lilac, calcium orange-red, copper green.",
          "If a sample contains a mixture of ions, one colour can mask another — a real limitation.",
          "Adding sodium hydroxide solution forms metal hydroxide PRECIPITATES with distinctive colours.",
          "Calcium, magnesium and aluminium all give WHITE precipitates; aluminium's redissolves in excess sodium hydroxide.",
          "Copper(II) gives a blue precipitate, iron(II) green, and iron(III) brown.",
        ],
      },
      {
        heading: "Tests for anions, and instrumental methods",
        points: [
          "CARBONATES: add dilute acid — it fizzes, and the gas turns limewater milky.",
          "HALIDES: add nitric acid then silver nitrate. Chloride gives white, bromide cream, iodide yellow.",
          "SULFATES: add hydrochloric acid then barium chloride — a white precipitate forms.",
          "INSTRUMENTAL methods such as flame emission spectroscopy are faster, more accurate and more sensitive.",
          "They can work on tiny samples and identify several elements at once.",
          "Their disadvantages: expensive equipment, specialist training needed, and results must be compared against known data.",
        ],
      },
    ],
    flashcards: [
      { term: "Pure substance", definition: "A single element or compound, which melts and boils at a sharp specific temperature." },
      { term: "Formulation", definition: "A mixture designed as a useful product, with each component present in a measured quantity." },
      { term: "Flame test", definition: "Identifying a metal ion by the colour it produces in a flame." },
      { term: "Precipitate", definition: "An insoluble solid formed when two solutions are mixed." },
      { term: "Limewater test", definition: "The test for carbon dioxide: limewater turns milky." },
      { term: "Glowing splint test", definition: "The test for oxygen: a glowing splint relights." },
      { term: "Squeaky pop test", definition: "The test for hydrogen: a lighted splint gives a squeaky pop." },
      { term: "Silver nitrate test", definition: "The test for halides: white for chloride, cream for bromide, yellow for iodide." },
      { term: "Barium chloride test", definition: "The test for sulfate ions: a white precipitate forms." },
      { term: "Instrumental method", definition: "An analytical technique using a machine, which is faster, more accurate and more sensitive." },
      { term: "Flame emission spectroscopy", definition: "An instrumental method identifying metal ions from the light they emit." },
      { term: "Sensitivity", definition: "The ability of a method to detect very small quantities." },
      { term: "Sodium hydroxide test", definition: "Adding NaOH solution to form coloured metal hydroxide precipitates." },
      { term: "Halide", definition: "A compound containing chloride, bromide or iodide ions." },
    ],
    examTips: [
      {
        tip: "Give the observation, not just the gas name",
        detail:
          "'Limewater turns milky' scores; 'it is carbon dioxide' alone often does not. State what you would SEE.",
      },
      {
        tip: "Lighted splint for hydrogen, GLOWING splint for oxygen",
        detail:
          "The two are constantly swapped. Squeaky pop needs a flame; relighting needs a splint that has just gone out.",
      },
      {
        tip: "Learn the three halide colours in order",
        detail:
          "Chloride white, bromide cream, iodide yellow — the colours deepen as you go down group 7. That ordering makes them easier to recall.",
      },
      {
        tip: "Say what acid is added BEFORE the test reagent",
        detail:
          "Nitric acid before silver nitrate; hydrochloric acid before barium chloride. The acid removes carbonates that would give a false positive.",
      },
      {
        tip: "Give both advantages AND disadvantages of instrumental methods",
        detail:
          "Faster, more accurate, more sensitive, works on tiny samples — against expensive equipment and the need for trained operators.",
      },
      {
        tip: "Know the limitation of flame tests",
        detail:
          "In a mixture, one strong colour can mask another. That is a standard reason for preferring an instrumental method.",
      },
    ],
    workedExamples: [
      {
        question:
          "A white solid dissolves in water. A flame test gives a lilac flame. Adding dilute nitric acid followed by silver nitrate solution gives a cream precipitate. Identify the compound.",
        steps: [
          "Take the flame test first: lilac means potassium. (Yellow is sodium, orange-red is calcium, green is copper.)",
          "The silver nitrate test identifies halides by the colour of the precipitate: white is chloride, cream is bromide, yellow is iodide.",
          "Cream, so the negative ion is bromide, Br⁻.",
          "Putting the two halves together: potassium bromide, KBr. The nitric acid is added first to remove carbonate ions, which would otherwise also give a precipitate and a false result.",
        ],
        answer: "Potassium bromide, KBr",
      },
    ],
    practice: [
      {
        question: "What is the test for hydrogen gas?",
        accept: ["squeaky pop", "lighted splint", "burning splint", "lit splint", "pop"],
        answer:
          "A lighted splint gives a squeaky pop. Do not confuse this with the GLOWING splint used for oxygen.",
      },
      {
        question: "What is the test for oxygen gas?",
        accept: ["glowing splint", "glowing splint relights", "relights a glowing splint", "relight glowing splint"],
        answer:
          "A glowing splint relights. The splint must be glowing rather than burning — that distinction is the whole test.",
      },
      {
        question: "What is the test for carbon dioxide?",
        accept: ["limewater", "limewater turns milky", "limewater turns cloudy", "lime water"],
        answer:
          "Bubble it through limewater, which turns milky or cloudy. State the colour change, because that is what carries the mark.",
      },
      {
        question: "What is the test for chlorine gas?",
        accept: ["damp litmus", "bleaches litmus", "damp litmus paper", "litmus bleached", "bleaches damp litmus paper"],
        answer:
          "Damp litmus paper is bleached white. Chlorine is a strong bleaching agent, which is why it is used to treat water.",
      },
      {
        question: "What flame colour does a sodium ion produce?",
        accept: ["yellow"],
        answer:
          "Yellow. Lithium is crimson, potassium lilac, calcium orange-red and copper green — five colours worth memorising.",
      },
      {
        question: "What flame colour does a potassium ion produce?",
        accept: ["lilac", "purple", "light purple"],
        answer:
          "Lilac. It is easily masked by sodium's strong yellow if both are present, which is a real limitation of flame tests.",
      },
      {
        question: "What flame colour does a copper ion produce?",
        accept: ["green", "blue-green", "blue green"],
        answer:
          "Green. Copper compounds are also often blue in solution, which is another useful identification clue.",
      },
      {
        question: "What colour precipitate does copper(II) form with sodium hydroxide?",
        accept: ["blue"],
        answer:
          "Blue. Iron(II) gives green and iron(III) gives brown, while calcium, magnesium and aluminium all give white.",
      },
      {
        question: "What colour precipitate does iron(III) form with sodium hydroxide?",
        accept: ["brown", "orange brown", "orange-brown"],
        answer:
          "Brown. Iron(II) gives green — the difference in colour is how the two oxidation states are told apart.",
      },
      {
        question: "What reagent tests for halide ions?",
        accept: ["silver nitrate", "silver nitrate solution", "agno3"],
        answer:
          "Silver nitrate, after adding dilute nitric acid first. Chloride gives white, bromide cream and iodide yellow.",
      },
      {
        question: "What colour precipitate does a chloride ion give with silver nitrate?",
        accept: ["white"],
        answer:
          "White. Bromide gives cream and iodide gives yellow — the colours deepen going down group 7.",
      },
      {
        question: "What reagent tests for sulfate ions?",
        accept: ["barium chloride", "barium chloride solution", "bacl2"],
        answer:
          "Barium chloride, after adding dilute hydrochloric acid. A white precipitate of barium sulfate confirms a sulfate is present.",
      },
      {
        question: "Give one advantage of instrumental methods over chemical tests.",
        accept: ["faster", "more accurate", "more sensitive", "small samples", "quicker", "accurate", "sensitive", "tiny samples", "several at once"],
        answer:
          "They are faster, more accurate and far more sensitive, and can work on very small samples — sometimes identifying several elements at once.",
      },
      {
        question: "Give one disadvantage of instrumental methods.",
        accept: ["expensive", "cost", "training", "specialist training", "equipment cost", "need trained operators", "needs known data"],
        answer:
          "The equipment is expensive, operators need specialist training, and the results must be compared against reference data to mean anything.",
      },
      {
        question: "Explain why a mixture melts over a range of temperatures but a pure substance does not. Write two or three sentences.",
        answer:
          "In a pure substance every particle is identical, so the forces between them are all the same strength and they all require the same energy to overcome — the whole sample therefore melts at one specific temperature. A mixture contains different substances with different intermolecular forces, so some parts melt at lower temperatures than others. The result is a range rather than a sharp point, which is exactly why melting point is used to test purity. Mark this one yourself: identical particles and identical forces is the key idea.",
      },
      {
        question: "Describe how you would show that an unknown white solid contains chloride ions.",
        answer:
          "Dissolve a small sample of the solid in distilled water to make a solution. Add a few drops of dilute nitric acid first — this removes carbonate ions, which would otherwise form a precipitate and give a false positive. Then add silver nitrate solution. A white precipitate confirms chloride is present; a cream precipitate would indicate bromide and a yellow one iodide, so the exact colour matters. Mark this one yourself: adding the nitric acid FIRST, and the reason for it, is what separates a full-mark answer from a partial one.",
      },
      {
        question: "Which gas relights a glowing splint?",
        choices: [
          "Oxygen",
          "Hydrogen",
          "Carbon dioxide",
          "Chlorine",
        ],
        accept: [
          "Oxygen",
        ],
        answer: "Oxygen relights a glowing splint. Hydrogen gives a squeaky pop with a lit splint, and carbon dioxide turns limewater cloudy.",
      },
      {
        question: "Which test identifies carbon dioxide?",
        choices: [
          "Limewater turns cloudy",
          "A squeaky pop",
          "Damp litmus is bleached",
          "A lilac flame",
        ],
        accept: [
          "Limewater turns cloudy",
        ],
        answer: "Carbon dioxide reacts with limewater to form insoluble calcium carbonate, which is the cloudiness you see.",
      },
      {
        question: "A lilac flame test indicates which metal ion?",
        choices: [
          "Potassium",
          "Sodium",
          "Copper",
          "Calcium",
        ],
        accept: [
          "Potassium",
        ],
        answer: "Lilac is potassium, yellow is sodium, green is copper, orange-red is calcium. Sodium's strong yellow can mask other colours.",
      },
      {
        question: "What is a PURE substance in chemistry?",
        choices: [
          "A single element or compound",
          "Anything natural",
          "Anything safe to drink",
          "A mixture with no colour",
        ],
        accept: [
          "A single element or compound",
        ],
        answer: "The everyday meaning differs: pure orange juice is a mixture. A pure substance melts and boils at a fixed temperature.",
      },
      {
        question: "An advantage of instrumental methods over chemical tests is that they are:",
        choices: [
          "More accurate, more sensitive and faster",
          "Cheaper to buy",
          "Easier to do by hand",
          "Never in need of calibration",
        ],
        accept: [
          "More accurate, more sensitive and faster",
        ],
        answer: "They detect tiny amounts and give reliable results quickly, which is why they are used in forensics and medicine despite the cost.",
      },
      {
        question: "Acidified silver nitrate gives a white precipitate with a solution. Work out which halide ion is present.",
        accept: [
          "chloride",
          "cl-",
          "chloride ion",
        ],
        answer: "Chloride, Cl⁻. The three silver halides differ by colour — chloride white, bromide cream, iodide yellow — so white = chloride.",
      },
      {
        question: "Sodium hydroxide solution is added to an unknown solution and a green precipitate forms. Work out which metal ion is present.",
        accept: [
          "iron(ii)",
          "iron 2",
          "fe2+",
          "iron(ii) ion",
          "iron II",
        ],
        answer: "Iron(II), Fe²⁺. The hydroxide ions combine with it to give an insoluble green solid: Fe²⁺ + 2OH⁻ → Fe(OH)₂. Iron(III) would give a brown precipitate instead, and copper(II) a blue one.",
      },
      {
        question: "A 650 mg tablet contains 500 mg of active ingredient. Calculate the percentage by mass of active ingredient, to one decimal place.",
        accept: [
          "76.9",
        ],
        answer: "76.9%. Divide the mass of active ingredient by the total mass: 500 ÷ 650 gives 0.769, which is 76.9%. The remaining quarter is binders and coating, which is what makes it a formulation.",
      },
      {
        question: "A gas puts out a lit splint, and bubbling it through limewater turns the limewater milky. Work out which gas it is.",
        accept: [
          "carbon dioxide",
          "co2",
        ],
        answer: "Carbon dioxide. It does not support combustion, so the splint goes out, and the limewater going cloudy = the confirming test. Nitrogen would also put the splint out, which is why the second test is needed.",
      },
      {
        question: "A pure substance melts sharply at 80°C. A sample of it melts between 74°C and 79°C. Calculate the width of the sample's melting range.",
        accept: [
          "5",
        ],
        answer: "5°C. Take the lower temperature from the upper one: 79 − 74. Melting over a range rather than at a single point shows the sample is impure — a mixture, not a pure substance.",
      },
      {
        question: "A flame test is carried out on a solid containing both sodium and potassium ions. Work out the flame colour that will be seen.",
        accept: [
          "yellow",
          "yellow-orange",
        ],
        answer: "Yellow. Sodium gives such an intense yellow flame that the lilac of potassium = completely hidden behind it. This masking is one reason laboratories prefer instrumental methods for mixtures.",
      },
      {
        question: "An unknown white solid gives a lilac flame, no precipitate with sodium hydroxide, and a white precipitate with acidified barium chloride. Work out its name and formula.",
        accept: [
          "potassium sulfate",
          "K2SO4",
          "k2so4",
          "potassium sulphate",
        ],
        answer: "Potassium sulfate, K₂SO₄. The lilac flame identifies K⁺. Group 1 hydroxides are soluble, so getting no precipitate with sodium hydroxide is exactly what a potassium salt should do. The white precipitate with acidified barium chloride is barium sulfate: Ba²⁺ + SO₄²⁻ → BaSO₄. Two K⁺ balance one SO₄²⁻, since 2 × 1 matches 2. Its relative formula mass is (2 × 39) + 96 = 174.",
      },
      {
        question: "A solution gives a brown precipitate with sodium hydroxide and a cream precipitate with acidified silver nitrate. Work out the formula of the compound in it.",
        accept: [
          "FeBr3",
          "febr3",
        ],
        answer: "FeBr₃. A brown precipitate with sodium hydroxide is iron(III) hydroxide, so the metal ion is Fe³⁺: Fe³⁺ + 3OH⁻ → Fe(OH)₃. Cream with acidified silver nitrate means bromide, Br⁻. Three bromide ions balance one iron(III) ion, since 3 × 1 matches 3. Its relative formula mass is 56 + (3 × 80) = 296.",
      },
      {
        question: "Excess barium chloride is added to 25.0 cm³ of 0.100 mol/dm³ sodium sulfate solution. Calculate the mass of barium sulfate precipitated. (Mr: BaSO₄ = 233)",
        accept: [
          "0.5825",
          "0.58",
        ],
        answer: "0.5825 g. Moles of sulfate = 0.0250 × 0.100 = 0.00250 mol. One sulfate ion gives one formula unit of precipitate, so 0.00250 mol of BaSO₄ forms. Mass = 0.00250 × 233 = 0.5825 g.",
        higherOnly: true,
      },
      {
        question: "A sample of lithium chloride is measured as 16.4% lithium by mass. Calculate the theoretical percentage, to one decimal place. (Ar: Li = 7, Cl = 35.5)",
        accept: [
          "16.5",
          "16.47",
        ],
        answer: "16.5%. Mr(LiCl) = 7 + 35.5 = 42.5, so the lithium share is (7 ÷ 42.5) × 100 = 16.47%, which rounds to 16.5%. The measured 16.4% sits within experimental error of that, so the sample is consistent with pure lithium chloride.",
      },
      {
        question: "50 cm³ of a chloride solution gives 2.87 g of silver chloride with excess silver nitrate. Calculate the concentration of chloride ions in mol/dm³. (Mr: AgCl = 143.5)",
        accept: [
          "0.4",
          "0.40",
        ],
        answer: "0.4 mol/dm³. Moles of precipitate = 2.87 ÷ 143.5 = 0.0200 mol, and each one came from a single chloride ion, so 0.0200 mol of Cl⁻ was present. The volume is 50 ÷ 1000 = 0.0500 dm³, so concentration = 0.0200 ÷ 0.0500 = 0.400 mol/dm³.",
        higherOnly: true,
      },
      {
        question: "Explain why dilute nitric acid is added before silver nitrate in the halide test, and dilute hydrochloric acid before barium chloride in the sulfate test.",
        answer: "Carbonate ions are a common impurity and they form white precipitates with both silver and barium, which would be mistaken for a positive result. Adding acid first reacts any carbonate away as carbon dioxide, so nothing is left to give a false white precipitate. The acid chosen must not introduce the ion being tested for: hydrochloric acid would add chloride and ruin the halide test, so nitric acid is used there. Conversely nitric acid is fine before barium chloride, but hydrochloric acid is used because it adds no sulfate. (Mark this one yourself.)",
      },
      {
        question: "Explain why a forensic laboratory uses instrumental methods rather than flame tests and precipitate colours, and what the simple chemical tests are still useful for.",
        answer: "Instruments such as flame emission spectroscopy are far more sensitive, so they can identify ions present in traces far too small to colour a flame, and they are much faster once set up. They are also more accurate and give quantitative results rather than a colour someone has to judge by eye, and they can handle mixtures where one ion masks another. Chemical tests remain useful because the apparatus is cheap, portable and needs no calibration, so they are ideal for classrooms and for quick checks in the field. Their weaknesses are exactly the instrument's strengths: they need a reasonable amount of sample and depend on human judgement of colour. (Mark this one yourself.)",
      },
      {
        question: "Explain why a paint or a medicine is described as a formulation rather than a pure substance, and why the proportions of its components matter.",
        answer: "A formulation is a mixture designed for a purpose, in which each component is included in a measured quantity for a particular job — in paint, a pigment for colour, a binder to hold it to the surface and a solvent to let it spread. Because the components are only mixed, not chemically joined, the mixture melts over a range rather than at a sharp temperature, which is how you can tell it is not pure. The proportions decide whether the product performs: too much solvent and the paint runs, too little and it will not spread. In a medicine the same logic is safety-critical, since the dose of active ingredient must be right every time. (Mark this one yourself.)",
      },
      {
        question: "Explain how you would distinguish between separate solutions of sodium chloride, magnesium chloride and calcium chloride.",
        answer: "A flame test separates two of them straight away: sodium gives an intense yellow flame and calcium an orange-red one, while magnesium gives no characteristic colour. Adding sodium hydroxide solution confirms it, since magnesium and calcium both give a white precipitate of the metal hydroxide but sodium gives none, because group 1 hydroxides are soluble. Taking the two results together identifies each solution without ambiguity. All three would give the same white precipitate with acidified silver nitrate, which only tells you that every one of them is a chloride. (Mark this one yourself.)",
      },
    ],
    misconceptions: [
      {
        wrong: "A lighted splint tests for oxygen.",
        right:
          "A GLOWING splint relights in oxygen. A LIGHTED splint gives a squeaky pop with hydrogen. The two are constantly swapped.",
      },
      {
        wrong: "Flame tests can identify any mixture of metal ions.",
        right:
          "One strong colour can mask another — sodium's yellow easily hides potassium's lilac. That is a real limitation of the method.",
      },
      {
        wrong: "You can add silver nitrate straight to the sample.",
        right:
          "Dilute nitric acid must be added first, to remove carbonates that would otherwise precipitate and give a false positive.",
      },
      {
        wrong: "Instrumental methods have made chemical tests useless.",
        right:
          "Chemical tests are cheap, quick and need no specialist equipment. Instrumental methods are better but not always available or necessary.",
      },
      {
        wrong: "A formulation is the same as an impure substance.",
        right:
          "A formulation is deliberately designed, with each component in a carefully measured quantity. Being a mixture is the point, not a flaw.",
      },
    ],
  },

  "chemistry/the-atmosphere": {
    summary:
      "The air you are breathing has a history, and it has been changed twice — once by early life, and once by us. This topic covers how the atmosphere evolved, the greenhouse effect, climate change and the pollutants from burning fuels. It is also a topic where examiners want measured argument about evidence rather than slogans.",
    keyFacts: [
      {
        heading: "Today's atmosphere",
        points: [
          "About 80% nitrogen and 20% oxygen — more precisely 78% and 21%.",
          "The remaining 1% includes argon, carbon dioxide and water vapour.",
          "This composition has been roughly stable for about 200 million years.",
          "Carbon dioxide is a very small fraction of the atmosphere but has a large effect because it absorbs infrared radiation.",
        ],
      },
      {
        heading: "How the atmosphere evolved",
        points: [
          "Theories about the early atmosphere are uncertain, because the evidence is limited and from very long ago.",
          "The early atmosphere is thought to have been mainly CARBON DIOXIDE, from intense volcanic activity, with little or no oxygen.",
          "Volcanoes also released nitrogen, water vapour and small amounts of methane and ammonia.",
          "As the Earth cooled, water vapour CONDENSED to form the oceans.",
          "Carbon dioxide DISSOLVED in the oceans and was locked into carbonate rocks and sediments.",
          "ALGAE and later plants produced oxygen by photosynthesis, and oxygen levels rose over about two billion years.",
        ],
      },
      {
        heading: "The greenhouse effect and climate change",
        diagrams: [
          "greenhouse-effect",
        ],
        points: [
          "Greenhouse gases — carbon dioxide, methane and water vapour — absorb outgoing INFRARED radiation and re-radiate some back to Earth.",
          "That keeps the planet warm enough for life; the problem is the recent INCREASE in those gases.",
          "Human causes: burning fossil fuels, deforestation, farming livestock and rice, and waste in landfill.",
          "Consequences: rising global temperature, melting ice and rising sea levels, more extreme weather, and changes in the distribution of species.",
          "CARBON FOOTPRINT is the total greenhouse gases emitted over the full life cycle of a product, service or event.",
          "Reducing it: renewable energy, greater efficiency, carbon capture, and simply using less.",
        ],
      },
      {
        heading: "Pollutants from fuels",
        points: [
          "CARBON DIOXIDE from complete combustion contributes to climate change.",
          "CARBON MONOXIDE from incomplete combustion is toxic, colourless and odourless.",
          "SOOT — solid carbon particles — causes respiratory problems and global dimming.",
          "SULFUR DIOXIDE, from sulfur impurities in fuel, causes acid rain.",
          "NITROGEN OXIDES form when the high temperature of an engine makes nitrogen and oxygen from the air react. They cause acid rain and respiratory problems.",
          "Acid rain damages trees, buildings and statues, and makes lakes too acidic for aquatic life.",
        ],
      },
    ],
    flashcards: [
      { term: "Greenhouse effect", definition: "Gases in the atmosphere absorbing outgoing infrared radiation and re-radiating some back to Earth." },
      { term: "Greenhouse gas", definition: "A gas such as carbon dioxide, methane or water vapour that absorbs infrared radiation." },
      { term: "Carbon footprint", definition: "The total greenhouse gases emitted over the full life cycle of a product, service or event." },
      { term: "Climate change", definition: "Long-term changes to global weather patterns, driven by rising greenhouse gas levels." },
      { term: "Photosynthesis", definition: "The reaction by which algae and plants produced the oxygen in the atmosphere." },
      { term: "Acid rain", definition: "Rain made acidic by sulfur dioxide and nitrogen oxides dissolving in it." },
      { term: "Sulfur dioxide", definition: "A pollutant from sulfur impurities in fuel, which causes acid rain." },
      { term: "Nitrogen oxides", definition: "Pollutants formed when nitrogen and oxygen react in the high temperature of an engine." },
      { term: "Soot", definition: "Solid carbon particles from incomplete combustion, causing respiratory problems and global dimming." },
      { term: "Global dimming", definition: "The reduction of sunlight reaching the surface, caused by particulates in the air." },
      { term: "Carbon capture", definition: "Trapping carbon dioxide before it enters the atmosphere and storing it underground." },
      { term: "Carbonate rocks", definition: "Rocks such as limestone, formed when dissolved carbon dioxide was locked into sediment." },
      { term: "Incomplete combustion", definition: "Burning in insufficient oxygen, producing carbon monoxide and soot as well." },
      { term: "Particulates", definition: "Tiny solid particles suspended in the air, such as soot." },
    ],
    examTips: [
      {
        tip: "Learn the modern composition as 80/20",
        detail:
          "Roughly 80% nitrogen and 20% oxygen; more precisely 78% and 21%. Either is usually accepted, but know which is which.",
      },
      {
        tip: "Say WHY early atmosphere theories are uncertain",
        detail:
          "The evidence is limited and from billions of years ago. Examiners reward acknowledging the uncertainty rather than stating it as fact.",
      },
      {
        tip: "Two things removed the early carbon dioxide",
        detail:
          "It dissolved in the oceans and became locked in carbonate rocks, and photosynthesis by algae and plants used it up. Give both.",
      },
      {
        tip: "Greenhouse gases absorb INFRARED specifically",
        detail:
          "Not 'heat' vaguely. They let visible light in and absorb the infrared radiated back out, which is what traps the energy.",
      },
      {
        tip: "Know which pollutant causes which problem",
        detail:
          "Sulfur dioxide and nitrogen oxides → acid rain. Carbon monoxide → toxic. Soot → respiratory problems and global dimming. Carbon dioxide → climate change.",
      },
      {
        tip: "Be measured about climate evidence",
        detail:
          "The basic science is very strongly supported; some detailed predictions are genuinely uncertain. Precision on that reads as more scientific than certainty either way.",
      },
    ],
    workedExamples: [
      {
        question:
          "Dry air is about 78% nitrogen and 21% oxygen. Calculate the volume of oxygen in a 500 cm³ sample of dry air, and name the gas that makes up most of the remaining 1%.",
        steps: [
          "Percentage means 'per hundred', so 21% is 21 ÷ 100 = 0.21.",
          "Volume of oxygen = 0.21 × 500 cm³.",
          "= 105 cm³.",
          "78 + 21 = 99, so about 1% is left. Most of that is argon, a noble gas, with carbon dioxide only about 0.04% — small, but the part that matters for the greenhouse effect.",
        ],
        answer: "105 cm³ of oxygen; the remainder is mostly argon",
      },
    ],
    practice: [
      {
        question: "Approximately what percentage of today's atmosphere is nitrogen? Give the number only.",
        accept: ["80", "78"],
        answer:
          "About 80% — more precisely 78%. Oxygen makes up about 20%, and the remaining 1% is argon, carbon dioxide and water vapour.",
      },
      {
        question: "Approximately what percentage of today's atmosphere is oxygen? Give the number only.",
        accept: ["20", "21"],
        answer:
          "About 20% — more precisely 21%. This is the gas that early photosynthesis by algae slowly added over roughly two billion years.",
      },
      {
        question: "Which gas is thought to have made up most of the EARLY atmosphere?",
        accept: ["carbon dioxide", "co2", "co₂"],
        answer:
          "Carbon dioxide, released by intense volcanic activity. There was little or no oxygen at first.",
      },
      {
        question: "What released the gases of the early atmosphere?",
        accept: ["volcanoes", "volcanic activity", "volcanic", "volcanoes erupting"],
        answer:
          "Volcanoes. They released carbon dioxide, nitrogen and water vapour, plus small amounts of methane and ammonia.",
      },
      {
        question: "Which organisms first produced oxygen in the atmosphere?",
        accept: ["algae", "plants", "algae and plants", "photosynthetic organisms", "bacteria"],
        answer:
          "Algae, and later plants, by photosynthesis. Oxygen levels rose gradually over roughly two billion years.",
      },
      {
        question: "What happened to water vapour as the early Earth cooled?",
        accept: ["condensed", "it condensed", "condensation", "formed oceans", "condensed to form oceans"],
        answer:
          "It condensed to form the oceans. Carbon dioxide then dissolved in that water, which is one of the two ways it was removed from the air.",
      },
      {
        question: "Name one greenhouse gas other than carbon dioxide.",
        accept: ["methane", "water vapour", "water vapor", "ch4", "nitrous oxide"],
        answer:
          "Methane or water vapour. All three absorb outgoing infrared radiation and re-radiate some of it back towards the surface.",
      },
      {
        question: "What type of radiation do greenhouse gases absorb?",
        accept: ["infrared", "infra red", "infra-red", "ir"],
        answer:
          "Infrared. They let visible light through to warm the surface, then absorb the infrared radiated back out — which is what traps the energy.",
      },
      {
        question: "Which pollutant gas is toxic, colourless and odourless?",
        accept: ["carbon monoxide", "co"],
        answer:
          "Carbon monoxide, from incomplete combustion. Being undetectable by the senses is exactly what makes it so dangerous.",
      },
      {
        question: "Which pollutant, from sulfur impurities in fuel, causes acid rain?",
        accept: ["sulfur dioxide", "sulphur dioxide", "so2", "so₂"],
        answer:
          "Sulfur dioxide. Nitrogen oxides also contribute, and together they damage trees, buildings and aquatic life.",
      },
      {
        question: "How are nitrogen oxides formed in a car engine?",
        accept: ["high temperature", "nitrogen and oxygen react", "heat of the engine", "high temperatures make nitrogen and oxygen react", "nitrogen reacts with oxygen"],
        answer:
          "The very high temperature inside the engine makes nitrogen and oxygen from the air react together. The fuel itself contains no nitrogen.",
      },
      {
        question: "What is the effect of soot particles reducing sunlight reaching the surface called?",
        accept: ["global dimming", "dimming"],
        answer:
          "Global dimming. Soot also causes respiratory problems and blackens buildings, so it does damage at ground level too.",
      },
      {
        question: "What is the total greenhouse gas emission over a product's whole life cycle called?",
        accept: ["carbon footprint", "the carbon footprint"],
        answer:
          "Its carbon footprint. It covers everything — extracting materials, manufacturing, transport, use and disposal — not just the emissions from using it.",
      },
      {
        question: "Name one way of reducing carbon dioxide emissions.",
        accept: ["renewable energy", "carbon capture", "efficiency", "less fossil fuels", "use less", "renewables", "electric vehicles", "reduce use"],
        answer:
          "Renewable energy, greater efficiency, carbon capture and storage, or simply using less. Each has costs and practical limits worth mentioning.",
      },
      {
        question: "Explain how carbon dioxide was removed from the early atmosphere. Write two or three sentences.",
        answer:
          "As the Earth cooled, water vapour condensed to form the oceans, and carbon dioxide dissolved into that water. Some of the dissolved carbon dioxide reacted and was locked into carbonate rocks and sediments on the sea floor. Separately, algae and later plants used carbon dioxide in photosynthesis, converting it into their own biomass and releasing oxygen. Mark this one yourself: both routes — dissolving into the oceans and photosynthesis — are needed for full marks.",
      },
      {
        question: "Explain how the greenhouse effect keeps the Earth warm, and why increasing greenhouse gases is a problem.",
        answer:
          "Short-wavelength radiation from the Sun passes through the atmosphere and warms the Earth's surface, which then radiates energy back out as longer-wavelength infrared. Greenhouse gases absorb some of that infrared and re-radiate part of it back towards the surface, keeping the planet considerably warmer than it would otherwise be — without this, the Earth would be too cold for life. The problem is not the effect itself but the recent increase in greenhouse gases from burning fossil fuels and other human activity, which traps more energy and raises the average global temperature, with consequences including melting ice, rising sea levels and more extreme weather. Mark this one yourself: describing the mechanism AND distinguishing the natural effect from the enhanced one is what earns the top marks.",
      },
      {
        question: "Which gas makes up about four fifths of today's atmosphere?",
        choices: [
          "Nitrogen",
          "Oxygen",
          "Carbon dioxide",
          "Argon",
        ],
        accept: [
          "Nitrogen",
        ],
        answer: "Roughly 80% nitrogen and 20% oxygen, with small amounts of argon, carbon dioxide and water vapour.",
      },
      {
        question: "Where did most of the oxygen in the early atmosphere come from?",
        choices: [
          "Photosynthesis by algae and plants",
          "Volcanic eruptions",
          "Meteorite impacts",
          "The oceans evaporating",
        ],
        accept: [
          "Photosynthesis by algae and plants",
        ],
        answer: "Algae appeared around 2.7 billion years ago and gradually released oxygen, while removing carbon dioxide.",
      },
      {
        question: "Which of these is a greenhouse gas?",
        choices: [
          "Methane",
          "Nitrogen",
          "Argon",
          "Helium",
        ],
        accept: [
          "Methane",
        ],
        answer: "Carbon dioxide, methane and water vapour are greenhouse gases. Nitrogen and the noble gases are not.",
      },
      {
        question: "Incomplete combustion is dangerous mainly because it produces:",
        choices: [
          "Carbon monoxide, a toxic gas that is colourless and odourless",
          "Carbon dioxide",
          "Water vapour",
          "Nitrogen",
        ],
        accept: [
          "Carbon monoxide, a toxic gas that is colourless and odourless",
        ],
        answer: "It binds to haemoglobin in place of oxygen and gives no warning, which is why detectors are needed near boilers.",
      },
      {
        question: "Sulfur dioxide from burning fossil fuels causes:",
        choices: [
          "Acid rain",
          "Global dimming only",
          "The ozone hole",
          "Increased oxygen levels",
        ],
        accept: [
          "Acid rain",
        ],
        answer: "Sulfur dioxide and oxides of nitrogen dissolve in rainwater to form acids that damage buildings, trees and lakes.",
      },
      {
        question: "Air is about 78% nitrogen by volume. Calculate the volume of nitrogen in 2.5 dm³ of air.",
        accept: [
          "1.95",
        ],
        answer: "1.95 dm³. Take 78% of the total volume: 0.78 × 2.5. Percentage by volume works directly like this for gases, because equal volumes contain equal numbers of molecules.",
      },
      {
        question: "Carbon dioxide makes up about 0.04% of the atmosphere. Calculate the volume of carbon dioxide, in cm³, in 1 dm³ of air.",
        accept: [
          "0.4",
        ],
        answer: "0.4 cm³. One dm³ is 1000 cm³, and 0.04% of that is 0.0004 × 1000 cm³. Less than half a cm³ in a litre, yet enough to change the climate when it rises.",
      },
      {
        question: "Burning a litre of petrol releases 2.3 kg of carbon dioxide. Calculate the mass released on a journey using 45 litres.",
        accept: [
          "103.5",
        ],
        answer: "103.5 kg. Multiply the emission per litre by the number of litres: 2.3 × 45. Figures like this are what a carbon footprint is built from.",
      },
      {
        question: "Work out the formula of the pollutant gas formed when the air inside a hot car engine reacts.",
        accept: [
          "NO",
          "no",
          "nitrogen monoxide",
          "nitrogen oxide",
          "nitrogen oxides",
          "nox",
        ],
        answer: "Nitrogen monoxide, NO. The engine is hot enough for nitrogen and oxygen already in the air to react: N₂ + O₂ → 2NO. It oxidises further to NO₂, and these nitrogen oxides cause breathing problems and acid rain.",
      },
      {
        question: "A country's annual carbon dioxide emissions fall from 500 million tonnes to 425 million tonnes. Calculate the percentage reduction.",
        accept: [
          "15",
        ],
        answer: "15%. The fall of 75 million tonnes is 75 ÷ 500 of what was emitted before, which is 15%. Percentage change is always measured against the starting value, not the new one.",
      },
      {
        question: "A product's carbon footprint is 12 kg of CO₂ for manufacture, 3 kg for transport and 25 kg for use. Calculate the percentage contributed by the use stage.",
        accept: [
          "62.5",
        ],
        answer: "62.5%. The whole life cycle comes to 40 kg, and the use stage is 25 ÷ 40 of that, which is 62.5%. For appliances, the use stage usually dominates, which is why efficiency matters more than packaging.",
      },
      {
        question: "Photosynthesis is 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. Calculate the mass of oxygen released when 66 g of carbon dioxide is used up. (Mr: CO₂ = 44, O₂ = 32)",
        accept: [
          "48",
        ],
        answer: "48 g. Moles of carbon dioxide = 66 ÷ 44 = 1.5 mol. The ratio of CO₂ to O₂ is 6 : 6, so 1.5 mol of oxygen is released. Mass = 1.5 × 32 = 48 g. Repeated over hundreds of millions of years, this is where the oxygen in the air came from.",
        higherOnly: true,
      },
      {
        question: "Assume the early atmosphere was 95% carbon dioxide and today's is 0.04%. Calculate how many times more carbon dioxide a 2000 dm³ sample of early air held than the same volume of air today.",
        accept: [
          "2375",
        ],
        answer: "2375 times. In the early atmosphere, 0.95 × 2000 = 1900 dm³ of the sample would be carbon dioxide. The same volume today holds 0.0004 × 2000 = 0.8 dm³. Dividing the two, 1900 ÷ 0.8 = 2375.",
      },
      {
        question: "2C₈H₁₈ + 25O₂ → 16CO₂ + 18H₂O. Calculate the mass of carbon dioxide, in kg, produced by burning 1.14 kg of octane. (Mr: C₈H₁₈ = 114, CO₂ = 44)",
        accept: [
          "3.52",
        ],
        answer: "3.52 kg. Working in grams, moles of octane = 1140 ÷ 114 = 10 mol. The equation gives 16 CO₂ for every 2 octane, so 10 × 8 = 80 mol of carbon dioxide. Mass = 80 × 44 = 3520 g, which is 3.52 kg — over three times the mass of the fuel.",
        higherOnly: true,
      },
      {
        question: "2.0 tonnes of coal contains 1.5% sulfur by mass. Calculate the mass of sulfur dioxide released, in kg, when it all burns. (Ar: S = 32, O = 16)",
        accept: [
          "60",
        ],
        answer: "60 kg. The sulfur present is 0.015 × 2.0 = 0.030 tonnes, which is 30 kg. Each sulfur atom becomes one SO₂ molecule, and Mr(SO₂) = 32 + 32 = 64 against Ar(S) = 32, so the mass doubles: 30 × 2 = 60 kg of sulfur dioxide.",
      },
      {
        question: "Methane traps 25 times as much energy per tonne as carbon dioxide. A farm emits 400 tonnes of carbon dioxide and 12 tonnes of methane a year. Calculate the total in tonnes of carbon dioxide equivalent.",
        accept: [
          "700",
        ],
        answer: "700 tonnes. The methane counts as 12 × 25 = 300 tonnes of carbon dioxide equivalent. Adding the carbon dioxide itself gives 400 + 300 = 700 tonnes. The methane is only 12 ÷ 412 of the mass emitted, under 3%, but well over a third of the warming.",
      },
      {
        question: "Explain why scientists cannot be certain about the composition of the Earth's early atmosphere.",
        answer: "The evidence is nearly four and a half billion years old, and there are no samples of that air and no direct measurements of it. What survives is indirect: rocks, the minerals in them and comparisons with the atmospheres of other planets, all of which have to be interpreted. Different assumptions about volcanic activity and the early oceans give different answers, so the theories change as new evidence appears. That is normal science rather than a weakness, but it means the figures quoted are best estimates rather than facts. (Mark this one yourself.)",
      },
      {
        question: "Explain the difference between a greenhouse gas and a pollutant such as carbon monoxide, and why carbon dioxide is treated as a serious problem even though it is not toxic.",
        answer: "A pollutant like carbon monoxide causes direct harm to people who breathe it, by binding to haemoglobin and reducing the oxygen carried in the blood. A greenhouse gas causes harm indirectly, by absorbing the long-wavelength infrared radiated from the Earth's surface and re-emitting some of it back down, which raises the average temperature. Carbon dioxide is harmless to breathe at atmospheric levels, so it fails the usual test of a pollutant. Its danger is in the scale and the timescale: small rises in concentration drive climate change, sea level rise and extreme weather that affect everyone. (Mark this one yourself.)",
      },
      {
        question: "Explain why reducing a country's carbon footprint is difficult in practice, even where the technology to do it already exists.",
        answer: "Low-carbon alternatives usually need large investment before they save anything, and governments and companies are reluctant to spend when the returns are decades away. Fossil fuels are deeply built into transport, heating, farming and manufacturing, so switching means changing systems rather than single products. Individuals and businesses may also be unwilling to accept higher prices or changes to how they live, and disagreement between countries means action in one can be undone elsewhere. There is also a genuine lack of public understanding of how large the necessary changes are. (Mark this one yourself.)",
      },
      {
        question: "Explain how a catalytic converter reduces the pollutants leaving a car exhaust, and why it cannot reduce the carbon dioxide emitted.",
        answer: "The converter has a large surface area coated in catalyst, and the hot exhaust gases pass over it. Carbon monoxide is oxidised to carbon dioxide, and nitrogen oxides are reduced back to nitrogen, so two harmful gases are converted into ones already present in air. Unburnt hydrocarbons are also oxidised to carbon dioxide and water. Carbon dioxide is the unavoidable product of burning a hydrocarbon fuel, so converting the other pollutants actually produces more of it — the only way to cut it is to burn less fuel. (Mark this one yourself.)",
      },
    ],
    misconceptions: [
      {
        wrong: "The greenhouse effect is itself a bad thing.",
        right:
          "It keeps the Earth warm enough for life. The problem is the recent INCREASE in greenhouse gases, which traps more energy than before.",
      },
      {
        wrong: "Greenhouse gases trap heat like a blanket.",
        right:
          "They absorb outgoing INFRARED radiation and re-radiate some of it back. Being precise about the mechanism is what earns the mark.",
      },
      {
        wrong: "The nitrogen oxides in exhaust come from the fuel.",
        right:
          "They form from nitrogen and oxygen in the AIR, reacting at the high temperature inside the engine. The fuel contains no nitrogen.",
      },
      {
        wrong: "We know exactly what the early atmosphere was like.",
        right:
          "Theories are uncertain because the evidence is limited and billions of years old. Acknowledging that uncertainty earns marks.",
      },
      {
        wrong: "A carbon footprint only counts emissions while a product is used.",
        right:
          "It covers the WHOLE life cycle — extraction, manufacture, transport, use and disposal.",
      },
    ],
  },

  "chemistry/using-the-earths-resources": {
    summary:
      "This topic is about making chemistry sustainable: getting drinkable water, treating sewage, extracting metals from low-grade ores without wrecking the landscape, and judging the true environmental cost of a product from cradle to grave. It is where chemistry meets economics and ethics.",
    keyFacts: [
      {
        heading: "Finite and renewable resources",
        points: [
          "FINITE resources will run out: crude oil, metal ores, natural gas.",
          "RENEWABLE resources can be replaced as fast as they are used: timber from managed forests, for example.",
          "SUSTAINABLE DEVELOPMENT meets present needs without compromising future generations.",
          "Chemistry contributes by improving processes, replacing scarce materials and enabling recycling.",
          "The three Rs — reduce, reuse, recycle — in that order of preference.",
        ],
      },
      {
        heading: "Potable water",
        diagrams: [
          "water-treatment",
        ],
        points: [
          "POTABLE water is safe to drink. It is NOT pure water — it contains dissolved salts and treatment chemicals.",
          "In the UK: choose an appropriate source, filter to remove solids, then STERILISE to kill microbes.",
          "Sterilising agents: chlorine, ozone or ultraviolet light.",
          "Where fresh water is scarce, sea water is DESALINATED by distillation or reverse osmosis.",
          "Desalination requires large amounts of energy, which makes it expensive.",
        ],
      },
      {
        heading: "Waste water treatment",
        points: [
          "Sewage and agricultural waste must have organic matter and harmful microbes removed.",
          "SCREENING removes large solids and grit.",
          "SEDIMENTATION separates the mixture into sludge, which sinks, and effluent, which floats above it.",
          "The sludge is digested ANAEROBICALLY by bacteria, producing biogas and fertiliser.",
          "The effluent is treated AEROBICALLY by bacteria supplied with air.",
          "Treating sewage requires more processing than treating fresh water, because it starts far dirtier.",
        ],
      },
      {
        heading: "Alternative extraction and life cycle assessment",
        points: [
          "PHYTOMINING uses plants to absorb metal compounds from low-grade ore; the plants are burned and the ash processed.",
          "BIOLEACHING uses bacteria to produce solutions containing metal compounds.",
          "Both avoid the enormous energy and landscape damage of traditional mining, but they are slow.",
          "The metal can then be obtained by displacement with scrap iron, or by electrolysis.",
          "A LIFE CYCLE ASSESSMENT judges the environmental impact at every stage: raw materials, manufacture, use and disposal.",
          "LCAs involve judgement as well as data — some impacts are hard to quantify, so they can be biased or used selectively for marketing.",
        ],
      },
    ],
    flashcards: [
      { term: "Finite resource", definition: "A resource that will eventually run out, such as crude oil or metal ore." },
      { term: "Renewable resource", definition: "A resource that can be replaced as fast as it is used." },
      { term: "Sustainable development", definition: "Meeting present needs without compromising the ability of future generations to meet theirs." },
      { term: "Potable water", definition: "Water that is safe to drink. It is not chemically pure." },
      { term: "Sterilisation", definition: "Killing microbes in water, using chlorine, ozone or ultraviolet light." },
      { term: "Desalination", definition: "Removing salt from sea water, by distillation or reverse osmosis." },
      { term: "Reverse osmosis", definition: "Forcing water through a membrane under pressure to remove dissolved salts." },
      { term: "Sedimentation", definition: "Letting solids settle out, separating sewage into sludge and effluent." },
      { term: "Sludge", definition: "The solid material that settles during sewage treatment, digested anaerobically." },
      { term: "Effluent", definition: "The liquid remaining above the sludge, treated aerobically by bacteria." },
      { term: "Anaerobic digestion", definition: "Bacteria breaking down sludge without oxygen, producing biogas and fertiliser." },
      { term: "Phytomining", definition: "Using plants to absorb metal compounds from low-grade ore, then burning them for the ash." },
      { term: "Bioleaching", definition: "Using bacteria to produce solutions containing metal compounds from low-grade ore." },
      { term: "Life cycle assessment", definition: "An assessment of a product's environmental impact at every stage from raw materials to disposal." },
      { term: "Low-grade ore", definition: "Ore containing too little metal for traditional extraction to be worthwhile." },
    ],
    examTips: [
      {
        tip: "Potable is NOT the same as pure",
        detail:
          "Potable means safe to drink; it still contains dissolved substances. Chemically pure water would contain nothing but H₂O.",
      },
      {
        tip: "Learn the three water treatment steps in order",
        detail:
          "Choose the source, filter, sterilise. Then name a sterilising agent — chlorine, ozone or UV — because that detail carries a mark.",
      },
      {
        tip: "Sludge is anaerobic, effluent is aerobic",
        detail:
          "One without oxygen, one with air pumped in. Swapping them is the commonest error in the sewage question.",
      },
      {
        tip: "Say why phytomining and bioleaching are used",
        detail:
          "They extract metals from ore too low-grade for traditional mining, with far less energy and landscape damage — but they are slow.",
      },
      {
        tip: "Criticise life cycle assessments as well as describing them",
        detail:
          "Some impacts are hard to quantify, so judgement is involved and results can be biased or used selectively in advertising.",
      },
      {
        tip: "Reduce, reuse, recycle — in that ORDER",
        detail:
          "Using less is always better than reusing, which is better than recycling. Questions sometimes ask which is preferable and why.",
      },
    ],
    workedExamples: [
      {
        question:
          "A reaction has a theoretical yield of 8.0 g of copper oxide. A student carries it out and obtains 6.4 g. Calculate the percentage yield.",
        steps: [
          "Percentage yield = (actual yield ÷ theoretical yield) × 100.",
          "Substitute: (6.4 ÷ 8.0) × 100.",
          "6.4 ÷ 8.0 = 0.8.",
          "0.8 × 100 = 80%. Yields are below 100% for real reasons worth naming in an exam: product lost when transferring between containers, reactions that do not go to completion, and side reactions producing something else.",
        ],
        answer: "80%",
      },
    ],
    practice: [
      {
        question: "What word describes water that is safe to drink?",
        accept: ["potable"],
        answer:
          "Potable. Note it is NOT chemically pure — it contains dissolved salts and treatment chemicals, which is perfectly safe and normal.",
      },
      {
        question: "Name one substance or method used to sterilise drinking water.",
        accept: ["chlorine", "ozone", "ultraviolet", "uv", "ultraviolet light", "uv light"],
        answer:
          "Chlorine, ozone or ultraviolet light. Sterilising kills microbes, and it comes AFTER filtering out the solids.",
      },
      {
        question: "What is the process of removing salt from sea water called?",
        accept: ["desalination", "desalinisation"],
        answer:
          "Desalination, by distillation or reverse osmosis. Both need large amounts of energy, which is why it is used only where fresh water is scarce.",
      },
      {
        question: "What method forces water through a membrane to remove dissolved salts?",
        accept: ["reverse osmosis", "osmosis"],
        answer:
          "Reverse osmosis. Pressure pushes water through a membrane that the dissolved salts cannot pass through.",
      },
      {
        question: "In sewage treatment, what is the solid that settles out called?",
        accept: ["sludge", "the sludge"],
        answer:
          "Sludge. It is digested anaerobically — without oxygen — producing biogas and fertiliser as useful by-products.",
      },
      {
        question: "In sewage treatment, what is the liquid above the sludge called?",
        accept: ["effluent", "the effluent"],
        answer:
          "Effluent. It is treated aerobically, with air pumped in so bacteria can break down the remaining organic matter.",
      },
      {
        question: "Is sludge digested aerobically or anaerobically?",
        accept: ["anaerobically", "anaerobic", "without oxygen"],
        answer:
          "Anaerobically — without oxygen. The effluent, by contrast, is treated aerobically. Swapping these is the commonest error here.",
      },
      {
        question: "What is the process of using plants to absorb metal compounds from low-grade ore called?",
        accept: ["phytomining"],
        answer:
          "Phytomining. The plants are harvested and burned, and the metal compounds are then extracted from the ash.",
      },
      {
        question: "What is the process of using bacteria to extract metals from low-grade ore called?",
        accept: ["bioleaching"],
        answer:
          "Bioleaching. The bacteria produce solutions containing metal compounds, from which the metal can be obtained by displacement or electrolysis.",
      },
      {
        question: "Give one advantage of phytomining over traditional mining.",
        accept: ["less energy", "less damage", "low grade ore", "less landscape damage", "cheaper", "less pollution", "uses low grade ore"],
        answer:
          "It uses far less energy, causes much less damage to the landscape, and can extract metal from ore too low-grade to mine conventionally.",
      },
      {
        question: "Give one disadvantage of phytomining and bioleaching.",
        accept: ["slow", "takes a long time", "slower", "time", "low yield", "takes years"],
        answer:
          "Both are slow compared with traditional mining. That is the main practical reason they have not replaced it entirely.",
      },
      {
        question: "What is an assessment of a product's environmental impact from raw materials to disposal called?",
        accept: ["life cycle assessment", "lca", "a life cycle assessment", "life cycle analysis"],
        answer:
          "A life cycle assessment (LCA). It covers extraction, manufacture, use and disposal — the whole journey, not just one stage.",
      },
      {
        question: "Give one limitation of life cycle assessments.",
        accept: ["hard to quantify", "subjective", "biased", "judgement", "used selectively", "not all impacts measurable", "can be misused"],
        answer:
          "Some impacts, such as damage to a landscape, are hard to quantify, so judgement is involved. That makes LCAs open to bias or selective use in advertising.",
      },
      {
        question: "In the three Rs, which is preferable: reducing or recycling?",
        accept: ["reducing", "reduce", "reducing use"],
        answer:
          "Reducing. Using less avoids the material, energy and emissions entirely, whereas recycling still requires collection, sorting and processing.",
      },
      {
        question: "Explain why potable water is not the same as pure water. Write two or three sentences.",
        answer:
          "In chemistry, pure water contains only H₂O molecules and nothing else. Potable water is water that is safe to drink, and it still contains dissolved substances — mineral salts from the ground and small amounts of treatment chemicals such as chlorine. Those substances are harmless at the levels present, and some are actually beneficial, so potable water meets a safety standard rather than a chemical purity standard. Mark this one yourself: the distinction between safe and chemically pure is the mark.",
      },
      {
        question: "Describe how potable water is produced in the UK, and explain why treating sewage requires more stages.",
        answer:
          "First an appropriate source is chosen, usually a reservoir, river or aquifer with relatively low levels of contamination. The water is then passed through filter beds to remove solid particles, and finally sterilised using chlorine, ozone or ultraviolet light to kill microorganisms. Sewage treatment needs more stages because the starting material is far more contaminated: it must first be screened to remove large solids and grit, then left to settle so that sludge and effluent separate, then the sludge digested anaerobically and the effluent treated aerobically with bacteria before it can be released. Mark this one yourself: the three UK stages plus a clear reason why sewage needs more is full marks.",
      },
      {
        question: "What does a life cycle assessment consider?",
        choices: [
          "The environmental impact from raw material to disposal",
          "Only the cost of manufacturing",
          "Only how long a product lasts",
          "Only the energy used in transport",
        ],
        accept: [
          "The environmental impact from raw material to disposal",
        ],
        answer: "It covers extraction, manufacture, use and disposal. Some stages involve judgement rather than measurement, so results can be biased.",
      },
      {
        question: "Which is an advantage of recycling metals?",
        choices: [
          "It saves energy and conserves limited ore reserves",
          "It makes the metal stronger",
          "It removes the need for sorting",
          "It produces no waste at all",
        ],
        accept: [
          "It saves energy and conserves limited ore reserves",
        ],
        answer: "Recycling aluminium uses a small fraction of the energy of extracting it by electrolysis, which is where most of the saving comes from.",
      },
      {
        question: "What is PHYTOMINING?",
        choices: [
          "Using plants to absorb metal compounds from low-grade ore",
          "Mining with heavy machinery",
          "Extracting metal using bacteria",
          "Melting ore in a blast furnace",
        ],
        accept: [
          "Using plants to absorb metal compounds from low-grade ore",
        ],
        answer: "The plants are burned and the ash processed. Bioleaching is the bacterial method, and both allow low-grade ores to be used.",
      },
      {
        question: "Potable water is water that is:",
        choices: [
          "Safe to drink",
          "Chemically pure",
          "Free of all dissolved substances",
          "Only from rivers",
        ],
        accept: [
          "Safe to drink",
        ],
        answer: "Potable water still contains dissolved substances, so it is not pure in the chemical sense — just safe.",
      },
      {
        question: "Which method produces potable water from seawater?",
        choices: [
          "Desalination by distillation or reverse osmosis",
          "Filtration through sand",
          "Adding chlorine only",
          "Sedimentation",
        ],
        accept: [
          "Desalination by distillation or reverse osmosis",
        ],
        answer: "Dissolved salt cannot be filtered out. Desalination works but uses a great deal of energy, which is why it is a last resort.",
      },
      {
        question: "500 dm³ of water must have its chloride level cut from 300 mg/dm³ to 250 mg/dm³. Calculate the mass of chloride removed, in grams.",
        accept: [
          "25",
        ],
        answer: "25 g. The reduction needed is 50 mg in every dm³, so across the whole batch that is 50 × 500 = 25,000 mg, and 25,000 mg is 25 g.",
      },
      {
        question: "A low-grade ore contains 0.8% copper by mass. Calculate the mass of ore, in tonnes, needed to obtain 4 tonnes of copper.",
        accept: [
          "500",
        ],
        answer: "500 tonnes. Divide the copper wanted by the fraction present: 4 ÷ 0.008. Shifting five hundred tonnes of rock for four of metal is exactly why phytomining and bioleaching are being developed.",
      },
      {
        question: "Ash from a phytomining crop is 25% copper by mass. Calculate the mass of copper in 12 tonnes of ash.",
        accept: [
          "3",
        ],
        answer: "3 tonnes. Take a quarter of the ash: 0.25 × 12. Burning the plants is what concentrates the metal into a mass small enough to be worth processing.",
      },
      {
        question: "Sea water contains 35 g of dissolved salts per dm³. Calculate the mass of salts in 250 cm³ of sea water.",
        accept: [
          "8.75",
        ],
        answer: "8.75 g. Convert the volume to 0.25 dm³ first, then multiply by the concentration: 35 × 0.25. Getting the unit conversion in before anything else is what keeps these questions simple.",
      },
      {
        question: "Extracting 1 tonne of a metal needs 200 MJ; recycling the same tonne needs 5% of that. Calculate the energy saved by recycling, in MJ.",
        accept: [
          "190",
        ],
        answer: "190 MJ. Recycling needs 0.05 × 200 MJ, which is 10 MJ, so the saving is the other 190 MJ. Savings of this order are why aluminium recycling is worth the collection costs.",
      },
      {
        question: "Work out the order of the three Rs, from the one that saves most resources to the one that saves least.",
        accept: [
          "reduce reuse recycle",
          "reduce, reuse, recycle",
          "reduce reuse and recycle",
        ],
        answer: "Reduce, reuse, recycle. Not making the object at all saves every stage; reusing it avoids repeating the manufacture; recycling still needs collection, sorting, transport and reprocessing, so it saves the least = it comes last of the three.",
      },
      {
        question: "A 50 tonne batch of ore contains 0.6% copper, and phytomining recovers 70% of it. Calculate the mass of copper obtained, in kg.",
        accept: [
          "210",
        ],
        answer: "210 kg. Copper in the ore = 0.006 × 50 = 0.3 tonnes, which is 300 kg. Recovering 70% of that gives 0.70 × 300 = 210 kg. The 90 kg left behind is one of the real costs of the method.",
      },
      {
        question: "A reverse osmosis plant treats 20,000 dm³ of sea water an hour, containing 35 g/dm³ of dissolved salts, and removes 99% of the salt. Calculate the mass of salt removed per hour, in kg.",
        accept: [
          "693",
        ],
        answer: "693 kg. Salt entering each hour = 35 × 20,000 = 700,000 g, which is 700 kg. Removing 99% of it gives 0.99 × 700 = 693 kg. The remaining 7 kg an hour is why the product water is potable rather than pure.",
      },
      {
        question: "Extracting 1 tonne of aluminium needs 15,000 kWh and recycling the same tonne needs 750 kWh. Calculate the energy saved, in kWh, when 40 tonnes are recycled.",
        accept: [
          "570000",
          "570,000",
        ],
        answer: "570,000 kWh. The saving per tonne is 15,000 − 750 = 14,250 kWh, which is (14,250 ÷ 15,000) × 100 = 95% of the extraction energy. Over 40 tonnes that comes to 14,250 × 40 = 570,000 kWh.",
      },
      {
        question: "A sewage works receives 40,000,000 dm³ a day containing 250 mg/dm³ of organic matter and removes 96% of it. Calculate the mass of organic matter still present each day, in kg.",
        accept: [
          "400",
        ],
        answer: "400 kg. The organic matter arriving is 40,000,000 × 250 = 10,000,000,000 mg a day, which is 10,000 kg. Removing 96% leaves 100 − 96 = 4%, so 0.04 × 10,000 = 400 kg goes out with the effluent.",
      },
      {
        question: "A plastic bag takes 1.6 MJ to make and is used 4 times; a cotton bag takes 60 MJ and is used 200 times. Calculate the energy per use of the better option, in MJ.",
        accept: [
          "0.3",
        ],
        answer: "0.3 MJ per use, for the cotton bag. The plastic bag costs 1.6 ÷ 4 = 0.4 MJ each time it is used. The cotton bag costs 60 ÷ 200 = 0.3 MJ per use, so it wins — but only if it really is used 200 times. Used just 100 times it would be 60 ÷ 100 = 0.6 MJ per use, worse than the plastic.",
      },
      {
        question: "Explain why a life cycle assessment is not a fully objective process, and how a company could use that to mislead.",
        answer: "Some parts of an LCA are genuine measurements, such as the mass of a material or the energy used in manufacture, but others require a judgement — how to weigh pollution against water use, or what value to place on damage that happens decades later. The boundaries are also chosen: whether transport of raw materials, or disposal, or the building of the factory is counted at all. A company can therefore pick boundaries and weightings that flatter its own product, or leave out a stage where it performs badly. Because the result still looks like a number, selective reporting of an LCA can be used as evidence for a claim the full assessment would not support. (Mark this one yourself.)",
      },
      {
        question: "Explain why producing potable water in the UK involves different steps from producing it in a hot, dry country.",
        answer: "The UK has plentiful fresh water in rivers, reservoirs and aquifers, so the salt content is already low and the job is to remove solids and kill microorganisms. That needs only filtration through beds of sand and gravel, followed by sterilisation with chlorine, ozone or ultraviolet light, which is cheap and uses little energy. A hot, dry country may have no fresh source and must start from sea water, where the problem is dissolved salt that no filter bed will remove. Desalination by distillation or reverse osmosis is required, and both use a great deal of energy, which makes the water far more expensive. (Mark this one yourself.)",
      },
      {
        question: "Explain why phytomining and bioleaching are becoming more attractive to the mining industry, despite being slow.",
        answer: "The high-grade ores that traditional smelting depends on are running out, and what is left is low-grade rock where the metal is too dilute for conventional extraction to pay. Phytomining uses plants to concentrate the metal, and bioleaching uses bacteria to produce a leachate solution, so both can work on material that would otherwise be waste. Neither needs the huge temperatures of a furnace, so energy use and carbon dioxide emissions are much lower, and large-scale quarrying and its landscape damage can be avoided. The slowness is a real disadvantage, but it is weighed against ore that could not be used at all. (Mark this one yourself.)",
      },
      {
        question: "Explain why copper is described as a finite resource, even though the copper atoms in a scrapped cable are not destroyed.",
        answer: "Finite refers to the amount that can be economically extracted from the Earth, and new copper ore is not being formed on any human timescale. The atoms in scrap do survive, but they are dispersed through landfill, alloys and buried infrastructure where collecting them costs more than the metal is worth. Each round of use also loses some copper to corrosion, wear and mixing with other metals. So the stock of copper that can actually be recovered and used shrinks, which is what makes recycling and careful design worth the effort. (Mark this one yourself.)",
      },
    ],
    misconceptions: [
      {
        wrong: "Potable water is pure water.",
        right:
          "It is SAFE water. It still contains dissolved minerals and treatment chemicals — pure water would contain nothing but H₂O.",
      },
      {
        wrong: "Sterilising and filtering are the same thing.",
        right:
          "Filtering removes solid particles; sterilising kills microbes. Both are needed, and in that order.",
      },
      {
        wrong: "Phytomining and bioleaching have replaced traditional mining.",
        right:
          "They are slow, so they are used mainly for low-grade ores where conventional mining would not be worthwhile.",
      },
      {
        wrong: "A life cycle assessment gives an objective number.",
        right:
          "Some impacts cannot be measured precisely, so judgement is involved — which is exactly why LCAs can be biased or used selectively.",
      },
      {
        wrong: "Recycling is the best of the three Rs.",
        right:
          "Reducing comes first, then reusing, then recycling. Recycling still consumes energy for collection, sorting and processing.",
      },
    ],
  },

  "chemistry/chemistry-exam-practice": {
    summary:
      "This topic is about technique rather than content: the command words, how to lay out a calculation so method marks are guaranteed, the required practicals, and the specific habits that cost marks in Chemistry papers. It is worth revising in the final fortnight, when learning new content has stopped paying off.",
    keyFacts: [
      {
        heading: "Command words",
        points: [
          "STATE or GIVE — a short factual answer, no explanation needed.",
          "DESCRIBE — say what happens or what the data shows.",
          "EXPLAIN — say WHY. If there is no 'because', it is probably not an explanation.",
          "CALCULATE — show every step; method marks are available even for a wrong final answer.",
          "EVALUATE — advantages, disadvantages, then a supported conclusion.",
          "SUGGEST — apply what you know to an unfamiliar situation; there may be more than one acceptable answer.",
        ],
      },
      {
        heading: "Laying out a calculation",
        points: [
          "Write the FORMULA first, before substituting anything.",
          "Convert units BEFORE calculating — cm³ to dm³, for instance.",
          "Substitute the numbers, then work out the answer.",
          "State the answer with its UNIT, and check it is sensible.",
          "Round only at the END, to the number of significant figures asked for.",
          "Never leave a calculation blank — the formula alone often earns a mark.",
        ],
      },
      {
        heading: "The required practicals",
        points: [
          "Any required practical can appear in either paper.",
          "Learn each as: the variables, the method in order, the expected results, and the main sources of error.",
          "Making a soluble salt, titration, electrolysis, temperature change, rates of reaction, chromatography and water purification are the core ones.",
          "Be ready to identify an anomaly, suggest an improvement and name specific control variables.",
          "Know the safety precautions: eye protection, care with acids, and ventilation for chlorine.",
        ],
      },
      {
        heading: "Habits that cost marks",
        points: [
          "Missing units, or writing units on relative formula mass, which has none.",
          "Forgetting to convert cm³ to dm³ before a concentration calculation.",
          "Balancing an equation by changing a formula rather than adding a large number in front.",
          "Saying an enzyme or a catalyst is 'used up' when it is not.",
          "Confusing strong with concentrated, or pure with potable.",
          "Describing a graph when the question said explain, and running out of time on the six-markers.",
        ],
      },
    ],
    flashcards: [
      { term: "Describe", definition: "Say what happens or what the data shows, without giving reasons." },
      { term: "Explain", definition: "Say why something happens. A good explanation usually contains 'because'." },
      { term: "Suggest", definition: "Apply your knowledge to an unfamiliar situation, where more than one answer may be acceptable." },
      { term: "Evaluate", definition: "Give advantages and disadvantages, then reach a supported conclusion." },
      { term: "Method mark", definition: "A mark for correct working, available even when the final answer is wrong." },
      { term: "Significant figures", definition: "The number of meaningful digits in an answer; round only at the end." },
      { term: "Anomalous result", definition: "A result that does not fit the pattern, which should be identified and excluded from the mean." },
      { term: "Control variable", definition: "A variable kept the same so the investigation is a fair test." },
      { term: "Required practical", definition: "An investigation named in the specification, examinable in either paper." },
      { term: "Titration", definition: "A required practical to find the volume of one solution that exactly reacts with another." },
      { term: "Independent variable", definition: "The variable deliberately changed in an investigation." },
      { term: "Dependent variable", definition: "The variable measured as a result of the change." },
    ],
    examTips: [
      {
        tip: "Underline the command word before writing",
        detail:
          "Describe and explain are different questions, and answering the wrong one loses marks on content you actually knew.",
      },
      {
        tip: "Write the formula before the numbers, every time",
        detail:
          "It guarantees the method mark even if the arithmetic goes wrong, and it stops you substituting into the wrong equation.",
      },
      {
        tip: "Convert units on the first line",
        detail:
          "cm³ to dm³, grams to kilograms. Doing it before anything else prevents the single most common calculation error in Chemistry.",
      },
      {
        tip: "Round only at the end",
        detail:
          "Rounding partway through introduces errors that compound. Carry full precision and round once, to the figures asked for.",
      },
      {
        tip: "One mark, roughly one minute",
        detail:
          "If a three-mark question has taken six minutes, move on and come back. Unfinished six-markers cost far more.",
      },
      {
        tip: "Never leave a calculation blank",
        detail:
          "Write the formula and substitute what you can. A blank scores zero; a partial attempt frequently scores most of the marks.",
      },
    ],
    workedExamples: [
      {
        question:
          "Plan an answer to: 'Explain why sodium chloride has a high melting point, but poly(ethene) melts easily.' (4 marks)",
        steps: [
          "Spot that it is a COMPARE question worth 4 marks — that usually means two points about each substance, not four about one.",
          "Sodium chloride: giant ionic lattice, with strong electrostatic forces of attraction between oppositely charged ions acting throughout the whole structure. A lot of energy is needed to overcome them.",
          "Poly(ethene): long molecules with only weak intermolecular forces BETWEEN the chains. Only those weak forces are overcome on melting.",
          "Say explicitly which forces are broken in each case. The commonest way to lose marks here is writing 'the bonds break' without saying which — examiners will not assume you mean the intermolecular ones.",
        ],
        answer: "Name the structure and the force for each, and state which force is overcome on melting",
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
        question: "Which command word asks you to apply knowledge to an unfamiliar situation?",
        accept: ["suggest"],
        answer:
          "Suggest. There may be more than one acceptable answer, so a sensible, well-reasoned response scores even if it is not the one in the mark scheme.",
      },
      {
        question: "What should be the FIRST line of working in a calculation?",
        accept: ["the formula", "formula", "write the formula", "the equation"],
        answer:
          "The formula. Writing it before substituting anything guarantees the method mark and stops you using the wrong equation.",
      },
      {
        question: "What unit conversion is needed before calculating concentration in g/dm³?",
        accept: ["cm3 to dm3", "cm³ to dm³", "divide by 1000", "cm3 to dm3 divide by 1000", "convert cm3 to dm3"],
        answer:
          "Convert cm³ to dm³ by dividing by 1,000. This is the single most common calculation error in the whole subject.",
      },
      {
        question: "At what point in a calculation should you round?",
        accept: ["at the end", "the end", "only at the end", "last", "final answer"],
        answer:
          "Only at the end. Rounding partway through introduces errors that compound through the rest of the working.",
      },
      {
        question: "What is a mark for correct working with a wrong final answer called?",
        accept: ["method mark", "a method mark", "method marks", "working mark"],
        answer:
          "A method mark. It is exactly why you should never leave a calculation blank — a partial attempt usually scores most of the marks.",
      },
      {
        question: "Does relative formula mass have units? Answer yes or no.",
        accept: ["no", "n"],
        answer:
          "No. It is a ratio, so writing grams after it is wrong. Mass has units; relative formula mass does not.",
      },
      {
        question: "Roughly how many minutes should you spend per mark?",
        accept: ["1", "one", "1 minute", "one minute"],
        answer:
          "About one minute per mark. If a three-mark question has taken six minutes, move on and come back if there is time.",
      },
      {
        question: "What should you do with an anomalous result before calculating a mean?",
        accept: ["exclude it", "ignore it", "leave it out", "exclude", "discard it", "remove it", "not include it"],
        answer:
          "Exclude it — and SAY that you have excluded it. The statement itself carries a mark.",
      },
      {
        question: "Which required practical finds the volume of one solution that exactly reacts with another?",
        accept: ["titration", "titrations", "a titration"],
        answer:
          "Titration. Learn the apparatus, the indicator, and why concordant results are repeated until they agree closely.",
      },
      {
        question: "What is the variable you deliberately change called?",
        accept: ["independent", "independent variable", "the independent variable"],
        answer:
          "The independent variable. The one you measure is the dependent variable, and everything else must be controlled.",
      },
      {
        question: "Should you leave a multiple choice question blank if unsure? Answer yes or no.",
        accept: ["no", "n"],
        answer:
          "No. There is no penalty for a wrong answer, so an educated guess is strictly better than nothing.",
      },
      {
        question: "When balancing an equation, what may you change?",
        accept: ["the big numbers", "numbers in front", "big numbers", "coefficients", "the numbers in front", "large numbers"],
        answer:
          "Only the large numbers in front of each formula. Changing a subscript changes what the substance IS, which makes the equation describe a different reaction.",
      },
      {
        question: "Name one safety precaution for a practical involving acids.",
        accept: ["eye protection", "goggles", "safety glasses", "wear goggles", "gloves", "eye protection and care"],
        answer:
          "Eye protection is the standard answer. Handling dilute acid carefully and working in a ventilated space where gases are produced also count.",
      },
      {
        question: "Explain why you should write the formula before substituting numbers in a calculation. Write two or three sentences.",
        answer:
          "Method marks are awarded for showing the correct approach, so a written formula secures those marks even if the arithmetic afterwards goes wrong. It also forces you to identify which equation the question actually needs before you start manipulating numbers, which prevents using the wrong one entirely. And it makes checking your own work far easier, because each step is visible rather than done in your head. Mark this one yourself: method marks and choosing the right equation are the two key reasons.",
      },
      {
        question: "Describe how you would answer a six-mark question on the required practical for rates of reaction.",
        answer:
          "First identify the command word and the specific reaction the question names, then spend about thirty seconds planning three or four points. I would state the independent variable, such as concentration, and the dependent variable, such as volume of gas or time for a cross to disappear. Then I would give the method in order, naming specific control variables — the same volumes, the same temperature, the same apparatus — because 'keeping everything else the same' scores nothing. I would say how the results would be recorded and repeated, mention excluding anomalies from the mean, and finish by saying what result would be expected and why, using collision theory. Mark this one yourself: named control variables, a method in order, repeats, and an explanation using collision theory are the four things worth credit.",
      },
      {
        question: "A question asks you to 'explain' rather than 'state'. You must:",
        choices: [
          "Give reasons, not just facts",
          "List as many facts as possible",
          "Draw a diagram",
          "Give both sides of an argument",
        ],
        accept: [
          "Give reasons, not just facts",
        ],
        answer: "Explain wants 'because' and 'which means'. State wants the fact alone, so adding reasons there just costs time.",
      },
      {
        question: "In a calculation, why should you show your working?",
        choices: [
          "Method marks can be earned even if the final answer is wrong",
          "It makes the answer look longer",
          "Examiners require neat handwriting",
          "Working replaces the need for units",
        ],
        accept: [
          "Method marks can be earned even if the final answer is wrong",
        ],
        answer: "A slip in the last step still scores most of the marks if the method is visible. An answer alone scores nothing if it is wrong.",
      },
      {
        question: "Which is the most common reason for losing marks in chemistry calculations?",
        choices: [
          "Forgetting to convert units, such as cm3 to dm3",
          "Writing too neatly",
          "Using a calculator",
          "Giving too many working steps",
        ],
        accept: [
          "Forgetting to convert units, such as cm3 to dm3",
        ],
        answer: "Dividing by 1000 is the step people skip under pressure, and it makes the answer wrong by a factor of a thousand.",
      },
      {
        question: "When describing a required practical, marks are given for:",
        choices: [
          "Naming apparatus and stating the control variables",
          "Describing how you felt about it",
          "Listing every chemical in the lab",
          "Predicting the result only",
        ],
        accept: [
          "Naming apparatus and stating the control variables",
        ],
        answer: "Be specific — 'measuring cylinder' beats 'container'. Saying what you kept the same shows you understand a fair test.",
      },
      {
        question: "If a question is worth 6 marks and asks you to compare two things, you should:",
        choices: [
          "Cover both things and make explicit comparisons",
          "Write about the one you know best",
          "List six unrelated facts",
          "Draw a labelled diagram only",
        ],
        accept: [
          "Cover both things and make explicit comparisons",
        ],
        answer: "Use words like 'whereas' and 'in contrast'. Writing two separate descriptions without linking them rarely reaches the top band.",
      },
      {
        question: "A question gives a volume of 25 cm³ and asks for a concentration in g/dm³. Calculate the volume in dm³ that should be your first line of working.",
        accept: [
          "0.025",
        ],
        answer: "0.025 dm³, from 25 ÷ 1000 = 0.025. Getting the conversion onto the page before anything else is the easiest mark in the whole question, and skipping it is the commonest way to lose the lot.",
      },
      {
        question: "A calculator shows 12.4567. Work out the answer to three significant figures.",
        accept: [
          "12.5",
        ],
        answer: "12.5. The first three significant figures are 1, 2 and 4, and the digit after them is 5, so the 4 rounds up = 12.5. Round like this only once, at the very end.",
      },
      {
        question: "Five titres read 24.8, 25.0, 24.9, 28.6 and 25.1 cm³. Calculate the mean, ignoring the anomalous result.",
        accept: [
          "24.95",
        ],
        answer: "24.95 cm³. Discard 28.6 first, since no other reading is anywhere near it, then take the mean of what is left: 99.8 ÷ 4 = 24.95. Including the anomaly would give 25.68, a value none of the repeats supports.",
      },
      {
        question: "A six-mark question asks you to compare two methods. Work out roughly how many separate points your answer should make.",
        accept: [
          "6",
          "six",
        ],
        answer: "About six, one per mark, covering both methods and drawing an explicit comparison between them. Six marks = a levels-marked answer, so the examiner is judging range and development rather than ticking a list, but a thin answer cannot reach the top band.",
      },
      {
        question: "A mass comes out as 0.0000345 g. Calculate this in standard form.",
        accept: [
          "3.45x10^-5",
          "3.45 x 10^-5",
          "3.45e-5",
          "3.45 x 10 -5",
        ],
        answer: "3.45 × 10⁻⁵ g. Move the decimal point five places to the right to reach 3.45, so the power is −5. Quoting tiny masses like this is clearer than counting zeros and is less likely to be misread.",
      },
      {
        question: "A gas syringe reading of 48.0 cm³ has an uncertainty of ±0.5 cm³. Calculate the percentage uncertainty, to one decimal place.",
        accept: [
          "1.0",
          "1",
        ],
        answer: "1.0%. Percentage uncertainty is the uncertainty divided by the measurement, as a percentage, so 0.5 ÷ 48.0 gives 0.0104, which is 1.0%. Quoting it shows the examiner you know how good the measurement actually is.",
      },
      {
        question: "Three titres read 23.10, 23.15 and 23.60 cm³. Calculate the mean titre you should use.",
        accept: [
          "23.125",
        ],
        answer: "23.125 cm³. Concordant means within 0.10 cm³ of each other: 23.10 and 23.15 differ by only 0.05, but 23.60 is 0.45 away and is discarded. The mean is then (23.10 + 23.15) ÷ 2 = 23.125 cm³. Averaging all three would give 23.28 and lose the mark.",
      },
      {
        question: "25.0 cm³ of 0.100 mol/dm³ sodium hydroxide is neutralised by 0.0500 mol/dm³ sulfuric acid. H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. Calculate the volume of acid needed, in cm³.",
        accept: [
          "25",
        ],
        answer: "25 cm³. Moles of NaOH = 0.0250 × 0.100 = 0.00250 mol. Two NaOH are neutralised by each H₂SO₄, so the acid needed is 0.00250 ÷ 2 = 0.00125 mol. Volume = 0.00125 ÷ 0.0500 = 0.0250 dm³, which is 25 cm³. The equal volumes are a coincidence of the numbers, not a rule.",
        higherOnly: true,
      },
      {
        question: "A balance reads to ±0.01 g and a mass of 2.50 g is found from a before-and-after reading. Calculate the percentage uncertainty in that mass, to one decimal place.",
        accept: [
          "0.8",
        ],
        answer: "0.8%. A mass found by difference uses two readings, so the uncertainties add: 2 × 0.01 = 0.02 g. As a percentage of the measured mass, (0.02 ÷ 2.50) × 100 = 0.8%. Forgetting to double the uncertainty halves the answer and is the usual slip here.",
      },
      {
        question: "0.60 g of magnesium is burnt and 0.95 g of magnesium oxide is collected, against a theoretical 1.00 g. Calculate the percentage yield.",
        accept: [
          "95",
        ],
        answer: "95%. Percentage yield = (0.95 ÷ 1.00) × 100 = 95%. Lay it out as formula, then substitution, then answer with its unit — three lines, and marks for each stage even if the arithmetic slips. The missing 5% is oxide lost as white smoke when the lid is raised, plus any magnesium that never reacted.",
      },
      {
        question: "A student dissolves 2.0 g of sodium hydroxide in 250 cm³ of water and writes the concentration as 0.050 mol/dm³. Calculate the correct concentration in mol/dm³. (Mr: NaOH = 40)",
        accept: [
          "0.2",
          "0.20",
          "0.200",
        ],
        answer: "0.2 mol/dm³. Moles of NaOH = 2.0 ÷ 40 = 0.050 mol, which is the figure they quoted — but that is an amount of substance, not a concentration. The volume is 250 ÷ 1000 = 0.250 dm³, so concentration = 0.050 ÷ 0.250 = 0.200 mol/dm³. Stopping one line early is one of the commonest ways to throw away the final mark.",
        higherOnly: true,
      },
      {
        question: "Explain why writing a unit beside a final answer can earn a mark, and why writing the wrong one can cost marks you had already earned.",
        answer: "Mark schemes often award the final accuracy mark for the correct value with its correct unit, because a number without a unit does not say what quantity has been found. Writing the wrong unit is worse than writing none, since it tells the examiner you do not know what you have calculated — g/dm³ and mol/dm³ describe different things. It can also signal that a conversion was missed, which casts doubt on working that would otherwise have gained method marks. Copying the unit from the question, or building it from the formula you used, avoids the problem entirely. (Mark this one yourself.)",
      },
      {
        question: "Explain why a six-mark question is marked in levels rather than by counting points, and what that means for how you write your answer.",
        answer: "Levels marking judges the whole response — its range, how well the points are developed and whether they are linked logically — rather than awarding a mark for each fact spotted. A list of six disconnected statements can sit in a lower band than four points that are explained and joined up. So the answer needs a clear order, chemical detail rather than vague description, and sentences that connect cause to effect. Planning two or three ideas and developing each one beats writing everything you can remember. (Mark this one yourself.)",
      },
      {
        question: "Explain why you should carry the full unrounded value through a multi-step calculation and round only at the end.",
        answer: "Rounding partway through throws away information, and the error introduced is then carried into every later step and can grow. A figure rounded to two significant figures early on can shift the final answer enough to fall outside the range the mark scheme allows, even though the method was perfectly correct. Keeping the full value on the calculator, and writing intermediate figures down only as a record, avoids this. Round once, at the end, to a sensible number of significant figures — usually the same as the least precise data in the question. (Mark this one yourself.)",
      },
      {
        question: "Explain why marks are available for saying how you would make a required practical repeatable, and what a good answer includes.",
        answer: "A result that cannot be reproduced is not evidence, so examiners test whether you understand how a reliable measurement is produced rather than just the order of the steps. A good answer states the independent variable being changed and the range used, names the control variables being kept the same, and says how each is kept constant. It specifies the measurements taken, with the apparatus and its precision, and says that each condition is repeated and a mean taken with anomalies excluded. Naming actual quantities and apparatus, rather than saying just to keep everything else the same, is what separates a top-band answer from a vague one. (Mark this one yourself.)",
      },
    ],
    misconceptions: [
      {
        wrong: "Describe and explain mean roughly the same thing.",
        right:
          "Describe says WHAT; explain says WHY. Answering the wrong one is the commonest way to lose marks on content you knew perfectly well.",
      },
      {
        wrong: "There is no point starting a calculation you cannot finish.",
        right:
          "Method marks are awarded for the formula and correct substitution. A blank scores nothing; a partial attempt often scores most of the marks.",
      },
      {
        wrong: "Rounding early makes the working simpler.",
        right:
          "It introduces errors that compound through the rest of the calculation. Carry full precision and round once, at the end.",
      },
      {
        wrong: "Writing more always scores more.",
        right:
          "Only if it answers the question. A focused answer using the specific context beats a page of general chemistry every time.",
      },
    ],
  },
};
