import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  @Input() public recipe: Recipe;
  @Output() public deleteRecipe = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit() {}

  removeRecipe() {
    this.deleteRecipe.emit(this.recipe);
  }
}
