const tesseract = require("node-tesseract-ocr");
const fs = require("node:fs");
require("dotenv").config()

const config = {
    lang: "eng",
    oem: 1,
    psm: 3
}
// const img = fs.readFileSync("./img/receipt.jpeg");
module.exports = ocr = tesseract.recognize('https://api.telegram.org/file/bot6002722140:AAEjty3LGIXSa4sjzaaPSUVZT84w37EvRdk/photos/file_0.jpg', config).then((text) => {
    console.log("Result:", text)
  })
  .catch((error) => {
    console.log(error.message)
  });