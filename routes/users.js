const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import validateRegisterInput from "../validation/register";
import validateLoginInput from "../validation/login";

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
router.post("/accounts/register", (req, res, next) => {
  // Validate form inputs
  const { errors, isValid } = validateRegisterInput(req.body);

  // If not valid, return errors
  if (!isValid) {
    return res.status(400).json(errors);
  }

  // If valid, try to find existing user with same email
});

/**
 *  USER ROUTES
 */

// app.get("/accounts/", UsersController.list);
// app.post("/accounts/registerUser", UsersController.register);
// app.post("/accounts/loginUser", UsersController.login);
// app.put("/accounts/:userId", UsersController.update);
// app.delete("/accounts/:userId", UsersController.destroy);

module.exports = router;
