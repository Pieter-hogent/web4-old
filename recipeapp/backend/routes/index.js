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

router.param('recipe', function(req, res, next, id) {
  let query = Recipe.findById(id);
  query.exec(function(err, recipe) {
    if (err) {
      return next(err);
    }
    if (!recipe) {
      return next(new Error('not found ' + id));
    }
    req.recipe = recipe;
    return next();
  });
});

router.get('/API/recipe/:recipe', function(req, res, next) {
  res.json(req.recipe);
});

router.delete('/API/recipe/:recipe', function(req, res, next) {
  req.recipe.remove(function(err) {
    if (err) {
      return next(err);
    }
    res.json(req.recipe);
  });
});
module.exports = router;
