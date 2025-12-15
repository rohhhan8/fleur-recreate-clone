import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const FloatingImage = ({ src, isVisible, mouseX, mouseY, rotation }) => {
  // Slower spring for "drag" effect
  const springConfig = { stiffness: 100, damping: 20, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);
  const rotate = useSpring(rotation, { stiffness: 150, damping: 20 });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 w-[300px] h-[400px] pointer-events-none z-[100] overflow-hidden rounded-lg shadow-2xl"
          style={{
            x,
            y,
            translateX: '-50%',
            translateY: '-50%',
            rotate,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <img
            src={src}
            alt="Project Preview"
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ProjectItem = ({ title, imageSrc, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const rotation = useMotionValue(0);
  const prevX = useRef(0);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);

    // Calculate velocity for rotation
    const dx = e.clientX - prevX.current;
    const rotationAmount = Math.max(-10, Math.min(10, dx * 0.5)); // Clamp rotation
    rotation.set(rotationAmount);
    prevX.current = e.clientX;
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotation.set(0);
  };

  return (
    <>
      <motion.div
        className="relative py-8 border-b border-text-primary/10 cursor-pointer group"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{ x: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="font-secondary text-sm text-text-secondary opacity-50">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="font-primary text-4xl md:text-6xl italic text-text-primary group-hover:text-accent-gold transition-colors duration-300">
              {title}
            </h3>
          </div>
          <motion.span
            className="font-secondary text-xs tracking-widest text-text-secondary uppercase"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
            transition={{ duration: 0.3 }}
          >
            View Project →
          </motion.span>
        </div>
      </motion.div>

      <FloatingImage
        src={imageSrc}
        isVisible={isHovered}
        mouseX={mouseX}
        mouseY={mouseY}
        rotation={rotation}
      />
    </>
  );
};

export default ProjectItem;
