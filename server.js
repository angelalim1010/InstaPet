const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");
const passport = require("passport");

// Require .env config
require("dotenv").config();

// Express Initialization
const app = express();

// Logger
app.use(logger("dev"));

// Parse requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Passport
require("./config/passport");
app.use(passport.initialize());

// Configure routes
require("./routes")(app);

// Heroku post-build script
// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

module.exports = app;
