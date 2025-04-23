import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import ParticleBackground from '../ui/ParticleBackground';
import FoxFooter from '../../assets/Footer.png';

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative bg-gradient-to-t from-black via-slate-900 to-slate-950 text-gray-300 py-24 px-8 overflow-hidden"
    >
      <ParticleBackground />
      <div className="aurora-bg absolute inset-0 -z-10 pointer-events-none" />
      <div className="absolute inset-0 -z-20 bg-radial-gradient" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] items-center gap-12 relative z-10">
        {/* Personaje con aura */}
        <div className="relative flex items-center justify-center">
          <div className="absolute w-44 h-44 rounded-full bg-cyan-400/10 blur-2xl z-0 animate-pulse-slow"></div>
          <motion.img
            src={FoxFooter}
            alt="Footer Assistant"
            className="w-36 md:w-44 drop-shadow-[0_0_25px_rgba(59,130,246,0.6)] relative z-10"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Globo animado */}
          <motion.div
            className="absolute -top-12 left-32 bg-white text-gray-800 text-sm font-semibold px-5 py-3 rounded-2xl shadow-xl border border-gray-200 max-w-[200px] animate-dialog-float"
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            ¡Gracias por visitar mi portafolio! 😊
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-white" />
          </motion.div>
        </div>

        {/* Contenido central */}
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          {/* Íconos sociales + botón */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { href: 'https://github.com/VGuerra123', Icon: Github, label: 'GitHub' },
              { href: 'https://linkedin.com/in/víctor-guerra', Icon: Linkedin, label: 'LinkedIn' },
              { href: 'mailto:victor.guerra.z@usach.cl', Icon: Mail, label: 'Email' },
            ].map(({ href, Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-cyan-500/10 shadow-md backdrop-blur-md transition-all"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={22} />
              </motion.a>
            ))}

            <motion.button
              aria-label="Volver arriba"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-3 rounded-full bg-cyan-600 text-white hover:bg-cyan-500 transition-colors shadow-xl"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp size={22} />
              <span className="absolute -inset-3 rounded-full bg-cyan-400/20 blur-xl opacity-70 animate-pulse-fast" />
            </motion.button>
          </div>

          {/* Frase final animada */}
          <motion.p
            className="text-sm text-cyan-200 font-mono mt-6 whitespace-nowrap overflow-hidden border-r-2 border-cyan-400 animate-typing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Hecho con 💙 en React + Tailwind · Última actualización 2025
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
};
