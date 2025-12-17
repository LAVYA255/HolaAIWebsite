
import React from 'react';

const reviews = [
  {
    name: "Jonathan Reeves",
    role: "Litigation Lawyer",
    content: "As a lawyer, I get 50+ calls a day. Hola AI's summaries are a lifesaver. I can see who's a client and who's a cold caller in seconds.",
    img: "https://picsum.photos/seed/man1/200/200?grayscale",
    bgColor: "bg-[#E0D7FF]"
  },
  {
    name: "Sarah Chen",
    role: "Product Designer",
    content: "I hate taking calls while in deep work. Hola AI handles everything and I just read the summaries later. Total game changer.",
    img: "https://picsum.photos/seed/woman1/200/200?grayscale",
    bgColor: "bg-[#D7F1FF]"
  },
  {
    name: "Marcus Thorne",
    role: "Real Estate Agent",
    content: "The custom personalities are genius. My clients get a professional assistant, while telemarketers get a witty rejection.",
    img: "https://picsum.photos/seed/man2/200/200?grayscale",
    bgColor: "bg-[#FFE7D7]"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-40 px-6 bg-white text-black border-b-4 border-black scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <div className="inline-block px-6 py-2 border-2 border-black rounded-full text-xs font-black tracking-widest uppercase mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Testimonials
          </div>
          <h2 className="text-5xl md:text-8xl font-[800] mb-8 tracking-tighter leading-[1.1]">Trusted by busy humans.</h2>
          <p className="text-black/50 max-w-xl mx-auto text-xl font-bold">
            Real stories from users who stopped missing calls and started catching opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((r, i) => (
            <div 
              key={i} 
              className={`vibrant-card flex flex-col gap-8 p-12 border-4 border-black rounded-[3rem] ${r.bgColor} shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] animate-fade-in-up stagger-${i+1}`}
            >
              <div className="text-5xl font-black text-black/10">“</div>
              <p className="text-2xl font-[800] leading-tight italic -mt-6">"{r.content}"</p>
              <div className="flex items-center gap-5 mt-auto pt-8 border-t-4 border-black/10">
                <img src={r.img} alt={r.name} className="w-16 h-16 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" />
                <div>
                  <h4 className="font-[800] text-lg uppercase tracking-tight">{r.name}</h4>
                  <p className="text-sm font-bold text-black/40">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
