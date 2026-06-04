import { useEffect, useState } from 'react';
import { MapContainer, Marker, Polyline, Popup, TileLayer } from 'react-leaflet';
import { dotIcon } from './icons.js';

export default function RouteStoryMap({ center, route, color = '#a83228' }) {
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    setVisibleCount(1);
    const timer = window.setInterval(() => {
      setVisibleCount((count) => {
        if (count >= route.length) {
          window.clearInterval(timer);
          return count;
        }
        return count + 1;
      });
    }, 420);

    return () => window.clearInterval(timer);
  }, [route]);

  return (
    <MapContainer
      center={center}
      zoom={14}
      zoomControl={false}
      scrollWheelZoom={false}
      attributionControl={false}
      className="story-linked-map"
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
      <Polyline positions={route.slice(0, visibleCount)} pathOptions={{ color, weight: 5, opacity: 0.88 }} />
      {route.map((point, index) => (
        <Marker key={`${point.join('-')}-${index}`} position={point} icon={dotIcon(index === 0 ? '#b8922e' : color, index === 0 ? 14 : 10)}>
          <Popup>{index === 0 ? '출발 지점' : `이동 지점 ${index + 1}`}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
