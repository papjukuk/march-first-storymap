import { useState } from 'react';
import { figures } from '../../data/storyMapData.js';
import LinkedStoryMap from '../maps/LinkedStoryMap.jsx';

export default function Section4() {
  const [activeId, setActiveId] = useState(figures[0].id);
  const activeFigure = figures.find((figure) => figure.id === activeId) || figures[0];
  const markers = figures.map((figure) => ({
    id: figure.id,
    title: figure.place,
    desc: `${figure.name}: ${figure.desc}`,
    position: figure.center,
    center: figure.center,
    color: figure.id === 'schofield' ? '#13d644' : '#b8922e',
    zoom: figure.id === 'yu' || figure.id === 'schofield' || figure.id === 'lee' ? 10 : 14,
  }));

  return (
    <section id="s5" className="story-section activist-section" data-section="6">
      <div className="activist-intro reveal">
        <p className="section-label light">독립운동가 아카이브 · Activists Archive</p>
        <h2 className="section-heading-ko">94명의 독립운동가와 활동 장소</h2>
        <p className="section-heading-en">People and places connected to the movement</p>
        <div className="section-body">
          <p>
            이 영역은 독립운동가 94명의 명단과 주요 활동 장소를 지도 위에서 함께 탐색하는 아카이브로 구성한다.
            현재 구현은 기존 콘텐츠에 포함된 주요 인물을 먼저 연결했고, 94명 전체 데이터가 확정되면 같은 카드 형식으로 확장된다.
          </p>
        </div>
      </div>
      <div className="activist-map-layout">
        <div className="activist-map">
          <LinkedStoryMap center={activeFigure.center} zoom={10} markers={markers} activeId={activeId} />
        </div>
        <div className="activist-card-rail">
          {figures.map((figure) => (
            <button
              type="button"
              key={figure.id}
              className={`activist-card ${figure.id === activeId ? 'active' : ''}`}
              onMouseEnter={() => setActiveId(figure.id)}
              onFocus={() => setActiveId(figure.id)}
              onClick={() => setActiveId(figure.id)}
            >
              <strong>{figure.name}</strong>
              <span>{figure.nameEn}</span>
              <small>{figure.place}</small>
              {figure.id === activeId && <p>{figure.desc}</p>}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
