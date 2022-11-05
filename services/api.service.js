const axios = require('axios');
const app = require('../app');
const { response } = require('../app');

axios.get("https://newsdata.io/api/1/news?apikey=pub_13105a4c6d8098baac0485e9f0d09578944ac")
    .then(response => {
        console.log(response.data);
    })


