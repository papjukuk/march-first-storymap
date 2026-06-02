import { Marker, MapContainer, Polyline, Popup, TileLayer } from 'react-leaflet';
import { dotIcon } from './icons.js';
import { seoulPlaces, seoulRoutes } from './mapData.js';

const typeColor = {
  start: '#d4a017',
  route: '#c0392b',
  spread: '#e67e22',
  suppression: '#13d644',
};

export default function SeoulMap() {
  return (
    <MapContainer
      center={[37.567, 126.978]}
      zoom={15}
      zoomControl={false}
      scrollWheelZoom={false}
      attributionControl={false}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
      {seoulRoutes.map((route) => (
        <Polyline
          key={route.name}
          positions={route.points}
          pathOptions={{ color: route.color, weight: 4, opacity: 0.85, dashArray: '10, 6' }}
        >
          <Popup>{route.name}</Popup>
        </Polyline>
      ))}
      {seoulPlaces.map((place) => {
        const color = typeColor[place.type] || '#a83228';
        return (
          <Marker key={place.name} position={[place.lat, place.lng]} icon={dotIcon(color, 12)}>
            <Popup>
              <b style={{ color }}>{place.name}</b>
              <br />
              <span>{place.desc}</span>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
