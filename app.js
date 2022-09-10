const express = require("express");
const app = express();
const cors = require("cors");



// Middleware
app.use(express.json());
app.use(cors());
// working on Schema file


app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});


module.exports = app;
