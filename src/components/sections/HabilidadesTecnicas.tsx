// src/components/sections/HabilidadesTecnicas.tsx
import React from 'react';
import { useRef } from 'react';
import { Award, Code2, Database, Layout, Server, Terminal } from 'lucide-react';
import StatsCard from '../ui/StatsCard';

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
    icon: <Layout className="w-6 h-6" />,
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'Django', 'Express', 'FastAPI'],
    icon: <Server className="w-6 h-6" />,
  },
  {
    category: 'Base de Datos',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase'],
    icon: <Database className="w-6 h-6" />,
  },
  {
    category: 'DevOps',
    items: ['Docker', 'AWS', 'CI/CD', 'Kubernetes'],
    icon: <Terminal className="w-6 h-6" />,
  },
];

const certifications = [
  'AWS Certified Solutions Architect',
  'IBM Full Stack Cloud Developer',
  'MongoDB Certified Developer',
  'Docker Certified Associate',
];

export const HabilidadesTecnicas = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id = "skills" className="py-20 px-6 relative overflow-hidden"  ref={containerRef}>
      {/* Fondo animado */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-1/2 -left-1/2 w-[150%] h-[150%] bg-purple-500/20 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-[150%] h-[150%] bg-cyan-500/20 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Skills */}
        <div
          className="lg:col-span-8 space-y-6 bg-white/5 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/10 hover:shadow-cyan-500/20 transition duration-300"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-bold mb-8 animate-gradient-text">Habilidades Técnicas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((category, index) => (
              <div
                key={category.category}
                data-aos="zoom-in-up"
                data-aos-delay={index * 100}
                className="glass-card rounded-2xl p-6 card-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-cyan-400">{category.icon}</div>
                  <h3 className="font-semibold text-lg text-white">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-dark-300/50 rounded-full text-sm text-gray-300 border border-dark-400/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificaciones + Stats */}
        <div className="lg:col-span-4 space-y-6">
          <div
            className="glass-card rounded-2xl p-6 shadow-xl"
            data-aos="fade-left"
          >
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">Certificaciones</h2>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert}
                  className="flex items-center gap-3 bg-dark-300/30 p-4 rounded-xl"
                  data-aos="fade-right"
                  data-aos-delay={200 + index * 100}
                >
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-gray-300">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 gap-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <StatsCard icon={<Code2 />} title="Proyectos" value="50+" />
            <StatsCard icon={<Layout />} title="Experiencia" value="5+ años" />
          </div>
        </div>
      </div>
    </section>
  );
};
