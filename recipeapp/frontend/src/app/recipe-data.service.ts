import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from './recipe/recipe.model';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class RecipeDataService {
  private readonly _appUrl = '/API/recipes/';

  constructor(private http: HttpClient) {}

  get recipes(): Observable<Recipe[]> {
    return this.http
      .get(this._appUrl)
      .pipe(
        map((list: any[]): Recipe[] =>
          list.map(
            item => new Recipe(item.name, item.ingredients, item.created)
          )
        )
      );
  }

  addNewRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http
      .post(this._appUrl, recipe)
      .pipe(
        map(
          (item: any): Recipe =>
            new Recipe(item.name, item.ingredients, item.created)
        )
      );
  }
}
