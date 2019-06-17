const UsersController = require('../controllers').users;
const CommentsController = require('../controllers').comments;
const PostsController = require('../controllers').posts;

module.exports = app => {
  app.get('/api', (req, res) =>
    res.status(200).send({
      message: 'InstaPet Api test'
    })
  );

  /**
   *  USER ROUTES
   */

  app.get('/api/instaPet/users', UsersController.list);
  app.post('/api/instaPet/users', UsersController.create);
  app.put('/api/instaPet/users/:userId', UsersController.update);
  app.delete('/api/instaPet/users/:userId', UsersController.destroy);

  /**
   *  COMMENT ROUTES
   */

  app.post('/api/instaPet/comments', CommentsController.create);
  app.delete('/api/instaPet/comments/:userId', CommentsController.delete);

  /**
   * POST ROUTES
   */

  // createPost
  app.post('/p/', PostsController.create);

  // fetchAllPosts
  app.get('/p/', PostsController.list);
};
