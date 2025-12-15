import React from 'react';
import SmoothScroll from './components/core/SmoothScroll';
import Cursor from './components/core/Cursor';
import NoiseOverlay from './components/core/NoiseOverlay';
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ProcessStats from './components/sections/ProcessStats';
import ProjectList from './components/sections/ProjectList';
import TeamSection from './components/sections/TeamSection';
import StatsCounterSection from './components/sections/StatsCounterSection';
import RecommendationsSection from './components/sections/RecommendationsSection';
import ClientsTicker from './components/sections/ClientsTicker';
import FAQSection from './components/sections/FAQSection';
import FinalCTA from './components/sections/FinalCTA';
import Footer from './components/ui/Footer';

function App() {
  return (
    <SmoothScroll>
      <Cursor />
      <NoiseOverlay />
      
      <main className="relative z-10 w-full min-h-screen">
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
        <ProcessStats />
        <ProjectList />
        <TeamSection />
        <StatsCounterSection />
        <RecommendationsSection />
        <ClientsTicker />
        <FAQSection />
        <FinalCTA />
        <Footer />
      </main>
    </SmoothScroll>
  );
}

export default App;
