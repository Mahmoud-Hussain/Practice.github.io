import React, { useEffect } from 'react';
import { UserCheck, Award, GraduationCap, Briefcase } from 'lucide-react';

export default function About() {
  useEffect(() => {
    // Initialize GitHub calendar widget if available
    if (window.GitHubCalendar) {
      try {
        window.GitHubCalendar('.calendar', 'Mahmoud-Hussain', {
          responsive: true,
          tooltips: true,
        });
      } catch (err) {
        console.log('GitHub Calendar error:', err);
      }
    }
  }, []);

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            Discover my journey across software engineering, computer science, and creative visual design.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Main Story Card */}
          <div className="lg:col-span-8 glass-card p-8 md:p-10 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sky-400 font-semibold text-lg">
                <UserCheck className="w-6 h-6" />
                <span>Passionate Developer &amp; Visual Designer</span>
              </div>

              <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                I’m <strong className="text-white">Mahmoud Hussain</strong>, a Computer Science &amp; Engineering student passionate about coding and creativity. Whether crafting seamless interfaces, designing stunning graphics, or building impactful software projects, I bring dedication, detail, and curiosity to every endeavor.
              </p>

              <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                Currently working as a 2D graphics designer at{' '}
                <a
                  href="https://www.facebook.com/luminosoevents6"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-400 font-medium hover:underline inline-flex items-center gap-1"
                >
                  Luminoso Events <i className="fab fa-facebook-f text-xs"></i>
                </a>{' '}
                <a
                  href="https://www.instagram.com/luminosoevent/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="text-pink-400 font-medium hover:underline"
                >
                  <i className="fab fa-instagram"></i>
                </a>. I thrive at the intersection of design and technology, combining my skills in graphic design with solving real-world problems through code.
              </p>
            </div>

            {/* Core Competencies badges */}
            <div className="pt-6 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-col items-center justify-center">
                <GraduationCap className="w-6 h-6 mb-2 text-sky-400" />
                <span className="block text-sm font-semibold text-white">CSE Student</span>
                <span className="block text-xs text-slate-400 mt-1">Engineering</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-col items-center justify-center">
                <Briefcase className="w-6 h-6 mb-2 text-purple-400" />
                <span className="block text-sm font-semibold text-white">2D Designer</span>
                <span className="block text-xs text-slate-400 mt-1">Luminoso Events</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-col items-center justify-center">
                <Award className="w-6 h-6 mb-2 text-pink-400" />
                <span className="block text-sm font-semibold text-white">Creative Tech</span>
                <span className="block text-xs text-slate-400 mt-1">3D &amp; Web</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-col items-center justify-center">
                <UserCheck className="w-6 h-6 mb-2 text-amber-400" />
                <span className="block text-sm font-semibold text-white">Problem Solver</span>
                <span className="block text-xs text-slate-400 mt-1">Full Stack</span>
              </div>
            </div>
          </div>

          {/* Quick Info Card */}
          <div className="lg:col-span-4 glass-card p-8 flex flex-col justify-between space-y-6">
            <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
              Quick Details
            </h3>

            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex justify-between border-b border-slate-800/60 pb-2">
                <span className="text-slate-400">Location:</span>
                <span className="font-semibold text-white">Bangladesh</span>
              </li>
              <li className="flex justify-between border-b border-slate-800/60 pb-2">
                <span className="text-slate-400">Degree:</span>
                <span className="font-semibold text-white">B.Sc in CSE</span>
              </li>
              <li className="flex justify-between border-b border-slate-800/60 pb-2">
                <span className="text-slate-400">Primary Focus:</span>
                <span className="font-semibold text-sky-400">Full-Stack &amp; Design</span>
              </li>
              <li className="flex justify-between border-b border-slate-800/60 pb-2">
                <span className="text-slate-400">Graphics Role:</span>
                <span className="font-semibold text-purple-400">Luminoso Events</span>
              </li>
              <li className="flex justify-between pb-2">
                <span className="text-slate-400">Availability:</span>
                <span className="font-semibold text-green-400">Open for Collaborations</span>
              </li>
            </ul>

            <a href="#contact" className="btn-neon w-full text-center justify-center text-sm">
              Get in Touch
            </a>
          </div>

        </div>

        {/* GitHub Activity Section */}
        <div className="glass-card p-8 md:p-10 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <i className="fab fa-github text-sky-400"></i>
              GitHub <span className="gradient-text">Activity</span>
            </h3>
            <span className="text-xs font-mono text-slate-400">@Mahmoud-Hussain</span>
          </div>

          <div className="calendar text-slate-300 overflow-x-auto min-h-[160px] flex items-center justify-center">
            {/* GitHub Calendar Container */}
            <p className="text-slate-400 text-sm">Loading GitHub contribution matrix...</p>
          </div>
        </div>

      </div>
    </section>
  );
}
