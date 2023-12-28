// api/dalle.js
export const config = {
    //runtime: 'nodejs18.x', // Specify your Node.js runtime
    maxDuration: 59
};

//const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
//const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
const openaiApiKey = process.env.OPENAI_API_KEY;

//const bot = new TelegramBot(telegramToken);

async function handleDalle(bot, message) {
    // Ensure that message is provided
    if (!message) { // || !message.text) {
        await bot.sendMessage(message.chat.id, `WOOF BARK, ADD SOME INSTRUCTIONS AFTER '/meme' FOR ME. WOOF BARK WOOF.`);
        //return res.status(400).send('No message provided');
    }
    // Ensure that message.text is provided and valid
    if (!message || !message.text || typeof message.text !== 'string') {
        await bot.sendMessage(message.chat.id, `WOOF BARK, ADD SOME INSTRUCTIONS AFTER '/meme' FOR ME. WOOF BARK WOOF.`);
        //return res.status(400).send('No valid message provided');
    }
    // Extract user prompt text after '/meme '
    const userPromptText = message.text.slice('/meme '.length).trim();

    // Check if there is a prompt after the command
    if (!userPromptText) {
        await bot.sendMessage(message.chat.id, `WOOF BARK, ADD SOME INSTRUCTIONS AFTER '/meme' FOR ME. WOOF BARK WOOF.`);
        //return res.status(200).send('No prompt provided');
    }
    
    // Define the prompt for TUNA-E
    const dallePrompt = `${userPromptText}. Subject: The world's ugliest chihuahua dog (small, tan, wrinkly) with an incredibly ugly face.`;
    console.log(dallePrompt);

    // Prepend with prompt modifier
    ////dallePrompt = "I NEED to test how the tool works with extremely simple prompts. DO NOT add any detail, just use it AS-IS: " + dallePrompt;
    
    let imageResponse;
    let imageUrl;

    // Begin image generation
    try { 
        // Send a request to DALL-E API
        try {
        imageResponse = await axios.post('https://api.openai.com/v1/images/generations', {
            model: "dall-e-2", //"dall-e-3",
            prompt: dallePrompt,
            size: "256x256", //"1024x1024",
            //style: "natural",
            //quality: "standard", // (either "standard" or "hd")
            n: 1 // (number of images to generate; DALLE-3 model limit = 1)
            // (other parameters as needed)
        }, {
            headers: {
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            }
        });

        // Check the response and get the image URL or ID
        ////console.log("Status Code:", imageResponse.status);
        ////console.log("Headers:", imageResponse.headers);
        ////console.log("Response Body (partial):", JSON.stringify(imageResponse.data).substring(0, 500)); // Adjust the substring length as needed
        ////console.log("DALL-E API Response:", imageResponse);
        ////console.log(JSON.stringify(imageResponse.data.data.revised_prompt).substring(0, 500));
        ////console.log(imageResponse.data.data.revised_prompt)

        if (imageResponse && imageResponse?.data) {
            imageUrl = imageResponse.data.data[0].url;
        } else {
            console.error("Invalid response structure from TUNA-E API");
        }

        } catch (error) {
            console.error('Error with TUNA-E API:', error);
            // Handle the error
        }

        // Send the generated image to Telegram
        if (imageUrl) {
            // Retrieve the image using the URL provided by DALL-E
            await bot.sendPhoto(message.chat.id, `${imageUrl}`);
        } else {
            //await bot.sendMessage(message.chat.id, "Sorry, I failed to generate your Tuna meme... But Long live $TUNA!.");
        }
        
        // Send response to client
        //res.status(200).json(imageUrl);

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
                await bot.sendMessage(message.chat.id, "TUNA-E Error: " + errorMsg.error);
            } else {
                errorMsg = {error: `Sorry, I'm broken right now... \nTry again later.`};
                await bot.sendMessage(message.chat.id, "TUNA-E ERROR: Tuna is an ugly bad dog who failed to obey your command.");
            }
            ////res.status(500).send(errorMsg);
    }
    
    await bot.sendMessage(message.chat.id, `WOOF BARK, NOT REALLY FEELIN LIKE IT RIGHT NOW. WHY DON'T YOU ASK ME AGAIN AFTER MY NAP NAP? I NEED BEAUTY SLEEP, SINCE I'M SOLANA'S UGLIEST DOG. WOOFER RUFF BARK WOOF.`);
}

module.exports = handleDalle;
