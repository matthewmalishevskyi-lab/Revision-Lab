// HISTORY — all 19 topics, all written.
//
// ⚠️ HISTORY VARIES MORE THAN ANY OTHER SUBJECT ON THIS SITE. The others share
// a broad syllabus; History is assembled from OPTIONS each school chooses. Two
// students both "doing GCSE History" can have almost no overlap — one does
// Germany and Elizabethan England, another does Russia and the American West.
//
// So this covers the most widely taught options across AQA, Edexcel and OCR,
// plus the Year 9 topics most schools teach before GCSE starts. Check it
// against your own school's course and ignore what you don't study.
//
// ⚠️ Some of this is genuinely upsetting material — the slave trade, the
// Holocaust, the world wars. It is written plainly and without sensationalism,
// because that is both the respectful way to treat it and the way that gets
// marks. Where historians disagree, the disagreement is named rather than
// smoothed over.
//
// DATES AND FIGURES: casualty numbers and death tolls are historians' best
// estimates and are often contested. Where a figure is disputed, that is said.

import type { TopicContent } from "./index";

export const HISTORY: Record<string, TopicContent> = {
  "history/the-industrial-revolution": {
    summary:
      "Between about 1750 and 1900 Britain changed from a country where most people worked the land into one where most worked in factories and towns. It made Britain the richest nation on earth and made millions of lives shorter and harder at the same time. Holding both of those facts together, rather than choosing one, is what History asks you to do.",
    keyFacts: [
      {
        heading: "What changed, and roughly when",
        points: [
          "Before about 1750 most people lived in villages and worked in farming, or spun and wove cloth at home — the 'domestic system'.",
          "By 1900 the majority lived in towns and cities and worked for wages in factories, mines or workshops.",
          "Britain's population grew from around 6 million in 1750 to over 40 million by 1900.",
          "Steam power was the key technology: James Watt's improved engine (1769) freed factories from needing to sit beside running water.",
          "Railways arrived in the 1830s and 40s and collapsed travel times — goods, people and news moved at speeds nobody had experienced.",
        ],
      },
      {
        heading: "Why Britain first",
        points: [
          "Coal and iron in large quantities, often close together, so fuel and materials did not need moving far.",
          "Capital to invest, some of it from colonial trade and from the profits of slavery.",
          "A large empire providing both raw materials, especially cotton, and markets to sell finished goods into.",
          "Canals and then railways that let heavy goods move cheaply inland.",
          "Relative political stability, and a legal system that protected property and patents.",
          "No single cause is enough on its own. Exam answers that give one reason and stop are describing, not explaining.",
        ],
      },
      {
        heading: "Life in the new towns",
        points: [
          "Cities grew far faster than anyone could build for. Manchester went from about 25,000 people in 1770 to over 300,000 by 1850.",
          "Housing was thrown up back-to-back with no drains, shared privies and no clean water supply.",
          "Cholera epidemics hit in 1831, 1848 and 1854; nobody yet knew what caused it.",
          "Working days of 12 to 16 hours were normal, including for children.",
          "Life expectancy in Manchester in the 1840s was around 26; in rural Rutland it was around 45.",
        ],
      },
      {
        heading: "Children and the factory reforms",
        points: [
          "Children were used because they were cheap, small enough to crawl under machinery, and could not argue.",
          "The 1833 Factory Act banned under-9s from textile mills and limited 9–13 year olds to 9 hours a day. Crucially it also appointed INSPECTORS — the first law with teeth.",
          "The 1842 Mines Act banned women and all boys under 10 from working underground, after a report with illustrations shocked Parliament.",
          "The 1847 Ten Hours Act limited women and children to ten hours a day.",
          "Reform was slow, resisted by factory owners, and driven by campaigners such as Lord Shaftesbury and by the reports of investigators like Edwin Chadwick.",
        ],
      },
      {
        heading: "Protest and change",
        points: [
          "Luddites (1811–13) broke machines that were replacing skilled work. They were not anti-technology in general — they were skilled workers losing their livelihoods.",
          "Peterloo (1819): cavalry charged a peaceful crowd of around 60,000 in Manchester demanding parliamentary reform. At least 18 died.",
          "The 1832 Reform Act gave the vote to more middle-class men but still excluded the working class entirely.",
          "The Chartists (1838–48) demanded votes for all men, secret ballots and paid MPs. They failed at the time; five of their six demands are now law.",
          "Trade unions were legalised in 1824 but remained weak until later in the century.",
        ],
      },
    ],
    flashcards: [
      { term: "Industrial Revolution", definition: "The transformation of Britain from an agricultural, rural economy into an industrial, urban one, roughly 1750–1900." },
      { term: "Domestic system", definition: "Making goods, especially cloth, at home by hand — the system that factories replaced." },
      { term: "Factory system", definition: "Production concentrated in one building around powered machinery, with workers paid wages and kept to fixed hours." },
      { term: "Urbanisation", definition: "The movement of population from the countryside into towns and cities." },
      { term: "Steam engine", definition: "An engine driven by steam pressure; Watt's improved version of 1769 let factories be built anywhere, not just beside rivers." },
      { term: "Back-to-back housing", definition: "Cheap terraced houses built sharing rear walls, with no through ventilation and often no drains." },
      { term: "Cholera", definition: "A water-borne disease that killed tens of thousands in epidemics from 1831 onwards, before its cause was understood." },
      { term: "Luddites", definition: "Skilled textile workers who broke machinery between 1811 and 1813 because it was destroying their trade." },
      { term: "Peterloo Massacre", definition: "The 1819 cavalry charge on a peaceful reform meeting in Manchester, killing at least 18 people." },
      { term: "Chartism", definition: "A working-class movement of 1838–48 demanding six political reforms including votes for all men and a secret ballot." },
      { term: "Factory Act 1833", definition: "The law limiting child labour in textile mills and, for the first time, appointing inspectors to enforce it." },
      { term: "Mines Act 1842", definition: "The law banning women and boys under 10 from working underground." },
      { term: "Laissez-faire", definition: "The belief that government should not interfere in business — the main argument used against factory reform." },
    ],
    examTips: [
      {
        tip: "Hold the good and the bad together",
        detail:
          "The Industrial Revolution made Britain rich and made millions of lives miserable. An answer that only celebrates or only condemns is a weaker answer than one that weighs both.",
      },
      {
        tip: "Give more than one cause, and rank them",
        detail:
          "'Why did the Industrial Revolution begin in Britain?' wants several factors AND a judgement about which mattered most. The ranking is where the higher marks are.",
      },
      {
        tip: "Use precise dates and figures",
        detail:
          "'Manchester grew from 25,000 to over 300,000 between 1770 and 1850' is worth far more than 'towns got much bigger'. Learn a handful of concrete numbers.",
      },
      {
        tip: "Explain why reform was so slow",
        detail:
          "Laissez-faire beliefs, the political power of factory owners, and fear that regulation would ruin British competitiveness. Naming the resistance explains the timing.",
      },
      {
        tip: "Don't judge 1830 by 2026's standards",
        detail:
          "Explaining why people accepted child labour — poverty, custom, and the absence of any idea that the state should intervene — is analysis. Simply calling it evil is not.",
      },
      {
        tip: "Say what made the 1833 Act different",
        detail:
          "Earlier laws existed and were ignored. The 1833 Act appointed inspectors. Enforcement is the point, and most students miss it.",
      },
      {
        tip: "Link causes to consequences explicitly",
        detail:
          "Steam power meant factories could be built anywhere, which meant towns grew where the coal was, which meant housing could not keep up, which meant disease. Show the chain.",
      },
    ],

    workedExamples: [
      {
        question: "Explain why the Industrial Revolution began in Britain rather than elsewhere.",
        steps: [
          "Start with resources: Britain had coal and iron ore in large quantities and often close together, so fuel and raw material did not have to travel far.",
          "Add capital: there was money available to invest, some of it generated by colonial trade and the profits of slavery.",
          "Add empire: colonies supplied raw cotton and then bought the finished cloth, so there was both supply and demand.",
          "Add transport: canals and then railways moved heavy goods inland cheaply, which coal and iron absolutely require.",
          "Finish with a judgement: resources made it possible, but without capital and markets they would have stayed in the ground — so the combination is the answer, with empire and capital arguably decisive.",
        ],
        answer:
          "Coal and iron close together, capital available to invest, an empire supplying cotton and buying cloth, and canals and railways to move heavy goods. No single factor is sufficient — resources made industry possible, but capital and markets are what turned possibility into fact.",
      },
      {
        question:
          "Why did life expectancy in industrial cities fall so far below the countryside?",
        steps: [
          "Cities grew far faster than housing could be built, so people were packed into whatever existed.",
          "Back-to-back houses had no through ventilation, no drains and shared privies, often draining into the same water people drank.",
          "Nobody yet knew that cholera and typhoid were water-borne — miasma theory blamed bad air, so sewage in the water supply was not recognised as the danger.",
          "Work itself was dangerous: machinery without guards, coal dust, and 12–16 hour days from childhood.",
          "So it was not one cause but overcrowding, sanitation, ignorance of disease and dangerous work compounding one another.",
        ],
        answer:
          "Overcrowding, no sanitation, water supplies contaminated with sewage, no understanding of how disease spread, and dangerous work from childhood. Manchester's life expectancy of about 26 in the 1840s against roughly 45 in rural Rutland shows the scale.",
      },
      {
        question:
          "'The Chartists failed.' How far do you agree?",
        steps: [
          "Agree first, with evidence: all three petitions were rejected by Parliament, the 1848 rally fizzled, and leaders were imprisoned or transported.",
          "But then test the word 'failed' against a longer timescale.",
          "Five of the six Chartist demands are now law — votes for all men, secret ballot, no property qualification, paid MPs, equal constituencies. Only annual parliaments never happened.",
          "Consider what else they achieved: they organised working people politically on a national scale for the first time.",
          "Reach a judgement: they failed in their own lifetimes and were vindicated afterwards, so the answer depends entirely on the timescale you judge them over — which is the point worth making.",
        ],
        answer:
          "They failed immediately — every petition was rejected — but five of their six demands became law within 70 years. Whether that is failure depends on the timescale, and saying so explicitly is stronger than picking a side.",
      },
      {
        question:
          "Why were the Luddites not simply opposed to progress?",
        steps: [
          "Identify who they were: skilled textile workers, especially croppers and weavers, with years of training behind them.",
          "The new machines did not need that skill, so their trade and their wages disappeared.",
          "They broke specific machines belonging to specific employers, not machinery in general.",
          "There was no unemployment benefit, no retraining, and no legal way to negotiate — unions were illegal until 1824.",
          "So the machine-breaking was a bargaining tactic by people with no other lever, not a rejection of technology.",
        ],
        answer:
          "They were skilled workers whose trade was being destroyed, with unions illegal and no other way to bargain. They attacked particular machines belonging to particular employers — a tactic, not a philosophy.",
      },
    ],

    practice: [
      { question: "Roughly what period does the Industrial Revolution cover? Give the two centuries as e.g. 1600-1700.",
        accept: ["1750-1900", "1750 - 1900", "1750to1900"],
        answer: "Around 1750 to 1900, though historians argue about both ends of that range." },
      { question: "What was the system of making cloth at home called?",
        accept: ["domestic system", "the domestic system", "cottage industry"],
        answer: "The domestic system, sometimes called cottage industry — work done at home by hand before factories." },
      { question: "Who improved the steam engine in 1769?",
        accept: ["james watt", "watt"],
        answer: "James Watt. His improved engine freed factories from needing to sit beside running water." },
      { question: "In which year was the Factory Act that first appointed inspectors?",
        accept: ["1833"],
        answer: "1833. Earlier laws existed but were ignored; inspectors are what made this one different." },
      { question: "In which year did the Mines Act ban women and young boys from working underground?",
        accept: ["1842"],
        answer: "1842, passed after an illustrated report shocked Parliament." },
      { question: "What is the name for the movement of people from countryside to towns?",
        accept: ["urbanisation", "urbanization"],
        answer: "Urbanisation. British cities grew far faster than housing or sanitation could keep up with." },
      { question: "In which year was the Peterloo Massacre?",
        accept: ["1819"],
        answer: "1819, when cavalry charged a peaceful reform meeting in Manchester, killing at least 18 people." },
      { question: "What were the machine-breakers of 1811–13 called?",
        accept: ["luddites", "the luddites"],
        answer: "The Luddites — skilled textile workers whose trade was being destroyed by new machinery." },
      { question: "How many demands did the Chartists make?",
        accept: ["6", "six"],
        answer: "Six. Five of them are now law; only annual parliaments never happened." },
      { question: "Which Chartist demand has never become law?",
        accept: ["annual parliaments", "annual elections", "annual parliament"],
        answer: "Annual parliaments — general elections every year." },
      { question: "Name the water-borne disease that caused major epidemics from 1831.",
        accept: ["cholera"],
        answer: "Cholera. Its cause was not understood at the time; miasma theory blamed bad air instead." },
      { question: "What was the belief that government should not interfere in business called?",
        accept: ["laissez faire", "laissez-faire", "laissezfaire"],
        answer: "Laissez-faire — the main argument used against factory reform." },
      { question: "Roughly what was life expectancy in 1840s Manchester?",
        accept: ["26", "about 26", "around 26"],
        answer: "About 26, against roughly 45 in rural Rutland — a gap that shows what industrial cities did to health." },
      { question: "In which year were trade unions legalised?",
        accept: ["1824"],
        answer: "1824, though unions remained weak for decades afterwards." },
      { question: "Roughly what was Britain's population in 1900, in millions?",
        accept: ["40", "40 million", "over 40"],
        answer: "Over 40 million, up from around 6 million in 1750." },
      { question: "What type of cheap housing shared its rear wall with the house behind?",
        accept: ["back to back", "back-to-back", "backtoback", "back to back housing"],
        answer: "Back-to-back housing — no through ventilation, no drains, and shared privies." },
      { question: "Explain why factory reform took so long, despite conditions being widely known.",
        answer: "Three forces held it back. Laissez-faire was the dominant belief of the age: government interference in business was seen as wrong in principle, not merely inconvenient. Factory owners were wealthy and politically powerful, and many sat in the Parliament being asked to regulate them. And there was a genuine fear that regulating British factories would let foreign competitors undercut them, costing the jobs the workers depended on. Reform came when campaigners like Shaftesbury, and investigators whose reports were impossible to ignore, made the human cost more politically dangerous than the economic argument. (Mark this one yourself.)" },
      { question: "'The Industrial Revolution improved life in Britain.' How far do you agree?",
        answer: "It depends entirely on when and for whom. In the long run it produced enormous wealth, railways, cheap cloth, and eventually the public health reforms and rising wages that made life better than anything before it. In the short run, for the first two or three generations of factory workers, it produced overcrowding, filth, cholera, dangerous work and life expectancies in the twenties. A strong answer separates the immediate from the eventual, and is clear that the people who paid the cost were largely not the people who received the benefit. (Mark this one yourself.)" },
      {
        question: "What was a major cause of the Industrial Revolution in Britain?",
        choices: [
          "Access to coal, iron, capital and new technology",
          "A fall in population",
          "The end of overseas trade",
          "A ban on new inventions",
        ],
        accept: [
          "Access to coal, iron, capital and new technology",
        ],
        answer: "Empire markets, canals and later railways all contributed, and historians debate which factor mattered most.",
      },
      {
        question: "What was URBANISATION?",
        choices: [
          "The rapid growth of towns and cities",
          "The improvement of farming",
          "The building of canals",
          "The decline of industry",
        ],
        accept: [
          "The rapid growth of towns and cities",
        ],
        answer: "Housing and sanitation could not keep pace, which is why cholera and typhus spread so readily in industrial cities.",
      },
      {
        question: "Why were early factory conditions criticised?",
        choices: [
          "Long hours, dangerous machinery and child labour",
          "Wages were too high",
          "Factories were too small",
          "There was too little work",
        ],
        accept: [
          "Long hours, dangerous machinery and child labour",
        ],
        answer: "A series of Factory Acts gradually limited hours and ages, though enforcement was weak at first.",
      },
      {
        question: "What effect did the railways have?",
        choices: [
          "They moved goods and people faster, transforming trade and travel",
          "They reduced industrial output",
          "They replaced all canals immediately",
          "They were used only for passengers",
        ],
        accept: [
          "They moved goods and people faster, transforming trade and travel",
        ],
        answer: "They also created a national market, standardised time across the country, and generated enormous demand for coal and iron.",
      },
      {
        question: "What was the Public Health Act of 1875 intended to address?",
        choices: [
          "Poor sanitation and disease in industrial towns",
          "Factory wages",
          "Rail safety",
          "Child education",
        ],
        accept: [
          "Poor sanitation and disease in industrial towns",
        ],
        answer: "It made local authorities responsible for water, sewerage and waste, marking a shift away from leaving public health to individuals.",
      },
    ],

    misconceptions: [
      { wrong: "\"The Luddites were against technology.\"",
        right: "They were skilled workers whose trade was being destroyed, breaking specific machines as a bargaining tactic when unions were illegal and no other lever existed." },
      { wrong: "\"The Industrial Revolution happened suddenly.\"",
        right: "It took roughly 150 years, and different industries changed at completely different speeds. Textiles mechanised early; farming and building did not." },
      { wrong: "\"The 1833 Factory Act ended child labour.\"",
        right: "It applied only to textile mills, banned under-9s and limited older children's hours. Children worked in mines, chimneys, farms and workshops for decades afterwards." },
      { wrong: "\"The 1832 Reform Act gave working men the vote.\"",
        right: "It extended the vote to more middle-class men and left the working class excluded — which is precisely why Chartism began." },
      { wrong: "\"People moved to cities because they wanted factory work.\"",
        right: "Many were pushed rather than pulled: enclosure removed access to land, and the domestic system collapsed as machines took over. Choice was often the wrong word." },
      { wrong: "\"Victorians knew the slums caused disease and did nothing.\"",
        right: "They knew slums were unhealthy but believed disease came from bad air, not water. That mistaken theory is why sewage in the water supply went unaddressed for decades." },
    ],
  },

  "history/the-transatlantic-slave-trade": {
    summary:
      "For over 300 years European ships carried enslaved Africans across the Atlantic to work in the Americas. Britain became the largest carrier of all, and the profits helped build British ports, banks and industry. This topic covers how the trade worked, what it did to the people caught in it, how it was ended, and why the people who ended it were not only white campaigners in Parliament.",
    keyFacts: [
      {
        heading: "The scale and the route",
        points: [
          "Around 12.5 million Africans were forcibly transported between the 16th and 19th centuries; roughly 10.7 million survived the crossing.",
          "British ships carried around 3.1 million of them, more than any other nation, mostly between 1690 and 1807.",
          "The 'triangular trade': manufactured goods from Britain to West Africa; enslaved people from Africa to the Americas; sugar, tobacco and cotton back to Britain.",
          "The middle leg, the Middle Passage, took six to eight weeks. Around 15% died on board, from disease, dehydration, violence or suicide.",
          "Liverpool, Bristol and London grew rich on it. By the 1790s Liverpool ships carried roughly 80% of the British trade.",
        ],
      },
      {
        heading: "The Middle Passage",
        points: [
          "People were chained below decks in spaces often less than a metre high, packed to maximise numbers.",
          "Dysentery, smallpox and 'the bloody flux' spread quickly in those conditions.",
          "Resistance was constant: refusing food, revolts on board, and jumping overboard. Roughly one voyage in ten saw a rebellion.",
          "The Zong massacre (1781) — 132 enslaved people thrown overboard so the owners could claim insurance — became a key campaigning case, precisely because it was treated in court as a question about cargo.",
          "Olaudah Equiano's autobiography (1789) gave British readers a first-hand account and became a bestseller.",
        ],
      },
      {
        heading: "Life on the plantations",
        points: [
          "Most were taken to the Caribbean and Brazil, not North America; only about 4% of the total went to what became the USA.",
          "Sugar was the main British crop, and the most lethal — cutting cane in Caribbean heat killed people so fast that plantations relied on constant new arrivals.",
          "Enslaved people were legally property: they could be sold, punished or killed with little consequence for the owner.",
          "Families were routinely separated by sale.",
          "Resistance took many forms: slowing work, breaking tools, escape to maroon communities, and open revolt.",
        ],
      },
      {
        heading: "Resistance and revolution",
        points: [
          "The Haitian Revolution (1791–1804) was the only successful large-scale slave revolt in history, creating the first Black republic and terrifying slave-owning powers.",
          "Toussaint L'Ouverture led it until his capture in 1802; Haiti won independence in 1804.",
          "Jamaica's Baptist War (1831–32), led by Samuel Sharpe, involved perhaps 60,000 people. Its brutal suppression turned British opinion sharply against slavery.",
          "Enslaved people's own resistance made the system expensive and dangerous to maintain — a cause of abolition that older accounts often left out.",
          "Historians now weigh this alongside the parliamentary campaign, rather than treating abolition as something done FOR enslaved people.",
        ],
      },
      {
        heading: "Abolition",
        points: [
          "1787: the Society for the Abolition of the Slave Trade founded. Thomas Clarkson gathered evidence; William Wilberforce led it in Parliament.",
          "Olaudah Equiano and Ottobah Cugoano, both formerly enslaved, campaigned and wrote — Black abolitionists were central, not marginal.",
          "1807: the Slave Trade Act banned the TRADE in the British Empire. Slavery itself remained legal.",
          "1833: the Slavery Abolition Act freed enslaved people across most of the Empire from 1834, with an 'apprenticeship' period that lasted until 1838.",
          "The government paid £20 million in compensation — to the SLAVE OWNERS, not to the people who had been enslaved. The loan was only fully repaid in 2015.",
        ],
      },
    ],
    flashcards: [
      { term: "Transatlantic slave trade", definition: "The forced transportation of around 12.5 million Africans across the Atlantic between the 16th and 19th centuries." },
      { term: "Triangular trade", definition: "The three-legged route: goods to Africa, enslaved people to the Americas, plantation crops back to Europe." },
      { term: "Middle Passage", definition: "The Atlantic crossing itself, lasting six to eight weeks, on which roughly 15% of captives died." },
      { term: "Chattel slavery", definition: "A system in which enslaved people were legally property — able to be bought, sold and inherited." },
      { term: "Plantation", definition: "A large estate growing a single cash crop such as sugar, tobacco or cotton, worked by enslaved labour." },
      { term: "Zong massacre", definition: "The 1781 killing of 132 enslaved people thrown overboard for an insurance claim, which became a major abolitionist case." },
      { term: "Olaudah Equiano", definition: "A formerly enslaved man whose 1789 autobiography became a bestseller and a powerful abolitionist argument." },
      { term: "Thomas Clarkson", definition: "The abolitionist who gathered the evidence — ship plans, shackles, testimony — that the parliamentary campaign relied on." },
      { term: "William Wilberforce", definition: "The MP who led the abolition campaign in Parliament for twenty years until the 1807 Act." },
      { term: "Toussaint L'Ouverture", definition: "The leader of the Haitian Revolution, the only successful large-scale slave revolt in history." },
      { term: "Samuel Sharpe", definition: "The leader of Jamaica's Baptist War of 1831–32, whose suppression shifted British opinion towards abolition." },
      { term: "Maroon communities", definition: "Settlements of escaped enslaved people, often in mountains or forests, who resisted recapture." },
      { term: "Slave Trade Act 1807", definition: "The law banning the trading of enslaved people in the British Empire — but not slavery itself." },
      { term: "Slavery Abolition Act 1833", definition: "The law freeing enslaved people across most of the British Empire from 1834, with compensation paid to owners." },
    ],
    examTips: [
      {
        tip: "Never call it 'the slave trade' without the people",
        detail:
          "Say 'enslaved people' rather than 'slaves'. Enslavement was something done to them, not what they were. Examiners notice, and so should you.",
      },
      {
        tip: "Give abolition more than one cause",
        detail:
          "The parliamentary campaign, resistance and revolt by enslaved people, changing economics, and religious argument all contributed. An answer with only Wilberforce in it is incomplete.",
      },
      {
        tip: "Keep 1807 and 1833 apart",
        detail:
          "1807 banned the TRADE. 1833 abolished SLAVERY. Mixing them up is the single most common error on this topic and it changes the meaning of everything after it.",
      },
      {
        tip: "Use precise figures",
        detail:
          "12.5 million transported, 3.1 million on British ships, roughly 15% dying on the Middle Passage. Specific numbers turn assertion into evidence.",
      },
      {
        tip: "Remember who was compensated",
        detail:
          "£20 million went to slave owners; formerly enslaved people received nothing. That single fact tells you a great deal about how abolition was understood at the time.",
      },
      {
        tip: "Foreground Black resistance",
        detail:
          "Haiti, the Baptist War, shipboard revolts, Equiano and Cugoano. Abolition was not simply granted from above, and saying so is both accurate and better history.",
      },
      {
        tip: "Write plainly about atrocity",
        detail:
          "Restrained, factual writing carries more weight than dramatic language. Let the evidence do the work — examiners reward precision, not adjectives.",
      },
    ],

    workedExamples: [
      {
        question: "Explain why the transatlantic slave trade was abolished in 1807.",
        steps: [
          "The campaign: Clarkson's evidence and Wilberforce's twenty years of parliamentary pressure kept it on the agenda when it could easily have died.",
          "Testimony: Equiano's and Cugoano's writing made the human reality unavoidable for a British reading public.",
          "Resistance: the Haitian Revolution showed the system could be overthrown by force, which frightened slave-owning interests and weakened their political confidence.",
          "Economics: some historians argue the trade was becoming less profitable, though this is contested — Eric Williams argued it, later historians have pushed back.",
          "Politics: war with France made attacking the trade of French colonies attractive, and the 1806 Foreign Slave Trade Act came partly disguised as a war measure.",
          "Judgement: campaign and conscience mattered, but they succeeded when they aligned with economic and wartime self-interest.",
        ],
        answer:
          "A combination: twenty years of campaigning and testimony, the fear created by Haiti, shifting economic arguments, and wartime politics that made abolition strategically convenient. Moral argument was necessary but was not, on its own, sufficient.",
      },
      {
        question:
          "Why is the Haitian Revolution significant?",
        steps: [
          "It was the only large-scale revolt by enslaved people ever to succeed in creating an independent state.",
          "It destroyed the most profitable colony in the Caribbean, showing the system was not invulnerable.",
          "It terrified slave-owning societies everywhere, hardening some and frightening others towards reform.",
          "It gave enslaved people elsewhere concrete proof that freedom could be taken rather than granted.",
          "It complicates the story of abolition as something done by benevolent Europeans, which is why older textbooks often mentioned it only briefly.",
        ],
        answer:
          "It created the first Black republic, destroyed the Caribbean's richest colony, proved slavery could be overthrown by the enslaved themselves, and forced a rethink across the slave-owning world. It is also the clearest evidence against telling abolition purely as a story of white benevolence.",
      },
      {
        question:
          "What does the compensation paid in 1833 tell us about attitudes at the time?",
        steps: [
          "£20 million was paid out — roughly 40% of the government's annual budget.",
          "Every penny went to slave OWNERS, as compensation for the loss of their property.",
          "Formerly enslaved people received nothing, and were made to work as unpaid 'apprentices' until 1838.",
          "This shows that slavery was being ended as a transaction in property law, not as the correction of a crime against people.",
          "The loan was so large it was only fully repaid by the British taxpayer in 2015 — a fact worth citing because it makes the scale concrete.",
        ],
        answer:
          "That slavery was being unwound as a property matter rather than treated as a wrong done to people. Owners were paid; the enslaved received nothing and were held in unpaid apprenticeship until 1838.",
      },
      {
        question:
          "Describe the different forms resistance took.",
        steps: [
          "In Africa and on board: refusing food, revolt — around one voyage in ten — and jumping overboard.",
          "Day to day on plantations: working slowly, breaking tools, feigning illness, preserving languages, religion and family ties.",
          "Escape: to maroon communities in mountains and forests, which sometimes negotiated with colonial authorities from strength.",
          "Open revolt: Jamaica's Baptist War in 1831–32 involved perhaps 60,000 people.",
          "Revolution: Haiti, 1791–1804, which succeeded outright.",
          "The point to draw out is that resistance was continuous, took whatever form was survivable, and had political consequences in Britain.",
        ],
        answer:
          "It ranged from refusing food and shipboard revolt, through everyday sabotage and cultural survival, to escape, mass rebellion and outright revolution. It was continuous, and it made the system expensive and frightening to maintain.",
      },
    ],

    practice: [
      { question: "Roughly how many Africans were forcibly transported across the Atlantic, in millions?",
        accept: ["12.5", "12.5 million", "12 million"],
        answer: "Around 12.5 million were transported; roughly 10.7 million survived the crossing." },
      { question: "What is the name for the Atlantic crossing itself?",
        accept: ["middle passage", "the middle passage"],
        answer: "The Middle Passage, which took six to eight weeks and killed roughly 15% of those on board." },
      { question: "What is the three-legged trading route called?",
        accept: ["triangular trade", "the triangular trade", "triangle trade"],
        answer: "The triangular trade: goods to Africa, enslaved people to the Americas, crops back to Britain." },
      { question: "In which year was the British slave TRADE abolished?",
        accept: ["1807"],
        answer: "1807. The trade was banned; slavery itself remained legal in the Empire until 1833." },
      { question: "In which year was slavery itself abolished across most of the British Empire?",
        accept: ["1833"],
        answer: "1833, taking effect in 1834, with an unpaid 'apprenticeship' period lasting until 1838." },
      { question: "Which MP led the abolition campaign in Parliament?",
        accept: ["wilberforce", "william wilberforce"],
        answer: "William Wilberforce, who led it for twenty years — though he was one part of a much wider campaign." },
      { question: "Which abolitionist gathered the physical evidence, including shackles and ship plans?",
        accept: ["clarkson", "thomas clarkson"],
        answer: "Thomas Clarkson, whose evidence-gathering underpinned the parliamentary case." },
      { question: "Which formerly enslaved man wrote a bestselling 1789 autobiography?",
        accept: ["equiano", "olaudah equiano"],
        answer: "Olaudah Equiano. His account made the reality unavoidable for British readers." },
      { question: "Which ship's 1781 massacre became a major abolitionist case?",
        accept: ["zong", "the zong"],
        answer: "The Zong. 132 enslaved people were thrown overboard so the owners could claim insurance." },
      { question: "Which revolution created the first Black republic?",
        accept: ["haitian revolution", "haiti", "the haitian revolution"],
        answer: "The Haitian Revolution, 1791–1804 — the only large-scale slave revolt ever to succeed." },
      { question: "Who led the Haitian Revolution until his capture in 1802?",
        accept: ["toussaint louverture", "toussaint l'ouverture", "toussaint", "louverture"],
        answer: "Toussaint L'Ouverture. Haiti won independence in 1804, after his death in a French prison." },
      { question: "Who led Jamaica's Baptist War of 1831–32?",
        accept: ["samuel sharpe", "sam sharpe", "sharpe"],
        answer: "Samuel Sharpe. The brutal suppression of the rising shifted British opinion sharply." },
      { question: "Who received the £20 million compensation in 1833: the owners or the enslaved?",
        accept: ["the owners", "owners", "slave owners", "the slave owners"],
        answer: "The slave owners. Formerly enslaved people received nothing at all." },
      { question: "Which British port carried around 80% of the trade by the 1790s?",
        accept: ["liverpool"],
        answer: "Liverpool, ahead of Bristol and London." },
      { question: "What is the term for settlements of escaped enslaved people?",
        accept: ["maroon", "maroons", "maroon communities"],
        answer: "Maroon communities, often in mountains or forests, which sometimes negotiated from a position of strength." },
      { question: "Roughly what percentage of those transported died during the Middle Passage?",
        accept: ["15", "15%", "about 15"],
        answer: "About 15%, from disease, dehydration, violence and suicide." },
      { question: "Explain why abolition should not be told only as a story of British campaigners.",
        answer: "Because it leaves out the people most involved. Enslaved people resisted continuously — refusing food, revolting on around one voyage in ten, escaping to maroon communities, and rising in enormous numbers in Jamaica in 1831. Haiti went further and destroyed slavery by force, creating an independent republic and proving the system could be overthrown from below. That resistance made slavery expensive, dangerous and politically frightening to maintain, which is part of why Parliament acted. Telling the story only through Wilberforce turns the enslaved into people things were done for, rather than people who acted. (Mark this one yourself.)" },
      { question: "Explain how the profits of slavery shaped Britain itself.",
        answer: "They were not confined to the ports. Liverpool, Bristol and Glasgow were built on the trade directly, but the money spread far wider: into banks and insurance houses, into country estates, into the canals and factories of the early Industrial Revolution, and into institutions including universities and churches. Sugar, tobacco and cotton reshaped what ordinary British people ate, wore and could afford. And the 1833 compensation payment tied it to the public finances so tightly that the loan was only fully repaid in 2015 — meaning taxpayers alive today were still paying it off. (Mark this one yourself.)" },
      {
        question: "What was the Middle Passage?",
        choices: [
          "The sea crossing carrying enslaved Africans to the Americas",
          "The route from Britain to Africa",
          "The journey of goods back to Europe",
          "A trade route through Asia",
        ],
        accept: [
          "The sea crossing carrying enslaved Africans to the Americas",
        ],
        answer: "Conditions were lethally overcrowded, and a large proportion of those transported died before arrival.",
      },
      {
        question: "What was the triangular trade?",
        choices: [
          "Goods to Africa, enslaved people to the Americas, produce to Europe",
          "A three-way alliance",
          "A treaty between three empires",
          "A shipping route within Europe",
        ],
        accept: [
          "Goods to Africa, enslaved people to the Americas, produce to Europe",
        ],
        answer: "Sugar, tobacco and cotton returned to Europe, making ports such as Bristol and Liverpool extremely wealthy.",
      },
      {
        question: "Who was Olaudah Equiano?",
        choices: [
          "A formerly enslaved man whose writing supported abolition",
          "A ship's captain",
          "A British Prime Minister",
          "A plantation owner",
        ],
        accept: [
          "A formerly enslaved man whose writing supported abolition",
        ],
        answer: "His published account gave abolitionists first-hand testimony, which was far harder to dismiss than argument alone.",
      },
      {
        question: "What did the 1807 Act achieve?",
        choices: [
          "It abolished the slave TRADE in the British Empire",
          "It freed all enslaved people immediately",
          "It ended slavery worldwide",
          "It banned sugar imports",
        ],
        accept: [
          "It abolished the slave TRADE in the British Empire",
        ],
        answer: "Slavery itself continued until the 1833 Act, and even then apprenticeship delayed full freedom. The two dates are often confused.",
      },
      {
        question: "What role did enslaved people themselves play in abolition?",
        choices: [
          "Resistance and rebellion increased the cost of maintaining slavery",
          "They played no part",
          "They opposed abolition",
          "They only petitioned Parliament",
        ],
        accept: [
          "Resistance and rebellion increased the cost of maintaining slavery",
        ],
        answer: "Revolts in the Caribbean, and the Haitian Revolution above all, made slavery look expensive and dangerous to sustain.",
      },
    ],

    misconceptions: [
      { wrong: "\"The 1807 Act ended slavery in the British Empire.\"",
        right: "It ended the TRADE in enslaved people. Slavery itself remained legal until the 1833 Act took effect in 1834, and unpaid apprenticeship continued until 1838." },
      { wrong: "\"Most enslaved Africans were taken to North America.\"",
        right: "Only about 4% went to what became the United States. The great majority went to the Caribbean and Brazil, where sugar killed people fastest." },
      { wrong: "\"Enslaved people accepted their situation.\"",
        right: "Resistance was constant and took every available form, from sabotage and escape to shipboard revolt and, in Haiti, successful revolution." },
      { wrong: "\"Britain abolished slavery because Britain was morally advanced.\"",
        right: "Britain was also the largest carrier of enslaved people in the world for over a century. Abolition came from campaigning, resistance, economics and wartime politics together." },
      { wrong: "\"Formerly enslaved people were compensated.\"",
        right: "The £20 million went entirely to the owners, as payment for lost property. The people who had been enslaved received nothing." },
      { wrong: "\"'Slave' and 'enslaved person' mean the same thing.\"",
        right: "Enslavement was a status forced on people, not an identity. The wording matters, and using it accurately is part of writing good history." },
    ],
  },

  "history/the-british-empire": {
    summary:
      "At its height the British Empire ruled around a quarter of the world's land and people. It made Britain enormously wealthy and powerful, and it was built and held by conquest, settlement and force. This topic is about how it grew, how it was run, what it did to the people it ruled, how it ended — and why historians still argue so fiercely about how to judge it.",
    keyFacts: [
      {
        heading: "Growth and scale",
        points: [
          "The 'first' empire, to 1783, was centred on the Americas and Caribbean and built largely on sugar, tobacco and enslaved labour. Losing the American colonies in 1783 ended it.",
          "The 'second' empire turned east: India, Africa, Australia, New Zealand and South East Asia.",
          "At its peak around 1920 it covered roughly 24% of the world's land and ruled about 412 million people — around a quarter of humanity.",
          "The East India Company, a private company with its own army, ruled much of India until the Crown took direct control in 1858.",
          "The Scramble for Africa (1881–1914) saw European powers divide almost the entire continent between them, mostly by agreement in Europe rather than by any process involving Africans.",
        ],
      },
      {
        heading: "How it was governed",
        points: [
          "Direct rule: British officials governed, as in much of India after 1858.",
          "Indirect rule: existing local rulers governed under British supervision, cheaper and used widely in Africa.",
          "Settler colonies such as Canada, Australia and New Zealand gained self-government early; colonies of non-white populations did not.",
          "'Divide and rule' — governing by sharpening existing divisions — was a standard technique, and left consequences that outlasted the Empire.",
          "The Empire was run by remarkably few people. British India was administered by around 1,000 civil servants over hundreds of millions, which only worked with local collaboration and the credible threat of force.",
        ],
      },
      {
        heading: "India",
        points: [
          "The East India Company won control after Plassey (1757) and expanded across the subcontinent.",
          "The Indian Rebellion of 1857 — called the Indian Mutiny in older British accounts — was suppressed with great brutality on both sides and ended Company rule.",
          "Britain took direct control in 1858; Victoria was declared Empress of India in 1877.",
          "Indian raw materials fed British industry while Indian textile production, once the finest in the world, declined sharply under British tariffs and competition.",
          "Famines killed millions, most notoriously in Bengal in 1943, when perhaps 2–3 million died. Historians still argue over how far British wartime policy caused it.",
          "The Amritsar massacre (1919), when troops fired on an unarmed crowd killing several hundred, was a turning point for Indian nationalism.",
        ],
      },
      {
        heading: "How it ended",
        points: [
          "The Second World War left Britain bankrupt and unable to police an empire.",
          "India and Pakistan became independent in 1947. Partition displaced 10–15 million people and killed perhaps a million.",
          "Ghana was the first sub-Saharan African colony to gain independence, in 1957; most of the rest followed within a decade.",
          "Independence was often won, not given: the Mau Mau uprising in Kenya (1952–60) was suppressed with detention camps and torture, admitted by the British government in 2013.",
          "The Suez Crisis (1956) exposed that Britain could no longer act as a world power without American approval.",
        ],
      },
      {
        heading: "Judging the Empire",
        points: [
          "Legacies claimed as positive: railways, a legal system, the English language, and administrative structures.",
          "Legacies claimed as negative: famine, massacre, extraction of wealth, borders drawn without regard to peoples, and racial hierarchies written into law.",
          "The infrastructure argument cuts both ways: Indian railways were built to move raw materials to ports, and were paid for by Indian taxpayers.",
          "This is a live historical debate, not a settled one. Niall Ferguson and Shashi Tharoor have argued it publicly and at length from opposite positions.",
          "The strongest exam answers set out both cases with evidence and reach a judgement, rather than reciting one side.",
        ],
      },
    ],
    flashcards: [
      { term: "Empire", definition: "A group of territories ruled from a single centre, usually acquired by conquest or settlement." },
      { term: "Colony", definition: "A territory controlled and often settled by another country, governed in that country's interests." },
      { term: "East India Company", definition: "A private British trading company with its own army, which ruled much of India until 1858." },
      { term: "Direct rule", definition: "Government by officials sent from Britain, replacing local rulers." },
      { term: "Indirect rule", definition: "Government through existing local rulers supervised by British officials — cheaper, and widely used in Africa." },
      { term: "Scramble for Africa", definition: "The rapid division of Africa between European powers between 1881 and 1914, largely agreed in Europe." },
      { term: "Indian Rebellion 1857", definition: "A major uprising against East India Company rule, after which the Crown took direct control of India." },
      { term: "Amritsar massacre", definition: "The 1919 shooting of an unarmed crowd in Amritsar, a turning point for Indian nationalism." },
      { term: "Partition", definition: "The 1947 division of British India into India and Pakistan, displacing 10–15 million people." },
      { term: "Decolonisation", definition: "The process by which colonies became independent states, mostly between 1945 and 1970." },
      { term: "Mau Mau uprising", definition: "The Kenyan rebellion of 1952–60, suppressed using detention camps and torture." },
      { term: "Suez Crisis", definition: "The 1956 failure that showed Britain could no longer act as a world power independently of the United States." },
      { term: "Commonwealth", definition: "The association of mostly former British colonies that survived the Empire's end." },
    ],
    examTips: [
      {
        tip: "Argue both sides before judging",
        detail:
          "This is one of the most contested topics in the subject. An answer that only praises or only condemns scores below one that weighs evidence on both sides and then decides.",
      },
      {
        tip: "Test the 'Britain built railways' argument",
        detail:
          "They were built to move raw materials to ports, financed by Indian taxpayers with guaranteed returns to British investors. Say what they were FOR, not just that they existed.",
      },
      {
        tip: "Name specific events",
        detail:
          "Amritsar 1919, Bengal 1943, Mau Mau 1952–60, Partition 1947. Concrete examples beat general statements about 'oppression' every time.",
      },
      {
        tip: "Say independence was usually won",
        detail:
          "Britain rarely handed power over willingly. Nationalist movements, war debts and armed resistance forced it. 'Britain granted independence' is doing a lot of quiet work.",
      },
      {
        tip: "Use the right words for 1857",
        detail:
          "'The Indian Mutiny' is the old British term and carries a judgement — that it was a betrayal by soldiers. 'Rebellion' or 'Uprising' is the more neutral choice, and using it shows you know why the label matters.",
      },
      {
        tip: "Be careful with contested figures",
        detail:
          "Bengal 1943 death tolls and Partition figures are estimates historians dispute. Saying 'perhaps 2–3 million, though estimates vary' is more accurate and more impressive than a confident single number.",
      },
    ],

    workedExamples: [
      {
        question: "Explain why Britain was able to rule India with so few officials.",
        steps: [
          "Around 1,000 British civil servants administered hundreds of millions of people, so brute numbers cannot be the answer.",
          "Collaboration: existing Indian rulers, landowners and administrators were incorporated rather than replaced, and had reasons to cooperate.",
          "The Indian Army, made up overwhelmingly of Indian soldiers under British officers, provided the force.",
          "Divide and rule: sharpening divisions between regions, religions and castes made united opposition harder to organise.",
          "The credible threat of overwhelming violence, demonstrated after 1857 and again at Amritsar in 1919.",
          "So it rested on collaboration backed by force — which also explains why it collapsed quickly once collaboration was withdrawn.",
        ],
        answer:
          "Through collaboration with existing Indian elites, an army of Indian soldiers under British officers, deliberate division of communities, and the demonstrated willingness to use extreme force. Once cooperation was withdrawn after 1945, the whole structure became unsustainable almost immediately.",
      },
      {
        question:
          "Explain why the British Empire ended when it did.",
        steps: [
          "The Second World War left Britain effectively bankrupt and dependent on American loans.",
          "The war also destroyed the myth of European invincibility — the fall of Singapore in 1942 was watched across Asia.",
          "Nationalist movements had grown strong, organised and popular, particularly Congress in India.",
          "Colonial troops who had fought for Britain returned expecting the freedoms they had been told they were defending.",
          "International pressure: both the USA and USSR opposed European empires, for different reasons.",
          "Suez in 1956 confirmed publicly what was already true — Britain could not act alone.",
        ],
        answer:
          "Bankruptcy after 1945, the collapse of the illusion of European invincibility, strong organised nationalist movements, returning colonial soldiers with raised expectations, and superpower opposition. Suez in 1956 made the loss of power impossible to hide.",
      },
      {
        question:
          "'The British Empire brought more benefit than harm.' How far do you agree?",
        steps: [
          "Set out the case for: railways, ports, legal and administrative systems, a common language, and the end of some local practices such as slavery within the Empire after 1833.",
          "Test each: railways were built for extraction and paid for by colonial taxpayers; legal systems entrenched racial hierarchy.",
          "Set out the case against: famines in India, massacres including Amritsar, the extraction of wealth, borders drawn without regard for peoples, and the camps in Kenya.",
          "Consider who is judging — the answer looks very different from Britain and from Bengal, and saying so is a historical point rather than a dodge.",
          "Reach a judgement, with the balance of evidence stated rather than asserted.",
        ],
        answer:
          "The infrastructure and institutions were real but were built to serve British interests and paid for by the colonised. Set against famine, massacre, extracted wealth and arbitrary borders, the balance is heavily negative — while acknowledging that a single verdict flattens an empire that spanned four centuries and every continent.",
      },
      {
        question:
          "Why is what you call the events of 1857 a historical question in itself?",
        steps: [
          "British accounts long called it the Indian Mutiny — a mutiny is soldiers breaking their oath, so the word contains a verdict.",
          "Indian accounts often call it the First War of Independence, which contains a different verdict.",
          "Neutral scholarship tends to prefer Rebellion or Uprising.",
          "The events themselves included soldiers, civilians, princes and peasants, so no single label covers them.",
          "The lesson generalises: the name a source uses tells you where the source is standing.",
        ],
        answer:
          "Because each name carries a judgement. 'Mutiny' frames it as soldiers betraying their oath; 'First War of Independence' frames it as a national liberation struggle. Noticing that a label is an argument is exactly the skill source questions test.",
      },
    ],

    practice: [
      { question: "Roughly what percentage of the world's land did the Empire cover at its peak?",
        accept: ["24", "24%", "about 24", "a quarter"],
        answer: "Around 24% — close to a quarter of the world's land, ruling about 412 million people." },
      { question: "Which private company ruled much of India until 1858?",
        accept: ["east india company", "the east india company", "eic"],
        answer: "The East India Company, which had its own army." },
      { question: "In which year did the Crown take direct control of India?",
        accept: ["1858"],
        answer: "1858, following the rebellion of 1857." },
      { question: "In which year was the Indian Rebellion?",
        accept: ["1857"],
        answer: "1857. Older British accounts call it the Indian Mutiny — a name that carries a judgement." },
      { question: "In which year did India and Pakistan become independent?",
        accept: ["1947"],
        answer: "1947. Partition displaced 10–15 million people and killed perhaps a million." },
      { question: "What is the name for the division of British India in 1947?",
        accept: ["partition", "the partition"],
        answer: "Partition, which created India and Pakistan and caused mass displacement and violence." },
      { question: "Which massacre in 1919 became a turning point for Indian nationalism?",
        accept: ["amritsar", "amritsar massacre", "jallianwala bagh"],
        answer: "The Amritsar massacre, when troops fired on an unarmed crowd killing several hundred." },
      { question: "What is the name for the rapid European division of Africa from 1881?",
        accept: ["scramble for africa", "the scramble for africa"],
        answer: "The Scramble for Africa, largely agreed between European powers in Europe." },
      { question: "Which was the first sub-Saharan African colony to gain independence?",
        accept: ["ghana"],
        answer: "Ghana, in 1957. Most of the rest of British Africa followed within a decade." },
      { question: "Which 1956 crisis showed Britain could no longer act as a world power alone?",
        accept: ["suez", "suez crisis", "the suez crisis"],
        answer: "The Suez Crisis, which Britain had to abandon under American pressure." },
      { question: "What is the term for ruling through existing local rulers?",
        accept: ["indirect rule"],
        answer: "Indirect rule — cheaper than direct rule and widely used across British Africa." },
      { question: "Which Kenyan uprising was suppressed with detention camps between 1952 and 1960?",
        accept: ["mau mau", "the mau mau", "mau mau uprising"],
        answer: "The Mau Mau uprising. The British government admitted the torture in 2013." },
      { question: "In which year was the Bengal famine in which perhaps 2–3 million died?",
        accept: ["1943"],
        answer: "1943. Historians still argue over how far British wartime policy caused it." },
      { question: "Which battle in 1757 began East India Company control?",
        accept: ["plassey", "battle of plassey", "the battle of plassey"],
        answer: "Plassey, 1757, after which the Company expanded across the subcontinent." },
      { question: "In which year was Victoria declared Empress of India?",
        accept: ["1877"],
        answer: "1877, nineteen years after the Crown took direct control." },
      { question: "What is the term for colonies becoming independent states?",
        accept: ["decolonisation", "decolonization"],
        answer: "Decolonisation, mostly between 1945 and 1970." },
      { question: "Explain why 'Britain granted independence' is a misleading way to describe decolonisation.",
        answer: "Because it makes Britain the actor and the colonised the recipients, when in most cases independence was fought for over decades. Congress had campaigned in India since the 1880s and mounted mass civil disobedience; Kenya's independence came after an armed uprising that Britain suppressed with detention camps and torture. Where Britain moved quickly it was usually because it could no longer afford or enforce the alternative — bankrupt after 1945, dependent on American loans, and facing organised opposition. 'Granted' describes the paperwork, not the process. (Mark this one yourself.)" },
      { question: "Explain why historians disagree so sharply about the British Empire.",
        answer: "Partly because it is genuinely enormous — four centuries, every continent, hundreds of societies — so almost any general claim can be evidenced somewhere and contradicted elsewhere. Partly because the same fact supports opposite readings: railways in India were real infrastructure and were also built for extraction, financed by Indian taxpayers with guaranteed profits for British investors. And partly because it is not really a dead subject: it bears on modern borders, migration, wealth and national identity, so historians are arguing about the present as well as the past. Ferguson and Tharoor reach opposite verdicts largely by weighting the same evidence differently. (Mark this one yourself.)" },
      {
        question: "What is meant by the term EMPIRE?",
        choices: [
          "A group of territories ruled by one dominant state",
          "A trading company",
          "A type of parliament",
          "An alliance of equals",
        ],
        accept: [
          "A group of territories ruled by one dominant state",
        ],
        answer: "At its height the British Empire covered roughly a quarter of the world's land and population.",
      },
      {
        question: "What was a major economic motive for empire?",
        choices: [
          "Access to raw materials and markets for British goods",
          "Reducing British exports",
          "Sharing wealth equally",
          "Ending international trade",
        ],
        accept: [
          "Access to raw materials and markets for British goods",
        ],
        answer: "Strategic, religious and prestige motives operated alongside economics, and historians disagree about their relative weight.",
      },
      {
        question: "What was the East India Company?",
        choices: [
          "A trading company that came to govern large parts of India",
          "A government department",
          "A shipping charity",
          "An Indian political party",
        ],
        accept: [
          "A trading company that came to govern large parts of India",
        ],
        answer: "After the 1857 rebellion, the British Crown took over direct rule, which lasted until independence in 1947.",
      },
      {
        question: "What does DECOLONISATION refer to?",
        choices: [
          "Colonies gaining independence from imperial rule",
          "The expansion of empire",
          "The building of new colonies",
          "A trade agreement",
        ],
        accept: [
          "Colonies gaining independence from imperial rule",
        ],
        answer: "It accelerated after 1945 as Britain's resources shrank and independence movements grew stronger.",
      },
      {
        question: "Why is the legacy of the British Empire debated today?",
        choices: [
          "Its effects included both development and exploitation and violence",
          "Nobody has studied it",
          "The records were destroyed",
          "It ended too recently to assess",
        ],
        accept: [
          "Its effects included both development and exploitation and violence",
        ],
        answer: "Railways, law and language sit alongside famine, partition and conflict. A strong answer weighs both rather than choosing one.",
      },
    ],

    misconceptions: [
      { wrong: "\"Britain gave its colonies independence peacefully.\"",
        right: "Some transfers were peaceful; many were not. Kenya, Malaya, Cyprus and Aden all involved armed conflict, and Partition cost perhaps a million lives." },
      { wrong: "\"The Empire was run by a huge British administration.\"",
        right: "British India was governed by around 1,000 civil servants. It depended on local collaboration and the credible threat of force, which is why it collapsed so fast once cooperation ended." },
      { wrong: "\"The railways prove the Empire benefited India.\"",
        right: "They were built to move raw materials to ports, paid for by Indian taxpayers with guaranteed returns to British investors. Useful infrastructure and extractive purpose are not contradictions." },
      { wrong: "\"Everyone in Britain supported the Empire.\"",
        right: "There were critics throughout, from anti-slavery campaigners to those who condemned Amritsar. Imperialism was politically contested at home as well as abroad." },
      { wrong: "\"The Empire ended in 1947.\"",
        right: "Indian independence was the turning point, not the end. Most African colonies became independent in the 1960s, and Hong Kong was handed over in 1997." },
      { wrong: "\"Calling 1857 a 'mutiny' is just an old-fashioned name.\"",
        right: "It is an argument. A mutiny is soldiers breaking an oath, which frames the rebellion as betrayal. The choice of word is itself a historical position." },
    ],
  },

  "history/the-first-world-war": {
    summary:
      "Between 1914 and 1918 the industrialised nations of Europe fought a war that killed around 17 million people and destroyed four empires. It is the war that gave us trenches, machine guns and the poppy — and the one whose causes and conduct historians still argue about most fiercely. This topic covers why it started, what fighting it was actually like, why it lasted so long, and what it left behind.",
    keyFacts: [
      {
        heading: "Why war broke out",
        points: [
          "The long-term causes are usually remembered as MAIN: Militarism, Alliances, Imperialism, Nationalism.",
          "Militarism: an arms race, especially the naval race between Britain and Germany over dreadnought battleships.",
          "Alliances: the Triple Alliance (Germany, Austria-Hungary, Italy) against the Triple Entente (Britain, France, Russia) — which meant a local quarrel could pull in everyone.",
          "The spark: Archduke Franz Ferdinand was assassinated in Sarajevo on 28 June 1914 by Gavrilo Princip, a Bosnian Serb nationalist.",
          "The Schlieffen Plan required Germany to attack France through neutral Belgium. Britain had guaranteed Belgian neutrality in 1839, and declared war on 4 August 1914.",
          "A spark is not a cause. Without the alliances and the plans, an assassination in Sarajevo would have stayed a Balkan crisis.",
        ],
      },
      {
        heading: "Stalemate and the trenches",
        points: [
          "The Schlieffen Plan failed; by late 1914 the Western Front had frozen into a line of trenches from the Channel to Switzerland.",
          "Defence was far stronger than attack: machine guns, barbed wire and artillery could stop any advance across open ground.",
          "Trench conditions: mud, rats, lice, trench foot, and constant shellfire. Around a third of casualties were caused by artillery.",
          "'Shell shock' — now understood as psychological injury — was widely disbelieved at the time, and some sufferers were shot for cowardice.",
          "New weapons broke the deadlock only partially: poison gas from 1915, tanks from 1916, aircraft used first for reconnaissance and then for combat.",
        ],
      },
      {
        heading: "The big battles",
        points: [
          "The Somme (July–November 1916): around 57,000 British casualties on the first day alone, roughly 19,000 of them killed. Around 1.2 million casualties in total across both sides.",
          "Verdun (1916): a ten-month French–German battle of attrition costing around 700,000 casualties.",
          "Passchendaele (1917): fought in mud so deep that wounded men drowned in shell holes.",
          "Gallipoli (1915–16): an Allied attempt to knock out the Ottoman Empire that failed at enormous cost, particularly to Australian and New Zealand troops.",
          "Historians dispute whether Haig was a butcher or a commander learning a new kind of war. The 'Lions led by donkeys' view is now heavily contested.",
        ],
      },
      {
        heading: "Why it ended, and what followed",
        points: [
          "The USA entered in April 1917 after unrestricted submarine warfare and the Zimmermann Telegram, bringing enormous fresh resources.",
          "Russia left after the Bolshevik revolution, signing Brest-Litovsk in March 1918 and freeing German troops for one last offensive.",
          "The German Spring Offensive of 1918 failed; the Allied Hundred Days Offensive pushed Germany back through the summer and autumn.",
          "The Armistice took effect at 11am on 11 November 1918.",
          "Around 17 million died in total, roughly 10 million of them military. The 1918 influenza pandemic that followed killed many more.",
          "Four empires collapsed: German, Austro-Hungarian, Russian and Ottoman.",
        ],
      },
    ],
    flashcards: [
      { term: "MAIN", definition: "Militarism, Alliances, Imperialism, Nationalism — the four long-term causes usually taught for the First World War." },
      { term: "Triple Entente", definition: "The alignment of Britain, France and Russia before 1914." },
      { term: "Triple Alliance", definition: "The alliance of Germany, Austria-Hungary and Italy, though Italy did not fight on their side in 1914." },
      { term: "Schlieffen Plan", definition: "Germany's plan to defeat France quickly by attacking through Belgium before turning on Russia." },
      { term: "Gavrilo Princip", definition: "The Bosnian Serb nationalist who assassinated Archduke Franz Ferdinand in Sarajevo on 28 June 1914." },
      { term: "Stalemate", definition: "A deadlock where neither side can advance — the state of the Western Front from late 1914." },
      { term: "Attrition", definition: "A strategy of wearing the enemy down through sustained losses rather than seeking a decisive breakthrough." },
      { term: "No man's land", definition: "The ground between opposing trench lines, swept by machine gun fire and covered in barbed wire." },
      { term: "Shell shock", definition: "The contemporary term for psychological injury caused by combat, widely disbelieved at the time." },
      { term: "Battle of the Somme", definition: "The 1916 battle with around 57,000 British casualties on its first day and 1.2 million across both sides in total." },
      { term: "Zimmermann Telegram", definition: "The intercepted German offer of alliance to Mexico that helped bring the USA into the war in 1917." },
      { term: "Armistice", definition: "The agreement to stop fighting, effective at 11am on 11 November 1918." },
      { term: "Brest-Litovsk", definition: "The March 1918 treaty by which Bolshevik Russia left the war, freeing German troops for the Western Front." },
    ],
    examTips: [
      {
        tip: "Separate the spark from the causes",
        detail:
          "Sarajevo explains the timing, not the war. Without the alliance system and the Schlieffen Plan it would have remained a Balkan crisis. Say so explicitly.",
      },
      {
        tip: "Explain the stalemate through technology",
        detail:
          "Machine guns, barbed wire and artillery made defence far stronger than attack. The trenches were the consequence of that imbalance, not a choice anybody made.",
      },
      {
        tip: "Be careful with 'lions led by donkeys'",
        detail:
          "It is a memorable phrase from the 1960s, not a contemporary verdict. Historians now argue commanders were learning an unprecedented kind of war. Show you know it is contested.",
      },
      {
        tip: "Use exact figures for the Somme",
        detail:
          "57,000 casualties on the first day, around 19,000 killed. Note the distinction: casualties includes wounded and missing, and confusing the two is a common error.",
      },
      {
        tip: "Give more than one reason for 1918",
        detail:
          "American entry, the failure of the German Spring Offensive, the naval blockade starving Germany, and collapsing morale at home. A single-cause answer is a weak one.",
      },
      {
        tip: "Remember it was a world war",
        detail:
          "Troops from India, Africa, the Caribbean, Canada, Australia and New Zealand fought in enormous numbers. Over a million Indians served. British-only answers miss the scale.",
      },
    ],

    workedExamples: [
      {
        question: "Explain why the assassination in Sarajevo led to a world war.",
        steps: [
          "Austria-Hungary blamed Serbia and issued an ultimatum designed to be rejected.",
          "Russia had promised to support Serbia, so Russian mobilisation followed.",
          "Germany was allied to Austria-Hungary and faced the prospect of war on two fronts.",
          "Germany's only plan, the Schlieffen Plan, required attacking France FIRST, through Belgium.",
          "Britain had guaranteed Belgian neutrality in 1839, and declared war when Belgium was invaded.",
          "So the alliances converted a regional dispute into a continental war, and the rigidity of the military plans removed the room to stop.",
        ],
        answer:
          "Because the alliance system meant a local quarrel dragged in every great power, and because Germany's only war plan required invading Belgium, which brought Britain in. The assassination provided the occasion; the alliances and the plans supplied the mechanism.",
      },
      {
        question:
          "Why did the Western Front become a stalemate?",
        steps: [
          "The Schlieffen Plan failed to knock France out quickly, and both sides then tried to outflank each other northwards.",
          "When they reached the sea there was nowhere left to outflank, so both dug in.",
          "Technology favoured defence overwhelmingly: a single machine gun could stop hundreds of advancing men.",
          "Barbed wire slowed attackers precisely where the guns could reach them, and artillery churned the ground into mud that made movement almost impossible.",
          "Nothing yet existed that could restore movement — tanks were unreliable until 1918, and radio was too primitive to coordinate an advance once it began.",
          "So the trenches were the logical response to a technological imbalance, not a failure of imagination.",
        ],
        answer:
          "Because defensive technology had outrun offensive technology. Once the flanks reached the sea, machine guns, wire and artillery made any advance across open ground suicidal, and nothing existed yet that could restore movement.",
      },
      {
        question:
          "'The USA won the war for the Allies.' How far do you agree?",
        steps: [
          "For: American entry in 1917 brought vast resources, fresh troops and financial power at the moment Britain and France were exhausted.",
          "For: it also affected German morale, since Germany now had to win before American numbers arrived — which is why the Spring Offensive was launched.",
          "Against: American troops arrived slowly and in numbers that only became decisive in mid-1918.",
          "Against: the naval blockade had been strangling German food supplies for years, and the German army was defeated in the field by the Hundred Days Offensive, largely by British and French forces.",
          "Judgement: American entry made Allied victory certain rather than delivering it directly.",
        ],
        answer:
          "American entry was decisive in shifting the balance and in forcing Germany to gamble on the Spring Offensive, but the blockade and the Hundred Days Offensive did the immediate work. The USA made victory inevitable rather than winning the war itself.",
      },
      {
        question:
          "Why is 'lions led by donkeys' a contested phrase?",
        steps: [
          "It comes from a 1960s book, not from soldiers at the time, and captured a mood decades after the events.",
          "It implies commanders were stupid and uncaring, and that alternatives obviously existed.",
          "But no army had fought this kind of war before — no radio for the advancing troops, no reliable tanks, no aircraft support until late.",
          "British tactics did change: by 1918 the army was using combined arms with artillery, tanks and aircraft together and winning battles quickly.",
          "Casualties were appalling on every side and under every commander, which suggests the problem was the war rather than only the generals.",
          "The strong answer: it is a real historical interpretation to be examined, not a fact to be repeated.",
        ],
        answer:
          "Because it is a later interpretation rather than contemporary evidence, and it fits badly with how much British tactics improved by 1918. Treat it as an interpretation to weigh — which is exactly what interpretation questions ask for.",
      },
    ],

    practice: [
      { question: "In which year did the First World War begin?",
        accept: ["1914"],
        answer: "1914. Britain declared war on 4 August after Germany invaded Belgium." },
      { question: "What does the acronym MAIN stand for? Give the four words.",
        accept: ["militarism alliances imperialism nationalism", "militarism, alliances, imperialism, nationalism"],
        answer: "Militarism, Alliances, Imperialism, Nationalism — the four long-term causes." },
      { question: "Who was assassinated in Sarajevo on 28 June 1914?",
        accept: ["franz ferdinand", "archduke franz ferdinand", "franz ferdinand of austria"],
        answer: "Archduke Franz Ferdinand of Austria-Hungary." },
      { question: "Who assassinated him?",
        accept: ["gavrilo princip", "princip"],
        answer: "Gavrilo Princip, a Bosnian Serb nationalist." },
      { question: "What was Germany's plan to defeat France quickly called?",
        accept: ["schlieffen plan", "the schlieffen plan"],
        answer: "The Schlieffen Plan, which required attacking through neutral Belgium." },
      { question: "Which neutral country's invasion brought Britain into the war?",
        accept: ["belgium"],
        answer: "Belgium, whose neutrality Britain had guaranteed in 1839." },
      { question: "In which year was the Battle of the Somme?",
        accept: ["1916"],
        answer: "1916, from July to November." },
      { question: "Roughly how many British casualties were there on the first day of the Somme?",
        accept: ["57000", "57,000", "60000"],
        answer: "About 57,000, of whom roughly 19,000 were killed — casualties includes wounded and missing." },
      { question: "In which year did the USA enter the war?",
        accept: ["1917"],
        answer: "1917, after unrestricted submarine warfare and the Zimmermann Telegram." },
      { question: "Which intercepted telegram helped bring the USA into the war?",
        accept: ["zimmermann", "zimmermann telegram", "the zimmermann telegram"],
        answer: "The Zimmermann Telegram, a German offer of alliance to Mexico." },
      { question: "Which treaty took Russia out of the war in March 1918?",
        accept: ["brest litovsk", "brest-litovsk", "treaty of brest-litovsk"],
        answer: "Brest-Litovsk, which freed German troops for the Western Front." },
      { question: "On what date did the Armistice take effect? Give it as day/month/year.",
        accept: ["11/11/1918", "11 november 1918", "11.11.1918"],
        answer: "11 November 1918, at 11am — which is why Remembrance is marked at that hour." },
      { question: "Which 1917 battle was fought in mud so deep that wounded men drowned?",
        accept: ["passchendaele", "third ypres", "battle of passchendaele"],
        answer: "Passchendaele, also called the Third Battle of Ypres." },
      { question: "Roughly how many people died in the war in total, in millions?",
        accept: ["17", "17 million", "about 17"],
        answer: "Around 17 million, roughly 10 million of them military — and estimates vary." },
      { question: "How many empires collapsed as a result of the war?",
        accept: ["4", "four"],
        answer: "Four: the German, Austro-Hungarian, Russian and Ottoman empires." },
      { question: "In which year was poison gas first used on the Western Front?",
        accept: ["1915"],
        answer: "1915. Tanks followed in 1916, and neither broke the deadlock on its own." },
      { question: "Explain why the trenches were a logical response rather than a failure of imagination.",
        answer: "Because defensive technology had outrun offensive technology completely. A single machine gun could stop hundreds of men crossing open ground; barbed wire held attackers exactly where the guns could reach them; artillery could destroy an advance before it started. Once the front reached the sea in late 1914 there was no flank left to turn, so the only options were to attack into that fire or to dig in. Nothing existed yet that could restore movement — tanks were unreliable until 1918, and there was no radio light enough to coordinate troops once they had left their own lines. The trenches followed from the technology. (Mark this one yourself.)" },
      { question: "Explain why the First World War is described as a world war and not a European one.",
        answer: "Because the fighting and the manpower were global. Over a million Indian troops served, alongside soldiers from across Africa, the Caribbean, Canada, Australia and New Zealand — Gallipoli is remembered in Australia and New Zealand as a founding national experience. Fighting took place in the Middle East, East Africa and the Pacific as well as in France and Belgium, because the combatants held empires spanning the globe. The naval war ranged across the Atlantic and beyond, and the economic effects reached everywhere the belligerents traded. Calling it European describes where most of the trenches were, not where the war was. (Mark this one yourself.)" },
      {
        question: "What event triggered the outbreak of the First World War in 1914?",
        choices: [
          "The assassination of Archduke Franz Ferdinand",
          "The invasion of Poland",
          "The sinking of the Lusitania",
          "The Treaty of Versailles",
        ],
        accept: [
          "The assassination of Archduke Franz Ferdinand",
        ],
        answer: "It was the trigger rather than the cause — alliances, militarism, imperialism and nationalism made the escalation possible.",
      },
      {
        question: "What is meant by the phrase 'stalemate on the Western Front'?",
        choices: [
          "Neither side could gain significant ground for years",
          "The war ended in a draw",
          "Fighting stopped completely",
          "Both sides agreed a truce",
        ],
        accept: [
          "Neither side could gain significant ground for years",
        ],
        answer: "Machine guns and artillery favoured defence, so trench lines barely moved despite enormous casualties.",
      },
      {
        question: "Why was the Battle of the Somme in 1916 controversial?",
        choices: [
          "Enormous casualties for very little ground gained",
          "No fighting took place",
          "It ended the war immediately",
          "Britain lost all its territory",
        ],
        accept: [
          "Enormous casualties for very little ground gained",
        ],
        answer: "Around 60,000 British casualties fell on the first day. Historians still argue over whether it wore down the German army usefully.",
      },
      {
        question: "What role did new technology play in the war?",
        choices: [
          "Weapons such as machine guns and gas raised casualties enormously",
          "It ended trench warfare quickly",
          "It was not used at all",
          "It made the war shorter",
        ],
        accept: [
          "Weapons such as machine guns and gas raised casualties enormously",
        ],
        answer: "Tanks and aircraft appeared but were unreliable early on. Defensive technology outpaced offensive tactics for most of the war.",
      },
      {
        question: "What was one effect of the war on women in Britain?",
        choices: [
          "Many took jobs previously done by men",
          "They were banned from working",
          "Nothing changed for them",
          "They lost the right to vote",
        ],
        accept: [
          "Many took jobs previously done by men",
        ],
        answer: "Munitions work and transport roles shifted attitudes, and some women gained the vote in 1918 — though the link is debated.",
      },
    ],

    misconceptions: [
      { wrong: "\"The assassination caused the First World War.\"",
        right: "It was the trigger. The alliance system, the arms race and rigid military plans are what turned a Balkan murder into a continental war." },
      { wrong: "\"Soldiers spent the whole war in the front-line trenches.\"",
        right: "Units rotated through front line, support, reserve and rest. Time in the front line was usually days at a stretch, not months — though it was the most dangerous part of the cycle." },
      { wrong: "\"Casualties means people killed.\"",
        right: "Casualties includes killed, wounded, missing and captured. The Somme's first day produced about 57,000 casualties and around 19,000 deaths." },
      { wrong: "\"The generals were simply incompetent.\"",
        right: "'Lions led by donkeys' is a 1960s interpretation, not a contemporary verdict. British tactics improved dramatically by 1918, and appalling casualties occurred under every commander of every nation." },
      { wrong: "\"Only European soldiers fought.\"",
        right: "Over a million Indians served, alongside African, Caribbean, Canadian, Australian and New Zealand troops. It was a world war in its manpower as well as its geography." },
      { wrong: "\"Gas was the war's biggest killer.\"",
        right: "Artillery caused roughly a third of casualties. Gas was terrifying and is heavily remembered, but killed comparatively few — its effect was psychological as much as physical." },
    ],
  },

  "history/the-russian-revolution": {
    summary:
      "In 1917 Russia had two revolutions in a single year. The first swept away a monarchy that had ruled for 300 years; the second brought the Bolsheviks to power and created the world's first communist state. Understanding why it happened means understanding a country losing a war, starving in its cities, and ruled by a Tsar who would not share power with anyone.",
    keyFacts: [
      {
        heading: "Russia before 1917",
        points: [
          "Russia was an autocracy: Tsar Nicholas II ruled with absolute power and believed it was granted by God.",
          "It was vast, poor and overwhelmingly rural — around 80% of the population were peasants, many illiterate.",
          "Industrialisation in cities like Petrograd created a small but concentrated working class in terrible conditions.",
          "The 1905 Revolution, triggered by Bloody Sunday when troops fired on a peaceful petition, forced Nicholas to create a parliament, the Duma — which he then repeatedly ignored and dissolved.",
          "Opposition ranged from liberals wanting a constitution to Marxist revolutionaries split into Bolsheviks and Mensheviks.",
        ],
      },
      {
        heading: "The war and the fall of the Tsar",
        points: [
          "Russia entered the First World War in 1914 with patriotic enthusiasm and was quickly beaten badly, notably at Tannenberg.",
          "Nicholas took personal command of the army in 1915, which meant every defeat afterwards was personally his.",
          "In his absence the government was left to Tsarina Alexandra — German-born, and deeply unpopular — and to Rasputin, whose influence caused enormous scandal.",
          "Food and fuel shortages hit the cities hard; by early 1917 Petrograd bread queues were the centre of political anger.",
          "The February Revolution began with strikes and bread riots. When soldiers refused to fire on crowds and joined them instead, the regime collapsed. Nicholas abdicated on 15 March 1917.",
        ],
      },
      {
        heading: "Dual power and the Bolshevik seizure",
        points: [
          "Two bodies now claimed authority: the Provisional Government and the Petrograd Soviet of workers' and soldiers' deputies. This is called dual power.",
          "The Provisional Government's fatal decision was to continue the war, which meant the shortages and casualties that caused the revolution simply went on.",
          "Lenin returned in April 1917 with the April Theses and the slogan 'Peace, Bread, Land' — an answer to exactly what people wanted.",
          "Kerensky's June offensive failed disastrously and destroyed what was left of the government's credibility.",
          "In October 1917 the Bolsheviks, organised by Trotsky through the Military Revolutionary Committee, seized key buildings in Petrograd with very little fighting.",
        ],
      },
      {
        heading: "What the Bolsheviks did next",
        points: [
          "Immediate decrees on Peace and on Land delivered the promises that had won them support.",
          "Brest-Litovsk (March 1918) ended the war with Germany at the cost of huge territory — deeply unpopular, but it kept the promise of peace.",
          "The Constituent Assembly, elected in November 1917, gave the Bolsheviks a minority. They shut it down after one day.",
          "The Civil War (1918–21) pitted the Reds against the Whites, with foreign intervention on the White side. The Reds won partly through Trotsky's Red Army and partly because the Whites had no common cause.",
          "War Communism and the Cheka secret police established the pattern of one-party rule and terror that would define the Soviet state.",
        ],
      },
    ],
    flashcards: [
      { term: "Autocracy", definition: "Rule by one person with absolute power — the system under Tsar Nicholas II." },
      { term: "Bloody Sunday 1905", definition: "The shooting of peaceful petitioners in St Petersburg, which triggered the 1905 Revolution." },
      { term: "Duma", definition: "The Russian parliament created after 1905, which Nicholas repeatedly ignored and dissolved." },
      { term: "Soviet", definition: "A council of workers' and soldiers' deputies. The Petrograd Soviet rivalled the Provisional Government in 1917." },
      { term: "Dual power", definition: "The situation from February to October 1917 where the Provisional Government and the Petrograd Soviet both claimed authority." },
      { term: "Bolsheviks", definition: "Lenin's faction of Russian Marxists, favouring a small disciplined party and immediate revolution." },
      { term: "Mensheviks", definition: "The rival Marxist faction, favouring a broader party and a longer road to socialism." },
      { term: "Rasputin", definition: "The mystic whose influence over the Tsarina discredited the monarchy before 1917." },
      { term: "April Theses", definition: "Lenin's 1917 programme demanding no support for the Provisional Government and 'all power to the Soviets'." },
      { term: "Peace, Bread, Land", definition: "The Bolshevik slogan answering the three things Russians most wanted in 1917." },
      { term: "Provisional Government", definition: "The temporary government after the Tsar's abdication, fatally weakened by continuing the war." },
      { term: "Cheka", definition: "The Bolshevik secret police, founded in December 1917." },
      { term: "War Communism", definition: "The Bolshevik policy during the Civil War of requisitioning grain and nationalising industry." },
    ],
    examTips: [
      {
        tip: "Keep February and October apart",
        detail:
          "February overthrew the Tsar and was largely spontaneous. October was a planned Bolshevik seizure of power from the Provisional Government. Confusing them wrecks the whole narrative.",
      },
      {
        tip: "Explain WHY the Provisional Government fell",
        detail:
          "One decision above all: continuing the war. Every grievance that caused February — hunger, casualties, shortages — carried straight on.",
      },
      {
        tip: "Use the old and new calendars carefully",
        detail:
          "Russia used the Julian calendar until 1918, 13 days behind. The 'October' Revolution happened in November by our calendar. Noting this shows real understanding.",
      },
      {
        tip: "Give long-term and short-term causes",
        detail:
          "Autocracy, poverty and 1905 are long-term; the war, hunger and Rasputin are short-term. The best answers explain how the war turned old grievances into collapse.",
      },
      {
        tip: "Don't overstate the storming of the Winter Palace",
        detail:
          "It was far smaller than the famous images suggest — those come from a 1927 film. Casualties were minimal. Saying so is a source-skills point in itself.",
      },
      {
        tip: "Credit Trotsky as well as Lenin",
        detail:
          "Lenin provided the direction; Trotsky organised the October seizure and then built the Red Army that won the Civil War.",
      },
    ],

    workedExamples: [
      {
        question: "Explain why Tsar Nicholas II was overthrown in February 1917.",
        steps: [
          "Long-term: autocracy that refused to share power, rural poverty, and the broken promises of 1905.",
          "The war made everything worse: catastrophic defeats, millions of casualties, and shortages of food and fuel in the cities.",
          "Nicholas taking command in 1915 personally attached every defeat to him.",
          "The government he left behind — Alexandra and Rasputin — was seen as incompetent and possibly treasonous.",
          "The immediate trigger: strikes and bread riots in Petrograd in February 1917.",
          "The decisive moment: soldiers refused to fire on the crowds and joined them, which removed the last thing holding the regime up.",
        ],
        answer:
          "Long-standing grievances against an autocracy that would not reform, made unbearable by war, hunger and a discredited government — and finally decided when the army refused to shoot. Without the war the resentment might have simmered; the war turned it into collapse.",
      },
      {
        question: "Explain why the Bolsheviks succeeded in October 1917.",
        steps: [
          "The Provisional Government had destroyed itself by continuing the war and failing to deliver land reform.",
          "'Peace, Bread, Land' promised precisely what the war-weary population wanted, in three words anyone could remember.",
          "The Bolsheviks were disciplined, tightly organised, and unlike other parties refused all cooperation with the Provisional Government — so they carried none of the blame.",
          "The Kornilov affair let the Bolsheviks pose as defenders of the revolution and get themselves rearmed.",
          "Trotsky's Military Revolutionary Committee planned the seizure of key points — telegraph, bridges, stations — rather than attempting a mass uprising.",
          "Judgement: the Provisional Government's failures created the opening; Bolshevik organisation and clear promises let them walk through it.",
        ],
        answer:
          "Because the Provisional Government had exhausted its support by continuing the war, and the Bolsheviks alone offered peace, bread and land while staying clear of the blame. Trotsky's organisation then made the seizure itself almost bloodless.",
      },
      {
        question: "Why is the storming of the Winter Palace a good lesson in evidence?",
        steps: [
          "The famous images of crowds pouring through gates come from Eisenstein's film October, made in 1927.",
          "The film was made for the tenth anniversary, by a government with an interest in a heroic founding story.",
          "In reality the Palace was defended by a small garrison, resistance was slight, and casualties were minimal.",
          "The event was reshaped afterwards into a mass uprising because that was politically useful.",
          "The general lesson: an image can become the memory of an event and replace what actually happened.",
        ],
        answer:
          "Because what most people picture comes from a 1927 propaganda film rather than from 1917. The real event was small and almost bloodless. It is a clean example of how a later image can overwrite the evidence.",
      },
      {
        question: "Why did the Reds win the Civil War?",
        steps: [
          "Geography: the Reds held the centre, including Moscow and Petrograd, the railways and the arms factories.",
          "Unity: the Reds had one leadership and one aim; the Whites were monarchists, liberals and separatists who agreed only on opposing Bolshevism.",
          "Trotsky's Red Army: conscription, former Tsarist officers used under political supervision, and ruthless discipline.",
          "Peasant calculation: many peasants disliked the Bolsheviks but feared a White victory would return the land to the landlords.",
          "Foreign intervention on the White side let the Bolsheviks present themselves as defenders of Russia against invaders.",
        ],
        answer:
          "Central position with the railways and factories, a single leadership against a divided opposition, Trotsky's Red Army, and peasants who feared losing their land more than they disliked the Bolsheviks. Foreign intervention helped the Reds politically more than it helped the Whites militarily.",
      },
    ],

    practice: [
      { question: "Who was the last Tsar of Russia?",
        accept: ["nicholas ii", "nicholas 2", "tsar nicholas ii"],
        answer: "Nicholas II, who abdicated in March 1917 after 300 years of Romanov rule." },
      { question: "What is the term for rule by one person with absolute power?",
        accept: ["autocracy"],
        answer: "Autocracy. Nicholas II believed his authority came directly from God." },
      { question: "In which year was Bloody Sunday and the first Russian Revolution?",
        accept: ["1905"],
        answer: "1905. It forced Nicholas to create the Duma, which he then repeatedly ignored." },
      { question: "What was the Russian parliament created after 1905 called?",
        accept: ["duma", "the duma"],
        answer: "The Duma. Nicholas dissolved it whenever it displeased him." },
      { question: "What is a council of workers' and soldiers' deputies called?",
        accept: ["soviet", "a soviet", "soviets"],
        answer: "A soviet. The Petrograd Soviet rivalled the Provisional Government throughout 1917." },
      { question: "What is the term for the Provisional Government and the Soviet both claiming authority?",
        accept: ["dual power", "dual authority"],
        answer: "Dual power, the situation between February and October 1917." },
      { question: "Who led the Bolsheviks?",
        accept: ["lenin", "vladimir lenin"],
        answer: "Lenin, who returned to Russia in April 1917 with the April Theses." },
      { question: "What was the three-word Bolshevik slogan of 1917?",
        accept: ["peace bread land", "peace, bread, land", "peace bread and land"],
        answer: "Peace, Bread, Land — an answer to exactly what Russians wanted." },
      { question: "Who organised the October seizure of power and later built the Red Army?",
        accept: ["trotsky", "leon trotsky"],
        answer: "Trotsky, through the Military Revolutionary Committee." },
      { question: "In which month did the Tsar abdicate? Give the Russian calendar month used for the revolution.",
        accept: ["february", "feb"],
        answer: "February by the old Russian calendar — March by ours, since Russia was 13 days behind." },
      { question: "Which mystic's influence over the Tsarina discredited the monarchy?",
        accept: ["rasputin", "grigori rasputin"],
        answer: "Rasputin, whose influence caused enormous scandal while Nicholas was at the front." },
      { question: "Which treaty took Russia out of the First World War?",
        accept: ["brest litovsk", "brest-litovsk", "treaty of brest-litovsk"],
        answer: "Brest-Litovsk, March 1918 — hugely costly in territory, but it kept the promise of peace." },
      { question: "What was the Bolshevik secret police called?",
        accept: ["cheka", "the cheka"],
        answer: "The Cheka, founded in December 1917." },
      { question: "Which two sides fought the Russian Civil War?",
        accept: ["reds and whites", "the reds and the whites", "red and white"],
        answer: "The Reds (Bolsheviks) and the Whites, a loose coalition of everyone opposed to them." },
      { question: "In which years was the Russian Civil War? Give it as e.g. 1900-1905.",
        accept: ["1918-1921", "1918-21", "1918 - 1921"],
        answer: "1918 to 1921, ending in Bolshevik victory." },
      { question: "What was the policy of grain requisitioning during the Civil War called?",
        accept: ["war communism"],
        answer: "War Communism, which fed the cities and the army at enormous cost to the peasants." },
      { question: "Explain why the Provisional Government lasted only eight months.",
        answer: "Because it failed to solve the problems that had brought down the Tsar. Its decision to continue the war meant the casualties, hunger and shortages carried straight on, and Kerensky's failed June offensive destroyed what credibility remained. It also postponed land reform until an elected assembly could meet, which left peasants waiting for the one thing they wanted most. It shared power awkwardly with the Petrograd Soviet, which controlled the railways and the garrison and could countermand it. And it was provisional by its own description, so nobody was obliged to defend it — which is why so few did in October. (Mark this one yourself.)" },
      { question: "Explain why the war was the decisive factor in 1917, rather than long-term grievances alone.",
        answer: "The grievances were genuine and very old — autocracy, rural poverty, the broken promises of 1905 — but Russia had lived with them for generations without revolution. The war converted them into collapse. It killed and maimed millions, took peasants off the land, wrecked the transport system so cities went hungry, and put the Tsar personally in command so that every defeat was his. It also removed the regime's last safeguard: when soldiers in Petrograd were ordered to fire on the bread queues and refused, the machinery that had suppressed 1905 simply stopped working. Long-term causes explain the anger; the war explains the timing. (Mark this one yourself.)" },
      {
        question: "Who was the Tsar overthrown in 1917?",
        choices: [
          "Nicholas II",
          "Alexander III",
          "Peter the Great",
          "Lenin",
        ],
        accept: [
          "Nicholas II",
        ],
        answer: "His handling of the war, food shortages and the influence of Rasputin all eroded support before the February Revolution.",
      },
      {
        question: "What was the main promise of the Bolsheviks in 1917?",
        choices: [
          "Peace, land and bread",
          "Empire and expansion",
          "A return of the Tsar",
          "Free trade with Europe",
        ],
        accept: [
          "Peace, land and bread",
        ],
        answer: "It addressed exactly what people wanted most, which is why a small party gained support so quickly.",
      },
      {
        question: "What was a major cause of discontent before the revolution?",
        choices: [
          "Food shortages and heavy losses in the First World War",
          "Rapid rises in living standards",
          "A powerful elected parliament",
          "The absence of any army",
        ],
        accept: [
          "Food shortages and heavy losses in the First World War",
        ],
        answer: "The war turned long-standing grievances into a crisis by putting millions of armed, hungry men in a position to act.",
      },
      {
        question: "What happened in the October Revolution of 1917?",
        choices: [
          "The Bolsheviks seized power from the Provisional Government",
          "The Tsar abdicated",
          "Russia entered the war",
          "The Duma was created",
        ],
        accept: [
          "The Bolsheviks seized power from the Provisional Government",
        ],
        answer: "The Provisional Government's decision to continue the war had destroyed its support in the months since February.",
      },
      {
        question: "What followed the Bolshevik seizure of power?",
        choices: [
          "A civil war between Reds and Whites",
          "Immediate peace and prosperity",
          "The restoration of the monarchy",
          "Union with Germany",
        ],
        accept: [
          "A civil war between Reds and Whites",
        ],
        answer: "The Reds won partly through Trotsky's Red Army, control of the centre, and the disunity of their opponents.",
      },
    ],

    misconceptions: [
      { wrong: "\"There was one Russian Revolution in 1917.\"",
        right: "There were two. February overthrew the Tsar and was largely spontaneous; October was a planned Bolshevik seizure of power from the Provisional Government." },
      { wrong: "\"The Bolsheviks overthrew the Tsar.\"",
        right: "The Tsar fell in February, when the Bolsheviks were a small party with their leader abroad. They took power eight months later, from the Provisional Government." },
      { wrong: "\"The storming of the Winter Palace was a massive battle.\"",
        right: "Resistance was slight and casualties minimal. The heroic version comes from a 1927 film made for the anniversary." },
      { wrong: "\"The October Revolution happened in October.\"",
        right: "By our calendar it was November. Russia used the Julian calendar until 1918, which ran 13 days behind." },
      { wrong: "\"Most Russians were Bolsheviks.\"",
        right: "In the Constituent Assembly elections of November 1917 the Bolsheviks came second. They closed the Assembly after a single day rather than accept the result." },
      { wrong: "\"The revolution was caused by communism spreading.\"",
        right: "It was caused by defeat, hunger and a government that would not reform. Bolshevism supplied the organisation and the slogans that turned a collapse into a seizure of power." },
    ],
  },

  "history/the-rise-of-the-nazis": {
    summary:
      "In 1928 the Nazis won 2.6% of the vote and were a joke. Five years later Hitler was Chancellor and Germany was a one-party state. This is the KS3 story of how that happened — and it is worth studying carefully, because it is the story of a democracy destroyed largely by legal means, by people who told everyone in advance exactly what they intended to do.",
    keyFacts: [
      {
        heading: "The Weimar Republic's difficult birth",
        points: [
          "Germany became a republic in November 1918 as defeat became certain. The new government immediately had to sign the armistice.",
          "The 'stab in the back' myth claimed the army had been betrayed by politicians at home. It was false — the army was beaten — but it was believed, and it poisoned the Republic from the start.",
          "The Treaty of Versailles (1919) imposed war guilt, reparations of £6.6 billion, loss of 13% of German territory, and severe military limits.",
          "Hyperinflation in 1923 destroyed savings: by November a loaf of bread cost 200 billion marks.",
          "Weimar's constitution used proportional representation, which produced fragmented coalitions, and Article 48 let the President rule by decree in an emergency.",
        ],
      },
      {
        heading: "Nazi beginnings and the Munich Putsch",
        points: [
          "Hitler joined the tiny German Workers' Party in 1919 and had reshaped it into the NSDAP by 1920.",
          "The 25-Point Programme mixed nationalism, antisemitism and anti-Versailles demands with some socialist-sounding promises.",
          "The Munich Putsch of November 1923 was an attempt to seize power by force. It failed within a day and 16 Nazis were killed.",
          "Hitler's trial gave him a national platform. He served nine months of a five-year sentence and wrote Mein Kampf in prison.",
          "The lesson he drew was decisive: power would have to be taken legally, through elections, and then dismantled from within.",
        ],
      },
      {
        heading: "The years that made it possible",
        points: [
          "1924–29 were Weimar's 'golden years': the Dawes Plan brought American loans, the currency stabilised, and Nazi support collapsed to 2.6% in 1928.",
          "The Wall Street Crash of October 1929 pulled those American loans back. German unemployment rose to around 6 million by 1932.",
          "Nazi votes climbed with unemployment: 18.3% in 1930, 37.3% in July 1932 — the largest party, though never a majority.",
          "Nazi appeal: work and bread, national pride, order in the streets, and a scapegoat in the Jews and the communists.",
          "The SA provided both street violence and the appearance of discipline and purpose.",
        ],
      },
      {
        heading: "How Hitler actually became Chancellor",
        points: [
          "He was not elected Chancellor. He lost the 1932 presidential election to Hindenburg.",
          "From 1930 Germany was already being governed by presidential decree under Article 48, so democracy was weakened before Hitler entered government.",
          "Von Papen and other conservatives believed they could use Hitler's popular support and control him. On 30 January 1933 Hindenburg appointed him Chancellor of a cabinet with only three Nazis in it.",
          "The Reichstag Fire (27 February 1933) was used to justify an emergency decree suspending civil liberties.",
          "The Enabling Act (23 March 1933) let the government make laws without the Reichstag. It passed with opposition deputies arrested or intimidated.",
          "By July 1933 all other parties were banned. The Night of the Long Knives (1934) destroyed rivals inside the party, and on Hindenburg's death Hitler merged the offices of Chancellor and President.",
        ],
      },
    ],
    flashcards: [
      { term: "Weimar Republic", definition: "The German democracy that existed from 1919 until Hitler dismantled it in 1933." },
      { term: "Stab in the back myth", definition: "The false claim that the German army was betrayed by politicians rather than defeated in 1918." },
      { term: "Treaty of Versailles", definition: "The 1919 peace settlement imposing war guilt, reparations and territorial loss on Germany." },
      { term: "Hyperinflation", definition: "The 1923 collapse of the German currency in which savings became worthless." },
      { term: "Article 48", definition: "The Weimar constitution clause allowing the President to rule by decree in an emergency." },
      { term: "Munich Putsch", definition: "Hitler's failed attempt to seize power by force in November 1923." },
      { term: "Mein Kampf", definition: "The book Hitler wrote in prison setting out his ideas, including antisemitism and expansion eastwards." },
      { term: "NSDAP", definition: "The National Socialist German Workers' Party — the Nazi Party." },
      { term: "SA", definition: "The Nazi paramilitary 'brownshirts', who provided street violence and a show of discipline." },
      { term: "Wall Street Crash", definition: "The October 1929 collapse that withdrew American loans and pushed German unemployment towards 6 million." },
      { term: "Reichstag Fire", definition: "The February 1933 burning of the German parliament, used to justify suspending civil liberties." },
      { term: "Enabling Act", definition: "The March 1933 law letting Hitler's government make laws without the Reichstag — the legal end of democracy." },
      { term: "Night of the Long Knives", definition: "The 1934 purge in which Hitler had rivals inside his own movement murdered, including SA leader Röhm." },
    ],
    examTips: [
      {
        tip: "Hitler was appointed, not elected Chancellor",
        detail:
          "This is the single most important correction on the topic. The Nazis never won a majority in a free election. Hindenburg appointed him, on the advice of conservatives who thought they could control him.",
      },
      {
        tip: "Link Nazi votes to unemployment",
        detail:
          "2.6% in 1928 with the economy recovering; 37.3% in July 1932 with 6 million unemployed. Putting the two figures side by side makes the argument for you.",
      },
      {
        tip: "Explain why the Depression mattered so much in Germany",
        detail:
          "The recovery of 1924–29 was built on American loans. When the Crash pulled them back, the whole basis of Weimar's stability disappeared at once.",
      },
      {
        tip: "Give short-term and long-term causes",
        detail:
          "Versailles, the stab in the back myth and hyperinflation are the long-term weaknesses; the Depression, Article 48 government and the conservatives' miscalculation are what finished it.",
      },
      {
        tip: "Name the two laws that ended democracy",
        detail:
          "The Reichstag Fire Decree suspended civil liberties; the Enabling Act removed the need for parliament. Both were legal, which is exactly what makes them worth studying.",
      },
      {
        tip: "Avoid making it inevitable",
        detail:
          "Nothing here was bound to happen. Different choices by Hindenburg, von Papen or the other parties could have produced a different outcome, and saying so is better history than a straight line to 1933.",
      },
    ],

    workedExamples: [
      {
        question: "Explain why Nazi support rose so sharply between 1928 and 1932.",
        steps: [
          "In 1928 the economy was recovering on American loans and the Nazis won 2.6% — extremism had little to offer.",
          "The Wall Street Crash of 1929 caused those loans to be recalled, and German unemployment reached around 6 million by 1932.",
          "Existing parties had no answer, and coalition government looked incapable of acting.",
          "The Nazis offered simple, confident promises: work, bread, national pride, and order in the streets.",
          "They also offered someone to blame — Jews and communists — which is what desperate electorates have often reached for.",
          "Result: 18.3% in 1930 and 37.3% in July 1932. The votes track the unemployment figures almost exactly.",
        ],
        answer:
          "Because the Depression destroyed the prosperity Weimar's credibility rested on, and the Nazis alone offered simple promises, visible energy and someone to blame. Their vote rose in step with unemployment, from 2.6% in 1928 to 37.3% in 1932.",
      },
      {
        question:
          "Explain how Hitler became Chancellor in January 1933.",
        steps: [
          "Note first that he did not win it: the Nazis were the largest party but had no majority, and Hitler had lost the presidential election to Hindenburg.",
          "Since 1930 Germany had been governed by presidential decree under Article 48, so parliamentary democracy was already hollow.",
          "Von Papen, having lost the chancellorship, wanted back into power and thought Nazi votes could be harnessed.",
          "The plan was to appoint Hitler with only three Nazis in the cabinet, with von Papen as Vice-Chancellor to control him.",
          "Hindenburg, elderly and reluctant, was persuaded and appointed Hitler on 30 January 1933.",
          "The judgement: it was a backroom calculation by conservatives who believed they were using Hitler, and it was catastrophically wrong.",
        ],
        answer:
          "Through a backroom deal, not an election. Conservatives around von Papen persuaded Hindenburg to appoint him, believing a cabinet with only three Nazis would let them use his popularity and keep control. Within six months every other party was banned.",
      },
      {
        question:
          "How did the Nazis dismantle democracy legally in 1933?",
        steps: [
          "27 February: the Reichstag Fire. Whoever set it, the Nazis used it immediately.",
          "28 February: the Reichstag Fire Decree suspended freedom of speech, press and assembly, and allowed detention without trial.",
          "March: an election held amid SA violence still gave the Nazis only 43.9% — even under those conditions, not a majority.",
          "23 March: the Enabling Act let the government legislate without the Reichstag. Communist deputies were already arrested; the SA surrounded the building.",
          "July: all other political parties banned.",
          "The point to make: each step had a legal form, which is what allowed people to tell themselves nothing unconstitutional had happened.",
        ],
        answer:
          "Through the Reichstag Fire Decree and then the Enabling Act, both passed in legal form under conditions of intimidation. Democracy was not overthrown in a coup — it was voted out of existence by a parliament under threat.",
      },
      {
        question:
          "Why did the conservatives who appointed Hitler get it so wrong?",
        steps: [
          "They saw him as an uneducated agitator whose usefulness was his popular vote.",
          "They believed institutions — the cabinet, the President, the army — would constrain any Chancellor.",
          "They had already normalised rule by decree, so they had lost the habit of thinking parliament mattered.",
          "They feared communism far more than Nazism, and saw Hitler as the lesser danger.",
          "They underestimated how fast a government willing to use the law against the law could move: from appointment to the Enabling Act took under eight weeks.",
        ],
        answer:
          "They thought they were hiring a useful demagogue whom institutions would restrain, and they feared communism far more. They had also already hollowed out parliament themselves through Article 48, which left far less to constrain him than they imagined.",
      },
    ],

    practice: [
      { question: "What was the German democracy of 1919–33 called?",
        accept: ["weimar republic", "the weimar republic", "weimar"],
        answer: "The Weimar Republic, named after the town where its constitution was written." },
      { question: "In which year was the Treaty of Versailles signed?",
        accept: ["1919"],
        answer: "1919. It imposed war guilt, reparations and territorial losses on Germany." },
      { question: "What was the false claim that the army was betrayed by politicians called?",
        accept: ["stab in the back", "stab in the back myth", "dolchstoss"],
        answer: "The stab in the back myth. It was untrue, widely believed, and poisoned the Republic from its first day." },
      { question: "In which year did German hyperinflation peak?",
        accept: ["1923"],
        answer: "1923, when a loaf of bread reached 200 billion marks by November." },
      { question: "Which article of the Weimar constitution allowed rule by decree?",
        accept: ["48", "article 48"],
        answer: "Article 48. It was already in regular use before Hitler took office." },
      { question: "In which year was the Munich Putsch?",
        accept: ["1923"],
        answer: "1923. It failed within a day, and taught Hitler to seek power legally instead." },
      { question: "What book did Hitler write in prison?",
        accept: ["mein kampf"],
        answer: "Mein Kampf, setting out his antisemitism and his plans for expansion eastwards." },
      { question: "What percentage of the vote did the Nazis get in 1928?",
        accept: ["2.6", "2.6%"],
        answer: "2.6%. The economy was recovering and extremism had little appeal." },
      { question: "What percentage did they get in July 1932?",
        accept: ["37.3", "37.3%", "37"],
        answer: "37.3% — the largest party, but still not a majority." },
      { question: "Roughly how many Germans were unemployed by 1932, in millions?",
        accept: ["6", "6 million", "about 6"],
        answer: "Around 6 million. Nazi votes rose almost in step with the unemployment figures." },
      { question: "On what date was Hitler appointed Chancellor? Give it as day/month/year.",
        accept: ["30/01/1933", "30 january 1933", "30.01.1933"],
        answer: "30 January 1933 — appointed by Hindenburg, not elected." },
      { question: "Who appointed Hitler Chancellor?",
        accept: ["hindenburg", "president hindenburg", "paul von hindenburg"],
        answer: "President Hindenburg, persuaded by conservatives who believed they could control Hitler." },
      { question: "Which building burned on 27 February 1933?",
        accept: ["reichstag", "the reichstag"],
        answer: "The Reichstag. The fire was used to justify suspending civil liberties the next day." },
      { question: "Which March 1933 law let the government make laws without parliament?",
        accept: ["enabling act", "the enabling act"],
        answer: "The Enabling Act, passed on 23 March 1933 under conditions of intimidation." },
      { question: "What was the 1934 purge of Hitler's rivals within the party called?",
        accept: ["night of the long knives", "the night of the long knives"],
        answer: "The Night of the Long Knives, which destroyed the SA leadership including Röhm." },
      { question: "What were the Nazi paramilitary brownshirts called? Give the two letters.",
        accept: ["sa", "the sa"],
        answer: "The SA. They supplied street violence and the appearance of order at the same time." },
      { question: "Explain why the Nazis' rise is often described as a legal takeover.",
        answer: "Because almost every step had a lawful form. Hitler was constitutionally appointed by the President. The Reichstag Fire Decree used emergency powers written into the constitution itself. The Enabling Act was passed by a vote of the elected Reichstag, reaching the two-thirds majority the constitution required. Nothing obviously unconstitutional had to happen, which is exactly what made it so effective: officials, judges and ordinary citizens could tell themselves that proper procedure was being followed. What the legal form concealed was that opposition deputies had been arrested, the SA surrounded the chamber, and civil liberties had already been suspended. Legality and legitimacy are not the same thing. (Mark this one yourself.)" },
      { question: "Explain why Hitler coming to power was not inevitable.",
        answer: "Because it depended on a series of choices that could each have gone differently. In 1928 the Nazis had 2.6% of the vote and were irrelevant; without the Wall Street Crash they would probably have stayed there. Even in 1932 they never won a majority, and their vote actually FELL in the November election. Hindenburg had refused to appoint Hitler before and could have refused again. Von Papen's scheme to use him was a calculation, not a necessity. And the other parties chose not to combine against him — the communists were instructed to treat the socialists as the main enemy. Explaining those choices is history; drawing a straight line from Versailles to 1933 is hindsight. (Mark this one yourself.)" },
      {
        question: "What was the Munich Putsch of 1923?",
        choices: [
          "A failed Nazi attempt to seize power in Bavaria",
          "A successful Nazi coup",
          "A treaty with Italy",
          "An election victory",
        ],
        accept: [
          "A failed Nazi attempt to seize power in Bavaria",
        ],
        answer: "Hitler's imprisonment gave him a platform and time to write Mein Kampf, and convinced him to seek power legally instead.",
      },
      {
        question: "How did Hitler become Chancellor in January 1933?",
        choices: [
          "He was appointed, in a deal made by conservative politicians",
          "He won an outright majority",
          "He seized power by force",
          "He inherited the position",
        ],
        accept: [
          "He was appointed, in a deal made by conservative politicians",
        ],
        answer: "Von Papen believed Hitler could be controlled. The Nazis were the largest party but had never won a majority.",
      },
      {
        question: "What did the Enabling Act of 1933 allow?",
        choices: [
          "Hitler to make laws without the Reichstag",
          "The Reichstag to remove Hitler",
          "Free elections to continue",
          "The army to govern",
        ],
        accept: [
          "Hitler to make laws without the Reichstag",
        ],
        answer: "Passed after the Reichstag Fire and the arrest of Communist deputies, it turned a chancellorship into a dictatorship.",
      },
      {
        question: "What was the Night of the Long Knives in 1934?",
        choices: [
          "The purge of the SA leadership, including Rohm",
          "An attack on Jewish businesses",
          "A failed assassination of Hitler",
          "A military parade",
        ],
        accept: [
          "The purge of the SA leadership, including Rohm",
        ],
        answer: "It removed a rival power base and reassured the army, whose support Hitler needed after Hindenburg's death.",
      },
      {
        question: "How did Nazi propaganda under Goebbels work?",
        choices: [
          "It controlled press, radio, film and rallies to shape opinion",
          "It relied only on newspapers",
          "It permitted opposing views",
          "It was aimed only at soldiers",
        ],
        accept: [
          "It controlled press, radio, film and rallies to shape opinion",
        ],
        answer: "Cheap radios put Nazi messaging in ordinary homes, and censorship removed competing accounts.",
      },
    ],

    misconceptions: [
      { wrong: "\"Hitler was elected Chancellor.\"",
        right: "He was appointed by Hindenburg in a backroom deal. The Nazis never won a majority in a free election — their highest free-election share was 37.3%." },
      { wrong: "\"The Nazis won a majority in 1932.\"",
        right: "They became the largest party with 37.3% in July, and their vote then FELL to 33.1% in November. That decline is part of why the conservatives thought they could control him." },
      { wrong: "\"Versailles caused Hitler.\"",
        right: "It created lasting grievance, but Nazi support collapsed to 2.6% in 1928 while Versailles was still in force. The Depression is what turned grievance into votes." },
      { wrong: "\"The Nazis seized power in a violent coup.\"",
        right: "They tried that in 1923 and failed. What worked in 1933 was legal appointment followed by emergency decrees and an Act of parliament." },
      { wrong: "\"Everyone in Germany supported Hitler in 1933.\"",
        right: "Even in the intimidated March 1933 election the Nazis got 43.9%. Millions voted socialist and communist, and many of them were imprisoned for it within months." },
      { wrong: "\"Hyperinflation in 1923 brought Hitler to power.\"",
        right: "It badly damaged trust in Weimar, but the Nazi rise came a decade later. The 1923 crisis is a long-term cause; the 1929 Depression is the trigger." },
    ],
  },

  "history/the-second-world-war": {
    summary:
      "The deadliest conflict in human history killed somewhere between 70 and 85 million people, most of them civilians. It reshaped the map, ended the European empires, created the United Nations and began the Cold War. This topic covers why it happened, how it was fought, the experience of the British home front, and why it ended the world that had produced it.",
    keyFacts: [
      {
        heading: "Why war came in 1939",
        points: [
          "Hitler's aims: overturn Versailles, unite German speakers, and win Lebensraum — living space — in eastern Europe.",
          "The steps went untested: rearmament from 1935, remilitarising the Rhineland (1936), the Anschluss with Austria (March 1938).",
          "Appeasement: Britain and France conceded rather than fight. At Munich (September 1938) Chamberlain accepted German annexation of the Sudetenland.",
          "Appeasement had real reasons — memories of 1914–18, unpreparedness for war, the Depression, and a widespread feeling that Versailles had been unjust.",
          "It collapsed when Hitler took the rest of Czechoslovakia in March 1939, which was not a German-speaking area and so exposed the claim as a pretext.",
          "The Nazi–Soviet Pact (August 1939) removed the risk of a two-front war. Germany invaded Poland on 1 September; Britain and France declared war on 3 September.",
        ],
      },
      {
        heading: "The course of the war",
        points: [
          "Blitzkrieg — 'lightning war' using tanks, aircraft and radio together — overran Poland, then Denmark, Norway, the Netherlands, Belgium and France by June 1940.",
          "Dunkirk (May–June 1940): around 338,000 troops evacuated. A deliverance, but as Churchill said, wars are not won by evacuations.",
          "The Battle of Britain (summer 1940): the RAF prevented the air superiority a German invasion needed, helped decisively by radar.",
          "Operation Barbarossa (June 1941): Germany invaded the USSR, breaking the pact and creating the front where most German soldiers would die.",
          "Pearl Harbor (December 1941) brought the USA in, making it a truly global war.",
          "Turning points: Stalingrad (winter 1942–43), El Alamein (1942), Midway (1942), D-Day (6 June 1944). Germany surrendered in May 1945; Japan in August after Hiroshima and Nagasaki.",
        ],
      },
      {
        heading: "The British home front",
        points: [
          "Evacuation: around 1.5 million children and mothers moved from cities in the first days of September 1939, many returning during the quiet 'Phoney War'.",
          "The Blitz (September 1940 – May 1941): around 40,000 civilians killed, with London bombed for 57 consecutive nights and Coventry devastated in November 1940.",
          "Rationing began in January 1940 and lasted, for some goods, until 1954 — longer after the war than during it.",
          "Conscription, the Home Guard, ARP wardens, and women in factories, on the land and in the armed services transformed daily life.",
          "The 'Blitz spirit' was real but has been simplified: there was also looting, panic, class resentment about shelters, and censorship of the worst news.",
        ],
      },
      {
        heading: "Consequences",
        points: [
          "Between 70 and 85 million dead, the majority civilians. The USSR alone lost around 27 million.",
          "The Holocaust: six million Jews murdered, alongside millions of Roma, disabled people, Soviet prisoners, political prisoners and others.",
          "The United Nations was founded in 1945 to prevent another such war.",
          "The Nuremberg Trials established that following orders was not a defence, creating the basis of modern international law.",
          "Europe was divided between Soviet and Western spheres, beginning the Cold War, and Britain emerged victorious but bankrupt, which accelerated the end of empire.",
        ],
      },
    ],
    flashcards: [
      { term: "Appeasement", definition: "The policy of conceding to Hitler's demands to avoid war, associated with Chamberlain and the Munich Agreement." },
      { term: "Lebensraum", definition: "'Living space' — Hitler's aim of conquering territory in eastern Europe for German settlement." },
      { term: "Munich Agreement", definition: "The September 1938 deal allowing Germany to annex the Sudetenland, in exchange for a promise of no further demands." },
      { term: "Anschluss", definition: "The union of Germany and Austria in March 1938, forbidden by the Treaty of Versailles." },
      { term: "Nazi–Soviet Pact", definition: "The August 1939 non-aggression agreement between Hitler and Stalin, secretly dividing Poland." },
      { term: "Blitzkrieg", definition: "'Lightning war' — the coordinated use of tanks, aircraft and radio to break through and advance rapidly." },
      { term: "Dunkirk", definition: "The 1940 evacuation of around 338,000 Allied troops from France." },
      { term: "Battle of Britain", definition: "The 1940 air campaign in which the RAF denied Germany the air superiority an invasion required." },
      { term: "The Blitz", definition: "The German bombing of British cities from September 1940 to May 1941, killing around 40,000 civilians." },
      { term: "Operation Barbarossa", definition: "The June 1941 German invasion of the USSR, which created the war's largest and deadliest front." },
      { term: "Pearl Harbor", definition: "The December 1941 Japanese attack that brought the United States into the war." },
      { term: "D-Day", definition: "The Allied landings in Normandy on 6 June 1944, opening the Western front in Europe." },
      { term: "Rationing", definition: "Government limits on food, clothing and fuel, in force in Britain from 1940 until 1954." },
      { term: "Nuremberg Trials", definition: "The 1945–46 trials of Nazi leaders, which established that following orders was not a defence." },
    ],
    examTips: [
      {
        tip: "Explain appeasement fairly before criticising it",
        detail:
          "Memories of the Somme, an unprepared military, economic depression and a genuine belief that Versailles was unjust. Explaining why sensible people chose it is analysis; calling Chamberlain a coward is not.",
      },
      {
        tip: "Say what actually ended appeasement",
        detail:
          "Taking the rest of Czechoslovakia in March 1939. That land was not German-speaking, so it exposed the self-determination argument as a cover story.",
      },
      {
        tip: "Give the Eastern Front its weight",
        detail:
          "Around 80% of German military casualties came on the Eastern Front, and the USSR lost around 27 million people. A British-only account of victory is badly out of proportion.",
      },
      {
        tip: "Treat the 'Blitz spirit' as an interpretation",
        detail:
          "Courage was real, and so were looting, panic and censorship. Testing a national myth against evidence is exactly what interpretation questions reward.",
      },
      {
        tip: "Use precise home front figures",
        detail:
          "1.5 million evacuated, 40,000 killed in the Blitz, rationing lasting until 1954. Concrete numbers make an answer land.",
      },
      {
        tip: "Explain why radar mattered in 1940",
        detail:
          "It let a smaller RAF put fighters in the right place instead of patrolling blindly. Technology plus organisation, not just pilots' courage.",
      },
    ],

    workedExamples: [
      {
        question: "Explain why Britain and France followed a policy of appeasement.",
        steps: [
          "Memory: the First World War had killed nearly a million British people, and almost nobody wanted a repeat.",
          "Military weakness: British rearmament had barely started, and the RAF was not ready in 1938.",
          "Economics: the Depression had gutted budgets, and rearmament competed with everything else.",
          "Genuine belief: many thought Versailles had been too harsh and that some German demands were reasonable.",
          "Fear of communism: some saw Germany as a barrier to Soviet expansion.",
          "Time: Chamberlain returned from Munich to genuine relief, and the year gained was used to build the fighters and radar that won the Battle of Britain.",
        ],
        answer:
          "Because war seemed worse than concession: the memory of 1914–18, an unready military, no money after the Depression, and a widespread belief that Germany had legitimate grievances. The year bought at Munich also produced the radar chain and Spitfires that mattered in 1940 — which is why the policy is more arguable than its reputation suggests.",
      },
      {
        question:
          "Why was the Battle of Britain so important?",
        steps: [
          "Germany needed air superiority before any invasion could cross the Channel.",
          "The RAF was outnumbered but had advantages: radar, the Dowding system directing fighters where they were needed, and fighting over home ground so downed pilots could fly again.",
          "German tactics shifted from attacking airfields to bombing cities in September 1940, relieving pressure on the RAF at a critical moment.",
          "By October the invasion was postponed indefinitely.",
          "Consequence: Britain stayed in the war, which kept a base for the eventual liberation of western Europe and later for American forces.",
        ],
        answer:
          "Because it denied Germany the air superiority an invasion required, so Britain stayed in the war. Radar and the Dowding system let a smaller force be used efficiently, and the German switch to bombing cities eased the pressure at exactly the wrong moment for Germany.",
      },
      {
        question:
          "'The Blitz spirit is a myth.' How far do you agree?",
        steps: [
          "For the myth being real: people did keep working, shelter, dig out neighbours and carry on under sustained bombing.",
          "Against: there was looting, black-marketeering, panic and mass unofficial evacuation from bombed cities.",
          "Class tension was real — resentment that the wealthy had better shelters, and the government initially refusing to open Underground stations.",
          "Censorship shaped the record: the worst incidents, like the Bethnal Green disaster, were suppressed at the time.",
          "But the myth was itself useful and partly self-fulfilling: believing everyone was coping helped people cope.",
          "Judgement: not a myth so much as a simplification, and the simplification was deliberate.",
        ],
        answer:
          "Not a myth but a heavy simplification, produced partly by wartime censorship. Real endurance existed alongside looting, panic and class resentment. The most interesting point is that the story was constructed at the time, and that constructing it had an effect.",
      },
      {
        question:
          "Why is the Eastern Front central to explaining Germany's defeat?",
        steps: [
          "Barbarossa in June 1941 opened a front of enormous scale against a country with vast manpower and space.",
          "Around 80% of German military casualties were suffered there.",
          "Stalingrad (winter 1942–43) destroyed an entire German army and ended any prospect of victory in the east.",
          "Soviet industry, relocated beyond the Urals, out-produced Germany in tanks and aircraft.",
          "By the time of D-Day in June 1944, the bulk of the German army was already committed in the east.",
          "So Western operations mattered, but they were fought against a Germany already being broken elsewhere.",
        ],
        answer:
          "Because that is where most of the German army was destroyed — roughly 80% of its military casualties, and around 27 million Soviet dead. Stalingrad ended German prospects in the east eighteen months before D-Day, which is the proportion British accounts most often lose.",
      },
    ],

    practice: [
      { question: "In which year did the Second World War begin in Europe?",
        accept: ["1939"],
        answer: "1939. Germany invaded Poland on 1 September; Britain and France declared war on 3 September." },
      { question: "What was the policy of conceding to Hitler's demands called?",
        accept: ["appeasement"],
        answer: "Appeasement, associated with Chamberlain and the Munich Agreement of 1938." },
      { question: "What is the German word for 'living space'?",
        accept: ["lebensraum"],
        answer: "Lebensraum — Hitler's aim of conquering territory in eastern Europe." },
      { question: "In which year was the Munich Agreement?",
        accept: ["1938"],
        answer: "1938. Chamberlain accepted German annexation of the Sudetenland." },
      { question: "What was the union of Germany and Austria in 1938 called?",
        accept: ["anschluss", "the anschluss"],
        answer: "The Anschluss, forbidden by the Treaty of Versailles." },
      { question: "Which pact of August 1939 removed the risk of a German two-front war?",
        accept: ["nazi soviet pact", "nazi-soviet pact", "molotov ribbentrop", "molotov-ribbentrop pact"],
        answer: "The Nazi–Soviet Pact, which secretly divided Poland between Germany and the USSR." },
      { question: "What is the German term for 'lightning war'?",
        accept: ["blitzkrieg"],
        answer: "Blitzkrieg — tanks, aircraft and radio used together to break through and advance fast." },
      { question: "Roughly how many troops were evacuated from Dunkirk?",
        accept: ["338000", "338,000", "330000"],
        answer: "Around 338,000. Churchill was careful to point out that wars are not won by evacuations." },
      { question: "What was the German invasion of the USSR in 1941 called?",
        accept: ["barbarossa", "operation barbarossa"],
        answer: "Operation Barbarossa, which created the war's largest and deadliest front." },
      { question: "Which attack brought the USA into the war in December 1941?",
        accept: ["pearl harbor", "pearl harbour", "attack on pearl harbor"],
        answer: "Pearl Harbor, the Japanese attack on the US Pacific fleet." },
      { question: "On what date was D-Day? Give it as day/month/year.",
        accept: ["06/06/1944", "6 june 1944", "6/6/1944"],
        answer: "6 June 1944, when Allied forces landed in Normandy." },
      { question: "Roughly how many British civilians were killed in the Blitz?",
        accept: ["40000", "40,000", "about 40000"],
        answer: "Around 40,000, with London bombed for 57 consecutive nights." },
      { question: "Roughly how many children and mothers were evacuated in September 1939, in millions?",
        accept: ["1.5", "1.5 million"],
        answer: "About 1.5 million, though many drifted home during the quiet Phoney War." },
      { question: "In which year did rationing finally end in Britain?",
        accept: ["1954"],
        answer: "1954 — nine years after the war ended, and longer after the war than during it." },
      { question: "Roughly how many people did the USSR lose, in millions?",
        accept: ["27", "27 million", "about 27"],
        answer: "Around 27 million — by far the heaviest losses of any country in the war." },
      { question: "Which trials established that following orders was not a defence?",
        accept: ["nuremberg", "nuremberg trials", "the nuremberg trials"],
        answer: "The Nuremberg Trials of 1945–46, the foundation of modern international law." },
      { question: "Explain why Britain's contribution to victory is often overstated in British accounts.",
        answer: "Because the parts Britain fought are the parts Britain remembers. Dunkirk, the Battle of Britain and D-Day are genuinely important — without the Battle of Britain there would have been no base from which to liberate western Europe. But roughly 80% of German military casualties were inflicted on the Eastern Front, and the USSR lost around 27 million people. Stalingrad destroyed German prospects in the east eighteen months before the Normandy landings. American industrial output and manpower were decisive too. A proportionate account keeps Britain's contribution real while recognising that Germany was broken mainly somewhere else. (Mark this one yourself.)" },
      { question: "Explain why appeasement is judged more harshly now than it was at the time.",
        answer: "Because we know how it ended and the people making the decisions did not. In 1938 Chamberlain was widely cheered: the memory of the First World War was raw, British rearmament had barely begun, the Depression had wrecked public finances, and many genuinely believed Versailles had treated Germany unfairly, which made some German demands look reasonable. Judging with hindsight makes those calculations look like cowardice. There is also a decent case that the year gained at Munich was used to build the radar network and fighters that won the Battle of Britain. Explaining why intelligent people chose it, and then judging it, is far better history than assuming they were simply weak. (Mark this one yourself.)" },
      {
        question: "What was BLITZKRIEG?",
        choices: [
          "A fast attack combining tanks, aircraft and infantry",
          "A defensive trench system",
          "A naval blockade",
          "A bombing campaign against Britain only",
        ],
        accept: [
          "A fast attack combining tanks, aircraft and infantry",
        ],
        answer: "It overwhelmed opponents before they could organise, which explains the speed of German success in 1939 to 1940.",
      },
      {
        question: "What was the significance of Dunkirk in 1940?",
        choices: [
          "Over 300,000 troops were evacuated, though it was a retreat",
          "It was a major British victory",
          "It ended the war in Europe",
          "Germany surrendered there",
        ],
        accept: [
          "Over 300,000 troops were evacuated, though it was a retreat",
        ],
        answer: "It preserved an army and boosted morale, but presenting a retreat as triumph is itself worth analysing as propaganda.",
      },
      {
        question: "What was the Battle of Britain?",
        choices: [
          "An air campaign in which the RAF prevented a German invasion",
          "A naval battle in the Atlantic",
          "A land battle in France",
          "The bombing of Germany",
        ],
        accept: [
          "An air campaign in which the RAF prevented a German invasion",
        ],
        answer: "Radar, the Spitfire and Hurricane, and German switching of targets to cities all contributed to the outcome.",
      },
      {
        question: "What happened on D-Day in June 1944?",
        choices: [
          "Allied forces landed in Normandy to open a Western Front",
          "Germany invaded Russia",
          "Japan attacked Pearl Harbor",
          "The war ended",
        ],
        accept: [
          "Allied forces landed in Normandy to open a Western Front",
        ],
        answer: "It required immense planning and deception, and began the campaign that reached Germany within a year.",
      },
      {
        question: "How did the Home Front affect British civilians?",
        choices: [
          "Rationing, evacuation and bombing changed daily life",
          "Life continued unchanged",
          "Civilians were not involved",
          "Only soldiers were affected",
        ],
        accept: [
          "Rationing, evacuation and bombing changed daily life",
        ],
        answer: "Total war blurred the line between soldier and civilian, which is one reason casualties among civilians were so high.",
      },
    ],

    misconceptions: [
      { wrong: "\"Dunkirk was a victory.\"",
        right: "It was a successful evacuation after a catastrophic defeat. Britain lost France, and abandoned almost all its heavy equipment. Churchill said so explicitly at the time." },
      { wrong: "\"Britain fought alone in 1940.\"",
        right: "Britain fought without a European ally, but with the Empire and Commonwealth — Indian, Canadian, Australian, African and Caribbean forces served throughout, and Polish and Czech pilots flew in the Battle of Britain." },
      { wrong: "\"Appeasement was simply cowardice.\"",
        right: "It had serious reasons: military unreadiness, the memory of 1914–18, no money after the Depression, and a genuine belief that Versailles had been unjust." },
      { wrong: "\"D-Day won the war.\"",
        right: "It opened a vital second front, but the German army had already been broken in the east. Stalingrad ended German prospects eighteen months earlier." },
      { wrong: "\"Everyone in Britain pulled together during the Blitz.\"",
        right: "Endurance was real, and so were looting, panic, black-marketeering and resentment about who had access to decent shelters. Censorship shaped the record we inherited." },
      { wrong: "\"Rationing ended when the war ended.\"",
        right: "It continued until 1954. Bread was actually rationed AFTER the war, in 1946, which it never had been during it." },
    ],
  },

  "history/the-holocaust": {
    summary:
      "Between 1941 and 1945 Nazi Germany murdered six million Jewish people, alongside millions of Roma and Sinti, disabled people, Soviet prisoners of war, Poles, political prisoners, gay men and others. This topic is written plainly and without sensationalism, because that is both the respectful way to treat it and the way that earns marks. The central historical question is not only what happened, but how an ordinary modern state came to organise it.",
    keyFacts: [
      {
        heading: "Persecution before the killing",
        points: [
          "Antisemitism long predated the Nazis in Europe, but the Nazis made it official state policy from 1933.",
          "April 1933: the boycott of Jewish businesses, and laws excluding Jews from the civil service and the professions.",
          "1935: the Nuremberg Laws stripped Jews of German citizenship and banned marriage between Jews and non-Jews. Nazi racial theory defined Jewishness by ancestry, not belief.",
          "November 1938: Kristallnacht, the 'night of broken glass'. Synagogues burned, around 7,500 Jewish businesses destroyed, roughly 100 killed and 30,000 men sent to camps.",
          "The pattern: exclusion, then isolation, then expropriation. Each step made the next seem less extraordinary.",
        ],
      },
      {
        heading: "Ghettos and the mobile killing units",
        points: [
          "After the invasion of Poland in 1939, Jews were forced into sealed ghettos — Warsaw's held around 400,000 people in about 1.3 square miles.",
          "Starvation and disease killed tens of thousands in the ghettos before any deportations began.",
          "From June 1941, following the German army into the USSR, the Einsatzgruppen shot Jewish communities in mass graves. Around 1.5 million people were murdered this way.",
          "Babi Yar, near Kyiv, September 1941: 33,771 people shot over two days.",
          "The shootings were considered inefficient and psychologically damaging to the killers — a chilling phrase from the documents, and part of why the method changed.",
        ],
      },
      {
        heading: "The camps and the 'Final Solution'",
        points: [
          "The Wannsee Conference (January 1942) coordinated the 'Final Solution to the Jewish Question' across government departments. It did not begin the killing, which was already underway; it organised it.",
          "Extermination camps — Auschwitz-Birkenau, Treblinka, Sobibor, Belzec, Chelmno, Majdanek — were built to kill on arrival.",
          "Auschwitz-Birkenau alone murdered around 1.1 million people, roughly a million of them Jews.",
          "Victims arrived by train from across occupied Europe, were 'selected', and most were killed within hours.",
          "The system used railways, records, industry and bureaucracy — the tools of a modern state, turned to mass murder.",
        ],
      },
      {
        heading: "Resistance, rescue and aftermath",
        points: [
          "Resistance happened despite impossible conditions: the Warsaw Ghetto Uprising (April–May 1943) held out for nearly a month, and there were revolts at Treblinka, Sobibor and Auschwitz.",
          "Everyday resistance included keeping records — the Oyneg Shabes archive in Warsaw was buried so the truth would survive — and maintaining schools and worship in secret.",
          "Rescuers existed: Denmark evacuated most of its Jewish population; individuals such as Nicholas Winton and Irena Sendler saved children. They were rare, and the risk was death.",
          "Around six million Jews were murdered — roughly two thirds of Europe's Jewish population.",
          "The Nuremberg Trials began the legal reckoning, and the word 'genocide' was coined by Raphael Lemkin in 1944 to name what had no name.",
        ],
      },
    ],
    flashcards: [
      { term: "Antisemitism", definition: "Hostility towards or prejudice against Jewish people, which long predated the Nazis but became state policy in 1933." },
      { term: "Nuremberg Laws", definition: "The 1935 laws stripping Jews of German citizenship and banning marriage with non-Jews." },
      { term: "Kristallnacht", definition: "The November 1938 pogrom in which synagogues and Jewish businesses were destroyed across Germany and Austria." },
      { term: "Ghetto", definition: "A sealed area of a city into which Jews were forced, where starvation and disease killed tens of thousands." },
      { term: "Einsatzgruppen", definition: "Mobile killing units that followed the German army into the USSR and shot around 1.5 million people." },
      { term: "Babi Yar", definition: "The ravine near Kyiv where 33,771 Jews were shot over two days in September 1941." },
      { term: "Wannsee Conference", definition: "The January 1942 meeting that coordinated the 'Final Solution' across government departments." },
      { term: "Final Solution", definition: "The Nazi term for the planned murder of all European Jews." },
      { term: "Auschwitz-Birkenau", definition: "The largest extermination camp, where around 1.1 million people were murdered." },
      { term: "Selection", definition: "The process on arrival at a camp deciding who would be worked and who would be killed immediately." },
      { term: "Warsaw Ghetto Uprising", definition: "The April–May 1943 armed revolt in the Warsaw Ghetto, which held out for nearly a month." },
      { term: "Oyneg Shabes", definition: "The secret archive buried in the Warsaw Ghetto so that a record would survive its people." },
      { term: "Genocide", definition: "The deliberate destruction of a national, ethnic, racial or religious group — a term coined by Raphael Lemkin in 1944." },
      { term: "Righteous Among the Nations", definition: "The honour given to non-Jews who risked their lives to save Jews during the Holocaust." },
    ],
    examTips: [
      {
        tip: "Write plainly and factually",
        detail:
          "Restraint carries more weight than dramatic language, and examiners reward precision. Let the evidence do the work; it does not need help.",
      },
      {
        tip: "Show it developed in stages",
        detail:
          "Exclusion (1933), isolation (1935), violence (1938), ghettos (1939), shooting (1941), camps (1942). Showing the escalation is the analysis.",
      },
      {
        tip: "Get Wannsee right",
        detail:
          "It did not decide to begin the killing — mass shootings had been underway for six months. It coordinated and industrialised what was already happening.",
      },
      {
        tip: "Include the other victims, and be precise",
        detail:
          "Roma and Sinti, disabled people murdered under Aktion T4, Soviet prisoners, Poles, political prisoners, gay men, Jehovah's Witnesses. Naming them accurately matters.",
      },
      {
        tip: "Never say victims went passively",
        detail:
          "There were uprisings in ghettos and in the camps themselves, and resistance in keeping records, schools and faith alive. Say what resistance was possible against what odds.",
      },
      {
        tip: "Use exact figures where they exist",
        detail:
          "Six million Jewish dead; 1.1 million at Auschwitz; 33,771 at Babi Yar over two days. Those numbers were recorded, often by the perpetrators.",
      },
      {
        tip: "Ask the historian's question",
        detail:
          "Not only what happened but how: how a modern bureaucratic state organised it, and how ordinary people came to take part. That question is what the topic is for.",
      },
    ],

    workedExamples: [
      {
        question: "Explain how Nazi persecution of Jews escalated between 1933 and 1942.",
        steps: [
          "1933: exclusion. Boycotts, and removal from the civil service and professions — Jews pushed out of public life.",
          "1935: legal isolation. The Nuremberg Laws removed citizenship and criminalised marriage, defining Jewishness by ancestry.",
          "1938: open violence. Kristallnacht destroyed synagogues and businesses and sent 30,000 men to camps.",
          "1939–41: concentration. Ghettos in occupied Poland, where starvation did the work.",
          "1941: mass shooting. The Einsatzgruppen murdered around 1.5 million people behind the Eastern Front.",
          "1942: industrialised killing. Wannsee coordinated it, and the extermination camps made it systematic.",
          "The analytical point: each stage made the next thinkable. There was no single moment when everything changed.",
        ],
        answer:
          "In stages, each one normalising the next: exclusion from work, then loss of citizenship, then organised violence, then ghettos, then mass shooting, then industrialised murder. The absence of a single decisive moment is precisely what makes it so important to study.",
      },
      {
        question:
          "Why does the fact that the Holocaust was carried out by a modern state matter?",
        steps: [
          "It required railways to move victims across a continent during a war.",
          "It required records: censuses, identity documents and lists to identify who was Jewish.",
          "It required industry — for the camps, the gas, the crematoria — and companies competed for the contracts.",
          "It required a civil service to coordinate departments, which is exactly what Wannsee was for.",
          "So it was not a mob or a frenzy. It was administered, with budgets, timetables and paperwork.",
          "That is why it is studied as a warning about states and bureaucracies, not only about hatred.",
        ],
        answer:
          "Because it shows that modern administration — railways, records, industry, civil servants — can be turned to mass murder without anything breaking down. It was organised rather than chaotic, which is what makes it a warning about how states can function, not only about how people can hate.",
      },
      {
        question:
          "Describe the forms resistance took, and why armed resistance was so difficult.",
        steps: [
          "Armed: the Warsaw Ghetto Uprising held out nearly a month against tanks and artillery, with a few pistols and homemade explosives. There were revolts at Treblinka, Sobibor and Auschwitz.",
          "The obstacles: starvation, no weapons, collective punishment where one act meant hundreds shot, and the fact that families were held together.",
          "Deception: victims were told they were being resettled, and the truth was almost unbelievable even to those receiving it.",
          "Everyday resistance: secret schools, worship, and the Oyneg Shabes archive buried so that the record would survive.",
          "Rescue: Denmark evacuated most of its Jewish population; individuals hid children at risk of death.",
          "The judgement: resistance was widespread; what was absent was the means, not the will.",
        ],
        answer:
          "It ranged from the Warsaw Ghetto Uprising and camp revolts to secret schools, worship and buried archives. Armed resistance was near-impossible because victims were starving, unarmed, held with their families, and subject to collective punishment. The will was there; the means were not.",
      },
      {
        question:
          "Why is Holocaust denial treated as a historical question rather than an opinion?",
        steps: [
          "The evidence is overwhelming and comes from several independent directions.",
          "German documents: transport records, camp registers, orders and budgets, kept by the perpetrators themselves.",
          "Physical evidence: the camps, the mass graves, the crematoria.",
          "Testimony: survivors, perpetrators tried at Nuremberg, and liberating soldiers.",
          "Demography: entire Jewish communities across Europe simply cease to exist in the records.",
          "So denial is not a reading of the evidence but a refusal of it — which makes it a matter of fact, not of interpretation.",
        ],
        answer:
          "Because the evidence converges from independent sources — the perpetrators' own paperwork, the physical sites, testimony from every side, and the demographic record. Denial requires rejecting all of it at once, which is a refusal of evidence rather than an interpretation of it.",
      },
    ],

    practice: [
      { question: "Roughly how many Jewish people were murdered in the Holocaust, in millions?",
        accept: ["6", "6 million", "six million"],
        answer: "Six million — around two thirds of Europe's Jewish population before the war." },
      { question: "In which year were the Nuremberg Laws passed?",
        accept: ["1935"],
        answer: "1935. They stripped Jews of German citizenship and banned marriage with non-Jews." },
      { question: "What is the name of the November 1938 pogrom?",
        accept: ["kristallnacht", "night of broken glass", "the night of broken glass"],
        answer: "Kristallnacht, the 'night of broken glass'. Around 30,000 Jewish men were sent to camps." },
      { question: "What were the mobile killing units that followed the army into the USSR called?",
        accept: ["einsatzgruppen", "the einsatzgruppen"],
        answer: "The Einsatzgruppen, who murdered around 1.5 million people by shooting." },
      { question: "At which ravine near Kyiv were 33,771 people shot in September 1941?",
        accept: ["babi yar", "babyn yar"],
        answer: "Babi Yar, over two days in September 1941." },
      { question: "Which January 1942 conference coordinated the 'Final Solution'?",
        accept: ["wannsee", "wannsee conference", "the wannsee conference"],
        answer: "The Wannsee Conference. It coordinated killing that was already underway rather than starting it." },
      { question: "Which was the largest extermination camp?",
        accept: ["auschwitz", "auschwitz birkenau", "auschwitz-birkenau"],
        answer: "Auschwitz-Birkenau, where around 1.1 million people were murdered." },
      { question: "In which year was the Warsaw Ghetto Uprising?",
        accept: ["1943"],
        answer: "1943. It held out for nearly a month against tanks and artillery." },
      { question: "Roughly how many people were held in the Warsaw Ghetto?",
        accept: ["400000", "400,000"],
        answer: "Around 400,000, crammed into about 1.3 square miles." },
      { question: "Who coined the word 'genocide' in 1944?",
        accept: ["raphael lemkin", "lemkin"],
        answer: "Raphael Lemkin, who created the word because what had happened had no name." },
      { question: "Which country evacuated most of its Jewish population to safety?",
        accept: ["denmark"],
        answer: "Denmark, which got the great majority of its Jewish population to neutral Sweden." },
      { question: "What was the secret archive buried in the Warsaw Ghetto called?",
        accept: ["oyneg shabes", "oneg shabbat", "ringelblum archive"],
        answer: "The Oyneg Shabes archive, buried so that a record would outlive the people who made it." },
      { question: "What was the process on arrival at a camp deciding who lived and who died called?",
        accept: ["selection", "the selection"],
        answer: "Selection. Most people were murdered within hours of arriving." },
      { question: "Which trials began the legal reckoning after the war?",
        accept: ["nuremberg", "nuremberg trials", "the nuremberg trials"],
        answer: "The Nuremberg Trials, which established that following orders was not a defence." },
      { question: "Did the Wannsee Conference begin the killing? Answer yes or no.",
        accept: ["no"],
        answer: "No. Mass shootings had been underway for six months. Wannsee coordinated and industrialised it." },
      { question: "Name one group other than Jews targeted for murder by the Nazis.",
        accept: ["roma", "sinti", "disabled people", "disabled", "soviet prisoners", "poles", "political prisoners", "gay men", "jehovahs witnesses", "jehovah's witnesses"],
        answer: "Roma and Sinti, disabled people, Soviet prisoners of war, Poles, political prisoners, gay men and Jehovah's Witnesses were all targeted." },
      { question: "Explain why the Holocaust is described as industrialised murder.",
        answer: "Because it used the machinery of a modern state rather than the methods of a mob. Victims were identified through censuses and identity records, transported across a continent by railway timetable during a war, and killed in purpose-built facilities designed by engineers and supplied by companies that competed for the contracts. Government departments coordinated it, which is what the Wannsee Conference was for, and it was run with budgets, paperwork and quotas. That is the reason it is studied as a warning about how states and bureaucracies can function, and not only as an episode of extreme hatred — nothing about the administration broke down. (Mark this one yourself.)" },
      { question: "Explain why studying the escalation from 1933 to 1942 matters more than studying 1942 alone.",
        answer: "Because 1942 is incomprehensible on its own, and the escalation is where the lesson lies. In 1933 the measures were exclusion from jobs and boycotts of shops — things a society could tell itself were merely unpleasant politics. 1935 removed citizenship, which made Jews legally different. 1938 brought open violence with almost no public objection. Ghettos in 1939 put people out of sight, and the mass shootings of 1941 happened far away in the east. Each step made the next one thinkable, and each was accepted by enough people to allow the one after it. Studying only the camps makes the Holocaust look like an eruption; studying the escalation shows it as a series of steps that people took. (Mark this one yourself.)" },
      {
        question: "What were the Nuremberg Laws of 1935?",
        choices: [
          "Laws stripping Jewish people of citizenship and rights",
          "Laws creating the concentration camps",
          "Trials of Nazi leaders",
          "Laws banning the Nazi Party",
        ],
        accept: [
          "Laws stripping Jewish people of citizenship and rights",
        ],
        answer: "They marked a shift from social exclusion to legal persecution, and made discrimination a matter of state law.",
      },
      {
        question: "What was Kristallnacht in November 1938?",
        choices: [
          "A violent attack on Jewish homes, businesses and synagogues",
          "A peaceful protest",
          "The liberation of a camp",
          "A Nazi election victory",
        ],
        accept: [
          "A violent attack on Jewish homes, businesses and synagogues",
        ],
        answer: "The state's open participation showed persecution had moved beyond law into organised violence.",
      },
      {
        question: "What is meant by the Final Solution?",
        choices: [
          "The Nazi plan for the systematic murder of Europe's Jews",
          "A resettlement programme",
          "A peace treaty",
          "An economic policy",
        ],
        accept: [
          "The Nazi plan for the systematic murder of Europe's Jews",
        ],
        answer: "Around six million Jewish people were murdered, alongside Roma, disabled people, political opponents and others.",
      },
      {
        question: "Why is studying survivor testimony important?",
        choices: [
          "It preserves individual human experience behind the statistics",
          "It replaces documentary evidence",
          "It is always completely accurate",
          "It is the only evidence available",
        ],
        accept: [
          "It preserves individual human experience behind the statistics",
        ],
        answer: "Testimony carries the personal reality that numbers cannot, and is used alongside documents rather than instead of them.",
      },
      {
        question: "What does the Holocaust show about the role of ordinary people?",
        choices: [
          "Genocide required the participation or silence of many",
          "Only a handful of leaders were involved",
          "Nobody knew anything about it",
          "It happened without any planning",
        ],
        accept: [
          "Genocide required the participation or silence of many",
        ],
        answer: "Administrators, railway staff, police and neighbours all played parts. That is the most uncomfortable and important lesson of the topic.",
      },
    ],

    misconceptions: [
      { wrong: "\"The Wannsee Conference decided to start the Holocaust.\"",
        right: "Mass shootings by the Einsatzgruppen had been killing on an enormous scale for six months already. Wannsee coordinated and systematised what was underway." },
      { wrong: "\"Only Jews were targeted.\"",
        right: "Jews were the central target of a plan for total annihilation, but Roma and Sinti, disabled people, Soviet prisoners, Poles, political prisoners, gay men and others were also murdered in vast numbers." },
      { wrong: "\"Victims went passively to their deaths.\"",
        right: "There were uprisings in Warsaw, Treblinka, Sobibor and Auschwitz, and constant everyday resistance. What was missing was weapons and any means of escape, not courage." },
      { wrong: "\"Nobody outside Germany knew.\"",
        right: "Reports reached the Allies from 1942, and the Polish government-in-exile publicised them. What was scarce was not information but action, and the willingness to believe it." },
      { wrong: "\"It was carried out only by a small group of fanatics.\"",
        right: "It required railway staff, civil servants, police, industrialists, soldiers and clerks across occupied Europe. That breadth of participation is one of the hardest and most important facts about it." },
      { wrong: "\"Antisemitism began with the Nazis.\"",
        right: "It had existed in Europe for centuries. What the Nazis added was state power, modern administration and an explicit goal of extermination." },
    ],
  },

  "history/germany-1890-1945": {
    summary:
      "The GCSE depth study: Germany from an emperor with real power, through Europe's most modern democracy, to a dictatorship that destroyed itself and much of the continent with it. Where the Year 9 topic tells the story of how the Nazis rose, this covers the full period an exam will ask about — Kaiser, Weimar, Nazi rule, and life under it — and the source and interpretation skills the paper tests.",
    keyFacts: [
      {
        heading: "Kaiser Wilhelm's Germany, 1890–1918",
        points: [
          "Germany was unified only in 1871 and industrialised at extraordinary speed, overtaking Britain in steel production by 1900.",
          "The Kaiser held real power: he appointed the Chancellor and controlled foreign and military policy. The Reichstag was elected but limited.",
          "Weltpolitik — 'world policy' — meant colonies and a battle fleet, which set Germany against Britain directly.",
          "The SPD, a socialist party, became the largest in the Reichstag by 1912, showing the gap between the country's politics and its constitution.",
          "By 1918 the Allied blockade had produced severe hunger. Naval mutiny at Kiel triggered revolution, and the Kaiser abdicated on 9 November 1918.",
        ],
      },
      {
        heading: "Weimar: crisis, recovery, collapse",
        points: [
          "1919–23, crisis: Versailles, the Spartacist uprising, the Kapp Putsch, French occupation of the Ruhr, and hyperinflation.",
          "1924–29, the 'golden years' under Stresemann: the Rentenmark stabilised the currency, the Dawes and Young Plans restructured reparations, and Locarno and League membership restored Germany's standing.",
          "Culture flourished — Bauhaus architecture, the cinema of Metropolis, cabaret in Berlin — and was hated by conservatives as decadence.",
          "The recovery rested on American loans, which was its fatal weakness.",
          "1929–33, collapse: the Wall Street Crash, unemployment near 6 million, government by Article 48 decree, and the rise of the extremes.",
        ],
      },
      {
        heading: "Control and consent under the Nazis",
        points: [
          "Terror: the SS under Himmler, the Gestapo secret police, and concentration camps from Dachau in 1933.",
          "The Gestapo was smaller than people assumed — much of its information came from ordinary Germans denouncing neighbours, often over private grudges.",
          "Propaganda under Goebbels: cheap radios, rallies at Nuremberg, censored press and film, and the 1936 Olympics as a showcase.",
          "The legal system was Nazified: judges swore loyalty to Hitler, and the People's Court handed down thousands of death sentences.",
          "Consent mattered too: unemployment fell from 6 million to near zero, which for many families outweighed everything else.",
        ],
      },
      {
        heading: "Life under Nazi rule",
        points: [
          "Women: encouraged out of work and into motherhood, with the Mother's Cross for large families — but the policy reversed as war demanded labour.",
          "Young people: Hitler Youth and the League of German Maidens, a rewritten curriculum, and PE and racial science expanded.",
          "Workers: unions abolished and replaced by the German Labour Front; Strength Through Joy offered holidays and the promise of a Volkswagen most never received.",
          "Jews: escalating persecution from boycotts and the Nuremberg Laws to Kristallnacht and, from 1941, deportation and murder.",
          "Opposition existed and was dangerous: the White Rose students, the Edelweiss Pirates, the Swing Youth, church figures like Niemöller, and the July 1944 bomb plot.",
          "The war ended it: total war from 1943, bombing, and defeat in 1945 with Germany occupied and divided.",
        ],
      },
    ],
    flashcards: [
      { term: "Kaiser", definition: "The German emperor. Wilhelm II held real power over the Chancellor, the army and foreign policy until 1918." },
      { term: "Weltpolitik", definition: "Wilhelm II's 'world policy' of colonies and naval expansion, which brought Germany into rivalry with Britain." },
      { term: "Spartacist uprising", definition: "The failed communist rising in Berlin in January 1919, crushed with the help of the Freikorps." },
      { term: "Kapp Putsch", definition: "The 1920 attempt by right-wing Freikorps to seize Berlin, defeated by a general strike." },
      { term: "Stresemann", definition: "The politician behind Weimar's recovery — currency stabilisation, the Dawes Plan, Locarno and League membership." },
      { term: "Dawes Plan", definition: "The 1924 agreement rescheduling reparations and bringing American loans into Germany." },
      { term: "Article 48", definition: "The clause allowing rule by presidential decree, used routinely from 1930 — before Hitler took office." },
      { term: "Gestapo", definition: "The Nazi secret police, which relied heavily on denunciations from ordinary members of the public." },
      { term: "Goebbels", definition: "Nazi Minister of Propaganda, responsible for radio, film, press and the mass rallies." },
      { term: "Strength Through Joy", definition: "The Nazi leisure organisation offering workers holidays and cheap entertainment in place of trade unions." },
      { term: "Hitler Youth", definition: "The compulsory Nazi youth organisation for boys, with the League of German Maidens for girls." },
      { term: "White Rose", definition: "The Munich student group that distributed anti-Nazi leaflets; its leaders were executed in 1943." },
      { term: "Edelweiss Pirates", definition: "Working-class young people who rejected the Hitler Youth and, later, helped Allied airmen and distributed leaflets." },
      { term: "Total war", definition: "The 1943 mobilisation of the whole German economy and population for war, announced by Goebbels after Stalingrad." },
    ],
    examTips: [
      {
        tip: "Know the three Weimar phases and their dates",
        detail:
          "1919–23 crisis, 1924–29 recovery, 1929–33 collapse. Almost every Weimar question is easier once you place it in the right phase.",
      },
      {
        tip: "Explain Nazi control as terror AND consent",
        detail:
          "The Gestapo mattered, but so did full employment and the sense of national recovery. Answers with only fear in them miss why so many people went along with it.",
      },
      {
        tip: "Use the Gestapo's real size",
        detail:
          "It was far smaller than Germans believed, and depended on denunciations by ordinary people. That fact is more interesting and more accurate than an image of agents everywhere.",
      },
      {
        tip: "Show the recovery was fragile",
        detail:
          "Stresemann's Germany ran on American loans. Saying that explains why the Wall Street Crash was so devastating there specifically.",
      },
      {
        tip: "Test the source's origin, not just its content",
        detail:
          "Anything published in Germany after 1933 passed through censorship. Provenance is the first thing to comment on — who made it, when, and for whom.",
      },
      {
        tip: "Name opposition groups precisely",
        detail:
          "White Rose, Edelweiss Pirates, Swing Youth, the Confessing Church, the July 1944 plot. Specific groups beat a general claim that 'some Germans resisted'.",
      },
      {
        tip: "Watch the dates on women's policy",
        detail:
          "Women were pushed out of work in the 1930s and pulled back in during the war. A policy that reverses is a gift for a 'how far did life change' question.",
      },
    ],

    workedExamples: [
      {
        question: "Explain why the Weimar Republic recovered between 1924 and 1929.",
        steps: [
          "Currency: the Rentenmark in late 1923 ended hyperinflation by replacing a worthless currency with a credible one.",
          "Reparations: the Dawes Plan of 1924 rescheduled payments to a manageable level and opened the way for American loans.",
          "Investment: those loans funded industry, housing and public works, and unemployment fell.",
          "Diplomacy: Locarno in 1925 and League membership in 1926 brought Germany back into respectable international life.",
          "Politics: with prosperity, extremist parties collapsed — the Nazis to 2.6% in 1928.",
          "But note the weakness: it was borrowed prosperity, and could be withdrawn at short notice. Which is exactly what happened in 1929.",
        ],
        answer:
          "Currency stabilisation, the Dawes Plan, American loans, and Stresemann's diplomacy restoring Germany's standing. But the recovery was built on foreign borrowing, so it lasted only as long as the loans did.",
      },
      {
        question:
          "How did the Nazis keep control of Germany between 1933 and 1939?",
        steps: [
          "Terror: the SS, the Gestapo, concentration camps and a Nazified legal system that removed any protection from the courts.",
          "But the Gestapo was small, and worked mainly through denunciations — which means ordinary Germans participated in the surveillance.",
          "Propaganda: Goebbels used cheap radios, rallies, censored film and press to make Nazism the only voice most people heard.",
          "Organisation: the Hitler Youth, the German Labour Front and Strength Through Joy structured people's time and loyalty.",
          "Consent: unemployment fell from around 6 million to near zero. For many families that was decisive.",
          "Judgement: control rested on fear and genuine approval together, and separating them is the hardest part of the topic.",
        ],
        answer:
          "Through terror, propaganda, mass organisations and real popularity together. The Gestapo depended on ordinary Germans informing on each other, and the collapse of unemployment bought consent that fear alone could not have produced.",
      },
      {
        question:
          "'Life improved for most Germans under the Nazis before 1939.' How far do you agree?",
        steps: [
          "For: unemployment fell dramatically, Strength Through Joy offered holidays previously unimaginable, and national pride recovered.",
          "But test the employment figures: they excluded Jews and women pushed out of work, and were boosted by conscription and rearmament.",
          "Against: wages rose more slowly than hours; unions were abolished so workers had no power to bargain.",
          "Against, decisively: for Jews, Roma, disabled people, socialists and religious dissenters, life became progressively unbearable and then lethal.",
          "Judgement: many Germans genuinely experienced improvement, which is precisely how the regime kept support — but the improvement was partly statistical and was paid for by the people excluded from it.",
        ],
        answer:
          "For many ordinary Germans life did improve, and saying otherwise misunderstands why the regime was popular. But the figures were flattered by removing people from the count, workers lost all bargaining power, and for the persecuted it was catastrophic. Improvement for some was built on exclusion of others.",
      },
      {
        question:
          "A German newspaper photograph from 1936 shows cheering crowds at the Olympics. How useful is it as evidence about support for the Nazis?",
        steps: [
          "Content: it shows enthusiasm at a major public event, which is genuine information.",
          "Provenance: it was published in Germany in 1936, so it passed through Goebbels' censorship. Nothing showing dissent could have appeared.",
          "Purpose: the 1936 Olympics were deliberately staged to impress foreign visitors — antisemitic signs were temporarily removed.",
          "So it is weak evidence for how much support existed, because no photograph could have shown anything else.",
          "But it is strong evidence for something else: what the regime wanted seen, and how carefully it managed its image.",
          "The general skill: a censored source is unreliable about reality and highly reliable about intentions.",
        ],
        answer:
          "Weak evidence about actual support, since censorship made any other image impossible — but strong evidence about what the regime wanted the world to see. Turning a source's limitation into a different question it can answer is exactly what utility questions reward.",
      },
    ],

    practice: [
      { question: "In which year was Germany unified?",
        accept: ["1871"],
        answer: "1871. Germany was a very young country in 1914 — younger than many of its own citizens." },
      { question: "What was Wilhelm II's policy of colonies and naval expansion called?",
        accept: ["weltpolitik"],
        answer: "Weltpolitik — 'world policy' — which set Germany directly against Britain." },
      { question: "In which year did the Kaiser abdicate?",
        accept: ["1918"],
        answer: "1918, on 9 November, after naval mutiny at Kiel triggered revolution." },
      { question: "Which failed communist rising took place in Berlin in January 1919?",
        accept: ["spartacist", "spartacist uprising", "the spartacist uprising"],
        answer: "The Spartacist uprising, crushed with the help of the Freikorps." },
      { question: "Which 1920 right-wing attempt to seize Berlin was defeated by a general strike?",
        accept: ["kapp putsch", "the kapp putsch"],
        answer: "The Kapp Putsch. Workers defeated it by refusing to work, not by force of arms." },
      { question: "Who was the politician behind Weimar's recovery after 1923?",
        accept: ["stresemann", "gustav stresemann"],
        answer: "Gustav Stresemann, responsible for the currency, the Dawes Plan and Locarno." },
      { question: "Which 1924 plan rescheduled reparations and brought American loans?",
        accept: ["dawes plan", "the dawes plan", "dawes"],
        answer: "The Dawes Plan. Weimar's recovery ran on those loans — which is why 1929 hit so hard." },
      { question: "Which years are called Weimar's 'golden years'? Give them as e.g. 1900-1905.",
        accept: ["1924-1929", "1924-29", "1924 - 1929"],
        answer: "1924 to 1929 — recovery between the crisis years and the collapse." },
      { question: "Who was the Nazi Minister of Propaganda?",
        accept: ["goebbels", "joseph goebbels"],
        answer: "Joseph Goebbels, who controlled radio, film, press and the mass rallies." },
      { question: "Who led the SS?",
        accept: ["himmler", "heinrich himmler"],
        answer: "Heinrich Himmler, who also controlled the Gestapo and the camp system." },
      { question: "In which year did the first concentration camp, Dachau, open?",
        accept: ["1933"],
        answer: "1933 — within months of Hitler becoming Chancellor." },
      { question: "What was the Nazi leisure organisation for workers called?",
        accept: ["strength through joy", "kraft durch freude", "kdf"],
        answer: "Strength Through Joy, which offered holidays in place of the trade unions it replaced." },
      { question: "Which student group distributed anti-Nazi leaflets in Munich?",
        accept: ["white rose", "the white rose"],
        answer: "The White Rose. Its leaders were executed in 1943." },
      { question: "Which working-class youth group rejected the Hitler Youth?",
        accept: ["edelweiss pirates", "the edelweiss pirates"],
        answer: "The Edelweiss Pirates, who later helped Allied airmen and distributed leaflets." },
      { question: "In which year was the July bomb plot against Hitler?",
        accept: ["1944"],
        answer: "1944. Its failure was followed by thousands of arrests and executions." },
      { question: "Which city hosted the 1936 Olympics used as a Nazi showcase?",
        accept: ["berlin"],
        answer: "Berlin. Antisemitic signs were temporarily removed for the foreign visitors." },
      { question: "Explain why the Gestapo's reputation was more powerful than its actual size.",
        answer: "Because its effectiveness depended on what Germans believed rather than on how many agents it had. The Gestapo was surprisingly small — in some large cities only a few dozen officers covered hundreds of thousands of people — and it could not possibly have watched everyone. What it had instead was a reputation for being everywhere, which meant people policed themselves and each other. Much of its information came from ordinary Germans denouncing neighbours, colleagues and even family, and historians have shown a striking proportion of those denunciations were motivated by private grudges rather than politics. The surveillance state ran on its citizens. (Mark this one yourself.)" },
      { question: "Explain why sources produced in Germany after 1933 need particularly careful handling.",
        answer: "Because everything published passed through Goebbels' propaganda ministry, so no source could contradict the regime and survive. A newspaper, photograph or film from Nazi Germany tells you what the government wanted seen, not necessarily what was happening. That does not make such sources useless — it changes the question they answer. They are excellent evidence about Nazi aims, methods and self-image, and about what the regime thought would be persuasive. For evidence about reality you need material the regime did not control: private diaries, foreign reporting, the records of exiled organisations, and post-war testimony, each of which carries its own problems. (Mark this one yourself.)" },
      {
        question: "What was the Treaty of Versailles signed in 1919 blamed for in Germany?",
        choices: [
          "Humiliating Germany through reparations and the war guilt clause",
          "Ending the monarchy",
          "Starting the First World War",
          "Creating the Nazi Party",
        ],
        accept: [
          "Humiliating Germany through reparations and the war guilt clause",
        ],
        answer: "Territory losses, army limits and Article 231 fuelled resentment that extremist parties exploited throughout the 1920s.",
      },
      {
        question: "What happened during the hyperinflation of 1923?",
        choices: [
          "Money became almost worthless and savings were wiped out",
          "Prices fell sharply",
          "Germany paid off all reparations",
          "Unemployment disappeared",
        ],
        accept: [
          "Money became almost worthless and savings were wiped out",
        ],
        answer: "Those with savings and fixed incomes suffered most, and many never trusted the Weimar Republic again.",
      },
      {
        question: "Why was the Weimar Constitution's proportional representation criticised?",
        choices: [
          "It produced unstable coalitions and gave small extremist parties seats",
          "It excluded women from voting",
          "It gave the President no powers",
          "It banned political parties",
        ],
        accept: [
          "It produced unstable coalitions and gave small extremist parties seats",
        ],
        answer: "Article 48, allowing rule by decree in an emergency, was the other weakness later exploited.",
      },
      {
        question: "What effect did the Wall Street Crash of 1929 have on Germany?",
        choices: [
          "American loans were withdrawn, causing mass unemployment",
          "Germany became wealthier",
          "Reparations were cancelled",
          "The Nazi vote collapsed",
        ],
        accept: [
          "American loans were withdrawn, causing mass unemployment",
        ],
        answer: "The Nazi vote rose sharply as unemployment climbed, which is the clearest link between economic crisis and political extremism.",
      },
      {
        question: "What was the Stresemann era known for?",
        choices: [
          "A period of relative recovery and stability in the mid-1920s",
          "Total economic collapse",
          "Nazi rule",
          "War with France",
        ],
        accept: [
          "A period of relative recovery and stability in the mid-1920s",
        ],
        answer: "The Rentenmark, the Dawes Plan and entry to the League brought recovery — but it rested on American loans.",
      },
    ],

    misconceptions: [
      { wrong: "\"The Gestapo had agents watching everyone.\"",
        right: "It was small and relied on denunciations from the public — often over private grudges. The fear was the mechanism, not the manpower." },
      { wrong: "\"Weimar was doomed from the start.\"",
        right: "It recovered strongly between 1924 and 1929, with Nazi support collapsing to 2.6%. The Depression, not Versailles, is what killed it." },
      { wrong: "\"Nazi employment figures show the economy genuinely boomed.\"",
        right: "They excluded Jews and many women removed from the workforce, and were inflated by conscription and rearmament. Real, but flattered." },
      { wrong: "\"Nobody in Germany opposed the Nazis.\"",
        right: "The White Rose, Edelweiss Pirates, Swing Youth, Confessing Church and the July 1944 plotters all resisted. Most paid with their lives, which is why opposition stayed small." },
      { wrong: "\"Nazi policy on women stayed the same throughout.\"",
        right: "Women were pushed out of work in the 1930s and pulled back in as the war demanded labour. The reversal is a strong point to make in change-over-time questions." },
      { wrong: "\"The Kaiser was a figurehead like a modern monarch.\"",
        right: "Wilhelm II appointed the Chancellor and controlled foreign and military policy. That is why Germany's constitution mattered so much in 1914." },
    ],
  },

  "history/conflict-and-tension-1918-1939": {
    summary:
      "The twenty years between the wars: a peace settlement that satisfied almost nobody, a League of Nations built to prevent war that could not, and a decade of aggression that ended in 1939. The question this period asks is the one worth carrying into any exam answer — was another war inevitable, or was it the result of choices people made?",
    keyFacts: [
      {
        heading: "The peace settlement, 1919",
        points: [
          "The Big Three had different aims: Clemenceau wanted Germany crippled, Lloyd George wanted a peace that would not breed revenge, Wilson wanted his Fourteen Points and self-determination.",
          "Versailles imposed: Article 231 war guilt, reparations of £6.6 billion, army capped at 100,000 with no air force or submarines, the Rhineland demilitarised, and 13% of German territory lost.",
          "Germans called it a Diktat — a dictated peace — because they were not allowed to negotiate.",
          "The other treaties broke up Austria-Hungary and the Ottoman Empire, creating new states across central Europe.",
          "The settlement was harsh enough to enrage Germany but not harsh enough to prevent her recovering — often argued as its central flaw.",
        ],
      },
      {
        heading: "The League of Nations",
        points: [
          "Founded in 1920 to settle disputes peacefully, disarm, and improve living and working conditions.",
          "The USA never joined, despite it being Wilson's idea, because the Senate refused to ratify. Germany joined in 1926, the USSR in 1934.",
          "It had no army, and its main weapons were moral condemnation and economic sanctions.",
          "Successes were real but small: Aaland Islands (1921), Upper Silesia (1921), Greece and Bulgaria (1925), and humanitarian work on refugees and disease.",
          "Failures were large: Manchuria (1931) and Abyssinia (1935) showed it could not stop a determined great power.",
        ],
      },
      {
        heading: "The League's collapse",
        points: [
          "Manchuria 1931: Japan invaded, the Lytton Report took a year, and when it condemned Japan, Japan simply left the League.",
          "Abyssinia 1935: Italy invaded, sanctions excluded oil and the Suez Canal stayed open to Italian ships.",
          "The Hoare–Laval Pact, a secret Anglo-French plan to give Mussolini much of Abyssinia, leaked and destroyed the League's credibility outright.",
          "The Depression made states pursue self-interest and made sanctions unattractive to countries needing trade.",
          "By 1936 the lesson had been learned in Berlin, Rome and Tokyo: aggression carried no real cost.",
        ],
      },
      {
        heading: "The road to war, 1933–39",
        points: [
          "1933 Germany left the League; 1935 rearmament announced openly; 1936 the Rhineland remilitarised — a bluff that would have collapsed if France had acted.",
          "1936–39 the Spanish Civil War let Germany and Italy test weapons and tactics; the bombing of Guernica showed what awaited cities.",
          "March 1938 Anschluss with Austria; September 1938 Munich and the Sudetenland; March 1939 the rest of Czechoslovakia.",
          "August 1939 the Nazi–Soviet Pact removed the two-front problem and sealed Poland's fate.",
          "1 September 1939 Germany invaded Poland; Britain and France declared war on 3 September.",
        ],
      },
    ],
    flashcards: [
      { term: "Treaty of Versailles", definition: "The 1919 settlement with Germany, imposing war guilt, reparations, disarmament and territorial loss." },
      { term: "Article 231", definition: "The 'war guilt' clause requiring Germany to accept responsibility for causing the war." },
      { term: "Diktat", definition: "The German term for Versailles — a dictated peace, imposed without negotiation." },
      { term: "The Big Three", definition: "Clemenceau of France, Lloyd George of Britain and Wilson of the USA, whose differing aims shaped the settlement." },
      { term: "Fourteen Points", definition: "Wilson's programme for peace, including self-determination and a League of Nations." },
      { term: "League of Nations", definition: "The organisation founded in 1920 to prevent war, weakened from the outset by American absence and having no army." },
      { term: "Sanctions", definition: "Economic penalties — the League's main weapon, and ineffective when key goods were excluded." },
      { term: "Manchuria crisis", definition: "Japan's 1931 invasion, which the League condemned only after a year; Japan then left." },
      { term: "Abyssinia crisis", definition: "Italy's 1935 invasion, after which weak sanctions and the Hoare–Laval Pact destroyed the League's credibility." },
      { term: "Hoare–Laval Pact", definition: "The secret Anglo-French plan to hand Mussolini much of Abyssinia, which leaked and caused outrage." },
      { term: "Rhineland", definition: "The demilitarised German territory remilitarised in 1936 in a gamble France chose not to challenge." },
      { term: "Anschluss", definition: "The 1938 union of Germany and Austria, forbidden by Versailles." },
      { term: "Munich Agreement", definition: "The 1938 deal giving Germany the Sudetenland in exchange for a promise of no further demands." },
      { term: "Nazi–Soviet Pact", definition: "The August 1939 agreement between Hitler and Stalin that secretly divided Poland." },
    ],
    examTips: [
      {
        tip: "Give each of the Big Three their own aim",
        detail:
          "Clemenceau wanted security through weakness, Lloyd George feared a peace that bred revenge, Wilson wanted principles. The treaty was a compromise none of them fully wanted.",
      },
      {
        tip: "Explain the League's weaknesses structurally",
        detail:
          "No army, no USA, decisions requiring unanimity, and sanctions that hurt the sanctioning country too. Structure explains the failures better than blaming individuals.",
      },
      {
        tip: "Use Manchuria and Abyssinia as a pair",
        detail:
          "Manchuria showed the League was slow; Abyssinia showed its leading members would break their own rules. Together they explain 1936 onwards.",
      },
      {
        tip: "The Rhineland was a bluff",
        detail:
          "German forces had orders to withdraw if the French resisted. Saying so turns 1936 from an event into a turning point that need not have happened.",
      },
      {
        tip: "Give the League its successes too",
        detail:
          "Aaland Islands, Upper Silesia, refugee and health work. A balanced answer explains why it worked on small disputes and failed on great powers.",
      },
      {
        tip: "Don't treat 1939 as inevitable",
        detail:
          "At several points — the Rhineland especially — different choices were available. Explaining why they were not taken is the analysis.",
      },
    ],

    workedExamples: [
      {
        question: "Explain why Germans resented the Treaty of Versailles.",
        steps: [
          "Article 231 required Germany to accept guilt for causing the war, which most Germans simply did not believe.",
          "Reparations of £6.6 billion appeared to condemn generations to paying for it.",
          "Military limits — 100,000 men, no air force, no submarines — felt like national humiliation for a proud power.",
          "Territory: 13% of German land and all colonies gone, with Germans placed under foreign rule in the new states.",
          "Self-determination was applied to everyone except Germans, most obviously in banning the Anschluss.",
          "Process: they were not allowed to negotiate, hence Diktat. Combined with the stab in the back myth, the grievance transferred to the new republic that had signed it.",
        ],
        answer:
          "War guilt they rejected, reparations they thought ruinous, military limits they found humiliating, territory lost, and self-determination applied to everyone but them — all imposed without negotiation. Crucially the anger attached to the Weimar Republic that signed it, which is why Versailles mattered so much in German domestic politics.",
      },
      {
        question:
          "Why did the League of Nations fail in the 1930s?",
        steps: [
          "Structural: no army, so it could not enforce anything without members acting.",
          "Membership: the USA never joined, and Germany and Japan left. The most powerful states were outside it.",
          "Decision-making: unanimity meant any member could block action, and the process took months.",
          "Sanctions: they hurt the countries applying them, so during the Depression nobody wanted to.",
          "Manchuria and Abyssinia showed both problems at once — slowness, then Britain and France breaking their own principles in the Hoare–Laval Pact.",
          "Consequence: after 1936 no aggressor had reason to believe the League would stop them.",
        ],
        answer:
          "Because it had no force of its own, lacked the most powerful states, needed unanimity to act, and depended on sanctions its members would not apply during a depression. Manchuria and Abyssinia demonstrated all of it, and the Hoare–Laval leak proved its leading members did not believe in it either.",
      },
      {
        question:
          "'The remilitarisation of the Rhineland in 1936 was the last chance to stop Hitler.' How far do you agree?",
        steps: [
          "For: German forces were weak and under orders to withdraw if France resisted. France alone could have reversed it.",
          "For: success convinced Hitler that the Allies would not act, and convinced German generals he was right.",
          "Against: France was politically divided and would not act without Britain, which saw Germans marching into German territory.",
          "Against: later chances existed, at Munich in 1938 and over Czechoslovakia in 1939.",
          "Judgement: the last cheap chance rather than the last chance — after 1936, stopping Hitler meant war rather than a diplomatic reversal.",
        ],
        answer:
          "It was the last chance to stop him cheaply. German troops had orders to withdraw if challenged, and success confirmed his judgement of the Allies. Later opportunities existed, but each would have required the war that 1936 might have prevented.",
      },
      {
        question:
          "Why did Britain and France not act more firmly in the 1930s?",
        steps: [
          "Memory of 1914–18 made public opinion overwhelmingly hostile to another war.",
          "The Depression left both countries with severe financial constraints and rearmament competing against welfare.",
          "Military unreadiness: British rearmament only accelerated from 1936.",
          "A widespread belief that Versailles had been unjust made German demands look partly reasonable.",
          "The USA was isolationist and the USSR was distrusted, so neither offered a reliable partner.",
          "France would not act without Britain, and Britain repeatedly preferred negotiation.",
        ],
        answer:
          "War memory, empty treasuries after the Depression, military unreadiness, a genuine belief that Versailles had been unfair, and no reliable allies. France would not move without Britain, and Britain preferred to negotiate — so nobody acted.",
      },
    ],

    practice: [
      { question: "In which year was the Treaty of Versailles signed?",
        accept: ["1919"],
        answer: "1919, at the Paris Peace Conference." },
      { question: "Which article of the treaty was the 'war guilt' clause?",
        accept: ["231", "article 231"],
        answer: "Article 231, which most Germans rejected outright." },
      { question: "What did Germans call the treaty, meaning a dictated peace?",
        accept: ["diktat", "a diktat"],
        answer: "A Diktat — they were not permitted to negotiate its terms." },
      { question: "How large was the German army allowed to be under Versailles?",
        accept: ["100000", "100,000"],
        answer: "100,000 men, with no air force, no submarines and no tanks." },
      { question: "Who was the French leader among the Big Three?",
        accept: ["clemenceau", "georges clemenceau"],
        answer: "Clemenceau, who wanted Germany permanently weakened." },
      { question: "Whose Fourteen Points shaped the idea of the League?",
        accept: ["wilson", "woodrow wilson", "president wilson"],
        answer: "Woodrow Wilson — though the USA then never joined the League he proposed." },
      { question: "In which year was the League of Nations founded?",
        accept: ["1920"],
        answer: "1920, without the United States." },
      { question: "Which major power never joined the League?",
        accept: ["usa", "united states", "america", "the usa"],
        answer: "The USA. The Senate refused to ratify the treaty, despite the League being Wilson's idea." },
      { question: "Which country invaded Manchuria in 1931?",
        accept: ["japan"],
        answer: "Japan. When the League finally condemned it, Japan left the League." },
      { question: "Which country invaded Abyssinia in 1935?",
        accept: ["italy"],
        answer: "Italy, under Mussolini. Sanctions excluded oil and the Suez Canal stayed open." },
      { question: "Which secret pact would have given Mussolini much of Abyssinia?",
        accept: ["hoare laval", "hoare-laval", "hoare laval pact"],
        answer: "The Hoare–Laval Pact. Its leak destroyed the League's credibility." },
      { question: "In which year was the Rhineland remilitarised?",
        accept: ["1936"],
        answer: "1936. German troops had orders to withdraw if France resisted — and France did not." },
      { question: "In which year was the Anschluss with Austria?",
        accept: ["1938"],
        answer: "1938, in March. Versailles had specifically forbidden it." },
      { question: "Which region did Germany gain at Munich in 1938?",
        accept: ["sudetenland", "the sudetenland"],
        answer: "The Sudetenland, the German-speaking border area of Czechoslovakia." },
      { question: "Which Spanish town's bombing in 1937 showed what air power could do to civilians?",
        accept: ["guernica"],
        answer: "Guernica, bombed by German aircraft during the Spanish Civil War." },
      { question: "On what date did Germany invade Poland? Give it as day/month/year.",
        accept: ["01/09/1939", "1 september 1939", "1/9/1939"],
        answer: "1 September 1939. Britain and France declared war two days later." },
      { question: "Explain why the League of Nations could settle small disputes but not large ones.",
        answer: "Because its only real powers were persuasion and economic pressure, and both work on countries that care about international opinion or need trade. Small states in disputes like the Aaland Islands or Upper Silesia had every reason to accept arbitration rather than fight a war they could not afford. A great power was a different matter: Japan and Italy could simply absorb condemnation, and sanctions against them would have damaged the countries applying them at the worst possible moment economically. With no army, no United States, and a rule requiring unanimity, the League could only ever do what its most powerful members already wanted to do. (Mark this one yourself.)" },
      { question: "'The Treaty of Versailles made the Second World War inevitable.' How far do you agree?",
        answer: "It contributed powerfully but did not make war inevitable. Versailles created lasting grievance and gave Hitler ready-made arguments, and the German public's sense of injustice was real. But Nazi support fell to 2.6% in 1928 while every clause of the treaty was still in force, which shows grievance alone did not produce catastrophe. What turned it into one was the Depression, the collapse of the League's authority over Manchuria and Abyssinia, and a series of Allied decisions not to act — most cheaply over the Rhineland in 1936. Versailles supplied the fuel; the choices of the 1930s supplied the spark, and choices can be made differently. (Mark this one yourself.)" },
      {
        question: "What was the main aim of the League of Nations?",
        choices: [
          "To keep peace through collective security",
          "To punish Germany further",
          "To create a European army",
          "To manage colonial empires",
        ],
        accept: [
          "To keep peace through collective security",
        ],
        answer: "It lacked an army and the USA never joined, which limited it whenever a major power ignored its rulings.",
      },
      {
        question: "What is APPEASEMENT?",
        choices: [
          "Giving in to demands to avoid war",
          "Declaring war immediately",
          "Refusing all negotiation",
          "Forming a military alliance",
        ],
        accept: [
          "Giving in to demands to avoid war",
        ],
        answer: "Defenders point to Britain's unreadiness for war and public opinion; critics say it encouraged further demands.",
      },
      {
        question: "What did the Munich Agreement of 1938 allow Germany to do?",
        choices: [
          "Take the Sudetenland from Czechoslovakia",
          "Invade Poland",
          "Rejoin the League of Nations",
          "Reclaim its colonies",
        ],
        accept: [
          "Take the Sudetenland from Czechoslovakia",
        ],
        answer: "Chamberlain called it 'peace for our time'. Germany occupied the rest of Czechoslovakia within six months.",
      },
      {
        question: "Which event is generally taken as the start of the Second World War in Europe?",
        choices: [
          "The German invasion of Poland in 1939",
          "The remilitarisation of the Rhineland",
          "The Anschluss with Austria",
          "The Munich Agreement",
        ],
        accept: [
          "The German invasion of Poland in 1939",
        ],
        answer: "Britain and France had guaranteed Polish independence, so this time the response was a declaration of war.",
      },
      {
        question: "Why did the League fail to stop aggression in Manchuria and Abyssinia?",
        choices: [
          "It had no army and members would not risk their own interests",
          "Its rules forbade any action",
          "Nobody reported the invasions",
          "Both invasions were legal",
        ],
        accept: [
          "It had no army and members would not risk their own interests",
        ],
        answer: "Economic sanctions were weak and slow, and Britain and France put their own strategic concerns first.",
      },
    ],

    misconceptions: [
      { wrong: "\"The League of Nations achieved nothing.\"",
        right: "It settled the Aaland Islands and Upper Silesia and did substantial refugee and public health work. It failed against great powers, which is a different claim." },
      { wrong: "\"The USA led the League of Nations.\"",
        right: "The League was Wilson's idea and the USA never joined — the Senate refused to ratify. Its absence was one of the League's central weaknesses." },
      { wrong: "\"Versailles was the harshest treaty imaginable.\"",
        right: "It was harsh, but the treaty Germany imposed on Russia at Brest-Litovsk in 1918 was harsher. It was harsh enough to enrage Germany and not harsh enough to disable her." },
      { wrong: "\"Nothing could have stopped Hitler.\"",
        right: "In 1936 German forces entering the Rhineland had orders to withdraw if France resisted. The choices not taken are part of the explanation." },
      { wrong: "\"Sanctions failed because they are useless.\"",
        right: "They failed over Abyssinia because oil was excluded and the Suez Canal stayed open — deliberate choices by Britain and France, not a flaw in the idea." },
      { wrong: "\"Everyone in Britain wanted to appease Hitler.\"",
        right: "Churchill and others argued against it throughout, and the Hoare–Laval leak caused public outrage. It was contested policy, not consensus." },
    ],
  },

  "history/elizabethan-england": {
    summary:
      "Elizabeth I inherited a country divided by religion, threatened from abroad and broke, and she was a woman in a role everyone assumed only a man could hold. Over 45 years she survived plots, war with Spain and a papal order to depose her. This depth study covers her settlement, her enemies, the Armada, and the society of theatres, poverty and exploration underneath it all.",
    keyFacts: [
      {
        heading: "The problems of 1558",
        points: [
          "Religion: England had swung Protestant under Edward VI, then violently Catholic under Mary I. Nobody knew which way Elizabeth would go.",
          "Gender: many believed a woman could not rule. John Knox had published a pamphlet against female rulers the same year she took the throne.",
          "Money: the Crown was around £300,000 in debt after wars and the debasement of the coinage.",
          "Foreign threats: France and Scotland were allied against England, and Spain was the strongest power in Europe.",
          "Legitimacy: Catholics regarded her parents' marriage as invalid, which made her illegitimate and Mary, Queen of Scots the rightful queen.",
        ],
      },
      {
        heading: "The religious settlement, 1559",
        points: [
          "The Act of Supremacy made Elizabeth Supreme GOVERNOR of the Church — a deliberate softening, since 'Head' was what Catholics objected to most.",
          "The Act of Uniformity required attendance at church and set a single Book of Common Prayer, with wording vague enough that Catholics and Protestants could both accept it.",
          "Fines for not attending — recusancy — were initially small, at a shilling a week.",
          "The aim was outward conformity rather than belief. Elizabeth reportedly did not wish to 'make windows into men's souls'.",
          "It satisfied most people and pleased neither extreme: Puritans wanted more reform, committed Catholics wanted Rome.",
        ],
      },
      {
        heading: "Plots, Mary and Spain",
        points: [
          "1569 the Northern Rebellion; 1571 the Ridolfi plot; 1583 Throckmorton; 1586 Babington. Most aimed to put Mary, Queen of Scots on the throne.",
          "1570 the Pope excommunicated Elizabeth and released Catholics from allegiance, which made every English Catholic a potential traitor in the government's eyes.",
          "Walsingham's spy network intercepted the Babington letters; Mary was executed in 1587 after nineteen years of captivity.",
          "Relations with Spain worsened over English support for the Dutch revolt, Drake's raids on Spanish treasure, and religion.",
          "The Armada sailed in 1588: around 130 ships, defeated by English gunnery, fireships at Calais and then storms. Around 20,000 Spaniards died, most from disease and shipwreck rather than battle.",
        ],
      },
      {
        heading: "Society, poverty and exploration",
        points: [
          "The 'Golden Age' saw theatres open — the Globe in 1599 — with Shakespeare and Marlowe writing for audiences of every class.",
          "The wealthy built great houses and displayed status through fashion, which sumptuary laws tried to regulate.",
          "Poverty rose sharply: population growth, inflation, enclosure, bad harvests and the closure of the monasteries which had provided relief.",
          "Attitudes distinguished the 'deserving' from the 'idle' poor, with harsh punishments for vagrancy.",
          "The 1601 Poor Law made each parish responsible for its poor, funded by a local rate — the framework for English poor relief for over 200 years.",
          "Exploration: Drake circumnavigated the globe 1577–80; Raleigh's Virginia colony failed; and English involvement in the slave trade began under Hawkins.",
        ],
      },
    ],
    flashcards: [
      { term: "Religious Settlement 1559", definition: "Elizabeth's compromise establishing a Protestant church with enough ambiguity for most Catholics to conform outwardly." },
      { term: "Supreme Governor", definition: "Elizabeth's title as head of the Church — chosen over 'Supreme Head' to be less offensive to Catholics." },
      { term: "Act of Uniformity", definition: "The 1559 law requiring church attendance and a single Book of Common Prayer." },
      { term: "Recusant", definition: "Someone who refused to attend Church of England services, usually a Catholic, and was fined for it." },
      { term: "Puritans", definition: "Protestants who thought the settlement had not gone far enough and wanted the church purified of Catholic practice." },
      { term: "Excommunication 1570", definition: "The papal bull declaring Elizabeth deposed and releasing Catholics from obedience, which made loyalty and faith incompatible." },
      { term: "Mary, Queen of Scots", definition: "Elizabeth's Catholic cousin and heir, imprisoned for nineteen years and executed in 1587 after the Babington plot." },
      { term: "Babington plot", definition: "The 1586 conspiracy uncovered by Walsingham, whose intercepted letters implicated Mary directly." },
      { term: "Walsingham", definition: "Elizabeth's spymaster, whose network of informants and code-breakers uncovered the major plots." },
      { term: "Spanish Armada", definition: "The 1588 invasion fleet of around 130 ships, defeated by English tactics, fireships and weather." },
      { term: "Fireships", definition: "Vessels set alight and sent among the anchored Armada at Calais, breaking its defensive formation." },
      { term: "Vagrancy", definition: "Being homeless and without work — treated as a crime in Elizabethan England and punished harshly." },
      { term: "Poor Law 1601", definition: "The law making each parish responsible for its poor through a local rate, lasting over 200 years." },
      { term: "Sumptuary laws", definition: "Laws restricting what clothing people of each social rank could wear, to keep status visible." },
    ],
    examTips: [
      {
        tip: "Explain the settlement as deliberate ambiguity",
        detail:
          "'Supreme Governor' rather than 'Head', and prayer book wording both sides could live with. It was designed to secure outward conformity, not to convert anyone.",
      },
      {
        tip: "Use 1570 as the turning point for Catholics",
        detail:
          "Before excommunication, an English Catholic could be loyal and Catholic. Afterwards the Pope had made those incompatible — which is why persecution hardened.",
      },
      {
        tip: "Give the Armada several causes of defeat",
        detail:
          "English gunnery and faster ships, the fireships at Calais, the plan's dependence on meeting Parma's army, and the weather. The 'Protestant wind' alone is not an answer.",
      },
      {
        tip: "Test the 'Golden Age'",
        detail:
          "Theatres and great houses coexisted with rising poverty, harvest failure and harsh vagrancy laws. Whose golden age is a question worth asking in the answer.",
      },
      {
        tip: "Explain why Elizabeth hesitated over Mary",
        detail:
          "Executing an anointed queen set a precedent that threatened all monarchs, including herself. Nineteen years of delay was calculation, not weakness.",
      },
      {
        tip: "Link poverty to specific causes",
        detail:
          "Population growth, inflation, enclosure, bad harvests in the 1590s, and the loss of monastic relief. Four named causes beat a general statement every time.",
      },
    ],

    workedExamples: [
      {
        question: "Explain why Elizabeth's religious settlement was designed as a compromise.",
        steps: [
          "The problem: England had lurched between Protestant and Catholic in a decade, with executions under Mary I still fresh.",
          "A strongly Protestant settlement risked Catholic rebellion and foreign invasion; a Catholic one risked Protestant revolt and her own position.",
          "So the wording was softened: Supreme Governor rather than Head, which removed the title Catholics most objected to.",
          "The prayer book used phrasing on communion that both sides could read their own way.",
          "Enforcement was light at first — a shilling a week for not attending — because the aim was outward conformity, not belief.",
          "Judgement: it worked for over a decade, and only hardened after the Pope excommunicated her in 1570, which forced Catholics to choose.",
        ],
        answer:
          "Because Elizabeth needed stability more than doctrinal purity, after a decade of violent religious swings. The settlement demanded outward conformity and left belief alone — which held until the excommunication of 1570 made loyalty and Catholicism incompatible.",
      },
      {
        question:
          "Explain why the Spanish Armada was defeated.",
        steps: [
          "English ships were smaller, faster and more manoeuvrable, and their guns could be reloaded more quickly for sustained fire.",
          "Spanish tactics assumed boarding, which English captains simply refused to allow by keeping their distance.",
          "The plan required the Armada to collect Parma's army from the Netherlands, but there was no deep-water port and no way to coordinate the timing.",
          "The fireships at Calais broke the crescent formation, and once scattered it could not reform.",
          "The battle of Gravelines then damaged the fleet badly, and the wind forced it north around Scotland and Ireland where storms wrecked many ships.",
          "Judgement: English tactics created the opportunity; the flawed plan made it fatal; the weather completed it.",
        ],
        answer:
          "English gunnery and manoeuvrability, a plan that depended on an impossible rendezvous with Parma, the fireships at Calais that destroyed the formation, and finally the storms on the route home. The weather finished a fleet that was already beaten.",
      },
      {
        question:
          "'The Elizabethan age was a Golden Age.' How far do you agree?",
        steps: [
          "For: theatre flourished with Shakespeare and Marlowe, great houses were built, exploration expanded English horizons, and the Armada victory produced enormous national confidence.",
          "For: religious violence was far less severe than under Mary I or in France.",
          "Against: poverty rose sharply, with population growth, inflation and enclosure, and the harvests of the 1590s brought real hunger.",
          "Against: vagrancy was punished by whipping and branding, and Catholic priests were executed as traitors.",
          "Against: prosperity was concentrated — the great houses were built by the same landowners whose enclosures displaced the poor.",
          "Judgement: a golden age in culture and national confidence, for those with means, and a hard and worsening one for the poor.",
        ],
        answer:
          "Golden in culture, exploration and national confidence, and for the landowning class. For the growing numbers in poverty, facing enclosure, inflation and the harvests of the 1590s, it was not. The question worth answering is whose golden age it was.",
      },
      {
        question:
          "Why did Elizabeth wait nineteen years before executing Mary, Queen of Scots?",
        steps: [
          "Mary was an anointed queen, and executing one set a precedent that could be used against Elizabeth herself.",
          "It risked war with Catholic France and Spain, both of which had reason to intervene.",
          "Mary was also Elizabeth's cousin and named heir, so the succession was involved.",
          "Alive but imprisoned, Mary was a known and containable danger; dead she became a martyr.",
          "What changed was the Babington plot of 1586, where Walsingham's intercepted letters proved Mary's direct approval of a plan to assassinate Elizabeth.",
          "Even then Elizabeth delayed signing, and afterwards blamed her secretary — which tells you how dangerous she judged the act to be.",
        ],
        answer:
          "Because killing an anointed queen threatened the principle of monarchy itself and risked foreign war, and because a contained Mary was safer than a martyred one. Only the Babington letters, proving her direct involvement in a murder plot, made it unavoidable.",
      },
    ],

    practice: [
      { question: "In which year did Elizabeth I become queen?",
        accept: ["1558"],
        answer: "1558, inheriting religious division, debt and foreign threats." },
      { question: "In which year was the religious settlement?",
        accept: ["1559"],
        answer: "1559, comprising the Acts of Supremacy and Uniformity." },
      { question: "What title did Elizabeth take as head of the Church?",
        accept: ["supreme governor"],
        answer: "Supreme Governor — deliberately softer than 'Supreme Head', which Catholics found intolerable." },
      { question: "What is the term for someone who refused to attend church?",
        accept: ["recusant", "a recusant", "recusants"],
        answer: "A recusant, fined initially a shilling a week." },
      { question: "Which Protestants wanted the church purified further?",
        accept: ["puritans", "the puritans"],
        answer: "The Puritans, who thought the settlement had not gone nearly far enough." },
      { question: "In which year was Elizabeth excommunicated by the Pope?",
        accept: ["1570"],
        answer: "1570. It released Catholics from allegiance and made loyalty and faith incompatible." },
      { question: "Who was Elizabeth's spymaster?",
        accept: ["walsingham", "francis walsingham", "sir francis walsingham"],
        answer: "Sir Francis Walsingham, whose network uncovered the major plots." },
      { question: "Which 1586 plot led to Mary, Queen of Scots' execution?",
        accept: ["babington", "babington plot", "the babington plot"],
        answer: "The Babington plot, in which intercepted letters implicated Mary directly." },
      { question: "In which year was Mary, Queen of Scots executed?",
        accept: ["1587"],
        answer: "1587, after nineteen years of imprisonment in England." },
      { question: "In which year did the Spanish Armada sail?",
        accept: ["1588"],
        answer: "1588. Around 130 ships set out and roughly half never returned." },
      { question: "What tactic was used against the anchored Armada at Calais?",
        accept: ["fireships", "fire ships", "fireship"],
        answer: "Fireships — vessels set alight and sent among the fleet, breaking its formation." },
      { question: "In which year was the Poor Law that made parishes responsible for their poor?",
        accept: ["1601"],
        answer: "1601. It set the framework for English poor relief for over 200 years." },
      { question: "Which theatre opened in 1599?",
        accept: ["globe", "the globe", "globe theatre"],
        answer: "The Globe, where much of Shakespeare's work was performed." },
      { question: "Who circumnavigated the globe between 1577 and 1580?",
        accept: ["drake", "francis drake", "sir francis drake"],
        answer: "Sir Francis Drake, returning with an enormous haul of Spanish treasure." },
      { question: "What were laws restricting what each rank could wear called?",
        accept: ["sumptuary laws", "sumptuary"],
        answer: "Sumptuary laws, intended to keep social status visible at a glance." },
      { question: "Roughly how many ships were in the Armada?",
        accept: ["130", "about 130"],
        answer: "Around 130. Roughly half were lost, mostly to storms rather than to English guns." },
      { question: "Explain why the excommunication of 1570 changed the position of English Catholics.",
        answer: "Because it forced a choice that had previously been avoidable. Before 1570 an English Catholic could attend church outwardly, pay a small fine if they refused, and remain a loyal subject — which is exactly what Elizabeth's settlement was designed to allow. The papal bull declared her deposed and released Catholics from obedience, which meant that remaining loyal to Rome now implied disloyalty to the Queen. The government could no longer treat Catholicism as a private matter, and after the plots of the 1570s and 1580s it did not: fines rose sharply, and harbouring a priest became treason. The Pope, intending to help English Catholics, made their position far more dangerous. (Mark this one yourself.)" },
      { question: "Explain why poverty increased so much in Elizabethan England.",
        answer: "Several pressures arrived together. The population grew by perhaps a third across the reign, so more people competed for the same work and food. Prices rose faster than wages, partly because of the debased coinage inherited from earlier reigns and partly because of that population pressure. Landowners enclosed common land for sheep, which needed far fewer workers than arable farming and removed the grazing poorer families relied on. The dissolution of the monasteries a generation earlier had destroyed the main source of charitable relief, and nothing had replaced it. Then the harvests of the 1590s failed repeatedly. The 1601 Poor Law was the eventual admission that the problem was too big for charity. (Mark this one yourself.)" },
      {
        question: "What was the Religious Settlement of 1559 intended to do?",
        choices: [
          "Create a compromise between Catholic and Protestant practice",
          "Ban all religion",
          "Restore full Catholicism",
          "Make England Puritan",
        ],
        accept: [
          "Create a compromise between Catholic and Protestant practice",
        ],
        answer: "Elizabeth aimed for a middle way that most could accept, though it satisfied neither Catholics nor Puritans fully.",
      },
      {
        question: "Why was the Spanish Armada of 1588 defeated?",
        choices: [
          "English tactics, fireships and bad weather",
          "Spain had far fewer ships",
          "The Spanish never left port",
          "England had superior numbers",
        ],
        accept: [
          "English tactics, fireships and bad weather",
        ],
        answer: "Smaller, faster English ships and the storms that scattered the fleet on its way home both mattered.",
      },
      {
        question: "Why was Mary, Queen of Scots a threat to Elizabeth?",
        choices: [
          "She had a claim to the English throne and was a focus for Catholic plots",
          "She led a foreign army",
          "She controlled English trade",
          "She was Elizabeth's older sister",
        ],
        accept: [
          "She had a claim to the English throne and was a focus for Catholic plots",
        ],
        answer: "The Babington Plot provided the evidence that led to her execution in 1587, which in turn helped provoke the Armada.",
      },
      {
        question: "What was a major cause of poverty in Elizabethan England?",
        choices: [
          "Rising population and enclosure of land",
          "Too many jobs in towns",
          "Falling food prices",
          "The end of foreign trade",
        ],
        accept: [
          "Rising population and enclosure of land",
        ],
        answer: "Inflation, bad harvests and the closure of the monasteries all contributed. The Poor Laws distinguished deserving from idle poor.",
      },
      {
        question: "Why did Elizabeth never marry?",
        choices: [
          "Marriage risked foreign influence or domestic faction",
          "No suitors were ever available",
          "It was illegal for a queen to marry",
          "She was too young",
        ],
        accept: [
          "Marriage risked foreign influence or domestic faction",
        ],
        answer: "Remaining unmarried preserved her independence, but left the succession unresolved for her whole reign.",
      },
    ],

    misconceptions: [
      { wrong: "\"The weather alone defeated the Armada.\"",
        right: "English gunnery, the fireships at Calais and a plan that depended on an impossible rendezvous with Parma had already broken it. The storms finished a beaten fleet." },
      { wrong: "\"Elizabeth persecuted Catholics from the start.\"",
        right: "The 1559 settlement was deliberately mild and aimed at outward conformity. Persecution hardened after the 1570 excommunication and the plots that followed." },
      { wrong: "\"Everyone loved Elizabeth throughout her reign.\"",
        right: "There were rebellions, repeated assassination plots, and real hardship in the 1590s. The image of Gloriana was carefully constructed propaganda." },
      { wrong: "\"The Golden Age was golden for everyone.\"",
        right: "Theatres and great houses existed alongside rising poverty, enclosure and failed harvests. Vagrancy was punished by whipping and branding." },
      { wrong: "\"Elizabeth killed Mary as soon as she could.\"",
        right: "She waited nineteen years, because executing an anointed queen threatened monarchy itself. Only the Babington letters forced her hand." },
      { wrong: "\"England was a Protestant country by 1559.\"",
        right: "Much of the country, especially the north, remained Catholic in belief for decades. The settlement produced outward conformity long before it produced conversion." },
    ],
  },

  "history/medicine-through-time": {
    summary:
      "A thousand years of medicine, from monks treating patients with prayer and bloodletting to gene therapy and the NHS. The thematic study does not want a list of discoveries — it wants you to explain WHY change happened when it did, and why it sometimes did not happen for centuries. That means thinking in factors: individuals, war, government, science and technology, chance, and above all attitudes.",
    keyFacts: [
      {
        heading: "Medieval medicine, c.1250–1500",
        points: [
          "Ideas came from Hippocrates and Galen, over a thousand years old and largely unquestioned: the Four Humours — blood, phlegm, black bile and yellow bile — which had to be kept in balance.",
          "Treatment followed the theory: bloodletting and purging to remove excess humours, and 'opposites' such as cooling food for a fever.",
          "The Church preserved learning but discouraged challenging Galen, whose ideas fitted Christian teaching about a purposeful body.",
          "Supernatural explanations sat alongside: disease as punishment for sin, or caused by the alignment of planets.",
          "Miasma theory blamed bad air, which was wrong but produced some useful public health responses.",
          "The Black Death (1348–50) killed perhaps a third of Europe. Explanations included God's punishment, miasma and planetary alignment; responses included flagellation and killing cats — the actual carriers' predators.",
        ],
      },
      {
        heading: "The Renaissance, c.1500–1700",
        points: [
          "Vesalius (1543) dissected human bodies and showed Galen had made errors — Galen had dissected animals. Vesalius corrected the anatomy but did not improve treatment.",
          "Paré (1500s), an army surgeon, replaced cauterising gunshot wounds with a soothing ointment after running out of oil, and used ligatures to tie arteries. Chance plus observation.",
          "Harvey (1628) proved blood circulates, pumped by the heart — destroying Galen's account of blood being made in the liver and consumed.",
          "The printing press spread these ideas fast and accurately, which mattered as much as the discoveries.",
          "But treatment barely changed: knowing blood circulated did not help anyone until transfusion and blood groups, centuries later.",
          "The Great Plague (1665) produced quarantine and the killing of dogs and cats — better organised than 1348, but based on the same wrong theory.",
        ],
      },
      {
        heading: "The Industrial period, c.1700–1900",
        points: [
          "Jenner (1796) noticed milkmaids who had cowpox did not get smallpox, tested it and developed vaccination. He could not explain WHY it worked, which is why it was resisted.",
          "Vaccination was made compulsory for smallpox in 1853 and enforced from 1871 — a major intervention by a government that mostly believed in laissez-faire.",
          "Anaesthetics: ether (1846) and chloroform (1847). Chloroform's acceptance was helped enormously by Queen Victoria using it in 1853.",
          "Antiseptics: Lister used carbolic acid from 1865, cutting surgical deaths sharply once germ theory explained why it worked.",
          "Pasteur (1861) proved germ theory: microbes cause decay and disease, not the other way round. Koch then identified specific bacteria for specific diseases.",
          "Public health: John Snow removed the Broad Street pump handle in 1854 and showed cholera was water-borne, though he could not say what the agent was.",
          "The 1875 Public Health Act finally forced local councils to provide clean water, sewers and inspectors, after the 1867 Reform Act gave working men the vote.",
        ],
      },
      {
        heading: "Modern medicine, c.1900–present",
        points: [
          "Magic bullets: Salvarsan 606 (1909) for syphilis and Prontosil (1932) — chemicals targeting specific bacteria.",
          "Penicillin: Fleming noticed mould killing bacteria by chance in 1928 but could not mass-produce it. Florey and Chain developed it in 1940, and the US government funded production for D-Day.",
          "The NHS (1948) made healthcare free at the point of use, following the Beveridge Report's attack on the 'five giants' including Disease.",
          "DNA's structure (1953) by Watson, Crick, Franklin and Wilkins opened genetics; the Human Genome Project was completed in 2003.",
          "Technology transformed diagnosis: X-rays, then scans, then keyhole surgery and transplants.",
          "New problems: antibiotic resistance, lifestyle diseases, an ageing population, and the cost of a health service that can now do far more than it can afford.",
        ],
      },
      {
        heading: "Thinking in factors",
        points: [
          "Individuals: Vesalius, Harvey, Jenner, Pasteur, Fleming. But no individual works without the conditions to be heard.",
          "War: Paré's surgery, penicillin's mass production, plastic surgery and blood transfusion all advanced through war.",
          "Government: from doing almost nothing under laissez-faire, to compulsory vaccination, the 1875 Act and finally the NHS.",
          "Science and technology: the microscope, the printing press, chemical industry, X-rays and computing.",
          "Chance: Paré running out of oil, Fleming's contaminated dish, Jenner's milkmaids.",
          "Attitudes: the single biggest brake. Galen went unchallenged for 1,400 years not because nobody could see the errors but because nobody was looking for them.",
        ],
      },
    ],
    flashcards: [
      { term: "Four Humours", definition: "The theory that health depended on balancing blood, phlegm, black bile and yellow bile — dominant for over 1,500 years." },
      { term: "Galen", definition: "The Roman doctor whose ideas dominated European medicine until the Renaissance, partly because they fitted Christian teaching." },
      { term: "Miasma", definition: "The theory that disease was caused by bad air. Wrong, but it prompted some useful cleaning and drainage." },
      { term: "Bloodletting", definition: "Draining blood to rebalance the humours — the standard treatment for centuries, and usually harmful." },
      { term: "Black Death", definition: "The plague of 1348–50 that killed perhaps a third of Europe's population." },
      { term: "Vesalius", definition: "The anatomist whose 1543 dissections proved Galen wrong about human anatomy." },
      { term: "Paré", definition: "The army surgeon who replaced cauterisation with ointment and used ligatures to tie arteries." },
      { term: "Harvey", definition: "The physician who proved in 1628 that blood circulates, pumped by the heart." },
      { term: "Jenner", definition: "The doctor who developed smallpox vaccination in 1796 after observing that milkmaids with cowpox were immune." },
      { term: "Vaccination", definition: "Giving a mild or related infection to produce immunity — Jenner's discovery, though he could not explain why it worked." },
      { term: "Anaesthetic", definition: "A substance preventing pain during surgery. Ether from 1846, chloroform from 1847." },
      { term: "Antiseptic", definition: "A substance killing germs during surgery — Lister's carbolic acid from 1865." },
      { term: "Germ Theory", definition: "Pasteur's 1861 proof that microbes cause disease and decay, rather than being produced by it." },
      { term: "Koch", definition: "The scientist who identified the specific bacteria causing specific diseases, turning germ theory into practical medicine." },
      { term: "John Snow", definition: "The doctor who traced the 1854 cholera outbreak to the Broad Street pump, showing it was water-borne." },
      { term: "Public Health Act 1875", definition: "The law compelling councils to provide clean water, sewers and inspection — the end of pure laissez-faire in health." },
      { term: "Magic bullet", definition: "A chemical that kills a specific microbe without harming the patient, such as Salvarsan 606." },
      { term: "Penicillin", definition: "The first antibiotic, noticed by Fleming in 1928 and developed for mass production by Florey and Chain from 1940." },
      { term: "Beveridge Report", definition: "The 1942 report identifying five giants including Disease, which led to the NHS." },
      { term: "NHS", definition: "The National Health Service, founded in 1948, providing healthcare free at the point of use." },
      { term: "Antibiotic resistance", definition: "Bacteria evolving to survive antibiotics — one of the central medical problems of the present century." },
    ],
    examTips: [
      {
        tip: "Answer with factors, not a list of discoveries",
        detail:
          "Individuals, war, government, science and technology, chance, attitudes. Almost every question on this paper is really asking which factor mattered most, and when.",
      },
      {
        tip: "Separate understanding from treatment",
        detail:
          "Vesalius and Harvey were right and changed nothing for patients for centuries. Explaining that gap is one of the most valuable moves in the whole topic.",
      },
      {
        tip: "Track continuity as hard as change",
        detail:
          "The Four Humours lasted 1,500 years. Bloodletting outlived Harvey by 200. Examiners want the periods when nothing changed explained too.",
      },
      {
        tip: "Compare the two plagues",
        detail:
          "1348 and 1665 had almost identical explanations, but 1665 saw better organisation — quarantine, orders, records. Better response, same wrong theory.",
      },
      {
        tip: "Give chance its due, then qualify it",
        detail:
          "Fleming's contaminated dish was luck; recognising what it meant was training. Chance favours the prepared, and saying so is a strong line.",
      },
      {
        tip: "Explain why Jenner faced resistance",
        detail:
          "He proved vaccination worked but could not explain WHY. Without germ theory it looked like superstition, and the Royal Society rejected his paper.",
      },
      {
        tip: "Connect political change to public health",
        detail:
          "The 1867 Reform Act gave working men the vote; the 1875 Public Health Act followed. Governments act when the people affected can vote.",
      },
      {
        tip: "Use the same-name test on your dates",
        detail:
          "1543 Vesalius, 1628 Harvey, 1796 Jenner, 1861 Pasteur, 1928 Fleming, 1948 NHS. Six dates carry most of the narrative — learn those before anything else.",
      },
    ],

    workedExamples: [
      {
        question: "Explain why the ideas of Galen went unchallenged for so long.",
        steps: [
          "The Church approved of him: Galen described a body designed with purpose, which fitted the idea of a Creator.",
          "Dissection of humans was rare, so his errors were hard to detect even by those who suspected them.",
          "Medieval education taught by learning authorities rather than testing them — knowledge came from texts, not experiments.",
          "There was no printing press before the 1450s, so ideas spread slowly and by hand-copying, which favoured the established text.",
          "There was no better alternative on offer, and the humours explained observable things like fever and swelling reasonably well.",
          "The key point: this is an ATTITUDES answer. The obstacle was not lack of ability but a culture that valued authority over enquiry.",
        ],
        answer:
          "Because attitudes made challenge almost unthinkable: the Church approved his ideas, education taught authority rather than enquiry, human dissection was rare, and no better theory existed. The obstacle was cultural, not intellectual.",
      },
      {
        question:
          "Explain why penicillin was not mass-produced until the 1940s, despite Fleming's discovery in 1928.",
        steps: [
          "Fleming noticed the mould killing bacteria and published, but could not produce it in useful quantities.",
          "He was a bacteriologist, not a chemist, and lacked the funding or the team for industrial-scale work.",
          "In the 1930s there was little interest — the magic bullets seemed sufficient and nobody would pay for the research.",
          "Florey and Chain took it up at Oxford in 1938–40 and proved it worked in humans.",
          "War changed everything: wounded soldiers dying of infection made penicillin a strategic priority.",
          "The US government funded industrial production, and enough existed for D-Day in 1944.",
          "So it is a war-and-government answer as much as an individual one — the science was known for twelve years and needed a reason to be paid for.",
        ],
        answer:
          "Because discovery is not development. Fleming lacked the resources and there was no funding in the 1930s. Florey and Chain solved the science, but it was war — and American government money — that turned it into a drug, twelve years after the mould was first noticed.",
      },
      {
        question:
          "'Individuals were the most important factor in medical progress.' How far do you agree?",
        steps: [
          "For: Vesalius, Harvey, Jenner, Pasteur, Snow and Fleming each changed what was known, and their names organise the whole story.",
          "Against: every one of them depended on conditions. Vesalius needed the printing press and permission to dissect.",
          "Against: Jenner was right and was resisted, because without germ theory nobody could explain his result.",
          "Against: Fleming's discovery sat unused for twelve years until war and government money moved it.",
          "Against: Snow was proved right only when the 1875 Act made action compulsory — knowledge alone changed nothing.",
          "Judgement: individuals provide the breakthroughs, but whether a breakthrough becomes medicine depends on attitudes, technology and money. The best answer says both and explains the relationship.",
        ],
        answer:
          "Individuals supply the breakthroughs, but almost none of them changed practice on their own. Jenner was resisted for lack of a theory, Fleming waited twelve years for war funding, Snow needed an Act of Parliament. Individuals matter most when conditions allow them to be heard.",
      },
      {
        question:
          "Compare the responses to the Black Death (1348) and the Great Plague (1665).",
        steps: [
          "Explanations were almost identical: God's punishment, miasma, and planetary alignment. Germ theory was still two centuries away.",
          "Treatments were similar and equally useless: bleeding, herbs, and prayer.",
          "But organisation improved: in 1665 there were quarantine orders, houses marked and sealed for 40 days, plague pits, and bills of mortality recording deaths.",
          "Local government was stronger and could act, and records let officials track the spread.",
          "Both responses included killing cats and dogs, which removed predators of the rats carrying infected fleas — making things worse.",
          "The lesson: better administration without better understanding produces a more organised failure.",
        ],
        answer:
          "The explanations barely changed in 300 years — sin, bad air and planets — and neither did the treatments. What improved was organisation: quarantine, sealed houses, plague pits and mortality records. Better administration, the same wrong theory, and in both cases killing the cats that ate the rats.",
      },
      {
        question:
          "Explain why the government's attitude to public health changed between 1848 and 1875.",
        steps: [
          "The 1848 Public Health Act was permissive: councils COULD act, and most chose not to, because laissez-faire held that government should not interfere.",
          "Ratepayers objected to the cost, and were the people who voted.",
          "Then evidence accumulated: Snow's Broad Street pump in 1854, Pasteur's germ theory in 1861, and the Great Stink of 1858 which drove Parliament itself out of its chamber.",
          "Bazalgette's London sewers, built after the Great Stink, showed public works could succeed on a huge scale.",
          "The decisive change was political: the 1867 Reform Act gave the vote to many working men, who lived in exactly the conditions being debated.",
          "The 1875 Act was therefore compulsory rather than permissive, and it worked.",
        ],
        answer:
          "Evidence made the case and the vote made it urgent. Snow, Pasteur and the Great Stink undermined laissez-faire, but the decisive change was the 1867 Reform Act enfranchising working men — after which a permissive Act became a compulsory one.",
      },
    ],

    practice: [
      { question: "How many humours were there in the theory that dominated medieval medicine?",
        accept: ["4", "four"],
        answer: "Four: blood, phlegm, black bile and yellow bile. Health meant keeping them balanced." },
      { question: "Which Roman doctor's ideas dominated European medicine until the Renaissance?",
        accept: ["galen"],
        answer: "Galen. His ideas lasted partly because they fitted Christian teaching about a purposeful body." },
      { question: "What was the theory that disease was caused by bad air called?",
        accept: ["miasma", "miasma theory", "the miasma theory"],
        answer: "Miasma theory. Wrong, but it did encourage some useful cleaning and drainage." },
      { question: "In which years did the Black Death strike England? Give it as e.g. 1300-1302.",
        accept: ["1348-1350", "1348-50", "1348 - 1350"],
        answer: "1348 to 1350, killing perhaps a third of Europe's population." },
      { question: "Who published anatomical work in 1543 proving Galen wrong?",
        accept: ["vesalius", "andreas vesalius"],
        answer: "Vesalius. Galen had dissected animals, so his human anatomy contained real errors." },
      { question: "Which army surgeon used ligatures instead of cauterisation?",
        accept: ["pare", "paré", "ambroise pare", "ambroise paré"],
        answer: "Ambroise Paré, who discovered the better method after running out of hot oil." },
      { question: "Who proved in 1628 that blood circulates?",
        accept: ["harvey", "william harvey"],
        answer: "William Harvey, disproving Galen's idea that blood was made in the liver and consumed." },
      { question: "In which year did Harvey publish his work on circulation?",
        accept: ["1628"],
        answer: "1628. It was correct, and changed treatment almost not at all for two centuries." },
      { question: "Who developed smallpox vaccination in 1796?",
        accept: ["jenner", "edward jenner"],
        answer: "Edward Jenner, after noticing that milkmaids who had had cowpox did not catch smallpox." },
      { question: "Which disease did Jenner's vaccination prevent?",
        accept: ["smallpox"],
        answer: "Smallpox, which was declared eradicated worldwide in 1980." },
      { question: "In which year was smallpox vaccination made compulsory in Britain?",
        accept: ["1853"],
        answer: "1853, though it was not effectively enforced until 1871." },
      { question: "Which anaesthetic was first used in 1847 and popularised by Queen Victoria?",
        accept: ["chloroform"],
        answer: "Chloroform. Victoria using it for childbirth in 1853 did more for its acceptance than any argument." },
      { question: "Which anaesthetic came first, in 1846?",
        accept: ["ether"],
        answer: "Ether, followed by chloroform the next year." },
      { question: "Who used carbolic acid as an antiseptic from 1865?",
        accept: ["lister", "joseph lister"],
        answer: "Joseph Lister, whose antiseptic surgery cut death rates sharply once germ theory explained why." },
      { question: "Who proved germ theory in 1861?",
        accept: ["pasteur", "louis pasteur"],
        answer: "Louis Pasteur, showing microbes cause decay and disease rather than being produced by it." },
      { question: "Who identified the specific bacteria causing specific diseases?",
        accept: ["koch", "robert koch"],
        answer: "Robert Koch, turning germ theory into something doctors could act on." },
      { question: "Who removed the Broad Street pump handle in 1854?",
        accept: ["john snow", "snow"],
        answer: "John Snow, demonstrating that cholera was water-borne — though he could not identify the agent." },
      { question: "Which pump did Snow trace the 1854 cholera outbreak to?",
        accept: ["broad street", "broad street pump", "the broad street pump"],
        answer: "The Broad Street pump in Soho." },
      { question: "In which year was the compulsory Public Health Act?",
        accept: ["1875"],
        answer: "1875, replacing the permissive 1848 Act that most councils had ignored." },
      { question: "Which 1858 event drove Parliament from its own chamber and forced action on London's sewers?",
        accept: ["great stink", "the great stink"],
        answer: "The Great Stink. Self-interest achieved what decades of evidence had not." },
      { question: "Who designed London's sewer system?",
        accept: ["bazalgette", "joseph bazalgette"],
        answer: "Joseph Bazalgette, whose sewers are still in use today." },
      { question: "Which Reform Act gave many working men the vote, shortly before the 1875 Act?",
        accept: ["1867", "the 1867 reform act"],
        answer: "The 1867 Reform Act. Governments act when the people affected can vote." },
      { question: "Who noticed penicillin mould killing bacteria in 1928?",
        accept: ["fleming", "alexander fleming"],
        answer: "Alexander Fleming, who published but could not produce it in useful quantities." },
      { question: "Which two scientists developed penicillin for mass production?",
        accept: ["florey and chain", "florey chain", "chain and florey"],
        answer: "Howard Florey and Ernst Chain, at Oxford from 1938." },
      { question: "In which year was the NHS founded?",
        accept: ["1948"],
        answer: "1948, making healthcare free at the point of use." },
      { question: "Which 1942 report identified the 'five giants' including Disease?",
        accept: ["beveridge", "beveridge report", "the beveridge report"],
        answer: "The Beveridge Report, which led directly to the NHS." },
      { question: "In which year was the structure of DNA discovered?",
        accept: ["1953"],
        answer: "1953, by Watson, Crick, Franklin and Wilkins." },
      { question: "In which year was the Human Genome Project completed?",
        accept: ["2003"],
        answer: "2003, mapping the entire human genetic code." },
      { question: "What is the term for a chemical that kills a specific microbe without harming the patient?",
        accept: ["magic bullet", "a magic bullet", "magic bullets"],
        answer: "A magic bullet, such as Salvarsan 606 for syphilis in 1909." },
      { question: "What is the modern problem of bacteria surviving antibiotics called?",
        accept: ["antibiotic resistance", "resistance", "antimicrobial resistance"],
        answer: "Antibiotic resistance — arguably the most serious medical problem of this century." },
      { question: "Explain why understanding the body did not automatically improve treatment.",
        answer: "Because knowing how something works and being able to fix it are different problems. Vesalius corrected Galen's anatomy in 1543 and Harvey proved circulation in 1628, but neither gave doctors anything new to do — bloodletting continued for two centuries after Harvey showed the humours made no sense, because there was nothing better to replace it with. Treatment needs more than knowledge: it needs technology, such as microscopes and anaesthetics; it needs an explanation people will accept, which is why Jenner was resisted; and it usually needs money and organisation, which is why penicillin waited twelve years for a war. Understanding is necessary and nowhere near sufficient. (Mark this one yourself.)" },
      { question: "Explain why war has repeatedly accelerated medical progress.",
        answer: "Because it creates enormous numbers of similar injuries, urgent pressure to solve them, and governments willing to pay. Paré improved gunshot treatment because he was operating on battlefields; the First World War drove blood transfusion, X-rays near the front and the beginnings of plastic surgery; the Second World War is what turned penicillin from a laboratory curiosity into a mass-produced drug, funded by the US government for D-Day. War also suspends the normal caution about trying new methods, and it moves surgeons and researchers around so techniques spread quickly. The uncomfortable point worth making is that this progress is a by-product of enormous suffering, not a justification for it. (Mark this one yourself.)" },
      { question: "'Attitudes were the biggest obstacle to medical progress.' How far do you agree?",
        answer: "There is a strong case. Galen went unchallenged for roughly 1,400 years, not because his errors were undetectable but because education taught authority rather than enquiry and the Church approved his conclusions. Jenner proved vaccination worked in 1796 and was rejected by the Royal Society because he could not explain it. Public health was blocked for decades by the belief that government should not interfere in private business. But attitudes are not the only obstacle: technology genuinely was missing — nobody could see bacteria before microscopes improved — and money was often the real constraint, as penicillin shows. The strongest answer is that attitudes decided whether new evidence was accepted, while technology decided whether it could be produced at all. (Mark this one yourself.)" },
      {
        question: "What was the theory of the four humours?",
        choices: [
          "The belief that illness came from an imbalance of body fluids",
          "The idea that germs cause disease",
          "A surgical technique",
          "A method of vaccination",
        ],
        accept: [
          "The belief that illness came from an imbalance of body fluids",
        ],
        answer: "Blood, phlegm, black bile and yellow bile. It justified bleeding and purging for centuries because it seemed to explain everything.",
      },
      {
        question: "What did Edward Jenner develop in 1796?",
        choices: [
          "The first vaccination, against smallpox",
          "Antiseptic surgery",
          "Penicillin",
          "The germ theory",
        ],
        accept: [
          "The first vaccination, against smallpox",
        ],
        answer: "He proved it worked but could not explain WHY, which is partly why acceptance was slow and opposition strong.",
      },
      {
        question: "Whose Germ Theory transformed understanding of disease?",
        choices: [
          "Louis Pasteur",
          "Galen",
          "Hippocrates",
          "Florence Nightingale",
        ],
        accept: [
          "Louis Pasteur",
        ],
        answer: "Published in 1861, it showed microbes cause decay and disease. Koch then identified specific bacteria for specific illnesses.",
      },
      {
        question: "What did Joseph Lister introduce to surgery?",
        choices: [
          "Antiseptics, using carbolic acid",
          "Anaesthetics",
          "Blood transfusion",
          "X-rays",
        ],
        accept: [
          "Antiseptics, using carbolic acid",
        ],
        answer: "Anaesthetics let surgeons operate for longer, which initially raised death rates from infection until antiseptics followed.",
      },
      {
        question: "Which factor most accelerated medical progress in the 20th century?",
        choices: [
          "Government funding, war and scientific technology together",
          "Religion",
          "The decline of universities",
          "Reduced communication between countries",
        ],
        accept: [
          "Government funding, war and scientific technology together",
        ],
        answer: "War drove blood transfusion, plastic surgery and mass production of penicillin. Factors rarely act alone in this topic.",
      },
    ],

    misconceptions: [
      { wrong: "\"Medieval doctors were simply stupid.\"",
        right: "They reasoned carefully from the best theory available. The Four Humours explained fever, swelling and recovery reasonably well — the problem was a culture that valued authority over testing it." },
      { wrong: "\"Fleming invented penicillin.\"",
        right: "He noticed the effect in 1928 and published. Florey and Chain developed it, and American government funding made mass production possible twelve years later." },
      { wrong: "\"Germ theory immediately changed medicine.\"",
        right: "Pasteur proved it in 1861, but it took Koch's identification of specific bacteria, and years more, before treatments followed. Acceptance was gradual and contested." },
      { wrong: "\"The Great Plague of 1665 was handled much better than the Black Death.\"",
        right: "The organisation was better — quarantine, records, plague pits — but the explanations and treatments were essentially identical. Both killed cats and dogs, which made matters worse." },
      { wrong: "\"Jenner understood how vaccination worked.\"",
        right: "He proved that it worked and had no idea why. Germ theory was 65 years away, which is exactly why his work met such resistance." },
      { wrong: "\"Progress in medicine has been steady.\"",
        right: "It has been wildly uneven — 1,400 years of near-stasis, then enormous change in a century. Explaining the flat periods is as important as explaining the breakthroughs." },
    ],
  },

  "history/crime-and-punishment": {
    summary:
      "What counts as a crime, and what we do to people who commit one, has changed enormously over a thousand years — and both tell you more about the society doing the judging than about the criminals. This thematic study runs from trial by ordeal to modern policing and prisons, and asks the same question throughout: what changed, what stayed the same, and why.",
    keyFacts: [
      {
        heading: "Medieval, c.1000–1500",
        points: [
          "Anglo-Saxon justice was community-based: the hue and cry, tithings of ten men responsible for each other, and trial by local jury who knew the accused.",
          "Trial by ordeal — hot iron, cold water, or consecrated bread — appealed to God to reveal guilt. It was abolished by the Church in 1215.",
          "The Normans added the Forest Laws, criminalising hunting and even gathering wood on royal land — a new crime created purely by a change of ruler.",
          "Punishments were public and often physical: stocks, whipping, mutilation and hanging. Deterrence was the aim, and being seen was the point.",
          "The Church offered sanctuary and benefit of clergy, which let anyone who could read a verse escape the harsher courts — an early and very unequal loophole.",
        ],
      },
      {
        heading: "Early modern, c.1500–1700",
        points: [
          "New crimes reflected new anxieties: vagrancy was criminalised as poverty rose, and heresy and treason became lethal offences as religion changed with each monarch.",
          "Witchcraft prosecutions peaked in the 1640s during the Civil War; Matthew Hopkins, the self-appointed Witchfinder General, was responsible for perhaps 300 accusations.",
          "The witch craze fed on war, religious upheaval, economic hardship and the collapse of normal authority — a good example of crime as a mirror of its society.",
          "The Bloody Code grew from the 1680s: by 1810 there were around 220 offences carrying the death penalty, many for minor theft.",
          "In practice juries often refused to convict when the punishment seemed monstrous, so the Code was less lethal than it looked — a gap between law and enforcement worth noting.",
        ],
      },
      {
        heading: "Industrial, c.1700–1900",
        points: [
          "Transportation to Australia from 1787 removed around 160,000 convicts and offered a punishment between whipping and death.",
          "The Bloody Code was dismantled in the 1820s and 30s, largely by Robert Peel, as reformers argued that certainty of punishment deterred better than severity.",
          "Peel founded the Metropolitan Police in 1829: uniformed, unarmed, and deliberately not soldiers, because a standing armed force was politically unacceptable.",
          "Public executions ended in 1868 — moved behind prison walls partly because the crowds had become the scandal.",
          "Prison reform: John Howard and Elizabeth Fry argued for cleanliness, separation and useful work; the separate system at Pentonville (1842) isolated prisoners in silence, which drove some to madness.",
          "The aim of punishment began to shift from retribution and deterrence towards reform — unevenly, and never completely.",
        ],
      },
      {
        heading: "Modern, c.1900–present",
        points: [
          "New crimes came with new technology and new rules: motoring offences, computer crime, drug laws and terrorism legislation.",
          "Old crimes were decriminalised: homosexuality partly in 1967, suicide in 1961 — showing that removing a crime is as historically significant as creating one.",
          "The death penalty was suspended in 1965 and abolished for murder in 1969, following the cases of Timothy Evans, Derek Bentley and Ruth Ellis.",
          "Policing changed with technology: cars and radios, then forensics, DNA from the 1980s, and CCTV — with a recurring argument about whether it moved police away from the communities they serve.",
          "Prisons shifted towards rehabilitation in principle, alongside community sentences, probation and youth justice — while prison numbers rose sharply.",
          "Conscientious objectors in both wars are a useful case study: treated harshly in 1916, far more tolerantly by 1939 — the same act, a different society.",
        ],
      },
    ],
    flashcards: [
      { term: "Hue and cry", definition: "The Anglo-Saxon duty of everyone in a village to chase a criminal when the alarm was raised." },
      { term: "Tithing", definition: "A group of ten men collectively responsible for each other's behaviour in Anglo-Saxon England." },
      { term: "Trial by ordeal", definition: "A trial appealing to God through pain or danger to reveal guilt, abolished by the Church in 1215." },
      { term: "Forest Laws", definition: "Norman laws criminalising hunting and gathering wood on royal land — new crimes created by new rulers." },
      { term: "Benefit of clergy", definition: "The right of those who could read a set verse to be tried in the more lenient Church courts." },
      { term: "Sanctuary", definition: "Protection from arrest given by a church, allowing the accused to leave the country instead of facing trial." },
      { term: "Vagrancy", definition: "Being homeless and unemployed — made a crime in the sixteenth century as poverty rose." },
      { term: "Bloody Code", definition: "The system under which around 220 offences carried the death penalty by 1810, many of them minor thefts." },
      { term: "Matthew Hopkins", definition: "The self-appointed Witchfinder General responsible for perhaps 300 witchcraft accusations in the 1640s." },
      { term: "Transportation", definition: "Sending convicts to Australia from 1787 — around 160,000 in total — as an alternative to execution." },
      { term: "Robert Peel", definition: "The Home Secretary who dismantled the Bloody Code and founded the Metropolitan Police in 1829." },
      { term: "Metropolitan Police", definition: "Britain's first professional police force, founded in 1829: uniformed, unarmed and deliberately unlike soldiers." },
      { term: "Separate system", definition: "The prison regime isolating inmates in silence to encourage reflection, used at Pentonville from 1842." },
      { term: "Elizabeth Fry", definition: "The reformer who campaigned for humane treatment of women prisoners, especially at Newgate." },
      { term: "Derek Bentley", definition: "The young man hanged in 1953 in a case that helped turn opinion against the death penalty." },
      { term: "Rehabilitation", definition: "Punishment aimed at changing the offender so they do not reoffend, rather than only punishing them." },
    ],
    examTips: [
      {
        tip: "Ask what crimes reveal about the society",
        detail:
          "Forest Laws, vagrancy, witchcraft, homosexuality. Each was created or removed because society changed, not because behaviour did. That insight is the whole point of the paper.",
      },
      {
        tip: "Track the aims of punishment",
        detail:
          "Retribution, deterrence, and later reform and rehabilitation. Saying which aim dominates in a period is a fast way into any question.",
      },
      {
        tip: "Note the gap between law and practice",
        detail:
          "The Bloody Code looked ferocious, but juries frequently refused to convict and judges reduced sentences. What the law says and what happens are different questions.",
      },
      {
        tip: "Explain why Peel's police were unarmed",
        detail:
          "Britain feared a standing armed force being used against political protest, so the police were deliberately made to look like citizens in uniform, not soldiers.",
      },
      {
        tip: "Use decriminalisation as evidence",
        detail:
          "Suicide in 1961 and homosexuality in 1967 stopped being crimes without anyone's behaviour changing. That makes the argument about society better than any example of a new crime.",
      },
      {
        tip: "Use conscientious objectors as a comparison",
        detail:
          "Harshly treated in 1916, far more tolerated by 1939. Same act, different society — an ideal short case study for change-over-time questions.",
      },
    ],

    workedExamples: [
      {
        question: "Explain why the Bloody Code was abolished in the 1820s and 30s.",
        steps: [
          "It was not working: around 220 capital offences existed by 1810, and crime had not fallen.",
          "Juries increasingly refused to convict when the punishment was death for a small theft, so many offenders escaped punishment entirely.",
          "Reformers, influenced by Enlightenment thinking, argued that certainty mattered more than severity — a punishment that was actually applied deterred better than one that was not.",
          "Alternatives now existed: transportation and, increasingly, prisons.",
          "The founding of the Metropolitan Police in 1829 raised the chance of being caught, which is what deterrence actually requires.",
          "Peel drove the reform through, cutting the capital offences dramatically.",
          "Judgement: it fell because it had failed on its own terms, not only because attitudes softened.",
        ],
        answer:
          "Because it had failed at its own purpose. Juries would not convict, so severity produced impunity rather than deterrence. Reformers argued for certainty instead, alternatives existed in transportation and prison, and Peel's new police made catching offenders far more likely.",
      },
      {
        question:
          "Why did witchcraft prosecutions peak in the 1640s?",
        steps: [
          "Civil war had broken down normal authority: courts, church and local government were all disrupted.",
          "Religious upheaval encouraged intense fear of the devil and of hidden enemies.",
          "Economic hardship and poor harvests created tension between neighbours, and accusations often followed a refusal of charity.",
          "Matthew Hopkins, self-appointed Witchfinder General, was paid per case — a direct financial incentive to find witches.",
          "The accused were overwhelmingly poor, old and female, and had almost no means of defending themselves.",
          "The point to draw: this is crime as a mirror. The behaviour did not change; the society's fears did.",
        ],
        answer:
          "Because war destroyed normal authority, religious fear was intense, hardship set neighbours against one another, and Hopkins was paid per conviction. Nobody started doing anything new — society started seeing witchcraft where it had previously seen misfortune.",
      },
      {
        question:
          "Explain why the death penalty was abolished in Britain.",
        steps: [
          "Specific cases eroded confidence: Timothy Evans hanged in 1950 for murders later attributed to Christie; Derek Bentley hanged in 1953 despite not firing the shot; Ruth Ellis in 1955, the last woman executed.",
          "The Evans case in particular proved an innocent person had been executed, and no appeal can undo that.",
          "Attitudes shifted towards rehabilitation and away from retribution.",
          "Evidence questioned whether it deterred at all, since murder rates did not track its use.",
          "Politically it was abolished against public opinion — polls still favoured it — which makes it a good example of Parliament leading rather than following.",
          "Suspended in 1965, abolished for murder in 1969.",
        ],
        answer:
          "Because specific miscarriages — Evans, Bentley, Ellis — showed the system could kill the wrong person, alongside doubts about deterrence and a shift towards rehabilitation. Notably it was abolished while most of the public still supported it.",
      },
      {
        question:
          "Compare the treatment of conscientious objectors in 1916 and 1939.",
        steps: [
          "1916: conscription was new, tribunals were often hostile, and objectors were widely called cowards.",
          "Around 6,000 were imprisoned; some were sent to France where they could technically be shot for refusing orders.",
          "1939: the system was better designed, tribunals were more sympathetic, and a wider range of alternative service existed.",
          "The change came partly from the memory of the last war, and partly from the fact that the objectors of 1916 had been prosecuted and publicly discussed.",
          "The same act was treated very differently in twenty-three years.",
          "The general lesson: whether something is treated as a crime depends on what a society will tolerate at that moment.",
        ],
        answer:
          "Objectors in 1916 faced hostile tribunals, imprisonment and public contempt; by 1939 tribunals were fairer and alternative service was normal. Identical conduct, very different response — which is the clearest possible evidence that crime is defined by society rather than by the act.",
      },
    ],

    practice: [
      { question: "What was the Anglo-Saxon duty to chase a criminal when the alarm was raised?",
        accept: ["hue and cry", "the hue and cry"],
        answer: "The hue and cry — everyone in the village was expected to join the pursuit." },
      { question: "How many men were in a tithing?",
        accept: ["10", "ten"],
        answer: "Ten, collectively responsible for one another's behaviour." },
      { question: "In which year did the Church abolish trial by ordeal?",
        accept: ["1215"],
        answer: "1215. Without clergy to bless the ordeal it could no longer claim to reveal God's judgement." },
      { question: "Which Norman laws criminalised hunting on royal land?",
        accept: ["forest laws", "the forest laws"],
        answer: "The Forest Laws — new crimes created purely by a change of ruler." },
      { question: "What allowed those who could read a verse to be tried in Church courts?",
        accept: ["benefit of clergy"],
        answer: "Benefit of clergy — an early and very unequal loophole, since literacy was rare." },
      { question: "What was the system with around 220 capital offences called?",
        accept: ["bloody code", "the bloody code"],
        answer: "The Bloody Code, at its peak around 1810." },
      { question: "Who was the self-appointed Witchfinder General of the 1640s?",
        accept: ["matthew hopkins", "hopkins"],
        answer: "Matthew Hopkins, responsible for perhaps 300 accusations and paid per case." },
      { question: "In which year did transportation to Australia begin?",
        accept: ["1787"],
        answer: "1787. Around 160,000 convicts were transported in total." },
      { question: "Who founded the Metropolitan Police?",
        accept: ["peel", "robert peel", "sir robert peel"],
        answer: "Sir Robert Peel, who also dismantled the Bloody Code." },
      { question: "In which year was the Metropolitan Police founded?",
        accept: ["1829"],
        answer: "1829 — uniformed, unarmed, and deliberately not soldiers." },
      { question: "In which year did public executions end in Britain?",
        accept: ["1868"],
        answer: "1868. They moved behind prison walls, partly because the crowds had become the scandal." },
      { question: "Which prison opened in 1842 using the separate system?",
        accept: ["pentonville"],
        answer: "Pentonville. Isolation and silence were meant to encourage reflection; some prisoners went mad." },
      { question: "Which reformer campaigned for women prisoners at Newgate?",
        accept: ["elizabeth fry", "fry"],
        answer: "Elizabeth Fry, who argued for humane treatment and useful work." },
      { question: "In which year was the death penalty abolished for murder in Britain?",
        accept: ["1969"],
        answer: "1969, after being suspended in 1965." },
      { question: "In which year was suicide decriminalised?",
        accept: ["1961"],
        answer: "1961 — a crime removed without anyone's behaviour changing." },
      { question: "Which young man was hanged in 1953 in a case that shifted opinion on capital punishment?",
        accept: ["derek bentley", "bentley"],
        answer: "Derek Bentley, who was hanged although he had not fired the shot." },
      { question: "Explain why what counts as a crime changes over time.",
        answer: "Because crime is defined by law, and law is written by a society reflecting its own priorities and fears. The Normans invented forest crimes to protect royal hunting; the Tudors criminalised vagrancy because rising poverty frightened them; the 1640s produced witchcraft prosecutions when war and hardship made people look for hidden enemies. The reverse is even more revealing: suicide stopped being a crime in 1961 and homosexuality was partly decriminalised in 1967, without anybody's behaviour altering at all. What changed in each case was what the society considered dangerous, sinful or simply nobody else's business. Studying crime is therefore a way of studying the values of the people making the rules. (Mark this one yourself.)" },
      { question: "Explain why Peel's police were founded as an unarmed, uniformed civilian force.",
        answer: "Because Britain was deeply suspicious of anything resembling a standing army being used against its own people, particularly after Peterloo in 1819 when cavalry had charged a peaceful crowd. A force that looked like soldiers would have been resisted as a tool of political repression. So the Metropolitan Police were designed to look like citizens in uniform: top hats rather than helmets at first, blue rather than army red, armed with nothing but a truncheon, and instructed to prevent crime by presence rather than to suppress disorder by force. The design was a political calculation as much as a practical one, and it set the pattern for British policing ever since. (Mark this one yourself.)" },
      {
        question: "What was the Bloody Code?",
        choices: [
          "A period when many crimes carried the death penalty",
          "A medieval trial by ordeal",
          "A Victorian police force",
          "A law protecting the poor",
        ],
        accept: [
          "A period when many crimes carried the death penalty",
        ],
        answer: "Over 200 offences were capital by 1800. Juries often refused to convict, which helped bring about reform.",
      },
      {
        question: "What was transportation as a punishment?",
        choices: [
          "Sending convicts overseas to Australia or America",
          "Moving prisoners between jails",
          "A fine for highway robbery",
          "Public whipping",
        ],
        accept: [
          "Sending convicts overseas to Australia or America",
        ],
        answer: "It removed offenders, provided labour for colonies, and was seen as more humane than execution.",
      },
      {
        question: "Who established the Metropolitan Police in 1829?",
        choices: [
          "Robert Peel",
          "Elizabeth Fry",
          "John Howard",
          "Oliver Cromwell",
        ],
        accept: [
          "Robert Peel",
        ],
        answer: "Officers were nicknamed 'peelers' or 'bobbies'. Early public suspicion of a standing force took years to overcome.",
      },
      {
        question: "What did Elizabeth Fry campaign for?",
        choices: [
          "Better conditions and education for prisoners, especially women",
          "Harsher sentences",
          "The return of transportation",
          "The end of the police force",
        ],
        accept: [
          "Better conditions and education for prisoners, especially women",
        ],
        answer: "Her work at Newgate shifted opinion towards reform as a purpose of prison rather than only punishment.",
      },
      {
        question: "How did the definition of crime change over time?",
        choices: [
          "Some acts stopped being crimes while new crimes appeared",
          "It never changed",
          "Only punishments changed",
          "Crime disappeared in the 20th century",
        ],
        accept: [
          "Some acts stopped being crimes while new crimes appeared",
        ],
        answer: "Witchcraft ceased to be a crime; cybercrime and driving offences did not exist before. Crime reflects the values of its society.",
      },
    ],

    misconceptions: [
      { wrong: "\"The Bloody Code meant huge numbers were executed.\"",
        right: "Juries frequently refused to convict and judges often reduced charges, precisely because the punishment seemed monstrous. The law was far harsher than the practice." },
      { wrong: "\"Trial by ordeal was abolished because people stopped believing in it.\"",
        right: "The Church withdrew clergy from ordeals in 1215. Without a priest to bless it, the ordeal could no longer claim to reveal God's judgement." },
      { wrong: "\"Punishment has become steadily kinder over time.\"",
        right: "It has changed direction repeatedly. The Bloody Code of the eighteenth century was far harsher than medieval justice, and prison numbers have risen sharply in recent decades." },
      { wrong: "\"Witch trials were medieval.\"",
        right: "They peaked in the 1640s, during the Civil War — early modern, not medieval, and driven by war, hardship and religious upheaval." },
      { wrong: "\"The death penalty was abolished because the public demanded it.\"",
        right: "Opinion polls still favoured it. Parliament abolished it against public opinion, after the Evans, Bentley and Ellis cases." },
      { wrong: "\"Peel's police were welcomed as an obvious improvement.\"",
        right: "They were widely distrusted as a threat to liberty and mocked as spies. Acceptance took decades, and the unarmed uniform was designed to win it." },
    ],
  },

  "history/superpower-relations-and-the-cold-war": {
    summary:
      "For forty-five years the United States and the Soviet Union confronted each other without ever fighting directly, because both knew a war between them could end civilisation. This period study covers how allies became enemies, how the confrontation was managed through crises in Berlin, Cuba and Afghanistan, and why it ended so suddenly and so peacefully in 1991.",
    keyFacts: [
      {
        heading: "How allies became enemies, 1941–49",
        points: [
          "The wartime alliance was one of necessity: a capitalist democracy and a communist dictatorship united only against Hitler.",
          "Yalta (February 1945) agreed the United Nations, the division of Germany, and free elections in eastern Europe — a promise Stalin did not keep.",
          "Potsdam (July 1945) was colder: Roosevelt was dead, Churchill was replaced mid-conference, and the USA had tested an atomic bomb.",
          "The Truman Doctrine (1947) promised support for countries resisting communism; the Marshall Plan offered $13 billion of American aid to rebuild Europe.",
          "Stalin saw Marshall Aid as dollar imperialism and forbade eastern bloc countries from accepting it, which hardened the division.",
          "The Berlin Blockade (1948–49): Stalin cut off West Berlin, the Allies supplied it by air for eleven months, and NATO was founded in 1949. The Warsaw Pact followed in 1955.",
        ],
      },
      {
        heading: "The arms race and the crises",
        points: [
          "The USSR tested an atomic bomb in 1949, ending the American monopoly; hydrogen bombs followed on both sides in the early 1950s.",
          "MAD — Mutually Assured Destruction — meant neither side could attack without being destroyed, which is why the war stayed cold.",
          "Hungary 1956: a rising against Soviet control was crushed by tanks, with around 20,000 killed. The West did not intervene, which taught eastern Europe a hard lesson.",
          "The Berlin Wall (1961) stopped the flow of people leaving East Germany — around 2.5 million had already gone.",
          "The Cuban Missile Crisis (October 1962) brought the world closest to nuclear war. Kennedy imposed a blockade; Khrushchev withdrew the missiles in exchange for a promise not to invade Cuba and the quiet removal of American missiles from Turkey.",
          "Prague Spring 1968: reform in Czechoslovakia was crushed, and the Brezhnev Doctrine asserted the USSR's right to intervene in any socialist state.",
        ],
      },
      {
        heading: "Détente and the second Cold War",
        points: [
          "The Cuban crisis frightened both sides into the hotline, the Test Ban Treaty (1963) and the Non-Proliferation Treaty (1968).",
          "Détente in the 1970s brought SALT 1 (1972), the Helsinki Accords (1975) and the Apollo–Soyuz handshake in space.",
          "The Soviet invasion of Afghanistan (1979) ended it: the USA boycotted the Moscow Olympics, armed the mujahideen, and SALT 2 was never ratified.",
          "Reagan called the USSR an 'evil empire' and launched a huge arms build-up including the Strategic Defense Initiative, which the Soviet economy could not match.",
          "Afghanistan became the USSR's Vietnam: nine years, around 15,000 Soviet dead, and withdrawal in 1989.",
        ],
      },
      {
        heading: "Why it ended",
        points: [
          "Gorbachev came to power in 1985 with glasnost (openness) and perestroika (restructuring), intended to save communism rather than end it.",
          "He abandoned the Brezhnev Doctrine, telling eastern European states the USSR would not intervene to keep their governments in power.",
          "1989: Poland, Hungary, Czechoslovakia, Bulgaria and Romania all broke away, and the Berlin Wall opened on 9 November — largely because of a confused press conference.",
          "Germany reunified in 1990; the Warsaw Pact dissolved in 1991.",
          "After a failed hardline coup in August 1991, the Soviet Union itself dissolved on 25 December 1991.",
          "Historians argue over the balance: Soviet economic failure, Reagan's pressure, Gorbachev's choices, and popular movements such as Solidarity in Poland all contributed.",
        ],
      },
    ],
    flashcards: [
      { term: "Cold War", definition: "The confrontation between the USA and USSR from 1945 to 1991, conducted without direct war between them." },
      { term: "Yalta Conference", definition: "The February 1945 meeting agreeing the United Nations, Germany's division and free elections in eastern Europe." },
      { term: "Potsdam Conference", definition: "The July 1945 meeting, colder than Yalta, with new leaders and an American atomic bomb already tested." },
      { term: "Truman Doctrine", definition: "The 1947 American promise to support countries resisting communism — the policy of containment." },
      { term: "Marshall Plan", definition: "The $13 billion American aid programme to rebuild Europe, rejected by Stalin for the eastern bloc." },
      { term: "Berlin Blockade", definition: "Stalin's 1948–49 closure of land routes to West Berlin, defeated by an eleven-month Allied airlift." },
      { term: "NATO", definition: "The Western military alliance founded in 1949, answered by the Warsaw Pact in 1955." },
      { term: "MAD", definition: "Mutually Assured Destruction — the certainty that any nuclear attack would destroy the attacker too." },
      { term: "Berlin Wall", definition: "The barrier built in 1961 to stop East Germans leaving, opened on 9 November 1989." },
      { term: "Cuban Missile Crisis", definition: "The October 1962 confrontation over Soviet missiles in Cuba — the closest the world came to nuclear war." },
      { term: "Brezhnev Doctrine", definition: "The Soviet claim of a right to intervene in any socialist state, asserted after the Prague Spring." },
      { term: "Détente", definition: "The 1970s easing of tension, producing SALT 1 and the Helsinki Accords." },
      { term: "Glasnost", definition: "Gorbachev's policy of openness, allowing criticism and debate within the USSR." },
      { term: "Perestroika", definition: "Gorbachev's policy of restructuring the Soviet economy and political system." },
      { term: "Solidarity", definition: "The Polish trade union movement that became a mass opposition and won power in 1989." },
    ],
    examTips: [
      {
        tip: "Explain why it stayed cold",
        detail:
          "Mutually Assured Destruction. Neither superpower could attack without being destroyed, so the conflict was fought through proxies, propaganda and money instead.",
      },
      {
        tip: "Give the full Cuban settlement",
        detail:
          "Khrushchev withdrew the missiles; the USA promised not to invade Cuba AND quietly removed missiles from Turkey. Leaving out the secret half makes it look like a simple American victory.",
      },
      {
        tip: "Use Berlin as a thread through the whole period",
        detail:
          "Blockade 1948, Wall 1961, opening 1989. Three moments in one city let you show change across the entire course.",
      },
      {
        tip: "Explain the Wall's opening honestly",
        detail:
          "It happened partly through a confused press conference and crowds who acted on it. That is a better answer than implying anyone decided to open it that night.",
      },
      {
        tip: "Give the end more than one cause",
        detail:
          "Soviet economic stagnation, the cost of Afghanistan, Reagan's arms build-up, Gorbachev's reforms, and popular movements like Solidarity. Reagan alone is not an answer.",
      },
      {
        tip: "Be precise about Gorbachev's aims",
        detail:
          "He wanted to SAVE communism, not end it. That his reforms destroyed the system he was trying to rescue is the most interesting thing about him.",
      },
    ],

    workedExamples: [
      {
        question: "Explain why the wartime alliance broke down after 1945.",
        steps: [
          "It had only ever been a marriage of convenience against Hitler — the ideologies were opposed from the start.",
          "Yalta promised free elections in eastern Europe; Stalin installed communist governments instead, which the West saw as betrayal.",
          "Stalin's view was defensive: Russia had been invaded through eastern Europe twice in thirty years and he wanted a buffer.",
          "Potsdam was colder — Roosevelt dead, Churchill replaced, and the atomic bomb tested and used without Soviet involvement.",
          "The Truman Doctrine and Marshall Plan looked to Moscow like the USA buying influence across Europe.",
          "The Berlin Blockade then turned suspicion into open confrontation, and NATO formalised it in 1949.",
        ],
        answer:
          "Because the only thing holding it together was Hitler. Once he was gone, opposed ideologies, broken promises over eastern Europe, and mutual suspicion — each side reading the other's defensive moves as aggression — produced open confrontation within four years.",
      },
      {
        question:
          "Why was the Cuban Missile Crisis a turning point?",
        steps: [
          "It was the closest the world came to nuclear war: Soviet missiles in Cuba could reach most of the USA in minutes.",
          "Both leaders discovered how little control they had — a U-2 was shot down, and a Soviet submarine came close to launching a nuclear torpedo.",
          "The resolution was a genuine compromise, though the American concession over Turkey was kept secret to preserve Kennedy's position.",
          "Afterwards both sides moved to reduce risk: the hotline in 1963, the Test Ban Treaty the same year, and the Non-Proliferation Treaty in 1968.",
          "It also had costs: Khrushchev was removed in 1964, partly for backing down, and the USSR began a build-up to reach parity.",
          "Judgement: it changed how the Cold War was managed rather than ending it.",
        ],
        answer:
          "Because both sides looked over the edge and stepped back. It produced the hotline, the Test Ban Treaty and eventually détente — but also cost Khrushchev his job and prompted a Soviet arms build-up. It changed the management of the Cold War, not its existence.",
      },
      {
        question:
          "'Reagan won the Cold War.' How far do you agree?",
        steps: [
          "For: his arms build-up and the Strategic Defense Initiative imposed costs the Soviet economy could not meet, and his rhetoric put ideological pressure on Moscow.",
          "Against: the Soviet economy was already stagnating badly in the 1970s, before Reagan took office.",
          "Against: Afghanistan drained Soviet money, manpower and morale for nine years.",
          "Against: Gorbachev's decision to abandon the Brezhnev Doctrine is what actually allowed 1989 to happen, and that was his choice.",
          "Against: popular movements — Solidarity above all — supplied the pressure from below.",
          "Judgement: Reagan raised the cost of continuing, but the system was failing already and Gorbachev chose not to hold it together by force.",
        ],
        answer:
          "He increased the pressure, but the Soviet economy was failing before he arrived, Afghanistan was draining it, and it was Gorbachev's refusal to send tanks in 1989 that let eastern Europe go. Reagan is one cause among several, and probably not the decisive one.",
      },
      {
        question:
          "Explain why the Berlin Wall opened on 9 November 1989.",
        steps: [
          "Context: Hungary had opened its border to Austria in the summer, so East Germans were already escaping westward via a third country.",
          "Mass demonstrations in Leipzig and elsewhere had grown week by week, and the government knew Moscow would not send troops.",
          "The government decided to relax travel rules to reduce pressure — a concession, not an opening.",
          "At a press conference, Günter Schabowski was handed the new rules without a briefing and, asked when they took effect, said 'immediately, without delay'.",
          "Crowds went to the crossings that evening. Guards had no orders, could not reach anyone senior, and eventually opened the gates.",
          "The general lesson: a decision by officials, a communication failure, and ordinary people acting on it — history is often less deliberate than it looks afterwards.",
        ],
        answer:
          "Not because anyone decided to open it. A confused press conference suggested new travel rules applied immediately, crowds went to the checkpoints, and guards with no orders let them through. The pressure had been building for months; the timing was an accident.",
      },
    ],

    practice: [
      { question: "In which year did the Cold War end with the dissolution of the USSR?",
        accept: ["1991"],
        answer: "1991. The Soviet Union formally dissolved on 25 December." },
      { question: "Which 1945 conference agreed the United Nations and free elections in eastern Europe?",
        accept: ["yalta", "the yalta conference"],
        answer: "Yalta, in February 1945 — a promise Stalin did not keep." },
      { question: "Which conference followed in July 1945?",
        accept: ["potsdam", "the potsdam conference"],
        answer: "Potsdam, colder than Yalta and held after the first atomic test." },
      { question: "What was the 1947 American promise to support countries resisting communism called?",
        accept: ["truman doctrine", "the truman doctrine"],
        answer: "The Truman Doctrine — the policy of containment." },
      { question: "What was the American aid programme to rebuild Europe called?",
        accept: ["marshall plan", "the marshall plan", "marshall aid"],
        answer: "The Marshall Plan, worth around $13 billion and rejected by Stalin for the eastern bloc." },
      { question: "In which year was NATO founded?",
        accept: ["1949"],
        answer: "1949, following the Berlin Blockade. The Warsaw Pact answered it in 1955." },
      { question: "How long did the Berlin Airlift last, in months?",
        accept: ["11", "eleven"],
        answer: "Eleven months, supplying West Berlin entirely by air until Stalin lifted the blockade." },
      { question: "What does MAD stand for?",
        accept: ["mutually assured destruction"],
        answer: "Mutually Assured Destruction — the reason the war stayed cold." },
      { question: "In which year was the Berlin Wall built?",
        accept: ["1961"],
        answer: "1961, to stop the flow of East Germans westward — around 2.5 million had already left." },
      { question: "In which year was the Cuban Missile Crisis?",
        accept: ["1962"],
        answer: "1962, in October — the closest the world has come to nuclear war." },
      { question: "From which country did the USA secretly agree to remove missiles after the Cuban crisis?",
        accept: ["turkey"],
        answer: "Turkey. The secrecy let Kennedy appear to have won outright." },
      { question: "Which 1968 reform movement was crushed by Soviet tanks?",
        accept: ["prague spring", "the prague spring"],
        answer: "The Prague Spring in Czechoslovakia, followed by the Brezhnev Doctrine." },
      { question: "Which country did the USSR invade in 1979, ending détente?",
        accept: ["afghanistan"],
        answer: "Afghanistan. Nine years and around 15,000 Soviet dead followed." },
      { question: "Who became Soviet leader in 1985?",
        accept: ["gorbachev", "mikhail gorbachev"],
        answer: "Mikhail Gorbachev, whose reforms were intended to save communism, not end it." },
      { question: "What was Gorbachev's policy of openness called?",
        accept: ["glasnost"],
        answer: "Glasnost, which allowed criticism and debate for the first time in decades." },
      { question: "On what date did the Berlin Wall open? Give it as day/month/year.",
        accept: ["09/11/1989", "9 november 1989", "9/11/1989"],
        answer: "9 November 1989, largely because of a confused press conference." },
      { question: "Explain why the Cold War never became a direct war between the superpowers.",
        answer: "Because of Mutually Assured Destruction. Once both sides had enough nuclear weapons to destroy the other even after being attacked first, victory became impossible by definition — any attack guaranteed the attacker's own destruction. That did not make the world safe, but it did change where the conflict happened: it was fought instead through proxy wars in Korea, Vietnam and Afghanistan, through the arms and space races, through propaganda, espionage and economic competition. The Cuban Missile Crisis showed both leaders how easily control could be lost, and the arrangements that followed — the hotline, the Test Ban Treaty — were attempts to make sure the logic of MAD was never tested by accident. (Mark this one yourself.)" },
      { question: "Explain why the Soviet empire in eastern Europe collapsed so quickly in 1989.",
        answer: "Because the single thing holding it together was removed. Every previous rising — East Germany 1953, Hungary 1956, Czechoslovakia 1968 — had been crushed by Soviet tanks, and everybody in the region knew it. When Gorbachev abandoned the Brezhnev Doctrine and made clear the USSR would not intervene, the local communist governments had no answer, because none had genuine popular support and none could suppress opposition alone. Once Poland's Solidarity won power and Hungary opened its border without Soviet retaliation, the demonstration effect was immediate: within months, five countries changed government. The speed reflected how much the whole structure had rested on force rather than consent. (Mark this one yourself.)" },
      {
        question: "What was the Iron Curtain?",
        choices: [
          "The division between communist eastern and capitalist western Europe",
          "A physical wall across Europe",
          "A trade agreement",
          "A NATO defence plan",
        ],
        accept: [
          "The division between communist eastern and capitalist western Europe",
        ],
        answer: "Churchill popularised the phrase in 1946. The Berlin Wall from 1961 became its most visible symbol.",
      },
      {
        question: "What was the Marshall Plan?",
        choices: [
          "American economic aid to rebuild western Europe",
          "A military invasion plan",
          "A Soviet trade policy",
          "A nuclear weapons treaty",
        ],
        accept: [
          "American economic aid to rebuild western Europe",
        ],
        answer: "The USA saw it as recovery and containment; the USSR saw it as buying influence, and forbade its satellites from accepting it.",
      },
      {
        question: "What triggered the Cuban Missile Crisis of 1962?",
        choices: [
          "Soviet nuclear missiles being placed in Cuba",
          "An American invasion of Cuba",
          "A revolution in Berlin",
          "The launch of Sputnik",
        ],
        accept: [
          "Soviet nuclear missiles being placed in Cuba",
        ],
        answer: "It was resolved by a naval blockade and a secret deal to remove US missiles from Turkey — the closest the Cold War came to nuclear war.",
      },
      {
        question: "What does DETENTE mean?",
        choices: [
          "An easing of tension between the superpowers",
          "A declaration of war",
          "An arms race",
          "A trade embargo",
        ],
        accept: [
          "An easing of tension between the superpowers",
        ],
        answer: "SALT talks and the Helsinki Agreements belong to this period. It did not end rivalry, only reduced the temperature.",
      },
      {
        question: "Why was the Berlin Wall built in 1961?",
        choices: [
          "To stop East Germans fleeing to the West",
          "To defend against a Western invasion",
          "To divide Germany from France",
          "To mark a trade boundary",
        ],
        accept: [
          "To stop East Germans fleeing to the West",
        ],
        answer: "Millions had already left, draining skilled workers. The wall solved that problem at enormous cost to East Germany's reputation.",
      },
    ],

    misconceptions: [
      { wrong: "\"The Cold War was a war that was never declared.\"",
        right: "It was a confrontation, not a war between the two powers. But real wars were fought within it — Korea, Vietnam, Afghanistan — with millions of deaths." },
      { wrong: "\"Kennedy won the Cuban Missile Crisis outright.\"",
        right: "He also promised not to invade Cuba and secretly agreed to remove American missiles from Turkey. The secrecy is why it looked like a clean victory." },
      { wrong: "\"Reagan won the Cold War.\"",
        right: "He added pressure, but Soviet stagnation predated him, Afghanistan drained the USSR for nine years, and Gorbachev's choice not to use force is what allowed 1989." },
      { wrong: "\"The Berlin Wall was opened by a government decision on 9 November.\"",
        right: "The government intended to relax travel rules. A misread announcement, crowds at the checkpoints and guards without orders did the rest." },
      { wrong: "\"Gorbachev intended to end communism.\"",
        right: "Glasnost and perestroika were meant to save it by making it work. That the reforms destroyed the system is the central irony of his career." },
      { wrong: "\"Stalin's control of eastern Europe was purely aggressive.\"",
        right: "It was aggressive in effect, but Stalin's stated reasoning was defensive — Russia had been invaded through those countries twice in thirty years. Explaining both readings is better history." },
    ],
  },

  "history/norman-england-1066-1100": {
    summary:
      "In one year England changed hands, and within a generation almost the entire English ruling class had been replaced by Normans. This depth study covers the succession crisis of 1066, the conquest itself, how a few thousand invaders held down a country of around two million people, and how completely the Normans reshaped land, law, the Church and the landscape.",
    keyFacts: [
      {
        heading: "1066 and the succession crisis",
        points: [
          "Edward the Confessor died childless in January 1066, leaving no clear heir and at least three serious claimants.",
          "Harold Godwinson: the most powerful English earl, crowned immediately, and claimed Edward had named him on his deathbed.",
          "William of Normandy: claimed Edward had promised him the throne in 1051, and that Harold had sworn an oath to support him in 1064.",
          "Harald Hardrada of Norway: claimed through an earlier agreement between Scandinavian and English kings.",
          "Stamford Bridge (25 September): Harold defeated Hardrada in Yorkshire, then marched around 250 miles south in about two weeks.",
          "Hastings (14 October): Harold's shield wall held for hours until it broke, possibly through feigned Norman retreats. Harold was killed and the English leadership destroyed with him.",
        ],
      },
      {
        heading: "Securing the conquest",
        points: [
          "Castles: motte-and-bailey castles were thrown up quickly across the country — a garrison, a lookout and a permanent statement of who was in charge.",
          "Rebellions came repeatedly: Edwin and Morcar, Hereward the Wake in the Fens, and risings in the north.",
          "The Harrying of the North (1069–70) destroyed villages, crops, livestock and people across Yorkshire and beyond. Chroniclers described land left waste for years; Domesday shows enormous drops in value.",
          "Land was redistributed almost completely: by 1086 fewer than 5% of landholders were English.",
          "The feudal system tied land to service — the king granted land to tenants-in-chief in return for knights, and they granted it downwards in turn.",
        ],
      },
      {
        heading: "Ruling England",
        points: [
          "The Domesday Book (1086) recorded who held what land, its value, and how it had changed since 1066 — an extraordinary survey for its time, and a tax and ownership record.",
          "The Church was Normanised: Lanfranc became Archbishop of Canterbury in 1070, English bishops were replaced, and cathedrals were rebuilt on a vast scale.",
          "Law changed: the murdrum fine punished a whole community if a Norman was killed and the killer not produced. Forest Laws reserved huge areas for royal hunting.",
          "The language of government became Latin and Norman French, while English survived among ordinary people — which is why English today has doubled vocabulary from both.",
          "Government was more centralised than most of Europe, partly because the Normans inherited an unusually well-organised Anglo-Saxon state.",
        ],
      },
      {
        heading: "How much really changed",
        points: [
          "Changed almost entirely: the landowning class, the bishops, the language of power, castle-building, and cathedral architecture.",
          "Continued: the shire and hundred system, the sheriff, the coinage, most peasant farming, and the English language itself among the majority.",
          "The Normans took over an existing administrative machine rather than building one — which is a large part of how so few of them held so much.",
          "William died in 1087; his sons fought over the inheritance, and the succession remained contested into the next century.",
          "Historians argue about the depth of change: total at the top, far less at the bottom, which is the shape of the answer most questions want.",
        ],
      },
    ],
    flashcards: [
      { term: "Edward the Confessor", definition: "The English king who died childless in January 1066, leaving a disputed succession." },
      { term: "Harold Godwinson", definition: "The most powerful English earl, crowned king in January 1066 and killed at Hastings in October." },
      { term: "Harald Hardrada", definition: "The Norwegian king who invaded northern England and was defeated at Stamford Bridge." },
      { term: "Stamford Bridge", definition: "Harold's victory over the Norwegians on 25 September 1066, three weeks before Hastings." },
      { term: "Battle of Hastings", definition: "William's victory on 14 October 1066, in which Harold was killed and the English leadership destroyed." },
      { term: "Shield wall", definition: "The Anglo-Saxon defensive formation of overlapping shields, which held for hours at Hastings before breaking." },
      { term: "Motte-and-bailey", definition: "A castle with a wooden tower on a raised mound beside an enclosed yard — quick to build and hard to take." },
      { term: "Harrying of the North", definition: "William's devastation of northern England in 1069–70, destroying crops, livestock and villages." },
      { term: "Domesday Book", definition: "The 1086 survey recording landholding and value across England, for tax and to settle disputes." },
      { term: "Feudal system", definition: "The arrangement tying land to service: the king granted land to lords in return for knights and loyalty." },
      { term: "Tenant-in-chief", definition: "A lord holding land directly from the king in return for military service." },
      { term: "Murdrum fine", definition: "A penalty on an entire community if a Norman was killed and the killer not produced." },
      { term: "Lanfranc", definition: "The Norman Archbishop of Canterbury from 1070, who reorganised the English Church." },
      { term: "Forest Law", definition: "Norman law reserving vast areas for royal hunting, criminalising activities that had been ordinary." },
    ],
    examTips: [
      {
        tip: "Give Hastings several causes",
        detail:
          "Norman cavalry and archers against an infantry shield wall, Harold's exhausted army after a 250-mile march, the feigned retreats, and luck. Not one factor.",
      },
      {
        tip: "Use Stamford Bridge to explain Hastings",
        detail:
          "Harold fought a major battle in Yorkshire and marched south in about two weeks. His army was depleted and exhausted before Hastings began.",
      },
      {
        tip: "Separate change at the top from change at the bottom",
        detail:
          "The landowning class was almost entirely replaced; peasant farming and local government carried on. Most 'how much changed' questions want exactly that distinction.",
      },
      {
        tip: "Explain castles as control, not just defence",
        detail:
          "They housed a garrison, dominated a town, and were visible for miles. A castle was a permanent argument about who was in charge.",
      },
      {
        tip: "Use Domesday as evidence, not just an event",
        detail:
          "Its before-and-after values are how historians measure the Harrying of the North. Sources that were made for one purpose often answer a different question.",
      },
      {
        tip: "Handle the Bayeux Tapestry carefully",
        detail:
          "It was made for Norman patrons within about twenty years. It is superb evidence of what the Normans wanted remembered — and needs treating as such.",
      },
    ],

    workedExamples: [
      {
        question: "Explain why William won the Battle of Hastings.",
        steps: [
          "Harold's army was exhausted: it had fought at Stamford Bridge on 25 September and marched around 250 miles south in about two weeks.",
          "Many of Harold's best troops were lost or left behind, and the fyrd had already been kept in the field for months.",
          "William had combined arms — archers, infantry and cavalry — against an army that fought on foot behind a shield wall.",
          "The shield wall held for hours, so it was not simply outmatched. What broke it was English troops leaving the ridge to pursue apparently retreating Normans.",
          "Whether those retreats were feigned or genuine and then exploited is debated, and saying so is worth a mark.",
          "Harold's death ended it: with the king and his brothers killed, there was no one left to organise resistance.",
        ],
        answer:
          "Because Harold arrived exhausted and depleted after Stamford Bridge and a 250-mile march, and because William had cavalry and archers against a shield wall. The wall held for hours until English troops broke ranks chasing retreating Normans — and Harold's death removed any possibility of continuing.",
      },
      {
        question:
          "Explain how a few thousand Normans controlled a country of around two million people.",
        steps: [
          "Decapitation: Harold and his brothers died at Hastings, so English resistance had no obvious leader.",
          "Castles: motte-and-bailey castles went up rapidly, each with a garrison dominating its area.",
          "Terror: the Harrying of the North destroyed the region's capacity to rebel and demonstrated the cost of trying.",
          "Land: redistribution to Norman followers meant by 1086 fewer than 5% of landholders were English.",
          "The feudal system tied every landholder to military obligation, so the king could raise forces quickly.",
          "Inheritance: the Anglo-Saxon state was already well organised, with shires, sheriffs and a working tax system, so the Normans took over a machine rather than building one.",
        ],
        answer:
          "Through decapitating the English leadership at Hastings, covering the country in castles, terrorising the north, replacing almost every landowner, and binding the new class to military service — all built on an Anglo-Saxon administrative system that already worked and simply changed hands.",
      },
      {
        question:
          "'The Norman Conquest changed England completely.' How far do you agree?",
        steps: [
          "For: by 1086 under 5% of landholders were English, the bishops were Norman, the language of government changed, and castles and cathedrals transformed the landscape.",
          "For: new laws such as murdrum and Forest Law changed how ordinary people could live.",
          "Against: shires, hundreds, sheriffs and the coinage all continued, because they worked.",
          "Against: most peasants carried on farming the same land in the same way, under a different lord.",
          "Against: the English language survived and eventually absorbed Norman French rather than being replaced.",
          "Judgement: near-total change at the top, considerable continuity below — and the continuity is part of why the change at the top succeeded.",
        ],
        answer:
          "At the top, almost completely: landowners, bishops, the language of government and the landscape itself. Below that, far less — shires, sheriffs, coinage and daily farming carried on. The Normans changed who ruled far more than they changed how England worked.",
      },
      {
        question:
          "How useful is the Bayeux Tapestry as evidence about 1066?",
        steps: [
          "Strengths: it is close in time, made within about twenty years, and enormously detailed on weapons, ships, clothing and tactics.",
          "It is one of very few visual sources for the period at all.",
          "Limitations: it was made for Norman patrons, probably Bishop Odo, William's half-brother.",
          "So it presents the Norman case — Harold's oath is shown prominently, framing him as an oath-breaker rather than a rightful king.",
          "Famous ambiguities remain, including whether the figure with an arrow in the eye is Harold at all.",
          "Conclusion: excellent evidence about material culture and about the Norman version of events; weaker on what actually happened at contested moments.",
        ],
        answer:
          "Very useful on material detail — ships, arms, clothing — and on how the Normans wished the conquest remembered, since it was made for Norman patrons. Much weaker as neutral testimony about disputed events like Harold's oath or his death.",
      },
    ],

    practice: [
      { question: "In which month of 1066 did Edward the Confessor die?",
        accept: ["january"],
        answer: "January 1066, childless, leaving at least three serious claimants." },
      { question: "Who was crowned king of England in January 1066?",
        accept: ["harold godwinson", "harold", "harold ii"],
        answer: "Harold Godwinson, the most powerful English earl." },
      { question: "Which Norwegian king invaded northern England in 1066?",
        accept: ["harald hardrada", "hardrada", "harald hardraada"],
        answer: "Harald Hardrada, defeated at Stamford Bridge on 25 September." },
      { question: "At which battle did Harold defeat the Norwegians?",
        accept: ["stamford bridge", "battle of stamford bridge"],
        answer: "Stamford Bridge, three weeks before Hastings and around 250 miles from it." },
      { question: "On what date was the Battle of Hastings? Give it as day/month/year.",
        accept: ["14/10/1066", "14 october 1066", "14/10/66"],
        answer: "14 October 1066. Harold was killed and the English leadership destroyed." },
      { question: "What was the Anglo-Saxon defensive formation at Hastings called?",
        accept: ["shield wall", "the shield wall"],
        answer: "The shield wall, which held for hours before breaking." },
      { question: "What type of castle did the Normans build quickly across England?",
        accept: ["motte and bailey", "motte-and-bailey", "motte and bailey castle"],
        answer: "Motte-and-bailey — a wooden tower on a mound beside an enclosed yard." },
      { question: "What was William's devastation of northern England in 1069–70 called?",
        accept: ["harrying of the north", "the harrying of the north", "harrying"],
        answer: "The Harrying of the North. Domesday shows enormous falls in land value years later." },
      { question: "In which year was the Domesday Book compiled?",
        accept: ["1086"],
        answer: "1086, recording landholding and value across England." },
      { question: "Roughly what percentage of landholders were still English by 1086?",
        accept: ["5", "5%", "less than 5"],
        answer: "Under 5%. The landowning class had been almost entirely replaced." },
      { question: "What is the term for a lord holding land directly from the king?",
        accept: ["tenant in chief", "tenant-in-chief"],
        answer: "A tenant-in-chief, who owed knights and loyalty in return." },
      { question: "What fine punished a community if a Norman was killed?",
        accept: ["murdrum", "murdrum fine", "the murdrum fine"],
        answer: "The murdrum fine, payable by the whole community if the killer was not produced." },
      { question: "Who became Archbishop of Canterbury in 1070?",
        accept: ["lanfranc"],
        answer: "Lanfranc, who reorganised the English Church along Norman lines." },
      { question: "Which rebel resisted in the Fens?",
        accept: ["hereward", "hereward the wake"],
        answer: "Hereward the Wake, whose resistance in the Fens became legendary." },
      { question: "In which year did William the Conqueror die?",
        accept: ["1087"],
        answer: "1087. His sons then fought over the inheritance." },
      { question: "Which tapestry is the main visual source for the conquest?",
        accept: ["bayeux", "bayeux tapestry", "the bayeux tapestry"],
        answer: "The Bayeux Tapestry — made for Norman patrons, so it presents the Norman case." },
      { question: "Explain why castles were so effective at securing the conquest.",
        answer: "Because they solved several problems at once with very little manpower. A motte-and-bailey could be thrown up in weeks using forced local labour, so control did not have to wait for stone. It gave a small garrison somewhere defensible to retreat to, which meant a handful of Normans could hold a district against far larger numbers. It dominated the town or river crossing it was built beside, controlling movement and trade. And it was visible for miles — a permanent, unmissable statement that the land now had a new owner. Castles turned military victory into daily administration, which is the harder half of any conquest. (Mark this one yourself.)" },
      { question: "Explain why the Normans kept so much of the Anglo-Saxon system of government.",
        answer: "Because it worked, and replacing it would have been enormously difficult with so few men. Anglo-Saxon England was unusually well organised for its time: it had shires with sheriffs, hundreds beneath them, a functioning tax system in the geld, and a reliable coinage. William needed money and control quickly, and inheriting a working machine gave him both immediately. Keeping the structure also reduced disruption for the ordinary people whose cooperation any ruler depends on, while the Normans changed the thing that actually mattered to them — who held the land and who answered to whom. It is a useful general point: conquerors usually replace the people at the top and keep the plumbing. (Mark this one yourself.)" },
      {
        question: "In which year was the Battle of Hastings?",
        choices: [
          "1066",
          "1067",
          "1065",
          "1070",
        ],
        accept: [
          "1066",
        ],
        answer: "Harold Godwinson was defeated by William of Normandy, and William was crowned on Christmas Day the same year.",
      },
      {
        question: "What was the Domesday Book?",
        choices: [
          "A survey of land and property across England",
          "A book of Norman laws",
          "A record of church services",
          "A list of battles fought",
        ],
        accept: [
          "A survey of land and property across England",
        ],
        answer: "Compiled from 1085, it let William tax accurately and see who held what — a formidable act of administration for the time.",
      },
      {
        question: "What was the FEUDAL SYSTEM?",
        choices: [
          "A hierarchy where land was granted in return for service",
          "A system of trading with Europe",
          "The Norman legal code",
          "A method of building castles",
        ],
        accept: [
          "A hierarchy where land was granted in return for service",
        ],
        answer: "The king granted land to barons, who granted it to knights, down to peasants — each owing service upwards.",
      },
      {
        question: "Why did the Normans build motte-and-bailey castles quickly after 1066?",
        choices: [
          "To control and intimidate a hostile population",
          "To provide homes for peasants",
          "To store the Domesday Book",
          "To serve as churches",
        ],
        accept: [
          "To control and intimidate a hostile population",
        ],
        answer: "They could be thrown up in weeks from earth and timber, then rebuilt in stone once an area was secure.",
      },
      {
        question: "What was the Harrying of the North?",
        choices: [
          "William's brutal suppression of northern rebellion",
          "A tax collected in the north",
          "A treaty with Scotland",
          "A church reform programme",
        ],
        accept: [
          "William's brutal suppression of northern rebellion",
        ],
        answer: "Villages, crops and livestock were destroyed in 1069 to 1070, causing famine. It ended resistance but at enormous human cost.",
      },
    ],

    misconceptions: [
      { wrong: "\"Harold was killed by an arrow in the eye.\"",
        right: "It comes from the Bayeux Tapestry, where the figure is ambiguous and may not be Harold. Chroniclers give different accounts, and historians treat it as unproven." },
      { wrong: "\"The Normans introduced the feudal system to a disorganised England.\"",
        right: "Anglo-Saxon England already had shires, sheriffs, taxation and coinage — an unusually effective state. The Normans reorganised landholding on top of a system that worked." },
      { wrong: "\"William won because his army was better.\"",
        right: "The shield wall held for hours. Harold's exhaustion after Stamford Bridge and a 250-mile march, the breaking of the wall during the retreats, and Harold's death all mattered." },
      { wrong: "\"England was completely Normanised.\"",
        right: "The ruling class was replaced almost entirely, but shires, sheriffs, coinage and peasant farming continued — and English survived to absorb Norman French rather than being replaced by it." },
      { wrong: "\"The Domesday Book was written to be helpful to historians.\"",
        right: "It was a tax and ownership record, made to settle who owed what. That it is so useful now is a side effect of a very practical purpose." },
      { wrong: "\"Resistance ended in 1066.\"",
        right: "Rebellions continued for years — Edwin and Morcar, Hereward in the Fens, and risings in the north severe enough to provoke the Harrying." },
    ],
  },

  "history/america-1920-1973": {
    summary:
      "Half a century in which the United States boomed, collapsed, rebuilt, and then fought itself over who the promise of America was actually for. This period study covers the Roaring Twenties, the Wall Street Crash and the New Deal, the post-war boom, the civil rights movement, and the protest movements that followed it.",
    keyFacts: [
      {
        heading: "The Roaring Twenties",
        points: [
          "Mass production made goods affordable: Ford's assembly line cut the Model T's price so far that by 1929 there was roughly one car for every five Americans.",
          "Consumer credit, advertising and mail order let people buy before they could afford to.",
          "Jazz, cinema, radio and the 'flapper' image changed the culture, though the flapper was a minority urban phenomenon rather than a national one.",
          "Prohibition (1920–33) banned alcohol and created bootlegging, speakeasies and organised crime figures such as Al Capone.",
          "Not everyone boomed: farmers suffered from overproduction and falling prices throughout the decade, and Black Americans faced segregation in the South and discrimination in the North.",
          "The Ku Klux Klan revived to perhaps 4–5 million members in the mid-1920s, and immigration was sharply restricted by quota laws in 1921 and 1924.",
        ],
      },
      {
        heading: "Crash and Depression",
        points: [
          "Shares were bought 'on the margin' — with borrowed money — on the assumption prices would keep rising.",
          "The Wall Street Crash of October 1929 destroyed those values and the loans behind them.",
          "By 1933 around 13 million Americans were unemployed, roughly a quarter of the workforce, and thousands of banks had failed.",
          "Hoover believed in limited government and voluntary action, and the shanty towns of the homeless were named 'Hoovervilles' after him.",
          "Roosevelt won in 1932 promising a 'New Deal', and closed every bank for four days before reopening only the sound ones — which restored confidence immediately.",
          "The New Deal's alphabet agencies: CCC for young men's conservation work, TVA for the Tennessee Valley, AAA for farm prices, WPA for public works, and the Social Security Act of 1935.",
        ],
      },
      {
        heading: "Post-war boom and civil rights",
        points: [
          "The war ended the Depression, and post-war America boomed: suburbs, televisions, the GI Bill and near-full employment.",
          "Segregation persisted in the South under Jim Crow laws, upheld by the 'separate but equal' doctrine from 1896.",
          "Brown v Board of Education (1954) ruled segregated schools unconstitutional; the Little Rock Nine needed federal troops to enter school in 1957.",
          "The Montgomery Bus Boycott (1955–56), following Rosa Parks's arrest, lasted 381 days and made Martin Luther King a national figure.",
          "The March on Washington (1963) drew around 250,000 people and produced King's 'I Have a Dream' speech.",
          "The Civil Rights Act (1964) outlawed segregation and discrimination; the Voting Rights Act (1965) removed the devices used to stop Black Americans registering to vote.",
        ],
      },
      {
        heading: "Division and protest",
        points: [
          "Malcolm X and the Nation of Islam rejected integration and non-violence, arguing for Black self-reliance and self-defence.",
          "Black Power from 1966, and the Black Panthers, combined armed self-defence with free breakfast programmes and community clinics.",
          "Riots in Watts (1965) and Detroit (1967) showed that legal equality had not changed poverty, policing or housing in northern cities.",
          "King was assassinated in 1968, Malcolm X in 1965, and Kennedy in 1963 — a decade defined partly by political killings.",
          "The women's movement grew with Friedan's The Feminine Mystique (1963), the founding of NOW in 1966, and the Equal Pay Act of 1963.",
          "Opposition to the Vietnam War and the student movement reshaped American politics, and the war ended with American withdrawal in 1973.",
        ],
      },
    ],
    flashcards: [
      { term: "Mass production", definition: "Making goods in large quantities on an assembly line, which cut prices dramatically — Ford's Model T being the classic case." },
      { term: "Buying on the margin", definition: "Purchasing shares with borrowed money, which magnified both profits and the losses of 1929." },
      { term: "Prohibition", definition: "The 1920–33 ban on alcohol, which created bootlegging, speakeasies and organised crime." },
      { term: "Wall Street Crash", definition: "The October 1929 collapse of share prices that triggered the Great Depression." },
      { term: "Hooverville", definition: "A shanty town of the homeless during the Depression, named sarcastically after President Hoover." },
      { term: "New Deal", definition: "Roosevelt's programme of relief, recovery and reform from 1933, run through the 'alphabet agencies'." },
      { term: "CCC", definition: "The Civilian Conservation Corps, which employed young men on conservation projects." },
      { term: "TVA", definition: "The Tennessee Valley Authority, which built dams and brought electricity to one of the poorest regions." },
      { term: "Social Security Act", definition: "The 1935 law creating American pensions and unemployment insurance." },
      { term: "Jim Crow laws", definition: "Southern laws enforcing racial segregation, upheld by the 'separate but equal' ruling of 1896." },
      { term: "Brown v Board of Education", definition: "The 1954 Supreme Court ruling that segregated schools were unconstitutional." },
      { term: "Montgomery Bus Boycott", definition: "The 381-day boycott from 1955 that followed Rosa Parks's arrest and made King a national figure." },
      { term: "Civil Rights Act 1964", definition: "The law outlawing segregation and discrimination in employment and public facilities." },
      { term: "Voting Rights Act 1965", definition: "The law banning the literacy tests and other devices used to stop Black Americans voting." },
      { term: "Black Power", definition: "The movement from 1966 emphasising Black pride, self-reliance and self-defence rather than integration." },
      { term: "The Feminine Mystique", definition: "Betty Friedan's 1963 book that helped launch the modern American women's movement." },
    ],
    examTips: [
      {
        tip: "Say who the boom left out",
        detail:
          "Farmers, Black Americans and many industrial workers did not share the 1920s prosperity. 'The Roaring Twenties for whom?' is a strong opening move.",
      },
      {
        tip: "Explain the Crash through credit",
        detail:
          "Buying on the margin meant a fall in prices destroyed borrowed money too, which took banks down with it. That mechanism explains why a share crash became a depression.",
      },
      {
        tip: "Assess the New Deal honestly",
        detail:
          "It restored confidence and provided relief, and unemployment was still around 15% in 1938. The war ended the Depression. Both halves belong in the answer.",
      },
      {
        tip: "Cover more than King in civil rights",
        detail:
          "Rosa Parks, the NAACP's legal strategy, the students of SNCC, Malcolm X and the Panthers. Reducing the movement to one man misses how it actually worked.",
      },
      {
        tip: "Distinguish legal from real change",
        detail:
          "The 1964 and 1965 Acts changed the law. Watts in 1965 and Detroit in 1967 showed poverty, policing and housing had not changed with it.",
      },
      {
        tip: "Use exact figures",
        detail:
          "13 million unemployed by 1933, a 381-day boycott, 250,000 at the March on Washington. Specifics carry the argument.",
      },
    ],

    workedExamples: [
      {
        question: "Explain why the American economy boomed in the 1920s.",
        steps: [
          "Mass production: assembly lines cut costs so far that ordinary families could buy cars and appliances.",
          "Consumer credit and hire purchase let people buy before they had the money, which multiplied demand.",
          "Advertising created wants, and mail order and chain stores made buying easy across a huge country.",
          "Government policy helped: low taxes, tariffs protecting American industry, and a hands-off attitude to business.",
          "New industries — cars, electricals, chemicals — pulled others with them, from steel and rubber to road-building.",
          "But note the weakness: much of it rested on credit and on confidence, both of which could vanish quickly. Which they did.",
        ],
        answer:
          "Mass production cutting prices, credit letting people buy in advance, advertising creating demand, and a government that taxed lightly and left business alone. The same credit that drove the boom is what made the collapse so severe.",
      },
      {
        question:
          "'The New Deal was a failure.' How far do you agree?",
        steps: [
          "Against the claim: the banking crisis was stopped within days, and the bank holiday restored confidence immediately.",
          "Against: millions were given work through the CCC and WPA, and the TVA transformed one of the poorest regions.",
          "Against: the Social Security Act created pensions and unemployment insurance that still exist.",
          "For the claim: unemployment was still around 15% in 1938, and a recession that year showed recovery was incomplete.",
          "For: critics on the right called it socialism and the Supreme Court struck parts down; critics on the left said it did not go nearly far enough.",
          "For: it was the Second World War, not the New Deal, that finally ended mass unemployment.",
          "Judgement: it failed to end the Depression and succeeded at almost everything else — relief, confidence, and permanent reform.",
        ],
        answer:
          "It did not end the Depression — the war did that, and unemployment was still around 15% in 1938. But it stopped the banking collapse, gave millions relief and work, and created a welfare system that outlasted it. Judging it only against the Depression sets a test it was not able to pass.",
      },
      {
        question:
          "Explain why the Montgomery Bus Boycott succeeded.",
        steps: [
          "Rosa Parks was a deliberate and careful choice: a respected NAACP secretary, not a random passenger.",
          "The boycott was sustained for 381 days, which required organisation — car pools, church networks and fundraising.",
          "Economics: Black passengers were the majority of bus users, so the company's finances suffered badly.",
          "Leadership: the young Martin Luther King gave it a national voice and a moral argument grounded in non-violence.",
          "Media: images of dignified protest against violent opposition played extremely badly for segregation on national television.",
          "Law: the decisive blow came from the Supreme Court ruling bus segregation unconstitutional in November 1956.",
          "So it combined community organisation, economic pressure, publicity and the courts — a template used repeatedly afterwards.",
        ],
        answer:
          "Because it combined economic pressure, sustained community organisation, powerful publicity and a legal challenge that ended in the Supreme Court. Parks's arrest was chosen as a test case, and the 381-day boycott gave the courts time to act.",
      },
      {
        question:
          "Why did the civil rights movement divide after 1965?",
        steps: [
          "The legal battles had largely been won: segregation and voting discrimination were now illegal.",
          "But conditions in northern cities — poverty, housing, policing, unemployment — had not changed at all, and no law addressed them.",
          "Watts in 1965, days after the Voting Rights Act, made the gap impossible to ignore.",
          "Younger activists questioned whether non-violence worked when protesters were still being beaten and killed.",
          "Malcolm X and then Black Power offered a different answer: self-reliance, pride and self-defence rather than integration.",
          "King himself moved towards economic questions and opposition to Vietnam, which cost him support including in the White House.",
          "Judgement: the movement divided because it had succeeded at the thing law could fix and now faced the things law could not.",
        ],
        answer:
          "Because it had won the legal argument and discovered that legal equality left poverty, housing and policing untouched. Watts erupted days after the Voting Rights Act, and younger activists turned towards Black Power when non-violence appeared to have reached its limits.",
      },
    ],

    practice: [
      { question: "Which car made mass production famous in the 1920s?",
        accept: ["model t", "the model t", "ford model t"],
        answer: "The Ford Model T, whose price fell so far it became affordable to ordinary families." },
      { question: "What is the term for buying shares with borrowed money?",
        accept: ["buying on the margin", "on the margin", "margin buying", "buying on margin"],
        answer: "Buying on the margin. It magnified the gains and then destroyed people in 1929." },
      { question: "In which years was Prohibition in force? Give it as e.g. 1900-1905.",
        accept: ["1920-1933", "1920-33", "1920 - 1933"],
        answer: "1920 to 1933. It created bootlegging, speakeasies and organised crime." },
      { question: "Which Chicago gangster became the symbol of Prohibition-era crime?",
        accept: ["al capone", "capone"],
        answer: "Al Capone, eventually imprisoned for tax evasion rather than for violence." },
      { question: "In which month and year was the Wall Street Crash? Give month and year.",
        accept: ["october 1929", "oct 1929"],
        answer: "October 1929, which triggered the Great Depression." },
      { question: "Roughly how many Americans were unemployed by 1933, in millions?",
        accept: ["13", "13 million", "about 13"],
        answer: "Around 13 million — roughly a quarter of the workforce." },
      { question: "What were the shanty towns of the homeless called?",
        accept: ["hoovervilles", "hooverville"],
        answer: "Hoovervilles, named sarcastically after President Hoover." },
      { question: "Who became president in 1933 promising a New Deal?",
        accept: ["roosevelt", "franklin roosevelt", "fdr", "franklin d roosevelt"],
        answer: "Franklin D. Roosevelt, who began by closing every bank for four days." },
      { question: "Which agency employed young men on conservation work? Give the initials.",
        accept: ["ccc"],
        answer: "The CCC — Civilian Conservation Corps." },
      { question: "Which agency transformed one of the poorest regions with dams and electricity? Give the initials.",
        accept: ["tva"],
        answer: "The TVA — Tennessee Valley Authority." },
      { question: "In which year was the Social Security Act?",
        accept: ["1935"],
        answer: "1935, creating American pensions and unemployment insurance." },
      { question: "What were the southern segregation laws called?",
        accept: ["jim crow", "jim crow laws"],
        answer: "Jim Crow laws, upheld by the 'separate but equal' doctrine from 1896." },
      { question: "In which year did the Supreme Court rule segregated schools unconstitutional?",
        accept: ["1954"],
        answer: "1954, in Brown v Board of Education." },
      { question: "How many days did the Montgomery Bus Boycott last?",
        accept: ["381"],
        answer: "381 days, ending when the Supreme Court ruled bus segregation unconstitutional." },
      { question: "Whose arrest began the Montgomery Bus Boycott?",
        accept: ["rosa parks", "parks"],
        answer: "Rosa Parks, an NAACP secretary — a deliberately chosen test case rather than a chance event." },
      { question: "In which year was the Civil Rights Act that outlawed segregation?",
        accept: ["1964"],
        answer: "1964, followed by the Voting Rights Act in 1965." },
      { question: "Roughly how many people attended the March on Washington?",
        accept: ["250000", "250,000"],
        answer: "Around 250,000, where King delivered the 'I Have a Dream' speech." },
      { question: "Which book by Betty Friedan helped launch the women's movement?",
        accept: ["the feminine mystique", "feminine mystique"],
        answer: "The Feminine Mystique, published in 1963." },
      { question: "Explain why the Wall Street Crash turned into a decade-long depression.",
        answer: "Because the crash destroyed borrowed money, not just paper wealth. Shares had been bought on the margin, so when prices collapsed the loans behind them could not be repaid, and thousands of banks failed — taking ordinary people's savings with them. Consumers who had bought cars and appliances on credit stopped spending, so factories cut production and laid workers off, which reduced spending further in a spiral. Farmers were already in trouble from overproduction. Hoover's belief in limited government meant no large federal response for three years, and tariffs intended to protect American industry provoked retaliation that strangled trade. It was the combination of a credit collapse and a slow official response that turned a crash into the Great Depression. (Mark this one yourself.)" },
      { question: "Explain why legal equality was not the same as real equality in 1960s America.",
        answer: "Because the laws of 1964 and 1965 addressed segregation and voting, which were southern legal structures, and most Black Americans in northern cities faced something different: poverty, poor housing, unemployment and hostile policing, none of which any statute banned. Discrimination in housing and hiring continued through practices that were informal but effective. The clearest evidence is the timing — Watts erupted in August 1965, days after the Voting Rights Act was signed, and Detroit followed in 1967. King himself turned towards economic questions in his final years for exactly this reason. Removing legal barriers was necessary and was never going to be sufficient. (Mark this one yourself.)" },
      {
        question: "What was PROHIBITION in the USA?",
        choices: [
          "A ban on the manufacture and sale of alcohol",
          "A ban on immigration",
          "A restriction on stock trading",
          "A limit on farming",
        ],
        accept: [
          "A ban on the manufacture and sale of alcohol",
        ],
        answer: "It created speakeasies, bootlegging and organised crime, and was repealed in 1933 as unenforceable.",
      },
      {
        question: "What caused the Wall Street Crash of 1929?",
        choices: [
          "Overproduction, speculation and buying shares on credit",
          "A foreign invasion",
          "A government ban on trading",
          "A natural disaster",
        ],
        accept: [
          "Overproduction, speculation and buying shares on credit",
        ],
        answer: "When confidence broke, margin buying turned a fall into a collapse and took the banking system with it.",
      },
      {
        question: "What was the New Deal?",
        choices: [
          "Roosevelt's programme of relief, recovery and reform",
          "A trade treaty with Europe",
          "A civil rights law",
          "A military alliance",
        ],
        accept: [
          "Roosevelt's programme of relief, recovery and reform",
        ],
        answer: "Critics said it went too far towards state control; others said it did not go far enough. Rearmament ultimately ended the Depression.",
      },
      {
        question: "What did the Supreme Court decide in Brown v Board of Education in 1954?",
        choices: [
          "Segregated schools were unconstitutional",
          "Segregation should continue",
          "Voting rights were unlimited",
          "Buses could not be segregated",
        ],
        accept: [
          "Segregated schools were unconstitutional",
        ],
        answer: "Enforcement was slow and fiercely resisted, as events at Little Rock in 1957 showed.",
      },
      {
        question: "What was the Montgomery Bus Boycott?",
        choices: [
          "A year-long protest against segregated buses",
          "A single day of marches",
          "A strike by bus drivers",
          "A court case about schools",
        ],
        accept: [
          "A year-long protest against segregated buses",
        ],
        answer: "Triggered by Rosa Parks's arrest, it demonstrated economic pressure as a tactic and brought Martin Luther King to prominence.",
      },
    ],

    misconceptions: [
      { wrong: "\"Everyone prospered in the Roaring Twenties.\"",
        right: "Farmers suffered throughout from overproduction and falling prices, and Black Americans faced segregation in the South and discrimination in the North. The boom was real and partial." },
      { wrong: "\"The New Deal ended the Depression.\"",
        right: "It provided relief and reform, but unemployment was still around 15% in 1938. Rearmament and the Second World War ended mass unemployment." },
      { wrong: "\"Prohibition stopped Americans drinking.\"",
        right: "It reduced consumption somewhat and created a vast illegal industry, organised crime and widespread corruption. It was repealed in 1933 as a failure." },
      { wrong: "\"Rosa Parks was simply a tired woman who refused to move.\"",
        right: "She was a trained NAACP secretary and the case was chosen deliberately as a legal challenge. The 'tired seamstress' version was a story told about her, not by her." },
      { wrong: "\"Martin Luther King led the whole civil rights movement.\"",
        right: "The NAACP's lawyers, SNCC's students, local church networks and countless organisers did the work. King was its most powerful voice, not its only strategy." },
      { wrong: "\"The 1964 and 1965 Acts solved racial inequality.\"",
        right: "They ended legal segregation and voting discrimination. Watts erupted days after the Voting Rights Act, because poverty, housing and policing were untouched." },
    ],
  },

  "history/migration-to-britain": {
    summary:
      "Britain has been made and remade by people arriving for two thousand years — Romans, Saxons, Vikings, Normans, Huguenots, Jews, Caribbeans, South Asians and many more. This thematic study asks why people came, how they were received, and what changed as a result. The single most useful idea in it is that migration is not a modern phenomenon; only the arguments about it feel new.",
    keyFacts: [
      {
        heading: "Medieval and early modern",
        points: [
          "The Romans, Anglo-Saxons, Vikings and Normans all arrived as conquerors and settlers, and English itself is the record of it.",
          "Jewish communities came after 1066, were confined to money-lending because Christians were forbidden to charge interest, faced massacres including York in 1190, and were expelled entirely in 1290.",
          "Flemish weavers were invited by Edward III in the 1330s to improve English cloth-making — migration recruited for economic advantage.",
          "Huguenots, French Protestants, arrived in large numbers after 1685 fleeing persecution; perhaps 50,000 came, bringing silk-weaving and banking skills.",
          "Jews were readmitted under Cromwell in 1656, and small Black and South Asian communities existed in British ports from the sixteenth century onwards.",
        ],
      },
      {
        heading: "The nineteenth century",
        points: [
          "Irish migration was the largest movement, driven by poverty and then by the Famine of 1845–52. By 1861 around 600,000 Irish-born people lived in Britain.",
          "Irish migrants built canals, railways and docks, and faced intense hostility mixed with anti-Catholic prejudice.",
          "Eastern European Jews arrived from the 1880s fleeing pogroms in the Russian Empire, settling especially in London's East End.",
          "The Aliens Act 1905 was Britain's first modern immigration control, aimed largely at Jewish arrivals.",
          "Lascars — South Asian sailors — worked British merchant ships in large numbers and settled in port cities.",
        ],
      },
      {
        heading: "After 1945",
        points: [
          "Post-war Britain had severe labour shortages and actively recruited workers, including for the new NHS and for London Transport.",
          "The British Nationality Act 1948 gave Commonwealth citizens the right to live and work in Britain.",
          "The Empire Windrush arrived in June 1948 carrying around 500 passengers from the Caribbean — a symbolic beginning rather than the first arrival.",
          "Migration from India, Pakistan, Bangladesh and later East Africa followed, including around 27,000 Ugandan Asians expelled by Idi Amin in 1972.",
          "Discrimination was widespread and legal at first — in housing, work and pubs — and the 'colour bar' operated openly.",
          "Race Relations Acts in 1965, 1968 and 1976 progressively outlawed discrimination and created the Commission for Racial Equality.",
        ],
      },
      {
        heading: "Reception, resistance and change",
        points: [
          "Hostility recurred across every period, and its arguments repeated: jobs, housing, disease, crime and culture.",
          "The Notting Hill riots (1958) saw white crowds attack Caribbean residents; the Bristol Bus Boycott (1963) forced the company to end its refusal to employ Black drivers.",
          "Enoch Powell's 1968 speech hardened political debate; the Anti-Nazi League and Rock Against Racism organised against the far right in the late 1970s.",
          "Contributions run through everything: the NHS depended on migrant staff from the start, and food, music, language, business and sport were all reshaped.",
          "Legislation tightened repeatedly — 1962, 1968, 1971 — while anti-discrimination law expanded, and the two trends ran alongside each other.",
          "The Windrush scandal of 2018 showed people who had arrived legally decades earlier being wrongly detained and deported, because records had been destroyed.",
        ],
      },
    ],
    flashcards: [
      { term: "Migration", definition: "The movement of people to live in a new place, whether pushed by danger or pulled by opportunity." },
      { term: "Push and pull factors", definition: "Reasons people leave — war, famine, persecution — and reasons they choose a destination, such as work or family." },
      { term: "Expulsion of the Jews 1290", definition: "Edward I's order removing the entire Jewish population of England, which lasted until 1656." },
      { term: "Huguenots", definition: "French Protestants who fled persecution after 1685, bringing silk-weaving and financial skills." },
      { term: "Irish Famine", definition: "The catastrophe of 1845–52 that drove enormous Irish migration to Britain and America." },
      { term: "Pogrom", definition: "An organised massacre of a minority, especially of Jews in the Russian Empire from the 1880s." },
      { term: "Aliens Act 1905", definition: "Britain's first modern immigration control, aimed largely at Jewish arrivals from eastern Europe." },
      { term: "Lascars", definition: "South Asian sailors who worked on British merchant ships and settled in port cities." },
      { term: "British Nationality Act 1948", definition: "The law giving Commonwealth citizens the right to live and work in Britain." },
      { term: "Empire Windrush", definition: "The ship arriving in June 1948 with around 500 Caribbean passengers — a symbolic beginning of post-war migration." },
      { term: "Colour bar", definition: "The open refusal of jobs, housing or service on grounds of race, legal in Britain until the 1960s." },
      { term: "Bristol Bus Boycott", definition: "The 1963 campaign that forced the bus company to end its refusal to employ Black or Asian drivers." },
      { term: "Race Relations Acts", definition: "The laws of 1965, 1968 and 1976 that progressively outlawed racial discrimination." },
      { term: "Ugandan Asians", definition: "Around 27,000 people expelled by Idi Amin in 1972 who settled in Britain." },
      { term: "Windrush scandal", definition: "The 2018 revelation that people who arrived legally decades earlier were wrongly detained and deported." },
    ],
    examTips: [
      {
        tip: "Show migration is not modern",
        detail:
          "Romans, Saxons, Vikings, Normans, Flemings, Huguenots, Jews and Irish all arrived long before 1948. Establishing the long view reframes every question on this paper.",
      },
      {
        tip: "Use push and pull for every group",
        detail:
          "Huguenots pushed by persecution, pulled by Protestant England. Caribbean migrants pushed by unemployment, pulled by recruitment and citizenship. It works every time.",
      },
      {
        tip: "Note that hostility repeats its arguments",
        detail:
          "Jobs, housing, disease, crime and culture were used against the Irish in 1850 and Caribbeans in 1958. Showing the pattern is a strong analytical point.",
      },
      {
        tip: "Be precise about Windrush",
        detail:
          "It carried around 500 people and was not the first arrival — Black communities existed in British ports for centuries. Its importance is symbolic, and saying so is more accurate.",
      },
      {
        tip: "Track both legal trends together",
        detail:
          "Immigration control tightened in 1962, 1968 and 1971 while anti-discrimination law expanded in 1965, 1968 and 1976. The two running side by side is the story.",
      },
      {
        tip: "Give contributions concretely",
        detail:
          "Huguenot silk-weaving, Irish canals and railways, Caribbean and South Asian staff in the NHS. Named examples beat a general claim about enrichment.",
      },
    ],

    workedExamples: [
      {
        question: "Explain why so many people migrated to Britain after 1945.",
        steps: [
          "Pull: Britain had severe labour shortages after the war and actively recruited abroad, including for the NHS and London Transport.",
          "Legal: the British Nationality Act 1948 gave Commonwealth citizens the right to come, so no permission was needed.",
          "Push: unemployment and limited opportunity in the Caribbean, and later political upheaval such as the expulsion of Ugandan Asians in 1972.",
          "Connection: empire had already created links of language, education and shared institutions, so Britain was a familiar destination.",
          "Chain migration: once communities established themselves, family and friends followed to somewhere with support already in place.",
          "So it was a combination of deliberate recruitment, legal right and pre-existing imperial connection — not an accident.",
        ],
        answer:
          "Because Britain needed workers and actively recruited them, the 1948 Act gave Commonwealth citizens the right to come, and empire had already built the language and institutional links that made Britain a familiar destination. Push factors abroad then supplied the rest.",
      },
      {
        question:
          "Explain why hostility to migrants recurs across different periods.",
        steps: [
          "Competition, real or perceived, over jobs and housing — especially where both were already scarce.",
          "Migrants are visible and easily blamed when conditions are hard, which is why hostility often peaks in downturns.",
          "Religious and racial prejudice: anti-Catholicism against the Irish, antisemitism against Jewish arrivals, racism against Caribbean and South Asian migrants.",
          "Politicians and newspapers have repeatedly amplified it, from the campaigns behind the Aliens Act to Powell's 1968 speech.",
          "The arguments barely change: jobs, housing, disease, crime, culture. The same list appears in 1850, 1905 and 1958.",
          "The analytical point: the consistency of the arguments across such different groups suggests they are about the receiving society rather than about the migrants.",
        ],
        answer:
          "Because the same arguments — jobs, housing, disease, crime, culture — are reused against every group regardless of who they are. That consistency, applied to Irish Catholics, eastern European Jews and Caribbean migrants alike, suggests hostility tells you more about British anxieties at the time than about the people arriving.",
      },
      {
        question:
          "How significant was the Empire Windrush?",
        steps: [
          "Practically: it carried around 500 people, a very small number compared with later arrivals.",
          "It was also not the first — Black and South Asian communities had existed in British ports for centuries.",
          "But symbolically it marked the beginning of large-scale post-war Caribbean migration and was heavily filmed and photographed.",
          "It became the name for a generation and, eventually, for a scandal in 2018 — which shows how a symbol can outlive its facts.",
          "Historians therefore treat it as a marker rather than a turning point in itself.",
          "The wider skill: distinguishing what an event did from what it came to represent.",
        ],
        answer:
          "Symbolically enormous, practically modest. Around 500 people arrived on a ship that was neither the first nor the largest — but it was filmed, remembered, and eventually gave its name to a whole generation and to the 2018 scandal. It marks a change rather than causing one.",
      },
      {
        question:
          "Explain how migration changed Britain, using specific examples.",
        steps: [
          "Economy: Huguenot silk-weaving built Spitalfields; Irish labour built canals, railways and docks; Ugandan Asian families revived struggling high streets.",
          "Public services: the NHS recruited nurses and doctors from the Caribbean and South Asia from its first years and could not have operated without them.",
          "Culture: food, music and language — from Notting Hill Carnival to the vocabulary of everyday English.",
          "Politics and law: the Race Relations Acts exist because of campaigns by migrant communities and their allies.",
          "Population and cities: the character of Bradford, Leicester, Birmingham and much of London was reshaped.",
          "Note also what did not change quickly: discrimination persisted long after it became illegal.",
        ],
        answer:
          "Concretely, and everywhere. Huguenot weaving, Irish railways, Caribbean and South Asian staff in the NHS from its founding, Ugandan Asian businesses reviving high streets, and the food, music and language of modern Britain. The Race Relations Acts themselves exist because migrant communities campaigned for them.",
      },
    ],

    practice: [
      { question: "In which year were Jews expelled from England?",
        accept: ["1290"],
        answer: "1290, by Edward I. They were not readmitted until 1656 under Cromwell." },
      { question: "In which year were Jews readmitted to England?",
        accept: ["1656"],
        answer: "1656, under Oliver Cromwell." },
      { question: "Which French Protestants fled to Britain after 1685?",
        accept: ["huguenots", "the huguenots"],
        answer: "The Huguenots — perhaps 50,000 came, bringing silk-weaving and banking skills." },
      { question: "Which famine drove mass Irish migration from 1845?",
        accept: ["irish famine", "the famine", "the great famine", "potato famine"],
        answer: "The Irish Famine of 1845–52. By 1861 around 600,000 Irish-born people lived in Britain." },
      { question: "What is the term for an organised massacre of a minority, especially Jews in Russia?",
        accept: ["pogrom", "pogroms", "a pogrom"],
        answer: "A pogrom. These drove eastern European Jewish migration from the 1880s." },
      { question: "Which 1905 Act was Britain's first modern immigration control?",
        accept: ["aliens act", "the aliens act", "aliens act 1905"],
        answer: "The Aliens Act 1905, aimed largely at Jewish arrivals from eastern Europe." },
      { question: "What were South Asian sailors on British ships called?",
        accept: ["lascars", "lascar"],
        answer: "Lascars, who settled in British port cities in significant numbers." },
      { question: "Which 1948 Act gave Commonwealth citizens the right to live in Britain?",
        accept: ["british nationality act", "the british nationality act", "nationality act"],
        answer: "The British Nationality Act 1948." },
      { question: "Which ship arrived in June 1948 from the Caribbean?",
        accept: ["empire windrush", "the empire windrush", "windrush"],
        answer: "The Empire Windrush, carrying around 500 passengers." },
      { question: "Roughly how many passengers did the Windrush carry?",
        accept: ["500", "about 500"],
        answer: "Around 500 — small in number, and enormous in symbolism." },
      { question: "What was the open refusal of jobs or housing on racial grounds called?",
        accept: ["colour bar", "the colour bar", "color bar"],
        answer: "The colour bar, which operated openly and legally until the 1960s." },
      { question: "Which 1963 boycott forced a bus company to employ Black and Asian drivers?",
        accept: ["bristol bus boycott", "the bristol bus boycott", "bristol"],
        answer: "The Bristol Bus Boycott, which succeeded after several months." },
      { question: "In which year was the first Race Relations Act?",
        accept: ["1965"],
        answer: "1965, followed by stronger Acts in 1968 and 1976." },
      { question: "Which riots in 1958 saw white crowds attack Caribbean residents in London?",
        accept: ["notting hill", "notting hill riots", "the notting hill riots"],
        answer: "The Notting Hill riots. The Carnival grew partly as a response to them." },
      { question: "Which dictator expelled Uganda's Asian population in 1972?",
        accept: ["idi amin", "amin"],
        answer: "Idi Amin. Around 27,000 of those expelled settled in Britain." },
      { question: "In which year did the Windrush scandal come to public attention?",
        accept: ["2018"],
        answer: "2018, when people who had arrived legally decades earlier were wrongly detained and deported." },
      { question: "Explain why the same arguments against migration recur in every period.",
        answer: "Because they are arguments about the receiving society rather than about the people arriving. Jobs, housing, disease, crime and culture were used against Irish Catholics in the 1850s, against eastern European Jews before the Aliens Act of 1905, and against Caribbean migrants in the 1950s — three groups with almost nothing in common except being new and visible. Hostility tends to rise when housing is short, work is scarce or national confidence is low, which suggests the underlying anxiety is economic and cultural insecurity looking for a target. Noticing that the arguments stay identical while the targets change completely is one of the most useful things this topic teaches. (Mark this one yourself.)" },
      { question: "Explain why immigration control tightened at the same time as anti-discrimination law expanded.",
        answer: "Because they answered two different political pressures at once. Public and press hostility, sharpened by figures like Enoch Powell, pushed governments to restrict who could come — hence the Acts of 1962, 1968 and 1971 progressively removing the rights the 1948 Act had granted. At the same time, campaigns like the Bristol Bus Boycott, and the plain evidence of the colour bar operating openly, made discrimination against people already in Britain politically indefensible — hence the Race Relations Acts of 1965, 1968 and 1976. The logic offered at the time was explicit: limit numbers in order to make integration possible. Whether that was a genuine principle or a way of satisfying opposing groups simultaneously is exactly the kind of question these papers reward you for raising. (Mark this one yourself.)" },
      {
        question: "What are PUSH factors in migration?",
        choices: [
          "Reasons that drive people away from their home country",
          "Attractions of a new country",
          "Government immigration rules",
          "Transport improvements",
        ],
        accept: [
          "Reasons that drive people away from their home country",
        ],
        answer: "War, persecution, famine and poverty push; jobs, safety and family pull. Most migration involves both.",
      },
      {
        question: "Who were the Windrush generation?",
        choices: [
          "Caribbean migrants invited to Britain after 1948",
          "Wartime evacuees",
          "Irish labourers of the 1840s",
          "Huguenot refugees",
        ],
        accept: [
          "Caribbean migrants invited to Britain after 1948",
        ],
        answer: "They were recruited to fill post-war labour shortages, and met both opportunity and significant racism on arrival.",
      },
      {
        question: "Why did many Irish people migrate to Britain in the 1840s?",
        choices: [
          "Famine and extreme poverty",
          "Religious persecution by the Vikings",
          "An invitation from the government",
          "The end of the empire",
        ],
        accept: [
          "Famine and extreme poverty",
        ],
        answer: "They provided labour for canals, railways and construction, and faced considerable hostility and poor conditions.",
      },
      {
        question: "What impact has migration had on British culture?",
        choices: [
          "It has shaped language, food, music and industry over centuries",
          "It has had no lasting effect",
          "It only affected London",
          "It ended in the 20th century",
        ],
        accept: [
          "It has shaped language, food, music and industry over centuries",
        ],
        answer: "Britain has been shaped by migration since before the Romans, which is why the topic is studied across the whole period.",
      },
      {
        question: "Why did the government pass immigration Acts in the 1960s and 1970s?",
        choices: [
          "To restrict entry, partly in response to public and political pressure",
          "To encourage more migration",
          "To join the Commonwealth",
          "To fund new industries",
        ],
        accept: [
          "To restrict entry, partly in response to public and political pressure",
        ],
        answer: "The shift from active recruitment to restriction within twenty years is a key change to be able to explain.",
      },
    ],

    misconceptions: [
      { wrong: "\"Migration to Britain began with the Windrush in 1948.\"",
        right: "Romans, Saxons, Vikings, Normans, Flemings, Huguenots, Jews and Irish all came earlier, and Black communities existed in British ports for centuries." },
      { wrong: "\"The Windrush brought the first Black people to Britain.\"",
        right: "There were Black communities in London, Liverpool, Cardiff and Bristol long before 1948. Windrush is a symbol, not a starting point." },
      { wrong: "\"Post-war migrants came uninvited.\"",
        right: "Britain actively recruited abroad because of severe labour shortages, including for the NHS and London Transport, and the 1948 Act gave Commonwealth citizens the right to come." },
      { wrong: "\"Hostility to migrants is a recent development.\"",
        right: "There were massacres of Jews in 1190, expulsion in 1290, anti-Irish riots in the nineteenth century and the Aliens Act in 1905. Only the vocabulary is new." },
      { wrong: "\"Discrimination ended with the Race Relations Acts.\"",
        right: "The 1965 Act was weak and had to be strengthened in 1968 and 1976, and the Windrush scandal of 2018 showed the consequences continuing into the present." },
      { wrong: "\"Migrants have always been a small part of British history.\"",
        right: "The English language, the monarchy, the NHS and most British cities were shaped by successive waves of arrivals. It is a central thread, not a footnote." },
    ],
  },

  "history/source-skills-and-interpretations": {
    summary:
      "The skills paper. History exams do not only ask what happened — they hand you evidence and ask what it is worth, and they hand you two historians disagreeing and ask you to judge. These skills are worth a large share of the marks, they transfer across every topic you study, and unlike content they cannot be crammed the night before. They can, however, be practised.",
    keyFacts: [
      {
        heading: "Primary and secondary, and why the labels mislead",
        points: [
          "A primary source was produced at the time by someone involved or present. A secondary source was produced later, usually by a historian.",
          "Primary does NOT mean reliable. An eyewitness may lie, misremember, or see only a fraction of what happened.",
          "Secondary does not mean untrustworthy either — a historian with access to archives may understand an event far better than anyone who lived through it.",
          "The same object can be either, depending on the question: a 1960s textbook is a secondary source about the war and a primary source about how the war was taught in the 1960s.",
          "So the useful question is never 'is this primary?' but 'what is this good evidence FOR?'",
        ],
      },
      {
        heading: "Interrogating a source: NOP",
        points: [
          "Nature: what kind of thing is it — a diary, a speech, a photograph, a government report, a cartoon? Each type has its own habits.",
          "Origin: who made it, when, and where? A letter written the same day differs from a memoir written thirty years later.",
          "Purpose: why was it made, and for whom? To persuade, to record, to sell newspapers, to justify a decision afterwards?",
          "Every source is biased in the sense of having a viewpoint. Saying 'this source is biased' on its own earns nothing — the marks are for saying HOW the viewpoint shapes it and what it therefore does and does not tell you.",
          "Content matters too: what does it actually say, what does it leave out, and what does the omission suggest?",
        ],
      },
      {
        heading: "Turning limitations into usefulness",
        points: [
          "The strongest move in source work: a source's weakness for one question is its strength for another.",
          "Nazi propaganda is poor evidence about German public opinion and excellent evidence about what the regime wanted believed.",
          "A hostile account of a strike is weak on what strikers actually did and strong on how employers saw them.",
          "Say what the source is useful FOR rather than dismissing it. 'This tells us little about X but a great deal about Y' is a high-mark sentence.",
          "Use your own knowledge to test the content: does it match what you know from elsewhere, and if not, why might it differ?",
        ],
      },
      {
        heading: "Interpretations, and why historians disagree",
        points: [
          "An interpretation is a historian's argument about the past, not a fact about it.",
          "Historians disagree for identifiable reasons: different evidence available, different questions asked, different weighting of the same evidence, and the concerns of their own time.",
          "New evidence changes things — Soviet archives opened after 1991 reshaped Cold War history substantially.",
          "The purpose matters too: a book written to challenge a popular view will emphasise different things from a general survey.",
          "In an interpretations question, explain WHY the two differ, support each with evidence, and then reach a judgement rather than sitting on the fence.",
        ],
      },
      {
        heading: "Answering the common question types",
        points: [
          "'How useful is Source A...' — NOP, then content, then a judgement about what it is useful for. Never simply 'it is biased so it is not useful'.",
          "'Why do these two interpretations differ?' — different evidence, emphasis, purpose or period of writing. Quote from both.",
          "'How far do you agree with Interpretation B?' — evidence for, evidence against, your own knowledge, then a decision.",
          "'Describe two features of...' — two separate points, each developed with a supporting detail. No introduction needed.",
          "'Explain why...' — several causes with evidence, and ideally a judgement about which mattered most.",
          "Watch the marks and the clock: a 4-mark question does not want three paragraphs, and spending them there costs you a 16-mark answer.",
        ],
      },
    ],
    flashcards: [
      { term: "Primary source", definition: "Evidence produced at the time by someone present or involved — a letter, photograph, object or record." },
      { term: "Secondary source", definition: "An account produced later, usually by a historian working from primary evidence." },
      { term: "Interpretation", definition: "A historian's argument about the past, which can be disagreed with — not a statement of fact." },
      { term: "Provenance", definition: "Where a source came from: who made it, when, where and why." },
      { term: "NOP", definition: "Nature, Origin, Purpose — the three questions to ask of any source before judging it." },
      { term: "Utility", definition: "How useful a source is for a particular question. Always tied to the question, never absolute." },
      { term: "Bias", definition: "A viewpoint that shapes what a source says. Universal, and only worth mentioning if you explain its effect." },
      { term: "Corroboration", definition: "Checking whether other evidence agrees, which strengthens or weakens a source's claims." },
      { term: "Hindsight", definition: "Knowing how things turned out — which the people involved did not, and which can distort our judgement of them." },
      { term: "Contemporary", definition: "Belonging to the time in question. A contemporary account was written then, not afterwards." },
      { term: "Omission", definition: "What a source leaves out — often as revealing as what it includes." },
      { term: "Censorship", definition: "Official control over what may be published, which limits what any source from that state can say." },
    ],
    examTips: [
      {
        tip: "Never write 'this source is biased' and stop",
        detail:
          "Every source has a viewpoint. The marks come from explaining how that viewpoint shapes the content and what it therefore is and isn't good evidence for.",
      },
      {
        tip: "Always tie usefulness to the question asked",
        detail:
          "No source is useful in the abstract. 'Useful for showing what the government wanted people to believe, less useful for what they actually thought' is the shape to aim for.",
      },
      {
        tip: "Use your own knowledge to test the source",
        detail:
          "Say whether it matches what you know from elsewhere. Source questions are testing your knowledge too, and answers that never leave the source stay in the lower bands.",
      },
      {
        tip: "Explain WHY interpretations differ",
        detail:
          "Different evidence, different emphasis, different purpose, different period of writing. Naming the reason is worth far more than describing the difference.",
      },
      {
        tip: "Reach a judgement",
        detail:
          "'There are arguments on both sides' is not a conclusion. Decide, and say what tipped it. Examiners reward a supported decision over balanced indecision.",
      },
      {
        tip: "Match the length to the marks",
        detail:
          "Roughly a minute a mark, including planning. Overwriting a 4-mark question is one of the most common ways to lose marks on a paper you knew well.",
      },
      {
        tip: "Quote briefly from the source",
        detail:
          "A few words anchored to your point beats copying a sentence. Copying eats time and shows nothing except that you can copy.",
      },
    ],

    workedExamples: [
      {
        question:
          "How useful is a 1936 German newspaper photograph of cheering Olympic crowds for studying support for the Nazis?",
        steps: [
          "Nature: a published photograph — an image chosen and cropped, not a neutral record.",
          "Origin: Germany, 1936, so it passed through Goebbels' propaganda ministry.",
          "Purpose: the Berlin Olympics were staged to impress foreign visitors; antisemitic signs were temporarily removed for the occasion.",
          "Content: it does show real people apparently enthusiastic, which is genuine information.",
          "Limitation: under censorship, no photograph showing anything else could have been published — so it cannot tell us how widespread support was.",
          "Turn it round: it is strong evidence of what the regime wanted seen, and of how carefully it managed its international image.",
        ],
        answer:
          "Limited for measuring actual support, because censorship made any other image impossible — the photograph could not have shown dissent even if dissent was everywhere. It is very useful for a different question: what the regime wanted the world to see, and how deliberately it staged it.",
      },
      {
        question:
          "Two historians disagree about whether Haig was a competent commander. Explain why they might differ.",
        steps: [
          "Different evidence: one may rely on the memoirs of soldiers and the diaries of politicians; another on operational records and casualty statistics.",
          "Different emphasis: one weights the first day of the Somme, another the Hundred Days offensive of 1918 that won the war.",
          "Different questions: 'was he humane?' and 'was he effective?' are not the same question and can have different answers.",
          "Different times of writing: the 1960s produced 'lions led by donkeys' in an anti-establishment mood; later historians reacted against it.",
          "Different purposes: a book written to overturn a popular view will emphasise the evidence that popular view ignores.",
          "The judgement: name which reason best explains this particular pair, using their own words.",
        ],
        answer:
          "Because they use different evidence, weight different moments of the war, ask subtly different questions, and write in different periods with different assumptions. Naming which of those explains this specific pair — with a short quotation from each — is what the question is really asking.",
      },
      {
        question:
          "Why is 'this source is biased so it is unreliable' a weak answer?",
        steps: [
          "Every source has a viewpoint, so the observation applies to all of them and distinguishes nothing.",
          "Bias is not the same as being wrong — a partisan account can still be accurate about facts.",
          "It also throws away information: a biased source is reliable evidence of the view it holds.",
          "The stronger move is to explain HOW the viewpoint shapes the content: what it emphasises, what it omits, what language it chooses.",
          "Then say what it is good evidence for, given that shaping.",
          "Finally, test it against your own knowledge and any other sources provided.",
        ],
        answer:
          "Because it is true of every source ever written, so it distinguishes nothing and answers no question. Bias is a reason to ask what a source is good evidence FOR, not a reason to dismiss it — and a partisan source is excellent evidence about the view it holds.",
      },
      {
        question:
          "How should you plan a 16-mark 'how far do you agree' answer in the time available?",
        steps: [
          "Spend two or three minutes planning: jot three points for, two against, and the judgement you intend to reach.",
          "Decide the judgement BEFORE writing. An essay whose conclusion is a surprise to its author reads like one.",
          "Open with your argument in a sentence, not with an introduction that restates the question.",
          "One paragraph per point: claim, evidence, explanation of how the evidence supports the claim.",
          "Include the counter-argument properly rather than as a token sentence — dealing with the strongest opposing point is what pushes an answer up.",
          "Conclude by deciding and saying what tipped it. Roughly a minute a mark overall.",
        ],
        answer:
          "Plan for two or three minutes, fix your judgement first, then argue it: a sentence of argument, three developed points, a genuine counter-argument, and a conclusion that decides and explains why. About a minute a mark, planning included.",
      },
    ],

    practice: [
      { question: "What is a source produced at the time by someone involved called?",
        accept: ["primary", "primary source", "a primary source"],
        answer: "A primary source. Note that primary does not mean reliable." },
      { question: "What is an account written later by a historian called?",
        accept: ["secondary", "secondary source", "a secondary source"],
        answer: "A secondary source, usually built from primary evidence." },
      { question: "What does the N in NOP stand for?",
        accept: ["nature"],
        answer: "Nature — what kind of source is it? A diary, speech, photograph and report each behave differently." },
      { question: "What does the O in NOP stand for?",
        accept: ["origin"],
        answer: "Origin — who made it, when and where." },
      { question: "What does the P in NOP stand for?",
        accept: ["purpose"],
        answer: "Purpose — why it was made, and for whom." },
      { question: "What is the term for where a source came from and who made it?",
        accept: ["provenance"],
        answer: "Provenance. It is usually the most revealing thing about a source." },
      { question: "What is a historian's argument about the past called?",
        accept: ["interpretation", "an interpretation"],
        answer: "An interpretation — something you can disagree with, unlike a fact." },
      { question: "What is the term for checking whether other evidence agrees?",
        accept: ["corroboration", "corroborating"],
        answer: "Corroboration. Agreement across independent sources strengthens a claim considerably." },
      { question: "Is usefulness a fixed property of a source? Answer yes or no.",
        accept: ["no"],
        answer: "No. Usefulness always depends on the question being asked." },
      { question: "What is the term for what a source leaves out?",
        accept: ["omission", "omissions", "an omission"],
        answer: "Omission — often as revealing as what a source includes." },
      { question: "What is the term for judging the past knowing how it turned out?",
        accept: ["hindsight"],
        answer: "Hindsight. It distorts judgement of people who did not know what came next." },
      { question: "Roughly how long should you spend per mark in a History exam?",
        accept: ["1 minute", "a minute", "one minute", "1"],
        answer: "About a minute a mark, including planning time." },
      { question: "Is a 1960s school textbook a primary or secondary source for studying 1960s teaching?",
        accept: ["primary", "primary source"],
        answer: "Primary — it was produced at the time, by someone doing the teaching. The label depends on the question." },
      { question: "Should you copy long quotations from a source into your answer? Answer yes or no.",
        accept: ["no"],
        answer: "No. A few words anchored to your point is enough; copying eats time and demonstrates nothing." },
      { question: "What should a 'how far do you agree' answer end with?",
        accept: ["a judgement", "judgement", "a judgment", "judgment", "a conclusion"],
        answer: "A judgement — a decision, with a reason for it. 'Both sides have a point' is not a conclusion." },
      { question: "Name one reason two historians might reach different conclusions.",
        accept: ["different evidence", "different emphasis", "different purpose", "different questions", "when they wrote", "new evidence", "different time"],
        answer: "Different evidence available, different emphasis, different purposes, or writing in different periods." },
      { question: "Explain why a heavily censored source can still be extremely useful.",
        answer: "Because censorship tells you something reliable even when the content does not. A newspaper published in Nazi Germany cannot tell you what Germans actually thought, since nothing critical could appear — but it is first-rate evidence of what the regime wanted believed, which topics it considered dangerous, and how it wanted to be seen abroad. The limitation defines the question the source can answer rather than removing all value from it. This is the single most useful habit in source work: instead of asking whether a source is reliable, ask what it is reliable evidence FOR, and answer that question instead. (Mark this one yourself.)" },
      { question: "Explain why 'primary sources are more reliable than secondary sources' is wrong.",
        answer: "Because being present is not the same as being right. An eyewitness sees a fraction of an event, may misremember it within days, and often has strong reasons to present it a particular way — a general writing a report on a battle he lost has obvious motives. A historian writing decades later has access to many accounts, to documents nobody at the time could see, and to the outcome, which lets them weigh conflicting evidence against each other. Soviet archives opened after 1991 gave later historians information no contemporary observer could possibly have had. Both types have characteristic strengths and weaknesses, and the useful question is always what a particular source is good evidence for. (Mark this one yourself.)" },
      {
        question: "What does PROVENANCE mean when studying a source?",
        choices: [
          "Who produced it, when, and for what purpose",
          "How long the source is",
          "Whether it is written or visual",
          "Whether it agrees with your view",
        ],
        accept: [
          "Who produced it, when, and for what purpose",
        ],
        answer: "Nature, origin and purpose together decide how useful a source is, and for what particular question.",
      },
      {
        question: "A biased source is:",
        choices: [
          "Still useful, because it reveals what someone believed",
          "Worthless and should be ignored",
          "Always factually wrong",
          "Never used by historians",
        ],
        accept: [
          "Still useful, because it reveals what someone believed",
        ],
        answer: "Saying a source is 'biased so unreliable' scores poorly. Bias is evidence about attitudes, which is often the point.",
      },
      {
        question: "When two interpretations of an event differ, it is usually because:",
        choices: [
          "Historians used different evidence or asked different questions",
          "One historian is lying",
          "The event did not happen",
          "Interpretations are random",
        ],
        accept: [
          "Historians used different evidence or asked different questions",
        ],
        answer: "New evidence, different focus and the historian's own time all shape interpretation. That is normal, not a failure.",
      },
      {
        question: "To judge how USEFUL a source is, you must consider:",
        choices: [
          "Usefulness for a specific enquiry",
          "Whether you like the source",
          "How long ago it was written only",
          "Whether it is famous",
        ],
        accept: [
          "Usefulness for a specific enquiry",
        ],
        answer: "No source is useful in the abstract. A propaganda poster is useless for facts and excellent for studying attitudes.",
      },
      {
        question: "Contextual knowledge is used in source questions to:",
        choices: [
          "Test whether the source fits what you know of the period",
          "Fill space in the answer",
          "Replace the source entirely",
          "Show off dates",
        ],
        accept: [
          "Test whether the source fits what you know of the period",
        ],
        answer: "Bringing in what you know lets you evaluate the source rather than just describe it, which is where the higher marks sit.",
      },
    ],

    misconceptions: [
      { wrong: "\"Primary sources are more reliable than secondary ones.\"",
        right: "Being present is not being right. Eyewitnesses see fragments and have motives; historians see many accounts and later evidence. Neither type is automatically better." },
      { wrong: "\"Saying a source is biased is a good point.\"",
        right: "Every source has a viewpoint, so it distinguishes nothing. The mark is for explaining how that viewpoint shapes the content and what it is therefore good evidence for." },
      { wrong: "\"A biased source is useless.\"",
        right: "A biased source is excellent evidence of the view it holds. Propaganda is poor evidence about opinion and superb evidence about intentions." },
      { wrong: "\"An interpretation is either right or wrong.\"",
        right: "Interpretations are arguments, judged by how well they explain the evidence. Two can both be well-supported while disagreeing." },
      { wrong: "\"Historians disagree because some of them are careless.\"",
        right: "They usually disagree because they have different evidence, ask different questions, weight the same evidence differently, or write in different periods." },
      { wrong: "\"You should stay balanced and avoid picking a side.\"",
        right: "Balance means considering both sides, then deciding. An answer that never reaches a judgement is capped well below one that does." },
    ],
  },

  "history/revision-and-exam-practice": {
    summary:
      "History is the subject where knowing the content is genuinely not enough. You have to select it, shape it into an argument, and do that against the clock in a room where nobody will remind you what the question is asking. This topic covers how to revise a content-heavy subject efficiently, what each command word actually wants, and how to run the exam itself.",
    keyFacts: [
      {
        heading: "Revising a content-heavy subject",
        points: [
          "Rereading notes feels productive and is close to useless. Testing yourself is what builds recall — which is why every topic on this site has practice questions.",
          "Spaced practice beats cramming: the same three hours spread over three weeks produces far better recall than three hours the night before.",
          "Interleave topics rather than blocking. Mixing Weimar with the Cold War is harder and works better than an hour on each in turn.",
          "Build timelines per topic. History marks depend on chronology, and a topic you cannot put in order is a topic you do not know.",
          "Learn a small number of precise facts per topic — dates, figures, names. Ten specifics beat fifty vague impressions.",
          "For each topic, be able to name three causes, three consequences, and one historical debate. That structure fits almost any question you will be asked.",
        ],
      },
      {
        heading: "Command words: what each one wants",
        points: [
          "Describe — say what happened. No analysis needed, and no marks for it either.",
          "Explain why — give causes, developed with evidence. Several, ideally ranked.",
          "How useful / How convincing — source or interpretation analysis with a judgement tied to the specific question.",
          "How far do you agree — argue both sides, then decide. The decision is compulsory.",
          "Write an account / narrative — a structured sequence showing how one thing led to another, not a list of events.",
          "The command word tells you the shape of the answer. Writing an excellent explanation for a describe question earns describe-level marks.",
        ],
      },
      {
        heading: "Structuring answers",
        points: [
          "For explanation paragraphs: point, evidence, explanation of HOW the evidence supports the point, then link back to the question.",
          "Use precise evidence — 'unemployment reached around 6 million by 1932' rather than 'unemployment was very high'.",
          "For essays: a one-sentence argument at the start, developed paragraphs, a genuine counter-argument, and a conclusion that decides.",
          "Deal with the strongest opposing point, not the weakest. Knocking down a straw man impresses nobody.",
          "Signpost with connectives that show reasoning — 'this mattered because', 'however', 'the more significant factor was'.",
          "Never begin by restating the question. It costs a minute and earns nothing.",
        ],
      },
      {
        heading: "Running the exam",
        points: [
          "Roughly a minute a mark, including reading and planning. Write the finish time for each question on the paper before you start.",
          "Overwriting a low-mark question is the most common way to lose marks on a paper you actually knew.",
          "Plan the long answers for two or three minutes. Unplanned essays drift and repeat.",
          "Answer every part. A blank scores zero with certainty; a rushed paragraph rarely does.",
          "If you run short, write your conclusion in note form rather than leaving it out — a judgement in bullet points still shows the judgement.",
          "Leave five minutes to check that you answered the question that was actually asked, which is not always the one you revised for.",
        ],
      },
      {
        heading: "The mistakes that cost most",
        points: [
          "Telling the story instead of answering the question. Narrative is the default and it is almost always the lower band.",
          "Ignoring the command word and writing what you prepared instead.",
          "Vagueness: 'many people' and 'a lot of soldiers' where a figure exists.",
          "Describing an interpretation instead of explaining why it differs from another.",
          "Refusing to reach a judgement, which caps 'how far' answers regardless of quality.",
          "Running out of time on the final question, which is usually the one worth most.",
        ],
      },
    ],
    flashcards: [
      { term: "Retrieval practice", definition: "Testing yourself from memory rather than rereading — the most effective revision method there is." },
      { term: "Spaced practice", definition: "Spreading revision over weeks rather than concentrating it, which produces far better long-term recall." },
      { term: "Interleaving", definition: "Mixing topics within a revision session. It feels harder and works better than studying one at a time." },
      { term: "Command word", definition: "The word telling you what kind of answer is required — describe, explain, how far do you agree." },
      { term: "Chronology", definition: "The order in which things happened. Getting it wrong undermines any causal argument you make." },
      { term: "Causation", definition: "Explaining why something happened, usually with several causes and a judgement about which mattered most." },
      { term: "Significance", definition: "How important something was — measured by how many people it affected, for how long, and how deeply." },
      { term: "Counter-argument", definition: "The strongest case against your position, which a good essay addresses rather than avoids." },
      { term: "Judgement", definition: "A supported decision. Required by 'how far' questions and worth marks that balance alone cannot earn." },
      { term: "Narrative drift", definition: "Sliding into telling the story instead of answering the question — the commonest way to lose marks in History." },
      { term: "Signposting", definition: "Connectives that make your reasoning visible: 'this mattered because', 'however', 'the more significant factor'." },
    ],
    examTips: [
      {
        tip: "Underline the command word and the dates",
        detail:
          "Two seconds, and it prevents the two most expensive mistakes: answering the wrong kind of question, and writing about the wrong period.",
      },
      {
        tip: "Write your finish times on the paper",
        detail:
          "Before you start, work out when each question must be finished. Timing is the difference between a good paper and a good paper with the last answer missing.",
      },
      {
        tip: "Learn ten precise facts per topic",
        detail:
          "Dates, figures, names. '57,000 casualties on the first day of the Somme' does work in an answer that 'very many casualties' cannot.",
      },
      {
        tip: "Prepare three causes and three consequences per topic",
        detail:
          "That structure answers most questions you will meet, and turns revision into something you can actually test yourself on.",
      },
      {
        tip: "Practise under timed conditions",
        detail:
          "Knowing the content and producing it in eighteen minutes are separate skills. The second only improves by doing it with a clock running.",
      },
      {
        tip: "Mark your own work against the mark scheme",
        detail:
          "Exam boards publish them free. Reading what earns each band teaches you more in an hour than rereading notes for five.",
      },
      {
        tip: "Never leave a blank",
        detail:
          "A rushed paragraph scores something; an empty space scores nothing, with certainty. If time is gone, write a note-form conclusion.",
      },
    ],

    workedExamples: [
      {
        question: "How should you revise a topic like Weimar Germany from scratch?",
        steps: [
          "Build a timeline first: 1919 Versailles, 1923 hyperinflation and Munich Putsch, 1924–29 recovery, 1929 Crash, 1933 Hitler appointed. Order before detail.",
          "For each phase, write three causes and three consequences — that is the shape most questions want.",
          "Pick ten precise facts: 2.6% in 1928, 37.3% in July 1932, 6 million unemployed, 30 January 1933.",
          "Test yourself from blank paper. If you cannot produce the timeline without looking, you do not know it yet.",
          "Then attempt past questions under time, and mark them against the published mark scheme.",
          "Return to it three days later and again a fortnight later. That spacing is what moves it into long-term memory.",
        ],
        answer:
          "Timeline first, then three causes and three consequences per phase, then ten precise facts, then blank-paper testing, then timed questions marked against the real mark scheme — revisited after three days and again after a fortnight.",
      },
      {
        question:
          "What is the difference between a describe answer and an explain answer?",
        steps: [
          "Describe asks what happened: two features, each with a supporting detail, no analysis and no introduction.",
          "Explain asks why it happened: causes, each developed with evidence, and ideally ranked.",
          "Example — describe the Munich Agreement: Britain and France accepted German annexation of the Sudetenland in September 1938 in exchange for Hitler's promise of no further demands.",
          "Example — explain why it was signed: fear of another war, military unreadiness, economic constraints after the Depression, and a belief that Versailles had been unjust.",
          "The trap: writing the explain answer for the describe question wastes time you needed elsewhere and earns nothing extra.",
          "Always let the command word set the shape before you write a word.",
        ],
        answer:
          "Describe wants what happened, with supporting detail and no analysis. Explain wants why, with developed causes and evidence. Writing the wrong one is wasted effort — the mark scheme cannot reward analysis on a describe question however good it is.",
      },
      {
        question:
          "You have 16 marks and 20 minutes for 'How far do you agree that the Depression caused Hitler's rise?' How do you use them?",
        steps: [
          "Two minutes planning: three points for, two against, and the judgement you will reach.",
          "Open with the argument: the Depression was the decisive short-term cause, but only because longer-term weaknesses already existed.",
          "For: Nazi votes rose from 2.6% in 1928 to 37.3% in 1932 as unemployment hit 6 million — the correlation is very strong.",
          "For: the recovery had rested on American loans, so the Crash removed Weimar's basis of stability at a stroke.",
          "Against: Versailles and the stab in the back myth had undermined Weimar from 1919, and Article 48 rule had hollowed out democracy before 1933.",
          "Against: Hitler was appointed by a backroom deal, not elected — so conservative miscalculation mattered independently of the Depression.",
          "Conclude by deciding: the Depression was necessary but not sufficient, and say what tipped you.",
        ],
        answer:
          "Two minutes planning, then argue it: the Depression as decisive short-term cause with the vote and unemployment figures, the long-term weaknesses as necessary context, the von Papen deal as an independent factor, and a conclusion that the Depression was necessary but not sufficient.",
      },
      {
        question:
          "Why is telling the story the most common way to lose marks in History?",
        steps: [
          "Narrative is the natural way to talk about the past, so it is what everyone does under pressure.",
          "It also feels like knowledge, because you are producing a great deal of accurate content.",
          "But mark schemes reward selection and argument, so an accurate story with no argument sits in the lower bands.",
          "The fix is structural: every paragraph should start with a point that answers the question, not with a date.",
          "Then use the narrative as evidence FOR that point rather than as the point itself.",
          "A quick test while writing: if a paragraph could be moved into an answer to a different question unchanged, it is narrative rather than argument.",
        ],
        answer:
          "Because narrative is the natural mode and feels like knowledge, while mark schemes reward selection and argument. Start each paragraph with a point rather than a date, and test whether it would fit unchanged into a different question — if it would, it is narrative.",
      },
    ],

    practice: [
      { question: "What is the most effective revision method: rereading or testing yourself?",
        accept: ["testing yourself", "testing", "self testing", "retrieval practice", "self-testing"],
        answer: "Testing yourself — retrieval practice. Rereading feels productive and builds mostly false confidence." },
      { question: "What is the term for spreading revision over weeks rather than cramming?",
        accept: ["spaced practice", "spacing", "spaced repetition"],
        answer: "Spaced practice. The same hours spread out produce far better recall." },
      { question: "What is the term for mixing topics within a revision session?",
        accept: ["interleaving", "interleave"],
        answer: "Interleaving. It feels harder, which is part of why it works better." },
      { question: "Roughly how long should you spend per mark?",
        accept: ["1 minute", "a minute", "one minute", "1"],
        answer: "About a minute a mark, including reading and planning time." },
      { question: "Which command word means 'say what happened' with no analysis needed?",
        accept: ["describe"],
        answer: "Describe. Adding analysis there earns nothing and costs time you needed elsewhere." },
      { question: "Which command word requires a judgement at the end?",
        accept: ["how far do you agree", "how far", "how far do you agree?"],
        answer: "'How far do you agree' — the decision is compulsory, not optional." },
      { question: "What should each paragraph of an explanation answer begin with: a date or a point?",
        accept: ["a point", "point"],
        answer: "A point that answers the question. Starting with a date is how narrative drift begins." },
      { question: "What is the term for sliding into telling the story instead of arguing?",
        accept: ["narrative drift", "narrative", "storytelling"],
        answer: "Narrative drift — the most common way to lose marks in History." },
      { question: "Should you address the strongest or the weakest counter-argument?",
        accept: ["strongest", "the strongest"],
        answer: "The strongest. Defeating a weak objection impresses nobody and shows nothing." },
      // "Roughly" is doing real work here, not softening the wording. The
      // checker refuses accept lists containing two genuinely different
      // numbers, because that is how a wrong answer once got marked right —
      // and it only relaxes that for questions whose wording admits several
      // answers. Which this one honestly does: two minutes or three are both
      // sensible, and pretending there is a single correct figure would be a
      // worse question as well as a failing one.
      { question: "Roughly how many minutes should you spend planning a 16-mark essay?",
        accept: ["2", "3", "2-3", "two", "three", "2 to 3"],
        answer: "Two or three. Unplanned essays drift, repeat themselves and rarely reach a judgement." },
      { question: "If you run out of time, should you leave a blank or write notes?",
        accept: ["write notes", "notes", "write in notes", "note form"],
        answer: "Write notes. A note-form conclusion still shows the judgement; a blank scores zero with certainty." },
      { question: "How many precise facts should you aim to learn per topic?",
        accept: ["10", "ten", "about 10"],
        answer: "Around ten — dates, figures and names. Specifics do work that vague impressions cannot." },
      { question: "Where can you find the criteria examiners use to award each band?",
        accept: ["mark scheme", "the mark scheme", "mark schemes"],
        answer: "The mark scheme, published free by every exam board." },
      { question: "What should you underline first when you read a question?",
        accept: ["command word", "the command word", "command word and dates"],
        answer: "The command word — and the dates. Two seconds that prevent the two most expensive mistakes." },
      { question: "Should an essay begin by restating the question? Answer yes or no.",
        accept: ["no"],
        answer: "No. It costs a minute and earns nothing. Open with your argument instead." },
      { question: "Name one thing worth preparing for every topic besides the facts.",
        accept: ["timeline", "causes", "consequences", "a debate", "historical debate", "three causes", "interpretations"],
        answer: "A timeline, three causes, three consequences, and one historical debate — that structure fits almost any question." },
      { question: "Explain why rereading notes is such an ineffective way to revise History.",
        answer: "Because it produces the feeling of knowing without the ability to retrieve. Reading a page you have read before is easy and familiar, and your brain reads that fluency as understanding — which is why people close their notes feeling confident and then find the exam paper blank. Retrieval is a different skill from recognition, and the exam only tests retrieval. Testing yourself from blank paper is uncomfortable precisely because it exposes what you cannot yet produce, which is the information you actually needed. In History it matters even more than in other subjects, because you have to produce dates, figures and names from memory to support an argument, and vague recollection cannot do that job. (Mark this one yourself.)" },
      { question: "Explain why the command word matters as much as the content.",
        answer: "Because mark schemes are written around it, and they cannot reward what they are not looking for. A describe question awards marks for features with supporting detail — write a brilliant analysis of causes and the examiner has nothing to give you for it, because that is not what the criteria describe. A 'how far do you agree' question caps answers that never reach a judgement, however well informed they are. Students who lose marks on this rarely lack knowledge; they answer the question they revised for rather than the one printed. Underlining the command word before writing takes two seconds and is one of the highest-value habits available in the whole exam. (Mark this one yourself.)" },
      {
        question: "A question asking 'how far do you agree' requires:",
        choices: [
          "A balanced argument and a clear judgement",
          "One side of the argument only",
          "A list of dates",
          "A description of events",
        ],
        accept: [
          "A balanced argument and a clear judgement",
        ],
        answer: "The judgement must be supported by the argument, not simply announced at the end.",
      },
      {
        question: "In a source utility question, the strongest answers:",
        choices: [
          "Use provenance and contextual knowledge together",
          "Say the source is biased and stop",
          "Describe what the source shows",
          "Compare the source to a textbook",
        ],
        accept: [
          "Use provenance and contextual knowledge together",
        ],
        answer: "Nature, origin and purpose, tested against what you know of the period, is the formula that reaches the top band.",
      },
      {
        question: "Why is precise factual detail important in history essays?",
        choices: [
          "Named events, people and dates support and prove your argument",
          "Examiners count the facts",
          "It fills the page",
          "It replaces the need for an argument",
        ],
        accept: [
          "Named events, people and dates support and prove your argument",
        ],
        answer: "A general claim with a specific example beats a general claim alone every time.",
      },
      {
        question: "When explaining causes, a strong answer will:",
        choices: [
          "Show how causes link and which mattered most",
          "List causes separately",
          "Give only one cause",
          "Describe the consequences",
        ],
        accept: [
          "Show how causes link and which mattered most",
        ],
        answer: "Prioritising causes and explaining the connections between them is what separates the top band from the middle.",
      },
      {
        question: "How should you allocate time in a history exam?",
        choices: [
          "In proportion to the marks each question carries",
          "Equally to every question",
          "Most time on the first question",
          "Most time on the topics you enjoy",
        ],
        accept: [
          "In proportion to the marks each question carries",
        ],
        answer: "Over-writing an 8-mark answer at the expense of a 16-mark one is the most expensive mistake available.",
      },
    ],

    misconceptions: [
      { wrong: "\"Rereading my notes is revision.\"",
        right: "It builds familiarity, which feels like knowledge and is not. Retrieving from blank paper is what makes information available under exam conditions." },
      { wrong: "\"Writing more gets more marks.\"",
        right: "Marks come from relevance and argument. Overwriting a 4-mark question is one of the commonest ways to lose marks on a paper you knew well." },
      { wrong: "\"Balanced means not choosing a side.\"",
        right: "Balance means considering both sides and then deciding. 'How far' questions cap answers that never reach a judgement." },
      { wrong: "\"Knowing the content is enough.\"",
        right: "History marks selection, argument and judgement. An accurate narrative with no argument sits in the lower bands however much detail it contains." },
      { wrong: "\"Past papers are for the last week before the exam.\"",
        right: "They are the most efficient revision there is, and marking your own against the mark scheme teaches you what each band actually requires." },
      { wrong: "\"If I run out of time I should leave the last question.\"",
        right: "The last question is usually worth the most. A note-form conclusion scores something; a blank guarantees zero." },
    ],
  },

};
