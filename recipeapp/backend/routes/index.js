var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let Recipe = mongoose.model('Recipe');

router.get('/API/recipes/', function(req, res, next) {
  Recipe.find(function(err, recipes) {
    if (err) {
      return next(err);
    }
    res.json(recipes);
  });
});

router.post('/API/recipes/', function(req, res, next) {
  console.log(req.body);
  let recipe = new Recipe(req.body);
  recipe.save(function(err, rec) {
    if (err) {
      return next(err);
    }
    res.json(rec);
  });
});

router.get('/API/recipe/:id', function(req, res, next) {
  Recipe.findById(req.params.id, function(err, recipe) {
    if (err) return next(err);
    if (!recipe) return next(new Error('not found ' + req.params.id));
    res.json(recipe);
  });
});

module.exports = router;
