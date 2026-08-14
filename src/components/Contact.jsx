import React, { useState } from 'react';
import { Mail, Send, Github, Linkedin, Twitter, MessageSquare, CheckCircle2 } from 'lucide-react';
import { personalInfo, socials } from '../data/portfolioData';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
  };

  const socialIconMap = {
    Github: Github,
    Linkedin: Linkedin,
    Mail: Mail,
    Twitter: Twitter,
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="section-tag">
            <span>11 — CONTACT</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            How Can Someone Work With Mahmoud?
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-3xl">
            Whether you have a complex engineering problem to solve, a full-stack role, or architectural project, I'd love to connect.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Engineer Message & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 md:p-8 space-y-6 border-slate-800">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-blue-400" />
                  Direct Channels
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  I prioritize direct, clear communication. Feel free to reach out via email or any of the professional networks below.
                </p>
              </div>

              {/* Status Badge */}
              <div className="p-3 rounded-lg bg-blue-950/40 border border-blue-500/20 text-xs font-mono text-blue-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{personalInfo.status}</span>
              </div>

              {/* Social Channels List */}
              <div className="space-y-3 pt-2">
                {socials.map((social) => {
                  const IconComp = socialIconMap[social.icon] || Mail;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800/80 flex items-center justify-between hover:border-blue-500/40 hover:bg-slate-900 transition-all text-slate-200 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded bg-blue-600/10 text-blue-400 group-hover:text-cyan-300 transition-colors">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-mono text-slate-400">{social.name}</div>
                          <div className="text-sm font-semibold text-slate-100 group-hover:text-blue-400 transition-colors">
                            {social.handle}
                          </div>
                        </div>
                      </div>

                      <span className="text-xs font-mono text-slate-500 group-hover:text-blue-400 transition-colors">
                        Connect →
                      </span>
                    </a>
                  );
                })}
              </div>

            </div>
          </div>

          {/* Right Column: Direct Message Form UI */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 md:p-8 space-y-6 border-slate-800">
              
              <div>
                <h3 className="text-xl font-bold text-white">Send a Direct Message</h3>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  NO SPAM // DIRECT INQUIRIES ONLY
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Message Transmitted</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out! I will review your message and respond promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary text-xs mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 uppercase">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Alex Mercer"
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 uppercase">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 uppercase">Project / Role Details</label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Briefly describe the engineering challenge, position, or project..."
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-electric w-full justify-center py-3">
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
