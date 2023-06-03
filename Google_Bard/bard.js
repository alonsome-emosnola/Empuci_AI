// const { Configuration, OpenAIApi } = require("openai");
const { BardAPI } = require('bard-api-node');
// import Bard from "bard-ai";
// const fs = require("node:fs");
require("dotenv").config();

const token = process.env.BARD_TOKEN;

async function testAssistant(question) {
    try {
      const assistant = new BardAPI();
  
      // Set session information for authentication
      await assistant.setSession('__Secure-1PSID', token); // or '__Secure-3PSID'
      // ...
  
      // Send a query to Bard
      const response = await assistant.getBardResponse(question);
      // fs.writeFile("bard.txt", response.content, { flag: 'a+' }, err => console.log("Done Writing..."))
      return response;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  module.exports = {
    testAssistant: testAssistant
  };


// const bard_init = Bard.init(token).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.error(err);
// });

// Bard.askAI("What is life?").then(res => console.log(res)).catch(err => console.log(err));

// const setup = (api_Key) => {
//     const config = {
//         apiKey: api_Key,
//     }
//     return new Configuration(config);
// }
// const openai = new OpenAIApi(setup(api_Key));

// console.log(completion.data.choices[0].text);