import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FoxAvatar from '../../assets/Contact/fox-avatar-contact.png';
import ParticleBackground from '../ui/ParticleBackground';

const contactMethods = [
  {
    href: 'https://www.linkedin.com/in/víctor-guerra',
    iconSrc: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
    label: 'LinkedIn',
  },
  {
    href: 'mailto:v.guerra.dev@gmail.com',
    iconSrc: 'https://cdn.simpleicons.org/gmail/EA4335',
    label: 'Email',
  },
  {
    href: 'https://wa.me/56974523617',
    iconSrc: 'https://cdn.simpleicons.org/whatsapp/25D366',
    label: 'WhatsApp',
  },
];

const phrases = [
  '¡Hola! ¿Quieres hablar sobre tu proyecto? 💡',
  '¿Listo para crear algo increíble juntos? 🚀',
  'Puedes escribirme cuando quieras. 🤖',
  '¡No olvides saludar por WhatsApp! ✨',
];

const FormularioContacto = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="relative py-28 px-6 sm:px-12 text-white overflow-hidden bg-black">
      <ParticleBackground />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-16">
        
        {/* 🦊 Personaje con aura y rayos */}
        <div className="relative flex flex-col items-center justify-center">
          <div className="absolute w-72 h-72 rounded-full bg-cyan-400/20 blur-3xl animate-pulse-slow z-0" />
          <div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-600/20 animate-spin-slow z-0 blur-[100px]" />

          <motion.img
            src={FoxAvatar}
            alt="Zorro Contacto"
            className="w-64 h-64 object-contain drop-shadow-[0_0_40px_rgba(6,182,212,0.6)] relative z-10"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Frases animadas tipo chatbot */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPhrase}
              className="absolute -top-16 left-1/2 -translate-x-1/2 px-5 py-3 bg-white text-gray-800 text-sm font-medium rounded-xl shadow-xl border border-gray-300 max-w-xs text-center z-20"
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {phrases[currentPhrase]}
              <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-l border-b border-gray-300" />
            </motion.div>
          </AnimatePresence>

          {/* Botones sociales */}
          <div className="mt-10 flex gap-6 z-10">
            {contactMethods.map(({ href, iconSrc, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-full bg-white/10 border border-white/20 hover:bg-cyan-500/20 shadow-lg transition hover:scale-110"
              >
                <img src={iconSrc} alt={label} className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Texto con número y correo en línea separada */}
        <motion.div
          className="text-left space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
            ¿Trabajamos juntos?
          </h2>

          <p className="text-xl font-semibold text-gray-300 mb-2">
            Contáctame directamente a:
          </p>

          {/* Número de WhatsApp */}
          <a
            href="https://wa.me/56974523617"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-3xl font-bold text-cyan-400 hover:text-white transition duration-300"
          >
            +56 9 7452 3617
            <img
              src="https://flagcdn.com/w40/cl.png"
              alt="Chile"
              className="w-7 h-5 rounded-sm border border-white/20"
            />
          </a>

          {/* Correo separado debajo */}
          <div className="mt-5">
            <a
              href="mailto:v.guerra.dev@gmail.com"
              className="inline-flex items-center gap-3 text-lg text-red-400 hover:text-white font-medium transition duration-300"
            >
              <img
                src="https://cdn.simpleicons.org/gmail/EA4335"
                alt="Gmail"
                className="w-6 h-6"
              />
              <span className="underline-offset-4 hover:underline">
                v.guerra.dev@gmail.com
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FormularioContacto;
