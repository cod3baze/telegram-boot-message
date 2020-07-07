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

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {
  //console.log("message from telegram: " + msg.text);
  var textTelegram = msg.text.toString().toLowerCase();
  var verification;

  //entrada de website
  var link = "website";
  verification = false;
  if (textTelegram.includes(link)) {
    bot.sendMessage(msg.chat.id, "Acesso o nosso site. 🖥💻📲");
    bot.sendMessage(msg.chat.id, "https://grems.azurewebsites.net/");
  }

  //entrada de curriculos
  var curriculo = "currículos";
  verification = false;
  if (textTelegram.includes(curriculo)) {
    bot.sendMessage(
      msg.chat.id,
      "Ryan Nicolau Lopes: https://grems.azurewebsites.net/ \n \n Guilherme Paulino Gigov: https://grems.azurewebsites.net/"
    );
  }

  //entrada de foto
  var image = "foto";
  verification = false;
  if (textTelegram.includes(image)) {
    bot.sendMessage(msg.chat.id, "Logo GREMS. 📷");
    bot.sendPhoto(
      msg.chat.id,
      "https://grems.azurewebsites.net/images/logo2.png"
    );
  }

  //entrada de localizacao
  var location = "localização";
  verification = false;
  if (textTelegram.includes(location)) {
    bot.sendMessage(msg.chat.id, "Localização GREMS 📍");
    bot.sendLocation(msg.chat.id, -22.876802, -47.226698);
  }

  //entrada de tchau
  var tchau = "tchau";
  verification = false;
  if (textTelegram.includes(tchau)) {
    bot.sendMessage(msg.chat.id, "Finalizamos por aqui. \n Até breve. 🤝👍");
  }

  //entrada de contato
  var contato = "contato";
  verification = false;
  if (textTelegram.includes(contato)) {
    bot.sendMessage(
      msg.chat.id,
      "Mande um e-mail para: grems_adm@outlook.com . 📞💻"
    );
  }

  //entrada de quem somos
  var somos = "quem somos";
  verification = false;
  if (textTelegram.includes(somos)) {
    bot.sendMessage(
      msg.chat.id,
      "Somos uma empresa fundada no ano de 2020, mas desde 2018 esteve sob projeto. \n Pensamos em uma empresa que poça alcançar todas as áreas profissionais, ajudando empresas \n tanto de pequeno porte quanto de grande porte. \n Criamos softwares para todos os tipos de áreas."
    );
  }

  //entrada de missao
  var missao = "missão";
  verification = false;
  if (textTelegram.includes(missao)) {
    bot.sendMessage(
      msg.chat.id,
      "Temos a missão de levar a tecnologia a todos, para que possam ter um sistema próprio."
    );
  }

  //entrada de visao
  var visao = "visão";
  verification = false;
  if (textTelegram.includes(visao)) {
    bot.sendMessage(
      msg.chat.id,
      "Queremos alcançar todo o canto do mundo e sermos reconhecidos como umas das melhores empresas de softwares."
    );
  }

  //entrada de valores
  var valores = "valores";
  verification = false;
  if (textTelegram.includes(valores)) {
    bot.sendMessage(
      msg.chat.id,
      "Somos uma empresa comprometida com a ética e a moralidade, respeitando a sociedade e o meio ambiente."
    );
  }

  //entrada de suporte
  var suporte = "suporte";
  verification = false;
  if (textTelegram.includes(suporte)) {
    bot.sendMessage(
      msg.chat.id,
      "• 🖥 WEB DEVELOPMENT: A Grems com o uso estratégico de seus recursos, disponibiliza seus profissionais, tecnologias e sua expertise em desenvolvimento de soluções em software. \n \n • 👨‍💻 RESPONSIVE DESIGN: Criamos diversos sistemas para empresas parceiras. \n \n • 🎨 CREATE DESIGN: Nossos design muitos atrativos e intuitivo. \n \n • ⚙️ SUPPORT: Temos suporte 24hrs, se eles remoto e presencial. \n \n • 💡 WEB IDEA: Sempre estamos atualizando nosso sistema, assim nunca terá com sistemas ultrapassados. \n \n • 📱💻 GRAPHIC DESIGN: Oferecemos os melhores programas para a gestão do seu negócio."
    );
  }

  //entrada qualquer
  var erro = "";
  verification = true;
  if (textTelegram.includes(erro)) {
    bot.sendMessage(
      msg.chat.id,
      "• 🖥 WEB DEVELOPMENT: A Grems com o uso estratégico de seus recursos, disponibiliza seus profissionais, tecnologias e sua expertise em desenvolvimento de soluções em software. \n \n • 👨‍💻 RESPONSIVE DESIGN: Criamos diversos sistemas para empresas parceiras. \n \n • 🎨 CREATE DESIGN: Nossos design muitos atrativos e intuitivo. \n \n • ⚙️ SUPPORT: Temos suporte 24hrs, se eles remoto e presencial. \n \n • 💡 WEB IDEA: Sempre estamos atualizando nosso sistema, assim nunca terá com sistemas ultrapassados. \n \n • 📱💻 GRAPHIC DESIGN: Oferecemos os melhores programas para a gestão do seu negócio."
    );
  }

  if (verification == true) {
    bot.sendMessage(
      msg.chat.id,
      "Não entendi. \n Escolha uma das opções no teclado abaixo. 👇"
    );
  }
});
