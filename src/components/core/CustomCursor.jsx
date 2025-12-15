import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState("");
  
  // Use MotionValues for high-performance updates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth out the movement
  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHoverStart = (e) => {
      const target = e.target.closest('a, button, .cursor-hover');
      if (target) {
        setIsHovered(true);
        if (target.dataset.cursorText) {
          setHoverText(target.dataset.cursorText);
        }
      }
    };

    const handleHoverEnd = () => {
      setIsHovered(false);
      setHoverText("");
    };

    window.addEventListener('mousemove', moveCursor);
    // Use capture phase to catch all interactions or just standard delegation
    // Simple approach: Add listeners to window that check targets
    window.addEventListener('mouseover', handleHoverStart);
    window.addEventListener('mouseout', handleHoverEnd);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHoverStart);
      window.removeEventListener('mouseout', handleHoverEnd);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center text-[10px] font-secondary font-bold tracking-widest text-text-primary ${
            isHovered 
            ? 'w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20' 
            : 'w-3 h-3 border border-text-primary mix-blend-difference'
        }`}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%', // Centering
        }}
        animate={{
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        {isHovered && hoverText && (
            <span className="opacity-80">{hoverText}</span>
        )}
      </motion.div>
    </>
  );
};

export default CustomCursor;
