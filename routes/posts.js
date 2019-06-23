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
router.post("/", async (req, res, next) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(200).json(newPost);
  } catch (err) {
    next(err);
  }
}); // End CreatePost endpoint

/**
 * FindAllPosts endpoint
 * @route GET /p
 * @desc Find all posts
 * @access Public
 */
router.get("/", async (req, res, next) => {
  try {
    // gets posts in descending order by id
    const allPosts = await Post.findAll({
      order: [["id", "DESC"]]
    });
    res.status(200).json(allPosts);
  } catch (err) {
    next(err);
  }
}); // End FindAllPosts endpoint

/**
 * DeletePost endpoint
 * @route DELETE /p/:postId
 * @desc Delete a post
 * @access Public
 */
router.delete("/:postId", async (req, res, next) => {
  try {
    await Post.destroy({
      where: {
        id: req.params.postId
      }
    });
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
}); // End DeletePost endpoint

module.exports = router;
