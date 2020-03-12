const Sequlize = require('sequelize');
const db = new Sequlize('postgres://localhost:5432/wikistack')

db.authenticate().
then(() => {
  console.log('connected to the database');
})

const Page = db.define('page', {
    title: Sequlize.STRING,
    slug: Sequlize.STRING,
    content: Sequlize.TEXT,
    status: Sequlize.BOOLEAN
})

const User = db.define('user', {
    name: Sequlize.STRING,
    email: {
       type: Sequlize.STRING,
       validate: {isEmail: true}
    }
})








module.exports = {db}