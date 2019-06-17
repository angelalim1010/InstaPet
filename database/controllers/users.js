const User = require('../models').User;

module.exports = {
  create(req, res) {
    return User.create(req.body)
      .then(user => res.status(201).json(user))
      .catch(err => res.status(400).json(err));
  },
  update(req, res) {
    return User.update(req.body, { where: { id: req.params.id } })
      .then(user => res.status(200).json(user))
      .catch(err => res.status(400).json(err));
  },
  destroy(req, res) {
    return User.FindByPk(req.params.id).then(user => {
      if (!user) {
        return res.status(400).json({ message: 'invalid' });
      } else {
        return user
          .destroy()
          .then(() => res.status(200).json(user))
          .catch(err => res.status(400).json(err));
      }
    });
  }
};
