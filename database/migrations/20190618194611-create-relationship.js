'use strict';
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Relationships', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
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
  down: (queryInterface, DataTypes) => {
    return queryInterface.dropTable('Relationships');
  }
};
