const UsersController = require("../controllers").users;
const CommentsController = require("../controllers").comments;
const PostsController = require("../controllers").posts;

module.exports = app => {
  /**
   * POST ROUTES
   */

  // createPost
  app.post("/p/", PostsController.create);

  // fetchAllPosts
  app.get("/p/", PostsController.list);
};
