const express = require("express");
const app = express();
// const mysql = require("mysql");
// const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200);
  res.send({ msg: "get success" });
});

app.post("/create", (req, res) => {
  let body = req.body;
  console.log('伺服器收到:',body);
  if (body.name) {
    res.status(201);
    res.send({ name: body.name, id: 1 });
  } else {
    res.status(400);
    res.send({ msg: "name required !" });
  }
});
/** 
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "employeeSystem",
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const wage = req.body.wage;

  db.query(
    "INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)",
    [name, age, country, position, wage],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const wage = req.body.wage;
  db.query(
    "UPDATE employees SET wage = ? WHERE id = ?",
    [wage, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
*/
app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});


/**總結痛苦的點
 * 1. express框架套件語法不熟 沒看過文件
 * 2. fetch 格式不熟 headers和body格式不懂...以前是用axios套件
 * 3. 前後端混合不熟，容易網錯誤方向去找問題 
 * 4. 線上機器bug很難處理
 * */