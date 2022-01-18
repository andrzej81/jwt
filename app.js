const express = require("express");
const checkBot = require("./middleware/checkBot");

const app = express();
const port = 3000;

app.use(checkBot);

app.get("/", (req, res) => res.send("Hello to my lovely website!"));

app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);
