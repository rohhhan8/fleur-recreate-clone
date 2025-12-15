import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticNav = ({ children, className = '' }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    setPosition({ x: middleX * 0.1, y: middleY * 0.1 }); // 0.1 is the magnetic strength
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={`cursor-pointer ${className}`} // cursor-pointer ensures events fire
      role="button"
      tabIndex={0}
    >
      {children}
    </motion.div>
  );
};

export default MagneticNav;
