import { Recipe } from './recipe/recipe.model';
import { Component } from '@angular/core';
import { RecipeDataService } from './recipe-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeDataService]
})
export class AppComponent {
  private _recipes: Recipe[];

  constructor(private _recipeDataService: RecipeDataService) {
    this._recipes = this._recipeDataService.recipes;
  }

  get recipes() {
    return this._recipes;
  }

  newRecipeAdded(recipe) {
    this._recipeDataService.addNewRecipe(recipe);
  }
}
