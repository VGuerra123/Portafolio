import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/5 backdrop-blur-md border-t border-white/10 text-white py-10 px-6"
    >
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-400 text-sm text-center md:text-left">
          © {new Date().getFullYear()} Víctor Guerra Zavala. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-6">
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={22} />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={22} />
          </motion.a>
          <motion.a
            href="mailto:your@email.com"
            className="text-gray-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={22} />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
};
