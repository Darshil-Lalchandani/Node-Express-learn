const express = require("express");
const app = express();
const morgan = require("morgan");
const { logger } = require("./logger");

const routes = require("./routes/routes.js");

app.use(routes);

//multiple middleware functions can be added in an array
app.use(logger);
app.use(morgan("tiny"));

app.use(express.urlencoded({ extended: false })); //parse request body as string / arrays
app.use(express.json()); //parse req body as json

//similarly app.put and app.delete
app.post("/login", (req, res) => {
  res.status(200).json({ success: "true", body: req.body });
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
