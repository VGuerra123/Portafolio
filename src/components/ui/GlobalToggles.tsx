// src/components/ui/GlobalToggles.tsx
import React from 'react';
import { useState, useEffect } from 'react';
import { Sun, Moon, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const GlobalToggles = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState<'ES' | 'EN'>('ES');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-lg">
      {/* Modo Oscuro / Claro */}
      <motion.button
        onClick={() => setDarkMode(!darkMode)}
        whileTap={{ scale: 0.9 }}
        className="text-white hover:text-cyan-400 transition-colors"
        title="Cambiar tema"
      >
        <AnimatePresence mode="wait">
          {darkMode ? (
            <motion.div
              key="moon"
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <Moon size={22} />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ opacity: 0, rotate: 180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -180 }}
              transition={{ duration: 0.3 }}
            >
              <Sun size={22} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Idioma */}
      <motion.button
        onClick={() => setLanguage(language === 'ES' ? 'EN' : 'ES')}
        whileTap={{ scale: 0.9 }}
        className="text-white hover:text-purple-400 transition-colors flex items-center gap-1"
        title="Cambiar idioma"
      >
        <Globe size={20} />
        <span className="text-sm font-semibold">{language}</span>
      </motion.button>
    </div>
  );
};

export default GlobalToggles;
