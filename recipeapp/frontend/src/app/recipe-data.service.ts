import { Injectable } from '@angular/core';
import { Recipe } from './recipe/recipe.model';

@Injectable()
export class RecipeDataService {
  private _recipes = new Array<Recipe>();

  constructor() {
    const recipe1 = new Recipe('spaghetti');
    recipe1.addIngredient('minced meat', 500, 'grams');
    recipe1.addIngredient('tomato', 0.75, 'liter');
    recipe1.addIngredient('onion', 2);

    const recipe2 = new Recipe('risotto');
    recipe2.addIngredient('rice', 200, 'grams');
    recipe2.addIngredient('parmesan', 50, 'grams');

    this._recipes.push(recipe1);
    this._recipes.push(recipe2);
  }

  get recipes() {
    return this._recipes;
  }

  addNewRecipe(recipe: Recipe) {
    this._recipes = [...this._recipes, recipe];
    // this._recipes.push(recipe);
  }
}
