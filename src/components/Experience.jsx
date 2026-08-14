import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight, AlertCircle } from 'lucide-react';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="section-tag">
            <span>07 — EXPERIENCE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Where Has Mahmoud Applied His Skills?
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-3xl">
            Software engineering timeline, organizational contributions, and structured work placeholders.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-slate-800">
          {experience.map((item, index) => {
            const isPlaceholder = item.role.includes('[ADD ROLE]');

            return (
              <div key={item.id} className="relative flex flex-col md:flex-row items-start group">
                
                {/* Timeline Center Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500 z-10 group-hover:border-cyan-400 group-hover:scale-125 transition-all mt-6"></div>

                {/* Content Card Layout */}
                <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto md:pl-0 pl-10'}`}>
                  <div
                    className={`glass-card p-6 space-y-4 border-slate-800 hover:border-blue-500/40 ${
                      isPlaceholder ? 'border-dashed opacity-80' : ''
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                      <div>
                        <h3 className="text-lg font-bold text-white">{item.role}</h3>
                        <div className="text-sm font-semibold text-blue-400 flex items-center gap-1.5 mt-0.5">
                          <Briefcase className="w-3.5 h-3.5" /> {item.organization}
                        </div>
                      </div>

                      <div className="text-right space-y-1">
                        <div className="text-xs font-mono text-slate-300 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-slate-400" /> {item.period}
                        </div>
                        <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1 justify-end">
                          <MapPin className="w-3 h-3 text-slate-500" /> {item.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                      {item.summary}
                    </p>

                    <div className="space-y-1.5 pt-2">
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                        Key Highlights
                      </div>
                      <ul className="space-y-1">
                        {item.highlights.map((hl, idx) => (
                          <li key={idx} className="text-xs text-slate-400 flex items-start gap-1.5">
                            <ChevronRight className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                      {item.technologies.map((tech, idx) => (
                        <span key={idx} className="skill-pill">
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
