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
    unique: [true, "Name Must be unique"],
    minLength: [3, "Name Must be 3 Characters"],
    maxLength: [100, "Name is to large"],
  },

  description: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: [true],
    min: [0, "Price cant be negative "],
  },
  unit: {
    type: String,
    required: true,
    enum: {
      value: ["kg", "liter", "pcs"],
      message: "unit value cant be {value},must be kg/litter/pcs",
    },
  },
  quantity: {
    type: Number,
    required: true,
    min:[0,"quantity can "]
  },
});

// Time:11min 12sec

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

module.exports = app;
