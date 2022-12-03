const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
require("dotenv").config();
const app = express();
const bcrypt = require("bcrypt");
const saltRounds = 6;
const axios = require("axios");
const session = require("express-session");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD", "DELETE"],
    credentials: true,
  })
);
app.use(
  session({
    name: "sid",
    secret: process.env.SESS_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
      secure: false,
    },
  })
);

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
        req.session.user = {
          username: req.body.username,
        };
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
        req.session.user = {
          username: req.body.username,
        };
        res.send(results);
      } else {
        // res.send({ message: "Failed to login" });
        res.redirect("/login");
      }
    }
  );
});

app.get("/logout", (req, res) => {
  console.log("Logging out");
  if (req.session) {
    req.session.destroy();
  }
  res.send("Logged out!");
});

app.post("/getGames", (req, res) => {
  const input = req.body.params.input;
  // console.log(req.body.params.input);
  axios({
    url: "https://api.igdb.com/v4/games/",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": process.env.CLIENT_ID,
      Authorization: process.env.ACCESS_TOKEN,
    },
    data: `search "${input}";fields id, name, summary, platforms.abbreviation, cover.*, genres.*, screenshots.*, release_dates.date;`,
    // data: `search "${input}"; fields name, summary, platforms.abbreviation, platform_logos.*, cover.*, screenshots.*; limit 5;`,
  })
    .then((response) => {
      // console.log(response.data);
      res.json(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.post("/getDetails", (req, res) => {
  const id = req.body.params.id;
  console.log(req.body.params.id);
  axios({
    url: "https://api.igdb.com/v4/games/",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": process.env.CLIENT_ID,
      Authorization: process.env.ACCESS_TOKEN,
    },
    // data: `fields name, summary, platforms.abbreviation, cover.*, genres.*, screenshots.*, release_dates.date; where id=${id}`,
    data: `fields name, summary, platforms.abbreviation, cover.*, genres.*, screenshots.*, release_dates.date; where id=${id};`,
    // data: `search "${input}"; fields name, summary, platforms.abbreviation, platform_logos.*, cover.*, screenshots.*; limit 5;`,
  })
    .then((response) => {
      // console.log(response.data);
      res.json(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.post("/addGame", (req, res) => {
  const gameTitle = req.body.gameTitle;
  console.log(gameTitle);

  db.query(
    "INSERT INTO backlog (title) VALUES (?)",
    [gameTitle],
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.send(results);
      }
    }
  );
});

app.get("/backlog", (req, res) => {
  db.query("SELECT title, id FROM backlog", (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(JSON.stringify(results));
    }
  });
});

app.delete("/deleteGame/:id", (req, res) => {
  const id = req.params.id;
  // res.status(200).send("DELETE request to homepage");
  db.query(`DELETE FROM backlog WHERE id = ${id}`, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.sendStatus(200);
    }
  });
});

app.listen(8080, () => console.log("API Running on http://localhost:8080"));

// url: "https://api.igdb.com/v4/games/?search=suikoden&fields=id,name,summary,cover.url&expand=cover",
