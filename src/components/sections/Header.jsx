import { sectionHtml } from '../../content/sections.js';
import HtmlSection from '../HtmlSection.jsx';

export default function Header() {
  return <HtmlSection html={sectionHtml[0]} />;
}
