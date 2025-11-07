const mongoose = require('mongoose')
const dotenv = require("dotenv");

const DB = 'mongodb+srv://2000030846:2872003s.Ramu@cluster0.lac7k.mongodb.net/SDP-1?retryWrites=true&w=majority';
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`connection successfull`)
}).catch((err) => console.log(err));