
import React, { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const projects = [
    {
      name: 'Horizon Immobilier',
      description: 'Agence immobilière premium en Algérie',
      image: '/lovable-uploads/ed7b0adc-da1e-4a82-bc85-2174e1c7c5da.png',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      url: 'https://horizon-immobilier.netlify.app'
    },
    {
      name: 'Pure',
      description: 'Marque de soins de la peau en Algérie',
      image: '/lovable-uploads/8238e631-ae25-4cb5-9d6f-de21c88cd120.png',
      tags: ['React', 'Supabase', 'Animation'],
      url: 'https://pure-demo.netlify.app'
    },
    {
      name: 'Nocturne',
      description: 'Boutique de vêtements de luxe en Algérie',
      image: '/lovable-uploads/f130e79f-7c9e-4041-bf9d-167ac25808a5.png',
      tags: ['React', 'E-commerce', 'Design System'],
      url: 'https://nocturne-demo.netlify.app'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate cards one by one
            cardsRef.current.forEach((card, index) => {
              if (card) {
                setTimeout(() => {
                  card.classList.add('animate-fade-in-up');
                  card.style.opacity = '1';
                  card.style.transform = 'translateY(0)';
                }, index * 200);
              }
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
    <section ref={sectionRef} id="projets" className="py-20 lg:py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-roboto font-bold text-white letter-spacing-tight mb-6">
            Nos <span className="text-gray-300">Créations</span>
          </h2>
          <p className="text-xl text-gray-400 font-roboto font-light max-w-2xl mx-auto">
            Découvrez notre portfolio de sites web premium créés pour des marques d'exception
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.name}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="glass-card p-6 group hover:scale-105 transition-all duration-500 opacity-0 translate-y-12"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="aspect-video mb-6 overflow-hidden rounded-xl bg-gray-800">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-roboto font-bold text-white mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 font-roboto font-light">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-white/10 text-gray-300 rounded-full font-roboto font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => window.open(project.url, '_blank')}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-300 font-roboto font-medium hover:scale-105"
                >
                  Voir le Projet
                  <ExternalLink size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
