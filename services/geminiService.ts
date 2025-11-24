import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SITE_CONFIG, PUBLICATIONS, PROJECTS } from "../constants";

// Construct system instruction from site data
const SYSTEM_INSTRUCTION = `
You are an AI assistant for ${SITE_CONFIG.name}, who is a ${SITE_CONFIG.role} at ${SITE_CONFIG.university}.
Your goal is to answer questions about Alex's research, background, and publications professionally and concisely.

Here is the context about Alex:
Bio: ${SITE_CONFIG.about}

Publications:
${PUBLICATIONS.map(p => `- "${p.title}" (${p.venue}, ${p.year}): ${p.abstract}`).join('\n')}

Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description}`).join('\n')}

Keep answers brief (under 100 words unless asked for more detail). Be polite and academic in tone. 
If asked about something not in the context, politely say you don't have that information but they can contact Alex directly via email.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (chatSession) return chatSession;

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API Key not found");
    throw new Error("API Key missing");
  }

  const ai = new GoogleGenAI({ apiKey });

  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });

  return chatSession;
};

export const sendMessageStream = async (message: string): Promise<AsyncIterable<GenerateContentResponse>> => {
  const chat = getChatSession();
  try {
    return await chat.sendMessageStream({ message });
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    throw error;
  }
};