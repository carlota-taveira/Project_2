const express = require('express');
const router = express.Router();
const axios = require('axios');
const app = require('../app');
const Article = require("../models/Article.model");

router.get("/", (req, res, next) => {

  axios.get("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=Wx5d2t0T8JQplkJsgtGKsjZMaKTNK8Ka")
    .then(response => {
      console.log(response.data.results)
      res.render("index", { results: response.data.results });
    })
})

module.exports = router;
