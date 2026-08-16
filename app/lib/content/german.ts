import type { TopicContent } from "./index";

// GERMAN
//
// HOW THIS SUBJECT IS WRITTEN, AND WHY IT DIFFERS FROM THE OTHERS
//
// German follows the same three conventions Spanish and French already use on
// this site — see the header comment in spanish.ts for the full reasoning.
// The short version:
//
//   1. FLASHCARDS ARE VOCABULARY, ALWAYS GERMAN-FIRST. term is the German word
//      or phrase, definition is the English meaning plus, where it earns its
//      place, the noun's gender and plural, an irregular verb form, a
//      separable-verb note, or a false-friend warning. Every noun term is
//      given WITH its article (der/die/das) because in German the article
//      isn't optional decoration — it carries gender and case information a
//      student has to know to use the noun correctly at all.
//
//   2. PRACTICE QUESTIONS ARE DELIBERATELY MIXED: straight translation both
//      directions, gap-fill verb conjugation, part-of-speech identification
//      (and, distinctively for German, noun GENDER identification — der/die/das
//      questions pull their weight here alongside part-of-speech), and multiple
//      choice. That mix is what GCSE German actually examines — grammar in
//      context, not as an isolated list of rules.
//
//   3. NO HIGHER-TIER FLAG, for the same reason as Spanish and French: the
//      Foundation/Higher split in MFL is about which speaking and writing
//      TASKS a student attempts, not about a block of vocabulary being
//      off-limits. Every fact here is fair game at both tiers.
//
// Exam-board note: this follows the AQA GCSE German specification's three
// themes (Identity & culture; Local area, holiday & travel; School, and future
// aspirations, study & work). Edexcel and OCR cover the same ground in a
// different order; swap nothing here without checking your own school's
// scheme of work first.
//
// A SECOND-LANGUAGE OPTION, NOT A THIRD YEAR OF THE SAME COURSE
//
// Unlike Spanish and French, German on this site is a GCSE option students
// begin in Year 10, not Year 9 — the same pattern Business already uses for a
// subject started a year later (see the comment above German in subjects.ts).
// So there is no german/year-9-equivalent content assuming two years of prior
// German: the six Year 10 topics below cover the SAME "building blocks" ground
// that Spanish and French give their own Year 9 (introductions, family,
// hobbies, school, daily routine, present-tense grammar), written as genuine
// first-topics-in-the-language material. Year 11 then compresses travel,
// jobs/future, technology and a second grammar topic plus exam practice into
// a single year, which is why german/grammar-toolkit-2 and
// german/german-exam-practice carry more ground each than their Spanish and
// French equivalents.
//
// A note on umlauts and ß: ä ö ü ß are typed directly rather than escaped,
// because this file is UTF-8 and TypeScript strings handle them natively.
// Where an accept list allows an unumlauted fallback (e.g. "schoen" alongside
// "schön", or "ss" for "ß"), that is deliberate — real students often can't
// type these characters easily, and marking correct German wrong over a
// keyboard limitation would be a bad trade.
//
// A note on capitalisation: EVERY German noun is capitalised, mid-sentence or
// not — der Bruder, die Schule, das Wetter. This is not optional style, it is
// correct spelling, and flashcard terms and example sentences below follow it
// throughout.

export const GERMAN: Record<string, TopicContent> = {
  "german/greetings-and-introductions": {
    summary:
      "Every GCSE German exam and conversation starts the same way: greeting someone, giving your name, saying how old you are and where you're from. This topic covers formal and informal address, the set phrases for a first conversation, numbers 0–31, and the present tense of the two verbs almost every self-introduction depends on — sein (to be) and haben (to have).",
    keyFacts: [
      {
        heading: "Formal vs informal address: du and Sie",
        points: [
          "Use du for someone your own age, a friend, a family member, or a child.",
          "Use Sie for a teacher, an adult stranger, or anyone you should be polite to — Sie is always capitalised, even mid-sentence, to mark it as the formal 'you'.",
          "Wie heißt du? is informal 'what's your name?'; Wie heißen Sie? is the formal version — the whole verb ending changes, not just the pronoun.",
          "Getting du/Sie wrong doesn't break the grammar of a sentence, but it does sound rude, and examiners notice register in speaking and writing tasks.",
        ],
      },
      {
        heading: "Key greetings and set phrases",
        points: [
          "Hallo (hello) works at any time of day; Guten Morgen (good morning), Guten Tag (good day/afternoon) and Guten Abend (good evening) are time-specific.",
          "Wie geht's? and Wie geht es dir? both mean 'how are you?' informally — Wie geht es Ihnen? is the formal version.",
          "Es geht mir gut (I'm well), Es geht mir nicht so gut (I'm not so well) and Es geht (so-so) are common replies.",
          "Auf Wiedersehen (goodbye, formal), Tschüss (bye, informal) and Bis später (see you later) are the standard ways to end a conversation.",
        ],
      },
      {
        heading: "Sein and haben in the present tense",
        points: [
          "Sein (to be) is irregular: ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind.",
          "Haben (to have) is irregular: ich habe, du hast, er/sie/es hat, wir haben, ihr habt, sie/Sie haben.",
          "Age uses sein, not haben: Ich bin fünfzehn Jahre alt (I am 15) — the opposite pattern from Spanish and French, so it is worth learning as its own rule rather than assuming it works the same way.",
          "Sein is also used for lasting facts about identity — name, nationality, job — as in Ich bin Engländer or Ich bin Schülerin.",
        ],
      },
      {
        heading: "Numbers 0–31",
        points: [
          "0–10: null, eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn.",
          "11–19 are built from -zehn: elf, zwölf, dreizehn, vierzehn, fünfzehn, sechzehn, siebzehn, achtzehn, neunzehn (only elf and zwölf don't follow the pattern).",
          "20 is zwanzig; 21–29 reverse the English order and fuse into one word — einundzwanzig is literally 'one-and-twenty', zweiundzwanzig 'two-and-twenty', and so on.",
          "30 is dreißig, spelled with an ß rather than -zig; the same reversed word order continues, so 31 is einunddreißig.",
        ],
      },
    ],
    flashcards: [
      { term: "Hallo", definition: "Hello — the single most common greeting, used at any time of day." },
      { term: "Wie heißt du?", definition: "What's your name? (informal) — literally 'how are you called?', from the reflexive-style verb heißen." },
      { term: "Ich heiße...", definition: "My name is... — literally 'I am called...'." },
      { term: "Woher kommst du?", definition: "Where are you from? (informal), using the verb kommen (to come)." },
      { term: "Ich komme aus England", definition: "I am from England — literally 'I come from England'; aus takes the dative but country names here need no article." },
      { term: "Wie alt bist du?", definition: "How old are you? — literally 'how old are you', using sein rather than haben, unlike Spanish or French." },
      { term: "Ich bin vierzehn Jahre alt", definition: "I am fourteen — literally 'I am fourteen years old'; age always uses sein in German, never haben." },
      { term: "Freut mich", definition: "Pleased to meet you — a shortened form of Es freut mich, used the same way regardless of the speaker's gender (unlike Spanish's Encantado/Encantada)." },
      { term: "Guten Tag", definition: "Good day / good afternoon — a fairly formal greeting usable through most of the daytime." },
      { term: "Bis später", definition: "See you later — a common way to end a conversation without saying a final goodbye." },
      { term: "Sie", definition: "The formal 'you', always capitalised even mid-sentence; used for a teacher, an adult stranger, or anyone you should show respect to." },
      { term: "einundzwanzig", definition: "Twenty-one — literally 'one-and-twenty'; German numbers 21–99 reverse the English order and are written as one fused word." },
      { term: "die Jahre (plural)", definition: "Years — plural of das Jahr; used in age expressions like Ich bin fünfzehn Jahre alt." },
      { term: "dreißig", definition: "Thirty — note the ß spelling, unlike the -zig ending used for 20, 40, 50, etc." },
    ],
    examTips: [
      {
        tip: "Never translate 'I am 14 years old' with haben.",
        detail: "Age in German always uses sein, so it's Ich bin vierzehn Jahre alt, not Ich habe vierzehn Jahre. This is the reverse of the pattern in Spanish/French and is a common mix-up for students studying more than one language.",
      },
      {
        tip: "Capitalise Sie every time, even in the middle of a sentence.",
        detail: "Formal 'you' (Sie) keeps a capital S wherever it appears, which is how a reader tells it apart from sie meaning 'she' or 'they', both lower case. Getting this wrong in writing can genuinely change the meaning of a sentence.",
      },
      {
        tip: "Use Sie, not du, for anyone you'd call 'sir' or 'madam' in English.",
        detail: "If you're unsure which to use in a speaking task, Sie is the safer default with an adult you don't know — it can read as slightly too formal, but du with the wrong person reads as rude.",
      },
      {
        tip: "Write numbers 21–99 as single fused words in reversed order.",
        detail: "Einundzwanzig and zweiunddreißig are each one word, with the units digit said before the tens digit. Writing 'zwanzig-eins' in English word order is a direct and very common mistake — always flip it.",
      },
      {
        tip: "Remember every noun is capitalised, including in the middle of a sentence.",
        detail: "Jahre, Tag and Morgen all keep their capital letter no matter where they sit in a sentence. This is correct German spelling, not emphasis, and markers do deduct for nouns written lower case.",
      },
      {
        tip: "Practise the whole introduction as one connected sequence.",
        detail: "Speaking exams reward fluency as much as accuracy. Rehearse greeting, name, age and where you're from as one flowing sequence rather than four separate memorised sentences, so it sounds natural rather than recited.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'Guten Morgen'",
        accept: ["good morning"],
        answer: "Good morning — Guten Morgen is used from waking up until roughly midday, when Guten Tag becomes more natural.",
      },
      {
        question: "Translate into German: 'Goodbye' (informal)",
        accept: ["tschüss", "tschuss"],
        answer: "Tschüss — the standard informal way to say goodbye to a friend or someone your own age; Auf Wiedersehen is the more formal equivalent.",
      },
      {
        question: "Write the number 15 in German.",
        accept: ["fünfzehn", "funfzehn"],
        answer: "Fünfzehn — one of the regular -zehn numbers, built from fünf (five) plus -zehn, unlike elf and zwölf which are irregular.",
      },
      {
        question: "How do you say 'I am 16 years old' in German?",
        accept: ["ich bin sechzehn jahre alt"],
        answer: "Ich bin sechzehn Jahre alt — age always uses sein (to be), never haben, and Jahre must keep its capital J.",
      },
      {
        question: "Complete with the correct form of sein: 'Sie ____ fünfzehn Jahre alt.' (she)",
        accept: ["ist"],
        answer: "Ist — the third-person singular (er/sie/es) form of sein, used here for age: Sie ist fünfzehn Jahre alt (She is fifteen).",
      },
      {
        question: "Complete with the correct form of haben: 'Wir ____ einen Hund.' (we have a dog)",
        accept: ["haben"],
        answer: "Haben — the 'wir' (we) form of haben, which happens to be identical to the infinitive: Wir haben einen Hund (We have a dog).",
      },
      {
        question: "Complete with the correct form of sein: 'Ich ____ vierzehn Jahre alt.'",
        accept: ["bin"],
        answer: "Bin — the 'ich' (I) form of sein, used here to give your age: Ich bin vierzehn Jahre alt (I am fourteen).",
      },
      {
        question: "Translate into German: 'My name is Anna and I am from Germany.'",
        accept: ["ich heiße anna und ich komme aus deutschland", "ich heisse anna und ich komme aus deutschland"],
        answer: "Ich heiße Anna und ich komme aus Deutschland — using heißen for 'my name is' and kommen aus for 'I am from'.",
      },
      {
        question: "Which of these means 'How are you?' in an informal way?",
        choices: ["Wie geht's?", "Wie heißen Sie?", "Woher kommen Sie?", "Wie alt sind Sie?"],
        accept: ["Wie geht's?"],
        answer: "Wie geht's? is the casual way to ask how someone is doing. Wie heißen Sie? asks a stranger's name formally, and the other two ask where someone is from and their age formally.",
      },
      {
        question: "Which verb must you use to say how old you are in German?",
        choices: ["sein", "haben", "werden", "machen"],
        accept: ["sein"],
        answer: "Sein (to be) is used for age — Ich bin fünfzehn Jahre alt literally means 'I am fifteen years old'. Haben, werden and machen are all real verbs but none of them is used for age.",
      },
      {
        question: "What is the correct 'I am' form of sein?",
        choices: ["bin", "bist", "ist", "sind"],
        accept: ["bin"],
        answer: "Bin is the first-person singular ('I') form of sein. Bist is 'you are' (informal), ist is 'he/she/it is', and sind is 'we/they are'.",
      },
      {
        question: "Which word is the odd one out?",
        choices: ["Hallo", "Guten Tag", "Tschüss", "Guten Abend"],
        accept: ["Tschüss"],
        answer: "Tschüss means goodbye, while Hallo, Guten Tag and Guten Abend are all ways of greeting someone rather than saying farewell.",
      },
      {
        question: "How is the number 22 written correctly in German?",
        choices: ["zweiundzwanzig", "zwanzigzwei", "zwanzigundzwei", "zweiundzwanzigst"],
        accept: ["zweiundzwanzig"],
        answer: "Zweiundzwanzig is correct — numbers 21 to 99 fuse into one word in the reversed order 'units-and-tens', with no spaces.",
      },
      {
        question: "In the sentence 'Sie ist groß', what part of speech is 'groß'?",
        choices: ["An adjective", "A noun", "A verb", "A preposition"],
        accept: ["An adjective"],
        answer: "Groß ('tall') describes the pronoun sie, which is exactly what an adjective does. Ist is the verb in this sentence, and there is no preposition or extra noun present.",
      },
      {
        question: "Which pronoun goes with the verb form 'hast'?",
        choices: ["du", "ich", "er", "wir"],
        accept: ["du"],
        answer: "Hast is the du (informal 'you') form of haben. Ich goes with habe, er with hat, and wir with haben.",
      },
      {
        question: "Give one situation where you would use Sie instead of du.",
        accept: ["with a teacher", "talking to a teacher", "with an adult stranger", "with a stranger", "talking to an adult you don't know"],
        answer: "Any adult you should be polite to counts — a teacher, a shop assistant you've never met, or an adult stranger are all correct examples of when Sie is the right choice over du.",
      },
      {
        question: "Write a short introduction of yourself in German: your name, your age, and where you are from. Use at least three full sentences.",
        answer:
          "There's no single right answer here — mark this one yourself. A strong answer uses Ich heiße... for your name, Ich bin... Jahre alt for your age (using sein, never haben), and Ich komme aus... for where you're from, each written as a separate full sentence with correctly matched verb endings and capitalised nouns.",
      },
      {
        question: "Explain in English why German has two different words for 'you' (du and Sie), and give one situation where you would use each.",
        answer:
          "Mark it yourself against this: du is informal, used with people your own age, friends and family; Sie is formal, used with teachers, strangers and anyone you should show respect to, and is always capitalised. A good answer names a clear example for each, such as using du with a classmate and Sie with a shop assistant you've never met.",
      },
    ],
    misconceptions: [
      {
        wrong: "Age is expressed with haben, just like the English 'I have 15 years' sounds closer to.",
        right: "German uses sein for age: Ich bin fünfzehn Jahre alt, not Ich habe fünfzehn Jahre — this is the opposite of the pattern in Spanish and French, so it is worth learning as its own rule.",
      },
      {
        wrong: "Sie only ever means 'she' or 'they'.",
        right: "Lower-case sie means 'she' or 'they', but capital Sie — capitalised wherever it sits in a sentence — is the formal word for 'you'. The capital letter is the only thing that tells them apart in writing.",
      },
      {
        wrong: "German numbers above twenty are said in the same order as English, just translated word for word.",
        right: "German reverses the order: einundzwanzig is literally 'one-and-twenty', with the units digit spoken before the tens digit, and the whole thing is written as one fused word.",
      },
      {
        wrong: "Only proper nouns like names and countries need a capital letter in German.",
        right: "Every German noun is capitalised, common or proper, wherever it appears in a sentence — Jahre, Tag and Morgen all keep their capital letters mid-sentence.",
      },
      {
        wrong: "Freut mich changes form depending on whether the speaker is male or female, like Spanish's Encantado/Encantada.",
        right: "Freut mich (pleased to meet you) is invariable — it stays exactly the same regardless of who is speaking, unlike the Spanish or French equivalents which agree with the speaker's gender.",
      },
    ],
  },

  "german/family-and-friends": {
    summary:
      "This topic covers the vocabulary and grammar needed to talk about family and friends: family member nouns with their correct gender and plural, possessive adjectives (mein, dein, sein, ihr) which must agree with the noun they describe, and how to describe people physically and by personality using sein plus an adjective.",
    keyFacts: [
      {
        heading: "Family members and their gender",
        points: [
          "Male family members: der Vater (father), der Bruder (brother, plural die Brüder), der Onkel (uncle), der Cousin (male cousin), der Großvater (grandfather).",
          "Female family members: die Mutter (mother, plural die Mütter), die Schwester (sister, plural die Schwestern), die Tante (aunt), die Cousine (female cousin), die Großmutter (grandmother).",
          "Die Eltern (parents) and die Geschwister (siblings) are always plural in German, even when talking about just one sibling — there's no exact singular equivalent to 'a sibling'.",
          "Das Kind (child, plural die Kinder) is neuter regardless of whether the child is a boy or a girl — grammatical gender does not always match biological sex.",
        ],
      },
      {
        heading: "Possessive adjectives: mein, dein, sein, ihr",
        points: [
          "Mein (my), dein (your, informal) and sein/ihr (his/her) all take the same endings as the indefinite article ein — no ending before a masculine or neuter noun, -e before a feminine or plural noun.",
          "Mein Bruder (my brother, masculine, no ending) but meine Schwester (my sister, feminine, -e ending) and meine Eltern (my parents, plural, -e ending).",
          "Sein means 'his', ihr means 'her' — both agree with the noun that follows, not with the owner: sein Vater (his father) and ihr Vater (her father) both use the masculine 'no ending' form because Vater is masculine.",
          "In the accusative case (a direct object), masculine possessives add -en: Ich sehe meinen Bruder (I see my brother) — feminine, neuter and plural stay the same as the nominative.",
        ],
      },
      {
        heading: "Describing people: physical and personality",
        points: [
          "Use sein + adjective for physical description: Er ist groß (He is tall), Sie ist klein (She is short).",
          "Hair and eye colour use haben: Ich habe blaue Augen (I have blue eyes), Er hat braune Haare (He has brown hair) — adjectives take an -e ending here because they come before a plural noun.",
          "Personality adjectives also follow sein: freundlich (friendly), lustig (funny), schüchtern (shy), nett (nice), streng (strict).",
          "Adjectives after sein don't take an extra ending (Er ist freundlich), but the same adjective does take an ending when it sits directly before a noun (ein freundlicher Junge) — position changes the form.",
        ],
      },
    ],
    flashcards: [
      { term: "der Vater (die Väter)", definition: "Father — masculine noun; plural adds an umlaut, die Väter." },
      { term: "die Mutter (die Mütter)", definition: "Mother — feminine noun; plural adds an umlaut, die Mütter." },
      { term: "der Bruder (die Brüder)", definition: "Brother — masculine noun with an umlauted plural." },
      { term: "die Schwester (die Schwestern)", definition: "Sister — feminine noun; plural adds -n." },
      { term: "die Eltern", definition: "Parents — always plural in German, with no true singular form for a single parent phrase." },
      { term: "die Geschwister", definition: "Siblings — always plural, and used even when describing an only child's absence of siblings: Ich habe keine Geschwister." },
      { term: "das Kind (die Kinder)", definition: "Child — neuter noun regardless of the child's sex; plural is die Kinder." },
      { term: "mein/meine", definition: "My — mein before masculine and neuter nouns, meine before feminine and plural nouns." },
      { term: "sein/seine", definition: "His — agrees with the noun that follows, not with the owner's own gender." },
      { term: "ihr/ihre", definition: "Her — also agrees with the following noun; identical spelling to the word for 'their', so context decides the meaning." },
      { term: "freundlich", definition: "Friendly — a common personality adjective, used after sein with no extra ending." },
      { term: "schüchtern", definition: "Shy — note the ü; a common false friend trap is confusing it with 'stubborn', which is actually stur." },
      { term: "die Augen (singular das Auge)", definition: "Eyes — irregular plural; used in Ich habe grüne Augen (I have green eyes)." },
      { term: "einzig", definition: "Only, as in einziges Kind (only child) — a useful adjective for describing family structure." },
    ],
    examTips: [
      {
        tip: "Learn every noun with its article from day one, not the noun on its own.",
        detail: "Der Bruder, die Schwester, das Kind — memorising the article alongside the noun is the only reliable way to get possessive and case endings right later, since the ending depends entirely on gender.",
      },
      {
        tip: "Match sein and ihr to the noun's gender, not the owner's.",
        detail: "Sein Vater and ihr Vater are both correct German for 'his father'/'her father' because Vater is masculine either way — the ending never changes to reflect whether the owner is male or female.",
      },
      {
        tip: "Use haben, not sein, for hair and eye colour.",
        detail: "Ich habe blaue Augen is correct; Ich bin blaue Augen is not real German. Hair and eyes are things you 'have', described with an adjective ending in -e because Augen and Haare are plural.",
      },
      {
        tip: "Remember Geschwister and Eltern have no true singular in normal use.",
        detail: "If you want to say 'I have one brother and one sister', say Ich habe einen Bruder und eine Schwester rather than trying to force Geschwister into a singular count.",
      },
      {
        tip: "Watch adjective position — it changes the ending.",
        detail: "Er ist freundlich (after sein, no ending) versus ein freundlicher Junge (before the noun, with an ending) are both correct, but swapping which pattern goes where is a very common accuracy slip in writing tasks.",
      },
      {
        tip: "Don't confuse die Eltern (parents) with das Alter (age) just because they look similar.",
        detail: "They share no root and mean completely different things — a quick misread under exam pressure can cost an easy mark, so read the whole word.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'meine Schwester'",
        accept: ["my sister"],
        answer: "My sister — meine takes the -e ending because Schwester is feminine.",
      },
      {
        question: "Translate into German: 'my brother'",
        accept: ["mein bruder"],
        answer: "Mein Bruder — mein takes no extra ending before a masculine noun like Bruder.",
      },
      {
        question: "What is the plural of das Kind?",
        accept: ["die kinder"],
        answer: "Die Kinder — an irregular plural formed by adding -er, one of several unpredictable German plural patterns that simply have to be learned.",
      },
      {
        question: "Complete with the correct form of sein: 'Er ____ sehr freundlich.'",
        accept: ["ist"],
        answer: "Ist — the er/sie/es form of sein: Er ist sehr freundlich (He is very friendly).",
      },
      {
        question: "Complete with the correct form of haben: 'Ich ____ blaue Augen.'",
        accept: ["habe"],
        answer: "Habe — the ich form of haben, used for physical features like eye and hair colour rather than sein.",
      },
      {
        question: "Complete the possessive: 'Das ist ___ Mutter.' (his)",
        accept: ["seine"],
        answer: "Seine — sein takes the -e ending before the feminine noun Mutter, regardless of the owner's own gender.",
      },
      {
        question: "Translate into German: 'I have two sisters and one brother.'",
        accept: ["ich habe zwei schwestern und einen bruder"],
        answer: "Ich habe zwei Schwestern und einen Bruder — Schwestern takes the regular -n plural, and Bruder becomes einen in the accusative because it's the direct object of habe.",
      },
      {
        question: "Which article correctly completes '___ Bruder ist lustig'?",
        choices: ["Mein", "Meine", "Meinen", "Meinem"],
        accept: ["Mein"],
        answer: "Mein is correct — Bruder is masculine and this is the subject of the sentence (nominative), so no ending is added.",
      },
      {
        question: "What gender is das Kind?",
        choices: ["Neuter", "Masculine", "Feminine", "It has no fixed gender"],
        accept: ["Neuter"],
        answer: "Das Kind is neuter, shown by the article das — this stays the same regardless of whether the specific child being discussed is a boy or a girl.",
      },
      {
        question: "In 'Sie hat lange Haare', what part of speech is 'lange'?",
        choices: ["An adjective", "A noun", "A verb", "A pronoun"],
        accept: ["An adjective"],
        answer: "Lange ('long') describes Haare (hair), making it an adjective; it takes the -e ending because it comes before a plural noun.",
      },
      {
        question: "Which of these means 'parents'?",
        choices: ["die Eltern", "die Geschwister", "die Kinder", "die Verwandten"],
        accept: ["die Eltern"],
        answer: "Die Eltern means parents. Die Geschwister means siblings, die Kinder means children, and die Verwandten means relatives.",
      },
      {
        question: "Which word is the odd one out in gender?",
        choices: ["das Kind", "der Bruder", "der Vater", "der Onkel"],
        accept: ["das Kind"],
        answer: "Das Kind is neuter, while der Bruder, der Vater and der Onkel are all masculine.",
      },
      {
        question: "Complete with the correct form of sein: 'Wir ____ eine große Familie.'",
        accept: ["sind"],
        answer: "Sind — the wir form of sein: Wir sind eine große Familie (We are a big family).",
      },
      {
        question: "Give one adjective you could use to describe someone's personality in German.",
        accept: ["freundlich", "lustig", "schüchtern", "nett", "streng", "ruhig", "sportlich"],
        answer: "Any personality adjective works, for example freundlich (friendly), lustig (funny), schüchtern (shy), nett (nice) or streng (strict).",
      },
      {
        question: "Explain in English why sein Vater and ihr Vater are both grammatically correct for 'his father' and 'her father' without the ending ever changing.",
        answer:
          "Mark this one yourself against this: possessive adjectives in German agree with the gender of the noun they describe, not with the gender of the owner. Vater is masculine, so both sein and ihr appear with no added ending in the nominative regardless of whether 'his' or 'her' is meant.",
      },
      {
        question: "Write a short paragraph in German describing one member of your family: their name, their relationship to you, and one physical and one personality description. Use at least three sentences.",
        answer:
          "There's no single right answer here — mark this one yourself. A strong answer names the person, states the relationship with the correct possessive and gender (e.g. Mein Bruder heißt...), uses sein + adjective for personality (Er ist freundlich) and haben + colour for hair or eyes (Er hat braune Haare).",
      },
      {
        question: "Translate into English: 'Meine Eltern sind sehr nett.'",
        accept: ["my parents are very nice"],
        answer: "My parents are very nice — Eltern is always plural, and sind is the wir/sie form of sein matching it.",
      },
    ],
    misconceptions: [
      {
        wrong: "Sein always means 'his' and ihr always means 'hers', with no other use.",
        right: "Ihr also means 'their' and, capitalised as Ihr, the formal possessive 'your'; only context and capitalisation show which meaning is intended.",
      },
      {
        wrong: "Possessive adjectives agree with the owner's gender, the way you might expect from English 'his'/'her'.",
        right: "They agree with the noun being owned, not the owner — sein Mutter would be wrong; it must be seine Mutter because Mutter is feminine, regardless of the owner being male.",
      },
      {
        wrong: "Hair and eye colour are described with sein, the same way physical size is.",
        right: "Hair and eyes use haben — Ich habe blaue Augen, not Ich bin blaue Augen — because you 'have' features rather than 'are' them.",
      },
      {
        wrong: "Das Kind must be masculine or feminine depending on whether the child is a boy or girl.",
        right: "Das Kind is grammatically neuter in every case, regardless of the child's actual sex — German grammatical gender doesn't always track biological sex.",
      },
      {
        wrong: "Geschwister means 'brother', with Geschwistern as its plural.",
        right: "Geschwister means 'siblings' and is already plural by itself — there is no separate word that specifically means one brother-or-sister; Bruder and Schwester cover that individually.",
      },
    ],
  },

  "german/free-time-and-hobbies": {
    summary:
      "This topic covers talking about sport and hobbies: the vocabulary for common activities, when to use spielen versus machen, how to say how often you do something, and the distinctively German way of ranking preferences with gern, lieber and am liebsten rather than a separate verb like 'to prefer'.",
    keyFacts: [
      {
        heading: "Sports and hobbies vocabulary",
        points: [
          "Fußball spielen (to play football), Tennis spielen (to play tennis), Klavier spielen (to play the piano) — spielen is used for games and instruments.",
          "schwimmen (to swim), lesen (to read), fernsehen (to watch TV — a separable verb: Ich sehe fern), einkaufen gehen (to go shopping) don't use spielen at all.",
          "Sport machen (to do sport) and Yoga machen (to do yoga) use machen for general activities that aren't a specific ball game or instrument.",
          "Ich gehe joggen (I go jogging) and Ich gehe angeln (I go fishing) use gehen + infinitive for activities phrased as 'going to do something'.",
        ],
      },
      {
        heading: "Spielen vs machen — the key distinction",
        points: [
          "Spielen (to play) is for named games, sports with a ball, and musical instruments: Fußball spielen, Karten spielen, Gitarre spielen.",
          "Machen (to make/do) is for activities without a specific 'playing' sense: Sport machen, Hausaufgaben machen (homework), Fotos machen (taking photos).",
          "Some activities take neither and have their own dedicated verb: schwimmen, tanzen (to dance), kochen (to cook), malen (to paint).",
          "Mixing these up (Ich spiele Sport instead of Ich mache Sport) is a very common and easily avoidable error — learn each hobby phrase as a fixed chunk, not word by word.",
        ],
      },
      {
        heading: "Frequency expressions",
        points: [
          "Immer (always), oft (often), manchmal (sometimes), selten (rarely) and nie (never) describe how often you do something.",
          "Am Wochenende (at the weekend), jeden Tag (every day) and einmal pro Woche (once a week) are common time phrases.",
          "Frequency words are usually placed directly after the verb in a main clause: Ich spiele oft Fußball (I often play football) — not before the verb as in English.",
          "Nie makes the sentence negative by itself and does not need an extra nicht: Ich spiele nie Tennis (I never play tennis).",
        ],
      },
      {
        heading: "Expressing preference: gern, lieber, am liebsten",
        points: [
          "Gern placed after a verb means 'like to' — Ich spiele gern Fußball literally means 'I play football gladly', i.e. 'I like playing football'.",
          "Lieber is the comparative form, meaning 'prefer to' — Ich spiele lieber Tennis (I prefer playing tennis).",
          "Am liebsten is the superlative, meaning 'like best/most of all' — Am liebsten spiele ich Basketball (Basketball is what I like best).",
          "There is no separate verb 'to prefer' needed for this — gern/lieber/am liebsten simply modify the ordinary verb, which is a distinctively German construction worth learning as its own pattern.",
        ],
      },
    ],
    flashcards: [
      { term: "Fußball spielen", definition: "To play football — spielen is used because it's a named ball game." },
      { term: "Klavier spielen", definition: "To play the piano — spielen also covers musical instruments." },
      { term: "Sport machen", definition: "To do sport in general — machen, not spielen, for activities without a specific 'playing' sense." },
      { term: "schwimmen", definition: "To swim — an irregular strong verb with its own conjugation, not paired with spielen or machen." },
      { term: "fernsehen", definition: "To watch television — a separable verb: fern splits off, giving Ich sehe fern (I watch TV)." },
      { term: "lesen", definition: "To read — a strong verb with a vowel change in the du/er form: du liest, er liest." },
      { term: "oft", definition: "Often — a frequency adverb usually placed directly after the verb." },
      { term: "nie", definition: "Never — makes a sentence negative on its own, with no extra nicht needed." },
      { term: "am Wochenende", definition: "At the weekend — a time phrase, note the dative article am (an + dem)." },
      { term: "gern", definition: "Gladly/with pleasure — placed after a verb to mean 'like to', e.g. Ich lese gern (I like reading)." },
      { term: "lieber", definition: "Rather/preferably — the comparative of gern, used for stating a preference between two things." },
      { term: "am liebsten", definition: "Most of all/best of all — the superlative of gern, used to name a top favourite." },
      { term: "die Freizeit", definition: "Free time — a feminine noun combining frei (free) and Zeit (time)." },
      { term: "das Hobby (die Hobbys)", definition: "Hobby — a loanword from English; plural simply adds -s, unlike most German nouns." },
    ],
    examTips: [
      {
        tip: "Learn hobby phrases as fixed chunks, not word by word.",
        detail: "Fußball spielen and Sport machen use different verbs for reasons that aren't obvious from English, so memorise each hobby with its correct verb attached rather than trying to build the phrase from separate vocabulary rules.",
      },
      {
        tip: "Place gern/oft/nie directly after the verb, not before it.",
        detail: "Ich spiele oft Fußball is correct German word order; putting oft before spiele, as English word order would suggest, is a common and avoidable mistake.",
      },
      {
        tip: "Use gern/lieber/am liebsten instead of hunting for a separate verb meaning 'prefer'.",
        detail: "There is no direct one-word equivalent of 'I prefer' needed — Ich spiele lieber Tennis already carries that meaning through lieber alone, attached to the ordinary verb spielen.",
      },
      {
        tip: "Remember fernsehen splits apart in a normal sentence.",
        detail: "As a separable verb, fernsehen becomes Ich sehe fern in the present tense, with fern pushed to the very end of the clause — writing Ich fernsehe as one word is incorrect.",
      },
      {
        tip: "Don't add nicht after nie.",
        detail: "Nie already means 'never' and negates the sentence by itself: Ich spiele nie Tennis. Adding nicht as well is a double negative that isn't standard German.",
      },
      {
        tip: "Use am liebsten to make a top-choice answer stand out in speaking exams.",
        detail: "Sequencing gern, then lieber, then am liebsten across a few sentences (Ich spiele gern Fußball, aber am liebsten spiele ich Basketball) shows range and earns marks for varied language.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'Ich spiele gern Fußball.'",
        accept: ["i like playing football", "i like to play football"],
        answer: "I like playing football — gern after the verb turns spielen (to play) into 'like to play'.",
      },
      {
        question: "Translate into German: 'I never watch TV.'",
        accept: ["ich sehe nie fern"],
        answer: "Ich sehe nie fern — fernsehen splits apart in a main clause, with fern moving to the end and nie sitting after the verb sehe.",
      },
      {
        question: "Complete with spielen or machen: 'Ich ____ Sport.'",
        accept: ["mache"],
        answer: "Mache — Sport machen is the fixed phrase for doing sport in general; spielen is reserved for named ball games and instruments.",
      },
      {
        question: "Complete with spielen or machen: 'Er ____ Gitarre.'",
        accept: ["spielt"],
        answer: "Spielt — spielen is used for musical instruments, so Er spielt Gitarre (He plays the guitar).",
      },
      {
        question: "Complete with the correct form of lesen: 'Sie ____ gern Bücher.' (she)",
        accept: ["liest"],
        answer: "Liest — lesen is a strong verb with a vowel change in the du/er/sie/es form: du liest, er/sie/es liest.",
      },
      {
        question: "Translate into German: 'At the weekend I prefer to swim.'",
        accept: ["am wochenende schwimme ich lieber"],
        answer: "Am Wochenende schwimme ich lieber — starting the sentence with the time phrase pushes the verb schwimme into second position, ahead of ich.",
      },
      {
        question: "Which sentence correctly uses am liebsten to name a favourite activity?",
        choices: ["Am liebsten spiele ich Basketball.", "Ich am liebsten spiele Basketball.", "Ich spiele Basketball am liebsten gern.", "Am liebsten ich spiele Basketball."],
        accept: ["Am liebsten spiele ich Basketball."],
        answer: "Am liebsten spiele ich Basketball is correct — starting with am liebsten sends the verb spiele into second position, with ich after it.",
      },
      {
        question: "Which verb correctly completes 'Ich ____ Karten mit meiner Familie.' (to play cards)",
        choices: ["spiele", "mache", "gehe", "habe"],
        accept: ["spiele"],
        answer: "Spiele is correct — Karten spielen (to play cards) uses spielen, the same as other named games.",
      },
      {
        question: "In the sentence 'Ich spiele oft Tennis', what part of speech is 'oft'?",
        choices: ["An adverb", "A noun", "An adjective", "A preposition"],
        accept: ["An adverb"],
        answer: "Oft ('often') describes how frequently the action of the verb spiele happens, which is exactly what an adverb does.",
      },
      {
        question: "What gender is die Freizeit?",
        choices: ["Feminine", "Masculine", "Neuter", "Plural only"],
        accept: ["Feminine"],
        answer: "Die Freizeit is feminine, shown by the article die, combining frei (free) and Zeit (time).",
      },
      {
        question: "Which word means 'never' and negates a sentence on its own?",
        choices: ["nie", "nicht", "kein", "selten"],
        accept: ["nie"],
        answer: "Nie means 'never' and makes a sentence negative by itself with no extra nicht needed. Nicht and kein are other negation words used differently, and selten means 'rarely', which isn't a full negative.",
      },
      {
        question: "Which is the correct superlative form for 'like best of all'?",
        choices: ["am liebsten", "lieber", "gern", "am besten"],
        accept: ["am liebsten"],
        answer: "Am liebsten is the superlative of gern, used specifically to say what you like doing best. Lieber is the comparative ('prefer'), and am besten means 'best' but isn't the idiomatic pairing with a hobby verb.",
      },
      {
        question: "Give one German verb, other than spielen or machen, that is used on its own for a hobby.",
        accept: ["schwimmen", "lesen", "tanzen", "kochen", "malen", "singen", "reiten"],
        answer: "Several work here, for example schwimmen (to swim), lesen (to read), tanzen (to dance), kochen (to cook) or malen (to paint) — none of these pair with spielen or machen.",
      },
      {
        question: "Explain in English the difference in meaning between gern, lieber and am liebsten, giving one German example sentence for each.",
        answer:
          "Mark this one yourself against this: gern means 'like to' (Ich spiele gern Fußball), lieber means 'prefer to', comparing two things (Ich spiele lieber Tennis), and am liebsten means 'like best of all', naming a top favourite (Am liebsten spiele ich Basketball). All three attach to an ordinary verb rather than needing a separate verb for 'prefer'.",
      },
      {
        question: "Write a short paragraph in German about your free time: name two hobbies, say how often you do each one, and say which you prefer using lieber or am liebsten. Use at least four sentences.",
        answer:
          "There's no single right answer here — mark this one yourself. A strong answer uses correct spielen/machen choices for each hobby, places frequency words like oft or manchmal directly after the verb, and finishes with a lieber or am liebsten sentence to state a clear preference.",
      },
      {
        question: "Translate into English: 'Am Wochenende gehe ich oft einkaufen.'",
        accept: ["at the weekend i often go shopping"],
        answer: "At the weekend I often go shopping — gehe...einkaufen uses gehen + infinitive for an activity phrased as 'going to do something'.",
      },
    ],
    misconceptions: [
      {
        wrong: "Spielen can be used for any hobby, the way 'play' loosely can in casual English.",
        right: "Spielen is reserved for named games, sports involving a ball, and musical instruments — general activities like sport or homework use machen instead, and some verbs like schwimmen stand alone.",
      },
      {
        wrong: "Frequency words like oft and nie go at the start of the sentence, mirroring English word order.",
        right: "They're placed directly after the conjugated verb in a main clause: Ich spiele oft Fußball, not Oft ich spiele Fußball.",
      },
      {
        wrong: "German needs a separate verb meaning 'to prefer', similar to English.",
        right: "Preference is expressed by adding lieber to an ordinary verb — Ich spiele lieber Tennis already means 'I prefer playing tennis' with no extra verb required.",
      },
      {
        wrong: "Fernsehen is written and used as one unbroken word in every sentence.",
        right: "As a separable verb, it splits apart in a normal present-tense main clause: Ich sehe fern, with fern pushed to the end — the unbroken form only survives as the infinitive.",
      },
      {
        wrong: "Nie needs nicht alongside it to properly negate a sentence.",
        right: "Nie is a complete negator by itself; adding nicht as well produces a non-standard double negative rather than extra emphasis.",
      },
    ],
  },

  "german/school-life": {
    summary:
      "This topic covers talking about school: subject vocabulary with correct gender, giving opinions on subjects using mögen and weil (which sends the verb to the end of the clause), classroom object vocabulary, telling the time for a timetable, and adjectives used to describe how a subject feels.",
    keyFacts: [
      {
        heading: "School subjects and their gender",
        points: [
          "Die Mathe (maths), die Kunst (art), die Musik (music) and die Geschichte (history) are feminine.",
          "Der Sport (PE), der Erdkunde is actually feminine (die Erdkunde, geography) — gender doesn't follow any pattern from the English meaning and each subject must be learned individually.",
          "Das Englisch, das Deutsch and das Französisch (the languages) are neuter when referring to the school subject.",
          "Most subject names are used without an article in a simple sentence about liking them — Ich mag Mathe, not Ich mag die Mathe — the article mainly matters when a subject is the specific subject of a sentence, e.g. Die Mathe ist schwierig.",
        ],
      },
      {
        heading: "Giving opinions: mögen and weil",
        points: [
          "Ich mag... (I like...) and Ich mag...nicht (I don't like...) are the simplest opinion structures, with nicht placed directly after the object.",
          "Weil (because) sends the conjugated verb to the very end of its clause: Ich mag Mathe, weil es interessant ist (I like maths because it's interesting) — ist moves to the end, not straight after es.",
          "Denn also means 'because' but does NOT change word order — Ich mag Mathe, denn es ist interessant keeps normal order, which makes denn easier to use accurately under exam pressure.",
          "Stronger opinion phrases include Meiner Meinung nach (in my opinion), Ich finde... (I find...) and Ich interessiere mich für... (I'm interested in...).",
        ],
      },
      {
        heading: "Classroom objects and the school day",
        points: [
          "Der Kugelschreiber/der Kuli (pen), der Bleistift (pencil), das Heft (exercise book), das Buch (book, plural die Bücher), der Rucksack (backpack) are common classroom items.",
          "Der Stundenplan (timetable) and die Pause (break) are essential for describing the structure of a school day.",
          "Der Unterricht beginnt um acht Uhr (Lessons start at eight o'clock) uses um + time for 'at' a clock time.",
          "Die Schule beginnt um Viertel nach acht (School starts at quarter past eight) and endet um drei Uhr (ends at three o'clock) show the standard pattern for telling the time on a timetable.",
        ],
      },
      {
        heading: "Adjectives of opinion",
        points: [
          "Interessant (interesting) and langweilig (boring) are the two most common opinion adjectives for subjects.",
          "Schwierig and schwer both mean 'difficult'; leicht means 'easy'.",
          "Nützlich (useful) is a common positive adjective for practical subjects like Mathe or Informatik.",
          "Anstrengend (tiring/demanding) is often used for subjects with a heavy workload, distinct from schwierig, which is about difficulty rather than effort.",
        ],
      },
    ],
    flashcards: [
      { term: "die Mathe", definition: "Maths — feminine, short for die Mathematik; used without an article in simple opinion sentences." },
      { term: "die Erdkunde", definition: "Geography — feminine, despite der Erdkunde being a tempting guess from the -kunde ending pattern." },
      { term: "das Englisch", definition: "English (the subject) — neuter when referring to the school subject rather than the country." },
      { term: "die Geschichte", definition: "History — feminine; also means 'story', a useful double meaning to recognise in context." },
      { term: "der Stundenplan", definition: "Timetable — literally 'hour plan', a masculine compound noun." },
      { term: "die Pause", definition: "Break — feminine, used for both the mid-morning break and lunch break." },
      { term: "weil", definition: "Because — a subordinating conjunction that sends the conjugated verb to the end of its own clause." },
      { term: "denn", definition: "Because — means the same as weil but does NOT change word order, unlike weil." },
      { term: "interessant", definition: "Interesting — a common opinion adjective, identical in form to its English cognate." },
      { term: "langweilig", definition: "Boring — note the -ig ending, common on German adjectives describing a quality." },
      { term: "schwierig", definition: "Difficult — near-synonym of schwer, both meaning 'hard/difficult'." },
      { term: "das Heft (die Hefte)", definition: "Exercise book — neuter; not to be confused with das Buch, a printed book." },
      { term: "der Kugelschreiber (der Kuli)", definition: "Pen — masculine; der Kuli is the everyday shortened form students actually use." },
      { term: "anstrengend", definition: "Tiring/demanding — describes workload or effort, distinct from schwierig, which is about difficulty." },
    ],
    examTips: [
      {
        tip: "Learn subject gender individually — don't guess from the English word.",
        detail: "Die Mathe, die Erdkunde and das Englisch have three different genders with no shared pattern, so each subject needs to be memorised with its article the way any other noun would be.",
      },
      {
        tip: "Push the verb to the end after weil, every time.",
        detail: "Ich mag Mathe, weil es interessant ist is correct; Ich mag Mathe, weil es ist interessant keeps English word order and is one of the most heavily tested grammar points in GCSE German writing.",
      },
      {
        tip: "Use denn instead of weil if you're not confident with the word-order change.",
        detail: "Denn gives you the same meaning, 'because', with completely normal word order, so it's a safer choice in a speaking exam when you're thinking on your feet.",
      },
      {
        tip: "Distinguish schwierig (difficult) from anstrengend (tiring).",
        detail: "A subject can be leicht (easy) but still anstrengend if there's a lot of homework, or schwierig but not particularly tiring if it's short — using the more precise word earns credit for range of vocabulary.",
      },
      {
        tip: "Use um for clock times, not an, in.",
        detail: "Der Unterricht beginnt um acht Uhr is correct — um is the standard preposition for 'at' a specific time, and mixing it up with an (used for days) is a common error.",
      },
      {
        tip: "Build opinion answers as opinion + subject + weil + reason, as one fixed template.",
        detail: "Ich mag [subject], weil es [adjective] ist is a pattern that can be reused for almost any subject and opinion, and having it automatic frees up thinking time in a speaking exam.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'Ich mag Mathe nicht.'",
        accept: ["i don't like maths", "i do not like maths"],
        answer: "I don't like maths — nicht is placed directly after the object Mathe to negate the opinion.",
      },
      {
        question: "Translate into German: 'I like history because it's interesting.'",
        accept: ["ich mag geschichte, weil es interessant ist", "ich mag geschichte weil es interessant ist"],
        answer: "Ich mag Geschichte, weil es interessant ist — weil sends ist to the very end of its clause.",
      },
      {
        question: "Complete with the correct form of mögen: 'Er ____ Sport.'",
        accept: ["mag"],
        answer: "Mag — the er/sie/es form of the irregular verb mögen: Er mag Sport (He likes PE).",
      },
      {
        question: "Rewrite this sentence with correct word order: 'Ich mag Kunst, weil es ist kreativ.'",
        accept: ["ich mag kunst, weil es kreativ ist", "ich mag kunst weil es kreativ ist"],
        answer: "Ich mag Kunst, weil es kreativ ist — the conjugated verb ist must move to the very end of the weil clause.",
      },
      {
        question: "Translate into German: 'School starts at quarter past eight.'",
        accept: ["die schule beginnt um viertel nach acht"],
        answer: "Die Schule beginnt um Viertel nach acht — um introduces the clock time, and Viertel nach acht is the standard way to say quarter past eight.",
      },
      {
        question: "Complete with the correct form of sein: 'Meine Lieblingsfächer ____ Kunst und Musik.' (my favourite subjects are...)",
        accept: ["sind"],
        answer: "Sind — the plural form of sein, matching the plural subject Lieblingsfächer (favourite subjects).",
      },
      {
        question: "Which word means 'because' WITHOUT sending the verb to the end of the clause?",
        choices: ["denn", "weil", "dass", "wenn"],
        accept: ["denn"],
        answer: "Denn means 'because' but keeps normal word order, unlike weil, dass and wenn, which are all subordinating conjunctions that push the verb to the end.",
      },
      {
        question: "What gender is die Erdkunde (geography)?",
        choices: ["Feminine", "Masculine", "Neuter", "It has no article"],
        accept: ["Feminine"],
        answer: "Die Erdkunde is feminine — a subject that many students guess wrong because -kunde looks like it could pattern with masculine nouns, but it doesn't.",
      },
      {
        question: "Which adjective best describes a subject with a heavy workload rather than one that's conceptually hard?",
        choices: ["anstrengend", "schwierig", "leicht", "langweilig"],
        accept: ["anstrengend"],
        answer: "Anstrengend (tiring/demanding) describes effort and workload, while schwierig is specifically about difficulty of understanding — the two are useful to keep distinct for precise opinions.",
      },
      {
        question: "In 'Der Unterricht beginnt um acht Uhr', what part of speech is 'beginnt'?",
        choices: ["A verb", "A noun", "An adjective", "A preposition"],
        accept: ["A verb"],
        answer: "Beginnt ('starts') is the conjugated verb of the sentence, the er/sie/es form of beginnen.",
      },
      {
        question: "Which of these classroom items is neuter (das)?",
        choices: ["das Heft", "der Bleistift", "die Pause", "der Rucksack"],
        accept: ["das Heft"],
        answer: "Das Heft (exercise book) is neuter. Der Bleistift and der Rucksack are masculine, and die Pause is feminine.",
      },
      {
        question: "Give one adjective, other than interessant or langweilig, that could describe a school subject.",
        accept: ["schwierig", "schwer", "leicht", "nützlich", "anstrengend", "kreativ"],
        answer: "Several work here: schwierig/schwer (difficult), leicht (easy), nützlich (useful), anstrengend (tiring) or kreativ (creative) are all common opinion adjectives for subjects.",
      },
      {
        question: "Explain in English how weil changes German word order, using an example sentence.",
        answer:
          "Mark this one yourself against this: weil is a subordinating conjunction, so the conjugated verb is pushed to the very end of its own clause rather than staying in second position. For example, Ich mag Mathe, weil es interessant ist places ist at the end, not directly after es as English word order would suggest.",
      },
      {
        question: "Write a short paragraph in German giving your opinion on three different school subjects, using mögen, an adjective, and at least one weil clause with correct word order. Use at least four sentences.",
        answer:
          "There's no single right answer here — mark this one yourself. A strong answer names three subjects with correct gender/article use, gives a clear opinion with mögen or a similar verb, and includes at least one weil clause with the verb correctly pushed to the end.",
      },
      {
        question: "Translate into English: 'Meiner Meinung nach ist Erdkunde nützlich.'",
        accept: ["in my opinion geography is useful"],
        answer: "In my opinion, geography is useful — Meiner Meinung nach is a fixed opinion phrase that pushes the verb ist into second position straight after it.",
      },
      {
        question: "Complete with the correct form of mögen: 'Wir ____ Musik.' (we like)",
        accept: ["mögen"],
        answer: "Mögen — the wir form of the irregular verb mögen, identical here to the infinitive.",
      },
    ],
    misconceptions: [
      {
        wrong: "All German subject names can be predicted to be masculine, feminine or neuter based on their English meaning.",
        right: "Gender is arbitrary and has to be learned per word — die Erdkunde (feminine) and das Englisch (neuter) don't follow any pattern you could guess from English.",
      },
      {
        wrong: "Weil and denn are completely interchangeable, including in terms of word order.",
        right: "They both mean 'because', but only weil forces the verb to the end of its clause — denn keeps standard word order, so the two aren't interchangeable in terms of grammar even though the meaning is the same.",
      },
      {
        wrong: "Nicht always goes immediately after the verb, as in English negation.",
        right: "In Ich mag Mathe nicht, nicht is placed after the object Mathe, not straight after the verb mag — negation position depends on what's being negated.",
      },
      {
        wrong: "Schwierig and anstrengend mean exactly the same thing and can be used interchangeably.",
        right: "Schwierig describes conceptual difficulty, while anstrengend describes tiring effort or workload — a subject can be one without being the other.",
      },
      {
        wrong: "Clock times use an, the same preposition used for days of the week.",
        right: "German uses um for a specific clock time (um acht Uhr) and reserves an for days (am Montag) — mixing the two up is a common preposition error.",
      },
    ],
  },

  "german/home-and-daily-routine": {
    summary:
      "This topic covers describing your home and daily routine: rooms of the house, the separable and reflexive verbs needed to describe getting up, showering and getting dressed, telling the time, and the sequencing words that link a routine into a flowing description rather than a list of disconnected actions.",
    keyFacts: [
      {
        heading: "Rooms of the house",
        points: [
          "Die Küche (kitchen), das Wohnzimmer (living room), das Schlafzimmer (bedroom), das Badezimmer (bathroom) and der Garten (garden) are the core rooms.",
          "Das Esszimmer (dining room) and der Flur (hallway) are also common, and der Keller (cellar/basement) is frequently mentioned in describing a whole house.",
          "In + dative answers 'where' something is located: in der Küche (in the kitchen) — der becomes der again here only because Küche is feminine dative; in dem/im Wohnzimmer (in the living room) fuses in and dem into im.",
          "Oben (upstairs) and unten (downstairs) are useful adverbs for describing which floor a room is on.",
        ],
      },
      {
        heading: "Separable and reflexive verbs for daily routine",
        points: [
          "Aufstehen (to get up) is separable: auf splits off and moves to the end — Ich stehe um sieben Uhr auf (I get up at seven o'clock).",
          "Sich duschen (to shower) is reflexive: the reflexive pronoun changes with the subject — ich dusche mich, du duschst dich, er duscht sich.",
          "Sich anziehen (to get dressed) is BOTH separable and reflexive at once: Ich ziehe mich an (I get dressed) — mich sits between the verb and the separated an.",
          "Frühstücken (to have breakfast) is a normal, non-separable verb despite looking like it might split — Ich frühstücke um acht Uhr.",
        ],
      },
      {
        heading: "Telling the time",
        points: [
          "Es ist ein Uhr (it's one o'clock); for other hours, Es ist zwei Uhr, Es ist drei Uhr, and so on.",
          "Viertel nach (quarter past), halb (half past — but counts toward the NEXT hour: halb acht is half past seven, not half past eight), and Viertel vor (quarter to) are the key phrases.",
          "Um + time answers 'at what time': Ich frühstücke um Viertel nach sieben (I have breakfast at quarter past seven).",
          "The 24-hour clock is common in written/formal contexts: seventeen Uhr dreißig for 17:30, useful for train timetables and formal schedules.",
        ],
      },
      {
        heading: "Sequencing a routine",
        points: [
          "Zuerst (first), dann (then), danach (after that) and zuletzt (finally/last) link the steps of a routine into a flowing account.",
          "Placing a sequencing word first in the sentence pushes the verb into second position: Dann dusche ich mich (Then I shower) — dusche, not ich, comes right after dann.",
          "Um sieben Uhr stehe ich auf (At seven o'clock I get up) shows the same rule: the time phrase takes first position, so the verb still has to come second, ahead of ich.",
          "Combining sequencing words with separable verbs is a strong way to show range: Zuerst stehe ich auf, dann dusche ich mich, danach ziehe ich mich an.",
        ],
      },
    ],
    flashcards: [
      { term: "die Küche", definition: "Kitchen — feminine noun, one of the core rooms of a house." },
      { term: "das Wohnzimmer", definition: "Living room — neuter compound noun, literally 'living room'." },
      { term: "das Schlafzimmer", definition: "Bedroom — neuter, literally 'sleep room'." },
      { term: "aufstehen", definition: "To get up — a separable verb; auf moves to the end of the clause: Ich stehe auf." },
      { term: "sich duschen", definition: "To shower — a reflexive verb; the reflexive pronoun (mich/dich/sich) changes with the subject." },
      { term: "sich anziehen", definition: "To get dressed — both separable and reflexive: Ich ziehe mich an, with mich between the verb stem and the separated an." },
      { term: "frühstücken", definition: "To have breakfast — a regular, non-separable verb despite its similar look to separable verbs." },
      { term: "Viertel vor", definition: "Quarter to (the hour), e.g. Viertel vor neun (quarter to nine)." },
      { term: "halb", definition: "Half past, but counts toward the NEXT hour — halb acht means half past seven, a common trap for English speakers." },
      { term: "zuerst", definition: "First (of all) — used to open a sequence of actions." },
      { term: "danach", definition: "After that/afterwards — links a second or later step in a sequence." },
      { term: "zuletzt", definition: "Finally/last — closes a sequence of actions." },
      { term: "der Flur", definition: "Hallway — masculine noun, one of the less commonly taught but useful rooms/spaces of a house." },
      { term: "oben/unten", definition: "Upstairs/downstairs — a useful pair of adverbs for locating rooms within a house." },
    ],
    examTips: [
      {
        tip: "Split separable verbs correctly in a main clause — don't leave them joined.",
        detail: "Aufstehen becomes Ich stehe ... auf, with auf pushed to the very end. Writing Ich aufstehe as one unsplit word is incorrect in a main clause, even though aufstehen is the correct form of the infinitive.",
      },
      {
        tip: "Get the reflexive pronoun right, not just the verb ending.",
        detail: "Sich duschen needs both the verb ending AND the matching reflexive pronoun to change: du duschst dich, not du duschst sich — sich only stays as sich for er/sie/es/sie(they).",
      },
      {
        tip: "Remember sich anziehen needs both changes at once.",
        detail: "Ich ziehe mich an combines the separable split (an to the end) with the reflexive pronoun (mich) — missing either half is a very common accuracy slip for this exact verb.",
      },
      {
        tip: "Halb + the hour means half past the PREVIOUS hour, not the stated one.",
        detail: "Halb acht is half past seven, not half past eight — this trips up almost every English-speaking learner at least once, so it's worth deliberately over-practising.",
      },
      {
        tip: "Use zuerst, dann, danach and zuletzt to structure a routine answer, and remember each one triggers verb-second word order.",
        detail: "Starting a sentence with a sequencing word or a time phrase still requires the verb to sit second, ahead of the subject — Dann dusche ich mich, not Dann ich dusche mich.",
      },
      {
        tip: "Use in + the dative for 'in' a room, and learn im as the fused form.",
        detail: "In dem Wohnzimmer is grammatically fine but almost always contracted in real German to im Wohnzimmer — using the fused form sounds more natural and matches what students hear in listening exams.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'Ich stehe um sieben Uhr auf.'",
        accept: ["i get up at seven o'clock", "i get up at seven"],
        answer: "I get up at seven o'clock — aufstehen splits, with auf pushed to the end of the clause.",
      },
      {
        question: "Translate into German: 'I shower and then I get dressed.'",
        accept: ["ich dusche mich und dann ziehe ich mich an"],
        answer: "Ich dusche mich und dann ziehe ich mich an — both verbs need their reflexive pronoun, and sich anziehen also splits its separable prefix.",
      },
      {
        question: "Complete with the correct reflexive pronoun: 'Du duschst ____ um sechs Uhr.'",
        accept: ["dich"],
        answer: "Dich — the reflexive pronoun matching du; sich only stays as sich for er/sie/es and sie(they)/Sie.",
      },
      {
        question: "Complete the separable verb: 'Er steht um acht Uhr ____.' (aufstehen)",
        accept: ["auf"],
        answer: "Auf — the separable prefix of aufstehen moves to the very end of the main clause: Er steht um acht Uhr auf.",
      },
      {
        question: "Translate into German: 'It's half past seven.'",
        accept: ["es ist halb acht"],
        answer: "Es ist halb acht — halb counts toward the next hour, so 'half past seven' uses acht (eight), not sieben.",
      },
      {
        question: "Complete with the correct form of sich anziehen: 'Ich ____ mich schnell ____.'",
        accept: ["ziehe...an", "ziehe an"],
        answer: "Ziehe...an — Ich ziehe mich schnell an (I get dressed quickly), with the reflexive pronoun mich placed straight after the verb and an pushed to the end.",
      },
      {
        question: "Which sentence has correct verb-second word order?",
        choices: ["Dann dusche ich mich.", "Dann ich dusche mich.", "Ich dann dusche mich.", "Dann mich ich dusche."],
        accept: ["Dann dusche ich mich."],
        answer: "Dann dusche ich mich is correct — starting with dann still requires the verb dusche to come second, directly after it, with ich following.",
      },
      {
        question: "What does 'Viertel vor neun' mean?",
        choices: ["Quarter to nine", "Quarter past nine", "Half past nine", "Nine o'clock exactly"],
        accept: ["Quarter to nine"],
        answer: "Viertel vor neun means quarter to nine. Viertel nach would mean quarter past, and halb neun would mean half past eight, not nine.",
      },
      {
        question: "Which room is das Schlafzimmer?",
        choices: ["Bedroom", "Kitchen", "Bathroom", "Living room"],
        accept: ["Bedroom"],
        answer: "Das Schlafzimmer is the bedroom, literally 'sleep room'. Die Küche is the kitchen, das Badezimmer the bathroom, and das Wohnzimmer the living room.",
      },
      {
        question: "In 'Ich stehe früh auf', what part of speech is 'früh'?",
        choices: ["An adverb", "A noun", "A separable prefix", "A pronoun"],
        accept: ["An adverb"],
        answer: "Früh ('early') describes when the getting-up happens, making it an adverb — it is a separate word from the separable prefix auf, which belongs to the verb itself.",
      },
      {
        question: "Which of these verbs is reflexive?",
        choices: ["sich duschen", "frühstücken", "aufstehen", "essen"],
        accept: ["sich duschen"],
        answer: "Sich duschen is reflexive, shown by sich in its infinitive form. Frühstücken and essen are ordinary verbs, and aufstehen is separable but not reflexive.",
      },
      {
        question: "Give one German word meaning 'afterwards' used to sequence a routine.",
        accept: ["danach", "dann", "zuletzt", "zuerst"],
        answer: "Danach (after that) is the most direct match, though dann (then), zuletzt (finally) and zuerst (first) are all valid sequencing words depending on the exact position in the routine.",
      },
      {
        question: "Explain in English why 'sich anziehen' is harder to use correctly than a normal separable verb like 'aufstehen'.",
        answer:
          "Mark this one yourself against this: sich anziehen combines two grammar points at once — it is both separable, so an moves to the end of the clause, and reflexive, so it also needs a reflexive pronoun (mich, dich, sich...) that agrees with the subject and sits right after the conjugated verb. Aufstehen only needs the separable-verb change, not the reflexive pronoun as well.",
      },
      {
        question: "Write a short paragraph in German describing your morning routine using at least three sequencing words (zuerst, dann, danach, zuletzt) and at least one separable or reflexive verb. Use at least four sentences.",
        answer:
          "There's no single right answer here — mark this one yourself. A strong answer opens each sentence with a sequencing word, keeps the verb in second position after it, and correctly splits any separable verbs used (e.g. Zuerst stehe ich auf, dann dusche ich mich).",
      },
      {
        question: "Translate into English: 'Das Badezimmer ist oben, aber die Küche ist unten.'",
        accept: ["the bathroom is upstairs but the kitchen is downstairs"],
        answer: "The bathroom is upstairs, but the kitchen is downstairs — oben and unten describe which floor each room is on.",
      },
      {
        question: "Complete with the correct form of frühstücken: 'Wir ____ um acht Uhr.'",
        accept: ["frühstücken"],
        answer: "Frühstücken — the wir form of this regular, non-separable verb, identical here to the infinitive.",
      },
    ],
    misconceptions: [
      {
        wrong: "Aufstehen is written and used as one unbroken word in every sentence, the way it appears in a dictionary.",
        right: "As a separable verb, it splits apart in a main clause, with auf pushed to the very end: Ich stehe um sieben Uhr auf — the unbroken form is only the infinitive.",
      },
      {
        wrong: "Halb acht means half past eight, following the number given.",
        right: "Halb counts toward the NEXT hour, so halb acht actually means half past seven — this is one of the most common time-telling mix-ups for English speakers.",
      },
      {
        wrong: "Sich duschen keeps sich unchanged no matter who the subject is.",
        right: "The reflexive pronoun changes with the subject — mich for ich, dich for du, sich for er/sie/es/sie(they) — only the third-person and infinitive forms actually use sich itself.",
      },
      {
        wrong: "Starting a sentence with a time phrase or sequencing word like dann doesn't affect where the verb goes.",
        right: "Whatever comes first in a main clause, the conjugated verb must still occupy second position — Dann dusche ich mich, not Dann ich dusche mich — this is the verb-second (V2) rule.",
      },
      {
        wrong: "Frühstücken is a separable verb because it looks similar in shape to aufstehen or anziehen.",
        right: "Frühstücken is a regular, non-separable verb — there is no prefix to split off, and it behaves like any ordinary weak verb: Ich frühstücke, du frühstückst, and so on.",
      },
    ],
  },

  "german/grammar-toolkit-1": {
    summary:
      "Grammar toolkit: the present. This is a dedicated grammar topic rather than a vocabulary topic: it covers how to conjugate regular weak verbs in the present tense, the key irregular verbs sein, haben and werden, how modal verbs push the main verb to the end of the clause, verb-second (V2) word order in main clauses, and a first introduction to the nominative and accusative cases.",
    keyFacts: [
      {
        heading: "Regular weak verb conjugation",
        points: [
          "Take the infinitive (e.g. spielen), remove -en to get the stem (spiel-), then add: -e (ich), -st (du), -t (er/sie/es), -en (wir), -t (ihr), -en (sie/Sie).",
          "Ich spiele, du spielst, er/sie/es spielt, wir spielen, ihr spielt, sie/Sie spielen — this pattern applies to almost all regular verbs: machen, wohnen, kaufen, lernen.",
          "If the stem ends in -t or -d (e.g. arbeiten), an extra -e- is inserted before -st and -t for pronounceability: du arbeitest, er arbeitet.",
          "If the stem ends in -s, -ß, -z or -x, the du form merges -st into just -t: du heißt (not heißst), du tanzt (not tanzst).",
        ],
      },
      {
        heading: "Irregular verbs: sein, haben, werden",
        points: [
          "Sein (to be): ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind — completely irregular and must be learned by heart.",
          "Haben (to have): ich habe, du hast, er/sie/es hat, wir haben, ihr habt, sie/Sie haben — regular in the plural, irregular in the singular.",
          "Werden (to become) is also irregular: ich werde, du wirst, er/sie/es wird, wir werden, ihr werdet, sie/Sie werden — used both to mean 'to become' and, later, to form the future tense.",
          "These three verbs are the most frequent verbs in the language, so getting their conjugation automatic pays off across every other topic.",
        ],
      },
      {
        heading: "Modal verbs send the main verb to the end",
        points: [
          "Können (can/to be able to), müssen (must/to have to), wollen (want to) and dürfen (to be allowed to) are modal verbs, and all four are irregular in the singular.",
          "A modal verb takes the normal verb-second position, but the main verb it goes with is pushed to the infinitive, right at the end of the clause: Ich kann gut schwimmen (I can swim well).",
          "Ich muss meine Hausaufgaben machen (I must do my homework) — muss is conjugated and in second position, while machen stays as an untouched infinitive at the end.",
          "Modal verb present-tense singular forms drop their umlaut where the infinitive has one: können → ich kann (not ich könne), müssen → ich muss, dürfen → ich darf.",
        ],
      },
      {
        heading: "Word order: verb-second (V2) and cases",
        points: [
          "In a German main clause, the conjugated verb is ALWAYS the second idea, not necessarily the second word — Heute spiele ich Fußball (Today I play football) still has spiele second, with ich pushed after it.",
          "The nominative case marks the subject of the sentence (der Mann spielt); the accusative case marks the direct object (Ich sehe den Mann) — only the masculine article changes, der becoming den.",
          "Feminine, neuter and plural articles look identical in the nominative and accusative: die Frau (subject or object), das Kind (subject or object) don't change form.",
          "Certain prepositions always take the accusative — für, durch, ohne, gegen, um — so the noun after them uses den for a masculine noun: Das Geschenk ist für den Bruder.",
        ],
      },
    ],
    flashcards: [
      { term: "die Stammform (der Stamm)", definition: "The verb stem — the infinitive minus -en, e.g. spiel- from spielen, used to build every present-tense ending." },
      { term: "sein: ich bin, du bist, er ist", definition: "To be — the first three singular forms of the most common irregular verb." },
      { term: "haben: ich habe, du hast, er hat", definition: "To have — regular in the plural (wir/ihr/sie haben) but irregular in the singular." },
      { term: "werden: ich werde, du wirst, er wird", definition: "To become — also used later to build the future tense with werden + infinitive." },
      { term: "können", definition: "Can/to be able to — a modal verb; ich kann, du kannst, er kann, losing the umlaut in the singular." },
      { term: "müssen", definition: "Must/to have to — a modal verb; ich muss, du musst, er muss." },
      { term: "wollen", definition: "To want to — a modal verb; ich will, du willst, er will." },
      { term: "dürfen", definition: "To be allowed to — a modal verb; ich darf, du darfst, er darf." },
      { term: "das Nominativ", definition: "The nominative case — marks the subject of a sentence, the one doing the action." },
      { term: "das Akkusativ", definition: "The accusative case — marks the direct object; only der changes, becoming den." },
      { term: "der/den (masc. accusative)", definition: "The masculine article changes from der (nominative) to den (accusative) when the noun is a direct object." },
      { term: "das Verb an zweiter Stelle", definition: "Verb-second (V2) — the German rule that the conjugated verb is always the second grammatical element of a main clause." },
    ],
    examTips: [
      {
        tip: "Learn sein, haben and werden as a set, side by side, not one at a time.",
        detail: "Because they're irregular and extremely common, drilling all three together (ich bin/habe/werde, du bist/hast/wirst...) builds the automatic recall you need for almost every other sentence in German.",
      },
      {
        tip: "When a modal verb appears, immediately check where the main verb has gone.",
        detail: "It should be an untouched infinitive at the very end of the clause — Ich kann gut schwimmen, not Ich kann gut schwimme. Forgetting to leave the main verb as an infinitive is one of the most common modal-verb mistakes.",
      },
      {
        tip: "Remember modal verbs lose their umlaut in the singular.",
        detail: "Können becomes ich kann, not ich könne; müssen becomes ich muss, not ich müsse — this happens for all four common modals (können, müssen, wollen, dürfen already has no umlaut to lose in the infinitive but do check darf vs dürfen).",
      },
      {
        tip: "Test verb-second by asking 'what is the first idea, and is the verb right after it?'",
        detail: "Heute spiele ich Fußball is correct because spiele is the second element, even though it's not literally the second word — ich is third. This is the single most useful word-order check in GCSE German writing.",
      },
      {
        tip: "Only the masculine article changes between nominative and accusative — check that one carefully.",
        detail: "Der Mann sieht den Hund (the man sees the dog) shows der becoming den for the masculine object Hund, while feminine, neuter and plural articles stay exactly the same, so mistakes cluster specifically around masculine nouns.",
      },
      {
        tip: "Memorise für, durch, ohne, gegen, um as the accusative prepositions, as a fixed list.",
        detail: "Whenever one of these five words appears before a noun, a masculine article after it must be den, not der — Das ist für den Bruder, not für der Bruder.",
      },
    ],
    practice: [
      {
        question: "Conjugate spielen for 'du': complete 'Du ____ Fußball.'",
        accept: ["spielst"],
        answer: "Spielst — take the stem spiel- and add -st for the du form, the regular weak verb pattern.",
      },
      {
        question: "Complete with the correct form of arbeiten (to work): 'Er ____ in einem Büro.'",
        accept: ["arbeitet"],
        answer: "Arbeitet — because the stem ends in -t, an extra -e- is inserted before the -t ending for pronounceability: arbeit-e-t.",
      },
      {
        question: "Complete with the correct form of sein: 'Wir ____ Freunde.'",
        accept: ["sind"],
        answer: "Sind — the wir form of the irregular verb sein.",
      },
      {
        question: "Complete with the correct form of werden: 'Ich ____ Lehrer.' (I am becoming a teacher)",
        accept: ["werde"],
        answer: "Werde — the ich form of werden, used here to mean 'to become'.",
      },
      {
        question: "Translate into German: 'I can swim well.'",
        accept: ["ich kann gut schwimmen"],
        answer: "Ich kann gut schwimmen — kann is the conjugated modal verb in second position, and schwimmen stays as an untouched infinitive at the end.",
      },
      {
        question: "Rewrite with correct word order: 'Ich muss machen meine Hausaufgaben.'",
        accept: ["ich muss meine hausaufgaben machen"],
        answer: "Ich muss meine Hausaufgaben machen — the main verb machen must move to the very end of the clause after a modal verb like muss.",
      },
      {
        question: "Which sentence has correct verb-second word order?",
        choices: ["Heute spiele ich Fußball.", "Heute ich spiele Fußball.", "Heute Fußball ich spiele.", "Ich heute spiele Fußball."],
        accept: ["Heute spiele ich Fußball."],
        answer: "Heute spiele ich Fußball is correct — spiele is the second grammatical element, right after the time phrase heute, with ich pushed after it.",
      },
      {
        question: "Which is the correct 'du' form of können?",
        choices: ["kannst", "könnst", "kannest", "könnest"],
        accept: ["kannst"],
        answer: "Kannst is correct — können loses its umlaut in the singular present tense: ich kann, du kannst, er kann.",
      },
      {
        question: "In 'Ich sehe den Hund', what case is 'den Hund' in?",
        choices: ["Accusative", "Nominative", "Dative", "Genitive"],
        accept: ["Accusative"],
        answer: "Den Hund is accusative — it's the direct object of sehe, and der changes to den for a masculine noun in the accusative case.",
      },
      {
        question: "Which preposition below does NOT take the accusative case?",
        choices: ["mit", "für", "durch", "ohne"],
        accept: ["mit"],
        answer: "Mit takes the dative case, not the accusative. Für, durch and ohne are all part of the fixed group of accusative prepositions along with gegen and um.",
      },
      {
        question: "Which of these verbs is a modal verb?",
        choices: ["müssen", "spielen", "wohnen", "kaufen"],
        accept: ["müssen"],
        answer: "Müssen (must/to have to) is a modal verb. Spielen, wohnen and kaufen are all regular weak verbs with no modal behaviour.",
      },
      {
        question: "What part of speech is 'gut' in 'Ich kann gut schwimmen'?",
        choices: ["An adverb", "A noun", "An adjective", "A modal verb"],
        accept: ["An adverb"],
        answer: "Gut ('well') describes how the swimming is done, which is exactly what an adverb does — the modal verb here is kann, and the main verb is the infinitive schwimmen.",
      },
      {
        question: "Complete with the correct form of dürfen: 'Du ____ hier nicht rauchen.' (you're not allowed to smoke here)",
        accept: ["darfst"],
        answer: "Darfst — the du form of dürfen: Du darfst hier nicht rauchen (You're not allowed to smoke here).",
      },
      {
        question: "Give one German verb that loses an umlaut in its singular present-tense forms.",
        accept: ["können", "müssen", "dürfen"],
        answer: "Können, müssen and dürfen all lose their umlaut in the singular — for example können becomes ich kann, not ich könne.",
      },
      {
        question: "Explain in English what the verb-second (V2) rule means, using an example sentence that does NOT start with the subject.",
        answer:
          "Mark this one yourself against this: in a German main clause, the conjugated verb must always be the second grammatical element, no matter what comes first — the subject doesn't have to be first, but if something else (like a time phrase) takes first position, the subject then has to move after the verb. For example, Heute spiele ich Fußball puts spiele second and ich third, rather than keeping English's subject-first order.",
      },
      {
        question: "Write three German sentences: one using a regular weak verb, one using a modal verb with a main verb pushed to the end, and one using sein or haben. Label which is which.",
        answer:
          "There's no single right answer here — mark this one yourself. A strong answer clearly shows the -e/-st/-t/-en pattern for the weak verb, a correctly conjugated modal verb with an untouched infinitive at the end of its clause, and a correctly conjugated form of sein or haben.",
      },
      {
        question: "Translate into English: 'Wir wollen ins Kino gehen, aber wir müssen zuerst unsere Hausaufgaben machen.'",
        accept: ["we want to go to the cinema but we must do our homework first", "we want to go to the cinema, but first we have to do our homework"],
        answer: "We want to go to the cinema, but we have to do our homework first — both wollen and müssen are modals pushing gehen and machen to the end of their own clauses.",
      },
    ],
    misconceptions: [
      {
        wrong: "Verb-second means the verb is literally always the second word of the sentence.",
        right: "It means the verb is the second grammatical ELEMENT, not necessarily the second word — a whole phrase like heute or am Wochenende can occupy first position, with the verb still coming right after it as a single unit.",
      },
      {
        wrong: "Modal verbs like können and müssen are conjugated the same way as regular weak verbs.",
        right: "They're irregular in the singular and typically lose their umlaut — ich kann, not ich könne — and they always send the main verb to the end of the clause as an untouched infinitive.",
      },
      {
        wrong: "All four articles (der/die/das/plural die) change between the nominative and accusative cases.",
        right: "Only the masculine article changes, from der to den — feminine die, neuter das and plural die stay exactly the same in both cases.",
      },
      {
        wrong: "Haben is completely irregular in every form, the same as sein.",
        right: "Haben is only irregular in the singular (habe/hast/hat) — the plural forms (haben/habt/haben) follow the regular weak-verb pattern.",
      },
      {
        wrong: "Any preposition can be followed by either der or den for a masculine noun, depending on preference.",
        right: "The case is fixed by the specific preposition, not by choice — für, durch, ohne, gegen and um always take the accusative, so a masculine noun after them must be den.",
      },
    ],
  },

  "german/town-and-region": {
    summary:
      "This topic covers describing a town or local area: places you'd find there, giving and understanding directions, the two-way prepositions that describe location and change case depending on movement versus position, weather vocabulary, and the adjectives used to describe what a local area is like.",
    keyFacts: [
      {
        heading: "Places in a town",
        points: [
          "Der Marktplatz (market square), das Rathaus (town hall), die Kirche (church), der Bahnhof (train station) and das Einkaufszentrum (shopping centre) are core town vocabulary.",
          "Der Park, die Bibliothek (library), das Schwimmbad (swimming pool) and der Sportplatz (sports ground) cover leisure locations.",
          "Es gibt... (there is/are...) is the standard way to say what exists in a town: In meiner Stadt gibt es einen Park (In my town there is a park) — gibt takes an accusative object.",
          "In der Stadt (in the town) and auf dem Land (in the countryside) are the two key phrases for contrasting where someone lives.",
        ],
      },
      {
        heading: "Giving and understanding directions",
        points: [
          "Gehen Sie geradeaus (go straight ahead), biegen Sie links/rechts ab (turn left/right — abbiegen is separable) are the standard imperative direction phrases.",
          "An der Ampel (at the traffic lights), an der Kreuzung (at the junction) and neben der Kirche (next to the church) locate a turning or destination.",
          "Wie komme ich zum Bahnhof? (How do I get to the station?) uses zu + dative, fused here into zum (zu + dem).",
          "Es ist ganz in der Nähe (it's very close by) and Es ist weit von hier (it's far from here) describe distance.",
        ],
      },
      {
        heading: "Two-way prepositions: in, an, auf",
        points: [
          "In, an and auf are 'two-way' prepositions: they take the accusative when there's MOVEMENT into a place, and the dative when describing a fixed POSITION.",
          "Ich gehe in die Stadt (I'm going into town — accusative, movement) versus Ich bin in der Stadt (I am in town — dative, position).",
          "Er geht auf den Marktplatz (He's going to the market square — accusative) versus Er ist auf dem Marktplatz (He is at the market square — dative).",
          "The question to ask is 'wohin?' (where to? → accusative) versus 'wo?' (where? → dative) — that question is the quickest way to pick the right case under pressure.",
        ],
      },
      {
        heading: "Weather and describing an area",
        points: [
          "Es ist sonnig (it's sunny), es regnet (it's raining), es schneit (it's snowing), es ist windig (it's windy) and es ist bewölkt (it's cloudy) cover core weather.",
          "Es gibt viel/wenig zu tun (there's a lot/little to do) is a common way to evaluate a local area.",
          "Ruhig (quiet), lebhaft/belebt (lively), sauber (clean), schmutzig (dirty) and langweilig (boring) are adjectives commonly used to describe a town.",
          "Auf dem Land ist es ruhiger als in der Stadt (In the countryside it's quieter than in the town) shows a comparative (ruhiger) built by adding -er, plus als for 'than'.",
        ],
      },
    ],
    flashcards: [
      { term: "das Rathaus", definition: "Town hall — neuter compound noun, literally 'council house'." },
      { term: "der Bahnhof", definition: "Train station — masculine compound noun, literally 'railway yard/courtyard'." },
      { term: "das Einkaufszentrum", definition: "Shopping centre — neuter; plural is die Einkaufszentren." },
      { term: "es gibt", definition: "There is/are — an idiomatic phrase that always takes an accusative object: Es gibt einen Park." },
      { term: "geradeaus", definition: "Straight ahead — used in giving directions: Gehen Sie geradeaus." },
      { term: "abbiegen", definition: "To turn (off) — a separable verb: biegen Sie links ab (turn left)." },
      { term: "die Ampel", definition: "Traffic lights — feminine noun, common in direction-giving phrases like an der Ampel." },
      { term: "in der Nähe", definition: "Nearby/close by — a fixed phrase using the dative feminine article der." },
      { term: "auf dem Land", definition: "In the countryside — dem is the dative masculine/neuter form after auf describing fixed position, not movement." },
      { term: "wohin? / wo?", definition: "Where to? / where? — wohin signals the accusative with two-way prepositions, wo signals the dative." },
      { term: "sonnig", definition: "Sunny — a common weather adjective, formed from die Sonne (sun) plus -ig." },
      { term: "bewölkt", definition: "Cloudy — from die Wolke (cloud); note the be- prefix and past-participle-like -t ending." },
      { term: "lebhaft", definition: "Lively — a useful adjective for describing a busy town centre." },
      { term: "ruhiger als", definition: "Quieter than — the comparative of ruhig (quiet) formed with -er, paired with als for 'than'." },
    ],
    examTips: [
      {
        tip: "Ask 'wohin or wo?' before choosing the case after in/an/auf.",
        detail: "If the sentence describes movement TO somewhere, use the accusative (in die Stadt); if it describes a fixed position, use the dative (in der Stadt). This one question resolves almost every two-way preposition mistake.",
      },
      {
        tip: "Learn zum and zur as fused forms, not as separate words.",
        detail: "Zu dem fuses to zum (masculine/neuter) and zu der fuses to zur (feminine) — Wie komme ich zum Bahnhof? and Wie komme ich zur Kirche? are the natural forms used in real German, not the unfused versions.",
      },
      {
        tip: "Use es gibt with the accusative, every time.",
        detail: "Es gibt einen Park is correct because gibt takes an accusative object — a common mistake is leaving the article in the nominative form (es gibt ein Park), which is incorrect.",
      },
      {
        tip: "Remember abbiegen splits in an instruction, just like any separable verb.",
        detail: "Biegen Sie links ab is the correct imperative form, with ab pushed to the end — this is the same separable-verb rule seen elsewhere in German grammar, applied to a direction-giving context.",
      },
      {
        tip: "Build comparatives with -er and als, not a separate word for 'more'.",
        detail: "Ruhiger als (quieter than) simply adds -er to the adjective — German doesn't normally need a word like 'more' the way English sometimes does for longer adjectives.",
      },
      {
        tip: "Use a range of weather AND opinion adjectives together for a richer description.",
        detail: "Combining Es ist sonnig with an opinion adjective like lebhaft or ruhig in the same paragraph about a town shows range that a list of disconnected facts doesn't.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'Es gibt einen Park in meiner Stadt.'",
        accept: ["there is a park in my town", "there's a park in my town"],
        answer: "There is a park in my town — gibt takes an accusative object, shown by einen rather than ein.",
      },
      {
        question: "Translate into German: 'Go straight ahead and turn left.'",
        accept: ["gehen sie geradeaus und biegen sie links ab"],
        answer: "Gehen Sie geradeaus und biegen Sie links ab — abbiegen splits, with ab pushed to the end of its clause.",
      },
      {
        question: "Complete with the correct case: 'Ich gehe in ___ Stadt.' (die/der — movement)",
        accept: ["die"],
        answer: "Die — movement into a place with a two-way preposition takes the accusative, and Stadt is feminine, so the accusative form is identical to the nominative: die.",
      },
      {
        question: "Complete with the correct case: 'Ich bin in ___ Stadt.' (die/der — fixed position)",
        accept: ["der"],
        answer: "Der — a fixed position with a two-way preposition takes the dative, and der is the dative feminine article.",
      },
      {
        question: "Translate into German: 'How do I get to the station?'",
        accept: ["wie komme ich zum bahnhof"],
        answer: "Wie komme ich zum Bahnhof? — zum is the fused form of zu dem, used because Bahnhof is masculine.",
      },
      {
        question: "Complete with the correct form of sein: 'Es ___ sehr windig heute.'",
        accept: ["ist"],
        answer: "Ist — the es form of sein, used in the weather phrase Es ist sehr windig heute (It's very windy today).",
      },
      {
        question: "Which question word signals that a two-way preposition needs the accusative case?",
        choices: ["wohin", "wo", "wann", "warum"],
        accept: ["wohin"],
        answer: "Wohin (where to?) signals movement and therefore the accusative case. Wo (where?) signals fixed position and the dative; wann and warum ask about time and reason, unrelated to case choice here.",
      },
      {
        question: "Which sentence correctly describes a fixed position, using the dative?",
        choices: ["Er ist auf dem Marktplatz.", "Er geht auf den Marktplatz.", "Er ist auf den Marktplatz.", "Er geht auf dem Marktplatz."],
        accept: ["Er ist auf dem Marktplatz."],
        answer: "Er ist auf dem Marktplatz (He is at the market square) correctly pairs ist, a state of being, with the dative dem. Geht (movement) should pair with the accusative den instead.",
      },
      {
        question: "What gender is der Bahnhof?",
        choices: ["Masculine", "Feminine", "Neuter", "Plural only"],
        accept: ["Masculine"],
        answer: "Der Bahnhof is masculine, shown by the article der.",
      },
      {
        question: "In 'Es ist sehr ruhig hier', what part of speech is 'ruhig'?",
        choices: ["An adjective", "A noun", "A verb", "A preposition"],
        accept: ["An adjective"],
        answer: "Ruhig ('quiet') describes the place being discussed, which is exactly what an adjective does — es and ist are the subject and verb.",
      },
      {
        question: "Which of these means 'there's a lot to do'?",
        choices: ["Es gibt viel zu tun.", "Es gibt wenig zu tun.", "Es ist viel zu tun.", "Es hat viel zu tun."],
        accept: ["Es gibt viel zu tun."],
        answer: "Es gibt viel zu tun is the correct fixed phrase for 'there's a lot to do'. Es gibt wenig zu tun would mean the opposite, and the other two options use the wrong verb.",
      },
      {
        question: "Give one German adjective that could describe a town as lively.",
        accept: ["lebhaft", "belebt"],
        answer: "Lebhaft or belebt both mean 'lively', a common positive adjective for describing a busy town centre.",
      },
      {
        question: "Explain in English how the case changes with two-way prepositions like in, an and auf, depending on movement versus position, and give one example sentence of each.",
        answer:
          "Mark this one yourself against this: two-way prepositions take the accusative case when the sentence describes movement TOWARD a place (answering wohin?) and the dative case when describing a fixed position (answering wo?). For example, Ich gehe in die Stadt (accusative, movement) versus Ich bin in der Stadt (dative, position).",
      },
      {
        question: "Write a short paragraph in German describing your local area: name two places using es gibt, describe the weather, and give one opinion adjective about the area. Use at least four sentences.",
        answer:
          "There's no single right answer here — mark this one yourself. A strong answer uses es gibt with correct accusative articles for the places named, at least one weather phrase (Es ist.../Es regnet...), and at least one opinion adjective such as ruhig or lebhaft.",
      },
      {
        question: "Translate into English: 'Auf dem Land ist es ruhiger als in der Stadt.'",
        accept: ["in the countryside it is quieter than in the town", "the countryside is quieter than the town"],
        answer: "In the countryside it is quieter than in the town — ruhiger is the comparative form of ruhig, paired with als for 'than'.",
      },
      {
        question: "Complete with the correct form of es geben: '____ es ein Schwimmbad in deiner Stadt?' (Is there...)",
        accept: ["gibt"],
        answer: "Gibt — es geben stays as gibt regardless of subject in this fixed 'there is/are' phrase, here inverted into a question: Gibt es ein Schwimmbad in deiner Stadt?",
      },
    ],
    misconceptions: [
      {
        wrong: "In, an and auf always take the same case no matter what the sentence describes.",
        right: "As two-way prepositions, they switch between accusative (for movement, wohin?) and dative (for fixed position, wo?) depending entirely on what the sentence is describing.",
      },
      {
        wrong: "Es gibt can be followed by a noun in any case, since 'there is' feels like a simple statement.",
        right: "Es gibt always takes an accusative object — Es gibt einen Park, not Es gibt ein Park — because gibt is grammatically a normal transitive verb taking a direct object.",
      },
      {
        wrong: "Zu dem and zu der are always written out in full in natural German.",
        right: "They are almost always fused in real usage to zum and zur respectively — Wie komme ich zum Bahnhof?, not zu dem Bahnhof, which would sound unnatural even though it's not technically wrong.",
      },
      {
        wrong: "Abbiegen is used as one unbroken word in a direction-giving instruction.",
        right: "Like other separable verbs, it splits in a main clause or imperative: Biegen Sie links ab, with ab pushed to the end.",
      },
      {
        wrong: "German always needs a separate word for 'more' to form a comparative, similar to English 'more lively'.",
        right: "Most German adjectives form the comparative simply by adding -er: ruhiger, lebhafter — a separate word for 'more' isn't needed the way it sometimes is in English.",
      },
    ],
  },

  "german/holidays-and-travel": {
    summary:
      "This topic covers talking about holidays and travel: transport vocabulary, the questions and phrases needed at a hotel or station, the perfect tense for describing a past holiday — including the crucial choice between haben and sein as the auxiliary verb and how strong verbs form irregular past participles — and the correct prepositions for saying which country you travelled to.",
    keyFacts: [
      {
        heading: "Transport vocabulary",
        points: [
          "Der Zug (train), das Flugzeug (plane), das Auto (car), der Bus and das Fahrrad (bicycle) are the core means of transport.",
          "Mit dem Zug fahren (to travel by train) uses mit + dative for 'by' a means of transport: mit dem Auto, mit dem Flugzeug.",
          "Der Flughafen (airport), der Bahnhof (train station) and der Hafen (port) are the departure/arrival points matched to each transport type.",
          "Die Fahrkarte (ticket, for train/bus) and das Ticket/der Flugschein (plane ticket) are useful nouns for booking scenarios.",
        ],
      },
      {
        heading: "Booking and asking questions",
        points: [
          "Ich möchte ein Zimmer reservieren (I would like to book a room) and Haben Sie ein Doppelzimmer frei? (Do you have a double room free?) are standard hotel phrases.",
          "Ich möchte eine Fahrkarte nach Berlin, bitte (I'd like a ticket to Berlin, please) is the standard station request.",
          "Wann fährt der Zug ab? (When does the train leave?) uses the separable verb abfahren, with ab at the end.",
          "Wie viel kostet...? (How much does...cost?) is the essential price question for any booking situation.",
        ],
      },
      {
        heading: "The perfect tense: haben vs sein",
        points: [
          "Most verbs use haben as their auxiliary: Ich habe ein Buch gelesen (I read a book) — the past participle goes to the end of the clause.",
          "Verbs of MOVEMENT or CHANGE OF STATE use sein instead: Ich bin nach Berlin gefahren (I travelled to Berlin), Ich bin angekommen (I arrived).",
          "Sein itself is one of the few verbs that takes sein as its own auxiliary: Ich bin gewesen (I was/have been).",
          "A useful rule of thumb: if you can insert 'went somewhere' or 'became something' into the meaning, it's probably sein; otherwise, default to haben.",
        ],
      },
      {
        heading: "Past participle formation and countries",
        points: [
          "Weak (regular) verbs form the participle as ge- + stem + -t: spielen → gespielt, machen → gemacht, kaufen → gekauft.",
          "Strong (irregular) verbs form the participle as ge- + changed stem + -en, and simply have to be learned: fahren → gefahren, sehen → gesehen, essen → gegessen, trinken → getrunken.",
          "Separable verbs put ge- in the MIDDLE, between the prefix and the stem: ankommen → angekommen, aufstehen → aufgestanden.",
          "Countries mostly take no article and use nach: nach Deutschland, nach Frankreich; a small group of countries are grammatically feminine or plural and need in + accusative instead: in die Schweiz, in die USA.",
        ],
      },
    ],
    flashcards: [
      { term: "der Zug (die Züge)", definition: "Train — masculine noun; used in mit dem Zug fahren (to travel by train)." },
      { term: "das Flugzeug (die Flugzeuge)", definition: "Aeroplane — neuter noun, literally 'flying thing'." },
      { term: "abfahren", definition: "To depart — a separable verb: Der Zug fährt um neun Uhr ab (The train departs at nine)." },
      { term: "ankommen", definition: "To arrive — a separable verb; perfect participle is angekommen, with sein as the auxiliary." },
      { term: "die Fahrkarte (die Fahrkarten)", definition: "Ticket (for a train or bus) — feminine noun, distinct from der Flugschein for a plane ticket." },
      { term: "Ich möchte...", definition: "I would like... — the polite conditional form of mögen, used for requests and bookings." },
      { term: "gefahren", definition: "Travelled/driven — the strong past participle of fahren, taking sein as its auxiliary because it describes movement." },
      { term: "gegessen", definition: "Eaten — the strong past participle of essen, taking haben as its auxiliary." },
      { term: "gewesen", definition: "Was/been — the irregular past participle of sein, one of the few verbs that takes sein as its own auxiliary." },
      { term: "nach Deutschland", definition: "To Germany — nach is used with most country names, which take no article." },
      { term: "in die Schweiz", definition: "To Switzerland — die Schweiz is one of the few countries that is grammatically feminine and needs in + accusative rather than nach." },
      { term: "das Doppelzimmer", definition: "Double room — neuter compound noun, a key hotel-booking word." },
      { term: "die Übernachtung", definition: "Overnight stay — feminine noun, useful in hotel-booking contexts (eine Übernachtung, zwei Übernachtungen)." },
    ],
    examTips: [
      {
        tip: "Decide haben or sein BEFORE you try to remember the participle.",
        detail: "Verbs of movement or change of state (fahren, gehen, ankommen, werden) take sein; almost everything else takes haben. Getting the auxiliary wrong loses the mark even if the participle itself is spelled correctly.",
      },
      {
        tip: "Learn strong verb participles as a fixed list, not by trying to apply a rule.",
        detail: "Gefahren, gesehen, gegessen and getrunken don't follow a predictable pattern from their infinitives, so they need direct memorisation the same way English irregular past tenses do (go → went, not go → goed).",
      },
      {
        tip: "Put ge- in the middle of a separable verb's participle, not at the front.",
        detail: "Ankommen becomes angekommen, not geankommen — the ge- slots between the separable prefix an and the stem kommen.",
      },
      {
        tip: "Check whether a country needs nach or in + accusative before you write it.",
        detail: "Most countries use nach with no article (nach Deutschland, nach Italien), but die Schweiz, die Türkei and plural country names like die USA need in + accusative instead — learn the small exception list rather than assuming nach always works.",
      },
      {
        tip: "Push the past participle to the very end of the clause, after any other information.",
        detail: "Ich bin letztes Jahr nach Spanien gefahren keeps gefahren right at the end, after the time phrase and destination — this is the same 'verb sent to the end' pattern seen with modal verbs and separable verbs elsewhere in German.",
      },
      {
        tip: "Use Ich möchte, not Ich will, for polite requests when booking something.",
        detail: "Ich möchte ein Zimmer reservieren sounds appropriately polite; Ich will... can come across as blunt or demanding in a booking context, even though it's grammatically correct.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'Ich bin nach Berlin gefahren.'",
        accept: ["i travelled to berlin", "i went to berlin", "i drove to berlin"],
        answer: "I travelled to Berlin — gefahren is a strong past participle taking sein because fahren is a verb of movement.",
      },
      {
        question: "Translate into German: 'I ate a sandwich.'",
        accept: ["ich habe ein sandwich gegessen"],
        answer: "Ich habe ein Sandwich gegessen — essen takes haben as its auxiliary, and gegessen is its irregular strong participle.",
      },
      {
        question: "Complete the perfect tense: 'Er ____ Fußball gespielt.' (haben or sein)",
        accept: ["hat"],
        answer: "Hat — spielen is a regular activity verb, not one of movement or change of state, so it takes haben as its auxiliary.",
      },
      {
        question: "Complete the perfect tense: 'Wir ____ um zehn Uhr angekommen.' (haben or sein)",
        accept: ["sind"],
        answer: "Sind — ankommen (to arrive) is a verb of movement/change of state, so it takes sein as its auxiliary: Wir sind angekommen.",
      },
      {
        question: "Give the past participle of machen.",
        accept: ["gemacht"],
        answer: "Gemacht — a regular weak participle formed with ge- + stem + -t, following the standard pattern for weak verbs.",
      },
      {
        question: "Translate into German: 'I would like a ticket to Munich, please.'",
        accept: ["ich möchte eine fahrkarte nach münchen, bitte", "ich möchte eine fahrkarte nach munchen, bitte"],
        answer: "Ich möchte eine Fahrkarte nach München, bitte — möchte is the polite conditional form used for requests, and nach is correct because Germany's cities and most countries take no article.",
      },
      {
        question: "Which auxiliary verb does fahren take in the perfect tense?",
        choices: ["sein", "haben", "werden", "either, with no difference in meaning"],
        accept: ["sein"],
        answer: "Fahren takes sein because it's a verb of movement — Ich bin gefahren, not Ich habe gefahren.",
      },
      {
        question: "Which country needs in + accusative rather than nach?",
        choices: ["die Schweiz", "Deutschland", "Italien", "Spanien"],
        accept: ["die Schweiz"],
        answer: "Die Schweiz is grammatically feminine, so it needs in die Schweiz. Deutschland, Italien and Spanien are all neuter and take no article, using nach instead.",
      },
      {
        question: "In 'mit dem Zug', what case is 'dem Zug' in?",
        choices: ["Dative", "Accusative", "Nominative", "Genitive"],
        accept: ["Dative"],
        answer: "Dem Zug is dative — mit always takes the dative case, so der (masculine nominative) becomes dem.",
      },
      {
        question: "Which of these is the correct past participle of sehen?",
        choices: ["gesehen", "geseht", "gesehte", "geseen"],
        accept: ["gesehen"],
        answer: "Gesehen is the correct strong past participle of sehen, formed with ge- + changed stem + -en rather than the regular -t ending.",
      },
      {
        question: "Which verb correctly completes 'Der Zug ____ um neun Uhr ab.' (to depart)",
        choices: ["fährt", "fahrt", "fahre", "gefahren"],
        accept: ["fährt"],
        answer: "Fährt is correct — abfahren is separable and irregular (a→ä vowel change), so the er/sie/es form is fährt...ab.",
      },
      {
        question: "Give one German verb, other than fahren, that takes sein in the perfect tense.",
        accept: ["gehen", "kommen", "ankommen", "werden", "bleiben", "sein"],
        answer: "Several verbs of movement or change of state take sein, for example gehen (to go), kommen (to come), ankommen (to arrive), werden (to become) or bleiben (to stay).",
      },
      {
        question: "Explain in English the rule of thumb for choosing between haben and sein in the perfect tense, and give one example sentence for each.",
        answer:
          "Mark this one yourself against this: most verbs take haben, but verbs describing movement from one place to another or a change of state take sein instead. For example, Ich habe ferngesehen (I watched TV — haben, no movement) versus Ich bin nach Spanien geflogen (I flew to Spain — sein, movement).",
      },
      {
        question: "Write a short paragraph in German about a past holiday: where you went, how you travelled, and one thing you did there. Use the perfect tense throughout, with at least four sentences.",
        answer:
          "There's no single right answer here — mark this one yourself. A strong answer correctly chooses haben or sein for each verb, uses accurate weak or strong past participles pushed to the end of each clause, and uses nach or in + accusative correctly for the destination country.",
      },
      {
        question: "Translate into English: 'Wir haben zwei Übernachtungen in einem Hotel gebucht.'",
        accept: ["we booked two overnight stays in a hotel", "we have booked two nights in a hotel"],
        answer: "We booked two overnight stays in a hotel — gebucht is the regular weak participle of buchen (to book), taking haben.",
      },
      {
        question: "Complete with the correct form of kosten: 'Wie viel ____ die Fahrkarte?'",
        accept: ["kostet"],
        answer: "Kostet — the er/sie/es form of kosten, used in the standard price question Wie viel kostet die Fahrkarte? (How much does the ticket cost?).",
      },
    ],
    misconceptions: [
      {
        wrong: "The choice between haben and sein in the perfect tense is random or a matter of personal style.",
        right: "It follows a real rule: verbs of movement or change of state (fahren, gehen, ankommen, werden) take sein, and almost everything else takes haben — the choice is fixed per verb, not optional.",
      },
      {
        wrong: "All past participles are formed the same way, by adding ge- and -t to the stem.",
        right: "That pattern only applies to weak (regular) verbs like spielen → gespielt. Strong (irregular) verbs like fahren, sehen and essen form participles ending in -en with an often-changed stem, and must be learned individually.",
      },
      {
        wrong: "Ge- always goes at the very front of a past participle, with no exceptions.",
        right: "For separable verbs, ge- is inserted in the MIDDLE, between the separable prefix and the stem — ankommen becomes angekommen, not geankommen.",
      },
      {
        wrong: "Every country name in German uses nach with no article, the same as Deutschland or Frankreich.",
        right: "Most countries do, but a small group — including die Schweiz, die Türkei and plural names like die USA — are grammatically feminine or plural and require in + accusative instead.",
      },
      {
        wrong: "Mit dem Zug and mit den Zug are interchangeable, since both look like they could mean 'by train'.",
        right: "Mit always takes the dative case, so only mit dem Zug is correct — mit den Zug incorrectly uses the accusative form of the article.",
      },
    ],
  },

  "german/jobs-and-future-plans": {
    summary:
      "This topic covers describing jobs and future plans: job vocabulary, describing working conditions and pay along with pros and cons of a job, expressing the future using werden + infinitive as well as the present tense with a future time marker, and expressing intentions with ich möchte and ich habe vor.",
    keyFacts: [
      {
        heading: "Job vocabulary",
        points: [
          "Der Lehrer/die Lehrerin (teacher), der Arzt/die Ärztin (doctor), der Ingenieur/die Ingenieurin (engineer) and der Verkäufer/die Verkäuferin (shop assistant) show the standard masculine/feminine job-noun pattern.",
          "Most job nouns add -in for the feminine form, often with an umlaut added too: der Arzt → die Ärztin.",
          "Von Beruf bin ich... (by profession I am...) and Ich arbeite als... (I work as...) are the two standard ways to state a job — arbeite als takes no article at all.",
          "Der Beruf (job/profession) and die Stelle (position/post) are useful general nouns alongside specific job titles.",
        ],
      },
      {
        heading: "Describing a job: conditions, pay, pros and cons",
        points: [
          "Ich verdiene gut/schlecht (I earn well/badly) and das Gehalt (salary) describe pay.",
          "Die Arbeitszeiten (working hours), anstrengend (demanding/tiring) and stressig (stressful) describe working conditions.",
          "Der Vorteil (advantage) and der Nachteil (disadvantage) structure a balanced answer: Ein Vorteil ist, dass man gut verdient (One advantage is that you earn well) — dass sends the verb to the end, just like weil.",
          "Flexible Arbeitszeiten (flexible hours) and ein sicherer Job (a secure job) are common positive points; lange Arbeitszeiten (long hours) is a common negative.",
        ],
      },
      {
        heading: "The future: werden + infinitive and present tense",
        points: [
          "The proper future tense is werden (conjugated) + infinitive at the end: Ich werde Lehrer werden (I will become a teacher) — note werden appears twice, once conjugated and once as the infinitive itself.",
          "Nächstes Jahr werde ich an der Universität studieren (Next year I will study at university) — werde is in second position, and the main verb studieren goes to the end.",
          "In everyday speech, the present tense with a future time marker is just as common and often preferred: Nächstes Jahr fahre ich nach Deutschland (Next year I'm going to Germany).",
          "Both forms are correct GCSE German; using both across a piece of writing shows a wider range of tenses than relying on just one.",
        ],
      },
      {
        heading: "Expressing intentions: möchte and vorhaben",
        points: [
          "Ich möchte + infinitive (I would like to) expresses a wish: Ich möchte Medizin studieren (I would like to study medicine).",
          "Ich habe vor, + infinitive (I plan to/intend to) is a separable verb, vorhaben, used specifically for firmer intentions: Ich habe vor, im Ausland zu arbeiten (I plan to work abroad).",
          "Vorhaben needs zu before the final infinitive when there's other material in the clause: habe vor, ... zu arbeiten — this zu + infinitive pattern is common after many intention expressions.",
          "Hoffentlich (hopefully) and Ich hoffe, dass... (I hope that...) are useful for softer, less certain future statements.",
        ],
      },
    ],
    flashcards: [
      { term: "der Lehrer / die Lehrerin", definition: "Teacher — masculine/feminine noun pair; most jobs add -in for the feminine form." },
      { term: "der Arzt / die Ärztin", definition: "Doctor — the feminine form adds both -in and an umlaut to the stem." },
      { term: "der Beruf (die Berufe)", definition: "Job/profession — masculine noun, used in Von Beruf bin ich... (By profession I am...)." },
      { term: "verdienen", definition: "To earn — a regular weak verb, used in Ich verdiene gut (I earn well)." },
      { term: "das Gehalt (die Gehälter)", definition: "Salary — neuter noun with an umlauted plural." },
      { term: "der Vorteil / der Nachteil", definition: "Advantage / disadvantage — both masculine nouns, useful for structuring a balanced opinion." },
      { term: "werden", definition: "To become/will — used both as an ordinary verb (to become) and, conjugated + infinitive, to build the future tense." },
      { term: "Ich möchte...", definition: "I would like to... — a softer expression of a future wish, followed by an infinitive at the end of the clause." },
      { term: "vorhaben", definition: "To plan/intend to — a separable verb: Ich habe vor, ... zu arbeiten (I plan to work...)." },
      { term: "hoffentlich", definition: "Hopefully — an adverb used to soften a statement about the future." },
      { term: "stressig", definition: "Stressful — a common adjective for describing difficult working conditions." },
      { term: "im Ausland", definition: "Abroad — literally 'in the foreign land'; a common phrase in career and travel ambitions." },
    ],
    examTips: [
      {
        tip: "Remember werden appears twice in the true future tense.",
        detail: "Ich werde Lehrer werden looks repetitive but is correct — the first werde is the conjugated auxiliary in second position, and the second werden is the untouched infinitive meaning 'become', sent to the end.",
      },
      {
        tip: "It's fine to use the present tense for future meaning, as long as a time marker makes it clear.",
        detail: "Nächstes Jahr fahre ich nach Deutschland is entirely acceptable GCSE German and often sounds more natural than forcing werden into every future statement.",
      },
      {
        tip: "Push the verb to the end after dass, exactly like weil.",
        detail: "Ein Vorteil ist, dass man gut verdient sends verdient to the end of the dass clause — dass behaves as a subordinating conjunction in exactly the same way as weil.",
      },
      {
        tip: "Use vorhaben for a firmer intention than möchte.",
        detail: "Ich habe vor, im Ausland zu arbeiten reads as a more definite plan than Ich möchte im Ausland arbeiten, which is more of a wish — choosing the right one shows precision in expressing certainty.",
      },
      {
        tip: "Don't forget zu before the final infinitive with vorhaben when other words come between.",
        detail: "Ich habe vor, nächstes Jahr im Ausland zu arbeiten needs zu directly before arbeiten — dropping it is a common mistake once a sentence gets longer than the simplest examples.",
      },
      {
        tip: "Learn feminine job nouns as their own vocabulary item, not as an automatic add-on.",
        detail: "Die Ärztin isn't just Arzt plus -in — the umlaut change makes it a distinct word worth learning by itself, and several other job nouns follow the same umlaut-plus-in pattern.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'Ich möchte Ärztin werden.'",
        accept: ["i would like to become a doctor"],
        answer: "I would like to become a doctor — spoken by a female speaker, shown by the feminine job noun Ärztin, with werden meaning 'to become' here as an infinitive.",
      },
      {
        question: "Translate into German: 'Next year I will study at university.' (using werden + infinitive)",
        accept: ["nächstes jahr werde ich an der universität studieren"],
        answer: "Nächstes Jahr werde ich an der Universität studieren — werde is conjugated in second position (after the time phrase), and studieren stays as an infinitive at the end.",
      },
      {
        question: "Complete with the correct form of verdienen: 'Meine Mutter ____ gut.' (my mother earns well)",
        accept: ["verdient"],
        answer: "Verdient — the er/sie/es form of the regular verb verdienen: Meine Mutter verdient gut.",
      },
      {
        question: "Rewrite with correct word order: 'Ein Vorteil ist, dass man verdient gut.'",
        accept: ["ein vorteil ist, dass man gut verdient", "ein vorteil ist dass man gut verdient"],
        answer: "Ein Vorteil ist, dass man gut verdient — dass sends the conjugated verb verdient to the very end of its own clause.",
      },
      {
        question: "Translate into German: 'I plan to work abroad.'",
        accept: ["ich habe vor, im ausland zu arbeiten", "ich habe vor im ausland zu arbeiten"],
        answer: "Ich habe vor, im Ausland zu arbeiten — vorhaben is separable (habe...vor), and zu is required directly before the final infinitive arbeiten.",
      },
      {
        question: "Give the feminine form of der Lehrer.",
        accept: ["die lehrerin"],
        answer: "Die Lehrerin — most masculine job nouns add -in to form the feminine, without an umlaut change in this particular case.",
      },
      {
        question: "Which sentence correctly uses the true future tense (werden + infinitive)?",
        choices: ["Ich werde Lehrer werden.", "Ich werde Lehrer geworden.", "Ich bin Lehrer werden.", "Ich werde Lehrer wird."],
        accept: ["Ich werde Lehrer werden."],
        answer: "Ich werde Lehrer werden is correct — the conjugated werde takes second position and the infinitive werden closes the clause. The other options wrongly use a participle or the wrong auxiliary.",
      },
      {
        question: "Which word correctly completes 'Ein ____ ist, dass die Arbeitszeiten lang sind.' (a disadvantage)",
        choices: ["Nachteil", "Vorteil", "Gehalt", "Beruf"],
        accept: ["Nachteil"],
        answer: "Nachteil means disadvantage, the correct word for describing long working hours negatively. Vorteil means advantage, Gehalt means salary, and Beruf means job/profession.",
      },
      {
        question: "In 'Ich arbeite als Verkäuferin', what part of speech is 'Verkäuferin'?",
        choices: ["A noun", "A verb", "An adjective", "A preposition"],
        accept: ["A noun"],
        answer: "Verkäuferin ('shop assistant') is a noun naming the job, used after als with no article — arbeite is the verb of the sentence.",
      },
      {
        question: "Which of these expresses a firmer intention rather than just a wish?",
        choices: ["Ich habe vor, ... zu arbeiten.", "Ich möchte ... arbeiten.", "Ich hoffe, dass ich arbeite.", "Vielleicht arbeite ich."],
        accept: ["Ich habe vor, ... zu arbeiten."],
        answer: "Ich habe vor, ... zu arbeiten (I plan to work...) expresses a firmer intention. Möchte is more of a wish, hoffe is hopeful but uncertain, and vielleicht (maybe) is the least certain of all.",
      },
      {
        question: "Give one German adjective that could describe a stressful job.",
        accept: ["stressig", "anstrengend"],
        answer: "Stressig (stressful) or anstrengend (demanding/tiring) are both common adjectives for describing difficult working conditions.",
      },
      {
        question: "Explain in English the two different ways German can express a future action, giving one example sentence of each.",
        answer:
          "Mark this one yourself against this: German can use werden (conjugated) + infinitive as a dedicated future tense, e.g. Ich werde studieren (I will study), or simply use the present tense together with a future time marker, e.g. Nächstes Jahr studiere ich (Next year I'm studying) — both are correct and commonly used in speech and writing.",
      },
      {
        question: "Write a short paragraph in German about your future career plans: name a job you'd like, give one advantage of that job using dass, and state one intention using either möchte or habe vor. Use at least four sentences.",
        answer:
          "There's no single right answer here — mark this one yourself. A strong answer names a job with the correct gendered noun, uses a dass clause with the verb correctly pushed to the end, and includes a clear future or intention structure (werden + infinitive, möchte + infinitive, or habe vor... zu + infinitive).",
      },
      {
        question: "Translate into English: 'Ein Nachteil ist, dass die Arbeitszeiten sehr lang sind.'",
        accept: ["a disadvantage is that the working hours are very long"],
        answer: "A disadvantage is that the working hours are very long — dass sends the verb sind to the end of its clause.",
      },
      {
        question: "Complete with the correct form of werden: 'Sie ____ Ingenieurin werden.' (she will become an engineer)",
        accept: ["wird"],
        answer: "Wird — the er/sie/es form of werden, used here as the conjugated auxiliary of the future tense.",
      },
      {
        question: "Which phrase correctly means 'by profession'?",
        choices: ["Von Beruf", "Von Arbeit", "Als Beruf", "Im Beruf"],
        accept: ["Von Beruf"],
        answer: "Von Beruf is the fixed phrase used in Von Beruf bin ich Lehrer (By profession I am a teacher) — the other options aren't the standard idiom.",
      },
      {
        question: "Translate into German: 'My father earns a lot.'",
        accept: ["mein vater verdient viel"],
        answer: "Mein Vater verdient viel — verdienen is a regular weak verb, and viel (a lot) describes the amount earned.",
      },
    ],
    misconceptions: [
      {
        wrong: "Ich werde Lehrer werden is a mistake because werden shouldn't appear twice in one sentence.",
        right: "Both uses are correct and different: the first werde is the conjugated future auxiliary, and the second werden is the untouched infinitive meaning 'to become' — the repetition is a normal, expected feature of this sentence type.",
      },
      {
        wrong: "German always needs werden + infinitive to talk about the future, unlike English's flexible present tense.",
        right: "German commonly uses the present tense with a future time marker instead, e.g. Nächstes Jahr fahre ich nach Deutschland — this is just as correct and often more natural than the werden construction.",
      },
      {
        wrong: "Möchte and habe vor mean exactly the same thing and can be swapped freely.",
        right: "Möchte expresses a wish or preference, while habe vor (vorhaben) expresses a firmer, more concrete intention or plan — the choice signals how certain the speaker actually is.",
      },
      {
        wrong: "Feminine job nouns are always formed by just adding -in to the masculine noun, with no other changes.",
        right: "Many follow that pattern, but several, including der Arzt → die Ärztin, also add an umlaut to the stem vowel, so each pair is worth learning individually rather than assuming a single mechanical rule.",
      },
      {
        wrong: "Zu is optional before an infinitive after vorhaben, the way it sometimes feels optional in casual English.",
        right: "Zu is required directly before the final infinitive once other words separate it from vorhaben — Ich habe vor, im Ausland zu arbeiten needs zu, and dropping it is a genuine grammar error, not just informal style.",
      },
    ],
  },

  "german/technology-and-media": {
    summary:
      "This topic covers technology and media: vocabulary for devices, apps and the internet, giving opinions on technology, comparatives for comparing devices or platforms, and talking about how you expect to use technology in the future.",
    keyFacts: [
      {
        heading: "Devices and apps",
        points: [
          "Das Handy (mobile phone), der Laptop, der Computer, das Tablet and die Kopfhörer (headphones, always plural) are core device vocabulary.",
          "Die App (die Apps), die sozialen Medien (social media) and das Internet are the standard vocabulary for the online world.",
          "Herunterladen (to download) is separable: Ich lade eine App herunter (I download an app).",
          "Der Bildschirm (screen), die Tastatur (keyboard) and der Akku (battery) are useful hardware nouns beyond the device names themselves.",
        ],
      },
      {
        heading: "Talking about internet and social media use",
        points: [
          "Ich benutze mein Handy, um Nachrichten zu schicken (I use my phone to send messages) — um...zu + infinitive expresses 'in order to'.",
          "Ich verbringe zu viel Zeit online (I spend too much time online) — verbringen (to spend time) is a common and useful verb here.",
          "Posten (to post), teilen (to share) and hochladen (to upload, separable) are the key social-media verbs.",
          "Süchtig nach etwas sein (to be addicted to something) — süchtig nach den sozialen Medien sein is a common and useful exam phrase for a balanced opinion.",
        ],
      },
      {
        heading: "Opinions and comparatives",
        points: [
          "Nützlich (useful), praktisch (practical) and zeitaufwendig (time-consuming) are common opinion adjectives for technology.",
          "Comparatives add -er, exactly as elsewhere in German: schneller (faster), größer (bigger), billiger (cheaper) — Dieses Handy ist schneller als mein altes Handy.",
          "Gut, viel and gern have irregular comparatives: besser (better), mehr (more), lieber (rather/preferably) — these don't simply add -er.",
          "Meiner Meinung nach (in my opinion) and Einerseits...andererseits... (on one hand...on the other hand...) structure a balanced opinion on technology.",
        ],
      },
      {
        heading: "Future technology use",
        points: [
          "In Zukunft werden wir wahrscheinlich mehr online einkaufen (In the future we will probably shop more online) uses werden + infinitive for a prediction.",
          "Ich glaube, dass Technologie noch wichtiger wird (I believe that technology will become even more important) — dass again sends the verb to the end.",
          "Künstliche Intelligenz (artificial intelligence) and die Technologie der Zukunft (the technology of the future) are useful phrases for extended writing on this theme.",
          "Vielleicht (maybe/perhaps) softens a prediction and is a useful hedge word when discussing something uncertain.",
        ],
      },
    ],
    flashcards: [
      { term: "das Handy (die Handys)", definition: "Mobile phone — neuter noun; note it's a German-specific usage, not standard English 'handy'." },
      { term: "die Kopfhörer (plural only)", definition: "Headphones — always used in the plural, like its English equivalent." },
      { term: "die sozialen Medien", definition: "Social media — plural phrase; sozial takes a plural adjective ending here." },
      { term: "herunterladen", definition: "To download — separable verb: Ich lade eine App herunter (I download an app)." },
      { term: "hochladen", definition: "To upload — separable verb, the counterpart of herunterladen." },
      { term: "verbringen", definition: "To spend (time) — irregular strong verb: Ich verbringe zu viel Zeit online." },
      { term: "süchtig nach + dative", definition: "Addicted to — süchtig nach den sozialen Medien sein (to be addicted to social media)." },
      { term: "um...zu + infinitive", definition: "In order to... — Ich benutze mein Handy, um Nachrichten zu schicken (I use my phone to send messages)." },
      { term: "schneller als", definition: "Faster than — a regular comparative formed with -er, paired with als for 'than'." },
      { term: "besser", definition: "Better — the irregular comparative of gut, not gutter." },
      { term: "zeitaufwendig", definition: "Time-consuming — a compound adjective from Zeit (time) and aufwenden (to expend)." },
      { term: "künstliche Intelligenz", definition: "Artificial intelligence — a fixed phrase increasingly common in higher-level exam answers on technology." },
    ],
    examTips: [
      {
        tip: "Split herunterladen and hochladen correctly in a main clause.",
        detail: "Ich lade eine App herunter is correct, with herunter pushed to the end; writing Ich herunterlade as one word breaks the separable-verb rule these two verbs both follow.",
      },
      {
        tip: "Learn besser, mehr and lieber as irregular comparatives, not built with -er.",
        detail: "Gut → besser, viel → mehr and gern → lieber don't follow the regular -er pattern, so treat them as vocabulary to memorise directly rather than trying to derive them from a rule.",
      },
      {
        tip: "Use um...zu for 'in order to', with zu directly before the final infinitive.",
        detail: "Ich benutze mein Handy, um Nachrichten zu schicken needs zu right before schicken — dropping zu, or dropping um at the start, both break this fixed two-part structure.",
      },
      {
        tip: "Push the verb to the end after dass when giving an opinion on technology's future.",
        detail: "Ich glaube, dass Technologie wichtiger wird sends wird to the very end of the dass clause — this is the same subordinate-clause rule as weil, reused here in a technology context.",
      },
      {
        tip: "Structure a balanced tech opinion with einerseits...andererseits.",
        detail: "Einerseits ist das Internet nützlich, andererseits verbringen viele Leute zu viel Zeit online shows a two-sided, exam-friendly opinion structure that examiners specifically reward.",
      },
      {
        tip: "Remember die Kopfhörer is always plural, even for a single pair.",
        detail: "There's no singular der Kopfhörer used to mean 'a pair of headphones' — treat it grammatically the way English treats 'headphones', always plural.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'Ich lade eine App herunter.'",
        accept: ["i am downloading an app", "i download an app"],
        answer: "I download an app — herunterladen splits, with herunter pushed to the end of the clause.",
      },
      {
        question: "Translate into German: 'I use my phone to send messages.'",
        accept: ["ich benutze mein handy, um nachrichten zu schicken", "ich benutze mein handy um nachrichten zu schicken"],
        answer: "Ich benutze mein Handy, um Nachrichten zu schicken — um...zu + infinitive expresses 'in order to', with zu directly before schicken.",
      },
      {
        question: "Complete with the correct form of verbringen: 'Ich ____ zu viel Zeit online.'",
        accept: ["verbringe"],
        answer: "Verbringe — the ich form of the irregular verb verbringen (to spend time).",
      },
      {
        question: "Give the comparative form of gut.",
        accept: ["besser"],
        answer: "Besser — the irregular comparative of gut (good), not the regular gutter form you'd expect from the -er pattern.",
      },
      {
        question: "Rewrite with correct word order: 'Ich glaube, dass Technologie wird wichtiger.'",
        accept: ["ich glaube, dass technologie wichtiger wird", "ich glaube dass technologie wichtiger wird"],
        answer: "Ich glaube, dass Technologie wichtiger wird — dass sends the conjugated verb wird to the very end of its clause.",
      },
      {
        question: "Translate into German: 'This laptop is faster than my old computer.'",
        accept: ["dieser laptop ist schneller als mein alter computer"],
        answer: "Dieser Laptop ist schneller als mein alter Computer — schneller is the regular -er comparative, paired with als for 'than'.",
      },
      {
        question: "Which of these means 'social media'?",
        choices: ["die sozialen Medien", "das soziale Medium", "der soziale Medien", "die Medien Sozial"],
        accept: ["die sozialen Medien"],
        answer: "Die sozialen Medien is the correct plural phrase for social media, with sozial taking the plural adjective ending -en.",
      },
      {
        question: "Which verb correctly completes 'Ich ____ das Foto auf Instagram.' (to upload)",
        choices: ["lade...hoch", "lade...herunter", "poste", "teile"],
        accept: ["lade...hoch"],
        answer: "Lade...hoch is correct for 'upload' — hochladen splits with hoch at the end. Lade...herunter means 'download', the opposite action.",
      },
      {
        question: "What is the irregular comparative form of viel (much/a lot)?",
        choices: ["mehr", "vieler", "mehrer", "meister"],
        accept: ["mehr"],
        answer: "Mehr is the irregular comparative of viel, meaning 'more' — it doesn't take the regular -er ending the way most adjectives do.",
      },
      {
        question: "In 'Das ist sehr praktisch', what part of speech is 'praktisch'?",
        choices: ["An adjective", "A noun", "A verb", "An adverb"],
        accept: ["An adjective"],
        answer: "Praktisch ('practical') describes das, the thing being discussed, which is what an adjective does — ist is the verb, and sehr is the intensifying adverb.",
      },
      {
        question: "Which German phrase best expresses 'on one hand...on the other hand'?",
        choices: ["Einerseits...andererseits...", "Meiner Meinung nach...", "Ich glaube, dass...", "Vielleicht..."],
        accept: ["Einerseits...andererseits..."],
        answer: "Einerseits...andererseits... is the fixed phrase for presenting a balanced, two-sided opinion, useful for a stronger extended-writing answer on technology.",
      },
      {
        question: "Give one German verb meaning 'to share' (on social media).",
        accept: ["teilen"],
        answer: "Teilen means 'to share' — a regular weak verb commonly used in a social media context, e.g. Ich teile das Foto mit meinen Freunden.",
      },
      {
        question: "Explain in English how um...zu is used to express 'in order to', and give one example sentence.",
        answer:
          "Mark this one yourself against this: um introduces the purpose clause, and zu goes directly before the final infinitive at the end of that clause — everything in between describes the purpose. For example, Ich benutze mein Handy, um Nachrichten zu schicken means 'I use my phone (in order) to send messages'.",
      },
      {
        question: "Write a short paragraph in German giving a balanced opinion on social media: one advantage, one disadvantage, and a prediction about future technology use. Use einerseits/andererseits and at least one dass clause. Use at least four sentences.",
        answer:
          "There's no single right answer here — mark this one yourself. A strong answer uses einerseits...andererseits... to present both sides, includes at least one correctly formed dass clause with the verb pushed to the end, and makes a future prediction using werden + infinitive or the present tense with a future time marker.",
      },
      {
        question: "Translate into English: 'Viele Leute sind süchtig nach ihrem Handy.'",
        accept: ["many people are addicted to their phone", "many people are addicted to their mobile phone"],
        answer: "Many people are addicted to their phone — süchtig nach + dative is the fixed phrase for 'addicted to'.",
      },
      {
        question: "Complete with the correct form of benutzen: 'Wir ____ das Internet jeden Tag.'",
        accept: ["benutzen"],
        answer: "Benutzen — the wir form of the regular verb benutzen (to use), identical here to the infinitive.",
      },
    ],
    misconceptions: [
      {
        wrong: "Herunterladen and hochladen are used as single unbroken words in a normal present-tense sentence.",
        right: "Both are separable verbs, so they split in a main clause: Ich lade eine App herunter and Ich lade das Foto hoch, with the prefix pushed to the end.",
      },
      {
        wrong: "Every German comparative is formed by simply adding -er to the adjective.",
        right: "Most are, but gut, viel and gern have irregular comparatives — besser, mehr and lieber — that must be learned separately rather than derived by rule.",
      },
      {
        wrong: "Um on its own is enough to express 'in order to', with zu being optional.",
        right: "Zu is a required part of the structure, placed directly before the final infinitive — um Nachrichten zu schicken needs both um and zu; dropping either breaks the construction.",
      },
      {
        wrong: "Die Kopfhörer can be used in the singular, der Kopfhörer, to mean one pair of headphones.",
        right: "Kopfhörer is used in the plural to describe a pair of headphones, mirroring English usage — there's no natural singular form used this way.",
      },
      {
        wrong: "Dass clauses about technology keep the same word order as a normal main clause.",
        right: "Like weil, dass is a subordinating conjunction that sends the conjugated verb to the very end of its clause: Ich glaube, dass Technologie wichtiger wird, not ...dass Technologie wird wichtiger.",
      },
    ],
  },

  "german/grammar-toolkit-2": {
    summary:
      "Grammar toolkit: past & future. This second dedicated grammar topic covers the perfect tense in full — including the haben/sein auxiliary choice and weak versus strong past participle patterns — the simple past (Präteritum) of sein and haben specifically, which are used even in speech unlike most other verbs, the future with werden + infinitive, and subordinate-clause word order, which becomes essential once sentences get longer.",
    keyFacts: [
      {
        heading: "The perfect tense in full",
        points: [
          "The perfect tense is formed with a conjugated auxiliary (haben or sein) in second position, plus a past participle at the very end of the clause.",
          "Weak (regular) verbs form the participle as ge- + stem + -t: machen → gemacht, spielen → gespielt, kaufen → gekauft.",
          "Strong (irregular) verbs form the participle as ge- + often-changed stem + -en, and each one must be learned individually: fahren → gefahren, essen → gegessen, trinken → getrunken, sehen → gesehen.",
          "Sein is used instead of haben specifically for verbs of movement or change of state: gehen → ist gegangen, kommen → ist gekommen, werden → ist geworden.",
        ],
      },
      {
        heading: "The simple past (Präteritum) of sein and haben",
        points: [
          "Unlike almost every other German verb, sein and haben are commonly used in their SIMPLE PAST form even in everyday speech, not just in writing.",
          "Sein: ich war, du warst, er/sie/es war, wir waren, ihr wart, sie/Sie waren.",
          "Haben: ich hatte, du hattest, er/sie/es hatte, wir hatten, ihr hattet, sie/Sie hatten.",
          "Ich war letztes Jahr in Deutschland (I was in Germany last year) is more natural spoken German than Ich bin letztes Jahr in Deutschland gewesen, even though both are grammatically correct.",
        ],
      },
      {
        heading: "The future: werden + infinitive",
        points: [
          "Werden is conjugated and takes second position; the main verb stays as an untouched infinitive at the very end of the clause.",
          "Ich werde nächstes Jahr nach Frankreich fahren (I will travel to France next year) — werde second, fahren at the end.",
          "Werden itself conjugates irregularly: ich werde, du wirst, er/sie/es wird, wir werden, ihr werdet, sie/Sie werden.",
          "The present tense with a future time marker (Nächstes Jahr fahre ich...) is an equally valid and very common alternative to the werden construction.",
        ],
      },
      {
        heading: "Subordinate-clause word order",
        points: [
          "After weil, dass, wenn, ob and other subordinating conjunctions, the conjugated verb is sent to the very end of its own clause.",
          "Ich bleibe zu Hause, wenn es regnet (I stay at home if/when it rains) — regnet moves to the end, after es.",
          "In the perfect tense inside a subordinate clause, BOTH the auxiliary and the participle move to the end, with the auxiliary coming last: Ich weiß, dass er nach Berlin gefahren ist (I know that he travelled to Berlin) — gefahren ist, participle then auxiliary.",
          "This word order becomes essential once students start forming longer, more complex sentences with reasons, conditions and reported information, which is exactly what higher-scoring GCSE writing does.",
        ],
      },
    ],
    flashcards: [
      { term: "das Perfekt", definition: "The perfect tense — formed with a conjugated auxiliary (haben or sein) plus a past participle at the end of the clause." },
      { term: "das Präteritum", definition: "The simple past tense — used commonly for sein and haben even in speech, unlike most other verbs which prefer the perfect tense in conversation." },
      { term: "war/warst/war (sein)", definition: "Was/were — the ich/du/er forms of sein in the simple past." },
      { term: "hatte/hattest/hatte (haben)", definition: "Had — the ich/du/er forms of haben in the simple past." },
      { term: "gegangen", definition: "Gone — the strong past participle of gehen, taking sein as its auxiliary because it describes movement." },
      { term: "geworden", definition: "Become — the strong past participle of werden, also taking sein." },
      { term: "das Futur", definition: "The future tense — formed with a conjugated form of werden plus an infinitive at the end of the clause." },
      { term: "wenn", definition: "If/when(ever) — a subordinating conjunction that sends the conjugated verb to the end of its clause." },
      { term: "ob", definition: "Whether — a subordinating conjunction; Ich weiß nicht, ob er kommt (I don't know whether he's coming)." },
      { term: "die Nebensatzstellung", definition: "Subordinate-clause word order — the rule that sends the verb (or auxiliary + participle) to the end of a clause introduced by weil, dass, wenn, or ob." },
    ],
    examTips: [
      {
        tip: "Use war and hatte instead of the perfect tense of sein and haben in everyday sentences.",
        detail: "Ich war letztes Jahr in Deutschland is far more natural spoken and written German than Ich bin...gewesen — native speakers default to the simple past for these two verbs specifically, even though other verbs prefer the perfect tense.",
      },
      {
        tip: "In a subordinate clause with the perfect tense, remember the auxiliary goes LAST, after the participle.",
        detail: "Ich weiß, dass er nach Berlin gefahren ist puts gefahren before ist — this 'participle then auxiliary' order inside a subordinate clause is one of the more advanced points that separates strong GCSE answers from average ones.",
      },
      {
        tip: "Check the auxiliary (haben or sein) before worrying about the participle spelling.",
        detail: "Movement and change-of-state verbs (gehen, kommen, fahren, werden) take sein; nearly everything else takes haben — settle this first, since getting it wrong loses the mark regardless of how well the participle itself is formed.",
      },
      {
        tip: "Treat weil, dass, wenn and ob as one family that all trigger the same word-order change.",
        detail: "Learning them together, rather than one at a time, makes it obvious that this is a single grammar rule (send the verb to the end) applied across several different conjunctions, not four separate rules to remember.",
      },
      {
        tip: "Don't force werden into every future sentence — the present tense with a time marker is equally valid.",
        detail: "Nächstes Jahr fahre ich nach Frankreich and Ich werde nächstes Jahr nach Frankreich fahren both correctly express the future; using a mix of both across a piece of writing shows range rather than repetition.",
      },
      {
        tip: "Practise building one long sentence with a subordinate clause rather than only short simple sentences.",
        detail: "Ich weiß, dass er letztes Jahr nach Berlin gefahren ist combines several of this topic's rules at once (dass, perfect tense, correct auxiliary order) and is exactly the kind of sentence that earns extra marks for complexity in writing and speaking exams.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'Ich war letztes Jahr in Deutschland.'",
        accept: ["i was in germany last year"],
        answer: "I was in Germany last year — war is the simple past (Präteritum) of sein, used naturally here rather than the perfect tense.",
      },
      {
        question: "Translate into German using the simple past: 'I had a dog.'",
        accept: ["ich hatte einen hund"],
        answer: "Ich hatte einen Hund — hatte is the simple past of haben, the natural choice for this verb even in everyday speech.",
      },
      {
        question: "Complete with the correct form of sein in the simple past: 'Wir ____ sehr müde.'",
        accept: ["waren"],
        answer: "Waren — the wir form of sein in the simple past: Wir waren sehr müde (We were very tired).",
      },
      {
        question: "Rewrite in the correct subordinate-clause word order: 'Ich weiß, dass er ist nach Berlin gefahren.'",
        accept: ["ich weiß, dass er nach berlin gefahren ist", "ich weiss, dass er nach berlin gefahren ist", "ich weiß dass er nach berlin gefahren ist"],
        answer: "Ich weiß, dass er nach Berlin gefahren ist — in a subordinate clause, the participle comes before the auxiliary, so gefahren ist, not ist gefahren.",
      },
      {
        question: "Translate into German: 'I will travel to France next year.' (using werden + infinitive)",
        accept: ["ich werde nächstes jahr nach frankreich fahren", "ich werde nachstes jahr nach frankreich fahren"],
        answer: "Ich werde nächstes Jahr nach Frankreich fahren — werde is conjugated in second position, and fahren remains an untouched infinitive at the end.",
      },
      {
        question: "Complete with the correct form of werden: 'Sie ____ Ärztin.' (she will become a doctor)",
        accept: ["wird"],
        answer: "Wird — the er/sie/es form of werden, used here as the conjugated verb of the future tense: Sie wird Ärztin (werden).",
      },
      {
        question: "Which auxiliary does gehen take in the perfect tense?",
        choices: ["sein", "haben", "werden", "either, freely"],
        accept: ["sein"],
        answer: "Gehen takes sein because it's a verb of movement — Ich bin gegangen, not Ich habe gegangen.",
      },
      {
        question: "Which of these correctly completes 'Ich bleibe zu Hause, ____ es regnet.' (if/when)",
        choices: ["wenn", "als", "ob", "dass"],
        accept: ["wenn"],
        answer: "Wenn (if/when) fits this conditional meaning best. Als also means 'when' but only for a single past event, ob means 'whether', and dass means 'that'.",
      },
      {
        question: "Which sentence has the correct subordinate-clause word order for the perfect tense?",
        choices: ["Ich weiß, dass er gefahren ist.", "Ich weiß, dass er ist gefahren.", "Ich weiß, dass ist er gefahren.", "Ich weiß, er gefahren ist dass."],
        accept: ["Ich weiß, dass er gefahren ist."],
        answer: "Ich weiß, dass er gefahren ist is correct — inside a dass clause, both the participle and the auxiliary move to the end, with the auxiliary last.",
      },
      {
        question: "Give the past participle of trinken.",
        accept: ["getrunken"],
        answer: "Getrunken — a strong participle formed with ge- + changed stem + -en, one of the irregular forms that must be learned individually.",
      },
      {
        question: "In 'Er war müde, weil er viel gearbeitet hatte', what tense is 'gearbeitet hatte'?",
        choices: ["Pluperfect (past perfect)", "Simple present", "Simple future", "Simple past"],
        accept: ["Pluperfect (past perfect)"],
        answer: "Gearbeitet hatte is the pluperfect (past perfect), formed with the simple past of haben plus a past participle, describing an action completed before another past action.",
      },
      {
        question: "Give one subordinating conjunction, other than weil, dass or wenn, that sends the verb to the end of its clause.",
        accept: ["ob", "obwohl", "während", "bevor", "nachdem"],
        answer: "Several work here: ob (whether), obwohl (although), während (while), bevor (before) and nachdem (after) are all subordinating conjunctions that trigger this word order.",
      },
      {
        question: "Explain in English why sein and haben are usually used in the simple past even in speech, while most other German verbs prefer the perfect tense in conversation.",
        answer:
          "Mark this one yourself against this: this is a genuine quirk of the language rather than a strict grammar rule — sein (war) and haben (hatte) are so frequent and their simple past forms so short and easy to say that native speakers default to them even casually, while other verbs, especially strong verbs with less familiar simple-past forms, are usually only put in the simple past in formal writing, using the perfect tense in speech instead.",
      },
      {
        question: "Write a short paragraph in German using at least one perfect-tense sentence, one simple-past sentence with war or hatte, and one subordinate clause introduced by dass or weil with correct word order. Use at least four sentences.",
        answer:
          "There's no single right answer here — mark this one yourself. A strong answer clearly labels or otherwise makes obvious each of the three required structures, gets the haben/sein auxiliary choice right in the perfect-tense sentence, and correctly pushes the verb (or auxiliary + participle) to the end of the subordinate clause.",
      },
      {
        question: "Translate into English: 'Ich weiß nicht, ob er heute kommt.'",
        accept: ["i don't know whether he's coming today", "i do not know if he is coming today"],
        answer: "I don't know whether he's coming today — ob sends kommt to the end of its clause, exactly like weil and dass do.",
      },
      {
        question: "Complete with the correct form of haben in the simple past: 'Du ____ recht.' (you were right)",
        accept: ["hattest"],
        answer: "Hattest — the du form of haben in the simple past: Du hattest recht (You were right/You had it right).",
      },
      {
        question: "Which sentence correctly uses werden + infinitive to form the future tense?",
        choices: ["Ich werde nach Frankreich fahren.", "Ich werde nach Frankreich gefahren.", "Ich fahre werde nach Frankreich.", "Ich bin nach Frankreich werden."],
        accept: ["Ich werde nach Frankreich fahren."],
        answer: "Ich werde nach Frankreich fahren is correct — werde is conjugated in second position, and fahren stays as an untouched infinitive at the end. The other options wrongly use a participle or the wrong word order.",
      },
    ],
    misconceptions: [
      {
        wrong: "Sein and haben are always put into the perfect tense in speech, the same as other verbs.",
        right: "They're a genuine exception — native speakers commonly use their simple past forms (war, hatte) even in casual conversation, unlike most other German verbs, which favour the perfect tense in speech.",
      },
      {
        wrong: "Inside a subordinate clause, the auxiliary verb of the perfect tense stays in second position, just like in a main clause.",
        right: "Both the auxiliary and the participle move to the end of a subordinate clause, with the participle coming before the auxiliary: dass er gefahren ist, not dass er ist gefahren.",
      },
      {
        wrong: "Weil, dass, wenn and ob each follow their own separate word-order rule.",
        right: "They're all subordinating conjunctions governed by the same single rule — send the conjugated verb to the end of the clause — so learning one means understanding all of them.",
      },
      {
        wrong: "The future tense with werden is the only correct way to talk about future plans in German.",
        right: "The present tense with a future time marker (Nächstes Jahr fahre ich...) is equally correct and extremely common; werden + infinitive is one valid option, not the only one.",
      },
      {
        wrong: "All past participles end in -t, following the pattern of gemacht or gespielt.",
        right: "That -t ending only applies to weak (regular) verbs. Strong (irregular) verbs form participles ending in -en, often with a changed stem vowel, and each must be learned individually: gefahren, gegessen, getrunken.",
      },
    ],
  },

  "german/german-exam-practice": {
    summary:
      "Exam practice. This final topic is about exam technique rather than new vocabulary: how to read for gist versus detail, how to structure an extended writing answer, common exam command words, a grammar recap covering dative case basics and common dative prepositions, and the connectives that turn short, simple sentences into higher-scoring extended writing.",
    keyFacts: [
      {
        heading: "Reading and listening exam technique",
        points: [
          "Read the question and any sub-headings BEFORE the German text, so you know what information you're scanning for.",
          "Reading for gist means getting the overall topic and tone first; reading for detail means going back to find specific facts, numbers or opinions once you know the general shape of the text.",
          "In listening exams, use the first playthrough for gist and the second and third for filling in detail — don't try to write down every word on the first listen.",
          "Watch for negatives (nicht, kein, nie) and time markers (früher, jetzt, in Zukunft) — they completely change the meaning of a sentence and are common places marks are lost.",
        ],
      },
      {
        heading: "Structuring an extended writing answer",
        points: [
          "A strong paragraph covers present, past AND future where the question allows it — three tenses shown clearly earns more credit than one tense repeated at length.",
          "Always include at least one opinion with a reason (Ich mag..., weil...) and one complex sentence using a connective or subordinate clause.",
          "Plan a rough structure before writing: introduction, 2–3 developed points each with an example, and a concluding opinion or prediction.",
          "Check verb-second word order and noun capitalisation as a final read-through step — these are easy, fast marks to secure or lose.",
        ],
      },
      {
        heading: "Common exam command words",
        points: [
          "Beschreib(e) (describe) asks for factual detail — what something is like, not your opinion of it.",
          "Vergleiche (compare) asks you to explicitly contrast two things, ideally using comparatives (größer als, besser als) and connectives like aber or während.",
          "Gib deine Meinung (give your opinion) specifically requires a personal view with a reason — a purely factual answer to this command word loses marks.",
          "Erkläre (explain) asks for reasons or causes, usually best answered with a weil or dass clause.",
        ],
      },
      {
        heading: "Grammar recap: the dative case",
        points: [
          "The dative case marks the indirect object and follows certain prepositions; its articles are dem (masculine/neuter), der (feminine) and den + -n on the noun (plural).",
          "Common dative prepositions: mit (with), nach (after/to), bei (at/near), von (from/of), zu (to), aus (out of) — these ALWAYS take the dative, never the accusative.",
          "Ich fahre mit dem Bus (I travel by bus) and Ich wohne bei meiner Tante (I live at my aunt's) both show a dative article after one of these fixed prepositions.",
          "In the dative plural, the noun itself adds -n if it doesn't already end in one: mit den Freunden (with the friends), from der Freund/die Freunde.",
        ],
      },
      {
        heading: "Connectives for extended writing",
        points: [
          "Trotzdem (nevertheless/despite that) and obwohl (although) both introduce a contrast, but obwohl sends the verb to the end of its clause while trotzdem does not.",
          "Außerdem (furthermore/in addition) adds a second point smoothly and pushes the verb into second position, straight after it.",
          "Deshalb (therefore/that's why) links a reason to a consequence and, like außerdem, also triggers verb-second word order right after it.",
          "Using two or three of these connectives across a paragraph, rather than repeating und and aber, is one of the fastest ways to lift the level of a piece of extended writing.",
        ],
      },
    ],
    flashcards: [
      { term: "beschreib(e)", definition: "Describe — an exam command word asking for factual detail rather than personal opinion." },
      { term: "vergleiche", definition: "Compare — an exam command word asking for an explicit contrast between two things, ideally using comparatives." },
      { term: "gib deine Meinung", definition: "Give your opinion — an exam command word requiring a personal view with a reason, not just facts." },
      { term: "erkläre", definition: "Explain — an exam command word asking for reasons or causes, often best answered with weil or dass." },
      { term: "mit (+ dative)", definition: "With — one of the fixed prepositions that always takes the dative case." },
      { term: "bei (+ dative)", definition: "At/near (someone's place) — always dative; bei meiner Tante (at my aunt's)." },
      { term: "dem/der/den (dative articles)", definition: "The dative forms of der/die/das: dem (masc./neut.), der (fem.), den (plural, with -n added to the noun)." },
      { term: "trotzdem", definition: "Nevertheless/despite that — introduces a contrast; does NOT send the verb to the end." },
      { term: "obwohl", definition: "Although — introduces a contrast and DOES send the verb to the end of its clause, unlike trotzdem." },
      { term: "außerdem", definition: "Furthermore/in addition — adds a point and triggers verb-second word order right after it." },
      { term: "deshalb", definition: "Therefore/that's why — links a reason to its consequence, also triggering verb-second word order." },
    ],
    examTips: [
      {
        tip: "Match your answer's tense range to what the question actually allows.",
        detail: "If a question asks about a typical day AND last year AND next year, make sure all three appear — present, perfect/simple past, and future/werden — since examiners specifically look for a range of tenses in extended writing.",
      },
      {
        tip: "Never answer 'gib deine Meinung' with pure facts and no opinion word.",
        detail: "A sentence full of correct facts but no Ich finde, Ich mag or Meiner Meinung nach doesn't answer the command word gib deine Meinung and will lose marks, however accurate the German is.",
      },
      {
        tip: "Learn the six fixed dative prepositions as one memorised set: mit, nach, bei, von, zu, aus.",
        detail: "These always take the dative with no exceptions, unlike the two-way prepositions (in, an, auf) covered earlier in the course, which switch case depending on movement versus position.",
      },
      {
        tip: "Distinguish obwohl from trotzdem by checking where the verb ends up.",
        detail: "Obwohl es regnet, gehe ich raus sends regnet to the end of its clause; Es regnet, trotzdem gehe ich raus keeps regnet in normal position and instead triggers verb-second word order (gehe second) right after trotzdem.",
      },
      {
        tip: "Do a final proofread pass specifically for capital letters on nouns and verb-second word order.",
        detail: "These two checks are quick to do and catch a large share of avoidable slips — read back through looking only for these two things after you've finished writing content.",
      },
      {
        tip: "Use the second and third listening in an exam to fill in detail you missed the first time.",
        detail: "Don't try to transcribe everything on the first play — get the gist first, then use repeat listens specifically to confirm names, numbers and opinions you weren't sure of.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'Ich fahre mit dem Bus zur Schule.'",
        accept: ["i travel to school by bus", "i go to school by bus"],
        answer: "I travel to school by bus — mit always takes the dative, so der becomes dem for the masculine noun Bus.",
      },
      {
        question: "Translate into German: 'I live at my grandmother's.'",
        accept: ["ich wohne bei meiner großmutter", "ich wohne bei meiner grossmutter"],
        answer: "Ich wohne bei meiner Großmutter — bei always takes the dative, so meine becomes meiner for the feminine noun Großmutter.",
      },
      {
        question: "Complete with the correct dative article: 'Er spricht mit ___ Lehrer.' (der — masculine)",
        accept: ["dem"],
        answer: "Dem — mit takes the dative, and der (masculine nominative) becomes dem in the dative.",
      },
      {
        question: "Rewrite with correct word order: 'Obwohl es regnet ist, gehe ich raus.'",
        accept: ["obwohl es regnet, gehe ich raus"],
        answer: "Obwohl es regnet, gehe ich raus — obwohl sends the conjugated verb regnet to the end of its own clause; there's no auxiliary needed here since regnet is already the main verb.",
      },
      {
        question: "Complete with the correct form of sein: 'Es ___ trotzdem sehr interessant.' (it was, nevertheless, very interesting)",
        accept: ["war"],
        answer: "War — the simple past of sein, natural here in speech: Es war trotzdem sehr interessant, with trotzdem NOT sending war to the end since trotzdem doesn't trigger that word order.",
      },
      {
        question: "Which command word specifically requires a personal opinion with a reason?",
        choices: ["Gib deine Meinung", "Beschreib", "Vergleiche", "Erkläre"],
        accept: ["Gib deine Meinung"],
        answer: "Gib deine Meinung (give your opinion) specifically asks for a personal view with a reason. Beschreib asks for description, Vergleiche for comparison, and Erkläre for explanation of causes.",
      },
      {
        question: "Which of these connectives does NOT send the verb to the end of its clause?",
        choices: ["trotzdem", "obwohl", "weil", "dass"],
        accept: ["trotzdem"],
        answer: "Trotzdem triggers only verb-second word order, unlike obwohl, weil and dass, which are all subordinating conjunctions that push the verb to the very end of their clause.",
      },
      {
        question: "Which preposition below is NOT one of the fixed dative prepositions?",
        choices: ["für", "mit", "bei", "von"],
        accept: ["für"],
        answer: "Für takes the accusative case, not the dative — it belongs with durch, ohne, gegen and um instead. Mit, bei and von are all fixed dative prepositions.",
      },
      {
        question: "In 'Deshalb bleibe ich zu Hause', what part of speech is 'deshalb'?",
        choices: ["A connective/adverb", "A noun", "A preposition", "A modal verb"],
        accept: ["A connective/adverb"],
        answer: "Deshalb ('therefore') is a connective adverb linking a reason to a consequence; it triggers verb-second word order, putting bleibe directly after it.",
      },
      {
        question: "Which dative article correctly completes 'mit ___ Freunden' (with the friends, plural)?",
        choices: ["den", "dem", "der", "die"],
        accept: ["den"],
        answer: "Den is the dative plural article, and the plural noun itself also adds -n if it doesn't already end in one: den Freunden.",
      },
      {
        question: "Which strategy is best for a first listening in a listening exam?",
        choices: ["Listen for the overall gist rather than every word", "Write down every single word you hear", "Skip it and wait for the second listen", "Only listen for numbers"],
        accept: ["Listen for the overall gist rather than every word"],
        answer: "Getting the overall gist on the first listen, then using later listens to fill in detail, is the most effective strategy — trying to transcribe everything at once usually means missing the overall meaning.",
      },
      {
        question: "Give one German connective, other than trotzdem or obwohl, that introduces a contrast or an additional point.",
        accept: ["außerdem", "deshalb", "aber", "während"],
        answer: "Außerdem (furthermore), deshalb (therefore), aber (but) or während (while/whereas) are all useful connectives for linking ideas in extended writing.",
      },
      {
        question: "Explain in English the grammatical difference between obwohl and trotzdem, even though both can be translated as expressing contrast, using one example sentence for each.",
        answer:
          "Mark this one yourself against this: obwohl is a subordinating conjunction, so it sends the conjugated verb to the end of its clause, e.g. Obwohl es regnet, gehe ich raus. Trotzdem is a connective adverb that only triggers normal verb-second word order when it starts a clause, e.g. Es regnet. Trotzdem gehe ich raus — the verb gehe comes straight after trotzdem, not at the end.",
      },
      {
        question: "Write an extended paragraph in German (at least five sentences) about your life at school, mixing present, past and future tense, including one opinion with a reason, and using at least one connective from this topic (trotzdem, obwohl, außerdem or deshalb).",
        answer:
          "There's no single right answer here — mark this one yourself. A strong answer clearly shows three different time frames, includes a genuine opinion with weil or a similar reason, uses at least one of the listed connectives with correct word order, and keeps noun capitalisation and verb-second order consistent throughout.",
      },
      {
        question: "Translate into English: 'Ich bin müde, außerdem habe ich Kopfschmerzen.'",
        accept: ["i am tired, and furthermore i have a headache", "i'm tired, also i have a headache"],
        answer: "I'm tired, and furthermore I have a headache — außerdem triggers verb-second word order, putting habe directly after it.",
      },
      {
        question: "Give one piece of advice for structuring a strong extended writing answer.",
        accept: ["use a range of tenses", "include an opinion with a reason", "use connectives", "plan before writing", "include present past and future"],
        answer: "Several valid answers exist here, for example using a range of tenses, including an opinion with a clear reason, using connectives to link ideas, or planning a rough structure before writing.",
      },
    ],
    misconceptions: [
      {
        wrong: "Obwohl and trotzdem are grammatically identical since they can both be translated as expressing contrast.",
        right: "They trigger different word order: obwohl is a subordinating conjunction that sends the verb to the end of its clause, while trotzdem only triggers ordinary verb-second word order when it opens a sentence.",
      },
      {
        wrong: "Beschreib and Gib deine Meinung are asking for the same kind of answer, since both invite you to talk about a topic.",
        right: "Beschreib asks for factual description with no personal opinion required, while Gib deine Meinung specifically requires a personal view with a reason — answering one command word as if it were the other loses marks.",
      },
      {
        wrong: "Mit, bei and the other fixed dative prepositions sometimes take the accusative depending on context, similar to two-way prepositions.",
        right: "Unlike in/an/auf, the fixed dative prepositions (mit, nach, bei, von, zu, aus) always take the dative with no exceptions — they never switch to the accusative.",
      },
      {
        wrong: "The best exam listening strategy is to write down every word you hear on the first play.",
        right: "It's more effective to listen for overall gist first, then use subsequent listens specifically to fill in details like numbers, names and opinions that were missed the first time.",
      },
      {
        wrong: "A strong extended writing answer just needs to be long, regardless of which tenses or connectives it uses.",
        right: "Length alone doesn't earn marks — examiners specifically reward a genuine range of tenses (present, past, future), a clearly stated opinion with a reason, and the accurate use of connectives and subordinate clauses.",
      },
    ],
  },
};
