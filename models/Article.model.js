const { Schema, model } = require('mongoose');

const newsSchema = new Schema({
    title: String,
    description: String,
    pubDate: Number,
    category: String,
    country: String,
    language: String,
    cast: [{ type: Schema.Types.ObjectId, ref: "User" }]

},
    {
        timestamps: true,
    })

const Article = model("Article", newsSchema)

module.exports = Article;