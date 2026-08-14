import React from 'react';
import { Brain, Search, Code, CheckCircle, Lightbulb, Zap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const mentalModelSteps = [
    {
      step: "01",
      title: "Deconstruct & Understand",
      icon: Search,
      description: "When encountering an unfamiliar domain or bug, I analyze the underlying mechanisms rather than guessing."
    },
    {
      step: "02",
      title: "Targeted Learning",
      icon: Brain,
      description: "I absorb documentation, underlying source code, and key primitives required to solve the problem."
    },
    {
      step: "03",
      title: "Build & Experiment",
      icon: Code,
      description: "I write functional, testable prototypes to validate solutions against real-world performance constraints."
    },
    {
      step: "04",
      title: "Refine & Modularize",
      icon: CheckCircle,
      description: "Clean up abstractions, optimize performance, and document the architecture for long-term maintainability."
    }
  ];

  return (
    <section id="about" className="py-24 relative z-10 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="section-tag">
            <span>02 — ABOUT</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            How Does Mahmoud Think?
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-3xl">
            My engineering mindset is rooted in curiosity, systematic problem breakdown, and continuous adaptation.
          </p>
        </div>

        {/* Philosophy & Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 md:p-8 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-amber-400" />
                The "Learn & Build" Engineering Mindset
              </h3>
              
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                {personalInfo.bio[0]}
              </p>
              
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                {personalInfo.bio[1]}
              </p>

              <div className="p-4 rounded-lg bg-blue-950/40 border border-blue-500/20 text-slate-200 text-sm space-y-2">
                <div className="font-mono text-xs text-blue-400 font-semibold uppercase">
                  Direct Engineering Ethos
                </div>
                <p className="italic">
                  "I don't wait until I know everything to start building. I start with clear principles, learn what is required along the way, and take responsibility for delivering a working solution."
                </p>
              </div>
            </div>
          </div>

          {/* Philosophy Principles */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-sm font-mono text-slate-400 uppercase tracking-wider">
              Core Principles
            </div>

            <div className="space-y-3">
              {personalInfo.philosophy.principles.map((p, idx) => (
                <div key={idx} className="glass-card p-4 hover:border-blue-500/30 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded bg-blue-600/10 text-blue-400 border border-blue-500/20 mt-0.5">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-100">{p.title}</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-normal">{p.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Mental Model / Learning Loop */}
        <div className="space-y-6 pt-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-white">Systematic Problem-Solving Loop</h3>
            <p className="text-xs font-mono text-slate-400">HOW I APPROACH UNFAMILIAR CHALLENGES</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentalModelSteps.map((item) => {
              const IconComp = item.icon;
              return (
                <div key={item.step} className="glass-card p-6 relative group border-slate-800">
                  <div className="flex items-center justify-between text-xs font-mono text-blue-400 mb-4">
                    <span>STEP // {item.step}</span>
                    <IconComp className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-100 mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
