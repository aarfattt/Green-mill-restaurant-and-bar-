
import React, { useState } from 'react';
import { getMenuRecommendation } from '../geminiService';

const MenuConcierge: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleConsultation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    const result = await getMenuRecommendation(input);
    setResponse(result || "I apologize, our culinary guide is currently resting.");
    setLoading(false);
  };

  return (
    <div className="py-24 px-6 lg:px-12 max-w-4xl mx-auto text-center">
      <h3 className="text-xs uppercase tracking-[0.4em] text-neutral-400 font-bold mb-6">Culinary Guide</h3>
      <h2 className="text-3xl md:text-5xl font-serif italic text-black mb-8">What can we prepare for you?</h2>
      <p className="text-neutral-500 font-light mb-12 max-w-xl mx-auto">
        Describe your mood, hunger level, or flavor preference. Our AI concierge will curate a legendary experience just for you.
      </p>

      <form onSubmit={handleConsultation} className="relative mb-12">
        <input 
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g., 'Something hearty for a cold Duluth evening' or 'A light pasta lunch'"
          className="w-full bg-white border border-neutral-200 px-6 py-5 text-sm font-sans focus:outline-none focus:border-black transition-colors pr-32 italic"
        />
        <button 
          disabled={loading}
          className="absolute right-2 top-2 bottom-2 px-6 bg-black text-white text-[10px] uppercase tracking-widest font-bold disabled:opacity-50"
        >
          {loading ? 'Consulting...' : 'Ask Concierge'}
        </button>
      </form>

      {response && (
        <div className="bg-white p-8 md:p-12 border border-neutral-100 shadow-sm animate-fade-in-up">
          <div className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-6 font-bold">Concierge Recommendation</div>
          <p className="text-neutral-700 font-serif text-xl italic leading-relaxed whitespace-pre-wrap">
            "{response}"
          </p>
        </div>
      )}
    </div>
  );
};

export default MenuConcierge;
