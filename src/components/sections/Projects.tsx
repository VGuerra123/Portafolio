import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import ParticleBackground from '../ui/ParticleBackground'; // Fondo de partículas

// Definimos los proyectos con categoría
const projects = [
  // Analista de Sistemas (TI)
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

  // Desarrollo Web
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
    description: 'Desarrollo de una tienda en línea utilizando React, Stripe para pagos y Firebase para la base de datos.',
    image: 'https://images.unsplash.com/photo-1581092338399-f6c0cc4676c2?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/tu-usuario/ecommerce-react-stripe',
    demo: 'https://ecommerce-demo.com',
    tech: ['React', 'Stripe', 'Firebase', 'Node.js'],
  },
  {
    category: 'Desarrollo Web',
    title: 'Blog con Next.js y Markdown',
    description: 'Aplicación de blog donde los artículos son escritos en Markdown y renderizados dinámicamente con Next.js.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/tu-usuario/blog-nextjs-markdown',
    demo: 'https://blog-nextjs-demo.com',
    tech: ['Next.js', 'Markdown', 'Node.js'],
  },
  {
    category: 'Desarrollo Web',
    title: 'Gestión de Tareas con React y Firebase',
    description: 'Aplicación de lista de tareas donde los usuarios pueden agregar, editar y eliminar tareas, usando React y Firebase.',
    image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/tu-usuario/task-manager-react-firebase',
    demo: 'https://task-manager-demo.com',
    tech: ['React', 'Firebase', 'CSS'],
  },
  {
    category: 'Desarrollo Web',
    title: 'YurForce - Sistema de Emulación de Consolas',
    description: 'Emulador web para múltiples consolas clásicas con soporte de controles, estados de guardado y skins personalizables.',
    image: 'https://images.unsplash.com/photo-1600891965058-e29b24e7eaa9?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/tu-usuario/yurforce',
    demo: 'https://yurforce-demo.com',
    tech: ['React', 'WebAssembly', 'Emulación'],
  },

  // Desarrollo Móvil (Solo Juegos)
  {
    category: 'Desarrollo Móvil',
    title: 'Juego de Memoria con React Native',
    description: 'Juego de cartas de memoria con niveles de dificultad progresiva y sonidos interactivos.',
    image: 'https://images.unsplash.com/photo-1528712306091-ed0763094c98?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/tu-usuario/memory-game-react-native',
    demo: 'https://memory-game-demo.com',
    tech: ['React Native', 'Expo'],
  },
  {
    category: 'Desarrollo Móvil',
    title: 'Trivia Challenge con Flutter',
    description: 'Juego de trivia con preguntas en categorías, temporizador y puntuaciones globales.',
    image: 'https://images.unsplash.com/photo-1573164574393-784c6e16a6a4?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/tu-usuario/trivia-challenge-flutter',
    demo: 'https://trivia-challenge-demo.com',
    tech: ['Flutter', 'Firebase'],
  },
  {
    category: 'Desarrollo Móvil',
    title: 'Runner Adventure con Unity',
    description: 'Juego tipo endless runner con gráficos 2D, power-ups y niveles desbloqueables.',
    image: 'https://images.unsplash.com/photo-1517511620798-cec17d428bc0?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/tu-usuario/runner-adventure-unity',
    demo: 'https://runner-adventure-demo.com',
    tech: ['Unity', 'C#'],
  },
  {
    category: 'Desarrollo Móvil',
    title: 'Puzzle Blocks con React Native',
    description: 'Juego de puzzle basado en bloques deslizantes y desafíos diarios.',
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/tu-usuario/puzzle-blocks-react-native',
    demo: 'https://puzzle-blocks-demo.com',
    tech: ['React Native', 'JavaScript'],
  },
  {
    category: 'Desarrollo Móvil',
    title: 'Arcade Shooter con Flutter',
    description: 'Juego de disparos estilo arcade con niveles, enemigos y tablas de clasificación.',
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
    <section
      id="projects"
      className="relative w-full py-24 px-6 overflow-hidden text-white bg-gradient-to-b from-transparent to-black/30 backdrop-blur-sm transition-all duration-1000 ease-in-out"
    >
      <ParticleBackground />
      <div className="relative z-10 container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold mb-4">Proyectos Profesionales</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            16 proyectos de alto impacto para tu portafolio.
          </p>
        </motion.div>

        {/* Filtros de tecnología */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {techFilters.map((tech, i) => (
            <button
              key={i}
              onClick={() => setFilter(tech)}
              className={
                `px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === tech ? 'bg-cyan-500 text-white shadow-lg' : 'bg-white/20 text-gray-200 hover:bg-white/30'
                }`
              }
            >
              {tech}
            </button>
          ))}
        </motion.div>

        {/* Separar por categorías */}
        {categories.map(category => {
          const items = filtered.filter(p => p.category === category);
          return (
            <div key={category} className="mb-16">
              <h3 className="text-3xl font-semibold mb-6">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {items.map((project, index) => (
                  <Tilt
                    key={project.title}
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    glareEnable
                    glareMaxOpacity={0.2}
                    className="rounded-3xl"
                  >
                    <motion.div
                      className="group relative bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20 shadow-lg hover:border-cyan-400 transition-all"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <div className="relative">
                        <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition">
                            <Github size={20} />
                          </a>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition">
                            <ExternalLink size={20} />
                          </a>
                        </div>
                      </div>
                      <div className="p-6 space-y-4">
                        <h4 className="text-xl font-semibold group-hover:text-cyan-400 transition">{project.title}</h4>
                        <p className="text-gray-300 text-sm">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t, idx) => (
                            <span key={idx} className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20">{t}</span>
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
