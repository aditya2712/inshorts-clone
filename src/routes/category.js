const router = require("express").Router();

const {
  getAllCategories,
  getFavouriteCategories,
  updateFavouriteCategories,
} = require("../controllers/category");

router.get("/all", getAllCategories);
router.get("/favourite/all", getFavouriteCategories);
router.put("/favourite/update", updateFavouriteCategories);

module.exports = router;
