const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Set input validation methods
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');

// Require .env config
require('dotenv').config();

// Grab jwt secret
const JWT_SECRET = process.env.JWT_SECRET || 'DEFAULT_SECRET';

// Set User model
const { User } = require('../database/models');

/**
 * FindAllUsers endpoint
 * @route GET /profile
 * @desc Find all users
 * @access Public
 */
router.get('/', (req, res, next) => {
  return User.findAll({
    order: [['id', 'DESC']]
  })
    .then(users => res.status(200).json(users))
    .catch(err => res.status(400).json(err));
}); // End FindAllUsers endpoint

/**
 * FindUser endpoint
 * @route GET /profile/:userName
 * @desc Find a user
 * @access Public
 */
router.get('/:userName', (req, res, next) => {
  return User.findOne({
    where: {
      userName: req.params.userName
    }
  })
    .then(user => {
      console.log('FindUser endpoint');
      const objectWithoutKey = (object, key) => {
        const { [key]: deletedKey, ...otherKeys } = object;
        console.log(deletedKey);
        console.log(otherKeys);
        return otherKeys;
      };
      console.log(objectWithoutKey(user, password));
      //res.status(200).json(objectWithoutKey(user, password));
      res.status(200).json(user);
    })
    .catch(err => res.status(400).json(err));
}); // End FindUser endpoint

/**
 * UpdateUser endpoint
 * @route PUT /profile/:userName
 * @desc Update a user
 * @access Public
 */
router.put('/:userName', async (req, res, next) => {
  try {
    // Get the user we want to modify
    let targetUser = await User.findOne({
      where: req.body.id
    });

    // update the User with the new attributes
    let updatedUser = await targetUser.update({
      displayName: req.body.displayName,
      profilePicture: req.body.profilePicture,
      bio: req.body.bio
    });

    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
}); // End UpdateUser endpoint

/**
 * Register endpoint
 * @route POST /profile/register
 * @desc Register user
 * @access Public
 */
router.post('/register', (req, res, next) => {
  // Validate form inputs
  const { errors, isValid } = validateRegisterInput(req.body);
  // If not valuserName, return errors
  if (!isValid) {
    return res.status(400).json(errors);
  }

  // If valuserName, try to find existing user with same email
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    // If a user was found
    if (user) {
      return res.status(400).json({ email: 'Email already exists' });
    }

    // Otherwise
    const newUser = {
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
      displayName: req.body.displayName
    };

    // Hash password before saving to database
    bcrypt.genSalt(12, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        User.create(newUser)
          .then(user => {
            return res.json(user);
          })
          .catch(err => console.log(err));
      });
    });
  });
}); // End Register endpoint

/**
 * Login endpoint
 * @route POST /profile/login
 * @desc Login user
 * @access Public
 */
router.post('/login', (req, res, next) => {
  console.log(req.body);
  // Validate form inputs
  const { errors, isValid } = validateLoginInput(req.body);

  // If not isValid, return errors
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { email, password } = req.body;

  // If valuserName, try to find existing user with same email
  User.findOne({
    where: {
      email: email
    }
  }).then(user => {
    // If a user was not found
    if (!user) {
      return res.status(400).json({ email: 'Email not found' });
    }

    // Otherwise, check password
    bcrypt.compare(password, user.password).then(isMatch => {
      // If a user is matched
      if (isMatch) {
        // Create JWT Payload
        const payload = {
          id: user.id,
          userName: user.userName,
          email: user.email,
          displayName: user.displayName,
          profilePicture: user.profilePicture,
          bio: user.bio,
          posts: user.posts,
          followers: user.followers,
          following: user.following
        };
        // Sign JWT token
        jwt.sign(
          payload,
          JWT_SECRET,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: 'JWT ' + token
            });
          }
        );
      } else {
        return res.status(400).json({ password: 'Password incorrect' });
      }
    });
  });
}); // End Login endpoint

/**
 * DeleteUser endpoint
 * @route DELETE /profile/:userName
 * @desc Delete a user
 * @access Public
 */
router.delete('/:userName', (req, res, next) => {
  return User.destroy({
    where: {
      userName: req.params.userName
    }
  })
    .then(() => res.status(200).json({ message: 'User successfully deleted' }))
    .catch(err => res.status(400).json(err));
}); // End DeleteUser endpoint

module.exports = router;
