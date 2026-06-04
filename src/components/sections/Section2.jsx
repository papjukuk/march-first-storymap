import { protestRouteParts } from '../../data/storyMapData.js';
import RouteStoryMap from '../maps/RouteStoryMap.jsx';

export default function Section2() {
  return (
    <section id="s3" className="story-section route-section" data-section="4">
      {protestRouteParts.map((part, index) => (
        <article key={part.id} className={`split-layout section-part ${index % 2 === 1 ? 'reverse' : ''}`}>
          <div className="split-text dark-panel reveal">
            <div className="chapter-num">0{index + 1}</div>
            <p className="section-label red">시위 동선 · Route</p>
            <h2 className="section-heading-ko">{part.title}</h2>
            <p className="section-heading-en">March route on March 1st</p>
            <div className="divider">
              <div className="divider-line"></div>
              <div className="divider-diamond"></div>
              <div className="divider-line"></div>
            </div>
            <div className="section-body">
              <p>{part.desc}</p>
              <p>해당 파트에 도달하면 지도 위 경로선이 출발점부터 순차적으로 그려진다.</p>
            </div>
          </div>
          <div className="split-visual section-map-visual">
            <RouteStoryMap center={part.center} route={part.route} color={part.id === 'west' ? '#b8922e' : '#a83228'} />
          </div>
        </article>
      ))}
    </section>
  );
}
