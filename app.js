const express = require("express");
const morgan = require('morgan');
// const views = require("./views")
const {db} = require('./views/models');

db.authenticate().
then(() => {
  console.log('connected to the database');
})

const app = express();

app.use(morgan('dev'))

app.use(express.static(__dirname + "/stylesheets"))

app.get("/", async (req, res) => {
    await res.send('')
})


app.listen(3000,() => {
    console.log("Listening to port 3000")
} )