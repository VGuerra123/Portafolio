// src/components/sections/Formacion.tsx
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap } from 'lucide-react';

export const Formacion = () => {
  return (
    <section id="formacion" className="py-20 px-6 relative overflow-hidden">
      {/* Fondo decorativo animado */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-[60%] h-[60%] bg-pink-500/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[60%] h-[60%] bg-cyan-500/20 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 animate-gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Formación Académica
        </motion.h2>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl shadow-2xl space-y-10">
          {/* Biografía */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <BookOpen className="text-cyan-400 w-6 h-6" />
              <h3 className="text-2xl font-semibold text-white">Biografía</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Soy Víctor Guerra Zavala, Analista de Sistemas y Desarrollador Web apasionado por la tecnología,
              el diseño de interfaces atractivas y el desarrollo de soluciones digitales innovadoras. 
              Me especializo en crear experiencias digitales intuitivas y eficientes.
            </p>
          </motion.div>

          {/* Formación académica */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <GraduationCap className="text-purple-400 w-6 h-6" />
              <h3 className="text-2xl font-semibold text-white">Estudios</h3>
            </div>
            <ul className="text-gray-300 list-disc pl-6 space-y-2">
              <li><strong>Ingeniería en Informática</strong> – Universidad Técnica Federico Santa María</li>
              <li><strong>Técnico en Programación Computacional</strong> – INACAP</li>
              <li><strong>Certificaciones</strong>: AWS, IBM, MongoDB, Docker (ver sección de habilidades)</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
