import React from 'react';
import { motion } from 'framer-motion';
import { Play, Users, Award, Shield, Sparkles } from 'lucide-react';
import { siteContent } from '../../data/siteContent';

export default function BrandStorySection({ onOpenVideo }) {
  const story = siteContent.brandStory;

  return (
    <section id="partnership" className="relative bg-[#FBFBF9] py-28 px-6 sm:px-8 border-b border-[#E7E5DE] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#526059]">
            The Deployment Philosophy
          </p>
          <h2 className="font-display-serif text-4xl sm:text-5xl lg:text-6xl text-[#0F1412] font-normal tracking-tight">
            {story.heading}
          </h2>
          <p className="text-base sm:text-lg text-[#526059] font-light max-w-2xl leading-relaxed">
            {story.subheading}
          </p>
        </div>
        {/* 3 Partnership Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {story.pillars.map((pillar, idx) => {
            const icons = [Users, Award, Shield];
            const Icon = icons[idx];

            return (
              <div
                key={pillar.title}
                className="p-8 bg-white border border-[#E7E5DE] rounded-2xl hover:border-[#D5D2C8] hover:shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#204862]/10 text-[#204862] flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display-serif text-2xl text-[#0F1412] font-normal mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#526059] leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

