const express = require("express");
const path = require("path");
const app = express();

// middleware to automatically serve all static files (built in middleware),
// needed as browser will send request to backend for css files, etc, which are referenced in .html
// need to serve explicitly in case of node
// all files that server doesnt need to change are called static like svgs, css, some js as well
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.status(200).send("Home Page");
});

app.get("/hello", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
