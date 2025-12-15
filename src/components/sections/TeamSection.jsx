import React from 'react';
import { motion } from 'framer-motion';

// Using non-wedding images from public folder
const team = [
    { name: "Alaric St. Cloud", role: "Principal Architect", image: "/devloper4.jpg" },
    { name: "Elena Vos", role: "Creative Director", image: "/devloper2.jpg" },
    { name: "Julian Thorne", role: "Lead Developer", image: "/devloper3.jpg" },
    { name: "Sophia Chen", role: "UI/UX Designer", image: "/devloper1.jpg" },
];

const TeamSection = () => {
  return (
    <section className="relative w-full py-24 md:py-32 bg-white px-4 md:px-12">
        <div className="max-w-7xl mx-auto text-center mb-24">
             <span className="font-secondary text-xs tracking-[0.2em] uppercase text-text-secondary block mb-6">
                The Architects
             </span>
             <h2 className="font-primary text-5xl md:text-6xl text-text-primary">
                Meet the <span className="italic text-text-secondary">Visionaries</span>
             </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-12 md:gap-20 max-w-7xl mx-auto">
            {team.map((member, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.8 }}
                    className="group text-center w-[250px]"
                >
                    <div className="w-full h-[300px] md:h-[350px] overflow-hidden rounded-full mb-6 relative">
                         <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                         />
                    </div>
                    <h3 className="font-primary text-2xl text-text-primary mb-2">{member.name}</h3>
                    <p className="font-secondary text-xs uppercase tracking-widest text-text-secondary opacity-70 group-hover:opacity-100 transition-opacity">
                        {member.role}
                    </p>
                </motion.div>
            ))}
        </div>
    </section>
  );
};

export default TeamSection;
