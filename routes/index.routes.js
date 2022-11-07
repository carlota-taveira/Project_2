const express = require('express');
const router = express.Router();
const axios = require('axios');
const app = require('../app');
const Article = require("../models/Article.model");

/* GET home page */
router.get("/", (req, res, next) => {

  axios.get("https://newsdata.io/api/1/news?apikey=pub_13105a4c6d8098baac0485e9f0d09578944ac&language=en")
    .then(response => {
      console.log(response.data.results[0].title);
      res.render("index", { result: response.data.results });
    })

});

/* axios.get("https://newsdata.io/api/1/news?apikey=pub_13105a4c6d8098baac0485e9f0d09578944ac")
.then(response => {
  console.log(response.data.results[0].title);
  res.render("index", { result: response.data.results });
}) */



module.exports = router;
