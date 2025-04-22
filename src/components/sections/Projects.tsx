import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

// 6 proyectos full‑stack profesionales y de alto impacto
const projects = [
  {
    title: "Dashboard Métricas SEO",
    description: "Panel interactivo con gráficos de rendimiento SEO usando Google Analytics API y Chart.js.",
    image: "https://images.unsplash.com/photo-1581093588401-0b16d873e08b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/tu-usuario/seo-dashboard",
    demo: "https://seo-dashboard-demo.com",
    tech: ["React", "Node.js", "Chart.js", "Google Analytics API"],
  },
  {
    title: "Autenticación OAuth2",
    description: "Microservicio de login seguro con Passport.js, JWT y Google/Facebook OAuth2.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/tu-usuario/oauth-service",
    demo: "https://oauth-service-demo.com",
    tech: ["Node.js", "Express", "Passport.js", "JWT"],
  },
  {
    title: "Sistema de Reservas",
    description: "SPA con calendario FullCalendar y backend REST en Express + MongoDB.",
    image: "https://images.unsplash.com/photo-1586281380340-49a2a114607b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/tu-usuario/booking-app",
    demo: "https://booking-app-demo.com",
    tech: ["React", "FullCalendar", "Express", "MongoDB"],
  },
  {
    title: "Generador de Facturas PDF",
    description: "Función serverless en AWS Lambda que genera facturas en PDF desde datos JSON.",
    image: "https://images.unsplash.com/photo-1581091012184-7a11bfedeafd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/tu-usuario/pdf-invoice-generator",
    demo: "https://pdf-invoice-demo.com",
    tech: ["AWS Lambda", "Node.js", "PDFKit", "Serverless"],
  },
  {
    title: "Checkout con Stripe",
    description: "Integración de pagos con Stripe Checkout y webhooks para suscripciones.",
    image: "https://images.unsplash.com/photo-1581091215365-2c9a49b7f584?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/tu-usuario/stripe-checkout",
    demo: "https://stripe-checkout-demo.com",
    tech: ["React", "Stripe", "Express", "Webhooks"],
  },
  {
    title: "Chatbot FAQ con NLP",
    description: "Chatbot basado en Dialogflow para respuestas automáticas de preguntas frecuentes.",
    image: "https://images.unsplash.com/photo-1581092795365-99c3430fd6b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/tu-usuario/nlp-chatbot",
    demo: "https://nlp-chatbot-demo.com",
    tech: ["React", "Dialogflow", "Firebase Functions"],
  },
];

const techFilters = [
  'All',
  ...Array.from(new Set(projects.flatMap(p => p.tech)))
];

export const Projects = () => {
  const [filter, setFilter] = useState<string>('All');
  const filtered = filter === 'All' ? projects : projects.filter(p => p.tech.includes(filter));

  return (
    <section
      id="projects"
      className="relative w-full py-24 px-6 overflow-hidden text-white bg-gradient-to-b from-transparent to-black/30 backdrop-blur-sm transition-all duration-1000 ease-in-out"
    >
      {/* Overlay idéntico a Hero.tsx */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 backdrop-blur-sm z-0" />

      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Título */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold mb-4">Proyectos Profesionales</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Seis proyectos de alto impacto para tu portafolio.
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
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === tech
                  ? 'bg-cyan-500 text-white shadow-lg'
                  : 'bg-white/20 text-gray-200 hover:bg-white/30'
              }`}
            >
              {tech}
            </button>
          ))}
        </motion.div>

        {/* Grid de cards con Tilt y animaciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((project, index) => (
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
                {/* Imagen y overlay de enlaces */}
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

                {/* Contenido de la card */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold group-hover:text-cyan-400 transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20">
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
    </section>
  );
};
