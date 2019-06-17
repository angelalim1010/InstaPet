'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: {
      type: DataTypes.STRING,
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
    Comment.belongsTo(models.User, {
      foreignKey: 'userId', // A user can leave multiple comments
      onDelete: 'CASCADE'
    });
  };
  return Comment;
};
