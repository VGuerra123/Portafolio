// src/components/layout/Header.tsx
import React from 'react';
import { Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import logo from '../../assets/logo.png';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-6 py-3 bg-gradient-to-b from-black/60 via-black/20 to-transparent backdrop-blur-md shadow-md">
      {/* Logo y Toggles */}
      <div className="flex items-center gap-4 sm:gap-5">
        <div className="relative p-2 bg-black/50 backdrop-blur-xl rounded-full shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-cyan-400/40 transition duration-500">
          <img
            src={logo}
            alt="Logo VG"
            className="w-16 h-16 drop-shadow-xl hover:scale-105 transition duration-300"
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="text-white hover:text-cyan-400 transition duration-300"
            title="Cambiar tema"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="text-white hover:text-cyan-400 transition duration-300"
            title="Cambiar idioma"
          >
            <Globe size={20} />
          </button>
        </div>
      </div>

      {/* Navegación */}
      <nav className="hidden md:flex items-center gap-6 text-sm text-white font-medium drop-shadow-sm">
        <a href="#formacion" className="hover:text-cyan-400 transition">Sobre mí</a>
        <a href="#skills" className="hover:text-cyan-400 transition">Habilidades Técnicas</a>
        <a href="#projects" className="hover:text-cyan-400 transition">Proyectos</a>
        <a href="#contact" className="hover:text-cyan-400 transition">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;
