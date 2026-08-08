// COMPUTER SCIENCE — all 13 topics.
//
// HOW TO ADD OR EDIT: each entry is keyed "computer-science/topic-slug", and the
// slug must match the one in `lib/subjects.ts` exactly, because that key is what
// the URL is built from. The topic page picks up whatever is here
// automatically. Topics with no entry still work — they show "coming soon".
//
// ⚠️ ACCURACY: this is written to be correct for GCSE in general, but exam
// boards differ in emphasis and terminology (AQA 8525, OCR J277, Edexcel 1CP2).
// Anything a mark scheme is fussy about — exact register names, whether 1 KB is
// 1000 or 1024 bytes, which sorting algorithms are examinable — should be
// checked against your own board's specification before you trust it.

import type { TopicContent } from "./index";

export const COMPUTER_SCIENCE: Record<string, TopicContent> = {
  "computer-science/binary-and-data": {
    summary:
      "Computers have no idea what a letter, a photo or a song is. Everything inside a computer is stored as binary — long patterns of 1s and 0s — because a circuit can reliably tell the difference between 'current flowing' and 'no current', and not much else. This topic is about how those patterns represent numbers, text, images and sound, and how to convert between them by hand.",

    keyFacts: [
      {
        heading: "Units of data",
        points: [
          "A bit is a single 1 or 0. It is the smallest unit of data.",
          "A nibble is 4 bits.",
          "A byte is 8 bits.",
          "1 kilobyte (KB) = 1000 bytes; 1 MB = 1000 KB; 1 GB = 1000 MB; 1 TB = 1000 GB.",
          "Warning: some older textbooks say 1 KB = 1024 bytes. AQA and OCR both use 1000 in their current specifications — but check which your board wants, because the answers differ.",
        ],
      },
      {
        heading: "Binary to denary",
        points: [
          "Write the place values above the bits, doubling from right to left: 128, 64, 32, 16, 8, 4, 2, 1.",
          "Add up only the place values with a 1 underneath.",
          "Example: 01101101 → 64 + 32 + 8 + 4 + 1 = 109.",
          "An 8-bit number can store 0 to 255, which is 256 different values (2^8).",
        ],
      },
      {
        heading: "Denary to binary",
        points: [
          "Work left to right through the place values. Ask 'does this fit into what's left?' If yes write 1 and subtract it; if no write 0.",
          "Example: 200 → 128 fits (72 left), 64 fits (8 left), 32 no, 16 no, 8 fits (0 left), 4 no, 2 no, 1 no → 11001000.",
          "Pad your answer with leading zeros so it has the number of bits the question asked for.",
        ],
      },
      {
        heading: "Binary addition",
        points: [
          "0 + 0 = 0; 0 + 1 = 1; 1 + 1 = 0 carry 1; 1 + 1 + 1 = 1 carry 1.",
          "Work right to left, exactly like column addition in denary.",
          "Overflow happens when the answer needs more bits than are available — for example two 8-bit numbers adding to something needing 9 bits. The extra bit is lost and the answer is wrong.",
        ],
      },
      {
        heading: "Binary shifts",
        points: [
          "A left shift of n places multiplies the number by 2^n. Zeros fill in from the right.",
          "A right shift of n places divides the number by 2^n. Zeros fill in from the left.",
          "Bits pushed off the end are lost, so a right shift can lose data and make the result inaccurate (it rounds down).",
          "Example: 00001100 (12) shifted left 2 places → 00110000 (48), which is 12 × 4.",
        ],
      },
      {
        heading: "Hexadecimal",
        points: [
          "Hex is base 16. The digits are 0–9 then A, B, C, D, E, F, where A = 10 up to F = 15.",
          "One hex digit represents exactly 4 bits (a nibble). Two hex digits represent one byte.",
          "To convert binary to hex, split into nibbles from the right and convert each separately. 11011110 → 1101 (13 = D) and 1110 (14 = E) → DE.",
          "Hex is used because it is much shorter than binary and far easier for people to read, write and copy without making mistakes. The computer does not use hex — people do.",
        ],
      },
      {
        heading: "Characters",
        points: [
          "A character set is a list of characters and the binary code that represents each one.",
          "ASCII uses 7 bits, giving 128 characters. Extended ASCII uses 8 bits for 256.",
          "Unicode uses more bits and covers characters from most world writing systems plus emoji. It needs more storage per character than ASCII.",
          "In ASCII, 'A' is 65, 'a' is 97, and the character '0' is 48.",
          "Character codes run in order, so 'B' is 'A' + 1. This is why sorting alphabetically works by comparing numbers.",
        ],
      },
      {
        heading: "Images",
        points: [
          "A pixel is the smallest single point in a bitmap image.",
          "Resolution is the number of pixels, given as width × height.",
          "Colour depth is the number of bits used per pixel.",
          "Number of possible colours = 2^(colour depth). 1 bit gives 2 colours; 8 bits gives 256.",
          "File size in bits = width × height × colour depth.",
          "Metadata is data about the image rather than the image itself — dimensions, colour depth, date taken, camera settings.",
          "Increasing resolution or colour depth improves quality and increases file size.",
        ],
      },
      {
        heading: "Sound",
        points: [
          "Sound is analogue and must be sampled to be stored digitally. Sampling means measuring the amplitude of the wave at regular intervals.",
          "Sample rate is how many samples are taken per second, measured in hertz (Hz).",
          "Bit depth is the number of bits used to store each sample.",
          "File size in bits = sample rate × bit depth × duration in seconds.",
          "Higher sample rate or bit depth means better quality and a larger file.",
        ],
      },
      {
        heading: "Compression",
        points: [
          "Compression reduces file size, so files take less storage and transmit faster.",
          "Lossless compression loses no data — the original file can be restored exactly. Used where every bit matters: text, spreadsheets, program code.",
          "Lossy compression permanently removes data the human eye or ear is unlikely to notice. Files are much smaller but quality is reduced and cannot be recovered. Used for photos (JPEG) and music (MP3).",
          "Run length encoding (RLE) is lossless. It replaces runs of repeated values with the value and how many times it repeats, so it works best on data with long runs and can make random data larger.",
          "Huffman coding is lossless. Frequently used characters are given shorter binary codes and rare ones longer codes, reducing the total.",
        ],
      },
    ],

    flashcards: [
      { term: "Bit", definition: "A single binary digit, either 1 or 0. The smallest unit of data." },
      { term: "Nibble", definition: "4 bits — half a byte, and exactly what one hexadecimal digit represents." },
      { term: "Byte", definition: "8 bits. Enough to store one ASCII character or a number from 0 to 255." },
      { term: "Binary", definition: "A base-2 number system using only the digits 0 and 1." },
      { term: "Denary", definition: "The base-10 number system people normally use, with digits 0 to 9." },
      { term: "Hexadecimal", definition: "A base-16 number system using digits 0–9 and letters A–F, where one hex digit represents 4 bits." },
      { term: "Overflow", definition: "An error that occurs when the result of a calculation needs more bits than are available to store it." },
      { term: "Binary shift", definition: "Moving all the bits in a binary number left or right. A shift of n places left multiplies by 2^n; right divides by 2^n." },
      { term: "Character set", definition: "A list of characters and the unique binary code used to represent each one." },
      { term: "ASCII", definition: "A 7-bit character set representing 128 characters, mainly English letters, digits and punctuation." },
      { term: "Unicode", definition: "A character set using more bits than ASCII so it can represent characters from most of the world's writing systems, plus emoji." },
      { term: "Pixel", definition: "The smallest individual point in a bitmap image." },
      { term: "Resolution", definition: "The number of pixels in an image, stated as width × height." },
      { term: "Colour depth", definition: "The number of bits used to store the colour of each pixel." },
      { term: "Metadata", definition: "Data about a file rather than the file's content — for an image, things like dimensions, colour depth and date created." },
      { term: "Sampling", definition: "Measuring the amplitude of an analogue sound wave at regular intervals so it can be stored digitally." },
      { term: "Sample rate", definition: "The number of sound samples taken per second, measured in hertz." },
      { term: "Bit depth", definition: "The number of bits used to store each individual sound sample." },
      { term: "Compression", definition: "Reducing the size of a file so it uses less storage and transmits faster." },
      { term: "Lossless compression", definition: "Compression where no data is lost and the original file can be restored exactly." },
      { term: "Lossy compression", definition: "Compression that permanently removes some data to make the file much smaller; the original cannot be restored." },
      { term: "Run length encoding (RLE)", definition: "A lossless method that replaces runs of repeated values with the value and the number of times it repeats." },
      { term: "Huffman coding", definition: "A lossless method that gives frequently used characters shorter binary codes and rare characters longer ones." },
    ],

    examTips: [
      {
        tip: "Write the place values down every single time",
        detail:
          "128 64 32 16 8 4 2 1 above the bits, on every conversion question. It takes four seconds and removes almost every careless error. Examiners also award method marks, so visible working can rescue a wrong final answer.",
      },
      {
        tip: "Count your bits before you write the answer down",
        detail:
          "If the question says 8-bit, the answer must have 8 digits. Pad with leading zeros. Answers with the wrong number of bits get marked wrong even when the value is right.",
      },
      {
        tip: "For file size, work in bits first, then convert at the end",
        detail:
          "Use the formula to get bits, then divide by 8 for bytes, then by 1000 for KB. Doing the conversion halfway through is where most marks are lost. Always write the unit next to your answer.",
      },
      {
        tip: "Convert binary to hex through nibbles, never through denary",
        detail:
          "Split the binary into groups of 4 from the right and convert each group. Going binary → denary → hex takes longer and introduces an extra chance to slip up.",
      },
      {
        tip: "For overflow, name the cause, don't just say 'it's wrong'",
        detail:
          "Say that the result requires more bits than the register has available, so the extra bit is lost and the stored answer is incorrect. That sentence is the mark.",
      },
      {
        tip: "Justify lossy vs lossless using the context in the question",
        detail:
          "There is no universally correct answer. Program code or a spreadsheet needs lossless because a single changed bit breaks it. A photo on a website can use lossy because a small quality drop is unnoticeable and the saving is large. Refer to the scenario you were given.",
      },
      {
        tip: "Say by how much a shift multiplies or divides",
        detail:
          "'It multiplies the number' is usually not enough. Say 'a left shift of 3 places multiplies the number by 2^3, which is 8'.",
      },
      {
        tip: "Watch the command word",
        detail:
          "State or Give means a short fact with no explanation. Describe means say what happens. Explain means say what happens AND why, which normally needs the word 'because'. Writing a one-word answer to an Explain question caps your marks no matter how correct it is.",
      },
      {
        tip: "'Give two reasons' means two different reasons",
        detail:
          "Saying the same thing twice in different words scores once. If you write 'it's smaller' and 'it takes up less space', that is one mark, not two.",
      },
      {
        tip: "Don't answer 'because computers only understand 1s and 0s'",
        detail:
          "It is circular and examiners see it constantly. Say that electronic components have two reliable states — on and off, current or no current — so binary maps directly onto the hardware.",
      },
    ],

    workedExamples: [
      {
        question: "Convert the binary number 10110110 to denary.",
        steps: [
          "Write the place values above the bits, doubling from right to left: 128 64 32 16 8 4 2 1.",
          "Line the bits up underneath:  1  0  1  1  0  1  1  0",
          "Take only the place values with a 1 beneath them: 128, 32, 16, 4 and 2.",
          "Add them: 128 + 32 = 160, + 16 = 176, + 4 = 180, + 2 = 182.",
        ],
        answer: "182",
      },
      {
        question: "Convert 173 to an 8-bit binary number.",
        steps: [
          "Start at the largest place value and ask 'does it fit into what's left?'",
          "128 fits into 173 → write 1. Remaining: 173 − 128 = 45.",
          "64 does not fit into 45 → write 0.",
          "32 fits into 45 → write 1. Remaining: 45 − 32 = 13.",
          "16 does not fit into 13 → write 0.",
          "8 fits into 13 → write 1. Remaining: 13 − 8 = 5.",
          "4 fits into 5 → write 1. Remaining: 5 − 4 = 1.",
          "2 does not fit into 1 → write 0. 1 fits into 1 → write 1. Remaining: 0.",
          "Reading the digits in order gives 10101101. Check: it has 8 bits, as asked.",
        ],
        answer: "10101101",
      },
      {
        question: "Add the 8-bit numbers 01101101 and 01011010. State whether overflow occurs.",
        steps: [
          "Work right to left, exactly like column addition, carrying where needed.",
          "Column by column from the right: 1+0=1; 0+1=1; 1+0=1; 1+1=0 carry 1; 0+1+1(carry)=0 carry 1; 1+0+1(carry)=0 carry 1; 1+1+1(carry)=1 carry 1; 0+0+1(carry)=1.",
          "Result: 11000111.",
          "Count the bits in the answer: 8. The register holds 8. Nothing has been pushed off the end.",
          "Sanity check in denary: 109 + 90 = 199, and 11000111 is 128+64+4+2+1 = 199. ✓",
        ],
        answer: "11000111, and no overflow occurs because the result still fits in 8 bits.",
      },
      {
        question: "Convert the binary number 11011110 to hexadecimal.",
        steps: [
          "Split into nibbles of 4 bits, starting FROM THE RIGHT: 1101 and 1110.",
          "Convert the left nibble: 1101 = 8 + 4 + 1 = 13, and 13 in hex is D.",
          "Convert the right nibble: 1110 = 8 + 4 + 2 = 14, and 14 in hex is E.",
          "Write them in the same order as the nibbles.",
        ],
        answer: "DE",
      },
      {
        question:
          "An image is 800 pixels wide, 600 pixels high, with a colour depth of 24 bits. Calculate the file size in megabytes.",
        steps: [
          "Use the formula: file size in bits = width × height × colour depth.",
          "800 × 600 = 480,000 pixels.",
          "480,000 × 24 = 11,520,000 bits.",
          "Convert to bytes by dividing by 8: 11,520,000 ÷ 8 = 1,440,000 bytes.",
          "Convert to kilobytes: 1,440,000 ÷ 1000 = 1,440 KB.",
          "Convert to megabytes: 1,440 ÷ 1000 = 1.44 MB.",
        ],
        answer: "1.44 MB",
      },
      {
        question:
          "A 30-second sound clip is recorded at a sample rate of 44,100 Hz with a bit depth of 16. Calculate the file size in megabytes.",
        steps: [
          "Use the formula: file size in bits = sample rate × bit depth × duration in seconds.",
          "44,100 × 16 = 705,600 bits per second.",
          "705,600 × 30 = 21,168,000 bits.",
          "Divide by 8 for bytes: 2,646,000 bytes.",
          "Divide by 1000 for KB: 2,646 KB. Divide by 1000 again for MB: 2.646 MB.",
        ],
        answer: "2.646 MB (about 2.6 MB)",
      },
    ],

    practice: [
      {
        question: "Convert the binary number 01001011 to denary.",
        accept: ["75"],
        answer:
          "75. The place values with a 1 beneath them are 64, 8, 2 and 1, and 64 + 8 + 2 + 1 = 75.",
      },
      {
        question: "Convert the binary number 10101010 to denary.",
        accept: ["170"],
        answer: "170. That is 128 + 32 + 8 + 2 = 170.",
      },
      {
        question: "Convert 92 to an 8-bit binary number.",
        accept: ["01011100"],
        answer:
          "01011100. 64 fits leaving 28; 32 does not; 16 fits leaving 12; 8 fits leaving 4; 4 fits leaving 0. Note the leading zero — an 8-bit answer must have 8 digits.",
      },
      {
        question: "Convert 200 to an 8-bit binary number.",
        accept: ["11001000"],
        answer:
          "11001000. 128 fits leaving 72; 64 fits leaving 8; 32 and 16 do not; 8 fits leaving 0.",
      },
      {
        question: "Convert the binary number 11011110 to hexadecimal.",
        accept: ["de", "0xde"],
        answer:
          "DE. Split into nibbles from the right: 1101 = 13 = D, and 1110 = 14 = E.",
      },
      {
        question: "Convert the hexadecimal number 3F to denary.",
        accept: ["63"],
        answer: "63. In denary that is 3 x 16 + 15 = 48 + 15 = 63.",
      },
      {
        question: "How many bits are there in a nibble?",
        accept: ["4", "four"],
        answer: "4 bits. A nibble is half a byte, and exactly what one hexadecimal digit represents.",
      },
      {
        question: "How many bits are there in a byte?",
        accept: ["8", "eight"],
        answer:
          "8 bits. That is enough to store one ASCII character, or a number from 0 to 255.",
      },
      {
        question: "How many different values can be represented using 8 bits?",
        accept: ["256"],
        answer:
          "256. That is 2^8. The range is 0 to 255, which is 256 different values — a classic off-by-one trap.",
      },
      {
        question: "How many different colours can be represented with a colour depth of 4 bits?",
        accept: ["16"],
        answer: "16 colours, because 2^4 = 16.",
      },
      {
        question:
          "Perform a left shift of 2 places on 00010110. Give the resulting 8-bit binary number.",
        accept: ["01011000"],
        answer:
          "01011000. A left shift of 2 places multiplies by 2^2 = 4. The original is 22, and the result is 88.",
      },
      {
        question:
          "Add the 8-bit numbers 00110101 and 00010011. Give the answer in binary.",
        accept: ["01001000"],
        answer:
          "01001000. In denary that is 53 + 19 = 72, and 01001000 is 64 + 8 = 72. No overflow, since the result still fits in 8 bits.",
      },
      {
        question: "What is the denary ASCII code for the character 'A'?",
        accept: ["65"],
        answer:
          "65. Lower-case 'a' is 97, and the digit character '0' is 48. Because codes run in order, 'B' is 66.",
      },
      {
        question:
          "An image is 1024 pixels wide by 768 high with a colour depth of 8 bits. Give its file size in kilobytes.",
        accept: ["786.432", "786.432kb", "786.4", "786.4kb"],
        answer:
          "786.432 KB. 1024 x 768 = 786,432 pixels; x 8 = 6,291,456 bits; divide by 8 for bytes = 786,432; divide by 1000 for KB = 786.432 KB.",
      },
      {
        question:
          "A sound clip lasts 10 seconds, sampled at 44,100 Hz with a bit depth of 16. Give its file size in megabytes.",
        accept: ["0.882", "0.882mb", ".882"],
        answer:
          "0.882 MB. 44,100 x 16 = 705,600 bits per second; x 10 = 7,056,000 bits; divide by 8 = 882,000 bytes; divide by 1000 twice = 0.882 MB.",
      },
      {
        question:
          "Name the lossless compression technique that replaces runs of repeated values with the value and a count.",
        accept: ["run length encoding", "rle", "runlengthencoding", "run-length encoding"],
        answer:
          "Run length encoding (RLE). It works well on data with long runs, such as an image with large blocks of one colour, and can actually make noisy data larger.",
      },
      {
        question:
          "Explain why hexadecimal is used to represent binary values, when computers do not use hexadecimal themselves.",
        answer:
          "Hex is for humans, not machines. One hex digit replaces four binary digits, so a value is roughly a quarter of the length — much faster to read and far less error-prone to write down or copy. The computer still stores everything in binary. (No accept list: there are too many correct wordings for a computer to mark this fairly, so mark it yourself.)",
      },
      {
        question:
          "A programmer needs to compress a file of program source code. Should they use lossy or lossless compression? Justify your answer.",
        answer:
          "Lossless. Source code must be restored exactly — lossy compression permanently discards data, and one changed character would stop the program compiling or silently change what it does. Lossy is only acceptable where a small, unnoticeable quality reduction is fine, such as a photograph or a music file. (Mark this one yourself.)",
      },
    ],

    misconceptions: [
      {
        wrong: "\"A negative binary shift or a right shift always divides exactly.\"",
        right:
          "A right shift divides by 2 for each place, but any bits pushed off the right-hand end are lost forever. 00000101 (5) shifted right one place gives 00000010 (2), not 2.5. The result is rounded down and the lost bit cannot be recovered.",
      },
      {
        wrong: "\"Compression makes a file smaller, so it always helps.\"",
        right:
          "Run length encoding can make a file BIGGER. It stores runs as a value plus a count, so data with few repeats — a photograph of a busy scene, for instance — ends up with more pairs than original values. Compression suits the data it was designed for.",
      },
      {
        wrong: "\"Unicode is just a bigger version of ASCII, so it's always better.\"",
        right:
          "Unicode covers vastly more characters, but every character takes more storage. For a file of plain English text, ASCII is smaller and entirely sufficient. 'Better' depends on whether you need the extra characters.",
      },
      {
        wrong: "\"1 kilobyte is 1024 bytes.\"",
        right:
          "It depends who you ask, which is why exam questions specify. AQA and OCR currently use 1000 bytes = 1 KB in their specifications. 1024 bytes is properly called a kibibyte (KiB). Use whichever your board uses, and don't mix them within one calculation.",
      },
      {
        wrong: "\"Metadata is part of the image, so it doesn't affect file size.\"",
        right:
          "Metadata is stored in the same file and does add to its real size. Exam calculations normally ignore it unless the question gives you a figure — but the real file on disk is always slightly larger than the calculated pixel data.",
      },
      {
        wrong: "\"Higher colour depth means more pixels.\"",
        right:
          "Colour depth and resolution are different things. Resolution is how MANY pixels there are; colour depth is how many bits describe EACH pixel. Doubling the colour depth doubles the file size without adding a single pixel.",
      },
    ],
  },

  // ─────────────────────────── YEAR 9 ───────────────────────────

  "computer-science/digital-literacy": {
    summary:
      "Digital literacy is being able to use technology competently, safely and critically — not just clicking things until they work. It covers how the parts of a computer fit together, how to organise and find files, how to judge whether something online is true, and how to keep yourself and your data safe. It is the groundwork everything else in the course sits on.",
    keyFacts: [
      {
        heading: "Hardware and software",
        points: [
          "Hardware is the physical parts you can touch. Software is the programs and instructions.",
          "Input devices send data in (keyboard, mouse, microphone, scanner). Output devices send results out (monitor, speaker, printer).",
          "Storage devices hold data when the power is off. Processing happens in the CPU.",
          "System software runs the computer itself — the operating system and utilities. Application software does jobs for the user, like a browser or a word processor.",
          "The operating system manages memory, files, hardware, processes and users, and provides the interface.",
        ],
      },
      {
        heading: "Files and storage",
        points: [
          "A file extension tells the computer which program opens a file: .txt, .docx, .png, .mp3, .py.",
          "A sensible folder structure and consistent file naming make files findable months later. 'final_final2.docx' is a warning sign.",
          "Local storage is on your own device. Cloud storage is on a remote server accessed over the internet.",
          "Cloud storage benefits: access from anywhere, automatic backup, easy sharing. Drawbacks: needs a connection, ongoing cost, you are trusting someone else with your data.",
          "A backup is a second copy kept somewhere separate. A file in the same folder called 'copy' is not a backup.",
        ],
      },
      {
        heading: "Searching and evaluating information",
        points: [
          "Search engines rank results by relevance and popularity, not by truthfulness.",
          "Use specific search terms; quotation marks force an exact phrase.",
          "Judge a source by: who wrote it, whether they are qualified, when it was written, whether it cites evidence, and whether they are trying to sell you something.",
          "A domain ending .ac.uk or .gov.uk is generally more reliable than an anonymous blog, but this is a guideline, not a rule.",
          "Cross-check important claims against at least one independent source.",
        ],
      },
      {
        heading: "Staying safe online",
        points: [
          "A strong password is long and unique to that account. Length matters more than swapping letters for symbols.",
          "Two-factor authentication means something you know plus something you have, so a stolen password alone is not enough.",
          "Phishing is a message pretending to be from a trusted organisation, designed to make you hand over details or click a malicious link. Urgency is the classic warning sign.",
          "Never reuse a password across accounts — one leaked site then exposes all the others.",
          "Check for HTTPS and a plausible address before entering personal details. A padlock means the connection is encrypted, not that the site is honest.",
        ],
      },
      {
        heading: "Your digital footprint",
        points: [
          "A digital footprint is the trail of data you leave behind: posts, searches, purchases, locations.",
          "An active footprint is data you deliberately share. A passive footprint is collected without you doing anything, such as cookies and location history.",
          "Content posted online can be copied and screenshotted, so deleting the original does not reliably remove it.",
          "Employers, universities and colleges do look at public profiles.",
        ],
      },
      {
        heading: "Health and working responsibly",
        points: [
          "Repetitive strain injury, eye strain and back problems all come from poor posture and long unbroken sessions.",
          "Adjust screen height to eye level, take regular breaks, and use a chair with back support.",
          "Netiquette: tone is easily misread in text, ALL CAPS reads as shouting, and anything you would not say to someone's face should not be typed.",
        ],
      },
    ],
    flashcards: [
      { term: "Hardware", definition: "The physical components of a computer system that you can touch." },
      { term: "Software", definition: "The programs and instructions that tell the hardware what to do." },
      { term: "Operating system", definition: "System software that manages hardware, memory, files, processes and users, and provides the user interface." },
      { term: "Application software", definition: "Software that performs a task for the user, such as a browser, game or word processor." },
      { term: "Input device", definition: "Hardware that sends data into a computer system, such as a keyboard or microphone." },
      { term: "Output device", definition: "Hardware that presents data from a computer to the user, such as a monitor or speaker." },
      { term: "Cloud storage", definition: "Storing files on remote servers accessed over the internet rather than on your own device." },
      { term: "Backup", definition: "A separate copy of data kept elsewhere so it can be recovered if the original is lost or damaged." },
      { term: "File extension", definition: "The letters after the dot in a filename that indicate the file's type and which program opens it." },
      { term: "Phishing", definition: "A fraudulent message impersonating a trusted organisation to trick someone into revealing information or clicking a malicious link." },
      { term: "Two-factor authentication", definition: "Security requiring two different types of proof of identity, typically something you know and something you have." },
      { term: "Digital footprint", definition: "The trail of data a person leaves behind through their online activity." },
      { term: "Active footprint", definition: "Data a user deliberately shares online, such as a post or a review." },
      { term: "Passive footprint", definition: "Data collected about a user without deliberate action, such as cookies or location history." },
      { term: "HTTPS", definition: "A secure version of HTTP where data sent between browser and server is encrypted." },
      { term: "Netiquette", definition: "The accepted standards of polite and respectful behaviour when communicating online." },
      { term: "Repetitive strain injury (RSI)", definition: "Pain and damage to muscles and tendons caused by repeated movements, common with prolonged keyboard and mouse use." },
    ],
    examTips: [
      {
        tip: "Never answer a hardware/software question with an example alone",
        detail:
          "'A mouse' is not a definition. Say what the category means, then give the example: 'Hardware is the physical parts of the system, for example a mouse.' The definition carries the mark.",
      },
      {
        tip: "For 'benefits and drawbacks' questions, give a balanced pair",
        detail:
          "If asked for advantages and disadvantages of cloud storage, give the same number of each. Answering with three advantages and no disadvantages loses half the marks available however good the three are.",
      },
      {
        tip: "Say why a security measure works, not just what it is",
        detail:
          "'Use two-factor authentication' is a statement. 'Two-factor authentication means a stolen password alone is not enough to log in, because the attacker also needs the code from the user's phone' is an explanation. Explain questions need the because.",
      },
      {
        tip: "Answer in the context of the scenario given",
        detail:
          "These questions almost always describe a specific person — a small business owner, a school, a photographer. Refer to them. Generic answers that would fit any scenario score lower than ones that name the actual situation.",
      },
      {
        tip: "Don't confuse a padlock with a trustworthy site",
        detail:
          "HTTPS means the connection is encrypted so nobody can read the data in transit. It says nothing about whether the people running the site are honest. Criminals use HTTPS too.",
      },
      {
        tip: "Use the proper terms for footprints",
        detail:
          "Active means the user chose to share it. Passive means it was collected without deliberate action. Getting these the wrong way round is a common and easily avoided error.",
      },
      {
        tip: "Health questions want cause AND prevention",
        detail:
          "Name the problem, state what causes it, and give a specific measure that addresses that cause. 'RSI, caused by repeated keyboard use, reduced by taking regular breaks and using a wrist rest' is a complete answer.",
      },
    ],
  },

  "computer-science/programming-foundations": {
    summary:
      "Programming is writing precise instructions for a machine that will do exactly what you say and nothing you meant. Almost every program ever written is built from just three structures — sequence, selection and iteration — plus somewhere to store values. Get those four ideas solid and the rest of the course is detail.",
    keyFacts: [
      {
        heading: "The three programming constructs",
        points: [
          "Sequence: instructions run one after another, in order.",
          "Selection: the program chooses between paths — if, elif/else if, else.",
          "Iteration: instructions repeat. A count-controlled loop (for) repeats a set number of times; a condition-controlled loop (while) repeats until a condition changes.",
          "Every program is built from these three. There is no fourth.",
        ],
      },
      {
        heading: "Variables and constants",
        points: [
          "A variable is a named place in memory whose value can change while the program runs.",
          "A constant is a named value that cannot change once set.",
          "Assignment stores a value in a variable, usually written with = in code and ← in pseudocode.",
          "Use meaningful names: totalScore, not x. Readable code is a skill examiners award marks for.",
        ],
      },
      {
        heading: "Data types",
        points: [
          "Integer: a whole number, positive or negative, no decimal point.",
          "Real / float: a number with a decimal point.",
          "Boolean: True or False only.",
          "Character: a single letter, digit or symbol. String: a sequence of characters.",
          "Casting converts between types — int('7') gives the number 7, str(7) gives the text '7'. Input from a keyboard arrives as a string, so it usually needs casting before arithmetic.",
        ],
      },
      {
        heading: "Operators",
        points: [
          "Arithmetic: + - * / with ^ or ** for powers, DIV or // for integer division, MOD or % for the remainder.",
          "Comparison: == equal to, != not equal to, < > <= >=.",
          "Boolean: AND, OR, NOT — used to combine conditions.",
          "MOD is enormously useful: number MOD 2 == 0 tests whether a number is even.",
          "= assigns a value; == compares two values. Mixing them up is the single most common beginner error.",
        ],
      },
      {
        heading: "Input, output and validation",
        points: [
          "Input takes data from the user; output displays it.",
          "Validation checks data is sensible before using it: range check, type check, presence check, length check, format check.",
          "Validation checks the data is reasonable. Verification checks it was entered correctly, for example typing a password twice.",
          "Validation cannot tell whether data is true — only whether it is plausible. A valid date of birth can still be the wrong one.",
        ],
      },
      {
        heading: "Writing algorithms before code",
        points: [
          "Pseudocode is structured English describing the steps, with no fixed syntax rules.",
          "A flowchart shows the same thing as a diagram: oval for start/stop, parallelogram for input/output, rectangle for a process, diamond for a decision.",
          "Planning first catches logic errors before you have written a hundred lines around them.",
        ],
      },
      {
        heading: "Errors and debugging",
        points: [
          "A syntax error breaks the rules of the language, so the program will not run at all — a missing bracket or colon.",
          "A logic error runs perfectly but produces the wrong answer — using + where you meant *.",
          "A runtime error crashes the program while it is running, such as dividing by zero.",
          "A trace table tracks the value of each variable line by line and is the fastest way to find a logic error by hand.",
        ],
      },
    ],
    flashcards: [
      { term: "Sequence", definition: "Program instructions carried out one after another, in the order written." },
      { term: "Selection", definition: "A construct where the program chooses between different paths depending on a condition, using if/else." },
      { term: "Iteration", definition: "A construct that repeats a set of instructions, either a fixed number of times or until a condition changes." },
      { term: "Count-controlled loop", definition: "A loop that repeats a known, fixed number of times, typically a for loop." },
      { term: "Condition-controlled loop", definition: "A loop that keeps repeating while a condition is true, typically a while loop." },
      { term: "Variable", definition: "A named location in memory whose stored value can change while the program is running." },
      { term: "Constant", definition: "A named value that is set once and cannot be changed while the program runs." },
      { term: "Assignment", definition: "Storing a value in a variable." },
      { term: "Integer", definition: "A whole number data type, with no fractional or decimal part." },
      { term: "Real (float)", definition: "A data type for numbers that include a decimal point." },
      { term: "Boolean", definition: "A data type with only two possible values: True or False." },
      { term: "String", definition: "A data type holding a sequence of characters." },
      { term: "Casting", definition: "Converting a value from one data type to another, such as turning the string '7' into the integer 7." },
      { term: "MOD", definition: "An operator returning the remainder after integer division. 17 MOD 5 is 2." },
      { term: "DIV", definition: "An operator returning the whole-number part of a division, discarding the remainder. 17 DIV 5 is 3." },
      { term: "Validation", definition: "An automatic check that entered data is sensible and within expected limits before it is used." },
      { term: "Verification", definition: "A check that data has been entered correctly, for example by entering it twice and comparing." },
      { term: "Syntax error", definition: "An error breaking the rules of the programming language, which prevents the program from running." },
      { term: "Logic error", definition: "An error where the program runs without crashing but produces an incorrect result." },
      { term: "Trace table", definition: "A table recording the value of each variable at each step of an algorithm, used to find errors by hand." },
      { term: "Pseudocode", definition: "A way of describing an algorithm in structured English, without the strict syntax of a real language." },
    ],
    examTips: [
      {
        tip: "Fill in trace tables one row per line executed, not one per loop",
        detail:
          "Write down every variable's value each time a line changes it, including the loop counter. Rushing these is where marks vanish. If the table has columns you never fill in, you have probably missed an iteration.",
      },
      {
        tip: "Pseudocode is marked on logic, not spelling",
        detail:
          "You will not lose marks for writing 'if' instead of 'IF'. You will lose them for missing an else, forgetting to initialise a total to zero, or having a loop that never ends. Indent clearly so the structure is visible.",
      },
      {
        tip: "Always initialise your totals and counters",
        detail:
          "total = 0 before the loop, count = 0 before you start counting. Answers that add to a variable that was never given a starting value are marked wrong even if the rest is perfect.",
      },
      {
        tip: "Know the difference between = and == cold",
        detail:
          "One assigns, the other compares. In an exam, writing if score = 10 instead of if score == 10 is a syntax error and costs the mark.",
      },
      {
        tip: "For error questions, name the type and give an example",
        detail:
          "'Syntax error — a missing closing bracket, so the program will not run' scores. Just writing 'an error in the code' does not.",
      },
      {
        tip: "Remember that input() returns a string",
        detail:
          "If the question involves doing arithmetic on something the user typed, cast it first. Examiners specifically look for this and it is an easy mark to drop.",
      },
      {
        tip: "Choose the right loop and be ready to justify it",
        detail:
          "If you know how many repetitions are needed, use a count-controlled loop. If it depends on something happening — the user typing 'quit', a value being found — use a condition-controlled loop.",
      },
      {
        tip: "Validation questions want the TYPE of check named",
        detail:
          "Say 'a range check to make sure the age is between 0 and 120', not 'check the age is sensible'. Naming the check is the mark.",
      },
    ],
  },

  "computer-science/networks-basics": {
    summary:
      "A network is two or more devices connected so they can share data and resources. Everything from two laptops sharing a printer to the entire internet is the same idea at different scales. This topic covers what networks are made of, how devices find each other, and the trade-offs between the different ways of connecting them.",
    keyFacts: [
      {
        heading: "Types of network",
        points: [
          "A LAN (Local Area Network) covers a small geographical area such as a school, home or single site. The organisation usually owns the hardware and the connections.",
          "A WAN (Wide Area Network) covers a large geographical area and connects LANs together. The connections are usually leased from a telecommunications company.",
          "The internet is the largest WAN — a global network of interconnected networks.",
          "A PAN (Personal Area Network) covers a few metres, typically over Bluetooth.",
        ],
      },
      {
        heading: "Client-server and peer-to-peer",
        points: [
          "In a client-server network, clients request services from a central server that stores files and manages accounts.",
          "Client-server advantages: central backups, central security and updates, easier to manage many users. Disadvantages: expensive, needs expertise, and the server is a single point of failure.",
          "In a peer-to-peer network, all devices are equal and share files directly with each other.",
          "Peer-to-peer advantages: cheap, simple, no dedicated server needed. Disadvantages: backups and security must be handled on every machine, and performance drops as more peers join.",
          "Peer-to-peer suits a handful of machines. Client-server suits an organisation.",
        ],
      },
      {
        heading: "Network hardware",
        points: [
          "NIC (Network Interface Card): lets a device connect to a network. Every NIC has a unique MAC address.",
          "Switch: connects devices on a LAN and sends data only to the intended recipient, using MAC addresses.",
          "Router: connects different networks together and directs data between them using IP addresses. It is what joins your LAN to the internet.",
          "Wireless Access Point (WAP): allows devices to connect to a network wirelessly.",
          "Transmission media: copper cable (cheap, adequate), fibre optic (fast, long distance, expensive), or wireless.",
        ],
      },
      {
        heading: "Addressing",
        points: [
          "A MAC address is a permanent physical address assigned to the NIC by the manufacturer, written as 48 bits in hexadecimal. It identifies a device on a local network.",
          "An IP address identifies a device on a network and can change. IPv4 uses 32 bits written as four numbers 0-255; IPv6 uses 128 bits written in hexadecimal.",
          "IPv6 exists because IPv4 addresses ran out — 32 bits gives about 4.3 billion, which is not enough for the modern world.",
          "MAC addresses are used within a local network; IP addresses are used to route between networks.",
        ],
      },
      {
        heading: "Topologies",
        points: [
          "In a star topology every device connects to a central switch. If one cable fails only that device is affected, but a failure of the central switch takes down the whole network.",
          "In a mesh topology devices connect to many others, so data has multiple possible routes. Very resilient, but expensive with a lot of cabling. A full mesh connects every device to every other.",
          "Star is the standard choice for a school or office. Mesh is used where reliability matters most.",
        ],
      },
      {
        heading: "Wired vs wireless, and performance",
        points: [
          "Wired is generally faster, more reliable and more secure — an attacker needs physical access.",
          "Wireless is convenient and needs no cabling, but is slower, affected by distance, walls and interference, and easier to intercept.",
          "Bandwidth is the amount of data that can be transmitted per second.",
          "Factors affecting performance: bandwidth, number of users, transmission media, interference, and distance from the access point.",
          "Latency is the delay before data begins transferring. High bandwidth with high latency still feels slow.",
        ],
      },
    ],
    flashcards: [
      { term: "Network", definition: "Two or more devices connected together so they can share data and resources." },
      { term: "LAN", definition: "Local Area Network — a network covering a small geographical area, where the organisation typically owns the hardware." },
      { term: "WAN", definition: "Wide Area Network — a network covering a large geographical area, connecting LANs, usually over leased connections." },
      { term: "Client-server network", definition: "A network where clients request services and files from a central, more powerful server." },
      { term: "Peer-to-peer network", definition: "A network where all devices have equal status and share files directly with one another." },
      { term: "NIC", definition: "Network Interface Card — hardware allowing a device to connect to a network, each with a unique MAC address." },
      { term: "Switch", definition: "A device connecting others on a LAN, forwarding data only to the intended recipient using MAC addresses." },
      { term: "Router", definition: "A device connecting different networks and directing data between them using IP addresses." },
      { term: "Wireless Access Point", definition: "A device allowing wireless devices to connect to a wired network." },
      { term: "MAC address", definition: "A permanent 48-bit address assigned to a network interface card by the manufacturer, identifying a device on a local network." },
      { term: "IP address", definition: "An address identifying a device on a network, used to route data between networks, which can change over time." },
      { term: "IPv4", definition: "A 32-bit addressing scheme written as four numbers from 0 to 255, providing about 4.3 billion addresses." },
      { term: "IPv6", definition: "A 128-bit addressing scheme written in hexadecimal, created because IPv4 addresses ran out." },
      { term: "Star topology", definition: "A network layout where every device connects to a central switch." },
      { term: "Mesh topology", definition: "A network layout where devices connect to multiple others, so data has several possible routes." },
      { term: "Bandwidth", definition: "The amount of data that can be transmitted over a connection in a given time." },
      { term: "Latency", definition: "The delay between data being sent and beginning to arrive." },
      { term: "Fibre optic cable", definition: "Cable transmitting data as pulses of light, giving high speed over long distances at higher cost." },
    ],
    examTips: [
      {
        tip: "Switch uses MAC, router uses IP — learn this pair",
        detail:
          "It is asked constantly and the two are easily muddled. A switch works within one network using MAC addresses; a router works between networks using IP addresses.",
      },
      {
        tip: "For LAN vs WAN, mention ownership, not just size",
        detail:
          "'A LAN is small and a WAN is big' is a weak answer. Add that a LAN's hardware and connections are usually owned by the organisation, while a WAN's connections are typically leased from a third party.",
      },
      {
        tip: "Recommend a network type using the scenario's numbers",
        detail:
          "If the question says a business has 60 computers and needs central backups, say client-server and quote those details as your reason. A recommendation with no justification from the scenario scores badly.",
      },
      {
        tip: "For star topology, give both sides of the central switch",
        detail:
          "One cable failing affects only that device — that is the advantage. The central switch failing takes down everything — that is the disadvantage. Examiners look for the pair.",
      },
      {
        tip: "Say why IPv6 was needed, not just what it is",
        detail:
          "The mark is in the reason: 32-bit IPv4 gives roughly 4.3 billion addresses and the world ran out. IPv6's 128 bits removes that limit.",
      },
      {
        tip: "Distinguish bandwidth from latency",
        detail:
          "Bandwidth is how much data per second. Latency is the delay before it starts. A satellite link can have huge bandwidth and terrible latency — that is why it feels slow in a video call.",
      },
      {
        tip: "Wireless security answers need the reason",
        detail:
          "Say wireless is less secure because the signal travels through the air beyond the building, so an attacker does not need physical access to intercept it.",
      },
    ],
  },

  // ─────────────────────────── YEAR 10 ──────────────────────────

  "computer-science/systems-architecture": {
    summary:
      "The CPU is the part of a computer that actually does the work: it fetches instructions from memory, works out what they mean, and carries them out — billions of times a second, forever, in the same simple loop. This topic is about what is inside the processor, the fetch-decode-execute cycle, and what genuinely makes one computer faster than another.",
    keyFacts: [
      {
        heading: "Purpose of the CPU",
        points: [
          "The CPU (Central Processing Unit) processes data and instructions by continually carrying out the fetch-decode-execute cycle.",
          "Von Neumann architecture stores both programs and data in the same memory, and instructions are fetched and executed one at a time.",
          "The three main components are the Control Unit, the ALU and registers, plus cache.",
          "The Control Unit (CU) directs the operation of the processor: it decodes instructions and coordinates the other components.",
          "The ALU (Arithmetic Logic Unit) performs calculations and logical comparisons.",
        ],
      },
      {
        heading: "Registers",
        points: [
          "A register is a tiny, extremely fast piece of storage inside the CPU.",
          "Program Counter (PC): holds the memory address of the NEXT instruction to be fetched.",
          "Memory Address Register (MAR): holds the address currently being read from or written to.",
          "Memory Data Register (MDR): holds the data or instruction just fetched from, or about to be written to, memory.",
          "Accumulator (ACC): holds the result of calculations performed by the ALU.",
          "Some boards also use the Current Instruction Register (CIR), holding the instruction being decoded. Check which your specification requires.",
        ],
      },
      {
        heading: "The fetch-decode-execute cycle",
        points: [
          "Fetch: the address in the PC is copied to the MAR; the instruction at that address is copied into the MDR; the PC is incremented to point at the next instruction.",
          "Decode: the Control Unit works out what the instruction means and what is needed to carry it out.",
          "Execute: the instruction is carried out — a calculation in the ALU, data moved, or a jump to another address.",
          "The cycle then repeats, endlessly, for as long as the computer is on.",
          "The PC is incremented during fetch, before the instruction is executed. This detail is examined regularly.",
        ],
      },
      {
        heading: "CPU performance",
        points: [
          "Clock speed is the number of fetch-decode-execute cycles per second, measured in hertz. 3 GHz is 3 billion cycles per second. Higher is faster.",
          "Number of cores: each core can process its own instructions, so a quad-core CPU can handle four sets of instructions at once.",
          "More cores only helps if the software is written to use them; a single-threaded program gains nothing from extra cores.",
          "Cache size: cache is a small amount of very fast memory inside or near the CPU holding frequently used data and instructions. More cache means fewer slow trips to RAM.",
          "Cache is faster than RAM but much smaller and more expensive per byte.",
        ],
      },
      {
        heading: "Embedded systems",
        points: [
          "An embedded system is a computer built into a larger device to perform one specific, dedicated task.",
          "Examples: washing machine controllers, microwave timers, engine management systems, traffic lights, digital cameras.",
          "They are cheaper, smaller, more reliable and use less power than general-purpose computers, because they do only one job.",
          "A general-purpose computer, by contrast, can run many different programs chosen by the user.",
        ],
      },
    ],
    flashcards: [
      { term: "CPU", definition: "Central Processing Unit — the component that processes data and instructions by carrying out the fetch-decode-execute cycle." },
      { term: "Von Neumann architecture", definition: "A design where both program instructions and data are stored in the same memory and instructions are executed one at a time." },
      { term: "Control Unit", definition: "The CPU component that decodes instructions and coordinates the activity of the other components." },
      { term: "ALU", definition: "Arithmetic Logic Unit — the CPU component that performs calculations and logical comparisons." },
      { term: "Register", definition: "A very small, very fast storage location inside the CPU." },
      { term: "Program Counter", definition: "A register holding the memory address of the next instruction to be fetched." },
      { term: "Memory Address Register (MAR)", definition: "A register holding the memory address currently being read from or written to." },
      { term: "Memory Data Register (MDR)", definition: "A register holding data or an instruction that has just been fetched from memory or is about to be written to it." },
      { term: "Accumulator", definition: "A register that stores the result of calculations carried out by the ALU." },
      { term: "Fetch-decode-execute cycle", definition: "The continuous process by which the CPU retrieves an instruction from memory, works out what it means, and carries it out." },
      { term: "Clock speed", definition: "The number of fetch-decode-execute cycles a CPU performs per second, measured in hertz." },
      { term: "Core", definition: "An independent processing unit within a CPU, each able to carry out its own fetch-decode-execute cycle." },
      { term: "Cache", definition: "A small amount of very fast memory close to the CPU that stores frequently used instructions and data." },
      { term: "Embedded system", definition: "A computer built into a larger device to carry out one specific dedicated task." },
    ],
    examTips: [
      {
        tip: "Learn the FDE cycle as a sequence you can write in order",
        detail:
          "Examiners often award a mark per correct step in the correct order. Practise writing it out from memory: PC to MAR, instruction to MDR, PC incremented, decode, execute.",
      },
      {
        tip: "Say the PC is incremented during fetch",
        detail:
          "A frequent trap. The Program Counter is increased before the instruction is executed, so the CPU already knows where to go next. Getting the timing right is worth a mark on its own.",
      },
      {
        tip: "Never say more cores always means faster",
        detail:
          "Add the condition: only if the software is written to use multiple cores. That qualification is often the difference between two marks and one.",
      },
      {
        tip: "Compare CPUs on more than clock speed",
        detail:
          "If asked which of two CPUs is better, consider clock speed, cores AND cache together. A question giving you all three numbers wants you to weigh all three.",
      },
      {
        tip: "Define cache by speed and size, not just 'fast memory'",
        detail:
          "Say it is much faster than RAM but much smaller and more expensive, and that it holds frequently used data so the CPU makes fewer slow trips to RAM.",
      },
      {
        tip: "Embedded system answers need 'dedicated' and an example",
        detail:
          "Say it performs one specific dedicated task within a larger device, then name one — a washing machine controller works well because the alternative uses are obviously absurd.",
      },
      {
        tip: "Know your register abbreviations exactly",
        detail:
          "MAR is the address, MDR is the data. If you swap them the whole answer collapses. Remember: Address Register holds the Address.",
      },
    ],
  },

  "computer-science/algorithms": {
    summary:
      "An algorithm is a sequence of steps that solves a problem or completes a task. This topic is about how to design them, how to express them clearly before writing code, and the standard searching and sorting algorithms — including why some are dramatically faster than others on large amounts of data.",
    keyFacts: [
      {
        heading: "Computational thinking",
        points: [
          "Abstraction: removing unnecessary detail so you can focus on what matters. A tube map is abstraction — it ignores real distances and shows only connections.",
          "Decomposition: breaking a large problem into smaller sub-problems that can be solved separately.",
          "Algorithmic thinking: working out the sequence of steps needed to solve the problem.",
          "These three are how you turn a vague problem into something a computer can be told to do.",
        ],
      },
      {
        heading: "Expressing algorithms",
        points: [
          "Pseudocode: structured English with no strict syntax, used to plan logic.",
          "Flowcharts: oval = start/stop, parallelogram = input/output, rectangle = process, diamond = decision, arrows = flow.",
          "A decision diamond always has exactly one arrow in and two arrows out, labelled Yes and No.",
          "Both describe the same algorithm; the flowchart is easier to follow visually, pseudocode is easier to turn into code.",
        ],
      },
      {
        heading: "Linear search",
        points: [
          "Check each item in turn from the start until the target is found or the list ends.",
          "Works on unsorted data — this is its main advantage.",
          "Slow on large lists: on average it checks half the items, and in the worst case all of them.",
          "For a list of n items the worst case is n comparisons.",
        ],
      },
      {
        heading: "Binary search",
        points: [
          "The list MUST be sorted first. This is non-negotiable.",
          "Check the middle item. If it is the target, stop. If the target is smaller, discard the upper half; if larger, discard the lower half. Repeat on what remains.",
          "Each step halves the remaining items, so it is far faster than linear search on large lists.",
          "A list of 1,000,000 items takes about 20 checks; a linear search could take 1,000,000.",
          "The cost is that the data has to be sorted, which itself takes time.",
        ],
      },
      {
        heading: "Bubble sort",
        points: [
          "Compare each adjacent pair and swap them if they are in the wrong order. Repeat passes until a complete pass makes no swaps.",
          "After the first pass, the largest value is guaranteed to be in its final position at the end.",
          "Simple to understand and code, and memory-efficient.",
          "Very slow on large lists because of the number of comparisons and swaps.",
        ],
      },
      {
        heading: "Merge sort",
        points: [
          "Divide the list in half repeatedly until every sub-list contains one item — a single item is already sorted.",
          "Then merge pairs of sub-lists back together in order, repeatedly, until one sorted list remains.",
          "Much faster than bubble sort on large lists and its performance is consistent.",
          "Uses more memory, because the sub-lists have to be stored while merging.",
        ],
      },
      {
        heading: "Insertion sort",
        points: [
          "Take each item in turn and insert it into its correct position among the items already sorted.",
          "Efficient on small lists and on data that is already nearly sorted.",
          "Slow on large unsorted lists.",
        ],
      },
    ],
    flashcards: [
      { term: "Algorithm", definition: "A sequence of steps that solves a problem or completes a task." },
      { term: "Abstraction", definition: "Removing unnecessary detail from a problem so that only the essential features remain." },
      { term: "Decomposition", definition: "Breaking a large problem down into smaller, more manageable sub-problems." },
      { term: "Algorithmic thinking", definition: "Identifying the steps needed to solve a problem so they can be followed to reach a solution every time." },
      { term: "Linear search", definition: "A search that checks each item in a list in turn until the target is found or the list ends." },
      { term: "Binary search", definition: "A search on a sorted list that repeatedly checks the middle item and discards the half that cannot contain the target." },
      { term: "Bubble sort", definition: "A sort that repeatedly compares adjacent items and swaps them if they are in the wrong order, until no swaps are needed." },
      { term: "Merge sort", definition: "A sort that repeatedly splits the list into halves until each contains one item, then merges them back together in order." },
      { term: "Insertion sort", definition: "A sort that takes each item in turn and inserts it into its correct place among the already sorted items." },
      { term: "Pass", definition: "One complete run through the data in a sorting algorithm." },
      { term: "Flowchart", definition: "A diagram representing an algorithm using standard shapes for start, input/output, processes and decisions." },
      { term: "Trace table", definition: "A table recording the value of each variable at each step, used to follow an algorithm by hand." },
    ],
    examTips: [
      {
        tip: "Always state that binary search needs sorted data",
        detail:
          "If a question asks you to compare the two searches, or whether binary search can be used, this is almost always where a mark sits. Linear search works on unsorted data; binary search does not.",
      },
      {
        tip: "Show every pass when asked to demonstrate a sort",
        detail:
          "Write the full list after each pass, on its own line. Marks are given for the intermediate states, so a correct final answer with no working can score less than a wrong answer with clear passes.",
      },
      {
        tip: "Justify algorithm choice with the size and state of the data",
        detail:
          "Bubble sort for a short or nearly sorted list; merge sort for a large one. Always tie the reason back to the numbers in the question.",
      },
      {
        tip: "Give merge sort's cost as well as its speed",
        detail:
          "It is faster than bubble sort but uses more memory because sub-lists must be stored. Comparison questions want a trade-off, not a winner.",
      },
      {
        tip: "Define abstraction with an example, never on its own",
        detail:
          "'Removing unnecessary detail' is fine but thin. Add a tube map or a satnav ignoring what buildings look like, and the mark is secure.",
      },
      {
        tip: "In flowcharts, every decision diamond needs two labelled exits",
        detail:
          "One arrow in, two out, labelled Yes and No. Unlabelled branches lose marks even when the logic is right.",
      },
      {
        tip: "Say how many comparisons, not just 'it's faster'",
        detail:
          "Binary search halves the data each time, so a million items take about 20 checks against up to a million for linear search. Numbers turn a vague claim into a full answer.",
      },
    ],
  },

  "computer-science/programming": {
    summary:
      "This is the practical half of the course — actually writing programs that work. It builds on the three constructs with the tools real programs need: arrays to hold many values, subprograms to avoid repeating yourself, string handling, file access, and the defensive habits that stop a program falling over the moment a real user touches it.",
    keyFacts: [
      {
        heading: "Arrays and lists",
        points: [
          "An array is a data structure holding multiple values of the same type under one name.",
          "Each item is accessed by its index. Indexes usually start at 0, so the first item is array[0].",
          "An array of 10 items has indexes 0 to 9. Asking for array[10] causes an out-of-range error.",
          "A 2D array is an array of arrays, used for grids and tables: board[row][column].",
          "Loop through an array with a count-controlled loop, using the loop counter as the index.",
        ],
      },
      {
        heading: "Subprograms",
        points: [
          "A subprogram is a named block of code that can be called from elsewhere. Procedures and functions are both subprograms.",
          "A function returns a value; a procedure carries out a task without returning one.",
          "Parameters are the variables listed in the subprogram's definition; arguments are the actual values passed in when it is called.",
          "Benefits: avoids repeating code, makes programs easier to read, test and maintain, and lets several people work on different parts.",
          "A local variable exists only inside its subprogram. A global variable is accessible throughout the program. Prefer local — globals make bugs much harder to track down.",
        ],
      },
      {
        heading: "String handling",
        points: [
          "length: the number of characters in a string.",
          "substring: extracting part of a string by position.",
          "concatenation: joining strings together, usually with +.",
          "Converting case with upper and lower, which is essential when comparing user input.",
          "ASCII conversion: turning a character into its numeric code and back.",
          "Strings are indexed from 0, exactly like arrays.",
        ],
      },
      {
        heading: "File handling",
        points: [
          "Files let data persist after the program closes; variables do not.",
          "The pattern is always: open the file, read from or write to it, then close it.",
          "Write mode usually overwrites existing contents; append mode adds to the end. Choosing the wrong one destroys data.",
          "Reading line by line is normal for text files.",
        ],
      },
      {
        heading: "Defensive design and validation",
        points: [
          "Anticipate misuse: assume users will enter text where you expected numbers, or nothing at all.",
          "Validation types: range check, type check, presence check, length check, format check.",
          "Authentication confirms who the user is, usually with a username and password.",
          "Maintainability comes from meaningful names, comments explaining WHY, consistent indentation, and subprograms.",
          "Comments should explain the reason for the code, not restate it. '# add 1 to i' is worthless.",
        ],
      },
      {
        heading: "Testing",
        points: [
          "Iterative testing happens throughout development; final testing happens once the program is complete.",
          "Normal data: values that should be accepted, such as 25 for an age.",
          "Boundary data: values at the very edge of what is acceptable, such as 0 and 120.",
          "Erroneous (invalid) data: values that should be rejected, such as -5 or 'banana'.",
          "A test plan lists the test, the data used, the expected result and the actual result.",
          "Boundary data is where bugs hide, because > and >= are so easily confused.",
        ],
      },
    ],
    flashcards: [
      { term: "Array", definition: "A data structure holding multiple values of the same data type under a single name, accessed by index." },
      { term: "Index", definition: "The position number identifying an item in an array, normally starting at 0." },
      { term: "2D array", definition: "An array whose elements are themselves arrays, used to store grids or tables of data." },
      { term: "Subprogram", definition: "A named block of code that can be called from elsewhere in a program." },
      { term: "Function", definition: "A subprogram that returns a value to the part of the program that called it." },
      { term: "Procedure", definition: "A subprogram that carries out a task but does not return a value." },
      { term: "Parameter", definition: "A variable listed in a subprogram's definition that receives a value when it is called." },
      { term: "Argument", definition: "The actual value passed into a subprogram when it is called." },
      { term: "Local variable", definition: "A variable that only exists and can only be used inside the subprogram where it is declared." },
      { term: "Global variable", definition: "A variable that can be accessed from anywhere in the program." },
      { term: "Concatenation", definition: "Joining two or more strings together to form a single string." },
      { term: "Substring", definition: "A section of a string extracted by position." },
      { term: "Defensive design", definition: "Writing programs that anticipate misuse and invalid input so they do not crash or behave unpredictably." },
      { term: "Authentication", definition: "Confirming the identity of a user, typically through a username and password." },
      { term: "Normal data", definition: "Test data within the acceptable range that the program should process correctly." },
      { term: "Boundary data", definition: "Test data at the extreme edges of the acceptable range." },
      { term: "Erroneous data", definition: "Test data that the program should reject because it is invalid." },
      { term: "Test plan", definition: "A document listing each test, the data used, the expected result and the actual result." },
    ],
    examTips: [
      {
        tip: "Remember arrays start at 0",
        detail:
          "An array of 10 items has indexes 0 to 9. Loops that run from 1 to 10 are the classic off-by-one error and examiners deliberately test it.",
      },
      {
        tip: "Function returns, procedure does not — say the word 'return'",
        detail:
          "This distinction comes up almost every year. Use the word explicitly: 'a function returns a value to the calling code'.",
      },
      {
        tip: "Give all three categories in testing questions",
        detail:
          "Normal, boundary and erroneous. If asked for test data for an age between 0 and 120, offer something like 25, then 0 and 120, then -1 and 'banana'. Give an actual value, not a description.",
      },
      {
        tip: "Boundary data means ON the boundary",
        detail:
          "For a range of 0 to 120, the boundaries are 0 and 120, and just outside them -1 and 121. Writing 60 as boundary data is a guaranteed lost mark.",
      },
      {
        tip: "Justify subprograms with more than 'it's tidy'",
        detail:
          "Say it avoids duplicating code, makes the program easier to test because each part can be checked separately, and allows a team to work on different sections at once.",
      },
      {
        tip: "Write real code in code questions, not a description",
        detail:
          "'I would use a loop to go through the array' scores nothing. Write the loop. Approximate syntax is generally accepted; a paragraph about what you would do is not.",
      },
      {
        tip: "Comment the why, not the what",
        detail:
          "Comments restating the code earn nothing and can lose marks for maintainability. Explain the reasoning behind a decision instead.",
      },
      {
        tip: "Prefer local variables and be able to justify it",
        detail:
          "Local variables cannot be changed accidentally by other parts of the program, which makes bugs easier to find and the code safer to modify.",
      },
    ],
  },

  "computer-science/cyber-security": {
    summary:
      "Cyber security is about the threats to computer systems and the measures that defend against them. The single most important idea in the topic is that most successful attacks do not defeat the technology at all — they trick a person. That is why the defences split into technical measures and human ones, and why the human ones matter most.",
    keyFacts: [
      {
        heading: "Malware",
        points: [
          "Malware is any software written to cause harm or damage to a computer system.",
          "Virus: attaches itself to a file and spreads when that file is opened or shared. It needs a host and a user action.",
          "Worm: spreads by itself across networks without needing a host file or any user action, which makes it spread far faster.",
          "Trojan: disguises itself as legitimate software so the user installs it willingly. It does not self-replicate.",
          "Ransomware: encrypts the user's files and demands payment for the key.",
          "Spyware: secretly records what the user does, including keystrokes, and sends it to the attacker.",
        ],
      },
      {
        heading: "Social engineering",
        points: [
          "Social engineering means manipulating people into giving away information or access, rather than attacking the technology.",
          "Phishing: fraudulent emails or messages impersonating a trusted organisation to obtain details or spread malware.",
          "Shouldering (shoulder surfing): watching someone enter a PIN or password.",
          "Blagging (pretexting): inventing a scenario to persuade someone to hand over information, such as pretending to be IT support.",
          "Pharming: redirecting a user from a legitimate website to a fake copy to harvest their details.",
          "People are described as the weakest point in a system because no firewall stops someone who has been persuaded to hand over their password.",
        ],
      },
      {
        heading: "Technical attacks",
        points: [
          "Brute force attack: trying every possible password combination until one works. Slow, but effective against short or common passwords.",
          "Denial of service (DoS): flooding a server with requests so it cannot respond to genuine users. A DDoS uses many machines at once.",
          "Data interception: capturing data as it travels across a network, for example over unsecured wireless.",
          "SQL injection: entering SQL commands into an input box so the database executes them, potentially revealing or destroying data.",
        ],
      },
      {
        heading: "Prevention — technical",
        points: [
          "Firewall: monitors incoming and outgoing traffic and blocks anything not meeting the security rules.",
          "Anti-malware software: scans for, detects and removes malware, and must be kept updated to recognise new threats.",
          "Encryption: scrambles data so that if it is intercepted it cannot be understood without the key. It does not prevent interception, only makes the stolen data useless.",
          "Automatic software updates patch known vulnerabilities. Most successful attacks exploit holes that were fixed months earlier.",
          "Penetration testing: deliberately attacking your own system to find weaknesses before criminals do.",
        ],
      },
      {
        heading: "Prevention — people and policy",
        points: [
          "User access levels: users only get access to what their role needs, so a compromised account limits the damage.",
          "Strong password policies: long passwords, changed if breached, never reused across accounts.",
          "Staff training so people recognise phishing and know not to share credentials.",
          "Physical security: locked server rooms, ID cards, CCTV.",
          "Anti-malware and firewalls do nothing against an employee who is talked into revealing a password, which is exactly why training belongs on this list.",
        ],
      },
    ],
    flashcards: [
      { term: "Malware", definition: "Software written with the intent of causing harm or damage to a computer system." },
      { term: "Virus", definition: "Malware that attaches to a file and spreads when that file is opened or shared, requiring user action." },
      { term: "Worm", definition: "Malware that replicates and spreads across networks by itself, without needing a host file or user action." },
      { term: "Trojan", definition: "Malware disguised as legitimate software so the user installs it themselves." },
      { term: "Ransomware", definition: "Malware that encrypts a user's files and demands payment in exchange for the decryption key." },
      { term: "Spyware", definition: "Malware that secretly monitors and records a user's activity and sends it to an attacker." },
      { term: "Social engineering", definition: "Manipulating people into revealing information or granting access, rather than attacking the technology." },
      { term: "Phishing", definition: "Fraudulent messages impersonating a trusted organisation to obtain personal details or spread malware." },
      { term: "Shouldering", definition: "Observing someone entering a PIN or password in order to steal it." },
      { term: "Blagging", definition: "Inventing a false scenario to persuade someone to give away information or access." },
      { term: "Pharming", definition: "Redirecting a user from a legitimate website to a fraudulent copy in order to steal their details." },
      { term: "Brute force attack", definition: "Systematically trying every possible combination until the correct password is found." },
      { term: "Denial of service attack", definition: "Flooding a server with requests so it cannot respond to legitimate users." },
      { term: "SQL injection", definition: "Entering SQL commands into an input field so that a database executes them, exposing or damaging data." },
      { term: "Firewall", definition: "Hardware or software that monitors traffic entering and leaving a network and blocks anything against the security rules." },
      { term: "Encryption", definition: "Scrambling data so it cannot be understood without the correct key, making intercepted data useless." },
      { term: "Penetration testing", definition: "Deliberately attempting to attack your own system to identify weaknesses before criminals exploit them." },
      { term: "User access levels", definition: "Restricting each user's access to only the data and functions their role requires." },
    ],
    examTips: [
      {
        tip: "Virus needs a host and a user; a worm needs neither",
        detail:
          "This is the most commonly examined distinction in the topic. Say the worm self-replicates across a network without user action, which is why it spreads faster.",
      },
      {
        tip: "Say what encryption does and does not do",
        detail:
          "Encryption does not stop data being intercepted. It makes intercepted data unreadable without the key. Answers claiming it prevents interception lose the mark.",
      },
      {
        tip: "Match every threat you name to a matching defence",
        detail:
          "If the question gives a scenario, pair them: phishing → staff training; brute force → strong passwords and attempt limits; malware → anti-malware and updates. A mismatched pair scores nothing.",
      },
      {
        tip: "Include a human measure, not only technical ones",
        detail:
          "Questions asking how an organisation improves security expect a mix. Firewalls and anti-malware alone leave marks on the table — add training, access levels and password policy.",
      },
      {
        tip: "Explain WHY user access levels help",
        detail:
          "Because if one account is compromised the attacker can only reach what that role could reach, limiting the damage. The reason is the mark, not the term.",
      },
      {
        tip: "Use the exact names for social engineering methods",
        detail:
          "Shouldering, blagging, phishing and pharming are all distinct and all examinable. Describing the behaviour without naming it usually scores less.",
      },
      {
        tip: "Name penetration testing when asked about finding weaknesses",
        detail:
          "The phrase examiners want is testing your own system to find vulnerabilities before an attacker does.",
      },
    ],
  },

  "computer-science/databases": {
    summary:
      "A database is an organised store of data that can be searched, sorted and updated efficiently. The core insight is that storing everything in one big table causes the same information to be repeated over and over — and repeated data eventually contradicts itself. Splitting data into linked tables solves that, and SQL is how you ask questions of the result.",
    keyFacts: [
      {
        heading: "Structure",
        points: [
          "A table holds data about one type of thing, such as students or books.",
          "A record (row) is all the data about one individual item.",
          "A field (column) is one piece of information stored about every item.",
          "A primary key is a field that uniquely identifies each record in a table. No two records may share it.",
          "A good primary key is a value that can never be duplicated — a StudentID, not a surname.",
        ],
      },
      {
        heading: "Flat file vs relational",
        points: [
          "A flat file database stores everything in a single table.",
          "This causes data redundancy: the same information repeated in many records.",
          "Redundancy wastes storage and, more seriously, causes inconsistency — update an address in one row and forget another, and the database now contradicts itself.",
          "A relational database splits data into multiple linked tables, storing each piece of information once.",
          "A foreign key is a field in one table that refers to the primary key of another, creating the link between them.",
        ],
      },
      {
        heading: "Data types and validation",
        points: [
          "Common field types: text/string, integer, real, Boolean, date/time.",
          "Choosing the right type saves storage and prevents nonsense values.",
          "Validation rules restrict what can be entered: range checks, format checks, presence checks, lookup lists.",
          "A phone number is stored as text, not as a number, because leading zeros must be preserved and no arithmetic is ever done on it.",
        ],
      },
      {
        heading: "SQL — retrieving data",
        points: [
          "SELECT chooses which fields to return; * means all fields.",
          "FROM names the table.",
          "WHERE filters which records are returned.",
          "ORDER BY sorts results; ASC is ascending (the default) and DESC is descending.",
          "Example: SELECT Name, Grade FROM Students WHERE Grade > 5 ORDER BY Name ASC;",
          "Conditions can be combined with AND and OR. Text values go in quotes; numbers do not.",
          "LIKE with a wildcard matches partial text, for example WHERE Name LIKE 'S%'.",
        ],
      },
      {
        heading: "SQL — changing data",
        points: [
          "INSERT INTO table (field1, field2) VALUES (value1, value2); adds a new record.",
          "UPDATE table SET field = value WHERE condition; changes existing records.",
          "DELETE FROM table WHERE condition; removes records.",
          "An UPDATE or DELETE without a WHERE clause applies to every record in the table. This is how people delete entire databases by accident.",
        ],
      },
    ],
    flashcards: [
      { term: "Database", definition: "An organised, persistent store of data that can be searched, sorted and updated efficiently." },
      { term: "Table", definition: "A structure within a database holding data about one type of entity." },
      { term: "Record", definition: "A single row in a table, containing all the data about one item." },
      { term: "Field", definition: "A single column in a table, representing one piece of information stored about every record." },
      { term: "Primary key", definition: "A field that uniquely identifies each record in a table, with no duplicates permitted." },
      { term: "Foreign key", definition: "A field in one table that refers to the primary key of another table, creating a link between them." },
      { term: "Flat file database", definition: "A database storing all data in a single table, which leads to repeated data." },
      { term: "Relational database", definition: "A database storing data across multiple linked tables so each piece of information is stored only once." },
      { term: "Data redundancy", definition: "The unnecessary repetition of the same data in multiple places within a database." },
      { term: "Data inconsistency", definition: "Where repeated copies of the same data disagree because one was updated and another was not." },
      { term: "SELECT", definition: "The SQL keyword specifying which fields to retrieve." },
      { term: "WHERE", definition: "The SQL keyword that filters which records are affected by a query." },
      { term: "ORDER BY", definition: "The SQL keyword that sorts returned records, ascending by default or descending with DESC." },
      { term: "INSERT INTO", definition: "The SQL statement used to add a new record to a table." },
      { term: "UPDATE", definition: "The SQL statement used to change data in existing records." },
      { term: "DELETE FROM", definition: "The SQL statement used to remove records from a table." },
    ],
    examTips: [
      {
        tip: "End SQL statements with a semicolon and quote your text",
        detail:
          "Text values need quotes; numbers do not. WHERE Surname = 'Smith' but WHERE Age = 15. Small syntax slips cost marks in questions that are otherwise correct.",
      },
      {
        tip: "Write SQL keywords in capitals",
        detail:
          "Not strictly required by SQL, but it makes the structure obvious to a marker and is the convention every mark scheme uses.",
      },
      {
        tip: "Explain redundancy through inconsistency",
        detail:
          "Do not stop at 'it wastes space'. The real problem is that repeated data gets updated in one place and not another, so the database ends up contradicting itself. That is the answer worth full marks.",
      },
      {
        tip: "Choose primary keys that genuinely cannot repeat",
        detail:
          "Names, emails and phone numbers can all be shared or changed. An ID field created for the purpose is the safe answer, and justify it by saying it is guaranteed unique.",
      },
      {
        tip: "Never write UPDATE or DELETE without WHERE",
        detail:
          "Without it the statement affects every record in the table. Examiners include this trap, and it is also how real databases get destroyed.",
      },
      {
        tip: "Read the question for which fields to SELECT",
        detail:
          "If it asks for names and grades, do not use SELECT *. Returning more than was asked for loses the mark.",
      },
      {
        tip: "Define a foreign key by what it does",
        detail:
          "Say it is a field in one table that refers to the primary key of another, and that this is what links the tables together.",
      },
    ],
  },

  // ─────────────────────────── YEAR 11 ──────────────────────────

  "computer-science/boolean-logic": {
    summary:
      "Every decision a computer makes comes down to combinations of three operations: AND, OR and NOT. Logic gates are the physical circuits that carry them out, and truth tables are how we work out what a circuit does for every possible input. This is one of the most reliably scoring topics in the course, because the rules never change and the questions are almost always the same shape.",
    keyFacts: [
      {
        heading: "The three basic operations",
        points: [
          "AND: the output is 1 only if BOTH inputs are 1. Think of it as 'this and also that'.",
          "OR: the output is 1 if EITHER input is 1, or both. Think 'at least one'.",
          "NOT: has only one input, and inverts it. 1 becomes 0, 0 becomes 1.",
          "In Boolean expressions, AND is often written as a dot or ∧, OR as + or ∨, and NOT as a bar over the letter or ¬.",
        ],
      },
      {
        heading: "Truth tables",
        points: [
          "A truth table lists every possible combination of inputs and the resulting output.",
          "With 2 inputs there are 4 rows; with 3 inputs there are 8. The number of rows is 2^(number of inputs).",
          "Fill the input columns systematically so no combination is missed: for two inputs, 00, 01, 10, 11.",
          "AND: 0 0 → 0, 0 1 → 0, 1 0 → 0, 1 1 → 1.",
          "OR: 0 0 → 0, 0 1 → 1, 1 0 → 1, 1 1 → 1.",
          "For a circuit with several gates, add a column for each intermediate output and work left to right.",
        ],
      },
      {
        heading: "Logic gate symbols",
        points: [
          "AND gate: flat back with a rounded, D-shaped front.",
          "OR gate: curved back with a pointed front.",
          "NOT gate: a triangle with a small circle on the output. The circle is what means 'invert'.",
          "A small circle on the output of any gate means the result is inverted, giving NAND and NOR.",
          "NAND is AND followed by NOT; NOR is OR followed by NOT. Check whether your specification requires these.",
        ],
      },
      {
        heading: "Combining gates",
        points: [
          "Logic circuits combine gates, with the output of one feeding the input of another.",
          "To read a diagram, label each intermediate wire, then build the truth table column by column.",
          "To turn an expression into a circuit, work outwards from the innermost brackets.",
          "Example: Q = (A AND B) OR (NOT C) needs an AND gate, a NOT gate, and an OR gate combining their outputs.",
        ],
      },
      {
        heading: "Why it matters",
        points: [
          "Logic gates are built from transistors, which is how physical hardware makes decisions.",
          "The same operators appear in programming conditions: if age > 12 AND height > 140.",
          "Boolean logic underpins binary addition — the circuits that add numbers are built entirely from these gates.",
        ],
      },
    ],
    flashcards: [
      { term: "AND gate", definition: "A logic gate whose output is 1 only when both of its inputs are 1." },
      { term: "OR gate", definition: "A logic gate whose output is 1 when at least one of its inputs is 1." },
      { term: "NOT gate", definition: "A logic gate with a single input that inverts it, turning 1 into 0 and 0 into 1." },
      { term: "NAND gate", definition: "A logic gate producing the opposite of AND: the output is 0 only when both inputs are 1." },
      { term: "NOR gate", definition: "A logic gate producing the opposite of OR: the output is 1 only when both inputs are 0." },
      { term: "Truth table", definition: "A table listing every possible combination of inputs to a logic circuit and the resulting output." },
      { term: "Logic gate", definition: "An electronic circuit that performs a Boolean operation on one or more binary inputs." },
      { term: "Boolean expression", definition: "A statement combining inputs with AND, OR and NOT that evaluates to true or false." },
      { term: "Logic diagram", definition: "A drawing showing how logic gates are connected together to form a circuit." },
      { term: "Inverter", definition: "Another name for a NOT gate, shown as a triangle with a small circle on the output." },
    ],
    examTips: [
      {
        tip: "Count your truth table rows before you start",
        detail:
          "2 inputs means 4 rows, 3 inputs means 8. Draw all the rows first and fill the input columns in a strict binary counting order, so no combination can be missed.",
      },
      {
        tip: "Add a column for every intermediate output",
        detail:
          "In a multi-gate circuit, give each internal wire its own column and work left to right. Trying to do it all in your head is the single biggest source of lost marks here.",
      },
      {
        tip: "The circle means NOT",
        detail:
          "A small circle on a gate's output inverts it. Spotting the circle is the difference between AND and NAND, and it is easy to miss when reading a diagram quickly.",
      },
      {
        tip: "AND means both, OR means at least one",
        detail:
          "Everyday English uses 'or' to mean one or the other but not both. In Boolean logic, OR is true when both inputs are 1 as well. This trips people up constantly.",
      },
      {
        tip: "Work outwards from the brackets when drawing circuits",
        detail:
          "Build the innermost bracket first, then feed its output into the next gate. Trying to draw left to right from the expression produces the wrong circuit.",
      },
      {
        tip: "Show your working even here",
        detail:
          "A completed truth table IS your working. If the final answer is wrong but the intermediate columns are right, method marks are still available.",
      },
    ],
  },

  "computer-science/data-representation": {
    summary:
      "This is the exam-level treatment of everything a computer stores: numbers, characters, images and sound, plus compression. It revisits the ideas from Binary & data, but the focus here is applying them — doing the calculations accurately under time pressure and explaining the trade-offs in words that earn marks.",
    keyFacts: [
      {
        heading: "Units, and the calculation order",
        points: [
          "1 bit; 4 bits = 1 nibble; 8 bits = 1 byte; 1000 bytes = 1 KB; 1000 KB = 1 MB; 1000 MB = 1 GB; 1000 GB = 1 TB.",
          "Every file size question follows the same order: work out the size in BITS, divide by 8 for bytes, then divide by 1000 for each step up the units.",
          "Do all unit conversion at the END. Converting halfway through is the most common cause of wrong answers.",
          "Check your specification: some older material uses 1024 rather than 1000.",
        ],
      },
      {
        heading: "Number systems",
        points: [
          "Denary is base 10, binary is base 2, hexadecimal is base 16.",
          "8-bit place values: 128 64 32 16 8 4 2 1. An 8-bit number holds 0 to 255, which is 2^8 = 256 values.",
          "n bits can represent 2^n different values.",
          "Hex digits: 0-9 then A=10, B=11, C=12, D=13, E=14, F=15.",
          "One hex digit is exactly one nibble, so convert binary to hex in groups of four bits from the right.",
          "Hex exists for human convenience: it is shorter than binary and far less error-prone to read and copy.",
        ],
      },
      {
        heading: "Binary arithmetic",
        points: [
          "Addition rules: 0+0=0, 0+1=1, 1+1=0 carry 1, 1+1+1=1 carry 1.",
          "Overflow: the result needs more bits than the register holds, so a bit is lost and the stored answer is wrong.",
          "Left shift of n places multiplies by 2^n; right shift of n places divides by 2^n.",
          "A right shift can lose bits off the end, so information is lost and the result is rounded down.",
        ],
      },
      {
        heading: "Character representation",
        points: [
          "A character set maps each character to a unique binary code.",
          "ASCII: 7 bits, 128 characters. Extended ASCII: 8 bits, 256 characters.",
          "Unicode: many more bits, covering the world's writing systems and emoji, at the cost of larger files.",
          "Character codes are sequential, so 'B' = 'A' + 1, which is why alphabetical sorting works numerically.",
          "In ASCII 'A' is 65 and 'a' is 97 — a difference of 32.",
        ],
      },
      {
        heading: "Images and sound calculations",
        points: [
          "Image file size in bits = width × height × colour depth.",
          "Number of colours available = 2^(colour depth).",
          "Sound file size in bits = sample rate × bit depth × duration in seconds.",
          "Increasing resolution, colour depth, sample rate or bit depth all improve quality and increase file size.",
          "Metadata adds to the real file size but is normally ignored in exam calculations unless stated.",
        ],
      },
      {
        heading: "Compression",
        points: [
          "Lossless: no data lost, original perfectly restorable. Run length encoding and Huffman coding are both lossless.",
          "Lossy: data permanently discarded, much smaller files, quality reduced and unrecoverable.",
          "RLE stores runs as a value plus a count, so it works well on images with large blocks of identical colour and can actually enlarge noisy data.",
          "Huffman coding gives frequently used characters shorter codes and rare ones longer codes.",
          "Choose lossless when every bit matters — text, code, spreadsheets. Choose lossy when a small quality drop is acceptable and size matters — streaming, web photos.",
        ],
      },
    ],
    flashcards: [
      { term: "Base", definition: "The number of different digits a number system uses: 2 for binary, 10 for denary, 16 for hexadecimal." },
      { term: "Overflow", definition: "An error occurring when a calculation produces a result needing more bits than are available to store it." },
      { term: "Left shift", definition: "Moving all bits left by n places, multiplying the value by 2 to the power n." },
      { term: "Right shift", definition: "Moving all bits right by n places, dividing the value by 2 to the power n and potentially losing bits." },
      { term: "Character set", definition: "A defined mapping between characters and the unique binary codes representing them." },
      { term: "Colour depth", definition: "The number of bits used to represent the colour of each pixel in an image." },
      { term: "Resolution", definition: "The number of pixels in an image, expressed as width multiplied by height." },
      { term: "Sample rate", definition: "The number of samples taken per second when recording sound, measured in hertz." },
      { term: "Bit depth", definition: "The number of bits used to store each sound sample." },
      { term: "Metadata", definition: "Data stored about a file rather than its content, such as dimensions, colour depth or date created." },
      { term: "Lossless compression", definition: "Compression that reduces file size without discarding any data, so the original can be perfectly restored." },
      { term: "Lossy compression", definition: "Compression that permanently removes data to achieve a much smaller file, reducing quality irreversibly." },
      { term: "Run length encoding", definition: "A lossless technique that replaces consecutive repeated values with the value and a count of repetitions." },
      { term: "Huffman coding", definition: "A lossless technique assigning shorter binary codes to more frequent characters and longer codes to rarer ones." },
    ],
    examTips: [
      {
        tip: "Bits first, convert last",
        detail:
          "Apply the formula to get bits, then divide by 8, then by 1000 per unit. Converting partway through is where the majority of marks are lost on this topic.",
      },
      {
        tip: "Always write the unit on your answer",
        detail:
          "A bare number is an incomplete answer. '2,400,000 bits = 300,000 bytes = 300 KB' shows the chain and secures method marks even if one step slips.",
      },
      {
        tip: "Learn both formulae by heart",
        detail:
          "Image = width × height × colour depth. Sound = sample rate × bit depth × duration. They come up almost every year and cannot be worked out from first principles under time pressure.",
      },
      {
        tip: "Justify compression choice from the scenario",
        detail:
          "There is no universally right answer. Program code needs lossless because one changed bit breaks it. A photo on a website tolerates lossy because the saving is large and the quality loss is invisible. Quote the scenario.",
      },
      {
        tip: "Explain hex as being for humans",
        detail:
          "The computer does not use hexadecimal. People do, because it is shorter than binary and much harder to miscopy. That framing is what examiners are looking for.",
      },
      {
        tip: "Convert binary to hex in nibbles from the RIGHT",
        detail:
          "Group in fours starting from the right-hand end, padding the left with zeros if needed. Grouping from the left gives the wrong answer whenever the bit count is not a multiple of four.",
      },
      {
        tip: "For overflow, name the cause in one sentence",
        detail:
          "The result requires more bits than the register can hold, so a bit is lost and the stored value is incorrect.",
      },
    ],
  },

  "computer-science/ethical-and-legal-issues": {
    summary:
      "Technology is never neutral in its effects. This topic covers the laws that govern computer use in the UK and the wider ethical, environmental and privacy questions that come with it. It is the most essay-like part of the course, and the marks go to answers that consider more than one side rather than simply declaring something good or bad.",
    keyFacts: [
      {
        heading: "The main UK legislation",
        points: [
          "Data Protection Act 2018: governs how organisations collect, store and use personal data. It implements the UK GDPR.",
          "Under it, data must be used fairly and lawfully, collected only for specified purposes, be adequate and not excessive, be accurate and up to date, not kept longer than necessary, and be kept secure.",
          "Individuals have rights including the right to see the data held about them and to have inaccurate data corrected.",
          "Computer Misuse Act 1990: makes unauthorised access to computer material illegal, along with unauthorised access with intent to commit further offences, and unauthorised modification of material.",
          "Copyright, Designs and Patents Act 1988: protects original work including software, music, images and writing, from being copied or distributed without permission.",
          "Freedom of Information Act 2000: gives the public the right to request information held by public bodies.",
        ],
      },
      {
        heading: "Privacy",
        points: [
          "Organisations collect far more data than most users realise: browsing history, location, purchases, contacts.",
          "The trade-off is that this data enables useful personalisation while also enabling surveillance and profiling.",
          "Cookies track users across sites; the law requires consent for non-essential ones.",
          "Once data is collected it can be breached, sold, or used for purposes the user never anticipated.",
        ],
      },
      {
        heading: "Environmental impact",
        points: [
          "Manufacturing devices consumes rare earth metals and other finite resources, often mined in damaging conditions.",
          "Data centres consume enormous amounts of electricity for both processing and cooling.",
          "E-waste is discarded electronic equipment. It is frequently shipped to developing countries where it is dismantled unsafely, releasing toxic substances such as lead and mercury.",
          "Devices are often replaced long before they stop working, driven by fashion and by designs that are hard to repair.",
          "Positives exist too: video calls reduce travel, digital documents reduce paper, and smart systems reduce energy use.",
        ],
      },
      {
        heading: "Cultural and social impact",
        points: [
          "The digital divide is the gap between those with reliable access to technology and the internet and those without — affecting education, job applications and access to services.",
          "Automation removes some jobs while creating others, but rarely for the same people or in the same places.",
          "Social media affects mental health, particularly among young people, and enables both community and harassment.",
          "Remote work offers flexibility while blurring the boundary between work and home.",
        ],
      },
      {
        heading: "Open source and proprietary software",
        points: [
          "Open source software is distributed with its source code, which anyone may inspect, modify and share.",
          "Advantages: free, adaptable, inspectable, supported by a community. Disadvantages: no guaranteed support, may need technical expertise.",
          "Proprietary software keeps its source code secret; users buy a licence to use it.",
          "Advantages: professional support, tested, usually more polished. Disadvantages: cost, cannot be modified, you depend on the vendor.",
        ],
      },
    ],
    flashcards: [
      { term: "Data Protection Act 2018", definition: "UK law governing how organisations collect, store and use personal data, implementing the UK GDPR." },
      { term: "Computer Misuse Act 1990", definition: "UK law making unauthorised access to computer material, access with intent to commit further offences, and unauthorised modification illegal." },
      { term: "Copyright, Designs and Patents Act 1988", definition: "UK law protecting original works such as software, music and writing from being copied or distributed without permission." },
      { term: "Freedom of Information Act 2000", definition: "UK law giving the public the right to request information held by public authorities." },
      { term: "Personal data", definition: "Information relating to an identifiable living individual." },
      { term: "Digital divide", definition: "The gap between people who have reliable access to technology and the internet and those who do not." },
      { term: "E-waste", definition: "Discarded electronic equipment, often containing toxic materials and frequently disposed of unsafely." },
      { term: "Open source software", definition: "Software distributed with its source code, which anyone may inspect, modify and redistribute." },
      { term: "Proprietary software", definition: "Software whose source code is kept secret and which is used under a purchased licence." },
      { term: "Cookies", definition: "Small files stored by websites on a user's device, used to remember settings and track activity." },
      { term: "Automation", definition: "Using technology to carry out tasks previously performed by people." },
    ],
    examTips: [
      {
        tip: "Name the specific Act, with its year",
        detail:
          "'It's against the law' scores nothing. 'This breaches the Computer Misuse Act 1990 because it is unauthorised access to computer material' scores. Learn the four names and years.",
      },
      {
        tip: "Match the Act to the offence correctly",
        detail:
          "Hacking is the Computer Misuse Act. Illegally sharing music or software is Copyright, Designs and Patents. Mishandling customers' personal details is the Data Protection Act. Mixing these up is the most common error in the topic.",
      },
      {
        tip: "Give both sides on impact questions",
        detail:
          "Almost every impact question expects positives and negatives. Even for something that seems clearly bad, find the other side — e-waste is a serious problem, but the same technology reduces travel and paper use.",
      },
      {
        tip: "Use the impact categories as a checklist",
        detail:
          "Ethical, legal, cultural, environmental, privacy. If you are stuck for a second point, run through the list and something will fit.",
      },
      {
        tip: "Answer about the people in the scenario",
        detail:
          "These questions describe a real situation — a company, a school, a group of users. Say who is affected and how. Generic answers about 'society' score much lower than ones naming the actual people involved.",
      },
      {
        tip: "Be precise about open source",
        detail:
          "Open source means the source code is available to inspect and modify, not simply that the software is free of charge. Some free software is not open source, and some open source software is sold.",
      },
      {
        tip: "Longer-mark questions need a conclusion",
        detail:
          "For 6 to 8 mark questions, finish with a judgement that follows from what you have written. Marks are available for reaching a supported conclusion, not just listing points.",
      },
    ],
  },

  "computer-science/revision-and-exam-practice": {
    summary:
      "Knowing the content and scoring marks for it are two different skills. This section is about the second one: how to revise Computer Science efficiently, how to read what a question is actually asking, and the habits that convert what you already know into marks on the paper.",
    keyFacts: [
      {
        heading: "Command words — what each one demands",
        points: [
          "State / Give / Name: a short fact. No explanation needed, and adding one wastes time you need elsewhere.",
          "Describe: say what something is or what happens, with detail but without justification.",
          "Explain: say what happens AND why. The word 'because' should almost always appear.",
          "Compare: discuss both things in relation to each other, using words like 'whereas' and 'in contrast'. Two separate descriptions is not a comparison.",
          "Discuss / Evaluate: consider more than one side and reach a supported conclusion.",
          "Calculate: show your working. Method marks exist and can rescue a wrong final answer.",
          "Answering an Explain question with a State-level answer caps your marks no matter how correct you are.",
        ],
      },
      {
        heading: "Reading the marks",
        points: [
          "The mark allocation tells you how many distinct points to make. 4 marks usually means four separate creditworthy points.",
          "One mark is rarely more than one sentence. Six marks needs structure and a conclusion.",
          "Repeating the same point in different words scores once.",
          "If you have written four sentences for a 4-mark question and they all say the same thing, you have one mark.",
        ],
      },
      {
        heading: "Revision that actually works",
        points: [
          "Retrieval practice: close the book and write down what you remember, then check. Rereading notes feels productive and mostly is not.",
          "Spaced repetition: review a topic, then again a few days later, then again a week after that. Spacing beats cramming for retention.",
          "Do past papers under timed conditions, then mark them yourself against the mark scheme.",
          "Reading mark schemes teaches you the exact vocabulary examiners reward, which is worth more than any revision guide.",
          "Practise writing algorithms by hand. Coding on a computer with autocomplete does not prepare you for a paper.",
        ],
      },
      {
        heading: "Topics worth extra practice",
        points: [
          "Trace tables — slow, methodical, high mark value, and easy to rush.",
          "Binary and hex conversions, and file size calculations — pure method, guaranteed marks if drilled.",
          "The fetch-decode-execute cycle in the correct order.",
          "Truth tables for multi-gate circuits.",
          "SQL syntax, especially quoting text and remembering WHERE.",
          "Definitions of the four Acts, with years.",
        ],
      },
      {
        heading: "In the exam",
        points: [
          "Read the whole question before writing, including any code or diagram given.",
          "Underline the command word and the mark allocation.",
          "For long questions, jot two or three bullet points before writing prose.",
          "Never leave a blank. An attempt can score; an empty space cannot.",
          "Watch the time: roughly one mark per minute is a reasonable guide, leaving space to check.",
          "Come back to anything you are stuck on rather than losing five minutes staring at it.",
        ],
      },
    ],
    flashcards: [
      { term: "State", definition: "A command word asking for a short factual answer with no explanation required." },
      { term: "Describe", definition: "A command word asking you to say what something is or what happens, with detail." },
      { term: "Explain", definition: "A command word asking you to say what happens and why, usually requiring the word 'because'." },
      { term: "Compare", definition: "A command word asking you to discuss two things in relation to each other, not describe them separately." },
      { term: "Evaluate", definition: "A command word asking you to weigh up more than one side and reach a supported conclusion." },
      { term: "Retrieval practice", definition: "Actively recalling information from memory without looking, which strengthens retention far more than rereading." },
      { term: "Spaced repetition", definition: "Reviewing material at increasing intervals over time rather than all at once." },
      { term: "Mark scheme", definition: "The document listing exactly what an examiner awards marks for, and the vocabulary they expect." },
      { term: "Method mark", definition: "A mark awarded for correct working even when the final answer is wrong." },
    ],
    examTips: [
      {
        tip: "Underline the command word before you write anything",
        detail:
          "It takes two seconds and determines the entire shape of your answer. Most marks lost on knowledge you actually have come from answering a different question to the one asked.",
      },
      {
        tip: "Count your points against the marks",
        detail:
          "Four marks, four distinct points. Before moving on, check you have made that many genuinely different points rather than one point four ways.",
      },
      {
        tip: "Show working on every calculation, always",
        detail:
          "Method marks are free marks. An answer with no working and a small arithmetic slip scores zero; the same slip with visible working often scores most of the marks.",
      },
      {
        tip: "Mark your own past papers against the real mark scheme",
        detail:
          "This is the single highest-value revision activity in the subject. It teaches you the exact phrases examiners want, which is not the same as the phrases in a textbook.",
      },
      {
        tip: "Never leave a blank answer",
        detail:
          "There is no penalty for a wrong answer. Write your best attempt using the correct technical vocabulary — partial credit is common.",
      },
      {
        tip: "Use technical terms rather than describing around them",
        detail:
          "Write 'the Program Counter is incremented', not 'the thing that counts goes up by one'. Precise vocabulary is frequently the mark itself.",
      },
      {
        tip: "Practise writing code by hand",
        detail:
          "No autocomplete, no error underlining, no run button. Handwriting an algorithm is a distinct skill from typing one, and the exam only tests the first.",
      },
    ],
  },
};
