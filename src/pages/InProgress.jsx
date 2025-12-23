import React from 'react';
import { motion } from 'framer-motion';
import { PiGearThin } from "react-icons/pi";

const InProgress = ({ title }) => {
  return (
    <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "-100%" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} // smooth easeOut
        className="relative w-full min-h-[calc(100vh-6rem)] bg-champagne flex flex-col items-center justify-center overflow-hidden"
    >
        {/* ANIMATED CONTENT */}
        <div className="relative z-10 text-center">
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-12"
            >
                <div className="w-32 h-32 rounded-full border border-dashed border-text-primary/20 flex items-center justify-center relative">
                    <PiGearThin className="text-5xl text-accent-gold animate-spin-slow" />
                    <div className="absolute inset-0 rounded-full border border-text-primary/5 animate-ping-slow"></div>
                </div>
            </motion.div>

            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-primary text-6xl md:text-8xl text-text-primary mb-6"
            >
                {title}
            </motion.h1>
            
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="overflow-hidden h-8"
            >
                <motion.p 
                    animate={{ y: ["0%", "-100%"] }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                    className="font-secondary text-sm uppercase tracking-[0.3em] text-text-secondary"
                >
                    Work in Progress<br/>
                    Coming Soon
                </motion.p>
            </motion.div>
        </div>

        {/* BACKGROUND DECORATION */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-20 right-20 w-64 h-64 bg-accent-gold/20 rounded-full blur-3xl mix-blend-multiply filter animate-blob"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-mist/30 rounded-full blur-3xl mix-blend-multiply filter animate-blob animation-delay-2000"></div>
        </div>
    </motion.div>
  );
};

export default InProgress;
