const express = require('express');
const router = express.Router();
const axios = require('axios');
const app = require('../app');
const Article = require("../models/Article.model");
const User = require('../models/User.model')

router.post("/news/article", async (req, res, next) => {
  const { url } = req.body

  try {
    let response = await axios.get("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=Wx5d2t0T8JQplkJsgtGKsjZMaKTNK8Ka")

    let allNews = response.data.results

    let article = allNews.filter((news) => news.url === url)[0]
    console.log(article)
    res.render('news', article)
  } catch (error) {
    console.log(error)
  }
});

router.post("/news/favourite", async (req, res, next) => {
  const { uri } = req.body
  const userId = req.session.currentUser._id;
  try {
    let response = await axios.get("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=Wx5d2t0T8JQplkJsgtGKsjZMaKTNK8Ka")

    let allNews = response.data.results

    let article = allNews.filter((news) => news.uri === uri)[0]

    const favouriteArticle = await Article.create({ title: article.title, abstract: article.abstract, img: article.multimedia[0].url, url: article.url })

    console.log(favouriteArticle)

    await User.findByIdAndUpdate(userId, { $push: { favourites: favouriteArticle._id } })

    res.redirect(`/profile/${userId}`)
  } catch (error) {
    console.log(error)
  }
});

router.post("/news/remove/:id", async (req, res, next) => {
  const userId = req.session.currentUser._id;
  const {id} = req.params;
  try {
     
    await User.findByIdAndUpdate(userId, {$pull: {favourites: id}})
    await Article.findByIdAndRemove(id)

    res.redirect(`/profile/${userId}`)
  } catch (error) {
    console.log(error)
  }
});



module.exports = router;


