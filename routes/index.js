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
   * POST ROUTES
   */

  app.post("/p/", PostsController.create);
  app.get("/p/", PostsController.list);
  app.delete("/p/:postId", PostsController.delete);
  app.put("/p/:postId", PostsController.update);
};


/**
 *  COMMENT ROUTES
 */
app.get("/comments", CommentsController.list);
app.post("/comments", CommentsController.create);
app.delete("/comments/:commentId", CommentsController.delete);


/**
*  LIKES ROUTES
*/
// app.get("/likes", LikesController.list);
// app.post("/likes", LikesController.create);
// app.delete("/likes/:likeId", LikesController.delete);