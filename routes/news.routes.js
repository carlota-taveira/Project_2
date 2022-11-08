const express = require('express');
const router = express.Router();
const axios = require('axios');
const app = require('../app');

/*  router.get("/news", (req, res, next) => {

  axios.get("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=Wx5d2t0T8JQplkJsgtGKsjZMaKTNK8Ka")
     .then(response => { 
  res.render("news", { result: response.data.results }) ;
})
})


router.get("/news/:id", (req, res, next) => {
    const newsId = req.params.id
    axios.get("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=Wx5d2t0T8JQplkJsgtGKsjZMaKTNK8Ka")
     .then(response => { 
  res.render("news", { result: response.data.results } );
})
    res.render("news", { newsId });
}); 

router.post('/news/:id', async (req, res, next) => {
  
    try {
      const newId = req.params.id
      const { newId } = req.body;
    } catch (error) {
        console.log(error);
        next(error);
    }
});  
 */


module.exports = router; 
