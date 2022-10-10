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
    trim: true,
    unique: [true, "Name is must be unique"],
    minLength: [3, "Name Must be at least 3 characters"],
    maxLength: [100, "Name is too large"],
  },

  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "price cant be negative"],
  },
  unit: {
    type: String,
    required: true,
    enum: ["kg", "liter", "pcs"],
    message: "unit   value    cant be {value},must be kg/litter/pcs",
  },
  qunatity: {
    type: Number,
    required: true,
    min: [0, "qunatitiy can not be negative"],
    validate: {
      validator: (value) => {
        const isInteger = Number.isInteger(value);
        if (isInteger) {
          return true;
        } else return false;
      },
      message: "Qunantity must be an integer",
    },
  },
  status: {
    type: String,
    required: true,
    enum: {
      value: ["in-stock", "out-of-stock", "discontinued"],
      message: "status  cant be  {VALUE }",
    },
  },
  createdAt: {
    type: Date(),
    default: Date.now,
  },
});

// Time:11min 12sec

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

module.exports = app;
