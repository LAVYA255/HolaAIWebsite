
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import ComparisonTable from './components/ComparisonTable';
import BlogTeaser from './components/BlogTeaser';
import PricingPage from './components/PricingPage';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<'home' | 'pricing'>('home');
  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.holavoicemail.app";

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#pricing') {
        setActivePage('pricing');
        window.scrollTo(0, 0);
      } else {
        setActivePage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-[#E2FFD7]">
      <Navbar onPageChange={setActivePage} activePage={activePage} />
      
      {activePage === 'home' ? (
        <main className="pt-16 md:pt-20">
          <Hero />
          <div id="how-it-works">
            <HowItWorks />
          </div>
          <Features />
          <Testimonials />
          <ComparisonTable />
          <BlogTeaser />
          <FaqSection category="general" />
          <div className="py-44 px-6 flex flex-col items-center justify-center text-center bg-black text-white relative overflow-hidden">
             {/* Vibrant blobs for the final section - scaled down */}
             <div className="absolute top-0 left-0 w-80 h-80 bg-[#E0D7FF]/20 blur-[120px] animate-pulse"></div>
             <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-[#E2FFD7]/10 blur-[160px] pulse-blob"></div>
             
             <h2 className="text-5xl md:text-[6.5rem] font-[900] tracking-tighter mb-16 leading-[1.1] z-10">Never miss <br/>what matters again.</h2>
             <button 
              onClick={() => window.open(PLAY_STORE_URL, '_blank')}
              className="z-10 px-16 py-10 bg-[#FFE7D7] text-black text-3xl font-[900] rounded-[2.5rem] hover:scale-110 hover:bg-white transition-all shadow-[0_32px_80px_rgba(255,231,215,0.25)] active:scale-95 uppercase tracking-[0.2em] border-[6px] border-white/10"
             >
               Upgrade to Hola AI →
             </button>
          </div>
        </main>
      ) : (
        <div className="pt-16 md:pt-20">
          <PricingPage />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default App;