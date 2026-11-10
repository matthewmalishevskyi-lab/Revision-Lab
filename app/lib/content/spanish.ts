import type { TopicContent } from "./index";

// SPANISH
//
// HOW THIS SUBJECT IS WRITTEN, AND WHY IT DIFFERS FROM THE OTHERS
//
// Every other subject on this site states facts. This one teaches a skill, so
// the shape of "content" is different in three ways worth being explicit about:
//
//   1. FLASHCARDS ARE VOCABULARY, ALWAYS SPANISH-FIRST. term is the Spanish
//      word or phrase, definition is the English meaning plus, where it earns
//      its place, a note on gender, an irregular form, or a false-friend
//      warning. That mirrors how a bilingual dictionary and every real GCSE
//      vocabulary list works, and it is the direction a student needs when
//      translating FROM Spanish in a reading exam, which is most of the exam.
//
//   2. PRACTICE QUESTIONS ARE DELIBERATELY MIXED, not just vocabulary recall.
//      Every topic's practice list blends: straight translation both
//      directions, GAP-FILL verb conjugation (complete the sentence with the
//      correct form of a given verb), PART-OF-SPEECH identification (is this
//      word a noun, verb, adjective...?), and multiple choice. That mix is
//      what actually gets examined — GCSE Spanish tests grammar IN CONTEXT, not
//      as a list of rules — and it is what Matthew specifically asked for.
//
//   3. NO HIGHER-TIER FLAG. AQA/Edexcel Spanish is tiered in principle, but the
//      Foundation/Higher split for MFL is about which WRITING AND SPEAKING
//      TASKS a student attempts, not about a block of vocabulary or grammar
//      being off-limits the way circle theorems are in Maths. Flagging
//      individual facts higherOnly would misrepresent how the tiering actually
//      works, so this subject does not use the flag at all — every fact here is
//      fair game at both tiers.
//
// Exam-board note: this follows the AQA GCSE Spanish specification's three
// themes (Identity & culture; Local area, holiday & travel; School, and future
// aspirations, study & work), spread across Years 9-11 the way the site already
// spreads RE and Business — see the comment above Spanish in subjects.ts for
// exactly how. Edexcel and OCR cover the same ground in a different order; swap
// nothing here without checking your own school's scheme of work first.
//
// A note on accents: á é í ó ú ñ ü are typed directly rather than escaped,
// because this file is UTF-8 and TypeScript strings handle them natively. Where
// an accept list allows an unaccented fallback (e.g. "adios" alongside
// "adiós"), that is deliberate — real students often can't type accents easily,
// and marking that answer wrong would be marking correct Spanish wrong.

export const SPANISH: Record<string, TopicContent> = {
  "spanish/greetings-and-introductions": {
    summary:
      "Every GCSE Spanish exam and conversation starts the same way: greeting someone, giving your name, saying how old you are and where you're from. This topic covers formal and informal greetings, the set phrases for a first conversation, numbers 0–31, and the present tense of the two verbs almost every self-introduction depends on — ser (to be) and tener (to have).",
    keyFacts: [
      {
        heading: "Formal vs informal address",
        points: [
          "Use tú for someone your own age, a friend, or a family member.",
          "Use usted for a teacher, an adult stranger, or anyone you should be polite to — it takes the same verb ending as él/ella (he/she).",
          "¿Cómo te llamas? is informal 'what's your name?'; ¿Cómo se llama usted? is the formal version — the whole verb ending changes, not just the pronoun.",
          "Getting tú/usted wrong doesn't break the grammar of a sentence, but it does sound rude, and examiners notice register in speaking and writing tasks.",
        ],
      },
      {
        heading: "Key greetings and set phrases",
        points: [
          "Hola (hello) works at any time of day; Buenos días (good morning), Buenas tardes (good afternoon) and Buenas noches (good evening/night) are time-specific.",
          "¿Qué tal? and ¿Cómo estás? both mean 'how are you?' — ¿Qué tal? is the more casual of the two.",
          "Mucho gusto and Encantado/Encantada both mean 'pleased to meet you' — Encantado/Encantada agrees with the speaker's own gender.",
          "Adiós (goodbye), Hasta luego (see you later) and Hasta mañana (see you tomorrow) are the standard ways to end a conversation.",
        ],
      },
      {
        heading: "Ser and tener in the present tense",
        points: [
          "Ser (to be) is irregular: soy, eres, es, somos, sois, son.",
          "Tener (to have) is irregular: tengo, tienes, tiene, tenemos, tenéis, tienen.",
          "Age uses tener, never ser: Tengo quince años (I am 15) is literally 'I have 15 years'.",
          "Ser is used for lasting facts about identity — name, nationality, job — as in Soy inglés or Soy estudiante.",
        ],
      },
      {
        heading: "Numbers 0–31",
        points: [
          "0–10: cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez.",
          "11–15 are irregular and must be learned individually: once, doce, trece, catorce, quince.",
          "16–19 are built from diez but fused into one word: dieciséis, diecisiete, dieciocho, diecinueve.",
          "20 is veinte; 21–29 fuse the same way (veintiuno, veintidós... veintinueve); 30 is treinta, and from treinta y uno onwards the words separate again.",
        ],
      },
    ],
    flashcards: [
      { term: "Hola", definition: "Hello — the single most common greeting, used at any time of day." },
      { term: "¿Cómo te llamas?", definition: "What's your name? (informal) — literally 'what do you call yourself?'" },
      { term: "Me llamo...", definition: "My name is... — literally 'I call myself...', from the reflexive verb llamarse." },
      { term: "¿De dónde eres?", definition: "Where are you from? (informal), using the irregular verb ser." },
      { term: "Soy de Inglaterra", definition: "I am from England — soy is the 'I' form of the irregular verb ser." },
      { term: "¿Cuántos años tienes?", definition: "How old are you? — literally 'how many years do you have?', using tener rather than ser." },
      { term: "Tengo catorce años", definition: "I am fourteen — literally 'I have fourteen years'; age always uses tener, never ser." },
      { term: "Encantado / Encantada", definition: "Pleased to meet you — Encantado if the speaker is male, Encantada if female." },
      { term: "Buenas tardes", definition: "Good afternoon — used roughly from midday until it gets dark, when it switches to buenas noches." },
      { term: "Hasta luego", definition: "See you later — a common informal way to end a conversation without saying a final goodbye." },
      { term: "usted", definition: "The formal 'you', used for a teacher, an adult stranger, or anyone you should show respect to; takes the same verb form as él/ella." },
      { term: "veintiuno", definition: "Twenty-one — written as one fused word, unlike treinta y uno (thirty-one), which splits into three separate words." },
    ],
    examTips: [
      {
        tip: "Match Encantado/Encantada to your own gender, not the other person's.",
        detail: "The -o/-a ending agrees with who is speaking. A boy always says Encantado, even when greeting a girl; a girl always says Encantada, even when greeting a boy.",
      },
      {
        tip: "Never translate 'I am 14 years old' with soy.",
        detail: "Age in Spanish always uses tener, so it's Tengo catorce años, not Soy catorce años. This is one of the most common English-speaker mistakes and examiners specifically test for it.",
      },
      {
        tip: "Learn the accent on cómo, dónde and cuántos.",
        detail: "Question words carry a written accent because it changes the meaning — como without an accent means 'like/as' or 'I eat', not 'how'. Missing the accent in a written answer can cost a mark.",
      },
      {
        tip: "Use usted, not tú, for anyone you'd call 'sir' or 'madam' in English.",
        detail: "If you're unsure which to use in a speaking task, usted is the safer default with an adult you don't know — it can read as slightly too formal, but tú with the wrong person reads as rude.",
      },
      {
        tip: "Write numbers 16–29 as single fused words, not two.",
        detail: "Dieciséis and veintidós are each one word with no space. Writing 'diez y seis' as two separate words is an outdated style and will read as a spelling mistake in a modern GCSE answer.",
      },
      {
        tip: "Practise the whole introduction as one connected sequence.",
        detail: "Speaking exams reward fluency as much as accuracy. Rehearse greeting, name, age and where you're from as one flowing sequence rather than four separate memorised sentences, so it sounds natural rather than recited.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'Buenos días'",
        accept: ["good morning"],
        answer: "Good morning — buenos días is used from waking up until roughly midday, when it switches to buenas tardes.",
      },
      {
        question: "Translate into Spanish: 'Goodbye'",
        accept: ["adiós", "adios"],
        answer: "Adiós — the standard word for goodbye. The accent on the ó is correct written Spanish, though 'adios' without it is accepted here since accents can be hard to type.",
      },
      {
        question: "Write the number 15 in Spanish.",
        accept: ["quince"],
        answer: "Quince — one of the five 'teen' numbers (once–quince) that are irregular rather than built from diez, and simply have to be learned by heart.",
      },
      {
        question: "How do you say 'I am 16 years old' in Spanish?",
        accept: ["tengo dieciséis años", "tengo dieciseis años"],
        answer: "Tengo dieciséis años — age always uses tener (to have), never ser, and dieciséis is written as one fused word.",
      },
      {
        question: "Complete with the correct form of tener: 'Ella ____ quince años.'",
        accept: ["tiene"],
        answer: "Tiene — the third-person singular (he/she) form of tener, used here for age: Ella tiene quince años (She is fifteen).",
      },
      {
        question: "Complete with the correct form of ser: 'Nosotros ____ de España.'",
        accept: ["somos"],
        answer: "Somos — the 'we' form of the irregular verb ser: Nosotros somos de España (We are from Spain).",
      },
      {
        question: "Complete with the correct form of tener: 'Yo ____ catorce años.'",
        accept: ["tengo"],
        answer: "Tengo — the 'yo' (I) form of tener, used here to give your age: Yo tengo catorce años (I am fourteen).",
      },
      {
        question: "Translate into Spanish: 'My name is Ana and I am from Mexico.'",
        accept: ["me llamo ana y soy de méxico", "me llamo ana y soy de mexico"],
        answer: "Me llamo Ana y soy de México — using llamarse for 'my name is' and ser for 'I am from', since nationality and origin are lasting facts about identity.",
      },
      {
        question: "Which of these means 'How are you?' in a casual way?",
        choices: ["¿Qué tal?", "¿Cómo se llama usted?", "¿De dónde eres?", "¿Cuántos años tienes?"],
        accept: ["¿Qué tal?"],
        answer: "¿Qué tal? is the casual way to ask how someone is doing. ¿Cómo se llama usted? asks a stranger's name formally, and the other two ask where someone is from and their age.",
      },
      {
        question: "Which verb must you use to say how old you are in Spanish?",
        choices: ["tener", "ser", "estar", "hacer"],
        accept: ["tener"],
        answer: "Tener (to have) is used for age — Tengo quince años literally means 'I have fifteen years'. Ser, estar and hacer are all real verbs but none of them is used for age.",
      },
      {
        question: "What is the correct 'I am' form of ser?",
        choices: ["soy", "eres", "es", "somos"],
        accept: ["soy"],
        answer: "Soy is the first-person singular ('I') form of ser. Eres is 'you are' (informal), es is 'he/she/it is', and somos is 'we are'.",
      },
      {
        question: "Which word is the odd one out?",
        choices: ["Hola", "Buenos días", "Adiós", "Buenas tardes"],
        accept: ["Adiós"],
        answer: "Adiós means goodbye, while Hola, Buenos días and Buenas tardes are all ways of greeting someone rather than saying farewell.",
      },
      {
        question: "How is the number 22 written correctly in Spanish?",
        choices: ["veintidós", "veinte y dos", "veintedos", "dos veinte"],
        accept: ["veintidós"],
        answer: "Veintidós is correct — numbers 21 to 29 are written as one fused word in modern Spanish, not as two separate words.",
      },
      {
        question: "In the sentence 'Ella es alta', what part of speech is 'alta'?",
        choices: ["An adjective", "A noun", "A verb", "A preposition"],
        accept: ["An adjective"],
        answer: "Alta ('tall') describes the pronoun ella, which is exactly what an adjective does. Es is the verb in this sentence, and there is no preposition or extra noun present.",
      },
      {
        question: "Which pronoun goes with the verb form 'tienes'?",
        choices: ["tú", "yo", "él", "nosotros"],
        accept: ["tú"],
        answer: "Tienes is the tú (informal 'you') form of tener. Yo goes with tengo, él with tiene, and nosotros with tenemos.",
      },
      {
        question: "Give one situation where you would use usted instead of tú.",
        accept: ["with a teacher", "talking to a teacher", "with an adult stranger", "with a stranger", "talking to an adult you don't know"],
        answer: "Any adult you should be polite to counts — a teacher, a shop assistant you've never met, or an adult stranger are all correct examples of when usted is the right choice over tú.",
      },
      {
        question: "Write a short introduction of yourself in Spanish: your name, your age, and where you are from. Use at least three full sentences.",
        answer:
          "There's no single right answer here — mark this one yourself. A strong answer uses Me llamo... for your name, Tengo... años for your age (never soy for age), and Soy de... for where you're from, each written as a separate full sentence with correctly matched verb endings.",
      },
      {
        question: "Explain in English why Spanish has two different words for 'you' (tú and usted), and give one situation where you would use each.",
        answer:
          "Mark it yourself against this: tú is informal, used with people your own age, friends and family; usted is formal, used with teachers, strangers and anyone you should show respect to. A good answer names a clear example for each, such as using tú with a classmate and usted with a shop assistant you've never met.",
      },
      {
        question: "What does 'Hasta luego' mean?",
        choices: [
          "See you later",
          "Good afternoon",
          "Nice to meet you",
          "Good night",
        ],
        accept: [
          "See you later",
        ],
        answer: "Hasta luego means see you later. Buenas tardes is good afternoon, encantado is nice to meet you and buenas noches is good night.",
      },
      {
        question: "What does '¿De dónde eres?' mean?",
        choices: [
          "Where do you live?",
          "Who are you?",
          "How old are you?",
          "Where are you from?",
        ],
        accept: [
          "Where are you from?",
        ],
        answer: "¿De dónde eres? asks where you are from (ser de). Where do you live? is ¿Dónde vives? and ¿Cuántos años tienes? asks your age.",
      },
      {
        question: "Which word means 'twenty-one' in Spanish?",
        choices: [
          "veintidós",
          "treinta y uno",
          "veintiuno",
          "once",
        ],
        accept: [
          "veintiuno",
        ],
        answer: "Veintiuno is 21, written as one word like all numbers from 16 to 29. Veintidós is 22, treinta y uno is 31 and once is 11.",
      },
      {
        question: "How would a girl say 'Pleased to meet you'?",
        choices: [
          "Encantado",
          "Encantada",
          "Bienvenida",
          "Perdona",
        ],
        accept: [
          "Encantada",
        ],
        answer: "A girl says Encantada, because the adjective agrees with the speaker. Encantado is what a boy says; bienvenida means welcome.",
      },
      {
        question: "Which greeting would you use at 4 pm?",
        choices: [
          "Buenos días",
          "Buenas tardes",
          "Buenas noches",
          "Buen viaje",
        ],
        accept: [
          "Buenas tardes",
        ],
        answer: "Buenas tardes covers the afternoon and early evening. Buenos días is for the morning, buenas noches for night, and buen viaje means have a good trip.",
      },
      {
        question: "Which word for 'you' is polite, for one adult you don't know?",
        choices: [
          "usted",
          "tú",
          "vosotros",
          "nosotros",
        ],
        accept: [
          "usted",
        ],
        answer: "Usted is the formal singular 'you' for strangers and older people. Tú is informal, vosotros is informal plural and nosotros means we.",
      },
      {
        question: "Which word completes '¿Cómo ___ llamas?'",
        choices: [
          "se",
          "me",
          "le",
          "te",
        ],
        accept: [
          "te",
        ],
        answer: "Llamarse is reflexive and llamas is the tú form, so the pronoun is te. Me goes with yo (me llamo) and se with él or usted (se llama).",
      },
      {
        question: "What does 'Soy de Inglaterra' mean?",
        choices: [
          "I live in England",
          "I love England",
          "I'm from England",
          "I'm going to England",
        ],
        accept: [
          "I'm from England",
        ],
        answer: "Soy de means 'I am from'. I live in England would be vivo en Inglaterra, and I'm going to England would be voy a Inglaterra.",
      },
      {
        question: "How do you politely ask an adult stranger their name?",
        choices: [
          "¿Cómo te llamas?",
          "¿Cómo estás?",
          "¿Cómo se llama usted?",
          "¿Qué tal?",
        ],
        accept: [
          "¿Cómo se llama usted?",
        ],
        answer: "¿Cómo se llama usted? is the formal question. ¿Cómo te llamas? is the informal tú version, and the other two ask how someone is.",
      },
      {
        question: "What does 'Tengo catorce años' mean?",
        choices: [
          "I am 40",
          "I am 14",
          "I am 24",
          "I am 4",
        ],
        accept: [
          "I am 14",
        ],
        answer: "Catorce is fourteen. Cuarenta is 40, veinticuatro is 24 and cuatro is 4. Spanish uses tener for age: literally 'I have fourteen years'.",
      },
      {
        question: "Which Spanish word means 'surname'?",
        choices: [
          "el nombre",
          "el apellido",
          "el apodo",
          "la edad",
        ],
        accept: [
          "el apellido",
        ],
        answer: "El apellido is your surname. El nombre is your first name, el apodo is a nickname and la edad is your age.",
      },
      {
        question: "What does the Spanish greeting 'Buenas noches' mean?",
        choices: [
          "Good afternoon",
          "Good evening or night",
          "Good morning",
          "See you tomorrow",
        ],
        accept: [
          "Good evening or night",
        ],
        answer: "Buenas noches is used late in the evening and at night. Buenas tardes is good afternoon, buenos días is good morning and hasta mañana is see you tomorrow.",
      },
      {
        question: "Which Spanish word means 'thirty'?",
        choices: [
          "trece",
          "tres",
          "treinta",
          "veinte",
        ],
        accept: [
          "treinta",
        ],
        answer: "Treinta is thirty. Trece is thirteen and tres is three, which look similar, and veinte is twenty.",
      },
      {
        question: "In Spanish, which form of ser goes with 'usted'?",
        choices: [
          "eres",
          "es",
          "soy",
          "son",
        ],
        accept: [
          "es",
        ],
        answer: "Usted takes the he/she form of the verb, so it is usted es. Eres goes with the informal tú, soy with yo and son with ellos or ustedes.",
      },
    ],
    misconceptions: [
      {
        wrong: "Age is expressed with ser, just like the English 'I am 15'.",
        right: "Spanish uses tener for age: Tengo quince años, not Soy quince años — ser is reserved for lasting identity, not quantities like age.",
      },
      {
        wrong: "Tú and usted are just polite/casual translations of 'you' with no real grammar difference.",
        right: "They take completely different verb endings — tú eres vs usted es, tú tienes vs usted tiene — so mixing the wrong pronoun with the wrong ending is a grammar error, not just a tone mismatch.",
      },
      {
        wrong: "Numbers 16 to 29 can be written as two separate words, the way older textbooks sometimes show.",
        right: "Modern Spanish fuses them into one word — dieciséis, veintidós — and writing 'diez y seis' as two words is outdated and marked as non-standard.",
      },
      {
        wrong: "Encantado and Encantada mean different things.",
        right: "They mean exactly the same thing, 'pleased to meet you' — the ending simply agrees with the speaker's own gender, not with anything about the person being greeted.",
      },
      {
        wrong: "¿Cómo te llamas? and ¿Cómo se llama usted? are interchangeable.",
        right: "They ask the same question at different formality levels, so using the informal one with someone who expects respect — a teacher, for example — sounds impolite even though the grammar is correct.",
      },
    ],
  },
  "spanish/family-and-friends": {
    summary:
      "This topic covers the vocabulary and grammar you need to talk about your family and friends: family member nouns, possessive adjectives like mi and tu, physical descriptions using ser, personality descriptions, and the adjective agreement rules (masculine/feminine/plural endings) that run through almost every description you'll ever write in Spanish.",
    keyFacts: [
      {
        heading: "Family member vocabulary",
        points: [
          "Immediate family: el padre (father), la madre (mother), el hermano/la hermana (brother/sister), los padres (parents) — note los padres also means 'the parents', not just 'the fathers'.",
          "Extended family: el abuelo/la abuela (grandfather/grandmother), el tío/la tía (uncle/aunt), el primo/la prima (cousin, male/female).",
          "Masculine plural nouns like los hermanos or los abuelos can mean a mixed-gender group — los hermanos can mean 'siblings', not just 'brothers'.",
          "Mi familia is small/big is Mi familia es pequeña/grande — pequeña and grande agree with the feminine noun familia.",
        ],
      },
      {
        heading: "Possessive adjectives",
        points: [
          "Mi (my) and tu (your) don't change for gender, only for number: mi hermano, mi hermana, but mis hermanos (plural) — note no accent on mi/tu as adjectives, unlike mí (me) and tú (you) as pronouns.",
          "Su (his/her/their/your formal) also stays the same for gender: su padre, su madre, sus padres.",
          "Nuestro (our) is the one possessive that does agree with gender AND number: nuestro padre, nuestra madre, nuestros hermanos, nuestras hermanas.",
          "Possessive adjectives agree with the thing owned, not with the owner — mi hermana is correct whether a boy or a girl is speaking.",
        ],
      },
      {
        heading: "Physical descriptions with ser",
        points: [
          "Ser is used for physical appearance because height, hair colour and build are seen as lasting characteristics: Es alto/alta (he/she is tall).",
          "Hair and eyes use tener, not ser: Tiene el pelo rubio (he/she has blonde hair), Tiene los ojos azules (he/she has blue eyes).",
          "Common physical adjectives: alto/a (tall), bajo/a (short), delgado/a (thin), gordo/a (fat/overweight — used carefully, as it can sound rude in English translation but is neutral in Spanish description tasks).",
          "Adjectives of physical appearance always agree in gender and number with the person being described, just like any other Spanish adjective.",
        ],
      },
      {
        heading: "Personality and adjective agreement",
        points: [
          "Common personality adjectives: simpático/a (nice/kind), antipático/a (unpleasant), gracioso/a (funny), tímido/a (shy), trabajador/trabajadora (hardworking).",
          "Adjectives ending in -o change to -a for feminine: simpático → simpática; adjectives ending in -e or most consonants stay the same for both genders, e.g. inteligente, feliz.",
          "For plurals, add -s after a vowel and -es after a consonant: simpáticos, simpáticas, trabajadores.",
          "Adjectives ending in -dor add -a for feminine rather than just -s: trabajador becomes trabajadora, not 'trabajadors'.",
        ],
      },
    ],
    flashcards: [
      { term: "el hermano / la hermana", definition: "Brother / sister — los hermanos can mean 'siblings' as a mixed-gender group." },
      { term: "el abuelo / la abuela", definition: "Grandfather / grandmother." },
      { term: "el primo / la prima", definition: "Cousin (male / female) — agreement changes with gender, unlike English 'cousin'." },
      { term: "mi", definition: "My — does not change for gender, only adds -s for plural (mis hermanos)." },
      { term: "nuestro/a/os/as", definition: "Our — the only common possessive adjective that agrees in both gender and number." },
      { term: "el pelo", definition: "Hair — used with tener, e.g. Tiene el pelo rizado (he/she has curly hair)." },
      { term: "los ojos", definition: "Eyes — used with tener and a colour adjective, e.g. Tiene los ojos verdes (green eyes)." },
      { term: "simpático/a", definition: "Nice, kind — a very common personality adjective, changes -o to -a for feminine." },
      { term: "trabajador/trabajadora", definition: "Hardworking — adjectives ending -dor add -a (not just -s) for the feminine form." },
      { term: "gracioso/a", definition: "Funny, amusing — describes someone who makes others laugh." },
      { term: "tímido/a", definition: "Shy, timid — a common personality adjective, changes -o to -a for feminine." },
      { term: "casado/a", definition: "Married — from the verb casarse (to get married); soltero/a means single/unmarried." },
      { term: "el hijo único / la hija única", definition: "Only child (male / female) — literally 'unique son/daughter'." },
      { term: "llevarse bien (con)", definition: "To get on well (with) — a reflexive verb used to describe relationships, e.g. Me llevo bien con mi hermana." },
    ],
    examTips: [
      {
        tip: "Use tener for hair and eyes, ser for build and height.",
        detail: "Tiene el pelo negro (has black hair) uses tener, but Es alto (is tall) uses ser. Mixing these up is one of the most common errors in GCSE description writing.",
      },
      {
        tip: "Always check the gender of the noun before choosing mi/tu/su vs nuestro/a.",
        detail: "Nuestro is the only one of these that changes form, so it's the one worth double-checking: nuestra madre (feminine) but nuestro padre (masculine).",
      },
      {
        tip: "Match every adjective ending to the noun it describes, not to the speaker.",
        detail: "A boy describing his sister still writes mi hermana es simpática, with the feminine ending, because the adjective agrees with hermana, not with who is talking.",
      },
      {
        tip: "Learn the irregular feminine and plural adjective patterns separately from the regular -o/-a ones.",
        detail: "Trabajador → trabajadora and feliz → felices don't follow the simple -o/-a swap, so they need to be memorised as their own pattern rather than guessed.",
      },
      {
        tip: "Extend basic descriptions with intensifiers for higher marks.",
        detail: "Muy (very), bastante (quite) and un poco (a little) before an adjective — mi hermano es bastante gracioso — show a wider range of language than a bare adjective alone.",
      },
      {
        tip: "Don't confuse mi/tu (possessive, no accent) with mí/tú (pronouns, with accent).",
        detail: "Mi hermano (my brother) has no accent on mi; a mí me gusta (to me...) needs the accent on mí. The accent is the only thing distinguishing the two words in writing.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'Tengo el pelo rubio y los ojos azules.'",
        accept: ["i have blonde hair and blue eyes"],
        answer: "I have blonde hair and blue eyes — both hair and eye colour are described using tener in Spanish, not ser.",
      },
      {
        question: "Translate into Spanish: 'My sister is very tall and quite shy.'",
        accept: ["mi hermana es muy alta y bastante tímida"],
        answer: "Mi hermana es muy alta y bastante tímida — alta and tímida both take feminine endings because hermana is feminine.",
      },
      {
        question: "Complete with the correct form of ser: 'Mis padres ____ muy trabajadores.'",
        accept: ["son"],
        answer: "Son — the third-person plural (they) form of ser, used because padres (parents) is a plural subject.",
      },
      {
        question: "Complete with the correct possessive: '____ (our) casa es grande.' (nuestro)",
        accept: ["nuestra"],
        answer: "Nuestra — nuestro must agree with the feminine noun casa, so it becomes nuestra, unlike mi or tu which never change for gender.",
      },
      {
        question: "Give the correct feminine form of the adjective 'trabajador'.",
        accept: ["trabajadora"],
        answer: "Trabajadora — adjectives ending in -dor add an -a for the feminine form rather than simply adding -s.",
      },
      {
        question: "Which of these correctly means 'my brothers and sisters' as a mixed group?",
        choices: ["mis hermanos", "mis hermanas", "mi hermano", "mis padres"],
        accept: ["mis hermanos"],
        answer: "Mis hermanos, the masculine plural, is used for a mixed-gender group of siblings in Spanish, not just for a group of brothers.",
      },
      {
        question: "Which verb is used to describe hair and eye colour?",
        choices: ["tener", "ser", "estar", "llevar"],
        accept: ["tener"],
        answer: "Tener (to have) is used for hair and eyes: Tiene el pelo castaño (has brown hair). Ser is used for build and height instead.",
      },
      {
        question: "In the sentence 'Mi hermana es muy simpática', what part of speech is 'simpática'?",
        choices: ["An adjective", "A noun", "A verb", "An adverb"],
        accept: ["An adjective"],
        answer: "Simpática describes hermana, which is what an adjective does. Es is the verb, hermana is the noun, and muy is the adverb intensifying the adjective.",
      },
      {
        question: "Which possessive adjective changes for both gender and number?",
        choices: ["nuestro", "mi", "tu", "su"],
        accept: ["nuestro"],
        answer: "Nuestro/nuestra/nuestros/nuestras changes for both gender and number, unlike mi, tu and su which only ever add -s for plural.",
      },
      {
        question: "Which of these is the odd one out?",
        choices: ["gracioso", "tímido", "el primo", "trabajador"],
        accept: ["el primo"],
        answer: "El primo (cousin) is a noun naming a family member, while gracioso, tímido and trabajador are all personality adjectives.",
      },
      {
        question: "How do you say 'they get on well' using llevarse bien?",
        choices: ["se llevan bien", "se lleva bien", "nos llevamos bien", "me llevo bien"],
        accept: ["se llevan bien"],
        answer: "Se llevan bien is the third-person plural (they) form. Se lleva bien is 'he/she gets on well', and the other two options are 'we' and 'I' forms.",
      },
      {
        question: "Give one physical adjective and one personality adjective in Spanish.",
        accept: ["alto and simpático", "alta and simpática", "bajo and gracioso", "delgado and tímido", "gordo and antipático"],
        answer: "Any correct pairing works, for example alto (tall, physical) and simpático (nice, personality) — the key is showing you understand the two categories are different.",
      },
      {
        question: "Translate into Spanish: 'My grandparents are very kind.'",
        accept: ["mis abuelos son muy simpáticos"],
        answer: "Mis abuelos son muy simpáticos — abuelos is masculine plural, so simpáticos takes the masculine plural ending, and son is the 'they' form of ser.",
      },
      {
        question: "Complete with the correct form of tener: 'Ella ____ el pelo largo y rizado.'",
        accept: ["tiene"],
        answer: "Tiene — the third-person singular form of tener, used for describing hair: Ella tiene el pelo largo y rizado (She has long, curly hair).",
      },
      {
        question: "Write a short paragraph in Spanish describing a family member: their relationship to you, their physical appearance, and their personality.",
        answer:
          "There's no single right answer — mark this one yourself. A strong answer names the relationship (e.g. mi hermano), uses ser for build/height and tener for hair/eyes, and includes at least one correctly agreeing personality adjective.",
      },
      {
        question: "Explain in English the difference between how mi and nuestro behave when the noun they describe changes gender.",
        answer:
          "Mark it yourself against this: mi never changes for gender, only adding -s for a plural noun (mi hermano, mi hermana, mis hermanos), whereas nuestro fully agrees with gender and number (nuestro hermano, nuestra hermana, nuestros hermanos, nuestras hermanas).",
      },
      {
        question: "What does 'el primo' mean?",
        choices: [
          "cousin",
          "uncle",
          "nephew",
          "grandson",
        ],
        accept: [
          "cousin",
        ],
        answer: "El primo is a male cousin and la prima a female cousin. Uncle is el tío, nephew el sobrino and grandson el nieto.",
      },
      {
        question: "Which word means 'uncle'?",
        choices: [
          "el primo",
          "el abuelo",
          "el sobrino",
          "el tío",
        ],
        accept: [
          "el tío",
        ],
        answer: "El tío is uncle and la tía is aunt. El primo is cousin, el abuelo grandfather and el sobrino nephew.",
      },
      {
        question: "What does 'hijo único' mean?",
        choices: [
          "eldest son",
          "youngest son",
          "stepson",
          "only child",
        ],
        accept: [
          "only child",
        ],
        answer: "Hijo único means only child (a girl says hija única). Eldest son is el hijo mayor, youngest el hijo menor and stepson el hijastro.",
      },
      {
        question: "What does 'gracioso' mean?",
        choices: [
          "graceful",
          "kind",
          "funny",
          "hard-working",
        ],
        accept: [
          "funny",
        ],
        answer: "Gracioso means funny, not graceful, which makes it a false friend. Kind is simpático or amable, and hard-working is trabajador.",
      },
      {
        question: "Which completes 'Mi hermana es muy ___' (shy)?",
        choices: [
          "tímido",
          "tímida",
          "tímidas",
          "tímidos",
        ],
        accept: [
          "tímida",
        ],
        answer: "Tímida agrees with hermana, which is feminine singular. Tímido is masculine, and the forms ending in -s are plural.",
      },
      {
        question: "Which completes '___ abuelos son simpáticos' (my)?",
        choices: [
          "Mis",
          "Mi",
          "Mía",
          "Mío",
        ],
        accept: [
          "Mis",
        ],
        answer: "Mis goes before a plural noun like abuelos. Mi only goes before a singular noun, and mío/mía come after the noun or stand alone.",
      },
      {
        question: "What does 'casado' mean?",
        choices: [
          "married",
          "tired",
          "divorced",
          "single",
        ],
        accept: [
          "married",
        ],
        answer: "Casado means married. Don't confuse it with cansado (tired). Divorced is divorciado and single is soltero.",
      },
      {
        question: "In 'Me llevo bien con mi hermano', what does 'me llevo bien' mean?",
        choices: [
          "I take him out",
          "I argue",
          "I look like him",
          "I get on well",
        ],
        accept: [
          "I get on well",
        ],
        answer: "Llevarse bien con means to get on well with someone; llevarse mal is to get on badly. I argue would be me peleo or discuto.",
      },
      {
        question: "Which completes 'Tengo los ojos ___' (blue)?",
        choices: [
          "azul",
          "azulos",
          "azules",
          "azulas",
        ],
        accept: [
          "azules",
        ],
        answer: "Ojos is plural, so azul adds -es to become azules. Azul has the same form for masculine and feminine, so azulos and azulas don't exist.",
      },
      {
        question: "Which completes '___ padres son estrictos' (our)?",
        choices: [
          "Nuestro",
          "Nuestros",
          "Nuestras",
          "Nuestra",
        ],
        accept: [
          "Nuestros",
        ],
        answer: "Nuestros is masculine plural to match padres. Nuestro is singular, and nuestra/nuestras are the feminine forms.",
      },
      {
        question: "Which Spanish word means 'stepfather'?",
        choices: [
          "el padrino",
          "el suegro",
          "el padrastro",
          "el abuelo",
        ],
        accept: [
          "el padrastro",
        ],
        answer: "El padrastro is a stepfather. El padrino is a godfather, el suegro is a father-in-law and el abuelo is a grandfather.",
      },
      {
        question: "Which Spanish word means 'grandson'?",
        choices: [
          "el sobrino",
          "el primo",
          "el tío",
          "el nieto",
        ],
        accept: [
          "el nieto",
        ],
        answer: "El nieto is a grandson (la nieta is a granddaughter). El sobrino is a nephew, el primo is a cousin and el tío is an uncle.",
      },
      {
        question: "What does the Spanish adjective 'pelirrojo' mean?",
        choices: [
          "red-haired",
          "fair-haired",
          "dark-haired",
          "bald",
        ],
        accept: [
          "red-haired",
        ],
        answer: "Pelirrojo means red-haired, from pelo (hair) and rojo (red). Fair-haired is rubio, dark-haired is moreno and bald is calvo.",
      },
      {
        question: "In Spanish, which word completes '___ hermanas son altas' (your, to a friend)?",
        choices: [
          "tu",
          "tus",
          "sus",
          "mis",
        ],
        accept: [
          "tus",
        ],
        answer: "Tus is the informal 'your' for a plural noun, so it matches hermanas. Tu is only for one thing, sus means his/her/their and mis means my.",
      },
    ],
    misconceptions: [
      {
        wrong: "Hair and eye colour are described with ser, like other physical features.",
        right: "Hair and eyes use tener — Tiene el pelo negro, not Es pelo negro — while build and height (alto, delgado) do use ser.",
      },
      {
        wrong: "Mi and tu change to agree with the gender of the noun, like most Spanish adjectives.",
        right: "Mi and tu never change for gender, only for number (mi/mis, tu/tus) — nuestro is the odd one out that changes for both gender and number.",
      },
      {
        wrong: "Los hermanos always means 'the brothers', excluding any sisters.",
        right: "The masculine plural form is used for a mixed-gender group, so los hermanos commonly means 'siblings' (brothers and sisters together), not only male siblings.",
      },
      {
        wrong: "Adjectives should agree with the gender of the person speaking about their family.",
        right: "Adjectives agree with the noun being described, not the speaker — a boy still writes mi hermana es alta with the feminine ending because hermana is feminine.",
      },
      {
        wrong: "Adding -a to any masculine adjective always makes the feminine form.",
        right: "That works for -o endings (alto→alta), but adjectives ending in -e or most consonants (inteligente, feliz) stay the same for both genders, and -dor endings add -a rather than just -s.",
      },
    ],
  },

  "spanish/free-time-and-hobbies": {
    summary:
      "This topic covers how to talk about sports, hobbies and free-time activities in Spanish, focusing on the gustar/encantar construction with indirect object pronouns (me, te, le, nos), frequency expressions like a veces and los fines de semana, and the collocations jugar and hacer take with different activities.",
    keyFacts: [
      {
        heading: "Sports and hobby vocabulary",
        points: [
          "Sports use jugar al + sport: jugar al fútbol (to play football), jugar al tenis, jugar al baloncesto (basketball).",
          "Other activities use hacer + noun: hacer natación (to swim/do swimming), hacer ciclismo (cycling), hacer los deberes (homework, not really a hobby but the same pattern).",
          "Some hobbies use their own verb with no jugar or hacer: leer (to read), bailar (to dance), dibujar (to draw), cantar (to sing).",
          "Ir + a + place is used for going somewhere to do a hobby: ir a la piscina (go to the pool), ir al cine (go to the cinema).",
        ],
      },
      {
        heading: "Gustar and encantar with indirect object pronouns",
        points: [
          "Gustar literally means 'to be pleasing to', so the Spanish sentence structure is back-to-front from English: Me gusta el fútbol literally means 'football is pleasing to me'.",
          "The indirect object pronoun changes depending on who likes something: me (to me), te (to you), le (to him/her), nos (to us), os (to you all), les (to them).",
          "Gustar agrees with what is liked, not with the person: Me gusta el fútbol (singular thing liked) but Me gustan los deportes (plural things liked, so gustan not gusta).",
          "Encantar works exactly like gustar but is stronger — 'to love/really like': Me encanta la música (I love music), Me encantan los videojuegos (I love video games).",
        ],
      },
      {
        heading: "Frequency expressions",
        points: [
          "Los fines de semana (at weekends), todos los días (every day), a veces (sometimes) and nunca (never) all describe how often you do something.",
          "Nunca can go before the verb on its own, or you can use no + verb + nunca for extra emphasis: Nunca juego al tenis / No juego nunca al tenis.",
          "Siempre (always) and normalmente (normally/usually) are also common frequency words used to open a sentence about a routine hobby.",
          "Frequency expressions usually go at the start or end of a sentence, not in the middle between subject and verb, unlike in English.",
        ],
      },
      {
        heading: "Jugar and hacer conjugation patterns",
        points: [
          "Jugar is a radical-changing (stem-changing) verb: u becomes ue in most forms — juego, juegas, juega, jugamos, jugáis, juegan.",
          "Hacer is irregular in the yo form only: hago, haces, hace, hacemos, hacéis, hacen.",
          "Jugar always needs 'al' (a + el) before a masculine sport, or 'a la' before a feminine one: jugar al fútbol, jugar a la pelota.",
          "Hacer is not used before every hobby — you don't say hacer fútbol, you say jugar al fútbol, so the two patterns aren't interchangeable.",
        ],
      },
    ],
    flashcards: [
      { term: "el fútbol", definition: "Football/soccer — used with jugar al fútbol (to play football)." },
      { term: "la natación", definition: "Swimming — used with hacer natación (to go swimming), not jugar." },
      { term: "el ciclismo", definition: "Cycling — used with hacer ciclismo." },
      { term: "montar en bicicleta", definition: "To ride a bike — its own verb phrase, separate from hacer ciclismo." },
      { term: "me gusta / me gustan", definition: "I like (singular thing) / I like (plural things) — the verb agrees with what is liked, not the speaker." },
      { term: "me encanta / me encantan", definition: "I love (singular thing) / I love (plural things) — a stronger version of gustar, same grammar pattern." },
      { term: "los fines de semana", definition: "At weekends — a common frequency expression, often placed at the start of a sentence." },
      { term: "a veces", definition: "Sometimes — a common frequency expression describing how often you do a hobby." },
      { term: "nunca", definition: "Never — can stand alone before the verb, or be paired with 'no' before the verb for emphasis." },
      { term: "el equipo", definition: "Team — masculine despite ending in -o being typical, but note this one is regular; false friend warning: NOT 'equipment' (that's el equipo too in some contexts, but here it means sports team)." },
      { term: "dibujar", definition: "To draw — a regular -ar verb hobby with no jugar or hacer needed." },
      { term: "el videojuego", definition: "Video game — commonly used with jugar a: jugar a los videojuegos." },
      { term: "salir con amigos", definition: "To go out with friends — uses the irregular verb salir (yo salgo)." },
      { term: "aburrido/a", definition: "Boring — a common opinion adjective used to describe a hobby you dislike." },
    ],
    examTips: [
      {
        tip: "Remember gustar agrees with the thing liked, not the person who likes it.",
        detail: "Me gustan los deportes is correct because deportes is plural; writing me gusta los deportes is a very common but avoidable error.",
      },
      {
        tip: "Never translate gustar word-for-word as 'I like'.",
        detail: "Grammatically it's 'is pleasing to me', which is why the pronoun (me/te/le) comes first and the verb agrees with the object, not the subject 'I'.",
      },
      {
        tip: "Learn which sports use jugar and which activities use hacer as fixed pairs.",
        detail: "You play (jugar al) football, tennis and basketball, but you do (hacer) swimming, cycling and athletics — mixing the two up is a common but easily-fixed error.",
      },
      {
        tip: "Put frequency expressions at the start of a sentence for a more natural, higher-level style.",
        detail: "Los fines de semana, juego al fútbol reads more fluently in a GCSE writing task than juego al fútbol los fines de semana, though both are grammatically correct.",
      },
      {
        tip: "Use nos gusta/nos gustan to talk about shared hobbies with friends or family.",
        detail: "Nos gusta ir al cine (we like going to the cinema) is a useful higher-mark structure that many students forget exists beyond the 'me gusta' pattern.",
      },
      {
        tip: "Give a reason with porque after every opinion for full marks.",
        detail: "Me gusta el fútbol porque es emocionante shows you can justify an opinion, not just state it, which examiners specifically reward in speaking and writing tasks.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'Me encanta el baloncesto, pero no me gusta la natación.'",
        accept: ["i love basketball, but i don't like swimming"],
        answer: "I love basketball, but I don't like swimming — encanta is stronger than gusta, and no me gusta simply adds 'no' before the verb to negate it.",
      },
      {
        question: "Translate into Spanish: 'At weekends, I play tennis with my friends.'",
        accept: ["los fines de semana, juego al tenis con mis amigos", "juego al tenis con mis amigos los fines de semana"],
        answer: "Los fines de semana, juego al tenis con mis amigos — jugar al is needed before the sport tenis, and the frequency phrase can open or close the sentence.",
      },
      {
        question: "Complete with the correct form of gustar: 'A mí me ____ los videojuegos.'",
        accept: ["gustan"],
        answer: "Gustan — plural, because los videojuegos (video games) is a plural noun, so the verb must agree with it, not with 'yo'.",
      },
      {
        question: "Complete with the correct form of jugar: 'Nosotros ____ al fútbol todos los días.'",
        accept: ["jugamos"],
        answer: "Jugamos — the 'we' form of the radical-changing verb jugar; note the stem change (u→ue) doesn't happen in the nosotros form.",
      },
      {
        question: "Complete with the correct form of hacer: 'Yo ____ natación los sábados.'",
        accept: ["hago"],
        answer: "Hago — the irregular 'yo' form of hacer; every other present-tense form of hacer is regular (haces, hace, hacemos, hacéis, hacen).",
      },
      {
        question: "Which of these means 'never'?",
        choices: ["nunca", "a veces", "siempre", "normalmente"],
        accept: ["nunca"],
        answer: "Nunca means never. A veces means sometimes, siempre means always, and normalmente means normally/usually.",
      },
      {
        question: "Which verb pairs correctly with 'natación' to mean 'to go swimming'?",
        choices: ["hacer", "jugar", "ir", "tener"],
        accept: ["hacer"],
        answer: "Hacer natación is the correct collocation. Jugar is used for sports played with a ball or opponent like football or tennis, not swimming.",
      },
      {
        question: "In the sentence 'Me gusta mucho el ciclismo', what part of speech is 'mucho'?",
        choices: ["An adverb", "A noun", "An adjective", "A pronoun"],
        accept: ["An adverb"],
        answer: "Mucho here intensifies the verb gusta ('I like it a lot'), which is the job of an adverb. If it agreed with a noun instead it would be an adjective, but here it modifies the verb.",
      },
      {
        question: "Which indirect object pronoun means 'to them'?",
        choices: ["les", "le", "nos", "os"],
        accept: ["les"],
        answer: "Les means 'to them' (or formal 'to you all'). Le is singular (to him/her), nos is 'to us', and os is informal plural 'to you all' in Spain.",
      },
      {
        question: "Which of these is the odd one out?",
        choices: ["dibujar", "bailar", "el equipo", "cantar"],
        accept: ["el equipo"],
        answer: "El equipo (team) is a noun, while dibujar, bailar and cantar are all verbs describing hobby activities.",
      },
      {
        question: "How do you say 'we love going out with friends' using encantar?",
        choices: ["nos encanta salir con amigos", "me encanta salir con amigos", "nos gusta salir con amigos", "les encanta salir con amigos"],
        accept: ["nos encanta salir con amigos"],
        answer: "Nos encanta salir con amigos uses nos ('to us') with encanta, since salir (to go out) is a singular infinitive acting as the subject, so the verb stays singular.",
      },
      {
        question: "Give one Spanish sport or hobby that uses 'jugar al' rather than 'hacer'.",
        accept: ["fútbol", "tenis", "baloncesto", "voleibol", "el fútbol", "el tenis", "el baloncesto"],
        answer: "Any ball or opponent-based sport works — fútbol, tenis and baloncesto are all correct examples that pair with jugar al rather than hacer.",
      },
      {
        question: "Translate into Spanish: 'I never play video games because they are boring.'",
        accept: ["nunca juego a los videojuegos porque son aburridos", "no juego nunca a los videojuegos porque son aburridos"],
        answer: "Nunca juego a los videojuegos porque son aburridos — nunca can go directly before the verb, and son (they are) agrees with the plural videojuegos.",
      },
      {
        question: "Complete with the correct form of gustar: 'A mis padres les ____ el cine.'",
        accept: ["gusta"],
        answer: "Gusta — singular, because el cine (the cinema) is a single, singular thing being liked, and les shows it is 'to them' (mis padres) that it's pleasing.",
      },
      {
        question: "Write a short paragraph in Spanish about your free-time activities: what you like, what you dislike, and how often you do each one.",
        answer:
          "There's no single right answer — mark this one yourself. A strong answer includes at least one gustar/encantar sentence with correct singular/plural agreement, a frequency expression, and a reason introduced by porque.",
      },
      {
        question: "Explain in English why 'me gusta el fútbol' does not translate word-for-word as 'I like football'.",
        answer:
          "Mark it yourself against this: gustar literally means 'to be pleasing to', so the sentence structure is really 'football is pleasing to me' — el fútbol is the grammatical subject and me is the indirect object, which is why the verb agrees with the thing liked rather than with the person.",
      },
      {
        question: "What does 'el ciclismo' mean?",
        choices: [
          "swimming",
          "cycling",
          "climbing",
          "sailing",
        ],
        accept: [
          "cycling",
        ],
        answer: "El ciclismo is cycling. Swimming is la natación, climbing la escalada and sailing la vela.",
      },
      {
        question: "Which completes 'Me encanta ___ con amigos' (to go out)?",
        choices: [
          "salir",
          "salgo",
          "sale",
          "saliendo",
        ],
        accept: [
          "salir",
        ],
        answer: "After encantar or gustar you use the infinitive, so salir. Salgo means 'I go out', sale 'he/she goes out' and saliendo 'going out'.",
      },
      {
        question: "What does 'a veces' mean?",
        choices: [
          "always",
          "often",
          "rarely",
          "sometimes",
        ],
        accept: [
          "sometimes",
        ],
        answer: "A veces means sometimes. Always is siempre, often is a menudo and rarely is raramente or casi nunca.",
      },
      {
        question: "Which word completes 'Juego ___ fútbol'?",
        choices: [
          "a la",
          "el",
          "al",
          "del",
        ],
        accept: [
          "al",
        ],
        answer: "Jugar takes a, and a + el contracts to al: juego al fútbol. A la is for feminine nouns and del is de + el.",
      },
      {
        question: "What does 'dibujar' mean?",
        choices: [
          "to paint",
          "to dance",
          "to draw",
          "to sing",
        ],
        accept: [
          "to draw",
        ],
        answer: "Dibujar means to draw. To paint is pintar, to dance is bailar and to sing is cantar.",
      },
      {
        question: "What does 'el equipo' mean?",
        choices: [
          "match",
          "team",
          "player",
          "pitch",
        ],
        accept: [
          "team",
        ],
        answer: "El equipo is a team. A match is el partido, a player el jugador and a pitch el campo.",
      },
      {
        question: "What does 'aburrido' mean in 'El golf es aburrido'?",
        choices: [
          "boring",
          "bored",
          "tiring",
          "fun",
        ],
        accept: [
          "boring",
        ],
        answer: "With ser, aburrido means boring (a quality). Estoy aburrido, with estar, would mean I'm bored. Tiring is cansado and fun is divertido.",
      },
      {
        question: "What does 'los fines de semana' mean?",
        choices: [
          "every week",
          "on weekdays",
          "at night",
          "at weekends",
        ],
        accept: [
          "at weekends",
        ],
        answer: "Los fines de semana means at weekends (literally 'the ends of week'). Every week is cada semana and at night is por la noche.",
      },
      {
        question: "'Voy a jugar al tenis' talks about which time?",
        choices: [
          "the past",
          "every day",
          "right now",
          "the future",
        ],
        accept: [
          "the future",
        ],
        answer: "Ir a + infinitive is the near future: I'm going to play tennis. Juego al tenis would be the present, and jugué al tenis the past.",
      },
      {
        question: "What does 'Me gustaría ir al cine' mean?",
        choices: [
          "I like going",
          "I liked going",
          "I'd like to go",
          "I'm going to go",
        ],
        accept: [
          "I'd like to go",
        ],
        answer: "Me gustaría is the conditional 'I would like'. Me gusta is 'I like', me gustó 'I liked' and voy a ir 'I'm going to go'.",
      },
      {
        question: "In Spanish, which verb completes '___ la guitarra' (I play the guitar)?",
        choices: [
          "Juego",
          "Toco",
          "Hago",
          "Pongo",
        ],
        accept: [
          "Toco",
        ],
        answer: "Tocar is used for musical instruments, so 'toco la guitarra'. Jugar is for sports and games, as in 'juego al fútbol'.",
      },
      {
        question: "What does the Spanish verb 'leer' mean?",
        choices: [
          "to draw",
          "to sing",
          "to read",
          "to dance",
        ],
        accept: [
          "to read",
        ],
        answer: "Leer means to read (leo un libro, I read a book). Dibujar is to draw, cantar is to sing and bailar is to dance.",
      },
      {
        question: "In Spanish, which word completes 'Me ___ nadar' (I like swimming)?",
        choices: [
          "gustan",
          "gusta",
          "gusto",
          "gustas",
        ],
        accept: [
          "gusta",
        ],
        answer: "Gusta is used when the thing you like is a verb in the infinitive, like nadar. Gustan is only for plural nouns, such as me gustan los deportes.",
      },
      {
        question: "What does the Spanish phrase 'ir de compras' mean?",
        choices: [
          "to go for a walk",
          "to go camping",
          "to go cycling",
          "to go shopping",
        ],
        accept: [
          "to go shopping",
        ],
        answer: "Ir de compras means to go shopping. To go for a walk is dar un paseo, to go camping is ir de camping and cycling is montar en bicicleta.",
      },
    ],
    misconceptions: [
      {
        wrong: "Gustar behaves like a normal verb that agrees with the person speaking.",
        right: "Gustar agrees with the thing being liked, not the speaker — Me gustan los deportes takes gustan (plural) because deportes is plural, even though 'me' refers to one person.",
      },
      {
        wrong: "Jugar and hacer can be used interchangeably before any sport or hobby.",
        right: "They form fixed collocations — jugar al fútbol/tenis/baloncesto for ball sports and games, but hacer natación/ciclismo for other physical activities — swapping them sounds wrong to a native speaker.",
      },
      {
        wrong: "'Me gusta' always means 'I like it', regardless of context.",
        right: "It only ever means 'it is pleasing to me' for a singular thing — a plural thing needs me gustan, and a different person needs a different pronoun (te, le, nos, les).",
      },
      {
        wrong: "Frequency words like nunca and siempre must go in the same position as in English, between subject and verb.",
        right: "Spanish frequency expressions are flexible and are often placed at the very start or end of a sentence for a more natural, higher-level style, not fixed mid-sentence like English adverbs of frequency.",
      },
    ],
  },

  "spanish/school-life": {
    summary:
      "This topic covers everyday school vocabulary in Spanish: subject names, giving opinions on subjects with me gusta/no me gusta plus a reason using porque, classroom objects, telling the time for a school timetable, and the adjectives of opinion — interesante, aburrido, difícil, fácil — that let you justify what you think of each subject.",
    keyFacts: [
      {
        heading: "School subjects",
        points: [
          "Core subjects: las matemáticas (maths), el inglés (English), la historia (history), la geografía (geography), las ciencias (science).",
          "Other common subjects: el arte (art), la educación física (PE), la informática (ICT/computing), el francés (French), la música (music).",
          "Subject names take a definite article (el/la/las) when talking about the subject in general: Estudio las matemáticas (I study maths).",
          "Most subject nouns are regular for gender, but note las matemáticas and las ciencias are always plural in Spanish, unlike the English singular 'maths' and 'science'.",
        ],
      },
      {
        heading: "Giving opinions on subjects",
        points: [
          "Me gusta + singular subject or me gustan + plural subject: Me gusta el inglés, but Me gustan las ciencias.",
          "No me gusta(n) negates the opinion by adding no before the verb: No me gusta la historia.",
          "Always follow an opinion with porque (because) plus a reason for full marks: Me gusta el arte porque soy creativo/a.",
          "Odiar (to hate) and preferir (to prefer) are stronger alternatives to gustar for varying your language: Odio la educación física; Prefiero la informática.",
        ],
      },
      {
        heading: "Classroom objects and telling the time",
        points: [
          "Classroom objects: el bolígrafo (pen), el lápiz (pencil), el cuaderno (exercise book), la mochila (backpack), la pizarra (whiteboard/blackboard).",
          "On the hour: Son las tres (it's three o'clock); for one o'clock only, use Es la una (singular, because 'una' is one hour).",
          "Half and quarter past/to: y media (half past), y cuarto (quarter past), menos cuarto (quarter to).",
          "School timetable phrases use a las + time: Tengo matemáticas a las nueve (I have maths at nine o'clock).",
        ],
      },
      {
        heading: "Adjectives of opinion",
        points: [
          "Interesante (interesting) and aburrido/a (boring) are opposite opinion adjectives commonly used to justify a like or dislike.",
          "Difícil (difficult) and fácil (easy) describe how hard a subject is, and don't change for gender since they end in a consonant/vowel that stays fixed except for plural -es/-s.",
          "Útil (useful) and divertido/a (fun) are also common — divertido changes for gender (divertido/divertida) because it ends in -o.",
          "These adjectives always follow the noun in Spanish: una clase interesante (an interesting class), not interesante clase.",
        ],
      },
    ],
    flashcards: [
      { term: "las matemáticas", definition: "Maths — always plural in Spanish, unlike the singular English word." },
      { term: "la educación física", definition: "PE (physical education)." },
      { term: "la informática", definition: "ICT / computing — a common secondary school subject." },
      { term: "el instituto", definition: "Secondary school — false friend warning: NOT 'institute' in the English sense, it's the standard word for a secondary school in Spain." },
      { term: "el recreo", definition: "Break time / recess — the school break between lessons." },
      { term: "el bolígrafo", definition: "Pen — often shortened to 'boli' in informal speech." },
      { term: "el cuaderno", definition: "Exercise book / notebook." },
      { term: "la mochila", definition: "Backpack, school bag." },
      { term: "aburrido/a", definition: "Boring — changes to aburrida for feminine nouns, e.g. una clase aburrida." },
      { term: "difícil", definition: "Difficult — does not change for gender, only adds -es for plural (difíciles)." },
      { term: "fácil", definition: "Easy — same pattern as difícil, plural is fáciles." },
      { term: "el horario", definition: "Timetable/schedule — used for school timetables and travel schedules alike." },
      { term: "el uniforme escolar", definition: "School uniform — often compulsory at Spanish-speaking schools." },
      { term: "sacar buenas notas", definition: "To get good grades — literally 'to take out good marks'." },
    ],
    examTips: [
      {
        tip: "Match gusta/gustan to the number of the subject, not the number of subjects you're discussing overall.",
        detail: "Me gusta el inglés (singular subject, gusta) versus Me gustan las ciencias (plural noun ciencias, gustan) — check the noun immediately after the verb, every time.",
      },
      {
        tip: "Always add porque plus a reason after an opinion.",
        detail: "A bare Me gusta el arte earns fewer marks than Me gusta el arte porque es creativo — GCSE mark schemes specifically reward justified opinions over simple statements.",
      },
      {
        tip: "Remember Es la una is singular, but every other hour uses son las.",
        detail: "Es la una (it's one o'clock) is the one exception; Son las dos, Son las tres and so on all use the plural son because more than one hour is being expressed.",
      },
      {
        tip: "Put opinion adjectives after the noun, not before it as in English.",
        detail: "Una asignatura interesante (an interesting subject) is correct word order; writing una interesante asignatura sounds unnatural and non-standard in Spanish.",
      },
      {
        tip: "Vary gustar with odiar and preferir to show a wider range of opinion language.",
        detail: "Using only me gusta/no me gusta throughout a piece of writing caps how impressive it looks — odio, prefiero and me encanta all show range and pick up extra marks.",
      },
      {
        tip: "Remember las matemáticas and las ciencias are always plural nouns in Spanish.",
        detail: "This affects the verb ending you must use with them — Me gustan las matemáticas, never gusta — even though English speakers often think of 'maths' as one singular subject.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'No me gusta la geografía porque es aburrida.'",
        accept: ["i don't like geography because it's boring", "i do not like geography because it is boring"],
        answer: "I don't like geography because it's boring — aburrida agrees with the feminine noun geografía, and porque introduces the reason for the opinion.",
      },
      {
        question: "Translate into Spanish: 'I love science because it's interesting.'",
        accept: ["me encantan las ciencias porque son interesantes"],
        answer: "Me encantan las ciencias porque son interesantes — ciencias is plural, so both encantan and the adjective interesantes must be plural too.",
      },
      {
        question: "Complete with the correct form of gustar: 'A nosotros nos ____ el arte.'",
        accept: ["gusta"],
        answer: "Gusta — singular, because el arte is a singular subject, and nos shows the opinion belongs to 'us' (nosotros).",
      },
      {
        question: "What time is 'Es la una y media'?",
        accept: ["half past one", "one thirty"],
        answer: "Half past one — Es la una is the one exception that uses the singular es rather than son, since it refers to exactly one hour.",
      },
      {
        question: "Complete with the correct form of tener: 'Yo ____ inglés a las diez.'",
        accept: ["tengo"],
        answer: "Tengo — the 'yo' form of tener, used here in the sense of 'I have (a lesson of)' English at ten o'clock.",
      },
      {
        question: "Which of these means 'break time' at school?",
        choices: ["el recreo", "el horario", "el instituto", "la nota"],
        accept: ["el recreo"],
        answer: "El recreo means break time. El horario is the timetable, el instituto is the secondary school itself, and la nota is a grade/mark.",
      },
      {
        question: "Which subject noun is always plural in Spanish?",
        choices: ["las matemáticas", "el inglés", "la historia", "el arte"],
        accept: ["las matemáticas"],
        answer: "Las matemáticas (maths) is always plural in Spanish, which is why it always takes gustan rather than gusta, unlike the singular English word 'maths'.",
      },
      {
        question: "In the sentence 'La clase de historia es muy difícil', what part of speech is 'difícil'?",
        choices: ["An adjective", "A noun", "A verb", "A preposition"],
        accept: ["An adjective"],
        answer: "Difícil describes clase, which is exactly what an adjective does. Es is the verb, clase and historia are nouns, and de is the preposition.",
      },
      {
        question: "Which word correctly completes: 'Tengo educación física ___ las once' (at eleven)?",
        choices: ["a", "en", "de", "por"],
        accept: ["a"],
        answer: "A las once means 'at eleven o'clock' — a is the preposition used before a specific clock time in Spanish, just like 'at' in English.",
      },
      {
        question: "Which of these is the odd one out?",
        choices: ["el cuaderno", "el bolígrafo", "la mochila", "el recreo"],
        accept: ["el recreo"],
        answer: "El recreo (break time) is a period of time, while el cuaderno, el bolígrafo and la mochila are all physical classroom objects.",
      },
      {
        question: "Give one Spanish adjective that means 'easy'.",
        accept: ["fácil"],
        answer: "Fácil means easy. It doesn't change for gender, only adding -es to become fáciles in the plural.",
      },
      {
        question: "Translate into Spanish: 'What time do you have maths?'",
        accept: ["¿a qué hora tienes matemáticas?", "¿a que hora tienes matematicas?"],
        answer: "¿A qué hora tienes matemáticas? — a qué hora is the fixed phrase for 'at what time', and tienes is the tú form of tener used for timetable subjects.",
      },
      {
        question: "Complete with the correct form of preferir: 'Yo ____ la informática a la historia.'",
        accept: ["prefiero"],
        answer: "Prefiero — the 'yo' form of the radical-changing verb preferir (e→ie), used to say 'I prefer ICT to history'.",
      },
      {
        question: "Choose the sentence with the correct word order.",
        choices: ["una asignatura interesante", "una interesante asignatura", "asignatura una interesante", "interesante una asignatura"],
        accept: ["una asignatura interesante"],
        answer: "Una asignatura interesante is correct — Spanish descriptive adjectives normally follow the noun they describe, unlike in English.",
      },
      {
        question: "Write a short paragraph in Spanish giving your opinion on three different school subjects, with a reason for each.",
        answer:
          "There's no single right answer — mark this one yourself. A strong answer names three subjects, uses gusta/gustan correctly matched to singular/plural, and gives a reason for each opinion with porque.",
      },
      {
        question: "Explain in English why 'Es la una' uses 'es' while every other hour uses 'son'.",
        answer:
          "Mark it yourself against this: es la una is singular because it refers to exactly one hour (la una = 'the one'), whereas son las dos, son las tres and so on use the plural son because they refer to more than one hour on the clock.",
      },
      {
        question: "What does 'el bolígrafo' mean?",
        choices: [
          "pencil",
          "pen",
          "rubber",
          "ruler",
        ],
        accept: [
          "pen",
        ],
        answer: "El bolígrafo (el boli) is a pen. A pencil is el lápiz, a rubber la goma and a ruler la regla.",
      },
      {
        question: "Which Spanish word means 'exercise book'?",
        choices: [
          "el cuaderno",
          "el libro",
          "la mochila",
          "el estuche",
        ],
        accept: [
          "el cuaderno",
        ],
        answer: "El cuaderno is an exercise book. El libro is a book, la mochila a school bag and el estuche a pencil case.",
      },
      {
        question: "Which subject is 'la informática'?",
        choices: [
          "ICT",
          "drama",
          "PE",
          "technology",
        ],
        accept: [
          "ICT",
        ],
        answer: "La informática is ICT or computing. PE is la educación física, drama is el teatro and technology is la tecnología.",
      },
      {
        question: "What does 'sacar buenas notas' mean?",
        choices: [
          "take good notes",
          "pass notes",
          "write notes",
          "get good marks",
        ],
        accept: [
          "get good marks",
        ],
        answer: "Sacar buenas notas means to get good marks or grades. La nota is a mark, so it's a false friend; taking notes is tomar apuntes.",
      },
      {
        question: "What does 'el horario' mean?",
        choices: [
          "homework",
          "uniform",
          "timetable",
          "classroom",
        ],
        accept: [
          "timetable",
        ],
        answer: "El horario is the timetable. Homework is los deberes, the uniform is el uniforme and a classroom is el aula.",
      },
      {
        question: "What time is 'Son las tres menos cuarto'?",
        choices: [
          "3:15",
          "2:45",
          "3:45",
          "2:15",
        ],
        accept: [
          "2:45",
        ],
        answer: "Menos cuarto means quarter to, so las tres menos cuarto is 2:45. 3:15 would be las tres y cuarto.",
      },
      {
        question: "Which completes 'Las matemáticas son ___' (difficult)?",
        choices: [
          "difícil",
          "difíciles",
          "difícilas",
          "difícila",
        ],
        accept: [
          "difíciles",
        ],
        answer: "Matemáticas is plural, so difícil adds -es to become difíciles. Adjectives ending in -l have no separate feminine form, so difícila is wrong.",
      },
      {
        question: "What does 'los deberes' mean?",
        choices: [
          "homework",
          "lessons",
          "exams",
          "subjects",
        ],
        accept: [
          "homework",
        ],
        answer: "Los deberes means homework. Lessons are las clases, exams los exámenes and subjects las asignaturas.",
      },
      {
        question: "Which word means 'strict', as in a teacher?",
        choices: [
          "estrecho",
          "tranquilo",
          "perezoso",
          "estricto",
        ],
        accept: [
          "estricto",
        ],
        answer: "Estricto means strict: un profesor estricto. Estrecho looks similar but means narrow; tranquilo is calm and perezoso is lazy.",
      },
      {
        question: "What does 'el aula' mean?",
        choices: [
          "hall",
          "library",
          "classroom",
          "playground",
        ],
        accept: [
          "classroom",
        ],
        answer: "El aula is a classroom (a feminine noun that takes el). The library is la biblioteca and the playground el patio.",
      },
      {
        question: "Which Spanish word means 'pencil case'?",
        choices: [
          "la regla",
          "la goma",
          "el lápiz",
          "el estuche",
        ],
        accept: [
          "el estuche",
        ],
        answer: "El estuche is the pencil case. La regla is a ruler, la goma is a rubber and el lápiz is a pencil.",
      },
      {
        question: "Which Spanish word means 'the pencil'?",
        choices: [
          "el lápiz",
          "el estuche",
          "la goma",
          "la regla",
        ],
        accept: [
          "el lápiz",
        ],
        answer: "El lápiz is a pencil (plural los lápices). El estuche is the pencil case, la goma is a rubber and la regla is a ruler.",
      },
      {
        question: "In Spanish, what time is 'Son las cinco y cuarto'?",
        choices: [
          "quarter to five",
          "quarter past five",
          "half past five",
          "quarter to six",
        ],
        accept: [
          "quarter past five",
        ],
        answer: "Y cuarto means a quarter past, so this is quarter past five. Quarter to six would be las seis menos cuarto, and half past five is las cinco y media.",
      },
      {
        question: "What does the Spanish word 'la pizarra' mean in a classroom?",
        choices: [
          "the desk",
          "the board",
          "the classroom",
          "the window",
        ],
        accept: [
          "the board",
        ],
        answer: "La pizarra is the board the teacher writes on. The desk is el pupitre or la mesa, the classroom is el aula and the window is la ventana.",
      },
    ],
    misconceptions: [
      {
        wrong: "'Las matemáticas' should take a singular verb because 'maths' is singular in English.",
        right: "Matemáticas is grammatically plural in Spanish, so it always takes gustan, son, and other plural verb forms, even though the English translation is singular.",
      },
      {
        wrong: "Opinion adjectives go before the noun in Spanish, just like in English.",
        right: "Descriptive adjectives like interesante and aburrida normally follow the noun — una clase aburrida, not una aburrida clase.",
      },
      {
        wrong: "Every clock hour uses 'son las' in Spanish.",
        right: "One o'clock is the sole exception and uses the singular Es la una, because una hora (one hour) is singular; every other hour correctly uses the plural son.",
      },
      {
        wrong: "Giving a bare opinion like 'me gusta el arte' earns the same marks as a justified one.",
        right: "GCSE writing and speaking mark schemes specifically reward opinions followed by a reason with porque, so an unjustified opinion is a missed opportunity for extra marks.",
      },
    ],
  },

  "spanish/home-and-daily-routine": {
    summary:
      "This topic covers vocabulary for the rooms of a house, reflexive verbs for describing a daily routine (levantarse, ducharse, acostarse), telling the time, and the sequencing words — primero, luego, después, finalmente — that link routine actions together into a fluent paragraph rather than a disconnected list.",
    keyFacts: [
      {
        heading: "Rooms of the house",
        points: [
          "Main rooms: la cocina (kitchen), el salón (living room), el dormitorio (bedroom), el cuarto de baño (bathroom), el jardín (garden).",
          "Vivo en una casa/un piso (I live in a house/a flat) — piso is the standard word for 'flat/apartment' in Spain; Latin America often uses apartamento instead.",
          "En mi casa hay... (in my house there is/are...) uses hay, the invariable form of haber meaning 'there is/are', for both singular and plural.",
          "Prepositions of place combine with rooms to describe location: al lado de (next to), enfrente de (opposite), entre (between).",
        ],
      },
      {
        heading: "Reflexive verbs for daily routine",
        points: [
          "Reflexive verbs need a reflexive pronoun that matches the subject: me, te, se, nos, os, se — levantarse conjugates as me levanto, te levantas, se levanta, nos levantamos, os levantáis, se levantan.",
          "Common routine reflexives: levantarse (to get up), ducharse (to shower), vestirse (to get dressed), acostarse (to go to bed), despertarse (to wake up).",
          "Vestirse and despertarse are also radical-changing (e→i and e→ie), so the stem changes as well as adding the reflexive pronoun: me visto, me despierto.",
          "The reflexive pronoun normally goes immediately before the conjugated verb: Me levanto a las siete (I get up at seven).",
        ],
      },
      {
        heading: "Telling the time for a routine",
        points: [
          "A las + time states when something happens: Me ducho a las siete y media (I shower at half past seven).",
          "De la mañana/de la tarde/de la noche clarify AM/PM-style meaning when needed: a las ocho de la mañana (at eight in the morning).",
          "Por la mañana/por la tarde/por la noche describe a general part of the day without a specific time: Ceno por la noche (I have dinner in the evening).",
          "The 24-hour clock is common in formal/written Spanish timetables: a las veinte horas (at 20:00/8pm).",
        ],
      },
      {
        heading: "Sequencing words",
        points: [
          "Primero (first) opens a sequence of routine actions in a paragraph.",
          "Luego and después both mean 'then/after' and are largely interchangeable, giving useful variety in a piece of writing.",
          "Más tarde (later) can be used mid-sequence for a less immediate 'then'.",
          "Finalmente or por último (finally/lastly) closes a sequence, signalling the last action in the routine.",
        ],
      },
    ],
    flashcards: [
      { term: "el salón", definition: "Living room — also called la sala in some Latin American countries." },
      { term: "el dormitorio", definition: "Bedroom — also called la habitación in everyday speech." },
      { term: "el cuarto de baño", definition: "Bathroom — often shortened to el baño in everyday speech." },
      { term: "levantarse", definition: "To get up — reflexive verb, conjugates as me levanto, te levantas, se levanta..." },
      { term: "ducharse", definition: "To shower — reflexive verb; note ducha (shower, noun) has no reflexive pronoun by itself." },
      { term: "vestirse", definition: "To get dressed — reflexive AND radical-changing (e→i): me visto, te vistes, se viste." },
      { term: "acostarse", definition: "To go to bed — reflexive AND radical-changing (o→ue): me acuesto, te acuestas, se acuesta." },
      { term: "despertarse", definition: "To wake up — reflexive AND radical-changing (e→ie): me despierto, te despiertas, se despierta." },
      { term: "hay", definition: "There is / there are — the invariable form of haber, used for both singular and plural." },
      { term: "primero", definition: "First — used to open a sequence of actions." },
      { term: "luego", definition: "Then, next — interchangeable with después for variety." },
      { term: "finalmente / por último", definition: "Finally, lastly — used to close a sequence of actions." },
      { term: "al lado de", definition: "Next to — a preposition of place used to describe where a room or object is." },
      { term: "desayunar", definition: "To have breakfast — not reflexive, unlike many other daily-routine verbs." },
    ],
    examTips: [
      {
        tip: "Never forget the reflexive pronoun with routine verbs.",
        detail: "Levanto a las siete (missing 'me') is incomplete Spanish — it must be Me levanto a las siete, since the pronoun is part of the verb's meaning, not optional.",
      },
      {
        tip: "Check whether a routine verb is also radical-changing, not just reflexive.",
        detail: "Vestirse and acostarse both need a stem change AND a reflexive pronoun at the same time — me visto, me acuesto — students often remember one and forget the other.",
      },
      {
        tip: "Use sequencing words to turn a list of sentences into a connected paragraph.",
        detail: "Primero me levanto, luego me ducho, después desayuno, finalmente salgo de casa scores far higher for structure than four separate unlinked sentences with the same content.",
      },
      {
        tip: "Distinguish por la mañana (general) from de la mañana (with a specific time).",
        detail: "Por la mañana desayuno (in the morning, I have breakfast) doesn't give a time; a las ocho de la mañana specifies the exact hour — mixing these up is a common word-choice error.",
      },
      {
        tip: "Remember hay never changes form for singular or plural.",
        detail: "Hay una cocina and hay tres dormitorios both use hay — unlike most Spanish verbs, it doesn't conjugate to agree with what follows it.",
      },
      {
        tip: "Reorder your daily routine paragraph using time markers, not just verb order.",
        detail: "Combining a las siete y media, primero and luego in the same paragraph shows a wider range of language than relying on sequencing words alone.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'Me despierto a las seis y media y luego me ducho.'",
        accept: ["i wake up at half past six and then i shower", "i wake up at half six and then i have a shower"],
        answer: "I wake up at half past six and then I shower — despierto is the reflexive, radical-changing form of despertarse, and luego links the two actions in sequence.",
      },
      {
        question: "Translate into Spanish: 'First I get dressed, then I have breakfast.'",
        accept: ["primero me visto, luego desayuno", "primero me visto, después desayuno"],
        answer: "Primero me visto, luego desayuno — visto is the radical-changing reflexive form of vestirse, and desayunar is not reflexive.",
      },
      {
        question: "Complete with the correct form of acostarse: 'Yo ____ a las diez de la noche.'",
        accept: ["me acuesto"],
        answer: "Me acuesto — the reflexive, radical-changing (o→ue) 'yo' form of acostarse, needed for 'I go to bed at ten at night'.",
      },
      {
        question: "Complete with the correct form of ducharse: 'Ella ____ todas las mañanas.'",
        accept: ["se ducha"],
        answer: "Se ducha — the third-person singular reflexive form of ducharse, used here to say 'she showers every morning'.",
      },
      {
        question: "Complete with the correct form of levantarse: 'Nosotros ____ temprano los lunes.'",
        accept: ["nos levantamos"],
        answer: "Nos levantamos — the 'we' reflexive form of levantarse, used here to say 'we get up early on Mondays'.",
      },
      {
        question: "Which of these is NOT reflexive?",
        choices: ["desayunar", "levantarse", "ducharse", "acostarse"],
        accept: ["desayunar"],
        answer: "Desayunar (to have breakfast) is a regular, non-reflexive verb, while levantarse, ducharse and acostarse all require a reflexive pronoun.",
      },
      {
        question: "Which word correctly means 'there is/are'?",
        choices: ["hay", "es", "está", "tiene"],
        accept: ["hay"],
        answer: "Hay is the invariable form of haber used for 'there is/are', unlike es and está which mean 'is' in different senses, and tiene which means 'has'.",
      },
      {
        question: "In the sentence 'Primero me levanto, luego me visto', what part of speech is 'primero'?",
        choices: ["An adverb", "A noun", "An adjective", "A verb"],
        accept: ["An adverb"],
        answer: "Primero here modifies the whole clause to show sequence in time, which is the job of an adverb, not a noun or adjective describing a specific thing.",
      },
      {
        question: "Which reflexive pronoun matches the subject 'vosotros'?",
        choices: ["os", "se", "nos", "te"],
        accept: ["os"],
        answer: "Os is the reflexive pronoun for vosotros (informal 'you all', used in Spain). Se is for él/ella/ellos, nos is for nosotros, and te is for tú.",
      },
      {
        question: "Which of these is the odd one out?",
        choices: ["el salón", "el dormitorio", "la cocina", "primero"],
        accept: ["primero"],
        answer: "Primero (first) is a sequencing adverb, while el salón, el dormitorio and la cocina are all rooms of the house.",
      },
      {
        question: "Give one Spanish phrase that means 'in the evening' without giving a specific clock time.",
        accept: ["por la noche"],
        answer: "Por la noche means 'in the evening/at night' as a general part of the day, contrasting with de la noche, which is used after a specific hour.",
      },
      {
        question: "Translate into Spanish: 'In my house there are four bedrooms and a garden.'",
        accept: ["en mi casa hay cuatro dormitorios y un jardín", "en mi casa hay cuatro dormitorios y un jardin"],
        answer: "En mi casa hay cuatro dormitorios y un jardín — hay doesn't change even though dormitorios is plural, because hay is always invariable.",
      },
      {
        question: "Complete with the correct form of vestirse: 'Tú ____ muy rápido por la mañana.'",
        accept: ["te vistes"],
        answer: "Te vistes — the reflexive, radical-changing (e→i) tú form of vestirse, used to say 'you get dressed very quickly in the morning'.",
      },
      {
        question: "Choose the correctly ordered sequence of routine actions.",
        choices: ["Primero me levanto, luego desayuno, finalmente salgo de casa.", "Finalmente me levanto, primero desayuno, luego salgo de casa.", "Salgo de casa, primero desayuno, luego me levanto.", "Luego me levanto, finalmente desayuno, primero salgo de casa."],
        accept: ["Primero me levanto, luego desayuno, finalmente salgo de casa."],
        answer: "Primero me levanto, luego desayuno, finalmente salgo de casa follows the logical order first–then–finally, matching the real sequence of a morning routine.",
      },
      {
        question: "Write a short paragraph in Spanish describing your daily routine from waking up to leaving the house, using at least three sequencing words.",
        answer:
          "There's no single right answer — mark this one yourself. A strong answer uses correctly conjugated reflexive verbs (me despierto, me levanto, me visto), at least one specific time with a las, and three or more sequencing words such as primero, luego and finalmente.",
      },
      {
        question: "Explain in English why reflexive verbs like levantarse need an extra pronoun that ordinary verbs like desayunar don't.",
        answer:
          "Mark it yourself against this: reflexive verbs describe an action the subject does to themselves, so the reflexive pronoun (me/te/se/nos/os/se) shows the action reflects back onto the subject — levantarse literally means 'to get oneself up' — whereas desayunar (to have breakfast) doesn't involve acting on oneself, so it needs no extra pronoun.",
      },
      {
        question: "What does 'el dormitorio' mean?",
        choices: [
          "dining room",
          "living room",
          "bedroom",
          "bathroom",
        ],
        accept: [
          "bedroom",
        ],
        answer: "El dormitorio is a bedroom. The dining room is el comedor, the living room el salón and the bathroom el cuarto de baño.",
      },
      {
        question: "What does 'despertarse' mean?",
        choices: [
          "to get up",
          "to wake up",
          "to go to bed",
          "to get dressed",
        ],
        accept: [
          "to wake up",
        ],
        answer: "Despertarse is to wake up; levantarse (to get up) is the common mix-up. To go to bed is acostarse and to get dressed vestirse.",
      },
      {
        question: "Which completes 'Me ___ a las siete' (vestirse)?",
        choices: [
          "visto",
          "vesto",
          "viste",
          "vestimos",
        ],
        accept: [
          "visto",
        ],
        answer: "Vestirse is an e→i stem-changing verb, so the yo form is me visto. Vesto doesn't exist, viste is he/she and vestimos is we.",
      },
      {
        question: "What does 'luego' mean in a daily routine?",
        choices: [
          "first",
          "finally",
          "before",
          "then",
        ],
        accept: [
          "then",
        ],
        answer: "Luego means then or later, used to sequence actions. First is primero, finally is por último or finalmente, and before is antes.",
      },
      {
        question: "What does 'desayunar' mean?",
        choices: [
          "to have lunch",
          "to have dinner",
          "to have a snack",
          "to have breakfast",
        ],
        accept: [
          "to have breakfast",
        ],
        answer: "Desayunar is to have breakfast. To have lunch is comer or almorzar, to have dinner is cenar and to have a snack is merendar.",
      },
      {
        question: "Which word means 'kitchen'?",
        choices: [
          "el comedor",
          "el jardín",
          "la cocina",
          "el salón",
        ],
        accept: [
          "la cocina",
        ],
        answer: "La cocina is the kitchen. El comedor is the dining room, el jardín the garden and el salón the living room.",
      },
      {
        question: "Which word completes 'Normalmente ___ ducho a las ocho'?",
        choices: [
          "te",
          "me",
          "se",
          "nos",
        ],
        accept: [
          "me",
        ],
        answer: "Ducho ends in -o, so the subject is yo and the pronoun is me. Te goes with tú, se with él/ella and nos with nosotros.",
      },
      {
        question: "What does 'Me acuesto a las once' mean?",
        choices: [
          "I go to bed at 11",
          "I get up at 11",
          "I wake up at 11",
          "I shower at 11",
        ],
        accept: [
          "I go to bed at 11",
        ],
        answer: "Me acuesto is from acostarse (o→ue), to go to bed. I get up is me levanto and I wake up is me despierto.",
      },
      {
        question: "What does 'Vivo en un piso' mean?",
        choices: [
          "I live in a flat",
          "I live in a house",
          "I live on a farm",
          "I live in a village",
        ],
        accept: [
          "I live in a flat",
        ],
        answer: "Un piso is a flat or apartment. A house is una casa, a farm una granja and a village un pueblo.",
      },
      {
        question: "What does 'lavarse los dientes' mean?",
        choices: [
          "to wash your hands",
          "to wash your face",
          "to comb your hair",
          "to brush your teeth",
        ],
        accept: [
          "to brush your teeth",
        ],
        answer: "Lavarse los dientes is to brush (literally wash) your teeth. Spanish uses los with body parts, not 'your'. Hands are las manos and face la cara.",
      },
      {
        question: "What does 'el comedor' mean in a Spanish house?",
        choices: [
          "the dining room",
          "the kitchen",
          "the living room",
          "the hallway",
        ],
        accept: [
          "the dining room",
        ],
        answer: "El comedor is the dining room, from comer (to eat). The kitchen is la cocina and the living room is el salón.",
      },
      {
        question: "What does the Spanish reflexive verb 'peinarse' mean?",
        choices: [
          "to wash your face",
          "to get dressed",
          "to comb your hair",
          "to shave",
        ],
        accept: [
          "to comb your hair",
        ],
        answer: "Peinarse means to comb or brush your hair (me peino). To get dressed is vestirse, to shave is afeitarse and to wash your face is lavarse la cara.",
      },
      {
        question: "Which Spanish word means 'upstairs'?",
        choices: [
          "abajo",
          "dentro",
          "arriba",
          "fuera",
        ],
        accept: [
          "arriba",
        ],
        answer: "Arriba means upstairs or up, as in mi dormitorio está arriba. Abajo is the opposite (downstairs), dentro is inside and fuera is outside.",
      },
      {
        question: "In Spanish, which pronoun completes '___ levantamos a las siete'?",
        choices: [
          "os",
          "se",
          "me",
          "nos",
        ],
        accept: [
          "nos",
        ],
        answer: "Levantamos is the nosotros form, so it needs nos: nos levantamos, we get up. Os goes with vosotros, se with él or ellos, and me with yo.",
      },
    ],
    misconceptions: [
      {
        wrong: "Reflexive pronouns are optional extras that can be dropped without changing the meaning.",
        right: "The reflexive pronoun is a required part of the verb's structure — dropping it, as in Levanto a las siete instead of Me levanto a las siete, produces incomplete or incorrect Spanish.",
      },
      {
        wrong: "Vestirse and acostarse only need a reflexive pronoun, with no other change to the verb.",
        right: "Both are also radical-changing verbs, so the stem vowel changes as well as adding the pronoun — me visto (not 'me vesto'), me acuesto (not 'me acosto' as a mistaken non-changing form).",
      },
      {
        wrong: "Hay changes to a plural form when followed by a plural noun, like other verbs agreeing with their subject.",
        right: "Hay is invariable and never changes, whether followed by a singular or plural noun: hay una cocina and hay tres dormitorios both use the exact same word.",
      },
      {
        wrong: "Por la mañana and de la mañana mean exactly the same thing and can be swapped freely.",
        right: "Por la mañana describes a general part of the day with no specific time (in the morning), while de la mañana attaches to a specific clock hour (a las ocho de la mañana, at eight in the morning) — they aren't interchangeable.",
      },
    ],
  },

  "spanish/grammar-toolkit-1": {
    summary:
      "This is a dedicated grammar reference topic covering the present tense in full: regular -ar/-er/-ir conjugation patterns side by side, the key irregular verbs ser, estar, tener, ir, hacer, querer and poder, radical-changing (stem-changing) verbs, reflexive verb conjugation, and the crucial ser vs estar distinction between permanent characteristics and temporary states or location.",
    keyFacts: [
      {
        heading: "Regular -ar, -er, -ir conjugation patterns",
        points: [
          "-ar verbs (e.g. hablar, to speak): hablo, hablas, habla, hablamos, habláis, hablan.",
          "-er verbs (e.g. comer, to eat): como, comes, come, comemos, coméis, comen.",
          "-ir verbs (e.g. vivir, to live): vivo, vives, vive, vivimos, vivís, viven.",
          "The yo, tú and él/ella endings are the same shape across -er and -ir verbs (-o, -es/-es, -e/-e); the difference between the two groups only shows up in nosotros/vosotros (-emos/-éis vs -imos/-ís).",
        ],
      },
      {
        heading: "Key irregular verbs",
        points: [
          "Ser (to be, lasting): soy, eres, es, somos, sois, son.",
          "Estar (to be, temporary/location): estoy, estás, está, estamos, estáis, están.",
          "Tener (to have): tengo, tienes, tiene, tenemos, tenéis, tienen — irregular in yo (tengo) and stem-changing e→ie elsewhere except nosotros/vosotros.",
          "Ir (to go): voy, vas, va, vamos, vais, van — one of the most irregular verbs in Spanish, sharing no pattern with -ir verbs at all.",
          "Hacer (to do/make): hago, haces, hace, hacemos, hacéis, hacen — irregular only in the yo form (hago); everything else is regular -er.",
          "Querer (to want, e→ie) and poder (to be able to/can, o→ue) are both radical-changing rather than fully irregular — see the row below.",
        ],
      },
      {
        heading: "Radical-changing (stem-changing) verbs",
        points: [
          "Radical-changing verbs change a vowel in the stem in all forms except nosotros and vosotros, where the stem stays the same as the infinitive.",
          "e→ie: querer becomes quiero, quieres, quiere, queremos, queréis, quieren.",
          "o→ue: poder becomes puedo, puedes, puede, podemos, podéis, pueden; jugar is the odd one out with u→ue: juego, juegas, juega, jugamos, jugáis, juegan.",
          "e→i: pedir becomes pido, pides, pide, pedimos, pedís, piden — this pattern is common in -ir verbs specifically.",
        ],
      },
      {
        heading: "Reflexive verb conjugation",
        points: [
          "Reflexive verbs pair a reflexive pronoun (me, te, se, nos, os, se) with the normally conjugated verb: llamarse → me llamo, te llamas, se llama, nos llamamos, os llamáis, se llaman.",
          "The reflexive pronoun always matches the subject doing the action, and normally sits directly before the conjugated verb.",
          "Some reflexive verbs are also radical-changing, combining both patterns at once: despertarse (e→ie) → me despierto, te despiertas, se despierta.",
          "In an infinitive construction (e.g. after querer or ir a), the reflexive pronoun can attach to the end of the infinitive instead: Voy a levantarme temprano (I'm going to get up early) is as correct as Me voy a levantar temprano.",
        ],
      },
      {
        heading: "Ser vs estar",
        points: [
          "Ser is for permanent or defining characteristics: identity, nationality, physical description, personality, time and dates — Soy alto, Es profesor, Son las tres.",
          "Estar is for temporary states, feelings, conditions and location — Estoy cansado (I'm tired), Está en Madrid (it's/he's in Madrid), Estamos contentos (we're happy).",
          "Location always uses estar, even for something that never moves: Madrid está en España, not Madrid es en España.",
          "The same adjective can change meaning depending on which verb is used: Es aburrido (he/she/it is boring, a permanent trait) versus Está aburrido (he/she is bored, a temporary feeling).",
        ],
      },
    ],
    flashcards: [
      { term: "hablar", definition: "To speak — regular -ar verb: hablo, hablas, habla, hablamos, habláis, hablan." },
      { term: "comer", definition: "To eat — regular -er verb: como, comes, come, comemos, coméis, comen." },
      { term: "vivir", definition: "To live — regular -ir verb: vivo, vives, vive, vivimos, vivís, viven." },
      { term: "ser", definition: "To be (permanent) — irregular: soy, eres, es, somos, sois, son." },
      { term: "estar", definition: "To be (temporary/location) — irregular: estoy, estás, está, estamos, estáis, están." },
      { term: "ir", definition: "To go — highly irregular: voy, vas, va, vamos, vais, van." },
      { term: "querer", definition: "To want — radical-changing e→ie: quiero, quieres, quiere, queremos, queréis, quieren." },
      { term: "poder", definition: "To be able to / can — radical-changing o→ue: puedo, puedes, puede, podemos, podéis, pueden." },
      { term: "pedir", definition: "To ask for / order — radical-changing e→i: pido, pides, pide, pedimos, pedís, piden." },
      { term: "hacer", definition: "To do / make — irregular only in the yo form: hago; all other forms are regular -er (haces, hace, hacemos, hacéis, hacen)." },
      { term: "llamarse", definition: "To be called (reflexive) — me llamo, te llamas, se llama, nos llamamos, os llamáis, se llaman." },
      { term: "el infinitivo", definition: "The infinitive — the unconjugated 'to...' form of a verb, e.g. hablar, comer, vivir, ending in -ar, -er or -ir." },
      { term: "el verbo reflexivo", definition: "Reflexive verb — a verb that needs a reflexive pronoun (me/te/se/nos/os/se) matching its subject, e.g. levantarse." },
      { term: "el verbo irregular", definition: "Irregular verb — a verb that doesn't follow the standard -ar/-er/-ir conjugation pattern, e.g. ser, ir, tener." },
    ],
    examTips: [
      {
        tip: "Learn ser and estar as a pair, testing yourself on which one fits each sentence.",
        detail: "Confusing ser and estar is one of the single most common GCSE Spanish errors — practise minimal pairs like Es aburrido vs Está aburrido until the difference in meaning feels automatic.",
      },
      {
        tip: "Spot radical-changing verbs by testing all six forms, not just yo.",
        detail: "The stem change disappears in nosotros and vosotros (queremos, podemos, pedimos keep the original vowel), so a full conjugation check catches mistakes a quick glance at 'quiero' alone would miss.",
      },
      {
        tip: "Remember hacer is irregular in only one form.",
        detail: "Hago is the sole irregular form of hacer — haces, hace, hacemos, hacéis and hacen all follow the completely regular -er pattern, so don't over-correct forms that are already right.",
      },
      {
        tip: "Location is always estar, with no exceptions, even for fixed things like cities and countries.",
        detail: "Madrid está en España is correct; Madrid es en España is a very common but always-wrong error, because location uses estar regardless of whether the thing described ever moves.",
      },
      {
        tip: "Attach reflexive pronouns to an infinitive after querer, poder or ir a for a more natural, higher-level style.",
        detail: "Quiero levantarme temprano and Me quiero levantar temprano are both correct, but examiners like seeing the pronoun-attached form as it shows confident control of the structure.",
      },
      {
        tip: "Build a personal chart of the six irregular 'must-know' verbs and drill it weekly.",
        detail: "Ser, estar, tener, ir, hacer, querer and poder appear constantly across every GCSE topic — a five-minute weekly drill of their full conjugations pays off far more than cramming them once before the exam.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'Quiero ir al cine, pero no puedo porque tengo deberes.'",
        accept: ["i want to go to the cinema, but i can't because i have homework", "i want to go to the cinema but i cannot because i have homework"],
        answer: "I want to go to the cinema, but I can't because I have homework — quiero and puedo are both radical-changing 'yo' forms, of querer (e→ie) and poder (o→ue) respectively.",
      },
      {
        question: "Translate into Spanish: 'My sister is tired today.'",
        accept: ["mi hermana está cansada hoy"],
        answer: "Mi hermana está cansada hoy — tiredness is a temporary state, so estar is required, not ser, and cansada agrees with the feminine subject.",
      },
      {
        question: "Complete with the correct form of ir: 'Nosotros ____ al parque los domingos.'",
        accept: ["vamos"],
        answer: "Vamos — the 'we' form of the highly irregular verb ir, used here to say 'we go to the park on Sundays'.",
      },
      {
        question: "Complete with the correct form of poder: 'Ella no ____ venir a la fiesta.'",
        accept: ["puede"],
        answer: "Puede — the third-person singular, radical-changing (o→ue) form of poder, used for 'she can't come to the party'.",
      },
      {
        question: "Complete with the correct form of hacer: 'Vosotros ____ mucho ruido.'",
        accept: ["hacéis", "haceis"],
        answer: "Hacéis — the vosotros form of hacer; unlike the irregular yo form (hago), this form follows the completely regular -er pattern.",
      },
      {
        question: "Which verb correctly completes: 'Madrid ____ en España.' (location)",
        choices: ["está", "es", "tiene", "hay"],
        accept: ["está"],
        answer: "Está is correct — location always uses estar in Spanish, never ser, even for something permanent and unmoving like a city's location.",
      },
      {
        question: "Which of these is a radical-changing (o→ue) verb?",
        choices: ["poder", "vivir", "ser", "hacer"],
        accept: ["poder"],
        answer: "Poder changes o to ue in all forms except nosotros/vosotros: puedo, puedes, puede, podemos, podéis, pueden. Vivir is fully regular, and ser/hacer are irregular in different ways.",
      },
      {
        question: "In the sentence 'Está aburrido hoy', what does 'está' signal about the meaning of 'aburrido'?",
        choices: ["A temporary feeling (bored)", "A permanent trait (boring)", "A location", "A possession"],
        accept: ["A temporary feeling (bored)"],
        answer: "Using estar with aburrido gives the temporary-feeling meaning 'he is bored today', as opposed to es aburrido, which would describe a permanent trait meaning 'he is a boring person'.",
      },
      {
        question: "Which pronoun matches the reflexive verb form 'se levanta'?",
        choices: ["él/ella", "yo", "tú", "nosotros"],
        accept: ["él/ella"],
        answer: "Se levanta is the third-person singular reflexive form, matching él or ella. Yo would be me levanto, tú would be te levantas, and nosotros would be nos levantamos.",
      },
      {
        question: "Which of these -ir verbs follows the e→i radical-changing pattern?",
        choices: ["pedir", "vivir", "escribir", "abrir"],
        accept: ["pedir"],
        answer: "Pedir changes e to i in most forms (pido, pides, pide, pedimos, pedís, piden). Vivir, escribir and abrir are all fully regular -ir verbs.",
      },
      {
        question: "Give one Spanish verb that is irregular ONLY in its yo form.",
        accept: ["hacer"],
        answer: "Hacer is irregular only in the yo form (hago) — every other person (haces, hace, hacemos, hacéis, hacen) follows the standard regular -er pattern.",
      },
      {
        question: "Translate into Spanish: 'We are students and we are happy.'",
        accept: ["somos estudiantes y estamos contentos", "somos estudiantes y estamos contentas"],
        answer: "Somos estudiantes y estamos contentos — ser is used for the lasting identity 'students', while estar is used for the temporary feeling 'happy'.",
      },
      {
        question: "Complete with the correct form of querer: 'Tú ____ aprender español.'",
        accept: ["quieres"],
        answer: "Quieres — the radical-changing (e→ie) tú form of querer, used for 'you want to learn Spanish'.",
      },
      {
        question: "Which verb form correctly completes the reflexive sentence: 'Yo ____ a las siete.' (despertarse)",
        choices: ["me despierto", "me despierta", "te despiertas", "se despierta"],
        accept: ["me despierto"],
        answer: "Me despierto is the correct reflexive, radical-changing (e→ie) yo form of despertarse, needed for 'I wake up at seven'.",
      },
      {
        question: "Write out the full present-tense conjugation of a regular -er verb of your choice (all six persons), and explain in English which forms overlap with -ir verbs and which don't.",
        answer:
          "There's no single right answer — mark this one yourself. A correct answer gives all six forms (e.g. como, comes, come, comemos, coméis, comen for comer) and notes that yo/tú/él/ella endings match -ir verbs exactly, while nosotros (-emos vs -imos) and vosotros (-éis vs -ís) differ between the two groups.",
      },
      {
        question: "Explain in English the core difference between ser and estar, with one example sentence for each.",
        answer:
          "Mark it yourself against this: ser describes permanent or defining characteristics such as identity, nationality, appearance and time (e.g. Soy inglés), while estar describes temporary states, feelings and location (e.g. Estoy cansado, Está en Londres) — a correct answer gives one clear original example sentence for each verb.",
      },
      {
        question: "Which completes 'Ellos ___ en Londres' (vivir)?",
        choices: [
          "vivan",
          "vivís",
          "viven",
          "vivimos",
        ],
        accept: [
          "viven",
        ],
        answer: "Viven is the ellos form of the -ir verb vivir. Vivís is vosotros, vivimos is nosotros and vivan is a subjunctive form.",
      },
      {
        question: "What is the yo form of 'hacer' in the present?",
        choices: [
          "hazo",
          "hago",
          "haco",
          "hace",
        ],
        accept: [
          "hago",
        ],
        answer: "Hacer is irregular only in the yo form: hago. The rest are regular: haces, hace, hacemos. Hace means he/she does.",
      },
      {
        question: "Which completes '¿Tú ___ español?' (hablar)?",
        choices: [
          "habla",
          "hablas",
          "hables",
          "hablo",
        ],
        accept: [
          "hablas",
        ],
        answer: "For tú, drop -ar and add -as: hablas. Habla is él/ella/usted, hablo is yo, and hables is a subjunctive form.",
      },
      {
        question: "Which completes 'Nosotros ___ fruta' (comer)?",
        choices: [
          "comemos",
          "coméis",
          "comen",
          "como",
        ],
        accept: [
          "comemos",
        ],
        answer: "Regular -er verbs take -emos for nosotros: comemos. Coméis is vosotros, comen is ellos and como is yo.",
      },
      {
        question: "Which completes 'Mi padre ___ profesor' (job)?",
        choices: [
          "está",
          "hay",
          "tiene",
          "es",
        ],
        accept: [
          "es",
        ],
        answer: "Jobs take ser: mi padre es profesor. Estar is for location and temporary states, so está profesor is wrong.",
      },
      {
        question: "Which completes 'Yo ___ al instituto en autobús' (ir)?",
        choices: [
          "va",
          "vas",
          "voy",
          "vamos",
        ],
        accept: [
          "voy",
        ],
        answer: "Voy is the irregular yo form of ir. Vas is tú, va is él/ella and vamos is nosotros.",
      },
      {
        question: "Which completes 'Siempre ___ pizza' (pedir, yo)?",
        choices: [
          "pide",
          "piden",
          "pido",
          "pedimos",
        ],
        accept: [
          "pido",
        ],
        answer: "Pedir changes e→i in the stem, so yo is pido. Pedimos keeps the e because nosotros and vosotros don't change.",
      },
      {
        question: "Which infinitive does 'puedo' come from?",
        choices: [
          "puder",
          "poder",
          "pueder",
          "poner",
        ],
        accept: [
          "poder",
        ],
        answer: "Puedo is from poder, an o→ue stem-changer. Poner is a different verb (to put) whose yo form is pongo.",
      },
      {
        question: "Which completes 'Vosotros ___ simpáticos' (ser)?",
        choices: [
          "sois",
          "son",
          "eres",
          "somos",
        ],
        accept: [
          "sois",
        ],
        answer: "Sois is the vosotros form of ser. Son is ellos/ustedes, eres is tú and somos is nosotros.",
      },
      {
        question: "Which word completes '¿Cómo ___ llamáis?'",
        choices: [
          "se",
          "nos",
          "te",
          "os",
        ],
        accept: [
          "os",
        ],
        answer: "Llamáis is the vosotros form, so the reflexive pronoun is os. Se goes with él/ellos, nos with nosotros and te with tú.",
      },
      {
        question: "What is the yo form of 'salir' in the present?",
        choices: [
          "salo",
          "sigo",
          "salgo",
          "sale",
        ],
        accept: [
          "salgo",
        ],
        answer: "Salir adds a g in the yo form only: salgo, like hago and pongo. Sale is the él form and sigo comes from seguir.",
      },
      {
        question: "What is the 'ellos' form of the Spanish verb 'ser' in the present?",
        choices: [
          "están",
          "son",
          "somos",
          "es",
        ],
        accept: [
          "son",
        ],
        answer: "Son is the ellos form of ser: ellos son altos. Están is the ellos form of estar, a different verb, while somos is 'we are' and es is 'he/she is'.",
      },
      {
        question: "Which Spanish verb changes e to ie in the present tense?",
        choices: [
          "poder",
          "pedir",
          "comer",
          "querer",
        ],
        accept: [
          "querer",
        ],
        answer: "Querer becomes quiero, quieres, quiere (e to ie). Poder changes o to ue (puedo), pedir changes e to i (pido) and comer is regular.",
      },
      {
        question: "What is the 'yo' form of the Spanish verb 'estar' in the present?",
        choices: [
          "soy",
          "estoy",
          "esto",
          "está",
        ],
        accept: [
          "estoy",
        ],
        answer: "Estoy is 'I am' from estar, like estoy cansado. Soy is 'I am' from ser, está is 'he/she is', and esto is not a verb at all: it means 'this'.",
      },
    ],
    misconceptions: [
      {
        wrong: "Ser and estar are just two different words that both mean 'to be' and can be swapped freely.",
        right: "They are not interchangeable — ser is for lasting characteristics and estar is for temporary states or location, and swapping them can genuinely change or break the meaning of a sentence, as with es aburrido vs está aburrido.",
      },
      {
        wrong: "Radical-changing verbs change their stem vowel in every single form, including nosotros and vosotros.",
        right: "The stem change disappears in nosotros and vosotros, which keep the original infinitive vowel — queremos and podéis, not 'quieremos' or 'puedéis'.",
      },
      {
        wrong: "Hacer is a fully irregular verb like ser or ir, with unpredictable endings throughout.",
        right: "Hacer is irregular only in the yo form (hago); every other person follows the completely standard regular -er conjugation pattern (haces, hace, hacemos, hacéis, hacen).",
      },
      {
        wrong: "-er and -ir verbs conjugate identically across every person in the present tense.",
        right: "They match in yo, tú and él/ella but diverge in nosotros (-emos vs -imos) and vosotros (-éis vs -ís) — comemos/vivimos and coméis/vivís are genuinely different endings.",
      },
      {
        wrong: "Location can use either ser or estar depending on how permanent the place is.",
        right: "Location always uses estar with no exceptions, even for something entirely fixed like a country's location: Madrid está en España, never Madrid es en España.",
      },
    ],
  },

  "spanish/technology-and-social-media": {
    summary:
      "This topic covers vocabulary for devices, apps and the internet, giving opinions on technology and social media, forming comparatives with más...que and menos...que, and using the near future (ir a + infinitive) to talk about how you'll use technology going forward.",
    keyFacts: [
      {
        heading: "Devices and apps",
        points: [
          "Core devices: el móvil/el teléfono (mobile phone), el ordenador (computer), la tableta (tablet), los auriculares (headphones).",
          "El ordenador portátil specifically means 'laptop', while el ordenador de mesa means 'desktop computer'.",
          "Common app/internet nouns: la aplicación/la app (app), la red social (social network), la contraseña (password), el wifi (wifi, invariable).",
          "Descargar (to download) and subir (to upload) are opposite verbs used constantly when talking about apps and files.",
        ],
      },
      {
        heading: "Internet and social media vocabulary",
        points: [
          "Redes sociales (social media) is a plural feminine noun: uso las redes sociales todos los días.",
          "Common verbs: chatear (to chat online), compartir (to share), publicar (to post), comentar (to comment).",
          "Estar conectado/a (to be online/connected) uses estar because being online is a temporary state, not a lasting trait.",
          "El acoso cibernético/el ciberacoso (cyberbullying) and la privacidad (privacy) are useful higher-level vocabulary for discussing the downsides of technology.",
        ],
      },
      {
        heading: "Opinions on technology",
        points: [
          "Standard opinion structures still apply here: Me gusta(n), Odio, Prefiero, followed by porque and a reason.",
          "Útil (useful) and peligroso/a (dangerous) are common adjectives for discussing pros and cons of technology.",
          "Depender de (to depend on) is useful for a nuanced opinion: Dependemos demasiado de la tecnología (we depend too much on technology).",
          "Por un lado... por otro lado... (on one hand... on the other hand...) is a strong structure for balanced opinions on technology's advantages and disadvantages.",
        ],
      },
      {
        heading: "Comparatives and the near future",
        points: [
          "Más...que (more...than) and menos...que (less...than) form comparatives: El móvil es más útil que el ordenador de mesa.",
          "Tan...como (as...as) expresses equality rather than a difference: Instagram es tan popular como TikTok.",
          "Mejor (better) and peor (worse) are irregular comparatives, not más bueno/más malo.",
          "The near future uses ir a + infinitive: Voy a comprar un móvil nuevo (I'm going to buy a new phone) — the conjugated part is always ir, and the second verb stays in the infinitive.",
        ],
      },
    ],
    flashcards: [
      { term: "el móvil", definition: "Mobile phone — in Latin America often called el celular instead." },
      { term: "el ordenador portátil", definition: "Laptop — literally 'portable computer'." },
      { term: "la red social", definition: "Social network/media — plural form las redes sociales is very common." },
      { term: "la contraseña", definition: "Password — needed to log into an app, account or wifi network." },
      { term: "descargar", definition: "To download — the opposite of subir (to upload)." },
      { term: "subir", definition: "To upload — false friend warning: also means 'to go up/climb', context decides the meaning." },
      { term: "compartir", definition: "To share — a regular -ir verb, commonly used for sharing content online." },
      { term: "publicar", definition: "To post (online) — a regular -ar verb used for social media posts." },
      { term: "estar conectado/a", definition: "To be online/connected — uses estar because being online is a temporary state." },
      { term: "el ciberacoso", definition: "Cyberbullying — key higher-level vocabulary for technology downsides." },
      { term: "la privacidad", definition: "Privacy — a common concern raised when discussing social media." },
      { term: "peligroso/a", definition: "Dangerous — a common adjective for discussing technology's downsides." },
      { term: "depender de", definition: "To depend on — always followed by de before the thing depended on." },
      { term: "mejor / peor", definition: "Better / worse — irregular comparatives, not más bueno/más malo." },
    ],
    examTips: [
      {
        tip: "Use mejor/peor instead of más bueno/más malo.",
        detail: "Mejor and peor are the correct irregular comparatives for 'better' and 'worse' — más bueno and más malo are common learner errors that don't exist in standard Spanish.",
      },
      {
        tip: "Keep the second verb in ir a + infinitive constructions unconjugated.",
        detail: "Voy a comprar is correct; voy a compro is not — only ir changes to match the subject, and the following verb always stays in its infinitive (-ar/-er/-ir) form.",
      },
      {
        tip: "Use por un lado... por otro lado... to structure a balanced opinion on technology.",
        detail: "This phrase pair is specifically rewarded in higher-mark writing tasks because it shows you can present two sides of an argument, not just one opinion.",
      },
      {
        tip: "Don't confuse tan...como (equality) with más...que (a genuine difference).",
        detail: "Es tan rápido como mi móvil viejo (as fast as) makes a different claim from Es más rápido que mi móvil viejo (faster than) — check which comparison the English sentence is actually making.",
      },
      {
        tip: "Remember redes sociales is plural, so verbs and adjectives describing it must agree.",
        detail: "Las redes sociales son peligrosas uses the plural son and peligrosas, not the singular es and peligrosa, because redes is a plural noun.",
      },
      {
        tip: "Use estar, not ser, for being online or connected.",
        detail: "Estoy conectado todo el día is correct because being connected is a temporary, changeable state — using ser here would be a classic ser/estar mix-up.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'Voy a descargar la aplicación esta noche.'",
        accept: ["i'm going to download the app tonight", "i am going to download the app tonight"],
        answer: "I'm going to download the app tonight — voy a + infinitive forms the near future, and only voy is conjugated, with descargar staying in the infinitive.",
      },
      {
        question: "Translate into Spanish: 'Social media is more dangerous than useful, in my opinion.'",
        accept: ["las redes sociales son más peligrosas que útiles, en mi opinión", "en mi opinión, las redes sociales son más peligrosas que útiles"],
        answer: "Las redes sociales son más peligrosas que útiles, en mi opinión — más...que forms the comparative, and peligrosas agrees with the plural feminine subject redes sociales.",
      },
      {
        question: "Complete with the correct form of ir: 'Nosotros ____ a comprar un ordenador nuevo.'",
        accept: ["vamos"],
        answer: "Vamos — the 'we' form of ir, used with a + infinitive (comprar) to form the near future 'we are going to buy'.",
      },
      {
        question: "Complete with the correct form of compartir: 'Ellos ____ fotos todos los días.'",
        accept: ["comparten"],
        answer: "Comparten — the third-person plural form of the regular -ir verb compartir, used here for 'they share photos every day'.",
      },
      {
        question: "Which word means 'password'?",
        choices: ["la contraseña", "la aplicación", "el wifi", "la pantalla"],
        accept: ["la contraseña"],
        answer: "La contraseña means password. La aplicación is the app itself, el wifi is wifi, and la pantalla means screen.",
      },
      {
        question: "Which comparative form is irregular?",
        choices: ["mejor", "más útil", "menos peligroso", "tan rápido"],
        accept: ["mejor"],
        answer: "Mejor (better) is an irregular comparative that replaces más bueno. Más útil, menos peligroso and tan rápido all follow the regular comparative patterns.",
      },
      {
        question: "In the sentence 'Voy a comprar un móvil nuevo', what part of speech is 'comprar'?",
        choices: ["A verb (infinitive)", "A noun", "An adjective", "An adverb"],
        accept: ["A verb (infinitive)"],
        answer: "Comprar is a verb in its infinitive form, used after ir a to form the near future. Only voy is conjugated to agree with the subject.",
      },
      {
        question: "Which verb correctly means 'to depend on'?",
        choices: ["depender de", "compartir", "publicar", "descargar"],
        accept: ["depender de"],
        answer: "Depender de means 'to depend on'. Compartir means to share, publicar means to post, and descargar means to download.",
      },
      {
        question: "Which of these is the odd one out?",
        choices: ["descargar", "subir", "la tableta", "publicar"],
        accept: ["la tableta"],
        answer: "La tableta (tablet) is a noun naming a device, while descargar, subir and publicar are all verbs describing online actions.",
      },
      {
        question: "Choose the correct translation of 'Instagram is as popular as TikTok.'",
        choices: ["Instagram es tan popular como TikTok.", "Instagram es más popular que TikTok.", "Instagram es menos popular que TikTok.", "Instagram es el más popular de TikTok."],
        accept: ["Instagram es tan popular como TikTok."],
        answer: "Instagram es tan popular como TikTok uses tan...como to express equality, matching the English 'as...as', unlike más...que or menos...que which express an actual difference.",
      },
      {
        question: "Give one advantage AND one disadvantage of social media in Spanish.",
        accept: ["mantenerse en contacto con amigos and el ciberacoso", "es fácil comunicarse and la privacidad", "compartir fotos and perder tiempo"],
        answer: "Any genuine pair works, for example mantenerse en contacto con amigos (staying in touch with friends) as an advantage and el ciberacoso (cyberbullying) as a disadvantage.",
      },
      {
        question: "Translate into Spanish: 'I depend too much on my mobile phone.'",
        accept: ["dependo demasiado de mi móvil", "dependo demasiado de mi telefono"],
        answer: "Dependo demasiado de mi móvil — dependo is the regular yo form of depender, always paired with de before the thing depended on.",
      },
      {
        question: "Complete with the correct form of publicar: 'Yo ____ una foto cada semana.'",
        accept: ["publico"],
        answer: "Publico — the regular yo form of the -ar-pattern verb publicar, used here for 'I post a photo every week'.",
      },
      {
        question: "Which sentence correctly uses estar rather than ser?",
        choices: ["Estoy conectado todo el día.", "Soy conectado todo el día.", "Es conectado todo el día.", "Somos conectado todo el día."],
        accept: ["Estoy conectado todo el día."],
        answer: "Estoy conectado todo el día is correct because being online/connected is a temporary state, requiring estar rather than ser.",
      },
      {
        question: "Write a short paragraph in Spanish giving a balanced opinion on social media, using por un lado / por otro lado.",
        answer:
          "There's no single right answer — mark this one yourself. A strong answer uses por un lado for one advantage and por otro lado for one disadvantage, with correctly agreeing adjectives and at least one comparative structure such as más...que or tan...como.",
      },
      {
        question: "Explain in English how the near future (ir a + infinitive) is formed, and give one original example sentence.",
        answer:
          "Mark it yourself against this: the near future is formed with the conjugated present tense of ir (voy, vas, va, vamos, vais, van) followed by a and then a second verb left in its unconjugated infinitive form — a correct answer gives one original, grammatically correct example such as Voy a estudiar esta noche.",
      },
      {
        question: "What does 'subir' mean when talking about photos online?",
        choices: [
          "to download",
          "to share",
          "to delete",
          "to upload",
        ],
        accept: [
          "to upload",
        ],
        answer: "Subir (literally to go up) means to upload. To download is descargar, to share is compartir and to delete is borrar.",
      },
      {
        question: "What does 'compartir' mean?",
        choices: [
          "to compare",
          "to post",
          "to share",
          "to chat",
        ],
        accept: [
          "to share",
        ],
        answer: "Compartir means to share. To compare is comparar, a look-alike; to post is publicar and to chat is chatear.",
      },
      {
        question: "Which word means 'laptop'?",
        choices: [
          "el móvil",
          "el portátil",
          "la tableta",
          "el teclado",
        ],
        accept: [
          "el portátil",
        ],
        answer: "El (ordenador) portátil is a laptop, as portátil means portable. El móvil is a mobile phone, la tableta a tablet and el teclado a keyboard.",
      },
      {
        question: "What does 'el ciberacoso' mean?",
        choices: [
          "cyberbullying",
          "hacking",
          "online privacy",
          "cybercafé",
        ],
        accept: [
          "cyberbullying",
        ],
        answer: "El ciberacoso is cyberbullying, since acoso means bullying or harassment. Online privacy would be la privacidad en línea.",
      },
      {
        question: "What does 'peligroso' mean?",
        choices: [
          "dangerous",
          "useful",
          "expensive",
          "addictive",
        ],
        accept: [
          "dangerous",
        ],
        answer: "Peligroso means dangerous (el peligro is danger). Useful is útil, expensive is caro and addictive is adictivo.",
      },
      {
        question: "Which completes 'El móvil es ___ que el portátil'?",
        choices: [
          "mejor útil",
          "tan útil",
          "muy útil",
          "más útil",
        ],
        accept: [
          "más útil",
        ],
        answer: "Más útil que means more useful than. Tan útil needs como, not que, and mejor already means better so it can't go before útil.",
      },
      {
        question: "What does 'la pantalla' mean?",
        choices: [
          "keyboard",
          "mouse",
          "screen",
          "charger",
        ],
        accept: [
          "screen",
        ],
        answer: "La pantalla is the screen. The keyboard is el teclado, the mouse el ratón and a charger el cargador.",
      },
      {
        question: "What does 'Estoy conectado todo el día' mean?",
        choices: [
          "I'm busy all day",
          "I'm online all day",
          "I'm tired all day",
          "I'm at home all day",
        ],
        accept: [
          "I'm online all day",
        ],
        answer: "Estar conectado means to be online or connected. Busy is ocupado, tired is cansado and at home is en casa.",
      },
      {
        question: "'Voy a publicar una foto' is in which tense?",
        choices: [
          "present",
          "near future",
          "preterite",
          "imperfect",
        ],
        accept: [
          "near future",
        ],
        answer: "Voy a + infinitive is the near future: I'm going to post a photo. Only voy is conjugated; publicar stays as the infinitive.",
      },
      {
        question: "What does 'peor' mean?",
        choices: [
          "worse",
          "better",
          "poorer",
          "less",
        ],
        accept: [
          "worse",
        ],
        answer: "Peor means worse, the irregular comparative of malo. Better is mejor, less is menos, and poorer would be más pobre.",
      },
      {
        question: "What does 'el correo electrónico' mean?",
        choices: [
          "a text message",
          "an email",
          "a website",
          "a phone call",
        ],
        accept: [
          "an email",
        ],
        answer: "El correo electrónico is email (correo means post or mail). A text message is un mensaje and a website is una página web.",
      },
      {
        question: "What does the Spanish phrase 'navegar por internet' mean?",
        choices: [
          "to download a file",
          "to surf the internet",
          "to send a message",
          "to post online",
        ],
        accept: [
          "to surf the internet",
        ],
        answer: "Navegar por internet means to surf or browse the internet. Downloading is descargar, sending a message is mandar un mensaje and posting is publicar.",
      },
      {
        question: "Which Spanish word means 'the keyboard'?",
        choices: [
          "el ratón",
          "la pantalla",
          "el teclado",
          "el cargador",
        ],
        accept: [
          "el teclado",
        ],
        answer: "El teclado is the keyboard, from tecla (a key). El ratón is the mouse, la pantalla is the screen and el cargador is the charger.",
      },
      {
        question: "Which Spanish phrase means 'less useful than'?",
        choices: [
          "más útil que",
          "tan útil como",
          "mejor que",
          "menos útil que",
        ],
        accept: [
          "menos útil que",
        ],
        answer: "Menos ... que means less ... than. Más útil que is more useful than, tan útil como is as useful as, and mejor que is better than.",
      },
    ],
    misconceptions: [
      {
        wrong: "The second verb in an ir a + infinitive sentence should also be conjugated to match the subject.",
        right: "Only ir is conjugated (voy, vas, va...); the second verb always stays in its infinitive form — voy a comprar, never voy a compro.",
      },
      {
        wrong: "'Better' and 'worse' are formed with más bueno and más malo, following the regular comparative pattern.",
        right: "Mejor and peor are irregular comparative forms used instead of más bueno/más malo, which don't exist in standard Spanish.",
      },
      {
        wrong: "Tan...como and más...que both simply mean 'more than' with slightly different wording.",
        right: "Tan...como expresses equality ('as...as'), while más...que expresses a genuine difference ('more...than') — they make different claims and aren't interchangeable.",
      },
      {
        wrong: "Being online or connected is a lasting personal trait, so it should use ser.",
        right: "Being connected is a temporary, changeable state, so it correctly uses estar (estoy conectado), following the same logic as other temporary conditions like being tired or happy.",
      },
    ],
  },

  "spanish/customs-festivals-and-celebrations": {
    summary:
      "This topic covers major Spanish and Latin American festivals — Día de los Muertos, Navidad, Semana Santa and las Fallas — alongside general celebration vocabulary, phrases for comparing customs between countries, and direct object pronouns (lo, la, los, las) for referring back to things already mentioned without repeating the noun.",
    keyFacts: [
      {
        heading: "Key festivals",
        points: [
          "El Día de los Muertos (Day of the Dead) is celebrated mainly in Mexico on 1st–2nd November, honouring dead relatives with ofrendas (altars/offerings) rather than mourning them.",
          "La Navidad (Christmas) in Spanish-speaking countries often centres on Nochebuena (Christmas Eve) as the main celebration, with presents traditionally arriving on 6th January, el Día de Reyes (Three Kings' Day).",
          "La Semana Santa (Holy Week/Easter Week) is a major religious festival, especially famous for its solemn street processions in cities like Sevilla.",
          "Las Fallas is a Valencian festival in March featuring giant sculptures (fallas) that are paraded and then ceremonially burned on the final night.",
        ],
      },
      {
        heading: "Celebration vocabulary",
        points: [
          "Celebrar (to celebrate), disfrazarse (to dress up in costume), and reunirse (to get together/gather) are common verbs for describing festivals.",
          "Los fuegos artificiales (fireworks), el desfile (parade) and la procesión (procession) are common festival nouns.",
          "Un regalo (a present) and una tradición (a tradition) are key nouns for discussing what happens during a celebration.",
          "Disfrutar de (to enjoy) is a useful verb for expressing positive feelings about a festival: Disfruto mucho de esta fiesta.",
        ],
      },
      {
        heading: "Comparing customs between countries",
        points: [
          "A diferencia de (unlike, in contrast to) is a strong linking phrase for comparisons: A diferencia del Reino Unido, en México se celebra el Día de los Muertos.",
          "Mientras que (whereas) links two contrasting facts in one sentence: En España se cena tarde, mientras que en el Reino Unido se cena más temprano.",
          "En cambio (on the other hand/by contrast) works as a standalone linking phrase to open a contrasting sentence.",
          "Comparative structures (más...que, menos...que, tan...como) also apply to comparing customs, e.g. La Navidad es más importante que Halloween en muchas familias.",
        ],
      },
      {
        heading: "Direct object pronouns",
        points: [
          "Lo (it, masculine), la (it, feminine), los (them, masculine/mixed), las (them, feminine) replace a noun already mentioned to avoid repetition.",
          "The direct object pronoun goes before the conjugated verb: ¿Ves la procesión? Sí, la veo (Do you see the procession? Yes, I see it).",
          "With an infinitive construction, the pronoun can attach to the end of the infinitive or go before the conjugated verb: Voy a verla / La voy a ver both mean 'I'm going to see it'.",
          "Direct object pronouns must match the gender and number of the noun they replace, not the gender of the speaker.",
        ],
      },
    ],
    flashcards: [
      { term: "el Día de los Muertos", definition: "Day of the Dead — a Mexican festival (1st–2nd November) honouring deceased relatives, celebratory rather than sad in tone." },
      { term: "la ofrenda", definition: "Altar/offering — set up for deceased relatives during Día de los Muertos." },
      { term: "la Nochebuena", definition: "Christmas Eve — the main Christmas celebration in many Spanish-speaking countries." },
      { term: "el Día de Reyes", definition: "Three Kings' Day (6th January) — when presents are traditionally given in Spain." },
      { term: "la Semana Santa", definition: "Holy Week — the week before Easter, marked by religious processions." },
      { term: "las Fallas", definition: "A Valencian festival with giant sculptures that are paraded and burned in March." },
      { term: "disfrazarse", definition: "To dress up / wear a costume — reflexive verb." },
      { term: "el desfile", definition: "Parade — a common feature of many Spanish and Latin American festivals." },
      { term: "los fuegos artificiales", definition: "Fireworks — always plural in Spanish." },
      { term: "reunirse", definition: "To get together, gather — reflexive verb, common for family celebrations." },
      { term: "disfrutar de", definition: "To enjoy — always followed by de before the thing enjoyed." },
      { term: "a diferencia de", definition: "Unlike, in contrast to — used to compare customs between countries." },
      { term: "mientras que", definition: "Whereas — links two contrasting facts in one sentence." },
      { term: "el villancico", definition: "Christmas carol — a traditional song sung during the Navidad season." },
    ],
    examTips: [
      {
        tip: "Learn festival dates precisely — they're often tested directly.",
        detail: "El Día de los Muertos is 1st–2nd November, not the same date as Halloween, and el Día de Reyes is 6th January, not Christmas Day — mixing these up is a common factual error.",
      },
      {
        tip: "Use a diferencia de and mientras que to score higher marks in comparison writing tasks.",
        detail: "These structures show you can compare two cultures directly in one sentence, which is specifically what higher-mark writing questions on customs and festivals are looking for.",
      },
      {
        tip: "Match direct object pronouns (lo/la/los/las) to the noun's gender and number, not to real-world logic.",
        detail: "La fiesta becomes la (feminine) even though 'fiesta' doesn't sound obviously gendered in English — always check the Spanish noun's gender, not the English translation.",
      },
      {
        tip: "Remember reunirse and disfrazarse are both reflexive verbs.",
        detail: "Nos reunimos en Nochebuena (we get together on Christmas Eve) needs the reflexive pronoun nos — dropping it is a common but avoidable error.",
      },
      {
        tip: "Don't assume every Spanish-speaking country celebrates festivals the same way.",
        detail: "Día de los Muertos is strongly associated with Mexico specifically, and las Fallas is a regional Valencian festival, not celebrated the same way across all of Spain — precision about which country/region earns extra credit.",
      },
      {
        tip: "Practise placing direct object pronouns both before the verb and attached to an infinitive.",
        detail: "La veo and voy a verla are both correct for 'I see it' / 'I'm going to see it' — being able to use either shows flexible control of the grammar point.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'A diferencia del Reino Unido, en México se celebra el Día de los Muertos con ofrendas.'",
        accept: ["unlike the united kingdom, in mexico the day of the dead is celebrated with offerings/altars"],
        answer: "Unlike the United Kingdom, in Mexico the Day of the Dead is celebrated with offerings/altars — a diferencia de introduces the contrast between the two countries' customs.",
      },
      {
        question: "Translate into Spanish: 'We get together with the whole family at Christmas.'",
        accept: ["nos reunimos con toda la familia en navidad", "nos reunimos con toda la familia en la navidad"],
        answer: "Nos reunimos con toda la familia en Navidad — reunirse is reflexive, so nos is required before the conjugated form reunimos.",
      },
      {
        question: "Complete with the correct direct object pronoun: '¿Ves los fuegos artificiales? Sí, ____ veo.'",
        accept: ["los"],
        answer: "Los — matching the masculine plural noun fuegos artificiales, replacing it to avoid repeating the full noun.",
      },
      {
        question: "Complete with the correct form of disfrazarse: 'Los niños ____ para el desfile.'",
        accept: ["se disfrazan"],
        answer: "Se disfrazan — the reflexive, third-person plural form of disfrazarse, used here for 'the children dress up for the parade'.",
      },
      {
        question: "Complete with the correct form of celebrar: 'Nosotros ____ la Semana Santa cada año.'",
        accept: ["celebramos"],
        answer: "Celebramos — the regular 'we' form of celebrar (-ar verb), used here for 'we celebrate Holy Week every year'.",
      },
      {
        question: "On approximately which dates is el Día de los Muertos mainly celebrated?",
        choices: ["1st–2nd November", "25th December", "6th January", "31st October"],
        accept: ["1st–2nd November"],
        answer: "1st–2nd November is correct. 25th December is Christmas Day, 6th January is el Día de Reyes, and 31st October is Halloween, a separate festival.",
      },
      {
        question: "Which festival is specifically associated with Valencia?",
        choices: ["las Fallas", "la Semana Santa", "el Día de los Muertos", "la Nochebuena"],
        accept: ["las Fallas"],
        answer: "Las Fallas is a Valencian festival famous for its giant sculptures. The other festivals are either nationwide or associated with different regions/countries.",
      },
      {
        question: "In the sentence '¿La ves? Sí, la veo', what part of speech is 'la'?",
        choices: ["A direct object pronoun", "A definite article", "A noun", "An adjective"],
        accept: ["A direct object pronoun"],
        answer: "In this sentence, la stands in for a previously mentioned feminine noun ('it'), which is the role of a direct object pronoun, not the definite article 'the'.",
      },
      {
        question: "Which linking phrase means 'whereas'?",
        choices: ["mientras que", "a diferencia de", "en cambio", "por eso"],
        accept: ["mientras que"],
        answer: "Mientras que means 'whereas', linking two contrasting facts in a single sentence. A diferencia de and en cambio are also contrast phrases but with slightly different sentence structures.",
      },
      {
        question: "Which of these is the odd one out?",
        choices: ["el desfile", "los fuegos artificiales", "la ofrenda", "disfrutar de"],
        accept: ["disfrutar de"],
        answer: "Disfrutar de (to enjoy) is a verb phrase, while el desfile, los fuegos artificiales and la ofrenda are all nouns naming things seen at a festival.",
      },
      {
        question: "Give one Spanish-speaking country and one festival specifically associated with it.",
        accept: ["mexico and el día de los muertos", "españa and las fallas", "spain and la semana santa"],
        answer: "Any correct pairing works, such as México and el Día de los Muertos, or España and las Fallas — the key is matching a real festival to the country it comes from.",
      },
      {
        question: "Translate into Spanish: 'In Spain, presents traditionally arrive on the sixth of January.'",
        accept: ["en españa, los regalos llegan tradicionalmente el seis de enero", "en españa los regalos llegan tradicionalmente el seis de enero"],
        answer: "En España, los regalos llegan tradicionalmente el seis de enero — el seis de enero is the standard way to give a date in Spanish, using el + number + de + month.",
      },
      {
        question: "Complete with the correct direct object pronoun: 'Compro los regalos y ____ envuelvo.' (los regalos = them)",
        accept: ["los"],
        answer: "Los — the masculine plural direct object pronoun, replacing los regalos to avoid saying 'compro los regalos y envuelvo los regalos'.",
      },
      {
        question: "Choose the correct translation of 'I'm going to see the parade' using a pronoun attached to the infinitive.",
        choices: ["Voy a verlo.", "Lo voy a.", "Voy verlo a.", "Veo voy a lo."],
        accept: ["Voy a verlo."],
        answer: "Voy a verlo attaches the direct object pronoun lo to the end of the infinitive ver, which is one of the two correct positions for the pronoun in this construction.",
      },
      {
        question: "Write a short paragraph in Spanish comparing one festival in a Spanish-speaking country with a similar celebration in the UK, using at least one comparison phrase.",
        answer:
          "There's no single right answer — mark this one yourself. A strong answer names a real festival accurately, uses a comparison phrase such as a diferencia de, mientras que or en cambio, and includes at least one correctly conjugated verb describing what happens during the celebration.",
      },
      {
        question: "Explain in English how direct object pronouns like lo, la, los and las work, and give one original example sentence.",
        answer:
          "Mark it yourself against this: direct object pronouns replace a noun already mentioned to avoid repeating it, and must agree in gender and number with that noun rather than with the speaker — a correct answer gives one original sentence such as Compro el regalo y lo envuelvo (I buy the present and I wrap it), where lo replaces el regalo.",
      },
      {
        question: "What is 'la Nochebuena'?",
        choices: [
          "New Year's Eve",
          "Christmas Day",
          "Twelfth Night",
          "Christmas Eve",
        ],
        accept: [
          "Christmas Eve",
        ],
        answer: "La Nochebuena is Christmas Eve, 24 December, when Spanish families have a big dinner. New Year's Eve is la Nochevieja.",
      },
      {
        question: "What does 'el desfile' mean?",
        choices: [
          "fireworks",
          "costume",
          "parade",
          "bonfire",
        ],
        accept: [
          "parade",
        ],
        answer: "El desfile is a parade. Fireworks are los fuegos artificiales, a costume is un disfraz and a bonfire is una hoguera.",
      },
      {
        question: "What does 'disfrazarse' mean?",
        choices: [
          "to get together",
          "to dance",
          "to dress up",
          "to decorate",
        ],
        accept: [
          "to dress up",
        ],
        answer: "Disfrazarse means to dress up in a costume (el disfraz). To get together is reunirse and to decorate is decorar.",
      },
      {
        question: "What is 'un villancico'?",
        choices: [
          "a village fair",
          "a Christmas carol",
          "a sweet",
          "a parade",
        ],
        accept: [
          "a Christmas carol",
        ],
        answer: "Un villancico is a Christmas carol. It looks like 'village' but isn't; a fair is una feria and a parade un desfile.",
      },
      {
        question: "What does 'reunirse' mean?",
        choices: [
          "to get together",
          "to celebrate",
          "to dress up",
          "to enjoy",
        ],
        accept: [
          "to get together",
        ],
        answer: "Reunirse means to get together: nos reunimos en Navidad. To celebrate is celebrar and to enjoy is disfrutar.",
      },
      {
        question: "When is 'la Semana Santa'?",
        choices: [
          "Christmas week",
          "New Year week",
          "early November",
          "Easter week",
        ],
        accept: [
          "Easter week",
        ],
        answer: "La Semana Santa (Holy Week) is the week leading up to Easter Sunday, famous in Spain for its processions.",
      },
      {
        question: "Who brings Spanish children presents on el Día de Reyes?",
        choices: [
          "Father Christmas",
          "the grandparents",
          "the Easter bunny",
          "the Three Kings",
        ],
        accept: [
          "the Three Kings",
        ],
        answer: "On 6 January the Three Kings (los Reyes Magos) bring presents. Papá Noel (Father Christmas) is popular now too, but he comes on Christmas Eve.",
      },
      {
        question: "What is 'la ofrenda' on el Día de los Muertos?",
        choices: [
          "a costume",
          "a parade",
          "an altar of offerings",
          "a sugar skull",
        ],
        accept: [
          "an altar of offerings",
        ],
        answer: "La ofrenda is an altar with offerings like photos, food and marigolds to remember dead relatives. A sugar skull is una calavera de azúcar.",
      },
      {
        question: "What does 'a diferencia de' mean?",
        choices: [
          "as well as",
          "unlike",
          "thanks to",
          "instead of",
        ],
        accept: [
          "unlike",
        ],
        answer: "A diferencia de means unlike, used to contrast. As well as is además de, thanks to is gracias a and instead of is en vez de.",
      },
      {
        question: "What do people in Spain eat at midnight on New Year's Eve?",
        choices: [
          "twelve grapes",
          "twelve olives",
          "churros",
          "turrón",
        ],
        accept: [
          "twelve grapes",
        ],
        answer: "Spaniards eat twelve grapes (las uvas), one on each chime of midnight on Nochevieja, for luck in each month of the new year.",
      },
      {
        question: "What does 'los fuegos artificiales' mean?",
        choices: [
          "bonfires",
          "candles",
          "fireworks",
          "decorations",
        ],
        accept: [
          "fireworks",
        ],
        answer: "Los fuegos artificiales are fireworks, literally 'artificial fires'. A bonfire is una hoguera and candles are las velas.",
      },
      {
        question: "In Spanish, what is 'la Nochevieja'?",
        choices: [
          "Christmas Eve",
          "New Year's Eve",
          "Twelfth Night",
          "Easter Sunday",
        ],
        accept: [
          "New Year's Eve",
        ],
        answer: "La Nochevieja ('old night') is New Year's Eve, on the thirty-first of December. Christmas Eve is la Nochebuena, the 'good night'.",
      },
      {
        question: "Which Spanish word means 'the presents'?",
        choices: [
          "los recuerdos",
          "los regalos",
          "los dulces",
          "los disfraces",
        ],
        accept: [
          "los regalos",
        ],
        answer: "Los regalos are presents or gifts. Los recuerdos are souvenirs or memories, los dulces are sweets and los disfraces are fancy-dress costumes.",
      },
      {
        question: "In Spanish, which pronoun completes 'Compro la tarta y ___ como'?",
        choices: [
          "lo",
          "le",
          "la",
          "las",
        ],
        accept: [
          "la",
        ],
        answer: "La tarta is feminine and singular, so 'it' is la: la como, I eat it. Lo would replace a masculine noun and las a feminine plural one.",
      },
    ],
    misconceptions: [
      {
        wrong: "El Día de los Muertos and Halloween are the same festival celebrated on the same date.",
        right: "They are separate festivals — Halloween is 31st October, while el Día de los Muertos is 1st–2nd November and has a distinct tone, celebrating and honouring deceased relatives rather than being spooky.",
      },
      {
        wrong: "Direct object pronouns agree with the gender of the person speaking, like some other pronouns.",
        right: "They agree with the gender and number of the noun they replace — la fiesta becomes la, los regalos become los, regardless of who is speaking.",
      },
      {
        wrong: "Every Spanish-speaking country celebrates exactly the same festivals in the same way.",
        right: "Festivals vary significantly by country and even by region — las Fallas is specifically Valencian, and el Día de los Muertos is most strongly associated with Mexico rather than being universal across all Spanish-speaking countries.",
      },
      {
        wrong: "Reunirse and disfrazarse are regular verbs that don't need a reflexive pronoun.",
        right: "Both are reflexive verbs and require a pronoun matching the subject — nos reunimos, se disfrazan — dropping the pronoun makes the sentence incomplete.",
      },
    ],
  },

  "spanish/town-and-region": {
    summary:
      "This topic covers vocabulary for places in a town, giving and understanding directions, prepositions of place, weather vocabulary, and the adjectives needed to describe your local area, whether praising it or criticising it in a piece of writing or a speaking task.",
    keyFacts: [
      {
        heading: "Places in a town",
        points: [
          "Common places: el ayuntamiento (town hall), la plaza (square), el mercado (market), la biblioteca (library), el polideportivo (sports centre).",
          "Shops: la panadería (bakery), la carnicería (butcher's), el supermercado (supermarket) — many shop names end in -ería, formed from the product sold.",
          "Hay un/una... (there is a...) introduces what exists in a town: En mi pueblo hay una plaza mayor muy bonita.",
          "El pueblo (village/small town) and la ciudad (city) are distinct sizes — don't use ciudad for a small village.",
        ],
      },
      {
        heading: "Giving and understanding directions",
        points: [
          "Key imperative direction phrases: gira a la derecha (turn right), gira a la izquierda (turn left), sigue todo recto (go straight on).",
          "Cruza la calle (cross the street) and toma la primera/segunda calle (take the first/second street) are common route-giving instructions.",
          "Está cerca de/lejos de (it's near to/far from) describes distance from a reference point: El banco está cerca de la plaza.",
          "¿Dónde está...? (Where is...?) is the standard question for asking for directions to a specific place.",
        ],
      },
      {
        heading: "Prepositions of place",
        points: [
          "Al lado de (next to), enfrente de (opposite), detrás de (behind) and delante de (in front of) all combine 'de' with the place they refer to.",
          "Entre (between) takes two things: El banco está entre la farmacia y el mercado.",
          "Cerca de (near) and lejos de (far from) both end in 'de' as well, following the same pattern as the other compound prepositions.",
          "When 'de' meets 'el', it must contract to 'del': al lado del ayuntamiento (next to the town hall), not al lado de el ayuntamiento.",
        ],
      },
      {
        heading: "Weather and describing your local area",
        points: [
          "Hace + weather noun: Hace sol (it's sunny), Hace frío (it's cold), Hace calor (it's hot) — weather uses hacer, not ser or estar.",
          "Llueve (it rains/it's raining) and Nieva (it snows/it's snowing) are their own irregular verb forms, not built with hacer.",
          "Tranquilo/a (peaceful/quiet), ruidoso/a (noisy), and animado/a (lively) are common adjectives for describing the atmosphere of a town.",
          "Hay mucho que hacer / No hay nada que hacer (there's a lot to do / there's nothing to do) are useful set phrases for opinions on a local area.",
        ],
      },
    ],
    flashcards: [
      { term: "el ayuntamiento", definition: "Town hall — where the local council is based." },
      { term: "la plaza mayor", definition: "Main square — the central square in many Spanish towns." },
      { term: "la panadería", definition: "Bakery — note the -ería ending pattern shared by many shop names." },
      { term: "el polideportivo", definition: "Sports centre — a common facility in Spanish towns and cities." },
      { term: "gira a la derecha / a la izquierda", definition: "Turn right / turn left — imperative direction phrases." },
      { term: "sigue todo recto", definition: "Go straight on — imperative direction phrase." },
      { term: "al lado de", definition: "Next to — contracts to 'al lado del' before a masculine singular noun." },
      { term: "enfrente de", definition: "Opposite — a preposition of place describing location." },
      { term: "entre", definition: "Between — takes two things: entre el banco y la farmacia." },
      { term: "hace sol / hace calor / hace frío", definition: "It's sunny / it's hot / it's cold — weather expressions use hacer, not ser or estar." },
      { term: "llueve", definition: "It rains / it's raining — an irregular verb form of llover, not built with hacer." },
      { term: "nieva", definition: "It snows / it's snowing — an irregular verb form of nevar." },
      { term: "tranquilo/a", definition: "Peaceful, quiet — a common adjective for describing a town's atmosphere." },
      { term: "ruidoso/a", definition: "Noisy — a common adjective for describing a town's atmosphere." },
    ],
    examTips: [
      {
        tip: "Remember weather expressions use hacer, not ser or estar.",
        detail: "Hace calor (it's hot) is correct; es calor or está calor are not standard Spanish — hacer is the fixed verb for most weather phrases.",
      },
      {
        tip: "Learn llueve and nieva as standalone irregular forms, not as hacer phrases.",
        detail: "Unlike hace sol/calor/frío, rain and snow have their own dedicated verb forms (llover and nevar) that don't combine with hacer at all.",
      },
      {
        tip: "Always contract de + el to del before a masculine noun.",
        detail: "Al lado del mercado is correct; al lado de el mercado is a spelling/grammar error — de and el must fuse into del whenever they meet.",
      },
      {
        tip: "Use the imperative form for giving directions in a role-play or speaking task.",
        detail: "Gira, sigue and cruza are all tú-command imperative forms — using the infinitive (girar, seguir) instead sounds unnatural when actually giving someone directions.",
      },
      {
        tip: "Support opinions about your local area with a specific reason, not just an adjective.",
        detail: "Mi pueblo es tranquilo, pero no hay mucho que hacer para los jóvenes gives a fuller, higher-mark answer than a bare mi pueblo es tranquilo.",
      },
      {
        tip: "Don't confuse el pueblo (village/small town) with la ciudad (city) when translating 'town'.",
        detail: "Using ciudad for a small village overstates its size in Spanish — pueblo is the more accurate word for anything smaller than a genuine city.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'Gira a la derecha y sigue todo recto hasta la plaza.'",
        accept: ["turn right and go straight on until the square", "turn right and go straight on to the square"],
        answer: "Turn right and go straight on until the square — gira and sigue are both tú-command imperative forms used for giving directions.",
      },
      {
        question: "Translate into Spanish: 'The library is next to the town hall.'",
        accept: ["la biblioteca está al lado del ayuntamiento"],
        answer: "La biblioteca está al lado del ayuntamiento — al lado de contracts with el to become del before the masculine noun ayuntamiento, and estar is used because location always takes estar.",
      },
      {
        question: "Complete with the correct weather expression: 'En invierno, ____ mucho frío.' (hacer)",
        accept: ["hace"],
        answer: "Hace — weather expressions like hace frío use the third-person singular of hacer, regardless of the subject, since weather has no true grammatical subject in Spanish.",
      },
      {
        question: "Complete the direction with the correct imperative: '____ la primera calle a la izquierda.' (tomar)",
        accept: ["toma"],
        answer: "Toma — the tú-command imperative form of tomar, used here for 'take the first street on the left'.",
      },
      {
        question: "Complete with the correct form of hay: 'En mi pueblo ____ un mercado los sábados.'",
        accept: ["hay"],
        answer: "Hay — the invariable form of haber meaning 'there is/are', used here regardless of the noun mercado being singular.",
      },
      {
        question: "Which verb form correctly means 'it's snowing'?",
        choices: ["nieva", "hace nieve", "está nieve", "es nieve"],
        accept: ["nieva"],
        answer: "Nieva is the correct irregular verb form for 'it snows/it's snowing', from the verb nevar. The other options are not standard Spanish weather phrases.",
      },
      {
        question: "Which preposition correctly means 'between'?",
        choices: ["entre", "detrás de", "cerca de", "delante de"],
        accept: ["entre"],
        answer: "Entre means 'between' and takes two things (entre X y Y). Detrás de means behind, cerca de means near, and delante de means in front of.",
      },
      {
        question: "In the sentence 'El banco está al lado de la farmacia', what part of speech is 'al lado de'?",
        choices: ["A preposition (phrase)", "A verb", "A noun", "An adjective"],
        accept: ["A preposition (phrase)"],
        answer: "Al lado de functions as a compound preposition meaning 'next to', showing the relationship in place between el banco and la farmacia — it isn't a verb, noun or adjective.",
      },
      {
        question: "Which shop-name ending is typical of Spanish shop nouns like panadería and carnicería?",
        choices: ["-ería", "-ción", "-dad", "-mente"],
        accept: ["-ería"],
        answer: "-ería is the typical ending for shop names built from the product sold, as in panadería (bakery, from pan/bread) and carnicería (butcher's, from carne/meat).",
      },
      {
        question: "Which of these is the odd one out?",
        choices: ["ruidoso", "tranquilo", "animado", "el mercado"],
        accept: ["el mercado"],
        answer: "El mercado (market) is a noun naming a place, while ruidoso, tranquilo and animado are all adjectives describing the atmosphere of a place.",
      },
      {
        question: "Give one advantage AND one disadvantage of living in a small village (un pueblo) in Spanish.",
        accept: ["es tranquilo and no hay mucho que hacer", "hay poca contaminación and está lejos de la ciudad"],
        answer: "Any genuine pair works, for example es tranquilo (it's peaceful) as an advantage and no hay mucho que hacer para los jóvenes (there's not much for young people to do) as a disadvantage.",
      },
      {
        question: "Translate into Spanish: 'In summer it's very hot, but in winter it rains a lot.'",
        accept: ["en verano hace mucho calor, pero en invierno llueve mucho"],
        answer: "En verano hace mucho calor, pero en invierno llueve mucho — hace calor uses hacer, while llueve is its own irregular verb form, not combined with hacer.",
      },
      {
        question: "Complete with the correct form of the imperative: '____ la calle con cuidado.' (cruzar)",
        accept: ["cruza"],
        answer: "Cruza — the tú-command imperative of cruzar, meaning 'cross the street carefully', with the ending changed to -a for an -ar verb command.",
      },
      {
        question: "Choose the sentence that correctly contracts de + el.",
        choices: ["cerca del polideportivo", "cerca de el polideportivo", "cerca de la polideportivo", "cerca al polideportivo"],
        accept: ["cerca del polideportivo"],
        answer: "Cerca del polideportivo is correct — de and el must always contract to del before a masculine singular noun; 'de el' as two separate words is a spelling error.",
      },
      {
        question: "Write a short paragraph in Spanish describing your local area: what places there are, what the weather is usually like, and your opinion of living there.",
        answer:
          "There's no single right answer — mark this one yourself. A strong answer uses hay to list at least two places, a weather expression with hacer or an irregular form like llueve, and a justified opinion adjective such as tranquilo or ruidoso with a reason.",
      },
      {
        question: "Explain in English why weather expressions like 'hace calor' use a form of hacer rather than a form of estar.",
        answer:
          "Mark it yourself against this: Spanish treats most weather as something the day 'makes' happen rather than a state the day 'is in', so hacer is used impersonally in the third person (hace calor, hace frío) — a good answer notes that rain and snow are the exception, using their own dedicated verb forms llueve and nieva instead.",
      },
      {
        question: "What does 'el ayuntamiento' mean?",
        choices: [
          "town hall",
          "library",
          "sports centre",
          "main square",
        ],
        accept: [
          "town hall",
        ],
        answer: "El ayuntamiento is the town hall. The library is la biblioteca, the sports centre el polideportivo and the main square la plaza mayor.",
      },
      {
        question: "What is 'la panadería'?",
        choices: [
          "butcher's",
          "cake shop",
          "fishmonger's",
          "bakery",
        ],
        accept: [
          "bakery",
        ],
        answer: "La panadería is a bakery that sells bread (el pan). A cake shop is la pastelería, a butcher's la carnicería and a fishmonger's la pescadería.",
      },
      {
        question: "What does 'la librería' mean?",
        choices: [
          "library",
          "newsagent's",
          "bookshop",
          "stationer's",
        ],
        accept: [
          "bookshop",
        ],
        answer: "La librería is a bookshop, a classic false friend. A library is la biblioteca and a stationer's is la papelería.",
      },
      {
        question: "What does 'sigue todo recto' mean?",
        choices: [
          "turn right",
          "go straight on",
          "take the first",
          "cross the road",
        ],
        accept: [
          "go straight on",
        ],
        answer: "Sigue todo recto means carry on straight ahead. Turn right is gira a la derecha and cross the road is cruza la calle.",
      },
      {
        question: "What does 'enfrente de' mean?",
        choices: [
          "next to",
          "opposite",
          "behind",
          "near",
        ],
        accept: [
          "opposite",
        ],
        answer: "Enfrente de means opposite (facing). Next to is al lado de, behind is detrás de and near is cerca de.",
      },
      {
        question: "What does 'el polideportivo' mean?",
        choices: [
          "sports centre",
          "police station",
          "stadium",
          "swimming pool",
        ],
        accept: [
          "sports centre",
        ],
        answer: "El polideportivo is a sports centre. The police station is la comisaría, a stadium el estadio and a swimming pool la piscina.",
      },
      {
        question: "What does 'llueve' mean?",
        choices: [
          "it's snowing",
          "it's cloudy",
          "it's foggy",
          "it's raining",
        ],
        accept: [
          "it's raining",
        ],
        answer: "Llueve (from llover) means it rains or it's raining. It's snowing is nieva, cloudy is está nublado and foggy is hay niebla.",
      },
      {
        question: "What does 'ruidoso' mean?",
        choices: [
          "quiet",
          "rude",
          "noisy",
          "dirty",
        ],
        accept: [
          "noisy",
        ],
        answer: "Ruidoso means noisy (el ruido is noise). Quiet is tranquilo, dirty is sucio and rude is maleducado.",
      },
      {
        question: "Which word completes 'Vamos ___ mercado'?",
        choices: [
          "a el",
          "del",
          "al",
          "a la",
        ],
        accept: [
          "al",
        ],
        answer: "A + el must contract to al: vamos al mercado. A la is only for feminine nouns, and del means of the or from the.",
      },
      {
        question: "Which word means 'village'?",
        choices: [
          "la ciudad",
          "el pueblo",
          "el barrio",
          "las afueras",
        ],
        accept: [
          "el pueblo",
        ],
        answer: "El pueblo is a village or small town. La ciudad is a city, el barrio a neighbourhood and las afueras the outskirts.",
      },
      {
        question: "What does 'hace viento' mean?",
        choices: [
          "it's windy",
          "it's foggy",
          "it's cloudy",
          "it's stormy",
        ],
        accept: [
          "it's windy",
        ],
        answer: "Hace viento means it's windy; weather with hace uses a noun (viento = wind). It's foggy is hay niebla and it's cloudy is está nublado.",
      },
      {
        question: "What is 'la carnicería' in a Spanish town?",
        choices: [
          "the baker's",
          "the fishmonger's",
          "the butcher's",
          "the cake shop",
        ],
        accept: [
          "the butcher's",
        ],
        answer: "La carnicería sells carne (meat), so it is the butcher's. The baker's is la panadería, the fishmonger's is la pescadería and the cake shop is la pastelería.",
      },
      {
        question: "What does the Spanish phrase 'detrás de' mean?",
        choices: [
          "in front of",
          "behind",
          "near",
          "opposite",
        ],
        accept: [
          "behind",
        ],
        answer: "Detrás de means behind. Its opposite, in front of, is delante de; near is cerca de and opposite is enfrente de.",
      },
      {
        question: "What does the Spanish weather phrase 'está nublado' mean?",
        choices: [
          "it's foggy",
          "it's windy",
          "it's stormy",
          "it's cloudy",
        ],
        accept: [
          "it's cloudy",
        ],
        answer: "Está nublado means it's cloudy, from la nube (cloud). It's foggy is hay niebla, it's windy is hace viento and it's stormy is hay tormenta.",
      },
    ],
    misconceptions: [
      {
        wrong: "Weather expressions in Spanish always use a form of estar, since weather feels temporary.",
        right: "Most weather expressions use hacer impersonally (hace sol, hace frío), while rain and snow have their own dedicated irregular verb forms (llueve, nieva) — estar is not the standard pattern for weather.",
      },
      {
        wrong: "'De el' can be written as two separate words in careful, formal Spanish.",
        right: "De and el always contract to del with no exceptions, in both formal and informal Spanish — al lado del mercado, never al lado de el mercado.",
      },
      {
        wrong: "El pueblo and la ciudad are interchangeable words for any populated place.",
        right: "El pueblo specifically means a village or small town, while la ciudad means a city — using ciudad for a small village overstates its size and isn't accurate description.",
      },
      {
        wrong: "Directions should be given using the infinitive form of the verb, like a set of instructions in a manual.",
        right: "Spoken and role-play directions use the imperative (command) form — gira, sigue, cruza — matching how a native speaker would actually tell someone the way, not the bare infinitive.",
      },
    ],
  },

  "spanish/holidays-and-travel": {
    summary:
      "This topic covers transport vocabulary, useful questions for booking and asking at a hotel or station, the preterite tense for talking about a past holiday (regular endings plus the key irregulars fui/fue and hice), and vocabulary for countries and nationalities.",
    keyFacts: [
      {
        heading: "Transport vocabulary",
        points: [
          "Common transport: el avión (plane), el tren (train), el autobús (bus), el coche (car), el barco (boat/ship).",
          "Ir en + transport describes how you travel: Voy en tren (I go by train) — note en, not por or con, is used before the means of transport.",
          "A pie (on foot) is the one exception that doesn't use en: Voy a pie al colegio.",
          "El billete (ticket) is used in Spain; Latin America commonly uses el boleto instead — both are useful to recognise.",
        ],
      },
      {
        heading: "Booking and asking at a hotel or station",
        points: [
          "Quisiera reservar una habitación (I would like to book a room) uses quisiera, a polite conditional form more formal than quiero.",
          "Una habitación individual/doble (a single/double room) and con baño/con vista al mar (with a bathroom/with a sea view) are common hotel-booking details.",
          "¿A qué hora sale/llega el tren? (What time does the train leave/arrive?) is a key question for station situations.",
          "¿Hay descuento para estudiantes? (Is there a discount for students?) is a useful practical question in booking situations.",
        ],
      },
      {
        heading: "The preterite tense for a past holiday",
        points: [
          "Regular -ar preterite endings: -é, -aste, -ó, -amos, -asteis, -aron, e.g. visité, visitaste, visitó, visitamos, visitasteis, visitaron.",
          "Regular -er/-ir preterite endings are shared: -í, -iste, -ió, -imos, -isteis, -ieron, e.g. comí, comiste, comió, comimos, comisteis, comieron.",
          "Ir and ser share the exact same irregular preterite form: fui, fuiste, fue, fuimos, fuisteis, fueron — context alone tells you which verb is meant.",
          "Hacer is irregular in the preterite too: hice, hiciste, hizo, hicimos, hicisteis, hicieron — note the c changes to z in the él/ella form (hizo) to keep the sound consistent.",
        ],
      },
      {
        heading: "Countries and nationalities",
        points: [
          "Country names take a definite article in some cases but not others: (el) Reino Unido, España, Francia, Italia, (los) Estados Unidos.",
          "Nationality adjectives agree in gender and number: inglés/inglesa, francés/francesa, español/española — note the accent disappears when an ending is added: francés → francesa.",
          "Ser + nationality states origin: Soy inglés/inglesa (I am English) — nationality is a lasting fact about identity, so it always uses ser, never estar.",
          "Nationality adjectives are not capitalised in Spanish, unlike in English: soy español, not soy Español.",
        ],
      },
    ],
    flashcards: [
      { term: "el avión", definition: "Plane — ir en avión means 'to go by plane'." },
      { term: "el billete", definition: "Ticket — in Latin America often el boleto instead." },
      { term: "la habitación individual/doble", definition: "Single/double room — key hotel-booking vocabulary." },
      { term: "quisiera", definition: "I would like — a polite conditional form of querer, more formal than quiero, common when booking or ordering." },
      { term: "fui", definition: "I went / I was — the shared irregular preterite yo form of both ir and ser; context decides the meaning." },
      { term: "hice", definition: "I did / I made — the irregular preterite yo form of hacer." },
      { term: "visité", definition: "I visited — the regular preterite yo form of the -ar verb visitar." },
      { term: "el extranjero", definition: "Abroad — ir al extranjero means 'to go abroad'." },
      { term: "el alojamiento", definition: "Accommodation — the general word for a place to stay on holiday." },
      { term: "inglés / inglesa", definition: "English (nationality) — masculine/feminine forms; the accent disappears in the feminine form (inglesa)." },
      { term: "el pasaporte", definition: "Passport — essential travel document vocabulary." },
      { term: "hacer la maleta", definition: "To pack a suitcase — literally 'to make the suitcase'." },
      { term: "el vuelo", definition: "Flight — from the verb volar, to fly." },
      { term: "con vista al mar", definition: "With a sea view — a common phrase in hotel bookings." },
    ],
    examTips: [
      {
        tip: "Learn fui/fuiste/fue as covering BOTH ir and ser in the preterite.",
        detail: "Fui a España could mean 'I went to Spain' (ir) — context, usually a destination or description, tells you which verb is meant, since the forms are identical.",
      },
      {
        tip: "Watch the c→z spelling change in hizo (from hacer).",
        detail: "Hizo keeps the 's' sound consistent with the rest of the preterite pattern — writing 'hico' is a common but incorrect spelling that examiners specifically look out for.",
      },
      {
        tip: "Use quisiera rather than quiero for polite requests in booking situations.",
        detail: "Quisiera reservar una habitación sounds noticeably more polite and natural than quiero reservar una habitación, and using it shows awareness of register that examiners reward.",
      },
      {
        tip: "Remember en is the fixed preposition before most transport, with a pie as the exception.",
        detail: "Voy en tren, voy en coche, but voy a pie (on foot) — using por or con instead of en before a means of transport is a common preposition error.",
      },
      {
        tip: "Drop the accent when a nationality adjective takes a feminine or plural ending.",
        detail: "Inglés becomes inglesa (feminine) and ingleses (masculine plural) — the accent on the é only appears in the base masculine singular form.",
      },
      {
        tip: "Never capitalise nationality adjectives or language names in Spanish.",
        detail: "Soy español and hablo español are both lowercase, unlike the English capitalised 'Spanish' — capitalising them is a very visible but easily-fixed spelling error.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'El año pasado fui a España en avión y visité Barcelona.'",
        accept: ["last year i went to spain by plane and i visited barcelona", "last year i went to spain by plane and visited barcelona"],
        answer: "Last year I went to Spain by plane and I visited Barcelona — fui is the irregular preterite of ir, and visité is the regular preterite of visitar.",
      },
      {
        question: "Translate into Spanish: 'I would like to book a double room with a sea view.'",
        accept: ["quisiera reservar una habitación doble con vista al mar", "quisiera reservar una habitacion doble con vista al mar"],
        answer: "Quisiera reservar una habitación doble con vista al mar — quisiera is the polite form used for booking requests, more formal than quiero.",
      },
      {
        question: "Complete with the correct preterite form of hacer: 'Yo ____ mucho turismo el verano pasado.'",
        accept: ["hice"],
        answer: "Hice — the irregular preterite yo form of hacer, used for 'I did a lot of sightseeing last summer'.",
      },
      {
        question: "Complete with the correct preterite form of comer: 'Nosotros ____ paella en un restaurante.'",
        accept: ["comimos"],
        answer: "Comimos — the regular preterite 'we' form of the -er verb comer, following the -imos ending shared by -er and -ir verbs in the preterite.",
      },
      {
        question: "Complete with the correct preterite form of ir: 'Ellos ____ a Portugal en tren.'",
        accept: ["fueron"],
        answer: "Fueron — the third-person plural irregular preterite form shared by ir and ser; here it means 'they went' because a Portugal shows a destination.",
      },
      {
        question: "Which preposition is used before most means of transport?",
        choices: ["en", "por", "con", "a"],
        accept: ["en"],
        answer: "En is used before most transport: voy en tren, voy en avión. A pie (on foot) is the notable exception that doesn't take en.",
      },
      {
        question: "Which form correctly means 'I would like' in a polite booking request?",
        choices: ["quisiera", "quiero", "querría", "quise"],
        accept: ["quisiera"],
        answer: "Quisiera is the standard polite form used for requests like booking a room, more formal and softer than the direct quiero.",
      },
      {
        question: "In the sentence 'Fui a Francia el año pasado', what part of speech is 'el año pasado'?",
        choices: ["A time expression (adverbial phrase)", "A noun subject", "A verb", "A preposition"],
        accept: ["A time expression (adverbial phrase)"],
        answer: "El año pasado ('last year') tells you when the action happened, functioning as an adverbial time phrase, not as the grammatical subject of the sentence (which is the implied 'yo').",
      },
      {
        question: "Which feminine nationality adjective correctly matches 'francés'?",
        choices: ["francesa", "francésa", "frances", "francessa"],
        accept: ["francesa"],
        answer: "Francesa is correct — the accent from francés disappears when the feminine -a ending is added, giving francesa rather than keeping the accented é.",
      },
      {
        question: "Which of these is the odd one out?",
        choices: ["el billete", "el pasaporte", "el vuelo", "quisiera"],
        accept: ["quisiera"],
        answer: "Quisiera is a verb form meaning 'I would like', while el billete, el pasaporte and el vuelo are all nouns related to travel.",
      },
      {
        question: "Give one irregular preterite yo form and the infinitive it comes from.",
        accept: ["fui from ir or ser", "hice from hacer", "tuve from tener"],
        answer: "Any correct pairing works, for example fui (from ir or ser) or hice (from hacer) — the key is correctly matching the irregular preterite form to its infinitive.",
      },
      {
        question: "Translate into Spanish: 'What time does the train arrive?'",
        accept: ["¿a qué hora llega el tren?", "¿a que hora llega el tren?"],
        answer: "¿A qué hora llega el tren? — a qué hora is the fixed question phrase for 'at what time', and llega is the present tense of llegar (to arrive).",
      },
      {
        question: "Complete with the correct preterite form of visitar: 'Tú ____ el museo ayer.'",
        accept: ["visitaste"],
        answer: "Visitaste — the regular preterite tú form of the -ar verb visitar, following the -aste ending pattern.",
      },
      {
        question: "Choose the correctly spelled preterite él/ella form of hacer.",
        choices: ["hizo", "hico", "hació", "hace"],
        accept: ["hizo"],
        answer: "Hizo is correct — the c changes to z before the o to preserve the 's' sound, unlike the incorrect spelling 'hico'.",
      },
      {
        question: "Write a short paragraph in Spanish describing a past holiday: where you went, how you travelled, and one thing you did, all in the preterite tense.",
        answer:
          "There's no single right answer — mark this one yourself. A strong answer uses fui correctly for 'I went', a transport phrase with en, and at least one other correctly conjugated preterite verb (regular or irregular) describing an activity.",
      },
      {
        question: "Explain in English why 'fui' can be ambiguous out of context, and how a reader knows whether it comes from ir or ser.",
        answer:
          "Mark it yourself against this: ir and ser share identical preterite forms (fui, fuiste, fue, fuimos, fuisteis, fueron), so only the surrounding context — such as a destination following the verb for ir, or a description/identity following it for ser — tells the reader which verb is actually meant.",
      },
      {
        question: "What does 'el alojamiento' mean?",
        choices: [
          "the luggage",
          "the accommodation",
          "the flight",
          "the booking",
        ],
        accept: [
          "the accommodation",
        ],
        answer: "El alojamiento is accommodation (a hotel, campsite, flat). Luggage is el equipaje, the flight is el vuelo and a booking is una reserva.",
      },
      {
        question: "Which phrase means 'to pack your suitcase'?",
        choices: [
          "sacar el billete",
          "perder el vuelo",
          "hacer la maleta",
          "coger el tren",
        ],
        accept: [
          "hacer la maleta",
        ],
        answer: "Hacer la maleta is to pack your case. Sacar el billete is to buy the ticket, perder el vuelo is to miss the flight and coger el tren is to catch the train.",
      },
      {
        question: "What does 'Voy al extranjero' mean?",
        choices: [
          "I'm going to the coast",
          "I'm going abroad",
          "I'm going camping",
          "I'm going to the city",
        ],
        accept: [
          "I'm going abroad",
        ],
        answer: "El extranjero means abroad (a foreign country), so voy al extranjero is I'm going abroad. The coast is la costa and the city is la ciudad.",
      },
      {
        question: "What does 'una habitación individual' mean?",
        choices: [
          "a double room",
          "a family room",
          "a single room",
          "a private bathroom",
        ],
        accept: [
          "a single room",
        ],
        answer: "Individual means for one person, so it's a single room. A double room is una habitación doble and a family room is una habitación familiar.",
      },
      {
        question: "Which word means 'the flight'?",
        choices: [
          "el viaje",
          "el billete",
          "la llegada",
          "el vuelo",
        ],
        accept: [
          "el vuelo",
        ],
        answer: "El vuelo is the flight (from volar, to fly). El viaje is the journey or trip, el billete is the ticket and la llegada is the arrival.",
      },
      {
        question: "'Hice' is the preterite yo form of which verb?",
        choices: [
          "hacer",
          "haber",
          "ir",
          "hablar",
        ],
        accept: [
          "hacer",
        ],
        answer: "Hice (I did/made) is the irregular preterite of hacer, as in hice turismo. Haber gives hube, ir gives fui and hablar gives hablé.",
      },
      {
        question: "What does 'con vista al mar' mean?",
        choices: [
          "with a sea view",
          "next to the sea",
          "far from the sea",
          "with a pool view",
        ],
        accept: [
          "with a sea view",
        ],
        answer: "La vista is the view, so con vista al mar is with a sea view. Next to the sea would be al lado del mar or junto al mar.",
      },
      {
        question: "Which completes 'Ayer nosotros ___ a la playa' (ir)?",
        choices: [
          "vamos",
          "fuimos",
          "fueron",
          "íbamos",
        ],
        accept: [
          "fuimos",
        ],
        answer: "Ayer needs the preterite, and the nosotros form of ir is fuimos. Fueron is ellos, vamos is present and íbamos is imperfect (used to go).",
      },
      {
        question: "At an airport, what does 'la salida' mean?",
        choices: [
          "arrival",
          "delay",
          "departure",
          "check-in",
        ],
        accept: [
          "departure",
        ],
        answer: "La salida is the departure (or exit), from salir, to leave. Arrival is la llegada and a delay is un retraso.",
      },
      {
        question: "What is 'un billete de ida y vuelta'?",
        choices: [
          "a single ticket",
          "a return ticket",
          "a first-class ticket",
          "a cheap ticket",
        ],
        accept: [
          "a return ticket",
        ],
        answer: "Ida is the outward trip and vuelta is the way back, so it's a return ticket. A single ticket is un billete de ida (sencillo).",
      },
      {
        question: "At a Spanish airport, what does 'la llegada' mean?",
        choices: [
          "departures",
          "check-in",
          "arrivals",
          "baggage",
        ],
        accept: [
          "arrivals",
        ],
        answer: "La llegada is arrivals, from llegar (to arrive). La salida is departures and el equipaje is the luggage.",
      },
      {
        question: "Which Spanish word means 'the luggage'?",
        choices: [
          "el billete",
          "el equipaje",
          "el pasaporte",
          "el andén",
        ],
        accept: [
          "el equipaje",
        ],
        answer: "El equipaje is luggage. El billete is the ticket, el pasaporte is the passport and el andén is the platform at a station.",
      },
      {
        question: "What is the feminine form of the Spanish nationality 'alemán'?",
        choices: [
          "alemanes",
          "alemana",
          "alemanas",
          "alemán",
        ],
        accept: [
          "alemana",
        ],
        answer: "Alemana is the feminine singular, and the accent drops once you add the -a. Alemanes and alemanas are the masculine and feminine plurals.",
      },
      {
        question: "What is the 'yo' form of the Spanish verb 'viajar' in the preterite?",
        choices: [
          "viajó",
          "viajaba",
          "viajé",
          "viajaste",
        ],
        accept: [
          "viajé",
        ],
        answer: "Viajé means I travelled: regular -ar verbs end in -é for yo in the preterite. Viajó is he/she travelled, viajaste is you travelled and viajaba is imperfect.",
      },
    ],
    misconceptions: [
      {
        wrong: "Ir and ser have different irregular preterite forms, just like they do in the present tense.",
        right: "They share the exact same irregular preterite forms (fui, fuiste, fue, fuimos, fuisteis, fueron) — only context tells you which verb is meant, unlike the present tense where soy and voy are completely different.",
      },
      {
        wrong: "Preterite -er and -ir verbs take different endings from each other, just like in the present tense.",
        right: "In the preterite, -er and -ir verbs share exactly the same endings (-í, -iste, -ió, -imos, -isteis, -ieron) — comer and vivir conjugate with identical endings in this tense, unlike in the present.",
      },
      {
        wrong: "Nationality adjectives should be capitalised in Spanish, just as they are in English.",
        right: "Nationality and language names are always lowercase in Spanish — soy español and hablo español, never with a capital letter, unlike the English capitalised 'Spanish'.",
      },
      {
        wrong: "Any preposition can be used before a form of transport, as long as the meaning is clear.",
        right: "En is the fixed, standard preposition before almost all transport (en tren, en avión, en coche) — a pie (on foot) is the one common exception that doesn't use en.",
      },
    ],
  },

  "spanish/eating-out-and-food-culture": {
    summary:
      "This topic covers food and drink vocabulary, how to order in a restaurant, giving opinions on food, expressing quantities and partitives, and using the imperative and polite conditional phrases like quisiera and ¿me puede traer...? for making requests when eating out.",
    keyFacts: [
      {
        heading: "Food and drink vocabulary",
        points: [
          "Meals: el desayuno (breakfast), la comida/el almuerzo (lunch), la cena (dinner) — la comida can also mean 'food' in general, depending on context.",
          "Common foods: la carne (meat), el pescado (fish), las verduras (vegetables), la fruta (fruit), el marisco (seafood).",
          "Drinks: el agua (water — feminine but uses el for pronunciation reasons: el agua, but las aguas in the plural), el zumo (juice), la bebida (drink, general).",
          "Los platos típicos (typical/traditional dishes) is a useful phrase for describing regional Spanish food, e.g. la paella, el gazpacho, la tortilla española.",
        ],
      },
      {
        heading: "Ordering in a restaurant",
        points: [
          "¿Qué desea/desean? (What would you like?) is what a waiter typically asks, using desear formally.",
          "De primero/de segundo/de postre (for starter/for main/for dessert) structures a full order across courses.",
          "¿Me puede traer la cuenta, por favor? (Can you bring me the bill, please?) uses the polite formal question form with usted (puede).",
          "Para beber/para comer (to drink/to eat) clarifies which part of the order you're specifying.",
        ],
      },
      {
        heading: "Opinions on food",
        points: [
          "Standard opinion structures apply: Me gusta(n), Odio, Prefiero + noun, followed by porque and a reason.",
          "Sabroso/a (tasty) and soso/a (bland) are common food-specific opinion adjectives.",
          "Estar bueno/a (to taste good, temporary quality of THIS food) contrasts with ser bueno/a (to be good for you, a lasting property) — a classic ser/estar distinction applied to food.",
          "Tener hambre/tener sed (to be hungry/to be thirsty) use tener, not ser or estar, just like age does.",
        ],
      },
      {
        heading: "Quantities, partitives and polite requests",
        points: [
          "Un poco de (a little of), mucho/a (a lot of) and demasiado/a (too much of) all combine with 'de' + food noun to express quantity: un poco de sal.",
          "Un kilo de, una botella de, una ración de (a kilo of, a bottle of, a portion of) are common shopping/ordering quantity phrases.",
          "Quisiera + noun or quisiera + infinitive is the standard polite way to order: Quisiera el pollo, por favor.",
          "¿Me puede traer...? (Can you bring me...?) is the polite formal request form, using usted's form of poder (puede) rather than the tú form.",
        ],
      },
    ],
    flashcards: [
      { term: "la comida", definition: "Lunch, or 'food' in general — meaning depends on context." },
      { term: "la cena", definition: "Dinner/evening meal — from the verb cenar, to have dinner." },
      { term: "el marisco", definition: "Seafood — a common food category on Spanish menus." },
      { term: "las verduras", definition: "Vegetables — always plural in this general sense." },
      { term: "sabroso/a", definition: "Tasty — a common positive opinion adjective for food." },
      { term: "soso/a", definition: "Bland, tasteless — a common negative opinion adjective for food." },
      { term: "tener hambre / tener sed", definition: "To be hungry / to be thirsty — uses tener, not ser or estar, like age." },
      { term: "la cuenta", definition: "The bill (in a restaurant) — false friend warning: not 'the count/account' in the everyday English sense here." },
      { term: "de primero / de segundo / de postre", definition: "For starter / for main course / for dessert — structures a restaurant order." },
      { term: "quisiera", definition: "I would like — polite conditional form of querer, standard for ordering food." },
      { term: "¿me puede traer...?", definition: "Can you bring me...? — polite formal request using usted's form of poder." },
      { term: "un poco de", definition: "A little of — combines with 'de' before a food noun, e.g. un poco de sal." },
      { term: "una ración de", definition: "A portion/serving of." },
      { term: "el plato típico", definition: "Typical/traditional dish, e.g. la paella or el gazpacho." },
    ],
    examTips: [
      {
        tip: "Distinguish estar bueno (tastes good, this time) from ser bueno (is healthy/good for you, generally).",
        detail: "El pescado está bueno hoy describes how it tastes today, while el pescado es bueno para la salud makes a lasting claim about fish in general — mixing these changes the meaning.",
      },
      {
        tip: "Use tener hambre/sed, never ser or estar, for hunger and thirst.",
        detail: "Tengo hambre (I'm hungry) follows the same pattern as tener años for age — a very common and easily-avoided ser/estar substitution error.",
      },
      {
        tip: "Use quisiera and ¿me puede traer...? for a polite, exam-appropriate register when ordering.",
        detail: "These forms sound noticeably more natural and polite than quiero or ¿puedes traerme...?, and speaking exam mark schemes reward appropriate register in role-play tasks.",
      },
      {
        tip: "Remember el agua takes 'el' despite being a feminine noun.",
        detail: "El agua uses the masculine article purely for pronunciation, to avoid two a-sounds colliding (el agua, not la agua) — but any adjective describing it still agrees as feminine: el agua fría.",
      },
      {
        tip: "Structure a restaurant order with de primero/de segundo/de postre for a fuller, higher-mark answer.",
        detail: "Listing a full three-course order with these connector phrases shows more range than simply naming one dish, and matches how a real Spanish menu and order actually work.",
      },
      {
        tip: "Always follow a food opinion with porque and a specific reason.",
        detail: "Me encanta la paella porque es muy sabrosa scores higher than a bare me encanta la paella, exactly as with any other GCSE opinion structure.",
      },
    ],
    practice: [
      {
        question: "Translate into English: '¿Me puede traer la cuenta, por favor? Tengo mucha hambre.'",
        accept: ["can you bring me the bill, please? i'm very hungry", "can you bring me the bill please? i am very hungry"],
        answer: "Can you bring me the bill, please? I'm very hungry — puede is the formal usted form of poder, and tengo hambre uses tener, not estar, for hunger.",
      },
      {
        question: "Translate into Spanish: 'I would like the fish with a little salad, please.'",
        accept: ["quisiera el pescado con un poco de ensalada, por favor", "quisiera el pescado con un poco de ensalada por favor"],
        answer: "Quisiera el pescado con un poco de ensalada, por favor — quisiera is the polite ordering form, and un poco de is the fixed partitive phrase for 'a little of'.",
      },
      {
        question: "Complete with the correct form of tener: 'Nosotros ____ mucha sed después del partido.'",
        accept: ["tenemos"],
        answer: "Tenemos — the 'we' form of tener, used here for 'we are very thirsty', since thirst is always expressed with tener in Spanish.",
      },
      {
        question: "Complete with the correct form of estar: 'La sopa ____ muy buena hoy.'",
        accept: ["está"],
        answer: "Está — estar is used because 'tastes good today' is a temporary quality of this particular bowl of soup, not a lasting fact about soup in general.",
      },
      {
        question: "Complete with the correct form of preferir: 'Yo ____ el pollo al pescado.'",
        accept: ["prefiero"],
        answer: "Prefiero — the radical-changing (e→ie) yo form of preferir, used to say 'I prefer chicken to fish'.",
      },
      {
        question: "Which article correctly goes with 'agua'?",
        choices: ["el", "la", "los", "las"],
        accept: ["el"],
        answer: "El agua takes the masculine article purely for pronunciation reasons, even though agua is a feminine noun — adjectives describing it still agree as feminine (el agua fría).",
      },
      {
        question: "Which phrase means 'a portion/serving of'?",
        choices: ["una ración de", "un poco de", "una botella de", "un kilo de"],
        accept: ["una ración de"],
        answer: "Una ración de means 'a portion/serving of'. Un poco de means a little of, una botella de means a bottle of, and un kilo de means a kilo of.",
      },
      {
        question: "In the sentence 'La paella es muy sabrosa', what part of speech is 'sabrosa'?",
        choices: ["An adjective", "A noun", "A verb", "An adverb"],
        accept: ["An adjective"],
        answer: "Sabrosa describes la paella, which is exactly what an adjective does. Es is the verb, paella is the noun, and muy is the adverb intensifying the adjective.",
      },
      {
        question: "Which verb form is used for a polite formal request, matching 'usted'?",
        choices: ["puede", "puedes", "puedo", "pueden"],
        accept: ["puede"],
        answer: "Puede is the usted (formal 'you') form of poder, used in ¿me puede traer...? Puedes is informal tú, puedo is 'I', and pueden is plural 'you all/they'.",
      },
      {
        question: "Which of these is the odd one out?",
        choices: ["sabroso", "soso", "el marisco", "tener hambre"],
        accept: ["el marisco"],
        answer: "El marisco (seafood) is a noun naming a food, while sabroso and soso are opinion adjectives, and tener hambre is a set verb phrase — but note el marisco is the only pure noun among these four options.",
      },
      {
        question: "Give one Spanish dish considered a 'plato típico' and the country or region it's from.",
        accept: ["la paella from valencia/spain", "el gazpacho from andalucía/spain", "la tortilla española from spain"],
        answer: "Any correct pairing works, for example la paella, associated with Valencia in Spain, or el gazpacho, a cold soup from Andalucía.",
      },
      {
        question: "Translate into Spanish: 'For dessert, I would like the chocolate cake.'",
        accept: ["de postre, quisiera el pastel de chocolate", "de postre quisiera el pastel de chocolate"],
        answer: "De postre, quisiera el pastel de chocolate — de postre structures the order by course, and quisiera keeps the register polite.",
      },
      {
        question: "Complete with the correct form of ser: 'Las verduras ____ buenas para la salud.'",
        accept: ["son"],
        answer: "Son — ser is used here because being good for your health is a lasting, general fact about vegetables, not a comment on how one particular dish tastes today.",
      },
      {
        question: "Choose the correctly ordered polite request.",
        choices: ["¿Me puede traer un vaso de agua, por favor?", "¿Puedes me traer un vaso de agua?", "¿Traer me puede un vaso de agua?", "¿Me traer puede un vaso de agua?"],
        accept: ["¿Me puede traer un vaso de agua, por favor?"],
        answer: "¿Me puede traer un vaso de agua, por favor? has the correct word order: pronoun (me) before the conjugated verb (puede), followed by the infinitive (traer).",
      },
      {
        question: "Write a short paragraph in Spanish ordering a full meal at a restaurant (starter, main, dessert and a drink), using quisiera.",
        answer:
          "There's no single right answer — mark this one yourself. A strong answer uses de primero/de segundo/de postre to structure the courses, quisiera correctly before each item, and para beber to introduce the drink order.",
      },
      {
        question: "Explain in English the difference between 'el pescado está bueno' and 'el pescado es bueno', with what each implies.",
        answer:
          "Mark it yourself against this: está bueno describes a temporary quality — this particular fish tastes good right now — while es bueno makes a lasting, general claim, such as fish being healthy/good for you as a food category; a correct answer explains that ser and estar change the meaning here, not just the register.",
      },
      {
        question: "What does 'la cena' mean?",
        choices: [
          "breakfast",
          "lunch",
          "dinner",
          "a snack",
        ],
        accept: [
          "dinner",
        ],
        answer: "La cena is dinner, the evening meal (cenar = to have dinner). Lunch is la comida, breakfast is el desayuno and a snack is la merienda.",
      },
      {
        question: "What does 'el marisco' mean?",
        choices: [
          "fish",
          "seafood",
          "meat",
          "sauce",
        ],
        accept: [
          "seafood",
        ],
        answer: "El marisco is seafood such as prawns and mussels. Fish is el pescado, meat is la carne and sauce is la salsa.",
      },
      {
        question: "If a dish is 'soso', what is it like?",
        choices: [
          "tasty",
          "spicy",
          "salty",
          "bland",
        ],
        accept: [
          "bland",
        ],
        answer: "Soso means bland or tasteless, the opposite of sabroso (tasty). Spicy is picante and salty is salado.",
      },
      {
        question: "What does 'tener sed' mean?",
        choices: [
          "to be hungry",
          "to be thirsty",
          "to be cold",
          "to be sleepy",
        ],
        accept: [
          "to be thirsty",
        ],
        answer: "Tener sed is to be thirsty (literally to have thirst). To be hungry is tener hambre, cold is tener frío and sleepy is tener sueño.",
      },
      {
        question: "On a Spanish menu, what does 'de segundo' mean?",
        choices: [
          "as a starter",
          "as a main course",
          "for dessert",
          "to drink",
        ],
        accept: [
          "as a main course",
        ],
        answer: "De segundo is for the second course, the main dish. De primero is the starter, de postre is dessert and para beber is to drink.",
      },
      {
        question: "What does '¿Me puede traer...?' mean?",
        choices: [
          "Can I pay for...?",
          "Do you have...?",
          "Can you bring me...?",
          "Can I order...?",
        ],
        accept: [
          "Can you bring me...?",
        ],
        answer: "Traer means to bring, and puede is the polite usted form, so it's 'Can you bring me...?'. Do you have...? is ¿Tiene...?",
      },
      {
        question: "Which completes 'La sopa está muy ___' (tasty)?",
        choices: [
          "sabroso",
          "sabrosas",
          "sabrosa",
          "sabrosos",
        ],
        accept: [
          "sabrosa",
        ],
        answer: "La sopa is feminine singular, so the adjective must be sabrosa. Sabroso is masculine, and the -s forms are plural.",
      },
      {
        question: "What does 'un poco de pan' mean?",
        choices: [
          "a lot of bread",
          "a little bread",
          "a slice of bread",
          "a loaf of bread",
        ],
        accept: [
          "a little bread",
        ],
        answer: "Un poco de means a little (of). A lot of bread is mucho pan and a slice of bread is una rebanada de pan.",
      },
      {
        question: "In a restaurant, what is 'la cuenta'?",
        choices: [
          "the menu",
          "the tip",
          "the table",
          "the bill",
        ],
        accept: [
          "the bill",
        ],
        answer: "La cuenta is the bill, as in la cuenta, por favor. The menu is la carta (or el menú), the tip is la propina and the table is la mesa.",
      },
      {
        question: "Which completes 'Yo siempre ___ el pollo' (pedir)?",
        choices: [
          "pide",
          "pido",
          "piden",
          "pedimos",
        ],
        accept: [
          "pido",
        ],
        answer: "Pedir is stem-changing (e to i), so the yo form is pido. Pide is él/ella/usted, piden is ellos and pedimos is nosotros.",
      },
      {
        question: "Which Spanish word means 'the waiter'?",
        choices: [
          "el cocinero",
          "el cliente",
          "el dueño",
          "el camarero",
        ],
        accept: [
          "el camarero",
        ],
        answer: "El camarero serves you at the table. El cocinero is the cook, el cliente is the customer and el dueño is the owner.",
      },
      {
        question: "What does the Spanish adjective 'picante' mean for food?",
        choices: [
          "sweet",
          "salty",
          "spicy",
          "bland",
        ],
        accept: [
          "spicy",
        ],
        answer: "Picante means spicy or hot, like a spicy sauce. Sweet is dulce, salty is salado and bland is soso.",
      },
      {
        question: "Which Spanish word means 'the fork'?",
        choices: [
          "el cuchillo",
          "la cuchara",
          "el vaso",
          "el tenedor",
        ],
        accept: [
          "el tenedor",
        ],
        answer: "El tenedor is the fork. El cuchillo is the knife, la cuchara is the spoon and el vaso is a glass for drinking from.",
      },
      {
        question: "Which Spanish phrase means 'a glass of water'?",
        choices: [
          "una botella de agua",
          "un vaso de agua",
          "una jarra de agua",
          "una lata de agua",
        ],
        accept: [
          "un vaso de agua",
        ],
        answer: "Un vaso de agua is a glass of water. Una botella is a bottle, una jarra is a jug and una lata is a can. Una copa is a wine glass.",
      },
    ],
    misconceptions: [
      {
        wrong: "Hunger and thirst are expressed with estar, since they feel like temporary states.",
        right: "Hunger and thirst use tener (tener hambre, tener sed), following the same pattern as tener años for age, not ser or estar.",
      },
      {
        wrong: "'Está bueno' and 'es bueno' mean exactly the same thing when describing food.",
        right: "Está bueno describes how a specific dish tastes on this occasion, while es bueno makes a lasting claim, such as being healthy — the choice of verb genuinely changes the meaning.",
      },
      {
        wrong: "El agua is masculine because most nouns ending in -a in Spanish are feminine, but this one is an exception with a masculine gender.",
        right: "Agua is grammatically feminine; it only takes the article el for pronunciation reasons (to avoid two a-sounds colliding). Adjectives describing it still agree as feminine: el agua fría, not el agua frío.",
      },
      {
        wrong: "Quiero and quisiera are simply two spellings of the same word with no difference in meaning.",
        right: "Quisiera is a distinct, more polite conditional form used for requests, while quiero is more direct — using quisiera when ordering shows a more natural, higher register in speaking and role-play tasks.",
      },
    ],
  },

  "spanish/grammar-toolkit-2": {
    summary:
      "This is the second dedicated grammar reference topic, covering the preterite tense in full (regular -ar/-er/-ir endings plus the key irregulars ser/ir, tener, hacer and estar), the perfect tense (haber + past participle) for recent past actions, and a direct contrast between the near future (ir a + infinitive) and the simple future tense.",
    keyFacts: [
      {
        heading: "The preterite tense: regular endings",
        points: [
          "Regular -ar preterite: -é, -aste, -ó, -amos, -asteis, -aron — e.g. hablé, hablaste, habló, hablamos, hablasteis, hablaron.",
          "Regular -er and -ir preterite share identical endings: -í, -iste, -ió, -imos, -isteis, -ieron — e.g. comí/viví, comiste/viviste, comió/vivió.",
          "The preterite describes a single, completed action in the past, with a clear beginning and end: Ayer comí paella (Yesterday I ate paella).",
          "The nosotros form of -ar and -ir verbs is identical to the present tense (hablamos, vivimos) — only context tells you which tense is meant.",
        ],
      },
      {
        heading: "Key irregular preterites",
        points: [
          "Ser and ir share the same irregular preterite: fui, fuiste, fue, fuimos, fuisteis, fueron.",
          "Tener: tuve, tuviste, tuvo, tuvimos, tuvisteis, tuvieron — note no accent on tuve, unlike regular preterite yo forms.",
          "Hacer: hice, hiciste, hizo, hicimos, hicisteis, hicieron — c becomes z in the él/ella form (hizo) to preserve the sound.",
          "Estar: estuve, estuviste, estuvo, estuvimos, estuvisteis, estuvieron — shares the same irregular pattern shape as tener (stem + -uve/-uviste... endings with no accents).",
        ],
      },
      {
        heading: "The perfect tense for recent past",
        points: [
          "Formed with the present tense of haber (he, has, ha, hemos, habéis, han) plus a past participle: he comido (I have eaten).",
          "Regular past participles: -ar verbs add -ado (hablado), -er/-ir verbs add -ido (comido, vivido).",
          "Common irregular past participles must be memorised: hecho (done/made, from hacer), escrito (written, from escribir), visto (seen, from ver), dicho (said, from decir), puesto (put, from poner), abierto (opened, from abrir).",
          "The perfect tense is used for actions with a link to the present or the recent past — He terminado mis deberes (I have finished my homework) — while the preterite is for a completed action clearly located in the past.",
        ],
      },
      {
        heading: "Near future vs simple future",
        points: [
          "The near future (ir a + infinitive) is used for a planned or immediate future action: Voy a estudiar esta noche (I'm going to study tonight).",
          "The simple future adds its own endings directly onto the infinitive: -é, -ás, -á, -emos, -éis, -án, e.g. estudiaré, estudiarás, estudiará.",
          "The simple future is used for more distant, general or predicted future events: En el futuro, viviré en España (In the future, I will live in Spain).",
          "A handful of verbs have an irregular stem for the simple future while keeping the regular endings: haré (hacer), tendré (tener), podré (poder), diré (decir), saldré (salir).",
        ],
      },
    ],
    flashcards: [
      { term: "hablé", definition: "I spoke — regular preterite yo form of hablar (-ar verb), takes an accent on the é." },
      { term: "comí", definition: "I ate — regular preterite yo form of comer (-er verb), takes an accent on the í." },
      { term: "fui", definition: "I went / I was — irregular preterite, shared by ir and ser." },
      { term: "tuve", definition: "I had — irregular preterite of tener, no accent unlike regular preterite yo forms." },
      { term: "estuve", definition: "I was / I stayed (temporary/location) — irregular preterite of estar, same pattern shape as tuve." },
      { term: "he comido", definition: "I have eaten — perfect tense: present tense of haber (he) plus past participle (comido)." },
      { term: "hecho", definition: "Done / made — irregular past participle of hacer, used in the perfect tense (he hecho)." },
      { term: "visto", definition: "Seen — irregular past participle of ver, used in the perfect tense (he visto)." },
      { term: "escrito", definition: "Written — irregular past participle of escribir." },
      { term: "voy a estudiar", definition: "I'm going to study — near future: conjugated ir + a + infinitive." },
      { term: "estudiaré", definition: "I will study — simple future, formed by adding -é directly onto the infinitive estudiar." },
      { term: "haré", definition: "I will do/make — irregular simple future stem of hacer (har-) plus the regular future ending -é." },
      { term: "tendré", definition: "I will have — irregular simple future stem of tener (tendr-) plus the regular future ending -é." },
      { term: "el participio pasado", definition: "Past participle — the -ado/-ido form used with haber to form the perfect tense, e.g. hablado, comido." },
    ],
    examTips: [
      {
        tip: "Use the preterite for a single completed past action, and the perfect for a recent action linked to now.",
        detail: "Ayer visité Madrid (preterite, a clear past event) versus Ya he visitado Madrid (perfect, relevant to the present, e.g. 'I have already visited') — the choice changes the shade of meaning.",
      },
      {
        tip: "Learn irregular past participles as a fixed list, since they don't follow the -ado/-ido pattern.",
        detail: "Hecho, escrito, visto, dicho, puesto and abierto must simply be memorised — guessing 'hacido' or 'veido' instead of hecho/visto is a very common error.",
      },
      {
        tip: "Distinguish the near future (ir a + infinitive) from the simple future by how immediate or planned the action is.",
        detail: "Voy a estudiar esta noche (a concrete plan for tonight) reads differently from Estudiaré medicina en la universidad (a more distant, general future prediction) — both are correct but suit different contexts.",
      },
      {
        tip: "Memorise the handful of irregular simple future stems separately from the regular pattern.",
        detail: "Haré, tendré, podré, diré and saldré keep the regular future endings but change the stem — the endings themselves (-é, -ás, -á...) never change, even for irregular verbs.",
      },
      {
        tip: "Don't confuse the nosotros preterite of -ar verbs with the present tense.",
        detail: "Hablamos can mean either 'we speak' (present) or 'we spoke' (preterite) — the surrounding context, such as a past time marker like ayer, is what tells you which tense is meant.",
      },
      {
        tip: "Build full six-person tables for fui, tuve, hice and estuve and drill them together.",
        detail: "These four irregular preterites share a similar unaccented, stem-changed pattern, so learning them side by side makes the pattern easier to remember than learning each verb in isolation.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'Ya he terminado mis deberes, pero ayer hice mucho ejercicio.'",
        accept: ["i have already finished my homework, but yesterday i did a lot of exercise", "i've already finished my homework, but yesterday i did lots of exercise"],
        answer: "I have already finished my homework, but yesterday I did a lot of exercise — he terminado is the perfect tense (recent, present-linked), while hice is the preterite (a completed past event marked by ayer).",
      },
      {
        question: "Translate into Spanish: 'In the future, I will live in a big city.'",
        accept: ["en el futuro, viviré en una ciudad grande", "en el futuro vivire en una ciudad grande"],
        answer: "En el futuro, viviré en una ciudad grande — viviré is the simple future, formed by adding -é directly onto the infinitive vivir, appropriate for a distant, general prediction.",
      },
      {
        question: "Complete with the correct preterite form of tener: 'Nosotros ____ un problema con el vuelo.'",
        accept: ["tuvimos"],
        answer: "Tuvimos — the irregular preterite 'we' form of tener, following the unaccented stem-change pattern shared with estuve and hice.",
      },
      {
        question: "Complete with the correct past participle: 'Ella ha ____ una carta.' (escribir)",
        accept: ["escrito"],
        answer: "Escrito — the irregular past participle of escribir, used here in the perfect tense: Ella ha escrito una carta (She has written a letter).",
      },
      {
        question: "Complete with the correct near future form: 'Yo ____ a viajar a México el próximo año.' (ir)",
        accept: ["voy"],
        answer: "Voy — the yo form of ir, combined with a + infinitive (viajar) to form the near future 'I am going to travel to Mexico next year'.",
      },
      {
        question: "Which of these correctly means 'I will do/make' in the simple future?",
        choices: ["haré", "hago", "hice", "he hecho"],
        accept: ["haré"],
        answer: "Haré is the irregular simple future yo form of hacer. Hago is present tense, hice is preterite, and he hecho is the perfect tense.",
      },
      {
        question: "Which irregular past participle correctly matches the verb 'ver'?",
        choices: ["visto", "veido", "vido", "veo"],
        accept: ["visto"],
        answer: "Visto is the correct irregular past participle of ver (to see), used in the perfect tense: he visto (I have seen).",
      },
      {
        question: "In the sentence 'He comido demasiado', what part of speech is 'comido'?",
        choices: ["A past participle", "A noun", "An infinitive", "An adverb"],
        accept: ["A past participle"],
        answer: "Comido is the past participle of comer, combined with the auxiliary verb he to form the perfect tense — it is not a noun, infinitive, or adverb.",
      },
      {
        question: "Which verb form correctly completes: 'El año que viene, ellos ____ a la universidad.' (ir, simple future)",
        choices: ["irán", "van", "fueron", "iban"],
        accept: ["irán"],
        answer: "Irán is the irregular simple future third-person plural form of ir, correctly used with el año que viene (next year) for a future prediction.",
      },
      {
        question: "Which tense uses 'haber' plus a past participle?",
        choices: ["the perfect tense", "the preterite", "the simple future", "the near future"],
        accept: ["the perfect tense"],
        answer: "The perfect tense combines the present tense of haber (he, has, ha...) with a past participle, e.g. he comido. The other tenses use entirely different structures.",
      },
      {
        question: "Give one irregular preterite verb form and the infinitive it comes from.",
        accept: ["fui from ir or ser", "tuve from tener", "hice from hacer", "estuve from estar"],
        answer: "Any correct pairing works, for example tuve (from tener) or estuve (from estar) — both follow the same unaccented irregular preterite pattern.",
      },
      {
        question: "Translate into Spanish: 'I have never visited Mexico.'",
        accept: ["nunca he visitado méxico", "nunca he visitado mexico"],
        answer: "Nunca he visitado México — the perfect tense (he visitado) is used with nunca to express an experience up to now, and visitado is a regular -ado past participle.",
      },
      {
        question: "Complete with the correct preterite form of estar: 'Yo ____ en Barcelona el verano pasado.'",
        accept: ["estuve"],
        answer: "Estuve — the irregular preterite yo form of estar, used here for a completed past stay: 'I was in Barcelona last summer'.",
      },
      {
        question: "Choose the sentence that correctly uses the simple future rather than the near future.",
        choices: ["Estudiaré derecho en la universidad.", "Voy a estudiar derecho en la universidad.", "Estudio derecho en la universidad.", "He estudiado derecho en la universidad."],
        accept: ["Estudiaré derecho en la universidad."],
        answer: "Estudiaré derecho en la universidad uses the simple future ending -é directly on the infinitive, appropriate for a general, more distant future plan like a university course.",
      },
      {
        question: "Write two sentences in Spanish about your future: one using the near future (ir a + infinitive) and one using the simple future, and explain in English why you chose each form.",
        answer:
          "There's no single right answer — mark this one yourself. A strong answer gives one correct near future sentence (e.g. Voy a estudiar esta noche) for something planned/immediate, one correct simple future sentence (e.g. Viviré en otro país algún día) for something more distant or general, and explains that distinction in English.",
      },
      {
        question: "Explain in English the difference between the preterite and the perfect tense, with one original example sentence for each.",
        answer:
          "Mark it yourself against this: the preterite describes a single completed action clearly located in the past, often with a time marker like ayer (e.g. Ayer comí paella), while the perfect tense links a recent action to the present, often with ya or nunca (e.g. Ya he comido) — a correct answer gives one grammatically accurate original example for each tense.",
      },
      {
        question: "'Comí' is in which tense?",
        choices: [
          "present",
          "imperfect",
          "future",
          "preterite",
        ],
        accept: [
          "preterite",
        ],
        answer: "Comí (I ate) is the preterite: -er verbs take -í in the yo form. The imperfect would be comía and the future comeré.",
      },
      {
        question: "What is the past participle of 'hacer'?",
        choices: [
          "hecho",
          "hacido",
          "hizo",
          "haciendo",
        ],
        accept: [
          "hecho",
        ],
        answer: "Hacer has the irregular participle hecho: he hecho (I have done). Hacido doesn't exist, hizo is preterite and haciendo is the gerund.",
      },
      {
        question: "What is the past participle of 'poner'?",
        choices: [
          "ponido",
          "puesto",
          "puso",
          "poniendo",
        ],
        accept: [
          "puesto",
        ],
        answer: "Poner has the irregular participle puesto: he puesto la mesa. Ponido is a common mistake, puso is preterite and poniendo is the gerund.",
      },
      {
        question: "What is the past participle of 'abrir'?",
        choices: [
          "abrido",
          "abrió",
          "abierto",
          "abriendo",
        ],
        accept: [
          "abierto",
        ],
        answer: "Abrir is irregular: the participle is abierto, as in han abierto la tienda. Abrido looks regular but is wrong; abrió is preterite.",
      },
      {
        question: "Which completes 'Nosotros ___ comido paella'?",
        choices: [
          "han",
          "hemos",
          "somos",
          "tenemos",
        ],
        accept: [
          "hemos",
        ],
        answer: "The perfect tense uses haber, and its nosotros form is hemos. Han is ellos; ser (somos) and tener (tenemos) are never the auxiliary here.",
      },
      {
        question: "What does 'tendré' mean?",
        choices: [
          "I had",
          "I will have",
          "I would have",
          "I have",
        ],
        accept: [
          "I will have",
        ],
        answer: "Tendré is the irregular simple future of tener (stem tendr- plus -é). I had is tuve or tenía, and I would have is tendría.",
      },
      {
        question: "Which completes 'Mañana ellos ___ la cena' (hacer, simple future)?",
        choices: [
          "hacerán",
          "hicieron",
          "harán",
          "hacen",
        ],
        accept: [
          "harán",
        ],
        answer: "Hacer has the irregular future stem har-, so ellos harán. Hacerán is a common slip, hicieron is preterite and hacen is present.",
      },
      {
        question: "'Estuve' comes from which verb?",
        choices: [
          "ser",
          "estar",
          "tener",
          "ir",
        ],
        accept: [
          "estar",
        ],
        answer: "Estuve (I was) is the irregular preterite of estar. Ser gives fui, tener gives tuve (similar ending, different verb) and ir also gives fui.",
      },
      {
        question: "Which completes 'Ayer ella ___ un accidente' (tener, preterite)?",
        choices: [
          "tuve",
          "tenió",
          "tuvo",
          "tenía",
        ],
        accept: [
          "tuvo",
        ],
        answer: "Tener has the irregular preterite stem tuv-, and the ella form is tuvo with no accent. Tuve is yo, tenía is imperfect and tenió doesn't exist.",
      },
      {
        question: "What does 'hablé' mean?",
        choices: [
          "he spoke",
          "I will speak",
          "I spoke",
          "I speak",
        ],
        accept: [
          "I spoke",
        ],
        answer: "Hablé, with the accent on the final é, is the yo preterite: I spoke. Habló is he/she spoke, hablaré is I will speak and hablo is I speak.",
      },
      {
        question: "What is the past participle of 'volver'?",
        choices: [
          "volvido",
          "vuelto",
          "vuelvo",
          "volvió",
        ],
        accept: [
          "vuelto",
        ],
        answer: "Volver has an irregular participle: he vuelto (I have returned). Volvido is a common mistake, vuelvo is present and volvió is preterite.",
      },
      {
        question: "What is the 'ellos' form of the Spanish verb 'hablar' in the preterite?",
        choices: [
          "hablaban",
          "hablaron",
          "hablarán",
          "hablan",
        ],
        accept: [
          "hablaron",
        ],
        answer: "Hablaron means they spoke: -ar verbs take -aron for ellos in the preterite. Hablaban is imperfect, hablarán is future and hablan is present.",
      },
      {
        question: "What is the past participle of the Spanish verb 'decir'?",
        choices: [
          "decido",
          "dicho",
          "decho",
          "dicto",
        ],
        accept: [
          "dicho",
        ],
        answer: "Dicho is irregular, as in he dicho, I have said. A regular -ir verb would end in -ido, but decido is actually 'I decide' from decidir.",
      },
      {
        question: "What does the Spanish verb form 'iré' mean?",
        choices: [
          "I went",
          "I will go",
          "I am going",
          "I used to go",
        ],
        accept: [
          "I will go",
        ],
        answer: "Iré is the simple future of ir, adding -é to the infinitive. I went is fui, I am going is voy and I used to go is iba.",
      },
    ],
    misconceptions: [
      {
        wrong: "The near future and the simple future mean exactly the same thing and can always be swapped freely.",
        right: "The near future (ir a + infinitive) suits planned or immediate actions, while the simple future suits more distant, general predictions — both are grammatically correct but native speakers choose between them based on how definite or immediate the action feels.",
      },
      {
        wrong: "All past participles are formed by simply adding -ado or -ido to the verb stem.",
        right: "That works for regular verbs (hablado, comido), but a set of common verbs have irregular past participles that must be memorised individually — hecho, escrito, visto, dicho, puesto, abierto.",
      },
      {
        wrong: "Tener and estar have completely different, unrelated irregular preterite patterns.",
        right: "They actually follow a very similar unaccented irregular pattern (tuve/tuviste/tuvo... and estuve/estuviste/estuvo...), which makes them easier to learn together rather than as separate, unrelated forms.",
      },
      {
        wrong: "The preterite and the perfect tense are just two different ways of saying the same thing about the past.",
        right: "They express different shades of meaning — the preterite marks a completed, closed-off past action, while the perfect tense connects an action to the present moment or very recent past, and native speakers choose deliberately between them.",
      },
      {
        wrong: "Every verb that's irregular in the simple future also has irregular future endings, not just an irregular stem.",
        right: "The future endings themselves (-é, -ás, -á, -emos, -éis, -án) never change, even for irregular verbs like hacer (haré) or tener (tendré) — only the stem is irregular, not the ending.",
      },
    ],
  },

  "spanish/school-and-education-system": {
    summary:
      "This topic covers vocabulary for the Spanish and Latin American school system, comparing it to the UK system, the subjects and qualifications students take, and how to express opinions on school rules and academic pressure using standard opinion structures plus stronger connective language.",
    keyFacts: [
      {
        heading: "The Spanish education system",
        points: [
          "La educación secundaria obligatoria (ESO) runs from age 12 to 16 in Spain, roughly comparable to UK Key Stage 3 and GCSE years combined.",
          "After ESO, students choose el bachillerato (an academic two-year course leading to university) or la formación profesional (vocational training).",
          "La selectividad/la EBAU is the Spanish university entrance exam, roughly comparable to the role A-levels play for UK university admission.",
          "El colegio usually refers to a primary school, while el instituto refers to a secondary school — using colegio for a secondary school is a common but incorrect assumption.",
        ],
      },
      {
        heading: "Comparing to the UK system",
        points: [
          "En el Reino Unido... / En España... structures a direct comparison sentence by naming the country first.",
          "A diferencia de, mientras que and en cambio (from other topics) all apply here to compare systems: A diferencia del Reino Unido, en España los alumnos eligen el bachillerato o la formación profesional.",
          "GCSEs themselves don't have a direct one-to-one Spanish equivalent, so describing them as exámenes que se hacen a los dieciséis años (exams taken at sixteen) is a useful workaround phrase.",
          "Grading systems differ — Spain commonly grades out of 10, while the UK uses letter or number grades, which is a useful factual comparison point.",
        ],
      },
      {
        heading: "Subjects and qualifications",
        points: [
          "Asignaturas obligatorias (compulsory subjects) and asignaturas optativas (optional subjects) is a useful distinction when describing a curriculum.",
          "Aprobar (to pass) and suspender (to fail) are the key verbs for talking about exam results: Aprobé todos mis exámenes (I passed all my exams).",
          "Sacar una nota (to get a grade/mark) is a set phrase: Saqué un ocho en matemáticas (I got an eight in maths, on the out-of-10 scale).",
          "El título/el diploma (qualification/diploma) is the general word for a formal academic qualification.",
        ],
      },
      {
        heading: "Opinions on school rules and pressure",
        points: [
          "Estar bajo presión (to be under pressure) and el estrés (stress) are useful vocabulary for discussing academic pressure.",
          "Tener que + infinitive (to have to) expresses obligation about rules: Tenemos que llevar uniforme (We have to wear uniform).",
          "Estar prohibido/a (to be forbidden) describes a school rule: Está prohibido usar el móvil en clase.",
          "Deberíamos + infinitive (we should) is a useful conditional structure for suggesting changes to school rules: Deberíamos tener más tiempo libre.",
        ],
      },
    ],
    flashcards: [
      { term: "la ESO", definition: "Educación Secundaria Obligatoria — compulsory secondary education in Spain, roughly ages 12–16." },
      { term: "el bachillerato", definition: "An academic two-year post-16 course leading towards university, roughly comparable to A-levels." },
      { term: "la formación profesional", definition: "Vocational training — the alternative post-16 route to el bachillerato." },
      { term: "el instituto", definition: "Secondary school — distinct from el colegio, which usually means primary school." },
      { term: "aprobar", definition: "To pass (an exam) — false friend warning: not related to 'to approve' in the everyday sense used here." },
      { term: "suspender", definition: "To fail (an exam) — false friend, does not mean 'to suspend' here." },
      { term: "sacar una nota", definition: "To get a grade/mark — literally 'to take out a grade'." },
      { term: "la asignatura obligatoria", definition: "Compulsory subject — one every student must study." },
      { term: "la asignatura optativa", definition: "Optional subject — one a student can choose to study." },
      { term: "estar bajo presión", definition: "To be under pressure." },
      { term: "el estrés", definition: "Stress — commonly discussed in relation to exams and school pressure." },
      { term: "estar prohibido/a", definition: "To be forbidden/prohibited." },
      { term: "deberíamos", definition: "We should — conditional form of deber, used for suggestions about rules or changes." },
      { term: "el título", definition: "Qualification/diploma/degree." },
    ],
    examTips: [
      {
        tip: "Don't call a secondary school 'el colegio' — use 'el instituto' instead.",
        detail: "El colegio typically refers to a primary school in Spain, so using it for a secondary school setting is a common vocabulary mix-up that can confuse the meaning of a sentence.",
      },
      {
        tip: "Use aprobar/suspender confidently — they don't mean what their English near-cousins suggest.",
        detail: "Aprobar means to pass, not 'to approve' in the everyday English sense, and suspender means to fail, not 'to suspend' — both are false-friend traps worth learning deliberately.",
      },
      {
        tip: "Use tener que + infinitive for rules, and deberíamos + infinitive for suggested changes.",
        detail: "Tenemos que llevar uniforme states an actual rule, while Deberíamos tener más tiempo libre proposes a change — mixing these two structures up changes whether you sound like you're describing or recommending.",
      },
      {
        tip: "Use a diferencia de / mientras que to compare the Spanish and UK systems directly, rather than describing them in two separate, disconnected sentences.",
        detail: "A single comparative sentence naming both countries shows stronger control of structure than two flat statements placed one after another.",
      },
      {
        tip: "Remember Spanish grades are commonly out of 10, so translate marks sensibly rather than literally.",
        detail: "Saqué un ocho (I got an eight) makes sense on the Spanish out-of-10 scale — don't assume it maps directly onto a UK percentage or letter grade without explaining the difference.",
      },
      {
        tip: "Support opinions on school rules and pressure with porque, exactly as with any other GCSE opinion.",
        detail: "Estoy bajo mucha presión porque tenemos muchos exámenes gives a fuller, more explanatory answer than a bare estoy bajo presión.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'A diferencia del Reino Unido, en España los alumnos eligen el bachillerato o la formación profesional a los dieciséis años.'",
        accept: ["unlike the united kingdom, in spain students choose academic sixth form or vocational training at sixteen"],
        answer: "Unlike the United Kingdom, in Spain students choose academic sixth form (bachillerato) or vocational training at sixteen — a diferencia de introduces the comparison between the two systems.",
      },
      {
        question: "Translate into Spanish: 'We have to wear a uniform, but I think we should have more free time.'",
        accept: ["tenemos que llevar uniforme, pero creo que deberíamos tener más tiempo libre"],
        answer: "Tenemos que llevar uniforme, pero creo que deberíamos tener más tiempo libre — tenemos que states an actual rule, while deberíamos proposes a change.",
      },
      {
        question: "Complete with the correct form of aprobar: 'Yo ____ todos mis exámenes el año pasado.'",
        accept: ["aprobé"],
        answer: "Aprobé — the regular preterite yo form of aprobar, used here for 'I passed all my exams last year'.",
      },
      {
        question: "Complete with the correct form of estar: 'Los alumnos ____ bajo mucha presión antes de los exámenes.'",
        accept: ["están"],
        answer: "Están — the third-person plural form of estar, used because being under pressure is a temporary state, not a lasting trait.",
      },
      {
        question: "Complete with the correct form of tener: 'Nosotros ____ que estudiar mucho para la selectividad.'",
        accept: ["tenemos"],
        answer: "Tenemos — the 'we' form of tener, used in the fixed obligation structure tener que + infinitive: 'we have to study a lot for the university entrance exam'.",
      },
      {
        question: "Which Spanish word usually refers to a secondary school?",
        choices: ["el instituto", "el colegio", "la universidad", "la guardería"],
        accept: ["el instituto"],
        answer: "El instituto usually refers to a secondary school. El colegio typically means primary school, la universidad means university, and la guardería means nursery/kindergarten.",
      },
      {
        question: "Which verb means 'to fail' an exam?",
        choices: ["suspender", "aprobar", "sacar", "estudiar"],
        accept: ["suspender"],
        answer: "Suspender means to fail an exam. Aprobar means to pass, sacar (una nota) means to get a grade, and estudiar means to study.",
      },
      {
        question: "In the sentence 'Está prohibido usar el móvil en clase', what part of speech is 'prohibido'?",
        choices: ["A past participle used as an adjective", "A noun", "An infinitive", "An adverb"],
        accept: ["A past participle used as an adjective"],
        answer: "Prohibido is the past participle of prohibir, used here with estar as a descriptive adjective meaning 'forbidden' — it describes the state of the action (using a phone), not a noun or a separate action.",
      },
      {
        question: "Which structure correctly expresses a suggestion or recommendation, rather than a strict rule?",
        choices: ["deberíamos + infinitive", "tenemos que + infinitive", "está prohibido + infinitive", "hay que + infinitive"],
        accept: ["deberíamos + infinitive"],
        answer: "Deberíamos + infinitive ('we should') expresses a suggestion. Tenemos que, está prohibido and hay que all express an actual obligation or rule, not a mere suggestion.",
      },
      {
        question: "Which post-16 option in Spain is vocational rather than academic?",
        choices: ["la formación profesional", "el bachillerato", "la ESO", "la selectividad"],
        accept: ["la formación profesional"],
        answer: "La formación profesional is the vocational training route. El bachillerato is the academic route, la ESO is compulsory secondary education (12–16), and la selectividad is the university entrance exam.",
      },
      {
        question: "Give one similarity or difference between the Spanish and UK school systems in Spanish.",
        accept: ["en españa las notas son sobre diez, pero en el reino unido no", "los alumnos españoles eligen el bachillerato o la formación profesional a los dieciséis"],
        answer: "Any accurate comparison works, for example noting that Spanish grades are commonly out of ten, or that at sixteen Spanish students choose between bachillerato and formación profesional rather than continuing with GCSEs.",
      },
      {
        question: "Translate into Spanish: 'I got a nine in Spanish and I'm very happy.'",
        accept: ["saqué un nueve en español y estoy muy contento", "saqué un nueve en español y estoy muy contenta"],
        answer: "Saqué un nueve en español y estoy muy contento/a — sacar una nota is the set phrase for getting a grade, and estoy contento/a uses estar for a temporary feeling.",
      },
      {
        question: "Complete with the correct form of deber (conditional): 'Los profesores ____ dar menos deberes.' (deberíamos family, third person)",
        accept: ["deberían"],
        answer: "Deberían — the third-person plural conditional form of deber, used here for 'teachers should give less homework', following the same pattern as deberíamos but for 'they'.",
      },
      {
        question: "Choose the sentence that most naturally describes an actual school rule.",
        choices: ["Está prohibido llevar joyas en clase.", "Deberíamos poder llevar joyas en clase.", "Me gustaría llevar joyas en clase.", "Prefiero llevar joyas en clase."],
        accept: ["Está prohibido llevar joyas en clase."],
        answer: "Está prohibido llevar joyas en clase states an actual existing rule ('wearing jewellery in class is forbidden'), while the other options express a wish, suggestion or preference rather than a rule.",
      },
      {
        question: "Write a short paragraph in Spanish comparing the Spanish and UK school systems, using at least one comparison phrase and one obligation structure.",
        answer:
          "There's no single right answer — mark this one yourself. A strong answer uses a comparison phrase such as a diferencia de or mientras que, correctly names at least one real feature of each system (e.g. bachillerato vs sixth form, grading out of 10 vs letter grades), and includes tener que or hay que to describe a rule in either system.",
      },
      {
        question: "Explain in English the difference between el colegio and el instituto in Spanish, and why using the wrong one could confuse a reader.",
        answer:
          "Mark it yourself against this: el colegio usually refers to a primary school, while el instituto refers to a secondary school, so describing a secondary-school experience using colegio could mislead a reader into picturing a younger age group or a different stage of education than intended.",
      },
      {
        question: "What does 'aprobar' mean in the context of exams?",
        choices: [
          "to fail",
          "to revise",
          "to pass",
          "to resit",
        ],
        accept: [
          "to pass",
        ],
        answer: "Aprobar un examen is to pass an exam. Its opposite is suspender (to fail); to revise is repasar.",
      },
      {
        question: "What is 'una asignatura optativa'?",
        choices: [
          "a compulsory subject",
          "an optional subject",
          "a favourite subject",
          "a difficult subject",
        ],
        accept: [
          "an optional subject",
        ],
        answer: "Optativa means optional, a subject you choose. Una asignatura obligatoria is compulsory, one everyone must take.",
      },
      {
        question: "At roughly what ages do Spanish pupils study 'la ESO'?",
        choices: [
          "ages 3 to 6",
          "ages 6 to 12",
          "ages 12 to 16",
          "ages 16 to 18",
        ],
        accept: [
          "ages 12 to 16",
        ],
        answer: "La ESO is compulsory secondary education, about 12 to 16. Primary is 6 to 12, and after 16 pupils choose el bachillerato or formación profesional.",
      },
      {
        question: "What does 'sacar una buena nota' mean?",
        choices: [
          "to take good notes",
          "to get a good mark",
          "to read the notice",
          "to hand in homework",
        ],
        accept: [
          "to get a good mark",
        ],
        answer: "Sacar una nota is to get a mark or grade; una nota here is a mark. To take notes is tomar apuntes, so 'take good notes' is the false-friend trap.",
      },
      {
        question: "What does 'estar bajo presión' mean?",
        choices: [
          "to be in a hurry",
          "to be under pressure",
          "to be bored",
          "to be behind",
        ],
        accept: [
          "to be under pressure",
        ],
        answer: "Bajo means under and la presión is pressure, so it's to be under pressure, often linked to el estrés. In a hurry is tener prisa.",
      },
      {
        question: "What does 'Está prohibido correr' mean?",
        choices: [
          "Running is required",
          "Running is allowed",
          "Running is forbidden",
          "Running is popular",
        ],
        accept: [
          "Running is forbidden",
        ],
        answer: "Prohibido means forbidden, so running is not allowed. Allowed would be permitido, and required would be obligatorio.",
      },
      {
        question: "What does 'deberíamos' mean?",
        choices: [
          "we must",
          "we had to",
          "we will",
          "we should",
        ],
        accept: [
          "we should",
        ],
        answer: "Deberíamos is the conditional of deber, so it's a softer we should, good for suggestions. We must is debemos and we had to is tuvimos que.",
      },
      {
        question: "In education, what does 'el título' mean?",
        choices: [
          "the qualification",
          "the timetable",
          "the uniform",
          "the headteacher",
        ],
        accept: [
          "the qualification",
        ],
        answer: "El título is the qualification or certificate you get at the end. The timetable is el horario and the headteacher is el director or la directora.",
      },
      {
        question: "What does 'repetir curso' mean?",
        choices: [
          "to retake an exam",
          "to change school",
          "to repeat a year",
          "to revise a topic",
        ],
        accept: [
          "to repeat a year",
        ],
        answer: "El curso is the school year, so repetir curso is to repeat the year, which happens in Spain if you fail too many subjects. To change school is cambiar de colegio.",
      },
      {
        question: "What does 'las normas' mean in a school?",
        choices: [
          "the marks",
          "the rules",
          "the lessons",
          "the uniforms",
        ],
        accept: [
          "the rules",
        ],
        answer: "Las normas are the rules, as in las normas del instituto. The marks are las notas and the lessons are las clases.",
      },
      {
        question: "What is 'una asignatura obligatoria'?",
        choices: [
          "an optional subject",
          "a compulsory subject",
          "a favourite subject",
          "a failed subject",
        ],
        accept: [
          "a compulsory subject",
        ],
        answer: "Una asignatura obligatoria is a subject everyone must take. An optional subject you choose is una asignatura optativa.",
      },
      {
        question: "In Spain, what is 'la selectividad'?",
        choices: [
          "end of primary tests",
          "university entry exams",
          "vocational courses",
          "a school report",
        ],
        accept: [
          "university entry exams",
        ],
        answer: "La selectividad is the popular name for the exams taken after el bachillerato to get into university. Vocational courses are la formación profesional.",
      },
      {
        question: "What does the Spanish sentence 'Tenemos que llevar uniforme' mean?",
        choices: [
          "We can wear uniform",
          "We wore uniform",
          "We must wear uniform",
          "We want a uniform",
        ],
        accept: [
          "We must wear uniform",
        ],
        answer: "Tener que plus an infinitive means to have to, and llevar here means to wear. 'We can' would be podemos, and 'we wore' would be llevamos in the past.",
      },
      {
        question: "Which Spanish word means 'the head teacher' (male)?",
        choices: [
          "el tutor",
          "el alumno",
          "el director",
          "el conserje",
        ],
        accept: [
          "el director",
        ],
        answer: "El director (la directora) runs the school. El tutor is the form tutor, el alumno is a pupil and el conserje is the caretaker.",
      },
    ],
    misconceptions: [
      {
        wrong: "El colegio and el instituto both mean the same thing, 'school', with no real difference.",
        right: "El colegio usually refers specifically to a primary school, while el instituto refers to a secondary school — using them interchangeably can mislead a reader about the age group being described.",
      },
      {
        wrong: "Aprobar means 'to approve' and suspender means 'to suspend', matching their English-looking cousins.",
        right: "In an academic context, aprobar means 'to pass' an exam and suspender means 'to fail' one — both are false friends that don't match their closest-looking English words.",
      },
      {
        wrong: "Tenemos que and deberíamos both express the same level of obligation.",
        right: "Tenemos que expresses a genuine, existing obligation or rule, while deberíamos is a softer conditional suggestion ('we should') — they aren't interchangeable in strength of meaning.",
      },
      {
        wrong: "GCSEs have an exact one-to-one equivalent qualification in the Spanish system.",
        right: "There's no perfect direct equivalent — the closest comparison is describing GCSEs functionally, e.g. as exámenes que se hacen a los dieciséis años, since the Spanish ESO/bachillerato structure is organised differently.",
      },
    ],
  },

  "spanish/post-16-choices-and-training": {
    summary:
      "This topic covers vocabulary for further study options and apprenticeships/vocational training, and the grammar for talking about future plans: the near future with ir a + infinitive, the simple future, and expressing intentions with me gustaría + infinitive and quiero + infinitive.",
    keyFacts: [
      {
        heading: "Further study options",
        points: [
          "La universidad (university), la carrera (degree/university course — false friend: not 'career' in English), and la licenciatura (a full degree qualification) are key higher-education nouns.",
          "Matricularse (to enrol) and solicitar una plaza (to apply for a place) are common verbs for the application process.",
          "Una beca (a scholarship/grant) is useful vocabulary when discussing how students fund further study.",
          "El grado (degree course, Spain's current terminology) is now more commonly used than licenciatura in everyday modern Spanish.",
        ],
      },
      {
        heading: "Apprenticeships and vocational training",
        points: [
          "Un aprendizaje/una formación en prácticas (an apprenticeship) combines paid work with structured training.",
          "La formación profesional (vocational training, from the previous topic) is the main alternative route to university in Spain.",
          "Aprender un oficio (to learn a trade) is a useful phrase for describing hands-on vocational routes like plumbing or carpentry.",
          "Ganar experiencia laboral (to gain work experience) is useful for describing the practical side of an apprenticeship.",
        ],
      },
      {
        heading: "Talking about future plans: near future and simple future",
        points: [
          "The near future (ir a + infinitive) suits a fairly concrete, decided plan: Voy a estudiar en la universidad (I'm going to study at university).",
          "The simple future suits a more distant or general prediction: Estudiaré medicina algún día (I will study medicine one day).",
          "No sé qué voy a hacer (I don't know what I'm going to do) is a useful, honest phrase for expressing uncertainty about the future.",
          "Después de + infinitive (after doing...) is useful for sequencing future plans: Después de terminar el bachillerato, voy a...",
        ],
      },
      {
        heading: "Expressing intentions",
        points: [
          "Me gustaría + infinitive (I would like to) is a conditional form, softer and more tentative than quiero: Me gustaría estudiar en el extranjero.",
          "Quiero + infinitive (I want to) is more direct and confident than me gustaría.",
          "Tengo la intención de + infinitive (I intend to) is a more formal alternative for stating a clear intention.",
          "Espero + infinitive (I hope to) expresses a hoped-for but less certain plan: Espero conseguir una plaza en la universidad.",
        ],
      },
    ],
    flashcards: [
      { term: "la carrera", definition: "Degree/university course — false friend warning: does NOT mean 'career' in English, that's often la profesión or la carrera profesional." },
      { term: "el grado", definition: "Degree course — the modern standard term used in Spain, replacing licenciatura in everyday use." },
      { term: "matricularse", definition: "To enrol (reflexive verb)." },
      { term: "solicitar una plaza", definition: "To apply for a place (e.g. at university)." },
      { term: "la beca", definition: "Scholarship/grant — funding that helps pay for further study." },
      { term: "el aprendizaje", definition: "Apprenticeship — combines paid work with structured training." },
      { term: "aprender un oficio", definition: "To learn a trade — a phrase used for hands-on vocational routes." },
      { term: "la experiencia laboral", definition: "Work experience — practical experience gained through a job or placement." },
      { term: "me gustaría", definition: "I would like — conditional form of gustar, softer and more tentative than quiero." },
      { term: "tengo la intención de", definition: "I intend to — a more formal way of stating a clear future intention." },
      { term: "espero", definition: "I hope (to) — from esperar, expressing a hoped-for but less certain plan." },
      { term: "después de", definition: "After — combines with an infinitive to sequence future plans, e.g. después de terminar." },
      { term: "el título universitario", definition: "University degree/qualification." },
    ],
    examTips: [
      {
        tip: "Never translate 'career' as 'carrera' when you mean a job/profession.",
        detail: "La carrera in Spanish usually means a degree/university course, not a career in the English sense — use la profesión or el trabajo instead when talking about a job path.",
      },
      {
        tip: "Use me gustaría rather than quiero for a more tentative, polite-sounding intention.",
        detail: "Me gustaría estudiar medicina sounds more measured and realistic than Quiero estudiar medicina, and using both forms across a piece of writing shows a wider range of language.",
      },
      {
        tip: "Choose between the near future and simple future based on how decided the plan is.",
        detail: "Voy a solicitar una plaza el año que viene suits a concrete, already-decided plan, while Trabajaré en el extranjero algún día suits a vaguer, more distant hope — both are correct but signal different levels of certainty.",
      },
      {
        tip: "Use después de + infinitive to link two future actions in one fluent sentence.",
        detail: "Después de terminar el bachillerato, voy a ir a la universidad links two ideas naturally, scoring higher for structure than two short, disconnected sentences.",
      },
      {
        tip: "It's fine — and often more honest — to express uncertainty about the future using no sé.",
        detail: "No sé qué voy a hacer después de la ESO is a genuinely useful, natural phrase, and examiners don't expect every answer to sound perfectly decided.",
      },
      {
        tip: "Remember matricularse is reflexive and needs a pronoun.",
        detail: "Me voy a matricular en la universidad needs me before matricular — dropping the reflexive pronoun here is the same type of error as forgetting it with levantarse.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'Después de terminar el bachillerato, me gustaría estudiar una carrera de medicina.'",
        accept: ["after finishing sixth form, i would like to study a medicine degree", "after finishing sixth form/a-levels, i'd like to study a medicine degree"],
        answer: "After finishing sixth form (bachillerato), I would like to study a medicine degree — después de + infinitive sequences the plan, and me gustaría expresses the intention tentatively.",
      },
      {
        question: "Translate into Spanish: 'I don't know what I'm going to do, but I hope to get a scholarship.'",
        accept: ["no sé qué voy a hacer, pero espero conseguir una beca", "no se que voy a hacer, pero espero conseguir una beca"],
        answer: "No sé qué voy a hacer, pero espero conseguir una beca — no sé expresses genuine uncertainty, and espero + infinitive expresses a hoped-for plan.",
      },
      {
        question: "Complete with the correct form of ir: 'Ella ____ a solicitar una plaza en la universidad.'",
        accept: ["va"],
        answer: "Va — the third-person singular form of ir, combined with a + infinitive (solicitar) to form the near future 'she is going to apply for a place'.",
      },
      {
        question: "Complete with the correct form of the simple future: 'Yo ____ en el extranjero algún día.' (trabajar)",
        accept: ["trabajaré"],
        answer: "Trabajaré — the regular simple future yo form of trabajar, formed by adding -é directly onto the infinitive, suiting a distant, general future plan.",
      },
      {
        question: "Complete with the correct reflexive form of matricularse: 'Nosotros ____ en septiembre.'",
        accept: ["nos matriculamos"],
        answer: "Nos matriculamos — the reflexive 'we' form of matricularse, needed for 'we enrol in September', since matricularse always requires a reflexive pronoun.",
      },
      {
        question: "Which word correctly means 'scholarship/grant'?",
        choices: ["la beca", "la carrera", "el grado", "el título"],
        accept: ["la beca"],
        answer: "La beca means scholarship/grant. La carrera and el grado both relate to a degree course, and el título means the qualification/diploma itself.",
      },
      {
        question: "Which Spanish word is a false friend for the English word 'career'?",
        choices: ["la carrera", "la profesión", "el trabajo", "el empleo"],
        accept: ["la carrera"],
        answer: "La carrera looks like 'career' but actually means a degree/university course in Spanish. La profesión, el trabajo and el empleo are all genuine words for job/career/employment.",
      },
      {
        question: "In the sentence 'Me gustaría estudiar en el extranjero', what part of speech is 'estudiar'?",
        choices: ["A verb (infinitive)", "A noun", "An adjective", "An adverb"],
        accept: ["A verb (infinitive)"],
        answer: "Estudiar is a verb in its infinitive form, following me gustaría, which never changes the second verb's form regardless of subject.",
      },
      {
        question: "Which phrase expresses the most tentative, softest intention?",
        choices: ["me gustaría", "quiero", "tengo la intención de", "voy a"],
        accept: ["me gustaría"],
        answer: "Me gustaría (I would like) is the softest, most tentative of these options. Quiero is more direct, tengo la intención de is more formal and definite, and voy a signals a concrete plan.",
      },
      {
        question: "Which of these is the odd one out?",
        choices: ["el aprendizaje", "la formación profesional", "aprender un oficio", "matricularse"],
        accept: ["matricularse"],
        answer: "Matricularse (to enrol) is a verb describing an action, while el aprendizaje, la formación profesional and aprender un oficio are all connected to the concept of vocational/apprenticeship training specifically.",
      },
      {
        question: "Give one advantage of choosing an apprenticeship over university, in Spanish.",
        accept: ["se gana experiencia laboral", "se gana dinero mientras se aprende", "no hay que pagar matrícula universitaria"],
        answer: "Any genuine advantage works, for example se gana experiencia laboral (you gain work experience) or se gana dinero mientras se aprende (you earn money while learning).",
      },
      {
        question: "Translate into Spanish: 'She intends to learn a trade instead of going to university.'",
        accept: ["ella tiene la intención de aprender un oficio en vez de ir a la universidad"],
        answer: "Ella tiene la intención de aprender un oficio en vez de ir a la universidad — tiene la intención de is the more formal way to state a clear intention, followed by the infinitive.",
      },
      {
        question: "Complete with the correct form of esperar: 'Nosotros ____ conseguir una beca este año.'",
        accept: ["esperamos"],
        answer: "Esperamos — the regular 'we' form of esperar, used here to say 'we hope to get a scholarship this year', followed by the infinitive conseguir.",
      },
      {
        question: "Choose the sentence that most clearly signals a firm, already-decided plan rather than a distant hope.",
        choices: ["Voy a solicitar una plaza el mes que viene.", "Algún día me gustaría ir a la universidad.", "Espero estudiar en el extranjero.", "Quizás estudie medicina."],
        accept: ["Voy a solicitar una plaza el mes que viene."],
        answer: "Voy a solicitar una plaza el mes que viene uses the near future with a specific near time marker (el mes que viene), signalling a firm, concrete plan rather than a vague hope.",
      },
      {
        question: "Write a short paragraph in Spanish about your plans after finishing school, using at least one near future sentence and one me gustaría/espero sentence.",
        answer:
          "There's no single right answer — mark this one yourself. A strong answer includes a correctly formed near future sentence (voy a + infinitive), a separate sentence with me gustaría or espero + infinitive, and ideally después de + infinitive to link two ideas.",
      },
      {
        question: "Explain in English the difference in tone between 'me gustaría estudiar medicina' and 'voy a estudiar medicina'.",
        answer:
          "Mark it yourself against this: me gustaría estudiar medicina expresses a wish or tentative hope without commitment ('I would like to'), while voy a estudiar medicina states a firm, already-decided plan ('I am going to') — a correct answer explains this difference in certainty, not just translates both literally.",
      },
      {
        question: "In a work context, what does 'el aprendizaje' mean?",
        choices: [
          "a degree",
          "an apprenticeship",
          "a gap year",
          "a scholarship",
        ],
        accept: [
          "an apprenticeship",
        ],
        answer: "El aprendizaje (from aprender) means learning, and in work it's an apprenticeship. A degree is una carrera and a scholarship is una beca.",
      },
      {
        question: "What does 'aprender un oficio' mean?",
        choices: [
          "to work in an office",
          "to learn a language",
          "to learn a trade",
          "to find a job",
        ],
        accept: [
          "to learn a trade",
        ],
        answer: "Un oficio is a trade, like plumbing or carpentry. It's a false friend: an office is una oficina.",
      },
      {
        question: "What does 'solicitar una plaza' mean?",
        choices: [
          "to apply for a place",
          "to visit a square",
          "to pay for a course",
          "to book a room",
        ],
        accept: [
          "to apply for a place",
        ],
        answer: "Solicitar is to apply for, and una plaza is a place (on a course or at university). Una plaza can be a town square, but not with solicitar.",
      },
      {
        question: "What does 'tengo la intención de' mean?",
        choices: [
          "I'd like to",
          "I have to",
          "I intend to",
          "I hope to",
        ],
        accept: [
          "I intend to",
        ],
        answer: "Tengo la intención de is I intend to, a firm plan. I'd like to is me gustaría, I have to is tengo que and I hope to is espero.",
      },
      {
        question: "In 'Espero ir a la universidad', what does 'espero' mean?",
        choices: [
          "I want",
          "I hope",
          "I need",
          "I decide",
        ],
        accept: [
          "I hope",
        ],
        answer: "Esperar means to hope (or wait), and here it's I hope to go to university. I want is quiero, I need is necesito and I decide is decido.",
      },
      {
        question: "What does 'la experiencia laboral' mean?",
        choices: [
          "life experience",
          "a job interview",
          "work experience",
          "a science lab",
        ],
        accept: [
          "work experience",
        ],
        answer: "Laboral means to do with work, so it's work experience. It has nothing to do with a lab (un laboratorio); a job interview is una entrevista.",
      },
      {
        question: "What does 'después de' mean?",
        choices: [
          "before",
          "after",
          "during",
          "instead of",
        ],
        accept: [
          "after",
        ],
        answer: "Después de means after: después de terminar el bachillerato. Before is antes de, during is durante and instead of is en lugar de.",
      },
      {
        question: "Which completes 'Me gustaría ___ un año sabático'?",
        choices: [
          "tomo",
          "tomé",
          "tomando",
          "tomar",
        ],
        accept: [
          "tomar",
        ],
        answer: "Me gustaría is always followed by an infinitive, so tomar. Tomo is present, tomé is preterite and tomando is the gerund.",
      },
      {
        question: "What does 'un año sabático' mean?",
        choices: [
          "a gap year",
          "a leap year",
          "a school year",
          "a final year",
        ],
        accept: [
          "a gap year",
        ],
        answer: "Un año sabático is a gap year, a year out before or after study. A leap year is un año bisiesto and a school year is un curso escolar.",
      },
      {
        question: "What does 'matricularse' mean?",
        choices: [
          "to graduate",
          "to drop out",
          "to apply",
          "to enrol",
        ],
        accept: [
          "to enrol",
        ],
        answer: "Matricularse is to enrol or sign up for a course. To graduate is graduarse and to apply is solicitar, which comes before enrolling.",
      },
      {
        question: "At a Spanish university, what is 'un grado'?",
        choices: [
          "a degree course",
          "an exam grade",
          "a school year",
          "a classroom",
        ],
        accept: [
          "a degree course",
        ],
        answer: "Un grado is a university degree, e.g. un grado en Derecho. It is a false friend: an exam grade or mark is una nota.",
      },
      {
        question: "What does the Spanish sentence 'Pienso estudiar derecho' mean?",
        choices: [
          "I studied law",
          "I plan to study law",
          "I can study law",
          "I like studying law",
        ],
        accept: [
          "I plan to study law",
        ],
        answer: "Pensar plus an infinitive means to plan or intend to, and el derecho is law. I can study law would be puedo estudiar derecho.",
      },
      {
        question: "What does the Spanish word 'la formación' mean when talking about work?",
        choices: [
          "training",
          "a grant",
          "a degree",
          "a job offer",
        ],
        accept: [
          "training",
        ],
        answer: "La formación means training, as in la formación profesional (vocational training). A grant is una beca and a degree is un grado or una carrera.",
      },
      {
        question: "Which Spanish verb form means 'I will be able to'?",
        choices: [
          "puedo",
          "pude",
          "podré",
          "podía",
        ],
        accept: [
          "podré",
        ],
        answer: "Podré is the irregular simple future of poder (the stem is podr-). Puedo is I can, pude is I could (preterite) and podía is the imperfect.",
      },
    ],
    misconceptions: [
      {
        wrong: "'La carrera' means 'career' in the everyday English sense of a job path.",
        right: "La carrera is a false friend that actually means a degree/university course in Spanish — 'career' in the English sense is better translated as la profesión or el trabajo.",
      },
      {
        wrong: "Me gustaría and quiero express exactly the same level of certainty and directness.",
        right: "Me gustaría is a softer, more tentative conditional form ('I would like to'), while quiero is more direct and immediate ('I want to') — the choice signals a genuine difference in tone.",
      },
      {
        wrong: "Matricularse is a regular verb that doesn't need a reflexive pronoun.",
        right: "Matricularse is reflexive and requires a pronoun matching the subject (me matriculo, nos matriculamos) — dropping it produces incomplete Spanish.",
      },
      {
        wrong: "The near future and simple future are used completely at random with no difference in implication.",
        right: "Native speakers generally use the near future (ir a + infinitive) for more decided, immediate plans and the simple future for more distant or general predictions, even though both are grammatically valid in most contexts.",
      },
    ],
  },

  "spanish/jobs-and-careers": {
    summary:
      "This topic covers job vocabulary, describing what a job involves (working conditions, pay, pros and cons), talking about future careers using the near future and simple future, and the formal phrases used in a job application letter or interview situation.",
    keyFacts: [
      {
        heading: "Job vocabulary",
        points: [
          "Common jobs: el/la médico (doctor), el/la profesor(a) (teacher), el/la abogado/a (lawyer), el/la enfermero/a (nurse), el/la ingeniero/a (engineer).",
          "Many job nouns change ending for gender (profesor/profesora), but some stay the same for both genders and just change the article: el/la dentista, el/la periodista (journalist).",
          "Trabajar de/como + job (to work as) doesn't need an article: Trabajo de camarero (I work as a waiter), not trabajo de un camarero.",
          "El trabajo (job/work) and el empleo (employment/a job) are both useful general nouns, alongside el oficio (a trade/craft-based job).",
        ],
      },
      {
        heading: "Describing a job: conditions, pay and pros/cons",
        points: [
          "Las condiciones de trabajo (working conditions) and el horario (working hours) are useful nouns for describing what a job is like day-to-day.",
          "Ganar (to earn) is used for salary: Gano treinta mil euros al año (I earn thirty thousand euros a year).",
          "Bien pagado/mal pagado (well paid/badly paid) are common adjectives describing pay.",
          "Por un lado... por otro lado... (on one hand... on the other hand...) works well here too, for balancing the advantages and disadvantages of a job.",
        ],
      },
      {
        heading: "Talking about future careers",
        points: [
          "The near future states a fairly decided plan: Voy a ser profesor/a (I'm going to be a teacher).",
          "The simple future suits a more distant or uncertain career goal: Trabajaré en el extranjero algún día.",
          "Note that ser (not estar) is used for stating a profession, as a job is treated as a lasting identity fact: Soy médico, not Estoy médico.",
          "No article is needed before the profession after ser: Soy profesor, not Soy un profesor (unless the profession is further described: Soy un profesor muy dedicado).",
        ],
      },
      {
        heading: "Formal job-application phrases",
        points: [
          "Estimado Señor/Estimada Señora (Dear Sir/Dear Madam) opens a formal letter, matching the gender of the recipient if known.",
          "Le escribo para solicitar el puesto de... (I am writing to apply for the position of...) is the standard formal opening line of a job application.",
          "Adjunto mi currículum (I attach my CV) is a standard formal closing phrase in a written application.",
          "Le saluda atentamente (Yours faithfully/sincerely) is the standard formal sign-off for a job-application letter.",
        ],
      },
    ],
    flashcards: [
      { term: "el/la abogado/a", definition: "Lawyer — changes ending for gender (abogado/abogada)." },
      { term: "el/la periodista", definition: "Journalist — same form for both genders, only the article changes (el/la)." },
      { term: "trabajar de / como", definition: "To work as — no article needed before the job, e.g. trabajo de camarero." },
      { term: "el empleo", definition: "Employment / a job — a general noun for paid work." },
      { term: "las condiciones de trabajo", definition: "Working conditions — used to describe what a job is like day-to-day." },
      { term: "ganar", definition: "To earn (money) — false friend warning: also means 'to win', context decides the meaning." },
      { term: "bien pagado / mal pagado", definition: "Well paid / badly paid." },
      { term: "el puesto", definition: "The position/post (job vacancy) — used in formal application phrases like solicitar el puesto de..." },
      { term: "solicitar", definition: "To apply for — used with el puesto or una plaza." },
      { term: "el currículum", definition: "CV/résumé — the document listing your qualifications and experience." },
      { term: "estimado/a", definition: "Dear (formal letter opening) — agrees with the gender of the recipient." },
      { term: "atentamente", definition: "Yours faithfully/sincerely — standard formal letter sign-off." },
      { term: "el sueldo", definition: "Salary/wage — the regular payment received for a job." },
    ],
    examTips: [
      {
        tip: "Use ser, not estar, to state a profession, and remember most professions drop the article.",
        detail: "Soy médico is correct; Estoy médico is wrong because a profession is treated as a lasting identity fact, and Soy un médico is unnecessary unless the profession is further described with an adjective.",
      },
      {
        tip: "Don't put an article before a job noun after trabajar de/como.",
        detail: "Trabajo de camarero is correct; trabajo de un camarero adds an incorrect article — this mirrors the same no-article rule as with ser + profession.",
      },
      {
        tip: "Remember ganar can mean either 'to earn' or 'to win' depending on context.",
        detail: "Gano treinta mil euros (I earn) versus Gané el partido (I won the match) — the surrounding words tell you which meaning is intended.",
      },
      {
        tip: "Use formal register consistently throughout a job-application letter task.",
        detail: "Mixing an informal tú-based sentence into an otherwise formal usted-based letter breaks the consistent register that these tasks are specifically marked on.",
      },
      {
        tip: "Use por un lado / por otro lado to give a balanced view of a job's pros and cons.",
        detail: "This structure signals you can weigh up both sides of a job (e.g. good pay but long hours) rather than only listing one-sided opinions.",
      },
      {
        tip: "Learn job nouns as pairs where gender changes the ending, and as single forms where it changes only the article.",
        detail: "Profesor/profesora changes ending, but periodista and dentista stay the same and only the article (el/la) shows gender — mixing up which pattern applies to which noun is a common error.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'Trabajo de enfermero en un hospital y gano un sueldo bastante bueno.'",
        accept: ["i work as a nurse in a hospital and i earn a fairly good salary", "i work as a nurse in a hospital and earn a fairly good wage"],
        answer: "I work as a nurse in a hospital and I earn a fairly good salary — trabajar de takes no article before the job noun, and ganar here means 'to earn' rather than 'to win'.",
      },
      {
        question: "Translate into Spanish: 'I am writing to apply for the position of waiter.'",
        accept: ["le escribo para solicitar el puesto de camarero"],
        answer: "Le escribo para solicitar el puesto de camarero — this is the standard formal opening line for a job-application letter.",
      },
      {
        question: "Complete with the correct form of ser: 'Ella ____ abogada en Madrid.'",
        accept: ["es"],
        answer: "Es — ser is used for profession because a job is treated as a lasting fact of identity, and no article is needed before abogada.",
      },
      {
        question: "Complete with the correct form of ganar: 'Nosotros ____ bastante dinero en este trabajo.'",
        accept: ["ganamos"],
        answer: "Ganamos — the regular 'we' form of ganar, used here to mean 'we earn' rather than 'we win', because the context (dinero, money) shows the earning meaning.",
      },
      {
        question: "Complete with the correct near future form: 'Yo ____ a ser profesor de español.' (ir)",
        accept: ["voy"],
        answer: "Voy — the yo form of ir, combined with a + infinitive (ser) to form the near future 'I am going to be a Spanish teacher'.",
      },
      {
        question: "Which is the correct formal sign-off for a job-application letter?",
        choices: ["Le saluda atentamente", "Hasta luego", "Un abrazo", "Besos"],
        accept: ["Le saluda atentamente"],
        answer: "Le saluda atentamente is the standard formal sign-off. Hasta luego, un abrazo and besos are all informal ways of ending a conversation or message with a friend.",
      },
      {
        question: "Which sentence correctly states a profession using ser with no article?",
        choices: ["Soy profesor.", "Soy un profesor.", "Estoy profesor.", "Tengo profesor."],
        accept: ["Soy profesor."],
        answer: "Soy profesor is correct — ser is used for profession, and no article is needed unless the profession is further described with an adjective.",
      },
      {
        question: "In the sentence 'Trabajo de camarero los fines de semana', what part of speech is 'camarero'?",
        choices: ["A noun", "An adjective", "A verb", "A preposition"],
        accept: ["A noun"],
        answer: "Camarero is a noun naming the job (waiter). Trabajo is the verb, de is the preposition, and there is no adjective in this sentence.",
      },
      {
        question: "Which word is a false friend, meaning both 'to earn' and 'to win'?",
        choices: ["ganar", "trabajar", "solicitar", "ahorrar"],
        accept: ["ganar"],
        answer: "Ganar can mean either 'to earn' (money) or 'to win' (a game/prize), depending on context. Trabajar means to work, solicitar means to apply, and ahorrar means to save (money).",
      },
      {
        question: "Which of these is the odd one out?",
        choices: ["el currículum", "el puesto", "solicitar", "bien pagado"],
        accept: ["bien pagado"],
        answer: "Bien pagado (well paid) is an adjective describing a job, while el currículum, el puesto and solicitar are all directly connected to the process of applying for a job.",
      },
      {
        question: "Give one advantage AND one disadvantage of a job of your choice, in Spanish.",
        accept: ["está bien pagado and el horario es muy largo", "es interesante and hay mucho estrés", "se ayuda a la gente and el sueldo es bajo"],
        answer: "Any genuine pair works, for example está bien pagado (it's well paid) as an advantage and el horario es muy largo (the hours are very long) as a disadvantage.",
      },
      {
        question: "Translate into Spanish: 'In the future, I would like to work as a doctor abroad.'",
        accept: ["en el futuro, me gustaría trabajar de médico en el extranjero", "en el futuro me gustaria trabajar de medico en el extranjero"],
        answer: "En el futuro, me gustaría trabajar de médico en el extranjero — me gustaría plus the infinitive trabajar expresses the intention, and trabajar de takes no article before médico.",
      },
      {
        question: "Complete with the correct form of solicitar: 'Ellos ____ el mismo puesto de trabajo.'",
        accept: ["solicitan"],
        answer: "Solicitan — the regular third-person plural form of solicitar, used here for 'they are applying for the same job position'.",
      },
      {
        question: "Choose the sentence with the correct formal letter opening.",
        choices: ["Estimada Señora, le escribo para solicitar el puesto de recepcionista.", "Hola, quiero el trabajo de recepcionista.", "¿Qué tal? Busco trabajo de recepcionista.", "Oye, ¿tienes trabajo de recepcionista?"],
        accept: ["Estimada Señora, le escribo para solicitar el puesto de recepcionista."],
        answer: "Estimada Señora, le escribo para solicitar el puesto de recepcionista uses the correct formal opening and register expected in a written job application, unlike the other overly casual options.",
      },
      {
        question: "Write a short formal paragraph in Spanish applying for a job of your choice, including the position you want, one reason you'd be suitable, and a formal sign-off.",
        answer:
          "There's no single right answer — mark this one yourself. A strong answer opens with Estimado/a Señor/a, uses le escribo para solicitar el puesto de..., gives at least one reason using soy/tengo, and closes with le saluda atentamente.",
      },
      {
        question: "Explain in English why 'soy médico' doesn't need an article before 'médico', but 'soy un médico muy dedicado' does.",
        answer:
          "Mark it yourself against this: Spanish drops the indefinite article before a bare profession after ser (soy médico, like saying 'I am doctor'), but once the profession is further described by an adjective, the article returns (soy un médico muy dedicado) because it's now describing 'a [type of] doctor' rather than stating the profession alone.",
      },
      {
        question: "What does 'el periodista' mean?",
        choices: [
          "newsagent",
          "journalist",
          "hairdresser",
          "postman",
        ],
        accept: [
          "journalist",
        ],
        answer: "Un periodista is a journalist; it comes from el periódico (newspaper), which is why newsagent tempts. A postman is un cartero.",
      },
      {
        question: "What does 'la abogada' mean?",
        choices: [
          "doctor",
          "accountant",
          "judge",
          "lawyer",
        ],
        accept: [
          "lawyer",
        ],
        answer: "Una abogada is a (female) lawyer. A doctor is una médica, a judge is una jueza and an avocado is un aguacate, not abogado.",
      },
      {
        question: "What does 'mal pagado' mean?",
        choices: [
          "well paid",
          "badly paid",
          "unpaid",
          "part-time",
        ],
        accept: [
          "badly paid",
        ],
        answer: "Mal means badly, so mal pagado is badly paid. Well paid is bien pagado, and unpaid work is sin sueldo.",
      },
      {
        question: "What does 'el sueldo' mean?",
        choices: [
          "the floor",
          "the salary",
          "the boss",
          "the timetable",
        ],
        accept: [
          "the salary",
        ],
        answer: "El sueldo is the salary or wages. Don't mix it up with el suelo, the floor; the boss is el jefe and the timetable is el horario.",
      },
      {
        question: "In a job advert, what does 'el puesto' mean?",
        choices: [
          "the post office",
          "the interview",
          "the position",
          "the company",
        ],
        accept: [
          "the position",
        ],
        answer: "El puesto is the position or post, as in el puesto de camarero. The post office is Correos, the interview is la entrevista and the company is la empresa.",
      },
      {
        question: "Which word means 'CV' in Spanish?",
        choices: [
          "la carta",
          "la entrevista",
          "el anuncio",
          "el currículum",
        ],
        accept: [
          "el currículum",
        ],
        answer: "El currículum (vitae) is your CV. La carta is a letter, la entrevista is an interview and el anuncio is an advert.",
      },
      {
        question: "What does 'a tiempo parcial' mean?",
        choices: [
          "part-time",
          "full-time",
          "overtime",
          "on time",
        ],
        accept: [
          "part-time",
        ],
        answer: "Parcial means partial, so a tiempo parcial is part-time. Full-time is a tiempo completo, and on time is a tiempo or puntual.",
      },
      {
        question: "Which completes 'Mi padre trabaja ___ mecánico'?",
        choices: [
          "a",
          "de",
          "en",
          "por",
        ],
        accept: [
          "de",
        ],
        answer: "Trabajar de + job means to work as: trabaja de mecánico (como also works). En is used for the place: trabaja en un taller.",
      },
      {
        question: "Which job is 'un panadero'?",
        choices: [
          "a baker",
          "a hairdresser",
          "a butcher",
          "a postman",
        ],
        accept: [
          "a baker",
        ],
        answer: "Un panadero is a baker and works in una panadería. Un peluquero is a hairdresser, un carnicero a butcher and un cartero a postman.",
      },
      {
        question: "What does 'el jefe' mean?",
        choices: [
          "the chef",
          "the colleague",
          "the boss",
          "the customer",
        ],
        accept: [
          "the boss",
        ],
        answer: "El jefe (la jefa) is the boss or manager. A chef is un cocinero, a colleague is un compañero and a customer is un cliente.",
      },
      {
        question: "What does 'el desempleo' mean?",
        choices: [
          "employment",
          "unemployment",
          "an employee",
          "a pay rise",
        ],
        accept: [
          "unemployment",
        ],
        answer: "Des- makes the opposite, so el desempleo is unemployment (also el paro). El empleo is employment and el empleado an employee.",
      },
      {
        question: "What job does the Spanish word 'el bombero' describe?",
        choices: [
          "firefighter",
          "police officer",
          "builder",
          "plumber",
        ],
        accept: [
          "firefighter",
        ],
        answer: "El bombero is a firefighter. A police officer is el policía, a builder is el albañil and a plumber is el fontanero.",
      },
      {
        question: "What job does the Spanish word 'la dependienta' describe?",
        choices: [
          "a receptionist",
          "a shop assistant",
          "a waitress",
          "a cleaner",
        ],
        accept: [
          "a shop assistant",
        ],
        answer: "La dependienta (el dependiente) serves customers in a shop. A waitress is la camarera, a receptionist is la recepcionista and a cleaner is la limpiadora.",
      },
      {
        question: "What does the Spanish word 'la entrevista' mean in a job search?",
        choices: [
          "the contract",
          "the meeting",
          "the job offer",
          "the interview",
        ],
        accept: [
          "the interview",
        ],
        answer: "La entrevista is the interview, such as una entrevista de trabajo. The contract is el contrato and a meeting is una reunión.",
      },
    ],
    misconceptions: [
      {
        wrong: "Professions use estar because your job can change and isn't a permanent fact about you.",
        right: "Professions use ser, not estar, because Spanish treats stating your job as a lasting fact of identity in the moment, similar to nationality — Soy médico, not Estoy médico.",
      },
      {
        wrong: "An indefinite article is always needed before a profession, just as in English ('I am a doctor').",
        right: "Spanish typically drops the article before a bare profession after ser (Soy médico), only adding it back when the profession is further described by an adjective (Soy un médico dedicado).",
      },
      {
        wrong: "Ganar only ever means 'to win', matching its most common English association.",
        right: "Ganar is a genuine false friend with two common meanings — 'to earn' money (Gano un buen sueldo) and 'to win' a game or prize (Gané el partido) — context decides which is meant.",
      },
      {
        wrong: "A job-application letter can mix informal and formal language as long as the content is correct.",
        right: "Formal letters need consistent formal register throughout — using tú-based informal phrases alongside usted-based formal ones breaks the register that these writing tasks are specifically assessed on.",
      },
    ],
  },

  "spanish/volunteering-and-personal-qualities": {
    summary:
      "This topic covers vocabulary for volunteering, personal quality adjectives useful for describing yourself or others in a positive light, giving reasons using porque and ya que, and expressing obligation with tener que + infinitive and hay que + infinitive.",
    keyFacts: [
      {
        heading: "Volunteering vocabulary",
        points: [
          "El voluntariado (volunteering, the noun) and ser voluntario/a (to be a volunteer) are the core terms for this topic.",
          "Hacer trabajo voluntario (to do voluntary work) and ayudar a los demás (to help others) describe the activity itself.",
          "Una organización benéfica/una ONG (a charity/an NGO) are common nouns for the organisations volunteers work with.",
          "Recaudar fondos (to raise funds) is a useful specific phrase for describing fundraising volunteer work.",
        ],
      },
      {
        heading: "Personal quality adjectives",
        points: [
          "Generoso/a (generous), solidario/a (supportive/showing solidarity), comprometido/a (committed) and paciente (patient) are strong adjectives for volunteering and personal-quality contexts.",
          "Fiable (reliable) and responsable (responsible) don't change for gender, ending in -e and -e respectively, unlike generoso/a.",
          "Ser buena persona (to be a good person) is a common general set phrase, using ser because it describes a lasting character trait.",
          "Comprensivo/a (understanding) is a useful adjective when describing personal qualities relevant to helping others.",
        ],
      },
      {
        heading: "Giving reasons: porque and ya que",
        points: [
          "Porque (because) is the standard, most common reason connective, used constantly across every GCSE topic.",
          "Ya que (since/given that) is a more advanced alternative to porque, often used to open a sentence rather than sitting in the middle: Ya que soy paciente, trabajo con niños pequeños.",
          "Por eso (that's why/therefore) introduces a result rather than a reason, and pairs naturally after a porque/ya que sentence to add a consequence.",
          "Puesto que (given that/since) is another higher-level alternative to porque, similar in meaning and use to ya que.",
        ],
      },
      {
        heading: "Expressing obligation",
        points: [
          "Tener que + infinitive (to have to) expresses a personal obligation: Tengo que ayudar a mi comunidad.",
          "Hay que + infinitive (one must/it's necessary to) expresses a general, impersonal obligation that applies to everyone, not just the speaker: Hay que respetar a los demás.",
          "Deber + infinitive (should/ought to) is a softer sense of obligation than tener que, closer to moral duty than strict necessity.",
          "The difference between tener que and hay que is personal vs impersonal — tener que always has a specific subject, while hay que never changes and has no subject at all.",
        ],
      },
    ],
    flashcards: [
      { term: "el voluntariado", definition: "Volunteering (the noun/concept)." },
      { term: "ser voluntario/a", definition: "To be a volunteer — uses ser because it describes a lasting role." },
      { term: "ayudar a los demás", definition: "To help others — a common phrase in volunteering contexts." },
      { term: "una ONG", definition: "An NGO (non-governmental organisation) — pronounced 'o-ene-je' in Spanish." },
      { term: "recaudar fondos", definition: "To raise funds — a specific phrase for fundraising volunteer work." },
      { term: "generoso/a", definition: "Generous — a common personality adjective, changes -o to -a for feminine." },
      { term: "solidario/a", definition: "Supportive, showing solidarity with others." },
      { term: "comprometido/a", definition: "Committed, dedicated." },
      { term: "fiable", definition: "Reliable — does not change for gender, ends in -e for both masculine and feminine." },
      { term: "comprensivo/a", definition: "Understanding (personal quality)." },
      { term: "ya que", definition: "Since, given that — a more advanced alternative to porque, often opening a sentence." },
      { term: "hay que", definition: "One must / it's necessary to — impersonal obligation with no specific subject, unlike tener que." },
      { term: "deber", definition: "Should, ought to — a softer sense of obligation than tener que, closer to moral duty." },
    ],
    examTips: [
      {
        tip: "Distinguish hay que (impersonal, no subject) from tener que (personal, needs a subject).",
        detail: "Hay que ayudar a los demás makes a general statement about everyone, while Tengo que ayudar a mi comunidad is specifically about the speaker — using the wrong one can misrepresent who the obligation applies to.",
      },
      {
        tip: "Use ya que or puesto que to open a sentence for a more advanced, varied style.",
        detail: "Starting a sentence with Ya que soy paciente... rather than always using porque mid-sentence shows a wider grammatical range that higher-mark writing tasks reward.",
      },
      {
        tip: "Check whether a personal quality adjective changes for gender before using it.",
        detail: "Generoso/a changes, but fiable and responsable stay the same for both genders — using 'fiablo' or 'responsablo' as an invented masculine form is a common but avoidable error.",
      },
      {
        tip: "Use deber for a softer moral obligation, and tener que for a firmer, more concrete one.",
        detail: "Debemos ayudar a los demás sounds like a general moral principle, while Tenemos que recaudar fondos antes del viernes signals a firmer, specific deadline-driven obligation.",
      },
      {
        tip: "Support volunteering opinions with a specific personal quality, not just a general reason.",
        detail: "Hago trabajo voluntario porque soy generoso y me gusta ayudar a los demás links the activity to a personal quality, which reads as more thoughtful than a generic reason alone.",
      },
      {
        tip: "Remember por eso introduces a result, not a reason — don't confuse it with porque.",
        detail: "Soy solidario, por eso hago trabajo voluntario ('that's why') is structured the opposite way round from Hago trabajo voluntario porque soy solidario ('because') — check which direction the logic runs.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'Ya que soy muy paciente, trabajo como voluntario con niños pequeños.'",
        accept: ["since i'm very patient, i work as a volunteer with young children", "since i am very patient, i work as a volunteer with small children"],
        answer: "Since I'm very patient, I work as a volunteer with young children — ya que is a more advanced alternative to porque, often used at the start of a sentence.",
      },
      {
        question: "Translate into Spanish: 'One must respect others, and I have to help my community.'",
        accept: ["hay que respetar a los demás, y tengo que ayudar a mi comunidad"],
        answer: "Hay que respetar a los demás, y tengo que ayudar a mi comunidad — hay que is impersonal with no subject, while tengo que is personal and matches 'yo'.",
      },
      {
        question: "Complete with the correct form of tener: 'Nosotros ____ que recaudar fondos antes del viernes.'",
        accept: ["tenemos"],
        answer: "Tenemos — the 'we' form of tener, used in the fixed obligation structure tener que + infinitive: 'we have to raise funds before Friday'.",
      },
      {
        question: "Complete with the correct form of deber: 'Todos ____ ayudar a los demás cuando podemos.'",
        accept: ["deben", "debemos"],
        answer: "Deben (they/you all should) or debemos (we should) both work grammatically depending on intended subject — deber expresses a softer moral obligation than tener que.",
      },
      {
        question: "Complete with the correct form of ser: 'Mi hermana ____ muy generosa y solidaria.'",
        accept: ["es"],
        answer: "Es — ser is used because generosity and solidarity are lasting personal character traits, not temporary states.",
      },
      {
        question: "Which phrase expresses an impersonal obligation with no specific subject?",
        choices: ["hay que", "tengo que", "tenemos que", "debo"],
        accept: ["hay que"],
        answer: "Hay que is impersonal and never changes form, applying to people in general. Tengo que, tenemos que and debo are all personal, matching a specific subject.",
      },
      {
        question: "Which adjective does NOT change its ending for gender?",
        choices: ["fiable", "generoso", "comprometido", "solidario"],
        accept: ["fiable"],
        answer: "Fiable ends in -e and stays the same for both masculine and feminine. Generoso, comprometido and solidario all change to -a for the feminine form.",
      },
      {
        question: "In the sentence 'Ya que soy paciente, ayudo en la residencia de ancianos', what part of speech is 'ya que'?",
        choices: ["A conjunction (linking phrase)", "A noun", "A verb", "An adjective"],
        accept: ["A conjunction (linking phrase)"],
        answer: "Ya que links the reason clause to the main clause, functioning as a conjunction, similar to porque — it is not a noun, verb or adjective.",
      },
      {
        question: "Which phrase introduces a result rather than a reason?",
        choices: ["por eso", "porque", "ya que", "puesto que"],
        accept: ["por eso"],
        answer: "Por eso means 'that's why/therefore' and introduces a result. Porque, ya que and puesto que all introduce a reason, running in the opposite logical direction.",
      },
      {
        question: "Which of these is the odd one out?",
        choices: ["recaudar fondos", "una ONG", "el voluntariado", "comprensivo"],
        accept: ["comprensivo"],
        answer: "Comprensivo (understanding) is a personal quality adjective, while recaudar fondos, una ONG and el voluntariado are all directly connected to the activity and organisation of volunteering.",
      },
      {
        question: "Give one personal quality that would make someone a good volunteer, in Spanish.",
        accept: ["generoso", "generosa", "paciente", "comprometido", "comprometida", "comprensivo", "comprensiva"],
        answer: "Any genuine positive quality works, for example generoso/a (generous), paciente (patient) or comprometido/a (committed) — all are commonly used to describe a good volunteer.",
      },
      {
        question: "Translate into Spanish: 'I am committed to helping others because I am a good person.'",
        accept: ["estoy comprometido/a a ayudar a los demás porque soy buena persona", "soy comprometido/a a ayudar a los demás porque soy buena persona"],
        answer: "Estoy comprometido/a a ayudar a los demás porque soy buena persona — comprometido/a agrees with the speaker's gender, and buena persona uses ser as it describes lasting character.",
      },
      {
        question: "Complete with the correct form of hay: '____ que trabajar en equipo en este proyecto.'",
        accept: ["hay"],
        answer: "Hay — the invariable impersonal form used in hay que + infinitive, expressing a general obligation that applies to anyone involved, not just one person.",
      },
      {
        question: "Choose the sentence that correctly uses a personal (not impersonal) obligation.",
        choices: ["Tengo que ayudar en el hospital los sábados.", "Hay que ayudar en el hospital los sábados.", "Se debe ayudar en el hospital los sábados.", "Es necesario ayudar en el hospital los sábados."],
        accept: ["Tengo que ayudar en el hospital los sábados."],
        answer: "Tengo que ayudar en el hospital los sábados is personal, specifically about the speaker ('I have to'), while the other three options are impersonal, general statements that don't name a specific subject.",
      },
      {
        question: "Write a short paragraph in Spanish about a volunteering activity you would like to do, including one personal quality that suits it and one obligation using hay que or tener que.",
        answer:
          "There's no single right answer — mark this one yourself. A strong answer names a specific volunteering activity, links it to a correctly agreeing personal quality adjective with porque or ya que, and includes a correctly formed obligation sentence with hay que or tengo que.",
      },
      {
        question: "Explain in English the difference between 'tengo que' and 'hay que', with one original example sentence for each.",
        answer:
          "Mark it yourself against this: tengo que is personal and changes to match a specific subject (tengo, tienes, tiene...), describing what one particular person has to do, while hay que is impersonal, never changes form, and describes a general obligation that applies to people in general — a correct answer gives one accurate original example sentence for each.",
      },
      {
        question: "What does 'recaudar fondos' mean?",
        choices: [
          "to save money",
          "to raise funds",
          "to spend money",
          "to borrow money",
        ],
        accept: [
          "to raise funds",
        ],
        answer: "Recaudar fondos is to raise funds, e.g. for una ONG. To save money is ahorrar dinero and to spend money is gastar dinero.",
      },
      {
        question: "What does the Spanish word 'fiable' mean?",
        choices: [
          "friendly",
          "flexible",
          "lazy",
          "reliable",
        ],
        accept: [
          "reliable",
        ],
        answer: "Fiable means reliable or trustworthy (from fiarse, to trust). Friendly is simpático and lazy is perezoso.",
      },
      {
        question: "What does 'comprensivo' mean?",
        choices: [
          "comprehensive",
          "understanding",
          "hard-working",
          "confident",
        ],
        accept: [
          "understanding",
        ],
        answer: "Comprensivo is a false friend: it means understanding or sympathetic. Hard-working is trabajador and confident is seguro de sí mismo.",
      },
      {
        question: "What is 'una ONG'?",
        choices: [
          "a charity",
          "a council",
          "a hospital",
          "a political party",
        ],
        accept: [
          "a charity",
        ],
        answer: "Una ONG (organización no gubernamental) is an NGO, a charity such as Cruz Roja. A council is un ayuntamiento and a political party is un partido político.",
      },
      {
        question: "What does 'ayudar a los demás' mean?",
        choices: [
          "to help the elderly",
          "to help others",
          "to help your family",
          "to help yourself",
        ],
        accept: [
          "to help others",
        ],
        answer: "Los demás means other people, so it's to help others. The elderly are los ancianos (or las personas mayores) and the family is la familia.",
      },
      {
        question: "What does 'solidario' mean?",
        choices: [
          "lonely",
          "stubborn",
          "supportive",
          "strong",
        ],
        accept: [
          "supportive",
        ],
        answer: "Solidario means supportive, showing solidarity with others. Lonely is solitario (one letter different) and stubborn is testarudo.",
      },
      {
        question: "Which completes 'Mis amigas son muy ___' (generoso)?",
        choices: [
          "generosos",
          "generosas",
          "generosa",
          "generoso",
        ],
        accept: [
          "generosas",
        ],
        answer: "Mis amigas is feminine plural, so the adjective takes -as: generosas. Generosos is masculine plural, generosa is singular.",
      },
      {
        question: "What does 'comprometido' mean?",
        choices: [
          "compromised",
          "complicated",
          "competitive",
          "committed",
        ],
        accept: [
          "committed",
        ],
        answer: "Comprometido means committed or dedicated, as in comprometido con el medio ambiente. It's a false friend: it doesn't mean compromised.",
      },
      {
        question: "What is 'una residencia de ancianos'?",
        choices: [
          "a hospital",
          "an old people's home",
          "a homeless shelter",
          "a primary school",
        ],
        accept: [
          "an old people's home",
        ],
        answer: "Los ancianos are elderly people, so it's a care home for older people. A hospital is un hospital and a homeless shelter is un albergue.",
      },
      {
        question: "What does 'las personas sin hogar' mean?",
        choices: [
          "elderly people",
          "disabled people",
          "homeless people",
          "young people",
        ],
        accept: [
          "homeless people",
        ],
        answer: "Sin hogar means without a home, so these are homeless people. Elderly people are las personas mayores and young people are los jóvenes.",
      },
      {
        question: "In Spanish, what does 'ya que' mean?",
        choices: [
          "because",
          "although",
          "therefore",
          "until",
        ],
        accept: [
          "because",
        ],
        answer: "Ya que means 'because' or 'since', giving a reason. Although is aunque and therefore is por lo tanto; don't confuse it with ya (already).",
      },
      {
        question: "What does the Spanish adjective 'honrado' mean?",
        choices: [
          "proud",
          "honest",
          "lazy",
          "caring",
        ],
        accept: [
          "honest",
        ],
        answer: "Honrado means honest, a useful quality for a volunteer. Proud is orgulloso, lazy is perezoso and caring is cariñoso.",
      },
      {
        question: "What does the Spanish sentence 'Debo ayudar más' mean?",
        choices: [
          "I can help more",
          "I want to help more",
          "I helped more",
          "I must help more",
        ],
        accept: [
          "I must help more",
        ],
        answer: "Deber plus an infinitive expresses a duty: debo means I must. I can would be puedo, I want would be quiero and I helped would be ayudé.",
      },
      {
        question: "What does the Spanish verb 'cuidar a' mean?",
        choices: [
          "to look after",
          "to raise money",
          "to give away",
          "to teach",
        ],
        accept: [
          "to look after",
        ],
        answer: "Cuidar a means to look after or care for someone, as in cuidar a los ancianos. To raise money is recaudar fondos and to teach is enseñar.",
      },
    ],
    misconceptions: [
      {
        wrong: "Tener que and hay que are simply two interchangeable ways of saying 'have to'.",
        right: "Tener que is personal and conjugates to match a specific subject (tengo que, tenemos que), while hay que is impersonal, never changes, and expresses a general obligation with no named subject — they aren't fully interchangeable.",
      },
      {
        wrong: "Every personal-quality adjective changes its ending for gender, following the -o/-a pattern.",
        right: "Adjectives ending in -e, like fiable and responsable, stay exactly the same for both masculine and feminine — only -o-ending adjectives like generoso/generosa follow the -o/-a change.",
      },
      {
        wrong: "Por eso and porque both introduce a reason and can be used interchangeably.",
        right: "Porque introduces a reason (because), while por eso introduces a result that follows from a reason already given (that's why/therefore) — they run in opposite logical directions.",
      },
      {
        wrong: "Ya que can only appear in the middle of a sentence, just like porque.",
        right: "Ya que is commonly used to open a sentence (Ya que soy paciente, trabajo con niños), which is a more advanced, flexible position than porque typically takes.",
      },
    ],
  },

  "spanish/global-and-environmental-issues": {
    summary:
      "This topic covers vocabulary for environmental problems, expressing opinions and possible solutions using se debería/se puede + infinitive, and the connective phrases — sin embargo, además, por lo tanto — that let you build the longer, more structured arguments needed for extended GCSE writing tasks.",
    keyFacts: [
      {
        heading: "Environmental problems vocabulary",
        points: [
          "El cambio climático (climate change), el calentamiento global (global warming) and la contaminación (pollution) are the core high-frequency nouns for this topic.",
          "La deforestación (deforestation), las especies en peligro de extinción (endangered species) and el efecto invernadero (the greenhouse effect) are useful more specific nouns.",
          "Los combustibles fósiles (fossil fuels) and las energías renovables (renewable energy) contrast the problem with a common solution.",
          "El plástico de un solo uso (single-use plastic) is useful, topical vocabulary for discussing everyday environmental choices.",
        ],
      },
      {
        heading: "Expressing opinions on environmental issues",
        points: [
          "Standard opinion structures still apply: Me preocupa (it worries me), Estoy preocupado/a por (I'm worried about), Me importa (it matters to me).",
          "Es alarmante/preocupante que... (it's alarming/worrying that...) is a strong opening phrase for an environmental opinion.",
          "Reciclar (to recycle), reducir (to reduce) and reutilizar (to reuse) — las tres erres (the three Rs) — are core action verbs for this topic.",
          "Ahorrar energía/agua (to save energy/water) is a common phrase for describing personal environmental actions.",
        ],
      },
      {
        heading: "Suggesting solutions: se debería / se puede",
        points: [
          "Se debería + infinitive (one/we should) suggests a recommended action impersonally, without blaming a specific person: Se debería reducir el uso del plástico.",
          "Se puede + infinitive (one/you can) suggests a possible action that's within reach: Se puede reciclar más en casa.",
          "Both se debería and se puede use the impersonal 'se', similar in structure to hay que, making them useful for suggesting solutions without pointing fingers.",
          "Deberíamos + infinitive (we should, from the volunteering topic) is a more personal, inclusive alternative when you want to include yourself directly in the solution.",
        ],
      },
      {
        heading: "Connectives for extended writing",
        points: [
          "Sin embargo (however) introduces a contrast, similar in use to pero but stronger and better suited to opening a new sentence.",
          "Además (furthermore/in addition) adds a second point on the same side of an argument, building a fuller case.",
          "Por lo tanto (therefore/consequently) introduces a conclusion or consequence that follows logically from what was just said.",
          "Por ejemplo (for example) is used to support a general claim with a specific instance, useful for demonstrating understanding of an issue.",
        ],
      },
    ],
    flashcards: [
      { term: "el cambio climático", definition: "Climate change — a core high-frequency noun for this topic." },
      { term: "el calentamiento global", definition: "Global warming — closely related to el cambio climático." },
      { term: "la contaminación", definition: "Pollution — a core environmental problem noun." },
      { term: "la deforestación", definition: "Deforestation — the clearing of forests, a major environmental issue." },
      { term: "las energías renovables", definition: "Renewable energy(-ies) — always plural in this common phrase." },
      { term: "los combustibles fósiles", definition: "Fossil fuels — contrasted with las energías renovables." },
      { term: "reciclar", definition: "To recycle — one of 'the three Rs' along with reducir and reutilizar." },
      { term: "reducir", definition: "To reduce — one of 'the three Rs' along with reciclar and reutilizar." },
      { term: "se debería", definition: "One/we should — impersonal recommendation, followed by an infinitive." },
      { term: "se puede", definition: "One/you can — impersonal possibility, followed by an infinitive." },
      { term: "sin embargo", definition: "However — introduces a contrast, stronger than pero." },
      { term: "además", definition: "Furthermore, in addition — adds a second supporting point." },
      { term: "por lo tanto", definition: "Therefore, consequently — introduces a logical conclusion." },
      { term: "estar preocupado/a por", definition: "To be worried about — uses estar because worry is a temporary emotional state." },
    ],
    examTips: [
      {
        tip: "Use se debería/se puede rather than tú-based commands when suggesting environmental solutions.",
        detail: "Se debería reciclar más sounds like a general, impersonal recommendation, appropriate for an essay, whereas Debes reciclar más sounds like you're personally instructing the reader — usually the wrong register for this kind of writing task.",
      },
      {
        tip: "Use sin embargo, además and por lo tanto to build a longer, more logically structured paragraph.",
        detail: "These three connectives, used together, let you present a point, add to it, contrast it, and draw a conclusion — exactly the structure that scores highly in extended writing tasks on this topic.",
      },
      {
        tip: "Remember estar, not ser, for being worried about something.",
        detail: "Estoy preocupado/a por el cambio climático is correct because worry is a temporary emotional state, following the usual ser/estar pattern for feelings.",
      },
      {
        tip: "Use por ejemplo to back up a general environmental claim with a specific fact.",
        detail: "El plástico es un problema grave; por ejemplo, muchos animales marinos mueren cada año a causa de él shows you can support an opinion with evidence, not just assert it.",
      },
      {
        tip: "Don't confuse se puede (possibility) with se debería (recommendation) — they aren't interchangeable.",
        detail: "Se puede reciclar en casa states that something is possible, while Se debería reciclar en casa states that it's recommended — mixing them changes whether you're describing an option or urging an action.",
      },
      {
        tip: "Vary between reciclar, reducir and reutilizar rather than repeating just one verb throughout an answer.",
        detail: "Using all three of 'the three Rs' across a piece of writing shows a wider vocabulary range than relying on reciclar alone every time you discuss solutions.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'El calentamiento global es un problema grave; sin embargo, se puede reducir usando energías renovables.'",
        accept: ["global warming is a serious problem; however, it can be reduced by using renewable energy"],
        answer: "Global warming is a serious problem; however, it can be reduced by using renewable energy — sin embargo introduces the contrast, and se puede + infinitive expresses the impersonal possibility.",
      },
      {
        question: "Translate into Spanish: 'We should reduce the use of single-use plastic, and, furthermore, we should recycle more.'",
        accept: ["deberíamos reducir el uso del plástico de un solo uso, y, además, deberíamos reciclar más", "deberiamos reducir el uso del plastico de un solo uso, y, ademas, deberiamos reciclar mas"],
        answer: "Deberíamos reducir el uso del plástico de un solo uso, y, además, deberíamos reciclar más — deberíamos is the personal, inclusive 'we should' form, and además adds a second supporting point.",
      },
      {
        question: "Complete with the correct form of estar: 'Yo ____ muy preocupado por la deforestación.'",
        accept: ["estoy"],
        answer: "Estoy — estar is used because worry is a temporary emotional state, not a lasting personal trait, so it always takes estar rather than ser.",
      },
      {
        question: "Complete the impersonal recommendation: '____ debería usar menos plástico.' (se)",
        accept: ["se"],
        answer: "Se — the impersonal pronoun used in se debería + infinitive, suggesting a general recommendation without naming a specific person.",
      },
      {
        question: "Complete with the correct form of reciclar: 'Nosotros ____ el papel y el vidrio en casa.'",
        accept: ["reciclamos"],
        answer: "Reciclamos — the regular 'we' form of the -ar verb reciclar, used here to say 'we recycle paper and glass at home'.",
      },
      {
        question: "Which phrase introduces a contrast, similar to but stronger than 'pero'?",
        choices: ["sin embargo", "además", "por lo tanto", "por ejemplo"],
        accept: ["sin embargo"],
        answer: "Sin embargo means 'however' and introduces a contrast, well suited to opening a new sentence, unlike además (adds a point), por lo tanto (draws a conclusion) or por ejemplo (gives an example).",
      },
      {
        question: "Which phrase introduces a logical conclusion or consequence?",
        choices: ["por lo tanto", "sin embargo", "además", "por ejemplo"],
        accept: ["por lo tanto"],
        answer: "Por lo tanto means 'therefore/consequently' and introduces a conclusion that follows from what was just said, unlike the other three connectives which contrast, add to, or exemplify a point.",
      },
      {
        question: "In the sentence 'Se debería reducir el uso de plástico', what part of speech is 'reducir'?",
        choices: ["A verb (infinitive)", "A noun", "An adjective", "An adverb"],
        accept: ["A verb (infinitive)"],
        answer: "Reducir is a verb in its infinitive form, following se debería, which always keeps the second verb unconjugated regardless of the impersonal subject.",
      },
      {
        question: "Which term correctly means 'fossil fuels'?",
        choices: ["los combustibles fósiles", "las energías renovables", "el efecto invernadero", "la contaminación"],
        accept: ["los combustibles fósiles"],
        answer: "Los combustibles fósiles means fossil fuels. Las energías renovables means renewable energy, el efecto invernadero means the greenhouse effect, and la contaminación means pollution.",
      },
      {
        question: "Which of these is the odd one out?",
        choices: ["reciclar", "reducir", "reutilizar", "la contaminación"],
        accept: ["la contaminación"],
        answer: "La contaminación (pollution) is a noun naming a problem, while reciclar, reducir and reutilizar are all verbs describing 'the three Rs' actions used to address environmental problems.",
      },
      {
        question: "Give one specific example of an environmental problem and one possible solution, in Spanish.",
        accept: ["la deforestación and plantar más árboles", "la contaminación and usar el transporte público", "el cambio climático and usar energías renovables"],
        answer: "Any genuine pair works, for example la deforestación (deforestation) as a problem and plantar más árboles (planting more trees) as a solution.",
      },
      {
        question: "Translate into Spanish: 'For example, many species are in danger of extinction because of pollution.'",
        accept: ["por ejemplo, muchas especies están en peligro de extinción a causa de la contaminación"],
        answer: "Por ejemplo, muchas especies están en peligro de extinción a causa de la contaminación — por ejemplo introduces a specific supporting instance for a general environmental claim.",
      },
      {
        question: "Complete with the correct form of reducir: 'El gobierno ____ el uso de combustibles fósiles el año pasado.' (preterite)",
        accept: ["redujo"],
        answer: "Redujo — the irregular preterite third-person singular form of reducir (a spelling change verb, c→j before o), used here for 'the government reduced the use of fossil fuels last year'.",
      },
      {
        question: "Choose the sentence that correctly builds an argument using two different connectives.",
        choices: ["La contaminación es un problema grave; además, afecta a la salud humana. Sin embargo, hay soluciones posibles.", "La contaminación además es sin embargo un problema.", "Sin embargo además la contaminación es un problema.", "Es un problema la contaminación por lo tanto sin embargo."],
        accept: ["La contaminación es un problema grave; además, afecta a la salud humana. Sin embargo, hay soluciones posibles."],
        answer: "The first option correctly uses además to add a supporting point and sin embargo to introduce a contrast, each placed naturally to open its own clause or sentence.",
      },
      {
        question: "Write a short paragraph in Spanish about an environmental problem, including one impersonal solution (se debería/se puede) and at least two connectives.",
        answer:
          "There's no single right answer — mark this one yourself. A strong answer names a specific environmental problem, uses se debería or se puede plus an infinitive to suggest a solution, and links ideas using at least two connectives such as sin embargo, además or por lo tanto.",
      },
      {
        question: "Explain in English the difference between 'se debería' and 'se puede' when suggesting environmental solutions, with one example of each.",
        answer:
          "Mark it yourself against this: se debería + infinitive expresses a recommendation ('one/we should'), suggesting what ought to happen, while se puede + infinitive expresses a possibility ('one/you can'), suggesting what is achievable — a correct answer gives one accurate original example sentence for each, such as Se debería reciclar más and Se puede ahorrar agua fácilmente.",
      },
      {
        question: "What does 'el calentamiento global' mean?",
        choices: [
          "climate change",
          "global warming",
          "the greenhouse effect",
          "global trade",
        ],
        accept: [
          "global warming",
        ],
        answer: "Calentar is to heat, so el calentamiento global is global warming. Climate change is el cambio climático and the greenhouse effect is el efecto invernadero.",
      },
      {
        question: "Which means 'renewable energy'?",
        choices: [
          "combustibles fósiles",
          "efecto invernadero",
          "energías renovables",
          "residuos tóxicos",
        ],
        accept: [
          "energías renovables",
        ],
        answer: "Energías renovables are renewable energies like solar and wind. Combustibles fósiles are fossil fuels and residuos tóxicos are toxic waste.",
      },
      {
        question: "What does 'además' mean?",
        choices: [
          "however",
          "furthermore",
          "therefore",
          "for example",
        ],
        accept: [
          "furthermore",
        ],
        answer: "Además adds a point: furthermore or besides. However is sin embargo, therefore is por lo tanto and for example is por ejemplo.",
      },
      {
        question: "What does 'malgastar agua' mean?",
        choices: [
          "to save water",
          "to pollute water",
          "to waste water",
          "to drink water",
        ],
        accept: [
          "to waste water",
        ],
        answer: "Malgastar is to waste (mal + gastar, to spend badly). To save water is ahorrar agua and to pollute water is contaminar el agua.",
      },
      {
        question: "What does 'la basura' mean?",
        choices: [
          "recycling",
          "packaging",
          "plastic bags",
          "rubbish",
        ],
        accept: [
          "rubbish",
        ],
        answer: "La basura is rubbish or litter. Recycling is el reciclaje, packaging is los envases and plastic bags are las bolsas de plástico.",
      },
      {
        question: "In 'Se puede ir en bici', what does 'se puede' mean?",
        choices: [
          "one can",
          "one should",
          "one must",
          "one wants",
        ],
        accept: [
          "one can",
        ],
        answer: "Se puede is impersonal from poder: one can or you can. One should is se debería and one must is hay que or se debe.",
      },
      {
        question: "What does 'el medio ambiente' mean?",
        choices: [
          "the atmosphere",
          "the environment",
          "the middle class",
          "the weather",
        ],
        accept: [
          "the environment",
        ],
        answer: "El medio ambiente is the environment; don't split it into medio (middle) and ambiente. The atmosphere is la atmósfera and the weather is el tiempo.",
      },
      {
        question: "Which word means 'drought'?",
        choices: [
          "la inundación",
          "el incendio",
          "la sequía",
          "la tormenta",
        ],
        accept: [
          "la sequía",
        ],
        answer: "La sequía is a drought (from seco, dry). La inundación is a flood, el incendio is a fire and la tormenta is a storm.",
      },
      {
        question: "What does 'la pobreza' mean?",
        choices: [
          "hunger",
          "poverty",
          "war",
          "unemployment",
        ],
        accept: [
          "poverty",
        ],
        answer: "La pobreza is poverty (from pobre, poor). Hunger is el hambre, war is la guerra and unemployment is el paro or el desempleo.",
      },
      {
        question: "What does 'estar preocupado por' mean?",
        choices: [
          "to be proud of",
          "to be busy with",
          "to be tired of",
          "to be worried about",
        ],
        accept: [
          "to be worried about",
        ],
        answer: "Preocupado means worried, and por gives 'about': estoy preocupado por el planeta. Proud of is orgulloso de; busy is ocupado, a near look-alike.",
      },
      {
        question: "In Spanish recycling, what does 'el vidrio' mean?",
        choices: [
          "paper",
          "cardboard",
          "plastic",
          "glass",
        ],
        accept: [
          "glass",
        ],
        answer: "El vidrio is glass, as in bottles and jars. Paper is el papel, cardboard is el cartón and plastic is el plástico.",
      },
      {
        question: "Which Spanish word means 'floods'?",
        choices: [
          "la sequía",
          "las inundaciones",
          "los incendios",
          "la contaminación",
        ],
        accept: [
          "las inundaciones",
        ],
        answer: "Las inundaciones are floods. La sequía is drought, los incendios are fires and la contaminación is pollution.",
      },
      {
        question: "What does the Spanish phrase 'apagar las luces' mean?",
        choices: [
          "to switch on lights",
          "to switch off lights",
          "to save water",
          "to recycle glass",
        ],
        accept: [
          "to switch off lights",
        ],
        answer: "Apagar means to switch off, so this is to switch off the lights. To switch on is encender, to save water is ahorrar agua and to recycle glass is reciclar el vidrio.",
      },
      {
        question: "What does the Spanish connective 'por eso' mean?",
        choices: [
          "however",
          "furthermore",
          "that's why",
          "for example",
        ],
        accept: [
          "that's why",
        ],
        answer: "Por eso means that's why or so, linking a cause to its result. However is sin embargo, furthermore is además and for example is por ejemplo.",
      },
    ],
    misconceptions: [
      {
        wrong: "Se debería and se puede mean exactly the same thing and can be used interchangeably.",
        right: "Se debería expresses a recommendation ('should'), while se puede expresses a possibility ('can') — they make different kinds of claims about an action, even though both use the impersonal se.",
      },
      {
        wrong: "Sin embargo and además both add supporting points in the same direction.",
        right: "Además adds a further point on the same side of an argument, while sin embargo introduces a contrast or opposing point — they move an argument in different directions.",
      },
      {
        wrong: "Being worried about an environmental issue should be expressed with ser, since it reflects a genuine personal concern.",
        right: "Worry is a temporary emotional state, so it correctly uses estar (estoy preocupado/a por...), following the same ser/estar pattern as other feelings like being tired or happy.",
      },
      {
        wrong: "Las energías renovables and los combustibles fósiles refer to the same category of energy source.",
        right: "They are opposites — las energías renovables (renewable energy, e.g. solar, wind) are sustainable, while los combustibles fósiles (fossil fuels, e.g. coal, oil) are the non-renewable sources widely blamed for causing climate change.",
      },
    ],
  },

  "spanish/spanish-exam-practice": {
    summary:
      "This final revision topic focuses on exam technique — reading for gist versus detail, structuring an extended writing answer, and common exam command words — plus a grammar recap covering the imperfect tense for description in the past and simple subjunctive-flavoured set phrases used for opinions, and its practice questions deliberately mix content from right across the whole GCSE Spanish course.",
    keyFacts: [
      {
        heading: "Reading for gist vs detail",
        points: [
          "Reading for gist means getting the overall topic and main idea of a text quickly, useful for matching headlines or general true/false questions.",
          "Reading for detail means locating specific facts, numbers or names, usually needed for short-answer or gap-fill comprehension questions.",
          "Command words in reading questions signal which skill is needed: '¿de qué trata el texto?' (what is the text about?) needs gist, while '¿cuántos...?' or '¿cuándo...?' need detail.",
          "Don't panic over unknown words in a reading text — use cognates (words that look similar to English, e.g. información, importante) and context to infer meaning rather than stopping at every gap.",
        ],
      },
      {
        heading: "Structuring an extended writing answer",
        points: [
          "A strong extended answer covers multiple tenses: present for general facts, preterite or perfect for the past, and near future or simple future for future plans.",
          "Every opinion should be followed by a reason using porque, ya que or puesto que, and ideally balanced with por un lado/por otro lado for contrast.",
          "Connectives (sin embargo, además, por lo tanto, por ejemplo) should link ideas across sentences, not just sit inside a single sentence, to avoid a list-like, disconnected answer.",
          "Plan a rough structure before writing: introduction, 2–3 developed points each with an opinion and reason, and a conclusion — rather than writing freely and running out of time.",
        ],
      },
      {
        heading: "Common exam command words",
        points: [
          "Describe (describe) asks for factual description, often of a picture or a person/place — usually answered with ser/estar/tener/hay plus adjectives.",
          "Compara (compare) asks you to directly contrast two things, ideally using structures like a diferencia de, mientras que or más...que.",
          "Da tu opinión sobre... (give your opinion on...) requires a clear opinion statement plus a justified reason, not just a description.",
          "Menciona (mention) usually wants a brief, specific point rather than a fully developed paragraph — a useful clue for how much detail to give.",
        ],
      },
      {
        heading: "Grammar recap: the imperfect tense",
        points: [
          "The imperfect describes ongoing, repeated or background actions in the past, often translated as 'was/were doing' or 'used to do'.",
          "Regular -ar imperfect endings: -aba, -abas, -aba, -ábamos, -abais, -aban, e.g. jugaba, jugabas, jugaba, jugábamos, jugabais, jugaban.",
          "Regular -er/-ir imperfect endings are shared: -ía, -ías, -ía, -íamos, -íais, -ían, e.g. comía, vivía.",
          "Only three verbs are irregular in the imperfect: ser (era, eras, era, éramos, erais, eran), ir (iba, ibas, iba, íbamos, ibais, iban) and ver (veía, veías, veía, veíamos, veíais, veían).",
        ],
      },
      {
        heading: "Grammar recap: simple subjunctive-flavoured opinion phrases",
        points: [
          "Es importante que... and es necesario que... (it's important/necessary that...) are fixed opinion phrases that trigger the subjunctive mood in the following clause at a higher level, but can be safely used at GCSE with a simple following infinitive instead: Es importante reciclar.",
          "Aunque (although) is a useful connective for adding a contrasting idea within one sentence: Aunque me gusta la tecnología, también tiene desventajas.",
          "Ojalá (I wish/hopefully) is a common set phrase expressing a hope, useful for varied, natural-sounding opinions without needing to master full subjunctive conjugation.",
          "These phrases are worth learning as fixed chunks for GCSE — recognising and using them correctly earns credit for range of language, even without a deep technical understanding of the subjunctive mood itself.",
        ],
      },
    ],
    flashcards: [
      { term: "de qué trata el texto", definition: "What the text is about — a gist-reading question phrase." },
      { term: "describe", definition: "Describe — a command word asking for factual description, often using ser/estar/tener/hay." },
      { term: "compara", definition: "Compare — a command word asking for a direct contrast between two things." },
      { term: "da tu opinión sobre", definition: "Give your opinion on — a command word requiring a stated opinion with a reason." },
      { term: "menciona", definition: "Mention — a command word asking for a brief, specific point rather than a full paragraph." },
      { term: "era / eran", definition: "Was / were — irregular imperfect forms of ser, used for description in the past, e.g. Era muy tímido de pequeño." },
      { term: "había", definition: "There was / there were — the imperfect form of hay, invariable for singular and plural, used for past description." },
      { term: "jugaba", definition: "I used to play / I was playing — regular imperfect yo form of jugar, describing a repeated or ongoing past action." },
      { term: "es importante que", definition: "It's important that — fixed opinion phrase; safely followed by a simple infinitive at GCSE level, e.g. es importante reciclar." },
      { term: "aunque", definition: "Although — connective introducing a contrasting idea within one sentence." },
      { term: "ojalá", definition: "I wish / hopefully — a common set phrase expressing a hope." },
      { term: "un cognado", definition: "A cognate — a word that looks similar in Spanish and English (e.g. información, importante), useful for guessing meaning in a reading text." },
    ],
    examTips: [
      {
        tip: "Match the command word to the type of answer it needs before you start writing.",
        detail: "Describe wants factual description, compara wants a direct contrast, da tu opinión wants a justified opinion, and menciona wants brevity — answering with the wrong style for the command word costs marks even if your Spanish is accurate.",
      },
      {
        tip: "Aim to use at least three different tenses across an extended writing answer.",
        detail: "Combining present, past (preterite/perfect/imperfect) and future (near future/simple future) tenses in one answer demonstrates a wider range of grammar than staying in a single tense throughout.",
      },
      {
        tip: "Use cognates and context to guess unfamiliar words in a reading text rather than freezing.",
        detail: "Words like información, importante and posible look and mean almost the same as in English — spotting these lets you keep reading for overall meaning instead of getting stuck on every unknown word.",
      },
      {
        tip: "Use the imperfect (era, tenía, había) for describing how things used to be, and the preterite for single completed events.",
        detail: "Cuando era pequeño, vivía en Madrid, pero un día nos mudamos a Barcelona mixes the imperfect for ongoing background description with the preterite for the one-off event of moving.",
      },
      {
        tip: "Treat 'es importante que' and similar phrases as fixed chunks, not something to fully conjugate at GCSE.",
        detail: "Es importante reciclar (using a simple infinitive) is a safe, correct GCSE-level way to use this phrase, without needing to master the full subjunctive mood that would technically follow 'que' at a higher level.",
      },
      {
        tip: "Plan your extended answer's structure before writing, not while writing.",
        detail: "A quick plan — introduction, 2–3 points each with an opinion and reason, conclusion — prevents running out of time partway through and leaving an answer that feels like an unfinished list.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'Cuando era pequeño, jugaba al fútbol todos los días y tenía muchos amigos.'",
        accept: ["when i was young, i used to play football every day and i had lots of friends", "when i was little, i played football every day and had lots of friends"],
        answer: "When I was young, I used to play football every day and I had lots of friends — jugaba and tenía are both regular/irregular imperfect forms describing repeated or ongoing childhood actions, not single completed events.",
      },
      {
        question: "Translate into Spanish: 'Although I like social media, it's important to use it responsibly.'",
        accept: ["aunque me gustan las redes sociales, es importante usarlas de forma responsable", "aunque me gustan las redes sociales, es importante usarlas responsablemente"],
        answer: "Aunque me gustan las redes sociales, es importante usarlas de forma responsable — aunque introduces the contrast, and es importante is safely followed by a simple infinitive at GCSE level.",
      },
      {
        question: "Complete with the correct imperfect form of ser: 'De pequeña, ella ____ muy tímida.'",
        accept: ["era"],
        answer: "Era — the irregular imperfect third-person singular form of ser, used for lasting background description in the past: 'as a young girl, she was very shy'.",
      },
      {
        question: "Complete with the correct imperfect form of hay: 'Antes, no ____ tantos coches en mi pueblo.'",
        accept: ["había"],
        answer: "Había — the invariable imperfect form of hay, used for past description regardless of whether what follows is singular or plural.",
      },
      {
        question: "Complete with the correct form of tener: 'Cuando ____ diez años, vivía en España.' (imperfect)",
        accept: ["tenía"],
        answer: "Tenía — the regular -er/-ir imperfect yo form of tener, used here for background description: 'when I was ten (years old), I lived in Spain'.",
      },
      {
        question: "Which command word specifically asks you to contrast two things?",
        choices: ["compara", "describe", "menciona", "explica"],
        accept: ["compara"],
        answer: "Compara asks for a direct comparison between two things, ideally using structures like a diferencia de or mientras que. Describe asks for factual description, and menciona asks for a brief point.",
      },
      {
        question: "Which of these verbs is irregular in the imperfect tense?",
        choices: ["ir", "hablar", "comer", "vivir"],
        accept: ["ir"],
        answer: "Ir is one of only three irregular imperfect verbs (iba, ibas, iba...), along with ser and ver. Hablar, comer and vivir are all regular in the imperfect.",
      },
      {
        question: "In the sentence 'Es importante reciclar todos los días', what part of speech is 'reciclar'?",
        choices: ["A verb (infinitive)", "A noun", "An adjective", "An adverb"],
        accept: ["A verb (infinitive)"],
        answer: "Reciclar is a verb in its infinitive form, used here after the fixed phrase es importante, which at GCSE level is safely followed by a simple infinitive.",
      },
      {
        question: "Which phrase means 'I wish' or 'hopefully'?",
        choices: ["ojalá", "aunque", "por lo tanto", "sin embargo"],
        accept: ["ojalá"],
        answer: "Ojalá means 'I wish/hopefully', expressing a hope. Aunque means although, por lo tanto means therefore, and sin embargo means however.",
      },
      {
        question: "Which reading strategy would best answer the question '¿De qué trata el texto?'",
        choices: ["Reading for gist", "Reading for detail", "Ignoring the text and guessing", "Translating every single word first"],
        accept: ["Reading for gist"],
        answer: "¿De qué trata el texto? asks what the text is about overall, which is a gist-reading question — you don't need every detail, just the main topic and idea.",
      },
      {
        question: "Give one connective you could use to add a second supporting point to an argument, in Spanish.",
        accept: ["además", "también"],
        answer: "Además (furthermore/in addition) is the clearest example, adding a further point on the same side of an argument; también (also) works in a similar, simpler way.",
      },
      {
        question: "Translate into Spanish: 'Last year I went to Spain, but when I was young I used to go to France every summer.'",
        accept: ["el año pasado fui a españa, pero cuando era joven iba a francia cada verano", "el año pasado fui a españa, pero cuando era pequeño/a iba a francia cada verano"],
        answer: "El año pasado fui a España, pero cuando era joven iba a Francia cada verano — fui is preterite for the single completed trip, while era and iba are imperfect for the repeated childhood habit.",
      },
      {
        question: "Complete with the correct imperfect form of vivir: 'Nosotros ____ en un piso pequeño antes.'",
        accept: ["vivíamos", "viviamos"],
        answer: "Vivíamos — the regular imperfect 'we' form of vivir, used for describing where we used to live before, as an ongoing past state.",
      },
      {
        question: "Choose the sentence that correctly mixes the preterite and the imperfect for a natural past-tense narrative.",
        choices: ["Hacía sol cuando salí de casa esta mañana.", "Hizo sol cuando salía de casa esta mañana.", "Hace sol cuando salí de casa esta mañana.", "Hacía sol cuando salgo de casa esta mañana."],
        accept: ["Hacía sol cuando salí de casa esta mañana."],
        answer: "Hacía sol cuando salí de casa esta mañana correctly uses the imperfect (hacía, background weather) alongside the preterite (salí, the single completed action of leaving), which is the standard pattern for narrating a past event.",
      },
      {
        question: "Write a short extended paragraph in Spanish about your last holiday, using at least one preterite verb, one imperfect verb, and one connective (sin embargo, además or por lo tanto).",
        answer:
          "There's no single right answer — mark this one yourself. A strong answer includes a correctly formed preterite verb for a single completed action (e.g. fui, visité), a correctly formed imperfect verb for background description (e.g. hacía sol, era bonito), and at least one connective used naturally to link ideas.",
      },
      {
        question: "Explain in English how you would plan your time and structure before answering an extended GCSE Spanish writing question, drawing on ideas from across this course.",
        answer:
          "Mark it yourself against this: a strong answer mentions reading the command word carefully to judge the expected style (describe/compara/da tu opinión), sketching a brief structure (introduction, 2–3 developed points each with an opinion and a reason using porque/ya que, and a conclusion), and deliberately including a range of tenses (present, past, future) and connectives (sin embargo, además, por lo tanto) rather than writing freely without a plan.",
      },
      {
        question: "'Hace tres meses visité Sevilla.' When did they visit?",
        choices: [
          "for three months",
          "three months ago",
          "in three months",
          "every three months",
        ],
        accept: [
          "three months ago",
        ],
        answer: "Hace + time + preterite means ago: three months ago. 'For three months' would be durante tres meses, and 'in three months' is dentro de tres meses.",
      },
      {
        question: "'Iba al cine cada sábado' is in which tense?",
        choices: [
          "preterite",
          "imperfect",
          "present",
          "future",
        ],
        accept: [
          "imperfect",
        ],
        answer: "Iba is the imperfect of ir, used for a repeated past habit (cada sábado): I used to go. The preterite would be fui.",
      },
      {
        question: "What does 'aunque' mean?",
        choices: [
          "because",
          "therefore",
          "although",
          "however",
        ],
        accept: [
          "although",
        ],
        answer: "Aunque means although or even though, joining two clauses. However is sin embargo, because is porque and therefore is por lo tanto.",
      },
      {
        question: "'Aprendo piano desde hace un año.' Which is true?",
        choices: [
          "They quit a year ago",
          "They still learn piano",
          "They start next year",
          "They learnt it once",
        ],
        accept: [
          "They still learn piano",
        ],
        answer: "Present tense + desde hace means for and still going: I've been learning piano for a year. Hace un año with a preterite (aprendí) would mean a year ago.",
      },
      {
        question: "What does 'había' mean in 'Había mucha gente'?",
        choices: [
          "there is",
          "there was",
          "there will be",
          "he has",
        ],
        accept: [
          "there was",
        ],
        answer: "Había is the imperfect of haber, the verb behind hay, so it means there was (or there were): there were lots of people. There is is hay; there will be is habrá.",
      },
      {
        question: "What does 'Nunca como carne' mean?",
        choices: [
          "I always eat meat",
          "I never eat meat",
          "I rarely eat meat",
          "I never ate meat",
        ],
        accept: [
          "I never eat meat",
        ],
        answer: "Nunca means never, and como is present (I eat), so it's I never eat meat. 'I never ate' would need the preterite, nunca comí.",
      },
      {
        question: "'Saldré' is in which tense?",
        choices: [
          "preterite",
          "present",
          "future",
          "conditional",
        ],
        accept: [
          "future",
        ],
        answer: "Saldré (I will go out) is the simple future of salir, with irregular stem saldr-. The conditional would be saldría and the preterite salí.",
      },
      {
        question: "What does 'mientras que' mean?",
        choices: [
          "whereas",
          "because",
          "so that",
          "unless",
        ],
        accept: [
          "whereas",
        ],
        answer: "Mientras que means whereas or while, useful for comparing: a mí me gusta, mientras que mi hermano lo odia. Because is porque and so that is para que.",
      },
      {
        question: "What time is 'a las nueve menos cuarto'?",
        choices: [
          "9:15",
          "8:45",
          "9:45",
          "8:15",
        ],
        accept: [
          "8:45",
        ],
        answer: "Menos cuarto means a quarter to, so it's a quarter to nine, 8:45. A quarter past nine (9:15) is las nueve y cuarto.",
      },
      {
        question: "What does 'Me cae bien mi profesora' mean?",
        choices: [
          "My teacher fell over",
          "I like my teacher",
          "I annoy my teacher",
          "I look like my teacher",
        ],
        accept: [
          "I like my teacher",
        ],
        answer: "Caer bien is an idiom: someone me cae bien if I like them or get on with them. It has nothing to do with falling; me cae mal means I don't like them.",
      },
      {
        question: "What does 'Solía jugar al tenis' mean?",
        choices: [
          "I often play tennis",
          "I used to play tennis",
          "I will play tennis",
          "I play tennis alone",
        ],
        accept: [
          "I used to play tennis",
        ],
        answer: "Soler plus an infinitive means 'usually'. In the imperfect, solía jugar means 'I used to play', a habit in the past.",
      },
      {
        question: "What is the 'yo' form of the Spanish verb 'ver' in the imperfect?",
        choices: [
          "vi",
          "veo",
          "veía",
          "veré",
        ],
        accept: [
          "veía",
        ],
        answer: "Veía (I used to see) is irregular because it keeps the e of ver. Vi is the preterite, veo is the present and veré is the future.",
      },
      {
        question: "What is the 'nosotros' form of the Spanish verb 'hablar' in the imperfect?",
        choices: [
          "hablábamos",
          "hablamos",
          "hablaremos",
          "hablaríamos",
        ],
        accept: [
          "hablábamos",
        ],
        answer: "Hablábamos (we used to speak) uses the -aba- imperfect ending with an accent. Hablamos is present or preterite, hablaremos is future and hablaríamos is conditional.",
      },
      {
        question: "What does the Spanish word 'embarazada' mean?",
        choices: [
          "embarrassed",
          "pregnant",
          "ashamed",
          "annoyed",
        ],
        accept: [
          "pregnant",
        ],
        answer: "Embarazada is a classic false friend: it means pregnant, not embarrassed. Embarrassed is avergonzado or tener vergüenza, so check cognates carefully.",
      },
    ],
    misconceptions: [
      {
        wrong: "The preterite and the imperfect are just two random ways of forming the past tense, and either can be used at any time.",
        right: "They serve different purposes — the preterite marks a single completed action (fui, comí), while the imperfect describes ongoing, repeated or background actions and states (iba, comía, era) — mixing them up changes the shade of meaning in a past-tense narrative.",
      },
      {
        wrong: "Es importante que and similar phrases require full subjunctive conjugation to be used correctly at GCSE.",
        right: "At GCSE level, these phrases can be safely and correctly followed by a simple infinitive (es importante reciclar) without needing to master the full subjunctive mood, which is typically only required at a higher level of study.",
      },
      {
        wrong: "Command words like describe, compara and da tu opinión are just stylistic variety and don't actually change what kind of answer is expected.",
        right: "Each command word signals a genuinely different expected answer style — describe wants factual description, compara wants a direct contrast, and da tu opinión wants a stated, justified opinion — answering in the wrong style costs marks regardless of language accuracy.",
      },
      {
        wrong: "Unknown words in a reading text mean you can't understand the passage at all.",
        right: "Cognates (words that look similar in Spanish and English, like información or posible) and surrounding context usually let you infer the general meaning even when some individual words are unfamiliar.",
      },
    ],
  },
};
