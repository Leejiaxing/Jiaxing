import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Publications from './components/Publications';
import Research from './components/Research';
import Footer from './components/Footer';
import ResearchChat from './components/ResearchChat';
import { SectionId } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.HOME);

  // Intersection Observer to detect active section for highlighting nav
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // trigger when section is near top
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as SectionId);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    const sections = Object.values(SectionId);
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen w-full font-sans">
      <Navigation activeSection={activeSection} />
      
      <Hero />
      <About />
      <Publications />
      <Research />
      <Footer />
      
      {/* Gemini AI Integration */}
      <ResearchChat />
    </main>
  );
};

export default App;