import { MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet';
import { pulseIcon } from './icons.js';

export default function Section0Map({ event, index = 0 }) {
  return (
    <MapContainer
      center={event.map.center}
      zoom={event.map.zoom}
      zoomControl={false}
      scrollWheelZoom={false}
      attributionControl={false}
      className="section0-map"
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
      <Marker position={event.map.marker} icon={pulseIcon(event.map.color, 14, index * 0.5)}>
        <Tooltip permanent direction="top" className="map-tooltip" offset={[0, -12]}>
          <div className="section0-map-tooltip">
            <strong>{event.map.title}</strong>
            <span>{event.map.caption}</span>
          </div>
        </Tooltip>
        <Popup>
          <strong>{event.map.title}</strong>
          <br />
          {event.map.caption}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
