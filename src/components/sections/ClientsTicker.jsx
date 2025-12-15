import React from 'react';
import { motion } from 'framer-motion';

const clients = ["VOGUE", "CHANEL", "DIOR", "CARTIER", "PRADA", "HERMES", "GUCCI", "LOUIS VUITTON"];

const ClientsTicker = () => {
    return (
        <section className="relative w-full py-20 md:py-28 bg-white overflow-hidden border-t border-black/5">
            <div className="text-center mb-12">
                <span className="font-secondary text-xs tracking-[0.2em] uppercase text-text-secondary block mb-4">
                    Trusted By
                </span>
                <h2 className="font-primary text-3xl md:text-4xl text-text-primary">
                    Industry <span className="italic text-accent-gold">Leaders</span>
                </h2>
            </div>
            
            <div className="relative w-full overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
                
                <motion.div 
                    className="flex items-center gap-16 md:gap-24 whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 6 }}
                >
                    {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
                        <div key={i} className="flex items-center gap-16 md:gap-24">
                            <span className="font-primary text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary/10 hover:text-text-primary/60 transition-colors duration-500 cursor-default select-none tracking-tighter">
                                {client}
                            </span>
                            <span className="text-text-primary/10 text-3xl">✦</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ClientsTicker;
