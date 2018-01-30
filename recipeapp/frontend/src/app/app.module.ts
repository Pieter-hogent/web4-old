import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeFilterPipe } from './recipe-filter.pipe';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDataService } from './recipe-data.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    IngredientComponent,
    AddRecipeComponent,
    RecipeFilterPipe,
    RecipeListComponent
  ],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [RecipeDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
