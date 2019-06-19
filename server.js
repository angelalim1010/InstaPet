const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");
const passport = require("passport");
const http = require("http");

// Express Initialization
const app = express();

// Require .env config
require("dotenv").config();

// Grab or initialize port
const port = parseInt(process.env.PORT, 10) || 5000;

// Set port
app.set("port", port);

// Logger
app.use(logger("dev"));

// Use bodyParser middleware to parse requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Require Passport config
require("./config/passport");

// Use Passport middleware
app.use(passport.initialize());

// Obtain routes and apply it to the Express app
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

// Create server and listen on port ####
const server = http.createServer(app);
server.listen(port, () => console.log(`Server up! Listening on port ${port}`));

module.exports = app;
