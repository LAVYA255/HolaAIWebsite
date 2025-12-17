
import React from 'react';

const featureList = [
  {
    image: "https://img.notionusercontent.com/s3/prod-files-secure%2Fa81bbf51-a253-4230-886d-20506a79ca43%2F88483fb8-ddeb-4688-9d7b-341453cf0ab9%2FChatGPT_Image_Oct_15_2025_03_05_49_PM.png/size/w=2000?exp=1766082851&sig=ui_fyC6lQOp8lcWstlVHaHPgdCFkY3MdQhHPzD4MF90&id=28d416c0-2a62-8000-be54-d945d838eb33&table=block&userId=1abd872b-594c-8188-b86a-0002a275129b",
    title: "Answers like a human",
    description: "Hola AI talks to your callers, understands why they called, and makes them feel heard.",
    bgColor: "bg-[#E0D7FF]", // Lavender
  },
  {
    image: "https://img.notionusercontent.com/s3/prod-files-secure%2Fa81bbf51-a253-4230-886d-20506a79ca43%2Ffc5e5fa9-9e54-4486-b8fe-5f8e6cdcacea%2FChatGPT_Image_Oct_15_2025_02_50_26_PM.png/size/w=380?exp=1766082920&sig=S6bq7ASNIzNi8SyNDFmW8ti2B2EUxXWXS63FljQRDSE&id=28d416c0-2a62-80c2-9dc0-eee5114d6d12&table=block&userId=1abd872b-594c-8188-b86a-0002a275129b",
    title: "Filters spam automatically",
    description: "No more wasted time on robocalls. Hola AI filters out junk before it reaches you.",
    bgColor: "bg-[#D7F1FF]", // Light Blue
  },
  {
    image: "https://img.notionusercontent.com/s3/prod-files-secure%2Fa81bbf51-a253-4230-886d-20506a79ca43%2Fb41dc512-1d0d-43ac-97d8-6e6bd3edc8e4%2FChatGPT_Image_Oct_15_2025_02_49_04_PM.png/size/w=380?exp=1766082946&sig=HYsI-DeNjjGH7komf0gap1Mqkk4ivinOGZN7dEA-30Q&id=28d416c0-2a62-80ba-b782-ee8675eae6c2&table=block&userId=1abd872b-594c-8188-b86a-0002a275129b",
    title: "Sends instant summaries",
    description: "You get a concise summary of who called, why, and how important it is.",
    bgColor: "bg-[#FFF9D7]", // Pale Yellow
  },
  {
    image: "https://img.notionusercontent.com/s3/prod-files-secure%2Fa81bbf51-a253-4230-886d-20506a79ca43%2Fe228a31c-9b43-45a4-a747-f7dc132e5e55%2FChatGPT_Image_Oct_15_2025_02_52_55_PM.png/size/w=380?exp=1766082966&sig=ZBXZm5YPUWeuJ_PPePfqh-Qi6nI1Pr7rNXDlLSSmmZs&id=28d416c0-2a62-80e6-8954-ded93f5ebf4d&table=block&userId=1abd872b-594c-8188-b86a-0002a275129b",
    title: "Multiple personalities",
    description: "Personalise how it responds. Sharp for work, warm for friends, or witty with spam.",
    bgColor: "bg-[#E2FFD7]", // Mint Green
  },
  {
    image: "https://img.notionusercontent.com/s3/prod-files-secure%2Fa81bbf51-a253-4230-886d-20506a79ca43%2F30591a18-0600-4289-90b7-39360e6cf424%2FChatGPT_Image_Oct_15_2025_02_54_59_PM.png/size/w=480?exp=1766082996&sig=AB035R9SajRFiPhUQ4eWZZxV08FVDvsYYWfQsyld76A&id=28d416c0-2a62-8096-a8ff-e216ba239b68&table=block&userId=1abd872b-594c-8188-b86a-0002a275129b",
    title: "Private and secure",
    description: "All recordings and transcripts are encrypted. Your conversations stay yours.",
    bgColor: "bg-[#FFE7D7]", // Peach
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-48 px-6 bg-white text-black overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32 animate-fade-in-up">
          <div className="inline-block px-10 py-2.5 border-4 border-black rounded-full text-sm font-[900] tracking-[0.2em] uppercase mb-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white">
            Why Hola AI?
          </div>
          <h2 className="text-6xl md:text-[6.5rem] font-[900] tracking-tighter mb-10 leading-[0.95]">
            Channel your inner <br className="hidden md:block"/>efficiency!
          </h2>
          <p className="text-xl md:text-2xl text-black/50 max-w-4xl mx-auto leading-relaxed font-bold italic">
            With Hola AI you can finally take control of your digital habits. 
            Less time wasted with robocalls, and more time for the things that really matter in life.
          </p>
        </div>

        {/* Updated Grid with 4:3 Aspect Ratio and Scaled Up Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-20 pb-40 px-4">
          {featureList.map((f, idx) => (
            <div 
              key={idx} 
              className={`group ${f.bgColor} p-8 lg:p-10 rounded-[3rem] flex flex-col items-center text-center border-[5px] border-black animate-fade-in-up stagger-${(idx % 5) + 1} shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] hover:shadow-[25px_25px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-4 hover:-translate-x-2 transition-all duration-300 relative h-full min-h-[580px]`}
            >
              {/* Top Graphic Area - 4:3 Aspect Ratio */}
              <div className="mb-14 w-full aspect-[4/3] flex items-center justify-center relative overflow-visible">
                {/* Visual Glow/Blob behind illustration */}
                <div className="absolute inset-0 bg-white/60 rounded-full blur-[50px] scale-90 group-hover:scale-125 transition-transform duration-700"></div>
                
                {/* Scaled Up Image */}
                <img 
                  src={f.image} 
                  alt={f.title} 
                  className="relative w-[120%] max-w-none h-[120%] object-contain drop-shadow-2xl group-hover:scale-115 transition-transform duration-500 z-10"
                />
              </div>

              {/* Text Content */}
              <div className="space-y-6 flex flex-col flex-grow justify-start z-20">
                <h3 className="text-3xl lg:text-[2.2rem] font-[900] tracking-tighter leading-[1.05] text-black">
                  {f.title}
                </h3>
                <p className="text-base lg:text-lg font-[700] text-black/60 leading-snug">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
