const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
require("dotenv").config();
const app = express();
const bcrypt = require("bcrypt");
const saltRounds = 6;
const axios = require("axios");

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

app.post("/getGames", (req, res) => {
  axios({
    url: "https://api.igdb.com/v4/games/?search=suikoden&fields=id,name,summary,cover.url&expand=cover",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": process.env.CLIENT_ID,
      Authorization: process.env.ACCESS_TOKEN,
    },
    // data: "fields name, summary;",
  })
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(8080, () => console.log("API Running on http://localhost:8080"));
