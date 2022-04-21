const Telegraf = require("telegraf");
const bot = new Telegraf(`5361540061:AAHEUsgMZv9o-tOqadmK4_VeJRgzH0HEGF4`);

const helpMessage = `
  Salom sizga qanday yordam kerak?
  /start - botni ishga tushirish,
  /help - yordam bering,
`;

bot.use((msg, next) => {
  let chatId = msg.message.chat.id;

  if (msg.updateSubTypes[0] == "text") {
    let textMessage = msg.from.username + " Sizga aksado: " + msg.message.text;

    bot.telegram.sendMessage(chatId, textMessage);
  } else {
    let textMessage2 = msg.from.username + " Sado: " + msg.updateSubTypes[0];
    bot.telegram.sendMessage(chatId, textMessage2);
  }
  next();
});

bot.start((msg) => {
  msg.reply(helpMessage);
});

bot.help((msg) => {
  msg.reply(helpMessage);
});

bot.command("echo", (msg) => {
  let input = msg.message.text;
  let inputArray = input.split(" ");
  let message = "";

  if (inputArray.length == 1) {
    message = "Sizga qaytarish uchunnso'z yetarli emas";
  } else {
    inputArray.shift();
    message = inputArray.join(" ");
  }

  msg.reply(message);
});

bot.launch();
