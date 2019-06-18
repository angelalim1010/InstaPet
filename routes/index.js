const UsersController = require("../database/controllers/").users;
const CommentsController = require("../database/controllers/").comments;
const PostsController = require("../database/controllers/").posts;

module.exports = app => {
  /**
   *  USER ROUTES
   */

  app.get("/accounts/", UsersController.list);
  app.post("/accounts/registerUser", UsersController.register);
  app.post("/accounts/loginUser", UsersController.login);
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
