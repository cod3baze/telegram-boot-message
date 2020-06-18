require("dotenv").config({});

const TelegramBot = require("node-telegram-bot-api");
const path = require("path");
const api = require("./services/api");
const token = process.env.TOKEN || "ERROR_NO_TOKEN_PROVIDED";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

const getInfoCEP = async (cep) => {
  console.log("..RUNNING API..");
  const response = await api.get(`/${cep}/json/`).catch((err) => {
    return console.log(err.message);
  });

  return ({ localidade, logradouro, bairro, uf } = response.data);
};

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  bot.sendMessage(chatId, resp);
});

bot.on("message", (msg) => {
  if (msg.text.toString().toLowerCase().includes("cep")) {
    const digits = msg.text
      .toString()
      .split(":")
      .map((str) => str.trim());

    if (digits.length === 2) {
      bot.sendMessage(msg.chat.id, "Loading User info..");

      const cep = digits[1];
      getInfoCEP(String(cep))
        .then((res) => {
          if (!res) {
            return bot.sendMessage(msg.chat.id, "CEP: iválido:");
          }

          bot.sendMessage(msg.chat.id, "INFORMAÇÕES:");
          bot.sendMessage(msg.chat.id, `--> ${res.logradouro}`);
          bot.sendMessage(msg.chat.id, `--> ${res.localidade}`);
          bot.sendMessage(msg.chat.id, `--> ${res.uf}`);
          bot.sendMessage(msg.chat.id, `--> ${res.bairro}`);
        })
        .catch((err) => {
          console.log(err.message);
          return bot.sendMessage(msg.chat.id, "CEP: inválido");
        });
    } else {
      bot.sendMessage(
        msg.chat.id,
        "Para pegar as informações de um cep digite:"
      );
      bot.sendMessage(msg.chat.id, "CEP: xxxxxxxx");
    }
  }

  if (msg.text.toString().toLowerCase().includes("bye")) {
    bot.sendMessage(msg.chat.id, "obg pela prefêrencia!");
  }

  const photo = path.resolve(__dirname, "..", "assets", "img.png");
  if (msg.text.toString().toLowerCase().includes("photo")) {
    bot.sendPhoto(msg.chat.id, photo);
  }
});
