const express = require("express");
const app = express();
const cors = require("cors");
const { mongoose } = require("mongoose");
// Hello
// Middleware
app.use(express.json());
app.use(cors());
// working on Schema file
// Time:11min 12sec

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

module.exports = app;
