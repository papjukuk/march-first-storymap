export const seoulPlaces = [
  { name: 'Tapgol Park', lat: 37.5711, lng: 126.9885, type: 'start', desc: 'Declaration read aloud to the crowd.' },
  { name: 'Taehwagwan', lat: 37.5734, lng: 126.9846, type: 'start', desc: 'National representatives gathered here.' },
  { name: 'Bosingak', lat: 37.5699, lng: 126.9833, type: 'route', desc: 'Central Jongno march route.' },
  { name: 'Daehanmun', lat: 37.5658, lng: 126.9751, type: 'route', desc: 'Crowds moved toward the palace gate.' },
  { name: 'Seodaemun Prison', lat: 37.5742, lng: 126.9562, type: 'suppression', desc: 'Prison where many activists were held.' },
  { name: 'Namdaemun Station', lat: 37.5555, lng: 126.9715, type: 'spread', desc: 'Major student-led protest on March 5.' },
];

export const seoulRoutes = [
  {
    name: 'Central Seoul march route',
    color: '#a83228',
    points: [
      [37.5711, 126.9885],
      [37.5702, 126.9834],
      [37.5690, 126.9793],
      [37.5658, 126.9751],
      [37.5648, 126.9770],
      [37.5618, 126.9812],
    ],
  },
  {
    name: 'Namdaemun protest route',
    color: '#b8922e',
    points: [
      [37.5555, 126.9715],
      [37.5599, 126.9754],
      [37.5641, 126.9768],
      [37.5685, 126.9827],
    ],
  },
];

export const spreadPlaces = [
  { name: 'Tapgol Park', lat: 37.5712, lng: 126.9882, color: '#c0392b', desc: 'March 1 starting point.' },
  { name: 'Taehwagwan', lat: 37.5734, lng: 126.9846, color: '#c0392b', desc: 'Declaration site.' },
  { name: 'Bosingak', lat: 37.5744, lng: 126.9818, color: '#c0392b', desc: 'Printing and distribution network.' },
  { name: 'Dongdaemun', lat: 37.5711, lng: 127.0094, color: '#e67e22', desc: 'Crowds spread eastward.' },
  { name: 'Namdaemun Station', lat: 37.5555, lng: 126.9715, color: '#e67e22', desc: 'Large March 5 protest.' },
  { name: 'Seodaemun Prison', lat: 37.5742, lng: 126.9562, color: '#13d644', desc: 'Imprisonment and suppression site.' },
  { name: 'Gongdeok-ri', lat: 37.5440, lng: 126.9510, color: '#e67e22', desc: 'Neighborhood protest site.' },
  { name: 'Mapo', lat: 37.5382, lng: 126.9441, color: '#e67e22', desc: 'Evening protest gathering.' },
  { name: 'Hapjeong-ri', lat: 37.5465, lng: 126.9111, color: '#e67e22', desc: 'Western Seoul protest site.' },
  { name: 'Cheongnyangni', lat: 37.5882, lng: 127.0537, color: '#e67e22', desc: 'March 5 protest area.' },
  { name: 'Yangpyeong-ri', lat: 37.5255, lng: 126.8864, color: '#e67e22', desc: 'Regional protest site.' },
  { name: 'Anam-ri', lat: 37.5979, lng: 127.0179, color: '#e67e22', desc: 'Northern Seoul protest site.' },
  { name: 'Jeam-ri', lat: 37.1321, lng: 126.9067, color: '#13d644', desc: 'Massacre and suppression site.' },
];
