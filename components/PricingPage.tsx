
import React from 'react';
import { Check } from 'lucide-react';
import FaqSection from './FaqSection';

const plans = [
  {
    name: "Basic",
    price: "0",
    period: "/ 7 days",
    description: "Experience the magic of Hola AI. No strings attached.",
    features: [
      "AI Answering for all missed calls",
      "Spam filtering",
      "Standard AI voice",
      "Summaries via App",
      "End-to-end encryption"
    ],
    cta: "Start Free Trial",
    highlight: false
  },
  {
    name: "Pro",
    price: "19",
    period: "/ mo",
    description: "For busy professionals who value their time with Hola AI.",
    features: [
      "Everything in Basic",
      "Customizable personalities",
      "Summaries via SMS & Email",
      "Unlimited call logs",
      "Priority AI processing"
    ],
    cta: "Upgrade to Hola AI Pro",
    highlight: true
  }
];

const PricingPage: React.FC = () => {
  return (
    <div id="pricing" className="pt-40 pb-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-[8rem] font-black mb-10 tracking-tighter opacity-0 animate-fade-in-up leading-none">Simple pricing.</h1>
          <p className="text-white/40 text-2xl font-bold max-w-xl mx-auto opacity-0 animate-fade-in-up stagger-1">One plan to rule your calls. Try Hola AI free first and see the difference.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-40">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`p-14 rounded-[3rem] border-4 flex flex-col transition-all duration-500 hover:scale-[1.03] opacity-0 animate-fade-in-up stagger-${i + 2} ${
                plan.highlight 
                ? 'bg-white text-black border-white shadow-[0_30px_90px_rgba(255,255,255,0.15)]' 
                : 'bg-zinc-950 text-white border-white/10'
              }`}
            >
              <div className="mb-14">
                <div className="flex justify-between items-start mb-6">
                  <h3 className={`text-[10px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full ${plan.highlight ? 'bg-black text-white' : 'bg-white/10 text-white/60'}`}>
                    {plan.name}
                  </h3>
                  {plan.highlight && (
                    <span className="text-[10px] font-black text-black border-2 border-black px-3 py-1 rounded-full uppercase tracking-widest">Most Popular</span>
                  )}
                </div>
                <div className="flex items-end gap-1 mb-8">
                  <span className="text-7xl font-black tracking-tighter">${plan.price}</span>
                  <span className="text-2xl opacity-40 mb-3 font-black uppercase tracking-widest">{plan.period}</span>
                </div>
                <p className="text-lg opacity-60 leading-relaxed font-bold">{plan.description}</p>
              </div>

              <ul className="space-y-6 mb-14 flex-grow">
                {plan.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-5 text-base font-black uppercase tracking-widest">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${plan.highlight ? 'bg-black text-white' : 'bg-white/20 text-white'}`}>
                      <Check className="w-4 h-4" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-6 rounded-2xl font-black text-xl transition-all active:scale-95 uppercase tracking-widest ${
                  plan.highlight 
                  ? 'bg-black text-white hover:bg-zinc-800' 
                  : 'bg-white text-black hover:bg-zinc-200'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto opacity-0 animate-fade-in-up stagger-5">
           <FaqSection category="pricing" />
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
