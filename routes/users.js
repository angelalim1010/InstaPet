const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Require .env config
require("dotenv").config();

// Load User model
const { User } = require("../database/models");

/**
 * Register endpoint
 * @route POST /accounts/register
 * @desc Register user
 * @access Public
 */
router.post("/accounts/register", (req, res, next) => {});

/**
 *  USER ROUTES
 */

// app.get("/accounts/", UsersController.list);
// app.post("/accounts/registerUser", UsersController.register);
// app.post("/accounts/loginUser", UsersController.login);
// app.put("/accounts/:userId", UsersController.update);
// app.delete("/accounts/:userId", UsersController.destroy);

module.exports = router;
