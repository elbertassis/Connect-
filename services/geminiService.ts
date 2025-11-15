
import { GoogleGenAI } from "@google/genai";

// Assume process.env.API_KEY is configured in the environment
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY not found. AI features will be disabled.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const generateServiceDescription = async (userInput: string): Promise<string> => {
  if (!API_KEY) {
    return "O serviço de IA não está disponível. Por favor, descreva o problema manualmente.";
  }

  try {
    const prompt = `Baseado na seguinte descrição curta de um problema, crie uma descrição mais detalhada e clara para um prestador de serviço. Seja objetivo e foque nos detalhes importantes. Retorne apenas o texto da descrição.\n\nDescrição do usuário: "${userInput}"`;
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text;
  } catch (error) {
    console.error("Error generating description with Gemini:", error);
    return "Não foi possível gerar a descrição. Por favor, tente novamente ou descreva manualmente.";
  }
};
