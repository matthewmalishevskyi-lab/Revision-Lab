// MATHS — all 13 topics.
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
  },
};
