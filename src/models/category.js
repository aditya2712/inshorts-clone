const mongoose = require("mongoose");

const Categories = {
  business: "Business",
  entertainment: "Entertainment",
  general: "General",
  health: "Health",
  science: "Science",
  sports: "Sports",
  technology: "Technology",
};

const favouriteCategorySchema = new mongoose.Schema({
  categories: [String],
});

const FavouriteCategories = mongoose.model(
  "FavouriteCategories",
  favouriteCategorySchema
);

module.exports = {
  Categories,
  FavouriteCategories,
};
