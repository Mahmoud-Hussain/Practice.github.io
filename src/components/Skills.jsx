import React from 'react';
import { Code2, Palette, Terminal, Gamepad2 } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend & Web',
      icon: Code2,
      color: 'from-sky-400 to-blue-600',
      skills: [
        { name: 'HTML5 / CSS3', level: '95%' },
        { name: 'JavaScript (ES6+)', level: '90%' },
        { name: 'React & Three.js', level: '85%' },
        { name: 'React Three Fiber', level: '80%' },
        { name: 'Tailwind / Glassmorphism', level: '90%' },
      ],
    },
    {
      title: 'Languages & Software',
      icon: Terminal,
      color: 'from-purple-400 to-indigo-600',
      skills: [
        { name: 'Java & JavaFX', level: '88%' },
        { name: 'Python & Pygame', level: '85%' },
        { name: 'WebAssembly / Pygbag', level: '78%' },
        { name: 'Maven & OOP Architecture', level: '82%' },
        { name: 'Git / GitHub', level: '90%' },
      ],
    },
    {
      title: '2D Graphics & Design',
      icon: Palette,
      color: 'from-pink-400 to-rose-600',
      skills: [
        { name: 'Adobe Photoshop', level: '95%' },
        { name: 'Adobe Illustrator', level: '90%' },
        { name: 'Event Stage & Banner Design', level: '92%' },
        { name: 'Brand Identity & Posters', level: '88%' },
        { name: 'UI / UX Prototyping', level: '85%' },
      ],
    },
    {
      title: 'Game Dev & Interactive',
      icon: Gamepad2,
      color: 'from-amber-400 to-orange-600',
      skills: [
        { name: 'HTML5 Canvas Games', level: '88%' },
        { name: 'Pygame & Space Simulators', level: '85%' },
        { name: '3D Interactive Spline/Three', level: '82%' },
        { name: 'Game Physics & Collision', level: '80%' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative z-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Technical &amp; Creative <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            A comprehensive overview of my software engineering capabilities and graphic design expertise.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat) => {
            const IconComp = cat.icon;
            return (
              <div key={cat.title} className="glass-card p-8 space-y-6">
                <div className="flex items-center gap-4 border-b border-slate-800 pb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${cat.color} text-white shadow-lg`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-slate-200">{skill.name}</span>
                        <span className="text-xs font-mono text-sky-400">{skill.level}</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-800/80 overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${cat.color} transition-all duration-1000`}
                          style={{ width: skill.level }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
