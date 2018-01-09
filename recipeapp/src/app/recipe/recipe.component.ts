import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  name: string;
  ingredients: string[];
  dateAdded: Date;

  constructor() {
    this.name = 'transforms text to titlecase title case';
    this.ingredients = ['tomato', 'minced meat', 'onion', 'celery', 'carrot'];
    this.dateAdded = new Date();
  }

  ngOnInit() {}
}
