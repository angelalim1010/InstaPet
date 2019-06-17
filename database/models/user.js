module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
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

    email: {
      type: DataTypes.STRING,
      allowNull: true
    },

    password: {
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
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: true,
      defaultValue: []
    },
    // array of userId's
    followers: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: true,
      defaultValue: []
    },
    // array of userId's
    following: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: true,
      defaultValue: []
    }
  });

  User.associate = models => {
    // associations can be defined here
    User.hasMany(models.Post, {
      foreignKey: 'userId' // Each user can habe multiple posts
    });
  };
  return User;
};
