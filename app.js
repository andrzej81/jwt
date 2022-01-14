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

const authorization = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.sendStatus(403);
  }
  const token = authorization.split(" ")[1];
  try {
    const data = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.userId = data.id;

    //to do for role base auth
    req.userRole = data.role;
    return next();
  } catch {
    return res.sendStatus(403);
  }
};

app.get("/", (req, res) => {
  res.end(JSON.stringify("Hello API " + api_version));
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

app.get("/list_movies", authorization, (req, res) => {
  fs.readFile(__dirname + "/" + "movies.json", "utf8", (err, data) => {
    if (err) {
      next(err);
    } else {
      res.send(data);
    }
  });
});

app.use((req, res, next) => {
  res.status(404).send({
    status: 404,
    error: "Not found",
  });
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
