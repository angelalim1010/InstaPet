const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

// .env config
require('dotenv').config();

const app = express();

app.use(logger('dev'));

// Parse requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Configure routes
require('./database/routes')(app);

module.exports = app;
