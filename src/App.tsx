import React from 'react';
import Header from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import Hero from './components/sections/Hero';
import { Formacion } from './components/sections/Formacion';
import { Projects } from './components/sections/Projects';
import Contact from './components/sections/Contact';
import TechPet from './components/ui/TechPet';
import GlobalToggles from './components/ui/GlobalToggles';
import BadgesWithTooltips from './components/ui/BadgesWithTooltips';
import FloatingTechIcons from './components/ui/FloatingTechIcons';
import VerticalTechCarousel from './components/ui/VerticalTechCarousel';
import ParticleBackground from './components/ui/ParticleBackground';

function App() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Partículas de fondo global */}
      <ParticleBackground />

      {/* Elementos flotantes y widgets */}
      <FloatingTechIcons />
      <VerticalTechCarousel />
      <GlobalToggles />
      <TechPet />
      <BadgesWithTooltips />

      {/* Header y contenido principal */}
      <Header />
      <main className="relative z-10">
        <Hero profileImage="/src/assets/Profile.png" />
        <Formacion />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
