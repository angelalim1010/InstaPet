'use strict';
module.exports = (sequelize, DataTypes) => {
  const Relationships = sequelize.define('Relationships', {
    follower: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNotEmpty: true
      }
    },
    following: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNotEmpty: true
      }
    }
  });
  Relationships.associate = function(models) {
    // associations can be defined here
  };
  return Relationships;
};
