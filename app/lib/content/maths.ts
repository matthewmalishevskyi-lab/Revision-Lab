// MATHS — all 19 topics.
//
// ⚠️ ACCURACY: written for GCSE Maths generally (AQA, Edexcel, OCR). Foundation
// and Higher tiers differ — a few things here (cosine rule, quadratic formula,
// completing the square, histograms, vector proofs) are Higher only on most
// boards. Check your tier before assuming you need them.
//
// Formula sheets: exam boards now provide some formulae in the exam and expect
// others memorised, and this has changed in recent years. Check your board's
// current formula sheet rather than trusting any revision guide on this point.

import type { TopicContent } from "./index";

export const MATHS: Record<string, TopicContent> = {
  // ─────────────────────────── YEAR 9 ───────────────────────────

  "maths/number-and-place-value": {
    summary:
      "The foundations everything else is built on: how our number system works, how to round sensibly, and how to handle powers, primes and very large or very small numbers. This is also where the most marks are quietly lost, because these skills appear inside almost every other question on the paper.",
    keyFacts: [
      {
        heading: "Order of operations",
        points: [
          "BIDMAS: Brackets, Indices, Division and Multiplication (left to right), Addition and Subtraction (left to right).",
          "Division and multiplication have equal priority — work left to right, not division first.",
          "The same applies to addition and subtraction.",
          "A fraction bar acts as a bracket: everything on top is worked out before dividing.",
        ],
      },
      {
        heading: "Rounding and estimation",
        points: [
          "To round to a given place value, look at the digit immediately to the right. 5 or more rounds up.",
          "Significant figures start from the first non-zero digit. In 0.00456 the first significant figure is 4.",
          "To estimate, round every number to 1 significant figure, then calculate.",
          "Estimation questions want the rounded working shown, not an exact answer.",
          "Truncating means chopping digits off rather than rounding, and always gives a value less than or equal to the original.",
        ],
      },
      {
        heading: "Bounds",
        points: [
          "A value rounded to the nearest 10 has bounds 5 either side: 40 to the nearest 10 has lower bound 35 and upper bound 45.",
          "The upper bound is written as the value you would round up from, even though it would itself round the other way.",
          "For a maximum answer when dividing, use the largest numerator and the smallest denominator.",
          "For a minimum answer when dividing, use the smallest numerator and the largest denominator.",
        ],
      },
      {
        heading: "Factors, multiples and primes",
        points: [
          "A factor divides into a number exactly. A multiple is in that number's times table.",
          "A prime number has exactly two factors: 1 and itself. 1 is not prime, because it has only one factor. 2 is the only even prime.",
          "Prime factor decomposition writes a number as a product of primes, usually found with a factor tree, written using index notation.",
          "HCF (highest common factor): the largest number that divides into both.",
          "LCM (lowest common multiple): the smallest number both divide into.",
          "Using prime factors: HCF is the product of the shared primes; LCM is the product of all primes taking the highest power of each.",
        ],
      },
      {
        heading: "Powers and roots",
        points: [
          "Index laws: a^m × a^n = a^(m+n); a^m ÷ a^n = a^(m−n); (a^m)^n = a^(mn).",
          "a^0 = 1 for any non-zero a.",
          "a^(−n) = 1 / a^n — a negative index means reciprocal, not a negative answer.",
          "a^(1/2) = √a and a^(1/3) = ∛a.",
          "Squares to know: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144. Cubes: 1, 8, 27, 64, 125.",
        ],
      },
      {
        heading: "Standard form",
        points: [
          "Standard form is written as A × 10^n where 1 ≤ A < 10 and n is an integer.",
          "Large numbers have a positive power: 4,500,000 = 4.5 × 10^6.",
          "Small numbers have a negative power: 0.00032 = 3.2 × 10^−4.",
          "To multiply, multiply the A values and add the powers. To divide, divide the A values and subtract the powers.",
          "Always check the final answer is in proper standard form — 12 × 10^5 is not, and must be rewritten as 1.2 × 10^6.",
        ],
      },
      {
        heading: "Negative numbers",
        points: [
          "Two like signs next to each other give a plus: 5 − (−3) = 5 + 3 = 8.",
          "Two unlike signs give a minus: 5 + (−3) = 2.",
          "Multiplying or dividing two negatives gives a positive; one negative gives a negative.",
          "A negative squared is positive, but −3² means −(3²) = −9, whereas (−3)² = 9. Brackets matter.",
        ],
      },
    ],
    flashcards: [
      { term: "BIDMAS", definition: "The order of operations: Brackets, Indices, Division and Multiplication left to right, then Addition and Subtraction left to right." },
      { term: "Significant figures", definition: "The digits of a number counted from the first non-zero digit onwards." },
      { term: "Factor", definition: "A whole number that divides exactly into another number with no remainder." },
      { term: "Multiple", definition: "The result of multiplying a number by a whole number; a number in its times table." },
      { term: "Prime number", definition: "A number with exactly two factors: itself and 1. Therefore 1 is not prime and 2 is the only even prime." },
      { term: "Prime factor decomposition", definition: "Writing a number as a product of its prime factors, usually in index form." },
      { term: "HCF", definition: "Highest Common Factor — the largest number that divides exactly into two or more numbers." },
      { term: "LCM", definition: "Lowest Common Multiple — the smallest number that two or more numbers all divide into." },
      { term: "Reciprocal", definition: "The result of dividing 1 by a number; the reciprocal of a is 1/a." },
      { term: "Standard form", definition: "A number written as A × 10 to the power n, where A is at least 1 and less than 10." },
      { term: "Upper bound", definition: "The largest value a rounded measurement could have been before rounding." },
      { term: "Lower bound", definition: "The smallest value a rounded measurement could have been before rounding." },
      { term: "Truncation", definition: "Cutting off digits after a certain point without rounding, always giving a value no larger than the original." },
      { term: "Index (power)", definition: "The small raised number showing how many times a value is multiplied by itself." },
    ],
    examTips: [
      {
        tip: "Read whether it wants decimal places or significant figures",
        detail:
          "They are different and questions specify one. 0.004567 to 2 decimal places is 0.00; to 2 significant figures it is 0.0046. Getting the wrong one loses the mark even with perfect arithmetic.",
      },
      {
        tip: "Show the rounded values in estimation questions",
        detail:
          "The marks are for rounding each number to 1 significant figure and then calculating. Writing only a final answer — even a good estimate — typically scores nothing.",
      },
      {
        tip: "Never round partway through a calculation",
        detail:
          "Keep full accuracy in your calculator and round only the final answer. Rounding early produces answers that are slightly wrong and lose the accuracy mark.",
      },
      {
        tip: "1 is not a prime number",
        detail:
          "A prime has exactly two distinct factors. 1 has only one. This is asked directly and is free marks if you know it and a certain loss if you do not.",
      },
      {
        tip: "Check standard form answers are properly formed",
        detail:
          "The first part must be at least 1 and less than 10. After multiplying, answers like 34 × 10^7 are unfinished and must become 3.4 × 10^8.",
      },
      {
        tip: "Use a Venn diagram for HCF and LCM",
        detail:
          "Put shared prime factors in the overlap. The overlap multiplied together is the HCF; everything in the whole diagram multiplied together is the LCM. Much more reliable than listing.",
      },
      {
        tip: "Watch the brackets on squared negatives",
        detail:
          "(−4)² = 16 but −4² = −16. Calculators follow this rule strictly, so type it exactly as written in the question.",
      },
    ],

    workedExamples: [
      {
        question: "Estimate 4.87 x 19.2 without a calculator.",
        steps: [
          "Round each number to 1 significant figure — that is what 'estimate' means in an exam.",
          "4.87 rounds to 5.",
          "19.2 rounds to 20.",
          "Multiply the rounded values: 5 x 20 = 100.",
          "Show the rounded values in your working. An answer alone, however close, usually scores nothing.",
        ],
        answer: "About 100",
      },
      {
        question: "Find the HCF and LCM of 24 and 36 using prime factors.",
        steps: [
          "Write each as a product of primes. 24 = 2 x 2 x 2 x 3 = 2^3 x 3.",
          "36 = 2 x 2 x 3 x 3 = 2^2 x 3^2.",
          "HCF: take the LOWEST power of each shared prime. Shared primes are 2 and 3, so 2^2 x 3^1.",
          "2^2 x 3 = 4 x 3 = 12.",
          "LCM: take the HIGHEST power of every prime appearing in either. That is 2^3 x 3^2.",
          "8 x 9 = 72.",
        ],
        answer: "HCF = 12, LCM = 72",
      },
      {
        question: "Work out (3 x 10^4) x (2 x 10^6), giving your answer in standard form.",
        steps: [
          "Multiply the number parts: 3 x 2 = 6.",
          "Add the powers of 10: 4 + 6 = 10.",
          "That gives 6 x 10^10.",
          "Check the answer is in proper standard form: the first part must be at least 1 and less than 10. 6 qualifies, so no adjustment is needed.",
        ],
        answer: "6 x 10^10",
      },
      {
        question: "A length is 40 cm to the nearest 10 cm. State the lower and upper bounds.",
        steps: [
          "'To the nearest 10' means the true value was rounded to the closest multiple of 10.",
          "Half of 10 is 5, so the true value is within 5 either side of 40.",
          "Lower bound: 40 − 5 = 35 cm. Any value from 35 upwards rounds to 40.",
          "Upper bound: 40 + 5 = 45 cm. This is written as 45 even though 45 itself would round up — the bound is the limit the value approaches.",
        ],
        answer: "Lower bound 35 cm, upper bound 45 cm",
      },
    ],

    practice: [
      { question: "Work out 3 + 4 x 2", accept: ["11"], answer: "11. BIDMAS: multiplication before addition, so 4 x 2 = 8 first, then 3 + 8." },
      { question: "Work out 2^5", accept: ["32"], answer: "32, because 2 x 2 x 2 x 2 x 2 = 32." },
      { question: "Work out 5^0", accept: ["1", "one"], answer: "1. Any non-zero number raised to the power 0 equals 1." },
      { question: "Work out 2^-2 as a decimal", accept: ["0.25", ".25", "1/4"], answer: "0.25. A negative index means the reciprocal: 2^-2 = 1 divided by 2^2 = 1/4." },
      { question: "What is the HCF of 12 and 18?", accept: ["6"], answer: "6. The factors shared by both are 1, 2, 3 and 6, and 6 is the highest." },
      { question: "What is the LCM of 4 and 6?", accept: ["12"], answer: "12. It is the smallest number that both 4 and 6 divide into exactly." },
      { question: "Is 1 a prime number? Answer yes or no.", accept: ["no"],
        answer: "No. A prime has exactly two distinct factors, and 1 has only one. This is asked directly and is free marks either way." },
      { question: "What is the only even prime number?", accept: ["2", "two"], answer: "2. Every other even number has 2 as a factor, so it has more than two factors." },
      { question: "Write 45,000 in standard form.", accept: ["4.5x10^4", "4.5 x 10^4", "4.5*10^4", "4.5e4", "4.5×10^4"],
        answer: "4.5 x 10^4. The first part must be at least 1 and less than 10." },
      { question: "Write 3.7 x 10^5 as an ordinary number.", accept: ["370000", "370,000"],
        answer: "370,000. A positive power of 10 moves the decimal point to the right." },
      { question: "Write 0.00042 in standard form.", accept: ["4.2x10^-4", "4.2 x 10^-4", "4.2*10^-4", "4.2e-4", "4.2×10^-4"],
        answer: "4.2 x 10^-4. Small numbers take a negative power." },
      { question: "Estimate 6.9 x 3.1 by rounding to 1 significant figure.", accept: ["21"],
        answer: "21. Round to 7 x 3 = 21. Show the rounded values in your working." },
      { question: "Round 0.004567 to 2 significant figures.", accept: ["0.0046", ".0046"],
        answer: "0.0046. Significant figures start at the first non-zero digit, so the 4 is the first and the 5 is the second, which rounds the 5 up to 6." },
      { question: "A mass is 70 kg to the nearest 10 kg. What is the lower bound?", accept: ["65", "65kg"],
        answer: "65 kg. Half of 10 is 5, so the true value lies within 5 either side." },
      { question: "Work out (-4)^2", accept: ["16"], answer: "16. Squaring a negative gives a positive, because the two minus signs cancel." },
      { question: "Work out -4^2", accept: ["-16"],
        answer: "-16. Without brackets this means -(4^2), so square first and then apply the minus. Compare with (-4)^2 = 16." },
      { question: "Write 60 as a product of its prime factors, using index notation.",
        accept: ["2^2x3x5", "2^2 x 3 x 5", "2^2*3*5", "22x3x5", "2^2×3×5"],
        answer: "2^2 x 3 x 5. Build it with a factor tree: 60 = 6 x 10 = (2 x 3) x (2 x 5)." },
      { question: "Explain why estimation questions require you to show the rounded values.",
        answer: "Because the marks are for the METHOD — rounding each value to 1 significant figure and then calculating. The examiner cannot tell from a final number alone whether you estimated correctly or simply worked out the exact answer and rounded it, so an unsupported answer scores nothing even when it is close. (Mark this one yourself.)" },
    ],

    misconceptions: [
      { wrong: "\"1 is a prime number because you can only divide it by 1 and itself.\"",
        right: "A prime has exactly TWO distinct factors. For 1, 'itself' and '1' are the same number, so it has only one factor and is not prime." },
      { wrong: "\"Significant figures and decimal places are basically the same.\"",
        right: "They count from different places. 0.004567 to 2 decimal places is 0.00; to 2 significant figures it is 0.0046. Questions always specify which, and using the wrong one loses the mark." },
      { wrong: "\"BIDMAS means division always comes before multiplication.\"",
        right: "Division and multiplication have equal priority and are done left to right. The same is true of addition and subtraction. Treating the letters as a strict order gives wrong answers." },
      { wrong: "\"-4^2 and (-4)^2 are the same thing.\"",
        right: "(-4)^2 = 16 because the whole of -4 is squared. -4^2 = -16 because only the 4 is squared and the minus is applied afterwards. Calculators follow this rule strictly." },
      { wrong: "\"You should round as you go to keep the numbers manageable.\"",
        right: "Rounding early produces answers that are slightly wrong and lose the accuracy mark. Keep full precision throughout and round only the final answer." },
      { wrong: "\"34 x 10^7 is in standard form.\"",
        right: "It is not finished. The first part must be at least 1 and less than 10, so it must be rewritten as 3.4 x 10^8." },
    ],
  },

  "maths/algebra-basics": {
    summary:
      "Algebra is arithmetic with letters standing in for numbers you do not know yet. Once you accept that x behaves exactly like any other number, the rules stop feeling arbitrary. This topic covers writing and simplifying expressions, expanding and factorising, substituting values, and solving equations — the machinery the rest of the course runs on.",
    keyFacts: [
      {
        heading: "Notation and vocabulary",
        points: [
          "An expression has no equals sign: 3x + 2. An equation has one: 3x + 2 = 11. A formula relates variables: A = πr². An identity is true for all values, written with ≡.",
          "A term is a single part of an expression separated by + or −. A coefficient is the number in front of a letter.",
          "3x means 3 × x. x² means x × x. Never write x3 or 3 × x in a final answer.",
          "xy and yx are the same thing; write letters in alphabetical order by convention.",
        ],
      },
      {
        heading: "Simplifying",
        points: [
          "Collect like terms — terms with exactly the same letters and powers. 3x and 5x are like terms; 3x and 3x² are not.",
          "Multiplying: multiply numbers, then add the powers of matching letters. 3a² × 4a³ = 12a⁵.",
          "Dividing: divide numbers, subtract powers. 12a⁵ ÷ 4a² = 3a³.",
          "Take care with signs: −3x + 5x = 2x, but −3x − 5x = −8x.",
        ],
      },
      {
        heading: "Expanding brackets",
        points: [
          "Multiply every term inside the bracket by the term outside: 3(2x + 4) = 6x + 12.",
          "A negative outside changes both signs inside: −2(x − 3) = −2x + 6.",
          "Double brackets: multiply each term in the first by each in the second (FOIL). (x + 3)(x + 5) = x² + 8x + 15.",
          "(x + a)(x + b) always gives x² + (a + b)x + ab, which is a useful check.",
          "(x + 3)² means (x + 3)(x + 3), not x² + 9. This is one of the most common errors in GCSE maths.",
        ],
      },
      {
        heading: "Factorising",
        points: [
          "Factorising is expanding in reverse: put the brackets back in.",
          "Take out the highest common factor of every term: 6x + 9 = 3(2x + 3).",
          "Include letters in the common factor where possible: 4x² + 6x = 2x(2x + 3).",
          "Always check by expanding your answer — it must give back the original exactly.",
        ],
      },
      {
        heading: "Substitution",
        points: [
          "Replace each letter with its value, using brackets, then apply BIDMAS.",
          "If x = −3, then 2x² means 2 × (−3)² = 2 × 9 = 18, not −18.",
          "Write out the substituted expression before evaluating; it earns method marks and prevents sign errors.",
        ],
      },
      {
        heading: "Solving linear equations",
        points: [
          "Do the same thing to both sides to keep the equation balanced.",
          "Use inverse operations, undoing in reverse BIDMAS order.",
          "With letters on both sides, move all the letters to one side and all the numbers to the other — usually the side with more letters, to keep the coefficient positive.",
          "Expand any brackets first, and multiply through to clear fractions.",
          "Always check by substituting your answer back into the original equation.",
        ],
      },
      {
        heading: "Rearranging formulae and straight lines",
        points: [
          "To change the subject, use the same balancing method as solving an equation.",
          "A straight line has the form y = mx + c, where m is the gradient and c is the y-intercept.",
          "Gradient = change in y ÷ change in x. A positive gradient slopes up to the right, a negative one slopes down.",
          "Parallel lines have equal gradients.",
          "To plot, make a small table of x values, calculate y for each, plot and join with a ruled line.",
        ],
      },
    ],
    flashcards: [
      { term: "Expression", definition: "A collection of terms with no equals sign, such as 3x + 2." },
      { term: "Equation", definition: "A statement that two expressions are equal, containing an equals sign, which can be solved." },
      { term: "Formula", definition: "A rule connecting two or more variables, such as A = πr²." },
      { term: "Identity", definition: "A statement true for every value of the variable, written with the ≡ symbol." },
      { term: "Term", definition: "A single part of an expression, separated from others by a plus or minus sign." },
      { term: "Coefficient", definition: "The number multiplying a variable in a term; in 5x the coefficient is 5." },
      { term: "Like terms", definition: "Terms containing exactly the same letters raised to exactly the same powers, which can be added or subtracted." },
      { term: "Expand", definition: "To multiply out brackets so the expression is written without them." },
      { term: "Factorise", definition: "To write an expression as a product by putting brackets in, taking out common factors." },
      { term: "Substitution", definition: "Replacing letters in an expression with given numerical values." },
      { term: "Gradient", definition: "The steepness of a line, calculated as the change in y divided by the change in x." },
      { term: "y-intercept", definition: "The value of y where a line crosses the y-axis; the value of c in y = mx + c." },
      { term: "Inverse operation", definition: "The operation that undoes another: addition and subtraction, multiplication and division." },
    ],
    examTips: [
      {
        tip: "(x + 3)² is never x² + 9",
        detail:
          "It means (x + 3)(x + 3) = x² + 6x + 9. Examiners include this deliberately every year because so many candidates square each term separately.",
      },
      {
        tip: "Check factorising by expanding it back",
        detail:
          "It takes ten seconds and catches almost every error. If expanding your answer does not give the original expression exactly, something is wrong.",
      },
      {
        tip: "Use brackets whenever you substitute",
        detail:
          "Writing 2 × (−3)² instead of 2 × −3² prevents sign errors, and calculators treat the two differently.",
      },
      {
        tip: "Show every line when solving equations",
        detail:
          "Write what you do to both sides. Method marks are awarded for correct steps, so a slip in the last line still scores if the working is visible.",
      },
      {
        tip: "Substitute your answer back to check",
        detail:
          "If solving gives x = 4, put 4 into the original equation and confirm both sides match. This catches errors before you lose the marks.",
      },
      {
        tip: "Simplify fully or lose the final mark",
        detail:
          "If the question says simplify, keep going until nothing more can be collected or cancelled. Partially simplified answers usually score one mark short.",
      },
      {
        tip: "Read gradients from y = mx + c only after rearranging",
        detail:
          "In 2y = 6x + 4 the gradient is not 6. Divide through first to get y = 3x + 2, so the gradient is 3.",
      },
    ],

    workedExamples: [
      {
        question: "Expand and simplify (x + 3)(x + 5).",
        steps: [
          "Multiply every term in the first bracket by every term in the second.",
          "x x x = x^2",
          "x x 5 = 5x",
          "3 x x = 3x",
          "3 x 5 = 15",
          "Collect the like terms: 5x + 3x = 8x, giving x^2 + 8x + 15.",
          "Check with the pattern (x + a)(x + b) = x^2 + (a + b)x + ab: 3 + 5 = 8 and 3 x 5 = 15. ✓",
        ],
        answer: "x^2 + 8x + 15",
      },
      {
        question: "Solve 5x − 3 = 2x + 9.",
        steps: [
          "Gather the letters on the side with more of them, to keep the coefficient positive. Subtract 2x from both sides: 3x − 3 = 9.",
          "Now move the number. Add 3 to both sides: 3x = 12.",
          "Divide both sides by 3: x = 4.",
          "Check by substituting back into the ORIGINAL equation: left side 5(4) − 3 = 17; right side 2(4) + 9 = 17. ✓",
        ],
        answer: "x = 4",
      },
      {
        question: "Factorise 12x^2 + 18x fully.",
        steps: [
          "Find the highest common factor of the numbers: HCF of 12 and 18 is 6.",
          "Find the highest common factor of the letters: both terms contain x, so take x.",
          "The full common factor is therefore 6x.",
          "Divide each term by 6x: 12x^2 ÷ 6x = 2x, and 18x ÷ 6x = 3.",
          "Write it as 6x(2x + 3).",
          "Check by expanding: 6x x 2x = 12x^2 and 6x x 3 = 18x. ✓",
        ],
        answer: "6x(2x + 3)",
      },
      {
        question: "Find the gradient and y-intercept of the line 2y = 6x + 4.",
        steps: [
          "The equation must be in the form y = mx + c before you can read anything off it.",
          "At the moment the left side is 2y, not y, so divide EVERY term by 2.",
          "2y ÷ 2 = y; 6x ÷ 2 = 3x; 4 ÷ 2 = 2.",
          "That gives y = 3x + 2.",
          "Now read off: m is the gradient and c is the y-intercept.",
        ],
        answer: "Gradient 3, y-intercept 2. Reading 6 and 4 straight off the original is the classic error.",
      },
    ],

    practice: [
      { question: "Simplify 5x + 3x", accept: ["8x"], answer: "8x. These are like terms, so their coefficients add." },
      { question: "Simplify 4x − 7x", accept: ["-3x"], answer: "-3x. Take care with the sign: 4 − 7 = −3." },
      { question: "Expand 3(2x + 4)", accept: ["6x+12", "6x + 12"], answer: "6x + 12. Multiply everything inside the bracket by the term outside." },
      { question: "Expand -2(x - 3)", accept: ["-2x+6", "-2x + 6", "6-2x"],
        answer: "-2x + 6. A negative outside the bracket changes BOTH signs inside." },
      { question: "Expand and simplify (x + 2)(x + 5)", accept: ["x^2+7x+10", "x^2 + 7x + 10", "x²+7x+10"],
        answer: "x^2 + 7x + 10. Check with the pattern: 2 + 5 = 7 and 2 x 5 = 10." },
      { question: "Expand (x + 3)^2", accept: ["x^2+6x+9", "x^2 + 6x + 9", "x²+6x+9"],
        answer: "x^2 + 6x + 9. It means (x + 3)(x + 3) — NOT x^2 + 9." },
      { question: "Factorise 6x + 9", accept: ["3(2x+3)", "3(2x + 3)"], answer: "3(2x + 3). The HCF of 6 and 9 is 3." },
      { question: "Factorise 4x^2 + 6x", accept: ["2x(2x+3)", "2x(2x + 3)"],
        answer: "2x(2x + 3). Include the letter in the common factor where possible." },
      { question: "Solve 3x + 7 = 22", accept: ["5", "x=5", "x = 5"], answer: "x = 5. Subtract 7 to get 3x = 15, then divide by 3." },
      { question: "Solve 5x − 3 = 2x + 9", accept: ["4", "x=4", "x = 4"],
        answer: "x = 4. Subtract 2x from both sides, then add 3, then divide by 3." },
      { question: "Solve 2(x + 3) = 14", accept: ["4", "x=4", "x = 4"],
        answer: "x = 4. Expand to 2x + 6 = 14, or divide both sides by 2 first to get x + 3 = 7." },
      { question: "If x = -3, work out the value of 2x^2", accept: ["18"],
        answer: "18. Square first: (-3)^2 = 9, then 2 x 9 = 18. Using brackets when you substitute prevents the sign error here." },
      { question: "Simplify 3a^2 x 4a^3", accept: ["12a^5", "12a5", "12a⁵"],
        answer: "12a^5. Multiply the numbers and ADD the powers." },
      { question: "Simplify 12a^5 ÷ 4a^2", accept: ["3a^3", "3a3", "3a³"],
        answer: "3a^3. Divide the numbers and SUBTRACT the powers." },
      { question: "What is the gradient of the line y = 3x + 2?", accept: ["3"],
        answer: "3. In y = mx + c, m is the gradient and c is the y-intercept." },
      { question: "What is the gradient of the line 2y = 8x + 6?", accept: ["4"],
        answer: "4. Divide every term by 2 first to get y = 4x + 3. Reading 8 straight off the unrearranged equation is the classic error." },
      { question: "Explain the difference between an expression, an equation and a formula.",
        answer: "An expression is a collection of terms with no equals sign, such as 3x + 2 — it can be simplified but not solved. An equation contains an equals sign and can be solved for an unknown, such as 3x + 2 = 11. A formula is a rule connecting two or more variables, such as A = pi r^2, and can be rearranged to make a different variable the subject. (Mark this one yourself.)" },
      { question: "Explain why checking a factorised answer by expanding it is worth the time.",
        answer: "Because expanding is quick and mechanical, and it verifies the whole answer at once. If expanding does not reproduce the original expression exactly, something is wrong and you can fix it before losing the marks. It catches the two commonest errors — taking out a factor that is not the highest, and getting a sign wrong — in about ten seconds. (Mark this one yourself.)" },
    ],

    misconceptions: [
      { wrong: "\"(x + 3)^2 = x^2 + 9\"",
        right: "It means (x + 3)(x + 3) = x^2 + 6x + 9. Squaring each term separately loses the middle term entirely. Examiners include this deliberately every single year." },
      { wrong: "\"In 2y = 6x + 4 the gradient is 6.\"",
        right: "You must rearrange into y = mx + c first. Dividing through by 2 gives y = 3x + 2, so the gradient is 3." },
      { wrong: "\"3x and 3x^2 are like terms because they both have an x.\"",
        right: "Like terms need identical letters raised to identical powers. 3x and 3x^2 cannot be added, in the same way that a length and an area cannot be added." },
      { wrong: "\"When substituting a negative number you can leave out the brackets.\"",
        right: "Substituting x = -3 into 2x^2 gives 2 x (-3)^2 = 18, not -18. Without brackets the calculator squares only the 3 and applies the minus afterwards." },
      { wrong: "\"Once I have an answer I don't need to write the steps.\"",
        right: "Method marks are awarded for correct working. A slip in the final line still scores most of the marks if the steps are visible, and scores nothing if they are not." },
      { wrong: "\"Factorising means taking out any common factor.\"",
        right: "'Factorise fully' means taking out the HIGHEST common factor, including letters. 2(6x + 9) is not fully factorised — the answer is 3(2x + 3)." },
    ],
  },

  "maths/angles-and-2d-shapes": {
    summary:
      "Geometry at GCSE is mostly about knowing a fixed set of angle facts and being able to say which one you used. The calculations are rarely hard; the marks are in the reasons. This topic covers angle rules, properties of shapes, polygons, and the area and perimeter formulae you are expected to know by heart.",
    keyFacts: [
      {
        heading: "Basic angle facts",
        points: [
          "Angles on a straight line add to 180°.",
          "Angles around a point add to 360°.",
          "Vertically opposite angles are equal.",
          "Angles in a triangle add to 180°.",
          "Angles in a quadrilateral add to 360°.",
        ],
      },
      {
        heading: "Parallel lines",
        points: [
          "Corresponding angles are equal — they form an F shape.",
          "Alternate angles are equal — they form a Z shape.",
          "Co-interior (allied) angles add to 180° — they form a C or U shape.",
          "Use the proper names in your reasoning. 'They look the same' earns nothing; 'alternate angles are equal' earns the mark.",
        ],
      },
      {
        heading: "Triangles",
        points: [
          "Equilateral: all sides equal, all angles 60°.",
          "Isosceles: two equal sides and two equal base angles.",
          "Scalene: all sides and angles different.",
          "Right-angled: contains one 90° angle.",
          "The exterior angle of a triangle equals the sum of the two opposite interior angles.",
        ],
      },
      {
        heading: "Quadrilaterals",
        points: [
          "Square: four equal sides, four right angles, diagonals equal and bisect at right angles.",
          "Rectangle: opposite sides equal, four right angles, diagonals equal.",
          "Parallelogram: opposite sides parallel and equal, opposite angles equal.",
          "Rhombus: four equal sides, opposite angles equal, diagonals bisect at right angles.",
          "Trapezium: exactly one pair of parallel sides.",
          "Kite: two pairs of adjacent equal sides, one pair of opposite angles equal.",
        ],
      },
      {
        heading: "Polygons",
        points: [
          "Sum of interior angles = (n − 2) × 180°, where n is the number of sides.",
          "Sum of exterior angles of any polygon = 360°, always, regardless of the number of sides.",
          "For a regular polygon, each exterior angle = 360° ÷ n.",
          "Each interior angle = 180° − exterior angle.",
          "Working via the exterior angle is almost always quicker than using the interior sum.",
        ],
      },
      {
        heading: "Area and perimeter",
        points: [
          "Rectangle: area = length × width.",
          "Triangle: area = ½ × base × perpendicular height. The height must be perpendicular, not a slanted side.",
          "Parallelogram: area = base × perpendicular height.",
          "Trapezium: area = ½ × (a + b) × h, where a and b are the parallel sides.",
          "Circle: area = πr², circumference = 2πr = πd.",
          "For compound shapes, split into simple shapes, work out each, then add or subtract.",
        ],
      },
      {
        heading: "Congruence and similarity",
        points: [
          "Congruent shapes are identical in shape and size, though they may be rotated or reflected.",
          "Similar shapes have the same shape but different size — all angles equal and all sides in the same ratio.",
          "The scale factor is the ratio of corresponding sides on similar shapes.",
          "Conditions for congruent triangles: SSS, SAS, ASA, RHS.",
        ],
      },
    ],
    flashcards: [
      { term: "Vertically opposite angles", definition: "The equal angles formed opposite each other where two straight lines cross." },
      { term: "Corresponding angles", definition: "Equal angles in matching positions where a line crosses two parallel lines, forming an F shape." },
      { term: "Alternate angles", definition: "Equal angles on opposite sides of a line crossing two parallel lines, forming a Z shape." },
      { term: "Co-interior angles", definition: "Angles on the same side of a line crossing two parallel lines, which add up to 180 degrees." },
      { term: "Exterior angle", definition: "The angle between one side of a polygon and the extension of the adjacent side." },
      { term: "Regular polygon", definition: "A polygon with all sides equal in length and all interior angles equal." },
      { term: "Isosceles triangle", definition: "A triangle with two equal sides and two equal base angles." },
      { term: "Parallelogram", definition: "A quadrilateral with two pairs of parallel sides, where opposite sides and opposite angles are equal." },
      { term: "Trapezium", definition: "A quadrilateral with exactly one pair of parallel sides." },
      { term: "Congruent", definition: "Identical in both shape and size, although possibly rotated or reflected." },
      { term: "Similar", definition: "The same shape but a different size, with equal angles and sides in a fixed ratio." },
      { term: "Scale factor", definition: "The ratio by which lengths are multiplied to go from one similar shape to another." },
      { term: "Perpendicular height", definition: "The height measured at right angles to the base, used in area formulae." },
    ],
    examTips: [
      {
        tip: "Give a reason for every angle you work out",
        detail:
          "Most angle questions award one mark for the value and one for the reason. Write the rule by name: 'angles on a straight line add to 180°'. No reason, no second mark.",
      },
      {
        tip: "Use exterior angles for polygon questions",
        detail:
          "Exterior angles always total 360°, so for a regular polygon each one is 360 ÷ n. This is quicker and less error-prone than the interior angle sum.",
      },
      {
        tip: "Use the perpendicular height, not the sloping side",
        detail:
          "Triangle and parallelogram questions often give both, deliberately. Using the slanted length is a guaranteed lost mark.",
      },
      {
        tip: "Fill in every angle you can as you go",
        detail:
          "Write values straight onto the diagram. Multi-step angle problems become easy once the intermediate angles are visible.",
      },
      {
        tip: "Know the difference between area and perimeter units",
        detail:
          "Perimeter is a length in cm; area is in cm². Missing or wrong units cost marks even when the number is right.",
      },
      {
        tip: "Leave answers in terms of π when asked",
        detail:
          "If a question says 'give your answer in terms of π', write 25π, not 78.5. Evaluating it loses the mark.",
      },
      {
        tip: "Name the congruence condition exactly",
        detail:
          "SSS, SAS, ASA or RHS. Proving triangles congruent requires you to state which condition you have satisfied, not just that the sides look equal.",
      },
    ],

    workedExamples: [
      {
        question: "Find the size of one interior angle of a regular pentagon.",
        steps: [
          "Use exterior angles — it is almost always quicker than the interior angle sum.",
          "The exterior angles of ANY polygon add to 360 degrees.",
          "A pentagon is regular, so all five exterior angles are equal: 360 ÷ 5 = 72 degrees.",
          "An interior angle and its exterior angle sit on a straight line, so they add to 180.",
          "Interior angle = 180 − 72 = 108 degrees.",
        ],
        answer: "108 degrees",
      },
      {
        question: "A triangle has angles of 47 and 68 degrees. Find the third angle and give a reason.",
        steps: [
          "Add the two known angles: 47 + 68 = 115 degrees.",
          "Angles in a triangle add to 180 degrees — this is the reason, and it carries its own mark.",
          "Subtract: 180 − 115 = 65 degrees.",
          "Write the reason down. Most angle questions award one mark for the value and one for naming the rule.",
        ],
        answer: "65 degrees, because angles in a triangle add up to 180 degrees.",
      },
      {
        question: "Find the area of a trapezium with parallel sides 4 cm and 8 cm, and a perpendicular height of 5 cm.",
        steps: [
          "The formula is area = ½ x (a + b) x h, where a and b are the parallel sides.",
          "Add the parallel sides: 4 + 8 = 12.",
          "Halve it: 12 ÷ 2 = 6.",
          "Multiply by the perpendicular height: 6 x 5 = 30.",
          "Give the units: area is measured in cm squared.",
        ],
        answer: "30 cm²",
      },
      {
        question: "Two parallel lines are crossed by a straight line. One angle is 112 degrees. Find the co-interior angle and justify it.",
        steps: [
          "Identify the relationship: co-interior angles sit on the SAME side of the crossing line, between the two parallel lines — they form a C or U shape.",
          "The rule is that co-interior angles add to 180 degrees.",
          "So the missing angle is 180 − 112 = 68 degrees.",
          "State the reason by name: 'co-interior angles add to 180 degrees'. Saying 'they look right' earns nothing.",
        ],
        answer: "68 degrees, because co-interior angles add up to 180 degrees.",
      },
    ],

    practice: [
      { question: "What do angles in a triangle add up to, in degrees?", accept: ["180", "180 degrees"],
        answer: "180 degrees. Always quote the rule as your reason, since it usually carries its own mark." },
      { question: "What do angles in a quadrilateral add up to, in degrees?", accept: ["360", "360 degrees"],
        answer: "360 degrees, which is two triangles' worth." },
      { question: "What do the exterior angles of ANY polygon add up to?", accept: ["360", "360 degrees"],
        answer: "360 degrees, regardless of the number of sides. This makes exterior angles the quick route into polygon questions." },
      { question: "What is the size of each exterior angle of a regular hexagon?", accept: ["60", "60 degrees"],
        answer: "60 degrees, because 360 ÷ 6 = 60." },
      { question: "What is the size of each interior angle of a regular hexagon?", accept: ["120", "120 degrees"],
        answer: "120 degrees. The exterior angle is 60, and interior = 180 − exterior." },
      { question: "What do the interior angles of a pentagon add up to?", accept: ["540", "540 degrees"],
        answer: "540 degrees, from (n − 2) x 180 = 3 x 180." },
      { question: "A regular polygon has an exterior angle of 45 degrees. How many sides does it have?", accept: ["8", "eight"],
        answer:
          "8, because the exterior angles total 360 and 360 ÷ 45 = 8." },
      { question: "Find the area of a triangle with base 10 cm and perpendicular height 6 cm, in cm².",
        accept: ["30", "30cm2", "30cm²"], answer: "30 cm². Area = ½ x base x perpendicular height = ½ x 10 x 6." },
      { question: "Find the area of a parallelogram with base 7 cm and perpendicular height 4 cm, in cm².",
        accept: ["28", "28cm2", "28cm²"], answer: "28 cm². Area = base x perpendicular height — use the perpendicular height, never the slanted side." },
      { question: "Find the area of a circle with radius 5 cm, in terms of pi.",
        accept: ["25pi", "25π", "25 pi"], answer: "25pi cm². Area = pi r², so pi x 5² = 25pi. Leave pi in when the question says 'in terms of pi'." },
      { question: "Find the circumference of a circle with radius 5 cm, in terms of pi.",
        accept: ["10pi", "10π", "10 pi"], answer: "10pi cm. Circumference = 2 pi r = 2 x pi x 5." },
      { question: "What do angles on a straight line add up to, in degrees?", accept: ["180", "180 degrees"],
        answer: "180 degrees. This and 'angles around a point add to 360' cover a huge number of questions." },
      { question: "What do angles around a point add up to, in degrees?", accept: ["360", "360 degrees"],
        answer: "360 degrees, a complete turn." },
      { question: "What is the size of each angle in an equilateral triangle?", accept: ["60", "60 degrees"],
        answer: "60 degrees, because all three angles are equal and they total 180." },
      { question: "Two parallel lines are crossed by a line. The angles that form a Z shape are called what?",
        accept: ["alternate", "alternate angles"], answer: "Alternate angles, and they are equal. Corresponding angles form an F shape and are also equal." },
      { question: "Co-interior angles add up to how many degrees?", accept: ["180", "180 degrees"],
        answer: "180 degrees. They form a C or U shape between two parallel lines." },
      { question: "Explain why exterior angles are usually a quicker route into polygon questions than interior angles.",
        answer: "Because the exterior angles of every polygon total 360 degrees regardless of how many sides it has, so for a regular polygon each one is simply 360 divided by the number of sides — a single division. The interior route needs (n − 2) x 180 and then a further division, which is two steps and two chances to slip. (Mark this one yourself.)" },
      { question: "Explain why a reason must be given for each angle you calculate, even when the arithmetic is obvious.",
        answer: "Because most angle questions award one mark for the value and a separate mark for the justification. The examiner is assessing whether you know WHICH geometric rule applies, not just whether you can subtract. 'Angles on a straight line add to 180 degrees' earns the second mark; the number alone does not. (Mark this one yourself.)" },
    ],

    misconceptions: [
      { wrong: "\"You can use the slanted side as the height of a triangle.\"",
        right: "Area formulas need the PERPENDICULAR height — the distance measured at right angles to the base. Questions often give both lengths deliberately, and using the slanted one is a guaranteed lost mark." },
      { wrong: "\"Interior angles of a polygon add to 360 degrees.\"",
        right: "That is the EXTERIOR angles, which total 360 for every polygon. Interior angles total (n − 2) x 180, so a pentagon gives 540 and a hexagon 720." },
      { wrong: "\"Giving the correct angle is enough for full marks.\"",
        right: "Most angle questions carry a separate mark for the reason. Name the rule — 'vertically opposite angles are equal', 'co-interior angles add to 180' — or you lose half the marks on questions you got right." },
      { wrong: "\"Area and perimeter use the same units.\"",
        right: "Perimeter is a length, measured in cm. Area is measured in cm squared. Missing or wrong units cost marks even when the number is correct." },
      { wrong: "\"'In terms of pi' means work out the decimal.\"",
        right: "It means leave pi in the answer: 25pi, not 78.5. Evaluating it is doing extra work to lose the mark." },
      { wrong: "\"A trapezium's area formula needs the slanted sides.\"",
        right: "Area = ½ (a + b) h uses the two PARALLEL sides and the perpendicular height. The slanted sides play no part in the area at all." },
    ],
  },

  "maths/fractions-decimals-percentages": {
    summary:
      "Three different ways of writing the same thing. Being able to move fluently between them, and to handle percentage change with multipliers rather than by finding chunks and adding, is what separates a slow, error-prone approach from a fast, reliable one — especially on the non-calculator paper.",
    keyFacts: [
      {
        heading: "Converting between forms",
        points: [
          "Fraction to decimal: divide the numerator by the denominator.",
          "Decimal to percentage: multiply by 100. Percentage to decimal: divide by 100.",
          "Percentage to fraction: write over 100 and simplify. 35% = 35/100 = 7/20.",
          "Worth memorising: 1/2 = 0.5 = 50%, 1/4 = 0.25 = 25%, 1/3 ≈ 0.333 = 33⅓%, 1/5 = 0.2 = 20%, 1/8 = 0.125 = 12.5%, 1/10 = 0.1 = 10%.",
        ],
      },
      {
        heading: "Adding and subtracting fractions",
        points: [
          "Find a common denominator first — the LCM of the denominators is the most efficient choice.",
          "Convert each fraction, then add or subtract only the numerators. The denominator does not change.",
          "With mixed numbers, either convert to improper fractions first, or deal with whole numbers and fractions separately.",
          "Simplify the final answer, and convert back to a mixed number if the question started with one.",
        ],
      },
      {
        heading: "Multiplying and dividing fractions",
        points: [
          "To multiply: multiply the numerators, multiply the denominators, then simplify. No common denominator needed.",
          "To divide: turn the second fraction upside down and multiply — 'keep, flip, change'.",
          "Convert mixed numbers to improper fractions before multiplying or dividing.",
          "Cancel common factors before multiplying to keep the numbers small.",
        ],
      },
      {
        heading: "Percentages of amounts",
        points: [
          "Non-calculator: build from 10% (divide by 10), 1% (divide by 100), 50% (halve), 25% (halve twice).",
          "Calculator: multiply by the decimal equivalent. 35% of 80 is 0.35 × 80.",
          "To write one number as a percentage of another, divide then multiply by 100.",
        ],
      },
      {
        heading: "Percentage change with multipliers",
        points: [
          "Increase by 20%: multiply by 1.2. Decrease by 20%: multiply by 0.8.",
          "The multiplier is 1 + (percentage ÷ 100) for an increase, 1 − (percentage ÷ 100) for a decrease.",
          "Percentage change = (change ÷ original) × 100. It is always divided by the ORIGINAL value.",
          "Repeated change: multiply by the multiplier once for each time period. Compound interest = P × (multiplier)^n.",
          "Reverse percentage: if a price after a 20% increase is £60, divide by the multiplier — 60 ÷ 1.2 = £50. Do not subtract 20%.",
        ],
      },
      {
        heading: "Recurring decimals and irrational numbers",
        points: [
          "A terminating decimal stops; a recurring decimal repeats forever and is shown with a dot over the repeating digits.",
          "Any fraction with whole numbers on top and bottom is rational and gives either a terminating or recurring decimal.",
          "An irrational number cannot be written as a fraction — π and √2 are the standard examples.",
          "A fraction terminates only if its denominator, in simplest form, has prime factors of just 2 and 5.",
        ],
      },
    ],
    flashcards: [
      { term: "Numerator", definition: "The top number of a fraction, showing how many parts are being counted." },
      { term: "Denominator", definition: "The bottom number of a fraction, showing how many equal parts the whole is divided into." },
      { term: "Improper fraction", definition: "A fraction where the numerator is larger than the denominator." },
      { term: "Mixed number", definition: "A number written as a whole number together with a proper fraction." },
      { term: "Equivalent fractions", definition: "Fractions with the same value, produced by multiplying or dividing top and bottom by the same number." },
      { term: "Multiplier", definition: "The single number you multiply by to apply a percentage change, such as 1.15 for a 15% increase." },
      { term: "Percentage change", definition: "The change divided by the original amount, multiplied by 100." },
      { term: "Reverse percentage", definition: "Finding the original amount before a percentage change, by dividing by the multiplier." },
      { term: "Compound interest", definition: "Interest calculated on the original amount plus all interest already added, found using a repeated multiplier." },
      { term: "Simple interest", definition: "Interest calculated only on the original amount, the same each period." },
      { term: "Recurring decimal", definition: "A decimal with a digit or group of digits that repeats forever, shown with a dot above." },
      { term: "Rational number", definition: "A number that can be written as a fraction of two integers." },
      { term: "Irrational number", definition: "A number that cannot be written as a fraction, such as π or the square root of 2." },
    ],
    examTips: [
      {
        tip: "Use multipliers, not two-step percentage working",
        detail:
          "Finding 20% and adding it on is slow and doubles the chances of an arithmetic slip. One multiplication by 1.2 is faster and shows a stronger method.",
      },
      {
        tip: "Reverse percentages need division, never subtraction",
        detail:
          "If £60 is the price after a 20% rise, the original is 60 ÷ 1.2 = £50. Subtracting 20% gives £48, which is wrong. This is examined most years.",
      },
      {
        tip: "Percentage change divides by the ORIGINAL",
        detail:
          "Always the starting value, never the new one. Dividing by the wrong figure gives a plausible-looking answer that scores nothing.",
      },
      {
        tip: "Never add or subtract fractions without a common denominator",
        detail:
          "1/2 + 1/3 is not 2/5. Convert to sixths first. This is the single most common fraction error at GCSE.",
      },
      {
        tip: "Convert mixed numbers before multiplying or dividing",
        detail:
          "Turn them into improper fractions first. Multiplying the whole parts and fraction parts separately does not work.",
      },
      {
        tip: "Memorise the common conversions",
        detail:
          "On the non-calculator paper, instantly knowing 1/8 = 12.5% saves time you will need for the harder questions later in the paper.",
      },
      {
        tip: "For compound interest, use the power",
        detail:
          "Five years at 3% is × 1.03^5, not × 1.03 × 5. Simple and compound interest give different answers and questions specify which.",
      },
    ],

    workedExamples: [
      {
        question: "Work out 1/2 + 1/3.",
        steps: [
          "You cannot add fractions until the denominators match.",
          "Find the lowest common multiple of 2 and 3, which is 6.",
          "Convert each fraction to sixths: 1/2 = 3/6, and 1/3 = 2/6.",
          "Now add only the numerators: 3 + 2 = 5. The denominator stays as 6.",
          "Check whether it simplifies: 5 and 6 share no factors, so 5/6 is the final answer.",
        ],
        answer: "5/6",
      },
      {
        question: "The price of a coat after a 20% increase is £60. Find the original price.",
        steps: [
          "This is a reverse percentage. Do NOT subtract 20% from £60.",
          "Work out the multiplier for a 20% increase: 1 + 0.20 = 1.2.",
          "The original price was multiplied by 1.2 to give £60.",
          "So to undo it, DIVIDE by the multiplier: 60 ÷ 1.2 = 50.",
          "Check by going forwards: 50 x 1.2 = 60. ✓  (Subtracting 20% would have given £48, which is wrong.)",
        ],
        answer: "£50",
      },
      {
        question: "£1000 is invested at 3% compound interest for 2 years. Find the value at the end.",
        steps: [
          "Compound means the interest earns interest, so use a repeated multiplier — not simple interest.",
          "Multiplier for a 3% increase: 1.03.",
          "Apply it once per year, so raise it to the power of the number of years: 1000 x 1.03^2.",
          "1.03^2 = 1.0609.",
          "1000 x 1.0609 = 1060.90.",
        ],
        answer: "£1060.90",
      },
      {
        question: "A value rises from 40 to 50. Calculate the percentage increase.",
        steps: [
          "Find the change: 50 − 40 = 10.",
          "Percentage change = (change ÷ ORIGINAL) x 100. The original is 40, not 50.",
          "10 ÷ 40 = 0.25.",
          "0.25 x 100 = 25%.",
          "Dividing by 50 would give 20%, which is the classic error — always divide by the starting value.",
        ],
        answer: "25% increase",
      },
    ],

    practice: [
      { question: "Work out 1/2 + 1/3. Give your answer as a fraction.", accept: ["5/6"],
        answer: "5/6. Convert both to sixths first: 3/6 + 2/6." },
      { question: "Work out 3/4 x 2/5. Give your answer in its simplest form.", accept: ["3/10"],
        answer: "3/10. Multiply the tops and bottoms to get 6/20, then simplify by dividing both by 2." },
      { question: "Work out 1/2 ÷ 1/4", accept: ["2", "2/1"],
        answer: "2. Keep, flip, change: 1/2 x 4/1 = 4/2 = 2." },
      { question: "What is 25% of 80?", accept: ["20"], answer: "20. A quarter of 80 — halve it twice." },
      { question: "Increase 40 by 20%.", accept: ["48"], answer: "48. Multiply by 1.2, which is faster and safer than finding 20% and adding it on." },
      { question: "Decrease 50 by 10%.", accept: ["45"], answer:
          "45. Multiply by the decrease multiplier 0.9, rather than finding 10% and subtracting." },
      { question: "What is the multiplier for a 15% increase?", accept: ["1.15"],
        answer: "1.15. The multiplier is 1 + (percentage ÷ 100)." },
      { question: "What is the multiplier for a 20% decrease?", accept: ["0.8", ".8"],
        answer: "0.8. The multiplier is 1 − (percentage ÷ 100)." },
      { question: "After a 20% increase a price is £60. What was the original price in pounds?", accept: ["50", "£50"],
        answer: "£50. Divide by the multiplier: 60 ÷ 1.2. Subtracting 20% gives £48, which is wrong." },
      { question: "A value rises from 40 to 50. What is the percentage increase?", accept: ["25", "25%"],
        answer: "25%. Change ÷ ORIGINAL x 100 = 10 ÷ 40 x 100." },
      { question: "£1000 is invested at 3% compound interest for 2 years. What is it worth, in pounds?",
        accept: ["1060.90", "1060.9", "£1060.90", "1060"],
        answer: "£1060.90. Use 1000 x 1.03^2 — the power is what makes it compound rather than simple." },
      { question: "Write 0.35 as a fraction in its simplest form.", accept: ["7/20"],
        answer: "7/20. Start with 35/100 and divide both parts by 5." },
      { question: "Write 1/8 as a percentage.", accept: ["12.5", "12.5%"], answer: "12.5%. Worth memorising along with 1/2, 1/4, 1/5 and 1/10." },
      { question: "Write 3/5 as a decimal.", accept: ["0.6", ".6"], answer: "0.6. Divide the numerator by the denominator: 3 ÷ 5." },
      { question: "Write 45% as a decimal.", accept: ["0.45", ".45"], answer: "0.45. Divide the percentage by 100." },
      { question: "Does 1/3 give a terminating or a recurring decimal?", accept: ["recurring"],
        answer: "Recurring — 0.333... A fraction terminates only if its denominator in simplest form has prime factors of just 2 and 5, and 3 is neither." },
      { question: "Explain why reverse percentage problems require division rather than subtraction.",
        answer: "Because the percentage was applied to the ORIGINAL amount, not the new one. If £50 rises by 20%, the increase is 20% of 50, which is £10. Taking 20% off the new £60 removes 20% of 60, which is £12 — a different quantity. Dividing by the multiplier exactly undoes the multiplication that created the new value. (Mark this one yourself.)" },
      { question: "Explain the difference between simple and compound interest, and which gives more over several years.",
        answer: "Simple interest is calculated only on the original amount, so the same sum is added each period. Compound interest is calculated on the original amount plus all interest already added, so each period earns slightly more than the last. Over more than one period compound always gives more, and the gap widens the longer the money is invested. (Mark this one yourself.)" },
    ],

    misconceptions: [
      { wrong: "\"1/2 + 1/3 = 2/5\"",
        right: "You cannot add numerators and denominators. Convert to a common denominator first: 3/6 + 2/6 = 5/6. This is the single most common fraction error at GCSE." },
      { wrong: "\"To reverse a 20% increase, take 20% off the new price.\"",
        right: "Divide by the multiplier instead. £60 after a 20% rise came from 60 ÷ 1.2 = £50. Subtracting 20% gives £48, because 20% of 60 is not the same as 20% of 50." },
      { wrong: "\"Percentage change is the change divided by the new value.\"",
        right: "Always divide by the ORIGINAL value. A rise from 40 to 50 is 10 ÷ 40 = 25%, not 10 ÷ 50 = 20%." },
      { wrong: "\"Compound interest for 5 years means multiplying the interest by 5.\"",
        right: "Use the multiplier raised to a power: x 1.03^5, not x 1.03 x 5. Multiplying by 5 gives simple interest, which is a different and smaller answer." },
      { wrong: "\"You can multiply mixed numbers by multiplying the whole parts and the fractions separately.\"",
        right: "Convert to improper fractions first. 1½ x 2½ is not 2¼ — it is 3/2 x 5/2 = 15/4 = 3¾." },
      { wrong: "\"Finding 20% and adding it on is the same as using a multiplier, so it doesn't matter which.\"",
        right: "Both give the right answer, but the two-step method doubles the chances of an arithmetic slip and is far slower over a whole paper. One multiplication by 1.2 is the method examiners expect to see at this level." },
    ],
  },

  // ─────────────────────────── YEAR 10 ──────────────────────────

  "maths/ratio-and-proportion": {
    summary:
      "Ratio compares parts to parts; proportion links two quantities that change together. These ideas run through recipes, maps, currency, speed, density and best-value problems — and they appear on every GCSE paper, usually dressed up as a real-world scenario.",
    keyFacts: [
      {
        heading: "Understanding and simplifying ratio",
        points: [
          "A ratio compares quantities: 3 : 5 means for every 3 of the first there are 5 of the second.",
          "Simplify by dividing all parts by their highest common factor.",
          "Units must match before simplifying — convert first, then simplify.",
          "In the form 1 : n, divide both parts by the first number. This form is used for map scales.",
        ],
      },
      {
        heading: "Sharing in a ratio",
        points: [
          "Add the parts to find the total number of parts.",
          "Divide the total amount by the number of parts to find the value of one part.",
          "Multiply by each share. Always check your answers add back to the original total.",
          "If told the DIFFERENCE between shares, work out how many parts that difference represents first.",
        ],
      },
      {
        heading: "Ratio and fractions",
        points: [
          "In a ratio of 2 : 3, the first quantity is 2/5 of the total, not 2/3.",
          "The fraction denominator is the TOTAL parts; the ratio compares parts to each other.",
          "Confusing these two is the most common ratio error at GCSE.",
        ],
      },
      {
        heading: "Direct and inverse proportion",
        points: [
          "Direct proportion: as one increases, the other increases at the same rate. Written y ∝ x, so y = kx. The graph is a straight line through the origin.",
          "Inverse proportion: as one increases, the other decreases. Written y ∝ 1/x, so y = k/x. The graph is a curve.",
          "To solve: use the given pair of values to find k, then use that equation for the new value.",
          "The unitary method — find the value of one, then scale up — works for most direct proportion questions.",
        ],
      },
      {
        heading: "Best value and exchange",
        points: [
          "Compare either price per unit or units per pound, but be consistent across all options.",
          "State clearly which is better value AND give the comparable figures — the conclusion alone rarely gets full marks.",
          "For currency, multiply or divide by the exchange rate, checking which direction makes the answer sensible.",
        ],
      },
      {
        heading: "Compound measures",
        points: [
          "Speed = distance ÷ time. Distance = speed × time. Time = distance ÷ speed.",
          "Density = mass ÷ volume. Pressure = force ÷ area.",
          "Units reveal the formula: m/s is metres divided by seconds, so speed is distance over time.",
          "Convert units before calculating. Mixing km with metres, or minutes with hours, is the usual source of error.",
          "2 hours 30 minutes is 2.5 hours, not 2.3.",
        ],
      },
    ],
    flashcards: [
      { term: "Ratio", definition: "A comparison of two or more quantities showing their relative sizes." },
      { term: "Proportion", definition: "A relationship where two quantities change together at a constant rate." },
      { term: "Direct proportion", definition: "A relationship where one quantity increases as the other increases at the same rate, of the form y = kx." },
      { term: "Inverse proportion", definition: "A relationship where one quantity increases as the other decreases, of the form y = k/x." },
      { term: "Unitary method", definition: "Finding the value of one unit first, then multiplying to find the value of the required amount." },
      { term: "Constant of proportionality", definition: "The fixed value k that links two quantities in a proportional relationship." },
      { term: "Speed", definition: "Distance travelled divided by the time taken." },
      { term: "Density", definition: "Mass divided by volume." },
      { term: "Pressure", definition: "Force divided by area." },
      { term: "Scale factor", definition: "The number by which lengths are multiplied when a shape or map is enlarged or reduced." },
      { term: "Best value", definition: "The option giving the lowest price per unit, or the most units per unit of currency." },
    ],
    examTips: [
      {
        tip: "In a ratio of 2 : 3, the first share is 2/5 of the total",
        detail:
          "Not 2/3. The fraction's denominator is the total number of parts. Writing 2/3 is the classic error and it will cost you the whole question.",
      },
      {
        tip: "Check shares add back to the total",
        detail:
          "A five-second check that catches nearly every arithmetic slip in sharing questions.",
      },
      {
        tip: "Convert units before you start, not after",
        detail:
          "Compound measure questions mix minutes with hours and grams with kilograms on purpose. Sort the units out first and the arithmetic becomes trivial.",
      },
      {
        tip: "Write times as decimals correctly",
        detail:
          "45 minutes is 0.75 hours, not 0.45. Getting this wrong makes an otherwise perfect speed calculation worthless.",
      },
      {
        tip: "For best value, state the comparison and the conclusion",
        detail:
          "Give the price per unit for each option, then say which is better value and why. A bare answer of 'the large one' usually scores one mark out of three.",
      },
      {
        tip: "Find k first in proportion questions",
        detail:
          "Write the relationship, substitute the given pair to find the constant, write the full equation, then use it. Examiners award marks for each of those steps.",
      },
      {
        tip: "Decide direct or inverse before calculating",
        detail:
          "Ask whether the second quantity should get bigger or smaller. More workers means less time, so it is inverse. Getting this backwards makes everything after it wrong.",
      },
    ],

    workedExamples: [
      {
        question: "Share £240 between Amy and Ben in the ratio 5 : 3.",
        steps: [
          "Add the parts to find the total number of parts: 5 + 3 = 8.",
          "Divide the amount by the number of parts: 240 ÷ 8 = £30 per part.",
          "Amy gets 5 parts: 5 x 30 = £150.",
          "Ben gets 3 parts: 3 x 30 = £90.",
          "Check they add back to the original total: 150 + 90 = 240. ✓",
        ],
        answer: "Amy £150, Ben £90",
      },
      {
        question: "Amy and Ben share money in the ratio 5 : 3. Amy gets £60 MORE than Ben. How much was shared?",
        steps: [
          "This gives the DIFFERENCE, not the total — a different starting point.",
          "The difference in parts is 5 − 3 = 2 parts.",
          "Those 2 parts are worth £60, so 1 part = 60 ÷ 2 = £30.",
          "The total is 8 parts: 8 x 30 = £240.",
          "Check: Amy 5 x 30 = 150, Ben 3 x 30 = 90, difference 60. ✓",
        ],
        answer: "£240",
      },
      {
        question: "A car travels 150 km in 2 hours 30 minutes. Find its average speed in km/h.",
        steps: [
          "Convert the time to a decimal number of hours FIRST. 30 minutes is half an hour.",
          "2 hours 30 minutes = 2.5 hours, not 2.3.",
          "Speed = distance ÷ time.",
          "150 ÷ 2.5 = 60.",
          "Give the units: km/h, as asked.",
        ],
        answer: "60 km/h",
      },
      {
        question: "y is inversely proportional to x. When x = 4, y = 15. Find y when x = 10.",
        steps: [
          "Inverse proportion means y = k ÷ x, so write that down first.",
          "Substitute the known pair to find k: 15 = k ÷ 4.",
          "Multiply both sides by 4: k = 60.",
          "Write the full equation: y = 60 ÷ x.",
          "Substitute x = 10: y = 60 ÷ 10 = 6.",
          "Sanity check: x more than doubled, so y should fall. 15 to 6 falls. ✓",
        ],
        answer: "y = 6",
        higherOnly: true,
      },
    ],

    practice: [
      { question: "Share £240 in the ratio 5 : 3. How much is the LARGER share, in pounds?",
        accept: ["150", "£150"], answer: "£150. Total parts 8, so one part is £30, and the larger share is 5 parts." },
      { question: "Share 45 sweets in the ratio 4 : 5. How many does the smaller share get?",
        accept: ["20"], answer: "20. Total parts 9, so one part is 5 sweets, and the smaller share is 4 parts." },
      { question: "In a ratio of 2 : 3, what fraction of the total is the first share?",
        accept: ["2/5"], answer: "2/5. The denominator is the TOTAL parts (2 + 3 = 5), not the other part of the ratio." },
      { question: "Simplify the ratio 12 : 18", accept: ["2:3", "2 : 3"], answer: "2 : 3. Divide both parts by the HCF, which is 6." },
      { question: "Write the ratio 4 : 20 in the form 1 : n. What is n?",
        accept: ["5"], answer: "5, giving 1 : 5. Divide both parts by the first number — this is the form used for map scales." },
      { question: "A car travels 150 km in 2.5 hours. What is its average speed in km/h?",
        accept: ["60"], answer: "60 km/h. Speed = distance ÷ time." },
      { question: "A car travels at 80 km/h for 3 hours. How far does it go, in km?",
        accept: ["240"], answer: "240 km. Distance = speed x time." },
      { question: "Write 45 minutes as a decimal number of hours.",
        accept: ["0.75", ".75"], answer: "0.75 hours. Not 0.45 — divide the minutes by 60. This trips people up constantly." },
      { question: "An object has mass 300 g and volume 60 cm³. What is its density in g/cm³?",
        accept: ["5"], answer: "5 g/cm³. Density = mass ÷ volume. The units tell you the formula." },
      { question: "A force of 200 N acts on an area of 4 m². What is the pressure in N/m²?",
        accept: ["50"], answer: "50 N/m². Pressure = force ÷ area." },
      { question: "6 identical pens cost £9. How much do 10 cost, in pounds?",
        accept: ["15", "£15"], answer: "£15. Unitary method: one pen costs £1.50, so ten cost £15." },
      { question: "4 workers build a wall in 6 days. How long would 8 workers take, in days?",
        accept: ["3"], answer: "3 days. This is inverse proportion — more workers means less time, so double the workers halves the time." },
      { question: "y is directly proportional to x. When x = 3, y = 12. What is k in y = kx?",
        accept: ["4"], answer: "4. Substitute the pair: 12 = k x 3, so k = 4." },
      { question: "y = 4x. What is y when x = 7?", accept: ["28"], answer: "28. Substitute into the equation once k is known." },
      { question: "y is inversely proportional to x, with y = 15 when x = 4. Find k in y = k/x.",
        accept: ["60"], answer: "60. Substitute: 15 = k ÷ 4, so k = 60.", higherOnly: true },
      { question: "Using y = 60/x, find y when x = 10.", accept: ["6"],
        answer: "6, because 60 ÷ 10 = 6. Check the direction: x went up, so y should come down.", higherOnly: true },
      { question: "Explain why you must decide whether a relationship is direct or inverse BEFORE calculating.",
        answer: "Because the two produce opposite answers from the same numbers. Direct means both quantities move the same way, so you multiply; inverse means they move in opposite directions, so you divide. Asking 'should the second quantity get bigger or smaller?' takes a second and prevents an answer that is not just slightly wrong but wrong in the opposite direction. (Mark this one yourself.)" },
      { question: "A shop sells a 500 g pack for £2.20 and a 750 g pack for £3.15. Show which is better value and explain your method.",
        answer: "Compare price per unit. The 500 g pack: 220p ÷ 500 = 0.44p per gram. The 750 g pack: 315p ÷ 750 = 0.42p per gram. The 750 g pack is better value because each gram costs less. The key is being consistent — compare price per gram for both, or grams per penny for both, but never mix the two. (Mark this one yourself.)" },
    ],

    misconceptions: [
      { wrong: "\"In a ratio of 2 : 3, the first share is 2/3 of the total.\"",
        right: "It is 2/5. The fraction's denominator is the TOTAL number of parts (2 + 3 = 5). The ratio compares the parts to each other; the fraction compares a part to the whole." },
      { wrong: "\"2 hours 30 minutes is 2.3 hours.\"",
        right: "It is 2.5 hours. Minutes convert by dividing by 60, not by writing them after a decimal point. 45 minutes is 0.75, not 0.45." },
      { wrong: "\"If the question gives the difference between shares, I can still divide the total by the parts.\"",
        right: "You have no total yet. The difference corresponds to the DIFFERENCE in parts, so find the value of one part from that first, then build the total." },
      { wrong: "\"More workers means the job takes proportionally longer, so I multiply.\"",
        right: "That is inverse proportion — more workers means LESS time. Ask which way the second quantity should move before choosing to multiply or divide." },
      { wrong: "\"For best value I can compare price per gram for one and grams per penny for the other.\"",
        right: "The comparison must be consistent, or the two figures mean opposite things and the conclusion reverses. Pick one measure and use it for every option." },
      { wrong: "\"Stating which option is better value is enough for full marks.\"",
        right: "Show the comparable figures for each option, then state the conclusion. A bare answer typically scores one mark out of three." },
    ],
  },

  "maths/equations-and-inequalities": {
    summary:
      "Solving means finding the value or values that make a statement true. Equations give exact answers; inequalities give ranges. The underlying skill is the same throughout — do the same thing to both sides, keeping everything balanced — with one crucial exception when multiplying or dividing an inequality by a negative.",
    keyFacts: [
      {
        heading: "Linear equations",
        points: [
          "Use inverse operations to isolate the unknown, doing the same to both sides.",
          "Expand brackets first, then collect like terms.",
          "With letters on both sides, gather them on the side that keeps the coefficient positive.",
          "To clear fractions, multiply every term by the denominator.",
          "Check by substituting the answer back into the original equation.",
        ],
      },
      {
        heading: "Simultaneous equations — elimination",
        points: [
          "Make the coefficients of one variable match, multiplying one or both equations if needed.",
          "If the matching terms have the same sign, subtract the equations. If opposite signs, add them.",
          "Solve the resulting single-variable equation, then substitute back to find the other variable.",
          "Check both values satisfy BOTH original equations, not just one.",
          "Label your equations (1) and (2) and show what you did — 'Equation 1 × 3' — because method marks depend on it.",
        ],
      },
      {
        heading: "Simultaneous equations — substitution",
        points: [
          "Rearrange one equation to make a variable the subject.",
          "Substitute that expression into the other equation.",
          "Best when one equation is already in the form y = something.",
          "Essential when one equation is not linear, such as a line meeting a curve.",
        ],
      },
      {
        heading: "Inequality notation",
        points: [
          "< less than, > greater than, ≤ less than or equal to, ≥ greater than or equal to.",
          "On a number line, an open circle means the value is not included (< or >), a filled circle means it is (≤ or ≥).",
          "x > 3 means every value above 3; the solution is a range, not a single number.",
          "3 < x ≤ 7 means x is greater than 3 and at most 7.",
        ],
      },
      {
        heading: "Solving inequalities",
        points: [
          "Solve exactly as you would an equation, using inverse operations.",
          "CRITICAL: multiplying or dividing both sides by a negative REVERSES the inequality sign.",
          "−2x > 6 becomes x < −3, with the sign flipped.",
          "Integer solutions: list the whole numbers in the range. For 2 < x ≤ 5 these are 3, 4 and 5.",
          "Avoid the reversal entirely by moving terms so the coefficient stays positive.",
        ],
      },
      {
        heading: "Graphical and iterative methods",
        points: [
          "The solution to simultaneous equations is the point where the two lines cross.",
          "Read both coordinates from the intersection; that is your x and y.",
          "Regions on graphs are shaded to show where inequalities are satisfied; a dashed line means the boundary is not included, a solid line means it is.",
          "Iteration solves equations by repeatedly substituting a value back into a rearranged formula until the answer stabilises.",
        ],
      },
    ],
    flashcards: [
      { term: "Linear equation", definition: "An equation where the highest power of the variable is 1, giving a single solution." },
      { term: "Simultaneous equations", definition: "Two or more equations solved together to find values satisfying all of them at once." },
      { term: "Elimination method", definition: "Solving simultaneous equations by adding or subtracting them to remove one variable." },
      { term: "Substitution method", definition: "Solving simultaneous equations by rearranging one and substituting it into the other." },
      { term: "Inequality", definition: "A statement that one quantity is greater or less than another, whose solution is a range of values." },
      { term: "Open circle", definition: "A circle on a number line showing the value itself is not included in the solution." },
      { term: "Closed circle", definition: "A filled circle on a number line showing the value itself is included in the solution." },
      { term: "Integer solution", definition: "A whole-number value that satisfies an inequality." },
      { term: "Subject of a formula", definition: "The variable on its own on one side of a formula." },
      { term: "Iteration", definition: "Repeatedly applying a formula to a starting value to get closer to a solution." },
    ],
    examTips: [
      {
        tip: "Flip the inequality when multiplying or dividing by a negative",
        detail:
          "This is the single most examined trap in the topic. −3x < 12 becomes x > −4. If you never divide by a negative, you never have to remember it.",
      },
      {
        tip: "Check simultaneous answers in BOTH equations",
        detail:
          "Values often satisfy one equation and not the other. Checking both takes twenty seconds and catches the error while you can still fix it.",
      },
      {
        tip: "Same sign subtract, different sign add",
        detail:
          "Once the coefficients match, the signs tell you what to do. Getting this backwards produces a wrong answer that still looks tidy.",
      },
      {
        tip: "Give the range, not a single number",
        detail:
          "The answer to an inequality is x < 5 or similar. Writing x = 5 shows you have solved it as an equation and loses the mark.",
      },
      {
        tip: "Label your equations and your operations",
        detail:
          "Write (1) and (2), then '(1) × 2' or '(1) − (2)'. Method marks are given for these steps, so an arithmetic slip later still scores.",
      },
      {
        tip: "Read integer solutions carefully at the boundaries",
        detail:
          "Whether the endpoint is included depends on ≤ versus <. For 2 < x ≤ 5, 2 is out and 5 is in.",
      },
      {
        tip: "Give both coordinates from a graph",
        detail:
          "The solution to a graphical simultaneous equations question is a point. Answer with x and y, not just one of them.",
      },
    ],

    workedExamples: [
      {
        question: "Solve the simultaneous equations 3x + 2y = 16 and x − 2y = 0.",
        steps: [
          "Label them: (1) 3x + 2y = 16 and (2) x − 2y = 0.",
          "The y terms are +2y and −2y — same size, DIFFERENT signs, so ADD the equations to eliminate y.",
          "(1) + (2): 3x + x = 4x, and 2y + (−2y) = 0, and 16 + 0 = 16. So 4x = 16.",
          "Divide by 4: x = 4.",
          "Substitute into (2): 4 − 2y = 0, so 2y = 4 and y = 2.",
          "Check in BOTH originals: (1) 3(4) + 2(2) = 16 ✓  (2) 4 − 2(2) = 0 ✓",
        ],
        answer: "x = 4, y = 2",
      },
      {
        question: "Solve 2x + 3y = 19 and 4x + y = 23.",
        steps: [
          "Label them: (1) 2x + 3y = 19 and (2) 4x + y = 23.",
          "Nothing matches yet. Multiply (1) by 2 so the x terms match: (1) x 2 gives 4x + 6y = 38.",
          "Now the x terms are 4x in both — SAME sign, so SUBTRACT.",
          "(4x + 6y) − (4x + y) = 38 − 23, giving 5y = 15.",
          "So y = 3. Substitute into (2): 4x + 3 = 23, so 4x = 20 and x = 5.",
          "Check in both: (1) 2(5) + 3(3) = 19 ✓  (2) 4(5) + 3 = 23 ✓",
        ],
        answer: "x = 5, y = 3",
      },
      {
        question: "Solve the inequality −3x + 2 < 14 and list the integer solutions that are also greater than −3.",
        steps: [
          "Subtract 2 from both sides: −3x < 12.",
          "Now divide by −3. Dividing by a NEGATIVE reverses the inequality sign.",
          "x > −4.  (Had the sign not flipped you would get x < −4, which is the opposite set of numbers.)",
          "Combine with the other condition, x > −3. The stricter of the two is x > −3.",
          "Integer solutions greater than −3: −2, −1, 0, 1, 2, ...",
        ],
        answer: "x > −3, so the integers are −2, −1, 0, 1, 2 and so on.",
      },
      {
        question: "Solve 3x/4 − 2 = 7.",
        steps: [
          "Deal with the number first: add 2 to both sides, giving 3x/4 = 9.",
          "Clear the fraction by multiplying both sides by 4: 3x = 36.",
          "Divide by 3: x = 12.",
          "Check in the original: (3 x 12)/4 − 2 = 36/4 − 2 = 9 − 2 = 7. ✓",
        ],
        answer: "x = 12",
      },
    ],

    practice: [
      { question: "Solve 4x + 5 = 21", accept: ["4", "x=4", "x = 4"], answer: "x = 4. Subtract 5 to get 4x = 16, then divide by 4." },
      { question: "Solve 7x − 2 = 3x + 14", accept: ["4", "x=4", "x = 4"],
        answer: "x = 4. Subtract 3x from both sides, add 2, then divide by 4." },
      { question: "Solve 3(x − 2) = 15", accept: ["7", "x=7", "x = 7"],
        answer: "x = 7. Divide both sides by 3 first to get x − 2 = 5." },
      { question: "Solve x/3 + 4 = 9", accept: ["15", "x=15", "x = 15"],
        answer: "x = 15. Subtract 4 to get x/3 = 5, then multiply by 3." },
      { question: "Solve 2x + y = 10 and x − y = 2. What is x?", accept: ["4", "x=4", "x = 4"],
        answer: "x = 4. The y terms have opposite signs, so add the equations to get 3x = 12." },
      { question: "For the same pair (2x + y = 10, x − y = 2), what is y?", accept: ["2", "y=2", "y = 2"],
        answer: "y = 2. Substitute x = 4 into either equation, then check it works in both." },
      { question: "Solve 5x + 2y = 24 and 5x − y = 9. What is y?", accept: ["5", "y=5", "y = 5"],
        answer: "y = 5. The x terms match with the same sign, so subtract: 3y = 15." },
      { question: "Solve the inequality 3x + 4 > 19. Give your answer in the form x > n.",
        accept: ["x>5", "x > 5", "5"], answer: "x > 5. Subtract 4 then divide by 3 — no sign flip, because 3 is positive." },
      { question: "Solve −2x > 6. Give your answer in the form x < n.",
        accept: ["x<-3", "x < -3", "-3"], answer: "x < −3. Dividing by a negative REVERSES the inequality sign." },
      { question: "How many integers satisfy 2 < x ≤ 5?", accept: ["3", "three"],
        answer: "3 — namely 3, 4 and 5. The 2 is excluded because the sign is strictly less than; the 5 is included." },
      { question: "List the smallest integer that satisfies x ≥ −2", accept: ["-2"],
        answer: "−2 itself, because the sign is 'greater than or equal to' and so includes the endpoint." },
      { question: "On a number line, does an OPEN circle mean the value is included? Answer yes or no.",
        accept: ["no"], answer: "No. An open circle means excluded (< or >); a filled circle means included (≤ or ≥)." },
      { question: "Make x the subject of y = 3x + 7. What do you get for x?",
        accept: ["(y-7)/3", "(y - 7)/3", "y-7/3"], answer: "x = (y − 7)/3. Subtract 7 from both sides, then divide everything by 3." },
      { question: "Solve 6x = 2x + 20", accept: ["5", "x=5", "x = 5"], answer: "x = 5. Subtract 2x to get 4x = 20." },
      { question: "Two lines cross at the point (3, 7). What is the solution to the simultaneous equations they represent?",
        accept: ["3,7", "(3,7)", "x=3 y=7", "x = 3, y = 7", "3 7"],
        answer: "x = 3 and y = 7. The solution is a POINT, so both coordinates are needed." },
      { question: "Solve 4(x + 1) = 2(x + 7)", accept: ["5", "x=5", "x = 5"],
        answer: "x = 5. Expand both sides: 4x + 4 = 2x + 14, so 2x = 10." },
      { question: "Explain why dividing an inequality by a negative number reverses the sign.",
        answer: "Because multiplying or dividing by a negative flips the order of the number line. Consider 2 < 4, which is true. Divide both sides by −1 and you get −2 and −4; but −2 is GREATER than −4, so the statement only stays true if the sign reverses to −2 > −4. The safest habit is to rearrange so you never divide by a negative in the first place. (Mark this one yourself.)" },
      { question: "Explain why you should check simultaneous equation answers in BOTH original equations.",
        answer: "Because an arithmetic slip during elimination often produces values that still satisfy one equation while failing the other. Checking only one gives false confidence. Substituting into both catches the error in about twenty seconds, while you can still fix it and keep the marks. (Mark this one yourself.)" },
    ],

    misconceptions: [
      { wrong: "\"−3x < 12 gives x < −4.\"",
        right: "Dividing by the negative reverses the sign, so it gives x > −4. This is the single most examined trap in the topic, and avoiding negative division entirely avoids it." },
      { wrong: "\"The answer to an inequality is a single number.\"",
        right: "It is a RANGE. Writing x = 5 when the answer is x > 5 shows you solved it as an equation and loses the mark." },
      { wrong: "\"Once the coefficients match you always subtract the equations.\"",
        right: "Same sign, subtract. Different signs, add. Getting this the wrong way round produces a tidy-looking answer that is completely wrong." },
      { wrong: "\"Checking one equation is enough to confirm a simultaneous solution.\"",
        right: "Values often satisfy one and not the other. Both must be checked, because that is precisely where elimination slips reveal themselves." },
      { wrong: "\"For a graphical solution you just give the x value.\"",
        right: "The solution is the point where the lines cross, so both coordinates are required — x AND y." },
      { wrong: "\"For 2 < x ≤ 5 the integers are 2, 3, 4 and 5.\"",
        right: "The 2 is excluded, because the sign is strictly less than. The integers are 3, 4 and 5. Whether an endpoint counts depends entirely on < versus ≤." },
    ],
  },

  "maths/pythagoras-and-trigonometry": {
    summary:
      "Two tools for finding missing lengths and angles in triangles. Pythagoras needs a right angle and works with three sides. Trigonometry needs a right angle and connects sides to angles. The sine and cosine rules extend this to any triangle. Recognising which tool a question needs is most of the skill.",
    keyFacts: [
      {
        heading: "Pythagoras' theorem",
        points: [
          "a² + b² = c², where c is the hypotenuse — the longest side, always opposite the right angle.",
          "To find the hypotenuse: square both shorter sides, add, then square root.",
          "To find a shorter side: square the hypotenuse, SUBTRACT the other side squared, then square root.",
          "Only works in right-angled triangles.",
          "If a² + b² = c² holds for three lengths, the triangle is right-angled — useful for proof questions.",
        ],
      },
      {
        heading: "Trigonometry in right-angled triangles",
        points: [
          "SOHCAHTOA: sin = opposite ÷ hypotenuse, cos = adjacent ÷ hypotenuse, tan = opposite ÷ adjacent.",
          "Label relative to the angle you are using: hypotenuse is always opposite the right angle; opposite faces the angle; adjacent is next to it.",
          "To find a missing angle, use the inverse functions sin⁻¹, cos⁻¹ or tan⁻¹.",
          "Check your calculator is in DEGREES. This ruins more answers than any other single error.",
        ],
      },
      {
        heading: "Exact trigonometric values",
        points: [
          "sin 0 = 0, sin 30 = 1/2, sin 45 = √2/2, sin 60 = √3/2, sin 90 = 1.",
          "cos 0 = 1, cos 30 = √3/2, cos 45 = √2/2, cos 60 = 1/2, cos 90 = 0.",
          "tan 0 = 0, tan 30 = √3/3, tan 45 = 1, tan 60 = √3.",
          "These are needed on the non-calculator paper and are expected to be memorised on most boards.",
        ],
      },
      {
        heading: "The sine rule",
        points: [
          "a / sin A = b / sin B = c / sin C.",
          "Each side is paired with the angle opposite it — that pairing is the whole idea.",
          "Use when you have an angle and its opposite side, plus one other piece of information.",
          "To find an angle, use the rule the other way up: sin A / a = sin B / b.",
        ],
      },
      {
        heading: "The cosine rule",
        points: [
          "a² = b² + c² − 2bc cos A.",
          "Use when you know all three sides, or two sides and the angle BETWEEN them.",
          "To find an angle: cos A = (b² + c² − a²) ÷ 2bc.",
          "The angle A is always the one opposite side a.",
          "It is Pythagoras with a correction term for the triangle not being right-angled.",
        ],
      },
      {
        heading: "Area and 3D",
        points: [
          "Area of any triangle = ½ab sin C, where C is the angle between sides a and b.",
          "In 3D problems, identify a right-angled triangle inside the shape and draw it separately, full size.",
          "Often the answer requires two steps: find a diagonal on the base first, then use it in a second triangle.",
        ],
      },
    ],
    flashcards: [
      { term: "Hypotenuse", definition: "The longest side of a right-angled triangle, always opposite the right angle." },
      { term: "Pythagoras' theorem", definition: "In a right-angled triangle, the square of the hypotenuse equals the sum of the squares of the other two sides." },
      { term: "Opposite side", definition: "The side directly facing the angle being used in a trigonometry calculation." },
      { term: "Adjacent side", definition: "The side next to the angle being used, which is not the hypotenuse." },
      { term: "SOHCAHTOA", definition: "A memory aid: sine is opposite over hypotenuse, cosine is adjacent over hypotenuse, tangent is opposite over adjacent." },
      { term: "Inverse trigonometric function", definition: "The function used to find an angle from a ratio, written as sin, cos or tan with a superscript minus one." },
      { term: "Sine rule", definition: "In any triangle, each side divided by the sine of its opposite angle gives the same value." },
      { term: "Cosine rule", definition: "In any triangle, a squared equals b squared plus c squared minus twice bc times the cosine of angle A." },
      { term: "Angle of elevation", definition: "The angle measured upwards from the horizontal to a line of sight." },
      { term: "Angle of depression", definition: "The angle measured downwards from the horizontal to a line of sight." },
    ],
    examTips: [
      {
        tip: "Check your calculator is in degrees",
        detail:
          "A calculator in radians gives completely wrong answers that look plausible. Check it at the start of every exam, and again if an answer seems absurd.",
      },
      {
        tip: "Label the triangle before choosing a method",
        detail:
          "Mark the hypotenuse, opposite and adjacent relative to the angle in question. Once labelled, the correct ratio is obvious. Guessing between sin, cos and tan is where marks disappear.",
      },
      {
        tip: "Subtract when finding a shorter side with Pythagoras",
        detail:
          "Adding always gives the hypotenuse. If your 'shorter side' comes out longer than the hypotenuse, you have added when you should have subtracted.",
      },
      {
        tip: "Choose the rule by what you are given",
        detail:
          "An angle with its opposite side means sine rule. Three sides, or two sides with the angle between them, means cosine rule. Write down what you have before picking.",
      },
      {
        tip: "Keep full accuracy until the final answer",
        detail:
          "Rounding a trig value partway through can shift the final answer enough to lose the accuracy mark. Use the calculator's memory or the ANS key.",
      },
      {
        tip: "Draw 3D triangles separately",
        detail:
          "Redraw the relevant right-angled triangle flat on the page, at a sensible size, with the known lengths marked. Trying to work within the 3D sketch causes errors.",
      },
      {
        tip: "Sanity-check the size of your answer",
        detail:
          "The hypotenuse must be the longest side, and an angle in a triangle must be under 180°. An answer failing either test is wrong regardless of the working.",
      },
    ],

    workedExamples: [
      {
        question: "A right-angled triangle has shorter sides 6 cm and 8 cm. Find the hypotenuse.",
        steps: [
          "Identify the hypotenuse: it is the side opposite the right angle, and it is the one we want.",
          "Use a² + b² = c², where c is the hypotenuse.",
          "6² + 8² = 36 + 64 = 100.",
          "Square root: c = √100 = 10.",
          "Sanity check: the hypotenuse must be the LONGEST side, and 10 > 8. ✓",
        ],
        answer: "10 cm",
      },
      {
        question: "A right-angled triangle has a hypotenuse of 13 cm and one shorter side of 5 cm. Find the other side.",
        steps: [
          "We want a SHORTER side this time, so subtract rather than add.",
          "Rearrange a² + b² = c² to a² = c² − b².",
          "13² − 5² = 169 − 25 = 144.",
          "Square root: 12.",
          "Sanity check: 12 is less than the hypotenuse of 13. ✓  Adding would have given √194 ≈ 13.9, which is longer than the hypotenuse — impossible.",
        ],
        answer: "12 cm",
      },
      {
        question: "In a right-angled triangle the hypotenuse is 10 cm and the angle is 30°. Find the side opposite the angle.",
        steps: [
          "Label relative to the 30° angle: hypotenuse = 10, and we want the OPPOSITE side.",
          "Opposite and hypotenuse means SOH: sin = opposite ÷ hypotenuse.",
          "sin 30 = opposite ÷ 10.",
          "Rearrange: opposite = 10 x sin 30.",
          "sin 30 = 0.5 exactly, so opposite = 10 x 0.5 = 5 cm.",
          "Check the calculator is in DEGREES — in radians this gives a completely different, plausible-looking answer.",
        ],
        answer: "5 cm",
      },
      {
        question: "A triangle has sides 8 cm and 11 cm with an angle of 40° BETWEEN them. Find the third side.",
        steps: [
          "There is no right angle, so Pythagoras and SOHCAHTOA do not apply.",
          "Two sides and the angle between them means the COSINE rule: a² = b² + c² − 2bc cos A.",
          "Here b = 8, c = 11, and A = 40° (the angle opposite the unknown side).",
          "a² = 64 + 121 − 2 x 8 x 11 x cos 40 = 185 − 176 x 0.766 = 185 − 134.8 = 50.2.",
          "a = √50.2 ≈ 7.08 cm.",
        ],
        answer: "About 7.1 cm",
        higherOnly: true,
      },
    ],

    practice: [
      { question: "A right-angled triangle has shorter sides 6 and 8. What is the hypotenuse?",
        accept: ["10"], answer: "10. 6² + 8² = 100, and √100 = 10." },
      { question: "A right-angled triangle has shorter sides 3 and 4. What is the hypotenuse?",
        accept: ["5"], answer: "5. The 3-4-5 triangle is worth recognising instantly." },
      { question: "A right-angled triangle has hypotenuse 13 and one shorter side 5. Find the other shorter side.",
        accept: ["12"], answer: "12. SUBTRACT when finding a shorter side: 169 − 25 = 144." },
      { question: "A right-angled triangle has hypotenuse 25 and one shorter side 7. Find the other side.",
        accept: ["24"], answer: "24. 625 − 49 = 576, and √576 = 24." },
      { question: "In SOHCAHTOA, which ratio uses the opposite and the hypotenuse?",
        accept: ["sin", "sine"], answer: "Sine. SOH: sin = opposite ÷ hypotenuse." },
      { question: "Which ratio uses the adjacent and the hypotenuse?",
        accept: ["cos", "cosine"], answer: "Cosine. CAH: cos = adjacent ÷ hypotenuse." },
      { question: "Which ratio uses the opposite and the adjacent?",
        accept: ["tan", "tangent"], answer: "Tangent. TOA: tan = opposite ÷ adjacent." },
      { question: "What is the exact value of sin 30?", accept: ["0.5", "1/2", ".5"],
        answer: "0.5 exactly, or ½. These exact values are needed on the non-calculator paper." },
      { question: "What is the exact value of cos 60?", accept: ["0.5", "1/2", ".5"],
        answer: "0.5, the same as sin 30. Notice sin 30 = cos 60 — the pattern is worth spotting." },
      { question: "What is the exact value of tan 45?", accept: ["1", "one"],
        answer: "1, because at 45° the opposite and adjacent sides are equal." },
      { question: "Which side of a right-angled triangle is always the longest?",
        accept: ["hypotenuse", "the hypotenuse"], answer: "The hypotenuse, always opposite the right angle. It is a useful sanity check on every answer." },
      { question: "In a right-angled triangle, the hypotenuse is 10 and the angle is 30°. Find the opposite side.",
        accept: ["5"], answer: "5. opposite = hypotenuse x sin 30 = 10 x 0.5." },
      { question: "Which function do you use on a calculator to find an ANGLE from a ratio?",
        accept: ["inverse", "sin-1", "inverse sin", "arcsin", "the inverse functions", "inverse trig"],
        answer: "The inverse functions — sin⁻¹, cos⁻¹ or tan⁻¹, depending on which ratio you formed." },
      { question: "Do Pythagoras and SOHCAHTOA work on a triangle with no right angle? Answer yes or no.",
        accept: ["no"], answer: "No. Without a right angle you need the sine or cosine rule instead." },
      { question: "Which rule do you use when given two sides and the angle BETWEEN them?",
        accept: ["cosine rule", "cosine", "cos rule"],
        answer: "The cosine rule: a² = b² + c² − 2bc cos A.", higherOnly: true },
      { question: "Which rule do you use when given an angle and the side OPPOSITE it, plus one more piece of information?",
        accept: ["sine rule", "sine", "sin rule"],
        answer: "The sine rule: a ÷ sin A = b ÷ sin B. The pairing of each side with its opposite angle is the whole idea.", higherOnly: true },
      { question: "Explain why you should sanity-check a Pythagoras answer against the hypotenuse.",
        answer: "Because the hypotenuse is always the longest side, so any 'shorter side' that comes out longer than the hypotenuse is impossible. That single check catches the most common error in the topic — adding when you should have subtracted — in about two seconds, and it works even when you cannot spot the mistake in the working itself. (Mark this one yourself.)" },
      { question: "Explain why checking your calculator is in degrees matters more than almost any other exam habit in this topic.",
        answer: "Because a calculator in radian mode produces answers that are wrong but entirely plausible — a sensible-looking number, no error message, no warning. Every trigonometric answer on the paper is then wrong, and nothing in your working reveals it. It costs two seconds to check at the start and can otherwise cost an entire question. (Mark this one yourself.)" },
    ],

    misconceptions: [
      { wrong: "\"You always add the squares in Pythagoras.\"",
        right: "Adding gives the HYPOTENUSE. To find a shorter side you subtract: a² = c² − b². If your shorter side comes out longer than the hypotenuse, you added when you should have subtracted." },
      { wrong: "\"The opposite and adjacent sides are fixed properties of the triangle.\"",
        right: "They depend on WHICH angle you are using. The hypotenuse never changes, but opposite and adjacent swap when you switch to the other non-right angle. Label the triangle before choosing a ratio." },
      { wrong: "\"Pythagoras works on any triangle.\"",
        right: "It requires a right angle. Without one you need the sine or cosine rule, which are Higher tier on most boards." },
      { wrong: "\"A calculator in radians will show an error if I use degrees.\"",
        right: "It will not. It gives a plausible wrong answer with no warning at all, which is exactly what makes it so costly. Check the mode at the start of every exam." },
      { wrong: "\"You can round trig values partway through to keep the numbers tidy.\"",
        right: "Rounding a trig value early can shift the final answer enough to lose the accuracy mark. Keep full precision in the calculator and round only at the end." },
      { wrong: "\"In a 3D problem you can work directly from the 3D sketch.\"",
        right: "Redraw the relevant right-angled triangle flat on the page at a sensible size, with the known lengths marked. Almost all 3D errors come from misreading which lengths lie in which triangle." },
    ],
  },

  "maths/probability": {
    summary:
      "Probability measures how likely something is, on a scale from 0 to 1. Most GCSE probability is about organising the possibilities clearly — with a table, a tree or a Venn diagram — because once they are laid out properly, the arithmetic is straightforward.",
    keyFacts: [
      {
        heading: "The basics",
        points: [
          "Probability is measured from 0 (impossible) to 1 (certain), written as a fraction, decimal or percentage — never as a ratio.",
          "P(event) = number of favourable outcomes ÷ total number of possible outcomes.",
          "The probabilities of all possible outcomes add to 1.",
          "P(not A) = 1 − P(A). This one line solves a surprising number of questions.",
        ],
      },
      {
        heading: "Sample space and listing",
        points: [
          "A sample space shows all possible outcomes, often as a two-way table for two events.",
          "For two dice there are 36 outcomes, not 12 — each die is independent.",
          "List systematically so nothing is missed or counted twice.",
          "Two-way tables are frequently the fastest route to the answer.",
        ],
      },
      {
        heading: "Combining events",
        points: [
          "Mutually exclusive events cannot happen together, so P(A or B) = P(A) + P(B).",
          "Independent events do not affect each other, so P(A and B) = P(A) × P(B).",
          "AND means multiply, OR means add. This pair is worth memorising.",
          "Exhaustive events cover every possibility, so their probabilities total 1.",
        ],
      },
      {
        heading: "Tree diagrams",
        points: [
          "Each branch is labelled with a probability, and the probabilities on each set of branches add to 1.",
          "Multiply ALONG branches to find the probability of a sequence of events.",
          "Add BETWEEN different complete paths that satisfy the condition.",
          "'At least one' is almost always easier as 1 − P(none).",
        ],
      },
      {
        heading: "With and without replacement",
        points: [
          "With replacement, the item goes back, so probabilities are unchanged on the second pick — the events are independent.",
          "Without replacement, both the numerator and the DENOMINATOR change on the second pick.",
          "Taking 2 red from 5 red out of 12: 5/12 then 4/11. Both numbers change.",
          "Forgetting to reduce the denominator is the most common error in the whole topic.",
        ],
      },
      {
        heading: "Relative frequency and Venn diagrams",
        points: [
          "Relative frequency = number of times an outcome occurred ÷ total number of trials.",
          "It estimates probability from experiment, and becomes more reliable as the number of trials increases.",
          "Expected frequency = probability × number of trials.",
          "In Venn diagrams, the intersection means A AND B; the union means A OR B; anything outside is neither.",
          "Fill the intersection FIRST, then work outwards, so nothing is double-counted.",
        ],
      },
    ],
    flashcards: [
      { term: "Probability", definition: "A measure of how likely an event is, from 0 for impossible to 1 for certain." },
      { term: "Outcome", definition: "A single possible result of an experiment or trial." },
      { term: "Sample space", definition: "The set of all possible outcomes of an experiment." },
      { term: "Mutually exclusive", definition: "Events that cannot both happen at the same time, so their probabilities can be added." },
      { term: "Independent events", definition: "Events where the outcome of one has no effect on the probability of the other." },
      { term: "Exhaustive events", definition: "A set of events covering every possible outcome, with probabilities totalling 1." },
      { term: "Tree diagram", definition: "A branching diagram showing the possible outcomes of successive events and their probabilities." },
      { term: "With replacement", definition: "Where an item is returned before the next selection, leaving probabilities unchanged." },
      { term: "Without replacement", definition: "Where an item is not returned, so both the number of favourable outcomes and the total change." },
      { term: "Relative frequency", definition: "The number of times an outcome happened divided by the total number of trials, used to estimate probability." },
      { term: "Expected frequency", definition: "The number of times an outcome is predicted to occur, found by multiplying the probability by the number of trials." },
      { term: "Intersection", definition: "In a Venn diagram, the region belonging to both sets, meaning A AND B." },
      { term: "Union", definition: "In a Venn diagram, everything in either set, meaning A OR B." },
    ],
    examTips: [
      {
        tip: "AND multiply, OR add",
        detail:
          "Almost every probability question reduces to spotting which one applies. Multiply along tree branches for a sequence; add separate complete paths.",
      },
      {
        tip: "Without replacement changes the denominator too",
        detail:
          "Both the top and the bottom of the fraction go down. Changing only the numerator is the single most common error in this topic.",
      },
      {
        tip: "Use 1 minus for 'at least one'",
        detail:
          "Calculating every way of getting at least one is slow and error-prone. Work out the probability of none and subtract from 1.",
      },
      {
        tip: "Never give a probability as a ratio",
        detail:
          "Write 3/10, 0.3 or 30%. Answers written as 3 : 7 score zero however good the reasoning.",
      },
      {
        tip: "Check each set of tree branches totals 1",
        detail:
          "A fast check that catches mistakes before they propagate through the rest of the question.",
      },
      {
        tip: "Fill Venn diagram intersections first",
        detail:
          "Start in the middle and work outwards, subtracting as you go. Filling the outer regions first almost always double-counts.",
      },
      {
        tip: "Leave fractions unsimplified if it helps you check",
        detail:
          "Denominators like 132 make the working traceable. Simplify at the end if the question asks, but never lose the working.",
      },
    ],

    workedExamples: [
      {
        question: "A bag has 5 red and 7 blue counters. One is taken at random. Find P(red), and P(not red).",
        steps: [
          "Count the total: 5 + 7 = 12 counters.",
          "P(red) = favourable ÷ total = 5/12.",
          "For 'not red', use P(not A) = 1 − P(A).",
          "1 − 5/12 = 7/12.",
          "Check it against the counters directly: there are 7 blue out of 12. ✓",
        ],
        answer: "P(red) = 5/12, P(not red) = 7/12",
      },
      {
        question: "Two fair dice are rolled. Find the probability the total is 7.",
        steps: [
          "Count the total outcomes: each die has 6 faces, so 6 x 6 = 36 outcomes, not 12.",
          "List the pairs that total 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).",
          "That is 6 favourable outcomes. Note (1,6) and (6,1) are different outcomes and both count.",
          "P = 6/36.",
          "Simplify: 1/6.",
        ],
        answer: "1/6",
      },
      {
        question: "A bag has 4 green and 6 yellow sweets. Two are taken WITHOUT replacement. Find P(both green).",
        steps: [
          "First pick: 4 green out of 10 total, so P = 4/10.",
          "The sweet is NOT replaced, so both numbers change for the second pick.",
          "Only 3 green remain, and only 9 sweets in total: P = 3/9.",
          "AND means multiply: 4/10 x 3/9 = 12/90.",
          "Simplify: 2/15.",
        ],
        answer: "2/15",
      },
      {
        question: "A coin is flipped 3 times. Find the probability of at least one head.",
        steps: [
          "'At least one' is almost always easier as 1 minus the opposite.",
          "The opposite of 'at least one head' is 'no heads at all' — three tails.",
          "P(three tails) = 1/2 x 1/2 x 1/2 = 1/8.",
          "P(at least one head) = 1 − 1/8.",
          "= 7/8.  (Listing every case with at least one head would take far longer and risks missing one.)",
        ],
        answer: "7/8",
      },
    ],

    practice: [
      { question: "A bag has 5 red and 7 blue counters. What is P(red)? Give your answer as a fraction.",
        accept: ["5/12"], answer: "5/12. Favourable outcomes over total outcomes." },
      { question: "If P(rain) = 0.3, what is P(no rain)?", accept: ["0.7", ".7"],
        answer: "0.7. P(not A) = 1 − P(A), and this single line solves a surprising number of questions." },
      { question: "How many possible outcomes are there when two fair dice are rolled?",
        accept: ["36"], answer: "36, not 12. Each die is independent, so 6 x 6." },
      { question: "Two fair dice are rolled. What is P(total = 7)? Give your answer as a simplified fraction.",
        accept: ["1/6", "6/36"], answer: "1/6. There are 6 favourable pairs out of 36 outcomes." },
      { question: "A fair coin is flipped twice. What is P(two heads)?",
        accept: ["1/4", "0.25"], answer: "1/4. Independent events, so multiply: 1/2 x 1/2." },
      { question: "In probability, does AND mean add or multiply?", accept: ["multiply", "multiplication", "times"],
        answer: "Multiply. AND means multiply, OR means add — worth memorising as a pair." },
      { question: "In probability, does OR mean add or multiply?", accept: ["add", "addition", "plus"],
        answer: "Add, for mutually exclusive events. AND multiplies, OR adds." },
      { question: "What is the term for events that cannot both happen at the same time?",
        accept: ["mutually exclusive"], answer: "Mutually exclusive, which is why their probabilities can simply be added." },
      { question: "What is the term for events where one has no effect on the probability of the other?",
        accept: ["independent"], answer: "Independent events, whose probabilities are multiplied." },
      { question: "A bag has 4 green and 6 yellow. Two are taken without replacement. What is P(both green)?",
        accept: ["2/15", "12/90"], answer: "2/15. First 4/10, then 3/9 — BOTH numbers change on the second pick." },
      { question: "A coin is flipped 3 times. What is P(at least one head)?",
        accept: ["7/8", "0.875"], answer: "7/8. Far quicker as 1 − P(no heads) = 1 − 1/8." },
      { question: "A spinner landed on red 30 times out of 120 spins. What is the relative frequency of red?",
        accept: ["0.25", "1/4", ".25"], answer: "0.25. Relative frequency = occurrences ÷ total trials." },
      { question: "P(win) = 0.2. In 60 games, how many wins would you EXPECT?",
        accept: ["12"], answer: "12. Expected frequency = probability x number of trials." },
      { question: "In a Venn diagram, which region represents A AND B?",
        accept: ["intersection", "the intersection", "overlap", "the overlap"],
        answer: "The intersection — the overlapping region belonging to both sets." },
      { question: "In a Venn diagram, which region represents A OR B?",
        accept: ["union", "the union"], answer: "The union — everything in either set, including the overlap." },
      { question: "On a tree diagram, what should each SET of branches from one point add up to?",
        accept: ["1", "one"], answer: "1. A quick check that catches errors before they spread through the rest of the question." },
      { question: "Explain why 'without replacement' changes the denominator as well as the numerator.",
        answer: "Because removing an item reduces both the count of that colour AND the total number of items left. Taking a green from 4 green out of 10 leaves 3 green out of 9, so the second probability is 3/9 — not 3/10. Changing only the numerator is the single most common error in the topic, and it makes the answer wrong every time. (Mark this one yourself.)" },
      { question: "Explain why 'at least one' questions are usually solved with 1 minus something.",
        answer: "Because 'at least one' covers many separate cases — exactly one, exactly two, exactly three and so on — which must all be found and added. Its opposite, 'none at all', is a single case that is usually a simple multiplication. Working out the one easy case and subtracting from 1 is both faster and far less prone to missing a possibility. (Mark this one yourself.)" },
    ],

    misconceptions: [
      { wrong: "\"Without replacement, only the top of the fraction changes.\"",
        right: "Both change. Taking one green from 4 out of 10 leaves 3 out of 9, giving 3/9 — not 3/10. This is the most common error in the whole topic." },
      { wrong: "\"A probability can be written as a ratio, like 3 : 7.\"",
        right: "Probabilities must be a fraction, decimal or percentage. An answer written as a ratio scores zero however good the reasoning behind it." },
      { wrong: "\"Two dice give 12 possible outcomes.\"",
        right: "There are 36. Each die is independent, so 6 x 6. And (1,6) and (6,1) are different outcomes that both count." },
      { wrong: "\"After four heads in a row, a tail is more likely.\"",
        right: "The coin has no memory. Each flip is independent and remains 1/2. This is the gambler's fallacy, and it is examined." },
      { wrong: "\"For 'at least one' I should list and add every possible case.\"",
        right: "Work out the probability of NONE and subtract from 1. It is one calculation instead of several, and you cannot accidentally miss a case." },
      { wrong: "\"Simplifying every fraction as I go keeps things tidy.\"",
        right: "Leaving denominators like 90 or 132 unsimplified makes the working traceable and the arithmetic checkable. Simplify at the end if the question asks — never at the cost of losing the working." },
    ],
  },

  "maths/statistics-and-charts": {
    summary:
      "Statistics is about collecting data, summarising it fairly, and presenting it so the truth is visible rather than hidden. At GCSE the emphasis is on choosing the right average, reading and drawing graphs accurately, and — increasingly — commenting sensibly on what the data actually shows.",
    keyFacts: [
      {
        heading: "Types of data",
        points: [
          "Qualitative data is descriptive, such as colour. Quantitative data is numerical.",
          "Discrete data can only take particular values, usually whole numbers, like the number of pets.",
          "Continuous data can take any value in a range, like height or time.",
          "Primary data is collected by you; secondary data comes from someone else.",
        ],
      },
      {
        heading: "Averages and range",
        points: [
          "Mean = total of all values ÷ how many values there are.",
          "Median = the middle value once the data is in order. With an even number of values, take the mean of the middle two.",
          "Mode = the most frequently occurring value. There can be none, one, or several.",
          "Range = largest − smallest. It measures spread, not average.",
          "The mean uses every value but is distorted by extreme values; the median is not affected by them; the mode is the only one usable with non-numerical data.",
        ],
      },
      {
        heading: "Averages from tables",
        points: [
          "For a frequency table, add a column for value × frequency, total it, and divide by the total frequency.",
          "The median position is at (n + 1) ÷ 2, found using a running total of frequencies.",
          "For grouped data you can only ESTIMATE the mean, using the midpoint of each class, because the original values are unknown.",
          "The modal class is the group with the highest frequency, not the highest value.",
        ],
      },
      {
        heading: "Charts and graphs",
        points: [
          "Bar charts: for discrete or qualitative data, with gaps between the bars.",
          "Pie charts: 360° represents the total, so each category's angle = (frequency ÷ total) × 360.",
          "Line graphs: for data changing over time.",
          "Stem and leaf diagrams keep the original values and need a key.",
          "Every chart needs labelled axes, a sensible scale and a title.",
        ],
      },
      {
        heading: "Scatter graphs and correlation",
        points: [
          "Scatter graphs show the relationship between two variables.",
          "Positive correlation: as one increases so does the other. Negative: as one increases the other decreases. No correlation: no pattern.",
          "A line of best fit follows the trend with roughly equal numbers of points either side. It does not have to pass through the origin.",
          "Interpolation — estimating within the data range — is reliable. Extrapolation — estimating beyond it — is not, and questions often ask you to say so.",
          "Correlation does not prove causation. Two things moving together may both be caused by something else entirely.",
        ],
      },
      {
        heading: "Spread and comparison",
        points: [
          "Quartiles split ordered data into four. The lower quartile is a quarter of the way through, the upper quartile three quarters.",
          "Interquartile range = upper quartile − lower quartile. It describes the middle 50% and ignores extreme values.",
          "A box plot shows the minimum, lower quartile, median, upper quartile and maximum.",
          "Cumulative frequency graphs plot running totals at the UPPER boundary of each class, producing an S-shaped curve.",
          "On Higher papers, histograms use unequal class widths, and frequency density = frequency ÷ class width. The AREA of each bar represents frequency.",
        ],
      },
    ],
    flashcards: [
      { term: "Mean", definition: "The total of all values divided by the number of values." },
      { term: "Median", definition: "The middle value when the data is arranged in order." },
      { term: "Mode", definition: "The value that occurs most often in a data set." },
      { term: "Range", definition: "The difference between the largest and smallest values, measuring spread." },
      { term: "Discrete data", definition: "Data that can only take certain separate values, usually whole numbers." },
      { term: "Continuous data", definition: "Data that can take any value within a range, such as height or time." },
      { term: "Modal class", definition: "The group in a grouped frequency table with the highest frequency." },
      { term: "Estimated mean", definition: "The mean of grouped data calculated using class midpoints, since the original values are unknown." },
      { term: "Correlation", definition: "A relationship between two variables shown by the pattern of points on a scatter graph." },
      { term: "Line of best fit", definition: "A straight line drawn through a scatter graph following the trend of the data." },
      { term: "Interpolation", definition: "Estimating a value within the range of the data, which is generally reliable." },
      { term: "Extrapolation", definition: "Estimating a value beyond the range of the data, which is unreliable." },
      { term: "Quartile", definition: "A value dividing ordered data into four equal parts." },
      { term: "Interquartile range", definition: "The upper quartile minus the lower quartile, describing the spread of the middle half of the data." },
      { term: "Cumulative frequency", definition: "A running total of frequencies, plotted at the upper boundary of each class." },
      { term: "Frequency density", definition: "Frequency divided by class width, used as the height of bars in a histogram." },
    ],
    examTips: [
      {
        tip: "Say the mean is ESTIMATED for grouped data",
        detail:
          "The original values are unknown, so using midpoints only estimates it. Questions frequently ask why, and this is the answer.",
      },
      {
        tip: "The range is not an average",
        detail:
          "It measures spread. Questions asking you to compare two data sets want one average AND one measure of spread — usually the median and the interquartile range.",
      },
      {
        tip: "Compare in context, not just numerically",
        detail:
          "'Class A had a higher median so they generally scored better, and a smaller IQR so their results were more consistent.' Numbers alone score half the marks.",
      },
      {
        tip: "Plot cumulative frequency at the UPPER class boundary",
        detail:
          "Not the midpoint. Plotting at midpoints is a common error that shifts the whole curve and loses every mark that follows.",
      },
      {
        tip: "Never say correlation proves causation",
        detail:
          "Say there is a relationship, then note it may be caused by another factor. Examiners specifically reward this caution.",
      },
      {
        tip: "Justify why extrapolation is unreliable",
        detail:
          "Because the trend is not known to continue beyond the data collected. That phrase is what mark schemes look for.",
      },
      {
        tip: "For histograms, remember area equals frequency",
        detail:
          "The height is frequency density, not frequency. To find a frequency from a histogram, multiply the height by the class width.",
      },
    ],

    workedExamples: [
      {
        question: "Find the mean, median, mode and range of: 4, 7, 3, 7, 9.",
        steps: [
          "MEAN: add them all, then divide by how many there are. 4 + 7 + 3 + 7 + 9 = 30, and 30 ÷ 5 = 6.",
          "MEDIAN: put them in order first — 3, 4, 7, 7, 9. This step is skipped constantly and ruins the answer.",
          "With 5 values the middle one is the third: 7.",
          "MODE: the most frequent value. 7 appears twice, everything else once, so the mode is 7.",
          "RANGE: largest − smallest = 9 − 3 = 6. Note this measures SPREAD, not average.",
        ],
        answer: "Mean 6, median 7, mode 7, range 6",
      },
      {
        question:
          "Estimate the mean from this grouped data: 0<x≤10 (frequency 4), 10<x≤20 (frequency 6), 20<x≤30 (frequency 10).",
        steps: [
          "The original values are unknown, so use the MIDPOINT of each class as a representative value.",
          "Midpoints: 5, 15 and 25.",
          "Multiply each midpoint by its frequency: 5 x 4 = 20; 15 x 6 = 90; 25 x 10 = 250.",
          "Total of those products: 20 + 90 + 250 = 360.",
          "Total frequency: 4 + 6 + 10 = 20.",
          "Estimated mean = 360 ÷ 20 = 18. Call it an ESTIMATE — that word carries a mark.",
        ],
        answer: "An estimated mean of 18",
      },
      {
        question: "A pie chart shows 40 people out of 200. Find the angle for that sector.",
        steps: [
          "A full pie chart is 360 degrees, representing the whole 200 people.",
          "Angle = (frequency ÷ total) x 360.",
          "40 ÷ 200 = 0.2.",
          "0.2 x 360 = 72.",
          "Check: 40 is one fifth of 200, and one fifth of 360 is 72. ✓",
        ],
        answer: "72 degrees",
      },
      {
        question:
          "A histogram has a bar covering 10<x≤30 with a frequency density of 2.5. Find the frequency.",
        steps: [
          "In a histogram the AREA of the bar represents frequency, not the height.",
          "Frequency density = frequency ÷ class width, so frequency = frequency density x class width.",
          "Class width = 30 − 10 = 20.",
          "Frequency = 2.5 x 20 = 50.",
          "This is why histograms are used for unequal class widths — the area stays comparable even when the bars are different widths.",
        ],
        answer: "50",
        higherOnly: true,
      },
    ],

    practice: [
      { question: "Find the mean of 4, 7, 3, 7, 9", accept: ["6"], answer: "6. The total is 30, divided by 5 values." },
      { question: "Find the median of 4, 7, 3, 7, 9", accept: ["7"],
        answer: "7. Order them first — 3, 4, 7, 7, 9 — then take the middle value." },
      { question: "Find the mode of 4, 7, 3, 7, 9", accept: ["7"], answer: "7, because it is the only value appearing more than once." },
      { question: "Find the range of 4, 7, 3, 7, 9", accept: ["6"],
        answer: "6. Largest minus smallest, and it measures SPREAD rather than average." },
      { question: "Find the median of 2, 5, 8, 11", accept: ["6.5", "6 1/2"],
        answer: "6.5. With an even number of values, take the mean of the middle two: (5 + 8) ÷ 2." },
      { question: "For the class 20 < x ≤ 30, what is the midpoint used when estimating a mean?",
        accept: ["25"], answer: "25, the value halfway between the class boundaries." },
      { question: "In a pie chart, how many degrees represent the whole data set?",
        accept: ["360", "360 degrees"], answer: "360 degrees, a complete turn." },
      { question: "40 out of 200 people. What angle would this be on a pie chart, in degrees?",
        accept: ["72"], answer: "72 degrees. (40 ÷ 200) x 360." },
      { question: "Height measured in centimetres — is this discrete or continuous data?",
        accept: ["continuous"], answer: "Continuous, because it can take any value in a range rather than only separate ones." },
      { question: "Number of pets owned — is this discrete or continuous data?",
        accept: ["discrete"], answer: "Discrete. You cannot own 1.4 pets, so it takes only particular values." },
      { question: "As one variable increases the other decreases. What type of correlation is this?",
        accept: ["negative", "negative correlation"], answer:
          "Negative correlation \u2014 the points slope downwards from left to right." },
      { question: "What is the term for estimating a value INSIDE the range of the data?",
        accept: ["interpolation"], answer: "Interpolation, which is generally reliable." },
      { question: "What is the term for estimating BEYOND the range of the data?",
        accept: ["extrapolation"], answer: "Extrapolation, which is unreliable because the trend is not known to continue." },
      { question: "The lower quartile is 12 and the upper quartile is 20. What is the interquartile range?",
        accept: ["8"], answer: "8. IQR = upper quartile − lower quartile, describing the middle 50% and ignoring extremes." },
      { question: "On a cumulative frequency graph, at which point in each class should you plot?",
        accept: ["upper boundary", "the upper boundary", "upper class boundary", "upper bound", "the top"],
        answer: "The UPPER class boundary, never the midpoint. Plotting at midpoints shifts the whole curve." },
      { question: "In a histogram, frequency density equals frequency divided by what?",
        accept: ["class width", "the class width", "width"],
        answer: "Class width. The AREA of each bar then represents the frequency.", higherOnly: true },
      { question: "Explain why the mean of grouped data can only ever be an estimate.",
        answer: "Because the original individual values are not recorded — only how many fell into each class. Using the midpoint assumes the values are evenly spread within each class, which is rarely exactly true. The result is therefore a reasonable approximation rather than the true mean, and calling it an estimate is worth a mark in itself. (Mark this one yourself.)" },
      { question: "Two classes take the same test. Explain what you should compare, and why one measure alone is not enough.",
        answer: "Compare an average AND a measure of spread — typically the median with the interquartile range. The average alone says where the results sit but nothing about consistency: two classes can share a median while one has results tightly clustered and the other has some very high and very low marks. Comparing both, in context, is what earns full marks: 'Class A had a higher median so generally scored better, and a smaller IQR so their results were more consistent.' (Mark this one yourself.)" },
    ],

    misconceptions: [
      { wrong: "\"The range is a type of average.\"",
        right: "It measures SPREAD, not average. Comparison questions want one average and one measure of spread, so the range or interquartile range sits alongside the mean or median, never instead of it." },
      { wrong: "\"You can find the median without putting the data in order.\"",
        right: "Ordering is the first step, always. The median is the middle value of the ORDERED list, and skipping this ruins an otherwise correct answer." },
      { wrong: "\"The mean of grouped data is exact if you do the arithmetic right.\"",
        right: "It is always an estimate, because the original values are unknown and midpoints are only representative. Questions frequently ask WHY, and 'estimate' is a mark in itself." },
      { wrong: "\"On a cumulative frequency graph you plot at the class midpoint.\"",
        right: "Plot at the UPPER class boundary. Midpoints shift the entire curve left and lose every mark that follows from reading off it." },
      { wrong: "\"A strong correlation shows that one variable causes the other.\"",
        right: "Correlation is not causation. Both may be driven by a third factor entirely. Say there is a relationship, then note it may have another cause — examiners specifically reward that caution." },
      { wrong: "\"In a histogram the bar height is the frequency.\"",
        right: "The height is frequency DENSITY; the AREA is the frequency. To get a frequency, multiply height by class width." },
    ],
  },

  // ─────────────────────────── YEAR 11 ──────────────────────────

  "maths/quadratics-and-sequences": {
    summary:
      "A quadratic is any expression where the highest power is 2, and its graph is always a parabola. Sequences are lists of numbers following a rule. They sit together here because both are about spotting patterns and writing a general rule — and because quadratic sequences need both skills at once.",
    keyFacts: [
      {
        heading: "Expanding and factorising quadratics",
        points: [
          "(x + a)(x + b) = x² + (a + b)x + ab.",
          "To factorise x² + bx + c, find two numbers that MULTIPLY to c and ADD to b.",
          "If c is positive, both numbers share the sign of b. If c is negative, the numbers have opposite signs.",
          "Difference of two squares: x² − a² = (x + a)(x − a). Spot it whenever there is no middle term.",
          "Always check by expanding your factorised answer.",
        ],
      },
      {
        heading: "Solving quadratics",
        points: [
          "First rearrange so the equation equals zero.",
          "By factorising: if (x + 3)(x − 5) = 0 then x = −3 or x = 5. Note the signs flip.",
          "A quadratic normally has TWO solutions. Giving only one loses marks.",
          "Quadratic formula: x = (−b ± √(b² − 4ac)) ÷ 2a. Use it when factorising fails.",
          "Completing the square: write as (x + p)² + q. Useful for solving and for finding the turning point.",
        ],
      },
      {
        heading: "Quadratic graphs",
        points: [
          "The graph is a parabola: a U shape if the x² coefficient is positive, an n shape if negative.",
          "Roots are where the curve crosses the x-axis — these are the solutions when y = 0.",
          "The y-intercept is the constant term.",
          "The turning point is the minimum or maximum. From (x + p)² + q, it is at (−p, q).",
          "The curve is symmetrical about a vertical line through the turning point.",
        ],
      },
      {
        heading: "Linear sequences",
        points: [
          "A linear (arithmetic) sequence goes up or down by a constant common difference.",
          "The nth term is dn + a, where d is the common difference and a is the value before the first term.",
          "For 5, 8, 11, 14: d = 3, and the term before the first would be 2, so the nth term is 3n + 2.",
          "To check whether a number is in a sequence, set the nth term equal to it and solve. A whole number answer means yes.",
        ],
      },
      {
        heading: "Quadratic and other sequences",
        points: [
          "A quadratic sequence has a constant SECOND difference.",
          "The coefficient of n² is half the second difference.",
          "Subtract that n² part from each term, then find the linear nth term of what remains.",
          "Geometric sequences multiply by a constant common ratio each time.",
          "Fibonacci-style sequences add the two previous terms.",
          "Triangular numbers: 1, 3, 6, 10, 15. Square numbers: 1, 4, 9, 16, 25. Cube numbers: 1, 8, 27, 64.",
        ],
      },
    ],
    flashcards: [
      { term: "Quadratic", definition: "An expression or equation where the highest power of the variable is 2." },
      { term: "Parabola", definition: "The symmetrical U-shaped or n-shaped curve produced by a quadratic graph." },
      { term: "Root", definition: "A solution of an equation; where a graph crosses the x-axis." },
      { term: "Difference of two squares", definition: "The pattern a squared minus b squared, which factorises to (a + b)(a − b)." },
      { term: "Quadratic formula", definition: "The formula giving the solutions of ax² + bx + c = 0 as minus b plus or minus the square root of b squared minus 4ac, all over 2a." },
      { term: "Completing the square", definition: "Rewriting a quadratic in the form (x + p) squared plus q, which reveals the turning point." },
      { term: "Turning point", definition: "The maximum or minimum point of a curve, where its gradient is zero." },
      { term: "Linear sequence", definition: "A sequence increasing or decreasing by a constant amount each time." },
      { term: "Common difference", definition: "The fixed amount added to each term of a linear sequence to get the next." },
      { term: "nth term", definition: "A rule giving any term of a sequence directly from its position number." },
      { term: "Quadratic sequence", definition: "A sequence with a constant second difference, whose nth term includes an n squared component." },
      { term: "Geometric sequence", definition: "A sequence where each term is multiplied by a constant ratio to get the next." },
      { term: "Common ratio", definition: "The fixed number each term of a geometric sequence is multiplied by." },
    ],
    examTips: [
      {
        tip: "Give BOTH solutions to a quadratic",
        detail:
          "There are almost always two. Writing only one is half an answer and usually half the marks, even when the one you gave is correct.",
      },
      {
        tip: "The signs flip when reading solutions from brackets",
        detail:
          "(x + 4)(x − 2) = 0 gives x = −4 and x = 2. Reading the numbers straight off without changing the sign is a very common slip.",
      },
      {
        tip: "Set the equation to zero before solving",
        detail:
          "x² + 3x = 10 must become x² + 3x − 10 = 0 first. Factorising before rearranging gives nonsense.",
      },
      {
        tip: "Use brackets in the quadratic formula",
        detail:
          "Type it into the calculator carefully, especially when b is negative — minus a negative becomes plus. Write the substituted formula down before evaluating for method marks.",
      },
      {
        tip: "Halve the second difference for quadratic sequences",
        detail:
          "A second difference of 4 means the sequence contains 2n². Getting this step right makes the rest routine.",
      },
      {
        tip: "Show the substitution when checking membership of a sequence",
        detail:
          "Set the nth term equal to the number, solve, and state that n must be a positive whole number. The reasoning is the mark, not the yes or no.",
      },
      {
        tip: "Sketching quadratics means labelling key points",
        detail:
          "Mark the roots, the y-intercept and the turning point. A curve with no labelled points scores very little even if the shape is right.",
      },
    ],

    workedExamples: [
      {
        question: "Solve x² + 5x + 6 = 0 by factorising.",
        steps: [
          "It already equals zero, so no rearranging is needed. If it did not, that would be step one.",
          "Find two numbers that MULTIPLY to 6 and ADD to 5. Try the factor pairs of 6: 1 and 6 (sum 7), 2 and 3 (sum 5). ✓",
          "Write the factorised form: (x + 2)(x + 3) = 0.",
          "If two things multiply to zero, at least one of them must be zero.",
          "So x + 2 = 0 or x + 3 = 0. Note the SIGNS FLIP when reading off the solutions.",
        ],
        answer: "x = −2 or x = −3",
      },
      {
        question: "Find the nth term of the sequence 5, 8, 11, 14, ...",
        steps: [
          "Find the common difference: 8 − 5 = 3, and it stays 3 throughout.",
          "The difference is the coefficient of n, so the rule starts 3n.",
          "Work out the 'zeroth term' — what would come before the first term: 5 − 3 = 2.",
          "So the nth term is 3n + 2.",
          "Check with n = 4: 3(4) + 2 = 14. ✓",
        ],
        answer: "3n + 2",
      },
      {
        question: "Solve x² + 3x − 10 = 0 using the quadratic formula.",
        steps: [
          "Identify a, b and c: a = 1, b = 3, c = −10.",
          "Write the formula before substituting: x = (−b ± √(b² − 4ac)) ÷ 2a.",
          "Substitute carefully with brackets: x = (−3 ± √(3² − 4 x 1 x (−10))) ÷ 2.",
          "Inside the root: 9 − (−40) = 9 + 40 = 49. Note minus a negative becomes plus.",
          "√49 = 7, so x = (−3 ± 7) ÷ 2.",
          "Two answers: (−3 + 7)/2 = 2, and (−3 − 7)/2 = −5.",
        ],
        answer: "x = 2 or x = −5",
        higherOnly: true,
      },
      {
        question: "Find the nth term of the quadratic sequence 2, 5, 10, 17, 26, ...",
        steps: [
          "First differences: 3, 5, 7, 9 — not constant, so it is not linear.",
          "Second differences: 2, 2, 2 — constant, which confirms a quadratic sequence.",
          "The coefficient of n² is HALF the second difference: 2 ÷ 2 = 1, so the sequence contains 1n².",
          "Subtract n² from each term: 2−1=1, 5−4=1, 10−9=1, 17−16=1, 26−25=1.",
          "What remains is the constant 1 every time.",
          "So the nth term is n² + 1. Check with n = 3: 9 + 1 = 10. ✓",
        ],
        answer: "n² + 1",
        higherOnly: true,
      },
    ],

    practice: [
      { question: "Expand and simplify (x + 4)(x + 3)", accept: ["x^2+7x+12", "x^2 + 7x + 12", "x²+7x+12"],
        answer: "x² + 7x + 12. Check with the pattern: 4 + 3 = 7 and 4 x 3 = 12." },
      { question: "Factorise x² + 7x + 12", accept: ["(x+3)(x+4)", "(x+4)(x+3)"],
        answer: "(x + 3)(x + 4). Two numbers multiplying to 12 and adding to 7." },
      { question: "Factorise x² + 5x + 6", accept: ["(x+2)(x+3)", "(x+3)(x+2)"],
        answer: "(x + 2)(x + 3). Multiply to 6, add to 5." },
      { question: "Factorise x² − 9 using the difference of two squares.",
        accept: ["(x+3)(x-3)", "(x-3)(x+3)", "(x+3)(x\u22123)"],
        answer: "(x + 3)(x − 3). Spot this pattern whenever there is no middle term." },
      { question: "Solve (x + 2)(x − 5) = 0. Give the positive solution.",
        accept: ["5", "x=5", "x = 5"], answer: "x = 5. The signs FLIP when reading solutions from brackets — the other solution is −2." },
      { question: "Solve x² + 5x + 6 = 0. Give the solution closer to zero.",
        accept: ["-2", "x=-2", "x = -2"], answer: "x = −2. The full answer is x = −2 or x = −3, and both are needed for full marks." },
      { question: "How many solutions does a quadratic equation normally have?",
        accept: ["2", "two"], answer: "2. Giving only one is half an answer and usually half the marks." },
      { question: "What is the first thing you must do before factorising to solve x² + 3x = 10?",
        accept: ["make it equal zero", "set it to zero", "rearrange to zero", "equal zero", "move everything to one side",
                 "set equal to 0", "make it equal 0"],
        answer: "Rearrange so it equals zero: x² + 3x − 10 = 0. Factorising before rearranging gives nonsense." },
      { question: "Find the nth term of 5, 8, 11, 14", accept: ["3n+2", "3n + 2"],
        answer: "3n + 2. The common difference 3 gives the coefficient, and the zeroth term gives the constant." },
      { question: "Find the nth term of 7, 12, 17, 22", accept: ["5n+2", "5n + 2"],
        answer: "5n + 2. Common difference 5, and the term before the first would be 2." },
      { question: "Find the nth term of 10, 7, 4, 1", accept: ["-3n+13", "13-3n", "-3n + 13", "13 - 3n"],
        answer: "13 − 3n. A decreasing sequence gives a negative coefficient." },
      { question: "What is the 10th term of the sequence with nth term 4n − 3?",
        accept: ["37"], answer: "37. Substitute n = 10: 40 − 3." },
      { question: "In the sequence 2, 6, 18, 54, what is the common ratio?",
        accept: ["3"], answer: "3. Each term is multiplied by 3, which makes this a geometric sequence." },
      { question: "For the quadratic formula, what goes inside the square root?",
        accept: ["b^2-4ac", "b²-4ac", "b^2 - 4ac", "b2-4ac"],
        answer: "b² − 4ac, the discriminant. Take care when b or c is negative.", higherOnly: true },
      { question: "Solve x² + 3x − 10 = 0. Give the positive solution.",
        accept: ["2", "x=2", "x = 2"],
        answer: "x = 2. The other solution is −5. It factorises as (x + 5)(x − 2).", higherOnly: true },
      { question: "A quadratic sequence has a constant second difference of 6. What is the coefficient of n²?",
        accept: ["3"], answer: "3, because the coefficient of n² is half the second difference.", higherOnly: true },
      { question: "Explain why a quadratic equation must be rearranged to equal zero before factorising.",
        answer: "Because the method depends on the fact that if two things multiply to give zero, at least one of them must be zero. That is only true for zero — if the product equalled 10 there would be endless pairs of factors that work, and no way to pick the right one. Setting the equation to zero is what makes the factorised form give the solutions directly. (Mark this one yourself.)" },
      { question: "Explain how to check whether 100 appears in the sequence with nth term 3n + 2.",
        answer: "Set the nth term equal to the value and solve: 3n + 2 = 100, so 3n = 98 and n = 32.67. Since n must be a positive WHOLE number — it counts positions in the sequence — a fractional answer means 100 does not appear. The reasoning about n being a whole number is where the mark sits, not the yes-or-no answer. (Mark this one yourself.)" },
    ],

    misconceptions: [
      { wrong: "\"(x + 2)(x − 5) = 0 gives x = 2 and x = −5.\"",
        right: "The signs flip. x + 2 = 0 gives x = −2, and x − 5 = 0 gives x = 5. Reading the numbers straight off the brackets is a very common slip." },
      { wrong: "\"One solution is enough for a quadratic.\"",
        right: "There are almost always two, and both are needed. Giving one correct solution typically scores half the available marks." },
      { wrong: "\"You can factorise x² + 3x = 10 straight away.\"",
        right: "Rearrange to x² + 3x − 10 = 0 first. The zero-product method only works when the product actually equals zero." },
      { wrong: "\"The nth term of 5, 8, 11 is 3n because the difference is 3.\"",
        right: "3n gives 3, 6, 9. You also need the constant: the term before the first is 5 − 3 = 2, so the rule is 3n + 2." },
      { wrong: "\"A sequence with a changing difference has no nth term rule.\"",
        right: "Check the SECOND differences. If those are constant the sequence is quadratic, and the coefficient of n² is half that second difference." },
      { wrong: "\"Sketching a quadratic just means drawing the right shape.\"",
        right: "Mark the roots, the y-intercept and the turning point. A correctly shaped curve with nothing labelled scores very little." },
    ],
  },

  "maths/circle-theorems": {
    summary:
      "A fixed set of rules about angles in circles. There are not many of them and they never change, which makes this one of the most reliably scoring topics on the Higher paper — provided you name the theorem you used. The marks are split between the answer and the reason, and the reason is where they are usually lost.",
    keyFacts: [
      {
        heading: "Parts of a circle",
        points: [
          "Radius: from the centre to the edge. Diameter: all the way across through the centre, equal to twice the radius.",
          "Chord: a straight line joining two points on the circumference, not through the centre.",
          "Tangent: a straight line touching the circle at exactly one point.",
          "Arc: part of the circumference. Sector: a 'pizza slice' between two radii. Segment: the region cut off by a chord.",
        ],
      },
      {
        heading: "The main theorems",
        points: [
          "The angle at the centre is twice the angle at the circumference, when both are subtended by the same arc.",
          "The angle in a semicircle is 90°.",
          "Angles in the same segment are equal.",
          "Opposite angles in a cyclic quadrilateral add to 180°.",
          "A tangent meets a radius at 90°.",
          "Two tangents drawn from the same external point are equal in length.",
          "The perpendicular from the centre to a chord bisects the chord.",
          "Alternate segment theorem: the angle between a tangent and a chord equals the angle in the alternate segment.",
        ],
      },
      {
        heading: "Recognising which theorem applies",
        points: [
          "A triangle with one side passing through the centre as a diameter suggests the angle in a semicircle.",
          "A four-sided shape with all corners on the circumference is a cyclic quadrilateral.",
          "Two angles standing on the same chord, on the same side, are equal.",
          "A line touching the circle once means a tangent, so look for the right angle with the radius.",
          "Two radii always form an isosceles triangle, because they are equal in length. This is the hidden step in a great many questions.",
        ],
      },
      {
        heading: "Arc, sector and segment calculations",
        points: [
          "Arc length = (angle ÷ 360) × 2πr.",
          "Sector area = (angle ÷ 360) × πr².",
          "The perimeter of a sector includes the arc AND both radii.",
          "Segment area = sector area − triangle area, using ½ab sin C for the triangle.",
        ],
      },
      {
        heading: "Writing proofs",
        points: [
          "Work in short steps, giving a reason for every one.",
          "Use the proper name of each theorem in full.",
          "Common linking facts: angles in a triangle sum to 180°, angles on a straight line sum to 180°, base angles of an isosceles triangle are equal.",
          "Set out proofs line by line, each with its reason. Paragraphs of reasoning are hard to mark and lose marks.",
        ],
      },
    ],
    flashcards: [
      { term: "Radius", definition: "A straight line from the centre of a circle to any point on its circumference." },
      { term: "Chord", definition: "A straight line joining two points on the circumference that does not pass through the centre." },
      { term: "Tangent", definition: "A straight line that touches a circle at exactly one point." },
      { term: "Arc", definition: "A section of the circumference of a circle." },
      { term: "Sector", definition: "The region of a circle enclosed by two radii and the arc between them." },
      { term: "Segment", definition: "The region of a circle cut off by a chord." },
      { term: "Cyclic quadrilateral", definition: "A four-sided shape with all four vertices on the circumference of a circle." },
      { term: "Angle at the centre theorem", definition: "The angle at the centre is twice the angle at the circumference when both stand on the same arc." },
      { term: "Angle in a semicircle", definition: "The angle at the circumference subtended by a diameter is always 90 degrees." },
      { term: "Angles in the same segment", definition: "Angles at the circumference standing on the same arc are equal." },
      { term: "Alternate segment theorem", definition: "The angle between a tangent and a chord equals the angle in the alternate segment." },
      { term: "Subtend", definition: "To form an angle at a point, from the ends of an arc or chord." },
    ],
    examTips: [
      {
        tip: "Name the theorem — the reason is a separate mark",
        detail:
          "'Because the angle at the centre is twice the angle at the circumference' scores. 'Because it looks double' does not. Learn the wording of each theorem, not just the picture.",
      },
      {
        tip: "Mark every angle you find onto the diagram",
        detail:
          "These questions are usually multi-step. Once the intermediate angles are written on, the final one often becomes obvious.",
      },
      {
        tip: "Look for isosceles triangles made by two radii",
        detail:
          "Two radii are always equal, so the base angles are equal. This step is unstated in the question but needed in a large number of proofs.",
      },
      {
        tip: "Use full theorem names, not abbreviations",
        detail:
          "Write 'opposite angles in a cyclic quadrilateral add to 180°' rather than 'cyclic quad rule'. Mark schemes want the property stated.",
      },
      {
        tip: "Include both radii in a sector perimeter",
        detail:
          "The perimeter is the arc plus two radii. Giving only the arc length is a frequent and easily avoided error.",
      },
      {
        tip: "Set proofs out line by line",
        detail:
          "One step and one reason per line. It is easier to mark, easier to check, and makes it obvious you have justified everything.",
      },
    ],

    workedExamples: [
      {
        question: "The angle at the centre of a circle, standing on arc AB, is 130°. Find the angle at the circumference on the same arc.",
        steps: [
          "Identify the theorem: both angles stand on the SAME arc, one at the centre and one at the circumference.",
          "The rule is that the angle at the centre is twice the angle at the circumference.",
          "So the angle at the circumference is half the angle at the centre.",
          "130 ÷ 2 = 65 degrees.",
          "State the reason by name — 'the angle at the centre is twice the angle at the circumference' — because it carries its own mark.",
        ],
        answer: "65 degrees",
        higherOnly: true,
      },
      {
        question: "A triangle is drawn inside a circle with one side as the diameter. One angle is 35°. Find the other two angles.",
        steps: [
          "Spot the diameter: a triangle with the diameter as one side means the angle at the circumference is 90 degrees.",
          "That is the 'angle in a semicircle' theorem, and it gives you an angle for free.",
          "So the three angles are 90, 35 and the unknown.",
          "Angles in a triangle add to 180, so the third is 180 − 90 − 35.",
          "= 55 degrees.",
        ],
        answer: "90 degrees and 55 degrees",
        higherOnly: true,
      },
      {
        question: "In a cyclic quadilateral, one angle is 85°. Find the angle opposite it.",
        steps: [
          "Check it qualifies: all four vertices must lie on the circumference. That makes it a cyclic quadrilateral.",
          "The rule is that OPPOSITE angles in a cyclic quadrilateral add to 180 degrees.",
          "Note it is opposite angles, not adjacent ones.",
          "180 − 85 = 95 degrees.",
        ],
        answer: "95 degrees",
        higherOnly: true,
      },
      {
        question: "A tangent touches a circle at point P. The radius OP is drawn. A line from O makes an angle of 55° with the tangent at another point. Explain how to find the remaining angle in triangle OPQ.",
        steps: [
          "A tangent meets a radius at 90 degrees — that is the theorem, and it is usually the way into these questions.",
          "So the angle at P inside the triangle is 90 degrees.",
          "The angle at the other point is given as 55 degrees.",
          "Angles in a triangle total 180, so the angle at O is 180 − 90 − 55.",
          "= 35 degrees.",
        ],
        answer: "35 degrees, using the tangent-radius right angle plus the angle sum of a triangle.",
        higherOnly: true,
      },
    ],

    practice: [
      { question: "What is the angle in a semicircle, in degrees?", accept: ["90", "90 degrees"],
        answer: "90 degrees. Spotting a diameter in the diagram hands you a right angle for free.", higherOnly: true },
      { question: "The angle at the centre is 130°. What is the angle at the circumference on the same arc?",
        accept: ["65", "65 degrees"], answer: "65 degrees, because the angle at the centre is twice the angle at the circumference.", higherOnly: true },
      { question: "The angle at the circumference is 40°. What is the angle at the centre on the same arc?",
        accept: ["80", "80 degrees"], answer:
          "80 degrees — double the angle at the circumference.", higherOnly: true },
      { question: "Opposite angles in a cyclic quadrilateral add up to how many degrees?",
        accept: ["180", "180 degrees"], answer: "180 degrees. Opposite angles, not adjacent ones.", higherOnly: true },
      { question: "One angle in a cyclic quadrilateral is 85°. What is the opposite angle?",
        accept: ["95", "95 degrees"], answer: "95 degrees, because 180 − 85 = 95.", higherOnly: true },
      { question: "At what angle does a tangent meet a radius, in degrees?",
        accept: ["90", "90 degrees"], answer: "90 degrees. This is usually the way into a tangent question.", higherOnly: true },
      { question: "What is the name for a straight line touching a circle at exactly one point?",
        accept: ["tangent", "a tangent"], answer:
          "A tangent. It meets the radius at that point at 90 degrees, which is usually the way in." },
      { question: "What is the name for a straight line joining two points on the circumference, not through the centre?",
        accept: ["chord", "a chord"], answer: "A chord. The perpendicular from the centre to a chord bisects it." },
      { question: "What is the name for the region enclosed by two radii and the arc between them?",
        accept: ["sector", "a sector"], answer: "A sector — the 'pizza slice' shape." },
      { question: "What is the name for the region cut off by a chord?",
        accept: ["segment", "a segment"], answer: "A segment, found by subtracting a triangle from a sector." },
      { question: "What is the name for a four-sided shape with all vertices on the circumference?",
        accept: ["cyclic quadrilateral", "a cyclic quadrilateral"], answer:
          "A cyclic quadrilateral, whose opposite angles add to 180 degrees." },
      { question: "Find the arc length of a sector with angle 90° in a circle of radius 8 cm. Give your answer in terms of pi.",
        accept: ["4pi", "4π", "4 pi"], answer: "4pi cm. Arc length = (90 ÷ 360) x 2 x pi x 8 = ¼ x 16pi." },
      { question: "Find the area of a sector with angle 90° in a circle of radius 8 cm, in terms of pi.",
        accept: ["16pi", "16π", "16 pi"], answer: "16pi cm². Sector area = (90 ÷ 360) x pi x 8² = ¼ x 64pi." },
      { question: "Does the perimeter of a sector include the two radii? Answer yes or no.",
        accept: ["yes"], answer: "Yes. Perimeter = arc length + both radii. Giving only the arc is a frequent and easily avoided error." },
      { question: "Two radii are drawn to form a triangle. What type of triangle is it always?",
        accept: ["isosceles", "an isosceles triangle", "isosceles triangle"],
        answer: "Isosceles, because both radii are the same length. This unstated step is needed in a great many proofs." },
      { question: "Angles at the circumference standing on the same arc are what?",
        accept: ["equal", "the same", "equal to each other"],
        answer: "Equal — the 'angles in the same segment' theorem.", higherOnly: true },
      { question: "Explain why naming the theorem matters as much as getting the angle right.",
        answer: "Because circle theorem questions almost always split the marks between the value and the justification. The examiner is testing whether you know WHICH property applies, not whether you can subtract from 180. Writing 'because opposite angles in a cyclic quadrilateral add to 180 degrees' earns the second mark; the number on its own leaves half the marks on the table. (Mark this one yourself.)" },
      { question: "Describe how you would set out a multi-step circle theorem proof so it earns full marks.",
        answer: "One step per line, each with its reason written next to it. Mark every angle you find onto the diagram as you go, so later steps become visible. Use the full name of each theorem rather than an abbreviation, and look for the hidden isosceles triangle formed by two radii, which is unstated in the question but needed in many proofs. A paragraph of reasoning is hard to mark and loses marks that a line-by-line layout would have earned. (Mark this one yourself.)" },
    ],

    misconceptions: [
      { wrong: "\"Getting the right angle is enough for full marks.\"",
        right: "Most circle theorem questions award one mark for the value and one for the reason. Name the theorem in full, or you lose half the marks on questions you actually got right." },
      { wrong: "\"Adjacent angles in a cyclic quadrilateral add to 180.\"",
        right: "OPPOSITE angles add to 180. Adjacent angles have no such rule, and using the wrong pair produces a confident, wrong answer." },
      { wrong: "\"The angle at the circumference is twice the angle at the centre.\"",
        right: "It is the other way round: the angle at the CENTRE is twice the angle at the circumference. Getting the direction wrong doubles instead of halves." },
      { wrong: "\"The perimeter of a sector is just the arc length.\"",
        right: "It is the arc plus BOTH radii. The arc alone is the curved part only, and the question asks for the whole boundary." },
      { wrong: "\"Two radii forming a triangle is not worth mentioning.\"",
        right: "It makes the triangle isosceles, so the base angles are equal. That step is unstated in the question and is exactly what many proofs depend on." },
      { wrong: "\"A long paragraph explaining the whole proof is fine.\"",
        right: "Set it out one step and one reason per line. It is easier to mark, easier to check, and makes it obvious that every step was justified." },
    ],
  },

  "maths/vectors-and-transformations": {
    summary:
      "Vectors describe movement: how far across and how far up or down. Transformations describe how shapes move, turn, flip and resize. They belong together because a translation is literally a vector applied to a shape, and because both are marked heavily on precise description rather than clever calculation.",
    keyFacts: [
      {
        heading: "Vector notation",
        points: [
          "A column vector is written with the horizontal movement on top and the vertical movement underneath.",
          "Positive means right and up; negative means left and down.",
          "Vectors are written in bold in print, or underlined when handwritten.",
          "The vector from A to B is written AB with an arrow over it.",
          "Two vectors are equal if they have the same magnitude AND direction, wherever they are on the page.",
        ],
      },
      {
        heading: "Vector arithmetic",
        points: [
          "To add vectors, add the top numbers and add the bottom numbers separately.",
          "To subtract, subtract each component separately.",
          "A scalar multiple multiplies both components: 3a means three times as long, in the same direction.",
          "A negative vector has the same length in the opposite direction.",
          "Magnitude (length) is found with Pythagoras on the two components.",
          "If one vector is a scalar multiple of another, the two are parallel. This is the key to most proof questions.",
        ],
      },
      {
        heading: "The four transformations",
        points: [
          "Translation: a slide, described by a column vector. Size and orientation are unchanged.",
          "Reflection: a flip in a mirror line, which must be given by its equation, such as y = x or x = 2.",
          "Rotation: a turn, needing the angle, the direction (clockwise or anticlockwise) and the centre of rotation.",
          "Enlargement: a resize, needing the scale factor and the centre of enlargement.",
          "Translation, reflection and rotation all preserve size, so the image is congruent to the object. Enlargement does not, unless the scale factor is 1.",
        ],
      },
      {
        heading: "Describing transformations fully",
        points: [
          "Translation: name it and give the vector.",
          "Reflection: name it and give the equation of the mirror line.",
          "Rotation: name it and give the angle, the direction and the centre.",
          "Enlargement: name it and give the scale factor and the centre.",
          "Give ONE transformation unless the question asks for more. Describing two loses the marks even if both are correct.",
          "A missing centre or direction is the most common reason for losing marks here.",
        ],
      },
      {
        heading: "Enlargement details",
        points: [
          "A scale factor greater than 1 makes the shape bigger; between 0 and 1 makes it smaller.",
          "A negative scale factor puts the image on the opposite side of the centre, upside down.",
          "Lengths multiply by the scale factor; areas multiply by the scale factor SQUARED; volumes by the scale factor CUBED.",
          "To find the centre of enlargement, draw lines through corresponding points on the object and image and see where they meet.",
        ],
      },
    ],
    flashcards: [
      { term: "Vector", definition: "A quantity with both magnitude and direction, often written as a column of two numbers." },
      { term: "Column vector", definition: "A vector written with horizontal movement above vertical movement." },
      { term: "Magnitude", definition: "The length of a vector, calculated using Pythagoras on its components." },
      { term: "Scalar", definition: "A quantity with size but no direction, used to multiply a vector." },
      { term: "Resultant vector", definition: "The single vector produced by adding two or more vectors together." },
      { term: "Parallel vectors", definition: "Vectors where one is a scalar multiple of the other, meaning they point along the same direction." },
      { term: "Translation", definition: "A transformation that slides a shape, described by a column vector, leaving size and orientation unchanged." },
      { term: "Reflection", definition: "A transformation that flips a shape in a mirror line, described by the equation of that line." },
      { term: "Rotation", definition: "A transformation that turns a shape, described by the angle, direction and centre of rotation." },
      { term: "Enlargement", definition: "A transformation that resizes a shape, described by a scale factor and a centre of enlargement." },
      { term: "Centre of enlargement", definition: "The fixed point from which a shape is enlarged." },
      { term: "Invariant point", definition: "A point that does not move when a transformation is applied." },
    ],
    examTips: [
      {
        tip: "Describe fully — the details ARE the marks",
        detail:
          "Rotation needs angle, direction and centre. Enlargement needs scale factor and centre. Reflection needs the equation of the line. Naming the transformation alone typically scores one mark out of three.",
      },
      {
        tip: "Give the mirror line as an equation",
        detail:
          "Write y = x or x = −1, not 'the diagonal line' or 'the vertical line'. Descriptions in words do not score.",
      },
      {
        tip: "Only ever describe ONE transformation",
        detail:
          "Unless the question explicitly asks for a combination, describing two loses the marks. If you can see two, find the single one that does the same job.",
      },
      {
        tip: "Remember area scales by the factor squared",
        detail:
          "A scale factor of 3 makes lengths three times longer but areas nine times larger and volumes twenty-seven times larger. This is examined regularly.",
      },
      {
        tip: "Prove parallel by showing a scalar multiple",
        detail:
          "If one vector equals a number times another, they are parallel. Say so explicitly — that sentence is the mark in vector proof questions.",
      },
      {
        tip: "Build vector routes step by step",
        detail:
          "To get from A to C, go A to B then B to C and add. Write the route out before calculating; it prevents sign errors.",
      },
      {
        tip: "Count squares carefully on the grid",
        detail:
          "Most lost marks in transformation questions are counting errors, not method errors. Check one vertex carefully, then use it to place the rest.",
      },
    ],

    workedExamples: [
      {
        question: "Vector a has components (3, 4) and vector b has components (1, -2). Find a + b and the magnitude of a.",
        steps: [
          "To add vectors, add the components separately — never diagonally.",
          "Top: 3 + 1 = 4. Bottom: 4 + (−2) = 2. So a + b = (4, 2).",
          "Magnitude means length, found with Pythagoras on the components.",
          "|a| = √(3² + 4²) = √(9 + 16) = √25.",
          "= 5.",
        ],
        answer: "a + b = (4, 2), and |a| = 5",
      },
      {
        question:
          "A shape is transformed so that every point moves 3 right and 2 down, with no change in size or orientation. Describe the transformation fully.",
        steps: [
          "Size and orientation unchanged, and every point moves the same way — that identifies a TRANSLATION.",
          "A translation must be described by a column vector; words are not enough.",
          "Right is positive on the top: 3.",
          "Down is negative on the bottom: −2.",
          "Full description: a translation by the vector (3, −2).",
        ],
        answer: "A translation by the column vector (3, −2)",
      },
      {
        question:
          "A triangle is enlarged by scale factor 3. Its original area was 5 cm². Find the new area.",
        steps: [
          "Lengths multiply by the scale factor: 3.",
          "AREAS multiply by the scale factor SQUARED, not by the scale factor.",
          "3² = 9.",
          "New area = 5 x 9 = 45 cm².",
          "For reference, volumes would multiply by the scale factor cubed: 27.",
        ],
        answer: "45 cm²",
      },
      {
        question:
          "In a triangle OAB, vector OA = a and OB = b. M is the midpoint of AB. Find OM in terms of a and b.",
        steps: [
          "Build a route from O to M using vectors you already know.",
          "One route is O to A, then A to M. So OM = OA + AM.",
          "AB = AO + OB = −a + b, so AB = b − a.",
          "M is the midpoint, so AM is half of AB: AM = ½(b − a).",
          "OM = a + ½(b − a) = a + ½b − ½a = ½a + ½b.",
          "Which tidies to ½(a + b) — a sensible result, since M is midway between A and B.",
        ],
        answer: "OM = ½(a + b)",
        higherOnly: true,
      },
    ],

    practice: [
      { question: "Vector a = (3, 4) and b = (1, -2). What is the top component of a + b?",
        accept: ["4"], answer: "4. Add the components separately: 3 + 1." },
      { question: "Vector a = (3, 4) and b = (1, -2). What is the bottom component of a + b?",
        accept: ["2"], answer:
          "2, because 4 + (−2) = 2. Components add separately, never diagonally." },
      { question: "What is the magnitude of the vector (3, 4)?",
        accept: ["5"], answer: "5. Use Pythagoras on the components: √(9 + 16) = √25." },
      { question: "What is the magnitude of the vector (5, 12)?",
        accept: ["13"], answer: "13, because √(25 + 144) = √169." },
      { question: "Vector a = (2, 5). What is the top component of 3a?",
        accept: ["6"], answer: "6. A scalar multiplies BOTH components: 3a = (6, 15)." },
      { question: "Which transformation is fully described by a column vector alone?",
        accept: ["translation", "a translation"], answer: "A translation — size and orientation are unchanged." },
      { question: "Which transformation needs an angle, a direction and a centre to be fully described?",
        accept: ["rotation", "a rotation"], answer: "A rotation. Missing any one of the three loses marks." },
      { question: "Which transformation needs a scale factor and a centre?",
        accept: ["enlargement", "an enlargement"], answer:
          "An enlargement, which also needs a centre to be fully described." },
      { question: "Which transformation needs the equation of a mirror line?",
        accept: ["reflection", "a reflection"], answer: "A reflection. Give the equation, such as y = x, never a description in words." },
      { question: "A shape is enlarged by scale factor 3. By what factor does its AREA increase?",
        accept: ["9", "9 times"], answer: "9. Areas scale by the factor squared, not the factor itself." },
      { question: "A shape is enlarged by scale factor 2. By what factor does its VOLUME increase?",
        accept: ["8", "8 times"], answer: "8. Volumes scale by the factor cubed." },
      { question: "An enlargement has scale factor 0.5. Does the shape get bigger or smaller?",
        accept: ["smaller"], answer: "Smaller. A scale factor between 0 and 1 reduces the shape, despite the word 'enlargement'." },
      { question: "How many transformations should you give when asked to 'describe the single transformation'?",
        accept: ["1", "one"], answer: "One. Describing two loses the marks even when both are individually correct." },
      { question: "Vectors a and b are parallel. What must be true of one in terms of the other?",
        accept: ["scalar multiple", "one is a scalar multiple of the other", "a multiple", "multiple of each other",
                 "one is a multiple of the other"],
        answer: "One is a scalar multiple of the other. Saying this explicitly is the mark in vector proof questions." },
      { question: "A point does not move when a transformation is applied. What is it called?",
        accept: ["invariant", "invariant point", "an invariant point"], answer:
          "An invariant point \u2014 for example the centre of a rotation, which never moves." },
      { question: "In triangle OAB with OA = a and OB = b, what is vector AB in terms of a and b?",
        accept: ["b-a", "b - a"], answer: "b − a. Go backwards along a to reach O, then forwards along b: AB = −a + b.", higherOnly: true },
      { question: "Explain why 'reflection in the diagonal line' does not earn full marks.",
        answer: "Because a reflection must be described by the EQUATION of the mirror line, such as y = x or y = −x. 'The diagonal line' is ambiguous — there are two diagonals through the origin and infinitely many other diagonal lines — so it does not define the transformation. The equation is what makes the description complete and reproducible. (Mark this one yourself.)" },
      { question: "Explain why an enlargement of scale factor 3 multiplies area by 9 rather than by 3.",
        answer: "Because area is two-dimensional: it depends on two lengths multiplied together. If every length triples, then both the width and the height triple, so the area becomes 3 x 3 = 9 times larger. The same reasoning gives volume a factor of 3 x 3 x 3 = 27, since volume depends on three lengths. (Mark this one yourself.)" },
    ],

    misconceptions: [
      { wrong: "\"Naming the transformation is enough — 'it's a rotation'.\"",
        right: "A rotation needs the angle, the direction AND the centre. An enlargement needs the scale factor and centre. A reflection needs the equation of the mirror line. Naming it alone typically scores one mark out of three." },
      { wrong: "\"Enlarging by scale factor 3 makes the area 3 times bigger.\"",
        right: "Area scales by the factor SQUARED, so 9 times. Volume scales by the factor cubed, so 27 times. This is examined regularly." },
      { wrong: "\"An enlargement always makes a shape bigger.\"",
        right: "A scale factor between 0 and 1 makes it smaller, and a negative scale factor puts the image on the opposite side of the centre, upside down." },
      { wrong: "\"You can describe a transformation as two steps if that's what you see.\"",
        right: "'Describe the single transformation' means exactly one. Giving two loses the marks even when both are correct, so find the one transformation that does the same job." },
      { wrong: "\"Vectors are added by combining the numbers diagonally.\"",
        right: "Add top to top and bottom to bottom, separately. Mixing the components is a guaranteed wrong answer." },
      { wrong: "\"Most transformation marks are lost through poor method.\"",
        right: "Most are lost through miscounting squares on the grid. Place one vertex very carefully, then use it to position the rest rather than counting each corner from scratch." },
    ],
  },

  "maths/revision-and-exam-practice": {
    summary:
      "Maths marks are lost far more often to method than to misunderstanding. This section is about the habits that convert what you already know into marks: showing working, reading command words, managing the calculator and non-calculator papers differently, and knowing which formulae you must have memorised.",
    keyFacts: [
      {
        heading: "Command words in maths",
        points: [
          "Work out / Calculate: find the answer, showing method.",
          "Show that: you are given the answer, so the marks are entirely for the working leading to it.",
          "Prove: build a complete logical argument with a reason for every step. A few examples is not a proof.",
          "Explain / Give a reason: a written justification is required, not just a number.",
          "Estimate: round to 1 significant figure and calculate. Do not give an exact answer.",
          "Give your answer in terms of π: leave π in, do not evaluate it.",
        ],
      },
      {
        heading: "Showing working",
        points: [
          "Method marks are awarded for correct working even when the final answer is wrong.",
          "A correct answer with no working can still score full marks, but one arithmetic slip then scores zero.",
          "Write each stage on a new line, working down the page.",
          "Never rub out working. Cross it out with a single line if you think it is wrong — it may still earn marks.",
        ],
      },
      {
        heading: "Calculator and non-calculator papers",
        points: [
          "On the non-calculator paper, you need times tables, squares, cubes, fraction arithmetic and exact trig values fluently.",
          "On the calculator paper, use brackets generously and keep full accuracy until the end.",
          "Use the ANS key or memory rather than retyping rounded values.",
          "Check the calculator is in degrees, and know how to enter fractions and powers before the exam.",
        ],
      },
      {
        heading: "Formulae",
        points: [
          "Exam boards provide some formulae and expect others memorised, and this has changed in recent years — check your board's current formula sheet.",
          "Commonly expected from memory: area of a triangle, circle area and circumference, Pythagoras, the trig ratios, speed, density and pressure.",
          "Often given: quadratic formula, sine rule, cosine rule, ½ab sin C, and some volume formulae.",
          "Learn where each formula is on the sheet, so you are not hunting for it under time pressure.",
        ],
      },
      {
        heading: "Revision that works",
        points: [
          "Do questions, do not read worked solutions. Maths is a doing subject and rereading creates false confidence.",
          "Work through past papers by topic first, then whole papers under timed conditions.",
          "Mark your own work against the mark scheme to see exactly where method marks sit.",
          "Keep a list of mistakes you repeat, and review it before the exam. Most people lose marks to the same handful of errors every time.",
          "Practise the topics you find hardest, not the ones you enjoy. Comfortable revision is mostly wasted revision.",
        ],
      },
      {
        heading: "In the exam",
        points: [
          "Roughly one mark per minute, leaving time to check.",
          "Do the questions you can do first; do not lose ten minutes on question 4.",
          "Read every question twice — misreading is more common than not knowing.",
          "Check units and whether the answer needs rounding, and to what.",
          "Ask whether the answer is sensible. A person cannot be 4 metres tall and a probability cannot exceed 1.",
          "Never leave a blank. Write something — a formula or a diagram can earn a mark.",
        ],
      },
    ],
    flashcards: [
      { term: "Method mark", definition: "A mark awarded for using a correct method, even if the final answer is wrong." },
      { term: "Accuracy mark", definition: "A mark awarded for the correct final answer, usually only available if the method is right." },
      { term: "Show that", definition: "A command word meaning the answer is given, so all the marks are for the working that reaches it." },
      { term: "Prove", definition: "A command word requiring a complete logical argument with a justification for every step." },
      { term: "In terms of π", definition: "An instruction to leave π in the answer rather than working it out as a decimal." },
      { term: "Significant figures", definition: "The digits counted from the first non-zero digit, used to specify rounding accuracy." },
      { term: "Estimate", definition: "An approximate answer found by rounding each value to one significant figure before calculating." },
      { term: "Formula sheet", definition: "The list of formulae provided in the exam, which varies by board and changes over time." },
    ],
    examTips: [
      {
        tip: "Show working on every question, without exception",
        detail:
          "It costs seconds and is the difference between zero and most of the marks when you make a small slip. This is the highest-value habit in GCSE maths.",
      },
      {
        tip: "Cross out, never rub out",
        detail:
          "Crossed-out working is still marked if nothing has replaced it. Erased working cannot earn anything.",
      },
      {
        tip: "For 'show that', work towards the given answer",
        detail:
          "Every mark is in the working. Simply writing the answer down — which you were given — scores nothing at all.",
      },
      {
        tip: "Check units and rounding before moving on",
        detail:
          "Read back what the question asked for: cm or m, 2 decimal places or 3 significant figures. This is where finished, correct answers still lose marks.",
      },
      {
        tip: "Sanity-check every answer",
        detail:
          "Is it a sensible size? Probabilities cannot exceed 1, the hypotenuse must be the longest side, and an angle in a triangle cannot be 200°.",
      },
      {
        tip: "Mark your own past papers with the real mark scheme",
        detail:
          "It shows exactly where method marks are awarded, which changes how you lay out your working from then on.",
      },
      {
        tip: "Attempt everything",
        detail:
          "There is no penalty for a wrong answer. Writing a relevant formula or drawing a labelled diagram can pick up a mark on a question you cannot finish.",
      },
    ],

    workedExamples: [
      {
        question:
          "A question says 'Show that the area of the shape is 48 cm². [3 marks]'. Explain what to write.",
        steps: [
          "Notice you have been GIVEN the answer, so writing 48 earns nothing at all.",
          "Every mark is in the working that reaches it.",
          "Split the compound shape into simple parts and state the split clearly.",
          "Calculate each part with the numbers visible: for example rectangle 8 x 4 = 32, triangle ½ x 8 x 4 = 16.",
          "Add them: 32 + 16 = 48 cm², matching the given answer. Finish by saying so.",
        ],
        answer:
          "Full working leading to 48, with the units. The given answer is a check on your method, not the thing being asked for.",
      },
      {
        question:
          "You have 90 minutes for an 80-mark paper. Plan the timing before you start.",
        steps: [
          "Divide the time by the marks: 90 ÷ 80 is slightly over one minute per mark.",
          "Reserve about 10 minutes at the end for checking, leaving 80 minutes of working time.",
          "That gives almost exactly 1 minute per mark.",
          "Write the target finishing time next to every few questions on the paper itself.",
          "If a question overruns, leave it and come back — an unattempted 5-mark question costs far more than an imperfect 3-mark answer.",
        ],
        answer:
          "About 1 minute per mark with 10 minutes reserved for checking, and target times written on the paper.",
      },
      {
        question:
          "You calculate an answer of 4.7 metres for the height of a door. Explain the checking process.",
        steps: [
          "Ask whether the answer is physically sensible before anything else. A door is roughly 2 metres.",
          "4.7 m is more than twice that, so something is wrong even though the arithmetic may look fine.",
          "Go back and check the units: was a measurement given in centimetres and used as metres?",
          "Check whether a multiplication should have been a division — a common cause of an answer that is out by a large factor.",
          "Re-read the question in case the wrong measurement was used entirely.",
        ],
        answer:
          "Sanity-check the size first. Probabilities above 1, angles above 180 in a triangle, and a hypotenuse shorter than a side are all instant signals of an error.",
      },
      {
        question:
          "You lose marks on a percentages question in a past paper. Describe the most useful response.",
        steps: [
          "Do not simply read the worked solution — that feels productive and teaches very little.",
          "Mark it yourself against the official mark scheme and find the exact line where your method diverged.",
          "Identify the CATEGORY of error: reverse percentage treated as a subtraction, percentage change divided by the new value, or compound treated as simple.",
          "Write that category on a personal list of repeated mistakes.",
          "Redo the same question from scratch several days later, and check whether the same category recurs.",
        ],
        answer:
          "Find the category, log it, and retry later from scratch. Most people lose marks to the same handful of error types over and over.",
      },
    ],

    practice: [
      { question: "In a 'show that' question, where are the marks?",
        accept: ["the working", "in the working", "working", "the method", "method"],
        answer: "Entirely in the working. The answer was given to you, so writing it down demonstrates nothing." },
      { question: "What is the name for a mark awarded for correct working when the final answer is wrong?",
        accept: ["method mark", "a method mark", "method marks", "m mark"],
        answer: "A method mark. This is why showing working is the highest-value habit in GCSE Maths." },
      { question: "Should you rub out working you think is wrong? Answer yes or no.",
        accept: ["no"], answer: "No. Cross it out with one line — crossed-out working is still marked if nothing replaces it." },
      { question: "Roughly how many minutes per mark should you allow?",
        accept: ["1", "one", "1 minute", "one minute"], answer: "About one minute per mark, keeping a few minutes back to check." },
      { question: "'Give your answer in terms of pi' means what?",
        accept: ["leave pi in", "leave pi in the answer", "do not evaluate pi", "keep pi", "leave it as pi",
                 "dont work out pi", "leave pi"],
        answer: "Leave pi in the answer — write 25pi, not 78.5. Evaluating it loses the mark." },
      { question: "What does the command word 'Estimate' require you to do first?",
        accept: ["round to 1 significant figure", "round to 1sf", "round each number to 1 significant figure",
                 "round to one significant figure", "round"],
        answer: "Round each value to 1 significant figure, then calculate — and show the rounded values in your working." },
      { question: "Is a probability of 1.2 possible? Answer yes or no.",
        accept: ["no"], answer: "No. Probabilities run from 0 to 1, so anything outside that range is an immediate signal of an error." },
      { question: "In a right-angled triangle, can a shorter side be longer than the hypotenuse? Answer yes or no.",
        accept: ["no"], answer: "No. The hypotenuse is always the longest side, which makes it a fast sanity check on any Pythagoras answer." },
      { question: "What should you write next to your answer as well as the number?",
        accept: ["units", "the units", "unit"], answer: "The units. A bare number is an incomplete answer and loses marks even when the value is right." },
      { question: "Should you round partway through a multi-step calculation? Answer yes or no.",
        accept: ["no"], answer: "No. Keep full accuracy in the calculator and round only the final answer, or you risk losing the accuracy mark." },
      { question: "Which is better revision: reading worked solutions, or attempting questions yourself?",
        accept: ["attempting questions", "attempting questions yourself", "doing questions", "attempting",
                 "doing them yourself", "questions"],
        answer: "Attempting them yourself. Maths is a doing subject, and reading solutions creates confidence without competence." },
      { question: "What document should you mark your own past papers against?",
        accept: ["mark scheme", "the mark scheme", "markscheme"],
        answer: "The official mark scheme, which shows exactly where method marks sit." },
      { question: "Is there a penalty for a wrong answer in GCSE Maths? Answer yes or no.",
        accept: ["no"], answer: "No. Never leave a blank — a formula or a labelled diagram can pick up a mark on its own." },
      { question: "Which topics should you spend most revision time on: the ones you enjoy, or the ones you find hardest?",
        accept: ["hardest", "the hardest", "the ones you find hardest", "hard ones", "the hard ones"],
        answer: "The hardest. Comfortable revision is mostly wasted revision, and the marks are in what you currently cannot do." },
      { question: "Before starting a long question, what should you underline?",
        accept: ["the command word", "command word", "commandword"],
        answer: "The command word. It determines the whole shape of the answer and takes two seconds to find." },
      { question: "What should you check about your calculator at the start of a trigonometry paper?",
        accept: ["degrees", "it is in degrees", "degree mode", "that it is in degrees", "the mode"],
        answer: "That it is in DEGREES, not radians. Radian mode gives plausible wrong answers with no warning at all." },
      { question: "Explain why showing working matters even when you are confident of the answer.",
        answer: "Because method marks are awarded independently of the final answer. With working shown, one arithmetic slip in the last line still scores most of the marks. Without it, the same slip scores zero — the examiner has no way to see that the method was correct. Over a whole paper this is worth many marks to people who already knew how to do the questions. (Mark this one yourself.)" },
      { question: "Describe a three-step routine for getting maximum value from a past paper.",
        answer: "First, sit it under timed conditions with no notes, so it tests recall rather than reading. Second, mark it yourself against the official mark scheme, noting exactly where each mark was awarded and which working earned method marks. Third, sort your errors into categories — misread command words, arithmetic slips, forgotten units, method gaps — and revise the category rather than the individual question, because the same category will recur on completely different content. (Mark this one yourself.)" },
    ],

    misconceptions: [
      { wrong: "\"If I'm confident, I don't need to write the working.\"",
        right: "Method marks are awarded separately from the answer. A single slip at the end costs everything without working, and almost nothing with it." },
      { wrong: "\"In a 'show that' question I can just write the answer they gave me.\"",
        right: "Every mark is in the working. You were given the answer as a check on your method — reproducing it demonstrates nothing." },
      { wrong: "\"Rounding as I go keeps the numbers manageable.\"",
        right: "It makes the final answer slightly wrong and loses the accuracy mark. Keep full precision in the calculator and round once, at the end." },
      { wrong: "\"A tidy paper with erased mistakes looks better to the examiner.\"",
        right: "Neatness earns nothing; method marks earn a lot. Cross out with one line, because crossed-out working is still marked and erased working cannot be." },
      { wrong: "\"If I can't finish a question there's no point writing anything.\"",
        right: "There is no penalty for being wrong. A relevant formula, a labelled diagram or a first correct step can all pick up marks on a question you cannot complete." },
      { wrong: "\"Reading through worked solutions counts as doing past papers.\"",
        right: "It creates familiarity, not ability. Attempt the question first, under time pressure, and only then look — otherwise you are testing your reading, not your maths." },
    ],
  },

  "maths/indices-and-standard-form": {
    summary:
      "Indices are shorthand for repeated multiplication, and once you know the laws they follow, enormous and tiny numbers become easy to handle. Standard form is the same idea put to work: it is how scientists write the mass of an electron and the distance to a star without covering the page in zeros. This topic is heavily examined and, unusually, almost entirely rule-based — which means it is one of the most reliably learnable topics on the syllabus.",
    keyFacts: [
      {
        heading: "The laws of indices",
        points: [
          "Multiplying: a^m × a^n = a^(m+n). Add the powers. 2^3 × 2^4 = 2^7.",
          "Dividing: a^m ÷ a^n = a^(m−n). Subtract the powers. 5^8 ÷ 5^3 = 5^5.",
          "Power of a power: (a^m)^n = a^(mn). Multiply the powers. (3^2)^4 = 3^8.",
          "Anything to the power 0 is 1: a^0 = 1 for any a except 0. This follows from a^n ÷ a^n = a^0 = 1.",
          "The laws only work when the BASES are the same. 2^3 × 3^4 cannot be simplified this way.",
        ],
      },
      {
        heading: "Negative and fractional indices",
        points: [
          "A negative index means a reciprocal: a^(−n) = 1 ÷ a^n. So 2^(−3) = 1/8.",
          "A negative index never makes the answer negative — it makes it a fraction.",
          "A unit fraction index means a root: a^(1/2) = √a, and a^(1/3) is the cube root of a.",
          "A general fraction combines both: a^(m/n) = (the nth root of a), all raised to the power m. Take the root first — the numbers stay smaller.",
          "So 8^(2/3) = (cube root of 8)^2 = 2^2 = 4.",
        ],
        higherOnly: true,
      },
      {
        heading: "Standard form",
        points: [
          "A number in standard form is written A × 10^n, where 1 ≤ A < 10 and n is an integer.",
          "A must be at least 1 and less than 10. 12 × 10^4 is not in standard form; 1.2 × 10^5 is.",
          "A positive power means a large number: 3.2 × 10^5 = 320,000.",
          "A negative power means a small number: 3.2 × 10^(−4) = 0.00032.",
          "To convert to standard form, move the decimal point until one non-zero digit sits in front of it, and count how many places you moved.",
        ],
      },
      {
        heading: "Calculating with standard form",
        points: [
          "To multiply: multiply the front numbers, add the powers.",
          "To divide: divide the front numbers, subtract the powers.",
          "Then fix the answer so the front number is between 1 and 10 again, adjusting the power to match.",
          "To add or subtract, the powers must match first — convert one number so both have the same power of 10, or write both out in full.",
          "On a calculator use the ×10^x or EXP button, never type '× 10 ^'. Typing it out produces the wrong answer when the display is reused.",
        ],
      },
      {
        heading: "Surds",
        points: [
          "A surd is a root that cannot be written exactly as a fraction, such as √2. Leaving it as a surd keeps the answer exact.",
          "√a × √b = √(ab), and √a ÷ √b = √(a/b).",
          "To simplify, look for a factor that is a perfect square: √50 = √25 × √2 = 5√2.",
          "Like surds can be added and subtracted: 5√2 + 3√2 = 8√2. Unlike surds cannot: √2 + √3 stays as it is.",
          "Rationalising the denominator means removing the surd from the bottom by multiplying top and bottom by the same surd.",
        ],
        higherOnly: true,
      },
    ],
    flashcards: [
      { term: "Index (plural indices)", definition: "The small raised number showing how many times a base is multiplied by itself." },
      { term: "Base", definition: "The number being raised to a power. In 3^5, the base is 3." },
      { term: "Multiplication law", definition: "a^m × a^n = a^(m+n) — when the bases match, add the powers." },
      { term: "Division law", definition: "a^m ÷ a^n = a^(m−n) — when the bases match, subtract the powers." },
      { term: "Power of a power", definition: "(a^m)^n = a^(mn) — multiply the powers." },
      { term: "Zero index", definition: "a^0 = 1 for any non-zero a." },
      { term: "Negative index", definition: "a^(−n) = 1/a^n — a reciprocal, not a negative answer." },
      { term: "Fractional index", definition: "a^(1/n) is the nth root of a; a^(m/n) is the nth root of a, raised to the power m." },
      { term: "Standard form", definition: "A × 10^n where 1 ≤ A < 10 and n is an integer." },
      { term: "Surd", definition: "A root that cannot be written exactly as a fraction, such as √2 or √3." },
      { term: "Rationalising the denominator", definition: "Removing a surd from the bottom of a fraction by multiplying top and bottom by that surd." },
      { term: "Perfect square", definition: "A number that is the square of an integer: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100." },
      { term: "Reciprocal", definition: "1 divided by the number. The reciprocal of 4 is 1/4, which is also 4^(−1)." },
    ],
    examTips: [
      {
        tip: "Check the bases match before using any index law",
        detail:
          "The laws add and subtract powers only when the base is identical. 2^5 × 4^3 needs 4 rewriting as 2^2 first, giving 2^5 × 2^6 = 2^11.",
      },
      {
        tip: "A negative power gives a fraction, not a negative number",
        detail:
          "3^(−2) = 1/9, not −9. This is the single most common error in the whole topic, and it is worth saying to yourself every time.",
      },
      {
        tip: "For a^(m/n), take the root first",
        detail:
          "For 27^(2/3), cube root 27 to get 3, then square to get 9. Doing it the other way means squaring 27 to 729 first, which is far more work for the same answer.",
      },
      {
        tip: "Always finish by checking A is between 1 and 10",
        detail:
          "Calculations often produce something like 34 × 10^6. That is not standard form. Rewrite it as 3.4 × 10^7 — the mark is for the form as well as the value.",
      },
      {
        tip: "Use the calculator's ×10^x button",
        detail:
          "Typing '3 × 10 ^ 5' works once, but goes wrong as soon as you reuse the answer or square it. The dedicated button keeps the number as one value.",
      },
      {
        tip: "Give exact surd answers when the question says 'exact'",
        detail:
          "'Give your answer in exact form' or 'in surd form' means do not round. 5√2, not 7.07. Rounding there loses the mark completely.",
      },
      {
        tip: "Count decimal places carefully for negative powers",
        detail:
          "0.00047 → the decimal point moves 4 places right to reach 4.7, so it is 4.7 × 10^(−4). Writing the digits out and counting beats guessing.",
      },
    ],

    workedExamples: [
      {
        question: "Simplify 3^7 × 3^4 ÷ 3^9, giving your answer as a power of 3.",
        steps: [
          "The bases all match, so the index laws apply.",
          "Multiplying adds the powers: 3^7 × 3^4 = 3^(7+4) = 3^11.",
          "Dividing subtracts the powers: 3^11 ÷ 3^9 = 3^(11−9).",
          "11 − 9 = 2.",
          "So the answer is 3^2, which equals 9 if a number is wanted.",
        ],
        answer: "3^2 (= 9)",
      },
      {
        question: "Work out (2.4 × 10^7) × (5 × 10^(−3)), giving your answer in standard form.",
        steps: [
          "Multiply the front numbers: 2.4 × 5 = 12.",
          "Add the powers: 10^7 × 10^(−3) = 10^(7 + (−3)) = 10^4.",
          "So far: 12 × 10^4.",
          "Check the form: 12 is not between 1 and 10, so this is not yet standard form.",
          "Rewrite 12 as 1.2 × 10, so 12 × 10^4 = 1.2 × 10^5.",
        ],
        answer: "1.2 × 10^5",
      },
      {
        question: "Evaluate 16^(3/4) without a calculator.",
        steps: [
          "The denominator of the fraction is the root; the numerator is the power.",
          "So 16^(3/4) = (the fourth root of 16), cubed.",
          "The fourth root of 16 is 2, because 2 × 2 × 2 × 2 = 16.",
          "Now cube it: 2^3 = 8.",
          "Taking the root first kept the numbers small — the alternative was cubing 16 to 4096 first.",
        ],
        answer: "8",
        higherOnly: true,
      },
      {
        question: "Simplify √50 + √18, giving your answer in surd form.",
        steps: [
          "Look for perfect-square factors in each surd.",
          "50 = 25 × 2, so √50 = √25 × √2 = 5√2.",
          "18 = 9 × 2, so √18 = √9 × √2 = 3√2.",
          "Both are now multiples of √2, so they are like terms and can be added.",
          "5√2 + 3√2 = 8√2.",
        ],
        answer: "8√2",
        higherOnly: true,
      },
    ],

    practice: [
      { question: "Simplify 2^5 × 2^3, giving your answer in the form 2^n.",
        accept: ["2^8"],
        answer: "2^8. Multiplying with the same base means adding the powers: 5 + 3 = 8." },
      { question: "Simplify 7^9 ÷ 7^4, giving your answer in the form 7^n.",
        accept: ["7^5"],
        answer: "7^5. Dividing subtracts the powers: 9 − 4 = 5." },
      { question: "Simplify (5^3)^2, giving your answer in the form 5^n.",
        accept: ["5^6"],
        answer: "5^6. A power of a power multiplies the indices: 3 × 2 = 6." },
      { question: "What is 9^0?", accept: ["1", "one"],
        answer: "1. Anything (except 0) to the power zero is 1." },
      { question: "Work out 2^(−3) as a fraction.", accept: ["1/8", "0.125"],
        answer: "1/8. A negative index means the reciprocal — it never makes the answer negative." },
      { question: "Work out 5^(−2) as a fraction.", accept: ["1/25", "0.04"],
        answer: "1/25. A negative index means the reciprocal, so the answer is a fraction — never −25." },
      { question: "Write 47,000 in standard form.",
        accept: ["4.7x10^4", "4.7×10^4", "4.7*10^4", "4.7e4", "4.7 x 10^4"],
        answer: "4.7 × 10^4. The decimal point moves 4 places left." },
      { question: "Write 0.00062 in standard form.",
        accept: ["6.2x10^-4", "6.2×10^-4", "6.2*10^-4", "6.2e-4"],
        answer: "6.2 × 10^(−4). Small numbers take a negative power." },
      { question: "Write 3.5 × 10^3 as an ordinary number.",
        accept: ["3500", "3,500"],
        answer: "3500 — move the decimal point 3 places right." },
      { question: "Write 8.1 × 10^(−2) as an ordinary number.",
        accept: ["0.081"],
        answer: "0.081 — move the decimal point 2 places left." },
      { question: "Is 15 × 10^6 in standard form? Answer yes or no.",
        accept: ["no"],
        answer: "No. The front number must be at least 1 and less than 10, so it should be 1.5 × 10^7." },
      { question: "Work out (2 × 10^5) × (3 × 10^4), giving your answer in standard form.",
        accept: ["6x10^9", "6×10^9", "6*10^9", "6e9"],
        answer: "6 × 10^9. Multiply the fronts (2 × 3 = 6) and add the powers (5 + 4 = 9)." },
      { question: "Work out (8 × 10^9) ÷ (2 × 10^3), giving your answer in standard form.",
        accept: ["4x10^6", "4×10^6", "4*10^6", "4e6"],
        answer: "4 × 10^6. Divide the fronts and subtract the powers." },
      { question: "Simplify √32 in the form a√2.",
        accept: ["4√2", "4root2", "4sqrt2", "4 √2"],
        answer: "4√2, since 32 = 16 × 2 and √16 = 4.", higherOnly: true },
      { question: "Simplify √3 × √12.",
        accept: ["6"],
        answer: "6. Combine under one root first: √3 × √12 = √36, and √36 = 6 exactly, so no surd remains.", higherOnly: true },
      { question: "Evaluate 27^(1/3).", accept: ["3", "three"],
        answer: "3 — a unit fraction index means a root, and the cube root of 27 is 3.", higherOnly: true },
      { question: "Explain why anything raised to the power zero equals 1.",
        answer: "Because of the division law. Dividing a power by itself gives 1 — for example 5^4 ÷ 5^4 = 1, since any number divided by itself is 1. But the division law says to subtract the powers, so 5^4 ÷ 5^4 = 5^(4−4) = 5^0. Both routes describe the same calculation, so 5^0 must equal 1. Nothing is special about 5, so the same argument works for any non-zero base. (Mark this one yourself.)" },
      { question: "Explain why standard form is used in science rather than writing numbers out in full.",
        answer: "Because the numbers involved are far outside everyday size and writing them out invites mistakes. The mass of an electron is roughly 0.000000000000000000000000000000911 kg — counting those zeros correctly, by eye, every time, is not realistic, whereas 9.11 × 10^(−31) can be read at a glance. Standard form also makes sizes instantly comparable, since the power tells you the order of magnitude, and it makes multiplying and dividing far easier because the powers simply add or subtract. (Mark this one yourself.)" },
    ],

    misconceptions: [
      { wrong: "\"2^(−3) is −8.\"",
        right: "It is 1/8. A negative index means a reciprocal, not a negative answer. The sign of the index and the sign of the answer are unrelated." },
      { wrong: "\"2^3 × 3^4 = 6^7.\"",
        right: "The index laws only apply when the BASES are the same. With different bases you must work each out separately: 8 × 81 = 648." },
      { wrong: "\"12 × 10^5 is in standard form.\"",
        right: "The front number must satisfy 1 ≤ A < 10. This is 1.2 × 10^6. Marks are given for the form, not only the value." },
      { wrong: "\"(a^m)^n means a^(m+n).\"",
        right: "It means a^(mn) — multiply. Adding is for multiplying two powers together; multiplying is for raising a power to a power." },
      { wrong: "\"√2 + √3 = √5.\"",
        right: "Roots do not add like that. √2 + √3 ≈ 3.15 while √5 ≈ 2.24. Only LIKE surds combine: 5√2 + 3√2 = 8√2." },
      { wrong: "\"You can add standard form numbers by adding the fronts and the powers.\"",
        right: "Only multiplication and division work on the powers. To add, make the powers equal first, or write both numbers out in full." },
    ],
  },

  "maths/perimeter-area-and-volume": {
    summary:
      "Perimeter is the distance round the edge, area is the space inside, and volume is the space filled. They are measured in different units for a reason, and half the marks lost on this topic come from mixing them up. The formulas themselves are short; what is examined is whether you can break an awkward shape into ones you recognise, and whether you work in consistent units.",
    keyFacts: [
      {
        heading: "Perimeter and area of straight-sided shapes",
        points: [
          "Perimeter is the total distance around the outside. Add every side — including the ones you have to work out yourself.",
          "Rectangle: area = length × width.",
          "Triangle: area = ½ × base × perpendicular height. The height must be at right angles to the base, not the sloping side.",
          "Parallelogram: area = base × perpendicular height.",
          "Trapezium: area = ½ × (a + b) × h, where a and b are the two parallel sides and h is the distance between them.",
          "Compound shapes: split them into rectangles and triangles, find each area, then add — or find a large rectangle and subtract the missing piece.",
        ],
      },
      {
        heading: "Circles",
        points: [
          "The radius is the distance from the centre to the edge; the diameter is all the way across, so d = 2r.",
          "Circumference = π × diameter = 2 × π × radius.",
          "Area = π × radius². Square the radius first, then multiply by π.",
          "Confusing the two formulas is the most common circle error: circumference uses the diameter, area uses the radius squared.",
          "Give answers as a multiple of π when asked to be exact, and only round when the question asks for decimal places or significant figures.",
        ],
      },
      {
        heading: "Arcs and sectors",
        points: [
          "A sector is a slice of a circle bounded by two radii and an arc; the angle at the centre decides how big a fraction it is.",
          "Arc length = (θ ÷ 360) × π × d — the fraction of the full circumference.",
          "Sector area = (θ ÷ 360) × π × r² — the same fraction of the full area.",
          "The perimeter of a sector includes the two straight radii as well as the curved arc. Forgetting them is a standard trap.",
          "A semicircle is just θ = 180, a quarter circle θ = 90 — the same formula, not a separate rule to learn.",
        ],
        higherOnly: true,
      },
      {
        heading: "Volume",
        points: [
          "A prism has the same cross-section all the way along. Volume = area of cross-section × length.",
          "Cuboid: volume = length × width × height.",
          "Cylinder: volume = π × r² × h — a prism whose cross-section is a circle.",
          "Pyramid or cone: volume = ⅓ × base area × perpendicular height. A cone is ⅓ × π × r² × h.",
          "Sphere: volume = 4/3 × π × r³.",
          "Check which of these your board gives you in the exam and which you must memorise — this has changed in recent years.",
        ],
      },
      {
        heading: "Surface area and units",
        points: [
          "Surface area is the total area of all the faces. The reliable method is to list every face, find each area, then add.",
          "Cylinder: total surface area = 2πr² (the two circular ends) + 2πrh (the curved surface, which unrolls into a rectangle).",
          "Sphere: surface area = 4πr².",
          "Units: length in cm, area in cm², volume in cm³. The little number tells you how many dimensions were multiplied together.",
          "Convert to the same unit BEFORE calculating. 1 cm² = 100 mm², and 1 m³ = 1,000,000 cm³ — these conversions catch people out because the factor is squared or cubed.",
        ],
      },
    ],
    flashcards: [
      { term: "Perimeter", definition: "The total distance around the outside of a 2D shape, measured in units of length." },
      { term: "Area", definition: "The amount of space inside a 2D shape, measured in square units such as cm²." },
      { term: "Volume", definition: "The amount of space inside a 3D shape, measured in cubic units such as cm³." },
      { term: "Area of a triangle", definition: "½ × base × perpendicular height." },
      { term: "Area of a trapezium", definition: "½ × (a + b) × h, where a and b are the parallel sides." },
      { term: "Circumference", definition: "The perimeter of a circle: π × diameter, or 2 × π × radius." },
      { term: "Area of a circle", definition: "π × radius². Square the radius before multiplying by π." },
      { term: "Sector", definition: "A slice of a circle bounded by two radii and an arc." },
      { term: "Arc", definition: "Part of the circumference of a circle." },
      { term: "Prism", definition: "A 3D shape with the same cross-section throughout its length." },
      { term: "Volume of a prism", definition: "Area of cross-section × length." },
      { term: "Volume of a cylinder", definition: "π × radius² × height." },
      { term: "Volume of a cone", definition: "⅓ × π × radius² × perpendicular height." },
      { term: "Volume of a sphere", definition: "4/3 × π × radius³ — check whether your board provides this formula or expects it memorised." },
      { term: "Surface area", definition: "The total area of all the faces of a 3D shape." },
      { term: "Perpendicular height", definition: "The height measured at right angles to the base — not the slant length." },
    ],
    examTips: [
      {
        tip: "Write the units, with the right power",
        detail:
          "cm for perimeter, cm² for area, cm³ for volume. Marks are routinely available for units alone, and they are the cheapest marks in the whole paper.",
      },
      {
        tip: "Use the perpendicular height, never the slant",
        detail:
          "Diagrams deliberately give both. For a triangle or parallelogram the height must be at right angles to the base — the sloping side is there to catch you out.",
      },
      {
        tip: "Convert units before you calculate, not after",
        detail:
          "A shape given partly in metres and partly in centimetres is a deliberate trap. Convert everything first, and say which unit you have chosen.",
      },
      {
        tip: "Show the split on a compound shape",
        detail:
          "Draw the dividing line on the diagram and label each piece. Method marks are awarded for a correct split even if the arithmetic later goes wrong.",
      },
      {
        tip: "Include the radii in a sector's perimeter",
        detail:
          "The perimeter of a sector is arc + r + r. Giving only the arc length is the single most common mistake on sector questions.",
      },
      {
        tip: "Leave answers in terms of π when told to",
        detail:
          "'Give your answer in terms of π' means write 25π, not 78.5. Rounding there loses the mark outright.",
      },
      {
        tip: "Work backwards when the area is given",
        detail:
          "If the area is known and a length is missing, substitute into the formula and solve. These reverse questions are common and worth practising deliberately.",
      },
    ],

    workedExamples: [
      {
        question:
          "An L-shaped room is made from a 6 m by 4 m rectangle with a 2 m by 2 m square cut out of one corner. Find its area and perimeter.",
        steps: [
          "Area: start with the whole rectangle, 6 × 4 = 24 m².",
          "Subtract the removed square: 2 × 2 = 4 m². So the area is 24 − 4 = 20 m².",
          "Perimeter: the cut-out changes the shape of the edge but you must add every side as it now runs.",
          "The sides are 6, 4, 4 (the 6 minus the 2 removed), 2, 2 and 2 going round the L.",
          "6 + 4 + 4 + 2 + 2 + 2 = 20 m. Notice the perimeter is unchanged from the original rectangle here, which is worth checking rather than assuming.",
        ],
        answer: "Area = 20 m², perimeter = 20 m.",
      },
      {
        question:
          "A circle has radius 7 cm. Find its circumference and area, to 1 decimal place.",
        steps: [
          "Circumference = 2 × π × r = 2 × π × 7.",
          "2 × 7 = 14, so circumference = 14π = 43.98... = 44.0 cm.",
          "Area = π × r² — square the radius FIRST.",
          "7² = 49, so area = 49π = 153.93... = 153.9 cm².",
          "Check the units: cm for circumference, cm² for area. Different quantities, different units.",
        ],
        answer: "Circumference = 44.0 cm (14π), area = 153.9 cm² (49π).",
      },
      {
        question:
          "A cylinder has radius 5 cm and height 12 cm. Find its volume and total surface area, in terms of π.",
        steps: [
          "Volume = π × r² × h = π × 5² × 12.",
          "5² = 25, and 25 × 12 = 300, so the volume is 300π cm³.",
          "Surface area has two parts: the two circular ends, and the curved surface.",
          "Two ends: 2 × π × r² = 2 × π × 25 = 50π cm².",
          "Curved surface: 2 × π × r × h = 2 × π × 5 × 12 = 120π cm². Total = 50π + 120π = 170π cm².",
        ],
        answer: "Volume = 300π cm³, total surface area = 170π cm².",
      },
      {
        question:
          "A triangle has area 36 cm² and base 9 cm. Find its perpendicular height.",
        steps: [
          "Start from the formula: area = ½ × base × height.",
          "Substitute what you know: 36 = ½ × 9 × h.",
          "½ × 9 = 4.5, so 36 = 4.5h.",
          "Divide both sides by 4.5: h = 36 ÷ 4.5 = 8.",
          "The answer is a length, so the unit is cm, not cm².",
        ],
        answer: "8 cm",
      },
    ],

    practice: [
      { question: "Find the area of a rectangle 8 cm by 5 cm. Give the number only, in cm².",
        accept: ["40"],
        answer: "40 cm². Area of a rectangle = length × width." },
      { question: "Find the perimeter of a rectangle 8 cm by 5 cm. Give the number only, in cm.",
        accept: ["26"],
        answer: "26 cm. 8 + 5 + 8 + 5, or 2 × (8 + 5)." },
      { question: "Find the area of a triangle with base 10 cm and perpendicular height 6 cm, in cm².",
        accept: ["30"],
        answer: "30 cm². ½ × base × perpendicular height = ½ × 10 × 6. The height must be at right angles to the base." },
      { question: "Find the area of a parallelogram with base 12 cm and perpendicular height 7 cm, in cm².",
        accept: ["84"],
        answer: "84 cm². Base × perpendicular height — no halving." },
      { question: "Find the area of a trapezium with parallel sides 6 cm and 10 cm, and height 4 cm, in cm².",
        accept: ["32"],
        answer: "32 cm². ½ × (6 + 10) × 4 = ½ × 16 × 4." },
      { question: "A circle has radius 3 cm. Give its area in terms of π (for example, write 9π as 9pi).",
        accept: ["9pi", "9π"],
        answer: "9π cm². Area = πr², and 3² = 9." },
      { question: "A circle has diameter 10 cm. Give its circumference in terms of π (write 10π as 10pi).",
        accept: ["10pi", "10π"],
        answer: "10π cm. Circumference = π × diameter." },
      { question: "A circle has radius 6 cm. What is its diameter, in cm?",
        accept: ["12"],
        answer: "12 cm. The diameter is twice the radius." },
      { question: "Find the volume of a cuboid 4 cm by 3 cm by 5 cm, in cm³.",
        accept: ["60"],
        answer: "60 cm³. Length × width × height." },
      { question: "A prism has cross-sectional area 15 cm² and length 8 cm. Find its volume in cm³.",
        accept: ["120"],
        answer: "120 cm³. Volume of a prism = area of cross-section × length." },
      { question: "A cylinder has radius 2 cm and height 9 cm. Give its volume in terms of π (write 36π as 36pi).",
        accept: ["36pi", "36π"],
        answer: "36π cm³. πr²h = π × 4 × 9." },
      { question: "What are the units of volume if all lengths are in centimetres? Write cm3 for cm³.",
        accept: ["cm3", "cm³", "cubic cm", "cubic centimetres", "cubic centimeters"],
        answer: "cm³ — three dimensions multiplied together." },
      { question: "How many cm² are in 1 m²?",
        accept: ["10000", "10,000"],
        answer: "10,000. The conversion factor 100 gets squared, which is why this catches people out." },
      { question: "A square has area 49 cm². What is its side length, in cm?",
        accept: ["7"],
        answer: "7 cm. Work backwards: the side is the square root of the area." },
      { question: "A rectangle has area 48 cm² and width 6 cm. Find its length, in cm.",
        accept: ["8"],
        answer: "8 cm. Work backwards from area = length × width, so length = 48 ÷ 6. The answer is a length, so the unit is cm not cm²." },
      { question: "A semicircle has radius 4 cm. Give the length of its curved edge in terms of π (write 4π as 4pi).",
        accept: ["4pi", "4π"],
        answer: "4π cm — half of the full circumference 8π. Note the full PERIMETER would also include the 8 cm diameter." },
      { question: "Explain why the perimeter of a sector is not simply the arc length.",
        answer: "Because the sector is bounded by three edges, not one. Two of them are the straight radii that cut the slice out of the circle, and the third is the curved arc. The perimeter means the whole distance round the outside, so it is arc + r + r. Only the arc is curved, which is probably why it is the part people remember — but leaving out the two straight edges would be like giving the perimeter of a rectangle as the length of one side. (Mark this one yourself.)" },
      { question: "Explain why doubling the radius of a circle multiplies its area by four, not by two.",
        answer: "Because the radius appears squared in the area formula. Area = πr², so replacing r with 2r gives π(2r)² = π × 4r² = 4πr² — four times the original. The circumference, by contrast, uses r to the power one, so doubling the radius simply doubles it. This is the general pattern: lengths scale by the scale factor, areas by its square, and volumes by its cube. (Mark this one yourself.)" },
    ],

    misconceptions: [
      { wrong: "\"Area of a circle is 2πr.\"",
        right: "That is the circumference. Area is πr². A quick sanity check: area must come out in square units, and only r² can do that." },
      { wrong: "\"Use the sloping side as the height of a triangle.\"",
        right: "The height must be perpendicular to the base. Diagrams give the slant deliberately, because using it is such a common error." },
      { wrong: "\"1 m² = 100 cm².\"",
        right: "1 m² = 10,000 cm², because both dimensions convert: 100 × 100. Similarly 1 m³ = 1,000,000 cm³." },
      { wrong: "\"Perimeter and area both grow at the same rate when a shape is enlarged.\"",
        right: "Lengths scale by the scale factor, areas by its square, volumes by its cube. Doubling every length multiplies area by 4 and volume by 8." },
      { wrong: "\"The volume of a cone is πr²h.\"",
        right: "That is the cylinder. A cone is exactly one third of the cylinder that would contain it: ⅓πr²h. The same ⅓ applies to any pyramid." },
      { wrong: "\"Surface area and volume are basically the same measurement.\"",
        right: "Surface area is the total area of the faces, measured in cm²; volume is the space inside, measured in cm³. A question can give one and ask for the other." },
    ],
  },

  "maths/straight-line-graphs": {
    summary:
      "Every straight line on a graph can be written as y = mx + c, and once you can read m and c you can go between an equation and a picture in either direction. This is one of the highest-value topics on the paper: it appears in its own right, inside simultaneous equations, in real-life graphs, and again at A level, where it never really goes away.",
    keyFacts: [
      {
        heading: "Coordinates and midpoints",
        points: [
          "A coordinate pair is written (x, y) — across first, then up. 'Along the corridor and up the stairs'.",
          "The x-axis is horizontal, the y-axis is vertical, and they meet at the origin (0, 0).",
          "The midpoint of two points is found by averaging: add the x values and halve, then add the y values and halve.",
          "Negative coordinates work the same way; a point can sit in any of the four quadrants.",
          "Plot points carefully — a misread axis scale ruins everything that follows, and it is the easiest error to avoid.",
        ],
      },
      {
        heading: "y = mx + c",
        points: [
          "In y = mx + c, m is the gradient (the steepness) and c is the y-intercept (where the line crosses the y-axis).",
          "Gradient = change in y ÷ change in x — 'rise over run'.",
          "A positive gradient rises left to right; a negative gradient falls left to right.",
          "A larger gradient means a steeper line. A gradient of 0 gives a horizontal line.",
          "The equation must be rearranged into this form before m and c can be read off: from 2y = 6x + 8, first divide by 2 to get y = 3x + 4.",
        ],
      },
      {
        heading: "Special lines",
        points: [
          "y = a is a horizontal line crossing the y-axis at a. Its gradient is 0.",
          "x = a is a vertical line crossing the x-axis at a. Its gradient is undefined, because the run is zero and dividing by zero is not possible.",
          "y = x is the diagonal through the origin with gradient 1.",
          "Confusing y = 3 with x = 3 is extremely common: remember that y = 3 means 'every point where y is 3', which is a horizontal row.",
          "Lines through the origin have c = 0, so they are simply y = mx.",
        ],
      },
      {
        heading: "Parallel and perpendicular",
        points: [
          "Parallel lines have the SAME gradient. y = 3x + 1 and y = 3x − 7 never meet.",
          "Perpendicular lines have gradients that multiply to −1. The perpendicular gradient is the negative reciprocal: flip the fraction and change the sign.",
          "So a line of gradient 2 is perpendicular to one of gradient −½; gradient −3/4 is perpendicular to 4/3.",
          "To find the equation of a line, you need a gradient and one point. Substitute both into y = mx + c and solve for c.",
          "Two lines cross where their equations are equal — which is exactly what solving simultaneous equations does algebraically.",
        ],
        higherOnly: true,
      },
      {
        heading: "Finding the equation from a graph or two points",
        points: [
          "From a graph: read c where the line crosses the y-axis, then pick two clear points to find the gradient.",
          "From two points: gradient = (y₂ − y₁) ÷ (x₂ − x₁). Keep the points in the same order top and bottom or the sign comes out wrong.",
          "Then substitute one of the points and the gradient into y = mx + c and solve for c.",
          "Always finish by checking the OTHER point satisfies your equation — a free and reliable check.",
          "To plot a line, a table of three values of x is enough: two to draw it and one to confirm they are in line.",
        ],
      },
    ],
    flashcards: [
      { term: "Gradient", definition: "The steepness of a line: change in y divided by change in x." },
      { term: "y-intercept", definition: "The y value where a line crosses the y-axis — the c in y = mx + c." },
      { term: "y = mx + c", definition: "The general equation of a straight line, where m is the gradient and c the y-intercept." },
      { term: "Origin", definition: "The point (0, 0), where the x and y axes cross." },
      { term: "Midpoint", definition: "The point halfway between two others, found by averaging the x values and the y values." },
      { term: "Parallel lines", definition: "Lines with equal gradients, which never meet." },
      { term: "Perpendicular lines", definition: "Lines meeting at 90°, whose gradients multiply to give −1." },
      { term: "Negative reciprocal", definition: "Flip the fraction and change the sign: the negative reciprocal of 2 is −½." },
      { term: "Horizontal line", definition: "A line of the form y = a, with gradient 0." },
      { term: "Vertical line", definition: "A line of the form x = a, whose gradient is undefined." },
      { term: "Quadrant", definition: "One of the four regions the axes divide the plane into." },
      { term: "Point of intersection", definition: "Where two lines cross — the solution of their equations taken simultaneously." },
      { term: "Linear", definition: "Producing a straight line; an equation where x appears only to the power one." },
    ],
    examTips: [
      {
        tip: "Rearrange into y = mx + c before reading anything off",
        detail:
          "3y − 6x = 12 tells you nothing at a glance. Divide through to get y = 2x + 4, and now the gradient and intercept are simply there to be read.",
      },
      {
        tip: "Watch the sign of the gradient",
        detail:
          "A line falling left to right has a NEGATIVE gradient. If your answer's sign disagrees with the picture, you have subtracted in inconsistent orders.",
      },
      {
        tip: "Use two points far apart when reading a gradient",
        detail:
          "Points close together magnify any small misreading. Pick two that sit exactly on grid intersections and are well separated.",
      },
      {
        tip: "Check your equation against the second point",
        detail:
          "Once you have y = mx + c, substitute the other given point. If it works, you are almost certainly right — a genuinely free check.",
      },
      {
        tip: "Keep y = 3 and x = 3 straight",
        detail:
          "y = 3 is horizontal; x = 3 is vertical. Say the equation aloud as 'y is always 3' and the direction follows.",
      },
      {
        tip: "For perpendicular, flip AND change sign",
        detail:
          "Doing only one of the two is the standard error. Gradient 2 goes to −½; gradient −⅔ goes to 3/2. Always check the product is −1.",
      },
      {
        tip: "Label your axes and use the scale given",
        detail:
          "Marks go for correct plotting. A drawn line with no labels, or drawn against a scale you invented, cannot earn them.",
      },
    ],

    workedExamples: [
      {
        question: "State the gradient and y-intercept of the line 2y − 8x = 6.",
        steps: [
          "The equation is not in the form y = mx + c yet, so rearrange it first.",
          "Add 8x to both sides: 2y = 8x + 6.",
          "Divide every term by 2: y = 4x + 3.",
          "Now compare with y = mx + c: m = 4 and c = 3.",
          "So the line rises steeply — 4 up for every 1 across — and crosses the y-axis at (0, 3).",
        ],
        answer: "Gradient 4, y-intercept 3.",
      },
      {
        question: "Find the equation of the line passing through (1, 4) and (3, 10).",
        steps: [
          "Gradient = (change in y) ÷ (change in x) = (10 − 4) ÷ (3 − 1).",
          "= 6 ÷ 2 = 3. So m = 3.",
          "Substitute one point into y = mx + c. Using (1, 4): 4 = 3 × 1 + c.",
          "4 = 3 + c, so c = 1.",
          "Equation: y = 3x + 1. Check with the other point: 3 × 3 + 1 = 10. ✓",
        ],
        answer: "y = 3x + 1",
      },
      {
        question: "Find the equation of the line perpendicular to y = 2x + 3 that passes through (4, 1).",
        steps: [
          "The gradient of the given line is 2.",
          "Perpendicular gradient is the negative reciprocal: flip 2 to ½, then change the sign, giving −½.",
          "Check: 2 × −½ = −1. ✓",
          "Substitute the point (4, 1) into y = mx + c: 1 = −½ × 4 + c.",
          "1 = −2 + c, so c = 3. The equation is y = −½x + 3.",
        ],
        answer: "y = −½x + 3",
        higherOnly: true,
      },
      {
        question: "Find the midpoint of (−2, 5) and (6, 1), and the gradient of the line joining them.",
        steps: [
          "Midpoint x: (−2 + 6) ÷ 2 = 4 ÷ 2 = 2.",
          "Midpoint y: (5 + 1) ÷ 2 = 6 ÷ 2 = 3. So the midpoint is (2, 3).",
          "Gradient = (change in y) ÷ (change in x) = (1 − 5) ÷ (6 − (−2)).",
          "= −4 ÷ 8 = −½.",
          "The negative gradient makes sense: as x increases from −2 to 6, y falls from 5 to 1.",
        ],
        answer: "Midpoint (2, 3), gradient −½.",
      },
    ],

    practice: [
      { question: "In y = mx + c, which letter is the gradient?",
        accept: ["m"],
        answer: "m. The letter c is the y-intercept." },
      { question: "State the gradient of y = 5x − 2.",
        accept: ["5"],
        answer: "5 — the number in front of x once the equation is in y = mx + c form." },
      { question: "State the y-intercept of y = 5x − 2.",
        accept: ["-2", "−2"],
        answer: "−2. The line crosses the y-axis at (0, −2)." },
      { question: "State the gradient of the line 2y = 6x + 10.",
        accept: ["3"],
        answer: "3. Divide through by 2 first to get y = 3x + 5." },
      { question: "A line goes through (0, 4) and (2, 10). What is its gradient?",
        accept: ["3"],
        answer: "3. Change in y is 6, change in x is 2, and 6 ÷ 2 = 3." },
      { question: "A line goes through (1, 7) and (4, 1). What is its gradient?",
        accept: ["-2", "−2"],
        answer: "−2. (1 − 7) ÷ (4 − 1) = −6 ÷ 3. The line falls, so the gradient is negative." },
      { question: "What is the gradient of any line parallel to y = 4x + 9?",
        accept: ["4"],
        answer: "4. Parallel lines have equal gradients." },
      { question: "What is the gradient of a horizontal line?",
        accept: ["0", "zero"],
        answer: "0. There is no change in y, so rise ÷ run = 0." },
      { question: "Is y = 6 a horizontal or a vertical line?",
        accept: ["horizontal"],
        answer: "Horizontal — every point on it has y = 6." },
      { question: "Is x = −3 a horizontal or a vertical line?",
        accept: ["vertical"],
        answer: "Vertical — every point on it has x = −3." },
      { question: "Find the midpoint of (2, 3) and (8, 11). Write it as (a,b) with no spaces.",
        accept: ["(5,7)", "5,7"],
        answer: "(5, 7) — average the x values and average the y values." },
      { question: "Find the midpoint of (−4, 2) and (2, 10). Write it as (a,b) with no spaces.",
        accept: ["(-1,6)", "-1,6", "(−1,6)"],
        answer: "(−1, 6). (−4 + 2) ÷ 2 = −1, and (2 + 10) ÷ 2 = 6." },
      { question: "Does the point (3, 11) lie on the line y = 3x + 2? Answer yes or no.",
        accept: ["yes"],
        answer: "Yes. 3 × 3 + 2 = 11, so the point satisfies the equation." },
      { question: "What is the y value when x = 0 on the line y = 7x − 5?",
        accept: ["-5", "−5"],
        answer: "−5 — which is exactly what the y-intercept means." },
      { question: "What gradient is perpendicular to a line of gradient 2?",
        accept: ["-1/2", "−1/2", "-0.5", "−0.5"],
        answer: "−½ — the negative reciprocal. Check: 2 × −½ = −1.", higherOnly: true },
      { question: "What gradient is perpendicular to a line of gradient −1/3?",
        accept: ["3"],
        answer: "3. Flip −1/3 to −3, then change the sign to 3. Check: −1/3 × 3 = −1.", higherOnly: true },
      { question: "Explain why a vertical line has no gradient, rather than a gradient of zero.",
        answer: "Gradient is the change in y divided by the change in x. On a vertical line every point has the same x value, so the change in x is zero, and dividing by zero has no meaning — the gradient is undefined rather than equal to anything. A gradient of zero is the opposite situation: a horizontal line, where y never changes as x does, so the top of the fraction is zero and the answer is genuinely 0. Saying a vertical line has gradient 0 confuses the two, and would suggest it is flat. (Mark this one yourself.)" },
      { question: "Explain how the equation y = mx + c connects to the shape of the line it describes.",
        answer: "The two letters control two independent things. c fixes where the line sits: it is the y value when x = 0, so it is the point where the line crosses the y-axis, and changing it slides the whole line up or down without altering its steepness. m fixes the slope: it says how much y changes for every increase of 1 in x, so a large m gives a steep line, a small one a shallow line, and a negative m makes the line fall rather than rise. Between them they describe every straight line except the vertical ones, which cannot be written this way because their gradient is undefined. (Mark this one yourself.)" },
    ],

    misconceptions: [
      { wrong: "\"In 2y = 6x + 4 the gradient is 6.\"",
        right: "Not until the equation is in the form y = mx + c. Divide by 2 first: y = 3x + 2, so the gradient is 3." },
      { wrong: "\"y = 4 is a vertical line.\"",
        right: "It is horizontal — every point on it has a y value of 4. x = 4 is the vertical one." },
      { wrong: "\"Perpendicular means just change the sign of the gradient.\"",
        right: "You must flip the fraction as well. Gradient 2 becomes −½, not −2. Check by multiplying: the product should be exactly −1." },
      { wrong: "\"Gradient is change in x over change in y.\"",
        right: "It is change in y over change in x — rise over run. Getting it upside down gives the reciprocal, which usually still looks plausible, and that is what makes it dangerous." },
      { wrong: "\"A steeper line always has a bigger gradient.\"",
        right: "It has a bigger gradient in SIZE. A line of gradient −5 is steeper than one of gradient 2, even though −5 is the smaller number." },
      { wrong: "\"Coordinates are written (y, x).\"",
        right: "Always (x, y) — across, then up. Reversing them puts the point in a completely different place, and every later step inherits the error." },
    ],
  },

  "maths/similarity-and-congruence": {
    summary:
      "Two shapes are congruent if they are identical — same shape, same size — and similar if one is an enlargement of the other. That distinction sounds simple, and the arithmetic usually is; what is examined is whether you can identify matching sides and angles correctly, and whether you know that areas and volumes do not scale at the same rate as lengths.",
    keyFacts: [
      {
        heading: "Congruence",
        points: [
          "Congruent shapes are exactly the same shape AND the same size. All matching sides and all matching angles are equal.",
          "A shape stays congruent after a rotation, reflection or translation — moving or turning it changes nothing about its size.",
          "An enlargement does NOT produce a congruent shape, unless the scale factor is 1.",
          "Congruent shapes may look different on the page simply because one has been turned over or rotated.",
          "The symbol ≅ means 'is congruent to'.",
        ],
      },
      {
        heading: "The four congruence conditions for triangles",
        points: [
          "SSS — all three sides equal.",
          "SAS — two sides and the angle BETWEEN them equal. The angle must be the included one.",
          "ASA — two angles and a corresponding side equal (also written AAS).",
          "RHS — right angle, hypotenuse and one other side equal. This applies only to right-angled triangles.",
          "SSA is NOT a condition: two sides and a non-included angle can produce two genuinely different triangles.",
          "AAA is not congruence either — equal angles make triangles SIMILAR, since the shape is fixed but the size is not.",
        ],
      },
      {
        heading: "Similarity",
        points: [
          "Similar shapes have the same shape but different sizes: all matching angles are equal, and all matching sides are in the same ratio.",
          "That ratio is the scale factor. Scale factor = length on the new shape ÷ matching length on the original.",
          "A scale factor greater than 1 enlarges; between 0 and 1 it shrinks.",
          "For triangles, equal angles are enough to prove similarity — you do not need to check the sides as well.",
          "Match up corresponding sides carefully, usually by matching the angles first. Pairing the wrong sides is the main source of error.",
        ],
      },
      {
        heading: "Area and volume scale factors",
        points: [
          "If lengths scale by k, then areas scale by k² and volumes scale by k³.",
          "So doubling every length multiplies area by 4 and volume by 8.",
          "This follows from the units: an area is two lengths multiplied, a volume three.",
          "Working backwards: if the area scale factor is 9, the length scale factor is √9 = 3.",
          "If the volume scale factor is 64, the length scale factor is the cube root of 64, which is 4.",
        ],
        higherOnly: true,
      },
      {
        heading: "Working with the scale factor",
        points: [
          "To find a missing length, find the scale factor from a pair of sides you know, then apply it to the side you want.",
          "Going from the small shape to the large one, multiply; going the other way, divide.",
          "A quick sanity check: an answer on the larger shape must be bigger than the matching side on the smaller one.",
          "Similar triangles often appear one inside the other, sharing an angle. Redrawing them separately makes the matching sides obvious.",
          "Keep the ratio consistent: always new ÷ old, or always old ÷ new — never mix them within one question.",
        ],
      },
    ],
    flashcards: [
      { term: "Congruent", definition: "Exactly the same shape and size; all matching sides and angles are equal." },
      { term: "Similar", definition: "The same shape but a different size; matching angles are equal and matching sides are in the same ratio." },
      { term: "Scale factor", definition: "The ratio between matching lengths on two similar shapes." },
      { term: "SSS", definition: "A congruence condition: all three sides of one triangle equal all three of the other." },
      { term: "SAS", definition: "A congruence condition: two sides and the angle between them are equal." },
      { term: "ASA", definition: "A congruence condition: two angles and a corresponding side are equal." },
      { term: "RHS", definition: "A congruence condition for right-angled triangles: right angle, hypotenuse and one other side equal." },
      { term: "Corresponding sides", definition: "Sides in matching positions on two similar or congruent shapes." },
      { term: "Enlargement", definition: "A transformation that changes size by a scale factor, producing a similar shape." },
      { term: "Area scale factor", definition: "The square of the length scale factor: if lengths scale by k, areas scale by k²." },
      { term: "Volume scale factor", definition: "The cube of the length scale factor: if lengths scale by k, volumes scale by k³." },
      { term: "Hypotenuse", definition: "The longest side of a right-angled triangle, opposite the right angle." },
    ],
    examTips: [
      {
        tip: "Name the congruence condition explicitly",
        detail:
          "A proof that never writes SSS, SAS, ASA or RHS rarely gets full marks. State which condition you are using, and say which sides and angles satisfy it.",
      },
      {
        tip: "In SAS, check the angle is between the two sides",
        detail:
          "Two sides and an angle somewhere else is not a condition at all, and can describe two different triangles. Examiners set this trap regularly.",
      },
      {
        tip: "Redraw similar triangles separately",
        detail:
          "When one triangle sits inside another, the matching sides are hard to see. Sketching them apart, both the same way up, makes the pairs obvious.",
      },
      {
        tip: "Find the scale factor from a pair you know",
        detail:
          "Divide a length on one shape by the matching length on the other, before touching the unknown. Then multiply or divide once, cleanly.",
      },
      {
        tip: "Square for areas, cube for volumes",
        detail:
          "This is the single most examined idea in the topic. Lengths ×3 means areas ×9 and volumes ×27 — never ×3 throughout.",
      },
      {
        tip: "Check the direction of the scale factor",
        detail:
          "If your answer for a side on the larger shape came out smaller than the matching one, you divided when you should have multiplied. The sanity check takes two seconds.",
      },
      {
        tip: "Remember that equal angles prove similarity, not congruence",
        detail:
          "AAA fixes the shape but says nothing about the size. Two triangles with identical angles can be any two sizes at all.",
      },
    ],

    workedExamples: [
      {
        question:
          "Triangle ABC has AB = 5 cm, BC = 7 cm and angle B = 40°. Triangle PQR has PQ = 5 cm, QR = 7 cm and angle Q = 40°. Are they congruent? Justify your answer.",
        steps: [
          "List what matches: AB = PQ = 5 cm, and BC = QR = 7 cm. That is two pairs of equal sides.",
          "The equal angles are B and Q, both 40°.",
          "Check whether that angle lies BETWEEN the two known sides in each triangle.",
          "In ABC, angle B is between AB and BC. In PQR, angle Q is between PQ and QR. It does.",
          "So two sides and the included angle are equal, which is the SAS condition.",
        ],
        answer:
          "Yes, congruent by SAS: AB = PQ, BC = QR, and the included angles B and Q are both 40°.",
      },
      {
        question:
          "Two similar triangles have matching sides of 6 cm and 15 cm. The smaller triangle has another side of 8 cm. Find the matching side on the larger triangle.",
        steps: [
          "Find the scale factor from the pair you know: 15 ÷ 6 = 2.5.",
          "Check the direction: we are going from the smaller to the larger, so we multiply.",
          "Apply it to the side we want: 8 × 2.5.",
          "8 × 2.5 = 20.",
          "Sanity check: 20 cm is larger than 8 cm, as it must be on the bigger triangle. ✓",
        ],
        answer: "20 cm",
      },
      {
        question:
          "Two similar rectangles have lengths 4 cm and 12 cm. The smaller has area 20 cm². Find the area of the larger.",
        steps: [
          "Length scale factor = 12 ÷ 4 = 3.",
          "Areas do not scale by 3 — they scale by the square of the length scale factor.",
          "Area scale factor = 3² = 9.",
          "Larger area = 20 × 9 = 180 cm².",
          "Check it is sensible: the shape is three times as long in both directions, so nine times the area is exactly right.",
        ],
        answer: "180 cm²",
        higherOnly: true,
      },
      {
        question:
          "Two similar cylinders have volumes 40 cm³ and 1080 cm³. The smaller has height 5 cm. Find the height of the larger.",
        steps: [
          "Volume scale factor = 1080 ÷ 40 = 27.",
          "Volumes scale by k³, so k³ = 27.",
          "Take the cube root: k = 3. That is the LENGTH scale factor.",
          "Larger height = 5 × 3 = 15 cm.",
          "Check: a cylinder three times as tall and three times as wide holds 27 times as much, which matches the volumes given. ✓",
        ],
        answer: "15 cm",
        higherOnly: true,
      },
    ],

    practice: [
      { question: "Two shapes are the same shape and the same size. What word describes them?",
        accept: ["congruent"],
        answer: "Congruent. Same shape and same size." },
      { question: "Two shapes are the same shape but different sizes. What word describes them?",
        accept: ["similar"],
        answer: "Similar — matching angles equal, matching sides in the same ratio." },
      { question: "Which congruence condition uses three equal sides? Give the letters.",
        accept: ["sss"],
        answer: "SSS — all three pairs of sides equal, which fixes both the shape and the size." },
      { question: "Which congruence condition applies only to right-angled triangles? Give the letters.",
        accept: ["rhs"],
        answer: "RHS — right angle, hypotenuse and one other side." },
      { question: "In SAS, must the angle be between the two sides? Answer yes or no.",
        accept: ["yes"],
        answer: "Yes. Two sides and a non-included angle can give two different triangles, so it proves nothing." },
      { question: "Does AAA prove two triangles are congruent? Answer yes or no.",
        accept: ["no"],
        answer: "No — equal angles prove SIMILARITY. The size is not fixed." },
      { question: "Two similar shapes have matching sides 3 cm and 12 cm. What is the length scale factor?",
        accept: ["4"],
        answer: "4. Divide a length on the new shape by the matching length on the original: 12 ÷ 3." },
      { question: "A shape is enlarged by scale factor 5. By what factor does its AREA increase?",
        accept: ["25"],
        answer: "25 — the square of the length scale factor.", higherOnly: true },
      { question: "A shape is enlarged by scale factor 2. By what factor does its VOLUME increase?",
        accept: ["8"],
        answer: "8 — the cube of the length scale factor.", higherOnly: true },
      { question: "The area scale factor between two similar shapes is 49. What is the length scale factor?",
        accept: ["7"],
        answer: "7 — the square root of 49.", higherOnly: true },
      { question: "The volume scale factor between two similar solids is 125. What is the length scale factor?",
        accept: ["5"],
        answer: "5 — the cube root of 125, because volumes scale by the cube of the length scale factor.", higherOnly: true },
      { question: "Two similar triangles have matching sides 4 cm and 10 cm. A second side on the smaller is 6 cm. Find the matching side on the larger, in cm.",
        accept: ["15"],
        answer: "15 cm. Scale factor 10 ÷ 4 = 2.5, and 6 × 2.5 = 15." },
      { question: "Two similar shapes have matching sides 20 cm and 8 cm. A side on the larger is 35 cm. Find the matching side on the smaller, in cm.",
        accept: ["14"],
        answer: "14 cm. Scale factor from large to small is 8 ÷ 20 = 0.4, and 35 × 0.4 = 14." },
      { question: "Does rotating a shape change whether it is congruent to the original? Answer yes or no.",
        accept: ["no"],
        answer: "No. Rotation, reflection and translation all preserve congruence — only the position changes." },
      { question: "Two similar rectangles have lengths 5 cm and 20 cm. The smaller has area 15 cm². Find the area of the larger, in cm².",
        accept: ["240"],
        answer: "240 cm². Length scale factor 4, so area scale factor 16, and 15 × 16 = 240.", higherOnly: true },
      { question: "What does the symbol ≅ mean?",
        accept: ["congruent to", "is congruent to", "congruent"],
        answer: "'Is congruent to' — the two shapes are identical in both shape and size." },
      { question: "Explain why two triangles with the same three angles need not be the same size.",
        answer: "Because angles fix only the shape, not the scale. Knowing all three angles tells you how the sides are inclined to one another, but nothing about how long they are — you could draw a triangle with those angles on a postage stamp or across a field, and both would be perfectly valid. That is exactly what similarity means: same shape, any size. To pin down the size as well, at least one side length has to be known, which is why every congruence condition includes at least one side. (Mark this one yourself.)" },
      { question: "Explain why area scales by the square of the scale factor but volume scales by the cube.",
        answer: "Because of how many dimensions are involved. An area is produced by multiplying two lengths together, so if every length is multiplied by k, the area is multiplied by k × k = k². A volume comes from three lengths multiplied, so it is multiplied by k × k × k = k³. Picturing it helps: doubling the sides of a cube gives a shape you could fill with eight of the originals, and each face is now four of the original faces. It is also why the units carry those little numbers — cm² and cm³ are recording exactly the same fact. (Mark this one yourself.)" },
    ],

    misconceptions: [
      { wrong: "\"Similar shapes are shapes that look a bit alike.\"",
        right: "Similarity is precise: every matching angle equal and every matching side in the same ratio. Two rectangles are not automatically similar." },
      { wrong: "\"If lengths double, area doubles.\"",
        right: "Area is multiplied by 2² = 4 and volume by 2³ = 8. This one idea accounts for a large share of the marks lost on the topic." },
      { wrong: "\"SSA proves congruence, just like SAS.\"",
        right: "It does not. With two sides and an angle that is not between them, two genuinely different triangles can be drawn. The angle must be the included one." },
      { wrong: "\"A reflected triangle isn't congruent because it's the wrong way round.\"",
        right: "Reflection preserves all lengths and angles, so the shapes are congruent. Only size and shape matter, not orientation." },
      { wrong: "\"You can pair up sides in the order they're listed.\"",
        right: "Corresponding sides must be identified from matching angles or positions, not from the order of the letters. Wrong pairing gives a wrong scale factor and everything after it fails." },
      { wrong: "\"Congruent and similar are different words for the same thing.\"",
        right: "Congruent means identical in size as well as shape. Congruent shapes are a special case of similar ones, with scale factor 1." },
    ],
  },

  "maths/constructions-loci-and-bearings": {
    summary:
      "This is the most practical topic on the paper and the one most often lost through carelessness rather than misunderstanding. Constructions must be done with compasses, with the arcs left visible. Loci are just the set of all points obeying a rule. Bearings are always three figures, always clockwise from north. Get those three habits right and the marks follow.",
    keyFacts: [
      {
        heading: "The rules of construction",
        points: [
          "Use a pair of compasses and a straight edge. Measuring with a ruler and joining the dots earns no marks, even if the picture is correct.",
          "NEVER rub out your arcs. They are the evidence that you constructed rather than estimated, and most of the marks are for them.",
          "Keep the compass set to the same radius throughout a construction unless the method says otherwise.",
          "Work in pencil, sharp, and draw lightly enough that a slip does not ruin the diagram.",
          "Accuracy is usually allowed within about 2 mm and 2 degrees — but only if the method is visibly right.",
        ],
      },
      {
        heading: "The four constructions to know",
        points: [
          "Perpendicular bisector of a line AB: compass more than half of AB, arc from A above and below, same radius arc from B, join the two crossing points.",
          "Angle bisector: arc from the vertex cutting both arms, then equal arcs from those two points, and join the crossing point to the vertex.",
          "Perpendicular from a point to a line: arc from the point cutting the line twice, then perpendicular-bisect the segment between those two crossings.",
          "An equilateral triangle (and so a 60° angle): compass set to the side length, arcs from each end, join to where they cross.",
          "45° comes from bisecting a 90°; 30° from bisecting a 60°. Constructing angles is usually a matter of building then bisecting.",
        ],
      },
      {
        heading: "Loci",
        points: [
          "A locus is the set of all points that obey a given rule. The plural is loci.",
          "A fixed distance from a POINT gives a circle.",
          "Equidistant from TWO POINTS gives the perpendicular bisector of the line joining them.",
          "Equidistant from TWO LINES gives the bisector of the angle between them.",
          "A fixed distance from a LINE SEGMENT gives a 'racetrack': two parallel lines joined by semicircular ends.",
          "Shade the region asked for and say what your shading means; 'nearer to A than B' means one side of the perpendicular bisector.",
        ],
      },
      {
        heading: "Bearings",
        points: [
          "A bearing is measured from NORTH, CLOCKWISE, and always written with three figures. 70° is written 070°.",
          "Every bearing question starts by drawing a north line at the point you are measuring FROM.",
          "'The bearing of B from A' means stand at A, face north, and turn clockwise until you face B.",
          "A back bearing reverses the direction: add 180 if the bearing is under 180, subtract 180 if it is 180 or more.",
          "Bearings are always between 000° and 360°. If your answer falls outside that, you have added when you should have subtracted.",
        ],
      },
      {
        heading: "Scale drawings",
        points: [
          "A scale such as 1 : 50,000 means 1 cm on the map represents 50,000 cm in reality — that is 500 m, or 0.5 km.",
          "To go from map to real life, multiply. From real life to map, divide.",
          "Convert units carefully: cm to m is ÷100, cm to km is ÷100,000.",
          "For a scale drawing question, state the scale you are using and measure accurately with a ruler and protractor.",
          "Combining a scale drawing with a bearing is a standard question: draw to scale, measure the bearing with a protractor from a north line.",
        ],
      },
    ],
    flashcards: [
      { term: "Locus", definition: "The set of all points that satisfy a given rule. The plural is loci." },
      { term: "Perpendicular bisector", definition: "The line cutting another line in half at right angles; the locus of points equidistant from two points." },
      { term: "Angle bisector", definition: "The line cutting an angle exactly in half; the locus of points equidistant from two lines." },
      { term: "Equidistant", definition: "The same distance from two or more things." },
      { term: "Bearing", definition: "A direction measured clockwise from north, written with three figures." },
      { term: "Back bearing", definition: "The bearing of the return journey: add 180° if under 180°, subtract 180° if 180° or more." },
      { term: "Scale", definition: "The ratio between a length on a drawing and the matching real length." },
      { term: "Arc (in construction)", definition: "Part of a circle drawn with compasses; the visible evidence that a construction was done properly." },
      { term: "Equilateral triangle", definition: "A triangle with three equal sides and three 60° angles — the basis of constructing 60°." },
      { term: "Perpendicular", definition: "At right angles, 90°." },
      { term: "Region", definition: "An area of the diagram satisfying a condition, usually shown by shading." },
    ],
    examTips: [
      {
        tip: "Leave every construction arc showing",
        detail:
          "The arcs are the method, and the method is where the marks are. A perfect line with no arcs typically scores zero on a construction question.",
      },
      {
        tip: "Write bearings with three figures",
        detail:
          "070°, not 70°. It is a convention examiners enforce, and it costs nothing to get right.",
      },
      {
        tip: "Draw the north line before doing anything else",
        detail:
          "Bearings are measured from the point you are standing at. Drawing north at the wrong point is the most common bearings error by a wide margin.",
      },
      {
        tip: "For back bearings, check the answer is between 000 and 360",
        detail:
          "Under 180 means add 180; 180 or over means subtract 180. If you get 430°, you added when you should have subtracted.",
      },
      {
        tip: "Say what your shaded region means",
        detail:
          "'Shaded region shows points within 3 cm of A and nearer to B than C.' The sentence proves you know what you drew, and can rescue an unclear diagram.",
      },
      {
        tip: "Check the units in a scale question",
        detail:
          "Scales are given as cm to cm. Convert to metres or kilometres only at the end, and state the conversion you used.",
      },
      {
        tip: "Use a sharp pencil and keep the compass tight",
        detail:
          "A loose compass drifts between arcs and the crossing points end up in the wrong place. Practical, and it genuinely costs marks in the exam.",
      },
    ],

    workedExamples: [
      {
        question: "The bearing of B from A is 070°. Find the bearing of A from B.",
        steps: [
          "This asks for the back bearing — the same journey travelled the other way.",
          "The rule: if the bearing is less than 180°, add 180°.",
          "070 is less than 180, so add: 070 + 180 = 250.",
          "Check it is a valid bearing, between 000° and 360°. It is.",
          "Write it with three figures: 250°.",
        ],
        answer: "250°",
      },
      {
        question: "The bearing of Q from P is 295°. Find the bearing of P from Q.",
        steps: [
          "Again a back bearing, but this time the starting bearing is 180° or more.",
          "The rule: if the bearing is 180° or more, subtract 180°.",
          "295 − 180 = 115.",
          "Check the range: 115° lies between 000° and 360°. ✓",
          "Note what would have happened by adding: 475°, which is not a bearing at all — a useful check.",
        ],
        answer: "115°",
      },
      {
        question:
          "Describe how to construct the locus of points equidistant from two points A and B.",
        steps: [
          "The locus of points equidistant from two points is the perpendicular bisector of the line joining them.",
          "Open the compasses to more than half the distance AB — this guarantees the arcs will cross.",
          "With the point at A, draw arcs above and below the line.",
          "Keeping the same radius, put the point at B and draw arcs that cross the first two.",
          "Join the two crossing points with a straight line, leaving all arcs visible. That line is the locus.",
        ],
        answer:
          "The perpendicular bisector of AB, constructed with equal arcs of radius greater than half AB drawn from A and from B, joined through the two crossing points.",
      },
      {
        question:
          "A map has a scale of 1 : 25,000. Two towns are 8 cm apart on the map. How far apart are they in kilometres?",
        steps: [
          "The scale means 1 cm on the map is 25,000 cm in reality.",
          "Real distance = 8 × 25,000 = 200,000 cm.",
          "Convert centimetres to metres by dividing by 100: 200,000 ÷ 100 = 2,000 m.",
          "Convert metres to kilometres by dividing by 1000: 2,000 ÷ 1000 = 2 km.",
          "Sanity check: 1 : 25,000 means 4 cm to the kilometre, and 8 cm is twice that. ✓",
        ],
        answer: "2 km",
      },
    ],

    practice: [
      { question: "In which direction is a bearing measured from north — clockwise or anticlockwise?",
        accept: ["clockwise"],
        answer: "Clockwise, always, starting from the north line drawn at the point you are measuring from." },
      { question: "How many figures should a bearing always be written with?",
        accept: ["3", "three"],
        answer: "Three. 70° is written 070°." },
      { question: "Write a bearing of 45 degrees correctly, using three figures and no degree symbol.",
        accept: ["045"],
        answer: "045° — bearings always take three figures, so the leading zero is required." },
      { question: "The bearing of B from A is 050°. What is the bearing of A from B? Give three figures.",
        accept: ["230"],
        answer: "230°. Under 180, so add 180." },
      { question: "The bearing of B from A is 120°. What is the bearing of A from B? Give three figures.",
        accept: ["300"],
        answer: "300°. The bearing is under 180, so add 180 to reverse the direction of travel." },
      { question: "The bearing of B from A is 200°. What is the bearing of A from B? Give three figures.",
        accept: ["020"],
        answer: "020°. 200 is at least 180, so subtract 180 — and remember the leading zero." },
      { question: "What is the bearing of due east? Give three figures.",
        accept: ["090"],
        answer: "090° — a quarter turn clockwise from north." },
      { question: "What is the bearing of due south? Give three figures.",
        accept: ["180"],
        answer: "180° — half a turn clockwise from north." },
      { question: "What is the bearing of due west? Give three figures.",
        accept: ["270"],
        answer: "270° — three quarters of a turn clockwise from north." },
      { question: "What shape is the locus of points a fixed distance from a single point?",
        accept: ["circle", "a circle"],
        answer: "A circle, with that point as the centre." },
      { question: "What is the locus of points equidistant from two points?",
        accept: ["perpendicular bisector", "the perpendicular bisector"],
        answer: "The perpendicular bisector of the line joining them." },
      { question: "What is the locus of points equidistant from two lines?",
        accept: ["angle bisector", "the angle bisector", "bisector of the angle"],
        answer: "The bisector of the angle between them." },
      { question: "Which instrument must be used for a construction — a ruler alone, or a pair of compasses?",
        accept: ["compasses", "a pair of compasses", "pair of compasses", "compass"],
        answer: "A pair of compasses. Measuring with a ruler earns no method marks." },
      { question: "Should you rub out your construction arcs when you have finished? Answer yes or no.",
        accept: ["no"],
        answer: "No — the arcs are the evidence of the method, and most of the marks are for them." },
      { question: "On a 1 : 50,000 map, 3 cm represents how many centimetres in real life?",
        accept: ["150000", "150,000"],
        answer: "150,000 cm — which is 1.5 km." },
      { question: "On a 1 : 25,000 map, how many kilometres does 4 cm represent?",
        accept: ["1", "1km", "1 km"],
        answer: "1 km. 4 × 25,000 = 100,000 cm = 1 km." },
      { question: "Explain why a locus of points a fixed distance from a straight line segment is not simply two parallel lines.",
        answer: "Because the rule applies to the ends of the segment as well as to its middle. Alongside the segment, the points at that distance do form two parallel lines, one on each side. But at each end there is no more line to run alongside, and the points at that distance from the end point form a semicircle wrapping round it. The complete locus is therefore a racetrack shape: two parallel lines closed off by a semicircular end at each end of the segment. (Mark this one yourself.)" },
      { question: "Explain why the construction for a perpendicular bisector requires the compass to be set to more than half the length of the line.",
        answer: "Because the arcs drawn from each end have to overlap. Each arc is the set of points at that fixed distance from one end, and two such arcs only cross if their radii together exceed the distance between the two centres. If the radius were exactly half the line, the arcs would just touch at the midpoint and give no crossing points to join; anything less and they would not meet at all. Setting it comfortably over half guarantees two clear crossing points, one above the line and one below, and the line through them is the perpendicular bisector. (Mark this one yourself.)" },
    ],

    misconceptions: [
      { wrong: "\"A bearing can be written as 70°.\"",
        right: "Bearings always take three figures: 070°. It is a convention examiners apply strictly, and it is free to get right." },
      { wrong: "\"Back bearings are found by adding 180 every time.\"",
        right: "Add 180 only if the bearing is under 180. If it is 180 or more, subtract, or you get an impossible answer over 360°." },
      { wrong: "\"Constructions can be done accurately with a ruler and protractor.\"",
        right: "The marks are for the compass method, not the finished picture. A measured drawing that looks perfect can still score nothing." },
      { wrong: "\"Rubbing out the arcs makes the diagram clearer.\"",
        right: "It removes the evidence of your method, and the method is what is being marked. Leave every arc." },
      { wrong: "\"The locus of points a fixed distance from a line is two parallel lines.\"",
        right: "Only alongside the segment. The ends are closed off by semicircles, giving a racetrack shape." },
      { wrong: "\"Bearings are measured from wherever is convenient.\"",
        right: "From north at the point you are measuring FROM, turning clockwise. Drawing the north line at the wrong point is the most common error in the topic." },
    ],
  },

  "maths/compound-measures-and-rates": {
    summary:
      "A compound measure is built from two others: speed is distance per unit of time, density is mass per unit of volume, pressure is force per unit of area. The maths is only rearranging a formula, but almost every mark lost here goes on units — minutes treated as decimals, or an answer left in the wrong unit entirely. Reading rates off graphs belongs here too, because a gradient is a rate.",
    keyFacts: [
      {
        heading: "The three compound measures",
        points: [
          "Speed = distance ÷ time. Common units: m/s, km/h, mph.",
          "Density = mass ÷ volume. Common units: g/cm³, kg/m³.",
          "Pressure = force ÷ area. Common units: N/m² (also called pascals), N/cm².",
          "Each can be rearranged: distance = speed × time, mass = density × volume, force = pressure × area.",
          "The unit tells you the formula. 'Per' means divided by, so m/s literally means metres divided by seconds.",
        ],
      },
      {
        heading: "Getting the units right",
        points: [
          "Time must be in the same unit as the speed. For km/h, 2 hours 30 minutes is 2.5 hours — never 2.30.",
          "45 minutes is 0.75 hours, 20 minutes is 1/3 of an hour, 10 minutes is 1/6 of an hour.",
          "To convert m/s to km/h, multiply by 3.6. To go the other way, divide by 3.6.",
          "That factor comes from 3600 seconds in an hour and 1000 metres in a kilometre: 3600 ÷ 1000 = 3.6.",
          "For density, 1 g/cm³ = 1000 kg/m³ — the conversion is not 1000 by accident, it is 1000 ÷ 1,000,000 inverted.",
          "Always write the unit on the answer. It is frequently worth a mark on its own.",
        ],
      },
      {
        heading: "Average speed",
        points: [
          "Average speed = TOTAL distance ÷ TOTAL time. It is not the average of the individual speeds.",
          "A journey at 40 mph out and 60 mph back does not average 50 mph, because more time is spent at the slower speed.",
          "For a multi-stage journey: find each distance, find each time, add them separately, then divide.",
          "Stopped time counts towards the total time unless the question says otherwise.",
          "Questions almost always mix units deliberately, so convert everything before adding.",
        ],
      },
      {
        heading: "Distance-time graphs",
        points: [
          "Time goes on the horizontal axis, distance on the vertical.",
          "The GRADIENT of a distance-time graph is the speed. Steeper means faster.",
          "A horizontal line means the object is stationary — time passes but distance does not change.",
          "A straight sloping line means constant speed; a curve means the speed is changing.",
          "A line returning to the horizontal axis means travelling back to the starting point.",
        ],
      },
      {
        heading: "Velocity-time graphs and rates of change",
        points: [
          "On a velocity-time graph, the GRADIENT is the acceleration and the AREA UNDER the graph is the distance travelled.",
          "A horizontal line here means constant speed, not stationary — the two graph types look similar and mean different things.",
          "Find the area by splitting it into triangles and trapeziums.",
          "For a curved graph, the rate of change at an instant is the gradient of the tangent drawn at that point.",
          "The area under a curve can be estimated by dividing it into strips and treating each as a trapezium.",
        ],
        higherOnly: true,
      },
    ],
    flashcards: [
      { term: "Compound measure", definition: "A measure built from two others, such as speed, density or pressure." },
      { term: "Speed", definition: "Distance ÷ time — how much distance is covered per unit of time." },
      { term: "Density", definition: "Mass ÷ volume — how much mass is packed into each unit of volume." },
      { term: "Pressure", definition: "Force ÷ area — how much force acts on each unit of area." },
      { term: "Average speed", definition: "Total distance ÷ total time — not the average of the separate speeds." },
      { term: "Acceleration", definition: "The rate of change of velocity, found from the gradient of a velocity-time graph." },
      { term: "Distance-time graph", definition: "A graph whose gradient gives speed and whose horizontal sections mean stationary." },
      { term: "Velocity-time graph", definition: "A graph whose gradient gives acceleration and whose area gives distance travelled." },
      { term: "Tangent", definition: "A straight line touching a curve at one point, whose gradient gives the rate of change there." },
      { term: "Rate", definition: "How much one quantity changes for each unit of another — always a division." },
      { term: "m/s to km/h", definition: "Multiply by 3.6, because there are 3600 seconds in an hour and 1000 metres in a kilometre." },
    ],
    examTips: [
      {
        tip: "Convert time to a decimal before dividing",
        detail:
          "2 hours 30 minutes is 2.5 hours. Typing 2.30 gives a wrong answer that still looks reasonable, which makes it especially dangerous.",
      },
      {
        tip: "Read the unit and write the formula from it",
        detail:
          "g/cm³ means grams divided by cubic centimetres, so density = mass ÷ volume. The unit is a formula reminder printed on the question.",
      },
      {
        tip: "Average speed uses totals, never an average of speeds",
        detail:
          "Add all the distances, add all the times, then divide once. Averaging the two speeds is the single most common error on this topic.",
      },
      {
        tip: "Show the rearrangement",
        detail:
          "Write speed = distance ÷ time, then the rearranged version you actually used. Method marks survive an arithmetic slip; a bare wrong number earns nothing.",
      },
      {
        tip: "Keep the two graph types apart",
        detail:
          "Horizontal on a distance-time graph means stopped. Horizontal on a velocity-time graph means steady speed. Check the vertical axis label before saying anything.",
      },
      {
        tip: "Split the area under a graph into simple shapes",
        detail:
          "Triangles and trapeziums, worked out separately and added. Label each piece on the diagram so the examiner can follow your working.",
      },
      {
        tip: "State the unit of your answer",
        detail:
          "km/h, g/cm³, N/m². A number alone is an incomplete answer to a compound measure question, and marks are routinely allocated to the unit.",
      },
    ],

    workedExamples: [
      {
        question: "A car travels 180 km in 2 hours 30 minutes. Find its average speed in km/h.",
        steps: [
          "Speed = distance ÷ time, so the time must be in hours to match km/h.",
          "30 minutes is half an hour, so the time is 2.5 hours — not 2.30.",
          "Speed = 180 ÷ 2.5.",
          "180 ÷ 2.5 = 72.",
          "State the unit: 72 km/h.",
        ],
        answer: "72 km/h",
      },
      {
        question:
          "A block of metal has volume 40 cm³ and density 7.8 g/cm³. Find its mass.",
        steps: [
          "Density = mass ÷ volume, so rearranging gives mass = density × volume.",
          "The unit g/cm³ confirms it: grams per cubic centimetre, so multiplying by cubic centimetres leaves grams.",
          "Mass = 7.8 × 40.",
          "7.8 × 40 = 312.",
          "The unit is grams, since the density was given in grams per cm³.",
        ],
        answer: "312 g",
      },
      {
        question: "Convert 25 m/s into km/h.",
        steps: [
          "In one second the object travels 25 m, so in one hour it travels 25 × 3600 m.",
          "25 × 3600 = 90,000 m.",
          "Convert metres to kilometres: 90,000 ÷ 1000 = 90 km.",
          "So the speed is 90 km/h.",
          "The shortcut is the same calculation: 25 × 3.6 = 90, because 3600 ÷ 1000 = 3.6.",
        ],
        answer: "90 km/h",
      },
      {
        question:
          "A cyclist accelerates from rest to 8 m/s over 4 seconds, then holds 8 m/s for 10 seconds. Find the total distance travelled.",
        steps: [
          "Sketch the velocity-time graph: a straight line from (0, 0) to (4, 8), then horizontal to (14, 8).",
          "Distance is the AREA under a velocity-time graph.",
          "First stage is a triangle: ½ × base × height = ½ × 4 × 8 = 16 m.",
          "Second stage is a rectangle: 10 × 8 = 80 m.",
          "Total distance = 16 + 80 = 96 m.",
        ],
        answer: "96 m",
        higherOnly: true,
      },
    ],

    practice: [
      { question: "Write the formula for speed as an expression using distance and time, e.g. a/b.",
        accept: ["distance/time", "d/t"],
        answer: "Speed = distance ÷ time. The unit tells you so: m/s means metres divided by seconds." },
      { question: "A car travels 150 km in 3 hours. Find its average speed in km/h. Give the number only.",
        accept: ["50"],
        answer: "50 km/h. Speed = distance ÷ time = 150 ÷ 3. Always write the unit — it is often worth a mark on its own." },
      { question: "A runner covers 400 m in 50 seconds. Find their speed in m/s. Give the number only.",
        accept: ["8"],
        answer: "8 m/s. Speed = distance ÷ time = 400 ÷ 50, and the units of the answer come from the units given." },
      { question: "A train travels at 90 km/h for 2 hours. How far does it travel, in km?",
        accept: ["180"],
        answer: "180 km. Distance = speed × time." },
      { question: "How many hours is 2 hours 45 minutes, as a decimal?",
        accept: ["2.75"],
        answer: "2.75 hours. 45 minutes is 0.75 of an hour, not 0.45." },
      { question: "How many hours is 20 minutes, as a fraction? Write it as a/b.",
        accept: ["1/3"],
        answer: "1/3 of an hour, since 20 ÷ 60 = 1/3." },
      { question: "Convert 10 m/s to km/h. Give the number only.",
        accept: ["36"],
        answer: "36 km/h. Multiply by 3.6, which comes from 3600 seconds in an hour divided by 1000 metres in a kilometre." },
      { question: "Convert 72 km/h to m/s. Give the number only.",
        accept: ["20"],
        answer: "20 m/s. Divide by 3.6 to go from km/h to m/s — the number must get smaller, which is a useful check." },
      { question: "An object has mass 90 g and volume 30 cm³. Find its density in g/cm³. Give the number only.",
        accept: ["3"],
        answer: "3 g/cm³. Density = mass ÷ volume." },
      { question: "A substance has density 2.5 g/cm³ and volume 20 cm³. Find its mass in grams.",
        accept: ["50"],
        answer: "50 g. Mass = density × volume." },
      { question: "An object has mass 240 g and density 8 g/cm³. Find its volume in cm³.",
        accept: ["30"],
        answer: "30 cm³. Volume = mass ÷ density." },
      { question: "A force of 200 N acts on an area of 4 m². Find the pressure in N/m².",
        accept: ["50"],
        answer: "50 N/m². Pressure = force ÷ area." },
      { question: "On a distance-time graph, what does a horizontal line mean?",
        accept: ["stationary", "stopped", "not moving", "at rest"],
        answer: "The object is stationary — time passes but distance does not change." },
      { question: "On a distance-time graph, what quantity does the gradient represent?",
        accept: ["speed", "the speed", "velocity"],
        answer: "Speed. Steeper means faster." },
      { question: "On a velocity-time graph, what quantity does the AREA under the graph represent?",
        accept: ["distance", "distance travelled", "the distance"],
        answer: "The distance travelled. Split the area into triangles and rectangles, work out each, and add them.", higherOnly: true },
      { question: "On a velocity-time graph, what quantity does the gradient represent?",
        accept: ["acceleration", "the acceleration"],
        answer: "Acceleration — the rate at which velocity changes.", higherOnly: true },
      { question: "A journey is 30 miles at 60 mph, then 30 miles at 30 mph. Explain why the average speed is not 45 mph.",
        answer: "Because average speed is total distance divided by total time, and the two stages take different amounts of time. The first 30 miles at 60 mph takes half an hour; the second 30 miles at 30 mph takes a whole hour. So the journey is 60 miles in 1.5 hours, giving an average of 40 mph, not 45. Averaging the two speeds would only be right if equal TIME were spent at each, whereas here equal distance was covered — and more time is always spent at the slower speed, which is why the true average is dragged below the halfway point. (Mark this one yourself.)" },
      { question: "Explain why the unit of a compound measure tells you the formula.",
        answer: "Because the unit is the formula, written in units instead of words. 'Per' means divided by, so metres per second means metres divided by seconds, which is distance divided by time — the definition of speed. Grams per cubic centimetre means mass divided by volume, which is density, and newtons per square metre means force divided by area, which is pressure. This is a genuinely useful check in the exam: if you can read the unit in the question, you can reconstruct the formula even if you have forgotten it, and you can also tell whether your answer has come out in the right unit. (Mark this one yourself.)" },
    ],

    misconceptions: [
      { wrong: "\"2 hours 30 minutes is 2.30 hours.\"",
        right: "It is 2.5 hours. Minutes are sixtieths, not hundredths. This single mistake accounts for a large share of the marks lost on speed questions." },
      { wrong: "\"Average speed is the average of the speeds.\"",
        right: "It is total distance ÷ total time. Averaging the speeds only works if equal TIME is spent at each, which almost never happens in these questions." },
      { wrong: "\"A horizontal line means the object is stopped, on any graph.\"",
        right: "On a distance-time graph, yes. On a velocity-time graph it means constant speed. Always check the vertical axis first." },
      { wrong: "\"Density is the same as mass — heavy things are dense.\"",
        right: "Density is mass per unit volume. A large light object such as a duvet has a lot of mass in total and a very low density." },
      { wrong: "\"To convert m/s to km/h you divide by 3.6.\"",
        right: "Multiply. A speed in km/h is a bigger number than the same speed in m/s, because an hour is much longer than a second." },
      { wrong: "\"The area under a distance-time graph gives the distance.\"",
        right: "The distance is read straight off the vertical axis. It is the area under a VELOCITY-time graph that gives distance." },
    ],
  },
};
