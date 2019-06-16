"use strict";
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("Posts", {
      // The postId
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
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
      },
      // The date when the post was created
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      // The date when the post was updated/edited
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: (queryInterface /* , DataTypes */) => {
    return queryInterface.dropTable("Posts");
  }
};
