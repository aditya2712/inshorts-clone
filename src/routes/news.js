const router = require("express").Router();

const {
  getAllNews,
  getFavouriteNews,
  addSavedNewsArticle,
  deleteSavedNewsArticle,
  getAllSavedNewsArticles,
} = require("../controllers/news");

router.get("/all", getAllNews);
router.get("/favourite/all", getFavouriteNews);
router.post("/saved/add", addSavedNewsArticle);
router.delete("/saved/delete/:id", deleteSavedNewsArticle);
router.get("/saved/all", getAllSavedNewsArticles);

module.exports = router;
