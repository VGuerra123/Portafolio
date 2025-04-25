// src/pages/Home.tsx
import React from 'react';
import HeroAbout from '../components/sections/HeroAbout';

const Home: React.FC = () => (
  <main className="relative z-10">
    {/* Hero + Formación & Experiencia en un solo bloque */}
    <HeroAbout profileImage="/src/assets/Profile.png" />
  </main>
);

export default Home;
