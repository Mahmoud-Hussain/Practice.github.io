import React from 'react';
import { ArrowRight, Code2, Terminal, Cpu, Compass } from 'lucide-react';
import Scene from '../three/Scene';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      
      {/* 3D Scene Viewport Background Container */}
      <div className="absolute inset-0 z-0 opacity-40 md:opacity-60 pointer-events-auto">
        <Scene />
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Identity & Philosophy */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Status / Identity Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_#60a5fa]"></span>
              <span>01 — HOME // WHO IS MAHMOUD?</span>
            </div>

            {/* Main Name & Role */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                {personalInfo.name}
              </h1>
              <h2 className="text-xl md:text-3xl font-bold text-slate-300">
                <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                  {personalInfo.role}
                </span>
              </h2>
            </div>

            {/* Personal Philosophy Statement Callout */}
            <div className="p-5 rounded-xl bg-slate-900/80 border border-blue-500/25 backdrop-blur-md space-y-3 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wide">
                <Compass className="w-4 h-4" /> Personal Engineering Philosophy
              </div>
              <blockquote className="text-base md:text-lg font-medium text-slate-100 italic leading-relaxed">
                "{personalInfo.philosophy.headline}"
              </blockquote>
              <p className="text-xs md:text-sm text-slate-400 leading-normal">
                {personalInfo.philosophy.subtext}
              </p>
            </div>

            {/* Direct Bio Summary */}
            <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
              {personalInfo.bio[0]}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#projects" className="btn-electric">
                View Engineering Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#about" className="btn-secondary">
                How I Think <Terminal className="w-4 h-4 text-blue-400" />
              </a>
            </div>

            {/* Key Engineering Pillars Quick Bar */}
            <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-800/80">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-xs font-mono text-slate-400 uppercase">{stat.label}</div>
                  <div className="text-sm font-semibold text-slate-100">{stat.value}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Quick Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="glass-card p-6 space-y-5 border-blue-500/20">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
                  <Cpu className="w-4 h-4" /> ENGINE_STATUS
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  ONLINE
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded bg-slate-950/80 border border-slate-800 space-y-1">
                  <div className="text-slate-500">// Mindset</div>
                  <div className="text-blue-300">Continuous Curiosity</div>
                </div>
                <div className="p-3 rounded bg-slate-950/80 border border-slate-800 space-y-1">
                  <div className="text-slate-500">// Stack Strategy</div>
                  <div className="text-purple-300">Problem-First Adaptability</div>
                </div>
                <div className="p-3 rounded bg-slate-950/80 border border-slate-800 space-y-1">
                  <div className="text-slate-500">// Current Focus</div>
                  <div className="text-cyan-300">Full-Stack & System Design</div>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-slate-400 font-mono text-center">
                3D Interactive Environment Active
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
