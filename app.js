const mongoose = require("mongoose");
const express = require ('express');
const app = express();
const mongoPath = "mongodb+srv://deniz:denizsancaroğlu@cluster0.ejucasq.mongodb.net/?retryWrites=true&w=majority";

module.exports =  async ()=>{
    await mongoose.connect(mongoPath,{
      userNewUrlParser: true,
      useUnifiedTopology: true,
    })
    return mongoose 
  }