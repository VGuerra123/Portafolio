// src/components/sections/Projects.tsx
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Task Management Platform",
    description: "Colaboración en tiempo real, arrastrar y soltar tareas como Trello, ideal para equipos.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "https://github.com",
    demo: "https://demo.com",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
  },
  {
    title: "E-commerce Platform",
    description: "Plataforma de compras completa con panel de administración, pagos y gestión de pedidos.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "https://github.com",
    demo: "https://demo.com",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
  },
  {
    title: "Online Learning Platform",
    description: "Plataforma de aprendizaje con videos, seguimiento de progreso y exámenes interactivos.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "https://github.com",
    demo: "https://demo.com",
    tech: ["React", "Django", "AWS S3", "PostgreSQL"],
  },
  {
    title: "Technical Blog Platform",
    description: "Blog con soporte Markdown, CMS integrado y diseño minimalista para desarrolladores.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "https://github.com",
    demo: "https://demo.com",
    tech: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "Dashboard visual con datos en tiempo real y widgets personalizados.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "https://github.com",
    demo: "https://demo.com",
    tech: ["React", "D3.js", "Node.js", "WebSocket"],
  },
  {
    title: "Project Showcase Platform",
    description: "Red social para desarrolladores con likes, comentarios y perfiles.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "https://github.com",
    demo: "https://demo.com",
    tech: ["React", "GraphQL", "Node.js", "MongoDB"],
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white relative overflow-hidden"
    >
      {/* Fondos */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute w-[80%] h-[80%] top-1/3 left-1/3 bg-cyan-500/10 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute w-[80%] h-[80%] bottom-1/3 right-1/4 bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-500" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl font-bold mb-6 animate-gradient-text">Proyectos Destacados</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Una selección de mis trabajos recientes usando tecnologías modernas y soluciones reales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg border border-white/10 hover:shadow-cyan-500/20 transition-transform duration-300 hover:-translate-y-2 group"
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
            >
              <div className="relative">
                <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:text-cyan-400 transition">
                    <Github size={22} />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:text-purple-400 transition">
                    <ExternalLink size={22} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-dark-300/40 text-sm px-3 py-1 rounded-full text-gray-300 border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
