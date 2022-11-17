const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "LoginSystem",
});

app.use("/login", (req, res) => {
  res.send({
    token: "test123",
  });
});

app.listen(8080, () => console.log("API Running on http://localhost:8080"));
