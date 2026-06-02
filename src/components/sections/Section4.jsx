import { sectionHtml } from '../../content/sections.js';
import HtmlSection from '../HtmlSection.jsx';

const section4Start = '<section id="s4"';

export default function Section4() {
  const section4Index = sectionHtml[4].indexOf(section4Start);
  const html = section4Index >= 0 ? sectionHtml[4].slice(section4Index) : '';

  return <HtmlSection html={html} />;
}
