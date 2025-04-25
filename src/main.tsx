// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './styles/index.css';

import 'aos/dist/aos.css';
import AOS from 'aos';

/* ----------------------------- AOS global ----------------------------- */
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  mirror: false,
});

/* --------------------------- Render principal ------------------------- */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
