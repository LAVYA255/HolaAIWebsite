
import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-48 px-6 overflow-hidden bg-white text-black border-b-8 border-black">
      {/* Decorative floating elements */}
      <div className="absolute top-40 left-[10%] w-24 h-24 bg-[#E0D7FF] rounded-full blur-[60px] opacity-60 animate-float"></div>
      <div className="absolute bottom-40 right-[10%] w-32 h-32 bg-[#E2FFD7] rounded-full blur-[80px] opacity-60 animate-float stagger-2"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-3 px-6 py-2 mb-10 bg-[#E2FFD7] border-4 border-black rounded-full text-sm font-[900] tracking-[0.2em] uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] animate-fade-in-up">
          <Zap className="w-5 h-5 fill-current" />
          The Future of Voicemail
        </div>
        
        <h1 className="text-6xl md:text-[8.5rem] font-[900] mb-12 leading-[0.9] tracking-tighter animate-fade-in-up stagger-1">
          Skip the spam.<br />
          <span className="text-black/10 outline-text">Catch every opportunity.</span>
        </h1>
        
        <p className="text-xl md:text-3xl text-black/50 mb-16 max-w-3xl mx-auto leading-tight font-bold italic animate-fade-in-up stagger-2">
          Hola AI answers your calls like a human. No dumb recordings, just real conversations. 
          It filters spam and sends you instant summaries of what matters.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-fade-in-up stagger-3">
          <button className="group w-full sm:w-auto px-12 py-8 bg-black text-white border-4 border-black rounded-[2rem] font-[900] text-2xl hover:bg-[#E2FFD7] hover:text-black hover:-translate-y-2 transition-all duration-300 shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] active:scale-95 flex items-center justify-center gap-4">
            Get Hola AI Voicemail
            <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform" />
          </button>
          
          <button className="w-full sm:w-auto px-12 py-8 bg-white text-black border-4 border-black rounded-[2rem] font-[900] text-2xl hover:bg-zinc-50 hover:-translate-y-1 transition-all shadow-[10px_10px_0px_0px_rgba(0,0,0,0.1)] active:scale-95">
            Learn More
          </button>
        </div>
      </div>

      <div className="mt-40 max-w-5xl mx-auto relative group animate-fade-in-up stagger-4 px-4">
        {/* The 3D App Preview Mockup */}
        <div className="relative bg-black rounded-[3.5rem] border-[6px] border-black overflow-hidden aspect-[16/10] shadow-[40px_40px_0px_0px_rgba(226,255,215,1)] hover:shadow-[50px_50px_0px_0px_rgba(0,0,0,1)] transition-all duration-700">
          <img 
            src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2070&auto=format&fit=crop" 
            alt="App Preview" 
            className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          
          {/* Floating UI Elements inside the preview */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg px-6 lg:px-0">
            <div className="bg-white p-10 rounded-[3rem] border-4 border-black text-black shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] -rotate-3 group-hover:rotate-0 transition-transform duration-700">
               <div className="flex items-center justify-between mb-8">
                 <div className="flex items-center gap-4">
                   <div className="w-4 h-4 rounded-full bg-red-500 animate-pulse"></div>
                   <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30">Assistant Active</span>
                 </div>
                 <div className="text-[10px] font-black uppercase tracking-[0.2em] bg-[#E0D7FF] px-4 py-1.5 rounded-full">Incoming Call</div>
               </div>
               
               <p className="text-2xl md:text-3xl font-[900] leading-[1.1] tracking-tighter mb-4">
                 "Hello! I'm scheduling a follow-up for the project we discussed yesterday at lunch..."
               </p>
               
               <div className="mt-10 flex justify-between items-center pt-8 border-t-[3px] border-black/5">
                 <div className="flex flex-col">
                   <span className="text-[10px] font-black uppercase tracking-widest text-black/30">Mode</span>
                   <span className="font-black text-lg">Professional (Sharp)</span>
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
          -webkit-text-stroke: 2px black;
          color: transparent;
        }
      `}</style>
    </section>
  );
};

export default Hero;
