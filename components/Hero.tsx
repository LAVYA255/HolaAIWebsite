
import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.holavoicemail.app";

  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetApp = () => {
    window.open(PLAY_STORE_URL, '_blank');
  };

  return (
    <section className="relative pt-32 pb-44 px-6 overflow-hidden bg-black text-white border-b-[10px] border-white/5">
      {/* Dynamic Background elements */}
      <div className="absolute top-16 left-[5%] w-72 h-72 bg-[#E0D7FF] rounded-full blur-[120px] opacity-25 pulse-blob"></div>
      <div className="absolute bottom-16 right-[5%] w-80 h-80 bg-[#E2FFD7] rounded-full blur-[160px] opacity-20 pulse-blob stagger-2"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#D7F1FF]/10 rounded-full blur-[200px] opacity-30 animate-pulse"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-3 px-6 py-2.5 mb-10 bg-[#E0D7FF] border-[4px] border-black rounded-full text-sm font-[900] tracking-[0.3em] uppercase shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] animate-fade-in-up text-black">
          <Zap className="w-5 h-5 fill-current" />
          The Future of Voicemail
        </div>
        
        <h1 className="text-5xl md:text-[6rem] font-[900] mb-12 leading-[1.2] tracking-tighter animate-fade-in-up stagger-1">
          Skip the spam.<br />
          <span className="outline-text block md:inline">Catch every opportunity.</span>
        </h1>
        
        <p className="text-xl md:text-[2rem] text-white/90 mb-16 max-w-4xl mx-auto leading-[1.1] font-[800] tracking-tighter animate-fade-in-up stagger-2 antialiased">
          Hola AI answers your calls like a human.<br/>
          <span className="text-[#E2FFD7]">No dumb recordings, just real conversations.</span>
          <br/>
          It filters spam and sends you instant summaries of what matters.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-fade-in-up stagger-3">
          <button 
            onClick={handleGetApp}
            className="group w-full sm:w-auto px-12 py-8 bg-[#E2FFD7] text-black border-[4px] border-black rounded-[2.5rem] font-[900] text-2xl hover:bg-white hover:-translate-y-2 transition-all duration-300 shadow-[15px_15px_0px_0px_rgba(226,255,215,0.15)] active:scale-95 flex items-center justify-center gap-5"
          >
            Get Hola AI
            <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform" />
          </button>
          
          <button 
            onClick={scrollToHowItWorks}
            className="w-full sm:w-auto px-12 py-8 bg-transparent text-white border-[4px] border-white rounded-[2.5rem] font-[900] text-2xl hover:bg-white/10 hover:-translate-y-2 transition-all shadow-[12px_12px_0px_0px_rgba(255,255,255,0.05)] active:scale-95"
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="mt-44 max-w-5xl mx-auto relative group animate-fade-in-up stagger-4 px-4">
        <div className="relative bg-zinc-900 rounded-[3.5rem] border-[6px] border-white/10 overflow-hidden aspect-[16/10] shadow-[40px_40px_0px_0px_rgba(226,255,215,0.08)] hover:shadow-[60px_60px_0px_0px_rgba(255,255,255,0.03)] transition-all duration-1000">
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
            alt="App Preview" 
            className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl px-8">
            <div className="bg-white p-10 rounded-[3rem] border-[5px] border-black text-black shadow-[25px_25px_0px_0px_rgba(0,0,0,1)] -rotate-3 group-hover:rotate-0 transition-transform duration-1000">
               <div className="flex items-center justify-between mb-8">
                 <div className="flex items-center gap-4">
                   <div className="w-4 h-4 rounded-full bg-red-500 animate-pulse"></div>
                   <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/30">Assistant Active</span>
                 </div>
                 <div className="text-[10px] font-black uppercase tracking-[0.3em] bg-[#E0D7FF] px-5 py-2 rounded-full border-2 border-black">Incoming Call</div>
               </div>
               
               <p className="text-2xl md:text-4xl font-[900] leading-[1.1] tracking-tighter mb-5">
                 "Hello! I'm scheduling a follow-up for the project we discussed..."
               </p>
               
               <div className="mt-10 flex justify-between items-center pt-8 border-t-[4px] border-black/5">
                 <div className="flex flex-col">
                   <span className="text-[10px] font-black uppercase tracking-widest text-black/30">Mode</span>
                   <span className="font-black text-xl text-[#6366f1]">Professional</span>
                 </div>
                 <div className="px-6 py-2 bg-black text-white rounded-full text-xs font-[900] uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(226,255,215,1)]">
                   Summarizing...
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .outline-text {
          color: black;
          -webkit-text-stroke: 1.5px white;
          paint-order: stroke fill;
        }
        @media (min-width: 1024px) {
          .outline-text {
            -webkit-text-stroke: 2.5px white;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;