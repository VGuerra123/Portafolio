import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, Rocket, Code2, Sparkles } from 'lucide-react';

const techHighlights = [
  {
    title: 'Frontend Creativo',
    description: 'Diseños modernos, componentes reutilizables, animaciones e interfaces accesibles.',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    icon: <Rocket className="w-7 h-7 text-cyan-400" />,
  },
  {
    title: 'Backend Escalable',
    description: 'Microservicios seguros con Node.js y Python, API REST y autenticación robusta.',
    skills: ['Node.js', 'Express', 'Django', 'FastAPI'],
    icon: <Code2 className="w-7 h-7 text-purple-400" />,
  },
  {
    title: 'DevOps Ágil',
    description: 'Contenedores, CI/CD y despliegues automáticos en AWS con Docker y Kubernetes.',
    skills: ['Docker', 'CI/CD', 'Kubernetes', 'AWS'],
    icon: <BadgeCheck className="w-7 h-7 text-yellow-400" />,
  },
];

export const HabilidadesTecnicas = () => {
  return (
    <section id="skills" className="py-28 px-6 relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -left-40 w-[300px] h-[300px] bg-cyan-400/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-purple-500/20 blur-[100px] animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center mb-20">
        <motion.h2
          className="text-5xl font-bold animate-gradient-text mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Mi Stack Profesional
        </motion.h2>
        <motion.p
          className="text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Conecto diseño y funcionalidad construyendo soluciones sólidas y elegantes desde el frontend hasta el backend y la nube.
        </motion.p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {techHighlights.map((block, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-lg hover:shadow-cyan-500/30 transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-6">
              {block.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2 text-center">
              {block.title}
            </h3>
            <p className="text-sm text-gray-300 text-center mb-4">
              {block.description}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {block.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="relative z-10 mt-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <p className="text-white/70 text-sm flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          Siempre aprendiendo nuevas tecnologías para crear experiencias digitales inolvidables.
        </p>
      </motion.div>
    </section>
  );
};