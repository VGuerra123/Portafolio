import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import ParticleBackground from '../ui/ParticleBackground'; // Fondo de partículas

// Proyectos definidos por categoría
const projects = [
  // Categoría: Analista de Sistemas (TI)
  {
    category: 'Analista de Sistemas (TI)',
    title: 'Automatización de Tareas con Python',
    description: 'Automatización de procesos internos utilizando Python y bibliotecas como Selenium y Pandas.',
    image: 'https://images.unsplash.com/photo-1581091215367-91a6a5babd1b?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/tu-usuario/automation-python',
    demo: 'https://automation-python-demo.com',
    tech: ['Python', 'Selenium', 'Pandas'],
  },
  {
    category: 'Analista de Sistemas (TI)',
    title: 'Sistema de Monitoreo de Red',
    description: 'Sistema de monitoreo en tiempo real para redes utilizando herramientas como Nagios y Python.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/tu-usuario/network-monitor',
    demo: 'https://network-monitor-demo.com',
    tech: ['Python', 'Nagios', 'Networking'],
  },
  {
    category: 'Analista de Sistemas (TI)',
    title: 'Gestión de Base de Datos con SQL Server',
    description: 'Desarrollo de scripts SQL para gestión de bases de datos y automatización de tareas administrativas.',
    image: 'https://images.unsplash.com/photo-1581093588401-3756b1df3b29?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/tu-usuario/sql-database-management',
    demo: 'https://sql-database-demo.com',
    tech: ['SQL Server', 'T-SQL', 'PowerShell'],
  },
  {
    category: 'Analista de Sistemas (TI)',
    title: 'Infraestructura como Código (IaC)',
    description: 'Despliegue automático de infraestructura en la nube usando Terraform y AWS.',
    image: 'https://images.unsplash.com/photo-1537432376769-00a36f9d2015?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/tu-usuario/iac-terraform-aws',
    demo: 'https://iac-demo.com',
    tech: ['Terraform', 'AWS', 'Infrastructure as Code'],
  },

  // Categoría: Desarrollo Web
  {
    category: 'Desarrollo Web',
    title: 'Dashboard de Usuarios con React',
    description: 'Aplicación web para gestionar usuarios, con filtros y gráficos dinámicos usando React y Chart.js.',
    image: 'https://images.unsplash.com/photo-1551033406-611cf9d87a82?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/tu-usuario/user-dashboard',
    demo: 'https://user-dashboard-demo.com',
    tech: ['React', 'Node.js', 'Chart.js'],
  },
  {
    category: 'Desarrollo Web',
    title: 'E-commerce con React y Stripe',
    description: 'Tienda en línea usando React, Stripe para pagos y Firebase para la base de datos.',
    image: 'https://images.unsplash.com/photo-1581092338399-f6c0cc4676c2?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/tu-usuario/ecommerce-react-stripe',
    demo: 'https://ecommerce-demo.com',
    tech: ['React', 'Stripe', 'Firebase', 'Node.js'],
  },
  {
    category: 'Desarrollo Web',
    title: 'Blog con Next.js y Markdown',
    description: 'Blog donde los artículos se escriben en Markdown y se renderizan con Next.js.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/tu-usuario/blog-nextjs-markdown',
    demo: 'https://blog-nextjs-demo.com',
    tech: ['Next.js', 'Markdown', 'Node.js'],
  },
  {
    category: 'Desarrollo Web',
    title: 'Gestión de Tareas con React y Firebase',
    description: 'App de lista de tareas donde los usuarios pueden agregar, editar y eliminar tareas.',
    image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/tu-usuario/task-manager-react-firebase',
    demo: 'https://task-manager-demo.com',
    tech: ['React', 'Firebase', 'CSS'],
  },
  {
    category: 'Desarrollo Web',
    title: 'YurForce - Sistema de Emulación de Consolas',
    description: 'Emulador web para consolas clásicas con soporte de controles y estados guardados.',
    image: 'https://images.unsplash.com/photo-1600891965058-e29b24e7eaa9?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/tu-usuario/yurforce',
    demo: 'https://yurforce-demo.com',
    tech: ['React', 'WebAssembly', 'Emulación'],
  },

  // Categoría: Desarrollo Móvil (Juegos)
  {
    category: 'Desarrollo Móvil',
    title: 'Juego de Memoria con React Native',
    description: 'Juego de cartas con niveles de dificultad progresiva y sonidos.',
    image: 'https://images.unsplash.com/photo-1528712306091-ed0763094c98?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/tu-usuario/memory-game-react-native',
    demo: 'https://memory-game-demo.com',
    tech: ['React Native', 'Expo'],
  },
  {
    category: 'Desarrollo Móvil',
    title: 'Trivia Challenge con Flutter',
    description: 'Trivia con categorías, temporizador y puntuación global.',
    image: 'https://images.unsplash.com/photo-1573164574393-784c6e16a6a4?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/tu-usuario/trivia-challenge-flutter',
    demo: 'https://trivia-challenge-demo.com',
    tech: ['Flutter', 'Firebase'],
  },
  {
    category: 'Desarrollo Móvil',
    title: 'Runner Adventure con Unity',
    description: 'Juego tipo endless runner con gráficos 2D y niveles.',
    image: 'https://images.unsplash.com/photo-1517511620798-cec17d428bc0?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/tu-usuario/runner-adventure-unity',
    demo: 'https://runner-adventure-demo.com',
    tech: ['Unity', 'C#'],
  },
  {
    category: 'Desarrollo Móvil',
    title: 'Puzzle Blocks con React Native',
    description: 'Puzzle con bloques deslizantes y desafíos diarios.',
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/tu-usuario/puzzle-blocks-react-native',
    demo: 'https://puzzle-blocks-demo.com',
    tech: ['React Native', 'JavaScript'],
  },
  {
    category: 'Desarrollo Móvil',
    title: 'Arcade Shooter con Flutter',
    description: 'Shooter arcade con niveles, enemigos y tabla de clasificación.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/tu-usuario/arcade-shooter-flutter',
    demo: 'https://arcade-shooter-demo.com',
    tech: ['Flutter', 'Dart'],
  },
];

export const Projects = () => {
  const [filter, setFilter] = useState('All');
  const techFilters = ['All', ...Array.from(new Set(projects.flatMap(p => p.tech)))];
  const filtered = filter === 'All' ? projects : projects.filter(p => p.tech.includes(filter));
  const categories = ['Analista de Sistemas (TI)', 'Desarrollo Web', 'Desarrollo Móvil'];

  return (
    <section id="projects" className="relative w-full py-24 px-6 overflow-hidden text-white">
      <ParticleBackground />
      <div className="relative z-10 container mx-auto max-w-7xl">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 animate-pulse">
            Proyectos Profesionales
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explora 16 proyectos de alto impacto con tecnologías modernas.
          </p>
        </motion.div>

        <motion.div className="flex flex-wrap justify-center gap-4 mb-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}>
          {techFilters.map((tech, i) => (
            <button
              key={i}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur border border-white/30 transition-all hover:scale-105 duration-200 shadow-md ${
                filter === tech ? 'bg-cyan-600 text-white' : 'bg-white/10 text-gray-200 hover:bg-white/20'
              }`}
            >
              {tech}
            </button>
          ))}
        </motion.div>

        {categories.map(category => {
          const items = filtered.filter(p => p.category === category);
          return (
            <div key={category} className="mb-20">
              <h3 className="text-3xl font-bold text-left mb-8 text-cyan-300 border-b border-cyan-800 pb-2">
                {category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {items.map((project, index) => (
                  <Tilt key={project.title} tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable glareMaxOpacity={0.2} className="rounded-3xl">
                    <motion.div
                      className="group relative bg-gradient-to-br from-white/5 to-black/30 backdrop-blur-lg border border-white/10 hover:border-cyan-400 rounded-3xl overflow-hidden shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <div className="relative">
                        <img src={project.image} alt={project.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4">
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-cyan-600 rounded-full hover:scale-110">
                            <Github size={22} />
                          </a>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-3 bg-cyan-600 rounded-full hover:scale-110">
                            <ExternalLink size={22} />
                          </a>
                        </div>
                      </div>
                      <div className="p-6 space-y-3">
                        <h4 className="text-xl font-semibold group-hover:text-cyan-400 transition">
                          {project.title}
                        </h4>
                        <p className="text-sm text-gray-300">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t, idx) => (
                            <span key={idx} className="text-xs px-3 py-1 rounded-full bg-white/10 border border-cyan-300 text-cyan-200">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </Tilt>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
