var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let Recipe = mongoose.model('Recipe');
let Ingredient = mongoose.model('Ingredient');
let jwt = require('express-jwt');

let auth = jwt({
  secret: process.env.RECIPE_BACKEND_SECRET
});

router.get('/API/recipes/', function(req, res, next) {
  let query = Recipe.find().populate('ingredients');
  query.exec(function(err, recipes) {
    if (err) {
      return next(err);
    }
    res.json(recipes);
  });
});

router.post('/API/recipes/', auth, function(req, res, next) {
  Ingredient.create(req.body.ingredients, function(err, ings) {
    if (err) {
      return next(err);
    }
    let recipe = new Recipe({ name: req.body.name, created: req.body.created });
    recipe.ingredients = ings;
    recipe.chef = req.user.username;
    recipe.save(function(err, rec) {
      if (err) {
        // remove all just added ingredients, don't bother to check if it worked
        // (we're in "error mode" already)
        Ingredient.remove({ _id: { $in: recipe.ingredients } });
        return next(err);
      }
      res.json(rec);
    });
  });
});

router.param('recipe', function(req, res, next, id) {
  let query = Recipe.findById(id).populate('ingredients');
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

router.delete('/API/recipe/:recipe', auth, function(req, res) {
  Ingredient.remove({ _id: { $in: req.recipe.ingredients } }, function(err) {
    if (err) return next(err);
    req.recipe.remove(function(err) {
      if (err) {
        return next(err);
      }
      res.json(req.recipe);
    });
  });
});

router.post('/API/recipe/:recipe/ingredients', auth, function(req, res, next) {
  let ing = new Ingredient(req.body);

  ing.save(function(err, ingredient) {
    if (err) return next(err);

    req.recipe.ingredients.push(ingredient);
    req.recipe.save(function(err, rec) {
      if (err) return next(err);
      res.json(ingredient);
    });
  });
});

module.exports = router;
