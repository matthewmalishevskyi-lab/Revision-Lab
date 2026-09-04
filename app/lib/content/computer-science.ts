// COMPUTER SCIENCE — all 18 topics.
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
          "An 8-bit number can store 0 to 255, which is 256 different values (2⁸).",
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
          "A left shift of n places multiplies the number by 2ⁿ. Zeros fill in from the right.",
          "A right shift of n places divides the number by 2ⁿ. Zeros fill in from the left.",
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
          "Number of possible colours = 2 to the power of the colour depth. 1 bit gives 2 colours; 8 bits gives 256.",
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
      { term: "Binary shift", definition: "Moving all the bits in a binary number left or right. A shift of n places left multiplies by 2ⁿ; right divides by 2ⁿ." },
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
          "'It multiplies the number' is usually not enough. Say 'a left shift of 3 places multiplies the number by 2³, which is 8'.",
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
          "256. That is 2⁸. The range is 0 to 255, which is 256 different values — a classic off-by-one trap.",
      },
      {
        question: "How many different colours can be represented with a colour depth of 4 bits?",
        accept: ["16"],
        answer: "16 colours, because 2⁴ = 16.",
      },
      {
        question:
          "Perform a left shift of 2 places on 00010110. Give the resulting 8-bit binary number.",
        accept: ["01011000"],
        answer:
          "01011000. A left shift of 2 places multiplies by 2² = 4. The original is 22, and the result is 88.",
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
      {
        question: "What is the denary value of the binary number 1010?",
        choices: [
          "10",
          "12",
          "8",
          "20",
        ],
        accept: [
          "10",
        ],
        answer: "8 + 0 + 2 + 0 = 10. Reading the place values from the left as 8, 4, 2, 1 is the reliable method.",
      },
      {
        question: "A single byte is made up of how many bits?",
        choices: [
          "8",
          "4",
          "16",
          "1024",
        ],
        accept: [
          "8",
        ],
        answer: "8 bits make a byte. A nibble is 4 bits, and 1000 bytes is usually taken as a kilobyte at GCSE.",
      },
      {
        question: "Why is hexadecimal used by programmers?",
        choices: [
          "It is shorter than binary and easier to read without error",
          "Computers store data in hexadecimal",
          "It uses fewer bits of memory",
          "It is the only base that represents colours",
        ],
        accept: [
          "It is shorter than binary and easier to read without error",
        ],
        answer: "Each hex digit represents exactly four bits, so conversion is straightforward and long binary strings become manageable.",
      },
      {
        question: "A binary left shift of one place has the effect of:",
        choices: [
          "Multiplying by 2",
          "Dividing by 2",
          "Adding 1",
          "Reversing the number",
        ],
        accept: [
          "Multiplying by 2",
        ],
        answer: "Each left shift doubles the value; each right shift halves it. Bits shifted off the end are lost.",
      },
      {
        question: "What is an overflow error?",
        choices: [
          "The result of a calculation needs more bits than are available",
          "A file is too large to save",
          "Too many programs are open",
          "The screen runs out of space",
        ],
        accept: [
          "The result of a calculation needs more bits than are available",
        ],
        answer: "Adding two 8-bit numbers can produce a 9-bit result, and the extra bit is lost, giving a wrong answer.",
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

    workedExamples: [
      {
        question:
          "A website claims 'scientists have proven this supplement doubles memory'. Work out whether this is a source you should trust.",
        steps: [
          "Who wrote it? Look for a named author with relevant qualifications. 'Scientists' with no names is a warning sign.",
          "Are they selling something? If the same page sells the supplement, they benefit from you believing it.",
          "Is there evidence? A real claim cites a study you can go and read. 'Studies show' with no link is not evidence.",
          "When was it written? Health and technology claims date quickly.",
          "Can you find the same claim on an independent site with no financial interest?",
        ],
        answer:
          "Not trustworthy. Anonymous authorship, a commercial motive and no citable evidence are three separate reasons to reject it, and any one of them would be enough to check elsewhere first.",
      },
      {
        question:
          "Your email says: 'URGENT: your account will be closed in 24 hours. Click here to verify your password.' Identify the warning signs.",
        steps: [
          "Urgency and a deadline — designed to make you act before you think. This is the single most common phishing signal.",
          "It asks for a password. Real organisations never ask you to send or confirm a password by email.",
          "'Click here' hides the real destination. Hover over the link and read the actual address.",
          "Check the sender's address properly, not just the display name — support@paypa1.com is not PayPal.",
          "If in doubt, go to the site by typing the address yourself rather than clicking anything in the message.",
        ],
        answer:
          "It is phishing. Urgency, a request for credentials, and a disguised link are three independent signals, and any one alone justifies not clicking.",
      },
      {
        question:
          "Explain which is stronger: 'P@ssw0rd!' or 'correct horse battery staple', and why.",
        steps: [
          "Count the characters: 'P@ssw0rd!' is 9; 'correct horse battery staple' is 28.",
          "The number of possible combinations grows with LENGTH far faster than with variety of symbols.",
          "'P@ssw0rd!' is also based on a dictionary word with predictable substitutions — a to @, o to 0 — which cracking software tries first.",
          "The long phrase contains no such pattern and is far easier for a human to remember.",
        ],
        answer:
          "The passphrase is far stronger. Length matters more than symbol substitution, and predictable substitutions are the first thing an attacker tries.",
      },
      {
        question:
          "Classify each as an active or passive digital footprint: posting a photo, a site storing a cookie, writing a review, your phone logging your location.",
        steps: [
          "Ask one question of each: did the user deliberately choose to share this?",
          "Posting a photo — yes, a deliberate act. Active.",
          "A cookie stored by a site — no deliberate act by the user. Passive.",
          "Writing a review — deliberate. Active.",
          "A phone logging location in the background — no deliberate act. Passive.",
        ],
        answer:
          "Active: posting a photo, writing a review. Passive: the cookie, the location log.",
      },
    ],

    practice: [
      {
        question: "What does RSI stand for?",
        accept: ["repetitive strain injury"],
        answer:
          "Repetitive strain injury — damage to muscles and tendons from repeated movements, common with long periods of keyboard and mouse use.",
      },
      {
        question:
          "What is the name for security that requires two different types of proof of identity?",
        accept: ["two factor authentication", "2fa", "two-factor authentication", "twofactorauthentication"],
        answer:
          "Two-factor authentication (2FA). Typically something you know (a password) plus something you have (a code on your phone), so a stolen password alone is not enough.",
      },
      {
        question:
          "What is the term for a fraudulent message pretending to be from a trusted organisation, designed to steal your details?",
        accept: ["phishing"],
        answer:
          "Phishing. The classic warning sign is manufactured urgency — a deadline designed to make you act before thinking.",
      },
      {
        question:
          "Is a cookie stored by a website an active or a passive digital footprint?",
        accept: ["passive"],
        answer:
          "Passive. The user took no deliberate action to share it — that is exactly what separates passive from active footprints.",
      },
      {
        question: "Is posting a photo on social media an active or a passive footprint?",
        accept: ["active"],
        answer: "Active, because the user deliberately chose to share it.",
      },
      {
        question:
          "Name the type of software that manages memory, files, hardware and processes, and provides the user interface.",
        accept: ["operating system", "os", "the operating system"],
        answer:
          "The operating system. It is system software, as opposed to application software which does a job for the user.",
      },
      {
        question:
          "Is a web browser system software or application software?",
        accept: ["application software", "application", "applications software"],
        answer:
          "Application software — it performs a task for the user. System software runs the computer itself.",
      },
      {
        question: "What does the S in HTTPS indicate about the connection?",
        accept: ["secure", "it is secure", "encrypted", "it is encrypted"],
        answer:
          "Secure — the data sent between browser and server is encrypted, so it cannot be read if intercepted. It does NOT mean the site or its owners are trustworthy.",
      },
      {
        question:
          "True or false: a padlock icon in the address bar means the website is safe to trust.",
        accept: ["false"],
        answer:
          "False. The padlock means the connection is encrypted, not that the people running the site are honest. Criminals use HTTPS too.",
      },
      {
        question:
          "What is the general term for the trail of data a person leaves behind through their online activity?",
        accept: ["digital footprint", "footprint"],
        answer:
          "A digital footprint, made up of an active part (things you chose to share) and a passive part (things collected about you).",
      },
      {
        question:
          "Which matters more for password strength: total length, or replacing letters with symbols?",
        accept: ["length", "total length", "the length"],
        answer:
          "Length. Possible combinations grow far faster with length than with symbol variety, and substitutions like a to @ are the first thing cracking software tries.",
      },
      {
        question:
          "Name the practice of keeping a second copy of data somewhere separate, so it can be recovered if the original is lost.",
        accept: ["backup", "backing up", "a backup"],
        answer:
          "A backup. A copy in the same folder on the same drive is not a backup — separation is the whole point.",
      },
      {
        question:
          "State one advantage of cloud storage over storing files only on your own device.",
        accept: [
          "access from anywhere", "accessible anywhere", "automatic backup",
          "easy sharing", "accessible from any device", "access anywhere",
        ],
        answer:
          "Any of: accessible from anywhere with a connection, backed up automatically, and easy to share. The drawbacks are needing a connection, ongoing cost, and trusting a third party with your data.",
      },
      {
        question:
          "What part of a filename tells the computer which program should open it?",
        accept: ["file extension", "the extension", "extension", "filename extension"],
        answer:
          "The file extension — the letters after the dot, such as .docx or .png.",
      },
      {
        question:
          "Name the term for the accepted standards of polite behaviour when communicating online.",
        accept: ["netiquette"],
        answer:
          "Netiquette. Tone is easily misread in text, and ALL CAPS reads as shouting.",
      },
      {
        question:
          "A search engine ranks a page first. What does that tell you about whether the page is true?",
        accept: ["nothing", "nothing at all", "it tells you nothing", "no"],
        answer:
          "Nothing. Search engines rank by relevance and popularity, not accuracy. A page can rank first and be completely wrong.",
      },
      {
        question:
          "Explain why deleting a post does not reliably remove it from the internet.",
        answer:
          "Because anything published can be copied, screenshotted, shared, cached by search engines, or archived by third parties before deletion. Deleting removes YOUR copy, not everyone else's. (Mark this one yourself.)",
      },
      {
        question:
          "A friend uses the same password for their school account, their email and a gaming forum. Explain the risk and what they should do.",
        answer:
          "If any one of those sites suffers a data breach, attackers will try the same email and password combination on other services — this is called credential stuffing, and it is automated. One leaked site therefore exposes all three accounts. They should use a different password for each, ideally with a password manager, and enable two-factor authentication where offered. (Mark this one yourself.)",
      },
      {
        question: "Which of these is the strongest password?",
        choices: [
          "A long passphrase of several unrelated words",
          "Your pet's name",
          "Your date of birth",
          "The word password with a 1 added",
        ],
        accept: [
          "A long passphrase of several unrelated words",
        ],
        answer: "Length matters more than symbols. Personal details are easy to research, and common substitutions are the first thing attackers try.",
      },
      {
        question: "Two-factor authentication improves security because:",
        choices: [
          "A stolen password alone is not enough to get in",
          "It makes passwords longer",
          "It encrypts the whole hard drive",
          "It blocks all phishing emails",
        ],
        accept: [
          "A stolen password alone is not enough to get in",
        ],
        answer: "The second factor is something you have, such as a phone, so a leaked password on its own is useless.",
      },
      {
        question: "How should you judge whether an online source is reliable?",
        choices: [
          "Check who wrote it, when, and whether other sources agree",
          "Trust it if it appears first in search results",
          "Trust it if the site looks professional",
          "Trust it if it has many shares",
        ],
        accept: [
          "Check who wrote it, when, and whether other sources agree",
        ],
        answer: "Search ranking measures relevance and popularity, not accuracy. A polished design proves nothing about the content.",
      },
      {
        question: "What is a digital footprint?",
        choices: [
          "The record of your activity left online",
          "The storage a file takes up",
          "The size of a website",
          "The power a device uses",
        ],
        accept: [
          "The record of your activity left online",
        ],
        answer: "It includes things you post and things recorded about you, and much of it is difficult or impossible to remove.",
      },
      {
        question: "Backing up data protects mainly against:",
        choices: [
          "Loss from hardware failure, theft or ransomware",
          "Slow internet speeds",
          "Weak passwords",
          "Software being out of date",
        ],
        accept: [
          "Loss from hardware failure, theft or ransomware",
        ],
        answer: "A backup stored in the same place as the original is vulnerable to the same fire or theft, so keep one copy elsewhere.",
      },
    ],

    misconceptions: [
      {
        wrong: "\"The padlock icon means the website is safe.\"",
        right:
          "It means the connection is encrypted, so nobody can read the data in transit. It says nothing about who runs the site or what they will do with your details. Criminals routinely use HTTPS on fake sites for exactly this reason.",
      },
      {
        wrong: "\"A strong password needs symbols and numbers more than length.\"",
        right:
          "Length is worth far more. A long ordinary phrase beats a short scrambled word, and predictable substitutions (a to @, o to 0) are the first patterns cracking software tries.",
      },
      {
        wrong: "\"Private or incognito browsing makes me anonymous online.\"",
        right:
          "It only stops your own browser saving history and cookies on that device. Your school, your internet provider and the websites you visit can all still see the activity.",
      },
      {
        wrong: "\"If I delete it, it's gone.\"",
        right:
          "Deleting removes your copy. It cannot remove screenshots, reshares, search engine caches or archives made before deletion. Assume anything posted is permanent.",
      },
      {
        wrong: "\"Antivirus software means I can click anything safely.\"",
        right:
          "Anti-malware catches known threats, but it cannot stop you voluntarily typing your password into a convincing fake site. Most successful attacks target the person, not the software.",
      },
      {
        wrong: "\"If a site is at the top of Google, it must be reliable.\"",
        right:
          "Ranking reflects relevance and popularity, not accuracy. Judge a source by its author, its evidence, its date and whether it has something to sell.",
      },
    ],
  },

  // ─── THE PROGRAMMING LADDER, RUNG 1 ───────────────────────────────────────
  //
  // Matthew: "start from the easy stuff and then get harder and harder
  // gradually." This is the bottom rung, and it assumes nothing at all.
  //
  // This slug used to hold SEVEN blocks — constructs, variables, data types,
  // operators, input/output, planning and debugging — which is most of a
  // year's programming in one page. The slug is kept (progress rows are stored
  // against it, and renaming would orphan them) but it now teaches one idea.
  "computer-science/programming-foundations": {
    summary:
      "Before a program can do anything interesting it has to hold on to things: a score, a name, a price. A variable is the box it holds them in, and the data type is what kind of thing is allowed in the box. Everything else in programming is built on top of these two ideas, so it is worth being genuinely solid on them rather than nearly solid.",
    keyFacts: [
      {
        heading: "What a variable actually is",
        points: [
          "A variable is a named place in memory whose value can change while the program runs.",
          "Assignment puts a value into it: score = 0 in most languages, score <- 0 in pseudocode. The name goes on the left, the value on the right.",
          "Reading a variable does not empty it. You can use score as many times as you like and it still holds the same value.",
          "Assigning again REPLACES what was there. After score = 5 then score = 8, the 5 is gone — there is no history.",
          "The name is yours to choose. totalScore says what it holds; x does not, and examiners give credit for readable names.",
        ],
      },
      {
        heading: "The data types you must know",
        points: [
          "Integer: a whole number, positive or negative, with no decimal point. 7, 0, -412.",
          "Real (also called float): a number with a decimal point. 3.14, 0.5, -2.0. Note that 2.0 is a real, not an integer, even though it looks whole.",
          "Boolean: only ever True or False. Nothing else fits in it.",
          "Character: exactly one letter, digit or symbol. 'a', '7', '?'.",
          "String: a sequence of characters, written in quotes. 'hello', '7', ''. The empty string is still a string.",
          "Choosing the type is a real decision: a phone number is a STRING, not an integer, because it can start with 0 and you never do arithmetic on it.",
        ],
      },
      {
        heading: "Constants",
        points: [
          "A constant is a named value that is set once and cannot change while the program runs.",
          "Use one for anything fixed that appears more than once: VAT rate, maximum players, the value of pi.",
          "The point is not that the computer needs it. The point is that changing one line changes the whole program, and that nothing can accidentally overwrite it.",
          "Conventionally written in capitals — MAX_SCORE, VAT_RATE — so a reader can see at a glance that it will not move.",
        ],
      },
      {
        heading: "Casting between types",
        points: [
          "Casting converts a value from one type to another: int('7') gives the number 7; str(7) gives the text '7'.",
          "The two are not the same thing. '7' + '7' gives '77' because joining strings sticks them together; 7 + 7 gives 14.",
          "int() on something that is not a number — int('hello') — crashes the program with a runtime error.",
          "float('3.5') gives the real number 3.5. int('3.5') fails, because 3.5 is not a whole number written as text.",
        ],
      },
    ],
    flashcards: [
      { term: "Variable", definition: "A named location in memory whose stored value can change while the program is running." },
      { term: "Assignment", definition: "Storing a value in a variable, written as name = value in code or name <- value in pseudocode." },
      { term: "Constant", definition: "A named value that is set once and cannot be changed while the program runs." },
      { term: "Data type", definition: "The kind of value a variable holds, which decides what can be stored in it and what operations are allowed." },
      { term: "Integer", definition: "A whole number data type, with no fractional or decimal part, which may be positive or negative." },
      { term: "Real (float)", definition: "A data type for numbers that include a decimal point, such as 3.14 or 0.5." },
      { term: "Boolean", definition: "A data type with only two possible values: True or False." },
      { term: "Character", definition: "A data type holding exactly one letter, digit, space or symbol." },
      { term: "String", definition: "A data type holding a sequence of characters, such as a word, a sentence or a phone number." },
      { term: "Casting", definition: "Converting a value from one data type to another, such as turning the string '7' into the integer 7." },
      { term: "Identifier", definition: "The name given to a variable, constant or subprogram in a program." },
      { term: "Initialisation", definition: "Giving a variable its first value before the rest of the program uses it." },
    ],
    examTips: [
      {
        tip: "Name the type exactly, not approximately",
        detail:
          "'Integer' scores. 'Number' does not, because it does not distinguish an integer from a real. If a question asks for the most appropriate data type, it wants one word and it wants the right one.",
      },
      {
        tip: "Phone numbers, postcodes and card numbers are strings",
        detail:
          "This comes up almost every year. They can begin with a zero, they may contain spaces or letters, and you never add them together. Storing 07700 900123 as an integer loses the leading zero immediately.",
      },
      {
        tip: "Initialise before you use",
        detail:
          "total = 0 before the loop that adds to it. count = 0 before you start counting. Adding to a variable that was never given a starting value is marked wrong even when the rest of the algorithm is perfect.",
      },
      {
        tip: "Say what a constant is FOR, not just what it is",
        detail:
          "'A value that cannot change' is half a mark. 'A value that cannot change, so the VAT rate is written once and updating it means changing one line' is the full answer examiners are looking for.",
      },
      {
        tip: "Watch for reals that look like integers",
        detail:
          "2.0 is a real. The decimal point is what decides it, not whether the number happens to be whole. Questions use this deliberately to see whether you are reading or guessing.",
      },
      {
        tip: "Use the meaningful name in your answer",
        detail:
          "When writing pseudocode in an exam, calling it numberOfPlayers rather than n costs you nothing and reads as someone who knows what they are doing. Some mark schemes credit it directly.",
      },
    ],
    workedExamples: [
      {
        question:
          "State the most appropriate data type for each, and justify the last one.\n\n  a) the number of students in a class\n  b) the price of a book\n  c) whether a user is logged in\n  d) a UK mobile number",
        steps: [
          "a) You cannot have half a student, so a whole number is right: integer.",
          "b) A price has pence, so it needs a decimal point: real (float).",
          "c) Logged in or not — two possibilities only: boolean.",
          "d) A mobile number starts 07..., and a leading zero is lost the moment it becomes an integer. You also never do arithmetic on it.",
        ],
        answer:
          "a) integer  b) real  c) boolean  d) string, because the leading zero must be kept and no arithmetic is ever done on it.",
      },
      {
        question: "What does this print, and why?\n\n  a = '5'\n  b = '3'\n  print(a + b)",
        steps: [
          "Look at the quotes. Both a and b are strings, not numbers.",
          "The + operator on two strings does not add — it joins them end to end. This is called concatenation.",
          "So '5' + '3' becomes the string '53'.",
          "To get 8 you would have to cast first: int(a) + int(b).",
        ],
        answer: "It prints 53, because both values are strings and + joins strings rather than adding them.",
      },
      {
        question: "Trace this and give the final value of x.\n\n  x = 4\n  y = x\n  x = 10",
        steps: [
          "x = 4 puts 4 into x.",
          "y = x copies the CURRENT value of x into y, so y is 4. It does not link the two variables together.",
          "x = 10 replaces the 4 in x with 10. y is untouched.",
          "So x is 10 and y is still 4.",
        ],
        answer: "x is 10 and y is 4. Assignment copies a value at that moment; it does not tie two variables together.",
      },
      {
        question:
          "This should work out how much change is left. Find the error.\n\n  PRICE = 3\n  paid = 5\n  PRICE = paid - PRICE",
        steps: [
          "PRICE is written in capitals, which by convention means it is meant to be a constant.",
          "The last line assigns a new value to PRICE, which a constant is not allowed to have.",
          "It also destroys the price, so the program can never refer to it again.",
          "The fix is to put the result somewhere else: change = paid - PRICE.",
        ],
        answer:
          "The last line reassigns a constant. It should store the result in a new variable: change = paid - PRICE.",
      },
    ],
    practice: [
      {
        question: "Which data type stores a value that can only be True or False?",
        accept: ["Boolean"],
        choices: ["Boolean", "Integer", "String", "Real"],
        answer: "Boolean. It is the only type with exactly two possible values, and it is what every condition in a program evaluates to.",
      },
      {
        question: "Which data type should be used to store a UK mobile phone number?",
        accept: ["String"],
        choices: ["String", "Integer", "Real", "Character"],
        answer: "String. It begins with a leading zero, which an integer would throw away, and no arithmetic is ever performed on it.",
      },
      {
        question: "Which of these is a real (float) rather than an integer?",
        accept: ["2.0"],
        choices: ["2.0", "2", "-2", "0"],
        answer: "2.0. The decimal point is what makes it a real, even though the value happens to be a whole number.",
      },
      {
        question: "What is the value of the string expression '5' + '3'?",
        accept: ["53"],
        choices: ["53", "8", "15", "an error"],
        answer: "53. The + operator joins two strings end to end rather than adding them, which is called concatenation.",
      },
      {
        question: "What is the term for converting the string '7' into the integer 7?",
        accept: ["Casting"],
        choices: ["Casting", "Assignment", "Validation", "Initialisation"],
        answer: "Casting. It converts a value from one data type to another, and is needed whenever text has to be used as a number.",
      },
      {
        question: "Name the data type that holds exactly one letter, digit or symbol.",
        accept: ["character", "char"],
        answer: "Character. A string holds a sequence of them; a character holds precisely one.",
      },
      {
        question: "What is the most appropriate data type for the price of an item in pounds and pence?",
        accept: ["real", "float"],
        answer: "Real, also called float. Pence require a decimal point, which an integer cannot store.",
      },
      {
        question: "What is the most appropriate data type for the number of pupils in a class?",
        accept: ["integer", "int"],
        answer: "Integer. The count is always a whole number, so a real would be storing precision that cannot exist.",
      },
      {
        question: "Give the term for a named value that cannot be changed while the program runs.",
        accept: ["constant"],
        answer: "A constant. Using one means a fixed value such as a VAT rate is written once and updated in a single place.",
      },
      {
        question: "After x = 4, then y = x, then x = 10, what value does y hold?",
        accept: ["4"],
        answer: "4. Assignment copies the value at that moment. It does not link the two variables, so changing x later leaves y alone.",
      },
      {
        question: "Why should a variable be initialised before a loop that adds to it?",
        accept: ["so it has a starting value", "it has no starting value otherwise", "to give it a starting value"],
        answer: "Because adding to a variable that has never been given a starting value has no defined result, and in most languages crashes the program.",
      },
      {
        question: "What happens when int('hello') is run?",
        accept: ["a runtime error", "runtime error", "it crashes", "an error"],
        answer: "It causes a runtime error and the program stops, because 'hello' is not a number written as text and there is nothing to convert it to.",
      },
      {
        question: "Which is the better variable name for a running total of marks: t or totalMarks?",
        accept: ["totalMarks"],
        answer: "totalMarks. It says what the variable holds without anyone having to read the rest of the program, and mark schemes credit readable identifiers.",
      },
      {
        question: "Write the pseudocode line that stores the number 0 in a variable called score.",
        accept: ["score <- 0", "score = 0"],
        answer: "score <- 0, or score = 0 in most real languages. The name being assigned to goes on the left of the operator.",
      },
      {
        question: "Which data type would you use to record whether a light is switched on?",
        accept: ["boolean", "bool"],
        answer: "Boolean. On or off is exactly two possibilities, which is what a boolean exists to store.",
      },
      {
        question: "Explain why a postcode should be stored as a string rather than an integer.",
        accept: ["it contains letters", "postcodes contain letters", "letters"],
        answer: "A postcode contains letters as well as digits, and no arithmetic is ever done on it, so a string is the only type that can hold it at all.",
      },
      {
        question: "What is the empty string?",
        accept: ["a string with no characters", "a string containing no characters", "no characters"],
        answer: "A string containing no characters at all, written as two quote marks with nothing between them. It is still a string, and it is not the same as zero or nothing.",
      },
    ],
    misconceptions: [
      {
        wrong: "A variable holds a value, so reading it uses the value up.",
        right:
          "Reading a variable leaves it exactly as it was. You can use score a hundred times and it still holds the same number. Only assignment changes it.",
      },
      {
        wrong: "2.0 is an integer because it has no fractional part.",
        right:
          "It is a real. The decimal point decides the type, not the value that happens to be in it. This is deliberately tested.",
      },
      {
        wrong: "Phone numbers are numbers, so they should be stored as integers.",
        right:
          "They should be strings. Storing 07700 900123 as an integer drops the leading zero, and adding two phone numbers together is meaningless anyway.",
      },
      {
        wrong: "y = x makes y follow x, so if x changes later y changes too.",
        right:
          "Assignment copies the value once, at that moment. After y = x, the two variables have no connection at all.",
      },
      {
        wrong: "'5' and 5 are the same thing because they look the same on screen.",
        right:
          "One is text and one is a number. '5' + '5' gives '55'; 5 + 5 gives 10. The quotes are the whole difference.",
      },
    ],
  },
  // ─── RUNG 2 ───────────────────────────────────────────────────────────────
  //
  // Once a program can hold a value, the next thing it needs is a way to get
  // values in and out, and to do arithmetic on them. DIV and MOD live here
  // rather than three topics later because they are needed the moment anyone
  // writes a program that works in minutes and seconds.
  "computer-science/programming-input-and-output": {
    summary:
      "A program that cannot take anything in or give anything back is just a very expensive way of heating a room. This rung covers getting data from the user, showing results, and the arithmetic operators you need in between — including DIV and MOD, which look obscure until the first time you have to turn 200 seconds into minutes and seconds.",
    keyFacts: [
      {
        heading: "Input and output",
        points: [
          "Input takes data from outside the program — usually the keyboard — and stores it in a variable.",
          "Output displays something to the user, usually with print or OUTPUT.",
          "Almost always you want a prompt so the user knows what to type: name = input('What is your name? ').",
          "Without a prompt the program appears to have frozen, which is a usability point examiners do give credit for.",
        ],
      },
      {
        heading: "Input arrives as text — always",
        points: [
          "Whatever the user types, input() hands back a STRING. Typing 25 gives you '25', not 25.",
          "So arithmetic on raw input either crashes or does the wrong thing: '25' * 2 gives '2525', not 50.",
          "Cast it as you read it: age = int(input('Age? ')) for a whole number, or float(...) for a decimal.",
          "This is the single most common bug in beginner code, and one examiners look for on purpose.",
        ],
      },
      {
        heading: "Arithmetic operators",
        points: [
          "+ add, - subtract, * multiply, / divide.",
          "^ or ** raises to a power: 2 ** 3 is 8.",
          "Normal division always produces a real, even when it divides exactly. 10 / 2 gives 5.0, not 5.",
          "Brackets work exactly as they do in maths, and the usual order of operations applies.",
        ],
      },
      {
        heading: "DIV and MOD",
        points: [
          "DIV (written // in Python) gives the whole-number part of a division and throws the remainder away. 17 DIV 5 is 3.",
          "MOD (written % in Python) gives the remainder and throws the whole part away. 17 MOD 5 is 2.",
          "Together they split a division cleanly: 17 = 3 lots of 5, remainder 2.",
          "MOD 2 is the standard test for even or odd: if n MOD 2 == 0 then n is even.",
          "Converting units is the classic use: 200 seconds is 200 DIV 60 = 3 minutes and 200 MOD 60 = 20 seconds.",
        ],
      },
    ],
    flashcards: [
      { term: "Input", definition: "Data taken into a program from outside it, most often typed by the user at the keyboard." },
      { term: "Output", definition: "Data sent out of a program for the user to see, usually printed to the screen." },
      { term: "Prompt", definition: "A message shown before an input so the user knows what they are expected to type." },
      { term: "Casting", definition: "Converting a value from one data type to another, such as int('25') to turn typed text into a number." },
      { term: "DIV", definition: "An operator giving the whole-number part of a division, discarding the remainder. 17 DIV 5 is 3." },
      { term: "MOD", definition: "An operator giving the remainder after integer division. 17 MOD 5 is 2." },
      { term: "Concatenation", definition: "Joining two strings end to end, which is what the + operator does when both sides are strings." },
      { term: "Operator", definition: "A symbol that performs an operation on values, such as +, *, DIV or MOD." },
      { term: "Operand", definition: "A value that an operator acts on. In 17 MOD 5, the operands are 17 and 5." },
      { term: "Integer division", definition: "Division that keeps only the whole-number part of the result, discarding anything after the decimal point." },
    ],
    examTips: [
      {
        tip: "Cast the input in the same line you read it",
        detail:
          "age = int(input('Age? ')) rather than reading it and casting later. It is shorter, it is what mark schemes show, and it makes forgetting impossible.",
      },
      {
        tip: "MOD questions are usually about even, odd or units",
        detail:
          "If a question mentions 'every third', 'even', 'leftover', 'minutes and seconds' or 'how many complete boxes', it is a DIV or MOD question. Spotting that is most of the work.",
      },
      {
        tip: "Say which one gives which",
        detail:
          "DIV gives the whole part, MOD gives the remainder. Answers that describe them the wrong way round score nothing even if the arithmetic underneath is right, so learn one of them properly and get the other by elimination.",
      },
      {
        tip: "Remember that / produces a real",
        detail:
          "10 / 2 is 5.0, not 5. If a question needs a whole number of anything — boxes, minutes, players — you want DIV, not /.",
      },
      {
        tip: "Include the prompt when writing input in an exam",
        detail:
          "Some mark schemes award a usability mark for it, and none deduct for it. It costs you five words.",
      },
      {
        tip: "Show the division when you work out MOD",
        detail:
          "For 23 MOD 4, write 23 = 5 x 4 + 3 so the 3 is visible as the remainder. If you slip, an examiner can still see the method.",
      },
    ],
    workedExamples: [
      {
        question: "Work out 17 DIV 5 and 17 MOD 5, and say what each one means.",
        steps: [
          "Divide 17 by 5. It goes in 3 whole times, because 3 x 5 = 15.",
          "That leaves 17 - 15 = 2 left over.",
          "DIV keeps the whole-number part: 3.",
          "MOD keeps the remainder: 2.",
        ],
        answer: "17 DIV 5 = 3 and 17 MOD 5 = 2. DIV is how many whole times it fits, MOD is what is left over.",
      },
      {
        question: "A program has 200 seconds. Write pseudocode that outputs it as minutes and seconds.",
        steps: [
          "There are 60 seconds in a minute, so the number of whole minutes is 200 DIV 60.",
          "200 DIV 60 = 3, because 3 x 60 = 180 and a fourth minute will not fit.",
          "The seconds left over are 200 MOD 60 = 20.",
          "So: minutes <- 200 DIV 60 and seconds <- 200 MOD 60, then output both.",
        ],
        answer:
          "minutes <- 200 DIV 60 gives 3, seconds <- 200 MOD 60 gives 20. The output is 3 minutes and 20 seconds.",
      },
      {
        question: "This should double the number the user types. Find and fix the bug.\n\n  n = input('Number? ')\n  print(n * 2)",
        steps: [
          "input() always returns a string, so n holds the text '7', not the number 7.",
          "Multiplying a string by 2 repeats the string, so typing 7 prints 77.",
          "The program does not crash, which is what makes this bug hard to spot — it is a logic error, not a syntax one.",
          "Fix: cast on input with n = int(input('Number? ')).",
        ],
        answer:
          "n = int(input('Number? ')). Without the cast the string is repeated rather than the number doubled, so 7 prints as 77.",
      },
      {
        question: "Write a condition that is true only when a number n is even.",
        steps: [
          "An even number divides by 2 with nothing left over.",
          "The remainder after dividing by 2 is n MOD 2.",
          "For an even number that remainder is 0.",
          "So the condition is n MOD 2 == 0. Use ==, because this compares rather than assigns.",
        ],
        answer: "n MOD 2 == 0, which is written n % 2 == 0 in Python.",
      },
    ],
    practice: [
      {
        question: "What data type does input() return, whatever the user types?",
        accept: ["String"],
        choices: ["String", "Integer", "Real", "It depends on what they type"],
        answer: "String. Even typing 25 gives back the text '25', which is why arithmetic on raw input needs a cast first.",
      },
      {
        question: "What is 17 MOD 5?",
        accept: ["2"],
        choices: ["2", "3", "3.4", "12"],
        answer: "2. MOD gives the remainder: 17 = 3 x 5 + 2, so 2 is left over.",
      },
      {
        question: "What is 17 DIV 5?",
        accept: ["3"],
        choices: ["3", "2", "3.4", "85"],
        answer: "3. DIV gives the whole-number part of the division and throws the remainder away.",
      },
      {
        question: "Which expression is true only when n is even?",
        accept: ["n MOD 2 == 0"],
        choices: ["n MOD 2 == 0", "n MOD 2 == 1", "n DIV 2 == 0", "n / 2 == 0"],
        answer: "n MOD 2 == 0. An even number leaves no remainder when divided by two.",
      },
      {
        question: "What does the code print?\n\n  n = input('Number? ')\n  print(n * 2)\n\nThe user types 7.",
        accept: ["77"],
        choices: ["77", "14", "7", "an error"],
        answer: "77. n holds the string '7', and multiplying a string repeats it rather than doubling a number.",
      },
      {
        question: "What is 23 MOD 4?",
        accept: ["3"],
        answer: "3, because 23 = 5 x 4 + 3. Five whole fours fit into 23 and three are left over.",
      },
      {
        question: "What is 23 DIV 4?",
        accept: ["5"],
        answer: "5. Four goes into 23 five whole times, and DIV discards the remainder of 3.",
      },
      {
        question: "How many whole minutes are there in 200 seconds?",
        accept: ["3"],
        answer: "3. That is 200 DIV 60, because three lots of 60 fit into 200 and a fourth would not.",
      },
      {
        question: "How many seconds are left over after taking the whole minutes out of 200 seconds?",
        accept: ["20"],
        answer: "20. That is 200 MOD 60, the remainder once three whole minutes of 60 seconds have been removed.",
      },
      {
        question: "Write the line that reads a whole number from the user into a variable called age.",
        accept: ["age = int(input())", "age = int(input('Age? '))", "age <- int(input())"],
        answer: "age = int(input('Age? ')). The int() cast is what turns the typed text into a number you can do arithmetic on.",
      },
      {
        question: "What is the value of 10 / 2 in most languages, and what data type is it?",
        accept: ["5.0", "5.0, a real"],
        answer: "5.0, which is a real. Normal division always produces a real even when the division is exact, so use DIV if a whole number is needed.",
      },
      {
        question: "What is 2 ** 3?",
        accept: ["8"],
        answer: "8. The ** operator raises to a power, so this is two cubed.",
      },
      {
        question: "Why should an input have a prompt?",
        accept: ["so the user knows what to type", "so the user knows what to enter", "to tell the user what to type"],
        answer: "So the user knows what is expected. Without one the program looks as though it has frozen, and some mark schemes award a usability mark for including it.",
      },
      {
        question: "What is the term for joining two strings end to end?",
        accept: ["concatenation"],
        answer: "Concatenation. It is what the + operator does when both of its operands are strings rather than numbers.",
      },
      {
        question: "A shop packs eggs into boxes of 6. How many full boxes do 20 eggs fill?",
        accept: ["3"],
        answer: "3, which is 20 DIV 6. Two eggs are left over, and 20 MOD 6 = 2 would tell you that.",
      },
      {
        question: "In the same problem, how many eggs are left over?",
        accept: ["2"],
        answer: "2, which is 20 MOD 6. Three full boxes use 18 eggs and two cannot fill a fourth.",
      },
      {
        question: "Which operator would you use to find out whether a number divides exactly by 7?",
        accept: ["MOD"],
        answer: "MOD. If n MOD 7 is 0 there is no remainder, which is exactly what dividing exactly means.",
      },
    ],
    misconceptions: [
      {
        wrong: "If the user types a number, the program gets a number.",
        right:
          "It gets a string of digits. Nothing about typing 25 makes it a number until you cast it, which is why '25' * 2 gives '2525'.",
      },
      {
        wrong: "DIV and MOD are the same thing written two ways.",
        right:
          "They are the two halves of one division. DIV keeps the whole part and throws away the remainder; MOD keeps the remainder and throws away the whole part.",
      },
      {
        wrong: "10 / 2 gives the integer 5.",
        right:
          "It gives the real 5.0. Ordinary division always produces a real, which matters when a question asks for a whole number of boxes or players.",
      },
      {
        wrong: "A program that does not crash has no bugs in its input handling.",
        right:
          "Forgetting to cast usually does not crash. It quietly does the wrong thing, which is far harder to spot than an error message.",
      },
    ],
  },
  // ─── RUNG 3 ───────────────────────────────────────────────────────────────
  //
  // The first rung where the program stops being a straight line. Selection is
  // also where = against == does its annual damage, so that gets its own
  // block rather than a footnote.
  "computer-science/programming-selection": {
    summary:
      "Up to now a program has run straight through, top to bottom. Selection is the point where it starts making decisions: do this if that is true, otherwise do something else. It is one of the three constructs every program is built from, and almost every interesting thing a computer does comes down to a very large number of very small decisions.",
    keyFacts: [
      {
        heading: "What selection is",
        diagrams: [
          "flowchart-selection",
        ],
        points: [
          "Selection means the program chooses between paths depending on a condition.",
          "A condition is anything that evaluates to True or False — that is, to a boolean.",
          "IF ... THEN runs a block only when the condition is true, and skips it otherwise.",
          "ELSE gives the alternative path, run only when the condition was false. Exactly one of the two runs — never both, never neither.",
          "ELIF (ELSE IF) chains more conditions on. They are tested in order, and the FIRST true one wins; the rest are not even looked at.",
        ],
      },
      {
        heading: "Comparison operators",
        points: [
          "== equal to, != not equal to, < less than, > greater than, <= less than or equal to, >= greater than or equal to.",
          "= assigns a value. == compares two values. They are different operators and confusing them is the most common beginner error there is.",
          "Boundaries matter enormously: 'at least 18' is >= 18, not > 18. That single character is the difference between right and wrong.",
          "Comparisons work on strings too, comparing alphabetically: 'apple' < 'banana' is True.",
        ],
      },
      {
        heading: "Combining conditions",
        points: [
          "AND is true only when BOTH sides are true.",
          "OR is true when EITHER side is true, including when both are.",
          "NOT flips a condition: NOT True is False.",
          "A common trap: 'between 10 and 20' means x >= 10 AND x <= 20. Writing 10 <= x <= 20 works in Python but not in most pseudocode, and writing OR instead of AND makes it true for every number in existence.",
        ],
      },
      {
        heading: "Order and nesting",
        points: [
          "In an IF/ELIF chain, put the most restrictive condition FIRST. If mark >= 40 comes before mark >= 70, nobody ever gets the top grade.",
          "Nested selection is an IF inside another IF, used when the second question only makes sense once the first is answered.",
          "Nesting more than two or three deep becomes unreadable. Combining conditions with AND is usually clearer.",
          "Indentation is not decoration — in Python it is what defines which lines belong to which branch, and in exams it is what shows the examiner your structure.",
        ],
      },
    ],
    flashcards: [
      { term: "Selection", definition: "A construct where the program chooses between different paths depending on whether a condition is true." },
      { term: "Condition", definition: "An expression that evaluates to either True or False, used to decide which path a program takes." },
      { term: "IF statement", definition: "A statement that runs a block of code only when its condition is true." },
      { term: "ELSE", definition: "The branch of a selection statement that runs only when the condition was false." },
      { term: "ELIF", definition: "A further condition tested only if all the conditions above it were false. Short for else if." },
      { term: "Nested selection", definition: "A selection statement placed inside another, so the inner condition is only tested when the outer one is true." },
      { term: "AND", definition: "A boolean operator that is true only when both of its conditions are true." },
      { term: "OR", definition: "A boolean operator that is true when at least one of its conditions is true." },
      { term: "NOT", definition: "A boolean operator that reverses a condition, turning true into false and false into true." },
      { term: "Comparison operator", definition: "An operator such as ==, !=, < or >= that compares two values and produces a boolean result." },
      { term: "Boundary value", definition: "A value exactly on the edge of a condition, such as 18 when the test is age >= 18." },
    ],
    examTips: [
      {
        tip: "Read the boundary wording twice",
        detail:
          "'Over 18' is > 18. 'At least 18', '18 or over' and 'aged 18 and above' are all >= 18. Questions are written to test exactly this, and one character is the whole mark.",
      },
      {
        tip: "Put the strictest condition first in a chain",
        detail:
          "Grade boundaries are the classic case. Testing mark >= 40 before mark >= 70 means every mark over 70 is caught by the first branch and nobody ever gets an A. Work downwards from the top.",
      },
      {
        tip: "AND for 'between', never OR",
        detail:
          "x >= 10 OR x <= 20 is true for every number that exists, because every number satisfies at least one half. It is a favourite trap and it looks perfectly reasonable at a glance.",
      },
      {
        tip: "One = assigns, two == compares",
        detail:
          "IF score = 10 is a syntax error in most languages and a silent disaster in a few. In pseudocode write == when you mean 'is equal to' and you will never be marked down.",
      },
      {
        tip: "Indent your branches in written answers",
        detail:
          "Examiners are looking for structure. Lines that all start in the same column make it impossible to see which belong to the IF and which to the ELSE, and marks go with clarity.",
      },
      {
        tip: "Every ELSE needs an IF, but not every IF needs an ELSE",
        detail:
          "If nothing should happen when the condition is false, leave the ELSE out entirely rather than writing an empty one.",
      },
    ],
    workedExamples: [
      {
        question:
          "Write pseudocode that prints 'Pass' for a mark of 40 or more and 'Fail' otherwise.",
        steps: [
          "'40 or more' includes 40 itself, so the operator is >=, not >.",
          "There are exactly two outcomes, so one IF with an ELSE covers it.",
          "IF mark >= 40 THEN OUTPUT 'Pass' ELSE OUTPUT 'Fail' ENDIF.",
          "No third branch is needed: anything not 40 or more is automatically below it.",
        ],
        answer: "IF mark >= 40 THEN OUTPUT 'Pass' ELSE OUTPUT 'Fail' ENDIF",
      },
      {
        question:
          "This is meant to award grades. Explain why nobody ever gets an A.\n\n  IF mark >= 40 THEN grade <- 'C'\n  ELIF mark >= 60 THEN grade <- 'B'\n  ELIF mark >= 80 THEN grade <- 'A'",
        steps: [
          "Conditions in a chain are tested in order, and the first true one wins.",
          "A mark of 85 is tested against mark >= 40 first. That is true.",
          "So grade is set to 'C' and the rest of the chain is never reached.",
          "Every mark of 40 or over is caught by the first branch.",
        ],
        answer:
          "The conditions are in the wrong order. Testing mark >= 80 first, then 60, then 40, fixes it — the most restrictive condition has to come first.",
      },
      {
        question: "Write a condition that is true only when x is between 10 and 20 inclusive.",
        steps: [
          "'Inclusive' means 10 and 20 themselves count, so the operators are >= and <=.",
          "Both must hold at the same time, so the two halves are joined with AND.",
          "x >= 10 AND x <= 20.",
          "Using OR here would be true for every number, because every number is either at least 10 or at most 20.",
        ],
        answer: "x >= 10 AND x <= 20",
      },
      {
        question:
          "Trace this and say what is printed when age is 15 and ticket is 'child'.\n\n  IF age < 16 THEN\n    IF ticket == 'child' THEN\n      OUTPUT 'Free'\n    ELSE\n      OUTPUT 'Half price'\n    ENDIF\n  ELSE\n    OUTPUT 'Full price'\n  ENDIF",
        steps: [
          "The outer condition is age < 16. 15 < 16 is True, so we go into the outer IF and the ELSE at the bottom is skipped entirely.",
          "The inner condition is ticket == 'child'. That is True.",
          "So the inner IF branch runs.",
          "'Free' is printed, and nothing else.",
        ],
        answer: "Free. The outer condition sends it into the nested block, and the inner condition then chooses the first branch.",
      },
    ],
    practice: [
      {
        question: "Which operator means 'is equal to' in a condition?",
        accept: ["=="],
        choices: ["==", "=", "!=", "<="],
        answer: "==. A single = assigns a value to a variable; two of them compare two values and produce True or False.",
      },
      {
        question: "Which condition is true only when x is between 10 and 20 inclusive?",
        accept: ["x >= 10 AND x <= 20"],
        choices: ["x >= 10 AND x <= 20", "x >= 10 OR x <= 20", "x > 10 AND x < 20", "x >= 10 AND x >= 20"],
        answer: "x >= 10 AND x <= 20. Both halves must hold, and 'inclusive' means the endpoints count, so >= and <= are right.",
      },
      {
        question: "How should 'the user must be 18 or over' be written?",
        accept: ["age >= 18"],
        choices: ["age >= 18", "age > 18", "age = 18", "age <= 18"],
        answer: "age >= 18. 'Or over' includes 18 itself, so a plain > would wrongly reject someone on their eighteenth birthday.",
      },
      {
        question: "In an IF/ELIF chain, which branch runs when more than one condition is true?",
        accept: ["The first true one"],
        choices: ["The first true one", "The last true one", "All the true ones", "None of them"],
        answer: "The first true one. The chain is tested in order and stops as soon as something matches, which is why order matters so much.",
      },
      {
        question: "What is the result of NOT (5 > 3)?",
        accept: ["False"],
        choices: ["False", "True", "5", "An error"],
        answer: "False. 5 > 3 is True, and NOT reverses it.",
      },
      {
        question: "What does an ELSE branch run in response to?",
        accept: ["the condition being false", "when the condition is false", "a false condition"],
        answer: "The condition being false. Exactly one of the IF branch and the ELSE branch runs — never both and never neither.",
      },
      {
        question: "Name the construct where a program chooses between different paths.",
        accept: ["selection"],
        answer: "Selection. It is one of the three programming constructs, alongside sequence and iteration.",
      },
      {
        question: "Is 'apple' < 'banana' True or False?",
        accept: ["True"],
        answer: "True. Strings compare alphabetically, and apple comes before banana.",
      },
      {
        question: "Write the condition for 'the score is not zero'.",
        accept: ["score != 0"],
        answer: "score != 0. The != operator means 'not equal to' and is the direct opposite of ==.",
      },
      {
        question: "Why does testing mark >= 40 before mark >= 70 mean nobody gets the top grade?",
        accept: ["the first true condition wins", "the first condition is always true first", "it matches the first condition"],
        answer: "Because the chain stops at the first true condition. A mark of 85 satisfies mark >= 40, so it is graded there and the later branches are never tested.",
      },
      {
        question: "What is the term for an IF statement placed inside another IF statement?",
        accept: ["nested selection", "nesting", "nested if"],
        answer: "Nested selection. The inner condition is only ever tested when the outer one has already turned out to be true.",
      },
      {
        question: "What does a condition evaluate to?",
        accept: ["a boolean", "true or false", "boolean"],
        answer: "A boolean — True or False. That is the only thing a condition can produce, which is why booleans and selection are so closely tied together.",
      },
      {
        question: "Is x >= 10 OR x <= 20 true for the number 500?",
        accept: ["Yes", "yes", "true"],
        answer: "Yes, and that is the bug. 500 is at least 10, so the OR is satisfied. This condition is true for every number in existence, which is why 'between' always needs AND.",
      },
      {
        question: "How many branches of an IF/ELSE statement run each time it is reached?",
        accept: ["1", "one", "exactly one"],
        answer: "Exactly one. Either the condition is true and the IF branch runs, or it is false and the ELSE branch runs. Never both.",
      },
      {
        question: "Which boolean operator is true only when both conditions are true?",
        accept: ["AND"],
        answer: "AND. OR needs only one side to be true, and NOT works on a single condition rather than joining two.",
      },
      {
        question: "In Python, what defines which lines belong inside an IF branch?",
        accept: ["indentation", "the indentation"],
        answer: "Indentation. Unlike most languages Python has no brackets or ENDIF, so the spacing at the start of a line is what the interpreter actually reads.",
      },
      {
        question: "Rewrite 'over 18' and 'at least 18' as conditions on a variable called age.",
        accept: ["age > 18 and age >= 18", "age > 18, age >= 18"],
        answer: "'Over 18' is age > 18; 'at least 18' is age >= 18. The wording of the question is what decides which one is wanted, and questions are written to test exactly that.",
      },
    ],
    misconceptions: [
      {
        wrong: "= and == both mean 'is equal to' in a condition.",
        right:
          "= assigns a value to a variable. == asks whether two values are the same. Using = in a condition is a syntax error in most languages.",
      },
      {
        wrong: "'Between 10 and 20' means x >= 10 OR x <= 20.",
        right:
          "It means AND. The OR version is true for every number there is, because any number is either at least 10 or at most 20.",
      },
      {
        wrong: "The order of the conditions in an IF/ELIF chain does not matter.",
        right:
          "It decides the answer. The first true condition wins, so a loose test placed early swallows every case that should have reached the stricter ones below it.",
      },
      {
        wrong: "'Over 18' and '18 or over' mean the same thing.",
        right:
          "They differ by exactly one person: someone who is 18. > 18 excludes them, >= 18 includes them, and exam questions choose their wording deliberately.",
      },
      {
        wrong: "An IF is incomplete without an ELSE.",
        right:
          "If nothing should happen when the condition is false, no ELSE is needed. Writing an empty one is worse than leaving it out.",
      },
    ],
  },
  // ─── RUNG 4 ───────────────────────────────────────────────────────────────
  //
  // Loops. The off-by-one error and the accidental infinite loop both live
  // here, and both are worth meeting on purpose rather than at 11pm the night
  // before a deadline.
  "computer-science/programming-iteration": {
    summary:
      "Iteration is the third construct, and it is where programs stop being things a person could just as easily do by hand. A loop repeats instructions — a fixed number of times, or until something changes. Choosing the right kind of loop, and knowing exactly how many times it runs, is worth a great many marks and an enormous amount of debugging time.",
    keyFacts: [
      {
        heading: "Count-controlled loops",
        diagrams: [
          "flowchart-loop",
        ],
        points: [
          "A count-controlled loop repeats a known, fixed number of times. In most languages it is a FOR loop.",
          "FOR i <- 1 TO 5 runs five times, with i holding 1, then 2, then 3, 4 and 5.",
          "Python counts differently: for i in range(5) gives 0, 1, 2, 3, 4 — five values, but starting at zero and stopping BEFORE the number you wrote.",
          "The loop counter is a real variable. You can use it inside the loop, which is what makes FOR i <- 1 TO 12 useful for a times table.",
          "Use a count-controlled loop whenever you know the number of repetitions before the loop starts.",
        ],
      },
      {
        heading: "Condition-controlled loops",
        points: [
          "A condition-controlled loop keeps going while a condition is true. In most languages it is a WHILE loop.",
          "The condition is checked BEFORE each pass, so a WHILE loop can run zero times if it is false to begin with.",
          "REPEAT ... UNTIL checks AFTER each pass, so it always runs at least once. That difference is examinable.",
          "Something inside the loop must be able to change the condition, or it will never stop.",
          "Use a condition-controlled loop when the number of repetitions depends on something happening — the user typing 'quit', a value being found, a total being reached.",
        ],
      },
      {
        heading: "Infinite loops and off-by-one errors",
        diagrams: [
          "trace-table",
        ],
        points: [
          "An infinite loop is one whose condition never becomes false. The classic cause is forgetting to change the variable the condition tests.",
          "WHILE x > 0 with nothing inside that reduces x will run for ever.",
          "An off-by-one error is a loop that runs one time too many or too few — usually a < where <= was meant, or forgetting that Python's range stops early.",
          "The cure for both is a trace table. Write out every pass by hand and the mistake becomes obvious in about four rows.",
        ],
      },
      {
        heading: "Nested loops",
        points: [
          "A nested loop is a loop inside another loop. The inner one completes fully on every single pass of the outer one.",
          "So an outer loop of 3 around an inner loop of 4 runs the inner body 12 times.",
          "Nested loops are how you work through a grid, a table or a two-dimensional array — outer loop for rows, inner loop for columns.",
          "Use different counter variables for each. Reusing i for both is a guaranteed bug.",
        ],
      },
    ],
    flashcards: [
      { term: "Iteration", definition: "A construct that repeats a set of instructions, either a fixed number of times or until a condition changes." },
      { term: "Count-controlled loop", definition: "A loop that repeats a known, fixed number of times, typically written as a FOR loop." },
      { term: "Condition-controlled loop", definition: "A loop that keeps repeating while a condition remains true, typically written as a WHILE loop." },
      { term: "Loop counter", definition: "The variable a count-controlled loop uses to track which repetition it is on." },
      { term: "Infinite loop", definition: "A loop whose condition never becomes false, so the program never moves past it." },
      { term: "Off-by-one error", definition: "A loop that runs one time too many or one too few, usually caused by the wrong comparison operator." },
      { term: "Nested loop", definition: "A loop placed inside another loop, so the inner loop runs completely on every pass of the outer one." },
      { term: "REPEAT UNTIL", definition: "A loop that checks its condition after each pass, so its body always runs at least once." },
      { term: "Trace table", definition: "A table recording the value of every variable at each step of an algorithm, used to find loop errors by hand." },
      { term: "Loop body", definition: "The block of instructions that a loop repeats." },
    ],
    examTips: [
      {
        tip: "Say WHICH loop and WHY, not just which",
        detail:
          "'A count-controlled loop, because the number of players is known before the loop starts' is the answer. Naming the loop alone usually scores one of the two marks available.",
      },
      {
        tip: "Count the passes on your fingers for a FOR loop",
        detail:
          "FOR i <- 1 TO 5 is five passes. FOR i <- 0 TO 5 is six. range(5) in Python is five, starting at 0. Getting this wrong is the single commonest slip in trace-table questions.",
      },
      {
        tip: "A WHILE loop can run zero times",
        detail:
          "The condition is tested first, so if it is false at the start the body never runs at all. REPEAT UNTIL always runs at least once. Questions ask about this difference directly.",
      },
      {
        tip: "Check the loop can actually end",
        detail:
          "For any WHILE you write, point at the line inside it that changes the variable in the condition. If you cannot, you have written an infinite loop.",
      },
      {
        tip: "Multiply for nested loops",
        detail:
          "Outer 3 times inner 4 is 12 runs of the inner body. Examiners like asking how many times something is printed, and it is one multiplication.",
      },
      {
        tip: "Fill trace tables one row per line executed",
        detail:
          "Not one row per loop. Every time a line changes a value, that is a row, including the counter. Blank columns at the end usually mean you missed an iteration.",
      },
    ],
    workedExamples: [
      {
        question: "How many times does the loop body run?\n\n  FOR i <- 1 TO 5\n    OUTPUT i\n  NEXT i",
        steps: [
          "The counter starts at 1 and finishes at 5, and in pseudocode both ends are included.",
          "So i takes the values 1, 2, 3, 4, 5.",
          "That is five values.",
          "The body runs once per value: five times.",
        ],
        answer: "Five times, printing 1 2 3 4 5.",
      },
      {
        question: "Trace this loop and give the final value of x.\n\n  x <- 10\n  WHILE x > 6\n    x <- x - 2\n  ENDWHILE",
        steps: [
          "Start with x = 10. Check 10 > 6: true, so x becomes 8.",
          "Check 8 > 6: true, so x becomes 6.",
          "Check 6 > 6: FALSE — 6 is not greater than 6 — so the loop stops.",
          "The condition is checked before each pass, which is why it exits without running a third time.",
        ],
        answer: "x ends as 6, after two passes.",
      },
      {
        question: "Explain why this loop never ends and fix it.\n\n  count <- 1\n  WHILE count < 5\n    OUTPUT 'hello'\n  ENDWHILE",
        steps: [
          "The condition tests count.",
          "Nothing inside the loop changes count, so it stays at 1 for ever.",
          "1 < 5 is true on every check, so the loop never exits and 'hello' prints for ever.",
          "The fix is to add count <- count + 1 inside the loop.",
        ],
        answer:
          "count is never changed, so the condition is always true. Adding count <- count + 1 inside the loop fixes it and prints hello four times.",
      },
      {
        question: "How many times does OUTPUT run?\n\n  FOR row <- 1 TO 3\n    FOR col <- 1 TO 4\n      OUTPUT row, col\n    NEXT col\n  NEXT row",
        steps: [
          "The outer loop runs 3 times, once for each row.",
          "On every single one of those passes, the inner loop runs completely — all 4 columns.",
          "So the inner body runs 4 times for each of 3 outer passes.",
          "3 x 4 = 12.",
        ],
        answer: "12 times.",
      },
      {
        question:
          "A program should keep asking for a password until the user gets it right. Which loop, and why?",
        steps: [
          "You do not know in advance how many attempts the user will need — it might be one, it might be nine.",
          "The number of repetitions depends on something happening, not on a count.",
          "That rules out a count-controlled loop.",
          "It should also run at least once, since you always have to ask the first time, which makes REPEAT UNTIL a natural fit.",
        ],
        answer:
          "A condition-controlled loop, because the number of attempts is not known in advance. REPEAT ... UNTIL correct is neatest, as the question always has to be asked at least once.",
      },
    ],
    practice: [
      {
        question: "How many times does FOR i <- 1 TO 5 run its body?",
        accept: ["5"],
        choices: ["5", "4", "6", "1"],
        answer: "5. In pseudocode both ends of the range are included, so i takes the values 1, 2, 3, 4 and 5.",
      },
      {
        question: "Which loop should be used when the number of repetitions is NOT known in advance?",
        accept: ["A condition-controlled loop"],
        choices: ["A condition-controlled loop", "A count-controlled loop", "A nested loop", "A FOR loop"],
        answer: "A condition-controlled loop, such as WHILE. Count-controlled loops need the number of repetitions before they start.",
      },
      {
        question: "How many times does the inner body run?\n\n  FOR a <- 1 TO 3\n    FOR b <- 1 TO 4\n      OUTPUT a\n    NEXT b\n  NEXT a",
        accept: ["12"],
        choices: ["12", "7", "3", "4"],
        answer: "12. The inner loop completes fully on every pass of the outer one, so it is 3 x 4.",
      },
      {
        question: "What is the minimum number of times a WHILE loop can run its body?",
        accept: ["0"],
        choices: ["0", "1", "2", "It always runs at least once"],
        answer: "0. The condition is checked before the first pass, so if it is false to begin with the body never runs at all.",
      },
      {
        question: "What is the usual cause of an infinite loop?",
        accept: ["The condition is never changed"],
        choices: [
          "The condition is never changed",
          "The loop counter starts at zero",
          "The loop is nested inside another",
          "The condition uses AND",
        ],
        answer: "Nothing inside the loop changes the variable the condition tests, so the condition stays true for ever.",
      },
      {
        question: "How many values does range(5) produce in Python, and what are they?",
        accept: ["5 values: 0 1 2 3 4", "0 1 2 3 4"],
        answer: "Five values: 0, 1, 2, 3 and 4. It starts at zero and stops before the number written, which is a very common source of off-by-one errors.",
      },
      {
        question: "Which loop always runs its body at least once?",
        accept: ["repeat until", "repeat", "REPEAT UNTIL"],
        answer: "REPEAT ... UNTIL. It checks its condition after the body has run, unlike WHILE which checks before.",
      },
      {
        question: "Name the construct that repeats a set of instructions.",
        accept: ["iteration"],
        answer: "Iteration. It is the third of the three programming constructs, alongside sequence and selection.",
      },
      {
        question: "Trace: x <- 10, WHILE x > 6 DO x <- x - 2. What is x at the end?",
        accept: ["6"],
        answer: "6. It goes 10, then 8, then 6, and the check 6 > 6 is false so the loop stops.",
      },
      {
        question: "What is an off-by-one error?",
        accept: ["a loop running one time too many or too few", "a loop that runs once too many or too few", "running one extra or one fewer time"],
        answer: "A loop that runs one iteration too many or too few, usually caused by using < where <= was meant, or by forgetting that Python's range stops early.",
      },
      {
        question: "In a nested loop, which loop completes first?",
        accept: ["the inner loop", "inner"],
        answer: "The inner loop. It runs all the way through on every single pass of the outer loop.",
      },
      {
        question: "A program repeats until the user types 'quit'. Which type of loop is that?",
        accept: ["condition-controlled", "a condition-controlled loop", "while"],
        answer: "A condition-controlled loop. The number of repetitions depends on what the user does, so it cannot be known before the loop starts.",
      },
      {
        question: "How many times does FOR i <- 0 TO 5 run its body in pseudocode?",
        accept: ["6"],
        answer: "6. The values are 0, 1, 2, 3, 4 and 5 — both ends included, which is one more than people usually expect.",
      },
      {
        question: "What is the fastest way to find a logic error in a loop by hand?",
        accept: ["a trace table", "trace table"],
        answer: "A trace table. Writing out the value of every variable on every pass makes an off-by-one or a never-ending condition obvious within a few rows.",
      },
      {
        question: "Why should nested loops use different counter variables?",
        accept: ["the inner loop would overwrite the outer counter", "they would interfere", "the inner one changes the outer one"],
        answer: "Because the inner loop would overwrite the counter the outer loop is relying on, so the outer loop would lose its place and the program would misbehave in a way that is very hard to trace.",
      },
      {
        question: "Which construct would you use to print the 7 times table from 1 to 12?",
        accept: ["a count-controlled loop", "count-controlled", "for loop"],
        answer: "A count-controlled loop, such as FOR i <- 1 TO 12. The number of repetitions is known before the loop starts, which is exactly what count-controlled means.",
      },
      {
        question: "When is the condition of a WHILE loop checked?",
        accept: ["before each pass", "before the body runs", "before each iteration"],
        answer: "Before each pass through the body. That is why a WHILE loop can run zero times, and it is the difference between WHILE and REPEAT UNTIL.",
      },
    ],
    misconceptions: [
      {
        wrong: "FOR i <- 1 TO 5 runs four times, because 5 minus 1 is 4.",
        right:
          "It runs five times. Both ends of the range are included in pseudocode, so i takes five separate values.",
      },
      {
        wrong: "range(5) in Python gives 1, 2, 3, 4, 5.",
        right:
          "It gives 0, 1, 2, 3, 4. It starts at zero and stops BEFORE the number written, which is a different convention from pseudocode.",
      },
      {
        wrong: "A WHILE loop always runs at least once.",
        right:
          "That is REPEAT UNTIL. A WHILE checks its condition first, so if the condition is false at the start the body is skipped entirely.",
      },
      {
        wrong: "A nested loop of 3 inside 4 runs 7 times.",
        right:
          "It runs 12 times. The inner loop completes fully on every pass of the outer one, so the counts multiply rather than add.",
      },
      {
        wrong: "An infinite loop will crash the program with an error message.",
        right:
          "It usually just hangs, doing nothing visible, which is far harder to diagnose than a crash. Nothing has gone wrong as far as the computer is concerned.",
      },
    ],
  },
  // ─── RUNG 5 ───────────────────────────────────────────────────────────────
  //
  // The first rung that needs a loop AND a variable working together, which is
  // why it sits after both. Zero-based indexing gets its own block because it
  // is the thing that trips everyone at exactly this point.
  "computer-science/programming-lists-and-arrays": {
    summary:
      "So far every value has needed its own variable, which falls apart the moment you have thirty marks to store. An array — Python calls it a list — holds many values under one name, reached by position. Combined with a loop it is what lets ten lines of code handle ten items or ten thousand, and almost every real program is built on that.",
    keyFacts: [
      {
        heading: "What an array is",
        points: [
          "An array is a single named variable holding many values, each reached by its position.",
          "The position is called the index, and looking one up is written scores[2].",
          "A traditional array is fixed in size and holds all one data type. A Python list can grow and shrink and hold mixed types.",
          "Arrays exist so that a loop can work through the values. Thirty separate variables cannot be looped over; one array of thirty can.",
        ],
      },
      {
        heading: "Indexing starts at ZERO",
        diagrams: [
          "array-indexing",
        ],
        points: [
          "The first item is at index 0, not 1. In an array of 5 items the valid indexes are 0, 1, 2, 3 and 4.",
          "So the LAST index is always the length minus one. For 5 items, the last is index 4.",
          "Asking for scores[5] in a 5-item array is an out-of-range error and crashes the program.",
          "This causes more off-by-one errors than anything else in programming, and it is worth over-learning rather than nearly learning.",
        ],
      },
      {
        heading: "Looping through an array",
        points: [
          "The standard pattern is a count-controlled loop from 0 to length minus one, using the counter as the index.",
          "FOR i <- 0 TO 4 with OUTPUT scores[i] inside prints all five values.",
          "Python offers for score in scores, which hands you each value directly and cannot go out of range — but gives you no index.",
          "Use the index version when you need to know WHERE something is, and the direct version when you only care about the values.",
        ],
      },
      {
        heading: "The three patterns worth memorising",
        points: [
          "TOTAL: set total <- 0 before the loop, then total <- total + array[i] inside. Forgetting to initialise is the classic error.",
          "LARGEST: set highest <- array[0] before the loop, then replace it whenever you find something bigger. Starting from 0 breaks on all-negative data.",
          "SEARCH: loop through comparing each item to the target; if it matches, you have found it and can record the index.",
          "COUNT: set count <- 0 and add one each time an item meets the condition. Almost every array question is one of these four in disguise.",
        ],
      },
      {
        heading: "Two-dimensional arrays",
        points: [
          "A 2D array is an array of arrays — a grid, with a row and a column index: grid[row][column].",
          "Both indexes start at zero, so the top-left cell is grid[0][0].",
          "Nested loops walk a grid: the outer loop over rows, the inner over columns.",
          "Seating plans, game boards, spreadsheets and images are all 2D arrays underneath.",
        ],
      },
    ],
    flashcards: [
      { term: "Array", definition: "A single named variable holding multiple values of the same type, each accessed by its position." },
      { term: "List", definition: "Python's version of an array, which can change size and hold values of different types." },
      { term: "Index", definition: "The position of an item within an array, counting from zero." },
      { term: "Element", definition: "A single value stored inside an array." },
      { term: "Zero-based indexing", definition: "The convention that the first element of an array is at index 0, so the last is at length minus one." },
      { term: "Out-of-range error", definition: "A runtime error caused by asking for an index that does not exist in the array." },
      { term: "Two-dimensional array", definition: "An array of arrays, forming a grid addressed by a row index and a column index." },
      { term: "Traversal", definition: "Working through every element of an array in turn, usually with a loop." },
      { term: "Linear search", definition: "Checking each element of an array in order until the target is found or the array runs out." },
      { term: "Accumulator", definition: "A variable that builds up a running total or count as a loop works through an array." },
    ],
    examTips: [
      {
        tip: "Write out the indexes before answering",
        detail:
          "For a 6-item array, jot 0 1 2 3 4 5 above the values. Every off-by-one mistake in the question disappears once you can see them, and it takes four seconds.",
      },
      {
        tip: "The last index is length minus one",
        detail:
          "Say it to yourself before every array question. An array of 10 has a last index of 9, and asking for [10] crashes the program.",
      },
      {
        tip: "Initialise before the loop, not inside it",
        detail:
          "total <- 0 goes ABOVE the loop. Put it inside and it resets on every pass, so the answer is always just the last element. This is a favourite trick in 'find the error' questions.",
      },
      {
        tip: "For largest, start from the first element",
        detail:
          "highest <- array[0], not highest <- 0. If every value is negative, starting from zero means nothing ever beats it and the answer comes out as 0, which is not even in the array.",
      },
      {
        tip: "Name the array pattern you are using",
        detail:
          "Saying 'a linear search' or 'a running total' before the code shows the examiner you know what you are doing, and often picks up a method mark even if the code has a slip in it.",
      },
      {
        tip: "Rows then columns, always in that order",
        detail:
          "grid[row][column]. Getting the two the wrong way round gives an answer from the wrong cell, or an out-of-range error on a non-square grid.",
      },
    ],
    workedExamples: [
      {
        question:
          "An array scores holds 12, 45, 7, 30, 22. What is scores[0], scores[3] and scores[5]?",
        steps: [
          "Write the indexes above the values: 0 is 12, 1 is 45, 2 is 7, 3 is 30, 4 is 22.",
          "scores[0] is the FIRST item, which is 12.",
          "scores[3] is the fourth item, which is 30.",
          "There is no index 5 — the array has 5 items so the last index is 4.",
        ],
        answer: "scores[0] is 12, scores[3] is 30, and scores[5] is an out-of-range error because the last valid index is 4.",
      },
      {
        question: "Write pseudocode to add up every value in an array called marks of length 10.",
        steps: [
          "Create the accumulator BEFORE the loop: total <- 0.",
          "Loop over every valid index. For 10 items those are 0 to 9.",
          "Inside the loop, add the current element: total <- total + marks[i].",
          "After the loop finishes, total holds the sum, so output it there and not inside.",
        ],
        answer:
          "total <- 0\nFOR i <- 0 TO 9\n  total <- total + marks[i]\nNEXT i\nOUTPUT total",
      },
      {
        question: "Find the error.\n\n  FOR i <- 0 TO 4\n    total <- 0\n    total <- total + nums[i]\n  NEXT i",
        steps: [
          "total <- 0 is inside the loop, so it runs on every single pass.",
          "That means the running total is wiped out immediately before each addition.",
          "So after the loop, total holds only the very last element.",
          "The fix is to move total <- 0 above the FOR line so it happens once.",
        ],
        answer:
          "The accumulator is being reset inside the loop. Moving total <- 0 above the loop fixes it.",
      },
      {
        question: "Write pseudocode to find the largest value in an array called temps of length 7.",
        steps: [
          "Start by assuming the first element is the biggest: highest <- temps[0].",
          "Loop through the rest, from index 1 to 6.",
          "If the current element is bigger than highest, replace highest with it.",
          "Starting from temps[0] rather than 0 means it still works when every temperature is below zero.",
        ],
        answer:
          "highest <- temps[0]\nFOR i <- 1 TO 6\n  IF temps[i] > highest THEN highest <- temps[i]\nNEXT i\nOUTPUT highest",
      },
      {
        question: "A 2D array seats has 3 rows and 4 columns. How many cells, and what is the bottom-right one?",
        steps: [
          "Every row has 4 cells and there are 3 rows, so 3 x 4 = 12 cells.",
          "Row indexes run 0, 1, 2 — the last row is 2.",
          "Column indexes run 0, 1, 2, 3 — the last column is 3.",
          "So the bottom-right cell is seats[2][3].",
        ],
        answer: "12 cells, and the bottom-right is seats[2][3].",
      },
    ],
    practice: [
      {
        question: "What is the index of the FIRST element of an array?",
        accept: ["0"],
        choices: ["0", "1", "-1", "It depends on the language"],
        answer: "0. Arrays are zero-indexed, which is why the last index is always the length minus one.",
      },
      {
        question: "An array has 8 elements. What is the index of the last one?",
        accept: ["7"],
        choices: ["7", "8", "9", "0"],
        answer: "7. With 8 elements the valid indexes are 0 to 7, so asking for index 8 is out of range.",
      },
      {
        question: "The array nums holds 4, 9, 1, 6. What is nums[2]?",
        accept: ["1"],
        choices: ["1", "9", "6", "4"],
        answer: "1. Counting from zero, index 0 is 4, index 1 is 9 and index 2 is 1.",
      },
      {
        question: "What happens if a program asks for an index that does not exist?",
        accept: ["A runtime error"],
        choices: ["A runtime error", "It returns zero", "It returns the last element", "A syntax error"],
        answer: "A runtime error, and the program stops. It is not a syntax error, because the code is perfectly legal — the problem only appears when it runs.",
      },
      {
        question: "Where should total <- 0 be placed when summing an array?",
        accept: ["Before the loop"],
        choices: ["Before the loop", "Inside the loop", "After the loop", "It does not matter"],
        answer: "Before the loop. Putting it inside resets the running total on every pass, so only the final element ends up counted.",
      },
      {
        question: "Why should a 'find the largest' algorithm start from the first element rather than from 0?",
        accept: ["because all the values might be negative", "the values could be negative", "negative values"],
        answer: "Because if every value is negative, nothing ever beats a starting value of 0, so the answer comes out as 0 — a number that is not even in the array.",
      },
      {
        question: "What is the term for the position of an item in an array?",
        accept: ["index"],
        answer: "The index. It starts at zero, so the third item is at index 2.",
      },
      {
        question: "How many cells are in a 2D array with 5 rows and 3 columns?",
        accept: ["15"],
        answer: "15. Every one of the 5 rows has 3 cells, so the two dimensions multiply.",
      },
      {
        question: "How do you refer to the top-left cell of a 2D array called grid?",
        accept: ["grid[0][0]"],
        answer: "grid[0][0]. Both the row index and the column index start at zero, and rows always come first.",
      },
      {
        question: "What kind of loop is normally used to work through every element of an array?",
        accept: ["a count-controlled loop", "count-controlled", "for loop"],
        answer: "A count-controlled loop. The length of the array is known, so the number of repetitions is known before the loop starts.",
      },
      {
        question: "Name the search that checks each element in order until it finds the target.",
        accept: ["linear search"],
        answer: "A linear search. It is simple and works on unsorted data, but on a long array it is slow compared with a binary search.",
      },
      {
        question: "What is the main advantage of an array over 30 separate variables?",
        accept: ["a loop can work through it", "you can loop through it", "it can be looped through"],
        answer: "A loop can work through it. Thirty separate variables need thirty lines of code; one array of thirty needs a loop of three, and that same loop works for three thousand.",
      },
      {
        question: "Which loops walk a two-dimensional array?",
        accept: ["nested loops", "two nested loops", "nested"],
        answer: "Nested loops — the outer one over the rows and the inner one over the columns, so the inner completes fully for each row.",
      },
      {
        question: "The array names holds 'Ali', 'Beth', 'Cai'. What is names[1]?",
        accept: ["Beth"],
        answer: "Beth. Index 0 is Ali, so index 1 is the second name.",
      },
      {
        question: "In an array of length n, write the range of valid indexes.",
        accept: ["0 to n-1", "0 to n - 1"],
        answer: "0 to n-1. This is worth memorising as a phrase, because it is the source of most off-by-one errors in array questions.",
      },
      {
        question: "What does traversal mean?",
        accept: ["working through every element", "going through every element", "visiting every element"],
        answer: "Working through every element of an array in turn, normally with a loop. Totalling, searching and counting are all traversals with different work done inside.",
      },
      {
        question: "A program must count how many marks in an array are 40 or over. What starting value does the counter need?",
        accept: ["0"],
        answer: "0, set before the loop. Each time a mark meets the condition the counter goes up by one, so it has to begin from nothing.",
      },
    ],
    misconceptions: [
      {
        wrong: "The first element of an array is at index 1.",
        right:
          "It is at index 0. That means the last index is the length minus one, and an array of 10 has no index 10 at all.",
      },
      {
        wrong: "An array of 8 items has indexes 1 to 8.",
        right:
          "It has indexes 0 to 7. Asking for index 8 is out of range and stops the program at runtime.",
      },
      {
        wrong: "It does not matter whether total <- 0 goes inside or outside the loop.",
        right:
          "It decides the answer. Inside the loop it resets on every pass, so the total ends up equal to the last element rather than the sum.",
      },
      {
        wrong: "Starting 'find the largest' from 0 is safe because scores are never negative.",
        right:
          "Temperatures, balances and score differences all go negative. Starting from array[0] costs nothing and is right in every case.",
      },
      {
        wrong: "grid[3][1] and grid[1][3] refer to the same cell.",
        right:
          "They are different cells. The row index always comes first, and on a non-square grid one of the two may not exist at all.",
      },
    ],
  },
  // ─── RUNG 6 ───────────────────────────────────────────────────────────────
  //
  // Strings after arrays on purpose: a string IS a sequence with indexes, so
  // everything learned about zero-based indexing transfers directly and this
  // rung is mostly about reusing it.
  "computer-science/programming-strings": {
    summary:
      "A string is a sequence of characters, and once you know that, it behaves almost exactly like an array you already understand — same zero-based indexes, same loops. This rung covers measuring, slicing, joining and comparing text, which is what a surprising amount of real programming turns out to be.",
    keyFacts: [
      {
        heading: "A string is a sequence",
        points: [
          "A string holds characters in order, and each one has an index starting at 0.",
          "In 'HELLO', index 0 is 'H' and index 4 is 'O'. The last index is the length minus one, exactly as with arrays.",
          "You can loop over a string one character at a time, which is how you count vowels or check a password.",
          "In most languages a string cannot be changed in place — operations build a NEW string rather than editing the old one.",
        ],
      },
      {
        heading: "Length, position and slicing",
        points: [
          "LEN(name) or len(name) gives the number of characters, counting spaces and punctuation.",
          "A substring is a piece of a string. name[0:3] takes characters from index 0 up to BUT NOT INCLUDING index 3 — so three characters.",
          "That exclusive end is where people slip. 'HELLO'[1:4] is 'ELL', not 'ELLO'.",
          "Some pseudocode uses a different convention — SUBSTRING(name, 1, 3) meaning start and length — so read the question's own definition if it gives one.",
        ],
      },
      {
        heading: "Joining and converting",
        points: [
          "Concatenation joins strings with +: 'Hi ' + name gives 'Hi Sam'.",
          "You cannot concatenate a string and a number directly — 'Score: ' + 7 is an error. Cast first: 'Score: ' + str(7).",
          "str() turns a number into text; int() and float() turn text into numbers.",
          "This is the same casting idea from earlier, arriving from the other direction.",
        ],
      },
      {
        heading: "Case and comparison",
        points: [
          "upper() and lower() convert case. They return a NEW string and leave the original alone.",
          "String comparison is case-sensitive: 'Yes' == 'yes' is False, which breaks a lot of beginner menus.",
          "The standard fix is to convert before comparing: IF answer.lower() == 'yes'.",
          "Comparing with < and > sorts alphabetically, but all capitals come before all lowercase in the character set, so 'Zebra' < 'apple' is True.",
        ],
      },
    ],
    flashcards: [
      { term: "String", definition: "A data type holding a sequence of characters, such as a word, sentence or password." },
      { term: "Character", definition: "A single letter, digit, space or symbol, which is the unit a string is made of." },
      { term: "Substring", definition: "A section of a string taken from it, such as the first three characters of a name." },
      { term: "Concatenation", definition: "Joining two or more strings end to end to make a single longer string." },
      { term: "LEN", definition: "A function returning the number of characters in a string, including spaces and punctuation." },
      { term: "Slicing", definition: "Taking a substring using a start and end index, where the end index is not included." },
      { term: "Case sensitivity", definition: "The property that uppercase and lowercase letters are treated as different characters when comparing strings." },
      { term: "upper()", definition: "A function returning a new string with every letter converted to uppercase, leaving the original unchanged." },
      { term: "Casting", definition: "Converting between data types, such as str(7) to turn the number 7 into the text '7'." },
      { term: "Immutable", definition: "A value that cannot be changed in place, so operations on it create a new value instead." },
    ],
    examTips: [
      {
        tip: "Write the string out with its indexes",
        detail:
          "For any slicing question, write the characters in a row with 0 1 2 3 4 underneath. Every off-by-one disappears and it takes seconds.",
      },
      {
        tip: "The end index of a slice is NOT included",
        detail:
          "name[0:3] gives three characters, at indexes 0, 1 and 2. This is the single most tested detail about strings and it catches people every year.",
      },
      {
        tip: "Always lower() before comparing user input",
        detail:
          "'Yes' == 'yes' is False. A menu that only accepts one exact capitalisation is a real bug, and examiners give credit for handling it.",
      },
      {
        tip: "LEN counts spaces",
        detail:
          "'Hello World' is 11 characters, not 10. Punctuation counts too. Questions use strings with spaces on purpose.",
      },
      {
        tip: "Cast numbers before joining them to text",
        detail:
          "'Total: ' + total crashes if total is a number. 'Total: ' + str(total) is what mark schemes expect to see.",
      },
      {
        tip: "Check whether the question defines its own SUBSTRING",
        detail:
          "Some boards use start-and-length rather than start-and-end. If the paper gives you a definition, use theirs, not Python's.",
      },
    ],
    workedExamples: [
      {
        question: "The variable word holds 'COMPUTER'. What is word[0], word[3] and LEN(word)?",
        steps: [
          "Write the indexes: C=0, O=1, M=2, P=3, U=4, T=5, E=6, R=7.",
          "word[0] is the first character: 'C'.",
          "word[3] is 'P'.",
          "There are 8 characters in total, so LEN(word) is 8 and the last valid index is 7.",
        ],
        answer: "word[0] is 'C', word[3] is 'P', and LEN(word) is 8.",
      },
      {
        question: "What is 'HELLO'[1:4]?",
        steps: [
          "Index the string: H=0, E=1, L=2, L=3, O=4.",
          "The slice starts at index 1, which is 'E'.",
          "It ends BEFORE index 4, so it takes indexes 1, 2 and 3.",
          "Those characters are E, L and L.",
        ],
        answer: "'ELL'. The end index of a slice is not included, so it gives three characters, not four.",
      },
      {
        question:
          "This should greet the user by name and show their score. Find both errors.\n\n  name = input('Name? ')\n  score = 7\n  print('Hi ' + name + ' your score is ' + score)",
        steps: [
          "score holds the number 7, not the text '7'.",
          "Concatenating a string and a number is an error in most languages, so the program crashes.",
          "The fix is str(score).",
          "There is also no space handling problem here, but the greeting reads better if the strings already contain their spaces — which they do.",
        ],
        answer:
          "The only real error is joining a number to a string. It should be + str(score), because + can concatenate two strings or add two numbers, but not mix them.",
      },
      {
        question: "Write pseudocode that accepts 'yes' from the user whatever capitalisation they use.",
        steps: [
          "Read the input into a variable: answer <- USERINPUT.",
          "String comparison is case-sensitive, so comparing directly to 'yes' rejects 'Yes' and 'YES'.",
          "Convert to a single case first with lower().",
          "Then compare against the lowercase version: IF answer.lower() == 'yes' THEN ...",
        ],
        answer: "IF answer.lower() == 'yes' THEN ... — converting before comparing removes the case problem entirely.",
      },
    ],
    practice: [
      {
        question: "What is 'HELLO'[1:4]?",
        accept: ["ELL"],
        choices: ["ELL", "ELLO", "HELL", "LLO"],
        answer: "ELL. The slice starts at index 1 and stops BEFORE index 4, so it takes indexes 1, 2 and 3.",
      },
      {
        question: "What is LEN('Hello World')?",
        accept: ["11"],
        choices: ["11", "10", "12", "2"],
        answer: "11. The space between the two words is a character and counts, which is exactly why questions use strings with spaces.",
      },
      {
        question: "Is 'Yes' == 'yes' True or False?",
        accept: ["False"],
        choices: ["False", "True", "It depends on the language", "An error"],
        answer: "False. String comparison is case-sensitive, which is why user input should be converted with lower() before being compared.",
      },
      {
        question: "What does 'Score: ' + 7 do in most languages?",
        accept: ["Causes an error"],
        choices: ["Causes an error", "Gives 'Score: 7'", "Gives 'Score: ' 7", "Gives 7"],
        answer: "It causes an error, because + cannot mix a string and a number. Casting with str(7) first is what makes it work.",
      },
      {
        question: "What index is the first character of a string at?",
        accept: ["0"],
        choices: ["0", "1", "-1", "The same as its length"],
        answer: "0. Strings are indexed exactly like arrays, so the last character is at the length minus one.",
      },
      {
        question: "The variable w holds 'COMPUTER'. What is w[3]?",
        accept: ["P"],
        answer: "P. Counting from zero: C is 0, O is 1, M is 2 and P is 3.",
      },
      {
        question: "What is the term for joining two strings together?",
        accept: ["concatenation"],
        answer: "Concatenation. The + operator performs it when both of its operands are strings.",
      },
      {
        question: "What is the last valid index of the string 'CAT'?",
        accept: ["2"],
        answer: "2. The string has 3 characters at indexes 0, 1 and 2, so the last index is the length minus one.",
      },
      {
        question: "Which function converts a number into a string?",
        accept: ["str()", "str"],
        answer: "str(). It is needed whenever a number has to be joined onto text, such as 'Total: ' + str(total).",
      },
      {
        question: "What does upper() do to the original string it is called on?",
        accept: ["nothing", "leaves it unchanged", "it is unchanged"],
        answer: "Nothing. It returns a new uppercase string and leaves the original exactly as it was, which is why the result has to be stored or used.",
      },
      {
        question: "How would you make a comparison accept 'YES', 'Yes' and 'yes' equally?",
        accept: ["convert to lower case first", "use lower()", "lower() then compare"],
        answer: "Convert the input to a single case before comparing, with something like answer.lower() == 'yes'. Comparing directly is case-sensitive and would reject two of the three.",
      },
      {
        question: "How many characters does the slice name[2:6] return?",
        accept: ["4"],
        answer: "4. It takes indexes 2, 3, 4 and 5 — the end index is not included, so it is simply 6 minus 2.",
      },
      {
        question: "What is a substring?",
        accept: ["a section of a string", "part of a string", "a piece of a string"],
        answer: "A section taken from a string, such as the first three characters of a name. Slicing is how you get one.",
      },
      {
        question: "Why is 'Zebra' < 'apple' True?",
        accept: ["capitals come before lowercase", "uppercase comes first", "capital letters sort first"],
        answer: "Because in the character set every uppercase letter comes before every lowercase one, so a capital Z still sorts ahead of a lowercase a.",
      },
      {
        question: "Give the term for a value that cannot be changed in place.",
        accept: ["immutable"],
        answer: "Immutable. Strings work this way in most languages, so operations on them build a new string rather than editing the existing one.",
      },
      {
        question: "Write the expression that gets the first character of a string called word.",
        accept: ["word[0]"],
        answer: "word[0]. Indexing starts at zero, so index 0 is the first character rather than the second.",
      },
      {
        question: "A password must be at least 8 characters. Write the condition that rejects it.",
        accept: ["LEN(password) < 8", "len(password) < 8"],
        answer: "LEN(password) < 8. 'At least 8' means 8 is acceptable, so anything strictly below 8 is what should be rejected.",
      },
    ],
    misconceptions: [
      {
        wrong: "'HELLO'[1:4] gives 'ELLO'.",
        right:
          "It gives 'ELL'. The end index is not included, so the slice stops one character earlier than it looks like it should.",
      },
      {
        wrong: "LEN('Hello World') is 10, because there are ten letters.",
        right:
          "It is 11. The space is a character too, and so is every punctuation mark.",
      },
      {
        wrong: "'Yes' and 'yes' are the same string.",
        right:
          "They are different. Comparison is case-sensitive, which is why almost every real program converts input to one case before checking it.",
      },
      {
        wrong: "upper() changes the string it is used on.",
        right:
          "It returns a new string and leaves the original untouched. If you do not store or use the result, nothing has happened.",
      },
      {
        wrong: "'Score: ' + 7 prints 'Score: 7'.",
        right:
          "It is an error in most languages. + either adds two numbers or joins two strings, and it cannot do one of each.",
      },
    ],
  },
  // ─── RUNG 7 ───────────────────────────────────────────────────────────────
  //
  // Subprograms only make sense once there is something worth reusing, which
  // is why they sit after arrays and strings rather than near the start.
  "computer-science/programming-subprograms": {
    summary:
      "A subprogram is a named, reusable chunk of a program that does one job. Once a program is more than a page long, breaking it into subprograms is the difference between something you can fix and something you have to throw away. This rung covers procedures, functions, parameters, return values and scope — the last of which explains most of the confusing bugs at this level.",
    keyFacts: [
      {
        heading: "Why subprograms exist",
        points: [
          "They stop repetition: write the code once, call it from five places.",
          "They make a program readable — calculateTotal() says what is happening in a way twenty lines of arithmetic does not.",
          "They make testing possible: you can test one subprogram on its own rather than the whole program at once.",
          "They are how decomposition — breaking a big problem into smaller ones — actually appears in code.",
        ],
      },
      {
        heading: "Procedures and functions",
        points: [
          "A FUNCTION returns a value to whatever called it. A PROCEDURE does a job but returns nothing.",
          "A function call is used as a value: total <- add(3, 4). A procedure call is a statement on its own: printMenu().",
          "Rule of thumb: if you want an answer back, write a function. If you want something to happen, write a procedure.",
          "Python uses def for both — whether it returns something is what decides which it is.",
        ],
      },
      {
        heading: "Parameters and arguments",
        diagrams: [
          "subprogram-call",
        ],
        points: [
          "A parameter is the named placeholder in the subprogram's definition. An argument is the actual value passed in when it is called.",
          "In FUNCTION area(width, height), width and height are parameters. In area(5, 3), the 5 and 3 are arguments.",
          "Arguments are matched to parameters BY POSITION, so the order matters: area(5, 3) is not the same as area(3, 5) unless the maths happens to be symmetrical.",
          "Parameters are what make a subprogram reusable. A subprogram with no parameters can only ever do the exact same thing.",
        ],
      },
      {
        heading: "Return values",
        points: [
          "RETURN sends a value back and ends the subprogram immediately — nothing after it runs.",
          "The value has to be caught or used, or it is thrown away: writing add(3, 4) on its own line computes 7 and discards it.",
          "Returning is not the same as printing. A function that prints gives the value to the user; a function that returns gives it to the program.",
          "Printing inside a function you meant to return from is one of the most common errors at this level.",
        ],
      },
      {
        heading: "Scope",
        points: [
          "A local variable exists only inside the subprogram that created it, and vanishes when it finishes.",
          "A global variable exists everywhere in the program.",
          "Two subprograms can each have a local variable called total without any clash at all — they are genuinely different variables.",
          "Local is the default and the right choice. Globals can be changed from anywhere, which makes bugs almost impossible to track down.",
        ],
      },
    ],
    flashcards: [
      { term: "Subprogram", definition: "A named, reusable block of code that performs one specific task and can be called from elsewhere." },
      { term: "Procedure", definition: "A subprogram that carries out a task but does not return a value to whatever called it." },
      { term: "Function", definition: "A subprogram that returns a value to the code that called it." },
      { term: "Parameter", definition: "A named placeholder in a subprogram's definition, which receives a value when the subprogram is called." },
      { term: "Argument", definition: "The actual value passed into a subprogram when it is called, filling one of its parameters." },
      { term: "Return value", definition: "The value a function sends back to the code that called it." },
      { term: "Local variable", definition: "A variable that exists only inside the subprogram where it was created, and is destroyed when it ends." },
      { term: "Global variable", definition: "A variable accessible from anywhere in the program, including inside every subprogram." },
      { term: "Scope", definition: "The region of a program in which a particular variable can be accessed." },
      { term: "Decomposition", definition: "Breaking a large problem into smaller sub-problems that can each be solved separately." },
      { term: "Call", definition: "The instruction that runs a subprogram, optionally passing arguments to it." },
    ],
    examTips: [
      {
        tip: "Function returns, procedure does not — say it that way",
        detail:
          "That one sentence is the whole distinction and it appears in some form nearly every year. Add an example of each and the marks are yours.",
      },
      {
        tip: "Parameter is in the definition, argument is in the call",
        detail:
          "Definition, parameter. Call, argument. Examiners use the two words precisely, so an answer that swaps them looks like a guess even when the understanding is there.",
      },
      {
        tip: "RETURN is not PRINT",
        detail:
          "print shows a value to the user. return hands it back to the program so it can be stored or used. A function that prints instead of returning cannot be used in a calculation.",
      },
      {
        tip: "Give a reason when asked why subprograms are used",
        detail:
          "'Avoids repetition', 'makes the code easier to read', 'allows each part to be tested separately'. Two named benefits usually score two marks; 'it is tidier' scores none.",
      },
      {
        tip: "Local variables cannot be seen outside",
        detail:
          "If a question shows a variable created inside a subprogram and then used after it, that is the error. Say the word 'scope' in your answer.",
      },
      {
        tip: "Watch the order of arguments",
        detail:
          "They fill the parameters by position, not by name. Swapping two arguments compiles perfectly and gives a wrong answer, which makes it a favourite for 'find the logic error'.",
      },
    ],
    workedExamples: [
      {
        question: "Is this a function or a procedure, and why?\n\n  SUBROUTINE greet(name)\n    OUTPUT 'Hello ' + name\n  ENDSUBROUTINE",
        steps: [
          "Look for a RETURN statement. There is not one.",
          "It does something — it outputs a greeting — but it hands nothing back to the caller.",
          "A subprogram that does a job without returning a value is a procedure.",
          "You would call it as a statement on its own: greet('Sam').",
        ],
        answer: "A procedure, because it performs a task but does not return a value.",
      },
      {
        question: "Write a function that takes two numbers and returns the larger.",
        steps: [
          "It has to give an answer back, so it is a function with a RETURN.",
          "It needs two pieces of information, so it needs two parameters.",
          "Compare them with selection, and return whichever is bigger.",
          "Return, not print — the caller may want to do something further with the answer.",
        ],
        answer:
          "FUNCTION larger(a, b)\n  IF a > b THEN\n    RETURN a\n  ELSE\n    RETURN b\n  ENDIF\nENDFUNCTION",
      },
      {
        question:
          "Why does this fail?\n\n  SUBROUTINE calculate()\n    total <- 5 * 3\n  ENDSUBROUTINE\n\n  calculate()\n  OUTPUT total",
        steps: [
          "total is created inside the subprogram, so it is a local variable.",
          "A local variable only exists while its subprogram is running.",
          "When calculate() finishes, total is destroyed.",
          "The OUTPUT line then refers to a variable that does not exist, which is a scope error.",
        ],
        answer:
          "total is local to calculate(), so it no longer exists by the time OUTPUT runs. Make it a function that RETURNs the value instead.",
      },
      {
        question: "In area(5, 3), which are the parameters and which are the arguments?\n\n  FUNCTION area(width, height)\n    RETURN width * height\n  ENDFUNCTION",
        steps: [
          "The definition line names width and height — those are the placeholders.",
          "Placeholders in a definition are called parameters.",
          "The call supplies the actual values 5 and 3.",
          "Actual values in a call are called arguments, and they fill the parameters in order: width gets 5, height gets 3.",
        ],
        answer:
          "width and height are the parameters; 5 and 3 are the arguments. They are matched by position, so width is 5 and height is 3.",
      },
    ],
    practice: [
      {
        question: "What is the difference between a function and a procedure?",
        accept: ["A function returns a value, a procedure does not"],
        choices: [
          "A function returns a value, a procedure does not",
          "A procedure returns a value, a function does not",
          "A function takes parameters, a procedure does not",
          "There is no difference",
        ],
        answer: "A function returns a value to whatever called it. A procedure carries out a task but hands nothing back.",
      },
      {
        question: "In FUNCTION area(width, height), what are width and height called?",
        accept: ["Parameters"],
        choices: ["Parameters", "Arguments", "Local variables", "Return values"],
        answer: "Parameters. They are the placeholders in the definition; the values passed in when it is called are the arguments.",
      },
      {
        question: "A variable created inside a subprogram is described as what?",
        accept: ["Local"],
        choices: ["Local", "Global", "Constant", "Returned"],
        answer: "Local. It exists only while that subprogram is running and is destroyed when it finishes.",
      },
      {
        question: "What happens to any code written after a RETURN statement in a function?",
        accept: ["It never runs"],
        choices: ["It never runs", "It runs first", "It runs afterwards", "It causes a syntax error"],
        answer: "It never runs. RETURN sends the value back and ends the subprogram there and then.",
      },
      {
        question: "Which is the best reason to use subprograms?",
        accept: ["They avoid repeating the same code"],
        choices: [
          "They avoid repeating the same code",
          "They make the program run faster",
          "They use less memory",
          "They are required by the language",
        ],
        answer: "They avoid repetition, and they also make a program readable and testable. Speed is not the reason.",
      },
      {
        question: "What is the value passed into a subprogram when it is called?",
        accept: ["an argument"],
        answer: "An argument. The placeholder that receives it, back in the definition, is the parameter.",
      },
      {
        question: "Name the term for the region of a program where a variable can be accessed.",
        accept: ["scope"],
        answer: "Scope. A local variable's scope is the subprogram it was created in; a global's scope is the whole program.",
      },
      {
        question: "Why is print not a substitute for return in a function?",
        accept: ["print shows it to the user, return gives it to the program", "return gives the value back to the program", "printing does not give the value back"],
        answer: "print displays the value to the user; return hands it back to the program so it can be stored or used in a calculation. A function that prints cannot be used as part of a bigger expression.",
      },
      {
        question: "Can two different subprograms each have a local variable called total?",
        accept: ["yes"],
        answer: "Yes. They are genuinely separate variables with separate scopes, and neither can see the other.",
      },
      {
        question: "What is decomposition?",
        accept: ["breaking a problem into smaller problems", "breaking a large problem into smaller ones", "splitting a problem into smaller parts"],
        answer: "Breaking a large problem into smaller sub-problems that can each be solved separately. Subprograms are how it shows up in actual code.",
      },
      {
        question: "In the call area(5, 3), which parameter does the 5 fill?",
        accept: ["the first one", "width", "the first parameter"],
        answer: "The first one. Arguments are matched to parameters by position, not by name, which is why swapping two of them gives a silently wrong answer.",
      },
      {
        question: "Give one benefit of subprograms for testing.",
        accept: ["each one can be tested separately", "they can be tested on their own", "you can test them individually"],
        answer: "Each subprogram can be tested on its own, so a fault can be located in one small block rather than searched for across the whole program.",
      },
      {
        question: "Why are global variables usually avoided?",
        accept: ["they can be changed from anywhere", "any part of the program can change them", "they can be changed anywhere"],
        answer: "Because any part of the program can change them, so when one holds the wrong value there is no small place to look for the cause.",
      },
      {
        question: "What keyword sends a value back from a function?",
        accept: ["RETURN", "return"],
        answer: "RETURN. It both supplies the value and ends the subprogram immediately.",
      },
      {
        question: "Is greet('Sam') that outputs a message a function or a procedure?",
        accept: ["a procedure", "procedure"],
        answer: "A procedure. It does a job but hands no value back, which is exactly what distinguishes the two.",
      },
      {
        question: "What is wrong with using a variable after the subprogram that created it has finished?",
        accept: ["it is out of scope", "the variable is local", "it no longer exists"],
        answer: "The variable was local, so it was destroyed when the subprogram ended and is now out of scope. The fix is to return the value instead.",
      },
      {
        question: "A subprogram takes no parameters. What limits does that place on it?",
        accept: ["it can only ever do the same thing", "it always does the same thing", "it cannot be reused with different values"],
        answer: "It can only ever do exactly the same thing, because nothing can be passed in to vary its behaviour. Parameters are what make a subprogram genuinely reusable.",
      },
    ],
    misconceptions: [
      {
        wrong: "A function and a procedure are two words for the same thing.",
        right:
          "A function returns a value; a procedure does not. Which one you need depends on whether the caller wants an answer back.",
      },
      {
        wrong: "Printing a value inside a function is the same as returning it.",
        right:
          "Printing shows it to the user and then loses it. Returning gives it to the program, so it can be stored, compared or used in a calculation.",
      },
      {
        wrong: "Parameter and argument mean the same thing.",
        right:
          "The parameter is the placeholder in the definition; the argument is the actual value in the call. Exam questions use the two words precisely.",
      },
      {
        wrong: "A variable made inside a subprogram can be used after it finishes.",
        right:
          "It is local and is destroyed when the subprogram ends. To get the value out, the subprogram has to return it.",
      },
      {
        wrong: "Arguments are matched to parameters by name.",
        right:
          "They are matched by position. area(3, 5) and area(5, 3) fill the parameters differently, and nothing warns you about it.",
      },
    ],
  },
  // ─── RUNG 8 ───────────────────────────────────────────────────────────────
  //
  // Files are the first time a program's data survives the program ending,
  // which is a genuinely new idea rather than another operation to learn.
  "computer-science/programming-file-handling": {
    summary:
      "Everything a program has stored so far disappears the moment it stops. A file is how data outlives the program that made it — high scores, saved games, records, logs. The operations are few and always the same: open, read or write, close. The details that cost marks are which mode to open in, and remembering to close it afterwards.",
    keyFacts: [
      {
        heading: "Why files at all",
        points: [
          "Variables and arrays live in RAM, which is volatile — it empties when the program ends or the power goes.",
          "A file is stored on secondary storage, so the data is still there next time.",
          "That is the whole reason for file handling: persistence between runs.",
          "A text file is the simplest kind, holding readable characters, usually one record per line.",
        ],
      },
      {
        heading: "Open, use, close",
        points: [
          "Every file operation follows the same three steps: open the file, read from or write to it, close it.",
          "Opening needs a filename and a MODE saying what you intend to do with it.",
          "Closing releases the file and — importantly — makes sure everything written has actually been saved to disk.",
          "Forgetting to close can lose the last thing you wrote, and mark schemes look for the close.",
        ],
      },
      {
        heading: "The three modes",
        points: [
          "READ opens an existing file to look at its contents. Opening a file that does not exist is an error.",
          "WRITE creates the file if it does not exist — and ERASES everything in it if it does. This is the dangerous one.",
          "APPEND adds to the end, keeping what was already there. This is what you almost always want for a log or a high-score table.",
          "Choosing WRITE when you meant APPEND destroys the file's contents instantly and without warning.",
        ],
      },
      {
        heading: "Reading a file",
        points: [
          "readLine() reads one line at a time and moves on to the next.",
          "A loop over the lines is the normal pattern, ending when there are no lines left — endOfFile() is the usual test.",
          "Everything read from a text file arrives as a STRING, exactly like input from a keyboard, so numbers need casting before arithmetic.",
          "Lines often end with a newline character that needs stripping before the value is used or compared.",
        ],
      },
      {
        heading: "CSV files",
        points: [
          "CSV stands for comma-separated values: one record per line, fields separated by commas.",
          "'Sam,15,Blue' is one record with three fields.",
          "To use the fields, split the line on the commas into an array, then index it.",
          "CSV is popular because almost everything can read it — spreadsheets, databases and programs alike — and it is just a text file underneath.",
        ],
      },
    ],
    flashcards: [
      { term: "File handling", definition: "Reading data from and writing data to a file so that it survives after the program ends." },
      { term: "Persistence", definition: "Data continuing to exist after the program that created it has stopped running." },
      { term: "Read mode", definition: "Opening a file in order to look at its contents, which fails if the file does not exist." },
      { term: "Write mode", definition: "Opening a file for writing, which creates it if absent and erases its existing contents if present." },
      { term: "Append mode", definition: "Opening a file for writing so that new data is added to the end, keeping what was already there." },
      { term: "readLine", definition: "An operation that reads the next single line from an open file and moves the position on." },
      { term: "endOfFile", definition: "A test that becomes true when there are no more lines left to read, used to end a reading loop." },
      { term: "CSV", definition: "Comma-separated values: a text file holding one record per line with fields separated by commas." },
      { term: "Record", definition: "One complete set of related fields, usually stored as a single line of a file." },
      { term: "Field", definition: "One individual item of data within a record, such as a name or an age." },
    ],
    examTips: [
      {
        tip: "Name the mode and say what it does to existing data",
        detail:
          "'Append, because write mode would delete the existing high scores' is a complete answer. Naming the mode alone usually gets one mark of two.",
      },
      {
        tip: "Always close the file in written answers",
        detail:
          "It is a line of code and it is often a mark. It also matters in reality, because unclosed files can lose the last thing written.",
      },
      {
        tip: "Cast anything read from a file before doing arithmetic",
        detail:
          "File contents come back as strings, exactly like keyboard input. This is the same trap as int(input()) arriving in a new place.",
      },
      {
        tip: "Read the file line by line with a loop and an end test",
        detail:
          "WHILE NOT endOfFile() ... readLine() ... ENDWHILE is the pattern examiners expect. A loop that reads a fixed number of lines is fragile and scores less.",
      },
      {
        tip: "For CSV, split then index",
        detail:
          "Split the line on commas into an array, then take fields[0], fields[1] and so on. Say the word 'split' — it is often the mark.",
      },
      {
        tip: "Watch for the file that might not exist",
        detail:
          "Opening a missing file in read mode is a runtime error. A robust answer checks first, or handles the error, and questions about defensive design reward saying so.",
      },
    ],
    workedExamples: [
      {
        question: "A program adds a new score to an existing high-score file. Which mode, and why?",
        steps: [
          "The existing scores have to survive, so the file must not be emptied.",
          "WRITE mode erases the contents of an existing file the moment it is opened.",
          "READ mode cannot add anything at all.",
          "APPEND adds to the end and keeps what was there, which is exactly what is needed.",
        ],
        answer:
          "Append mode, because write mode would erase the existing high scores as soon as the file was opened.",
      },
      {
        question: "Write pseudocode that reads and outputs every line of scores.txt.",
        steps: [
          "Open the file in read mode.",
          "Loop until there is nothing left to read, using the end-of-file test.",
          "Inside the loop, read one line and output it.",
          "Close the file after the loop, not inside it.",
        ],
        answer:
          "file <- OPEN('scores.txt', READ)\nWHILE NOT file.endOfFile()\n  line <- file.readLine()\n  OUTPUT line\nENDWHILE\nfile.close()",
      },
      {
        question: "A CSV line holds 'Sam,15,Blue'. How do you get the age out of it as a number?",
        steps: [
          "Split the line on the commas, which gives an array: ['Sam', '15', 'Blue'].",
          "The fields are indexed from zero, so the age is at index 1.",
          "That value is the STRING '15', because everything read from a file is text.",
          "Cast it with int() to get the number 15 before doing any arithmetic on it.",
        ],
        answer: "fields <- line.split(','), then age <- int(fields[1]) gives the number 15.",
      },
      {
        question:
          "Explain what goes wrong here.\n\n  file <- OPEN('log.txt', WRITE)\n  file.writeLine('Started')\n  file <- OPEN('log.txt', WRITE)\n  file.writeLine('Finished')\n  file.close()",
        steps: [
          "The first open in WRITE mode creates or empties the file, then 'Started' is written.",
          "The file is then opened in WRITE mode AGAIN, which empties it a second time.",
          "So 'Started' is destroyed before it was ever kept.",
          "The first file was also never closed, which can lose data on its own.",
        ],
        answer:
          "Opening in WRITE mode a second time erases 'Started'. The file should be opened once, or reopened in APPEND mode, and every open needs a matching close.",
      },
    ],
    practice: [
      {
        question: "Which mode adds data to the end of a file without erasing what is there?",
        accept: ["Append"],
        choices: ["Append", "Write", "Read", "Open"],
        answer: "Append. Write mode erases the existing contents as soon as the file is opened, which is the classic way to destroy a high-score table.",
      },
      {
        question: "What happens when an existing file is opened in WRITE mode?",
        accept: ["Its contents are erased"],
        choices: ["Its contents are erased", "The new data is added to the end", "It causes an error", "Nothing changes until you write"],
        answer: "Its contents are erased immediately. That is why append mode exists and why choosing between them matters so much.",
      },
      {
        question: "What data type is returned when a line is read from a text file?",
        accept: ["String"],
        choices: ["String", "Integer", "Real", "It depends on the contents"],
        answer: "String. Exactly like keyboard input, anything read from a text file is text and must be cast before arithmetic.",
      },
      {
        question: "What does CSV stand for?",
        accept: ["Comma-separated values"],
        choices: ["Comma-separated values", "Column-sorted values", "Character string values", "Compressed storage volume"],
        answer: "Comma-separated values. Each line is one record and the commas divide it into fields.",
      },
      {
        question: "Why must a file be closed after use?",
        accept: ["To make sure everything written is saved"],
        choices: [
          "To make sure everything written is saved",
          "To delete the file",
          "To convert it to a string",
          "To move it to secondary storage",
        ],
        answer: "To make sure everything written has actually reached the disk, and to release the file so other programs can use it.",
      },
      {
        question: "Why is a file needed rather than just an array?",
        accept: ["arrays are lost when the program ends", "RAM is volatile", "the data would be lost"],
        answer: "Because an array lives in RAM, which is volatile — everything in it is lost when the program ends. A file is on secondary storage and persists.",
      },
      {
        question: "Name the three steps every file operation follows.",
        accept: ["open, read or write, close", "open, use, close", "open read write close"],
        answer: "Open, read or write, then close. The mode is chosen at the open step and the close is what guarantees the data is saved.",
      },
      {
        question: "In the CSV line 'Sam,15,Blue', how many fields are there?",
        accept: ["3"],
        answer: "3. The two commas divide the record into three fields: a name, an age and a colour.",
      },
      {
        question: "After splitting 'Sam,15,Blue' on commas, which index holds the age?",
        accept: ["1"],
        answer: "1. The array is indexed from zero, so index 0 is 'Sam' and index 1 is '15'.",
      },
      {
        question: "What test ends a loop that is reading through a file?",
        accept: ["endOfFile", "end of file", "endOfFile()"],
        answer: "The end-of-file test. Looping while it is false reads exactly as many lines as the file has, however many that turns out to be.",
      },
      {
        question: "What happens if a program opens a non-existent file in read mode?",
        accept: ["a runtime error", "an error", "it crashes"],
        answer: "A runtime error, and the program stops. A robust program checks the file exists first, or handles the error rather than crashing.",
      },
      {
        question: "Give the term for data surviving after the program that created it stops.",
        accept: ["persistence"],
        answer: "Persistence. It is the entire reason file handling exists, and it is what distinguishes secondary storage from RAM.",
      },
      {
        question: "A program keeps a log of every time it runs. Which mode should it open the log with?",
        accept: ["append"],
        answer: "Append. Each run adds a new line to the end, and the previous entries survive — which is the whole point of a log.",
      },
      {
        question: "What is one record in a CSV file usually stored as?",
        accept: ["one line", "a line", "a single line"],
        answer: "One line. Records are separated by line breaks and fields within a record are separated by commas.",
      },
      {
        question: "Why must a number read from a file be cast before it is used in a calculation?",
        accept: ["it is read as a string", "it comes back as text", "because it is a string"],
        answer: "Because everything read from a text file comes back as a string. Adding two of them would concatenate rather than add.",
      },
      {
        question: "Which storage is a file kept on, and which is an array kept in?",
        accept: ["secondary storage and RAM", "secondary storage, RAM"],
        answer: "A file is on secondary storage, which is non-volatile. An array is in RAM, which is volatile and empties when the program ends.",
      },
      {
        question: "Write the pseudocode line that opens data.txt so that new lines are added to the end.",
        accept: ["OPEN('data.txt', APPEND)", "open('data.txt', append)", "file <- OPEN('data.txt', APPEND)"],
        answer: "OPEN('data.txt', APPEND). Using WRITE here would erase everything already in the file the instant it opened.",
      },
    ],
    misconceptions: [
      {
        wrong: "Write mode adds new data to the end of the file.",
        right:
          "It erases everything already there. Append is the mode that adds to the end, and confusing the two destroys the file's contents instantly.",
      },
      {
        wrong: "Numbers read from a file come back as numbers.",
        right:
          "They come back as strings, exactly like keyboard input. Doing arithmetic on them without casting either concatenates or crashes.",
      },
      {
        wrong: "Closing a file is optional tidying up.",
        right:
          "It is what guarantees the data has actually reached the disk. An unclosed file can silently lose the last thing written to it.",
      },
      {
        wrong: "A CSV file is a special file format that needs special software.",
        right:
          "It is an ordinary text file. The commas are just characters, which is exactly why so many different programs can read it.",
      },
      {
        wrong: "Opening a file that does not exist creates it, whatever the mode.",
        right:
          "Write and append create it. Read does not — opening a missing file in read mode is a runtime error.",
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

    workedExamples: [
      {
        question:
          "A small business has 40 computers on one site and needs central backups, shared files and one place to manage staff accounts. Recommend a network type and justify it.",
        steps: [
          "Note the numbers given: 40 machines is well beyond a handful.",
          "Note the requirements: central backups, shared files, central account management — all point the same way.",
          "Peer-to-peer would mean backing up and securing 40 machines individually, and performance drops as peers are added.",
          "Client-server puts files, backups and accounts in one place, managed once.",
          "Acknowledge the cost: a server is expensive, needs expertise, and is a single point of failure — which is why they should also plan for backups of the server itself.",
        ],
        answer:
          "Client-server. With 40 machines and a requirement for central backups and account management, managing each machine separately would be impractical, and client-server centralises exactly those tasks.",
      },
      {
        question:
          "Data is sent from a laptop to a server on the other side of the world. Explain which addresses are used at each stage.",
        steps: [
          "Within the laptop's own local network, the switch forwards the data using MAC addresses — the permanent hardware address of each network card.",
          "To leave the local network, the data reaches the router.",
          "The router directs the data between networks using IP addresses, which identify devices on a network and can change.",
          "This repeats across each network on the route until the destination network is reached.",
          "On the final local network, MAC addressing again delivers the data to the correct device.",
        ],
        answer:
          "MAC addresses within each local network (used by switches), IP addresses to route between networks (used by routers).",
      },
      {
        question:
          "A school's network uses a star topology. One cable to a classroom computer is damaged. Explain the effect, then explain what would happen if the central switch failed instead.",
        steps: [
          "In a star topology, every device has its own dedicated connection to a central switch.",
          "A damaged cable therefore affects only the single device at the end of it.",
          "Every other device still has its own working link to the switch, so the rest of the network is unaffected.",
          "The central switch, however, carries every connection.",
          "If it fails, no device can reach any other — the whole network goes down. That is the trade-off of a star.",
        ],
        answer:
          "One damaged cable affects only that one device. A failed central switch takes the entire network down, because every connection passes through it.",
      },
      {
        question:
          "Explain why IPv6 was introduced, using the numbers.",
        steps: [
          "IPv4 addresses are 32 bits long.",
          "The number of possible addresses is therefore 2³², which is about 4.3 billion.",
          "There are more than 4.3 billion internet-connected devices in the world, and most people own several.",
          "IPv6 uses 128 bits, giving 2¹²⁸ addresses — a number vastly larger than any plausible need.",
        ],
        answer:
          "Because 32-bit IPv4 provides only about 4.3 billion addresses and the world ran out. IPv6's 128 bits removes that limit.",
      },
    ],

    practice: [
      {
        question:
          "Which device connects devices on a LAN and sends data only to the intended recipient?",
        accept: ["switch", "a switch"],
        answer:
          "A switch. It uses MAC addresses to forward data only to the correct device.",
      },
      {
        question:
          "Which device connects different networks together and directs data between them?",
        accept: ["router", "a router"],
        answer: "A router, using IP addresses.",
      },
      {
        question: "Which type of address does a switch use?",
        accept: ["mac", "mac address", "mac addresses"],
        answer:
          "MAC addresses — the permanent hardware address of a network interface card, used within a local network.",
      },
      {
        question: "Which type of address does a router use?",
        accept: ["ip", "ip address", "ip addresses"],
        answer: "IP addresses, which identify devices across networks and can change.",
      },
      {
        question: "How many bits are in an IPv4 address?",
        accept: ["32", "32 bits"],
        answer:
          "32 bits, written as four numbers from 0 to 255. That gives about 4.3 billion addresses, which ran out.",
      },
      {
        question: "How many bits are in an IPv6 address?",
        accept: ["128", "128 bits"],
        answer: "128 bits, written in hexadecimal.",
      },
      {
        question: "How many bits are in a MAC address?",
        accept: ["48", "48 bits"],
        answer: "48 bits, written in hexadecimal and assigned by the manufacturer.",
      },
      {
        question: "What does LAN stand for?",
        accept: ["local area network"],
        answer:
          "Local Area Network — a small geographical area where the organisation usually owns the hardware and the connections.",
      },
      {
        question: "What does WAN stand for?",
        accept: ["wide area network"],
        answer:
          "Wide Area Network — a large geographical area, typically over connections leased from a telecommunications company.",
      },
      {
        question:
          "Which network type has all devices as equals sharing files directly, with no central server?",
        accept: ["peer to peer", "peer-to-peer", "p2p", "peertopeer"],
        answer:
          "Peer-to-peer. Cheap and simple for a handful of machines, but backups and security must be handled on every device.",
      },
      {
        question:
          "In which topology does every device connect to a central switch?",
        accept: ["star", "star topology", "a star topology"],
        answer:
          "Star. One failed cable affects only that device; a failed central switch takes down everything.",
      },
      {
        question:
          "In which topology do devices connect to many others so data has multiple possible routes?",
        accept: ["mesh", "mesh topology", "a mesh topology"],
        answer:
          "Mesh. Very resilient, but expensive because of the amount of cabling.",
      },
      {
        question:
          "What is the term for the amount of data that can be transmitted over a connection in a given time?",
        accept: ["bandwidth"],
        answer:
          "Bandwidth. It measures capacity, not speed of response \u2014 that is latency.",
      },
      {
        question:
          "What is the term for the delay between data being sent and beginning to arrive?",
        accept: ["latency"],
        answer:
          "Latency. High bandwidth with high latency still feels slow — which is why satellite connections are poor for video calls.",
      },
      {
        question:
          "Which hardware component gives a device its unique MAC address?",
        accept: [
          "network interface card", "nic", "the nic", "network card",
          "the network interface card",
        ],
        answer:
          "The Network Interface Card (NIC), assigned by the manufacturer.",
      },
      {
        question:
          "Name the transmission medium that carries data as pulses of light and gives high speed over long distances.",
        accept: ["fibre optic", "fibre optic cable", "fiber optic", "fibre", "optical fibre"],
        answer:
          "Fibre optic cable. Faster and better over distance than copper, but more expensive.",
      },
      {
        question:
          "Explain why a wireless network is generally less secure than a wired one.",
        answer:
          "Because the signal travels through the air and passes beyond the walls of the building, so an attacker within range can attempt to intercept it without ever gaining physical access. A wired network requires physically plugging into it, which is far harder to do unnoticed. (Mark this one yourself.)",
      },
      {
        question:
          "A company is choosing between client-server and peer-to-peer for 60 computers needing central backups. Recommend one and justify your choice with reference to the scenario.",
        answer:
          "Client-server. With 60 machines, peer-to-peer would require backing up and securing every device individually, and performance degrades as peers are added. Client-server centralises files, backups, security and account management in one place. The trade-offs to acknowledge are the cost of the server, the expertise needed to run it, and that it is a single point of failure. (Mark this one yourself.)",
      },
      {
        question: "Which network type covers a small area on hardware the owner controls?",
        choices: [
          "LAN",
          "WAN",
          "PAN",
          "VPN",
        ],
        accept: [
          "LAN",
        ],
        answer: "A LAN covers a small area on hardware you own, such as a school or home. A WAN covers a wide area and usually relies on infrastructure owned by someone else.",
      },
      {
        question: "In a client-server network, the server:",
        choices: [
          "Provides centralised resources and services",
          "Has no connection to other computers",
          "Is always the slowest machine",
          "Is the same as a router",
        ],
        accept: [
          "Provides centralised resources and services",
        ],
        answer: "Central management makes backups and security easier, but the server is a single point of failure.",
      },
      {
        question: "What is the role of a router?",
        choices: [
          "To direct data between different networks",
          "To store files for the network",
          "To convert analogue signals to sound",
          "To power the network cables",
        ],
        accept: [
          "To direct data between different networks",
        ],
        answer: "A switch directs data within one network; a router connects networks together, such as a home network to the internet.",
      },
      {
        question: "Which factor would REDUCE network performance?",
        choices: [
          "More devices sharing the same bandwidth",
          "Using fibre optic cable",
          "Reducing the distance between devices",
          "Using a wired connection",
        ],
        accept: [
          "More devices sharing the same bandwidth",
        ],
        answer: "Bandwidth is shared, so contention slows everyone down. Interference and long distances also degrade performance.",
      },
      {
        question: "An advantage of a star topology over a bus topology is that:",
        choices: [
          "One failed cable affects only one device",
          "It uses less cable",
          "It needs no central switch",
          "Data collisions are impossible in a bus",
        ],
        accept: [
          "One failed cable affects only one device",
        ],
        answer: "Star is more robust and performs better, but uses more cable and depends on the central switch.",
      },
    ],

    misconceptions: [
      {
        wrong: "\"The internet and the World Wide Web are the same thing.\"",
        right:
          "The internet is the global network of connected networks — the infrastructure. The Web is one service that runs on it, made of websites accessed over HTTP. Email and video streaming also use the internet without being the Web.",
      },
      {
        wrong: "\"More bandwidth always means a faster-feeling connection.\"",
        right:
          "Bandwidth is how much data per second; latency is the delay before it starts. A satellite link can have huge bandwidth and terrible latency, which makes video calls painful no matter how fast the download speed looks.",
      },
      {
        wrong: "\"A MAC address changes when you connect to a different network.\"",
        right:
          "A MAC address is assigned by the manufacturer and is fixed to the network card. It is the IP address that changes depending on which network you join.",
      },
      {
        wrong: "\"A wireless access point and a router are the same device.\"",
        right:
          "They are different jobs that are often combined in one box at home. A WAP lets devices connect wirelessly; a router directs data between networks. The home 'router' usually contains a router, a switch and a WAP.",
      },
      {
        wrong: "\"A star topology is more reliable than mesh because everything is simple.\"",
        right:
          "Star has a single point of failure — the central switch. Mesh provides multiple routes for data, which makes it more resilient, at the cost of far more cabling.",
      },
      {
        wrong: "\"A switch sends data to every device and each one ignores what isn't for it.\"",
        right:
          "That describes an older hub. A switch reads the MAC address and sends the data only to the intended recipient, which is both faster and more secure.",
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

    workedExamples: [
      {
        question: "Describe one full fetch-decode-execute cycle, naming the registers used at each stage.",
        steps: [
          "FETCH: the address in the Program Counter (PC) is copied into the Memory Address Register (MAR).",
          "FETCH: the instruction stored at that address is copied from memory into the Memory Data Register (MDR).",
          "FETCH: the PC is incremented, so it now points at the NEXT instruction. This happens before execution, not after.",
          "DECODE: the Control Unit works out what the instruction means and what components are needed.",
          "EXECUTE: the instruction is carried out — a calculation in the ALU with the result in the Accumulator, data moved, or a jump to a new address.",
        ],
        answer:
          "PC to MAR, instruction to MDR, PC incremented, Control Unit decodes, then execute — with the ALU and Accumulator used for calculations.",
      },
      {
        question:
          "CPU A: 3.2 GHz, 2 cores, 4 MB cache. CPU B: 2.8 GHz, 8 cores, 12 MB cache. Which is better for video editing, and why?",
        steps: [
          "Compare clock speed: A is faster per core, 3.2 GHz against 2.8 GHz.",
          "Compare cores: B has four times as many, so it can process four times as many instruction streams at once.",
          "Compare cache: B has three times as much fast memory close to the CPU, meaning fewer slow trips to RAM.",
          "Consider the task: video editing software is written to use many cores at once, so extra cores are genuinely used.",
          "Weigh it up: B's small clock-speed disadvantage is far outweighed by four times the cores and three times the cache for this workload.",
        ],
        answer:
          "CPU B, because video editing is multi-threaded so the extra cores are actually used, and the larger cache reduces trips to RAM. CPU A would only win for software that cannot use multiple cores.",
      },
      {
        question:
          "Explain why adding more cores does not always make a computer faster.",
        steps: [
          "Each core can carry out its own fetch-decode-execute cycle independently.",
          "That only helps if there is more than one stream of instructions to run.",
          "Software must be specifically written to split its work across cores — this is called multi-threading.",
          "A single-threaded program runs on one core and leaves the others idle.",
          "So a quad-core CPU running single-threaded software performs like a single-core CPU of the same clock speed.",
        ],
        answer:
          "Because the software must be written to use multiple cores. Single-threaded software gains nothing from extra cores.",
      },
      {
        question:
          "Identify whether each is an embedded system: a washing machine controller, a laptop, a traffic light controller, a games console.",
        steps: [
          "Ask of each: is it built into a larger device to do ONE dedicated task?",
          "Washing machine controller — one dedicated job inside a larger appliance. Embedded.",
          "Laptop — runs whatever programs the user chooses. General-purpose, not embedded.",
          "Traffic light controller — one dedicated job. Embedded.",
          "Games console — runs many different games chosen by the user, so general-purpose rather than embedded.",
        ],
        answer:
          "Embedded: the washing machine controller and the traffic light controller. General-purpose: the laptop and the games console.",
      },
    ],

    practice: [
      { question: "What does CPU stand for?", accept: ["central processing unit"],
        answer: "Central Processing Unit — the component that processes data and instructions." },
      { question: "Which register holds the address of the NEXT instruction to be fetched?",
        accept: ["program counter", "pc", "the program counter"],
        answer: "The Program Counter (PC). It is incremented during the fetch stage, before the instruction executes." },
      { question: "Which register holds the memory address currently being read from or written to?",
        accept: ["mar", "memory address register", "the mar"],
        answer: "The Memory Address Register (MAR). Remember: Address Register holds the Address." },
      { question: "Which register holds the data or instruction just fetched from memory?",
        accept: ["mdr", "memory data register", "the mdr"],
        answer: "The Memory Data Register (MDR). MAR is the address, MDR is the data — swapping them collapses the whole answer." },
      { question: "Which register stores the result of calculations performed by the ALU?",
        accept: ["accumulator", "acc", "the accumulator"],
        answer: "The Accumulator (ACC), which holds the result of arithmetic and logic operations." },
      { question: "Which CPU component performs calculations and logical comparisons?",
        accept: ["alu", "arithmetic logic unit", "the alu"],
        answer: "The Arithmetic Logic Unit (ALU)." },
      { question: "Which CPU component decodes instructions and coordinates the other components?",
        accept: ["control unit", "cu", "the control unit"],
        answer: "The Control Unit (CU), which directs the operation of the processor." },
      { question: "Name the architecture in which programs and data are stored in the same memory.",
        accept: ["von neumann", "von neumann architecture", "vonneumann"],
        answer: "Von Neumann architecture, where instructions are fetched and executed one at a time." },
      { question: "A CPU runs at 2 GHz. How many cycles is that per second, written in full?",
        accept: ["2000000000", "2 billion", "two billion"],
        answer: "2,000,000,000 — two billion cycles per second, since 1 GHz is one billion hertz." },
      { question: "Name the small amount of very fast memory inside the CPU that stores frequently used data.",
        accept: ["cache", "the cache"],
        answer: "Cache. Faster than RAM but much smaller and more expensive per byte." },
      { question: "During which stage of the cycle is the Program Counter incremented?",
        accept: ["fetch", "the fetch stage", "fetch stage"],
        answer: "Fetch — before the instruction is executed, so the CPU already knows where to go next. This is examined regularly." },
      { question: "What is the term for a computer built into a larger device to perform one dedicated task?",
        accept: ["embedded system", "an embedded system", "embedded"],
        answer: "An embedded system, such as a washing machine controller or an engine management system." },
      { question: "Is a microwave timer an embedded system or a general-purpose computer?",
        accept: ["embedded", "embedded system", "an embedded system"],
        answer: "Embedded — it performs one dedicated task inside a larger device." },
      { question: "Name the three stages of the CPU cycle, in order.",
        accept: ["fetch decode execute", "fetch, decode, execute", "fetchdecodeexecute"],
        answer: "Fetch, decode, execute — repeated continuously for as long as the computer is on." },
      { question: "Which is faster to access: cache or RAM?",
        accept: ["cache", "the cache"],
        answer: "Cache. It sits closer to the CPU, so more cache means fewer slow trips out to RAM." },
      { question: "A quad-core CPU runs software written for a single core. How many cores are doing useful work?",
        accept: ["1", "one", "1 core", "one core"],
        answer: "One. The other three sit idle, which is why more cores only help if the software is multi-threaded." },
      { question: "Explain why an embedded system is usually cheaper, smaller and more reliable than a general-purpose computer.",
        answer: "Because it only has to do one job. It needs no operating system capable of running arbitrary software, no support for adding programs, and far less memory and processing power — so the hardware can be simpler, smaller, cheaper and with fewer things to go wrong. (Mark this one yourself.)" },
      { question: "Two CPUs have the same clock speed and core count, but one has much more cache. Explain why the larger cache improves performance.",
        answer: "Cache holds frequently used instructions and data very close to the CPU, and is far faster to access than RAM. With more cache, more of what the CPU needs is already to hand, so it spends less time waiting on slow trips out to RAM. The CPU is idle during those waits, so reducing them raises real throughput without changing the clock speed. (Mark this one yourself.)" },
      {
        question: "What does the CPU's control unit do?",
        choices: [
          "Directs the fetch-decode-execute cycle",
          "Performs arithmetic calculations",
          "Stores the program permanently",
          "Displays output on screen",
        ],
        accept: [
          "Directs the fetch-decode-execute cycle",
        ],
        answer: "The ALU does the arithmetic and logic; the control unit coordinates everything and manages the flow of data.",
      },
      {
        question: "Which register holds the address of the next instruction?",
        choices: [
          "The program counter",
          "The accumulator",
          "The MDR",
          "The MAR",
        ],
        accept: [
          "The program counter",
        ],
        answer: "The PC holds the address, the MAR holds the address being accessed, the MDR holds the data, and the accumulator holds results.",
      },
      {
        question: "Increasing which of these would generally improve CPU performance?",
        choices: [
          "Clock speed",
          "Screen resolution",
          "Hard disk size",
          "Number of USB ports",
        ],
        accept: [
          "Clock speed",
        ],
        answer: "Clock speed, number of cores and cache size all affect performance. More cores only help if the software can use them.",
      },
      {
        question: "What is cache memory?",
        choices: [
          "Small, very fast memory close to the CPU",
          "Long-term storage for files",
          "Memory used only for graphics",
          "A backup of the hard drive",
        ],
        accept: [
          "Small, very fast memory close to the CPU",
        ],
        answer: "It stores frequently used instructions so the CPU waits less. It is faster than RAM but much smaller and more expensive.",
      },
      {
        question: "In an embedded system, the software is:",
        choices: [
          "Built to do one dedicated job",
          "Easily replaced by the user",
          "Always written in assembly",
          "Stored only in RAM",
        ],
        accept: [
          "Built to do one dedicated job",
        ],
        answer: "Washing machines and traffic lights use embedded systems. They are cheaper and more reliable because they do less.",
      },
    ],

    misconceptions: [
      { wrong: "\"More cores always means a faster computer.\"",
        right: "Only if the software is written to use them. A single-threaded program runs on one core and leaves the rest idle, so a quad-core CPU performs like a single-core one for that task." },
      { wrong: "\"The Program Counter is incremented after the instruction runs.\"",
        right: "It is incremented during FETCH, before execution. That is what lets the CPU know where to go next even if the current instruction takes a while." },
      { wrong: "\"MAR and MDR are interchangeable.\"",
        right: "MAR holds the ADDRESS being accessed; MDR holds the DATA found there. Swapping them makes the whole fetch-decode-execute answer wrong." },
      { wrong: "\"Cache is just a bit of RAM.\"",
        right: "Cache is separate, much faster, much smaller and far more expensive per byte, and it sits inside or beside the CPU rather than on the motherboard." },
      { wrong: "\"A higher clock speed always means a better CPU.\"",
        right: "Clock speed is one factor of three. Cores and cache matter too, and a question giving you all three numbers expects you to weigh all three." },
      { wrong: "\"A games console is an embedded system because it only plays games.\"",
        right: "It runs many different programs chosen by the user, which makes it general-purpose. Embedded means ONE dedicated task, like a traffic light controller." },
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
        diagrams: [
          "flowchart-shapes",
          "flowchart-selection",
        ],
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

    workedExamples: [
      {
        question: "Perform a binary search for 23 in this sorted list: 4, 8, 15, 16, 23, 42, 50.",
        steps: [
          "The list must be sorted — check that first. It is.",
          "There are 7 items, so the middle item is the 4th: 16.",
          "Is 16 the target? No. Is 23 bigger than 16? Yes, so discard 16 and everything to its left.",
          "Remaining: 23, 42, 50. The middle item is 42.",
          "Is 42 the target? No. Is 23 smaller than 42? Yes, so discard 42 and everything to its right.",
          "Remaining: 23. That is the target.",
        ],
        answer: "Found in 3 comparisons. A linear search would have taken 5.",
      },
      {
        question: "Show the first two passes of a bubble sort on: 5, 2, 9, 1, 7.",
        steps: [
          "Pass 1: compare 5 and 2 → swap → 2, 5, 9, 1, 7",
          "Pass 1: compare 5 and 9 → in order → 2, 5, 9, 1, 7",
          "Pass 1: compare 9 and 1 → swap → 2, 5, 1, 9, 7",
          "Pass 1: compare 9 and 7 → swap → 2, 5, 1, 7, 9. The largest value, 9, is now in its final position.",
          "Pass 2: 2 and 5 in order; 5 and 1 → swap → 2, 1, 5, 7, 9; 5 and 7 in order.",
          "End of pass 2: 2, 1, 5, 7, 9",
        ],
        answer: "After pass 1: 2, 5, 1, 7, 9. After pass 2: 2, 1, 5, 7, 9.",
      },
      {
        question: "Show how merge sort would sort: 8, 3, 5, 1.",
        steps: [
          "Divide: 8, 3, 5, 1 → [8, 3] and [5, 1]",
          "Divide again: [8], [3], [5], [1]. A single item is already sorted, so stop dividing.",
          "Merge [8] and [3]: compare 8 and 3 → 3 is smaller → [3, 8]",
          "Merge [5] and [1]: compare 5 and 1 → 1 is smaller → [1, 5]",
          "Merge [3, 8] and [1, 5]: compare 3 and 1 → take 1. Compare 3 and 5 → take 3. Compare 8 and 5 → take 5. Take 8.",
        ],
        answer: "1, 3, 5, 8",
      },
      {
        question:
          "A list of 1,000,000 sorted names must be searched. Compare linear and binary search using numbers.",
        steps: [
          "Linear search checks each item in turn, so the worst case is 1,000,000 comparisons and the average is 500,000.",
          "Binary search halves the remaining items each time.",
          "Ask: how many times can 1,000,000 be halved before one item remains?",
          "2²⁰ is about 1,048,576, which is just over a million.",
          "So binary search takes at most about 20 comparisons.",
        ],
        answer:
          "About 20 comparisons for binary search against up to 1,000,000 for linear — but binary search requires the list to be sorted first.",
      },
    ],

    practice: [
      { question: "Which search algorithm requires the list to be sorted first?",
        accept: ["binary", "binary search"], answer: "Binary search. Linear search works on unsorted data, which is its main advantage." },
      { question: "Which search algorithm checks each item in turn from the start?",
        accept: ["linear", "linear search"], answer: "Linear search — slow on long lists but works on unsorted data." },
      { question: "A sorted list has 1000 items. Roughly how many comparisons does a binary search need at most?",
        accept: ["10", "about 10", "10 comparisons"], answer: "About 10, because 2¹⁰ = 1024, so the list can be halved ten times." },
      { question: "In the worst case, how many comparisons does a linear search of 50 items need?",
        accept: ["50", "50 comparisons"], answer: "50 — it may have to check every item before finding the target or reaching the end." },
      { question: "Which sorting algorithm repeatedly compares adjacent items and swaps them if they are in the wrong order?",
        accept: ["bubble sort", "bubble", "a bubble sort"], answer: "Bubble sort. Simple and memory-efficient, but very slow on long lists." },
      { question: "Which sorting algorithm repeatedly splits the list in half, then merges the parts back in order?",
        accept: ["merge sort", "merge", "a merge sort"], answer: "Merge sort. Much faster than bubble sort on large lists, but uses more memory." },
      { question: "After the first complete pass of a bubble sort, which value is guaranteed to be in its final position?",
        accept: ["the largest", "largest", "the biggest", "biggest", "the largest value"],
        answer: "The largest value, which ends up at the end of the list." },
      { question: "Name the computational thinking technique of removing unnecessary detail from a problem.",
        accept: ["abstraction"], answer: "Abstraction — a tube map is the classic example, showing connections while ignoring real distances." },
      { question: "Name the technique of breaking a large problem into smaller sub-problems.",
        accept: ["decomposition"], answer: "Decomposition, which lets each part be solved and tested separately." },
      { question: "In a flowchart, which shape represents a decision?",
        accept: ["diamond", "a diamond"], answer: "A diamond, with one arrow in and two labelled arrows out." },
      { question: "In a flowchart, which shape represents an input or output?",
        accept: ["parallelogram", "a parallelogram"], answer: "A parallelogram. A rectangle is a process, and an oval is start or stop." },
      { question: "How many arrows come OUT of a decision diamond in a flowchart?",
        accept: ["2", "two"], answer: "Two, labelled Yes and No. Unlabelled branches lose marks even when the logic is correct." },
      { question: "Sort 4, 1, 3 using one pass of bubble sort. Give the list after that pass.",
        accept: ["1 3 4", "1,3,4", "134"], answer: "1, 3, 4. Compare 4 and 1 → swap → 1, 4, 3. Compare 4 and 3 → swap → 1, 3, 4." },
      { question: "Perform a binary search for 8 in: 2, 4, 6, 8, 10. How many comparisons are needed?",
        accept: ["2", "2 comparisons", "two"], answer: "2. The middle is 6; 8 is larger so discard the left half, leaving 8, 10; the middle of that is 8." },
      { question: "Name the table used to record variable values step by step when checking an algorithm by hand.",
        accept: ["trace table", "a trace table"], answer: "A trace table — slow and methodical, and high value in exams." },
      { question: "Which is generally faster on a large unsorted list: bubble sort or merge sort?",
        accept: ["merge sort", "merge", "mergesort"], answer: "Merge sort, and its performance is also more consistent. The cost is extra memory for the sub-lists." },
      { question: "Explain why binary search cannot be used on an unsorted list.",
        answer: "Because it works by discarding half the list at each step, and that decision depends on knowing that everything to one side of the middle item is smaller and everything to the other side is larger. In an unsorted list that guarantee does not hold, so the target could be in the half just discarded. (Mark this one yourself.)" },
      { question: "A program must sort 10 items that are already nearly in order. Recommend an algorithm and justify it.",
        answer: "Bubble sort or insertion sort. With only 10 items the efficiency advantage of merge sort is negligible, and both are simpler to implement and use less memory. Insertion sort in particular is very efficient on nearly-sorted data, since most items are already in place. Merge sort's advantages only appear on large lists. (Mark this one yourself.)" },
      {
        question: "A binary search requires the data to be:",
        choices: [
          "Sorted",
          "Numeric only",
          "Stored in a database",
          "Smaller than 100 items",
        ],
        accept: [
          "Sorted",
        ],
        answer: "Binary search halves the search space each step, which only works on ordered data. Linear search works on unsorted data but is slower.",
      },
      {
        question: "Which sorting algorithm repeatedly finds the smallest remaining item?",
        choices: [
          "Selection sort",
          "Bubble sort",
          "Merge sort",
          "Binary sort",
        ],
        accept: [
          "Selection sort",
        ],
        answer: "Bubble sort swaps neighbouring pairs, merge sort divides and recombines. Merge sort is much faster on large lists.",
      },
      {
        question: "What is abstraction in computational thinking?",
        choices: [
          "Removing unnecessary detail to focus on what matters",
          "Breaking a problem into smaller parts",
          "Finding patterns between problems",
          "Writing code in pseudocode",
        ],
        accept: [
          "Removing unnecessary detail to focus on what matters",
        ],
        answer: "Decomposition is the breaking-down step. A map is a good example of abstraction: it omits nearly everything and stays useful.",
      },
      {
        question: "Why is merge sort usually faster than bubble sort on a large list?",
        choices: [
          "It divides the problem, so fewer comparisons are needed overall",
          "It uses less memory",
          "It does not need the data in a list",
          "It only works on sorted data",
        ],
        accept: [
          "It divides the problem, so fewer comparisons are needed overall",
        ],
        answer: "Merge sort uses more memory, which is its trade-off. Bubble sort is simple but compares every pair repeatedly.",
      },
      {
        question: "Pseudocode is used because it:",
        choices: [
          "Describes an algorithm clearly without the rules of a specific language",
          "Runs faster than real code",
          "Is required by all compilers",
          "Automatically finds errors",
        ],
        accept: [
          "Describes an algorithm clearly without the rules of a specific language",
        ],
        answer: "It lets you focus on the logic. A flowchart does the same job visually.",
      },
    ],

    misconceptions: [
      { wrong: "\"Binary search is always better than linear search.\"",
        right: "Only on sorted data. If the list is unsorted, binary search cannot be used at all, and sorting it first takes time that may outweigh the saving for a one-off search." },
      { wrong: "\"Merge sort is better than bubble sort in every way.\"",
        right: "Merge sort is faster on large lists, but it uses more memory because the sub-lists must be stored while merging. Bubble sort is simpler and memory-efficient." },
      { wrong: "\"Abstraction means simplifying the problem.\"",
        right: "It means removing detail that is not relevant to the problem, which is subtly different. A tube map removes distance and geography but keeps every connection — nothing important is lost." },
      { wrong: "\"You can show a sort by just writing the final answer.\"",
        right: "Marks are awarded for the intermediate states. A correct final answer with no passes shown can score less than a wrong answer with each pass written out." },
      { wrong: "\"A pass of bubble sort means one comparison.\"",
        right: "A pass is one complete run through the whole list, made up of many comparisons. Confusing the two makes every sorting question come out wrong." },
      { wrong: "\"Decomposition and abstraction are the same thing.\"",
        right: "Decomposition breaks a problem into smaller parts. Abstraction removes irrelevant detail. You often use both, but they are different operations." },
    ],
  },

  // ─── RUNG 9, THE TOP ──────────────────────────────────────────────────────
  //
  // The capstone. This slug used to be a second grab-bag — arrays, subprograms,
  // strings, files, defensive design and testing all in one topic, with the
  // last two duplicating defensive-design-and-testing outright. Each of those
  // now has its own rung, so this one does the job none of them can: putting
  // the pieces together, and finding out why the result does not work.
  //
  // The slug is kept because progress rows are stored against it.
  "computer-science/programming": {
    summary:
      "Every rung below this one taught a piece. This one is about assembling them into a program that actually runs — planning before you type, structuring the result so it can be read, and finding the fault when it misbehaves. Debugging is the part nobody teaches and everybody spends most of their time doing, so it gets the space here that it deserves.",
    keyFacts: [
      {
        heading: "Plan before you type",
        diagrams: [
          "flowchart-shapes",
        ],
        points: [
          "Work out WHAT the program must do before deciding HOW. Inputs, processing, outputs — in that order.",
          "Pseudocode is structured English with no strict syntax, used to get the logic right while it is still cheap to change.",
          "A flowchart shows the same logic as a picture: oval for start and stop, parallelogram for input and output, rectangle for a process, diamond for a decision.",
          "Planning first catches logic errors before you have written a hundred lines around them, which is the cheapest debugging there is.",
        ],
      },
      {
        heading: "The shape of a working program",
        points: [
          "Constants first, then subprograms, then the main code that calls them. Anyone reading it can then find things.",
          "Input, validate, process, output is the standard order — and validating before processing rather than after is what stops most crashes.",
          "Give every variable a name that says what it holds, and every subprogram a name that says what it does.",
          "Comment the WHY, not the what. total <- total + 1 needs no comment; a magic number does.",
        ],
      },
      {
        heading: "The three kinds of error",
        points: [
          "A SYNTAX error breaks the rules of the language, so the program will not run at all — a missing bracket, colon or quote.",
          "A RUNTIME error stops the program while it is running — dividing by zero, an array index out of range, a missing file.",
          "A LOGIC error runs perfectly and gives the wrong answer — a + where you meant *, a > where you meant >=.",
          "Logic errors are by far the most dangerous, because nothing tells you they are there. The program is confidently wrong.",
        ],
      },
      {
        heading: "Finding the fault",
        diagrams: [
          "trace-table",
        ],
        points: [
          "A trace table records every variable's value line by line, and is the fastest way to find a logic error by hand.",
          "A breakpoint pauses a running program so the current values can be inspected — the same idea, done by the computer.",
          "Print statements at key points are the crudest debugging tool and still one of the most effective.",
          "Narrow it down: find the last line you are sure is right and the first you are sure is wrong, then look between them.",
        ],
      },
      {
        heading: "Making it work for other people",
        points: [
          "Validate every input. Users mistype, leave boxes empty, and enter a date of birth in the future.",
          "Handle the predictable failures: a file that is missing, a number that is zero, an empty array.",
          "Test with normal, boundary and erroneous data. Boundary data — the value right on the edge of a condition — finds the most bugs per test.",
          "A program that only works when used correctly is not finished.",
        ],
      },
    ],
    flashcards: [
      { term: "Pseudocode", definition: "A way of describing an algorithm in structured English, without the strict syntax of a real language." },
      { term: "Flowchart", definition: "A diagram showing an algorithm's steps, using set shapes for input, processing, decisions and start or stop." },
      { term: "Syntax error", definition: "An error breaking the rules of the programming language, which prevents the program from running at all." },
      { term: "Runtime error", definition: "An error that stops a program while it is running, such as dividing by zero or reading past the end of an array." },
      { term: "Logic error", definition: "An error where the program runs without crashing but produces an incorrect result." },
      { term: "Trace table", definition: "A table recording the value of every variable at each step of an algorithm, used to find errors by hand." },
      { term: "Breakpoint", definition: "A marker that pauses a running program so the current values of its variables can be inspected." },
      { term: "Boundary data", definition: "Test data on the exact edge of a valid range, such as 0 and 100 for a percentage." },
      { term: "Erroneous data", definition: "Test data that should be rejected outright, such as letters typed into an age field." },
      { term: "Normal data", definition: "Ordinary, valid test data that a program is expected to accept and handle correctly." },
      { term: "Maintainability", definition: "How easy a program is for someone else to read, understand and change later." },
    ],
    examTips: [
      {
        tip: "Name the error type AND give an example",
        detail:
          "'Syntax error — a missing closing bracket, so the program will not run' scores. 'There is an error in the code' does not. The example is usually half the mark.",
      },
      {
        tip: "Logic errors do not stop the program",
        detail:
          "If a question says the program runs but gives the wrong answer, that is a logic error every time, and nothing else fits.",
      },
      {
        tip: "Give test data as actual values, not descriptions",
        detail:
          "For a 0 to 100 field: normal 50, boundary 0 and 100, erroneous 101 or 'abc'. Writing 'a sensible number' scores nothing.",
      },
      {
        tip: "Fill trace tables one row per line executed",
        detail:
          "Not one per loop. Every time a line changes a value that is a row, including the loop counter. Blank columns at the end usually mean a missed iteration.",
      },
      {
        tip: "Use the flowchart shapes correctly",
        detail:
          "Diamond for a decision, parallelogram for input and output, rectangle for a process, oval for start and stop. Marks are given for the right shape in the right place.",
      },
      {
        tip: "Say why maintainability matters when asked",
        detail:
          "'So another programmer can understand and change it later' is the answer. Meaningful names, comments, indentation and subprograms are the four things to name.",
      },
    ],
    workedExamples: [
      {
        question:
          "Classify each error.\n\n  a) print('hello  — a missing closing quote\n  b) total <- total + 1 where it should be total + n\n  c) dividing by a variable that turns out to be 0",
        steps: [
          "a) The quote makes the line break the rules of the language, so it will not run at all — syntax.",
          "b) The program runs perfectly and produces a number, but the wrong one — logic.",
          "c) The program starts fine and only fails at the moment the division happens — runtime.",
          "The distinguishing question is: does it refuse to run, crash partway, or finish with a wrong answer?",
        ],
        answer: "a) syntax  b) logic  c) runtime.",
      },
      {
        question: "Give normal, boundary and erroneous test data for a field accepting a percentage from 0 to 100.",
        steps: [
          "Normal data is an ordinary value well inside the range: 50.",
          "Boundary data sits exactly on the edges, which is where off-by-one errors hide: 0 and 100.",
          "It is also worth testing just outside: -1 and 101 should both be rejected.",
          "Erroneous data is something that should never be accepted at all: 'abc', or leaving it blank.",
        ],
        answer:
          "Normal: 50. Boundary: 0 and 100 (accepted), -1 and 101 (rejected). Erroneous: 'abc' or an empty entry.",
      },
      {
        question:
          "This should average three marks but always gives the wrong answer. Find the error.\n\n  total <- a + b + c / 3\n  OUTPUT total",
        steps: [
          "The program runs and prints a number, so it is not a syntax or runtime error — it is a logic error.",
          "Division happens before addition in the order of operations.",
          "So this calculates a + b + (c / 3), not the average.",
          "The fix is brackets: (a + b + c) / 3.",
        ],
        answer:
          "A logic error caused by operator precedence. It should be total <- (a + b + c) / 3.",
      },
      {
        question: "Complete a trace table for this and give the final total.\n\n  total <- 0\n  FOR i <- 1 TO 4\n    total <- total + i\n  NEXT i",
        steps: [
          "Before the loop: total = 0.",
          "i = 1 gives total = 0 + 1 = 1.",
          "i = 2 gives total = 1 + 2 = 3.",
          "i = 3 gives total = 3 + 3 = 6, and i = 4 gives total = 6 + 4 = 10.",
        ],
        answer: "10, after four passes with i taking the values 1, 2, 3 and 4.",
      },
      {
        question: "Which flowchart shape is used for a decision, and how many arrows leave it?",
        steps: [
          "A decision asks a yes or no question.",
          "The shape for that is a diamond.",
          "Because the answer is either yes or no, the program takes one of two paths.",
          "So two arrows leave it, one labelled Yes and one labelled No.",
        ],
        answer: "A diamond, with two labelled arrows leaving it — one for Yes and one for No.",
      },
    ],
    practice: [
      {
        question: "A program runs but gives the wrong answer. What kind of error is that?",
        accept: ["Logic error"],
        choices: ["Logic error", "Syntax error", "Runtime error", "Boundary error"],
        answer: "A logic error. The code is legal and it runs to completion, but the instructions do not do what was intended.",
      },
      {
        question: "A missing closing bracket causes which kind of error?",
        accept: ["Syntax error"],
        choices: ["Syntax error", "Logic error", "Runtime error", "Validation error"],
        answer: "A syntax error. It breaks the rules of the language, so the program will not run at all.",
      },
      {
        question: "Which flowchart shape represents a decision?",
        accept: ["Diamond"],
        choices: ["Diamond", "Rectangle", "Parallelogram", "Oval"],
        answer: "A diamond, with two labelled arrows leaving it for the Yes and No paths.",
      },
      {
        question: "For a field accepting 0 to 100, which is boundary data?",
        accept: ["100"],
        choices: ["100", "50", "abc", "999"],
        answer: "100. Boundary data sits exactly on the edge of the valid range, which is where off-by-one errors hide.",
      },
      {
        question: "Which flowchart shape is used for input and output?",
        accept: ["Parallelogram"],
        choices: ["Parallelogram", "Rectangle", "Diamond", "Oval"],
        answer: "A parallelogram. Rectangles are for processing and ovals mark the start and stop.",
      },
      {
        question: "Name the error type that stops a program part-way through running.",
        accept: ["runtime error", "runtime"],
        answer: "A runtime error. Dividing by zero, reading past the end of an array and opening a missing file are the classic causes.",
      },
      {
        question: "What is the fastest way to find a logic error by hand?",
        accept: ["a trace table", "trace table"],
        answer: "A trace table. Recording every variable's value line by line exposes the exact step where the values stop being what you expected.",
      },
      {
        question: "Give an example of erroneous test data for an age field.",
        accept: ["abc", "a letter", "letters", "-5"],
        answer: "Something that should be rejected outright, such as 'abc' or a negative number. Erroneous data tests that the program refuses bad input rather than accepting it.",
      },
      {
        question: "What does a breakpoint do?",
        accept: ["pauses the program", "it pauses the program", "stops the program so you can inspect variables"],
        answer: "It pauses a running program so the current values of its variables can be inspected — a trace table done by the computer instead of by hand.",
      },
      {
        question: "Why is a logic error more dangerous than a syntax error?",
        accept: ["nothing tells you it is there", "the program still runs", "it does not crash"],
        answer: "Because nothing tells you it is there. A syntax error refuses to run; a logic error runs happily and produces a confident wrong answer.",
      },
      {
        question: "Why should input be validated before it is processed rather than after?",
        accept: ["to stop the program crashing", "to prevent errors", "so bad data never reaches the processing"],
        answer: "So bad data never reaches the processing at all. Validating afterwards means the crash or the wrong result has already happened.",
      },
      {
        question: "Name two things that make a program maintainable.",
        accept: ["meaningful names and comments", "comments and indentation", "meaningful variable names and subprograms"],
        answer: "Meaningful identifier names, comments explaining why, consistent indentation and breaking the work into subprograms. Any two of those score.",
      },
      {
        question: "What is total <- (a + b + c) / 3 fixing, compared with a + b + c / 3?",
        accept: ["operator precedence", "the order of operations", "precedence"],
        answer: "The order of operations. Without brackets the division happens first, so only c is divided by three and the result is not the average.",
      },
      {
        question: "In what order should a program handle its data?",
        accept: ["input, validate, process, output", "input validate process output"],
        answer: "Input, validate, process, output. Validating in the middle is what stops bad data reaching the processing stage.",
      },
      {
        question: "What should a comment explain?",
        accept: ["why", "the why", "why the code does something"],
        answer: "Why the code does what it does. Restating what a line obviously does adds nothing; explaining a decision or a magic number is genuinely useful later.",
      },
      {
        question: "Give normal test data for a field accepting a percentage from 0 to 100.",
        accept: ["50", "any value between 1 and 99"],
        answer: "An ordinary value well inside the range, such as 50. Normal data checks that the program works in the everyday case.",
      },
      {
        question: "Which flowchart shape marks the start and the end?",
        accept: ["oval", "an oval"],
        answer: "An oval. Rectangles are processes, diamonds are decisions and parallelograms are input or output.",
      },
    ],
    misconceptions: [
      {
        wrong: "If the program runs, there are no errors in it.",
        right:
          "Running proves there is no syntax error. A logic error runs perfectly and returns the wrong answer, which is precisely what makes it hard to find.",
      },
      {
        wrong: "A syntax error and a runtime error are the same thing.",
        right:
          "A syntax error stops it running at all. A runtime error only appears once it is already running, and may only happen with certain inputs.",
      },
      {
        wrong: "Testing means checking the program works.",
        right:
          "Testing means trying to make it fail. Normal data proves very little; boundary and erroneous data are what find the bugs.",
      },
      {
        wrong: "Comments should explain what every line does.",
        right:
          "Restating obvious code adds noise. Comments should explain why a decision was made, which is the thing the code itself cannot say.",
      },
      {
        wrong: "Planning on paper is a waste of time when you could be coding.",
        right:
          "It is the cheapest debugging available. A logic error caught in pseudocode costs a minute; the same error found after a hundred lines are built on top of it costs an afternoon.",
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

    workedExamples: [
      {
        question:
          "A company suffers a breach: an employee received an email appearing to be from IT asking them to confirm their password, and complied. Identify the attack and recommend three measures.",
        steps: [
          "Identify the method: a fraudulent message impersonating a trusted source to obtain credentials — that is phishing, a form of social engineering.",
          "Note that no technical defence was defeated. The person was persuaded, not the system.",
          "Measure 1 — staff training, so employees recognise phishing and know that IT will never ask for a password.",
          "Measure 2 — two-factor authentication, so a stolen password alone is not enough to log in.",
          "Measure 3 — user access levels, so a compromised account can only reach what that role needs, limiting the damage.",
        ],
        answer:
          "Phishing (social engineering). Training, two-factor authentication and user access levels — note that a firewall and anti-malware would not have prevented this at all.",
      },
      {
        question: "Explain the difference between a virus and a worm, and why it matters.",
        steps: [
          "A virus attaches itself to a host file — a document, a program.",
          "A virus needs a user action to spread: opening or sharing the infected file.",
          "A worm needs neither a host file nor a user action.",
          "A worm replicates itself and spreads across networks on its own.",
          "That is why worms spread far faster: nothing has to wait for a human to click anything.",
        ],
        answer:
          "A virus needs a host file and a user action; a worm self-replicates across networks with neither, which is why worms spread much faster.",
      },
      {
        question: "Explain what encryption does and does not protect against.",
        steps: [
          "Encryption scrambles data using a key so it cannot be understood without that key.",
          "If an attacker intercepts encrypted data, they get scrambled output that is useless to them.",
          "It does NOT stop the interception happening — the data is still captured.",
          "It does NOT protect data once decrypted on a legitimate machine.",
          "It does NOT help if the attacker obtains the key, or simply tricks a user into handing over their password.",
        ],
        answer:
          "Encryption makes intercepted data unreadable. It does not prevent interception, and it does not protect against an attacker who has the key or has social-engineered a login.",
      },
      {
        question:
          "A school wants to reduce the risk of an attacker guessing staff passwords. Recommend measures and explain each.",
        steps: [
          "Enforce long passwords, because possible combinations grow far faster with length than with symbol variety.",
          "Limit login attempts, so a brute force attack is stopped after a handful of guesses rather than running unlimited tries.",
          "Require two-factor authentication, so a correct password alone still fails.",
          "Ban password reuse across systems, so a breach elsewhere does not hand over school accounts.",
          "Train staff not to write passwords down or share them, since that defeats every technical measure above.",
        ],
        answer:
          "A strong password policy, a limit on login attempts, two-factor authentication, no reuse, and training — technical measures alone leave the human route wide open.",
      },
    ],

    practice: [
      { question: "Which type of malware needs a host file and a user action to spread?",
        accept: ["virus", "a virus"], answer: "A virus. It attaches to a file and spreads when that file is opened or shared." },
      { question: "Which type of malware spreads across networks by itself with no user action?",
        accept: ["worm", "a worm"], answer: "A worm. Needing no host file and no click is why worms spread far faster than viruses." },
      { question: "Which type of malware disguises itself as legitimate software so the user installs it?",
        accept: ["trojan", "a trojan", "trojan horse"], answer: "A Trojan. It does not self-replicate — the user installs it willingly." },
      { question: "Which type of malware encrypts a user's files and demands payment?",
        accept: ["ransomware"], answer: "Ransomware, which demands payment in exchange for the decryption key." },
      { question: "Which type of malware secretly records what a user does, including keystrokes?",
        accept: ["spyware"], answer: "Spyware, which sends the recorded activity back to the attacker." },
      { question: "What is the general term for manipulating PEOPLE rather than technology to gain access?",
        accept: ["social engineering"], answer: "Social engineering. People are described as the weakest point because no firewall stops a persuaded user." },
      { question: "What is the name for watching someone enter a PIN or password?",
        accept: ["shouldering", "shoulder surfing", "shouldersurfing"], answer: "Shouldering, also called shoulder surfing." },
      { question: "What is the name for inventing a false scenario to persuade someone to give away information?",
        accept: ["blagging", "pretexting"], answer: "Blagging (pretexting) — for example pretending to be IT support." },
      { question: "What is the name for redirecting a user from a real website to a fake copy?",
        accept: ["pharming"], answer: "Pharming, used to harvest details entered into the fake site." },
      { question: "What is the name for an attack that tries every possible password combination?",
        accept: ["brute force", "brute force attack", "bruteforce"],
        answer: "A brute force attack. Slow, but effective against short or common passwords — which is why attempt limits matter." },
      { question: "What is the name for flooding a server with requests so it cannot serve real users?",
        accept: ["denial of service", "dos", "ddos", "denial of service attack", "distributed denial of service"],
        answer: "A denial of service (DoS) attack. A DDoS uses many machines at once." },
      { question: "What is the name for entering database commands into an input box so the database executes them?",
        accept: ["sql injection", "sqlinjection", "sql"], answer: "SQL injection, which can expose or destroy data." },
      { question: "Which security measure monitors incoming and outgoing traffic and blocks anything against the rules?",
        accept: ["firewall", "a firewall"],
        answer:
          "A firewall. It sits between the network and the outside world, applying rules to every packet." },
      { question: "What is the name for deliberately attacking your own system to find weaknesses first?",
        accept: ["penetration testing", "pen testing", "penetration test"],
        answer: "Penetration testing — finding vulnerabilities before criminals do." },
      { question: "Which measure limits what each user can access according to their role?",
        accept: ["user access levels", "access levels", "user access level", "access rights"],
        answer: "User access levels, so a compromised account can only reach what that role needed." },
      { question: "Does encryption prevent data from being intercepted? Answer yes or no.",
        accept: ["no"], answer: "No. It makes intercepted data unreadable without the key, but the interception still happens." },
      { question: "Explain why staff training is as important as firewalls and anti-malware software.",
        answer: "Because most successful attacks target the person rather than the technology. Phishing, blagging and shouldering all bypass technical defences entirely — a firewall cannot stop an employee who has been persuaded to type their password into a convincing fake site. Training addresses the route that technical measures cannot cover. (Mark this one yourself.)" },
      { question: "An online shop stores customer card details. Recommend three measures to protect them and justify each.",
        answer: "Encryption, so intercepted or stolen data is unreadable without the key. User access levels, so only staff who genuinely need card data can reach it and a compromised account limits the damage. Penetration testing, to find vulnerabilities such as SQL injection before attackers do. A firewall and up-to-date anti-malware would also be reasonable, alongside staff training against phishing. (Mark this one yourself.)" },
      {
        question: "What is PHISHING?",
        choices: [
          "Tricking someone into revealing details by pretending to be trustworthy",
          "Guessing passwords automatically",
          "Flooding a server with requests",
          "Encrypting files and demanding payment",
        ],
        accept: [
          "Tricking someone into revealing details by pretending to be trustworthy",
        ],
        answer: "Phishing targets the person, not the machine, which is why staff training matters more than technical defences here.",
      },
      {
        question: "A brute-force attack works by:",
        choices: [
          "Trying many possible passwords until one works",
          "Sending fake emails",
          "Reading data from discarded documents",
          "Watching someone type",
        ],
        accept: [
          "Trying many possible passwords until one works",
        ],
        answer: "Strong passwords and rate limiting are the defences. Locking an account after repeated failures makes the attack impractical.",
      },
      {
        question: "What is the aim of a denial-of-service attack?",
        choices: [
          "To overwhelm a system so genuine users cannot access it",
          "To steal passwords",
          "To encrypt the victim's files",
          "To copy a database",
        ],
        accept: [
          "To overwhelm a system so genuine users cannot access it",
        ],
        answer: "It does not steal data — it makes a service unavailable, which can still cost a business heavily.",
      },
      {
        question: "SQL injection is possible when a program:",
        choices: [
          "Does not validate user input before using it in a query",
          "Uses too much memory",
          "Runs on an old operating system",
          "Has no antivirus installed",
        ],
        accept: [
          "Does not validate user input before using it in a query",
        ],
        answer: "Input validation and parameterised queries are the fix. It is a programming fault rather than a network one.",
      },
      {
        question: "Which is an example of social engineering rather than a technical attack?",
        choices: [
          "Shouldering, or watching someone enter a PIN",
          "Installing a keylogger",
          "Running a port scan",
          "Exploiting unpatched software",
        ],
        accept: [
          "Shouldering, or watching someone enter a PIN",
        ],
        answer: "Social engineering exploits people. Blagging, phishing, shouldering and pharming all rely on human behaviour.",
      },
    ],

    misconceptions: [
      { wrong: "\"Encryption stops data being stolen.\"",
        right: "It stops stolen data being READ. The interception still happens; the attacker simply ends up with scrambled output that is useless without the key." },
      { wrong: "\"A virus and a worm are basically the same thing.\"",
        right: "A virus needs a host file and a user action to spread. A worm needs neither and replicates across networks by itself, which is why it spreads far faster. This distinction is examined constantly." },
      { wrong: "\"A Trojan replicates itself like other malware.\"",
        right: "A Trojan does not self-replicate. It relies entirely on the user installing it, believing it to be legitimate software." },
      { wrong: "\"Anti-malware and a firewall are enough to secure a company.\"",
        right: "Neither stops social engineering. An employee persuaded to reveal their password defeats both, which is why training, access levels and two-factor authentication belong in any complete answer." },
      { wrong: "\"Penetration testing means testing whether the firewall works.\"",
        right: "It means deliberately attacking your own system, as an attacker would, to find any weakness before criminals do — including human and configuration weaknesses, not just the firewall." },
      { wrong: "\"A DoS attack steals data.\"",
        right: "A denial of service attack does not steal anything. It makes a service unavailable by overwhelming it with requests, so genuine users cannot get through." },
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

    workedExamples: [
      {
        question:
          "Write SQL to return the Name and Grade of every student with a Grade above 5, sorted by Name.",
        steps: [
          "SELECT lists the fields wanted — the question asks for Name and Grade, so do NOT use *.",
          "FROM names the table: Students.",
          "WHERE filters the records: Grade > 5. Grade is a number, so no quotes.",
          "ORDER BY sorts the output: ORDER BY Name. Ascending is the default.",
          "End the statement with a semicolon.",
        ],
        answer:
          "SELECT Name, Grade FROM Students WHERE Grade > 5 ORDER BY Name ASC;",
      },
      {
        question:
          "A flat file stores every booking with the customer's full name, address and phone number on each row. Explain the problems and the fix.",
        steps: [
          "A customer with 20 bookings has their address stored 20 times — this is data redundancy.",
          "Redundancy wastes storage, but that is the minor issue.",
          "The serious issue is inconsistency: if the customer moves and only 19 rows are updated, the database now contradicts itself and there is no way to know which is right.",
          "The fix is a relational design: a Customers table holding each customer once, and a Bookings table.",
          "Bookings holds a CustomerID foreign key referring to the primary key of Customers, so the address is stored exactly once and updated in one place.",
        ],
        answer:
          "Redundancy causing inconsistency. Split into Customers and Bookings tables linked by a CustomerID foreign key.",
      },
      {
        question:
          "Choose a suitable primary key for a table of students, and justify the choice.",
        steps: [
          "A primary key must uniquely identify each record, with no duplicates ever.",
          "Surname fails — two students can share one.",
          "Full name fails — less likely, but still possible, and people change their names.",
          "Email might work but can be changed or reused after a student leaves.",
          "A StudentID created for the purpose is guaranteed unique and never needs to change.",
        ],
        answer:
          "StudentID. It is guaranteed unique because the system generates it, and unlike names or emails it never changes.",
      },
      {
        question:
          "Write SQL to increase the price of every product in the 'Books' category by 1, and explain the danger.",
        steps: [
          "UPDATE names the table: UPDATE Products",
          "SET gives the change: SET Price = Price + 1",
          "WHERE restricts which records are affected: WHERE Category = 'Books'. Category is text, so quotes are required.",
          "Full statement: UPDATE Products SET Price = Price + 1 WHERE Category = 'Books';",
          "The danger: omitting the WHERE clause would raise the price of EVERY product in the table, and there is no undo.",
        ],
        answer:
          "UPDATE Products SET Price = Price + 1 WHERE Category = 'Books'; — without the WHERE clause it would change every record.",
      },
    ],

    practice: [
      { question: "What is the name for a single row in a database table, holding all the data about one item?",
        accept: ["record", "a record", "row", "a row"], answer: "A record (a row) — all the data about one individual item." },
      { question: "What is the name for a single column in a table?",
        accept: ["field", "a field", "column", "a column"], answer: "A field (a column) — one piece of information stored about every record." },
      { question: "What is the name for the field that uniquely identifies each record in a table?",
        accept: ["primary key", "a primary key", "primarykey"], answer: "The primary key. No two records may share it." },
      { question: "What is the name for a field in one table that refers to the primary key of another?",
        accept: ["foreign key", "a foreign key", "foreignkey"], answer: "A foreign key — the link that joins two tables together." },
      { question: "What is the term for the same data being unnecessarily repeated in many places?",
        accept: ["data redundancy", "redundancy"], answer: "Data redundancy. It wastes space, but the real danger is the inconsistency it causes." },
      { question: "What is the term for repeated copies of data disagreeing because only some were updated?",
        accept: ["data inconsistency", "inconsistency", "inconsistent data"],
        answer: "Data inconsistency — the serious consequence of redundancy, because the database now contradicts itself." },
      { question: "Which type of database stores all data in a single table?",
        accept: ["flat file", "flat file database", "flatfile"], answer: "A flat file database, which is what causes redundancy." },
      { question: "Which SQL keyword specifies which fields to retrieve?",
        accept: ["select"], answer: "SELECT. Use * for all fields, but only when the question actually asks for all of them." },
      { question: "Which SQL keyword filters which records are returned or affected?",
        accept: ["where"], answer: "WHERE. Leaving it off an UPDATE or DELETE affects every record in the table." },
      { question: "Which SQL keyword sorts the returned records?",
        accept: ["order by", "orderby"], answer: "ORDER BY. Ascending is the default; add DESC for descending." },
      { question: "Which SQL statement adds a new record to a table?",
        accept: ["insert into", "insert", "insertinto"], answer: "INSERT INTO table (field1, field2) VALUES (value1, value2);" },
      { question: "Which SQL statement changes data in existing records?",
        accept: ["update"], answer: "UPDATE. Always pair it with a WHERE clause unless you genuinely mean every record." },
      { question: "Which SQL statement removes records from a table?",
        accept: ["delete from", "delete", "deletefrom"], answer: "DELETE FROM. Without WHERE it empties the entire table, and there is no undo." },
      { question: "In SQL, do text values need quotation marks? Answer yes or no.",
        accept: ["yes"], answer: "Yes — WHERE Surname = 'Smith'. Numbers do not: WHERE Age = 15." },
      { question: "What happens if you run an UPDATE statement with no WHERE clause?",
        accept: ["every record is updated", "all records are updated", "it updates every record",
                 "all records", "every record", "it changes every record", "updates all records"],
        answer: "Every record in the table is changed. This is how real databases get destroyed, and exam questions include it as a trap." },
      { question: "Which SQL keyword, used with a wildcard, matches partial text such as names beginning with S?",
        accept: ["like"], answer: "LIKE — for example WHERE Name LIKE 'S%'." },
      { question: "Explain why a phone number should be stored as text rather than as a number.",
        answer: "Because leading zeros matter and a numeric type would discard them, turning 01234 into 1234. Phone numbers may also contain spaces, plus signs or brackets, and no arithmetic is ever performed on them — so nothing is gained by storing them as numbers and something important is lost. (Mark this one yourself.)" },
      { question: "Explain why a relational database is preferable to a flat file for a school storing students, classes and teachers.",
        answer: "A flat file would repeat every student's details on each row for every class they take, so a change of address would need updating in many places. Miss one and the database contradicts itself. A relational design stores each student once in a Students table, each class once in a Classes table, and links them with foreign keys — so information is stored once, updated once, and cannot disagree with itself. (Mark this one yourself.)" },
      {
        question: "What is a PRIMARY KEY?",
        choices: [
          "A field that uniquely identifies each record",
          "The first field in a table",
          "A password protecting the database",
          "A field that links to a website",
        ],
        accept: [
          "A field that uniquely identifies each record",
        ],
        answer: "It must be unique and never empty. A foreign key is a primary key from another table, used to link the two.",
      },
      {
        question: "In a relational database, what does a table represent?",
        choices: [
          "One type of entity, such as students",
          "One single record",
          "The whole database",
          "A query result only",
        ],
        accept: [
          "One type of entity, such as students",
        ],
        answer: "Splitting data across linked tables avoids storing the same information twice, which is what causes inconsistency.",
      },
      {
        question: "Which SQL keyword retrieves data?",
        choices: [
          "SELECT",
          "INSERT",
          "DELETE",
          "UPDATE",
        ],
        accept: [
          "SELECT",
        ],
        answer: "SELECT reads, INSERT adds, UPDATE changes and DELETE removes. WHERE filters which records are affected.",
      },
      {
        question: "An advantage of a relational database over a single flat file is:",
        choices: [
          "Data is stored once, reducing redundancy and inconsistency",
          "It uses no storage space",
          "It needs no software",
          "Records cannot be deleted",
        ],
        accept: [
          "Data is stored once, reducing redundancy and inconsistency",
        ],
        answer: "If an address is stored in three places, updating two of them leaves the data contradicting itself.",
      },
      {
        question: "What does the SQL WHERE clause do?",
        choices: [
          "Filters which records are returned or affected",
          "Sorts the results",
          "Creates a new table",
          "Joins two databases",
        ],
        accept: [
          "Filters which records are returned or affected",
        ],
        answer: "ORDER BY sorts. Leaving WHERE off a DELETE statement removes every record in the table, which is unrecoverable.",
      },
    ],

    misconceptions: [
      { wrong: "\"Data redundancy is bad because it wastes storage space.\"",
        right: "Storage is the minor issue and is cheap. The serious problem is inconsistency: update the data in one place and forget another, and the database now holds two contradictory versions with no way to tell which is right." },
      { wrong: "\"An email address makes a good primary key because it is unique.\"",
        right: "Emails can change, be reused after someone leaves, or be shared within a family. A primary key must be permanent and guaranteed unique, which is why a purpose-made ID field is the safe answer." },
      { wrong: "\"SELECT * is fine because it returns everything you need.\"",
        right: "If the question asks for names and grades, returning every field loses the mark. It is also wasteful in real systems, transferring data nobody asked for." },
      { wrong: "\"You only need quotes around text in SQL sometimes.\"",
        right: "Text values always need quotes; numbers never do. WHERE Surname = 'Smith' but WHERE Age = 15. Getting it wrong is a syntax error." },
      { wrong: "\"A foreign key is just any field that appears in two tables.\"",
        right: "A foreign key specifically refers to the PRIMARY key of another table. That reference is what creates and enforces the link between them." },
      { wrong: "\"DELETE removes a whole table.\"",
        right: "DELETE FROM removes records from within a table, filtered by WHERE. Removing the table itself is DROP TABLE, which is a different and far more destructive statement." },
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
          "With 2 inputs there are 4 rows; with 3 inputs there are 8. The number of rows is 2 to the power of the number of inputs.",
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

    workedExamples: [
      {
        question: "Complete a truth table for Q = A AND B.",
        steps: [
          "Two inputs means 2² = 4 rows. Draw all four before filling anything in.",
          "Fill the input columns in binary counting order so nothing is missed: 00, 01, 10, 11.",
          "A=0, B=0 → AND needs BOTH to be 1 → Q=0",
          "A=0, B=1 → not both → Q=0",
          "A=1, B=0 → not both → Q=0",
          "A=1, B=1 → both are 1 → Q=1",
        ],
        answer: "Q is 0, 0, 0, 1 — AND outputs 1 only when both inputs are 1.",
      },
      {
        question: "Complete a truth table for Q = (A AND B) OR (NOT C).",
        steps: [
          "Three inputs means 2³ = 8 rows.",
          "Add a column for each intermediate result: one for (A AND B), one for (NOT C), then Q.",
          "Fill (A AND B): 1 only on the rows where A and B are both 1.",
          "Fill (NOT C): the opposite of C on every row.",
          "Q is the OR of those two columns: 1 if either is 1.",
          "Working left to right through the intermediate columns is what prevents errors — never try it in your head.",
        ],
        answer:
          "Q = 1 on every row where C = 0, plus the rows where A and B are both 1. Only rows with C=1 and not both A and B give Q=0.",
      },
      {
        question: "Build a logic circuit for Q = NOT (A OR B).",
        steps: [
          "Work outwards from the innermost bracket first.",
          "Innermost is (A OR B), so start with an OR gate taking A and B as inputs.",
          "The output of that OR gate feeds into the next operation.",
          "That operation is NOT, so connect the OR output to a NOT gate.",
          "The output of the NOT gate is Q. This combination is also called a NOR gate.",
        ],
        answer: "An OR gate with inputs A and B, feeding a NOT gate — which together make a NOR gate.",
      },
      {
        question: "An alarm sounds if a door is open AND the system is armed AND the override is NOT active. Write the Boolean expression.",
        steps: [
          "Assign a letter to each input: D = door open, S = system armed, V = override active.",
          "The alarm needs the door open AND the system armed, so start with D AND S.",
          "The override must NOT be active, which gives NOT V.",
          "All three conditions must hold at once, so join them with AND.",
          "Result: Alarm = D AND S AND NOT V.",
        ],
        answer: "Alarm = D AND S AND NOT V",
      },
    ],

    practice: [
      { question: "For a 2-input AND gate, what is the output when both inputs are 1?", accept: ["1", "one", "true"],
        answer: "1. AND outputs 1 only when every input is 1." },
      { question: "For a 2-input OR gate with inputs 1 and 1, what is the output?", accept: ["1", "one", "true"],
        answer: "1. Unlike everyday English, Boolean OR is also true when both inputs are true." },
      { question: "For a 2-input AND gate with inputs 1 and 0, what is the output?", accept: ["0", "zero", "false"],
        answer: "0, because AND requires both inputs to be 1." },
      { question: "What is the output of a NOT gate when the input is 0?", accept: ["1", "one", "true"],
        answer:
          "1. NOT inverts its single input, turning 0 into 1 and 1 into 0." },
      { question: "How many rows does a truth table with 2 inputs have?", accept: ["4", "four"],
        answer: "4, because 2² = 4. Draw them all before filling anything in." },
      { question: "How many rows does a truth table with 3 inputs have?", accept: ["8", "eight"],
        answer:
          "8, because 2³ = 8. Every extra input doubles the number of rows." },
      { question: "How many rows does a truth table with 4 inputs have?", accept: ["16", "sixteen"],
        answer: "16, because 2⁴ = 16. The rule is 2 to the power of the number of inputs." },
      { question: "Which gate outputs 1 only when at least one input is 1?", accept: ["or", "or gate", "an or gate"],
        answer: "The OR gate. It also outputs 1 when both inputs are 1." },
      { question: "Which gate has only one input and inverts it?", accept: ["not", "not gate", "a not gate", "inverter"],
        answer: "The NOT gate, also called an inverter, drawn as a triangle with a small circle on the output." },
      { question: "What does a small circle on the output of a logic gate mean?", accept: ["not", "invert", "inverted", "inversion", "it inverts the output", "negation"],
        answer: "It inverts the output. Spotting the circle is the difference between AND and NAND." },
      { question: "Which gate gives the opposite of AND?", accept: ["nand", "nand gate", "a nand gate"],
        answer: "NAND — the output is 0 only when both inputs are 1." },
      { question: "Which gate gives the opposite of OR?", accept: ["nor", "nor gate", "a nor gate"],
        answer: "NOR — the output is 1 only when both inputs are 0." },
      { question: "For Q = A AND NOT B, what is Q when A = 1 and B = 0?", accept: ["1", "one", "true"],
        answer: "1. NOT B turns 0 into 1, and 1 AND 1 gives 1." },
      { question: "For Q = A OR B, what is Q when A = 0 and B = 0?", accept: ["0", "zero", "false"],
        answer: "0. OR is only 0 when every input is 0." },
      { question: "For Q = NOT (A AND B), what is Q when A = 1 and B = 1?", accept: ["0", "zero", "false"],
        answer: "0. A AND B gives 1, and NOT inverts it to 0. That is the NAND behaviour." },
      { question: "What is the name of the table that lists every possible combination of inputs and the resulting output?",
        accept: ["truth table", "a truth table"], answer: "A truth table — and it doubles as your working, so method marks are available." },
      { question: "Explain why Boolean OR is not the same as the word 'or' in everyday English.",
        answer: "In everyday speech, 'tea or coffee' usually means one but not both. Boolean OR outputs 1 when either input is 1 AND when both are 1 — it is inclusive. The exclusive version, true for one but not both, is a separate gate called XOR. (Mark this one yourself.)" },
      { question: "Explain how a truth table can still earn marks even if your final output column is wrong.",
        answer: "Because the intermediate columns are your working. If the columns for (A AND B) and (NOT C) are correct but the final OR column has an error, an examiner can see the method was right and award method marks. A table with no intermediate columns and a wrong answer shows nothing and earns nothing. (Mark this one yourself.)" },
      {
        question: "An AND gate outputs 1 when:",
        choices: [
          "Both inputs are 1",
          "At least one input is 1",
          "Both inputs are 0",
          "The input is 0",
        ],
        accept: [
          "Both inputs are 1",
        ],
        answer: "AND needs everything true. OR needs at least one, and NOT simply inverts a single input.",
      },
      {
        question: "An OR gate outputs 0 only when:",
        choices: [
          "Both inputs are 0",
          "Both inputs are 1",
          "One input is 1",
          "The inputs differ",
        ],
        accept: [
          "Both inputs are 0",
        ],
        answer: "OR gives 1 in the other three cases. Reading the truth table row by row is more reliable than memorising a phrase.",
      },
      {
        question: "A NOT gate with an input of 1 outputs:",
        choices: [
          "0",
          "1",
          "Both",
          "Neither",
        ],
        accept: [
          "0",
        ],
        answer: "NOT inverts its single input, so 1 becomes 0 and 0 becomes 1. It is the only gate here with one input.",
      },
      {
        question: "A logic circuit has 4 inputs. How many rows will its truth table need?",
        choices: [
          "16",
          "8",
          "4",
          "32",
        ],
        accept: [
          "16",
        ],
        answer: "2 to the power of the number of inputs: 2 to the 4th is 16. Three inputs give 8 rows and two give 4.",
      },
      {
        question: "In the expression A AND (B OR C), what is evaluated first?",
        choices: [
          "B OR C, because it is in brackets",
          "A AND B",
          "Nothing, it is read left to right",
          "The NOT operation",
        ],
        accept: [
          "B OR C, because it is in brackets",
        ],
        answer: "Brackets come first, exactly as in arithmetic. Ignoring them changes the result of the whole expression.",
      },
    ],

    misconceptions: [
      { wrong: "\"OR means one or the other, but not both.\"",
        right: "Boolean OR is inclusive: it outputs 1 when either input is 1 and also when both are. The 'one but not both' version is a different gate, XOR." },
      { wrong: "\"You can work out a multi-gate circuit in your head.\"",
        right: "Give every internal wire its own column and work left to right. Trying to hold three gates in your head is where nearly all lost marks in this topic come from." },
      { wrong: "\"AND and NAND look basically the same on a diagram.\"",
        right: "The difference is a small circle on the output, and it reverses every single row of the truth table. Always check for the circle before starting." },
      { wrong: "\"A truth table with 3 inputs needs 6 rows.\"",
        right: "It needs 8. The rule is 2 to the power of the number of inputs, not double the inputs. Getting this wrong guarantees missing combinations." },
      { wrong: "\"You can draw a circuit by reading the expression left to right.\"",
        right: "Work outwards from the innermost brackets. Reading left to right produces a circuit that computes something different from the expression." },
      { wrong: "\"Logic gates are only a theory topic with no real hardware meaning.\"",
        right: "They are built from transistors and are physically how a computer makes every decision — including the circuits that perform binary addition." },
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
          "8-bit place values: 128 64 32 16 8 4 2 1. An 8-bit number holds 0 to 255, which is 2⁸ = 256 values.",
          "n bits can represent 2ⁿ different values.",
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
          "Left shift of n places multiplies by 2ⁿ; right shift of n places divides by 2ⁿ.",
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
          "Number of colours available = 2 to the power of the colour depth.",
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

    workedExamples: [
      {
        question: "A 2-minute song is recorded at 48,000 Hz with a bit depth of 24. Give the file size in megabytes.",
        steps: [
          "Convert the duration to seconds first: 2 minutes = 120 seconds.",
          "Apply the formula: sample rate x bit depth x duration.",
          "48,000 x 24 = 1,152,000 bits per second.",
          "1,152,000 x 120 = 138,240,000 bits.",
          "Divide by 8 for bytes: 17,280,000 bytes.",
          "Divide by 1000 twice for megabytes: 17,280 KB, then 17.28 MB.",
        ],
        answer: "17.28 MB",
      },
      {
        question: "An image is 1920 x 1080 with a colour depth of 32 bits. Give the file size in megabytes.",
        steps: [
          "1920 x 1080 = 2,073,600 pixels.",
          "2,073,600 x 32 = 66,355,200 bits.",
          "Divide by 8 for bytes: 8,294,400 bytes.",
          "Divide by 1000 for KB: 8,294.4 KB.",
          "Divide by 1000 again for MB: 8.2944 MB.",
        ],
        answer: "8.2944 MB (about 8.29 MB)",
      },
      {
        question: "Convert the denary number 214 to hexadecimal.",
        steps: [
          "Convert to binary first: 128 fits (86 left), 64 fits (22 left), 32 no, 16 fits (6 left), 8 no, 4 fits (2 left), 2 fits (0 left), 1 no.",
          "That gives 11010110.",
          "Split into nibbles from the right: 1101 and 0110.",
          "1101 = 8 + 4 + 1 = 13 = D.",
          "0110 = 4 + 2 = 6.",
        ],
        answer: "D6",
      },
      {
        question:
          "An 8-bit register holds 11110000. Perform a right shift of 3 places, and state what is lost.",
        steps: [
          "Move every bit three places to the right, filling from the left with zeros.",
          "11110000 becomes 00011110.",
          "In denary the original was 240, and the result is 30, which is 240 divided by 2³ = 8.",
          "The three bits pushed off the right-hand end were 0, 0, 0 — so nothing of value was lost this time.",
          "Had the original ended in 1s, those bits would be gone permanently and the division would round down.",
        ],
        answer:
          "00011110 (30). A right shift of 3 divides by 8. Here nothing was lost, but bits pushed off the end are always lost permanently.",
      },
    ],

    practice: [
      { question: "How many bits are in a nibble?", accept: ["4", "four"], answer: "4 bits — exactly what one hexadecimal digit represents." },
      { question: "How many different values can 4 bits represent?", accept: ["16", "sixteen"], answer:
          "16, because 2⁴ = 16. Each extra bit doubles the number of values." },
      { question: "How many different values can 10 bits represent?", accept: ["1024"], answer:
          "1024, because 2¹⁰ = 1024. This is why a binary search of 1000 items takes about 10 steps." },
      { question: "Convert the binary number 11001100 to denary.", accept: ["204"], answer: "204. That is 128 + 64 + 8 + 4 = 204." },
      { question: "Convert 150 to an 8-bit binary number.", accept: ["10010110"], answer: "10010110. 128 fits (22 left), 16 fits (6 left), 4 fits (2 left), 2 fits (0 left)." },
      { question: "Convert the binary number 10110011 to hexadecimal.", accept: ["b3", "0xb3"], answer: "B3. Split into nibbles: 1011 = 11 = B, and 0011 = 3." },
      { question: "Convert the hexadecimal number A7 to denary.", accept: ["167"], answer: "167. A is 10, so 10 x 16 + 7 = 160 + 7 = 167." },
      { question: "In hexadecimal, what denary value does the digit C represent?", accept: ["12", "twelve"], answer: "12. The letters run A=10, B=11, C=12, D=13, E=14, F=15." },
      { question: "An image is 500 x 400 with a colour depth of 8 bits. Give the file size in kilobytes.",
        accept: ["200", "200kb"], answer: "200 KB. 500 x 400 = 200,000 pixels; x 8 = 1,600,000 bits; divide by 8 = 200,000 bytes; divide by 1000 = 200 KB." },
      { question: "A 5-second clip is sampled at 8000 Hz with a bit depth of 8. Give the file size in kilobytes.",
        accept: ["40", "40kb"], answer: "40 KB. 8000 x 8 = 64,000 bits per second; x 5 = 320,000 bits; divide by 8 = 40,000 bytes; divide by 1000 = 40 KB." },
      { question: "A left shift of 4 places multiplies a number by how much?", accept: ["16", "sixteen", "2^4"],
        answer: "16, because a shift of n places multiplies by 2ⁿ and 2⁴ = 16." },
      { question: "How many colours can be represented with a colour depth of 1 bit?", accept: ["2", "two"],
        answer: "2, because 2¹ = 2 — typically black and white." },
      { question: "How many bits does standard ASCII use?", accept: ["7", "seven"],
        answer: "7 bits, giving 128 characters. Extended ASCII uses 8 bits for 256." },
      { question: "Which character set can represent characters from most of the world's writing systems?",
        accept: ["unicode"], answer: "Unicode. It needs more bits per character than ASCII, so files are larger." },
      { question: "Which compression type permanently discards data to achieve a much smaller file?",
        accept: ["lossy", "lossy compression"], answer: "Lossy compression. The removed data cannot be recovered." },
      { question: "Which lossless technique gives frequently used characters shorter binary codes?",
        accept: ["huffman", "huffman coding", "huffman encoding"],
        answer: "Huffman coding, which assigns shorter codes to more common characters and longer ones to rare characters." },
      { question: "Explain why file size calculations should be done in bits first and converted only at the end.",
        answer: "Because the formulas produce bits, and converting partway through introduces an extra step where a division by 8 or by 1000 can be applied at the wrong point or forgotten entirely. Working through to a bit total first, then converting once at the end, gives a single clear chain that also earns method marks if the final arithmetic slips. (Mark this one yourself.)" },
      { question: "Explain why hexadecimal is preferred over binary for humans reading memory addresses.",
        answer: "One hex digit represents four binary digits, so a value is about a quarter of the length. A 32-bit address is 32 binary digits but only 8 hex digits — far quicker to read aloud, write down and compare, and far less prone to miscounting a run of identical digits. The computer still works entirely in binary. (Mark this one yourself.)" },
      {
        question: "What does each pixel in a bitmap image store?",
        choices: [
          "A binary code for its colour",
          "The width of the image",
          "A compression setting",
          "The file name",
        ],
        accept: [
          "A binary code for its colour",
        ],
        answer: "Colour depth is the number of bits per pixel. More bits means more possible colours and a larger file.",
      },
      {
        question: "Increasing the sample rate of a sound recording:",
        choices: [
          "Improves quality and increases file size",
          "Improves quality and reduces file size",
          "Reduces quality and file size",
          "Has no effect on file size",
        ],
        accept: [
          "Improves quality and increases file size",
        ],
        answer: "Sample rate is samples per second; bit depth is bits per sample. Raising either improves quality and enlarges the file.",
      },
      {
        question: "Which character set can represent characters from most world languages?",
        choices: [
          "Unicode",
          "ASCII",
          "Denary",
          "Hexadecimal",
        ],
        accept: [
          "Unicode",
        ],
        answer: "ASCII uses 7 or 8 bits and covers mainly English. Unicode uses more bits and covers a far wider range of scripts and emoji.",
      },
      {
        question: "Metadata in an image file stores:",
        choices: [
          "Information such as dimensions and colour depth",
          "The pixels themselves",
          "The compression algorithm's code",
          "Nothing useful",
        ],
        accept: [
          "Information such as dimensions and colour depth",
        ],
        answer: "Without metadata the computer would not know how to interpret the stream of pixel data.",
      },
      {
        question: "In ASCII, the code for 'B' is one more than the code for 'A'. This means character codes are:",
        choices: [
          "Sequential within each set of letters",
          "Randomly assigned",
          "The same for upper and lower case",
          "Chosen by the programmer",
        ],
        accept: [
          "Sequential within each set of letters",
        ],
        answer: "That is why you can convert case by adding or subtracting a fixed value, and why sorting alphabetically works numerically.",
      },
    ],

    misconceptions: [
      { wrong: "\"8 bits can represent 255 different values.\"",
        right: "256. The range is 0 to 255, and counting zero gives 256 values. Forgetting zero is one of the most common slips in the whole subject." },
      { wrong: "\"Colour depth and resolution mean roughly the same thing.\"",
        right: "Resolution is how MANY pixels; colour depth is how many bits describe EACH pixel. Doubling the colour depth doubles the file size without adding a single pixel." },
      { wrong: "\"You should convert to KB as soon as you have bytes, then continue.\"",
        right: "Work all the way through in bits, then convert once at the end. Converting partway through is where most marks on this topic are lost." },
      { wrong: "\"A right shift always divides exactly.\"",
        right: "Bits pushed off the right-hand end are lost permanently, so the result is rounded down. 00000101 (5) shifted right once gives 2, not 2.5." },
      { wrong: "\"Unicode replaced ASCII because ASCII was broken.\"",
        right: "ASCII works perfectly for English text and produces smaller files. Unicode exists because ASCII cannot represent most of the world's writing systems — it is a matter of coverage, not correctness." },
      { wrong: "\"Convert binary to hex by grouping the bits from the left.\"",
        right: "Group from the RIGHT, padding the left with zeros if needed. Grouping from the left gives the wrong answer whenever the number of bits is not a multiple of four." },
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

    workedExamples: [
      {
        question:
          "A student guesses a teacher's password and reads the exam papers stored on their account. Identify the law broken and the specific offence.",
        steps: [
          "Ask what actually happened: they accessed a computer system they had no permission to use.",
          "That is covered by the Computer Misuse Act 1990.",
          "The first offence under that Act is unauthorised access to computer material — met the moment they logged in.",
          "They then read material with the intent of gaining an advantage, which engages the second offence: unauthorised access with intent to commit a further offence.",
          "They did not alter anything, so the third offence — unauthorised modification — does not apply.",
        ],
        answer:
          "Computer Misuse Act 1990 — unauthorised access to computer material, and unauthorised access with intent to commit a further offence.",
      },
      {
        question:
          "A company emails customers' addresses to a marketing firm without asking them. Identify the law and explain which principles were breached.",
        steps: [
          "Personal data about identifiable living people has been shared, so the Data Protection Act 2018 applies.",
          "Data must be used fairly and lawfully — sharing without consent or another lawful basis fails this.",
          "Data must be collected only for specified purposes — it was collected to fulfil orders, not to sell to marketers.",
          "Data must be kept secure — sending it to a third party without safeguards fails this too.",
          "Customers also have rights over their data, including knowing who holds it, which this bypasses.",
        ],
        answer:
          "Data Protection Act 2018. It breaches fair and lawful use, use for specified purposes only, and keeping data secure.",
      },
      {
        question:
          "Discuss the environmental impact of replacing a working phone every two years. Give both sides and a conclusion.",
        steps: [
          "Negative — manufacturing consumes rare earth metals and other finite resources, often mined in damaging conditions.",
          "Negative — the discarded phone becomes e-waste, frequently shipped abroad and dismantled unsafely, releasing lead and mercury.",
          "Negative — most of a phone's lifetime carbon cost is in manufacture, so replacing early wastes it.",
          "Positive — newer devices are often more energy-efficient in use, and one phone can replace a camera, satnav and music player.",
          "Conclusion — the manufacturing cost dominates, so replacing a working phone every two years is difficult to justify environmentally; keeping it longer or recycling it properly is better.",
        ],
        answer:
          "Predominantly negative, because manufacturing dominates the total impact. A supported conclusion is what earns the top marks, not just a list of points.",
      },
      {
        question:
          "A school is choosing between open source and proprietary software for its computers. Give two advantages of each.",
        steps: [
          "Open source advantage — no licence cost, which matters across hundreds of machines.",
          "Open source advantage — the source code can be inspected and adapted to the school's needs.",
          "Proprietary advantage — professional support is available when something breaks, with someone accountable.",
          "Proprietary advantage — usually more polished and better tested, and more likely to match what pupils meet in workplaces.",
          "Note the trade-off: open source needs in-house technical expertise the school may not have.",
        ],
        answer:
          "Open source: free, and modifiable/inspectable. Proprietary: supported and professionally tested. The deciding factor is usually whether the school has technical staff.",
      },
    ],

    practice: [
      { question: "Which UK law makes unauthorised access to computer material illegal?",
        accept: ["computer misuse act", "computer misuse act 1990", "the computer misuse act", "cma"],
        answer: "The Computer Misuse Act 1990, which covers hacking and unauthorised modification of data." },
      { question: "In which year was the Computer Misuse Act passed?", accept: ["1990"],
        answer: "1990. Quoting the year alongside the name is what turns a vague answer into a precise one." },
      { question: "Which UK law governs how organisations collect, store and use personal data?",
        accept: ["data protection act", "data protection act 2018", "the data protection act", "dpa"],
        answer: "The Data Protection Act 2018, which implements the UK GDPR." },
      { question: "In which year was the current Data Protection Act passed?", accept: ["2018"],
        answer: "2018. It replaced the 1998 Act and implements the UK GDPR." },
      { question: "Which UK law protects original works such as software, music and writing from being copied?",
        accept: ["copyright designs and patents act", "copyright, designs and patents act",
                 "copyright designs and patents act 1988", "cdpa", "copyright act"],
        answer: "The Copyright, Designs and Patents Act 1988." },
      { question: "Which UK law gives the public the right to request information held by public authorities?",
        accept: ["freedom of information act", "freedom of information act 2000", "foi", "foia"],
        answer: "The Freedom of Information Act 2000." },
      { question: "A student illegally downloads and shares a film. Which Act has been broken?",
        accept: ["copyright designs and patents act", "copyright, designs and patents act", "copyright", "cdpa"],
        answer: "The Copyright, Designs and Patents Act 1988 — distributing a protected work without permission." },
      { question: "A hacker breaks into a bank's system. Which Act has been broken?",
        accept: ["computer misuse act", "the computer misuse act", "computer misuse act 1990", "cma"],
        answer: "The Computer Misuse Act 1990 — unauthorised access to computer material." },
      { question: "A shop leaks its customer database through poor security. Which Act is most relevant?",
        accept: ["data protection act", "the data protection act", "data protection act 2018", "dpa"],
        answer: "The Data Protection Act 2018 — personal data must be kept secure." },
      { question: "What is the term for the gap between people with reliable access to technology and those without?",
        accept: ["digital divide", "the digital divide"],
        answer: "The digital divide, which affects education, job applications and access to services." },
      { question: "What is the term for discarded electronic equipment?",
        accept: ["e-waste", "ewaste", "electronic waste"],
        answer: "E-waste, often shipped to developing countries and dismantled unsafely, releasing toxic substances." },
      { question: "Which type of software is distributed with its source code, free to inspect and modify?",
        accept: ["open source", "open source software", "opensource"],
        answer: "Open source software. Note it means the code is available, not merely that the software is free of charge." },
      { question: "Which type of software keeps its source code secret and is used under a purchased licence?",
        accept: ["proprietary", "proprietary software", "closed source"],
        answer: "Proprietary software, which usually comes with professional support." },
      { question: "What are the small files stored by websites on a user's device, used to remember settings and track activity?",
        accept: ["cookies", "cookie"], answer: "Cookies. The law requires consent for non-essential ones." },
      { question: "Under data protection law, name one right an individual has over data held about them.",
        accept: ["see the data", "access the data", "right of access", "have it corrected",
                 "correct inaccurate data", "have it deleted", "right to be deleted", "access", "erasure"],
        answer: "Rights include seeing the data held about you, having inaccurate data corrected, and in many cases having it deleted." },
      { question: "What is the term for using technology to carry out tasks previously done by people?",
        accept: ["automation"], answer: "Automation. It removes some jobs and creates others, but rarely for the same people or places." },
      { question: "Explain why 'it's against the law' is a poor answer in an exam.",
        answer: "Because the mark is for identifying WHICH law and why it applies. 'This breaches the Computer Misuse Act 1990 because it is unauthorised access to computer material' names the Act, the year and the specific offence. A vague statement shows no knowledge of the legislation, which is the thing being assessed. (Mark this one yourself.)" },
      { question: "Discuss whether facial recognition should be used in schools. Give both sides and reach a conclusion.",
        answer: "In favour: faster registration and cantine payments, improved site security, and a reliable record of who is on site. Against: it collects biometric data about children, which is especially sensitive under data protection law; it requires consent and secure storage; systems are known to be less accurate for some groups, risking unfair treatment; and it normalises surveillance for young people. A supported conclusion might be that the convenience gains are modest while the privacy risks fall on children who cannot meaningfully consent, so it is hard to justify without a strong specific need. (Mark this one yourself.)" },
      {
        question: "Which law covers unauthorised access to computer systems?",
        choices: [
          "The Computer Misuse Act",
          "The Data Protection Act",
          "Copyright law",
          "The Freedom of Information Act",
        ],
        accept: [
          "The Computer Misuse Act",
        ],
        answer: "It covers unauthorised access, access with intent to commit an offence, and unauthorised modification of data.",
      },
      {
        question: "Which law governs how organisations handle personal data?",
        choices: [
          "The Data Protection Act",
          "The Computer Misuse Act",
          "Patent law",
          "The Communications Act",
        ],
        accept: [
          "The Data Protection Act",
        ],
        answer: "It requires data to be accurate, kept securely, used only for stated purposes and not held longer than necessary.",
      },
      {
        question: "Open source software is defined by the fact that:",
        choices: [
          "Its source code is available for others to view and modify",
          "It is always free of charge",
          "It has no licence at all",
          "It cannot be sold",
        ],
        accept: [
          "Its source code is available for others to view and modify",
        ],
        answer: "Free of charge and open source are different things. Proprietary software keeps its source code hidden.",
      },
      {
        question: "What is meant by the digital divide?",
        choices: [
          "Unequal access to technology and the internet between groups",
          "The gap between hardware and software",
          "The difference between analogue and digital signals",
          "Splitting a network into segments",
        ],
        accept: [
          "Unequal access to technology and the internet between groups",
        ],
        answer: "As more services move online, people without reliable access are excluded from things others take for granted.",
      },
      {
        question: "Which is an ENVIRONMENTAL issue associated with computing?",
        choices: [
          "Electronic waste containing toxic materials",
          "Software piracy",
          "Unauthorised access to data",
          "Poor password practice",
        ],
        accept: [
          "Electronic waste containing toxic materials",
        ],
        answer: "Devices are replaced quickly and often exported for disposal. Energy use by data centres is the other major concern.",
      },
    ],

    misconceptions: [
      { wrong: "\"Saying 'it's illegal' is enough to answer a legal question.\"",
        right: "Name the Act and its year, then the specific offence. 'Computer Misuse Act 1990 — unauthorised access to computer material' is the answer; 'it's illegal' scores nothing." },
      { wrong: "\"The Data Protection Act covers hacking.\"",
        right: "Hacking is the Computer Misuse Act 1990. The Data Protection Act 2018 governs how organisations handle personal data — including keeping it secure, which is a different offence by a different party." },
      { wrong: "\"Open source just means free software.\"",
        right: "It means the source code is available to inspect, modify and redistribute. Some open source software is sold, and plenty of free software is not open source at all." },
      { wrong: "\"Impact questions want you to say technology is bad for the environment.\"",
        right: "They want both sides. Manufacturing and e-waste are serious costs, but video calls cut travel, digital documents cut paper, and smart systems cut energy use. Top marks need a balanced answer with a supported conclusion." },
      { wrong: "\"Context and impact answers should be about society in general.\"",
        right: "Answer about the specific people in the scenario. Naming who is affected and how scores far higher than generic statements that would fit any question." },
      { wrong: "\"A long list of points will get full marks on a 6 to 8 mark question.\"",
        right: "Those questions award marks for reaching a supported conclusion, not just listing. Finish by stating a judgement that follows from what you have written." },
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

    workedExamples: [
      {
        question:
          "A question says: 'Explain why a solid state drive is faster than a hard disk drive. [3 marks]'. Plan the answer before writing.",
        steps: [
          "Underline the command word: Explain. That means what AND why, so the word 'because' should appear.",
          "Note the marks: 3, so plan three distinct creditworthy points.",
          "Point 1 — an SSD has no moving parts, so there is no delay while a disk spins to the right position.",
          "Point 2 — an HDD must physically move a read/write head, which takes milliseconds; an SSD accesses any location electronically.",
          "Point 3 — because there is no seek time, an SSD is far faster at random access in particular.",
          "Check: three points, all different, each explaining rather than just stating.",
        ],
        answer:
          "Three separate explained points, not one point said three ways. Underlining 'Explain' and counting the marks first is what produces that structure.",
      },
      {
        question:
          "Convert this weak answer into a full-mark one: 'A firewall stops hackers.'",
        steps: [
          "Identify what is missing: no definition, no mechanism, no reason.",
          "Add what it is: a firewall is hardware or software that sits between a network and the outside world.",
          "Add what it does: it monitors all incoming and outgoing traffic.",
          "Add the mechanism: it checks each packet against a set of security rules.",
          "Add the outcome: anything that does not meet those rules is blocked, so unauthorised connections are refused.",
        ],
        answer:
          "'A firewall monitors incoming and outgoing traffic and blocks anything that does not meet the security rules, so unauthorised connections are refused.' Same knowledge, three times the marks.",
      },
      {
        question:
          "You have 90 minutes for an 80-mark paper. Plan your timing.",
        steps: [
          "Work out the ratio: 90 minutes for 80 marks is slightly over one minute per mark.",
          "Reserve 8 to 10 minutes at the end for checking, leaving about 80 minutes of writing.",
          "That gives roughly 1 minute per mark for the questions themselves.",
          "Write the finish time next to each major question before you start.",
          "If a question overruns its time, leave it and come back — a 6-mark question you never reach costs more than an imperfect 4-mark answer.",
        ],
        answer:
          "About 1 minute per mark, with 8 to 10 minutes reserved for checking. Writing target times on the paper is what makes it actually happen.",
      },
      {
        question:
          "You get a trace table question wrong in a past paper. Describe the most useful thing to do next.",
        steps: [
          "Do NOT simply read the correct answer and move on — that feels like learning and mostly is not.",
          "Mark it yourself against the mark scheme and identify exactly where your table first diverged.",
          "Work out the CATEGORY of error: a missed iteration, an off-by-one on the loop condition, or a variable updated in the wrong order.",
          "Add that category to a personal list of repeated mistakes.",
          "Redo the same question from scratch a few days later, without looking, and check whether the error recurs.",
        ],
        answer:
          "Find the category of the error, log it, and retry the question later from scratch. Most people lose marks to the same handful of error types repeatedly.",
      },
    ],

    practice: [
      { question: "Which command word requires you to say what happens AND why?",
        accept: ["explain"], answer: "Explain. The word 'because' should almost always appear in your answer." },
      { question: "Which command word asks for a short fact with no explanation?",
        accept: ["state", "give", "name", "state give or name"],
        answer: "State, Give or Name. Adding explanation wastes time you need for the longer questions." },
      { question: "Which command word requires you to discuss two things in relation to each other?",
        accept: ["compare"], answer: "Compare. Two separate descriptions is not a comparison — use words like 'whereas' and 'in contrast'." },
      { question: "Which command word asks you to weigh up more than one side and reach a supported conclusion?",
        accept: ["evaluate", "discuss", "evaluate or discuss"],
        answer: "Evaluate or Discuss. Marks are available for the conclusion itself, not just the points." },
      { question: "A question is worth 4 marks. Roughly how many distinct points should you make?",
        accept: ["4", "four"], answer: "Four separate creditworthy points. Repeating one point in different words scores once." },
      { question: "What is the name for a mark awarded for correct working even when the final answer is wrong?",
        accept: ["method mark", "a method mark", "method marks"],
        answer: "A method mark. This is why showing working on every calculation is the highest-value habit in the subject." },
      { question: "Should you rub out working you think is wrong? Answer yes or no.",
        accept: ["no"], answer: "No. Cross it out with a single line — crossed-out working is still marked if nothing replaces it." },
      { question: "In a 'show that' question, where are the marks?",
        accept: ["the working", "in the working", "working", "the method", "method"],
        answer: "Entirely in the working. You were given the answer, so writing it down earns nothing." },
      { question: "What is the name for actively recalling information from memory without looking?",
        accept: ["retrieval practice", "retrieval"],
        answer: "Retrieval practice. It builds memory far more effectively than rereading notes." },
      { question: "What is the name for reviewing material at increasing intervals over time?",
        accept: ["spaced repetition", "spacing", "spaced practice"],
        answer: "Spaced repetition. Reviewing after a day, then a week, then a month beats cramming for retention." },
      { question: "What document tells you exactly what an examiner awards marks for?",
        accept: ["mark scheme", "the mark scheme", "markscheme"],
        answer: "The mark scheme. Reading them teaches you the exact vocabulary examiners reward." },
      { question: "Roughly how many minutes per mark is a reasonable guide in an exam?",
        accept: ["1", "one", "1 minute", "one minute"],
        answer: "About one minute per mark, leaving some time at the end to check." },
      { question: "Is there a penalty for a wrong answer in GCSE Computer Science? Answer yes or no.",
        accept: ["no"], answer: "No. Never leave a blank — an attempt using correct technical vocabulary can pick up partial credit." },
      { question: "Which is more effective revision: rereading your notes, or writing answers from memory?",
        accept: ["writing answers from memory", "writing from memory", "writing answers",
                 "from memory", "retrieval practice", "writing"],
        answer: "Writing from memory. Rereading feels productive because the material looks familiar, but familiarity is not recall." },
      { question: "Before writing a long answer, what is the first thing to underline in the question?",
        accept: ["the command word", "command word", "commandword"],
        answer: "The command word. It determines the entire shape of the answer and takes two seconds to find." },
      { question: "Why should you practise writing algorithms by hand rather than on a computer?",
        accept: ["no autocomplete", "the exam is on paper", "exam is handwritten", "because the exam is written",
                 "there is no autocomplete", "no error checking", "handwriting is a different skill"],
        answer: "Because the exam is handwritten with no autocomplete, no syntax highlighting and no run button. Handwriting an algorithm is a distinct skill from typing one." },
      { question: "Explain why answering an 'Explain' question with a one-word answer caps your marks.",
        answer: "Because the command word defines what is being assessed. 'Explain' asks for a mechanism and a reason, so a one-word answer demonstrates none of it — however factually correct that word is. The examiner cannot award marks for reasoning that was never written down. (Mark this one yourself.)" },
      { question: "Describe how you would use a past paper most effectively, in three steps.",
        answer: "First, do it under timed conditions without notes, so it tests recall rather than reading. Second, mark it yourself against the official mark scheme, noting exactly where marks were awarded and what phrases were expected. Third, categorise your errors — knowledge gaps, misread command words, arithmetic slips — and revise the category rather than the individual question, since the same error type will recur on different content. (Mark this one yourself.)" },
      {
        question: "A question worth 6 marks asking you to 'discuss' expects:",
        choices: [
          "Points on both sides and a conclusion",
          "A single definition",
          "Six unrelated facts",
          "A working program",
        ],
        accept: [
          "Points on both sides and a conclusion",
        ],
        answer: "Discuss and evaluate need balance and a judgement. Describe and explain do not.",
      },
      {
        question: "When writing an algorithm in an exam, you should:",
        choices: [
          "Use clear pseudocode with consistent indentation",
          "Write it in English prose only",
          "Use a real language's exact syntax or lose all marks",
          "Draw the hardware",
        ],
        accept: [
          "Use clear pseudocode with consistent indentation",
        ],
        answer: "Most specifications accept pseudocode or any consistent high-level language. Indentation shows the structure and earns marks.",
      },
      {
        question: "If asked to 'give two advantages AND two disadvantages', the safest approach is:",
        choices: [
          "Label each one clearly so all four are visible to the examiner",
          "Write one long paragraph",
          "Give four advantages",
          "Give the two you know best",
        ],
        accept: [
          "Label each one clearly so all four are visible to the examiner",
        ],
        answer: "Examiners mark what they can find. Burying a point mid-paragraph risks it being missed entirely.",
      },
      {
        question: "Which is the best way to revise a topic like sorting algorithms?",
        choices: [
          "Trace them step by step on small example lists",
          "Read the notes repeatedly",
          "Memorise the definitions only",
          "Watch a video without pausing",
        ],
        accept: [
          "Trace them step by step on small example lists",
        ],
        answer: "Tracing forces you to apply the method, which is exactly what the exam asks. Re-reading feels productive but tests nothing.",
      },
      {
        question: "In a question about converting binary to denary, you should show:",
        choices: [
          "The place values used in the working",
          "Only the final answer",
          "The hexadecimal equivalent",
          "A flowchart",
        ],
        accept: [
          "The place values used in the working",
        ],
        answer: "Working earns method marks, so an arithmetic slip at the end still scores. An unsupported wrong answer scores nothing.",
      },
    ],

    misconceptions: [
      { wrong: "\"Writing more always gets more marks.\"",
        right: "A 4-mark question needs four DIFFERENT points. Four sentences saying the same thing scores one mark, and the extra writing costs time you needed elsewhere." },
      { wrong: "\"Rereading notes is good revision because it feels familiar.\"",
        right: "Familiarity is not recall. Recognising material when you see it is very different from producing it in an exam. Write answers from memory, then check." },
      { wrong: "\"There is no point attempting a question I can't fully answer.\"",
        right: "There is no penalty for being wrong. A relevant formula, a labelled diagram or a correct technical term can all earn partial credit on a question you cannot finish." },
      { wrong: "\"In a 'show that' question you can just write the given answer.\"",
        right: "Every mark is in the working, because the answer was already provided. Writing it down demonstrates nothing and scores nothing." },
      { wrong: "\"I should revise the topics I enjoy so I stay motivated.\"",
        right: "Comfortable revision is mostly wasted revision. The marks are in the topics you find hardest, which are exactly the ones you will avoid unless you plan against it." },
      { wrong: "\"Erasing wrong working keeps the paper tidy and looks better.\"",
        right: "Crossed-out working is still marked if nothing has replaced it; erased working cannot earn anything. Neatness is worth nothing, method marks are worth a lot." },
    ],
  },

  "computer-science/memory-and-storage": {
    summary:
      "A computer needs somewhere to hold what it is working on right now, and somewhere to keep things when the power goes off. Those are two different jobs done by two different kinds of hardware, and almost every mark lost on this topic comes from blurring them together. This topic covers RAM, ROM, virtual memory, the three families of secondary storage, and how to work out whether something will actually fit.",
    keyFacts: [
      {
        heading: "Primary storage",
        points: [
          "Primary storage is memory the CPU can access directly: registers, cache, RAM and ROM.",
          "RAM (Random Access Memory) holds the programs and data currently in use. It is volatile — its contents are lost the moment power is removed.",
          "ROM (Read Only Memory) is non-volatile and holds the boot program that starts the computer and loads the operating system into RAM.",
          "RAM can be read from and written to; ROM is read only in normal use.",
          "More RAM means more programs and data can be held at once, so the computer relies less on slow virtual memory.",
        ],
      },
      {
        heading: "Virtual memory",
        points: [
          "Virtual memory is a section of secondary storage used as though it were extra RAM, when RAM is full.",
          "Data not currently being used is moved out of RAM to the hard disk to make room for what is needed.",
          "It is far slower than real RAM, because secondary storage is slower to access — so heavy use of virtual memory makes a computer feel sluggish.",
          "Constantly swapping data back and forth is called disk thrashing, and it can leave a machine nearly unusable.",
          "The proper fix is more RAM. Virtual memory is a stopgap, not a substitute.",
        ],
      },
      {
        heading: "Why secondary storage is needed",
        points: [
          "Secondary storage is non-volatile, so files survive being switched off. RAM does not.",
          "The CPU cannot access secondary storage directly — data has to be copied into RAM first.",
          "It is much larger and much cheaper per gigabyte than RAM.",
          "It holds the operating system, applications and user files when they are not in use.",
          "Every general-purpose computer needs both: secondary storage to keep things, RAM to work on them.",
        ],
      },
      {
        heading: "The three types of secondary storage",
        points: [
          "Magnetic (hard disk drives): spinning platters magnetised in patterns. High capacity, cheap per gigabyte, but slow, noisy and easily damaged because they have moving parts.",
          "Solid state (SSDs, USB sticks, memory cards): flash memory with no moving parts. Fast, silent, durable and low power, but more expensive per gigabyte and with a limited number of write cycles.",
          "Optical (CDs, DVDs, Blu-ray): pits and lands burned into a disc and read with a laser. Very cheap, portable and good for distribution, but low capacity, slow and easily scratched.",
          "Compare storage on capacity, speed, portability, durability, reliability and cost per gigabyte — the six characteristics examiners expect.",
          "The right choice depends on the situation: an SSD for a laptop that gets carried around, magnetic for a cheap archive, optical for handing something to a lot of people.",
        ],
      },
      {
        heading: "Units and capacity",
        points: [
          "1 bit is a single 0 or 1. 1 nibble is 4 bits. 1 byte is 8 bits.",
          "Then, each step up: kilobyte, megabyte, gigabyte, terabyte, petabyte.",
          "Most GCSE specifications use 1 kB = 1000 bytes, but some use 1024. Check yours, and state which you are using in the answer.",
          "To find whether files fit: work out the size of one item, multiply by how many, then convert into the same unit as the storage.",
          "Manufacturers quote capacity in decimal units while operating systems often display binary ones, which is why a '1 TB' drive shows as about 931 GB.",
        ],
      },
    ],
    flashcards: [
      { term: "Primary storage", definition: "Memory the CPU can access directly, including registers, cache, RAM and ROM." },
      { term: "RAM", definition: "Random Access Memory — volatile primary storage holding the programs and data currently in use." },
      { term: "ROM", definition: "Read Only Memory — non-volatile primary storage holding the boot program that starts the computer." },
      { term: "Volatile", definition: "Loses its contents when power is removed. RAM is volatile; ROM and secondary storage are not." },
      { term: "Virtual memory", definition: "A section of secondary storage used as extra RAM when RAM is full, at a large cost in speed." },
      { term: "Disk thrashing", definition: "Constant swapping of data between RAM and virtual memory, which makes a computer extremely slow." },
      { term: "Secondary storage", definition: "Non-volatile storage that holds files, programs and the operating system when they are not in use." },
      { term: "Magnetic storage", definition: "Storage using magnetised patterns on spinning platters, as in a hard disk drive." },
      { term: "Solid state storage", definition: "Flash-based storage with no moving parts, as in an SSD, USB stick or memory card." },
      { term: "Optical storage", definition: "Storage read by laser from pits and lands burned into a disc, as in a CD, DVD or Blu-ray." },
      { term: "Byte", definition: "8 bits — enough to hold one character of text in ASCII." },
      { term: "Nibble", definition: "4 bits, or half a byte." },
      { term: "Capacity", definition: "How much data a storage device can hold, measured in bytes and their multiples." },
      { term: "Durability", definition: "How well a storage device survives being knocked, dropped or carried around." },
      { term: "Write cycle limit", definition: "The finite number of times a solid state cell can be written to before it wears out." },
    ],
    examTips: [
      {
        tip: "Never call secondary storage 'memory' in an answer",
        detail:
          "Examiners read 'memory' as RAM and ROM. If you mean the hard disk, say secondary storage or name the device. This single habit protects marks all through the paper.",
      },
      {
        tip: "Say volatile AND what that means",
        detail:
          "'RAM is volatile' is one mark at best. 'RAM is volatile, so its contents are lost when the power is turned off' is the full answer, and takes four extra words.",
      },
      {
        tip: "Justify a storage choice against the scenario",
        detail:
          "These questions always describe someone specific. A field researcher needs durability; a video archive needs cheap capacity. Quote the detail from the question in your answer.",
      },
      {
        tip: "Give the drawback as well as the benefit",
        detail:
          "'SSDs are faster' answers half the question. Add that they cost more per gigabyte. Comparison questions almost always want both sides.",
      },
      {
        tip: "Show every step of a capacity calculation",
        detail:
          "Size of one file, times the number of files, then the conversion. Method marks survive an arithmetic slip; a bare wrong number earns nothing.",
      },
      {
        tip: "State which unit convention you are using",
        detail:
          "Write '(using 1 kB = 1000 bytes)' before you calculate. It shows you know the two conventions exist, and protects you if your board uses the other one.",
      },
      {
        tip: "Explain virtual memory as a trade, not a free upgrade",
        detail:
          "Say what it buys (the program can keep running) and what it costs (secondary storage is far slower than RAM). The trade-off is where the marks are.",
      },
    ],

    workedExamples: [
      {
        question: "Explain the difference between RAM and ROM, and why a computer needs both.",
        steps: [
          "Both are primary storage, meaning the CPU can access them directly.",
          "RAM is volatile: contents are lost when power is removed. ROM is non-volatile: contents survive.",
          "RAM can be read from and written to. ROM is read only in normal use.",
          "ROM holds the boot program, which is needed the instant the machine turns on — before anything has been loaded from the hard disk.",
          "RAM holds whatever is being used right now, which changes constantly, so it must be writable.",
        ],
        answer:
          "ROM is non-volatile and read only, holding the boot program so the computer can start. RAM is volatile and writable, holding the programs and data in use. Both are needed: something must survive power-off to start the machine, and something must be freely writable to work in.",
      },
      {
        question:
          "A photographer takes 2,400 photos, each 4.5 MB. Will they fit on a 16 GB memory card? Use 1 GB = 1000 MB.",
        steps: [
          "Total size = number of photos × size of each = 2400 × 4.5 MB.",
          "2400 × 4.5 = 10,800 MB.",
          "Convert to gigabytes: 10,800 ÷ 1000 = 10.8 GB.",
          "Compare with the card: 10.8 GB is less than 16 GB.",
          "Note the spare capacity: 16 − 10.8 = 5.2 GB left over.",
        ],
        answer:
          "Yes. The photos total 10.8 GB, which fits on the 16 GB card with 5.2 GB to spare.",
      },
      {
        question:
          "A geologist records data on a laptop carried across rough ground in cold weather. Recommend a type of secondary storage and justify it.",
        steps: [
          "Pick out the constraints in the question: the device is carried, over rough ground, in harsh conditions.",
          "Magnetic drives have spinning platters and a moving read/write head, so a knock while running can destroy the drive and the data.",
          "Optical discs are portable but scratch easily, hold little, and would mean carrying a stack of them.",
          "Solid state has no moving parts, so it survives being jolted; it also uses less power, which matters away from mains electricity.",
          "Acknowledge the cost: SSDs cost more per gigabyte, but reliability matters more than price when the data cannot be re-collected.",
        ],
        answer:
          "Solid state (an SSD). It has no moving parts so it survives being knocked about, and uses less power — worth the higher cost per gigabyte when the fieldwork data could not easily be gathered again.",
      },
      {
        question:
          "A computer with 4 GB of RAM slows to a crawl when several large programs are open. Explain what is happening and how to fix it.",
        steps: [
          "RAM has filled up, so there is nowhere to put the data the next program needs.",
          "The operating system moves data that is not currently being used out of RAM and onto secondary storage — virtual memory.",
          "Secondary storage is far slower to access than RAM, so every one of those transfers costs time.",
          "With several large programs, data is swapped in and out constantly. This is disk thrashing.",
          "The real fix is more RAM, so less has to be swapped. A faster SSD reduces the pain but does not remove the cause.",
        ],
        answer:
          "RAM is full, so the machine is using virtual memory on the much slower secondary storage, and constant swapping (disk thrashing) is consuming the time. Installing more RAM is the proper fix; a faster SSD only softens the symptom.",
      },
    ],

    practice: [
      { question: "How many bits are in a byte?", accept: ["8", "eight", "8 bits"],
        answer: "8 bits. Half a byte, 4 bits, is a nibble." },
      { question: "What does RAM stand for?", accept: ["random access memory"],
        answer: "Random Access Memory — volatile primary storage holding what is currently in use." },
      { question: "What does ROM stand for?", accept: ["read only memory", "read-only memory"],
        answer: "Read Only Memory — non-volatile primary storage holding the boot program." },
      { question: "Which of RAM and ROM is volatile?", accept: ["ram", "the ram"],
        answer: "RAM. Volatile means the contents are lost when the power is switched off." },
      { question: "Which type of memory holds the program that starts the computer?", accept: ["rom", "read only memory", "read-only memory"],
        answer: "ROM. It has to be non-volatile, because it is needed before anything can be loaded from storage." },
      { question: "What name is given to using secondary storage as though it were extra RAM?",
        accept: ["virtual memory"],
        answer: "Virtual memory. Far slower than real RAM, because secondary storage is slower to access." },
      { question: "What is the term for constant swapping between RAM and virtual memory that makes a computer very slow?",
        accept: ["disk thrashing", "thrashing"],
        answer: "Disk thrashing. The cure is more RAM, so less needs swapping." },
      { question: "Name the three main types of secondary storage.",
        accept: ["magnetic optical solid state", "magnetic, optical, solid state", "magnetic solid state optical", "optical magnetic solid state"],
        answer: "Magnetic, optical and solid state." },
      { question: "Which type of secondary storage has no moving parts?",
        accept: ["solid state", "solid-state", "ssd", "flash"],
        answer: "Solid state, such as an SSD, USB stick or memory card." },
      { question: "Which type of storage is a Blu-ray disc?", accept: ["optical"],
        answer: "Optical — read by laser from pits and lands burned into the disc." },
      { question: "Which type of storage is a hard disk drive with spinning platters?",
        accept: ["magnetic"],
        answer: "Magnetic. Cheap per gigabyte and high capacity, but slow and easily damaged." },
      { question: "How many megabytes are in 3 gigabytes? Use 1 GB = 1000 MB.",
        accept: ["3000", "3000 mb", "3,000"],
        answer: "3000 MB. Each step up multiplies by 1000 under this convention." },
      { question: "A file is 250 MB. How many such files fit on a 4 GB drive? Use 1 GB = 1000 MB.",
        accept: ["16", "sixteen", "16 files"],
        answer: "4 GB = 4000 MB, and 4000 ÷ 250 = 16 files." },
      { question: "800 songs are each 5 MB. What is the total size in MB?",
        accept: ["4000", "4000 mb", "4,000"],
        answer: "800 × 5 = 4000 MB, which is 4 GB using 1 GB = 1000 MB." },
      { question: "Can the CPU access secondary storage directly? Answer yes or no.",
        accept: ["no"],
        answer: "No. Data must be copied into RAM first, which is why RAM exists at all." },
      { question: "How many bits are in a nibble?", accept: ["4", "four", "4 bits"],
        answer: "4 bits — half a byte. Two nibbles make a byte, and one nibble is exactly one hexadecimal digit." },
      { question: "Explain why a computer with more RAM usually feels faster, even with the same CPU.",
        answer: "More RAM means more programs and data can be held in fast, directly accessible memory at once. With less RAM, the operating system has to move data out to virtual memory on secondary storage, which is far slower to access. Every swap costs time the CPU spends waiting rather than working, so reducing the number of swaps raises real performance without changing the processor at all. (Mark this one yourself.)" },
      { question: "A school must store 5 TB of lesson recordings that are rarely watched but must be kept for years. Recommend a storage type and justify it.",
        answer: "Magnetic hard disk drives. The data is large, rarely accessed and must be cheap to keep, and magnetic storage has by far the lowest cost per gigabyte at that capacity. Speed barely matters because the recordings are seldom watched, so the slow access time of magnetic storage costs nothing here — and the drives sit in a server rather than being carried, so the fragility of the moving parts is not a real risk. SSDs would work but cost several times as much for no benefit that this situation needs. (Mark this one yourself.)" },
      {
        question: "What is the key difference between RAM and ROM?",
        choices: [
          "RAM is volatile and loses data when powered off",
          "ROM loses data when powered off",
          "RAM is permanent storage",
          "ROM is larger than RAM",
        ],
        accept: [
          "RAM is volatile and loses data when powered off",
        ],
        answer: "ROM is non-volatile and typically holds the boot instructions. RAM holds programs and data currently in use.",
      },
      {
        question: "What is virtual memory?",
        choices: [
          "Space on secondary storage used when RAM is full",
          "Extra RAM added by the user",
          "Memory inside the CPU",
          "A type of cloud storage",
        ],
        accept: [
          "Space on secondary storage used when RAM is full",
        ],
        answer: "It prevents crashes when RAM runs out, but is far slower because reading from disk takes much longer than reading from RAM.",
      },
      {
        question: "Which storage type has no moving parts?",
        choices: [
          "Solid state (SSD)",
          "Magnetic hard disk",
          "Optical disc",
          "Magnetic tape",
        ],
        accept: [
          "Solid state (SSD)",
        ],
        answer: "SSDs are faster, quieter and more shock-resistant, but cost more per gigabyte and have a limited number of write cycles.",
      },
      {
        question: "Which storage is best for very large, cheap, long-term backup?",
        choices: [
          "Magnetic tape",
          "Solid state drive",
          "Cache",
          "RAM",
        ],
        accept: [
          "Magnetic tape",
        ],
        answer: "Tape is extremely cheap per terabyte and lasts well, but access is sequential so retrieving one file is slow.",
      },
      {
        question: "Why is lossy compression unsuitable for a text document?",
        choices: [
          "Discarded data cannot be recovered, changing the meaning",
          "It makes files larger",
          "Text cannot be compressed at all",
          "It is too slow",
        ],
        accept: [
          "Discarded data cannot be recovered, changing the meaning",
        ],
        answer: "Lossy suits images and audio where small losses go unnoticed. Text and program files need lossless compression.",
      },
    ],

    misconceptions: [
      { wrong: "\"A hard drive is the computer's memory.\"",
        right: "Memory means RAM and ROM — primary storage the CPU accesses directly. A hard drive is secondary storage. Examiners treat the words as different things, so using them loosely costs marks." },
      { wrong: "\"Virtual memory is extra RAM you can add for free.\"",
        right: "It is space on secondary storage being used as a substitute for RAM, and secondary storage is far slower. It stops programs crashing when RAM runs out, at a large cost in speed." },
      { wrong: "\"ROM stores your files permanently.\"",
        right: "ROM holds the small boot program that starts the machine. Your files live on secondary storage. ROM is typically measured in megabytes, not terabytes." },
      { wrong: "\"SSDs are simply better than hard drives.\"",
        right: "Faster, quieter and more durable, but more expensive per gigabyte and with a limited number of write cycles. For a cheap multi-terabyte archive, magnetic still wins." },
      { wrong: "\"1 kB is always 1024 bytes.\"",
        right: "Both conventions are in use: 1000 (decimal, used by most GCSE specifications and by manufacturers) and 1024 (binary, used by many operating systems). Check your board and say which you are using." },
      { wrong: "\"Deleting files frees up RAM.\"",
        right: "Deleting files frees secondary storage. RAM is freed by closing programs. They are separate resources, and confusing them is a common way to lose an easy mark." },
    ],
  },

  "computer-science/system-software": {
    summary:
      "Between the hardware and the programs you actually use sits a layer of software whose whole job is to make the machine usable: the operating system, and the utility programs that keep it healthy. You never sit down to 'use' an operating system, which is exactly why it is easy to forget it is there — and why exam questions on it are so often answered vaguely.",
    keyFacts: [
      {
        heading: "What an operating system does",
        points: [
          "The operating system (OS) manages the hardware and provides an interface between the user and the computer.",
          "Memory management: deciding what is loaded into RAM, where, and what gets moved out when RAM fills up.",
          "Processor management: scheduling which process gets CPU time, and for how long, so several programs appear to run at once.",
          "Peripheral and device management: communicating with printers, keyboards, screens and storage using device drivers.",
          "User management: separate accounts, passwords and file permissions, so users cannot read or damage each other's work.",
          "File management: organising files into folders, and handling naming, moving, copying and deleting.",
        ],
      },
      {
        heading: "The user interface",
        points: [
          "A GUI (Graphical User Interface) uses windows, icons, menus and a pointer. Easy to learn, but uses more processing power and memory.",
          "A CLI (Command Line Interface) accepts typed commands. Harder to learn, but faster for an expert, uses fewer resources, and can be automated with scripts.",
          "Menu-driven interfaces offer a series of options and are common on cash machines and ticket machines, where mistakes must be impossible.",
          "Voice and gesture interfaces are used where hands or eyes are busy, such as in a car.",
          "The right interface depends on the user and the situation, not on which is 'better'.",
        ],
      },
      {
        heading: "Drivers and multitasking",
        points: [
          "A device driver is software that lets the operating system communicate with a particular piece of hardware.",
          "Each device needs its own driver because different hardware understands different signals.",
          "Multitasking means several programs appear to run at once. On a single core, the OS switches rapidly between them.",
          "The switching is so fast that a person cannot notice the gaps, which is why it feels simultaneous.",
          "With multiple cores, genuinely simultaneous execution becomes possible as well.",
        ],
      },
      {
        heading: "Utility software",
        points: [
          "Utility software performs housekeeping tasks that maintain the computer, rather than doing work for the user directly.",
          "Encryption software scrambles data so that it is meaningless without the key — essential if a device is lost or stolen.",
          "Defragmentation gathers the scattered pieces of files back together on a magnetic hard disk, reducing head movement and speeding up access.",
          "Compression reduces file size so files take less storage and transfer faster.",
          "Backup software makes copies of files so they can be recovered after loss, damage or a ransomware attack.",
          "Anti-malware scans for, quarantines and removes malicious software.",
        ],
      },
      {
        heading: "Defragmentation, carefully",
        points: [
          "Files become fragmented when they are saved into gaps left by deleted files, so one file ends up split across the disk.",
          "A magnetic drive must physically move its read/write head to each fragment, and that movement takes time.",
          "Defragmentation rearranges the fragments so each file is contiguous, and gathers the free space together.",
          "It does NOT free up any space — the same data occupies the same number of bytes afterwards.",
          "SSDs should not be defragmented: they have no moving head so there is nothing to gain, and the extra writes use up limited write cycles.",
        ],
      },
    ],
    flashcards: [
      { term: "System software", definition: "Software that runs and maintains the computer itself: the operating system and utility programs." },
      { term: "Operating system", definition: "System software that manages hardware and provides an interface between the user and the computer." },
      { term: "Memory management", definition: "The operating system's job of deciding what is held in RAM, where, and what is moved out when RAM is full." },
      { term: "Processor management", definition: "The operating system's job of scheduling which process gets CPU time and for how long." },
      { term: "Device driver", definition: "Software allowing the operating system to communicate with a particular piece of hardware." },
      { term: "GUI", definition: "Graphical User Interface — windows, icons, menus and a pointer. Easy to learn, heavier on resources." },
      { term: "CLI", definition: "Command Line Interface — typed commands. Harder to learn, but fast for experts and easy to automate." },
      { term: "Multitasking", definition: "Several programs appearing to run at once, achieved by the OS switching rapidly between them." },
      { term: "User management", definition: "Handling separate accounts, passwords and file permissions so users cannot access each other's files." },
      { term: "Utility software", definition: "Programs that maintain the computer, such as encryption, compression, backup and anti-malware." },
      { term: "Defragmentation", definition: "Rearranging the fragments of files on a magnetic disk so each file is stored contiguously." },
      { term: "Fragmentation", definition: "The splitting of a file across separate parts of a disk, caused by saving into gaps left by deleted files." },
      { term: "Encryption software", definition: "Utility software that scrambles data so it is unreadable without the correct key." },
      { term: "Backup", definition: "A copy of data kept so it can be restored after loss, damage or attack." },
      { term: "Anti-malware", definition: "Utility software that scans for, quarantines and removes malicious software." },
    ],
    examTips: [
      {
        tip: "Learn the OS jobs as a list you can recite",
        detail:
          "Memory, processor, peripherals, users, files. 'Name three functions of an operating system' is a three-mark gift if the list is memorised, and a fumble if it is not.",
      },
      {
        tip: "Say defragmentation does not free space",
        detail:
          "The most common wrong answer on this topic. It reorganises data so it can be read faster; the number of bytes used is unchanged.",
      },
      {
        tip: "Never recommend defragmenting an SSD",
        detail:
          "No moving head, so there is no speed to gain, and the extra writes consume limited write cycles. Saying so shows you understand why defragmentation works at all.",
      },
      {
        tip: "Compare interfaces against the user, not in the abstract",
        detail:
          "A CLI is better for a server administrator writing scripts; a GUI is better for a beginner. Name the user in your answer and the mark follows.",
      },
      {
        tip: "Explain multitasking as switching, not simultaneity",
        detail:
          "On a single core, only one process runs at any instant. Say the OS switches between them so quickly that it appears simultaneous.",
      },
      {
        tip: "Give a purpose for every utility you name",
        detail:
          "'Encryption' is not an answer. 'Encryption, so that a stolen laptop's files cannot be read' is. Utilities are always examined by what problem they solve.",
      },
      {
        tip: "Keep system software and application software apart",
        detail:
          "Application software does a job for the user (a browser, a game). System software runs the machine. A question asking you to classify examples is testing exactly this line.",
      },
    ],

    workedExamples: [
      {
        question: "Describe three functions of an operating system.",
        steps: [
          "Choose three from the list and name each precisely.",
          "Memory management: the OS decides which programs and data are held in RAM and moves data out when RAM is full.",
          "Processor management: the OS schedules processes, giving each CPU time in turn so several appear to run at once.",
          "User management: the OS handles accounts, passwords and file permissions so users cannot see or damage each other's files.",
          "For each one, add what it achieves — the second half of each sentence is where the mark is.",
        ],
        answer:
          "Memory management (deciding what is in RAM and what is moved out), processor management (scheduling which process gets CPU time so several programs appear to run at once) and user management (accounts and permissions so users cannot access each other's files).",
      },
      {
        question:
          "A server administrator prefers a command line interface; a primary school pupil uses a graphical one. Explain why each choice makes sense.",
        steps: [
          "A CLI requires the user to know commands, which is a real barrier to a beginner.",
          "But for an expert it is faster: one typed line can do what would take many clicks.",
          "CLI commands can be saved as scripts and run automatically — vital when managing many servers.",
          "A CLI uses far fewer resources, which matters on a server where every megabyte is doing paid work.",
          "A GUI is discoverable: options are visible on screen, so a pupil can find things without knowing their names in advance.",
        ],
        answer:
          "The administrator gains speed, automation through scripts, and lower resource use — worth the learning curve for daily expert use. The pupil gains discoverability, since a GUI shows the options rather than requiring them to be known in advance.",
      },
      {
        question:
          "Explain what defragmentation does and why it speeds up a magnetic hard disk.",
        steps: [
          "Deleted files leave gaps, and new files get written into whatever gaps are available.",
          "A single file can therefore end up split into fragments scattered across the disk.",
          "A magnetic drive reads with a physical head that must move to each fragment in turn.",
          "That movement is mechanical and slow compared with everything else the computer does.",
          "Defragmentation rearranges the data so each file is contiguous, so the head moves less and reads faster. No space is freed.",
        ],
        answer:
          "It gathers the scattered fragments of each file back together so files are stored contiguously. The read/write head then has to move much less to read a file, which is faster. It does not free any storage space.",
      },
      {
        question:
          "A hospital laptop holding patient records is stolen. Name two utility programs that would have limited the damage, and explain each.",
        steps: [
          "Identify the two harms: the data being read by the thief, and the data being lost to the hospital.",
          "Encryption addresses the first: the files are scrambled and meaningless without the key.",
          "Without the key, the thief has an expensive laptop but no readable records.",
          "Backup addresses the second: a copy held elsewhere means the hospital still has the records.",
          "Together they cover confidentiality and availability — two different problems needing two different tools.",
        ],
        answer:
          "Encryption software, so the records are unreadable without the key and the theft does not become a data breach. Backup software, so the hospital still holds the records even though the laptop is gone.",
      },
    ],

    practice: [
      { question: "What are the two categories of system software?",
        accept: ["operating system and utility software", "operating systems and utilities", "operating system and utilities", "os and utility software"],
        answer: "The operating system, and utility software." },
      { question: "Which part of the operating system decides what is held in RAM?",
        accept: ["memory management", "memory manager"],
        answer: "Memory management — it also moves data out to virtual memory when RAM fills up." },
      { question: "What does GUI stand for?", accept: ["graphical user interface"],
        answer: "Graphical User Interface — windows, icons, menus and a pointer." },
      { question: "What does CLI stand for?", accept: ["command line interface", "command-line interface"],
        answer: "Command Line Interface — the user types commands." },
      { question: "What is the name for software that lets the OS communicate with a piece of hardware?",
        accept: ["device driver", "driver", "a driver", "a device driver"],
        answer: "A device driver. Each type of hardware needs its own." },
      { question: "On a single-core CPU, does multitasking mean programs truly run at the same instant? Answer yes or no.",
        accept: ["no"],
        answer: "No. The OS switches between them so rapidly that it only appears simultaneous." },
      { question: "Which utility scrambles data so it cannot be read without a key?",
        accept: ["encryption", "encryption software"],
        answer: "Encryption software — the defence against a stolen device becoming a data breach." },
      { question: "Which utility gathers the scattered parts of files back together on a hard disk?",
        accept: ["defragmentation", "defragmentation software", "defrag", "defragmenter"],
        answer: "Defragmentation. It speeds up reading; it does not free any space." },
      { question: "Does defragmentation free up storage space? Answer yes or no.",
        accept: ["no"],
        answer: "No. The same data occupies the same number of bytes — it is just rearranged so the head moves less." },
      { question: "Should you defragment an SSD? Answer yes or no.",
        accept: ["no"],
        answer: "No. There is no read/write head to save movement on, and the extra writes waste limited write cycles." },
      { question: "Which utility makes copies of files so they can be recovered after loss?",
        accept: ["backup", "backup software", "backup utility"],
        answer: "Backup software. It protects availability, where encryption protects confidentiality." },
      { question: "Which utility reduces the size of files so they use less storage?",
        accept: ["compression", "compression software"],
        answer: "Compression software — smaller files also transfer faster." },
      { question: "Which OS function handles separate accounts and file permissions?",
        accept: ["user management", "user manager"],
        answer: "User management, which stops users reading or damaging each other's files." },
      { question: "Is a web browser system software or application software?",
        accept: ["application software", "application"],
        answer: "Application software — it does a job for the user rather than running the machine." },
      { question: "Which interface type is typically used on a cash machine?",
        accept: ["menu driven", "menu-driven", "menu driven interface", "menu"],
        answer: "A menu-driven interface, which limits the user to safe, valid options." },
      { question: "Which OS function schedules which process gets CPU time?",
        accept: ["processor management", "process management", "scheduling"],
        answer: "Processor management. It is what makes several programs appear to run at once." },
      { question: "Explain why files become fragmented in the first place.",
        answer: "When a file is deleted it leaves a gap on the disk, and the operating system will use whatever gaps are available when saving new files. If a new file is larger than any single gap, it gets split across several of them. Over time, as files are repeatedly created, changed and deleted, the gaps grow more numerous and smaller, and files end up in more and more pieces scattered across the disk. Nothing has gone wrong — this is the normal consequence of reusing space efficiently. (Mark this one yourself.)" },
      { question: "A company is choosing between a GUI and a CLI for staff who manage 200 servers. Recommend one and justify it.",
        answer: "A command line interface. The decisive reason is automation: CLI commands can be written into scripts and run across all 200 servers at once, whereas a GUI would mean repeating the same clicks 200 times, which is slow and invites human error. A CLI also uses far fewer system resources, which matters when every megabyte on a server should be doing paid work, and it works well over a slow remote connection where a graphical desktop would be painful. The learning curve is a genuine cost, but staff who manage servers every day will pay it back within days. (Mark this one yourself.)" },
      {
        question: "Which of these is a function of an operating system?",
        choices: [
          "Memory management",
          "Editing photographs",
          "Compiling source code",
          "Browsing the web",
        ],
        accept: [
          "Memory management",
        ],
        answer: "The OS handles memory, processes, files, peripherals and users. The others are application software.",
      },
      {
        question: "What does a device driver do?",
        choices: [
          "Lets the operating system communicate with a piece of hardware",
          "Speeds up the processor",
          "Removes viruses",
          "Compresses files",
        ],
        accept: [
          "Lets the operating system communicate with a piece of hardware",
        ],
        answer: "Each device needs a driver because hardware from different manufacturers works differently.",
      },
      {
        question: "Defragmentation is useful on which type of storage?",
        choices: [
          "A magnetic hard disk",
          "A solid state drive",
          "RAM",
          "Cache",
        ],
        accept: [
          "A magnetic hard disk",
        ],
        answer: "It gathers scattered file fragments so the read head moves less. On an SSD it gives no benefit and wastes write cycles.",
      },
      {
        question: "What is a utility program?",
        choices: [
          "Software that maintains or optimises the computer",
          "The main operating system kernel",
          "A programming language",
          "A type of hardware",
        ],
        accept: [
          "Software that maintains or optimises the computer",
        ],
        answer: "Backup tools, antivirus, compression and disk defragmenters are all utilities.",
      },
      {
        question: "What is the purpose of a user interface?",
        choices: [
          "To allow a person to interact with the computer",
          "To manage memory allocation",
          "To connect to the internet",
          "To store files permanently",
        ],
        accept: [
          "To allow a person to interact with the computer",
        ],
        answer: "It can be graphical, command line, menu-driven or voice. A command line is harder to learn but faster and more powerful for experts.",
      },
    ],

    misconceptions: [
      { wrong: "\"Defragmentation frees up disk space.\"",
        right: "It rearranges data so files are contiguous and read faster. The number of bytes stored is exactly the same afterwards." },
      { wrong: "\"The operating system is the thing you can see on screen.\"",
        right: "That is the user interface, which is one part of it. Memory management, scheduling, drivers, permissions and file handling are all invisible and all essential." },
      { wrong: "\"Multitasking means several programs run at exactly the same time.\"",
        right: "On a single core the OS switches between them very rapidly. Only a multi-core CPU can run processes genuinely simultaneously." },
      { wrong: "\"A CLI is outdated and a GUI is the modern replacement.\"",
        right: "Command lines are used every day for servers, automation and development, precisely because they are faster for experts, scriptable and cheap on resources." },
      { wrong: "\"Utility software is optional extra software you download.\"",
        right: "Utilities are system software that maintains the computer, and most come built into the operating system already." },
      { wrong: "\"Anti-malware and a firewall are the same thing.\"",
        right: "Anti-malware scans files on the machine for malicious software. A firewall inspects network traffic entering or leaving. They defend different points." },
    ],
  },

  "computer-science/network-protocols-and-layers": {
    summary:
      "Two computers made by different companies, running different operating systems, on opposite sides of the world, exchange data without difficulty. That only works because everyone agreed a set of rules in advance. This topic is about those rules — the protocols — and about layering, which is the idea that turns an impossibly large problem into four manageable ones.",
    keyFacts: [
      {
        heading: "What a protocol is",
        points: [
          "A protocol is a set of rules governing how devices communicate: the format of the data, the order of messages, and what to do about errors.",
          "Without agreed protocols, two devices could both be working perfectly and still understand nothing of what the other sent.",
          "Protocols are why equipment from different manufacturers works together at all.",
          "Most communication uses several protocols at once, each handling a different part of the job.",
          "TCP/IP is not one protocol but a whole family, named after its two most important members.",
        ],
      },
      {
        heading: "The protocols you must know",
        points: [
          "TCP (Transmission Control Protocol): splits data into packets, checks they all arrive, requests any that are missing, and reassembles them in the right order.",
          "IP (Internet Protocol): addresses and routes packets, deciding which path each one takes across the network.",
          "HTTP (HyperText Transfer Protocol): requesting and delivering web pages.",
          "HTTPS: HTTP with encryption added, so an eavesdropper sees scrambled data. Used for anything private — logins, banking, messages.",
          "FTP (File Transfer Protocol): transferring files between computers.",
          "SMTP (Simple Mail Transfer Protocol): SENDING email. IMAP and POP3: RETRIEVING email from a server.",
        ],
      },
      {
        heading: "IMAP against POP3",
        points: [
          "POP3 downloads mail to one device and typically deletes it from the server.",
          "IMAP leaves mail on the server and synchronises it, so every device sees the same mailbox.",
          "IMAP is what makes reading a message on your phone mark it as read on your laptop.",
          "POP3 suits a single device with limited connectivity; IMAP suits the phone-plus-laptop-plus-tablet life almost everyone actually has.",
          "Both retrieve mail. Neither sends it — that is SMTP's job.",
        ],
      },
      {
        heading: "Layers",
        points: [
          "Layering divides network communication into levels, each with one clearly defined job, each using the layer below.",
          "The four-layer TCP/IP model: Application (HTTP, FTP, SMTP), Transport (TCP, UDP), Internet or Network (IP, routers), Link or Data Link (drivers, hardware, MAC addresses).",
          "Each layer is self-contained, so one can be changed or improved without rewriting the others.",
          "Layering makes the problem manageable: designers can work on one layer while treating the rest as a black box.",
          "It also means protocols can be swapped — moving a site from HTTP to HTTPS changes nothing about how packets are routed.",
        ],
      },
      {
        heading: "Packet switching",
        points: [
          "Data is broken into packets, each carrying a header with the source and destination IP addresses, a packet number and a checksum.",
          "Each packet can take a different route, chosen by routers according to how busy the network is.",
          "Packets can therefore arrive out of order, and are reassembled at the destination using their packet numbers.",
          "If a packet is missing or corrupted, TCP requests it again.",
          "Packet switching uses the network efficiently and copes with a failed link — traffic simply routes around it.",
        ],
      },
    ],
    flashcards: [
      { term: "Protocol", definition: "A set of rules governing how devices communicate, covering data format, message order and error handling." },
      { term: "TCP", definition: "Transmission Control Protocol — splits data into packets, checks they arrive, and reassembles them in order." },
      { term: "IP", definition: "Internet Protocol — addresses packets and routes them across networks." },
      { term: "HTTP", definition: "HyperText Transfer Protocol — used for requesting and delivering web pages." },
      { term: "HTTPS", definition: "HTTP with encryption, so intercepted data is unreadable. Used wherever data is private." },
      { term: "FTP", definition: "File Transfer Protocol — used for transferring files between computers." },
      { term: "SMTP", definition: "Simple Mail Transfer Protocol — used for SENDING email." },
      { term: "IMAP", definition: "A protocol for retrieving email that leaves messages on the server and syncs them across devices." },
      { term: "POP3", definition: "A protocol for retrieving email that downloads messages to one device and usually deletes them from the server." },
      { term: "Layer", definition: "One level of a network model with a single defined job, using the layer below and serving the layer above." },
      { term: "Packet", definition: "A small unit of data with a header holding source and destination addresses, a packet number and a checksum." },
      { term: "Packet switching", definition: "Sending data as packets that may travel by different routes and are reassembled at the destination." },
      { term: "Router", definition: "A device that forwards packets between networks, choosing a route towards the destination IP address." },
      { term: "Checksum", definition: "A value carried in a packet header used to detect whether the data was corrupted in transit." },
      { term: "TCP/IP model", definition: "A four-layer model: Application, Transport, Internet and Link." },
    ],
    examTips: [
      {
        tip: "Define a protocol as rules, every time",
        detail:
          "'A set of rules for communication between devices' is the phrase examiners are looking for. Do not describe what one particular protocol does and hope it counts as a definition.",
      },
      {
        tip: "Split the email protocols into send and receive",
        detail:
          "SMTP sends. IMAP and POP3 retrieve. Learning them as two groups makes the question 'which protocol sends email' automatic.",
      },
      {
        tip: "Say what HTTPS adds, not just that it is secure",
        detail:
          "It encrypts the data in transit, so an intercepted message is meaningless without the key. 'Secure' on its own is a restatement of the S.",
      },
      {
        tip: "Learn one benefit of layering you can explain properly",
        detail:
          "'Each layer can be developed or replaced independently, because it only has to keep the same interface with the layers around it.' That sentence answers most layering questions.",
      },
      {
        tip: "Mention packet numbers when reassembly comes up",
        detail:
          "Packets can arrive out of order because they take different routes. The packet number in the header is how the destination puts them back together.",
      },
      {
        tip: "Keep TCP and IP jobs distinct",
        detail:
          "TCP splits, checks and reassembles. IP addresses and routes. A question asking what each contributes wants exactly that division.",
      },
      {
        tip: "Give routing flexibility as the advantage of packet switching",
        detail:
          "If one route is congested or broken, packets travel another way. That resilience is the whole reason the internet is built this way.",
      },
    ],

    workedExamples: [
      {
        question: "Explain what happens to a 2 MB file when it is sent across the internet using TCP/IP.",
        steps: [
          "TCP splits the file into numbered packets, small enough to travel efficiently.",
          "Each packet gets a header holding source and destination IP addresses, its packet number, and a checksum.",
          "IP routes each packet; routers choose a path towards the destination, so different packets may take different routes.",
          "Packets arrive at the destination in whatever order they happen to get there.",
          "TCP checks the checksums, requests any packet that is missing or corrupted, and reassembles them into the original file using the packet numbers.",
        ],
        answer:
          "TCP splits it into numbered packets and IP routes them, possibly by different paths. At the far end TCP checks for missing or corrupt packets, requests any again, and reassembles the file in packet-number order.",
      },
      {
        question:
          "Name the protocol used in each case: sending an email, reading that email on both a phone and a laptop, loading a bank's login page, uploading files to a web server.",
        steps: [
          "Sending an email — the protocol for sending is SMTP.",
          "Reading it on two devices — the mailbox must stay on the server and synchronise, which is IMAP, not POP3.",
          "A bank login page — private data, so it must be encrypted in transit: HTTPS.",
          "Uploading files to a server — file transfer, so FTP.",
          "Check each against the key word in the question: send, sync across devices, private, files.",
        ],
        answer:
          "SMTP for sending, IMAP for reading on multiple devices, HTTPS for the bank login page, and FTP for uploading files.",
      },
      {
        question:
          "Explain two benefits of dividing network communication into layers.",
        steps: [
          "Each layer has one clearly defined job and communicates only with the layers directly above and below.",
          "Benefit one — independence: a layer can be changed or improved without rewriting the others, as long as it keeps the same interface.",
          "For example, moving a website from HTTP to HTTPS changes the application layer only; routing is untouched.",
          "Benefit two — manageability: the whole problem is too large to design at once, so splitting it lets different people work on different layers.",
          "A third benefit worth knowing: it makes faults easier to find, because a problem can be traced to one layer.",
        ],
        answer:
          "Layers can be changed independently, since each only has to preserve its interface with its neighbours — so HTTP can become HTTPS without touching routing. And the problem becomes manageable: specialists can work on one layer while treating the others as black boxes.",
      },
      {
        question:
          "A user complains that reading an email on their phone leaves it still unread on their laptop. Which protocol is in use, which should be, and why?",
        steps: [
          "The mailbox is not synchronising between devices, so each device holds its own separate copy.",
          "That is the behaviour of POP3, which downloads mail to one device and typically removes it from the server.",
          "IMAP instead keeps the messages on the server and synchronises state across every device.",
          "With IMAP, marking a message read on the phone updates the server, and the laptop sees the change.",
          "So the account should be reconfigured to use IMAP.",
        ],
        answer:
          "POP3 is in use; it should be IMAP. POP3 downloads mail to a single device, whereas IMAP keeps messages on the server and synchronises read status across all devices.",
      },
    ],

    practice: [
      { question: "What is a protocol?",
        accept: ["a set of rules", "set of rules", "rules for communication", "a set of rules for communication"],
        answer: "A set of rules governing how devices communicate — format, order of messages and error handling." },
      { question: "Which protocol splits data into packets and reassembles them in order?",
        accept: ["tcp", "transmission control protocol"],
        answer: "TCP. It also requests any packet that is missing or corrupted." },
      { question: "Which protocol addresses and routes packets across networks?",
        accept: ["ip", "internet protocol"],
        answer: "IP — the Internet Protocol." },
      { question: "Which protocol is used to SEND email?",
        accept: ["smtp", "simple mail transfer protocol"],
        answer: "SMTP. IMAP and POP3 retrieve mail; only SMTP sends it." },
      { question: "Which email protocol keeps messages on the server and syncs across devices?",
        accept: ["imap"],
        answer: "IMAP. POP3 downloads to one device and usually deletes the server copy." },
      { question: "Which protocol is used for transferring files between computers?",
        accept: ["ftp", "file transfer protocol"],
        answer: "FTP — the File Transfer Protocol, used for uploading and downloading files between computers." },
      { question: "Which protocol should a bank login page use?",
        accept: ["https"],
        answer: "HTTPS — HTTP plus encryption, so intercepted data is unreadable." },
      { question: "What does HTTP stand for?",
        accept: ["hypertext transfer protocol", "hyper text transfer protocol"],
        answer: "HyperText Transfer Protocol, used to request and deliver web pages." },
      { question: "How many layers are in the TCP/IP model?",
        accept: ["4", "four"],
        answer: "Four: Application, Transport, Internet (Network) and Link (Data Link)." },
      { question: "Which layer of the TCP/IP model does HTTP belong to?",
        accept: ["application", "application layer", "the application layer"],
        answer: "The application layer, along with FTP and SMTP." },
      { question: "Which layer does TCP belong to?",
        accept: ["transport", "transport layer", "the transport layer"],
        answer: "The transport layer, which handles splitting data into packets and reassembling it." },
      { question: "What is carried in a packet header that allows packets to be reassembled in order?",
        accept: ["packet number", "the packet number", "sequence number", "packet numbers"],
        answer: "The packet number. Packets may take different routes and arrive out of order." },
      { question: "What is the value in a packet header used to check for corruption called?",
        accept: ["checksum", "a checksum", "the checksum"],
        answer: "A checksum. If it does not match, TCP requests the packet again." },
      { question: "Which device forwards packets between networks, choosing a route?",
        accept: ["router", "a router", "the router"],
        answer: "A router, which reads the destination IP address in the header." },
      { question: "Can two packets from the same file take different routes? Answer yes or no.",
        accept: ["yes"],
        answer: "Yes. That is what packet switching means, and why reassembly by packet number is needed." },
      { question: "Name the two protocols used to RETRIEVE email.",
        accept: ["imap and pop3", "pop3 and imap", "imap pop3", "pop3 imap"],
        answer: "IMAP and POP3. Both retrieve mail; neither sends it, which is SMTP's job alone." },
      { question: "Explain why layering makes networks easier to develop and maintain.",
        answer: "Each layer has one job and communicates only with the layers immediately above and below it through a fixed interface. That means a layer can be redesigned, optimised or replaced entirely without any of the others being rewritten, as long as the interface stays the same — which is how the web moved from HTTP to HTTPS without changing how packets are routed. It also splits an enormous problem into four smaller ones, so specialists can work on one layer while treating the rest as black boxes, and a fault can be traced to a single layer instead of the whole system. (Mark this one yourself.)" },
      { question: "Explain why packet switching makes a network more resilient than sending each file as one continuous stream.",
        answer: "Because no single route has to work for the whole transfer. Each packet is routed independently, so if a link becomes congested or fails entirely, routers simply send subsequent packets another way and the transfer continues. If any packet is lost or corrupted, only that small packet needs resending rather than the whole file. It also uses the network more efficiently, since many conversations can share the same links at once instead of one transfer occupying a route from start to finish. (Mark this one yourself.)" },
      {
        question: "Which term describes an agreed set of rules for how devices communicate?",
        choices: [
          "Protocol",
          "Topology",
          "Bandwidth",
          "Encryption",
        ],
        accept: [
          "Protocol",
        ],
        answer: "A protocol is the agreed set of rules. Without shared rules two devices could send perfectly valid data that the other cannot interpret.",
      },
      {
        question: "Which protocol is used to send email?",
        choices: [
          "SMTP",
          "HTTP",
          "FTP",
          "IMAP",
        ],
        accept: [
          "SMTP",
        ],
        answer: "SMTP sends mail. POP and IMAP retrieve it, with IMAP leaving messages on the server so they sync across devices.",
      },
      {
        question: "What does HTTPS add compared with HTTP?",
        choices: [
          "Encryption of the data being sent",
          "Faster page loading",
          "Automatic file compression",
          "A different port for images",
        ],
        accept: [
          "Encryption of the data being sent",
        ],
        answer: "Encryption means intercepted data is unreadable. It does not make a website trustworthy — only the connection secure.",
      },
      {
        question: "Why are network protocols organised into LAYERS?",
        choices: [
          "Each layer can be developed and changed independently",
          "It makes the network faster",
          "It reduces the number of protocols needed",
          "Layers encrypt the data",
        ],
        accept: [
          "Each layer can be developed and changed independently",
        ],
        answer: "Layering breaks a complex problem into manageable parts, so Wi-Fi can change without rewriting how web pages work.",
      },
      {
        question: "Which protocol converts a domain name into an IP address?",
        choices: [
          "DNS",
          "TCP",
          "FTP",
          "SMTP",
        ],
        accept: [
          "DNS",
        ],
        answer: "DNS acts as the internet's address book. Without it you would have to remember numeric IP addresses for every site.",
      },
    ],

    misconceptions: [
      { wrong: "\"TCP/IP is a single protocol.\"",
        right: "It is a family of protocols named after its two best-known members. TCP handles splitting and reassembly, IP handles addressing and routing — different jobs at different layers." },
      { wrong: "\"HTTPS is a different protocol from HTTP.\"",
        right: "It is HTTP with encryption added underneath. The web requests are the same; what changes is that an eavesdropper sees scrambled data." },
      { wrong: "\"POP3 and IMAP send email.\"",
        right: "Both retrieve it. Sending is SMTP, always. This is one of the most frequently dropped marks on the topic." },
      { wrong: "\"Packets always travel by the same route and arrive in order.\"",
        right: "Routers choose paths dynamically, so packets can take different routes and arrive out of order. Packet numbers exist precisely because of this." },
      { wrong: "\"Layering slows the network down by adding steps.\"",
        right: "The layers describe how the job is divided, not extra work invented for its own sake. The benefit in design, maintenance and fault-finding far outweighs the small overhead of headers." },
      { wrong: "\"A MAC address and an IP address are the same kind of thing.\"",
        right: "A MAC address is fixed to a piece of hardware and used within a local network. An IP address is assigned to a device on a network and used for routing between networks." },
    ],
  },

  "computer-science/defensive-design-and-testing": {
    summary:
      "A program that works when you use it correctly is not finished. Real users mistype, leave boxes empty, enter a date of birth in the future, and occasionally set out to break things deliberately. Defensive design is about assuming all of that in advance; testing is about proving you actually handled it. This is also the part of the course that most directly improves the programming you do yourself.",
    keyFacts: [
      {
        heading: "Defensive design",
        points: [
          "Defensive design means anticipating how a program could be misused — by accident or on purpose — and writing it so that misuse does no harm.",
          "Input validation checks that data is sensible before the program uses it.",
          "Input sanitisation removes or neutralises dangerous characters, protecting against attacks such as SQL injection.",
          "Authentication confirms the user is who they claim to be, usually with a username and password, sometimes with two-factor authentication.",
          "Planning for contingencies means deciding in advance what the program does when something goes wrong, rather than letting it crash.",
        ],
      },
      {
        heading: "Types of validation check",
        points: [
          "Range check: the value falls between given limits, such as an age between 0 and 120.",
          "Type check: the data is the right type, such as a number where a number is required.",
          "Length check: the data has an acceptable number of characters, such as a password of at least 8.",
          "Presence check: something has actually been entered, rather than the box left blank.",
          "Format check: the data matches a required pattern, such as a postcode or an email address containing an @.",
          "Look-up or lookup check: the value is one of a list of allowed options, such as a valid subject code.",
        ],
      },
      {
        heading: "Validation is not verification",
        points: [
          "Validation checks whether data is REASONABLE. Verification checks whether it was entered CORRECTLY.",
          "A date of birth of 01/01/1990 for a 15-year-old passes every validation check and is still wrong.",
          "Verification methods include double entry (typing a password twice) and proofreading against the original.",
          "A program can only ever validate; only a human or a second source can verify.",
          "Exam questions often deliberately describe an error that validation could never have caught.",
        ],
      },
      {
        heading: "Maintainability",
        points: [
          "Maintainable code is code another programmer — or you in six months — can understand and change safely.",
          "Comments explain WHY something is done, not what the line obviously says.",
          "Meaningful identifier names: totalScore rather than ts or x.",
          "Indentation shows the structure of loops and selection at a glance.",
          "Subprograms (procedures and functions) break a large program into named pieces, avoid repeated code, and can be tested separately.",
          "Constants for fixed values mean changing VAT once rather than hunting through the whole program.",
        ],
      },
      {
        heading: "Testing",
        points: [
          "Iterative testing happens throughout development: test a piece, fix it, carry on. Final (or terminal) testing happens at the end, on the complete program.",
          "A syntax error breaks the rules of the language, so the program will not run at all — a missing bracket or misspelt keyword.",
          "A logic error runs perfectly but produces the wrong result — using + where you meant −.",
          "Test data comes in three kinds: normal (typical, should be accepted), boundary (right at the limits, should be accepted), and invalid or erroneous (should be rejected).",
          "A test plan states, for each test: the data, the reason for it, the expected result and the actual result.",
        ],
      },
    ],
    flashcards: [
      { term: "Defensive design", definition: "Designing a program to anticipate and cope with misuse, whether accidental or deliberate." },
      { term: "Input validation", definition: "Checking that entered data is reasonable before the program uses it." },
      { term: "Input sanitisation", definition: "Removing or neutralising dangerous characters from input to prevent attacks such as SQL injection." },
      { term: "Authentication", definition: "Confirming that a user is who they claim to be, usually through a username and password." },
      { term: "Range check", definition: "A validation check that a value lies between given limits." },
      { term: "Presence check", definition: "A validation check that data has actually been entered rather than left blank." },
      { term: "Format check", definition: "A validation check that data matches a required pattern, such as an email address containing an @." },
      { term: "Verification", definition: "Checking that data was entered correctly, for example by double entry or proofreading." },
      { term: "Maintainability", definition: "How easily another programmer can understand and safely change a program." },
      { term: "Subprogram", definition: "A named block of code — a procedure or function — that can be called from elsewhere and tested on its own." },
      { term: "Syntax error", definition: "An error breaking the rules of the language, which stops the program running at all." },
      { term: "Logic error", definition: "An error where the program runs but produces the wrong result." },
      { term: "Normal test data", definition: "Typical data the program should accept and handle correctly." },
      { term: "Boundary test data", definition: "Data right at the limits of what is acceptable, which should be accepted." },
      { term: "Erroneous test data", definition: "Data of the wrong type or outside the allowed range, which the program should reject." },
      { term: "Iterative testing", definition: "Testing repeatedly throughout development, fixing problems as they appear." },
    ],
    examTips: [
      {
        tip: "Never confuse validation with verification",
        detail:
          "Validation asks 'is this sensible?'; verification asks 'is this what was meant?'. Examiners set questions specifically to separate students who know the difference.",
      },
      {
        tip: "Name the type of check, do not just say 'validation'",
        detail:
          "'A range check, so the age must be between 0 and 120' earns the mark. 'Validate the age' does not, because it never says how.",
      },
      {
        tip: "Give boundary data as the value itself, not near it",
        detail:
          "If the range is 1 to 10, the boundary data is 1 and 10 — the last values that should be accepted. Some boards also want 0 and 11 as the first values rejected.",
      },
      {
        tip: "Match syntax errors to 'will not run' and logic errors to 'wrong answer'",
        detail:
          "That one association answers most error-identification questions, and stops you calling a wrong output a syntax error.",
      },
      {
        tip: "Explain maintainability in terms of the next programmer",
        detail:
          "Meaningful names, comments, indentation and subprograms all exist so somebody else can change the code without breaking it. Say that, and the reason is clear.",
      },
      {
        tip: "Write test plans with an expected result",
        detail:
          "A test without a stated expected result cannot fail, so it proves nothing. Data, reason, expected, actual — four columns, every time.",
      },
      {
        tip: "Say what happens after invalid input is rejected",
        detail:
          "Full marks usually need the recovery too: display a helpful message and ask again, rather than crashing or silently continuing with bad data.",
      },
    ],

    workedExamples: [
      {
        question:
          "A form asks for a student's age, which must be between 11 and 18. Give suitable normal, boundary and erroneous test data, with the expected result for each.",
        steps: [
          "Normal data is typical and well inside the range — 15. Expected: accepted.",
          "Boundary data sits exactly at the limits — 11 and 18. Expected: both accepted, because the limits are included.",
          "Some boards also want the first values outside: 10 and 19. Expected: both rejected.",
          "Erroneous data is the wrong type or clearly outside — 'fifteen', or −4, or a blank box. Expected: rejected with a message.",
          "State the expected result for every case, or the test cannot be judged to have passed.",
        ],
        answer:
          "Normal: 15 (accepted). Boundary: 11 and 18 (accepted); 10 and 19 (rejected). Erroneous: 'fifteen', −4 or a blank entry (all rejected with a helpful message asking again).",
      },
      {
        question:
          "Identify the type of error in each: a missing closing bracket; a program that calculates an average by dividing by the wrong number; a misspelt keyword 'pirnt'.",
        steps: [
          "A missing closing bracket breaks the rules of the language, so the program will not run — syntax error.",
          "An average divided by the wrong number runs perfectly and produces a number, just the wrong one — logic error.",
          "'pirnt' is not a keyword the language recognises, so again the rules are broken — syntax error.",
          "The test to apply: does the program run at all? If no, syntax. If yes but the answer is wrong, logic.",
          "Logic errors are harder to find precisely because nothing announces them.",
        ],
        answer:
          "Missing bracket — syntax error. Wrong divisor in an average — logic error. 'pirnt' — syntax error.",
      },
      {
        question:
          "A school system stores a pupil's date of birth. Explain why validation cannot guarantee the date is correct.",
        steps: [
          "Validation can check the date is a real date, in a sensible format, and within a plausible range of years.",
          "All of those checks test whether the data is REASONABLE.",
          "But a typing slip that produces another reasonable date — 03/07/2009 instead of 07/03/2009 — passes every one of them.",
          "The program has no independent source to compare against, so it cannot tell which of two plausible dates was meant.",
          "Only verification can catch this: checking against the original document, or having the entry made twice and compared.",
        ],
        answer:
          "Because validation only tests whether data is plausible, and a mistyped date can be perfectly plausible. Catching it needs verification — proofreading against the original record or double entry — since only an outside source knows which date was intended.",
      },
      {
        question:
          "Suggest three ways to make this line more maintainable: `if a>17 and b<3: x=x+1`",
        steps: [
          "Meaningful identifiers: a becomes age, b becomes latePayments, x becomes eligibleCount.",
          "A named constant for the magic numbers: MINIMUM_AGE = 18 and MAX_LATE_PAYMENTS = 3, so the rule can be changed in one place.",
          "A comment stating WHY: applicants must be adults with fewer than three late payments to qualify.",
          "Consistent indentation so the block belonging to the if statement is obvious at a glance.",
          "If this test is used in several places, move it into a function called isEligible() — one definition, testable on its own.",
        ],
        answer:
          "Use meaningful names (age, latePayments, eligibleCount); replace the magic numbers 17 and 3 with named constants so the rule changes in one place; add a comment explaining why the rule exists. Indenting consistently and extracting the test into an isEligible() function would improve it further.",
      },
    ],

    practice: [
      { question: "What is the term for checking that entered data is reasonable before it is used?",
        accept: ["validation", "input validation"],
        answer: "Input validation. It checks plausibility, not correctness." },
      { question: "What is the term for checking that data was entered correctly, e.g. by typing it twice?",
        accept: ["verification"],
        answer: "Verification. Double entry and proofreading are the two standard methods." },
      { question: "Which validation check makes sure a value is between two limits?",
        accept: ["range check", "range"],
        answer: "A range check, such as an age between 11 and 18." },
      { question: "Which validation check makes sure a box has not been left blank?",
        accept: ["presence check", "presence"],
        answer: "A presence check — it confirms something was actually entered rather than the field left blank." },
      { question: "Which validation check makes sure an email address contains an @?",
        accept: ["format check", "format"],
        answer: "A format check — the data must match a required pattern." },
      { question: "Which validation check makes sure a password is at least 8 characters?",
        accept: ["length check", "length"],
        answer: "A length check — it confirms the data has an acceptable number of characters." },
      { question: "A missing bracket stops a program running. What type of error is this?",
        accept: ["syntax", "syntax error", "a syntax error"],
        answer: "A syntax error — the rules of the language have been broken." },
      { question: "A program runs but gives the wrong average. What type of error is this?",
        accept: ["logic", "logic error", "a logic error"],
        answer: "A logic error. Harder to find, because nothing announces it." },
      { question: "Name the three types of test data.",
        accept: ["normal boundary erroneous", "normal, boundary, erroneous", "normal boundary invalid", "normal, boundary, invalid"],
        answer: "Normal, boundary and erroneous (invalid)." },
      { question: "A field accepts 1 to 20. Give the two boundary values that should be ACCEPTED.",
        accept: ["1 and 20", "1, 20", "1 20", "20 and 1"],
        answer: "1 and 20 — the last values inside the range." },
      { question: "What is the name for testing carried out repeatedly during development?",
        accept: ["iterative testing", "iterative"],
        answer: "Iterative testing. Final or terminal testing happens at the end." },
      { question: "What is the term for removing dangerous characters from user input?",
        accept: ["sanitisation", "input sanitisation", "sanitization", "input sanitization"],
        answer: "Input sanitisation — the defence against attacks such as SQL injection." },
      { question: "What is the term for confirming a user is who they claim to be?",
        accept: ["authentication"],
        answer: "Authentication, usually by username and password." },
      { question: "Name one feature of maintainable code beginning with the letter C.",
        accept: ["comments", "constants", "comment"],
        answer: "Comments (or constants). Both make code easier for the next programmer to change safely." },
      { question: "Should test data of 'abc' entered into an age field be accepted or rejected?",
        accept: ["rejected", "reject"],
        answer: "Rejected — it is erroneous data, failing a type check." },
      { question: "What should a test plan state for each test besides the data used?",
        accept: ["expected result", "the expected result", "expected outcome"],
        answer: "The expected result — plus the reason for the test and the actual result. A test with no expected result cannot fail." },
      { question: "Explain why a program should never simply crash when a user enters invalid data.",
        answer: "A crash loses whatever the user had already entered, gives them no idea what went wrong, and leaves the program in an unknown state — which can mean half-written files or a partly updated database. It also tells an attacker something useful, since crash messages often reveal internal details of how the program works. Defensive design instead anticipates bad input, rejects it with a clear message explaining what was expected, and asks again, so the program stays in a known good state and the user can actually fix their mistake. (Mark this one yourself.)" },
      { question: "Explain why subprograms make a large program easier to test as well as easier to read.",
        answer: "A subprogram has a defined input and a defined output, so it can be tested on its own with normal, boundary and erroneous data without running the whole program. That makes any fault easy to locate: if the subprogram passes its own tests, the problem is elsewhere. It also removes duplicated code, so a rule that appears in one place instead of five only needs testing and fixing once — and when the rule changes, there is no risk of updating four copies and missing the fifth. (Mark this one yourself.)" },
      {
        question: "What is the purpose of input validation?",
        choices: [
          "To check data is sensible before it is used",
          "To make the program run faster",
          "To encrypt user data",
          "To reduce file size",
        ],
        accept: [
          "To check data is sensible before it is used",
        ],
        answer: "Range, type, length, presence and format checks are the common ones. Validation checks plausibility, not truth.",
      },
      {
        question: "Iterative testing means:",
        choices: [
          "Testing repeatedly throughout development",
          "Testing only once at the end",
          "Testing done by the customer",
          "Testing without any test data",
        ],
        accept: [
          "Testing repeatedly throughout development",
        ],
        answer: "Final testing happens once the program is complete. Catching faults early is far cheaper than fixing them later.",
      },
      {
        question: "Which test data is BOUNDARY data for a value that must be 1 to 10?",
        choices: [
          "1 and 10",
          "5",
          "0 and 11",
          "Any letter",
        ],
        accept: [
          "1 and 10",
        ],
        answer: "Boundary data sits exactly on the limits. 0 and 11 are erroneous, 5 is normal, and a letter is invalid by type.",
      },
      {
        question: "A syntax error is one that:",
        choices: [
          "Breaks the rules of the language so the code will not run",
          "Produces the wrong answer",
          "Only occurs on slow computers",
          "Happens when memory runs out",
        ],
        accept: [
          "Breaks the rules of the language so the code will not run",
        ],
        answer: "A logic error runs perfectly but gives the wrong result, which makes it much harder to find.",
      },
      {
        question: "Which practice makes a program easier to maintain?",
        choices: [
          "Meaningful variable names and comments",
          "Using single-letter names everywhere",
          "Writing all code in one long subroutine",
          "Avoiding indentation",
        ],
        accept: [
          "Meaningful variable names and comments",
        ],
        answer: "Maintainability matters because most of a program's life is spent being changed by someone who did not write it.",
      },
    ],

    misconceptions: [
      { wrong: "\"Validation makes sure the data is correct.\"",
        right: "It makes sure the data is REASONABLE. A plausible but mistyped date passes every validation check. Only verification can catch that." },
      { wrong: "\"A program that gives the wrong answer has a syntax error.\"",
        right: "If it runs at all, the syntax is fine. Producing the wrong result is a logic error — which is why logic errors are the harder kind to find." },
      { wrong: "\"Boundary data means values just outside the allowed range.\"",
        right: "Boundary data is the values AT the limits, which should be accepted. Testing just outside is worth doing too, but the boundary itself is the limit value." },
      { wrong: "\"Comments should explain what each line does.\"",
        right: "A comment saying 'add one to the counter' above counter = counter + 1 is noise. Comments should explain WHY — the reasoning that the code cannot show." },
      { wrong: "\"Testing proves a program has no bugs.\"",
        right: "Testing can only show that the cases you tried worked. It is evidence, not proof — which is why choosing test data thoughtfully matters so much." },
      { wrong: "\"Defensive design is only needed for programs on the internet.\"",
        right: "Most bad input is accidental: a slip of the finger, a blank box, a decimal point in the wrong place. Any program with a user needs it." },
    ],
  },

  "computer-science/languages-and-ides": {
    summary:
      "A CPU only ever executes binary. Everything readable — Python, Java, the code you write in lessons — has to be turned into that binary by another program before anything happens. This topic covers the ladder from machine code up to high-level languages, the three kinds of translator that move between them, and the tools an IDE provides to make writing code bearable.",
    keyFacts: [
      {
        heading: "Levels of language",
        points: [
          "Machine code is binary instructions the CPU executes directly. It is the only thing a processor actually understands.",
          "Assembly language is a low-level language using short mnemonics such as LDA, ADD and STA in place of binary patterns.",
          "One assembly instruction usually corresponds to exactly one machine code instruction — a one-to-one relationship.",
          "High-level languages such as Python, Java and C# use words close to English and are far quicker to write and easier to read.",
          "One high-level statement usually becomes many machine code instructions — a one-to-many relationship.",
          "Low-level code is specific to one processor family; high-level code is portable across different machines.",
        ],
      },
      {
        heading: "Why anyone still uses low-level languages",
        points: [
          "It allows direct control of hardware, which matters for device drivers and embedded systems.",
          "It can be more efficient in memory and speed, because nothing is added by a translator making general assumptions.",
          "The trade-off is severe: it is slow to write, hard to read, easy to get wrong, and tied to one processor.",
          "High-level languages are used for almost everything else precisely because programmer time costs more than processor time.",
          "The question 'why choose a low-level language here?' always has a hardware or efficiency answer in the scenario.",
        ],
      },
      {
        heading: "Translators",
        points: [
          "An assembler translates assembly language into machine code, one instruction at a time.",
          "A compiler translates the whole high-level program into machine code in one go, before it is run, producing an executable file.",
          "An interpreter translates and executes a high-level program one line at a time, every time it runs.",
          "All three exist because the CPU can only execute machine code, and humans cannot reasonably write it.",
          "Java and Python both blur the line by compiling to an intermediate form first — worth knowing, but not what a GCSE answer needs.",
        ],
      },
      {
        heading: "Compiler against interpreter",
        points: [
          "A compiled program runs faster, because translation already happened and is not repeated.",
          "The compiled executable can be distributed without the source code, protecting the original.",
          "A compiler reports all errors together at the end of compilation, which can be a long list to face at once.",
          "An interpreter stops at the first error and reports it with its line, which is much friendlier while developing.",
          "Interpreted code is more portable — the same source runs anywhere with a suitable interpreter — but the user must have that interpreter installed.",
          "Interpreted programs run more slowly, because translation happens again every time and on every pass through a loop.",
        ],
      },
      {
        heading: "Integrated Development Environments",
        points: [
          "An IDE is a single program bringing together the tools needed to write, test and debug software.",
          "Editor: writing and changing code, with syntax highlighting, auto-indentation and auto-complete.",
          "Error diagnostics: highlighting mistakes and reporting what and where they are.",
          "Run-time environment: running the program without leaving the IDE.",
          "Translator: a built-in compiler or interpreter, so code can be run immediately.",
          "Debugger: breakpoints that pause execution at a chosen line, stepping through one line at a time, and watching variables change.",
        ],
      },
    ],
    flashcards: [
      { term: "Machine code", definition: "Binary instructions that the CPU executes directly — the only language a processor truly understands." },
      { term: "Assembly language", definition: "A low-level language using mnemonics such as LDA and ADD, with roughly one instruction per machine code instruction." },
      { term: "High-level language", definition: "A language such as Python or Java, close to English, portable and quick to write." },
      { term: "Low-level language", definition: "Machine code or assembly language — close to the hardware and specific to one processor family." },
      { term: "Assembler", definition: "A translator that converts assembly language into machine code." },
      { term: "Compiler", definition: "A translator that converts an entire high-level program into machine code before it is run." },
      { term: "Interpreter", definition: "A translator that converts and executes a high-level program one line at a time, each time it runs." },
      { term: "Translator", definition: "Any program that converts code from one language into another, such as an assembler, compiler or interpreter." },
      { term: "Executable", definition: "The machine code file produced by a compiler, which can be run without the source code or the compiler." },
      { term: "IDE", definition: "Integrated Development Environment — one program combining editor, translator, run-time environment and debugger." },
      { term: "Syntax highlighting", definition: "Colouring parts of code by their role, making structure and typing mistakes easier to see." },
      { term: "Breakpoint", definition: "A marker that pauses a running program at a chosen line so variables can be inspected." },
      { term: "Stepping", definition: "Running a program one line at a time to watch exactly what it does." },
      { term: "Error diagnostics", definition: "IDE features that detect mistakes and report what is wrong and where." },
      { term: "Portability", definition: "How easily a program can run on different types of computer. High-level source code is portable; machine code is not." },
    ],
    examTips: [
      {
        tip: "Answer 'compiler or interpreter' with the situation",
        detail:
          "Developing and debugging favours an interpreter; distributing finished software favours a compiler. Say which stage the scenario is at and the justification writes itself.",
      },
      {
        tip: "Use 'translates the whole program' and 'one line at a time'",
        detail:
          "Those two phrases are the core distinction, and mark schemes look for them almost word for word.",
      },
      {
        tip: "Give protecting source code as a compiler advantage",
        detail:
          "A commercial company ships the executable and keeps the source. It is an easy extra mark that most students forget.",
      },
      {
        tip: "Never say assembly language is machine code",
        detail:
          "Assembly uses mnemonics and still needs an assembler to become machine code. They are two different levels, even though they map almost one to one.",
      },
      {
        tip: "Name specific IDE tools, not 'it helps you code'",
        detail:
          "Breakpoints, stepping, syntax highlighting, error diagnostics, a built-in run-time environment. Naming a tool and saying what it does earns two marks where vagueness earns none.",
      },
      {
        tip: "Explain portability from the translator's point of view",
        detail:
          "The same Python source runs anywhere with a Python interpreter, because the translation happens on that machine. A compiled executable is built for one type of processor and operating system.",
      },
      {
        tip: "Justify low-level languages with hardware or efficiency",
        detail:
          "Device drivers, embedded systems, and squeezing the last drop of performance from limited hardware. Those are the only reasons worth writing.",
      },
    ],

    workedExamples: [
      {
        question: "Explain two differences between a compiler and an interpreter.",
        steps: [
          "Difference one — when translation happens. A compiler translates the entire program before it runs; an interpreter translates and executes one line at a time as the program runs.",
          "Consequence: compiled code runs faster because translation is not repeated, especially inside loops.",
          "Difference two — how errors are reported. A compiler reports all errors together once compilation finishes.",
          "An interpreter stops at the first error and names the line, which is why it is friendlier during development.",
          "A third difference worth having ready: a compiler produces an executable that can be distributed without the source.",
        ],
        answer:
          "A compiler translates the whole program in advance and produces an executable, so it runs faster and the source can be kept private; an interpreter translates line by line as it runs, so it is slower but stops at the first error and reports it immediately, which is better for debugging.",
      },
      {
        question:
          "A company writes software for a washing machine's embedded controller. Explain why they might use assembly language.",
        steps: [
          "An embedded controller has very limited memory and processing power, so efficiency genuinely matters.",
          "Assembly maps almost one-to-one onto machine code, so there is no translator adding general-purpose overhead.",
          "It gives direct control over the specific hardware — timers, motors, sensors — which a high-level language may not expose.",
          "The program is small and does one fixed job, so the difficulty of writing assembly is manageable.",
          "It will only ever run on that one controller, so the loss of portability costs nothing.",
        ],
        answer:
          "Because it gives direct control of the hardware and produces efficient code that fits limited memory. The usual drawbacks matter less here: the program is small and fixed, and it only ever runs on that one processor, so losing portability costs nothing.",
      },
      {
        question:
          "Name four tools provided by an IDE and state what each is for.",
        steps: [
          "Editor — writing and changing code, usually with syntax highlighting and auto-indentation to make structure visible.",
          "Error diagnostics — detecting mistakes and reporting what is wrong and on which line.",
          "Run-time environment — running the program from inside the IDE without switching to another tool.",
          "Debugger — breakpoints to pause at a chosen line, stepping through line by line, and watching variable values change.",
          "A translator is a fifth: a built-in compiler or interpreter so code can be run immediately after being typed.",
        ],
        answer:
          "An editor with syntax highlighting for writing code; error diagnostics to report mistakes and their locations; a run-time environment to run the program in place; and a debugger providing breakpoints, stepping and variable watching.",
      },
      {
        question:
          "A student's program produces the wrong total, but no error message appears. Describe how an IDE's debugger helps find the fault.",
        steps: [
          "No error message means the syntax is fine — this is a logic error, so the program must be watched while it works.",
          "Set a breakpoint just before the total is calculated, so execution pauses at exactly the interesting moment.",
          "Inspect the variables at that point: are the input values what you expected?",
          "Step through the loop one line at a time, watching the running total change after each pass.",
          "The step where the total stops matching what you calculated by hand is the line containing the fault.",
        ],
        answer:
          "Set a breakpoint before the calculation, then step through line by line watching the variables. The first point where a value differs from what it should be identifies the faulty line — which is the only practical way to find a logic error, since nothing announces one.",
      },
    ],

    practice: [
      { question: "What is the only language a CPU can execute directly?",
        accept: ["machine code", "binary", "machine code binary"],
        answer: "Machine code — binary instructions." },
      { question: "Which translator converts assembly language into machine code?",
        accept: ["assembler", "an assembler"],
        answer: "An assembler. Roughly one assembly instruction becomes one machine code instruction." },
      { question: "Which translator converts a whole high-level program before it runs?",
        accept: ["compiler", "a compiler"],
        answer: "A compiler, producing an executable file." },
      { question: "Which translator converts and runs a program one line at a time?",
        accept: ["interpreter", "an interpreter"],
        answer: "An interpreter — slower to run, but it reports the first error immediately." },
      { question: "Is Python a high-level or low-level language?",
        accept: ["high level", "high-level", "high"],
        answer: "High-level — close to English, portable and quick to write." },
      { question: "Is assembly language high-level or low-level?",
        accept: ["low level", "low-level", "low"],
        answer: "Low-level. It uses mnemonics but stays tied to one processor family." },
      { question: "What does IDE stand for?",
        accept: ["integrated development environment"],
        answer: "Integrated Development Environment." },
      { question: "Which IDE feature pauses a program at a chosen line so you can inspect variables?",
        accept: ["breakpoint", "breakpoints", "a breakpoint"],
        answer: "A breakpoint. Combined with stepping, it is how logic errors are tracked down." },
      { question: "Which IDE feature colours keywords and strings differently to make code readable?",
        accept: ["syntax highlighting", "highlighting"],
        answer: "Syntax highlighting. Colouring keywords, strings and comments differently makes structure and typing slips visible at a glance." },
      { question: "Which type of translator reports ALL errors at the end of translation?",
        accept: ["compiler", "a compiler"],
        answer: "A compiler. An interpreter stops at the first error instead." },
      { question: "Which translator lets a developer distribute software without the source code?",
        accept: ["compiler", "a compiler"],
        answer: "A compiler — the executable it produces can be shipped on its own." },
      { question: "Does one high-level statement usually become one machine code instruction, or many?",
        accept: ["many", "more than one", "several"],
        answer: "Many. Assembly is the one-to-one case, not high-level code." },
      { question: "Which runs faster: compiled code or interpreted code?",
        accept: ["compiled", "compiled code"],
        answer: "Compiled, because translation happened once in advance rather than repeating every run." },
      { question: "Which type of language is portable between different processor types?",
        accept: ["high level", "high-level", "high"],
        answer: "High-level. Machine code is built for one processor family." },
      { question: "Name the IDE feature that lets you run a program one line at a time.",
        accept: ["stepping", "step through", "single stepping", "stepping through"],
        answer: "Stepping — usually used together with breakpoints and variable watching." },
      { question: "Give one reason a programmer might choose assembly language.",
        accept: ["direct hardware control", "hardware control", "efficiency", "speed", "control of hardware", "more efficient"],
        answer: "Direct control of hardware, or greater efficiency in memory and speed — the reasons that matter for drivers and embedded systems." },
      { question: "Explain why an interpreter is often preferred while a program is being written, even though it runs more slowly.",
        answer: "Because development is dominated by finding mistakes, not by execution speed. An interpreter stops at the first error and names the line, so the programmer can fix one problem at a time rather than being handed a long list at the end of compilation. Code can also be run the instant it is typed, with no compilation step between writing and testing, which makes the write-test-fix cycle much shorter. Once the program is finished and correct, the calculation flips: it can be compiled for speed and shipped as an executable. (Mark this one yourself.)" },
      { question: "Explain why high-level languages are used for almost all modern software despite being less efficient than assembly.",
        answer: "Because the scarce resource is programmer time, not processor time. High-level code is far quicker to write, much easier to read and therefore to maintain, and portable across different machines rather than tied to one processor family — so a team can build something large, share the work, and keep changing it for years. Modern compilers also optimise well enough that the efficiency gap rarely matters, and hardware is cheap compared with salaries. Assembly still wins where hardware is genuinely constrained, such as embedded controllers and drivers, which is exactly where it is still used. (Mark this one yourself.)" },
      {
        question: "What is the difference between a compiler and an interpreter?",
        choices: [
          "A compiler translates the whole program at once; an interpreter goes line by line",
          "An interpreter is always faster",
          "A compiler only works on high-level code",
          "They are two names for the same tool",
        ],
        accept: [
          "A compiler translates the whole program at once; an interpreter goes line by line",
        ],
        answer: "Compiled code runs faster and needs no translator to be present. An interpreter stops at the first error, which helps while learning.",
      },
      {
        question: "Why is high-level code easier to work with than machine code?",
        choices: [
          "It is closer to human language and portable between machines",
          "It runs faster",
          "It uses less memory",
          "It needs no translation",
        ],
        accept: [
          "It is closer to human language and portable between machines",
        ],
        answer: "Low-level code can be more efficient and controls hardware directly, but is tied to one processor type and is far harder to read.",
      },
      {
        question: "Which IDE feature highlights keywords in different colours?",
        choices: [
          "Syntax highlighting",
          "A breakpoint",
          "The run-time environment",
          "Auto-documentation",
        ],
        accept: [
          "Syntax highlighting",
        ],
        answer: "It makes structure visible and spelling mistakes in keywords obvious at a glance.",
      },
      {
        question: "What is a breakpoint used for?",
        choices: [
          "Pausing a program so variables can be inspected",
          "Stopping the program permanently",
          "Marking the end of a subroutine",
          "Splitting a file in two",
        ],
        accept: [
          "Pausing a program so variables can be inspected",
        ],
        answer: "Stepping through line by line while watching values is the fastest way to find a logic error.",
      },
      {
        question: "Machine code is written in:",
        choices: [
          "Binary",
          "Python",
          "Hexadecimal only",
          "English keywords",
        ],
        accept: [
          "Binary",
        ],
        answer: "It is the only form the processor executes directly. Assembly language is a readable one-to-one representation of it.",
      },
    ],

    misconceptions: [
      { wrong: "\"Assembly language is machine code.\"",
        right: "Assembly uses human-readable mnemonics like LDA and still needs an assembler to become machine code. They are neighbouring levels, not the same thing." },
      { wrong: "\"An interpreter is just a slow compiler.\"",
        right: "They work differently. A compiler translates everything in advance and produces a file; an interpreter translates and executes line by line, every time, and produces no executable." },
      { wrong: "\"Compiled programs run anywhere.\"",
        right: "An executable is built for one processor type and operating system. It is the high-level SOURCE code that is portable, not the compiled result." },
      { wrong: "\"An IDE is just a text editor with colours.\"",
        right: "The editor is one part. The translator, run-time environment and debugger — breakpoints, stepping, variable watching — are what make it integrated." },
      { wrong: "\"High-level languages are always the better choice.\"",
        right: "For device drivers and embedded systems, direct hardware control and tight efficiency can matter more than convenience. The right answer depends on the scenario." },
      { wrong: "\"Python is compiled because you press Run.\"",
        right: "Pressing Run in an IDE hides which translator is used. The distinction is whether the whole program is translated in advance into a distributable executable, or translated line by line as it runs." },
    ],
  },
};
