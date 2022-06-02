const express = require("express");
const multer = require("multer");
const app = express();
const cors = require("cors");

app.use(cors());
const upload = multer({ dest: "/upload" });

// app.post("/file", upload.single("aaa"), (req, res) => {
//   const f = req.file;
//   console.log(f);
//   res.send(f);
// });

app.post("/file", upload.single("myFile"), (req, res, next) => {
  const file = req.file;
  if (!file) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(file);
});

// app.get("/files", (req, res) => {
//   res.sendFile(__dirname + "/index1.html");
// });

app.listen(3011, () => console.log("http://localhost:3011/"));
