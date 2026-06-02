import { MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet';
import { pulseIcon } from './icons.js';

export default function BackgroundMap() {
  return (
    <MapContainer
      center={[48.8566, 2.3522]}
      zoom={4}
      zoomControl={false}
      scrollWheelZoom={false}
      attributionControl={false}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
      <Marker position={[48.8566, 2.3522]} icon={pulseIcon('#b8922e', 16)}>
        <Tooltip permanent direction="top" className="map-tooltip" offset={[0, -10]}>
          <div style={{ fontFamily: 'Noto Serif KR', fontSize: 12, padding: 3 }}>
            <b>Paris Peace Conference (1919)</b>
            <br />
            <span style={{ color: '#aaa' }}>Self-determination debate</span>
          </div>
        </Tooltip>
      </Marker>
    </MapContainer>
  );
}
