import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  @Output() public newRecipe = new EventEmitter<Recipe>();
  private recipe: FormGroup;

  constructor() {}

  ngOnInit() {
    this.recipe = new FormGroup({
      name: new FormControl('risotto')
    });
  }
  onSubmit() {
    this.newRecipe.emit(new Recipe(this.recipe.value.name));
  }
}
