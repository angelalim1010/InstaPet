const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');

// .env config
require("dotenv").config();

const app = express();

// HTTP
const http = require("http");

app.use(logger('dev'));

// Parse requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

// Configure routes
require("./database/routes")(app);

// send .env variable 
app.get("/", (req, res) => {
	res.send(process.env.DATABASE_URL);
});

module.exports = app;
