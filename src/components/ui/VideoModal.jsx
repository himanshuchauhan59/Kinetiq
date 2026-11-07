import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw, CheckCircle, Shield } from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(42);
  const [activeTab, setActiveTab] = useState('transcript');

  const chapters = [
    { time: "00:00", title: "Introduction: The Financial Nuance Problem" },
    { time: "01:14", title: "Why Generalist Chatbots Hallucinate in Banking" },
    { time: "02:30", title: "Engineering 'The Frame': Deterministic Financial Math" },
    { time: "03:15", title: "Forward-Deployed Bankers Embedded On-Site" }
  ];

  const transcript = [
    {
      time: "00:15",
      speaker: "Gabriel Stengel (CEO & Co-Founder)",
      text: "When you look at an investment banking bullpen at 1 AM, analysts aren't struggling with basic arithmetic. They are cross-referencing five different 10-Ks, verifying footnote adjustments, and rebuilding models that require absolute precision."
    },
    {
      time: "01:28",
      speaker: "Elena Vasquez (Head of Deployment, Ex-Goldman)",
      text: "If an AI generates a DCF where the terminal growth rate doesn't link cleanly to the WACC sensitivity table, a Managing Director throws it in the trash. That's why we built Kinetiq with complete citation traceability down to the SEC filing page and paragraph."
    },
    {
      time: "02:45",
      speaker: "Gabriel Stengel (CEO & Co-Founder)",
      text: "Our forward-deployed teams sit on the trading desks and advisory bullpens. We calibrate every agent to the specific firm's financial templates. The result isn't just software—it's an institutional force multiplier."
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#011422]/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl bg-[#013b61] border border-white/15 rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.6)] overflow-hidden z-10 text-white"
          >
            {/* Header bar */}
            <div className="px-6 py-4 flex items-center justify-between border-b border-white/10 bg-[#012239]">
              <div className="flex items-center space-x-3">
                <span className="font-display-serif text-lg tracking-wider text-white">KINETIQ BRIEFING</span>
                <span className="text-xs text-white/50 border-l border-white/20 pl-3">
                  Documentary Series: High-Finance AI Architecture
                </span>
              </div>
              <button
                onClick={onClose}
                className="text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Canvas */}
            <div className="relative aspect-video bg-gradient-to-b from-[#012640] to-[#011422] flex flex-col justify-between p-6 overflow-hidden">
              {/* Simulated cinematic interview scene */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#204862] via-[#013b61] to-[#011422]" />

              {/* Architectural interview atmosphere */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center px-4 max-w-xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs text-white/90 border border-white/15 mb-4">
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                    <span>Executive Briefing • 4K HDR Audio</span>
                  </div>
                  <h4 className="font-display-serif text-3xl sm:text-4xl text-white font-normal mb-2">
                    "Why We Built Kinetiq for Wall Street"
                  </h4>
                  <p className="text-sm text-white/70">
                    Featuring Gabriel Stengel (CEO) & Elena Vasquez (Head of Institutional Deployment)
                  </p>
                </div>
              </div>

              {/* Top controls: Live status */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono tracking-wider bg-black/40 border border-white/10 text-white/80">
                    HD 1080P
                  </span>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono tracking-wider bg-black/40 border border-white/10 text-sky-400">
                    AES-256 ENCRYPTED STREAM
                  </span>
                </div>
                <div className="text-xs font-mono text-white/60">
                  01:42 / 03:45
                </div>
              </div>

              {/* Bottom player controls */}
              <div className="relative z-10 space-y-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 -mx-6 -mb-6 rounded-b-2xl">
                {/* Progress bar */}
                <div
                  className="w-full h-1.5 bg-white/20 rounded-full cursor-pointer overflow-hidden"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    setProgress(Math.round((clickX / rect.width) * 100));
                  }}
                >
                  <div
                    className="h-full bg-gradient-to-r from-sky-400 to-[#204862] rounded-full transition-all duration-150"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-2 rounded-full bg-white text-[#013b61] hover:bg-sky-100 transition-colors"
                    >
                      {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                    </button>
                    <button
                      onClick={() => setProgress(0)}
                      className="text-white/70 hover:text-white p-1"
                      title="Replay from beginning"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="text-white/70 hover:text-white p-1"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <span className="text-xs font-mono text-white/80">Chapter 2: Financial Nuance</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-[11px] text-white/50 hidden sm:inline">Press ESC to exit</span>
                    <button className="text-white/70 hover:text-white p-1">
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom info & Transcript tab */}
            <div className="p-6 bg-[#011e33] border-t border-white/10">
              <div className="flex items-center space-x-6 border-b border-white/10 pb-3 mb-4">
                <button
                  onClick={() => setActiveTab('transcript')}
                  className={`text-xs uppercase tracking-widest font-medium pb-2 border-b-2 transition-all ${activeTab === 'transcript' ? 'border-sky-400 text-white' : 'border-transparent text-white/50 hover:text-white/80'
                    }`}
                >
                  Verified Transcript
                </button>
                <button
                  onClick={() => setActiveTab('chapters')}
                  className={`text-xs uppercase tracking-widest font-medium pb-2 border-b-2 transition-all ${activeTab === 'chapters' ? 'border-sky-400 text-white' : 'border-transparent text-white/50 hover:text-white/80'
                    }`}
                >
                  Key Segments ({chapters.length})
                </button>
              </div>

              {activeTab === 'transcript' ? (
                <div className="space-y-4 max-h-48 overflow-y-auto pr-2 text-xs leading-relaxed text-white/80">
                  {transcript.map((item, idx) => (
                    <div key={idx} className="flex space-x-3 p-2 rounded hover:bg-white/5 transition-colors">
                      <span className="font-mono text-sky-400 text-[11px] flex-shrink-0 pt-0.5">{item.time}</span>
                      <div>
                        <span className="font-medium text-white block mb-0.5">{item.speaker}</span>
                        <p className="text-white/70">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                  {chapters.map((chap, idx) => (
                    <button
                      key={idx}
                      onClick={() => setProgress(idx * 25 + 5)}
                      className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 text-left border border-white/5 transition-colors"
                    >
                      <span className="text-xs text-white/90 truncate mr-2">{chap.title}</span>
                      <span className="font-mono text-xs text-sky-400 flex-shrink-0">{chap.time}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

