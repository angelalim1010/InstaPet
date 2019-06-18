import bcrypt from "bcryptjs";

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
      usernameField: "username",
      passwordField: "password",
      emailField: "email",
      session: false
    },
    (username, password, email, done) => {
      try {
        User.findOne({
          where: {
            username: username
          }
        }).then(user => {
          if (user != null) {
            console.log("Username is already taken");
            return done(null, false, { message: "Username is already taken" });
          } else {
            bcrypt.hash(password, BCRYPT_SALT_ROUNDS).then(hashedPassword => {
              User.create({ username, password: hashedPassword, email }).then(
                user => {
                  console.log("User created");
                  return done(null, user);
                }
              );
            });
          }
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
      usernameField: "username",
      passwordField: "password",
      emailField: "email",
      session: false
    },
    (username, password, email, done) => {
      try {
        User.findOne({
          where: {
            username: username
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
              console.log("User found and authenticated");
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
          username: jwt_payload.id // The id in the payload must be the username
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
