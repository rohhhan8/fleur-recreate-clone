import React, { useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

const MagneticWrapper = ({ children, className = '', strength = 0.3 }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useSpring(0, { stiffness: 150, damping: 15 });
  const y = useSpring(0, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    // Check if within magnetic threshold (15px buffer around element)
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
    const threshold = Math.max(width, height) / 2 + 15;
    
    if (distance < threshold) {
      x.set(distanceX * strength);
      y.set(distanceY * strength);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{ x, y }}
      className={`inline-block cursor-pointer ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default MagneticWrapper;
