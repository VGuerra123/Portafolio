// src/components/sections/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Profile from '../../assets/Profile.png';

// Importación de insignias desde la carpeta de assets
import AwsSales from '../../assets/badges/aws-sales.png';
import AwsEconomics from '../../assets/badges/aws-economics.png';
import AwsGenai from '../../assets/badges/aws-genai.png';
import AwsTech from '../../assets/badges/aws-tech.png';
import IbmWebdev from '../../assets/badges/ibm-webdev.png';

export const Hero: React.FC = () => {
  // Variantes básicas para animaciones de contenedores y textos
  const containerVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const textVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  // Variante para el borde pulsante de la imagen
  const pulseVariant = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.8, 1, 0.8],
      transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
    }
  };

  // Anillo giratorio alrededor de la imagen con acento en electric blue
  const swirlingRingVariant = {
    animate: {
      rotate: 360,
      transition: { duration: 20, repeat: Infinity, ease: 'linear' }
    }
  };

  // Variante para elementos flotantes (movimiento vertical suave)
  const floatVariant = {
    animate: {
      y: [0, -25, 0],
      transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
    }
  };

  // Variante para parpadeo de logos e insignias con mayor contraste
  const blinkVariant = {
    animate: {
      opacity: [1, 0.2, 1],
      transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' }
    }
  };

  // Variante para botón CTA con efecto de brillo "neon"
  const buttonVariant = {
    hover: {
      scale: 1.15,
      boxShadow: "0px 0px 15px rgba(255,255,255,1)",
      transition: { duration: 0.3 },
      backgroundPosition: ["0% 50%", "100% 50%"]
    }
  };

  // Variante para el indicador de scroll (rebote)
  const scrollIndicatorVariant = {
    animate: {
      y: [0, -12, 0],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    }
  };

  // Overlay radial pulsante para el fondo
  const epicGlowVariant = {
    animate: {
      opacity: [0.6, 1, 0.6],
      transition: { duration: 10, repeat: Infinity, ease: "easeInOut" }
    }
  };

  // Variante para destellos (sparkles)
  const sparkleVariant = {
    animate: {
      opacity: [0, 1, 0],
      scale: [0.8, 1.2, 0.8],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    }
  };

  // Variante para pequeñas partículas animadas en el fondo
  const particleVariant = {
    animate: {
      x: [0, 20, 0],
      y: [0, 15, 0],
      opacity: [0.5, 1, 0.5],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <section 
      id="hero" 
      className="relative overflow-hidden min-h-screen pt-48 pb-20 px-6 text-white" 
      style={{ perspective: "1200px" }}
    >
      {/* Fondo animado principal: degradado radical */}
      <motion.div
        className="absolute inset-0 z-[-5]"
        style={{
          background: "linear-gradient(270deg, #0D1117, #161B22, #0D1117)",
          backgroundSize: "200% 200%"
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Overlay radial pulsante en acento electric blue */}
      <motion.div
        className="absolute inset-0 z-[-4]"
        style={{
          background: "radial-gradient(circle at center, rgba(0,181,255,0.2), transparent 70%)"
        }}
        variants={epicGlowVariant}
        animate="animate"
      />

      {/* Capa adicional 3D con ligera rotación para dar profundidad */}
      <motion.div
        className="absolute inset-0 z-[-3]"
        style={{ 
          perspective: "1200px", 
          transformStyle: "preserve-3d",
          background: "linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.35))" 
        }}
        animate={{ rotateY: [0, 15, 0] }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Partículas animadas en el fondo */}
      <div className="absolute inset-0 z-[-2] pointer-events-none">
        <motion.div 
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{ top: "20%", left: "15%" }}
          variants={particleVariant}
          animate="animate"
        />
        <motion.div 
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{ top: "50%", left: "70%" }}
          variants={particleVariant}
          animate="animate"
          transition={{ delay: 1, duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{ top: "80%", left: "30%" }}
          variants={particleVariant}
          animate="animate"
          transition={{ delay: 0.5, duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{ top: "35%", left: "85%" }}
          variants={particleVariant}
          animate="animate"
          transition={{ delay: 0.7, duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{ top: "65%", left: "45%" }}
          variants={particleVariant}
          animate="animate"
          transition={{ delay: 0.3, duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Sparkle effects: destellos brillantes */}
      <motion.div 
        className="absolute w-3 h-3 bg-white rounded-full"
        style={{ top: "10%", left: "50%" }}
        variants={sparkleVariant}
        animate="animate"
      />
      <motion.div 
        className="absolute w-3 h-3 bg-white rounded-full"
        style={{ top: "75%", left: "20%" }}
        variants={sparkleVariant}
        animate="animate"
        transition={{ delay: 1 }}
      />
      <motion.div 
        className="absolute w-3 h-3 bg-white rounded-full"
        style={{ top: "40%", left: "80%" }}
        variants={sparkleVariant}
        animate="animate"
        transition={{ delay: 0.5 }}
      />

      {/* Elementos decorativos flotantes extras */}
      <motion.div
        className="absolute top-10 left-10 w-16 h-16 bg-white opacity-25 rounded-full"
        variants={floatVariant}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 right-20 w-12 h-12 bg-white opacity-25 rounded-full"
        variants={floatVariant}
        animate="animate"
        transition={{ delay: 1, duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-10 h-10 bg-white opacity-25 rounded-full"
        variants={floatVariant}
        animate="animate"
        transition={{ delay: 0.5, duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-8 h-8 bg-white opacity-25 transform rotate-45"
        variants={floatVariant}
        animate="animate"
        transition={{ delay: 0.3, duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Capas de fondo adicionales para mayor profundidad */}
      <motion.div
        className="absolute -top-1/3 -left-1/3 w-[120%] h-[120%] rounded-full blur-[200px]"
        style={{ background: "rgba(255,255,255,0.12)" }}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-1/3 -right-1/3 w-[140%] h-[140%] rounded-full blur-[220px]"
        style={{ background: "rgba(255,255,255,0.06)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Contenido principal */}
      <div className="container mx-auto max-w-5xl relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Imagen de perfil con anillo giratorio, borde pulsante y botón de WhatsApp */}
        <motion.div
          className="relative w-72 h-72 mx-auto group order-1 lg:order-2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {/* Anillo giratorio en tono electric blue */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#00D4FF] opacity-60"
            variants={swirlingRingVariant}
            animate="animate"
          />
          {/* Borde pulsante */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-white/20"
            variants={pulseVariant}
            animate="animate"
          />
          <motion.div
            className="absolute inset-0 rounded-full blur-2xl opacity-40"
            style={{
              background: "linear-gradient(270deg, #0D1117, #161B22, #0D1117)",
              backgroundSize: "200% 200%"
            }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-white/20 shadow-2xl group-hover:scale-110 transition-transform duration-500">
            <img
              src={Profile}
              alt="Foto de perfil"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          {/* Botón de WhatsApp */}
          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute bottom-10 right-10 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
              alt="WhatsApp" 
              className="w-6 h-6"
            />
          </a>
        </motion.div>

        {/* Sección de textos: nombre y descripción personalizada */}
        <motion.div
          className="flex flex-col gap-6 text-left order-2 lg:order-1 relative z-20"
          variants={containerVariant}
          initial="hidden"
          animate="visible"
        >
          {/* Solo se muestra el nombre */}
          <motion.h1
            className="whitespace-nowrap text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-2xl"
            variants={textVariant}
          >
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#A259FF] bg-clip-text text-transparent">
              Víctor Guerra Zavala
            </span>
          </motion.h1>
          <motion.p
            className="text-lg text-gray-200 max-w-xl leading-relaxed"
            variants={textVariant}
            transition={{ delay: 0.2 }}
          >
            Analista de Sistemas y Desarrollador Web. Con un enfoque preciso y detallista, combino diseño intuitivo y código limpio para crear soluciones digitales que marcan la diferencia. Estoy listo para aportar en proyectos innovadores y seguir creciendo profesionalmente.
          </motion.p>
          <motion.button
            className="mt-4 inline-block px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#00A0E3] rounded-full font-semibold text-white bg-[length:200%_auto] transition-all"
            variants={buttonVariant}
            whileHover="hover"
            transition={{ type: "spring", stiffness: 300 }}
          >
            Ver Proyectos
          </motion.button>
        </motion.div>
      </div>

      {/* Sección combinada para Certificaciones y Herramientas & Tecnologías */}
      <div className="mt-16 max-w-4xl mx-auto relative z-10 flex flex-col md:flex-row gap-8 justify-center items-start">
        {/* Contenedor de Certificaciones */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.div
            className="bg-gray-900/70 backdrop-blur-md border border-gray-700 p-6 rounded-2xl shadow-2xl transition-transform duration-300 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-sm text-gray-300 uppercase tracking-wide mb-1">Insignias</h4>
            <div className="flex justify-center items-center gap-4">
              <motion.img
                src={AwsSales}
                alt="Insignia1"
                className="h-16"
                variants={blinkVariant}
                animate="animate"
              />
              <motion.img
                src={AwsEconomics}
                alt="Insignia2"
                className="h-16"
                variants={blinkVariant}
                animate="animate"
              />
              <motion.img
                src={AwsGenai}
                alt="Insignia3"
                className="h-16"
                variants={blinkVariant}
                animate="animate"
              />
              <motion.img
                src={AwsTech}
                alt="Insignia4"
                className="h-16"
                variants={blinkVariant}
                animate="animate"
              />
              <motion.img
                src={IbmWebdev}
                alt="Insignia5"
                className="h-16 rounded-lg"
                variants={blinkVariant}
                animate="animate"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Contenedor de Herramientas & Tecnologías con carrusel */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <motion.div
            className="bg-gray-900/70 backdrop-blur-md border border-gray-700 p-6 rounded-2xl shadow-2xl transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-sm text-gray-300 uppercase tracking-wide mb-1 text-center">Herramientas & Tecnologías</h4>
            {/* Carrusel */}
            <div className="overflow-hidden">
              <motion.div
                className="flex items-center gap-8 whitespace-nowrap"
                animate={{ x: "-50%" }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity }}
              >
                {/* Primer grupo de logos */}
                <>
                  <motion.img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                    alt="HTML5"
                    className="h-16"
                    variants={blinkVariant}
                    animate="animate"
                  />
                  <motion.img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                    alt="CSS3"
                    className="h-16"
                    variants={blinkVariant}
                    animate="animate"
                  />
                  <motion.img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                    alt="JavaScript"
                    className="h-16 rounded-lg"
                    variants={blinkVariant}
                    animate="animate"
                  />
                  <motion.img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    alt="React"
                    className="h-16"
                    variants={blinkVariant}
                    animate="animate"
                  />
                  <motion.img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                    alt="Node.js"
                    className="h-16"
                    variants={blinkVariant}
                    animate="animate"
                  />
                  <motion.img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                    alt="Python"
                    className="h-16"
                    variants={blinkVariant}
                    animate="animate"
                  />
                  <motion.img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                    alt="GitHub"
                    className="h-16"
                    variants={blinkVariant}
                    animate="animate"
                  />
                  <motion.img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
                    alt="AWS"
                    className="h-16"
                    variants={blinkVariant}
                    animate="animate"
                  />
                  <motion.img
                    src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
                    alt="MongoDB"
                    className="h-16"
                    variants={blinkVariant}
                    animate="animate"
                  />
                  <motion.img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
                    alt="PostgreSQL"
                    className="h-16"
                    variants={blinkVariant}
                    animate="animate"
                  />
                  <motion.img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
                    alt="PHP"
                    className="h-16"
                    variants={blinkVariant}
                    animate="animate"
                  />
                  <motion.img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg"
                    alt="Docker"
                    className="h-16"
                    variants={blinkVariant}
                    animate="animate"
                  />
                  <motion.img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
                    alt="TypeScript"
                    className="h-16"
                    variants={blinkVariant}
                    animate="animate"
                  />
                  <motion.img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg"
                    alt="GraphQL"
                    className="h-16"
                    variants={blinkVariant}
                    animate="animate"
                  />
                </>
                {/* Grupo duplicado para carrusel infinito */}
                <>
                  <motion.img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                    alt="HTML5"
                    className="h-16"
                    variants={blinkVariant}
                    animate="animate"
                  />
                  <motion.img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                    alt="CSS3"
                    className="h-16"
                    variants={blinkVariant}
                    animate="animate"
                  />
                  <motion.img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                    alt="JavaScript"
                    className="h-16 rounded-lg"
                    variants={blinkVariant}
                    animate="animate"
                  />
                  <motion.img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    alt="React"
                    className="h-16"
                    variants={blinkVariant}
                    animate="animate"
                  />
                  <motion.img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                    alt="Node.js"
                    className="h-16"
                    variants={blinkVariant}
                    animate="animate"
                  />
                  <motion.img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                    alt="Python"
                    className="h-16"
                    variants={blinkVariant}
                    animate="animate"
                  />
                  <motion.img
                    src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
                    alt="MongoDB"
                    className="h-16"
                    variants={blinkVariant}
                    animate="animate"
                  />
                  <motion.img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
                    alt="PostgreSQL"
                    className="h-16"
                    variants={blinkVariant}
                    animate="animate"
                  />
                  <motion.img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
                    alt="PHP"
                    className="h-16"
                    variants={blinkVariant}
                    animate="animate"
                  />
                  <motion.img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg"
                    alt="Docker"
                    className="h-16"
                    variants={blinkVariant}
                    animate="animate"
                  />
                  <motion.img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
                    alt="TypeScript"
                    className="h-16"
                    variants={blinkVariant}
                    animate="animate"
                  />
                  <motion.img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg"
                    alt="GraphQL"
                    className="h-16"
                    variants={blinkVariant}
                    animate="animate"
                  />
                </>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de "Scroll Down" animado */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        variants={scrollIndicatorVariant}
        animate="animate"
      >
        <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
        <p className="text-white text-sm mt-2">Scroll Down</p>
      </motion.div>
    </section>
  );
};

export default Hero;
