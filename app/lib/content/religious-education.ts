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
};
