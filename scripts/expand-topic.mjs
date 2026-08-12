// Insert extra flashcards / practice questions / misconceptions into topics
// that already exist, without rewriting the file by hand.
//
// WHY THIS EXISTS
//
// Expanding a topic means adding items to the MIDDLE of an array that sits
// inside an object that sits inside a 6,000-line file. Doing that with a
// find-and-replace needs a unique anchor string, and there isn't one — every
// topic ends with the same `],` characters. The first attempt at expansion by
// hand appended a whole duplicate topic object, which produced duplicate keys
// that TypeScript silently allowed.
//
// So this walks the file with a bracket counter instead: find the topic key,
// find the named array inside it, count brackets to its real end, insert there.
// Positions, not patterns. It cannot land in the wrong place.
//
//   node scripts/expand-topic.mjs additions.json
//
// where additions.json is:
//   { "chemistry/electrolysis": { "flashcards": [...], "practice": [...] } }
//
// Values are written back as TypeScript object literals, formatted to match the
// file. Run `npm run check` afterwards — this tool does not validate content,
// only place it correctly.

import { readFileSync, writeFileSync } from "node:fs";

const additions = JSON.parse(readFileSync(process.argv[2], "utf8"));

// Find the index just past the opening bracket of `name: [` inside the object
// that starts at `from`, and the index of its matching close bracket.
function findArray(src, from, name) {
  const at = src.indexOf(`${name}: [`, from);
  if (at === -1) return null;
  let i = at + name.length + 2; // sitting on the '['
  let depth = 0;
  for (; i < src.length; i++) {
    const ch = src[i];
    if (ch === '"') {
      // skip the string, honouring escapes
      i++;
      while (i < src.length && !(src[i] === '"' && src[i - 1] !== "\\")) i++;
      continue;
    }
    if (ch === "[") depth++;
    else if (ch === "]") {
      depth--;
      if (depth === 0) return { open: at + name.length + 3, close: i };
    }
  }
  return null;
}

// Render a JS value as a TypeScript literal at the given indent.
function lit(v, ind) {
  const pad = " ".repeat(ind);
  if (typeof v === "string") return JSON.stringify(v);
  if (Array.isArray(v))
    return `[\n${v.map((x) => `${pad}  ${lit(x, ind + 2)},`).join("\n")}\n${pad}]`;
  const keys = Object.keys(v);
  return `{\n${keys
    .map((k) => `${pad}  ${k}: ${lit(v[k], ind + 2)},`)
    .join("\n")}\n${pad}}`;
}

const files = new Map();
let added = 0;

for (const [key, fields] of Object.entries(additions)) {
  const subject = key.split("/")[0];
  const path = `app/lib/content/${subject}.ts`;
  if (!files.has(path)) files.set(path, readFileSync(path, "utf8"));
  let src = files.get(path);

  const keyAt = src.indexOf(`"${key}": {`);
  if (keyAt === -1) throw new Error(`topic not found: ${key}`);

  // Insert into the LAST-named array first, so earlier offsets stay valid.
  const order = ["misconceptions", "practice", "examTips", "flashcards"];
  for (const name of order) {
    const items = fields[name];
    if (!items || !items.length) continue;
    const span = findArray(src, keyAt, name);
    if (!span) throw new Error(`${name} not found in ${key}`);

    // Guard: refuse if any item is already in the file. Re-running this script
    // by mistake is otherwise silent, and duplicate questions are the one thing
    // the content checker is strictest about.
    for (const item of items) {
      const probe = item.question ?? item.term ?? item.wrong ?? item.tip;
      if (probe && src.slice(span.open, span.close).includes(JSON.stringify(probe)))
        throw new Error(`already present in ${key}: ${probe.slice(0, 60)}`);
    }

    const body = items.map((x) => `      ${lit(x, 6)},`).join("\n");
    src = src.slice(0, span.close - 4) + body + "\n    " + src.slice(span.close);
    added += items.length;
  }
  files.set(path, src);
}

for (const [path, src] of files) writeFileSync(path, src);
console.log(`inserted ${added} items across ${files.size} file(s)`);
