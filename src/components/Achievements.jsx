import React from 'react';
import { Trophy, Award, Calendar, ExternalLink } from 'lucide-react';
import { achievements } from '../data/portfolioData';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative z-10 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="section-tag">
            <span>08 — ACHIEVEMENTS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            What Has Mahmoud Accomplished?
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-3xl">
            Engineering recognitions, hackathon awards, key milestones, and verified accomplishments.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item) => {
            const isPlaceholder = item.title.includes('[ADD ACHIEVEMENT]');

            return (
              <div
                key={item.id}
                className={`glass-card p-6 flex flex-col justify-between space-y-4 border-slate-800 hover:border-blue-500/40 ${
                  isPlaceholder ? 'border-dashed opacity-80' : ''
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <Trophy className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {item.date}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <div className="text-xs font-mono text-blue-400 flex items-center gap-1 mt-0.5">
                      <Award className="w-3.5 h-3.5" /> {item.issuer}
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-end text-xs font-mono text-slate-400">
                  {item.link !== '#' ? (
                    <a href={item.link} target="_blank" rel="noreferrer" className="text-blue-400 hover:text-cyan-300 flex items-center gap-1">
                      Verify Recognition <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-slate-600 font-mono">[ADD VERIFICATION LINK]</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
