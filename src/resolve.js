require("dotenv").config({});
const TelegramBot = require("node-telegram-bot-api");

// replace the value below with the Telegram token you receive from @BotFather
const token =
  process.env.TOKEN || "1293594781:AAE9aXyAp17R2tFzEBkolDBs6KVIb5Hd5JU";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/start [whatever]"
bot.onText(/\/start/, (msg) => {
  verification = false;
  bot.sendMessage(
    msg.chat.id,
    "Olá " +
      msg.chat.first_name +
      "! Seja bem vindo ao GREMS Suporte. 😃👋 \n \n Escolha uma opção no teclado abaixo. ⌨️ ⤵️",
    {
      reply_markup: {
        keyboard: [
          ["Website", "Localização", "Foto"],
          ["Contato", "Currículos"],
          ["Quem somos?"],
          ["Missão", "Visão", "Valores"],
          ["Suporte", "Tchau"],
        ],
      },
    }
  );
  console.log("message from telegram: " + msg.text);
});

bot.on("message", (msg) => {});
