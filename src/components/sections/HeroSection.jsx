import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, ChevronDown } from 'lucide-react';
import { siteContent } from '../../data/siteContent';

export default function HeroSection({ onRequestDemo }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative min-h-screen min-h-[100dvh] w-full flex flex-col items-center justify-center bg-[#012239] bg-radial-hero bg-financial-grid text-white pt-28 pb-16 sm:pt-32 sm:pb-20 px-5 sm:px-8 overflow-hidden">
      {/* Background Hero Image - Full Coverage across all screen sizes and breakpoints */}
      <img
        src="/Hero_background.png"
        alt=""
        decoding="async"
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
      />

      {/* Subtle depth overlay for maximum contrast and polish */}
      <div className="absolute inset-0 bg-[#012239]/20 pointer-events-none select-none" />

      <div className="relative max-w-5xl mx-auto text-center z-10 my-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 sm:space-y-8"
        >
          {/* Master Headline: Built for Finance */}
          <motion.h1
            variants={itemVariants}
            className="font-display-serif text-5xl xs:text-[3.25rem] sm:text-7xl md:text-8xl lg:text-[6.8rem] font-normal tracking-tight text-white leading-[1.08] sm:leading-[1.05]"
          >
            Built for{' '}
            <span className="italic font-light text-white transition-colors duration-500">
              Finance
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed tracking-wide"
          >
            {siteContent.hero.subheadline}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <button
              onClick={onRequestDemo}
              className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#FBFBF9] text-[#013b61] font-medium text-sm tracking-wide hover:bg-white hover:shadow-[0_0_35px_rgba(255,255,255,0.35)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer shadow-md"
            >
              <span>{siteContent.hero.primaryCta}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <a
              href="#product"
              className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 font-medium text-sm tracking-wide backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>{siteContent.hero.secondaryCta}</span>
            </a>
          </motion.div>

          {/* Trust badges footer */}
          <motion.div
            variants={itemVariants}
            className="pt-6 sm:pt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[11px] sm:text-xs text-white/60 tracking-wider font-mono"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span>SOC 2 Type II Certified</span>
            </div>
            <span className="text-white/20 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span>Zero Customer Data Retention</span>
            </div>
            <span className="text-white/20 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span>Dedicated Enterprise Tenant</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Gentle scroll indicator (visible on tablet and desktop) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-white/50 text-[11px] uppercase tracking-widest pointer-events-none z-10"
      >
        <span>Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-white/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}

