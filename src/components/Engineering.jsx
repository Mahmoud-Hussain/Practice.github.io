import React from 'react';
import { Cpu, ShieldCheck, CpuIcon, Gauge, Terminal } from 'lucide-react';
import { engineeringPrinciples } from '../data/portfolioData';

export default function Engineering() {
  const icons = [Cpu, ShieldCheck, CpuIcon, Gauge];

  return (
    <section id="engineering" className="py-24 relative z-10 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="section-tag">
            <span>04 — ENGINEERING</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            What Kind of Problems Does Mahmoud Solve?
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-3xl">
            My architectural mindset, problem breakdown strategy, and engineering principles when building real-world software.
          </p>
        </div>

        {/* Engineering Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {engineeringPrinciples.map((item, index) => {
            const IconComp = icons[index % icons.length];
            return (
              <div key={item.number} className="glass-card p-6 md:p-8 relative space-y-4 border-slate-800 hover:border-blue-500/40">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-blue-400 bg-blue-950/60 px-2.5 py-1 rounded border border-blue-500/20">
                    PRINCIPLE // {item.number}
                  </span>
                  <IconComp className="w-5 h-5 text-slate-400" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <div className="text-xs font-mono text-purple-400">{item.subtitle}</div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Real-World Engineering Problem Breakdown Banner */}
        <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950/40 to-slate-900 border border-blue-500/25 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wide">
            <Terminal className="w-4 h-4" /> System Design & Execution Methodology
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="text-xs font-mono text-blue-400 font-bold">01. DOMAIN ANALYTICS</div>
              <h4 className="text-sm font-bold text-white">Full-Stack Data Flow</h4>
              <p className="text-xs text-slate-400 leading-normal">
                Designing cohesive APIs and client states to ensure robust data synchronization across complex interfaces.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="text-xs font-mono text-purple-400 font-bold">02. UNFAMILIAR STACKS</div>
              <h4 className="text-sm font-bold text-white">Rapid Onboarding</h4>
              <p className="text-xs text-slate-400 leading-normal">
                Facing new technologies by digesting standard specs, testing edge cases, and building isolated proof-of-concepts.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="text-xs font-mono text-cyan-400 font-bold">03. PERFORMANCE</div>
              <h4 className="text-sm font-bold text-white">Pragmatic Optimization</h4>
              <p className="text-xs text-slate-400 leading-normal">
                Eliminating redundant network requests, optimizing bundle footprints, and crafting smooth user experiences.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
