
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

const faqs: Record<string, FaqItem[]> = {
  general: [
    {
      q: "How does Hola AI work?",
      a: "Hola AI answers calls like a human, even when your phone is off or in flight mode. It talks to your callers, understands why they called, filters spam, and sends you a short summary via app, SMS, or email."
    },
    {
      q: "Will it work with my existing number?",
      a: "Yes. You don’t need a new number. Your unanswered calls are simply forwarded to Hola AI, it takes over when you can’t pick up."
    },
    {
      q: "What happens to my old voicemails?",
      a: "They stay safe and untouched. Once Hola AI takes over, new missed calls go straight to your smart assistant instead of the old voicemail box."
    },
    {
      q: "Is my data private and secure?",
      a: "Completely. All call recordings and transcripts are encrypted end-to-end. You have full control, delete anything anytime."
    },
    {
      q: "Can I customize how my AI sounds?",
      a: "Yes. Make Hola AI sound sharp for work, warm for friends, or witty with spam. You can personalize tone and conversation style by caller type."
    }
  ],
  pricing: [
    {
      q: "Is there a free trial?",
      a: "Yes! You get a 7-day free trial. Try Hola AI, experience the magic, and decide later if you want to continue."
    },
    {
      q: "What happens after my free trial ends?",
      a: "You’ll get a reminder before your trial expires. If you choose not to continue, Hola AI will simply stop answering your calls. You can unsubscribe anytime before the free trial ends."
    },
    {
      q: "Do I need to pay upfront?",
      a: "Nope. You can explore everything free for 7 days. Payment only starts after the free trial is over."
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes, you can cancel or change your plan anytime from within the app settings."
    }
  ]
};

const FaqSection: React.FC<{ category: 'general' | 'pricing' }> = ({ category }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = faqs[category];

  return (
    <div id="faqs" className="py-32 px-6 bg-white text-black border-t border-black/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 border-2 border-black rounded-full text-[10px] font-black tracking-widest uppercase mb-6">FAQ</div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
            {category === 'general' ? 'Questions you might have.' : 'Everything about pricing.'}
          </h2>
        </div>
        
        <div className="space-y-6">
          {items.map((item, i) => (
            <div 
              key={i} 
              className={`border-4 border-black rounded-[2rem] overflow-hidden transition-all duration-300 ${openIndex === i ? 'bg-zinc-50' : 'bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'}`}
            >
              <button 
                className="w-full px-10 py-8 flex items-center justify-between text-left hover:bg-zinc-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-black text-xl md:text-2xl tracking-tight pr-8">{item.q}</span>
                <div className="flex-shrink-0 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
                  {openIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              {openIndex === i && (
                <div className="px-10 pb-10 text-black/60 text-lg font-bold leading-relaxed animate-in fade-in slide-in-from-top-4 duration-500">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
