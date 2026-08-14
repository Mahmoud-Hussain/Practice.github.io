import React, { useState } from 'react';
import { Code2, Layout, Server, Database, Terminal, Layers } from 'lucide-react';
import { technologies } from '../data/portfolioData';

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState('all');

  const iconMap = {
    Code2: Code2,
    Layout: Layout,
    Server: Server,
    Database: Database,
    Terminal: Terminal,
  };

  const categories = technologies.categories;

  const filteredCategories = activeCategory === 'all'
    ? categories
    : categories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="section-tag">
              <span>03 — TECHNOLOGIES</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              What Does Mahmoud Work With?
            </h2>
            <p className="text-slate-400 text-base md:text-lg max-w-2xl">
              Categorized technologies, frameworks, and developer tooling used to architect software solutions.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
              }`}
            >
              ALL_STACKS
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
                }`}
              >
                {cat.id.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Technology Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const IconComponent = iconMap[category.icon] || Layers;
            return (
              <div key={category.id} className="glass-card p-6 space-y-5 border-slate-800/80 hover:border-blue-500/30">
                
                {/* Category Header */}
                <div className="flex items-start justify-between border-b border-slate-800/80 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-blue-600/10 text-blue-400 border border-blue-500/20">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{category.title}</h3>
                      <p className="text-xs text-slate-400">{category.description}</p>
                    </div>
                  </div>
                </div>

                {/* Skills Pills / Table */}
                <div className="space-y-2.5">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 flex items-center justify-between hover:border-slate-700 transition-colors"
                    >
                      <div className="space-y-0.5">
                        <span className="text-sm font-semibold text-slate-200 block">{skill.name}</span>
                        <span className="text-[11px] font-mono text-slate-400">{skill.category}</span>
                      </div>

                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                          skill.level.includes('Advanced')
                            ? 'bg-blue-500/10 text-blue-400 border-blue-500/30'
                            : skill.level.includes('Learning')
                            ? 'bg-purple-500/10 text-purple-400 border-purple-500/30'
                            : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                        }`}
                      >
                        {skill.level}
                      </span>
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
