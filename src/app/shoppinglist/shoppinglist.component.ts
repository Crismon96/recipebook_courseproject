import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingService } from './shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.scss']
})
export class ShoppinglistComponent implements OnInit {
  private ingredients: Ingredient[];
  private isChangeSub: Subscription;
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.isChangeSub = this.shoppingService.shoppinglistChanged.subscribe((ingredientsarray: Ingredient[]) => {
      this.ingredients = ingredientsarray;
    })
  }

  newIngredient = (ingredient: Ingredient) => {
    this.ingredients.push(ingredient)
  }

  onEditIngredient(index: number) {
    this.shoppingService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.isChangeSub.unsubscribe();
  }
}
