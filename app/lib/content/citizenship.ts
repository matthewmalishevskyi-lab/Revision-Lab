// CITIZENSHIP — Year 9 being written. Year 10 planned, not yet written.
//
// ⚠️ NOT A TIERED SUBJECT. Citizenship Studies is not split into Foundation and
// Higher — everyone sits the same paper — so `higherOnly` must never appear in
// this file. There is a check that enforces it.
//
// ⚠️ THIS SUBJECT DATES FASTER THAN ANY OTHER ON THE SITE. Governments change,
// laws are amended, treaties are signed and left. Where a figure or a current
// arrangement appears below it is marked as something to check rather than
// quoted as permanent. Named office-holders are avoided entirely for the same
// reason — a revision site that confidently names last year's Prime Minister is
// worse than one that does not name anyone.
//
// ⚠️ POLITICAL BALANCE. Citizenship asks students to evaluate genuinely
// contested questions — voting systems, the monarchy, rights versus security.
// The content below sets out the arguments on each side as fairly as it can and
// does NOT tell the student which to prefer. That is both the honest approach
// and what mark schemes reward: examiners want a supported judgement, not
// agreement with the author.
//
// ⚠️ Boards differ. AQA and Edexcel both offer GCSE Citizenship Studies and
// divide the content differently. Check against your own specification.

import type { TopicContent } from "./index";

export const CITIZENSHIP: Record<string, TopicContent> = {
  "citizenship/identity-and-diversity": {
    summary:
      "Citizenship starts with a question that sounds simple and is not: who belongs, and who decides? This topic covers what a citizen legally is, how identity is made up of many overlapping parts, why the UK is a diverse society, and the arguments people actually make about immigration and integration — set out fairly on both sides, because that is what the exam asks for.",
    keyFacts: [
      {
        heading: "What a citizen is",
        points: [
          "A CITIZEN is a legally recognised member of a state, with rights and responsibilities attached.",
          "British citizenship can come from birth, from descent, from naturalisation, or from registration.",
          "NATURALISATION usually requires lawful residence, a knowledge of English, and passing the Life in the UK test.",
          "Citizenship brings the right to a UK passport, to vote in general elections, and to stand for election.",
          "Not everyone living in the UK is a citizen — residents, refugees and visitors have different legal statuses.",
          "The exact requirements change with government policy, so check current rules rather than quoting a figure.",
        ],
      },
      {
        heading: "Identity",
        points: [
          "IDENTITY is how a person sees themselves, and it has many overlapping parts at once.",
          "Those parts can include nationality, ethnicity, religion, language, region, gender, age, class and interests.",
          "Identity is not fixed — it changes over a life, and people can hold several national identities together.",
          "Someone may feel British, Scottish, Muslim and Glaswegian simultaneously without contradiction.",
          "MULTIPLE IDENTITIES is the technical term for this, and it is a favourite exam idea.",
        ],
      },
      {
        heading: "A diverse society",
        points: [
          "The UK is a MULTICULTURAL society, containing many ethnic, religious and cultural groups.",
          "Migration has shaped Britain for centuries — Roman, Saxon, Norman, Huguenot, Irish, Jewish, Caribbean, South Asian, Eastern European and many more.",
          "Post-war migration was actively encouraged to rebuild the economy and staff the new NHS.",
          "The WINDRUSH generation, invited from the Caribbean from 1948, is the standard named example.",
          "Census data on ethnicity and religion is collected every ten years, and the most recent figures should be looked up rather than assumed.",
        ],
      },
      {
        heading: "Integration, and the debate",
        points: [
          "INTEGRATION means different groups living together while keeping their own identities.",
          "ASSIMILATION means minority groups adopting the majority culture and giving up their own — a different and more contested idea.",
          "Arguments made FOR immigration: filling skill shortages, paying taxes, staffing public services, cultural enrichment, and an ageing population needing workers.",
          "Arguments made AGAINST: pressure on housing, schools and health services, competition for jobs and wages, and concerns about the pace of cultural change.",
          "Both sides are held sincerely by large numbers of people, and an exam answer is expected to present both before reaching a judgement.",
          "COMMUNITY COHESION means people from different backgrounds getting on well together, which schools, councils and charities all work on.",
        ],
      },
    ],
    flashcards: [
      { term: "Citizen", definition: "A legally recognised member of a state, with rights and responsibilities attached." },
      { term: "Naturalisation", definition: "The legal process by which someone who was not born a citizen becomes one." },
      { term: "Identity", definition: "How a person sees themselves, made up of many overlapping parts at once." },
      { term: "Multiple identities", definition: "Holding several identities together, such as being British, Welsh and Sikh at the same time." },
      { term: "Multicultural society", definition: "A society containing many ethnic, religious and cultural groups living together." },
      { term: "Diversity", definition: "The range of different backgrounds, beliefs and characteristics present in a society." },
      { term: "Migration", definition: "The movement of people to live in a different place, either into or out of a country." },
      { term: "Immigration", definition: "People moving into a country to live there." },
      { term: "Emigration", definition: "People leaving a country to live somewhere else." },
      { term: "Windrush generation", definition: "People invited from the Caribbean to Britain from 1948 to help rebuild after the war." },
      { term: "Integration", definition: "Different groups living together in one society while keeping their own identities." },
      { term: "Assimilation", definition: "Minority groups adopting the majority culture and giving up their own — distinct from integration." },
      { term: "Community cohesion", definition: "People from different backgrounds getting on well together in a shared community." },
      { term: "Asylum seeker", definition: "Someone who has applied for protection in another country because of danger at home." },
      { term: "Refugee", definition: "Someone whose claim for protection has been accepted, or who has fled danger in their own country." },
      { term: "Census", definition: "The national survey of the population, carried out every ten years in the UK." },
    ],
    examTips: [
      {
        tip: "Integration and assimilation are NOT the same word",
        detail:
          "Integration keeps distinct identities; assimilation replaces them. Examiners test this distinction directly and it is easy to score.",
      },
      {
        tip: "Give both sides of the immigration debate",
        detail:
          "An answer presenting only one side cannot reach the top band, whatever you personally think. State the strongest version of each argument.",
      },
      {
        tip: "Then reach a judgement",
        detail:
          "Evaluate questions want a conclusion with a reason. 'Both sides have a point' is not a judgement and scores poorly.",
      },
      {
        tip: "Use a named example",
        detail:
          "Windrush, or a named local community group. Specific examples turn a general answer into a strong one.",
      },
      {
        tip: "Not everyone in the UK is a citizen",
        detail:
          "Residents, refugees, asylum seekers and visitors all have different legal statuses and different rights. Questions exploit that.",
      },
      {
        tip: "Avoid quoting figures you cannot date",
        detail:
          "Population and migration numbers change every year. Say 'according to the most recent census' rather than stating an unsourced number.",
      },
    ],
    practice: [
      {
        question: "What is the legal term for a recognised member of a state with rights and responsibilities?",
        accept: ["citizen", "a citizen", "citizenship"],
        answer:
          "A citizen. Not everyone living in a country is a citizen — residents, refugees and visitors have different legal statuses and different rights.",
      },
      {
        question: "What is the process by which someone not born a citizen becomes one called?",
        accept: ["naturalisation", "naturalization", "naturalised"],
        answer:
          "Naturalisation. It usually requires lawful residence, English language ability and passing the Life in the UK test, though the exact rules change with policy.",
      },
      {
        question: "What is the term for holding several identities at once, such as British, Welsh and Sikh?",
        accept: ["multiple identities", "multiple identity", "several identities"],
        answer:
          "Multiple identities. They do not conflict — a person can hold national, religious, regional and personal identities together without contradiction.",
      },
      {
        question: "What word describes a society containing many ethnic, religious and cultural groups?",
        accept: ["multicultural", "multiculturalism", "a multicultural society", "diverse"],
        answer:
          "Multicultural. The UK has been shaped by migration for centuries — Roman, Norman, Huguenot, Irish, Caribbean, South Asian and many others.",
      },
      {
        question: "What is the term for different groups living together while KEEPING their own identities?",
        accept: ["integration", "integrating"],
        answer:
          "Integration. Assimilation is the different idea that minority groups should give up their own culture and adopt the majority's.",
      },
      {
        question: "What is the term for minority groups giving up their culture and adopting the majority's?",
        accept: ["assimilation", "assimilating"],
        answer:
          "Assimilation. It is far more contested than integration, and confusing the two is a common way to lose a mark.",
      },
      {
        question: "In which year did the Empire Windrush arrive, beginning post-war Caribbean migration? Give the number only.",
        accept: ["1948"],
        answer:
          "1948. The Windrush generation were invited to help rebuild Britain after the war and to staff the newly created NHS.",
      },
      {
        question: "What is the name of the national population survey carried out every ten years?",
        accept: ["census", "the census"],
        answer:
          "The census. It is the main source of data on ethnicity, religion and language in the UK — look up the most recent figures rather than assuming.",
      },
      {
        question: "What is someone called who has applied for protection in another country but not yet been accepted?",
        accept: ["asylum seeker", "an asylum seeker"],
        answer:
          "An asylum seeker. Once the claim is accepted they become a refugee, which carries different legal rights.",
      },
      {
        question: "What is the term for people from different backgrounds getting on well together?",
        accept: ["community cohesion", "cohesion", "social cohesion"],
        answer:
          "Community cohesion. Schools, councils and charities all run programmes aimed at building it.",
      },
      {
        question: "Name one right that comes with British citizenship but not with being a visitor.",
        accept: ["vote", "voting", "passport", "stand for election", "uk passport", "right to vote", "live permanently"],
        answer:
          "The right to vote in general elections, to hold a UK passport, and to stand for election. Legal status determines which rights a person has.",
      },
      {
        question: "Give one argument made IN FAVOUR of immigration.",
        accept: ["skills", "fills skill shortages", "taxes", "nhs staff", "cultural enrichment", "ageing population", "workers", "economy", "public services"],
        answer:
          "Filling skill shortages, paying taxes, staffing public services such as the NHS, cultural enrichment, and supporting an ageing population.",
      },
      {
        question: "Give one argument made AGAINST high levels of immigration.",
        accept: ["pressure on housing", "housing", "schools", "public services", "jobs", "wages", "pace of change", "nhs pressure", "competition for jobs"],
        answer:
          "Pressure on housing, schools and health services, competition for jobs and wages, and concerns about the pace of cultural change. Both sides are held sincerely.",
      },
      {
        question: "True or false: everyone living in the UK is a British citizen.",
        accept: ["false", "f"],
        answer:
          "False. Residents, refugees, asylum seekers, students and visitors all live here under different legal statuses with different rights.",
      },
      {
        question: "Explain what is meant by multiple identities, using an example. Write two or three sentences.",
        answer:
          "Multiple identities means that a person's sense of who they are is made up of several parts at once, rather than one single label. Someone might feel British by nationality, Scottish by nation, Muslim by faith and Glaswegian by city, all at the same time and without any conflict between them. Which part feels most important can also change depending on the situation — at an international football match, or at a religious festival, a different part may come to the front. Mark this one yourself: credit yourself for saying identities coexist AND for a concrete example.",
      },
      {
        question: "Discuss the arguments for and against high levels of immigration to the UK.",
        answer:
          "In favour: migrants fill skill shortages in sectors such as healthcare, agriculture and construction where employers cannot recruit locally; they pay taxes that fund public services; and with an ageing population there are fewer working-age people to support pensioners, which migration partly offsets. Cultural and economic enrichment is also frequently cited. Against: rapid population growth puts pressure on housing, school places and GP appointments, particularly in areas where investment has not kept pace; some argue it increases competition for lower-paid jobs and holds down wages; and others are concerned about the speed of cultural change in particular communities. Both positions are held sincerely by large numbers of people. A reasonable judgement is that the effects depend heavily on the pace of migration and on whether housing and services are expanded alongside it, rather than immigration being simply good or bad in itself. Mark this one yourself: full marks need genuine arguments on both sides AND a supported conclusion — not agreement with any particular view.",
      },
    ],
    misconceptions: [
      {
        wrong: "Integration and assimilation mean the same thing.",
        right:
          "Integration means living together while keeping your own identity. Assimilation means giving that identity up. They describe different outcomes.",
      },
      {
        wrong: "Everyone living in the UK is a citizen.",
        right:
          "Citizenship is a specific legal status. Residents, refugees, asylum seekers and visitors all have different rights.",
      },
      {
        wrong: "A person can only really have one identity.",
        right:
          "Most people hold several at once — national, regional, religious, personal — and which feels most important varies by situation.",
      },
      {
        wrong: "Migration to Britain is a recent phenomenon.",
        right:
          "It has shaped Britain for two thousand years, from Roman and Saxon settlement to the Huguenots, the Irish, Windrush and beyond.",
      },
      {
        wrong: "An asylum seeker and a refugee are the same thing.",
        right:
          "An asylum seeker has applied for protection; a refugee has had that claim accepted. The legal rights differ.",
      },
    ],
  },

  "citizenship/rights-and-responsibilities": {
    summary:
      "Rights are the things you are entitled to; responsibilities are what you owe in return. This topic covers where rights come from, the difference between a human right and a legal right, the main UK equality and rights laws, and the genuinely difficult question of what happens when two people's rights collide.",
    keyFacts: [
      {
        heading: "Types of right",
        points: [
          "HUMAN RIGHTS belong to everyone simply for being human — they are universal and cannot be earned or removed by good behaviour.",
          "LEGAL RIGHTS are given by the law of a particular country, so they vary from place to place.",
          "MORAL rights are what people believe is right, whether or not the law agrees.",
          "ABSOLUTE rights, such as freedom from torture, can never be limited under any circumstances.",
          "LIMITED and QUALIFIED rights, such as freedom of expression, can be restricted for reasons like public safety.",
          "RESPONSIBILITIES are duties owed in return: obeying the law, paying tax, jury service, respecting others' rights.",
        ],
      },
      {
        heading: "Where rights come from",
        points: [
          "The UNIVERSAL DECLARATION OF HUMAN RIGHTS was adopted by the United Nations in 1948, after the Second World War.",
          "It is a declaration rather than a law, so it sets a standard but cannot itself be enforced in court.",
          "The EUROPEAN CONVENTION ON HUMAN RIGHTS was drawn up in 1950; the UK helped write it.",
          "The HUMAN RIGHTS ACT 1998 brought the Convention into UK law, so cases can be heard in UK courts.",
          "The UN CONVENTION ON THE RIGHTS OF THE CHILD sets out rights specific to under-18s, including education, protection and being heard.",
          "The MAGNA CARTA of 1215 is the traditional starting point for the idea that even a ruler is bound by law.",
        ],
      },
      {
        heading: "Equality law in the UK",
        points: [
          "The EQUALITY ACT 2010 makes discrimination unlawful and brought many earlier laws together into one.",
          "It defines PROTECTED CHARACTERISTICS: age, disability, gender reassignment, marriage and civil partnership, pregnancy and maternity, race, religion or belief, sex, and sexual orientation.",
          "DIRECT discrimination is treating someone worse because of a protected characteristic.",
          "INDIRECT discrimination is a rule that applies to everyone but disadvantages one group without good reason.",
          "Employers must make REASONABLE ADJUSTMENTS for disabled people.",
          "Cases can be taken to an employment tribunal or a county court, depending on the situation.",
        ],
      },
      {
        heading: "When rights conflict",
        points: [
          "Rights regularly clash, and resolving the clash is what most exam questions are really about.",
          "Freedom of expression versus protection from hate speech and harassment.",
          "Privacy versus press freedom, or versus national security and surveillance.",
          "The right to protest versus other people's right to go about their business.",
          "Courts weigh competing rights and decide what is PROPORTIONATE in the circumstances.",
          "There is rarely a single right answer, which is exactly why examiners ask for a supported judgement rather than a fact.",
        ],
      },
    ],
    flashcards: [
      { term: "Human rights", definition: "Rights belonging to everyone simply for being human, which cannot be earned or forfeited." },
      { term: "Legal rights", definition: "Rights granted by the law of a particular country, which vary from place to place." },
      { term: "Absolute right", definition: "A right that can never be restricted, such as freedom from torture." },
      { term: "Qualified right", definition: "A right that can be limited for reasons such as public safety or the rights of others." },
      { term: "Responsibility", definition: "A duty owed in return for rights, such as obeying the law or paying tax." },
      { term: "Universal Declaration of Human Rights", definition: "The UN statement of human rights adopted in 1948, which sets a standard but is not itself enforceable law." },
      { term: "European Convention on Human Rights", definition: "The 1950 treaty setting out rights across Europe, which the UK helped to write." },
      { term: "Human Rights Act 1998", definition: "The UK law bringing the European Convention into domestic law so cases can be heard here." },
      { term: "Magna Carta", definition: "The 1215 charter establishing that even the ruler is bound by the law." },
      { term: "Equality Act 2010", definition: "The UK law making discrimination unlawful and defining the protected characteristics." },
      { term: "Protected characteristic", definition: "A ground on which discrimination is unlawful, such as race, sex, age or disability." },
      { term: "Direct discrimination", definition: "Treating someone worse because of a protected characteristic." },
      { term: "Indirect discrimination", definition: "A rule applying to everyone that unfairly disadvantages one group without good reason." },
      { term: "Reasonable adjustment", definition: "A change an employer or service must make so a disabled person is not disadvantaged." },
      { term: "Proportionate", definition: "A restriction that goes no further than necessary to achieve a legitimate aim." },
      { term: "UN Convention on the Rights of the Child", definition: "The international agreement setting out rights specific to people under 18." },
    ],
    examTips: [
      {
        tip: "Know the difference between a declaration and an Act",
        detail:
          "The Universal Declaration sets a standard; the Human Rights Act 1998 is enforceable in UK courts. That distinction is examined directly.",
      },
      {
        tip: "Learn a few protected characteristics precisely",
        detail:
          "Race, sex, age, disability, religion or belief, sexual orientation. Naming them exactly is worth more than a vague gesture at 'discrimination'.",
      },
      {
        tip: "Direct versus indirect discrimination",
        detail:
          "Direct treats you worse for who you are. Indirect is a neutral-looking rule that disadvantages one group. Questions describe a scenario and expect you to classify it.",
      },
      {
        tip: "Rights conflict — say whose, and how",
        detail:
          "Name both rights, explain the clash, and then judge which should prevail here and why. That structure earns the top band.",
      },
      {
        tip: "Absolute rights cannot be limited at all",
        detail:
          "Freedom from torture is the standard example. Most rights, including free expression, are qualified and can be restricted proportionately.",
      },
      {
        tip: "Pair a right with its responsibility",
        detail:
          "The right to a fair trial comes with jury service; the right to public services comes with paying tax. Examiners like the pairing.",
      },
    ],
    practice: [
      {
        question: "What type of rights belong to everyone simply for being human?",
        accept: ["human rights", "human right", "universal rights"],
        answer:
          "Human rights. They cannot be earned by good behaviour or removed for bad, which is exactly what makes them different from legal rights.",
      },
      {
        question: "In which year was the Universal Declaration of Human Rights adopted? Give the number only.",
        accept: ["1948"],
        answer:
          "1948, by the United Nations after the Second World War. It is a declaration, so it sets a standard but is not itself enforceable in court.",
      },
      {
        question: "Which UK Act brought the European Convention on Human Rights into domestic law?",
        accept: ["human rights act", "human rights act 1998", "the human rights act"],
        answer:
          "The Human Rights Act 1998. Before it, a case had to go to the European Court in Strasbourg; afterwards it could be heard in a UK court.",
      },
      {
        question: "In which year was the Human Rights Act passed? Give the number only.",
        accept: ["1998"],
        answer:
          "1998. It made Convention rights directly enforceable in UK courts, which is the key practical difference it made.",
      },
      {
        question: "Which 1215 charter established that even the ruler is bound by the law?",
        accept: ["magna carta", "the magna carta"],
        answer:
          "Magna Carta. It is the traditional starting point for the idea that power itself has legal limits.",
      },
      {
        question: "Which UK Act makes discrimination unlawful and defines protected characteristics?",
        accept: ["equality act", "equality act 2010", "the equality act"],
        answer:
          "The Equality Act 2010. It brought together many earlier anti-discrimination laws into a single Act.",
      },
      {
        question: "Name one protected characteristic under the Equality Act 2010.",
        accept: ["age", "disability", "race", "sex", "religion", "sexual orientation", "gender reassignment", "pregnancy", "marriage", "belief", "maternity"],
        answer:
          "Age, disability, gender reassignment, marriage and civil partnership, pregnancy and maternity, race, religion or belief, sex, or sexual orientation.",
      },
      {
        question: "What is it called when someone is treated worse specifically because of a protected characteristic?",
        accept: ["direct discrimination", "direct"],
        answer:
          "Direct discrimination. Indirect discrimination is different: a rule that applies to everyone but unfairly disadvantages one group.",
      },
      {
        question: "What is it called when a rule applies to everyone but unfairly disadvantages one group?",
        accept: ["indirect discrimination", "indirect"],
        answer:
          "Indirect discrimination. It can be lawful if the employer can show it is a proportionate way of achieving a legitimate aim.",
      },
      {
        question: "What is the term for a change an employer must make so a disabled person is not disadvantaged?",
        accept: ["reasonable adjustment", "reasonable adjustments", "adjustment"],
        answer:
          "A reasonable adjustment. Examples include adapting equipment, changing working hours, or making a building accessible.",
      },
      {
        question: "What type of right can NEVER be restricted under any circumstances?",
        accept: ["absolute", "an absolute right", "absolute right", "absolute rights"],
        answer:
          "An absolute right — freedom from torture is the standard example. Most rights, including free expression, are qualified and can be limited proportionately.",
      },
      {
        question: "Which international agreement sets out rights specific to people under 18?",
        accept: ["un convention on the rights of the child", "uncrc", "convention on the rights of the child", "rights of the child"],
        answer:
          "The UN Convention on the Rights of the Child. It covers education, protection from harm, and the right to be heard in decisions affecting them.",
      },
      {
        question: "Name one responsibility that comes with living in the UK.",
        accept: ["obey the law", "pay tax", "jury service", "respect others", "obeying the law", "paying taxes", "vote", "respect rights"],
        answer:
          "Obeying the law, paying tax, serving on a jury when called, and respecting other people's rights. Rights and responsibilities are usually paired.",
      },
      {
        question: "What word describes a restriction that goes no further than necessary to achieve a legitimate aim?",
        accept: ["proportionate", "proportionality", "proportional"],
        answer:
          "Proportionate. It is the test courts apply when two rights conflict and one has to give way to the other.",
      },
      {
        question: "Explain the difference between an absolute right and a qualified right, with an example of each. Write two or three sentences.",
        answer:
          "An absolute right can never be restricted, whatever the circumstances — freedom from torture is the clearest example, and no emergency or public interest can justify overriding it. A qualified right can be limited where there is a legitimate reason and the restriction is proportionate; freedom of expression is qualified, which is why laws against incitement to violence or harassment are lawful. The difference matters because most rights disputes are about whether a restriction on a qualified right went further than necessary. Mark this one yourself: both definitions and one example each is full marks.",
      },
      {
        question: "Discuss what should happen when freedom of expression conflicts with protection from hate speech.",
        answer:
          "Freedom of expression is fundamental to democracy: people must be able to criticise the government, challenge popular opinion and hold power to account, and a society that punishes unpopular speech tends not to stay free for long. Against that, speech which incites violence or targets people for a protected characteristic causes real harm — it can make groups fearful of using public spaces and, at the extreme, contributes to violence. UK law resolves this by treating expression as a QUALIFIED right: it can be restricted, but only where the restriction is proportionate and serves a legitimate aim such as public safety. The genuinely difficult cases are the ones in the middle, where speech is offensive but not threatening, and reasonable people disagree about where the line sits. A defensible judgement is that restriction should be reserved for speech that incites harm rather than speech that merely offends, since offence is subjective and using it as a test hands too much power to whoever is most easily offended. Mark this one yourself: full marks need both rights taken seriously, the qualified-right framework, and a reasoned line — not simply choosing a side.",
      },
    ],
    misconceptions: [
      {
        wrong: "Human rights can be taken away from someone who breaks the law.",
        right:
          "Human rights belong to everyone, including prisoners. Some qualified rights can be restricted, but they are not forfeited by bad behaviour.",
      },
      {
        wrong: "The Universal Declaration of Human Rights is a law you can be prosecuted under.",
        right:
          "It is a declaration setting a standard. In the UK it is the Human Rights Act 1998 that makes Convention rights enforceable in court.",
      },
      {
        wrong: "Freedom of expression means you can say anything at all.",
        right:
          "It is a QUALIFIED right. Incitement to violence, harassment and some hate speech are unlawful because the restriction is proportionate.",
      },
      {
        wrong: "Discrimination is only unlawful if it was intended.",
        right:
          "Indirect discrimination can be unlawful even with no intent, if a neutral rule disadvantages a group without proportionate justification.",
      },
      {
        wrong: "Rights and responsibilities are unrelated ideas.",
        right:
          "They are usually paired: the right to a fair trial depends on others doing jury service, and public services depend on people paying tax.",
      },
    ],
  },
};
