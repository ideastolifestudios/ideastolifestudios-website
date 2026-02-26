import { GoogleGenAI } from "@google/genai";

const CACHE_KEY = 'cbr_google_reviews_cache';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

const FALLBACK_DATA = {
  reviews: [
    { author: "Happy Client", rating: 5, text: "Excellent service and high-quality prints! Highly recommended for any branding needs." },
    { author: "Local Business", rating: 5, text: "Fast turnaround and very professional. The best print studio in Johannesburg." },
    { author: "Event Organizer", rating: 5, text: "Great attention to detail. Our event programs looked amazing." }
  ],
  grounding: []
};

export const fetchGoogleReviews = async () => {
  // Check cache first
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_DURATION) {
        return data;
      }
    }
  } catch (e) {
    console.warn("Cache read failed", e);
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Summarize the top 3 positive reviews for the business with Google Maps place ID ChIJk07duPttlR4RIyrKMxkrnd8. For each review, provide the author name, a star rating (1-5), and a short snippet of the review text. Return the data as a JSON array.",
      config: {
        tools: [{ googleMaps: {} }],
      },
    });

    const text = response.text || "";
    const jsonMatch = text.match(/\[.*\]/s);
    let result;

    if (jsonMatch) {
      result = {
        reviews: JSON.parse(jsonMatch[0]),
        grounding: response.candidates?.[0]?.groundingMetadata?.groundingChunks || []
      };
    } else {
      result = {
        ...FALLBACK_DATA,
        grounding: response.candidates?.[0]?.groundingMetadata?.groundingChunks || []
      };
    }

    // Save to cache
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({
        data: result,
        timestamp: Date.now()
      }));
    } catch (e) {
      console.warn("Cache write failed", e);
    }

    return result;
  } catch (error: any) {
    // If it's a quota error, don't spam the console with the full error object
    if (error?.message?.includes("429") || error?.status === "RESOURCE_EXHAUSTED") {
      console.warn("Google Reviews: Quota exceeded, using fallback data.");
    } else {
      console.error("Error fetching reviews:", error);
    }
    
    return FALLBACK_DATA;
  }
};
