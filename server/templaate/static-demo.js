const express = require("express");
const app = express();

// const staticMiddleware = express.static('public') 這個是放在同一個地方才會這樣用
const staticMiddleware = express.static(__dirname + "/public");
app.use(staticMiddleware);
app.get("/where", (req,res) => {console.log(__dirname)
res.send(__dirname)
});

app.listen(3011);