const express = require("express");
const morgan = require("morgan");
const { db } = require("./views/models");
const { Page, User } = require("./views/models/index");
const wikiRouter = require('./routes/wiki')
const userRouter = require('./routes/user')

db.authenticate().then(() => {
  console.log("connected to the database");
});

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/stylesheets"));
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.redirect('/wiki')
})

app.use('/wiki', wikiRouter);

const connect = async () => {
  await db.sync({force: true});
};

connect();

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
