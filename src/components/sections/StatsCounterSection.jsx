import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
    { number: 150, suffix: "+", label: "Projects Delivered" },
    { number: 98, suffix: "%", label: "Client Satisfaction" },
    { number: 45, suffix: "+", label: "Design Awards" },
    { number: 12, suffix: "Y", label: "Years Experience" },
];

const CountUp = ({ end, suffix, duration = 2 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    useEffect(() => {
        if (isInView) {
            let start = 0;
            const increment = end / (duration * 60);
            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 1000 / 60);
            return () => clearInterval(timer);
        }
    }, [isInView, end, duration]);
    
    return <span ref={ref}>{count}{suffix}</span>;
};

const StatsCounterSection = () => {
  return (
    <section className="relative w-full py-24 md:py-32 bg-white px-4 md:px-12 border-y border-black/5">
        <div className="max-w-7xl mx-auto">
            
            {/* HEADER */}
            <div className="text-center mb-20">
                <span className="font-secondary text-xs tracking-[0.2em] uppercase text-text-secondary block mb-4">
                    By The Numbers
                </span>
                <h2 className="font-primary text-4xl md:text-6xl text-text-primary">
                    Our <span className="italic text-accent-gold">Impact</span>
                </h2>
            </div>

            {/* STATS GRID */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {stats.map((stat, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        className="text-center p-8 rounded-2xl bg-champagne/20 hover:bg-champagne/40 transition-colors"
                    >
                        <span className="font-primary text-5xl md:text-7xl text-text-primary block mb-4">
                            <CountUp end={stat.number} suffix={stat.suffix} />
                        </span>
                        <span className="font-secondary text-xs uppercase tracking-widest text-text-secondary">
                            {stat.label}
                        </span>
                    </motion.div>
                ))}
            </div>

        </div>
    </section>
  );
};

export default StatsCounterSection;
