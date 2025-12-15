import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const testimonials = [
    {
        quote: "Fleur transformed our digital presence. The attention to detail is unmatched, and the design feels like a bespoke suit for our brand.",
        author: "Sophie Laurent",
        role: "Creative Director, Vogue",
        image: "/7668778f922038b8918a2a861c163fda.jpg"
    },
    {
        quote: "An ethereal experience from start to finish. They understood our vision before we even fully articulated it.",
        author: "James Sterling",
        role: "CEO, Sterling Arch",
        image: "/193409a9e82c90cabe987cc8d3270605.jpg"
    },
    {
        quote: "Pure magic. The team at Fleur doesn't just design websites; they curate digital emotions.",
        author: "Elena Rossi",
        role: "Founder, Luce",
        image: "/3035142c99313b4c0719b4d5ea75e951.jpg"
    },
    {
        quote: "Professional, polished, and breathtakingly beautiful. Our conversion rates have doubled since the redesign.",
        author: "Marcus Chen",
        role: "CMO, Horizon",
        image: "/4abc439817c53a9197cb6f38c03aced4.jpg"
    }
];

const ReviewCard = ({ review }) => (
    <div className="w-[400px] md:w-[600px] bg-champagne/30 rounded-[2rem] p-8 md:p-12 mx-4 md:mx-6 flex flex-col justify-between backdrop-blur-sm border border-white/50">
        <p className="font-primary italic text-2xl md:text-3xl text-text-primary leading-tight mb-8 opacity-90">"{review.quote}"</p>
        
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-text-primary/20">
                <img src={review.image} alt={review.author} className="w-full h-full object-cover" />
            </div>
            <div>
                <h4 className="font-secondary text-sm font-bold uppercase tracking-wider text-text-primary">{review.author}</h4>
                <p className="font-secondary text-xs text-text-secondary tracking-wide">{review.role}</p>
            </div>
        </div>
    </div>
);

const TestimonialsSection = () => {
    return (
        <section className="relative w-full py-24 md:py-32 bg-white overflow-hidden">
             <div className="flex w-full mb-16 px-4 md:px-12 items-end justify-between">
                <h2 className="font-primary text-5xl md:text-7xl text-text-primary leading-none">
                    Client <span className="italic text-text-secondary/50">Love</span>
                </h2>
                <div className="w-1/3 h-[1px] bg-black/10 hidden md:block mb-4"></div>
             </div>

             {/* MARQUEE WRAPPER */}
             <div className="relative w-full flex overflow-hidden mask-linear-fade">
                <motion.div 
                    className="flex"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ 
                        repeat: Infinity, 
                        ease: "linear", 
                        duration: 30 
                    }}
                >
                    {/* Double Rendering for Seamless Loop */}
                    {[...testimonials, ...testimonials, ...testimonials].map((review, i) => (
                        <ReviewCard key={i} review={review} />
                    ))}
                </motion.div>
             </div>
        </section>
    );
};

export default TestimonialsSection;
