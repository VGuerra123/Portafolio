import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import CV from '../../assets/CV_Actualizado2025.pdf';
import FoxFormacion from '../../assets/Formacion/fox-avatar-formacion.png';
import ParticleBackground from '../ui/ParticleBackground';

const fullStackSkills = [
  { name: 'HTML5', icon: 'html5', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'CSS3', icon: 'css3', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'JavaScript', icon: 'javascript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'TypeScript', icon: 'typescript', url: 'https://www.typescriptlang.org/' },
  { name: 'React', icon: 'react', url: 'https://react.dev/' },
  { name: 'Next.js', icon: 'nextjs', url: 'https://nextjs.org/' },
  { name: 'Node.js', icon: 'nodejs', url: 'https://nodejs.org/' },
  { name: 'Angular', icon: 'angular', url: 'https://angular.io/' },
  { name: 'Vue.js', icon: 'vuejs', url: 'https://vuejs.org/' },
  { name: 'Bootstrap', icon: 'bootstrap', url: 'https://getbootstrap.com/' },
  { name: 'Firebase', icon: 'firebase', url: 'https://firebase.google.com/' },
  { name: 'MySQL', icon: 'mysql', url: 'https://www.mysql.com/' },
  { name: 'PHP', icon: 'php', url: 'https://www.php.net/' },
  { name: 'Python', icon: 'python', url: 'https://www.python.org/' },
  { name: 'Tailwind CSS', icon: 'tailwindcss', url: 'https://tailwindcss.com/' },
  { name: 'Git', icon: 'git', url: 'https://git-scm.com/' },
];

const radius = 230;

export const Formacion = () => {
  return (
    <section id="formacion" className="relative w-full h-screen px-6 pt-32 pb-32 overflow-hidden flex items-center justify-center">
      <ParticleBackground />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-7xl w-full mx-auto space-y-20"
      >
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Formación & Experiencia Profesional
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-cyan-400/30 rounded-full" />
            <div className="space-y-8 pl-8">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Formación Académica</h3>
              <motion.div className="flex items-start gap-4">
                <div className="w-4 h-4 bg-white border-2 border-cyan-400 rounded-full mt-1" />
                <div className="bg-white/10 p-4 rounded-xl border-l-4 border-cyan-400 shadow-md">
                  <p className="text-sm text-gray-300">2017 – 2022</p>
                  <p className="mt-1 text-white font-semibold">Ingeniería Civil Eléctrica (Incompleta)</p>
                  <p className="text-sm text-gray-400 mt-1">Universidad de Santiago de Chile</p>
                </div>
              </motion.div>
              <motion.div className="flex items-start gap-4">
                <div className="w-4 h-4 bg-white border-2 border-cyan-400 rounded-full mt-1" />
                <div className="bg-white/10 p-4 rounded-xl border-l-4 border-cyan-400 shadow-md">
                  <p className="text-sm text-gray-300">2023 – 2024</p>
                  <p className="mt-1 text-white font-semibold">Técnico Analista de Sistemas (Completo)</p>
                  <p className="text-sm text-gray-400 mt-1">Instituto Profesional IPP</p>
                </div>
              </motion.div>

              <h3 className="text-xl font-bold text-purple-400 mt-8 mb-4">Experiencia Profesional</h3>
              <motion.div className="flex items-start gap-4">
                <div className="w-4 h-4 bg-white border-2 border-purple-400 rounded-full mt-1" />
                <div className="bg-white/10 p-4 rounded-xl border-l-4 border-purple-400 shadow-md">
                  <p className="text-sm text-gray-300">Mar 2018 – Dic 2022</p>
                  <p className="mt-1 text-white font-semibold">Ayudante del Departamento de Matemáticas y Ciencias de la Computación</p>
                  <p className="mt-1 text-white font-semibold">Ayudante de la Facultad de Economía (FAE)</p>
                  <p className="text-sm text-gray-400 mt-1">Universidad de Santiago de Chile</p>
                </div>
              </motion.div>
              <motion.div className="flex items-start gap-4">
                <div className="w-4 h-4 bg-white border-2 border-purple-400 rounded-full mt-1" />
                <div className="bg-white/10 p-4 rounded-xl border-l-4 border-purple-400 shadow-md">
                  <p className="text-sm text-gray-300">Dic 2024 – Presente</p>
                  <p className="mt-1 text-white font-semibold">Desarrollador Web</p>
                  <p className="text-sm text-gray-400 mt-1">Neurona Global Services</p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="relative w-full h-[520px] flex flex-col items-center justify-center">
            <div className="absolute w-[480px] h-[480px] animate-spin-slow">
              {fullStackSkills.map((skill, i) => {
                const angle = (2 * Math.PI * i) / fullStackSkills.length;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);
                return (
                  <a
                    key={skill.name}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute w-10 h-10"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                      left: '50%',
                      top: '50%',
                    }}
                  >
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`}
                      alt={skill.name}
                      className="w-full h-full object-contain hover:scale-125 transition-transform drop-shadow-lg"
                      onError={(e) => (e.currentTarget.style.display = 'none')}
                    />
                  </a>
                );
              })}
            </div>

            <div className="relative z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gradient-to-tr from-blue-500 via-yellow-400 to-purple-600 blur-[70px] opacity-50"></div>
              <motion.img
                src={FoxFormacion}
                alt="Fox saludando"
                className="relative w-72 h-72 object-contain"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>

            <motion.a
              href={CV}
              download
              className="mt-6 inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full shadow-xl text-lg transform transition-all duration-300"
              whileHover={{ scale: 1.1, y: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={24} /> Descargar CV
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
