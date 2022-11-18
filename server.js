const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
require("dotenv").config();
const app = express();
const bcrypt = require("bcrypt");
const saltRounds = 6;

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PW,
  database: "loginsystem",
});

app.post("/register", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  db.query(
    "INSERT INTO users (username, password) VALUES (?,?)",
    [username, hashedPassword],
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.send(results);
      }
    }
  );
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE username = ?",
    [username],
    async (err, results) => {
      if (err) {
        res.send({ err: err });
      }
      if (results.length > 0) {
        await bcrypt.compare(password, results[0].password);
        res.send(results);
      } else {
        res.send({ message: "Wrong credentials" });
      }
    }
  );
});
app.listen(8080, () => console.log("API Running on http://localhost:8080"));
