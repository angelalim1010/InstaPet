const Comment = require('../models').Comment;

module.exports = {
  create(req, res) {
    return Comment.create(req.body)
      .then(comment => res.status(200).json(comment))
      .catch(err => res.status(400).json(err));
  },
  list(req, res) {
    return Comment.findAll({
      order: [["id", "ASC"]]
    })
      .then(comments => res.status(200).json(comments))
      .catch(err => res.status(400).json(err));
  },
  delete(req, res) {
    return Comment.destroy({ where: { id: req.params.commentId } })
      .then(() => res.status(200).json(req.params.commentId))
      .catch(err => res.status(400).json(err));
  }
};
