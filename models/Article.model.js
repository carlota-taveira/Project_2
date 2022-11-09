const { Schema, model } = require('mongoose');

const newsSchema = new Schema({
    title: String,
    img: String,
    abstract: String,
    url: String
},
    {
        timestamps: true,
    })

const Article = model("Article", newsSchema)

module.exports = Article;