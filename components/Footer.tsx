import React from 'react';
import { SITE_CONFIG } from '../constants';
import { Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#1d1d1f] text-white py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Main Contact CTA */}
        <div className="flex flex-col items-center text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8">
            Let's connect.
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
            I'm always open to discussing new research collaborations, speaking opportunities, or just chatting about AI.
          </p>
          <a 
            href={`mailto:${SITE_CONFIG.email}`} 
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-black bg-white rounded-full overflow-hidden transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1d1d1f]"
          >
            <span className="mr-2">Email Me</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Social Links */}
          <div className="flex items-center space-x-8">
             <a 
              href={SITE_CONFIG.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href={SITE_CONFIG.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a 
              href={SITE_CONFIG.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500 font-medium">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
