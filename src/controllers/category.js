const { Categories, FavouriteCategories } = require("../models/category");

const getAllCategories = async (req, res) => {
  return res.json(Categories);
};

const getFavouriteCategories = async (req, res) => {
  const favouriteCategory = await FavouriteCategories.findOne({});
  return res.json(favouriteCategory);
};

const updateFavouriteCategories = async (req, res) => {
  // update or create
  const favouriteCategory = await FavouriteCategories.findOneAndUpdate(
    {},
    { categories: req.body.categories },
    { upsert: true, new: true }
  );
  return res.json(favouriteCategory);
};

module.exports = {
  getAllCategories,
  getFavouriteCategories,
  updateFavouriteCategories,
};
