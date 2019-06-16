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

	  profilePicture: { 
		  type: DataTypes.STRING, 
		  allowNull: true
	  },

	  bio: {
		  type: DataTypes.STRING, 
		  allowNull: true
	  },

	  posts: { 
		 type: DataTypes.ARRAY,
		  allowNull: true
	  },

	  followers: {
		  type: DataTypes.ARRAY, 
		  allowNull: true
	  },

	  following: { 
		  type: DataTypes.ARRAY, 
		  allowNull: true 
	  },
  });


  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
