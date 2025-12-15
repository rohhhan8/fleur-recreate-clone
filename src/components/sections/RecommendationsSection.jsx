import React from 'react';
import { motion } from 'framer-motion';

const products = [
    {
        title: "Wedding Preset Pack",
        price: "$49",
        image: "/7668778f922038b8918a2a861c163fda.jpg",
        category: "Lightroom"
    },
    {
        title: "Ceremony Templates",
        price: "$79",
        image: "/861e6c81accd4a89c4204aa1524c006b.jpg",
        category: "Premiere Pro"
    },
    {
        title: "Invitation Suite",
        price: "$35",
        image: "/933b8432dfba625d14f66a6c326a303e.jpg",
        category: "Canva"
    }
];

const RecommendationsSection = () => {
  return (
    <section className="relative w-full py-24 md:py-32 bg-champagne/30 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
            
            {/* HEADER */}
            <div className="text-center mb-16">
                <span className="font-secondary text-xs tracking-[0.2em] uppercase text-text-secondary block mb-4">
                    Curated For You
                </span>
                <h2 className="font-primary text-4xl md:text-6xl text-text-primary">
                    Our <span className="italic text-accent-gold">Recommendations</span>
                </h2>
            </div>

            {/* 3 COLUMN PRODUCT GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {products.map((product, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        className="group cursor-pointer"
                    >
                        <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl mb-6 shadow-lg">
                            <img 
                                src={product.image} 
                                alt={product.title} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        
                        {/* Product Info + CTA */}
                        <div className="flex justify-between items-start">
                            <div>
                                <span className="font-secondary text-[10px] uppercase tracking-widest text-text-secondary block mb-2">
                                    {product.category}
                                </span>
                                <h3 className="font-primary text-xl text-text-primary mb-1 group-hover:text-accent-gold transition-colors">
                                    {product.title}
                                </h3>
                                <span className="font-secondary text-lg font-bold text-text-primary">
                                    {product.price}
                                </span>
                            </div>
                            <button className="px-4 py-2 bg-text-primary text-white rounded-full text-[10px] font-secondary uppercase tracking-wider hover:bg-black transition-colors">
                                Add
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

        </div>
    </section>
  );
};

export default RecommendationsSection;
