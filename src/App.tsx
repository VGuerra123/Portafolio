// src/App.tsx
import React from 'react';
import  Header from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import  Hero  from './components/sections/Hero';
import { HabilidadesTecnicas } from './components/sections/HabilidadesTecnicas';
import { Projects } from './components/sections/Projects';
import  Contact  from './components/sections/Contact';
import { Formacion } from './components/sections/Formacion';
import TechPet from './components/ui/TechPet';
import GlobalToggles from './components/ui/GlobalToggles';
import BadgesWithTooltips from './components/ui/BadgesWithTooltips';
import FloatingTechIcons from './components/ui/FloatingTechIcons';
import VerticalTechCarousel from './components/ui/VerticalTechCarousel';

function App() {
  return (
    <div className="relative">
      <FloatingTechIcons />
      <VerticalTechCarousel />
      <GlobalToggles />
      <TechPet />
      <BadgesWithTooltips />
      <Header />
      <main>
        <Hero />
        <Formacion />
        <HabilidadesTecnicas />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
