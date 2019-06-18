const UsersController = require("../controllers").users;
const CommentsController = require("../controllers").comments;
const PostsController = require("../controllers").posts;

module.exports = app => {
  /**
   *  USER ROUTES
   */

  app.get("/accounts/", UsersController.list);
  app.post("/accounts/", UsersController.create);
  app.put("/accounts/:userId", UsersController.update);
  app.delete("/accounts/:userId", UsersController.destroy);

  /**
   *  COMMENT ROUTES
   */
  app.get("/comments/:postId", CommentsController.list);
  app.post("/comments", CommentsController.create);
  app.delete("/comments/:commentId", CommentsController.delete);

  /**
   * POST ROUTES
   */

  app.post("/p/", PostsController.create);
  app.get("/p/", PostsController.list);
  app.delete("/p/:postId", PostsController.delete);
  app.put("/p/:postId", PostsController.update);
};
