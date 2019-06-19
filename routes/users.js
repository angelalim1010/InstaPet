const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Set input validation methods
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

// Require .env config
require("dotenv").config();

// Set User model
const { User } = require("../database/models");

/**
 * Register endpoint
 * @route POST /accounts/register
 * @desc Register user
 * @access Public
 */
router.post("/register", (req, res, next) => {
  // Validate form inputs
  const { errors, isValid } = validateRegisterInput(req.body);

  // If not valid, return errors
  if (!isValid) {
    return res.status(400).json(errors);
  }

  // If valid, try to find existing user with same email
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    // If a user was found
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    }
    // Otherwise
    const newUser = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password
    });

    bcrypt.getSalt(12, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
      });
    });
  }); // End Register endpoint
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
