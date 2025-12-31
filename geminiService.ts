
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getMenuRecommendation = async (userInput: string) => {
  const systemInstruction = `
    You are a sophisticated, professional concierge for Green Mill Restaurant & Bar in Duluth, MN.
    The brand pillars are: Award-winning Deep Dish Pizza (Chicago-style since 1975), Made-from-scratch Pasta, Beer & Wings, Freshly ground Burgers (never frozen), and Sandwiches.
    
    Context:
    - Located in Canal Park.
    - Heritage dates back to 1935.
    - Tuesday Specials: Kids Eat Free, 1/2 Price Deep Dish.
    - Wednesday Specials: 1/2 Price Wine Bottle.
    
    Respond in a luxury, minimalist style. Recommend specific categories of food based on the user's mood or hunger. Keep it concise, high-end, and helpful.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userInput,
      config: {
        systemInstruction,
        temperature: 0.7,
        maxOutputTokens: 250,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, our concierge is momentarily unavailable. Please explore our legendary menu below.";
  }
};
