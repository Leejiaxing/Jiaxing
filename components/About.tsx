import React from 'react';
import { SITE_CONFIG, NEWS } from '../constants';

const About: React.FC = () => {
  // Split bio into intro sentence and details
  const bioParagraphs = SITE_CONFIG.about.split('\n\n');
  const intro = bioParagraphs[0];
  const details = bioParagraphs.slice(1);

  return (
    <section id="about" className="py-24 md:py-32 bg-[#f5f5f7]">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="mb-16 md:mb-24">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">About Me</h2>
          <p className="text-3xl md:text-5xl font-medium text-[#1d1d1f] leading-tight tracking-tight max-w-3xl">
            {intro}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24">
          {/* Detailed Bio */}
          <div className="lg:col-span-7 space-y-6 text-lg text-gray-600 leading-relaxed font-normal">
            {details.map((paragraph, idx) => (
              <p key={idx}>{paragraph.trim()}</p>
            ))}
          </div>

          {/* News Timeline */}
          <div className="lg:col-span-5">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-6 border-b border-gray-200 pb-4">
              Latest Updates
            </h3>
            <div className="space-y-8">
              {NEWS.map((item) => (
                <div key={item.id} className="group">
                  <div className="text-xs font-semibold text-gray-400 mb-1 group-hover:text-blue-600 transition-colors">
                    {item.date}
                  </div>
                  <div className="text-base text-gray-900 font-medium leading-snug">
                    {item.content}
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

export default About;
