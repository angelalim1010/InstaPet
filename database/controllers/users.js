const passport = require("passport");
const bcrypt = require("bcryptjs");
const User = require("../models").User;

const BCRYPT_SALT_ROUNDS = 12;

module.exports = {
  create(req, res, next) {
    console.log("create");
    passport.authenticate("register", (err, user, info) => {
      console.log("Doing passport authentication");
      if (err) {
        console.log(err);
      }
      if (info != undefined) {
        // If info isn't undefined, that means an error message was returned
        console.log(info.message);
        res.send(info.message);
      } else {
        req.logIn(user => {
          console.log("Logging in");
          console.log(req.body);
          const data = {
            userName: user.userName,
            password: req.body.password,
            email: req.body.email
          };
          User.create(data)
            .then(user => res.status(200).json(user))
            .catch(err => res.status(400).json(err));
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
