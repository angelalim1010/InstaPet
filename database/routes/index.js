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

  app.post('/api/instaPet', UsersController.create);

  /**
   *  COMMENT ROUTES
   */

  /**
   * POST ROUTES
   */

  // createPost
  app.post('/p/', PostsController.create);

  // fetchAllPosts
  app.get('/p/', PostsController.list);
};
