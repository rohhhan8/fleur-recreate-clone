import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { label: "UX Research", value: 92, color: "bg-[#cfa878]" },
    { label: "Brand Strategy", value: 85, color: "bg-text-secondary" },
    { label: "Web Design", value: 98, color: "bg-text-primary" },
    { label: "Development", value: 95, color: "bg-[#e3eeff]" } // Using Mist Blue for contrast
];

const ProcessStats = () => {
  return (
    <section className="relative w-full py-24 md:py-32 bg-white px-4 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
            
            {/* LEFT: CONTENT */}
            <div className="w-full md:w-1/2">
                <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="font-secondary text-xs tracking-[0.2em] uppercase text-text-secondary block mb-6"
                >
                    How We Help
                </motion.span>
                
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font-primary text-5xl md:text-7xl text-text-primary leading-[0.9] mb-8"
                >
                    Data-Driven <br/>
                    <span className="italic text-accent-gold">Creativity</span>
                </motion.h2>

                <p className="font-secondary text-text-secondary leading-relaxed mb-8 max-w-md">
                    We don't just guess; we engineer success. By blending aesthetics with analytics, we ensure your digital presence performs as beautifully as it looks. 
                    From user journey mapping to conversion optimization, every pixel has a purpose.
                </p>

                <div className="flex gap-12 mt-12 border-t border-black/10 pt-8">
                   <div>
                        <span className="font-primary text-4xl block mb-1">45+</span>
                        <span className="font-secondary text-xs uppercase tracking-widest text-text-secondary">Awards Won</span>
                   </div>
                   <div>
                        <span className="font-primary text-4xl block mb-1">120+</span>
                        <span className="font-secondary text-xs uppercase tracking-widest text-text-secondary">Projects Launched</span>
                   </div>
                </div>
            </div>

            {/* RIGHT: ANIMATED CHARTS */}
            <div className="w-full md:w-1/2 flex flex-col justify-center gap-8">
                {stats.map((stat, i) => (
                    <div key={i} className="w-full">
                        <div className="flex justify-between mb-2">
                             <span className="font-secondary text-sm font-bold uppercase tracking-wide text-text-primary">{stat.label}</span>
                             <span className="font-secondary text-sm text-text-secondary">{stat.value}%</span>
                        </div>
                        <div className="w-full h-1 bg-black/5 rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: `${stat.value}%` }}
                                transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                                className={`h-full rounded-full ${stat.color === 'bg-[#e3eeff]' ? 'bg-blue-200' : stat.color}`} 
                            />
                        </div>
                    </div>
                ))}

                {/* VISUAL ELEMENT */}
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-8 p-6 bg-champagne/40 rounded-2xl border border-white/50 backdrop-blur-sm"
                >
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-primary italic text-xl">Monthly Growth</span>
                        <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            <div className="w-2 h-2 rounded-full bg-red-400 opacity-20"></div>
                        </div>
                    </div>
                    {/* Dummy Chart bars */}
                    <div className="flex items-end justify-between h-24 gap-2">
                        {[40, 65, 45, 80, 55, 90, 75].map((h, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ height: 0 }}
                                whileInView={{ height: `${h}%` }}
                                transition={{ delay: 0.6 + (idx * 0.05), duration: 0.8 }}
                                className="w-full bg-text-primary/10 hover:bg-text-primary/80 transition-colors rounded-t-sm"
                            ></motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

        </div>
    </section>
  );
};

export default ProcessStats;
