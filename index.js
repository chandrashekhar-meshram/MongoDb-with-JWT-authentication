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
  jwt.sign({user}, secretKey, {expiresIn: '900s'},( err, token) => {
    resp.json({
      token
    })
  });
})

app.post('/profile', verifyToken, (req, resp) => {
  jwt.verify(req.token, secretKey, (err, authData) => {
    if(err){
      resp.send({result: "invalid token"})
    }else{
      resp.json({
        massage: "profile accessed",
        authData
      })
    }
  })
})

function verifyToken(req, resp, next){
  const bearerHeader = req.headers['authorization'];
  if(typeof bearerHeader !== 'undefined'){
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];
    req.token = token;
    next();
  } else {
    resp.send({
      result: 'Token is not valid'
    })
  }  
}

app.listen(5000, ()=> {
  console.log('app is running on 5000 port');
});


//mongoose.set('strictQuery', false);
//mongoose.set('strictQuery', true);
console.log("Hi");
