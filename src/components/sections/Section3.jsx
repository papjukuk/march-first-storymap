import { useMemo, useState } from 'react';
import { historicalPlaces } from '../../data/storyMapData.js';
import LinkedStoryMap from '../maps/LinkedStoryMap.jsx';

export default function Section3() {
  const [activeId, setActiveId] = useState(historicalPlaces[0].id);
  const markers = useMemo(
    () =>
      historicalPlaces.map((place) => ({
        id: place.id,
        title: place.name,
        desc: place.desc,
        position: place.position,
        center: place.position,
        color: place.type === 'major' ? '#b8922e' : '#a83228',
        circle: place.type === 'protest',
      })),
    [],
  );

  return (
    <section id="s4" className="story-section places-section" data-section="5">
      <div className="places-intro reveal">
        <p className="section-label red">주요 지점과 시위 장소 · Historical Hotspots</p>
        <h2 className="section-heading-ko">장소가 보여주는 3.1운동의 흐름</h2>
        <p className="section-heading-en">Meaning of major places and protest sites</p>
        <div className="section-body">
          <p>
            3.1운동의 지도에는 두 종류의 장소가 함께 나타난다. 하나는 선언, 조직, 수감처럼 사건의 구조를 만든 주요 지점이고,
            다른 하나는 실제 군중이 모이고 행진한 시위 장소다.
          </p>
          <p>아래 지도에서는 주요 장소와 시위 장소를 다른 마커 방식으로 구분해 사건의 의미와 군중의 움직임을 함께 읽을 수 있게 한다.</p>
        </div>
      </div>
      <div className="places-map-area">
        <div className="places-map">
          <LinkedStoryMap center={[37.567, 126.982]} zoom={14} markers={markers} activeId={activeId} />
        </div>
        <div className="places-card-panel reveal">
          <div className="map-legend-inline">
            <span><i className="legend-pin major"></i>주요 장소</span>
            <span><i className="legend-pin protest"></i>시위 장소</span>
          </div>
          <div className="place-chip-grid">
            {historicalPlaces.map((place) => (
              <button type="button" key={place.id} className={place.id === activeId ? 'active' : ''} onMouseEnter={() => setActiveId(place.id)} onClick={() => setActiveId(place.id)}>
                {place.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
