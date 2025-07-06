
import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/3 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-8 opacity-0 translate-y-24" style={{animation: 'fade-in-up 1s ease-out forwards'}}>
          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-helvetica font-bold text-white letter-spacing-tight text-shadow">
            Lysnoir
          </h1>

          {/* Subtitle */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-roboto font-bold text-white letter-spacing-tight text-shadow">
              Élégance
              <br />
              <span className="text-gray-300">Redéfinie</span>
            </h2>
          </div>

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
