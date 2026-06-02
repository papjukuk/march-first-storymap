import Header from './components/sections/Header.jsx';
import Section0 from './components/sections/Section0.jsx';
import Section1 from './components/sections/Section1.jsx';
import Section2 from './components/sections/Section2.jsx';
import Section3 from './components/sections/Section3.jsx';
import Section4 from './components/sections/Section4.jsx';
import Section5 from './components/sections/Section5.jsx';
import Footer from './components/sections/Footer.jsx';
import MapPortals from './components/maps/MapPortals.jsx';
import { usePresentationInteractions } from './hooks/usePresentationInteractions.js';

export default function App() {
  usePresentationInteractions();

  return (
    <>
      <Header />
      <Section0 />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
      <MapPortals />
    </>
  );
}
