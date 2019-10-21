import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipebookComponent } from './recipebook/recipebook.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { RecipedetailComponent } from './recipebook/recipedetail/recipedetail.component';
import { RecipesStartComponent } from './recipebook/recipes-start/recipes-start.component';
import { RecipeEditComponent } from './recipebook/recipe-edit/recipe-edit.component';


const routes: Routes = [
  { path: "", redirectTo: "recipes", pathMatch: "full" },
  { path: "recipes", component: RecipebookComponent, children: [
    { path: "", component: RecipesStartComponent },
    { path: "new", component: RecipeEditComponent },
    { path: ":index", component: RecipedetailComponent },
    { path: ":index/edit", component: RecipeEditComponent }
  ]},
  { path: "shoppinglist", component: ShoppinglistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
