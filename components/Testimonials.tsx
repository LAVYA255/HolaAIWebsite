
import React from 'react';

const reviews = [
  {
    name: "Jonathan Reeves",
    role: "Litigation Lawyer",
    content: "As a lawyer, I get 50+ calls a day. Hola AI's summaries are a lifesaver. I can see who's a client and who's a cold caller in seconds.",
    img: "https://picsum.photos/seed/man1/400/400?grayscale",
    bgColor: "bg-[#E0D7FF]"
  },
  {
    name: "Sarah Chen",
    role: "Product Designer",
    content: "I hate taking calls while in deep work. Hola AI handles everything and I just read the summaries later. Total game changer.",
    img: "https://picsum.photos/seed/woman1/400/400?grayscale",
    bgColor: "bg-[#D7F1FF]"
  },
  {
    name: "Marcus Thorne",
    role: "Real Estate Agent",
    content: "The custom personalities are genius. My clients get a professional assistant, while telemarketers get a witty rejection.",
    img: "https://picsum.photos/seed/man2/400/400?grayscale",
    bgColor: "bg-[#FFE7D7]"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-44 px-6 bg-white text-black border-b-[6px] border-black scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <div className="inline-block px-6 py-2.5 border-[3px] border-black rounded-full text-xs font-black tracking-widest uppercase mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-[#E2FFD7]">
            Testimonials
          </div>
          <h2 className="text-5xl md:text-[6rem] font-[900] mb-10 tracking-tighter leading-[0.9] [word-spacing:10px]">Trusted by busy <span className="text-[#6366f1]">humans.</span></h2>
          <p className="text-black/60 max-w-xl mx-auto text-xl md:text-2xl font-bold">
            Real stories from users who stopped missing calls and started catching opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch">
          {reviews.map((r, i) => (
            <div 
              key={i} 
              className={`vibrant-card h-full flex flex-col p-10 md:p-12 border-[5px] border-black rounded-[3.5rem] ${r.bgColor} shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] hover:shadow-[28px_28px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-3 animate-fade-in-up stagger-${i+1} transition-all duration-500`}
            >
              {/* Quote Header */}
              <div className="text-6xl font-black text-black/10 leading-none mb-3 select-none">“</div>
              
              {/* Main Content Area */}
              <div className="flex-grow flex flex-col">
                <p className="text-2xl font-[900] leading-[1.3] italic mb-10 tracking-tight">
                  "{r.content}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-auto pt-8 border-t-[5px] border-black/10 flex items-center gap-5">
                <div className="relative flex-shrink-0">
                   <img 
                    src={r.img} 
                    alt={r.name} 
                    className="w-20 h-20 rounded-full border-[4px] border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] object-cover grayscale" 
                   />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-[900] text-xl uppercase tracking-tighter leading-tight">{r.name}</h4>
                  <p className="text-xs font-black text-black/40 uppercase tracking-[0.2em] mt-1">{r.role}</p>
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