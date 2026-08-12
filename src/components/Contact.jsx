import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Send, Mail, Phone, MessageSquare, Facebook, Github, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Trigger celebratory confetti effect
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log('Confetti error:', err);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Send me a message or connect via social media.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

          {/* Social Links & Info Card */}
          <div className="lg:col-span-5 glass-card p-8 md:p-10 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-sky-400" /> Let's Connect
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                Whether you're looking for a developer for a web application, a graphic designer for custom branding & stage art, or just want to connect, feel free to reach out anytime!
              </p>

              {/* Direct Info List */}
              <div className="space-y-4 pt-2">
                <a
                  href="mailto:mahmoud.hussain@example.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-400/50 transition-colors"
                >
                  <Mail className="w-5 h-5 text-sky-400" />
                  <div>
                    <span className="block text-xs text-slate-400">Email</span>
                    <span className="font-semibold text-sm">Direct Contact</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/01836288874"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-green-400 hover:border-green-400/50 transition-colors"
                >
                  <MessageSquare className="w-5 h-5 text-green-400" />
                  <div>
                    <span className="block text-xs text-slate-400">WhatsApp</span>
                    <span className="font-semibold text-sm">+880 1836-288874</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Large Social Media Icons */}
            <div className="space-y-3 pt-6 border-t border-slate-800">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Social Channels</span>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/mhbaws"
                  target="_blank"
                  rel="noreferrer"
                  title="Facebook"
                  className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 hover:text-sky-400 hover:border-sky-400 transition-all hover:scale-110"
                >
                  <Facebook className="w-5 h-5" />
                </a>

                <a
                  href="https://github.com/Mahmoud-Hussain"
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub"
                  className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 hover:text-purple-400 hover:border-purple-400 transition-all hover:scale-110"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href="https://wa.me/01836288874"
                  target="_blank"
                  rel="noreferrer"
                  title="WhatsApp"
                  className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 hover:text-green-400 hover:border-green-400 transition-all hover:scale-110"
                >
                  <i className="fab fa-whatsapp text-lg"></i>
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Form Card */}
          <div className="lg:col-span-7 glass-card p-8 md:p-10">
            {submitted ? (
              <div className="h-full min-h-[360px] flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in duration-500">
                <div className="p-4 rounded-full bg-sky-500/20 text-sky-400 border border-sky-400/40">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-slate-300 max-w-md">
                  Thank you for reaching out, {formData.name || 'friend'}! I will get back to you as soon as possible.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
                  className="btn-glass text-xs mt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project or idea..."
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all resize-none"
                  ></textarea>
                </div>

                <button type="submit" className="btn-neon w-full justify-center py-4 text-base">
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
