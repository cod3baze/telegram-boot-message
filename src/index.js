require("dotenv").config({});

const TelegramBot = require("node-telegram-bot-api");

const token = process.env.TOKEN || "ERROR_NO_TOKEN_PROVIDED";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  bot.sendMessage(chatId, resp);
});

bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "Mensagem recebida com sucesso!");
});
