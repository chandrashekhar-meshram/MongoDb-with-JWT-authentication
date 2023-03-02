const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.get('/', (req, resp) => {
  resp.json({
    massage: 'A sample API'
  })
})

app.listen(5000, ()=> {
  console.log('app is running on 5000 port');
});


//mongoose.set('strictQuery', false);
//mongoose.set('strictQuery', true);
console.log("Hi");
