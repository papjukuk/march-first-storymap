import { useMemo, useState } from 'react';
import { preparationDetailedEvents } from '../../data/storyMapData.js';
import LinkedStoryMap from '../maps/LinkedStoryMap.jsx';

export default function Section1() {
  const [activeId, setActiveId] = useState(preparationDetailedEvents[0].id);
  const activeIndex = preparationDetailedEvents.findIndex((event) => event.id === activeId);
  const visibleEvents = preparationDetailedEvents.slice(0, activeIndex + 1);
  const markers = useMemo(
    () =>
      visibleEvents.flatMap((event) =>
        event.places.map((place, placeIndex) => ({
          id: `${event.id}-${placeIndex}`,
          title: place.name,
          desc: event.title,
          position: place.position,
          center: place.position,
          color: place.color,
          zoom: 15,
        })),
      ),
    [visibleEvents],
  );
  const activeMarkerId = markers.at(-1)?.id;

  return (
    <section id="s2" className="story-section prep-section" data-section="3">
      <div className="prep-grid">
        <div className="prep-timeline-panel">
          <p className="section-label light reveal">준비 · Preparation</p>
          <h2 className="section-heading-ko reveal reveal-delay-1">거사 준비의 연결망</h2>
          <p className="section-heading-en reveal reveal-delay-1">Timeline of preparation</p>
          <div className="prep-timeline reveal reveal-delay-2">
            {preparationDetailedEvents.map((event) => (
              <button
                type="button"
                key={event.id}
                className={`prep-event ${event.id === activeId ? 'active' : ''}`}
                onMouseEnter={() => setActiveId(event.id)}
                onFocus={() => setActiveId(event.id)}
                onClick={() => setActiveId(event.id)}
              >
                <span className="prep-number">{event.number}</span>
                <span className="story-card-date">{event.date}</span>
                <strong>{event.title}</strong>
                <p>{event.desc}</p>
              </button>
            ))}
          </div>
        </div>
        <div className="prep-map-panel">
          <LinkedStoryMap
            center={markers.at(-1)?.center || [37.574, 126.984]}
            zoom={15}
            markers={markers}
            activeId={activeMarkerId}
            numbered
          />
        </div>
      </div>
    </section>
  );
}
