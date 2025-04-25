// src/App.tsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Home from './pages/Home';
import ProjectsPage from './pages/Projects';
import ContactPage from './pages/Contact';

import TechPet from './components/ui/TechPet';
import GlobalToggles from './components/ui/GlobalToggles';
import BadgesWithTooltips from './components/ui/BadgesWithTooltips';
import FloatingTechIcons from './components/ui/FloatingTechIcons';
import VerticalTechCarousel from './components/ui/VerticalTechCarousel';
import ParticleBackground from './components/ui/ParticleBackground';

const App: React.FC = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Fondo global */}
      <ParticleBackground />

      {/* Widgets decorativos SOLO en la portada */}
      {isHome && (
        <>
          <FloatingTechIcons />
          <VerticalTechCarousel />
          <GlobalToggles />
          <TechPet />
          <BadgesWithTooltips />
        </>
      )}

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
