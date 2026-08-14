import React from 'react';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative z-10 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="section-tag">
            <span>09 — CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            What Has Mahmoud Formally Learned?
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-3xl">
            Formal training, completed credentials, verified technical specifications, and structured certification placeholders.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => {
            const isPlaceholder = cert.title.includes('[ADD CERTIFICATION]');

            return (
              <div
                key={cert.id}
                className={`glass-card p-6 flex flex-col justify-between space-y-4 border-slate-800 hover:border-blue-500/40 ${
                  isPlaceholder ? 'border-dashed opacity-80' : ''
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg bg-blue-600/10 text-blue-400 border border-blue-500/20">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      Issued: {cert.issueDate}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                    <div className="text-xs font-mono text-blue-400 mt-0.5">{cert.issuer}</div>
                  </div>

                  <div className="text-xs font-mono text-slate-400">
                    Credential ID: <span className="text-slate-300">{cert.credentialId}</span>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      Skills Covered
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsCovered.map((skill, idx) => (
                        <span key={idx} className="skill-pill">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Formal Status Verified
                  </span>

                  {cert.credentialUrl !== '#' ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-400 hover:text-cyan-300 flex items-center gap-1"
                    >
                      Credential URL <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-slate-600">[ADD URL]</span>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
