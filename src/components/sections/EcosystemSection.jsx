import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../../data/siteContent';

export default function EcosystemSection() {
  const clients = siteContent.ecosystem.clients;
  const firstRow = clients.slice(0, 5);
  const secondRow = clients.slice(5, 10);

  return (
    <section id="solutions" className="relative bg-[#FBFBF9] py-20 px-6 sm:px-8 border-b border-[#E7E5DE] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2.5">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#526059]">
            Enterprise Ecosystem
          </p>
          <h2 className="font-display-serif text-3xl sm:text-4xl text-[#0F1412] font-normal tracking-tight">
            {siteContent.ecosystem.heading}
          </h2>
          <p className="text-xs sm:text-sm text-[#76857E] font-light">
            {siteContent.ecosystem.subheading}
          </p>
        </div>

        {/* Typographic Client Grid (Configured for names as requested; easily swappable for logos) */}
        <div className="space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {firstRow.map((client) => (
              <motion.div
                key={client.id}
                whileHover={{ y: -3, borderColor: '#204862' }}
                transition={{ duration: 0.2 }}
                className="group relative flex flex-col items-center justify-center p-6 bg-white border border-[#E7E5DE] rounded-xl hover:shadow-[0_8px_25px_rgba(0,0,0,0.04)] transition-all cursor-default"
              >
                {/* Client Name Typographic Treatment */}
                <div className={`text-[#0F1412] group-hover:text-[#204862] transition-colors text-center ${client.style}`}>
                  {client.name}
                </div>
                {/* Ticker / Category Sub-label */}
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#76857E] mt-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                  {client.ticker}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {secondRow.map((client) => (
              <motion.div
                key={client.id}
                whileHover={{ y: -3, borderColor: '#204862' }}
                transition={{ duration: 0.2 }}
                className="group relative flex flex-col items-center justify-center p-6 bg-white border border-[#E7E5DE] rounded-xl hover:shadow-[0_8px_25px_rgba(0,0,0,0.04)] transition-all cursor-default"
              >
                {/* Client Name Typographic Treatment */}
                <div className={`text-[#0F1412] group-hover:text-[#204862] transition-colors text-center ${client.style}`}>
                  {client.name}
                </div>
                {/* Ticker / Category Sub-label */}
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#76857E] mt-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                  {client.ticker}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footnote on Security & Confidentiality */}
        <div className="mt-10 text-center">
          <p className="text-[11px] text-[#76857E] tracking-wide font-light">
            * Names displayed under strict mutual confidentiality protocols. Kinetiq enforces dedicated tenant segregation across all institutional environments.
          </p>
        </div>
      </div>
    </section>
  );
}

