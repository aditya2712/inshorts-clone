const mongoose = require("mongoose");

const savedNewsArticleSchema = new mongoose.Schema({
  author: String,
  title: String,
  description: String,
  url: String,
  urlToImage: String,
  publishedAt: Date,
  content: String,
});

const SavedNewsArticle = mongoose.model(
  "SavedNewsArticle",
  savedNewsArticleSchema
);

module.exports = { SavedNewsArticle };
