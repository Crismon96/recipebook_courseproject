import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  shoppinglistChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [new Ingredient("Apples", 5), new Ingredient("Bananas", 15)]


  constructor() { }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.shoppinglistChanged.next(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients;
  }

  addIngredientsToCart (ingredientsToAdd: Ingredient[]) {
    this.ingredients = this.ingredients.concat(ingredientsToAdd);
  }
}
