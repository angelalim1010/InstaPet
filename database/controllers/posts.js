const Post = require("../models").Post;

module.exports = {
  create(req, res) {
    return Post.create(req.body)
      .then(post => res.status(200).json(post))
      .catch(err => res.status(400).json(err));
  },
  list(req, res) {
    return Post.findAll({
      order: [["id", "DESC"]]
    })
      .then(posts => res.status(200).json(posts))
      .catch(err => res.status(400).json(err));
  }
};
