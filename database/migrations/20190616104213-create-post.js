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
        },
        onDelete: "CASCADE",
        references: {
          model: "Users",
          key: "id",
          as: "userId"
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
      },
      // The date when the post was created
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      // The date when the post was last updated
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
