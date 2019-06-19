const express = require("express");
const router = express.Router();

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
 *  COMMENT ROUTES
 */
// app.get("/comments/:postId", CommentsController.list);
// app.post("/comments", CommentsController.create);
// app.delete("/comments/:commentId", CommentsController.delete);

module.exports = router;
