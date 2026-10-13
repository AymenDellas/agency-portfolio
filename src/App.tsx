import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { CaseStudyModal } from './components/CaseStudyModal';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PROJECTS_DATA } from './data/projects';
import { CaseStudyData } from './types';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<CaseStudyData | null>(null);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string | undefined>(undefined);

  // Initialize Lenis Smooth Scrolling for Editorial Luxury Pacing
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleInquireService = (serviceTitle: string) => {
    setSelectedServiceForContact(serviceTitle);
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#0000FF] selection:text-white">
      {/* 1. Header Navigation */}
      <Header 
        onNavigate={handleNavigate} 
        activeSection={activeSection} 
      />

      {/* 2. Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero 
          onExploreWork={() => handleNavigate('work')}
          onContactClick={() => handleNavigate('contact')}
        />

        {/* Selected Work Section */}
        <SelectedWork 
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* About & Philosophy Section */}
        <AboutSection />

        {/* Services & Commercial Value Section */}
        <ServicesSection 
          onInquireService={handleInquireService}
        />

        {/* Contact & Enquiry Section */}
        <ContactSection 
          initialService={selectedServiceForContact}
        />
      </main>

      {/* 3. Footer */}
      <Footer 
        onScrollTop={() => handleNavigate('hero')}
      />

      {/* 4. Case Study Detail Modal Drawer */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectNext={(nextProj) => setSelectedProject(nextProj)}
        allProjects={PROJECTS_DATA}
      />
    </div>
  );
};

export default App;
