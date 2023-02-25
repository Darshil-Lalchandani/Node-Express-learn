const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log(req.url);
  res.status(200).send("Home page");
});

app.all("*", (req, res) => {
  console.log(req.url);
  res.status(404).send("No results found");
});

app.listen(5000, () => {
  console.log("Listening on 5000");
});
