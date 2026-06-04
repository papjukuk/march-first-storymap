import { backgroundEvents } from '../../data/storyMapData.js';
import LinkedStoryMap from '../maps/LinkedStoryMap.jsx';

export default function Section0() {
  return (
    <section id="s1" className="story-section alternating-section" data-section="2">
      {backgroundEvents.map((event, index) => {
        const reverse = index % 2 === 1;
        const marker = {
          id: event.id,
          title: event.map.title,
          caption: event.map.caption,
          position: event.map.marker,
          center: event.map.center,
          zoom: event.map.zoom,
          color: event.map.color,
        };

        return (
          <article key={event.id} className={`split-layout section-part ${reverse ? 'reverse' : ''}`}>
            <div className="split-text hanji-panel reveal">
              <div className="chapter-num">{event.number}</div>
              <p className="section-label red">{event.label}</p>
              <p className="section0-date">{event.date}</p>
              <h2 className="section-heading-ko">{event.title}</h2>
              <p className="section-heading-en">{event.titleEn}</p>
              <div className="divider">
                <div className="divider-line"></div>
                <div className="divider-diamond"></div>
                <div className="divider-line"></div>
              </div>
              <div className="section-body">
                {event.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="pull-quote">
                <p className="pull-quote-ko">{event.quote}</p>
              </div>
            </div>
            <div className="split-visual section-map-visual">
              <LinkedStoryMap center={event.map.center} zoom={event.map.zoom} markers={[marker]} activeId={event.id} />
            </div>
          </article>
        );
      })}
    </section>
  );
}
