const express = require('express');
const router = express.Router();
const axios = require('axios');
const app = require('../app');

router.get("/news/", (req, res, next) => {

  /*  axios.get("https://newsdata.io/api/1/news?apikey=pub_13105a4c6d8098baac0485e9f0d09578944ac&language=en")
     .then(response => { */
  res.render("news", /* { result: response.data.results } */);
})

/* router.get("/news/:id", (req, res, next) => {
    const newsId = req.params.id
    axios.get("https://newsdata.io/api/1/news?apikey=pub_13105a4c6d8098baac0485e9f0d09578944ac&language=en")
     .then(response => { 
  res.render("news", /* { result: response.data.results } );
})
    res.render("news", { newsId });
}); */

router.post('/news/:id', async (req, res, next) => {
  
    try {
      const newId = req.params.id
      const { newId } = req.body;
    } catch (error) {
        console.log(error);
        next(error);
    }
});
module.exports = router;



