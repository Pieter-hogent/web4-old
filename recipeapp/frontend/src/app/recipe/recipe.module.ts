import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipeDataService } from './recipe-data.service';
import { RecipeComponent } from './recipe/recipe.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeFilterPipe } from './recipe-filter.pipe';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeResolver } from './recipe-resolver';
import { httpInterceptorProviders } from '../http-interceptors/index';

const routes = [
  { path: 'list', component: RecipeListComponent },
  { path: 'add', component: AddRecipeComponent },
  {
    path: ':id',
    component: RecipeDetailComponent,
    resolve: { recipe: RecipeResolver }
  }
];

@NgModule({
  declarations: [
    RecipeComponent,
    IngredientComponent,
    AddRecipeComponent,
    RecipeListComponent,
    RecipeFilterPipe,
    RecipeDetailComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [httpInterceptorProviders, RecipeDataService, RecipeResolver]
})
export class RecipeModule {}
