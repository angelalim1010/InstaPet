module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    // A string containing the user's chosen userName. ie. johndoe22
    userName: {
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
    // A string containing the user's chosen displayName. ie. John Doe.
    // Allowed to be left empty/null
    displayName: {
      type: DataTypes.STRING,
      allowNull: true
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
    }
  });

  User.associate = models => {
    // associations can be defined here
    User.hasMany(models.Post, {
      foreignKey: "userId" // Each user can habe multiple posts
    });
  };
  return User;
};
