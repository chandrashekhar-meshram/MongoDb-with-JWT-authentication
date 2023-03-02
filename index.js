const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const secretKey = 'secretkey';

app.get('/', (req, resp) => {
  resp.json({
    massage: 'A sample API'
  })
});

app.post('/login', (req, resp) => {
  const user = {
    id: 1,
    username: 'anil',
    email: 'abc@test.com'
  }
  jwt.sign({user}, secretKey, {expiresIn: '300s'},( err, token) => {
    resp.json({
      token
    })
  });
})

app.listen(5000, ()=> {
  console.log('app is running on 5000 port');
});


//mongoose.set('strictQuery', false);
//mongoose.set('strictQuery', true);
console.log("Hi");
