// Section 2 card data and GeoJSON feature ids.
window.Section2Card = (() => {
  const cards = [
    {
      order: 1,
      key: "jan-draft-discussion",
      date: "1월 말 ~ 2월 초",
      title: "2·8 독립선언서 초안 전달",
      summary: "송계백이 현상윤, 송진우를 만나 동경 유학생의 독립운동 계획을 알리고 2·8독립선언서 초안을 전달,<br> 송진우·최린·최남선·현상윤 등이 모여 독립운동에 관해 숙의",
      contentsIds: ["43"]
    },
    {
      order: 2,
      key: "feb20-students",
      date: "02.20",
      title: "제1차 학생단 간부회의",
      summary: "제1차 학생단 간부회의를 통하여 학생단의 조직체계를 정비",
      contentsIds: ["78"]
    },
    {
      order: 3,
      key: "feb24-unify",
      date: "02.24",
      title: "4대 종교 독립운동 일원화",
      summary: "손병희·최린이 이승훈·함태영과 만나 독립운동의 일원화 최종확정",
      contentsIds: ["20"]
    },
    {
      order: 4,
      key: "feb27-print",
      date: "02.27",
      title: "독립선언서 인쇄",
      location: "보성사터",
      summary: "이종일이 보성사에서 극비리에 독립선언서 21,000매를 인쇄",
      contentsIds: ["37"]
    },
    {
      order: 5,
      key: "feb28-change",
      date: "02.28",
      title: "독립선언식 장소 변경",
      location: "손병희 집터",
      summary: "독립선언식 절차 최종합의 후 학생들의 탑골공원 집합소식에 독립선언식 장소를 태화관으로 변경",
      contentsIds: ["42"]
    },
    {
      order: 6,
      key: "feb27-distribute",
      date: "02.28 밤",
      title: "독립선언서 교부",
      location: "이종일 집터, 천도교 중앙대교당",
      summary: "개신교측, 불교측 등에게 독립선언서 교부. 천도교 조직망을 이용하여 전국 각지의 천도교구에 배포.",
      contentsIds: ["40"]
    },
    {
      order: 7,
      key: "mar01-national-ceremony",
      date: "03.01",
      title: "민족대표 독립선언식 개최",
      location: "태화관 터",
      summary: "3월 1일 14시 민족대표 33인 중 29인이 독립선언식 개최",
      contentsIds: ["8"]
    },
    {
      order: 8,
      key: "mar01-student-ceremony",
      date: "03.01",
      title: "학생대표 독립선언식 개최",
      location: "탑골공원",
      summary: "3월 1일 14시 학생대표 독자적인 독립선언식 개최",
      contentsIds: ["24"]
    },
    // {
    //   order: 10,
    //   key: "after-mar01-spread",
    //   date: "03.01 이후",
    //   title: "독립운동 확산",
    //   location: "서울도심 및 전국",
    //   summary: "독립선언식 개최 이후 도심으로 만세운동 전개 및 전국확산",
    //   contentsIds: []
    // }
  ];

  return { cards };
})();
