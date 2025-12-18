
import React from 'react';

interface NavbarProps {
  activePage: 'home' | 'pricing';
  onPageChange: (page: 'home' | 'pricing') => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, onPageChange }) => {
  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.holavoicemail.app";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    if (targetId === 'pricing') {
      onPageChange('pricing');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (activePage !== 'home') {
      onPageChange('home');
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] border-b-4 border-black bg-black text-white h-20 md:h-24">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo Section */}
        <div 
          className="flex items-center gap-5 cursor-pointer group" 
          onClick={() => { onPageChange('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <div className="w-10 h-10 md:w-14 md:h-14 overflow-hidden rounded-[1rem] bg-black border-[3px] border-white/20 group-hover:rotate-6 transition-transform duration-500 shadow-[0_0_30px_rgba(255,255,255,0.05)] flex items-center justify-center relative">
            <img 
              src="logo-128x128.png" 
              alt="H" 
              className="w-full h-full object-cover relative z-10"
            />
          </div>
          <span className="text-2xl md:text-4xl font-[900] tracking-[-0.02em] uppercase leading-none">Hola AI</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-12 text-[12px] font-[900] uppercase tracking-[0.4em]">
          <a 
            href="#features" 
            onClick={(e) => handleNavClick(e, 'features')}
            className="text-white/50 hover:text-white transition-colors relative group py-2"
          >
            Features
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all group-hover:w-full"></span>
          </a>
          <a 
            href="#testimonials" 
            onClick={(e) => handleNavClick(e, 'testimonials')}
            className="text-white/50 hover:text-white transition-colors relative group py-2"
          >
            Testimonials
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all group-hover:w-full"></span>
          </a>
          <a 
            href="#comparison" 
            onClick={(e) => handleNavClick(e, 'comparison')}
            className="text-white/50 hover:text-white transition-colors relative group py-2"
          >
            Comparison
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all group-hover:w-full"></span>
          </a>
          <a 
            href="#pricing" 
            onClick={(e) => handleNavClick(e, 'pricing')}
            className={`transition-colors relative group py-2 ${activePage === 'pricing' ? 'text-white' : 'text-white/40 hover:text-white'}`}
          >
            Pricing
            {activePage === 'pricing' && <span className="absolute bottom-0 left-0 w-full h-1 bg-white"></span>}
          </a>
          <a 
            href="#faqs" 
            onClick={(e) => handleNavClick(e, 'faqs')}
            className="text-white/50 hover:text-white transition-colors relative group py-2"
          >
            FAQs
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all group-hover:w-full"></span>
          </a>
        </div>

        {/* CTA Section */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => window.open(PLAY_STORE_URL, '_blank')}
            className="bg-[#E2FFD7] text-black px-8 md:px-12 py-4 rounded-full text-[12px] font-[900] uppercase tracking-[0.25em] hover:scale-105 transition-all active:scale-95 shadow-[0_10px_40px_rgba(226,255,215,0.25)] border-2 border-black"
          >
            Get App
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
