import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-slate-800/80 bg-[#04060f] py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Copyright */}
        <p className="text-sm text-slate-400 text-center md:text-left">
          &copy; {new Date().getFullYear()} <strong className="text-white font-semibold">Mahmoud Hussain</strong>. All rights reserved. Built with React &amp; Three.js.
        </p>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          aria-label="Back to Top"
          className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-400 transition-colors flex items-center gap-2 text-xs font-medium"
        >
          Back to top
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
}
