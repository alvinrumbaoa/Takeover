import OpenAI from 'openai';

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
  });

export const generateResponse = async (prompt: string) => {
  const response = await openai.chat.completions.create({
	model: "gpt-3.5-turbo",
	messages: [{"role": "user", "content": "Hello!"}],
  });

  return response.choices[0].message;
};
