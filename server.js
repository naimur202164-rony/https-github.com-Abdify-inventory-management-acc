const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./app");
// database connection
// DBConnect();
mongoose.connect(`mongodb://localhost:27017/inventory`).then(() => {
  console.log(`Database Connected Successfully `.red.bold);
});

// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});
