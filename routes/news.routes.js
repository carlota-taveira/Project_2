const express = require('express');
const router = express.Router();
const axios = require('axios');
const app = require('../app');

router.get("/news", (req, res, next) => {

  /*  axios.get("https://newsdata.io/api/1/news?apikey=pub_13105a4c6d8098baac0485e9f0d09578944ac&language=en")
     .then(response => { */
  res.render("news", { result: response.data.results });
})

module.exports = router;



