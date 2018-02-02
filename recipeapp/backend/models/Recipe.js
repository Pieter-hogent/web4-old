let mongoose = require('mongoose');

let RecipeSchema = new mongoose.Schema({
  name: String,
  ingredients: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ingredient'
    }
  ],
  created: { type: Date, default: Date.now },
  chef: String
});

mongoose.model('Recipe', RecipeSchema);
