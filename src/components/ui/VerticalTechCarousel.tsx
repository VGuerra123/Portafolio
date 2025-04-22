// src/components/ui/VerticalTechCarousel.tsx
import { motion } from 'framer-motion';
import React from 'react';

/* === 1. Íconos ampliados ===
   Nota: todos existen en https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ */
const techIcons = [
  // Frontend
  'html5', 'css3', 'javascript', 'typescript', 'react', 'nextjs', 'vuejs', 'angularjs', 'redux',
  // Backend & APIs
  'nodejs', 'express', 'nestjs', 'fastapi', 'django',
  // Bases de datos & cachés
  'postgresql', 'mysql', 'mongodb', 'redis', 'firebase', 'supabase',
  // DevOps & Cloud
  'docker', 'kubernetes', 'amazonwebservices', 'nginx', 'linux',
  // Testing & Calidad
  'jest', 'cypress', 'storybook',
  // Build & Tools
  'webpack', 'vite', 'babel', 'git', 'github',
  // Estilos
  'tailwindcss', 'bootstrap', 'sass',
  // Otros
  'graphql'
];

/* === 2. Se duplica la lista para efecto seamless === */
const repeatedIcons = [...techIcons, ...techIcons];

const VerticalTechCarousel = () => (
  <div className="fixed left-0 top-0 h-screen w-16 overflow-hidden z-40 pointer-events-none">
    <motion.div
      className="flex flex-col items-center gap-6"
      /* Desplazamiento de 0 % a ‑50 % → cuando reinicia ya está mostrando la copia */
      animate={{ y: ['0%', '-50%'] }}
      transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
    >
      {repeatedIcons.map((tech, i) => (
        <div key={i} className="relative group">
          <img
            src={
              tech === 'amazonwebservices'
                ? 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg'
                : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`
            }
            alt={tech}
            referrerPolicy="no-referrer"
            className="w-10 h-10 opacity-30 group-hover:opacity-100 transition duration-300"
            /* Si algún ícono falla, simplemente se oculta */
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
          {/* Tooltip minimalista */}
          <div className="absolute left-12 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
            {tech.toUpperCase()}
          </div>
        </div>
      ))}
    </motion.div>
  </div>
);

export default VerticalTechCarousel;
