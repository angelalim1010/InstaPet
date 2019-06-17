const {db, User} = require('./server/db')

const seed = async () => {
  try {
    await db.sync({force: true})
    await User.create({
      email: 'cody@email.com',
      password: '12345',
    })
    console.log(`
      Seed success!
    `)
    db.close()
  } catch (err) {
    console.error(`
      Oh noes!
    `)
    console.error(err.stack)
    db.close()
  }
}

seed()
