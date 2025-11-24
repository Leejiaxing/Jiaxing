import React from 'react';
import { PROJECTS } from '../constants';
import SectionTitle from './SectionTitle';

const Research: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="Projects" subtitle="Exploring the frontiers of embodied AI." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group relative flex flex-col bg-gray-50 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;