const passport = require("../../config/passport");
const User = require("../models").User;

module.exports = {
  create(req, res, next) {
    passport.authenticate("register", (err, user, info) => {
      if (err) {
        console.log(err);
      }
      if (info != undefined) {
        // If info isn't undefined, that means an error message was returned
        console.log(info.message);
        res.send(info.message);
      } else {
        req.logIn((user, err) => {
          User.create(req.body)
            .then(user => res.status(200).json(user))
            .catch(err => res.status(400).json(err));
        });
      }
    });
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
