
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceGrid from './components/ServiceGrid';
import InfoSection from './components/InfoSection';
import MenuConcierge from './components/MenuConcierge';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header isScrolled={isScrolled} />
      
      <main className="flex-grow">
        <section id="hero">
          <Hero />
        </section>

        <section id="concierge" className="bg-neutral-50 border-y border-neutral-100">
           <MenuConcierge />
        </section>

        <section id="services">
          <ServiceGrid />
        </section>

        <section id="info" className="bg-black text-white">
          <InfoSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
