const express = require("express");
const router = express.Router();

// Set Post model
const { Post } = require("../database/models");

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
 * POST ROUTES
 */

//   app.post("/p/", PostsController.create);
//   app.get("/p/", PostsController.list);
//   app.delete("/p/:postId", PostsController.delete);
//   app.put("/p/:postId", PostsController.update);
// };

module.exports = router;
