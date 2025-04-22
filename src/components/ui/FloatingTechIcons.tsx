// src/components/ui/FloatingTechIcons.tsx
import { motion } from 'framer-motion';
import React from 'react';

const techIcons = [
  'javascript',
  'typescript',
  'react',
  'nodejs',
  'mongodb',
  'postgresql',
  'docker',
  'html5',
  'css3',
  'amazonwebservices'
];

const FloatingTechIcons = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {Array.from({ length: 30 }).map((_, i) => {
        const tech = techIcons[i % techIcons.length];
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 32 + 24;
        const delay = Math.random() * 10;
        const duration = 20 + Math.random() * 10;

        return (
          <motion.img
            key={i}
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
            alt={tech}
            className="absolute opacity-10 hover:opacity-30 transition duration-500"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: `${size}px`,
            }}
            animate={{
              y: [0, -40, 40, 0],
              x: [0, 20, -20, 0],
              opacity: [0.1, 0.25, 0.1]
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingTechIcons;
