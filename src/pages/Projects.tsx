/* ------------------------------------------------------------------
   Projects.tsx – Portafolio Profesional · Víctor Guerra Zavala
------------------------------------------------------------------- */
import React, { useMemo, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import ParticleBackground from '../components/ui/ParticleBackground';

/* ----------------------------- Types ----------------------------- */
interface Project {
  category: 'Analista de Sistemas (TI)' | 'Desarrollo Web & Móvil';
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  tech: string[];
}

/* ----------------------------- Data ------------------------------ */
const projects: Project[] = [
  /* ---- Analista de Sistemas – quick-win (≤ 1 semana) ---- */
  {
    category: 'Analista de Sistemas (TI)',
    title: 'Backup Automático de Servidores Windows',
    description:
      'Script PowerShell que comprime, encripta y sube a S3 los respaldos diarios.',
    image:
      'https://images.unsplash.com/photo-1544197135-5dc381b0214e?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/tu-usuario/powershell-server-backup',
    demo: 'https://gist.github.com/tu-usuario',
    tech: ['PowerShell', 'AWS-CLI', 'S3'],
  },
  {
    category: 'Analista de Sistemas (TI)',
    title: 'Informe de Rendimiento con Python + Grafana',
    description:
      'Scraper Prometheus → CSV → panel Grafana con métricas de CPU y RAM.',
    image:
      'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/tu-usuario/performance-report-python',
    demo: 'https://grafana.com/grafana/dashboards/00000',
    tech: ['Python', 'Prometheus', 'Grafana'],
  },
  {
    category: 'Analista de Sistemas (TI)',
    title: 'IaC Básica en AWS con Terraform',
    description:
      'Módulo para levantar VPC, EC2 y RDS en menos de 10 min con variables.',
    image:
      'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/tu-usuario/aws-terraform-starter',
    demo: 'https://registry.terraform.io/modules/tu-usuario/aws-starter',
    tech: ['Terraform', 'AWS', 'CI/CD'],
  },

  /* ------- Desarrollo Web & Móvil (web + 2 juegos mobile) ------- */
  {
    category: 'Desarrollo Web & Móvil',
    title: 'YurForce – Emulador de Consolas Retro',
    description:
      'Core WebAssembly + React UI; guarda estados, gamepad y shaders.',
    image:
      'https://images.unsplash.com/photo-1600891965058-e29b24e7eaa9?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/tu-usuario/yurforce',
    demo: 'https://yurforce-demo.com',
    tech: ['React', 'WebAssembly', 'Vite'],
  },
  {
    category: 'Desarrollo Web & Móvil',
    title: 'Tienda de Alfajores – SoffiaSweetChile',
    description:
      'E-commerce con personalizador de alfajores, Stripe & panel CMS.',
    image:
      'https://images.unsplash.com/photo-1581092338399-f6c0cc4676c2?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/tu-usuario/soffia-sweetchile-store',
    demo: 'https://soffiasweetchile.com',
    tech: ['Next.js', 'Stripe', 'Tailwind', 'CMS'],
  },
  /* … 10 proyectos extra (web & mobile) … */
  {
    category: 'Desarrollo Web & Móvil',
    title: 'Portfolio 3D con Three.js',
    description: 'Experiencia WebGL interactiva con modelos GLTF y rutas SPA.',
    image:
      'https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/tu-usuario/portfolio-threejs',
    demo: 'https://threejs-portfolio.com',
    tech: ['Three.js', 'React', 'Vite'],
  },
  {
    category: 'Desarrollo Web & Móvil',
    title: 'Blog Markdown + Next.js 13',
    description: 'Contentlayer, SEO automático y comentarios vía Giscus.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/tu-usuario/next-mdx-blog',
    demo: 'https://blog-xyz.vercel.app',
    tech: ['Next.js 13', 'MDX', 'Tailwind'],
  },
  {
    category: 'Desarrollo Web & Móvil',
    title: 'Dashboard SaaS Analytics',
    description: 'Recharts + Supabase + TanStack Query en tiempo real.',
    image:
      'https://images.unsplash.com/photo-1551033406-611cf9d87a82?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/tu-usuario/saas-analytics-dashboard',
    demo: 'https://analytics-demo.com',
    tech: ['React', 'Supabase', 'Recharts'],
  },
  {
    category: 'Desarrollo Web & Móvil',
    title: 'API REST Node + Express',
    description: 'Arquitectura hexagonal, JWT Auth y tests con Vitest.',
    image:
      'https://images.unsplash.com/photo-1526378721828-9dcd928c81c5?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/tu-usuario/node-clean-api',
    demo: 'https://node-clean-api.fly.dev',
    tech: ['Node.js', 'Express', 'Vitest'],
  },
  {
    category: 'Desarrollo Web & Móvil',
    title: 'Landing Product-Led SaaS',
    description: 'Animaciones GSAP, A/B testing y hosting en Vercel.',
    image:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da5?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/tu-usuario/product-led-landing',
    demo: 'https://saas-landing.vercel.app',
    tech: ['Next.js', 'GSAP', 'A/B Testing'],
  },
  {
    category: 'Desarrollo Web & Móvil',
    title: 'Auth System + NextAuth',
    description: 'Registro social, 2FA y roles en PostgreSQL.',
    image:
      'https://images.unsplash.com/photo-1498050108023-3f5064d7911f?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/tu-usuario/nextjs-auth-starter',
    demo: 'https://nextjs-auth.vercel.app',
    tech: ['Next.js', 'NextAuth', 'PostgreSQL'],
  },
  {
    category: 'Desarrollo Web & Móvil',
    title: 'Juego Móvil – Memory Match',
    description: 'Expo + React Native con animaciones Lottie y ranking global.',
    image:
      'https://images.unsplash.com/photo-1528712306091-ed0763094c98?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/tu-usuario/memory-match-mobile',
    demo: 'https://expo.dev/@tu-usuario/memory-match',
    tech: ['React Native', 'Expo', 'Firebase'],
  },
  {
    category: 'Desarrollo Web & Móvil',
    title: 'Runner Pixel Game Flutter',
    description: 'Parallax, física Box2D y monetización AdMob.',
    image:
      'https://images.unsplash.com/photo-1517511620798-cec17d428bc0?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/tu-usuario/flutter-runner-game',
    demo: 'https://runner-game.web.app',
    tech: ['Flutter', 'Box2D', 'AdMob'],
  },
  {
    category: 'Desarrollo Web & Móvil',
    title: 'CMS Headless Strapi + Next.js',
    description: 'Blog editable, subida a Cloudinary y ISR.',
    image:
      'https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/tu-usuario/strapi-next-cms',
    demo: 'https://strapi-next-demo.com',
    tech: ['Strapi', 'Next.js', 'Cloudinary'],
  },
  {
    category: 'Desarrollo Web & Móvil',
    title: 'Chat Tiempo Real Socket.io',
    description: 'Rooms privados, notificaciones push y dark mode.',
    image:
      'https://images.unsplash.com/photo-1591696205602-2a3b0595220c?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/tu-usuario/socket-chat',
    demo: 'https://realtime-chat-demo.com',
    tech: ['React', 'Socket.io', 'Vite'],
  },
];

/* ---------------------- Component & Helpers ---------------------- */
const ProjectsPage: React.FC = () => {
  const techFilters = useMemo(
    () => ['All', ...Array.from(new Set(projects.flatMap((p) => p.tech))).sort()],
    [],
  );
  const [filter, setFilter] = useState('All');

  const shownProjects = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.tech.includes(filter))),
    [filter],
  );
  const categories = useMemo(
    () => Array.from(new Set(shownProjects.map((p) => p.category))),
    [shownProjects],
  );

  return (
    <section
      id="projects"
      className="relative text-white overflow-hidden
                 pt-20 xs:pt-20 sm:py-24 px-4 sm:px-6 lg:px-8"
    >
      <ParticleBackground />

      {/* ------------------- Header ------------------- */}
      <div className="relative z-10 max-w-7xl mx-auto text-center mb-14">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Proyectos Profesionales
        </motion.h2>
        <motion.p
          className="mt-4 text-base sm:text-lg text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          +{projects.length}&nbsp;casos de estudio reales con tecnologías de industria.
        </motion.p>
      </div>

      {/* ------------------- Filtros ------------------- */}
      <motion.div
        className="relative z-10 flex gap-3 mb-12 overflow-x-auto
                   scrollbar-thin scrollbar-thumb-cyan-600/50
                   snap-x snap-mandatory px-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {techFilters.map((tech) => (
          <button
            key={tech}
            onClick={() => setFilter(tech)}
            className={`snap-start flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium
                        backdrop-blur-md border border-white/15 transition-all
                        ${filter === tech ? 'bg-cyan-600 text-white shadow-md' : 'bg-white/10 text-gray-200 hover:bg-white/20'}`}
          >
            {tech}
          </button>
        ))}
      </motion.div>

      {/* ------------------- Grid por categoría ------------------- */}
      {categories.map((cat) => (
        <div key={cat} className="relative z-10 mb-20">
          <h3 className="mb-8 text-2xl sm:text-3xl font-semibold text-cyan-300 border-b border-cyan-800 pb-2">
            {cat}
          </h3>

          <div
            className="
              grid gap-8
              grid-cols-1
              xs:grid-cols-1
              sm:grid-cols-2
              md:grid-cols-2
              lg:grid-cols-3
              2xl:grid-cols-4
            "
          >
            {shownProjects
              .filter((p) => p.category === cat)
              .map((project, i) => (
                <Tilt
                  key={project.title}
                  tiltMaxAngleX={8}
                  tiltMaxAngleY={8}
                  glareEnable
                  glareMaxOpacity={0.15}
                  className="rounded-3xl"
                >
                  <motion.div
                    className="group h-full flex flex-col bg-gradient-to-br from-white/5 to-black/20
                               border border-white/10 rounded-3xl overflow-hidden shadow-lg
                               transition-shadow duration-300 hover:shadow-cyan-500/30"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.45 }}
                  >
                    {/* Thumbnail */}
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover sm:h-40 md:h-44 lg:h-48
                                   group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 flex items-center justify-center gap-4
                                      bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-cyan-600/80 hover:bg-cyan-500 transition-colors"
                        >
                          <Github size={20} />
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-cyan-600/80 hover:bg-cyan-500 transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-5 gap-3">
                      <h4 className="text-lg font-semibold">{project.title}</h4>
                      <p className="text-sm text-gray-300 line-clamp-3">{project.description}</p>
                      <div className="mt-auto flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] px-2 py-0.5 rounded-full
                                       bg-white/10 border border-cyan-300 text-cyan-200"
                          >
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
      ))}
    </section>
  );
};

export default ProjectsPage;
