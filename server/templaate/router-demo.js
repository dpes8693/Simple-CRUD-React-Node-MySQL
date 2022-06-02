
// import express from 'express';//要改package.json 的type:"module"
const express = require("express");
const app = express();

//
var memberRouter = express.Router(); //宣告
memberRouter.get("/new", function (req, res) { //設定
  res.send("new member form");
});
app.use('/member',memberRouter) //掛載
//

app.listen(3011, () => console.log('http://localhost:3011/member/new',3011));
