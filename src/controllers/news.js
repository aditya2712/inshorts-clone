require("dotenv").config();
const NewsAPI = require("newsapi");

const { FavouriteCategories } = require("../models/category");
const { SavedNewsArticle } = require("../models/news_article");
const { checkIfAlreadySaved } = require("../utils/news");

const newsapi = new NewsAPI(process.env.news_api_key);

const getAllNews = async (req, res) => {
  try {
    const news = await newsapi.v2.topHeadlines({
      language: "en",
      pageSize: 100,
    });
    return res.json(news);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const getFavouriteNews = async (req, res) => {
  try {
    // Returns the list of news from favourite categories
    const favouriteCategory = await FavouriteCategories.findOne({});
    const news = await Promise.all(
      favouriteCategory.categories.map(async (category) => {
        const news = await newsapi.v2.topHeadlines({
          language: "en",
          category,
        });
        return news;
      })
    );
    return res.json(news);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const addSavedNewsArticle = async (req, res) => {
  try {
    const author = req.body.author;
    const title = req.body.title;
    const description = req.body.description;
    const url = req.body.url;
    const urlToImage = req.body.urlToImage;
    const publishedAt = req.body.publishedAt;
    const content = req.body.content;

    // Check if the article already exists with same details
    if (await checkIfAlreadySaved(title, urlToImage, publishedAt)) {
      return res.status(400).json({ message: "News Article already saved" });
    }

    const savedNewsArticle = await SavedNewsArticle.create({
      author: author,
      title: title,
      description: description,
      url: url,
      urlToImage: urlToImage,
      publishedAt: publishedAt,
      content: content,
    });

    return res.json(savedNewsArticle);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const getAllSavedNewsArticles = async (req, res) => {
  try {
    const savedNewsArticles = await SavedNewsArticle.find({});
    return res.json(savedNewsArticles);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const deleteSavedNewsArticle = async (req, res) => {
  try {
    const savedNewsArticle = await SavedNewsArticle.findByIdAndDelete(
      req.params.id
    );
    return res.json(savedNewsArticle);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

module.exports = {
  getAllNews,
  getFavouriteNews,
  addSavedNewsArticle,
  getAllSavedNewsArticles,
  deleteSavedNewsArticle,
};
