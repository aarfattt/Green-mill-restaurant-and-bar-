
import React from 'react';

const ServiceGrid: React.FC = () => {
  const services = [
    {
      title: "The Bar & Dining",
      subtitle: "The Heritage Experience",
      description: "Step into our legacy. Our bar features the oldest licensed pub heritage in the region, offering a sophisticated space for craft cocktails and conversation.",
      features: ["Happy Hour 3pm-6pm", "Full Spirit Selection", "Historic Canal Park Setting"],
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop&grayscale=1" // Matching the interior bar shot
    },
    {
      title: "The Kitchen",
      subtitle: "Legendary Craftsmanship",
      description: "From our signature 1975 Chicago-style deep dish to scratch-made pasta, our kitchen defines Duluth's comfort dining with fresh ingredients.",
      features: ["Award-Winning Deep Dish", "Freshly Ground Burgers", "Hand-Breaded Wings"],
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop&grayscale=1"
    },
    {
      title: "Catering & Events",
      subtitle: "Scaled Excellence",
      description: "From our landmark building in Canal Park, we serve groups of 5 to 5,000+. Professional catering for weddings, business, and celebrations.",
      features: ["Wedding Buffets", "Corporate Box Lunches", "Community Fundraising"],
      image: "https://images.unsplash.com/photo-1555392858-453df2663cf0?q=80&w=1200&auto=format&fit=crop&grayscale=1" // Matching the exterior building shot
    }
  ];

  return (
    <div className="py-32 md:py-48 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
        <div className="lg:col-span-8">
           <h3 className="text-[10px] uppercase tracking-[0.5em] text-neutral-400 font-bold mb-6">Culinary & Hospitality</h3>
           <h2 className="text-5xl md:text-7xl font-serif italic text-black leading-tight">Legendary Flavors. <br/> Modern Atmosphere.</h2>
        </div>
        <div className="lg:col-span-4 lg:text-right">
          <p className="text-neutral-500 font-sans font-light text-lg leading-relaxed">
            Preserving the standard of excellence established in 1935, while evolving for the modern Duluth palate.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="group relative">
            <div className="aspect-[3/4] overflow-hidden mb-10 bg-neutral-100 shadow-xl grayscale hover:grayscale-0 transition-all duration-1000">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-3 font-bold">{service.subtitle}</h4>
                <h3 className="text-3xl font-serif text-black italic">{service.title}</h3>
              </div>
              <p className="text-neutral-600 font-sans font-light leading-relaxed text-sm">
                {service.description}
              </p>
              <div className="pt-4 border-t border-neutral-100">
                <ul className="space-y-4">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-center text-[10px] uppercase tracking-widest text-black font-bold">
                      <span className="w-4 h-[1.5px] bg-black mr-4"></span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceGrid;
