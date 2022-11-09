const express = require('express');
const router = express.Router();
const axios = require('axios');
const app = require('../app');
const Article = require("../models/Article.model");

router.get("/news/:id", (req, res, next) => {
  axios.get("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=Wx5d2t0T8JQplkJsgtGKsjZMaKTNK8Ka")
    .then(response => {
      console.log(response.data.results.id)
      res.render("news", { results: response.data.results.id });
    })
});

 
module.exports = router; 
