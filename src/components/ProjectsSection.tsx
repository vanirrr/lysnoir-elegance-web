
import React, { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      name: 'Horizon Immobilier',
      image: '/lovable-uploads/c5bb03f7-286d-4a55-b220-b9764b8e4d09.png',
      tags: ['React', 'TypeScript', 'Tailwind'],
      link: 'https://horizon-immobilier.netlify.app',
      description: 'Agence immobilière basée en Algérie'
    },
    {
      name: 'Pure',
      image: '/lovable-uploads/8238e631-ae25-4cb5-9d6f-de21c88cd120.png',
      tags: ['React', 'Supabase', 'Responsive'],
      link: 'https://pure-demo.netlify.app',
      description: 'Marque de soins de la peau en Algérie'
    },
    {
      name: 'Nocturne',
      image: '/lovable-uploads/b8689afb-31b5-4ddc-8b75-969b25bc5b18.png',
      tags: ['Next.js', 'Firebase', 'E-commerce'],
      link: 'https://nocturne-demo.netlify.app',
      description: 'Boutique de vêtements en Algérie'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.project-card').forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in-up');
              }, index * 200);
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
    <section ref={sectionRef} id="projets" className="py-20 lg:py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/lovable-uploads/3fb6db0d-8bde-4b6e-941e-ed00b60a43a5.png" 
              alt="Lysnoir Icon" 
              className="h-28 w-auto mr-4 opacity-80"
            />
            <h2 className="text-4xl lg:text-6xl font-roboto font-bold text-white letter-spacing-tight">
              Nos <span className="text-gray-300">créations</span>
            </h2>
          </div>
          <p className="text-xl text-gray-400 font-roboto font-light max-w-2xl mx-auto">
            Découvrez notre portfolio de sites web premium, conçus pour des marques d'exception
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="project-card glass-card p-6 opacity-0 translate-y-12 transition-all duration-500 hover:scale-105 group"
            >
              <div className="aspect-video mb-6 overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-roboto font-bold text-white">
                  {project.name}
                </h3>
                
                <p className="text-gray-400 font-roboto font-light">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-roboto font-medium text-white bg-white/10 rounded-full border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-button inline-flex items-center gap-2 px-6 py-3 text-sm font-roboto font-medium text-black bg-white rounded-full transition-all duration-300 hover:bg-gray-100"
                >
                  Voir le projet
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
