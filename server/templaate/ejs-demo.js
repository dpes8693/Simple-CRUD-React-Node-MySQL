const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.get("/ab?*", (req, res, next) => {
  const ej = "index.ejs";
  next();
  res.render(ej, { id: "挖喜id" });
});
app.get("/ab?*", (req, res, next) => {
  const ej = "index.ejs";
  res.render(ej, { id: "挖喜2" });
});
app.listen(3011, () => console.log("http://localhost:3011/"));
