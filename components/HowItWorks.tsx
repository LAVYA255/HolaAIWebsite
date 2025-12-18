
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.holavoicemail.app";

  return (
    <section className="py-36 px-6 bg-[#fafafa] text-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative order-2 lg:order-1 flex justify-center">
            {/* Colorful accent background blob - Using Lavender */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#E0D7FF]/40 rounded-full blur-[100px] pulse-blob"></div>
            <img 
              src="https://img.notionusercontent.com/s3/prod-files-secure%2Fa81bbf51-a253-4230-886d-20506a79ca43%2F88483fb8-ddeb-4688-9d7b-341453cf0ab9%2FChatGPT_Image_Oct_15_2025_03_05_49_PM.png/size/w=580?exp=1766087422&sig=_KjpxWdfl2kifZbrN5Wha5EpKcyr3FQzLyyNJojxT24&id=28d416c0-2a62-8000-be54-d945d838eb33&table=block&userId=1abd872b-594c-8188-b86a-0002a275129b" 
              alt="Goodbye Dumb Recordings" 
              className="relative w-full max-w-lg animate-float drop-shadow-[0_40px_40px_rgba(0,0,0,0.2)] hover:scale-110 transition-transform duration-1000"
            />
          </div>
          
          <div className="space-y-12 order-1 lg:order-2">
            <div>
              <div className="inline-block px-6 py-2.5 mb-8 bg-[#E2FFD7] border-[3px] border-black rounded-full text-xs font-black tracking-widest uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                The Upgrade
              </div>
              <h2 className="text-5xl md:text-[4.8rem] font-black tracking-tighter leading-[1.25] mb-10">
                When Voicemail Starts Talking, It’s <span className="text-[#6366f1] whitespace-nowrap">Hola AI!</span>
              </h2>
              <p className="text-xl md:text-2xl text-black/70 leading-relaxed font-bold">
                Old voicemail records everything and filters nothing. Hola AI listens & talks like a human, filtering the noise and sending you only what matters.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {/* Traditional - High Contrast */}
              <div className="flex items-center gap-6 p-8 rounded-[2.5rem] bg-black text-white border-[5px] border-black group transition-all hover:translate-x-5 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.1)]">
                <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full bg-white text-red-600 font-black text-2xl border-4 border-white">X</div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Traditional</p>
                  <p className="font-bold text-xl md:text-2xl">Dumb recordings & junk robocalls.</p>
                </div>
              </div>

              {/* Hola AI - The Highlight */}
              <div className="flex items-center gap-6 p-8 rounded-[2.5rem] bg-[#E2FFD7] text-black border-[5px] border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] hover:scale-[1.05] transition-all hover:translate-x-5">
                <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full bg-black text-white font-black text-2xl border-4 border-black">✓</div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60">Hola AI</p>
                  <p className="font-bold text-xl md:text-2xl">Smart conversations & zero spam.</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => window.open(PLAY_STORE_URL, '_blank')}
              className="group bg-[#E0D7FF] text-black border-[5px] border-black px-12 py-8 rounded-full font-black text-2xl flex items-center gap-6 hover:bg-white transition-all hover:scale-105 shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] uppercase tracking-tighter"
            >
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