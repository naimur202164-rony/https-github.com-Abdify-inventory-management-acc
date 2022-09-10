const express = require("express");
const app = express();
const cors = require("cors");



// Middleware
app.use(express.json());
app.use(cors());
// working on Schema file

const productSchema=mongoose.Schema({
  name:{
    type:String,
    required:[true,"Please provide  a name for this product"],
    trim:true
  }
})


app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});


module.exports = app;
