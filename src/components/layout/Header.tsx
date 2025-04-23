import React, { useEffect, useState } from 'react';
import { Sun, Moon, Globe, MapPin, Thermometer } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import logo from '../../assets/logo.png';

// Para obtener la temperatura y ubicación
const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [location, setLocation] = useState<string>('');
  const [temperature, setTemperature] = useState<string>('');
  const [time, setTime] = useState<string>('');
  
  useEffect(() => {
    // Obtener ubicación del usuario
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        // Usar OpenWeather API para obtener la temperatura
        const apiKey = '3d893d4f3330e0cee6435072e81fad00';  // Reemplaza con tu clave API
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
        const weatherData = await weatherResponse.json();

        console.log(weatherData);  // Agregar este console.log para verificar los datos de la respuesta

        // Comprobar si la respuesta tiene la propiedad 'sys' antes de acceder a 'country'
        if (weatherData.sys && weatherData.sys.country) {
          setLocation(`${weatherData.name}, ${weatherData.sys.country}`);
        } else {
          setLocation("Ubicación desconocida");
        }

        // Comprobar si la temperatura está disponible antes de establecerla
        if (weatherData.main && weatherData.main.temp) {
          setTemperature(`${weatherData.main.temp}°C`);
        } else {
          setTemperature("Temperatura desconocida");
        }
      });
    }

    // Actualizar la hora cada minuto
    const interval = setInterval(() => {
      const currentTime = new Date();
      setTime(currentTime.toLocaleTimeString('es-ES', { hour12: false }));
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-6 py-3 bg-transparent backdrop-blur-md shadow-none">
      {/* Logo y Toggles */}
      <div className="flex items-center gap-4 sm:gap-5">
        <div className="relative p-2 bg-black/10 backdrop-blur-xl rounded-full shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-cyan-400/40 transition duration-500">
          <img
            src={logo}
            alt="Logo VG"
            className="w-16 h-16 drop-shadow-xl hover:scale-105 transition duration-300"
          />
        </div>

        <div className="flex items-center gap-3">
          {/* Interruptor de modo claro/oscuro */}
          <button
            onClick={toggleTheme}
            className="text-white hover:text-cyan-400 transition duration-300 p-2 rounded-full bg-black/10 backdrop-blur-md hover:bg-black/30 transform hover:scale-110"
            title="Cambiar tema"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          {/* Interruptor de idioma */}
          <button
            className="text-white hover:text-cyan-400 transition duration-300 p-2 rounded-full bg-black/10 backdrop-blur-md hover:bg-black/30 transform hover:scale-110"
            title="Cambiar idioma"
          >
            <Globe size={20} />
          </button>

          {/* Hora al lado del idioma con resplandor */}
          <div className="text-white text-sm font-semibold text-shadow-lg">{time || 'Cargando hora...'}</div>
        </div>
      </div>

      {/* Información de ubicación y temperatura con solo iconos */}
      <div className="text-white flex items-center gap-6">
        {/* Icono de ubicación con valor */}
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <p className="text-sm">{location || 'Cargando ubicación...'}</p>
        </div>

        {/* Icono de temperatura con valor */}
        <div className="flex items-center gap-2">
          <Thermometer size={16} />
          <p className="text-sm">{temperature || 'Cargando temperatura...'}</p>
        </div>
      </div>

      {/* Navegación */}
      <nav className="hidden md:flex items-center gap-6 text-sm text-white font-medium drop-shadow-sm">
        <a
          href="#hero"
          className="hover:text-cyan-400 transition relative group"
        >
          Inicio
          <span className="absolute inset-0 w-full h-[2px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
        </a>
        <a
          href="#formacion"
          className="hover:text-cyan-400 transition relative group"
        >
          Sobre mí
          <span className="absolute inset-0 w-full h-[2px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
        </a>
        <a
          href="#projects"
          className="hover:text-cyan-400 transition relative group"
        >
          Proyectos
          <span className="absolute inset-0 w-full h-[2px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
        </a>
        <a
          href="#contact"
          className="hover:text-cyan-400 transition relative group"
        >
          Contacto
          <span className="absolute inset-0 w-full h-[2px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
