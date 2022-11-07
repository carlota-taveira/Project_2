const express = require('express');
const isLoggedIn = require('../middleware/isLoggedIn');
const router = express.Router();
const axios = require('axios');
const app = require('../app');

router.get("/", (req, res, next) => {

    axios.get("https://newsdata.io/api/1/news?apikey=pub_13105a4c6d8098baac0485e9f0d09578944ac&language=en")
      .then(response => {
        res.render("index", { result: response.data.results });
      })
  
  });
  
