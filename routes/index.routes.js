const express = require('express');
const router = express.Router();
const axios = require('axios');
const app = require('../app');
const Article = require("../models/Article.model");

/* GET home page */
router.get("/", (req, res, next) => {

  axios.get("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=Wx5d2t0T8JQplkJsgtGKsjZMaKTNK8Ka")
    .then(response => {
      /*  let news2 = response.data.results.filter((el) => el.image_url != null)
       console.log(news2)  */
      console.log(response.data.results[0].multimedia[0].url)
      res.render("index", { results: response.data.results });
    })

})

/*     res.render('index') */

/* 
axios.get("https://newsdata.io/api/1/news?apikey=pub_13105a4c6d8098baac0485e9f0d09578944ac")
.then(response => {
  console.log(response.data.results[0].title);
  res.render("index", { result: response.data.results });
})  */



module.exports = router;
