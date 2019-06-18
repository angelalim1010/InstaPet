const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const { db } = require("../database/models");
const User = require("../database/models").User;
const PORT = 5000;

// .env config
require("dotenv").config();

const app = express();

app.use(logger("dev"));

// Parse requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Session middleware
app.use(
  session({
    secret: "This is not a very secure secret...",
    resave: false,
    saveUninitialized: false
  })
);

// consumes 'req.session' so that passport can know what's on the session
app.use(passport.initialize());

// this will invoke our registered 'deserializeUser' method
// and attempt to put our user on 'req.user'
app.use(passport.session());

// after we find or create a user, we 'serialize' our user on the session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// If we've serialized the user on our session with an id, we look it up here
// and attach it as 'req.user'.
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// authentication router
app.use("/auth", require("./auth"));

// Configure routes
require("../database/routes")(app);

// Handle 404s
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Error handling endware
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message || "Internal server error");
});

console.log(db);

// db.sync().then(() => {
//   console.log("The database is synced!");
//   app.listen(PORT, () =>
//     console.log(`
//   Listening on port ${PORT}
//   http://localhost:5000/
// `)
//   );
// });

// Heroku post-build script
// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

module.exports = app;
