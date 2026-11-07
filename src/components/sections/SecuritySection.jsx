import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, FileCheck2, KeyRound, DatabaseZap, History, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { siteContent } from '../../data/siteContent';

export default function SecuritySection({ onRequestDemo }) {
  const security = siteContent.security;

  const securityIcons = [
    ShieldCheck,
    FileCheck2,
    DatabaseZap,
    Lock,
    KeyRound,
    History
  ];

  return (
    <section id="security" className="relative bg-radial-vault bg-[#013b61] text-white py-28 px-6 sm:px-8 overflow-hidden border-b border-white/10">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#204862]/30 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 space-y-3">
          <h2 className="font-display-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight">
            {security.heading}
          </h2>
          <p className="text-base sm:text-lg text-white/70 font-light max-w-2xl leading-relaxed">
            {security.subheading}
          </p>
        </div>

        {/* 6 Security Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {security.features.map((item, idx) => {
            const Icon = securityIcons[idx];

            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.3)' }}
                transition={{ duration: 0.25 }}
                className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:bg-white/[0.08] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#204862]/30 border border-[#204862] text-sky-400 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display-serif text-2xl text-white font-normal mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-sky-300">
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Compliance</span>
                  </div>
                  <span className="text-white/40">Tier 1</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Badges Bar & Security Whitepaper CTA */}
        <div className="p-8 bg-white/5 border border-white/15 rounded-2xl backdrop-blur-md flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <h4 className="font-display-serif text-xl sm:text-2xl text-white">
              Institutional Security Whitepaper & SOC 2 Report
            </h4>
            <p className="text-xs sm:text-sm text-white/60">
              Access third-party audit reports, penetration test summaries, and our complete data-flow architecture.
            </p>
          </div>

          <button
            onClick={onRequestDemo}
            className="px-6 py-3.5 rounded-full bg-white text-[#013b61] hover:bg-sky-100 font-semibold text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 group flex-shrink-0 cursor-pointer shadow-lg"
          >
            <span>Request Security Dossier</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

