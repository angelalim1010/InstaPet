const Comment = require('../models').Comment;

module.exports = {
  create(req, res) {
    return Comment.create(req.body)
      .then(comment => res.status(200).json(comment))
      .catch(err => res.status(400).json(err));
  },
  delete(req, res) {
    return Comment.destroy({ where: { id: req.params.userId } })
      .then(() =>
        res.status(200).json({ message: 'Comment deleted Successfully' })
      )
      .catch(err => res.status(400).json(err));
  }
};
