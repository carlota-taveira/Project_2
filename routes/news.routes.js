const express = require('express');
const router = express.Router();
const axios = require('axios');
const app = require('../app');


router.get("/news/", (req, res, next) => {
  axios.get("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=Wx5d2t0T8JQplkJsgtGKsjZMaKTNK8Ka")
    .then(response => {
      console.log(response.data.results)
      res.render("news", { results: response.data.results });
    })

});

/* router.post('/news/:id', async (req, res, next) => {

  try {
    const newId = req.params.id
    const { newId } = req.body;
  } catch (error) {
    console.log(error);
    next(error);
  }
}); */

module.exports = router; 
