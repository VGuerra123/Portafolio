// src/components/layout/Header.tsx
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Globe, MapPin, Thermometer } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import logo from '../../assets/logo.png';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [locationTxt, setLocationTxt] = useState('');
  const [temperature, setTemperature] = useState('');
  const [time, setTime] = useState('');
  const route = useLocation();

  useEffect(() => {
    (async () => {
      if (!navigator.geolocation) return;
      navigator.geolocation.getCurrentPosition(async ({ coords }) => {
        const apiKey = '3d893d4f3330e0cee6435072e81fad00';
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${apiKey}&units=metric`
        );
        const data = await res.json();
        setLocationTxt(data?.sys?.country ? `${data.name}, ${data.sys.country}` : 'Ubicación desconocida');
        setTemperature(data?.main?.temp ? `${Math.round(data.main.temp)}°C` : 'Temperatura desconocida');
      });
    })();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('es-ES', { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const navLink = `relative group text-sm font-semibold transition-colors after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-cyan-400 after:w-0 group-hover:after:w-full after:transition-all after:duration-300`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-10 py-3 backdrop-blur-md bg-transparent">
      {/* Logo + Toggles */}
      <div className="flex items-center gap-6">
        <Link
          to="/"
          className="relative p-1 rounded-full bg-black/10 hover:bg-cyan-500/20 transition backdrop-blur-xl shadow-md"
        >
          <img src={logo} alt="Logo VG" className="w-14 h-14 hover:scale-105 transition-transform drop-shadow" />
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-black/20 hover:bg-cyan-500/20 text-white hover:text-cyan-400 transition"
            title="Cambiar tema"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            className="p-2 rounded-full bg-black/20 hover:bg-cyan-500/20 text-white hover:text-cyan-400 transition"
            title="Cambiar idioma"
          >
            <Globe size={20} />
          </button>

          <span className="text-sm font-mono text-cyan-300">{time || '--:--'}</span>
        </div>
      </div>

      {/* Ubicación y temperatura */}
      <div className="hidden lg:flex items-center gap-6 text-cyan-200 text-xs font-medium">
        <div className="flex items-center gap-1">
          <MapPin size={16} /> <span>{locationTxt || 'Ubicación...'}</span>
        </div>
        <div className="flex items-center gap-1">
          <Thermometer size={16} /> <span>{temperature || 'Temp...'}</span>
        </div>
      </div>

      {/* Navegación */}
      <nav className="hidden md:flex items-center gap-8 text-white drop-shadow-md">
        <a href="/#hero" className={`${navLink}`}>
          Inicio
        </a>
        <a href="/#formacion" className={`${navLink}`}>
          Sobre mí
        </a>
        <Link
          to="/projects"
          className={`${navLink} ${
            route.pathname.startsWith('/projects') ? 'text-cyan-400 after:w-full' : ''
          }`}
        >
          Proyectos
        </Link>
        <Link
          to="/contact"
          className={`${navLink} ${
            route.pathname === '/contact' ? 'text-cyan-400 after:w-full' : ''
          }`}
        >
          Contacto
        </Link>
      </nav>
    </header>
  );
};

export default Header;
