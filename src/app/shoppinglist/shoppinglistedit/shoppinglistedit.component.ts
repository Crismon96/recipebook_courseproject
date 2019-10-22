import { Component, OnInit, Output, EventEmitter, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.scss']
})
export class ShoppinglisteditComponent implements OnInit {
  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editedItem: Ingredient;

  @ViewChild('f', {static: false}) slForm: NgForm;
  @Output() newIngredientAdded = new EventEmitter<Ingredient>()
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.subscription = this.shoppingService.startedEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editItemIndex = index;
      this.editedItem = this.shoppingService.getSingleIngredient(this.editItemIndex);
      this.slForm.setValue({name: this.editedItem.name, amount: this.editedItem.amount})
    })
  }
  onAddItem = (form: NgForm) => {
    const newIngredient = new Ingredient(form.value.name, form.value.amount)
    if (this.editMode === true) {
      this.shoppingService.updateIngredient(this.editItemIndex, newIngredient);
    } else this.shoppingService.addIngredient(newIngredient)
    this.editMode = false;
  }

  onClear() {
    this.slForm.reset()
    this.editMode = false;
  }

  onDelete() {
    this.shoppingService.removeIngredient(this.editItemIndex)
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
