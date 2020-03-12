const express = require('express');
const wikiRouter = require("express").Router();
const addPage = require('../views/addPage')
const { Page } = require('../views/models/index')

// wikiRouter.use(express.urlencoded({extended: false}));


wikiRouter.get('/', async (req, res)=> {
    await res.send('')
});

wikiRouter.get('/add', async (req, res)=> {
    await res.send(addPage())
});

wikiRouter.post('/', async (req, res)=> {
    console.log('-------------',req.body,'---------------');
        Page.beforeValidate(post => {
        post.slug = req.body.title.split(' ').join('_')
    })
    const page = new Page({
        title: req.body.title,
        content: req.body.content,
        // slug: req.body.title.split(' ').join('_')
    })
    try{
        await page.save();
        res.redirect('/');
    }catch(error){
        next(error)
    }

});


module.exports = wikiRouter;
