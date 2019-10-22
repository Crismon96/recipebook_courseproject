import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  startedEditing = new Subject<number>();
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

  getSingleIngredient(index: number) {
    return this.ingredients[index]
  }

  removeIngredient(oldIngredientIndex: number) {
    this.ingredients.splice(oldIngredientIndex, 1);
    this.shoppinglistChanged.next(this.ingredients);
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.shoppinglistChanged.next(this.ingredients);
  }

  addIngredientsToCart (ingredientsToAdd: Ingredient[]) {
    this.ingredients = this.ingredients.concat(ingredientsToAdd);
  }
}
