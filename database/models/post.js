module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    // The userId whom this post belongsTo
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    // A string of the URL containing the image
    imageURL: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    // A string of the post's caption
    caption: {
      type: DataTypes.STRING
    }
  });

  Post.associate = models => {
    // Post.belongsTo(models.User, {
    //   foreignKey: 'userName', // Post uses the userId to uniquely identify each User
    //   onDelete: 'CASCADE'
    // });
    // Post.hasMany(models.Comment, {
    //   foreignKey: 'postId'
    // });
  };
  return Post;
};
