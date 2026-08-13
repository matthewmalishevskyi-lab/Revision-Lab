import type { TopicContent } from "./index";

// RELIGIOUS EDUCATION
//
// HOW THIS SUBJECT IS WRITTEN, AND WHY IT DIFFERS FROM THE OTHERS
//
// Everywhere else on this site, the job is to state what is true. Here it is
// not. RE is the academic study of what people believe and why — so beliefs are
// always attributed ("Christians believe...", "according to the Qur'an..."),
// never asserted as fact and never as falsehood. The site does not tell a
// student what to think about God.
//
// Three rules follow from that, and the content checker cannot enforce any of
// them, so they are written down here instead:
//
//   1. ATTRIBUTE EVERY BELIEF. Not "God created the world" but "Christians and
//      Muslims believe God created the world."
//   2. INCLUDE NON-RELIGIOUS VIEWS FAIRLY. Atheist and Humanist positions are
//      part of the specification and are argued at their strongest, not set up
//      to be knocked down. The same courtesy is given to religious views.
//   3. DIVERSITY WITHIN a religion matters as much as difference between them.
//      Catholics and Quakers disagree; Sunni and Shi'a Muslims disagree. Saying
//      "Christians think X" as though 2 billion people agree is both bad RE and
//      factually wrong, and examiners penalise it.
//
// Exam-board note: this follows AQA Religious Studies A conventions, with
// Christianity and Islam as the two studied religions — the most common pairing
// in English schools. If a school studies a different pair, Year 10 is the part
// that would need swapping; Year 9 surveys six religions and is unaffected.

export const RELIGIOUS_EDUCATION: Record<string, TopicContent> = {
  "religious-education/what-is-religion": {
    summary:
      "Before studying any particular religion, it helps to ask what religion actually is, why it is so hard to define, and how scholars study it without either promoting or attacking it. This topic covers definitions, the difference between theism, atheism and agnosticism, what religion does for individuals and societies, and how the UK's religious landscape has changed.",
    keyFacts: [
      {
        heading: "Defining religion",
        points: [
          "There is no single agreed definition of religion — every one proposed either excludes something people call a religion or includes something they do not.",
          "SUBSTANTIVE definitions focus on WHAT is believed, usually belief in God or the supernatural.",
          "That excludes Theravada Buddhism, which does not centre on a creator God, yet almost everyone calls it a religion.",
          "FUNCTIONAL definitions focus on WHAT RELIGION DOES — providing meaning, community and moral guidance.",
          "That can accidentally include football fandom or nationalism, which most people would not call religions.",
          "The usual scholarly response is a 'family resemblance' approach: religions share overlapping features without all sharing one.",
        ],
      },
      {
        heading: "Believing, not believing, and not knowing",
        points: [
          "A THEIST believes in a God or gods.",
          "MONOTHEISM is belief in one God — Christianity, Islam and Judaism are monotheistic.",
          "POLYTHEISM is belief in many gods or in many forms of the divine.",
          "An ATHEIST does not believe in any God.",
          "An AGNOSTIC holds that we cannot know whether God exists.",
          "These are not stages on a scale from bad to good — they are different positions, each held by thoughtful people for reasons.",
        ],
      },
      {
        heading: "What religion does",
        points: [
          "For individuals, religion can provide meaning, comfort in grief, moral guidance, identity and belonging.",
          "For societies, it can build community, motivate charity and campaigning, and preserve tradition.",
          "Critics point to religion being used to justify conflict, discrimination and resistance to social change.",
          "Defenders point out that non-religious ideologies have also justified enormous harm, so the question is about power, not belief alone.",
          "SECULARISATION is the theory that religion loses social influence as societies modernise.",
          "The evidence is mixed: religious practice has fallen in western Europe but risen globally in absolute numbers.",
        ],
      },
      {
        heading: "Religion in the UK today",
        points: [
          "The UK is religiously DIVERSE and increasingly non-religious, with 'no religion' now one of the largest census categories.",
          "Christianity remains the largest religion in the UK, though attendance is far lower than affiliation.",
          "Islam is the second largest, and Hinduism, Sikhism, Judaism and Buddhism are all long-established here.",
          "The UK is described as MULTI-FAITH: many religions living alongside one another.",
          "England has an ESTABLISHED church — the Church of England — while Scotland, Wales and Northern Ireland differ.",
          "Freedom of religion and belief, including the freedom to have none, is protected in UK law.",
        ],
      },
    ],
    flashcards: [
      { term: "Religion", definition: "A system of beliefs, practices and values, usually concerning the sacred or the ultimate meaning of life." },
      { term: "Theist", definition: "A person who believes in a God or gods." },
      { term: "Atheist", definition: "A person who does not believe in the existence of any God." },
      { term: "Agnostic", definition: "A person who holds that it is not possible to know whether God exists." },
      { term: "Monotheism", definition: "Belief in one God, as in Christianity, Islam and Judaism." },
      { term: "Polytheism", definition: "Belief in many gods, or in many forms or aspects of the divine." },
      { term: "Humanism", definition: "A non-religious approach to life based on reason, evidence and shared human welfare." },
      { term: "Secularisation", definition: "The theory that religion loses influence over society as it modernises." },
      { term: "Secular", definition: "Not connected with religion; a secular state does not favour any religion." },
      { term: "Multi-faith society", definition: "A society in which people of many different religions live alongside one another." },
      { term: "Substantive definition", definition: "A definition of religion based on what is believed, usually in the supernatural." },
      { term: "Functional definition", definition: "A definition of religion based on what religion does for people and society." },
      { term: "Sacred", definition: "Something regarded as holy and set apart from ordinary life." },
      { term: "Worldview", definition: "The overall set of beliefs through which a person understands the world, religious or not." },
    ],
    examTips: [
      {
        tip: "Attribute beliefs — never state them as fact",
        detail:
          "Write 'Christians believe God created the world', not 'God created the world'. Examiners look for this, and it is the single clearest sign of good RE writing.",
      },
      {
        tip: "Atheism and agnosticism are different",
        detail:
          "An atheist does not believe; an agnostic says we cannot know. Treating them as the same thing loses marks in almost every topic.",
      },
      {
        tip: "Never say 'all religious people think...'",
        detail:
          "Say 'many', 'most', or name the group — Catholics, Sunni Muslims, Orthodox Jews. Diversity within religions is examined directly.",
      },
      {
        tip: "Give non-religious views their strongest form",
        detail:
          "Humanist and atheist arguments carry marks. Present them as thoughtful positions, not as things to dismiss in a sentence.",
      },
      {
        tip: "Know why religion is hard to define",
        detail:
          "Substantive definitions exclude Buddhism; functional ones include football. Being able to say WHY definitions fail is worth more than reciting one.",
      },
      {
        tip: "Use UK examples where you can",
        detail:
          "Naming the census, the established Church of England, or specific communities grounds an answer in evidence rather than generality.",
      },
    ],
    practice: [
      {
        question: "What is a person who believes in a God or gods called?",
        accept: ["theist", "a theist"],
        answer:
          "A theist. Monotheists believe in one God; polytheists believe in many, or in many forms of the divine.",
      },
      {
        question: "What is a person who does not believe in any God called?",
        accept: ["atheist", "an atheist"],
        answer:
          "An atheist. It is a positive position held for reasons, not simply an absence of thought about the question.",
      },
      {
        question: "What is a person who believes we cannot know whether God exists called?",
        accept: ["agnostic", "an agnostic"],
        answer:
          "An agnostic. The claim is about KNOWLEDGE, which is what separates it from atheism's claim about belief.",
      },
      {
        question: "What is the belief in ONE God called?",
        accept: ["monotheism", "monotheistic"],
        answer:
          "Monotheism. Christianity, Islam and Judaism are the three most commonly studied monotheistic religions.",
      },
      {
        question: "What is the theory that religion loses social influence as societies modernise?",
        accept: ["secularisation", "secularization"],
        answer:
          "Secularisation. Evidence for it is mixed — practice has fallen in western Europe while religious populations have grown globally.",
      },
      {
        question: "What is a non-religious approach to life based on reason and human welfare called?",
        accept: ["humanism", "humanist"],
        answer:
          "Humanism. Humanists generally hold that this life is the only one we have, which is why they emphasise making it good for others.",
      },
      {
        question: "What term describes a society where many religions live alongside one another?",
        accept: ["multi-faith", "multifaith", "multi faith", "multi-faith society", "pluralist"],
        answer:
          "A multi-faith society. The UK is one, and it is also increasingly non-religious — the two facts sit together.",
      },
      {
        question: "Which religion has the largest number of followers in the UK?",
        accept: ["christianity", "christian"],
        answer:
          "Christianity, though affiliation is far higher than regular attendance, and 'no religion' is now among the largest census categories.",
      },
      {
        question: "Does a substantive definition of religion focus on what is BELIEVED or what religion DOES?",
        accept: ["believed", "what is believed", "belief", "beliefs"],
        answer:
          "What is believed — usually in God or the supernatural. Its weakness is that it can exclude Theravada Buddhism.",
      },
      {
        question: "Which religion is often used to show that defining religion by belief in God does not work?",
        accept: ["buddhism", "buddhist", "theravada buddhism"],
        answer:
          "Buddhism. Theravada Buddhism does not centre on a creator God, yet almost everyone classes it as a religion.",
      },
      {
        question: "Which of these is a SUBSTANTIVE weakness of functional definitions of religion?",
        choices: [
          "They can include things like football fandom that are not religions",
          "They exclude Christianity",
          "They only apply to the UK",
          "They cannot be written down",
        ],
        accept: ["They can include things like football fandom that are not religions"],
        answer:
          "Defining religion by what it DOES — belonging, meaning, ritual — sweeps in activities nobody would call religious.",
      },
      {
        question: "Which statement is written in the correct style for an RE exam?",
        choices: [
          "Muslims believe the Qur'an is the word of God.",
          "The Qur'an is the word of God.",
          "The Qur'an is not the word of God.",
          "Everyone knows the Qur'an is important.",
        ],
        accept: ["Muslims believe the Qur'an is the word of God."],
        answer:
          "Attribution is the whole skill. The second and third sentences take sides, and the fourth says nothing.",
      },
      {
        question: "Which best describes an AGNOSTIC?",
        choices: [
          "Someone who thinks it is not possible to know whether God exists",
          "Someone who is certain God does not exist",
          "Someone who is certain God exists",
          "Someone who belongs to no religion but prays",
        ],
        accept: ["Someone who thinks it is not possible to know whether God exists"],
        answer:
          "Agnosticism is a claim about knowledge; atheism is a claim about belief. A person can be both agnostic and atheist.",
      },
      {
        question: "Which is a criticism of the claim that religion always causes conflict?",
        choices: [
          "Non-religious ideologies have also caused enormous harm",
          "No religious war has ever happened",
          "Religion has no effect on society",
          "Only atheists start wars",
        ],
        accept: ["Non-religious ideologies have also caused enormous harm"],
        answer:
          "The stronger analysis is that conflict follows power, land and identity, and that religion is often one factor among several rather than the sole cause.",
      },
      {
        question: "Which is the most accurate description of religion in the UK today?",
        choices: [
          "Diverse, with Christianity largest and a growing non-religious population",
          "Entirely Christian",
          "Entirely non-religious",
          "Equally split between six religions",
        ],
        accept: ["Diverse, with Christianity largest and a growing non-religious population"],
        answer:
          "Both facts are true at once, and a good answer holds them together rather than choosing the one that suits its argument.",
      },
      {
        question: "Which phrase would LOSE marks in an RE exam?",
        choices: [
          "All religious people believe the same thing",
          "Many Christians believe...",
          "Sunni and Shi'a Muslims differ on...",
          "Humanists would argue that...",
        ],
        accept: ["All religious people believe the same thing"],
        answer:
          "Diversity within and between religions is examined directly, so sweeping claims are penalised even when the rest of the answer is strong.",
      },
      {
        question: "Explain why religion is difficult to define. Write three or four sentences.",
        answer:
          "Substantive definitions, which focus on belief in God or the supernatural, exclude traditions such as Theravada Buddhism that almost everyone regards as religions. Functional definitions, which focus on what religion does — providing meaning, community, ritual and identity — are so broad that they can include nationalism or support for a football club. Religions also vary enormously among themselves, so any feature you pick as essential turns out to be missing from at least one of them. Most scholars therefore use a family resemblance approach, treating religions as sharing overlapping characteristics without all sharing a single defining one. Mark this one yourself: both types of definition, a problem with each, and the family resemblance response is the full answer.",
      },
      {
        question: "'Religion does more harm than good.' Evaluate this statement, giving arguments for and against.",
        answer:
          "For: religion has been used to justify war, persecution, discrimination against women and LGBT people, and resistance to scientific and social progress; religious authority can be used to control people and silence questioning; and division along religious lines has deepened conflicts in many parts of the world. Against: religious organisations run a very large share of the world's charitable and humanitarian work; religious conviction motivated abolitionists, the civil rights movement and much anti-poverty campaigning; religion offers meaning, community and comfort in bereavement that many people find nowhere else; and where harm has been done, critics argue it came from power and human failing using religion, rather than from belief itself. A defensible judgement is that the question is badly posed — religion is not a single thing with a single effect, and the same tradition has produced both slave owners and abolitionists. Whether it helps or harms depends heavily on who holds authority within it and how questioning is treated. Mark this one yourself: both sides argued at full strength, specific examples, and a conclusion that follows from the argument.",
      },
    ],
    misconceptions: [
      {
        wrong: "Atheists and agnostics are basically the same.",
        right:
          "Atheism is about belief — not believing in God. Agnosticism is about knowledge — holding that we cannot know.",
      },
      {
        wrong: "All members of a religion believe the same things.",
        right:
          "Diversity within religions is enormous. Catholics and Quakers, or Sunni and Shi'a Muslims, differ on important questions.",
      },
      {
        wrong: "Religion means believing in God.",
        right:
          "Theravada Buddhism has no creator God yet is universally treated as a religion, which is why definitions by belief in God fail.",
      },
      {
        wrong: "The UK is a Christian country, so other religions are visitors here.",
        right:
          "Christianity is the largest religion and England has an established church, but Judaism, Islam, Hinduism and Sikhism are long-established in Britain, and 'no religion' is now among the largest groups.",
      },
      {
        wrong: "Studying RE means being told what to believe.",
        right:
          "RE studies what people believe and why, and how they argue for it. It does not require or expect any particular belief from the student.",
      },
    ],
  },

  "religious-education/introducing-christianity": {
    summary:
      "Christianity is the world's largest religion and the largest in the UK. This topic covers what Christians believe about God, Jesus and salvation, the main denominations and why they differ, the Bible and the Church, and how Christians put belief into practice. Beliefs are described as what Christians hold, not as claims this site makes.",
    keyFacts: [
      {
        heading: "God and the Trinity",
        points: [
          "Christianity is MONOTHEISTIC: Christians believe there is one God.",
          "Christians describe God as omnipotent (all-powerful), omniscient (all-knowing), omnibenevolent (all-loving) and eternal.",
          "The TRINITY is the belief that the one God is three persons: Father, Son and Holy Spirit.",
          "Christians hold this is one God in three persons, not three gods — a distinction they consider essential.",
          "The Nicene Creed, agreed in the fourth century, is the statement of belief most widely accepted across denominations.",
          "Christians believe God is both transcendent (beyond the world) and immanent (present within it).",
        ],
      },
      {
        heading: "Jesus, and beliefs about salvation",
        points: [
          "Christians believe Jesus is the Son of God and the Messiah promised in Jewish scripture.",
          "The INCARNATION is the belief that God became human in Jesus — fully God and fully human.",
          "The CRUCIFIXION is Jesus's execution by the Romans; Christians believe he died willingly.",
          "The RESURRECTION is the belief that Jesus rose from the dead on the third day, and is central to Christian faith.",
          "ATONEMENT is the belief that Jesus's death repaired the relationship between God and humanity that sin had broken.",
          "SALVATION is being saved from sin and its consequences; Christians differ over the balance between faith, grace and good works.",
        ],
      },
      {
        heading: "The Bible and the Church",
        points: [
          "The BIBLE is the Christian holy book, in two parts: the Old Testament and the New Testament.",
          "The GOSPELS — Matthew, Mark, Luke and John — record the life and teaching of Jesus.",
          "Christians differ over how to read the Bible: some take it literally, others as inspired but written by humans in their own time.",
          "The CHURCH means both the building and the worldwide community of Christians.",
          "Roman Catholicism is the largest denomination worldwide, led by the Pope.",
          "Orthodox, Anglican, Baptist, Methodist, Pentecostal and Quaker traditions all differ in worship, authority and practice.",
        ],
      },
      {
        heading: "Living as a Christian",
        points: [
          "WORSHIP may be liturgical, following a set order, or non-liturgical and informal.",
          "Prayer includes set prayers such as the Lord's Prayer and personal, spontaneous prayer.",
          "SACRAMENTS are outward signs of inward grace; baptism and Holy Communion are the two most widely shared.",
          "Christmas celebrates the birth of Jesus; Easter, the more important festival theologically, celebrates the resurrection.",
          "The two greatest commandments taught by Jesus are to love God and to love your neighbour as yourself.",
          "Christian teaching on loving one's neighbour has motivated large-scale charity, hospital founding and social campaigning.",
        ],
      },
    ],
    flashcards: [
      { term: "Trinity", definition: "The Christian belief that the one God is three persons: Father, Son and Holy Spirit." },
      { term: "Incarnation", definition: "The belief that God became human in the person of Jesus." },
      { term: "Resurrection", definition: "The belief that Jesus rose from the dead on the third day after his crucifixion." },
      { term: "Crucifixion", definition: "The execution of Jesus by the Romans by being nailed to a cross." },
      { term: "Atonement", definition: "The belief that Jesus's death repaired the relationship between God and humanity." },
      { term: "Salvation", definition: "Being saved from sin and its consequences, according to Christian belief." },
      { term: "Grace", definition: "God's undeserved love and help, freely given, in Christian teaching." },
      { term: "Omnipotent", definition: "All-powerful — one of the qualities Christians attribute to God." },
      { term: "Omnibenevolent", definition: "All-loving — one of the qualities Christians attribute to God." },
      { term: "Gospel", definition: "One of the four New Testament accounts of the life and teaching of Jesus." },
      { term: "Sacrament", definition: "An outward sign of inward grace, such as baptism or Holy Communion." },
      { term: "Baptism", definition: "A sacrament using water to mark entry into the Christian community." },
      { term: "Holy Communion", definition: "The sacrament sharing bread and wine, recalling Jesus's last supper." },
      { term: "Denomination", definition: "A distinct group within Christianity, such as Catholic, Anglican or Baptist." },
      { term: "Creed", definition: "A formal statement of Christian belief, such as the Nicene Creed." },
      { term: "Evangelism", definition: "Sharing the Christian message with others in the hope they will believe." },
    ],
    examTips: [
      {
        tip: "Say 'Christians believe', every time",
        detail:
          "The Trinity, the resurrection and the incarnation are beliefs held by Christians, and must be written that way rather than as statements of fact.",
      },
      {
        tip: "The Trinity is one God, not three",
        detail:
          "Writing that Christians believe in three gods is a serious error. One God in three persons is the phrase to learn.",
      },
      {
        tip: "Name denominations rather than generalising",
        detail:
          "Catholics, Quakers and Baptists differ on baptism, authority and worship. Naming which group you mean lifts an answer immediately.",
      },
      {
        tip: "Easter matters more than Christmas theologically",
        detail:
          "Christians regard the resurrection as the foundation of the faith. Assuming Christmas is the most important festival is a common slip.",
      },
      {
        tip: "Learn the two greatest commandments",
        detail:
          "Love God, and love your neighbour as yourself. They can be used in almost any ethics question about Christian teaching.",
      },
      {
        tip: "Different Christians read the Bible differently",
        detail:
          "Literal, liberal and everything in between. Recognising that range is worth marks in questions about authority and science.",
      },
    ],
    practice: [
      {
        question: "What is the Christian belief that one God is three persons called?",
        accept: ["trinity", "the trinity", "holy trinity"],
        answer:
          "The Trinity — Father, Son and Holy Spirit. Christians hold this is one God in three persons, not three separate gods.",
      },
      {
        question: "What is the belief that God became human in Jesus called?",
        accept: ["incarnation", "the incarnation"],
        answer:
          "The Incarnation. Christians believe Jesus was fully God and fully human, which is why he is called the Son of God.",
      },
      {
        question: "What do Christians believe happened three days after the crucifixion?",
        accept: ["resurrection", "the resurrection", "jesus rose from the dead", "he rose from the dead"],
        answer:
          "The Resurrection — Christians believe Jesus rose from the dead. It is celebrated at Easter and treated as the foundation of the faith.",
      },
      {
        question: "How many Gospels are there in the New Testament? Give the number only.",
        accept: ["4", "four"],
        answer:
          "4 — Matthew, Mark, Luke and John. They record the life and teaching of Jesus.",
      },
      {
        question: "What word means all-powerful, used by Christians to describe God?",
        accept: ["omnipotent", "omnipotence"],
        answer:
          "Omnipotent. Omniscient means all-knowing and omnibenevolent means all-loving; all three appear in the problem of evil.",
      },
      {
        question: "What is the sacrament using water to mark entry into the Christian community?",
        accept: ["baptism", "christening"],
        answer:
          "Baptism. Denominations differ: many baptise infants, while Baptists and others baptise only those old enough to choose.",
      },
      {
        question: "Which festival do Christians regard as most important theologically?",
        accept: ["easter"],
        answer:
          "Easter, because it celebrates the resurrection. Christmas is more widely observed culturally but is not the theological centre.",
      },
      {
        question: "Which Christian denomination is led by the Pope?",
        accept: ["roman catholic", "catholic", "catholicism", "roman catholicism"],
        answer:
          "Roman Catholicism, the largest denomination worldwide. Orthodox, Anglican and Protestant churches do not accept papal authority.",
      },
      {
        question: "What is the term for a distinct group within Christianity, such as Anglican or Baptist?",
        accept: ["denomination", "a denomination"],
        answer:
          "A denomination. Using the specific name rather than 'Christians' is one of the easiest ways to raise an answer's level.",
      },
      {
        question: "Name one of the two greatest commandments taught by Jesus.",
        accept: ["love god", "love your neighbour", "love your neighbor", "love thy neighbour", "love god with all your heart", "love others"],
        answer:
          "Love God with all your heart, and love your neighbour as yourself. Both are used constantly in Christian ethics.",
      },
      {
        question: "Which statement best describes the Christian belief in the Trinity?",
        choices: [
          "One God in three persons: Father, Son and Holy Spirit",
          "Three separate gods who work together",
          "God changes into a different form each day",
          "God is one person with three names",
        ],
        accept: ["One God in three persons: Father, Son and Holy Spirit"],
        answer:
          "Christians insist on one God in three persons. Both 'three gods' and 'one person with three names' are positions the Church rejected.",
      },
      {
        question: "Which belief do Christians hold about Jesus's death?",
        choices: [
          "It brought atonement, repairing the relationship between God and humanity",
          "It was an accident with no religious meaning",
          "It proved he was not the Messiah",
          "It ended Christianity"
        ],
        accept: ["It brought atonement, repairing the relationship between God and humanity"],
        answer:
          "Atonement is the key term. Christians believe Jesus died willingly, and that the resurrection followed.",
      },
      {
        question: "Which is TRUE about how Christians read the Bible?",
        choices: [
          "Christians differ, from literal readings to seeing it as inspired but human-written",
          "All Christians read it completely literally",
          "No Christians treat it as authoritative",
          "Only priests are permitted to read it",
        ],
        accept: ["Christians differ, from literal readings to seeing it as inspired but human-written"],
        answer:
          "That range explains why Christians reach different conclusions on science, creation and ethics from the same text.",
      },
      {
        question: "Which pair of sacraments is shared most widely across Christian denominations?",
        choices: [
          "Baptism and Holy Communion",
          "Marriage and confession",
          "Pilgrimage and fasting",
          "Ordination and anointing",
        ],
        accept: ["Baptism and Holy Communion"],
        answer:
          "Catholics recognise seven sacraments; many Protestant churches recognise these two, and Quakers observe none outwardly.",
      },
      {
        question: "Which statement would be written correctly in an RE exam?",
        choices: [
          "Christians believe Jesus rose from the dead.",
          "Jesus rose from the dead.",
          "Jesus obviously did not rise from the dead.",
          "The resurrection is a proven historical fact.",
        ],
        accept: ["Christians believe Jesus rose from the dead."],
        answer:
          "Attribution is the skill being tested. The other three all take a position the exam does not ask you to take.",
      },
      {
        question: "Explain what Christians mean by the Incarnation, and why it matters to them. Write three or four sentences.",
        answer:
          "The Incarnation is the Christian belief that God became human in the person of Jesus, who is held to be fully God and fully human at the same time. It matters because it means Christians believe God did not stay distant but entered human life directly, experiencing hunger, friendship, grief and pain. That belief underpins the idea that God understands human suffering from the inside rather than only observing it. It is also the basis for the belief that Jesus's death could bring atonement, since Christians hold that only someone both fully divine and fully human could bridge the gap between God and humanity. Mark this one yourself: a clear definition, the 'fully God and fully human' phrase, and at least one reason it matters to believers.",
      },
      {
        question: "'The most important Christian belief is the resurrection.' Evaluate this statement.",
        answer:
          "For: Christians regard the resurrection as the event that confirms Jesus was the Son of God rather than simply a teacher who was executed; Paul writes that if Christ has not been raised then Christian faith is empty, which is about as direct as scripture gets; and it grounds the hope of life after death that shapes Christian attitudes to death and grief. Against: the Incarnation could be argued as more fundamental, since without God becoming human there is no resurrection to have; some Christians place greater weight on Jesus's teaching and example, particularly Quakers and those in the liberal tradition, and would say how you live matters more than which events you affirm; and belief in the Trinity is arguably prior to both, since it defines who Christians think Jesus is. A defensible judgement is that the resurrection is the belief most Christians would identify as the foundation, and the credal statements support that — but 'most important' depends on whether you mean logically prior, most distinctive, or most influential on daily life, and the answer differs for each. Mark this one yourself: both sides with named traditions or sources, and a conclusion that does more than pick a side.",
      },
    ],
    misconceptions: [
      {
        wrong: "Christians believe in three gods.",
        right:
          "Christians believe in ONE God in three persons — Father, Son and Holy Spirit. The distinction is central to the doctrine.",
      },
      {
        wrong: "Christmas is the most important Christian festival.",
        right:
          "It is the most widely observed culturally, but Christians generally regard Easter as more important, because it celebrates the resurrection.",
      },
      {
        wrong: "All Christians read the Bible literally.",
        right:
          "Christians range from literal readings to treating scripture as divinely inspired but written by people in their own historical setting.",
      },
      {
        wrong: "All Christian churches are basically the same.",
        right:
          "Denominations differ substantially on authority, sacraments, worship and ethics. Catholics, Baptists and Quakers are not interchangeable.",
      },
      {
        wrong: "Christians believe Jesus was only a good human teacher.",
        right:
          "That is a view held by some non-Christians. Christian belief is that Jesus is the Son of God, fully divine and fully human.",
      },
    ],
  },

  "religious-education/introducing-islam": {
    summary:
      "Islam is the world's second largest religion and the second largest in the UK. This topic covers what Muslims believe about God and the prophets, the Qur'an, the Five Pillars, and the difference between Sunni and Shi'a Islam. Beliefs are described as what Muslims hold, not as claims this site makes.",
    keyFacts: [
      {
        heading: "Belief in God",
        points: [
          "Islam is strictly MONOTHEISTIC. Muslims believe in one God, called Allah — the Arabic word for God.",
          "TAWHID is the belief in the oneness of God, and is the most fundamental Islamic belief.",
          "SHIRK, associating anything or anyone with God, is regarded as the most serious sin.",
          "Muslims believe God has no image, so God is never depicted in Islamic art.",
          "God is described through the 99 Names, including the Merciful, the Compassionate and the Just.",
          "Muslims believe God is transcendent and beyond full human understanding, yet closer to a person than their jugular vein.",
        ],
      },
      {
        heading: "Prophets and holy books",
        points: [
          "Muslims believe God sent prophets throughout history, including Adam, Ibrahim, Musa and Isa — Abraham, Moses and Jesus.",
          "Muhammad is believed to be the final prophet, the Seal of the Prophets.",
          "Muslims respect Jesus as a prophet but do not accept that he was the Son of God or that he was crucified.",
          "The QUR'AN is believed to be the direct word of God, revealed to Muhammad over about 23 years.",
          "It is treated with great care, and many Muslims learn to recite it in Arabic.",
          "The SUNNAH and HADITH record what Muhammad said and did, and guide Muslims where the Qur'an is not specific.",
        ],
      },
      {
        heading: "The Five Pillars",
        points: [
          "SHAHADAH is the declaration of faith: there is no god but God, and Muhammad is his messenger.",
          "SALAH is prayer, performed five times a day facing Makkah, preceded by ritual washing.",
          "ZAKAH is giving a fixed share of surplus wealth to those in need, usually 2.5%.",
          "SAWM is fasting during the month of Ramadan from dawn until sunset.",
          "HAJJ is the pilgrimage to Makkah, expected once in a lifetime of those able to make it.",
          "Shi'a Muslims observe the Ten Obligatory Acts, which include these duties alongside others.",
        ],
      },
      {
        heading: "Sunni, Shi'a, and daily life",
        points: [
          "Around 85 to 90% of Muslims are SUNNI; most of the rest are SHI'A.",
          "The split began as a disagreement over who should lead the community after Muhammad's death.",
          "Sunnis hold that the leader should be chosen by the community; Shi'a hold that leadership belonged to Muhammad's family, beginning with Ali.",
          "Both share belief in one God, the Qur'an and the prophethood of Muhammad.",
          "The MOSQUE is the place of communal worship; Friday midday prayer is especially important.",
          "The two main festivals are Id-ul-Fitr, marking the end of Ramadan, and Id-ul-Adha, during Hajj.",
        ],
      },
    ],
    flashcards: [
      { term: "Tawhid", definition: "The Islamic belief in the absolute oneness of God." },
      { term: "Allah", definition: "The Arabic word for God, used by Muslims and also by Arabic-speaking Christians." },
      { term: "Shirk", definition: "Associating anything or anyone with God — regarded in Islam as the gravest sin." },
      { term: "Qur'an", definition: "The Islamic holy book, believed by Muslims to be the direct word of God." },
      { term: "Sunnah", definition: "The example set by the Prophet Muhammad's words and actions." },
      { term: "Hadith", definition: "Recorded sayings and actions of Muhammad, used as guidance alongside the Qur'an." },
      { term: "Shahadah", definition: "The Muslim declaration of faith, and the first Pillar of Islam." },
      { term: "Salah", definition: "Prayer five times a day facing Makkah, the second Pillar." },
      { term: "Zakah", definition: "Giving a fixed share of surplus wealth to those in need, the third Pillar." },
      { term: "Sawm", definition: "Fasting from dawn to sunset during Ramadan, the fourth Pillar." },
      { term: "Hajj", definition: "The pilgrimage to Makkah, expected once in a lifetime of those able to go." },
      { term: "Ummah", definition: "The worldwide community of Muslims." },
      { term: "Mosque", definition: "The Muslim place of communal worship." },
      { term: "Id-ul-Fitr", definition: "The festival marking the end of Ramadan." },
      { term: "Imam", definition: "A leader of prayer in Sunni Islam; in Shi'a Islam, a divinely appointed leader." },
      { term: "Sunni and Shi'a", definition: "The two main branches of Islam, divided originally over leadership after Muhammad." },
    ],
    examTips: [
      {
        tip: "Allah simply means God in Arabic",
        detail:
          "Writing about 'Allah and God' as if they were two different beings is a common and costly error. Arabic-speaking Christians use the word too.",
      },
      {
        tip: "Learn all Five Pillars in order",
        detail:
          "Shahadah, Salah, Zakah, Sawm, Hajj. Being able to name and briefly explain each is worth marks across many questions.",
      },
      {
        tip: "Distinguish Sunni and Shi'a accurately",
        detail:
          "The origin is a disagreement about leadership, not about the nature of God. Both share tawhid, the Qur'an and Muhammad's prophethood.",
      },
      {
        tip: "Muhammad is a prophet, not divine",
        detail:
          "Muslims do not worship Muhammad. Saying they do is a serious error and shows the topic has not been understood.",
      },
      {
        tip: "Use Qur'an and Sunnah as sources of authority",
        detail:
          "In ethics questions, showing you know Muslims turn to the Qur'an first and the Sunnah and Hadith after lifts the answer.",
      },
      {
        tip: "Not every Muslim can fulfil every Pillar",
        detail:
          "Hajj applies to those physically and financially able; the sick, pregnant and travelling are excused fasting. Noting exemptions shows real knowledge.",
      },
    ],
    practice: [
      {
        question: "What is the Islamic belief in the oneness of God called?",
        accept: ["tawhid", "tawheed"],
        answer:
          "Tawhid. It is the most fundamental Islamic belief, and its opposite, shirk, is regarded as the gravest sin.",
      },
      {
        question: "How many Pillars of Islam are there? Give the number only.",
        accept: ["5", "five"],
        answer:
          "5 — Shahadah, Salah, Zakah, Sawm and Hajj. Shi'a Muslims follow the Ten Obligatory Acts, which include these duties.",
      },
      {
        question: "What is the Muslim declaration of faith called?",
        accept: ["shahadah", "the shahadah"],
        answer:
          "The Shahadah: there is no god but God, and Muhammad is his messenger. Sincerely saying it is how a person becomes Muslim.",
      },
      {
        question: "How many times a day do Muslims perform salah? Give the number only.",
        accept: ["5", "five"],
        answer:
          "5, facing Makkah, preceded by ritual washing called wudu. Friday midday prayer at the mosque has particular importance.",
      },
      {
        question: "During which month do Muslims fast from dawn to sunset?",
        accept: ["ramadan"],
        answer:
          "Ramadan. The fast is called sawm, and the sick, pregnant, elderly, young and travelling are excused.",
      },
      {
        question: "What is the pilgrimage to Makkah called?",
        accept: ["hajj", "the hajj"],
        answer:
          "Hajj, expected once in a lifetime of Muslims who are physically and financially able to make it.",
      },
      {
        question: "What is the Islamic holy book called?",
        accept: ["quran", "qur'an", "koran", "the quran"],
        answer:
          "The Qur'an, believed by Muslims to be the direct word of God revealed to Muhammad over roughly 23 years.",
      },
      {
        question: "What is the worldwide community of Muslims called?",
        accept: ["ummah", "the ummah"],
        answer:
          "The Ummah. The idea of belonging to one global community shapes Muslim attitudes to charity and to conflict affecting Muslims elsewhere.",
      },
      {
        question: "What is the sin of associating anything or anyone with God called?",
        accept: ["shirk"],
        answer:
          "Shirk. It is why God is never depicted in Islamic art, and why calligraphy and pattern are used instead.",
      },
      {
        question: "Which festival marks the end of Ramadan?",
        accept: ["id-ul-fitr", "eid-ul-fitr", "eid ul fitr", "id ul fitr", "eid al-fitr"],
        answer:
          "Id-ul-Fitr. Id-ul-Adha, during Hajj, remembers Ibrahim's willingness to sacrifice his son.",
      },
      {
        question: "What does the word 'Allah' mean?",
        choices: [
          "The Arabic word for God",
          "The name of a prophet",
          "A different god from the God of Christians and Jews",
          "The Islamic holy book",
        ],
        accept: ["The Arabic word for God"],
        answer:
          "It is simply the Arabic for God, and Arabic-speaking Christians use it too. Treating it as a separate deity is a common error.",
      },
      {
        question: "What do Muslims believe about Muhammad?",
        choices: [
          "He is the final prophet, and human rather than divine",
          "He is the Son of God",
          "He is one of several gods",
          "He wrote the Qur'an himself",
        ],
        accept: ["He is the final prophet, and human rather than divine"],
        answer:
          "Muslims do not worship Muhammad. They believe the Qur'an is God's word, revealed through him rather than written by him.",
      },
      {
        question: "What was the original cause of the Sunni-Shi'a split?",
        choices: [
          "A disagreement over who should lead the community after Muhammad's death",
          "A disagreement about whether God exists",
          "A dispute over the number of pillars",
          "A disagreement about the existence of the Qur'an",
        ],
        accept: ["A disagreement over who should lead the community after Muhammad's death"],
        answer:
          "Both branches share tawhid, the Qur'an and Muhammad's prophethood. The division was about leadership and authority.",
      },
      {
        question: "What do Muslims believe about Jesus?",
        choices: [
          "He was a prophet, but not the Son of God",
          "He was the Son of God",
          "He never existed",
          "He was the final prophet",
        ],
        accept: ["He was a prophet, but not the Son of God"],
        answer:
          "Isa is honoured as a prophet in Islam. Muhammad is held to be the final prophet, and Muslims do not accept the crucifixion as Christians describe it.",
      },
      {
        question: "Which source do Muslims regard as the highest authority?",
        choices: ["The Qur'an", "The Hadith", "The Sunnah", "The imam's opinion"],
        accept: ["The Qur'an"],
        answer:
          "The Qur'an comes first as the direct word of God. The Sunnah and Hadith guide Muslims where the Qur'an is not specific.",
      },
      {
        question: "Explain the importance of the Five Pillars in a Muslim's life. Write three or four sentences.",
        answer:
          "The Five Pillars structure belief into daily, annual and lifetime practice, so faith is something done rather than only held. Shahadah states what a Muslim believes, and salah returns them to it five times a day, shaping the rhythm of ordinary life around God. Zakah and sawm both direct attention outwards: giving a share of surplus wealth supports those in need, and fasting is widely described by Muslims as building empathy with the hungry as well as self-discipline. Hajj brings millions together dressed identically, which Muslims describe as a powerful expression of the equality of all believers before God and of belonging to the ummah. Mark this one yourself: all five named, and at least two explained in terms of what they DO for the believer.",
      },
      {
        question: "'Salah is the most important of the Five Pillars.' Evaluate this statement.",
        answer:
          "For: salah is performed five times every day, so it shapes daily life more than any other pillar; it is the pillar most often mentioned in the Qur'an after belief itself; and Muslims describe it as the direct, regular link between the believer and God, available to everyone regardless of wealth or health. Against: Shahadah could be argued as more fundamental, since a person becomes Muslim by sincerely declaring it and every other pillar depends on that belief; zakah has the greatest effect on other people and so might be judged most important in its consequences; and hajj is described by many Muslims as the most transformative single experience of their lives. It is also worth noting that salah has more exemptions than the declaration of faith, which suggests it is not the foundation. A defensible judgement is that Shahadah is logically first because everything rests on it, while salah is the most important in practice because it is the one that shapes every day — and which counts as 'most important' depends on whether you mean foundational or influential. Mark this one yourself: both sides, at least two pillars compared directly, and a conclusion that explains what 'important' is being taken to mean.",
      },
    ],
    misconceptions: [
      {
        wrong: "Allah is a different god from the God of Christians and Jews.",
        right:
          "Allah is simply the Arabic word for God. Arabic-speaking Christians use the same word in church.",
      },
      {
        wrong: "Muslims worship Muhammad.",
        right:
          "Muslims worship God alone. Muhammad is honoured as the final prophet, and is human, not divine.",
      },
      {
        wrong: "Every Muslim must complete all Five Pillars.",
        right:
          "Hajj applies to those able to afford and undertake it, and the sick, pregnant, young and travelling are excused fasting.",
      },
      {
        wrong: "Sunni and Shi'a Muslims believe in different gods.",
        right:
          "Both hold tawhid, accept the Qur'an and honour Muhammad. The original division was about leadership after his death.",
      },
      {
        wrong: "Muslims reject Jesus.",
        right:
          "Isa is honoured as one of the great prophets in Islam. What Muslims reject is the claim that he was the Son of God.",
      },
    ],
  },

  "religious-education/introducing-judaism": {
    summary:
      "Judaism is the oldest of the three Abrahamic religions and has been part of British life for centuries. This topic covers Jewish beliefs about God and the covenant, the Torah and the synagogue, the main festivals and the Sabbath, and the difference between Orthodox and Reform Judaism.",
    keyFacts: [
      {
        heading: "God and the covenant",
        points: [
          "Judaism is MONOTHEISTIC: Jews believe in one God, creator and sustainer of the universe.",
          "Many Jews avoid writing or saying God's name directly, out of respect.",
          "A COVENANT is an agreement between God and people, and is central to Jewish identity.",
          "Jews believe God made a covenant with Abraham, promising descendants and a land.",
          "The covenant at Sinai, through Moses, included the giving of the Ten Commandments.",
          "Jews describe themselves as the chosen people, understood as chosen for responsibility rather than privilege.",
        ],
      },
      {
        heading: "The Torah and Jewish law",
        points: [
          "The TORAH is the first five books of the Hebrew Bible and the most important Jewish text.",
          "The TENAKH is the whole Hebrew Bible: Torah, Nevi'im (prophets) and Ketuvim (writings).",
          "The TALMUD records rabbinic discussion and interpretation of the law.",
          "There are traditionally 613 MITZVOT — commandments — covering worship, ethics and daily life.",
          "KOSHER food laws set out what may be eaten and how it must be prepared.",
          "Jews differ over how far ancient law binds modern life, which is the main division between movements.",
        ],
      },
      {
        heading: "Worship, Shabbat and the synagogue",
        points: [
          "The SYNAGOGUE is the place of communal worship, study and community life.",
          "A RABBI is a teacher and interpreter of Jewish law rather than a priest.",
          "SHABBAT runs from sunset on Friday to nightfall on Saturday and is a day of rest.",
          "Shabbat is welcomed with candles, blessings over wine and bread, and a family meal.",
          "BAR MITZVAH for boys at 13 and BAT MITZVAH for girls mark taking on adult religious responsibility.",
          "The Torah scroll is handwritten, treated with great care, and read publicly through the year.",
        ],
      },
      {
        heading: "Festivals, and movements within Judaism",
        points: [
          "PESACH, or Passover, remembers the escape from slavery in Egypt.",
          "ROSH HASHANAH is the Jewish New Year, and YOM KIPPUR the Day of Atonement, a fast day.",
          "ORTHODOX Jews hold the Torah is the direct word of God and its laws remain fully binding.",
          "REFORM Jews hold the Torah is divinely inspired but shaped by its time, so practice may be adapted.",
          "Reform communities generally have mixed seating and ordain women as rabbis; Orthodox communities generally do not.",
          "The Holocaust is remembered across all movements, and raised profound questions about God and suffering.",
        ],
      },
    ],
    flashcards: [
      { term: "Covenant", definition: "An agreement between God and people, central to Jewish identity." },
      { term: "Torah", definition: "The first five books of the Hebrew Bible, the most important Jewish text." },
      { term: "Tenakh", definition: "The whole Hebrew Bible: Torah, Nevi'im and Ketuvim." },
      { term: "Talmud", definition: "The record of rabbinic discussion and interpretation of Jewish law." },
      { term: "Mitzvot", definition: "The commandments, traditionally numbering 613, covering worship, ethics and daily life." },
      { term: "Synagogue", definition: "The Jewish place of communal worship, study and community life." },
      { term: "Rabbi", definition: "A teacher and interpreter of Jewish law, rather than a priest." },
      { term: "Shabbat", definition: "The day of rest from sunset on Friday to nightfall on Saturday." },
      { term: "Kosher", definition: "Food that is permitted and prepared according to Jewish dietary law." },
      { term: "Bar Mitzvah", definition: "The ceremony marking a boy taking on adult religious responsibility at 13." },
      { term: "Bat Mitzvah", definition: "The ceremony marking a girl taking on adult religious responsibility." },
      { term: "Pesach", definition: "Passover, remembering the escape from slavery in Egypt." },
      { term: "Yom Kippur", definition: "The Day of Atonement, a fast day for repentance and forgiveness." },
      { term: "Rosh Hashanah", definition: "The Jewish New Year." },
      { term: "Orthodox Judaism", definition: "The movement holding the Torah is the direct word of God and fully binding." },
      { term: "Reform Judaism", definition: "The movement holding the Torah is divinely inspired but shaped by its time." },
    ],
    examTips: [
      {
        tip: "A rabbi is a teacher, not a priest",
        detail:
          "Rabbis interpret and teach the law. Calling them priests suggests a role Judaism does not have and loses credibility.",
      },
      {
        tip: "'Chosen people' means responsibility",
        detail:
          "Jews generally understand it as being chosen to keep the covenant and set an example, not as being superior. Say so explicitly.",
      },
      {
        tip: "Orthodox and Reform differ on authority",
        detail:
          "Direct word of God versus divinely inspired but of its time. That single distinction explains most differences in practice.",
      },
      {
        tip: "Torah and Tenakh are not the same",
        detail:
          "Torah is the first five books; Tenakh is the whole Hebrew Bible. Using them interchangeably is a frequent slip.",
      },
      {
        tip: "Shabbat is about rest, not restriction",
        detail:
          "Jews commonly describe it as a gift and a joy. Presenting it only as a list of prohibited activities misses what it means to them.",
      },
      {
        tip: "Be precise and respectful about the Holocaust",
        detail:
          "It is examined in relation to belief and suffering. Handle it with care and accuracy rather than as a rhetorical example.",
      },
    ],
    practice: [
      {
        question: "What is the agreement between God and the Jewish people called?",
        accept: ["covenant", "the covenant"],
        answer:
          "The covenant. Jews trace it to Abraham and to Moses at Sinai, and it underpins Jewish identity and obligation.",
      },
      {
        question: "What are the first five books of the Hebrew Bible called?",
        accept: ["torah", "the torah"],
        answer:
          "The Torah, the most important Jewish text. The whole Hebrew Bible is the Tenakh.",
      },
      {
        question: "What is the Jewish day of rest called?",
        accept: ["shabbat", "sabbath", "the sabbath"],
        answer:
          "Shabbat, from sunset on Friday to nightfall on Saturday. It is welcomed with candles, wine and bread.",
      },
      {
        question: "What is the Jewish place of communal worship called?",
        accept: ["synagogue", "a synagogue", "shul"],
        answer:
          "The synagogue, which serves as a place of worship, study and community life rather than worship alone.",
      },
      {
        question: "How many mitzvot are there traditionally? Give the number only.",
        accept: ["613"],
        answer:
          "613 commandments, covering worship, ethics and daily life. Movements differ over how far they bind modern practice.",
      },
      {
        question: "What is food permitted under Jewish dietary law called?",
        accept: ["kosher"],
        answer:
          "Kosher. The laws cover which animals may be eaten, how they are slaughtered, and keeping meat and dairy separate.",
      },
      {
        question: "Which festival remembers the escape from slavery in Egypt?",
        accept: ["pesach", "passover"],
        answer:
          "Pesach, or Passover, marked by the seder meal in which the story is retold using symbolic foods.",
      },
      {
        question: "What is the Day of Atonement called?",
        accept: ["yom kippur"],
        answer:
          "Yom Kippur, the most solemn day of the Jewish year, marked by fasting, prayer and seeking forgiveness.",
      },
      {
        question: "At what age does a Jewish boy traditionally have his Bar Mitzvah? Give the number only.",
        accept: ["13", "thirteen"],
        answer:
          "13. He takes on adult religious responsibility, and in many communities reads from the Torah for the first time.",
      },
      {
        question: "What is the record of rabbinic discussion of Jewish law called?",
        accept: ["talmud", "the talmud"],
        answer:
          "The Talmud. It preserves debate rather than only conclusions, which is itself characteristic of Jewish study.",
      },
      {
        question: "What is the role of a rabbi?",
        choices: [
          "A teacher and interpreter of Jewish law",
          "A priest who offers sacrifices",
          "The leader of all Jews worldwide",
          "A person who writes the Torah scrolls"
        ],
        accept: ["A teacher and interpreter of Jewish law"],
        answer:
          "Judaism has no single worldwide leader and no priesthood offering sacrifices today. Rabbi means teacher.",
      },
      {
        question: "How do most Jews understand the idea of being the 'chosen people'?",
        choices: [
          "Chosen for responsibility to keep the covenant",
          "Chosen as superior to other people",
          "Chosen to rule other nations",
          "Chosen to be free from all laws",
        ],
        accept: ["Chosen for responsibility to keep the covenant"],
        answer:
          "The emphasis is on obligation rather than privilege — a distinction examiners specifically look for.",
      },
      {
        question: "What is the main difference between Orthodox and Reform Judaism?",
        choices: [
          "Whether the Torah is the direct word of God or divinely inspired but of its time",
          "Whether God exists",
          "Whether Shabbat exists",
          "Whether the Holocaust is remembered",
        ],
        accept: ["Whether the Torah is the direct word of God or divinely inspired but of its time"],
        answer:
          "That difference over authority explains most of the differences in practice, including seating and the ordination of women.",
      },
      {
        question: "Which of these is the WHOLE Hebrew Bible?",
        choices: ["The Tenakh", "The Torah", "The Talmud", "The Mitzvot"],
        accept: ["The Tenakh"],
        answer:
          "Tenakh is an acronym of Torah, Nevi'im and Ketuvim. The Torah is only its first section.",
      },
      {
        question: "Which best describes Shabbat as Jews generally experience it?",
        choices: [
          "A gift of rest and family time set apart from ordinary work",
          "A day of punishment",
          "A day of compulsory fasting",
          "A day with no religious meaning",
        ],
        accept: ["A gift of rest and family time set apart from ordinary work"],
        answer:
          "Describing it only as a list of banned activities misses how Jews themselves usually talk about it.",
      },
      {
        question: "Explain the importance of the covenant in Judaism. Write three or four sentences.",
        answer:
          "A covenant is an agreement between God and people, and Jews trace theirs to Abraham, who was promised descendants and a land, and to Moses at Sinai, where the commandments were given. It matters because it makes Jewish identity a matter of relationship and obligation rather than only belief: being Jewish carries duties, expressed in the mitzvot. It also shapes the idea of the chosen people, which most Jews understand as being chosen to keep the covenant and set an example rather than as being superior to others. Because the covenant is understood as continuing, Jews see themselves as still bound by it today, which is why observance of law and festival remains central. Mark this one yourself: both covenants named, and the link from covenant to obligation and identity made explicit.",
      },
      {
        question: "'Keeping the mitzvot is the most important part of being Jewish.' Evaluate this statement.",
        answer:
          "For: Judaism has historically emphasised practice over doctrine, and the 613 mitzvot cover worship, food, ethics and daily conduct, so observance shapes almost every part of life; Orthodox Jews hold the Torah to be the direct word of God, which makes the commandments binding rather than optional; and keeping them is how the covenant is maintained in practice rather than only affirmed. Against: Reform Jews hold the Torah is divinely inspired but shaped by its historical setting, so they adapt observance while regarding themselves as fully Jewish; many Jews describe belonging to the Jewish people, family and history as the heart of their identity, including those who keep few laws; and the prophets themselves criticised ritual practised without justice and compassion, which suggests observance alone was never the point. A defensible judgement is that the answer depends on which movement is being described — and that the disagreement between Orthodox and Reform Judaism is precisely a disagreement about this question, which makes any single answer partial. Mark this one yourself: both movements represented accurately, and a conclusion that recognises the question is itself contested within Judaism.",
      },
    ],
    misconceptions: [
      {
        wrong: "A rabbi is the Jewish equivalent of a priest.",
        right:
          "A rabbi is a teacher and interpreter of the law. Judaism today has no sacrificial priesthood and no single worldwide leader.",
      },
      {
        wrong: "'Chosen people' means Jews believe they are better than others.",
        right:
          "It is generally understood as being chosen for responsibility — to keep the covenant and live by it — rather than for privilege.",
      },
      {
        wrong: "The Torah and the Tenakh are the same thing.",
        right:
          "The Torah is the first five books. The Tenakh is the whole Hebrew Bible, including the prophets and the writings.",
      },
      {
        wrong: "All Jews keep every one of the 613 mitzvot.",
        right:
          "Observance varies enormously. Orthodox and Reform Jews differ on how far ancient law binds modern life.",
      },
      {
        wrong: "Shabbat is mainly a list of things Jews are not allowed to do.",
        right:
          "Jews usually describe it as a gift — rest, family, food and study set apart from work.",
      },
    ],
  },
};
