import React, { useState } from 'react';
import { ArrowUpRight, ShieldCheck, Check, Send } from 'lucide-react';
import { siteContent } from '../../data/siteContent';

export default function Footer({ onRequestDemo }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="relative bg-[#013b61] text-white pt-24 pb-12 overflow-hidden border-t border-white/10">
      {/* Background radial lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#204862]/30 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Newsletter & Advisory Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <img src="Kinetiq_logo_white.png" alt="" className="w-20 h-auto" />
            </div>
            <p className="text-sm text-white/70 max-w-md leading-relaxed">
              The secure generative AI platform built for the world’s leading investment banks, private equity firms, and hedge funds.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <h4 className="font-display-serif text-xl sm:text-2xl text-white mb-2">
                Executive Intelligence & Research
              </h4>
              <p className="text-xs sm:text-sm text-white/70 mb-4 max-w-xl">
                Subscribe for proprietary briefings on domain-specific AI architectures, SEC/FINRA compliance guidelines, and Wall Street workflow transformation.
              </p>

              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter institutional email..."
                    className="flex-1 px-4 py-2.5 text-xs sm:text-sm bg-black/40 border border-white/15 rounded-full text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-white text-[#013b61] hover:bg-sky-100 font-semibold text-xs uppercase tracking-widest rounded-full transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-2 p-3 bg-[#204862]/30 border border-[#204862] rounded-xl text-xs text-sky-200">
                  <Check className="w-4 h-4 text-sky-400" />
                  <span>Institutional subscription confirmed for {email}. You will receive our quarterly market report.</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Multi-column Navigation Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 py-16 border-b border-white/10">
          {siteContent.footer.columns.map((column) => (
            <div key={column.title} className="space-y-4">
              <h5 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-400">
                {column.title}
              </h5>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={link.label.includes('Demo') ? onRequestDemo : undefined}
                      className="text-xs text-white/70 hover:text-white transition-colors duration-200 inline-flex items-center group"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-1 -translate-y-0.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Regulatory & Disclaimer Row */}
        <div className="py-8 text-[11px] text-white/50 space-y-3 leading-relaxed border-b border-white/5">
          <p>{siteContent.brand.disclaimer}</p>
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div>{siteContent.brand.copyright}</div>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Notice</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Security Overview</a>
              <a href="#" className="hover:text-white transition-colors">Trust Center</a>
            </div>
          </div>
        </div>

        {/* Monumental Watermark Wordmark */}
        <div className="pt-12 select-none pointer-events-none text-center overflow-hidden">
          <span className="absolute -bottom-16 opacity-10">
            <img src="Kinetiq_logo_white.png" alt="" className="w-full h-auto" />
          </span>
        </div>
      </div>
    </footer>
  );
}

