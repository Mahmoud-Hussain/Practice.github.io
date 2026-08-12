import React from 'react';
import { Briefcase, GraduationCap, Code } from 'lucide-react';

export default function Experience() {
  const timeline = [
    {
      period: '2023 - Present',
      role: '2D Graphics Designer',
      company: 'Luminoso Events',
      type: 'Work Experience',
      icon: Briefcase,
      color: 'from-pink-500 to-rose-500',
      description:
        'Designing high-resolution event graphics, stage backdrops, brand visuals, posters, and social media media kits for major client events.',
      highlights: [
        'Photoshop & Illustrator stage design',
        'Custom event visual branding',
        'Client communication & concept art',
      ],
    },
    {
      period: '2022 - Present',
      role: 'B.Sc in Computer Science & Engineering',
      company: 'University / Undergraduate',
      type: 'Education',
      icon: GraduationCap,
      color: 'from-sky-500 to-blue-500',
      description:
        'Focusing on core computer science fundamentals, data structures, algorithms, object-oriented programming, computer graphics, and full-stack software development.',
      highlights: [
        'Java, Python, C/C++ Data Structures',
        'Web Architecture & Database Systems',
        'Software Engineering Practices',
      ],
    },
    {
      period: '2023 - Present',
      role: 'Open-Source & Game Developer',
      company: 'Independent Projects',
      type: 'Side Projects',
      icon: Code,
      color: 'from-purple-500 to-indigo-500',
      description:
        'Developing interactive web applications (Lukuchupi chat app), WebAssembly games (Space Colliders, Space Shooter), and JavaFX applications (RideHop).',
      highlights: [
        'Real-time web applications',
        'HTML5 Canvas & Pygame physics',
        'Interactive 3D web experiences',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            A timeline of my professional work experience, academic background, and technical milestones.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative pl-6 md:pl-0 space-y-12">
          
          {/* Central Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-400 via-purple-500 to-pink-500 -translate-x-1/2 opacity-30"></div>

          {timeline.map((item, index) => {
            const IconComp = item.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.role}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >

                {/* Timeline Icon Node */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 z-20 p-3 rounded-full bg-slate-900 border-2 border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.5)] text-sky-400">
                  <IconComp className="w-5 h-5" />
                </div>

                {/* Timeline Content Card */}
                <div className="w-full md:w-[calc(50%-2.5rem)] glass-card p-6 md:p-8 space-y-4 ml-8 md:ml-0">
                  
                  {/* Period Badge & Type */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-sky-300 border border-slate-700">
                      {item.period}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {item.type}
                    </span>
                  </div>

                  {/* Title & Company */}
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.role}</h3>
                    <p className="text-sm font-semibold text-purple-400 mt-0.5">
                      {item.company}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-1.5 pt-2">
                    {item.highlights.map((point) => (
                      <li key={point} className="text-xs text-slate-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                        {point}
                      </li>
                    ))}
                  </ul>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
