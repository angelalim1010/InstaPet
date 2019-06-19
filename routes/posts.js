const express = require("express");
const router = express.Router();

// Set Post model
const { Post } = require("../database/models");

/**
 * CreatePost endpoint
 * @route POST /p
 * @desc Create a post
 * @access Public
 */
router.post("/", (req, res, next) => {
  return Post.create(req.body)
    .then(post => res.status(200).json(post))
    .catch(err => res.status(400).json(err));
}); // End CreatePost endpoint

/**
 * FindAllPosts endpoint
 * @route GET /p
 * @desc Find all posts
 * @access Public
 */
router.get("/", (req, res, next) => {
  return Post.findAll({
    order: [["id", "DESC"]]
  })
    .then(posts => res.status(200).json(posts))
    .catch(err => res.status(400).json(err));
}); // End FindAllPosts endpoint

/**
 * DeletePost endpoint
 * @route DELETE /p/:postId
 * @desc Delete a post
 * @access Public
 */
router.delete("/:postId", (req, res, next) => {
  return Post.destroy({
    where: {
      id: req.params.postId
    }
  })
    .then(() => res.status(200).json({ message: "Post successfully deleted" }))
    .catch(err => res.status(400).json(err));
}); // End DeletePost endpoint

module.exports = router;
