const checkBot = require("./middleware/checkBot");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(checkBot); //to wykrzacza testy ale  serwer  sie uruchamia i bot analiza dziala
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ status: "OK" });
});

app.get("/login", (req, res) => {
  console.log("route /login");
  console.log(req.botInfo);

  if (req.botInfo.isBot) {
    res.status(403).send({
      status: 200,
      error: "You can't access the login page because you are a BOT",
    });
  } else {
    res.status(200).send({
      status: 200,
      error: "You can access the login page",
    });
  }
});

/*app.post("/", (req, res) => {
  const { name } = req.body;
  if (!name || name === undefined) {
    res.sendStatus(400);
  } else {
    res.json({ input: name });
  }
});*/

module.exports = app;
