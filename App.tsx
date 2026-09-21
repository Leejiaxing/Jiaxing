import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Publications from './components/Publications';
import Research from './components/Research';
import Footer from './components/Footer';
import { SectionId } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState(SectionId.HOME);
  useEffect(() => {
    const update = () => {
      const sections = Object.values(SectionId).map(id => document.getElementById(id))
        .filter((section): section is HTMLElement => Boolean(section)).sort((a, b) => a.offsetTop - b.offsetTop);
      const current = sections.filter(section => section.getBoundingClientRect().top <= 180).at(-1);
      if (current) setActiveSection(current.id as SectionId);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return <><a className="skip-link" href="#main">Skip to content</a><Navigation activeSection={activeSection} /><main id="main"><Hero /><Research /><Publications /><About /></main><Footer /></>;
}
