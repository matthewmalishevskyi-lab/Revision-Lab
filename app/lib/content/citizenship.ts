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

  "citizenship/the-law-and-legal-system": {
    summary:
      "Law is what turns a set of shared expectations into something enforceable. This topic covers why laws exist, where they come from, the difference between criminal and civil law, how the courts are organised, and what actually happens to someone who is arrested — including the rights they have from the moment they are detained.",
    keyFacts: [
      {
        heading: "Why we have laws",
        points: [
          "Laws protect people from harm, resolve disputes peacefully, and set out what behaviour is acceptable.",
          "They also protect rights and property, and provide a way of holding the powerful to account.",
          "The RULE OF LAW means everyone is subject to the law, including governments and the police.",
          "Nobody is above it and nobody is outside its protection — that is the whole point of the principle.",
          "Laws are made by Parliament (statute law) and by judges' decisions in past cases (common law or precedent).",
          "Laws change over time as society's views change, which is why some once-legal acts are now crimes and some once-criminal acts are legal.",
        ],
      },
      {
        heading: "Criminal and civil law",
        points: [
          "CRIMINAL law deals with offences against society: theft, assault, murder, drug offences.",
          "A criminal case is brought by the state, usually through the Crown Prosecution Service, and the accused is the DEFENDANT.",
          "The standard of proof is BEYOND REASONABLE DOUBT — a deliberately high bar.",
          "The outcome is GUILTY or NOT GUILTY, and a guilty verdict leads to a sentence.",
          "CIVIL law deals with disputes between individuals or organisations: contracts, negligence, divorce, debt.",
          "A civil case is brought by the CLAIMANT, the standard is the BALANCE OF PROBABILITIES, and the outcome is liable or not liable, usually with compensation.",
        ],
      },
      {
        heading: "The courts",
        points: [
          "MAGISTRATES' COURTS hear about 95% of criminal cases — the less serious ones.",
          "Magistrates are usually unpaid volunteers from the community, advised by a legally qualified clerk.",
          "The CROWN COURT hears serious criminal cases, with a judge and a jury of twelve.",
          "YOUTH COURTS deal with defendants aged 10 to 17, in private and with less formal procedure.",
          "COUNTY COURTS hear most civil cases; the High Court hears the largest ones.",
          "The SUPREME COURT is the final court of appeal for the UK and its decisions bind all lower courts.",
        ],
      },
      {
        heading: "Being arrested, and your rights",
        points: [
          "The police must have reasonable grounds to arrest, and must say what the offence is.",
          "A detained person has the right to free legal advice, to have someone informed of their arrest, and to see the codes of practice.",
          "Under-18s must have an APPROPRIATE ADULT present during questioning.",
          "The usual limit on detention without charge is 24 hours, extendable in serious cases with authorisation.",
          "The age of CRIMINAL RESPONSIBILITY in England and Wales is 10 — one of the lowest in Europe, which is itself debated.",
          "Sentences aim at punishment, deterrence, protecting the public, and rehabilitation, and people disagree about which should come first.",
        ],
      },
    ],
    flashcards: [
      { term: "Rule of law", definition: "The principle that everyone, including governments, is subject to the law." },
      { term: "Statute law", definition: "Law made by Parliament in an Act." },
      { term: "Common law", definition: "Law developed through judges' decisions in past cases, also called precedent." },
      { term: "Criminal law", definition: "Law dealing with offences against society, prosecuted by the state." },
      { term: "Civil law", definition: "Law dealing with disputes between individuals or organisations." },
      { term: "Defendant", definition: "The person accused in a criminal case, or being sued in a civil one." },
      { term: "Claimant", definition: "The person who brings a civil case." },
      { term: "Beyond reasonable doubt", definition: "The high standard of proof required to convict in a criminal case." },
      { term: "Balance of probabilities", definition: "The lower standard of proof in a civil case — more likely than not." },
      { term: "Magistrates' court", definition: "The court hearing about 95% of criminal cases, run by volunteer magistrates." },
      { term: "Crown Court", definition: "The court hearing serious criminal cases, with a judge and a jury of twelve." },
      { term: "Youth court", definition: "A court for defendants aged 10 to 17, held in private with less formal procedure." },
      { term: "Supreme Court", definition: "The final court of appeal in the UK, whose decisions bind all lower courts." },
      { term: "Appropriate adult", definition: "An adult who must be present when someone under 18 is questioned by police." },
      { term: "Age of criminal responsibility", definition: "The age from which a person can be charged with a crime — 10 in England and Wales." },
      { term: "Rehabilitation", definition: "An aim of sentencing focused on helping an offender not to offend again." },
    ],
    examTips: [
      {
        tip: "Learn criminal and civil as a contrasting pair",
        detail:
          "Who brings it, what the standard of proof is, what the outcome is called. Questions describe a scenario and ask you to classify it.",
      },
      {
        tip: "'Beyond reasonable doubt' is criminal only",
        detail:
          "Civil cases use the balance of probabilities, which is a much lower bar. Using the wrong standard loses the mark.",
      },
      {
        tip: "Magistrates are volunteers, not judges",
        detail:
          "They are unpaid members of the community advised by a legal clerk. That is a favourite one-mark question.",
      },
      {
        tip: "Give more than one aim of sentencing",
        detail:
          "Punishment, deterrence, public protection and rehabilitation. Evaluation questions want you to weigh them against each other.",
      },
      {
        tip: "Under-18s have extra protections",
        detail:
          "An appropriate adult must be present, and youth courts sit in private. Naming those specifics scores better than 'they are treated differently'.",
      },
      {
        tip: "The rule of law includes the government",
        detail:
          "It is not just 'everyone must obey the law'. The point is that those in power are bound by it too.",
      },
    ],
    practice: [
      {
        question: "What principle states that everyone, including governments, is subject to the law?",
        accept: ["rule of law", "the rule of law"],
        answer:
          "The rule of law. The important half is that it binds those in power too — not simply that ordinary people must obey.",
      },
      {
        question: "What is law made by Parliament called?",
        accept: ["statute law", "statute", "legislation", "acts of parliament"],
        answer:
          "Statute law, passed as an Act of Parliament. Common law, by contrast, develops through judges' decisions in past cases.",
      },
      {
        question: "What is law developed through judges' past decisions called?",
        accept: ["common law", "precedent", "case law"],
        answer:
          "Common law, also called precedent or case law. Decisions of higher courts bind the lower ones.",
      },
      {
        question: "Which type of law deals with offences against society, such as theft and assault?",
        accept: ["criminal", "criminal law"],
        answer:
          "Criminal law. It is brought by the state, usually through the Crown Prosecution Service, against a defendant.",
      },
      {
        question: "Which type of law deals with disputes between individuals, such as contracts and negligence?",
        accept: ["civil", "civil law"],
        answer:
          "Civil law. It is brought by a claimant, and the usual outcome is compensation rather than a criminal sentence.",
      },
      {
        question: "What is the standard of proof in a CRIMINAL case?",
        accept: ["beyond reasonable doubt", "beyond all reasonable doubt", "reasonable doubt"],
        answer:
          "Beyond reasonable doubt — a deliberately high bar, because a criminal conviction can take away someone's liberty.",
      },
      {
        question: "What is the standard of proof in a CIVIL case?",
        accept: ["balance of probabilities", "the balance of probabilities", "more likely than not"],
        answer:
          "The balance of probabilities — more likely than not. It is a much lower bar than the criminal standard.",
      },
      {
        question: "What is the person who brings a civil case called?",
        accept: ["claimant", "the claimant"],
        answer:
          "The claimant. In a criminal case the state prosecutes, and the person accused in either is the defendant.",
      },
      {
        question: "Which court hears the majority of criminal cases in England and Wales?",
        accept: ["magistrates court", "magistrates", "magistrates' court", "the magistrates court"],
        answer:
          "The magistrates' court, which handles roughly 95% of criminal cases — the less serious ones.",
      },
      {
        question: "How many people sit on a jury in the Crown Court? Give the number only.",
        accept: ["12", "twelve"],
        answer:
          "12. The Crown Court hears serious criminal cases with a judge, who rules on law, and a jury, who decide the facts.",
      },
      {
        question: "What is the final court of appeal in the UK called?",
        accept: ["supreme court", "the supreme court"],
        answer:
          "The Supreme Court. Its decisions bind every lower court, which is what makes it the end of the road for an appeal.",
      },
      {
        question: "What is the age of criminal responsibility in England and Wales? Give the number only.",
        accept: ["10", "ten"],
        answer:
          "10 — one of the lowest in Europe, which is itself a live debate. Below that age a child cannot be charged with a crime.",
      },
      {
        question: "Who must be present when someone under 18 is questioned by the police?",
        accept: ["appropriate adult", "an appropriate adult", "adult"],
        answer:
          "An appropriate adult — a parent, carer or trained volunteer. It is one of several extra protections for under-18s.",
      },
      {
        question: "Name one aim of sentencing.",
        accept: ["punishment", "deterrence", "rehabilitation", "protect the public", "public protection", "reparation", "deter"],
        answer:
          "Punishment, deterrence, protecting the public, rehabilitation or reparation. People genuinely disagree about which should come first.",
      },
      {
        question: "Explain the main differences between criminal and civil law. Write three or four sentences.",
        answer:
          "Criminal law deals with offences against society as a whole, so cases are brought by the state, usually through the Crown Prosecution Service. The standard of proof is beyond reasonable doubt, and a guilty verdict leads to a sentence such as a fine, community order or imprisonment. Civil law deals with disputes between private individuals or organisations, so the case is brought by a claimant rather than the state. The standard is the balance of probabilities, and the outcome is usually compensation rather than punishment. Mark this one yourself: who brings it, the standard of proof, and the outcome are the three contrasts worth credit.",
      },
      {
        question: "Discuss whether the age of criminal responsibility in England and Wales should be raised from 10.",
        answer:
          "In favour of raising it: at 10 a child's brain is still developing and their understanding of consequences is limited, so treating them as fully responsible may be unfair; most European countries set it considerably higher; and drawing a child into the criminal justice system early is associated with worse outcomes later. Against raising it: some serious crimes are committed by children under 14, and victims and their families expect accountability; the current system already treats children differently through youth courts and different sentences; and a higher age might leave no formal way of intervening with a child who is causing real harm. A reasonable judgement is that the strongest case is not for abolishing responsibility but for ensuring the response is welfare-focused rather than punitive — though where exactly the line falls is a genuine political disagreement. Mark this one yourself: full marks need both sides and a supported conclusion, not simply picking one.",
      },
    ],
    misconceptions: [
      {
        wrong: "All court cases are criminal.",
        right:
          "Most are civil — contracts, debt, negligence, family matters. Criminal law is only one part of the legal system.",
      },
      {
        wrong: "Magistrates are professional judges.",
        right:
          "They are usually unpaid volunteers from the local community, advised on the law by a qualified clerk.",
      },
      {
        wrong: "The standard of proof is the same in all courts.",
        right:
          "Criminal cases require proof beyond reasonable doubt; civil cases only require the balance of probabilities.",
      },
      {
        wrong: "The rule of law just means people must obey the law.",
        right:
          "It also means the government, police and courts are bound by it. That is the part that constrains power.",
      },
      {
        wrong: "Being arrested means you have been charged.",
        right:
          "Arrest is detention for investigation. A charge is a formal accusation, and many arrests never lead to one.",
      },
    ],
  },

  "citizenship/democracy-in-the-uk": {
    summary:
      "This topic covers how the UK is actually governed: what democracy means, the difference between the monarchy's formal role and the government's real power, how Parliament is structured, and where power has been handed to devolved nations and local councils. It also covers the arguments about the parts people most often question.",
    keyFacts: [
      {
        heading: "What democracy means",
        points: [
          "DEMOCRACY means rule by the people, either directly or through elected representatives.",
          "DIRECT democracy means citizens vote on the decisions themselves — a referendum is the usual UK example.",
          "REPRESENTATIVE democracy means citizens elect people to decide on their behalf, which is how the UK normally works.",
          "The UK is a CONSTITUTIONAL MONARCHY: a monarch is head of state but their powers are limited by law and convention.",
          "It is also a PARLIAMENTARY democracy — the government is drawn from and accountable to Parliament.",
          "The UK has an UNCODIFIED constitution: the rules exist in statutes, conventions and past cases rather than one written document.",
        ],
      },
      {
        heading: "Parliament",
        points: [
          "Parliament has three parts: the House of Commons, the House of Lords and the monarch.",
          "The HOUSE OF COMMONS contains 650 elected MPs, one for each constituency.",
          "The HOUSE OF LORDS is unelected, made up of life peers, some hereditary peers and bishops.",
          "The Lords scrutinise and revise legislation and can delay a bill, but cannot block one indefinitely.",
          "The party with a majority of MPs normally forms the government, and its leader becomes Prime Minister.",
          "The largest party not in government forms the OPPOSITION, whose job is to scrutinise and offer an alternative.",
        ],
      },
      {
        heading: "How laws are made",
        points: [
          "A proposed law is a BILL; once passed it becomes an ACT.",
          "The stages are: first reading, second reading, committee stage, report stage, third reading — then the same again in the other House.",
          "ROYAL ASSENT is the monarch's formal approval, which by convention is never refused.",
          "A GREEN PAPER is a consultation document; a WHITE PAPER sets out firm proposals.",
          "Most bills are introduced by the government; backbench MPs can introduce PRIVATE MEMBERS' BILLS, though few become law.",
        ],
      },
      {
        heading: "Devolution and local government",
        points: [
          "DEVOLUTION is the transfer of some powers from Westminster to national bodies.",
          "Scotland, Wales and Northern Ireland each have their own parliament or assembly with devolved powers.",
          "Devolved matters typically include health, education and transport; RESERVED matters such as defence and foreign policy stay at Westminster.",
          "LOCAL COUNCILS run services including schools, housing, refuse collection, planning and social care.",
          "Councillors are elected locally, and some areas also elect a mayor.",
          "The arguments for devolution are decisions closer to the people affected; the arguments against include inconsistency between nations and extra cost.",
        ],
      },
    ],
    flashcards: [
      { term: "Democracy", definition: "Rule by the people, either directly or through elected representatives." },
      { term: "Direct democracy", definition: "Citizens voting on decisions themselves, as in a referendum." },
      { term: "Representative democracy", definition: "Citizens electing people to make decisions on their behalf." },
      { term: "Constitutional monarchy", definition: "A system where a monarch is head of state but their powers are limited by law and convention." },
      { term: "Uncodified constitution", definition: "A constitution spread across statutes, conventions and cases rather than one written document." },
      { term: "House of Commons", definition: "The elected chamber of Parliament, containing 650 MPs." },
      { term: "House of Lords", definition: "The unelected chamber, which scrutinises and revises legislation but cannot block it indefinitely." },
      { term: "Constituency", definition: "The area an MP is elected to represent." },
      { term: "Opposition", definition: "The largest party not in government, whose role is to scrutinise and offer an alternative." },
      { term: "Bill", definition: "A proposed law, which becomes an Act once it has passed all stages." },
      { term: "Royal assent", definition: "The monarch's formal approval of a bill, which by convention is never refused." },
      { term: "Green paper", definition: "A government consultation document setting out ideas for discussion." },
      { term: "White paper", definition: "A government document setting out firm proposals for legislation." },
      { term: "Devolution", definition: "The transfer of some powers from Westminster to national parliaments or assemblies." },
      { term: "Reserved matters", definition: "Areas such as defence and foreign policy that remain with the UK Parliament." },
      { term: "Local council", definition: "The elected body running local services such as schools, housing, refuse and planning." },
    ],
    examTips: [
      {
        tip: "Direct and representative democracy are different things",
        detail:
          "A referendum is direct; electing an MP is representative. The UK uses mainly the second, with occasional use of the first.",
      },
      {
        tip: "Learn 650 as the number of MPs",
        detail:
          "One per constituency. It is a reliable one-mark fact, though it can change if boundaries are redrawn.",
      },
      {
        tip: "The Lords can delay, not block",
        detail:
          "That distinction matters. Saying the Lords can veto legislation is wrong and is a common error.",
      },
      {
        tip: "Uncodified does not mean unwritten",
        detail:
          "Much of the UK constitution IS written down — just across many statutes and conventions rather than in one document.",
      },
      {
        tip: "Distinguish head of state from head of government",
        detail:
          "The monarch is head of state with a formal role; the Prime Minister is head of government with real political power.",
      },
      {
        tip: "For devolution, give a devolved AND a reserved matter",
        detail:
          "Health and education are devolved; defence and foreign policy are reserved. The pairing shows you understand the split.",
      },
    ],
    practice: [
      {
        question: "How many MPs are there in the House of Commons? Give the number only.",
        accept: ["650"],
        answer:
          "650, one for each constituency. The number can change if constituency boundaries are redrawn, so it is worth checking if quoting it precisely.",
      },
      {
        question: "What type of democracy involves citizens voting on decisions themselves?",
        accept: ["direct", "direct democracy"],
        answer:
          "Direct democracy — a referendum is the usual UK example. Electing an MP to decide for you is representative democracy.",
      },
      {
        question: "What type of democracy involves electing people to decide on your behalf?",
        accept: ["representative", "representative democracy", "indirect"],
        answer:
          "Representative democracy. It is how the UK normally works, with referendums used only occasionally.",
      },
      {
        question: "What is the UK's system called, where a monarch is head of state but has limited powers?",
        accept: ["constitutional monarchy", "a constitutional monarchy"],
        answer:
          "A constitutional monarchy. The monarch's powers are limited by law and by convention, and real political power sits with government and Parliament.",
      },
      {
        question: "What is the area an MP is elected to represent called?",
        accept: ["constituency", "a constituency"],
        answer:
          "A constituency. There are 650 of them, and each elects one MP to the House of Commons.",
      },
      {
        question: "Which chamber of Parliament is unelected?",
        accept: ["house of lords", "lords", "the house of lords", "the lords"],
        answer:
          "The House of Lords. It is made up of life peers, some hereditary peers and bishops, and it scrutinises and revises legislation.",
      },
      {
        question: "Can the House of Lords block a bill indefinitely? Answer yes or no.",
        accept: ["no", "n"],
        answer:
          "No. It can delay and revise, but the Commons can ultimately override it. Saying the Lords can veto legislation is a common error.",
      },
      {
        question: "What is a proposed law called before it is passed?",
        accept: ["bill", "a bill"],
        answer:
          "A bill. Once it has passed all its stages and received royal assent it becomes an Act of Parliament.",
      },
      {
        question: "What is the monarch's formal approval of a bill called?",
        accept: ["royal assent", "the royal assent"],
        answer:
          "Royal assent. By convention it is never refused, which is a good illustration of how a formal power differs from a real one.",
      },
      {
        question: "What is a government consultation document setting out ideas for discussion called?",
        accept: ["green paper", "a green paper"],
        answer:
          "A green paper. A white paper is the later document setting out firm proposals for legislation.",
      },
      {
        question: "What is the transfer of powers from Westminster to Scotland, Wales and Northern Ireland called?",
        accept: ["devolution"],
        answer:
          "Devolution. Devolved matters typically include health and education; reserved matters such as defence stay with the UK Parliament.",
      },
      {
        question: "Name one matter that is RESERVED to the UK Parliament.",
        accept: ["defence", "foreign policy", "immigration", "national security", "currency", "foreign affairs"],
        answer:
          "Defence, foreign policy, immigration and currency are all reserved. Health, education and transport are typically devolved.",
      },
      {
        question: "Name one service run by local councils.",
        accept: ["schools", "housing", "refuse", "bins", "planning", "social care", "libraries", "roads", "rubbish collection"],
        answer:
          "Schools, housing, refuse collection, planning, social care, libraries and local roads are all council responsibilities.",
      },
      {
        question: "What is the term for a constitution spread across many statutes and conventions rather than one document?",
        accept: ["uncodified", "uncodified constitution", "unwritten"],
        answer:
          "Uncodified. Note that much of it IS written down — just not gathered into a single document as in the United States.",
      },
      {
        question: "Explain the difference between the monarch's role and the Prime Minister's role. Write two or three sentences.",
        answer:
          "The monarch is the head of state, a largely ceremonial role that includes formally opening Parliament, giving royal assent to bills and representing the country abroad. The Prime Minister is the head of government, holding the real political power to set policy, appoint ministers and direct the work of Parliament. The monarch acts on the advice of ministers by convention, which is why royal assent has not been refused in modern times — the formal power exists but is not used independently. Mark this one yourself: head of state versus head of government, and formal versus real power, are the two ideas being tested.",
      },
      {
        question: "Discuss the arguments for and against the UK having an unelected House of Lords.",
        answer:
          "In favour: peers are appointed for expertise rather than popularity, so the chamber contains former judges, scientists, doctors and diplomats who improve the quality of legislation; because they do not face re-election they can take unpopular but sensible positions; and the Commons retains the final say, so the democratic mandate is not overridden. Against: it is difficult to justify unelected legislators in a democracy, particularly with places still reserved for hereditary peers and bishops; appointments are made largely on the advice of party leaders, which invites accusations of patronage; and other countries manage expert scrutiny through elected second chambers. Reform options include a fully elected chamber, a partly elected one, or simply reducing the size and removing the remaining hereditary places. A defensible judgement is that the revising function is genuinely valuable but its current composition is hard to defend on democratic grounds, so reform of membership is a stronger case than abolition. Mark this one yourself: full marks need both sides taken seriously plus a supported conclusion.",
      },
    ],
    misconceptions: [
      {
        wrong: "The monarch runs the country.",
        right:
          "The monarch is head of state with a largely ceremonial role. The Prime Minister is head of government and holds the real political power.",
      },
      {
        wrong: "The House of Lords can veto any law it dislikes.",
        right:
          "It can delay and revise, but the Commons can ultimately override it. It cannot block legislation indefinitely.",
      },
      {
        wrong: "The UK has no constitution.",
        right:
          "It has an UNCODIFIED one — spread across statutes, conventions and case law rather than gathered into a single document.",
      },
      {
        wrong: "Devolution means Scotland and Wales are independent.",
        right:
          "They have devolved powers over areas such as health and education, but reserved matters such as defence remain with Westminster.",
      },
      {
        wrong: "A bill becomes law as soon as the Commons votes for it.",
        right:
          "It must also pass the Lords and receive royal assent before it becomes an Act.",
      },
    ],
  },

  "citizenship/elections-and-voting": {
    summary:
      "Elections are how a representative democracy renews its consent. This topic covers who can vote and how, the different voting systems used across the UK, what political parties and pressure groups do, and the long-running argument about whether First Past the Post produces fair results.",
    keyFacts: [
      {
        heading: "Who can vote",
        points: [
          "You must be 18 or over to vote in a UK general election, and registered on the electoral roll.",
          "You must be a British, qualifying Commonwealth or Irish citizen resident in the UK.",
          "In Scotland and Wales, 16- and 17-year-olds can vote in devolved and local elections.",
          "People disqualified include convicted prisoners serving a sentence and members of the House of Lords for general elections.",
          "You can register from age 16 in England and Northern Ireland so that you are ready at 18.",
          "Voting is not compulsory in the UK, unlike in Australia or Belgium.",
        ],
      },
      {
        heading: "How you vote",
        points: [
          "You can vote IN PERSON at a polling station, by POST, or by PROXY where someone votes on your behalf.",
          "Polling stations in a general election are open from 7am to 10pm.",
          "The ballot is SECRET — nobody can require you to say how you voted.",
          "Photo ID is now required to vote in person in Great Britain, a change intended to prevent impersonation.",
          "Critics argue voter ID risks excluding people without ID; supporters argue it protects the integrity of the vote.",
          "TURNOUT is the percentage of registered voters who actually vote, and it is consistently lower among younger voters.",
        ],
      },
      {
        heading: "Voting systems",
        points: [
          "FIRST PAST THE POST (FPTP) is used for UK general elections: the candidate with the most votes in each constituency wins.",
          "A winning candidate does not need a majority — only more votes than anyone else.",
          "PROPORTIONAL REPRESENTATION (PR) systems allocate seats in closer proportion to total votes cast.",
          "The Additional Member System is used for the Scottish Parliament and Senedd, mixing constituency and list seats.",
          "The Single Transferable Vote is used for the Northern Ireland Assembly and Scottish local elections.",
          "Supplementary and preferential systems let voters rank candidates rather than choosing only one.",
        ],
      },
      {
        heading: "Parties, pressure groups and campaigns",
        points: [
          "A POLITICAL PARTY is an organised group seeking to form a government and put its programme into effect.",
          "A MANIFESTO is the document setting out what a party promises to do if elected.",
          "A PRESSURE GROUP seeks to influence policy on particular issues without seeking to govern.",
          "SECTIONAL (or interest) groups represent a specific group of people, such as a trade union.",
          "CAUSE (or promotional) groups campaign on an issue open to anyone, such as an environmental charity.",
          "Methods include lobbying, petitions, media campaigns, legal challenges, demonstrations and direct action.",
        ],
      },
    ],
    flashcards: [
      { term: "Electoral roll", definition: "The official register of people entitled to vote, which you must be on to cast a vote." },
      { term: "Constituency (elections)", definition: "One of 650 areas, each electing a single MP to the House of Commons." },
      { term: "First Past the Post", definition: "The system where the candidate with the most votes in a constituency wins, even without a majority." },
      { term: "Proportional representation", definition: "Any system allocating seats in closer proportion to the total votes each party receives." },
      { term: "Additional Member System", definition: "A mixed system, used in Scotland and Wales, combining constituency seats with top-up list seats." },
      { term: "Single Transferable Vote", definition: "A system where voters rank candidates in multi-member areas, used in Northern Ireland." },
      { term: "Turnout", definition: "The percentage of registered voters who actually cast a vote in an election." },
      { term: "Proxy vote", definition: "A vote cast on your behalf by someone you have nominated." },
      { term: "Postal vote", definition: "A vote sent by post rather than cast at a polling station." },
      { term: "Secret ballot", definition: "The principle that how you vote is private and cannot be demanded of you." },
      { term: "Manifesto", definition: "A document setting out what a party promises to do if it forms a government." },
      { term: "Political party", definition: "An organised group seeking to form a government and carry out its programme." },
      { term: "Pressure group", definition: "A group seeking to influence policy on particular issues without seeking to govern." },
      { term: "Sectional group", definition: "A pressure group representing a specific group of people, such as a trade union." },
      { term: "Cause group", definition: "A pressure group campaigning on an issue that anyone can support, such as an environmental charity." },
      { term: "Lobbying", definition: "Directly persuading decision-makers such as MPs or ministers to support a position." },
      { term: "By-election", definition: "An election held in a single constituency between general elections, usually after an MP dies or resigns." },
      { term: "Safe seat", definition: "A constituency where the same party wins comfortably at almost every election." },
    ],
    examTips: [
      {
        tip: "FPTP winners need a plurality, not a majority",
        detail:
          "Most votes, not more than half. That single distinction is the root of most of the criticism of the system.",
      },
      {
        tip: "Name the system AND where it is used",
        detail:
          "AMS in Scotland and Wales, STV in Northern Ireland, FPTP for Westminster. Pairing them earns the second mark.",
      },
      {
        tip: "Learn three ways of voting",
        detail:
          "In person, by post, by proxy. Short questions often ask for one or two, and 'online' is not currently one of them.",
      },
      {
        tip: "Sectional and cause groups are the standard split",
        detail:
          "Sectional represents a group of people; cause campaigns for an idea anyone can back. Give an example of each.",
      },
      {
        tip: "On FPTP versus PR, argue both sides",
        detail:
          "Examiners want strong government and clear constituency links weighed against proportionality. Never one-sided.",
      },
      {
        tip: "Keep voting-system answers about the system, not parties",
        detail:
          "Analyse how the mechanism works and who it advantages structurally, rather than which party you think should win.",
      },
    ],
    practice: [
      {
        question: "What is the minimum age to vote in a UK general election? Give the number only.",
        accept: ["18"],
        answer:
          "18. In Scotland and Wales, 16- and 17-year-olds can vote in devolved and local elections, but not in general elections.",
      },
      {
        question: "What is the official register of people entitled to vote called?",
        accept: ["electoral roll", "electoral register", "the electoral roll", "register of electors"],
        answer:
          "The electoral roll or register. Being eligible is not enough — you must be registered before you can vote.",
      },
      {
        question: "What voting system is used for UK general elections?",
        accept: ["first past the post", "fptp", "first-past-the-post"],
        answer:
          "First Past the Post. The candidate with the most votes in each constituency wins the seat, whether or not they have a majority.",
      },
      {
        question: "Under First Past the Post, does the winning candidate need more than half the votes? Answer yes or no.",
        accept: ["no", "n"],
        answer:
          "No — only more votes than any other single candidate. In a close three-way contest a seat can be won on well under 40% of the vote.",
      },
      {
        question: "What term describes any system that allocates seats in closer proportion to votes cast?",
        accept: ["proportional representation", "pr", "proportional"],
        answer:
          "Proportional representation. AMS and STV are both examples, though they work in quite different ways.",
      },
      {
        question: "Which voting system is used for the Scottish Parliament and the Senedd?",
        accept: ["additional member system", "ams", "additional member"],
        answer:
          "The Additional Member System, which mixes constituency seats with additional list seats to make the overall result more proportional.",
      },
      {
        question: "Which voting system is used for the Northern Ireland Assembly?",
        accept: ["single transferable vote", "stv", "single transferable"],
        answer:
          "The Single Transferable Vote. Voters rank candidates in multi-member constituencies, so several parties can win seats in the same area.",
      },
      {
        question: "What is a vote cast on your behalf by someone you have nominated called?",
        accept: ["proxy", "proxy vote", "a proxy vote"],
        answer:
          "A proxy vote. The alternatives are voting in person at a polling station or by post.",
      },
      {
        question: "What is the percentage of registered voters who actually vote called?",
        accept: ["turnout", "voter turnout"],
        answer:
          "Turnout. It is consistently lower among younger voters, which is part of why campaigns target them specifically.",
      },
      {
        question: "What is the document setting out a party's promises for government called?",
        accept: ["manifesto", "a manifesto"],
        answer:
          "A manifesto. It matters because it is the basis on which voters judge whether a government has done what it said it would.",
      },
      {
        question: "What type of group seeks to influence policy on an issue WITHOUT seeking to form a government?",
        accept: ["pressure group", "a pressure group", "interest group"],
        answer:
          "A pressure group. Parties seek power; pressure groups seek influence over particular decisions.",
      },
      {
        question: "What is a pressure group representing a specific group of people, such as a trade union, called?",
        accept: ["sectional", "sectional group", "interest group", "a sectional group"],
        answer:
          "A sectional or interest group. A cause group, by contrast, campaigns on an issue anyone can support.",
      },
      {
        question: "Name one method a pressure group might use to influence policy.",
        accept: ["lobbying", "petition", "petitions", "protest", "demonstration", "media campaign", "boycott", "legal challenge", "strike", "direct action", "social media"],
        answer:
          "Lobbying, petitions, demonstrations, media campaigns, legal challenges, boycotts and direct action are all used, with very different levels of public support.",
      },
      {
        question: "What is an election held in one constituency between general elections called?",
        accept: ["by-election", "byelection", "a by-election"],
        answer:
          "A by-election, usually held after the sitting MP dies or resigns. Turnout is typically lower than at a general election.",
      },
      {
        question: "Explain what is meant by a 'safe seat' and why it can reduce turnout. Write two or three sentences.",
        answer:
          "A safe seat is a constituency where one party wins comfortably at almost every election, so the result is close to a foregone conclusion. Turnout can fall because voters who support other parties feel their vote cannot change the outcome, and supporters of the leading party may feel their vote is not needed. This is one of the main criticisms of First Past the Post: campaigning and attention concentrate on a relatively small number of marginal seats. Mark this one yourself: a clear definition plus a linked explanation of why it discourages voting is what earns the marks.",
      },
      {
        question: "Discuss the arguments for and against replacing First Past the Post with proportional representation.",
        answer:
          "For PR: seats would more closely match votes, so a party winning a third of the vote would win roughly a third of the seats; smaller parties with support spread across the country would no longer be shut out; and fewer votes would be wasted in safe seats, which might improve turnout. For keeping FPTP: it usually produces a single-party majority, so governments can act decisively and voters know who to blame at the next election; every MP represents an identifiable area, giving a direct constituency link that list systems can weaken; and it is simple to understand and count. Counter-arguments run both ways — PR often means coalitions, which supporters see as compromise and critics see as deals made after voters have left the room, while FPTP can hand a large majority to a party most voters did not choose. A reasonable conclusion notes that the choice is really a trade-off between proportionality and decisive single-party government, and that which you prefer depends on which you value more. Mark this one yourself: both sides plus a supported judgement, and no party-political point-scoring.",
      },
    ],
    misconceptions: [
      {
        wrong: "You have to win over half the votes to become an MP.",
        right:
          "Under First Past the Post you need only more votes than anyone else. Many MPs are elected on well under half.",
      },
      {
        wrong: "Voting is compulsory in the UK.",
        right:
          "It is voluntary here. Some countries, including Australia and Belgium, do make it compulsory.",
      },
      {
        wrong: "Pressure groups and political parties are the same thing.",
        right:
          "Parties want to form a government; pressure groups want to influence policy on particular issues without governing.",
      },
      {
        wrong: "Being 18 automatically means you can vote.",
        right:
          "You must also be registered on the electoral roll. Eligibility and registration are two separate steps.",
      },
      {
        wrong: "Proportional representation is one single system.",
        right:
          "It is a family of systems. AMS, STV and list systems all aim at proportionality but work very differently.",
      },
    ],
  },

  "citizenship/active-citizenship": {
    summary:
      "Active citizenship is the part of the course you do rather than only learn. This topic covers the ways an individual can actually change something — volunteering, campaigning, petitions, contacting representatives — and the practical steps of planning, running and evaluating a citizenship action, which most exam boards assess directly.",
    keyFacts: [
      {
        heading: "What active citizenship means",
        points: [
          "ACTIVE CITIZENSHIP means taking part in your community and in public life rather than only holding opinions.",
          "It includes volunteering, campaigning, fundraising, joining groups, voting and holding decision-makers to account.",
          "The benefits to the community include services and support that would otherwise not exist.",
          "The benefits to the individual include skills, confidence, experience and connections.",
          "ADVOCACY means speaking or acting on behalf of others who may not be heard.",
          "Democracy relies on it: rights that nobody exercises tend to weaken over time.",
        ],
      },
      {
        heading: "Ways to take action",
        points: [
          "PETITIONS collect signatures; a petition on the UK Parliament site passing 10,000 gets a government response and 100,000 is considered for a debate.",
          "Writing to your MP or local councillor is one of the most direct routes, and MPs hold regular SURGERIES for constituents.",
          "Campaigning includes leaflets, social media, public meetings, press coverage and stalls.",
          "Volunteering with a charity or community group contributes directly rather than through persuasion.",
          "PROTEST and demonstration are lawful rights, subject to conditions on time, place and public safety.",
          "BOYCOTTS use consumer choice as pressure, while consumer campaigns target companies rather than governments.",
        ],
      },
      {
        heading: "Planning a citizenship action",
        points: [
          "Start with a clear AIM: what specific change do you want, and who has the power to make it?",
          "RESEARCH the issue using more than one source and check who is already working on it.",
          "Identify your STAKEHOLDERS — the people affected, and the decision-maker you need to persuade.",
          "Plan your methods, timeline, roles and any permissions you need.",
          "Consider RISKS and how to reduce them, including safeguarding and safety.",
          "Decide in advance how you will measure success, so evaluation is not guesswork afterwards.",
        ],
      },
      {
        heading: "Carrying it out and evaluating it",
        points: [
          "Keep EVIDENCE throughout: photographs, records, responses, numbers reached.",
          "Use PRIMARY evidence you gather yourself, such as a survey, and SECONDARY evidence from published sources.",
          "Evaluate against your original aim rather than against how enjoyable it was.",
          "Say what worked, what did not, and what you would do differently — examiners reward honest critique.",
          "Assess IMPACT: did anything actually change, and for whom?",
          "Reflect on the skills you developed, such as teamwork, communication, planning and persuasion.",
        ],
      },
    ],
    flashcards: [
      { term: "Active citizenship", definition: "Taking part in community and public life rather than only holding opinions." },
      { term: "Advocacy", definition: "Speaking or acting on behalf of others who may not otherwise be heard." },
      { term: "Volunteering", definition: "Giving time unpaid to help a community, charity or cause." },
      { term: "Petition", definition: "A collection of signatures asking decision-makers to take a particular action." },
      { term: "MP's surgery", definition: "A regular session where constituents can meet their MP to raise concerns." },
      { term: "Stakeholder", definition: "Anyone affected by an issue or decision, including the decision-maker you need to persuade." },
      { term: "Primary evidence", definition: "Information you gather yourself, such as a survey or interview." },
      { term: "Secondary evidence", definition: "Information gathered by someone else, such as a published report or news article." },
      { term: "Boycott", definition: "Deliberately refusing to buy from or deal with an organisation as a form of pressure." },
      { term: "Direct action", definition: "Taking action to create change immediately rather than through official channels." },
      { term: "Impact (of an action)", definition: "The actual change produced, measured against the aim you set at the start." },
      { term: "Evaluation", definition: "Judging how well an action met its aim, including what you would change." },
      { term: "Aim", definition: "The specific change a campaign is trying to achieve." },
      { term: "Citizenship action", definition: "A planned piece of work to address an issue, assessed as part of GCSE Citizenship." },
    ],
    examTips: [
      {
        tip: "Your action must have a specific aim",
        detail:
          "'Raise awareness of mental health' is too vague. 'Get a quiet room opened at lunchtimes' can be judged as achieved or not.",
      },
      {
        tip: "Identify who actually has the power to change it",
        detail:
          "Marks are lost when students campaign at the wrong target. A school issue goes to the head, not to an MP.",
      },
      {
        tip: "Use both primary and secondary evidence",
        detail:
          "A survey you ran plus a published report is stronger than either alone, and questions often ask for both.",
      },
      {
        tip: "Evaluate honestly",
        detail:
          "Saying what went wrong and what you would change scores higher than claiming everything went perfectly.",
      },
      {
        tip: "Know the two petition thresholds",
        detail:
          "10,000 signatures gets a government response; 100,000 is considered for a Westminster Hall debate. Considered, not guaranteed.",
      },
      {
        tip: "Distinguish output from impact",
        detail:
          "500 leaflets handed out is an output. A rule being changed is an impact. Examiners want the second.",
      },
    ],
    practice: [
      {
        question: "What term describes taking part in community and public life rather than only holding opinions?",
        accept: ["active citizenship", "active citizen"],
        answer:
          "Active citizenship. It covers volunteering, campaigning, voting and holding decision-makers to account.",
      },
      {
        question: "What is speaking or acting on behalf of others who may not be heard called?",
        accept: ["advocacy", "advocating", "advocate"],
        answer:
          "Advocacy. It matters because some of the people most affected by a decision have the least access to decision-makers.",
      },
      {
        question: "How many signatures does a UK Parliament petition need for a government response? Give the number only.",
        accept: ["10000", "10,000"],
        answer:
          "10,000. At 100,000 signatures a petition is considered for a debate — considered, not automatically granted.",
      },
      {
        question: "What is a regular session where constituents can meet their MP called?",
        accept: ["surgery", "surgeries", "mp surgery", "an mp's surgery", "mps surgery"],
        answer:
          "A surgery. It is one of the most direct routes for an individual constituent to raise an issue.",
      },
      {
        question: "What is evidence you gather yourself, such as a survey, called?",
        accept: ["primary", "primary evidence", "primary data", "primary research"],
        answer:
          "Primary evidence. Secondary evidence is material gathered by someone else, such as a published report.",
      },
      {
        question: "What is evidence gathered by someone else, such as a published report, called?",
        accept: ["secondary", "secondary evidence", "secondary data", "secondary research"],
        answer:
          "Secondary evidence. A strong citizenship action uses both, because each checks the other.",
      },
      {
        question: "What is anyone affected by an issue or decision called?",
        accept: ["stakeholder", "stakeholders", "a stakeholder"],
        answer:
          "A stakeholder. Identifying them early tells you both who to involve and who you actually need to persuade.",
      },
      {
        question: "What is deliberately refusing to buy from an organisation as a form of pressure called?",
        accept: ["boycott", "a boycott", "boycotting"],
        answer:
          "A boycott. It uses consumer power rather than political channels, and works best when it is visible and organised.",
      },
      {
        question: "Name one benefit of volunteering to the person doing it.",
        accept: ["skills", "confidence", "experience", "friends", "connections", "wellbeing", "cv", "employability", "meeting people", "satisfaction"],
        answer:
          "Skills, confidence, experience, connections, improved wellbeing and something meaningful for a CV or application.",
      },
      {
        question: "What word describes the actual change produced by an action, as opposed to how much activity took place?",
        accept: ["impact", "the impact"],
        answer:
          "Impact. Handing out 500 leaflets is an output; a rule actually changing is an impact, and examiners want the second.",
      },
      {
        question: "Name one way an individual can try to influence a decision made by their local council.",
        accept: ["petition", "contact councillor", "write to councillor", "attend meeting", "campaign", "protest", "consultation", "vote", "letter", "social media", "local media", "email"],
        answer:
          "Signing or starting a petition, writing to a councillor, attending a council meeting, responding to a consultation, campaigning locally or contacting local media.",
      },
      {
        question: "Should a citizenship action's aim be broad, like 'raise awareness', or specific? Answer broad or specific.",
        accept: ["specific", "specific aim"],
        answer:
          "Specific. A vague aim cannot be evaluated, because there is no way of telling whether you achieved it.",
      },
      {
        question: "What is the process of judging how well an action met its aim called?",
        accept: ["evaluation", "evaluating", "evaluate"],
        answer:
          "Evaluation. Honest evaluation — including what failed and what you would change — scores higher than claiming everything worked.",
      },
      {
        question: "Name one thing you should consider when planning an action, besides the aim.",
        accept: ["research", "risks", "timeline", "stakeholders", "methods", "permission", "roles", "safety", "budget", "evidence", "resources", "safeguarding"],
        answer:
          "Research, stakeholders, methods, timeline, roles, permissions, risks and safety, and how you will measure success.",
      },
      {
        question: "Describe the steps you would take to plan a citizenship action about a problem in your school. Write four or five sentences.",
        answer:
          "First set a specific, measurable aim — for example getting a covered area added to the playground rather than 'improving the school'. Then research the issue using both primary evidence, such as a student survey, and secondary evidence, such as guidance on school facilities. Identify the stakeholders: the students affected, staff, and above all the person with the power to say yes, which for a school issue is usually the headteacher or governors rather than an MP. Plan your methods and timeline, decide who does what, get any permission you need, and think through risks. Finally, decide in advance how you will know whether you succeeded, so that your evaluation rests on evidence rather than impressions. Mark this one yourself: a specific aim, both types of evidence, the right decision-maker, and a plan for evaluation are the four things being credited.",
      },
      {
        question: "Explain why a campaign might fail even if a lot of people supported it. Write three or four sentences.",
        answer:
          "Support is not the same as leverage: a campaign can gather thousands of signatures and still be aimed at someone who has no power to grant what it asks for. Timing matters too, since a decision may already have been taken by the time the campaign builds momentum. Support can also be shallow — people willing to sign or share online but not to turn up, write, or keep going once attention moves on. And opposing interests may be smaller in number but far better organised, better funded and more persistent. The lesson for your own action is to target the right decision-maker, plan for the long haul, and measure impact rather than activity. Mark this one yourself: at least two distinct reasons, each explained rather than just listed, is what earns the marks.",
      },
    ],
    misconceptions: [
      {
        wrong: "A petition reaching 100,000 signatures guarantees a debate in Parliament.",
        right:
          "It is CONSIDERED for a debate by the Petitions Committee. Consideration is not the same as a guarantee.",
      },
      {
        wrong: "Raising awareness is the same as achieving change.",
        right:
          "Awareness is an output. Impact means something actually changed, and that is what evaluation should measure.",
      },
      {
        wrong: "Active citizenship means protesting.",
        right:
          "Protest is one method among many. Volunteering, petitions, writing to representatives, and serving on committees all count.",
      },
      {
        wrong: "Only adults can take meaningful citizenship action.",
        right:
          "Under-18s can petition, campaign, volunteer, write to representatives and organise. The vote is the main thing that waits.",
      },
      {
        wrong: "A good evaluation says everything went well.",
        right:
          "The strongest evaluations identify what failed and what you would do differently, judged against your original aim.",
      },
    ],
  },
};
