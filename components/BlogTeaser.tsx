
import React from 'react';

const BlogTeaser: React.FC = () => {
  return (
    <section id="blog" className="py-32 px-6 bg-white text-black border-y border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative group overflow-hidden rounded-[2.5rem] border-4 border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,0.05)]">
            <img 
              src="https://picsum.photos/seed/lawyer/800/800?grayscale" 
              alt="Lawyer at desk" 
              className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10">
               <span className="text-[10px] font-black tracking-[0.3em] text-white/50 uppercase mb-4">Case Study</span>
               <h3 className="text-3xl font-black leading-tight text-white">How a high-stakes lawyer got 3 hours of his life back daily.</h3>
            </div>
          </div>
          
          <div className="space-y-10">
            <div className="inline-block px-4 py-1 bg-black text-white rounded-full text-xs font-black tracking-widest uppercase">The Blog</div>
            <h2 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tighter">Read the impact.</h2>
            <p className="text-black/60 text-xl leading-relaxed font-bold">
              "I used to dread checking my voicemail. Most were robocalls, some were urgent clients, but I had no way to know without listening to every single one." 
              <br/><br/>
              Read about how Mark, a criminal defense attorney, used Hola AI to filter noise and prioritize what actually matters.
            </p>
            <button className="flex items-center gap-5 text-xl font-black group">
              Read the full story 
              <span className="w-12 h-1.5 bg-black group-hover:w-20 transition-all duration-300 rounded-full"></span>
            </button>
            
            <div className="pt-10 border-t-2 border-black/5">
               <p className="text-black/30 text-xs font-black uppercase tracking-widest mb-6">Other popular reads:</p>
               <ul className="space-y-6">
                 <li><a href="#" className="text-black text-lg font-black hover:opacity-50 transition-all block">The Psychology of the Missed Call →</a></li>
                 <li><a href="#" className="text-black text-lg font-black hover:opacity-50 transition-all block">Why Robocalls are winning (and how to stop them) →</a></li>
               </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogTeaser;
