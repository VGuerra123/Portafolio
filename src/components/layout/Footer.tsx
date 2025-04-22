import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-t from-black to-gray-900 text-gray-300 py-12 px-6 overflow-hidden"
    >
      {/* Ondas suaves al fondo */}
      <div className="absolute inset-0 -z-10 bg-[url('/waves.svg')] bg-repeat-x bg-bottom opacity-20 animate-wave"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Texto y año */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Víctor Guerra Zavala. <br className="md:hidden" />
          Todos los derechos reservados.
        </p>

        {/* Iconos sociales */}
        <div className="flex items-center gap-6">
          {[
            { href: 'https://github.com/tu-user', Icon: Github, label: 'GitHub' },
            { href: 'https://linkedin.com/in/tu-perfil', Icon: Linkedin, label: 'LinkedIn' },
            { href: 'mailto:tu@email.com', Icon: Mail, label: 'Email' },
          ].map(({ href, Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={24} />
            </motion.a>
          ))}

          {/* Botón Back to Top */}
          <motion.button
            aria-label="Volver arriba"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-2 rounded-full bg-cyan-600 text-white hover:bg-cyan-500 transition-colors"
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={24} />
          </motion.button>
        </div>
      </div>
    </motion.footer>
  );
};
