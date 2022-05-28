const htlName = "/index1.html"; //注意沒有點點
const url = "http://localhost:3011/";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// var urlencodedParser = bodyParser.urlencoded() //解析 Form Data
//body-parser deprecated undefined extended: provide extended option app.js:5:35
//https://stackoverflow.com/questions/25471856/express-throws-error-as-body-parser-deprecated-undefined-extended

var urlencodedParser = bodyParser.urlencoded({ extended: true }); //正確
// 新的寫法
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json());

// 讀取
app.get("/", function (req, res) {
  // res.sendfile(__dirname + htlName, function (err) {
  res.sendFile(__dirname + htlName, function (err) {
    if (err) res.send(404);
  });
});

app.get("/getdata", function (req, res) {
  console.log(req.query);
  res.send("收到的資料 = " + JSON.stringify(req.query));
});

app.post("/postdata", urlencodedParser, function (req, res) {
  console.log(req.body);
  res.send("收到的資料 = " + JSON.stringify(req.body));
});

app.listen(3011, () => {
  console.log("http://localhost:3011/", "3011");
});

// app.use( express.static("./public") ) //靜態SSR
