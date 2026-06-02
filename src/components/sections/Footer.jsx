import { sectionHtml } from '../../content/sections.js';
import HtmlSection from '../HtmlSection.jsx';

const closingStart = '<section id="closing"';

export default function Footer() {
  const closingIndex = sectionHtml[5].indexOf(closingStart);
  const footerHtml = closingIndex >= 0 ? sectionHtml[5].slice(closingIndex) : '';

  return <HtmlSection html={footerHtml} />;
}
