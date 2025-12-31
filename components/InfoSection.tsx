
import React from 'react';
import { HOURS, SPECIALS } from '../constants';

const InfoSection: React.FC = () => {
  return (
    <div className="py-32 md:py-48 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-stretch">
        
        {/* Left Column: Hours & Specials */}
        <div className="flex flex-col justify-between space-y-24">
          <div className="animate-fade-in-up">
            <h3 className="text-[10px] uppercase tracking-[0.5em] text-neutral-500 font-bold mb-12 border-b border-neutral-800 pb-4 inline-block">Service Schedule</h3>
            <div className="space-y-8">
              {HOURS.map((item, i) => (
                <div key={i} className="flex justify-between items-baseline group">
                  <span className="text-2xl font-serif italic text-neutral-400 group-hover:text-white transition-colors duration-500">{item.days}</span>
                  <div className="flex-grow border-b border-dashed border-neutral-800 mx-4 opacity-30"></div>
                  <span className="text-[11px] tracking-[0.2em] font-sans uppercase font-black text-white">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-[10px] uppercase tracking-[0.5em] text-neutral-500 font-bold mb-12 border-b border-neutral-800 pb-4 inline-block">Weekly Traditions</h3>
            <div className="grid grid-cols-1 gap-10">
              {SPECIALS.map((item, i) => (
                <div key={i} className="flex flex-col group border-l-2 border-neutral-800 pl-8 py-2 transition-all hover:border-white">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-500 mb-2 group-hover:text-neutral-300">
                    {item.day}
                  </span>
                  <span className="text-2xl font-serif italic text-white leading-tight">
                    {item.offer}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Rewards & Loyalty */}
        <div className="bg-neutral-50 text-black p-12 lg:p-24 relative overflow-hidden flex flex-col justify-center">
          <div className="relative z-10">
            <div className="w-16 h-[2px] bg-black mb-10"></div>
            <h3 className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-bold mb-6">The Guild</h3>
            <h2 className="text-5xl md:text-6xl font-serif italic mb-10 leading-none">Green Mill Rewards</h2>
            <p className="text-neutral-600 text-lg font-light leading-relaxed mb-12 max-w-md">
              A commitment to loyalty. Earn 1 point for every $1 spent. Every 200 points unlocks a $10 certificate for your next legendary meal.
            </p>
            <div className="space-y-8 mb-16">
              {[
                "1 Point Per $1 Earned",
                "$10 Certificate at 200 Points",
                "Complimentary Birthday Deep Dish"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-6 group">
                  <span className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-[10px] font-bold group-hover:bg-black group-hover:text-white transition-all">
                    0{idx + 1}
                  </span>
                  <span className="text-xs uppercase tracking-widest font-black">{text}</span>
                </div>
              ))}
            </div>
            <button className="inline-block px-14 py-6 bg-black text-white text-[10px] uppercase tracking-[0.4em] font-black hover:bg-neutral-800 transition-all shadow-xl">
              Register Now
            </button>
          </div>
          {/* Large Background Letter */}
          <div className="absolute top-0 right-0 text-neutral-100 font-serif italic text-[30rem] leading-none -translate-y-20 translate-x-20 pointer-events-none select-none opacity-50">
            G
          </div>
        </div>

      </div>
    </div>
  );
};

export default InfoSection;
