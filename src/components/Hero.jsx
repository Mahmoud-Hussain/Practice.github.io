import React from 'react';
import Scene from '../three/Scene';
import { ArrowRight, User, Code, Palette, Cpu, Lightbulb } from 'lucide-react';

export default function Hero() {
  const skillLabels = [
    { name: 'Developer', icon: Code },
    { name: 'Designer', icon: Palette },
    { name: 'Problem Solver', icon: Cpu },
    { name: 'Creative Thinker', icon: Lightbulb },
  ];

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* LEFT SIDE: Typography & CTA */}
        <div className="lg:col-span-6 space-y-6 z-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700/70 text-sky-400 text-sm font-medium shadow-inner animate-bounce">
            <span>Hello! I'm 👋</span>
          </div>

          {/* Main Title */}
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
              Mahmoud <br />
              <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.3)]">
                Hussain
              </span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl md:text-2xl font-semibold text-slate-300 pt-2">
              Turning ideas into digital experiences with <span className="text-sky-400 font-mono">code</span> &amp; <span className="text-purple-400">creativity</span>.
            </h2>
          </div>

          {/* Short Description */}
          <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-xl">
            I build modern, interactive and user-focused web experiences, combining software engineering with creativity. Currently working as a 2D graphics designer at <a href="https://www.facebook.com/luminosoevents6" target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">Luminoso Events</a> while pursuing Computer Science &amp; Engineering.
          </p>

          {/* Skill Labels */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            {skillLabels.map((item) => {
              const IconComp = item.icon;
              return (
                <span key={item.name} className="skill-pill">
                  <IconComp className="w-3.5 h-3.5" />
                  {item.name}
                </span>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a href="#projects" className="btn-neon text-base group">
              Explore My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a href="#about" className="btn-glass text-base">
              <User className="w-5 h-5 text-sky-400" />
              About Me
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: Interactive 3D Spline-like Hero Scene */}
        <div className="lg:col-span-6 h-[480px] lg:h-[650px] w-full relative rounded-3xl overflow-hidden glass-card p-2 border border-slate-700/50 shadow-2xl">
          <Scene />
        </div>

      </div>
    </section>
  );
}
