import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import EcosystemSection from './components/sections/EcosystemSection';
import ValuePropSection from './components/sections/ValuePropSection';
import BrandStorySection from './components/sections/BrandStorySection';
import TestimonialSection from './components/sections/TestimonialSection';
import CaseStudiesSection from './components/sections/CaseStudiesSection';
import MetricsSection from './components/sections/MetricsSection';
import SecuritySection from './components/sections/SecuritySection';
import NewsroomSection from './components/sections/NewsroomSection';
import FinalCtaSection from './components/sections/FinalCtaSection';
import VideoModal from './components/ui/VideoModal';
import RequestDemoPage from './pages/RequestDemoPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    return window.location.hash === '#demo' ? 'demo' : 'home';
  });
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    const handleLocationChange = () => {
      if (window.location.hash === '#demo') {
        setCurrentPage('demo');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const handleNavigateToDemo = () => {
    window.location.hash = 'demo';
    setCurrentPage('demo');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToHome = () => {
    window.location.hash = '';
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenVideoModal = () => setIsVideoModalOpen(true);
  const handleCloseVideoModal = () => setIsVideoModalOpen(false);

  // Dedicated Request Demo Page View
  if (currentPage === 'demo') {
    return <RequestDemoPage onBackToHome={handleNavigateToHome} />;
  }

  // Home Page Experience
  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#0F1412] selection:bg-[#013b61] selection:text-white flex flex-col font-sans">
      {/* Navigation Header */}
      <Navbar onRequestDemo={handleNavigateToDemo} />

      {/* Main Long-Form Editorial Page Experience */}
      <main className="flex-grow">
        {/* Section 01: Premium Hero */}
        <HeroSection onRequestDemo={handleNavigateToDemo} />

        {/* Section 02: Client / Partner Ecosystem */}
        <EcosystemSection />

        {/* Section 03: Main Value Proposition (Interactive Financial Model Stage) */}
        <ValuePropSection onRequestDemo={handleNavigateToDemo} />

        {/* Section 04: Brand Story / Video Feature */}
        <BrandStorySection onOpenVideo={handleOpenVideoModal} />

        {/* Section 05: Customer Testimonial */}
        <TestimonialSection />

        {/* Section 06: Case Studies / Featured Work */}
        <CaseStudiesSection onRequestDemo={handleNavigateToDemo} />

        {/* Section 07: Business Results / Metrics (Animated Counters) */}
        <MetricsSection />

        {/* Section 08: Security / Trust Vault */}
        <SecuritySection onRequestDemo={handleNavigateToDemo} />

        {/* Section 09: Newsroom / Insights */}
        <NewsroomSection onRequestDemo={handleNavigateToDemo} />

        {/* Section 10: Final CTA */}
        <FinalCtaSection onRequestDemo={handleNavigateToDemo} />
      </main>

      {/* Section 11: Footer with Monumental Watermark */}
      <Footer onRequestDemo={handleNavigateToDemo} />

      {/* Interactive Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={handleCloseVideoModal}
      />
    </div>
  );
}
