// src/components/ui/BadgesWithTooltips.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Badges
import AwsSales from '../../assets/badges/aws-sales.png';
import AwsEconomics from '../../assets/badges/aws-economics.png';
import AwsGenai from '../../assets/badges/aws-genai.png';
import AwsTech from '../../assets/badges/aws-tech.png';
import IbmWebdev from '../../assets/badges/ibm-webdev.png';

const badges = [
  { src: AwsSales, alt: 'AWS Sales', info: 'AWS Sales Accredited' },
  { src: AwsEconomics, alt: 'AWS Cloud Economics', info: 'AWS Cloud Economics Essentials' },
  { src: AwsGenai, alt: 'AWS GenAI', info: 'AWS Generative AI Essentials' },
  { src: AwsTech, alt: 'AWS Technical', info: 'AWS Technical Accredited' },
  { src: IbmWebdev, alt: 'IBM WebDev', info: 'IBM Web Development Fundamentals' },
];

const BadgesWithTooltips = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-4 items-center fixed top-[30%] right-6 z-40">
      {badges.map((badge, i) => (
        <motion.div
          key={i}
          onHoverStart={() => setHovered(i)}
          onHoverEnd={() => setHovered(null)}
          className="relative"
          whileHover={{ scale: 1.1 }}
        >
          <img
            src={badge.src}
            alt={badge.alt}
            className="w-12 h-12 rounded-md shadow-md hover:ring-2 hover:ring-cyan-400"
          />
          {hovered === i && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: -20 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-14 top-1/2 -translate-y-1/2 bg-white text-black text-xs font-medium px-3 py-1 rounded-xl shadow-xl backdrop-blur-md whitespace-nowrap"
            >
              {badge.info}
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default BadgesWithTooltips;
