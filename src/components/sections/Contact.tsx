import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FoxAvatar from '../../assets/Contact/fox-avatar-contact.png';

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
    href: 'https://wa.me/11234567890',
    iconSrc: 'https://cdn.simpleicons.org/whatsapp/25D366',
    label: 'WhatsApp',
  },
];

const FormularioContacto = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert('Formulario enviado con éxito!');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contact" className="relative py-16 px-4 sm:px-6 lg:px-8 text-white">
      {/* Overlay suave */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Avatar y botones */}
        <motion.div
          className="relative flex flex-col items-center space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="w-64 h-64 bg-cyan-400 rounded-full opacity-20 filter blur-3xl"></div>
          </div>
          <motion.img
            src={FoxAvatar}
            alt="Fox Avatar"
            className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-contain rounded-2xl shadow-2xl"
            animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          <motion.div
            className="flex gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {contactMethods.map(({ href, iconSrc, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="bg-white/10 backdrop-blur p-4 rounded-full shadow-xl border border-white/20"
                whileHover={{ scale: 1.15, rotate: [0, 3, -3, 0] }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img src={iconSrc} alt={label} className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Formulario */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">¡Hablemos!</h2>
          <p className="text-gray-300 mb-8">Déja tu mensaje y me pondré en contacto lo antes posible.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu Nombre"
                className="w-full p-4 bg-gray-800 rounded-xl border border-gray-700 focus:ring-2 focus:ring-cyan-400"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Tu Correo"
                className="w-full p-4 bg-gray-800 rounded-xl border border-gray-700 focus:ring-2 focus:ring-cyan-400"
                whileFocus={{ scale: 1.02 }}
              />
            </div>
            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Escribe tu mensaje"
              rows={6}
              className="w-full p-4 bg-gray-800 rounded-xl border border-gray-700 focus:ring-2 focus:ring-cyan-400 resize-none"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-cyan-500 hover:bg-cyan-600 rounded-xl font-semibold shadow-xl transition-transform transform hover:scale-105"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default FormularioContacto;
