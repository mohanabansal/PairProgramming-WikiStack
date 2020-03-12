const express = require("express");
const morgan = require("morgan");
// const views = require("./views")
const { db } = require("./views/models");
const { Page, User } = require("./views/models/index");
const router = require('./routes/routes');

db.authenticate().then(() => {
  console.log("connected to the database");
});

const app = express();

app.use(morgan("dev"));

app.use(express.static(__dirname + "/stylesheets"));

// app.use( router)

const connect = async () => {
  await db.sync();
};

connect();

app.get("/", async (req, res) => {
  await res.send("");
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
