const express = require("express");
const checkBot = require("./middleware/checkBot");

const app = express();
const port = 3000;

app.use(checkBot);

app.get("/", (req, res) => {
  console.log(" route /");
  console.log(req.botInfo);

  res.send("Welcome to out site");
});

app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);
