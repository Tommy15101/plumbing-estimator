const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Store your API key securely in Vercel's environment variables
});

const openai = new OpenAIApi(configuration);

module.exports = async (req, res) => {
  const { jobType } = req.body;

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Provide a step-by-step process for ${jobType}.`,
      max_tokens: 150,
    });

    const steps = response.data.choices[0].text.trim();
    res.status(200).json({ steps });
  } catch (error) {
    res.status(500).json({ error: "Failed to generate steps" });
  }
};
