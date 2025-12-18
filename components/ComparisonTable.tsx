
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
    <section id="comparison" className="py-44 px-6 bg-[#fafafa] text-black border-b-[8px] border-black scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-24">
          <div className="inline-block px-6 py-2.5 border-[3px] border-black rounded-full text-xs font-black tracking-widest uppercase mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-[#FFE7D7]">
            Vs Old World
          </div>
          <h2 className="text-5xl md:text-[5.5rem] font-[900] mb-10 tracking-tighter leading-[1.3] animate-fade-in-up [word-spacing:6px]">
            Everything your <br/>
            voicemail isn’t.
          </h2>
          <p className="text-black/50 text-xl md:text-2xl font-bold max-w-2xl mx-auto animate-fade-in-up stagger-1 italic">
            Old voicemail records everything, even the noise. <span className="text-black">Hola AI listens and prioritizes what matters.</span>
          </p>
        </div>

        <div className="overflow-x-auto animate-fade-in-up stagger-2 border-[8px] border-black rounded-[4rem] bg-white shadow-[32px_32px_0px_0px_rgba(0,0,0,1)]">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-black text-white">
                <th className="py-12 px-10 font-[900] uppercase tracking-[0.3em] text-[12px] text-left w-1/3">The Feature</th>
                <th className="py-12 px-10 font-[900] uppercase tracking-[0.3em] text-[12px] text-center w-1/3 border-x-[5px] border-white/20">Traditional</th>
                <th className="py-12 px-10 font-[900] uppercase tracking-[0.3em] text-[12px] text-center w-1/3 bg-[#D7F1FF] text-black">Hola AI</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i} className={`border-b-[5px] border-black group hover:bg-black/[0.03] transition-colors`}>
                  <td className="py-12 px-10 font-[900] text-black text-xl md:text-2xl">
                    {row.feature}
                  </td>
                  <td className="py-12 px-10 text-black/70 text-center border-x-[5px] border-black/10">
                    <div className="flex items-center justify-center gap-4 font-bold">
                      <X className="w-6 h-6 text-red-600" /> 
                      <span className="text-lg md:text-xl">{row.old}</span>
                    </div>
                  </td>
                  <td className="py-12 px-10 text-center relative bg-[#D7F1FF]/30">
                    <div className="relative flex items-center justify-center gap-4 font-[900] text-black text-xl md:text-2xl">
                      <Check className="w-8 h-8 text-green-600" /> 
                      <span className="text-lg md:text-xl">{row.new}</span>
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