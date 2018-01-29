var mongoose = require('mongoose');

var RecipeSchema = new mongoose.Schema({
  name: String,
  ingredients: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ingredient'
    }
  ],
  created: Date
});
mongoose.model('Recipe', RecipeSchema);
