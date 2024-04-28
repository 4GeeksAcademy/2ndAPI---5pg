require('dotenv').config(); // Load environment variables from .env file
const { OpenAI } = require('openai'); // Import the OpenAI SDK

// Print the value of OPENAI_API_KEY
console.log("OPENAI_API_KEY:", process.env.OPENAI_API_KEY);

// Initialize the OpenAI client with your API key
const client = new OpenAI(process.env.OPENAI_API_KEY);

// Example usage of the completion endpoint
client.complete({
  engine: 'text-davinci-002', // Choose an engine
  prompt: "Once upon a time,",
  max_tokens: 50
})
.then((response) => {
  console.log(response.data.choices[0].text);
})
.catch((err) => {
  console.error('Error:', err);
});

