import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ArrowUpRight,
  ShieldCheck,
  ArrowRight,
  Activity
} from 'lucide-react';
import { siteContent } from '../../data/siteContent';

const menuDescriptions = {
  Product: 'Core Generative AI Financial Stack & Modeling',
  Solutions: 'Institutional Banking, PE & Hedge Funds',
  Partnership: 'Enterprise Data, Cloud & Security Ecosystem',
  'Case Studies': 'Validated Deployments & High-Yield Workflows',
  Security: 'SOC 2 Type II Certified • Zero Data Retention',
  Newsroom: 'Research Reports, Market Insights & Press'
};

export default function Navbar({ onRequestDemo }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('Solutions');
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  // Scroll detection for navbar background adaptation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and handle ESC key when side menu is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSideMenuOpen(false);
    };

    if (sideMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [sideMenuOpen]);

  const handleSideNavClick = useCallback(
    (label, href) => {
      setActiveTab(label);
      setSideMenuOpen(false);
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 350);
    },
    []
  );

  return (
    <>
      {/* Top Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled
          ? 'py-3 bg-[#013b61]/90 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.35)]'
          : 'py-3 bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Logo (Left) */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Kinetiq Home"
          >
            <img
              src="/Kinetiq_logo_white.png"
              alt="Kinetiq"
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Right Action CTAs & Side Menu Trigger */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Desktop Log In Link */}
            <button
              onClick={onRequestDemo}
              className="hidden sm:inline-block text-xs uppercase tracking-[0.2em] font-medium text-white/80 hover:text-white transition-colors cursor-pointer px-2 py-1"
            >
              Log in
            </button>

            {/* Request Demo Pill Button (Visible on sm+ screens, hidden on mobile) */}
            <button
              onClick={onRequestDemo}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-white text-[#013b61] hover:bg-sky-100 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-300 group cursor-pointer shadow-md"
            >
              <span>{siteContent.navigation.cta.primary}</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Unique Animated Side Menu Trigger Button */}
            <button
              onClick={() => setSideMenuOpen(true)}
              className="group relative flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-400/50"
              aria-label="Open comprehensive institutional menu"
              aria-expanded={sideMenuOpen}
            >
              <span className="text-[11px] sm:text-xs uppercase tracking-widest font-medium text-white/90 group-hover:text-white">
                Menu
              </span>
              <div className="w-4 h-3 flex flex-col justify-between items-end">
                <span className="w-4 h-[1.5px] bg-white rounded-full transition-all duration-300 group-hover:w-3" />
                <span className="w-2.5 h-[1.5px] bg-sky-400 rounded-full transition-all duration-300 group-hover:w-4" />
                <span className="w-3.5 h-[1.5px] bg-white rounded-full transition-all duration-300 group-hover:w-2" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Unique Animated Side Menu Overlay */}
      <AnimatePresence>
        {sideMenuOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Cinematic Backdrop with atmospheric blur and darkening */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              onClick={() => setSideMenuOpen(false)}
              className="fixed inset-0 bg-black/75 backdrop-blur-2xl transition-opacity"
            />

            {/* Sliding Bespoke Institutional Navigation Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-xl sm:max-w-2xl bg-gradient-to-br from-[#012239] via-[#013b61] to-[#204862] border-l border-[#204862]/50 shadow-[-30px_0_90px_rgba(0,0,0,0.85)] flex flex-col justify-between p-6 sm:p-10 md:p-12 overflow-y-auto z-10"
            >
              {/* Subtle Atmospheric Grid Background Inside Drawer */}
              <div className="absolute inset-0 bg-financial-grid opacity-30 pointer-events-none" />
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#204862]/30 rounded-full blur-[120px] pointer-events-none" />

              {/* Panel Header */}
              <div className="relative z-10 flex items-center justify-between pb-8 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <img
                    src="/Kinetiq_logo_white.png"
                    alt="Kinetiq"
                    className="h-7 sm:h-8 w-auto object-contain"
                  />
                </div>

                {/* Tactile Rotating Close Button */}
                <button
                  onClick={() => setSideMenuOpen(false)}
                  className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-all duration-300 cursor-pointer focus:outline-none"
                  aria-label="Close menu"
                >
                  <span className="text-[10px] uppercase font-mono tracking-widest text-white/50 group-hover:text-white/80 transition-colors">
                    ESC
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-500 group-hover:rotate-90 group-hover:bg-[#204862]">
                    <X className="w-4 h-4 text-white" />
                  </div>
                </button>
              </div>

              {/* Staggered Navigation Items List */}
              <motion.nav
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.07,
                      delayChildren: 0.15
                    }
                  }
                }}
                className="relative z-10 py-8 my-auto space-y-2 sm:space-y-3"
              >
                {siteContent.navigation.links.map((link, idx) => {
                  const numStr = String(idx + 1).padStart(2, '0');
                  const isActive = activeTab.toLowerCase() === link.label.toLowerCase();
                  const description =
                    menuDescriptions[link.label] || 'Institutional Generative AI Solution';

                  return (
                    <motion.div
                      key={link.label}
                      variants={{
                        hidden: { opacity: 0, x: 40, filter: 'blur(6px)' },
                        visible: {
                          opacity: 1,
                          x: 0,
                          filter: 'blur(0px)',
                          transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
                        }
                      }}
                    >
                      <button
                        onClick={() => handleSideNavClick(link.label, link.href)}
                        className={`w-full group text-left p-3 sm:p-4 rounded-2xl transition-all duration-300 flex items-center justify-between cursor-pointer border ${isActive
                          ? 'bg-[#204862]/30 border-[#204862] shadow-[0_4px_24px_rgba(32,72,98,0.4)]'
                          : 'border-transparent hover:bg-white/[0.04] hover:border-white/10'
                          }`}
                      >
                        <div className="flex items-center gap-4 sm:gap-6">
                          <span
                            className={`font-mono text-xs tracking-widest transition-colors duration-300 ${isActive
                              ? 'text-sky-300 font-semibold'
                              : 'text-white/40 group-hover:text-sky-200'
                              }`}
                          >
                            {numStr}
                          </span>
                          <div>
                            <div className="flex items-center gap-3">
                              <h3
                                className={`font-display-serif text-2xl sm:text-3xl md:text-4xl tracking-tight transition-all duration-300 ${isActive
                                  ? 'text-white font-normal translate-x-1'
                                  : 'text-white/80 group-hover:text-white group-hover:translate-x-1'
                                  }`}
                              >
                                {link.label}
                              </h3>
                              {isActive && (
                                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_10px_#38bdf8]" />
                              )}
                            </div>
                            <p className="text-xs text-white/50 group-hover:text-white/80 transition-colors mt-0.5 font-light">
                              {description}
                            </p>
                          </div>
                        </div>

                        {/* Hover reveal arrow indicator */}
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${isActive
                            ? 'bg-[#204862] text-sky-200 border border-sky-400/40 shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                            : 'bg-white/5 border border-white/10 text-white/40 group-hover:bg-[#204862]/50 group-hover:text-white group-hover:border-[#204862] group-hover:translate-x-1'
                            }`}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </button>
                    </motion.div>
                  );
                })}
              </motion.nav>

              {/* Panel Footer: Institutional CTAs & Trust Badges */}
              <div className="relative z-10 pt-6 border-t border-white/10 space-y-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      setSideMenuOpen(false);
                      onRequestDemo();
                    }}
                    className="w-full sm:flex-1 py-4 sm:py-3.5 px-6 bg-white text-[#013b61] hover:bg-sky-100 rounded-full text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 shadow-lg transition-all duration-300 group cursor-pointer"
                  >
                    <span>Request Demo</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                  <button
                    onClick={() => {
                      setSideMenuOpen(false);
                      onRequestDemo();
                    }}
                    className="w-full sm:w-auto py-3.5 px-6 rounded-full border border-white/20 hover:border-white/40 text-white text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:bg-white/5 cursor-pointer text-center"
                  >
                    Log In / Portal
                  </button>
                </div>

                {/* Institutional Security & Status Line */}
                <div className="flex flex-wrap items-center justify-between text-[11px] text-white/50 pt-2 gap-2 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                    <span>SOC 2 Type II Certified • Zero Data Retention</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-sky-400" />
                    <span>Grid Status: Operational</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
