const Sequlize = require('sequelize');
const db = new Sequlize('postgres://localhost:5432/wikistack', {logging: false})

// db.authenticate().
// then(() => {
//   console.log('connected to the database');
// })

const Page = db.define('page', {
    title: {
      type: Sequlize.STRING ,
      allowNull: false
    },
    slug: {
      type: Sequlize.STRING,
      allowNull: false
    },
    content: {
      type: Sequlize.TEXT,
      allowNull: false
    },
    status: {
      type: Sequlize.ENUM('open', 'closed')
    }
})

const User = db.define('user', {
    name: {
      type: Sequlize.STRING,
      allowNull: false
    },
    email: {
       type: Sequlize.STRING,
       allowNull: false,
       validate: {
         isEmail: true
       }
    }
})

module.exports = {
  db,
  Page,
  User
}

