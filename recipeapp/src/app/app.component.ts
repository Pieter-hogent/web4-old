import { Recipe } from './recipe/recipe.model';
import { Component } from '@angular/core';
import { RecipeDataService } from './recipe-data.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { distinctUntilChanged } from 'rxjs/operators';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeDataService]
})
export class AppComponent {
  public filterRecipeName$ = new BehaviorSubject<string>('');
  public filterRecipe$ = new BehaviorSubject<string>('');

  constructor(private _recipeDataService: RecipeDataService) {
    this.filterRecipeName$
      .debounceTime(400)
      .distinctUntilChanged()
      .map(val => val.toLowerCase())
      // .filter(val => !val.startsWith('s'))
      .subscribe(val => this.filterRecipe$.next(val));
  }

  get recipes(): Recipe[] {
    return this._recipeDataService.recipes;
  }

  newRecipeAdded(recipe) {
    this._recipeDataService.addNewRecipe(recipe);
  }
}
