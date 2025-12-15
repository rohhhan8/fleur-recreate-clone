import React from 'react';
import { motion } from 'framer-motion';

const StructuralFrame = ({ 
  children, 
  className = '', 
  stacked = false,
  onClick = null,
}) => {
  return (
    <motion.div
      className={`relative group ${className}`}
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
    >
      {/* Stacked Effect - Background "paper" */}
      {stacked && (
        <div 
          className="absolute inset-0 bg-white border border-text-primary/20 rounded-lg -rotate-2 -z-10 translate-x-2 translate-y-2"
          aria-hidden="true"
        />
      )}
      
      {/* Main Frame */}
      <div 
        className={`
          relative
          bg-white/95 
          backdrop-blur-md 
          border border-text-primary/40 
          rounded-lg 
          p-6 md:p-8
          transition-all duration-300 ease-out
          group-hover:border-accent-gold
          group-hover:shadow-2xl
        `}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default StructuralFrame;
