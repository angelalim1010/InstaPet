module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
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
      defaultValue: "/img/default_student.jpg",
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    // An array of the userIds who liked this post
    likes: {
      type: DataTypes.ARRAY(DataTypes.INTEGER)
    },
    // A string of the post's caption
    caption: {
      type: DataTypes.STRING
    },
    // An array of the commentIds that belong to this post
    comments: {
      type: DataTypes.ARRAY(DataTypes.INTEGER)
    },
    // An array of the tags that belong to this post
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    }
  });

  Post.associate = models => {
    Post.belongsTo(models.User, {
      foreignKey: "userId", // Post uses the userId to uniquely identify each User
      onDelete: "CASCADE"
    });
  };
  return Post;
};
