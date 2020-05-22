const db = require("./queries");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/info", db.getAllInfo);
app.get("/info/:id", db.getInfoById);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

