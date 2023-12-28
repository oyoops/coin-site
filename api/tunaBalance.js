const axios = require('axios');

// Use environment variable for the bot token
const TELEGRAM_API = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}`;

const handleCommand = async (text, chatId) => {
    let response = 'Command not recognized. Try /start or /help.';

    if (text === '/start') {
        response = 'Welcome to the Tuna Bot! I can echo your messages.';
    } else if (text === '/help') {
        response = 'Send me any message, and I\'ll echo it back!';
    }

    await sendMessage(chatId, response);
};

const sendMessage = async (chatId, text) => {
    await axios.post(`${TELEGRAM_API}/sendMessage`, {
        chat_id: chatId,
        text: text,
    });
};


module.exports = async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(200).send('OK');
    }

    const chatId = message.chat.id;
    const text = message.text;

    if (text.startsWith('/')) {
        await handleCommand(text, chatId);
    } else {
        await sendMessage(chatId, `You said: ${text}`);
    }

    return res.status(200).send('OK');
};