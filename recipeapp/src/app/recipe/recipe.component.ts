import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  private _recipe: Recipe;

  constructor() {
    this._recipe = new Recipe('spaghetti');
    this._recipe.addIngredient('tomato', 0.75, 'liter');
    this._recipe.addIngredient('onion', 2);
    this._recipe.addIngredient('minced meat', 500, 'grams');
  }

  get recipe(): Recipe {
    return this._recipe;
  }

  ngOnInit() {}
}
