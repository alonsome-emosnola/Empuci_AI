const TelegramBot = require("node-telegram-bot-api");
const { testAssistant } = require("../Google_Bard/bard.js");
const tesseract = require("node-tesseract-ocr");
require("dotenv").config();

// console.log(ocr.then(text => {
//     console.log(text);
// })
// .catch(err => {
//     console.log(err.message)
// }));

let token = process.env.TELEGRAM_TOKEN;

const bot = new TelegramBot(token, {polling: true});

const config = {
    lang: "eng",
    oem: 1,
    psm: 3
}

const detect = bot.onText(/\/chat (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1];

    return bot.sendMessage(chatId, resp);
})

bot.on('photo', (msg) => {
    if ('photo' in msg){
        const chatId = msg.chat.id;
        const img_id = msg.photo.at(-1).file_id;
        bot.getFileLink(img_id).then(res => {
            tesseract.recognize(res, config).then((text) => {
                return bot.sendMessage(chatId, `[EXTRACTED TEXT]: \n\n${text}`)
              })
              .catch((error) => {
                console.log(error.message)
              });
        }).catch(err => console.log(err.message));
    }
})

const send = bot.on('message', (msg) => {
    if ('text' in msg){
        const chatId = msg.chat.id;
        const username = msg.from.username;
        const text = msg.text;
        testAssistant(text).then( (res)=> { 
            if (res.content.includes("Bard")){
                const newText = res.content.replace("Bard", "Empuci");
                return bot.sendMessage(chatId, `[EMPUCI]: \n\n${newText}`);
            } else{
                return bot.sendMessage(chatId, `[EMPUCI]: \n\n${res.content}`);
            }
        }).catch(err => { 
            console.log(err) 
        });
    }
});