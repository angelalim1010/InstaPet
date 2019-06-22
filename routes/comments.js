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
router.post("/", (req, res, next) => {
  return Comment.create(req.body)
    .then(comment => res.status(200).json(comment))
    .catch(err => res.status(400).json(err));
}); // End CreateComment endpoint

/**
 * FindAllComments endpoint
 * @route GET /comments
 * @desc Find all comments
 * @access Public
 */
router.get("/", (req, res, next) => {
  return Comment.findAll({
    order: [["id", "ASC"]]
  })
    .then(comments => res.status(200).json(comments))
    .catch(err => res.status(400).json(err));
}); // End FindAllComments endpoint

/**
 * UpdateComment endpoint
 * @route PUT /comments/:commentId
 * @desc Update a comment
 * @access Public
 */
router.put("/:commentId", (req, res, next) => {
  return Comment.update({
    where: {
      id: req.params.commentId
    }
  })
    .then(comment => res.status(200).json(comment))
    .catch(err => res.status(400).json(err));
}); // End UpdateComment endpoint

/**
 * DeleteComment endpoint
 * @route DELETE /comments/:commentId
 * @desc Delete a comment
 * @access Public
 */
router.delete("/:commentId", (req, res, next) => {
  return Comment.destroy({
    where: {
      id: req.params.commentId
    }
  })
    .then(() => res.status(200).json(req.params.commentId))
    .catch(err => res.status(400).json(err));
}); // End DeleteComment endpoint

module.exports = router;
