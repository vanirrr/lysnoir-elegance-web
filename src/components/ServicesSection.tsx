
import React, { useEffect, useRef } from 'react';
import { Code, Palette, Rocket, Shield } from 'lucide-react';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Développement Web',
      description: 'Sites web sur mesure avec les dernières technologies React, TypeScript et frameworks modernes.'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Design Premium',
      description: 'Identité visuelle unique et design sophistiqué pour une expérience utilisateur exceptionnelle.'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Performance',
      description: 'Optimisation avancée pour des sites ultra-rapides et un référencement naturel optimal.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Sécurité',
      description: 'Protection renforcée et hébergement sécurisé pour la tranquillité de votre entreprise.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const title = entry.target.querySelector('.section-title');
            const cards = entry.target.querySelectorAll('.service-card');
            
            if (title) {
              title.classList.add('scroll-animate', 'animate');
            }
            
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('scroll-animate', 'animate');
              }, index * 150);
            });
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
    <section ref={sectionRef} id="services" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="section-title scroll-animate flex items-center justify-center mb-6">
            <img 
              src="/lovable-uploads/3fb6db0d-8bde-4b6e-941e-ed00b60a43a5.png" 
              alt="Lysnoir Icon" 
              className="h-28 w-auto mr-4 opacity-80"
            />
            <h2 className="text-4xl lg:text-6xl font-roboto font-bold text-white letter-spacing-tight">
              Nos <span className="text-gray-300">services</span>
            </h2>
          </div>
          <p className="text-xl text-gray-400 font-roboto font-light max-w-2xl mx-auto">
            Des solutions web complètes pour propulser votre présence digitale vers l'excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card scroll-animate glass-card p-8 text-center transition-all duration-500 hover:scale-105 group"
            >
              <div className="mb-6 text-white group-hover:scale-110 transition-transform duration-300 flex justify-center">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-roboto font-bold text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-400 font-roboto font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
