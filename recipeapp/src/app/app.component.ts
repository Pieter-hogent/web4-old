import { Recipe } from './recipe/recipe.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  newRecipeAdded(recipe) {
    this._recipes.push(recipe);
  }
}
