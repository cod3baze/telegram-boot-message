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
  var hi = "hi";
  if (msg.text.toString().toLowerCase().indexOf(hi) === 0) {
    bot.sendMessage(msg.chat.id, "Hello ,friend!");
  }

  if (msg.text.toString().toLowerCase().includes("bye")) {
    bot.sendMessage(msg.chat.id, "obg pela prefêrencia!");
  }
});
