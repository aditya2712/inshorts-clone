const { Categories, FavouriteCategories } = require("../models/category");

const getAllCategories = async (req, res) => {
  return res.json(Categories);
};

const getFavouriteCategories = async (req, res) => {
  try {
    const favouriteCategory = await FavouriteCategories.findOne({});
    return res.json(favouriteCategory);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const updateFavouriteCategories = async (req, res) => {
  try {
    const favouriteCategory = await FavouriteCategories.findOneAndUpdate(
      {},
      { categories: req.body.categories },
      { upsert: true, new: true }
    );
    return res.json(favouriteCategory);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

module.exports = {
  getAllCategories,
  getFavouriteCategories,
  updateFavouriteCategories,
};
