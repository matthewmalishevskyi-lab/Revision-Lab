// The pop-up calculator's maths, checked against what a Casio fx-83GT says.
//
// ⚠️ WHY A CALCULATOR NEEDS A CHECKER. A revision site's calculator that
// disagrees with the student's own calculator is worse than none: they will
// assume their method is wrong, not our parser. Every case below is one where
// the obvious implementation (eval, radians, left-to-right powers, plain
// floating point) gives a different answer from the exam calculator.

import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createRequire } from "node:module";

const require_ = createRequire(import.meta.url);
const out = mkdtempSync(join(tmpdir(), "calculator-check-"));
let checks = 0, failures = 0;
function expect(ok, message) {
  checks += 1;
  if (!ok) { failures += 1; console.error(`  FAIL: ${message}`); }
}

try {
  execFileSync(process.execPath, [
    "node_modules/typescript/bin/tsc", "app/lib/calculator.ts",
    "--outDir", out, "--module", "commonjs", "--target", "es2020", "--skipLibCheck",
  ], { stdio: "inherit" });
  const { evaluate, formatNumber } = require_(join(out, "calculator.js"));

  const shows = (input, want, ans = 0) => {
    const r = evaluate(input, ans);
    expect(r.ok && r.display === want, `${input} should show ${want}, got ${r.ok ? r.display : r.error}`);
  };
  const errors = (input, kind) => {
    const r = evaluate(input);
    expect(!r.ok && r.error === kind, `${input} should be "${kind}", got ${r.ok ? r.display : r.error}`);
  };

  // ── Order of operations, the Casio way ────────────────────────────────────
  shows("2+3×4", "14");
  shows("(2+3)×4", "20");
  shows("−2^2", "−4");                 // power before minus
  shows("(−2)^2", "4");
  shows("−3²", "−9");
  shows("2^3^2", "512");               // right-associative
  shows("2^−1", "0.5");
  shows("10−4−3", "3");                // left-associative minus
  shows("100÷10÷5", "2");
  shows("5−−3", "8");
  shows("1÷2π", "0.1591549431");       // side by side binds tighter than ÷
  shows("2π", "6.283185307");
  shows("3(4+1)", "15");
  shows("(1+1)(2+2)", "8");
  shows("2sin(30)", "1");
  shows("4√(9)", "12");

  // ── Degrees, not radians ──────────────────────────────────────────────────
  for (const [x, s, c] of [[0, "0", "1"], [30, "0.5", "0.8660254038"], [45, "0.7071067812", "0.7071067812"], [60, "0.8660254038", "0.5"], [90, "1", "0"], [180, "0", "−1"], [270, "−1", "0"]]) {
    shows(`sin(${x})`, s);
    shows(`cos(${x})`, c);
  }
  shows("tan(45)", "1");
  shows("tan(60)", "1.732050808");
  shows("sin⁻¹(0.5)", "30");
  shows("cos⁻¹(0.5)", "60");
  shows("tan⁻¹(1)", "45");
  errors("tan(90)", "Maths error");    // not 1.6 × 10¹⁶
  errors("tan(270)", "Maths error");
  errors("tan(−90)", "Maths error");
  errors("sin⁻¹(2)", "Maths error");

  // ── GCSE-shaped sums, worked the way a student types them ─────────────────
  shows("√(3²+4²)", "5");                                  // Pythagoras
  shows("√(8.5²+8²)", "11.67261753");
  shows("π×5²", "78.53981634");                            // area of a circle
  shows("1000×1.03^2", "1060.9");                          // compound interest, not 1060
  shows("0.1+0.2", "0.3");                                 // not 0.30000000000000004
  shows("6.02×10^23", "6.02 × 10²³");                       // Avogadro, standard form
  shows("3×10^8×2", "600000000");
  shows("1.6×10^−19", "1.6 × 10⁻¹⁹");
  shows("0.5×2×3^2", "9");                                  // ½mv²
  shows("50%×80", "40");
  shows("sin(35)×12", "6.882917236");                       // SOH CAH TOA (values cross-checked in Python)
  shows("12÷tan(40)", "14.30104311");

  // ── Brackets and Ans ─────────────────────────────────────────────────────
  shows("√(2", "1.414213562");                              // closed for you
  shows("((2+3", "5");
  shows("Ans×2", "14", 7);
  shows("Ans²", "49", 7);
  errors("2)", "Syntax error");
  errors("()", "Syntax error");
  errors("(", "Syntax error");
  errors("×3", "Syntax error");
  errors("3+", "Syntax error");
  errors("1.2.3", "Syntax error");
  errors("", "Syntax error");
  errors("abc", "Syntax error");
  errors("1÷0", "Maths error");
  errors("√(−4)", "Maths error");
  errors("10^400", "Maths error");

  // ── Display ──────────────────────────────────────────────────────────────
  expect(formatNumber(1234567890123) === "1.23456789 × 10¹²", "big numbers are not in standard form");
  expect(formatNumber(1.2e-11) === "1.2 × 10⁻¹¹", "tiny numbers are not in standard form");
  expect(formatNumber(-5) === "−5", "negatives use a hyphen, not a real minus sign");
  expect(!/e[+-]/.test(formatNumber(6.02e23)), "standard form printed as 6.02e+23 — nobody is taught to read that");

  // ── No eval, anywhere near it ─────────────────────────────────────────────
  const strip = (s) => s.replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "").replace(/\/\/.*$/gm, "");
  for (const f of ["app/lib/calculator.ts", "app/components/Calculator.tsx"]) {
    const src = strip(readFileSync(f, "utf8"));
    expect(!/\beval\s*\(|new\s+Function\s*\(/.test(src), `${f} uses eval or new Function`);
  }

  // ── Where it appears ──────────────────────────────────────────────────────
  const subjects = readFileSync("app/lib/subjects.ts", "utf8");
  const withCalc = [...subjects.matchAll(/slug: "([a-z-]+)",\n\s+calculator: true/g)].map((m) => m[1]).sort();
  expect(JSON.stringify(withCalc) === JSON.stringify(["biology", "chemistry", "maths", "physics"]),
    `calculator subjects are ${withCalc.join(", ")} — expected maths and the three sciences`);
  // One button per place. A careless replace once put a second one beside
  // "Finish exam", and two calculators on one test is one too many.
  for (const f of ["app/components/Practice.tsx", "app/components/MockExam.tsx", "app/today/page.tsx"]) {
    const n = (strip(readFileSync(f, "utf8")).match(/<Calculator\b/g) ?? []).length;
    expect(n === 1, `${f} renders ${n} calculators, not 1`);
  }
  // The hide switch must exist, and the way back must too.
  const comp = readFileSync("app/components/Calculator.tsx", "utf8");
  expect(comp.includes('writeStorageRaw(CALCULATOR_PREF_KEY, "off")'), "no way to hide the calculator for non-calculator practice");
  expect(comp.includes('writeStorageRaw(CALCULATOR_PREF_KEY, "on")'), "a hidden calculator has no way back");
} finally {
  rmSync(out, { recursive: true, force: true });
}

if (failures) {
  console.error(`\n${failures} of ${checks} calculator checks FAILED.`);
  process.exit(1);
}
console.log(`All ${checks} calculator checks passed.`);
