
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
        <main className="pt-20 md:pt-24">
          <Hero />
          <div id="how-it-works">
            <HowItWorks />
          </div>
          <Features />
          <Testimonials />
          <ComparisonTable />
          <BlogTeaser />
          <FaqSection category="general" />
          <div className="py-32 px-6 flex flex-col items-center justify-center text-center bg-black text-white">
             <h2 className="text-4xl md:text-8xl font-[900] tracking-tighter mb-12 leading-tight">Never miss what matters again.</h2>
             <button 
              onClick={() => { window.location.hash = '#pricing'; setActivePage('pricing'); }}
              className="px-12 py-8 bg-[#E2FFD7] text-black text-2xl font-[900] rounded-full hover:scale-105 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.2)] active:scale-95 uppercase tracking-widest border-4 border-black"
             >
               Upgrade to Hola AI →
             </button>
          </div>
        </main>
      ) : (
        <div className="pt-20 md:pt-24">
          <PricingPage />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default App;
