
import React from 'react';

const BlogTeaser: React.FC = () => {
  return (
    <section id="blog" className="py-32 px-6 bg-white text-black border-y border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative group overflow-hidden rounded-[4rem] border-[6px] border-black shadow-[30px_30px_0px_0px_rgba(224,215,255,1)] hover:shadow-[40px_40px_0px_0px_rgba(224,215,255,1)] transition-all duration-500 bg-[#E0D7FF]">
            <img 
              src="https://img.notionusercontent.com/s3/prod-files-secure%2Fa81bbf51-a253-4230-886d-20506a79ca43%2F88483fb8-ddeb-4688-9d7b-341453cf0ab9%2FChatGPT_Image_Oct_15_2025_03_05_49_PM.png/size/w=1000?exp=1766100000&sig=placeholder" 
              alt="Impact Case Study" 
              className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            {/* Overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-12">
               <span className="text-[12px] font-black tracking-[0.4em] text-[#E2FFD7] uppercase mb-4 drop-shadow-md">User Spotlight</span>
               <h3 className="text-4xl font-black leading-tight text-white tracking-tighter">How a high-stakes lawyer got 3 hours of his life back daily.</h3>
            </div>
          </div>
          
          <div className="space-y-12">
            <div>
              <div className="inline-block px-6 py-2 bg-black text-white rounded-full text-xs font-black tracking-widest uppercase mb-8 shadow-[4px_4px_0px_0px_rgba(255,231,215,1)]">
                The Blog
              </div>
              <h2 className="text-5xl md:text-7xl font-black leading-[1] tracking-tighter mb-8">Read the impact.</h2>
              <p className="text-black/70 text-2xl leading-relaxed font-bold italic">
                "I used to dread checking my voicemail. Most were robocalls, some were urgent clients, but I had no way to know without listening to every single one." 
              </p>
              <p className="text-black/50 text-xl leading-relaxed font-bold mt-6">
                Read about how Mark, a criminal defense attorney, used Hola AI to filter noise and prioritize what actually matters in a high-pressure environment.
              </p>
            </div>

            <button className="flex items-center gap-6 text-2xl font-black group transition-all">
              Read the full story 
              <span className="w-16 h-2 bg-black group-hover:w-28 transition-all duration-500 rounded-full"></span>
            </button>
            
            <div className="pt-12 border-t-4 border-black/5">
               <p className="text-black/30 text-[10px] font-black uppercase tracking-[0.3em] mb-8">Other popular reads:</p>
               <ul className="space-y-8">
                 <li>
                   <a href="#" className="flex items-center justify-between group">
                     <span className="text-black text-2xl font-black hover:text-[#E0D7FF] transition-all">The Psychology of the Missed Call</span>
                     <span className="text-black/20 group-hover:translate-x-2 transition-transform">→</span>
                   </a>
                 </li>
                 <li>
                   <a href="#" className="flex items-center justify-between group">
                     <span className="text-black text-2xl font-black hover:text-[#D7F1FF] transition-all">Why Robocalls are winning</span>
                     <span className="text-black/20 group-hover:translate-x-2 transition-transform">→</span>
                   </a>
                 </li>
               </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogTeaser;
