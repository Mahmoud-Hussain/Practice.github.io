import React from 'react';
import { ExternalLink, Github, Layers, CheckCircle2, AlertCircle } from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="section-tag">
            <span>05 — PROJECTS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            What Has Mahmoud Built?
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-3xl">
            Featured software projects, architectural breakdowns, and structured project cards ready for expansion.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const isPlaceholder = project.title.includes('[ADD PROJECT]');

            return (
              <div
                key={project.id}
                className={`glass-card p-6 flex flex-col justify-between space-y-6 relative transition-all ${
                  isPlaceholder
                    ? 'border-dashed border-slate-700/80 bg-slate-950/40 opacity-85 hover:opacity-100 hover:border-blue-500/40'
                    : 'border-slate-800 hover:border-blue-500/40'
                }`}
              >
                <div className="space-y-4">
                  
                  {/* Category & Status Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-blue-400 bg-blue-950/60 px-2.5 py-0.5 rounded border border-blue-500/20">
                      {project.category}
                    </span>

                    {isPlaceholder ? (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> PLACEHOLDER
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> {project.status}
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Detailed Description */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Architecture Highlights */}
                  {project.architectureHighlights && (
                    <div className="space-y-2 pt-2 border-t border-slate-800/80">
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wide flex items-center gap-1">
                        <Layers className="w-3.5 h-3.5 text-blue-400" /> Architecture Highlights
                      </div>
                      <ul className="space-y-1">
                        {project.architectureHighlights.map((hl, idx) => (
                          <li key={idx} className="text-xs text-slate-400 flex items-start gap-1.5">
                            <span className="text-blue-400 font-mono mt-0.5">›</span>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>

                {/* Footer: Tech Stack Tags & Actions */}
                <div className="space-y-4 pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="skill-pill">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1 text-xs">
                    {project.github !== '#' ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-300 hover:text-blue-400 flex items-center gap-1 font-mono transition-colors"
                      >
                        <Github className="w-4 h-4" /> Source Code
                      </a>
                    ) : (
                      <span className="text-slate-600 font-mono flex items-center gap-1">
                        <Github className="w-4 h-4" /> [ADD LINK]
                      </span>
                    )}

                    {project.demo !== '#' ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-400 hover:text-cyan-300 flex items-center gap-1 font-mono transition-colors"
                      >
                        Live Demo <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-slate-600 font-mono flex items-center gap-1">
                        [ADD DEMO] <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    )}
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
