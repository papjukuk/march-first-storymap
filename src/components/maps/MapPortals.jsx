import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import BackgroundMap from './BackgroundMap.jsx';
import SeoulMap from './SeoulMap.jsx';
import FullSpreadMap from './FullSpreadMap.jsx';

function usePortalTarget(id) {
  const [target, setTarget] = useState(null);

  useEffect(() => {
    setTarget(document.getElementById(id));
  }, [id]);

  return target;
}

export default function MapPortals() {
  const background = usePortalTarget('map-background');
  const seoul = usePortalTarget('map-seoul');
  const full = usePortalTarget('leaflet-full');

  return (
    <>
      {background && createPortal(<BackgroundMap />, background)}
      {seoul && createPortal(<SeoulMap />, seoul)}
      {full && createPortal(<FullSpreadMap target={full} />, full)}
    </>
  );
}
