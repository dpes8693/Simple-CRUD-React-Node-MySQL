const express = require("express");
const app = express();
app.get("/:who", (req, res) => {
  // Error: No default engine was specified and no extension was provided.
  // res.render('haha')
  //
  var r =  JSON.stringify(req.params);
  var q = JSON.stringify(req.query);
  var u = JSON.stringify(req.url);

  res.send(r + q + "," + u);
});
app.listen(3011, () => console.log("http://localhost:3011/"));
