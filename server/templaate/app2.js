//
const express = require("express");
const app = express();
const myRoute = require("./myRoute.js");

app.use("/", myRoute); //使用的根目錄 / 引入Router

app.listen(3011, () => console.log(3011));
