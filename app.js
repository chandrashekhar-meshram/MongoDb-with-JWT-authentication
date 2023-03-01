const express = require('express');
const app = express();

const mongoose = require('mongoose');

const User = require('./models/users');

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

mongoose.set('strictQuery', false);
mongoose.set('strictQuery', true);

mongoose.connect(
  'mongodb+srv://shekharonlineproject:shekharonlineproject@cluster0.8rwhj8f.mongodb.net/tutorial?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.get('/users', function(req, res) {
  User.find()
    .select('email')
    .then((data) => {
      res.status(201).json(data);
    });
});

//2nd parameter will be middleware
app.post('/user', jsonParser, function(req, res) {
  const data = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
  });
  data
    .save()
    .then((result) => {
      res.status(201).json(result)
    })
    .catch((err) => {
      console.log(err)
    });
});

app.delete('/user/:id', function(req, res) {
  User.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((err) => {
      console.log(err)
    })
});

app.put('/user/:id', jsonParser, function(req, res){
  User.updateOne(
    {_id: req.params.id},
    {$set: {
              name: req.body.name,
              email: req.body.email
           }
    }
  ).then((result) => {
    res.status(200).json(result)
  }).catch((err) => {console.log(err)})
})

// Search Api
app.get('/search/:name', function(req, res){
  var regex = new RegExp(req.params.name, 'i');
  User.find(
    {name: regex}
  ).then((result) => {
    res.status(200).json(result)
  }).catch((err) => {
    console.log(err)
  })
})

console.log("hi");

app.listen(5000);
