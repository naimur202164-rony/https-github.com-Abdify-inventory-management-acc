const express = require("express");
const app = express();
const cors = require("cors");
const { mongoose } = require("mongoose");

// Middleware
app.use(express.json());
app.use(cors());
// working on Schema file

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide  a name for this product"],
    trim: true,
    unique: [true,"Name Must be unique"],
    minLength: [3, "Name Must be 3 Characters"],
    maxLength: [100, "Name is to large"],
  },
});

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

module.exports = app;
