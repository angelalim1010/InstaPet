"use strict";
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      profilePicture: {
        type: DataTypes.STRING,
        allowNull: true
      },
      bio: {
        type: DataTypes.STRING,
        allowNull: true
      },
      posts: {
<<<<<<< HEAD
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: true
      },
      followers: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: true
      },
      following: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
=======
        type: DataTypes.ARRAY,
        allowNull: true
      },
      followers: {
        type: DataTypes.ARRAY,
        allowNull: true
      },
      following: {
        type: DataTypes.ARRAY,
>>>>>>> 8bb6a6c... Merge pull request #13 from angelalim1010/Controllers
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
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
