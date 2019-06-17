"use strict";
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("Users", {
      // The userId
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      // A string containing the user's chosen userName. ie. johndoe22
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      // A string containing the user's chosen displayName. ie. John Doe
      displayName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      // A string containing the user's email
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      // An encrypted string containing the user's password
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      // A string containing the imageURL to the user's profilePicture
      profilePicture: {
        type: DataTypes.STRING,
        allowNull: true
      },
      // A string containing the user's bio
      bio: {
        type: DataTypes.STRING,
        allowNull: true
      },
      // An array of postIds that this user created
      posts: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false,
        defaultValue: []
      },
      // An array of userIds that follow this user
      followers: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false,
        defaultValue: []
      },
      // An array of userIds that this user follows
      following: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false,
        defaultValue: []
      },
      // The date when the user was created
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      // The date when the user was last updated
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: (queryInterface /* , DataTypes */) => {
    return queryInterface.dropTable("Users");
  }
};
