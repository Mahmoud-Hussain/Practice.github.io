import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Engineering from './components/Engineering';
import Projects from './components/Projects';
import Research from './components/Research';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-[#070913] text-slate-100 relative overflow-x-hidden">
      
      {/* Sleek Navigation Bar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* 12 Core Sections Hierarchy */}
      <main className="relative z-10">
        {/* 01 — HOME */}
        <Hero />

        {/* 02 — ABOUT */}
        <About />

        {/* 03 — TECHNOLOGIES */}
        <Technologies />

        {/* 04 — ENGINEERING */}
        <Engineering />

        {/* 05 — PROJECTS */}
        <Projects />

        {/* 06 — RESEARCH */}
        <Research />

        {/* 07 — EXPERIENCE */}
        <Experience />

        {/* 08 — ACHIEVEMENTS */}
        <Achievements />

        {/* 09 — CERTIFICATIONS */}
        <Certifications />

        {/* 10 — BLOG */}
        <Blog />

        {/* 11 — CONTACT */}
        <Contact />
      </main>

      {/* 12 — FOOTER */}
      <Footer />

    </div>
  );
}
