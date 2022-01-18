const express = require("express");
const checkBot = require("./middleware/checkBot");

const app = express();
const port = 3000;

app.use(checkBot);

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

app.use((req, res, next) => {
  res.status(404).send({
    status: 404,
    error: "Not found",
  });
});

app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);
