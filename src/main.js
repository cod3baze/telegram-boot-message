require("dotenv").config({});
const TelegramBot = require("node-telegram-bot-api");

// replace the value below with the Telegram token you receive from @BotFather
const token =
  process.env.TOKEN || "1293594781:AAE9aXyAp17R2tFzEBkolDBs6KVIb5Hd5JU";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/start [whatever]"
bot.onText(/\/start/i, (msg) => {
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

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {
  //console.log("message from telegram: " + msg.text);
  var textTelegram = msg.text.toString().toLowerCase();
  var err = true;

  const comprovate = textTelegram.split(" ");
  comprovate.map((text) => {
    //entrada de website
    if (text.toLowerCase().trim().includes("website")) {
      bot.sendMessage(msg.chat.id, "Acesso o nosso site. 🖥💻📲");
      err = false;
      return bot.sendMessage(msg.chat.id, "https://grems.azurewebsites.net/");
    }

    //entrada de curriculos
    if (text.toLowerCase().trim().includes("currículos")) {
      err = false;
      return bot.sendMessage(
        msg.chat.id,
        "Ryan Nicolau Lopes: https://grems.azurewebsites.net/ \n \n Guilherme Paulino Gigov: https://grems.azurewebsites.net/"
      );
    }

    //entrada de foto
    if (text.toLowerCase().trim().includes("foto")) {
      err = false;
      bot.sendMessage(msg.chat.id, "Logo GREMS. 📷");
      return bot.sendPhoto(
        msg.chat.id,
        "https://grems.azurewebsites.net/images/logo2.png"
      );
    }

    //entrada de Localização
    if (text.toLowerCase().trim().includes("localização")) {
      err = false;
      bot.sendMessage(msg.chat.id, "Localização GREMS 📍");
      return bot.sendLocation(msg.chat.id, -22.876802, -47.226698);
    }

    //entrada de tchau
    if (text.toLowerCase().trim().includes("tchau")) {
      err = false;
      return bot.sendMessage(
        msg.chat.id,
        "Finalizamos por aqui. \n Até breve. 🤝👍"
      );
    }

    //entrada de contato
    if (text.toLowerCase().trim().includes("contato")) {
      err = false;
      return bot.sendMessage(
        msg.chat.id,
        "Mande um e-mail para: grems_adm@outlook.com . 📞💻"
      );
    }

    //entrada de quem somos
    if (text.toLowerCase().trim().includes("quem")) {
      err = false;
      return bot.sendMessage(
        msg.chat.id,
        "Somos uma empresa fundada no ano de 2020, mas desde 2018 esteve sob projeto. \n Pensamos em uma empresa que poça alcançar todas as áreas profissionais, ajudando empresas \n tanto de pequeno porte quanto de grande porte. \n Criamos softwares para todos os tipos de áreas."
      );
    }

    //entrada de missao
    if (text.toLowerCase().trim().includes("missão")) {
      err = false;
      return bot.sendMessage(
        msg.chat.id,
        "Temos a missão de levar a tecnologia a todos, para que possam ter um sistema próprio."
      );
    }

    //entrada de visao
    if (text.toLowerCase().trim().includes("visão")) {
      err = false;
      return bot.sendMessage(
        msg.chat.id,
        "Queremos alcançar todo o canto do mundo e sermos reconhecidos como umas das melhores empresas de softwares."
      );
    }

    //entrada de valores
    if (text.toLowerCase().trim().includes("valores")) {
      err = false;
      return bot.sendMessage(
        msg.chat.id,
        "Somos uma empresa comprometida com a ética e a moralidade, respeitando a sociedade e o meio ambiente."
      );
    }

    //entrada de suporte
    if (text.toLowerCase().trim().includes("suporte")) {
      err = false;
      return bot.sendMessage(
        msg.chat.id,
        "• 🖥 WEB DEVELOPMENT: A Grems com o uso estratégico de seus recursos, disponibiliza seus profissionais, tecnologias e sua expertise em desenvolvimento de soluções em software. \n \n • 👨‍💻 RESPONSIVE DESIGN: Criamos diversos sistemas para empresas parceiras. \n \n • 🎨 CREATE DESIGN: Nossos design muitos atrativos e intuitivo. \n \n • ⚙️ SUPPORT: Temos suporte 24hrs, se eles remoto e presencial. \n \n • 💡 WEB IDEA: Sempre estamos atualizando nosso sistema, assim nunca terá com sistemas ultrapassados. \n \n • 📱💻 GRAPHIC DESIGN: Oferecemos os melhores programas para a gestão do seu negócio."
      );
    }

    //entrada qualquer
    if (comprovate.length === 0) {
      return bot.sendMessage(
        msg.chat.id,
        "• 🖥 WEB DEVELOPMENT: A Grems com o uso estratégico de seus recursos, disponibiliza seus profissionais, tecnologias e sua expertise em desenvolvimento de soluções em software. \n \n • 👨‍💻 RESPONSIVE DESIGN: Criamos diversos sistemas para empresas parceiras. \n \n • 🎨 CREATE DESIGN: Nossos design muitos atrativos e intuitivo. \n \n • ⚙️ SUPPORT: Temos suporte 24hrs, se eles remoto e presencial. \n \n • 💡 WEB IDEA: Sempre estamos atualizando nosso sistema, assim nunca terá com sistemas ultrapassados. \n \n • 📱💻 GRAPHIC DESIGN: Oferecemos os melhores programas para a gestão do seu negócio."
      );
    }

    if (text.toLowerCase().trim().includes("valores")) {
      err = false;
      return bot.sendMessage(
        msg.chat.id,
        "Somos uma empresa comprometida com a ética e a moralidade, respeitando a sociedade e o meio ambiente."
      );
    }
  });

  if (err && !textTelegram.includes("/start")) {
    return bot.sendMessage(
      msg.chat.id,
      "Não entendi. \n Escolha uma das opções no teclado abaixo. \n\n Ou digite <strong>/start</strong> 👇",
      { parse_mode: "HTML" }
    );
  }
});
