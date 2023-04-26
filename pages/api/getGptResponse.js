
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
    if(req.method != "POST") {
      res.status(405).send({ message: 'Only POST requests allowed' });
      return;
    }  
    const body = req.body;
    console.log(body)
    let chatGPTResponse = await openai.createCompletion({
      model: body.model,
      prompt: body.prompt,
      temperature: body.temperature,
      max_tokens: body.max_tokens,
    });
    console.log(chatGPTResponse)
    let responseText = chatGPTResponse.data.choices[0].text
    res.status(200).json({ message: responseText, status: chatGPTResponse.status });
}
