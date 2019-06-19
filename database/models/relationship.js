'use strict';
module.exports = (sequelize, DataTypes) => {
  const Relationship = sequelize.define('Relationship', {
    follower: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNotEmpty: true
      }
    },
    following: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNotEmpty: true
      }
    }
  });
  Relationship.associate = function (models) {
    // associations can be defined here
  };
  return Relationship;
};
