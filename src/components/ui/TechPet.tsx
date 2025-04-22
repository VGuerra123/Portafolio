// src/components/ui/TechPet.tsx
import { motion } from 'framer-motion';
import React from 'react';

// Imagen temporal del zorro digital (proporción cuadrada ideal 128x128 o 256x256)
import Fox from '../../assets/fox-avatar.png';

const floatAnim = {
  animate: {
    y: [0, -10, 0],
    rotate: [0, 2, -2, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

const TechPet = () => {
  return (
    <motion.div
      className="fixed bottom-6 right-6 w-24 h-24 z-50 cursor-pointer"
      variants={floatAnim}
      animate="animate"
      title="¡Hola! Soy tu zorro tech guardián 🦊"
    >
      <motion.img
        src={Fox}
        alt="Zorro digital"
        className="w-full h-full object-contain drop-shadow-lg hover:scale-110 transition-transform duration-500"
        whileHover={{ scale: 1.15, rotate: 5 }}
      />
    </motion.div>
  );
};

export default TechPet;
