import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Table, CheckCircle2, FileSpreadsheet, Layers, ShieldCheck, ArrowRight, Zap, Database, Bot, Lock } from 'lucide-react';
import { siteContent } from '../../data/siteContent';

export default function ValuePropSection({ onRequestDemo }) {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const cardRefs = useRef([]);
  const isManualClick = useRef(false);

  const features = siteContent.valueProp.features;
  const currentFeature = features[activeFeatureIndex];
  const viewData = currentFeature.viewData;

  const featureIcons = [Zap, Database, Bot, Lock];

  // High-performance IntersectionObserver for scroll-sync (zero scroll event overhead, no layout thrashing)
  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 1024) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualClick.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-feature-index'));
            if (!Number.isNaN(index)) {
              setActiveFeatureIndex((prev) => (prev !== index ? index : prev));
            }
          }
        });
      },
      {
        rootMargin: '-25% 0px -45% 0px',
        threshold: 0.1
      }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleFeatureClick = (index) => {
    setActiveFeatureIndex(index);
    isManualClick.current = true;
    setTimeout(() => {
      isManualClick.current = false;
    }, 800);
  };

  return (
    <section id="product" className="relative bg-[#F6F5F1] py-28 px-6 sm:px-8 border-b border-[#E7E5DE]">
      {/* Background warm grid */}
      <div className="absolute inset-0 bg-warm-grid pointer-events-none opacity-50" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#204862]/10 text-[#204862] text-xs font-semibold uppercase tracking-widest border border-[#204862]/20">
            <Layers className="w-3.5 h-3.5" />
            <span>Core Architecture</span>
          </div>
          <h2 className="font-display-serif text-4xl sm:text-5xl lg:text-6xl text-[#0F1412] font-normal tracking-tight">
            {siteContent.valueProp.heading}
          </h2>
          <p className="text-base sm:text-lg text-[#526059] font-light max-w-2xl leading-relaxed">
            {siteContent.valueProp.subheading}
          </p>
        </div>

        {/* 2-Column Interactive Presentation Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Interactive Live Financial Model UI Stage (Sticky within Section) */}
          <div className="lg:col-span-7 lg:sticky lg:top-24 self-start">
            <div className="bg-white border border-[#DCD9D0] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden">
              {/* Spreadsheet Window Header */}
              <div className="bg-[#013b61] px-5 py-3.5 flex items-center justify-between border-b border-white/10 text-white">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <FileSpreadsheet className="w-4 h-4 text-sky-400" />
                    <span className="text-xs tracking-tight text-white/90">
                      {viewData.title}
                    </span>
                  </div>
                </div>
              </div>

              {/* Formula & Context Bar */}
              <div className="bg-[#F6F5F1] px-5 py-2.5 border-b border-[#E7E5DE] flex items-center justify-between text-xs font-mono text-[#526059]">
                <div className="flex items-center space-x-3">
                  <span className="font-semibold text-[#0F1412] px-2 py-0.5 bg-white border border-[#D5D2C8] rounded">
                    fx
                  </span>
                  <span className="text-[#204862] truncate">
                    =CAGR(E12:H12) * WACC_DISCOUNT_FACTOR(10.5%)
                  </span>
                </div>
                <div className="text-[11px] text-[#76857E] hidden sm:block">
                  Tabular 10-K Footnotes Linked
                </div>
              </div>

              {/* Dynamic Financial Table Body with AnimatePresence */}
              <div className="p-5 sm:p-6 overflow-x-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeatureIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-xs font-medium uppercase tracking-wider text-[#76857E] mb-3 flex items-center justify-between">
                      <span>{viewData.type}</span>
                    </div>

                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="border-b border-[#E7E5DE] text-[#526059] font-mono">
                          <th className="py-2.5 font-semibold">Financial Metric</th>
                          <th className="py-2.5 text-right font-semibold">FY23A</th>
                          <th className="py-2.5 text-right font-semibold">FY24A</th>
                          <th className="py-2.5 text-right font-semibold">FY25E</th>
                          <th className="py-2.5 text-right font-semibold">FY26E</th>
                          <th className="py-2.5 text-right font-semibold text-[#204862]">CAGR / Delta</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#F0EFEA] font-mono">
                        {viewData.rows.map((row, idx) => (
                          <tr
                            key={idx}
                            className={`hover:bg-[#F6F5F1] transition-colors ${idx === 1 || idx === 3 ? 'bg-[#FAFAF8] font-medium' : ''
                              }`}
                          >
                            <td className="py-3 font-sans text-[#0F1412] pr-2">{row.metric}</td>
                            <td className="py-3 text-right text-[#526059]">{row.y1}</td>
                            <td className="py-3 text-right text-[#526059]">{row.y2}</td>
                            <td className="py-3 text-right text-[#526059]">{row.y3}</td>
                            <td className="py-3 text-right text-[#0F1412] font-semibold">{row.y4}</td>
                            <td className="py-3 text-right text-sky-700 font-semibold">{row.cagr}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    {/* Summary Card Footer */}
                    <div className="mt-5 pt-4 border-t border-[#E7E5DE] grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#FAF9F6] p-3 rounded-xl border border-[#EBE8E0]">
                      <div>
                        <span className="text-[10px] uppercase font-mono text-[#76857E] block">Target IRR</span>
                        <span className="text-sm font-mono font-bold text-[#204862]">{viewData.returns.irr}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-mono text-[#76857E] block">Net MOIC</span>
                        <span className="text-sm font-mono font-bold text-[#0F1412]">{viewData.returns.moic}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-mono text-[#76857E] block">Exit Horizon</span>
                        <span className="text-sm font-mono text-[#526059]">{viewData.returns.exitYear}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-mono text-[#76857E] block">Exit Multiple</span>
                        <span className="text-sm font-mono text-[#526059]">{viewData.returns.exitMultiple}</span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Provenance Footer */}
              <div className="bg-[#FAF9F6] px-5 py-3 border-t border-[#E7E5DE] flex items-center justify-between text-[11px] text-[#76857E]">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                  <span>Citational Provenance: SEC EDGAR 10-K & Internal CIM Vault</span>
                </div>
                <span className="font-mono text-sky-700 font-medium">Deterministic Math</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Interactive Feature Blocks */}
          <div className="lg:col-span-5 space-y-5 lg:space-y-6 pb-4">
            {features.map((feature, idx) => {
              const Icon = featureIcons[idx];
              const isActive = activeFeatureIndex === idx;

              return (
                <div
                  key={feature.id}
                  data-feature-index={idx}
                  ref={(el) => (cardRefs.current[idx] = el)}
                  onClick={() => handleFeatureClick(idx)}
                  className={`p-6 sm:p-7 rounded-2xl cursor-pointer transition-all duration-300 hover:translate-x-1 border will-change-transform ${isActive
                    ? 'bg-white border-[#013b61] shadow-[0_12px_36px_rgba(1,59,97,0.14)] ring-1 ring-[#013b61]/20'
                    : 'bg-[#FBFBF9] border-[#E7E5DE] hover:border-[#D5D2C8] hover:bg-white/80'
                    }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${isActive
                          ? 'bg-[#013b61] text-white'
                          : 'bg-[#EFECE6] text-[#526059]'
                          }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-xs font-semibold tracking-wider text-[#76857E]">
                        {feature.number}
                      </span>
                    </div>

                    {isActive && (
                      <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-[#204862] bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200">
                        Active View
                      </span>
                    )}
                  </div>

                  <h3 className="font-display-serif text-2xl text-[#0F1412] font-normal mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#526059] leading-relaxed mb-3">
                    {feature.summary}
                  </p>

                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pt-3 border-t border-[#F0EFEA] text-xs text-[#76857E] leading-relaxed space-y-2"
                    >
                      <p>{feature.detail}</p>
                      <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#013b61] pt-1">
                        <span>Click to view live dataset simulation</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}

            {/* Quick Demo CTA */}
            <div className="pt-4">
              <button
                onClick={onRequestDemo}
                className="w-full py-4 px-6 rounded-full bg-[#013b61] hover:bg-[#204862] text-white text-xs uppercase tracking-widest font-semibold transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Request Custom Model Sandbox</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

