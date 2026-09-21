// The maths behind the pop-up calculator. No React, no browser — so
// scripts/check-calculator.mjs can check every answer it gives.
//
// ─────────────────────────────────────────────────────────────────────────────
// ⚠️ NO eval(), AND NOT FOR THE USUAL REASON ALONE.
//
// `eval("2+3")` is the famous shortcut and it is wrong twice here. It runs
// arbitrary JavaScript, so it is a security hole on any page. And it gets the
// MATHS wrong in exactly the places a GCSE student will test it:
//
//   - `-2^2` is −4 on every exam calculator, because powers bind tighter than
//     a minus sign. JavaScript refuses to parse it at all.
//   - `sin(30)` must be 0.5. JavaScript works in radians and says −0.988.
//   - `2π` and `3(4+1)` are ordinary written maths. JavaScript calls both
//     syntax errors.
//   - `0.1 + 0.2` must show 0.3, not 0.30000000000000004.
//
// So this is a small parser that follows the order of operations the way a
// Casio fx-83GT does (that is the calculator most UK schools hand out):
//
//   brackets → functions (sin, √ …) → powers and ² → unary minus →
//   × and ÷ (including 2π, written side by side) → + and −
// ─────────────────────────────────────────────────────────────────────────────

export type CalcResult =
  | { ok: true; value: number; display: string }
  | { ok: false; error: "Syntax error" | "Maths error" };

type Token =
  | { t: "num"; v: number }
  | { t: "op"; v: "+" | "-" | "*" | "/" | "^" }
  | { t: "post"; v: "²" | "%" }
  | { t: "fn"; v: Fn }
  | { t: "(" }
  | { t: ")" }
  | { t: "const"; v: "π" | "Ans" };

type Fn = "sin" | "cos" | "tan" | "asin" | "acos" | "atan" | "sqrt";

class CalcError extends Error {
  constructor(public kind: "Syntax error" | "Maths error") {
    super(kind);
  }
}

// Longest first, so "sin⁻¹" is matched before "sin".
const WORDS: [string, Token][] = [
  ["sin⁻¹", { t: "fn", v: "asin" }],
  ["cos⁻¹", { t: "fn", v: "acos" }],
  ["tan⁻¹", { t: "fn", v: "atan" }],
  ["sin", { t: "fn", v: "sin" }],
  ["cos", { t: "fn", v: "cos" }],
  ["tan", { t: "fn", v: "tan" }],
  ["√", { t: "fn", v: "sqrt" }],
  ["Ans", { t: "const", v: "Ans" }],
  ["π", { t: "const", v: "π" }],
];

export function tokenise(input: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;
  outer: while (i < input.length) {
    const c = input[i];
    if (c === " ") { i++; continue; }

    for (const [word, token] of WORDS) {
      if (input.startsWith(word, i)) {
        tokens.push(token);
        i += word.length;
        continue outer;
      }
    }

    if (/[0-9.]/.test(c)) {
      let j = i;
      while (j < input.length && /[0-9.]/.test(input[j])) j++;
      const text = input.slice(i, j);
      // "1.2.3" and a lone "." are not numbers.
      if (!/^(\d+\.?\d*|\.\d+)$/.test(text)) throw new CalcError("Syntax error");
      tokens.push({ t: "num", v: Number(text) });
      i = j;
      continue;
    }

    const single: Record<string, Token> = {
      "+": { t: "op", v: "+" },
      "-": { t: "op", v: "-" },
      "−": { t: "op", v: "-" },
      "*": { t: "op", v: "*" },
      "×": { t: "op", v: "*" },
      "/": { t: "op", v: "/" },
      "÷": { t: "op", v: "/" },
      "^": { t: "op", v: "^" },
      "²": { t: "post", v: "²" },
      "%": { t: "post", v: "%" },
      "(": { t: "(" },
      ")": { t: ")" },
    };
    const token = single[c];
    if (!token) throw new CalcError("Syntax error");
    tokens.push(token);
    i++;
  }
  return tokens;
}

const DEG = Math.PI / 180;

/** Snap floating-point dust: sin(180°) is 1.2e-16 in binary, 0 on paper. */
function tidy(x: number): number {
  if (Math.abs(x) < 1e-12) return 0;
  const r = Math.round(x);
  if (Math.abs(x - r) < 1e-12) return r;
  return x;
}

function apply(fn: Fn, x: number): number {
  switch (fn) {
    case "sin": return tidy(Math.sin(x * DEG));
    case "cos": return tidy(Math.cos(x * DEG));
    case "tan": {
      // ⚠️ tan 90° is undefined. In binary it comes out as 1.6 × 10¹⁶, and a
      // calculator that prints that is teaching something false.
      if (tidy(((x % 180) + 180) % 180) === 90) throw new CalcError("Maths error");
      return tidy(Math.tan(x * DEG));
    }
    case "asin": return tidy(Math.asin(x) / DEG);
    case "acos": return tidy(Math.acos(x) / DEG);
    case "atan": return tidy(Math.atan(x) / DEG);
    case "sqrt": return Math.sqrt(x);
  }
}

/**
 * Evaluate what the student typed. `ans` is the previous answer.
 * Unclosed brackets at the end are closed for you — as on a real calculator,
 * where "√(2" then = is perfectly normal.
 */
export function evaluate(input: string, ans = 0): CalcResult {
  try {
    const tokens = tokenise(input);
    if (tokens.length === 0) throw new CalcError("Syntax error");
    let pos = 0;
    const peek = () => tokens[pos];

    const startsPrimary = (tk: Token | undefined) =>
      !!tk && (tk.t === "num" || tk.t === "const" || tk.t === "fn" || tk.t === "(");

    function expr(): number {
      let v = term();
      while (peek()?.t === "op" && ((peek() as { v: string }).v === "+" || (peek() as { v: string }).v === "-")) {
        const op = (tokens[pos++] as { v: string }).v;
        const r = term();
        v = op === "+" ? v + r : v - r;
      }
      return v;
    }

    function term(): number {
      let v = sideBySide();
      for (;;) {
        const tk = peek();
        if (tk?.t === "op" && (tk.v === "*" || tk.v === "/")) {
          pos++;
          const r = sideBySide();
          if (tk.v === "/" && r === 0) throw new CalcError("Maths error");
          v = tk.v === "*" ? v * r : v / r;
        } else {
          return v;
        }
      }
    }

    // Written side by side: 2π, 3(4 + 1), 2sin(30), (1+1)(2+2).
    //
    // ⚠️ THIS BINDS TIGHTER THAN ÷, ON PURPOSE. On a Casio, 1 ÷ 2π is
    // 1 ÷ (2π) = 0.159…, not (1 ÷ 2) × π = 1.57…. A student checking a
    // circle formula against their own calculator must get the same answer
    // here, or one of the two is lying to them.
    function sideBySide(): number {
      let v = unary();
      while (startsPrimary(peek())) v = v * power();
      return v;
    }

    // A minus sign binds LOOSER than a power: −2² = −(2²) = −4.
    function unary(): number {
      const tk = peek();
      if (tk?.t === "op" && (tk.v === "-" || tk.v === "+")) {
        pos++;
        const v = unary();
        return tk.v === "-" ? -v : v;
      }
      return power();
    }

    // Right-associative, like every exam calculator: 2^3^2 = 2^9 = 512.
    function power(): number {
      const base = postfix();
      const tk = peek();
      if (tk?.t === "op" && tk.v === "^") {
        pos++;
        return base ** unary();
      }
      return base;
    }

    function postfix(): number {
      let v = primary();
      for (;;) {
        const tk = peek();
        if (tk?.t === "post") {
          pos++;
          v = tk.v === "²" ? v * v : v / 100;
        } else {
          return v;
        }
      }
    }

    function primary(): number {
      const tk = tokens[pos++];
      if (!tk) throw new CalcError("Syntax error");
      if (tk.t === "num") return tk.v;
      if (tk.t === "const") return tk.v === "π" ? Math.PI : ans;
      if (tk.t === "(") {
        const v = expr();
        if (peek()?.t === ")") pos++;
        else if (pos < tokens.length) throw new CalcError("Syntax error");
        // else: an unclosed bracket at the very end, closed for you.
        return v;
      }
      if (tk.t === "fn") {
        // "sin(30)" and "√9" both work: the bracket is optional, and without
        // one the function takes the next number (with its own power or ²).
        const arg = peek()?.t === "(" ? primary() : postfix();
        return apply(tk.v, arg);
      }
      throw new CalcError("Syntax error");
    }

    const value = expr();
    if (pos !== tokens.length) throw new CalcError("Syntax error");
    if (!Number.isFinite(value)) throw new CalcError("Maths error");
    return { ok: true, value, display: formatNumber(value) };
  } catch (e) {
    if (e instanceof CalcError) return { ok: false, error: e.kind };
    return { ok: false, error: "Syntax error" };
  }
}

const SUPERSCRIPT: Record<string, string> = {
  "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴",
  "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹", "-": "⁻",
};

/**
 * Ten significant figures, like the display on a school calculator. Huge and
 * tiny numbers go into standard form written the way the exam writes it —
 * 3 × 10⁸, not 3e+8, which no student has been taught to read.
 */
export function formatNumber(x: number): string {
  if (x === 0) return "0";
  const abs = Math.abs(x);
  if (abs >= 1e10 || abs < 1e-9) {
    const [m, e] = x.toExponential(9).split("e");
    const mantissa = String(Number(m)).replace("-", "−");
    const exp = String(Number(e)).split("").map((ch) => SUPERSCRIPT[ch] ?? ch).join("");
    return `${mantissa} × 10${exp}`;
  }
  return String(Number(x.toPrecision(10))).replace("-", "−");
}
