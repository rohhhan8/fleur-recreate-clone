import React from 'react';
import { motion } from 'framer-motion';

const faqs = [
    {
        question: "What's your typical project timeline?",
        answer: "Most projects take 4-8 weeks depending on scope. We prioritize quality over speed, ensuring every detail is perfect."
    },
    {
        question: "Do you work with international clients?",
        answer: "Absolutely! We've worked with clients across 20+ countries. Distance is never a barrier to creating something beautiful."
    },
    {
        question: "What's included in your packages?",
        answer: "Full creative direction, design concepts, revisions, final deliverables, and ongoing support. We're partners, not just vendors."
    },
    {
        question: "Can we schedule a discovery call?",
        answer: "Yes! We offer complimentary 30-minute discovery calls to understand your vision and see if we're the right fit."
    },
];

const FAQSection = () => {
  return (
    <section className="relative w-full py-24 md:py-32 bg-gradient-to-b from-white to-champagne/30 px-4 md:px-12">
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
                <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="inline-block px-5 py-2 rounded-full border border-accent-gold/30 font-secondary text-xs tracking-[0.3em] uppercase text-accent-gold mb-6"
                >
                    FAQ
                </motion.span>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="font-primary text-5xl md:text-7xl text-text-primary leading-[0.9]"
                >
                    Have <span className="italic text-accent-gold">Questions?</span>
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="font-secondary text-lg text-text-secondary mt-6 max-w-xl mx-auto"
                >
                    Everything you need to know before we start creating magic together.
                </motion.p>
            </div>

            <div className="space-y-0">
                {faqs.map((faq, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="group border-b border-text-primary/10 py-10 cursor-pointer hover:bg-white/50 px-6 -mx-6 rounded-xl transition-colors"
                    >
                        <div className="flex justify-between items-start gap-8">
                            <div className="flex-1">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-8 h-8 rounded-full bg-champagne flex items-center justify-center font-secondary text-xs text-text-primary">
                                        0{i + 1}
                                    </span>
                                    <h3 className="font-primary text-xl md:text-2xl text-text-primary group-hover:text-accent-gold transition-colors">
                                        {faq.question}
                                    </h3>
                                </div>
                                <p className="font-secondary text-base text-text-secondary leading-relaxed pl-12">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mt-20 p-12 bg-white rounded-3xl shadow-sm"
            >
                <h3 className="font-primary text-2xl md:text-3xl text-text-primary mb-4">
                    Still have questions?
                </h3>
                <p className="font-secondary text-text-secondary mb-8">
                    We'd love to hear from you. Let's start a conversation.
                </p>
                <button className="px-10 py-4 bg-text-primary text-white rounded-full font-secondary text-sm uppercase tracking-widest hover:bg-black transition-colors">
                    Get In Touch
                </button>
            </motion.div>
        </div>
    </section>
  );
};

export default FAQSection;
