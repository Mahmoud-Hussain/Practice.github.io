import React from 'react';
import { ExternalLink, Github, Sparkles, MessageSquare, Palette, Gamepad2, Rocket, Layers, Car } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Lukuchupi',
      description: 'An open-source real-time chat application for modern communication.',
      image: '/assets/images/lukuchupi.png',
      icon: MessageSquare,
      tags: ['Web App', 'Real-Time Chat', 'Open Source'],
      liveUrl: 'https://lukuchupi.onrender.com/',
      githubUrl: null,
      primaryAction: 'Join Now',
    },
    {
      title: 'Graphics Design Gallery',
      description: 'A collection of my creative graphic design work, including wedding stage designs and event branding.',
      image: '/assets/images/1.jpg',
      icon: Palette,
      tags: ['Photoshop', 'Illustrator', 'Stage Design'],
      liveUrl: 'graphics.html',
      githubUrl: null,
      primaryAction: 'View Gallery',
    },
    {
      title: 'Space Shooter',
      description: 'A classic 2D space shooter game built with HTML5 Canvas and JavaScript. Survive the alien wave!',
      image: 'games/shooting-game/game.png',
      icon: Gamepad2,
      tags: ['HTML5 Canvas', 'JavaScript', 'Game Dev'],
      liveUrl: 'games/shooting-game/index.html',
      githubUrl: 'https://github.com/Mahmoud-Hussain/Basic-shooting-game',
      primaryAction: 'Play Game',
    },
    {
      title: 'Space Colliders',
      description: 'A thrilling space survival game built with Python & Pygame, running directly in the browser via WebAssembly!',
      image: '/assets/images/spacecolliders.png',
      icon: Rocket,
      tags: ['Python', 'Pygame', 'WebAssembly'],
      liveUrl: null,
      githubUrl: 'https://github.com/Mahmoud-Hussain/Space-Colliders',
      primaryAction: 'GitHub Repo',
    },
    {
      title: 'Flashcard App',
      description: 'Lightweight browser application to create, organize, and review interactive study flashcards.',
      image: '/assets/images/flashcard_preview.png',
      icon: Layers,
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      liveUrl: 'https://mahmoud-hussain.github.io/flashcard/',
      githubUrl: 'https://github.com/Mahmoud-Hussain/flashcard',
      primaryAction: 'Open App',
    },
    {
      title: 'RideHop',
      description: 'JavaFX carpool prototype — connects riders and drivers for shared trips and efficient navigation.',
      image: null, // Placeholder car icon
      icon: Car,
      tags: ['Java', 'JavaFX', 'Maven'],
      liveUrl: null,
      githubUrl: 'https://github.com/Mahmoud-Hussain/RideHop',
      primaryAction: 'GitHub Repo',
    },
  ];

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            Explore my latest web applications, interactive games, and 2D graphic design work.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj) => {
            const IconComp = proj.icon;
            return (
              <div key={proj.title} className="glass-card flex flex-col overflow-hidden group">
                
                {/* Project Image / Visual banner */}
                <div className="h-52 w-full relative overflow-hidden bg-slate-900 flex items-center justify-center">
                  {proj.image ? (
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                        e.target.parentNode.classList.add('bg-gradient-to-br', 'from-indigo-900', 'to-slate-900');
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 flex items-center justify-center">
                      <IconComp className="w-16 h-16 text-sky-400 opacity-80 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  )}

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060814] via-transparent to-transparent opacity-80"></div>
                </div>

                {/* Content info */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <IconComp className="w-5 h-5 text-sky-400" />
                      <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                        {proj.title}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-slate-800/80 text-sky-300 border border-slate-700/60 font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-neon text-xs py-2 px-4 flex-1 justify-center"
                      >
                        {proj.primaryAction}
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub Repository"
                        className="p-2.5 rounded-xl bg-slate-800/70 border border-slate-700 text-slate-300 hover:text-white hover:border-sky-400 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
