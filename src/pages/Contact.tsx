// src/pages/Contact.tsx
import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import ParticleBackground from '../components/ui/ParticleBackground';
import FoxAvatar from '../assets/Contact/fox-avatar-contact.png';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const socials = [
  { href: 'https://github.com/vguerra', icon: <FaGithub />, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/víctor-guerra', icon: <FaLinkedin />, label: 'LinkedIn' },
  { href: 'mailto:v.guerra.dev@gmail.com', icon: <FaEnvelope />, label: 'Email' },
  { href: 'https://wa.me/56974523617', icon: <FaWhatsapp />, label: 'WhatsApp' },
];

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contacto desde Portfolio: ${form.name}`);
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\n\nMensaje:\n${form.message}`
    );
    window.location.href = `mailto:v.guerra.dev@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black overflow-hidden px-4 sm:px-6 lg:px-8">
      <ParticleBackground />

      {/* blobs animados */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full mix-blend-screen opacity-40 animate-blob"></div>
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-gradient-to-br from-pink-500 to-yellow-400 rounded-full mix-blend-screen opacity-30 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
        {/* Avatar + Intro */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left space-y-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Tilt glareEnable glareMaxOpacity={0.1} tiltMaxAngleX={5} tiltMaxAngleY={5}>
            <motion.img
              src={FoxAvatar}
              alt="Avatar Zorro"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            />
          </Tilt>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            ¡Conectemos!
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-sm">
            ¿Tienes un desafío o proyecto? Escríbeme y hagámoslo realidad juntos.
          </p>
          <div className="flex gap-4">
            {socials.map(({ href, icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="p-3 bg-white/10 backdrop-blur-md rounded-lg shadow-lg hover:scale-110 transition"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-white text-xl">{icon}</div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Formulario glass */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-2xl"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Envíame un mensaje</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Nombre completo"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Correo electrónico"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
          </div>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tu mensaje..."
            rows={5}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition resize-none"
          />
          <motion.button
            type="submit"
            className="self-start px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold shadow-lg transform transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enviar
          </motion.button>
        </motion.form>
      </div>

      {/* Footer responsivo */}
      <motion.footer
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-6 text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {socials.map(({ href, icon, label }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="text-lg sm:text-xl hover:text-white transition"
          >
            {icon}
          </a>
        ))}
      </motion.footer>
    </div>
  );
};

export default Contact;
