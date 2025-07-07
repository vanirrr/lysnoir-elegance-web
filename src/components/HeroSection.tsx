
import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const content = entry.target.querySelector('.hero-content');
            if (content) {
              content.classList.add('scroll-animate', 'animate');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projets');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      id="accueil" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/3 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="hero-content scroll-animate space-y-8">
          {/* Icon Logo above heading */}
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/3fb6db0d-8bde-4b6e-941e-ed00b60a43a5.png" 
              alt="Lysnoir Icon" 
              className="h-48 w-auto opacity-90"
            />
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-helvetica font-bold text-white letter-spacing-tight text-shadow">
            Lysnoir
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-roboto font-light max-w-3xl mx-auto leading-relaxed">
            Découvrez notre collection exclusive de <strong className="font-bold text-white">sites web haut de gamme</strong>, 
            conçue pour les <strong className="font-bold text-white">connaisseurs de style</strong> et les entreprises d'exception.
          </p>

          {/* CTA Button */}
          <div className="pt-8">
            <button
              onClick={scrollToProjects}
              className="glow-button inline-flex items-center px-8 py-4 text-lg font-roboto font-medium text-black bg-white rounded-full transition-all duration-300 hover:bg-gray-100"
            >
              Voir les Projets
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
