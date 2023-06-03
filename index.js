// const express = require("express");
// const mongoose = require("mongoose");
const tele = require("./Telegram/telegram_model");
// require("dotenv").config();

// console.log(detect);
// console.log(send);


// const app = express();


// const mongo = mongoose.connect(process.env.MONGO_URL).then((result) => {
//     console.log("Mongodb connected"+ result)
// });

// const scheme = mongoose.Schema({
//     name: {type: String},
//     age: {type: Number},
//     dept: {type: String},
//     reg_no: {type: Number}
// })

// const schemeModel = mongoose.model('users', scheme);
// // const insert = schemeModel.insertMany({name: "Emmanuel Elusie", age: 22, dept: "CSC", reg_no: 20181127005});
// // insert.then((res) => {
// //     console.log(res)
// // });
// // const finder = schemeModel.findOne({name: "Emmanuel Elusie"}).then(res => console.log(res))
// // const updater = schemeModel.updateOne({name: "Emmanuel Elusie"}, {$set: {name: "Alonsome Emosnola"}}).then(res => console.log(res))
// // const del = schemeModel.deleteOne({_id: "6472176438eacfba9b2d6c1e"}).then(res => console.log(res)).catch(err => console.log(err))


// console.log(mongoose.modelNames());

// app.listen(port = 3000, () => {
//     console.log("Connected at port "+port)
// });