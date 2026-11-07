import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Mail,
  User,
  Briefcase,
  Shield,
  CheckCircle2,
  ShieldCheck,
  Lock,
  Sparkles,
  ArrowUpRight,
  FileSpreadsheet,
  Activity
} from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function RequestDemoPage({ onBackToHome }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    firm: '',
    role: '',
    institutionType: 'Investment Banking',
    notes: ''
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setSubmitted(false);
    onBackToHome();
  };

  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#0F1412] flex flex-col font-sans selection:bg-[#013b61] selection:text-[#E0F2FE]">
      {/* Top Page Header */}
      <header className="sticky top-0 z-40 bg-[#013b61]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.25)] py-4 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo & Back button */}
          <div className="flex items-center gap-6">
            <button
              onClick={onBackToHome}
              className="flex items-center gap-2 group focus:outline-none cursor-pointer"
              aria-label="Kinetiq Home"
            >
              <img
                src="Kinetiq_logo_white.png"
                alt="Kinetiq"
                className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </button>
          </div>
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 text-white/80 hover:text-white text-xs uppercase group transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Overview</span>
          </button>
        </div>
      </header>

      {/* Main Page Body */}
      <main className="flex-grow py-12 sm:py-10 px-6 sm:px-10 relative overflow-hidden">
        {/* Subtle Ambient Background Lighting */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#204862]/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[350px] bg-[#013b61]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          {!submitted ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Briefing Overview & Institutional Proof */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 space-y-8"
              >
                <div className="space-y-4">
                  <h1 className="font-display-serif text-4xl sm:text-5xl lg:text-[3.5rem] text-[#0F1412] font-normal tracking-tight leading-[1.1]">
                    Request an Enterprise Briefing
                  </h1>

                  <p className="text-base sm:text-lg text-[#526059] font-light leading-relaxed">
                    Experience Kinetiq’s finance-native AI platform, live financial modeling automation, and zero-retention compliance architecture engineered for Wall Street leaders.
                  </p>
                </div>

                {/* What to Expect in Briefing */}
                <div className="space-y-4 pt-4 border-t border-[#E7E5DE]">
                  <h3 className="text-xs font-mono uppercase tracking-widest font-semibold text-[#204862]">
                    What Your Session Includes
                  </h3>

                  <div className="space-y-3.5">
                    <div className="flex items-start gap-3.5 p-3.5 bg-white border border-[#E7E5DE] rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                      <div className="w-8 h-8 rounded-lg bg-[#204862]/10 text-[#204862] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FileSpreadsheet className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#0F1412]">
                          Live LBO & DCF Synthesis
                        </h4>
                        <p className="text-xs text-[#526059] mt-0.5 font-light leading-relaxed">
                          Watch the platform ingest multi-hundred-page CIMs and output dynamic Excel models with audit formulas in seconds.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 p-3.5 bg-white border border-[#E7E5DE] rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                      <div className="w-8 h-8 rounded-lg bg-[#204862]/10 text-[#204862] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Lock className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#0F1412]">
                          Zero Customer Data Retention
                        </h4>
                        <p className="text-xs text-[#526059] mt-0.5 font-light leading-relaxed">
                          Full technical review of single-tenant VPC enclaves, cryptographic keys, and SOC 2 Type II audit reports.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 p-3.5 bg-white border border-[#E7E5DE] rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                      <div className="w-8 h-8 rounded-lg bg-[#204862]/10 text-[#204862] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Activity className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#0F1412]">
                          Custom Sandbox Configuration
                        </h4>
                        <p className="text-xs text-[#526059] mt-0.5 font-light leading-relaxed">
                          Tailor evaluation models to your specific mandate: M&A advisory, credit underwriting, or quantitative macro.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Credentials */}
                <div className="p-5 bg-[#F6F5F1] border border-[#E7E5DE] rounded-2xl space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#204862] uppercase tracking-wider font-mono">
                    <ShieldCheck className="w-4 h-4 text-sky-600" />
                    <span>Bank-Grade Governance Protocols</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-[#526059]">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                      <span>SOC 2 Type II</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                      <span>Mutual NDA Default</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                      <span>FINRA / SEC Compliant</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                      <span>Dedicated Tenant VPC</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Full Enterprise Briefing Page Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7"
              >
                <div className="bg-white border border-[#DCD9D0] rounded-3xl shadow-[0_20px_60px_-15px_rgba(1,59,97,0.12)] overflow-hidden">
                  {/* Card Header Bar */}
                  <div className="bg-[#013b61] px-6 sm:px-8 py-5 flex items-center justify-between border-b border-white/10 text-white">
                    <div className="flex items-center space-x-3">
                      <span className="font-display-serif text-xl tracking-tight text-white font-medium">
                        KINETIQ
                      </span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-5">
                    {/* Full Name & Work Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-[#526059] mb-1.5 font-mono">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-[#76857E] absolute left-3.5 top-3.5" />
                          <input
                            type="text"
                            required
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Gabriel Stengel"
                            className="w-full pl-10 pr-4 py-3 text-sm bg-white border border-[#D5D2C8] rounded-xl text-[#0F1412] focus:outline-none focus:ring-2 focus:ring-[#013b61] focus:border-transparent transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-[#526059] mb-1.5 font-mono">
                          Institutional Work Email *
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-[#76857E] absolute left-3.5 top-3.5" />
                          <input
                            type="email"
                            required
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="name@firm.com"
                            className="w-full pl-10 pr-4 py-3 text-sm bg-white border border-[#D5D2C8] rounded-xl text-[#0F1412] focus:outline-none focus:ring-2 focus:ring-[#013b61] focus:border-transparent transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Firm & Role */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-[#526059] mb-1.5 font-mono">
                          Firm / Institution *
                        </label>
                        <div className="relative">
                          <Building2 className="w-4 h-4 text-[#76857E] absolute left-3.5 top-3.5" />
                          <input
                            type="text"
                            required
                            name="firm"
                            value={formData.firm}
                            onChange={handleChange}
                            placeholder="e.g. Lazard, Point72, KKR"
                            className="w-full pl-10 pr-4 py-3 text-sm bg-white border border-[#D5D2C8] rounded-xl text-[#0F1412] focus:outline-none focus:ring-2 focus:ring-[#013b61] focus:border-transparent transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-[#526059] mb-1.5 font-mono">
                          Role / Title
                        </label>
                        <div className="relative">
                          <Briefcase className="w-4 h-4 text-[#76857E] absolute left-3.5 top-3.5" />
                          <input
                            type="text"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            placeholder="e.g. Managing Director, Partner"
                            className="w-full pl-10 pr-4 py-3 text-sm bg-white border border-[#D5D2C8] rounded-xl text-[#0F1412] focus:outline-none focus:ring-2 focus:ring-[#013b61] focus:border-transparent transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Institution Type Dropdown */}
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#526059] mb-1.5 font-mono">
                        Institution Type *
                      </label>
                      <div className="relative">
                        <select
                          name="institutionType"
                          value={formData.institutionType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm bg-white border border-[#D5D2C8] rounded-xl text-[#0F1412] focus:outline-none focus:ring-2 focus:ring-[#013b61] focus:border-transparent transition-all cursor-pointer"
                        >
                          <option value="Investment Banking">Investment Banking (M&A, Leveraged Finance, ECM/DCM)</option>
                          <option value="Private Equity">Private Equity (Buyout, Growth Equity, Special Situations)</option>
                          <option value="Hedge Fund">Hedge Fund (Long/Short, Multi-Strategy, Credit)</option>
                          <option value="Asset Management">Global Asset Management (Sovereign Wealth, Pensions)</option>
                          <option value="Venture Capital">Venture Capital & Growth</option>
                          <option value="Corporate Development">Corporate Development & Strategy</option>
                        </select>
                      </div>
                    </div>

                    {/* Specific Workflow Objectives */}
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#526059] mb-1.5 font-mono">
                        Specific Workflow Objectives (Optional)
                      </label>
                      <textarea
                        rows={3}
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="e.g. Automated CIM ingestion, 3-statement model generation, debt covenant analysis..."
                        className="w-full p-4 text-sm bg-white border border-[#D5D2C8] rounded-xl text-[#0F1412] focus:outline-none focus:ring-2 focus:ring-[#013b61] focus:border-transparent transition-all resize-none"
                      />
                    </div>

                    {/* NDA Trust Banner */}
                    <div className="flex items-start gap-3 p-4 bg-[#F6F5F1] border border-[#E7E5DE] rounded-xl text-xs text-[#526059] leading-relaxed">
                      <Shield className="w-4 h-4 text-[#204862] flex-shrink-0 mt-0.5" />
                      <span>
                        Protected by mutual institutional NDA standards. Customer datasets and financial inputs are strictly confidential and never retained for foundation model training.
                      </span>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-4 px-8 bg-[#013b61] hover:bg-[#204862] text-white font-semibold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      <span>Submit Request for Demonstration</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          ) : (
            /* Submission Confirmation View */
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl mx-auto bg-white border border-[#DCD9D0] rounded-3xl shadow-[0_25px_60px_-15px_rgba(1,59,97,0.18)] p-8 sm:p-12 text-center"
            >
              <div className="w-20 h-20 bg-[#204862]/10 text-[#013b61] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-[#013b61]" />
              </div>

              <span className="text-[11px] font-mono uppercase tracking-widest text-[#204862] bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                Briefing Request Logged
              </span>

              <h2 className="font-display-serif text-3xl sm:text-4xl text-[#0F1412] font-normal tracking-tight mt-4 mb-3">
                Enterprise Briefing Confirmed
              </h2>

              <p className="text-sm sm:text-base text-[#526059] leading-relaxed max-w-lg mx-auto mb-6">
                Thank you, <strong className="text-[#0F1412]">{formData.name}</strong>. A Kinetiq forward-deployed partner specializing in <strong className="text-[#0F1412]">{formData.institutionType}</strong> will coordinate with your team at <strong className="text-[#0F1412]">{formData.email}</strong> within 4 business hours.
              </p>

              <div className="p-4 bg-[#F6F5F1] rounded-2xl border border-[#E7E5DE] text-xs text-[#526059] max-w-md mx-auto mb-8 space-y-1.5 font-mono">
                <div className="flex justify-between">
                  <span>Routing Priority:</span>
                  <span className="text-[#013b61] font-semibold">Tier 1 Executive</span>
                </div>
                <div className="flex justify-between">
                  <span>Protocol Standard:</span>
                  <span className="text-[#013b61] font-semibold">Mutual Institutional NDA</span>
                </div>
                <div className="flex justify-between">
                  <span>Session Length:</span>
                  <span className="text-[#013b61] font-semibold">30 Minutes Focused</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#013b61] hover:bg-[#204862] text-white rounded-full text-xs uppercase tracking-widest font-semibold transition-all shadow-md cursor-pointer"
                >
                  Return to Home
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      {/* Page Footer */}
      <footer className="bg-[#013b61] text-white py-12 px-6 sm:px-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-white/60">
          <div className="flex flex-col items-start gap-1">
            <span className="font-display-serif text-xl tracking-tight text-white font-medium">KINETIQ</span>
            <span>Enterprise Generative AI for Institutional Capital</span>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Notice</a>
            <a href="#" className="hover:text-white transition-colors">Security Architecture</a>
            <a href="#" className="hover:text-white transition-colors">Trust Center</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

