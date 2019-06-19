const express = require("express");
const router = express.Router();

// Set Comment model
const { Comment } = require("../database/models");

/**
 * FindAllComments endpoint
 * @route GET /comments
 * @desc Find all comments
 * @access Public
 */
router.get("/", (req, res, next) => {
  return Comment.findAll({
    order: [["id", "DESC"]]
  })
    .then(comments => res.status(200).json(comments))
    .catch(err => res.status(400).json(err));
}); // End FindAllComments endpoint

/**
 * CreateComment endpoint
 * @route POST /comments
 * @desc Create a comment
 * @access Public
 */
router.post("/", (req, res, next) => {
  return Comment.create(req.body)
    .then(comment => res.status(200).json(comment))
    .catch(err => res.status(400).json(err));
}); // End CreateComment endpoint

/**
 * DeleteComment endpoint
 * @route POST /comments/:commentId
 * @desc Delete a comment
 * @access Public
 */
router.delete("/", (req, res, next) => {
  return Comment.destroy({
    where: {
      id: req.params.commentId
    }
  })
    .then(() =>
      res.status(200).json({ message: "Comment successfully deleted" })
    )
    .catch(err => res.status(400).json(err));
}); // End DeleteComment endpoint

module.exports = router;
