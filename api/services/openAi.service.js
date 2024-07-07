import { openAi } from "../configurations/openAiConfiguration.js";
export const callAi = async (content) => {
    const completion = await openAi.chat.completions.create({
        messages: [{ role: "user", content: JSON.stringify(content)}],
        model: "gpt-3.5-turbo",    
    })
    console.log(completion.choices[0]);
}