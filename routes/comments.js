const express = require("express");
const router = express.Router();

// Set Comment model
const { Comment } = require("../database/models");

/**
 * CreateComment endpoint
 * @route POST /comments
 * @desc Create a comment
 * @access Public
 */
router.post("/", async (req, res, next) => {
  try {
    const newComment = await Comment.create(req.body);
    res.status(200).json(newComment);
  } catch (err) {
    next(err);
  }
}); // End CreateComment endpoint

/**
 * FindAllComments endpoint
 * @route GET /comments
 * @desc Find all comments
 * @access Public
 */
router.get("/", async (req, res, next) => {
  try {
    // gets comments in ascending order of id
    const allComments = await Comment.findAll({
      order: [["id", "ASC"]]
    });
    res.status(200).json(allComments);
  } catch (err) {
    next(err);
  }
}); // End FindAllComments endpoint

/**
 * DeleteComment endpoint
 * @route DELETE /comments/:commentId
 * @desc Delete a comment
 * @access Public
 */
router.delete("/:commentId", async (req, res, next) => {
  try {
    await Comment.destroy({
      where: {
        id: req.params.commentId
      }
    });
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
}); // End DeleteComment endpoint

module.exports = router;
