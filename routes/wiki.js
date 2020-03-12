const wikiRouter = require("express").Router();
const addPage = require('../views/addPage')

wikiRouter.get('/', async (req, res)=> {
    await res.send('')
});

wikiRouter.post('/', async (req, res)=> {
    await res.send('')
});

wikiRouter.get('/add', async (req, res)=> {
    await res.send(addPage)
});


module.exports = {wikiRouter};