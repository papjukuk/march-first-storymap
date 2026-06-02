import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const source = readFileSync(join(root, 'march-first-presentation.html'), 'utf8');
const bodyMatch = source.match(/<body>([\s\S]*?)<script>/);

if (!bodyMatch) {
  throw new Error('Could not find body block in march-first-presentation.html');
}

const body = bodyMatch[1].trim();
const firstSection = body.search(/<section\b/);
let chrome = body.slice(0, firstSection).trim();
let sections = [...body.matchAll(/<section\b[\s\S]*?<\/section>/g)].map((match) => match[0]);

if (sections.length < 9) {
  throw new Error(`Expected at least 9 sections, found ${sections.length}`);
}

function stripLanguageToggle(html) {
  return html.replace(/\s*<!-- LANGUAGE TOGGLE -->\s*<div id="lang-toggle">[\s\S]*?<\/div>\s*/g, '\n');
}

function replaceNavDots(html) {
  const nav = `<!-- NAV DOTS -->
  <nav id="nav-dots" aria-label="섹션 목차">
    <button type="button" class="dot active" onclick="scrollToSection(1)" data-section="1" data-tooltip="시작" aria-label="시작"></button>
    <button type="button" class="dot" onclick="scrollToSection(2)" data-section="2" data-tooltip="배경" aria-label="배경"></button>
    <button type="button" class="dot" onclick="scrollToSection(3)" data-section="3" data-tooltip="준비" aria-label="준비"></button>
    <button type="button" class="dot" onclick="scrollToSection(4)" data-section="4" data-tooltip="3·1" aria-label="3·1"></button>
    <button type="button" class="dot" onclick="scrollToSection(5)" data-section="5" data-tooltip="확산" aria-label="확산"></button>
    <button type="button" class="dot" onclick="scrollToSection(6)" data-section="6" data-tooltip="타임라인" aria-label="타임라인"></button>
    <button type="button" class="dot" onclick="scrollToSection(7)" data-section="7" data-tooltip="지도" aria-label="지도"></button>
    <button type="button" class="dot" onclick="scrollToSection(8)" data-section="8" data-tooltip="인물" aria-label="인물"></button>
    <button type="button" class="dot" onclick="scrollToSection(9)" data-section="9" data-tooltip="의의" aria-label="의의"></button>
  </nav>`;

  return html.replace(/<!-- NAV DOTS -->[\s\S]*?<\/nav>/, nav);
}

function shiftDataSection(html) {
  return html.replace(/\bdata-section="(\d+)"/g, (_, value) => `data-section="${Number(value) + 1}"`);
}

function findTagEnd(html, start) {
  let quote = null;
  for (let i = start; i < html.length; i += 1) {
    const ch = html[i];
    if (quote) {
      if (ch === quote) quote = null;
      continue;
    }
    if (ch === '"' || ch === "'") quote = ch;
    else if (ch === '>') return i;
  }
  return -1;
}

function parseOpeningTag(html, start) {
  const end = findTagEnd(html, start);
  if (end < 0) return null;
  const raw = html.slice(start, end + 1);
  const match = raw.match(/^<\s*([a-zA-Z0-9-]+)\b/);
  if (!match) return null;
  return { name: match[1].toLowerCase(), raw, end };
}

function findClosingEnd(html, openEnd, tagName) {
  const tagPattern = new RegExp(`<\\/?\\s*${tagName}\\b[^>]*>`, 'gi');
  tagPattern.lastIndex = openEnd + 1;
  let depth = 1;
  let match;

  while ((match = tagPattern.exec(html))) {
    const token = match[0];
    if (/^<\s*\//.test(token)) {
      depth -= 1;
      if (depth === 0) return tagPattern.lastIndex;
    } else if (!/\/\s*>$/.test(token)) {
      depth += 1;
    }
  }

  return openEnd + 1;
}

function stripClassElements(html, className) {
  let output = '';
  let index = 0;

  while (index < html.length) {
    const next = html.indexOf('<', index);
    if (next < 0) {
      output += html.slice(index);
      break;
    }

    output += html.slice(index, next);
    const parsed = parseOpeningTag(html, next);
    if (!parsed) {
      output += html[next];
      index = next + 1;
      continue;
    }

    const classMatch = parsed.raw.match(/\bclass\s*=\s*(['"])(.*?)\1/i);
    const classes = classMatch ? classMatch[2].split(/\s+/) : [];

    if (classes.includes(className)) {
      index = findClosingEnd(html, parsed.end, parsed.name);
    } else {
      output += parsed.raw;
      index = parsed.end + 1;
    }
  }

  return output;
}

chrome = replaceNavDots(stripLanguageToggle(chrome));
sections = sections.map((section) => shiftDataSection(stripClassElements(section, 'en-text')));

const groupedSections = [
  `${chrome}\n\n${sections[0]}`,
  sections[1],
  sections[2],
  sections[3],
  `${sections[4]}\n\n${sections[5]}`,
  `${sections[6]}\n\n${sections[7]}\n\n${sections[8]}`,
];

const escapeTemplate = (value) =>
  value.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');

writeFileSync(
  join(root, 'src/content/sections.js'),
  `export const sectionHtml = [\n${groupedSections
    .map((section) => `  \`${escapeTemplate(section)}\``)
    .join(',\n')}\n];\n`,
  'utf8',
);
