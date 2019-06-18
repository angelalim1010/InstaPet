const Post = require("../models").Post;

module.exports = {
  create(req, res) {
    console.log(req.body);
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
  },
  update(req, res) {
    return Post.update(req.body, { where: { id: req.params.id } })
      .then(post => res.status(200).json(post))
      .catch(error => res.status(400).json(error));
  },
  delete(req, res) {
    return Post.destroy({ where: { id: req.params.postId } })
      .then(() => res.status(200).send({ message: 'Deleted Post' }))
      .catch(error => res.status(400).json(error));
  }
};
