import React from 'react';
import { Microscope, BookOpen, Sparkles, ArrowUpRight } from 'lucide-react';
import { research } from '../data/portfolioData';

export default function Research() {
  return (
    <section id="research" className="py-24 relative z-10 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="section-tag">
            <span>06 — RESEARCH</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            What Does Mahmoud Investigate?
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-3xl">
            Technical deep-dives, architecture explorations, and ongoing investigations into software systems.
          </p>
        </div>

        {/* Research Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {research.map((item) => {
            const isPlaceholder = item.title.includes('[ADD RESEARCH]');

            return (
              <div
                key={item.id}
                className={`glass-card p-6 md:p-8 space-y-5 flex flex-col justify-between border-slate-800 hover:border-blue-500/40 ${
                  isPlaceholder ? 'border-dashed opacity-80' : ''
                }`}
              >
                <div className="space-y-4">
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-purple-400 bg-purple-950/50 px-2.5 py-0.5 rounded border border-purple-500/20 flex items-center gap-1.5">
                      <Microscope className="w-3.5 h-3.5" /> {item.area}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{item.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.summary}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-800/80">
                    <div className="text-xs font-mono text-blue-400 font-semibold uppercase">
                      Key Takeaways & Findings
                    </div>
                    <ul className="space-y-1">
                      {item.keyTakeaways.map((takeaway, idx) => (
                        <li key={idx} className="text-xs text-slate-400 flex items-start gap-1.5">
                          <span className="text-blue-400 font-mono">▸</span>
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1 text-blue-300">
                    <BookOpen className="w-3.5 h-3.5" /> Status: {item.status}
                  </span>
                  {!isPlaceholder && (
                    <span className="text-slate-400 hover:text-blue-400 cursor-pointer flex items-center gap-0.5">
                      Read Notes <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
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
