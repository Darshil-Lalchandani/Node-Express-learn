const express = require("express");
const app = express();
const { data } = require("./data");

app.get("/", (req, res) => {
  res.status(200).send('<h1>Welcome</h1><a href="/api/users"> Users </a>');
});

app.get("/api/users", (req, res) => {
  const newData = data.map((d) => {
    const { id, name } = d;
    return { id, name };
  });
  res.status(200).json(newData);
});

app.get("/api/users/:userID", (req, res) => {
  const { userID } = req.params;
  const user = data.filter((u) => u.id === Number(userID));
  user.length > 0
    ? res.status(200).json(user)
    : res.status(404).send("No Data Found");
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
