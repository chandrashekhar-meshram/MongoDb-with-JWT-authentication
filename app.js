const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

mongoose.connect(
  'mongodb+srv://shekharonlineproject:shekharonlineproject@cluster0.8rwhj8f.mongodb.net/JWT-authentication?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(() => {
  console.log("db connected");
})

app.get('/', function(req, res){
  res.end("Hello");
})

app.listen(5000);


//mongoose.set('strictQuery', false);
//mongoose.set('strictQuery', true);

//console.log(Math.random()+2)