// PHYSICS — Year 9 being written. Years 10 and 11 planned, not yet written.
//
// ⚠️ FOUNDATION AND HIGHER
//
// Physics is tiered, and the same principle is used here as in Biology and
// Chemistry. The two possible mistakes are NOT symmetrical: failing to flag
// Higher-only content wastes a Foundation student a little revision, whereas
// wrongly flagging it tells them to SKIP something that will be on their paper.
// So this file UNDER-flags on purpose, and only where the split is well
// established.
//
// ⚠️ GRAVITATIONAL FIELD STRENGTH. This file uses g = 9.8 N/kg, which is the
// value on AQA's equation sheet. Some questions and some boards use 10 N/kg to
// make the arithmetic easier, and a question will always tell you which to use.
// USE THE VALUE THE QUESTION GIVES YOU, not the one you memorised.
//
// ⚠️ EQUATIONS. Some are given on the equation sheet and some must be recalled
// from memory, and which is which varies by board. Where this file says an
// equation must be recalled, check that against your own specification — being
// wrong about that in an exam is expensive.
//
// ⚠️ Boards differ on the tier line. This follows AQA.

import type { TopicContent } from "./index";

export const PHYSICS: Record<string, TopicContent> = {
  "physics/energy-stores-and-transfers": {
    summary:
      "Energy is never made and never destroyed — it only moves between stores. This topic covers those stores, the ways energy moves between them, and the four equations you will use more than any others in the whole subject: kinetic energy, gravitational potential energy, specific heat capacity and power.",
    keyFacts: [
      {
        heading: "Energy stores and pathways",
        points: [
          "The stores: KINETIC, GRAVITATIONAL POTENTIAL, ELASTIC POTENTIAL, THERMAL, CHEMICAL, NUCLEAR, MAGNETIC and ELECTROSTATIC.",
          "Energy is transferred between stores by four PATHWAYS: mechanically (a force doing work), electrically, by heating, and by radiation.",
          "A pathway is HOW energy moves; a store is WHERE it is. They are different things.",
          "CONSERVATION OF ENERGY: energy cannot be created or destroyed, only transferred between stores.",
          "In a CLOSED SYSTEM the total energy never changes, though it may end up somewhere less useful.",
        ],
      },
      {
        heading: "The core equations",
        points: [
          "KINETIC ENERGY: Ek = ½ × m × v². Mass in kg, speed in m/s, energy in joules.",
          "Note the speed is SQUARED — doubling the speed quadruples the kinetic energy.",
          "GRAVITATIONAL POTENTIAL ENERGY: Ep = m × g × h, with g = 9.8 N/kg unless told otherwise.",
          "ELASTIC POTENTIAL ENERGY: Ee = ½ × k × e², where k is the spring constant and e the extension.",
          "SPECIFIC HEAT CAPACITY: E = m × c × Δθ, where c is the energy to raise 1 kg by 1°C.",
          "POWER: P = E ÷ t. Power is the RATE of energy transfer, measured in watts.",
        ],
      },
      {
        heading: "Dissipation and efficiency",
        points: [
          "Some energy is always DISSIPATED — transferred to the surroundings, usually as heat, where it is no longer useful.",
          "Dissipated energy is not lost. It has simply spread out and become impossible to use.",
          "EFFICIENCY = useful output energy ÷ total input energy. Multiply by 100 for a percentage.",
          "Efficiency can also be calculated with power instead of energy: useful power out ÷ total power in.",
          "Efficiency can never exceed 100%, or 1 as a decimal. An answer above that means an arithmetic error.",
          "Reducing waste: lubrication reduces friction; insulation reduces heat transfer.",
        ],
      },
      {
        heading: "Reducing unwanted transfers",
        points: [
          "THERMAL CONDUCTIVITY measures how quickly energy passes through a material. Low conductivity means a good insulator.",
          "Thicker walls and lower conductivity both slow the rate of cooling of a building.",
          "Cavity wall insulation, loft insulation, double glazing and draught excluders all reduce heat loss.",
          "LUBRICATION reduces friction between moving surfaces, so less energy is dissipated as heat.",
          "STREAMLINING reduces air resistance, so less energy is wasted overcoming drag.",
        ],
      },
    ],
    flashcards: [
      { term: "Energy store", definition: "Where energy is held: kinetic, gravitational, elastic, thermal, chemical, nuclear, magnetic or electrostatic." },
      { term: "Energy pathway", definition: "How energy is transferred: mechanically, electrically, by heating, or by radiation." },
      { term: "Conservation of energy", definition: "Energy cannot be created or destroyed, only transferred between stores." },
      { term: "Closed system", definition: "A system where no energy enters or leaves, so the total energy stays constant." },
      { term: "Kinetic energy", definition: "The energy of a moving object: Ek = ½mv²." },
      { term: "Gravitational potential energy", definition: "The energy of an object due to its height: Ep = mgh." },
      { term: "Elastic potential energy", definition: "The energy stored in a stretched or compressed spring: Ee = ½ke²." },
      { term: "Specific heat capacity", definition: "The energy needed to raise the temperature of 1 kg of a substance by 1°C." },
      { term: "Power", definition: "The rate of energy transfer, measured in watts: P = E ÷ t." },
      { term: "Watt", definition: "One joule of energy transferred per second." },
      { term: "Dissipated", definition: "Energy transferred to the surroundings, usually as heat, where it is no longer useful." },
      { term: "Efficiency", definition: "Useful output energy divided by total input energy; never more than 1, or 100%." },
      { term: "Thermal conductivity", definition: "How quickly energy is transferred through a material by conduction." },
      { term: "Insulator", definition: "A material with low thermal conductivity, which slows heat transfer." },
      { term: "Lubrication", definition: "Reducing friction between surfaces so less energy is dissipated as heat." },
      { term: "Joule", definition: "The unit of energy. One joule is the energy transferred when a force of 1 N moves an object 1 m." },
    ],
    examTips: [
      {
        tip: "In Ek = ½mv², SQUARE the speed before halving",
        detail:
          "The commonest error in the whole of Physics. Doubling the speed quadruples the kinetic energy, which is why stopping distances rise so steeply.",
      },
      {
        tip: "Use the value of g the QUESTION gives you",
        detail:
          "Some papers use 9.8 N/kg and some use 10. Whichever is printed in the question is the one to use, regardless of what you memorised.",
      },
      {
        tip: "Efficiency can never exceed 100%",
        detail:
          "If your answer does, you have divided the wrong way round. Use it as an automatic check on every efficiency question.",
      },
      {
        tip: "Energy is dissipated, not lost",
        detail:
          "It has spread into the surroundings and become useless, but it still exists. Writing 'energy is lost' is marked wrong.",
      },
      {
        tip: "Write the equation before substituting",
        detail:
          "Method marks are awarded for the correct equation even if the arithmetic goes wrong. It costs five seconds.",
      },
      {
        tip: "Check the units before calculating",
        detail:
          "Mass in kg, not grams. Distance in metres. A gram-based mass gives an answer a thousand times too large.",
      },
    ],
    workedExamples: [
      {
        question:
          "A 60 kg cyclist travels at 4 m/s. Calculate her kinetic energy.",
        steps: [
          "Write the equation: Ek = ½ × m × v².",
          "Square the speed FIRST: v² = 4² = 16.",
          "Substitute: Ek = ½ × 60 × 16.",
          "½ × 60 = 30, and 30 × 16 = 480 J.",
        ],
        answer: "480 J",
      },
      {
        question:
          "A 2 kg book is lifted 5 m onto a shelf. Calculate the gain in gravitational potential energy. (g = 9.8 N/kg)",
        steps: [
          "Write the equation: Ep = m × g × h.",
          "Substitute: Ep = 2 × 9.8 × 5.",
          "2 × 9.8 = 19.6.",
          "19.6 × 5 = 98 J.",
        ],
        answer: "98 J",
      },
      {
        question:
          "How much energy is needed to raise the temperature of 2 kg of water by 20°C? (c = 4,200 J/kg°C)",
        steps: [
          "Write the equation: E = m × c × Δθ.",
          "Substitute: E = 2 × 4,200 × 20.",
          "2 × 4,200 = 8,400.",
          "8,400 × 20 = 168,000 J, which is 168 kJ.",
        ],
        answer: "168,000 J (168 kJ)",
      },
      {
        question:
          "A motor transfers 4,800 J in 60 seconds. Calculate its power output.",
        steps: [
          "Write the equation: P = E ÷ t.",
          "Substitute: P = 4,800 ÷ 60.",
          "= 80.",
          "Power is measured in watts, so the answer is 80 W.",
        ],
        answer: "80 W",
      },
      {
        question:
          "A lamp is supplied with 200 J and produces 40 J of light. Calculate its efficiency as a percentage.",
        steps: [
          "efficiency = useful output ÷ total input.",
          "= 40 ÷ 200 = 0.2.",
          "Multiply by 100 for a percentage: 0.2 × 100 = 20%.",
          "Check: it is below 100%, as it must be. The other 160 J was dissipated as heat.",
        ],
        answer: "20%",
      },
    ],
    practice: [
      {
        question: "What is the equation for kinetic energy? Ek = ½ × m × ______.",
        accept: ["v2", "v²", "v squared", "speed squared", "velocity squared"],
        answer:
          "Ek = ½mv². The speed is SQUARED, which is why doubling the speed quadruples the kinetic energy.",
      },
      {
        question: "A 2 kg object moves at 3 m/s. Calculate its kinetic energy in joules. Give the number only.",
        accept: ["9"],
        answer:
          "9 J. Ek = ½ × 2 × 3² = ½ × 2 × 9 = 9. Square the speed before doing anything else.",
      },
      {
        question: "A 4 kg object moves at 5 m/s. Calculate its kinetic energy in joules. Give the number only.",
        accept: ["50"],
        answer:
          "50 J. Ek = ½ × 4 × 25 = 2 × 25 = 50. Notice that squaring 5 gives 25, not 10 — a very common slip.",
      },
      {
        question: "A 3 kg object is lifted 2 m. Calculate the gain in gravitational potential energy, using g = 10 N/kg. Give the number only.",
        accept: ["60"],
        answer:
          "60 J. Ep = mgh = 3 × 10 × 2 = 60. This question gives g = 10, so use 10 — not the 9.8 you may have memorised.",
      },
      {
        question: "A 5 kg object is lifted 4 m. Calculate the gain in gravitational potential energy, using g = 10 N/kg. Give the number only.",
        accept: ["200"],
        answer:
          "200 J. Ep = 5 × 10 × 4 = 200. Always take the value of g from the question itself.",
      },
      {
        question: "What is the unit of power?",
        accept: ["watt", "watts", "w"],
        answer:
          "The watt (W). One watt is one joule of energy transferred every second, so power is the RATE of energy transfer.",
      },
      {
        question: "A device transfers 3,000 J in 30 seconds. Calculate its power in watts. Give the number only.",
        accept: ["100"],
        answer:
          "100 W. P = E ÷ t = 3,000 ÷ 30 = 100. Power is energy divided by time, always.",
      },
      {
        question: "A device transfers 1,200 J in 40 seconds. Calculate its power in watts. Give the number only.",
        accept: ["30"],
        answer:
          "30 W. 1,200 ÷ 40 = 30. If the answer looks implausibly large, check whether you divided the right way round.",
      },
      {
        question: "A machine takes in 500 J and usefully outputs 100 J. Calculate the efficiency as a percentage. Give the number only.",
        accept: ["20", "20%"],
        answer:
          "20%. Efficiency = 100 ÷ 500 = 0.2, then × 100 = 20%. The remaining 400 J was dissipated, usually as heat.",
      },
      {
        question: "A machine takes in 800 J and usefully outputs 600 J. Calculate the efficiency as a percentage. Give the number only.",
        accept: ["75", "75%"],
        answer:
          "75%. 600 ÷ 800 = 0.75, × 100 = 75%. Always check the answer is at or below 100% — above means you divided the wrong way.",
      },
      {
        question: "What word describes energy transferred to the surroundings where it is no longer useful?",
        accept: ["dissipated", "dissipation", "wasted"],
        answer:
          "Dissipated. Never write that energy is 'lost' — it still exists, it has just spread out and become impossible to use.",
      },
      {
        question: "What is the specific heat capacity of a substance?",
        accept: ["energy to raise 1kg by 1 degree", "energy to raise 1 kg by 1c", "energy per kg per degree", "energy to heat 1kg by 1 degree", "energy needed to raise 1 kg by 1 degree celsius"],
        answer:
          "The energy needed to raise the temperature of 1 kg of the substance by 1°C. Water's is unusually high at about 4,200 J/kg°C.",
      },
      {
        question: "Calculate the energy needed to heat 3 kg of water by 10°C. (c = 4,200 J/kg°C) Give the number only.",
        accept: ["126000", "126,000"],
        answer:
          "126,000 J. E = mcΔθ = 3 × 4,200 × 10 = 126,000. Water's high specific heat capacity is why it takes so long to boil.",
      },
      {
        question: "Name one way of reducing energy dissipated by friction.",
        accept: ["lubrication", "lubricate", "oil", "grease", "lubricant"],
        answer:
          "Lubrication — oil or grease between the moving surfaces. Streamlining reduces the similar waste caused by air resistance.",
      },
      {
        question: "Explain why doubling the speed of a car quadruples its kinetic energy. Write two or three sentences.",
        answer:
          "Kinetic energy is calculated as ½mv², so the speed appears SQUARED in the equation while the mass appears only once. If the speed doubles, v² becomes (2v)² = 4v², so the kinetic energy is four times as large even though the mass has not changed. This is why stopping distances increase so sharply with speed — the brakes must remove four times as much energy. Mark this one yourself: the squared term and the factor of four are the marks.",
      },
      {
        question: "Explain what happens to the energy supplied to a light bulb that is 20% efficient.",
        answer:
          "For every 100 J of electrical energy supplied, 20 J is usefully transferred to the light radiation store and leaves the bulb as light. The other 80 J is transferred to the thermal store of the bulb and then to the surroundings by heating, which is why the bulb becomes hot. That 80 J has not been destroyed — energy is always conserved — but it has been dissipated into the surroundings where it is spread out and can no longer be used for anything. Mark this one yourself: conservation of energy and the word DISSIPATED are both worth credit.",
      },
    ],
    misconceptions: [
      {
        wrong: "Energy is lost in a machine.",
        right:
          "It is DISSIPATED — transferred to the surroundings, usually as heat. Energy is always conserved; it just becomes useless.",
      },
      {
        wrong: "In Ek = ½mv² you halve the speed then square it.",
        right:
          "Square the speed FIRST, then multiply by the mass and halve. Order of operations matters, and this is the commonest slip in Physics.",
      },
      {
        wrong: "Energy and power are the same thing.",
        right:
          "Energy is measured in joules; power is the RATE of energy transfer, in watts. A watt is one joule per second.",
      },
      {
        wrong: "An efficient machine produces more energy than it uses.",
        right:
          "Nothing can. Efficiency is at most 100%, because output can never exceed input — that would create energy from nothing.",
      },
      {
        wrong: "A store and a pathway are the same thing.",
        right:
          "A store is WHERE energy is; a pathway is HOW it moves. Heating is a pathway, not a store; thermal is the store.",
      },
    ],
  },

  "physics/energy-resources": {
    summary:
      "Every source of energy involves a trade-off between reliability, cost and environmental damage. This topic covers the renewable and non-renewable resources, what each is actually good and bad at, and why no single one solves the problem — which is exactly what evaluation questions are asking you to discuss.",
    keyFacts: [
      {
        heading: "Renewable and non-renewable",
        points: [
          "NON-RENEWABLE resources will run out: coal, oil, natural gas and nuclear fuel.",
          "RENEWABLE resources are replenished as fast as they are used and will not run out.",
          "The renewables: solar, wind, hydroelectric, tidal, wave, geothermal and biofuel.",
          "Nuclear fuel is NOT renewable, even though it produces no carbon dioxide when generating.",
          "Most of the world's energy still comes from fossil fuels, though the share is falling.",
        ],
      },
      {
        heading: "Fossil fuels and nuclear",
        points: [
          "FOSSIL FUELS are reliable, cheap to extract and produce large amounts of energy on demand.",
          "But they release carbon dioxide, contributing to climate change, and sulfur dioxide, causing acid rain.",
          "NUCLEAR produces no carbon dioxide during generation and a very large output from a small mass of fuel.",
          "But it produces radioactive waste that must be stored safely for thousands of years, and the risk of an accident is small but serious.",
          "Nuclear power stations are also expensive to build and to decommission.",
        ],
      },
      {
        heading: "The renewables",
        points: [
          "SOLAR: no fuel cost and no emissions in use, but unreliable — no output at night, and less on cloudy days.",
          "WIND: no emissions in use, but unreliable and some people object to the visual and noise impact.",
          "HYDROELECTRIC: reliable and can respond very quickly to demand, but flooding a valley destroys habitats and displaces people.",
          "TIDAL: very predictable, because tides follow the moon, but barrages damage estuary habitats.",
          "GEOTHERMAL: reliable and low impact, but only practical where hot rocks are close to the surface.",
          "BIOFUEL: roughly carbon neutral in principle, but growing it competes with food production for land.",
        ],
      },
      {
        heading: "Making the comparison",
        points: [
          "RELIABILITY means whether the resource can supply energy whenever it is needed.",
          "Solar and wind are the least reliable; tidal, geothermal, nuclear and fossil fuels are the most.",
          "START-UP COST and running cost pull in different directions: renewables usually cost more to build and almost nothing to run.",
          "ENVIRONMENTAL impact includes emissions, habitat destruction, visual impact and waste.",
          "Political and social factors matter too — public opposition can stop a project that is technically sound.",
          "No single resource wins on every criterion, which is why a mix is used.",
        ],
      },
    ],
    flashcards: [
      { term: "Renewable resource", definition: "An energy resource that is replenished as fast as it is used and will not run out." },
      { term: "Non-renewable resource", definition: "An energy resource that will eventually be used up, such as coal, oil, gas or nuclear fuel." },
      { term: "Fossil fuel", definition: "Coal, oil or natural gas, formed from ancient organisms over millions of years." },
      { term: "Nuclear fuel", definition: "Uranium or plutonium, which releases energy by nuclear fission. Non-renewable but carbon-free in use." },
      { term: "Reliability", definition: "Whether an energy resource can supply energy whenever it is needed." },
      { term: "Solar power", definition: "Electricity or heating generated from sunlight; free to run but unreliable." },
      { term: "Hydroelectric power", definition: "Electricity generated from falling water, usually by damming a valley." },
      { term: "Tidal power", definition: "Electricity from the movement of tides — highly predictable but damaging to estuaries." },
      { term: "Geothermal power", definition: "Energy from hot rocks underground, reliable but only practical in certain locations." },
      { term: "Biofuel", definition: "Fuel made from plant or animal material, roughly carbon neutral but competing with food for land." },
      { term: "Carbon neutral", definition: "Absorbing as much carbon dioxide during growth as is released when burned." },
      { term: "Decommissioning", definition: "Safely shutting down and dismantling a power station at the end of its life." },
      { term: "Radioactive waste", definition: "Waste from nuclear power that remains dangerous for thousands of years." },
      { term: "National Grid", definition: "The network of cables and transformers distributing electricity across the country." },
    ],
    examTips: [
      {
        tip: "Nuclear is NOT renewable",
        detail:
          "It produces no carbon dioxide in use, which makes it low-carbon — but uranium runs out, so it is non-renewable. Both things are true at once.",
      },
      {
        tip: "Say WHY a resource is unreliable",
        detail:
          "Solar produces nothing at night; wind produces nothing when the air is still. The specific reason scores; 'it is unreliable' alone does not.",
      },
      {
        tip: "Separate start-up cost from running cost",
        detail:
          "Renewables usually cost a great deal to build and almost nothing to run. Fossil fuels are the reverse. That distinction is worth marks.",
      },
      {
        tip: "Give environmental impact beyond emissions",
        detail:
          "Hydroelectric floods valleys; tidal barrages wreck estuaries; wind farms affect the landscape. Zero-carbon is not the same as zero-impact.",
      },
      {
        tip: "Evaluation questions need a CONCLUSION",
        detail:
          "Weigh the factors and then choose, with a reason tied to the situation described. Listing advantages and disadvantages without deciding caps the mark.",
      },
      {
        tip: "Use the specific location in the question",
        detail:
          "Geothermal suits Iceland, tidal suits a large estuary, solar suits a sunny climate. Applying the resource to the place is what earns application marks.",
      },
    ],
    practice: [
      {
        question: "Is nuclear fuel renewable or non-renewable?",
        accept: ["non-renewable", "non renewable", "nonrenewable", "not renewable"],
        answer:
          "Non-renewable — uranium runs out. It is low-carbon in use, which is a different property entirely, and the two are often confused.",
      },
      {
        question: "Name one non-renewable energy resource other than nuclear.",
        accept: ["coal", "oil", "gas", "natural gas", "fossil fuels", "petroleum"],
        answer:
          "Coal, oil or natural gas — the three fossil fuels. All release carbon dioxide when burned, contributing to climate change.",
      },
      {
        question: "Which renewable resource is the most predictable, because it follows the moon?",
        accept: ["tidal", "tidal power", "tides"],
        answer:
          "Tidal. Tides can be predicted years in advance, which makes it far more reliable than wind or solar — but barrages damage estuary habitats.",
      },
      {
        question: "Which renewable resource produces no electricity at night?",
        accept: ["solar", "solar power", "sun", "solar panels"],
        answer:
          "Solar. It also produces less on cloudy days, which is exactly why it must be paired with storage or another resource.",
      },
      {
        question: "Which renewable resource requires hot rocks close to the surface?",
        accept: ["geothermal", "geothermal power"],
        answer:
          "Geothermal. It is reliable and has low environmental impact, but is only practical in places such as Iceland where the geology allows it.",
      },
      {
        question: "What is the main environmental drawback of hydroelectric power?",
        accept: ["flooding", "flooding a valley", "habitat destruction", "floods valleys", "destroys habitats", "displaces people"],
        answer:
          "Flooding a valley to make the reservoir, which destroys habitats and can displace communities. Being carbon-free does not mean impact-free.",
      },
      {
        question: "What is the main drawback of nuclear power regarding waste?",
        accept: ["radioactive waste", "radioactive", "waste stays dangerous", "dangerous for thousands of years", "waste storage"],
        answer:
          "It produces radioactive waste that remains dangerous for thousands of years and must be stored securely for all that time.",
      },
      {
        question: "Which fossil fuel pollutant causes acid rain?",
        accept: ["sulfur dioxide", "sulphur dioxide", "so2", "nitrogen oxides"],
        answer:
          "Sulfur dioxide, from sulfur impurities in the fuel. Nitrogen oxides from high-temperature combustion contribute as well.",
      },
      {
        question: "What term describes whether a resource can supply energy whenever it is needed?",
        accept: ["reliability", "reliable", "reliability of supply"],
        answer:
          "Reliability. It is usually the deciding factor: a resource that cannot supply on demand needs backup, which adds cost and emissions.",
      },
      {
        question: "Why is biofuel described as roughly carbon neutral?",
        accept: ["absorbs co2 as it grows", "plants absorb carbon dioxide", "absorbs carbon dioxide while growing", "takes in co2 growing", "photosynthesis absorbs it"],
        answer:
          "The plants absorb carbon dioxide as they grow, roughly balancing what is released when the fuel is burned. 'Roughly' matters — farming and transport still emit.",
      },
      {
        question: "Give one disadvantage of growing crops for biofuel.",
        accept: ["competes with food", "land for food", "uses farmland", "food production", "deforestation", "takes land from food"],
        answer:
          "It competes with food production for land, and can drive deforestation where new land is cleared to grow the crop.",
      },
      {
        question: "Which two renewable resources are the LEAST reliable?",
        accept: ["solar and wind", "wind and solar", "sun and wind"],
        answer:
          "Solar and wind. Neither can be controlled — output depends entirely on the weather and the time of day.",
      },
      {
        question: "Do renewables generally have higher start-up costs or higher running costs?",
        accept: ["start-up", "start up", "startup", "higher start-up costs", "building costs", "start-up costs"],
        answer:
          "Higher start-up costs. Once built, most renewables have almost no fuel cost, which is the reverse of fossil fuel stations.",
      },
      {
        question: "Give one reason a wind farm might face public opposition.",
        accept: ["visual impact", "noise", "looks", "spoils the view", "appearance", "birds", "eyesore"],
        answer:
          "Visual impact on the landscape, noise, or concerns about birds. Social and political objections can stop a technically sound project.",
      },
      {
        question: "A country generates 240 TWh from renewables out of 800 TWh in total. Calculate the percentage from renewables. Give the number only.",
        accept: ["30", "30%"],
        answer:
          "30%. (240 ÷ 800) × 100 = 30%. Data questions like this are extremely common on this topic — read the total carefully before dividing.",
      },
      {
        question: "A wind turbine produces 2 MW. How many turbines are needed to match a 1,000 MW power station? Give the number only.",
        accept: ["500"],
        answer:
          "500 turbines. 1,000 ÷ 2 = 500. This kind of comparison is why land use is a genuine objection to wind, even though it emits nothing in use.",
      },
      {
        question: "A solar panel receives 1,200 J and produces 240 J of electrical energy. Calculate its efficiency as a percentage. Give the number only.",
        accept: ["20", "20%"],
        answer:
          "20%. 240 ÷ 1,200 = 0.2, × 100 = 20%. Typical commercial panels are around this figure, which is why large areas are needed.",
      },
      {
        question: "A power station burns fuel supplying 3,000 MJ and generates 1,200 MJ of electricity. Calculate its efficiency as a percentage. Give the number only.",
        accept: ["40", "40%"],
        answer:
          "40%. 1,200 ÷ 3,000 = 0.4, × 100 = 40%. Most of the rest is dissipated as heat through the cooling towers.",
      },
      {
        question: "Renewables supply 45 TWh of a country's 300 TWh. Calculate the percentage from renewables. Give the number only.",
        accept: ["15", "15%"],
        answer:
          "15%. (45 ÷ 300) × 100 = 15%. Always check whether the question gives you the total or only the non-renewable part.",
      },
      {
        question: "Explain why nuclear power is described as low-carbon but not renewable. Write two or three sentences.",
        answer:
          "Nuclear power generates electricity by nuclear fission rather than by burning anything, so almost no carbon dioxide is released during generation — which is what makes it low-carbon. However, it relies on uranium, which exists in a finite quantity and will eventually be used up, so it does not meet the definition of renewable. Being low-carbon and being renewable are two separate properties, and nuclear has one but not the other. Mark this one yourself: the mark is for keeping the two properties distinct.",
      },
      {
        question: "A remote island community needs a reliable electricity supply. Evaluate which resource would suit them best.",
        answer:
          "The key requirement is reliability, which immediately weakens the case for solar and wind, since neither can be guaranteed to supply power when it is needed and both would require expensive storage or a backup generator. If the island has a significant tidal range, tidal power would be strong: it is highly predictable, though it has high start-up costs and damages estuary habitats. Geothermal would be excellent if the island is volcanic, being reliable with low impact, but is impossible otherwise. A diesel generator is reliable and cheap to install but expensive to fuel on a remote island and produces carbon dioxide. Overall the best answer depends on the island's geography — tidal or geothermal if the location allows, otherwise a combination of wind or solar with battery storage and a small backup generator. Mark this one yourself: full marks need reliability prioritised, at least two options weighed, and a conclusion that depends on the location.",
      },
    ],
    misconceptions: [
      {
        wrong: "Nuclear power is renewable because it does not burn fuel.",
        right:
          "Uranium is finite, so nuclear is non-renewable. It is low-CARBON, which is a completely different property.",
      },
      {
        wrong: "Renewable means environmentally harmless.",
        right:
          "Hydroelectric floods valleys, tidal barrages wreck estuaries, and biofuel competes with food. Renewable describes the fuel supply, not the impact.",
      },
      {
        wrong: "Renewables are more expensive overall.",
        right:
          "They usually cost more to BUILD and far less to RUN, since there is no fuel to buy. Which is cheaper depends on the timescale considered.",
      },
      {
        wrong: "Solar panels produce nothing on a cloudy day.",
        right:
          "They produce less, not nothing. They produce nothing at night, which is the genuine limitation.",
      },
      {
        wrong: "One resource could replace all the others.",
        right:
          "Each has a weakness — reliability, cost, location or impact. That is precisely why a mix is used, and why evaluation questions have no single right answer.",
      },
    ],
  },

  "physics/the-particle-model": {
    summary:
      "The particle model explains density, the three states of matter, and why a substance can absorb enormous amounts of energy while its temperature refuses to change. This topic is calculation-heavy — density and the two heat equations are all examinable — so the questions matter more than the reading.",
    keyFacts: [
      {
        heading: "Density",
        points: [
          "DENSITY = mass ÷ volume. The symbol is ρ (rho).",
          "Units are kg/m³ or g/cm³. Watch which the question uses — they differ by a factor of 1,000.",
          "Solids are usually densest because the particles are packed most closely; gases are least dense.",
          "Volume of a regular solid = length × width × height.",
          "Volume of an irregular solid: displacement in a eureka can — the water pushed out equals the object's volume.",
        ],
      },
      {
        heading: "The three states",
        points: [
          "SOLID: particles in fixed positions, vibrating. Fixed shape and volume, highest density.",
          "LIQUID: particles close but able to move past each other. Fixed volume, takes the container's shape.",
          "GAS: particles far apart, moving quickly and randomly. No fixed shape or volume.",
          "Changes of state are PHYSICAL changes — no new substance is made and the change is reversible.",
          "Mass is CONSERVED in a change of state: the number of particles does not change.",
          "Melting, boiling and evaporating take energy in; freezing and condensing give energy out.",
        ],
      },
      {
        heading: "Internal energy and heating",
        points: [
          "INTERNAL ENERGY is the total kinetic and potential energy of all the particles in a system.",
          "Heating a substance either raises its TEMPERATURE or changes its STATE — never both at once.",
          "SPECIFIC HEAT CAPACITY: E = m × c × Δθ. This is for a temperature change.",
          "SPECIFIC LATENT HEAT: E = m × L. This is for a change of state.",
          "Specific latent heat of FUSION is for melting or freezing; of VAPORISATION is for boiling or condensing.",
          "During a change of state the temperature stays CONSTANT, because the energy goes into breaking bonds between particles rather than speeding them up.",
        ],
      },
      {
        heading: "Gas pressure",
        points: [
          "Gas particles move randomly and collide with the container walls, exerting a force — that is pressure.",
          "Increasing the TEMPERATURE makes particles move faster, so collisions are harder and more frequent, raising pressure.",
          "Decreasing the VOLUME means the same particles hit the walls more often, so pressure rises.",
          "For a fixed mass of gas at constant temperature: pressure × volume = constant.",
          "Compressing a gas quickly does work on it, which increases its internal energy and its temperature — as a bicycle pump demonstrates.",
        ],
      },
    ],
    flashcards: [
      { term: "Density", definition: "Mass per unit volume: ρ = m ÷ V, measured in kg/m³ or g/cm³." },
      { term: "Eureka can", definition: "Apparatus for finding the volume of an irregular solid by measuring the water it displaces." },
      { term: "Internal energy", definition: "The total kinetic and potential energy of all the particles in a system." },
      { term: "Specific heat capacity", definition: "The energy needed to raise the temperature of 1 kg of a substance by 1°C." },
      { term: "Specific latent heat", definition: "The energy needed to change the state of 1 kg of a substance without changing its temperature." },
      { term: "Latent heat of fusion", definition: "The energy needed to melt 1 kg of a substance, or released when it freezes." },
      { term: "Latent heat of vaporisation", definition: "The energy needed to boil 1 kg of a substance, or released when it condenses." },
      { term: "Change of state", definition: "A physical change between solid, liquid and gas, which is reversible and conserves mass." },
      { term: "Physical change", definition: "A change where no new substance is made and which can be reversed." },
      { term: "Gas pressure", definition: "The force per unit area from gas particles colliding with the walls of their container." },
      { term: "Sublimation", definition: "A change directly from solid to gas without passing through the liquid state." },
      { term: "Condensation", definition: "The change from gas to liquid, which releases energy." },
      { term: "Evaporation", definition: "The change from liquid to gas at the surface, which can happen below the boiling point." },
      { term: "Absolute zero", definition: "The lowest possible temperature, 0 K or about −273°C, where particle motion is minimal." },
    ],
    examTips: [
      {
        tip: "Check whether the question wants kg/m³ or g/cm³",
        detail:
          "They differ by a factor of 1,000, so using the wrong one puts the answer out by three orders of magnitude. Read the units in the question first.",
      },
      {
        tip: "E = mcΔθ for temperature, E = mL for state",
        detail:
          "Two equations, two different jobs. Using the temperature one for a change of state is the classic error, and vice versa.",
      },
      {
        tip: "Temperature does NOT change during a change of state",
        detail:
          "The energy goes into breaking bonds between particles, not into speeding them up. That flat section on a heating graph is the mark.",
      },
      {
        tip: "Mass is conserved when state changes",
        detail:
          "Melting ice gives exactly the same mass of water. The particles are unchanged in number — only their arrangement differs.",
      },
      {
        tip: "Explain gas pressure through COLLISIONS",
        detail:
          "Particles hitting the walls exert a force. Faster or more frequent collisions mean higher pressure. Vague answers about 'more energy' score poorly.",
      },
      {
        tip: "A change of state is PHYSICAL, not chemical",
        detail:
          "No new substance is made and it is reversible. Describing melting as a chemical change loses the mark outright.",
      },
    ],
    workedExamples: [
      {
        question:
          "A block has a mass of 240 g and a volume of 300 cm³. Calculate its density.",
        steps: [
          "Write the equation: density = mass ÷ volume.",
          "The units given are grams and cm³, so the answer will be in g/cm³.",
          "= 240 ÷ 300.",
          "= 0.8 g/cm³. Less than 1, so this block would float on water.",
        ],
        answer: "0.8 g/cm³",
      },
      {
        question:
          "How much energy is needed to melt 0.5 kg of ice? (Specific latent heat of fusion of water = 334,000 J/kg)",
        steps: [
          "This is a change of STATE, so use E = m × L, not E = mcΔθ.",
          "Substitute: E = 0.5 × 334,000.",
          "= 167,000 J.",
          "Note the temperature stays at 0°C throughout — all that energy goes into breaking the bonds holding the ice together.",
        ],
        answer: "167,000 J (167 kJ)",
      },
    ],
    practice: [
      {
        question: "A block has a mass of 500 g and a volume of 250 cm³. Calculate its density in g/cm³. Give the number only.",
        accept: ["2"],
        answer:
          "2 g/cm³. Density = mass ÷ volume = 500 ÷ 250. Being denser than water, this block would sink.",
      },
      {
        question: "An object has a mass of 60 g and a volume of 20 cm³. Calculate its density in g/cm³. Give the number only.",
        accept: ["3"],
        answer:
          "3 g/cm³. 60 ÷ 20 = 3. Always check whether the question wants g/cm³ or kg/m³ — they differ by a factor of 1,000.",
      },
      {
        question: "A metal has a density of 8 g/cm³ and a volume of 5 cm³. Calculate its mass in grams. Give the number only.",
        accept: ["40"],
        answer:
          "40 g. Rearranging: mass = density × volume = 8 × 5 = 40. You need the equation in all three forms.",
      },
      {
        question: "How much energy is needed to melt 2 kg of ice? (L = 334,000 J/kg) Give the number only.",
        accept: ["668000", "668,000"],
        answer:
          "668,000 J. E = mL = 2 × 334,000. This is a change of state, so use E = mL rather than E = mcΔθ.",
      },
      {
        question: "How much energy is needed to boil 0.2 kg of water at 100°C? (L = 2,260,000 J/kg) Give the number only.",
        accept: ["452000", "452,000"],
        answer:
          "452,000 J. E = mL = 0.2 × 2,260,000. Note how much larger vaporisation is than fusion — boiling takes far more energy than melting.",
      },
      {
        question: "How much energy is needed to raise 4 kg of water by 5°C? (c = 4,200 J/kg°C) Give the number only.",
        accept: ["84000", "84,000"],
        answer:
          "84,000 J. E = mcΔθ = 4 × 4,200 × 5. This is a TEMPERATURE change, so use E = mcΔθ, not E = mL.",
      },
      {
        question: "What is the equation for density? Density = mass ÷ ______.",
        accept: ["volume", "v"],
        answer:
          "Volume. The symbol for density is ρ (rho), and you need to be able to rearrange it to find mass or volume too.",
      },
      {
        question: "In which state are particles packed most closely together?",
        accept: ["solid", "solids", "a solid"],
        answer:
          "Solid. That is why solids are usually the densest state, with gases the least dense by a very large margin.",
      },
      {
        question: "What happens to the temperature during a change of state?",
        accept: ["stays the same", "constant", "does not change", "stays constant", "no change", "remains constant"],
        answer:
          "It stays constant. All the energy supplied goes into breaking the bonds between particles rather than speeding them up.",
      },
      {
        question: "Is a change of state a physical or a chemical change?",
        accept: ["physical", "a physical change", "physical change"],
        answer:
          "Physical. No new substance is made and the change is reversible — melting ice gives you back exactly the same water.",
      },
      {
        question: "What is the total kinetic and potential energy of all particles in a system called?",
        accept: ["internal energy", "the internal energy"],
        answer:
          "Internal energy. Heating a substance increases it, either by raising the temperature or by changing the state.",
      },
      {
        question: "Which equation is used for a change of STATE: E = mcΔθ or E = mL?",
        accept: ["e = ml", "e=ml", "ml", "mass times latent heat"],
        answer:
          "E = mL. Use E = mcΔθ for a temperature change instead. Choosing the wrong equation is the most common error in this topic.",
      },
      {
        question: "What apparatus finds the volume of an irregular solid by displacement?",
        accept: ["eureka can", "a eureka can", "displacement can", "eureka"],
        answer:
          "A eureka can. The volume of water pushed out is exactly equal to the volume of the object, however awkward its shape.",
      },
      {
        question: "What happens to gas pressure if the temperature increases at constant volume?",
        accept: ["increases", "increase", "goes up", "rises", "higher"],
        answer:
          "It increases. The particles move faster, so they collide with the walls more often and with greater force.",
      },
      {
        question: "Explain why the temperature does not rise while ice is melting. Write two or three sentences.",
        answer:
          "Temperature depends on the average kinetic energy of the particles. While ice melts, the energy supplied is used to break the bonds holding the particles in their fixed positions, which increases their potential energy rather than their kinetic energy. Because the average kinetic energy does not increase, the thermometer reads a constant 0°C until every last bit of ice has melted. Mark this one yourself: the distinction between potential and kinetic energy is what earns the top mark.",
      },
      {
        question: "Explain why a gas exerts pressure on the walls of its container.",
        answer:
          "Gas particles move randomly at high speed in all directions. When a particle strikes a wall it changes direction, which means its momentum changes, and by Newton's laws that requires a force from the wall — and an equal force on the wall from the particle. With enormous numbers of particles colliding constantly, these individual forces add up to a steady average force spread over the wall's area, which is what we measure as pressure. Mark this one yourself: collisions and force per unit area are the two ideas being tested.",
      },
    ],
    misconceptions: [
      {
        wrong: "Mass changes when a substance melts.",
        right:
          "Mass is conserved — the same particles are present, just arranged differently. Only the arrangement and spacing change.",
      },
      {
        wrong: "Temperature keeps rising while something is boiling.",
        right:
          "It stays constant. The energy goes into separating particles, not speeding them up, which is why heating graphs have flat sections.",
      },
      {
        wrong: "Melting is a chemical change.",
        right:
          "It is physical. No new substance is made and it is fully reversible.",
      },
      {
        wrong: "E = mcΔθ works for melting as well as heating.",
        right:
          "Use E = mL for a change of state. Δθ would be zero during melting, which should tell you the other equation cannot apply.",
      },
      {
        wrong: "Gas pressure is caused by particles pushing against each other.",
        right:
          "It is caused by particles colliding with the CONTAINER WALLS. Between collisions, gas particles are far apart and barely interact.",
      },
    ],
  },

  "physics/forces-basics": {
    summary:
      "Forces explain why things move, stop, turn and stretch. This topic covers scalars and vectors, resultant forces, weight, work done, springs and moments — five equations in total, so it is worth practising the calculations until the rearrangements are automatic.",
    keyFacts: [
      {
        heading: "Scalars, vectors and types of force",
        points: [
          "A SCALAR has magnitude only: mass, speed, distance, energy, temperature.",
          "A VECTOR has magnitude AND direction: force, weight, velocity, displacement, acceleration, momentum.",
          "CONTACT forces need the objects to touch: friction, air resistance, tension, normal contact force.",
          "NON-CONTACT forces act at a distance: gravity, magnetism, electrostatic force.",
          "Forces are measured in NEWTONS and drawn as arrows, where the length shows the size and the arrow shows the direction.",
        ],
      },
      {
        heading: "Weight and resultant force",
        points: [
          "WEIGHT = mass × gravitational field strength: W = m × g. Weight is a FORCE, measured in newtons.",
          "MASS is a scalar measured in kilograms and does not change with location; WEIGHT does.",
          "So an astronaut's mass on the Moon is unchanged, but their weight is about a sixth of its value on Earth.",
          "The RESULTANT force is the single force that has the same effect as all the forces acting.",
          "Forces in the same direction add; forces in opposite directions subtract.",
          "If the resultant force is zero the forces are BALANCED, and the object stays still or continues at constant velocity.",
        ],
      },
      {
        heading: "Work done and springs",
        points: [
          "WORK DONE = force × distance moved along the line of the force: W = F × s.",
          "Work is measured in joules; one joule is one newton-metre.",
          "Work done against friction causes a rise in the thermal energy store of the objects.",
          "HOOKE'S LAW: force = spring constant × extension, F = k × e.",
          "This holds only up to the LIMIT OF PROPORTIONALITY — beyond that the graph curves and the equation fails.",
          "EXTENSION is the increase in length, not the total length. Always subtract the original.",
        ],
      },
      {
        heading: "Moments",
        points: [
          "A MOMENT is the turning effect of a force: moment = force × perpendicular distance from the pivot.",
          "Moments are measured in newton-metres (Nm).",
          "The PRINCIPLE OF MOMENTS: for a balanced object, total clockwise moments = total anticlockwise moments.",
          "A longer spanner gives a larger moment for the same force, which is why long handles make jobs easier.",
          "Levers and gears both work by changing the distance from the pivot, multiplying the turning effect.",
        ],
      },
    ],
    flashcards: [
      { term: "Scalar", definition: "A quantity with magnitude only, such as mass, speed or energy." },
      { term: "Vector", definition: "A quantity with both magnitude and direction, such as force, velocity or displacement." },
      { term: "Contact force", definition: "A force requiring objects to touch, such as friction or tension." },
      { term: "Non-contact force", definition: "A force acting at a distance, such as gravity, magnetism or electrostatic force." },
      { term: "Weight", definition: "The force of gravity on an object: W = mg, measured in newtons." },
      { term: "Mass", definition: "The amount of matter in an object, measured in kilograms, which does not change with location." },
      { term: "Resultant force", definition: "The single force with the same effect as all the forces acting on an object." },
      { term: "Balanced forces", definition: "Forces with a resultant of zero, so the object stays still or moves at constant velocity." },
      { term: "Work done", definition: "Energy transferred when a force moves an object: W = F × s, measured in joules." },
      { term: "Newton", definition: "The unit of force. One newton accelerates a mass of 1 kg at 1 m/s²." },
      { term: "Hooke's law", definition: "Force is proportional to extension up to the limit of proportionality: F = ke." },
      { term: "Spring constant", definition: "The stiffness of a spring, in N/m — a larger value means a stiffer spring." },
      { term: "Extension", definition: "The increase in length of a spring, found by subtracting the original length." },
      { term: "Limit of proportionality", definition: "The point beyond which force is no longer proportional to extension." },
      { term: "Moment", definition: "The turning effect of a force: moment = force × perpendicular distance from the pivot." },
      { term: "Principle of moments", definition: "For a balanced object, total clockwise moments equal total anticlockwise moments." },
    ],
    examTips: [
      {
        tip: "Mass and weight are different quantities",
        detail:
          "Mass in kilograms is a scalar and never changes. Weight in newtons is a force and depends on gravitational field strength.",
      },
      {
        tip: "Extension is the INCREASE in length",
        detail:
          "Subtract the original length before using F = ke. Using the total length is the commonest error in spring questions.",
      },
      {
        tip: "Use the PERPENDICULAR distance for moments",
        detail:
          "It is the distance at right angles from the pivot to the line of the force. A slanted distance gives the wrong answer.",
      },
      {
        tip: "Balanced forces do not mean stationary",
        detail:
          "A zero resultant means constant velocity, which may be zero or may not. A car at a steady 30 mph has balanced forces.",
      },
      {
        tip: "Draw force arrows to scale and label them",
        detail:
          "Length shows size, direction shows the direction of the force. An unlabelled arrow scores nothing even if it is drawn correctly.",
      },
      {
        tip: "Say where the energy went for work against friction",
        detail:
          "Into the thermal energy store of the objects and the surroundings. That is why brakes and rubbed hands get hot.",
      },
    ],
    workedExamples: [
      {
        question:
          "Calculate the weight of a 50 kg person on Earth. (g = 9.8 N/kg)",
        steps: [
          "Write the equation: W = m × g.",
          "Substitute: W = 50 × 9.8.",
          "= 490.",
          "Weight is a force, so the unit is newtons: 490 N.",
        ],
        answer: "490 N",
      },
      {
        question:
          "A spring with a spring constant of 200 N/m is stretched by 5 cm. Calculate the force applied.",
        steps: [
          "Convert the extension to metres FIRST: 5 cm = 0.05 m.",
          "Write the equation: F = k × e.",
          "Substitute: F = 200 × 0.05.",
          "= 10 N. Forgetting to convert cm to m would have given 1,000 N, which is a hundred times too big.",
        ],
        answer: "10 N",
      },
    ],
    practice: [
      {
        question: "Calculate the weight of a 20 kg object using g = 10 N/kg. Give the number only, in newtons.",
        accept: ["200"],
        answer:
          "200 N. W = mg = 20 × 10. Weight is a force in newtons, whereas mass is in kilograms — the two are not interchangeable.",
      },
      {
        question: "Calculate the weight of a 75 kg person using g = 10 N/kg. Give the number only, in newtons.",
        accept: ["750"],
        answer:
          "750 N. W = 75 × 10 = 750. On the Moon the same person's mass would still be 75 kg but their weight would be roughly a sixth of this.",
      },
      {
        question: "A force of 20 N moves an object 5 m. Calculate the work done in joules. Give the number only.",
        accept: ["100"],
        answer:
          "100 J. Work done = force × distance = 20 × 5. One joule is one newton-metre, so the units follow directly.",
      },
      {
        question: "A force of 8 N moves an object 3 m. Calculate the work done in joules. Give the number only.",
        accept: ["24"],
        answer:
          "24 J. W = F × s = 8 × 3 = 24. The distance must be measured along the line of the force.",
      },
      {
        question: "A spring has a spring constant of 50 N/m and is extended 0.4 m. Calculate the force in newtons. Give the number only.",
        accept: ["20"],
        answer:
          "20 N. F = ke = 50 × 0.4 = 20. Check the extension is in metres before substituting.",
      },
      {
        question: "A force of 30 N acts right and 12 N acts left. Calculate the resultant force in newtons. Give the number only.",
        accept: ["18"],
        answer:
          "18 N to the right. Forces in opposite directions subtract: 30 − 12 = 18. Always state the direction as well as the size.",
      },
      {
        question: "A force of 25 N acts at a perpendicular distance of 0.4 m from a pivot. Calculate the moment in Nm. Give the number only.",
        accept: ["10"],
        answer:
          "10 Nm. Moment = force × perpendicular distance = 25 × 0.4. Note the distance must be perpendicular to the line of the force.",
      },
      {
        question: "A spring is 12 cm long unstretched and 17 cm long when loaded. What is the extension in cm? Give the number only.",
        accept: ["5"],
        answer:
          "5 cm. Extension is the INCREASE in length: 17 − 12 = 5. Using the total length of 17 cm is the classic error here.",
      },
      {
        question: "Is force a scalar or a vector?",
        accept: ["vector", "a vector"],
        answer:
          "A vector — it has both size and direction. Mass, speed, distance and energy are scalars, having size only.",
      },
      {
        question: "Name one non-contact force.",
        accept: ["gravity", "magnetism", "magnetic", "electrostatic", "gravitational", "electrostatic force"],
        answer:
          "Gravity, magnetism or electrostatic force. These act at a distance, unlike friction or tension which need objects to touch.",
      },
      {
        question: "What is the unit of a moment?",
        accept: ["nm", "newton metre", "newton metres", "newton-metre", "n m"],
        answer:
          "The newton-metre (Nm). Do not confuse it with the joule, which is also a newton-metre but measures energy, not turning effect.",
      },
      {
        question: "If the resultant force on a moving object is zero, what happens to its velocity?",
        accept: ["stays the same", "constant", "unchanged", "constant velocity", "does not change", "stays constant"],
        answer:
          "It stays constant. Balanced forces do not mean stationary — a car travelling at a steady speed also has zero resultant force.",
      },
      {
        question: "What law states that force is proportional to extension up to a limit?",
        accept: ["hookes law", "hooke's law", "hooke", "hookes"],
        answer:
          "Hooke's law, F = ke. It holds only up to the limit of proportionality, beyond which the graph curves and the equation no longer applies.",
      },
      {
        question: "Where does the energy go when work is done against friction?",
        accept: ["thermal", "heat", "thermal energy store", "thermal store", "internal energy", "heats up"],
        answer:
          "Into the thermal energy store of the objects and the surroundings. That is why brakes get hot and why rubbing your hands warms them.",
      },
      {
        question: "Explain why an astronaut's mass is the same on the Moon but their weight is not. Write two or three sentences.",
        answer:
          "Mass is the amount of matter in an object, so it is unchanged wherever the object goes — the same number of particles are present. Weight is the force of gravity acting on that mass, calculated as W = mg, so it depends on the gravitational field strength of wherever the object is. The Moon's gravitational field strength is about a sixth of Earth's, so the astronaut's weight is about a sixth, even though their mass is identical. Mark this one yourself: mass as amount of matter and weight as a force are both needed.",
      },
      {
        question: "Explain why a longer spanner makes it easier to undo a tight bolt.",
        answer:
          "The turning effect of a force is its moment, calculated as force multiplied by the perpendicular distance from the pivot. A longer spanner increases that distance, so the same force applied at the end produces a larger moment. Since it is the moment that turns the bolt, a bigger moment means the bolt can be loosened with less effort — or a stubborn bolt can be shifted at all. Mark this one yourself: naming the moment equation and linking distance to turning effect is what earns the marks.",
      },
    ],
    misconceptions: [
      {
        wrong: "Mass and weight are the same thing.",
        right:
          "Mass is matter in kilograms and never changes. Weight is a force in newtons and depends on gravitational field strength.",
      },
      {
        wrong: "Balanced forces mean an object is stationary.",
        right:
          "They mean constant velocity, which can be zero OR steady motion. A car at a constant 30 mph has balanced forces.",
      },
      {
        wrong: "Extension means the length of the stretched spring.",
        right:
          "It is the INCREASE in length. Subtract the original length before using F = ke.",
      },
      {
        wrong: "A moment and work done are the same because both are force × distance.",
        right:
          "Work uses distance ALONG the force and gives energy in joules. A moment uses perpendicular distance and gives a turning effect in Nm.",
      },
      {
        wrong: "Hooke's law always applies to a spring.",
        right:
          "Only up to the limit of proportionality. Beyond that the spring deforms and the force is no longer proportional to extension.",
      },
    ],
  },

  "physics/electricity-basics": {
    summary:
      "Electricity is the movement of charge, and almost everything in this topic follows from three equations linking charge, current, potential difference, resistance and power. This topic covers those equations, circuit symbols, and the difference between series and parallel — which is where most marks in circuit questions actually go.",
    keyFacts: [
      {
        heading: "Charge, current and potential difference",
        points: [
          "CURRENT is the rate of flow of electric charge, measured in amperes (amps).",
          "CHARGE FLOW = current × time: Q = I × t. Charge is measured in coulombs.",
          "POTENTIAL DIFFERENCE is the energy transferred per unit charge, measured in volts.",
          "For a current to flow, the circuit must be CLOSED and there must be a source of potential difference.",
          "An AMMETER is connected in SERIES; a VOLTMETER is connected in PARALLEL across the component.",
        ],
      },
      {
        heading: "Resistance",
        points: [
          "RESISTANCE opposes the flow of charge, and is measured in ohms (Ω).",
          "OHM'S LAW: potential difference = current × resistance, V = I × R.",
          "An OHMIC CONDUCTOR at constant temperature has a resistance that does not change, giving a straight-line graph through the origin.",
          "A FILAMENT LAMP's resistance INCREASES as it heats up, so its graph curves.",
          "A DIODE has very high resistance in one direction, so current flows only one way.",
          "A THERMISTOR's resistance falls as temperature rises; an LDR's resistance falls as light intensity rises.",
        ],
      },
      {
        heading: "Series and parallel",
        points: [
          "In SERIES, the current is the SAME everywhere.",
          "In series, the potential difference is SHARED between components and adds up to the supply.",
          "In series, total resistance is the SUM of the individual resistances.",
          "In PARALLEL, the potential difference across each branch is the SAME and equals the supply.",
          "In parallel, the current is SHARED between branches and the branch currents add up to the total.",
          "Adding a resistor in parallel DECREASES total resistance, because it gives the charge another route.",
        ],
      },
      {
        heading: "Power and energy",
        points: [
          "POWER = potential difference × current: P = V × I.",
          "POWER = current squared × resistance: P = I² × R.",
          "ENERGY TRANSFERRED = power × time: E = P × t.",
          "ENERGY TRANSFERRED = charge flow × potential difference: E = Q × V.",
          "The National Grid uses step-up transformers to raise the potential difference, which reduces the current.",
          "Lower current means far less energy wasted as heat in the cables, since power wasted depends on I².",
        ],
      },
    ],
    flashcards: [
      { term: "Current", definition: "The rate of flow of electric charge, measured in amperes." },
      { term: "Charge flow", definition: "The quantity of charge that has passed: Q = I × t, measured in coulombs." },
      { term: "Potential difference", definition: "The energy transferred per unit charge, measured in volts." },
      { term: "Resistance", definition: "The opposition to the flow of charge, measured in ohms." },
      { term: "Ohm's law", definition: "Potential difference equals current times resistance: V = IR." },
      { term: "Ohmic conductor", definition: "A component whose resistance stays constant at a fixed temperature, giving a straight-line graph." },
      { term: "Filament lamp", definition: "A component whose resistance increases as it heats up, giving a curved graph." },
      { term: "Diode", definition: "A component with very high resistance in one direction, so current flows only one way." },
      { term: "Thermistor", definition: "A component whose resistance decreases as its temperature increases." },
      { term: "LDR", definition: "A light-dependent resistor, whose resistance decreases as light intensity increases." },
      { term: "Series circuit", definition: "A circuit with one loop, where the current is the same everywhere." },
      { term: "Parallel circuit", definition: "A circuit with branches, where each branch has the full supply potential difference." },
      { term: "Ammeter", definition: "An instrument measuring current, connected in series." },
      { term: "Voltmeter", definition: "An instrument measuring potential difference, connected in parallel across a component." },
      { term: "Coulomb", definition: "The unit of charge. One coulomb passes when a current of 1 A flows for 1 second." },
      { term: "Ohm", definition: "The unit of resistance. One ohm allows 1 A to flow with 1 V across it." },
    ],
    examTips: [
      {
        tip: "Ammeter in SERIES, voltmeter in PARALLEL",
        detail:
          "An ammeter must have the current pass through it; a voltmeter compares two points. Getting this wrong loses marks on every circuit diagram.",
      },
      {
        tip: "In series current is the same; in parallel p.d. is the same",
        detail:
          "Learn these as a contrasting pair. Nearly every circuit question tests one of them, and mixing them up wrecks the whole answer.",
      },
      {
        tip: "Adding a parallel resistor LOWERS total resistance",
        detail:
          "It counter-intuitively gives charge another route, so more current flows overall. Students almost always guess the opposite.",
      },
      {
        tip: "Explain the filament lamp graph through heating",
        detail:
          "As current increases the filament heats up, the ions vibrate more, electrons collide more often, and resistance rises. That chain is the mark.",
      },
      {
        tip: "P = I²R explains why the Grid uses high voltage",
        detail:
          "Power wasted depends on the SQUARE of the current, so reducing current cuts losses dramatically. Transformers raise p.d. to reduce current.",
      },
      {
        tip: "Check whether you need V = IR or P = VI",
        detail:
          "Read what the question gives you and what it wants. Writing down the quantities you have first makes the choice obvious.",
      },
    ],
    workedExamples: [
      {
        question:
          "A current of 2 A flows for 30 seconds. Calculate the charge that has flowed.",
        steps: [
          "Write the equation: Q = I × t.",
          "Substitute: Q = 2 × 30.",
          "= 60.",
          "Charge is measured in coulombs, so the answer is 60 C.",
        ],
        answer: "60 C",
      },
      {
        question:
          "A 12 V supply is connected across a 4 Ω resistor. Calculate the current, then the power dissipated.",
        steps: [
          "Rearrange Ohm's law: I = V ÷ R = 12 ÷ 4 = 3 A.",
          "Now use P = V × I.",
          "P = 12 × 3 = 36 W.",
          "Check with the other equation: P = I²R = 3² × 4 = 9 × 4 = 36 W. The two agree, which confirms the answer.",
        ],
        answer: "3 A and 36 W",
      },
    ],
    practice: [
      {
        question: "A current of 3 A flows for 20 seconds. Calculate the charge in coulombs. Give the number only.",
        accept: ["60"],
        answer:
          "60 C. Q = I × t = 3 × 20. Charge flow is simply current multiplied by the time it flows for.",
      },
      {
        question: "A current of 0.5 A flows for 120 seconds. Calculate the charge in coulombs. Give the number only.",
        accept: ["60"],
        answer:
          "60 C. Q = 0.5 × 120 = 60. Note the current can be less than 1 A — decimals are common in these questions.",
      },
      {
        question: "A 24 V supply is across an 8 Ω resistor. Calculate the current in amps. Give the number only.",
        accept: ["3"],
        answer:
          "3 A. Rearranging V = IR gives I = V ÷ R = 24 ÷ 8 = 3. You need Ohm's law in all three arrangements.",
      },
      {
        question: "A current of 2 A flows through a 6 Ω resistor. Calculate the potential difference in volts. Give the number only.",
        accept: ["12"],
        answer:
          "12 V. V = IR = 2 × 6 = 12. This is the equation in its original form, so no rearranging is needed.",
      },
      {
        question: "A 9 V supply drives a current of 3 A. Calculate the power in watts. Give the number only.",
        accept: ["27"],
        answer:
          "27 W. P = V × I = 9 × 3 = 27. If you also know the resistance you could check with P = I²R.",
      },
      {
        question: "A current of 4 A flows through a 5 Ω resistor. Calculate the power using P = I²R. Give the number only.",
        accept: ["80"],
        answer:
          "80 W. P = I²R = 4² × 5 = 16 × 5 = 80. Square the current FIRST — this is where most errors happen.",
      },
      {
        question: "A 60 W lamp runs for 300 seconds. Calculate the energy transferred in joules. Give the number only.",
        accept: ["18000", "18,000"],
        answer:
          "18,000 J. E = P × t = 60 × 300. Power is energy per second, so multiplying by seconds gives energy.",
      },
      {
        question: "How is an ammeter connected in a circuit?",
        accept: ["in series", "series"],
        answer:
          "In series, so the current it measures passes through it. A voltmeter, by contrast, goes in parallel across the component.",
      },
      {
        question: "How is a voltmeter connected in a circuit?",
        accept: ["in parallel", "parallel", "across the component", "in parallel across the component"],
        answer:
          "In parallel, across the component. It compares the energy per unit charge at two points, so it must be connected to both.",
      },
      {
        question: "In a SERIES circuit, what stays the same at every point?",
        accept: ["current", "the current"],
        answer:
          "The current. There is only one path, so every charge that passes one point must pass every other.",
      },
      {
        question: "In a PARALLEL circuit, what is the same across every branch?",
        accept: ["potential difference", "voltage", "pd", "p.d.", "the potential difference"],
        answer:
          "The potential difference, which equals the supply. The current, by contrast, is shared between the branches.",
      },
      {
        question: "Two 6 Ω resistors are connected in series. Calculate the total resistance in ohms. Give the number only.",
        accept: ["12"],
        answer:
          "12 Ω. In series, resistances simply add: 6 + 6 = 12. In parallel the total would be LOWER than either one.",
      },
      {
        question: "Does adding a resistor in parallel increase or decrease total resistance?",
        accept: ["decrease", "decreases", "lower", "reduces", "goes down", "decreased"],
        answer:
          "It decreases it. The extra branch gives charge another route, so more current flows overall — which is the opposite of what most people guess.",
      },
      {
        question: "Which component has a resistance that decreases as light intensity increases?",
        accept: ["ldr", "light dependent resistor", "light-dependent resistor"],
        answer:
          "An LDR — light-dependent resistor. A thermistor does the same thing with temperature, and both are used in sensing circuits.",
      },
      {
        question: "Explain why the resistance of a filament lamp increases as the current increases. Write two or three sentences.",
        answer:
          "As the current increases, more energy is transferred to the thermal store of the filament and its temperature rises. The metal ions in the filament then vibrate more vigorously, so the electrons flowing through collide with them more frequently. Those extra collisions make it harder for charge to flow, which is exactly what a higher resistance means — and it is why the current-potential difference graph curves instead of being a straight line. Mark this one yourself: heating, ion vibration and more collisions is the chain the marks follow.",
      },
      {
        question: "Explain why the National Grid transmits electricity at very high potential difference.",
        answer:
          "The power wasted heating the transmission cables is given by P = I²R, so it depends on the SQUARE of the current — halving the current cuts the losses to a quarter. Since power delivered is P = VI, transmitting the same power at a much higher potential difference means a much smaller current. Step-up transformers therefore raise the potential difference for transmission, and step-down transformers reduce it again to a safe level before it reaches homes. Mark this one yourself: the I² relationship is the key idea, and mentioning both transformers earns the final mark.",
      },
    ],
    misconceptions: [
      {
        wrong: "Adding more resistors always increases total resistance.",
        right:
          "In SERIES yes; in PARALLEL it decreases, because each new branch gives charge another route.",
      },
      {
        wrong: "Current is used up as it goes round a circuit.",
        right:
          "Current is the same everywhere in a series circuit. It is ENERGY that is transferred, not charge that is consumed.",
      },
      {
        wrong: "A voltmeter goes in series like an ammeter.",
        right:
          "A voltmeter goes in PARALLEL across the component, because it compares two points. Only the ammeter goes in series.",
      },
      {
        wrong: "A filament lamp is an ohmic conductor.",
        right:
          "Its resistance rises as it heats, so the graph curves. Only a component at constant temperature is ohmic.",
      },
      {
        wrong: "High voltage transmission is dangerous and pointless.",
        right:
          "It is what makes the Grid efficient, because losses depend on I². The p.d. is stepped down again before it reaches homes.",
      },
    ],
  },

  "physics/atomic-structure-and-radiation": {
    summary:
      "This topic covers what an atom is made of, how the model of it changed, and what happens when an unstable nucleus decays. Half-life is the calculation that matters most, and it is worth practising until working backwards from a count rate is automatic.",
    keyFacts: [
      {
        heading: "The atom and the changing model",
        points: [
          "Atoms have a radius of about 1 × 10⁻¹⁰ m; the nucleus is around 1/10,000 of that.",
          "Protons +1, neutrons 0, electrons −1. Almost all the mass is in the nucleus.",
          "ATOMIC NUMBER = protons; MASS NUMBER = protons + neutrons.",
          "ISOTOPES have the same protons but different numbers of neutrons.",
          "The PLUM PUDDING model was replaced after the ALPHA SCATTERING experiment showed a tiny, dense, positive nucleus.",
          "BOHR then showed electrons orbit in fixed shells; absorbing energy moves an electron to a higher level, and emitting it moves it back down.",
        ],
      },
      {
        heading: "Types of radiation",
        points: [
          "ALPHA (α) is a helium nucleus — 2 protons and 2 neutrons. Highly ionising, stopped by paper, range a few cm in air.",
          "BETA (β) is a fast electron from the nucleus. Moderately ionising, stopped by a few mm of aluminium, range about a metre.",
          "GAMMA (γ) is electromagnetic radiation. Weakly ionising, reduced by thick lead, and travels a very long way.",
          "The more IONISING a radiation is, the less penetrating it tends to be, and vice versa.",
          "A NEUTRON may also be emitted from the nucleus.",
          "Radioactive decay is RANDOM — you cannot predict which nucleus will decay or when.",
        ],
      },
      {
        heading: "Decay equations",
        points: [
          "ALPHA decay: the mass number falls by 4 and the atomic number falls by 2.",
          "BETA decay: the mass number is UNCHANGED and the atomic number RISES by 1.",
          "In beta decay a neutron turns into a proton and an electron, and the electron is emitted.",
          "GAMMA emission changes NEITHER the mass number nor the atomic number — it only removes energy.",
          "Both sides of a decay equation must balance for mass number and for atomic number.",
        ],
      },
      {
        heading: "Half-life and safety",
        points: [
          "HALF-LIFE is the time for the number of undecayed nuclei — or the count rate — to HALVE.",
          "After 1 half-life ½ remains; after 2, ¼; after 3, ⅛; after 4, 1/16.",
          "To find how many half-lives have passed, keep halving the starting value until you reach the final one, and count the steps.",
          "IRRADIATION is being exposed to radiation from a source outside you; it stops when you move away.",
          "CONTAMINATION is getting radioactive material on or inside you, and it continues until the material is removed.",
          "Contamination is generally more dangerous long-term because the source stays with you, especially for alpha emitters inside the body.",
        ],
      },
    ],
    flashcards: [
      { term: "Atomic number", definition: "The number of protons in a nucleus, which determines the element." },
      { term: "Mass number", definition: "The total number of protons and neutrons in a nucleus." },
      { term: "Isotope", definition: "Atoms of the same element with the same protons but different numbers of neutrons." },
      { term: "Alpha particle", definition: "A helium nucleus — 2 protons and 2 neutrons. Highly ionising, stopped by paper." },
      { term: "Beta particle", definition: "A fast-moving electron emitted from the nucleus, stopped by a few mm of aluminium." },
      { term: "Gamma ray", definition: "High-energy electromagnetic radiation, weakly ionising but very penetrating." },
      { term: "Ionising", definition: "Able to knock electrons off atoms, which is what makes radiation damaging to cells." },
      { term: "Half-life", definition: "The time taken for the number of undecayed nuclei, or the count rate, to halve." },
      { term: "Count rate", definition: "The number of decays detected per second, measured with a Geiger-Muller tube." },
      { term: "Activity", definition: "The rate at which nuclei decay, measured in becquerels." },
      { term: "Irradiation", definition: "Being exposed to radiation from an external source; it stops when you move away." },
      { term: "Contamination", definition: "Radioactive material getting onto or into an object or person, where it keeps emitting." },
      { term: "Background radiation", definition: "The low-level radiation always present from rocks, cosmic rays and other natural sources." },
      { term: "Random decay", definition: "The fact that it is impossible to predict which nucleus will decay, or when." },
      { term: "Geiger-Muller tube", definition: "The detector used to measure count rate." },
    ],
    examTips: [
      {
        tip: "Alpha: mass −4, atomic −2. Beta: mass same, atomic +1",
        detail:
          "Write these two lines down before attempting any decay equation. They answer every nuclear equation question in the paper.",
      },
      {
        tip: "Count half-lives by halving repeatedly",
        detail:
          "800 → 400 → 200 → 100 is three steps, so three half-lives. Counting the arrows is more reliable than trying to do it in one go.",
      },
      {
        tip: "Ionising and penetrating are OPPOSITE",
        detail:
          "Alpha is the most ionising and least penetrating; gamma the reverse. Getting these the wrong way round wrecks any safety question.",
      },
      {
        tip: "Irradiation stops; contamination continues",
        detail:
          "That single difference is the whole answer to most safety questions, and it explains why contamination is the greater long-term risk.",
      },
      {
        tip: "Decay is RANDOM but half-life is predictable",
        detail:
          "You cannot say which nucleus decays next, but with vast numbers the average behaviour is highly predictable. Both halves matter.",
      },
      {
        tip: "Subtract background radiation before calculating",
        detail:
          "If a question gives a background count, take it off the readings first. Forgetting this is a standard trap.",
      },
    ],
    workedExamples: [
      {
        question:
          "A sample's count rate falls from 800 counts per minute to 100. How many half-lives have passed?",
        steps: [
          "Halve repeatedly and count the steps: 800 → 400 is one.",
          "400 → 200 is two.",
          "200 → 100 is three.",
          "So three half-lives have passed. If each half-life were 5 years, that would be 15 years in total.",
        ],
        answer: "3 half-lives",
      },
      {
        question:
          "A source has a half-life of 4 hours and an initial count rate of 640 counts per minute. What will the count rate be after 12 hours?",
        steps: [
          "Find how many half-lives: 12 ÷ 4 = 3 half-lives.",
          "Halve three times: 640 → 320 (one).",
          "320 → 160 (two).",
          "160 → 80 (three). So the count rate is 80 counts per minute.",
        ],
        answer: "80 counts per minute",
      },
    ],
    practice: [
      {
        question: "A count rate falls from 1,600 to 200. How many half-lives have passed? Give the number only.",
        accept: ["3", "three"],
        answer:
          "3. Halve step by step: 1,600 → 800 → 400 → 200, which is three steps. Counting the arrows is far safer than guessing.",
      },
      {
        question: "A count rate falls from 480 to 60. How many half-lives have passed? Give the number only.",
        accept: ["3", "three"],
        answer:
          "3. 480 → 240 → 120 → 60. Three halvings, so three half-lives, whatever the actual time each one takes.",
      },
      {
        question: "A source has a half-life of 5 years. What fraction remains after 15 years? Give it as 1 over a number, or a decimal.",
        accept: ["1/8", "0.125", "one eighth", "an eighth"],
        answer:
          "One eighth. 15 ÷ 5 = 3 half-lives, and halving three times gives ½ × ½ × ½ = ⅛.",
      },
      {
        question: "A source starts at 3,200 counts per minute with a half-life of 2 hours. What is the count rate after 6 hours? Give the number only.",
        accept: ["400"],
        answer:
          "400. 6 ÷ 2 = 3 half-lives; 3,200 → 1,600 → 800 → 400. Work out the number of half-lives first, then halve that many times.",
      },
      {
        question: "After 4 half-lives, what fraction of the original nuclei remain? Give it as 1 over a number.",
        accept: ["1/16", "0.0625", "one sixteenth"],
        answer:
          "One sixteenth. Each half-life halves what is left: ½, ¼, ⅛, 1/16 after four.",
      },
      {
        question: "In alpha decay, by how much does the mass number decrease? Give the number only.",
        accept: ["4", "four"],
        answer:
          "4. An alpha particle is a helium nucleus with 2 protons and 2 neutrons, so it takes 4 from the mass number and 2 from the atomic number.",
      },
      {
        question: "In alpha decay, by how much does the atomic number decrease? Give the number only.",
        accept: ["2", "two"],
        answer:
          "2, because the alpha particle carries away two protons. The mass number falls by 4 at the same time.",
      },
      {
        question: "In beta decay, by how much does the atomic number change? Give the number only, with a sign if needed.",
        accept: ["1", "+1"],
        answer:
          "It increases by 1. A neutron becomes a proton and an electron, the electron is emitted, and the mass number is unchanged.",
      },
      {
        question: "Which type of radiation is stopped by a sheet of paper?",
        accept: ["alpha", "alpha particle", "alpha radiation"],
        answer:
          "Alpha. It is the most ionising and therefore the least penetrating — it gives up its energy very quickly.",
      },
      {
        question: "Which type of radiation is stopped by a few millimetres of aluminium?",
        accept: ["beta", "beta particle", "beta radiation"],
        answer:
          "Beta — a fast electron. Alpha is stopped by paper and gamma is only reduced, not stopped, by thick lead.",
      },
      {
        question: "Which type of radiation is the most penetrating?",
        accept: ["gamma", "gamma ray", "gamma rays", "gamma radiation"],
        answer:
          "Gamma. It is the least ionising and the most penetrating — ionising power and penetrating power run in opposite directions.",
      },
      {
        question: "What is a beta particle?",
        accept: ["an electron", "electron", "a fast electron", "fast moving electron", "high speed electron"],
        answer:
          "A fast-moving electron emitted from the nucleus, formed when a neutron turns into a proton and an electron.",
      },
      {
        question: "What is the term for being exposed to radiation from an external source?",
        accept: ["irradiation", "irradiated"],
        answer:
          "Irradiation. It stops as soon as you move away from the source, unlike contamination which stays with you.",
      },
      {
        question: "What is the term for radioactive material getting onto or inside you?",
        accept: ["contamination", "contaminated"],
        answer:
          "Contamination. It is generally the greater long-term danger, because the source keeps emitting until it is removed.",
      },
      {
        question: "Explain why alpha radiation is the most dangerous if the source is inside the body. Write two or three sentences.",
        answer:
          "Alpha particles are the most strongly ionising of the three, so they do the most damage to the cells they pass through. Outside the body this matters little, because they cannot penetrate skin and are stopped by a few centimetres of air. Inside the body, though, there is nothing to stop them, so all that ionising power is delivered directly into living tissue over a very short range — which is exactly why contamination by an alpha emitter is so much more serious than irradiation by one. Mark this one yourself: linking high ionisation to short range, and to being inside the body, is what earns the marks.",
      },
      {
        question: "Explain what half-life means and why radioactive decay is described as random.",
        answer:
          "Half-life is the time taken for the number of undecayed nuclei in a sample, or its measured count rate, to fall to half its starting value. Decay is random because it is impossible to predict which particular nucleus will decay next, or when any individual one will do so — nothing triggers it and nothing about a nucleus's history changes its chance. The two ideas are compatible because a sample contains such an enormous number of nuclei that, although each individual event is unpredictable, the average behaviour of the whole sample is highly predictable. Mark this one yourself: full marks need the definition, the randomness, AND the explanation of why both can be true at once.",
      },
    ],
    misconceptions: [
      {
        wrong: "Half-life is the time for a source to become safe.",
        right:
          "It is the time for the count rate to HALVE. After one half-life half the activity remains, which may still be dangerous.",
      },
      {
        wrong: "Gamma is the most dangerous because it is the most penetrating.",
        right:
          "It depends where the source is. Gamma is worse from outside; alpha is far worse inside the body because it is the most ionising.",
      },
      {
        wrong: "A beta particle is an electron from the outer shells.",
        right:
          "It comes from the NUCLEUS, created when a neutron turns into a proton and an electron.",
      },
      {
        wrong: "Irradiation makes an object radioactive.",
        right:
          "Irradiating something does not make it a source. Only CONTAMINATION — radioactive material actually on or in it — does that.",
      },
      {
        wrong: "Radioactive decay can be predicted for individual nuclei.",
        right:
          "It is entirely random. Half-life describes the average behaviour of enormous numbers, not any individual nucleus.",
      },
    ],
  },

  // ─── YEAR 10 ──────────────────────────────────────────────────────────────

  "physics/electrical-circuits": {
    summary:
      "This topic takes the electricity equations from Year 9 and applies them to real circuits. The whole subject reduces to two rules — in series the current is shared nowhere and the potential difference is shared out; in parallel it is the other way round — plus knowing what happens to total resistance when you add components.",
    keyFacts: [
      {
        heading: "Series circuits",
        points: [
          "There is only ONE path, so the CURRENT is the same at every point.",
          "The POTENTIAL DIFFERENCE is shared between the components and adds up to the supply.",
          "Total resistance is the SUM of the individual resistances: R = R₁ + R₂.",
          "Adding a component in series therefore INCREASES total resistance and DECREASES the current.",
          "If one component breaks, the circuit is broken and everything stops.",
        ],
      },
      {
        heading: "Parallel circuits",
        points: [
          "Each branch has the FULL supply potential difference across it.",
          "The CURRENT is shared between branches, and the branch currents add up to the total.",
          "Total resistance is LESS than the smallest individual resistance.",
          "Adding a resistor in parallel DECREASES total resistance, because charge gains another route.",
          "If one branch breaks, the others keep working — which is why house lighting is wired in parallel.",
          "Two identical resistors in parallel give a total of half the value of one of them.",
        ],
      },
      {
        heading: "Component behaviour",
        points: [
          "A FIXED RESISTOR at constant temperature is ohmic: the I-V graph is a straight line through the origin.",
          "A FILAMENT LAMP's resistance rises as it heats, so the graph curves and flattens.",
          "A DIODE conducts in one direction only, so the graph is flat then rises sharply.",
          "A THERMISTOR's resistance falls as temperature rises — used in thermostats and fire alarms.",
          "An LDR's resistance falls as light intensity rises — used in automatic street lights.",
        ],
      },
      {
        heading: "Investigating circuits",
        points: [
          "To find resistance: measure current with an ammeter in series and p.d. with a voltmeter in parallel, then use R = V ÷ I.",
          "A VARIABLE RESISTOR changes the current so several pairs of readings can be taken.",
          "Take repeats and plot a graph rather than relying on a single pair of readings.",
          "Keep the temperature constant, or the resistance of the wire itself will change and spoil the result.",
          "Switch off between readings so the component does not heat up during the experiment.",
        ],
      },
    ],
    flashcards: [
      { term: "Series circuit", definition: "A circuit with a single path, where the current is the same at every point." },
      { term: "Parallel circuit", definition: "A circuit with branches, where each branch has the full supply potential difference." },
      { term: "Total resistance in series", definition: "The sum of the individual resistances: R = R1 + R2." },
      { term: "Total resistance in parallel", definition: "Always less than the smallest individual resistance, because charge gains another route." },
      { term: "Fixed resistor", definition: "An ohmic component whose resistance stays constant at a fixed temperature." },
      { term: "Filament lamp", definition: "A component whose resistance increases as it heats up, giving a curved I-V graph." },
      { term: "Diode", definition: "A component that conducts in one direction only." },
      { term: "Thermistor", definition: "A resistor whose resistance falls as temperature rises." },
      { term: "LDR", definition: "A light-dependent resistor, whose resistance falls as light intensity rises." },
      { term: "Variable resistor", definition: "A resistor whose value can be changed, used to vary the current in an investigation." },
      { term: "I-V graph", definition: "A graph of current against potential difference, whose shape identifies the component." },
      { term: "Ohmic conductor", definition: "A component giving a straight line through the origin on an I-V graph." },
      { term: "Ammeter", definition: "An instrument measuring current, connected in series." },
      { term: "Voltmeter", definition: "An instrument measuring potential difference, connected in parallel across a component." },
    ],
    examTips: [
      {
        tip: "Series: same current. Parallel: same p.d.",
        detail:
          "Write both down before starting any circuit question. Nearly every mark in this topic depends on getting them the right way round.",
      },
      {
        tip: "Parallel LOWERS total resistance",
        detail:
          "It is counter-intuitive, and almost everyone guesses the opposite. Two identical resistors in parallel give half the resistance of one.",
      },
      {
        tip: "Identify components from the graph SHAPE",
        detail:
          "Straight line through origin means ohmic; an S-shaped curve means a filament lamp; flat then sharply rising means a diode.",
      },
      {
        tip: "Say WHY house lighting is parallel",
        detail:
          "Each lamp gets the full mains p.d., and one failing does not stop the others. Both reasons are worth marks.",
      },
      {
        tip: "Control the temperature in resistance experiments",
        detail:
          "A wire heats up as current flows and its resistance changes, so switch off between readings. This is a standard evaluation point.",
      },
      {
        tip: "Check your answer against the circuit",
        detail:
          "In parallel, total resistance must be less than the smallest branch. If your answer is bigger, you have used the series rule by mistake.",
      },
    ],
    workedExamples: [
      {
        question:
          "Two resistors of 4 Ω and 6 Ω are connected in series to a 20 V supply. Calculate the total resistance and the current.",
        steps: [
          "In series, resistances add: R = 4 + 6 = 10 Ω.",
          "Rearrange Ohm's law to find current: I = V ÷ R.",
          "I = 20 ÷ 10.",
          "= 2 A. Because it is a series circuit, this same 2 A flows through both resistors.",
        ],
        answer: "10 Ω and 2 A",
      },
    ],
    practice: [
      {
        question: "Two resistors of 5 Ω and 7 Ω are in series. Calculate the total resistance in ohms. Give the number only.",
        accept: ["12"],
        answer:
          "12 Ω. In series resistances simply add: 5 + 7 = 12. In parallel the total would be less than 5 Ω.",
      },
      {
        question: "Three 4 Ω resistors are in series. Calculate the total resistance in ohms. Give the number only.",
        accept: ["12"],
        answer:
          "12 Ω. 4 + 4 + 4 = 12. Every extra component in series adds resistance and therefore reduces the current.",
      },
      {
        question: "Two identical 8 Ω resistors are in parallel. Calculate the total resistance in ohms. Give the number only.",
        accept: ["4"],
        answer:
          "4 Ω. Two identical resistors in parallel give half the value of one. Note it is LESS than either resistor, as it always must be.",
      },
      {
        question: "A 12 V supply is across a total resistance of 3 Ω. Calculate the current in amps. Give the number only.",
        accept: ["4"],
        answer:
          "4 A. I = V ÷ R = 12 ÷ 3 = 4. Ohm's law is needed in all three rearrangements throughout this topic.",
      },
      {
        question: "In a parallel circuit, branch currents are 2 A and 3 A. Calculate the total current in amps. Give the number only.",
        accept: ["5"],
        answer:
          "5 A. In parallel the branch currents add to give the total: 2 + 3 = 5. In series the current would be the same everywhere instead.",
      },
      {
        question: "In a series circuit with a 9 V supply, one component has 4 V across it. Calculate the p.d. across the other. Give the number only.",
        accept: ["5"],
        answer:
          "5 V. In series the potential differences share out and add to the supply: 9 − 4 = 5.",
      },
      {
        question: "A 6 Ω resistor carries 2 A. Calculate the potential difference across it in volts. Give the number only.",
        accept: ["12"],
        answer:
          "12 V. V = IR = 2 × 6 = 12. This is Ohm's law in its original form.",
      },
      {
        question: "In a SERIES circuit, what is the same at every point?",
        accept: ["current", "the current"],
        answer:
          "The current. There is only one path, so every charge passing one point must pass every other point too.",
      },
      {
        question: "In a PARALLEL circuit, what is the same across every branch?",
        accept: ["potential difference", "voltage", "pd", "p.d.", "the potential difference"],
        answer:
          "The potential difference, equal to the supply. The current is shared between the branches instead.",
      },
      {
        question: "Does adding a resistor in parallel increase or decrease the total resistance?",
        accept: ["decrease", "decreases", "reduces", "lower", "goes down"],
        answer:
          "It decreases it. The extra branch gives charge another route, so more total current flows for the same supply.",
      },
      {
        question: "Which component gives a straight line through the origin on an I-V graph?",
        accept: ["fixed resistor", "resistor", "ohmic conductor", "a resistor", "ohmic"],
        answer:
          "A fixed resistor at constant temperature — an ohmic conductor. A filament lamp curves, and a diode is flat then rises sharply.",
      },
      {
        question: "Which component conducts in one direction only?",
        accept: ["diode", "a diode", "the diode"],
        answer:
          "A diode. Its I-V graph is flat in the reverse direction and rises steeply in the forward direction.",
      },
      {
        question: "Which component's resistance falls as temperature rises?",
        accept: ["thermistor", "a thermistor", "the thermistor"],
        answer:
          "A thermistor. It is used in thermostats and fire alarms, where a temperature change needs to alter a circuit.",
      },
      {
        question: "Why is house lighting wired in parallel?",
        accept: ["each gets full voltage", "one failing doesnt stop others", "full pd across each", "independent", "so one can fail", "each lamp gets full mains voltage"],
        answer:
          "Each lamp receives the full mains potential difference, and one lamp failing does not break the circuit for the others.",
      },
      {
        question: "Explain why the current decreases when another resistor is added in series. Write two or three sentences.",
        answer:
          "In a series circuit the total resistance is the sum of the individual resistances, so adding another component increases the total. The supply potential difference is unchanged, and Ohm's law rearranges to I = V ÷ R, so a larger resistance with the same potential difference must produce a smaller current. Physically, the charge now has more opposition to overcome along its single path. Mark this one yourself: the marks are for resistances adding AND for applying I = V ÷ R.",
      },
      {
        question: "Explain how you would measure the resistance of a component in the lab.",
        answer:
          "Connect the component in series with a battery, an ammeter and a variable resistor, and connect a voltmeter in parallel across the component. Use the variable resistor to change the current, and record several pairs of current and potential difference readings rather than relying on one. Calculate resistance from R = V ÷ I for each pair, or plot V against I and use the gradient. Switch the circuit off between readings so the component does not heat up, since a temperature change would alter the resistance and spoil the result. Mark this one yourself: the circuit layout, several readings, and controlling temperature are the three things worth credit.",
      },
    ],
    misconceptions: [
      {
        wrong: "Adding components always increases total resistance.",
        right:
          "Only in series. In parallel it DECREASES, because each new branch gives charge an additional route.",
      },
      {
        wrong: "Current gets used up as it passes through components.",
        right:
          "In series the current is identical everywhere. Energy is transferred, but charge is not consumed.",
      },
      {
        wrong: "Total resistance in parallel is the average of the branches.",
        right:
          "It is always LESS than the smallest branch. Two identical resistors in parallel give half of one.",
      },
      {
        wrong: "A filament lamp is ohmic.",
        right:
          "Its resistance rises as it heats, so the graph curves. Only a component at constant temperature is ohmic.",
      },
    ],
  },

  "physics/mains-electricity": {
    summary:
      "Mains electricity is where physics meets everyday safety. This topic covers direct and alternating current, the three wires in a plug, how fuses and earthing protect you, and the power and energy calculations that explain why some appliances cost so much more to run than others.",
    keyFacts: [
      {
        heading: "AC, DC and the mains supply",
        points: [
          "DIRECT CURRENT (dc) flows one way only — from a cell or battery.",
          "ALTERNATING CURRENT (ac) repeatedly changes direction — this is what mains supplies.",
          "UK mains is about 230 V at a frequency of 50 Hz, meaning it changes direction 50 times per second.",
          "The frequency is the number of complete cycles per second.",
          "Mains is ac because it is far easier to change the potential difference with transformers, which the National Grid depends on.",
        ],
      },
      {
        heading: "The three wires",
        points: [
          "LIVE wire, brown, carries the alternating potential difference from the supply at about 230 V.",
          "NEUTRAL wire, blue, completes the circuit and is at close to 0 V.",
          "EARTH wire, green and yellow, is a safety wire at 0 V that carries current only if there is a fault.",
          "The live wire is dangerous even when a switch is off, because it is still at 230 V relative to earth.",
          "Touching the live wire creates a large potential difference across your body, so a current flows through you to earth.",
        ],
      },
      {
        heading: "Fuses, earthing and circuit breakers",
        points: [
          "A FUSE is a thin wire that melts and breaks the circuit if the current exceeds its rating.",
          "The fuse must be in the LIVE wire, so that the appliance is fully disconnected from the supply.",
          "Choose the next fuse rating ABOVE the normal operating current of the appliance.",
          "EARTHING gives a fault current a low-resistance path to earth, which makes the current large enough to blow the fuse.",
          "DOUBLE INSULATION means the case cannot become live, so no earth wire is needed.",
          "A CIRCUIT BREAKER does the same job as a fuse but switches off faster and can be reset rather than replaced.",
        ],
      },
      {
        heading: "Power and energy",
        points: [
          "POWER = potential difference × current: P = V × I.",
          "POWER = current squared × resistance: P = I² × R.",
          "ENERGY TRANSFERRED = power × time: E = P × t, in joules when time is in seconds.",
          "Domestic energy is billed in KILOWATT-HOURS: energy in kWh = power in kW × time in hours.",
          "The higher an appliance's power, the faster it transfers energy and the more it costs to run.",
          "Cost = energy in kWh × cost per kWh.",
        ],
      },
    ],
    flashcards: [
      { term: "Direct current", definition: "Current that flows in one direction only, supplied by a cell or battery." },
      { term: "Alternating current", definition: "Current that repeatedly changes direction, as supplied by the mains." },
      { term: "Mains supply", definition: "UK domestic electricity, about 230 V at a frequency of 50 Hz." },
      { term: "Live wire", definition: "The brown wire carrying the alternating potential difference at about 230 V." },
      { term: "Neutral wire", definition: "The blue wire completing the circuit, at close to 0 V." },
      { term: "Earth wire", definition: "The green and yellow safety wire at 0 V, which carries current only if there is a fault." },
      { term: "Fuse", definition: "A thin wire that melts if the current exceeds its rating, breaking the circuit." },
      { term: "Circuit breaker", definition: "A switch that trips when the current is too high; faster than a fuse and resettable." },
      { term: "Earthing", definition: "Connecting a metal case to earth so a fault current blows the fuse instead of shocking the user." },
      { term: "Double insulation", definition: "A plastic case that cannot become live, so no earth wire is needed." },
      { term: "Kilowatt-hour", definition: "The unit used to bill domestic energy: the energy used by a 1 kW appliance in 1 hour." },
      { term: "Frequency", definition: "The number of complete cycles per second, measured in hertz." },
      { term: "National Grid", definition: "The system of cables and transformers distributing electricity across the country." },
      { term: "Step-up transformer", definition: "A transformer that increases potential difference and decreases current for transmission." },
    ],
    examTips: [
      {
        tip: "The fuse goes in the LIVE wire",
        detail:
          "Putting it in the neutral would break the circuit but leave the appliance connected to 230 V. The reason is the mark, not the fact.",
      },
      {
        tip: "Choose the next fuse rating ABOVE the operating current",
        detail:
          "A 3 A appliance needs a 5 A fuse, not a 3 A one, or it would blow every time the appliance switched on.",
      },
      {
        tip: "Explain earthing through the FUSE",
        detail:
          "The earth wire gives a low-resistance path, so a large current flows and blows the fuse — that is what makes it safe, not the earth wire itself.",
      },
      {
        tip: "Watch the units in energy calculations",
        detail:
          "Joules need power in watts and time in SECONDS. Kilowatt-hours need power in kW and time in HOURS. Mixing them is the classic error.",
      },
      {
        tip: "The live wire is dangerous even when switched off",
        detail:
          "It remains at 230 V relative to earth, so touching it still creates a large potential difference across your body.",
      },
      {
        tip: "Say why mains is ac",
        detail:
          "Because transformers only work with ac, and the National Grid needs them to step the potential difference up and down.",
      },
    ],
    workedExamples: [
      {
        question:
          "A kettle operates at 230 V and draws a current of 10 A. Calculate its power.",
        steps: [
          "Write the equation: P = V × I.",
          "Substitute: P = 230 × 10.",
          "= 2,300.",
          "Power is in watts, so 2,300 W, or 2.3 kW.",
        ],
        answer: "2,300 W (2.3 kW)",
      },
      {
        question:
          "A 2 kW heater runs for 3 hours. Calculate the energy used in kilowatt-hours and the cost at 30p per kWh.",
        steps: [
          "Energy in kWh = power in kW × time in hours.",
          "= 2 × 3 = 6 kWh.",
          "Cost = energy × price per unit = 6 × 30p.",
          "= 180p, which is £1.80.",
        ],
        answer: "6 kWh, costing £1.80",
      },
    ],
    practice: [
      {
        question: "What is the potential difference of the UK mains supply, in volts? Give the number only.",
        accept: ["230"],
        answer:
          "About 230 V, at a frequency of 50 Hz. Both numbers are worth memorising because they appear in most mains questions.",
      },
      {
        question: "What is the frequency of the UK mains supply, in hertz? Give the number only.",
        accept: ["50"],
        answer:
          "50 Hz — the current changes direction 50 times per second. That is what makes it alternating rather than direct current.",
      },
      {
        question: "An appliance uses 230 V and 5 A. Calculate its power in watts. Give the number only.",
        accept: ["1150", "1,150"],
        answer:
          "1,150 W. P = V × I = 230 × 5. Multiplying by the mains voltage is the most common calculation in this topic.",
      },
      {
        question: "An appliance uses 230 V and 2 A. Calculate its power in watts. Give the number only.",
        accept: ["460"],
        answer:
          "460 W. P = 230 × 2 = 460. Compare this with a kettle at over 2,000 W — the difference explains the running cost.",
      },
      {
        question: "A 3 kW appliance runs for 4 hours. Calculate the energy used in kWh. Give the number only.",
        accept: ["12"],
        answer:
          "12 kWh. Energy in kWh = power in kW × time in hours = 3 × 4. Note this needs kW and hours, NOT watts and seconds.",
      },
      {
        question: "A 0.5 kW lamp runs for 6 hours. Calculate the energy used in kWh. Give the number only.",
        accept: ["3"],
        answer:
          "3 kWh. 0.5 × 6 = 3. Converting watts to kilowatts first — dividing by 1,000 — is essential for this equation.",
      },
      {
        question: "8 kWh of energy costs 25p per kWh. Calculate the total cost in pence. Give the number only.",
        accept: ["200"],
        answer:
          "200p, or £2.00. Cost = energy × price per unit = 8 × 25. Check whether the question wants pence or pounds.",
      },
      {
        question: "A 100 W lamp runs for 60 seconds. Calculate the energy transferred in joules. Give the number only.",
        accept: ["6000", "6,000"],
        answer:
          "6,000 J. E = P × t = 100 × 60. For joules you need watts and SECONDS, which is a different pairing from the kWh equation.",
      },
      {
        question: "What colour is the live wire in a UK plug?",
        accept: ["brown"],
        answer:
          "Brown. Neutral is blue, and earth is green and yellow striped. All three colours are examinable.",
      },
      {
        question: "What colour is the earth wire in a UK plug?",
        accept: ["green and yellow", "green/yellow", "green and yellow stripes", "yellow and green", "green yellow"],
        answer:
          "Green and yellow striped. It is a safety wire at 0 V and carries current only when there is a fault.",
      },
      {
        question: "Which wire must the fuse be connected in?",
        accept: ["live", "the live wire", "live wire"],
        answer:
          "The live wire. Placing it in the neutral would break the circuit but leave the appliance still connected to 230 V, which would be dangerous.",
      },
      {
        question: "An appliance normally draws 4 A. Should you fit a 3 A or a 5 A fuse?",
        accept: ["5", "5a", "5 a", "5 amp", "the 5a"],
        answer:
          "The 5 A fuse — the next rating above the normal operating current. A 3 A fuse would blow every time the appliance was switched on.",
      },
      {
        question: "What is the term for a plastic case that cannot become live, so no earth wire is needed?",
        accept: ["double insulation", "double insulated", "double-insulated"],
        answer:
          "Double insulation. Because the outer case is an insulator, there is no metal that could become live in a fault.",
      },
      {
        question: "Which is faster to act and can be reset: a fuse or a circuit breaker?",
        accept: ["circuit breaker", "a circuit breaker", "breaker"],
        answer:
          "A circuit breaker. It trips faster than a fuse melts and can simply be switched back on rather than replaced.",
      },
      {
        question: "Explain how an earth wire and a fuse work together to keep an appliance safe. Write three sentences.",
        answer:
          "If a fault makes the live wire touch the metal case, the earth wire provides a very low-resistance path from the case to earth. Because the resistance is so low, a very large current flows through the live wire and the earth wire. That surge is far above the fuse's rating, so the fuse wire melts almost immediately and disconnects the live wire, leaving the case safe to touch. Mark this one yourself: the low resistance, the large current AND the fuse blowing are all needed — the earth wire alone does not make it safe.",
      },
      {
        question: "Explain why touching the live wire is dangerous even when the appliance is switched off.",
        answer:
          "The live wire remains at about 230 V relative to earth whether the appliance's switch is open or closed, because the switch only interrupts the circuit inside the appliance. A person standing on the ground is at 0 V, so touching the live wire creates a potential difference of around 230 V across their body. That drives a current through them to earth, and even a small current through the heart can be fatal. Mark this one yourself: the potential difference between the wire and earth, and the current through the body, are the key points.",
      },
    ],
    misconceptions: [
      {
        wrong: "The earth wire carries current all the time.",
        right:
          "It carries current only when there is a fault. In normal operation no current flows through it at all.",
      },
      {
        wrong: "A fuse protects the user directly.",
        right:
          "It protects the appliance and the wiring from overheating, and works with the earth wire to disconnect a faulty appliance. It is the combination that keeps you safe.",
      },
      {
        wrong: "You should fit the fuse that exactly matches the operating current.",
        right:
          "Choose the next rating ABOVE it. An exact match would blow during the normal surge when the appliance switches on.",
      },
      {
        wrong: "Kilowatt-hours are a unit of power.",
        right:
          "They are a unit of ENERGY — power multiplied by time. The kilowatt is the unit of power.",
      },
      {
        wrong: "Switching an appliance off makes the live wire safe.",
        right:
          "The live wire stays at 230 V relative to earth. Only unplugging or isolating the supply removes the danger.",
      },
    ],
  },

  "physics/motion-and-graphs": {
    summary:
      "Motion is described by four quantities — distance, displacement, speed, velocity — and two graphs that carry most of the marks. This topic covers the difference between scalar and vector versions of the same idea, the equations for speed and acceleration, and how to read gradients and areas off graphs, which is where the real exam technique lies.",
    keyFacts: [
      {
        heading: "Distance, displacement, speed and velocity",
        points: [
          "DISTANCE is a scalar — how far you travelled, with no direction.",
          "DISPLACEMENT is a vector — how far you ended up from the start, and in what direction.",
          "SPEED is a scalar; VELOCITY is speed in a stated direction, so it is a vector.",
          "Walking a full lap of a track leaves your displacement at zero, though the distance was a full lap.",
          "Typical values worth knowing: walking about 1.5 m/s, running about 3 m/s, cycling about 6 m/s.",
          "The speed of sound in air is about 330 m/s.",
        ],
      },
      {
        heading: "The equations",
        points: [
          "SPEED = distance ÷ time: v = s ÷ t.",
          "ACCELERATION = change in velocity ÷ time: a = (v − u) ÷ t, where u is the starting velocity.",
          "Acceleration is measured in m/s², and a NEGATIVE acceleration means slowing down.",
          "The uniform acceleration equation: v² − u² = 2 × a × s.",
          "Objects falling near the Earth accelerate at about 9.8 m/s² until air resistance balances weight.",
          "At TERMINAL VELOCITY the resultant force is zero, so the object falls at a constant speed.",
        ],
      },
      {
        heading: "Distance-time graphs",
        points: [
          "The GRADIENT of a distance-time graph gives the SPEED.",
          "A horizontal line means the object is stationary.",
          "A straight sloping line means constant speed; a steeper line means faster.",
          "A CURVE means the speed is changing — the object is accelerating or decelerating.",
          "For a curved graph, draw a TANGENT and find its gradient to get the speed at that instant.",
        ],
      },
      {
        heading: "Velocity-time graphs",
        points: [
          "The GRADIENT of a velocity-time graph gives the ACCELERATION.",
          "The AREA UNDER a velocity-time graph gives the DISTANCE travelled.",
          "A horizontal line means constant velocity, so zero acceleration.",
          "A line sloping down means deceleration; a line crossing the axis means the direction reversed.",
          "Split an awkward area into triangles and rectangles, work out each, then add them.",
          "Area of a triangle is ½ × base × height — the most useful formula in the whole topic.",
        ],
      },
    ],
    flashcards: [
      { term: "Distance", definition: "A scalar measuring how far an object has travelled, with no direction." },
      { term: "Displacement", definition: "A vector measuring how far an object is from its start, and in what direction." },
      { term: "Speed", definition: "A scalar measuring how fast an object moves: v = s ÷ t." },
      { term: "Velocity", definition: "Speed in a stated direction, making it a vector quantity." },
      { term: "Acceleration", definition: "The rate of change of velocity: a = (v − u) ÷ t, measured in m/s²." },
      { term: "Deceleration", definition: "Negative acceleration — the object is slowing down." },
      { term: "Terminal velocity", definition: "The constant speed reached when drag balances weight, so the resultant force is zero." },
      { term: "Distance-time graph", definition: "A graph whose gradient gives the speed." },
      { term: "Velocity-time graph", definition: "A graph whose gradient gives acceleration and whose area gives distance travelled." },
      { term: "Gradient", definition: "The steepness of a line: change in y divided by change in x." },
      { term: "Tangent", definition: "A straight line touching a curve at a point, used to find an instantaneous gradient." },
      { term: "Uniform acceleration", definition: "Acceleration that stays constant, allowing v² − u² = 2as to be used." },
      { term: "Scalar", definition: "A quantity with magnitude only." },
      { term: "Vector", definition: "A quantity with magnitude and direction." },
    ],
    examTips: [
      {
        tip: "Distance-time gradient = speed. Velocity-time gradient = acceleration",
        detail:
          "Two different graphs, two different meanings for the same gradient. Confusing them wrecks the whole question.",
      },
      {
        tip: "AREA under a velocity-time graph gives DISTANCE",
        detail:
          "This is the one students forget. Split the shape into triangles and rectangles and add them up.",
      },
      {
        tip: "In a = (v − u) ÷ t, u is the STARTING velocity",
        detail:
          "Subtract the start from the end, not the other way round, or you will get the sign wrong on a deceleration.",
      },
      {
        tip: "Explain terminal velocity through forces",
        detail:
          "As speed rises, drag rises, until drag equals weight and the resultant force is zero. Zero resultant means constant velocity.",
      },
      {
        tip: "A curved distance-time graph means changing speed",
        detail:
          "Draw a tangent and find its gradient for the speed at that moment. A long tangent gives a more accurate reading.",
      },
      {
        tip: "Check units before calculating",
        detail:
          "Time in seconds, distance in metres. A time given in minutes must be converted, or the answer is out by a factor of 60.",
      },
    ],
    workedExamples: [
      {
        question:
          "A car travels 240 m in 60 s. Calculate its average speed.",
        steps: [
          "Write the equation: speed = distance ÷ time.",
          "Substitute: v = 240 ÷ 60.",
          "= 4.",
          "Speed is in metres per second, so 4 m/s.",
        ],
        answer: "4 m/s",
      },
      {
        question:
          "A car accelerates from 5 m/s to 20 m/s in 3 seconds. Calculate its acceleration.",
        steps: [
          "Write the equation: a = (v − u) ÷ t.",
          "Substitute: a = (20 − 5) ÷ 3.",
          "= 15 ÷ 3.",
          "= 5 m/s². The units are metres per second squared, because it is a change of speed per second.",
        ],
        answer: "5 m/s²",
      },
      {
        question:
          "On a velocity-time graph, an object accelerates uniformly from rest to 20 m/s over 10 seconds. Find the distance travelled.",
        steps: [
          "Distance is the AREA under a velocity-time graph.",
          "From rest to 20 m/s in a straight line makes a triangle.",
          "Area = ½ × base × height = ½ × 10 × 20.",
          "= 100 m.",
        ],
        answer: "100 m",
      },
    ],
    practice: [
      {
        question: "A runner covers 100 m in 20 s. Calculate the average speed in m/s. Give the number only.",
        accept: ["5"],
        answer:
          "5 m/s. Speed = distance ÷ time = 100 ÷ 20. Always check the time is in seconds before dividing.",
      },
      {
        question: "A cyclist travels 900 m in 150 s. Calculate the average speed in m/s. Give the number only.",
        accept: ["6"],
        answer:
          "6 m/s. 900 ÷ 150 = 6, which is about right for a cyclist — a useful sanity check on your answer.",
      },
      {
        question: "A car speeds up from 10 m/s to 30 m/s in 4 s. Calculate the acceleration in m/s². Give the number only.",
        accept: ["5"],
        answer:
          "5 m/s². a = (v − u) ÷ t = (30 − 10) ÷ 4 = 20 ÷ 4. Subtract the starting velocity from the final one.",
      },
      {
        question: "A car slows from 20 m/s to 8 m/s in 3 s. Calculate the acceleration in m/s². Give the number only, with a sign if negative.",
        accept: ["-4"],
        answer:
          "−4 m/s². (8 − 20) ÷ 3 = −12 ÷ 3 = −4. The minus sign shows deceleration and is worth a mark.",
      },
      {
        question: "An object accelerates uniformly from rest to 12 m/s in 6 s. Using the area of a triangle, find the distance in metres. Give the number only.",
        accept: ["36"],
        answer:
          "36 m. Area = ½ × base × height = ½ × 6 × 12 = 36. Distance is always the AREA under a velocity-time graph.",
      },
      {
        question: "An object moves at a constant 15 m/s for 8 s. Find the distance in metres from the area under the graph. Give the number only.",
        accept: ["120"],
        answer:
          "120 m. Constant velocity gives a rectangle, so area = 15 × 8 = 120. No halving is needed for a rectangle.",
      },
      {
        question: "An object starts from rest and accelerates at 2 m/s² over 25 m. Use v² − u² = 2as to find the final velocity in m/s. Give the number only.",
        accept: ["10"],
        answer:
          "10 m/s. v² = 0 + 2 × 2 × 25 = 100, so v = √100 = 10. Remember to take the square root at the end.",
      },
      {
        question: "What does the gradient of a DISTANCE-time graph represent?",
        accept: ["speed", "the speed", "velocity"],
        answer:
          "Speed. On a VELOCITY-time graph the gradient means acceleration instead — two different graphs, two different meanings.",
      },
      {
        question: "What does the gradient of a VELOCITY-time graph represent?",
        accept: ["acceleration", "the acceleration"],
        answer:
          "Acceleration. The AREA under the same graph gives the distance travelled, which is the part students most often forget.",
      },
      {
        question: "What does the area under a velocity-time graph represent?",
        accept: ["distance", "distance travelled", "displacement", "the distance"],
        answer:
          "The distance travelled. Split awkward shapes into triangles and rectangles, calculate each, and add them together.",
      },
      {
        question: "Is displacement a scalar or a vector?",
        accept: ["vector", "a vector"],
        answer:
          "A vector — it has direction as well as size. Distance is the scalar version, which is why a full lap gives a large distance but zero displacement.",
      },
      {
        question: "What is the approximate acceleration of an object falling freely near Earth, in m/s²? Give the number only.",
        accept: ["9.8", "10"],
        answer:
          "About 9.8 m/s², though many questions use 10 to simplify the arithmetic. Use whichever value the question gives you.",
      },
      {
        question: "What is the constant speed reached when drag balances weight called?",
        accept: ["terminal velocity", "terminal speed"],
        answer:
          "Terminal velocity. The resultant force is zero at that point, so by Newton's first law the velocity stops changing.",
      },
      {
        question: "What is the approximate speed of sound in air, in m/s? Give the number only.",
        accept: ["330", "340"],
        answer:
          "About 330 m/s. It is worth knowing alongside the typical walking, running and cycling speeds, which are also examinable.",
      },
      {
        question: "Explain what happens to a skydiver's motion from jumping to reaching terminal velocity. Write three or four sentences.",
        answer:
          "At the moment of jumping, the only significant force is weight, so there is a large resultant force downwards and the skydiver accelerates at about 9.8 m/s². As speed increases, air resistance increases, so the resultant force gets smaller and the acceleration decreases — the skydiver is still speeding up, but less rapidly. Eventually air resistance grows until it exactly balances weight, making the resultant force zero. By Newton's first law the velocity then stops changing, and the skydiver falls at a constant terminal velocity. Mark this one yourself: the decreasing acceleration stage is the one most answers miss.",
      },
      {
        question: "Explain how you would find the speed of an object at a particular moment from a curved distance-time graph.",
        answer:
          "A curve means the speed is changing, so the overall gradient would only give an average rather than the speed at that instant. Draw a tangent — a straight line just touching the curve at the point of interest — making it as long as the graph allows so that reading it is more accurate. Then find the gradient of that tangent by taking two points far apart on it and dividing the change in distance by the change in time. That gradient is the speed at that moment. Mark this one yourself: drawing a long tangent and taking two widely spaced points are both worth credit.",
      },
    ],
    misconceptions: [
      {
        wrong: "Distance and displacement are the same thing.",
        right:
          "Distance is how far you went; displacement is how far you ended up from the start, with direction. A full lap gives a large distance and zero displacement.",
      },
      {
        wrong: "The area under a distance-time graph means something.",
        right:
          "It has no physical meaning. It is the area under a VELOCITY-time graph that gives distance.",
      },
      {
        wrong: "At terminal velocity there are no forces on the object.",
        right:
          "Weight and drag are both still acting — they are simply equal and opposite, so the RESULTANT is zero.",
      },
      {
        wrong: "A negative acceleration means moving backwards.",
        right:
          "It usually means slowing down. Direction reversal shows as the line crossing the axis on a velocity-time graph.",
      },
      {
        wrong: "A steeper velocity-time graph means a faster object.",
        right:
          "It means a greater ACCELERATION. Speed is read off the vertical axis, not from the steepness.",
      },
    ],
  },

  "physics/newtons-laws": {
    summary:
      "Newton's three laws explain every everyday motion you have ever seen. This topic covers all three, the equation F = ma, momentum, and stopping distances — which is the application examiners return to most often because it links forces, energy and road safety in one question.",
    keyFacts: [
      {
        heading: "The three laws",
        points: [
          "FIRST LAW: an object stays still, or moves at constant velocity, unless a RESULTANT force acts on it.",
          "So if velocity is constant, the resultant force must be zero — and vice versa.",
          "SECOND LAW: resultant force = mass × acceleration, F = m × a.",
          "Acceleration is proportional to the resultant force and inversely proportional to the mass.",
          "THIRD LAW: when two objects interact, the forces on each are EQUAL and OPPOSITE.",
          "Those two forces act on DIFFERENT objects, which is why they do not cancel out.",
        ],
      },
      {
        heading: "Inertia and mass",
        points: [
          "INERTIA is the tendency of an object to stay in its current state of motion.",
          "INERTIAL MASS is a measure of how difficult it is to change an object's velocity: m = F ÷ a.",
          "A larger mass needs a larger force to produce the same acceleration.",
          "Weight and mass are different: weight is a force in newtons, mass is in kilograms.",
          "On the Moon your mass is unchanged, but your weight is about a sixth.",
        ],
      },
      {
        heading: "Momentum",
        points: [
          "MOMENTUM = mass × velocity: p = m × v, measured in kg m/s.",
          "Momentum is a VECTOR, so direction matters and opposite directions have opposite signs.",
          "CONSERVATION OF MOMENTUM: in a closed system, total momentum before = total momentum after.",
          "This applies to collisions and explosions alike.",
          "In a collision, a longer contact time means a smaller force for the same change in momentum.",
          "That is exactly how crumple zones, airbags, seatbelts and crash mats reduce injury.",
        ],
      },
      {
        heading: "Stopping distances",
        points: [
          "STOPPING DISTANCE = THINKING DISTANCE + BRAKING DISTANCE.",
          "Thinking distance is how far you travel during your reaction time, before the brakes are applied.",
          "Thinking distance increases with speed, tiredness, alcohol, drugs and distractions.",
          "Braking distance is how far the car travels while braking.",
          "Braking distance increases with speed, and with wet or icy roads, worn tyres or worn brakes.",
          "Braking distance rises much faster than speed does, because kinetic energy depends on v².",
        ],
      },
    ],
    flashcards: [
      { term: "Newton's first law", definition: "An object remains still or moves at constant velocity unless a resultant force acts on it." },
      { term: "Newton's second law", definition: "Resultant force equals mass times acceleration: F = ma." },
      { term: "Newton's third law", definition: "When two objects interact, the forces on each are equal and opposite." },
      { term: "Resultant force", definition: "The single force with the same effect as all the forces acting on an object." },
      { term: "Inertia", definition: "The tendency of an object to continue in its current state of rest or motion." },
      { term: "Inertial mass", definition: "A measure of how hard it is to change an object's velocity: m = F ÷ a." },
      { term: "Momentum", definition: "Mass multiplied by velocity: p = mv, measured in kg m/s. It is a vector." },
      { term: "Conservation of momentum", definition: "In a closed system, the total momentum before an event equals the total after." },
      { term: "Stopping distance", definition: "Thinking distance plus braking distance." },
      { term: "Thinking distance", definition: "The distance travelled during the driver's reaction time, before braking begins." },
      { term: "Braking distance", definition: "The distance travelled while the brakes are being applied." },
      { term: "Reaction time", definition: "The time between seeing a hazard and acting, typically 0.2 to 0.9 seconds." },
      { term: "Crumple zone", definition: "A part of a car designed to deform, increasing collision time and reducing the force." },
      { term: "Terminal velocity", definition: "The constant velocity reached when drag balances weight." },
    ],
    examTips: [
      {
        tip: "Newton's third law forces act on DIFFERENT objects",
        detail:
          "That is why they do not cancel. If both acted on the same object nothing could ever accelerate — a favourite exam trap.",
      },
      {
        tip: "Always use the RESULTANT force in F = ma",
        detail:
          "Not one individual force. Work out the resultant first by combining everything acting, then substitute.",
      },
      {
        tip: "Braking distance depends on v², thinking distance on v",
        detail:
          "Doubling speed doubles thinking distance but QUADRUPLES braking distance, because kinetic energy depends on speed squared.",
      },
      {
        tip: "Explain safety features through TIME and FORCE",
        detail:
          "A longer collision time means a smaller rate of change of momentum, so a smaller force. That chain earns the marks.",
      },
      {
        tip: "Momentum is a vector — watch the signs",
        detail:
          "Objects moving in opposite directions have momenta of opposite sign. Ignoring that makes conservation calculations come out wrong.",
      },
      {
        tip: "Separate the two factors in stopping distance questions",
        detail:
          "Alcohol and tiredness affect THINKING distance; wet roads and worn tyres affect BRAKING distance. Speed affects both.",
      },
    ],
    workedExamples: [
      {
        question:
          "A car of mass 1,500 kg accelerates at 2 m/s². Calculate the resultant force.",
        steps: [
          "Write the equation: F = m × a.",
          "Substitute: F = 1,500 × 2.",
          "= 3,000.",
          "Force is measured in newtons, so 3,000 N.",
        ],
        answer: "3,000 N",
      },
      {
        question:
          "Calculate the momentum of a 60 kg runner moving at 5 m/s.",
        steps: [
          "Write the equation: p = m × v.",
          "Substitute: p = 60 × 5.",
          "= 300.",
          "The units are kg m/s, so the momentum is 300 kg m/s.",
        ],
        answer: "300 kg m/s",
      },
    ],
    practice: [
      {
        question: "A 2,000 kg car accelerates at 3 m/s². Calculate the resultant force in newtons. Give the number only.",
        accept: ["6000", "6,000"],
        answer:
          "6,000 N. F = ma = 2,000 × 3. Always use the RESULTANT force, not one individual force acting on the object.",
      },
      {
        question: "A 60 kg object experiences a resultant force of 180 N. Calculate its acceleration in m/s². Give the number only.",
        accept: ["3"],
        answer:
          "3 m/s². Rearranging: a = F ÷ m = 180 ÷ 60. You need F = ma in all three arrangements.",
      },
      {
        question: "A resultant force of 400 N acts on an 80 kg object. Calculate its acceleration in m/s². Give the number only.",
        accept: ["5"],
        answer:
          "5 m/s². a = F ÷ m = 400 ÷ 80 = 5. A larger mass would give a smaller acceleration for the same force.",
      },
      {
        question: "Calculate the momentum of a 1,200 kg car travelling at 15 m/s. Give the number only, in kg m/s.",
        accept: ["18000", "18,000"],
        answer:
          "18,000 kg m/s. p = mv = 1,200 × 15. Momentum is a vector, so direction matters in collision questions.",
      },
      {
        question: "Calculate the momentum of a 0.5 kg ball moving at 8 m/s. Give the number only, in kg m/s.",
        accept: ["4"],
        answer:
          "4 kg m/s. p = mv = 0.5 × 8 = 4. Small masses can still have appreciable momentum if they move fast.",
      },
      {
        question: "A trolley of mass 4 kg has a momentum of 12 kg m/s. Calculate its velocity in m/s. Give the number only.",
        accept: ["3"],
        answer:
          "3 m/s. Rearranging: v = p ÷ m = 12 ÷ 4 = 3. Momentum questions often require the equation rearranged.",
      },
      {
        question: "A car has a thinking distance of 12 m and a braking distance of 24 m. Calculate the stopping distance in metres. Give the number only.",
        accept: ["36"],
        answer:
          "36 m. Stopping distance = thinking + braking = 12 + 24. Both parts must be included.",
      },
      {
        question: "Which of Newton's laws states that resultant force equals mass times acceleration?",
        accept: ["second", "2nd", "the second", "second law", "newtons second law", "2"],
        answer:
          "The second law, F = ma. The first is about constant velocity with zero resultant force; the third is about equal and opposite pairs.",
      },
      {
        question: "According to Newton's third law, what is true of the forces when two objects interact?",
        accept: ["equal and opposite", "equal but opposite", "same size opposite direction", "equal in size opposite in direction"],
        answer:
          "They are equal in size and opposite in direction. Crucially they act on DIFFERENT objects, which is why they do not cancel out.",
      },
      {
        question: "What is the tendency of an object to stay in its current state of motion called?",
        accept: ["inertia"],
        answer:
          "Inertia. Inertial mass measures how hard it is to change velocity, calculated as m = F ÷ a.",
      },
      {
        question: "Which part of stopping distance is affected by tiredness and alcohol?",
        accept: ["thinking", "thinking distance", "the thinking distance", "reaction"],
        answer:
          "Thinking distance, because both lengthen reaction time. Wet roads and worn tyres affect BRAKING distance instead.",
      },
      {
        question: "Which part of stopping distance is affected by icy roads?",
        accept: ["braking", "braking distance", "the braking distance"],
        answer:
          "Braking distance — there is less friction, so the car takes further to stop. Thinking distance is unaffected by road conditions.",
      },
      {
        question: "If speed doubles, roughly what happens to braking distance?",
        accept: ["quadruples", "four times", "x4", "quadruple", "multiplied by 4", "4 times"],
        answer:
          "It quadruples, because braking distance depends on kinetic energy, which depends on v². Thinking distance only doubles.",
      },
      {
        question: "Name one car safety feature that works by increasing collision time.",
        accept: ["crumple zone", "airbag", "seatbelt", "crumple zones", "airbags", "seatbelts", "crash mat"],
        answer:
          "Crumple zones, airbags and seatbelts. All increase the time over which momentum changes, which reduces the force on the occupants.",
      },
      {
        question: "Explain how a crumple zone reduces the force on the occupants of a car in a crash. Write three sentences.",
        answer:
          "In a collision the car's momentum must change to zero, and the force involved depends on how quickly that change happens. A crumple zone is designed to deform on impact, which extends the time over which the car comes to rest rather than stopping it abruptly. Because the same change of momentum now happens over a longer time, the rate of change of momentum is smaller, and therefore so is the force on the occupants. Mark this one yourself: the marks are for the SAME momentum change over a LONGER time giving a smaller force.",
      },
      {
        question: "Explain why two forces described by Newton's third law do not cancel each other out.",
        answer:
          "The two forces in a third-law pair are equal in size and opposite in direction, but they act on two DIFFERENT objects. Forces only cancel when they act on the same object, because it is the resultant force on a single object that determines its acceleration. When you push a wall, the wall pushes back on you with an equal force, but one acts on the wall and one on you, so each object experiences its own separate resultant. If they did act on the same object, nothing in the universe could ever accelerate. Mark this one yourself: the mark is entirely for the forces acting on different objects.",
      },
    ],
    misconceptions: [
      {
        wrong: "A moving object must have a force pushing it along.",
        right:
          "Newton's first law says constant velocity needs ZERO resultant force. Force is needed to CHANGE motion, not to maintain it.",
      },
      {
        wrong: "Newton's third law forces cancel out.",
        right:
          "They act on different objects, so they never cancel. Only forces on the SAME object combine into a resultant.",
      },
      {
        wrong: "Braking distance doubles when speed doubles.",
        right:
          "It quadruples, because it depends on kinetic energy and therefore on v². Only thinking distance is proportional to speed.",
      },
      {
        wrong: "Airbags work by being soft.",
        right:
          "They work by extending the TIME over which momentum changes. A longer time means a smaller rate of change and a smaller force.",
      },
      {
        wrong: "Heavier objects fall faster.",
        right:
          "Ignoring air resistance, all objects accelerate at the same rate. Greater weight is exactly offset by greater mass in F = ma.",
      },
    ],
  },

  "physics/waves": {
    summary:
      "Waves transfer energy without transferring matter, and that single sentence explains why a cork bobs but does not travel when a ripple passes. This topic covers transverse and longitudinal waves, the wave equation, and reflection and refraction — with the calculations you need to be able to do in both directions.",
    keyFacts: [
      {
        heading: "What a wave is",
        points: [
          "A wave transfers ENERGY from place to place WITHOUT transferring matter.",
          "The particles oscillate about a fixed point; they do not travel with the wave.",
          "TRANSVERSE waves oscillate at RIGHT ANGLES to the direction of energy transfer — water waves, all electromagnetic waves, waves on a rope.",
          "LONGITUDINAL waves oscillate PARALLEL to the direction of energy transfer — sound, and waves on a stretched spring.",
          "Longitudinal waves have COMPRESSIONS, where particles bunch together, and RAREFACTIONS, where they spread out.",
          "Sound cannot travel through a vacuum, because there are no particles to oscillate.",
        ],
      },
      {
        heading: "Describing a wave",
        points: [
          "AMPLITUDE is the maximum displacement from the rest position — NOT the full height from top to bottom.",
          "WAVELENGTH is the distance from one point on a wave to the same point on the next, measured in metres.",
          "FREQUENCY is the number of complete waves passing a point per second, measured in hertz.",
          "PERIOD is the time for one complete wave to pass: T = 1 ÷ f.",
          "So a higher frequency means a shorter period, and vice versa.",
          "For sound, amplitude determines loudness and frequency determines pitch.",
        ],
      },
      {
        heading: "The wave equation",
        points: [
          "WAVE SPEED = frequency × wavelength: v = f × λ.",
          "Speed in m/s, frequency in Hz, wavelength in m.",
          "Rearranged: f = v ÷ λ, and λ = v ÷ f. You need all three forms.",
          "In a given material the wave speed is fixed, so a higher frequency must mean a shorter wavelength.",
          "Sound travels at about 330 m/s in air, faster in liquids and faster still in solids.",
          "All electromagnetic waves travel at 3 × 10⁸ m/s in a vacuum.",
        ],
      },
      {
        heading: "Reflection and refraction",
        points: [
          "REFLECTION: the angle of incidence equals the angle of reflection, both measured from the NORMAL.",
          "The NORMAL is an imaginary line at right angles to the surface at the point where the ray hits.",
          "SPECULAR reflection from a smooth surface gives a clear image; DIFFUSE reflection from a rough surface scatters the light.",
          "REFRACTION is the change of direction when a wave crosses into a different material and changes speed.",
          "Entering a denser material the wave SLOWS and bends TOWARDS the normal; leaving it, it speeds up and bends AWAY.",
          "The frequency does not change during refraction — the wavelength changes instead.",
        ],
      },
    ],
    flashcards: [
      { term: "Wave", definition: "A disturbance that transfers energy without transferring matter." },
      { term: "Transverse wave", definition: "A wave whose oscillations are at right angles to the direction of energy transfer." },
      { term: "Longitudinal wave", definition: "A wave whose oscillations are parallel to the direction of energy transfer, such as sound." },
      { term: "Compression", definition: "A region of a longitudinal wave where the particles are bunched together." },
      { term: "Rarefaction", definition: "A region of a longitudinal wave where the particles are spread apart." },
      { term: "Amplitude", definition: "The maximum displacement of a point from its rest position." },
      { term: "Wavelength", definition: "The distance from one point on a wave to the same point on the next wave." },
      { term: "Frequency", definition: "The number of complete waves passing a point each second, measured in hertz." },
      { term: "Period", definition: "The time for one complete wave to pass a point: T = 1 ÷ f." },
      { term: "Wave equation", definition: "Wave speed equals frequency times wavelength: v = fλ." },
      { term: "Reflection", definition: "A wave bouncing off a surface, where the angle of incidence equals the angle of reflection." },
      { term: "Normal", definition: "An imaginary line at right angles to a surface, from which angles are measured." },
      { term: "Refraction", definition: "A change of direction when a wave enters a different material and changes speed." },
      { term: "Specular reflection", definition: "Reflection from a smooth surface, producing a clear image." },
      { term: "Diffuse reflection", definition: "Reflection from a rough surface, scattering light in many directions." },
      { term: "Hertz", definition: "The unit of frequency. One hertz is one complete wave per second." },
    ],
    examTips: [
      {
        tip: "Waves transfer ENERGY, not matter",
        detail:
          "A cork on a ripple bobs up and down but does not move along. Saying that a wave carries matter loses the mark immediately.",
      },
      {
        tip: "Amplitude is measured from the REST position",
        detail:
          "Not from trough to crest — that is twice the amplitude. This is the single most common error in wave diagrams.",
      },
      {
        tip: "Always measure angles from the NORMAL",
        detail:
          "Not from the surface. An angle measured from the surface will be 90° minus the correct one, and the mark is lost.",
      },
      {
        tip: "In refraction, frequency stays the SAME",
        detail:
          "The speed and wavelength both change, but the frequency is set by the source. Saying frequency changes is a standard trap.",
      },
      {
        tip: "Know v = fλ in all three arrangements",
        detail:
          "v = fλ, f = v ÷ λ, λ = v ÷ f. Write down which two quantities you have before choosing.",
      },
      {
        tip: "Sound cannot travel through a vacuum",
        detail:
          "It is longitudinal and needs particles to oscillate. Electromagnetic waves can, because they need no medium at all.",
      },
    ],
    workedExamples: [
      {
        question:
          "A wave has a frequency of 20 Hz and a wavelength of 1.5 m. Calculate its speed.",
        steps: [
          "Write the equation: v = f × λ.",
          "Substitute: v = 20 × 1.5.",
          "= 30.",
          "Speed is in metres per second, so 30 m/s.",
        ],
        answer: "30 m/s",
      },
      {
        question:
          "A sound wave travels at 330 m/s with a wavelength of 3 m. Calculate its frequency.",
        steps: [
          "Rearrange the wave equation: f = v ÷ λ.",
          "Substitute: f = 330 ÷ 3.",
          "= 110.",
          "Frequency is in hertz, so 110 Hz.",
        ],
        answer: "110 Hz",
      },
    ],
    practice: [
      {
        question: "A wave has frequency 50 Hz and wavelength 4 m. Calculate the speed in m/s. Give the number only.",
        accept: ["200"],
        answer:
          "200 m/s. v = fλ = 50 × 4. Frequency multiplied by wavelength always gives the speed.",
      },
      {
        question: "A wave has frequency 8 Hz and wavelength 2.5 m. Calculate the speed in m/s. Give the number only.",
        accept: ["20"],
        answer:
          "20 m/s. v = 8 × 2.5 = 20. Decimals in the wavelength are common, so take care with the multiplication.",
      },
      {
        question: "A wave travels at 340 m/s with a wavelength of 2 m. Calculate the frequency in Hz. Give the number only.",
        accept: ["170"],
        answer:
          "170 Hz. f = v ÷ λ = 340 ÷ 2. This is the wave equation rearranged, which you need as readily as the original.",
      },
      {
        question: "A wave travels at 300 m/s with a frequency of 60 Hz. Calculate the wavelength in metres. Give the number only.",
        accept: ["5"],
        answer:
          "5 m. λ = v ÷ f = 300 ÷ 60 = 5. Three quantities, three arrangements — know all of them.",
      },
      {
        question: "A wave has a frequency of 50 Hz. Calculate its period in seconds. Give the number only.",
        accept: ["0.02"],
        answer:
          "0.02 s. T = 1 ÷ f = 1 ÷ 50 = 0.02. A high frequency always gives a short period.",
      },
      {
        question: "A wave has a frequency of 4 Hz. Calculate its period in seconds. Give the number only.",
        accept: ["0.25"],
        answer:
          "0.25 s. T = 1 ÷ 4 = 0.25. Four complete waves per second means each one takes a quarter of a second.",
      },
      {
        question: "A wave has a period of 0.1 s. Calculate its frequency in Hz. Give the number only.",
        accept: ["10"],
        answer:
          "10 Hz. Frequency and period are reciprocals: f = 1 ÷ T = 1 ÷ 0.1 = 10.",
      },
      {
        question: "What type of wave is sound?",
        accept: ["longitudinal", "a longitudinal wave", "longitudinal wave"],
        answer:
          "Longitudinal — the particles oscillate parallel to the direction of energy transfer, producing compressions and rarefactions.",
      },
      {
        question: "What type of wave is light?",
        accept: ["transverse", "a transverse wave", "transverse wave"],
        answer:
          "Transverse. All electromagnetic waves are transverse, and unlike sound they can travel through a vacuum.",
      },
      {
        question: "What is the maximum displacement of a wave from its rest position called?",
        accept: ["amplitude", "the amplitude"],
        answer:
          "Amplitude. It is measured from the REST position, NOT from trough to crest — that distance is twice the amplitude.",
      },
      {
        question: "From which line are angles of incidence and reflection measured?",
        accept: ["normal", "the normal"],
        answer:
          "The normal — an imaginary line at right angles to the surface. Measuring from the surface itself gives 90° minus the correct angle.",
      },
      {
        question: "During refraction, does the frequency of a wave change?",
        accept: ["no", "n", "it stays the same", "stays the same"],
        answer:
          "No. The frequency is set by the source and does not change. The speed and wavelength both change instead.",
      },
      {
        question: "Can sound travel through a vacuum? Answer yes or no.",
        accept: ["no", "n"],
        answer:
          "No. Sound is longitudinal and needs particles to oscillate. Electromagnetic waves can, because they need no medium.",
      },
      {
        question: "In sound, what does amplitude determine?",
        accept: ["loudness", "volume", "how loud"],
        answer:
          "Loudness. Frequency determines pitch — a higher frequency sounds higher, and a larger amplitude sounds louder.",
      },
      {
        question: "Explain why a cork floating on water bobs up and down but does not travel with a wave. Write two or three sentences.",
        answer:
          "A wave transfers energy from place to place, but it does not transfer matter. As the wave passes, each water particle oscillates about its own fixed rest position and returns to it, rather than moving along with the wave. The cork simply follows the water immediately around it, so it rises and falls as each crest and trough goes by while staying in roughly the same place. Mark this one yourself: the distinction between transferring ENERGY and transferring MATTER is the whole mark.",
      },
      {
        question: "Explain what happens to a light ray as it passes from air into glass.",
        answer:
          "Light travels more slowly in glass than in air, so as the ray crosses the boundary it changes speed. If it meets the surface at an angle, the change in speed makes it change direction, bending TOWARDS the normal as it enters the denser material. The frequency stays the same, because it is set by the source, so the wavelength must decrease to match the slower speed. On leaving the glass the ray speeds up again and bends away from the normal. Mark this one yourself: slowing down, bending towards the normal, and frequency staying constant are the three points.",
      },
    ],
    misconceptions: [
      {
        wrong: "Waves carry matter from place to place.",
        right:
          "They transfer ENERGY only. The particles oscillate about fixed positions and return to where they started.",
      },
      {
        wrong: "Amplitude is the distance from trough to crest.",
        right:
          "It is measured from the REST position to the crest, so trough-to-crest is twice the amplitude.",
      },
      {
        wrong: "Refraction changes the frequency of a wave.",
        right:
          "Frequency is set by the source and never changes. Speed and wavelength change together instead.",
      },
      {
        wrong: "Angles in reflection are measured from the mirror surface.",
        right:
          "They are measured from the NORMAL, the line at right angles to the surface.",
      },
      {
        wrong: "Sound travels faster in air than in solids.",
        right:
          "It travels fastest in solids, where particles are closest together, and cannot travel at all in a vacuum.",
      },
    ],
  },

  "physics/the-electromagnetic-spectrum": {
    summary:
      "The electromagnetic spectrum is one family of transverse waves stretching from radio to gamma, all travelling at the same speed in a vacuum and differing only in frequency and wavelength. This topic covers the order, the uses, the dangers, and the calculations that connect frequency to wavelength.",
    keyFacts: [
      {
        heading: "The spectrum",
        points: [
          "In order of INCREASING frequency and DECREASING wavelength: radio, microwave, infrared, visible light, ultraviolet, X-ray, gamma.",
          "A mnemonic: Raging Martians Invaded Venus Using X-ray Guns.",
          "All are TRANSVERSE and all travel at 3 × 10⁸ m/s in a vacuum.",
          "They are all part of a continuous spectrum; the names are labels for regions, not separate things.",
          "Visible light is a very narrow band, running from red (longest wavelength) to violet (shortest).",
          "Our eyes detect only that narrow band, which is why the rest was discovered so much later.",
        ],
      },
      {
        heading: "Uses",
        points: [
          "RADIO: television and radio broadcasting.",
          "MICROWAVE: satellite communications and cooking food.",
          "INFRARED: electric heaters, cooking, thermal imaging cameras, remote controls, optical fibres.",
          "VISIBLE LIGHT: seeing, photography, optical fibre communication.",
          "ULTRAVIOLET: energy-efficient lamps, sun tanning, detecting forged banknotes.",
          "X-RAY and GAMMA: medical imaging, treating cancer, and sterilising equipment.",
        ],
      },
      {
        heading: "Dangers",
        points: [
          "The higher the frequency, the more energy each wave carries, and generally the more dangerous it is.",
          "MICROWAVES can heat internal body tissue.",
          "INFRARED can cause skin burns.",
          "ULTRAVIOLET damages surface cells, causing skin ageing, sunburn and increasing the risk of skin cancer, and can damage eyes.",
          "X-RAYS and GAMMA rays are IONISING, so they can cause mutations in DNA and lead to cancer.",
          "RADIATION DOSE, measured in sieverts, is a measure of the risk of harm from exposure.",
        ],
      },
      {
        heading: "Generation, absorption and communication",
        points: [
          "Radio waves can be produced by oscillations in an electrical circuit.",
          "Absorbing radio waves in a receiving aerial creates an alternating current with the same frequency.",
          "Gamma rays originate from changes in the NUCLEUS of an atom.",
          "Changes in the energy levels of ELECTRONS produce visible light, ultraviolet and X-rays.",
          "Different substances absorb, transmit, refract or reflect electromagnetic waves depending on wavelength.",
          "How a wave behaves at a boundary depends on both the wavelength and the material.",
        ],
      },
    ],
    flashcards: [
      { term: "Electromagnetic spectrum", definition: "The continuous family of transverse waves from radio to gamma, all travelling at the same speed in a vacuum." },
      { term: "Radio waves", definition: "The longest wavelength EM waves, used for television and radio broadcasting." },
      { term: "Microwaves", definition: "EM waves used for satellite communication and cooking food." },
      { term: "Infrared", definition: "EM waves used for heaters, cooking, thermal imaging and remote controls." },
      { term: "Visible light", definition: "The narrow band of EM waves detectable by the human eye, from red to violet." },
      { term: "Ultraviolet", definition: "EM waves that cause tanning and sunburn, and increase the risk of skin cancer." },
      { term: "X-rays", definition: "Ionising EM waves used for medical imaging, which can damage DNA." },
      { term: "Gamma rays", definition: "The highest-frequency EM waves, originating in the nucleus, used to treat cancer and sterilise equipment." },
      { term: "Ionising radiation", definition: "Radiation with enough energy to remove electrons from atoms, potentially damaging DNA." },
      { term: "Radiation dose", definition: "A measure of the risk of harm from exposure to radiation, measured in sieverts." },
      { term: "Speed of light", definition: "3 × 10⁸ m/s — the speed of all electromagnetic waves in a vacuum." },
      { term: "Transverse wave", definition: "A wave whose oscillations are at right angles to the direction of energy transfer." },
      { term: "Optical fibre", definition: "A thin glass fibre carrying information as pulses of visible light or infrared." },
      { term: "Thermal imaging", definition: "Using infrared radiation to produce an image based on temperature." },
    ],
    examTips: [
      {
        tip: "Learn the order with a mnemonic",
        detail:
          "Raging Martians Invaded Venus Using X-ray Guns. Frequency increases and wavelength decreases as you go along it.",
      },
      {
        tip: "All EM waves travel at the SAME speed in a vacuum",
        detail:
          "3 × 10⁸ m/s. Only the frequency and wavelength differ, and they change together because their product is fixed.",
      },
      {
        tip: "Higher frequency means more energy and more danger",
        detail:
          "That is why gamma is the most hazardous and radio the least. The pattern makes the dangers easy to reason out rather than memorise.",
      },
      {
        tip: "Gamma comes from the NUCLEUS; X-rays from electrons",
        detail:
          "They overlap in frequency, so the origin is what distinguishes them. Examiners test exactly this.",
      },
      {
        tip: "Use standard form carefully in calculations",
        detail:
          "3 × 10⁸ is 300,000,000. Enter it into a calculator with the EXP or ×10ˣ button rather than typing all the zeros.",
      },
      {
        tip: "Match the use to a property",
        detail:
          "Microwaves penetrate food and are absorbed by water; infrared is absorbed by the surface. Saying WHY it is used earns the mark.",
      },
    ],
    workedExamples: [
      {
        question:
          "A radio wave has a wavelength of 1,500 m. Calculate its frequency. (Speed of light = 3 × 10⁸ m/s)",
        steps: [
          "Rearrange the wave equation: f = v ÷ λ.",
          "Substitute: f = 300,000,000 ÷ 1,500.",
          "= 200,000.",
          "Frequency is in hertz, so 200,000 Hz, which is 200 kHz.",
        ],
        answer: "200,000 Hz (200 kHz)",
      },
    ],
    practice: [
      {
        question: "Which electromagnetic wave has the LONGEST wavelength?",
        accept: ["radio", "radio waves", "radiowaves"],
        answer:
          "Radio waves. Gamma rays have the shortest wavelength and the highest frequency — the two run in opposite directions.",
      },
      {
        question: "Which electromagnetic wave has the HIGHEST frequency?",
        accept: ["gamma", "gamma rays", "gamma ray"],
        answer:
          "Gamma rays. Highest frequency means shortest wavelength and the most energy per wave, which is why they are the most hazardous.",
      },
      {
        question: "What is the speed of all electromagnetic waves in a vacuum, in m/s? Give it in standard form or as a full number.",
        accept: ["3x10^8", "3 x 10^8", "300000000", "300,000,000", "3e8", "3 × 10⁸"],
        answer:
          "3 × 10⁸ m/s, or 300,000,000 m/s. Every EM wave travels at this speed in a vacuum, whatever its frequency.",
      },
      {
        question: "An EM wave has a wavelength of 3,000 m. Calculate its frequency in Hz. (c = 3 × 10⁸ m/s) Give the number only.",
        accept: ["100000", "100,000"],
        answer:
          "100,000 Hz. f = c ÷ λ = 300,000,000 ÷ 3,000. Use the ×10ˣ button rather than typing all the zeros.",
      },
      {
        question: "An EM wave has a frequency of 1 × 10⁸ Hz. Calculate its wavelength in metres. (c = 3 × 10⁸ m/s) Give the number only.",
        accept: ["3"],
        answer:
          "3 m. λ = c ÷ f = 3 × 10⁸ ÷ 1 × 10⁸ = 3. Working in standard form keeps this kind of division simple.",
      },
      {
        question: "An EM wave has a frequency of 6 × 10⁸ Hz. Calculate its wavelength in metres. (c = 3 × 10⁸ m/s) Give the number only.",
        accept: ["0.5"],
        answer:
          "0.5 m. λ = 3 × 10⁸ ÷ 6 × 10⁸ = 0.5. A higher frequency always gives a shorter wavelength, so the small answer makes sense.",
      },
      {
        question: "An EM wave has a wavelength of 0.06 m. Calculate its frequency in Hz. (c = 3 × 10⁸ m/s) Give the number only.",
        accept: ["5000000000", "5,000,000,000", "5e9", "5x10^9"],
        answer:
          "5 × 10⁹ Hz. f = 3 × 10⁸ ÷ 0.06 = 5,000,000,000. Standard form is far easier to handle here than the full number.",
      },
      {
        question: "Which EM wave is used in television and radio broadcasting?",
        accept: ["radio", "radio waves"],
        answer:
          "Radio waves. Their long wavelength lets them travel long distances and diffract around obstacles.",
      },
      {
        question: "Which EM wave is used in thermal imaging cameras and remote controls?",
        accept: ["infrared", "infra red", "infra-red", "ir"],
        answer:
          "Infrared. It is emitted by all warm objects, which is precisely what makes thermal imaging possible.",
      },
      {
        question: "Which EM wave is used to detect forged banknotes?",
        accept: ["ultraviolet", "uv", "ultra violet"],
        answer:
          "Ultraviolet. It also causes tanning and sunburn, and increases the risk of skin cancer with prolonged exposure.",
      },
      {
        question: "Which type of EM wave originates from changes in the nucleus of an atom?",
        accept: ["gamma", "gamma rays", "gamma ray"],
        answer:
          "Gamma rays. X-rays overlap them in frequency but come from changes involving ELECTRONS, which is how the two are distinguished.",
      },
      {
        question: "Which two EM waves are ionising?",
        accept: ["x-rays and gamma", "gamma and x-rays", "xray and gamma", "x rays and gamma rays", "gamma and xray"],
        answer:
          "X-rays and gamma rays. Being ionising means they can damage DNA and cause mutations, which is why exposure is carefully limited.",
      },
      {
        question: "What is the unit of radiation dose?",
        accept: ["sievert", "sieverts", "sv"],
        answer:
          "The sievert (Sv). It measures the risk of harm from exposure, rather than simply the quantity of radiation.",
      },
      {
        question: "Which EM wave can cause skin burns because it is absorbed by the surface of the skin?",
        accept: ["infrared", "infra red", "infra-red", "ir"],
        answer:
          "Infrared. Microwaves, by contrast, penetrate further and can heat internal tissue.",
      },
      {
        question: "Explain why ultraviolet radiation is more dangerous than visible light. Write two or three sentences.",
        answer:
          "Ultraviolet has a higher frequency than visible light, and higher frequency means each wave carries more energy. That extra energy is enough to damage the cells at the surface of the skin, causing sunburn and premature ageing, and it can damage the DNA inside those cells. Damaged DNA can lead to mutations and increase the risk of skin cancer, whereas visible light does not carry enough energy per wave to do this. Mark this one yourself: linking higher frequency to more energy to cell damage is the chain the marks follow.",
      },
      {
        question: "Explain why all electromagnetic waves travel at the same speed in a vacuum but have different wavelengths.",
        answer:
          "In a vacuum every electromagnetic wave travels at 3 × 10⁸ m/s, because that speed is a property of the vacuum itself rather than of the individual wave. The wave equation v = fλ therefore fixes the product of frequency and wavelength at that constant value. So if a wave has a high frequency it must have a correspondingly short wavelength, and if it has a low frequency it must have a long one — which is exactly the pattern seen across the spectrum from radio to gamma. Mark this one yourself: using v = fλ to explain the inverse relationship is what earns the marks.",
      },
    ],
    misconceptions: [
      {
        wrong: "Different EM waves travel at different speeds in a vacuum.",
        right:
          "They all travel at 3 × 10⁸ m/s. Only frequency and wavelength differ, and they vary inversely because their product is fixed.",
      },
      {
        wrong: "X-rays and gamma rays are different because gamma has a higher frequency.",
        right:
          "They overlap in frequency. The difference is their ORIGIN: gamma from the nucleus, X-rays from electron energy changes.",
      },
      {
        wrong: "Microwaves cook food by making it radioactive.",
        right:
          "They are absorbed by water molecules, which heats the food. Microwaves are not ionising and leave nothing behind.",
      },
      {
        wrong: "Visible light is a large part of the spectrum.",
        right:
          "It is an extremely narrow band. The spectrum is continuous, and our eyes detect only a tiny slice of it.",
      },
      {
        wrong: "All EM radiation is dangerous.",
        right:
          "Radio waves carry very little energy per wave and are essentially harmless. Danger rises with frequency.",
      },
    ],
  },

  "physics/density-and-pressure": {
    summary:
      "Pressure explains why a drawing pin goes into a wall and your thumb does not, why your ears hurt at the bottom of a pool, and why aeroplanes need pressurised cabins. This topic covers pressure in solids, liquids and gases, along with the density and upthrust calculations that go with them.",
    keyFacts: [
      {
        heading: "Pressure in solids",
        points: [
          "PRESSURE = force ÷ area: p = F ÷ A.",
          "Pressure is measured in pascals (Pa); one pascal is one newton per square metre.",
          "A SMALLER area with the same force gives a LARGER pressure — which is why a sharp knife cuts.",
          "A larger area spreads the same force out, which is why snowshoes and tractor tyres work.",
          "Area must be in m² for the answer to be in pascals. Convert cm² by dividing by 10,000.",
        ],
      },
      {
        heading: "Density",
        points: [
          "DENSITY = mass ÷ volume: ρ = m ÷ V.",
          "Units are kg/m³ or g/cm³, and the two differ by a factor of 1,000.",
          "An object floats if its density is LESS than that of the fluid it is placed in.",
          "Solids are usually densest and gases least dense, because of how closely the particles are packed.",
          "Density can be found by measuring mass on a balance and volume by displacement.",
        ],
      },
      {
        heading: "Pressure in liquids",
        points: [
          "Pressure in a liquid increases with DEPTH, because there is more liquid above pressing down.",
          "It also increases with the DENSITY of the liquid.",
          "The equation is p = h × ρ × g, where h is depth, ρ is density and g is gravitational field strength.",
          "Pressure acts in ALL directions at a point in a liquid, not just downwards.",
          "UPTHRUST is the upward force on a submerged object, caused by pressure being greater at its bottom than at its top.",
          "An object floats when upthrust equals weight; it sinks when weight is greater.",
        ],
      },
      {
        heading: "Atmospheric pressure",
        points: [
          "Atmospheric pressure is caused by air molecules colliding with a surface.",
          "It DECREASES with height, because there is less atmosphere above pressing down.",
          "The atmosphere also becomes less dense at altitude, so there are fewer collisions.",
          "At sea level atmospheric pressure is about 100,000 Pa.",
          "This is why aircraft cabins are pressurised and why cooking takes longer at high altitude.",
        ],
      },
    ],
    flashcards: [
      { term: "Pressure", definition: "Force per unit area: p = F ÷ A, measured in pascals." },
      { term: "Pascal", definition: "The unit of pressure. One pascal is one newton per square metre." },
      { term: "Density", definition: "Mass per unit volume: ρ = m ÷ V, measured in kg/m³ or g/cm³." },
      { term: "Upthrust", definition: "The upward force on a submerged object, caused by greater pressure at its base than its top." },
      { term: "Floating", definition: "What happens when upthrust equals weight, which occurs if the object is less dense than the fluid." },
      { term: "Atmospheric pressure", definition: "Pressure caused by air molecules colliding with a surface, about 100,000 Pa at sea level." },
      { term: "Pressure in a liquid", definition: "p = hρg — it increases with depth and with the density of the liquid." },
      { term: "Fluid", definition: "A liquid or a gas — anything that can flow." },
      { term: "Displacement method", definition: "Finding the volume of an irregular object from the liquid it pushes out." },
      { term: "Submerged", definition: "Completely below the surface of a fluid." },
      { term: "Compressible", definition: "Able to be squashed into a smaller volume — gases are, liquids are barely." },
      { term: "Gravitational field strength", definition: "The force per kilogram of mass, about 9.8 N/kg at the Earth's surface." },
    ],
    examTips: [
      {
        tip: "Convert area to m² before calculating pressure",
        detail:
          "Divide cm² by 10,000, not by 100. Getting this conversion wrong is the biggest single source of error in the topic.",
      },
      {
        tip: "Smaller area means BIGGER pressure",
        detail:
          "The same force concentrated into less area. That is why a sharp knife cuts and a blunt one does not.",
      },
      {
        tip: "Pressure in a liquid acts in ALL directions",
        detail:
          "Not just downwards. That is why a submarine is squeezed from every side and why upthrust exists at all.",
      },
      {
        tip: "Explain upthrust through the pressure DIFFERENCE",
        detail:
          "Pressure is greater at the bottom of an object than the top, because it is deeper. That difference produces a net upward force.",
      },
      {
        tip: "Floating is about DENSITY, not weight",
        detail:
          "A steel ship floats and a steel nail sinks. It is the average density of the object compared with the fluid that decides.",
      },
      {
        tip: "Give the reason atmospheric pressure falls with height",
        detail:
          "Less atmosphere above pressing down, and the air is less dense so there are fewer collisions. Both halves score.",
      },
    ],
    workedExamples: [
      {
        question:
          "A force of 200 N acts on an area of 0.5 m². Calculate the pressure.",
        steps: [
          "Write the equation: p = F ÷ A.",
          "Substitute: p = 200 ÷ 0.5.",
          "= 400.",
          "Pressure is in pascals, so 400 Pa.",
        ],
        answer: "400 Pa",
      },
      {
        question:
          "Calculate the pressure 10 m below the surface of water. (density = 1,000 kg/m³, g = 9.8 N/kg)",
        steps: [
          "Write the equation: p = h × ρ × g.",
          "Substitute: p = 10 × 1,000 × 9.8.",
          "10 × 1,000 = 10,000.",
          "10,000 × 9.8 = 98,000 Pa. That is roughly the same as atmospheric pressure, which is why 10 m of water is a useful benchmark.",
        ],
        answer: "98,000 Pa",
      },
    ],
    practice: [
      {
        question: "A force of 600 N acts over 2 m². Calculate the pressure in pascals. Give the number only.",
        accept: ["300"],
        answer:
          "300 Pa. p = F ÷ A = 600 ÷ 2. One pascal is one newton per square metre, so the units follow directly.",
      },
      {
        question: "A force of 50 N acts over 0.25 m². Calculate the pressure in pascals. Give the number only.",
        accept: ["200"],
        answer:
          "200 Pa. p = 50 ÷ 0.25 = 200. Dividing by a number less than 1 makes the answer larger, which is worth expecting.",
      },
      {
        question: "A pressure of 500 Pa acts on an area of 0.2 m². Calculate the force in newtons. Give the number only.",
        accept: ["100"],
        answer:
          "100 N. Rearranging: F = p × A = 500 × 0.2. You need the equation in all three arrangements.",
      },
      {
        question: "Calculate the pressure 5 m below water. (ρ = 1,000 kg/m³, g = 10 N/kg) Give the number only, in pascals.",
        accept: ["50000", "50,000"],
        answer:
          "50,000 Pa. p = hρg = 5 × 1,000 × 10. Note this question gives g = 10, so use 10.",
      },
      {
        question: "Calculate the pressure 20 m below water. (ρ = 1,000 kg/m³, g = 10 N/kg) Give the number only, in pascals.",
        accept: ["200000", "200,000"],
        answer:
          "200,000 Pa. p = 20 × 1,000 × 10. Four times the depth gives four times the pressure — it is directly proportional.",
      },
      {
        question: "An object has a mass of 600 g and volume 200 cm³. Calculate the density in g/cm³. Give the number only.",
        accept: ["3"],
        answer:
          "3 g/cm³. ρ = m ÷ V = 600 ÷ 200. Denser than water, so this object would sink.",
      },
      {
        question: "An object has a mass of 2 kg and volume 0.004 m³. Calculate the density in kg/m³. Give the number only.",
        accept: ["500"],
        answer:
          "500 kg/m³. 2 ÷ 0.004 = 500. Less dense than water at 1,000 kg/m³, so it would float.",
      },
      {
        question: "How many cm² are in 1 m²? Give the number only.",
        accept: ["10000", "10,000"],
        answer:
          "10,000. Dividing by 100 instead of 10,000 is the single biggest source of error in pressure calculations.",
      },
      {
        question: "What is the unit of pressure?",
        accept: ["pascal", "pascals", "pa"],
        answer:
          "The pascal (Pa). One pascal is one newton per square metre, which is a very small pressure — atmospheric pressure is about 100,000 Pa.",
      },
      {
        question: "Approximately what is atmospheric pressure at sea level, in pascals? Give the number only.",
        accept: ["100000", "100,000", "101000", "101325"],
        answer:
          "About 100,000 Pa. It falls with height, because there is less atmosphere above and the air is less dense.",
      },
      {
        question: "What is the upward force on a submerged object called?",
        accept: ["upthrust", "the upthrust", "buoyancy", "buoyant force"],
        answer:
          "Upthrust. It arises because pressure is greater at the bottom of the object than at the top, since the bottom is deeper.",
      },
      {
        question: "An object floats when upthrust equals what?",
        accept: ["weight", "its weight", "the weight"],
        answer:
          "Its weight. If weight exceeds upthrust the object sinks, and floating requires the object to be less dense than the fluid.",
      },
      {
        question: "Does pressure in a liquid increase or decrease with depth?",
        accept: ["increase", "increases", "goes up", "rises", "higher"],
        answer:
          "Increases, because there is more liquid above pressing down. It also increases with the density of the liquid.",
      },
      {
        question: "Does atmospheric pressure increase or decrease with height?",
        accept: ["decrease", "decreases", "goes down", "falls", "lower"],
        answer:
          "Decreases. There is less atmosphere above pressing down, and the air is less dense so fewer molecules collide with a surface.",
      },
      {
        question: "Explain why a sharp knife cuts more easily than a blunt one. Write two or three sentences.",
        answer:
          "Pressure is force divided by area, so for a given force the pressure depends entirely on how much area that force is spread over. A sharp knife has a very thin blade edge, giving an extremely small contact area, so the same downward force produces a very large pressure. That high pressure is enough to push the blade through the material, whereas a blunt knife spreads the same force over a larger area and produces too little pressure to cut. Mark this one yourself: the mark is for p = F ÷ A and for identifying the small area as the reason.",
      },
      {
        question: "Explain why a steel ship floats even though steel is much denser than water.",
        answer:
          "What determines floating is the AVERAGE density of the whole object, not the density of the material it is made from. A ship's hull encloses a very large volume of air, so although the steel itself is dense, the ship as a whole — steel plus the air inside it — has an average density lower than that of water. Because it is less dense than the water, the upthrust acting on it equals its weight before it becomes fully submerged, so it floats. A solid lump of the same steel has no enclosed air, so its density stays above water's and it sinks. Mark this one yourself: average density including the enclosed air is the whole answer.",
      },
    ],
    misconceptions: [
      {
        wrong: "A bigger force always means a bigger pressure.",
        right:
          "Pressure depends on force AND area. A large force over a large area can give less pressure than a small force on a pin point.",
      },
      {
        wrong: "There are 100 cm² in 1 m².",
        right:
          "There are 10,000, because both dimensions are scaled by 100. This conversion error is the most common in the topic.",
      },
      {
        wrong: "Pressure in a liquid acts only downwards.",
        right:
          "It acts equally in ALL directions at a given depth, which is why upthrust exists and why submarines are squeezed from every side.",
      },
      {
        wrong: "Heavy objects sink and light objects float.",
        right:
          "It is DENSITY that matters, not weight. A steel ship weighing thousands of tonnes floats; a small steel nail sinks.",
      },
      {
        wrong: "Atmospheric pressure pushes only downwards.",
        right:
          "Air molecules collide from every direction, so atmospheric pressure acts on all surfaces equally, including upwards.",
      },
    ],
  },
};
