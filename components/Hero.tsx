import React from 'react';
import { SITE_CONFIG } from '../constants';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
          
          {/* Text Column */}
          <div className="animate-fade-in space-y-8 order-2 md:order-1">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-black leading-[1.1]">
              Hello, I'm <br/>
              <span className="text-gray-400">{SITE_CONFIG.name.split(' ')[0]}.</span>
            </h1>
            
            <div className="max-w-2xl animate-slide-up" style={{animationDelay: '0.2s'}}>
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-medium leading-relaxed">
                {SITE_CONFIG.role} at <span className="text-gray-900">{SITE_CONFIG.university}</span>.
              </p>
              <p className="mt-6 text-lg text-gray-500 leading-relaxed font-normal">
                Building intelligent systems that perceive, reason, and act in the physical world.
              </p>
            </div>

            <div className="pt-8 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <a 
                href="#about" 
                onClick={scrollToAbout}
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors font-medium group cursor-pointer"
              >
                <span>Learn more about me</span>
                <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Image Column */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-slide-up" style={{animationDelay: '0.3s'}}>
             <div className="group relative w-64 h-64 md:w-[28rem] md:h-[28rem]">
                {/* Abstract blob behind image for depth */}
                <div className="absolute inset-0 bg-gray-200 rounded-[2.5rem] rotate-6 scale-105 opacity-50 -z-10 transition-transform duration-700 group-hover:rotate-12"></div>
                
                {/* The Image */}
                <img 
                  src="https://picsum.photos/seed/alexchen/800/800" 
                  alt="Alex Chen"
                  className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 ease-out" 
                />
             </div>
          </div>

        </div>
      </div>
      
      {/* Abstract background elements */}
      <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none"></div>
      <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] bg-gray-100/50 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none"></div>
    </section>
  );
};

export default Hero;