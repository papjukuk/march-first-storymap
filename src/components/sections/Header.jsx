const navItems = [
  ['1', '시작'],
  ['2', '배경'],
  ['3', '준비'],
  ['4', '시위 동선'],
  ['5', '장소'],
  ['6', '인물'],
  ['7', '결과'],
];

export default function Header() {
  return (
    <>
      <div id="progress-bar"></div>
      <nav id="nav-dots" aria-label="섹션 이동">
        {navItems.map(([section, label]) => (
          <button
            key={section}
            type="button"
            className={`dot ${section === '1' ? 'active' : ''}`}
            onClick={() => window.scrollToSection?.(section)}
            data-section={section}
            data-tooltip={label}
            aria-label={label}
          />
        ))}
      </nav>
      <section id="hero" data-section="1">
        <div className="hero-bg"></div>
        <div className="hero-texture"></div>
        <div className="hero-ring"></div>
        <div className="hero-content">
          <p className="hero-date">1919년 3월 1일 · March 1st, 1919</p>
          <h1 className="hero-title-ko">
            <span>3</span>·<span>1</span>운동
          </h1>
          <p className="hero-title-en">The March First Independence Movement</p>
          <p className="hero-subtitle">
            1919년 3월 1일, 일제강점기 조선에서 일어난 전국적 독립만세운동.
            <br />
            이 스토리맵은 사건의 배경, 준비, 거사, 확산과 유산을 지도 위에서 따라간다.
          </p>
        </div>
        <div className="scroll-cue">
          <span>scroll</span>
          <div className="arrow"></div>
        </div>
      </section>
    </>
  );
}
