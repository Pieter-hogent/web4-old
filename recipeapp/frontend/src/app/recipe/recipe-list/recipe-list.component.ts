import { Component, OnInit } from '@angular/core';
import { RecipeDataService } from '../recipe-data.service';
import { Recipe } from '../recipe.model';
import { Subject } from 'rxjs/Subject';
import { HttpErrorResponse } from '@angular/common/http';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public filterRecipeName: string;
  public filterRecipe$ = new Subject<string>();

  public errorMsg: string;

  private _recipes: Recipe[];

  constructor(private _recipeDataService: RecipeDataService) {
    this.filterRecipe$
      .pipe(
        distinctUntilChanged(),
        debounceTime(400),
        map(val => val.toLowerCase())
      )
      .subscribe(val => (this.filterRecipeName = val));
  }

  ngOnInit(): void {
    this._recipeDataService.recipes.subscribe(
      recipes => (this._recipes = recipes),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${
          error.status
        } while trying to retrieve recipes: ${error.error}`;
      }
    );
  }

  get recipes() {
    return this._recipes;
  }

  removeRecipe(recipe: Recipe) {
    this._recipeDataService.removeRecipe(recipe).subscribe(
      item => (this._recipes = this._recipes.filter(val => item.id !== val.id)),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} while removing recipes for ${
          recipe.name
        }: ${error.error}`;
      }
    );
  }
}
