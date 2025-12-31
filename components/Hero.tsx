
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Cinematic Night Shot Background (matching the user's neon sign photo) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1563293805-3e11b427494f?q=80&w=2000&auto=format&fit=crop&grayscale=1" 
          alt="Green Mill Duluth Neon Sign Night"
          className="w-full h-full object-cover opacity-50 scale-100 transition-transform duration-[10s] ease-linear hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl animate-fade-in-up">
        <div className="inline-block py-1 px-4 border border-white/20 backdrop-blur-md mb-8">
          <h2 className="text-white text-[10px] uppercase tracking-[0.5em] font-sans font-bold">
            The Canal Park Original
          </h2>
        </div>
        
        <h1 className="text-white font-serif text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] mb-10 italic tracking-tighter">
          A Duluth Legend <br/>
          <span className="text-neutral-400 not-italic">Since 1935.</span>
        </h1>
        
        <p className="text-neutral-300 text-lg md:text-xl font-sans max-w-3xl mx-auto mb-14 font-light leading-relaxed tracking-wide">
          Hand-crafted spirits and the Midwest's most celebrated deep-dish pizza, serving the heart of Canal Park for generations.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <button className="group relative px-14 py-6 bg-white text-black text-[10px] uppercase tracking-[0.3em] font-black overflow-hidden transition-all hover:bg-neutral-200 shadow-2xl">
            <span className="relative z-10">Start Order</span>
          </button>
          <button className="px-14 py-6 border-2 border-white/40 text-white text-[10px] uppercase tracking-[0.3em] font-black backdrop-blur-sm transition-all hover:border-white hover:bg-white/5">
            The Menu
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 text-white/30">
        <span className="text-[9px] uppercase tracking-[0.4em] font-bold">Explore Heritage</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-white/40 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-indicator"></div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-indicator {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(200%); opacity: 0; }
        }
        .animate-scroll-indicator { animation: scroll-indicator 2.5s cubic-bezier(.15,.41,.69,.94) infinite; }
      `}</style>
    </div>
  );
};

export default Hero;
