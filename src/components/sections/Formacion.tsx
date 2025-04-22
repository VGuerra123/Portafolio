import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import CV from '../../assets/CV_Actualizado2025.pdf';
import FoxFormacion from '../../assets/Formacion/fox-avatar-formacion.png';  // Ruta local para el avatar de Fox

// Timeline data
const timeline = [
  { date: '2017 – 2022', label: 'Ingeniería Civil Eléctrica', type: 'academico' },
  { date: '2023 – 2024', label: 'Técnico Analista de Sistemas', type: 'academico' },
  { date: 'Mar 2018 – Dic 2022', label: 'Ayudante de Facultad USACH', type: 'laboral' },
  { date: 'Ene 2021 – Presente', label: 'Desarrollador Web en Neurona Global Services', type: 'laboral' },
];

// 16 Full-Stack Skills
const fullStackSkills = [
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
  { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
];

export const Formacion = () => {
  return (
    <section
      id="formacion"
      className="relative w-full px-6 pt-32 pb-20 bg-gradient-to-b from-transparent to-black/30 backdrop-blur-sm overflow-visible"
    >
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Título principal */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Formación & Experiencia Profesional
        </motion.h2>

        {/* Grid: Timeline y personaje + CV */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Timeline columna */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-cyan-400/30 rounded-full" />
            <div className="space-y-8 pl-8">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Formación Académica</h3>
              {timeline.filter(t => t.type === 'academico').map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  <div className="w-4 h-4 bg-white border-2 border-cyan-400 rounded-full mt-1" />
                  <div className="bg-white/10 p-4 rounded-xl border-l-4 border-cyan-400">
                    <p className="text-sm text-gray-300">{item.date}</p>
                    <p className="mt-1 text-white font-medium">{item.label}</p>
                  </div>
                </motion.div>
              ))}

              <h3 className="text-xl font-bold text-purple-400 mt-8 mb-4">Experiencia Profesional</h3>
              {timeline.filter(t => t.type === 'laboral').map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  <div className="w-4 h-4 bg-white border-2 border-purple-400 rounded-full mt-1" />
                  <div className="bg-white/10 p-4 rounded-xl border-l-4 border-purple-400">
                    <p className="text-sm text-gray-300">{item.date}</p>
                    <p className="mt-1 text-white font-medium">{item.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Personaje + botón CV columna (Fusionados) */}
          <div className="flex flex-col items-center justify-center relative mb-6">
            {/* Personaje y botón en un solo contenedor */}
            <motion.div
              className="relative flex flex-col items-center justify-center"
              animate={{
                y: [0, -20, 0], // Movimiento hacia arriba y abajo
              }}
              transition={{
                duration: 2,
                repeat: Infinity, // Bucle infinito
                ease: 'easeInOut', // Efecto suave
              }}
            >
              {/* Personaje flotante */}
              <motion.img
                src={FoxFormacion}
                alt="Fox Guía Formacion"
                className="relative w-96 h-96 object-contain mb-4"
              />
              {/* Botón de descargar CV - Pegado al personaje */}
              <motion.a
                href={CV}
                download
                className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full shadow-xl text-lg transform transition-all duration-300"
                whileHover={{
                  scale: 1.1, // Animación cuando el mouse pasa por encima
                  boxShadow: "0 10px 20px rgba(0, 255, 255, 0.3)", // Sombra más fuerte
                  y: 5, // Movimiento hacia abajo al pasar el mouse
                }}
                whileTap={{
                  scale: 0.95, // Efecto de "presionar" el botón
                }}
              >
                <Download size={24} /> Descargar CV
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Grid de Habilidades */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Habilidades Destacadas</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {fullStackSkills.map((skill, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center bg-white/5 p-4 rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
                <span className="text-white text-sm text-center">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
