import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  @Output() public newRecipe = new EventEmitter<Recipe>();
  private recipe: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.recipe = this.fb.group({
      name: ['risotto', [Validators.required, Validators.minLength(2)]]
    });
  }
  onSubmit() {
    this.newRecipe.emit(new Recipe(this.recipe.value.name));
  }
}
