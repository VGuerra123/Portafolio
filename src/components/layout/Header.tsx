// src/components/layout/Header.tsx
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'backdrop-blur-md bg-black/80 py-2 shadow-md' : 'bg-transparent py-4'
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo animado */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            whileHover={{
              scale: 1.08,
              filter: 'drop-shadow(0 0 12px rgba(164, 97, 255, 0.4))',
            }}
            className={`rounded-full overflow-hidden transition-all ${
              scrolled ? 'w-14 h-14 md:w-16 md:h-16' : 'w-16 h-16 md:w-20 md:h-20'
            }`}
          >
            <img
              src={logo}
              alt="Logo VG"
              className="w-full h-full object-contain transition-all duration-500"
            />
          </motion.div>

          {/* Navegación en desktop */}
          <div className="hidden md:flex items-center space-x-10 text-[1.1rem] font-medium">
            <NavLink href="#formacion">Sobre mí</NavLink>
            <NavLink href="#about">Habilidades Técnicas</NavLink>
            <NavLink href="#projects">Proyectos</NavLink>
            <NavLink href="#contact">Contacto</NavLink>
            <div className="flex items-center space-x-4">
              <SocialLink href="https://github.com" icon={<Github size={22} />} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={22} />} />
              <SocialLink href="mailto:your@email.com" icon={<Mail size={22} />} />
            </div>
          </div>

          {/* Botón menú mobile */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </motion.button>
        </div>

        {/* Menú mobile */}
        <motion.div
          initial="closed"
          animate={isMenuOpen ? 'open' : 'closed'}
          variants={menuVariants}
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}
        >
          <div className="flex flex-col space-y-4 text-lg font-medium">
            <MobileNavLink href="#formacion" onClick={() => setIsMenuOpen(false)}>
              Sobre mí
            </MobileNavLink>
            <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>
              Habilidades Técnicas
            </MobileNavLink>
            <MobileNavLink href="#projects" onClick={() => setIsMenuOpen(false)}>
              Proyectos
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contacto
            </MobileNavLink>
            <div className="flex items-center space-x-4 pt-4">
              <SocialLink href="https://github.com" icon={<Github size={22} />} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={22} />} />
              <SocialLink href="mailto:your@email.com" icon={<Mail size={22} />} />
            </div>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    className="text-gray-300 hover:text-white transition-colors relative group"
    whileHover={{ scale: 1.08 }}
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent-primary transform scale-x-0 transition-transform group-hover:scale-x-100" />
  </motion.a>
);

const MobileNavLink = ({
  href,
  children,
  onClick
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <motion.a
    href={href}
    className="text-gray-300 hover:text-white transition-colors block py-2"
    whileHover={{ x: 10 }}
    onClick={onClick}
  >
    {children}
  </motion.a>
);

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="text-gray-400 hover:text-white transition-colors"
  >
    {icon}
  </motion.a>
);
