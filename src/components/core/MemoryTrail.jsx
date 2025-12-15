import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const trailImages = [
  'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=300&q=80', // Wedding ring
  'https://images.unsplash.com/photo-1518621845118-2dfe0f7416b3?w=300&q=80', // White rose
  'https://images.unsplash.com/photo-1519741497674-611481863552?w=300&q=80', // Lace detail
  'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=300&q=80', // Champagne glass
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80', // Candlelight
];

const PhotoCard = ({ id, x, y, imageSrc, rotation, onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete(id);
    }, 1600);
    return () => clearTimeout(timer);
  }, [id, onComplete]);

  return (
    <motion.div
      className="fixed pointer-events-none z-10"
      style={{
        left: x,
        top: y,
        translateX: '-50%',
        translateY: '-50%',
      }}
      initial={{ 
        scale: 0.5, 
        opacity: 0, 
        rotate: rotation 
      }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        rotate: rotation,
      }}
      exit={{ 
        opacity: 0, 
        y: 20,
        scale: 0.9,
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 25,
      }}
    >
      <div 
        className="w-[120px] bg-white p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <img 
          src={imageSrc} 
          alt="Memory" 
          className="w-full aspect-[4/5] object-cover"
        />
      </div>
    </motion.div>
  );
};

const MemoryTrail = () => {
  const [cards, setCards] = useState([]);
  const lastPosition = useRef({ x: 0, y: 0 });
  const cardId = useRef(0);

  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e;
    const dx = clientX - lastPosition.current.x;
    const dy = clientY - lastPosition.current.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > 80) {
      lastPosition.current = { x: clientX, y: clientY };
      
      const randomImage = trailImages[Math.floor(Math.random() * trailImages.length)];
      const randomRotation = Math.random() * 30 - 15;

      const newCard = {
        id: cardId.current++,
        x: clientX,
        y: clientY,
        imageSrc: randomImage,
        rotation: randomRotation,
      };

      setCards((prev) => [...prev, newCard]);
    }
  }, []);

  const handleCardComplete = useCallback((id) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <AnimatePresence>
      {cards.map((card) => (
        <PhotoCard
          key={card.id}
          id={card.id}
          x={card.x}
          y={card.y}
          imageSrc={card.imageSrc}
          rotation={card.rotation}
          onComplete={handleCardComplete}
        />
      ))}
    </AnimatePresence>
  );
};

export default MemoryTrail;
