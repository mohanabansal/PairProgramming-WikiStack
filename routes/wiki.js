const express = require("express");
const wikiRouter = require("express").Router();
const addPage = require("../views/addPage");
const wikiPage = require("../views/wikipage");
const mainPage = require("../views/main");
const { Page, User } = require("../views/models/index");

// wikiRouter.use(express.urlencoded({extended: false}));

wikiRouter.get("/", async (req, res, next) => {
  try {
    const posts = await Page.findAll();
    // console.log('*****************', posts)
    await res.send(mainPage(posts));
  } catch (error) {
    next(error);
  }
});

wikiRouter.get("/add", async (req, res) => {
  await res.send(addPage());
});

wikiRouter.post("/", async (req, res, next) => {
  let slug_bak;
  Page.beforeValidate(post => {
    const titleSplit = req.body.title.split(" ");
    if (titleSplit.length > 1) {
      const slug = titleSplit.join("_");
      post.slug = slug.slice(0, slug.length);
    } else {
      post.slug = titleSplit[0];
    }
    slug_bak = post.slug;
  });
  try{
    const authorName = req.body.name;
    const authorEmail = req.body.email;
    // const user = await User.findOrCreate({
    //     where: {
    //       name: authorName,
    //       email: authorEmail
    //     }
    //   });

      const page = new Page({
        title: req.body.title,
        content: req.body.content,
        // slug: req.body.title.split(' ').join('_'),

      });
    //   await page.setAuthor(user);
      await page.save();
    res.redirect(`${slug_bak}`);
  }catch (error) {
    next(error);
  }
});

wikiRouter.get("/:slug", async (req, res, next) => {
  try {
    const post = await Page.findOne({
      where: {
        slug: req.params.slug
      }
    });
    res.send(wikiPage(post));
    // await res.send(wikiPage(post));
    // res.send(wikiPage(post));
  } catch (error) {
    next(error);
  }
});

module.exports = wikiRouter;
