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

  app.post("/comments", CommentsController.create);
  app.delete("/comments/:userId", CommentsController.delete);

  /**
   * POST ROUTES
   */

  // createPost
  app.post("/p/", PostsController.create);

  // fetchAllPosts
  app.get("/p/", PostsController.list);
};
