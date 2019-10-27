import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>()
  recipes: Recipe[] = [new Recipe("A Test Recipe",
   "This is just a test",
    "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg",
    [new Ingredient("Meat", 5), new Ingredient("Water", 1)]),
     new Recipe("Another Test Recipe",
      "This is just a test",
       "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg",
        [new Ingredient("Möhre", 5), new Ingredient("Salat", 1)])];


  constructor() { }

  putRecipes(fetchedRecipes: Recipe[]) {
    this.recipes = fetchedRecipes;
    this.recipesChanged.next(this.recipes.slice())
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getSingleRecipe(index: number) {
    return this.recipes[index]
  }

  addRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
    this.recipesChanged.next(this.recipes.slice())
  }

  updateRecipe(updatedRecipe: Recipe, index: number) {
    this.recipes[index] = updatedRecipe;
    this.recipesChanged.next(this.recipes.slice())
  }

  deleteRecipe(deletedIndex: number) {
    console.log("delete method", deletedIndex)
    this.recipes.splice(deletedIndex, 1)
    console.log(this.recipes)
    this.recipesChanged.next(this.recipes.slice())
  }
}
