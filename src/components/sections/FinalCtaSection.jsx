import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Mail } from 'lucide-react';
import { siteContent } from '../../data/siteContent';

export default function FinalCtaSection({ onRequestDemo }) {
  const cta = siteContent.finalCta;

  return (
    <section id="cta" className="relative bg-[#FBFBF9] py-36 px-6 sm:px-8 overflow-hidden text-center">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#204862]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#204862]/10 text-[#204862] text-xs font-semibold uppercase tracking-widest border border-[#204862]/20">
            <span>Institutional Transformation</span>
          </div>

          <h2 className="font-display-serif text-5xl sm:text-6xl md:text-7xl text-[#0F1412] font-normal tracking-tight leading-[1.08]">
            {cta.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#526059] font-light max-w-2xl mx-auto leading-relaxed">
            {cta.subheading}
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button
            onClick={onRequestDemo}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#013b61] text-white font-medium text-sm tracking-wide hover:bg-[#204862] hover:shadow-[0_10px_30px_rgba(1,59,97,0.25)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>{cta.primaryCta}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <button
            onClick={onRequestDemo}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#F0EFEA] text-[#0F1412] border border-[#D5D2C8] font-medium text-sm tracking-wide hover:bg-[#E6E4DC] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-[#526059]" />
            <span>{cta.secondaryCta}</span>
          </button>
        </motion.div>

        {/* Onboarding SLA notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pt-8 text-xs text-[#76857E] font-light"
        >
          <p>{cta.notice}</p>
        </motion.div>
      </div>
    </section>
  );
}

