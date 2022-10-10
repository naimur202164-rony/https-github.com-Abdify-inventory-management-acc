const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");
const DBConnect = require("./utils/dbConnect.js");

const app = require("./app");

// database connection
// DBConnect();
// mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
//   console.log(`Database Connected Successfully `.red.bold);
// });
mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
  console.log(`Database connection  is successuffly`.red.bold);
});

// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});
