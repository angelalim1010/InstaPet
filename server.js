//import express from "express";
// import Cors from "cors";
// import bodyParser from "body-parser";
// import logger from "morgan";
// import passport from "passport";

const express = require("express");
const Cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");
const passport = require("passport");
const http = require("http");
const PORT = parseInt(process.env.PORT, 10) || 5000;

// Require .env config
require("dotenv").config();

// Express Initialization
const app = express();

// Set "PORT" variable to PORT const
app.set("PORT", PORT);

// Cors
app.use(Cors());

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

// Create server and listen on port
const server = http.createServer(app);
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app;
