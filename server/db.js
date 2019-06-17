const Sequelize = require('sequelize');
const db = new Sequelize('postgres://tkqponue:xI_4iT1Fuoei6MWQpxtIONGl-JBaS1dI@raja.db.elephantsql.com:5432/tkqponue');

const User = db.define('users', {
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING
  }
})

module.exports = {
  db,
  User
}
