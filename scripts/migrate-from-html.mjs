import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const root = process.cwd();
const source = readFileSync(join(root, 'march-first-presentation.html'), 'utf8');

const styleMatch = source.match(/<style>([\s\S]*?)<\/style>/);
const bodyMatch = source.match(/<body>([\s\S]*?)<script>/);

if (!styleMatch || !bodyMatch) {
  throw new Error('Could not find style or body blocks in march-first-presentation.html');
}

const css = styleMatch[1].trim();
const rootMatch = css.match(/:root\s*\{[\s\S]*?\n\s*\}/);
const variables = rootMatch ? rootMatch[0].trim() : ':root {}';
const globalCss = rootMatch ? css.replace(rootMatch[0], '').trim() : css;

const body = bodyMatch[1].trim();
const firstSection = body.search(/<section\b/);
const chrome = body.slice(0, firstSection).trim();
const sections = [...body.matchAll(/<section\b[\s\S]*?<\/section>/g)].map((match) => match[0]);

if (sections.length < 9) {
  throw new Error(`Expected at least 9 sections, found ${sections.length}`);
}

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

const write = (path, content) => {
  const fullPath = join(root, path);
  mkdirSync(dirname(fullPath), { recursive: true });
  writeFileSync(fullPath, content, 'utf8');
};

write('src/styles/variables.css', `${variables}\n`);
write(
  'src/styles/global.css',
  `${globalCss}\n\n.leaflet-popup-content-wrapper {\n  background: rgba(10,8,5,0.92) !important;\n  border: 1px solid rgba(192,57,43,0.3) !important;\n  border-radius: 0 !important;\n  color: #f5f0e8 !important;\n  font-family: 'Noto Sans KR', sans-serif !important;\n}\n\n.leaflet-popup-tip { background: rgba(10,8,5,0.92) !important; }\n.leaflet-popup-close-button { color: #f5f0e8 !important; }\n.leaflet-control-zoom a {\n  background: rgba(10,8,5,0.85) !important;\n  color: #f5f0e8 !important;\n  border-color: rgba(192,57,43,0.3) !important;\n  border-radius: 0 !important;\n}\n.leaflet-control-zoom a:hover { background: rgba(192,57,43,0.4) !important; }\n`
);
write(
  'src/content/sections.js',
  `export const sectionHtml = [\n${groupedSections
    .map((section) => `  \`${escapeTemplate(section)}\``)
    .join(',\n')}\n];\n`
);
