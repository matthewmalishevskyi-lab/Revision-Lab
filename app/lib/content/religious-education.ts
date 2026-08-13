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
};
