
import React from 'react';
import { Mail, MessageCircle, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-transparent py-16 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Logo and heading */}
          <div className="space-y-4">
            <div className="flex items-center justify-center mb-6">
              <img 
                src="/lovable-uploads/3fb6db0d-8bde-4b6e-941e-ed00b60a43a5.png" 
                alt="Lysnoir Icon" 
                className="h-12 w-auto mr-4 opacity-80"
              />
              <h2 className="text-4xl lg:text-5xl font-helvetica font-bold text-white letter-spacing-tight">
                Lysnoir
              </h2>
            </div>
            <p className="text-xl text-gray-300 font-roboto font-light">
              Prêt à créer quelque chose d'exceptionnel ensemble ?
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:lysnoirweb@gmail.com"
              className="glass-card flex items-center gap-3 px-6 py-4 hover:scale-105 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              <span className="text-white font-roboto font-medium">lysnoirweb@gmail.com</span>
            </a>

            <a
              href="https://wa.me/213XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex items-center gap-3 px-6 py-4 hover:scale-105 transition-all duration-300 group"
            >
              <MessageCircle className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              <span className="text-white font-roboto font-medium">WhatsApp</span>
            </a>

            <a
              href="https://www.instagram.com/lysnoir.web"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex items-center gap-3 px-6 py-4 hover:scale-105 transition-all duration-300 group"
            >
              <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              <span className="text-white font-roboto font-medium">@lysnoir.web</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-gray-400 font-roboto font-light">
              © 2024 Lysnoir. Tous droits réservés. Développement web premium en Algérie.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
