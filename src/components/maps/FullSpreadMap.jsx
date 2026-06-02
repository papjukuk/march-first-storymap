import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { pulseIcon } from './icons.js';
import { spreadPlaces } from './mapData.js';

export default function FullSpreadMap({ target }) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (!target) return undefined;

    let intervalId;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || intervalId) return;
        intervalId = window.setInterval(() => {
          setVisibleCount((count) => {
            if (count >= spreadPlaces.length) {
              window.clearInterval(intervalId);
              return count;
            }
            return count + 1;
          });
        }, 350);
        observer.unobserve(target);
      },
      { threshold: 0.3 },
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [target]);

  return (
    <MapContainer
      center={[37.558, 126.975]}
      zoom={13}
      zoomControl
      scrollWheelZoom={false}
      attributionControl={false}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
      {spreadPlaces.slice(0, visibleCount).map((place) => (
        <Marker key={place.name} position={[place.lat, place.lng]} icon={pulseIcon(place.color, 14)}>
          <Popup>
            <b style={{ color: place.color }}>{place.name}</b>
            <br />
            <span>{place.desc}</span>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
