// A minimal PowerPoint writer: enough OOXML to produce a .pptx PowerPoint,
// Keynote, Google Slides and LibreOffice will all open, and nothing more.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY THIS IS HAND-WRITTEN, WHEN NODEMAILER WAS NOT
//
// This project takes dependencies reluctantly and says why each time. The test
// it has settled on is not "is there a library" — there always is — but WHAT
// THE FAILURE MODE LOOKS LIKE. SMTP earned nodemailer because its failure mode
// is a reset email that quietly does not arrive for one person sometimes: a
// silent, intermittent, unobservable wrong.
//
// A .pptx fails the other way. It is a ZIP of XML files, and getting it wrong
// means PowerPoint refuses to open the file — immediate, total and impossible
// to miss. That is a failure mode a check can catch, and this one is checked
// two independent ways (python-pptx parses it and LibreOffice converts it, in
// scripts/check-pptx.mjs).
//
// The other half is cost. A dependency here would have to be installed on
// Matthew's own machine before the site would run — the notes already record
// that friction for nodemailer — and it would sit in a bundle served to
// students on phones for the sake of a button only teachers press.
//
// So: about 200 lines that can be read, against a library that cannot.
// ─────────────────────────────────────────────────────────────────────────────

import { deflateRawSync } from "node:zlib";

// ── ZIP ──────────────────────────────────────────────────────────────────────

/**
 * CRC-32, written out rather than taken from `zlib.crc32`.
 *
 * ⚠️ `zlib.crc32` exists in Node 22 and NOT in Node 18 or 20. Vercel chooses
 * the runtime's Node version, and it changes without this repo being touched,
 * so relying on it would mean a download that works locally and 500s in
 * production after somebody else's upgrade. Fifteen lines is cheaper than that
 * class of bug.
 */
const CRC_TABLE = (() => {
  const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return t;
})();

function crc32(buf: Buffer): number {
  let c = -1;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
}

type ZipEntry = { name: string; body: Buffer };

/**
 * A ZIP archive, deflate-compressed, no directory entries and no ZIP64.
 *
 * A .pptx never needs ZIP64 (that starts at 4GB) and PowerPoint does not care
 * about directory entries, so this is the whole format: for each file a local
 * header then its bytes, then a central directory repeating the headers, then
 * a record saying where the central directory starts.
 */
function zip(entries: ZipEntry[]): Buffer {
  const locals: Buffer[] = [];
  const centrals: Buffer[] = [];
  let offset = 0;

  for (const entry of entries) {
    const name = Buffer.from(entry.name, "utf8");
    const raw = entry.body;
    const deflated = deflateRawSync(raw, { level: 9 });
    // Store rather than deflate when compression made it bigger, which happens
    // on very short files. Method 0 is "stored".
    const useDeflate = deflated.length < raw.length;
    const body = useDeflate ? deflated : raw;
    const method = useDeflate ? 8 : 0;

    const local = Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(20, 4);           // version needed
    local.writeUInt16LE(0x0800, 6);       // bit 11: the name is UTF-8
    local.writeUInt16LE(method, 8);
    local.writeUInt16LE(0, 10);           // mod time — fixed, see below
    local.writeUInt16LE(0x21, 12);        // mod date — 1 Jan 1980
    local.writeUInt32LE(crc32(raw), 14);
    local.writeUInt32LE(body.length, 18);
    local.writeUInt32LE(raw.length, 22);
    local.writeUInt16LE(name.length, 26);
    local.writeUInt16LE(0, 28);
    locals.push(local, name, body);

    const central = Buffer.alloc(46);
    central.writeUInt32LE(0x02014b50, 0);
    central.writeUInt16LE(20, 4);         // version made by
    central.writeUInt16LE(20, 6);         // version needed
    central.writeUInt16LE(0x0800, 8);
    central.writeUInt16LE(method, 10);
    central.writeUInt16LE(0, 12);
    central.writeUInt16LE(0x21, 14);
    central.writeUInt32LE(crc32(raw), 16);
    central.writeUInt32LE(body.length, 20);
    central.writeUInt32LE(raw.length, 24);
    central.writeUInt16LE(name.length, 28);
    central.writeUInt32LE(0, 38);         // external attributes
    central.writeUInt32LE(offset, 42);
    centrals.push(central, name);

    offset += local.length + name.length + body.length;
  }

  const centralSize = centrals.reduce((n, b) => n + b.length, 0);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(entries.length, 8);
  end.writeUInt16LE(entries.length, 10);
  end.writeUInt32LE(centralSize, 12);
  end.writeUInt32LE(offset, 16);

  return Buffer.concat([...locals, ...centrals, end]);
}

// ── XML ──────────────────────────────────────────────────────────────────────

/**
 * ⚠️ ESCAPING IS NOT OPTIONAL HERE AND THE CONTENT WILL TEST IT.
 *
 * This site's questions contain `<`, `>`, `&` and `"` as ordinary subject
 * matter — every Computer Science comparison operator, every "x < y", every
 * `&&`. An unescaped `<` does not corrupt the text, it produces a file
 * PowerPoint declares damaged and refuses to open, which is exactly the loud
 * failure this module was allowed to hand-roll because of.
 */
function xml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
    // Control characters are not legal in XML at all, at any escape. Strip
    // rather than encode: there is no representation that would survive.
    //
    // U+FFFE and U+FFFF are in the same category and were missing: they are
    // illegal in XML 1.0 at any escape, so one of them anywhere in the content
    // would produce exactly the "PowerPoint says this file is damaged" failure
    // this module was allowed to be hand-written on the promise of avoiding.
    .replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\uFFFE\uFFFF]/g, "");
}

const DECL = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n';
const A = 'xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"';
const P = 'xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main"';
const R = 'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"';

/** 16:9, in English Metric Units — 914,400 to the inch. */
const SLIDE_W = 12192000;
const SLIDE_H = 6858000;

export type TextRun = { text: string; bold?: boolean; size?: number; colour?: string };
export type Para = { runs: TextRun[]; bullet?: boolean; space?: number };

/** One text box on a slide, positioned in EMU. */
export type TextBox = {
  x: number; y: number; w: number; h: number;
  paras: Para[];
  /** Shrink the text to fit rather than letting it run off the slide. */
  shrink?: boolean;
};

export type Slide = {
  boxes: TextBox[];
  /** Speaker notes — the teacher's half. Never rendered on the slide itself. */
  notes?: string[];
  /**
   * The answer this slide is asking for. NOT RENDERED ANYWHERE — it exists so
   * that `scripts/check-pptx.mjs` can prove no earlier slide already showed
   * it, which is the real rule ("the class never meets an answer before the
   * question") rather than the blunt one it first enforced ("an answer never
   * appears on a slide"). The blunt version fired on a teaching slide that
   * correctly came AFTER its starter question, which is ordinary retrieval
   * practice and exactly the sort of correct answer a check must not punish.
   */
  secret?: string;
};

function runXml(run: TextRun): string {
  const props = [
    `lang="en-GB"`,
    `sz="${Math.round((run.size ?? 18) * 100)}"`,
    `b="${run.bold ? 1 : 0}"`,
    `dirty="0"`,
  ].join(" ");
  // ⚠️ ESCAPED EVEN THOUGH EVERY CALLER PASSES A HEX LITERAL TODAY.
  // This was the one interpolation in the file that skipped xml(), and it
  // injects cleanly: a colour of `000000"/></a:solidFill><a:solidFill…` closes
  // the attribute and writes new elements. Nothing reaches it from a request,
  // so it is a loaded gun with no ammunition — but "no ammunition" is a fact
  // about today's callers, not about this function, and the next person to
  // make a colour dynamic will not read this far.
  const fill = run.colour
    ? `<a:solidFill><a:srgbClr val="${xml(run.colour)}"/></a:solidFill>`
    : "";
  return `<a:r><a:rPr ${props}>${fill}</a:rPr><a:t>${xml(run.text)}</a:t></a:r>`;
}

function paraXml(para: Para): string {
  // An empty paragraph is a blank line. It must still emit <a:pPr> or some
  // renderers collapse it away.
  const indent = para.bullet
    ? `<a:pPr marL="285750" indent="-285750"><a:spcBef><a:spcPts val="600"/></a:spcBef><a:buChar char="•"/></a:pPr>`
    : `<a:pPr><a:spcBef><a:spcPts val="${para.space ?? 300}"/></a:spcBef></a:pPr>`;
  return `<a:p>${indent}${para.runs.map(runXml).join("")}</a:p>`;
}

function boxXml(box: TextBox, id: number): string {
  // normAutofit shrinks text that would otherwise overflow. Without it a long
  // question silently runs off the bottom of the slide — the same class of
  // clipping as an SVG label past its viewBox, and just as invisible.
  const fit = box.shrink
    ? `<a:normAutofit fontScale="77000" lnSpcReduction="20000"/>`
    : `<a:normAutofit/>`;
  return `<p:sp>
  <p:nvSpPr>
    <p:cNvPr id="${id}" name="Text ${id}"/>
    <p:cNvSpPr txBox="1"/>
    <p:nvPr/>
  </p:nvSpPr>
  <p:spPr>
    <a:xfrm><a:off x="${box.x}" y="${box.y}"/><a:ext cx="${box.w}" cy="${box.h}"/></a:xfrm>
    <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
    <a:noFill/>
  </p:spPr>
  <p:txBody>
    <a:bodyPr wrap="square" lIns="0" tIns="0" rIns="0" bIns="0">${fit}</a:bodyPr>
    <a:lstStyle/>
    ${box.paras.map(paraXml).join("\n    ")}
  </p:txBody>
</p:sp>`;
}

function slideXml(slide: Slide): string {
  return `${DECL}<p:sld ${A} ${P} ${R}>
<p:cSld><p:spTree>
  <p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr>
  <p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/><a:chOff x="0" y="0"/><a:chExt cx="0" cy="0"/></a:xfrm></p:grpSpPr>
  ${slide.boxes.map((b, i) => boxXml(b, i + 2)).join("\n  ")}
</p:spTree></p:cSld>
<p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr>
</p:sld>`;
}

function notesXml(lines: string[], slideNumber: number): string {
  const paras = lines
    .map((line) => paraXml({ runs: [{ text: line, size: 12 }] }))
    .join("\n      ");
  return `${DECL}<p:notes ${A} ${P} ${R}>
<p:cSld><p:spTree>
  <p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr>
  <p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/><a:chOff x="0" y="0"/><a:chExt cx="0" cy="0"/></a:xfrm></p:grpSpPr>
  <p:sp>
    <p:nvSpPr>
      <p:cNvPr id="2" name="Notes Placeholder ${slideNumber}"/>
      <p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr>
      <p:nvPr><p:ph type="body" idx="1"/></p:nvPr>
    </p:nvSpPr>
    <p:spPr/>
    <p:txBody><a:bodyPr/><a:lstStyle/>
      ${paras || "<a:p/>"}
    </p:txBody>
  </p:sp>
</p:spTree></p:cSld>
<p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr>
</p:notes>`;
}

// ── The parts every .pptx must contain ───────────────────────────────────────
//
// None of this is interesting and all of it is required. A deck with no slide
// master, no layout or no theme is not a deck PowerPoint will open, however
// correct the slides themselves are. It is written out in full rather than
// generated because it never varies: there is exactly one master, one layout
// and one theme here, and a "blank" one at that — the whole design intent is
// that the deck carries no styling of its own, so that dropping it into a
// school's own template leaves the school's template in charge.

const THEME = `${DECL}<a:theme ${A} name="Revision Lab">
<a:themeElements>
  <a:clrScheme name="Revision Lab">
    <a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>
    <a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>
    <a:dk2><a:srgbClr val="1F2430"/></a:dk2>
    <a:lt2><a:srgbClr val="F2F2F2"/></a:lt2>
    <a:accent1><a:srgbClr val="2563EB"/></a:accent1>
    <a:accent2><a:srgbClr val="EA580C"/></a:accent2>
    <a:accent3><a:srgbClr val="7C3AED"/></a:accent3>
    <a:accent4><a:srgbClr val="DC2626"/></a:accent4>
    <a:accent5><a:srgbClr val="059669"/></a:accent5>
    <a:accent6><a:srgbClr val="0D9488"/></a:accent6>
    <a:hlink><a:srgbClr val="2563EB"/></a:hlink>
    <a:folHlink><a:srgbClr val="7C3AED"/></a:folHlink>
  </a:clrScheme>
  <a:fontScheme name="Revision Lab">
    <a:majorFont><a:latin typeface="Calibri"/><a:ea typeface=""/><a:cs typeface=""/></a:majorFont>
    <a:minorFont><a:latin typeface="Calibri"/><a:ea typeface=""/><a:cs typeface=""/></a:minorFont>
  </a:fontScheme>
  <a:fmtScheme name="Revision Lab">
    <a:fillStyleLst>
      <a:solidFill><a:schemeClr val="phClr"/></a:solidFill>
      <a:solidFill><a:schemeClr val="phClr"/></a:solidFill>
      <a:solidFill><a:schemeClr val="phClr"/></a:solidFill>
    </a:fillStyleLst>
    <a:lnStyleLst>
      <a:ln w="6350"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:ln>
      <a:ln w="12700"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:ln>
      <a:ln w="19050"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:ln>
    </a:lnStyleLst>
    <a:effectStyleLst>
      <a:effectStyle><a:effectLst/></a:effectStyle>
      <a:effectStyle><a:effectLst/></a:effectStyle>
      <a:effectStyle><a:effectLst/></a:effectStyle>
    </a:effectStyleLst>
    <a:bgFillStyleLst>
      <a:solidFill><a:schemeClr val="phClr"/></a:solidFill>
      <a:solidFill><a:schemeClr val="phClr"/></a:solidFill>
      <a:solidFill><a:schemeClr val="phClr"/></a:solidFill>
    </a:bgFillStyleLst>
  </a:fmtScheme>
</a:themeElements>
</a:theme>`;

const CLR_MAP = `<p:clrMap bg1="lt1" tx1="dk1" bg2="lt2" tx2="dk2" accent1="accent1" accent2="accent2" accent3="accent3" accent4="accent4" accent5="accent5" accent6="accent6" hlink="hlink" folHlink="folHlink"/>`;

const EMPTY_TREE = `<p:spTree>
  <p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr>
  <p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/><a:chOff x="0" y="0"/><a:chExt cx="0" cy="0"/></a:xfrm></p:grpSpPr>
</p:spTree>`;

const SLIDE_MASTER = `${DECL}<p:sldMaster ${A} ${P} ${R}>
<p:cSld><p:bg><p:bgPr><a:solidFill><a:schemeClr val="bg1"/></a:solidFill><a:effectLst/></p:bgPr></p:bg>${EMPTY_TREE}</p:cSld>
${CLR_MAP}
<p:sldLayoutIdLst><p:sldLayoutId id="2147483649" r:id="rId1"/></p:sldLayoutIdLst>
<p:txStyles><p:titleStyle/><p:bodyStyle/><p:otherStyle/></p:txStyles>
</p:sldMaster>`;

const SLIDE_LAYOUT = `${DECL}<p:sldLayout ${A} ${P} ${R} type="blank" preserve="1">
<p:cSld name="Blank">${EMPTY_TREE}</p:cSld>
<p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr>
</p:sldLayout>`;

const NOTES_MASTER = `${DECL}<p:notesMaster ${A} ${P} ${R}>
<p:cSld>${EMPTY_TREE}</p:cSld>
${CLR_MAP}
<p:notesStyle/>
</p:notesMaster>`;

/**
 * Turn a list of slides into the bytes of a .pptx file.
 *
 * ⚠️ EVERY SLIDE GETS A NOTES SLIDE, even one whose notes are empty.
 * PowerPoint is content either way, but Google Slides has historically dropped
 * the notes pane for a deck where only some slides have one, and a teacher
 * opening this in Google Slides and finding the answers missing would conclude
 * the feature is broken rather than that their app is picky.
 */
export function buildPptx(slides: Slide[]): Buffer {
  const files: ZipEntry[] = [];
  const add = (name: string, body: string) =>
    files.push({ name, body: Buffer.from(body, "utf8") });

  const n = slides.length;
  const slideNames = slides.map((_, i) => `slide${i + 1}.xml`);

  add("[Content_Types].xml", `${DECL}<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
<Default Extension="xml" ContentType="application/xml"/>
<Override PartName="/ppt/presentation.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml"/>
<Override PartName="/ppt/slideMasters/slideMaster1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideMaster+xml"/>
<Override PartName="/ppt/slideLayouts/slideLayout1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml"/>
<Override PartName="/ppt/notesMasters/notesMaster1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.notesMaster+xml"/>
<Override PartName="/ppt/theme/theme1.xml" ContentType="application/vnd.openxmlformats-officedocument.theme+xml"/>
${slides.map((_, i) => `<Override PartName="/ppt/slides/slide${i + 1}.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml"/>`).join("\n")}
${slides.map((_, i) => `<Override PartName="/ppt/notesSlides/notesSlide${i + 1}.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.notesSlide+xml"/>`).join("\n")}
</Types>`);

  add("_rels/.rels", `${DECL}<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="ppt/presentation.xml"/>
</Relationships>`);

  // Slide ids must start at 256 — anything below is reserved, and PowerPoint
  // rejects the file rather than renumbering.
  add("ppt/presentation.xml", `${DECL}<p:presentation ${A} ${P} ${R} saveSubsetFonts="1">
<p:sldMasterIdLst><p:sldMasterId id="2147483648" r:id="rId1"/></p:sldMasterIdLst>
<p:notesMasterIdLst><p:notesMasterId r:id="rId${n + 2}"/></p:notesMasterIdLst>
<p:sldIdLst>${slides.map((_, i) => `<p:sldId id="${256 + i}" r:id="rId${i + 2}"/>`).join("")}</p:sldIdLst>
<p:sldSz cx="${SLIDE_W}" cy="${SLIDE_H}"/>
<p:notesSz cx="${SLIDE_H}" cy="${SLIDE_W}"/>
</p:presentation>`);

  add("ppt/_rels/presentation.xml.rels", `${DECL}<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="slideMasters/slideMaster1.xml"/>
${slideNames.map((name, i) => `<Relationship Id="rId${i + 2}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/${name}"/>`).join("\n")}
<Relationship Id="rId${n + 2}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/notesMaster" Target="notesMasters/notesMaster1.xml"/>
<Relationship Id="rId${n + 3}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml"/>
</Relationships>`);

  add("ppt/theme/theme1.xml", THEME);
  add("ppt/slideMasters/slideMaster1.xml", SLIDE_MASTER);
  add("ppt/slideMasters/_rels/slideMaster1.xml.rels", `${DECL}<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout1.xml"/>
<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="../theme/theme1.xml"/>
</Relationships>`);
  add("ppt/slideLayouts/slideLayout1.xml", SLIDE_LAYOUT);
  add("ppt/slideLayouts/_rels/slideLayout1.xml.rels", `${DECL}<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="../slideMasters/slideMaster1.xml"/>
</Relationships>`);
  add("ppt/notesMasters/notesMaster1.xml", NOTES_MASTER);
  add("ppt/notesMasters/_rels/notesMaster1.xml.rels", `${DECL}<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="../theme/theme1.xml"/>
</Relationships>`);

  slides.forEach((slide, i) => {
    add(`ppt/slides/slide${i + 1}.xml`, slideXml(slide));
    add(`ppt/slides/_rels/slide${i + 1}.xml.rels`, `${DECL}<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout1.xml"/>
<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/notesSlide" Target="../notesSlides/notesSlide${i + 1}.xml"/>
</Relationships>`);
    add(`ppt/notesSlides/notesSlide${i + 1}.xml`, notesXml(slide.notes ?? [], i + 1));
    add(`ppt/notesSlides/_rels/notesSlide${i + 1}.xml.rels`, `${DECL}<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/notesMaster" Target="../notesMasters/notesMaster1.xml"/>
<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="../slides/slide${i + 1}.xml"/>
</Relationships>`);
  });

  return zip(files);
}

export const PPTX_SLIDE_WIDTH = SLIDE_W;
export const PPTX_SLIDE_HEIGHT = SLIDE_H;
