import React from 'react';
import { motion } from 'motion/react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`
        backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6
        shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
        hover:bg-white/10 transition-all duration-300
        hover:border-cyan-400/30 hover:shadow-[0_8px_32px_0_rgba(0,255,255,0.2)]
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;