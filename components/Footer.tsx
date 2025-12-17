
import React from 'react';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 overflow-hidden rounded-xl bg-black border border-white/10">
                <img 
                  src="logo-128x128.png" 
                  alt="Hola AI Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-black tracking-tight uppercase">Hola AI</span>
            </div>
            <p className="text-white/40 max-w-sm mb-10 text-lg leading-relaxed font-medium">
              Your personal smart assistant for the 21st century. Never miss a meaningful conversation again. Catch every opportunity.
            </p>
            <div className="flex gap-6">
               <a href="#" className="w-12 h-12 flex items-center justify-center border-2 border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-300"><Twitter className="w-5 h-5" /></a>
               <a href="#" className="w-12 h-12 flex items-center justify-center border-2 border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-300"><Instagram className="w-5 h-5" /></a>
               <a href="#" className="w-12 h-12 flex items-center justify-center border-2 border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-300"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-widest text-white/30 mb-8">Product</h4>
            <ul className="space-y-5 text-sm font-bold uppercase tracking-widest text-white/50">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#comparison" className="hover:text-white transition-colors">Comparison</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-widest text-white/30 mb-8">Legal</h4>
            <ul className="space-y-5 text-sm font-bold uppercase tracking-widest text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#faqs" className="hover:text-white transition-colors">Help</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">© 2024 Hola AI. All rights reserved.</p>
          <div className="flex gap-6">
             <span className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">Designed for clarity</span>
             <span className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">High Contrast</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
