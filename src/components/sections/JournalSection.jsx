import React from 'react';
import { motion } from 'framer-motion';
import { PiArrowRightThin } from "react-icons/pi";

const journalEntries = [
    {
        category: "Design Thinking",
        date: "Dec 12, 2024",
        title: "The Silent Ambassador of Luxury",
        excerpt: "Why whitespace is the most expensive asset in modern digital design and how to wield it effectively.",
        image: "/193409a9e82c90cabe987cc8d3270605.jpg"
    },
    {
        category: "Visual Identity",
        date: "Nov 28, 2024",
        title: "Typography as Emotion",
        excerpt: "Exploring the subtle psychological impact of serif fonts in an increasingly sans-serif digital world.",
        image: "/3035142c99313b4c0719b4d5ea75e951.jpg"
    },
    {
        category: "Future Tech",
        date: "Nov 15, 2024",
        title: "The Ethereal Interface",
        excerpt: "How interactions are moving beyond clicks to physics-based motions that feel organic and alive.",
        image: "/6aa51760bf51737de1af412f42e01b63.jpg"
    }
];

const JournalSection = () => {
  return (
    <section className="relative w-full py-24 md:py-32 bg-white px-4 md:px-12 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
            
            {/* HEADER */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                <div>
                     <span className="font-secondary text-xs tracking-[0.2em] uppercase text-text-secondary block mb-6">
                        Studio Journal
                     </span>
                     <h2 className="font-primary text-5xl md:text-6xl text-text-primary leading-[0.9]">
                        Insights <span className="italic text-text-secondary">&</span><br/>
                        <span className="italic text-accent-gold">Perspectives</span>
                     </h2>
                </div>
                <button className="hidden md:flex items-center gap-2 group mt-8 md:mt-0">
                    <span className="font-secondary text-xs uppercase tracking-widest text-text-primary group-hover:text-accent-gold transition-colors">View All Articles</span>
                    <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:border-accent-gold/30 group-hover:bg-accent-gold/5 transition-all">
                        <PiArrowRightThin className="group-hover:translate-x-1 transition-transform text-text-primary group-hover:text-accent-gold" />
                    </div>
                </button>
            </div>

            {/* ARTILCES GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {journalEntries.map((entry, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.8 }}
                        className="group cursor-pointer"
                    >
                        {/* Image Container */}
                        <div className="w-full h-[300px] mb-8 overflow-hidden rounded-sm relative">
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 duration-500"></div>
                            <img 
                                src={entry.image} 
                                alt={entry.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                            />
                        </div>

                        {/* Content */}
                        <div className="flex items-center gap-4 mb-3">
                            <span className="font-secondary text-[10px] uppercase tracking-widest text-accent-gold">{entry.category}</span>
                            <span className="w-1 h-1 rounded-full bg-black/20"></span>
                            <span className="font-secondary text-[10px] uppercase tracking-widest text-text-secondary">{entry.date}</span>
                        </div>
                        
                        <h3 className="font-primary text-2xl text-text-primary mb-3 leading-tight group-hover:text-accent-gold transition-colors duration-300">
                            {entry.title}
                        </h3>
                        
                        <p className="font-secondary text-sm text-text-secondary opacity-70 leading-relaxed line-clamp-2">
                            {entry.excerpt}
                        </p>
                        
                        <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            <span className="font-secondary text-[10px] uppercase tracking-widest text-text-primary">Read Article</span>
                            <PiArrowRightThin />
                        </div>
                    </motion.div>
                ))}
            </div>

             <div className="md:hidden mt-12 flex justify-center">
                 <button className="flex items-center gap-2 group">
                    <span className="font-secondary text-xs uppercase tracking-widest text-text-primary">View All Articles</span>
                    <PiArrowRightThin className="text-lg" />
                </button>
            </div>

        </div>
    </section>
  );
};

export default JournalSection;
