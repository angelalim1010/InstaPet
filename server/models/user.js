'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: DataTypes.STRING,
    name: DataTypes.STRING,
    profilePicture: DataTypes.STRING,
    bio: DataTypes.STRING,
    posts: DataTypes.ARRAY,
    followers: DataTypes.ARRAY,
    following: DataTypes.ARRAY
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};