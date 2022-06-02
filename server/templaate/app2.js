
const express = require("express");
const app = express();
const myRoute = require("./myRoute.js");

app.use("/home", myRoute); // 將Router模組掛載到'/home底下'

app.listen(3011, () => console.log(3011));
