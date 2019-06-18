const passport = require("passport");
const jwt = require("jsonwebtoken");
const User = require("../models").User;

require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET || "DEFAULT_SECRET";

module.exports = {
  register(req, res, next) {
    passport.authenticate("register", (err, user, info) => {
      if (err) {
        console.log(err);
      }
      if (info != undefined) {
        // If info isn't undefined, that means an error message was returned
        console.log(info);
        res.json(info);
      } else {
        User.findOne({
          where: {
            email: req.body.email
          }
        }).then(user => {
          res.status(200).json(user);
        });
      }
    })(req, res, next); // The (req, res, next) is necessary. The function passport.authenticate() does something, then pipes it to (req, res, next)
  },
  login(req, res, next) {
    passport.authenticate("login", (err, user, info) => {
      console.log("running login authenticate");
      if (err) {
        console.log(err);
      }
      if (info != undefined) {
        // If info isn't undefined, that means an error message was returned
        console.log(info);
        res.json(info);
      } else {
        User.findOne({
          where: {
            email: req.body.email
          }
        }).then(user => {
          const token = jwt.sign(
            {
              id: user.userName
            },
            JWT_SECRET
          );
          res.status(200).json({
            auth: true,
            token: token,
            message: "User found and logged in"
          });
        });
      }
    })(req, res, next); // The (req, res, next) is necessary. The function passport.authenticate() does something, then pipes it to (req, res, next)
  },
  list(req, res, next) {
    return User.findAll({
      order: [["id", "DESC"]]
    })
      .then(users => res.status(200).json(users))
      .catch(err => res.status(400).json(err));
  },
  update(req, res, next) {
    return User.update(req.body, { where: { id: req.params.id } })
      .then(user => res.status(200).json(user))
      .catch(err => res.status(400).json(err));
  },
  destroy(req, res, next) {
    return User.FindByPk(req.params.id).then(user => {
      if (!user) {
        return res.status(400).json({ message: "invalid" });
      } else {
        return user
          .destroy()
          .then(() => res.status(200).json(user))
          .catch(err => res.status(400).json(err));
      }
    });
  }
};
