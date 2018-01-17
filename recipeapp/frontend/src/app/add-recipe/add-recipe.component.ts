import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  @Output() public newRecipe = new EventEmitter<Recipe>();
  constructor() {}

  ngOnInit() {}

  addRecipe(newRecipeName: HTMLInputElement): boolean {
    const recipe = new Recipe(newRecipeName.value);
    this.newRecipe.emit(recipe);
    return false;
  }
}
