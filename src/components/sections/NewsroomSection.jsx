import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Newspaper, Calendar, Quote, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { siteContent } from '../../data/siteContent';

export default function NewsroomSection({ onRequestDemo }) {
  const news = siteContent.newsroom;
  // Feature the flagship WSJ / Dow Jones strategic partnership as the lead story
  const featuredArticle = news.articles.find((a) => a.id === 'wsj') || news.articles[1];
  const secondaryArticles = news.articles.filter((a) => a.id !== featuredArticle.id);

  return (
    <section id="newsroom" className="relative bg-[#FBFBF9] py-28 px-6 sm:px-8 border-b border-[#E7E5DE] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <h2 className="font-display-serif text-4xl sm:text-5xl lg:text-6xl text-[#0F1412] font-normal tracking-tight">
              {news.heading}
            </h2>
            <p className="text-base text-[#526059] font-light">
              {news.subheading}
            </p>
          </div>

        </div>

        {/* Editorial Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-10">
          {/* Featured Lead Story (Spans 7 cols on lg) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-7 bg-white border border-[#E7E5DE] hover:border-[#013b61] rounded-3xl p-8 sm:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(1,59,97,0.1)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Subtle atmospheric gradient in corner */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#013b61]/5 via-[#204862]/5 to-transparent pointer-events-none rounded-tr-3xl" />

            <div className="relative z-10">
              {/* Masthead Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-7 border-b border-[#F0EFEA]">
                <div className="flex items-center gap-3">
                  <span className="font-display-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#0F1412] group-hover:text-[#013b61] transition-colors">
                    {featuredArticle.source}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest px-3 py-1 rounded-full bg-[#013b61] text-white font-semibold shadow-sm">
                    {featuredArticle.badge}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded-full bg-sky-50 text-sky-800 border border-sky-200">
                    Lead Feature
                  </span>
                </div>
              </div>

              {/* Date & Category */}
              <div className="flex items-center space-x-3 text-xs text-[#76857E] mb-4 font-mono">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-sky-600" />
                  <span>{featuredArticle.date}</span>
                </span>
                <span>•</span>
                <span className="text-[#526059] font-medium">{featuredArticle.category}</span>
              </div>

              {/* Headline */}
              <h3 className="font-display-serif text-2xl sm:text-3xl lg:text-[2.2rem] text-[#0F1412] font-normal leading-[1.2] tracking-tight mb-5 group-hover:text-[#013b61] transition-colors">
                {featuredArticle.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm sm:text-base text-[#526059] font-light leading-relaxed mb-6">
                {featuredArticle.summary}
              </p>

              {/* Editorial Quote Box */}
              <div className="bg-[#FAF9F6] border-l-2 border-[#013b61] p-4 sm:p-5 rounded-r-2xl mb-6 border-y border-r border-[#EFECE6]">
                <p className="text-xs sm:text-sm font-serif italic text-[#2D3732] leading-relaxed">
                  "Direct integration of Dow Jones Newswires into Kinetiq's agentic financial platform provides investment committees and banking deal teams with verified, real-time capital market journalism."
                </p>
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#76857E] mt-2 block">
                  — Official Strategic Partnership Announcement
                </span>
              </div>
            </div>

            {/* Read CTA */}
            <div className="relative z-10 pt-6 border-t border-[#F0EFEA] flex items-center justify-between">
              <button
                onClick={onRequestDemo}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#013b61] group-hover:text-[#204862] transition-colors cursor-pointer"
              >
                <span>{featuredArticle.linkText}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <span className="text-[11px] font-mono text-[#76857E] hidden sm:inline">
                Verified Press Release
              </span>
            </div>
          </motion.div>

          {/* Secondary Stories Column (Spans 5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {secondaryArticles.map((article) => (
              <motion.div
                key={article.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="flex-1 bg-white border border-[#E7E5DE] hover:border-[#013b61] rounded-3xl p-7 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_35px_rgba(1,59,97,0.08)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#F0EFEA]">
                    <span className="font-display-serif text-xl sm:text-2xl font-bold tracking-tight text-[#0F1412] group-hover:text-[#013b61] transition-colors">
                      {article.source}
                    </span>
                    <span className="text-[10px] uppercase font-mono tracking-wider px-2.5 py-0.5 rounded-full bg-[#F6F5F1] text-[#526059] border border-[#E7E5DE]">
                      {article.badge}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 text-xs text-[#76857E] mb-2.5 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-sky-600" />
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.category}</span>
                  </div>

                  <h4 className="font-display-serif text-xl sm:text-2xl text-[#0F1412] font-normal leading-snug mb-3 group-hover:text-[#013b61] transition-colors">
                    {article.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#526059] font-light leading-relaxed mb-4">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0EFEA]">
                  <button
                    onClick={onRequestDemo}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#013b61] group-hover:text-[#204862] transition-colors cursor-pointer"
                  >
                    <span>{article.linkText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Institutional Media & Trust Architecture Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-[#FAF9F6] border border-[#E7E5DE] rounded-2xl text-center">
          <div className="p-2 border-r border-[#E7E5DE]/80 last:border-r-0">
            <span className="font-mono text-lg font-bold text-[#013b61] block">Tier-1</span>
            <span className="text-[11px] text-[#76857E] uppercase font-mono tracking-wider">Institutional Coverage</span>
          </div>
          <div className="p-2 border-r border-[#E7E5DE]/80 md:last:border-r-0">
            <span className="font-mono text-lg font-bold text-[#013b61] block">Real-Time</span>
            <span className="text-[11px] text-[#76857E] uppercase font-mono tracking-wider">Dow Jones Wire Feed</span>
          </div>
          <div className="p-2 border-r border-[#E7E5DE]/80 last:border-r-0">
            <span className="font-mono text-lg font-bold text-[#013b61] block">100%</span>
            <span className="text-[11px] text-[#76857E] uppercase font-mono tracking-wider">Provenance Checked</span>
          </div>
          <div className="p-2">
            <span className="font-mono text-lg font-bold text-[#013b61] block">Wall Street</span>
            <span className="text-[11px] text-[#76857E] uppercase font-mono tracking-wider">Standard Adoption</span>
          </div>
        </div>
      </div>
    </section>
  );
}

