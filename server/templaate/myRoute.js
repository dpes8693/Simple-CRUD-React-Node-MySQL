const express = require("express");
const router = express.Router();
router.get("/", function (req, res) {
  res.send("homepage");
});
router.get("/today", function (req, res) {
  res.send("One apple a day");
});

router.get("/doctor", function (req, res) {
  res.send("no doctor");
});
module.exports = router;

//沒路徑 會當成 module name
//有路徑 會當成自己本地的 exports