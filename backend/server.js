const express = require("express");
const bodyParser = require("body-parser");
const dbConfig = require("./config/database.config.js");
const mongoose = require("mongoose");
var cors = require("cors");
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

// create express app
const app = express();
app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// define a simple route
app.get("/", (req, res) => {
  res.json({
    message: "Simple test.",
  });
});
require("./app/routes/user.routes.js")(app);
require("./app/routes/login.routes.js")(app);
// listen for requests
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
