const express = require('express')
const app = express()

app.set('/getdata','87')

app.get("/getdata", function (req, res) {
    res.send("收到的資料");
  });


console.log(app.get('/getdata'))

app.listen(3011,()=>console.log('http://localhost:3011'))