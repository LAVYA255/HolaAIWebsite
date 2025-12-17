
import React from 'react';
import { Check, X } from 'lucide-react';

const data = [
  { feature: "🗣️ How it responds", old: "Just records sound", new: "Talks like a human" },
  { feature: "🔍 Spam filtering", old: "Records everything", new: "Filters junk automatically" },
  { feature: "💬 What you receive", old: "Long unclear audio", new: "Short concise summary" },
  { feature: "🎭 Tone & personality", old: "One robotic voice", new: "Fully personalised" },
  { feature: "⏱️ Your effort", old: "Replay and guess", new: "Skim and act instantly" },
  { feature: "⚡ Availability", old: "Only when phone's on", new: "Always on (Telecom level)" },
  { feature: "🔒 Privacy & security", old: "Often unencrypted", new: "End-to-end encrypted" },
];

const ComparisonTable: React.FC = () => {
  return (
    <section id="comparison" className="py-40 px-6 bg-white text-black border-b-4 border-black scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-24">
          <div className="inline-block px-6 py-2 border-2 border-black rounded-full text-xs font-black tracking-widest uppercase mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-zinc-50">
            Vs Old World
          </div>
          <h2 className="text-5xl md:text-8xl font-[800] mb-8 tracking-tighter leading-[1.1] animate-fade-in-up">Everything your <br/>voicemail isn’t.</h2>
          <p className="text-black/40 text-xl font-bold max-w-2xl mx-auto animate-fade-in-up stagger-1">Old voicemail records everything, even the noise. Hola AI listens and prioritizes what matters.</p>
        </div>

        <div className="overflow-x-auto animate-fade-in-up stagger-2 border-4 border-black rounded-[3rem] bg-white shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-black text-white">
                <th className="py-10 px-8 font-[800] uppercase tracking-[0.2em] text-[12px] text-left w-1/3">The Feature</th>
                <th className="py-10 px-8 font-[800] uppercase tracking-[0.2em] text-[12px] text-center w-1/3 border-x-4 border-white/10">Traditional</th>
                <th className="py-10 px-8 font-[800] uppercase tracking-[0.2em] text-[12px] text-center w-1/3 bg-[#E2FFD7] text-black">Hola AI</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i} className={`border-b-4 border-black group hover:bg-black/[0.02] transition-colors`}>
                  <td className="py-10 px-8 font-[800] text-black text-xl">
                    {row.feature}
                  </td>
                  <td className="py-10 px-8 text-black/30 text-center border-x-4 border-black/5">
                    <div className="flex items-center justify-center gap-3 font-bold">
                      <X className="w-5 h-5 text-red-500/40" /> 
                      <span className="text-base md:text-lg">{row.old}</span>
                    </div>
                  </td>
                  <td className="py-10 px-8 text-center relative bg-[#E2FFD7]/30">
                    <div className="relative flex items-center justify-center gap-3 font-[800] text-black text-xl">
                      <Check className="w-6 h-6 text-green-600" /> 
                      <span className="text-base md:text-lg">{row.new}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
