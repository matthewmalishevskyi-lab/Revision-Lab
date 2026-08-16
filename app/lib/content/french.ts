import type { TopicContent } from "./index";

// FRENCH
//
// Same shape and same reasoning as Spanish — see the comment above that file
// for the full explanation of why this subject looks different from the
// others (flashcards are vocabulary rather than pure facts, practice questions
// are deliberately mixed, and there is no higherOnly flag). The short version,
// adjusted for French:
//
//   1. FLASHCARDS ARE VOCABULARY, ALWAYS FRENCH-FIRST. term is the French word
//      or phrase, definition is the English meaning plus, where it earns its
//      place, a note on gender, an irregular form, or a false-friend warning.
//
//   2. PRACTICE QUESTIONS ARE DELIBERATELY MIXED: straight translation both
//      directions, gap-fill verb conjugation, part-of-speech identification,
//      and multiple choice, because that is what GCSE French actually
//      examines — grammar in context, not a list of rules.
//
//   3. NO HIGHER-TIER FLAG, for the same reason as Spanish: AQA/Edexcel French
//      tiering is about which writing and speaking tasks a student attempts,
//      not about a block of vocabulary being off-limits. Every fact here is
//      fair game at both tiers.
//
// Exam-board note: this follows the AQA GCSE French specification's three
// themes (Identity & culture; Local area, holiday & travel; School, and
// future aspirations, study & work), spread across Years 9-11 to mirror
// Spanish — see subjects.ts for the exact topic list.
//
// A note on accents: é è ê ë à â ù û ç are typed directly rather than
// escaped, because this file is UTF-8 and TypeScript strings handle them
// natively. Where an accept list allows an unaccented fallback (e.g. "eleve"
// alongside "élève"), that is deliberate — real students often can't type
// accents easily, and marking that answer wrong would be marking correct
// French wrong.
//
// A note on numbers: French numbers 70-99 are NOT built the way Spanish
// (or standard "logical" counting) would suggest. Belgian/Swiss French uses
// septante/octante/nonante, but standard French French — which is what GCSE
// exam boards test — uses soixante-dix (60+10), quatre-vingts (4x20) and
// quatre-vingt-dix (4x20+10). That irregularity is deliberately covered in
// full wherever this file teaches numbers above 60.

export const FRENCH: Record<string, TopicContent> = {
  "french/greetings-and-introductions": {
    summary:
      "Every GCSE French exam and conversation starts the same way: greeting someone, giving your name, saying how old you are and where you're from. This topic covers formal and informal address, the set phrases for a first conversation, numbers 0–31, and the present tense of the two verbs almost every self-introduction depends on — être (to be) and avoir (to have).",
    keyFacts: [
      {
        heading: "Formal vs informal address",
        points: [
          "Use tu for someone your own age, a friend, or a family member.",
          "Use vous for a teacher, an adult stranger, or anyone you should be polite to — vous also doubles as the plural 'you', for more than one person regardless of formality.",
          "Comment tu t'appelles? is informal 'what's your name?'; Comment vous appelez-vous? is the formal version — the whole verb ending changes, not just the pronoun.",
          "Getting tu/vous wrong doesn't break the grammar of a sentence, but it does sound rude or oddly stiff, and examiners notice register in speaking and writing tasks.",
        ],
      },
      {
        heading: "Key greetings and set phrases",
        points: [
          "Salut (hi) is informal and works at any time of day; Bonjour (hello/good day) is neutral and safe with anyone; Bonsoir (good evening) is used from early evening onwards.",
          "Comment ça va? and Comment allez-vous? both mean 'how are you?' — ça va is the casual version, allez-vous is formal and uses vous.",
          "Enchanté and Enchantée both mean 'pleased to meet you' — the extra -e agrees with the speaker's own gender (Enchantée if the speaker is female).",
          "Au revoir (goodbye), À bientôt (see you soon) and À demain (see you tomorrow) are the standard ways to end a conversation.",
        ],
      },
      {
        heading: "Être and avoir in the present tense",
        points: [
          "Être (to be) is irregular: je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont.",
          "Avoir (to have) is irregular: j'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont.",
          "Age uses avoir, never être: J'ai quinze ans (I am 15) is literally 'I have 15 years' — ans never drops its final -s.",
          "Être is used for lasting facts about identity — name, nationality, job — as in Je suis anglais or Je suis élève.",
        ],
      },
      {
        heading: "Numbers 0–31",
        points: [
          "0–10: zéro, un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix.",
          "11–16 are irregular and must be learned individually: onze, douze, treize, quatorze, quinze, seize.",
          "17–19 are built regularly from dix plus the units word, joined with a hyphen: dix-sept, dix-huit, dix-neuf.",
          "20 is vingt; 21 is vingt et un (with et, no hyphen); 22–29 use a hyphen instead (vingt-deux... vingt-neuf); 30 is trente, and thirty-one follows the same et pattern as twenty-one: trente et un.",
        ],
      },
    ],
    flashcards: [
      { term: "Salut", definition: "Hi / bye — informal, used with friends and people your own age; not appropriate with a teacher or stranger." },
      { term: "Comment tu t'appelles?", definition: "What's your name? (informal) — literally 'what do you call yourself?', from the reflexive verb s'appeler." },
      { term: "Je m'appelle...", definition: "My name is... — literally 'I call myself...'; je m' is the reflexive pronoun me elided before a vowel." },
      { term: "D'où viens-tu?", definition: "Where are you from? (informal), using the verb venir (to come) with inverted word order." },
      { term: "Je viens d'Angleterre", definition: "I am from England — venir (to come) is irregular; d' is de shortened before a vowel." },
      { term: "Quel âge as-tu?", definition: "How old are you? — literally 'what age do you have?', using avoir rather than être." },
      { term: "J'ai quatorze ans", definition: "I am fourteen — literally 'I have fourteen years'; age always uses avoir, never être, and ans keeps its -s even after quatorze." },
      { term: "Enchanté(e)", definition: "Pleased to meet you — Enchanté if the speaker is male, Enchantée if female; the extra -e is silent but required in writing." },
      { term: "Bonsoir", definition: "Good evening — used from early evening onwards; Bonjour is used for the rest of the day, including afternoon." },
      { term: "À bientôt", definition: "See you soon — a common informal way to end a conversation, similar in warmth to Salut." },
      { term: "vous", definition: "The formal/plural 'you' — used for one person you should be polite to, or for more than one person of any relationship." },
      { term: "vingt et un", definition: "Twenty-one — joined with et and no hyphen, unlike vingt-deux (twenty-two) onwards, which use a hyphen instead." },
    ],
    examTips: [
      {
        tip: "Match Enchanté/Enchantée to your own gender, not the other person's.",
        detail: "The extra -e agrees with who is speaking. A boy always writes Enchanté, even when greeting a girl; a girl always writes Enchantée, even when greeting a boy.",
      },
      {
        tip: "Never translate 'I am 14 years old' with être.",
        detail: "Age in French always uses avoir, so it's J'ai quatorze ans, not Je suis quatorze ans. This is one of the most common English-speaker mistakes and examiners specifically test for it.",
      },
      {
        tip: "Don't drop the -s on ans, even after a number ending in a vowel sound.",
        detail: "J'ai quatorze ans keeps the final -s on ans regardless of the number before it — students who are used to French numbers eliding sounds sometimes drop it by mistake, and it is a spelling error, not a pronunciation choice.",
      },
      {
        tip: "Use vous, not tu, for anyone you'd call 'sir' or 'madam' in English.",
        detail: "If you're unsure which to use in a speaking task, vous is the safer default with an adult you don't know — it can read as slightly too formal, but tu with the wrong person reads as rude.",
      },
      {
        tip: "Remember 17–19 keep dix visible, unlike 16.",
        detail: "Seize (16) hides any trace of dix, but dix-sept, dix-huit and dix-neuf all show it plainly with a hyphen — mixing up which teens are 'irregular' costs an easy mark.",
      },
      {
        tip: "Learn et in vingt et un / trente et un but not in the numbers between.",
        detail: "Only the '...one' numbers (21, 31, 41...) use et with no hyphen. Every other number from 22 upwards uses a hyphen with no et: vingt-deux, vingt-trois, and so on.",
      },
      {
        tip: "Practise the whole introduction as one connected sequence.",
        detail: "Speaking exams reward fluency as much as accuracy. Rehearse greeting, name, age and where you're from as one flowing sequence rather than four separate memorised sentences, so it sounds natural rather than recited.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'Bonjour'",
        accept: ["hello", "good morning", "good day"],
        answer: "Hello / good day — bonjour is the safe, neutral greeting used for most of the day, from morning until early evening when it switches to bonsoir.",
      },
      {
        question: "Translate into French: 'Goodbye'",
        accept: ["au revoir"],
        answer: "Au revoir — the standard word for goodbye, usable in both formal and informal situations, unlike Salut which is informal only.",
      },
      {
        question: "Write the number 16 in French.",
        accept: ["seize"],
        answer: "Seize — one of the irregular teen numbers (onze–seize) that must be learned by heart, since they don't visibly contain dix the way dix-sept onwards do.",
      },
      {
        question: "How do you say 'I am 17 years old' in French?",
        accept: ["j'ai dix-sept ans", "jai dix-sept ans"],
        answer: "J'ai dix-sept ans — age always uses avoir (to have), never être, and dix-sept is written with a hyphen between dix and sept.",
      },
      {
        question: "Complete with the correct form of avoir: 'Elle ____ quinze ans.'",
        accept: ["a"],
        answer: "A — the third-person singular (il/elle) form of avoir, used here for age: Elle a quinze ans (She is fifteen).",
      },
      {
        question: "Complete with the correct form of être: 'Nous ____ de France.'",
        accept: ["sommes"],
        answer: "Sommes — the 'we' form of the irregular verb être: Nous sommes de France (We are from France).",
      },
      {
        question: "Complete with the correct form of avoir: 'J' ____ quatorze ans.'",
        accept: ["ai"],
        answer: "Ai — the 'je' (I) form of avoir, elided to j'ai before a vowel, used here to give your age: J'ai quatorze ans (I am fourteen).",
      },
      {
        question: "Translate into French: 'My name is Anne and I am from Canada.'",
        accept: ["je m'appelle anne et je suis du canada", "je mappelle anne et je suis du canada"],
        answer: "Je m'appelle Anne et je suis du Canada — using s'appeler for 'my name is' and être for 'I am from', since nationality and origin are lasting facts about identity. Du is used before Canada because le Canada is masculine.",
      },
      {
        question: "Which of these means 'How are you?' in a casual way?",
        choices: ["Comment ça va?", "Comment vous appelez-vous?", "D'où viens-tu?", "Quel âge as-tu?"],
        accept: ["Comment ça va?"],
        answer: "Comment ça va? is the casual way to ask how someone is doing. Comment vous appelez-vous? asks a stranger's name formally, and the other two ask where someone is from and their age.",
      },
      {
        question: "Which verb must you use to say how old you are in French?",
        choices: ["avoir", "être", "faire", "aller"],
        accept: ["avoir"],
        answer: "Avoir (to have) is used for age — J'ai quinze ans literally means 'I have fifteen years'. Être, faire and aller are all real verbs but none of them is used for age.",
      },
      {
        question: "What is the correct 'I am' form of être?",
        choices: ["je suis", "tu es", "il est", "nous sommes"],
        accept: ["je suis"],
        answer: "Je suis is the first-person singular ('I') form of être. Tu es is 'you are' (informal), il est is 'he/it is', and nous sommes is 'we are'.",
      },
      {
        question: "Which word is the odd one out?",
        choices: ["Salut", "Bonjour", "Au revoir", "Bonsoir"],
        accept: ["Au revoir"],
        answer: "Au revoir means goodbye, while Salut, Bonjour and Bonsoir are all ways of greeting someone rather than saying farewell.",
      },
      {
        question: "How is the number 22 written correctly in French?",
        choices: ["vingt-deux", "vingt et deux", "vingt-cinq", "deux vingt"],
        accept: ["vingt-deux"],
        answer: "Vingt-deux is correct — numbers 22 to 29 join with a hyphen and no et, unlike vingt et un (21), which is the only number in the twenties that uses et.",
      },
      {
        question: "In the sentence 'Elle est grande', what part of speech is 'grande'?",
        choices: ["An adjective", "A noun", "A verb", "A preposition"],
        accept: ["An adjective"],
        answer: "Grande ('tall') describes the pronoun elle, which is exactly what an adjective does. Est is the verb in this sentence, and there is no preposition or extra noun present.",
      },
      {
        question: "Which pronoun goes with the verb form 'as'?",
        choices: ["tu", "je", "il", "nous"],
        accept: ["tu"],
        answer: "As is the tu (informal 'you') form of avoir. Je goes with ai, il with a, and nous with avons.",
      },
      {
        question: "Give one situation where you would use vous instead of tu.",
        accept: ["with a teacher", "talking to a teacher", "with an adult stranger", "with a stranger", "talking to an adult you don't know", "with more than one person"],
        answer: "Any adult you should be polite to counts — a teacher, a shop assistant you've never met, or an adult stranger are all correct examples of when vous is the right choice over tu; so is speaking to more than one person at once.",
      },
      {
        question: "Write a short introduction of yourself in French: your name, your age, and where you are from. Use at least three full sentences.",
        answer:
          "There's no single right answer here — mark this one yourself. A strong answer uses Je m'appelle... for your name, J'ai... ans for your age (never être for age), and Je viens de... or Je suis de... for where you're from, each written as a separate full sentence with correctly matched verb endings.",
      },
      {
        question: "Explain in English why French has two different words for 'you' (tu and vous), and give one situation where you would use each.",
        answer:
          "Mark it yourself against this: tu is informal singular, used with people your own age, friends and family; vous is formal singular, or plural for any group, used with teachers, strangers and anyone you should show respect to. A good answer names a clear example for each, such as using tu with a classmate and vous with a shop assistant you've never met.",
      },
    ],
    misconceptions: [
      {
        wrong: "Age is expressed with être, just like the English 'I am 15'.",
        right: "French uses avoir for age: J'ai quinze ans, not Je suis quinze ans — être is reserved for lasting identity, not quantities like age.",
      },
      {
        wrong: "Tu and vous are just polite/casual translations of 'you' with no real grammar difference.",
        right: "They take completely different verb endings — tu es vs vous êtes, tu as vs vous avez — so mixing the wrong pronoun with the wrong ending is a grammar error, not just a tone mismatch.",
      },
      {
        wrong: "Vous is only ever used to be polite to one person.",
        right: "Vous is also the only word for 'you' when speaking to more than one person, however informal the relationship — a group of friends is still addressed as vous, not tu.",
      },
      {
        wrong: "Enchanté and Enchantée mean different things.",
        right: "They mean exactly the same thing, 'pleased to meet you' — the ending simply agrees with the speaker's own gender, not with anything about the person being greeted.",
      },
      {
        wrong: "Comment tu t'appelles? and Comment vous appelez-vous? are interchangeable.",
        right: "They ask the same question at different formality levels, so using the informal one with someone who expects respect — a teacher, for example — sounds impolite even though the grammar is correct.",
      },
    ],
  },
  "french/family-and-friends": {
    summary:
      "Describing your family and friends is one of the most reliable GCSE speaking and writing tasks, and it rewards solid grammar as much as vocabulary. This topic covers family-member nouns, the possessive adjectives mon/ma/mes and ton/ta/tes and son/sa/ses, physical and personality descriptions with être, and the adjective agreement rules — including irregular ones — that turn a vocabulary list into accurate French.",
    keyFacts: [
      {
        heading: "Family members",
        points: [
          "Core nouns: le père (father), la mère (mother), le frère (brother), la sœur (sister), le grand-père (grandfather), la grand-mère (grandmother).",
          "Extended family: l'oncle (uncle), la tante (aunt), le cousin/la cousine (cousin, gendered), le beau-père/la belle-mère (stepfather/stepmother or father-in-law/mother-in-law depending on context).",
          "Les parents means 'parents', not 'relatives' — it is a false friend trap, since it looks like it should mean a wider family group.",
          "Plural family words often add nothing unexpected: les frères (brothers), les sœurs (sisters), but les parents and les enfants (children) are worth learning as set forms.",
        ],
      },
      {
        heading: "Possessive adjectives: mon/ma/mes, ton/ta/tes, son/sa/ses",
        points: [
          "Each set has three forms that agree with the GENDER OF THE NOUN OWNED, not the gender of the owner: mon père (my father) and ma mère (my mother) both mean 'my', regardless of who is speaking.",
          "Mon, ton, son are used before masculine singular nouns, and also before ANY singular noun starting with a vowel sound, even a feminine one: mon amie (my [female] friend), not ma amie.",
          "Ma, ta, sa are used before feminine singular nouns starting with a consonant.",
          "Mes, tes, ses are used before ALL plural nouns, masculine or feminine: mes frères, mes sœurs.",
          "Son/sa/ses can mean 'his', 'her' or 'its' — French doesn't mark the owner's gender at all, so son père can mean either his father or her father depending on context.",
        ],
      },
      {
        heading: "Physical and personality descriptions",
        points: [
          "Use être + adjective to describe appearance and character: Il est grand (He is tall), Elle est sympathique (She is nice).",
          "Avoir is used for hair and eye colour, not être: Elle a les cheveux bruns (She has brown hair), Il a les yeux bleus (He has blue eyes).",
          "Common personality adjectives: gentil/gentille (kind), drôle (funny), timide (shy), bavard/bavarde (talkative), généreux/généreuse (generous).",
          "Personality and physical adjectives both go through the same agreement rules as any other French adjective — the ending changes to match the noun they describe.",
        ],
      },
      {
        heading: "Adjective agreement, including irregulars",
        points: [
          "The regular pattern: add -e for feminine, -s for plural, -es for feminine plural: grand → grande → grands → grandes.",
          "Adjectives already ending in -e (masculine) don't change for feminine: sympathique stays sympathique for both genders.",
          "Some adjectives double the final consonant before adding -e: gentil → gentille; bon → bonne.",
          "Beau (handsome/beautiful) is fully irregular: beau (masc.) → belle (fem.) → beaux (masc. pl.) → belles (fem. pl.) — and beau becomes bel before a masculine noun starting with a vowel sound.",
          "Position matters for a small set of common adjectives — beau, bon, grand, petit, jeune, vieux — which go BEFORE the noun (un beau chien), unlike most French adjectives, which go after (un chien noir).",
        ],
      },
    ],
    flashcards: [
      { term: "le frère / la sœur", definition: "Brother / sister — both regular nouns; frère is masculine, sœur is feminine and keeps its œ ligature." },
      { term: "les grands-parents", definition: "Grandparents — plural of grand-parent; note the -s on both grands and parents." },
      { term: "mon, ma, mes", definition: "My — mon before masculine/vowel-sound nouns, ma before feminine consonant-start nouns, mes before all plurals." },
      { term: "son, sa, ses", definition: "His / her / its — agrees with the noun owned, not the owner, so it cannot be translated as 'his' or 'her' without context." },
      { term: "les cheveux", definition: "Hair — always plural in French, even for one head of hair; used with avoir: elle a les cheveux longs." },
      { term: "les yeux", definition: "Eyes — irregular plural of œil (eye); used with avoir: il a les yeux verts." },
      { term: "gentil / gentille", definition: "Kind — doubles the final consonant before adding -e for the feminine form, unlike most adjectives." },
      { term: "beau / belle", definition: "Handsome / beautiful — a fully irregular adjective (beau, belle, beaux, belles) that also goes before the noun it describes." },
      { term: "sympathique", definition: "Nice / friendly — ends in -e already, so the masculine and feminine forms are identical; often shortened to sympa in speech." },
      { term: "un demi-frère", definition: "A half-brother / stepbrother — demi- is invariable and hyphenated onto the family noun it modifies." },
      { term: "fils unique / fille unique", definition: "Only child (male / female) — literally 'unique son' / 'unique daughter'; a set phrase worth learning whole." },
      { term: "bavard / bavarde", definition: "Talkative — a regular adjective that simply adds -e for the feminine, unlike gentil." },
    ],
    examTips: [
      {
        tip: "Check what's being described, not who's speaking, before choosing mon/ma/mes.",
        detail: "A boy still says ma mère, and a girl still says mon père — possessive adjectives agree with the noun that follows, never with the gender of the person speaking.",
      },
      {
        tip: "Use mon before any vowel-sound feminine noun, even though it looks masculine.",
        detail: "Mon amie, mon histoire — this exception exists purely for pronunciation, to avoid two vowel sounds colliding, and examiners specifically test it because it looks like a mistake when it isn't.",
      },
      {
        tip: "Never use être for hair and eye colour.",
        detail: "Il est les yeux bleus is wrong; it must be Il a les yeux bleus. This is a very common error because English uses 'to be' for both appearance ('he is tall') and colour ('his eyes are blue'), but French splits the two across être and avoir.",
      },
      {
        tip: "Learn beau/belle as an irregular pattern, not by guessing the regular rule.",
        detail: "Applying the normal -e/-s/-es pattern gives 'beaus' and 'beaue', both wrong. The four forms — beau, belle, beaux, belles — have to be memorised as a set, along with bel before a vowel-sound masculine noun.",
      },
      {
        tip: "Remember the small list of adjectives that go BEFORE the noun.",
        detail: "Beau, bon, grand, petit, jeune and vieux break the normal noun-then-adjective word order. Getting this wrong doesn't usually change the meaning, but consistently misplacing common adjectives reads as a basic error to an examiner.",
      },
      {
        tip: "Don't translate 'parents' as a general word for relatives.",
        detail: "Les parents means specifically mother and father. If you want 'relatives' in a wider sense, use la famille or les membres de la famille instead.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'Ma sœur est timide.'",
        accept: ["my sister is shy"],
        answer: "My sister is shy — ma agrees with sœur (feminine), and timide doesn't change form because it already ends in -e.",
      },
      {
        question: "Translate into French: 'My brother is tall.'",
        accept: ["mon frère est grand"],
        answer: "Mon frère est grand — mon because frère is masculine singular; grand stays in its masculine form to agree with frère.",
      },
      {
        question: "Complete with the correct possessive: '____ mère s'appelle Sophie.' (my)",
        accept: ["ma"],
        answer: "Ma — mère is feminine singular and starts with a consonant sound, so it takes ma, not mon or mes.",
      },
      {
        question: "Complete with the correct possessive: '____ amie s'appelle Claire.' (my)",
        accept: ["mon"],
        answer: "Mon — even though amie is feminine, it starts with a vowel sound, so mon is used instead of ma purely to make the pronunciation flow.",
      },
      {
        question: "Complete with the correct form of avoir: 'Elle ____ les cheveux bruns.'",
        accept: ["a"],
        answer: "A — the il/elle form of avoir. Hair and eye colour always use avoir, never être, in French.",
      },
      {
        question: "Complete with the correct form of the adjective: 'Ma mère est ____.' (gentil)",
        accept: ["gentille"],
        answer: "Gentille — gentil doubles its final consonant before adding -e for the feminine form: gentil → gentille.",
      },
      {
        question: "Give the correct feminine plural form of 'beau'.",
        accept: ["belles"],
        answer: "Belles — beau is fully irregular: beau (masc. sing.), belle (fem. sing.), beaux (masc. pl.), belles (fem. pl.).",
      },
      {
        question: "Translate into French: 'His sister is generous.'",
        accept: ["sa sœur est généreuse"],
        answer: "Sa sœur est généreuse — sa agrees with sœur (feminine), not with the owner 'his'; généreuse is the feminine form of généreux.",
      },
      {
        question: "Which possessive adjective is used before ALL plural nouns meaning 'my'?",
        choices: ["mes", "ma", "mon", "ses"],
        accept: ["mes"],
        answer: "Mes is used before every plural noun meaning 'my', whether masculine or feminine — mes frères, mes sœurs. Ma and mon are singular only, and ses means 'his/her', not 'my'.",
      },
      {
        question: "Which word correctly completes 'Il a les ____ verts' (he has green eyes)?",
        choices: ["yeux", "cheveux", "œil", "visage"],
        accept: ["yeux"],
        answer: "Yeux is the irregular plural of œil (eye). Cheveux means hair, œil is the singular 'eye', and visage means face — none of those fit 'green eyes'.",
      },
      {
        question: "In the sentence 'Mon petit frère est drôle', what part of speech is 'petit'?",
        choices: ["An adjective", "A noun", "A verb", "A possessive pronoun"],
        accept: ["An adjective"],
        answer: "Petit ('little') describes the noun frère, which makes it an adjective — placed before the noun here, as small/common adjectives like petit usually are.",
      },
      {
        question: "Which sentence correctly uses avoir rather than être?",
        choices: ["Elle a les yeux bleus.", "Elle est les yeux bleus.", "Elle a bleus les yeux.", "Elle sont les yeux bleus."],
        accept: ["Elle a les yeux bleus."],
        answer: "Elle a les yeux bleus is correct — avoir is required for eye and hair colour. The other options either use être wrongly or scramble the word order.",
      },
      {
        question: "What does 'son' mean when it appears before 'chien' (his/her dog)?",
        choices: ["It could mean either his or her dog", "It can only mean his dog", "It can only mean her dog", "It means 'their' dog"],
        accept: ["It could mean either his or her dog"],
        answer: "Son agrees with chien (masculine), not with the owner — French possessives don't show the owner's gender at all, so context alone tells you whether it's his or her dog.",
      },
      {
        question: "Give one adjective that goes BEFORE the noun in French, unlike most French adjectives.",
        accept: ["beau", "bon", "grand", "petit", "jeune", "vieux", "belle", "bonne", "grande", "petite", "jeune", "vieille"],
        answer: "Beau, bon, grand, petit, jeune and vieux (and their agreeing forms) are the common short adjectives that break the usual noun-then-adjective word order in French.",
      },
      {
        question: "Translate into French: 'My grandparents are very kind.'",
        accept: ["mes grands-parents sont très gentils"],
        answer: "Mes grands-parents sont très gentils — mes because grands-parents is plural; gentils is the masculine plural form, used by default for a mixed or unspecified group.",
      },
      {
        question: "Write a description in French of one member of your family: give their name, their relationship to you, one physical feature and one personality trait. Use at least three sentences.",
        answer:
          "There's no single right answer here — mark this one yourself. A strong answer correctly matches a possessive adjective to the family noun, uses avoir for hair/eye colour, uses être + agreeing adjective for personality, and applies correct adjective agreement throughout.",
      },
      {
        question: "Explain in English why French possessive adjectives like son/sa/ses can be ambiguous in a way that English 'his'/'her' is not.",
        answer:
          "Mark it yourself against this: French possessives agree with the gender of the noun that follows them (the thing owned), not with the gender of the owner, so son livre could mean 'his book' or 'her book' with no way to tell from the word itself — only context, or an added phrase like son livre à elle, resolves it. English does the opposite, marking the owner's gender ('his' vs 'her') and ignoring the gender of the object owned.",
      },
    ],
    misconceptions: [
      {
        wrong: "Mon, ton and son always mean 'my/your/his' because they look masculine.",
        right: "They agree with the noun that follows, not with any gender of the owner or an inherent gender of their own — mon amie uses mon before a feminine noun purely because amie starts with a vowel sound.",
      },
      {
        wrong: "Hair and eye colour use être, the same as other physical descriptions like 'he is tall'.",
        right: "Hair and eye colour specifically use avoir — il a les cheveux bruns, not il est les cheveux bruns — while être is correct for most other descriptions, such as il est grand.",
      },
      {
        wrong: "All French adjectives simply add -e for feminine and -s for plural.",
        right: "That's the regular pattern, but several common adjectives break it — gentil doubles its consonant (gentille), and beau is fully irregular (belle, beaux, belles) with no predictable link to the masculine form.",
      },
      {
        wrong: "Adjectives always go after the noun in French.",
        right: "Most do, but a small group of common short adjectives — beau, bon, grand, petit, jeune, vieux — go before the noun instead, as in un petit chien.",
      },
      {
        wrong: "Les parents is a general word for 'relatives' in French.",
        right: "Les parents specifically means 'parents' (mother and father) — for the wider sense of 'relatives' French uses la famille or les membres de la famille.",
      },
    ],
  },
  "french/free-time-and-hobbies": {
    summary:
      "Talking about hobbies is a core GCSE French topic that combines high-frequency vocabulary with a genuinely tricky piece of grammar: whether an activity takes jouer à or jouer de. This topic covers sports and hobby vocabulary, the jouer à/de split, the all-purpose verb faire for activities that aren't sports, frequency expressions including the negative ne...jamais, and the pattern of aimer/adorer/détester followed by an infinitive.",
    keyFacts: [
      {
        heading: "Sports and hobby vocabulary",
        points: [
          "Sports: le football, le tennis, le rugby, la natation (swimming), le cyclisme (cycling), l'équitation (horse riding, feminine despite starting with a vowel).",
          "Other hobbies: la lecture (reading), le dessin (drawing), la danse (dancing), les jeux vidéo (video games, always plural), le shopping.",
          "Musical instruments: le piano, la guitare, le violon, la batterie (drums) — all take de/du/de la when played, never à.",
          "Many hobby nouns are recognisable from English (le tennis, le golf, le football), but watch gender: some are masculine, some feminine, and it isn't guessable from the English word.",
        ],
      },
      {
        heading: "Jouer à vs jouer de",
        points: [
          "Jouer à + sport or game: je joue au football, je joue aux cartes (à + le = au; à + les = aux).",
          "Jouer de + musical instrument: je joue de la guitare, je joue du piano (de + le = du).",
          "The rule is entirely about the CATEGORY of the noun — sport/game vs instrument — not about the noun's gender or any pattern you can guess from English.",
          "Mixing them up (jouer du football, jouer au piano) is one of the single most common GCSE French errors and is specifically listed in examiner reports.",
        ],
      },
      {
        heading: "Faire for activities",
        points: [
          "Faire (to do/make) covers most hobbies that aren't ball sports or instruments: faire du vélo (cycling), faire de la natation (swimming), faire des randonnées (hiking).",
          "Faire is irregular: je fais, tu fais, il/elle fait, nous faisons, vous faites, ils/elles font.",
          "Like jouer de, faire takes du/de la/des depending on the gender and number of the activity noun: faire du sport, faire de la danse, faire des courses.",
          "Faire + infinitive can also mean 'to have something done' at a more advanced level, but for GCSE purposes faire + noun for an activity is the pattern to master first.",
        ],
      },
      {
        heading: "Frequency expressions and negation",
        points: [
          "Time expressions: le week-end (at the weekend), tous les jours (every day), une fois par semaine (once a week), de temps en temps (from time to time).",
          "Adverbs of frequency: toujours (always), souvent (often), rarement (rarely) — these usually go straight after the verb: je joue souvent au tennis.",
          "Ne...jamais (never) wraps around the verb like ne...pas: je ne joue jamais au rugby (I never play rugby).",
          "After a negative like ne...jamais or ne...pas, du/de la/des usually shrinks to just de: je ne fais jamais de sport (not de la sport).",
        ],
      },
      {
        heading: "Aimer, adorer, détester + infinitive",
        points: [
          "To say you like/love/hate doing something, follow aimer, adorer or détester directly with an infinitive verb, with no linking word: J'aime jouer au foot, not J'aime à jouer.",
          "Préférer (to prefer) follows the same pattern: Je préfère lire (I prefer to read).",
          "Aimer, adorer and détester are all regular -er verbs: j'aime, tu aimes, il/elle aime, nous aimons, vous aimez, ils/elles aiment.",
          "Adding bien after aimer (j'aime bien) softens it slightly, closer to 'I quite like', while adorer is stronger than aimer alone.",
        ],
      },
    ],
    flashcards: [
      { term: "jouer à", definition: "To play (a sport or game) — contracts with le/les to au/aux: je joue au tennis, je joue aux échecs." },
      { term: "jouer de", definition: "To play (a musical instrument) — contracts with le/la to du/de la: je joue du piano, je joue de la guitare." },
      { term: "faire du sport", definition: "To do sport — faire + du/de la/des is the general pattern for activities that aren't jouer-based, e.g. faire du vélo." },
      { term: "les jeux vidéo", definition: "Video games — always plural in French, even referring to gaming in general; jeu is masculine." },
      { term: "la natation", definition: "Swimming — feminine noun, used with faire de la: je fais de la natation, not je joue à la natation." },
      { term: "l'équitation (f)", definition: "Horse riding — feminine despite the vowel start, so 'my' would be mon équitation for pronunciation, but articles use l'." },
      { term: "souvent", definition: "Often — an adverb of frequency that usually goes directly after the conjugated verb: je vais souvent au cinéma." },
      { term: "ne...jamais", definition: "Never — wraps around the verb like ne...pas; je ne joue jamais means 'I never play'." },
      { term: "faire (present tense)", definition: "To do/make — irregular: je fais, tu fais, il fait, nous faisons, vous faites, ils font." },
      { term: "une fois par semaine", definition: "Once a week — par means 'per' here; deux fois par semaine would be twice a week." },
      { term: "j'aime bien", definition: "I quite like — bien softens aimer slightly; without it, aimer alone is a plain, fairly strong 'I like'." },
      { term: "détester", definition: "To hate/detest — a regular -er verb, always followed directly by an infinitive with no linking word: je déteste faire mes devoirs." },
    ],
    examTips: [
      {
        tip: "Sort every hobby into 'jouer à', 'jouer de' or 'faire' before you try to use it in a sentence.",
        detail: "There's no shortcut rule that covers all three at once — sports and games take jouer à, instruments take jouer de, and most other activities take faire. Learn each hobby word already paired with its correct verb, not as a standalone noun.",
      },
      {
        tip: "Watch the contractions: au, aux, du, de la, des are not optional extras.",
        detail: "Je joue à le football is simply wrong French — à and le must contract to au. The same applies to de + le → du. Examiners mark these as grammar errors, not typos.",
      },
      {
        tip: "Never insert 'à' after aimer, adorer or détester before an infinitive.",
        detail: "English 'I like to play' tempts students to write j'aime à jouer, but French uses no linking word at all: j'aime jouer. This is a direct interference error from English and is easy to eliminate once you know to watch for it.",
      },
      {
        tip: "After a negative, du/de la/des collapse to de.",
        detail: "Je ne fais jamais de sport (not de la sport) — this small shift is easy to forget under exam pressure but is tested specifically because it shows real control of negation, not just vocabulary.",
      },
      {
        tip: "Give a reason with parce que to lift a hobby answer from basic to strong.",
        detail: "J'aime jouer au foot parce que c'est amusant turns a bare statement into an opinion with justification, which is exactly what GCSE speaking and writing mark schemes reward extra marks for.",
      },
      {
        tip: "Learn faire's irregular forms separately from regular -er verbs.",
        detail: "Nous faisons and vous faites don't follow the normal -er pattern at all — faisons in particular is pronounced unlike its spelling suggests, so it needs deliberate practice rather than being guessed from the infinitive.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'Je joue au tennis le week-end.'",
        accept: ["i play tennis at the weekend", "i play tennis on the weekend"],
        answer: "I play tennis at the weekend — au is the contraction of à + le, required because tennis is masculine and jouer à is used for sports.",
      },
      {
        question: "Translate into French: 'I play the guitar.'",
        accept: ["je joue de la guitare"],
        answer: "Je joue de la guitare — jouer de is used for musical instruments, and de + la stays as de la because guitare is feminine.",
      },
      {
        question: "Complete with the correct form: 'Je joue ___ football.' (au / du / de la)",
        accept: ["au"],
        answer: "Au — football is a sport, so it takes jouer à, and à + le contracts to au.",
      },
      {
        question: "Complete with the correct form: 'Je joue ___ piano.' (au / du / de la)",
        accept: ["du"],
        answer: "Du — piano is a musical instrument, so it takes jouer de, and de + le contracts to du.",
      },
      {
        question: "Complete with the correct form of faire: 'Nous ____ du sport le samedi.'",
        accept: ["faisons"],
        answer: "Faisons — the nous form of the irregular verb faire, which doesn't follow the regular -ons pattern in pronunciation even though it's spelled with -ons.",
      },
      {
        question: "Complete with the correct form of faire: 'Ils ____ de la natation.'",
        accept: ["font"],
        answer: "Font — the ils/elles form of faire, one of its several irregular present-tense forms.",
      },
      {
        question: "Translate into French: 'I never play rugby.'",
        accept: ["je ne joue jamais au rugby"],
        answer: "Je ne joue jamais au rugby — ne...jamais wraps around joue, and au is still needed because rugby is a sport taking jouer à.",
      },
      {
        question: "Translate into French: 'I love reading, but I hate playing video games.'",
        accept: ["j'adore lire, mais je déteste jouer aux jeux vidéo", "jadore lire, mais je deteste jouer aux jeux video"],
        answer: "J'adore lire, mais je déteste jouer aux jeux vidéo — both adorer and détester are followed directly by an infinitive with no linking word, and jeux vidéo takes aux because it's plural.",
      },
      {
        question: "Which verb pattern is used for musical instruments?",
        choices: ["jouer de", "jouer à", "faire de", "aimer de"],
        accept: ["jouer de"],
        answer: "Jouer de is used specifically for musical instruments (jouer du piano, jouer de la guitare). Jouer à is for sports and games instead.",
      },
      {
        question: "Which of these correctly means 'I do horse riding'?",
        choices: ["Je fais de l'équitation", "Je joue à l'équitation", "Je fais l'équitation à", "Je joue de l'équitation"],
        accept: ["Je fais de l'équitation"],
        answer: "Je fais de l'équitation is correct — équitation is an activity that takes faire de, not jouer, and l' is used before the vowel sound.",
      },
      {
        question: "In the sentence 'Je joue souvent au tennis', what part of speech is 'souvent'?",
        choices: ["An adverb", "An adjective", "A noun", "A preposition"],
        accept: ["An adverb"],
        answer: "Souvent ('often') describes how frequently the action happens, which is the job of an adverb. It modifies the verb joue, not a noun, so it isn't an adjective.",
      },
      {
        question: "Which sentence correctly uses a negative with an activity?",
        choices: ["Je ne fais jamais de sport.", "Je ne fais jamais du sport.", "Je ne fais jamais sport.", "Je ne fais pas jamais de sport."],
        accept: ["Je ne fais jamais de sport."],
        answer: "Je ne fais jamais de sport is correct — after a negative, du/de la/des shrink to plain de. The other options either keep du wrongly, drop de entirely, or double up the negative incorrectly.",
      },
      {
        question: "What does 'de temps en temps' mean?",
        choices: ["From time to time", "All the time", "On time", "For a long time"],
        accept: ["From time to time"],
        answer: "De temps en temps means 'from time to time' or 'occasionally' — a frequency expression roughly between souvent (often) and rarement (rarely).",
      },
      {
        question: "Give one activity in French that uses 'faire' rather than 'jouer'.",
        accept: ["faire du vélo", "faire de la natation", "faire des randonnées", "faire du sport", "faire de l'équitation", "faire du shopping", "faire de la danse"],
        answer: "Any activity outside sports/games and instruments works — faire du vélo (cycling), faire de la natation (swimming) and faire des randonnées (hiking) are all correct examples of the faire pattern.",
      },
      {
        question: "Write three sentences in French about your free-time activities, using jouer, faire, and an opinion verb (aimer/adorer/détester) at least once each.",
        answer:
          "There's no single right answer here — mark this one yourself. Check that jouer is followed by à/au/aux for a sport or de/du/de la for an instrument, that faire is followed by du/de la/des for an activity, and that the opinion verb is followed directly by an infinitive with no linking word.",
      },
      {
        question: "Explain in English why 'jouer au piano' is wrong French, even though it might feel logical to an English speaker.",
        answer:
          "Mark it yourself against this: jouer à is reserved for sports and games, while musical instruments always take jouer de (jouer du piano). An English speaker might expect 'play' to work the same way for all three, but French splits playing sports from playing instruments with two different prepositions, and mixing them is a genuine grammar error, not just a style choice.",
      },
    ],
    misconceptions: [
      {
        wrong: "Jouer à and jouer de can be used interchangeably for any hobby.",
        right: "Jouer à is only for sports and games, and jouer de is only for musical instruments — using the wrong one, like jouer du football, is a specific and commonly flagged GCSE error.",
      },
      {
        wrong: "Aimer, adorer and détester need a linking word like à or de before an infinitive, mirroring English 'like to'.",
        right: "French uses no linking word at all: j'aime jouer, not j'aime à jouer — the infinitive follows these opinion verbs directly.",
      },
      {
        wrong: "Du, de la and des stay the same after a negative sentence.",
        right: "After ne...pas or ne...jamais, du/de la/des collapse to plain de: je ne fais jamais de sport, not de la sport.",
      },
      {
        wrong: "Faire only means 'to make', so it can't be used for sport and hobbies.",
        right: "Faire is the general-purpose verb for most non-jouer activities in French — faire du sport, faire de la natation, faire des randonnées all use faire to mean 'to do', not 'to make'.",
      },
    ],
  },
  "french/school-life": {
    summary:
      "School is a topic that comes up in every GCSE French paper in some form, because it's the one shared experience every student can talk about with real detail. This topic covers school subject vocabulary, giving opinions on subjects with parce que, classroom object nouns, telling the time for a timetable, and opinion adjectives like intéressant and ennuyeux with correct agreement.",
    keyFacts: [
      {
        heading: "School subjects",
        points: [
          "Core subjects: les maths (maths, always plural), l'anglais (English), le français (French), l'histoire (history), la géographie (geography), les sciences (science, plural).",
          "Others: l'EPS (PE, short for éducation physique et sportive), la technologie, l'informatique (IT/computing), le dessin (art), la musique.",
          "Most subject nouns take an article even when talking about them in general: J'aime les maths (I like maths), not J'aime maths.",
          "Subject names are NOT capitalised in French, unlike English — le français and l'histoire stay lower-case, which trips up many GCSE writers.",
        ],
      },
      {
        heading: "Giving opinions with parce que",
        points: [
          "Basic opinion pattern: J'aime/Je n'aime pas + subject + parce que + reason: J'aime les maths parce que c'est intéressant.",
          "Car is an alternative to parce que meaning 'because', slightly more formal and common in writing.",
          "To disagree or contrast, use mais (but) or par contre (on the other hand): J'aime le dessin, mais je déteste la technologie.",
          "A GCSE-level opinion answer should always have a reason attached — a bare j'aime les maths without justification scores lower than one that explains why.",
        ],
      },
      {
        heading: "Classroom objects and the school day",
        points: [
          "Classroom items: un stylo (pen), un crayon (pencil), un cahier (exercise book), un livre (book), une trousse (pencil case), un sac à dos (backpack).",
          "School people and places: le/la prof (teacher, informal), la salle de classe (classroom), la cour (playground), la cantine (canteen).",
          "La rentrée refers specifically to the start of the school year in September — a culturally important word with no single-word English equivalent.",
          "Un cours means a lesson/class; une leçon is closer to a specific piece of taught content within that lesson.",
        ],
      },
      {
        heading: "Telling the time for a timetable",
        points: [
          "Il est + number + heure(s) is the basic pattern: il est trois heures (it's 3 o'clock); heure takes -s from two o'clock onwards.",
          "Half past is et demie: il est trois heures et demie; quarter past is et quart; quarter to is moins le quart.",
          "Minutes past the hour are simply added: il est quatre heures dix (4:10); minutes to the hour use moins: il est cinq heures moins dix (ten to five).",
          "24-hour clock is standard on French timetables: il est quatorze heures (14:00/2pm) — no need for 'in the afternoon' once the 24-hour format is used.",
        ],
      },
      {
        heading: "Opinion adjectives and agreement",
        points: [
          "Common opinion adjectives: intéressant/intéressante (interesting), ennuyeux/ennuyeuse (boring), difficile (difficult, same for both genders), facile (easy, same for both genders), amusant/amusante (fun).",
          "Ennuyeux follows the -eux → -euse pattern for feminine, the same family as généreux → généreuse.",
          "When the adjective describes an -er/-e noun like les maths (plural), it must agree in the plural: les maths sont intéressantes.",
          "C'est + adjective (masculine singular by default) is used for a general opinion not tied to a specific noun's gender: C'est ennuyeux (It's boring).",
        ],
      },
    ],
    flashcards: [
      { term: "les maths", definition: "Maths — always plural in French; takes a plural verb: les maths sont difficiles." },
      { term: "l'EPS (f)", definition: "PE — abbreviation of éducation physique et sportive; feminine, takes l' before the vowel." },
      { term: "parce que / car", definition: "Because — parce que is standard and can start a sentence; car cannot start a sentence and is slightly more formal." },
      { term: "ennuyeux / ennuyeuse", definition: "Boring — follows the -eux/-euse pattern for masculine/feminine agreement." },
      { term: "intéressant(e)", definition: "Interesting — regular -ant adjective, adds -e for feminine agreement: intéressante." },
      { term: "un cahier", definition: "An exercise book — masculine noun; not to be confused with un livre (a book, for reading) or un cartable (a school bag)." },
      { term: "la cantine", definition: "The canteen — where students eat lunch; feminine noun." },
      { term: "la rentrée", definition: "The start of the new school year (September) — a culturally specific word with no exact single-word English equivalent." },
      { term: "il est trois heures et demie", definition: "It's half past three — et demie means 'and a half'; demie agrees with the feminine heure(s)." },
      { term: "moins le quart", definition: "Quarter to — literally 'minus the quarter'; used for the 15 minutes before the hour, e.g. quatre heures moins le quart." },
      { term: "facile", definition: "Easy — identical form for masculine and feminine, since it already ends in -e." },
      { term: "un emploi du temps", definition: "A timetable — a fixed phrase; emploi here means 'use/arrangement', not 'job' as it usually does." },
    ],
    examTips: [
      {
        tip: "Never capitalise French subject names.",
        detail: "Le français, l'anglais and l'histoire all stay lower-case in French, unlike their English equivalents. Capitalising them is a spelling habit carried over from English that examiners will notice in written work.",
      },
      {
        tip: "Always attach a reason to an opinion with parce que or car.",
        detail: "A bare J'aime les sciences scores lower than J'aime les sciences parce que c'est intéressant et utile. Reasons are what push a writing or speaking answer from basic to a higher mark band.",
      },
      {
        tip: "Match adjective agreement to what's actually being described.",
        detail: "Les maths sont intéressantes needs a plural feminine ending, while C'est intéressant (a general comment, not tied to a specific noun) stays masculine singular by default. Mixing these up is a common accuracy slip.",
      },
      {
        tip: "Learn the 24-hour clock alongside the 12-hour one.",
        detail: "French school timetables and formal contexts use the 24-hour clock as standard — quatorze heures rather than deux heures de l'après-midi — so listening and reading exams expect you to convert instantly.",
      },
      {
        tip: "Watch heure vs heures — the -s only appears from 'two o'clock' onwards.",
        detail: "Il est une heure (one o'clock) has no -s on heure, but every other hour does: il est deux heures, il est trois heures, and so on.",
      },
      {
        tip: "Use ennuyeux/ennuyeuse and intéressant(e) as your two anchor opinion adjectives, then branch out.",
        detail: "These two cover most subject opinions on their own, and examiners reward a wider range once they're secure — add amusant, difficile, facile and utile once the basics are automatic.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'J'aime les maths parce que c'est facile.'",
        accept: ["i like maths because it's easy", "i like maths because it is easy"],
        answer: "I like maths because it's easy — parce que introduces the reason, and c'est facile gives a general opinion using the masculine default form.",
      },
      {
        question: "Translate into French: 'I don't like history because it's boring.'",
        accept: ["je n'aime pas l'histoire parce que c'est ennuyeux", "je n'aime pas l'histoire parce que c'est ennuyeux.", "je naime pas l'histoire parce que c'est ennuyeux"],
        answer: "Je n'aime pas l'histoire parce que c'est ennuyeux — c'est stays masculine singular here because it refers generally to the situation, not specifically to histoire.",
      },
      {
        question: "Write the time 'half past four' in French.",
        accept: ["quatre heures et demie", "il est quatre heures et demie"],
        answer: "Quatre heures et demie — et demie means 'and a half'; demie agrees with the feminine word heure(s).",
      },
      {
        question: "Complete with the correct form of the adjective: 'Les sciences sont ____.' (intéressant)",
        accept: ["intéressantes", "interessantes"],
        answer: "Intéressantes — sciences is feminine plural, so the adjective needs both the feminine -e and the plural -s: intéressantes.",
      },
      {
        question: "Complete with the correct form of the adjective: 'La géographie est ____.' (ennuyeux)",
        accept: ["ennuyeuse"],
        answer: "Ennuyeuse — géographie is feminine singular, and ennuyeux follows the -eux → -euse pattern for its feminine form.",
      },
      {
        question: "Complete with the correct form of être: 'Nous ____ à l'école à huit heures.'",
        accept: ["sommes"],
        answer: "Sommes — the nous form of the irregular verb être, used here to say what time school starts: Nous sommes à l'école à huit heures.",
      },
      {
        question: "Translate into French: 'My favourite subject is art because it's fun.'",
        accept: ["ma matière préférée est le dessin parce que c'est amusant"],
        answer: "Ma matière préférée est le dessin parce que c'est amusant — matière (subject) is feminine, so ma and préférée both agree with it.",
      },
      {
        question: "Which word correctly means 'PE' in French?",
        choices: ["l'EPS", "le sport", "l'école", "la gym"],
        accept: ["l'EPS"],
        answer: "L'EPS (éducation physique et sportive) is the standard French term for PE as a school subject. Le sport is broader ('sport' in general), and la gym usually refers specifically to gymnastics.",
      },
      {
        question: "How do you say 'quarter to five' in French?",
        choices: ["cinq heures moins le quart", "cinq heures et quart", "quatre heures et quart", "quatre heures moins le quart"],
        accept: ["cinq heures moins le quart"],
        answer: "Cinq heures moins le quart is correct — moins le quart means 'minus the quarter', counting down to the hour that's coming, which is five o'clock.",
      },
      {
        question: "In the sentence 'Les maths sont difficiles', what part of speech is 'difficiles'?",
        choices: ["An adjective", "A noun", "A verb", "An adverb"],
        accept: ["An adjective"],
        answer: "Difficiles describes maths and agrees with it in gender and number, which is exactly the job of an adjective. Sont is the verb in this sentence.",
      },
      {
        question: "Which of these correctly means 'an exercise book'?",
        choices: ["un cahier", "un livre", "un stylo", "une trousse"],
        accept: ["un cahier"],
        answer: "Un cahier means an exercise book. Un livre is a book (for reading), un stylo is a pen, and une trousse is a pencil case.",
      },
      {
        question: "Which connective would you use to introduce a contrasting opinion?",
        choices: ["mais", "parce que", "et", "aussi"],
        accept: ["mais"],
        answer: "Mais (but) introduces a contrast, as in J'aime le dessin, mais je déteste la technologie. Parce que gives a reason, et and aussi add rather than contrast.",
      },
      {
        question: "Give one French school subject that is grammatically plural.",
        accept: ["les maths", "les sciences", "maths", "sciences"],
        answer: "Les maths and les sciences are both grammatically plural in French, unlike most other subject names, and take a plural verb: les maths sont difficiles.",
      },
      {
        question: "Write four sentences in French about your school subjects: name two subjects you like and two you dislike, giving a reason for each.",
        answer:
          "There's no single right answer here — mark this one yourself. Check for correct definite articles before each subject, lower-case subject names, parce que/car followed by a reason, and correct agreement on any adjective used.",
      },
      {
        question: "Explain in English the difference between un cours and une leçon in French, and why the distinction matters for describing a school day.",
        answer:
          "Mark it yourself against this: un cours refers to a lesson or class period as a slot in the timetable (j'ai un cours de français), while une leçon refers more to a specific piece of content taught within it. A strong answer notes that cours is the word you'd use to describe your timetable, while leçon is closer to 'a lesson on X topic'.",
      },
      {
        question: "Give the 24-hour clock time for 'two o'clock in the afternoon' as it would appear on a French timetable.",
        accept: ["quatorze heures", "14 heures", "14h00", "14h"],
        answer: "Quatorze heures — French timetables use the 24-hour clock as standard, so 2pm is written and said as fourteen hundred hours rather than 'deux heures de l'après-midi'.",
      },
    ],
    misconceptions: [
      {
        wrong: "French subject names are capitalised, just like in English.",
        right: "French subject names stay lower-case: le français, l'histoire, les maths — capitalising them the way English does is a common transfer error from English spelling habits.",
      },
      {
        wrong: "C'est and il/elle est can always be used interchangeably before an adjective.",
        right: "C'est + adjective gives a general opinion in the default masculine singular form, while an adjective describing a specific noun must agree with that noun's own gender and number, as in Les maths sont difficiles.",
      },
      {
        wrong: "Heure never takes an -s, since it's a fixed clock-time word.",
        right: "Heure adds -s from deux heures onwards; only une heure (one o'clock) has no -s, because heure itself is singular there.",
      },
      {
        wrong: "Ennuyeux simply adds -e for the feminine, like a regular adjective.",
        right: "Ennuyeux follows the -eux → -euse pattern, giving ennuyeuse for the feminine — a family shared with adjectives like généreux → généreuse, not the plain add-an-e rule.",
      },
    ],
  },
  "french/home-and-daily-routine": {
    summary:
      "Describing your home and daily routine tests two things at once: house vocabulary and reflexive verbs, which are one of French's most distinctive grammar points and a favourite GCSE examiner target. This topic covers rooms of the house, reflexive verbs for routine (se lever, se doucher, se coucher), telling the time, and sequencing words (d'abord, puis, ensuite, enfin) that turn a list of actions into a connected paragraph.",
    keyFacts: [
      {
        heading: "Rooms and parts of the house",
        points: [
          "Core rooms: la cuisine (kitchen), le salon (living room), la salle de bains (bathroom), la chambre (bedroom), la salle à manger (dining room).",
          "Other spaces: le jardin (garden), le garage, les toilettes/les W.-C. (toilet, always plural in French), le couloir (hallway).",
          "Une maison is a house; un appartement is a flat — both common in GCSE descriptions of where you live.",
          "Au rez-de-chaussée means 'on the ground floor'; au premier étage means 'on the first floor' — étage numbering starts at 1, not at the ground floor as in English 'first floor' confusion.",
        ],
      },
      {
        heading: "Reflexive verbs for daily routine",
        points: [
          "A reflexive verb needs a reflexive pronoun that matches the subject: me/te/se/nous/vous/se, placed directly before the verb.",
          "Se lever (to get up): je me lève, tu te lèves, il/elle se lève, nous nous levons, vous vous levez, ils/elles se lèvent — note the accent shift (è) in some forms.",
          "Se doucher (to shower) and se coucher (to go to bed) are regular reflexive -er verbs: je me douche, je me couche, following the same pattern of pronoun + verb.",
          "Other routine reflexives: se réveiller (to wake up), s'habiller (to get dressed), se laver (to wash oneself), se brosser les dents (to brush one's teeth).",
          "In the negative, ne goes before the reflexive pronoun and pas after the verb: je ne me lève pas tôt (I don't get up early).",
        ],
      },
      {
        heading: "Telling the time (recap and routine use)",
        points: [
          "Je me lève à sept heures (I get up at seven o'clock) — à is used to say AT what time something happens.",
          "Du matin (in the morning), de l'après-midi (in the afternoon), du soir (in the evening) attach to a time to clarify it on the 12-hour clock: à sept heures du matin.",
          "Vers means 'around/about' a time: vers huit heures (around eight o'clock) — useful for routines that aren't exact.",
          "For a fluent routine paragraph, every action needs its own time expression attached with à or vers, not left as a bare list of verbs.",
        ],
      },
      {
        heading: "Sequencing words",
        points: [
          "D'abord (first/first of all) opens a sequence of actions.",
          "Puis and ensuite both mean 'then/next' and can be used somewhat interchangeably, though ensuite is slightly more common to link a longer chain of steps.",
          "Enfin (finally/at last) closes a sequence — Enfin, je me couche à onze heures (Finally, I go to bed at eleven).",
          "Après (after/afterwards) can stand alone or be followed by a noun: après le petit-déjeuner (after breakfast).",
        ],
      },
    ],
    flashcards: [
      { term: "se lever", definition: "To get up — reflexive verb with a stem change: je me lève, nous nous levons (the accent shifts depending on the ending)." },
      { term: "se doucher", definition: "To have a shower — regular reflexive -er verb: je me douche, tu te douches." },
      { term: "se coucher", definition: "To go to bed — regular reflexive -er verb: je me couche, ils se couchent." },
      { term: "se réveiller", definition: "To wake up — distinct from se lever (to get up); you can réveiller before you actually lever." },
      { term: "s'habiller", definition: "To get dressed — s' is the elided reflexive pronoun me before a vowel." },
      { term: "se brosser les dents", definition: "To brush one's teeth — les dents stays plural and definite, unlike English 'my teeth' using a possessive." },
      { term: "la salle de bains", definition: "The bathroom — always written with a final -s on bains, even though it refers to one bathroom." },
      { term: "d'abord", definition: "First / first of all — used to open a sequence of actions in a routine description." },
      { term: "ensuite / puis", definition: "Then / next — both used to link steps in a sequence; largely interchangeable at GCSE level." },
      { term: "enfin", definition: "Finally / at last — closes a sequence of actions, e.g. describing the last thing you do before bed." },
      { term: "au rez-de-chaussée", definition: "On the ground floor — French floor numbering starts counting from the floor above this one as 'the first floor'." },
      { term: "vers", definition: "Around / about (a time) — vers huit heures means 'around eight o'clock', useful when a routine isn't exact." },
    ],
    examTips: [
      {
        tip: "Never forget the reflexive pronoun — it isn't optional decoration.",
        detail: "Je lève à sept heures is missing me and is simply wrong French; it must be je me lève. The reflexive pronoun carries real grammatical meaning ('I get MYSELF up'), not just style.",
      },
      {
        tip: "Match the reflexive pronoun to the subject even when the verb is in the infinitive.",
        detail: "After a verb like aimer, the reflexive pronoun still has to agree with the subject: j'aime me lever tôt (I like getting myself up early), not j'aime se lever, even though se is the 'dictionary' form shown in vocabulary lists.",
      },
      {
        tip: "Get the negative word order right: ne — reflexive pronoun — verb — pas.",
        detail: "Je ne me lève pas tôt is correct; ne must come before the reflexive pronoun, and pas goes after the conjugated verb, not before the pronoun.",
      },
      {
        tip: "Use d'abord, ensuite/puis and enfin to structure a whole routine paragraph, not just isolated sentences.",
        detail: "A routine answer that strings 4–5 actions together with sequencing words reads as fluent, connected French, whereas the same actions as separate short sentences read as a basic list — sequencing words are one of the cheapest ways to raise a mark.",
      },
      {
        tip: "Remember French floor numbering is offset from British English 'ground floor / first floor' by one, but matches it exactly.",
        detail: "Le rez-de-chaussée is the ground floor and le premier étage is the floor above it — this actually matches British usage (unlike American 'first floor' = ground floor), so don't second-guess it into being different.",
      },
      {
        tip: "Learn se lever's stem change (lève vs levons) as a pattern, not a one-off.",
        detail: "The same è/e alternation appears in verbs like acheter (achète) — spotting the pattern once makes every future verb like it easier to conjugate correctly.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'Je me lève à sept heures.'",
        accept: ["i get up at seven o'clock", "i get up at seven"],
        answer: "I get up at seven o'clock — me is the reflexive pronoun agreeing with je, required by the reflexive verb se lever.",
      },
      {
        question: "Translate into French: 'She goes to bed at eleven o'clock.'",
        accept: ["elle se couche à onze heures"],
        answer: "Elle se couche à onze heures — se agrees with elle, and couche is the regular -er ending for the il/elle form.",
      },
      {
        question: "Complete with the correct reflexive form: 'Nous ____ à sept heures.' (se réveiller)",
        accept: ["nous réveillons"],
        answer: "Nous réveillons — the reflexive pronoun nous appears twice, once as the subject and once as the object pronoun: Nous nous réveillons à sept heures.",
      },
      {
        question: "Complete with the correct form of se doucher: 'Tu ____ le matin.'",
        accept: ["te douches"],
        answer: "Te douches — the tu form takes the reflexive pronoun te and the regular -er ending -es: Tu te douches le matin.",
      },
      {
        question: "Complete with the correct form of se lever: 'Ils ____ tard le week-end.'",
        accept: ["se lèvent"],
        answer: "Se lèvent — the ils form of se lever, with the accent shift from e to è that appears in most forms except nous and vous.",
      },
      {
        question: "Translate into French: 'I don't get up early.'",
        accept: ["je ne me lève pas tôt", "je ne me leve pas tot"],
        answer: "Je ne me lève pas tôt — ne goes before the reflexive pronoun me, and pas goes after the conjugated verb lève.",
      },
      {
        question: "Translate into French: 'First I have a shower, then I get dressed, and finally I go to school.'",
        accept: ["d'abord je me douche, puis je m'habille, et enfin je vais à l'école", "dabord je me douche, puis je mhabille, et enfin je vais a l'école"],
        answer: "D'abord je me douche, puis je m'habille, et enfin je vais à l'école — d'abord opens the sequence, puis links the middle step, and enfin closes it.",
      },
      {
        question: "Which word means 'the bathroom' in French?",
        choices: ["la salle de bains", "la salle à manger", "la chambre", "le salon"],
        accept: ["la salle de bains"],
        answer: "La salle de bains means the bathroom. La salle à manger is the dining room, la chambre is the bedroom, and le salon is the living room.",
      },
      {
        question: "Which is the correct reflexive pronoun for the subject 'vous'?",
        choices: ["vous", "vos", "se", "nous"],
        accept: ["vous"],
        answer: "Vous is both the subject and the reflexive pronoun for that form: vous vous levez. Se is for il/elle/ils/elles, and nous is for the nous form.",
      },
      {
        question: "In the sentence 'Je me lève tôt', what part of speech is 'tôt'?",
        choices: ["An adverb", "An adjective", "A noun", "A pronoun"],
        accept: ["An adverb"],
        answer: "Tôt ('early') describes how the action of getting up happens, which makes it an adverb. Me is the reflexive pronoun, and lève is the verb.",
      },
      {
        question: "Which sequencing word would you use to introduce the FIRST action in a routine?",
        choices: ["D'abord", "Ensuite", "Enfin", "Après"],
        accept: ["D'abord"],
        answer: "D'abord ('first/first of all') opens a sequence. Ensuite and après continue it, and enfin closes it.",
      },
      {
        question: "Which floor is 'le premier étage' in French?",
        choices: ["The floor above the ground floor", "The ground floor itself", "The top floor", "The basement"],
        accept: ["The floor above the ground floor"],
        answer: "Le premier étage is the floor above the ground floor (le rez-de-chaussée) — this matches British English 'first floor', not American usage where 'first floor' means ground level.",
      },
      {
        question: "Give one reflexive verb used for daily routine other than se lever, se coucher or se doucher.",
        accept: ["se réveiller", "s'habiller", "se laver", "se brosser les dents", "se maquiller", "se raser"],
        answer: "Any genuine daily-routine reflexive verb counts — se réveiller (to wake up), s'habiller (to get dressed) and se laver (to wash) are all common correct answers.",
      },
      {
        question: "Write a paragraph in French describing your morning routine, using at least three reflexive verbs and two sequencing words.",
        answer:
          "There's no single right answer here — mark this one yourself. Check that every reflexive verb has a pronoun matching its subject, that word order is correct in any negative sentence, and that sequencing words (d'abord, puis/ensuite, enfin) genuinely connect the actions rather than just listing them.",
      },
      {
        question: "Explain in English why a reflexive verb like se lever needs a pronoun even when the sentence has an obvious subject like 'je'.",
        answer:
          "Mark it yourself against this: the reflexive pronoun shows the action is done to or by the subject itself — je lève on its own would mean 'I lift (something)', while je me lève specifically means 'I get myself up'. The pronoun carries real meaning about who receives the action, not just grammatical decoration, which is why it can never be dropped.",
      },
      {
        question: "Translate into English: 'D'abord, je me réveille. Ensuite, je m'habille. Enfin, je vais au collège.'",
        accept: ["first, i wake up. then, i get dressed. finally, i go to school.", "first i wake up, then i get dressed, finally i go to school"],
        answer: "First, I wake up. Then, I get dressed. Finally, I go to school. — the three sequencing words d'abord, ensuite and enfin mark the beginning, middle and end of the routine.",
      },
    ],
    misconceptions: [
      {
        wrong: "The reflexive pronoun can be left out if the subject is already clear, the way it can in English.",
        right: "The reflexive pronoun is a required part of the verb, not an optional clarifier — je lève and je me lève mean genuinely different things, and the pronoun can never be dropped.",
      },
      {
        wrong: "In the negative, pas goes immediately after ne, the same as with a normal verb.",
        right: "With a reflexive verb, ne comes before the reflexive pronoun and pas goes after the conjugated verb: je ne me lève pas, not je ne pas me lève.",
      },
      {
        wrong: "Se lever conjugates like a completely regular -er verb throughout.",
        right: "Se lever has a stem change in most forms (je me lève, tu te lèves, ils se lèvent) but not in nous/vous (nous nous levons, vous vous levez) — it needs to be learned as its own pattern, not assumed regular.",
      },
      {
        wrong: "Puis, ensuite and enfin all mean the same thing and are fully interchangeable.",
        right: "Puis and ensuite both mean 'then/next' and are broadly interchangeable, but enfin specifically means 'finally' and should close a sequence, not sit in the middle of one.",
      },
    ],
  },
  "french/grammar-toolkit-1": {
    summary:
      "This is a dedicated grammar topic rather than a vocabulary topic: everything you need to build and use the present tense in French, gathered in one place. It covers the three regular verb families (-er, -ir, -re), the handful of irregular verbs that appear constantly (être, avoir, aller, faire, vouloir, pouvoir, devoir), how reflexive verbs conjugate, and basic negation with ne...pas — the toolkit every other topic on this site assumes you already have.",
    keyFacts: [
      {
        heading: "Regular -er verbs (the largest group)",
        points: [
          "Take off -er from the infinitive to find the stem, then add: -e, -es, -e, -ons, -ez, -ent.",
          "Parler (to speak): je parle, tu parles, il/elle parle, nous parlons, vous parlez, ils/elles parlent.",
          "The je, tu, il/elle and ils/elles forms all SOUND the same despite different spellings — parle, parles, parle, parlent are pronounced identically, so spelling has to be learned, not just heard.",
          "Around 90% of French verbs are regular -er verbs, making this the single most useful pattern to know cold.",
        ],
      },
      {
        heading: "Regular -ir and -re verbs",
        points: [
          "-ir verbs (like finir, to finish): remove -ir, add -is, -is, -it, -issons, -issez, -issent: je finis, nous finissons.",
          "-re verbs (like vendre, to sell): remove -re, add -s, -s, nothing, -ons, -ez, -ent: je vends, il vend (no ending at all on the il/elle form), nous vendons.",
          "The -ir pattern's plural forms insert -iss- before the ending, which -er and -re verbs never do.",
          "Not every verb ending in -ir or -re follows this pattern exactly — some (like partir, venir) are irregular and must be learned separately.",
        ],
      },
      {
        heading: "Key irregular verbs",
        points: [
          "Être (to be): je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont.",
          "Avoir (to have): j'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont.",
          "Aller (to go): je vais, tu vas, il/elle va, nous allons, vous allez, ils/elles vont.",
          "Faire (to do/make): je fais, tu fais, il/elle fait, nous faisons, vous faites, ils/elles font.",
          "Vouloir (to want): je veux, tu veux, il/elle veut, nous voulons, vous voulez, ils/elles veulent.",
          "Pouvoir (to be able to/can): je peux, tu peux, il/elle peut, nous pouvons, vous pouvez, ils/elles peuvent.",
          "Devoir (to have to/must): je dois, tu dois, il/elle doit, nous devons, vous devez, ils/elles doivent.",
        ],
      },
      {
        heading: "Reflexive verb conjugation",
        points: [
          "A reflexive verb pairs a reflexive pronoun (me/te/se/nous/vous/se) with an otherwise normal conjugation: se laver → je me lave, tu te laves, il/elle se lave, nous nous lavons, vous vous lavez, ils/elles se lavent.",
          "The reflexive pronoun always sits directly before the conjugated verb, and elides to m'/t'/s' before a vowel sound: je m'appelle, il s'habille.",
          "Most reflexive verbs are otherwise regular -er verbs once the pronoun is added, so the ending pattern (-e, -es, -e, -ons, -ez, -ent) still applies.",
          "In a two-verb construction (like vouloir + reflexive infinitive), the reflexive pronoun still has to match the SUBJECT, not stay as se: je veux me lever, not je veux se lever.",
        ],
      },
      {
        heading: "Basic negation: ne...pas",
        points: [
          "Ne goes immediately before the conjugated verb, pas immediately after it: je ne parle pas (I don't speak).",
          "Ne shortens to n' before a vowel sound: je n'aime pas (I don't like).",
          "With a reflexive verb, ne goes before the reflexive pronoun, and pas still goes after the verb: je ne me lève pas.",
          "In casual spoken French, ne is often dropped entirely (je parle pas), but GCSE writing and formal speaking tasks expect the full ne...pas form.",
        ],
      },
    ],
    flashcards: [
      { term: "parler (present)", definition: "To speak — model regular -er verb: je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent." },
      { term: "finir (present)", definition: "To finish — model regular -ir verb: je finis, nous finissons, ils finissent (note the -iss- in the plural forms)." },
      { term: "vendre (present)", definition: "To sell — model regular -re verb: je vends, il vend (no ending at all), nous vendons." },
      { term: "être (present)", definition: "To be — irregular: je suis, tu es, il est, nous sommes, vous êtes, ils sont." },
      { term: "avoir (present)", definition: "To have — irregular: j'ai, tu as, il a, nous avons, vous avez, ils ont." },
      { term: "aller (present)", definition: "To go — irregular: je vais, tu vas, il va, nous allons, vous allez, ils vont." },
      { term: "vouloir (present)", definition: "To want — irregular: je veux, tu veux, il veut, nous voulons, vous voulez, ils veulent." },
      { term: "pouvoir (present)", definition: "To be able to / can — irregular: je peux, tu peux, il peut, nous pouvons, vous pouvez, ils peuvent." },
      { term: "devoir (present)", definition: "To have to / must — irregular: je dois, tu dois, il doit, nous devons, vous devez, ils doivent." },
      { term: "ne...pas", definition: "Not — the basic negative wraps around the conjugated verb: je ne parle pas (I don't speak); ne shortens to n' before a vowel." },
      { term: "se laver (present)", definition: "To wash oneself — reflexive: je me lave, tu te laves, il se lave, nous nous lavons, vous vous lavez, ils se lavent." },
      { term: "un infinitif", definition: "An infinitive — the unconjugated 'to...' form of a verb, e.g. parler (to speak), and the form given as a dictionary headword." },
    ],
    examTips: [
      {
        tip: "Learn the -er pattern to total automaticity before anything else.",
        detail: "Because roughly 9 in 10 French verbs are regular -er verbs, fluency with -e/-es/-e/-ons/-ez/-ent unlocks the majority of the language immediately, and every irregular verb is easier to remember as an EXCEPTION to this pattern rather than as a standalone fact.",
      },
      {
        tip: "Don't assume every -ir verb follows the finir pattern.",
        detail: "Partir, sortir and venir all end in -ir but conjugate completely differently (je pars, je sors, je viens) — they need to be learned as their own irregular verbs, not forced into the finir template.",
      },
      {
        tip: "Memorise être and avoir as a pair before tackling other irregulars.",
        detail: "They're the two most frequent verbs in the language, used for identity, possession, age and (later) forming the passé composé — getting these two fully automatic pays off across every other topic.",
      },
      {
        tip: "Match the reflexive pronoun to the subject even inside a two-verb sentence.",
        detail: "Je veux me lever tôt is correct; je veux se lever tôt is wrong, because the reflexive pronoun must always agree with the actual subject of the sentence, not stay in its dictionary form se.",
      },
      {
        tip: "Write out ne...pas in full for GCSE tasks, even though native speakers often drop ne when speaking casually.",
        detail: "Dropping ne (je sais pas instead of je ne sais pas) is normal in spoken French but is marked as an accuracy error in GCSE writing and formal speaking answers, which expect the complete negative structure.",
      },
      {
        tip: "Watch for silent endings that all sound identical in -er verbs.",
        detail: "Je parle, tu parles, il parle and ils parlent are all pronounced the same way despite different spellings — this means listening exams often rely on context (the subject pronoun) rather than the verb ending to tell you who's doing the action.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'Nous ne parlons pas anglais en classe.'",
        accept: ["we don't speak english in class", "we do not speak english in class"],
        answer: "We don't speak English in class — ne...pas wraps around parlons, the nous form of the regular -er verb parler.",
      },
      {
        question: "Complete with the correct form of parler: 'Elle ____ français.'",
        accept: ["parle"],
        answer: "Parle — the il/elle form of the regular -er verb parler, formed by removing -er and adding -e.",
      },
      {
        question: "Complete with the correct form of finir: 'Nous ____ nos devoirs à cinq heures.'",
        accept: ["finissons"],
        answer: "Finissons — the nous form of the regular -ir verb finir, which inserts -iss- before the plural endings.",
      },
      {
        question: "Complete with the correct form of vendre: 'Le magasin ____ des livres.'",
        accept: ["vend"],
        answer: "Vend — the il/elle form of the regular -re verb vendre, which takes no ending at all in this form.",
      },
      {
        question: "Complete with the correct form of vouloir: 'Je ____ aller au cinéma.'",
        accept: ["veux"],
        answer: "Veux — the je form of the irregular verb vouloir (to want), followed here directly by the infinitive aller.",
      },
      {
        question: "Complete with the correct form of pouvoir: 'Tu ____ venir avec nous?'",
        accept: ["peux"],
        answer: "Peux — the tu form of the irregular verb pouvoir (to be able to/can), used to ask a casual question about ability or permission.",
      },
      {
        question: "Complete with the correct form of devoir: 'Ils ____ faire leurs devoirs.'",
        accept: ["doivent"],
        answer: "Doivent — the ils/elles form of the irregular verb devoir (to have to/must), showing the -oi- to -oiv- stem change in the plural forms.",
      },
      {
        question: "Translate into French: 'I don't like maths.'",
        accept: ["je n'aime pas les maths", "je naime pas les maths"],
        answer: "Je n'aime pas les maths — ne shortens to n' before the vowel sound of aime, and pas follows the conjugated verb.",
      },
      {
        question: "Which ending set is correct for a regular -er verb (je, tu, il, nous, vous, ils)?",
        choices: ["-e, -es, -e, -ons, -ez, -ent", "-is, -is, -it, -issons, -issez, -issent", "-s, -s, (none), -ons, -ez, -ent", "-e, -s, -t, -ons, -ez, -ent"],
        accept: ["-e, -es, -e, -ons, -ez, -ent"],
        answer: "-e, -es, -e, -ons, -ez, -ent is the regular -er pattern. The second set belongs to -ir verbs, and the third to -re verbs.",
      },
      {
        question: "Which of these is the correct 'nous' form of être?",
        choices: ["sommes", "sont", "êtes", "avons"],
        accept: ["sommes"],
        answer: "Sommes is the nous form of être. Sont is ils/elles, êtes is vous, and avons belongs to avoir, not être.",
      },
      {
        question: "In the sentence 'Elle parle vite', what part of speech is 'parle'?",
        choices: ["A verb", "A noun", "An adjective", "An adverb"],
        accept: ["A verb"],
        answer: "Parle is the conjugated form of the verb parler, expressing the action 'speaks'. Vite ('quickly') is the adverb in this sentence.",
      },
      {
        question: "Which sentence correctly places a reflexive pronoun inside a two-verb construction?",
        choices: ["Je veux me lever tôt.", "Je veux se lever tôt.", "Je me veux lever tôt.", "Je veux lever me tôt."],
        accept: ["Je veux me lever tôt."],
        answer: "Je veux me lever tôt is correct — the reflexive pronoun agrees with the subject je (as me), not with the infinitive's dictionary form se, and sits directly before the infinitive it belongs to.",
      },
      {
        question: "Which verb family does 'choisir' (to choose) belong to?",
        choices: ["-ir verbs", "-er verbs", "-re verbs", "irregular verbs with no pattern"],
        accept: ["-ir verbs"],
        answer: "Choisir is a regular -ir verb, following the same pattern as finir: je choisis, nous choisissons, ils choisissent.",
      },
      {
        question: "Give one French verb that is completely irregular in the present tense.",
        accept: ["être", "avoir", "aller", "faire", "vouloir", "pouvoir", "devoir"],
        answer: "Être, avoir, aller, faire, vouloir, pouvoir and devoir are all genuinely irregular — any one of them, correctly named, is a valid answer.",
      },
      {
        question: "Write five sentences in French, each using a different verb family or type: one regular -er verb, one regular -ir verb, one regular -re verb, one irregular verb, and one reflexive verb.",
        answer:
          "There's no single right answer here — mark this one yourself. Check that each verb ending genuinely matches its subject pronoun, that the -ir verb correctly inserts -iss- in a plural form if used, and that the reflexive verb has a pronoun agreeing with its subject.",
      },
      {
        question: "Explain in English why French verbs are grouped into families (-er, -ir, -re) rather than each being learned individually, and what the exceptions to this system mean for a learner.",
        answer:
          "Mark it yourself against this: grouping verbs by their infinitive ending lets a learner apply one set of endings to hundreds of verbs at once rather than memorising each verb from scratch, which is efficient because the vast majority of French verbs are regular, especially -er verbs. The exceptions — être, avoir, aller, faire and others — have to be learned individually precisely because they don't follow any of the three patterns, which is why they're worth memorising early and thoroughly.",
      },
    ],
    misconceptions: [
      {
        wrong: "Every verb ending in -ir conjugates like finir.",
        right: "Many common -ir verbs — partir, sortir, venir — are irregular and conjugate quite differently from finir; the -iss- pattern only applies to REGULAR -ir verbs.",
      },
      {
        wrong: "The je, tu, il and ils forms of a regular -er verb are pronounced differently, matching their different spellings.",
        right: "Je parle, tu parles, il parle and ils parlent are all pronounced identically despite the spelling differences — the endings -e, -es, -e and -ent are silent.",
      },
      {
        wrong: "Ne...pas can be dropped in written GCSE French the way it often is in casual spoken French.",
        right: "Dropping ne is a feature of informal spoken French only; GCSE writing and formal speaking tasks are marked on using the complete ne...pas structure.",
      },
      {
        wrong: "A reflexive infinitive always keeps its dictionary form 'se' inside a sentence, whatever the subject.",
        right: "The reflexive pronoun must change to match the actual subject of the sentence — je veux me lever, tu veux te lever, elle veut se lever — se is only correct for il/elle/ils/elles.",
      },
    ],
  },
  "french/technology-and-social-media": {
    summary:
      "Technology and social media give GCSE students a chance to talk about something genuinely current, and the topic tests three grammar points at once: opinion vocabulary applied to devices and apps, comparatives for comparing technology, and the near future (aller + infinitive) for talking about how you'll use technology later. This topic covers devices, apps and internet vocabulary, opinions on technology's pros and cons, plus...que/moins...que comparatives, and the near future tense.",
    keyFacts: [
      {
        heading: "Devices and internet vocabulary",
        points: [
          "Devices: un portable/un smartphone (mobile phone), une tablette (tablet), un ordinateur (computer), un ordinateur portable (laptop, literally 'portable computer').",
          "Internet basics: Internet (no article needed in most set phrases, but capitalised), un site web (a website), un mot de passe (a password), le wifi.",
          "Actions: télécharger (to download), envoyer un message (to send a message), naviguer sur Internet (to browse the internet), publier une photo (to post a photo).",
          "Un réseau social (a social network/social media platform) is singular; les réseaux sociaux is the plural form used for 'social media' in general.",
        ],
      },
      {
        heading: "Apps and social media vocabulary",
        points: [
          "Une application/une appli (an app) — appli is the everyday spoken shortening, similar to English 'app'.",
          "Common actions on social media: partager (to share), aimer/liker (to like — liker is a borrowed Anglicism common in casual speech), commenter (to comment), suivre quelqu'un (to follow someone).",
          "Un abonné/une abonnée is a follower; s'abonner à means 'to subscribe to/follow'.",
          "Passer du temps sur means 'to spend time on' — je passe trop de temps sur les réseaux sociaux (I spend too much time on social media).",
        ],
      },
      {
        heading: "Opinions on technology",
        points: [
          "Positive: pratique (practical/convenient), utile (useful), rapide (fast), amusant (fun).",
          "Negative: addictif/addictive (addictive), dangereux/dangereuse (dangerous), une perte de temps (a waste of time).",
          "D'un côté...de l'autre côté (on one hand...on the other hand) is a useful structure for a balanced opinion answer.",
          "Cependant (however) and pourtant (yet/however) both introduce a contrasting point, useful for weighing pros and cons of technology.",
        ],
      },
      {
        heading: "Comparatives: plus...que / moins...que",
        points: [
          "Plus...que means 'more...than': Instagram est plus populaire que Facebook chez les jeunes (Instagram is more popular than Facebook among young people).",
          "Moins...que means 'less...than': Les lettres sont moins rapides que les textos (Letters are less fast/quick than texts).",
          "Aussi...que means 'as...as': Ce jeu est aussi amusant que l'autre (This game is as fun as the other one).",
          "Bon (good) has an irregular comparative: meilleur (better), not plus bon — C'est meilleur que l'ancienne version (It's better than the old version).",
        ],
      },
      {
        heading: "The near future: aller + infinitive",
        points: [
          "Formed with the present tense of aller + an infinitive verb: je vais acheter un nouveau portable (I'm going to buy a new phone).",
          "Aller conjugates irregularly: je vais, tu vas, il/elle va, nous allons, vous allez, ils/elles vont.",
          "This structure is used constantly for near-future plans about technology: on va télécharger la nouvelle application (we're going to download the new app).",
          "In the negative, ne...pas wraps around the conjugated part of aller, not the infinitive: je ne vais pas acheter ce téléphone (I'm not going to buy this phone).",
        ],
      },
    ],
    flashcards: [
      { term: "un portable", definition: "A mobile phone — a false-friend trap: it does NOT mean 'laptop', which is un ordinateur portable." },
      { term: "les réseaux sociaux", definition: "Social media — literally 'social networks'; réseau is masculine, irregular plural adds -x not -s." },
      { term: "télécharger", definition: "To download — a regular -er verb; téléverser is the less common word for 'to upload'." },
      { term: "un mot de passe", definition: "A password — literally 'word of passage'; a fixed phrase, not a literal translation of 'password'." },
      { term: "partager", definition: "To share — regular -er verb, used for sharing posts, photos or content online." },
      { term: "un abonné / une abonnée", definition: "A follower/subscriber — from s'abonner à (to subscribe to/follow); note the gendered noun forms." },
      { term: "addictif / addictive", definition: "Addictive — regular -if/-ive adjective ending, agrees with the noun it describes." },
      { term: "une perte de temps", definition: "A waste of time — a fixed phrase; perte is feminine, from the verb perdre (to lose)." },
      { term: "plus...que", definition: "More...than — the standard French comparative structure: plus rapide que (faster than)." },
      { term: "meilleur(e)", definition: "Better — the irregular comparative of bon (good); never say 'plus bon'." },
      { term: "aller + infinitif", definition: "The near future ('going to...') — je vais + infinitive, e.g. je vais publier une photo (I'm going to post a photo)." },
      { term: "en ligne", definition: "Online — a fixed adverbial phrase: faire des achats en ligne (to shop online)." },
    ],
    examTips: [
      {
        tip: "Don't confuse un portable with a laptop.",
        detail: "Un portable on its own means a mobile phone; a laptop is un ordinateur portable. Dropping ordinateur changes the meaning entirely, and it's a very common vocabulary trap in GCSE listening exams.",
      },
      {
        tip: "Never say 'plus bon' for 'better'.",
        detail: "Bon has its own irregular comparative form, meilleur, the same way English 'good' becomes 'better' rather than 'more good'. Plus bon is simply wrong French.",
      },
      {
        tip: "Keep the negative around aller, not the infinitive, in the near future.",
        detail: "Je ne vais pas télécharger cette application is correct; the ne...pas wraps around the conjugated verb vais, while télécharger stays untouched in its infinitive form.",
      },
      {
        tip: "Use d'un côté...de l'autre côté to structure a balanced tech opinion.",
        detail: "GCSE mark schemes reward answers that see both sides. This phrase gives you a ready-made structure for weighing benefits (pratique, utile) against risks (addictif, une perte de temps) in the same paragraph.",
      },
      {
        tip: "Remember réseau's irregular plural: réseaux, not réseaus.",
        detail: "Nouns ending in -eau form their plural with -x, not -s — this applies to a small but frequent set of nouns including château (châteaux) and cadeau (cadeaux) as well as réseau.",
      },
      {
        tip: "Use the near future confidently for any 'what will you do with technology' question.",
        detail: "Aller + infinitive is grammatically simpler than the true future tense and is entirely acceptable at GCSE — je vais acheter, on va utiliser — so lean on it rather than risking an unfamiliar future-tense ending under exam pressure.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'Je passe trop de temps sur les réseaux sociaux.'",
        accept: ["i spend too much time on social media"],
        answer: "I spend too much time on social media — passer du temps sur is the set phrase for spending time on something, here made negative in tone by trop (too much).",
      },
      {
        question: "Translate into French: 'I'm going to buy a new phone.'",
        accept: ["je vais acheter un nouveau portable", "je vais acheter un nouveau téléphone"],
        answer: "Je vais acheter un nouveau portable — the near future (aller + infinitive) expresses a planned future action.",
      },
      {
        question: "Complete with the correct form of aller: 'Nous ____ télécharger la nouvelle application.'",
        accept: ["allons"],
        answer: "Allons — the nous form of the irregular verb aller, used here to build the near future: Nous allons télécharger...",
      },
      {
        question: "Complete the comparative: 'Instagram est ____ populaire ____ Facebook.' (more...than)",
        accept: ["plus...que", "plus / que", "plus que"],
        answer: "Plus...que — Instagram est plus populaire que Facebook (Instagram is more popular than Facebook), the standard 'more...than' comparative structure.",
      },
      {
        question: "Give the correct comparative form of 'bon' meaning 'better'.",
        accept: ["meilleur", "meilleure"],
        answer: "Meilleur (or meilleure for a feminine noun) — bon has an irregular comparative, unlike most French adjectives, which simply add plus in front.",
      },
      {
        question: "Translate into French: 'This app is as useful as the old one.'",
        accept: ["cette application est aussi utile que l'ancienne"],
        answer: "Cette application est aussi utile que l'ancienne — aussi...que expresses equality ('as...as'), and application is feminine so cette and ancienne agree with it.",
      },
      {
        question: "Translate into French: 'I'm not going to post that photo.'",
        accept: ["je ne vais pas publier cette photo"],
        answer: "Je ne vais pas publier cette photo — ne...pas wraps around vais, the conjugated part of the near-future construction, while publier stays in the infinitive.",
      },
      {
        question: "Which word correctly means 'a password'?",
        choices: ["un mot de passe", "un mot de passage", "une passe", "un code secret"],
        accept: ["un mot de passe"],
        answer: "Un mot de passe is the standard French term for a password. The others are either incorrect or not the natural set phrase used in everyday French.",
      },
      {
        question: "Which of these means 'addictive'?",
        choices: ["addictif", "actif", "attractif", "abusif"],
        accept: ["addictif"],
        answer: "Addictif (feminine: addictive) means addictive. Actif means active, attractif means attractive, and abusif means abusive — all real words but wrong for this meaning.",
      },
      {
        question: "In the sentence 'Ce jeu est très amusant', what part of speech is 'amusant'?",
        choices: ["An adjective", "A verb", "An adverb", "A noun"],
        accept: ["An adjective"],
        answer: "Amusant describes the noun jeu (game), which is exactly what an adjective does. Est is the verb, and très is the adverb modifying amusant.",
      },
      {
        question: "Which structure correctly expresses the near future?",
        choices: ["aller + infinitive", "avoir + infinitive", "être + infinitive", "faire + infinitive"],
        accept: ["aller + infinitive"],
        answer: "Aller + infinitive (je vais acheter) is the near-future structure, equivalent to English 'going to...'. The other verbs don't form a future tense this way.",
      },
      {
        question: "Which sentence correctly uses a comparative?",
        choices: ["Les textos sont plus rapides que les lettres.", "Les textos sont plus rapide que les lettres.", "Les textos sont plus vite que les lettres.", "Les textos sont le plus rapides que les lettres."],
        accept: ["Les textos sont plus rapides que les lettres."],
        answer: "Les textos sont plus rapides que les lettres is correct — rapides agrees in the plural with textos, and plus...que is the right comparative structure. Vite is an adverb, not an adjective, so it can't take the plural -s.",
      },
      {
        question: "Give one advantage and one disadvantage of social media, in French.",
        accept: ["pratique", "rapide", "utile", "amusant", "addictif", "dangereux", "une perte de temps"],
        answer: "Any genuine advantage (pratique, rapide, utile, amusant) paired conceptually with any disadvantage (addictif, dangereux, une perte de temps) is correct — the checker accepts a single correct word here as a valid partial answer.",
      },
      {
        question: "Write a paragraph in French giving a balanced opinion on social media, using d'un côté...de l'autre côté and at least one comparative.",
        answer:
          "There's no single right answer here — mark this one yourself. Check for the d'un côté...de l'autre côté structure genuinely weighing two sides, correct adjective agreement, and a comparative (plus...que, moins...que or aussi...que) used accurately.",
      },
      {
        question: "Explain in English why 'un portable' can be a confusing word for an English speaker learning French technology vocabulary.",
        answer:
          "Mark it yourself against this: in English, 'portable' as a noun would most naturally suggest a portable computer or laptop, but in French un portable on its own means a mobile phone — a laptop needs the fuller phrase un ordinateur portable. A strong answer notes this is a false-friend-style trap based on assumed meaning rather than spelling.",
      },
      {
        question: "Translate into French: 'We are going to use this app more than the old one.'",
        accept: ["nous allons utiliser cette application plus que l'ancienne"],
        answer: "Nous allons utiliser cette application plus que l'ancienne — allons + utiliser forms the near future, and plus que gives the comparative 'more than'.",
      },
    ],
    misconceptions: [
      {
        wrong: "Un portable always means 'a laptop', matching the English word 'portable'.",
        right: "Un portable on its own means a mobile phone; a laptop specifically needs un ordinateur portable — dropping ordinateur changes the meaning.",
      },
      {
        wrong: "'Better' is formed the regular way in French, as 'plus bon'.",
        right: "Bon has an irregular comparative form, meilleur, in the same way English 'good' becomes 'better' rather than 'more good' — plus bon is not correct French.",
      },
      {
        wrong: "In the near future, ne...pas surrounds the whole verb phrase, including the infinitive.",
        right: "Ne...pas wraps only around the conjugated part of aller: je ne vais pas télécharger, not je ne vais télécharger pas — the infinitive stays outside the negative.",
      },
      {
        wrong: "Réseau simply adds -s for its plural, like most French nouns.",
        right: "Nouns ending in -eau form their plural with -x instead: réseaux, not réseaus — the same pattern applies to château and cadeau.",
      },
    ],
  },
  "french/customs-festivals-and-celebrations": {
    summary:
      "Festivals and celebrations let GCSE students show cultural knowledge alongside grammar, and examiners specifically reward answers that go beyond Christmas to show awareness of French and wider Francophone traditions. This topic covers major French and Francophone festivals, celebration vocabulary, structures for comparing customs between countries, and direct object pronouns (le/la/les), which come up constantly once you start describing how people celebrate.",
    keyFacts: [
      {
        heading: "Key French and Francophone festivals",
        points: [
          "Noël (Christmas) — in France, the main meal (le réveillon) is traditionally eaten on the evening of the 24th, la veille de Noël (Christmas Eve).",
          "Le 14 juillet (Bastille Day/the French national day) commemorates the storming of the Bastille in 1789 and is marked with fireworks (un feu d'artifice) and a military parade in Paris.",
          "La Chandeleur (2 February, Candlemas) is a distinctly French tradition of eating crêpes, often while holding a coin in the other hand for good luck.",
          "L'Aïd (Eid) is celebrated by Muslim communities across France and other Francophone countries, marking the end of Ramadan (l'Aïd el-Fitr) or the Festival of Sacrifice (l'Aïd el-Kebir), reflecting France's religious diversity.",
          "Other notable dates: le jour de l'An (New Year's Day), la fête des Rois (Epiphany, 6 January, marked by eating la galette des rois with a hidden charm inside).",
        ],
      },
      {
        heading: "Celebration vocabulary",
        points: [
          "Fêter/célébrer (to celebrate) — both are used, célébrer is slightly more formal.",
          "Un cadeau (a gift, irregular plural cadeaux), une carte (a card), la décoration (decoration/decorations), un feu d'artifice (fireworks, literally 'a fire of artifice').",
          "Se réunir (to get together/gather) is the reflexive verb for families or friends coming together for a celebration.",
          "Un défilé (a parade), une tradition, célèbre (famous) — used to describe well-known events like le défilé du 14 juillet.",
        ],
      },
      {
        heading: "Comparing customs between countries",
        points: [
          "Alors que and tandis que both mean 'whereas/while', useful for direct comparison: En France, on mange une bûche de Noël, alors qu'au Royaume-Uni on mange un pudding de Noël.",
          "Contrairement à means 'unlike/in contrast to': Contrairement à la Grande-Bretagne, la France fête le 14 juillet comme fête nationale.",
          "En revanche (on the other hand) is another strong contrast connective for comparing traditions.",
          "Comparisons at GCSE level score well when they name a SPECIFIC custom on both sides, not just a vague 'it's different in France'.",
        ],
      },
      {
        heading: "Direct object pronouns: le, la, les",
        points: [
          "Le, la and les replace a specific noun that has already been mentioned, standing in for 'it/him/her/them': Tu aimes ce cadeau? Oui, je l'aime. (Do you like this gift? Yes, I like it.)",
          "They go BEFORE the conjugated verb, unlike English where the object usually follows the verb: Je le vois (I see it/him), not Je vois le.",
          "Le and la both elide to l' before a vowel sound: je l'adore (I love it/him/her).",
          "In a two-verb construction, the pronoun goes before the infinitive it belongs to, not the first verb: Je vais le manger (I'm going to eat it), not Je le vais manger.",
        ],
      },
    ],
    flashcards: [
      { term: "le réveillon", definition: "The Christmas Eve/New Year's Eve feast — the main celebratory meal, traditionally eaten late in the evening." },
      { term: "le 14 juillet", definition: "Bastille Day — the French national day, marked by fireworks and a military parade; never called 'la fête de Bastille' in French." },
      { term: "la Chandeleur", definition: "Candlemas (2 February) — a French tradition of eating crêpes, sometimes while holding a coin for good luck." },
      { term: "l'Aïd (m)", definition: "Eid — celebrated by Muslim communities in France and across the Francophone world; l'Aïd el-Fitr marks the end of Ramadan." },
      { term: "la galette des rois", definition: "The 'kings' cake' eaten for l'Épiphanie (6 January), containing a hidden charm (une fève) that names a 'king' or 'queen' for the day." },
      { term: "un feu d'artifice", definition: "Fireworks — literally 'a fire of artifice'; often used in the singular even for a whole fireworks display." },
      { term: "se réunir", definition: "To get together / gather — reflexive verb used for families or friends coming together to celebrate." },
      { term: "alors que / tandis que", definition: "Whereas / while — used to directly contrast a custom in one country with another." },
      { term: "contrairement à", definition: "Unlike / in contrast to — a strong comparative connective placed at the start of a contrast: contrairement à..." },
      { term: "un défilé", definition: "A parade — from défiler (to march past), used for events like le défilé du 14 juillet." },
      { term: "le/la/les (pronoms)", definition: "It/him/her/them (direct object pronouns) — go BEFORE the conjugated verb, unlike in English: je le vois (I see it)." },
      { term: "un cadeau", definition: "A gift/present — irregular plural cadeaux (not cadeaus), following the -eau → -eaux pattern." },
    ],
    examTips: [
      {
        tip: "Name a specific custom, not just a country, when comparing traditions.",
        detail: "En France on mange une bûche de Noël, alors qu'au Royaume-Uni on mange un pudding de Noël scores far better than a vague 'Christmas is different in France' — specific, named customs on both sides show real cultural knowledge.",
      },
      {
        tip: "Put direct object pronouns before the verb they belong to, not after.",
        detail: "Je le vois is correct; je vois le is simply wrong word order, copying English structure onto French, where the pronoun must come first.",
      },
      {
        tip: "In a two-verb sentence, attach the pronoun to the infinitive, not the first verb.",
        detail: "Je vais le manger is correct — the object pronoun goes immediately before the verb it's actually the object of, which is manger (to eat), not vais.",
      },
      {
        tip: "Don't limit festival answers to Christmas and Bastille Day.",
        detail: "Mentioning La Chandeleur, la galette des rois, or L'Aïd shows a wider range of cultural knowledge than every student defaulting to Noël, and GCSE mark schemes explicitly reward range and detail.",
      },
      {
        tip: "Remember cadeau's irregular plural: cadeaux, not cadeaus.",
        detail: "Like réseau and château, cadeau belongs to the group of nouns ending in -eau that form their plural with -x rather than -s.",
      },
      {
        tip: "Use contrairement à and en revanche to lift comparison answers above 'et' and 'mais'.",
        detail: "These stronger connectives are specifically what separates a higher mark-band answer from a basic one when a task asks you to compare customs between countries.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'On mange des crêpes pour la Chandeleur.'",
        accept: ["we eat crepes for candlemas", "we eat pancakes for candlemas", "people eat crepes for candlemas"],
        answer: "We eat crêpes for Candlemas (la Chandeleur) — on here means 'we/people' in general, a very common informal use of the pronoun.",
      },
      {
        question: "Translate into French: 'Bastille Day is the French national day.'",
        accept: ["le 14 juillet est la fête nationale française", "le quatorze juillet est la fête nationale française"],
        answer: "Le 14 juillet est la fête nationale française — the day is referred to by its date, not by a phrase meaning 'Bastille Day', in everyday French.",
      },
      {
        question: "Complete the sentence with the correct object pronoun: 'Tu aimes ce cadeau? Oui, je ____ aime.' (it)",
        accept: ["l'"],
        answer: "L' — le elides to l' before the vowel sound of aime; the pronoun goes before the verb: je l'aime.",
      },
      {
        question: "Complete the sentence with the correct object pronoun: 'Où sont mes cartes? Je ne ____ trouve pas.' (them)",
        accept: ["les"],
        answer: "Les — les replaces the plural noun cartes and goes before the conjugated verb: je ne les trouve pas.",
      },
      {
        question: "Complete with the correct form of se réunir: 'Toute la famille ____ pour Noël.'",
        accept: ["se réunit"],
        answer: "Se réunit — the il/elle form (agreeing with famille, singular) of the reflexive verb se réunir, meaning the whole family gets together.",
      },
      {
        question: "Translate into French: 'I'm going to eat it.' (referring to a specific cake, le gâteau)",
        accept: ["je vais le manger"],
        answer: "Je vais le manger — in a two-verb construction, the object pronoun le goes directly before manger, the infinitive it belongs to, not before vais.",
      },
      {
        question: "Translate into French: 'Unlike Britain, France celebrates the 14th of July as its national day.'",
        accept: ["contrairement à la grande-bretagne, la france fête le 14 juillet comme fête nationale", "contrairement à la grande bretagne, la france fête le 14 juillet comme fête nationale"],
        answer: "Contrairement à la Grande-Bretagne, la France fête le 14 juillet comme fête nationale — contrairement à introduces the contrast at the start of the sentence.",
      },
      {
        question: "Which festival is specifically associated with eating crêpes?",
        choices: ["La Chandeleur", "Le 14 juillet", "Noël", "La fête des Rois"],
        accept: ["La Chandeleur"],
        answer: "La Chandeleur (2 February) is the French festival specifically associated with eating crêpes, sometimes while holding a coin for good luck.",
      },
      {
        question: "What does 'la galette des rois' contain that makes it a tradition rather than just a cake?",
        choices: ["A hidden charm called une fève", "A hidden coin worth money", "A written fortune", "A candle to blow out"],
        accept: ["A hidden charm called une fève"],
        answer: "La galette des rois contains une fève, a small hidden charm — whoever finds it in their slice is crowned 'king' or 'queen' for the day, traditionally wearing a paper crown.",
      },
      {
        question: "In the sentence 'Je le vois tous les jours', what part of speech is 'le'?",
        choices: ["A direct object pronoun", "A definite article", "An adjective", "A subject pronoun"],
        accept: ["A direct object pronoun"],
        answer: "Le here stands in for a previously mentioned masculine noun and is the object of vois, making it a direct object pronoun rather than the article 'the'.",
      },
      {
        question: "Which connective correctly introduces a contrast between customs?",
        choices: ["alors que", "et", "aussi", "donc"],
        accept: ["alors que"],
        answer: "Alors que ('whereas') introduces a contrast between two things. Et and aussi add rather than contrast, and donc means 'therefore', showing a result, not a contrast.",
      },
      {
        question: "Which sentence correctly places the direct object pronoun?",
        choices: ["Je le mange.", "Je mange le.", "Je mange il.", "Le je mange."],
        accept: ["Je le mange."],
        answer: "Je le mange is correct — the direct object pronoun must come before the conjugated verb in French, unlike English word order.",
      },
      {
        question: "Give one Francophone festival that is not Christmas or Bastille Day.",
        accept: ["la chandeleur", "l'aïd", "la fête des rois", "l'épiphanie", "le jour de l'an"],
        answer: "La Chandeleur, l'Aïd, la fête des Rois, l'Épiphanie and le jour de l'An are all valid — any genuine named festival other than Noël or le 14 juillet is correct.",
      },
      {
        question: "Write a paragraph in French comparing how Christmas is celebrated in France and in the UK, using at least one direct object pronoun and one comparison connective.",
        answer:
          "There's no single right answer here — mark this one yourself. Check for a specific named custom on each side (e.g. le réveillon vs a British Christmas dinner), a comparison connective like alors que or contrairement à, and at least one correctly placed direct object pronoun (le/la/les) before a verb.",
      },
      {
        question: "Explain in English why French GCSE exam boards specifically value mentioning festivals like L'Aïd or La Chandeleur, not just Christmas, in a cultural-comparison answer.",
        answer:
          "Mark it yourself against this: France and the wider Francophone world are religiously and culturally diverse, and mentioning festivals beyond Christmas shows genuine cultural knowledge of that diversity rather than assuming French culture maps directly onto a British Christian calendar. A strong answer notes this breadth is specifically what separates a high-scoring cultural answer from a generic one.",
      },
      {
        question: "Translate into English: 'Contrairement au Royaume-Uni, en France, on fête la Chandeleur en mangeant des crêpes.'",
        accept: ["unlike the united kingdom, in france, people celebrate candlemas by eating crepes", "unlike the uk, in france, we celebrate candlemas by eating pancakes"],
        answer: "Unlike the United Kingdom, in France, people celebrate Candlemas by eating crêpes — contrairement au introduces the contrast, and en mangeant means 'by eating'.",
      },
    ],
    misconceptions: [
      {
        wrong: "Direct object pronouns like le/la/les go after the verb, the same as in English.",
        right: "French direct object pronouns go BEFORE the conjugated verb: je le vois, not je vois le — this is one of the clearest word-order differences from English.",
      },
      {
        wrong: "In a two-verb sentence, the object pronoun goes before the first verb.",
        right: "The pronoun attaches to whichever verb it's actually the object of — usually the infinitive: je vais le manger, not je le vais manger.",
      },
      {
        wrong: "Le 14 juillet is called 'Bastille Day' in French, mirroring the English name.",
        right: "In French it's simply called le 14 juillet (the 14th of July) or la fête nationale — 'Bastille Day' is an English-language name not used by French speakers themselves.",
      },
      {
        wrong: "France only celebrates Christian festivals like Christmas.",
        right: "France and the Francophone world celebrate a religiously diverse range of festivals, including L'Aïd, reflecting the country's actual population and traditions.",
      },
    ],
  },
  "french/town-and-region": {
    summary:
      "Describing a town and giving directions is a staple GCSE speaking task, and it draws on three separate skills: place vocabulary, prepositions that pin those places down precisely, and weather language for setting a scene. This topic covers places in a town, giving and understanding directions, prepositions of place, weather vocabulary, and adjectives for describing your local area.",
    keyFacts: [
      {
        heading: "Places in a town",
        points: [
          "Core places: la mairie (town hall), la banque (bank), la poste (post office), le marché (market), l'église (church), la gare (train station), l'arrêt de bus (bus stop).",
          "Shops: la boulangerie (bakery), la pharmacie (pharmacy), le supermarché (supermarket), le centre commercial (shopping centre).",
          "Leisure: le cinéma, le parc, la piscine (swimming pool), le musée (museum), la bibliothèque (library).",
          "Il y a (there is/are) is the standard way to say what a town has: Il y a une piscine dans ma ville (There's a swimming pool in my town).",
        ],
      },
      {
        heading: "Giving and understanding directions",
        points: [
          "Tournez à gauche/à droite (turn left/right) uses the vous imperative form, standard for giving directions to a stranger.",
          "Continuez tout droit (continue straight ahead), traversez la rue (cross the street), prenez la première/deuxième rue à gauche (take the first/second street on the left).",
          "C'est près d'ici / c'est loin d'ici (it's near here / it's far from here) answer the basic 'how far' question.",
          "Jusqu'à means 'as far as/until': allez tout droit jusqu'au feu rouge (go straight on until the traffic light).",
        ],
      },
      {
        heading: "Prepositions of place",
        points: [
          "En face de (opposite), à côté de (next to), près de (near), loin de (far from) — all followed by de, which contracts with le/les to du/des: en face du cinéma, à côté des magasins.",
          "Entre (between) needs two things: entre la banque et la poste (between the bank and the post office).",
          "Devant (in front of) and derrière (behind) don't take de at all: devant la gare, derrière l'église.",
          "Dans (in), sur (on) and sous (under) are simple prepositions with no contraction rule of their own, though dans + le still becomes dans le, not a fused form.",
        ],
      },
      {
        heading: "Weather vocabulary",
        points: [
          "Il fait beau (it's nice weather), il fait mauvais (it's bad weather), il fait chaud (it's hot), il fait froid (it's cold) — all use faire, not être.",
          "Il pleut (it's raining) and il neige (it's snowing) are impersonal verbs with no separate subject beyond il.",
          "Il y a du vent/du soleil/des nuages (it's windy/sunny/cloudy) uses il y a + du/des rather than faire.",
          "Weather can be put in the past (il a plu, it rained) or near future (il va neiger, it's going to snow) exactly like any other verb.",
        ],
      },
      {
        heading: "Describing your local area with adjectives",
        points: [
          "Positive: animé(e) (lively), pittoresque (picturesque), historique (historic), calme (quiet/calm).",
          "Negative: pollué(e) (polluted), bruyant(e) (noisy), ennuyeux/ennuyeuse (boring), sale (dirty).",
          "Il y a beaucoup à faire (there's a lot to do) and il n'y a rien à faire (there's nothing to do) are useful set phrases for evaluating a town.",
          "As with any adjective, agreement must match the noun described: ma ville est animée (feminine agreement on animée).",
        ],
      },
    ],
    flashcards: [
      { term: "la mairie", definition: "The town hall — feminine noun; not to be confused with la mer (the sea), a common mishearing." },
      { term: "en face de", definition: "Opposite — contracts with le/les: en face du parc, en face des magasins." },
      { term: "à côté de", definition: "Next to / beside — contracts with le/les the same way as en face de: à côté du cinéma." },
      { term: "tournez à gauche/droite", definition: "Turn left/right — vous imperative form, the standard polite way to give directions to a stranger." },
      { term: "jusqu'à", definition: "As far as / until — used to mark an endpoint: allez tout droit jusqu'au rond-point (go straight until the roundabout)." },
      { term: "il fait beau", definition: "It's nice weather — uses faire, not être, for most weather descriptions involving temperature or general conditions." },
      { term: "il pleut / il neige", definition: "It's raining / it's snowing — impersonal verbs, each conjugated only in the il form." },
      { term: "animé(e)", definition: "Lively — a positive adjective for describing a town's atmosphere; agrees like a regular -é adjective." },
      { term: "pittoresque", definition: "Picturesque — ends in -e already, so identical for masculine and feminine nouns." },
      { term: "bruyant(e)", definition: "Noisy — a negative adjective often used to describe town centres or busy roads." },
      { term: "il y a", definition: "There is / there are — invariable regardless of singular or plural: il y a un parc, il y a des magasins." },
      { term: "entre", definition: "Between — needs two things named: entre la gare et la banque (between the station and the bank)." },
    ],
    examTips: [
      {
        tip: "Learn en face de, à côté de and près de together with their contraction rule.",
        detail: "All three take de before the noun, and de + le/les contracts to du/des exactly like any other de + article combination — en face du marché, à côté des magasins — this is tested constantly in directions tasks.",
      },
      {
        tip: "Use faire, not être, for most weather phrases.",
        detail: "Il fait beau, il fait froid, il fait chaud — weather conditions in French default to faire. The exceptions are il pleut and il neige, which are their own impersonal verbs with no faire at all.",
      },
      {
        tip: "Give directions in the vous imperative unless you know you're speaking informally.",
        detail: "Tournez, continuez, traversez are the standard forms for giving directions to a stranger. The tu imperative (tourne, continue) would only be appropriate speaking to a friend, which is rarely the context in a directions task.",
      },
      {
        tip: "Don't muddle la mairie (town hall) with la mer (the sea).",
        detail: "These two words sound similar to English-speaking ears but mean completely different things — mixing them up in a listening exam changes an entire answer's meaning.",
      },
      {
        tip: "Back up an opinion on your town with a reason and, ideally, a comparison.",
        detail: "Ma ville est animée parce qu'il y a beaucoup de magasins et de cafés is stronger than a bare adjective — GCSE writing and speaking mark schemes reward justified opinions over simple statements.",
      },
      {
        tip: "Use il y a with both singular and plural nouns without changing its form.",
        detail: "Il y a is completely invariable: il y a un cinéma and il y a beaucoup de magasins both use the exact same il y a, unlike English 'there is/there are', which changes with number.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'Il y a une piscine et un parc dans ma ville.'",
        accept: ["there is a swimming pool and a park in my town", "there's a swimming pool and a park in my town"],
        answer: "There is a swimming pool and a park in my town — il y a stays the same form regardless of how many things follow it.",
      },
      {
        question: "Translate into French: 'Turn left at the traffic lights.'",
        accept: ["tournez à gauche au feu rouge", "tournez à gauche aux feux"],
        answer: "Tournez à gauche au feu rouge — tournez is the vous imperative, standard for giving directions politely.",
      },
      {
        question: "Complete with the correct preposition: 'La banque est ____ la poste.' (opposite)",
        accept: ["en face de", "en face de la"],
        answer: "En face de — en face de la poste (opposite the post office); the de here doesn't contract because la stays as la, not le.",
      },
      {
        question: "Complete with the correct preposition: 'Le cinéma est ____ marché.' (next to the — masculine noun)",
        accept: ["à côté du"],
        answer: "À côté du — à côté de + le contracts to à côté du, since marché is masculine singular.",
      },
      {
        question: "Complete the weather phrase: 'Il ____ beau aujourd'hui.'",
        accept: ["fait"],
        answer: "Fait — the il form of faire, used in the standard weather phrase il fait beau (it's nice weather).",
      },
      {
        question: "Complete with the correct form of the adjective: 'Ma ville est très ____.' (animé)",
        accept: ["animée"],
        answer: "Animée — ville is feminine, so animé takes the feminine -e ending to agree: animée.",
      },
      {
        question: "Translate into French: 'It's raining, so we're going to stay at home.'",
        accept: ["il pleut, donc on va rester à la maison", "il pleut donc on va rester à la maison"],
        answer: "Il pleut, donc on va rester à la maison — il pleut is the impersonal weather verb, and donc links it to the consequence using the near future.",
      },
      {
        question: "Which preposition correctly completes 'Le parc est ____ la banque et la poste' (between)?",
        choices: ["entre", "en face de", "à côté de", "devant"],
        accept: ["entre"],
        answer: "Entre means 'between' and needs two things named, which fits this sentence perfectly. The others describe a single relationship to one place, not a position between two.",
      },
      {
        question: "Which sentence correctly describes rain in French?",
        choices: ["Il pleut.", "Il fait pleut.", "Il est pluie.", "Il fait de la pluie."],
        accept: ["Il pleut."],
        answer: "Il pleut is the correct impersonal verb for 'it's raining'. The other options wrongly try to combine faire or être with the noun la pluie instead.",
      },
      {
        question: "In the sentence 'Le musée est très intéressant', what part of speech is 'intéressant'?",
        choices: ["An adjective", "A noun", "A verb", "A preposition"],
        accept: ["An adjective"],
        answer: "Intéressant describes le musée, which is exactly what an adjective does. Est is the verb, and très is the adverb intensifying the adjective.",
      },
      {
        question: "Which word means 'noisy'?",
        choices: ["bruyant", "bruyeux", "brumeux", "bruyère"],
        accept: ["bruyant"],
        answer: "Bruyant means noisy. Brumeux means misty/foggy, and bruyère is a completely different word (heather, the plant) — both are plausible-looking distractors, not synonyms.",
      },
      {
        question: "How would you say 'Go straight on until the roundabout' in French?",
        choices: ["Allez tout droit jusqu'au rond-point.", "Allez tout droit au rond-point.", "Allez tout droit jusqu'à le rond-point.", "Tournez tout droit jusqu'au rond-point."],
        accept: ["Allez tout droit jusqu'au rond-point."],
        answer: "Allez tout droit jusqu'au rond-point is correct — jusqu'à contracts with le to jusqu'au, and allez (not tournez, which means 'turn') is the right verb for going straight on.",
      },
      {
        question: "Give one adjective in French that could describe a town negatively.",
        accept: ["pollué", "polluée", "bruyant", "bruyante", "sale", "ennuyeux", "ennuyeuse"],
        answer: "Pollué(e), bruyant(e), sale and ennuyeux/ennuyeuse are all correct negative descriptions of a town — any one of these, correctly spelled, is a valid answer.",
      },
      {
        question: "Write a short set of directions in French from a train station to a nearby park, using at least three different prepositions or direction phrases.",
        answer:
          "There's no single right answer here — mark this one yourself. Check for the vous imperative form throughout, correct contractions after de-based prepositions (du/des), and at least three genuinely different direction expressions (e.g. tournez, continuez, traversez, en face de).",
      },
      {
        question: "Explain in English why weather in French mostly uses faire rather than être, and give one exception.",
        answer:
          "Mark it yourself against this: French treats most weather conditions as something the day/sky 'does' (il fait beau, literally 'it makes nice') rather than a state of being, which is why faire is the default verb rather than être. A correct exception is il pleut or il neige, which are impersonal verbs of their own with no faire or être involved at all.",
      },
      {
        question: "Translate into English: 'Continuez tout droit, puis prenez la deuxième rue à droite. La bibliothèque est en face de la banque.'",
        accept: ["continue straight on, then take the second street on the right. the library is opposite the bank."],
        answer: "Continue straight on, then take the second street on the right. The library is opposite the bank. — puis links the two direction steps, and en face de introduces the final location.",
      },
    ],
    misconceptions: [
      {
        wrong: "Il fait beau follows the être pattern, since weather is a 'state' like other être descriptions.",
        right: "Most French weather phrases use faire, not être — il fait beau, il fait froid — while il pleut and il neige are separate impersonal verbs with neither faire nor être.",
      },
      {
        wrong: "En face de, à côté de and près de don't change before le/les.",
        right: "The de in each of these contracts exactly like any other de + definite article: en face du parc, à côté des magasins — dropping the contraction is a grammar error, not a style choice.",
      },
      {
        wrong: "Il y a changes form to agree with a plural noun, similar to English 'there are'.",
        right: "Il y a is completely invariable in French regardless of what follows: il y a un cinéma and il y a des magasins both use the identical phrase il y a.",
      },
      {
        wrong: "Devant and derrière need de before the following noun, like en face de.",
        right: "Devant (in front of) and derrière (behind) are used directly with no de: devant la gare, derrière l'église — they behave differently from the en face de / à côté de family.",
      },
    ],
  },
  "french/holidays-and-travel": {
    summary:
      "Holidays and travel is where the passé composé really earns its keep, because past holidays are one of the most frequently examined GCSE writing and speaking tasks. This topic covers transport vocabulary, booking and asking questions at a hotel or station, the passé composé in full (regular and irregular past participles, avoir vs être auxiliary), and countries/nationalities with the correct prepositions — en, au, aux.",
    keyFacts: [
      {
        heading: "Transport vocabulary",
        points: [
          "En + method of transport for most vehicles: en voiture (by car), en train, en avion (by plane), en bus, en bateau (by boat).",
          "À pied (on foot) and à vélo (by bike) use à instead of en, because you're 'on' rather than 'inside' them.",
          "Key nouns: un billet (a ticket), un aller simple (a one-way ticket), un aller-retour (a return ticket), le quai (the platform), la douane (customs).",
          "Prendre le train/l'avion (to take the train/plane) uses the irregular verb prendre, not a literal 'to go by'.",
        ],
      },
      {
        heading: "Booking and asking questions at a hotel or station",
        points: [
          "Je voudrais réserver une chambre (I would like to book a room) — voudrais is the conditional of vouloir, used for polite requests.",
          "Avez-vous une chambre de libre? (Do you have a free room?), Le petit-déjeuner est-il compris? (Is breakfast included?).",
          "À quelle heure part le train pour Paris? (What time does the train for Paris leave?) uses inverted word order, typical of formal written questions.",
          "C'est combien? / Combien ça coûte? (How much is it?) are the standard ways to ask price at a station or hotel desk.",
        ],
      },
      {
        heading: "The passé composé: forming it",
        points: [
          "Most verbs use avoir + past participle: j'ai visité, tu as mangé, il a fini, nous avons vendu.",
          "Regular past participles: -er verbs → -é (visité), -ir verbs → -i (fini), -re verbs → -u (vendu).",
          "A small set of movement/state verbs use être instead of avoir, often remembered by the acronym 'DR & MRS VANDERTRAMP': aller, venir, arriver, partir, entrer, sortir, monter, descendre, naître, mourir, retourner, tomber, rester, and their compounds.",
          "With être verbs, the past participle AGREES with the subject like an adjective: elle est allée (she went — extra -e for feminine), ils sont partis (they left — extra -s for plural).",
        ],
      },
      {
        heading: "Irregular past participles",
        points: [
          "Avoir → eu (j'ai eu, I had), être → été (j'ai été, I was/have been), faire → fait (j'ai fait, I did/made).",
          "Voir → vu (j'ai vu, I saw), prendre → pris (j'ai pris, I took), boire → bu (j'ai bu, I drank).",
          "These have to be learned individually since they don't follow the regular -é/-i/-u rule at all — été in particular looks nothing like its infinitive être.",
          "Once learned, these irregular participles are reused constantly across every topic that needs a past tense, not just holidays.",
        ],
      },
      {
        heading: "Countries and nationalities with prepositions",
        points: [
          "En is used before feminine countries and countries starting with a vowel: en France, en Espagne, en Italie.",
          "Au is used before masculine countries: au Portugal, au Canada, au Japon.",
          "Aux is used before plural countries: aux États-Unis, aux Pays-Bas.",
          "Nationality adjectives agree with the person described and are NOT capitalised as adjectives (je suis français), but ARE capitalised as nouns for the person (un Français, a Frenchman).",
        ],
      },
    ],
    flashcards: [
      { term: "un aller-retour", definition: "A return ticket — literally 'a going-returning'; un aller simple is a one-way ticket." },
      { term: "je voudrais réserver...", definition: "I would like to book... — voudrais is the polite conditional form of vouloir, used for requests." },
      { term: "j'ai visité", definition: "I visited — passé composé of the regular -er verb visiter: avoir + past participle visité." },
      { term: "je suis allé(e)", definition: "I went — passé composé of aller, one of the être verbs; allé(e) agrees with the subject's gender." },
      { term: "j'ai eu", definition: "I had — irregular past participle of avoir (eu), which looks nothing like the infinitive." },
      { term: "j'ai été", definition: "I was / I have been — irregular past participle of être (été); easily confused with j'ai eu." },
      { term: "j'ai fait", definition: "I did / I made — irregular past participle of faire (fait); very frequent in past-tense holiday descriptions." },
      { term: "en France / au Portugal / aux États-Unis", definition: "To/in France / Portugal / the United States — en for feminine countries, au for masculine, aux for plural." },
      { term: "un billet", definition: "A ticket — masculine noun; un billet aller simple specifies a one-way ticket." },
      { term: "la douane", definition: "Customs — feminine noun, used at airports/borders; passer la douane means to go through customs." },
      { term: "DR & MRS VANDERTRAMP", definition: "The memory acronym for the ~14 verbs (and their compounds) that take être rather than avoir in the passé composé." },
      { term: "le quai", definition: "The platform — masculine noun, used at a train station; not to be confused with la queue (the queue)." },
    ],
    examTips: [
      {
        tip: "Sort every verb into 'avoir' or 'être' before writing a passé composé sentence.",
        detail: "Most verbs take avoir by default. Only the DR & MRS VANDERTRAMP verbs (and compounds like revenir, rentrer) take être — checking this before writing avoids the single most common passé composé error.",
      },
      {
        tip: "Make the past participle agree with the subject only for être verbs, never for avoir verbs (with one later exception).",
        detail: "Elle est allée needs the extra -e; il a mangé does not change at all for gender, because manger takes avoir. Confusing these two rules is extremely common and costs accuracy marks.",
      },
      {
        tip: "Learn j'ai eu and j'ai été as a pair, since they're easily confused.",
        detail: "J'ai eu (I had) and j'ai été (I was/have been) look and sound similar but come from completely different verbs (avoir and être) — practise them together specifically because they get muddled.",
      },
      {
        tip: "Match the country preposition to its gender, not the article you'd expect from English.",
        detail: "En France, au Canada, aux États-Unis — get the gender of the country noun right first (la France, le Canada, les États-Unis), and the preposition follows directly from that.",
      },
      {
        tip: "Use je voudrais rather than je veux for any polite request at a hotel or station.",
        detail: "Je voudrais une chambre is the polite, natural-sounding request; je veux une chambre is grammatically fine but comes across as blunt or demanding in a service context.",
      },
      {
        tip: "Don't capitalise nationality adjectives, but do capitalise the noun for a person of that nationality.",
        detail: "Je suis français (adjective, lower-case) but un Français (noun meaning 'a Frenchman', capitalised) — this distinction is specific to French and doesn't exist in English at all.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'L'année dernière, je suis allé en France en avion.'",
        accept: ["last year, i went to france by plane"],
        answer: "Last year, I went to France by plane — aller takes être in the passé composé, and en avion expresses the method of transport.",
      },
      {
        question: "Translate into French: 'I visited Paris and I ate a croissant.'",
        accept: ["j'ai visité paris et j'ai mangé un croissant"],
        answer: "J'ai visité Paris et j'ai mangé un croissant — both visiter and manger are regular -er verbs taking avoir, with the standard -é past participle.",
      },
      {
        question: "Complete with the correct auxiliary: 'Elle ____ arrivée à huit heures.'",
        accept: ["est"],
        answer: "Est — arriver is one of the être verbs, so the auxiliary is a form of être, and the participle arrivée agrees with the feminine subject elle.",
      },
      {
        question: "Complete with the correct past participle: 'J'____ (avoir) très peur pendant le vol.'",
        accept: ["ai eu"],
        answer: "Ai eu — the irregular past participle of avoir is eu, giving j'ai eu peur (I was scared, literally 'I had fear').",
      },
      {
        question: "Complete with the correct past participle: 'Nous ____ (faire) une randonnée en montagne.'",
        accept: ["avons fait"],
        answer: "Avons fait — faire takes avoir as its auxiliary, and its irregular past participle is fait.",
      },
      {
        question: "Complete with the correct preposition: 'Je suis allé ____ Portugal.' (to Portugal — masculine country)",
        accept: ["au"],
        answer: "Au — le Portugal is masculine, so 'to/in Portugal' uses au, contracted from à + le.",
      },
      {
        question: "Complete with the correct preposition: 'Je suis allé ____ États-Unis.' (to the United States — plural country)",
        accept: ["aux"],
        answer: "Aux — les États-Unis is a plural country name, so 'to/in the United States' uses aux, contracted from à + les.",
      },
      {
        question: "Translate into French: 'They (masculine) went to the station by bus, and then they took the train.'",
        accept: ["ils sont allés à la gare en bus, et puis ils ont pris le train", "ils sont allés à la gare en bus et puis ils ont pris le train"],
        answer: "Ils sont allés à la gare en bus, et puis ils ont pris le train — aller takes être with agreement (allés, plural), while prendre takes avoir with its irregular participle pris.",
      },
      {
        question: "Which auxiliary verb does 'partir' take in the passé composé?",
        choices: ["être", "avoir", "either, depending on meaning", "aller"],
        accept: ["être"],
        answer: "Partir takes être, as one of the DR & MRS VANDERTRAMP verbs of movement. Its past participle must also agree with the subject: elle est partie.",
      },
      {
        question: "Which sentence correctly shows past-participle agreement?",
        choices: ["Elle est allée en Espagne.", "Elle est allé en Espagne.", "Elle a allée en Espagne.", "Elle est aller en Espagne."],
        accept: ["Elle est allée en Espagne."],
        answer: "Elle est allée en Espagne is correct — aller takes être, and its participle allée agrees with the feminine subject elle by adding -e.",
      },
      {
        question: "In the sentence 'J'ai visité le musée hier', what part of speech is 'visité'?",
        choices: ["A past participle", "An infinitive", "A noun", "An adjective"],
        accept: ["A past participle"],
        answer: "Visité is the past participle of visiter, combined with ai (from avoir) to form the passé composé — it functions here as part of the verb, not as a standalone adjective.",
      },
      {
        question: "Which preposition is used before feminine country names like 'France'?",
        choices: ["en", "au", "aux", "à"],
        accept: ["en"],
        answer: "En is used before feminine country names and countries starting with a vowel: en France, en Espagne, en Italie.",
      },
      {
        question: "Give one verb, other than aller, that takes être in the passé composé.",
        accept: ["venir", "arriver", "partir", "entrer", "sortir", "monter", "descendre", "naître", "mourir", "retourner", "tomber", "rester"],
        answer: "Any of the DR & MRS VANDERTRAMP verbs works — venir, arriver, partir, entrer, sortir, monter, descendre, naître, mourir, retourner, tomber and rester are all correct examples besides aller.",
      },
      {
        question: "Which is the correct irregular past participle of 'prendre'?",
        choices: ["pris", "prendu", "pri", "prend"],
        accept: ["pris"],
        answer: "Pris is the irregular past participle of prendre. Prendu, pri and prend all follow patterns the verb doesn't actually use.",
      },
      {
        question: "Write a paragraph in French describing a past holiday: where you went, how you travelled, and one thing you did. Use at least one avoir verb and one être verb in the passé composé.",
        answer:
          "There's no single right answer here — mark this one yourself. Check for correct auxiliary choice (avoir vs être) for each verb used, correct agreement on any être verb's past participle, and a country preposition (en/au/aux) that matches the country's gender.",
      },
      {
        question: "Explain in English why the passé composé needs TWO different auxiliary verbs (avoir and être), and how a learner can remember which verbs take être.",
        answer:
          "Mark it yourself against this: most French verbs take avoir as their passé composé auxiliary, but a specific, limited set of mostly movement and state verbs — such as aller, venir, arriver, partir, and a few others — take être instead, and their past participles must then agree with the subject like an adjective. A strong answer mentions a memory device such as the acronym DR & MRS VANDERTRAMP as a way to remember the être verbs specifically because they're the exception to the general rule.",
      },
      {
        question: "Translate into English: 'Nous avons pris le train, puis nous sommes arrivés à l'hôtel vers midi.'",
        accept: ["we took the train, then we arrived at the hotel around midday", "we took the train, then we arrived at the hotel around noon"],
        answer: "We took the train, then we arrived at the hotel around midday — prendre takes avoir (irregular participle pris), while arriver takes être with agreement (arrivés, plural).",
      },
    ],
    misconceptions: [
      {
        wrong: "Every verb in the passé composé takes avoir, since that's the most common pattern.",
        right: "A specific set of movement and state verbs — aller, venir, arriver, partir and others in the DR & MRS VANDERTRAMP group — take être instead, and this has to be learned as an exception list, not guessed.",
      },
      {
        wrong: "Past participles always agree with the subject, the same as adjectives do.",
        right: "Agreement only applies to être verbs (elle est allée) — avoir verbs don't change their participle for gender or number in the basic passé composé (il a mangé, elle a mangé are identical).",
      },
      {
        wrong: "J'ai eu and j'ai été mean roughly the same thing since they sound similar.",
        right: "J'ai eu (I had) comes from avoir and j'ai été (I was/have been) comes from être — they're different verbs with different meanings that happen to look alike, and mixing them up changes the sentence's meaning.",
      },
      {
        wrong: "The preposition before a country name in French can be guessed from the English word 'to/in'.",
        right: "The correct preposition (en/au/aux) depends entirely on the French country noun's own gender and number — le Portugal (masculine) takes au, la France (feminine) takes en, les États-Unis (plural) takes aux.",
      },
    ],
  },
  "french/eating-out-and-food-culture": {
    summary:
      "Food and eating out combine everyday practical French — ordering at a café or restaurant — with a genuinely tricky grammar point: the partitive article (du/de la/des), which has no direct English equivalent. This topic covers food and drink vocabulary, ordering phrases, opinions on food, the partitive article, and the imperative for polite requests like je voudrais and l'addition, s'il vous plaît.",
    keyFacts: [
      {
        heading: "Food and drink vocabulary",
        points: [
          "Meals: le petit-déjeuner (breakfast), le déjeuner (lunch), le dîner (dinner), un repas (a meal).",
          "Common foods: le pain (bread), le fromage (cheese), la viande (meat), le poisson (fish), les légumes (vegetables), les fruits (fruit).",
          "Drinks: l'eau (water), le jus d'orange (orange juice), le café, le thé; une boisson is the general word for 'a drink'.",
          "Un plat means 'a dish/course'; le plat principal is the main course, une entrée is a starter (a false friend — it does NOT mean 'entrance').",
        ],
      },
      {
        heading: "Ordering in a restaurant or café",
        points: [
          "Je voudrais + noun or infinitive is the standard polite ordering phrase: Je voudrais un café, s'il vous plaît.",
          "Je vais prendre... (I'll have...) is another common, natural way to order: Je vais prendre le poulet.",
          "Vous avez choisi? (Have you chosen/decided?) is what a waiter typically asks; Qu'est-ce que vous recommandez? (What do you recommend?) is a useful question back.",
          "Pour moi (for me) is used to specify whose order is whose at a table: Pour moi, une salade, s'il vous plaît.",
        ],
      },
      {
        heading: "Opinions on food",
        points: [
          "C'est délicieux (it's delicious), c'est dégoûtant (it's disgusting), c'est trop épicé (it's too spicy), c'est fade (it's bland).",
          "J'adore/j'aime/je n'aime pas/je déteste + definite article + food noun: J'adore le chocolat, but Je n'aime pas les épinards.",
          "Être végétarien/végétarienne or être végétalien/végétalienne (to be vegetarian/vegan) are useful for dietary description.",
          "Allergique à means 'allergic to': Je suis allergique aux noix (I'm allergic to nuts) — à contracts with les to aux.",
        ],
      },
      {
        heading: "The partitive article: du, de la, des, de l'",
        points: [
          "The partitive article means 'some' and is used for an unspecified amount of something, particularly food and drink: je voudrais du pain (I'd like some bread).",
          "Du before masculine singular nouns, de la before feminine singular nouns, de l' before any singular noun starting with a vowel sound, des before all plurals.",
          "Unlike English, the partitive CANNOT be dropped in French — 'I eat cheese' in the general sense is still je mange du fromage, not je mange fromage.",
          "After a negative, the partitive collapses to plain de/d': je ne mange pas de viande (I don't eat meat), not je ne mange pas de la viande.",
        ],
      },
      {
        heading: "The imperative for polite requests",
        points: [
          "The vous imperative drops the subject pronoun and uses the vous form of the verb: Passez-moi le sel, s'il vous plaît (Pass me the salt, please).",
          "L'addition, s'il vous plaît (The bill, please) is the standard fixed phrase to end a restaurant meal.",
          "Je voudrais is technically the conditional of vouloir, not a true imperative, but functions as the standard polite request form — softer than a direct command.",
          "S'il vous plaît (formal) and s'il te plaît (informal) both mean 'please' — choosing the right one depends on who you're speaking to, just like tu/vous elsewhere.",
        ],
      },
    ],
    flashcards: [
      { term: "une entrée", definition: "A starter (first course) — a false friend: it does NOT mean 'entrance', which is une entrée in a building sense is different context, but at a restaurant it always means starter." },
      { term: "le plat principal", definition: "The main course — plat means dish/course, principal means main." },
      { term: "je voudrais", definition: "I would like — the conditional of vouloir, used as the standard polite way to order or request something." },
      { term: "l'addition, s'il vous plaît", definition: "The bill, please — the fixed phrase used to ask for the bill at the end of a meal in a restaurant." },
      { term: "du, de la, des, de l'", definition: "Some — the partitive article, required in French even where English would say nothing at all: je mange du pain (I eat [some] bread)." },
      { term: "c'est dégoûtant", definition: "It's disgusting — a strong negative food opinion; c'est fade (bland) is a milder complaint." },
      { term: "allergique à", definition: "Allergic to — contracts with les to aux: je suis allergique aux noix (I'm allergic to nuts)." },
      { term: "végétarien(ne) / végétalien(ne)", definition: "Vegetarian / vegan — regular -ien/-ienne adjective agreement pattern, doubling the n before adding -e." },
      { term: "qu'est-ce que vous recommandez?", definition: "What do you recommend? — a useful question to ask a waiter, using the vous form for formality." },
      { term: "les légumes (m)", definition: "Vegetables — masculine plural despite légume sounding like it could be feminine; un légume is one vegetable." },
      { term: "pour moi", definition: "For me — used at a table to specify whose order is whose: Pour moi, un steak-frites." },
      { term: "sucré / salé", definition: "Sweet / savoury — a common food-description pair; salé also just means 'salty' depending on context." },
    ],
    examTips: [
      {
        tip: "Never drop the partitive article the way English would.",
        detail: "Je mange du fromage is required; je mange fromage is ungrammatical French, even though the equivalent English 'I eat cheese' has no article at all. This is one of the clearest structural differences between the two languages.",
      },
      {
        tip: "Collapse the partitive to de/d' after a negative, every time.",
        detail: "Je ne mange pas de viande — not de la viande — follows the same rule as du/des collapsing to de after a negative that applies elsewhere in French grammar (like faire du sport → ne pas faire de sport).",
      },
      {
        tip: "Don't confuse une entrée with 'an entrance' at a restaurant.",
        detail: "In a restaurant context, une entrée always means a starter/first course. Assuming it means 'entrance' because of its resemblance to the English word is a classic false-friend trap.",
      },
      {
        tip: "Use je voudrais rather than je veux when ordering.",
        detail: "Je voudrais un café is the natural, polite way to order; je veux un café is grammatically correct but sounds blunt, similar to saying 'I want a coffee' instead of 'I'd like a coffee' in English.",
      },
      {
        tip: "Learn l'addition, s'il vous plaît as one fixed phrase.",
        detail: "This exact phrase is what a GCSE role-play or listening exam expects for 'the bill, please' — a paraphrase like je voudrais payer maintenant works but is less natural and less exam-standard.",
      },
      {
        tip: "Choose s'il vous plaît or s'il te plaît based on formality, just like vous/tu elsewhere.",
        detail: "A waiter you don't know gets s'il vous plaît; a friend at a family meal could get s'il te plaît — the same formality logic that governs vous/tu applies here too.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'Je voudrais du pain et de l'eau, s'il vous plaît.'",
        accept: ["i would like some bread and some water, please", "i'd like some bread and some water, please"],
        answer: "I would like some bread and some water, please — du and de l' are both partitive articles meaning 'some', matching pain (masculine) and eau (starts with a vowel).",
      },
      {
        question: "Translate into French: 'I don't eat meat.'",
        accept: ["je ne mange pas de viande", "je ne mange pas de la viande"],
        answer: "Je ne mange pas de viande — after a negative, the partitive collapses to plain de, not de la.",
      },
      {
        question: "Complete with the correct partitive article: 'Je voudrais ____ fromage.' (some — masculine noun)",
        accept: ["du"],
        answer: "Du — fromage is masculine singular, so the partitive article is du.",
      },
      {
        question: "Complete with the correct partitive article: 'Elle mange ____ salade tous les jours.' (some — feminine noun)",
        accept: ["de la"],
        answer: "De la — salade is feminine singular, so the partitive article is de la.",
      },
      {
        question: "Complete with the correct partitive article: 'Nous mangeons ____ légumes.' (some — plural noun)",
        accept: ["des"],
        answer: "Des — légumes is plural, so the partitive article is des, regardless of the noun's underlying gender.",
      },
      {
        question: "Translate into French: 'The bill, please.'",
        accept: ["l'addition, s'il vous plaît", "l'addition s'il vous plaît"],
        answer: "L'addition, s'il vous plaît — the standard, fixed phrase for asking for the bill at the end of a meal.",
      },
      {
        question: "Translate into French: 'I'm allergic to nuts, so I don't eat cakes with nuts.'",
        accept: ["je suis allergique aux noix, donc je ne mange pas de gâteaux avec des noix", "je suis allergique aux noix donc je ne mange pas de gâteaux avec des noix"],
        answer: "Je suis allergique aux noix, donc je ne mange pas de gâteaux avec des noix — allergique à contracts to aux before the plural noix, and the negative collapses des gâteaux to de gâteaux.",
      },
      {
        question: "Which word correctly means 'a starter' in a restaurant context?",
        choices: ["une entrée", "une sortie", "un plat", "une addition"],
        accept: ["une entrée"],
        answer: "Une entrée means a starter in a restaurant, despite looking like it should mean 'entrance'. Une sortie means an exit, un plat is a dish/course generally, and une addition is the bill.",
      },
      {
        question: "Which sentence correctly uses the partitive article?",
        choices: ["Je mange du pain.", "Je mange pain.", "Je mange le pain toujours.", "Je mange un pain général."],
        accept: ["Je mange du pain."],
        answer: "Je mange du pain is correct — the partitive article is required in French even for a general statement about eating bread, unlike English, which drops the article entirely.",
      },
      {
        question: "In the sentence 'C'est très épicé', what part of speech is 'épicé'?",
        choices: ["An adjective", "A noun", "A verb", "An adverb"],
        accept: ["An adjective"],
        answer: "Épicé ('spicy') describes the food being discussed, functioning as an adjective after c'est. Très is the adverb intensifying it.",
      },
      {
        question: "Which phrase would a waiter most likely use to ask if you're ready to order?",
        choices: ["Vous avez choisi?", "Vous avez fini?", "Vous avez faim?", "Vous avez soif?"],
        accept: ["Vous avez choisi?"],
        answer: "Vous avez choisi? ('Have you chosen?') is what a waiter typically asks to check if you're ready to order. The others ask if you've finished, if you're hungry, and if you're thirsty.",
      },
      {
        question: "Which word correctly means 'vegetarian' when describing a female speaker?",
        choices: ["végétarienne", "végétarien", "végétale", "légumière"],
        accept: ["végétarienne"],
        answer: "Végétarienne is the feminine form of végétarien, doubling the n before adding -e. Végétale and légumière aren't the correct words for describing a vegetarian person.",
      },
      {
        question: "Give one common food opinion phrase in French meaning 'it's delicious'.",
        accept: ["c'est délicieux", "cest delicieux"],
        answer: "C'est délicieux is the standard phrase for 'it's delicious' — a strong positive food opinion, contrasting with c'est dégoûtant (disgusting) or c'est fade (bland).",
      },
      {
        question: "Write a short restaurant role-play in French: order a starter, a main course and a drink, and ask for the bill at the end. Use je voudrais at least twice.",
        answer:
          "There's no single right answer here — mark this one yourself. Check for correct partitive or definite articles with each food item, je voudrais used politely, and l'addition, s'il vous plaît used correctly to close the role-play.",
      },
      {
        question: "Explain in English what the partitive article (du/de la/des) does in French, and why it can't simply be translated word for word into English.",
        answer:
          "Mark it yourself against this: the partitive article expresses an unspecified amount of something — 'some' — and French requires it even in general statements where English drops the article entirely, such as je mange du fromage for 'I eat cheese'. A strong answer notes that dropping it in French, unlike in English, produces an ungrammatical sentence, which is why it can't be treated as an optional word.",
      },
      {
        question: "Translate into English: 'Je suis végétarien, donc je ne mange jamais de viande, mais j'adore les légumes.'",
        accept: ["i am vegetarian, so i never eat meat, but i love vegetables", "i'm vegetarian, so i never eat meat, but i love vegetables"],
        answer: "I am vegetarian, so I never eat meat, but I love vegetables — ne...jamais collapses de viande to plain de, and j'adore is followed by the definite article les for a general statement of preference.",
      },
    ],
    misconceptions: [
      {
        wrong: "The partitive article can be dropped in French for general statements, the same as in English.",
        right: "French requires du/de la/des/de l' even in general statements — je mange du fromage, not je mange fromage — dropping it produces ungrammatical French even though the English equivalent has no article at all.",
      },
      {
        wrong: "Une entrée means 'an entrance', matching its English-looking spelling.",
        right: "In a restaurant context, une entrée means a starter/first course — a classic false-friend trap based on surface similarity to the English word.",
      },
      {
        wrong: "Du, de la and des stay the same after a negative sentence.",
        right: "After ne...pas or ne...jamais, all forms of the partitive collapse to plain de/d': je ne mange pas de viande, not de la viande.",
      },
      {
        wrong: "Je veux and je voudrais are interchangeable in a restaurant, since both mean 'I want'.",
        right: "Je voudrais is the polite, natural form for ordering (closer to 'I would like'), while je veux is blunter and closer to a direct demand — native speakers default to je voudrais in service situations.",
      },
    ],
  },
  "french/grammar-toolkit-2": {
    summary:
      "The second dedicated grammar topic, covering everything needed to talk about the past and the future at GCSE level: the passé composé in full, the imperfect tense's basic formation and use for description, and the contrast between the near future (aller + infinitive) and the true simple future. Together these three tenses are what let a GCSE answer move beyond the present tense, which is where the higher mark bands live.",
    keyFacts: [
      {
        heading: "The passé composé in full",
        points: [
          "Formed with avoir or être (present tense) + a past participle: j'ai mangé, je suis allé(e).",
          "Avoir is the default auxiliary; être is used only for the DR & MRS VANDERTRAMP verbs (aller, venir, arriver, partir, entrer, sortir, monter, descendre, naître, mourir, retourner, tomber, rester) and their compounds, plus all reflexive verbs.",
          "Reflexive verbs always take être in the passé composé: je me suis levé(e), elle s'est douchée — the reflexive pronoun stays in place before être.",
          "Key irregular past participles: eu (avoir), été (être), fait (faire), dit (dire), pris (prendre), vu (voir), bu (boire).",
        ],
      },
      {
        heading: "Past participle agreement",
        points: [
          "With être verbs (non-reflexive), the participle agrees with the SUBJECT: il est allé, elle est allée, ils sont allés, elles sont allées.",
          "With avoir verbs, the participle normally does NOT agree with the subject: il a mangé, elle a mangé — no change at all.",
          "With reflexive verbs, the participle usually agrees with the reflexive pronoun (which usually equals the subject): elle s'est levée, ils se sont levés.",
          "The one advanced exception: an avoir verb's participle DOES agree with a preceding direct object — la pomme que j'ai mangée (the apple that I ate) — because que refers back to la pomme, placed before the verb.",
        ],
      },
      {
        heading: "The imperfect tense: formation and use",
        points: [
          "Formed from the nous form of the present tense, minus -ons, plus imperfect endings: -ais, -ais, -ait, -ions, -iez, -aient. Nous avons → av- → j'avais, tu avais, il avait, nous avions, vous aviez, ils avaient.",
          "Être has an irregular stem (ét-) but takes the same regular endings: j'étais, tu étais, il était, nous étions, vous étiez, ils étaient.",
          "The imperfect is used for DESCRIPTION in the past, ongoing/repeated actions, and setting a scene: Il faisait beau et j'étais content (It was nice weather and I was happy).",
          "Contrast with the passé composé, which is used for a single completed action: J'étais à la plage (imperfect: I was at the beach, setting the scene) quand il a commencé à pleuvoir (passé composé: it started to rain, a single event).",
        ],
      },
      {
        heading: "Near future vs simple future",
        points: [
          "Near future: aller (present) + infinitive — je vais manger (I'm going to eat) — used for plans that feel close or certain, and much more common in everyday spoken French.",
          "Simple future: infinitive stem (usually the whole infinitive for -er/-ir verbs, minus final -e for -re verbs) + endings -ai, -as, -a, -ons, -ez, -ont — je mangerai (I will eat).",
          "Several verbs have irregular future stems that must be learned: être → ser- (je serai), avoir → aur- (j'aurai), aller → ir- (j'irai), faire → fer- (je ferai).",
          "At GCSE level, the near future is safer and more natural for most spoken answers; the simple future is expected in higher-level written pieces and shows a wider range of tense control.",
        ],
      },
    ],
    flashcards: [
      { term: "je me suis levé(e)", definition: "I got up — reflexive verbs always take être in the passé composé; the participle agrees with the subject (extra -e for a female speaker)." },
      { term: "j'avais / j'étais", definition: "I had / I was — imperfect tense forms, used for ongoing states or description in the past, not single completed actions." },
      { term: "je vais manger", definition: "I'm going to eat — the near future: aller (present) + infinitive, the everyday way to talk about future plans." },
      { term: "je mangerai", definition: "I will eat — the simple future: regular -er/-ir verbs use the whole infinitive as the stem, plus -ai, -as, -a, -ons, -ez, -ont." },
      { term: "je serai", definition: "I will be — irregular future stem of être (ser-); one of the most common irregular future stems to memorise." },
      { term: "j'irai", definition: "I will go — irregular future stem of aller (ir-); easy to confuse with j'ai (I have) if read too quickly." },
      { term: "j'aurai", definition: "I will have — irregular future stem of avoir (aur-)." },
      { term: "je ferai", definition: "I will do / make — irregular future stem of faire (fer-)." },
      { term: "il faisait beau", definition: "It was nice weather — imperfect tense used to describe an ongoing weather condition, setting a scene in the past." },
      { term: "quand", definition: "When — often used to link an imperfect 'background' clause with a passé composé 'interrupting event' clause." },
      { term: "dit / pris / vu / bu", definition: "Said / took / seen / drunk — irregular past participles of dire, prendre, voir, boire, all commonly needed in past-tense narrative." },
      { term: "l'accord du participe passé", definition: "Past participle agreement — the rule that a participle changes to match its subject (être verbs) or a preceding direct object (avoir verbs, advanced level)." },
    ],
    examTips: [
      {
        tip: "Decide avoir vs être BEFORE conjugating a passé composé verb, every single time.",
        detail: "Reflexive verbs and the DR & MRS VANDERTRAMP list take être; everything else takes avoir by default. Getting this decision automatic removes the most common source of passé composé errors.",
      },
      {
        tip: "Use the imperfect for description and the passé composé for events — and know the difference is grammatical, not just stylistic.",
        detail: "Il faisait beau (it was nice — ongoing, descriptive) vs il a plu (it rained — a single event) is a genuine grammar choice examiners test directly, not a matter of personal preference.",
      },
      {
        tip: "Build the imperfect stem from the NOUS form of the present tense, not the infinitive.",
        detail: "For faire: nous faisons → stem fais- → je faisais, not a stem based on faire itself. This nous-based method works for every verb except être, which has the irregular stem ét-.",
      },
      {
        tip: "Learn the four highest-frequency irregular future stems as a set: être-ser, avoir-aur, aller-ir, faire-fer.",
        detail: "These four verbs appear constantly in GCSE future-tense writing about plans and ambitions, so memorising their irregular stems together is more efficient than meeting each one separately.",
      },
      {
        tip: "Default to the near future (aller + infinitive) in speaking, and use the simple future to show range in writing.",
        detail: "The near future is what native speakers actually use most in conversation, so it's the safer choice under speaking-exam pressure; sprinkling in a correctly formed simple future verb in an extended writing piece shows grammatical range examiners look for.",
      },
      {
        tip: "Remember reflexive verbs take être even though they don't look like DR & MRS VANDERTRAMP verbs.",
        detail: "Se laver, se lever, s'habiller — none of these appear on the traditional être-verb list, but ALL reflexive verbs take être in the passé composé as their own separate rule.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'Il faisait beau quand nous sommes arrivés à la plage.'",
        accept: ["it was nice weather when we arrived at the beach", "the weather was nice when we arrived at the beach"],
        answer: "It was nice weather when we arrived at the beach — faisait (imperfect) sets the scene, while sommes arrivés (passé composé) marks the single completed event of arriving.",
      },
      {
        question: "Translate into French: 'I will go to France next year.'",
        accept: ["j'irai en france l'année prochaine", "je vais aller en france l'année prochaine"],
        answer: "J'irai en France l'année prochaine — the simple future of aller uses the irregular stem ir-, giving j'irai (I will go).",
      },
      {
        question: "Complete with the correct passé composé form: 'Elle ____ (se lever) tôt ce matin.'",
        accept: ["s'est levée"],
        answer: "S'est levée — reflexive verbs take être in the passé composé, and the participle agrees with the feminine subject elle, adding -e.",
      },
      {
        question: "Complete with the correct imperfect form: 'Quand j'étais petit, je ____ (jouer) tous les jours dans le jardin.'",
        accept: ["jouais"],
        answer: "Jouais — the je form of the imperfect, built from the nous stem jou- (from nous jouons) plus the imperfect ending -ais.",
      },
      {
        question: "Complete with the correct simple future form: 'Nous ____ (avoir) beaucoup de devoirs demain.'",
        accept: ["aurons"],
        answer: "Aurons — the irregular future stem of avoir is aur-, plus the nous ending -ons: nous aurons.",
      },
      {
        question: "Complete with the correct past participle: 'J'ai ____ (dire) la vérité.'",
        accept: ["dit"],
        answer: "Dit — the irregular past participle of dire (to say), used here in j'ai dit la vérité (I told the truth).",
      },
      {
        question: "Translate into French: 'When I was young, I used to live in Paris.'",
        accept: ["quand j'étais jeune, j'habitais à paris", "quand jetais jeune, jhabitais a paris"],
        answer: "Quand j'étais jeune, j'habitais à Paris — both verbs are in the imperfect, describing an ongoing state in the past ('used to') rather than a single completed action.",
      },
      {
        question: "Which auxiliary is used for ALL reflexive verbs in the passé composé?",
        choices: ["être", "avoir", "either, depending on the verb", "faire"],
        accept: ["être"],
        answer: "All reflexive verbs take être in the passé composé, regardless of whether the base verb would otherwise take avoir — this is a separate rule from the DR & MRS VANDERTRAMP list.",
      },
      {
        question: "Which sentence correctly uses the imperfect for a description?",
        choices: ["Il faisait très chaud ce jour-là.", "Il a fait très chaud ce jour-là.", "Il fera très chaud ce jour-là.", "Il fait très chaud ce jour-là, hier."],
        accept: ["Il faisait très chaud ce jour-là."],
        answer: "Il faisait très chaud ce jour-là is correct for describing an ongoing weather condition in the past. The passé composé version would suggest a sudden, completed weather event, which doesn't fit a description.",
      },
      {
        question: "In the sentence 'Nous avons mangé une pizza délicieuse', what part of speech is 'mangé'?",
        choices: ["A past participle", "An infinitive", "An adjective", "A noun"],
        accept: ["A past participle"],
        answer: "Mangé is the past participle of manger, combining with avons (from avoir) to form the passé composé — it is part of the verb phrase, not a standalone adjective.",
      },
      {
        question: "Which irregular future stem belongs to the verb 'être'?",
        choices: ["ser-", "êtr-", "fu-", "av-"],
        accept: ["ser-"],
        answer: "Ser- is the irregular future stem of être, giving je serai (I will be). Av- would be the (also irregular) stem for avoir instead.",
      },
      {
        question: "Which sentence correctly contrasts a background description with an interrupting event?",
        choices: ["Je regardais la télé quand le téléphone a sonné.", "Je regardais la télé quand le téléphone sonnait.", "J'ai regardé la télé quand le téléphone a sonné.", "Je regarde la télé quand le téléphone sonne."],
        accept: ["Je regardais la télé quand le téléphone a sonné."],
        answer: "Je regardais la télé quand le téléphone a sonné is correct — the imperfect (regardais) sets the ongoing background scene, and the passé composé (a sonné) marks the single interrupting event.",
      },
      {
        question: "Give one verb whose past participle is irregular (not ending in the regular -é, -i or -u pattern derived directly from its infinitive).",
        accept: ["être", "avoir", "faire", "dire", "prendre", "voir", "boire", "écrire", "mettre", "être/été", "avoir/eu", "faire/fait"],
        answer: "Être (été), avoir (eu), faire (fait), dire (dit), prendre (pris), voir (vu) and boire (bu) are all genuinely irregular — any correctly named example works.",
      },
      {
        question: "Translate into French: 'We were watching TV when it started to rain.'",
        accept: ["nous regardions la télé quand il a commencé à pleuvoir"],
        answer: "Nous regardions la télé quand il a commencé à pleuvoir — regardions (imperfect) sets the background scene, and a commencé (passé composé) marks the single interrupting event.",
      },
      {
        question: "Write a short paragraph in French describing a childhood holiday memory, using at least two imperfect verbs (for description) and two passé composé verbs (for events).",
        answer:
          "There's no single right answer here — mark this one yourself. Check that imperfect verbs are used for ongoing states/description (weather, feelings, routine) and passé composé verbs are used for single completed actions, with correct auxiliary choice and agreement throughout.",
      },
      {
        question: "Explain in English the difference in USE between the near future (aller + infinitive) and the simple future (je mangerai) in French, even though both can be translated as 'will' in English.",
        answer:
          "Mark it yourself against this: the near future is used for plans that feel close, certain or already decided, and is far more common in everyday spoken French, while the simple future is a single-word conjugated form more typical of formal writing, predictions, or promises about a more distant or less certain future. A strong answer notes that GCSE speaking tasks usually favour the near future for safety, while written pieces benefit from including some simple future forms to show grammatical range.",
      },
    ],
    misconceptions: [
      {
        wrong: "The imperfect and the passé composé are interchangeable ways of talking about the past.",
        right: "They express different things: the imperfect describes ongoing states, repeated actions or scene-setting, while the passé composé marks single, completed events — swapping one for the other changes the meaning of a sentence.",
      },
      {
        wrong: "Reflexive verbs take avoir in the passé composé, like most other verbs.",
        right: "All reflexive verbs take être in the passé composé without exception, with the participle usually agreeing with the reflexive pronoun: elle s'est levée, ils se sont couchés.",
      },
      {
        wrong: "The imperfect stem is built from the infinitive, the same way regular present-tense verbs are.",
        right: "The imperfect stem comes from the NOUS form of the present tense (minus -ons), not the infinitive — for faire, that means the stem fais- (from nous faisons), not fair-.",
      },
      {
        wrong: "The simple future always uses the full infinitive as its stem, with no exceptions.",
        right: "Several very common verbs have irregular future stems that replace the infinitive entirely — être becomes ser-, avoir becomes aur-, aller becomes ir-, and faire becomes fer- — these must be memorised individually.",
      },
    ],
  },
  "french/school-and-education-system": {
    summary:
      "This topic looks at school from a more analytical Year 11 angle: understanding the French education system itself, comparing it with the UK system, and forming developed opinions on school rules and pressure. It covers key French system vocabulary (collège, lycée, le bac), how it maps onto UK stages, subjects and qualifications, and opinion language for discussing rules and academic pressure.",
    keyFacts: [
      {
        heading: "The French school system",
        points: [
          "L'école primaire (primary school, ages 6–11) is followed by le collège (ages 11–15, roughly equivalent to UK Key Stage 3–4) and then le lycée (ages 15–18, roughly equivalent to UK sixth form).",
          "Collège years are named counting DOWN: la sixième (year 7 equivalent), la cinquième, la quatrième, la troisième (year 10 equivalent) — the opposite direction from UK year numbering.",
          "Lycée years continue the countdown: la seconde, la première, la terminale (the final year, when students sit le bac).",
          "Le baccalauréat (le bac) is the school-leaving exam sat at the end of terminale, roughly comparable to A-levels but structured as a single broader set of exams rather than a small number of separate subject qualifications.",
        ],
      },
      {
        heading: "Comparing the French and UK systems",
        points: [
          "A key structural difference: French secondary school is split into two separate institutions (collège then lycée) with a change of school, whereas UK secondary school is usually one continuous institution from Year 7 to Year 11 or 13.",
          "The bac is broader than A-levels — French students typically study several subjects right up to terminale, rather than narrowing to three or four as in the UK sixth form.",
          "Par rapport à (compared to/in relation to) and contrairement à (unlike) are useful phrases for this kind of comparison: Par rapport au Royaume-Uni, le système français...",
          "Both systems assess through a mix of continuous coursework-style assessment and final exams, though the balance and the exam culture around le bac (seen as a major rite of passage in France) differ from UK exam culture.",
        ],
      },
      {
        heading: "Subjects and qualifications vocabulary",
        points: [
          "Une matière (a subject) and une filière (a stream/pathway, e.g. a science or literary specialism at lycée) are both important nouns for describing study choices.",
          "Un diplôme (a qualification/diploma), une note (a mark/grade — a false friend, it does not mean 'a note' you write), réussir un examen (to pass an exam), échouer à un examen (to fail an exam).",
          "Redoubler means 'to repeat a year' — a more established part of French school culture than in the UK, where a student who fails key exams may retake the whole year.",
          "S'inscrire à means 'to enrol in/register for', used for choosing subjects, a filière, or applying to a lycée or university.",
        ],
      },
      {
        heading: "Opinions on school rules and pressure",
        points: [
          "Le règlement (the rules/regulations) and l'uniforme scolaire (school uniform — much less common in French state schools than in the UK) are useful nouns for discussing rules.",
          "Strict(e) (strict), sévère (severe/strict), juste (fair), injuste (unfair) are common adjectives for evaluating rules.",
          "La pression (pressure) and le stress are both used to discuss academic pressure: Je ressens beaucoup de pression avant les examens (I feel a lot of pressure before exams).",
          "Il faudrait + infinitive (there should/one ought to) is a softened, opinion-appropriate way to suggest a change: Il faudrait moins de devoirs (There should be less homework).",
        ],
      },
    ],
    flashcards: [
      { term: "le collège", definition: "Secondary school for ages 11–15 (roughly UK Key Stage 3–4) — a false friend: it does NOT mean 'college' in the English post-16 sense." },
      { term: "le lycée", definition: "The school for ages 15–18, roughly equivalent to UK sixth form, but a separate institution from le collège." },
      { term: "le baccalauréat / le bac", definition: "The French school-leaving exam sat at the end of terminale, roughly comparable to A-levels but broader in scope." },
      { term: "la terminale", definition: "The final year of lycée (roughly UK Year 13), when students sit le bac; part of the descending year-naming system." },
      { term: "une note", definition: "A mark/grade — a false friend: it does NOT mean 'a note' (a short written message), which is un mot or un message." },
      { term: "redoubler", definition: "To repeat a year — a more established part of French school culture than in the UK; from double, reflecting doing the year again." },
      { term: "réussir / échouer à", definition: "To pass / to fail (an exam) — réussir un examen (pass), échouer à un examen (fail, note the à)." },
      { term: "une matière", definition: "A (school) subject — a false friend in other contexts, where matière can mean 'matter/material', but in school contexts it means subject." },
      { term: "une filière", definition: "A stream/pathway of study — used for the specialism chosen at lycée, e.g. a scientific or literary filière." },
      { term: "le règlement", definition: "The rules/regulations — used for school rules specifically: respecter le règlement (to follow the rules)." },
      { term: "la pression", definition: "Pressure — used for academic/exam pressure: ressentir de la pression (to feel pressure)." },
      { term: "il faudrait", definition: "There should be / one ought to — the conditional of falloir, a softened way to suggest a change without sounding like a direct command." },
    ],
    examTips: [
      {
        tip: "Don't translate 'le collège' as 'college'.",
        detail: "Le collège means secondary school for 11–15 year-olds in France, not a post-16 institution — using it to mean 'college' in the English sense is a classic false-friend error that confuses the whole system being described.",
      },
      {
        tip: "Remember French school years count DOWN, not up.",
        detail: "La sixième is the first year of collège and la troisième is the last; la terminale (not 'la première' or a number) is the very final year of lycée — this reversed numbering system trips up students who assume it mirrors UK Year 7-13 counting.",
      },
      {
        tip: "Use par rapport à or contrairement à to structure system comparisons, not just et/mais.",
        detail: "These connectives are specifically what raises a comparison answer above a basic list of differences, and 'comparing systems' tasks are common at Year 11 GCSE level.",
      },
      {
        tip: "Don't confuse une note (a grade/mark) with the English 'a note'.",
        detail: "J'ai eu une bonne note means 'I got a good grade', not 'I got a good note' — this is a specific vocabulary false friend worth flagging before it causes confusion in a written answer.",
      },
      {
        tip: "Use il faudrait rather than il faut for a softer, opinion-style suggestion about school rules.",
        detail: "Il faut moins de devoirs sounds like a flat statement of fact; il faudrait moins de devoirs reads as a considered opinion or suggestion, which fits better in an evaluative answer about school rules.",
      },
      {
        tip: "Support any opinion on rules or pressure with a specific reason, not a bare adjective.",
        detail: "Le règlement est trop strict parce qu'on ne peut pas utiliser son portable en classe scores better than le règlement est strict alone — GCSE writing mark schemes reward justified opinions.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'Je suis en troisième au collège.'",
        accept: ["i am in troisième at collège", "i'm in year 10 at secondary school", "i am in year 10 at secondary school"],
        answer: "I am in troisième at collège (roughly equivalent to Year 10) — troisième is the final year of collège, counting down from sixième.",
      },
      {
        question: "Translate into French: 'I will take the bac in terminale.'",
        accept: ["je vais passer le bac en terminale", "je passerai le bac en terminale"],
        answer: "Je vais passer le bac en terminale — passer un examen means to sit/take an exam (a false friend: it does not mean 'to pass' in this context, that's réussir).",
      },
      {
        question: "Complete with the correct verb: 'Elle a ____ son examen; elle est très contente.' (passed)",
        accept: ["réussi"],
        answer: "Réussi — réussir means to pass/succeed, and its past participle is réussi, used here in a passé composé sentence.",
      },
      {
        question: "Complete with the correct verb: 'Il a ____ à l'examen, donc il doit redoubler.' (failed)",
        accept: ["échoué"],
        answer: "Échoué — échouer à means to fail (an exam), and its past participle is échoué, used with avoir.",
      },
      {
        question: "Complete with the correct form: 'Il ____ moins de devoirs pour réduire le stress.' (there should be — conditional of falloir)",
        accept: ["faudrait"],
        answer: "Faudrait — the conditional form of falloir, giving il faudrait moins de devoirs (there should be less homework), a softer suggestion than il faut.",
      },
      {
        question: "Translate into French: 'The rules are too strict in my school.'",
        accept: ["le règlement est trop strict dans mon école", "le règlement est trop sévère dans mon école"],
        answer: "Le règlement est trop strict dans mon école — règlement is masculine, so strict stays in its masculine form.",
      },
      {
        question: "Translate into French: 'Compared to the UK, French students study more subjects until the end of lycée.'",
        accept: ["par rapport au royaume-uni, les élèves français étudient plus de matières jusqu'à la fin du lycée"],
        answer: "Par rapport au Royaume-Uni, les élèves français étudient plus de matières jusqu'à la fin du lycée — par rapport à introduces the comparison, contracting to au before Royaume-Uni (masculine).",
      },
      {
        question: "Which word correctly means 'secondary school for 11-15 year olds' in France?",
        choices: ["le collège", "le lycée", "l'université", "l'école primaire"],
        accept: ["le collège"],
        answer: "Le collège covers ages 11–15 in France. Le lycée is for 15–18 year-olds, l'université is higher education, and l'école primaire is for younger children.",
      },
      {
        question: "Which is the final year of lycée, when students sit le bac?",
        choices: ["la terminale", "la première", "la seconde", "la troisième"],
        accept: ["la terminale"],
        answer: "La terminale is the final year of lycée. La première and la seconde are the two years before it, and la troisième belongs to collège, not lycée.",
      },
      {
        question: "In the sentence 'Le règlement est trop strict', what part of speech is 'strict'?",
        choices: ["An adjective", "A noun", "A verb", "An adverb"],
        accept: ["An adjective"],
        answer: "Strict describes le règlement, making it an adjective. Trop is the adverb intensifying it, and est is the verb.",
      },
      {
        question: "What does 'redoubler' mean in a school context?",
        choices: ["To repeat a year", "To study twice as hard", "To take two subjects at once", "To double one's grades"],
        accept: ["To repeat a year"],
        answer: "Redoubler means to repeat a school year, a more established practice in the French system than in the UK for students who don't meet the required standard.",
      },
      {
        question: "Which sentence correctly uses a false friend accurately?",
        choices: ["J'ai eu une bonne note.", "J'ai eu un bon collège.", "J'ai réussi une note.", "J'ai échoué une bonne note."],
        accept: ["J'ai eu une bonne note."],
        answer: "J'ai eu une bonne note ('I got a good grade') correctly uses note to mean grade/mark, not a written note — the other options misuse collège or the verbs réussir/échouer incorrectly.",
      },
      {
        question: "Give one difference between the French and UK school systems.",
        accept: ["french secondary school is split into two institutions", "collège and lycée are separate schools", "the bac is broader than a-levels", "french years count down", "le bac covers more subjects than a-levels"],
        answer: "Any genuine structural difference counts — for example, French secondary education splits into two separate schools (collège then lycée), unlike the UK's typically continuous secondary school, or the bac being broader in subject range than A-levels.",
      },
      {
        question: "Which word correctly means 'to enrol in/register for' a subject or school?",
        choices: ["s'inscrire à", "s'échouer à", "se réussir à", "s'redoubler à"],
        accept: ["s'inscrire à"],
        answer: "S'inscrire à means to enrol in or register for something, used for choosing subjects, a filière, or applying to a lycée or university.",
      },
      {
        question: "Write a paragraph in French comparing school rules in France and the UK, giving your opinion on whether rules should be stricter or more relaxed, with a reason.",
        answer:
          "There's no single right answer here — mark this one yourself. Check for a genuine comparison connective (par rapport à, contrairement à), a clear opinion using an adjective like strict/juste/injuste, and a reason introduced by parce que or car.",
      },
      {
        question: "Explain in English why 'le collège' is a false friend for English speakers, and what it actually refers to in the French school system.",
        answer:
          "Mark it yourself against this: in English, 'college' usually refers to a post-16 institution, but in French, le collège refers to secondary school for 11 to 15 year olds — roughly the French equivalent of UK Key Stage 3 and 4 — while the French institution closer to UK sixth form is actually called le lycée. A strong answer flags this as a vocabulary trap based on surface similarity rather than actual meaning.",
      },
    ],
    misconceptions: [
      {
        wrong: "Le collège means the same as the English word 'college'.",
        right: "Le collège is secondary school for ages 11–15 in France; the nearest French equivalent to English post-16 'college' is le lycée, a completely separate institution.",
      },
      {
        wrong: "French school years are numbered the same way as UK years, counting up from 7 to 13.",
        right: "French collège and lycée years count DOWN — sixième, cinquième, quatrième, troisième, then seconde, première, terminale — the opposite direction from UK numbering.",
      },
      {
        wrong: "Une note in a school context means a written note, like in English.",
        right: "In a school context, une note means a mark or grade, not a short written message — a specific false-friend vocabulary trap.",
      },
      {
        wrong: "Passer un examen means to pass an exam, matching its English-sounding form.",
        right: "Passer un examen actually means to SIT/take an exam, not to pass it — 'to pass' is réussir un examen, and mixing the two up reverses the meaning of a sentence.",
      },
    ],
  },
  "french/post-16-choices-and-training": {
    summary:
      "Post-16 plans is one of the most personal GCSE speaking and writing topics, since it asks students to genuinely project themselves forward. This topic covers vocabulary for further study options and apprenticeships/vocational training, talking about future plans with aller + infinitive and the simple future, and expressing intentions with j'aimerais + infinitive and je voudrais + infinitive.",
    keyFacts: [
      {
        heading: "Further study options",
        points: [
          "Continuer mes études (to continue my studies) is the general phrase for staying in education after GCSE-equivalent level.",
          "L'université (university), une école supérieure (a higher-education institution, often specialised, e.g. business or engineering), un diplôme (a qualification/degree).",
          "Faire des études de + subject means 'to study [subject]': faire des études de médecine (to study medicine).",
          "Un stage means 'a work placement/internship' — a false friend, it does NOT mean 'a stage' in the theatrical or step sense.",
        ],
      },
      {
        heading: "Apprenticeships and vocational training",
        points: [
          "Un apprentissage (an apprenticeship) and faire un apprentissage (to do an apprenticeship) — a growing and respected pathway in France, not seen as a lesser option.",
          "La formation professionnelle (vocational training) covers practical, job-focused training routes distinct from the traditional academic route.",
          "Un CAP (Certificat d'Aptitude Professionnelle) is a vocational qualification roughly comparable to some UK vocational/BTEC-style qualifications.",
          "Un contrat d'apprentissage (an apprenticeship contract) combines paid work with training, similar in spirit to a UK apprenticeship.",
        ],
      },
      {
        heading: "Talking about future plans: aller + infinitive and the simple future",
        points: [
          "Aller + infinitive (near future) works well for plans that feel decided: L'année prochaine, je vais faire un apprentissage.",
          "The simple future works well for less certain, longer-term ambitions: Un jour, je travaillerai à l'étranger (One day, I will work abroad).",
          "Après le lycée (after lycée/sixth form) and dans le futur (in the future) are useful time markers to anchor a plans answer.",
          "Combining both tenses in one answer — near future for the next step, simple future for a longer-term goal — shows good range for a written or spoken answer.",
        ],
      },
      {
        heading: "Expressing intentions: j'aimerais / je voudrais + infinitive",
        points: [
          "J'aimerais + infinitive (I would like to) is the conditional of aimer, softer and more tentative than aller + infinitive: J'aimerais étudier à l'étranger.",
          "Je voudrais + infinitive (I would like to) works the same way, from the conditional of vouloir, and is broadly interchangeable with j'aimerais in this context.",
          "J'espère + infinitive (I hope to) adds a note of hope/uncertainty: J'espère réussir mes examens.",
          "Mon rêve, c'est de + infinitive (My dream is to...) is a strong, natural way to introduce an ambition: Mon rêve, c'est de devenir médecin.",
        ],
      },
    ],
    flashcards: [
      { term: "continuer mes études", definition: "To continue my studies — the general phrase for staying in education after GCSE-equivalent level." },
      { term: "un stage", definition: "A work placement / internship — a false friend: it does NOT mean 'a stage' in the theatrical or step sense." },
      { term: "un apprentissage", definition: "An apprenticeship — a respected, growing pathway in France; faire un apprentissage means to do an apprenticeship." },
      { term: "la formation professionnelle", definition: "Vocational training — covers practical, job-focused training routes as an alternative to the traditional academic path." },
      { term: "un CAP", definition: "Certificat d'Aptitude Professionnelle — a vocational qualification, roughly comparable to some UK BTEC-style qualifications." },
      { term: "j'aimerais + infinitif", definition: "I would like to... — the conditional of aimer, a softer way to express an intention than aller + infinitive." },
      { term: "je voudrais + infinitif", definition: "I would like to... — the conditional of vouloir, broadly interchangeable with j'aimerais for expressing intentions." },
      { term: "j'espère + infinitif", definition: "I hope to... — used to express a hoped-for but less certain future plan: j'espère réussir mes examens." },
      { term: "mon rêve, c'est de...", definition: "My dream is to... — a strong, natural phrase for introducing a longer-term ambition." },
      { term: "faire des études de...", definition: "To study [a subject] — faire des études de droit (to study law); études is always plural in this phrase." },
      { term: "un contrat d'apprentissage", definition: "An apprenticeship contract — combines paid work with training, similar in spirit to a UK apprenticeship." },
      { term: "après le lycée", definition: "After lycée/sixth form — a useful time marker for anchoring plans about the years right after school." },
    ],
    examTips: [
      {
        tip: "Don't translate 'un stage' as 'a stage' in the theatrical sense.",
        detail: "Un stage means a work placement or internship — using it to mean 'a stage' (theatrical) or 'a stage' (step/phase, which is une étape in French) is a specific and common false-friend error.",
      },
      {
        tip: "Present vocational routes with the same respect the French system gives them.",
        detail: "Apprenticeships and la formation professionnelle are well-regarded, mainstream pathways in France, not a fallback option — an answer that frames un apprentissage as a lesser choice misrepresents the culture being described.",
      },
      {
        tip: "Mix near future and simple future to show tense range in a plans answer.",
        detail: "L'année prochaine, je vais faire un stage, et un jour, je travaillerai à l'étranger combines both tenses naturally and demonstrates more grammatical control than sticking to just one.",
      },
      {
        tip: "Use j'aimerais/je voudrais for tentative intentions, not aller + infinitive.",
        detail: "Aller + infinitive suggests something fairly decided; j'aimerais/je voudrais signal 'this is what I'd like', which is usually the more accurate and more sophisticated way to talk about ambitions that aren't certain yet.",
      },
      {
        tip: "Learn mon rêve, c'est de + infinitive as a strong, exam-ready opener for an ambitions paragraph.",
        detail: "This phrase reads as natural, idiomatic French rather than a word-for-word translation from English, and examiners notice authentic-sounding structures like this.",
      },
      {
        tip: "Keep études plural in faire des études de...",
        detail: "Études is always plural in this set phrase, even when talking about studying a single subject: faire des études de médecine, not faire une étude de médecine.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'J'aimerais faire un apprentissage après le lycée.'",
        accept: ["i would like to do an apprenticeship after lycée/sixth form", "i'd like to do an apprenticeship after sixth form"],
        answer: "I would like to do an apprenticeship after lycée/sixth form — j'aimerais is the conditional of aimer, softening the statement into an intention rather than a certainty.",
      },
      {
        question: "Translate into French: 'One day, I will work abroad.'",
        accept: ["un jour, je travaillerai à l'étranger", "un jour je travaillerai à l'étranger"],
        answer: "Un jour, je travaillerai à l'étranger — the simple future travaillerai fits a longer-term, less certain ambition.",
      },
      {
        question: "Complete with the correct form: 'Je ____ continuer mes études à l'université.' (I would like to — conditional of vouloir)",
        accept: ["voudrais"],
        answer: "Voudrais — the conditional of vouloir, used here in je voudrais continuer mes études, expressing a polite intention.",
      },
      {
        question: "Complete with the correct near-future form: 'L'année prochaine, je ____ faire un stage.' (aller)",
        accept: ["vais"],
        answer: "Vais — the je form of aller, used to build the near future je vais faire un stage (I'm going to do a work placement).",
      },
      {
        question: "Complete with the correct simple future form: 'Elle ____ (devenir) médecin un jour.'",
        accept: ["deviendra"],
        answer: "Deviendra — the simple future of devenir (an irregular verb related to venir), giving elle deviendra médecin (she will become a doctor).",
      },
      {
        question: "Translate into French: 'My dream is to study medicine at university.'",
        accept: ["mon rêve, c'est de faire des études de médecine à l'université", "mon rêve c'est de faire des études de médecine à l'université"],
        answer: "Mon rêve, c'est de faire des études de médecine à l'université — mon rêve, c'est de + infinitive is the natural way to introduce a strong ambition.",
      },
      {
        question: "Translate into French: 'I hope to pass my exams and continue my studies.'",
        accept: ["j'espère réussir mes examens et continuer mes études"],
        answer: "J'espère réussir mes examens et continuer mes études — espérer + infinitive expresses a hope rather than a certainty, softer than aller + infinitive.",
      },
      {
        question: "Which word correctly means 'a work placement/internship'?",
        choices: ["un stage", "une étape", "un théâtre", "une scène"],
        accept: ["un stage"],
        answer: "Un stage means a work placement or internship. Une étape means a stage/step (in a process), and une scène/un théâtre relate to the theatrical sense of 'stage' — none of those fit here.",
      },
      {
        question: "Which phrase would best introduce a tentative, less certain intention?",
        choices: ["J'aimerais...", "Je vais...", "J'ai...", "Je suis..."],
        accept: ["J'aimerais..."],
        answer: "J'aimerais (the conditional of aimer) signals a softer, more tentative intention than je vais, which suggests something already decided.",
      },
      {
        question: "In the sentence 'Je voudrais faire un apprentissage', what part of speech is 'faire'?",
        choices: ["An infinitive verb", "A past participle", "A noun", "An adjective"],
        accept: ["An infinitive verb"],
        answer: "Faire is in its infinitive form here, following voudrais directly — this is the standard 'conjugated verb + infinitive' construction used to express intentions.",
      },
      {
        question: "Which qualification is described as roughly comparable to a UK vocational/BTEC-style qualification?",
        choices: ["un CAP", "le bac", "un diplôme universitaire", "une licence"],
        accept: ["un CAP"],
        answer: "Un CAP (Certificat d'Aptitude Professionnelle) is a vocational qualification, roughly comparable to some UK BTEC-style routes. Le bac and une licence relate to the more academic pathway.",
      },
      {
        question: "Which sentence correctly combines near future and simple future to show tense range?",
        choices: ["L'année prochaine, je vais faire un stage, et un jour, je travaillerai à l'étranger.", "L'année prochaine, je fais un stage, et un jour, je vais travailler à l'étranger.", "L'année prochaine, je ferai un stage, et un jour, je vais à l'étranger.", "L'année prochaine, je vais faire un stage, et un jour, j'ai travaillé à l'étranger."],
        accept: ["L'année prochaine, je vais faire un stage, et un jour, je travaillerai à l'étranger."],
        answer: "This option correctly pairs the near future (je vais faire, for the more immediate plan) with the simple future (je travaillerai, for the longer-term ambition), which is exactly the kind of tense range examiners look for.",
      },
      {
        question: "Give one vocational or apprenticeship-related word in French.",
        accept: ["un apprentissage", "la formation professionnelle", "un cap", "un contrat d'apprentissage", "un stage"],
        answer: "Un apprentissage, la formation professionnelle, un CAP, un contrat d'apprentissage and un stage are all correct vocational-route vocabulary — any one, correctly spelled, is valid.",
      },
      {
        question: "Translate into English: 'Un jour, j'espère devenir ingénieure, mais d'abord, je vais faire un stage.'",
        accept: ["one day, i hope to become an engineer, but first, i'm going to do a work placement"],
        answer: "One day, I hope to become an engineer, but first, I'm going to do a work placement — espère + infinitive expresses a hope, and je vais faire is the near future for the more immediate plan.",
      },
      {
        question: "Write a paragraph in French about your plans after Year 11: mention one near-future plan and one longer-term ambition, using at least one intention phrase (j'aimerais/je voudrais/j'espère).",
        answer:
          "There's no single right answer here — mark this one yourself. Check for correct use of aller + infinitive for the near-term plan, a correctly formed simple future verb (or a clearly signalled long-term ambition), and at least one intention phrase used accurately.",
      },
      {
        question: "Explain in English why French treats apprenticeships and vocational training as a mainstream, respected pathway, and why this matters when writing about post-16 choices in French.",
        answer:
          "Mark it yourself against this: in France, un apprentissage and la formation professionnelle are well-established, widely chosen routes rather than a fallback for students who don't pursue academic study, and a strong GCSE answer reflects that by describing vocational choices with the same respect as university routes rather than implying they're a lesser option.",
      },
    ],
    misconceptions: [
      {
        wrong: "Un stage means 'a stage' in the sense of a step in a process or a theatre stage.",
        right: "Un stage specifically means a work placement or internship in French — 'a stage' (step) is une étape, and a theatre stage is une scène.",
      },
      {
        wrong: "Aller + infinitive and j'aimerais/je voudrais + infinitive express exactly the same level of certainty.",
        right: "Aller + infinitive suggests a fairly decided plan, while j'aimerais/je voudrais signal a softer, more tentative wish — choosing between them changes how certain the plan sounds.",
      },
      {
        wrong: "Vocational training and apprenticeships are seen as a lesser option in France, similar to some UK stereotypes.",
        right: "Apprenticeships and la formation professionnelle are respected, mainstream pathways in the French education system, not a fallback for less academic students.",
      },
      {
        wrong: "Études can be used in the singular when talking about studying one particular subject.",
        right: "Études stays plural in the set phrase faire des études de..., even when referring to a single subject: faire des études de droit, not faire une étude de droit.",
      },
    ],
  },
  "french/jobs-and-careers": {
    summary:
      "Jobs and careers vocabulary appears across speaking, writing and reading papers, and rewards students who can go beyond naming a job to actually describing it — conditions, pay, advantages and drawbacks. This topic covers job vocabulary, describing working conditions and pay, talking about future careers, and formal phrases used in job applications.",
    keyFacts: [
      {
        heading: "Job vocabulary",
        points: [
          "Common jobs: un médecin (a doctor — stays masculine in form even for a woman, though une médecin is increasingly used), un professeur/une professeure (a teacher), un infirmier/une infirmière (a nurse), un ingénieur/une ingénieure (an engineer).",
          "Un métier means 'a job/profession' in a general sense; un emploi means 'a job' in the sense of a specific position; un travail can mean either 'work' generally or 'a job'.",
          "Le patron/la patronne (the boss), un collègue/une collègue (a colleague), un employé/une employée (an employee).",
          "Travailler comme + job (to work as a...): Elle travaille comme infirmière (She works as a nurse) — no article is used after comme here.",
        ],
      },
      {
        heading: "Describing working conditions and pay",
        points: [
          "Les horaires (working hours, always plural) and le salaire (the salary/pay) are the two most useful nouns for describing a job's practical side.",
          "Bien payé / mal payé (well paid / badly paid) — payé agrees with the noun it describes: un métier bien payé, une carrière bien payée.",
          "Travailler à plein temps / à temps partiel (to work full-time / part-time).",
          "Les avantages et les inconvénients (the advantages and disadvantages) is the standard structure for a balanced description of a job.",
        ],
      },
      {
        heading: "Talking about future careers",
        points: [
          "Dans le futur, je voudrais devenir + job (In the future, I would like to become a...): Je voudrais devenir avocat(e).",
          "Devenir (to become) is irregular, conjugated like venir: je deviens, tu deviens, il/elle devient, nous devenons, vous devenez, ils/elles deviennent.",
          "Après mes études, je vais chercher un emploi dans... (After my studies, I'm going to look for a job in...) combines the near future with career vocabulary.",
          "Job nouns generally have both a masculine and feminine form (un acteur/une actrice, un vendeur/une vendeuse), though some, like un médecin, are more resistant to a widely used feminine form.",
        ],
      },
      {
        heading: "Formal job-application phrases",
        points: [
          "Je vous écris pour poser ma candidature au poste de... (I am writing to apply for the position of...) is a formal opening for a job-application letter.",
          "Je pense être qualifié(e) pour ce poste parce que... (I believe I am qualified for this position because...) introduces reasons/qualifications.",
          "Veuillez trouver ci-joint mon CV (Please find attached my CV) is a standard formal closing phrase.",
          "Je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées is the highly formal set closing phrase used to end a formal French letter, roughly equivalent to 'Yours faithfully'.",
        ],
      },
    ],
    flashcards: [
      { term: "un métier", definition: "A job/profession (general sense) — distinct from un emploi (a specific job/position) and le travail (work, generally)." },
      { term: "les horaires (m)", definition: "Working hours — always plural in French; used to describe when/how long someone works." },
      { term: "bien payé / mal payé", definition: "Well paid / badly paid — payé agrees with the noun described: une carrière bien payée." },
      { term: "devenir", definition: "To become — irregular, conjugated like venir: je deviens, nous devenons, ils deviennent." },
      { term: "travailler comme", definition: "To work as — no article used after comme: il travaille comme ingénieur, not comme un ingénieur." },
      { term: "les avantages et les inconvénients", definition: "The advantages and disadvantages — the standard structure for a balanced job description." },
      { term: "un(e) collègue", definition: "A colleague — same form for both genders, only the article changes: un collègue / une collègue." },
      { term: "à plein temps / à temps partiel", definition: "Full-time / part-time — fixed phrases describing hours of work." },
      { term: "poser sa candidature", definition: "To apply (for a job) — literally 'to put forward one's candidacy'; used with au poste de (for the position of)." },
      { term: "veuillez trouver ci-joint mon CV", definition: "Please find attached my CV — a standard formal closing phrase in a job-application letter." },
      { term: "je vous prie d'agréer...", definition: "The highly formal closing phrase for a French letter, roughly equivalent to 'Yours faithfully' in English." },
      { term: "le patron / la patronne", definition: "The boss — a gendered noun pair; patronne can also mean a female business owner more broadly." },
    ],
    examTips: [
      {
        tip: "Don't add an article after 'travailler comme'.",
        detail: "Il travaille comme professeur is correct; il travaille comme un professeur is not standard French in this construction — comme + job name drops the article, unlike English 'as a teacher'.",
      },
      {
        tip: "Always pair a job description with an advantage or disadvantage, not just the job name.",
        detail: "Je voudrais devenir médecin parce que c'est bien payé, mais les horaires sont difficiles gives a fuller, higher-scoring answer than simply naming the job.",
      },
      {
        tip: "Learn devenir's conjugation alongside venir, since they share the same irregular pattern.",
        detail: "Je deviens, tu deviens, il devient, nous devenons, vous devenez, ils deviennent follows exactly the same stem-change pattern as venir — learning them together reinforces both.",
      },
      {
        tip: "Use the full formal closing phrase for any letter-writing task about a job application.",
        detail: "Je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées is the expected, natural closing for a formal French letter — an informal closing like à bientôt would be jarringly out of register in this context.",
      },
      {
        tip: "Make bien payé/mal payé agree with the noun they describe.",
        detail: "Un métier bien payé (masculine) vs une carrière bien payée (feminine) — payé takes the regular adjective agreement pattern despite functioning almost like a fixed phrase.",
      },
      {
        tip: "Distinguish un métier, un emploi and le travail rather than treating them as identical.",
        detail: "Un métier suits a general profession (mon métier de rêve, my dream job/profession), un emploi suits a specific position being applied for, and le travail is the broadest word for 'work' — picking the right one shows more precise vocabulary control.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'Elle travaille comme infirmière dans un grand hôpital.'",
        accept: ["she works as a nurse in a big hospital", "she works as a nurse in a large hospital"],
        answer: "She works as a nurse in a big hospital — comme drops the article before infirmière, unlike the English 'as a nurse'.",
      },
      {
        question: "Translate into French: 'I would like to become a doctor because it's well paid.'",
        accept: ["je voudrais devenir médecin parce que c'est bien payé"],
        answer: "Je voudrais devenir médecin parce que c'est bien payé — devenir is followed directly by the job noun with no article, and c'est bien payé gives a general reason.",
      },
      {
        question: "Complete with the correct form of devenir: 'Ils ____ ingénieurs après leurs études.'",
        accept: ["deviennent"],
        answer: "Deviennent — the ils form of devenir, following the same irregular stem-change pattern as venir.",
      },
      {
        question: "Complete with the correct agreement: 'C'est une carrière bien ____.' (payé)",
        accept: ["payée"],
        answer: "Payée — carrière is feminine, so payé takes the feminine -e ending to agree: payée.",
      },
      {
        question: "Complete the phrase: 'Je vous écris pour poser ma ____ au poste de vendeur.' (application/candidacy)",
        accept: ["candidature"],
        answer: "Candidature — poser sa candidature au poste de... is the standard formal phrase for applying for a specific position.",
      },
      {
        question: "Translate into French: 'The advantages and disadvantages of this job are the salary and the working hours.'",
        accept: ["les avantages et les inconvénients de ce métier sont le salaire et les horaires"],
        answer: "Les avantages et les inconvénients de ce métier sont le salaire et les horaires — a standard structure pairing pros and cons.",
      },
      {
        question: "Translate into French: 'After my studies, I'm going to look for a job in medicine.'",
        accept: ["après mes études, je vais chercher un emploi dans la médecine", "après mes études, je vais chercher un emploi en médecine"],
        answer: "Après mes études, je vais chercher un emploi dans la médecine — the near future (je vais chercher) is used for this planned next step.",
      },
      {
        question: "Which word correctly means 'a job/profession' in a general sense?",
        choices: ["un métier", "un emploi", "un salaire", "un collègue"],
        accept: ["un métier"],
        answer: "Un métier is the general word for a job/profession (as in 'my dream profession'). Un emploi refers more to a specific position, un salaire is the pay itself, and un collègue is a colleague.",
      },
      {
        question: "Which phrase correctly closes a formal French job-application letter?",
        choices: ["Je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées.", "À bientôt!", "Salut, à plus!", "Gros bisous."],
        accept: ["Je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées."],
        answer: "This is the standard, highly formal closing for a French letter, roughly equivalent to 'Yours faithfully'. The other options are all far too informal for a job application.",
      },
      {
        question: "In the sentence 'Elle travaille à plein temps', what part of speech is 'plein temps'?",
        choices: ["An adverbial phrase", "A noun on its own", "An adjective", "A verb"],
        accept: ["An adverbial phrase"],
        answer: "À plein temps functions as an adverbial phrase describing how (in what capacity) elle travaille — it modifies the verb, describing the manner of working, not naming a separate person or thing.",
      },
      {
        question: "Which sentence correctly uses 'comme' to describe a job?",
        choices: ["Il travaille comme professeur.", "Il travaille comme un professeur.", "Il travaille comme le professeur.", "Il travaille comme professeur un."],
        accept: ["Il travaille comme professeur."],
        answer: "Il travaille comme professeur is correct — comme drops the article before a job noun in this construction, unlike English 'as a teacher'.",
      },
      {
        question: "Which irregular verb pattern does 'devenir' follow?",
        choices: ["venir", "aller", "faire", "vouloir"],
        accept: ["venir"],
        answer: "Devenir is a compound of venir and follows exactly the same irregular conjugation pattern: je deviens, nous devenons, ils deviennent.",
      },
      {
        question: "Give one advantage of a job that could be mentioned in French.",
        accept: ["bien payé", "horaires flexibles", "intéressant", "on peut voyager", "on aide les gens", "des horaires flexibles"],
        answer: "Any genuine job advantage counts — bien payé (well paid), des horaires flexibles (flexible hours), intéressant (interesting), or on aide les gens (you help people) are all correct examples.",
      },
      {
        question: "Translate into French: 'She works as an engineer, and her working hours are flexible.'",
        accept: ["elle travaille comme ingénieure, et ses horaires sont flexibles", "elle travaille comme ingénieure et ses horaires sont flexibles"],
        answer: "Elle travaille comme ingénieure, et ses horaires sont flexibles — comme drops the article before the job noun, and horaires is plural, agreeing with sont.",
      },
      {
        question: "Write a short formal paragraph in French applying for a summer job, including a formal opening and closing phrase.",
        answer:
          "There's no single right answer here — mark this one yourself. Check for a formal opening (je vous écris pour poser ma candidature au poste de...), at least one qualification or reason given, and the correct formal closing phrase (je vous prie d'agréer...).",
      },
      {
        question: "Explain in English why 'un métier', 'un emploi' and 'le travail' aren't simply interchangeable translations of the English word 'job', and give one context where each would be the natural choice.",
        answer:
          "Mark it yourself against this: un métier suits describing a profession in a general sense (mon métier de rêve, my dream profession/job type), un emploi suits a specific position someone applies for or holds, and le travail is the broadest term, covering 'work' as an activity as well as employment generally. A strong answer gives one natural example sentence for each rather than treating them as one word with three spellings.",
      },
    ],
    misconceptions: [
      {
        wrong: "Travailler comme needs an article before the job name, the same as English 'to work as a...'.",
        right: "French drops the article in this construction: il travaille comme professeur, not il travaille comme un professeur.",
      },
      {
        wrong: "Un métier, un emploi and le travail all mean exactly the same thing and can be swapped freely.",
        right: "They have different shades of meaning — un métier is a profession generally, un emploi is a specific position, and le travail is the broadest word for work — using the wrong one can sound imprecise.",
      },
      {
        wrong: "A formal job-application letter in French can end with an informal closing like à bientôt.",
        right: "Formal French letters, including job applications, require a set formal closing phrase such as je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées — an informal sign-off would be jarringly wrong in register.",
      },
      {
        wrong: "Devenir conjugates as a regular -ir verb.",
        right: "Devenir is irregular, following the same stem-change pattern as venir: je deviens, nous devenons, ils deviennent — not the regular finir-style -ir pattern.",
      },
    ],
  },
  "french/volunteering-and-personal-qualities": {
    summary:
      "Volunteering and personal qualities is a natural bridge between describing yourself and describing the wider world — a common combination in GCSE writing tasks about character and community. This topic covers volunteering vocabulary, personal quality adjectives, giving reasons with parce que/car, and expressing obligation with devoir + infinitive and il faut + infinitive.",
    keyFacts: [
      {
        heading: "Volunteering vocabulary",
        points: [
          "Faire du bénévolat / être bénévole (to volunteer / to be a volunteer) — bénévole is both a noun and an adjective, and doesn't change form for gender.",
          "Une association caritative (a charity), une œuvre de charité (a charitable cause/work), collecter des fonds (to fundraise, literally 'to collect funds').",
          "Aider les autres (to help others), faire du bénévolat dans un refuge pour animaux (to volunteer at an animal shelter), rendre service à quelqu'un (to do someone a favour/be of service).",
          "Un(e) bénévole gives time freely (bénévolement means voluntarily/without pay), which distinguishes it clearly from un emploi rémunéré (a paid job).",
        ],
      },
      {
        heading: "Personal quality adjectives",
        points: [
          "Positive: généreux/généreuse (generous), serviable (helpful — same form both genders), patient(e) (patient), fiable (reliable — same form both genders), travailleur/travailleuse (hardworking).",
          "Negative or contrasting: égoïste (selfish — same form both genders), paresseux/paresseuse (lazy), impatient(e).",
          "Many personality adjectives ending in -eux follow the -eux/-euse pattern (généreux/généreuse, paresseux/paresseuse), while those ending in -e already (serviable, fiable, égoïste) don't change for gender.",
          "Avoir un bon sens de l'humour (to have a good sense of humour) and être à l'écoute des autres (to be a good listener, literally 'to be listening to others') are useful longer descriptive phrases.",
        ],
      },
      {
        heading: "Giving reasons with parce que / car",
        points: [
          "Je fais du bénévolat parce que j'aime aider les autres (I volunteer because I like helping others) — parce que can start a new sentence, car cannot.",
          "Puisque (since/given that) is a slightly more formal alternative that can also start a sentence: Puisque j'ai du temps libre, je fais du bénévolat.",
          "Grâce à (thanks to) is used to credit something positive: Grâce au bénévolat, j'ai appris à être plus patient.",
          "A strong volunteering answer links a personal quality to an action: Je suis généreux/généreuse, donc j'aide les autres (I am generous, so I help others).",
        ],
      },
      {
        heading: "Expressing obligation: devoir + infinitive and il faut + infinitive",
        points: [
          "Devoir + infinitive (to have to/must) is a personal obligation that agrees with a specific subject: je dois aider, nous devons collecter des fonds.",
          "Il faut + infinitive (it is necessary to/one must) is impersonal, with no specific subject — a general rule or requirement: Il faut être patient pour être bénévole.",
          "Il ne faut pas + infinitive means 'one must not' — a stronger prohibition than simply il ne faut pas nécessairement (it isn't necessarily necessary).",
          "Both structures are followed directly by an infinitive, with no linking word, exactly like aimer/vouloir + infinitive elsewhere.",
        ],
      },
    ],
    flashcards: [
      { term: "faire du bénévolat", definition: "To volunteer — bénévolat is masculine; être bénévole means 'to be a volunteer'." },
      { term: "une association caritative", definition: "A charity — caritative is a regular adjective agreeing with the feminine noun association." },
      { term: "collecter des fonds", definition: "To fundraise — literally 'to collect funds'; fonds stays plural in this set phrase." },
      { term: "serviable", definition: "Helpful — ends in -e already, so identical for masculine and feminine nouns." },
      { term: "généreux / généreuse", definition: "Generous — follows the -eux/-euse pattern for masculine/feminine agreement, like ennuyeux/ennuyeuse." },
      { term: "égoïste", definition: "Selfish — identical form for both genders; a false friend trap is minimal here since it closely resembles English 'egoist/egotistic'." },
      { term: "fiable", definition: "Reliable — identical form for both genders, ending in -e already." },
      { term: "il faut + infinitif", definition: "It is necessary to / one must — an impersonal structure with no specific subject, used for general obligations or rules." },
      { term: "devoir + infinitif", definition: "To have to / must — a personal obligation that agrees with a specific subject: je dois, nous devons." },
      { term: "grâce à", definition: "Thanks to — used to credit something positive: grâce au bénévolat, j'ai appris beaucoup de choses." },
      { term: "rendre service à quelqu'un", definition: "To do someone a favour / be of service — a fixed phrase using rendre (to give back/render), not donner." },
      { term: "puisque", definition: "Since / given that — a slightly more formal alternative to parce que, and can also start a sentence." },
    ],
    examTips: [
      {
        tip: "Distinguish devoir (personal obligation) from il faut (impersonal necessity).",
        detail: "Je dois aider ma communauté states what I personally have to do; il faut aider les autres states a general rule with no specific subject — mixing these up changes whether the sentence is about you or about people in general.",
      },
      {
        tip: "Link a personal quality to a concrete action rather than listing adjectives alone.",
        detail: "Je suis généreux, donc je fais du bénévolat dans un refuge pour animaux is stronger than simply je suis généreux — connecting quality to action is what turns description into a developed answer.",
      },
      {
        tip: "Remember bénévole doesn't change form for gender, as an adjective or noun.",
        detail: "Il est bénévole and elle est bénévole use exactly the same word — this is one of several personality/status words (like égoïste, fiable, serviable) that don't follow the regular add-an-e rule because they already end in -e.",
      },
      {
        tip: "Use grâce à only for POSITIVE causes, never negative ones.",
        detail: "Grâce à means 'thanks to' and specifically implies something good resulted — for a negative cause, à cause de ('because of') is the correct phrase instead.",
      },
      {
        tip: "Follow both devoir and il faut directly with an infinitive, no linking word.",
        detail: "Il faut être patient and je dois aider both go straight into the infinitive, matching the pattern already seen with aimer/vouloir + infinitive — no à or de gets inserted.",
      },
      {
        tip: "Use puisque as a slightly more sophisticated alternative to parce que when opening a sentence.",
        detail: "Both can start a sentence, but puisque carries a flavour of 'given that/since' rather than a plain 'because', and using it occasionally shows a wider range of connectives.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'Je fais du bénévolat parce que j'aime aider les autres.'",
        accept: ["i volunteer because i like helping others", "i volunteer because i love helping others"],
        answer: "I volunteer because I like helping others — faire du bénévolat is the standard phrase for volunteering, and parce que introduces the reason.",
      },
      {
        question: "Translate into French: 'It is necessary to be patient to volunteer.'",
        accept: ["il faut être patient pour être bénévole", "il faut être patiente pour être bénévole"],
        answer: "Il faut être patient(e) pour être bénévole — il faut is the impersonal structure for a general necessity, followed directly by the infinitive être.",
      },
      {
        question: "Complete with the correct form of devoir: 'Nous ____ collecter des fonds pour l'association.'",
        accept: ["devons"],
        answer: "Devons — the nous form of devoir, used here for a personal obligation: Nous devons collecter des fonds (We have to fundraise).",
      },
      {
        question: "Complete with the correct form of the adjective: 'Elle est très ____.' (généreux)",
        accept: ["généreuse"],
        answer: "Généreuse — généreux follows the -eux → -euse pattern for its feminine form, agreeing with the feminine subject elle.",
      },
      {
        question: "Complete with the correct connective: '____ j'ai du temps libre, je fais du bénévolat.' (since/given that)",
        accept: ["puisque"],
        answer: "Puisque — a slightly more formal alternative to parce que, and, like parce que, able to start a sentence.",
      },
      {
        question: "Translate into French: 'I am reliable, so people trust me.'",
        accept: ["je suis fiable, donc les gens me font confiance", "je suis fiable donc les gens me font confiance"],
        answer: "Je suis fiable, donc les gens me font confiance — fiable stays the same form regardless of the speaker's gender, since it already ends in -e.",
      },
      {
        question: "Translate into French: 'Thanks to volunteering, I have become more patient.'",
        accept: ["grâce au bénévolat, je suis devenu(e) plus patient(e)", "grâce au bénévolat, je suis devenue plus patiente"],
        answer: "Grâce au bénévolat, je suis devenu(e) plus patient(e) — grâce à contracts to grâce au before the masculine noun bénévolat, and credits a positive outcome.",
      },
      {
        question: "Which structure is impersonal, with no specific subject, for expressing necessity?",
        choices: ["il faut", "je dois", "nous devons", "tu dois"],
        accept: ["il faut"],
        answer: "Il faut is impersonal and doesn't refer to any specific person, unlike je dois/nous devons/tu dois, which are all personal forms of devoir tied to a specific subject.",
      },
      {
        question: "Which adjective does NOT change form between masculine and feminine?",
        choices: ["égoïste", "généreux", "travailleur", "paresseux"],
        accept: ["égoïste"],
        answer: "Égoïste already ends in -e, so it stays the same for both genders. Généreux, travailleur and paresseux all change form (généreuse, travailleuse, paresseuse) for the feminine.",
      },
      {
        question: "In the sentence 'Il est très serviable', what part of speech is 'serviable'?",
        choices: ["An adjective", "A noun", "A verb", "An adverb"],
        accept: ["An adjective"],
        answer: "Serviable describes il, functioning as an adjective. Très is the adverb intensifying it, and est is the verb.",
      },
      {
        question: "Which connective would you use to credit a POSITIVE outcome to something?",
        choices: ["grâce à", "à cause de", "malgré", "sauf"],
        accept: ["grâce à"],
        answer: "Grâce à ('thanks to') specifically credits a positive result. À cause de ('because of') is typically used for a negative cause instead.",
      },
      {
        question: "Which sentence correctly uses 'devoir' for a personal obligation?",
        choices: ["Je dois aider mes voisins.", "Il faut je aide mes voisins.", "Je faut aider mes voisins.", "Devoir je aide mes voisins."],
        accept: ["Je dois aider mes voisins."],
        answer: "Je dois aider mes voisins is correct — devoir conjugates to match the subject je, unlike il faut, which never changes for person.",
      },
      {
        question: "Give one personal quality adjective in French that could describe a good volunteer.",
        accept: ["généreux", "généreuse", "patient", "patiente", "serviable", "fiable", "travailleur", "travailleuse"],
        answer: "Généreux/généreuse, patient(e), serviable, fiable and travailleur/travailleuse are all correct qualities suited to describing a good volunteer.",
      },
      {
        question: "Translate into French: 'I collect funds for a charity because I am generous.'",
        accept: ["je collecte des fonds pour une association caritative parce que je suis généreux", "je collecte des fonds pour une association caritative parce que je suis généreuse"],
        answer: "Je collecte des fonds pour une association caritative parce que je suis généreux/généreuse — collecter des fonds is the fixed phrase for fundraising, and généreux/généreuse agrees with the speaker's gender.",
      },
      {
        question: "Write a paragraph in French about why you would (or do) volunteer, linking at least one personal quality to a specific volunteering action, and using both il faut and devoir at least once each.",
        answer:
          "There's no single right answer here — mark this one yourself. Check that il faut is used impersonally, that devoir agrees correctly with its subject, and that a personal quality (e.g. généreux, patient) is genuinely linked to an action rather than just listed.",
      },
      {
        question: "Explain in English the difference between 'devoir + infinitive' and 'il faut + infinitive' in French, and why choosing the wrong one changes a sentence's meaning.",
        answer:
          "Mark it yourself against this: devoir + infinitive expresses a personal obligation tied to a specific subject (je dois, nous devons — 'I/we have to'), while il faut + infinitive expresses a general, impersonal necessity with no named subject ('one must/it is necessary to'). Using il faut where a personal obligation is meant loses the sense of who specifically has to do something, and using devoir where a general rule is meant makes the statement sound more personal and specific than intended.",
      },
    ],
    misconceptions: [
      {
        wrong: "Devoir and il faut are interchangeable ways of saying the same thing.",
        right: "Devoir expresses a PERSONAL obligation that agrees with a specific subject (je dois, nous devons), while il faut is impersonal and expresses a general necessity with no subject of its own — they aren't simply swappable.",
      },
      {
        wrong: "Généreux simply adds -e for its feminine form, like a regular adjective.",
        right: "Généreux follows the -eux → -euse pattern, giving généreuse — the same family as ennuyeux → ennuyeuse, not the plain add-an-e rule.",
      },
      {
        wrong: "Grâce à and à cause de can both be used for any cause, positive or negative.",
        right: "Grâce à specifically credits a positive outcome ('thanks to'), while à cause de is typically used for a negative cause ('because of') — using grâce à for something bad sounds odd or ironic.",
      },
      {
        wrong: "Bénévole changes form for masculine and feminine, like most nouns and adjectives describing people.",
        right: "Bénévole is identical for both genders, since it already ends in -e — il est bénévole and elle est bénévole use exactly the same word.",
      },
    ],
  },
  "french/global-and-environmental-issues": {
    summary:
      "Environmental and global issues is a topic where GCSE writing mark schemes specifically reward extended, connected arguments rather than isolated statements, making it the natural home for French's richer connectives. This topic covers environmental problem vocabulary, expressing opinions and solutions, the structures on devrait/on pourrait + infinitive for suggesting action, and connectives like cependant, de plus and donc for building an extended argument.",
    keyFacts: [
      {
        heading: "Environmental problems vocabulary",
        points: [
          "Le réchauffement climatique (global warming/climate change), la pollution (pollution), le changement climatique (climate change, an alternative to réchauffement climatique).",
          "Les déchets (waste/rubbish, always plural in this sense), le gaspillage (waste, in the sense of wastefulness — a different word from déchets, the physical rubbish), la déforestation.",
          "Les espèces en voie de disparition (endangered species, literally 'species on the way to disappearing'), la couche d'ozone (the ozone layer).",
          "Les gaz à effet de serre (greenhouse gases) and les émissions de CO2 (CO2 emissions) are useful technical phrases for a more developed environmental answer.",
        ],
      },
      {
        heading: "Expressing opinions and solutions",
        points: [
          "C'est un problème grave/sérieux (it's a serious problem), Ça m'inquiète (It worries me), Je suis inquiet/inquiète au sujet de... (I am worried about...).",
          "Protéger l'environnement (to protect the environment), recycler (to recycle), réduire les déchets (to reduce waste), économiser l'énergie (to save energy).",
          "Sensibiliser les gens à... means 'to raise people's awareness of...' — a useful, slightly advanced phrase for discussing solutions.",
          "A strong opinion answer names the problem, gives a reaction, and proposes a solution, rather than stopping at description alone.",
        ],
      },
      {
        heading: "On devrait / on pourrait + infinitive",
        points: [
          "On devrait + infinitive (we/one should) is the conditional of devoir, softer and more suggestion-like than on doit (we must): On devrait recycler plus.",
          "On pourrait + infinitive (we/one could) is the conditional of pouvoir, used to propose a possible solution without insisting on it: On pourrait utiliser moins de plastique.",
          "Both structures are impersonal-feeling because on ('one/we/people in general') doesn't specify exactly who — useful for discussing solutions at a societal rather than personal level.",
          "Combining on devrait with a reason (parce que/car) makes a fuller suggestion: On devrait réduire les déchets parce que la pollution nuit à l'environnement.",
        ],
      },
      {
        heading: "Connectives for extended writing",
        points: [
          "Cependant (however) introduces a contrast or complication, similar to mais but more formal and better suited to written work.",
          "De plus (moreover/furthermore) and en plus (in addition) both add a further point, building on what's already been said.",
          "Donc (therefore/so) and par conséquent (consequently) both introduce a result or consequence, useful for linking a problem to its effects.",
          "Using two or three of these connectives across one paragraph — rather than repeating et and mais — is specifically what separates a higher mark-band extended-writing answer from a basic one.",
        ],
      },
    ],
    flashcards: [
      { term: "le réchauffement climatique", definition: "Global warming / climate change — masculine noun, from réchauffer (to warm up)." },
      { term: "les déchets (m)", definition: "Waste/rubbish — always plural in this environmental sense; distinct from le gaspillage (wastefulness as a concept)." },
      { term: "les espèces en voie de disparition", definition: "Endangered species — literally 'species on the way to disappearing'; espèce is feminine." },
      { term: "on devrait + infinitif", definition: "We/one should... — the conditional of devoir, a softened suggestion rather than a command." },
      { term: "on pourrait + infinitif", definition: "We/one could... — the conditional of pouvoir, proposing a possible solution without insisting." },
      { term: "cependant", definition: "However — a more formal alternative to mais, well suited to written arguments and essays." },
      { term: "de plus / en plus", definition: "Moreover / in addition — both add a further point onto an argument already being made." },
      { term: "donc / par conséquent", definition: "Therefore / consequently — both introduce a result or consequence following from what was just said." },
      { term: "sensibiliser les gens à...", definition: "To raise people's awareness of... — a useful, slightly advanced phrase for proposing an environmental solution." },
      { term: "réduire les déchets", definition: "To reduce waste — réduire is a regular -re verb; a very common phrase in environmental discussion." },
      { term: "les gaz à effet de serre", definition: "Greenhouse gases — literally 'gases with a greenhouse effect'; a technical but common GCSE phrase." },
      { term: "économiser l'énergie", definition: "To save energy — économiser is a regular -er verb, a false friend trap avoided here since it correctly means 'to save/economise', not 'to economise on quality'." },
    ],
    examTips: [
      {
        tip: "Structure an opinion answer as problem, reaction, then solution.",
        detail: "Naming the issue (la pollution), giving a reaction (ça m'inquiète), and proposing a fix (on devrait recycler plus) is a complete, developed structure that GCSE writing mark schemes specifically reward over description alone.",
      },
      {
        tip: "Use on devrait/on pourrait rather than a blunt command for suggesting solutions.",
        detail: "On devrait recycler plus reads as a considered suggestion; il faut recycler (a flat imperative-style necessity) is fine too, but varying between them shows more range than repeating one structure throughout an answer.",
      },
      {
        tip: "Swap out et/mais for richer connectives across a longer piece of writing.",
        detail: "Working cependant, de plus and donc into one paragraph — rather than relying only on et and mais — is one of the most direct ways to move an extended-writing answer into a higher mark band.",
      },
      {
        tip: "Don't confuse les déchets (physical rubbish/waste) with le gaspillage (the concept of wastefulness).",
        detail: "Réduire les déchets means reducing actual rubbish; éviter le gaspillage means avoiding waste in a broader sense (of resources, food, energy) — they overlap in meaning but aren't the same word.",
      },
      {
        tip: "Learn cependant as your formal-register alternative to mais for written arguments.",
        detail: "Mais is fine in speech and casual writing, but cependant reads as more sophisticated and essay-appropriate — useful specifically for extended writing tasks in Year 11.",
      },
      {
        tip: "Attach a reason with parce que/car to every on devrait/on pourrait suggestion.",
        detail: "On devrait réduire les déchets parce que la pollution nuit à l'environnement is a complete, justified suggestion — the bare suggestion alone is weaker without the reasoning attached.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'Le réchauffement climatique est un problème grave.'",
        accept: ["global warming is a serious problem", "climate change is a serious problem"],
        answer: "Global warming is a serious problem — grave here means 'serious', not the English 'grave' (burial), a false-friend trap worth noting.",
      },
      {
        question: "Translate into French: 'We should recycle more to protect the environment.'",
        accept: ["on devrait recycler plus pour protéger l'environnement"],
        answer: "On devrait recycler plus pour protéger l'environnement — on devrait is the softened conditional suggestion form of devoir.",
      },
      {
        question: "Complete with the correct structure: 'On ____ utiliser moins de plastique.' (we could)",
        accept: ["pourrait"],
        answer: "Pourrait — the conditional of pouvoir, used in on pourrait + infinitive to propose a possible solution without insisting on it.",
      },
      {
        question: "Complete the connective: 'La pollution augmente. ____, le gouvernement ne fait rien.' (however)",
        accept: ["cependant"],
        answer: "Cependant — introduces a contrast in a more formal register than mais, suited to written argument.",
      },
      {
        question: "Complete the connective: 'Il y a beaucoup de pollution. ____, les espèces animales disparaissent.' (therefore/so)",
        accept: ["donc"],
        answer: "Donc — introduces the consequence following from the stated problem, linking cause and effect.",
      },
      {
        question: "Translate into French: 'Many species are endangered because of deforestation.'",
        accept: ["beaucoup d'espèces sont en voie de disparition à cause de la déforestation"],
        answer: "Beaucoup d'espèces sont en voie de disparition à cause de la déforestation — à cause de introduces a negative cause, correctly paired with a negative outcome here.",
      },
      {
        question: "Translate into French: 'Furthermore, we must reduce greenhouse gas emissions.'",
        accept: ["de plus, il faut réduire les émissions de gaz à effet de serre", "de plus il faut réduire les émissions de gaz à effet de serre"],
        answer: "De plus, il faut réduire les émissions de gaz à effet de serre — de plus adds a further point onto an existing argument.",
      },
      {
        question: "Which phrase correctly means 'endangered species'?",
        choices: ["les espèces en voie de disparition", "les espèces en danger de mort", "les animaux perdus", "les espèces rares"],
        accept: ["les espèces en voie de disparition"],
        answer: "Les espèces en voie de disparition is the standard French phrase for endangered species. Les espèces rares means 'rare species', which is close but not the precise technical term.",
      },
      {
        question: "Which structure is a softened suggestion rather than a firm command?",
        choices: ["on devrait", "il faut", "on doit", "vous devez"],
        accept: ["on devrait"],
        answer: "On devrait (the conditional of devoir) softens a suggestion into 'we/one should', in contrast to il faut, on doit or vous devez, which all state a firmer necessity or obligation.",
      },
      {
        question: "In the sentence 'Cependant, le problème persiste', what part of speech is 'cependant'?",
        choices: ["A conjunction/connective", "A noun", "A verb", "An adjective"],
        accept: ["A conjunction/connective"],
        answer: "Cependant links this sentence to a previous idea with a contrast, functioning as a connective (a type of conjunction), not as a noun, verb or adjective.",
      },
      {
        question: "Which sentence correctly uses 'donc' to show a consequence?",
        choices: ["Il y a beaucoup de pollution, donc les poissons meurent.", "Il y a beaucoup de pollution, donc les poissons.", "Donc pollution, les poissons meurent.", "Les poissons meurent donc de pollution."],
        accept: ["Il y a beaucoup de pollution, donc les poissons meurent."],
        answer: "Il y a beaucoup de pollution, donc les poissons meurent correctly uses donc to link cause (pollution) with effect (fish dying) in standard word order.",
      },
      {
        question: "Give one environmental problem in French.",
        accept: ["le réchauffement climatique", "la pollution", "la déforestation", "le changement climatique", "le gaspillage", "les déchets"],
        answer: "Le réchauffement climatique, la pollution, la déforestation, le changement climatique, le gaspillage and les déchets are all correct — any genuine environmental problem, correctly spelled, is valid.",
      },
      {
        question: "Which phrase correctly means 'to raise people's awareness of...'?",
        choices: ["sensibiliser les gens à...", "réveiller les gens à...", "réussir les gens à...", "réduire les gens à..."],
        accept: ["sensibiliser les gens à..."],
        answer: "Sensibiliser les gens à... means to raise people's awareness of something. The other verbs (réveiller, réussir, réduire) are real French verbs but don't fit this meaning.",
      },
      {
        question: "Translate into English: 'On pourrait économiser l'énergie, mais il faut sensibiliser les gens d'abord.'",
        accept: ["we could save energy, but people need to be made aware first", "we could save energy, but we need to raise people's awareness first"],
        answer: "We could save energy, but people need to be made aware first — on pourrait proposes a possible solution, and il faut states the impersonal necessity that comes before it.",
      },
      {
        question: "Write an extended paragraph in French about an environmental problem: describe the problem, give your reaction, and propose a solution using on devrait or on pourrait. Use at least two connectives from cependant, de plus and donc.",
        answer:
          "There's no single right answer here — mark this one yourself. Check for a clearly named problem, a genuine personal reaction, a solution using on devrait/on pourrait + infinitive, and at least two of the target connectives used to link ideas rather than just listing sentences.",
      },
      {
        question: "Explain in English why examiners specifically reward connectives like cependant, de plus and donc in an extended environmental-issues answer, rather than just correct vocabulary alone.",
        answer:
          "Mark it yourself against this: connectives show that ideas are genuinely linked into an argument — cause and effect, contrast, addition — rather than being a list of separate correct sentences, which is what distinguishes a higher mark-band extended-writing answer from a basic one; vocabulary alone can be accurate without demonstrating this kind of structured, connected thinking.",
      },
    ],
    misconceptions: [
      {
        wrong: "Les déchets and le gaspillage mean exactly the same thing.",
        right: "Les déchets refers to physical rubbish/waste, while le gaspillage refers to the broader concept of wastefulness (of resources, food, energy) — they overlap but aren't interchangeable.",
      },
      {
        wrong: "On devrait and il faut carry exactly the same tone of urgency.",
        right: "On devrait (conditional) is a softer, more suggestion-like recommendation, while il faut states a firmer, more direct necessity — choosing between them changes how strongly the point is made.",
      },
      {
        wrong: "Grave in French environmental contexts refers to a burial site, matching its English spelling.",
        right: "In this context, grave means 'serious' (un problème grave, a serious problem) — a false-friend trap based on spelling, not the English word 'grave' relating to burial.",
      },
      {
        wrong: "Repeating et and mais throughout an extended writing answer is just as effective as varying connectives.",
        right: "Mark schemes reward a wider RANGE of connectives — using cependant, de plus and donc alongside et/mais shows more sophisticated control of language than repeating the same two words.",
      },
    ],
  },
  "french/french-exam-practice": {
    summary:
      "This final topic is exam-skills focused rather than a new vocabulary area: how to approach the exam itself, plus a grammar recap of two things students often leave until too late — using the imperfect fluently for description, and simple set phrases with an opinion flavour like il est important que and bien que. The practice questions deliberately mix content from across the whole GCSE French course, the way a real exam paper does.",
    keyFacts: [
      {
        heading: "Reading for gist vs detail",
        points: [
          "Reading for gist means getting the overall topic and general opinion of a text quickly, without translating every word — useful for the first read-through of any exam text.",
          "Reading for detail means going back to find specific facts, numbers, opinions or reasons once you know roughly what the text is about — this is where most marks are actually won or lost.",
          "Command words like traduisez (translate), résumez (summarise), and identifiez (identify) signal exactly what kind of reading is needed — spotting them before answering saves time and prevents answering the wrong type of question.",
          "Underlining key words (time markers, negatives, opinion words) on a first read-through makes the detailed second read faster and more accurate.",
        ],
      },
      {
        heading: "Structuring an extended writing answer",
        points: [
          "A strong extended answer typically follows: state a point, justify it with parce que/car, then extend it further with a connective like de plus or cependant.",
          "Using a range of tenses — present, passé composé, imperfect, near future, simple future — across one piece of writing shows the range examiners are specifically looking for, rather than staying in the present tense throughout.",
          "Opinions should be varied beyond j'aime/je n'aime pas: à mon avis (in my opinion), selon moi (according to me), je pense que (I think that) all add variety.",
          "Planning two or three key points before writing, each with a reason and an example, produces a more organised answer than writing continuously without a plan.",
        ],
      },
      {
        heading: "Common exam command words",
        points: [
          "Décris/décrivez (describe) asks for a factual account — what something is like — not an opinion.",
          "Compare/comparez (compare) asks for both similarities and differences, ideally using comparison connectives like alors que or par rapport à.",
          "Donne ton opinion sur / donnez votre opinion sur (give your opinion on) specifically requires a personal viewpoint with justification, not just facts.",
          "Explique pourquoi (explain why) asks for a reason, usually introduced with parce que or car, not just a restated fact.",
        ],
      },
      {
        heading: "Grammar recap: the imperfect for description",
        points: [
          "The imperfect is built from the nous form of the present tense minus -ons, plus -ais, -ais, -ait, -ions, -iez, -aient.",
          "J'étais (I was), j'avais (I had), il y avait (there was/were) are the three most useful imperfect forms for describing a past scene, memory or situation.",
          "Use the imperfect for how things WERE (ongoing state) and the passé composé for what HAPPENED (a single event): Quand j'étais petit, j'habitais à Lyon, et un jour, nous avons déménagé à Paris.",
          "A strong past-tense description mixes both tenses deliberately, not by accident — imperfect for the background, passé composé for the events that happened against it.",
        ],
      },
      {
        heading: "Grammar recap: opinion set phrases",
        points: [
          "Il est important que + subjunctive (it is important that) is a set phrase — at GCSE level, learn a small number of these as fixed chunks rather than trying to build the subjunctive freely: il est important qu'on protège l'environnement.",
          "Bien que + subjunctive (although) is another common set phrase: Bien que ce soit difficile, je vais continuer mes études (Although it is difficult, I am going to continue my studies).",
          "These phrases are worth learning whole, as fixed high-level chunks, because the full subjunctive is beyond what GCSE French requires students to generate from scratch.",
          "Dropping a correctly memorised phrase like bien que ce soit or il est important que into a written answer is a reliable way to show range without needing to master subjunctive formation in general.",
        ],
      },
    ],
    flashcards: [
      { term: "lire pour l'essentiel / le gist", definition: "Reading for gist — getting the general topic and opinion quickly, without translating every word." },
      { term: "lire en détail", definition: "Reading for detail — going back for specific facts, numbers, opinions or reasons once the general topic is clear." },
      { term: "à mon avis / selon moi", definition: "In my opinion / according to me — two ways to vary opinion language beyond j'aime/je n'aime pas." },
      { term: "décris / décrivez", definition: "Describe — an exam command word asking for a factual account, not an opinion." },
      { term: "donne/donnez ton/votre opinion sur", definition: "Give your opinion on — an exam command word specifically requiring a personal, justified viewpoint." },
      { term: "explique pourquoi", definition: "Explain why — an exam command word requiring a reason, usually with parce que or car, not just a restated fact." },
      { term: "j'étais / j'avais / il y avait", definition: "I was / I had / there was — the three most useful imperfect forms for describing a past scene or memory." },
      { term: "il est important que...", definition: "It is important that... — a fixed opinion phrase using the subjunctive, best learned whole at GCSE level." },
      { term: "bien que...", definition: "Although... — a fixed phrase using the subjunctive (bien que ce soit, although it is/be), learned as a chunk rather than built freely." },
      { term: "compare / comparez", definition: "Compare — an exam command word asking for both similarities and differences, ideally with a comparison connective." },
      { term: "un plan", definition: "A plan — preparing two or three key points, each with a reason and example, before writing an extended answer." },
      { term: "je pense que...", definition: "I think that... — a further way to vary opinion language, alongside à mon avis and selon moi." },
    ],
    examTips: [
      {
        tip: "Read the command word before you start answering, every time.",
        detail: "Décris, compare and donne ton opinion sur each require a genuinely different kind of answer — a factual description, a two-sided comparison, or a justified personal viewpoint — and answering the wrong type loses marks even if the French is accurate.",
      },
      {
        tip: "Mix at least three tenses into any extended writing answer.",
        detail: "Present, passé composé and near/simple future together demonstrate the range examiners are marking for — an answer that stays entirely in the present tense caps its own mark band regardless of vocabulary quality.",
      },
      {
        tip: "Learn il est important que and bien que as fixed phrases, not grammar to build from scratch.",
        detail: "GCSE French doesn't require generating the subjunctive freely, but dropping a correctly memorised subjunctive phrase into a written answer shows genuine range — treat these as vocabulary, not grammar to derive.",
      },
      {
        tip: "Plan two or three points with a reason and example each before writing an extended answer.",
        detail: "A brief plan produces a noticeably more organised, better-structured answer than writing continuously — this is a use-of-time strategy as much as a language one.",
      },
      {
        tip: "Vary opinion openers beyond j'aime/je n'aime pas.",
        detail: "À mon avis, selon moi and je pense que all signal a personal opinion and add lexical variety that a mark scheme specifically rewards over repeating the same phrase throughout an answer.",
      },
      {
        tip: "Use the imperfect for background and the passé composé for events, deliberately, in any past-tense narrative.",
        detail: "This is the single grammar point most likely to lift a past-tense description from adequate to strong — j'étais/il y avait for the scene, then a passé composé verb for what actually happened.",
      },
    ],
    practice: [
      {
        question: "Translate into English: 'Quand j'étais petit, j'habitais à Lyon, et un jour, nous avons déménagé à Paris.'",
        accept: ["when i was little, i lived in lyon, and one day, we moved to paris", "when i was young, i lived in lyon, and one day, we moved to paris"],
        answer: "When I was little, I lived in Lyon, and one day, we moved to Paris — j'habitais (imperfect) describes the ongoing past state, and avons déménagé (passé composé) marks the single event.",
      },
      {
        question: "Translate into French: 'Although it is difficult, I am going to continue my studies.'",
        accept: ["bien que ce soit difficile, je vais continuer mes études"],
        answer: "Bien que ce soit difficile, je vais continuer mes études — bien que ce soit is a fixed subjunctive phrase best learned whole at GCSE level.",
      },
      {
        question: "Complete with the correct imperfect form: 'Il y ____ beaucoup de monde à la fête.' (avoir)",
        accept: ["avait"],
        answer: "Avait — il y avait (there was/were) is the imperfect of il y a, used for describing a past scene.",
      },
      {
        question: "Complete with the correct form: 'Je joue au tennis, mais l'année dernière, je ____ (jouer) au foot.'",
        accept: ["jouais"],
        answer: "Jouais — the imperfect, used here to describe what used to be a regular/ongoing activity in the past, contrasted with the present-tense habit stated first.",
      },
      {
        question: "Translate into French: 'In my opinion, school is too stressful nowadays.'",
        accept: ["à mon avis, l'école est trop stressante de nos jours", "à mon avis l'école est trop stressante de nos jours"],
        answer: "À mon avis, l'école est trop stressante de nos jours — à mon avis is a varied opinion opener, and stressante agrees with the feminine noun école (via c'est/l'école est).",
      },
      {
        question: "Which command word would ask you to state both similarities and differences?",
        choices: ["Compare/comparez", "Décris/décrivez", "Explique pourquoi", "Donne ton opinion sur"],
        accept: ["Compare/comparez"],
        answer: "Compare/comparez specifically asks for both similarities and differences. Décris/décrivez wants a factual account, and the other two ask for a reason or a personal opinion.",
      },
      {
        question: "Which tense combination best describes 'setting a scene' and then 'a single event that happened'?",
        choices: ["Imperfect, then passé composé", "Passé composé, then imperfect", "Present, then present", "Simple future, then near future"],
        accept: ["Imperfect, then passé composé"],
        answer: "The imperfect sets an ongoing scene or background state, and the passé composé then marks the single completed event that interrupted or followed it — the standard narrative pattern in French.",
      },
      {
        question: "Which phrase would you use to vary an opinion beyond 'j'aime'?",
        choices: ["Selon moi", "Il y a", "Je vais", "J'ai fait"],
        accept: ["Selon moi"],
        answer: "Selon moi ('according to me') is an opinion phrase, alongside à mon avis and je pense que. The other options are not opinion openers at all.",
      },
      {
        question: "In the sentence 'Bien que ce soit difficile, j'aime le français', what part of speech is 'que' introducing?",
        choices: ["A subordinate clause with the subjunctive", "A direct object pronoun", "A preposition phrase", "A simple adjective"],
        accept: ["A subordinate clause with the subjunctive"],
        answer: "Que here is part of the fixed conjunction bien que, introducing a subordinate clause that uses the subjunctive form ce soit rather than the indicative c'est.",
      },
      {
        question: "Which command word specifically requires a reason, usually introduced by parce que?",
        choices: ["Explique pourquoi", "Décris", "Compare", "Résume"],
        accept: ["Explique pourquoi"],
        answer: "Explique pourquoi ('explain why') requires a reason, typically introduced with parce que or car — décris wants facts, compare wants similarities/differences, and résume wants a summary.",
      },
      {
        question: "Which sentence correctly mixes tenses to show range in an extended answer?",
        choices: ["L'année dernière, j'ai visité l'Espagne, et l'année prochaine, j'irai en Italie.", "L'année dernière, je visite l'Espagne, et l'année prochaine, je visite l'Italie.", "L'année dernière, j'irai en Espagne, et l'année prochaine, j'ai visité l'Italie.", "L'année dernière, je vais visiter l'Espagne, et l'année prochaine, j'ai visité l'Italie."],
        accept: ["L'année dernière, j'ai visité l'Espagne, et l'année prochaine, j'irai en Italie."],
        answer: "This option correctly uses the passé composé (j'ai visité) for a completed past action and the simple future (j'irai) for a future plan, matching each tense to the right time marker (l'année dernière, l'année prochaine).",
      },
      {
        question: "Give one strategy for reading an exam text effectively before answering detailed questions.",
        accept: ["read for gist first", "underline key words", "identify the command word", "skim for the general topic first", "look for time markers and negatives"],
        answer: "Reading for gist first, underlining key words (time markers, negatives, opinions), and identifying the command word are all valid strategies — any genuine reading strategy is a correct answer.",
      },
      {
        question: "Write an extended paragraph in French about your school life, giving an opinion using à mon avis or selon moi, and using at least three different tenses (e.g. present, passé composé, near/simple future).",
        answer:
          "There's no single right answer here — mark this one yourself. Check for a clear opinion opener, at least three genuinely different tenses used correctly, and ideally a connective (cependant, de plus, donc) linking ideas together.",
      },
      {
        question: "Explain in English why examiners specifically look for a mix of tenses in an extended GCSE French writing answer, rather than accuracy in a single tense being enough.",
        answer:
          "Mark it yourself against this: using a range of tenses accurately — not just the present — demonstrates control over the full grammar of the language, since talking about only the present moment is a fairly limited skill compared with narrating the past, describing an ongoing state, and projecting into the future; mark schemes are specifically designed to reward this range rather than repeated accuracy in one tense alone.",
      },
      {
        question: "Translate into French: 'It is important that we protect the environment, even though it is difficult.'",
        accept: ["il est important qu'on protège l'environnement, même si c'est difficile", "il est important que nous protégions l'environnement, même si c'est difficile"],
        answer: "Il est important qu'on protège l'environnement, même si c'est difficile — il est important que is the fixed opinion phrase, best learned as a chunk rather than built freely from subjunctive rules.",
      },
      {
        question: "A past-tense paragraph uses only the passé composé throughout, with no imperfect at all, to describe a childhood holiday including weather and feelings. What is the main weakness of this approach?",
        answer:
          "There's no single right answer here — mark this one yourself. A strong answer explains that using only the passé composé for background details like weather, feelings or routine treats them as single completed events rather than ongoing states, which is grammatically inaccurate and also reads as a flat list of events rather than a genuinely descriptive scene — the imperfect is specifically needed for that descriptive, scene-setting role.",
      },
    ],
    misconceptions: [
      {
        wrong: "Reading a text once, translating every word carefully, is the most efficient exam strategy.",
        right: "Reading first for gist (the general topic and opinion) and then going back for specific detail is faster and more accurate than translating word-by-word on a single read-through, especially under exam time pressure.",
      },
      {
        wrong: "Staying in the present tense throughout an extended writing answer is fine as long as the French is accurate.",
        right: "Mark schemes specifically reward a RANGE of tenses — present, past and future — so an accurate but present-tense-only answer caps its own mark band regardless of how correct the individual sentences are.",
      },
      {
        wrong: "Phrases like il est important que and bien que require fully understanding and building the subjunctive from scratch.",
        right: "At GCSE level, these are best learned as fixed, memorised chunks (il est important que, bien que ce soit) rather than grammar to generate freely — the full subjunctive isn't required knowledge for GCSE French.",
      },
      {
        wrong: "'Décris' and 'donne ton opinion sur' are asking for the same kind of answer, just phrased differently.",
        right: "Décris asks for a factual, descriptive account with no personal viewpoint required, while donne ton opinion sur specifically requires a justified personal opinion — answering one as if it were the other loses marks.",
      },
    ],
  },
};
