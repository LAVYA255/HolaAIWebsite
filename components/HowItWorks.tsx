
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative order-2 lg:order-1 flex justify-center">
            {/* Colorful accent background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#E0D7FF]/30 rounded-full blur-[100px]"></div>
            <img 
              src="ChatGPT_Image_Oct_15_2025_03_05_49_PM.png" 
              alt="Goodbye Dumb Recordings" 
              className="relative w-full max-w-lg animate-float drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          <div className="space-y-12 order-1 lg:order-2">
            <div>
              <div className="inline-block px-5 py-2 mb-8 bg-[#E2FFD7] border-2 border-black rounded-full text-xs font-black tracking-widest uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                The Upgrade
              </div>
              <h2 className="text-5xl md:text-[5.5rem] font-black tracking-tighter leading-[0.95] mb-10">
                When Voicemail Starts Talking, It’s Hola AI!
              </h2>
              <p className="text-xl md:text-2xl text-black/60 leading-relaxed font-bold">
                Old voicemail records everything and filters nothing. Hola AI listens & talks like a human, filtering the noise and sending you only what matters.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {/* Traditional - High Contrast */}
              <div className="flex items-center gap-6 p-8 rounded-[2.5rem] bg-black text-white border-4 border-black group transition-all hover:translate-x-4">
                <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full bg-white text-red-600 font-black text-2xl border-4 border-white">X</div>
                <div className="space-y-1">
                  <p className="text-xs font-black uppercase tracking-widest opacity-40">Traditional</p>
                  <p className="font-bold text-xl">Dumb recordings & junk robocalls.</p>
                </div>
              </div>

              {/* Hola AI - The Highlight */}
              <div className="flex items-center gap-6 p-8 rounded-[2.5rem] bg-[#E2FFD7] text-black border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:scale-[1.05] transition-all hover:translate-x-4">
                <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full bg-black text-white font-black text-2xl border-4 border-black">✓</div>
                <div className="space-y-1">
                  <p className="text-xs font-black uppercase tracking-widest opacity-60">Hola AI</p>
                  <p className="font-bold text-xl">Smart conversations & zero spam.</p>
                </div>
              </div>
            </div>

            <button className="group bg-black text-white px-12 py-8 rounded-full font-black text-2xl flex items-center gap-6 hover:bg-zinc-800 transition-all hover:scale-105 shadow-[0_30px_60px_rgba(0,0,0,0.15)] uppercase tracking-tighter">
              Upgrade to Hola AI
              <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
