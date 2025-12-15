import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-champagne via-white to-mist overflow-hidden py-24 px-4 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 min-h-[80vh]">
            
            {/* Content Column */}
            <div className="w-full lg:w-[55%] flex flex-col justify-center">
                <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block w-fit px-6 py-2 rounded-full border border-text-primary/10 font-secondary text-xs tracking-[0.3em] uppercase text-text-secondary mb-8 backdrop-blur-sm bg-white/50"
                >
                    Let's Create Together
                </motion.span>
                
                <motion.h2 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="font-primary text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-text-primary leading-[0.85] mb-8"
                >
                    Ready to<br/>
                    <span className="italic text-accent-gold">Elevate</span><br/>
                    Your Brand?
                </motion.h2>

                <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-secondary text-lg md:text-xl text-text-secondary mb-12 max-w-lg leading-relaxed"
                >
                    Transform your vision into reality. We craft digital experiences that 
                    captivate, convert, and leave lasting impressions.
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <motion.button 
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-10 py-5 bg-text-primary text-white rounded-full font-secondary text-sm uppercase tracking-[0.2em] shadow-xl hover:shadow-2xl transition-shadow"
                    >
                        Start Your Project
                    </motion.button>
                    <motion.button 
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-10 py-5 bg-white/80 backdrop-blur-sm text-text-primary rounded-full font-secondary text-sm uppercase tracking-[0.2em] border-2 border-text-primary/10 hover:border-text-primary/30 transition-colors shadow-lg"
                    >
                        View Our Work
                    </motion.button>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex gap-12 mt-16 pt-8 border-t border-text-primary/5"
                >
                    <div>
                        <span className="font-primary text-3xl text-text-primary block">150+</span>
                        <span className="font-secondary text-[10px] uppercase tracking-widest text-text-secondary">Projects</span>
                    </div>
                    <div>
                        <span className="font-primary text-3xl text-text-primary block">98%</span>
                        <span className="font-secondary text-[10px] uppercase tracking-widest text-text-secondary">Satisfaction</span>
                    </div>
                    <div>
                        <span className="font-primary text-3xl text-text-primary block">12Y</span>
                        <span className="font-secondary text-[10px] uppercase tracking-widest text-text-secondary">Experience</span>
                    </div>
                </motion.div>
            </div>

            {/* Bento Image Grid */}
            <div className="w-full lg:w-[45%] h-[500px] md:h-[600px] lg:h-[700px] grid grid-cols-2 grid-rows-3 gap-4">
                <motion.div 
                    initial={{ opacity: 0, x: -100, rotate: -5 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="col-span-1 row-span-2 rounded-2xl overflow-hidden"
                >
                    <img src="/7668778f922038b8918a2a861c163fda.jpg" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="" />
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: -80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="col-span-1 row-span-1 rounded-2xl overflow-hidden"
                >
                    <img src="/861e6c81accd4a89c4204aa1524c006b.jpg" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="" />
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                    className="col-span-1 row-span-1 rounded-2xl overflow-hidden"
                >
                    <img src="/933b8432dfba625d14f66a6c326a303e.jpg" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="" />
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 100, rotate: 3 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="col-span-2 row-span-1 rounded-2xl overflow-hidden"
                >
                    <img src="/6aa51760bf51737de1af412f42e01b63.jpg" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="" />
                </motion.div>
            </div>
        </div>
    </section>
  );
};

export default FinalCTA;
