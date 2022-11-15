const { SavedNewsArticle } = require("../models/news_article");

const checkIfAlreadySaved = async (title, urlToImage, publishedAt) => {
  const savedNewsArticle = await SavedNewsArticle.findOne({
    title,
    urlToImage,
    publishedAt,
  });

  if (savedNewsArticle) {
    return true;
  }
  return false;
};

module.exports = { checkIfAlreadySaved };
