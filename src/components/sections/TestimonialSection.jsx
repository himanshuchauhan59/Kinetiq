import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles, Building2 } from 'lucide-react';
import { siteContent } from '../../data/siteContent';

export default function TestimonialSection() {
  const item = siteContent.testimonial;

  return (
    <section className="relative bg-[#FBFBF9] py-28 px-6 sm:px-8 border-b border-[#E7E5DE] overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        {/* Subtle decorative quotation glyph */}
        <div className="flex justify-center mb-8">
          <div className="w-14 h-14 rounded-full bg-[#204862]/10 text-[#204862] flex items-center justify-center">
            <Quote className="w-6 h-6 rotate-180" />
          </div>
        </div>

        {/* Big Editorial Quote Typography */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display-serif text-3xl sm:text-4xl md:text-5xl text-[#0F1412] font-normal leading-[1.3] tracking-tight max-w-4xl mx-auto mb-10"
        >
          "{item.quote}"
        </motion.blockquote>

        {/* Refined Divider */}
        <div className="w-16 h-px bg-[#204862]/30 mx-auto mb-8" />

        {/* Customer Attribution */}
        <div className="space-y-1.5">
          <div className="font-display-serif text-2xl text-[#0F1412] font-medium tracking-tight">
            {item.author}
          </div>
          <p className="text-xs sm:text-sm text-[#526059] font-light">
            {item.role} • <span className="text-[#204862] font-medium">{item.firm}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

