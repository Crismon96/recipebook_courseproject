import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  recipes: Recipe[] = [new Recipe("A Test Recipe",
   "This is just a test",
    "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg",
    [new Ingredient("Meat", 5), new Ingredient("Water", 1)]),
     new Recipe("Another Test Recipe",
      "This is just a test",
       "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg",
        [new Ingredient("Möhre", 5), new Ingredient("Salat", 1)])];


  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

  getSingleRecipe(index: number) {
    return this.recipes[index]
  }
}
