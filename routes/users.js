const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Set input validation methods
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

// Require .env config
require("dotenv").config();

// Grab jwt secret
const JWT_SECRET = process.env.JWT_SECRET || "DEFAULT_SECRET";

// Set models
const {
  User,
  Post,
  Comment,
  Like,
  Relationship
} = require("../database/models");

/**
 * FindAllUsers endpoint
 * @route GET /accounts
 * @desc Find all users
 * @access Public
 */
router.get("/", (req, res, next) => {
  return User.findAll({
    order: [["createdAt", "DESC"]]
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
router.get("/:userName", (req, res, next) => {
  return (
    User.findOne({
      where: {
        userName: req.params.userName
      }
    })

      // Filter out key:value pairs from the user
      .then(user => {
        // Convert it to JSON format
        const jsonUser = user.toJSON();

        // Destructure (filter) these key:value pairs from jsonUser because they contain sensitive information
        const { email, password, createdAt, updatedAt, ...rest } = jsonUser;

        // Return the other key:value pairs.
        return rest;
      })

      // Find all the posts made by the user and return them
      .then(user => {
        return (
          Post.findAll({
            where: {
              userName: user.userName
            },
            order: [["createdAt", "DESC"]]
          })
            // Take the posts that were returned and
            .then(posts => {
              let newPosts = [];
              // For each post
              for (i in posts) {
                // Get the number of likes
                Like.count({
                  where: {
                    postId: posts[i].id
                  }
                })
                  // Take that and
                  .then(likeCount => {
                    // Modify each post object to add likeCount
                    let newPost = {
                      ...posts[i].toJSON(),
                      likeCount: likeCount
                    };

                    // Add each post to the array of new posts
                    newPosts.push(newPost);

                    // Return the array of new posts
                    return newPosts;
                  });
              }
              // Add them to the user's posts array
              user.posts = newPosts;
              // Return the user for the next .then handler
              return user;
            })
        );
      })

      // Find all the users that this user is following and return them
      .then(user => {
        return (
          Relationship.findAll({
            where: {
              follower: user.userName
            },
            order: [["createdAt", "DESC"]]
          })
            // Take the users that were returned
            .then(following => {
              // Add them to the user's following array
              user.following = following;

              // Return the user for the next .then handler
              return user;
            })
        );
      })

      // Find all the users that this following this user and return them
      .then(user => {
        return (
          Relationship.findAll({
            where: {
              following: user.userName
            },
            order: [["createdAt", "DESC"]]
          })
            // Take the users that were returned
            .then(followers => {
              // Add them to the user's followers array
              user.followers = followers;

              // Return the user for the next .then handler
              return user;
            })
        );
      })

      // Take the user and send a 200 response with the user
      .then(user => res.status(200).json(user))

      // Catch any errors and send a 400 response with the error
      .catch(err => res.status(400).json(err))
  );
}); // End FindUser endpoint

/**
 * UpdateUser endpoint
 * @route PUT /profile/:userName
 * @desc Update a user
 * @access Public
 */
router.put("/:userName", (req, res, next) => {
  return User.update({
    where: {
      userName: req.params.userName
    }
  })
    .then(user => res.status(200).json(user))
    .catch(err => res.status(400).json(err));
}); // End UpdateUser endpoint

/**
 * Register endpoint
 * @route POST /profile/register
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
          .then(user => res.json(user))
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
router.post("/login", (req, res, next) => {
  // Validate form inputs
  const { errors, isValid } = validateLoginInput(req.body);

  // If not valid, return errors
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { email, password } = req.body;

  // If valid, try to find existing user with same email
  User.findOne({
    where: {
      email: email
    }
  }).then(user => {
    // If a user was not found
    if (!user) {
      return res.status(400).json({ email: "Email not found" });
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
              token: "JWT " + token
            });
          }
        );
      } else {
        return res.status(400).json({ password: "Password incorrect" });
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
router.delete("/:userName", (req, res, next) => {
  return User.destroy({
    where: {
      userName: req.params.userName
    }
  })
    .then(() => res.status(200).json({ message: "User successfully deleted" }))
    .catch(err => res.status(400).json(err));
}); // End DeleteUser endpoint

module.exports = router;
