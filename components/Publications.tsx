import React from 'react';
import { PUBLICATIONS } from '../constants';
import SectionTitle from './SectionTitle';
import { FileText, Code } from 'lucide-react';

const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-20 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle title="Publications" subtitle="Selected works from 2023-2024." />
        
        <div className="space-y-12">
          {PUBLICATIONS.map((pub) => (
            <div key={pub.id} className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 transition-opacity hover:opacity-80">
              <div className="md:col-span-2">
                <span className="text-sm font-semibold text-gray-400 font-mono">{pub.year}</span>
              </div>
              
              <div className="md:col-span-10 space-y-3">
                <h3 className="text-xl font-medium text-gray-900 leading-snug">
                  {pub.title}
                </h3>
                <div className="text-gray-600 text-base">
                   {pub.authors.map((author, idx) => (
                     <span key={idx} className={author.includes("Alex Chen") ? "font-semibold text-gray-900" : ""}>
                       {author}{idx < pub.authors.length - 1 ? ", " : ""}
                     </span>
                   ))}
                </div>
                <div className="text-sm text-gray-500 italic">
                  {pub.venue}
                </div>
                
                <div className="flex space-x-4 pt-2">
                  {pub.paperUrl && (
                    <a href={pub.paperUrl} className="flex items-center text-xs font-medium text-blue-600 hover:underline space-x-1">
                      <FileText size={14} />
                      <span>Paper</span>
                    </a>
                  )}
                  {pub.codeUrl && (
                    <a href={pub.codeUrl} className="flex items-center text-xs font-medium text-gray-600 hover:text-black transition-colors space-x-1">
                      <Code size={14} />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;