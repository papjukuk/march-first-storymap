import { sourceLinks } from '../../data/storyMapData.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <p className="section-label light">References</p>
        <h2>3.1운동 스토리맵</h2>
        <p>제작자 및 소속 정보는 최종 제출 정보에 맞춰 입력합니다.</p>
      </div>
      <div className="footer-links">
        {sourceLinks.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
