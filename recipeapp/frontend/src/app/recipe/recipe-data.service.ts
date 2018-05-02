import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from './recipe.model';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Ingredient } from './ingredient/ingredient.model';

@Injectable()
export class RecipeDataService {
  private readonly _appUrl = '/API';

  constructor(private http: HttpClient) {}

  get recipes(): Observable<Recipe[]> {
    return this.http
      .get(`${this._appUrl}/recipes/`)
      .pipe(map((list: any[]): Recipe[] => list.map(Recipe.fromJSON)));
  }

  addNewRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http
      .post(`${this._appUrl}/recipes/`, recipe)
      .pipe(map(Recipe.fromJSON));
  }

  removeRecipe(rec: Recipe): Observable<Recipe> {
    return this.http
      .delete(`${this._appUrl}/recipe/${rec.id}`)
      .pipe(map(Recipe.fromJSON));
  }

  addIngredientToRecipe(ing: Ingredient, rec: Recipe): Observable<Ingredient> {
    const theUrl = `${this._appUrl}/recipe/${rec.id}/ingredients`;
    return this.http.post(theUrl, ing).pipe(map(Ingredient.fromJSON));
  }

  getRecipe(id: string): Observable<Recipe> {
    return this.http
      .get(`${this._appUrl}/recipe/${id}`)
      .pipe(map(Recipe.fromJSON));
  }
}
