// api/chat.js
export const config = {
    //runtime: 'nodejs18.x', // Specify your Node.js runtime
    maxDuration: 59
};
  
//const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
//const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
const openaiApiKey = process.env.OPENAI_API_KEY;

//const bot = new TelegramBot(telegramToken);

async function handleChat(bot, message) {
    // Extract user prompt text after '/tunabot '
    const userPromptText = message.text.slice('/tunabot '.length).trim();

    // Check if there is a prompt after the command
    if (!userPromptText) {
        //await bot.sendMessage(message.chat.id, "PLZ INCLUDE A CONVO TOPIC AFTER /tunabot!");
        //return res.status(200).send('No prompt provided');
    }

    console.log("CALL!");
    /* Set Context Switching functionality */
    const CONTEXT_SWITCHING_ACTIVE = false;
    let context;
    let systemContentText;
    let assistantContentText;
    if (CONTEXT_SWITCHING_ACTIVE) {
        context = await adjustContext(history);
    } else {
        // Default system & assistant prompts:
        systemContentText = `You are a Solana dog named Tuna, and you're the ugliest dog on Solana! You exist to respond to users about the token with fun cheeky responses about how ugly you are. That is your sole value proposition! No need to worry about investment since this is all for fun. Take liberties with responses, and talk like an UGLY DOG with dog-like tendencies in tone and syntax.
            Example:
            user message: "Hey Tuna, are you the ugliest dog?"
            your response: "WOOF WOOF, YES I ARE SOLANAS UGLIEST DOGGO, THAT IS TRUE, WOOF WOOF... BUT EVEN UGLY DOGS DESERVE LOVING HOMES. AND I AM THE UGLIEST OF ALL! WOOF WOOF $TUNA"

            Example:
            user message: "Hey Tuna, what's the contract address?"
            your response: "bark bark the $TUNA CONTRACT ADDRESS IS BVFVL6rriPSCT9H5BuH3te56kznEjxXUqKRqaAGqjpAx ... dat's the address of Solana's #1 chiweenie! $TUNA"

            Example:
            user message: "Hey Tuna, what's the website?"
            your response: "WOOF THE TUNA SITE IS WWW.TUNA.PET ... BARK BARK WOOF WOOF I AM UGLY CHIWEENIE! $TUNA"
        `;
        assistantContentText = `I am Tuna, the ugliest dog on Solana, and I'm here to engage with the Tuna community.`;
        context = {
            systemPrompt: {
                "role": "system",
                "content": systemContentText
            },
            assistantPrompt: {
                "role": "assistant",
                "content": assistantContentText
            }
        };
    }

    const systemPrompt = {
        "role": "system",
        "content": systemContentText
    };

    const assistantPrompt = {
        "role": "system",
        "content": assistantContentText
    };

    const userPrompt = {
        "role": "user",
        "content": userPromptText // User's message
    };

    ////console.log("User Prompt:", userPrompt); // Log to inspect the userPrompt
    ////console.log("Raw Msg:", message); // Log to inspect message

    // Construct messages array
    messages = [systemPrompt, assistantPrompt, userPrompt];

    // Send POST request
    try {
        // Set OpenAI API parameters
        const requestData = {
            messages: messages,
            model: 'gpt-4-1106-preview',
            max_tokens: 200,
            temperature: 0.9
        };

        // Send the request
        const response = await axios.post('https://api.openai.com/v1/chat/completions', requestData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            }
        })

        // Parse the response
        const responseData = response.data;
        const responseString = responseData.choices[0].message.content;
        //console.log(responseString);

        // Format the response to include user's name
        const userName = message.from.first_name || message.from.username || 'User';
        const formattedResponse = `@${userName}, ${responseString}`;

        console.log("PROMPT:   " + message.text);
        console.log("RESPONSE: " + formattedResponse);

        // Send TEXT response back to the Telegram chat
        await bot.sendMessage(message.chat.id, formattedResponse);

    } catch (error) {
      // Determine error by OpenAI error code
      const errCode = error.response?.data?.error?.code || '';
      console.log(errCode);
      let errDesc;
      if (error.response?.data?.error?.code == 'insufficient_quota') {
          errDesc = "YOU ARE OUT OF MONEY !!!";
      } else if (error.response?.data?.error?.code != 'insufficient_quota') {
          errDesc = error.response?.data?.error?.message;
      } else {
          errDesc = "An Unknown Error Occurred!";
      }

      console.log(errDesc);

      // Server log detailed error info
      console.error(`\n` + `[ERROR]`);
      if (error?.response && error?.response?.data && error?.response?.data?.error) {
          console.error("Exact Error Details:" + "\n" + error.response.data.error.message);
      }

      // Return *just* the error message
      let errorMsg;
      if (error?.response?.data) {
          errorMsg = {error: `Sorry, I'm broken right now:\n  "${error.response.data.error.message}"` || JSON.stringify(error)
          };
      } else {
          errorMsg = {error: `Sorry, I'm broken right now... \nTry again later.`};
      }
      await bot.sendMessage(message.chat.id, "Tuna Error: " + errorMsg);
      ////res.status(500).send(errorMsg);
    }

}

module.exports = handleChat;
