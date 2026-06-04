import { outcomes } from '../../data/storyMapData.js';

export default function Section5() {
  return (
    <section id="s6" className="story-section outcome-section" data-section="7">
      <div className="outcome-content reveal">
        <p className="section-label red">결과 · Outcomes</p>
        <h2 className="section-heading-ko">3.1운동이 가져온 세 가지 변화</h2>
        <p className="section-heading-en">Three major results of the March First Movement</p>
        <div className="section-body">
          <p>
            3.1운동은 하루의 만세 시위에 머물지 않았다. 독립운동의 조직을 재편했고, 일제 통치 방식에 변화를 강제했으며,
            아시아 반제국주의 운동에도 자극을 주었다.
          </p>
        </div>
        <div className="outcome-table reveal reveal-delay-1">
          {outcomes.map((outcome, index) => (
            <article key={outcome.title} className="outcome-row">
              <span>결과 {index + 1}</span>
              <strong>{outcome.title}</strong>
              <p>{outcome.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
