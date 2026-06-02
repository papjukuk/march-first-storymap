export const sectionHtml = [
  `<div id="progress-bar"></div>
<!-- NAV DOTS -->
  <nav id="nav-dots" aria-label="섹션 목차">
    <button type="button" class="dot active" onclick="scrollToSection(1)" data-section="1" data-tooltip="시작" aria-label="시작"></button>
    <button type="button" class="dot" onclick="scrollToSection(2)" data-section="2" data-tooltip="배경" aria-label="배경"></button>
    <button type="button" class="dot" onclick="scrollToSection(3)" data-section="3" data-tooltip="준비" aria-label="준비"></button>
    <button type="button" class="dot" onclick="scrollToSection(4)" data-section="4" data-tooltip="3·1" aria-label="3·1"></button>
    <button type="button" class="dot" onclick="scrollToSection(5)" data-section="5" data-tooltip="확산" aria-label="확산"></button>
    <button type="button" class="dot" onclick="scrollToSection(6)" data-section="6" data-tooltip="타임라인" aria-label="타임라인"></button>
    <button type="button" class="dot" onclick="scrollToSection(7)" data-section="7" data-tooltip="지도" aria-label="지도"></button>
    <button type="button" class="dot" onclick="scrollToSection(8)" data-section="8" data-tooltip="인물" aria-label="인물"></button>
    <button type="button" class="dot" onclick="scrollToSection(9)" data-section="9" data-tooltip="의의" aria-label="의의"></button>
  </nav>

  <!-- ══════════════ HERO ══════════════ -->

<section id="hero" data-section="1">
    <div class="hero-bg"></div>
    <div class="hero-texture"></div>
    <div class="hero-ring"></div>

    <div class="hero-content">
      <p class="hero-date">1919년 3월 1일 · March 1st, 1919</p>
      <h1 class="hero-title-ko"><span>3</span>·<span>1</span>운동</h1>
      <p class="hero-title-en">The March First Independence Movement</p>
      <p class="hero-subtitle">
        <span class="ko-text">1919년 3월 1일, 일제강점기 조선에서 일어난 전국적 독립만세운동. <br> 약 200만 명이 참가했으며, 대한민국 임시정부 수립의 직접적 계기가
          되었다.</span>
        
      </p>
    </div>

    <div class="scroll-cue">
      <span>scroll</span>
      <div class="arrow"></div>
    </div>
  </section>`,
  `<section id="s1" class="story-section" data-section="2">
    <div class="split-layout">
      <div class="split-text" style="background:var(--bg-1); color:var(--cream);">
        <div class="chapter-num">01</div>
        <p class="section-label red reveal">배경 · Background</p>
        <h2 class="section-heading-ko reveal reveal-delay-1">
          일제강점기의<br>통치 구조
        </h2>
        <p class="section-heading-en reveal reveal-delay-1">Colonial Rule, 1910–1919</p>
        <div class="divider reveal reveal-delay-2">
          <div class="divider-line"></div>
          <div class="divider-diamond"></div>
          <div class="divider-line"></div>
        </div>
        <div class="section-body reveal reveal-delay-2">
          <p class="ko-text">1910년 한일병합조약으로 조선은 일제에 합병되었다.<br> 조선총독부는 헌병경찰제도를 운영하며 언론·출판·집회를 금지했고, 재판 없이 즉결처분을 집행했다.
          </p>
          <p class="ko-text">1919년 1월 고종 황제가 사망했다. 독살 의혹이 제기되었고, 같은 시기 파리강화회의에서 윌슨 대통령이 <strong>민족자결주의</strong>를 발표하면서
            독립운동의 조직화가 본격화되었다.</p>
          
        </div>

        <div class="pull-quote reveal reveal-delay-3">
          <p class="pull-quote-ko">"각 민족은 스스로의 운명을 결정할 권리가 있다" — 우드로 윌슨, 1918</p>
          <p class="pull-quote-en">"Every people has the right to determine its own destiny" — Woodrow Wilson, 1918
          </p>
        </div>

        <div class="wilson-photo-card reveal reveal-delay-3"
          style="margin-top: 25px; max-width: 320px; border: 1px solid rgba(216, 210, 200, 0.15); padding: 10px; background: rgba(0, 0, 0, 0.2); border-radius: 4px;">
          <img
            src="data:image/jpeg;base64,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"
            alt="Woodrow Wilson (1919)"
            style="width: 100%; height: auto; display: block; border-radius: 2px; filter: grayscale(100%) contrast(115%); opacity: 0.85; border: 1px solid rgba(216, 210, 200, 0.1);">
        </div>
      </div>

      <div class="split-visual">
        <div id="map-background" style="width:100%;height:100%;min-height:500px;"></div>
      </div>
    </div>
  </section>`,
  `<section id="s2" class="story-section dark" data-section="3">
    <div class="split-layout reverse">
      <div class="split-text" style="background:var(--hanji);color:var(--hanji-text);">
        <div class="chapter-num" style="color:var(--hanji-text);">02</div>
        <p class="section-label light reveal" style="color:var(--red);">준비 · Preparation</p>
        <h2 class="section-heading-ko reveal reveal-delay-1">
          거사 준비:<br>종교 연합과 선언서 인쇄
        </h2>
        <p class="section-heading-en reveal reveal-delay-1">Organizing the Movement</p>
        <div class="divider reveal reveal-delay-2" style="color:var(--hanji-text)">
          <div class="divider-line"></div>
          <div class="divider-diamond"></div>
          <div class="divider-line"></div>
        </div>
        <div class="section-body reveal reveal-delay-2">
          <p class="ko-text">1919년 2월 8일, 도쿄 유학생 600여 명이 조선YMCA 회관에서 <strong>2·8 독립선언</strong>을 발표했다.<br>
            이 사실이 국내에 전해지면서 국내 지도자들의 거사 준비가 가속화되었다.</p>
          <p class="ko-text">천도교 손병희를 중심으로 기독교·불교 지도자들이 합류해 민족대표 33인을 구성했다.<br> 운동의 원칙은 세 가지였다.
            <strong>대중화·일원화·비폭력</strong>. <br> 이후 독립선언서 2만 1,000장이 인쇄되어 3월 1일 이전 전국 각지로 배포되었다.
          </p>
          
        </div>

        <div class="person-grid reveal reveal-delay-3">
          <div class="person-card" style="background:#d8d0be;">
            <p class="person-name-ko" style="color:var(--hanji-text);">손병희</p>
            <p class="person-name-en">Son Byong-hui</p>
            <p class="person-desc ko-text">천도교 교주, 민족대표 33인의 조직자</p>
            
          </div>
          <div class="person-card" style="background:#d8d0be;">
            <p class="person-name-ko" style="color:var(--hanji-text);">이승훈</p>
            <p class="person-name-en">Lee Seung-hun</p>
            <p class="person-desc ko-text">기독교 대표, 평안도 지역 만세운동 조직</p>
            
          </div>
          <div class="person-card" style="background:#d8d0be;">
            <p class="person-name-ko" style="color:var(--hanji-text);">한용운</p>
            <p class="person-name-en">Han Yong-un</p>
            <p class="person-desc ko-text">불교 승려, 독립선언서 공약삼장 작성</p>
            
          </div>
        </div>
      </div>

      <div class="split-visual" style="background:var(--bg-0);">
        <div
          style="display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;padding:3rem;text-align:center;">
          <div style="border:1px solid rgba(192,57,43,0.3);padding:3rem;max-width:380px;">
            <p
              style="font-family:'Playfair Display',serif;font-size:0.7rem;letter-spacing:0.3em;color:var(--gold-light);margin-bottom:1.5rem;opacity:0.8;">
              독립선언서 · Declaration of Independence</p>
            <p
              style="font-family:'Noto Serif KR',serif;font-size:1.4rem;font-weight:700;line-height:1.8;color:var(--cream);">
              吾等은 玆에<br>我 朝鮮의<br>獨立國임과</p>
            <p
              style="font-family:'Noto Serif KR',serif;font-size:1.2rem;line-height:1.8;color:var(--cream);margin-top:0.5rem;">
              朝鮮人의<br>自主民임을<br>宣言하노라</p>
            <div class="divider" style="color:var(--cream);margin:1.5rem 0;">
              <div class="divider-line"></div>
              <div class="divider-diamond"></div>
              <div class="divider-line"></div>
            </div>
            <p
              style="font-family:'Playfair Display',serif;font-style:italic;font-size:0.85rem;color:rgba(245,240,232,0.5);line-height:1.7;">
              "We hereby declare that Korea is an independent nation and that Koreans are a self-governing people."
            </p>
            <p style="margin-top:1.5rem;font-size:0.7rem;letter-spacing:0.15em;color:var(--gold-light);opacity:0.6;">—
              1919. 3. 1</p>
          </div>
        </div>
      </div>
    </div>
  </section>`,
  `<section id="timeline-section" data-section="6">
    <div class="timeline-header">
      <p class="section-label gold reveal" style="text-align:center;">연표 · Chronology</p>
      <h2 class="section-heading-ko reveal reveal-delay-1" style="text-align:center;color:var(--cream);">3.1운동의 발자취</h2>
      <p class="section-heading-en reveal reveal-delay-1" style="text-align:center;color:var(--cream);">Key Moments of
        the Movement</p>
    </div>

    <div class="timeline-track reveal">
      <div class="timeline-line"></div>

      <div class="timeline-item">
        <div class="tl-text right">
          <div class="tl-date-badge cat-prep">
            <span class="badge-year">1919</span>
            <span class="badge-day">01. 20</span>
          </div>
          <div class="tl-card cat-prep">
            <span class="tl-toggle-icon">+</span>
            <p class="tl-title-ko">손병희, 독립운동 동의</p>
            <p class="tl-title-en">Sohn Byong-hui Joins the Cause</p>
            <p class="tl-desc ko-text">천도교주 손병희가 교단 차원의 독립운동 참여에 공식 동의하며 조직적 준비의 첫 발이 내딛어졌다.</p>
            
          </div>
        </div>
        <div class="tl-dot-wrap">
          <div class="tl-dot"></div>
        </div>
        <div></div>
      </div>

      <div class="timeline-item">
        <div></div>
        <div class="tl-dot-wrap">
          <div class="tl-dot"></div>
        </div>
        <div class="tl-text">
          <div class="tl-date-badge cat-prep">
            <span class="badge-year">1919</span>
            <span class="badge-day">02. 08</span>
          </div>
          <div class="tl-card cat-prep">
            <span class="tl-toggle-icon">+</span>
            <p class="tl-title-ko">2·8 독립선언 (도쿄)</p>
            <p class="tl-title-en">February 8th Declaration, Tokyo</p>
            <p class="tl-desc ko-text">도쿄 유학생 600여 명이 YMCA 회관에 집결하여 독립선언서를 낭독하고 만세를 외쳤다.</p>
            
          </div>
        </div>
      </div>

      <div class="timeline-item">
        <div class="tl-text right">
          <div class="tl-date-badge cat-prep">
            <span class="badge-year">1919</span>
            <span class="badge-day">02. 24</span>
          </div>
          <div class="tl-card cat-prep">
            <span class="tl-toggle-icon">+</span>
            <p class="tl-title-ko">3교 합작 합의</p>
            <p class="tl-title-en">Three Religions Unite</p>
            <p class="tl-desc ko-text">천도교·기독교·불교가 비폭력 독립선언 원칙 아래 연합하여 민족 대표단 구성에 합의했다.</p>
            
          </div>
        </div>
        <div class="tl-dot-wrap">
          <div class="tl-dot"></div>
        </div>
        <div></div>
      </div>

      <div class="timeline-item">
        <div></div>
        <div class="tl-dot-wrap">
          <div class="tl-dot"></div>
        </div>
        <div class="tl-text">
          <div class="tl-date-badge cat-prep">
            <span class="badge-year">1919</span>
            <span class="badge-day">02. 27</span>
          </div>
          <div class="tl-card cat-prep">
            <span class="tl-toggle-icon">+</span>
            <p class="tl-title-ko">독립선언서 21,000매 인쇄</p>
            <p class="tl-title-en">21,000 Copies Printed</p>
            <p class="tl-desc ko-text">천도교 운영 보성사 인쇄소에서 독립선언서 2만 1천 매를 극비리에 인쇄하여 전국 배포를 준비했다.</p>
            
          </div>
        </div>
      </div>

      <div class="timeline-item">
        <div class="tl-text right">
          <div class="tl-date-badge cat-main">
            <span class="badge-year">1919</span>
            <span class="badge-day">03. 01</span>
          </div>
          <div class="tl-card cat-main">
            <span class="tl-toggle-icon">+</span>
            <p class="tl-title-ko">3·1운동 거사</p>
            <p class="tl-title-en">March First — The Day</p>
            <p class="tl-desc ko-text">오후 2시, 태화관에서 민족대표 33인이 선언식을 거행했다. 동시에 탑골공원에서 독립선언서가 낭독되고 시위 군중이 시내 전역으로 확산됐다.</p>
            
          </div>
        </div>
        <div class="tl-dot-wrap">
          <div class="tl-dot"
            style="background:var(--red);box-shadow:0 0 0 3px var(--red),0 0 16px rgba(168,50,40,0.5);width:18px;height:18px;">
          </div>
        </div>
        <div></div>
      </div>

      <div class="timeline-item">
        <div></div>
        <div class="tl-dot-wrap">
          <div class="tl-dot"></div>
        </div>
        <div class="tl-text">
          <div class="tl-date-badge cat-spread">
            <span class="badge-year">1919</span>
            <span class="badge-day">03. 05</span>
          </div>
          <div class="tl-card cat-spread">
            <span class="tl-toggle-icon">+</span>
            <p class="tl-title-ko">남대문역 대규모 시위</p>
            <p class="tl-title-en">Mass Protest at Namdaemun Station</p>
            <p class="tl-desc ko-text">남대문역 광장에 1만 명 이상의 군중이 집결하여 고종 국장일을 전후로 역대 최대 규모의 가두 시위를 전개했다.</p>
            
          </div>
        </div>
      </div>

      <div class="timeline-item">
        <div class="tl-text right">
          <div class="tl-date-badge cat-spread">
            <span class="badge-year">1919</span>
            <span class="badge-day">03. 22</span>
          </div>
          <div class="tl-card cat-spread">
            <span class="tl-toggle-icon">+</span>
            <p class="tl-title-ko">종로 상가 전면 철시</p>
            <p class="tl-title-en">Jongno Merchants Strike</p>
            <p class="tl-desc ko-text">종로 상가 전체가 문을 닫고 철시를 단행하며 독립 시위에 동참했다. 경제적 저항의 상징적 장면이었다.</p>
            
          </div>
        </div>
        <div class="tl-dot-wrap">
          <div class="tl-dot"></div>
        </div>
        <div></div>
      </div>

      <div class="timeline-item">
        <div></div>
        <div class="tl-dot-wrap">
          <div class="tl-dot" style="background:var(--gold);box-shadow:0 0 0 3px var(--gold);width:16px;height:16px;">
          </div>
        </div>
        <div class="tl-text">
          <div class="tl-date-badge cat-result">
            <span class="badge-year">1919</span>
            <span class="badge-day">04. 23</span>
          </div>
          <div class="tl-card cat-result">
            <span class="tl-toggle-icon">+</span>
            <p class="tl-title-ko">한성정부 선포</p>
            <p class="tl-title-en">Hanseong Provisional Government</p>
            <p class="tl-desc ko-text">서린동 봉춘관에서 전국 13도 대표 25인이 국민대회를 열고 한성정부를 선포하며 독립운동의 구심점을 마련했다.</p>
            
          </div>
        </div>
      </div>

    </div>
  </section>`,
  `<section id="s3" class="story-section" data-section="4">
    <div class="split-layout">
      <div class="split-text" style="background:var(--hanji); color:var(--hanji-text);">
        <div class="chapter-num">03</div>
        <p class="section-label red reveal">거사 · The Day</p>
        <h2 class="section-heading-ko reveal reveal-delay-1">
          1919년 3월 1일,<br>오후 2시
        </h2>
        <p class="section-heading-en reveal reveal-delay-1">March 1st, 1919 — 2:00 PM</p>
        <div class="divider reveal reveal-delay-2" style="color:var(--hanji-text)">
          <div class="divider-line"></div>
          <div class="divider-diamond"></div>
          <div class="divider-line"></div>
        </div>
        <div class="section-body reveal reveal-delay-2">
          <p class="ko-text"><strong>태화관</strong>에서 민족대표 33인은 오후 2시 독립선언서를 낭독하고 만세를 삼창했다. 이후 스스로 경찰에 연락해 체포되었다. 시위
            현장과의
            충돌을 피하기 위한 사전 합의였다.</p>
          <p class="ko-text">같은 시각 <strong>탑골공원</strong>에는 수천 명의 학생과 시민이 모였다. 민족대표가 나타나지 않자, 경신학교 학생
            <strong>정재용</strong>이 팔각정에 올라 독립선언서를 낭독했다. 이후 군중은 태극기를 들고 서울 시내를 행진했다.
          </p>
          
        </div>
        <div class="pull-quote reveal reveal-delay-3">
          <p class="pull-quote-ko">"대한 독립 만세!" — 1919. 3. 1, 탑골공원</p>
          <p class="pull-quote-en">"Manse! Long live Korean independence!" — Tapgol Park, March 1, 1919</p>
        </div>
      </div>

      <div class="split-visual">
        <div id="map-seoul" style="width:100%;height:100%;min-height:500px;"></div>
      </div>ㄹ
    </div>
  </section>

<section id="s4" class="story-section" data-section="5" style="background:var(--hanji);">
    <div style="width:100%;padding:clamp(4rem,8vw,8rem) clamp(2rem,8vw,8rem);">
      <div style="max-width:900px;margin:0 auto;">
        <p class="section-label reveal" style="color:var(--red);">확산과 탄압 · Spread & Suppression</p>
        <h2 class="section-heading-ko reveal reveal-delay-1" style="color:var(--hanji-text);">시위 확산과 일제의 탄압</h2>
        <p class="section-heading-en reveal reveal-delay-1" style="color:var(--hanji-text);">Spread and Suppression
        </p>
        <div class="divider reveal reveal-delay-2" style="color:var(--hanji-text)">
          <div class="divider-line"></div>
          <div class="divider-diamond"></div>
          <div class="divider-line"></div>
        </div>

        <div class="section-body reveal reveal-delay-2" style="color:var(--hanji-text);columns:2;column-gap:3rem;">
          <p class="ko-text">시위는 서울에서 평양, 의주, 함흥으로 확산되었고, 이후 농촌 지역까지 이어졌다. 3월 한 달간 전국 1,542개 지역에서 시위가 발생했으며, 학생 외에도
            농민·상인·종교인이 참여했다.</p>
          <p class="ko-text">일제는 군경을 동원해 시위를 강제 진압했다. 4월 15일, 경기도 화성 <strong>제암리</strong>에서 일본 군경은 주민 수십 명을 교회에 집결시킨 뒤
            문을 잠그고 방화했다. 캐나다 선교사 프랭크 스코필드가 현장을 기록해 국제 사회에 알렸다.</p>
          
        </div>

        <div class="stats-grid reveal reveal-delay-3" style="background:rgba(168,50,40,0.15);">
          <div class="stat-block" style="background:#d8d0be;">
            <span class="stat-num">7,509</span>
            <span class="stat-label-ko" style="color:var(--hanji-text);">희생자 (사망)</span>
            <span class="stat-label-en" style="color:var(--hanji-text);">Killed</span>
          </div>
          <div class="stat-block" style="background:#d8d0be;">
            <span class="stat-num">15,961</span>
            <span class="stat-label-ko" style="color:var(--hanji-text);">부상자</span>
            <span class="stat-label-en" style="color:var(--hanji-text);">Wounded</span>
          </div>
          <div class="stat-block" style="background:#d8d0be;">
            <span class="stat-num">46,948</span>
            <span class="stat-label-ko" style="color:var(--hanji-text);">검거자</span>
            <span class="stat-label-en" style="color:var(--hanji-text);">Arrested</span>
          </div>
        </div>
        <p style="font-size:0.7rem;opacity:0.5;margin-top:0.5rem;text-align:right;color:var(--hanji-text);"
          class="ko-text">* 조선총독부 공식 기록 기준 — 실제 수치는 훨씬 많을 것으로 추정됩니다</p>
        
      </div>
    </div>
  </section>`,
  `<section id="map-full" data-section="7">
    <div class="map-full-header">
      <p class="section-label light" style="color:var(--gold-light);">시위 확산 지도 · Protest Map</p>
      <h2 class="section-heading-ko" style="color:var(--cream);">만세의 물결, 전국으로</h2>
      <p class="section-heading-en" style="color:var(--cream);">The Wave of Independence Sweeps the Nation</p>
    </div>

    <div id="leaflet-full"></div>

    <div class="map-legend">
      <p class="legend-title">구분</p>
      <div class="legend-item">
        <div class="legend-dot" style="background:#c0392b;"></div>
        <span class="ko-text">주요 시위 발생지 (3월 1일)</span>
        
      </div>
      <div class="legend-item">
        <div class="legend-dot" style="background:#e67e22;"></div>
        <span class="ko-text">확산 시위지 (3~4월)</span>
        
      </div>
      <div class="legend-item">
        <div class="legend-dot" style="background:#13d644;"></div>
        <span class="ko-text">탄압·학살 발생지</span>
        
      </div>
    </div>
  </section>

<section id="s7" class="story-section" data-section="8" style="background:var(--bg-2);">
    <div style="width:100%;padding:clamp(4rem,8vw,8rem) clamp(2rem,8vw,8rem);">
      <div style="max-width:1000px;margin:0 auto;">
        <p class="section-label red reveal">주요 인물 · Key Figures</p>
        <h2 class="section-heading-ko reveal reveal-delay-1" style="color:var(--cream);">역사를 만든 사람들</h2>
        <p class="section-heading-en reveal reveal-delay-1">Those Who Made History</p>
        <div class="divider reveal reveal-delay-2" style="color:var(--cream)">
          <div class="divider-line"></div>
          <div class="divider-diamond"></div>
          <div class="divider-line"></div>
        </div>

        <div class="person-grid reveal reveal-delay-2"
          style="grid-template-columns:repeat(auto-fit,minmax(220px,1fr));">
          <div class="person-card" style="background:var(--bg-2);">
            <p class="person-name-ko">유관순</p>
            <p class="person-name-en">Yu Gwan-sun</p>
            <p class="person-desc ko-text">이화학당 학생. 아우내 장터 시위를 이끌다 체포, 서대문형무소에서 18세의 나이로 순국. "대한독립만세"를 외치며 끝까지 굴복하지
              않았다.
            </p>
            
          </div>
          <div class="person-card" style="background:var(--bg-2);">
            <p class="person-name-ko">손병희</p>
            <p class="person-name-en">Son Byong-hui</p>
            <p class="person-desc ko-text">천도교 3대 교주. 종교·계층을 초월한 민족 연대를 이끌며 3.1운동의 핵심 설계자 역할을 했다.</p>
            
          </div>
          <div class="person-card" style="background:var(--bg-2);">
            <p class="person-name-ko">정재용</p>
            <p class="person-name-en">Jeong Jae-yong</p>
            <p class="person-desc ko-text">경신학교 학생. 탑골공원 팔각정에서 독립선언서를 낭독하며 3월 1일 역사적 행진의 불을 당겼다.</p>
            
          </div>
          <div class="person-card" style="background:var(--bg-2);">
            <p class="person-name-ko">프랭크 스코필드</p>
            <p class="person-name-en">Frank Schofield</p>
            <p class="person-desc ko-text">캐나다 출신 선교사·수의사. 제암리 학살을 사진으로 기록해 국제사회에 일제의 만행을 알린 "34번째 민족대표".</p>
            
          </div>
        </div>
      </div>
    </div>
  </section>

<section id="closing" data-section="9">
    <div class="closing-year">1919</div>
    <div class="closing-content">
      <p class="section-label light reveal" style="text-align:center;color:var(--gold-light);">역사적 의의 · Legacy</p>
      <div class="closing-mansei reveal reveal-delay-1" style="white-space:nowrap; font-size:clamp(3rem,8vw,7rem);">
        대한독립만세
      </div>


      <div class="divider reveal reveal-delay-2" style="color:var(--cream);max-width:300px;margin:0 auto 2.5rem;">
        <div class="divider-line"></div>
        <div class="divider-diamond"></div>
        <div class="divider-line"></div>
      </div>

      <div class="section-body reveal reveal-delay-3"
        style="text-align:left;background:rgba(0,0,0,0.25);padding:2rem;border:1px solid rgba(245,240,232,0.15);">
        <p class="ko-text">3.1운동은 이후 세 가지 결과를 낳았다. 첫째, 1919년 4월 상하이에서 <strong>대한민국 임시정부</strong>가 수립되었다. 둘째, 일제는 통치
          방식을
          헌병경찰제(무단통치)에서 보통경찰제(문화통치)로 전환했다. 셋째, 중국의 5·4운동(1919), 인도의 비폭력 운동 등 아시아 독립운동에 영향을 미쳤다. 대한민국 헌법 전문은 3.1운동을 건국의
          정신적 기원으로 명시하고 있다.</p>
        
      </div>

      <div class="stats-grid reveal reveal-delay-4" style="margin-top:2rem;background:rgba(255,255,255,0.1);">
        <div class="stat-block" style="background:rgba(0,0,0,0.3);">
          <span class="stat-num" style="color:var(--gold-light);">1,542</span>
          <span class="stat-label-ko">시위 발생 지역 수</span>
          <span class="stat-label-en">Protest locations</span>
        </div>
        <div class="stat-block" style="background:rgba(0,0,0,0.3);">
          <span class="stat-num" style="color:var(--gold-light);">200만+</span>
          <span class="stat-label-ko">시위 참가 인원</span>
          <span class="stat-label-en">Participants</span>
        </div>
        <div class="stat-block" style="background:rgba(0,0,0,0.3);">
          <span class="stat-num" style="color:var(--gold-light);">33</span>
          <span class="stat-label-ko">민족대표</span>
          <span class="stat-label-en">National Representatives</span>
        </div>
      </div>

      <p style="margin-top:3rem;font-size:0.75rem;opacity:0.4;letter-spacing:0.15em;" class="reveal reveal-delay-4">
        매년 3월 1일 · Observed every March 1st as a national holiday in Korea
      </p>
    </div>
  </section>`
];
