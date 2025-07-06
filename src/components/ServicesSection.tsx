
import React, { useEffect, useRef } from 'react';
import { Code, Smartphone, Database, Palette, Globe, Zap } from 'lucide-react';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      icon: Globe,
      title: 'Sites vitrines élégants',
      description: 'Des sites web sophistiqués qui reflètent l\'excellence de votre marque'
    },
    {
      icon: Code,
      title: 'Panneaux d\'administration personnalisés',
      description: 'Interfaces de gestion sur mesure pour contrôler votre contenu'
    },
    {
      icon: Smartphone,
      title: 'Responsive et mobile-first',
      description: 'Expérience optimale sur tous les appareils et écrans'
    },
    {
      icon: Database,
      title: 'Intégration de base de données',
      description: 'Solutions complètes avec Supabase, Firebase et autres technologies'
    },
    {
      icon: Palette,
      title: 'Branding visuel et logos',
      description: 'Identité visuelle cohérente et mémorable pour votre entreprise'
    },
    {
      icon: Zap,
      title: 'Performance et vitesse',
      description: 'Sites ultra-rapides optimisés pour les moteurs de recherche'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.service-item').forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-fade-in-up');
              }, index * 100);
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
    <section ref={sectionRef} id="services" className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="glass-card p-8 rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
                alt="Développeur travaillant sur du code"
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
            </div>
          </div>

          {/* Right side - Services */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-roboto font-bold text-white letter-spacing-tight">
                Ce que nous <span className="text-gray-300">proposons</span>
              </h2>
              <p className="text-xl text-gray-400 font-roboto font-light">
                Des solutions web premium adaptées à vos besoins d'excellence
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="service-item glass-card p-6 opacity-0 translate-y-12 transition-all duration-500 hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-roboto font-bold text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 font-roboto font-light text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
