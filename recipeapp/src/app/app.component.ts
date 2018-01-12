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
  public filterRecipeName: string;

  constructor(private _recipeDataService: RecipeDataService) {}

  get recipes() {
    return this._recipeDataService.recipes;
  }

  newRecipeAdded(recipe) {
    this._recipeDataService.addNewRecipe(recipe);
  }

  applyFilter(filter: string) {
    this.filterRecipeName = filter;
  }
}
