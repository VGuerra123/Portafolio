import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';

export interface HeroProps {
  profileImage: string;
}

const Hero: React.FC<HeroProps> = ({ profileImage }) => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleProjectsClick = () => {
    const projects = document.getElementById('formacion');
    if (projects) projects.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-6 sm:px-12 overflow-hidden">
      {/* Dynamic Background */}
      <ParticleBackground />
      
      {/* Overlay with gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/50 to-slate-900/80 z-1"
        style={{
          opacity: Math.min(0.8 + scrollY / 1000, 1),
          transition: 'opacity 0.3s ease-out'
        }}
      />
      
      {/* Glowing orbs in background */}
      <div className="absolute top-1/4 -left-20 w-60 h-60 rounded-full bg-cyan-500/20 blur-3xl z-1 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 -right-20 w-60 h-60 rounded-full bg-purple-500/20 blur-3xl z-1 animate-pulse-slow-offset"></div>
      
      {/* Content Container with improved z-index */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Avatar with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-cyan-400/80 shadow-[0_0_25px_rgba(8,145,178,0.5)] group"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/30 to-purple-600/30 group-hover:opacity-0 transition-opacity duration-700 z-10"></div>
          <img
            src={profileImage}
            alt="Foto de perfil"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700 scale-105 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70 group-hover:opacity-0 transition-opacity duration-700"></div>
        </motion.div>

        {/* Name with enhanced text effect */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 drop-shadow-[0_2px_8px_rgba(8,145,178,0.4)]"
          style={{ 
            backgroundSize: '300% 100%',
            animation: 'animateGradient 6s ease infinite'
          }}
        >
          Víctor Guerra Zavala
        </motion.h1>

        {/* Subtitle with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-4 relative"
        >
          <p className="text-lg sm:text-xl font-medium text-cyan-300 drop-shadow-md">
            <span className="text-cyan-200 opacity-70 mr-2">--</span>
            Analista de Sistemas y Desarrollador Web
            <span className="text-cyan-200 opacity-70 ml-2">--</span>
          </p>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
        </motion.div>

        {/* Description with enhanced styling */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6 text-base sm:text-lg text-white/90 max-w-xl leading-relaxed drop-shadow-md"
        >
          Transformo ideas en experiencias digitales impactantes mediante código limpio, 
          diseño funcional y un enfoque <span className="text-cyan-300">100% creativo</span>.
        </motion.p>

        {/* Button with enhanced effects */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          onClick={handleProjectsClick}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)'
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg relative overflow-hidden group"
        >
          <span className="relative z-10">Ver Proyectos</span>
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:to-purple-600 transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
          <span className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] rounded-full bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300 group-hover:animate-pulse-fast"></span>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;