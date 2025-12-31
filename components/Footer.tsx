
import React from 'react';
import { ADDRESS, PHONE_PRIMARY, PHONE_ALT } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white text-black pt-40 pb-16 px-6 lg:px-12 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 mb-40">
          
          <div className="space-y-16">
            <div>
              <div className="flex items-center gap-4 mb-12">
                <div className="w-16 h-16 bg-black flex items-center justify-center text-white">
                  <svg viewBox="0 0 100 100" className="w-8 h-8">
                    <path d="M50 5 L95 25 L95 75 L50 95 L5 75 L5 25 Z" fill="none" stroke="currentColor" strokeWidth="4"/>
                    <text x="50" y="58" fontSize="16" textAnchor="middle" fill="currentColor" fontWeight="black" className="font-serif">GM</text>
                  </svg>
                </div>
                <h2 className="text-4xl font-serif italic">Green Mill <br/> <span className="text-neutral-400 not-italic">Duluth</span></h2>
              </div>
              <h3 className="text-5xl md:text-7xl font-serif italic mb-12 leading-tight">Visit Us in <br/> Canal Park.</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-bold">Address</h4>
                <p className="text-lg font-sans font-light tracking-tight border-l-2 border-neutral-100 pl-6 py-2">{ADDRESS}</p>
              </div>
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-bold mb-3">Reservations</h4>
                  <a href={`tel:${PHONE_PRIMARY}`} className="text-2xl font-serif italic hover:text-neutral-500 transition-all">{PHONE_PRIMARY}</a>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-bold mb-3">Takeout & Delivery</h4>
                  <a href={`tel:${PHONE_ALT}`} className="text-2xl font-serif italic hover:text-neutral-500 transition-all">{PHONE_ALT}</a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-16">
            <div className="aspect-video bg-neutral-50 relative group overflow-hidden shadow-inner border border-neutral-100">
               {/* Map Placeholder Graphic with Duluth coordinates vibe */}
               <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="text-center space-y-6">
                    <div className="w-16 h-16 rounded-full border border-black flex items-center justify-center mx-auto">
                      <div className="w-2 h-2 bg-black rounded-full animate-ping"></div>
                    </div>
                    <div className="space-y-1">
                      <span className="block text-[10px] uppercase tracking-[0.6em] font-black">46.7867° N, 92.1005° W</span>
                      <span className="block text-xs font-serif italic text-neutral-500">Center of the Duluth Harbor</span>
                    </div>
                  </div>
               </div>
               <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-black/5 pointer-events-none"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-12 border-t border-neutral-100">
               <div className="space-y-6">
                 <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-400">The Collection</h4>
                 <ul className="space-y-4">
                   <li><a href="#" className="text-xs uppercase tracking-[0.2em] font-black hover:opacity-50 transition-opacity">The Mug Club</a></li>
                   <li><a href="#" className="text-xs uppercase tracking-[0.2em] font-black hover:opacity-50 transition-opacity">Corporate Gifting</a></li>
                   <li><a href="#" className="text-xs uppercase tracking-[0.2em] font-black hover:opacity-50 transition-opacity">Fundraising</a></li>
                 </ul>
               </div>
               <div className="space-y-6">
                 <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-400">Delivery Limits</h4>
                 <p className="text-[10px] leading-[1.8] text-neutral-500 font-sans font-bold uppercase tracking-widest">
                   North: Skyline Parkway<br/>
                   West: 60th Ave W<br/>
                   East: 60th Ave E<br/>
                   South: MN/WI Border<br/>
                   <span className="text-black mt-4 block">$8.00 Minimum Order Value</span>
                 </p>
               </div>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-neutral-100 gap-10">
          <div className="flex flex-col items-center md:items-start space-y-2">
             <span className="font-serif text-2xl tracking-tighter font-black">GREEN MILL</span>
             <span className="text-[8px] uppercase tracking-[0.4em] font-sans text-neutral-400 font-bold">© 2024 Green Mill Restaurant & Bar. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-12">
            {['Instagram', 'Facebook', 'Twitter'].map(social => (
              <a key={social} href="#" className="text-[9px] uppercase tracking-[0.3em] font-black border-b border-transparent hover:border-black transition-all pb-1">{social}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
