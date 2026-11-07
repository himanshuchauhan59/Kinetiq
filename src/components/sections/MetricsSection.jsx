import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { siteContent } from '../../data/siteContent';

function AnimatedCounter({ value, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState(0);

  const spring = useSpring(0, {
    stiffness: 70,
    damping: 30,
    duration: 2.2
  });

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      setDisplayValue(Math.floor(latest));
    });
    return () => unsubscribe();
  }, [spring]);

  return (
    <span ref={ref} className="font-display-serif text-6xl sm:text-7xl lg:text-8xl font-normal tracking-tight text-[#0F1412]">
      {displayValue}
      <span className="text-[#204862] font-light">{suffix}</span>
    </span>
  );
}

export default function MetricsSection() {
  const metrics = siteContent.metrics;

  return (
    <section className="relative bg-[#FBFBF9] py-28 px-6 sm:px-8 border-b border-[#E7E5DE] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#526059]">
            Scale & Velocity
          </p>
          <h2 className="font-display-serif text-4xl sm:text-5xl lg:text-6xl text-[#0F1412] font-normal tracking-tight">
            {metrics.heading}
          </h2>
          <p className="text-base text-[#526059] font-light">
            {metrics.subheading}
          </p>
        </div>

        {/* 3 Metric Columns with Big Typographic Animated Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 divide-y md:divide-y-0 md:divide-x divide-[#E7E5DE]">
          {metrics.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className={`space-y-4 ${idx > 0 ? 'pt-8 md:pt-0 md:pl-12' : ''}`}
            >
              <div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="text-base font-semibold text-[#0F1412] tracking-wide uppercase font-sans">
                {stat.label}
              </h3>
              <p className="text-xs sm:text-sm text-[#526059] leading-relaxed font-light max-w-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Context Card */}
        <div className="mt-20 p-6 bg-[#F6F5F1] border border-[#E7E5DE] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#526059]">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse" />
            <span className="font-medium text-[#0F1412]">
              Live Telemetry: Zero System Downtime across all 2024–2026 earnings reporting cycles.
            </span>
          </div>
          <span className="font-mono text-[#76857E] text-[11px]">
            Audited SLA: 99.99% Availability
          </span>
        </div>
      </div>
    </section>
  );
}

