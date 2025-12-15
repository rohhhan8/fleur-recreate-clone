import React from 'react';
import { motion } from 'framer-motion';

const RevealOnScroll = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }} // DEBUG: Forced visibility
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;
