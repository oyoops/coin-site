// api/openai.js

const TelegramBot = require('node-telegram-bot-api');
const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(telegramToken);

const handleChat = require('./chat');
const handleDalle = require('./dalle');

module.exports = async (req, res) => {
    const { message } = req.body;

    // Check the message and route accordingly
    if (message && message.text) {
        if (message.text.startsWith('/tunabot')) {
            // Handle text generation command
            console.log("Chatting with Tuna AI...");
            await handleChat(bot, message);
        } else if (message.text.startsWith('/meme')) {
            // Handle image generation command
            console.log("Generating a Tuna meme...");
            //await bot.sendMessage(message.chat.id, "WOOF WOOF, PLZ WAIT, IM MEMEING...");
            await handleDalle(bot, message);
        }
    }

    // Send a response to acknowledge the webhook
    res.status(200).send('Received');
};
