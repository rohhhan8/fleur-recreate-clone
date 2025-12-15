import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const services = [
  {
    title: "Brand Strategy",
    description: "We define your voice and carve your path in the digital landscape. It's not just about a logo; it's about the feeling you leave behind.",
    tags: ["Research", "Identity", "Positioning"],
    image: "/0654ee3f349bfbcd170756a7accf6769.jpg",
    color: "bg-[#f3e7e9]"
  },
  {
    title: "Visual Design",
    description: "Crafting pixels with purpose. We create immersive visual systems that captivate and convert, ensuring every interaction feels premium.",
    tags: ["UI/UX", "Art Direction", "Motion"],
    image: "/6aa51760bf51737de1af412f42e01b63.jpg",
    color: "bg-[#e3eeff]"
  },
  {
    title: "Development",
    description: "Turning dreams into digital reality. Robust, scalable, and pixel-perfect code that powers your vision without compromise.",
    tags: ["Frontend", "React", "Creative Coding"],
    image: "/b60a2293897606bf51ad2308f27a1e60.jpg",
    color: "bg-[#f0fdf4]"
  },
  {
    title: "Content Creation",
    description: "Stories that resonate. From editorial photography to compelling copy, we fill your frame with substance.",
    tags: ["Photography", "Copywriting", "Video"],
    image: "/4af7b94cc3ed161f31dafd484733eb70.jpg",
    color: "bg-[#fff1eb]"
  }
];

const Card = ({ i, title, description, tags, image, color, progress, range, targetScale }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { amount: 0.5 });
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start']
  });
  
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div 
      ref={cardRef}
      className="h-screen flex items-center justify-center sticky top-0 px-2"
      style={{ zIndex: services.length - i }}
    >
      <motion.div 
        style={{ scale, top: `calc(3% + ${i * 20}px)` }}
        className={`flex flex-col md:flex-row relative h-[85vh] min-h-[600px] w-[98vw] max-w-[1600px] rounded-[2rem] p-4 md:p-10 origin-top overflow-hidden ${color}`}
      >
        <div className="flex flex-col justify-between w-full md:w-[35%] h-full text-text-primary">
          <div>
            <span className="font-secondary text-xs font-bold tracking-widest uppercase opacity-40 mb-4 block">
              0{i + 1}
            </span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-primary italic mb-4 leading-[0.95]">
              {title}
            </h3>
            <p className="text-sm md:text-base font-secondary leading-relaxed opacity-70 max-w-md">
              {description}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-6">
            {tags.map((tag, idx) => (
              <span key={idx} className="px-3 py-1.5 bg-white/50 rounded-full text-[10px] font-secondary uppercase tracking-widest">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative w-full md:w-[65%] h-full rounded-[1.5rem] overflow-hidden md:ml-6 mt-4 md:mt-0">
          <motion.img 
            style={{ scale: imageScale }}
            src={image} 
            alt={title}
            className={`w-full h-full object-cover transition-all duration-1000 origin-center ${isInView ? 'grayscale-0' : 'grayscale'}`}
          />
        </div>
      </motion.div>
    </div>
  );
};

const ServicesSection = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={containerRef} className="relative w-full bg-white">
      <div className="max-w-7xl mx-auto mb-8 md:mb-16 px-4 md:px-12 pt-20">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-secondary text-xs tracking-[0.2em] uppercase text-text-secondary mb-4"
        >
          What We Share
        </motion.h3>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-primary text-5xl md:text-7xl lg:text-8xl text-text-primary leading-[0.9]"
        >
          Crafting <span className="italic text-accent-gold">Identities</span><br/>
          That Resonate
        </motion.h2>
      </div>

      <div className="w-full">
        {services.map((service, i) => {
          const targetScale = 1 - ((services.length - i) * 0.04);
          return (
            <Card 
              key={i} 
              i={i} 
              {...service} 
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
