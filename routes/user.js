const userRouter = require("express").Router();

userRouter.get('/', async (req, res)=> {
   await res.send('')
});

module.exports = {userRouter};