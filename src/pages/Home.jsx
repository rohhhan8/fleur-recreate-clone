import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ProcessStats from '../components/sections/ProcessStats';
import ProjectList from '../components/sections/ProjectList';
import JournalSection from '../components/sections/JournalSection';
import StatsCounterSection from '../components/sections/StatsCounterSection';
import RecommendationsSection from '../components/sections/RecommendationsSection';
import ClientsTicker from '../components/sections/ClientsTicker';
import FAQSection from '../components/sections/FAQSection';
import FinalCTA from '../components/sections/FinalCTA';
import Footer from '../components/ui/Footer';

const Home = () => {
  return (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full"
    >
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
        <ProcessStats />
        <ProjectList />
        <JournalSection />
        <StatsCounterSection />
        <RecommendationsSection />
        <ClientsTicker />
        <FAQSection />
        <FinalCTA />
        <Footer />
    </motion.div>
  );
};

export default Home;
