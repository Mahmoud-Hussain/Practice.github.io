import React from 'react';
import { ArrowUp, Terminal, Shield } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 relative z-10 border-t border-slate-800/80 bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        
        {/* System Bar Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-800/80 pb-6 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <div className="p-1 rounded bg-blue-600/20 text-blue-400">
              <Terminal className="w-3.5 h-3.5" />
            </div>
            <span>SYSTEM // {personalInfo.name.toUpperCase()} PORTFOLIO WORLD</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              PORTFOLIO_V2.0_ONLINE
            </span>
            <span>•</span>
            <span className="text-slate-500">REACT + VITE + TAILWIND</span>
          </div>
        </div>

        {/* Navigation & Copyright Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-sm font-bold text-white tracking-tight">
              {personalInfo.name} — Personal Engineering Portfolio
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              "{personalInfo.philosophy.headline}"
            </p>
          </div>

          {/* Quick Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="btn-secondary text-xs py-2 px-3 flex items-center gap-1.5 cursor-pointer"
          >
            Back to Top <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center text-[11px] font-mono text-slate-400 pt-4 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-2">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <Shield className="w-3 h-3 text-blue-400" /> Architected with performance & modularity in mind.
          </div>
        </div>

      </div>
    </footer>
  );
}
