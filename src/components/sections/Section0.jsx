import Section0Map from '../maps/Section0Map.jsx';
import { section0Data } from '../../data/section0Data.js';

function Section0Part({ event, index }) {
  return (
    <article className={`section0-part split-layout${event.reverse ? ' reverse' : ''}`}>
      <div className="split-text section0-text">
        <div className="chapter-num">{event.number}</div>
        <p className="section-label red reveal">{event.label}</p>
        <p className="section0-date reveal">{event.date}</p>
        <h2 className="section-heading-ko reveal reveal-delay-1">{event.title}</h2>
        <p className="section-heading-en reveal reveal-delay-1">{event.titleEn}</p>
        <div className="divider reveal reveal-delay-2">
          <div className="divider-line"></div>
          <div className="divider-diamond"></div>
          <div className="divider-line"></div>
        </div>
        <div className="section-body reveal reveal-delay-2">
          {event.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="pull-quote reveal reveal-delay-3">
          <p className="pull-quote-ko">{event.quote}</p>
        </div>
      </div>
      <div className="split-visual section0-visual">
        <Section0Map event={event} index={index} />
      </div>
    </article>
  );
}

export default function Section0() {
  return (
    <section id="s1" className="story-section section0" data-section="2">
      {section0Data.events.map((event, index) => (
        <Section0Part key={event.id} event={event} index={index} />
      ))}
    </section>
  );
}
