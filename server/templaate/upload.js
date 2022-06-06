const express = require('express')
const fs = require('fs')
const multer  = require('multer')
const cors = require("cors");

const upload = multer({ dest: 'upload' })
const app = express()
app.use(cors());

app.post('/file', upload.single('myFile'), function (req, res, next) {
  const { file } = req
  console.log(file)
  if (file) {
    // 從檔案路徑讀檔
    fs.readFile(file.path, (err, data) => {
      if (err) return console.error(err)
      // 寫入 upload 資料夾
      fs.writeFile(`upload/${file.originalname}`, data, () => {
        // 檔案寫入成功後，後續動作...
        console.log('OK')
      })
    })
    fs.readFile(`upload/${file.originalname}`, (err, data) => {
        if (err) return console.error(err)
    })
  } else {
    // 沒有上傳圖片
    console.log('gggg');
  }
  res.send('ok')
})

app.listen(3011, () => {
    console.log("http://localhost:3011/");
  });