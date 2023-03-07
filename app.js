const express = require("express");
const app = express();
const morgan = require("morgan");
const { data } = require("./data");
const { logger } = require("./logger");

//multiple middleware functions can be added in an array
app.use(logger);
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  console.log(req.role);
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

  return res.status(200).json(newData); // can add return as well, to ensure only one res in a route
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
