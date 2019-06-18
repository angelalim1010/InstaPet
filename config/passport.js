const bcrypt = require("bcryptjs");
const passport = require("passport");
const localStrategy = require("passport-local");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../database/models/").User;

const BCRYPT_SALT_ROUNDS = 12;

require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET || "DEFAULT_SECRET";

passport.use(
  "register",
  new localStrategy(
    {
      usernameField: "userName", // Letting passport know that the chosen field that has the username/key is userName
      passwordField: "password", // Letting passport know that the chosen field that has the password/value is password
      passReqToCallback: true, // Allows access to the req in the callback function
      session: false
    },
    (req, userName, password, done) => {
      try {
        // Check if username is already in use
        User.findOne({
          where: {
            userName: userName
          }
        }).then(user => {
          if (user != null) {
            console.log("Username is already in use");
            return done(null, false, { message: "Username is already in use" });
          }
        });

        // Check if email is already in use
        User.findOne({
          where: {
            email: req.body.email
          }
        }).then(user => {
          if (user != null) {
            console.log("Email is already in use");
            return done(null, false, { message: "Email is already in use" });
          }
        });

        // Hash password
        bcrypt.hash(password, BCRYPT_SALT_ROUNDS).then(hashedPassword => {
          // Create User
          User.create({
            userName,
            password: hashedPassword,
            email: req.body.email
          }).then(user => {
            console.log("User created");
            return done(null, user);
          });
        });
      } catch (err) {
        done(err);
      }
    }
  )
);

passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      session: false
    },
    (email, password, done) => {
      try {
        User.findOne({
          where: {
            email: email
          }
        }).then(user => {
          if (user == null) {
            console.log("Username does not exist");
            return done(null, false, { message: "Username does not exist" });
          } else {
            bcrypt.compare(password, user.password).then(res => {
              if (!res) {
                console.log("Passwords do not match");
                return done(null, false, { message: "Passwords do not match" });
              }
              console.log("Login successful!");
              return done(null, user);
            });
          }
        });
      } catch (err) {
        done(err);
      }
    }
  )
);

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("JWT"),
  secretOrKey: JWT_SECRET
};

passport.use(
  "jwt",
  new JwtStrategy(opts, (jwt_payload, done) => {
    try {
      User.findOne({
        where: {
          username: jwt_payload.id // Make sure that the id in the payload is set to the username. Refer to controllers/users.js token declaration.
        }
      }).then(user => {
        if (user) {
          console.log("User found in database in passport");
          done(null, user);
        } else {
          console.log("User not found in database in passport");
          done(null, false);
        }
      });
    } catch (err) {
      done(err);
    }
  })
);
