import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeFilterPipe } from './recipe-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    IngredientComponent,
    AddRecipeComponent,
    RecipeFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
