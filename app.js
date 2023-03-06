const express = require("express");
const app = express();
const { data } = require("./data");

app.get("/", (req, res) => {
  res.status(200).send('<h1>Welcome</h1><a href="/api/users"> Users </a>');
});

app.get("/api/users", (req, res) => {
  const { sort = "asc", search, limit } = req.query; //query param, default val = asc

  let newData = data.map((d) => {
    const { id, name } = d;
    return { id, name };
  });

  if (sort === "desc") newData.sort((a, b) => b.id - a.id);
  if (limit) newData = newData.slice(0, limit);
  if (search)
    newData = newData.filter((u) => u.name.toLowerCase().includes(search));

  res.status(200).json(newData);
});

app.get("/api/users/:userID", (req, res) => {
  const { userID } = req.params;
  const user = data.filter((u) => u.id === Number(userID));
  user.length > 0
    ? res.status(200).json(user)
    : res.status(404).send("No Data Found");
});

app.get("/api/query", (req, res) => {
  console.log(req.query);
  res.status(200).send("Received");
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
