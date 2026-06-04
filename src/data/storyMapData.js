export const backgroundEvents = [
  {
    id: 'annexation',
    number: '01',
    label: '배경 · Background',
    date: '1910. 8. 22',
    title: '한일병합조약 체결',
    titleEn: 'Japan-Korea Annexation Treaty',
    body: [
      '대한제국은 한일병합조약으로 일본 제국에 강제 병합되었다. 이후 조선총독부를 중심으로 헌병경찰제와 식민 통치 체제가 작동했다.',
      '언론, 출판, 집회가 통제되고 조선 사회 전반이 억압되면서 1919년 3.1운동으로 이어지는 구조적 배경이 형성되었다.',
    ],
    quote: '나라의 주권을 빼앗긴 1910년은 1919년 만세운동의 가장 깊은 출발점이었다.',
    map: {
      center: [37.5587, 126.9822],
      zoom: 15,
      marker: [37.5587, 126.9822],
      color: '#a83228',
      title: '남산 통감관저 터',
      caption: '한일병합조약 체결 장소로 알려진 남산 일대',
    },
  },
  {
    id: 'gojong',
    number: '02',
    label: '도화선 · Trigger',
    date: '1919. 1. 21',
    title: '고종황제 붕어',
    titleEn: 'Death of Emperor Gojong',
    body: [
      '고종황제가 덕수궁 함녕전에서 붕어했다. 갑작스러운 죽음과 독살설은 식민 통치에 대한 분노를 빠르게 확산시켰다.',
      '국장을 맞아 많은 사람이 서울로 모일 것으로 예상되면서 독립운동 세력은 거사 시점과 방식에 대한 논의를 본격화했다.',
    ],
    quote: '고종의 장례는 흩어져 있던 민심이 서울로 모이는 계기가 되었다.',
    map: {
      center: [37.5659, 126.9751],
      zoom: 16,
      marker: [37.5659, 126.9751],
      color: '#b8922e',
      title: '덕수궁 함녕전',
      caption: '고종 황제가 1919년 승하한 장소',
    },
  },
  {
    id: 'paris',
    number: '03',
    label: '국제 정세 · World Context',
    date: '1919. 1',
    title: '파리강화회의와 민족자결주의',
    titleEn: 'Paris Peace Conference',
    body: [
      '제1차 세계대전 이후 열린 파리강화회의에서 전후 질서 재편과 민족자결주의가 중요한 의제로 떠올랐다.',
      '조선의 독립운동가들은 이 국제 정세를 독립 요구를 알릴 기회로 보았고, 국내외 움직임은 서로 영향을 주기 시작했다.',
    ],
    quote: '민족이 스스로 운명을 결정해야 한다는 말은 식민지 조선에도 강한 자극이 되었다.',
    map: {
      center: [48.8566, 2.3522],
      zoom: 6,
      marker: [48.8566, 2.3522],
      color: '#b8922e',
      title: '파리',
      caption: '1919년 파리강화회의가 열린 도시',
    },
  },
  {
    id: 'february-eighth',
    number: '04',
    label: '준비 · Preparation',
    date: '1919. 2. 8',
    title: '2.8 독립선언',
    titleEn: 'February 8 Declaration',
    body: [
      '도쿄의 조선 유학생들은 YMCA 회관에서 2.8 독립선언을 발표했다.',
      '이 소식은 국내 독립운동 세력에 자극을 주었고, 3.1운동 준비가 더 빠르게 구체화되는 계기가 되었다.',
    ],
    quote: '도쿄에서 터져 나온 청년들의 선언은 국내 만세운동의 속도를 끌어올렸다.',
    map: {
      center: [35.6983, 139.7578],
      zoom: 15,
      marker: [35.6983, 139.7578],
      color: '#a83228',
      title: '도쿄 YMCA 회관',
      caption: '2.8 독립선언 발표 장소로 알려진 일대',
    },
  },
];

export const preparationEvents = [
  {
    id: 'son',
    date: '1919. 1. 20',
    title: '손병희, 독립운동 참여 동의',
    desc: '천도교 지도부가 거사 참여를 공식화하며 조직적 준비의 첫 축이 마련되었다.',
    center: [37.5759, 126.985],
    color: '#b8922e',
  },
  {
    id: 'tokyo',
    date: '1919. 2. 8',
    title: '2.8 독립선언 발표',
    desc: '도쿄 유학생들의 선언이 국내 지도자들에게 강한 자극을 주었다.',
    center: [35.6983, 139.7578],
    color: '#a83228',
  },
  {
    id: 'religions',
    date: '1919. 2. 24',
    title: '천도교·기독교·불교 연합',
    desc: '세 종교계가 비폭력, 대중화, 일원화 원칙 아래 민족대표 구성을 합의했다.',
    center: [37.5734, 126.9846],
    color: '#b8922e',
  },
  {
    id: 'printing',
    date: '1919. 2. 27',
    title: '독립선언서 인쇄와 배포',
    desc: '보성사에서 독립선언서 약 2만 1천 매가 인쇄되어 전국 배포가 준비되었다.',
    center: [37.5744, 126.9818],
    color: '#a83228',
  },
];

export const dayEvents = [
  {
    id: 'taehwagwan',
    time: '오후 2시',
    title: '태화관의 독립선언',
    desc: '민족대표 33인은 태화관에서 독립선언식을 거행하고 만세를 불렀다.',
    center: [37.5734, 126.9846],
  },
  {
    id: 'tapgol',
    time: '같은 시각',
    title: '탑골공원의 선언서 낭독',
    desc: '탑골공원에서는 학생과 시민 앞에서 독립선언서가 낭독되었다.',
    center: [37.5711, 126.9885],
  },
  {
    id: 'march',
    time: '이후',
    title: '서울 시내 행진',
    desc: '군중은 태극기를 들고 종로와 대한문 일대로 행진하며 만세를 외쳤다.',
    center: [37.5685, 126.9827],
  },
];

export const timelineEvents = [
  { id: 'tl-son', date: '01.20', title: '손병희, 독립운동 동의', category: 'prep', desc: '천도교를 중심으로 조직적 준비가 시작되었다.', center: [37.5759, 126.985] },
  { id: 'tl-tokyo', date: '02.08', title: '2.8 독립선언', category: 'prep', desc: '도쿄 유학생들이 조선 독립을 공개적으로 선언했다.', center: [35.6983, 139.7578] },
  { id: 'tl-union', date: '02.24', title: '3교 합작 합의', category: 'prep', desc: '천도교, 기독교, 불교계가 민족대표 구성을 합의했다.', center: [37.5734, 126.9846] },
  { id: 'tl-print', date: '02.27', title: '독립선언서 인쇄', category: 'prep', desc: '보성사에서 선언서가 인쇄되어 전국 배포를 준비했다.', center: [37.5744, 126.9818] },
  { id: 'tl-main', date: '03.01', title: '3.1운동 거사', category: 'main', desc: '태화관과 탑골공원을 중심으로 만세 시위가 시작되었다.', center: [37.5711, 126.9885] },
  { id: 'tl-namdaemun', date: '03.05', title: '남대문역 대규모 시위', category: 'spread', desc: '학생과 시민이 모여 서울 시내의 대규모 시위를 전개했다.', center: [37.5555, 126.9715] },
  { id: 'tl-market', date: '03.22', title: '종로 상인 철시', category: 'spread', desc: '종로 상인들이 문을 닫고 만세 시위에 동참했다.', center: [37.5702, 126.9834] },
  { id: 'tl-gov', date: '04.23', title: '한성임시정부 선포', category: 'result', desc: '국민대회가 열리고 임시정부 수립 움직임이 구체화되었다.', center: [37.571, 126.976] },
];

export const figures = [
  { id: 'yu', name: '유관순', nameEn: 'Yu Gwan-sun', place: '아우내 장터', center: [36.7622, 127.3018], desc: '이화학당 학생으로 아우내 만세시위를 이끌었고 서대문형무소에서 순국했다.' },
  { id: 'son', name: '손병희', nameEn: 'Son Byong-hui', place: '태화관', center: [37.5734, 126.9846], desc: '천도교 3대 교주이자 민족대표 33인의 중심 인물로 종교계를 넘어선 연대를 이끌었다.' },
  { id: 'jeong', name: '정재용', nameEn: 'Jeong Jae-yong', place: '탑골공원', center: [37.5711, 126.9885], desc: '탑골공원 팔각정에서 독립선언서를 낭독해 3월 1일 거리 시위의 불을 붙였다.' },
  { id: 'han', name: '한용운', nameEn: 'Han Yong-un', place: '민족대표', center: [37.5734, 126.9846], desc: '불교계 민족대표로 참여했고 독립선언의 공약 삼장을 작성했다.' },
  { id: 'lee', name: '이승훈', nameEn: 'Lee Seung-hun', place: '평안도 조직망', center: [39.0194, 125.7381], desc: '기독교계 대표로 평안도 지역 만세운동 조직에 중요한 역할을 했다.' },
  { id: 'schofield', name: '프랭크 스코필드', nameEn: 'Frank Schofield', place: '제암리', center: [37.1321, 126.9067], desc: '제암리 학살 현장을 사진과 기록으로 국제사회에 알린 캐나다 출신 선교사다.' },
];

export const preparationDetailedEvents = [
  {
    id: 'draft',
    number: '01',
    date: '1월 중',
    title: '2·8 독립선언서 초안 전달',
    desc: '도쿄 유학생들의 선언 움직임이 국내로 전해지며 학생 조직의 준비가 시작되었다.',
    places: [{ name: '중앙고보 숙직실 터', position: [37.576, 126.986], color: '#b8922e' }],
  },
  {
    id: 'discussion',
    number: '02',
    date: '2월 초',
    title: '독립운동 숙의',
    desc: '학생과 종교계 인사들이 거사 방식과 연락망을 논의했다.',
    places: [
      { name: '최린 집터', position: [37.5767, 126.9848], color: '#b8922e' },
      { name: '중앙고보 숙직실 터', position: [37.576, 126.986], color: '#b8922e' },
    ],
  },
  {
    id: 'student',
    number: '03',
    date: '2월 20일',
    title: '제1차 학생단 간부회의',
    desc: '학생 대표들이 승동교회에 모여 만세운동 참여와 실행 방식을 논의했다.',
    places: [{ name: '승동교회', position: [37.5721, 126.9863], color: '#a83228' }],
  },
  {
    id: 'religion-union',
    number: '04',
    date: '2월 24일',
    title: '4대 종교 독립운동 일원화',
    desc: '종교계가 독립운동의 방향을 일원화하고 비폭력 대중운동 원칙을 굳혔다.',
    places: [{ name: '천도교 중앙총부 터', position: [37.5746, 126.9839], color: '#a83228' }],
  },
  {
    id: 'print',
    number: '05',
    date: '2월 27일',
    title: '독립선언서 인쇄',
    desc: '보성사에서 독립선언서가 인쇄되어 전국 배포를 위한 준비가 진행되었다.',
    places: [{ name: '보성사 터', position: [37.5744, 126.9818], color: '#a83228' }],
  },
  {
    id: 'venue',
    number: '06',
    date: '2월 28일',
    title: '독립선언식 장소 변경 합의',
    desc: '민족대표들은 선언식 장소를 탑골공원에서 태화관으로 변경하기로 했다.',
    places: [{ name: '손병희 집터', position: [37.5781, 126.9832], color: '#b8922e' }],
  },
  {
    id: 'distribution',
    number: '07',
    date: '2월 28일 밤',
    title: '독립선언서 각계 교부 및 배포',
    desc: '선언서는 학생, 종교계, 지역 조직망을 통해 서울과 각지로 전달되었다.',
    places: [
      { name: '이종일 집터', position: [37.573, 126.981], color: '#b8922e' },
      { name: '천도교 중앙대교당', position: [37.5743, 126.9836], color: '#a83228' },
    ],
  },
];

export const protestRouteParts = [
  {
    id: 'east',
    title: '동대 경로 시위',
    desc: '탑골공원에서 시작한 군중은 종로를 따라 동쪽으로 이동하며 만세 시위를 확산시켰다.',
    center: [37.571, 126.998],
    route: [
      [37.5711, 126.9885],
      [37.5712, 126.9935],
      [37.5711, 127.0005],
      [37.5711, 127.0094],
    ],
  },
  {
    id: 'west',
    title: '서대 경로 시위',
    desc: '다른 군중은 종로 서쪽과 대한문 일대로 향하며 서울 도심의 시위 흐름을 만들었다.',
    center: [37.568, 126.979],
    route: [
      [37.5711, 126.9885],
      [37.5702, 126.9834],
      [37.569, 126.9793],
      [37.5658, 126.9751],
    ],
  },
  {
    id: 'all',
    title: '전체 시위 경로',
    desc: '동대와 서대 방향으로 나뉜 이동은 서울 도심 전체로 확산되는 만세 시위의 흐름을 보여준다.',
    center: [37.568, 126.989],
    route: [
      [37.5711, 126.9885],
      [37.5702, 126.9834],
      [37.5658, 126.9751],
      [37.5711, 126.9885],
      [37.5711, 127.0094],
    ],
  },
];

export const historicalPlaces = [
  { id: 'taehwagwan', type: 'major', name: '태화관', desc: '민족대표 33인이 독립선언식을 거행한 장소', position: [37.5734, 126.9846] },
  { id: 'tapgol', type: 'protest', name: '탑골공원', desc: '독립선언서 낭독과 군중 시위가 시작된 장소', position: [37.5711, 126.9885] },
  { id: 'bosingak', type: 'major', name: '보신각', desc: '종로 시위 흐름의 중심 지점', position: [37.5699, 126.9833] },
  { id: 'daehanmun', type: 'protest', name: '대한문', desc: '군중이 향했던 궁궐 앞 주요 시위 지점', position: [37.5658, 126.9751] },
  { id: 'namdaemun', type: 'protest', name: '남대문역', desc: '3월 5일 대규모 시위가 벌어진 장소', position: [37.5555, 126.9715] },
  { id: 'seodaemun', type: 'major', name: '서대문형무소', desc: '많은 독립운동가가 투옥된 장소', position: [37.5742, 126.9562] },
];

export const outcomes = [
  {
    title: '대한민국 임시정부 수립',
    desc: '3.1운동은 국내외 독립운동 세력을 결집시키며 1919년 대한민국 임시정부 수립으로 이어졌다.',
  },
  {
    title: '일제 통치 방식의 변화',
    desc: '일제는 헌병경찰 중심의 무단통치에서 이른바 문화통치로 통치 방식을 바꾸었다.',
  },
  {
    title: '해외 독립운동에 끼친 영향',
    desc: '3.1운동은 중국 5.4운동, 인도 비폭력 운동 등 아시아 반제국주의 운동에도 영향을 주었다.',
  },
];

export const sourceLinks = [
  { label: '국사편찬위원회', href: 'https://www.history.go.kr' },
  { label: '독립기념관', href: 'https://www.i815.or.kr' },
  { label: '한국민족문화대백과사전', href: 'https://encykorea.aks.ac.kr' },
];
