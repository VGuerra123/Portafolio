// src/main.tsx
import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init({
  duration: 1000,      // duración de animación en ms
  easing: 'ease-in-out', // suavizado
  once: true,            // solo una vez por elemento
  mirror: false,         // no repite al salir de vista
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
