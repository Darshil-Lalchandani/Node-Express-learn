const express = require("express");
const { getAllUsers, getUserById } = require("../controller/users");

const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.role);
  res.status(200).send('<h1>Welcome</h1><a href="/api/users"> Users </a>');
});

router.get("/api/users", getAllUsers);

router.get("/api/users/:userID", getUserById);

router.get("/api/query", (req, res) => {
  console.log(req.query);
  res.status(200).send("Received");
});

module.exports = router;
