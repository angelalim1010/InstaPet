'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    postId: {
      type: DataTypes.NUMBER,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  });

  Comment.associate = models => {
    // Comment.belongsTo(models.User, {
    //   foreignKey: 'userName', // A user can leave multiple comments
    //   onDelete: 'CASCADE'
    // });
    // Comment.belongsTo(models.Post, {
    //   // A comment can have multiple posts
    //   foreignKey: 'postId',
    //   onDelete: 'CASCADE'
    // });
  };
  return Comment;
};
