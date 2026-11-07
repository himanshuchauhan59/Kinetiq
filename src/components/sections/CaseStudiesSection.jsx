import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight, TrendingUp, Building, LineChart, Briefcase } from 'lucide-react';
import { siteContent } from '../../data/siteContent';

export default function CaseStudiesSection({ onRequestDemo }) {
  const caseStudies = siteContent.caseStudies.items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section id="case-studies" className="relative bg-[#F6F5F1] py-28 px-6 sm:px-8 border-b border-[#E7E5DE] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#526059]">
              Institutional Impact
            </p>
            <h2 className="font-display-serif text-4xl sm:text-5xl lg:text-6xl text-[#0F1412] font-normal tracking-tight">
              {siteContent.caseStudies.heading}
            </h2>
            <p className="text-base text-[#526059] font-light">
              {siteContent.caseStudies.subheading}
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-[#D5D2C8] bg-white text-[#0F1412] hover:bg-[#013b61] hover:text-white hover:border-[#013b61] transition-all flex items-center justify-center cursor-pointer"
              aria-label="Previous case study"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-[#D5D2C8] bg-white text-[#0F1412] hover:bg-[#013b61] hover:text-white hover:border-[#013b61] transition-all flex items-center justify-center cursor-pointer"
              aria-label="Next case study"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Editorial Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => {
            const isFeatured = idx === currentIndex;

            return (
              <motion.div
                key={study.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className={`relative bg-white border rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'border-[#013b61] shadow-[0_20px_50px_rgba(1,59,97,0.15)]'
                    : 'border-[#E7E5DE] shadow-[0_4px_20px_rgba(0,0,0,0.02)]'
                }`}
              >
                {/* Visual Architectural Canvas */}
                <div className="relative aspect-[16/10] bg-[#013b61] p-6 flex flex-col justify-between overflow-hidden text-white">
                  {/* Subtle architectural atmosphere simulation */}
                  {study.theme === 'limestone' && (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#204862] via-[#013b61] to-[#011422] opacity-90" />
                  )}
                  {study.theme === 'skyscraper' && (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#184a6b] via-[#012640] to-[#011422] opacity-90" />
                  )}
                  {study.theme === 'quantitative' && (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#204862] via-[#013b61] to-[#011b2b] opacity-90" />
                  )}

                  {/* Architectural grid overlay */}
                  <div className="absolute inset-0 bg-financial-grid opacity-30 pointer-events-none" />

                  {/* Card top tags */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[10px] uppercase font-mono tracking-widest px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white">
                      {study.clientType}
                    </span>
                    <span className="text-[11px] font-mono text-sky-300">
                      {study.firmCategory}
                    </span>
                  </div>

                  {/* Architectural Card Title */}
                  <div className="relative z-10">
                    <h3 className="font-display-serif text-2xl text-white font-normal leading-snug">
                      {study.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <p className="text-xs sm:text-sm text-[#526059] leading-relaxed font-light">
                    {study.description}
                  </p>

                  {/* Impact Results List */}
                  <div className="space-y-2.5 pt-4 border-t border-[#F0EFEA]">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#76857E] block">
                      Verified Production Metrics
                    </span>
                    <div className="grid grid-cols-1 gap-2">
                      {study.results.map((res) => (
                        <div
                          key={res.label}
                          className="flex items-center justify-between text-xs py-1.5 px-3 bg-[#F6F5F1] rounded-lg border border-[#EBE8E0]"
                        >
                          <span className="text-[#526059]">{res.label}</span>
                          <span className="font-mono font-semibold text-[#204862]">{res.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA link */}
                  <button
                    onClick={onRequestDemo}
                    className="w-full pt-4 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#013b61] hover:text-[#204862] border-t border-[#F0EFEA] group cursor-pointer"
                  >
                    <span>Request Briefing Case Study</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

