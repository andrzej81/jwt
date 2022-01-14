const jwt = require("jsonwebtoken");
let express = require("express");
let app = express();
let dotenv = require("dotenv");
let fs = require("fs");
let bodyParser = require("body-parser");

dotenv.config();
const port = 3000;
const api_version = "1.0.0";

let urlencodedParser = bodyParser.urlencoded({ extended: false });

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});

app.post("/getToken", urlencodedParser, (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  let payload = { username: password };

  let accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    algorithm: "HS256",
    expiresIn: process.env.REFRESH_TOKEN_LIFE,
  });

  res.send(
    JSON.stringify({
      token: accessToken,
    })
  );
});

app.get("/list_movies", (req, res) => {
  fs.readFile(__dirname + "/" + "movies.json", "utf8", (err, data) => {
    res.end(data);
  });
});

app.get("/", (req, res) => {
  res.end(JSON.stringify("Hello API " + api_version));
});
