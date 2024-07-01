import OpenAI from "openai/index.mjs";
export const openAi = new OpenAI(
    "https://api.openai.com/v1/chat/completions",
    process.env.OPENAI_API_KEY);