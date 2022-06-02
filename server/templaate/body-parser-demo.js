const express = require("express");
const app = express();

app.use(express.static('./index1.html'))

const parser = require('body-parser')
const jsonParser = parser.json();
// const jsonParser = express.json();//json data => postman raw/json
app.post("/json", jsonParser, (req, res) => {
  console.log(req.body);
  res.send(JSON.stringify(req.body));
});

const urlencodedParser = parser.urlencoded({ extended: true });
// const urlencodedParser = express.urlencoded({ extended: true }); //form data => postman x-www-form-urlencoded
app.post("/urlencoded", urlencodedParser, (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(3011, () => console.log("http://localhost:3011/"));
