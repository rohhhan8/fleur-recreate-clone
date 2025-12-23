import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import RevealOnScroll from '../core/RevealOnScroll';
import GlossyText from '../ui/GlossyText';
import MagneticWrapper from '../ui/MagneticWrapper';
import BackgroundGradient from '../core/BackgroundGradient';

// --- SLIDE DATA ---
// --- SLIDE DATA ---
const slides = [
    {
        id: 0,
        theme: "bg-[#fcf3f6]", // Very pale pink/champagne - Solid
        topText: "The Art of",
        centerWord: "Capturing",
        bottomWord: "MOMENTS",
        centerImg: "/4abc439817c53a9197cb6f38c03aced4.jpg",
        imageSet: [
            { src: "/0654ee3f349bfbcd170756a7accf6769.jpg", className: "top-[15%] left-[10%] rotate-[-6deg]", delay: 0 },
            { src: "/193409a9e82c90cabe987cc8d3270605.jpg", className: "bottom-[20%] right-[12%] rotate-[4deg]", delay: 0.2 },
            { src: "/3035142c99313b4c0719b4d5ea75e951.jpg", className: "top-[25%] right-[15%] rotate-[-3deg]", delay: 0.4 },
            { src: "/4abc439817c53a9197cb6f38c03aced4.jpg", className: "bottom-[15%] left-[15%] rotate-[5deg]", delay: 0.6 },
        ]
    },
    {
        id: 1,
        theme: "bg-[#f0f8ff]", // Alice Blue - Solid
        topText: "Curating",
        centerWord: "Designing",
        bottomWord: "DREAMS",
        centerImg: "/7668778f922038b8918a2a861c163fda.jpg",
        imageSet: [
            { src: "/6aa51760bf51737de1af412f42e01b63.jpg", className: "top-[10%] right-[25%] rotate-[3deg]", delay: 0 },
            { src: "/7668778f922038b8918a2a861c163fda.jpg", className: "bottom-[25%] left-[10%] rotate-[-5deg]", delay: 0.2 },
            { src: "/861e6c81accd4a89c4204aa1524c006b.jpg", className: "top-[20%] left-[20%] rotate-[7deg]", delay: 0.4 },
            { src: "/933b8432dfba625d14f66a6c326a303e.jpg", className: "bottom-[10%] right-[20%] rotate-[-4deg]", delay: 0.6 },
        ]
    },
    {
        id: 2,
        theme: "bg-[#f5fffa]", // Mint Cream - Solid
        topText: "Preserving",
        centerWord: "Eternal",
        bottomWord: "STORIES",
        centerImg: "/b60a2293897606bf51ad2308f27a1e60.jpg",
        imageSet: [
            { src: "/b60a2293897606bf51ad2308f27a1e60.jpg", className: "top-[12%] left-[25%] rotate-[-4deg]", delay: 0 },
            { src: "/e460c116c965601387cc96506cf06188.jpg", className: "top-[18%] right-[10%] rotate-[6deg]", delay: 0.2 },
            { src: "/61cfb2069455551cc84f1b0c8fcbb3bb.jpg", className: "bottom-[22%] right-[25%] rotate-[-3deg]", delay: 0.4 },
            { src: "/4af7b94cc3ed161f31dafd484733eb70.jpg", className: "bottom-[12%] left-[22%] rotate-[5deg]", delay: 0.6 },
        ]
    }
];

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentGridSet, setCurrentGridSet] = useState(0);

    // Auto-slide: 10 Seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 15000);
        return () => clearInterval(interval);
    }, []);

    // 2. SHUFFLE GRID CHANGE: 3 Seconds (Independent)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentGridSet((prev) => (prev + 1) % 4);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="relative w-full h-[calc(100vh-6rem)] bg-white flex flex-col overflow-hidden">
            
            {/* 2. SLIDER CONTENT WRAPPER */}
            <div className="flex-1 px-4 pb-4 md:px-6 md:pb-6 w-full h-full flex flex-col relative group">
                
                {/* INTERACTION ZONES */}
                <div 
                    className="absolute top-0 right-0 w-[10%] h-full z-[100] cursor-e-resize"
                    onMouseEnter={handleNextSlide}
                ></div>
                <div 
                    className="absolute top-0 left-0 w-[10%] h-full z-[100] cursor-w-resize"
                    onMouseEnter={handlePrevSlide}
                ></div>

                <AnimatePresence mode='popLayout' initial={false}>
                    <motion.div 
                        key={currentSlide}
                        initial={{ x: "100%" }}
                        animate={{ x: "0%" }}
                        exit={{ x: "-100%" }} // Full wipe exit, no transparency fade
                        transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.8 }}
                        className={`relative flex-1 w-full rounded-[2.5rem] overflow-hidden flex flex-col shadow-inner will-change-transform z-10 ${slides[currentSlide].theme}`}
                    >
                        {/* Only show Gradient on Slide 0 (Pink) - ENSURE IT IS BEHIND CONTENT */}
                        {currentSlide === 0 && (
                            <div className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-50">
                                <BackgroundGradient />
                            </div>
                        )}
        
                        {/* CORNER DETAILS */}
                        <div className="absolute top-10 left-10 font-secondary text-xs tracking-widest uppercase opacity-60 mix-blend-multiply z-30">
                            Est. 2024 — Paris / NYC
                        </div>
                        <div className="absolute top-10 right-10 font-secondary text-xs tracking-widest uppercase opacity-60 mix-blend-multiply text-right z-30 pr-12">
                            {currentSlide === 0 ? "Curated Memories" : currentSlide === 1 ? "Bespoke Design" : "Timeless Stories"}<br/>For the Modern Soul
                        </div>
                        
                        {/* DYNAMIC SCATTERED GRID */}
                        <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
                            <AnimatePresence mode="wait">
                                <motion.div 
                                    key={currentGridSet}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1 }}
                                    className="absolute inset-0"
                                >
                                    {slides[currentSlide].imageSet.map((img, index) => (
                                        <motion.div
                                            key={`${currentSlide}-${index}-${currentGridSet}`} 
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.8, delay: img.delay }}
                                            className={`absolute w-32 h-24 md:w-56 md:h-40 rounded-lg overflow-hidden shadow-xl ${img.className}`}
                                        >
                                            <img src={img.src} alt="Visual" className="w-full h-full object-cover grayscale opacity-60" />
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>
        
                        {/* EDITORIAL TYPOGRAPHY */}
                        <div className="relative flex-1 flex flex-col items-center justify-center z-20 mix-blend-multiply pb-10">
                            
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="relative mb-2 md:mb-4"
                            >
                                <h1 className="font-secondary uppercase text-sm md:text-xl tracking-[0.8em] md:tracking-[1.2em] text-text-primary ml-4 md:ml-12">
                                    {slides[currentSlide].topText}
                                </h1>
                            </motion.div>
                            
                            <div className="relative flex flex-col items-center justify-center">
                                <div className="relative z-30 -mb-6 md:-mb-10">
                                     <GlossyText>
                                        <span className="font-primary italic font-light text-6xl md:text-8xl lg:text-[9rem] leading-none text-text-primary block">
                                            {slides[currentSlide].centerWord}
                                        </span>
                                     </GlossyText>
                                </div>
        
                                {/* CENTER IMAGE - Fixed Tilt */}
                                <motion.div 
                                    initial={{ scale: 0.8, rotate: -5 }}
                                    animate={{ scale: 1, rotate: -3 }}
                                    whileHover={{ scale: 1.05, rotate: 0 }} 
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="relative z-20 w-48 h-32 md:w-80 md:h-56 overflow-hidden rounded-lg shadow-2xl my-6 border-4 border-white/20 cursor-pointer"
                                >
                                    <img 
                                        src={slides[currentSlide].centerImg} 
                                        alt="Center Moment" 
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110" 
                                    />
                                </motion.div>
        
                                <div className="relative z-30 -mt-12 md:-mt-24 mix-blend-overlay">
                                    <GlossyText>
                                        <span className="font-primary italic font-bold text-7xl md:text-9xl lg:text-[12rem] leading-none text-text-primary opacity-90 block">
                                            {slides[currentSlide].bottomWord}
                                        </span>
                                    </GlossyText>
                                </div>
        
                                {/* CTA BUTTON - Consistent */}
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="relative z-40 mt-8 md:mt-12"
                                >
                                    <MagneticWrapper>
                                        <button className="px-8 py-3 rounded-full border border-text-primary/30 bg-white/20 backdrop-blur-md text-text-primary font-secondary uppercase tracking-widest text-xs md:text-sm hover:bg-text-primary hover:text-white hover:border-text-primary transition-all duration-300 shadow-lg">
                                            Purchase Template
                                        </button>
                                    </MagneticWrapper>
                                </motion.div>
        
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
      
        </section>
    );
};

export default HeroSection;
