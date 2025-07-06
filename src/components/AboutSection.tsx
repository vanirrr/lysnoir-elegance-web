
import React, { useEffect, useRef } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="a-propos" className="py-20 lg:py-32 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 opacity-0 translate-y-12">
          <h2 className="text-4xl lg:text-6xl font-roboto font-bold text-white letter-spacing-tight">
            À propos de <span className="text-gray-300">Lysnoir</span>
          </h2>
          
          <div className="space-y-6 text-lg lg:text-xl text-gray-300 font-roboto font-light leading-relaxed">
            <p>
              <strong className="font-bold text-white">Lysnoir</strong> est une agence de développement web premium basée en Algérie, 
              spécialisée dans la création de sites web d'exception pour les entreprises et marques de prestige.
            </p>
            
            <p>
              Notre mission est de redéfinir l'<strong className="font-bold text-white">élégance digitale</strong> en alliant 
              design sophistiqué, performance technique et identité visuelle unique. Chaque projet que nous réalisons 
              reflète notre engagement envers l'excellence et l'innovation.
            </p>
            
            <p>
              Nous créons des expériences web qui marquent les esprits et propulsent nos clients vers de nouveaux sommets. 
              Votre <strong className="font-bold text-white">réussite digitale</strong> est notre obsession.
            </p>
          </div>

          <div className="pt-8">
            <div className="glass-card inline-block px-8 py-4">
              <p className="text-white font-roboto font-medium text-lg">
                "L'excellence n'est pas un acte, mais une habitude"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
