import { useEffect } from 'react';
import { CircleMarker, MapContainer, Marker, Polyline, Popup, TileLayer, Tooltip, useMap } from 'react-leaflet';
import { dotIcon, pulseIcon } from './icons.js';

function MapFocus({ center, zoom }) {
  const map = useMap();

  useEffect(() => {
    if (!center) return;
    map.flyTo(center, zoom, { animate: true, duration: 0.9 });
  }, [center, map, zoom]);

  return null;
}

export default function LinkedStoryMap({
  center = [37.5665, 126.978],
  zoom = 13,
  markers = [],
  activeId,
  routes = [],
  numbered = false,
  className = 'story-linked-map',
}) {
  const activeMarker = markers.find((marker) => marker.id === activeId);
  const focusCenter = activeMarker?.position || activeMarker?.center || center;

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      zoomControl={false}
      scrollWheelZoom={false}
      attributionControl={false}
      className={className}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
      <MapFocus center={focusCenter} zoom={activeMarker?.zoom || zoom} />
      {routes.map((route) => (
        <Polyline
          key={route.id || route.name}
          positions={route.points}
          pathOptions={{ color: route.color || '#a83228', weight: route.weight || 4, opacity: 0.82, dashArray: route.dashArray || '10, 6' }}
        />
      ))}
      {markers.map((marker, index) => {
        const position = marker.position || marker.center;
        const isActive = marker.id === activeId;
        const color = marker.color || (isActive ? '#a83228' : '#b8922e');

        if (marker.circle) {
          return (
            <CircleMarker
              key={marker.id}
              center={position}
              radius={isActive ? 11 : 7}
              pathOptions={{ color, fillColor: color, fillOpacity: isActive ? 0.65 : 0.35, weight: isActive ? 3 : 1 }}
            >
              <Popup>
                <strong style={{ color }}>{marker.title}</strong>
                <br />
                {marker.desc || marker.caption}
              </Popup>
            </CircleMarker>
          );
        }

        return (
          <Marker key={marker.id} position={position} icon={isActive ? pulseIcon(color, 16, index * 0.2) : dotIcon(color, 12)}>
            {marker.title && (
              <Tooltip permanent={isActive} direction="top" offset={[0, -12]} className="map-tooltip">
                <strong>{marker.title}</strong>
              </Tooltip>
            )}
            <Popup>
              <strong style={{ color }}>{marker.title}</strong>
              <br />
              {marker.desc || marker.caption}
            </Popup>
          </Marker>
        );
      })}
      {numbered &&
        markers.map((marker, index) => {
          const position = marker.position || marker.center;
          return (
            <Marker
              key={`${marker.id}-number`}
              position={position}
              icon={dotIcon(marker.color || '#a83228', 1)}
              opacity={0}
            >
              <Tooltip permanent direction="right" offset={[8, 0]} className="map-tooltip numbered-map-tooltip">
                {index + 1}. {marker.title}
              </Tooltip>
            </Marker>
          );
        })}
    </MapContainer>
  );
}
