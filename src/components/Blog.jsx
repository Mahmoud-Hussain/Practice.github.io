import React from 'react';
import { BookOpen, Clock, Tag, ArrowUpRight } from 'lucide-react';
import { blogPosts } from '../data/portfolioData';

export default function Blog() {
  return (
    <section id="blog" className="py-24 relative z-10 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="section-tag">
            <span>10 — BLOG & NOTES</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            What is Mahmoud Currently Learning / Thinking About?
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-3xl">
            Engineering thoughts, technical writing, continuous learning notes, and reflections.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="glass-card p-6 md:p-8 space-y-5 flex flex-col justify-between border-slate-800 hover:border-blue-500/40"
            >
              <div className="space-y-4">
                
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/50 px-2.5 py-0.5 rounded border border-cyan-500/20 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5" /> {post.category}
                  </span>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-500" /> {post.readTime}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {post.snippet}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {post.tags.map((tag, idx) => (
                    <span key={idx} className="skill-pill">
                      #{tag}
                    </span>
                  ))}
                </div>

              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400 flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-blue-400" /> Note Entry
                </span>
                <a href={post.link} className="text-blue-400 hover:text-cyan-300 flex items-center gap-1">
                  Read Note <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
