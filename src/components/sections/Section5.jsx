import { sectionHtml } from '../../content/sections.js';
import HtmlSection from '../HtmlSection.jsx';

const closingStart = '<section id="closing"';

export default function Section5() {
  const closingIndex = sectionHtml[5].indexOf(closingStart);
  const html = closingIndex >= 0 ? sectionHtml[5].slice(0, closingIndex) : sectionHtml[5];

  return <HtmlSection html={html} />;
}
