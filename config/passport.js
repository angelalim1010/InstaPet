const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../database/models/").User;

// Require .env config
require("dotenv").config();

// Grab jwt secret
const JWT_SECRET = process.env.JWT_SECRET || "DEFAULT_SECRET";

// Tell JwtStrategy the token, as well as the secret to decode it
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwtToken"),
  secretOrKey: JWT_SECRET
};

module.exports = passport => {
  passport.use(
    // Creates a new JwtStrategy with the given token information
    new JwtStrategy(opts, (jwt_payload, done) => {
      // Try to find a user that exists in the database
      User.findById(jwt_payload.id)
        .then(user => {
          // If a user was found, return the user
          if (user) {
            return done(null, user);
          }
          // If not, return false
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
