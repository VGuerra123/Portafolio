import React from 'react';
import { motion } from 'framer-motion';
import Profile from '../../assets/Profile.png';

const Hero = () => {
  const handleClick = () => {
    const projects = document.getElementById('formacion');
    if (projects) projects.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative w-full h-screen flex flex-col items-center justify-center text-center px-6 sm:px-12 overflow-hidden bg-gradient-to-b from-transparent to-black/30 backdrop-blur-sm transition-all duration-1000 ease-in-out"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 backdrop-blur-sm z-0" />

      {/* Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-cyan-400 shadow-xl"
      >
        <img
          src={Profile}
          alt="Foto de perfil"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
        />
      </motion.div>

      {/* Nombre */}
      <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient-text drop-shadow-md z-10">
        Víctor Guerra Zavala
      </h1>

      {/* Subtítulo */}
      <p className="mt-2 text-lg sm:text-xl font-semibold text-cyan-300 z-10">
        -- Analista de Sistemas y Desarrollador Web --
      </p>

      {/* Descripción */}
      <p className="mt-4 text-base sm:text-lg text-white/80 max-w-xl z-10">
        Transformo ideas en experiencias digitales impactantes mediante código limpio, diseño funcional y un enfoque 100% creativo.
      </p>

      {/* Botón */}
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:to-purple-500 transition-all shadow-lg z-10"
      >
        Ver Proyectos
      </motion.button>
    </section>
  );
};

export default Hero;
