
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen text-white">
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <ServicesSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
