var mongoose = require('mongoose');

var RecipeSchema = new mongoose.Schema({
  name: String,
  ingredients: [String],
  created: Date
});
mongoose.model('Recipe', RecipeSchema);
