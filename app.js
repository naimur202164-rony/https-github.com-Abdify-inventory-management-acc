const express = require("express");
const app = express();
const cors = require("cors");
const { mongoose } = require("mongoose");
// Hello
// Middleware
app.use(express.json());
app.use(cors());
// working on Schema file
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Provide a name for this Product"],
  },
  trim: true,
  unique: true,
  minLength: [3, "Name Must be at least 3 characters"],
});

// Time:11min 12sec

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

module.exports = app;
