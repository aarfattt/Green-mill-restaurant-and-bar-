
import React from 'react';
import { NAV_ITEMS } from '../constants';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
      isScrolled ? 'bg-white/98 backdrop-blur-lg py-3 border-neutral-200 shadow-sm' : 'bg-transparent py-6 border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className={`w-12 h-12 flex items-center justify-center transition-all duration-500 ${isScrolled ? 'brightness-0' : 'brightness-100 grayscale'}`}>
            {/* Conceptual logo representation - in a real app, this would be the actual logo.png */}
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M50 5 L95 25 L95 75 L50 95 L5 75 L5 25 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
              <text x="50" y="55" fontSize="12" textAnchor="middle" fill="currentColor" fontWeight="bold" className="font-serif">GM</text>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className={`font-serif text-xl tracking-tight transition-colors duration-500 ${
              isScrolled ? 'text-black' : 'text-white'
            }`}>
              GREEN MILL
            </span>
            <span className={`text-[9px] tracking-[0.3em] uppercase font-sans transition-colors duration-500 ${
              isScrolled ? 'text-neutral-500' : 'text-neutral-400'
            }`}>
              Duluth • Established 1935
            </span>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-12">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-[10px] uppercase tracking-[0.2em] font-sans font-bold transition-all hover:opacity-40 ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
          <button className={`px-8 py-2.5 text-[10px] uppercase tracking-widest font-bold border-2 transition-all duration-300 ${
            isScrolled 
              ? 'bg-black text-white border-black hover:bg-neutral-800' 
              : 'bg-transparent text-white border-white hover:bg-white hover:text-black'
          }`}>
            Order Online
          </button>
        </div>

        <div className="lg:hidden">
          <button className={isScrolled ? 'text-black' : 'text-white'}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
