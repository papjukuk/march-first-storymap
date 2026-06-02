import L from 'leaflet';

export function pulseIcon(color = '#a83228', size = 14, delay = 0) {
  return L.divIcon({
    className: '',
    html: `
      <div class="pulse-container" style="color:${color};--pulse-delay:${delay}s;">
        <div class="pulse-dot"></div>
        <div class="pulse-wave"></div>
      </div>
    `,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

export function dotIcon(color = '#a83228', size = 12) {
  return L.divIcon({
    className: '',
    html: `<div style="width:${size}px;height:${size}px;background:${color};border-radius:50%;border:2px solid rgba(255,255,255,0.75);box-shadow:0 0 10px ${color}99;"></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}
