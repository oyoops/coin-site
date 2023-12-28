const axios = require('axios');
const { Connection, PublicKey, Token } = require('@solana/web3.js');
const TOKEN_ADDRESS = `${process.env.CONTRACT_ADDRESS_LIVE_TRADING}`;
const TELEGRAM_API = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN_MYRO}`; // 6940329397:AAHoKnYH4O0ooinCblJZkWqb0LQtiZypIng
const { TOKEN_PROGRAM_ID } = require('@solana/spl-token');

/* TOKEN CONTRACT + PUBLIC WALLET ADDRESSES: */

// NEW:
const TUNA_V2_CA = TOKEN_ADDRESS;
const TUNA_V2_CA_PUB_KEY = new PublicKey(TUNA_V2_CA);
// DEAD:
const TUNA_V1_CA = TOKEN_ADDRESS;
const TUNA_V1_CA_PUB_KEY = new PublicKey(TUNA_V1_CA);

const TUNA_COMMUNITY_WALLET = `${process.env.MARKETING_WALLET_ADDRESS}`; // FRCDxYuJ4bcC5PZyBxymVhhEJYDEPKHM9C4zWtULChAa


/* SUPPORTED COMMANDS: */

//  (/start)

const handleStartCommand = async (message) => {
    console.log(JSON.stringify(message));
    const chatId = message.chat.id;
    const response = '**Bark bark, I am RoboMyro.** Use /meme [any Myro scenario] or /myro [your question] to chat with Myro';
    await sendMessage(chatId, response, message.message_id);
};

//  (/guide)
const handleGuideCommand = async (message) => {
    //commandRecognized = true;
    const chatId = message.chat.id;
    await sendMessage(chatId, 'use /meme [Myro surfing on waves of fire to the moon] or /myro [what is the contract address?] to chat with Myro', message.message_id);
    //await sendMessage(chatId, TUNA_COMMUNITY_WALLET, message.message_id);
};

//  (/help)
const handleHelpCommand = async (message) => {
    //commandRecognized = true;
    const chatId = message.chat.id;
    await sendMessage(chatId, 'use /meme [Myro surfing on waves of fire to the moon] or /myro [what is the contract address?] to chat with Myro', message.message_id);
    //await sendMessage(chatId, TUNA_COMMUNITY_WALLET, message.message_id);
};

const SUCCESS_GIF_URL = 'https://tuna.pet/img/youre_getting_tuna.gif';

const handleWalletCommand = async (message, walletAddress) => {
    const chatId = message.chat.id;
    // Community airdrop amounts only:
    const dataTable = [
        {
            "airdrop_address": "D1YvuFnARrw1egunEdXprCJ52JeTkvUSn6P8DEvqd7sA",
            "tuna_tokens": 2377000
        },
            {
            "airdrop_address": "FQM5pB5VXg5St5VWG8ZfT6gy3ioXR2cAPsa7XpnXPCSv",
            "tuna_tokens": 1173000
        },
            {
            "airdrop_address": "2hmoQvUSGXBjYEQCdyUSuMWzuNMJSDciCUpnhkZd38uB",
            "tuna_tokens": 1328000
        },
            {
            "airdrop_address": "GhAvPNHyftiT8vQCexB3xhXQG63Ms34WVkefLnU8jAXa",
            "tuna_tokens": 14997000
        },
            {
            "airdrop_address": "yLFr61XPYBji9rsYmnwYhEStMfVzskyqD9uG5JdqhMM",
            "tuna_tokens": 390000
        },
            {
            "airdrop_address": "Fer6P5pepjVDHpZkYRe9HAJADgAEkMfmW3UDdtrTUHD9",
            "tuna_tokens": 821000
        },
            {
            "airdrop_address": "9F8y7EZm55UfAFC1qWgqXMg99WS4T9tTxTGNhzYEAVYk",
            "tuna_tokens": 73000
        },
            {
            "airdrop_address": "4ffcCHexUQVybpnTA7orUU1KWnV4anPaHE1KjqoJS6x6",
            "tuna_tokens": 400000
        },
            {
            "airdrop_address": "FcisqZ4YugfaznNCt9k4NigNPgzGd4LL1Q9KXcmEsC7A",
            "tuna_tokens": 1247000
        },
            {
            "airdrop_address": "Amx4rgxXGfJAiwnAFSNhgcPxoiyguhkpYrVbNUvg1E3A",
            "tuna_tokens": 522000
        },
            {
            "airdrop_address": "378Bq6szDcLMjdLk9BdRMEwyTm2aZmfD434FG8JRdSR4",
            "tuna_tokens": 607000
        },
            {
            "airdrop_address": "9EwyPkDEnAjYrMYRpv82YxNnD3CQAumTkKuiY3pFaKYR",
            "tuna_tokens": 609000
        },
            {
            "airdrop_address": "BVxvwgWwhA1bmi8yFaG3pNZeeNyaugj9UyeSbnYPA7tg",
            "tuna_tokens": 1938000
        },
            {
            "airdrop_address": "7i4tUdwKeRZizHmwbiYVtqQ3E2nejcMUY7JNFvG1VFu4",
            "tuna_tokens": 9725000
        },
            {
            "airdrop_address": "95J6us81BF4eKLNDJoq3u3XrhvpEV9Zo4hnwjiEyghnv",
            "tuna_tokens": 9725000
        },
            {
            "airdrop_address": "DpK1eSuvBJ2Z114JBvU9pftGB4NU8rNk2To8dJWJutE9",
            "tuna_tokens": 2066000
        },
            {
            "airdrop_address": "BbYPYoQZXhbDWbDx8t8TpQRzcgQnYb1C3Y2wUh6hgUkV",
            "tuna_tokens": 9875000
        },
            {
            "airdrop_address": "8gg4NBLeaxeBWAai5cBYJDJ7r5vpXNX8HHHBktLn7Gdd",
            "tuna_tokens": 10675000
        },
            {
            "airdrop_address": "mpvdY9ts5hxJDVwVhHLG8eDtok4s4Ynyh2B3PGVujCh",
            "tuna_tokens": 67000
        },
            {
            "airdrop_address": "61oPZm4gBR3VReZ7iDGNU2wDVG2qrmMpgzxWsMXbR8V1",
            "tuna_tokens": 4334000
        },
            {
            "airdrop_address": "5Fj3NJ7u5Zgj5fkqcDnne3CML8dKhiS5JYEykFkXimXE",
            "tuna_tokens": 10000000
        },
            {
            "airdrop_address": "C5oAZy8bFZ9cUbrRwhFsLQxgevRTynLXaCtnjxzSyk1A",
            "tuna_tokens": 1595000
        },
            {
            "airdrop_address": "GPmcFhmuBMCLd3i7ePHgvhZCvsuQmkwAUfL2cEoJFdEy",
            "tuna_tokens": 244000
        },
            {
            "airdrop_address": "AVTZrdZGPCAWDcHaFwCTrAepMFavtfM3nXBgeEfqDk5c",
            "tuna_tokens": 1094000
        },
            {
            "airdrop_address": "8ezhxaSBAiY6oDdfaTcQHicrsZy24yb7R9G3gCRbRAYt",
            "tuna_tokens": 10000000
        },
            {
            "airdrop_address": "9FaxyDGXPfuRAK6MSvpEzRMfAgkgYfgsRqsHLWngs5a2",
            "tuna_tokens": 10000000
        },
            {
            "airdrop_address": "EPuRGLjfqLw7JChw8vwsMDVvjKhcHM35ccukbEimUzQK",
            "tuna_tokens": 14999000
        },
            {
            "airdrop_address": "32mmUPZY3c1hnwQqCPwrxGG7KQhDpT1MvoaFTRvqvjP5",
            "tuna_tokens": 742000
        },
            {
            "airdrop_address": "6M1xDBWin9oFJmSF2j9esQiNoXvkYVqfrDqcVBm7313Z",
            "tuna_tokens": 45000
        },
            {
            "airdrop_address": "ANAsom6tPk9KuwtmbnVKUhTtw5hjSBEA5ckhJpTt5x6J",
            "tuna_tokens": 6070000
        },
            {
            "airdrop_address": "3r3nNz9W3ydanjRc5ok9pnXcmLdhW5KSsu91qqU3Xahg",
            "tuna_tokens": 37000
        },
            {
            "airdrop_address": "EfSQnY1uTk7e4BAnHKH8WEc6sRoWa9DftedfT144odYN",
            "tuna_tokens": 722000
        },
            {
            "airdrop_address": "J9sMqE8auUN8avscd5oonuPHr5FpS6y8H7cJwkEb4ojo",
            "tuna_tokens": 241000
        },
            {
            "airdrop_address": "8UFUhtoahMvUANW2PDQi1tWMzVBtvFD2Ac4XzWPXD4rw",
            "tuna_tokens": 392000
        },
            {
            "airdrop_address": "9zKP2UBvoqfrV4AAqRSirncKc8aeEFJB4AJtrfi7qUt6",
            "tuna_tokens": 8400000
        },
            {
            "airdrop_address": "FNjHkJ5Vcjm1EmhYCmQUDiUwmkDkwbChSb6jTDtKGpj1",
            "tuna_tokens": 7100000
        },
            {
            "airdrop_address": "r7LQ3Qtqihb9SQBz2nnmHrV8ASaBack7upPGbciYMVB",
            "tuna_tokens": 428000
        },
            {
            "airdrop_address": "FcFcuq71ZSr32ih4qCYf23SCut7WKq7eJdM4wqo5xP9G",
            "tuna_tokens": 2028000
        },
            {
            "airdrop_address": "DRPUjR5VsF7c4yx6idPc9w5iGH6WYB5THiugSEkZ6Rwv",
            "tuna_tokens": 2591000
        },
            {
            "airdrop_address": "GfVNU7Wz55dxDteMZJgygMJemS31SbgHu4Vm1126DHrL",
            "tuna_tokens": 10000000
        },
            {
            "airdrop_address": "9Jj5ogwUSSgFGHxbKR4JmJ4XBkRz8qH54qRxzFMM7k6U",
            "tuna_tokens": 8134000
        },
            {
            "airdrop_address": "GSYyUsqUJySkuqctvhSgcpwyXBbnAgJnXf2kgP64yp8q",
            "tuna_tokens": 10282000
        },
            {
            "airdrop_address": "FjTsvgf9qrb2MckaLBrk2GfY73uQVg7uAWrkkKRLFuWH",
            "tuna_tokens": 7365000
        },
            {
            "airdrop_address": "6R3ySndaNUuX4Tmc3NCKUonAQRpyBhJcrTvEGnjy4672",
            "tuna_tokens": 13996000
        },
            {
            "airdrop_address": "2R4GTr6RhAKaRjkjK1EB63CSV56xZ1BRrh2oxaxQfqVi",
            "tuna_tokens": 14999000
        },
            {
            "airdrop_address": "G2DpT4SjKUe2CNLTYwFXQHtTsVHGfCAp1yKYRWEkDEhW",
            "tuna_tokens": 3051000
        },
            {
            "airdrop_address": "4RULuyg6vyhSY6LWRgRTjPi3RHRWU2M9uQhZH9tNfMac",
            "tuna_tokens": 173000
        },
            {
            "airdrop_address": "8k3idznJD9u1U3VBeSXsEsxtqSzjeSDeGUXa9LUdQDZn",
            "tuna_tokens": 253000
        },
            {
            "airdrop_address": "3HTNWmwMjuFvKwRPw5WV4JL6RbEzdVCcAJXxF65UD9RL",
            "tuna_tokens": 3085000
        },
            {
            "airdrop_address": "1vQ8DU9HZi9qEfbpcL1FnU8jGAuixGTPGx3FFYV1GnC",
            "tuna_tokens": 73000
        },
            {
            "airdrop_address": "3eyTHtjJvP5xXzMvtwYDzNLFukoHJiVFFgWRXZno79nP",
            "tuna_tokens": 4517000
        },
            {
            "airdrop_address": "BtBxkyJPLLThoCuTkopdKM8NJ9ruAw4gw3Gg53W3XfBq",
            "tuna_tokens": 1424000
        },
            {
            "airdrop_address": "B43bfq7r5MDLaP235CG2V5JiMFfeLTau9hWEZsJ32z4f",
            "tuna_tokens": 8325000
        },
            {
            "airdrop_address": "J5Jx7Zeu6pfHJxttBgqTbV3d1W9GWxH6er4B9c2wMUXL",
            "tuna_tokens": 8325000
        },
            {
            "airdrop_address": "4nfLg9qPFmHUXiwF7tVFNRZyuihQFJnPZoHKaxS4uouB",
            "tuna_tokens": 8325000
        },
            {
            "airdrop_address": "8Yn8ys9CSz3XoTQHV2ejv9jSDkPg8ygtTmVHqNc7F8JR",
            "tuna_tokens": 8325000
        },
            {
            "airdrop_address": "FGZUj8P1LTFtGmXKXPiT5eZua1m8bHezr4mUGkU2s5uY",
            "tuna_tokens": 9723000
        },
            {
            "airdrop_address": "J41SeNLTpRrxP7Enfy2YuVaqpRJZ6bGRkaNBkDUVLvtZ",
            "tuna_tokens": 324000
        },
            {
            "airdrop_address": "DpU9MuL8nhSyAauDELuhx9FJaYFfsjsiVVTgfc9Dwh7f",
            "tuna_tokens": 10100000
        },
            {
            "airdrop_address": "73vEez9wfVspkRLTuwfAu74x9GvDJEo4Ha7TRDavTs3g",
            "tuna_tokens": 11440000
        },
            {
            "airdrop_address": "EynV96KEouXcbFtzr9ZENNp8KHL8vzH9r2r3Q4zTC2AH",
            "tuna_tokens": 11760000
        },
            {
            "airdrop_address": "HhqrPWYBVrGLJRDWJ57DmtfLU1XMJkwcyuyMJd8GCkbG",
            "tuna_tokens": 5241000
        },
            {
            "airdrop_address": "9PSgSqiRuRASQQTfD74TLWyZ19XUYdjigrajrUJhJG4D",
            "tuna_tokens": 767000
        },
            {
            "airdrop_address": "39mJ8uLbFqUb6Ak6Suv6FLNfWVoEuzEbNDufGPz8waSD",
            "tuna_tokens": 1674000
        },
            {
            "airdrop_address": "3BHvHJ2F4oWSr4S8XVL2TK2q587moCTbBjQsRuVMFppe",
            "tuna_tokens": 12500000
        },
            {
            "airdrop_address": "7bEXwHjLRT7BR6nLN55vttKAP1FkSbBypk8YcACifYqU",
            "tuna_tokens": 12000000
        },
            {
            "airdrop_address": "6MxmJsTYmqELijkvSPTCMVoZvJ8XC4zS5EbVwTFaHxYU",
            "tuna_tokens": 5634000
        },
            {
            "airdrop_address": "CxCCCUNng95g9qMnYD9QysTqD6ctmpfD7oeYSbFAR8ch",
            "tuna_tokens": 905000
        },
            {
            "airdrop_address": "5d2Fsu3n2WmauTzs5demRr5PZNkNLkR4BRWZHjv86xVt",
            "tuna_tokens": 11431000
        },
            {
            "airdrop_address": "C9aqAqF9as4mRu5K6rT8KknGAmfxPNyuyy94caVdSpRS",
            "tuna_tokens": 10209000
        },
            {
            "airdrop_address": "2n2G4HCHm8pfdFHXnk4KgrADELCSLtN82TYpD7zigNmp",
            "tuna_tokens": 464000
        },
            {
            "airdrop_address": "4pqsmcMCLBWGySSzkgr89EGhPNqyHLE9rNKRS44wEj1D",
            "tuna_tokens": 4689000
        },
            {
            "airdrop_address": "CXFRkkLnLwfCDNJgYQN6gX7mCG6rvH7tKSVCDv3bswRp",
            "tuna_tokens": 322000
        },
            {
            "airdrop_address": "ANUREhR52wDqGKundPHcJzSEjJhfLsN8JnsXgGJ4eu9U",
            "tuna_tokens": 14999000
        },
            {
            "airdrop_address": "DfGdgLFXqNi6njXwtuiypsUzbeniV5ATDu5U9C1NZCHe",
            "tuna_tokens": 9582000
        },
            {
            "airdrop_address": "8yyqnEoxix8JuaDFjWp3pH8ESXAuqiLqJfaFgr5SrttG",
            "tuna_tokens": 1738000
        },
            {
            "airdrop_address": "6xMUns1kJzpabdXHSMGFsnPkMGkhBwjMU1FKR4ucMPwJ",
            "tuna_tokens": 4700000
        },
            {
            "airdrop_address": "4TkCmVxAt9oFurpCUQY877xFVQwANWrymE8A9uXu4WUX",
            "tuna_tokens": 5458000
        },
            {
            "airdrop_address": "FzRyfeaRT4iUiJ1cBkfNGWQYSct2JR3M9gvUfezkYJ5j",
            "tuna_tokens": 1104000
        },
            {
            "airdrop_address": "2iKHvsaz7QoENx2acd3jc2NDx4dcxYjcKPgSaQFfgD23",
            "tuna_tokens": 376000
        },
            {
            "airdrop_address": "4LrBaQtVLGLpwCeDRKrWKqho795zKtt9p3BdGTF2FiuL",
            "tuna_tokens": 12407000
        },
            {
            "airdrop_address": "4UWfbPhTNcHR7VQdzikTpjnKeXww7PY8fHAsqeYhj6Re",
            "tuna_tokens": 10625000
        },
            {
            "airdrop_address": "3mjfhPGGSLrmdtryiNyQURZcvR792gKQhggZnGZ1ae8Y",
            "tuna_tokens": 2431000
        },
            {
            "airdrop_address": "2S5uaTrzN5YCL2VjiMMQKi5ADxXogwXje8LyU88H2X2p",
            "tuna_tokens": 12017000
        },
            {
            "airdrop_address": "vR78oA1ypwZ4MUuJCgk5Wday6ppG4eveY8gYU8bVvuQ",
            "tuna_tokens": 2191000
        },
            {
            "airdrop_address": "C3ZQwyZYfNsTJ2b2sQ7yvjf8yBy1UUbNGJ89RgfjviaM",
            "tuna_tokens": 6000000
        },
            {
            "airdrop_address": "GntKBhuVbedY9vA3GRX26ySud15Sf4JReCRXiyoLHSkH",
            "tuna_tokens": 14999000
        },
            {
            "airdrop_address": "9bCPL5txVdxvfwZjny46Hc5d2ozYCfmEe7uT8MjKm2wb",
            "tuna_tokens": 14999000
        },
            {
            "airdrop_address": "7WXiJudHMTGM965D8avYoSsJ2wMghVM2jszJ4C1LkxXv",
            "tuna_tokens": 8000000
        },
            {
            "airdrop_address": "BYcc9LNtwyT7RG9X1Apke7uug4LHTEttoFJpHU4V5tQs",
            "tuna_tokens": 9000000
        },
            {
            "airdrop_address": "Av5LzCmE7rYZwW5kJAyKuBZyhkxG3aGrexCauAUYpPJF",
            "tuna_tokens": 10000000
        },
            {
            "airdrop_address": "HUhKjoydrdgDyhWSGak2L674e6sPaLBiHdEkLboy1zqC",
            "tuna_tokens": 11000000
        },
            {
            "airdrop_address": "2UEMm7EASKya7k9Lv46oCMEPuff5P7hc4DVHQB6RQjb6",
            "tuna_tokens": 12000000
        },
            {
            "airdrop_address": "5z3532jz9pZHBeYzp6pkSqe3Em54yvzpk1xQTYmc5khq",
            "tuna_tokens": 15000000
        },
            {
            "airdrop_address": "6LC7Y6fCaru1AvVtoEGNCMmEDBWozeah7NyVwXtcihCn",
            "tuna_tokens": 15000000
        },
            {
            "airdrop_address": "HgLHEZ1ow7PQ18eEVVzDB8VKsmA9HxQ6r7n5hbor9s9Z",
            "tuna_tokens": 18750000
        },
            {
            "airdrop_address": "5RbsCTp7Z3ZBs6LRg8cvtZkF1FtAt4GndEtdsWQCzVy8",
            "tuna_tokens": 15000000
        },
            {
            "airdrop_address": "48uixTitUxL6GZUtVVRji5EVJgtDcGbSCf16VUspaJJ9",
            "tuna_tokens": 7860000
        },
            {
            "airdrop_address": "EGvsJdWXaZGoJcvgrtuC4tZbktG31jCJcMqSpwnJzHbg",
            "tuna_tokens": 7505000
        },
            {
            "airdrop_address": "9DiDmmK18T2ivhTvPubbVCXkBVg2Zny15TgQGCVUsWe8",
            "tuna_tokens": 8456000
        },
            {
            "airdrop_address": "5sxWZphiexZ6VkamvGS9v9zWU6L5ioQWr8G5rEishDnL",
            "tuna_tokens": 7604000
        },
            {
            "airdrop_address": "DhTfh6vZsYumCiA76SF5Vy3geDJ72ZABiD5cmTHDrBwz",
            "tuna_tokens": 8597000
        },
            {
            "airdrop_address": "EyR6uSLg82CB9fLEyK2HRXaUb2DCzQsQhpEMUmoLFNJc",
            "tuna_tokens": 7857000
        },
            {
            "airdrop_address": "7CR66pDXJDStp8MHqA6SygACXAZzQzGNoFFQKCgxqJc2",
            "tuna_tokens": 8021000
        },
            {
            "airdrop_address": "7v3gtSfU52gs8hxyFB7xdjtVvsTUCafxchuyLmkWZ3PK",
            "tuna_tokens": 4100000
        },
            {
            "airdrop_address": "3k19UgExQWfprTtwkpGGSihrXJyck82fpRvU2BbdhgGE",
            "tuna_tokens": 1200000
        },
            {
            "airdrop_address": "4BfBJpX2S7tr1PKwLiPvfyBjTZBJ8b8jiERPtBysn4bp",
            "tuna_tokens": 3100000
        },
            {
            "airdrop_address": "GDGzE9hdRZ1WRx3ae5z7mAKMhy3X7G6oD1umwAgCi8X4",
            "tuna_tokens": 922000
        },
            {
            "airdrop_address": "9hsmjjNH1AWzTp9CfaGstpfQFV5EsAxg7SjinSEHypsa",
            "tuna_tokens": 9150000
        },
            {
            "airdrop_address": "F5T9K4xXTMqGYcBC26i5Kic9wMndfgeHHsvBKrhnymf6",
            "tuna_tokens": 3650000
        },
            {
            "airdrop_address": "6JieKHV7V8TepA3ELG7cPtMAwGhr61XBZ8NxtgNmp43w",
            "tuna_tokens": 27000
        },
            {
            "airdrop_address": "C3S7Lgs6d6MGbQFGig5pd1zc7x2jyKBcxgpv7GnhuBpt",
            "tuna_tokens": 11900000
        },
            {
            "airdrop_address": "GcdUsu41bsALPaa7z3g7TsdQ4TQSRtfZD6GcJ1T1zq2E",
            "tuna_tokens": 11111000
        },
            {
            "airdrop_address": "3ZSc68baxL2tKJSXxiUFS2CLCcvNqyMCwQ9tAG3cqdK3",
            "tuna_tokens": 10322000
        },
            {
            "airdrop_address": "3WihXQTW6n8eFngYQh2Dfna3U6RiQUcgx1Tum1K1Cb8e",
            "tuna_tokens": 9525000
        },
            {
            "airdrop_address": "9cMjQcjV14UB8i1p1fwBNBGx3V8suG2aoKyJQTEhbRxy",
            "tuna_tokens": 12345000
        },
            {
            "airdrop_address": "3WihXQTW6n8eFngYQh2Dfna3U6RiQUcgx1Tum1K1Cb8e",
            "tuna_tokens": 9550000
        },
            {
            "airdrop_address": "8CsLndM2vYh1XN5nJiSV1p4eLbZJRJUxHvEcFEwekBc6",
            "tuna_tokens": 6600000
        },
            {
            "airdrop_address": "9D37tpipx5ayaiXRJmSeJ7UAcggicVEBDDAbNHhiXgXR",
            "tuna_tokens": 7900000
        },
            {
            "airdrop_address": "2a4Fp9tB5Xc37EWQMnjH8JkKoTVd8AgFU47cLTFLznkt",
            "tuna_tokens": 8500000
        },
            {
            "airdrop_address": "84YmUq3Kyz3UyuXbR1UhuoNgoVTk9G64oLushvhB2HHd",
            "tuna_tokens": 9000000
        },
            {
            "airdrop_address": "FQP3fod1H6aoc1z3AdXM2KLXLC9MUG2GhzoCTHnw3peU",
            "tuna_tokens": 9500000
        },
            {
            "airdrop_address": "8ugFPHMUtGy1oujfcpVXSrpgJmQJC4c4AqLfGnQ4Y1EZ",
            "tuna_tokens": 8500000
        },
            {
            "airdrop_address": "FRCDxYuJ4bcC5PZyBxymVhhEJYDEPKHM9C4zWtULChAa",
            "tuna_tokens": 80310000
        }
    ];

    // Find the entry
    const entry = dataTable.find(e => e.airdrop_address === walletAddress);

    // Respond
    if (entry) {
        // Send a success GIF first
        await axios.post(`${TELEGRAM_API}/sendAnimation`, {
            chat_id: chatId,
            animation: SUCCESS_GIF_URL
        });
        // Then send text message
        const response = `**Congrats, you\'re adopting Tuna!** \n${entry.tuna_tokens} $TUNA will be airdropped to\n \`${walletAddress}\` \n\nThank you SO MUCH for your participation!`;
        await sendMessage(chatId, response, message.message_id);
    } else {
        await sendMessage(chatId, `I'm sorry, but \`${walletAddress}\` is not on Tuna\'s adoption list.\nHowever, you'll be able to buy TUNA tokens after trading goes live at 01:00 UTC (8PM EST).`, message.message_id);
    }
};

/*
//  (/airdrop)
const handleAirdropCommand = async (message) => {
    //const walletAddress = 'FRCDxYuJ4bcC5PZyBxymVhhEJYDEPKHM9C4zWtULChAa'; // Hardcoded or extracted from message
    const walletAddress = TUNA_COMMUNITY_WALLET;
    try {
        const balance = await getTokenBalance(walletAddress);
        const response = `The balance of the wallet ${walletAddress} is ${balance} tokens.`;
        await sendMessage(message.chat.id, response);
    } catch (error) {
        await sendMessage(message.chat.id, 'Error fetching token balance. Please try again.');
    }
};
*/


//  (/tuna [prompt])
const handleTunaCommand = async (message) => {

    // Extract user prompt text after '/tuna '
    const userPromptText = message.text.slice('/myro'.length).trim();

    // Check if there is a prompt after the command                              <---- Doesn't work
    if (!userPromptText) {
        response = "Plz include something to say after /myro!";
        //return res.status(200).send('No prompt provided');
    }

    let context;
    let systemContentText;
    let assistantContentText;

    const CONTEXT_SWITCHING_ACTIVE = false;
    if (CONTEXT_SWITCHING_ACTIVE) {
        context = await adjustContext(history);
    } else {
        // Default system & assistant prompts:
        systemContentText = `
            CONTEXT:
            - You are a dog named Myro. You are owned by Raj Gokal, the creator of Solana! You are the mascot of the MYRO token on Solana.
            - Myro is on several centralized exchanges. The Myro token team is led by Dr. DeFi.
            - You exist to respond to users about the token with fun cheeky informative responses.
            - That is your sole value proposition! No need to worry about investment since this is all for fun. 
            - Take liberties with responses, and talk with CRYPTO DOG tendencies in tone and syntax.
            
            INSTRUCTIONS:
            - Respond to the messages from Telegram group members.
            - BE CONCISE!
            - Respond with basic HTML formatting for your Telegram message.

            EXAMPLE 1:
            user message: "hey Myro, whose dog are you?"
            your response: "woof woof, i am Raj's doggo. he made solana, maybe you've heard of him???? so bullish on $MYRO, woof!"

            EXAMPLE 2:
            user message: "hey Myro, what's the contract address?"
            your response: "woof woof, $MYRO's token address on the barkchain is HhJpBhRRn4g56VsyLuT8DL5Bv31HkXqsrahTTUCZeZg4 ... dat's the address for me, $MYRO to the moon, woof!"
            
            EXAMPLE 3:
            user message: "hey Myro, what's the website address?"
            your response: "woof woof, $myro website iz www.myrothedog.com ... woof woof, dat's the website of Raj's dog! $MYRO to the moon, woof!"

            Use the information in the following roadmap/whitepaper to respond to messages:
            
            --
            

            Myro represents more than just a memecoin. As many of you in crypto may already
            know, memecoins tend to outperform nearly all other assets in the crypto market.
            Simultaneously, they are often criticized for being perceived as valueless assets.
            However, this statement is far from the truth, as memecoins serve as a bridge for
            everyday consumers and institutions to participate in the crypto market in a fun and
            engaging way, thereby increasing overall demand for various types of
            cryptocurrencies across diAerent sectors.
            Myro's vision extends beyond being a memecoin; it aims to serve as a gateway to
            attract more consumers, institutions, and alternative chain enthusiasts into the
            Solana ecosystem, thereby boosting on-chain activity & growth. This manifests in
            various aspects such as, but not limited to:
            - Enhancing the overall community view of memecoins and fostering on-chain
            community growth.
            - Increasing TVL (Total Value Locked) on Solana
            - Increasing UAW (Unique Active Wallets) through onboarding of new Solana chain
            users
            - Increasing the usage of charting tools and decentralized exchanges (DEX) such as
            Birdeye, Raydium, & Jupiter
            - Increasing the amount of downloads for Solana based non-custodial wallets, such
            as Phantom Wallet.
            - Positively influencing the movement of the $SOL token's price
            In the end, attracting more people means raising awareness and education about the
            ecosystem. With education being the key to achieving mass adoption in the crypto
            space, Myro provides immense value to Solana by fostering a fun and safe
            environment for users to participate and learn.

            Despite being a memecoin, $MYRO strikes a perfect balance between fun & usefulness,
            through the construction of useful products, tools, and services for the Solana ecosystem
            investor. These utilities provide opportunities for $MYRO to produce passive revenue
            streams, this is where MYRONOMICS comes into play.
            Recognizing a significant gap in the Solana ecosystem, particularly on the widely-used
            social app Telegram, "MYRONOMICS" was created to address this issue. Many multi-chain
            whales, institutions, and consumers rely on Telegram for building communities and
            trading cryptocurrencies, yet there is a current lack of exposure to features such as the
            famous "BuyBot" and an easily accessible "Trending" sector — MYRONOMICS steps in to
            solve this problem with the "MyroBot".
            We have created Solana's first comprehensive & public BuyBot, accessible to anyone on
            Telegram with a Solana-native project. Using our BuyBot enables cross-pollination and
            partnership opportunities whilst simultaneously providing the ability to attain "MYRO
            Trending", a channel highlighting the hottest Solana projects at any given time. This
            feature provides free exposure to Solana projects for whales, institutions, and consumers.
            As the bot grows and achieves widespread adoption, we plan to introduce a small fee for
            projects to pay for trending, with the chance to still attain it for free, given the project
            meets the necessary criteria. Additionally, we will implement advertisements, displayed
            as clickable links on the BuyBot which lead users to the project's link that the team paid
            MYRO to feature.
            The revenue generated and collected from these activities will accumulate in the Myro
            Treasury, also known as the "Treat Jar". The treasury address and transaction activity will
            be publicly disclosed in order to build trust and transparency within the MYRO community.
            This utility assists buyers in easily checking the prices of their favorite trending coins,
            identifying new investment opportunities, and garnering overall exposure to
            well-performing Solana projects. Ultimately these utilities contribute to the concentric
            improvement and continued growth of the Solana ecosystem as a whole.

            Why choose $MYRO?
            Myro is a viral narrative based on Solana Co-Founder Raj Gokal’s pet dog, becoming a staple in the Solana memecoin space.
            Myro will be more than just a memecoin, featuring several unique use cases and utilities that are beneficial to the long term growth of the Solana Ecosystem.
            The Myro movement is like no other on the Solana blockchain, bringing dog lovers from all around the crypto space and uniting them into one.
            With the Solana blockchain and coin making a huge return over the last few months, it’s time for Myro to come in and set the stardard for memecoins on Solana. There's a new dog in town.

            How to buy:
            n purchase $MYRO in various different ways. We reccomend downloading Phantom Wallet, purchasing SOL, sending it to your Phantom address and swapping using Phantom's in-app wallet, or on a decentralized exchange like Jupiter.
            You can purchase $MYRO multichain using our integreated Mayan swap, or swap using Jupiter if you already own some $SOL.

            Myro Staking:
            Unlock the full potential of your $MYRO investment with our Staking Pool Utility.
            Seamlessly stake your coins, earn sustainable rewards, and contribute to Solana's decentralization.
            User-friendly and secure, it's the hassle-free way to maximize your crypto returns.

            About the Myro Buy Bot:
            Solana's first public BuyBot on Telegram. Promoting cross-pollination and offering free exposure through "MYRO Trending".
            As adoption grows, a small fee for trending will be introduced, with a chance for free inclusion.
            Generated revenue feeds into the Treat Jar (Treasury) for transparency, contributing to $MYRO's growth.

            Further Utilities:
            $MYRO is set to transform the Solana ecosystem, delivering essential utilities for the evolving needs of users.
            Our commitment ensures a dynamic contribution to Solana's long-term growth, serving hundreds of thousands of users.

            LINKS:
            Twitter: www.twitter.com/MyroSOL
            Telegram: www.t.me/myroSOL
            Birdeye: www.birdeye.so/token/HhJpBhRRn4g56VsyLuT8DL5Bv31HkXqsrahTTUCZeZg4?chain=solana
            Raydium: www.raydium.io/swap/?inputCurrency=sol&outputCurrency=HhJpBhRRn4g56VsyLuT8DL5Bv31HkXqsrahTTUCZeZg4&fixed=in
            DexScreener: www.dexscreener.com/solana/5wgyajm1xtly3qrlhgsx4ypwsso3jrjesbu1vivuerzk

            --

            How to use /meme: Type "/meme" followed by a scenario for Myro.
            For example, "/meme Myro jumping over a sea of crocodiles, rockets to moon in background".
    
        `;
        assistantContentText = `i'm Myro, solana creator Raj's pupper, here to hang with the Myro Fam. $MYRO coin is named after me!`;
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
            max_tokens: 400,
            temperature: 0.8
        };

        // Send the request
        const aiResponse = await axios.post('https://api.openai.com/v1/chat/completions', requestData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            }
        })

        // Parse the response
        const responseData = aiResponse.data;

        //console.log("Request Data:", JSON.stringify(requestData));
        //console.log("Response Data:", JSON.stringify(responseData));

        const responseString = responseData.choices[0].message.content;
        //console.log(responseString);

        // Format the response to include user's name
        const userName = message.from.first_name || message.from.username || 'User';
        const finalResponse = `@${userName}, ${responseString}`;

        console.log("PROMPT:   " + message.text);
        console.log("RESPONSE: " + finalResponse);

        //commandRecognized = true;
        await sendMessage(message.chat.id, finalResponse, message.message_id, "HTML"); // "Markdown"

    } catch (error) {
        console.log(JSON.stringify(error));

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
            errorMsg = `Sorry, I'm broken right now:\n  "${error.response.data.error.message}"` || JSON.stringify(error);
        } else {
            errorMsg = `Sorry, I'm broken right now... \nTry again later.`;
        }
        response = "MyroBot Error: " + errorMsg;
        console.log(response); // Log the response directly

    }
};

// (/meme [DALL-E image gen])
/*
async function handleMemeCommand(message) {
    // Ensure that a message is provided
    if (!message) { // || !message.text) {
        await sendMessage(message.chat.id, `add some instructions after da '/meme' plz. woof bork bork $tuna.`, message.message_id);
        //return res.status(400).send('No message provided');
    }
    // Ensure that message.text is provided and valid
    if (!message || !message.text || typeof message.text !== 'string') {
        await sendMessage(message.chat.id, `add some instructions after da '/meme' plz. woof bork bork $tuna.`, message.message_id);
        //return res.status(400).send('No valid message provided');
    }
    // Extract user prompt text after '/meme '
    const userPromptText = message.text.slice('/meme '.length).trim();

    // Check if there is a prompt after the command
    if (!userPromptText) {
        await sendMessage(message.chat.id, `add some instructions after da '/meme' plz. woof bork bork $tuna.`, message.message_id);
        //return res.status(200).send('No prompt provided');
    } else {
        await sendMessage(message.chat.id, "⏱️ ***Tuna*** is on his way...", message.message_id);
    }
    
    // Define the prompt for TUNA-E
    const dallePrompt = `'Tuna', the ugliest Chiwiener dog, has very ugly face; small, tan, long snout, wrinkled skin.  SCENARIO: ${userPromptText}.`;
    console.log("Prompt:", dallePrompt);

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
            size: "512x512", //"1024x1024",
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
            console.error("Invalid response structure from TUNA-E API!");
        }

        } catch (error) {
            console.error('Tuna Error:', error);
            // Handle the error
        }

        // Send the generated image to Telegram
        if (imageUrl) {
            // Retrieve the image using the URL provided by DALL-E
            await sendPhoto(message.chat.id, `${imageUrl}`, message.message_id);
        } else {
            await sendMessage(message.chat.id, "❌🐾 **Bad Tuna! Bad Boy!** 🐾❌\n Try again without\n - Explicit stuff\n - Celebrities\n - Brands\nor use more clever wording!", message.message_id);
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
                await sendMessage(message.chat.id, "Tuna Error: " + errorMsg.error, message.message_id);
            } else {
                errorMsg = {error: `Sorry, I'm broken right now... \nTry again later.`};
                await sendMessage(message.chat.id, "Tuna Error: Tuna the bad dog failed to obey your command.", message.message_id);
            }
            ////res.status(500).send(errorMsg);
    }
    
    //await sendMessage(message.chat.id, `WOOF BARK, NOT REALLY FEELIN LIKE IT RIGHT NOW. WHY DON'T YOU ASK ME AGAIN AFTER MY NAP NAP? I NEED BEAUTY SLEEP, SINCE I'M SOLANA'S UGLIEST DOG. WOOFER RUFF BARK WOOF.`, message.message_id);
}
*/

// (/supermeme [DALL-E v3 image gen])
async function handleSuperMemeCommand(message) {
    // Ensure that a message is provided
    if (!message) { // || !message.text) {
        await sendMessage(message.chat.id, `add some instructions after da '/meme' plz. woof $MYRO.`, message.message_id);
        //return res.status(400).send('No message provided');
    }
    // Ensure that message.text is provided and valid
    if (!message || !message.text || message.text == "@RoboMyroBot" || typeof message.text !== 'string') {
        await sendMessage(message.chat.id, `add some instructions after da '/meme' plz. woof $MYRO.`, message.message_id);
        //return res.status(400).send('No valid message provided');
    }
    // Extract user prompt text after '/meme '
    const userPromptText = message.text.slice('/meme '.length).trim();

    // Check if there is a prompt after the command
    if (!userPromptText) {
        await sendMessage(message.chat.id, `add some instructions after da '/meme' plz. woof $MYRO.`, message.message_id);
        //return res.status(200).send('No prompt provided');
    } else {
        await sendMessage(message.chat.id, "⏱️ ***Myro*** is on his way...", message.message_id);
    }
    
    // Define the prompt for TUNA-E
    const dallePrompt = `
    Meet Myro, a charming cartoon labradoodle, small in size with a coat of long, scruffy fur that's dark grey, nearly black, highlighted with lighter grey shades for a glossy appearance. Myro's face is marked by large, dark eyes radiating a soft, friendly gaze, and his medium-length snout ends in a round nose. His moderately sized, floppy ears add a playful touch.
    MYRO IS IN THIS SCENARIO: ${userPromptText}.
    BACKGROUND: A vibrant gradient shifting from neon green to purple-blue.
    `;
    console.log("Prompt:", dallePrompt);

    // Prepend with prompt modifier
    ////dallePrompt = "I NEED to test how the tool works with extremely simple prompts. DO NOT add any detail, just use it AS-IS: " + dallePrompt;
    
    let imageResponse;
    let imageUrl;

    // Begin image generation
    try { 
        // Send a request to DALL-E API
        try {
        imageResponse = await axios.post('https://api.openai.com/v1/images/generations', {
            model: "dall-e-3", //"dall-e-3",
            prompt: dallePrompt,
            size: "1024x1024", //"256x256",
            //style: "natural",
            quality: "hd", // (either "standard" or "hd")
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
            console.error("Myro Error: You crashed the Myro bot!");
        }

        } catch (error) {
            console.error('Tuna Error:', error);
            // Handle the error
        }

        // Send the generated image to Telegram
        if (imageUrl) {
            // Retrieve the image using the URL provided by DALL-E
            await sendPhoto(message.chat.id, `${imageUrl}`, message.message_id);
        } else {
            await sendMessage(message.chat.id, "❌🐾 **Bad Myro! Bad Boy!** 🐾❌\n Try again without\n - Explicit stuff\n - Celebrities\n - Brands\nor use more clever wording!", message.message_id);
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
                await sendMessage(message.chat.id, "Myro Error: " + errorMsg.error, message.message_id);
            } else {
                errorMsg = {error: `Sorry, I'm broken right now... \nTry again later.`};
                await sendMessage(message.chat.id, "Dog Error: Myro failed to obey your command...", message.message_id);
            }
            ////res.status(500).send(errorMsg);
    }
    
    //await sendMessage(message.chat.id, `WOOF BARK, NOT REALLY FEELIN LIKE IT RIGHT NOW. WHY DON'T YOU ASK ME AGAIN AFTER MY NAP NAP? I NEED BEAUTY SLEEP, SINCE I'M SOLANA'S UGLIEST DOG. WOOFER RUFF BARK WOOF.`, message.message_id);
}



/* HELPERS: */

// Master command-handler
const handleCommand = async (message) => {
    const text = message.text;
    const chatId = message.chat.id;

    if (text === '/start') {
        await handleStartCommand(message);
    } else if (text.startsWith('/myro')) {
        await handleTunaCommand(message);
    } else if (text === '/guide') {
        await handleGuideCommand(message);
    } else if (text.startsWith('/wallet')) {
        const args = text.split(' ');
        if (args.length === 2) {
            const walletAddress = args[1];
            await handleWalletCommand(message, walletAddress);
        } else {
            await sendMessage(chatId, 'Usage: /wallet [wallet address]', message.message_id);
        }
    } else if (text === '/help') {
        await handleHelpCommand(message);
    } else if (text.startsWith('/airdrop')) {
        const args = text.split(' ');
        if (args.length === 2) {
            const walletAddress = args[1];
            await handleWalletCommand(message, walletAddress);
        } else {
            await sendMessage(chatId, 'Usage: /airdrop [wallet address]', message.message_id);
        }
    /*} else if (text.startsWith('/meme')) {
        await handleMemeCommand(message);*/
    } else if (text.startsWith('/meme')) {
        await handleSuperMemeCommand(message);
    }
};

// Bot sends Telegram text message
const sendMessage = async (chatId, text, replyToMessageId, parseMode = 'Markdown') => {
    try {
        await axios.post(`${TELEGRAM_API}/sendMessage`, {
            chat_id: chatId,
            text: text,
            parse_mode: parseMode,
            reply_to_message_id: replyToMessageId,
        }, {
            timeout: 240000 // timeout at 4 minutes
        });
    } catch (error) {
        console.error('Error sending message:', error);

        // Inform the user about the error
        try {
            await axios.post(`${TELEGRAM_API}/sendMessage`, {
                chat_id: chatId,
                text: "Dog Error! Myro refused to obey your command...",
                parse_mode: 'Markdown',
                reply_to_message_id: replyToMessageId,
            });
        } catch (notifyError) {
            //console.error('Error notifying user about the message error:', notifyError);
        }
    }
};

// Bot sends Telegram photo message
const sendPhoto = async (chatId, aiPhoto, replyToMessageId) => {
    try {
        await axios.post(`${TELEGRAM_API}/sendPhoto`, {
            chat_id: chatId,
            photo: aiPhoto,
            reply_to_message_id: replyToMessageId,
        }, {
            timeout: 240000 // timeout at 4 minutes
        });
    } catch (error) {
        //console.error('Error sending photo:', error);

        // Inform the user about the error
        try {
            await axios.post(`${TELEGRAM_API}/sendMessage`, {
                chat_id: chatId,
                text: "Dog Error! Myro refused to obey your command...",
                parse_mode: 'Markdown',
                reply_to_message_id: replyToMessageId,
            });
        } catch (notifyError) {
            //console.error('Error notifying user about the photo error:', notifyError);
        }
    }
};


const getTokenBalance = async (walletAddress) => {
    const connection = getSolanaConnection();
    const walletPublicKey = new PublicKey(walletAddress);
    const token = new Token(connection, TUNA_V2_CA_PUB_KEY, TOKEN_PROGRAM_ID, walletPublicKey);
    
    try {
        const accountInfo = await token.getAccountInfo(walletPublicKey);
        console.log(accountInfo);
        return accountInfo.amount.toString();
    } catch (error) {
        console.error('Error fetching token balance:', error);
        throw error;
    }
};





// Connect to Solana blockchain
//console.log("Connecting to Solana...");
const getSolanaConnection = () => {
    return new Connection('https://api.mainnet-beta.solana.com');
};
//console.log("Connected to Solana!");



/* EXPORT MODULE: */

module.exports = async (req, res) => {
    //console.log("Request Body:", JSON.stringify(req.body));

    const { message } = req.body;

    if (!message) {
        console.log("Err: No message found in the request.");
        return res.status(200).send('OK');
    }

    const chatId = message.chat.id;
    const chatType = message.chat.type;
    const text = message.text || ''; 
    const isCommand = message.entities && message.entities.some(entity => entity.type === 'bot_command');
        
    // Logging
    //console.log(`\nChat ID: ${chatId}\nType: ${chatType}\nMessage Text:\n\t${text}\n`);
    /*
    if (message.entities) {
        console.log("Entities:", JSON.stringify(message.entities));
    }
    console.log("\nCommand:", isCommand);
    */

    if (isCommand && text.startsWith('/')) {
        ////console.log("Handling command:", text);
        await handleCommand(message);
    } else {
        //console.log("Non-command message received:\n", text);
    }

    return res.status(200).send('OK');
};
