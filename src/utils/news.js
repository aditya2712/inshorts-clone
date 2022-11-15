const { SavedNewsArticle } = require("../models/news_article");

const checkIfAlreadySaved = async (title, urlToImage, publishedAt) => {
  const savedNewsArticle = await SavedNewsArticle.findOne({
    title,
    urlToImage,
    publishedAt,
  });

  if (savedNewsArticle) {
    return savedNewsArticle;
  }
  return false;
};

const addSavedFlag = async (news_articles) => {
  // Add a flag to each news article to indicate if it is already saved
  // For each news article passed in the array, check if it is already saved
  // If it is already saved, add a flag to the news article
  news_articles = await Promise.all(
    news_articles.map(async (news_article) => {
      const saved = await checkIfAlreadySaved(
        news_article.title,
        news_article.urlToImage,
        news_article.publishedAt
      );
      if (saved) {
        news_article.saved = true;
        news_article._id = saved._id;
      } else {
        news_article.saved = false;
      }
      return news_article;
    })
  );
  return news_articles;
};

module.exports = { checkIfAlreadySaved, addSavedFlag };
